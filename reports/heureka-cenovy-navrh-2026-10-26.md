# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-26

Vstup: `premiumstore-sk_2026-10-26_07-25.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6128**
- Návrh **zvýšiť** cenu: **1009** produktov
- Návrh **znížiť** cenu: **449** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4670** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **12**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **260**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (1009)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **956.90 €** | 6.0 % | **43.8 %** | 957.00 € | cena podľa najlacnejšieho iného predajcu |
| Eliptický trenažér MERACH MR-E33B4 | 485.50 € | **675.00 €** | 31.4 % | **82.7 %** | 675.27 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 444.50 € | **626.00 €** | 23.9 % | **74.5 %** | 626.07 € | cena podľa najlacnejšieho iného predajcu |
| Sada panelov Moza Racing FMP18 | 974.00 € | **1146.90 €** | 22.7 % | **44.5 %** | 1147.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 441.00 € | **613.50 €** | 30.4 % | **81.5 %** | 613.77 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **656.90 €** | 6.0 % | **43.4 %** | 657.00 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový bicykel MERACH MR-S19 | 426.00 € | **583.00 €** | 31.4 % | **79.9 %** | 583.02 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, strieborná) | 271.90 € | **416.90 €** | 23.6 % | **89.6 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, čierna) | 273.50 € | **416.90 €** | 23.4 % | **88.1 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet Prime SE | 310.50 € | **448.90 €** | 23.0 % | **77.8 %** | 449.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 251.90 € | **386.00 €** | 25.7 % | **92.6 %** | 386.22 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server TERRAMASTER F6-424 NAS s procesorom ... | 746.00 € | **878.90 €** | 22.1 % | **43.9 %** | 879.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec M3 Pro s procesorom i5-13500H, 16 GB ... | 725.00 € | **856.90 €** | 23.4 % | **45.9 %** | 857.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší HiFiMAN RE2000 Pro Gold | 421.00 € | **539.90 €** | 22.5 % | **57.1 %** | 539.97 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 542.50 € | **656.90 €** | 19.0 % | **44.1 %** | 657.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 191.50 € | **298.90 €** | 23.6 % | **93.0 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 191.50 € | **298.90 €** | 23.9 % | **93.4 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 191.50 € | **298.90 €** | 23.6 % | **93.0 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **398.90 €** | 6.1 % | **44.4 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 191.50 € | **296.90 €** | 23.6 % | **91.7 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 28.0 % | **44.3 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **888.90 €** | 29.5 % | **43.8 %** | 889.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BM201SG3DBG | 280.90 € | **368.90 €** | 8.1 % | **41.9 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer CB300C RGB | 391.50 € | **478.90 €** | 20.3 % | **47.2 %** | 479.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu MOVA P10 | 480.00 € | **566.90 €** | 19.8 % | **41.4 %** | 567.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **298.90 €** | 37.3 % | **93.4 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 562.50 € | **647.50 €** | 20.6 % | **38.9 %** | 647.60 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **296.90 €** | 37.0 % | **91.7 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HUION Note E X50 | 418.00 € | **502.50 €** | 22.5 % | **47.3 %** | 502.90 € | cena podľa najlacnejšieho iného predajcu |
| LaserPecker 2 – základná verzia | 440.50 € | **518.90 €** | 16.7 % | **37.5 %** | 519.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 2 ks LED svietidiel NEEWER RGB1200 60 W V4 | 370.90 € | **446.90 €** | 20.5 % | **45.1 %** | 447.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BPS6737E04DBG | 404.00 € | **478.50 €** | 6.9 % | **26.6 %** | 478.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 | 422.90 € | **496.90 €** | 20.7 % | **41.8 %** | 497.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **266.90 €** | 6.1 % | **45.6 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LE300Bi | 316.90 € | **388.90 €** | 20.9 % | **48.3 %** | 389.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 15 | 337.00 € | **408.90 €** | 35.0 % | **63.8 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 9 | 337.00 € | **408.90 €** | 35.0 % | **63.8 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 14 | 337.00 € | **406.90 €** | 35.0 % | **63.0 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 6 | 337.00 € | **406.90 €** | 35.0 % | **63.0 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 8 | 337.00 € | **406.90 €** | 35.0 % | **63.0 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **368.90 €** | 41.1 % | **73.3 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **368.90 €** | 40.8 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **368.90 €** | 40.8 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 40.8 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 320.50 € | **388.90 €** | 16.8 % | **41.8 %** | 389.00 € | cena podľa najlacnejšieho iného predajcu |
| Concept IDV5160wh | 349.50 € | **417.50 €** | 6.9 % | **27.7 %** | 417.85 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-3 Thunderbolt 5 | 324.00 € | **388.90 €** | 22.4 % | **46.9 %** | 389.00 € | cena podľa najlacnejšieho iného predajcu |
| ANCEL L5000 PRO – diagnostický detektor únikov pre a... | 289.90 € | **348.90 €** | 22.2 % | **47.0 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 203.50 € | **259.50 €** | 25.1 % | **59.6 %** | 259.73 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB200B | 233.00 € | **288.90 €** | 20.0 % | **48.8 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Priemyselná infračervená termokamera Habotest HT820 | 281.50 € | **336.90 €** | 18.2 % | **41.5 %** | 337.00 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 5800mAh 60C 18.5V 5S1P Lipo Battery Pack wi... | 65.00 € | **117.00 €** | 20.4 % | **116.7 %** | 117.09 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny magnetický filtračný systém Freewell K2 | 305.00 € | **355.00 €** | 22.5 % | **42.5 %** | 355.47 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **186.90 €** | 49.7 % | **103.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 48.6 % | **72.6 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 49.1 % | **73.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer CB200C RGB | 240.90 € | **288.90 €** | 20.6 % | **44.7 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| LED videolampa GODOX ML80Bi | 241.00 € | **288.90 €** | 20.9 % | **44.9 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **238.90 €** | 6.1 % | **32.3 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LK10 s väčším formátom | 249.50 € | **296.90 €** | 20.5 % | **43.4 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultimea Aura S5T | 212.00 € | **258.90 €** | 18.2 % | **44.3 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 49.1 % | **72.2 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RBB1200 | 192.50 € | **238.90 €** | 20.0 % | **49.0 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z22P PRO s 22-palcovým doty... | 351.90 € | **398.00 €** | 22.3 % | **38.3 %** | 398.01 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120P | 183.00 € | **228.90 €** | 10.2 % | **37.8 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAXL6 | 503.00 € | **548.00 €** | 6.9 % | **16.5 %** | 548.10 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (čier... | 96.90 € | **141.00 €** | 17.3 % | **70.7 %** | 141.33 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **818.90 €** | 35.5 % | **43.2 %** | 819.00 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 233.50 € | **276.90 €** | 22.6 % | **45.4 %** | 277.00 € | cena podľa najlacnejšieho iného predajcu |
| Sušič vlasov MOVA Flip 10 | 206.00 € | **246.90 €** | 40.5 % | **68.3 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTX1 Pro S, Twin | 281.90 € | **322.50 €** | 7.1 % | **22.5 %** | 322.62 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 176.90 € | **217.50 €** | 10.7 % | **36.1 %** | 217.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada na nabíjanie akčnej kamery SJCAM SJ30 (čierny) | 278.00 € | **316.90 €** | 26.3 % | **44.0 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie 10102847 FS150B | 201.50 € | **238.90 €** | 21.6 % | **44.1 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera SJCAM M60, 3 kanály (čierny) | 202.00 € | **238.90 €** | 22.8 % | **45.2 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **305.50 €** | 6.2 % | **20.3 %** | 305.70 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 233.00 € | **268.90 €** | 14.7 % | **32.4 %** | 268.99 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **349.00 €** | 15.0 % | **28.0 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-72CB4xyP200-LBHA keramická varná doska ... | 114.50 € | **148.90 €** | 21.9 % | **58.5 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 27.9 % | **43.2 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER GR18C Okrúhly LED panel pre bočné osvetlenie | 203.00 € | **236.90 €** | 24.9 % | **45.7 %** | 237.00 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 791.50 € | **825.00 €** | 10.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED svietidlo Neewer MS60C RGB | 173.00 € | **205.90 €** | 20.6 % | **43.6 %** | 205.95 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener pre motocykle ANCEL MT310 | 296.00 € | **328.90 €** | 21.6 % | **35.1 %** | 328.95 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **208.00 €** | 46.8 % | **74.2 %** | 208.23 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Air Projektor | 204.50 € | **236.90 €** | 22.3 % | **41.7 %** | 237.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash HM1 | 67.50 € | **99.50 €** | 20.1 % | **77.0 %** | 99.51 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Minix SF10T s uhlopriečkou 10,5" | 126.90 € | **158.90 €** | 23.8 % | **55.0 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (biela) | 177.50 € | **209.00 €** | 10.6 % | **30.2 %** | 209.22 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (čierny) | 177.50 € | **209.00 €** | 10.6 % | **30.2 %** | 209.22 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) + 7 ventilá... | 70.50 € | **101.90 €** | 16.9 % | **68.9 %** | 101.97 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W03,23,8" | 205.50 € | **236.90 €** | 22.6 % | **41.4 %** | 237.00 € | cena podľa najlacnejšieho iného predajcu |
| Anamorfný objektív Freewell 1,33x s bajonetom 17 mm | 205.90 € | **236.90 €** | 13.8 % | **30.9 %** | 237.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (biela) + 4 ventil... | 83.50 € | **114.50 €** | 20.7 % | **65.5 %** | 114.89 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 208.50 € | **238.90 €** | 15.1 % | **31.9 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ20 – nabíjací set (čierny) | 208.50 € | **238.90 €** | 24.0 % | **42.1 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B1-EU | 264.00 € | **294.00 €** | 23.8 % | **37.9 %** | 294.39 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **144.50 €** | 6.2 % | **33.6 %** | 144.72 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN D1Air | 159.90 € | **188.90 €** | 23.0 % | **45.3 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| SJCAM M60 palubná kamera, 2 kanály (čierny) | 178.00 € | **206.90 €** | 22.8 % | **42.8 %** | 207.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mop PROSCENIC F10 Ultra | 190.00 € | **218.90 €** | 22.9 % | **41.6 %** | 219.00 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Fagor 4LVF-638ADIT | 455.90 € | **484.50 €** | 5.1 % | **11.7 %** | 484.72 € | cena podľa najlacnejšieho iného predajcu |
| Stojan JMGO pre modely N1S SE, Nano a PicoPlay+ | 120.50 € | **148.90 €** | 22.7 % | **51.6 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava ultratenkého LED kruhového osvetlenia Neewer... | 178.50 € | **206.90 €** | 25.9 % | **46.0 %** | 207.00 € | cena podľa najlacnejšieho iného predajcu |
| LED trubicové svietidlo NEEWER TL60 20 W | 158.50 € | **186.90 €** | 22.5 % | **44.4 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.50 € | **83.50 €** | 15.3 % | **73.4 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 272.50 € | **300.50 €** | 23.6 % | **36.3 %** | 300.72 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 272.50 € | **300.50 €** | 23.6 % | **36.3 %** | 300.72 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 6.3 % | **32.1 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (čierna) + 4 venti... | 102.00 € | **129.00 €** | 20.7 % | **52.6 %** | 129.03 € | cena podľa najlacnejšieho iného predajcu |
| Stavebná sada robota xTool mBot2 Rover | 348.50 € | **375.50 €** | 23.3 % | **32.8 %** | 375.63 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 466.00 € | **492.90 €** | 20.7 % | **27.6 %** | 492.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD (čierna) + 4 ven... | 65.50 € | **92.00 €** | 17.5 % | **65.0 %** | 92.13 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslovací trenažér Deer Run RW600 (biely) | 324.50 € | **350.50 €** | 23.3 % | **33.1 %** | 350.57 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (biela) | 153.00 € | **178.90 €** | 23.9 % | **44.8 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (čierna) | 153.00 € | **178.90 €** | 23.9 % | **44.8 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 590.50 € | **616.00 €** | 10.2 % | **15.0 %** | 616.17 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Ranger Dash cam GPS WiFi 4K Motorbike | 171.50 € | **196.90 €** | 23.4 % | **41.7 %** | 197.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **64.00 €** | 7.0 % | **76.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Tlačiareň štítkov NIIMBOT M3 (biela) | 149.90 € | **175.00 €** | 24.4 % | **45.2 %** | 175.28 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera SJCAM M60 (čierny) | 144.00 € | **168.90 €** | 23.5 % | **44.8 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY470 so 4 ventilátormi ... | 122.00 € | **146.90 €** | 19.7 % | **44.2 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-22KW... | 354.50 € | **378.90 €** | 39.0 % | **48.5 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Projector Blitzwolf, BW-V8, 4K, Android OS | 143.00 € | **166.90 €** | 20.6 % | **40.8 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón Freewell Genius Rig pre iPhone 17 ... | 123.00 € | **146.90 €** | 16.7 % | **39.3 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-B -6072 WiFi Smart Digital Lock Black | 103.50 € | **126.90 €** | 25.6 % | **53.9 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A156W04T s uhlopriečkou 15,6" | 113.50 € | **136.90 €** | 22.8 % | **48.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistič okien PROSCENIC Win10pro | 146.00 € | **168.90 €** | 23.5 % | **42.8 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A185W03,18,5" | 144.00 € | **166.90 €** | 22.7 % | **42.2 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Fén ANLAN Platinum Series | 77.00 € | **99.50 €** | 14.8 % | **48.3 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W05T 14" prenosný monitor | 107.00 € | **128.90 €** | 22.7 % | **47.8 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiová lampa GODOX ML40Bi | 105.00 € | **126.90 €** | 20.8 % | **46.0 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB4xyzf-CS 4-zónová indukčná varná doska | 137.00 € | **158.90 €** | 24.0 % | **43.8 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **156.90 €** | 36.2 % | **57.9 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 105.50 € | **126.90 €** | 23.0 % | **47.9 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDIN38646D | 489.50 € | **510.90 €** | 7.0 % | **11.7 %** | 510.91 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 297.90 € | **319.00 €** | 15.0 % | **23.2 %** | 319.36 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 862 Senior Radio | 112.50 € | **133.50 €** | 9.0 % | **29.4 %** | 133.52 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 134.50 € | **155.50 €** | 25.8 % | **45.5 %** | 155.56 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátorový vysávač ULTENIC U18 Pro | 138.00 € | **158.90 €** | 22.9 % | **41.5 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX ES30 pre e-šport | 146.00 € | **166.90 €** | 25.3 % | **43.2 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Sekvenčná prevodovka PXN | 148.00 € | **168.90 €** | 17.0 % | **33.5 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120 | 167.00 € | **187.50 €** | 12.9 % | **26.8 %** | 187.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 118.50 € | **138.90 €** | 17.6 % | **37.8 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (biely) | 108.50 € | **128.90 €** | 20.4 % | **43.1 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CA077 Univerzálny držiak na fotoaparát | 86.90 € | **106.90 €** | 25.8 % | **54.7 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 129.50 € | **149.50 €** | 20.4 % | **39.0 %** | 149.65 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418 PRO + 7 ventilátoro... | 79.50 € | **99.50 €** | 18.0 % | **47.7 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Štartér motora ANCEL BS200 | 119.00 € | **138.90 €** | 23.3 % | **43.9 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP400R RGB | 137.00 € | **156.90 €** | 25.0 % | **43.1 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (čierna) + 6 venti... | 63.90 € | **83.50 €** | 20.0 % | **56.9 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **156.90 €** | 15.9 % | **32.4 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **106.50 €** | 45.2 % | **77.5 %** | 106.89 € | cena podľa najlacnejšieho iného predajcu |
| Fagor 4LVF-637ADIT | 439.00 € | **458.00 €** | 7.0 % | **11.7 %** | 458.09 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **89.50 €** | 6.7 % | **35.5 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **118.90 €** | 31.4 % | **56.4 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT262E – bezkontaktný detektor poradia fáz | 90.00 € | **108.90 €** | 16.8 % | **41.4 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 108.00 € | **126.90 €** | 22.3 % | **43.7 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91701R | 339.90 € | **358.50 €** | 5.8 % | **11.6 %** | 358.88 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT2302 Digitálny tester zemného odporu | 118.50 € | **136.90 €** | 17.3 % | **35.6 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W05,14" | 88.50 € | **106.90 €** | 23.3 % | **48.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 160.50 € | **178.90 €** | 26.2 % | **40.7 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Solac LV1301 | 33.50 € | **51.50 €** | 17.2 % | **80.2 %** | 51.59 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – súprava „... | 90.90 € | **108.90 €** | 22.8 % | **47.1 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 34.50 € | **52.50 €** | 20.1 % | **82.7 %** | 52.77 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 76.00 € | **94.00 €** | 17.2 % | **45.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Kaderník 4 v 1 ANLAN 05-ACFS41-02E | 79.00 € | **96.90 €** | 22.3 % | **50.1 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 134.00 € | **151.90 €** | 12.1 % | **27.0 %** | 152.00 € | cena podľa najlacnejšieho iného predajcu |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 61.90 € | **79.50 €** | 14.9 % | **47.6 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFGV8080 Softbox | 62.00 € | **79.50 €** | 24.2 % | **59.2 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač CE-ZM1902M-SV (strieborný) | 76.50 € | **94.00 €** | 22.9 % | **51.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Beko Mezikus NPSKM | 41.50 € | **58.90 €** | 14.5 % | **62.5 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **92.00 €** | 36.0 % | **67.3 %** | 92.13 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 29.90 € | **47.00 €** | 6.2 % | **67.0 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W03T 14" prenosný monitor | 109.90 € | **126.90 €** | 23.0 % | **42.0 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK351+ 4 ventilátory (bi... | 44.00 € | **61.00 €** | 16.9 % | **62.1 %** | 61.38 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R20BT 2.0 (čierne) | 62.50 € | **79.50 €** | 46.4 % | **86.2 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT371 | 67.00 € | **84.00 €** | 17.2 % | **47.0 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 358.90 € | **375.50 €** | 25.6 % | **31.5 %** | 375.89 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 368.50 € | **385.00 €** | 25.1 % | **30.7 %** | 385.28 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 111.00 € | **127.50 €** | 23.5 % | **41.9 %** | 127.86 € | cena podľa najlacnejšieho iného predajcu |
| MOES WC-YH-LS Motor na rolety s Wi-Fi | 57.50 € | **74.00 €** | 18.0 % | **51.9 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **61.00 €** | 34.1 % | **83.4 %** | 61.38 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 150.50 € | **166.90 €** | 25.8 % | **39.5 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DPX90 (čierna) + 3 venti... | 58.00 € | **74.00 €** | 18.4 % | **51.0 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2119 PRO na ovládanie letu | 78.00 € | **94.00 €** | 15.3 % | **38.9 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **210.50 €** | 6.2 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Odšťavovač AMZCHEF CE-ZM1919 (čierny) | 103.00 € | **118.90 €** | 22.6 % | **41.5 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI HS-02A F 100 W inteligentná spájkovačka | 98.90 € | **114.50 €** | 7.5 % | **24.4 %** | 114.70 € | cena podľa najlacnejšieho iného predajcu |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 112.00 € | **127.50 €** | 14.4 % | **30.2 %** | 127.82 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS4 štartér do auta | 84.00 € | **99.50 €** | 24.8 % | **47.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W9 | 163.50 € | **178.90 €** | 22.8 % | **34.3 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **64.00 €** | 6.1 % | **38.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Retro blesk GODOX Lux Junior II S | 78.90 € | **94.00 €** | 20.4 % | **43.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 330.50 € | **345.50 €** | 6.9 % | **11.7 %** | 345.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **136.90 €** | 26.2 % | **41.7 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 33.5 % | **65.0 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| xTool Codey Rocky – vzdelávacia verzia – vzdelávací ... | 160.50 € | **175.00 €** | 23.1 % | **34.3 %** | 175.14 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey S7 s kamerou s dosahom 1... | 128.00 € | **142.50 €** | 18.5 % | **32.0 %** | 142.67 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 37.7 % | **69.7 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **77.00 €** | 40.6 % | **73.2 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-AZ-EM1501-SV s piestom (strieborný) | 104.50 € | **118.90 €** | 22.4 % | **39.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Photo Studio PULUZ 80 cm (PU5083EU) | 94.50 € | **108.90 €** | 16.9 % | **34.8 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 59.90 € | **74.00 €** | 25.6 % | **55.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **46.50 €** | 7.2 % | **53.4 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2440G1-EU (sivá) | 142.50 € | **156.50 €** | 24.9 % | **37.2 %** | 156.86 € | cena podľa najlacnejšieho iného predajcu |
| Reflektor GODOX RFT-25S | 75.50 € | **89.50 €** | 24.7 % | **47.8 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Okružná píla NAC AKU CS-165-LI-ST2-20V | 111.00 € | **124.90 €** | 14.0 % | **28.3 %** | 124.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava osvetlenia Softbox 10102773 700 W, 3 ks | 105.00 € | **118.90 €** | 26.5 % | **43.3 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **71.00 €** | 33.8 % | **65.5 %** | 71.22 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT3000 44,4 Wh štartér | 66.00 € | **79.50 €** | 25.1 % | **50.7 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – Powerbanka | 66.00 € | **79.50 €** | 22.0 % | **47.0 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič vody Darkflash DN 360 (biely) | 71.00 € | **83.50 €** | 20.5 % | **41.7 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Selfie stick TELESIN with ball head for action cameras | 15.00 € | **27.50 €** | 20.5 % | **120.9 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing Vision GS RS064 (PC) | 756.00 € | **768.50 €** | 19.3 % | **21.3 %** | 768.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6401BCE | 180.50 € | **193.00 €** | 9.2 % | **16.7 %** | 193.50 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V802 PRO 12000mah návnada loď (čierna) | 142.50 € | **154.90 €** | 22.6 % | **33.3 %** | 154.98 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar PCD-499 BT Discman CD/MP3 s BT | 46.90 € | **59.00 €** | 13.8 % | **43.2 %** | 59.19 € | cena podľa najlacnejšieho iného predajcu |
| Lampa monitora BlitzWolf BW-CML6 | 51.90 € | **64.00 €** | 22.6 % | **51.2 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-11KW... | 324.90 € | **336.90 €** | 40.6 % | **45.8 %** | 337.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (biela) + 3 vent... | 80.00 € | **92.00 €** | 17.6 % | **35.2 %** | 92.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 PRO (čierna) + 6 ve... | 47.50 € | **59.50 €** | 16.3 % | **45.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Phone Cage PGY ProShot pre iPhone 17 Pro Max | 67.50 € | **79.50 €** | 26.0 % | **48.4 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady Mobile+ Kit | 67.50 € | **79.50 €** | 26.2 % | **48.6 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK418ECB4 | 331.50 € | **343.50 €** | 7.0 % | **10.8 %** | 343.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Nočné svetlo D1 Matter Smart na nočný stolík | 62.00 € | **74.00 €** | 20.4 % | **43.7 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **136.90 €** | 35.4 % | **48.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXRA2501E | 104.90 € | **116.50 €** | 9.9 % | **22.1 %** | 116.90 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 330.00 € | **341.50 €** | 7.9 % | **11.6 %** | 341.80 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO G7 44,4 Wh štartér | 48.00 € | **59.50 €** | 14.9 % | **42.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 48.00 € | **59.50 €** | 20.6 % | **49.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **61.00 €** | 32.6 % | **62.7 %** | 61.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **61.00 €** | 40.9 % | **72.9 %** | 61.38 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 447 ADW | 407.90 € | **419.00 €** | 7.0 % | **9.9 %** | 419.28 € | cena podľa najlacnejšieho iného predajcu |
| Sada flexibilného osvetlenia Neewer BH40C s dvoma ra... | 148.90 € | **160.00 €** | 21.5 % | **30.5 %** | 160.12 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Shoulder Bag Sunnylife for RS 4 | 24.50 € | **35.50 €** | 21.4 % | **75.9 %** | 35.55 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife AQX-20 pre Mavic 4 PRO & RC 2 c | 58.50 € | **69.50 €** | 19.4 % | **41.8 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C500. | 73.00 € | **84.00 €** | 28.4 % | **47.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Ateliérové osvetlenie NEEWER BASICS SL90C | 43.00 € | **54.00 €** | 22.9 % | **54.3 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| GameSir G7 HE wired controller (black) | 43.00 € | **54.00 €** | 15.1 % | **44.6 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 79.00 € | **89.90 €** | 23.4 % | **40.5 %** | 89.98 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 65.00 € | **75.90 €** | 9.5 % | **27.9 %** | 75.99 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 65.00 € | **75.90 €** | 15.6 % | **35.0 %** | 75.99 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 71.00 € | **81.90 €** | 8.5 % | **25.1 %** | 81.99 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (biele) | 96.00 € | **106.90 €** | 25.9 % | **40.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (čierne) | 96.00 € | **106.90 €** | 25.9 % | **40.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (oranžové) | 96.00 € | **106.90 €** | 25.9 % | **40.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **62.50 €** | 6.5 % | **28.3 %** | 62.56 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 15.90 € | **26.50 €** | 10.2 % | **83.7 %** | 26.61 € | cena podľa najlacnejšieho iného predajcu |
| KMP H125 (CZ101AE) | 11.90 € | **22.50 €** | 12.9 % | **113.5 %** | 22.73 € | cena podľa najlacnejšieho iného predajcu |
| Filter 1-5 stop Freewell Sherpa True Color VND pre i... | 68.90 € | **79.50 €** | 15.1 % | **32.8 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 14.50 € | **25.00 €** | 12.8 % | **94.5 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| Candy CDG1S514ESH | 236.00 € | **246.50 €** | 7.8 % | **12.6 %** | 246.63 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Charles i4 Plus White | 101.50 € | **112.00 €** | 10.8 % | **22.2 %** | 112.40 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra (12-dielna) | 139.50 € | **149.90 €** | 11.8 % | **20.1 %** | 149.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **126.90 €** | 36.4 % | **48.1 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 51.00 € | **61.00 €** | 27.6 % | **52.6 %** | 61.01 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT96425VD | 264.00 € | **274.00 €** | 7.6 % | **11.7 %** | 274.02 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FN619EAW6 | 538.90 € | **548.90 €** | 6.0 % | **8.0 %** | 549.00 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CB60B Dvojfarebné 70 W LED štúdiové osvetlenie | 126.00 € | **136.00 €** | 21.5 % | **31.1 %** | 136.22 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFS 7469 W EE | 350.00 € | **360.00 €** | 7.0 % | **10.1 %** | 360.27 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma G83 (čierna) | 49.50 € | **59.50 €** | 22.8 % | **47.6 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash EMT850 (čierny) | 59.50 € | **69.50 €** | 16.5 % | **36.1 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 49.50 € | **59.50 €** | 12.4 % | **35.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-Q29 8MP Wi-Fi IP kamera s dvoma objektívmi | 44.00 € | **54.00 €** | 20.0 % | **47.3 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **256.90 €** | 38.4 % | **43.9 %** | 257.00 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **99.50 €** | 42.1 % | **57.6 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **146.90 €** | 49.6 % | **60.0 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **89.50 €** | 33.5 % | **49.4 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24010-56 | 39.00 € | **48.50 €** | 6.8 % | **32.8 %** | 48.72 € | cena podľa najlacnejšieho iného predajcu |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 345.00 € | **354.50 €** | 5.0 % | **7.9 %** | 354.81 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (biela) | 54.00 € | **63.50 €** | 15.9 % | **36.3 %** | 63.84 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022300 | 133.00 € | **142.50 €** | 8.7 % | **16.5 %** | 142.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 PRO (biela) + 6 ven... | 50.00 € | **59.50 €** | 16.9 % | **39.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V050 Moro, 12 000 mAh | 80.00 € | **89.50 €** | 22.4 % | **36.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 4500mAh 6S1P 22.2V 60C HardCase RC c... | 84.50 € | **94.00 €** | 31.9 % | **46.8 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1018900 Pákový kávovar | 123.50 € | **132.90 €** | 8.6 % | **16.9 %** | 132.95 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LIB60420CL | 264.50 € | **273.90 €** | 7.9 % | **11.7 %** | 273.92 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na televízor Perlgear PGLF8B-N1 | 44.90 € | **54.00 €** | 23.9 % | **49.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 6.9 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **246.90 €** | 23.4 % | **28.1 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 48.0 % | **81.4 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **49.00 €** | 30.6 % | **60.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 56.7 % | **92.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.50 €** | 6.3 % | **17.4 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie NEEWER CB60 RGB, 70 W, CRI 97+ | 166.50 € | **175.50 €** | 20.9 % | **27.4 %** | 175.66 € | cena podľa najlacnejšieho iného predajcu |
| Girmi IM2101 | 121.50 € | **130.50 €** | 8.6 % | **16.7 %** | 130.84 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 57 | 135.00 € | **144.00 €** | 12.6 % | **20.1 %** | 144.35 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8405A | 174.50 € | **183.50 €** | 5.0 % | **10.5 %** | 183.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (biela) | 65.00 € | **74.00 €** | 20.3 % | **36.9 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| 2 v 1 Diagnostic Scanner OBD2 and Battery Tester Anc... | 50.90 € | **59.50 €** | 22.7 % | **43.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2440P1-EU (ružová) | 130.90 € | **139.50 €** | 24.3 % | **32.4 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 36.50 € | **45.00 €** | 11.1 % | **36.9 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu |
| Concept ETV8360bcN | 519.50 € | **528.00 €** | 7.0 % | **8.8 %** | 528.39 € | cena podľa najlacnejšieho iného predajcu |
| Water Fountain for pets 3.2l Rojeco | 31.50 € | **40.00 €** | 26.0 % | **60.0 %** | 40.47 € | cena podľa najlacnejšieho iného predajcu |
| Merač elektromagnetického poľa Habotest HT627 | 40.50 € | **49.00 €** | 15.4 % | **39.6 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre modely E30 Ultra/P10 Ultra | 18.50 € | **27.00 €** | 15.3 % | **68.2 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 60cm LED stan bez tienidla 3380 lúmenov | 45.50 € | **54.00 €** | 22.2 % | **45.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| MSI Cyborg 15 (A13VE-2217CZ) | 984.50 € | **993.00 €** | 5.0 % | **5.9 %** | 993.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 65.50 € | **74.00 €** | 12.0 % | **26.5 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine TAM8 (ružový) | 90.50 € | **98.90 €** | 24.3 % | **35.9 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko Mezikus PCSKM | 60.50 € | **68.90 €** | 12.4 % | **28.0 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **77.90 €** | 31.5 % | **46.9 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 2800mAh 22.2V 60C 6S1P Lipo Battery ... | 65.90 € | **74.00 €** | 48.3 % | **66.6 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY85X8F2 | 220.00 € | **228.00 €** | 7.8 % | **11.7 %** | 228.05 € | cena podľa najlacnejšieho iného predajcu |
| Midland G9 Pro, PMR+LPD, single | 91.90 € | **99.90 €** | 5.4 % | **14.6 %** | 99.95 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 218.50 € | **226.50 €** | 7.7 % | **11.6 %** | 226.75 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V020, 12 000 mAh | 143.00 € | **151.00 €** | 24.4 % | **31.3 %** | 151.30 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa Neewer RGB168, 60 W, 2500–8500 K | 143.00 € | **151.00 €** | 18.2 % | **24.8 %** | 151.35 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2416B1 Tréningový stroj na lyžovanie | 61.50 € | **69.50 €** | 24.7 % | **40.9 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač VEXILAR C9 s vertikálnou konštrukciou | 76.00 € | **84.00 €** | 21.0 % | **33.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro – štandardná sada | 66.00 € | **74.00 €** | 22.1 % | **36.9 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **54.00 €** | 33.0 % | **55.7 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **136.90 €** | 35.4 % | **43.5 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 23-60" Perlesmith PSTVMC06 | 51.90 € | **59.50 €** | 23.9 % | **42.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8401SE | 122.90 € | **130.50 €** | 6.7 % | **13.3 %** | 130.76 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Ice Machine 651 | 100.00 € | **107.50 €** | 12.4 % | **20.8 %** | 107.71 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6AC V2 | 56.00 € | **63.50 €** | 23.1 % | **39.6 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta 3v1 RH5A32E0 | 118.00 € | **125.50 €** | 9.8 % | **16.7 %** | 125.72 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2016100 EQUA Kuchyňská váha | 19.00 € | **26.50 €** | 8.2 % | **50.9 %** | 26.79 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný statív Neewer LT35 z uhlíkových vlákien s o... | 267.00 € | **274.50 €** | 25.5 % | **29.0 %** | 274.86 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 52.00 € | **59.50 €** | 25.2 % | **43.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 52.00 € | **59.50 €** | 25.2 % | **43.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (čierna) | 31.00 € | **38.50 €** | 14.9 % | **42.7 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 11.1V 3S1P 60C HardCase 15# ... | 52.00 € | **59.50 €** | 47.5 % | **68.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 35.1 % | **45.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8571 | 171.90 € | **179.00 €** | 5.2 % | **9.5 %** | 179.31 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BO6737E02XK | 218.00 € | **225.00 €** | 8.1 % | **11.5 %** | 225.20 € | cena podľa najlacnejšieho iného predajcu |
| Zariadenie na zoštíhlenie tela ANLAN 02-AXTY31-02A | 46.50 € | **53.50 €** | 27.2 % | **46.3 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S30 nabíjacia stanica 6 v 1 4xUSB-C + 2... | 40.50 € | **47.50 €** | 21.8 % | **42.9 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MSS815MAQUA-UN – 4-dielna sada inteligentných... | 52.50 € | **59.50 €** | 26.4 % | **43.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 35.50 € | **42.50 €** | 20.7 % | **44.5 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 30.4 % | **44.9 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **106.90 €** | 23.2 % | **31.8 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT6000 99,9 Wh štartér | 130.00 € | **136.90 €** | 25.6 % | **32.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Neewer BP66 štúdiový set dve LED lampy + filtre + st... | 40.90 € | **47.50 €** | 22.6 % | **42.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M + 3 ventilátory (... | 41.90 € | **48.50 €** | 23.1 % | **42.5 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 83.90 € | **90.50 €** | 13.3 % | **22.2 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C100PRO (biela) | 72.90 € | **79.50 €** | 25.0 % | **36.3 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T21B1 (čierny) | 134.00 € | **140.50 €** | 23.9 % | **30.0 %** | 140.67 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 41.00 € | **47.50 €** | 10.7 % | **28.2 %** | 47.68 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 53.00 € | **59.50 €** | 12.8 % | **26.7 %** | 59.70 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 864 Senior Radio | 128.00 € | **134.50 €** | 14.4 % | **20.2 %** | 134.73 € | cena podľa najlacnejšieho iného predajcu |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.50 € | **48.00 €** | 13.3 % | **31.1 %** | 48.24 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1009900 | 46.00 € | **52.50 €** | 11.5 % | **27.2 %** | 52.79 € | cena podľa najlacnejšieho iného predajcu |
| LED pásik YEELIGHT Obsid RGBIC YLFWD-0025 | 53.00 € | **59.50 €** | 20.1 % | **34.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR720003 | 31.00 € | **37.50 €** | 16.8 % | **41.3 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 43.00 € | **49.50 €** | 9.8 % | **26.4 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TB0002 Pozadie | 43.00 € | **49.50 €** | 25.8 % | **44.8 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro PGYTECH For Mavic 3 Pro/Mavic 3 Classic/Mavic... | 32.00 € | **38.50 €** | 19.8 % | **44.2 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT692G tester optických vlákien | 34.50 € | **41.00 €** | 17.1 % | **39.2 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na mikrofón Fifine BM88 (ružový) | 41.50 € | **48.00 €** | 23.9 % | **43.3 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 93.50 € | **99.90 €** | 12.5 % | **20.2 %** | 99.99 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2800mAh 14,8V 60C 4S1P LiPo ... | 48.50 € | **54.90 €** | 30.9 % | **48.2 %** | 54.94 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 45.5 % | **79.4 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač Rojeco 3L WiFi verzia Smart Feed (biely) | 38.90 € | **45.00 €** | 20.8 % | **39.7 %** | 45.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 48.50 € | **54.50 €** | 13.8 % | **27.8 %** | 54.53 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 48.50 € | **54.50 €** | 20.3 % | **35.1 %** | 54.53 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXMRA1500E | 84.90 € | **90.90 €** | 6.8 % | **14.3 %** | 91.00 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebný LED svetelný panel GODOX  Litemons LP800Bi | 150.90 € | **156.90 €** | 15.1 % | **19.7 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNDS8 double monitor mount 13-32" | 61.50 € | **67.50 €** | 25.1 % | **37.3 %** | 67.69 € | cena podľa najlacnejšieho iného predajcu |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 103.00 € | **109.00 €** | 22.6 % | **29.8 %** | 109.22 € | cena podľa najlacnejšieho iného predajcu |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 43.00 € | **49.00 €** | 16.4 % | **32.6 %** | 49.25 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire TF02 | 67.50 € | **73.50 €** | 21.6 % | **32.4 %** | 73.80 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER LED pásik – neónový RGB | 73.50 € | **79.50 €** | 25.7 % | **35.9 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na úpravu vlasov ANLAN Miracle | 63.50 € | **69.50 €** | 23.8 % | **35.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Ionizačná kefa na úpravu vlasov ANLAN 05-AZFS41-02A | 35.50 € | **41.50 €** | 24.0 % | **44.9 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT603 (čierna) | 34.50 € | **40.50 €** | 23.8 % | **45.3 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 (čierna) | 31.50 € | **37.50 €** | 16.2 % | **38.3 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BG (zelený) | 31.50 € | **37.50 €** | 23.1 % | **46.5 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BS (strieborný) | 31.50 € | **37.50 €** | 23.1 % | **46.5 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové slúchadlá Maono AU-MH601 | 36.50 € | **42.50 €** | 25.0 % | **45.5 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny statív PGYTECH MANTISPOD Z | 33.50 € | **39.50 €** | 21.4 % | **43.1 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na abdukciu bedra MERACH MR-2519BL1 | 83.50 € | **89.50 €** | 29.0 % | **38.2 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-10 | 27.00 € | **33.00 €** | 14.4 % | **39.8 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 (biela) | 33.00 € | **39.00 €** | 16.8 % | **38.0 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) + 5 ventilá... | 48.00 € | **54.00 €** | 16.9 % | **31.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 186.00 € | **191.90 €** | 11.6 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 41.90 € | **47.50 €** | 9.2 % | **23.8 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Freewell set of 4 ND filters for DJI Osmo Action 5 Pro | 41.90 € | **47.50 €** | 15.7 % | **31.2 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 37.90 € | **43.50 €** | 25.5 % | **44.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 14,8V 30C 4S1P LiPo ... | 38.90 € | **44.50 €** | 41.1 % | **61.4 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| MSI MAG 274CF E20 | 107.90 € | **113.50 €** | 6.3 % | **11.8 %** | 113.69 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS541C10W | 341.50 € | **347.00 €** | 7.0 % | **8.7 %** | 347.02 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitá odsávačka mlieka Grownsy | 33.00 € | **38.50 €** | 21.3 % | **41.6 %** | 38.61 € | cena podľa najlacnejšieho iného predajcu |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **17.00 €** | 6.8 % | **57.9 %** | 17.23 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R05B4 | 209.50 € | **215.00 €** | 22.5 % | **25.7 %** | 215.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 STD | 117.00 € | **122.50 €** | 22.5 % | **28.2 %** | 122.88 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Discovery Gator 10x50 | 48.00 € | **53.50 €** | 14.3 % | **27.4 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 3L automatický dávkovač krmiva v tlačidlovej ... | 34.50 € | **40.00 €** | 18.8 % | **37.7 %** | 40.39 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-01 | 22.00 € | **27.50 €** | 14.1 % | **42.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak batérie SJCAM pre model C300 | 39.00 € | **44.50 €** | 24.2 % | **41.8 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 20.3MM 11 (Złoty) | 28.00 € | **33.50 €** | 22.3 % | **46.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 19,1MM 9 (čierny) | 32.00 € | **37.50 €** | 23.8 % | **45.1 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 11 (čierny) | 37.00 € | **42.50 €** | 24.6 % | **43.1 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 9 (čierny) | 37.00 € | **42.50 €** | 24.6 % | **43.1 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 284.50 € | **290.00 €** | 56.5 % | **59.6 %** | 290.40 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6T (modrý) | 37.00 € | **42.50 €** | 23.0 % | **41.3 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.00 € | **42.50 €** | 13.5 % | **30.4 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie NEEWER BASICS VL67B | 36.00 € | **41.50 €** | 22.3 % | **41.0 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Fotografická taška cez rameno PGYTECH OneGo Pocket S... | 37.00 € | **42.50 €** | 24.7 % | **43.2 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| KOMA RK01 - Univerzální rotační kartáč | 18.50 € | **24.00 €** | 16.1 % | **50.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| MOES WHT-006-GB-WH Wi-Fi termostat pre elektrické kú... | 34.50 € | **40.00 €** | 22.3 % | **41.8 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BB (modrý) | 31.50 € | **37.00 €** | 23.1 % | **44.6 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **146.90 €** | 37.6 % | **42.9 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2011300 | 200.50 € | **205.90 €** | 8.8 % | **11.7 %** | 205.91 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX FH50R | 233.50 € | **238.90 €** | 24.5 % | **27.4 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 1234 | 163.90 € | **169.00 €** | 5.1 % | **8.4 %** | 169.17 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8402A1 | 145.90 € | **151.00 €** | 7.4 % | **11.2 %** | 151.20 € | cena podľa najlacnejšieho iného predajcu |
| Euti Freewell pre Iphone 15 PRO s držiakom 17 mm | 43.00 € | **48.00 €** | 16.6 % | **30.2 %** | 48.06 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Samsung S25 Ultra so 17 mm držiakom | 43.00 € | **48.00 €** | 8.3 % | **20.9 %** | 48.06 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 8301A | 79.00 € | **84.00 €** | 9.9 % | **16.9 %** | 84.06 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 – vysokovýkonný filter | 42.00 € | **47.00 €** | 23.6 % | **38.3 %** | 47.15 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXCSH2001E | 87.50 € | **92.50 €** | 10.0 % | **16.3 %** | 92.80 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 73.50 € | **78.50 €** | 14.3 % | **22.1 %** | 78.84 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre GoPro Hero 13 | 33.50 € | **38.50 €** | 21.6 % | **39.8 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Krytky objektívov Puluz pre kameru Insta360 X5 | 30.50 € | **35.50 €** | 15.3 % | **34.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 20.3MM 11 (black) | 28.50 € | **33.50 €** | 25.4 % | **47.4 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Neweer TL97C RGB LED farebné foto svetlo | 33.50 € | **38.50 €** | 25.2 % | **43.8 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie Puluz 120 W s nastavením far... | 64.50 € | **69.50 €** | 14.7 % | **23.6 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L WiFi verzia Bl Automatický dávkovač krmiva | 38.50 € | **43.50 €** | 25.1 % | **41.3 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 21,6MM 12 (čierny) | 38.00 € | **43.00 €** | 22.8 % | **39.0 %** | 43.43 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter True RMS Habotest H... | 27.00 € | **32.00 €** | 16.8 % | **38.4 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT333BT Mini merač teploty a vlhkosti | 26.00 € | **31.00 €** | 15.6 % | **37.9 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 10 (čierny) | 37.00 € | **42.00 €** | 24.6 % | **41.4 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 12 (čierny) | 37.00 € | **42.00 €** | 24.6 % | **41.4 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 8 (čierny) | 37.00 € | **42.00 €** | 24.6 % | **41.4 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (biela) | 49.00 € | **54.00 €** | 16.7 % | **28.6 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Short-Size Li... | 59.00 € | **64.00 €** | 28.1 % | **39.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitý inteligentný dávkovač krmiva 5 l Oneisall PF10 | 69.00 € | **74.00 €** | 23.9 % | **32.9 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer NutriSpin | 49.00 € | **54.00 €** | 20.3 % | **32.6 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **49.50 €** | 28.8 % | **43.0 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **29.50 €** | 50.7 % | **80.7 %** | 29.72 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **176.90 €** | 42.0 % | **45.9 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **79.50 €** | 28.7 % | **36.7 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **96.90 €** | 21.8 % | **27.9 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná fontána/napájačka pre domáce zvieratá s... | 54.90 € | **59.50 €** | 20.0 % | **30.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| 2-zónový hadicový časovač Rainpoint ITV205 | 28.90 € | **33.50 €** | 21.9 % | **41.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Sky B-4610 zlatý | 65.90 € | **70.50 €** | 11.6 % | **19.4 %** | 70.87 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 440 | 94.50 € | **99.00 €** | 11.6 % | **16.9 %** | 99.08 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 111.00 € | **115.50 €** | 12.3 % | **16.9 %** | 115.61 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9260G | 61.50 € | **66.00 €** | 11.5 % | **19.7 %** | 66.21 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 8501A | 150.50 € | **155.00 €** | 6.5 % | **9.6 %** | 155.28 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24440-56 | 113.50 € | **118.00 €** | 12.2 % | **16.6 %** | 118.35 € | cena podľa najlacnejšieho iného predajcu |
| Programovacia doska xTool mTiny | 40.00 € | **44.50 €** | 23.7 % | **37.7 %** | 44.87 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Telesin CPL/ND8/ND16/ND32 pre Insta3... | 34.00 € | **38.50 €** | 21.9 % | **38.1 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Kompletná sada príslušenstva PULUZ 45 v 1 PKT10 | 35.00 € | **39.50 €** | 8.4 % | **22.4 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6V (ružový) | 27.00 € | **31.50 €** | 23.3 % | **43.8 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom JR-W13 5000 mAh powerbanka s nabíjaním Apple... | 14.00 € | **18.50 €** | 18.9 % | **57.2 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Stolný statív Puluz PU3070GT | 41.00 € | **45.50 €** | 7.3 % | **19.0 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka SUPERFIRE A6 | 27.00 € | **31.50 €** | 17.4 % | **37.0 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 14.50 € | **19.00 €** | 37.9 % | **80.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.50 € | **27.00 €** | 16.7 % | **40.1 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhoľnatého MOES WSS-CO s pripojením c... | 29.50 € | **34.00 €** | 21.4 % | **39.9 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| 3-zónový hadicový časovač RainPoint ITV305 | 49.50 € | **54.00 €** | 23.6 % | **34.9 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNCM2 monitor mount 13-32" | 34.50 € | **39.00 €** | 24.7 % | **41.0 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prsteň COLMI R02, veľkosť 12,21,3 mm (č... | 29.50 € | **34.00 €** | 22.9 % | **41.7 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor ONIKUMA L13 s mikrofónom | 28.50 € | **33.00 €** | 23.5 % | **43.0 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 49.50 € | **54.00 €** | 25.1 % | **36.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| GODOX R200-HC40 mriežka s voštinovým vzorom | 20.50 € | **25.00 €** | 19.2 % | **45.4 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačové ventilátory Darkflash Gauss G24 3 v 1 (bi... | 34.50 € | **38.90 €** | 20.6 % | **36.0 %** | 38.97 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **68.90 €** | 33.6 % | **42.5 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 41.6 % | **48.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **54.00 €** | 32.3 % | **43.7 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.90 € | **65.00 €** | 12.1 % | **19.7 %** | 65.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **64.00 €** | 31.1 % | **39.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 22,4MM 13 (čierny) | 32.90 € | **36.90 €** | 23.7 % | **38.7 %** | 36.93 € | cena podľa najlacnejšieho iného predajcu |
| Súprava StreetGrip Telesin GoPro Hero 9-13 s klietkou | 66.50 € | **70.50 €** | 22.4 % | **29.7 %** | 70.54 € | cena podľa najlacnejšieho iného predajcu |
| TEESA AIR FRYER TSA8046W | 43.00 € | **47.00 €** | 7.2 % | **17.2 %** | 47.09 € | cena podľa najlacnejšieho iného predajcu |
| Prevodovka PXN - usporiadanie H 7+1 | 75.00 € | **79.00 €** | 12.4 % | **18.4 %** | 79.19 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Watch GPS Black | 62.50 € | **66.50 €** | 7.7 % | **14.6 %** | 66.70 € | cena podľa najlacnejšieho iného predajcu |
| Kábel USB-A do Lightning MFI 0,35 m PGYTECH (P-GM-115) | 13.50 € | **17.50 €** | 20.6 % | **56.3 %** | 17.71 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXRA2001E olejový radiátor | 87.50 € | **91.50 €** | 11.6 % | **16.7 %** | 91.72 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC Q200neo | 137.00 € | **141.00 €** | 22.8 % | **26.4 %** | 141.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny decibelomer Habotest HT622B USB A/C | 19.50 € | **23.50 €** | 18.8 % | **43.1 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Monitor mount 13-30" Huanuo HNCM7 | 22.50 € | **26.50 €** | 23.9 % | **45.9 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor DarkFlash S31 ARGB (biely) | 18.50 € | **22.50 €** | 14.0 % | **38.7 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 21.3MM 12 (Black) | 28.50 € | **32.50 €** | 25.9 % | **43.5 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Twarde etui Sunnylife do Neo 2 Motion Fly More Combo | 55.50 € | **59.50 €** | 19.0 % | **27.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier Comfo Flex (biele) | 50.50 € | **54.50 €** | 9.5 % | **18.2 %** | 54.90 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZTRV-PJ-601-MS Inteligentná termostatická hlavica | 26.00 € | **30.00 €** | 21.4 % | **40.1 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Detektor plynu MOES WSS-S-GL s Wi-Fi | 23.00 € | **27.00 €** | 21.4 % | **42.5 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/VND8/UV pre DJI Osmo Action... | 29.00 € | **33.00 €** | 21.3 % | **38.0 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6VR (červený) | 27.00 € | **31.00 €** | 23.3 % | **41.5 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Statív Mini PGYTECH s nadstavcom pre vreckové / akčn... | 28.00 € | **32.00 €** | 23.9 % | **41.6 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 filters Sunnylife MCUV, ND8/16/34/64/128 fo... | 23.00 € | **27.00 €** | 19.6 % | **40.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 45.00 € | **49.00 €** | 12.0 % | **21.9 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky C50i (biele) | 31.00 € | **35.00 €** | 25.1 % | **41.2 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50i (sivé) | 31.00 € | **35.00 €** | 25.1 % | **41.2 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny ramenný popruh Neewer | 70.00 € | **74.00 €** | 28.4 % | **35.8 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| RGB LED lampa NEEWER RGB61 | 26.00 € | **30.00 €** | 22.5 % | **41.3 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Flextail Tiny Helio 700Z (oranžová) | 23.00 € | **27.00 €** | 19.7 % | **40.5 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| myPhone Hammer Boost 2 LTE oranžový | 78.00 € | **81.90 €** | 5.1 % | **10.3 %** | 81.91 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BMX201M2BG | 169.00 € | **172.90 €** | 9.1 % | **11.7 %** | 172.97 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny zvuku Habotest HT602B | 25.12 € | **29.00 €** | 23.8 % | **42.9 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **94.00 €** | 42.9 % | **49.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **218.90 €** | 38.7 % | **41.0 %** | 219.00 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 30cm WiFi/Bluetooth 16M RGBCW Gos... | 22.90 € | **26.50 €** | 22.2 % | **41.4 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 55.90 € | **59.50 €** | 28.8 % | **37.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Girmi IM4701 | 140.90 € | **144.50 €** | 8.9 % | **11.7 %** | 144.53 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **138.90 €** | 36.1 % | **39.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo rádio DAB+ internet rádio - DT06 | 90.90 € | **94.50 €** | 10.4 % | **14.8 %** | 94.66 € | cena podľa najlacnejšieho iného predajcu |
| Sada pedálov PXN PD HM - brzda a plyn (Windows 7/8/1... | 76.90 € | **80.50 €** | 22.6 % | **28.4 %** | 80.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 31.2 % | **43.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **22.50 €** | 33.3 % | **58.1 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS200 PRO TB2 PRO TOPUMP – mini pumpa na bic... | 49.00 € | **52.50 €** | 25.0 % | **34.0 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 146.50 € | **150.00 €** | 8.9 % | **11.5 %** | 150.12 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Opal Titanium BS4950 | 80.50 € | **84.00 €** | 11.9 % | **16.7 %** | 84.14 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 137 | 33.50 € | **37.00 €** | 12.6 % | **24.4 %** | 37.17 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FN619EEW5 | 484.50 € | **488.00 €** | 7.0 % | **7.7 %** | 488.17 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 20.00 € | **23.50 €** | 11.3 % | **30.8 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **51.50 €** | 11.3 % | **19.4 %** | 51.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY75X8F0 | 147.00 € | **150.50 €** | 8.9 % | **11.5 %** | 150.87 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE165 | 59.00 € | **62.50 €** | 7.9 % | **14.3 %** | 62.88 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT206A Digitálny kliešťový merač | 19.00 € | **22.50 €** | 14.5 % | **35.6 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný laserový teplomer Habotest HT650A | 16.00 € | **19.50 €** | 14.7 % | **39.8 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 46.00 € | **49.50 €** | 16.6 % | **25.4 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/ND8/ND16/ND32 pre DJI Osmo ... | 29.00 € | **32.50 €** | 22.5 % | **37.3 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 16.00 € | **19.50 €** | 6.3 % | **29.5 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica ONIKUMA MT501 (biela) | 29.00 € | **32.50 €** | 25.8 % | **41.0 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z18S 18" 100 Hz prenosný herný monitor | 126.00 € | **129.50 €** | 21.6 % | **24.9 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM09 (čierna) | 28.00 € | **31.50 €** | 26.0 % | **41.8 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (biela) | 28.00 € | **31.50 €** | 25.4 % | **41.1 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka 6x USB Blitzwolf BW-S15, QC 3.0,60 W (biela) | 24.00 € | **27.50 €** | 20.9 % | **38.5 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač pre rolety MOES WRS-EUC2-WH-MS | 16.00 € | **19.50 €** | 15.0 % | **40.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Set of 5 Filters Sunnylife ND 8/16/32/64/128 for DJI... | 19.00 € | **22.50 €** | 19.5 % | **41.5 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač Sonoff SPM-Main LAN (ethernet) WiFi | 19.00 € | **22.50 €** | 20.3 % | **42.5 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Reflektor GODOX RFT-4 | 19.00 € | **22.50 €** | 24.2 % | **47.0 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Svetlomet Superfire HL31, typ C | 29.50 € | **33.00 €** | 16.9 % | **30.8 %** | 33.45 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor DarkFlash S31 ARGB (čierny) | 18.50 € | **22.00 €** | 15.1 % | **36.8 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-P67 3MP Wi-Fi IP kamera | 20.50 € | **24.00 €** | 20.1 % | **40.6 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 31.50 € | **35.00 €** | 7.6 % | **19.6 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 45.50 € | **49.00 €** | 13.2 % | **21.9 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| GODOX DPU-130T difúzna tkanina pre dáždnik s priemer... | 19.50 € | **23.00 €** | 25.1 % | **47.6 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| AMICA DI 6401 PSB | 176.50 € | **179.90 €** | 8.9 % | **11.0 %** | 179.92 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **78.90 €** | 6.5 % | **11.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak so studenou päticou Freewell pre Fuji X100VI ... | 36.50 € | **39.90 €** | 11.4 % | **21.8 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100W (čierny) | 48.50 € | **51.90 €** | 26.1 % | **34.9 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 34.1 % | **48.9 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná detská váha Grownsy B12H | 28.90 € | **32.00 €** | 23.5 % | **36.7 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Upevnenie príslušenstva PGYTECH Magic Arm (P-CG-009)... | 18.90 € | **22.00 €** | 21.2 % | **41.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **20.00 €** | 16.2 % | **37.6 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| PXN Z D1 Rukoväť ručnej brzdy | 24.90 € | **28.00 €** | 10.9 % | **24.7 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| GameSir X5 Lite BK – mobilný herný ovládač USB-C, či... | 24.90 € | **28.00 €** | 12.7 % | **26.7 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo modré | 87.90 € | **91.00 €** | 5.1 % | **8.8 %** | 91.48 € | cena podľa najlacnejšieho iného predajcu |
| G3ferrari G4002300 Odstraňovač žmolků | 21.50 € | **24.50 €** | 5.2 % | **19.8 %** | 24.54 € | cena podľa najlacnejšieho iného predajcu |
| Kombinovaná taška Sunnylife pre NEO Motion Fly (073530) | 26.00 € | **29.00 €** | 20.2 % | **34.1 %** | 29.04 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG8401 | 86.00 € | **89.00 €** | 11.9 % | **15.8 %** | 89.07 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO8708W | 74.50 € | **77.50 €** | 12.3 % | **16.8 %** | 77.59 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 49.90 € | **52.90 €** | 17.0 % | **24.0 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 49.90 € | **52.90 €** | 17.0 % | **24.0 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 28.50 € | **31.50 €** | 27.0 % | **40.3 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný hliníkový statív Neewer LT07 s guľovou hlavou | 80.00 € | **83.00 €** | 25.6 % | **30.3 %** | 83.23 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 44.50 € | **47.50 €** | 33.6 % | **42.6 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| MOES WV-LZ-BK Wi-Fi vodovodný ventil (čierny) | 20.00 € | **23.00 €** | 18.1 % | **35.8 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (červené) | 32.50 € | **35.50 €** | 13.5 % | **24.0 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Fontána pre zvieratá / napájačka 1,5 l Rojeco | 17.50 € | **20.50 €** | 22.5 % | **43.6 %** | 20.82 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus DC1 mini orbitrek | 158.00 € | **161.00 €** | 17.7 % | **20.0 %** | 161.34 € | cena podľa najlacnejšieho iného predajcu |
| Súprava strojčekov na strihanie domácich zvierat One... | 44.00 € | **47.00 €** | 28.5 % | **37.3 %** | 47.35 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Ruby Red BS4717 | 40.00 € | **43.00 €** | 10.7 % | **19.0 %** | 43.37 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 136.50 € | **139.50 €** | 8.8 % | **11.2 %** | 139.88 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Joyroom JR-PB2 (biele) | 16.50 € | **19.50 €** | 21.8 % | **44.0 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný detektor dymu MOES WSS-S-SSD-A Wi-Fi | 21.50 € | **24.50 €** | 21.1 % | **37.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 75.50 € | **78.50 €** | 11.9 % | **16.4 %** | 78.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LR15Bi Okrúhle svetlo | 16.50 € | **19.50 €** | 23.2 % | **45.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM07 RGB (čierna) | 25.50 € | **28.50 €** | 27.3 % | **42.3 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZS-B-EU1 ZigBee 1-kanálový vypínač osvetlenia | 17.50 € | **20.50 €** | 21.7 % | **42.6 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Fifine Tank6 (biely) | 73.50 € | **76.50 €** | 23.7 % | **28.7 %** | 76.90 € | cena podľa najlacnejšieho iného predajcu |
| Powerbank OS-Baseus Compact IP 5000 mAh 20 W (blue) | 18.50 € | **21.50 €** | 17.0 % | **35.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov PGYTECH ND-PL 8/16/32/64 pre DJI Mavi... | 15.50 € | **18.50 €** | 18.0 % | **40.8 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát v mobile PGY LinkGo (ružový) | 26.50 € | **29.50 €** | 26.8 % | **41.2 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné reproduktory Onikuma L2 | 14.50 € | **17.50 €** | 18.6 % | **43.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Rozšíriteľný statív Puluz so selfie tyčou | 16.50 € | **19.50 €** | 15.3 % | **36.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| PETKIT PURA MAX 2 Krmivo pre mačky | 25.50 € | **28.50 €** | 24.3 % | **38.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový mikrofón PULUZ PU647B | 24.00 € | **27.00 €** | 12.1 % | **26.1 %** | 27.45 € | cena podľa najlacnejšieho iného predajcu |
| Kryt na toaletu pre mačky Petkit Hood | 33.00 € | **36.00 €** | 23.2 % | **34.4 %** | 36.48 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné púzdro DiCAPac WP-S5 pro fotoaparáty středn... | 80.00 € | **83.00 €** | 11.3 % | **15.5 %** | 83.49 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 32cm WiFi/Bluetooth 16M RGBCW Gos... | 20.00 € | **23.00 €** | 20.1 % | **38.1 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM08 (čierna) | 28.00 € | **31.00 €** | 25.6 % | **39.0 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (čierna) | 28.00 € | **31.00 €** | 25.4 % | **38.9 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZS-B-EU2 Dvojkanálový vypínač osvetlenia ZigBee | 18.00 € | **21.00 €** | 21.1 % | **41.3 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Torras Ostand R Fusion Series Case for iPhone 16 Pro... | 15.00 € | **18.00 €** | 19.8 % | **43.8 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco automatic soap dispenser 400ml | 16.00 € | **19.00 €** | 19.7 % | **42.1 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Ultrazvukový čistič pokožky ANLAN ALCPJ07-02 (biely) | 22.00 € | **25.00 €** | 24.2 % | **41.1 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| UV Superfire HZ01 head flashlight | 20.00 € | **23.00 €** | 13.8 % | **30.9 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire L21 | 16.00 € | **19.00 €** | 14.5 % | **36.0 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná baterka SUPERFIRE D30 | 20.00 € | **23.00 €** | 18.0 % | **35.7 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **45.50 €** | 30.9 % | **40.0 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE145 | 39.00 € | **41.90 €** | 7.0 % | **15.0 %** | 41.91 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický otočný stojan Puluz 30 cm USB (čierny) | 33.00 € | **35.90 €** | 17.3 % | **27.6 %** | 36.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 30.00 € | **32.90 €** | 15.7 % | **26.9 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **126.90 €** | 29.1 % | **32.1 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 27.3 % | **30.1 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **36.00 €** | 33.0 % | **43.8 %** | 36.50 € | cena podľa najlacnejšieho iného predajcu |
| Náramok Colmi M06 Smartband (ružové zlato) | 35.90 € | **38.50 €** | 22.6 % | **31.5 %** | 38.73 € | cena podľa najlacnejšieho iného predajcu |
| San Marco SUPREMO 1 kg zrno | 21.90 € | **24.50 €** | 9.7 % | **22.8 %** | 24.77 € | cena podľa najlacnejšieho iného predajcu |
| Neweer SP-02 rýchloupínací adaptér pre telefón Arca | 22.90 € | **25.50 €** | 28.0 % | **42.5 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.90 € | **20.50 €** | 21.1 % | **38.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.90 € | **18.50 €** | 10.6 % | **28.7 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno ELEGOO ASA (čierne) | 11.90 € | **14.50 €** | 21.8 % | **48.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600R RGB | 144.90 € | **147.50 €** | 24.5 % | **26.8 %** | 147.68 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 246.90 € | **249.50 €** | 22.6 % | **23.9 %** | 249.90 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **40.00 €** | 31.8 % | **40.9 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT65421VC | 126.00 € | **128.50 €** | 8.3 % | **10.5 %** | 128.51 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO727BL | 59.00 € | **61.50 €** | 12.1 % | **16.9 %** | 61.54 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedé drevo 500 ml | 23.00 € | **25.50 €** | 15.1 % | **27.7 %** | 25.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 24.50 € | **27.00 €** | 10.5 % | **21.7 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY Buds HT15 ANC (čierne) | 16.50 € | **19.00 €** | 21.3 % | **39.7 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 35.00 € | **37.50 €** | 27.4 % | **36.5 %** | 37.59 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Rouge BP3443 | 32.00 € | **34.50 €** | 11.1 % | **19.8 %** | 34.59 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 808.00 € | **810.50 €** | 5.6 % | **6.0 %** | 810.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 10.00 € | **12.50 €** | 14.2 % | **42.7 %** | 12.60 € | cena podľa najlacnejšieho iného predajcu |
| Carspa HS-350-48 průmyslový zdroj spínaný 48V 350W | 25.00 € | **27.50 €** | 2.8 % | **13.1 %** | 27.60 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Melobuds A30 (čierne) | 29.00 € | **31.50 €** | 14.7 % | **24.6 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| Lampa na čítanie Yeelight Pura Reading Desk Lamp | 24.00 € | **26.50 €** | 13.4 % | **25.3 %** | 26.65 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón ONIKUMA M-730 (čierny) | 26.00 € | **28.50 €** | 23.3 % | **35.2 %** | 28.65 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA BT883 (biele) | 26.00 € | **28.50 €** | 26.7 % | **38.8 %** | 28.65 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné závesné svetlo Yeelight Crystal | 90.50 € | **93.00 €** | 22.2 % | **25.6 %** | 93.19 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 58.00 € | **60.50 €** | 11.7 % | **16.5 %** | 60.69 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75TKBXC | 71.50 € | **74.00 €** | 13.1 % | **17.1 %** | 74.23 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall X2 + N5 sada na strihanie domácich zvierat | 45.00 € | **47.50 €** | 27.5 % | **34.6 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Bicyklová baterka Superfire BL12 – 4800 mAh, USB, 2 ... | 17.50 € | **20.00 €** | 15.2 % | **31.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015200 Citrusovač Ribera | 46.50 € | **49.00 €** | 13.1 % | **19.2 %** | 49.35 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (sivý) | 12.00 € | **14.50 €** | 15.7 % | **39.8 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender PLA+ (zelený) | 12.00 € | **14.50 €** | 15.7 % | **39.8 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Flexibilný statív pre fotoaparát Neewer TP34 | 19.00 € | **21.50 €** | 24.3 % | **40.6 %** | 21.87 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto Lamborghini Huracán | 30.50 € | **33.00 €** | 14.3 % | **23.6 %** | 33.37 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire C8-H – 1200 lm, USB, 250 m, 5 režimov | 19.00 € | **21.50 €** | 16.3 % | **31.6 %** | 21.87 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 39.00 € | **41.50 €** | 6.3 % | **13.1 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 17.00 € | **19.50 €** | 21.0 % | **38.8 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 86 mm | 24.00 € | **26.50 €** | 13.2 % | **25.0 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 95 mm | 24.00 € | **26.50 €** | 13.2 % | **25.0 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre DJI Osmo Action 5 (modré) | 14.00 € | **16.50 €** | 22.4 % | **44.2 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak MagSafe Fun Shot Grip2 (čierny) | 22.00 € | **24.50 €** | 21.6 % | **35.4 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 13.00 € | **15.50 €** | 18.9 % | **41.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Fotoateliér Puluz PU5025B LED 25cm | 15.00 € | **17.50 €** | 14.3 % | **33.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Zvuková karta Maono G1 Neo (biela) | 47.00 € | **49.50 €** | 20.2 % | **26.6 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Maono G1 Neo Sound Card Black | 47.00 € | **49.50 €** | 18.6 % | **24.9 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (biela) | 21.00 € | **23.50 €** | 26.5 % | **41.5 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač pre rolety MOES WRS-EUC-WH-MS | 13.00 € | **15.50 €** | 15.8 % | **38.0 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W1 | 22.00 € | **24.50 €** | 23.3 % | **37.3 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W3 | 17.00 € | **19.50 €** | 22.2 % | **40.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Onikuma MP006 RGB herná podložka pod myš (čierna) | 12.00 € | **14.50 €** | 21.5 % | **46.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.00 € | **19.50 €** | 8.7 % | **24.7 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Torras Ostand R Fusion pre iPhone 16 Pro Max ... | 16.00 € | **18.50 €** | 25.6 % | **45.2 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro Telesin pre DJI Osmo Action 6 | 24.00 € | **26.50 €** | 21.4 % | **34.1 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Softbox GODOX SB1520, univerzálny typ, 15x20 cm | 12.00 € | **14.50 €** | 23.0 % | **48.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické LED svetlo na selfie NEEWER NL48B | 17.00 € | **19.50 €** | 19.0 % | **36.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER NL48B – Magnetické selfie svetlo (čierne) | 17.00 € | **19.50 €** | 22.3 % | **40.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **18.50 €** | 15.3 % | **33.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire DL01 | 18.00 € | **20.50 €** | 17.4 % | **33.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire TL01-X | 18.00 € | **20.50 €** | 18.0 % | **34.4 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 40.50 € | **43.00 €** | 9.7 % | **16.5 %** | 43.43 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 25.50 € | **28.00 €** | 8.7 % | **19.4 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT122, bezkontaktný tester napätia / tester... | 14.50 € | **17.00 €** | 20.8 % | **41.6 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (červený) | 22.50 € | **25.00 €** | 25.0 % | **38.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (čierny) | 22.50 € | **25.00 €** | 25.0 % | **38.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (oranžový) | 22.50 € | **25.00 €** | 25.0 % | **38.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (ružový) | 22.50 € | **25.00 €** | 25.0 % | **38.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetická rukoväť MagSafe Fun Shot Grip2 (biela) | 22.50 € | **25.00 €** | 22.2 % | **35.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife FP-B978 prepravné puzdro pre DJI Flip | 17.50 € | **20.00 €** | 20.6 % | **37.8 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 16.50 € | **19.00 €** | 21.3 % | **39.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS ONIKUMA TX612 (čierne) | 20.50 € | **23.00 €** | 26.6 % | **42.1 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Flexibilný mini statív NEEWER TP35 s diaľkovým ovlád... | 20.50 € | **23.00 €** | 24.9 % | **40.2 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno CREALITY PLA Jahoda (červená) | 16.50 € | **19.00 €** | 18.0 % | **35.9 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Superfire HL23-S headlamp flashlight, 350lm, USB-C | 13.50 € | **16.00 €** | 17.0 % | **38.7 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire s rozhraním USB-C L24 | 16.50 € | **19.00 €** | 17.7 % | **35.5 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire L6-H – 750 lm, 15W, USB-C, 5 režimov | 18.50 € | **21.00 €** | 18.2 % | **34.2 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Venta H13 & Anti-Formaldehyd set 2er VPE | 67.50 € | **69.90 €** | 12.0 % | **16.0 %** | 70.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **49.50 €** | 35.9 % | **42.7 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 23310-56/RH | 46.90 € | **49.00 €** | 14.4 % | **19.6 %** | 49.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 44.4 % | **49.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Kery B-4660 400W bílý | 35.90 € | **38.00 €** | 12.2 % | **18.7 %** | 38.44 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25400-56/RH | 52.90 € | **55.00 €** | 14.5 % | **19.0 %** | 55.47 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie PGYTECH MANTIS RC M1 pre digitáln... | 17.90 € | **20.00 €** | 25.5 % | **40.2 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell p... | 16.90 € | **19.00 €** | 11.8 % | **25.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-002-33 Reflexný dáždnik | 12.90 € | **15.00 €** | 27.3 % | **48.0 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Dielenská baterka Superfire G21, 650lm, USB | 11.90 € | **14.00 €** | 15.9 % | **36.3 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara fialová | 37.00 € | **39.00 €** | 13.8 % | **20.0 %** | 39.03 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara modrá | 37.00 € | **39.00 €** | 13.8 % | **20.0 %** | 39.03 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A7 bílá | 532.50 € | **534.50 €** | 5.9 % | **6.3 %** | 534.54 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 101.50 € | **103.50 €** | 9.8 % | **12.0 %** | 103.54 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa GlidePro PV2600 | 26.90 € | **28.90 €** | 11.5 % | **19.8 %** | 28.95 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 19.00 € | **21.00 €** | 12.8 % | **24.7 %** | 21.05 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW7TN3372C | 491.50 € | **493.50 €** | 7.0 % | **7.4 %** | 493.57 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC e3S 2S/3S | 17.00 € | **19.00 €** | 23.1 % | **37.6 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2023F0 | 36.90 € | **38.90 €** | 12.7 % | **18.8 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26380-70 | 41.00 € | **43.00 €** | 14.0 % | **19.6 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| Herný pedál PXN Vector X Clutch | 104.50 € | **106.50 €** | 13.9 % | **16.1 %** | 106.59 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro (čierny) | 128.00 € | **130.00 €** | 12.0 % | **13.7 %** | 130.12 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4813 Žehlička SERENA červená | 46.00 € | **48.00 €** | 11.5 % | **16.3 %** | 48.13 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BC261 | 30.00 € | **32.00 €** | 9.0 % | **16.2 %** | 32.15 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-NOVA, 4K GOOGLE TV STICK | 73.00 € | **75.00 €** | 5.6 % | **8.5 %** | 75.15 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 34.00 € | **36.00 €** | 9.0 % | **15.4 %** | 36.16 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 34.00 € | **36.00 €** | 11.8 % | **18.4 %** | 36.16 € | cena podľa najlacnejšieho iného predajcu |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 251.50 € | **253.50 €** | 5.1 % | **5.9 %** | 253.67 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X25 (čierne) | 16.00 € | **18.00 €** | 23.8 % | **39.2 %** | 18.18 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 černá | 58.50 € | **60.50 €** | 5.2 % | **8.8 %** | 60.69 € | cena podľa najlacnejšieho iného predajcu |
| Neewer LS-300 – bodové svetlo s výkonom 300 W a uchy... | 191.00 € | **193.00 €** | 21.3 % | **22.5 %** | 193.20 € | cena podľa najlacnejšieho iného predajcu |
| Fleg Helikoptéra na dálkové ovládání | 24.50 € | **26.50 €** | 14.7 % | **24.0 %** | 26.70 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam C60E 4K duálna webová kamera | 57.50 € | **59.50 €** | 22.9 % | **27.2 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI1040GR | 26.00 € | **28.00 €** | 10.5 % | **19.0 %** | 28.25 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05A1 | 101.50 € | **103.50 €** | 9.8 % | **11.9 %** | 103.78 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio NP-FV100 vrátane info chipu pre Sony | 29.00 € | **31.00 €** | 15.0 % | **22.9 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight C2201C300 | 48.00 € | **50.00 €** | 22.0 % | **27.1 %** | 50.30 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 100 | 29.50 € | **31.50 €** | 11.3 % | **18.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Pixy | 81.50 € | **83.50 €** | 14.8 % | **17.6 %** | 83.83 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (červený) | 12.00 € | **14.00 €** | 15.7 % | **35.0 %** | 14.38 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **23.50 €** | 14.8 % | **25.5 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Automatický hadicový časovač Rainpoint ITV152 | 15.50 € | **17.50 €** | 23.1 % | **38.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| KOMA HPU1 - Univerzální hubice | 12.50 € | **14.50 €** | 14.8 % | **33.2 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtr CPL 58mm Telesin do iPhone 15 Pro/Pro Max | 14.50 € | **16.50 €** | 19.7 % | **36.2 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 13.50 € | **15.50 €** | 20.0 % | **37.7 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM05 RGB (čierna) | 15.50 € | **17.50 €** | 26.9 % | **43.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 75 mm adaptér z plochého na guľatý pre fluidnú... | 25.50 € | **27.50 €** | 7.1 % | **15.5 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Sunnylife na riadidlá pre ovládač | 14.50 € | **16.50 €** | 17.9 % | **34.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Sunnylife 2 v 1 pre DJI RC Plus 2 | 14.50 € | **16.50 €** | 17.2 % | **33.3 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetic quick mount kit for Telesin sports cameras | 14.50 € | **16.50 €** | 20.7 % | **37.3 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Živica ELEGOO Standard 1.0 (polopriehľadná) | 14.50 € | **16.50 €** | 17.1 % | **33.2 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (sivý) | 14.00 € | **16.00 €** | 18.9 % | **35.9 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL25, 700 lm, USB-C | 12.50 € | **14.50 €** | 13.5 % | **31.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf CL5, 1000 lm | 21.50 € | **23.50 €** | 25.0 % | **36.7 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka SUPERFIRE F1-S | 13.50 € | **15.50 €** | 17.1 % | **34.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire G19 | 11.50 € | **13.50 €** | 12.9 % | **32.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X80 | 17.00 € | **19.00 €** | 26.1 % | **40.9 %** | 19.41 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 530 FR | 93.00 € | **95.00 €** | 11.7 % | **14.1 %** | 95.45 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 25C 1500mAh 3S1P 11.1V Airsoft Gun Lipo Bat... | 21.00 € | **23.00 €** | 6.0 % | **16.1 %** | 23.47 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Katana CF0918 | 49.00 € | **51.00 €** | 14.3 % | **19.0 %** | 51.48 € | cena podľa najlacnejšieho iného predajcu |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.00 € | **54.00 €** | 11.6 % | **15.9 %** | 54.49 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire D6 – 220 lm, dosah 210 m, 4 režimy | 15.00 € | **17.00 €** | 21.7 % | **37.9 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi RF 433 MHz Avat... | 15.00 € | **17.00 €** | 27.0 % | **44.0 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (čierna) | 21.00 € | **23.00 €** | 26.5 % | **38.5 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM03 RGB (čierna) | 21.00 € | **23.00 €** | 27.7 % | **39.9 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Myš ONIKUMA DM06 | 19.00 € | **21.00 €** | 25.6 % | **38.8 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 19.00 € | **21.00 €** | 22.8 % | **35.7 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný svetelný spínač WiFi Avatto TS02-EU-B2 ... | 14.00 € | **16.00 €** | 28.5 % | **46.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Dotykový spínač svetla Avatto TS20-EU-W2 WiFi | 15.00 € | **17.00 €** | 20.4 % | **36.4 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZR-SR-R01-WH Spínač pre scény ZigBee, IP55 (biely) | 12.00 € | **14.00 €** | 14.6 % | **33.7 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický nabíjací adaptér Telesin s krytom pre GoP... | 18.00 € | **20.00 €** | 21.2 % | **34.7 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (biela) | 20.00 € | **22.00 €** | 19.9 % | **31.9 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (čierna) | 20.00 € | **22.00 €** | 19.9 % | **31.9 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (sivá) | 20.00 € | **22.00 €** | 19.9 % | **31.9 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom JR-FN1 Funpods Series Wireless Headphones (b... | 13.00 € | **15.00 €** | 18.9 % | **37.2 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TL98C DMX LED svetelná tyč | 52.00 € | **54.00 €** | 24.9 % | **29.7 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaci ventilátor Darkflash DR08 3 v 1 (čierny) | 12.00 € | **14.00 €** | 14.2 % | **33.3 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s meraním s... | 12.00 € | **14.00 €** | 19.1 % | **39.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| UV baterka Superfire Z01, 365NM, USB | 14.00 € | **16.00 €** | 16.4 % | **33.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCO1200E | 116.00 € | **117.90 €** | 9.7 % | **11.5 %** | 117.95 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect USetup E7 15,6" 1920x1080 60Hz prenosný dot... | 143.00 € | **144.90 €** | 22.8 % | **24.4 %** | 145.00 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 116.00 € | **117.90 €** | 9.6 % | **11.4 %** | 118.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2022E1 | 35.00 € | **36.90 €** | 6.9 % | **12.7 %** | 36.92 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 8x42 monokulárny | 25.00 € | **26.90 €** | 15.9 % | **24.7 %** | 26.92 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 45.00 € | **46.90 €** | 22.5 % | **27.7 %** | 46.97 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 18.00 € | **19.90 €** | 11.2 % | **22.9 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell O... | 18.00 € | **19.90 €** | 11.2 % | **22.9 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Freewell kruhový polarizačný filter CPL pre OSMO NANO | 18.00 € | **19.90 €** | 9.9 % | **21.5 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava plynového pedála a spojky MOZA SRP Lite2 Per... | 42.00 € | **43.90 €** | 19.1 % | **24.4 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BP654 | 27.00 € | **28.90 €** | 11.8 % | **19.6 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 30.00 € | **31.90 €** | 11.3 % | **18.4 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **49.00 €** | 37.2 % | **42.6 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **68.90 €** | 46.0 % | **49.8 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **68.90 €** | 32.6 % | **36.1 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **31.50 €** | 35.9 % | **44.0 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **34.00 €** | 33.2 % | **40.2 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WOI118PT2SSMA | 757.90 € | **759.50 €** | 6.0 % | **6.2 %** | 759.75 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93013 Pánev hluboká Aries 26 cm | 21.90 € | **23.50 €** | 10.4 % | **18.4 %** | 23.54 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 38.90 € | **40.50 €** | 24.6 % | **29.7 %** | 40.73 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT625B, USB | 43.90 € | **45.50 €** | 23.3 % | **27.8 %** | 45.78 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny prísavný držiak TELESIN s držiakom na te... | 13.90 € | **15.50 €** | 21.8 % | **35.8 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW953 (čierna) | 13.90 € | **15.50 €** | 24.3 % | **38.6 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Trojkanálová nabíjačka batérií pre GoPro Hero 13 Bla... | 12.90 € | **14.50 €** | 22.1 % | **37.2 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **20.50 €** | 34.0 % | **44.8 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **98.90 €** | 36.8 % | **39.0 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **41.50 €** | 35.4 % | **40.5 %** | 41.73 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2404 | 107.50 € | **109.00 €** | 14.6 % | **16.2 %** | 109.01 € | cena podľa najlacnejšieho iného predajcu |
| Amica MI 446 TBIM | 521.50 € | **523.00 €** | 5.9 % | **6.3 %** | 523.03 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, červená | 26.50 € | **28.00 €** | 15.8 % | **22.3 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma SPRING průměr 26 cm, modrá | 26.50 € | **28.00 €** | 15.8 % | **22.3 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu |
| Beper Bp101-H Elektrický Citrusovač | 19.00 € | **20.50 €** | 11.0 % | **19.7 %** | 20.55 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 41.00 € | **42.50 €** | 5.9 % | **9.8 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **27.00 €** | 15.0 % | **21.7 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT839 | 25.50 € | **27.00 €** | 25.0 % | **32.4 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT118E Univerzálny digitálny multimeter Tru... | 39.00 € | **40.50 €** | 16.7 % | **21.1 %** | 40.60 € | cena podľa najlacnejšieho iného predajcu |
| Adapter 10in1 HUB Blitzwolf BW-NEW TH8 | 39.00 € | **40.50 €** | 19.9 % | **24.5 %** | 40.60 € | cena podľa najlacnejšieho iného predajcu |
| Maono BA92 Boom Arm Black | 50.50 € | **52.00 €** | 15.2 % | **18.7 %** | 52.11 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P204FER250 | 21.00 € | **22.50 €** | 11.4 % | **19.3 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-50245 | 12.00 € | **13.50 €** | 10.1 % | **23.9 %** | 13.65 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam Nova | 25.00 € | **26.50 €** | 22.2 % | **29.6 %** | 26.65 € | cena podľa najlacnejšieho iného predajcu |
| PLA drevené vlákno (indický dub) | 12.00 € | **13.50 €** | 17.1 % | **31.8 %** | 13.66 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 191.50 € | **193.00 €** | 23.6 % | **24.6 %** | 193.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, zlatá) | 191.50 € | **193.00 €** | 23.6 % | **24.6 %** | 193.20 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 105.50 € | **107.00 €** | 9.3 % | **10.9 %** | 107.23 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 7 (čierny) | 37.00 € | **38.50 €** | 24.6 % | **29.6 %** | 38.73 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 13.00 € | **14.50 €** | 22.5 % | **36.6 %** | 14.74 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 13.00 € | **14.50 €** | 22.5 % | **36.6 %** | 14.74 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač / zastrihávač domácich zvierat Oneisall ... | 24.50 € | **26.00 €** | 23.0 % | **30.6 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 4,5 l automatické krmítko pre zvieratá WiFi v... | 46.00 € | **47.50 €** | 24.0 % | **28.1 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **18.50 €** | 13.4 % | **23.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 21.50 € | **23.00 €** | 14.9 % | **22.9 %** | 23.31 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický ventilátor GOOLOO F3 (biely) | 34.00 € | **35.50 €** | 22.4 % | **27.8 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Tefal ZP2M04E0 | 23.00 € | **24.50 €** | 11.2 % | **18.5 %** | 24.82 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER x660 PRO II | 208.50 € | **210.00 €** | 25.2 % | **26.1 %** | 210.32 € | cena podľa najlacnejšieho iného predajcu |
| Powerbank BlitzWolf BW-P22 20000 mAh, 22,5 W | 28.00 € | **29.50 €** | 22.0 % | **28.5 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92003 Hrnec s pokl. Libra, 3,6 l | 23.50 € | **25.00 €** | 10.0 % | **17.0 %** | 25.36 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Daily PV1100C | 23.50 € | **25.00 €** | 11.3 % | **18.4 %** | 25.36 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merač svetla Habotest HT603 | 22.00 € | **23.50 €** | 19.2 % | **27.4 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC B6neo+ | 36.00 € | **37.50 €** | 23.9 % | **29.0 %** | 37.86 € | cena podľa najlacnejšieho iného predajcu |
| MENALUX F152 | 11.00 € | **12.50 €** | 13.5 % | **29.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Hliníkový držiak Sunnylife pre Insta360 X5/X4 | 17.00 € | **18.50 €** | 21.6 % | **32.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 20.00 € | **21.50 €** | 5.4 % | **13.4 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife 1/4" adaptér s rýchloupínaním a otočným uh... | 12.00 € | **13.50 €** | 18.8 % | **33.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický upevňovací adaptér Sunnylife s guľovým kĺ... | 16.00 € | **17.50 €** | 20.3 % | **31.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Kryt vrtule Sunnylife A3S-KC910 pre AIR 3S/AIR 3 | 11.00 € | **12.50 €** | 14.4 % | **30.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Torras Ostand R Fusion Case for iPhone 16 Pro (Gray) | 12.00 € | **13.50 €** | 20.4 % | **35.5 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný stojan ONIKUMA ST-2 (biely) | 15.00 € | **16.50 €** | 25.5 % | **38.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 47.00 € | **48.50 €** | 19.3 % | **23.1 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2397 Tréningový prístroj na stehná a panvo... | 16.00 € | **17.50 €** | 33.0 % | **45.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf L1 350 lm | 16.00 € | **17.50 €** | 25.4 % | **37.2 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire TN02,1800lm, USB-C | 18.00 € | **19.50 €** | 22.4 % | **32.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 100.50 € | **102.00 €** | 25.4 % | **27.2 %** | 102.43 € | cena podľa najlacnejšieho iného predajcu |
| Súprava držadiel PGY RetroVa pre iPhone 16 Pro | 100.50 € | **102.00 €** | 26.0 % | **27.9 %** | 102.43 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 100.50 € | **102.00 €** | 23.1 % | **24.9 %** | 102.43 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 100.50 € | **102.00 €** | 23.1 % | **24.9 %** | 102.43 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C950 4K | 29.50 € | **31.00 €** | 23.3 % | **29.6 %** | 31.43 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93014 Pánev hluboká Aries 28 cm | 24.50 € | **26.00 €** | 9.9 % | **16.7 %** | 26.46 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Magnetic Wall | 11.50 € | **13.00 €** | 10.6 % | **25.1 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 15.50 € | **17.00 €** | 15.0 % | **26.1 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR720004 | 20.50 € | **22.00 €** | 16.9 % | **25.4 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 13.50 € | **15.00 €** | 9.6 % | **21.8 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov Sunnylife CPL + ND8 + ND16 pre Osmo Nano | 16.50 € | **18.00 €** | 20.7 % | **31.7 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell ND1000 Filter pre OSMO Action 6 | 13.50 € | **15.00 €** | 21.7 % | **35.2 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak PULUZ pre Insta360 GO Ultra (čierny) | 13.50 € | **15.00 €** | 15.7 % | **28.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Ring light with phone holder PULUZ | 13.50 € | **15.00 €** | 8.3 % | **20.4 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón pre kameru SJCAM SJ8 Pro | 13.50 € | **15.00 €** | 25.3 % | **39.2 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka troch batérií pre GoPro Hero 13 Black Tele... | 15.50 € | **17.00 €** | 20.6 % | **32.3 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro Puluz pre kameru GoPro HERO 4K 2024 | 14.50 € | **16.00 €** | 9.1 % | **20.3 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla ZigBee Avatto ZTS02-EU-W... | 12.50 € | **14.00 €** | 12.5 % | **26.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro na iPhone Puluz (40 m) s jednosmern... | 52.50 € | **54.00 €** | 9.2 % | **12.4 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X88 | 13.50 € | **15.00 €** | 23.5 % | **37.2 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlo Etenwolf L2, 300 lm | 14.50 € | **16.00 €** | 24.2 % | **37.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **64.00 €** | 37.6 % | **40.8 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **24.00 €** | 33.4 % | **42.0 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektronický boxerský terč HMS TB06 s LED, Bluetooth... | 65.50 € | **66.90 €** | 2.9 % | **5.1 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **226.90 €** | 45.0 % | **45.9 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF10-B | 13.50 € | **14.90 €** | 19.4 % | **31.8 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 45.50 € | **46.90 €** | 10.9 % | **14.3 %** | 46.97 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 18.50 € | **19.90 €** | 9.1 % | **17.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný systém Freewell UV Osmo Pocket 4P | 18.50 € | **19.90 €** | 9.5 % | **17.8 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 18.50 € | **19.90 €** | 9.1 % | **17.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 3.00 € | **4.30 €** | 7.4 % | **54.0 %** | 4.31 € | cena podľa najlacnejšieho iného predajcu |
| Termotransferová fólia HTVRONT Pure, 30,5 cm × 1,8 m... | 4.40 € | **5.70 €** | 15.0 % | **49.0 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Amica BL 6016 | 62.90 € | **64.00 €** | 12.8 % | **14.8 %** | 64.05 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 25.90 € | **27.00 €** | 13.0 % | **17.8 %** | 27.25 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Rony B-4777 červená | 23.90 € | **25.00 €** | 13.4 % | **18.7 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 36.90 € | **38.00 €** | 6.0 % | **9.1 %** | 38.30 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (čierne) | 18.90 € | **20.00 €** | 8.9 % | **15.2 %** | 20.40 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93020 Pánev Carina 20 cm | 13.90 € | **15.00 €** | 13.9 % | **22.9 %** | 15.10 € | cena podľa najlacnejšieho iného predajcu |
| Úložná taška Telesin EVA pre DJI Action 3/4/5 (veľko... | 12.90 € | **14.00 €** | 21.8 % | **32.2 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT40FF2003C | 178.90 € | **180.00 €** | 5.2 % | **5.8 %** | 180.28 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 37.5 % | **45.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 106.00 € | **107.00 €** | 12.2 % | **13.3 %** | 107.01 € | cena podľa najlacnejšieho iného predajcu |
| Double monitor mount 13-30" Huanuo HNDS6 | 53.90 € | **54.90 €** | 25.4 % | **27.7 %** | 54.94 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 3300mAh 11.1V 30C 3S1P Lipo ... | 36.00 € | **37.00 €** | 29.5 % | **33.1 %** | 37.04 € | cena podľa najlacnejšieho iného predajcu |
| Sati Wild coffe Ethiopia 500 g zrno | 12.00 € | **13.00 €** | 15.4 % | **25.0 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT806 (čierne) | 26.00 € | **27.00 €** | 25.4 % | **30.2 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Rixon UltraPods | 46.00 € | **47.00 €** | 14.8 % | **17.2 %** | 47.08 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT806 (biele) | 26.00 € | **27.00 €** | 25.4 % | **30.2 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92001 Hrnec s pokl. Libra, 1,4 l | 17.00 € | **18.00 €** | 11.5 % | **18.0 %** | 18.11 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93025 Pánev na palač. Carina 24 cm | 17.00 € | **18.00 €** | 11.5 % | **18.0 %** | 18.11 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Honey Day 160 ml | 11.00 € | **12.00 €** | 13.6 % | **24.0 %** | 12.12 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 28.00 € | **29.00 €** | 10.6 % | **14.5 %** | 29.13 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6750mAh 14.8V 60C 4S1P 14# XT90 Battery | 82.50 € | **83.50 €** | 24.6 % | **26.1 %** | 83.63 € | cena podľa najlacnejšieho iného predajcu |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.00 € | **14.00 €** | 10.3 % | **18.8 %** | 14.15 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT605 | 19.50 € | **20.50 €** | 17.2 % | **23.2 %** | 20.68 € | cena podľa najlacnejšieho iného predajcu |
| Venta Organic fragrance Peppermint | 16.50 € | **17.50 €** | 12.1 % | **18.9 %** | 17.69 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 21391-56/RH | 51.00 € | **52.00 €** | 14.3 % | **16.5 %** | 52.19 € | cena podľa najlacnejšieho iného predajcu |
| Držiak so šnúrkou Sunnylife pre ovládač DJI RC (MM3-... | 15.50 € | **16.50 €** | 17.7 % | **25.3 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Telesin magnetic mount for sports cameras | 14.50 € | **15.50 €** | 21.4 % | **29.8 %** | 15.70 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC026X | 42.00 € | **43.00 €** | 13.6 % | **16.3 %** | 43.23 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE105 | 26.00 € | **27.00 €** | 9.8 % | **14.0 %** | 27.23 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100WS (čierny) | 57.00 € | **58.00 €** | 26.4 % | **28.6 %** | 58.24 € | cena podľa najlacnejšieho iného predajcu |
| STRONG SRT 8119 | 26.50 € | **27.50 €** | 12.2 % | **16.4 %** | 27.74 € | cena podľa najlacnejšieho iného predajcu |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 166.50 € | **167.50 €** | 5.3 % | **5.9 %** | 167.78 € | cena podľa najlacnejšieho iného predajcu |
| Girmi SR5400 Odšťavňovač | 35.50 € | **36.50 €** | 15.8 % | **19.1 %** | 36.79 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 19.50 € | **20.50 €** | 12.6 % | **18.4 %** | 20.80 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 011 | 62.00 € | **63.00 €** | 16.2 % | **18.0 %** | 63.31 € | cena podľa najlacnejšieho iného predajcu |
| Nástenné držiaky na TV Perlesmith PSPILFK1 | 34.50 € | **35.50 €** | 22.7 % | **26.3 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26730-56/RH | 33.00 € | **34.00 €** | 15.4 % | **18.9 %** | 34.33 € | cena podľa najlacnejšieho iného predajcu |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 25.00 € | **26.00 €** | 24.9 % | **29.9 %** | 26.35 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90504 French press 800ml | 13.00 € | **14.00 €** | 11.0 % | **19.6 %** | 14.35 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 75.50 € | **76.50 €** | 10.6 % | **12.1 %** | 76.86 € | cena podľa najlacnejšieho iného predajcu |
| Graef S 10005 | 114.50 € | **115.50 €** | 10.7 % | **11.6 %** | 115.88 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 203.50 € | **204.50 €** | 13.8 % | **14.3 %** | 204.90 € | cena podľa najlacnejšieho iného predajcu |
| Zacvakávacia doska PGYTECH Arcs-Swiss (P-CG-013) | 12.50 € | **13.50 €** | 23.2 % | **33.0 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak s prísavkou Telesin pre DJI Osmo Action 3/4/5... | 11.50 € | **12.50 €** | 20.2 % | **30.6 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X31 | 13.50 € | **14.50 €** | 27.0 % | **36.4 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Nora B-4781 bílo/zelená | 20.00 € | **21.00 €** | 12.1 % | **17.7 %** | 21.43 € | cena podľa najlacnejšieho iného predajcu |
| ELDONEX EKS4040SL | 11.00 € | **12.00 €** | 10.8 % | **20.9 %** | 12.45 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9283EK | 18.00 € | **19.00 €** | 11.2 % | **17.4 %** | 19.45 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BC060 | 18.00 € | **19.00 €** | 11.0 % | **17.2 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 13.00 € | **14.00 €** | 24.8 % | **34.4 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 41.9 % | **45.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Mini LED svietidlo Neewer HB80C RGB COB | 195.00 € | **195.90 €** | 20.2 % | **20.7 %** | 195.98 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXMC400E | 83.00 € | **83.90 €** | 42.7 % | **44.2 %** | 83.99 € | cena podľa najlacnejšieho iného predajcu |
| Sati Ouganda Colobus Blend 500 g zrno | 11.00 € | **11.90 €** | 15.7 % | **25.2 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93021 Pánev Carina 22 cm | 14.00 € | **14.90 €** | 11.3 % | **18.4 %** | 14.93 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 antracit | 33.00 € | **33.90 €** | 13.8 % | **16.9 %** | 33.91 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 bílá | 33.00 € | **33.90 €** | 13.8 % | **16.9 %** | 33.91 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 nerez | 33.00 € | **33.90 €** | 13.2 % | **16.2 %** | 33.91 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 300 | 37.00 € | **37.90 €** | 14.3 % | **17.1 %** | 37.92 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na zvýšenie výkonu pre pedále CRP2 Moza Raci... | 22.00 € | **22.90 €** | 19.1 % | **24.0 %** | 22.93 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 19.00 € | **19.90 €** | 14.3 % | **19.8 %** | 19.95 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT126A Digitálny univerzálny multimeter | 27.00 € | **27.90 €** | 19.2 % | **23.2 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter CPL Freewell Osmo Pocket 4P | 19.00 € | **19.90 €** | 8.8 % | **13.9 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **30.50 €** | 40.5 % | **44.2 %** | 30.69 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 38.0 % | **41.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér OTG USB-C na Lightning Puluz PU649B | 3.10 € | **3.80 €** | 15.6 % | **41.7 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Bella B -4430 bílooranžová | 20.90 € | **21.50 €** | 16.1 % | **19.4 %** | 21.61 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 20.90 € | **21.50 €** | 12.7 % | **15.9 %** | 21.73 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B31 (tmavomodrá) | 46.90 € | **47.50 €** | 23.3 % | **24.9 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| RivaCase 7567 batoh na notebook 17,3" | 52.90 € | **53.50 €** | 16.2 % | **17.6 %** | 53.81 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 200 | 30.90 € | **31.50 €** | 16.6 % | **18.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27131-56 | 29.90 € | **30.50 €** | 16.4 % | **18.7 %** | 30.85 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.65 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7285S-SET2 Sáčky pro vasavač DO72 | 14.90 € | **15.50 €** | 14.0 % | **18.5 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač SUPERIOR LG – Bluetooth... | 15.90 € | **16.50 €** | 55.9 % | **61.8 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH7AC1E0 | 219.90 € | **220.50 €** | 8.0 % | **8.3 %** | 220.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **40.50 €** | 45.0 % | **46.9 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **20.50 €** | 43.6 % | **47.2 %** | 20.84 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Carrera GCO2007 Auto FIRST 65010 Cars Li | 13.50 € | **14.00 €** | 20.3 % | **24.8 %** | 14.02 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 446.00 € | **446.50 €** | 6.9 % | **7.0 %** | 446.53 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 17.50 € | **18.00 €** | 27.8 % | **31.5 %** | 18.07 € | cena podľa najlacnejšieho iného predajcu |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 21.50 € | **22.00 €** | 5.1 % | **7.6 %** | 22.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 23.50 € | **24.00 €** | 17.2 % | **19.7 %** | 24.09 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.50 € | **12.00 €** | 18.8 % | **24.0 %** | 12.12 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 52.00 € | **52.50 €** | 6.1 % | **7.1 %** | 52.63 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 22,4MM 13 (čierny) | 38.00 € | **38.50 €** | 22.8 % | **24.5 %** | 38.63 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 17,9MM 7 (čierny) | 38.00 € | **38.50 €** | 22.8 % | **24.5 %** | 38.63 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 18,3MM 8 (čierny) | 38.00 € | **38.50 €** | 22.8 % | **24.5 %** | 38.63 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR690001 | 21.50 € | **22.00 €** | 16.6 % | **19.3 %** | 22.14 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Ellis B-4364 šedá | 17.00 € | **17.50 €** | 9.7 % | **12.9 %** | 17.64 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50D2V0 | 16.50 € | **17.00 €** | 15.2 % | **18.7 %** | 17.18 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAT20000PK Bezdrátová sluchátka | 33.00 € | **33.50 €** | 15.0 % | **16.8 %** | 33.69 € | cena podľa najlacnejšieho iného predajcu |
| Selfie svetlo Telesin s magnetickým držiakom telefónu | 18.00 € | **18.50 €** | 19.6 % | **22.9 %** | 18.70 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5388B | 109.00 € | **109.50 €** | 9.4 % | **9.9 %** | 109.72 € | cena podľa najlacnejšieho iného predajcu |
| Rixon QuikBuds | 24.50 € | **25.00 €** | 14.1 % | **16.5 %** | 25.22 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 164.00 € | **164.50 €** | 13.5 % | **13.8 %** | 164.74 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač Meross MRS105MA-EU WiFi... | 27.00 € | **27.50 €** | 29.3 % | **31.7 %** | 27.75 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Xany 2B, aktivní pokojová anténa | 16.00 € | **16.50 €** | 12.2 % | **15.7 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku FNIRSI FDM-02 | 29.50 € | **30.00 €** | 8.4 % | **10.2 %** | 30.27 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **23.00 €** | 11.8 % | **14.3 %** | 23.27 € | cena podľa najlacnejšieho iného predajcu |
| Nástenné držiaky na TV Perlegear PGMFK6 26-60" | 19.50 € | **20.00 €** | 23.0 % | **26.1 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.50 € | **15.00 €** | 14.3 % | **18.3 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Sluchátka Bluetooth KRUGER & MATZ Street 3 Wireless ... | 34.00 € | **34.50 €** | 6.2 % | **7.8 %** | 34.79 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá Onikuma B2 (čierne) | 24.00 € | **24.50 €** | 24.6 % | **27.2 %** | 24.80 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (zelený) | 11.50 € | **12.00 €** | 17.9 % | **23.0 %** | 12.31 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-C102COC101 | 10.50 € | **11.00 €** | 14.9 % | **20.4 %** | 11.32 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92004 Hrnec s pokl. Libra, 4,6 l | 27.00 € | **27.50 €** | 15.1 % | **17.2 %** | 27.82 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier D12 (čierny) | 87.00 € | **87.50 €** | 13.0 % | **13.6 %** | 87.85 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSA752E | 23.00 € | **23.50 €** | 15.7 % | **18.2 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE005 | 23.00 € | **23.50 €** | 14.2 % | **16.7 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka a analyzátor batérií SkyRC MC5000 s rozhra... | 121.50 € | **122.00 €** | 23.3 % | **23.8 %** | 122.39 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 109.00 € | **109.50 €** | 9.7 % | **10.2 %** | 109.90 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitý ramenný popruh Puluz pre fotoaparáty PU6002 | 12.50 € | **13.00 €** | 13.2 % | **17.7 %** | 13.43 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90502 French press Atria 800 ml | 11.50 € | **12.00 €** | 14.3 % | **19.3 %** | 12.46 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus A12 | 22.50 € | **23.00 €** | 21.8 % | **24.5 %** | 23.47 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer TX1800U Nano Adaptér | 20.50 € | **21.00 €** | 9.8 % | **12.5 %** | 21.48 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27371-56 | 33.50 € | **34.00 €** | 16.6 % | **18.4 %** | 34.49 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27374-56 | 33.50 € | **34.00 €** | 16.6 % | **18.4 %** | 34.49 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FVB015X | 18.50 € | **19.00 €** | 11.3 % | **14.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 42.50 € | **43.00 €** | 12.9 % | **14.2 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu |
| Rixon GamePods | 31.50 € | **32.00 €** | 13.9 % | **15.7 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Panoramatický fotografický stojan 360 Puluz DCA0871W | 15.00 € | **15.50 €** | 12.3 % | **16.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **105.00 €** | 35.1 % | **35.7 %** | 105.17 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot Ranger | 194.50 € | **194.90 €** | 19.5 % | **19.7 %** | 194.91 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.50 € | **78.90 €** | 9.4 % | **10.0 %** | 78.92 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 10.50 € | **10.90 €** | 5.3 % | **9.3 %** | 10.97 € | cena podľa najlacnejšieho iného predajcu |
| Laica VT3514 | 4.40 € | **4.80 €** | 11.1 % | **21.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9038G | 34.50 € | **34.90 €** | 15.4 % | **16.8 %** | 34.96 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 19.50 € | **19.90 €** | 9.0 % | **11.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.50 € | **19.90 €** | 9.0 % | **11.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.50 € | **19.90 €** | 9.0 % | **11.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Osmo Pocket 4P ND32 | 19.50 € | **19.90 €** | 9.0 % | **11.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 19.50 € | **19.90 €** | 8.6 % | **10.8 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND32/PL | 19.50 € | **19.90 €** | 9.0 % | **11.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 19.50 € | **19.90 €** | 9.0 % | **11.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre GoPro HERO11/HERO10/HERO9 | 19.50 € | **19.90 €** | 11.6 % | **13.9 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC025X | 26.50 € | **26.90 €** | 13.3 % | **15.0 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| Gumová kefa ROMO | 23.50 € | **23.90 €** | 27.4 % | **29.5 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **25.00 €** | 38.0 % | **40.3 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **67.50 €** | 25.7 % | **26.4 %** | 67.71 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Súprava xTool Ultimate Robot Kit V2.0 | 449.90 € | **450.00 €** | 15.4 % | **15.4 %** | 450.31 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ PU3223B Držiak na telefón čierny | 18.90 € | **19.00 €** | 21.2 % | **21.8 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 24.90 € | **25.00 €** | 13.5 % | **13.9 %** | 25.37 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **19.00 €** | 26.0 % | **26.2 %** | 19.10 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **19.00 €** | 55.6 % | **55.9 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (449)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 968.00 € | **813.00 €** | 37.4 % | **15.4 %** | 813.19 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **722.50 €** | 37.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Cyklotrenažér Cycplus T3 | 972.72 € | **849.90 €** | 31.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 31.8 % | **8.3 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 535.50 € | **463.00 €** | 24.6 % | **7.7 %** | 463.16 € | cena podľa najlacnejšieho iného predajcu |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **241.50 €** | 42.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor BlitzWolf BW-V11 | 375.15 € | **322.00 €** | 36.1 % | **16.8 %** | 322.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **259.50 €** | 35.4 % | **12.4 %** | 259.79 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 656.90 € | **604.00 €** | 25.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **174.00 €** | 47.6 % | **13.9 %** | 174.38 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **259.00 €** | 28.9 % | **7.9 %** | 259.41 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 791.50 € | **742.50 €** | 22.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **176.00 €** | 45.2 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **228.90 €** | 28.0 % | **6.7 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 702.00 € | **656.90 €** | 24.1 % | **16.1 %** | 657.00 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped MERACH MR-S28B1 | 561.90 € | **516.90 €** | 25.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| NAS server TERRAMASTER F2-425 Plus s procesorom Inte... | 540.00 € | **495.50 €** | 25.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický skúter NAVEE V45i | 350.55 € | **307.50 €** | 37.5 % | **20.6 %** | 307.73 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD NAS - súborový server s procesoro... | 698.00 € | **655.50 €** | 22.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Uni-T UT362H Anemometer | 199.88 € | **158.50 €** | 35.0 % | **7.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **259.50 €** | 27.9 % | **10.5 %** | 259.79 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F4 SSD NAS - súborový server s procesoro... | 513.50 € | **474.90 €** | 24.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **636.90 €** | 49.7 % | **41.2 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 711.50 € | **675.00 €** | 11.7 % | **6.0 %** | 675.20 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 538.00 € | **503.50 €** | 16.2 % | **8.7 %** | 503.89 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-285H Intel Core Ultra 9 2... | 732.50 € | **700.50 €** | 15.0 % | **10.0 %** | 700.52 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **106.00 €** | 54.0 % | **18.9 %** | 106.19 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **326.90 €** | 34.2 % | **22.6 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 123.00 € | **92.90 €** | 52.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **135.00 €** | 47.0 % | **20.3 %** | 135.29 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **155.50 €** | 30.5 % | **9.4 %** | 155.79 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **285.50 €** | 26.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 168.00 € | **138.90 €** | 89.3 % | **56.5 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 423.50 € | **395.50 €** | 23.2 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 41.9 % | **8.8 %** | 86.74 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 244.98 € | **219.90 €** | 43.5 % | **28.8 %** | 219.97 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **118.00 €** | 38.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Maxxo LED800 bílý | 321.90 € | **298.50 €** | 15.5 % | **7.1 %** | 298.71 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T14 | 301.50 € | **278.90 €** | 24.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 370.50 € | **348.00 €** | 27.7 % | **20.0 %** | 348.33 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 41.4 % | **10.2 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 44.4 % | **12.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **163.50 €** | 27.9 % | **12.7 %** | 163.53 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP800IIIV | 391.00 € | **369.50 €** | 21.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **348.90 €** | 51.5 % | **42.8 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **58.90 €** | 56.5 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet HUION Kamvas Pad 12 KP1202 | 482.00 € | **461.00 €** | 20.2 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GUZZANTI GZ 363A | 593.50 € | **573.00 €** | 10.0 % | **6.2 %** | 573.44 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 63.50 € | **43.50 €** | 67.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický bežecký pás UREVO SpaceWalk 5 (čierny) | 313.00 € | **293.00 €** | 22.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 232.50 € | **213.00 €** | 24.6 % | **14.2 %** | 213.14 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **64.00 €** | 73.9 % | **34.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.50 €** | 36.4 % | **11.2 %** | 81.70 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **54.50 €** | 53.1 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.00 €** | 44.7 % | **16.1 %** | 72.49 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 207.90 € | **190.50 €** | 28.2 % | **17.5 %** | 190.59 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 330.50 € | **313.50 €** | 23.8 % | **17.4 %** | 313.90 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 272.00 € | **255.00 €** | 22.6 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **90.90 €** | 24.7 % | **5.3 %** | 89.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reproduktor Edifier ES300 Bluetooth (biely) | 193.50 € | **177.00 €** | 17.5 % | **7.5 %** | 177.14 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 193.50 € | **177.00 €** | 17.5 % | **7.5 %** | 177.14 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 94.00 € | **77.50 €** | 42.2 % | **17.2 %** | 77.86 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Spitz Plus 4G LTE | 217.00 € | **200.50 €** | 24.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **75.90 €** | 28.2 % | **5.5 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **30.90 €** | 76.3 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion HS611 | 91.23 € | **75.00 €** | 39.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **54.00 €** | 48.1 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **94.00 €** | 62.7 % | **39.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 787.50 € | **772.00 €** | 20.7 % | **18.3 %** | 772.01 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 268.50 € | **253.50 €** | 32.7 % | **25.2 %** | 253.70 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 268.50 € | **253.50 €** | 23.3 % | **16.4 %** | 253.70 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **65.00 €** | 41.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **39.90 €** | 58.6 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **59.90 €** | 43.9 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 70.9 % | **20.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **235.50 €** | 36.0 % | **28.1 %** | 235.69 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 166.50 € | **152.50 €** | 28.9 % | **18.1 %** | 152.90 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **286.90 €** | 50.4 % | **43.7 %** | 287.00 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 46.0 % | **11.9 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **34.00 €** | 58.3 % | **14.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **52.00 €** | 43.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **69.50 €** | 73.9 % | **46.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **186.90 €** | 51.3 % | **41.5 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 134.28 € | **121.50 €** | 36.1 % | **23.1 %** | 121.74 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **38.50 €** | 53.4 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **57.50 €** | 40.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Freewell FujiX100 filter set with lens hood (silver) | 66.11 € | **53.50 €** | 42.2 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 228.50 € | **216.00 €** | 20.9 % | **14.3 %** | 216.14 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 228.50 € | **216.00 €** | 20.9 % | **14.3 %** | 216.14 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **123.00 €** | 39.9 % | **27.2 %** | 123.26 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **54.90 €** | 40.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tefal GV 9620E0 | 374.90 € | **363.00 €** | 11.7 % | **8.2 %** | 363.21 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **138.90 €** | 51.2 % | **39.4 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **40.50 €** | 49.5 % | **15.8 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **45.90 €** | 44.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED svetelný panel GODOX Litemons LP600Bi s dvojfare... | 137.50 € | **126.00 €** | 25.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 32.8 % | **17.6 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 54.8 % | **44.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 59.1 % | **48.1 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 898.90 € | **888.00 €** | 21.7 % | **20.2 %** | 888.38 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.32 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 53.3 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 237.50 € | **226.90 €** | 11.7 % | **6.7 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TB | 303.50 € | **293.00 €** | 11.5 % | **7.7 %** | 293.43 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 123.5 % | **44.1 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **116.90 €** | 35.6 % | **24.8 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 204.00 € | **194.00 €** | 11.6 % | **6.2 %** | 194.14 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 137.00 € | **127.00 €** | 16.6 % | **8.0 %** | 127.45 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný pohybový senzor MEROSS MS605MAT-EU | 39.98 € | **30.00 €** | 40.6 % | **5.5 %** | 30.30 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 889.90 € | **880.00 €** | 18.5 % | **17.2 %** | 880.49 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **32.90 €** | 48.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Guzzanti GZ 103RB | 215.00 € | **205.50 €** | 11.0 % | **6.1 %** | 205.63 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.00 €** | 40.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| BEKO MGC 20100 W | 71.90 € | **63.00 €** | 34.0 % | **17.4 %** | 63.42 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **191.00 €** | 42.5 % | **36.1 %** | 191.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 328.00 € | **319.50 €** | 12.2 % | **9.3 %** | 319.70 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.00 €** | 45.9 % | **6.2 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 21.0 % | **9.2 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 492.00 € | **484.00 €** | 16.0 % | **14.1 %** | 484.18 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **66.90 €** | 21.0 % | **8.2 %** | 66.96 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 238.90 € | **231.00 €** | 20.8 % | **16.9 %** | 231.19 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 638.90 € | **631.00 €** | 45.1 % | **43.3 %** | 631.19 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 291.90 € | **284.00 €** | 10.1 % | **7.1 %** | 284.20 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 53.8 % | **19.2 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Blitzwolf BW-V12 | 274.70 € | **266.90 €** | 47.2 % | **43.0 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 50.1 % | **42.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **159.00 €** | 11.1 % | **6.1 %** | 159.29 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 368.50 € | **361.00 €** | 11.5 % | **9.2 %** | 361.34 € | cena podľa najlacnejšieho iného predajcu |
| Neewer GM76 179 cm statív / monopod | 102.50 € | **95.00 €** | 24.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **30.00 €** | 52.3 % | **22.1 %** | 30.49 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (červený) | 236.90 € | **229.50 €** | 18.6 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Skladací elektrický bežecký pás ACEZOE P20 (čierny a... | 236.90 € | **229.50 €** | 18.6 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **22.50 €** | 51.2 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **63.00 €** | 32.3 % | **18.7 %** | 63.14 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BHI681EB | 118.00 € | **111.00 €** | 16.0 % | **9.1 %** | 111.36 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.50 €** | 51.3 % | **6.4 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **133.50 €** | 24.7 % | **18.5 %** | 133.54 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 104.90 € | **98.00 €** | 23.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **69.50 €** | 68.8 % | **53.6 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.00 €** | 21.7 % | **12.9 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **20.50 €** | 39.4 % | **5.2 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **20.50 €** | 79.4 % | **35.4 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **143.00 €** | 41.1 % | **34.8 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 296.50 € | **289.90 €** | 15.0 % | **12.5 %** | 289.99 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER DCP-1510E | 140.50 € | **133.90 €** | 10.4 % | **5.2 %** | 127.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **16.00 €** | 84.6 % | **31.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko EnergySpin B7WFU68416WBES | 426.50 € | **420.00 €** | 11.6 % | **9.9 %** | 420.21 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 323.50 € | **317.00 €** | 8.1 % | **5.9 %** | 317.46 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER DCP-L2600D | 150.90 € | **144.50 €** | 10.0 % | **5.4 %** | 133.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **131.00 €** | 40.7 % | **34.2 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **129.00 €** | 35.0 % | **28.7 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **21.00 €** | 79.4 % | **38.7 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 52.7 % | **45.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **118.90 €** | 49.0 % | **41.7 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **13.90 €** | 54.0 % | **7.1 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **17.50 €** | 77.8 % | **32.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **32.90 €** | 41.6 % | **19.6 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 59.3 % | **14.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 343.00 € | **337.00 €** | 11.6 % | **9.7 %** | 337.19 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-2 Oculink | 96.00 € | **90.00 €** | 22.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 52.6 % | **43.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **68.90 €** | 19.2 % | **9.7 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **148.90 €** | 46.2 % | **40.6 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **106.90 €** | 48.7 % | **41.0 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 51.2 % | **43.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **23.90 €** | 50.0 % | **20.6 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 35.2 % | **11.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.50 €** | 29.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **84.00 €** | 45.8 % | **36.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **16.90 €** | 55.2 % | **16.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 42.7 % | **35.2 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P11pro | 200.50 € | **195.00 €** | 18.2 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **69.50 €** | 41.8 % | **31.7 %** | 69.79 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **69.50 €** | 55.5 % | **44.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 46.7 % | **22.7 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **27.00 €** | 38.9 % | **16.1 %** | 27.46 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **107.50 €** | 30.8 % | **24.7 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 45.3 % | **19.8 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **24.50 €** | 40.2 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **22.00 €** | 70.5 % | **38.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.90 €** | 52.5 % | **46.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 38.3 % | **9.6 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 186.00 € | **180.90 €** | 18.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 39.7 % | **28.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **17.50 €** | 74.4 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **17.50 €** | 74.4 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **37.00 €** | 30.6 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Päťzónový indukčný sporák IsEasy LI5-01 | 194.00 € | **189.00 €** | 16.0 % | **13.0 %** | 189.06 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 295.50 € | **290.50 €** | 12.9 % | **11.0 %** | 290.69 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 205.00 € | **200.00 €** | 11.0 % | **8.3 %** | 200.34 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 178.00 € | **173.00 €** | 8.8 % | **5.7 %** | 173.46 € | cena podľa najlacnejšieho iného predajcu |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 82.00 € | **77.00 €** | 22.1 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **15.00 €** | 84.7 % | **38.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.50 €** | 22.6 % | **6.5 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.50 €** | 25.1 % | **6.6 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **27.50 €** | 66.0 % | **41.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **25.00 €** | 45.7 % | **22.5 %** | 25.09 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 36.4 % | **14.7 %** | 25.28 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.90 €** | 37.6 % | **11.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **105.00 €** | 29.4 % | **23.9 %** | 105.14 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **21.50 €** | 65.3 % | **35.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 41.1 % | **11.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 40.6 % | **11.1 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 337.00 € | **332.50 €** | 11.5 % | **10.0 %** | 332.51 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo infra sušička NIR+ | 180.50 € | **176.00 €** | 8.8 % | **6.0 %** | 176.03 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 132.00 € | **127.50 €** | 16.8 % | **12.8 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338DD | 525.50 € | **521.00 €** | 7.0 % | **6.1 %** | 521.22 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S100 na detekciu úniku | 102.00 € | **97.50 €** | 20.5 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Akumulátor Lipo Gens Ace G-Tech 3300mAh 22,2V 60C 6S... | 72.00 € | **67.50 €** | 22.9 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Automatické kŕmidlo pre domáce zvieratá s tlačidlami... | 39.00 € | **34.50 €** | 30.3 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **35.50 €** | 61.2 % | **43.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 39.8 % | **33.6 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.00 €** | 41.0 % | **5.2 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 62.9 % | **21.5 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **88.00 €** | 35.9 % | **29.6 %** | 88.41 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 61.8 % | **38.8 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **20.50 €** | 47.6 % | **23.0 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **18.50 €** | 65.2 % | **35.5 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 3611A | 110.50 € | **106.50 €** | 9.9 % | **6.0 %** | 106.53 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.50 € | **151.50 €** | 8.8 % | **6.0 %** | 151.61 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 277.00 € | **273.00 €** | 11.5 % | **9.9 %** | 273.18 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 170.00 € | **166.00 €** | 11.4 % | **8.8 %** | 166.21 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 244.00 € | **240.00 €** | 8.0 % | **6.2 %** | 240.36 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 62.50 € | **58.50 €** | 13.0 % | **5.8 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 198.50 € | **194.50 €** | 9.0 % | **6.8 %** | 194.90 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 62.00 € | **58.00 €** | 56.3 % | **46.2 %** | 58.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.00 €** | 43.3 % | **14.7 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 41.8 % | **13.5 %** | 16.41 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 26.6 % | **14.0 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 183.90 € | **180.00 €** | 11.7 % | **9.3 %** | 180.10 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 55.90 € | **52.00 €** | 15.3 % | **7.2 %** | 52.11 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **557.00 €** | 7.3 % | **6.6 %** | 557.30 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.50 €** | 21.7 % | **5.3 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **21.00 €** | 62.7 % | **38.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 45C 3S1P lipo battery ... | 57.50 € | **53.90 €** | 22.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Maxxo Sous Vide SV06 | 134.50 € | **131.00 €** | 11.4 % | **8.5 %** | 131.07 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Hurricane H5 Plus | 77.00 € | **73.50 €** | 10.9 % | **5.9 %** | 73.57 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.00 € | **324.50 €** | 7.7 % | **6.6 %** | 324.61 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 212.00 € | **208.50 €** | 7.7 % | **6.0 %** | 208.65 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 524.00 € | **520.50 €** | 7.3 % | **6.6 %** | 520.66 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 164.50 € | **161.00 €** | 8.4 % | **6.1 %** | 161.22 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 463.00 € | **459.50 €** | 6.8 % | **6.0 %** | 459.82 € | cena podľa najlacnejšieho iného predajcu |
| Termostat MOES ZHT-SR-GB s protokolom ZigBee pre ele... | 57.50 € | **54.00 €** | 22.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blesk GODOX TT520III TTL | 66.00 € | **62.50 €** | 21.6 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GODOX CBA-PA0007 Pozadie | 43.00 € | **39.50 €** | 25.8 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GODOX CBA-TA0007 Pozadie | 43.00 € | **39.50 €** | 25.8 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GODOX CBA-TA0016 Skladacie pozadie | 43.00 € | **39.50 €** | 24.8 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.00 €** | 41.2 % | **12.0 %** | 13.41 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.11 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **23.90 €** | 31.8 % | **15.9 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 46.0 % | **39.3 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **24.50 €** | 56.9 % | **38.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **24.50 €** | 61.9 % | **43.3 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 50.0 % | **43.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.50 €** | 37.9 % | **21.1 %** | 22.67 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 190.00 € | **186.90 €** | 8.8 % | **7.0 %** | 186.99 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **59.50 €** | 50.1 % | **42.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 361.50 € | **358.50 €** | 6.9 % | **6.0 %** | 358.64 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, strieborná) | 275.50 € | **272.50 €** | 25.2 % | **23.9 %** | 272.84 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 61.00 € | **58.00 €** | 10.5 % | **5.1 %** | 58.44 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **16.00 €** | 56.1 % | **31.7 %** | 16.04 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **16.00 €** | 59.8 % | **34.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper ABS (sivý) | 17.43 € | **14.50 €** | 40.2 % | **16.6 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **15.00 €** | 58.4 % | **32.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **34.50 €** | 43.8 % | **32.6 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 46.2 % | **20.3 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 47.0 % | **21.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.00 €** | 41.3 % | **14.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **49.50 €** | 35.4 % | **28.2 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 60.0 % | **44.3 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.90 €** | 44.0 % | **35.1 %** | 39.93 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.00 €** | 23.0 % | **9.1 %** | 20.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **20.00 €** | 44.2 % | **27.9 %** | 20.40 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 157.00 € | **154.50 €** | 7.8 % | **6.1 %** | 154.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.00 € | **19.50 €** | 35.3 % | **19.9 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Budík Blitzwolf BW-FW10 s nabíjačkou 2xUSB-A, 4xUSB-... | 55.50 € | **53.00 €** | 20.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tattu R-Line verzia 5.0 850 mAh 14,8 V 4S1P 150C XT3... | 20.50 € | **18.00 €** | 30.6 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **17.50 €** | 59.5 % | **39.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 19.99 € | **17.50 €** | 58.4 % | **38.7 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **15.00 €** | 60.3 % | **38.0 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| EPSON T0715 Multipack, C13T07154012 | 60.90 € | **58.50 €** | 10.2 % | **5.9 %** | 48.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.50 €** | 34.1 % | **12.8 %** | 12.70 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 46.4 % | **23.2 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 59.6 % | **34.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **24.90 €** | 26.3 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **166.90 €** | 46.9 % | **45.0 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **47.50 €** | 49.7 % | **43.0 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **47.50 €** | 48.9 % | **42.3 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **47.50 €** | 43.9 % | **37.5 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **47.50 €** | 46.9 % | **40.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **25.00 €** | 36.8 % | **25.9 %** | 25.37 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 20.3 % | **10.1 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **22.50 €** | 43.4 % | **31.1 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 White | 44.00 € | **41.90 €** | 15.3 % | **9.8 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Black | 44.00 € | **41.90 €** | 15.3 % | **9.8 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Pink | 44.00 € | **41.90 €** | 15.3 % | **9.8 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L Automatic Pet Feeder Button Version (White) | 39.00 € | **36.90 €** | 22.0 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Bočná kefa MOVA pre modely P10 Pro Ultra/Z50 Ultra/G... | 15.00 € | **12.90 €** | 35.7 % | **16.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| EDIFIER ES60 reproduktor černý | 96.00 € | **93.90 €** | 12.4 % | **9.9 %** | 93.95 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 46.4 % | **42.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **20.50 €** | 33.1 % | **21.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 13.00 € | **11.00 €** | 34.6 % | **13.9 %** | 11.09 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 15.00 € | **13.00 €** | 131.8 % | **100.9 %** | 13.09 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 105.00 € | **103.00 €** | 11.5 % | **9.4 %** | 103.20 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 105.00 € | **103.00 €** | 7.3 % | **5.2 %** | 103.20 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 44.50 € | **42.50 €** | 45.1 % | **38.6 %** | 42.85 € | cena podľa najlacnejšieho iného predajcu |
| Filter PGYTECH VND 6-9 stop pre DJI Mavic 3 / Mavic ... | 13.50 € | **11.50 €** | 61.6 % | **37.7 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 27.00 € | **25.00 €** | 16.9 % | **8.2 %** | 25.41 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO White | 50.00 € | **48.00 €** | 13.5 % | **9.0 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Black | 50.00 € | **48.00 €** | 13.5 % | **9.0 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Pink | 50.00 € | **48.00 €** | 13.5 % | **9.0 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W2 | 25.00 € | **23.00 €** | 24.3 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 57.3 % | **41.7 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 27.7 % | **15.0 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **16.00 €** | 44.9 % | **29.3 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **15.50 €** | 28.0 % | **13.8 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **35.50 €** | 43.8 % | **36.5 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **14.50 €** | 52.6 % | **34.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **33.00 €** | 43.7 % | **36.1 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 56.7 % | **35.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **23.00 €** | 47.6 % | **38.0 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **21.00 €** | 24.1 % | **15.6 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 37.4 % | **27.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT20R-WH-3A-W-WiFi | 31.00 € | **29.50 €** | 16.3 % | **10.7 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **178.90 €** | 45.0 % | **43.8 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 309.00 € | **307.50 €** | 6.8 % | **6.3 %** | 307.64 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 White | 33.50 € | **32.00 €** | 14.2 % | **9.1 %** | 32.26 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Pink | 33.50 € | **32.00 €** | 14.2 % | **9.1 %** | 32.26 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE F4142PW | 231.00 € | **229.50 €** | 8.0 % | **7.3 %** | 229.76 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 104.00 € | **102.50 €** | 10.1 % | **8.5 %** | 102.85 € | cena podľa najlacnejšieho iného predajcu |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 137.50 € | **136.00 €** | 14.0 % | **12.7 %** | 136.41 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 43.8 % | **33.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada ND filtrov pre DJI Action 6 (ND8/16/32/64) | 26.00 € | **24.50 €** | 21.6 % | **14.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 45.2 % | **34.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **218.90 €** | 41.7 % | **40.7 %** | 219.00 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **17.50 €** | 26.6 % | **16.8 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **17.50 €** | 26.7 % | **16.9 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 48.2 % | **36.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 164.90 € | **163.50 €** | 7.1 % | **6.2 %** | 163.74 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.90 € | **61.50 €** | 9.1 % | **6.7 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRKI519E41 | 502.90 € | **501.50 €** | 7.2 % | **6.9 %** | 501.78 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.50 €** | 34.1 % | **21.8 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 49.2 % | **43.4 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **248.90 €** | 43.6 % | **42.9 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| BWT filtrační stanice Aqualizer | 63.00 € | **61.90 €** | 24.1 % | **21.9 %** | 61.94 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 49.1 % | **42.5 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **63.50 €** | 34.7 % | **32.4 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 51.5 % | **44.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110GMP 2x GLAN, 8x GLAN s ... | 52.50 € | **51.50 €** | 7.4 % | **5.3 %** | 51.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amica SHM 51071 W | 246.90 € | **245.90 €** | 8.0 % | **7.5 %** | 245.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 3.80 € | **2.80 €** | 117.6 % | **60.3 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 398.90 € | **397.90 €** | 5.8 % | **5.5 %** | 398.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 207.90 € | **206.90 €** | 37461.0 % | **37280.3 %** | 207.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 11.50 € | **10.50 €** | 19.6 % | **9.2 %** | 10.73 € | cena podľa najlacnejšieho iného predajcu |
| BEKO HII64500UFT | 360.00 € | **359.00 €** | 7.1 % | **6.8 %** | 359.25 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Pro – palubná kamera | 137.00 € | **136.00 €** | 23.3 % | **22.4 %** | 136.31 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 30 V2 /bílé/ 0010/3955 | 64.50 € | **63.50 €** | 10.1 % | **8.3 %** | 63.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash K430 + 6 ventilátorov (č... | 66.90 € | **65.90 €** | 16.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **19.00 €** | 43.7 % | **36.6 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **19.00 €** | 41.8 % | **34.8 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **156.90 €** | 46.2 % | **45.3 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **16.50 €** | 40.7 % | **33.2 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 49.0 % | **41.1 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **16.50 €** | 46.8 % | **39.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **36.50 €** | 43.6 % | **40.0 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **14.00 €** | 51.0 % | **42.3 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **54.00 €** | 38.6 % | **36.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 42.9 % | **41.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 52.3 % | **51.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 41.5 % | **41.0 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **26.50 €** | 39.8 % | **36.4 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **46.50 €** | 29.9 % | **28.2 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prepínač WiFi Sonoff S-MATE2 (bez neutr... | 7.20 € | **6.60 €** | 15.7 % | **6.0 %** | 2.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentná poistka s WIFI Avatto WCB16 | 15.50 € | **14.90 €** | 20.9 % | **16.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sunnylife ZJ153 Nákupná taška | 13.50 € | **12.90 €** | 21.0 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sunnylife ZJ153 Nákupná taška | 13.50 € | **12.90 €** | 21.0 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **64.00 €** | 25.1 % | **23.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD100SX | 405.00 € | **404.50 €** | 6.9 % | **6.8 %** | 404.53 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 468.00 € | **467.50 €** | 11.7 % | **11.6 %** | 467.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.00 € | **11.50 €** | 41.0 % | **35.1 %** | 11.60 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.00 € | **141.50 €** | 7.0 % | **6.6 %** | 141.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW402HE0 | 129.50 € | **129.00 €** | 10.2 % | **9.7 %** | 129.32 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 20.00 € | **19.50 €** | 39.3 % | **35.8 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 340.00 € | **339.50 €** | 24.2 % | **24.1 %** | 339.89 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 61.00 € | **60.50 €** | 86.4 % | **84.9 %** | 60.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušák Comfort Tower 420 | 47.50 € | **47.00 €** | 9.6 % | **8.5 %** | 47.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 41.00 € | **40.50 €** | 9.4 % | **8.0 %** | 40.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 47.00 € | **46.50 €** | 7.3 % | **6.2 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 313.00 € | **312.50 €** | 16.5 % | **16.4 %** | 312.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 468.00 € | **467.50 €** | 8.1 % | **8.0 %** | 467.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 922.00 € | **921.50 €** | 17.2 % | **17.1 %** | 921.89 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 929.50 € | **929.00 €** | 9.8 % | **9.8 %** | 929.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 276.00 € | **275.50 €** | 23.6 % | **23.4 %** | 275.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 273.00 € | **272.50 €** | 7.5 % | **7.3 %** | 272.89 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Neptune 4 Max | 392.50 € | **392.00 €** | 8.3 % | **8.1 %** | 392.39 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK TL-MR150 4G LTE WiFi N Router | 69.00 € | **68.50 €** | 8.8 % | **8.1 %** | 68.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 16.50 € | **16.00 €** | 9.7 % | **6.4 %** | 16.39 € | cena podľa najlacnejšieho iného predajcu |
| Kaon MZ-52, satelitní přijímač Skylink | 60.50 € | **60.00 €** | 8.3 % | **7.4 %** | 60.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 605.00 € | **604.50 €** | 5.3 % | **5.2 %** | 604.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 636.00 € | **635.50 €** | 7.4 % | **7.3 %** | 635.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 683.00 € | **682.50 €** | 11.4 % | **11.3 %** | 682.89 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Dreame pre D20 Pro, D20 Pro Plus | 13.00 € | **12.50 €** | 24.8 % | **20.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 30.00 € | **29.50 €** | 18.6 % | **16.6 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovová ochranná klietka PULUZ pre DJI OSMO Pocket 3 ... | 19.00 € | **18.50 €** | 46.1 % | **42.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 24.50 € | **24.00 €** | 23.7 % | **21.2 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 214.50 € | **214.00 €** | 8.2 % | **7.9 %** | 214.50 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife DZ-144 Držiak | 15.00 € | **14.50 €** | 18.7 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Hliníková upínací svorka pre modely RS 4 Mini / RS 4... | 13.00 € | **12.50 €** | 21.2 % | **16.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sunnylife 1/4'' rýchloupínací držiak s mačacím uchom... | 13.00 € | **12.50 €** | 20.4 % | **15.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sunnylife MJ-175 – rukoväť na batoh | 15.00 € | **14.50 €** | 18.3 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačový ventilátor Darkflash Gauss G24 (čierny) | 12.00 € | **11.50 €** | 19.6 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vlákno Creality TPU (biele) | 19.99 € | **19.50 €** | 41.8 % | **38.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 39.2 % | **38.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **16.50 €** | 42.8 % | **39.3 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM9802B | 128.90 € | **128.50 €** | 9.3 % | **9.0 %** | 128.68 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S160 na detekciu úniku | 122.90 € | **122.50 €** | 46.6 % | **46.1 %** | 122.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.90 €** | 26.6 % | **22.5 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 HD | 20.90 € | **20.50 €** | 19.3 % | **17.0 %** | 20.75 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 34.90 € | **34.50 €** | 14.7 % | **13.4 %** | 34.79 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7355CH | 58.90 € | **58.50 €** | 19.6 % | **18.8 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **37.50 €** | 31.7 % | **30.3 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **16.00 €** | 28.7 % | **25.6 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA-CF (tmavozelený) | 18.90 € | **18.50 €** | 11.3 % | **8.9 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.90 € | **369.50 €** | 7.1 % | **7.0 %** | 369.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 29.2 % | **26.0 %** | 11.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.00 € | **8.80 €** | 42.1 % | **38.9 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **47.00 €** | 38.7 % | **38.3 %** | 47.15 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin L Steel | 28.00 € | **27.90 €** | 8.5 % | **8.1 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 25.00 € | **24.90 €** | 16.6 % | **16.1 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **22.90 €** | 14.0 % | **13.5 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Tritanová láhev na pití 1 l černá | 31.00 € | **30.90 €** | 58.8 % | **58.3 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| Podpera pozadia pre fotoštúdio Puluz 70x200cm + poza... | 21.00 € | **20.90 €** | 15.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **24.50 €** | 36.2 % | **35.7 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu |
| Gyroskop pre RC modely áut SkyRC Gyro GC301 | 21.00 € | **20.90 €** | 16.4 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight kliešťový multimeter, 20 - 200A | 6.50 € | **6.40 €** | 35.8 % | **33.8 %** | 6.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 9.50 € | **9.40 €** | 19.0 % | **17.8 %** | 9.49 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 146.00 € | **145.90 €** | 8.6 % | **8.5 %** | 145.98 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 67.00 € | **66.90 €** | 6.6 % | **6.4 %** | 67.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 107.00 € | **106.90 €** | 18.6 % | **18.5 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |

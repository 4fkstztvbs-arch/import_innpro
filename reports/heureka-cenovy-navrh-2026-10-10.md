# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-10

Vstup: `premiumstore-sk_2026-10-10_09-55.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7437**
- Návrh **zvýšiť** cenu: **265** produktov
- Návrh **znížiť** cenu: **321** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6851** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **71**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **764**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (265)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Pro 24 GEN 3 GT2402 | 1248.50 € | **1565.90 €** | 20.4 % | **51.0 %** | 1566.00 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Canon | 237.00 € | **294.50 €** | 14.9 % | **42.8 %** | 294.67 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 159.00 € | **207.50 €** | 15.0 % | **50.1 %** | 207.89 € | cena podľa najlacnejšieho iného predajcu |
| BEKO CEG7302B | 248.90 € | **297.00 €** | 10.1 % | **31.4 %** | 297.05 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pix Cut 2 v 1 | 268.50 € | **311.00 €** | 15.1 % | **33.3 %** | 311.40 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon P1 | 582.00 € | **614.90 €** | 5.0 % | **10.9 %** | 614.99 € | cena podľa najlacnejšieho iného predajcu |
| Mobilný ovládač GameSir G8+ MFi (sivý) | 65.50 € | **91.50 €** | 20.1 % | **67.8 %** | 91.75 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 234.00 € | **258.00 €** | 10.2 % | **21.5 %** | 258.20 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD100SX | 416.90 € | **439.00 €** | 10.0 % | **15.9 %** | 439.20 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra S1 Max Combo | 798.90 € | **820.50 €** | 5.3 % | **8.1 %** | 820.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight elektrický sušiak uterákov 200W | 103.00 € | **123.90 €** | 17.6 % | **41.4 %** | 123.96 € | cena podľa najlacnejšieho iného predajcu |
| Mlynček na kávu AMZCHEF CE-CG209-SV (strieborný) | 93.50 € | **114.00 €** | 15.1 % | **40.3 %** | 114.26 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V860III TTL pre Olympus | 199.90 € | **216.90 €** | 5.0 % | **13.9 %** | 216.99 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet HUION Kamvas Pad 12 KP1202 | 461.00 € | **477.50 €** | 15.0 % | **19.1 %** | 477.71 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-TA61L3C-LQ 8.0 Mpix venkovní kompaktn... | 322.50 € | **338.90 €** | 0.0 % | **5.1 %** | 237.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 217.00 € | **232.00 €** | 9.8 % | **17.4 %** | 232.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 141.50 € | **155.90 €** | 38.5 % | **52.6 %** | 155.95 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 47.50 € | **61.90 €** | 19.7 % | **56.0 %** | 61.92 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač CE-ZM1902M-SV (strieborný) | 71.50 € | **84.00 €** | 14.8 % | **34.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 239.90 € | **249.90 €** | 10.3 % | **14.9 %** | 250.00 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Fifine Tank1 (biely) | 58.50 € | **68.50 €** | 15.2 % | **34.9 %** | 68.84 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1902B-SV | 81.00 € | **90.50 €** | 15.0 % | **28.5 %** | 90.62 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu Ruhhy 26050 | 79.50 € | **89.00 €** | 17.7 % | **31.8 %** | 89.29 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 52.00 € | **61.50 €** | 6.1 % | **25.4 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 130.50 € | **139.00 €** | 15.0 % | **22.5 %** | 139.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 29.50 € | **38.00 €** | 35.8 % | **74.9 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **53.50 €** | 15.5 % | **35.8 %** | 53.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 STD | 108.50 € | **115.90 €** | 13.6 % | **21.3 %** | 115.92 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 74.50 € | **81.90 €** | 14.3 % | **25.7 %** | 81.99 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600R RGB | 133.90 € | **140.90 €** | 15.1 % | **21.1 %** | 140.96 € | cena podľa najlacnejšieho iného predajcu |
| Tefal SV9201E0 | 186.50 € | **193.00 €** | 5.2 % | **8.9 %** | 193.10 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 290.50 € | **297.00 €** | 11.2 % | **13.7 %** | 297.17 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 290.50 € | **297.00 €** | 6.8 % | **9.2 %** | 297.17 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **69.00 €** | 14.9 % | **26.8 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 34.00 € | **40.50 €** | 14.5 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono WM622 PBC2 | 47.50 € | **54.00 €** | 30.7 % | **48.6 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X50-PoE(1-pack) WiFi 6, 1x ... | 215.50 € | **221.90 €** | 86.9 % | **92.5 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu |
| KMP H125 (CZ101AE) | 17.00 € | **22.50 €** | 61.3 % | **113.5 %** | 22.73 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM016 12 kg výrobník ľadových kociek (čierny) | 78.50 € | **83.90 €** | 15.3 % | **23.3 %** | 83.96 € | cena podľa najlacnejšieho iného predajcu |
| Kryt na toaletu pre mačky Petkit Hood | 30.90 € | **36.00 €** | 15.3 % | **34.4 %** | 36.48 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná cyklistická pumpa Flextail Tiny Bike Pump P... | 61.50 € | **66.50 €** | 15.3 % | **24.7 %** | 66.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 20.50 € | **25.50 €** | 11.8 % | **39.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 277.00 € | **282.00 €** | 52.4 % | **55.2 %** | 282.40 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 83.90 € | **88.50 €** | 5.4 % | **11.2 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB46E838 | 59.50 € | **64.00 €** | 10.7 % | **19.1 %** | 64.28 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 183.00 € | **187.00 €** | 5.5 % | **7.9 %** | 187.18 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 183.00 € | **187.00 €** | 5.5 % | **7.9 %** | 187.18 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 126.50 € | **130.50 €** | 25.9 % | **29.9 %** | 130.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 54.50 € | **58.50 €** | 12.4 % | **20.7 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, neutrálna... | 11.00 € | **14.90 €** | 43.1 % | **93.8 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, teplá bie... | 11.00 € | **14.90 €** | 43.1 % | **93.8 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 35dB | 19.00 € | **22.90 €** | 39.7 % | **68.3 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER BL120B – LED svetlo na selfie s upínacím mech... | 21.00 € | **24.50 €** | 13.8 % | **32.8 %** | 24.66 € | cena podľa najlacnejšieho iného predajcu |
| Impregnace na kožené oděvy INPRODUCTS WAX 400 ml | 25.50 € | **29.00 €** | 3.7 % | **17.9 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 79.50 € | **83.00 €** | 16.6 % | **21.7 %** | 83.30 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link SM6220-1M SFP+ Direct Attach Cable, 25... | 48.50 € | **51.90 €** | 15.3 % | **23.3 %** | 51.94 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 37.90 € | **41.00 €** | 6.2 % | **14.9 %** | 41.05 € | cena podľa najlacnejšieho iného predajcu |
| Swan OS-10 Black | 220.90 € | **223.90 €** | 10.2 % | **11.7 %** | 223.92 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit MINI ULTRA Carplay a An... | 14.00 € | **17.00 €** | 14.9 % | **39.5 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 210.00 € | **213.00 €** | 9.8 % | **11.4 %** | 213.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 27.50 € | **30.50 €** | 19.1 % | **32.1 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C 20 W fast charger | 5.00 € | **7.70 €** | 24.7 % | **92.0 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 5.00 € | **7.70 €** | 34.6 % | **107.3 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 5.00 € | **7.70 €** | 34.6 % | **107.3 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová vesta HMS PREMIUM KTO30 | 128.00 € | **130.50 €** | 3.3 % | **5.4 %** | 116.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 4.60 € | **7.10 €** | 43.8 % | **122.0 %** | 7.11 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.50 € | **25.00 €** | 14.1 % | **26.8 %** | 25.01 € | cena podľa najlacnejšieho iného predajcu |
| LED stropní světlo Adviti VITO AD-PL-6515WLZM/CCT TUYA | 34.00 € | **36.50 €** | 31.6 % | **41.2 %** | 36.85 € | cena podľa najlacnejšieho iného predajcu |
| ETA 5180 91010 sklo | 12.00 € | **14.50 €** | 10.5 % | **33.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 63.50 € | **65.90 €** | 19.4 % | **23.9 %** | 65.96 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 61.90 € | **63.90 €** | 16.2 % | **20.0 %** | 63.93 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Perfect Steam Air Board S/M | 14.00 € | **16.00 €** | 6.3 % | **21.5 %** | 16.14 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 86.50 € | **88.50 €** | 22.5 % | **25.4 %** | 88.88 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP venkovní NEDIS WIFICO22CWT / Wi-Fi / 3MP /... | 85.50 € | **87.50 €** | 5.4 % | **7.8 %** | 87.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer X32 COMPACT | 1851.00 € | **1853.00 €** | 6.5 % | **6.6 %** | 1853.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.00 € | **8.90 €** | 44.4 % | **83.6 %** | 8.95 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 58.90 € | **60.50 €** | 6.5 % | **9.4 %** | 60.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.30 € | **3.90 €** | 31.7 % | **123.3 %** | 3.95 € | cena podľa najlacnejšieho iného predajcu |
| Banquet Jídlonosič ner., 4 díly | 11.90 € | **13.50 €** | 11.7 % | **26.7 %** | 13.63 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 119.00 € | **120.50 €** | 10.1 % | **11.5 %** | 120.60 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-M, 50 m, viacfarebná... | 20.50 € | **22.00 €** | 43.2 % | **53.7 %** | 22.12 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 36.50 € | **38.00 €** | 59.2 % | **65.7 %** | 38.12 € | cena podľa najlacnejšieho iného predajcu |
| myPhone 3510 LTE černý | 60.50 € | **62.00 €** | 8.8 % | **11.5 %** | 62.16 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (čierny) | 12.00 € | **13.50 €** | 22.4 % | **37.7 %** | 13.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový zvonček, do zásuvky, 120m, biely | 18.50 € | **20.00 €** | 7.4 % | **16.1 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny COAX konektor priamy - typ Taliansko... | 5.10 € | **6.50 €** | 49.7 % | **90.8 %** | 6.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 3.50 € | **4.70 €** | 34.2 % | **80.2 %** | 4.76 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3079B | 40.90 € | **42.00 €** | 10.7 % | **13.6 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 7.80 € | **8.90 €** | 16.8 % | **33.3 %** | 9.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE VQ1500D active PA subwoofer | 498.50 € | **499.50 €** | 74.2 % | **74.6 %** | 499.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lištal pre LED pásky 2, 18x9mm, ml... | 2.60 € | **3.60 €** | 40.9 % | **95.1 %** | 3.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta pre LED pásiky, rohová, 16x1... | 3.00 € | **4.00 €** | 43.5 % | **91.3 %** | 4.10 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 76.90 € | **77.90 €** | 5.4 % | **6.7 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 76.90 € | **77.90 €** | 8.6 % | **10.0 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/250 Ohm | 334.90 € | **335.90 €** | 68.2 % | **68.7 %** | 336.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/ 80 Ohm | 380.90 € | **381.90 €** | 25.5 % | **25.8 %** | 382.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 445.90 € | **446.90 €** | 35.3 % | **35.6 %** | 447.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 220.90 € | **221.90 €** | 27.7 % | **28.2 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 296.00 € | **297.00 €** | 19.6 % | **20.0 %** | 297.14 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 827.50 € | **828.50 €** | 27.1 % | **27.2 %** | 828.64 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 13.50 € | **14.50 €** | 5.2 % | **13.0 %** | 14.75 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Snacker S3 Stainless Steel | 14.50 € | **15.50 €** | 5.8 % | **13.1 %** | 15.76 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 988.00 € | **989.00 €** | 12.7 % | **12.8 %** | 989.29 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 27.50 € | **28.50 €** | 6.2 % | **10.0 %** | 28.81 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 49.00 € | **50.00 €** | 57.4 % | **60.6 %** | 50.34 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1383.50 € | **1384.50 €** | 11.6 % | **11.7 %** | 1384.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 11.50 € | **12.50 €** | 6.4 % | **15.6 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Letové pedále MOZA Racing AS019 | 344.00 € | **345.00 €** | 6.4 % | **6.7 %** | 345.49 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE NRS8182KX | 497.00 € | **498.00 €** | 5.3 % | **5.5 %** | 498.50 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 141.00 € | **141.90 €** | 6.2 % | **6.9 %** | 142.00 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 686.00 € | **686.90 €** | 36.3 % | **36.4 %** | 686.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta s bočnicami pre LED pásiky, ... | 3.20 € | **4.00 €** | 42.9 % | **78.7 %** | 4.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.60 € | **5.30 €** | 32.1 % | **52.3 %** | 5.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta pre LED pásky 1, 17x8mm, mli... | 2.90 € | **3.60 €** | 40.3 % | **74.2 %** | 3.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 7.10 € | **7.80 €** | 38.1 % | **51.7 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 465.90 € | **466.50 €** | 18.2 % | **18.3 %** | 466.66 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 8x42 monokulárny | 23.90 € | **24.50 €** | 10.8 % | **13.6 %** | 24.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 1.70 € | **2.30 €** | 32.9 % | **79.8 %** | 2.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **4.10 €** | 31.7 % | **54.3 %** | 4.11 € | cena podľa najlacnejšieho iného predajcu |
| Teplovzdušný ventilátor TEESA TSA8027 | 13.90 € | **14.50 €** | 10.1 % | **14.9 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **29.50 €** | 15.6 % | **17.6 %** | 29.51 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 072L čidlo detekce blesků | 49.00 € | **49.50 €** | 9.1 % | **10.2 %** | 49.51 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 58.00 € | **58.50 €** | 31.6 % | **32.8 %** | 58.51 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 101.50 € | **102.00 €** | 12.9 % | **13.5 %** | 102.01 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 250.00 € | **250.50 €** | 16.4 % | **16.7 %** | 250.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 23.50 € | **24.00 €** | 33.4 % | **36.3 %** | 24.02 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 361.50 € | **362.00 €** | 80.8 % | **81.0 %** | 362.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.00 € | **14.50 €** | 14.3 % | **18.4 %** | 14.53 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NX1000D | 374.00 € | **374.50 €** | 80.0 % | **80.2 %** | 374.53 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 374.00 € | **374.50 €** | 48.8 % | **49.0 %** | 374.53 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 339.50 € | **340.00 €** | 6.8 % | **6.9 %** | 340.03 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link MERCUSYS MR25WBE BE3600 WiFi 7, ... | 56.00 € | **56.50 €** | 5.1 % | **6.0 %** | 56.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna meteostanica, prehľadný a diza... | 62.00 € | **62.50 €** | 20.8 % | **21.8 %** | 62.55 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 249.00 € | **249.50 €** | 73.5 % | **73.9 %** | 249.55 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link TL-SM5220-3M SFP+ Direct Attach Cable,... | 31.00 € | **31.50 €** | 5.1 % | **6.8 %** | 31.55 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 334.00 € | **334.50 €** | 22.3 % | **22.5 %** | 334.55 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 208.00 € | **208.50 €** | 34.3 % | **34.6 %** | 208.56 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI PRO DI4000 V2 | 161.50 € | **162.00 €** | 25.5 % | **25.9 %** | 162.06 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 174.00 € | **174.50 €** | 25.8 % | **26.2 %** | 174.56 € | cena podľa najlacnejšieho iného predajcu |
| Klark Teknik DN200 V2 DI Box | 186.50 € | **187.00 €** | 19.8 % | **20.1 %** | 187.06 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 126.50 € | **127.00 €** | 11.1 % | **11.5 %** | 127.07 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon CRITICAL MASS, vokálny efektový pedál | 124.00 € | **124.50 €** | 19.8 % | **20.3 %** | 124.57 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 126.00 € | **126.50 €** | 15.4 % | **15.9 %** | 126.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 47.50 € | **48.00 €** | 13.7 % | **14.9 %** | 48.08 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.00 € | **22.50 €** | 9.3 % | **11.7 %** | 22.59 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 50.50 € | **51.00 €** | 13.0 % | **14.2 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 50.50 € | **51.00 €** | 36.1 % | **37.4 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 188.00 € | **188.50 €** | 11.7 % | **12.0 %** | 188.59 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 256.50 € | **257.00 €** | 19.9 % | **20.1 %** | 257.09 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 291.50 € | **292.00 €** | 25.6 % | **25.9 %** | 292.09 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní filtrační kapsle GARNI BS 45T | 16.00 € | **16.50 €** | 14.4 % | **18.0 %** | 16.59 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.00 € | **87.50 €** | 21.7 % | **22.4 %** | 87.59 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 77.00 € | **77.50 €** | 16.6 % | **17.4 %** | 77.59 € | cena podľa najlacnejšieho iného predajcu |
| Televes DAT HD BOSS 700 TFORCE LTE700 | 91.00 € | **91.50 €** | 31.6 % | **32.3 %** | 91.59 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 186.50 € | **187.00 €** | 6.8 % | **7.1 %** | 187.09 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 132.50 € | **133.00 €** | 6.7 % | **7.1 %** | 133.09 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link HB210(1-pack) WiFi 7 AP BE3600, ... | 117.50 € | **118.00 €** | 7.0 % | **7.4 %** | 118.10 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 155.50 € | **156.00 €** | 11.3 % | **11.6 %** | 156.10 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 229.00 € | **229.50 €** | 16.4 % | **16.6 %** | 229.61 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-0360 4.0 Mpix venkovní IP dome kamera... | 117.00 € | **117.50 €** | 17.1 % | **17.6 %** | 117.61 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 265.50 € | **266.00 €** | 7.1 % | **7.3 %** | 266.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 14.00 € | **14.50 €** | 17.1 % | **21.3 %** | 14.64 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 286.50 € | **287.00 €** | 16.1 % | **16.3 %** | 287.17 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 319.50 € | **320.00 €** | 12.8 % | **13.0 %** | 320.17 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 295.50 € | **296.00 €** | 12.6 % | **12.8 %** | 296.18 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 129.00 € | **129.50 €** | 7.7 % | **8.1 %** | 129.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 10.50 € | **11.00 €** | 43.2 % | **50.1 %** | 11.20 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.00 € | **208.50 €** | 16.3 % | **16.6 %** | 208.70 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 314.00 € | **314.50 €** | 5.1 % | **5.3 %** | 314.70 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 144.00 € | **144.50 €** | 52.2 % | **52.8 %** | 144.70 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.00 € | **187.50 €** | 10.2 % | **10.5 %** | 187.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 20.50 € | **21.00 €** | 42.9 % | **46.4 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 50W, 4600lm, 5000K, IP65 | 20.50 € | **21.00 €** | 42.9 % | **46.4 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic UniTune Clip | 37.00 € | **37.50 €** | 12.0 % | **13.5 %** | 37.72 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 345.50 € | **346.00 €** | 7.0 % | **7.1 %** | 346.24 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 345.50 € | **346.00 €** | 11.6 % | **11.7 %** | 346.24 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 496.00 € | **496.50 €** | 5.2 % | **5.3 %** | 496.75 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR PD100 | 20.00 € | **20.50 €** | 35.3 % | **38.7 %** | 20.76 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA37BE AX 1200, WiFi ... | 33.00 € | **33.50 €** | 10.3 % | **12.0 %** | 33.78 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 343.50 € | **344.00 €** | 19.9 % | **20.1 %** | 344.29 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.00 € | **239.50 €** | 11.9 % | **12.2 %** | 239.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.00 € | **471.50 €** | 8.8 % | **9.0 %** | 471.79 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 428.00 € | **428.50 €** | 14.2 % | **14.3 %** | 428.79 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 418.00 € | **418.50 €** | 13.4 % | **13.5 %** | 418.80 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 262.00 € | **262.50 €** | 22.5 % | **22.8 %** | 262.80 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri Carbon 2 | 371.00 € | **371.50 €** | 7.1 % | **7.3 %** | 371.81 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 319.00 € | **319.50 €** | 19.4 % | **19.6 %** | 319.87 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 307.00 € | **307.50 €** | 36.3 % | **36.5 %** | 307.87 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9310M klávesnice bílá | 24.00 € | **24.50 €** | 9.6 % | **11.8 %** | 24.88 € | cena podľa najlacnejšieho iného predajcu |
| Zvukový mixér a zvuková karta AMC2 Neo | 42.50 € | **43.00 €** | 14.8 % | **16.1 %** | 43.40 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 500.50 € | **501.00 €** | 7.8 % | **7.9 %** | 501.46 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 500.50 € | **501.00 €** | 22.4 % | **22.5 %** | 501.46 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Kuchyňská váha, G2007100 SFERA | 14.50 € | **15.00 €** | 12.5 % | **16.4 %** | 15.49 € | cena podľa najlacnejšieho iného predajcu |
| TechnoLine WS 8005 digitální budík | 22.50 € | **23.00 €** | 12.5 % | **15.0 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 180.50 € | **181.00 €** | 25.0 % | **25.4 %** | 181.49 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.50 € | **216.90 €** | 17.1 % | **17.3 %** | 216.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 97.50 € | **97.90 €** | 23.6 % | **24.1 %** | 97.92 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 246.50 € | **246.90 €** | 30.8 % | **31.0 %** | 246.93 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603GP-Desktop AP WiFi 6, 1x G... | 108.50 € | **108.90 €** | 5.0 % | **5.4 %** | 108.95 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 199.50 € | **199.90 €** | 19.2 % | **19.4 %** | 199.96 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Olympus | 90.50 € | **90.90 €** | 20.1 % | **20.6 %** | 90.97 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 237.50 € | **237.90 €** | 7.0 % | **7.1 %** | 237.97 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 93.50 € | **93.90 €** | 9.7 % | **10.2 %** | 93.98 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.50 € | **70.90 €** | 13.8 % | **14.4 %** | 70.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **89.90 €** | 14.8 % | **15.4 %** | 89.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.50 € | **79.90 €** | 14.6 % | **15.2 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.50 € | **152.90 €** | 19.3 % | **19.6 %** | 152.99 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.50 € | **127.90 €** | 17.0 % | **17.4 %** | 127.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 72.50 € | **72.90 €** | 19.7 % | **20.4 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.50 € | **159.90 €** | 6.5 % | **6.8 %** | 160.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.50 € | **13.90 €** | 31.9 % | **35.8 %** | 13.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.30 € | **5.70 €** | 35.9 % | **46.2 %** | 5.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 12W, E27, 4000K... | 1.40 € | **1.80 €** | 38.8 % | **78.5 %** | 1.89 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI DI600P DI box | 32.50 € | **32.90 €** | 9.9 % | **11.3 %** | 32.91 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V200 | 32.50 € | **32.90 €** | 16.9 % | **18.3 %** | 32.92 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0016 Skladacie pozadie | 42.50 € | **42.90 €** | 23.4 % | **24.5 %** | 42.92 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongVision Mini, fotopast | 42.50 € | **42.90 €** | 10.0 % | **11.0 %** | 42.98 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 38.50 € | **38.90 €** | 17.7 % | **18.9 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (biela) | 23.50 € | **23.90 €** | 29.5 % | **31.7 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (čierna) | 23.50 € | **23.90 €** | 37.5 % | **39.9 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.50 € | **62.90 €** | 16.8 % | **17.6 %** | 62.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 42.50 € | **42.90 €** | 12.3 % | **13.3 %** | 42.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradné trubičky pre alkohol tester Solight... | 1.10 € | **1.40 €** | 22.5 % | **55.9 %** | 1.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér do Indie, typ D | 5.50 € | **5.70 €** | 35.1 % | **40.0 %** | 5.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.40 €** | 30.1 % | **51.8 %** | 1.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.80 € | **9.00 €** | 44.2 % | **47.5 %** | 9.03 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 350.90 € | **351.00 €** | 35.0 % | **35.0 %** | 351.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 299.90 € | **300.00 €** | 36.0 % | **36.0 %** | 300.35 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 299.90 € | **300.00 €** | 36.0 % | **36.0 %** | 300.35 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 344.90 € | **345.00 €** | 27.9 % | **28.0 %** | 345.37 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 317.90 € | **318.00 €** | 18.4 % | **18.4 %** | 318.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 375.90 € | **376.00 €** | 26.7 % | **26.7 %** | 376.44 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 375.90 € | **376.00 €** | 20.6 % | **20.7 %** | 376.44 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 17.90 € | **18.00 €** | 31.3 % | **32.1 %** | 18.03 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 52.90 € | **53.00 €** | 9.4 % | **9.6 %** | 53.04 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 46.90 € | **47.00 €** | 16.4 % | **16.6 %** | 47.05 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.90 € | **36.00 €** | 18.1 % | **18.4 %** | 36.09 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1016 | 19.90 € | **20.00 €** | 15.2 % | **15.8 %** | 20.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB A+C 20 W fast charger | 6.30 € | **6.40 €** | 34.8 % | **36.9 %** | 6.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 5,0 W, 1055lm, 27... | 5.10 € | **5.20 €** | 83.5 % | **87.1 %** | 5.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.50 € | **2.60 €** | 31.1 % | **36.4 %** | 2.61 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.50 € | **3.60 €** | 55.5 % | **59.9 %** | 3.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.50 € | **3.60 €** | 26.5 % | **30.1 %** | 3.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 0.90 € | **1.00 €** | 26.2 % | **40.2 %** | 1.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.40 €** | 25.6 % | **26.9 %** | 9.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.60 € | **9.70 €** | 31.2 % | **32.5 %** | 9.74 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.90 € | **8.00 €** | 35.5 % | **37.2 %** | 8.09 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 76.90 € | **77.00 €** | 21.9 % | **22.0 %** | 77.04 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 92.90 € | **93.00 €** | 17.2 % | **17.4 %** | 93.06 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21L3C-L 2.0 Mpix venkovní dome IP kamera s ... | 90.90 € | **91.00 €** | 17.2 % | **17.3 %** | 91.09 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 83.90 € | **84.00 €** | 27.9 % | **28.1 %** | 84.09 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 232.90 € | **233.00 €** | 23.9 % | **23.9 %** | 233.10 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT4000 74 Wh štartér | 116.90 € | **117.00 €** | 17.7 % | **17.8 %** | 117.11 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1280DB 2.0 (hnedé) | 98.90 € | **99.00 €** | 8.3 % | **8.4 %** | 99.12 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 84.90 € | **85.00 €** | 27.0 % | **27.1 %** | 85.12 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 106.90 € | **107.00 €** | 16.5 % | **16.7 %** | 107.12 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 149.90 € | **150.00 €** | 11.5 % | **11.6 %** | 150.15 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 162.90 € | **163.00 €** | 13.9 % | **14.0 %** | 163.15 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 102.90 € | **103.00 €** | 7.3 % | **7.4 %** | 103.18 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 118.90 € | **119.00 €** | 32.1 % | **32.2 %** | 119.19 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia jednotka TP-Link Flex Bridge 5 3x GLAN, 5 ... | 154.90 € | **155.00 €** | 5.6 % | **5.7 %** | 155.20 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 150.90 € | **151.00 €** | 15.1 % | **15.2 %** | 151.30 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO353VD | 83.90 € | **84.00 €** | 10.3 % | **10.4 %** | 84.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 76.90 € | **77.00 €** | 36.7 % | **36.9 %** | 77.45 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (321)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Smartring RingConn Air Gen 2  (veľkosť 13, strieborn... | 274.90 € | **178.00 €** | 77.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko BDIN38641Q | 424.90 € | **333.50 €** | 43.0 % | **12.2 %** | 333.75 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu MOVA P10 | 566.90 € | **475.50 €** | 41.4 % | **18.6 %** | 475.79 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD200SW | 504.90 € | **427.90 €** | 35.7 % | **15.0 %** | 427.94 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 SensiCare® EW6T106C | 408.90 € | **343.50 €** | 36.9 % | **15.0 %** | 343.55 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 584.50 € | **521.50 €** | 32.5 % | **18.2 %** | 521.60 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný multimediálny prehrávač RAYNEO Pocket TV Pro | 268.90 € | **208.50 €** | 60.1 % | **24.1 %** | 208.63 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TB | 349.50 € | **295.50 €** | 28.4 % | **8.6 %** | 295.83 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP650 D30-Outdoor vonkajšie AP,... | 236.50 € | **187.50 €** | 32.5 % | **5.1 %** | 61.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Soundbar Ultimea Aura S5T | 258.90 € | **210.00 €** | 44.3 % | **17.1 %** | 210.13 € | cena podľa najlacnejšieho iného predajcu |
| POCO F9 Ultra 16/512GB Black | 1022.50 € | **975.90 €** | 10.0 % | **5.0 %** | 794.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO F9 Ultra 16/512GB Red | 1022.50 € | **975.90 €** | 10.0 % | **5.0 %** | 799.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 306.50 € | **260.90 €** | 26.5 % | **7.7 %** | 261.00 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Galaxy S26 FE 256GB Graphite | 978.90 € | **934.50 €** | 10.0 % | **5.1 %** | 615.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 367.00 € | **324.00 €** | 26.5 % | **11.7 %** | 324.29 € | cena podľa najlacnejšieho iného predajcu |
| POCO F8 Ultra 16/512GB Black | 937.00 € | **894.50 €** | 10.0 % | **5.0 %** | 740.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO F9 Ultra 12/256GB Red | 915.90 € | **874.50 €** | 10.0 % | **5.1 %** | 731.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 117A | 263.00 € | **224.00 €** | 24.2 % | **5.8 %** | 224.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 434.00 € | **396.50 €** | 15.0 % | **5.1 %** | 352.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Robotický vysávač ULTENIC MX50 | 453.50 € | **419.90 €** | 15.0 % | **6.5 %** | 420.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 374.00 € | **341.00 €** | 17.2 % | **6.9 %** | 341.10 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EIV84550 | 712.50 € | **680.50 €** | 10.0 % | **5.1 %** | 525.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 340A | 383.50 € | **351.50 €** | 16.7 % | **7.0 %** | 351.53 € | cena podľa najlacnejšieho iného predajcu |
| POCO X8 PRO MAX 12/512GB Black | 617.50 € | **589.50 €** | 10.0 % | **5.0 %** | 495.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO X8 PRO MAX 12/512GB Blue | 617.50 € | **589.50 €** | 10.0 % | **5.0 %** | 495.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO X8 PRO MAX 12/512GB White | 617.50 € | **589.50 €** | 10.0 % | **5.0 %** | 495.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Braun IS5247.VI | 208.50 € | **183.00 €** | 23.0 % | **7.9 %** | 183.06 € | cena podľa najlacnejšieho iného predajcu |
| POCO X8 PRO 12/512GB Black | 511.50 € | **487.90 €** | 10.1 % | **5.0 %** | 363.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO X8 PRO 12/512GB Green | 511.50 € | **487.90 €** | 10.1 % | **5.0 %** | 363.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi Pad 8 8/256GB Gray (71696) | 517.50 € | **493.90 €** | 10.0 % | **5.0 %** | 395.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 189.90 € | **166.90 €** | 58.7 % | **39.5 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GKS5C71CLI | 498.90 € | **476.00 €** | 10.2 % | **5.1 %** | 476.10 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 426.50 € | **404.00 €** | 11.6 % | **5.7 %** | 404.10 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338DD | 543.50 € | **521.00 €** | 10.6 % | **6.1 %** | 521.22 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EOF4P56X | 491.00 € | **468.90 €** | 10.0 % | **5.1 %** | 318.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Albrecht DR 57 | 155.00 € | **134.00 €** | 29.2 % | **11.7 %** | 134.17 € | cena podľa najlacnejšieho iného predajcu |
| POCO X8 PRO 8/256GB Black | 425.90 € | **406.50 €** | 10.0 % | **5.0 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO X8 PRO 8/256GB Green | 425.90 € | **406.50 €** | 10.0 % | **5.0 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO X8 PRO 8/256GB White | 425.90 € | **406.50 €** | 10.0 % | **5.0 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO BDIN38542P | 421.90 € | **402.90 €** | 10.0 % | **5.1 %** | 375.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amazfit T-Rex 3 Pro 48mm Black | 406.90 € | **388.50 €** | 10.1 % | **5.1 %** | 377.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko BDFN26531X | 360.50 € | **343.90 €** | 10.1 % | **5.1 %** | 314.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic DT 770 M 80 Ohm | 179.00 € | **163.50 €** | 15.0 % | **5.0 %** | 153.32 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor Ultima Nova C40 | 298.50 € | **284.00 €** | 14.0 % | **8.5 %** | 284.10 € | cena podľa najlacnejšieho iného predajcu |
| Amazfit Balance 2 Black | 308.90 € | **294.90 €** | 10.1 % | **5.1 %** | 199.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux LIB60420CK | 274.50 € | **261.90 €** | 10.2 % | **5.1 %** | 219.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Naparovač odevov Neakasa Magic 1 | 88.00 € | **75.50 €** | 22.7 % | **5.3 %** | 66.53 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO C95 PRO 8/256GB Black | 255.90 € | **243.90 €** | 10.2 % | **5.0 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO C95 PRO 8/256GB Blue | 255.90 € | **243.90 €** | 10.2 % | **5.0 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| POCO C95 PRO 8/256GB Green | 255.90 € | **243.90 €** | 10.2 % | **5.0 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO HDMI 32400 DTX | 258.90 € | **246.90 €** | 10.1 % | **5.0 %** | 197.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 189.90 € | **178.90 €** | 49.4 % | **40.7 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| LED videolampa GODOX ML100R | 197.90 € | **186.90 €** | 15.1 % | **8.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom PN-14L2 Puzdro Dancing Circle pre iPhone 14 ... | 23.00 € | **12.50 €** | 155.5 % | **38.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| BenQ brašna k projektorům MX711/710/660/ | 46.00 € | **36.00 €** | 46.0 % | **14.3 %** | 36.04 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 238.90 € | **228.90 €** | 11.3 % | **6.7 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z18 W - prenosný monitor s dvoma 18-palcovým... | 318.90 € | **308.90 €** | 10.8 % | **7.4 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 129.50 € | **119.50 €** | 19.5 % | **10.2 %** | 119.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 95.50 € | **86.00 €** | 32.0 % | **18.9 %** | 86.02 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY75X8F0 | 155.50 € | **147.00 €** | 15.2 % | **8.9 %** | 147.20 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EHF6547FXK | 222.50 € | **214.00 €** | 10.0 % | **5.8 %** | 214.32 € | cena podľa najlacnejšieho iného predajcu |
| Victrola VTA-270B Gramofon hnědý | 175.50 € | **167.50 €** | 10.3 % | **5.3 %** | 149.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amazfit Active Max | 174.50 € | **166.90 €** | 10.0 % | **5.2 %** | 136.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Black&Decker BXCSH2001E | 90.90 € | **83.50 €** | 14.3 % | **5.0 %** | 79.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amazfit Active 2 Black (Square) | 154.50 € | **147.50 €** | 10.3 % | **5.3 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung Soundbar HW-B420F | 145.90 € | **139.00 €** | 10.3 % | **5.1 %** | 119.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER DCP-1510E | 140.50 € | **133.90 €** | 10.4 % | **5.2 %** | 128.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED HUB Quadri FIXHU-QR-BK | 38.00 € | **31.50 €** | 27.7 % | **5.8 %** | 31.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Euhomy IM011 Výrobník ľadu, 1,2 l, 12 kg (čierny) | 80.50 € | **74.50 €** | 15.1 % | **6.5 %** | 74.67 € | cena podľa najlacnejšieho iného predajcu |
| Chytrý spínač TP-Link Tapo S110E bezdrôtový | 28.00 € | **22.50 €** | 33.0 % | **6.8 %** | 22.70 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 21,6MM 12 (čierny) | 37.00 € | **31.50 €** | 43.1 % | **21.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 35.90 € | **30.50 €** | 61.9 % | **37.5 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| Salente G4 robotický vysavač | 116.90 € | **111.90 €** | 10.0 % | **5.3 %** | 98.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO MGC20130BFB | 80.50 € | **75.50 €** | 12.3 % | **5.4 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ALI Smart Glasses, černé ASG003 | 88.00 € | **83.00 €** | 21.5 % | **14.6 %** | 83.27 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, černé ASG001 | 88.00 € | **83.00 €** | 21.5 % | **14.6 %** | 83.27 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, modré ASG002 | 88.00 € | **83.00 €** | 21.5 % | **14.6 %** | 83.27 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10022 | 144.90 € | **140.00 €** | 15.6 % | **11.7 %** | 140.10 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E1WYHSK2 | 70.00 € | **65.50 €** | 13.1 % | **5.8 %** | 62.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO MOC20100WFB | 54.00 € | **49.50 €** | 14.9 % | **5.3 %** | 49.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed Creator Tripod FIXCRT-BK | 44.50 € | **40.00 €** | 26.8 % | **14.0 %** | 40.36 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 31.50 € | **27.00 €** | 67.3 % | **43.4 %** | 27.38 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 31.50 € | **27.00 €** | 54.0 % | **32.0 %** | 27.38 € | cena podľa najlacnejšieho iného predajcu |
| TESLA AirCook DualHeat QD575 XXL - multifunkční duál... | 149.90 € | **145.50 €** | 8.2 % | **5.0 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Výrobok X.A.3 | 53.90 € | **49.50 €** | 15.0 % | **5.6 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED Voyager Slim 45W FIXCT45-3C1A-WH | 25.00 € | **20.90 €** | 26.3 % | **5.6 %** | 20.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune 670NC white | 67.90 € | **63.90 €** | 18.9 % | **11.9 %** | 64.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Game Pods FIXPDS-G-WH | 42.50 € | **38.50 €** | 29.4 % | **17.2 %** | 38.59 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Excelent 0,1 dB LNB Monoblock LTE | 16.50 € | **12.50 €** | 45.3 % | **10.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP16 PM FIXVM-1403-BK | 35.50 € | **31.90 €** | 27.8 % | **14.8 %** | 31.96 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPh 16 P FIXVM-1402-BK | 35.50 € | **31.90 €** | 27.8 % | **14.8 %** | 31.96 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 88.00 € | **84.50 €** | 12.4 % | **7.9 %** | 84.51 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 181.50 € | **178.00 €** | 23.0 % | **20.6 %** | 178.10 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 84.00 € | **80.50 €** | 19.0 % | **14.0 %** | 80.67 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 136.00 € | **132.50 €** | 13.7 % | **10.8 %** | 132.67 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DB | 172.50 € | **169.00 €** | 8.9 % | **6.7 %** | 169.43 € | cena podľa najlacnejšieho iného predajcu |
| JBL Clip 5 White | 64.90 € | **61.50 €** | 11.6 % | **5.7 %** | 48.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Clip 5 Black | 64.90 € | **61.50 €** | 11.6 % | **5.7 %** | 48.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Clip 5 Blue | 64.90 € | **61.50 €** | 11.6 % | **5.7 %** | 48.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Teleskop Phone Cage PGY ProShot pre iPhone 17 Pro Max | 82.90 € | **79.50 €** | 54.8 % | **48.4 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Pouzdro SGTabA11 FIXRTC-1650-BK | 32.90 € | **29.50 €** | 27.6 % | **14.4 %** | 29.67 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 16e FIXPFIT2-1404-BK | 31.90 € | **28.50 €** | 27.4 % | **13.8 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Appl 16e FIXPFIT2-1404-BRW | 31.90 € | **28.50 €** | 27.4 % | **13.8 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 21.90 € | **18.50 €** | 38.6 % | **17.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Tesla EasyCook AE300 | 45.00 € | **41.90 €** | 13.1 % | **5.3 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Redmi Note 17 4/128GB Purple | 230.50 € | **227.50 €** | 6.6 % | **5.2 %** | 205.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK TL-MR150 4G LTE WiFi N Router | 69.90 € | **66.90 €** | 10.3 % | **5.5 %** | 66.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 195.50 € | **192.50 €** | 10.5 % | **8.8 %** | 192.63 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 82.00 € | **79.00 €** | 18.9 % | **14.5 %** | 79.32 € | cena podľa najlacnejšieho iného predajcu |
| Fixed MagPad, bílá FIXMPAD2-WH | 15.50 € | **12.50 €** | 50.7 % | **21.6 %** | 12.85 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCool 2,MagSafe FIXMCO2-BK | 30.00 € | **27.00 €** | 26.1 % | **13.5 %** | 27.36 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 600D | 135.50 € | **132.50 €** | 20.6 % | **18.0 %** | 132.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T21B1 (čierny) | 132.50 € | **129.50 €** | 22.6 % | **19.8 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom PN-14F4 Starry Case pre iPhone 14 Pro (zelené) | 7.50 € | **4.70 €** | 149.9 % | **56.6 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Watch 4 Artic silver | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Watch 4 Rose gold | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK Archer AX53 WiFi Router | 55.50 € | **52.90 €** | 10.5 % | **5.3 %** | 50.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed Powerstation Uni FIXPOS-U-BK | 34.50 € | **31.90 €** | 24.1 % | **14.8 %** | 31.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXRBM-1402-RA | 17.50 € | **14.90 €** | 26.0 % | **7.3 %** | 11.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reolink Solární panel 2, bílý | 36.50 € | **34.00 €** | 12.9 % | **5.2 %** | 24.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed pouzdro SG A25 5G FIXOP3-1261-BK | 13.00 € | **10.50 €** | 35.2 % | **9.2 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chladnička na nápoje Euhomy BR001-110 s objemom 91 l... | 210.00 € | **207.50 €** | 15.0 % | **13.6 %** | 207.55 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 23.50 € | **21.00 €** | 30.8 % | **16.9 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 35A1 | 134.50 € | **132.00 €** | 8.8 % | **6.8 %** | 132.31 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle držák s MgS FIXMC-V-BK | 16.00 € | **13.90 €** | 24.1 % | **7.8 %** | 11.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed pouzdro XRedmi 15C FIXOP3-1576-BK | 12.50 € | **10.50 €** | 30.0 % | **9.2 %** | 8.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 12.50 € | **10.50 €** | 30.0 % | **9.2 %** | 9.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED MagRound 3 držák s MgS FIXMRO3-BK | 22.50 € | **20.50 €** | 26.2 % | **14.9 %** | 20.52 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXFLM2-1600-BK | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SGS26+ FIXFLM2-1705-PI | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-BK | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-RD | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BL | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-PI | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1705-BK | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| ETA Aquabelo 1264 90000, černý/bílý | 45.00 € | **43.00 €** | 13.8 % | **8.8 %** | 43.11 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle XL s MgS FIXMC-XL-BK | 19.50 € | **17.50 €** | 26.1 % | **13.2 %** | 17.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **17.50 €** | 26.0 % | **13.1 %** | 17.80 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC 20100 W | 63.00 € | **61.00 €** | 17.4 % | **13.7 %** | 61.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXPUM-1600-TR | 15.90 € | **14.00 €** | 27.2 % | **12.0 %** | 14.37 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Topic Tab LenIdeaTab11 FIXTOT-1677 | 14.90 € | **13.00 €** | 27.0 % | **10.8 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 FIXRBM-1600-RA | 16.50 € | **14.90 €** | 18.8 % | **7.3 %** | 11.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Diaľkový ovládač GoSat GS7056 HDi | 16.50 € | **14.90 €** | 16.3 % | **5.1 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed MagMate FIXMM-TU | 16.50 € | **14.90 €** | 18.8 % | **7.3 %** | 12.51 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed kryt Apple iP 16P FIXBLM-1402-BP | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 FIXBLM-1600-BP | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPhone 17 FIXSHM-1600-TR | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 15 FIXBLM-1200-BP | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka NILS Extreme HM603 modrá | 47.50 € | **46.00 €** | 8.5 % | **5.1 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.00 € | **34.50 €** | 10.3 % | **5.7 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED kryt pro SG S26 FIXFLM2-1704-RD | 19.50 € | **18.00 €** | 24.4 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 14.50 € | **13.00 €** | 27.3 % | **14.1 %** | 13.10 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EQ700 | 25.00 € | **23.50 €** | 15.0 % | **8.1 %** | 23.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05B1 | 109.00 € | **107.50 €** | 13.9 % | **12.4 %** | 107.66 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPho 16P FIXMMY-1402-BK | 14.50 € | **13.00 €** | 31.1 % | **17.6 %** | 13.27 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 14.50 € | **13.00 €** | 31.1 % | **17.6 %** | 13.27 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Autonabíječka 65W FIXCC65-CC-BK | 16.00 € | **14.50 €** | 24.2 % | **12.6 %** | 14.81 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 860.00 € | **858.50 €** | 13.4 % | **13.2 %** | 858.82 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iFlash iT20 pre Canon | 40.50 € | **39.00 €** | 14.5 % | **10.2 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu |
| Eleven SDC444XRPKE | 11.50 € | **10.00 €** | 25.8 % | **9.4 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17A FIXSHM-1601-TR | 17.00 € | **15.90 €** | 22.4 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.00 € | **15.90 €** | 22.4 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI1009OR | 17.00 € | **15.90 €** | 13.7 % | **6.3 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Defender Taška na notebook 15,6", Geek | 16.00 € | **14.90 €** | 23.1 % | **14.6 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Step na aerobik HMS AS002 růžovo-šedý | 30.50 € | **29.50 €** | 8.9 % | **5.4 %** | 23.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Pádlo pro paddleboard REBEL ACTIVE | 17.90 € | **16.90 €** | 12.6 % | **6.3 %** | 12.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Adaptér ke kladce HMS UW17B | 43.50 € | **42.50 €** | 8.0 % | **5.5 %** | 39.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Detektor úniku vody ORNO OR-DC-629 | 12.50 € | **11.50 €** | 18.2 % | **8.7 %** | 9.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed pouzdro XRN 14 P4G FIXOP3-1542-BK | 12.50 € | **11.50 €** | 30.1 % | **19.7 %** | 11.53 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14P+5G FIXOP3-1433-BK | 12.50 € | **11.50 €** | 30.1 % | **19.7 %** | 11.53 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17PM FIXOP3-1603-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17P FIXOP3-1602-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo V50 L FIXOP3-1580-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300P FIXOP3-1609-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300 FIXOP3-1642-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor 400 FIXOP3-1552-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-RD | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BRW | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BL | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-RD | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BRW | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG S24 FE FIXOP3-1391-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26 FIXOP3-1704-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SGA17 4G/5G FIXOP3-1700-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A35 5G FIXOP3-1262-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A17 FIXOP3-1700-BL | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro POCO F7 FIXOP3-1533-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15P+ 5G FIXOP3-1647-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15 4G FIXOP3-1643-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 23.90 € | **22.90 €** | 15.9 % | **11.1 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdr SG A16 4G/5G FIXOP3-1500-BK | 12.50 € | **11.50 €** | 29.6 % | **19.3 %** | 11.57 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 49.00 € | **48.00 €** | 15.0 % | **12.6 %** | 48.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 7.60 € | **6.60 €** | 43.0 % | **24.2 %** | 6.70 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 409.90 € | **408.90 €** | 9.4 % | **9.2 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 412.90 € | **411.90 €** | 9.5 % | **9.2 %** | 412.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 394.90 € | **393.90 €** | 5.7 % | **5.4 %** | 394.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 219.90 € | **218.90 €** | 39629.0 % | **39448.3 %** | 219.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 656.90 € | **655.90 €** | 118581.1 % | **118400.5 %** | 656.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iP 17P FIXGFADA-1602-BK | 11.50 € | **10.50 €** | 30.0 % | **18.7 %** | 10.61 € | cena podľa najlacnejšieho iného predajcu |
| Tvrzené sklo FIXED Full-Cover s aplikáto | 11.50 € | **10.50 €** | 30.0 % | **18.7 %** | 10.61 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 11.50 € | **10.50 €** | 30.0 % | **18.7 %** | 10.61 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 11.50 € | **10.50 €** | 30.0 % | **18.7 %** | 10.61 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A57 5G FIXGFADA-1703-BK | 11.50 € | **10.50 €** | 30.0 % | **18.7 %** | 10.61 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 11.50 € | **10.50 €** | 30.0 % | **18.7 %** | 10.61 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 76.00 € | **75.00 €** | 12.7 % | **11.2 %** | 75.17 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.00 € | **17.00 €** | 20.4 % | **13.8 %** | 17.18 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor Pad 8 FIXTOT-1145 | 15.00 € | **14.00 €** | 31.7 % | **22.9 %** | 14.24 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 40.00 € | **39.00 €** | 23.9 % | **20.8 %** | 39.24 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Bikee Anti-Shock FIXBIAS-BK | 21.50 € | **20.50 €** | 19.2 % | **13.6 %** | 20.75 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2510.50 € | **2509.50 €** | 14.6 % | **14.6 %** | 2509.77 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 461 | 29.50 € | **28.50 €** | 14.6 % | **10.7 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.50 € | **16.50 €** | 12.8 % | **6.4 %** | 16.83 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.50 € | **16.50 €** | 12.6 % | **6.2 %** | 16.83 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-1C-86W WiFi Matter smart wall switch (1-ch... | 17.50 € | **16.50 €** | 19.7 % | **12.8 %** | 16.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 22.50 € | **21.50 €** | 14.0 % | **8.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Fifine Tank6 (biely) | 72.50 € | **71.50 €** | 22.0 % | **20.3 %** | 71.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 19.50 € | **18.50 €** | 11.0 % | **5.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (čierne) | 28.50 € | **27.50 €** | 30.9 % | **26.3 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (modré) | 28.50 € | **27.50 €** | 31.9 % | **27.2 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 99.50 € | **98.50 €** | 8.1 % | **7.1 %** | 98.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2354B2 Stepper (Black) | 60.50 € | **59.50 €** | 21.5 % | **19.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.00 € | **124.00 €** | 15.5 % | **14.6 %** | 124.42 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 107.90 € | **107.00 €** | 41.5 % | **40.3 %** | 107.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.80 € | **3.90 €** | 126.9 % | **84.3 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo rádio DAB+/FM PB01 | 25.90 € | **25.00 €** | 11.5 % | **7.7 %** | 25.03 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 23.90 € | **23.00 €** | 15.5 % | **11.2 %** | 23.08 € | cena podľa najlacnejšieho iného predajcu |
| Filter Glow Mist 1/4 FREEWELL pre DJI Mavic 4 Pro | 29.90 € | **29.00 €** | 32.5 % | **28.6 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný mini spínač WiFi Sonoff MINIR4 | 9.50 € | **8.80 €** | 14.4 % | **6.0 %** | 6.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Madlo protisměrné kladky HMS UW01 | 13.50 € | **12.90 €** | 10.4 % | **5.5 %** | 11.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Obouruční madlo s gumou HMS UW04 | 20.00 € | **19.50 €** | 7.9 % | **5.2 %** | 17.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1444.00 € | **1443.50 €** | 7.5 % | **7.4 %** | 1443.51 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 23.50 € | **23.00 €** | 10.5 % | **8.2 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér TP-Link UE330C USB C na 1G Ethernet, 3x USB | 22.50 € | **22.00 €** | 10.0 % | **7.6 %** | 22.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.00 € | **12.50 €** | 41.7 % | **36.2 %** | 12.56 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 56.00 € | **55.50 €** | 14.9 % | **13.9 %** | 55.58 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1021.50 € | **1021.00 €** | 15.9 % | **15.8 %** | 1021.11 € | cena podľa najlacnejšieho iného predajcu |
| Fixed 2skla SG A17 4/5G FIXGFADA-1700-BK | 11.00 € | **10.50 €** | 24.4 % | **18.7 %** | 10.61 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iP17PM FIXGFADA-1603-BK | 11.00 € | **10.50 €** | 24.4 % | **18.7 %** | 10.61 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 29.50 € | **29.00 €** | 9.1 % | **7.3 %** | 29.20 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Senior Retro blesk | 124.00 € | **123.50 €** | 13.8 % | **13.3 %** | 123.71 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní předfiltr GARNI PF 45T | 23.00 € | **22.50 €** | 41.0 % | **38.0 %** | 22.73 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 19.50 € | **19.00 €** | 11.6 % | **8.8 %** | 19.25 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 253.00 € | **252.50 €** | 62230.6 % | **62107.4 %** | 252.75 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 19.00 € | **18.50 €** | 14.3 % | **11.3 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.00 € | **25.50 €** | 11.3 % | **9.2 %** | 25.80 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WR1502X cestovný, AX1500, WiF... | 57.00 € | **56.50 €** | 6.5 % | **5.5 %** | 56.85 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ľadu Euhomy IM08, 1,2 l, 12 kg (strieborný) | 79.00 € | **78.50 €** | 14.7 % | **13.9 %** | 78.86 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP211-Bridge KIT vonkajší spoj,... | 146.00 € | **145.50 €** | 8.5 % | **8.1 %** | 145.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **20.00 €** | 34.1 % | **30.8 %** | 20.38 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.50 € | **888.00 €** | 20.3 % | **20.2 %** | 888.38 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 97.50 € | **97.00 €** | 5.6 % | **5.1 %** | 97.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42323PC | 79.00 € | **78.50 €** | 8.5 % | **7.8 %** | 78.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 928.50 € | **928.00 €** | 18.0 % | **17.9 %** | 928.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 29.50 € | **29.00 €** | 20.6 % | **18.6 %** | 29.39 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 51.50 € | **51.00 €** | 7.6 % | **6.6 %** | 51.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 80.00 € | **79.50 €** | 11.2 % | **10.5 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.50 € | **23.00 €** | 14.1 % | **11.7 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 849.00 € | **848.50 €** | 10.1 % | **10.1 %** | 848.89 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 389.50 € | **389.00 €** | 7.9 % | **7.8 %** | 389.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 316.00 € | **315.50 €** | 8.1 % | **7.9 %** | 315.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 118.00 € | **117.50 €** | 10.1 % | **9.6 %** | 117.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 110.00 € | **109.50 €** | 6.2 % | **5.7 %** | 109.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 142.00 € | **141.50 €** | 6.6 % | **6.3 %** | 141.89 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 76.50 € | **76.00 €** | 12.3 % | **11.5 %** | 76.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1281.50 € | **1281.00 €** | 6.7 % | **6.6 %** | 1281.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.50 € | **55.00 €** | 15.7 % | **14.7 %** | 55.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 287.50 € | **287.00 €** | 42.3 % | **42.0 %** | 287.39 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3236 | 31.50 € | **31.00 €** | 7.4 % | **5.7 %** | 31.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 249.00 € | **248.50 €** | 25.6 % | **25.3 %** | 248.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 279.00 € | **278.50 €** | 9.9 % | **9.7 %** | 278.89 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 36.50 € | **36.00 €** | 8.0 % | **6.5 %** | 36.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 270.50 € | **270.00 €** | 5.8 % | **5.6 %** | 270.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 153.50 € | **153.00 €** | 8.6 % | **8.3 %** | 153.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 73.00 € | **72.50 €** | 10.6 % | **9.8 %** | 72.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.00 € | **44.50 €** | 14.3 % | **13.0 %** | 44.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 138.50 € | **138.00 €** | 21.1 % | **20.6 %** | 138.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 82.50 € | **82.00 €** | 41.8 % | **40.9 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 232.50 € | **232.00 €** | 5.6 % | **5.4 %** | 232.39 € | cena podľa najlacnejšieho iného predajcu |
| REBEL Micropower 1000 | 75.50 € | **75.00 €** | 7.6 % | **6.9 %** | 75.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 655.00 € | **654.50 €** | 5.4 % | **5.4 %** | 654.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 313.00 € | **312.50 €** | 6.5 % | **6.3 %** | 312.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 612.00 € | **611.50 €** | 6.5 % | **6.4 %** | 611.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 642.00 € | **641.50 €** | 8.4 % | **8.3 %** | 641.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 690.00 € | **689.50 €** | 12.6 % | **12.5 %** | 689.89 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 33.00 € | **32.50 €** | 15.4 % | **13.7 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX ZE064 | 31.00 € | **30.50 €** | 16.7 % | **14.8 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 41.00 € | **40.50 €** | 11.8 % | **10.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 38.00 € | **37.50 €** | 33.7 % | **32.0 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Coox SPRING forma 26 cm se skleněnou zák | 21.50 € | **21.00 €** | 15.8 % | **13.1 %** | 21.42 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO544FR | 99.50 € | **99.00 €** | 11.3 % | **10.8 %** | 99.49 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7344H | 108.50 € | **108.00 €** | 9.3 % | **8.8 %** | 108.50 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO465FR | 65.50 € | **65.00 €** | 10.0 % | **9.1 %** | 65.50 € | cena podľa najlacnejšieho iného predajcu |
| Závaží na kotníky a zápěstí 2x2kg, REBEL ACTIVE RBA-... | 19.50 € | **19.00 €** | 94.0 % | **89.1 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 116.90 € | **116.50 €** | 42.9 % | **42.4 %** | 116.79 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 68.90 € | **68.50 €** | 9.6 % | **9.0 %** | 68.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 5m | 7.90 € | **7.50 €** | 43.0 % | **35.8 %** | 7.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.90 € | **14.50 €** | 27.0 % | **23.6 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Xany 2B, aktivní pokojová anténa | 15.90 € | **15.50 €** | 11.5 % | **8.7 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Step na aerobik HMS AS004 modrý | 22.90 € | **22.50 €** | 9.1 % | **7.2 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 44.90 € | **44.50 €** | 6.8 % | **5.8 %** | 44.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 264 AP | 57.90 € | **57.50 €** | 9.4 % | **8.7 %** | 57.90 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát v mobile PGY LinkGo (ružový) | 29.90 € | **29.50 €** | 43.1 % | **41.2 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.80 € | **9.60 €** | 18.0 % | **15.6 %** | 9.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.40 € | **5.20 €** | 40.3 % | **35.1 %** | 5.28 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.30 € | **5.10 €** | 17.7 % | **13.3 %** | 5.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.70 € | **7.50 €** | 31.5 % | **28.1 %** | 7.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **0.90 €** | 35.5 % | **10.9 %** | 0.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, 20 - 200A | 6.60 € | **6.40 €** | 37.9 % | **33.8 %** | 6.43 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NBP003.B | 29.00 € | **28.90 €** | 13.8 % | **13.5 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO339KP | 53.00 € | **52.90 €** | 9.1 % | **8.9 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.10 € | **1.00 €** | 35.5 % | **23.2 %** | 1.09 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 14.00 € | **13.90 €** | 17.2 % | **16.4 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO30211IP | 125.00 € | **124.90 €** | 22.6 % | **22.5 %** | 125.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO1022S | 167.00 € | **166.90 €** | 9.9 % | **9.9 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-07

Vstup: `premiumstore-sk_2026-10-07_21-49.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7661**
- Návrh **zvýšiť** cenu: **131** produktov
- Návrh **znížiť** cenu: **295** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **7235** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **16**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **782**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (131)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Prenosný multimediálny prehrávač RAYNEO Pocket TV Pro | 146.90 € | **268.90 €** | 15.1 % | **110.7 %** | 269.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 253.00 € | **299.50 €** | 14.7 % | **35.8 %** | 299.86 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 160 Sol | 29.90 € | **49.50 €** | 11.5 % | **84.5 %** | 49.67 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61649 Nerovná dráha/most set | 13.90 € | **27.90 €** | 10.3 % | **121.3 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 8000mAh 14.8V 100C 4S2P Lipo Battery Pack | 86.00 € | **99.00 €** | 7.8 % | **24.2 %** | 99.04 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8500mAh 14.8V 60C 4S1P Lipo Battery ... | 103.50 € | **116.00 €** | 22.4 % | **37.2 %** | 116.04 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259C (HP W2071A Cyan) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259Y (HP W2072A Yellow) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259M (HP W2073A Magenta) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie NEEWER BASICS VL67B | 33.90 € | **44.90 €** | 15.2 % | **52.5 %** | 44.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 25.50 € | **36.50 €** | 11.2 % | **59.2 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 14.50 € | **25.00 €** | 12.8 % | **94.5 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 15.90 € | **24.90 €** | 10.2 % | **72.6 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 36.50 € | **45.00 €** | 11.1 % | **36.9 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 97.00 € | **104.90 €** | 17.7 % | **27.3 %** | 105.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 ULTRA mini elektrická pumpa | 87.50 € | **94.50 €** | 15.2 % | **24.5 %** | 94.83 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Lipo With XT6... | 55.00 € | **61.90 €** | 20.1 % | **35.1 %** | 61.92 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart Sada příslušenství pro iRobot R | 29.50 € | **34.90 €** | 10.3 % | **30.5 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 84.90 € | **90.00 €** | 5.1 % | **11.4 %** | 90.38 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TBE400U BE6500, WiFi 7,  2... | 65.90 € | **70.90 €** | 5.2 % | **13.2 %** | 70.91 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8000mAh 11.1V 100C 3S1P Lipo Battery... | 60.50 € | **65.50 €** | 14.4 % | **23.9 %** | 65.75 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 223.50 € | **228.50 €** | 13.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT ponorka Spy Cam Aqua HD | 34.00 € | **38.50 €** | 10.2 % | **24.8 %** | 38.56 € | cena podľa najlacnejšieho iného predajcu |
| LiPo Gens ace G-Tech 4000mAh 2S2P 7,4V 60C batéria | 21.50 € | **26.00 €** | 16.1 % | **40.4 %** | 26.20 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96CX (HP 305XL Colour) | 17.50 € | **21.90 €** | 11.2 % | **39.2 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 40.00 € | **44.00 €** | 11.5 % | **22.7 %** | 44.18 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 38.50 € | **42.00 €** | 15.0 % | **25.5 %** | 42.35 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD BT černé | 151.90 € | **154.90 €** | 5.5 % | **7.6 %** | 154.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 151.90 € | **154.90 €** | 5.5 % | **7.6 %** | 154.99 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofon Maono PD200x (biely) | 49.00 € | **52.00 €** | 14.5 % | **21.5 %** | 52.37 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAQ2000BK Bezdrátová sluchátka | 34.90 € | **37.50 €** | 5.6 % | **13.5 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 25.90 € | **28.00 €** | 20.9 % | **30.7 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 514.50 € | **516.50 €** | 10.9 % | **11.4 %** | 516.59 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 514.50 € | **516.50 €** | 26.0 % | **26.5 %** | 516.59 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 51.50 € | **53.50 €** | 11.7 % | **16.1 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.50 € | **20.50 €** | 29.8 % | **43.8 %** | 20.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight dezinfekčná bezozónová UV lampa 100W | 40.50 € | **42.50 €** | 28.9 % | **35.3 %** | 42.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPhone 13 FIXBLM-723-BP | 17.50 € | **19.50 €** | 13.4 % | **26.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 14.8V 30C 4S1P Lipo ... | 24.00 € | **26.00 €** | 11.6 % | **20.9 %** | 26.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 14.00 € | **16.00 €** | 15.4 % | **31.9 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| JBL CHARGEES3 | 107.90 € | **109.50 €** | 5.0 % | **6.6 %** | 109.69 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 318.00 € | **319.50 €** | 19.1 % | **19.6 %** | 319.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 58.00 € | **59.50 €** | 33.8 % | **37.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 45.50 € | **47.00 €** | 11.5 % | **15.1 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 12.50 € | **13.90 €** | 14.8 % | **27.7 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 608 | 23.90 € | **25.00 €** | 11.5 % | **16.6 %** | 25.20 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 105.00 € | **106.00 €** | 12.2 % | **13.2 %** | 106.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 25.50 € | **26.50 €** | 39.0 % | **44.5 %** | 26.59 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 296.00 € | **297.00 €** | 19.8 % | **20.2 %** | 297.10 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/250 Ohm | 334.90 € | **335.90 €** | 68.2 % | **68.7 %** | 336.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 445.90 € | **446.90 €** | 35.3 % | **35.6 %** | 447.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri Carbon 2 | 370.50 € | **371.50 €** | 7.0 % | **7.3 %** | 371.66 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H85X(2-pack) WiFi ... | 99.50 € | **100.50 €** | 5.3 % | **6.3 %** | 100.70 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 495.50 € | **496.50 €** | 5.1 % | **5.3 %** | 496.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 10.50 € | **11.50 €** | 23.4 % | **35.1 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 227.50 € | **228.50 €** | 15.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 227.50 € | **228.50 €** | 15.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 206.50 € | **207.50 €** | 15.4 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 206.50 € | **207.50 €** | 15.4 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Ozvučovací systém KRUGER MATZ KM1712 | 180.00 € | **180.90 €** | 27.3 % | **27.9 %** | 181.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.00 € | **22.90 €** | 32.7 % | **38.1 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 275.00 € | **275.90 €** | 29.9 % | **30.3 %** | 275.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 584.00 € | **584.90 €** | 32.4 % | **32.6 %** | 585.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 9.80 € | **10.50 €** | 17.0 % | **25.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 313.90 € | **314.50 €** | 5.1 % | **5.3 %** | 314.70 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17A FIXSHM-1601-TR | 16.90 € | **17.50 €** | 9.5 % | **13.4 %** | 17.52 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 76.50 € | **77.00 €** | 21.4 % | **22.2 %** | 77.01 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 072L čidlo detekce blesků | 49.00 € | **49.50 €** | 9.2 % | **10.3 %** | 49.51 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 41.00 € | **41.50 €** | 14.7 % | **16.1 %** | 41.52 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 92.50 € | **93.00 €** | 16.9 % | **17.6 %** | 93.02 € | cena podľa najlacnejšieho iného predajcu |
| Stojany na činky nastavitelné REBEL ACTIVE RBA-2402 | 61.00 € | **61.50 €** | 5.2 % | **6.1 %** | 61.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 42.50 € | **43.00 €** | 43.1 % | **44.8 %** | 43.05 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21L3C-L 2.0 Mpix venkovní dome IP kamera s ... | 90.50 € | **91.00 €** | 16.8 % | **17.5 %** | 91.05 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-0360 4.0 Mpix venkovní IP dome kamera... | 117.00 € | **117.50 €** | 17.3 % | **17.8 %** | 117.56 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 149.50 € | **150.00 €** | 11.2 % | **11.6 %** | 150.08 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 66.50 € | **67.00 €** | 34.9 % | **35.9 %** | 67.08 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 35.00 € | **35.50 €** | 11.4 % | **13.0 %** | 35.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.00 € | **35.50 €** | 21.6 % | **23.3 %** | 35.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 47.50 € | **48.00 €** | 11.5 % | **12.6 %** | 48.08 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 47.50 € | **48.00 €** | 13.7 % | **14.9 %** | 48.08 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 350 ml, nerezová | 11.00 € | **11.50 €** | 10.0 % | **15.0 %** | 11.59 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.00 € | **11.50 €** | 10.0 % | **15.0 %** | 11.59 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.00 € | **22.50 €** | 9.4 % | **11.9 %** | 22.59 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 50.50 € | **51.00 €** | 13.2 % | **14.3 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 50.50 € | **51.00 €** | 36.3 % | **37.7 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 41.50 € | **42.00 €** | 19.6 % | **21.0 %** | 42.09 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 61.50 € | **62.00 €** | 15.5 % | **16.4 %** | 62.10 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.00 € | **208.50 €** | 16.3 % | **16.6 %** | 208.61 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection brown | 208.00 € | **208.50 €** | 16.3 % | **16.6 %** | 208.61 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, černé ASG001 | 84.00 € | **84.50 €** | 16.0 % | **16.7 %** | 84.62 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, modré ASG002 | 84.00 € | **84.50 €** | 16.0 % | **16.7 %** | 84.62 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.00 € | **108.50 €** | 7.5 % | **8.0 %** | 108.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.00 € | **12.50 €** | 31.0 % | **36.4 %** | 12.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.00 € | **19.50 €** | 33.4 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX30U Plus AX 1800 adaptér... | 24.50 € | **25.00 €** | 6.9 % | **9.0 %** | 25.18 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 100.50 € | **101.00 €** | 6.5 % | **7.0 %** | 101.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 15.00 € | **15.50 €** | 47.3 % | **52.2 %** | 15.72 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 216.50 € | **217.00 €** | 13.4 % | **13.6 %** | 217.27 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 169.00 € | **169.50 €** | 17.8 % | **18.1 %** | 169.77 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 216.50 € | **217.00 €** | 36.3 % | **36.6 %** | 217.27 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 19.50 € | **20.00 €** | 11.1 % | **13.9 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WR1502X cestovný, AX1500, WiF... | 56.50 € | **57.00 €** | 5.5 % | **6.5 %** | 57.29 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 180.50 € | **181.00 €** | 25.2 % | **25.6 %** | 181.29 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS210 PRO AT1 PRO Anoutway Mini pumpa na bic... | 47.00 € | **47.50 €** | 22.7 % | **24.0 %** | 47.79 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate White | 270.50 € | **271.00 €** | 16.3 % | **16.5 %** | 271.32 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate Graphite Black | 270.50 € | **271.00 €** | 16.3 % | **16.5 %** | 271.32 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 246.00 € | **246.50 €** | 30.5 % | **30.8 %** | 246.82 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 199.00 € | **199.50 €** | 19.1 % | **19.4 %** | 199.87 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 272.50 € | **273.00 €** | 28.7 % | **29.0 %** | 273.40 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 272.50 € | **273.00 €** | 20.1 % | **20.4 %** | 273.40 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 333.50 € | **334.00 €** | 22.2 % | **22.3 %** | 334.41 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 249.50 € | **250.00 €** | 16.2 % | **16.4 %** | 250.42 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NX1000D | 373.50 € | **374.00 €** | 79.7 % | **80.0 %** | 374.46 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.50 € | **130.90 €** | 26424.4 % | **26505.7 %** | 130.99 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic EDT 100S | 15.50 € | **15.90 €** | 12.1 % | **15.0 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 45.50 € | **45.90 €** | 17.8 % | **18.8 %** | 45.94 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXJB1000E | 62.50 € | **62.90 €** | 53.9 % | **54.9 %** | 62.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.80 € | **8.00 €** | 34.6 % | **38.1 %** | 8.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 9.80 € | **10.00 €** | 17.9 % | **20.3 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 17.90 € | **18.00 €** | 31.6 % | **32.3 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 46.90 € | **47.00 €** | 16.5 % | **16.8 %** | 47.03 € | cena podľa najlacnejšieho iného predajcu |
| Casio Fx 85 Es Plus 2E | 19.90 € | **20.00 €** | 10.5 % | **11.1 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 4000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.40 € | **2.50 €** | 44.5 % | **50.6 %** | 2.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.20 € | **4.30 €** | 50.4 % | **54.0 %** | 4.31 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 115.90 € | **116.00 €** | 17.5 % | **17.7 %** | 116.22 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 153.90 € | **154.00 €** | 23.1 % | **23.2 %** | 154.26 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (295)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINI-PC Minis Forum UM890 Pro Ryzen 9 8945HS barebone | 1156.90 € | **872.00 €** | 110.7 % | **58.8 %** | 872.47 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 1136.90 € | **860.00 €** | 49.9 % | **13.4 %** | 860.07 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 1016.90 € | **750.50 €** | 45.2 % | **7.2 %** | 750.51 € | cena podľa najlacnejšieho iného predajcu |
| Beko Beyond B5RMFNE314X | 598.90 € | **438.00 €** | 50.3 % | **9.9 %** | 438.36 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 638.90 € | **480.00 €** | 45.1 % | **9.0 %** | 480.19 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 490.90 € | **367.50 €** | 40.4 % | **5.1 %** | 332.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Krups Intuition Experience EA876D10 | 754.00 € | **635.00 €** | 24.8 % | **5.1 %** | 635.49 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 393.90 € | **298.50 €** | 42.5 % | **8.0 %** | 298.56 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 1046.50 € | **953.50 €** | 22.3 % | **11.5 %** | 953.90 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RFSA240M43WN | 398.90 € | **306.00 €** | 42.7 % | **9.4 %** | 306.35 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 456.90 € | **367.00 €** | 36.1 % | **9.3 %** | 367.19 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 535.00 € | **455.00 €** | 27.7 % | **8.6 %** | 455.18 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 835.00 € | **756.00 €** | 22.8 % | **11.2 %** | 756.17 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1135.90 € | **1063.00 €** | 15.0 % | **7.6 %** | 1063.31 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 530.00 € | **462.50 €** | 23.3 % | **7.6 %** | 462.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 889.90 € | **831.00 €** | 18.5 % | **10.7 %** | 831.07 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 453.00 € | **396.00 €** | 22.8 % | **7.3 %** | 396.21 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 498.00 € | **445.50 €** | 25.2 % | **12.0 %** | 445.70 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 902.50 € | **853.90 €** | 15.0 % | **8.8 %** | 853.95 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 358.50 € | **310.90 €** | 24.8 % | **8.2 %** | 310.91 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 819.90 € | **774.00 €** | 15.0 % | **8.6 %** | 774.50 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 489.50 € | **445.50 €** | 20.0 % | **9.2 %** | 445.87 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-A2-9955 AMD Ryzen 9 9955HX ba... | 1001.00 € | **960.90 €** | 15.0 % | **10.4 %** | 960.95 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 244.50 € | **205.00 €** | 29.7 % | **8.7 %** | 205.39 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 536.50 € | **498.00 €** | 15.8 % | **7.5 %** | 498.29 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 328.00 € | **290.00 €** | 24.3 % | **9.9 %** | 290.37 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 675.50 € | **638.00 €** | 15.0 % | **8.6 %** | 638.19 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1292.50 €** | 13.3 % | **10.1 %** | 1292.73 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 711.50 € | **675.00 €** | 11.7 % | **6.0 %** | 675.20 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i9 Plus Black | 210.50 € | **174.00 €** | 30.2 % | **7.6 %** | 174.32 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i9 Plus Black | 210.50 € | **174.00 €** | 30.2 % | **7.6 %** | 174.32 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 419.50 € | **383.50 €** | 17.5 % | **7.5 %** | 383.86 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i9 Plus White | 208.00 € | **174.50 €** | 28.6 % | **7.9 %** | 174.52 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i9 Plus White | 208.00 € | **174.50 €** | 28.6 % | **7.9 %** | 174.52 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5RCNA375HXB1 HarvestFresh | 418.90 € | **385.50 €** | 30.5 % | **20.1 %** | 385.57 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 366.00 € | **333.00 €** | 19.4 % | **8.6 %** | 333.18 € | cena podľa najlacnejšieho iného predajcu |
| Asus Vivobook 15 (X1504MA-BQ011WZ) | 692.50 € | **660.90 €** | 10.1 % | **5.1 %** | 393.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo VM Chamber Line 90 | 618.90 € | **588.00 €** | 26.7 % | **20.4 %** | 588.21 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 166.90 € | **137.50 €** | 39.8 % | **15.2 %** | 137.58 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 378.90 € | **349.90 €** | 18.8 % | **9.7 %** | 349.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 40 | 252.50 € | **224.00 €** | 23.7 % | **9.7 %** | 224.43 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDSN36540XP | 444.90 € | **417.50 €** | 12.0 % | **5.1 %** | 415.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GL.iNet Beryl 7 Wi-Fi 7 router | 188.90 € | **163.90 €** | 41.7 % | **23.0 %** | 164.00 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha D132 30044 24H Speed | 346.50 € | **322.50 €** | 23.4 % | **14.9 %** | 322.85 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 328.90 € | **306.00 €** | 13.9 % | **6.0 %** | 306.07 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 595.50 € | **573.00 €** | 10.4 % | **6.2 %** | 573.44 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 298.90 € | **276.50 €** | 18.9 % | **9.9 %** | 276.63 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV9812E0 | 336.90 € | **314.50 €** | 19.7 % | **11.7 %** | 314.67 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 261.00 € | **238.90 €** | 21.6 % | **11.3 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 261.00 € | **239.00 €** | 22.3 % | **12.0 %** | 239.21 € | cena podľa najlacnejšieho iného predajcu |
| Candy CI32CBB | 148.90 € | **127.00 €** | 40.4 % | **19.8 %** | 127.34 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 48SBL6G-S | 331.50 € | **310.00 €** | 12.3 % | **5.0 %** | 297.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 312.50 € | **292.50 €** | 18.0 % | **10.4 %** | 292.70 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 492.00 € | **472.00 €** | 16.0 % | **11.3 %** | 472.21 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **329.00 €** | 15.0 % | **8.5 %** | 329.19 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 585.50 € | **566.50 €** | 28.8 % | **24.6 %** | 566.70 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 234.00 € | **215.00 €** | 16.5 % | **7.1 %** | 215.45 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 10N3BX-S | 487.90 € | **469.00 €** | 14.4 % | **10.0 %** | 469.15 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210G | 468.50 € | **451.00 €** | 10.0 % | **5.9 %** | 451.49 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 230.00 € | **213.00 €** | 23.3 % | **14.2 %** | 213.12 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 233.00 € | **216.00 €** | 23.3 % | **14.3 %** | 216.13 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 233.00 € | **216.00 €** | 23.3 % | **14.3 %** | 216.13 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 471.00 € | **455.00 €** | 11.2 % | **7.4 %** | 455.05 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 551.50 € | **536.00 €** | 10.8 % | **7.7 %** | 536.18 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 488.90 € | **474.00 €** | 11.1 % | **7.8 %** | 474.33 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 61.90 € | **47.50 €** | 56.0 % | **19.7 %** | 47.78 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 917.50 € | **903.50 €** | 19.5 % | **17.7 %** | 903.51 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 179.50 € | **165.50 €** | 19.1 % | **9.8 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 141.00 € | **127.00 €** | 20.0 % | **8.0 %** | 127.45 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 344.50 € | **331.50 €** | 11.8 % | **7.6 %** | 331.84 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 310.00 € | **298.00 €** | 21.9 % | **17.2 %** | 298.20 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 310.00 € | **298.00 €** | 20.7 % | **16.0 %** | 298.20 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 577.00 € | **565.00 €** | 10.3 % | **8.0 %** | 565.35 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač ULTENIC AC1 Triflex s funkciou mopovania | 207.00 € | **195.00 €** | 28.7 % | **21.3 %** | 195.42 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 374.90 € | **363.50 €** | 11.7 % | **8.3 %** | 363.71 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 261.50 € | **250.50 €** | 29.2 % | **23.8 %** | 250.70 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 261.50 € | **250.50 €** | 20.1 % | **15.0 %** | 250.70 € | cena podľa najlacnejšieho iného predajcu |
| LG F4A10S7NWH | 335.00 € | **324.50 €** | 13.5 % | **9.9 %** | 324.69 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 204.00 € | **194.00 €** | 11.6 % | **6.2 %** | 194.14 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj LaserPecker LP2 Plus | 1000.00 € | **990.00 €** | 21.5 % | **20.3 %** | 990.34 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z15ST s 15,6-palcovým dotyk... | 139.50 € | **129.50 €** | 19.7 % | **11.2 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 291.90 € | **282.00 €** | 10.1 % | **6.4 %** | 282.16 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 342.00 € | **332.50 €** | 13.1 % | **10.0 %** | 332.51 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 268.00 € | **258.50 €** | 9.8 % | **5.9 %** | 258.71 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 202.00 € | **192.50 €** | 15.4 % | **9.9 %** | 192.76 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Kettle K3 Polar white | 30.50 € | **21.00 €** | 174.0 % | **88.7 %** | 21.33 € | cena podľa najlacnejšieho iného predajcu |
| Detektor drôtov UNI-T UT25CL | 140.90 € | **131.50 €** | 12.8 % | **5.3 %** | 112.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi Pad 8 Pro 12/512GB Green (72207) | 708.90 € | **699.90 €** | 6.4 % | **5.1 %** | 605.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANDY CIO 225 EE/N | 298.90 € | **290.00 €** | 16.3 % | **12.9 %** | 290.34 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D30+ s Bluetooth | 204.50 € | **195.90 €** | 21.2 % | **16.1 %** | 195.91 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 183.00 € | **174.50 €** | 19.9 % | **14.4 %** | 174.71 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 125.50 € | **117.00 €** | 15.8 % | **8.0 %** | 117.38 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15A s uhlopriečkou 15,6" | 105.00 € | **96.90 €** | 14.0 % | **5.3 %** | 96.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Venta H14 Clean room filter  1 pack | 135.50 € | **127.50 €** | 19.9 % | **12.8 %** | 127.54 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 213.50 € | **205.50 €** | 10.3 % | **6.1 %** | 205.63 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT118E Univerzálny digitálny multimeter Tru... | 46.50 € | **38.50 €** | 39.1 % | **15.2 %** | 38.88 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 238.90 € | **231.00 €** | 16.6 % | **12.7 %** | 231.21 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E15 | 288.00 € | **280.50 €** | 8.0 % | **5.2 %** | 255.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO MGC 20100 W | 70.50 € | **63.00 €** | 31.4 % | **17.4 %** | 63.42 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 417.90 € | **410.50 €** | 11.6 % | **9.6 %** | 410.74 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 169.50 € | **162.50 €** | 18.5 % | **13.6 %** | 162.75 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX LXB1SE11W0 | 249.90 € | **243.00 €** | 15.1 % | **11.9 %** | 243.29 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GECS5B70CLI | 431.90 € | **425.00 €** | 11.7 % | **9.9 %** | 425.35 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 215.50 € | **208.90 €** | 11.8 % | **8.3 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 165.50 € | **159.00 €** | 10.4 % | **6.1 %** | 159.29 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 183.90 € | **177.50 €** | 11.7 % | **7.8 %** | 177.69 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION SmartKettle Onyx black | 30.90 € | **24.50 €** | 53.8 % | **22.0 %** | 24.76 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 327.00 € | **321.00 €** | 11.8 % | **9.8 %** | 321.10 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 312.00 € | **306.00 €** | 22.9 % | **20.5 %** | 306.20 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 206.00 € | **200.00 €** | 11.6 % | **8.3 %** | 200.34 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 115.50 € | **109.50 €** | 13.8 % | **7.9 %** | 109.90 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 194.90 € | **189.00 €** | 16.5 % | **13.0 %** | 189.06 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 769.50 € | **763.90 €** | 40.2 % | **39.1 %** | 763.97 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z18 W - prenosný monitor s dvoma 18-palcovým... | 334.50 € | **328.90 €** | 16.3 % | **14.3 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Carrera EVO 27876 Porsche 911 GT3 R | 47.50 € | **41.90 €** | 30.2 % | **14.8 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 28 | 160.50 € | **155.00 €** | 8.8 % | **5.1 %** | 139.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 411BD | 68.50 € | **63.00 €** | 40.3 % | **29.0 %** | 63.19 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 191.50 € | **186.00 €** | 16.3 % | **13.0 %** | 186.19 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 191.50 € | **186.00 €** | 16.3 % | **13.0 %** | 186.19 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Prasátko Peppa | 32.50 € | **27.00 €** | 36.7 % | **13.6 %** | 27.34 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 963.00 € | **957.90 €** | 16.1 % | **15.4 %** | 957.96 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS200 PRO TB2 PRO TOPUMP – mini pumpa na bic... | 54.00 € | **48.90 €** | 37.8 % | **24.8 %** | 48.92 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 312.50 € | **307.50 €** | 8.0 % | **6.3 %** | 307.64 € | cena podľa najlacnejšieho iného predajcu |
| Subwoofer Edifier Airpulse SW8 (čierny) | 327.00 € | **322.00 €** | 11.0 % | **9.4 %** | 322.20 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 220A | 195.50 € | **190.50 €** | 8.8 % | **6.0 %** | 190.72 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 178.00 € | **173.00 €** | 8.8 % | **5.7 %** | 173.46 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (čierna) | 46.90 € | **42.00 €** | 22.0 % | **9.2 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (oranžová) | 46.90 € | **42.00 €** | 22.0 % | **9.2 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100W (čierny) | 51.90 € | **47.00 €** | 34.9 % | **22.2 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 236.00 € | **231.50 €** | 11.0 % | **8.9 %** | 231.51 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10W | 301.50 € | **297.00 €** | 8.0 % | **6.4 %** | 297.09 € | cena podľa najlacnejšieho iného predajcu |
| G3ferrari G1018100 Horkovzdušná fritéza | 171.50 € | **167.50 €** | 7.8 % | **5.2 %** | 148.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete ART 4631 | 134.50 € | **130.50 €** | 8.4 % | **5.2 %** | 115.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 109A | 155.50 € | **151.50 €** | 8.8 % | **6.0 %** | 151.61 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 277.00 € | **273.00 €** | 11.5 % | **9.9 %** | 273.18 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN ZIP Trifold Cyber Projector | 475.50 € | **471.50 €** | 37.7 % | **36.5 %** | 471.69 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 107.00 € | **103.00 €** | 13.6 % | **9.4 %** | 103.20 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 107.00 € | **103.00 €** | 9.3 % | **5.2 %** | 103.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 212.00 € | **208.00 €** | 36.9 % | **34.3 %** | 208.23 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2100 Mikrovlnná trouba s grilem | 111.50 € | **107.50 €** | 13.9 % | **9.8 %** | 107.73 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 167.50 € | **163.50 €** | 8.8 % | **6.2 %** | 163.74 € | cena podľa najlacnejšieho iného predajcu |
| Carrera CAT Adventní kalendář 85970 | 29.50 € | **25.50 €** | 31.3 % | **13.5 %** | 25.83 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 244.00 € | **240.00 €** | 8.0 % | **6.2 %** | 240.36 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 198.50 € | **194.50 €** | 9.0 % | **6.8 %** | 194.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE RB493PW | 180.00 € | **176.00 €** | 8.9 % | **6.5 %** | 176.47 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha GO Škoda Rally | 64.90 € | **61.00 €** | 21.7 % | **14.4 %** | 61.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **557.00 €** | 7.3 % | **6.6 %** | 557.25 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 49B8G-S | 318.90 € | **315.00 €** | 10.4 % | **9.1 %** | 315.36 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 172.50 € | **168.90 €** | 8.9 % | **6.6 %** | 168.92 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 83.50 € | **79.90 €** | 18757.3 % | **17944.3 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 121.50 € | **117.90 €** | 14.8 % | **11.4 %** | 118.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight akumulátorové záhradné nožnice | 62.00 € | **58.50 €** | 13.1 % | **6.7 %** | 58.53 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 134.50 € | **131.00 €** | 11.4 % | **8.5 %** | 131.07 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.00 € | **324.50 €** | 7.7 % | **6.6 %** | 324.61 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 212.00 € | **208.50 €** | 7.7 % | **6.0 %** | 208.65 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT86325VI | 199.00 € | **195.50 €** | 8.6 % | **6.6 %** | 195.66 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 164.50 € | **161.00 €** | 8.4 % | **6.1 %** | 161.22 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 463.00 € | **459.50 €** | 6.8 % | **6.0 %** | 459.82 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Mango s podporou Wi-Fi 4 | 38.50 € | **35.00 €** | 34.9 % | **22.6 %** | 35.33 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 190.00 € | **186.90 €** | 8.8 % | **7.0 %** | 186.99 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot Blast black od Silverlit | 32.00 € | **29.00 €** | 26.8 % | **15.0 %** | 29.02 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 361.50 € | **358.50 €** | 6.9 % | **6.0 %** | 358.64 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 136.90 € | **134.00 €** | 14.0 % | **11.6 %** | 134.46 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6182PS4 | 325.00 € | **322.50 €** | 8.0 % | **7.2 %** | 322.61 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS100 POCKET SE AIRBANK – mini pumpa na bicykel | 38.00 € | **35.50 €** | 32.9 % | **24.1 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 157.00 € | **154.50 €** | 7.8 % | **6.1 %** | 154.69 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Snacker S3 Stainless Steel b | 15.50 € | **13.00 €** | 36.2 % | **14.3 %** | 13.20 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 55.00 € | **52.50 €** | 17.1 % | **11.8 %** | 52.79 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 645.50 € | **643.00 €** | 9.0 % | **8.6 %** | 643.34 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 13.00 € | **10.50 €** | 80.7 % | **45.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.90 € | **7.60 €** | 37.4 % | **5.4 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy CA6 NP3T3EHTB Candy Bake 600 | 267.00 € | **264.90 €** | 7.9 % | **7.1 %** | 264.99 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot Blast white od Silverlit | 31.00 € | **29.00 €** | 22.9 % | **15.0 %** | 29.02 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 95.90 € | **93.90 €** | 12.3 % | **9.9 %** | 93.95 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC43SGMXC | 127.90 € | **125.90 €** | 15.3 % | **13.5 %** | 125.98 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64245 Porsche 992 GT3 No.14 | 18.00 € | **16.00 €** | 28.6 % | **14.3 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 30.00 € | **28.00 €** | 16.9 % | **9.1 %** | 28.22 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO1022S | 169.00 € | **167.00 €** | 11.2 % | **9.9 %** | 167.50 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 318.90 € | **317.00 €** | 6.6 % | **5.9 %** | 317.46 € | cena podľa najlacnejšieho iného predajcu |
| BWT filtrační stanice Aqualizer | 63.50 € | **61.90 €** | 25.1 % | **21.9 %** | 61.94 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RH 6543 WH | 117.50 € | **115.90 €** | 6.5 % | **5.1 %** | 86.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Carrera 61659 GO/D143 Houpačka | 26.00 € | **24.50 €** | 32.6 % | **25.0 %** | 24.51 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64033 Mario Kart - Mario | 17.50 € | **16.00 €** | 25.0 % | **14.3 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64244 Porsche 992 GT3 No.2 | 17.50 € | **16.00 €** | 25.0 % | **14.3 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64251 Ferrari SF-90 Stradale | 17.50 € | **16.00 €** | 25.0 % | **14.3 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 44.00 € | **42.50 €** | 43.5 % | **38.6 %** | 42.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 17.00 € | **15.50 €** | 22.7 % | **11.9 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 131.00 € | **129.50 €** | 20.8 % | **19.5 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMK38HU0B | 228.90 € | **227.50 €** | 8.0 % | **7.4 %** | 227.80 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic UniTune Clip | 38.90 € | **37.50 €** | 17.7 % | **13.5 %** | 37.72 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 110.00 € | **108.90 €** | 14.1 % | **13.0 %** | 108.97 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Snacker S3 Stainless Steel | 15.50 € | **14.50 €** | 13.1 % | **5.8 %** | 13.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 82.50 € | **81.50 €** | 6.6 % | **5.3 %** | 81.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO961T | 28.90 € | **27.90 €** | 10.3 % | **6.5 %** | 27.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amica SHM 51071 W | 246.90 € | **245.90 €** | 8.0 % | **7.5 %** | 245.94 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 22.00 € | **21.00 €** | 30.7 % | **24.7 %** | 21.05 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR černé | 195.90 € | **194.90 €** | 17.6 % | **17.0 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 195.90 € | **194.90 €** | 17.6 % | **17.0 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Halo 13x Digital Nig... | 319.90 € | **318.90 €** | 48.1 % | **47.6 %** | 319.00 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Auto GO/GO+ 64031 Chevrolet Cama | 17.00 € | **16.00 €** | 21.5 % | **14.3 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 54.00 € | **53.00 €** | 31.8 % | **29.4 %** | 53.14 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 234.00 € | **233.00 €** | 10.1 % | **9.7 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| BEKO HII64500UFT | 360.00 € | **359.00 €** | 7.1 % | **6.8 %** | 359.25 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 32.00 € | **31.00 €** | 10.5 % | **7.0 %** | 31.41 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (červené) | 32.00 € | **31.00 €** | 11.8 % | **8.3 %** | 31.41 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (strieborné) | 32.00 € | **31.00 €** | 10.5 % | **7.0 %** | 31.41 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 15.00 € | **14.00 €** | 49.5 % | **39.5 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Auto GO/GO+ 64197 Ferrari 488 GT3 Red Bu | 18.00 € | **17.00 €** | 28.6 % | **21.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BMGB25332BG | 176.90 € | **176.00 €** | 8.7 % | **8.1 %** | 176.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.90 € | **25.00 €** | 54.3 % | **48.9 %** | 25.30 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE NRS8182KX | 498.90 € | **498.00 €** | 5.7 % | **5.5 %** | 498.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Arctic White | 17.00 € | **16.50 €** | 13.1 % | **9.8 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Onyx Black | 17.00 € | **16.50 €** | 13.1 % | **9.8 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Sakura Pink | 17.00 € | **16.50 €** | 13.1 % | **9.8 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 221.50 € | **221.00 €** | 22.2 % | **21.9 %** | 221.04 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 17.00 € | **16.50 €** | 8.6 % | **5.4 %** | 16.57 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 477.50 € | **477.00 €** | 7.0 % | **6.8 %** | 477.07 € | cena podľa najlacnejšieho iného predajcu |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 136.00 € | **135.50 €** | 13.4 % | **13.0 %** | 135.59 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2507.50 € | **2507.00 €** | 14.5 % | **14.5 %** | 2507.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **14.00 €** | 54.3 % | **49.0 %** | 14.16 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 418.00 € | **417.50 €** | 13.6 % | **13.4 %** | 417.70 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 72.50 € | **72.00 €** | 19.9 % | **19.0 %** | 72.24 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.00 € | **126.50 €** | 10.7 % | **10.3 %** | 126.85 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.50 € | **13.00 €** | 10.4 % | **6.3 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.50 € | **18.00 €** | 13.6 % | **10.5 %** | 18.39 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 42.50 € | **42.00 €** | 10.0 % | **8.7 %** | 42.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Perfect Steam Air Board S/M | 15.50 € | **15.00 €** | 17.7 % | **13.9 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.50 € | **37.00 €** | 9.1 % | **7.6 %** | 37.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 47.50 € | **47.00 €** | 8.4 % | **7.3 %** | 47.39 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.00 € | **17.50 €** | 8.2 % | **5.2 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 111.50 € | **111.00 €** | 5.6 % | **5.2 %** | 111.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 99.00 € | **98.50 €** | 7.2 % | **6.7 %** | 98.89 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.00 € | **32.50 €** | 7.2 % | **5.6 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 929.50 € | **929.00 €** | 18.1 % | **18.1 %** | 929.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 30.50 € | **30.00 €** | 24.7 % | **22.7 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 52.50 € | **52.00 €** | 9.7 % | **8.7 %** | 52.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 81.00 € | **80.50 €** | 12.6 % | **11.9 %** | 80.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 24.50 € | **24.00 €** | 19.0 % | **16.6 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 119.00 € | **118.50 €** | 11.0 % | **10.6 %** | 118.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 111.00 € | **110.50 €** | 7.2 % | **6.7 %** | 110.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 143.00 € | **142.50 €** | 7.4 % | **7.0 %** | 142.89 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo vodní filtry 3+1 | 12.00 € | **11.50 €** | 13.6 % | **8.8 %** | 11.89 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 78.50 € | **78.00 €** | 6.7 % | **6.0 %** | 78.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42602S | 39.00 € | **38.50 €** | 8.2 % | **6.8 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9286IB | 243.50 € | **243.00 €** | 5.2 % | **5.0 %** | 243.39 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 307.50 € | **307.00 €** | 26.9 % | **26.7 %** | 307.39 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA CD-S303 BLACK | 374.50 € | **374.00 €** | 5.2 % | **5.0 %** | 374.39 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 38.00 € | **37.50 €** | 12.4 % | **10.9 %** | 37.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TESLA SecureQ SC55 - venkovní WiFi smart kame... | 49.00 € | **48.50 €** | 8.2 % | **7.1 %** | 48.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.50 € | **10.00 €** | 26.5 % | **20.4 %** | 10.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 134.00 € | **133.50 €** | 17.1 % | **16.7 %** | 133.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 176.50 € | **176.00 €** | 14.0 % | **13.7 %** | 176.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 77.00 € | **76.50 €** | 32.3 % | **31.5 %** | 76.89 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.50 € | **23.00 €** | 10.8 % | **8.5 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 33.50 € | **33.00 €** | 8.0 % | **6.4 %** | 33.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 656.50 € | **656.00 €** | 5.7 % | **5.6 %** | 656.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 72.00 € | **71.50 €** | 7.6 % | **6.9 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 314.50 € | **314.00 €** | 7.0 % | **6.8 %** | 314.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 613.50 € | **613.00 €** | 6.8 % | **6.7 %** | 613.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 691.50 € | **691.00 €** | 12.8 % | **12.7 %** | 691.39 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 27.00 € | **26.50 €** | 12.3 % | **10.3 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 41.50 € | **41.00 €** | 13.1 % | **11.8 %** | 41.40 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica ELEGOO Mercury XS | 130.00 € | **129.50 €** | 18.0 % | **17.5 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 svietiacich LED vianočných darčekov Solight 1... | 30.50 € | **30.00 €** | 54.5 % | **52.0 %** | 30.48 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42323PC | 80.50 € | **80.00 €** | 10.6 % | **9.9 %** | 80.50 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA37BE AX 1200, WiFi ... | 33.50 € | **33.00 €** | 12.0 % | **10.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 8x42 monokulárny | 24.50 € | **24.00 €** | 13.6 % | **11.2 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 195.90 € | **195.50 €** | 8.9 % | **8.7 %** | 195.72 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7344H | 108.90 € | **108.50 €** | 9.7 % | **9.3 %** | 108.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO465FR | 65.90 € | **65.50 €** | 10.7 % | **10.0 %** | 65.90 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.90 € | **13.50 €** | 13.7 % | **10.4 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo FF0700A | 17.90 € | **17.50 €** | 10.2 % | **7.8 %** | 17.72 € | cena podľa najlacnejšieho iného predajcu |
| Vianočné LED cencúle Solight 1V404-CW, 20 m, studená... | 23.90 € | **23.50 €** | 54.6 % | **52.0 %** | 23.87 € | cena podľa najlacnejšieho iného predajcu |
| Vianočné LED cencúle Solight 1V404-WW, 20 m, teplá b... | 23.90 € | **23.50 €** | 54.6 % | **52.0 %** | 23.87 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110P 2x LAN s PoE, 8x LAN ... | 28.90 € | **28.50 €** | 11.8 % | **10.3 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 24.90 € | **24.50 €** | 15.2 % | **13.3 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.90 € | **369.50 €** | 7.1 % | **7.0 %** | 369.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.30 € | **7.10 €** | 45.5 % | **41.5 %** | 7.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.70 € | **5.50 €** | 26.6 % | **22.2 %** | 5.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.10 € | **7.90 €** | 38.3 % | **34.9 %** | 7.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **19.90 €** | 44.9 % | **44.2 %** | 19.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.80 € | **9.70 €** | 36.0 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 17.00 € | **16.90 €** | 35.0 % | **34.2 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 264 AP | 58.00 € | **57.90 €** | 9.6 % | **9.4 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 60.00 € | **59.90 €** | 9.3 % | **9.1 %** | 59.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 24W... | 5.90 € | **5.80 €** | 45.8 % | **43.3 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 3.90 € | **3.80 €** | 45.4 % | **41.7 %** | 3.87 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 69.00 € | **68.90 €** | 9.8 % | **9.6 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO353VD | 84.00 € | **83.90 €** | 10.4 % | **10.3 %** | 84.00 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 185.00 € | **184.90 €** | 7.6 % | **7.5 %** | 185.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1442.00 € | **1441.90 €** | 7.3 % | **7.3 %** | 1442.00 € | cena podľa najlacnejšieho iného predajcu |

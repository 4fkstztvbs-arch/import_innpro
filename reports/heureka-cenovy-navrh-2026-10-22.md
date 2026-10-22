# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-22

Vstup: `premiumstore-sk_2026-10-22_09-39.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6128**
- Návrh **zvýšiť** cenu: **391** produktov
- Návrh **znížiť** cenu: **682** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5055** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **31**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **369**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (391)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Mini PC GEEKOM IT12 Max Core Ultra 5 125U 16 GB 500 ... | 747.50 € | **968.90 €** | 15.0 % | **49.0 %** | 969.00 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM M1 Plus i5-12600H 16 GB + 512 GB Mini PC | 772.50 € | **978.90 €** | 15.0 % | **45.7 %** | 979.00 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 765.00 € | **956.90 €** | 15.0 % | **43.8 %** | 957.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-285H Intel Core Ultra 9 2... | 732.50 € | **916.90 €** | 15.0 % | **44.0 %** | 917.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec Mini PC M3 Intel i5-12450H 16 GB RAM + 512 GB... | 554.90 € | **708.90 €** | 15.0 % | **46.9 %** | 709.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, strieborná) | 275.50 € | **416.90 €** | 25.2 % | **89.5 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 790.50 € | **888.90 €** | 15.0 % | **29.3 %** | 889.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 228.00 € | **324.50 €** | 25.0 % | **77.9 %** | 324.72 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 699.00 € | **788.90 €** | 15.0 % | **29.8 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pix Cut 2 v 1 | 268.50 € | **338.90 €** | 15.1 % | **45.3 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná nabíjačka Besen BN70-BC-22KW-APP | 293.50 € | **351.00 €** | 15.0 % | **37.6 %** | 351.29 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná nabíjačka Besen BN70-BC-11KW-APP | 265.90 € | **321.50 €** | 15.0 % | **39.1 %** | 321.75 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP800IIIV | 332.50 € | **387.00 €** | 17.2 % | **36.4 %** | 387.46 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 14 | 287.00 € | **333.50 €** | 14.9 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 15 | 287.00 € | **333.50 €** | 14.9 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 6 | 287.00 € | **333.50 €** | 14.9 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 8 | 287.00 € | **333.50 €** | 14.9 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 9 | 287.00 € | **333.50 €** | 14.9 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 773.90 € | **818.90 €** | 15.0 % | **21.7 %** | 819.00 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 656.00 € | **700.00 €** | 8.1 % | **15.4 %** | 700.08 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-1 s rozhraním Thunderbolt 3 | 135.00 € | **178.90 €** | 14.9 % | **52.2 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec M3 Pro s procesorom i5-13500H, 16 GB ... | 675.50 € | **718.00 €** | 15.0 % | **22.2 %** | 718.08 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 742.50 € | **784.00 €** | 15.0 % | **21.4 %** | 784.04 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 280.00 € | **308.50 €** | 24.3 % | **37.0 %** | 308.82 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 182.00 € | **210.00 €** | 5.2 % | **21.3 %** | 210.42 € | cena podľa najlacnejšieho iného predajcu |
| Tester obvodov Ancel PB500 | 73.00 € | **99.50 €** | 7.7 % | **46.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha D132 30044 24H Speed | 322.50 € | **348.50 €** | 14.9 % | **24.1 %** | 348.78 € | cena podľa najlacnejšieho iného predajcu |
| Softbox Neewer 65 cm | 87.00 € | **111.50 €** | 34.5 % | **72.4 %** | 111.81 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 291.00 € | **313.50 €** | 9.0 % | **17.4 %** | 313.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 160.00 € | **182.00 €** | 6.8 % | **21.5 %** | 182.34 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 396.90 € | **416.90 €** | 42.9 % | **50.1 %** | 416.97 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 43.50 € | **62.90 €** | 15.0 % | **66.3 %** | 62.96 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 128.90 € | **148.00 €** | 8.2 % | **24.2 %** | 148.17 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn G2E Thunderbolt 5 (sivá) | 321.00 € | **338.90 €** | 14.9 % | **21.3 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 253.50 € | **270.00 €** | 14.9 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-3 Thunderbolt 5 | 304.50 € | **321.00 €** | 15.0 % | **21.2 %** | 321.21 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 253.50 € | **269.90 €** | 15.0 % | **22.4 %** | 269.92 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LBD4Z | 455.50 € | **471.90 €** | 6.4 % | **10.3 %** | 472.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, čierna) | 254.90 € | **271.00 €** | 15.0 % | **22.3 %** | 271.21 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 252.90 € | **269.00 €** | 15.0 % | **22.3 %** | 269.25 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, strieborná) | 252.90 € | **269.00 €** | 15.0 % | **22.3 %** | 269.25 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-TC41L5C-VMD-LQ 4.0 Mpix venkovní komp... | 284.50 € | **299.00 €** | -0.1 % | **5.0 %** | 260.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX V100 TTL pre Nikon | 325.50 € | **340.00 €** | 5.1 % | **9.8 %** | 340.09 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 255.00 € | **269.50 €** | 14.9 % | **21.4 %** | 269.79 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Kettle K3 Polar white | 12.50 € | **25.50 €** | 12.3 % | **129.1 %** | 25.65 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre V60 MOBIUS | 46.90 € | **59.50 €** | 15.3 % | **46.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Viaczónový regulátor zavlažovania RainPoint | 47.50 € | **59.50 €** | 14.9 % | **43.9 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 178.00 € | **189.90 €** | 14.9 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 178.00 € | **189.90 €** | 14.9 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 178.00 € | **189.90 €** | 14.9 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 178.00 € | **189.90 €** | 14.9 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect USetup E7 15,6" 1920x1080 60Hz prenosný dot... | 130.00 € | **141.90 €** | 11.6 % | **21.8 %** | 141.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 177.90 € | **189.50 €** | 15.1 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 177.90 € | **189.50 €** | 15.1 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 88.00 € | **99.50 €** | 9.8 % | **24.1 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava držadiel PGY RetroVa pre iPhone 16 Pro | 88.00 € | **99.50 €** | 10.3 % | **24.7 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 88.00 € | **99.50 €** | 7.8 % | **21.8 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 88.00 € | **99.50 €** | 7.8 % | **21.8 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Neptune 4 Max | 380.90 € | **392.00 €** | 5.1 % | **8.1 %** | 392.09 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač MOVA K30 Lite | 209.90 € | **221.00 €** | 5.0 % | **10.6 %** | 221.24 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT6000 99,9 Wh štartér | 119.00 € | **129.00 €** | 15.0 % | **24.7 %** | 129.08 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600Bi s dvojfare... | 126.00 € | **136.00 €** | 14.9 % | **24.0 %** | 136.21 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Air Projektor | 192.50 € | **202.50 €** | 15.1 % | **21.1 %** | 202.83 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 107.50 € | **117.00 €** | 19.4 % | **30.0 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa na hubenie hmyzu BALDRTHERM (BZ60... | 44.90 € | **54.00 €** | 15.4 % | **38.8 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HBL-801 kaskádový filter | 18.00 € | **27.00 €** | 35.6 % | **103.4 %** | 27.16 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (biela) | 168.90 € | **177.50 €** | 5.2 % | **10.6 %** | 177.65 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (čierny) | 168.90 € | **177.50 €** | 5.2 % | **10.6 %** | 177.65 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 125.50 € | **134.00 €** | 16.2 % | **24.1 %** | 134.33 € | cena podľa najlacnejšieho iného predajcu |
| Súprava osvetlenia Softbox 10102773 700 W, 3 ks | 95.50 € | **104.00 €** | 15.1 % | **25.3 %** | 104.33 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 56.50 € | **65.00 €** | 17.1 % | **34.7 %** | 65.35 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 33.00 € | **41.50 €** | 28.2 % | **61.3 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X2 Carplay/Android ... | 32.00 € | **40.00 €** | 15.1 % | **43.8 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 27.90 € | **35.50 €** | 12.6 % | **43.3 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-B -6072 WiFi Smart Digital Lock Black | 94.90 € | **102.50 €** | 15.1 % | **24.3 %** | 102.71 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 207.50 € | **215.00 €** | 15.1 % | **19.3 %** | 215.42 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 210.50 € | **218.00 €** | 14.9 % | **19.0 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W9 | 155.00 € | **162.00 €** | 19.1 % | **24.5 %** | 162.25 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXKE2201E | 29.50 € | **36.50 €** | 20.0 % | **48.5 %** | 36.76 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 47.00 € | **54.00 €** | 14.9 % | **32.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2014401 Zmrzlinovač | 173.00 € | **179.50 €** | 7.7 % | **11.7 %** | 179.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight trubica pre GL05-100 | 13.00 € | **19.50 €** | 49.5 % | **124.2 %** | 19.55 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA NS-AW592 WHITE 1 karton | 239.50 € | **246.00 €** | 6.4 % | **9.3 %** | 246.05 € | cena podľa najlacnejšieho iného predajcu |
| Tefal SV9201E0 | 186.50 € | **193.00 €** | 5.2 % | **8.9 %** | 193.10 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CA077 Univerzálny držiak na fotoaparát | 79.50 € | **86.00 €** | 15.1 % | **24.5 %** | 86.17 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 58.00 € | **64.50 €** | 14.5 % | **27.3 %** | 64.75 € | cena podľa najlacnejšieho iného predajcu |
| Masážní přístroj šíje a zad, REBEL ACTIVE RBA-6005 | 32.50 € | **39.00 €** | 7.1 % | **28.5 %** | 39.33 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 100.50 € | **107.00 €** | 13.8 % | **21.2 %** | 107.42 € | cena podľa najlacnejšieho iného predajcu |
| Sušička ovoce Ruhhy 25928 400W | 51.50 € | **57.90 €** | 9.0 % | **22.5 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 103.90 € | **110.00 €** | 5.1 % | **11.3 %** | 110.04 € | cena podľa najlacnejšieho iného predajcu |
| Stojan JMGO pre modely N1S SE, Nano a PicoPlay+ | 112.90 € | **119.00 €** | 15.0 % | **21.2 %** | 119.42 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS4 štartér do auta | 77.50 € | **83.50 €** | 15.1 % | **24.1 %** | 83.54 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, grey ASR002 | 67.00 € | **73.00 €** | 14.6 % | **24.9 %** | 73.06 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, oran. ASR001 | 67.00 € | **73.00 €** | 14.6 % | **24.9 %** | 73.06 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z18S 18" 100 Hz prenosný herný monitor | 119.00 € | **125.00 €** | 14.8 % | **20.6 %** | 125.08 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER x660 PRO II | 200.50 € | **206.50 €** | 20.4 % | **24.0 %** | 206.71 € | cena podľa najlacnejšieho iného predajcu |
| Fitness sada na pilates REBEL ACTIVE RBA-3069-PK mul... | 41.50 € | **47.50 €** | 9.5 % | **25.4 %** | 47.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight trubica pre GL05-100N | 13.00 € | **19.00 €** | 49.5 % | **118.5 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu |
| Filter MOVA pre model LR10 PRIME | 27.00 € | **33.00 €** | 14.8 % | **40.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell série V2 VND/CPL II 3-7 s... | 142.00 € | **148.00 €** | 22.3 % | **27.4 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 292.90 € | **298.50 €** | 5.1 % | **7.1 %** | 298.71 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 520.50 € | **526.00 €** | 6.6 % | **7.7 %** | 526.03 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – súprava „... | 85.00 € | **90.00 €** | 14.8 % | **21.5 %** | 90.04 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN X Gimbal (sivý) | 47.50 € | **52.50 €** | 18.2 % | **30.6 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-2 Oculink | 90.00 € | **95.00 €** | 15.0 % | **21.4 %** | 95.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 32.50 € | **37.50 €** | 17.3 % | **35.3 %** | 37.74 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 68.00 € | **73.00 €** | 12.3 % | **20.6 %** | 73.31 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-90 90W Power De... | 23.00 € | **27.50 €** | 14.2 % | **36.5 %** | 27.54 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRKI517E41 | 460.00 € | **464.50 €** | 10.3 % | **11.4 %** | 464.59 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 84.00 € | **88.50 €** | 7.3 % | **13.1 %** | 88.61 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 31.00 € | **35.50 €** | 7.0 % | **22.6 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (červené) | 31.00 € | **35.50 €** | 8.3 % | **24.0 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| LED trubicové svietidlo NEEWER TL60 20 W | 118.50 € | **123.00 €** | 19.2 % | **23.8 %** | 123.13 € | cena podľa najlacnejšieho iného predajcu |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 77.00 € | **81.50 €** | 14.6 % | **21.3 %** | 81.67 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 84.50 € | **89.00 €** | 18983.1 % | **19999.4 %** | 89.29 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT3000 44,4 Wh štartér | 59.50 € | **64.00 €** | 14.7 % | **23.3 %** | 64.38 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 18.00 € | **22.50 €** | 10.9 % | **38.7 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 220.50 € | **225.00 €** | 15.0 % | **17.3 %** | 225.42 € | cena podľa najlacnejšieho iného predajcu |
| BEKO CEG7302B | 237.50 € | **241.90 €** | 5.0 % | **7.0 %** | 241.93 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 148.50 € | **152.90 €** | 5.7 % | **8.8 %** | 153.00 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 581.90 € | **586.00 €** | 8.6 % | **9.4 %** | 586.40 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 31.00 € | **35.00 €** | 12.9 % | **27.4 %** | 35.04 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 123.00 € | **127.00 €** | 12.7 % | **16.3 %** | 127.13 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 42.00 € | **46.00 €** | 18.2 % | **29.4 %** | 46.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 106.00 € | **110.00 €** | 14.8 % | **19.1 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (biely) | 103.50 € | **107.50 €** | 14.9 % | **19.3 %** | 107.79 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFGV8080 Softbox | 57.50 € | **61.50 €** | 15.1 % | **23.2 %** | 61.88 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 235.00 € | **238.90 €** | 29.7 % | **31.9 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač 4 x 16A, biely | 3.10 € | **6.80 €** | 48.3 % | **225.2 %** | 6.86 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S100 na detekciu úniku | 97.50 € | **101.00 €** | 15.2 % | **19.3 %** | 101.21 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro – štandardná sada | 62.00 € | **65.50 €** | 14.7 % | **21.2 %** | 65.71 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – Powerbanka | 62.00 € | **65.50 €** | 14.6 % | **21.1 %** | 65.71 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátor Lipo Gens Ace G-Tech 3300mAh 22,2V 60C 6S... | 67.50 € | **71.00 €** | 15.2 % | **21.2 %** | 71.38 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT625B, USB | 39.50 € | **43.00 €** | 11.0 % | **20.8 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu |
| Kabel USB-A do USB-C 350mm PGYTECH (P-GM-124) | 14.50 € | **18.00 €** | 13.7 % | **41.1 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 25.50 € | **28.90 €** | 5.2 % | **19.2 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 25.50 € | **28.90 €** | 5.2 % | **19.2 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta GZ5436E0 | 295.90 € | **299.00 €** | 10.1 % | **11.2 %** | 299.50 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXCJ350E | 43.90 € | **47.00 €** | 5.2 % | **12.6 %** | 47.06 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat DIGITRADIO 317 /černé/ | 83.90 € | **86.90 €** | 8.9 % | **12.8 %** | 86.98 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 25.00 € | **28.00 €** | 16.7 % | **30.7 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27371-56 | 30.50 € | **33.50 €** | 6.2 % | **16.6 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 59.00 € | **62.00 €** | 6.7 % | **12.1 %** | 62.13 € | cena podľa najlacnejšieho iného predajcu |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 100.50 € | **103.50 €** | 5.3 % | **8.4 %** | 103.75 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Nikon | 211.00 € | **214.00 €** | 8.2 % | **9.8 %** | 214.26 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.00 € | **106.90 €** | 23.8 % | **27.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.00 € | **78.90 €** | 18.6 % | **23.2 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 108 200/ 50/bl | 279.00 € | **281.90 €** | 15.0 % | **16.2 %** | 282.00 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10100 Smart Ceramic | 49.90 € | **52.50 €** | 14.8 % | **20.7 %** | 52.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 9.40 € | **12.00 €** | 37.9 % | **76.1 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.40 € | **12.00 €** | 12.1 % | **43.1 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 12.00 € | **14.50 €** | 27.7 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 10.00 € | **12.50 €** | 14.2 % | **42.7 %** | 12.60 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Nočné svetlo D1 Matter Smart na nočný stolík | 59.00 € | **61.50 €** | 14.6 % | **19.4 %** | 61.63 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM08 (čierna) | 25.50 € | **28.00 €** | 14.4 % | **25.6 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (biela) | 25.50 € | **28.00 €** | 14.2 % | **25.4 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (čierna) | 25.50 € | **28.00 €** | 14.2 % | **25.4 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 125.00 € | **127.50 €** | 11.0 % | **13.2 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 8 (čierny) | 34.00 € | **36.50 €** | 14.5 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 9 (čierny) | 34.00 € | **36.50 €** | 14.5 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.50 € | **20.00 €** | 12.6 % | **28.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Fotografická taška cez rameno PGYTECH OneGo Pocket S... | 34.00 € | **36.50 €** | 14.6 % | **23.0 %** | 36.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.50 €** | 7.7 % | **15.0 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic GAUSS TAPE ECHO | 60.00 € | **62.50 €** | 15.0 % | **19.8 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 62.00 € | **64.50 €** | 12.3 % | **16.8 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 72.50 € | **75.00 €** | 14.8 % | **18.8 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, studená b... | 11.50 € | **14.00 €** | 49.6 % | **82.1 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 9.60 € | **12.00 €** | 5.0 % | **31.3 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 15.50 € | **17.90 €** | 45.5 % | **68.0 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM09 (čierna) | 25.50 € | **27.90 €** | 14.8 % | **25.6 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot My Dino II | 19.90 € | **22.00 €** | 18.2 % | **30.7 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.80 € | **9.90 €** | 7.8 % | **36.9 %** | 9.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight vodeodolná prepojovací krabička IP68, 1x vst... | 7.90 € | **10.00 €** | 55.5 % | **96.9 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife puzdro pre DJI Osmo Mobile 7 (čierne) | 10.90 € | **13.00 €** | 15.2 % | **37.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight WIFI zásuvka s meraním spotreby | 10.00 € | **12.00 €** | 13.9 % | **36.6 %** | 12.02 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 10.50 € | **12.50 €** | 15.4 % | **37.3 %** | 12.55 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 53.50 € | **55.50 €** | 6.3 % | **10.3 %** | 55.55 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 53.50 € | **55.50 €** | 6.3 % | **10.2 %** | 55.55 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 53.50 € | **55.50 €** | 19.2 % | **23.7 %** | 55.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 22.90 € | **24.90 €** | 5.4 % | **14.6 %** | 24.98 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prsteň COLMI R02, veľkosť 12,21,3 mm (č... | 27.50 € | **29.50 €** | 14.6 % | **22.9 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10000 Top Ceramic | 43.00 € | **45.00 €** | 14.8 % | **20.2 %** | 45.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 17.00 € | **19.00 €** | 22.7 % | **37.2 %** | 19.14 € | cena podľa najlacnejšieho iného predajcu |
| Catlink Fresh smart odor absorber | 33.00 € | **35.00 €** | 6.9 % | **13.4 %** | 35.17 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S30 nabíjacia stanica 6 v 1 4xUSB-C + 2... | 38.00 € | **40.00 €** | 14.3 % | **20.3 %** | 40.25 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24010-56 | 38.50 € | **40.50 €** | 5.4 % | **10.9 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Budík Blitzwolf BW-FW10 s nabíjačkou 2xUSB-A, 4xUSB-... | 62.50 € | **64.50 €** | 15.4 % | **19.1 %** | 64.79 € | cena podľa najlacnejšieho iného predajcu |
| LaserPecker 2 – základná verzia | 434.00 € | **436.00 €** | 15.0 % | **15.5 %** | 436.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 16.00 € | **18.00 €** | 20.2 % | **35.3 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 31.50 € | **33.50 €** | 36.4 % | **45.1 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1013400 | 57.50 € | **59.50 €** | 13.9 % | **17.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 13.50 € | **15.50 €** | 11.3 % | **27.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC 20100 W | 61.00 € | **63.00 €** | 13.7 % | **17.4 %** | 63.42 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife 761V2 magnetický držiak pre OP 3 (čierny) | 10.00 € | **12.00 €** | 12.9 % | **35.5 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6750mAh 14.8V 60C 4S1P 14# XT90 Battery | 80.00 € | **81.90 €** | 20.8 % | **23.7 %** | 81.92 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 174.00 € | **175.90 €** | 16.5 % | **17.8 %** | 175.97 € | cena podľa najlacnejšieho iného predajcu |
| Solight časovač so súmrakovým senzorom, 230V, 3600W | 8.60 € | **10.50 €** | 45.1 % | **77.1 %** | 10.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight teplomer, farba čierna | 14.00 € | **15.90 €** | 31.3 % | **49.1 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 6.8 % | **14.1 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (biela) | 19.00 € | **20.90 €** | 14.4 % | **25.9 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (čierna) | 19.00 € | **20.90 €** | 14.4 % | **25.9 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LIB60420CL | 262.90 € | **264.50 €** | 7.2 % | **7.9 %** | 264.80 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer NutriSpin | 46.90 € | **48.50 €** | 15.2 % | **19.1 %** | 48.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 19.90 € | **21.50 €** | 5.7 % | **14.2 %** | 21.64 € | cena podľa najlacnejšieho iného predajcu |
| LED pásik YEELIGHT Obsid RGBIC YLFWD-0025 | 50.90 € | **52.50 €** | 15.3 % | **18.9 %** | 52.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 7.80 € | **9.30 €** | 12.6 % | **34.3 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 51.00 € | **52.50 €** | 6.6 % | **9.7 %** | 52.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 18.50 € | **20.00 €** | 6.1 % | **14.8 %** | 20.05 € | cena podľa najlacnejšieho iného predajcu |
| Sada ND filtrov pre DJI Action 6 (ND8/16/32/64) | 24.50 € | **26.00 €** | 14.5 % | **21.6 %** | 26.08 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo FF0700A | 17.50 € | **19.00 €** | 7.8 % | **17.0 %** | 19.10 € | cena podľa najlacnejšieho iného predajcu |
| Twarde etui Sunnylife do Neo 2 Motion Fly More Combo | 53.50 € | **55.00 €** | 14.7 % | **17.9 %** | 55.13 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6AC V2 | 54.00 € | **55.50 €** | 18.8 % | **22.1 %** | 55.63 € | cena podľa najlacnejšieho iného predajcu |
| Myš ONIKUMA DM06 | 17.50 € | **19.00 €** | 15.7 % | **25.6 %** | 19.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 23.50 € | **25.00 €** | 7.3 % | **14.1 %** | 25.19 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 26.50 € | **28.00 €** | 5.4 % | **11.4 %** | 28.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 18.50 € | **20.00 €** | 5.3 % | **13.9 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-Q29 8MP Wi-Fi IP kamera s dvoma objektívmi | 42.00 € | **43.50 €** | 14.5 % | **18.6 %** | 43.71 € | cena podľa najlacnejšieho iného predajcu |
| MOES WHT-006-GB-WH Wi-Fi termostat pre elektrické kú... | 32.50 € | **34.00 €** | 15.2 % | **20.5 %** | 34.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B4 (modrá) | 64.00 € | **65.50 €** | 8.1 % | **10.6 %** | 65.81 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 30.50 € | **32.00 €** | 14.2 % | **19.8 %** | 32.33 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 142.00 € | **143.50 €** | 30.7 % | **32.1 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 142.00 € | **143.50 €** | 13.8 % | **15.0 %** | 143.85 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 77.00 € | **78.50 €** | 19.3 % | **21.7 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **12.00 €** | 5.5 % | **20.6 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 26.00 € | **27.50 €** | 5.5 % | **11.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 28.00 € | **29.50 €** | 20.3 % | **26.7 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre GoPro Hero 13 | 31.50 € | **33.00 €** | 14.4 % | **19.8 %** | 33.42 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny prostriedok na čistenie podláh pre model... | 18.50 € | **20.00 €** | 15.2 % | **24.5 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Carrying Case Sunnylife for DJI FPV Remote Controlle... | 10.50 € | **12.00 €** | 14.7 % | **31.1 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny COAX konektor priamy - typ Taliansko... | 5.10 € | **6.50 €** | 49.7 % | **90.8 %** | 6.59 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 135 | 45.50 € | **46.90 €** | 5.8 % | **9.1 %** | 46.99 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 9N2BR-S | 397.50 € | **398.90 €** | 5.1 % | **5.5 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 | 40.90 € | **42.00 €** | 6.4 % | **9.3 %** | 42.04 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo elektrický rotační čistič PS01 | 26.90 € | **28.00 €** | 10.2 % | **14.7 %** | 28.07 € | cena podľa najlacnejšieho iného predajcu |
| Drosselmeyer TIBP01G | 34.90 € | **36.00 €** | 10.6 % | **14.1 %** | 36.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 18.90 € | **20.00 €** | 6.4 % | **12.6 %** | 20.43 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 99.90 € | **101.00 €** | 5.8 % | **7.0 %** | 101.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 7.80 € | **8.80 €** | 51.7 % | **71.2 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 200.00 € | **201.00 €** | 15.4 % | **15.9 %** | 201.02 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 200.00 € | **201.00 €** | 15.4 % | **15.9 %** | 201.02 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT262E – bezkontaktný detektor poradia fáz | 88.50 € | **89.50 €** | 14.9 % | **16.2 %** | 89.54 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 filters Sunnylife MCUV, ND8/16/34/64/128 fo... | 22.00 € | **23.00 €** | 14.4 % | **19.6 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 320.50 € | **321.50 €** | 13.1 % | **13.5 %** | 321.55 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 46.50 € | **47.50 €** | 16.8 % | **19.3 %** | 47.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 13.90 € | **14.90 €** | 6.6 % | **14.3 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight dezinfekčná bezozónová UV lampa 100W | 42.50 € | **43.50 €** | 35.3 % | **38.5 %** | 43.59 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 24.00 € | **25.00 €** | 21.6 % | **26.7 %** | 25.09 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 21391-56/RH | 50.00 € | **51.00 €** | 12.0 % | **14.3 %** | 51.10 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak MagSafe Fun Shot Grip2 (čierny) | 20.90 € | **21.90 €** | 15.5 % | **21.0 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/ 80 Ohm | 381.90 € | **382.90 €** | 25.8 % | **26.2 %** | 383.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 447.90 € | **448.90 €** | 35.9 % | **36.2 %** | 449.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED snehuliak Solight 1V233, 4 LED, 2 × AA | 11.50 € | **12.50 €** | 32.1 % | **43.5 %** | 12.63 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 25.50 € | **26.50 €** | 14.7 % | **19.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 35.00 € | **36.00 €** | 12.2 % | **15.4 %** | 36.16 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 35.00 € | **36.00 €** | 15.1 % | **18.4 %** | 36.16 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Aura 5 ANC | 39.00 € | **40.00 €** | 18.5 % | **21.6 %** | 40.20 € | cena podľa najlacnejšieho iného predajcu |
| WESTMARK 2094 2611 Nůžky na salát, 8 ks | 43.50 € | **44.50 €** | 10.4 % | **12.9 %** | 44.71 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 30cm WiFi/Bluetooth 16M RGBCW Gos... | 21.50 € | **22.50 €** | 14.7 % | **20.0 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlo Etenwolf L2, 300 lm | 13.50 € | **14.50 €** | 15.7 % | **24.2 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 41.00 € | **42.00 €** | 22.5 % | **25.5 %** | 42.30 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 16.50 € | **17.50 €** | 17.9 % | **25.0 %** | 17.82 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT2302 Digitálny tester zemného odporu | 116.00 € | **117.00 €** | 14.9 % | **15.8 %** | 117.38 € | cena podľa najlacnejšieho iného predajcu |
| Súprava plynového pedála a spojky MOZA SRP Lite2 Per... | 40.50 € | **41.50 €** | 14.8 % | **17.6 %** | 41.88 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 203.50 € | **204.50 €** | 13.8 % | **14.3 %** | 204.90 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 130.50 € | **131.50 €** | 29.8 % | **30.8 %** | 131.90 € | cena podľa najlacnejšieho iného predajcu |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 22.50 € | **23.50 €** | 14.3 % | **19.4 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO White | 47.00 € | **48.00 €** | 9.0 % | **11.3 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Black | 47.00 € | **48.00 €** | 9.0 % | **11.3 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Pink | 47.00 € | **48.00 €** | 9.0 % | **11.3 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mobilnej dokovacej stanice VITURE pre Nintend... | 20.00 € | **21.00 €** | 26.4 % | **32.8 %** | 21.47 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 47.00 € | **48.00 €** | 29.1 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64251 Ferrari SF-90 Stradale | 16.00 € | **17.00 €** | 14.3 % | **21.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 238.00 € | **238.90 €** | 7.2 % | **7.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 White | 41.00 € | **41.90 €** | 9.8 % | **12.2 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Black | 41.00 € | **41.90 €** | 9.8 % | **12.2 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Pink | 41.00 € | **41.90 €** | 9.8 % | **12.2 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| Hliníkový držiak Sunnylife pre Insta360 X5/X4 | 16.00 € | **16.90 €** | 14.4 % | **20.8 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 263.00 € | **263.90 €** | 23.0 % | **23.4 %** | 263.94 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 275.00 € | **275.90 €** | 29.6 % | **30.1 %** | 275.99 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná krajinka s domčekom Solight 1V264, 18 c... | 5.80 € | **6.60 €** | 26.8 % | **44.2 %** | 6.63 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 18.90 € | **19.50 €** | 5.7 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 23.90 € | **24.50 €** | 14.4 % | **17.2 %** | 24.55 € | cena podľa najlacnejšieho iného predajcu |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 26.90 € | **27.50 €** | 32.4 % | **35.3 %** | 27.55 € | cena podľa najlacnejšieho iného predajcu |
| LEXIBOOK Set Tlapková patrola-vysílačky | 24.90 € | **25.50 €** | 10.9 % | **13.5 %** | 25.58 € | cena podľa najlacnejšieho iného predajcu |
| KMP C137 (Canon CL 561XL) | 17.90 € | **18.50 €** | 10.1 % | **13.8 %** | 18.70 € | cena podľa najlacnejšieho iného predajcu |
| Charger MOKiN PD140W 2C1A GaN 2xUSB-C 1xUSB-A (black) | 27.90 € | **28.50 €** | 15.4 % | **17.9 %** | 28.71 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND64/PL | 18.90 € | **19.50 €** | 5.2 % | **8.5 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 41.90 € | **42.50 €** | 41.8 % | **43.8 %** | 42.85 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV5736E0 | 53.90 € | **54.50 €** | 13.0 % | **14.2 %** | 54.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 34.90 € | **35.50 €** | 7.6 % | **9.4 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 34.90 € | **35.50 €** | 18.8 % | **20.9 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšie ochranné puzdro na káble, IP44 | 3.20 € | **3.80 €** | 56.7 % | **86.1 %** | 3.89 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 12.90 € | **13.50 €** | 14.6 % | **20.0 %** | 13.63 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW953 (čierna) | 12.90 € | **13.50 €** | 15.4 % | **20.7 %** | 13.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 13.90 € | **14.50 €** | 7.7 % | **12.4 %** | 14.85 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT371 | 65.90 € | **66.50 €** | 15.3 % | **16.4 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight kúpeľňový radiátor 500W | 130.00 € | **130.50 €** | 4.8 % | **5.2 %** | 130.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Euhomy IM011 Výrobník ľadu, 1,2 l, 12 kg (čierny) | 74.50 € | **75.00 €** | 6.5 % | **7.3 %** | 75.01 € | cena podľa najlacnejšieho iného predajcu |
| Sada dětského nářadí KIDS 12 SIXTOL | 23.00 € | **23.50 €** | 11.8 % | **14.2 %** | 23.51 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 188.00 € | **188.50 €** | 10.8 % | **11.1 %** | 188.51 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 11.50 € | **12.00 €** | 7.7 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG S24 FE FIXOP3-1391-BK | 11.50 € | **12.00 €** | 7.7 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhoľnatého MOES WSS-CO s pripojením c... | 29.00 € | **29.50 €** | 15.1 % | **17.1 %** | 29.54 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 12.00 € | **12.50 €** | 13.6 % | **18.3 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife 1/4'' rýchloupínací držiak s mačacím uchom... | 12.50 € | **13.00 €** | 15.7 % | **20.4 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA80XE AX 3000, WiFi ... | 23.00 € | **23.50 €** | 12.4 % | **14.8 %** | 23.54 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2404 | 107.00 € | **107.50 €** | 14.5 % | **15.1 %** | 107.54 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 163.50 € | **164.00 €** | 12.7 % | **13.1 %** | 164.05 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdr SG A16 4G/5G FIXOP3-1500-BK | 11.50 € | **12.00 €** | 7.5 % | **12.1 %** | 12.05 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.50 € | **79.00 €** | 9.4 % | **10.1 %** | 79.06 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 17.00 € | **17.50 €** | 18.1 % | **21.6 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.00 € | **22.50 €** | 9.2 % | **11.7 %** | 22.59 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 50.50 € | **51.00 €** | 13.0 % | **14.1 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 50.50 € | **51.00 €** | 36.0 % | **37.4 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSH2003E | 27.00 € | **27.50 €** | 18.0 % | **20.1 %** | 27.59 € | cena podľa najlacnejšieho iného predajcu |
| Sada stavebních vozidel s příslušenstvím 26578 | 24.00 € | **24.50 €** | 19.1 % | **21.6 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 107.00 € | **107.50 €** | 16.7 % | **17.2 %** | 107.59 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 210.50 € | **211.00 €** | 10.1 % | **10.3 %** | 211.10 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 127.00 € | **127.50 €** | 11.5 % | **11.9 %** | 127.64 € | cena podľa najlacnejšieho iného predajcu |
| Boffin I 100 | 24.00 € | **24.50 €** | 6.9 % | **9.1 %** | 24.65 € | cena podľa najlacnejšieho iného predajcu |
| TricutBrush 2.0 – hlavný kefový nástavec pre robotic... | 39.50 € | **40.00 €** | 19.0 % | **20.5 %** | 40.17 € | cena podľa najlacnejšieho iného predajcu |
| Držiak s prísavkou Telesin pre DJI Osmo Action 3/4/5... | 11.00 € | **11.50 €** | 14.9 % | **20.2 %** | 11.67 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 133.00 € | **133.50 €** | 7.1 % | **7.5 %** | 133.67 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 96.00 € | **96.50 €** | 8.5 % | **9.1 %** | 96.69 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 180.50 € | **181.00 €** | 11.3 % | **11.6 %** | 181.19 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.50 € | **167.00 €** | 15.7 % | **16.0 %** | 167.19 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA37BE AX 1200, WiFi ... | 33.00 € | **33.50 €** | 10.3 % | **12.0 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 180.50 € | **181.00 €** | 25.0 % | **25.3 %** | 181.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.00 € | **17.50 €** | 39.2 % | **43.3 %** | 17.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 12.50 € | **13.00 €** | 14.3 % | **18.9 %** | 13.21 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA20FMW7NG Candy Wave 600 | 133.00 € | **133.50 €** | 7.1 % | **7.5 %** | 133.75 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 White | 31.50 € | **32.00 €** | 9.7 % | **11.5 %** | 32.26 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Pink | 31.50 € | **32.00 €** | 9.7 % | **11.5 %** | 32.26 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 156.00 € | **156.50 €** | 11.6 % | **12.0 %** | 156.76 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64034 Mario Kart - Luigi | 16.00 € | **16.50 €** | 14.3 % | **17.9 %** | 16.78 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.50 € | **23.00 €** | 12.6 % | **15.1 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 167.50 € | **168.00 €** | 33.0 % | **33.4 %** | 168.29 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 273.00 € | **273.50 €** | 31.8 % | **32.1 %** | 273.79 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 273.00 € | **273.50 €** | 28.7 % | **28.9 %** | 273.79 € | cena podľa najlacnejšieho iného predajcu |
| BEKO SIM8130P | 44.50 € | **45.00 €** | 11.1 % | **12.4 %** | 45.30 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.00 € | **14.50 €** | 13.0 % | **17.1 %** | 14.82 € | cena podľa najlacnejšieho iného predajcu |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 135.50 € | **136.00 €** | 13.0 % | **13.4 %** | 136.33 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Safe'Tea KO261130 | 27.50 € | **28.00 €** | 14.5 % | **16.6 %** | 28.33 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro 145G/14T5G FIXOP3-1567-BK | 12.50 € | **13.00 €** | 17.1 % | **21.8 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SD S26 FE FIXOP3-1707-BK | 12.50 € | **13.00 €** | 17.1 % | **21.8 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus XiaRed 17 4G, FIXOP3-1728-BK | 12.50 € | **13.00 €** | 17.1 % | **21.8 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 217.00 € | **217.50 €** | 17.4 % | **17.7 %** | 217.85 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPhon 15 FIXMMY-1200-BK | 14.50 € | **15.00 €** | 18.0 % | **22.1 %** | 15.36 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre DJI Osmo Action 5 (modré) | 15.50 € | **16.00 €** | 13.9 % | **17.6 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Ovládač PXN-P5 8K | 32.00 € | **32.50 €** | 10.2 % | **12.0 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.50 € | **15.00 €** | 14.8 % | **18.7 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Montážna základňa PGYTECH Suction Cup | 13.00 € | **13.50 €** | 33.4 % | **38.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ DJI Mini / Osmo Pocket puzdro na prenášanie (č... | 11.00 € | **11.50 €** | 14.5 % | **19.7 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické LED svetlo na selfie NEEWER NL48B | 16.50 € | **17.00 €** | 15.5 % | **19.0 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 16.50 € | **17.00 €** | 16.5 % | **20.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 21.50 € | **22.00 €** | 7.6 % | **10.1 %** | 22.45 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 12.50 € | **13.00 €** | 12.8 % | **17.3 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.50 € | **297.00 €** | 12.9 % | **13.1 %** | 297.46 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 208.50 € | **209.00 €** | 34.6 % | **34.9 %** | 209.47 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 111.50 € | **112.00 €** | 12.4 % | **12.9 %** | 112.49 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 14.50 € | **15.00 €** | 44.5 % | **49.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight valce z mikrovlákna pre Dyson Wash G1 | 20.50 € | **21.00 €** | 29.6 % | **32.8 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Válcová kefa MOVA | 13.50 € | **14.00 €** | 14.8 % | **19.1 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Pink | 93.50 € | **93.90 €** | 9.9 % | **10.4 %** | 93.91 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 152.50 € | **152.90 €** | 31.5 % | **31.9 %** | 152.94 € | cena podľa najlacnejšieho iného predajcu |
| Hliníková upínací svorka pre modely RS 4 Mini / RS 4... | 12.50 € | **12.90 €** | 16.5 % | **20.3 %** | 12.96 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2459BS | 51.50 € | **51.90 €** | 11.3 % | **12.2 %** | 51.97 € | cena podľa najlacnejšieho iného predajcu |
| COLMI G06 Inteligentné okuliare Čierne | 39.50 € | **39.90 €** | 21.6 % | **22.8 %** | 39.97 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.50 € | **16.90 €** | 21.5 % | **24.5 %** | 16.99 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.30 € | **8.70 €** | 66.6 % | **74.6 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 8.80 € | **9.10 €** | 6.0 % | **9.6 %** | 9.19 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s farebnými guľami Solight 1V273,... | 2.80 € | **3.00 €** | 34.7 % | **44.3 %** | 3.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.70 € | **4.90 €** | 11.4 % | **16.1 %** | 4.98 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 40.90 € | **41.00 €** | 34.5 % | **34.8 %** | 41.02 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1008 8x GLan, 19"rack | 37.90 € | **38.00 €** | 5.9 % | **6.2 %** | 38.04 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V200 | 32.90 € | **33.00 €** | 18.2 % | **18.6 %** | 33.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.90 € | **18.00 €** | 46.6 % | **47.4 %** | 18.07 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.90 € | **53.00 €** | 9.7 % | **9.9 %** | 53.09 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-838 5G | 22.90 € | **23.00 €** | 30.3 % | **30.9 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR C3 Carrying Case for Quest 3 | 46.90 € | **47.00 €** | 34.4 % | **34.7 %** | 47.10 € | cena podľa najlacnejšieho iného predajcu |
| RainPoint WiFi 8-zónový regulátor zavlažovania | 59.90 € | **60.00 €** | 17.6 % | **17.8 %** | 60.11 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H3c 3K Venkovní IP, 5MP, 2.8mm, WiFi | 48.90 € | **49.00 €** | 5.3 % | **5.6 %** | 49.15 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 35.90 € | **36.00 €** | 5.8 % | **6.1 %** | 36.16 € | cena podľa najlacnejšieho iného predajcu |
| Gyroskop pre RC modely áut SkyRC Gyro GC301 | 20.90 € | **21.00 €** | 15.8 % | **16.4 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **5.20 €** | 18.1 % | **20.4 %** | 5.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **4.90 €** | 6.6 % | **8.8 %** | 4.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.70 € | **3.80 €** | 30.8 % | **34.3 %** | 3.81 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic EDT 100S | 15.90 € | **16.00 €** | 15.0 % | **15.7 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač pre rolety MOES WRS-EUC-WH-MS | 12.90 € | **13.00 €** | 14.9 % | **15.8 %** | 13.21 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov Sunnylife CPL + ND8 + ND16 pre Osmo Nano | 15.90 € | **16.00 €** | 16.4 % | **17.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 125.90 € | **126.00 €** | 21.0 % | **21.1 %** | 126.30 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (682)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria Flytec V900 12000mah | 223.90 € | **17.50 €** | 1513.8 % | **26.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, čierna) | 416.90 € | **253.50 €** | 89.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 635.00 € | **472.00 €** | 44.2 % | **7.2 %** | 472.19 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 386.00 € | **249.00 €** | 92.6 % | **24.2 %** | 249.46 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 767.00 € | **655.50 €** | 39.7 % | **19.4 %** | 655.67 € | cena podľa najlacnejšieho iného predajcu |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 328.90 € | **228.90 €** | 50.9 % | **5.0 %** | 216.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer B115D | 375.50 € | **278.00 €** | 49.4 % | **10.6 %** | 278.16 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 542.50 € | **447.90 €** | 46.1 % | **20.6 %** | 448.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LE300Bi | 388.90 € | **313.50 €** | 48.3 % | **19.6 %** | 313.79 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LA300R | 526.90 € | **456.00 €** | 30.4 % | **12.8 %** | 456.03 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 416.90 € | **346.90 €** | 89.0 % | **57.3 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 418.90 € | **348.90 €** | 89.0 % | **57.4 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 418.90 € | **348.90 €** | 90.0 % | **58.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM2000 | 703.90 € | **636.90 €** | 25.6 % | **13.6 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 885.00 € | **822.00 €** | 17.9 % | **9.5 %** | 822.01 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 170.90 € | **117.00 €** | 69.6 % | **16.1 %** | 117.38 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 380.00 € | **326.90 €** | 28.1 % | **10.2 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 380.00 € | **327.50 €** | 22.0 % | **5.1 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LED videolampa GODOX ML80Bi | 288.90 € | **238.50 €** | 44.9 % | **19.6 %** | 238.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 418.90 € | **368.90 €** | 89.9 % | **67.3 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTX1 Pro S, Twin | 322.50 € | **279.00 €** | 22.5 % | **6.0 %** | 279.50 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 689.00 € | **646.00 €** | 14.1 % | **6.9 %** | 646.37 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.90 € | **175.00 €** | 36.9 % | **10.0 %** | 175.21 € | cena podľa najlacnejšieho iného predajcu |
| Sada na nabíjanie akčnej kamery SJCAM SJ30 (čierny) | 316.90 € | **275.00 €** | 44.0 % | **24.9 %** | 275.33 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 825.00 € | **784.00 €** | 15.0 % | **9.3 %** | 784.04 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 584.00 € | **543.00 €** | 28.5 % | **19.5 %** | 543.08 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-150 s rozlíšením 1080p (tmavošedý) | 238.90 € | **198.90 €** | 44.4 % | **20.2 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie 10102847 FS150B | 238.90 € | **199.50 €** | 44.1 % | **20.4 %** | 199.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava ultratenkého LED kruhového osvetlenia Neewer... | 226.90 € | **189.00 €** | 48.3 % | **23.5 %** | 189.46 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 268.90 € | **231.00 €** | 49.6 % | **28.5 %** | 231.04 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 873.00 € | **835.50 €** | 15.0 % | **10.0 %** | 835.65 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 126 | 466.00 € | **431.50 €** | 20.0 % | **11.2 %** | 431.58 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 308.90 € | **275.50 €** | 43.8 % | **28.2 %** | 275.73 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 361.50 € | **328.90 €** | 32.6 % | **20.6 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H27BE(3-pack) WiFi... | 243.50 € | **210.90 €** | 31.7 % | **14.1 %** | 211.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 443.50 € | **411.50 €** | 20.2 % | **11.5 %** | 411.67 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 228.50 € | **196.50 €** | 33.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Domo DO9308I | 245.50 € | **214.50 €** | 23.8 % | **8.2 %** | 214.90 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RFSA240M43WN | 348.90 € | **318.00 €** | 24.8 % | **13.7 %** | 318.12 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 300.50 € | **270.00 €** | 36.3 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 300.50 € | **270.00 €** | 36.3 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 216.90 € | **186.90 €** | 39.1 % | **19.8 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2-N TTL pre fotoaparáty Nikon | 168.90 € | **138.90 €** | 43.5 % | **18.1 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 166.90 € | **136.90 €** | 47.2 % | **20.7 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 178.90 € | **148.90 €** | 47.1 % | **22.5 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 148.90 € | **118.90 €** | 55.5 % | **24.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 148.90 € | **118.90 €** | 42.7 % | **13.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 176.90 € | **146.90 €** | 51.3 % | **25.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD200SW | 427.90 € | **398.00 €** | 15.0 % | **7.0 %** | 398.18 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 306.00 € | **278.90 €** | 45.9 % | **32.9 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 240W, 33600lm, 120°, Philips, MW, ... | 128.50 € | **102.00 €** | 44.8 % | **15.0 %** | 102.03 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 488.00 € | **464.00 €** | 15.0 % | **9.4 %** | 464.20 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny osciloskop FNIRSI DPOS350P 4 v 1 | 277.50 € | **253.90 €** | 14.9 % | **5.2 %** | 250.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung Mini LED UE55M70H | 507.50 € | **484.50 €** | 10.0 % | **5.0 %** | 373.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 151.00 € | **128.00 €** | 40.4 % | **19.0 %** | 128.50 € | cena podľa najlacnejšieho iného predajcu |
| Candy CIFC6647CCBB | 198.90 € | **176.50 €** | 18.6 % | **5.2 %** | 167.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung QE32LS03CB | 483.50 € | **461.50 €** | 10.1 % | **5.0 %** | 378.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 325.50 € | **304.00 €** | 19.5 % | **11.6 %** | 304.34 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 56.50 € | **35.90 €** | 81.5 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Zelmer ZMM3512B | 101.50 € | **81.00 €** | 36.5 % | **8.9 %** | 81.38 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 349.00 € | **328.90 €** | 37.7 % | **29.8 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 176.90 € | **156.90 €** | 47.2 % | **30.5 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 126.90 € | **106.90 €** | 42.2 % | **19.8 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 208.90 € | **188.90 €** | 39.9 % | **26.5 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 SensiCare® EW6T106C | 339.50 € | **319.50 €** | 13.6 % | **6.9 %** | 319.65 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING KS Pro RS095 | 341.50 € | **321.90 €** | 11.5 % | **5.1 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Infračervený teplomer Uni-T UT303D+ | 113.50 € | **94.00 €** | 38.7 % | **14.9 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet Flip AI 4K | 146.00 € | **126.90 €** | 21.5 % | **5.6 %** | 126.99 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na riadidlá PXN-A10 | 94.00 € | **75.00 €** | 37.9 % | **10.0 %** | 75.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 391.90 € | **373.00 €** | 14.4 % | **8.8 %** | 373.30 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 912.90 € | **894.00 €** | 18.9 % | **16.5 %** | 894.38 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF85SGMXC | 178.50 € | **159.90 €** | 17.4 % | **5.1 %** | 151.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 47.00 € | **28.50 €** | 136.2 % | **43.2 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon P1 | 614.90 € | **596.50 €** | 10.9 % | **7.6 %** | 596.53 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD300ProII pre upevnenie Godox | 496.00 € | **478.00 €** | 13.6 % | **9.5 %** | 478.12 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 298.00 € | **281.00 €** | 13.3 % | **6.9 %** | 281.31 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1919 (čierny) | 118.90 € | **102.00 €** | 41.5 % | **21.4 %** | 102.21 € | cena podľa najlacnejšieho iného predajcu |
| Filter nádoby na dym LaserPecker Air Purifier | 94.50 € | **78.00 €** | 27.2 % | **5.0 %** | 61.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aligator Blackview 60 Pro LTE Blue | 184.50 € | **168.00 €** | 19.5 % | **8.8 %** | 168.08 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXJB1000E | 62.90 € | **46.50 €** | 54.9 % | **14.5 %** | 46.70 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 94.00 € | **77.90 €** | 42.2 % | **17.8 %** | 77.94 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXHB1501E Tyčový mixér | 37.90 € | **22.50 €** | 92.6 % | **14.3 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 257.50 € | **242.50 €** | 27.2 % | **19.8 %** | 242.71 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 257.50 € | **242.50 €** | 18.2 % | **11.4 %** | 242.71 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 63.50 € | **48.50 €** | 43.6 % | **9.7 %** | 48.78 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 463.50 € | **448.90 €** | 9.4 % | **6.0 %** | 449.00 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie GoPro Hero 13/12/11/10/9/8/MAX | 38.50 € | **24.00 €** | 115.4 % | **34.3 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 962.00 € | **948.00 €** | 15.9 % | **14.2 %** | 948.46 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 117B | 293.90 € | **280.50 €** | 10.0 % | **5.0 %** | 280.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje GS543D15X | 296.50 € | **283.50 €** | 11.8 % | **6.9 %** | 283.90 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 232.00 € | **219.00 €** | 21.2 % | **14.4 %** | 219.43 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 154.90 € | **142.00 €** | 21.6 % | **11.4 %** | 142.37 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 106.90 € | **94.00 €** | 43.9 % | **26.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 106.90 € | **94.00 €** | 54.5 % | **35.9 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 349.90 € | **337.00 €** | 9.7 % | **5.6 %** | 337.19 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam S800 | 107.50 € | **95.00 €** | 21.5 % | **7.3 %** | 95.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 59.50 € | **47.00 €** | 47.0 % | **16.1 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 94.00 € | **82.00 €** | 39.4 % | **21.6 %** | 82.17 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (biele) | 106.90 € | **95.00 €** | 40.2 % | **24.6 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (čierne) | 106.90 € | **95.00 €** | 40.2 % | **24.6 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (oranžové) | 106.90 € | **95.00 €** | 40.2 % | **24.6 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Filter 1-5 stop Freewell Sherpa True Color VND pre i... | 79.90 € | **68.00 €** | 33.5 % | **13.6 %** | 68.29 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 90.00 € | **78.50 €** | 40.6 % | **22.7 %** | 78.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 309.50 € | **298.00 €** | 21.9 % | **17.4 %** | 298.20 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 277.00 € | **265.50 €** | 11.5 % | **6.9 %** | 265.80 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 182.00 € | **170.90 €** | 24.7 % | **17.1 %** | 170.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 64.00 € | **53.00 €** | 44.1 % | **19.3 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 81.50 € | **70.50 €** | 25.0 % | **8.1 %** | 70.75 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 77.90 € | **67.00 €** | 38.5 % | **19.1 %** | 67.21 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259C (HP W2071A Cyan) | 43.90 € | **33.00 €** | 52.2 % | **14.4 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259Y (HP W2072A Yellow) | 43.90 € | **33.00 €** | 52.2 % | **14.4 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259M (HP W2073A Magenta) | 43.90 € | **33.00 €** | 52.2 % | **14.4 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz 45 cm (biely) | 79.50 € | **68.90 €** | 34.4 % | **16.5 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC čierne | 139.00 € | **128.50 €** | 34.1 % | **23.9 %** | 128.54 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W03,16" | 90.00 € | **79.50 €** | 19.4 % | **5.5 %** | 79.77 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo SC750W Turbo | 98.50 € | **88.00 €** | 24.7 % | **11.4 %** | 88.50 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 96.90 € | **86.50 €** | 27.9 % | **14.2 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 47.00 € | **36.90 €** | 34.7 % | **5.7 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech 4500mAh 6S1P 22.2V 60C HardCase RC c... | 94.00 € | **84.00 €** | 46.8 % | **31.2 %** | 84.04 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 126.90 € | **116.90 €** | 39.1 % | **28.1 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS1 Pro – štartér do auta | 84.00 € | **74.00 €** | 40.5 % | **23.8 %** | 74.21 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT302D+ | 79.50 € | **69.50 €** | 51.0 % | **32.0 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 79.50 € | **69.50 €** | 40.3 % | **22.7 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir G7 Pro DD2 | 89.50 € | **79.50 €** | 30.1 % | **15.6 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 79.00 € | **69.00 €** | 35.8 % | **18.6 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 94.00 € | **84.00 €** | 31.6 % | **17.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 68.90 € | **59.00 €** | 36.1 % | **16.6 %** | 59.17 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B70... | 116.50 € | **106.90 €** | 55.6 % | **42.7 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 429.50 € | **420.00 €** | 12.4 % | **9.9 %** | 420.21 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 357.50 € | **348.00 €** | 23.2 % | **20.0 %** | 348.33 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 295.50 € | **286.50 €** | 62.6 % | **57.6 %** | 286.66 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V050 Moro, 12 000 mAh | 89.50 € | **80.50 €** | 36.9 % | **23.1 %** | 80.79 € | cena podľa najlacnejšieho iného predajcu |
| Batéria NAC B-80-LI-20V 8Ah | 68.50 € | **59.50 €** | 32.2 % | **14.8 %** | 59.83 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 179.00 € | **170.00 €** | 17.3 % | **11.4 %** | 170.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov PGYTECH ND-PL pre DJI Mavic Pro (P-43A-... | 35.00 € | **26.00 €** | 61.1 % | **19.7 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 287.50 € | **278.90 €** | 16.5 % | **13.1 %** | 278.97 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 113.50 € | **105.00 €** | 13.8 % | **5.3 %** | 105.14 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 98.00 € | **89.50 €** | 42.9 % | **30.5 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 23-60" Perlesmith PSTVMC06 | 59.50 € | **51.00 €** | 42.0 % | **21.7 %** | 51.42 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 75.90 € | **67.50 €** | 18.4 % | **5.3 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 57.90 € | **49.50 €** | 73.9 % | **48.7 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 155.00 € | **146.90 €** | 51.7 % | **43.8 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Drôtové slúchadlá do uší TRUTHEAR Zero (modré) | 69.50 € | **61.50 €** | 50.1 % | **32.8 %** | 61.55 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 262.00 € | **254.00 €** | 23.3 % | **19.6 %** | 254.19 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 67.00 € | **59.00 €** | 35.9 % | **19.7 %** | 59.40 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 290.00 € | **282.00 €** | 9.9 % | **6.8 %** | 282.44 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX FH50R | 238.90 € | **231.00 €** | 27.4 % | **23.1 %** | 231.38 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R60 eXtremo Black Orange | 91.50 € | **83.90 €** | 14.6 % | **5.1 %** | 82.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MEROSS EM06P-EU Inteligentný monitor spotreby energi... | 80.50 € | **72.90 €** | 27.4 % | **15.4 %** | 72.98 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 90.00 € | **82.50 €** | 14.8 % | **5.2 %** | 78.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Motorcycle Intercom EJEAS MS20 | 147.00 € | **139.50 €** | 12.6 % | **6.8 %** | 139.51 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 115.00 € | **107.50 €** | 13.9 % | **6.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 7 (čierny) | 44.00 € | **36.50 €** | 48.1 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 79.00 € | **71.50 €** | 35.8 % | **22.9 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny statív PGYTECH MANTISPOD Z | 47.00 € | **39.50 €** | 26.4 % | **6.2 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BDIN38542P | 410.00 € | **402.90 €** | 6.9 % | **5.1 %** | 401.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vibračný tester Uni-T UT311A | 256.00 € | **248.90 €** | 19.6 % | **16.3 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje RK14C2W4 | 255.00 € | **248.00 €** | 10.0 % | **6.9 %** | 248.14 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 235.00 € | **228.00 €** | 18.9 % | **15.3 %** | 228.21 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 282.50 € | **275.50 €** | 13.9 % | **11.1 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 52.00 € | **45.50 €** | 20.8 % | **5.7 %** | 42.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje W1G2P84A32 | 252.00 € | **245.50 €** | 9.8 % | **7.0 %** | 245.56 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 323.50 € | **317.00 €** | 10.6 % | **8.4 %** | 317.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 293.00 € | **286.50 €** | 12.1 % | **9.6 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 293.00 € | **286.50 €** | 7.7 % | **5.3 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **40.50 €** | 35.9 % | **17.1 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 86.00 € | **79.50 €** | 26.8 % | **17.2 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24440-56 | 112.90 € | **106.50 €** | 11.6 % | **5.2 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 75.90 € | **69.50 €** | 18.4 % | **8.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LKR64022AX | 491.90 € | **485.50 €** | 6.4 % | **5.0 %** | 448.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring RingConn Air Gen 2 (veľkosť 10, strieborná... | 195.00 € | **188.90 €** | 25.9 % | **22.0 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 10, zlatá) | 195.00 € | **188.90 €** | 25.9 % | **22.0 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 33.50 € | **27.50 €** | 46.1 % | **19.9 %** | 27.53 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG2PS72A12 | 220.50 € | **214.50 €** | 10.0 % | **7.0 %** | 214.54 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavňovač Tefal ZC605D38 | 207.90 € | **201.90 €** | 10.1 % | **6.9 %** | 201.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 43.50 € | **37.50 €** | 44.0 % | **24.1 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO30211IP | 125.00 € | **119.00 €** | 22.6 % | **16.8 %** | 119.19 € | cena podľa najlacnejšieho iného predajcu |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 30.50 € | **24.50 €** | 44.4 % | **16.0 %** | 24.83 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LC500R MiNi štúdiové osvetlenie | 145.00 € | **139.00 €** | 19.3 % | **14.4 %** | 139.36 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 33.50 € | **27.50 €** | 34.6 % | **10.5 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C980Pro 4K | 62.00 € | **56.00 €** | 21.8 % | **10.0 %** | 56.44 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 3L automatický dávkovač krmiva v tlačidlovej ... | 40.00 € | **34.00 €** | 37.7 % | **17.0 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 117.90 € | **112.00 €** | 11.4 % | **5.8 %** | 112.21 € | cena podľa najlacnejšieho iného predajcu |
| Držiak batérie SJCAM pre model C300 | 44.50 € | **38.90 €** | 41.8 % | **23.9 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 199.50 € | **193.90 €** | 10.1 % | **7.0 %** | 193.91 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 32.00 € | **26.50 €** | 42.2 % | **17.8 %** | 26.52 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, zlatá) | 275.50 € | **270.00 €** | 24.9 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 134.50 € | **129.00 €** | 14.1 % | **9.4 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-604B | 39.50 € | **34.00 €** | 41.0 % | **21.3 %** | 34.25 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 43.50 € | **38.00 €** | 31.6 % | **15.0 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN CPF-1500 9 W UV tlakový filter pre jazierka | 79.50 € | **74.00 €** | 39.4 % | **29.7 %** | 74.36 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 40.00 € | **34.50 €** | 26.8 % | **9.4 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 104.00 € | **98.50 €** | 20.6 % | **14.2 %** | 98.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (béžové) | 104.00 € | **98.50 €** | 28.1 % | **21.3 %** | 98.90 € | cena podľa najlacnejšieho iného predajcu |
| Neweer TL97C RGB LED farebné foto svetlo | 38.50 € | **33.00 €** | 43.8 % | **23.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 249.50 € | **244.00 €** | 23.9 % | **21.2 %** | 244.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.90 € | **34.50 €** | 28.1 % | **10.7 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 33.00 € | **27.90 €** | 70.0 % | **43.7 %** | 27.92 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 33.00 € | **27.90 €** | 131.1 % | **95.4 %** | 27.92 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 33.00 € | **27.90 €** | 43.5 % | **21.3 %** | 27.92 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro Xiaomi R Pad 2 FIXTOT-1199 | 19.50 € | **14.50 €** | 49.6 % | **11.2 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 342.00 € | **337.00 €** | 10.5 % | **8.8 %** | 337.20 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 54.00 € | **49.00 €** | 36.5 % | **23.9 %** | 49.21 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TBE400U BE6500, WiFi 7,  2... | 71.50 € | **66.50 €** | 14.2 % | **6.2 %** | 66.78 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Telesin CPL/ND8/ND16/ND32 pre Insta3... | 38.50 € | **33.50 €** | 38.1 % | **20.1 %** | 33.83 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny ramenný popruh Neewer | 74.00 € | **69.00 €** | 35.8 % | **26.6 %** | 69.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.50 € | **18.50 €** | 33.8 % | **5.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus DC1 mini orbitrek | 163.90 € | **159.00 €** | 22.1 % | **18.5 %** | 159.05 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 231.50 € | **226.90 €** | 8.9 % | **6.7 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH1833E0 | 150.00 € | **145.50 €** | 11.7 % | **8.3 %** | 145.56 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 19.00 € | **14.50 €** | 80.7 % | **37.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Mobilný ovládač GameSir G8+ MFi (sivý) | 78.50 € | **74.00 €** | 44.0 % | **35.7 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 49.90 € | **45.50 €** | 21.4 % | **10.7 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 338.00 € | **333.90 €** | 23.8 % | **22.3 %** | 333.94 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky C50i (biele) | 35.00 € | **30.90 €** | 41.2 % | **24.7 %** | 30.92 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50i (sivé) | 35.00 € | **30.90 €** | 41.2 % | **24.7 %** | 30.92 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 194.00 € | **189.90 €** | 25.2 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, zlatá) | 194.00 € | **189.90 €** | 25.2 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 266.00 € | **262.00 €** | 9.0 % | **7.3 %** | 262.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.50 € | **93.50 €** | 19.7 % | **14.8 %** | 93.66 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 49.50 € | **45.50 €** | 25.4 % | **15.3 %** | 45.67 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 294.50 € | **290.50 €** | 12.5 % | **11.0 %** | 290.69 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 288.00 € | **284.00 €** | 8.6 % | **7.1 %** | 284.20 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 371.00 € | **367.00 €** | 10.5 % | **9.4 %** | 367.20 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 187.50 € | **183.50 €** | 13.9 % | **11.4 %** | 183.70 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 187.50 € | **183.50 €** | 13.9 % | **11.4 %** | 183.70 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 131.50 € | **127.50 €** | 16.3 % | **12.8 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Neweer SP-02 rýchloupínací adaptér pre telefón Arca | 26.50 € | **22.50 €** | 48.1 % | **25.7 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| Indesit TI5512EMTCS | 280.00 € | **276.00 €** | 8.4 % | **6.9 %** | 276.31 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 25.50 € | **21.50 €** | 30.6 % | **10.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 34.50 € | **30.50 €** | 44.2 % | **27.5 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 24.50 € | **20.50 €** | 39.9 % | **17.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Ohrievač fliaš Grownsy (sivý) | 27.00 € | **23.00 €** | 37.7 % | **17.3 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada na selfie Neewer SRP18C s priemerom 17 cm a okr... | 176.90 € | **173.00 €** | 49.0 % | **45.8 %** | 173.22 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné fotochromatické slnečné okuliare BlitzW... | 59.90 € | **56.00 €** | 19.6 % | **11.8 %** | 56.07 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96CX (HP 305XL Colour) | 21.90 € | **18.00 €** | 39.2 % | **14.4 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 52.90 € | **49.00 €** | 24.0 % | **14.9 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 52.90 € | **49.00 €** | 24.0 % | **14.9 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 260.50 € | **256.90 €** | 24.0 % | **22.3 %** | 257.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 9.50 € | **5.90 €** | 100.1 % | **24.3 %** | 5.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 142.50 € | **138.90 €** | 21.3 % | **18.2 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.00 € | **90.50 €** | 19.4 % | **15.0 %** | 90.52 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 149.50 € | **146.00 €** | 11.2 % | **8.6 %** | 146.04 € | cena podľa najlacnejšieho iného predajcu |
| Statív s 3D 360° hlavou + držiak na telefón Puluz PU... | 28.50 € | **25.00 €** | 42.8 % | **25.2 %** | 25.06 € | cena podľa najlacnejšieho iného predajcu |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 13.00 € | **9.50 €** | 51.4 % | **10.7 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Hurricane H5 Plus | 77.00 € | **73.50 €** | 10.9 % | **5.9 %** | 73.57 € | cena podľa najlacnejšieho iného predajcu |
| Mlynček na kávu AMZCHEF CE-CG209-SV (strieborný) | 99.00 € | **95.50 €** | 21.8 % | **17.5 %** | 95.73 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 100W, 14000lm, 120°, Meanwell,  50... | 79.50 € | **76.00 €** | 19.9 % | **14.6 %** | 76.27 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXSH1500E | 32.50 € | **29.00 €** | 19.3 % | **6.5 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.00 € | **81.50 €** | 19.5 % | **14.5 %** | 81.82 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro na iPhone Puluz (40 m) s jednosmern... | 55.50 € | **52.00 €** | 15.5 % | **8.2 %** | 52.33 € | cena podľa najlacnejšieho iného predajcu |
| Kryt na toaletu pre mačky Petkit Hood | 36.00 € | **32.50 €** | 34.4 % | **21.3 %** | 32.83 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (biela) | 24.00 € | **20.50 €** | 47.9 % | **26.4 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (čierna) | 24.00 € | **20.50 €** | 37.0 % | **17.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 43.50 € | **40.00 €** | 37.4 % | **26.4 %** | 40.43 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Silentwatch 8 Pro Black - 9166 | 158.90 € | **155.50 €** | 14.3 % | **11.8 %** | 155.74 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Silentwatch 8 Pro Titan - 9168 | 158.90 € | **155.50 €** | 14.3 % | **11.8 %** | 155.74 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 26.00 € | **22.90 €** | 20.1 % | **5.8 %** | 22.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PGYTECH Caplock MantisPod Power Tripod pre Gopro Hero | 60.00 € | **56.90 €** | 24.2 % | **17.8 %** | 56.96 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Note 17 6/256GB Purple | 270.50 € | **267.50 €** | 6.4 % | **5.2 %** | 242.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy CI32CBB | 127.00 € | **124.00 €** | 19.8 % | **16.9 %** | 124.02 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 121.90 € | **118.90 €** | 15.6 % | **12.8 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 212.90 € | **209.90 €** | 38364.3 % | **37822.3 %** | 210.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 647.90 € | **644.90 €** | 116955.1 % | **116413.1 %** | 645.00 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LR15Bi Okrúhle svetlo | 19.50 € | **16.50 €** | 45.6 % | **23.2 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľné činky MERACH MR-2444, sada 2 ks | 49.50 € | **46.50 €** | 36.1 % | **27.8 %** | 46.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 19.00 € | **16.00 €** | 44.4 % | **21.6 %** | 16.27 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (červený) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (čierny) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (oranžový) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (ružový) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.50 € | **263.50 €** | 7.5 % | **6.3 %** | 263.83 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajší LED snehuliak Solight 1V241, 70 cm, teplá b... | 14.00 € | **11.00 €** | 41.6 % | **11.2 %** | 11.37 € | cena podľa najlacnejšieho iného predajcu |
| Magnetická rukoväť MagSafe Fun Shot Grip2 (biela) | 25.00 € | **22.00 €** | 35.8 % | **19.5 %** | 22.38 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 82.00 € | **79.00 €** | 32.2 % | **27.4 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **18.50 €** | 22.5 % | **5.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Váleček MOVA pre stanicu G70 | 16.50 € | **13.50 €** | 40.3 % | **14.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 37.50 € | **34.50 €** | 61.1 % | **48.2 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 28.00 € | **25.00 €** | 19.4 % | **6.6 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná žiarovka Yeelight W1 GU10 (Biela) | 20.00 € | **17.00 €** | 42.9 % | **21.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier QR30 (čierne) | 100.90 € | **98.00 €** | 15.1 % | **11.8 %** | 98.12 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 32.90 € | **30.00 €** | 26.9 % | **15.7 %** | 30.13 € | cena podľa najlacnejšieho iného predajcu |
| Termostat MOES ZHT-SR-GA s technológiou ZigBee pre v... | 55.90 € | **53.00 €** | 21.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TP-LINK Archer VR300 VDSL Router | 53.50 € | **50.90 €** | 11.0 % | **5.6 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.50 € | **22.90 €** | 17.9 % | **5.9 %** | 22.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Merač LCR Uni-T UT612 | 128.50 € | **125.90 €** | 7.2 % | **5.1 %** | 113.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 81.50 € | **78.90 €** | 14.9 % | **11.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro Telesin pre DJI Osmo Action 6 | 26.50 € | **24.00 €** | 34.1 % | **21.4 %** | 24.04 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife FP-B978 prepravné puzdro pre DJI Flip | 20.00 € | **17.50 €** | 37.8 % | **20.6 %** | 17.63 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW5558E0 | 168.50 € | **166.00 €** | 8.5 % | **6.9 %** | 166.16 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 139.00 € | **136.50 €** | 46.0 % | **43.4 %** | 136.70 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CS-85D Softbox | 74.50 € | **72.00 €** | 23.1 % | **19.0 %** | 72.26 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 S Pro (čierny) | 60.50 € | **58.00 €** | 14.9 % | **10.2 %** | 58.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.50 € | **18.00 €** | 43.8 % | **26.3 %** | 18.34 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 77.00 € | **74.50 €** | 12.8 % | **9.1 %** | 74.88 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 317.00 € | **314.50 €** | 18.0 % | **17.1 %** | 314.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 686.50 € | **684.00 €** | 12.0 % | **11.6 %** | 684.39 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 27.00 € | **24.50 €** | 32.0 % | **19.8 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.00 € | **24.50 €** | 43.4 % | **30.1 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Candywatch 5 GPS Rose Gold - 9152 | 87.50 € | **85.00 €** | 14.7 % | **11.4 %** | 85.46 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Candywatch 5 GPS Silver - 9153 | 87.50 € | **85.00 €** | 14.7 % | **11.4 %** | 85.46 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 26.50 € | **24.00 €** | 30.9 % | **18.5 %** | 24.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **14.00 €** | 38.0 % | **17.1 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi spínač na žalúzie Meross MRS100MA(... | 23.90 € | **21.50 €** | 26.3 % | **13.7 %** | 21.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový zvonček a nočné svetielko, do zás... | 6.80 € | **4.60 €** | 68.6 % | **14.0 %** | 4.64 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV2839E0 | 33.00 € | **30.90 €** | 13.6 % | **6.4 %** | 28.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dynamický mikrofon Maono PD200x (biely) | 50.00 € | **47.90 €** | 16.8 % | **11.9 %** | 47.98 € | cena podľa najlacnejšieho iného predajcu |
| Dielenská baterka Superfire G21, 650lm, USB | 14.00 € | **11.90 €** | 36.3 % | **15.9 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi RF 433 MHz Avat... | 17.00 € | **14.90 €** | 44.0 % | **26.2 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica ELEGOO Mercury XS | 130.00 € | **127.90 €** | 18.0 % | **16.1 %** | 127.92 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 23.90 € | **21.90 €** | 15.5 % | **5.9 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 109.50 € | **107.50 €** | 7.9 % | **6.0 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 11.00 € | **9.00 €** | 50.1 % | **22.8 %** | 9.04 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 19.50 € | **17.50 €** | 43.0 % | **28.3 %** | 17.54 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Sunnylife 2 v 1 pre DJI RC Plus 2 | 16.50 € | **14.50 €** | 33.3 % | **17.2 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf CL5, 1000 lm | 23.50 € | **21.50 €** | 36.7 % | **25.0 %** | 21.54 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 402.90 € | **400.90 €** | 6.8 % | **6.3 %** | 401.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, modré ASG002 | 74.90 € | **72.90 €** | 14.9 % | **11.8 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| Kábel USB-A do Lightning MFI 0,35 m PGYTECH (P-GM-115) | 15.50 € | **13.50 €** | 38.5 % | **20.6 %** | 13.63 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100WFB | 54.00 € | **52.00 €** | 14.9 % | **10.6 %** | 52.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 15.00 € | **13.00 €** | 43.0 % | **23.9 %** | 13.17 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 375.00 € | **373.00 €** | 20.0 % | **19.3 %** | 373.17 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie GODOX FL15Bi | 100.00 € | **98.00 €** | 19.8 % | **17.4 %** | 98.17 € | cena podľa najlacnejšieho iného predajcu |
| Filtr CPL 58mm Telesin do iPhone 15 Pro/Pro Max | 16.50 € | **14.50 €** | 36.2 % | **19.7 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 42.50 € | **40.50 €** | 14.1 % | **8.8 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.50 € | **15.50 €** | 28.5 % | **13.8 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.00 € | **20.00 €** | 35.3 % | **23.0 %** | 20.38 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 48.50 € | **46.50 €** | 23.1 % | **18.0 %** | 46.88 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 17.50 € | **15.50 €** | 45.9 % | **29.2 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 21.50 € | **19.50 €** | 23.9 % | **12.4 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 17.50 € | **15.50 €** | 30.4 % | **15.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1004500 | 50.50 € | **48.50 €** | 10.0 % | **5.7 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 13.50 € | **11.50 €** | 46.3 % | **24.7 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Kombinovaná taška Sunnylife pre DJI Mini 4 Pro (N4P-... | 26.50 € | **24.50 €** | 39.5 % | **29.0 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom PN-14L2 Puzdro Dancing Circle pre iPhone 14 ... | 12.50 € | **10.50 €** | 38.8 % | **16.6 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing SR-P Lite RS19 for R3/R5 | 42.50 € | **40.50 €** | 15.8 % | **10.3 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MVC72HGA | 31.00 € | **29.00 €** | 15.7 % | **8.2 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 96.00 € | **94.00 €** | 12.2 % | **9.8 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell kruhový polarizačný filter CPL pre OSMO NANO | 19.90 € | **18.00 €** | 21.5 % | **9.9 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 46.90 € | **45.00 €** | 14.3 % | **9.7 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.70 € | **3.00 €** | 80.2 % | **15.0 %** | 3.08 € | cena podľa najlacnejšieho iného predajcu |
| EcoFlow DELTA 3 Plus nabíjecí stanice 1ECO1340PLUS | 880.50 € | **878.90 €** | 5.2 % | **5.0 %** | 823.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.50 € | **22.90 €** | 30.4 % | **21.9 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 31.50 € | **29.90 €** | 16.9 % | **10.9 %** | 29.96 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona na smartfón od Sunnylife pre ovládač D... | 27.50 € | **25.90 €** | 15.4 % | **8.7 %** | 25.97 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND-PL 4/8/16/32 Sunnylife pre DJI Min... | 27.50 € | **25.90 €** | 37.2 % | **29.2 %** | 25.97 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto MercedesBenz Actros + AM | 45.50 € | **43.90 €** | 13.5 % | **9.5 %** | 43.98 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo bílé | 81.50 € | **79.90 €** | 7.6 % | **5.5 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight elektrický sušiak uterákov 130W | 98.50 € | **96.90 €** | 51.0 % | **48.6 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 150.50 € | **148.90 €** | 15.2 % | **13.9 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.50 € | **178.90 €** | 23.2 % | **22.1 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.50 € | **232.00 €** | 24.1 % | **23.4 %** | 232.04 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický ventilátor GOOLOO F3 (biely) | 35.50 € | **34.00 €** | 27.8 % | **22.4 %** | 34.04 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 14.50 € | **13.00 €** | 36.6 % | **22.5 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 14.50 € | **13.00 €** | 36.6 % | **22.5 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 50.50 € | **49.00 €** | 14.6 % | **11.2 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf L1 350 lm | 17.50 € | **16.00 €** | 37.2 % | **25.4 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 16.00 € | **14.50 €** | 50.2 % | **36.1 %** | 14.72 € | cena podľa najlacnejšieho iného predajcu |
| Úložná taška Telesin EVA pre DJI Action 3/4/5 (veľko... | 14.00 € | **12.50 €** | 32.2 % | **18.0 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 10 | 287.00 € | **285.50 €** | 14.9 % | **14.3 %** | 285.81 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 11 | 287.00 € | **285.50 €** | 14.9 % | **14.3 %** | 285.81 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 7 | 287.00 € | **285.50 €** | 14.9 % | **14.3 %** | 285.81 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 343.00 € | **341.50 €** | 25.3 % | **24.8 %** | 341.89 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 64.00 € | **62.50 €** | 95.6 % | **91.0 %** | 62.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 49.50 € | **48.00 €** | 13.0 % | **9.6 %** | 48.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 238.50 € | **237.00 €** | 11.7 % | **11.0 %** | 237.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.00 € | **469.50 €** | 8.8 % | **8.5 %** | 469.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 925.00 € | **923.50 €** | 17.6 % | **17.4 %** | 923.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 160.00 € | **158.50 €** | 8.1 % | **7.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 187.50 € | **186.00 €** | 11.4 % | **10.5 %** | 186.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 114.50 € | **113.00 €** | 6.8 % | **5.4 %** | 113.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 52.00 € | **50.50 €** | 8.4 % | **5.2 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 278.50 € | **277.00 €** | 37.7 % | **37.0 %** | 277.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 26.50 € | **25.00 €** | 17.7 % | **11.0 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 275.50 € | **274.00 €** | 8.5 % | **7.9 %** | 274.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 150.00 € | **148.50 €** | 6.1 % | **5.0 %** | 148.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.50 € | **18.00 €** | 29.6 % | **19.7 %** | 18.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 186.00 € | **184.50 €** | 6.4 % | **5.6 %** | 184.89 € | cena podľa najlacnejšieho iného predajcu |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 68.00 € | **66.50 €** | 12.0 % | **9.5 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 68.00 € | **66.50 €** | 8.9 % | **6.5 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 608.50 € | **607.00 €** | 5.9 % | **5.6 %** | 607.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 638.50 € | **637.00 €** | 7.8 % | **7.6 %** | 637.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.00 € | **160.50 €** | 20.8 % | **19.7 %** | 160.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.00 € | **150.50 €** | 18.9 % | **17.8 %** | 150.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.00 € | **125.50 €** | 16.5 % | **15.2 %** | 125.89 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjateľná stolová lampa Yeelight 4 v 1 | 18.00 € | **16.50 €** | 19.9 % | **9.9 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer XENYX 802S 8-kanálový analógový mixpult s ... | 76.50 € | **75.00 €** | 11.4 % | **9.2 %** | 75.40 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Sunlu PLA+ (čierny) | 18.00 € | **16.50 €** | 59.9 % | **46.6 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 11.50 € | **10.00 €** | 36.1 % | **18.3 %** | 10.43 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 17.50 € | **16.00 €** | 16.7 % | **6.7 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB BLOW 76-033 GaN 45W USB-A + USB-C + 1m... | 11.50 € | **10.00 €** | 23.0 % | **7.0 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 22.50 € | **21.00 €** | 22.1 % | **14.0 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Matter over WiFi nástenný spínač SONOFF... | 18.50 € | **17.00 €** | 25.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight USB-C + USB-A fast charger GaN 20 W PD | 9.00 € | **7.70 €** | 69.8 % | **45.2 %** | 7.74 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **3.00 €** | 54.0 % | **7.4 %** | 3.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 7.10 € | **5.80 €** | 122.0 % | **81.4 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| BenQ brašna k projektorům MX711/710/660/ | 36.00 € | **34.90 €** | 14.3 % | **10.8 %** | 34.94 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Ultra-thin Motion Sensor Closet Light A50 | 24.00 € | **22.90 €** | 48.8 % | **42.0 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NB907MAW | 63.00 € | **61.90 €** | 12.1 % | **10.1 %** | 62.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO Rapid PLA+ (čierny) | 13.00 € | **11.90 €** | 21.2 % | **10.9 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| ECOLUX LED žiarovka 3-pack, klasický tvar, 12W, E27,... | 5.60 € | **4.50 €** | 134.7 % | **88.6 %** | 4.59 € | cena podľa najlacnejšieho iného predajcu |
| Kefa MOVA na rôzne povrchy pre detektor S2 | 10.90 € | **9.80 €** | 17.1 % | **5.3 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.00 € | **130.90 €** | 15.6 % | **14.6 %** | 130.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 5.60 € | **4.60 €** | 39.7 % | **14.7 %** | 4.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart vonkajšia reťaz s RGB žiarovkami, ... | 23.50 € | **22.50 €** | 19.9 % | **14.8 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3002G | 76.00 € | **75.00 €** | 12.6 % | **11.1 %** | 75.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight nabíjačka USB-C, 65W, PD fast charger | 12.90 € | **11.90 €** | 24.3 % | **14.6 %** | 11.94 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCJ30E | 18.50 € | **17.50 €** | 14.1 % | **7.9 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 19.50 € | **18.50 €** | 15.1 % | **9.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 38.00 € | **37.00 €** | 10.5 % | **7.6 %** | 37.09 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 35.90 € | **34.90 €** | 39.0 % | **35.1 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Behringer MU1000 music stand | 28.00 € | **27.00 €** | 11.0 % | **7.1 %** | 27.10 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 14.00 € | **13.00 €** | 13.3 % | **5.2 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 14.00 € | **13.00 €** | 17.1 % | **8.7 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| PBT Keycap + Cable Set - Black - US/UK | 69.00 € | **68.00 €** | 14.8 % | **13.1 %** | 68.17 € | cena podľa najlacnejšieho iného predajcu |
| Softbox Neewer 85 cm | 88.00 € | **87.00 €** | 25.4 % | **24.0 %** | 87.17 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.00 € | **116.00 €** | 23100.5 % | **22902.2 %** | 116.19 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor Pad 8 FIXTOT-1145 | 15.00 € | **14.00 €** | 18.5 % | **10.6 %** | 14.24 € | cena podľa najlacnejšieho iného predajcu |
| Sati Guatemala Bio Fairtrade 500 g zrno | 12.50 € | **11.50 €** | 16.1 % | **6.8 %** | 11.75 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ30 (čierny) | 214.00 € | **213.00 €** | 10.4 % | **9.9 %** | 213.27 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 19.50 € | **18.50 €** | 16.6 % | **10.6 %** | 18.78 € | cena podľa najlacnejšieho iného predajcu |
| Bluetooth reproduktor Blitzwolf BW-WA4 30W 4000mAh | 46.50 € | **45.50 €** | 18.7 % | **16.1 %** | 45.78 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-1 mini 12V DC bílý | 96.00 € | **95.00 €** | 15.2 % | **14.0 %** | 95.29 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-9 mini 12V DC černý | 96.00 € | **95.00 €** | 15.2 % | **14.0 %** | 95.29 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 21.00 € | **20.00 €** | 16.9 % | **11.3 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 44.00 € | **43.00 €** | 15.8 % | **13.2 %** | 43.29 € | cena podľa najlacnejšieho iného predajcu |
| Štartér UTRAI s vzduchovým kompresorom JS5 | 107.50 € | **106.50 €** | 24.6 % | **23.5 %** | 106.83 € | cena podľa najlacnejšieho iného predajcu |
| Filter CPL Freewell Osmo Pocket 4P | 20.00 € | **19.00 €** | 14.5 % | **8.8 %** | 19.33 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPho 16P FIXMMY-1402-BK | 14.50 € | **13.50 €** | 18.0 % | **9.9 %** | 13.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight tryska proti krúteniu pre fén Dyson Superson... | 12.50 € | **11.50 €** | 31.8 % | **21.3 %** | 11.85 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 88.50 € | **87.50 €** | 15.5 % | **14.2 %** | 87.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight nabíjačka do auta USB-C, 65W, PD fast charger | 11.00 € | **10.00 €** | 21.8 % | **10.8 %** | 10.38 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT826 (čierne) | 29.50 € | **28.50 €** | 27.4 % | **23.1 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 20.50 € | **19.50 €** | 11.6 % | **6.1 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.00 € | **88.00 €** | 14.2 % | **12.9 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 240.50 € | **239.50 €** | 5.5 % | **5.0 %** | 239.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 26.50 € | **25.50 €** | 44.5 % | **39.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 20.50 € | **19.50 €** | 13.8 % | **8.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 22.50 € | **21.50 €** | 11.4 % | **6.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Sunnylife 073523 | 24.50 € | **23.50 €** | 44.3 % | **38.4 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 16.50 € | **15.50 €** | 13.6 % | **6.7 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2459S | 39.00 € | **38.00 €** | 14.0 % | **11.1 %** | 38.41 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 64.00 € | **63.00 €** | 42.3 % | **40.1 %** | 63.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníkový biely rám pre inštaláciu LED panel... | 17.00 € | **16.00 €** | 69.0 % | **59.0 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 Kit – webová kamera | 62.00 € | **61.00 €** | 21.4 % | **19.5 %** | 61.49 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 105.00 € | **104.00 €** | 11.2 % | **10.1 %** | 104.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 16.00 € | **15.00 €** | 20.3 % | **12.8 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona na smartfón od Sunnylife pre ovládač D... | 12.00 € | **11.00 €** | 35.1 % | **23.9 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 219.90 € | **219.00 €** | 14.9 % | **14.4 %** | 219.21 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 67.90 € | **67.00 €** | 8.0 % | **6.6 %** | 67.50 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 9.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight USB-C 20 W fast charger | 6.70 € | **5.80 €** | 67.1 % | **44.6 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 6.70 € | **5.80 €** | 80.4 % | **56.1 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 6.70 € | **5.80 €** | 80.4 % | **56.1 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Tréninkové háky REBEL RBA-2505 | 11.90 € | **11.00 €** | 20.8 % | **11.6 %** | 11.16 € | cena podľa najlacnejšieho iného predajcu |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **11.00 €** | 15.6 % | **6.8 %** | 11.26 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0856 GaN 45W | 15.90 € | **15.00 €** | 36.4 % | **28.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 19.90 € | **19.00 €** | 18.2 % | **12.8 %** | 19.21 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-P67 3MP Wi-Fi IP kamera | 20.90 € | **20.00 €** | 15.4 % | **10.4 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 22.90 € | **22.00 €** | 13.0 % | **8.6 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Gumová kefa ROMO | 23.90 € | **23.00 €** | 29.5 % | **24.7 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 22.90 € | **22.00 €** | 11.1 % | **6.7 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná dekorácia – zimné kvety Solight... | 4.70 € | **3.90 €** | 36.5 % | **13.2 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný stromček na stenu Solight 1V260, 24 LED... | 3.90 € | **3.10 €** | 41.6 % | **12.5 %** | 3.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 5.00 € | **4.20 €** | 80.7 % | **51.8 %** | 4.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight ratanová LED lampáš s LED žiarovkou, teplá b... | 6.60 € | **5.80 €** | 22.8 % | **7.9 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight nabíjačka USB-C, 65W, PD fast charger | 9.80 € | **9.10 €** | 22.6 % | **13.8 %** | 9.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 7,2 W, 1521lm, 27... | 6.80 € | **6.10 €** | 106.3 % | **85.1 %** | 6.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový lampáš so žiarovkou s micro LED, tepl... | 5.50 € | **4.80 €** | 21.5 % | **6.0 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 3.90 € | **3.20 €** | 84.3 % | **51.3 %** | 3.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **3.90 €** | 26.3 % | **7.1 %** | 3.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo pracovné, 120+40lm, 3W COB + 3... | 3.80 € | **3.10 €** | 49.2 % | **21.8 %** | 3.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.20 € | **8.50 €** | 37.7 % | **27.3 %** | 8.52 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 18.50 € | **17.90 €** | 9.1 % | **5.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 18.50 € | **17.90 €** | 9.1 % | **5.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MENALUX CB104B | 21.50 € | **20.90 €** | 15.6 % | **12.4 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná hviezda na stenu Solight 1V261, 24 LED,... | 3.70 € | **3.10 €** | 34.3 % | **12.5 %** | 3.17 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les s jeleňmi Solight 1V249,... | 3.40 € | **2.80 €** | 35.5 % | **11.6 %** | 2.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 6000K... | 5.30 € | **4.70 €** | 96.8 % | **74.5 %** | 4.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.40 €** | 38.1 % | **27.7 %** | 7.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 5,0 W, 1055lm, 27... | 5.80 € | **5.20 €** | 108.6 % | **87.1 %** | 5.29 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14 P4G FIXOP3-1542-BK | 12.50 € | **11.90 €** | 17.1 % | **11.5 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14P+5G FIXOP3-1433-BK | 12.50 € | **11.90 €** | 17.1 % | **11.5 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 139.50 € | **138.90 €** | 19.3 % | **18.8 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.00 € | **13.50 €** | 10.0 % | **6.0 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.50 € | **31.00 €** | 29.5 % | **27.4 %** | 31.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight bambusový lampáš s LED žiarovkou, teplá biel... | 5.80 € | **5.30 €** | 19.4 % | **9.1 %** | 5.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 33.00 € | **32.50 €** | 20.9 % | **19.0 %** | 32.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 34.00 € | **33.50 €** | 33.7 % | **31.7 %** | 33.53 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17PM FIXOP3-1603-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17P FIXOP3-1602-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo V50 L FIXOP3-1580-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300P FIXOP3-1609-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300 FIXOP3-1642-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor 400 FIXOP3-1552-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-RD | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BRW | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BL | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-RD | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BRW | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26 FIXOP3-1704-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A35 5G FIXOP3-1262-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A17 FIXOP3-1700-BL | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro POCO F7 FIXOP3-1533-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15P+ 5G FIXOP3-1647-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15 4G FIXOP3-1643-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN15Pro 5G FIXOP3-1646-BK | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 11.50 € | **11.00 €** | 17.0 % | **11.9 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 11.50 € | **11.00 €** | 17.0 % | **11.9 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 11.50 € | **11.00 €** | 17.0 % | **11.9 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Brake Pedal Performance Upgrade Kit Moza Racing SR-P... | 34.50 € | **34.00 €** | 16.8 % | **15.1 %** | 34.07 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 20.00 € | **19.50 €** | 15.5 % | **12.6 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na cvičení Rebel Active RBA-3159-2BL na jóg... | 30.00 € | **29.50 €** | 13.1 % | **11.2 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 426.00 € | **425.50 €** | 7.1 % | **7.0 %** | 425.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.00 € | **78.50 €** | 13.9 % | **13.2 %** | 78.59 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 86.50 € | **86.00 €** | 21.0 % | **20.3 %** | 86.09 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 37.00 € | **36.50 €** | 61.4 % | **59.2 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 352.00 € | **351.50 €** | 35.3 % | **35.1 %** | 351.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 29.50 € | **29.00 €** | 22.9 % | **20.8 %** | 29.11 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 39.00 € | **38.50 €** | 22.2 % | **20.6 %** | 38.63 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAQ2000WT Bezdrátová sluchátka | 37.50 € | **37.00 €** | 13.5 % | **12.0 %** | 37.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.50 € | **25.00 €** | 36.9 % | **34.2 %** | 25.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.66 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.00 € | **88.50 €** | 14.1 % | **13.5 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 83.00 € | **82.50 €** | 26.5 % | **25.8 %** | 82.69 € | cena podľa najlacnejšieho iného predajcu |
| Sada 6 filtrov Freewell Bright Day pre DJI Flip | 39.50 € | **39.00 €** | 37.4 % | **35.7 %** | 39.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 34.00 € | **33.50 €** | 8.6 % | **7.0 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110GMP 2x GLAN, 8x GLAN s ... | 52.50 € | **52.00 €** | 8.0 % | **6.9 %** | 52.20 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 54.00 € | **53.50 €** | 15.1 % | **14.0 %** | 53.71 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 14.50 € | **14.00 €** | 14.6 % | **10.6 %** | 14.24 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 95.50 € | **95.00 €** | 17.4 % | **16.8 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Magnetic Wall | 12.00 € | **11.50 €** | 15.5 % | **10.6 %** | 11.75 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2659 | 69.50 € | **69.00 €** | 12.7 % | **11.9 %** | 69.25 € | cena podľa najlacnejšieho iného predajcu |
| Krytky objektívov Puluz pre kameru Insta360 X5 | 30.50 € | **30.00 €** | 15.3 % | **13.4 %** | 30.25 € | cena podľa najlacnejšieho iného predajcu |
| Selfie svetlo Telesin s magnetickým držiakom telefónu | 18.50 € | **18.00 €** | 22.9 % | **19.6 %** | 18.25 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 745W | 29.50 € | **29.00 €** | 16.8 % | **14.8 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 30.00 € | **29.50 €** | 26.1 % | **24.0 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.00 € | **69.50 €** | 13.0 % | **12.2 %** | 69.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 81.50 € | **81.00 €** | 7.8 % | **7.1 %** | 81.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 59.00 € | **58.50 €** | 7.3 % | **6.4 %** | 58.79 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 79.50 € | **79.00 €** | 12.5 % | **11.8 %** | 79.29 € | cena podľa najlacnejšieho iného predajcu |
| Panoramatický fotografický stojan 360 Puluz DCA0871W | 15.50 € | **15.00 €** | 16.0 % | **12.3 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 64.50 € | **64.00 €** | 14.2 % | **13.4 %** | 64.29 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 75.50 € | **75.00 €** | 15.8 % | **15.0 %** | 75.29 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine MA10410 | 74.50 € | **74.00 €** | 6.0 % | **5.3 %** | 74.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 56.00 € | **55.50 €** | 12.6 % | **11.6 %** | 55.79 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 84.00 € | **83.50 €** | 13.9 % | **13.2 %** | 83.79 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX30U Plus AX 1800 adaptér... | 25.00 € | **24.50 €** | 9.0 % | **6.9 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač Evercon AH-707 | 52.00 € | **51.50 €** | 14.5 % | **13.4 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 24.50 € | **24.00 €** | 7.7 % | **5.5 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera EVO 27876 Porsche 911 GT3 R | 41.00 € | **40.50 €** | 12.3 % | **11.0 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU3941WBW | 358.50 € | **358.00 €** | 5.2 % | **5.1 %** | 358.29 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link PG1200 KIT G.hn adaptér (... | 94.00 € | **93.50 €** | 5.6 % | **5.1 %** | 93.80 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot Blast black od Silverlit | 28.00 € | **27.50 €** | 11.0 % | **9.0 %** | 27.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 33.4 % | **27.6 %** | 11.32 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB6000 | 38.00 € | **37.50 €** | 12.9 % | **11.4 %** | 37.82 € | cena podľa najlacnejšieho iného predajcu |
| Merač elektromagnetického poľa Habotest HT627 | 40.50 € | **40.00 €** | 15.4 % | **14.0 %** | 40.33 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DT20 s meracou páskou s ... | 48.00 € | **47.50 €** | 9.7 % | **8.5 %** | 47.83 € | cena podľa najlacnejšieho iného predajcu |
| San Marco INTENSO 500 g | 12.00 € | **11.50 €** | 10.7 % | **6.1 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 160.50 € | **160.00 €** | 21.9 % | **21.5 %** | 160.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter digitálny V33 | 11.50 € | **11.00 €** | 16.4 % | **11.4 %** | 11.37 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.50 € | **888.00 €** | 20.3 % | **20.2 %** | 888.38 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.00 € | **17.50 €** | 10.5 % | **7.5 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Copertinto BL439G10 | 57.00 € | **56.50 €** | 6.5 % | **5.5 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 261.00 € | **260.50 €** | 7.7 % | **7.5 %** | 260.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 28.00 € | **27.50 €** | 45.5 % | **42.9 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.00 € | **141.50 €** | 7.0 % | **6.6 %** | 141.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 40.00 € | **39.50 €** | 9.1 % | **7.7 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 20.00 € | **19.50 €** | 12.5 % | **9.7 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6T (modrý) | 43.00 € | **42.50 €** | 21.5 % | **20.1 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 25.00 € | **24.50 €** | 20.1 % | **17.7 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 15.50 € | **15.00 €** | 103.3 % | **96.7 %** | 15.40 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 70.00 € | **69.50 €** | 11.5 % | **10.7 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER NL48B – Magnetické selfie svetlo (čierne) | 17.50 € | **17.00 €** | 15.7 % | **12.4 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak PULUZ pre Insta360 GO Ultra (čierny) | 13.50 € | **13.00 €** | 15.7 % | **11.4 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 346.50 € | **346.00 €** | 22.1 % | **21.9 %** | 346.48 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 14.50 € | **14.00 €** | 9.3 % | **5.5 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Neotion CAM 803 Nagra Skylink CZ+SK | 35.50 € | **35.00 €** | 10.3 % | **8.8 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 13.50 € | **13.00 €** | 16.3 % | **12.0 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 46.50 € | **46.00 €** | 30.9 % | **29.5 %** | 46.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.50 € | **10.00 €** | 22.5 % | **16.6 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Verto High 54 l tmavomodrý | 45.50 € | **45.00 €** | 14.0 % | **12.7 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 38.50 € | **38.00 €** | 9.4 % | **8.0 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 144.50 € | **144.00 €** | 50.3 % | **49.8 %** | 144.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.50 € | **10.00 €** | 25.4 % | **19.4 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.50 € | **11.00 €** | 29.1 % | **23.5 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **12.00 €** | 23.5 % | **18.5 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 13.50 € | **13.00 €** | 34.0 % | **29.0 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 17.50 € | **17.00 €** | 19.3 % | **15.9 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 21.50 € | **21.00 €** | 49.4 % | **45.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 37.50 € | **37.00 €** | 13.8 % | **12.2 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 24.50 € | **24.00 €** | 12.7 % | **10.4 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH 6756WO | 122.50 € | **122.00 €** | 8.2 % | **7.8 %** | 122.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 19.50 € | **19.00 €** | 24.6 % | **21.4 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 31.50 € | **31.00 €** | 55.0 % | **52.6 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 16.50 € | **16.00 €** | 14.8 % | **11.3 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 200.50 € | **200.00 €** | 19.7 % | **19.4 %** | 200.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 34.50 € | **34.00 €** | 16.6 % | **14.9 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6VR (červený) | 31.50 € | **31.00 €** | 22.0 % | **20.0 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 26.50 € | **26.00 €** | 9.1 % | **7.1 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.50 € | **21.00 €** | 18.1 % | **15.4 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.50 € | **22.00 €** | 31.8 % | **28.9 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Šnúrka na krk PULUZ pre DJI RC 2/RC 1/Air | 11.50 € | **11.00 €** | 16.1 % | **11.1 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu PLA Classic (čierny), 1,75 mm, 1 kg | 11.50 € | **11.00 €** | 28.1 % | **22.5 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 107.90 € | **107.50 €** | 13.9 % | **13.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 125.90 € | **125.50 €** | 9.8 % | **9.4 %** | 125.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.70 € | **4.30 €** | 66.1 % | **52.0 %** | 4.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter digitálny V32 | 8.30 € | **7.90 €** | 19.6 % | **13.9 %** | 7.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetický USB-C kábel, USB 2.0 A konektor -... | 5.40 € | **5.00 €** | 80.7 % | **67.3 %** | 5.10 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Topic Tab LenIdeaTab11 FIXTOT-1677 | 14.90 € | **14.50 €** | 14.3 % | **11.2 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.90 € | **14.50 €** | 14.3 % | **11.2 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (čierna) | 14.90 € | **14.50 €** | 19.3 % | **16.1 %** | 14.85 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (sivá) | 14.90 € | **14.50 €** | 13.1 % | **10.1 %** | 14.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.90 € | **14.50 €** | 25.8 % | **22.4 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.90 € | **10.50 €** | 27.1 % | **22.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.90 € | **14.50 €** | 15.8 % | **12.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 12W, E27, 4000K... | 1.80 € | **1.40 €** | 78.5 % | **38.8 %** | 1.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací pravouhlý konektor pre COB LED p... | 2.10 € | **1.70 €** | 81.6 % | **47.0 %** | 1.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED NANO žiarivka lineárna T8, 9W, 800lm, 60... | 2.00 € | **1.60 €** | 41.4 % | **13.1 %** | 1.64 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz do okna – Santa Solight 1V251, 12... | 2.50 € | **2.10 €** | 33.7 % | **12.3 %** | 2.15 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.00 € | **2.60 €** | 33.3 % | **15.5 %** | 2.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.60 € | **2.20 €** | 32.9 % | **12.5 %** | 2.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový lampáš s LED sviečkou, teplá biela, 3... | 6.10 € | **5.70 €** | 21.6 % | **13.6 %** | 5.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.20 € | **7.80 €** | 43.4 % | **36.4 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Compact | 37.90 € | **37.50 €** | 8.4 % | **7.3 %** | 37.56 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.90 € | **28.50 €** | 11.1 % | **9.6 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT333BT Mini merač teploty a vlhkosti | 25.90 € | **25.50 €** | 15.2 % | **13.4 %** | 25.83 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin L Steel | 28.90 € | **28.50 €** | 11.9 % | **10.4 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin M Steel | 23.90 € | **23.50 €** | 9.5 % | **7.6 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš KIS Chic Bin M Black | 23.90 € | **23.50 €** | 8.3 % | **6.4 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| VENTAcel Filter 1 pack | 28.90 € | **28.50 €** | 11.2 % | **9.7 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 49.90 € | **49.50 €** | 63.3 % | **62.0 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Krbový ventilátor Kaminer 26206 5-lopatkový | 29.90 € | **29.50 €** | 14.1 % | **12.5 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1016501 | 29.90 € | **29.50 €** | 10.4 % | **8.9 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 17.90 € | **17.50 €** | 14.4 % | **11.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 17.90 € | **17.50 €** | 20.7 % | **18.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W3 | 19.90 € | **19.50 €** | 21.3 % | **18.8 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.90 € | **22.50 €** | 13.5 % | **11.5 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 19.90 € | **19.50 €** | 24.7 % | **22.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 8.90 € | **8.60 €** | 18.8 % | **14.8 %** | 8.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.40 € | **3.10 €** | 33.5 % | **21.8 %** | 3.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight reťaz pre akumulátorovú pílu RNP150 | 4.30 € | **4.00 €** | 22.2 % | **13.7 %** | 4.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight výsuvná nabíjačka USB A+C 24 W PD, biela | 7.10 € | **6.80 €** | 19.3 % | **14.2 %** | 6.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight výsuvná nabíjačka USB A+C 24 W PD, čierna | 7.10 € | **6.80 €** | 19.3 % | **14.2 %** | 6.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny COAX zdierka priama - typ Taliansko,... | 6.80 € | **6.50 €** | 99.6 % | **90.8 %** | 6.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 9W, 1260lm, 6000K,... | 4.00 € | **3.70 €** | 85.8 % | **71.9 %** | 3.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight lišta pre akumulátorovú pílu RNP150 | 3.70 € | **3.50 €** | 19.8 % | **13.4 %** | 3.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 3,8 W, 806lm, 270... | 4.80 € | **4.60 €** | 101.2 % | **92.8 %** | 4.68 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Prasátko Peppa | 23.00 € | **22.90 €** | 10.6 % | **10.1 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 48.00 € | **47.90 €** | 21.8 % | **21.5 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 35.00 € | **34.90 €** | 34.4 % | **34.0 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 30.00 € | **29.90 €** | 15.2 % | **14.8 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 43.00 € | **42.90 €** | 38.4 % | **38.1 %** | 43.00 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P101CUD100 | 33.00 € | **32.90 €** | 5.6 % | **5.3 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini Bag PULUZ for DJI Osmo Pocket 3 (Black) | 5.90 € | **5.80 €** | 15.3 % | **13.4 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight lišta pre akumulátorovú pílu RNP100/A/A1 | 1.50 € | **1.40 €** | 22.0 % | **13.8 %** | 1.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.90 € | **2.80 €** | 41.2 % | **36.3 %** | 2.84 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s ozdobnými príveskami Solight 1V... | 2.90 € | **2.80 €** | 42.9 % | **38.0 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 3.90 € | **3.80 €** | 123.3 % | **117.6 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, 20 - 200A | 6.50 € | **6.40 €** | 35.8 % | **33.8 %** | 6.43 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GCO2009 Auto FIRST 65018 Cars Ja | 12.00 € | **11.90 €** | 7.0 % | **6.1 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GCO2011 Auto FIRST 65023 Tlapkov | 12.00 € | **11.90 €** | 7.0 % | **6.1 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.40 € | **9.30 €** | 32.4 % | **31.0 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 8.20 € | **8.10 €** | 51.2 % | **49.3 %** | 8.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.80 €** | 37.4 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **10.90 €** | 32.3 % | **31.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.80 € | **6.70 €** | 40.3 % | **38.3 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.00 € | **4.90 €** | 122.1 % | **117.7 %** | 5.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.40 € | **9.30 €** | 19.8 % | **18.5 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 8.90 € | **8.80 €** | 25.8 % | **24.4 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 10.00 € | **9.90 €** | 13.2 % | **12.1 %** | 10.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI držák do auta s Magsafe AMS06BK | 14.00 € | **13.90 €** | 10.0 % | **9.2 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 131.00 € | **130.90 €** | 25876.6 % | **25856.8 %** | 130.99 € | cena podľa najlacnejšieho iného predajcu |
| Tefal KI883D10 | 106.00 € | **105.90 €** | 9.8 % | **9.7 %** | 106.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 96.00 € | **95.90 €** | 16.5 % | **16.4 %** | 96.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 143.00 € | **142.90 €** | 7.6 % | **7.5 %** | 143.00 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 167.00 € | **166.90 €** | 23.2 % | **23.1 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-24

Vstup: `premiumstore-sk_2026-09-24_21-57.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6984**
- Návrh **zvýšiť** cenu: **92** produktov
- Návrh **znížiť** cenu: **204** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6688** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **22**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **506**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (92)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| CATLINK Scooper Luxury ProX – samočistiaca toaleta p... | 521.90 € | **656.90 €** | 15.0 % | **44.8 %** | 657.00 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 325.90 € | **358.90 €** | 15.0 % | **26.7 %** | 359.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 82.50 € | **106.90 €** | 15.3 % | **49.4 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3512B | 96.00 € | **116.00 €** | 27.4 % | **54.0 %** | 116.29 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK C08 – Schody | 51.90 € | **69.50 €** | 15.1 % | **54.2 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK C08 Schodíky k toaletnému košu | 51.90 € | **69.50 €** | 15.1 % | **54.2 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 169.50 € | **183.50 €** | 9.5 % | **18.5 %** | 183.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame D20 | 51.00 € | **62.90 €** | 15.0 % | **41.8 %** | 63.00 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259C (HP W2071A Cyan) | 32.50 € | **43.90 €** | 11.2 % | **50.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259Y (HP W2072A Yellow) | 32.50 € | **43.90 €** | 11.2 % | **50.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259M (HP W2073A Magenta) | 32.50 € | **43.90 €** | 11.2 % | **50.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 143.00 € | **154.00 €** | 12.9 % | **21.6 %** | 154.46 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 20.00 € | **30.90 €** | 40.1 % | **116.4 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 35.90 € | **45.00 €** | 15.3 % | **44.5 %** | 45.45 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259B (HP W2070A Black) | 32.50 € | **40.90 €** | 11.2 % | **39.9 %** | 40.99 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-654A | 129.00 € | **136.90 €** | 29.6 % | **37.5 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-604B štvorzónový plynový sporák so sklen... | 129.00 € | **136.90 €** | 37.7 % | **46.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Joy | 175.00 € | **182.50 €** | 33.8 % | **39.5 %** | 182.88 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame L50 Ultra AE | 67.90 € | **74.90 €** | 15.1 % | **26.9 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame L50s Pro Ultra | 67.90 € | **74.90 €** | 15.1 % | **26.9 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Rozšiřující set 3 | 47.50 € | **54.00 €** | 96.6 % | **123.5 %** | 54.21 € | cena podľa najlacnejšieho iného predajcu |
| Stepper na podstielku Petkit | 27.00 € | **33.00 €** | 14.3 % | **39.7 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Kryt na toaletu pre mačky Petkit Hood | 30.90 € | **36.00 €** | 15.3 % | **34.4 %** | 36.48 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MO 20 A3B | 72.90 € | **77.50 €** | 5.3 % | **12.0 %** | 77.80 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.00 € | **229.50 €** | 17.3 % | **19.7 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 291.50 € | **295.90 €** | 11.2 % | **12.9 %** | 295.99 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L3350 | 188.90 € | **192.50 €** | 9.7 % | **11.8 %** | 192.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 125.00 € | **128.50 €** | 9.4 % | **12.4 %** | 128.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BL | 20.00 € | **23.50 €** | 13.4 % | **33.2 %** | 23.82 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (sivý) | 60.50 € | **64.00 €** | 16.0 % | **22.7 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **20.00 €** | 23.9 % | **46.6 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 176.00 € | **178.90 €** | 17.5 % | **19.5 %** | 178.91 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 64.90 € | **67.50 €** | 5.2 % | **9.4 %** | 67.56 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1441.00 € | **1443.50 €** | 7.2 % | **7.4 %** | 1443.51 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 59.50 € | **62.00 €** | 10.3 % | **14.9 %** | 62.10 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 12.00 € | **14.50 €** | 13.0 % | **36.6 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 12.00 € | **14.50 €** | 13.0 % | **36.6 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| FM Transmitter Baseus S-09 Pro, Bluetooth (čierny) | 18.50 € | **20.90 €** | 96.4 % | **121.8 %** | 20.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 138.00 € | **140.00 €** | 9.9 % | **11.5 %** | 140.07 € | cena podľa najlacnejšieho iného predajcu |
| REBEL ACTIVE RBA-1014 bežecký pás | 199.50 € | **201.50 €** | 51.7 % | **53.2 %** | 201.63 € | cena podľa najlacnejšieho iného predajcu |
| Barkan S320. B - natáčecí stojan pro TV (29-58'' 25k... | 60.00 € | **62.00 €** | 19.1 % | **23.1 %** | 62.29 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **23.50 €** | 15.9 % | **26.7 %** | 23.87 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2354B2 Stepper (Black) | 59.50 € | **61.50 €** | 19.5 % | **23.5 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač / zastrihávač domácich zvierat Oneisall ... | 21.50 € | **23.00 €** | 14.7 % | **22.7 %** | 23.08 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 155.50 € | **157.00 €** | 8.7 % | **9.8 %** | 157.12 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 129.00 € | **130.50 €** | 7.1 % | **8.3 %** | 130.65 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač / zastrihávač zvierat Oneisall X2 | 22.00 € | **23.50 €** | 13.8 % | **21.5 %** | 23.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 58.00 € | **59.50 €** | 33.8 % | **37.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 26.90 € | **28.00 €** | 18.3 % | **23.2 %** | 28.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 6.80 € | **7.90 €** | 17.6 % | **36.7 %** | 7.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 35.00 € | **36.00 €** | 34.3 % | **38.1 %** | 36.01 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96BX (HP 305XL Black) | 17.90 € | **18.90 €** | 12.3 % | **18.6 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 43.00 € | **44.00 €** | 34.5 % | **37.6 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 38.50 € | **39.50 €** | 33.7 % | **37.2 %** | 39.78 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 Max | 694.50 € | **695.50 €** | 12.6 % | **12.7 %** | 695.84 € | cena podľa najlacnejšieho iného predajcu |
| Wireless controler GameSir T4n (white) | 25.50 € | **26.50 €** | 19.3 % | **24.0 %** | 26.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.80 € | **2.70 €** | 39.4 % | **109.1 %** | 2.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.00 € | **25.90 €** | 48.9 % | **54.3 %** | 25.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.00 € | **14.50 €** | 49.0 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| Činky REBEL ACTIVE RBA-2330-2 liatinové neoprénové H... | 16.00 € | **16.50 €** | 37.9 % | **42.3 %** | 16.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.00 € | **18.50 €** | 34.1 % | **37.9 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar microSD 3.0,64 GB | 18.00 € | **18.50 €** | 6.7 % | **9.7 %** | 18.60 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 34.50 € | **35.00 €** | 10.0 % | **11.6 %** | 35.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.00 € | **19.50 €** | 33.4 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 350.00 € | **350.50 €** | 6.7 % | **6.8 %** | 350.73 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 12.50 € | **13.00 €** | 20.0 % | **24.8 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar Professional 800x Pro SDXC 256GD | 83.00 € | **83.50 €** | 17.6 % | **18.3 %** | 83.80 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro SG A36 5G FIXOP3-1502-BRW | 12.50 € | **13.00 €** | 15.5 % | **20.1 %** | 13.31 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSH2003E | 27.00 € | **27.50 €** | 16.5 % | **18.6 %** | 27.82 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ Gimbal pre DJI Osmo Action 5 Pro / 4 / 3 (čierny) | 11.00 € | **11.50 €** | 13.3 % | **18.5 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.50 € | **47.00 €** | 34.4 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| USB kľúč Lexar JumpDrive M400,32 GB, USB 3.0 | 10.50 € | **11.00 €** | 8.9 % | **14.1 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.50 € | **11.90 €** | 5.8 % | **9.4 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| NEDIS WIFIZBT10CWT chytrá brána ZigBee 3.0 do zásuvk... | 26.50 € | **26.90 €** | 5.0 % | **6.6 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED žiarovka, klasický tvar, 10W, E27, 4000K... | 1.30 € | **1.60 €** | 42.8 % | **75.8 %** | 1.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.80 €** | 34.6 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 21.90 € | **22.00 €** | 34.7 % | **35.3 %** | 22.47 € | cena podľa najlacnejšieho iného predajcu |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.80 € | **7.90 €** | 46.1 % | **48.0 %** | 7.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.40 € | **2.50 €** | 44.5 % | **50.6 %** | 2.56 € | cena podľa najlacnejšieho iného predajcu |
| Ratanová LED hviezda Solight 1V246, 40 cm, 40 LED, 2... | 3.30 € | **3.40 €** | 19.8 % | **23.4 %** | 3.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.20 € | **4.30 €** | 50.4 % | **54.0 %** | 4.31 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Stěrka na dlaždice a vanu FLEXI | 11.90 € | **12.00 €** | 8.8 % | **9.7 %** | 12.09 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 125.90 € | **126.00 €** | 19.9 % | **20.0 %** | 126.06 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 104.90 € | **105.00 €** | 12.1 % | **12.2 %** | 105.17 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (204)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Okuliare RayNeo X3 Pro AR | 2258.90 € | **1536.50 €** | 67.6 % | **14.0 %** | 1536.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Studio 16 KS1601 | 2406.90 € | **2048.90 €** | 50.3 % | **27.9 %** | 2048.97 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 656.90 € | **548.50 €** | 43.4 % | **19.8 %** | 548.88 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 359.00 € | **261.90 €** | 55.0 % | **13.1 %** | 261.96 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 360.50 € | **270.00 €** | 43.2 % | **7.3 %** | 270.39 € | cena podľa najlacnejšieho iného predajcu |
| MSI Cyborg 15 (A13UC-2218CZ) | 882.90 € | **814.00 €** | 24.7 % | **15.0 %** | 814.01 € | cena podľa najlacnejšieho iného predajcu |
| Střídač hybridní DEYE SUN-10K-SG01HP3-EU-AM2, 10kW, ... | 1508.90 € | **1471.50 €** | 7.7 % | **5.0 %** | 1453.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 819.90 € | **784.00 €** | 15.0 % | **10.0 %** | 784.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, strieborná... | 212.50 € | **178.00 €** | 37.2 % | **14.9 %** | 178.01 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 308.90 € | **275.50 €** | 43.8 % | **28.2 %** | 275.73 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 614.90 € | **584.90 €** | 39.4 % | **32.6 %** | 585.00 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V066, 18 000 mAh | 258.50 € | **234.00 €** | 26.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny RCD / tester odporu slučky Habotest HT5910 | 156.90 € | **133.00 €** | 37.1 % | **16.2 %** | 133.21 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 9N2BR-S | 434.90 € | **414.90 €** | 10.1 % | **5.0 %** | 404.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rádio TechniSat DIGITRADIO 550 IR /černé/ | 159.50 € | **139.90 €** | 21.4 % | **6.5 %** | 139.99 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER DCP-L3560CDW | 394.50 € | **376.50 €** | 10.1 % | **5.0 %** | 354.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 308.90 € | **291.00 €** | 47.2 % | **38.7 %** | 291.11 € | cena podľa najlacnejšieho iného predajcu |
| ALI Pods Transl.TWS+překladač ATR10BK | 75.00 € | **59.00 €** | 50.0 % | **18.0 %** | 59.10 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi Smart Projector L1 Pro EU | 320.50 € | **305.90 €** | 10.1 % | **5.1 %** | 241.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko TB622ECWCS | 359.00 € | **344.50 €** | 25.1 % | **20.0 %** | 344.63 € | cena podľa najlacnejšieho iného predajcu |
| Střídač hybridní DEYE SUN-30K-SG01HP3-EU-BM3, 30kW, ... | 4032.90 € | **4018.50 €** | 5.4 % | **5.0 %** | 3982.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 124.90 € | **112.50 €** | 18.3 % | **6.5 %** | 112.90 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Pad 2 4/256 GB zelená (79232) | 262.00 € | **250.50 €** | 10.0 % | **5.2 %** | 207.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mobil Xiaomi Redmi Note 17,4/128 GB, čierny | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 168.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 82.00 € | **71.50 €** | 20.5 % | **5.0 %** | 71.79 € | cena podľa najlacnejšieho iného predajcu |
| IMOU N110W 10-kanálový IP videorekordér | 82.50 € | **72.90 €** | 19.3 % | **5.5 %** | 64.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON i-SENSYS MF3010 | 202.90 € | **193.90 €** | 10.0 % | **5.1 %** | 152.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED MagCool 2,MagSafe FIXMCO2-BK | 40.00 € | **31.00 €** | 49.4 % | **15.8 %** | 31.33 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady Mobile+ | 79.50 € | **72.00 €** | 45.6 % | **31.9 %** | 72.24 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 121.00 € | **114.00 €** | 24493.5 % | **23070.7 %** | 114.38 € | cena podľa najlacnejšieho iného predajcu |
| Pedrini Infinity červená 6 porcí | 41.50 € | **35.00 €** | 26.5 % | **6.7 %** | 35.41 € | cena podľa najlacnejšieho iného predajcu |
| Beko B7RCNA418HXP | 798.90 € | **792.50 €** | 13.3 % | **12.4 %** | 792.90 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5388B | 134.90 € | **128.90 €** | 10.2 % | **5.3 %** | 119.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TEESA AIR FRYER TSA8046W | 53.50 € | **48.00 €** | 19.1 % | **6.9 %** | 48.09 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro Gradient (... | 49.90 € | **44.90 €** | 25.8 % | **13.2 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj Rebel POWER 1000 RB-4013 700W 12V nást... | 116.50 € | **111.90 €** | 9.5 % | **5.2 %** | 108.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 74.00 € | **69.90 €** | 38.7 % | **31.0 %** | 69.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight dezinfekčná UV lampa 100W | 49.50 € | **45.50 €** | 49.7 % | **37.6 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5474B | 73.50 € | **70.00 €** | 10.4 % | **5.1 %** | 70.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 48.00 € | **44.50 €** | 51.7 % | **40.6 %** | 44.79 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 253.90 € | **250.50 €** | 18.3 % | **16.7 %** | 250.73 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 29.90 € | **26.50 €** | 19.1 % | **5.6 %** | 21.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov Freewell pre DJI Mini 5 Pro Bright Day | 64.00 € | **60.90 €** | 22.2 % | **16.3 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 108.00 € | **105.00 €** | 12.3 % | **9.1 %** | 105.39 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | cena podľa najlacnejšieho iného predajcu |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.50 € | **15.90 €** | 24.0 % | **6.6 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 36.00 € | **33.50 €** | 16.0 % | **7.9 %** | 33.57 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CS-85D Softbox | 74.50 € | **72.00 €** | 23.1 % | **19.0 %** | 72.26 € | cena podľa najlacnejšieho iného predajcu |
| Prijímač BOYA BY-WM3U bezdrátový, dosah 20m | 81.90 € | **79.50 €** | 8.7 % | **5.6 %** | 46.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vrecká na odpadky pre Petkit litter box Purobot ULTR... | 31.90 € | **29.50 €** | 15.1 % | **6.4 %** | 29.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gimbal iSteady MT3 | 280.00 € | **277.90 €** | 31.8 % | **30.8 %** | 277.98 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor PWM Epever LS2024B, 12/24V, 20A | 39.50 € | **37.50 €** | 11.0 % | **5.3 %** | 34.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.90 € | **392.90 €** | 6.7 % | **6.1 %** | 393.00 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 15.50 € | **13.50 €** | 28.1 % | **11.5 %** | 13.71 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 38.50 € | **36.50 €** | 26.8 % | **20.2 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 33.00 € | **31.00 €** | 12.7 % | **5.9 %** | 31.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 6000K... | 6.90 € | **5.30 €** | 156.2 % | **96.8 %** | 5.40 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 80.50 € | **78.90 €** | 8.2 % | **6.0 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Jbay Zone J2 Comet 320x81x15, 145 Kg, Th... | 322.00 € | **320.50 €** | 6.9 % | **6.4 %** | 320.64 € | cena podľa najlacnejšieho iného predajcu |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 151.00 € | **149.50 €** | 40.4 % | **39.0 %** | 149.65 € | cena podľa najlacnejšieho iného predajcu |
| Sada pro přežití LEVENHUK LabZZ SK40 | 44.00 € | **42.50 €** | 10.1 % | **6.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 55.00 € | **53.50 €** | 32.4 % | **28.8 %** | 53.84 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 92.50 € | **91.00 €** | 15.4 % | **13.5 %** | 91.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 264 AP | 59.00 € | **57.50 €** | 10.1 % | **7.3 %** | 57.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 13.00 € | **11.50 €** | 30.6 % | **15.6 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 9W, 1260lm, 6000K,... | 5.40 € | **4.00 €** | 150.9 % | **85.8 %** | 4.10 € | cena podľa najlacnejšieho iného predajcu |
| TEFAL KO 250830 | 35.90 € | **34.50 €** | 10.8 % | **6.4 %** | 30.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Motor na ovládanie závesov SwitchBot Rod 2 (biely) | 54.90 € | **53.50 €** | 25.6 % | **22.4 %** | 53.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W1 TUYA | 9.50 € | **8.40 €** | 38.7 % | **22.6 %** | 8.49 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 249.00 € | **247.90 €** | 7.6 % | **7.1 %** | 247.92 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Jbay Zone H1 Kame 297x76x15, 120 Kg, All... | 221.50 € | **220.50 €** | 5.8 % | **5.3 %** | 220.56 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Jbay Zone H3 Kame 297x81x10, 99 Kg, All ... | 221.50 € | **220.50 €** | 5.8 % | **5.3 %** | 220.56 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 255.90 € | **254.90 €** | 11.9 % | **11.5 %** | 255.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 396.90 € | **395.90 €** | 5.9 % | **5.7 %** | 396.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 398.90 € | **397.90 €** | 5.8 % | **5.5 %** | 398.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 228.90 € | **227.90 €** | 41255.0 % | **41074.3 %** | 228.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 666.90 € | **665.90 €** | 120387.8 % | **120207.1 %** | 666.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 364.90 € | **363.90 €** | 65825.9 % | **65645.3 %** | 364.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 217.00 € | **216.00 €** | 10.6 % | **10.1 %** | 216.12 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.50 € | **21.50 €** | 14.3 % | **9.2 %** | 21.64 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 353.50 € | **352.50 €** | 36.1 % | **35.7 %** | 352.70 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 274.00 € | **273.00 €** | 20.4 % | **19.9 %** | 273.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **25.00 €** | 42.7 % | **37.2 %** | 25.33 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.00 € | **21.00 €** | 10.1 % | **5.1 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 28.00 € | **27.00 €** | 17.7 % | **13.5 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 21.50 € | **20.50 €** | 22.4 % | **16.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 85.00 € | **84.00 €** | 14.9 % | **13.5 %** | 84.42 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ORYX X220 Iris | 20.50 € | **19.90 €** | 15.8 % | **12.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 4.40 € | **3.80 €** | 52.9 % | **32.0 %** | 3.87 € | cena podľa najlacnejšieho iného predajcu |
| Vysoko presný ručný LCR meter FNIRSI LC1020E | 62.00 € | **61.50 €** | 6.7 % | **5.8 %** | 56.15 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Stěrka na okna s kartáčem a tel | 18.00 € | **17.50 €** | 8.5 % | **5.5 %** | 12.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | cena podľa najlacnejšieho iného predajcu |
| Beko PowerIntense BDFN26560XP | 541.50 € | **541.00 €** | 6.8 % | **6.7 %** | 541.07 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj REBEL POWER 1000 RB-4003 700W 12V | 107.50 € | **107.00 €** | 6.1 % | **5.6 %** | 107.09 € | cena podľa najlacnejšieho iného predajcu |
| Mixed Cat Litter 7L Petkit | 12.00 € | **11.50 €** | 15.5 % | **10.6 %** | 11.64 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 225.50 € | **225.00 €** | 17.8 % | **17.6 %** | 225.18 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 89.50 € | **89.00 €** | 20112.3 % | **19999.4 %** | 89.19 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 234.50 € | **234.00 €** | 24.9 % | **24.6 %** | 234.20 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 124.00 € | **123.50 €** | 20.0 % | **19.5 %** | 123.70 € | cena podľa najlacnejšieho iného predajcu |
| Sada 6 filtrov Freewell Bright Day pre DJI Flip | 39.50 € | **39.00 €** | 37.4 % | **35.7 %** | 39.20 € | cena podľa najlacnejšieho iného predajcu |
| Stan Puluz 80 cm bez tieňov s LED svietidlom s výkon... | 69.50 € | **69.00 €** | 6.3 % | **5.5 %** | 69.21 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience Graphite Black | 251.00 € | **250.50 €** | 16.9 % | **16.7 %** | 250.73 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE Apex | 493.50 € | **493.00 €** | 28.3 % | **28.2 %** | 493.26 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit 2AIR | 31.00 € | **30.50 €** | 7.2 % | **5.5 %** | 30.79 € | cena podľa najlacnejšieho iného predajcu |
| Měnič napětí GETI GPIU 1012S 12V/230V 1000W | 152.00 € | **151.50 €** | 5.5 % | **5.2 %** | 151.79 € | cena podľa najlacnejšieho iného predajcu |
| Budík analogový TechnoLine WT 757W | 26.00 € | **25.50 €** | 8.3 % | **6.3 %** | 25.79 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální projekční TechnoLine WT 538 | 32.50 € | **32.00 €** | 7.5 % | **5.8 %** | 32.29 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 52.00 € | **51.50 €** | 11.3 % | **10.2 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.50 € | **52.00 €** | 9.1 % | **8.0 %** | 52.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 46.50 € | **46.00 €** | 10.7 % | **9.5 %** | 46.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 61.50 € | **61.00 €** | 12.0 % | **11.1 %** | 61.29 € | cena podľa najlacnejšieho iného predajcu |
| AMIKO diaľkové ovládanie Univerzálny, HD - SD | 12.50 € | **12.00 €** | 9.7 % | **5.4 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 81.50 € | **81.00 €** | 15.5 % | **14.8 %** | 81.29 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 75.50 € | **75.00 €** | 16.0 % | **15.3 %** | 75.29 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 64.50 € | **64.00 €** | 14.4 % | **13.6 %** | 64.29 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 31.00 € | **30.50 €** | 11.6 % | **9.8 %** | 30.79 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine WS 9251 | 52.50 € | **52.00 €** | 6.2 % | **5.2 %** | 52.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 58.50 € | **58.00 €** | 17.8 % | **16.8 %** | 58.29 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 83.50 € | **83.00 €** | 13.4 % | **12.7 %** | 83.29 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 35.00 € | **34.50 €** | 14.3 % | **12.6 %** | 34.79 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 135.50 € | **135.00 €** | 13.9 % | **13.5 %** | 135.29 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-797 5G | 20.50 € | **20.00 €** | 16.9 % | **14.0 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 27.00 € | **26.50 €** | 18.9 % | **16.7 %** | 26.79 € | cena podľa najlacnejšieho iného predajcu |
| Victrola VTA-830SB-BLK Century Signature | 180.00 € | **179.50 €** | 10.4 % | **10.1 %** | 179.80 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.00 € | **141.50 €** | 7.0 % | **6.6 %** | 141.83 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mics | 160.00 € | **159.50 €** | 13.4 % | **13.0 %** | 159.86 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač krmiva PETKIT Fresh Element SOLO, 3 l | 73.50 € | **73.00 €** | 7.4 % | **6.7 %** | 73.36 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 209.00 € | **208.50 €** | 16.8 % | **16.6 %** | 208.87 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 77.50 € | **77.00 €** | 33.3 % | **32.4 %** | 77.38 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Classic Extenda | 54.00 € | **53.50 €** | 17.1 % | **16.1 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.00 €** | 9.7 % | **6.7 %** | 18.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 134.50 € | **134.00 €** | 12.2 % | **11.8 %** | 134.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny mikroohmmer Uni-T UT620C+ | 178.50 € | **178.00 €** | 5.5 % | **5.2 %** | 178.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 301.00 € | **300.50 €** | 6.1 % | **6.0 %** | 300.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 154.00 € | **153.50 €** | 14.0 % | **13.6 %** | 153.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-2m endoskop | 189.50 € | **189.00 €** | 14.0 % | **13.7 %** | 189.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-3m endoskop | 253.00 € | **252.50 €** | 14.3 % | **14.1 %** | 252.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 59.00 € | **58.50 €** | 8.4 % | **7.5 %** | 58.89 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 51.00 € | **50.50 €** | 6.6 % | **5.5 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 78.50 € | **78.00 €** | 9.1 % | **8.4 %** | 78.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 166.50 € | **166.00 €** | 12.5 % | **12.2 %** | 166.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 323.50 € | **323.00 €** | 10.8 % | **10.6 %** | 323.39 € | cena podľa najlacnejšieho iného predajcu |
| Regulátor Geti GWH04W solárny MPPT 5 kW na ohrev vod... | 354.00 € | **353.50 €** | 35.3 % | **35.1 %** | 353.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 149.50 € | **149.00 €** | 12.3 % | **11.9 %** | 149.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1289.50 € | **1289.00 €** | 7.5 % | **7.4 %** | 1289.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 140.50 € | **140.00 €** | 9.2 % | **8.8 %** | 140.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 56.00 € | **55.50 €** | 16.9 % | **15.9 %** | 55.89 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 55.00 € | **54.50 €** | 10.4 % | **9.4 %** | 54.89 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 94.00 € | **93.50 €** | 18.0 % | **17.4 %** | 93.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TESLA SecureQ SC55 - venkovní WiFi smart kame... | 49.50 € | **49.00 €** | 9.3 % | **8.2 %** | 49.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 931.00 € | **930.50 €** | 5.2 % | **5.1 %** | 930.89 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice GARNI 750 | 113.50 € | **113.00 €** | 9.8 % | **9.4 %** | 113.39 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK 4G LTE USB Adaptér (DWM-222W) | 52.50 € | **52.00 €** | 11.6 % | **10.5 %** | 52.39 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 44.00 € | **43.50 €** | 11.9 % | **10.6 %** | 43.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3411 1600W 12V nástenný | 240.00 € | **239.50 €** | 9.2 % | **9.0 %** | 239.89 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 133.50 € | **133.00 €** | 7.6 % | **7.2 %** | 133.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj REBEL POWER 800 LFP4 RB-4027 500W 12V | 91.50 € | **91.00 €** | 9.7 % | **9.1 %** | 91.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 206.00 € | **205.50 €** | 8.9 % | **8.6 %** | 205.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 193.50 € | **193.00 €** | 9.9 % | **9.6 %** | 193.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 65.50 € | **65.00 €** | 22.2 % | **21.2 %** | 65.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 633.00 € | **632.50 €** | 5.5 % | **5.4 %** | 632.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 669.50 € | **669.00 €** | 8.2 % | **8.2 %** | 669.39 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 86.50 € | **86.00 €** | 10.3 % | **9.7 %** | 86.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.50 € | **105.00 €** | 19.4 % | **18.8 %** | 105.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 41.50 € | **41.00 €** | 29.9 % | **28.3 %** | 41.42 € | cena podľa najlacnejšieho iného predajcu |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 136.50 € | **136.00 €** | 18.2 % | **17.7 %** | 136.42 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara 570lm ZOOM nabíjecí | 16.50 € | **16.00 €** | 15.1 % | **11.7 %** | 16.43 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Handy Force One 2v1, 2708 | 52.50 € | **52.00 €** | 6.7 % | **5.6 %** | 52.45 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 121.50 € | **121.00 €** | 13.7 % | **13.3 %** | 121.47 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na nohy a lýtka Shiatsu, REBEL ACTI... | 32.50 € | **32.00 €** | 7.3 % | **5.6 %** | 32.48 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 47.50 € | **47.00 €** | 6.2 % | **5.1 %** | 47.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 500 ml, oceľovo šedá | 14.50 € | **14.00 €** | 15.9 % | **11.9 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 19.50 € | **19.00 €** | 52.1 % | **48.2 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro SamsGTA11+ / A9+ FIXTOT-1651 | 19.50 € | **19.00 €** | 29.2 % | **25.9 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| GameSir X5 Lite BK – mobilný herný ovládač USB-C, či... | 39.50 € | **39.00 €** | 78.7 % | **76.4 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 23.50 € | **23.00 €** | 8.6 % | **6.3 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 126.90 € | **126.50 €** | 24.8 % | **24.4 %** | 126.72 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.90 € | **108.50 €** | 8.4 % | **8.0 %** | 108.79 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 82.90 € | **82.50 €** | 21.7 % | **21.1 %** | 82.84 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED vianočná hviezda Solight 1V310, 40 cm, 1... | 5.10 € | **4.70 €** | 54.1 % | **42.0 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Classic 250 Flex | 31.90 € | **31.50 €** | 13.4 % | **12.0 %** | 31.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40T | 27.90 € | **27.50 €** | 8.5 % | **7.0 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 45.90 € | **45.50 €** | 89.2 % | **87.6 %** | 45.89 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač pre domáce zvieratá 2v1 Petkit | 22.90 € | **22.50 €** | 24.2 % | **22.0 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 33.90 € | **33.50 €** | 8.9 % | **7.6 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.00 € | **265.90 €** | 7.3 % | **7.3 %** | 265.96 € | cena podľa najlacnejšieho iného predajcu |
| Tréninkový blok DBX BUSHIDO KS-3 | 58.00 € | **57.90 €** | 5.5 % | **5.3 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skládací koloběžka NILS Extreme HM2009 šedá | 46.00 € | **45.90 €** | 5.2 % | **5.0 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ručný multimeter do auta UNI-T UT107 | 26.00 € | **25.90 €** | 6.1 % | **5.7 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 42.00 € | **41.90 €** | 10.0 % | **9.7 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 52.00 € | **51.90 €** | 7.3 % | **7.1 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9270p bezdrátová klávesnice černá | 37.00 € | **36.90 €** | 7.8 % | **7.5 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC S100neo AC/DC | 51.00 € | **50.90 €** | 35.7 % | **35.4 %** | 50.99 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.00 € | **12.90 €** | 6.3 % | **5.5 %** | 12.99 € | cena podľa najlacnejšieho iného predajcu |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.00 € | **13.90 €** | 11.0 % | **10.3 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 9.50 € | **9.40 €** | 100.1 % | **98.0 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Gracioso horizontal | 202.00 € | **201.90 €** | 12.9 % | **12.8 %** | 201.91 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 77.00 € | **76.90 €** | 17.6 % | **17.5 %** | 76.94 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Sony | 127.00 € | **126.90 €** | 6.6 % | **6.5 %** | 126.96 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 120.00 € | **119.90 €** | 13.7 % | **13.6 %** | 119.97 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 170.00 € | **169.90 €** | 18.5 % | **18.4 %** | 169.99 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 226.00 € | **225.90 €** | 43.8 % | **43.7 %** | 225.99 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 226.00 € | **225.90 €** | 35.5 % | **35.5 %** | 225.99 € | cena podľa najlacnejšieho iného predajcu |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-14

Vstup: `premiumstore-sk_2026-10-14_08-42.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6442**
- Návrh **zvýšiť** cenu: **96** produktov
- Návrh **znížiť** cenu: **369** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5977** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **30**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **367**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (96)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 789.90 € | **923.50 €** | 8.2 % | **26.5 %** | 923.73 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 806.00 € | **870.00 €** | 15.3 % | **24.5 %** | 870.20 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 206.50 € | **268.90 €** | 14.9 % | **49.6 %** | 268.99 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 237.00 € | **294.50 €** | 14.9 % | **42.8 %** | 294.79 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRKI517E41 | 458.90 € | **503.00 €** | 10.1 % | **20.6 %** | 503.10 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 153.50 € | **181.50 €** | 5.2 % | **24.4 %** | 181.87 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 37.50 € | **65.00 €** | 14.6 % | **98.7 %** | 65.49 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE Pro 2 XR | 330.00 € | **354.50 €** | 15.0 % | **23.5 %** | 354.81 € | cena podľa najlacnejšieho iného predajcu |
| ETA Sole 1625 90000 | 87.50 € | **104.50 €** | 10.4 % | **31.8 %** | 104.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 74.00 € | **89.50 €** | 14.7 % | **38.7 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| AMICA Plech hluboký 9065936 | 15.90 € | **28.90 €** | 10.4 % | **100.6 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM017 20 kg výrobník ľadových kociek (čierny) | 199.50 € | **212.00 €** | 16.0 % | **23.3 %** | 212.04 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 15.90 € | **26.50 €** | 10.2 % | **83.7 %** | 26.61 € | cena podľa najlacnejšieho iného predajcu |
| KMP H125 (CZ101AE) | 11.90 € | **22.50 €** | 12.9 % | **113.5 %** | 22.73 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 14.50 € | **25.00 €** | 12.8 % | **94.5 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat Avatto WT598-1T1 WiFi | 49.00 € | **59.50 €** | 14.6 % | **39.2 %** | 59.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na úpravu vlasov ANLAN Miracle | 59.00 € | **69.50 €** | 15.1 % | **35.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 40.00 € | **50.00 €** | 14.3 % | **42.9 %** | 50.17 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM005 15 kg výrobník ľadu (čierny) | 139.50 € | **149.50 €** | 13.6 % | **21.8 %** | 149.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Minix SF16T s uhlopriečkou 16" | 222.50 € | **232.00 €** | 16.8 % | **21.8 %** | 232.46 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 36.50 € | **45.00 €** | 11.1 % | **36.9 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné závesné svetlo Yeelight Crystal | 85.00 € | **93.00 €** | 14.8 % | **25.6 %** | 93.19 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 80.50 € | **88.50 €** | 5.0 % | **15.5 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 97.50 € | **104.50 €** | 23.6 % | **32.5 %** | 104.90 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 31.50 € | **37.50 €** | 14.7 % | **36.5 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-G GI100 | 37.90 € | **43.50 €** | 45.3 % | **66.7 %** | 43.72 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 34.90 € | **39.90 €** | 7.6 % | **23.0 %** | 39.97 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 34.90 € | **39.90 €** | 18.8 % | **35.8 %** | 39.97 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 101.00 € | **106.00 €** | 7.0 % | **12.3 %** | 106.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 101.00 € | **106.00 €** | 13.8 % | **19.4 %** | 106.39 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIO 655 BG | 170.00 € | **174.00 €** | 5.0 % | **7.5 %** | 174.03 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Minix SF10T s uhlopriečkou 10,5" | 124.90 € | **128.50 €** | 18.2 % | **21.6 %** | 128.83 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 123.00 € | **126.50 €** | 19.0 % | **22.4 %** | 126.51 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit MINI ULTRA Carplay a An... | 14.00 € | **17.00 €** | 14.9 % | **39.5 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T21B1 (čierny) | 129.50 € | **132.50 €** | 19.8 % | **22.6 %** | 132.79 € | cena podľa najlacnejšieho iného predajcu |
| 2 v 1 Diagnostic Scanner OBD2 and Battery Tester Anc... | 48.00 € | **51.00 €** | 13.5 % | **20.6 %** | 51.42 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP400R RGB | 126.00 € | **128.90 €** | 14.9 % | **17.6 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač SUPERIOR LG – Bluetooth... | 13.00 € | **15.90 €** | 28.3 % | **56.9 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ľadových kociek Euhomy IM001, 1,2 l, 12 kg ... | 59.90 € | **62.50 €** | 5.2 % | **9.8 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu |
| Pohybové čidlo ORBIS ISIMAT | 20.50 € | **23.00 €** | 5.6 % | **18.4 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (oranžová) | 42.00 € | **44.50 €** | 9.2 % | **15.7 %** | 44.64 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (čierna) | 42.00 € | **44.50 €** | 9.2 % | **15.7 %** | 44.64 € | cena podľa najlacnejšieho iného predajcu |
| Retro blesk GODOX Lux Junior II S | 75.50 € | **78.00 €** | 15.2 % | **19.0 %** | 78.17 € | cena podľa najlacnejšieho iného predajcu |
| Vodný chladič CPU Darkflash DV240S (biely) | 69.00 € | **71.50 €** | 16.1 % | **20.3 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 362.50 € | **365.00 €** | 13.6 % | **14.4 %** | 365.30 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RCSA240K40SN | 253.00 € | **255.50 €** | 5.0 % | **6.0 %** | 255.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **14.90 €** | 15.2 % | **37.3 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| City Boss RS350 černá | 317.50 € | **319.90 €** | 7.2 % | **8.0 %** | 320.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 31.00 € | **33.00 €** | 13.5 % | **20.9 %** | 33.23 € | cena podľa najlacnejšieho iného predajcu |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 18.50 € | **20.50 €** | 5.1 % | **16.5 %** | 20.89 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2354B2 Stepper (Black) | 59.50 € | **61.50 €** | 19.5 % | **23.5 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Nikon | 237.00 € | **238.90 €** | 14.9 % | **15.9 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada hasičských vozidel 26305 | 17.00 € | **18.50 €** | 5.3 % | **14.6 %** | 18.59 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1610 | 46.00 € | **47.50 €** | 7.2 % | **10.7 %** | 47.69 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 50.00 € | **51.50 €** | 60.6 % | **65.4 %** | 51.71 € | cena podľa najlacnejšieho iného predajcu |
| Sada dětského nářadí KIDS 12 SIXTOL | 21.50 € | **23.00 €** | 4.6 % | **11.9 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu |
| Čítacia lampa Yeelight Led Neck Book Light | 11.50 € | **13.00 €** | 15.7 % | **30.8 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 45.50 € | **47.00 €** | 11.4 % | **15.1 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 10.50 € | **12.00 €** | 5.9 % | **21.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Fifine Tank1 (biely) | 68.50 € | **69.90 €** | 34.9 % | **37.7 %** | 69.93 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 47.50 € | **48.50 €** | 31.4 % | **34.1 %** | 48.57 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 39.50 € | **40.50 €** | 7.7 % | **10.4 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7160 | 21.50 € | **22.50 €** | 6.3 % | **11.3 %** | 22.59 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 76.90 € | **77.90 €** | 5.4 % | **6.7 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 76.90 € | **77.90 €** | 8.6 % | **10.0 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.00 € | **39.00 €** | 19.1 % | **22.2 %** | 39.10 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 220.90 € | **221.90 €** | 27.7 % | **28.2 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCJ30E | 17.50 € | **18.50 €** | 7.9 % | **14.1 %** | 18.65 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1019 | 12.50 € | **13.50 €** | 7.3 % | **15.9 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 13.00 € | **14.00 €** | 5.2 % | **13.3 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 13.00 € | **14.00 €** | 8.7 % | **17.1 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Fifine Tank6 (biely) | 71.50 € | **72.50 €** | 20.3 % | **22.0 %** | 72.88 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603-Outdoor vonkajší AP, AX18... | 121.00 € | **121.90 €** | 5.2 % | **6.0 %** | 121.92 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 126.00 € | **126.50 €** | 15.4 % | **15.9 %** | 126.53 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 319.50 € | **320.00 €** | 12.8 % | **13.0 %** | 320.03 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 286.50 € | **287.00 €** | 16.1 % | **16.3 %** | 287.05 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 295.50 € | **296.00 €** | 12.7 % | **12.9 %** | 296.05 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 24.00 € | **24.50 €** | 21.9 % | **24.4 %** | 24.56 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 319.50 € | **320.00 €** | 19.6 % | **19.8 %** | 320.08 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-BL modrý, ... | 292.00 € | **292.50 €** | 37.9 % | **38.1 %** | 292.80 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 222.50 € | **223.00 €** | 16.3 % | **16.6 %** | 223.40 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Olympus | 90.50 € | **90.90 €** | 20.1 % | **20.6 %** | 90.93 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.50 € | **159.90 €** | 6.6 % | **6.9 %** | 159.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight časový spínač, týždeň, 1 režim | 3.80 € | **4.00 €** | 17.5 % | **23.7 %** | 4.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **5.60 €** | 29.9 % | **34.7 %** | 5.69 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 52.90 € | **53.00 €** | 9.4 % | **9.6 %** | 53.03 € | cena podľa najlacnejšieho iného predajcu |
| Chytrý senzor TP-Link KE110 Smart, teplomer | 38.90 € | **39.00 €** | 6.0 % | **6.3 %** | 39.23 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 29.90 € | **30.00 €** | 6.3 % | **6.6 %** | 30.40 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 22.90 € | **23.00 €** | 5.8 % | **6.2 %** | 23.46 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 126.90 € | **127.00 €** | 11.5 % | **11.6 %** | 127.02 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 155.90 € | **156.00 €** | 11.5 % | **11.6 %** | 156.03 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 132.90 € | **133.00 €** | 7.0 % | **7.1 %** | 133.04 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT4000 74 Wh štartér | 116.90 € | **117.00 €** | 17.7 % | **17.8 %** | 117.07 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 186.90 € | **187.00 €** | 7.8 % | **7.9 %** | 187.11 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 186.90 € | **187.00 €** | 7.8 % | **7.9 %** | 187.11 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 76.90 € | **77.00 €** | 36.7 % | **36.9 %** | 77.45 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (369)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 638.90 € | **476.00 €** | 45.1 % | **8.1 %** | 476.16 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 393.90 € | **298.50 €** | 44.2 % | **9.3 %** | 298.58 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 456.90 € | **363.00 €** | 36.1 % | **8.1 %** | 363.22 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 835.00 € | **756.00 €** | 22.8 % | **11.2 %** | 756.11 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 530.00 € | **462.50 €** | 23.3 % | **7.6 %** | 462.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 889.90 € | **826.50 €** | 18.5 % | **10.1 %** | 826.51 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 453.00 € | **396.00 €** | 22.8 % | **7.3 %** | 396.25 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP800IIIV | 387.00 € | **332.50 €** | 36.4 % | **17.2 %** | 332.71 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 902.50 € | **849.00 €** | 15.0 % | **8.2 %** | 849.40 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 819.90 € | **769.00 €** | 15.0 % | **7.9 %** | 769.47 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.50 € | **310.50 €** | 23.5 % | **9.4 %** | 310.88 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DG2P7D | 368.90 € | **330.00 €** | 28.5 % | **15.0 %** | 330.02 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 398.90 € | **361.00 €** | 20.7 % | **9.2 %** | 361.34 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 711.50 € | **675.00 €** | 11.7 % | **6.0 %** | 675.20 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 537.00 € | **503.50 €** | 15.9 % | **8.7 %** | 503.89 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RFSA240M43WN | 398.90 € | **365.50 €** | 42.7 % | **30.7 %** | 365.79 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 366.00 € | **333.00 €** | 19.4 % | **8.6 %** | 333.16 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 419.50 € | **388.00 €** | 17.5 % | **8.7 %** | 388.50 € | cena podľa najlacnejšieho iného predajcu |
| Beko Beyond B5RMFNE314X | 458.00 € | **426.90 €** | 14.9 % | **7.1 %** | 427.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 457.00 € | **426.00 €** | 14.9 % | **7.1 %** | 426.01 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD100SX | 435.50 € | **404.50 €** | 14.9 % | **6.8 %** | 404.53 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW7D384UCC | 636.50 € | **607.50 €** | 10.0 % | **5.0 %** | 517.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy GWD 485SB6-S | 378.90 € | **349.90 €** | 18.8 % | **9.7 %** | 349.99 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 588.00 € | **562.50 €** | 29.4 % | **23.8 %** | 562.71 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 492.00 € | **468.00 €** | 16.0 % | **10.3 %** | 468.19 € | cena podľa najlacnejšieho iného predajcu |
| HONOR 600 Lite 8+256GB Velvet Grey | 466.50 € | **445.00 €** | 10.1 % | **5.0 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| HONOR 600 Lite 8+256GB Sprout Green | 466.50 € | **445.00 €** | 10.1 % | **5.0 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 363A | 593.50 € | **573.00 €** | 10.0 % | **6.2 %** | 573.44 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 286.50 € | **266.50 €** | 15.5 % | **7.5 %** | 266.84 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **329.00 €** | 15.0 % | **8.5 %** | 329.18 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 10N3BX-S | 487.90 € | **469.00 €** | 14.4 % | **10.0 %** | 469.15 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 288.90 € | **270.00 €** | 14.9 % | **7.4 %** | 270.35 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 917.50 € | **898.90 €** | 19.5 % | **17.1 %** | 898.91 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210G | 468.50 € | **451.00 €** | 10.0 % | **5.9 %** | 451.49 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 230.00 € | **213.00 €** | 23.3 % | **14.2 %** | 213.08 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 233.00 € | **216.00 €** | 23.3 % | **14.3 %** | 216.18 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 233.00 € | **216.00 €** | 23.3 % | **14.3 %** | 216.18 € | cena podľa najlacnejšieho iného predajcu |
| WHIRLPOOL WBC 3C34 PF X | 402.50 € | **386.00 €** | 10.0 % | **5.5 %** | 386.10 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 471.00 € | **455.00 €** | 11.2 % | **7.4 %** | 455.05 € | cena podľa najlacnejšieho iného predajcu |
| Robotický vysávač ULTENIC T20 PRO | 241.50 € | **226.00 €** | 23.0 % | **15.1 %** | 226.32 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 261.50 € | **246.50 €** | 29.2 % | **21.8 %** | 246.64 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 261.50 € | **246.50 €** | 20.1 % | **13.2 %** | 246.64 € | cena podľa najlacnejšieho iného predajcu |
| WHIRLPOOL TDLR 5040L EU/N | 319.50 € | **304.90 €** | 10.2 % | **5.1 %** | 269.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje GKS5C71CLI | 499.00 € | **484.50 €** | 10.2 % | **7.0 %** | 484.60 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 61.90 € | **47.50 €** | 56.0 % | **19.7 %** | 47.78 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W15 | 236.50 € | **222.50 €** | 21.6 % | **14.4 %** | 222.63 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na starostlivosť o srsť domácich zvierat Pet... | 99.50 € | **85.50 €** | 44.2 % | **23.9 %** | 85.79 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 141.00 € | **127.00 €** | 20.0 % | **8.0 %** | 127.45 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 966.90 € | **953.00 €** | 16.5 % | **14.8 %** | 953.43 € | cena podľa najlacnejšieho iného predajcu |
| Samsung A185 Galaxy A18 128GB Black | 296.50 € | **283.00 €** | 10.0 % | **5.0 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung A185 Galaxy A18 128GB Blue | 296.50 € | **283.00 €** | 10.0 % | **5.0 %** | 219.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung A185 Galaxy A18 128GB Silver | 296.50 € | **283.00 €** | 10.0 % | **5.0 %** | 219.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko TB622ECWCS | 303.50 € | **290.00 €** | 15.0 % | **9.9 %** | 290.37 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 498.50 € | **485.50 €** | 12.9 % | **9.9 %** | 485.77 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 344.50 € | **331.50 €** | 11.8 % | **7.6 %** | 331.83 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 772.00 € | **759.00 €** | 40.6 % | **38.3 %** | 759.43 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie GODOX ML40R | 119.90 € | **107.00 €** | 31.0 % | **16.9 %** | 107.29 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 438.90 € | **426.50 €** | 14.8 % | **11.6 %** | 426.55 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 577.00 € | **565.00 €** | 10.3 % | **8.0 %** | 565.35 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 263.90 € | **252.00 €** | 15.0 % | **9.8 %** | 252.44 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 116.00 € | **104.50 €** | 16.9 % | **5.3 %** | 99.93 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| HONOR Pad X9a 128GB Gray | 253.50 € | **242.00 €** | 10.0 % | **5.0 %** | 240.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje RK14C2W4 | 266.50 € | **255.00 €** | 14.9 % | **10.0 %** | 255.09 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 313.50 € | **302.00 €** | 23.5 % | **19.0 %** | 302.21 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 64.50 € | **54.00 €** | 25.6 % | **5.2 %** | 53.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy BR 26SSB6G-S | 343.00 € | **332.50 €** | 13.5 % | **10.0 %** | 332.51 € | cena podľa najlacnejšieho iného predajcu |
| LG F4A10S7NWH | 335.00 € | **324.50 €** | 13.5 % | **9.9 %** | 324.69 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG2PS72A12 | 230.50 € | **220.50 €** | 15.0 % | **10.0 %** | 220.55 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 204.00 € | **194.00 €** | 11.6 % | **6.2 %** | 194.14 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 117.00 € | **107.50 €** | 30.0 % | **19.4 %** | 107.54 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 367.00 € | **357.50 €** | 26.5 % | **23.2 %** | 357.90 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 298.90 € | **290.00 €** | 16.3 % | **12.9 %** | 290.34 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 285.50 € | **277.00 €** | 14.9 % | **11.5 %** | 277.03 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 305.00 € | **296.50 €** | 15.0 % | **11.8 %** | 296.53 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.50 €** | 34.5 % | **8.5 %** | 35.75 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 208.00 € | **199.50 €** | 14.8 % | **10.1 %** | 199.80 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, modré ASG002 | 83.00 € | **74.90 €** | 27.3 % | **14.9 %** | 74.96 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 266.00 € | **258.00 €** | 25.2 % | **21.5 %** | 258.18 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN ZIP Trifold Cyber Projector | 475.50 € | **467.50 €** | 37.7 % | **35.3 %** | 467.72 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TB | 303.50 € | **295.50 €** | 11.5 % | **8.6 %** | 295.83 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 453.50 € | **445.50 €** | 11.2 % | **9.2 %** | 445.87 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 238.90 € | **231.00 €** | 16.6 % | **12.7 %** | 231.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C500. | 80.00 € | **72.50 €** | 40.7 % | **27.5 %** | 72.71 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, grey ASR002 | 74.50 € | **67.00 €** | 27.5 % | **14.6 %** | 67.22 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, oran. ASR001 | 74.50 € | **67.00 €** | 27.5 % | **14.6 %** | 67.22 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 173.00 € | **165.50 €** | 14.8 % | **9.8 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM016 12 kg výrobník ľadových kociek (čierny) | 83.90 € | **76.50 €** | 23.3 % | **12.4 %** | 76.90 € | cena podľa najlacnejšieho iného predajcu |
| HONOR Watch 5 Black | 151.90 € | **144.90 €** | 10.1 % | **5.1 %** | 112.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sušič vlasov MOVA Flip 10 | 182.00 € | **175.00 €** | 24.1 % | **19.3 %** | 175.28 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W9 | 162.00 € | **155.00 €** | 24.5 % | **19.1 %** | 155.38 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 238.90 € | **232.00 €** | 20.8 % | **17.4 %** | 232.22 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 327.50 € | **321.00 €** | 12.0 % | **9.8 %** | 321.05 € | cena podľa najlacnejšieho iného predajcu |
| Tefal QT2028F0 | 347.50 € | **341.00 €** | 8.9 % | **6.8 %** | 341.18 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 110.00 € | **103.90 €** | 11.3 % | **5.1 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vysávač ULTENIC AC1 Triflex s funkciou mopovania | 195.00 € | **189.00 €** | 23.3 % | **19.5 %** | 189.13 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 206.00 € | **200.00 €** | 11.6 % | **8.3 %** | 200.34 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10S | 342.50 € | **336.90 €** | 6.8 % | **5.1 %** | 333.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMICA 510CE1.30P(W) | 279.50 € | **274.00 €** | 10.1 % | **7.9 %** | 274.30 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 405.90 € | **400.50 €** | 8.3 % | **6.9 %** | 400.69 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10022 | 140.00 € | **135.00 €** | 11.7 % | **7.7 %** | 135.22 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 220A | 195.50 € | **190.50 €** | 8.8 % | **6.0 %** | 190.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **42.00 €** | 35.9 % | **21.4 %** | 42.40 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 30.00 € | **25.00 €** | 29.9 % | **8.2 %** | 25.41 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 178.00 € | **173.00 €** | 8.8 % | **5.7 %** | 173.46 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 478.90 € | **474.00 €** | 8.9 % | **7.8 %** | 474.35 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 694.50 € | **689.90 €** | 15.0 % | **14.2 %** | 689.98 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 236.00 € | **231.50 €** | 11.0 % | **8.9 %** | 231.51 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo infra sušička NIR+ | 180.50 € | **176.00 €** | 8.8 % | **6.0 %** | 176.03 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 193.50 € | **189.00 €** | 15.7 % | **13.0 %** | 189.06 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10W | 301.50 € | **297.00 €** | 8.0 % | **6.4 %** | 297.09 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 345.50 € | **341.00 €** | 7.0 % | **5.6 %** | 341.22 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 345.50 € | **341.00 €** | 11.6 % | **10.1 %** | 341.22 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338DD | 525.50 € | **521.00 €** | 7.0 % | **6.1 %** | 521.22 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EHF6547FXK | 218.50 € | **214.00 €** | 8.1 % | **5.8 %** | 214.32 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link SM6220-1M SFP+ Direct Attach Cable, 25... | 51.90 € | **47.50 €** | 22.8 % | **12.4 %** | 47.60 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 408.90 € | **404.50 €** | 8.4 % | **7.2 %** | 404.58 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 277.00 € | **273.00 €** | 11.5 % | **9.9 %** | 273.18 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 270.50 € | **266.50 €** | 10.8 % | **9.2 %** | 266.69 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer horkovzdušná fritéza ZAF9230 | 171.00 € | **167.00 €** | 8.6 % | **6.1 %** | 167.20 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 191.50 € | **187.50 €** | 16.3 % | **13.9 %** | 187.70 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 191.50 € | **187.50 €** | 16.3 % | **13.9 %** | 187.70 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 298.50 € | **294.50 €** | 14.0 % | **12.5 %** | 294.70 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 SensiCare® EW6T106C | 343.50 € | **339.50 €** | 15.0 % | **13.6 %** | 339.70 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 302.00 € | **298.00 €** | 14.9 % | **13.3 %** | 298.20 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 183.00 € | **179.00 €** | 19.9 % | **17.3 %** | 179.21 € | cena podľa najlacnejšieho iného predajcu |
| Braun IS5247.VI | 189.00 € | **185.00 €** | 11.5 % | **9.1 %** | 185.21 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2100 Mikrovlnná trouba s grilem | 111.50 € | **107.50 €** | 13.9 % | **9.8 %** | 107.73 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW5558E0 | 168.50 € | **164.50 €** | 8.5 % | **5.9 %** | 164.74 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 244.00 € | **240.00 €** | 8.0 % | **6.2 %** | 240.36 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 198.50 € | **194.50 €** | 9.0 % | **6.8 %** | 194.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer kuchyňský robot ZKR2010 | 174.00 € | **170.00 €** | 8.5 % | **6.0 %** | 170.44 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 46.00 € | **42.00 €** | 29.4 % | **18.2 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 183.90 € | **180.00 €** | 11.7 % | **9.3 %** | 180.10 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2014401 Zmrzlinovač | 176.90 € | **173.00 €** | 10.1 % | **7.7 %** | 173.14 € | cena podľa najlacnejšieho iného predajcu |
| Tefal XF652038 | 152.90 € | **149.00 €** | 8.9 % | **6.1 %** | 149.29 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 374.90 € | **371.00 €** | 11.7 % | **10.5 %** | 371.09 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 291.90 € | **288.00 €** | 10.1 % | **8.6 %** | 288.10 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **557.00 €** | 7.3 % | **6.6 %** | 557.30 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 49B8G-S | 318.90 € | **315.00 €** | 10.4 % | **9.1 %** | 315.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.50 € | **12.90 €** | 35.0 % | **5.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko VRT96425VD | 253.50 € | **249.90 €** | 7.7 % | **6.2 %** | 249.91 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 172.50 € | **168.90 €** | 8.9 % | **6.6 %** | 168.92 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Black | 49.00 € | **45.50 €** | 13.6 % | **5.5 %** | 42.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Beans 5 PRO Pink | 49.00 € | **45.50 €** | 13.6 % | **5.5 %** | 43.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo Sous Vide SV06 | 134.50 € | **131.00 €** | 11.4 % | **8.5 %** | 131.07 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.00 € | **324.50 €** | 7.7 % | **6.6 %** | 324.61 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 218.50 € | **215.00 €** | 7.7 % | **5.9 %** | 215.15 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 146.50 € | **143.00 €** | 8.9 % | **6.3 %** | 143.15 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 164.50 € | **161.00 €** | 8.4 % | **6.1 %** | 161.22 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 167.00 € | **163.50 €** | 8.5 % | **6.2 %** | 163.74 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 463.00 € | **459.50 €** | 6.8 % | **6.0 %** | 459.82 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 67.00 € | **63.50 €** | 39.1 % | **31.9 %** | 63.90 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DB | 172.50 € | **169.00 €** | 8.9 % | **6.7 %** | 169.43 € | cena podľa najlacnejšieho iného predajcu |
| BEKO CEG7302B | 241.90 € | **238.50 €** | 7.0 % | **5.5 %** | 238.58 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo CD03 rádio | 119.90 € | **116.50 €** | 10.1 % | **7.0 %** | 116.73 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 49.00 € | **45.90 €** | 27.5 % | **19.4 %** | 45.92 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Note 17 6/256GB Sky Teal | 270.50 € | **267.50 €** | 6.4 % | **5.2 %** | 228.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Základňa volantu MOZA RACING R25 RS091 | 995.50 € | **992.50 €** | 13.5 % | **13.2 %** | 992.59 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 361.50 € | **358.50 €** | 6.9 % | **6.0 %** | 358.64 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 297.00 € | **294.00 €** | 13.7 % | **12.5 %** | 294.15 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 297.00 € | **294.00 €** | 9.2 % | **8.1 %** | 294.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.00 € | **17.00 €** | 36.9 % | **16.3 %** | 17.36 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 330.50 € | **327.50 €** | 6.9 % | **5.9 %** | 327.87 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall RFC-676 PRO strojček na strihanie domácich ... | 40.00 € | **37.00 €** | 31.9 % | **22.0 %** | 37.42 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2022E1 | 37.50 € | **34.90 €** | 14.5 % | **6.6 %** | 34.96 € | cena podľa najlacnejšieho iného predajcu |
| AMIKO Mini HD265 | 48.00 € | **45.50 €** | 10.9 % | **5.2 %** | 42.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, neutrálna... | 13.50 € | **11.00 €** | 75.6 % | **43.1 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK1-EU | 16.50 € | **14.00 €** | 38.0 % | **17.1 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 157.00 € | **154.50 €** | 7.8 % | **6.1 %** | 154.69 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 330.00 € | **327.50 €** | 7.9 % | **7.1 %** | 327.86 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 13.00 € | **10.50 €** | 80.7 % | **45.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 25.00 € | **22.50 €** | 52.0 % | **36.8 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.68 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 23.00 € | **20.90 €** | 64.5 % | **49.4 %** | 20.98 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO White | 47.50 € | **45.50 €** | 10.2 % | **5.5 %** | 42.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Podsie 5 PRO Pink | 47.50 € | **45.50 €** | 10.2 % | **5.5 %** | 43.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Beans 5 POP White | 29.50 € | **27.50 €** | 13.9 % | **6.2 %** | 25.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Beans 5 POP Black | 29.50 € | **27.50 €** | 14.2 % | **6.5 %** | 25.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Beans 5 POP Pink | 29.50 € | **27.50 €** | 14.2 % | **6.5 %** | 25.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| EDIFIER ES60 reproduktor černý | 95.90 € | **93.90 €** | 12.3 % | **9.9 %** | 93.95 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo BonePro černá | 66.50 € | **64.50 €** | 9.2 % | **5.9 %** | 64.69 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 105.00 € | **103.00 €** | 11.5 % | **9.4 %** | 103.20 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 105.00 € | **103.00 €** | 7.3 % | **5.2 %** | 103.20 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 42.50 € | **40.50 €** | 14.1 % | **8.8 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 44.50 € | **42.50 €** | 45.1 % | **38.6 %** | 42.85 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Clip TWS09BK | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.41 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Clip TWS09SR | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.41 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Black | 49.00 € | **47.00 €** | 13.7 % | **9.0 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio AA 2700 mAh (tužkové) 4ks, dobíjacie | 13.00 € | **11.00 €** | 24.3 % | **5.2 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LIB60420CL | 264.50 € | **262.90 €** | 7.9 % | **7.2 %** | 263.00 € | cena podľa najlacnejšieho iného predajcu |
| BWT filtrační stanice Aqualizer | 63.50 € | **61.90 €** | 25.1 % | **21.9 %** | 61.94 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 60.50 € | **58.90 €** | 9.4 % | **6.5 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Black | 42.50 € | **41.00 €** | 13.8 % | **9.8 %** | 41.09 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Pink | 42.50 € | **41.00 €** | 13.8 % | **9.8 %** | 41.09 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 White | 42.50 € | **41.00 €** | 13.8 % | **9.8 %** | 41.09 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 309.00 € | **307.50 €** | 6.8 % | **6.3 %** | 307.64 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100WFB | 53.50 € | **52.00 €** | 13.8 % | **10.6 %** | 52.15 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05B1 | 109.00 € | **107.50 €** | 13.9 % | **12.4 %** | 107.66 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio C 5000 mAh (malé monočlánky) 2ks, dobí... | 20.00 € | **18.50 €** | 17.7 % | **8.8 %** | 18.70 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 18.00 € | **16.50 €** | 27.8 % | **17.2 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0026 | 20.50 € | **19.00 €** | 22.2 % | **13.2 %** | 19.30 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 20.00 € | **18.50 €** | 26.6 % | **17.1 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M01Pro UV AI | 26.50 € | **25.00 €** | 47.2 % | **38.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMK38HU0B | 228.90 € | **227.50 €** | 8.0 % | **7.4 %** | 227.80 € | cena podľa najlacnejšieho iného predajcu |
| Batéria AA MediaRange nabíjateľné USB-C Li-Ion , 1,5... | 14.00 € | **12.90 €** | 15.7 % | **6.6 %** | 12.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sous vide G21 Maestro, WiFi, 1200 W | 110.00 € | **108.90 €** | 14.1 % | **13.0 %** | 108.98 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 64.90 € | **63.90 €** | 21.9 % | **20.0 %** | 63.99 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Tapo C100 WiFi camera | 25.50 € | **24.50 €** | 10.9 % | **6.6 %** | 19.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux E3HB1-4GG | 24.50 € | **23.50 €** | 10.7 % | **6.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amica SHM 51071 W | 246.90 € | **245.90 €** | 8.0 % | **7.5 %** | 245.94 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Pink | 32.50 € | **31.50 €** | 13.2 % | **9.7 %** | 31.58 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 White | 32.50 € | **31.50 €** | 13.2 % | **9.7 %** | 31.58 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 215.90 € | **214.90 €** | 38906.3 % | **38725.7 %** | 215.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 650.90 € | **649.90 €** | 117497.1 % | **117316.4 %** | 650.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 54.50 € | **53.50 €** | 8.3 % | **6.3 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 54.50 € | **53.50 €** | 8.3 % | **6.3 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 54.50 € | **53.50 €** | 21.4 % | **19.2 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 54.00 € | **53.00 €** | 31.8 % | **29.4 %** | 53.14 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 234.00 € | **233.00 €** | 10.1 % | **9.7 %** | 233.20 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 351.00 € | **350.00 €** | 35.1 % | **34.7 %** | 350.20 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 21.50 € | **20.50 €** | 23.0 % | **17.3 %** | 20.72 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 620.00 € | **619.00 €** | 26.9 % | **26.7 %** | 619.40 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 8in1 docking station BW-TH16 USB 100 W LCD... | 48.50 € | **47.50 €** | 14.3 % | **11.9 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Zvuková karta Maono G1 Neo (biela) | 43.50 € | **42.50 €** | 11.2 % | **8.7 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Maono G1 Neo Sound Card Black | 43.50 € | **42.50 €** | 9.8 % | **7.3 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 98.50 € | **97.50 €** | 7.1 % | **6.0 %** | 97.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 88.50 € | **87.50 €** | 25.4 % | **24.0 %** | 87.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.00 € | **232.00 €** | 24.1 % | **23.5 %** | 232.50 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BMGB25332BG | 176.90 € | **176.00 €** | 8.7 % | **8.1 %** | 176.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.90 € | **25.00 €** | 54.3 % | **48.9 %** | 25.30 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 687.90 € | **687.00 €** | 36.6 % | **36.5 %** | 687.27 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 541.90 € | **541.00 €** | 45.9 % | **45.7 %** | 541.40 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 829.50 € | **828.90 €** | 27.4 % | **27.3 %** | 828.98 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Avacom SAFT LS26500 lítiový článok, veľkosť ... | 19.50 € | **18.90 €** | 10.5 % | **7.1 %** | 18.72 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Brita Fill&Go Vital fil.láhev 0,6l meruň | 13.50 € | **12.90 €** | 10.3 % | **5.4 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 79.50 € | **78.90 €** | 5.8 % | **5.0 %** | 78.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G1018900 Pákový kávovar | 123.50 € | **122.90 €** | 8.6 % | **8.1 %** | 122.94 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 148.50 € | **147.90 €** | 5.7 % | **5.3 %** | 147.99 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 118.50 € | **117.90 €** | 12.0 % | **11.4 %** | 118.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 477.50 € | **477.00 €** | 7.0 % | **6.8 %** | 477.07 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.20 € | **4.70 €** | 35.1 % | **22.1 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 136.00 € | **135.50 €** | 13.4 % | **13.0 %** | 135.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **14.00 €** | 54.3 % | **49.0 %** | 14.16 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 502.00 € | **501.50 €** | 8.2 % | **8.1 %** | 501.67 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 502.00 € | **501.50 €** | 22.9 % | **22.8 %** | 501.67 € | cena podľa najlacnejšieho iného predajcu |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 267.00 € | **266.50 €** | 22.7 % | **22.5 %** | 266.71 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 72.50 € | **72.00 €** | 19.9 % | **19.0 %** | 72.24 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 25.50 € | **25.00 €** | 17.3 % | **15.0 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 31.00 € | **30.50 €** | 30.3 % | **28.2 %** | 30.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 50.50 € | **50.00 €** | 8.1 % | **7.0 %** | 50.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 45.00 € | **44.50 €** | 7.1 % | **5.9 %** | 44.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 60.00 € | **59.50 €** | 9.3 % | **8.3 %** | 59.79 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 17.50 € | **17.00 €** | 21.6 % | **18.1 %** | 17.29 € | cena podľa najlacnejšieho iného predajcu |
| Barkan S320. B - natáčecí stojan pro TV (29-58'' 25k... | 60.00 € | **59.50 €** | 19.1 % | **18.1 %** | 59.79 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 80.50 € | **80.00 €** | 14.1 % | **13.4 %** | 80.29 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.50 € | **65.00 €** | 16.2 % | **15.3 %** | 65.29 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 76.50 € | **76.00 €** | 17.5 % | **16.8 %** | 76.29 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine MA10410 | 75.50 € | **75.00 €** | 7.6 % | **6.9 %** | 75.29 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine WS 9251 | 52.50 € | **52.00 €** | 6.2 % | **5.2 %** | 52.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 57.00 € | **56.50 €** | 14.7 % | **13.7 %** | 56.79 € | cena podľa najlacnejšieho iného predajcu |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 70.00 € | **69.50 €** | 6.8 % | **6.1 %** | 69.79 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.00 € | **84.50 €** | 15.4 % | **14.8 %** | 84.79 € | cena podľa najlacnejšieho iného predajcu |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.50 € | **16.00 €** | 14.2 % | **10.7 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 143.50 € | **143.00 €** | 5.4 % | **5.0 %** | 143.29 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač Evercon AH-707 | 53.00 € | **52.50 €** | 16.9 % | **15.8 %** | 52.79 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.50 € | **25.00 €** | 12.2 % | **10.0 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Auto GO/GO+ 64175 Tlapková Patro | 15.50 € | **15.00 €** | 10.7 % | **7.2 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GCO2011 Auto FIRST 65023 Tlapkov | 12.50 € | **12.00 €** | 11.4 % | **7.0 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64033 Mario Kart - Mario | 16.00 € | **15.50 €** | 14.3 % | **10.7 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64245 Porsche 992 GT3 No.14 | 16.00 € | **15.50 €** | 14.3 % | **10.7 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 71599 SkokánekGO/GO+/D143 | 24.50 € | **24.00 €** | 23.3 % | **20.7 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 15.50 € | **15.00 €** | 52.2 % | **47.3 %** | 15.33 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 315.00 € | **314.50 €** | 5.5 % | **5.3 %** | 314.85 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 344.50 € | **344.00 €** | 25.9 % | **25.7 %** | 344.39 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 115.00 € | **114.50 €** | 40.6 % | **39.9 %** | 114.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42323PC | 77.00 € | **76.50 €** | 5.8 % | **5.1 %** | 76.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 926.50 € | **926.00 €** | 17.7 % | **17.7 %** | 926.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 27.50 € | **27.00 €** | 12.5 % | **10.4 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 78.00 € | **77.50 €** | 8.4 % | **7.7 %** | 77.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 116.00 € | **115.50 €** | 8.2 % | **7.8 %** | 115.89 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 74.50 € | **74.00 €** | 9.4 % | **8.7 %** | 74.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 53.50 € | **53.00 €** | 11.7 % | **10.6 %** | 53.39 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Plus 575 Combo+dock white | 529.00 € | **528.50 €** | 9.9 % | **9.8 %** | 528.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 285.50 € | **285.00 €** | 41.4 % | **41.2 %** | 285.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 247.00 € | **246.50 €** | 24.6 % | **24.3 %** | 246.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 277.00 € | **276.50 €** | 9.1 % | **8.9 %** | 276.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 24.50 € | **24.00 €** | 10.8 % | **8.6 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 34.50 € | **34.00 €** | 13.4 % | **11.8 %** | 34.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 151.50 € | **151.00 €** | 7.3 % | **6.9 %** | 151.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 71.00 € | **70.50 €** | 7.7 % | **6.9 %** | 70.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 43.00 € | **42.50 €** | 9.3 % | **8.0 %** | 42.89 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX35U PLUS AX 1800 adaptér... | 24.00 € | **23.50 €** | 7.5 % | **5.3 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 136.50 € | **136.00 €** | 19.3 % | **18.9 %** | 136.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 80.50 € | **80.00 €** | 38.3 % | **37.5 %** | 80.39 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 154.50 € | **154.00 €** | 23.6 % | **23.2 %** | 154.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 653.00 € | **652.50 €** | 5.1 % | **5.0 %** | 652.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 311.00 € | **310.50 €** | 5.8 % | **5.6 %** | 310.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 610.00 € | **609.50 €** | 6.2 % | **6.1 %** | 609.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 640.00 € | **639.50 €** | 8.1 % | **8.0 %** | 639.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 688.00 € | **687.50 €** | 12.2 % | **12.1 %** | 687.89 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 13.00 € | **12.50 €** | 24.8 % | **20.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 33.00 € | **32.50 €** | 15.4 % | **13.7 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 248.00 € | **247.50 €** | 21.3 % | **21.0 %** | 247.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 121.50 € | **121.00 €** | 13.7 % | **13.2 %** | 121.42 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic JUNE-60 V2 | 70.50 € | **70.00 €** | 19.2 % | **18.4 %** | 70.44 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.50 € | **217.00 €** | 13.8 % | **13.6 %** | 217.45 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.50 € | **217.00 €** | 36.9 % | **36.6 %** | 217.45 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone X1 megaphone and distorting voc... | 120.50 € | **120.00 €** | 33.3 % | **32.7 %** | 120.45 € | cena podľa najlacnejšieho iného predajcu |
| Nástenné držiaky na TV Perlegear PGMFK6 26-60" | 19.50 € | **19.00 €** | 23.0 % | **19.8 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto Stereo Looper | 145.50 € | **145.00 €** | 29.7 % | **29.3 %** | 145.46 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.50 € | **114.00 €** | 17.8 % | **17.3 %** | 114.48 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 54.50 € | **54.00 €** | 14.0 % | **13.0 %** | 54.49 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 318.50 € | **318.00 €** | 18.6 % | **18.4 %** | 318.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 64.50 € | **64.00 €** | 18.8 % | **17.9 %** | 64.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 43.50 € | **43.00 €** | 40.0 % | **38.4 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 141.50 € | **141.00 €** | 6.6 % | **6.2 %** | 141.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 143.50 € | **143.00 €** | 8.0 % | **7.6 %** | 143.50 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.90 € | **208.50 €** | 16.8 % | **16.6 %** | 208.79 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone E1 vocal echo/delay pedál | 178.90 € | **178.50 €** | 64.6 % | **64.2 %** | 178.80 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone R1 | 178.90 € | **178.50 €** | 37.2 % | **36.9 %** | 178.80 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 93.90 € | **93.50 €** | 17.8 % | **17.3 %** | 93.85 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 76.90 € | **76.50 €** | 17.4 % | **16.8 %** | 76.90 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 W portable label printer (blue) | 66.90 € | **66.50 €** | 9.6 % | **9.0 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-WW, 10 m,... | 7.20 € | **6.80 €** | 44.5 % | **36.5 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 14.90 € | **14.50 €** | 47.0 % | **43.1 %** | 14.62 € | cena podľa najlacnejšieho iného predajcu |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 13.90 € | **13.50 €** | 38.0 % | **34.0 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7981 | 34.90 € | **34.50 €** | 6.3 % | **5.1 %** | 34.69 € | cena podľa najlacnejšieho iného predajcu |
| Carrera EVO 27876 Porsche 911 GT3 R | 41.90 € | **41.50 €** | 14.8 % | **13.7 %** | 41.69 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix venkovní kamera 4v1 s ... | 56.90 € | **56.50 €** | 17.1 % | **16.2 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 334.90 € | **334.50 €** | 22.7 % | **22.5 %** | 334.69 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.90 € | **369.50 €** | 7.1 % | **7.0 %** | 369.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.30 € | **7.10 €** | 45.5 % | **41.5 %** | 7.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.90 € | **6.70 €** | 17.9 % | **14.4 %** | 6.79 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.60 € | **3.40 €** | 59.9 % | **51.1 %** | 3.49 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les a jeleň Solight 1V223-A,... | 5.70 € | **5.50 €** | 44.4 % | **39.3 %** | 5.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.00 € | **8.80 €** | 8.4 % | **6.0 %** | 8.89 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri Carbon 2 | 372.00 € | **371.90 €** | 7.4 % | **7.4 %** | 371.97 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 472.00 € | **471.90 €** | 9.1 % | **9.0 %** | 471.99 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx QX1222USB mixpult s USB a efektmi | 283.00 € | **282.90 €** | 55.0 % | **54.9 %** | 282.99 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 497.00 € | **496.90 €** | 5.4 % | **5.4 %** | 497.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **19.90 €** | 44.9 % | **44.2 %** | 19.91 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V35 s Dynamický mikrofon | 59.00 € | **58.90 €** | 38.5 % | **38.2 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 17.00 € | **16.90 €** | 35.0 % | **34.2 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 46.00 € | **45.90 €** | 19.1 % | **18.8 %** | 45.98 € | cena podľa najlacnejšieho iného predajcu |
| Kovový LED svietnik Solight 1V280, 40 cm, 5 LED, čierny | 21.00 € | **20.90 €** | 22.6 % | **22.0 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1016501 | 30.00 € | **29.90 €** | 10.8 % | **10.4 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.90 € | **6.80 €** | 42.4 % | **40.3 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 3.90 € | **3.80 €** | 45.4 % | **41.7 %** | 3.87 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-M, 5 m, v... | 5.10 € | **5.00 €** | 26.4 % | **23.9 %** | 5.09 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.00 € | **8.90 €** | 27.3 % | **25.8 %** | 9.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 9.50 € | **9.40 €** | 100.1 % | **98.0 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 170.00 € | **169.90 €** | 18.4 % | **18.4 %** | 169.92 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 120.00 € | **119.90 €** | 13.7 % | **13.6 %** | 119.92 € | cena podľa najlacnejšieho iného predajcu |
| Behringer U-PHORIA STUDIO PRO recording/podcast boundle | 133.00 € | **132.90 €** | 10.0 % | **10.0 %** | 132.95 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **70.90 €** | 14.6 % | **14.4 %** | 70.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 90.00 € | **89.90 €** | 15.5 % | **15.4 %** | 89.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 80.00 € | **79.90 €** | 15.3 % | **15.2 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 103.00 € | **102.90 €** | 14.2 % | **14.1 %** | 102.99 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA38F2K7NXBB | 137.00 € | **136.90 €** | 13.7 % | **13.6 %** | 136.99 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 163.00 € | **162.90 €** | 21.6 % | **21.5 %** | 162.99 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 153.00 € | **152.90 €** | 19.7 % | **19.6 %** | 152.99 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 128.00 € | **127.90 €** | 17.5 % | **17.4 %** | 127.99 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 126.00 € | **125.90 €** | 9.9 % | **9.8 %** | 126.00 € | cena podľa najlacnejšieho iného predajcu |

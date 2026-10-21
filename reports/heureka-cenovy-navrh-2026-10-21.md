# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-21

Vstup: `premiumstore-sk_2026-10-21_14-03.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6252**
- Návrh **zvýšiť** cenu: **30** produktov
- Návrh **znížiť** cenu: **57** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6165** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **6**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **338**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (30)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Softbox Neewer 65 cm | 89.50 € | **111.50 €** | 38.4 % | **72.4 %** | 111.81 € | cena podľa najlacnejšieho iného predajcu |
| Edifier SS02C stojany pre reproduktory Edifier S2000... | 129.50 € | **149.00 €** | 15.1 % | **32.4 %** | 149.37 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 43.50 € | **62.90 €** | 15.0 % | **66.3 %** | 62.96 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 255.00 € | **269.50 €** | 14.9 % | **21.4 %** | 269.79 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600Bi s dvojfare... | 126.00 € | **136.00 €** | 14.9 % | **24.0 %** | 136.21 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA NS-AW592 WHITE 1 karton | 239.50 € | **246.00 €** | 6.4 % | **9.3 %** | 246.05 € | cena podľa najlacnejšieho iného predajcu |
| Masážní přístroj šíje a zad, REBEL ACTIVE RBA-6005 | 32.50 € | **39.00 €** | 7.0 % | **28.4 %** | 39.33 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátor Lipo Gens Ace G-Tech 3300mAh 22,2V 60C 6S... | 67.50 € | **71.00 €** | 15.2 % | **21.2 %** | 71.38 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta GZ5436E0 | 295.90 € | **299.00 €** | 10.1 % | **11.2 %** | 299.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB46E838 | 60.50 € | **62.50 €** | 12.6 % | **16.3 %** | 62.84 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 13.00 € | **15.00 €** | 17.6 % | **35.7 %** | 15.36 € | cena podľa najlacnejšieho iného predajcu |
| LED pásik YEELIGHT Obsid RGBIC YLFWD-0025 | 50.90 € | **52.50 €** | 15.3 % | **18.9 %** | 52.88 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **17.50 €** | 15.3 % | **26.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo elektrický rotační čistič PS01 | 26.90 € | **28.00 €** | 10.2 % | **14.7 %** | 28.07 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.50 € | **188.00 €** | 10.4 % | **10.6 %** | 188.01 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 152.00 € | **152.50 €** | 31.1 % | **31.5 %** | 152.53 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A35 5G FIXOP3-1262-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.07 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA37BE AX 1200, WiFi ... | 33.00 € | **33.50 €** | 10.3 % | **12.0 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 163.00 € | **163.50 €** | 12.4 % | **12.7 %** | 163.60 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.00 € | **15.50 €** | 16.9 % | **20.8 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.00 € | **296.50 €** | 12.6 % | **12.8 %** | 296.66 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 830.50 € | **831.00 €** | 27.5 % | **27.6 %** | 831.19 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 315.00 € | **315.50 €** | 5.5 % | **5.6 %** | 315.70 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 320.00 € | **320.50 €** | 13.0 % | **13.1 %** | 320.70 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 125.50 € | **125.90 €** | 20.6 % | **21.0 %** | 125.95 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES206XPP-M2 5x 2,5GLan s PoE++, 1x 10... | 175.50 € | **175.90 €** | 5.3 % | **5.6 %** | 175.95 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 40.50 € | **40.90 €** | 37.1 % | **38.5 %** | 40.91 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 497.90 € | **498.00 €** | 5.6 % | **5.6 %** | 498.30 € | cena podľa najlacnejšieho iného predajcu |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 19.90 € | **20.00 €** | 12.1 % | **12.7 %** | 20.02 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.90 € | **138.00 €** | 15.5 % | **15.6 %** | 138.03 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (57)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 386.00 € | **249.00 €** | 92.6 % | **24.2 %** | 249.46 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 754.00 € | **655.50 €** | 61.7 % | **40.6 %** | 655.67 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 126 | 519.50 € | **431.50 €** | 33.8 % | **11.2 %** | 431.58 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTX1 Pro S, Twin | 322.50 € | **279.00 €** | 22.5 % | **6.0 %** | 279.50 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.50 € | **175.00 €** | 36.5 % | **9.9 %** | 175.21 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Mini LED UE55M70H | 507.50 € | **484.50 €** | 10.0 % | **5.0 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Domo DO9308I | 244.50 € | **221.50 €** | 23.3 % | **11.7 %** | 221.79 € | cena podľa najlacnejšieho iného predajcu |
| Samsung QE32LS03CB | 483.50 € | **461.50 €** | 10.1 % | **5.0 %** | 353.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DQX90 (čierna) | 138.90 € | **117.00 €** | 37.8 % | **16.1 %** | 117.38 € | cena podľa najlacnejšieho iného predajcu |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 149.50 € | **128.00 €** | 39.0 % | **19.0 %** | 128.50 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na riadidlá PXN-A10 | 94.00 € | **75.00 €** | 37.9 % | **10.0 %** | 75.19 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 558.50 € | **543.00 €** | 44.6 % | **40.6 %** | 543.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 59.50 € | **47.00 €** | 54.1 % | **21.7 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 64.00 € | **53.00 €** | 61.8 % | **34.0 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 77.90 € | **67.00 €** | 46.9 % | **26.4 %** | 67.21 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC čierne | 139.00 € | **128.50 €** | 34.1 % | **23.9 %** | 128.54 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 59.50 € | **49.00 €** | 35.0 % | **11.2 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 39.00 € | **28.50 €** | 96.0 % | **43.2 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo SC750W Turbo | 98.50 € | **88.00 €** | 24.7 % | **11.4 %** | 88.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 68.90 € | **59.00 €** | 49.8 % | **28.3 %** | 59.17 € | cena podľa najlacnejšieho iného predajcu |
| Merač elektromagnetického poľa Habotest HT627 | 49.00 € | **40.00 €** | 39.6 % | **14.0 %** | 40.33 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LA300R | 464.90 € | **456.00 €** | 15.0 % | **12.8 %** | 456.03 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre modely E30 Ultra/P10 Ultra | 27.00 € | **18.50 €** | 68.2 % | **15.3 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 54.00 € | **45.50 €** | 31.9 % | **11.1 %** | 45.84 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 23-60" Perlesmith PSTVMC06 | 59.50 € | **51.00 €** | 42.0 % | **21.7 %** | 51.42 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 90.00 € | **82.50 €** | 14.8 % | **5.2 %** | 78.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Profesionálny statív PGYTECH MANTISPOD Z | 47.00 € | **39.50 €** | 70.3 % | **43.1 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Neewer BP66 štúdiový set dve LED lampy + filtre + st... | 46.00 € | **39.00 €** | 42.6 % | **20.9 %** | 39.29 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24440-56 | 112.90 € | **106.50 €** | 11.6 % | **5.2 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rojeco 3L automatický dávkovač krmiva v tlačidlovej ... | 40.00 € | **34.00 €** | 37.7 % | **17.0 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 43.50 € | **38.00 €** | 53.2 % | **33.9 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 249.50 € | **244.00 €** | 23.9 % | **21.2 %** | 244.50 € | cena podľa najlacnejšieho iného predajcu |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 29.90 € | **24.50 €** | 49.4 % | **22.4 %** | 24.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.50 € | **18.50 €** | 33.8 % | **5.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 13.00 € | **9.50 €** | 51.2 % | **10.5 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 255.00 € | **252.00 €** | 46.4 % | **44.7 %** | 252.04 € | cena podľa najlacnejšieho iného predajcu |
| Termostat MOES ZHT-SR-GA s technológiou ZigBee pre v... | 55.90 € | **53.00 €** | 21.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Puzdro PGYTECH For Mavic 3 Pro/Mavic 3 Classic/Mavic... | 41.00 € | **38.50 €** | 53.5 % | **44.2 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 48.50 € | **46.50 €** | 23.1 % | **18.0 %** | 46.88 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1004500 | 50.50 € | **48.50 €** | 10.0 % | **5.7 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo bílé | 81.50 € | **79.90 €** | 7.5 % | **5.4 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 42.00 € | **40.50 €** | 25.5 % | **21.0 %** | 40.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 17.00 € | **15.50 €** | 26.7 % | **15.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.00 € | **232.00 €** | 23.8 % | **23.2 %** | 232.04 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 28.50 € | **27.50 €** | 10.0 % | **6.2 %** | 27.56 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 316.00 € | **315.00 €** | 17.7 % | **17.3 %** | 315.13 € | cena podľa najlacnejšieho iného predajcu |
| Softbox Neewer 85 cm | 88.00 € | **87.00 €** | 25.4 % | **24.0 %** | 87.17 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 219.90 € | **219.00 €** | 28.8 % | **28.3 %** | 219.21 € | cena podľa najlacnejšieho iného predajcu |
| Tréninkové háky REBEL RBA-2505 | 11.90 € | **11.00 €** | 20.8 % | **11.6 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **11.00 €** | 15.6 % | **6.8 %** | 11.26 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TBE400U BE6500, WiFi 7,  2... | 71.50 € | **70.90 €** | 14.2 % | **13.2 %** | 71.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 95.50 € | **95.00 €** | 17.4 % | **16.8 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.90 € | **28.50 €** | 11.0 % | **9.5 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin M Steel | 23.90 € | **23.50 €** | 9.5 % | **7.6 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS EM06P-EU Inteligentný monitor spotreby energi... | 73.00 € | **72.90 €** | 15.5 % | **15.4 %** | 72.98 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 3601 | 95.00 € | **94.90 €** | 9.1 % | **8.9 %** | 94.99 € | cena podľa najlacnejšieho iného predajcu |

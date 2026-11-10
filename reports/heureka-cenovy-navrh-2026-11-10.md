# Návrh na úpravu cien podľa Heureka porovnania — 2026-11-10

Vstup: `premiumstore-sk_2026-11-10_07-22.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6090**
- Návrh **zvýšiť** cenu: **143** produktov
- Návrh **znížiť** cenu: **412** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5535** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **50**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **344**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (143)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **770.00 €** | 26.6 % | **39.2 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **769.50 €** | 3.7 % | **13.1 %** | 784.82 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava stabilizátora iSteady MT3 Pro | 564.90 € | **621.00 €** | 25.5 % | **37.9 %** | 647.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **534.00 €** | 4.6 % | **15.1 %** | 554.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blesk Neewer Q6 | 464.50 € | **510.90 €** | 14.3 % | **25.7 %** | 601.47 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor UPERFECT M184T01 | 378.90 € | **416.50 €** | 26.5 % | **39.1 %** | 427.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 300.00 € | **330.00 €** | 15.0 % | **26.5 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **330.00 €** | 32.8 % | **45.9 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring EVEN REALITIES R1, veľkosť 11 | 292.00 € | **321.00 €** | 15.0 % | **26.4 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring EVEN REALITIES R1, veľkosť 13 | 292.00 € | **321.00 €** | 15.0 % | **26.4 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **310.50 €** | 27.3 % | **39.7 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nástenná nabíjačka Besen pre elektromobily BS20 11 l... | 338.00 € | **364.00 €** | 21.2 % | **30.5 %** | 371.59 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 261.00 € | **287.00 €** | 14.9 % | **26.4 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava na pripojenie vody pre automatické napĺňanie... | 255.50 € | **281.00 €** | 26.4 % | **39.0 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **266.00 €** | 10.8 % | **21.9 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **293.50 €** | 6.2 % | **15.6 %** | 299.61 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **271.50 €** | 30.7 % | **41.9 %** | 277.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **213.90 €** | 4.1 % | **14.5 %** | 220.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **210.50 €** | 4.4 % | **14.8 %** | 221.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **212.50 €** | 4.5 % | **14.1 %** | 217.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 10 | 292.00 € | **310.00 €** | 15.0 % | **22.1 %** | 316.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 329.00 € | **345.50 €** | 6.9 % | **12.2 %** | 352.74 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| beyerdynamic DT 250 250 Ohm | 163.90 € | **180.00 €** | 26.5 % | **38.9 %** | 268.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje BM201SG3DBG | 280.50 € | **296.00 €** | 7.6 % | **13.5 %** | 302.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor AURZEN Boom Mini Black | 234.50 € | **249.00 €** | 13.8 % | **20.9 %** | 254.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| AURZEN Boom Mini projektor | 234.50 € | **249.00 €** | 5.4 % | **11.9 %** | 254.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| OBSBOT Tiny 3 MIC Combo | 456.00 € | **469.00 €** | 5.5 % | **8.6 %** | 478.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 621.00 € | **634.00 €** | 6.7 % | **8.9 %** | 647.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Reproduktory Edifier R1855DB 2.0 (čierne) | 129.90 € | **142.00 €** | 11.6 % | **22.0 %** | 144.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **127.00 €** | 4.4 % | **14.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **121.50 €** | 14.9 % | **26.1 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| NEEWER SF120Q 120 cm parabolický softbox | 104.50 € | **114.90 €** | 14.8 % | **26.2 %** | 147.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **185.00 €** | 35.1 % | **42.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **105.00 €** | 6.2 % | **15.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 84.50 € | **92.90 €** | 5.2 % | **15.6 %** | 98.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **123.00 €** | 4.4 % | **11.7 %** | 125.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Grafický tablet Huion H1161 | 84.50 € | **92.50 €** | 25.9 % | **37.8 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **87.90 €** | 30.9 % | **43.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Booster UltraCap CSC 12/800 12 V, 800 A | 288.90 € | **296.50 €** | 10.6 % | **13.5 %** | 302.88 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| G3Ferrari Kuchyňský robot, G201200 Pasta | 184.90 € | **192.00 €** | 10.2 % | **14.4 %** | 196.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **93.50 €** | 4.2 % | **12.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **77.50 €** | 4.4 % | **14.8 %** | 79.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Čistička vzduchu MOVA P10 | 168.00 € | **175.00 €** | 9.0 % | **13.5 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje AF1800ST | 72.00 € | **79.00 €** | 20.8 % | **32.6 %** | 91.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **114.50 €** | 32.4 % | **40.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **81.90 €** | 6.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko PSKManGRAY | 61.00 € | **67.00 €** | 20.3 % | **32.1 %** | 68.93 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **67.50 €** | 31.6 % | **44.4 %** | 69.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| VU+ Bluetooth/IR diaľkový ovládač | 60.50 € | **66.50 €** | 14.0 % | **25.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 259.90 € | **265.90 €** | 15.0 % | **17.6 %** | 271.36 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TEESA TSA9017 teplovzdušný ventilátor s imitací krbu... | 62.50 € | **68.50 €** | 24.9 % | **36.9 %** | 77.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **68.50 €** | 18.0 % | **29.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **68.50 €** | 35.0 % | **47.9 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 260.00 € | **265.90 €** | 15.0 % | **17.6 %** | 271.36 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **97.90 €** | 34.8 % | **43.0 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 57.40 € | **62.90 €** | 30.1 % | **42.6 %** | 64.19 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TTL blesk GODOX V480 pre Sony | 155.00 € | **160.50 €** | 15.6 % | **19.7 %** | 164.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TC Electronic GAUSS TAPE ECHO | 57.50 € | **63.00 €** | 10.2 % | **20.7 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pásik na batériu pre VR BoboVR M3 Pro Plus | 58.00 € | **63.50 €** | 14.6 % | **25.5 %** | 68.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Neewer lighting tripod 400 cm | 58.50 € | **64.00 €** | 14.6 % | **25.4 %** | 88.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 174.90 € | **180.00 €** | 14.7 % | **18.1 %** | 184.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tesla Cook BBQ100 | 68.90 € | **73.90 €** | 10.6 % | **18.6 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| IMOU S800 PRO palubná kamera, 4K | 101.50 € | **106.50 €** | 6.6 % | **11.8 %** | 108.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Neweer TL21C RGB LED farebné foto svetlo | 54.00 € | **59.00 €** | 31.9 % | **44.1 %** | 64.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 51.50 € | **56.50 €** | 7.0 % | **17.4 %** | 64.19 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Robotický vysávač MOVA V50 Ultra Complete (čierny) | 582.00 € | **587.00 €** | 26.4 % | **27.5 %** | 599.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **53.50 €** | 6.1 % | **16.1 %** | 55.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| BEKO MGC 20100 W | 65.50 € | **70.00 €** | 14.8 % | **22.7 %** | 71.64 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava príslušenstva X40 Master | 44.90 € | **49.00 €** | 26.7 % | **38.3 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| STRONG LEAP S4 BOX / GOOGLE TV | 122.90 € | **127.00 €** | 10.2 % | **13.9 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ariete Breakfast Blender 576/03 černý | 40.00 € | **44.00 €** | 21.3 % | **33.4 %** | 45.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava príslušenstva pre Dreame L50s Pro Ultra | 69.50 € | **73.50 €** | 15.1 % | **21.7 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Slúchadlá Edifier W80 (béžové) | 85.50 € | **89.50 €** | 15.1 % | **20.5 %** | 91.59 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blender G21 Perfection brown | 200.50 € | **204.50 €** | 12.1 % | **14.3 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak na tablet SMALLRIG 2930 | 42.00 € | **46.00 €** | 14.9 % | **25.8 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava na starostlivosť o srsť domácich zvierat Pet... | 81.00 € | **84.90 €** | 14.9 % | **20.4 %** | 86.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **42.50 €** | 4.9 % | **14.6 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtové slúchadlá Edifier K750W (sivé) | 38.00 € | **41.50 €** | 14.5 % | **25.0 %** | 42.68 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Teplovzdušná fritéza MOVA FD10s Pro 6L 2000W (čierna) | 95.50 € | **99.00 €** | 37.8 % | **42.9 %** | 101.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Hlavný kefa DREAME pre modely H15 Pro Heat/H16 Pro S... | 34.50 € | **37.90 €** | 14.7 % | **26.0 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.00 €** | 5.4 % | **11.7 %** | 56.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 38.90 € | **41.90 €** | 40.4 % | **51.2 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **34.50 €** | 6.1 % | **16.2 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **92.50 €** | 39.0 % | **43.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **140.00 €** | 15.9 % | **18.1 %** | 143.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá Onikuma GT887 (biele) | 29.00 € | **31.50 €** | 25.9 % | **36.7 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LED videolampa SMALLRIG RF 05B Zoom | 40.50 € | **43.00 €** | 11.5 % | **18.4 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prevodovka PXN - usporiadanie H 7+1 | 72.00 € | **74.50 €** | 5.1 % | **8.7 %** | 76.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| InAkustik 003022010 Star Coil 2x2,5/10m | 25.00 € | **27.50 €** | 20.5 % | **32.5 %** | 31.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje SIK2200WB | 27.50 € | **30.00 €** | 34.1 % | **46.3 %** | 41.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje SIH2200BLC | 24.50 € | **26.90 €** | 32.4 % | **45.4 %** | 36.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **29.50 €** | 40.9 % | **53.1 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal Copertinto BL439G10 | 56.90 € | **59.00 €** | 5.6 % | **9.5 %** | 60.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Utierky do vysávača MOVA Z50 Ultra | 22.90 € | **25.00 €** | 26.7 % | **38.3 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **42.00 €** | 52.0 % | **59.6 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 63.90 € | **65.90 €** | 14.9 % | **18.5 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sati Hansi Doux et Suave 1000g zrno | 22.90 € | **24.90 €** | 11.5 % | **21.2 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **34.50 €** | 4.8 % | **11.3 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vrecká na prach (balenie po 6 ks) pre vysávač Dreame... | 20.00 € | **22.00 €** | 14.4 % | **25.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aroma difuzer Zortiva 28221 150ml se světelným efekt... | 20.00 € | **22.00 €** | 12.8 % | **24.1 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **41.50 €** | 53.2 % | **59.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 34.00 € | **35.50 €** | 7.2 % | **11.9 %** | 36.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kryt kamery SMALLRIG Sony ZV-E10 Grip | 62.50 € | **64.00 €** | 26.5 % | **29.5 %** | 65.31 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| NEDIS SAMP42222WT domovní zesilovač (1x vstup, 2x vý... | 28.00 € | **29.50 €** | 50.3 % | **58.3 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Vlákno Creality TPU (čierne) | 18.00 € | **19.50 €** | 15.1 % | **24.7 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje SIH1800TQC | 17.00 € | **18.50 €** | 30.8 % | **42.3 %** | 21.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Hlavná kefa DREAME pre modely H14 Mix/H15 Mix | 18.50 € | **20.00 €** | 15.9 % | **25.3 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GORENJE F4142PW | 236.50 € | **238.00 €** | 7.0 % | **7.7 %** | 242.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Resto 95501 Set nožů - 4 kusy | 18.50 € | **20.00 €** | 20.9 % | **30.7 %** | 27.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá ONIKUMA GT889 | 25.50 € | **26.90 €** | 26.0 % | **32.9 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aligator S6600 Duo 64GB Black | 78.90 € | **80.00 €** | 5.9 % | **7.4 %** | 82.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.90 € | **12.90 €** | 16.0 % | **25.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Maxxo FF0700A | 18.00 € | **19.00 €** | 10.5 % | **16.7 %** | 20.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 14.00 € | **15.00 €** | 23.2 % | **32.0 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filter DREAME pre H15 Mix | 13.50 € | **14.50 €** | 15.0 % | **23.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **11.90 €** | 9.5 % | **19.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Graef SKS 10002 | 119.50 € | **120.50 €** | 5.2 % | **6.1 %** | 123.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava batériových dosiek SMALLRIG 4064B V-Mount | 105.50 € | **106.50 €** | 39.0 % | **40.3 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ZGEMMA H8 2H SE Combo DVB-S2/T2/C 4K CA Enigma2 H.26... | 136.50 € | **137.50 €** | 25.3 % | **26.2 %** | 140.69 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| FIXED Opus pro Xiaomi 17T FIXOP3-1693-BK | 10.90 € | **11.90 €** | 13.0 % | **23.4 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H125 (CZ101AE) | 13.00 € | **14.00 €** | 22.9 % | **32.4 %** | 22.81 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **30.50 €** | 31.8 % | **35.2 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 58.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 19.50 € | **20.00 €** | 27.5 % | **30.8 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 3 LED sviečok s časovačom Solight 1V285, 10/13/... | 12.50 € | **13.00 €** | 43.7 % | **49.5 %** | 14.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 13.50 € | **14.00 €** | 21.8 % | **26.3 %** | 15.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 26.50 € | **27.00 €** | 21.4 % | **23.7 %** | 28.38 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 85.00 € | **85.50 €** | 15.7 % | **16.4 %** | 87.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **11.90 €** | 10.1 % | **14.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 11.50 € | **11.90 €** | 31.3 % | **35.9 %** | 12.95 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight nástenná lampička CELE, 1x GU10, biela | 8.50 € | **8.90 €** | 17.9 % | **23.5 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 13.50 € | **13.90 €** | 33.2 % | **37.1 %** | 14.98 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.50 € | **8.90 €** | 17.5 % | **23.1 %** | 9.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 25.50 € | **25.90 €** | 39.0 % | **41.2 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **42.90 €** | 38.6 % | **39.8 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **29.90 €** | 36.2 % | **37.0 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka elektromobilov Besen BS40 22 kW SOLAR-APP | 576.90 € | **577.00 €** | 39.0 % | **39.1 %** | 589.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pohybové čidlo ORBIS ISIMAT | 21.90 € | **22.00 €** | 12.7 % | **13.2 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H168CX (HP 302 Tri-colour XL) | 22.90 € | **23.00 €** | 58.3 % | **59.0 %** | 26.68 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| FIXED Opus Xia Red 17 5G, FIXOP3-1723-BK | 10.90 € | **11.00 €** | 13.0 % | **14.1 %** | 12.05 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| FIXED Opus XiaRN 17 FIXOP3-1727-BK | 10.90 € | **11.00 €** | 13.0 % | **14.1 %** | 12.05 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| FIXED Opus XRN17 Pro Max FIXOP3-1725-BK | 10.90 € | **11.00 €** | 13.0 % | **14.1 %** | 12.05 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Samsung VG-SCFF75TKBXC | 69.90 € | **70.00 €** | 10.3 % | **10.4 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |

## Návrh znížiť cenu (412)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **534.00 €** | 47.0 % | **16.2 %** | 534.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **485.50 €** | 29.8 % | **5.1 %** | 472.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor BlitzWolf BW-V11 | 375.15 € | **295.50 €** | 33.5 % | **5.2 %** | 291.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **785.90 €** | 32.6 % | **20.7 %** | 785.92 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **294.90 €** | 48.6 % | **18.4 %** | 294.92 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **281.50 €** | 32.7 % | **6.6 %** | 281.71 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **240.50 €** | 47.7 % | **18.2 %** | 240.88 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **166.50 €** | 39.1 % | **5.1 %** | 157.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **257.50 €** | 26.4 % | **5.2 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nástenná nabíjačka Besen pre elektromobily LX30  22 ... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **225.00 €** | 44.0 % | **18.0 %** | 225.25 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 855.00 € | **806.00 €** | 18.1 % | **11.3 %** | 806.02 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **180.00 €** | 44.4 % | **15.2 %** | 180.29 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **155.00 €** | 47.6 % | **14.5 %** | 155.38 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **229.90 €** | 25.6 % | **5.1 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **259.00 €** | 27.9 % | **10.3 %** | 259.09 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **209.50 €** | 41.5 % | **18.6 %** | 209.75 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **186.00 €** | 42.8 % | **17.8 %** | 186.38 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **184.50 €** | 42.3 % | **18.1 %** | 184.88 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **181.50 €** | 40.3 % | **18.3 %** | 181.63 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **132.00 €** | 43.8 % | **15.0 %** | 132.50 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **152.50 €** | 27.8 % | **5.1 %** | 143.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **104.50 €** | 50.0 % | **14.1 %** | 104.75 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **179.50 €** | 33.8 % | **13.2 %** | 179.55 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **179.50 €** | 33.5 % | **13.0 %** | 179.55 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **155.50 €** | 25.5 % | **5.2 %** | 141.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **145.50 €** | 45.0 % | **20.4 %** | 145.71 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 641.50 € | **612.00 €** | 10.1 % | **5.0 %** | 548.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Concept IDV5160wh | 406.50 € | **377.00 €** | 23.7 % | **14.7 %** | 377.50 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **271.00 €** | 32.8 % | **19.8 %** | 271.36 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **125.50 €** | 43.8 % | **16.6 %** | 125.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **271.90 €** | 33.2 % | **20.6 %** | 271.92 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **122.50 €** | 48.4 % | **20.6 %** | 122.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **272.50 €** | 32.9 % | **20.5 %** | 272.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **330.00 €** | 31.9 % | **21.7 %** | 330.39 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **172.50 €** | 39.8 % | **20.6 %** | 172.58 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **99.90 €** | 33.7 % | **5.1 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **82.50 €** | 58.2 % | **19.0 %** | 82.71 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.64 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **143.50 €** | 44.5 % | **22.6 %** | 143.67 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **154.90 €** | 42.8 % | **22.6 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 812.90 € | **788.50 €** | 8.3 % | **5.0 %** | 784.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **148.50 €** | 42.0 % | **22.4 %** | 148.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **223.50 €** | 35.5 % | **22.6 %** | 223.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **76.50 €** | 38.1 % | **5.7 %** | 72.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **115.00 €** | 46.2 % | **22.4 %** | 115.33 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **102.90 €** | 49.0 % | **22.6 %** | 103.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **65.90 €** | 41.3 % | **6.9 %** | 65.94 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **129.00 €** | 39.9 % | **20.6 %** | 129.13 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 715.50 € | **695.00 €** | 15.0 % | **11.7 %** | 695.28 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **80.50 €** | 30.6 % | **5.2 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **57.00 €** | 63.8 % | **22.2 %** | 57.25 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **93.50 €** | 52.1 % | **26.2 %** | 93.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **122.50 €** | 35.7 % | **17.5 %** | 122.75 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **81.90 €** | 28.6 % | **5.4 %** | 75.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.00 €** | 40.2 % | **12.5 %** | 72.49 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **111.50 €** | 34.0 % | **15.7 %** | 111.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **119.90 €** | 38.2 % | **20.7 %** | 119.96 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **118.50 €** | 37.5 % | **20.5 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **55.50 €** | 50.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.50 €** | 44.8 % | **11.1 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **59.00 €** | 41.2 % | **11.4 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **31.50 €** | 71.1 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **124.90 €** | 22.1 % | **8.6 %** | 124.93 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **59.50 €** | 52.1 % | **20.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **120.00 €** | 36.1 % | **20.7 %** | 120.04 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 334.90 € | **319.90 €** | 10.0 % | **5.1 %** | 309.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **75.00 €** | 42.8 % | **19.4 %** | 75.46 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **235.50 €** | 34.0 % | **26.2 %** | 235.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **120.90 €** | 35.0 % | **20.6 %** | 120.96 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **111.00 €** | 31.2 % | **16.5 %** | 111.29 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 218.90 € | **204.90 €** | 12.2 % | **5.0 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 218.90 € | **204.90 €** | 12.2 % | **5.0 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 83.50 € | **69.50 €** | 68.7 % | **40.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **103.00 €** | 36.4 % | **20.2 %** | 103.38 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 49.72 € | **35.90 €** | 50.4 % | **8.6 %** | 35.93 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **76.00 €** | 36.8 % | **15.9 %** | 76.25 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **54.00 €** | 42.9 % | **15.0 %** | 54.33 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **49.50 €** | 34.8 % | **6.7 %** | 49.84 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **61.90 €** | 39.2 % | **15.2 %** | 61.96 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **77.50 €** | 40.2 % | **20.5 %** | 77.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **62.50 €** | 25.9 % | **5.1 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **87.90 €** | 37.3 % | **20.7 %** | 87.96 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **123.50 €** | 34.2 % | **22.5 %** | 123.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **51.00 €** | 47.1 % | **20.0 %** | 51.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **83.50 €** | 19.4 % | **5.2 %** | 81.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.90 €** | 52.4 % | **16.0 %** | 35.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **55.90 €** | 30.4 % | **8.6 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **38.50 €** | 42.2 % | **10.1 %** | 38.53 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **282.00 €** | 22.9 % | **18.3 %** | 282.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **86.50 €** | 35.6 % | **20.4 %** | 86.71 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **227.00 €** | 23.4 % | **17.8 %** | 227.05 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.29 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LIB60420CL | 270.00 € | **259.50 €** | 9.4 % | **5.2 %** | 244.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **126.90 €** | 46.5 % | **35.4 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **82.00 €** | 35.2 % | **20.1 %** | 82.38 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BMX201AG1BG | 218.50 € | **208.50 €** | 10.2 % | **5.1 %** | 204.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **25.00 €** | 49.8 % | **7.4 %** | 25.20 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **65.00 €** | 33.5 % | **15.9 %** | 65.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **60.00 €** | 29.7 % | **11.7 %** | 60.31 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 56.3 % | **21.2 %** | 31.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **71.00 €** | 31.3 % | **16.6 %** | 71.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **28.50 €** | 40.3 % | **6.8 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **104.00 €** | 30.8 % | **20.6 %** | 104.13 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **38.50 €** | 29.1 % | **5.4 %** | 37.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **58.50 €** | 47.3 % | **28.3 %** | 58.83 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **29.00 €** | 49.3 % | **15.7 %** | 29.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 40.3 % | **8.7 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **21.50 €** | 45.3 % | **5.1 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.50 €** | 37.7 % | **14.9 %** | 41.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.90 €** | 14.9 % | **10.8 %** | 219.97 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.90 €** | 38.3 % | **9.8 %** | 30.96 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 41.2 % | **13.0 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **21.90 €** | 42.7 % | **5.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **41.90 €** | 45.5 % | **22.6 %** | 41.92 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **67.00 €** | 17.3 % | **5.0 %** | 65.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.50 €** | 61.4 % | **22.4 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.50 €** | 42.1 % | **5.8 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **42.00 €** | 55.4 % | **31.3 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.50 €** | 29.4 % | **15.2 %** | 62.52 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **102.00 €** | 29.4 % | **20.4 %** | 102.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 47.4 % | **39.9 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.50 €** | 64.9 % | **18.4 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.90 €** | 78.5 % | **18.0 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **59.50 €** | 22.9 % | **8.9 %** | 59.54 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 71.3 % | **16.2 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **57.00 €** | 31.3 % | **15.9 %** | 57.29 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **35.00 €** | 44.4 % | **18.8 %** | 35.27 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.50 €** | 37.3 % | **19.0 %** | 47.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **25.00 €** | 42.7 % | **10.5 %** | 25.20 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 60.4 % | **16.6 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **37.50 €** | 26.3 % | **6.2 %** | 36.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 64.9 % | **13.3 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 40.9 % | **14.9 %** | 30.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.50 €** | 32.9 % | **15.7 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| DOMO DO244SV | 146.50 € | **139.90 €** | 10.2 % | **5.2 %** | 129.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Slúchadlá TWS Edifier NeoDots, ANC (čierne) | 105.00 € | **98.50 €** | 15.0 % | **7.9 %** | 98.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.50 €** | 29.9 % | **15.9 %** | 53.67 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.90 €** | 26.6 % | **9.8 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.50 €** | 40.2 % | **22.7 %** | 43.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.50 €** | 53.5 % | **19.2 %** | 21.63 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **21.00 €** | 36.3 % | **5.4 %** | 20.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **21.00 €** | 36.7 % | **5.7 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Wallbox Qoltec 52723, 22kW, Typ 2, 5 m kabel, 400V, ... | 316.00 € | **309.90 €** | 9.9 % | **7.7 %** | 310.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 57.4 % | **18.3 %** | 18.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.50 €** | 34.1 % | **15.8 %** | 38.58 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **13.90 €** | 52.9 % | **6.3 %** | 13.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **16.50 €** | 47.6 % | **8.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **14.00 €** | 74.0 % | **21.9 %** | 14.13 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **31.50 €** | 28.5 % | **8.1 %** | 31.86 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.50 €** | 33.8 % | **20.1 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5RCNA416HXBR | 455.90 € | **450.00 €** | 8.8 % | **7.3 %** | 450.10 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **29.00 €** | 39.4 % | **16.0 %** | 29.21 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5474B | 75.50 € | **69.90 €** | 14.5 % | **6.0 %** | 70.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **59.00 €** | 22.4 % | **11.8 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **118.50 €** | 25.9 % | **20.3 %** | 118.67 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 28.00 € | **22.50 €** | 31.4 % | **5.6 %** | 22.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 497.00 € | **491.50 €** | 12.0 % | **10.8 %** | 491.57 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 267.00 € | **261.50 €** | 9.9 % | **7.6 %** | 261.76 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **116.50 €** | 26.2 % | **20.6 %** | 116.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **51.00 €** | 17.9 % | **6.6 %** | 51.22 € | cena podľa najlacnejšieho iného predajcu |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **49.50 €** | 53.8 % | **38.9 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.00 €** | 37.0 % | **11.0 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **42.00 €** | 35.1 % | **20.4 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 47.1 % | **16.6 %** | 19.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 33.0 % | **5.4 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.90 €** | 32.9 % | **16.0 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 57.50 € | **52.50 €** | 15.0 % | **5.0 %** | 45.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TESLA TE-344 venkovní anténa | 26.50 € | **21.50 €** | 41.6 % | **14.8 %** | 21.52 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 208.00 € | **203.00 €** | 9.8 % | **7.2 %** | 203.12 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 55.8 % | **16.9 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **35.00 €** | 25.2 % | **9.6 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 55.6 % | **11.6 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 774.90 € | **770.00 €** | 18.8 % | **18.0 %** | 770.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.90 €** | 30.4 % | **17.8 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **70.00 €** | 25.4 % | **17.4 %** | 70.21 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **87.50 €** | 19.5 % | **13.4 %** | 87.75 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **45.00 €** | 30.2 % | **17.8 %** | 45.25 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **19.90 €** | 35.0 % | **9.2 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.90 €** | 32.2 % | **22.6 %** | 59.96 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.50 €** | 33.8 % | **20.6 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.90 €** | 27.4 % | **13.5 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.50 €** | 33.0 % | **19.6 %** | 41.88 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 837.50 € | **832.90 €** | 18.8 % | **18.2 %** | 832.99 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 456.50 € | **451.90 €** | 8.8 % | **7.7 %** | 451.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny alkohol tester, Fuel Cell, 0,0... | 53.50 € | **48.90 €** | 26.0 % | **15.2 %** | 49.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **20.00 €** | 42.7 % | **16.0 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **20.00 €** | 39.1 % | **13.1 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Blade A35e zelený | 99.50 € | **94.90 €** | 10.3 % | **5.2 %** | 82.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Mriežka GODOX TL-G60 TL60 | 22.50 € | **18.00 €** | 79.5 % | **43.6 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.50 €** | 55.8 % | **19.1 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 51.9 % | **16.1 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **13.00 €** | 44.7 % | **8.0 %** | 13.22 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 54.6 % | **16.4 %** | 13.88 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook 11T LTE Pro | 106.90 € | **102.50 €** | 10.0 % | **5.5 %** | 97.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.90 €** | 52.4 % | **19.7 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 29.6 % | **6.3 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 50.50 € | **46.50 €** | 36.1 % | **25.3 %** | 46.59 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 553.00 € | **549.00 €** | 18.6 % | **17.7 %** | 549.17 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 457.50 € | **453.50 €** | 18.5 % | **17.4 %** | 453.68 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 308.50 € | **304.50 €** | 12.7 % | **11.3 %** | 304.70 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 342.00 € | **338.00 €** | 8.0 % | **6.8 %** | 338.20 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10, 64GB (biely) | 263.00 € | **259.00 €** | 35.7 % | **33.6 %** | 259.20 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10, 64GB (čierny) | 263.00 € | **259.00 €** | 35.7 % | **33.6 %** | 259.20 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **223.50 €** | 8.5 % | **6.6 %** | 223.70 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **223.50 €** | 13.3 % | **11.3 %** | 223.70 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 49G | 166.00 € | **162.00 €** | 11.1 % | **8.4 %** | 162.40 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.39 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **96.00 €** | 18.7 % | **14.0 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 12.50 € | **8.60 €** | 130.4 % | **58.5 %** | 10.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 46.8 % | **11.9 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 272.90 € | **269.00 €** | 15.6 % | **13.9 %** | 269.09 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.90 €** | 40.5 % | **22.4 %** | 25.96 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 36.5 % | **17.2 %** | 22.46 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **16.90 €** | 39.6 % | **15.1 %** | 16.95 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **21.00 €** | 48.0 % | **26.4 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **21.00 €** | 35.3 % | **15.5 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.50 €** | 27.9 % | **17.1 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.00 €** | 42.5 % | **30.6 %** | 39.41 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Handy Force One 2v1, 2708 | 55.00 € | **51.50 €** | 12.8 % | **5.7 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko Mezikus PCSKM | 67.50 € | **64.00 €** | 25.0 % | **18.5 %** | 64.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.00 € | **15.50 €** | 37.7 % | **12.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesková hlava GODOX BD-10 AD300PRO | 31.00 € | **27.50 €** | 57.1 % | **39.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 40.1 % | **15.6 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 43.9 % | **15.6 %** | 14.21 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **30.00 €** | 30.8 % | **17.8 %** | 30.21 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **29.00 €** | 33.2 % | **19.6 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 32.6 % | **18.2 %** | 26.88 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.90 €** | 30.6 % | **20.6 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.50 €** | 21.5 % | **5.1 %** | 18.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 40.50 € | **37.50 €** | 14.8 % | **6.3 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TESLA Excelent 0,1 dB LNB Monoblock LTE | 16.50 € | **13.50 €** | 45.3 % | **18.9 %** | 13.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podlinkové a nábytkové svietidlo stmieva... | 19.50 € | **16.50 €** | 32.0 % | **11.7 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 53.8 % | **30.8 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 37.7 % | **17.1 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **11.90 €** | 41.6 % | **13.4 %** | 11.94 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 36.9 % | **13.9 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **34.50 €** | 31.8 % | **21.5 %** | 34.83 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **14.00 €** | 42.8 % | **18.2 %** | 14.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.50 €** | 29.4 % | **6.6 %** | 12.12 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 41.5 % | **16.5 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 42.9 % | **17.6 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 11.43 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 12.10 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **12.00 €** | 47.3 % | **19.0 %** | 12.38 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **29.50 €** | 29.0 % | **17.9 %** | 29.67 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 34.0 % | **20.9 %** | 24.64 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 55.1 % | **39.9 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **18.90 €** | 38.5 % | **21.7 %** | 18.98 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **22.00 €** | 33.5 % | **19.4 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| TESLA COMBO TV Twin - LNB konvertor s LTE filtrem | 14.50 € | **11.90 €** | 32.5 % | **8.7 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.42 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 222.00 € | **219.50 €** | 15.1 % | **13.8 %** | 219.63 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3079B | 48.00 € | **45.50 €** | 29.4 % | **22.7 %** | 45.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 35.00 € | **32.50 €** | 34.3 % | **24.7 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 30.00 € | **27.50 €** | 45.8 % | **33.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 38.00 € | **35.50 €** | 14.6 % | **7.0 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-002-33 Reflexný dáždnik | 12.50 € | **10.00 €** | 66.9 % | **33.5 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.8 % | **7.7 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.1 % | **7.1 %** | 16.88 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.50 €** | 41.3 % | **22.1 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **72.50 €** | 18.6 % | **14.9 %** | 72.83 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 109.00 € | **106.90 €** | 14.9 % | **12.7 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.50 €** | 20.6 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **20.50 €** | 51.1 % | **37.4 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| MOVA Turbo sušič vlasov (ružový) | 30.90 € | **28.90 €** | 15.5 % | **8.0 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| Epicstar balanční deska Black Rock | 68.50 € | **66.50 €** | 12.2 % | **8.9 %** | 66.80 € | cena podľa najlacnejšieho iného predajcu |
| Záhradné elektromagnetické ventily AC 1 " RainPoint | 16.50 € | **14.50 €** | 21.6 % | **6.9 %** | 14.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Polia, 25W, 1350lm, 30cm, 3CCT | 22.50 € | **20.50 €** | 30.3 % | **18.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Woody, 25W, 1350lm, 29cm, 3CCT | 25.50 € | **23.50 €** | 29.9 % | **19.7 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 129.00 € | **127.00 €** | 14.8 % | **13.1 %** | 127.46 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná detská váha Grownsy B12H | 28.00 € | **26.00 €** | 53.7 % | **42.7 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **18.00 €** | 30.7 % | **17.7 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **17.00 €** | 33.3 % | **19.5 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre Nikon | 57.50 € | **55.90 €** | 15.9 % | **12.7 %** | 56.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 320.00 € | **318.50 €** | 11.6 % | **11.0 %** | 318.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.50 €** | 33.0 % | **22.7 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Pletená stolová LED vianočná hviezda Solight 1V268, ... | 5.80 € | **4.40 €** | 46.9 % | **11.4 %** | 4.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Matter Over Wi-Fi nástenný spínač SONOF... | 18.90 € | **17.50 €** | 37.0 % | **26.8 %** | 17.85 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **11.50 €** | 40.5 % | **26.0 %** | 11.57 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo infra sušička NIR+ | 178.90 € | **177.90 €** | 7.4 % | **6.8 %** | 177.91 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 21.50 € | **20.50 €** | 15.0 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell VND s polarizáciou | 79.90 € | **78.90 €** | 33.3 % | **31.6 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 16.50 € | **15.50 €** | 13.7 % | **6.8 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak Puluz pre Insta360 GO Ultra | 18.50 € | **17.50 €** | 15.0 % | **8.8 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 11.50 € | **10.50 €** | 16.0 % | **5.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma na riasy ANLAN 08-AJMJ31-02A | 20.00 € | **19.00 €** | 45.3 % | **38.0 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na okolie očí a pier EMS ANLAN 08-A... | 20.00 € | **19.00 €** | 33.4 % | **26.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| UV filter Puluz pre DJI Osmo Action 6 | 17.00 € | **16.00 €** | 14.3 % | **7.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| KOMA RK01 - Univerzální rotační kartáč | 20.90 € | **20.00 €** | 30.7 % | **25.1 %** | 20.20 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **26.50 €** | 18.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| IMOU T800 4K palubná kamera | 54.50 € | **53.90 €** | 10.0 % | **8.8 %** | 53.98 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i6 černá | 158.50 € | **158.00 €** | 11.5 % | **11.1 %** | 158.06 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Unlimited pánev 25cm  G2553872 | 36.00 € | **35.50 €** | 14.2 % | **12.6 %** | 35.70 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 200.00 € | **199.50 €** | 23.3 % | **23.0 %** | 199.70 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-W, 10 m, s... | 12.50 € | **12.00 €** | 51.0 % | **45.0 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 15.00 € | **14.50 €** | 12.7 % | **9.0 %** | 14.87 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 39.00 € | **38.50 €** | 15.4 % | **13.9 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-5 PREMIUM 5 kg (100x150... | 28.00 € | **27.50 €** | 10.9 % | **9.0 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-5 PREMIUM 5 kg (100x150... | 28.00 € | **27.50 €** | 10.9 % | **9.0 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 917.50 € | **917.00 €** | 13.9 % | **13.8 %** | 917.39 € | cena podľa najlacnejšieho iného predajcu |
| TESLA GlideStar GQ500 | 64.50 € | **64.00 €** | 5.8 % | **5.0 %** | 64.39 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 926.50 € | **926.00 €** | 9.0 % | **9.0 %** | 926.39 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický hrnec TEESA TSA8091 Multicooker 2L, 12-24... | 66.50 € | **66.00 €** | 14.4 % | **13.6 %** | 66.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 268.50 € | **268.00 €** | 5.4 % | **5.2 %** | 268.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Aura A60 Soundbar | 206.00 € | **205.50 €** | 14.7 % | **14.4 %** | 205.89 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet Flip AI 4K | 124.50 € | **124.00 €** | 13.5 % | **13.1 %** | 124.39 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 217.00 € | **216.50 €** | 13.9 % | **13.6 %** | 216.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 695.50 € | **695.00 €** | 8.9 % | **8.8 %** | 695.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 26W, 2340lm, 3CCT, IP65... | 12.00 € | **11.50 €** | 23.0 % | **17.9 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 2 vianočných LED svetielok Solight 1V287, 15/20... | 13.00 € | **12.50 €** | 49.5 % | **43.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 125.00 € | **124.50 €** | 9.8 % | **9.3 %** | 124.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SA-30 Softbox, 30x30 cm | 17.00 € | **16.50 €** | 45.9 % | **41.7 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Stativ Puluz Mini Octopus | 11.00 € | **10.50 €** | 13.8 % | **8.6 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočné mestečko s kostolom Solight 1V250, 30 ×... | 11.50 € | **11.00 €** | 33.0 % | **27.2 %** | 11.49 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9215AV | 32.50 € | **32.00 €** | 10.0 % | **8.4 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 147.50 € | **147.00 €** | 9.3 % | **9.0 %** | 147.50 € | cena podľa najlacnejšieho iného predajcu |
| Kryt pre kameru SMALLRIG Osmo Action 5 Pro | 24.50 € | **24.00 €** | 37.1 % | **34.3 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Puluz pre DJI Osmo Action 6 ND32 | 18.50 € | **18.00 €** | 15.1 % | **12.0 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **17.00 €** | 25.0 % | **21.9 %** | 17.30 € | cena podľa najlacnejšieho iného predajcu |
| Salente G4 robotický vysavač | 112.90 € | **112.50 €** | 5.5 % | **5.1 %** | 112.80 € | cena podľa najlacnejšieho iného predajcu |
| Salente Rtx-G4 | 112.90 € | **112.50 €** | 5.5 % | **5.1 %** | 112.80 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.90 €** | 25.3 % | **21.2 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **38.50 €** | 7.0 % | **5.9 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 268.90 € | **268.50 €** | 5.2 % | **5.0 %** | 268.79 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.90 € | **9.70 €** | 39.5 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Stativ SMALLRIG TRIBEX Carbon II z uhlíkových vlákien | 685.00 € | **684.90 €** | 15.3 % | **15.2 %** | 685.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9038G | 33.00 € | **32.90 €** | 10.0 % | **9.7 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk New Atom 7x50 | 59.00 € | **58.90 €** | 18.6 % | **18.4 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-V-BK | 11.00 € | **10.90 €** | 6.6 % | **5.6 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.80 €** | 37.4 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Dvojrežimová prevodovka PXN SF SH (H + sekvenčná) | 234.00 € | **233.90 €** | 15.0 % | **14.9 %** | 233.92 € | cena podľa najlacnejšieho iného predajcu |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-11-05

Vstup: `premiumstore-sk_2026-11-05_21-53.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6001**
- Návrh **zvýšiť** cenu: **97** produktov
- Návrh **znížiť** cenu: **339** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5565** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **39**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **338**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (97)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **770.00 €** | 26.6 % | **39.2 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **534.00 €** | 4.6 % | **15.1 %** | 554.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solárna nabíjačka pre elektromobily Besen BS40 11 kW | 427.00 € | **467.00 €** | 26.4 % | **38.2 %** | 477.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **743.00 €** | 3.7 % | **9.2 %** | 758.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **330.00 €** | 32.8 % | **45.9 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **342.00 €** | 15.0 % | **25.5 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava na pripojenie k vodovodu pre automatické nap... | 281.00 € | **309.00 €** | 39.0 % | **52.8 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **310.50 €** | 27.3 % | **39.7 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 260.00 € | **286.00 €** | 15.0 % | **26.5 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 261.00 € | **287.00 €** | 14.9 % | **26.4 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 259.90 € | **285.50 €** | 15.0 % | **26.3 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **266.00 €** | 10.8 % | **21.9 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **293.50 €** | 6.2 % | **15.6 %** | 299.61 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termokamera Mileseey TR256i USB-C Mini | 224.90 € | **247.00 €** | 18.0 % | **29.6 %** | 277.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **271.50 €** | 30.7 % | **41.9 %** | 277.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **213.90 €** | 4.1 % | **14.5 %** | 220.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **210.50 €** | 4.4 % | **14.8 %** | 221.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **212.50 €** | 4.5 % | **14.1 %** | 217.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring EVEN REALITIES R1, veľkosť 15 | 312.00 € | **330.00 €** | 22.9 % | **29.9 %** | 337.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 208.50 € | **226.00 €** | 10.8 % | **20.1 %** | 230.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **127.00 €** | 4.4 % | **14.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fagor 4LVF-637ADIT | 439.00 € | **450.00 €** | 6.7 % | **9.3 %** | 459.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **121.50 €** | 27.6 % | **40.1 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **185.00 €** | 35.1 % | **42.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ufesa Sensazione černý | 330.50 € | **339.50 €** | 6.5 % | **9.4 %** | 346.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **105.00 €** | 6.2 % | **15.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **123.00 €** | 4.4 % | **11.7 %** | 125.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **87.90 €** | 30.9 % | **43.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **93.50 €** | 4.2 % | **12.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **77.50 €** | 4.4 % | **14.8 %** | 79.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **114.50 €** | 32.4 % | **40.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **81.90 €** | 6.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **67.50 €** | 31.3 % | **44.2 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **68.50 €** | 18.0 % | **29.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **68.50 €** | 35.0 % | **47.9 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **97.90 €** | 34.8 % | **43.0 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 57.40 € | **62.50 €** | 30.1 % | **41.7 %** | 64.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| BIO tlakový filter do jazierka SUNSUN CPF-3500 11 W UV | 111.50 € | **116.50 €** | 26.1 % | **31.8 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 51.50 € | **56.50 €** | 7.0 % | **17.4 %** | 64.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **53.50 €** | 6.1 % | **16.1 %** | 55.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosná pumpa Flextail Max Pump 3 (čierna) | 44.50 € | **48.90 €** | 11.8 % | **22.9 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosná pumpa Flextail Max Pump 3 (oranžová) | 44.50 € | **48.90 €** | 11.8 % | **22.9 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ariete Breakfast Blender 576/03 černý | 40.00 € | **44.00 €** | 21.3 % | **33.4 %** | 45.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Veslovací trenažér MERACH MR-R05B4 | 206.50 € | **210.50 €** | 15.9 % | **18.1 %** | 214.88 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 326.00 € | **330.00 €** | 26.5 % | **28.0 %** | 337.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **43.90 €** | 42.5 % | **56.5 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **42.50 €** | 4.9 % | **14.6 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Uni-T UT692G tester optických vlákien | 37.90 € | **41.50 €** | 25.7 % | **37.6 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Maxxo rádio DAB+ internet rádio - DT06 | 99.50 € | **103.00 €** | 5.1 % | **8.8 %** | 105.40 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LED svietidlo GODOX FH50R | 217.00 € | **220.50 €** | 13.7 % | **15.6 %** | 225.06 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.00 €** | 5.4 % | **11.7 %** | 56.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **34.50 €** | 6.1 % | **16.2 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **92.50 €** | 39.0 % | **43.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **32.50 €** | 31.8 % | **44.1 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **140.00 €** | 15.9 % | **18.1 %** | 143.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **34.90 €** | 29.4 % | **39.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Baza na joystick Moza Racing AB9 Force Feedback | 486.90 € | **489.50 €** | 5.1 % | **5.6 %** | 499.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ScanPart Sada příslušenství pro iRobot R | 29.90 € | **32.50 €** | 11.5 % | **21.1 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **29.50 €** | 40.9 % | **53.1 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **34.50 €** | 4.8 % | **11.3 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit LinoLift 600 Quick Start 85282 | 75.00 € | **77.00 €** | 9.3 % | **12.2 %** | 78.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| NEDIS SAMP42222WT domovní zesilovač (1x vstup, 2x vý... | 23.50 € | **25.50 €** | 26.0 % | **36.8 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 346.50 € | **348.50 €** | 5.1 % | **5.7 %** | 355.97 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **23.50 €** | 38.5 % | **51.3 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zátěžová vesta REBEL ACTIVE RBA-2525-15 15kg nastavi... | 44.90 € | **46.50 €** | 53.2 % | **58.6 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **41.50 €** | 53.2 % | **59.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| BoboVR G3 Grip Cover – návleky na rukoväte pre VR | 20.00 € | **21.50 €** | 23.6 % | **32.8 %** | 22.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filter Hang On SUNSUN HBL-801 | 19.50 € | **21.00 €** | 41.8 % | **52.7 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aligator S6600 Duo 64GB Black | 78.50 € | **80.00 €** | 5.4 % | **7.4 %** | 82.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H168CX (HP 302 Tri-colour XL) | 17.50 € | **19.00 €** | 21.0 % | **31.4 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Resto 95501 Set nožů - 4 kusy | 18.50 € | **20.00 €** | 20.9 % | **30.7 %** | 27.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kolečka pro kancelářskou židli Ruhhy 25280 | 14.50 € | **15.90 €** | 27.6 % | **39.9 %** | 17.45 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WiFi RGBW 16M Gosund LB2S Tuya smart night light | 14.50 € | **15.90 €** | 36.8 % | **50.0 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 36.90 € | **38.00 €** | 6.6 % | **9.7 %** | 39.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H168BX (HP 302 Black XL) | 15.90 € | **17.00 €** | 23.3 % | **31.9 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight vonkajšia anténa, DVB-T2, 22dB | 18.50 € | **19.50 €** | 26.6 % | **33.4 %** | 20.74 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 10.50 € | **11.50 €** | 18.9 % | **30.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termobatoh Trizand 21070 | 11.50 € | **12.50 €** | 14.4 % | **24.4 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 12.50 € | **13.50 €** | 14.8 % | **24.0 %** | 15.03 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **11.90 €** | 9.5 % | **19.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blender G21 Perfection white | 203.50 € | **204.50 €** | 13.8 % | **14.3 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H125 (CZ101AE) | 13.00 € | **14.00 €** | 22.9 % | **32.4 %** | 22.81 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Scanpart vodní filtr kompatibilníSage | 12.00 € | **12.90 €** | 21.0 % | **30.1 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.30 € | **9.90 €** | 31.5 % | **40.0 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **18.50 €** | 34.0 % | **38.2 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 58.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 22.00 € | **22.50 €** | 18.0 % | **20.7 %** | 23.59 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit Air Board M Black Plus NF | 68.50 € | **69.00 €** | 21.1 % | **22.0 %** | 70.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Drôtové slúchadlá do uší TRUTHEAR Zero (modré) | 60.50 € | **61.00 €** | 26.1 % | **27.1 %** | 62.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 14.50 € | **14.90 €** | 25.8 % | **29.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **11.90 €** | 10.1 % | **14.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.70 € | **5.10 €** | 11.4 % | **20.9 %** | 6.37 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED lineárne osvetlenie prepojiteľné, 60W, 5... | 45.50 € | **45.90 €** | 33.5 % | **34.7 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **42.90 €** | 38.6 % | **39.8 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **29.90 €** | 36.2 % | **37.0 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Candy GD 49B8-S | 281.90 € | **282.00 €** | 5.1 % | **5.1 %** | 287.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 9.90 € | **10.00 €** | 35.0 % | **36.4 %** | 11.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |

## Návrh znížiť cenu (339)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **534.00 €** | 47.0 % | **16.2 %** | 534.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 29.8 % | **6.6 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor BlitzWolf BW-V11 | 375.15 € | **295.50 €** | 33.5 % | **5.2 %** | 291.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **785.90 €** | 32.6 % | **20.7 %** | 785.92 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **294.90 €** | 48.6 % | **18.4 %** | 294.92 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **281.50 €** | 32.7 % | **6.6 %** | 281.71 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **240.50 €** | 47.7 % | **18.2 %** | 240.88 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **166.50 €** | 39.1 % | **5.1 %** | 157.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **257.50 €** | 26.4 % | **5.2 %** | 236.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **225.00 €** | 44.0 % | **18.0 %** | 225.25 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **180.00 €** | 44.4 % | **15.2 %** | 180.29 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **155.00 €** | 47.6 % | **14.5 %** | 155.38 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **229.90 €** | 25.6 % | **5.1 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vibračný tester Uni-T UT311A | 250.10 € | **209.50 €** | 41.5 % | **18.6 %** | 209.75 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **186.00 €** | 42.8 % | **17.8 %** | 186.38 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **261.00 €** | 25.0 % | **8.6 %** | 261.44 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER706W VPN WiFi 6, 1x GWAN + 4x GWAN/... | 190.00 € | **150.90 €** | 32.4 % | **5.1 %** | 144.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **184.50 €** | 42.3 % | **18.1 %** | 184.88 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **181.50 €** | 40.3 % | **18.3 %** | 181.63 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **132.00 €** | 43.8 % | **15.0 %** | 132.50 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **152.50 €** | 27.8 % | **5.1 %** | 144.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **104.50 €** | 50.0 % | **14.1 %** | 104.75 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **106.00 €** | 46.2 % | **12.8 %** | 106.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **155.50 €** | 25.5 % | **5.2 %** | 141.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **145.50 €** | 45.0 % | **20.4 %** | 145.71 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **125.50 €** | 43.8 % | **16.6 %** | 125.83 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **329.00 €** | 31.9 % | **21.3 %** | 329.31 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **271.90 €** | 33.2 % | **20.6 %** | 271.92 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **122.50 €** | 48.4 % | **20.6 %** | 122.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **272.50 €** | 32.9 % | **20.5 %** | 272.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **272.50 €** | 32.8 % | **20.5 %** | 272.71 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **172.50 €** | 39.8 % | **20.6 %** | 172.58 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **82.50 €** | 58.2 % | **19.0 %** | 82.71 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 129.50 € | **102.50 €** | 33.0 % | **5.3 %** | 102.45 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.72 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **143.50 €** | 44.5 % | **22.6 %** | 143.67 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **154.90 €** | 42.8 % | **22.6 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **148.50 €** | 42.0 % | **22.4 %** | 148.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **223.50 €** | 35.5 % | **22.6 %** | 223.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **76.50 €** | 38.1 % | **5.7 %** | 72.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE235BE WiFi 7 AP/Extender/Rep... | 110.90 € | **88.00 €** | 32.4 % | **5.0 %** | 87.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **102.90 €** | 49.0 % | **22.6 %** | 103.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **65.90 €** | 41.3 % | **6.9 %** | 65.94 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP615-Wall AP, 3x GLAN, 2,4 a 5... | 102.00 € | **80.90 €** | 32.5 % | **5.1 %** | 75.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **191.50 €** | 33.8 % | **20.7 %** | 191.54 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **191.50 €** | 33.5 % | **20.5 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **129.00 €** | 39.9 % | **20.6 %** | 129.13 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **57.00 €** | 63.8 % | **22.2 %** | 57.25 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **93.50 €** | 45.4 % | **20.5 %** | 93.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **122.50 €** | 35.7 % | **17.5 %** | 122.75 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.00 €** | 35.4 % | **9.7 %** | 81.23 € | cena podľa najlacnejšieho iného predajcu |
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
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 65.7 % | **17.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **75.00 €** | 42.8 % | **19.4 %** | 75.46 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **235.50 €** | 34.0 % | **26.2 %** | 235.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **120.90 €** | 35.0 % | **20.6 %** | 120.96 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **111.00 €** | 31.2 % | **16.5 %** | 111.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **103.00 €** | 36.4 % | **20.2 %** | 103.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **41.00 €** | 53.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 49.72 € | **35.90 €** | 50.4 % | **8.6 %** | 35.93 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **76.00 €** | 36.8 % | **15.9 %** | 76.25 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **54.00 €** | 42.9 % | **15.0 %** | 54.33 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **49.50 €** | 34.8 % | **6.7 %** | 49.84 € | cena podľa najlacnejšieho iného predajcu |
| Chytrý zvonček TP-Link Tapo D205 IoT, 3MPx, baterie | 63.00 € | **50.00 €** | 32.8 % | **5.4 %** | 50.25 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **61.90 €** | 39.2 % | **15.2 %** | 61.96 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA110 Výmenná sada pre r... | 74.90 € | **62.00 €** | 32.1 % | **9.3 %** | 62.45 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **77.50 €** | 40.2 % | **20.5 %** | 77.63 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **114.50 €** | 33.7 % | **20.4 %** | 114.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **62.50 €** | 25.9 % | **5.1 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **123.50 €** | 34.2 % | **22.5 %** | 123.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.50 € | **42.90 €** | 33.7 % | **5.2 %** | 41.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **51.00 €** | 47.1 % | **20.0 %** | 51.08 € | cena podľa najlacnejšieho iného predajcu |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 38.50 € | **27.00 €** | 55.5 % | **9.0 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 30.6 % | **15.7 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **83.50 €** | 19.4 % | **5.2 %** | 81.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.90 €** | 52.4 % | **16.0 %** | 35.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **55.90 €** | 30.4 % | **8.6 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **38.50 €** | 42.2 % | **10.1 %** | 38.53 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **282.00 €** | 22.9 % | **18.3 %** | 282.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **86.50 €** | 35.6 % | **20.4 %** | 86.71 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **227.00 €** | 23.4 % | **17.8 %** | 227.05 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.43 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **126.90 €** | 46.5 % | **35.4 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **82.00 €** | 35.2 % | **20.1 %** | 82.38 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ PU4119B 60W 2500K-6500K (Black) studio lamp. | 58.50 € | **48.50 €** | 28.6 % | **6.6 %** | 48.75 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **65.00 €** | 33.5 % | **15.9 %** | 65.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **60.00 €** | 29.7 % | **11.7 %** | 60.31 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 56.3 % | **21.2 %** | 31.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **71.00 €** | 31.3 % | **16.6 %** | 71.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **28.50 €** | 40.3 % | **6.8 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **104.00 €** | 30.8 % | **20.6 %** | 104.13 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **58.50 €** | 37.7 % | **20.0 %** | 58.83 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C220 IP, 4MPx, WiFi, prísvit | 43.50 € | **35.00 €** | 30.5 % | **5.0 %** | 33.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **29.00 €** | 49.3 % | **15.7 %** | 29.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 40.3 % | **8.7 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **21.50 €** | 45.3 % | **5.1 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.50 €** | 37.7 % | **14.9 %** | 41.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.90 €** | 14.9 % | **10.8 %** | 219.97 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.90 €** | 38.3 % | **9.8 %** | 30.96 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 41.2 % | **13.0 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 49.8 % | **16.0 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **21.90 €** | 42.7 % | **5.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **41.90 €** | 45.5 % | **22.6 %** | 41.92 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **67.00 €** | 17.3 % | **5.0 %** | 65.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.50 €** | 61.4 % | **22.4 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.50 €** | 42.1 % | **5.8 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **42.00 €** | 42.3 % | **20.2 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.50 €** | 29.4 % | **15.2 %** | 62.54 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **102.00 €** | 29.4 % | **20.4 %** | 102.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 47.4 % | **39.9 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.50 €** | 64.9 % | **18.4 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.90 €** | 78.5 % | **18.0 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **59.50 €** | 22.9 % | **8.9 %** | 59.54 € | cena podľa najlacnejšieho iného predajcu |
| Booster UltraCap CSC 12/800 12 V, 800 A | 296.50 € | **288.90 €** | 13.5 % | **10.6 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 71.3 % | **16.2 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **57.00 €** | 31.3 % | **15.9 %** | 57.29 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **35.00 €** | 44.4 % | **18.8 %** | 35.20 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.50 €** | 37.3 % | **19.0 %** | 47.75 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 60.4 % | **16.6 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **37.50 €** | 26.3 % | **6.2 %** | 36.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 64.9 % | **13.3 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 40.9 % | **14.9 %** | 30.88 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.90 €** | 61.9 % | **22.2 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.50 €** | 32.9 % | **15.7 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 15.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.50 €** | 29.9 % | **15.9 %** | 53.67 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.90 €** | 26.6 % | **9.8 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.50 €** | 40.2 % | **22.7 %** | 43.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.50 €** | 53.5 % | **19.2 %** | 21.63 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **21.00 €** | 36.3 % | **5.4 %** | 20.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **21.00 €** | 36.7 % | **5.7 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 57.4 % | **18.3 %** | 18.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.50 €** | 34.1 % | **15.8 %** | 38.58 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **16.50 €** | 47.6 % | **8.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **14.00 €** | 74.0 % | **21.9 %** | 14.13 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **31.50 €** | 28.5 % | **8.1 %** | 31.86 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.50 €** | 33.8 % | **20.1 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **29.00 €** | 39.4 % | **16.0 %** | 29.21 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **59.00 €** | 22.4 % | **11.8 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 39.3 % | **31.9 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **118.50 €** | 25.9 % | **20.3 %** | 118.67 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **116.50 €** | 26.2 % | **20.6 %** | 116.63 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 42.7 % | **19.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **42.00 €** | 35.1 % | **20.4 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 47.1 % | **16.6 %** | 19.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 33.0 % | **5.4 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 35.3 % | **7.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.90 €** | 32.9 % | **16.0 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link LS105LP 1x LAN, 4x LAN s PoE, 41W | 25.50 € | **20.50 €** | 32.4 % | **6.4 %** | 20.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s diaľkovým ovládačom Polia, ... | 33.50 € | **28.50 €** | 35.6 % | **15.3 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 55.8 % | **16.9 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **35.00 €** | 25.2 % | **9.6 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 55.6 % | **11.6 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **24.90 €** | 33.0 % | **11.4 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.90 €** | 30.4 % | **17.8 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **70.00 €** | 25.4 % | **17.4 %** | 70.21 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **87.50 €** | 19.5 % | **13.4 %** | 87.75 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **45.00 €** | 30.2 % | **17.8 %** | 45.25 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.90 €** | 32.2 % | **22.6 %** | 59.96 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.50 €** | 33.8 % | **20.6 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.50 €** | 29.1 % | **16.3 %** | 42.71 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.90 €** | 27.4 % | **13.5 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.50 €** | 33.0 % | **19.6 %** | 41.88 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **20.00 €** | 42.7 % | **16.0 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **20.00 €** | 39.1 % | **13.1 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.50 €** | 55.8 % | **19.1 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 51.9 % | **16.1 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **13.00 €** | 44.7 % | **8.0 %** | 13.22 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 54.6 % | **16.4 %** | 13.88 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **28.00 €** | 29.0 % | **11.9 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **23.00 €** | 28.1 % | **8.5 %** | 23.17 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.90 €** | 52.4 % | **19.7 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 29.6 % | **6.3 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.43 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **96.00 €** | 18.7 % | **14.0 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 46.8 % | **11.9 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin M Steel | 27.90 € | **24.00 €** | 27.8 % | **9.9 %** | 24.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.90 €** | 40.5 % | **22.4 %** | 25.96 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 36.5 % | **17.2 %** | 22.46 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **21.00 €** | 35.0 % | **15.3 %** | 21.04 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **16.90 €** | 39.6 % | **15.1 %** | 16.95 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **21.00 €** | 40.8 % | **20.2 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.50 €** | 27.9 % | **17.1 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.00 €** | 42.5 % | **30.6 %** | 39.42 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R45 eXtremo Black Red | 68.50 € | **65.00 €** | 10.7 % | **5.0 %** | 59.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava príslušenstva pre robotický vysávač Dreame A... | 67.50 € | **64.00 €** | 59.3 % | **51.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 40.1 % | **15.6 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 43.9 % | **15.6 %** | 14.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.16 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **30.00 €** | 30.8 % | **17.8 %** | 30.21 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **29.00 €** | 33.2 % | **19.6 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 32.6 % | **18.2 %** | 26.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 41.5 % | **35.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.90 €** | 30.6 % | **20.6 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.50 €** | 21.5 % | **5.1 %** | 18.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Polia, 25W, 1350lm, 30cm, 3CCT | 23.50 € | **20.50 €** | 36.1 % | **18.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Woody, 25W, 1350lm, 29cm, 3CCT | 26.50 € | **23.50 €** | 35.0 % | **19.7 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCool 2,MagSafe FIXMCO2-BK | 27.00 € | **24.00 €** | 26.8 % | **12.7 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 40.2 % | **19.3 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
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
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 34.0 % | **20.9 %** | 24.64 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 55.1 % | **39.9 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagRound 3 držák s MgS FIXMRO3-BK | 20.50 € | **17.90 €** | 31.0 % | **14.4 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **22.00 €** | 33.5 % | **19.4 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.42 € | cena podľa najlacnejšieho iného predajcu |
| Softbox Neewer 85 cm | 90.50 € | **88.00 €** | 26.2 % | **22.7 %** | 88.04 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle XL s MgS FIXMC-XL-BK | 17.50 € | **15.00 €** | 30.8 % | **12.1 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.8 % | **7.7 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.1 % | **7.1 %** | 16.88 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.50 €** | 41.3 % | **22.1 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.50 €** | 20.6 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **20.50 €** | 51.1 % | **37.4 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 25.90 € | **23.90 €** | 15.4 % | **6.5 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 12.50 € | **10.50 €** | 37.3 % | **15.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 39.50 € | **37.50 €** | 42.5 % | **35.3 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 129.00 € | **127.00 €** | 14.8 % | **13.1 %** | 127.46 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **18.00 €** | 30.7 % | **17.7 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 62.0 % | **45.9 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **17.00 €** | 33.3 % | **19.5 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **15.50 €** | 25.0 % | **11.1 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **72.90 €** | 17.6 % | **14.6 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 26W, 2340lm, 3CCT, IP65... | 13.00 € | **11.50 €** | 33.3 % | **17.9 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.50 €** | 33.0 % | **22.7 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **11.50 €** | 40.5 % | **26.0 %** | 11.57 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 21.50 € | **20.50 €** | 15.0 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 120" projection screen. | 41.50 € | **40.50 €** | 35.2 % | **32.0 %** | 40.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.50 € | **38.50 €** | 37.2 % | **33.7 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Panoramatický fotografický stojan 360 Puluz DCA0871W | 15.90 € | **15.00 €** | 15.8 % | **9.3 %** | 15.46 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **26.50 €** | 18.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.50 €** | 35.1 % | **31.7 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.50 €** | 35.1 % | **31.7 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podlinkové a nábytkové svietidlo stmieva... | 20.00 € | **19.50 €** | 35.4 % | **32.0 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.00 € | **19.50 €** | 30.8 % | **27.5 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.90 €** | 25.3 % | **21.2 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **38.50 €** | 7.0 % | **5.9 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.26 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7981 | 35.00 € | **34.90 €** | 6.4 % | **6.1 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 71.00 € | **70.90 €** | 17.0 % | **16.9 %** | 70.95 € | cena podľa najlacnejšieho iného predajcu |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-20

Vstup: `premiumstore-sk_2026-10-20_07-31.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6304**
- Návrh **zvýšiť** cenu: **386** produktov
- Návrh **znížiť** cenu: **172** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5746** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **6**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **307**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (386)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| GMKtec K15 Core Ultra 5 125U 32 GB 1 TB Win 11 Pro M... | 883.90 € | **1106.90 €** | 15.0 % | **44.0 %** | 1107.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM IT12 Max Core Ultra 5 125U 16 GB 500 ... | 747.50 € | **968.90 €** | 15.0 % | **49.0 %** | 969.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 Core Ultra 7 256V 16 GB 1 TB Wind... | 848.50 € | **1056.90 €** | 15.0 % | **43.2 %** | 1057.00 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM M1 Plus i5-12600H 16 GB + 512 GB Mini PC | 772.50 € | **978.90 €** | 15.0 % | **45.7 %** | 979.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 790.50 € | **988.90 €** | 15.0 % | **43.9 %** | 989.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 773.90 € | **968.90 €** | 15.0 % | **44.0 %** | 969.00 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 765.00 € | **956.90 €** | 15.0 % | **43.8 %** | 957.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-285H Intel Core Ultra 9 2... | 732.50 € | **916.90 €** | 15.0 % | **44.0 %** | 917.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec M3 Pro s procesorom i5-13500H, 16 GB ... | 675.50 € | **856.90 €** | 15.0 % | **45.9 %** | 857.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 699.00 € | **868.90 €** | 15.0 % | **42.9 %** | 869.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 252.90 € | **418.90 €** | 15.0 % | **90.5 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 253.50 € | **418.90 €** | 15.0 % | **90.0 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 253.50 € | **418.90 €** | 14.9 % | **89.9 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, strieborná) | 252.90 € | **416.90 €** | 15.0 % | **89.6 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, čierna) | 254.90 € | **416.90 €** | 15.0 % | **88.1 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec Mini PC M3 Intel i5-12450H 16 GB RAM + 512 GB... | 554.90 € | **708.90 €** | 15.0 % | **46.9 %** | 709.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, zlatá) | 275.50 € | **416.90 €** | 24.9 % | **89.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, strieborná) | 275.50 € | **416.90 €** | 25.2 % | **89.5 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 11 | 287.00 € | **408.90 €** | 14.9 % | **63.8 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 13 | 287.00 € | **408.90 €** | 14.9 % | **63.8 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 15 | 287.00 € | **408.90 €** | 14.9 % | **63.8 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 7 | 287.00 € | **408.90 €** | 14.9 % | **63.8 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 9 | 287.00 € | **408.90 €** | 14.9 % | **63.8 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 177.90 € | **298.90 €** | 15.1 % | **93.4 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 177.90 € | **298.90 €** | 15.1 % | **93.4 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 178.00 € | **298.90 €** | 14.9 % | **93.0 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 178.00 € | **298.90 €** | 14.9 % | **93.0 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 10 | 287.00 € | **406.90 €** | 14.9 % | **63.0 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 14 | 287.00 € | **406.90 €** | 14.9 % | **63.0 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 6 | 287.00 € | **406.90 €** | 14.9 % | **63.0 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 8 | 287.00 € | **406.90 €** | 14.9 % | **63.0 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 178.00 € | **296.90 €** | 14.9 % | **91.7 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 178.00 € | **296.90 €** | 14.9 % | **91.7 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 194.00 € | **296.90 €** | 25.2 % | **91.7 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, zlatá) | 194.00 € | **296.90 €** | 25.2 % | **91.7 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 10, strieborná... | 195.00 € | **296.90 €** | 25.9 % | **91.7 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 10, zlatá) | 195.00 € | **296.90 €** | 25.9 % | **91.7 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 228.00 € | **324.50 €** | 25.0 % | **77.9 %** | 324.72 € | cena podľa najlacnejšieho iného predajcu |
| LaserPecker 2 – základná verzia | 434.00 € | **518.90 €** | 15.0 % | **37.5 %** | 519.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pix Cut 2 v 1 | 268.50 € | **338.90 €** | 15.1 % | **45.3 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Termokamera Mileseey TR256i USB-C Mini | 206.90 € | **276.90 €** | 8.9 % | **45.7 %** | 277.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 220.50 € | **275.50 €** | 15.0 % | **43.7 %** | 275.52 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 520.00 € | **569.90 €** | 9.3 % | **19.8 %** | 569.96 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Air Projektor | 192.50 € | **236.90 €** | 15.1 % | **41.7 %** | 237.00 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 656.00 € | **700.00 €** | 8.1 % | **15.4 %** | 700.08 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare AR XREAL One Pro (veľkosť L) | 638.00 € | **680.50 €** | 8.4 % | **15.6 %** | 680.56 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Joy | 137.90 € | **180.00 €** | 5.2 % | **37.3 %** | 180.04 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 150.50 € | **188.90 €** | 15.2 % | **44.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Systém riadenia vlákien Creality CFS | 246.50 € | **278.90 €** | 8.1 % | **22.3 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 240.50 € | **272.50 €** | 5.4 % | **19.4 %** | 272.80 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 235.00 € | **266.90 €** | 29.7 % | **47.3 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT705 | 294.00 € | **324.90 €** | 17.0 % | **29.3 %** | 325.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-N pre fotoaparáty Nikon | 139.90 € | **168.90 €** | 15.0 % | **38.9 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 280.00 € | **308.50 €** | 24.3 % | **37.0 %** | 308.82 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CA077 Univerzálny držiak na fotoaparát | 79.50 € | **106.90 €** | 15.1 % | **54.7 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 320.00 € | **347.00 €** | 10.1 % | **19.4 %** | 347.13 € | cena podľa najlacnejšieho iného predajcu |
| Tester obvodov Ancel PB500 | 73.00 € | **99.50 €** | 7.7 % | **46.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, zlatá) | 275.50 € | **300.50 €** | 24.9 % | **36.3 %** | 300.66 € | cena podľa najlacnejšieho iného predajcu |
| Batéria MOVA S2 Detect | 82.50 € | **106.90 €** | 15.3 % | **49.4 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Nikon | 214.00 € | **237.90 €** | 9.8 % | **22.0 %** | 238.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – súprava „... | 85.00 € | **108.90 €** | 14.8 % | **47.1 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 153.50 € | **176.90 €** | 18.9 % | **37.0 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava osvetlenia Softbox 10102773 700 W, 3 ks | 95.50 € | **118.90 €** | 15.1 % | **43.3 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 291.00 € | **313.50 €** | 9.0 % | **17.4 %** | 313.90 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS4 štartér do auta | 77.50 € | **99.50 €** | 15.1 % | **47.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFGV8080 Softbox | 57.50 € | **79.50 €** | 15.1 % | **59.2 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT2302 Digitálny tester zemného odporu | 116.00 € | **136.90 €** | 14.9 % | **35.6 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT262E – bezkontaktný detektor poradia fáz | 88.50 € | **108.90 €** | 14.9 % | **41.4 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD BT černé | 154.90 € | **174.90 €** | 7.3 % | **21.2 %** | 174.91 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 154.90 € | **174.90 €** | 7.3 % | **21.2 %** | 174.91 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXMC400E | 64.00 € | **83.90 €** | 10.0 % | **44.2 %** | 83.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 128.90 € | **148.00 €** | 8.2 % | **24.2 %** | 148.17 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT371 | 65.90 € | **84.00 €** | 15.3 % | **47.0 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT6000 99,9 Wh štartér | 119.00 € | **136.90 €** | 15.0 % | **32.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – Powerbanka | 62.00 € | **79.50 €** | 14.6 % | **47.0 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň LIENE Pearl N200 Pro 2x3" (fi... | 91.50 € | **108.90 €** | 26.0 % | **50.0 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl N200 Pro 2x3" (zl... | 91.50 € | **108.90 €** | 23.9 % | **47.5 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1855DB 2.0 (čierne) | 133.90 € | **150.90 €** | 15.1 % | **29.7 %** | 151.00 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 75.00 € | **92.00 €** | 10.0 % | **34.9 %** | 92.13 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DT20 s meracou páskou s ... | 48.00 € | **64.00 €** | 9.7 % | **46.2 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 77.50 € | **93.00 €** | 5.6 % | **26.7 %** | 93.19 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Nočné svetlo D1 Matter Smart na nočný stolík | 59.00 € | **74.00 €** | 14.6 % | **43.7 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T26B1 | 182.50 € | **196.50 €** | 18.5 % | **27.6 %** | 196.58 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 65.50 € | **79.50 €** | 5.9 % | **28.5 %** | 79.73 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 88.00 € | **102.00 €** | 9.8 % | **27.2 %** | 102.38 € | cena podľa najlacnejšieho iného predajcu |
| Súprava držadiel PGY RetroVa pre iPhone 16 Pro | 88.00 € | **102.00 €** | 10.3 % | **27.9 %** | 102.38 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 88.00 € | **102.00 €** | 7.8 % | **24.9 %** | 102.38 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 88.00 € | **102.00 €** | 7.8 % | **24.9 %** | 102.38 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 45.90 € | **59.50 €** | 15.3 % | **49.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 142.00 € | **155.50 €** | 13.8 % | **24.7 %** | 155.63 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B2-EU | 238.90 € | **251.90 €** | 16.0 % | **22.3 %** | 252.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro – štandardná sada | 62.00 € | **74.00 €** | 14.7 % | **36.9 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-Q29 8MP Wi-Fi IP kamera s dvoma objektívmi | 42.00 € | **54.00 €** | 14.5 % | **47.3 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Neptune 4 Max | 380.90 € | **392.00 €** | 5.1 % | **8.1 %** | 392.09 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat DIGITRADIO 550 IR /černé/ | 138.50 € | **149.50 €** | 5.2 % | **13.6 %** | 149.90 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S AI | 54.50 € | **64.50 €** | 17.5 % | **39.1 %** | 64.85 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT3000 44,4 Wh štartér | 59.50 € | **69.50 €** | 14.7 % | **33.9 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R19BT 2.0 (čierne) | 33.90 € | **43.50 €** | 14.8 % | **47.4 %** | 43.78 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S30 nabíjacia stanica 6 v 1 4xUSB-C + 2... | 38.00 € | **47.50 €** | 14.3 % | **42.9 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 54.50 € | **64.00 €** | 12.6 % | **32.2 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S UV AI | 54.50 € | **64.00 €** | 17.5 % | **38.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 54.50 € | **64.00 €** | 13.2 % | **32.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa na hubenie hmyzu BALDRTHERM (BZ60... | 44.90 € | **54.00 €** | 15.4 % | **38.8 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Neewer R06 s okrúhlym LED osvetlením pre sel... | 21.50 € | **30.50 €** | 14.5 % | **62.4 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HBL-801 kaskádový filter | 18.00 € | **27.00 €** | 35.6 % | **103.4 %** | 27.16 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 50.50 € | **59.50 €** | 14.6 % | **35.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 9 (čierny) | 34.00 € | **42.50 €** | 14.5 % | **43.1 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Fotografická taška cez rameno PGYTECH OneGo Pocket S... | 34.00 € | **42.50 €** | 14.6 % | **43.2 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Merač elektromagnetického poľa Habotest HT627 | 40.50 € | **49.00 €** | 15.4 % | **39.6 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Válcová kefa MOVA | 13.50 € | **22.00 €** | 14.8 % | **87.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 45.50 € | **54.00 €** | 16.1 % | **37.8 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 91.00 € | **99.00 €** | 9.5 % | **19.2 %** | 99.13 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 43.00 € | **51.00 €** | 18.9 % | **41.0 %** | 51.19 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality K1 Max 2025 | 514.50 € | **522.50 €** | 5.1 % | **6.7 %** | 522.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 37.50 € | **45.50 €** | 15.4 % | **40.0 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X2 Carplay/Android ... | 32.00 € | **40.00 €** | 15.1 % | **43.8 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhoľnatého MOES WSS-CO s pripojením c... | 28.00 € | **36.00 €** | 15.2 % | **48.1 %** | 36.50 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 8 (čierny) | 34.00 € | **42.00 €** | 14.5 % | **41.4 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7355CH | 54.50 € | **62.00 €** | 10.7 % | **25.9 %** | 62.04 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 174.00 € | **181.50 €** | 16.5 % | **21.6 %** | 181.83 € | cena podľa najlacnejšieho iného predajcu |
| MOES WHT-006-GB-WH Wi-Fi termostat pre elektrické kú... | 32.50 € | **40.00 €** | 15.2 % | **41.8 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer NutriSpin | 46.90 € | **54.00 €** | 15.2 % | **32.6 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 260.50 € | **267.50 €** | 8.5 % | **11.4 %** | 267.89 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre GoPro Hero 13 | 31.50 € | **38.50 €** | 14.4 % | **39.8 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 31.00 € | **37.50 €** | 12.9 % | **36.5 %** | 37.59 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Tiny 3 | 353.50 € | **360.00 €** | 5.0 % | **6.9 %** | 360.19 € | cena podľa najlacnejšieho iného predajcu |
| Spúšťacia jednotka UTRAI JS10 | 95.50 € | **102.00 €** | 15.6 % | **23.5 %** | 102.29 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa Portable Monitor Z1FC 16,1" | 113.00 € | **119.50 €** | 8.6 % | **14.9 %** | 119.83 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 172.00 € | **178.50 €** | 17.3 % | **21.7 %** | 178.88 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 25.00 € | **31.50 €** | 14.3 % | **44.0 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 100.50 € | **107.00 €** | 13.8 % | **21.2 %** | 107.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prsteň COLMI R02, veľkosť 12,21,3 mm (č... | 27.50 € | **34.00 €** | 14.6 % | **41.7 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 70.90 € | **77.00 €** | 33.3 % | **44.8 %** | 77.12 € | cena podľa najlacnejšieho iného predajcu |
| Stojan JMGO pre modely N1S SE, Nano a PicoPlay+ | 112.90 € | **119.00 €** | 15.0 % | **21.2 %** | 119.42 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2119 PRO na ovládanie letu | 71.50 € | **77.50 €** | 5.7 % | **14.5 %** | 77.67 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER x660 PRO II | 200.50 € | **206.50 €** | 20.4 % | **24.0 %** | 206.71 € | cena podľa najlacnejšieho iného predajcu |
| Twarde etui Sunnylife do Neo 2 Motion Fly More Combo | 53.50 € | **59.50 €** | 14.7 % | **27.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Shifter Moza Racing HGP RS039 | 143.50 € | **149.50 €** | 6.9 % | **11.4 %** | 149.90 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 84.00 € | **90.00 €** | 7.3 % | **15.0 %** | 90.46 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-10 | 27.00 € | **33.00 €** | 14.4 % | **39.8 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter MOVA pre model LR10 PRIME | 27.00 € | **33.00 €** | 14.8 % | **40.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell série V2 VND/CPL II 3-7 s... | 142.00 € | **148.00 €** | 22.3 % | **27.4 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 292.90 € | **298.50 €** | 5.1 % | **7.1 %** | 298.71 € | cena podľa najlacnejšieho iného predajcu |
| Modul dávkovača kvapalín MOVA pre model V50U | 24.90 € | **30.50 €** | 15.5 % | **41.5 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD200XS (biely) | 52.00 € | **57.50 €** | 23.6 % | **36.7 %** | 57.73 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 24.00 € | **29.50 €** | 28.2 % | **57.6 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 24.00 € | **29.50 €** | 28.2 % | **57.6 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-01 | 22.00 € | **27.50 €** | 14.1 % | **42.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-P67 3MP Wi-Fi IP kamera | 19.50 € | **25.00 €** | 14.2 % | **46.4 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT333BT Mini merač teploty a vlhkosti | 25.90 € | **31.00 €** | 15.2 % | **37.9 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač MOVA K30 Lite | 209.90 € | **215.00 €** | 5.0 % | **7.6 %** | 215.32 € | cena podľa najlacnejšieho iného predajcu |
| Turecký kávovar HiBREW CM1179_EU | 41.00 € | **46.00 €** | 10.9 % | **24.4 %** | 46.04 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 68.00 € | **73.00 €** | 12.3 % | **20.6 %** | 73.07 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 345.00 € | **350.00 €** | 71819.9 % | **72862.3 %** | 350.21 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 30cm WiFi/Bluetooth 16M RGBCW Gos... | 21.50 € | **26.50 €** | 14.7 % | **41.4 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 22.50 € | **27.50 €** | 14.3 % | **39.7 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Krytky objektívov Puluz pre kameru Insta360 X5 | 30.50 € | **35.50 €** | 15.3 % | **34.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 filters Sunnylife MCUV, ND8/16/34/64/128 fo... | 22.00 € | **27.00 €** | 14.4 % | **40.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR černé | 194.90 € | **199.50 €** | 16.7 % | **19.5 %** | 199.90 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 194.90 € | **199.50 €** | 16.7 % | **19.5 %** | 199.90 € | cena podľa najlacnejšieho iného predajcu |
| LED trubicové svietidlo NEEWER TL60 20 W | 118.50 € | **123.00 €** | 19.2 % | **23.8 %** | 123.13 € | cena podľa najlacnejšieho iného predajcu |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 77.00 € | **81.50 €** | 14.6 % | **21.3 %** | 81.67 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Ruhhy 26829 | 33.50 € | **38.00 €** | 10.3 % | **25.1 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Kompaktný statív Neewer TP02 pre fotoaparáty a telefóny | 20.90 € | **25.00 €** | 15.8 % | **38.5 %** | 25.46 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **95.90 €** | 14.9 % | **19.9 %** | 95.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 106.00 € | **110.00 €** | 14.8 % | **19.1 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 27.50 € | **31.50 €** | 33.6 % | **53.1 %** | 31.77 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (biely) | 103.50 € | **107.50 €** | 14.9 % | **19.3 %** | 107.79 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 81.50 € | **85.50 €** | 7.8 % | **13.1 %** | 85.89 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 18.50 € | **22.50 €** | 14.0 % | **38.7 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 16.50 € | **20.50 €** | 16.5 % | **44.8 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 81.00 € | **85.00 €** | 16.3 % | **22.0 %** | 85.46 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 4K + Tripod | 50.00 € | **54.00 €** | 12.4 % | **21.3 %** | 54.46 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT598 | 25.00 € | **28.90 €** | 6.9 % | **23.5 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak MagSafe Fun Shot Grip2 (čierny) | 20.90 € | **24.50 €** | 15.5 % | **35.4 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-654A | 118.50 € | **122.00 €** | 19.0 % | **22.5 %** | 122.01 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-604B štvorzónový plynový sporák so sklen... | 118.50 € | **122.00 €** | 26.5 % | **30.2 %** | 122.01 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT20R-WH-3A-W-WiFi | 29.50 € | **33.00 €** | 10.7 % | **23.8 %** | 33.13 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 61.50 € | **65.00 €** | 5.9 % | **11.9 %** | 65.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 ATX + 6 ventilátorov ... | 114.00 € | **117.50 €** | 17.7 % | **21.4 %** | 117.63 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50 (sivé) | 36.00 € | **39.50 €** | 13.2 % | **24.2 %** | 39.63 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1902B-SV | 82.00 € | **85.50 €** | 16.4 % | **21.4 %** | 85.67 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 122.50 € | **126.00 €** | 11.1 % | **14.3 %** | 126.21 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 123.00 € | **126.50 €** | 12.7 % | **15.9 %** | 126.71 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 520.50 € | **524.00 €** | 6.6 % | **7.3 %** | 524.34 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic GAUSS TAPE ECHO | 60.00 € | **63.50 €** | 15.0 % | **21.7 %** | 63.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT826 (čierne) | 29.50 € | **33.00 €** | 27.4 % | **42.6 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické LED svetlo na selfie NEEWER NL48B | 16.50 € | **20.00 €** | 15.5 % | **40.1 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Kabel USB-A do USB-C 350mm PGYTECH (P-GM-124) | 14.50 € | **18.00 €** | 13.7 % | **41.1 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT888 (čierne) | 23.90 € | **27.00 €** | 9.8 % | **24.0 %** | 27.33 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 75.90 € | **79.00 €** | 18.4 % | **23.3 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 75.90 € | **79.00 €** | 18.4 % | **23.3 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| Neewer GM76 179 cm statív / monopod | 94.90 € | **98.00 €** | 19.5 % | **23.4 %** | 98.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Štvorcový rám, bloku... | 65.90 € | **69.00 €** | 19.5 % | **25.1 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 147.90 € | **151.00 €** | 12.8 % | **15.2 %** | 151.30 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX EPF61RR | 88.90 € | **92.00 €** | 5.2 % | **8.9 %** | 92.33 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 Pro (biely) | 50.00 € | **53.00 €** | 8.4 % | **14.9 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 Pro (čierny) | 50.00 € | **53.00 €** | 9.2 % | **15.7 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 25.00 € | **28.00 €** | 16.7 % | **30.7 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (fialová) | 47.00 € | **50.00 €** | 10.1 % | **17.1 %** | 50.16 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 195.00 € | **198.00 €** | 5.4 % | **7.0 %** | 198.28 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B4 (modrá) | 62.50 € | **65.50 €** | 5.6 % | **10.6 %** | 65.81 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 13.50 € | **16.50 €** | 14.8 % | **40.3 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre DJI Osmo Action 5 (modré) | 15.50 € | **18.50 €** | 13.9 % | **36.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 12.50 € | **15.50 €** | 14.3 % | **41.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný snímač teploty a vlhkosti WiFi Gosund S... | 12.50 € | **15.50 €** | 17.8 % | **46.0 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Rozšíriteľný statív Puluz so selfie tyčou | 16.50 € | **19.50 €** | 15.3 % | **36.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Bass Brassmaster Fuzz pedál pre gitaru a b... | 72.00 € | **75.00 €** | 15.0 % | **19.8 %** | 75.40 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3236 | 33.00 € | **36.00 €** | 12.4 % | **22.6 %** | 36.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší TWS Haylou X1 2023 ENC (modré) | 16.00 € | **19.00 €** | 20.7 % | **43.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Maono PD200W (čierny) | 71.00 € | **73.90 €** | 10.3 % | **14.9 %** | 74.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 22.90 € | **25.50 €** | 13.1 % | **26.0 %** | 25.67 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT805 (čierne) | 22.90 € | **25.50 €** | 12.4 % | **25.1 %** | 25.75 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 12.90 € | **15.50 €** | 14.6 % | **37.7 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 11.90 € | **14.50 €** | 14.6 % | **39.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač pre rolety MOES WRS-EUC-WH-MS | 12.90 € | **15.50 €** | 14.9 % | **38.0 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny rámik Arzopa D10 10,1" (tmavohnedý) | 72.90 € | **75.50 €** | 15.2 % | **19.3 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 136.50 € | **139.00 €** | 20.3 % | **22.5 %** | 139.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 10.00 € | **12.50 €** | 14.2 % | **42.7 %** | 12.60 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Copertinto BL439G10 | 57.00 € | **59.50 €** | 6.5 % | **11.2 %** | 59.67 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro PGYTECH For Mavic 3 Pro/Mavic 3 Classic/Mavic... | 38.50 € | **41.00 €** | 13.8 % | **21.2 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne) | 36.50 € | **39.00 €** | 15.6 % | **23.5 %** | 39.17 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 36.50 € | **39.00 €** | 15.6 % | **23.5 %** | 39.17 € | cena podľa najlacnejšieho iného predajcu |
| ETA Essenco 1634 90000, bílý | 26.00 € | **28.50 €** | 5.2 % | **15.3 %** | 28.70 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 125.00 € | **127.50 €** | 11.0 % | **13.2 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.50 € | **20.00 €** | 12.6 % | **28.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 21.00 € | **23.50 €** | 16.9 % | **30.8 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Party Queen | 27.50 € | **30.00 €** | 5.8 % | **15.4 %** | 30.40 € | cena podľa najlacnejšieho iného predajcu |
| Hliníkový držiak Sunnylife pre Insta360 X5/X4 | 16.00 € | **18.50 €** | 14.4 % | **32.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Sunnylife na riadidlá pre ovládač | 14.00 € | **16.50 €** | 13.8 % | **34.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 33.00 € | **35.50 €** | 12.1 % | **20.6 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 33.00 € | **35.50 €** | 12.1 % | **20.6 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 62.00 € | **64.50 €** | 13.0 % | **17.5 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 111.50 € | **114.00 €** | 12.4 % | **14.9 %** | 114.47 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 72.50 € | **75.00 €** | 14.8 % | **18.8 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, studená b... | 11.50 € | **14.00 €** | 49.6 % | **82.1 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA G69 (ružová) (QWERTY) | 33.50 € | **36.00 €** | 11.9 % | **20.2 %** | 36.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER NL48B – Magnetické selfie svetlo (čierne) | 17.50 € | **20.00 €** | 15.7 % | **32.2 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 770 PRO 32 Ohm | 145.50 € | **147.90 €** | 5.2 % | **7.0 %** | 148.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 15.50 € | **17.90 €** | 45.5 % | **68.0 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot My Dino II | 19.90 € | **22.00 €** | 18.2 % | **30.7 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.90 € | **34.00 €** | 16.0 % | **23.7 %** | 34.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight vodeodolná prepojovací krabička IP68, 1x vst... | 7.90 € | **10.00 €** | 55.5 % | **96.9 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov Sunnylife CPL + ND8 + ND16 pre Osmo Nano | 15.90 € | **18.00 €** | 16.4 % | **31.7 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife puzdro pre DJI Osmo Mobile 7 (čierne) | 10.90 € | **13.00 €** | 15.2 % | **37.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 103.90 € | **106.00 €** | 5.1 % | **7.2 %** | 106.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.80 € | **9.80 €** | 7.8 % | **35.5 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 87.50 € | **89.50 €** | 8.9 % | **11.4 %** | 89.54 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 30.00 € | **32.00 €** | 6.2 % | **13.3 %** | 32.09 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro (čierny) | 128.00 € | **130.00 €** | 12.0 % | **13.7 %** | 130.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 17.00 € | **19.00 €** | 22.7 % | **37.2 %** | 19.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 16.00 € | **18.00 €** | 20.2 % | **35.3 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma na riasy ANLAN 08-AJMJ31-02A | 18.00 € | **20.00 €** | 25.8 % | **39.8 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na okolie očí a pier EMS ANLAN 08-A... | 18.00 € | **20.00 €** | 23.1 % | **36.8 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife 761V2 magnetický držiak pre OP 3 (čierny) | 10.00 € | **12.00 €** | 12.9 % | **35.5 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6750mAh 14.8V 60C 4S1P 14# XT90 Battery | 80.00 € | **81.90 €** | 20.8 % | **23.7 %** | 81.92 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 114.00 € | **115.90 €** | 5.2 % | **7.0 %** | 115.94 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-P23 100 W 14 000 mAh powerbanka | 50.00 € | **51.90 €** | 16.9 % | **21.3 %** | 51.96 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 6.8 % | **14.1 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 9.30 € | **11.00 €** | 10.1 % | **30.2 %** | 11.39 € | cena podľa najlacnejšieho iného predajcu |
| Kefa MOVA na rôzne povrchy pre detektor S2 | 10.90 € | **12.50 €** | 17.1 % | **34.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 | 40.50 € | **42.00 €** | 5.4 % | **9.3 %** | 42.04 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 22.50 € | **24.00 €** | 10.1 % | **17.4 %** | 24.04 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo FF0700A | 17.50 € | **19.00 €** | 7.8 % | **17.0 %** | 19.10 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica ELEGOO Mercury XS | 130.00 € | **131.50 €** | 18.0 % | **19.3 %** | 131.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 22.50 € | **24.00 €** | 12.4 % | **19.9 %** | 24.13 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6AC V2 | 54.00 € | **55.50 €** | 18.8 % | **22.1 %** | 55.63 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 26.50 € | **28.00 €** | 5.4 % | **11.3 %** | 28.19 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 5 m | 41.50 € | **43.00 €** | 14.9 % | **19.0 %** | 43.21 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 105.50 € | **107.00 €** | 15.0 % | **16.7 %** | 107.23 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo C225 | 59.00 € | **60.50 €** | 11.7 % | **14.5 %** | 60.76 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 34.00 € | **35.50 €** | 8.6 % | **13.4 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 30.50 € | **32.00 €** | 14.2 % | **19.8 %** | 32.33 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 142.00 € | **143.50 €** | 30.7 % | **32.1 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 56.50 € | **58.00 €** | 81.5 % | **86.3 %** | 58.36 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 37-75" Perlesmith PSTVS13 | 32.00 € | **33.50 €** | 15.7 % | **21.2 %** | 33.88 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 26.00 € | **27.50 €** | 5.5 % | **11.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| TELESIN Univerzálny držiak na rúrku riadidiel pre šp... | 18.00 € | **19.50 €** | 28.5 % | **39.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak s prísavkou Telesin pre DJI Osmo Action 3/4/5... | 11.00 € | **12.50 €** | 14.9 % | **30.6 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 28.00 € | **29.50 €** | 20.3 % | **26.7 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady V3 Kit for Smartphones (black) | 104.00 € | **105.50 €** | 14.8 % | **16.4 %** | 105.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **17.50 €** | 15.3 % | **26.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNCM9 13-32" monitor mount | 31.50 € | **33.00 €** | 20.0 % | **25.7 %** | 33.43 € | cena podľa najlacnejšieho iného predajcu |
| Detektor drôtov UNI-T UT25CL | 137.50 € | **139.00 €** | 10.1 % | **11.3 %** | 139.49 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny prostriedok na čistenie podláh pre model... | 18.50 € | **20.00 €** | 15.2 % | **24.5 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak PULUZ pre Insta360 GO Ultra (čierny) | 13.50 € | **15.00 €** | 15.7 % | **28.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Carrying Case Sunnylife for DJI FPV Remote Controlle... | 10.50 € | **12.00 €** | 14.7 % | **31.1 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 135 | 45.50 € | **46.90 €** | 5.8 % | **9.1 %** | 46.99 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 9N2BR-S | 397.50 € | **398.90 €** | 5.1 % | **5.5 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 19.90 € | **21.00 €** | 18.2 % | **24.7 %** | 21.05 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 S Pro (biely) | 51.90 € | **53.00 €** | 5.6 % | **7.8 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.90 € | **25.00 €** | 18.7 % | **24.2 %** | 25.13 € | cena podľa najlacnejšieho iného predajcu |
| Mini detektor úniku plynu Habotest HT61 | 15.90 € | **17.00 €** | 6.0 % | **13.3 %** | 17.29 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 99.90 € | **101.00 €** | 5.8 % | **7.0 %** | 101.50 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 149.50 € | **150.50 €** | 11.2 % | **12.0 %** | 150.59 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 21391-56/RH | 50.00 € | **51.00 €** | 12.0 % | **14.3 %** | 51.10 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 24.00 € | **25.00 €** | 21.6 % | **26.6 %** | 25.12 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED snehuliak Solight 1V233, 4 LED, 2 × AA | 11.50 € | **12.50 €** | 32.1 % | **43.5 %** | 12.63 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V69 smartwatch (black) | 35.50 € | **36.50 €** | 15.4 % | **18.7 %** | 36.63 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 17,9MM 7 (čierny) | 31.50 € | **32.50 €** | 18.4 % | **22.2 %** | 32.63 € | cena podľa najlacnejšieho iného predajcu |
| Maono PD100 Microphone Black | 30.50 € | **31.50 €** | 15.1 % | **18.9 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 77.00 € | **78.00 €** | 12.8 % | **14.3 %** | 78.14 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT605 | 19.50 € | **20.50 €** | 17.2 % | **23.2 %** | 20.68 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 10.50 € | **11.50 €** | 17.9 % | **29.1 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 84.50 € | **85.50 €** | 12.0 % | **13.3 %** | 85.69 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 30.00 € | **31.00 €** | 6.6 % | **10.2 %** | 31.20 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 63.50 € | **64.50 €** | 19.6 % | **21.5 %** | 64.75 € | cena podľa najlacnejšieho iného predajcu |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 68.00 € | **69.00 €** | 12.0 % | **13.6 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 68.00 € | **69.00 €** | 8.9 % | **10.5 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 35.00 € | **36.00 €** | 12.2 % | **15.4 %** | 36.29 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 35.00 € | **36.00 €** | 15.1 % | **18.4 %** | 36.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 41.00 € | **42.00 €** | 22.5 % | **25.5 %** | 42.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 s 6 ventilátormi (čie... | 115.00 € | **116.00 €** | 19.5 % | **20.5 %** | 116.33 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash F1 (čierna) + 6 ventilát... | 115.00 € | **116.00 €** | 16.0 % | **17.0 %** | 116.33 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire L3 P90 | 28.50 € | **29.50 €** | 9.6 % | **13.4 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VN200 (čierne a červené) | 22.50 € | **23.50 €** | 14.3 % | **19.4 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **19.00 €** | 15.0 % | **21.3 %** | 19.38 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 92.50 € | **93.50 €** | 7.9 % | **9.1 %** | 93.89 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 122.50 € | **123.50 €** | 7.2 % | **8.1 %** | 123.89 € | cena podľa najlacnejšieho iného predajcu |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 98.50 € | **99.50 €** | 22.5 % | **23.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 19.50 € | **20.50 €** | 15.1 % | **21.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mobilnej dokovacej stanice VITURE pre Nintend... | 20.00 € | **21.00 €** | 26.4 % | **32.8 %** | 21.47 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Magnetic Wall | 12.00 € | **13.00 €** | 15.5 % | **25.1 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 47.00 € | **48.00 €** | 29.1 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 18.00 € | **19.00 €** | 31.1 % | **38.4 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9268WK | 35.00 € | **35.90 €** | 16.9 % | **19.9 %** | 35.95 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 689.00 € | **689.90 €** | 14.1 % | **14.2 %** | 689.98 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná krajinka s domčekom Solight 1V264, 18 c... | 5.80 € | **6.60 €** | 26.8 % | **44.2 %** | 6.63 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 18.90 € | **19.50 €** | 5.7 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| LEXIBOOK Set Tlapková patrola-vysílačky | 24.90 € | **25.50 €** | 10.9 % | **13.5 %** | 25.58 € | cena podľa najlacnejšieho iného predajcu |
| Maono PD100X RGB Microphone Black | 43.90 € | **44.50 €** | 38.1 % | **40.0 %** | 44.71 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND64/PL | 18.90 € | **19.50 €** | 5.2 % | **8.5 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 10Ah MHPower MS10-12(L) F2-6,3mm | 40.90 € | **41.50 €** | 5.1 % | **6.7 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 41.90 € | **42.50 €** | 41.8 % | **43.8 %** | 42.85 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Compact | 37.90 € | **38.50 €** | 8.4 % | **10.1 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV5736E0 | 53.90 € | **54.50 €** | 13.0 % | **14.2 %** | 54.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšie ochranné puzdro na káble, IP44 | 3.20 € | **3.80 €** | 56.7 % | **86.1 %** | 3.89 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet SE (biela) | 82.90 € | **83.50 €** | 11.1 % | **11.9 %** | 83.63 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.50 € | **109.00 €** | 7.7 % | **8.2 %** | 109.02 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 HD | 21.00 € | **21.50 €** | 19.9 % | **22.8 %** | 21.54 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Xany 2B, aktivní pokojová anténa | 15.50 € | **16.00 €** | 8.7 % | **12.2 %** | 16.08 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 39.50 € | **40.00 €** | 6.1 % | **7.4 %** | 40.09 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus AL1 | 37.50 € | **38.00 €** | 18.7 % | **20.3 %** | 38.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.00 € | **17.50 €** | 39.2 % | **43.3 %** | 17.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 20.00 € | **20.50 €** | 9.1 % | **11.9 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (čierne) | 20.00 € | **20.50 €** | 15.2 % | **18.1 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 20.00 € | **20.50 €** | 13.5 % | **16.4 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 19,1MM 9 (čierny) | 36.00 € | **36.50 €** | 20.4 % | **22.1 %** | 36.71 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000  (čierny) | 67.00 € | **67.50 €** | 33.7 % | **34.7 %** | 67.71 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 Wi-Fi (čierny) | 67.00 € | **67.50 €** | 8.7 % | **9.5 %** | 67.71 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 Wi- (biely) | 67.00 € | **67.50 €** | 8.7 % | **9.5 %** | 67.71 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2404 | 107.00 € | **107.50 €** | 14.5 % | **15.0 %** | 107.71 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 43.00 € | **43.50 €** | 21.2 % | **22.6 %** | 43.79 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 20.00 € | **20.50 €** | 15.5 % | **18.4 %** | 20.80 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 25.00 € | **25.50 €** | 14.7 % | **17.0 %** | 25.86 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 36.50 € | **37.00 €** | 59.2 % | **61.4 %** | 37.38 € | cena podľa najlacnejšieho iného predajcu |
| Držiak športovej kamery na riadidlá PGYTECH (P-GM-171) | 37.50 € | **38.00 €** | 22.2 % | **23.8 %** | 38.38 € | cena podľa najlacnejšieho iného predajcu |
| Ovládač PXN-P5 8K | 32.00 € | **32.50 €** | 10.2 % | **12.0 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 24.00 € | **24.50 €** | 10.2 % | **12.5 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 79.00 € | **79.50 €** | 35.8 % | **36.7 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Montážna základňa PGYTECH Suction Cup | 13.00 € | **13.50 €** | 33.4 % | **38.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ DJI Mini / Osmo Pocket puzdro na prenášanie (č... | 11.00 € | **11.50 €** | 14.5 % | **19.7 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna doska Moza Racing RS089 | 34.00 € | **34.50 €** | 15.1 % | **16.8 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 webová kamera | 54.50 € | **55.00 €** | 20.1 % | **21.2 %** | 55.46 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 20Ah VOLT + bezúdržbový systém... | 108.50 € | **109.00 €** | 26.4 % | **27.0 %** | 109.47 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 14.50 € | **15.00 €** | 44.5 % | **49.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight valce z mikrovlákna pre Dyson Wash G1 | 20.50 € | **21.00 €** | 29.6 % | **32.8 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 11.50 € | **12.00 €** | 21.6 % | **26.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (sivá) | 11.50 € | **12.00 €** | 26.2 % | **31.7 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 11.50 € | **12.00 €** | 21.6 % | **26.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 12.50 € | **13.00 €** | 12.8 % | **17.3 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Zásuvkový termostatický regulátor teploty Meross MTS... | 36.50 € | **37.00 €** | 17.0 % | **18.6 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V275, 25 cm, 5 LED, 2 ... | 16.50 € | **16.90 €** | 41.1 % | **44.5 %** | 16.96 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 28.50 € | **28.90 €** | 18.4 % | **20.1 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.50 € | **16.90 €** | 21.5 % | **24.5 %** | 16.99 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.30 € | **8.70 €** | 66.6 % | **74.6 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz do okna – Santa Solight 1V251, 12... | 2.50 € | **2.70 €** | 33.7 % | **44.4 %** | 2.71 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s farebnými guľami Solight 1V273,... | 2.80 € | **3.00 €** | 34.7 % | **44.3 %** | 3.01 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les s jeleňmi Solight 1V249,... | 3.40 € | **3.60 €** | 35.5 % | **43.5 %** | 3.64 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 5.60 € | **5.80 €** | 39.7 % | **44.6 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná hviezda na stenu Solight 1V261, 24 LED,... | 3.70 € | **3.90 €** | 34.3 % | **41.6 %** | 4.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1008 8x GLan, 19"rack | 37.90 € | **38.00 €** | 5.3 % | **5.5 %** | 38.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.90 € | **18.00 €** | 46.6 % | **47.4 %** | 18.07 € | cena podľa najlacnejšieho iného predajcu |
| Solárny panel TP-Link Tapo A200 pre batériové kamery... | 26.90 € | **27.00 €** | 5.5 % | **5.9 %** | 27.22 € | cena podľa najlacnejšieho iného predajcu |
| myPhone 3510 LTE černý | 61.90 € | **62.00 €** | 11.3 % | **11.5 %** | 62.23 € | cena podľa najlacnejšieho iného predajcu |
| Gyroskop pre RC modely áut SkyRC Gyro GC301 | 20.90 € | **21.00 €** | 15.8 % | **16.4 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (172)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Nabíjacia stanica FOSSIBOT F2400 2400 W (čierna) | 868.50 € | **807.90 €** | 15.0 % | **7.0 %** | 808.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 170.90 € | **138.90 €** | 69.6 % | **37.8 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 228.50 € | **196.50 €** | 33.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| BlitzWolf BW-VS4 120" projection screen. | 64.00 € | **34.00 €** | 115.0 % | **14.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 64.90 € | **35.50 €** | 162.0 % | **43.3 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Napäťový menič MHPower WPU-500-12 UPS, 500W, čistý s... | 119.50 € | **97.00 €** | 35.6 % | **10.1 %** | 97.13 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 798.00 € | **777.00 €** | 14.1 % | **11.1 %** | 777.18 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 463.50 € | **448.90 €** | 9.4 % | **6.0 %** | 449.00 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie GoPro Hero 13/12/11/10/9/8/MAX | 38.50 € | **24.00 €** | 115.4 % | **34.3 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 240W, 33600lm, 120°, Philips, MW, ... | 128.50 € | **116.90 €** | 44.8 % | **31.8 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 37.50 € | **26.90 €** | 61.1 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gens ace G-Tech 4500mAh 6S1P 22.2V 60C HardCase RC c... | 94.00 € | **84.00 €** | 46.8 % | **31.2 %** | 84.04 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 268.90 € | **258.90 €** | 32.4 % | **27.5 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT302D+ | 79.50 € | **69.50 €** | 51.0 % | **32.0 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B70... | 116.50 € | **106.90 €** | 55.6 % | **42.7 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 57.90 € | **49.50 €** | 73.9 % | **48.7 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 155.00 € | **146.90 €** | 51.7 % | **43.8 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer MR600 4G LTE WiFI Router | 162.50 € | **154.90 €** | 10.3 % | **5.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 67.00 € | **59.50 €** | 35.9 % | **20.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny osciloskop FNIRSI DPOS350P 4 v 1 | 277.50 € | **270.50 €** | 14.9 % | **12.0 %** | 270.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 107.00 € | **101.00 €** | 18.6 % | **12.0 %** | 101.19 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS062 svorka volantu pre stôl | 54.90 € | **49.00 €** | 18.3 % | **5.6 %** | 49.25 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R60 eXtremo Green | 89.00 € | **83.90 €** | 11.5 % | **5.1 %** | 82.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 33.50 € | **28.50 €** | 34.6 % | **14.5 %** | 28.63 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 33.00 € | **28.50 €** | 70.0 % | **46.8 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 33.00 € | **28.50 €** | 131.1 % | **99.6 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 33.00 € | **28.50 €** | 43.5 % | **23.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Mobilný ovládač GameSir G8+ MFi (sivý) | 78.50 € | **74.00 €** | 44.0 % | **35.7 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BC060 | 22.00 € | **18.00 €** | 35.7 % | **11.0 %** | 18.08 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov PGYTECH ND-PL pre DJI Mavic Pro (P-43A-... | 35.00 € | **31.00 €** | 61.1 % | **42.7 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FF203130 | 67.50 € | **64.00 €** | 10.8 % | **5.0 %** | 52.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odpadkový kôš Curver Verto High 54 l tmavomodrý | 45.50 € | **42.00 €** | 14.0 % | **5.2 %** | 42.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Redmi Note 17 6/256GB Purple | 270.50 € | **267.50 €** | 6.4 % | **5.2 %** | 254.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX AD300ProII pre upevnenie Godox | 496.00 € | **493.00 €** | 13.6 % | **12.9 %** | 493.14 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 52.00 € | **49.00 €** | 20.8 % | **13.9 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC28TFW11 – 28” Full HD Smart TV (12 V, WebOS... | 334.00 € | **331.50 €** | 7.3 % | **6.5 %** | 331.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO727BL | 58.50 € | **56.00 €** | 11.2 % | **6.4 %** | 56.44 € | cena podľa najlacnejšieho iného predajcu |
| Dielenská baterka Superfire G21, 650lm, USB | 14.00 € | **11.90 €** | 36.3 % | **15.9 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.50 € | **35.50 €** | 11.1 % | **5.1 %** | 32.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.50 € | **18.50 €** | 43.8 % | **29.8 %** | 18.52 € | cena podľa najlacnejšieho iného predajcu |
| Kábel USB-A do Lightning MFI 0,35 m PGYTECH (P-GM-115) | 15.50 € | **13.50 €** | 38.5 % | **20.6 %** | 13.63 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto MercedesBenz Actros + AM | 45.50 € | **43.50 €** | 13.5 % | **8.6 %** | 43.83 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 82.00 € | **80.00 €** | 32.2 % | **29.0 %** | 80.49 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 46.90 € | **45.00 €** | 14.3 % | **9.7 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight elektrický sušiak uterákov 130W | 98.50 € | **96.90 €** | 51.0 % | **48.6 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjateľná stolová lampa Yeelight 4 v 1 | 18.00 € | **16.50 €** | 19.9 % | **9.9 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 7 (čierny) | 44.00 € | **42.50 €** | 48.1 % | **43.1 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Sunlu PLA+ (čierny) | 18.00 € | **16.50 €** | 59.9 % | **46.6 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB BLOW 76-033 GaN 45W USB-A + USB-C + 1m... | 11.50 € | **10.00 €** | 23.0 % | **7.0 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro na iPhone Puluz (40 m) s jednosmern... | 55.50 € | **54.00 €** | 15.5 % | **12.4 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 7.10 € | **5.80 €** | 122.0 % | **81.4 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO Rapid PLA+ (čierny) | 13.00 € | **11.90 €** | 38.2 % | **26.5 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO30211IP | 125.00 € | **123.90 €** | 22.6 % | **21.6 %** | 124.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 139.00 € | **137.90 €** | 46.0 % | **44.8 %** | 138.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový zvonček a nočné svetielko, do zás... | 6.80 € | **5.80 €** | 68.6 % | **43.8 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 402.90 € | **401.90 €** | 6.8 % | **6.6 %** | 402.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 212.90 € | **211.90 €** | 38364.3 % | **38183.6 %** | 212.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 647.90 € | **646.90 €** | 116955.1 % | **116774.4 %** | 647.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 19.00 € | **18.00 €** | 44.4 % | **36.8 %** | 18.19 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 13.50 € | **12.50 €** | 33.0 % | **23.2 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 204.50 € | **203.50 €** | 14.3 % | **13.8 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 40.00 € | **39.00 €** | 9.1 % | **6.3 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NB907MAW | 63.00 € | **62.00 €** | 12.1 % | **10.3 %** | 62.50 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 22.90 € | **22.00 €** | 13.0 % | **8.6 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight ratanová LED lampáš s LED žiarovkou, teplá b... | 6.60 € | **5.80 €** | 22.8 % | **7.9 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový lampáš so žiarovkou s micro LED, tepl... | 5.50 € | **4.80 €** | 21.5 % | **6.0 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo pracovné, 120+40lm, 3W COB + 3... | 3.80 € | **3.10 €** | 49.2 % | **21.8 %** | 3.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.50 € | **15.00 €** | 8.7 % | **5.2 %** | 15.04 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 14.5 % | **12.2 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic UniTune Clip | 37.50 € | **37.00 €** | 13.5 % | **12.0 %** | 37.10 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCJ30E | 18.50 € | **18.00 €** | 14.1 % | **11.0 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 745W | 29.50 € | **29.00 €** | 16.8 % | **14.8 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 30.00 € | **29.50 €** | 26.1 % | **24.0 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 59.00 € | **58.50 €** | 7.2 % | **6.3 %** | 58.79 € | cena podľa najlacnejšieho iného predajcu |
| Barkan S320. B - natáčecí stojan pro TV (29-58'' 25k... | 59.00 € | **58.50 €** | 16.9 % | **15.9 %** | 58.79 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 79.50 € | **79.00 €** | 12.5 % | **11.8 %** | 79.29 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 64.50 € | **64.00 €** | 14.2 % | **13.3 %** | 64.29 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 75.50 € | **75.00 €** | 15.8 % | **15.0 %** | 75.29 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine MA10410 | 74.50 € | **74.00 €** | 6.0 % | **5.3 %** | 74.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 56.00 € | **55.50 €** | 12.5 % | **11.5 %** | 55.79 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 84.00 € | **83.50 €** | 13.9 % | **13.2 %** | 83.79 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač Evercon AH-707 | 52.00 € | **51.50 €** | 14.5 % | **13.4 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 24.50 € | **24.00 €** | 7.7 % | **5.5 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera EVO 27876 Porsche 911 GT3 R | 41.00 € | **40.50 €** | 12.3 % | **11.0 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Flextail Tiny Helio 700Z (oranžová) | 23.00 € | **22.50 €** | 19.7 % | **17.1 %** | 22.79 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 343.00 € | **342.50 €** | 25.3 % | **25.2 %** | 342.89 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 64.00 € | **63.50 €** | 95.6 % | **94.1 %** | 63.89 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 113.50 € | **113.00 €** | 38.7 % | **38.1 %** | 113.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **10.50 €** | 26.0 % | **20.2 %** | 10.89 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Quartett 20 | 12.50 € | **12.00 €** | 12.8 % | **8.3 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit LinoLift 500 85359 | 55.50 € | **55.00 €** | 12.1 % | **11.1 %** | 55.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 38.00 € | **37.50 €** | 10.5 % | **9.1 %** | 37.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 49.50 € | **49.00 €** | 13.0 % | **11.9 %** | 49.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.00 € | **69.50 €** | 13.0 % | **12.2 %** | 69.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.00 € | **88.50 €** | 14.2 % | **13.6 %** | 88.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 317.00 € | **316.50 €** | 18.0 % | **17.9 %** | 316.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 238.50 € | **238.00 €** | 11.7 % | **11.5 %** | 238.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 128.50 € | **128.00 €** | 7.2 % | **6.8 %** | 128.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.00 € | **470.50 €** | 8.8 % | **8.7 %** | 470.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 925.00 € | **924.50 €** | 17.6 % | **17.5 %** | 924.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.00 € | **78.50 €** | 13.9 % | **13.2 %** | 78.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.00 € | **88.50 €** | 14.1 % | **13.5 %** | 88.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.00 € | **131.50 €** | 15.6 % | **15.1 %** | 131.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 81.50 € | **81.00 €** | 7.8 % | **7.1 %** | 81.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 76.50 € | **76.00 €** | 6.3 % | **5.6 %** | 76.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 160.00 € | **159.50 €** | 8.1 % | **7.8 %** | 159.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 187.50 € | **187.00 €** | 11.4 % | **11.1 %** | 187.39 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS4K-24 24V/3800W | 292.00 € | **291.50 €** | 5.3 % | **5.1 %** | 291.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 256.00 € | **255.50 €** | 19.6 % | **19.4 %** | 255.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 114.50 € | **114.00 €** | 6.8 % | **6.4 %** | 114.39 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 73.00 € | **72.50 €** | 7.0 % | **6.3 %** | 72.89 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 86.50 € | **86.00 €** | 21.0 % | **20.3 %** | 86.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 52.00 € | **51.50 €** | 8.3 % | **7.3 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 278.50 € | **278.00 €** | 25.2 % | **24.9 %** | 278.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 26.50 € | **26.00 €** | 17.6 % | **15.4 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 266.00 € | **265.50 €** | 9.0 % | **8.8 %** | 265.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 245.50 € | **245.00 €** | 23.8 % | **23.5 %** | 245.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 275.50 € | **275.00 €** | 8.5 % | **8.3 %** | 275.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 24.00 € | **23.50 €** | 8.6 % | **6.3 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 150.00 € | **149.50 €** | 6.0 % | **5.7 %** | 149.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.50 € | **19.00 €** | 29.6 % | **26.3 %** | 19.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.00 € | **116.50 €** | 23100.5 % | **23001.3 %** | 116.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 79.00 € | **78.50 €** | 35.8 % | **34.9 %** | 78.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 186.00 € | **185.50 €** | 6.4 % | **6.1 %** | 185.89 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 16.50 € | **16.00 €** | 17.9 % | **14.3 %** | 16.39 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 188.00 € | **187.50 €** | 10.7 % | **10.4 %** | 187.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 309.50 € | **309.00 €** | 5.3 % | **5.1 %** | 309.39 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU3941WBW | 358.50 € | **358.00 €** | 5.2 % | **5.1 %** | 358.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 608.50 € | **608.00 €** | 5.9 % | **5.8 %** | 608.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 638.50 € | **638.00 €** | 7.8 % | **7.7 %** | 638.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 686.50 € | **686.00 €** | 12.0 % | **11.9 %** | 686.39 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 83.00 € | **82.50 €** | 26.5 % | **25.8 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.00 € | **161.50 €** | 20.8 % | **20.5 %** | 161.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 105.00 € | **104.50 €** | 11.2 % | **10.7 %** | 104.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.00 € | **151.50 €** | 18.9 % | **18.5 %** | 151.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.00 € | **126.50 €** | 16.5 % | **16.1 %** | 126.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 28.00 € | **27.50 €** | 45.5 % | **42.9 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 152.50 € | **152.00 €** | 31.5 % | **31.1 %** | 152.44 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 287.50 € | **287.00 €** | 16.5 % | **16.3 %** | 287.46 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.50 € | **296.00 €** | 12.8 % | **12.7 %** | 296.48 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 41.50 € | **41.00 €** | 8.7 % | **7.4 %** | 41.49 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 14.50 € | **14.00 €** | 9.3 % | **5.5 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 163.50 € | **163.00 €** | 12.7 % | **12.4 %** | 163.50 € | cena podľa najlacnejšieho iného predajcu |
| Šnúrka na krk PULUZ pre DJI RC 2/RC 1/Air | 11.50 € | **11.00 €** | 16.1 % | **11.1 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 320.50 € | **320.00 €** | 13.1 % | **13.0 %** | 320.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.50 € | **19.00 €** | 34.5 % | **31.0 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 3611A | 110.90 € | **110.50 €** | 10.3 % | **9.9 %** | 110.60 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 125.90 € | **125.50 €** | 21.0 % | **20.6 %** | 125.88 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 67.90 € | **67.50 €** | 8.0 % | **7.4 %** | 67.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter 1-5 stop Freewell Sherpa True Color VND pre i... | 79.90 € | **79.50 €** | 33.5 % | **32.8 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 12W, E27, 4000K... | 1.80 € | **1.40 €** | 78.5 % | **38.8 %** | 1.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací pravouhlý konektor pre COB LED p... | 2.10 € | **1.70 €** | 81.6 % | **47.0 %** | 1.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový lampáš s LED sviečkou, teplá biela, 3... | 6.10 € | **5.70 €** | 21.6 % | **13.6 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.90 € | **28.50 €** | 11.0 % | **9.5 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 35.90 € | **35.50 €** | 39.0 % | **37.4 %** | 35.89 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 40.90 € | **40.50 €** | 34.5 % | **33.2 %** | 40.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 49.90 € | **49.50 €** | 63.3 % | **62.0 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Krbový ventilátor Kaminer 26206 5-lopatkový | 29.90 € | **29.50 €** | 14.0 % | **12.5 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 581.90 € | **581.50 €** | 8.6 % | **8.5 %** | 581.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.80 € | **5.60 €** | 34.3 % | **29.7 %** | 5.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.50 € | **5.30 €** | 22.2 % | **17.7 %** | 5.39 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.00 € | **2.80 €** | 33.3 % | **24.4 %** | 2.89 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les a jeleň Solight 1V223-A,... | 5.70 € | **5.50 €** | 44.4 % | **39.3 %** | 5.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.30 € | **2.10 €** | 41.7 % | **29.3 %** | 2.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.70 € | **9.50 €** | 16.8 % | **14.4 %** | 9.59 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 388.00 € | **387.90 €** | 8.7 % | **8.7 %** | 387.99 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9176RK | 29.00 € | **28.90 €** | 10.1 % | **9.7 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.00 € | **19.90 €** | 12.8 % | **12.2 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini Bag PULUZ for DJI Osmo Pocket 3 (Black) | 5.90 € | **5.80 €** | 15.3 % | **13.4 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 3.90 € | **3.80 €** | 123.3 % | **117.6 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 138.00 € | **137.90 €** | 15.6 % | **15.5 %** | 137.94 € | cena podľa najlacnejšieho iného predajcu |

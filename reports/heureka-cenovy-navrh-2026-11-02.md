# Návrh na úpravu cien podľa Heureka porovnania — 2026-11-02

Vstup: `premiumstore-sk_2026-11-02_09-48.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6146**
- Návrh **zvýšiť** cenu: **1051** produktov
- Návrh **znížiť** cenu: **612** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4483** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **57**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **314**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (1051)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Eliptický trenažér MERACH MR-E33B4 | 480.50 € | **675.00 €** | 19.3 % | **67.6 %** | 675.27 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 440.00 € | **626.00 €** | 19.3 % | **69.8 %** | 626.07 € | cena podľa najlacnejšieho iného predajcu |
| Sada panelov Moza Racing FMP18 | 964.50 € | **1146.90 €** | 21.5 % | **44.5 %** | 1147.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 437.00 € | **613.50 €** | 19.4 % | **67.6 %** | 613.77 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **656.90 €** | 4.6 % | **41.6 %** | 657.00 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový bicykel MERACH MR-S19 | 422.00 € | **583.00 €** | 21.5 % | **67.9 %** | 583.02 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, strieborná) | 269.00 € | **416.90 €** | 19.3 % | **84.9 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, čierna) | 271.00 € | **416.90 €** | 19.3 % | **83.6 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet Prime SE | 307.50 € | **448.90 €** | 19.5 % | **74.4 %** | 449.00 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server TERRAMASTER F6-424 NAS s procesorom ... | 738.50 € | **878.90 €** | 19.4 % | **42.1 %** | 879.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 249.00 € | **386.00 €** | 19.3 % | **85.0 %** | 386.22 € | cena podľa najlacnejšieho iného predajcu |
| Elektráreň Allpowers S2000 Pro | 625.00 € | **756.90 €** | 15.0 % | **39.3 %** | 757.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší HiFiMAN RE2000 Pro Gold | 417.00 € | **539.90 €** | 21.3 % | **57.1 %** | 539.97 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 537.00 € | **656.90 €** | 16.2 % | **42.2 %** | 657.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 189.50 € | **298.90 €** | 19.5 % | **88.5 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 189.90 € | **296.90 €** | 19.5 % | **86.9 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer CB300C RGB | 387.50 € | **478.90 €** | 17.2 % | **44.8 %** | 479.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 26.6 % | **42.7 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **298.90 €** | 33.8 % | **88.5 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **296.90 €** | 33.5 % | **86.9 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| LaserPecker 2 – základná verzia | 436.00 € | **518.90 €** | 13.7 % | **35.3 %** | 519.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 2 ks LED svietidiel NEEWER RGB1200 60 W V4 | 367.00 € | **446.90 €** | 17.1 % | **42.5 %** | 447.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 | 418.50 € | **496.90 €** | 17.3 % | **39.2 %** | 497.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 7 | 333.50 € | **408.90 €** | 31.3 % | **61.0 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 9 | 333.50 € | **408.90 €** | 31.3 % | **61.0 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 315.00 € | **388.90 €** | 15.2 % | **42.2 %** | 389.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 6 | 333.50 € | **406.90 €** | 31.3 % | **60.2 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 8 | 333.50 € | **406.90 €** | 28.2 % | **56.5 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 317.50 € | **388.90 €** | 14.0 % | **39.6 %** | 389.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **312.00 €** | 10.8 % | **43.0 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality Halot X1 Combo | 524.00 € | **592.90 €** | 19.3 % | **35.0 %** | 593.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **368.90 €** | 37.8 % | **69.3 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **368.90 €** | 37.6 % | **69.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **368.90 €** | 37.6 % | **69.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 37.6 % | **69.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-3 Thunderbolt 5 | 321.00 € | **388.90 €** | 19.4 % | **44.7 %** | 389.00 € | cena podľa najlacnejšieho iného predajcu |
| Robotický čistič okien MOVA N1 (čierny) | 294.50 € | **358.90 €** | 17.7 % | **43.5 %** | 359.00 € | cena podľa najlacnejšieho iného predajcu |
| ANCEL L5000 PRO – diagnostický detektor únikov pre a... | 287.00 € | **348.90 €** | 19.2 % | **44.9 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 810.50 € | **870.00 €** | 11.9 % | **20.1 %** | 870.20 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 5800mAh 60C 18.5V 5S1P Lipo Battery Pack wi... | 64.00 € | **117.00 €** | 18.5 % | **116.7 %** | 117.09 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny magnetický filtračný systém Freewell K2 | 302.00 € | **355.00 €** | 21.3 % | **42.5 %** | 355.47 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **758.00 €** | 3.7 % | **11.4 %** | 758.13 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer CB200C RGB | 238.50 € | **288.90 €** | 17.2 % | **42.0 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z22P PRO s 22-palcovým doty... | 348.00 € | **398.00 €** | 19.2 % | **36.4 %** | 398.01 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LK10 s väčším formátom | 247.00 € | **296.90 €** | 19.3 % | **43.4 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultimea Aura S5T | 210.00 € | **258.90 €** | 13.9 % | **40.4 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 45.2 % | **68.7 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 45.7 % | **69.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256A | 380.50 € | **428.90 €** | 14.9 % | **29.6 %** | 429.00 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB200B | 230.90 € | **278.90 €** | 17.2 % | **41.5 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **238.90 €** | 4.4 % | **30.3 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 45.7 % | **68.3 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **338.90 €** | 22.9 % | **42.2 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (čier... | 96.00 € | **141.00 €** | 13.3 % | **66.5 %** | 141.33 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTX1 Pro S, Twin | 278.00 € | **322.50 €** | 5.6 % | **22.5 %** | 322.62 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec Mini PC M3 Intel i5-12450H 16 GB RAM + 512 GB... | 561.50 € | **604.50 €** | 15.0 % | **23.9 %** | 604.70 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 175.00 € | **217.50 €** | 10.0 % | **36.7 %** | 217.72 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 Max | 684.00 € | **726.50 €** | 8.7 % | **15.5 %** | 726.89 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Soundbar HW-B420F | 67.00 € | **108.90 €** | 7.2 % | **74.3 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RBB1200 | 187.00 € | **228.90 €** | 17.1 % | **43.3 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada na nabíjanie akčnej kamery SJCAM SJ30 (čierny) | 275.00 € | **316.90 €** | 21.3 % | **39.8 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 784.00 € | **825.00 €** | 9.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektráreň Allpowers VOLIX P300 | 168.50 € | **208.90 €** | 15.1 % | **42.7 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HUION Note E X50 | 414.00 € | **453.50 €** | 19.3 % | **30.7 %** | 453.87 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie 10102847 FS150B | 199.50 € | **238.90 €** | 17.2 % | **40.3 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera SJCAM M60, 3 kanály (čierny) | 200.00 € | **238.90 €** | 19.3 % | **42.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 s 6 ventilátormi (čie... | 116.00 € | **153.50 €** | 18.1 % | **56.2 %** | 153.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash F1 (čierna) + 6 ventilát... | 116.00 € | **153.50 €** | 14.9 % | **52.1 %** | 153.63 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **231.00 €** | 4.1 % | **23.6 %** | 231.17 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER SF120Q 120 cm parabolický softbox | 110.50 € | **147.00 €** | 21.4 % | **61.5 %** | 147.48 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **349.00 €** | 15.0 % | **28.0 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer MS60C RGB | 171.00 € | **205.90 €** | 16.8 % | **40.7 %** | 205.95 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z60 Pro 2026 – palubná kamera | 134.90 € | **168.90 €** | 15.5 % | **44.6 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 27.3 % | **42.6 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 275.50 € | **308.90 €** | 26.4 % | **41.7 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre robotický vysávač Dreame A... | 48.90 € | **82.00 €** | 15.4 % | **93.5 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B1-EU | 261.00 € | **294.00 €** | 19.2 % | **34.3 %** | 294.09 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 188.90 € | **221.90 €** | 9.2 % | **28.2 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu |
| Anamorfný objektív Freewell 1,33x s bajonetom 17 mm | 204.00 € | **236.90 €** | 10.5 % | **28.3 %** | 237.00 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **208.00 €** | 45.0 % | **72.1 %** | 208.02 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash HM1 | 67.00 € | **99.50 €** | 19.2 % | **77.0 %** | 99.51 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ20 – nabíjací set (čierny) | 206.50 € | **238.90 €** | 19.4 % | **38.1 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **146.90 €** | 4.4 % | **33.5 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame Aqua10 Ultra Track Complete, Aqua10 U... | 80.00 € | **112.00 €** | 14.7 % | **60.6 %** | 112.35 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (biela) + 4 ventil... | 82.50 € | **114.50 €** | 19.3 % | **65.5 %** | 114.89 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) + 7 ventilá... | 70.00 € | **101.90 €** | 13.1 % | **64.7 %** | 101.97 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN D1Air | 158.00 € | **188.90 €** | 19.2 % | **42.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mop PROSCENIC F10 Ultra | 188.50 € | **218.90 €** | 19.5 % | **38.8 %** | 219.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava ultratenkého LED kruhového osvetlenia Neewer... | 176.90 € | **206.90 €** | 21.4 % | **42.0 %** | 207.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **299.50 €** | 6.2 % | **18.0 %** | 299.61 € | cena podľa najlacnejšieho iného predajcu |
| Stavebná sada robota xTool mBot2 Rover | 345.00 € | **375.00 €** | 19.3 % | **29.7 %** | 375.25 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 270.00 € | **300.00 €** | 19.4 % | **32.7 %** | 300.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 270.00 € | **300.00 €** | 19.4 % | **32.7 %** | 300.42 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER GR18C Okrúhly LED panel pre bočné osvetlenie | 197.00 € | **226.90 €** | 21.2 % | **39.6 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu |
| LED trubicové svietidlo NEEWER TL60 20 W | 157.00 € | **186.90 €** | 21.3 % | **44.4 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 138.90 € | **167.90 €** | 57.1 % | **89.9 %** | 167.95 € | cena podľa najlacnejšieho iného predajcu |
| Mobilná dokovacia stanica VITURE Pro | 159.50 € | **188.50 €** | 9.7 % | **29.7 %** | 188.71 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslovací trenažér Deer Run RW600 (biely) | 321.00 € | **350.00 €** | 19.2 % | **30.0 %** | 350.21 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G900pro 4K + 2,5K palubná kamera | 270.00 € | **298.50 €** | 19.3 % | **31.9 %** | 298.76 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (čierna) + 4 venti... | 101.00 € | **129.00 €** | 18.2 % | **51.0 %** | 129.03 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 4.4 % | **29.7 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-22KW... | 351.00 € | **378.90 €** | 34.3 % | **45.0 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (biela) | 151.50 € | **178.90 €** | 19.3 % | **40.9 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (čierna) | 151.50 € | **178.90 €** | 19.3 % | **40.9 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD (čierna) + 4 ven... | 65.00 € | **92.00 €** | 13.9 % | **61.2 %** | 92.13 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera SJCAM M60 (čierny) | 142.90 € | **168.90 €** | 19.4 % | **41.2 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY470 so 4 ventilátormi ... | 120.90 € | **146.90 €** | 16.9 % | **42.0 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 2026 – palubná kamera | 141.50 € | **166.90 €** | 19.1 % | **40.5 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Projector Blitzwolf, BW-V8, 4K, Android OS | 141.50 € | **166.90 €** | 16.7 % | **37.6 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| GL.iNet Beryl 7 Wi-Fi 7 router | 163.90 € | **188.90 €** | 21.2 % | **39.7 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera WOLFBOX G930 4K + 1080p 64 GB | 132.00 € | **156.90 €** | 19.5 % | **42.0 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistič okien PROSCENIC Win10pro | 144.50 € | **168.90 €** | 19.1 % | **39.2 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka Allpowers S200 200 W | 102.50 € | **126.90 €** | 15.2 % | **42.6 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 126.00 € | **148.90 €** | 17.1 % | **38.4 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB4xyzf-CS 4-zónová indukčná varná doska | 136.00 € | **158.90 €** | 21.2 % | **41.7 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 133.00 € | **155.50 €** | 24.9 % | **46.1 %** | 155.56 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 104.50 € | **126.90 €** | 14.9 % | **39.5 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX ES30 pre e-šport | 144.50 € | **166.90 €** | 21.2 % | **39.9 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Sekvenčná prevodovka PXN | 146.50 € | **168.90 €** | 14.2 % | **31.7 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátorový vysávač ULTENIC U18 Pro | 137.00 € | **158.90 €** | 19.2 % | **38.3 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 117.00 € | **138.90 €** | 13.2 % | **34.4 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (biely) | 107.50 € | **128.90 €** | 19.3 % | **43.1 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 417.50 € | **438.90 €** | 13.2 % | **19.0 %** | 439.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91701R | 343.90 € | **364.50 €** | 5.0 % | **11.3 %** | 364.89 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418 PRO + 7 ventilátoro... | 78.90 € | **99.50 €** | 14.8 % | **44.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (čierna) + 6 venti... | 63.00 € | **83.50 €** | 16.3 % | **54.1 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **215.00 €** | 4.5 % | **15.5 %** | 215.10 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT2302 Digitálny tester zemného odporu | 117.00 € | **136.90 €** | 12.9 % | **32.2 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-IRC128D35 | 99.00 € | **118.90 €** | 14.8 % | **37.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Stojan JMGO pre modely N1S SE, Nano a PicoPlay+ | 119.00 € | **138.90 €** | 19.0 % | **38.9 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 365.00 € | **384.90 €** | 19.4 % | **25.9 %** | 384.96 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **156.90 €** | 15.9 % | **32.4 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **156.90 €** | 46.2 % | **67.0 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT262E – bezkontaktný detektor poradia fáz | 89.50 € | **108.90 €** | 13.2 % | **37.7 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **106.50 €** | 41.3 % | **72.7 %** | 106.89 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM005 15 kg výrobník ľadu (čierny) | 140.00 € | **159.00 €** | 5.0 % | **19.3 %** | 159.06 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **89.50 €** | 4.4 % | **32.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 34.00 € | **52.50 €** | 18.3 % | **82.7 %** | 52.77 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 75.50 € | **94.00 €** | 13.8 % | **41.6 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Kaderník 4 v 1 ANLAN 05-ACFS41-02E | 78.50 € | **96.90 €** | 19.2 % | **47.2 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Prevodovka PXN - usporiadanie H 7+1 | 75.90 € | **94.00 €** | 5.5 % | **30.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 129.00 € | **146.90 €** | 14.8 % | **30.8 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R20BT 2.0 (čierne) | 61.90 € | **79.50 €** | 45.0 % | **86.2 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT371 | 66.50 € | **84.00 €** | 13.7 % | **43.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Ultra hustý uhlíkový... | 149.50 € | **166.90 €** | 27.1 % | **41.9 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| xTool Codey Rocky – vzdelávacia verzia – vzdelávací ... | 182.50 € | **199.90 €** | 19.2 % | **30.6 %** | 200.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **92.00 €** | 33.5 % | **64.1 %** | 92.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK351+ 4 ventilátory (bi... | 43.90 € | **61.00 €** | 14.2 % | **58.6 %** | 61.38 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V020, 12 000 mAh | 141.90 € | **159.00 €** | 13.3 % | **27.0 %** | 159.47 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120P | 181.00 € | **198.00 €** | 6.7 % | **16.7 %** | 198.37 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera DDPAI Z50 Pro | 90.00 € | **106.90 €** | 18.9 % | **41.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1919 (čierny) | 102.00 € | **118.90 €** | 19.3 % | **39.0 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W9 | 162.00 € | **178.90 €** | 19.0 % | **31.4 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.00 € | **127.50 €** | 11.0 % | **27.5 %** | 127.82 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DPX90 (čierna) + 3 venti... | 57.50 € | **74.00 €** | 15.2 % | **48.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **61.00 €** | 34.1 % | **83.4 %** | 61.38 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter na odstraňova... | 192.50 € | **208.90 €** | 26.2 % | **37.0 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter s aktívnym uhlím | 192.50 € | **208.90 €** | 26.2 % | **37.0 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 110.00 € | **126.00 €** | 19.1 % | **36.5 %** | 126.14 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS4 štartér do auta | 83.50 € | **99.50 €** | 21.6 % | **44.9 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ6 Ultra (čierny) | 121.00 € | **136.90 €** | 19.4 % | **35.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar PCD-499 BT Discman CD/MP3 s BT | 46.00 € | **61.90 €** | 11.6 % | **50.1 %** | 61.99 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2440G1-EU (sivá) | 141.00 € | **156.50 €** | 19.0 % | **32.1 %** | 156.69 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer NutriSpin | 48.50 € | **64.00 €** | 9.9 % | **45.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-AZ-EM1501-SV s piestom (strieborný) | 103.50 € | **118.90 €** | 19.1 % | **36.8 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Photo Studio PULUZ 80 cm (PU5083EU) | 93.50 € | **108.90 €** | 15.7 % | **34.8 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-11KW... | 321.50 € | **336.90 €** | 35.5 % | **42.0 %** | 337.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **54.00 €** | 7.0 % | **48.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **64.00 €** | 6.1 % | **38.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 284.90 € | **299.90 €** | 15.1 % | **21.1 %** | 299.96 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón Freewell Genius Rig pre iPhone 17 ... | 121.90 € | **136.90 €** | 13.8 % | **27.8 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 59.00 € | **74.00 €** | 21.2 % | **52.0 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **136.90 €** | 26.2 % | **41.7 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Okružná píla NAC AKU CS-165-LI-ST2-20V | 110.00 € | **124.90 €** | 13.0 % | **28.3 %** | 124.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava osvetlenia Softbox 10102773 700 W, 3 ks | 104.00 € | **118.90 €** | 21.0 % | **38.3 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 31.3 % | **62.3 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon P1 | 609.50 € | **624.00 €** | 8.3 % | **10.8 %** | 624.21 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 184.00 € | **198.50 €** | 6.7 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 35.0 % | **66.2 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-B -6072 WiFi Smart Digital Lock Black | 102.50 € | **116.90 €** | 21.5 % | **38.5 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) | 44.50 € | **58.90 €** | 16.6 % | **54.3 %** | 58.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **46.50 €** | 4.8 % | **50.0 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 355.00 € | **368.90 €** | 19.3 % | **24.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **71.00 €** | 33.8 % | **65.5 %** | 71.22 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI HS-02A F 100 W inteligentná spájkovačka | 100.90 € | **114.50 €** | 5.2 % | **19.3 %** | 114.70 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič vody Darkflash DN 360 (biely) | 70.00 € | **83.50 €** | 18.8 % | **41.7 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 85.50 € | **98.90 €** | 19.2 % | **37.9 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G840S 4K + 1080p 32 GB palubná kamera | 137.50 € | **150.50 €** | 19.2 % | **30.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Kit Neewer NK800 two softboxes + bulbs RGB 24W 2700-... | 93.90 € | **106.90 €** | 21.3 % | **38.1 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada flexibilného osvetlenia Neewer BH40C s dvoma ra... | 147.00 € | **160.00 €** | 17.0 % | **27.3 %** | 160.12 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (biela) + 3 vent... | 79.00 € | **92.00 €** | 15.1 % | **34.1 %** | 92.13 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá TRUTHEAR Zero Blue 2 (modré) | 70.50 € | **83.50 €** | 15.3 % | **36.6 %** | 83.63 € | cena podľa najlacnejšieho iného predajcu |
| Lampa monitora BlitzWolf BW-CML6 | 51.00 € | **64.00 €** | 20.5 % | **51.2 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Selfie stick TELESIN with ball head for action cameras | 15.00 € | **27.50 €** | 15.2 % | **111.1 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Phone Cage PGY ProShot pre iPhone 17 Pro Max | 67.00 € | **79.50 €** | 21.2 % | **43.8 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Nočné svetlo D1 Matter Smart na nočný stolík | 61.50 € | **74.00 €** | 16.3 % | **39.9 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V802 PRO 12000mah návnada loď (čierna) | 142.50 € | **154.90 €** | 19.1 % | **29.5 %** | 154.98 € | cena podľa najlacnejšieho iného predajcu |
| Petoneer NutriVue smart food dispenser (with stainle... | 72.90 € | **85.00 €** | 17.1 % | **36.5 %** | 85.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **33.00 €** | 30.3 % | **104.8 %** | 33.31 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre V60 MOBIUS | 47.50 € | **59.50 €** | 16.8 % | **46.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 47.50 € | **59.50 €** | 16.4 % | **45.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90T 4G palubná kamera | 227.00 € | **238.90 €** | 19.3 % | **25.5 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **136.90 €** | 31.2 % | **43.6 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G900TriPro – palubná kamera s WiFi, rozlíšen... | 274.90 € | **286.50 €** | 8.5 % | **13.1 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G900TriPro – palubná kamera s WiFi a rozlíše... | 274.90 € | **286.50 €** | 19.4 % | **24.5 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife AQX-20 pre Mavic 4 PRO & RC 2 c | 57.90 € | **69.50 €** | 7.6 % | **29.2 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **146.90 €** | 34.2 % | **45.7 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CB60B Dvojfarebné 70 W LED štúdiové osvetlenie | 124.50 € | **136.00 €** | 17.0 % | **27.8 %** | 136.22 € | cena podľa najlacnejšieho iného predajcu |
| Filter 1-5 stop Freewell Sherpa True Color VND pre i... | 68.00 € | **79.50 €** | 11.3 % | **30.2 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C500. | 72.50 € | **84.00 €** | 24.0 % | **43.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – filter so strednou ú... | 147.50 € | **158.90 €** | 31.1 % | **41.2 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **61.00 €** | 30.4 % | **60.0 %** | 61.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **61.00 €** | 37.7 % | **68.9 %** | 61.38 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG2PS72A12 | 233.90 € | **244.90 €** | 5.1 % | **10.0 %** | 244.92 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Shoulder Bag Sunnylife for RS 4 | 24.50 € | **35.50 €** | 17.9 % | **70.9 %** | 35.55 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – Powerbanka | 65.50 € | **76.50 €** | 17.6 % | **37.4 %** | 76.85 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 78.50 € | **89.50 €** | 19.3 % | **36.0 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Ateliérové osvetlenie NEEWER BASICS SL90C | 43.00 € | **54.00 €** | 16.9 % | **46.8 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash EMT850 (čierny) | 58.90 € | **69.50 €** | 11.6 % | **31.7 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| KMP H125 (CZ101AE) | 11.90 € | **22.50 €** | 12.9 % | **113.5 %** | 22.73 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7N Pro WiFi 4K + 1080p palubná kamera | 116.00 € | **126.50 €** | 19.0 % | **29.8 %** | 126.65 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener REVOPOINT Mini 2 – edícia Advanced | 1009.00 € | **1019.50 €** | 19.5 % | **20.8 %** | 1019.67 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma G83 (čierna) | 49.00 € | **59.50 €** | 18.6 % | **44.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 49.00 € | **59.50 €** | 7.7 % | **30.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-Q29 8MP Wi-Fi IP kamera s dvoma objektívmi | 43.50 € | **54.00 €** | 15.6 % | **43.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 63.50 € | **74.00 €** | 40.1 % | **63.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 50.50 € | **60.90 €** | 26.4 % | **52.4 %** | 60.96 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **62.00 €** | 5.4 % | **26.0 %** | 62.50 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD200WS (čierny) | 90.90 € | **101.00 €** | 14.0 % | **26.7 %** | 101.16 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Bright Day Freeweel Mission 1 Pro/Missi... | 73.90 € | **84.00 €** | 15.1 % | **30.8 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **126.90 €** | 36.4 % | **48.1 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 73.50 € | **83.50 €** | 12.9 % | **28.3 %** | 83.65 € | cena podľa najlacnejšieho iného predajcu |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 59.00 € | **69.00 €** | 6.3 % | **24.3 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT302D+ | 69.50 € | **79.50 €** | 29.4 % | **48.1 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (biela) | 53.50 € | **63.50 €** | 13.2 % | **34.4 %** | 63.84 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 57 | 134.00 € | **144.00 €** | 11.7 % | **20.1 %** | 144.35 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 PRO (biela) + 6 ven... | 49.50 € | **59.50 €** | 13.1 % | **35.9 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný pedál PXN Vector X Clutch | 103.50 € | **113.50 €** | 10.0 % | **20.6 %** | 113.90 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS20 – multifunkčný štartér do auta | 84.00 € | **94.00 €** | 28.8 % | **44.1 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na televízor Perlgear PGLF8B-N1 | 44.00 € | **54.00 €** | 18.3 % | **45.2 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 4500mAh 6S1P 22.2V 60C HardCase RC c... | 84.00 € | **94.00 €** | 28.6 % | **43.9 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 118.50 € | **128.50 €** | 6.2 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **256.90 €** | 35.5 % | **40.9 %** | 257.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **89.50 €** | 31.3 % | **47.0 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter xTool SafetyPro™ AP2 so strednou účinnosťou | 37.00 € | **46.50 €** | 35.9 % | **70.8 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa Neewer RGB168, 60 W, 2500–8500 K | 141.50 € | **151.00 €** | 17.0 % | **24.8 %** | 151.35 € | cena podľa najlacnejšieho iného predajcu |
| 2 v 1 Diagnostic Scanner OBD2 and Battery Tester Anc... | 50.00 € | **59.50 €** | 18.3 % | **40.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V050 Moro, 12 000 mAh | 80.00 € | **89.50 €** | 18.3 % | **32.3 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný statív Neewer LT35 z uhlíkových vlákien s o... | 256.50 € | **266.00 €** | 21.3 % | **25.8 %** | 266.49 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (biela) | 64.50 € | **74.00 €** | 19.3 % | **36.9 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – vysokoúčinný filter | 147.50 € | **156.90 €** | 31.1 % | **39.5 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine TAM8 (ružový) | 89.50 € | **98.90 €** | 18.9 % | **31.4 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5RCNA375HXB1 HarvestFresh | 358.50 € | **367.90 €** | 7.2 % | **10.0 %** | 367.93 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 4.9 % | **29.4 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX i17 WiFi 4K + 2,5K 64 GB palubná kamera | 133.90 € | **143.00 €** | 19.3 % | **27.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 42.5 % | **74.6 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **49.00 €** | 30.6 % | **60.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 53.2 % | **87.8 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.50 €** | 4.2 % | **15.1 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9215AV | 32.50 € | **41.50 €** | 10.4 % | **41.0 %** | 41.62 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 70.00 € | **79.00 €** | 11.2 % | **25.4 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Merač elektromagnetického poľa Habotest HT627 | 40.00 € | **49.00 €** | 9.8 % | **34.5 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač VEXILAR C9 s vertikálnou konštrukciou | 75.00 € | **84.00 €** | 16.5 % | **30.5 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 60cm LED stan bez tienidla 3380 lúmenov | 45.00 € | **54.00 €** | 20.9 % | **45.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 2800mAh 22.2V 60C 6S1P Lipo Battery ... | 65.00 € | **74.00 €** | 42.8 % | **62.6 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25630 fialová | 45.00 € | **54.00 €** | 10.0 % | **32.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8500mAh 14.8V 60C 4S1P Lipo Battery ... | 116.00 € | **124.90 €** | 37.2 % | **47.7 %** | 124.94 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – súprava „... | 90.00 € | **98.90 €** | 18.1 % | **29.7 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 36.50 € | **45.00 €** | 11.1 % | **36.9 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F9 WiFi 4K + 1080p palubná kamera | 87.00 € | **95.50 €** | 18.9 % | **30.6 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Ice Machine 651 | 99.00 € | **107.50 €** | 11.2 % | **20.8 %** | 107.62 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S30 nabíjacia stanica 6 v 1 4xUSB-C + 2... | 40.00 € | **48.50 €** | 13.4 % | **37.5 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 23-60" Perlesmith PSTVMC06 | 51.00 € | **59.50 €** | 18.7 % | **38.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre Pentax | 56.00 € | **64.50 €** | 20.4 % | **38.7 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L WiFi verzia Bl Automatický dávkovač krmiva | 38.00 € | **46.50 €** | 12.4 % | **37.6 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2416B1 Tréningový stroj na lyžovanie | 61.00 € | **69.50 €** | 19.3 % | **35.9 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro – štandardná sada | 65.50 € | **74.00 €** | 17.7 % | **33.0 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Fagor 4LVF-638ADIT | 460.50 € | **469.00 €** | 5.0 % | **6.9 %** | 469.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra (12-dielna) | 141.50 € | **149.90 €** | 8.5 % | **14.9 %** | 149.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **77.90 €** | 29.7 % | **45.0 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 127.90 € | **135.90 €** | 15.3 % | **22.5 %** | 135.94 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Fifine Tank6 (biely) | 72.50 € | **80.50 €** | 18.8 % | **31.9 %** | 80.69 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 864 Senior Radio | 126.50 € | **134.50 €** | 13.0 % | **20.2 %** | 134.73 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 152.50 € | **160.50 €** | 9.3 % | **15.1 %** | 160.90 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 – vysokovýkonný filter | 41.50 € | **49.50 €** | 14.4 % | **36.5 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 11.1V 3S1P 60C HardCase 15# ... | 51.50 € | **59.50 €** | 43.4 % | **65.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| MOES WHT-006-GB-WH Wi-Fi termostat pre elektrické kú... | 34.00 € | **42.00 €** | 11.1 % | **37.2 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CA077 Univerzálny držiak na fotoaparát | 86.00 € | **94.00 €** | 21.2 % | **32.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT6000 99,9 Wh štartér | 129.00 € | **136.90 €** | 21.5 % | **28.9 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka Dreame – pre modely Track Aqua10 Ul... | 14.00 € | **21.90 €** | 14.2 % | **78.6 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **54.00 €** | 33.0 % | **55.7 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 51.90 € | **59.50 €** | 21.5 % | **39.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 51.90 € | **59.50 €** | 21.5 % | **39.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 48.00 € | **55.50 €** | 9.8 % | **27.0 %** | 55.52 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 48.00 € | **55.50 €** | 18.1 % | **36.6 %** | 55.52 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitá odsávačka mlieka Grownsy | 31.00 € | **38.50 €** | 20.6 % | **49.8 %** | 38.61 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552320 Crocodile 5G LTE700 domovní zesilovač | 64.50 € | **72.00 €** | 93.5 % | **116.0 %** | 72.21 € | cena podľa najlacnejšieho iného predajcu |
| Neewer BP66 štúdiový set dve LED lampy + filtre + st... | 40.00 € | **47.50 €** | 15.9 % | **37.6 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8000mAh 11.1V 100C 3S1P Lipo Battery... | 65.50 € | **73.00 €** | 20.9 % | **34.7 %** | 73.28 € | cena podľa najlacnejšieho iného predajcu |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 83.00 € | **90.50 €** | 10.7 % | **20.7 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| Zariadenie na zoštíhlenie tela ANLAN 02-AXTY31-02A | 46.00 € | **53.50 €** | 19.4 % | **38.9 %** | 53.83 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MSS815MAQUA-UN – 4-dielna sada inteligentných... | 52.00 € | **59.50 €** | 23.0 % | **40.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (čierna) | 31.00 € | **38.50 €** | 11.1 % | **38.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M + 3 ventilátory (... | 41.00 € | **48.50 €** | 17.9 % | **39.5 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Neweer TL97C RGB LED farebné foto svetlo | 33.00 € | **40.50 €** | 13.9 % | **39.8 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na riadidlá PXN-A10 | 77.00 € | **84.50 €** | 10.3 % | **21.0 %** | 84.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 35.00 € | **42.50 €** | 16.0 % | **40.8 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1855DB 2.0 (čierne) | 143.50 € | **150.90 €** | 23.3 % | **29.7 %** | 151.00 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 34.8 % | **45.4 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter True RMS Habotest H... | 26.90 € | **34.00 €** | 9.1 % | **37.9 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX i07 WiFi 2,5K + 1080p palubná kamera | 123.90 € | **131.00 €** | 19.6 % | **26.4 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| WESTMARK 2094 2611 Nůžky na salát, 8 ks | 44.50 € | **51.50 €** | 12.9 % | **30.7 %** | 51.59 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO hluboká pánev 24 cm | 27.90 € | **34.90 €** | 5.1 % | **31.5 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8405A | 174.50 € | **181.50 €** | 5.0 % | **9.2 %** | 181.60 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 52.50 € | **59.50 €** | 9.1 % | **23.7 %** | 59.70 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet SmartCam C960 Ultra | 83.50 € | **90.50 €** | 19.5 % | **29.5 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Ranger M1 Pro – palubná kamera | 136.00 € | **143.00 €** | 18.9 % | **25.0 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| LED pásik YEELIGHT Obsid RGBIC YLFWD-0025 | 52.50 € | **59.50 €** | 14.1 % | **29.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TB0002 Pozadie | 42.50 € | **49.50 €** | 15.3 % | **34.3 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T21B1 (čierny) | 132.50 € | **139.50 €** | 19.3 % | **25.6 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C100PRO (biela) | 72.00 € | **79.00 €** | 19.2 % | **30.8 %** | 79.41 € | cena podľa najlacnejšieho iného predajcu |
| Štartér motora ANCEL BS200 | 118.00 € | **125.00 €** | 19.3 % | **26.4 %** | 125.46 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT692G tester optických vlákien | 34.00 € | **41.00 €** | 12.7 % | **35.9 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na mikrofón Fifine BM88 (ružový) | 41.00 € | **48.00 €** | 18.4 % | **38.6 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 18.0 % | **31.2 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **106.90 €** | 18.7 % | **26.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2800mAh 14,8V 60C 4S1P LiPo ... | 48.00 € | **54.90 €** | 26.7 % | **44.9 %** | 54.94 € | cena podľa najlacnejšieho iného predajcu |
| Tepelná utierka pre modely Dreame Matrix10 Ultra, L5... | 28.00 € | **34.90 €** | 15.0 % | **43.3 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER LED pásik – neónový RGB | 72.90 € | **79.50 €** | 21.1 % | **32.1 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 (čierna) | 31.00 € | **37.50 €** | 10.6 % | **33.8 %** | 37.66 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač Rojeco 3L WiFi verzia Smart Feed (biely) | 38.50 € | **45.00 €** | 19.6 % | **39.7 %** | 45.17 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 70.00 € | **76.50 €** | 7.4 % | **17.3 %** | 76.68 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 41.00 € | **47.50 €** | 8.4 % | **25.5 %** | 47.68 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNDS8 double monitor mount 13-32" | 61.00 € | **67.50 €** | 21.5 % | **34.4 %** | 67.69 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Pro 4G palubná kamera | 184.50 € | **191.00 €** | 19.4 % | **23.6 %** | 191.20 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire TF02 | 67.00 € | **73.50 €** | 20.7 % | **32.4 %** | 73.72 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 404.00 € | **410.50 €** | 5.7 % | **7.4 %** | 410.73 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX X3 WiFi 2,5K + 1080p 64 GB palubná kamera | 160.50 € | **167.00 €** | 19.4 % | **24.2 %** | 167.29 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do kamery SMALLRIG E6P-C26 (oranžová) | 41.00 € | **47.50 €** | 21.2 % | **40.4 %** | 47.85 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na úpravu vlasov ANLAN Miracle | 63.00 € | **69.50 €** | 19.4 % | **31.7 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 43.00 € | **49.50 €** | 7.2 % | **23.4 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Freewell set of 4 ND filters for DJI Osmo Action 5 Pro | 41.00 € | **47.50 €** | 11.2 % | **28.8 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT603 (čierna) | 34.00 € | **40.50 €** | 18.4 % | **41.0 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BG (zelený) | 31.00 € | **37.50 €** | 17.2 % | **41.8 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BS (strieborný) | 31.00 € | **37.50 €** | 17.2 % | **41.8 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové slúchadlá Maono AU-MH601 | 36.00 € | **42.50 €** | 23.3 % | **45.5 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 37-75" Perlesmith PSTVS13 | 33.50 € | **40.00 €** | 18.2 % | **41.1 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **49.00 €** | 13.0 % | **30.3 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 184.00 € | **190.50 €** | 11.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GUZZANTI GZ 8301A | 78.50 € | **84.90 €** | 8.1 % | **16.9 %** | 84.93 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **81.90 €** | 6.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 40.9 % | **73.8 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) + 5 ventilá... | 47.90 € | **54.00 €** | 14.0 % | **28.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF85SGMXC | 159.90 € | **166.00 €** | 5.1 % | **9.2 %** | 166.21 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8571 | 171.90 € | **178.00 €** | 5.2 % | **8.9 %** | 178.30 € | cena podľa najlacnejšieho iného predajcu |
| Graef S 10005 | 113.00 € | **119.00 €** | 10.7 % | **16.6 %** | 119.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 18.50 € | **24.50 €** | 18.2 % | **56.6 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Discovery Gator 10x50 | 47.50 € | **53.50 €** | 13.1 % | **27.4 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 19,1MM 9 (čierny) | 31.50 € | **37.50 €** | 18.2 % | **40.7 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 11 (čierny) | 36.50 € | **42.50 €** | 18.2 % | **37.6 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 9 (čierny) | 36.50 € | **42.50 €** | 18.2 % | **37.6 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 37.50 € | **43.50 €** | 20.6 % | **39.9 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.50 € | **42.50 €** | 8.2 % | **26.0 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie NEEWER BASICS VL67B | 35.50 € | **41.50 €** | 16.3 % | **36.0 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Fotografická taška cez rameno PGYTECH OneGo Pocket S... | 36.50 € | **42.50 €** | 20.2 % | **40.0 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 23.50 € | **29.50 €** | 18.8 % | **49.2 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 14,8V 30C 4S1P LiPo ... | 38.50 € | **44.50 €** | 35.9 % | **57.0 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Dual 2026 – palubná kamera | 113.00 € | **119.00 €** | 17.6 % | **23.9 %** | 119.48 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-10 | 27.00 € | **33.00 €** | 10.7 % | **35.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BB (modrý) | 31.00 € | **37.00 €** | 17.2 % | **39.9 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 48.00 € | **54.00 €** | 20.7 % | **35.8 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B2-EU | 251.90 € | **257.90 €** | 19.5 % | **22.4 %** | 258.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 110.00 € | **115.90 €** | 10.9 % | **16.9 %** | 115.98 € | cena podľa najlacnejšieho iného predajcu |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 94.00 € | **99.90 €** | 9.1 % | **15.9 %** | 99.99 € | cena podľa najlacnejšieho iného predajcu |
| TWS Choetech BH-T17 ANC+ENC Wireless Headphones (black) | 19.90 € | **25.50 €** | 21.6 % | **55.8 %** | 25.71 € | cena podľa najlacnejšieho iného predajcu |
| Držiak batérie SJCAM pre model C300 | 38.90 € | **44.50 €** | 20.9 % | **38.4 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6T (modrý) | 36.90 € | **42.50 €** | 19.2 % | **37.3 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 72.90 € | **78.50 €** | 10.6 % | **19.0 %** | 78.84 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 PRO (čierna) + 6 ve... | 47.00 € | **52.50 €** | 11.9 % | **25.0 %** | 52.57 € | cena podľa najlacnejšieho iného predajcu |
| Retro blesk GODOX Lux Junior II S | 78.00 € | **83.50 €** | 15.6 % | **23.7 %** | 83.63 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXCSH2001E | 83.50 € | **89.00 €** | 5.0 % | **11.9 %** | 89.20 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat Avatto WT100 3A WiFi Tuya | 32.50 € | **38.00 €** | 15.2 % | **34.7 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná fontána/napájačka pre domáce zvieratá s... | 54.00 € | **59.50 €** | 18.0 % | **30.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 8501A | 148.50 € | **154.00 €** | 5.0 % | **8.9 %** | 154.30 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24440-56 | 112.50 € | **118.00 €** | 11.2 % | **16.6 %** | 118.35 € | cena podľa najlacnejšieho iného predajcu |
| Samsung rám pro Frame TV 55" Týkový | 69.50 € | **75.00 €** | 13.0 % | **22.0 %** | 75.35 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2016100 EQUA Kuchyňská váha | 18.50 € | **24.00 €** | 5.3 % | **36.6 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre GoPro Hero 13 | 33.00 € | **38.50 €** | 16.6 % | **36.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Krytky objektívov Puluz pre kameru Insta360 X5 | 30.00 € | **35.50 €** | 10.3 % | **30.5 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 20.3MM 11 (black) | 28.00 € | **33.50 €** | 19.9 % | **43.4 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 20.3MM 11 (Złoty) | 28.00 € | **33.50 €** | 19.1 % | **42.5 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 244.00 € | **249.50 €** | 18.7 % | **21.4 %** | 249.90 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT333BT Mini merač teploty a vlhkosti | 25.50 € | **31.00 €** | 9.0 % | **32.5 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO1022S | 161.50 € | **167.00 €** | 6.3 % | **9.9 %** | 167.50 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 10 (čierny) | 36.50 € | **42.00 €** | 18.2 % | **36.0 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 12 (čierny) | 36.50 € | **42.00 €** | 18.2 % | **36.0 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 8 (čierny) | 36.50 € | **42.00 €** | 18.2 % | **36.0 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (biela) | 48.50 € | **54.00 €** | 12.6 % | **25.3 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Short-Size Li... | 58.50 € | **64.00 €** | 24.0 % | **35.6 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitý inteligentný dávkovač krmiva 5 l Oneisall PF10 | 68.50 € | **74.00 €** | 19.3 % | **28.9 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **146.90 €** | 35.7 % | **40.9 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Euti Freewell pre Iphone 15 PRO s držiakom 17 mm | 42.90 € | **48.00 €** | 15.5 % | **29.2 %** | 48.02 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Samsung S25 Ultra so 17 mm držiakom | 42.90 € | **48.00 €** | 5.8 % | **18.4 %** | 48.02 € | cena podľa najlacnejšieho iného predajcu |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 107.90 € | **113.00 €** | 12.4 % | **17.8 %** | 113.05 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 66.90 € | **72.00 €** | 10.6 % | **19.0 %** | 72.24 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90T palubná kamera | 153.50 € | **158.50 €** | 10.5 % | **14.1 %** | 158.53 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 48SBL6G-S | 324.90 € | **329.90 €** | 5.1 % | **6.7 %** | 329.94 € | cena podľa najlacnejšieho iného predajcu |
| TEESA AIR FRYER TSA8046W | 42.00 € | **47.00 €** | 5.1 % | **17.6 %** | 47.09 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka Dreame – pre súpravu Aqua10 Ultra R... | 19.90 € | **24.90 €** | 15.9 % | **45.0 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 48.90 € | **53.90 €** | 19.3 % | **31.5 %** | 53.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8401SE | 121.00 € | **126.00 €** | 5.0 % | **9.4 %** | 126.10 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 SensiCare® EW6T226C | 408.00 € | **413.00 €** | 10.6 % | **12.0 %** | 413.13 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 36.00 € | **41.00 €** | 13.5 % | **29.2 %** | 41.24 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 36.00 € | **41.00 €** | 16.1 % | **32.2 %** | 41.24 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V65 Smartwatch (Gray) | 31.50 € | **36.50 €** | 16.7 % | **35.3 %** | 36.78 € | cena podľa najlacnejšieho iného predajcu |
| Programovacia doska xTool mTiny | 39.50 € | **44.50 €** | 19.0 % | **34.1 %** | 44.83 € | cena podľa najlacnejšieho iného predajcu |
| Neweer SP-02 rýchloupínací adaptér pre telefón Arca | 22.50 € | **27.50 €** | 13.7 % | **39.0 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Telesin CPL/ND8/ND16/ND32 pre Insta3... | 33.50 € | **38.50 €** | 16.3 % | **33.7 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické LED svietidlo NEEWER BL60C | 20.50 € | **25.50 €** | 9.8 % | **36.6 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD200SW | 431.50 € | **436.50 €** | 10.7 % | **12.0 %** | 436.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 18,3MM 8 (čierny) | 38.00 € | **43.00 €** | 18.7 % | **34.4 %** | 43.43 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BOP6737E05EPBG | 347.00 € | **352.00 €** | 9.9 % | **11.5 %** | 352.49 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná detská váha Grownsy B12H | 27.00 € | **32.00 €** | 19.2 % | **41.2 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny ramenný popruh Neewer | 69.00 € | **74.00 €** | 21.0 % | **29.7 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **49.50 €** | 26.3 % | **40.2 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačové ventilátory Darkflash Gauss G24 3 v 1 (bi... | 34.00 € | **38.90 €** | 18.8 % | **36.0 %** | 38.94 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **29.50 €** | 47.1 % | **76.4 %** | 29.72 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 323.00 € | **327.90 €** | 10.0 % | **11.7 %** | 328.00 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **176.90 €** | 42.0 % | **45.9 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **79.50 €** | 17.6 % | **24.9 %** | 79.73 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **79.50 €** | 25.4 % | **33.3 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **96.90 €** | 19.5 % | **25.5 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WSAP84AWI | 361.90 € | **366.50 €** | 5.1 % | **6.4 %** | 366.80 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 Master – palubná kamera | 281.90 € | **286.50 €** | 12.2 % | **14.1 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 Master 4G palubná kamera | 281.90 € | **286.50 €** | 19.4 % | **21.4 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire DL01 | 17.90 € | **22.50 €** | 6.9 % | **34.4 %** | 22.54 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Lipo With XT6... | 61.90 € | **66.50 €** | 32.3 % | **42.1 %** | 66.62 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny zvuku Habotest HT602B | 25.90 € | **30.50 €** | 15.4 % | **35.9 %** | 30.64 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6V (ružový) | 26.90 € | **31.50 €** | 19.0 % | **39.3 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava StreetGrip Telesin GoPro Hero 9-13 s klietkou | 65.90 € | **70.50 €** | 17.5 % | **25.7 %** | 70.54 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedé drevo 500 ml | 23.00 € | **27.50 €** | 15.1 % | **37.7 %** | 27.60 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Bellagio červený multikapslový | 112.50 € | **117.00 €** | 5.4 % | **9.6 %** | 117.10 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP400R RGB | 120.50 € | **125.00 €** | 7.5 % | **11.5 %** | 125.10 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 8000mAh 14.8V 100C 4S2P Lipo Battery Pack | 99.00 € | **103.50 €** | 20.4 % | **25.9 %** | 103.69 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 131.50 € | **136.00 €** | 10.0 % | **13.7 %** | 136.22 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 468.00 € | **472.50 €** | 10.4 % | **11.5 %** | 472.84 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 55.00 € | **59.50 €** | 22.5 % | **32.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-01 | 22.00 € | **26.50 €** | 9.9 % | **32.4 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 21.3MM 12 (Black) | 28.00 € | **32.50 €** | 20.3 % | **39.6 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D57 Kondenzátorový mikrofón | 183.50 € | **188.00 €** | 17.9 % | **20.8 %** | 188.40 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 314.00 € | **318.50 €** | 57.0 % | **59.3 %** | 318.90 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZS-B-EU1 ZigBee 1-kanálový vypínač osvetlenia | 17.00 € | **21.50 €** | 7.3 % | **35.7 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Twarde etui Sunnylife do Neo 2 Motion Fly More Combo | 55.00 € | **59.50 €** | 14.3 % | **23.6 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka SUPERFIRE A6 | 27.00 € | **31.50 €** | 14.2 % | **33.2 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhoľnatého MOES WSS-CO s pripojením c... | 29.50 € | **34.00 €** | 18.6 % | **36.7 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor ONIKUMA L13 s mikrofónom | 28.50 € | **33.00 €** | 19.1 % | **37.9 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| RGB LED lampa NEEWER RGB61 | 25.50 € | **30.00 €** | 15.8 % | **36.3 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná baterka SUPERFIRE D30 | 19.50 € | **24.00 €** | 5.3 % | **29.6 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P11pro | 198.50 € | **203.00 €** | 12.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Cecotec Ready Warm 10100 Smart Ceramic | 52.50 € | **56.90 €** | 10.7 % | **20.0 %** | 56.96 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická zubná kefka MOVA Fresh Pro (strieborná) | 24.50 € | **28.90 €** | 15.2 % | **35.9 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVIZNÁ KAMERA THERMAL MASTER P3 Mini pre iOS/And... | 322.50 € | **326.90 €** | 37.7 % | **39.6 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **68.90 €** | 31.3 % | **40.1 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 39.0 % | **45.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **54.00 €** | 30.2 % | **41.4 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 36.90 € | **41.00 €** | 5.7 % | **17.5 %** | 41.24 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6VR (červený) | 26.90 € | **31.00 €** | 19.0 % | **37.1 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 44.90 € | **49.00 €** | 8.8 % | **18.7 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky C50i (biele) | 30.90 € | **35.00 €** | 21.4 % | **37.5 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50i (sivé) | 30.90 € | **35.00 €** | 21.4 % | **37.5 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **64.00 €** | 29.9 % | **38.7 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire s rozhraním USB-C L24 | 16.00 € | **20.00 €** | 5.2 % | **31.4 %** | 20.03 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 145.90 € | **149.90 €** | 8.5 % | **11.5 %** | 149.94 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 (biela) | 32.50 € | **36.50 €** | 11.7 % | **25.4 %** | 36.64 € | cena podľa najlacnejšieho iného predajcu |
| Kábel USB-A do Lightning MFI 0,35 m PGYTECH (P-GM-115) | 13.50 € | **17.50 €** | 20.6 % | **56.3 %** | 17.71 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný hliníkový statív Neewer LT07 s guľovou hlavou | 79.00 € | **83.00 €** | 20.9 % | **27.0 %** | 83.23 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 43.50 € | **47.50 €** | 20.8 % | **31.9 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 22,4MM 13 (čierny) | 32.50 € | **36.50 €** | 18.9 % | **33.5 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 30cm WiFi/Bluetooth 16M RGBCW Gos... | 22.50 € | **26.50 €** | 16.1 % | **36.7 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny decibelomer Habotest HT622B USB A/C | 19.50 € | **23.50 €** | 18.8 % | **43.1 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Monitor mount 13-30" Huanuo HNCM7 | 22.50 € | **26.50 €** | 20.6 % | **42.0 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/ND8/ND16/ND32 pre DJI Osmo ... | 28.50 € | **32.50 €** | 16.3 % | **32.6 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor DarkFlash S31 ARGB (biely) | 18.50 € | **22.50 €** | 10.0 % | **33.8 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F4 Pro WiFi 4K + 1080p 128 GB palubná kamera | 127.00 € | **131.00 €** | 19.5 % | **23.3 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N3 Pro 2026 – palubná kamera | 70.00 € | **74.00 €** | 7.2 % | **13.4 %** | 74.46 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné púzdro DiCAPac WP-S5 pro fotoaparáty středn... | 79.00 € | **83.00 €** | 9.9 % | **15.5 %** | 83.49 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT122, bezkontaktný tester napätia / tester... | 14.00 € | **18.00 €** | 12.1 % | **44.2 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Detektor plynu MOES WSS-S-GL s Wi-Fi | 23.00 € | **27.00 €** | 18.3 % | **38.8 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/VND8/UV pre DJI Osmo Action... | 29.00 € | **33.00 €** | 17.2 % | **33.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-P67 3MP Wi-Fi IP kamera | 20.00 € | **24.00 €** | 13.5 % | **36.3 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM08 (čierna) | 28.00 € | **32.00 €** | 18.7 % | **35.6 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (čierna) | 28.00 € | **32.00 €** | 18.6 % | **35.6 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZS-B-EU2 Dvojkanálový vypínač osvetlenia ZigBee | 18.00 € | **22.00 €** | 10.4 % | **35.0 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 filters Sunnylife MCUV, ND8/16/34/64/128 fo... | 23.00 € | **27.00 €** | 16.1 % | **36.3 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 50.00 € | **54.00 €** | 5.7 % | **14.2 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 45.00 € | **49.00 €** | 10.5 % | **20.4 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 49.00 € | **52.90 €** | 14.9 % | **24.0 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 49.00 € | **52.90 €** | 14.9 % | **24.0 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **94.00 €** | 40.2 % | **46.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **218.90 €** | 40.3 % | **42.7 %** | 219.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS200 PRO TB2 PRO TOPUMP – mini pumpa na bic... | 48.90 € | **52.50 €** | 21.4 % | **30.3 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **51.50 €** | 11.0 % | **19.4 %** | 51.80 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica ONIKUMA MT501 (biela) | 28.90 € | **32.50 €** | 19.1 % | **33.9 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM09 (čierna) | 27.90 € | **31.50 €** | 18.7 % | **34.0 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Kompletná sada príslušenstva PULUZ 45 v 1 PKT10 | 35.90 € | **39.50 €** | 5.9 % | **16.5 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada pedálov PXN PD HM - brzda a plyn (Windows 7/8/1... | 76.90 € | **80.50 €** | 19.8 % | **25.4 %** | 80.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 28.5 % | **40.8 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **22.50 €** | 33.3 % | **58.1 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 84.50 € | **88.00 €** | 7.9 % | **12.4 %** | 88.07 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10000 Top Ceramic | 45.00 € | **48.50 €** | 11.2 % | **19.9 %** | 48.59 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 28.00 € | **31.50 €** | 19.9 % | **34.9 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 74.50 € | **78.00 €** | 6.9 % | **11.9 %** | 78.14 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W05,14" | 87.50 € | **91.00 €** | 19.3 % | **24.0 %** | 91.20 € | cena podľa najlacnejšieho iného predajcu |
| Flexibilný mini statív NEEWER TP35 s diaľkovým ovlád... | 20.50 € | **24.00 €** | 13.8 % | **33.2 %** | 24.26 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 44.00 € | **47.50 €** | 22.6 % | **32.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 20.00 € | **23.50 €** | 11.3 % | **30.8 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (červené) | 32.00 € | **35.50 €** | 8.8 % | **20.7 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 32.00 € | **35.50 €** | 7.7 % | **19.5 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Fontána pre zvieratá / napájačka 1,5 l Rojeco | 17.00 € | **20.50 €** | 15.7 % | **39.5 %** | 20.82 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 25.50 € | **29.00 €** | 20.7 % | **37.3 %** | 29.35 € | cena podľa najlacnejšieho iného predajcu |
| Súprava strojčekov na strihanie domácich zvierat One... | 43.50 € | **47.00 €** | 22.6 % | **32.5 %** | 47.35 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Ranger M1 – palubná kamera | 63.00 € | **66.50 €** | 19.5 % | **26.2 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BM3T3924WBW | 438.50 € | **442.00 €** | 5.1 % | **6.0 %** | 442.39 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT206A Digitálny kliešťový merač | 19.00 € | **22.50 €** | 11.5 % | **32.1 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (červený) | 22.00 € | **25.50 €** | 18.2 % | **37.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (čierny) | 22.00 € | **25.50 €** | 18.2 % | **37.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (oranžový) | 22.00 € | **25.50 €** | 18.2 % | **37.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (ružový) | 22.00 € | **25.50 €** | 18.2 % | **37.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM07 RGB (čierna) | 25.00 € | **28.50 €** | 19.6 % | **36.4 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (biela) | 28.00 € | **31.50 €** | 18.6 % | **33.5 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka 6x USB Blitzwolf BW-S15, QC 3.0,60 W (biela) | 24.00 € | **27.50 €** | 17.0 % | **34.0 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač pre rolety MOES WRS-EUC2-WH-MS | 16.00 € | **19.50 €** | 11.6 % | **36.0 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač pre rolety MOES WRS-EUC-WH-MS | 13.00 € | **16.50 €** | 5.3 % | **33.6 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát v mobile PGY LinkGo (ružový) | 26.00 € | **29.50 €** | 19.5 % | **35.6 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač Sonoff SPM-Main LAN (ethernet) WiFi | 19.00 € | **22.50 €** | 20.3 % | **42.5 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| PETKIT PURA MAX 2 Krmivo pre mačky | 25.00 € | **28.50 €** | 18.4 % | **35.0 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Svetlomet Superfire HL31, typ C | 29.50 € | **33.00 €** | 13.9 % | **27.4 %** | 33.45 € | cena podľa najlacnejšieho iného predajcu |
| GODOX R200-HC40 mriežka s voštinovým vzorom | 17.50 € | **21.00 €** | 15.3 % | **38.4 %** | 21.47 € | cena podľa najlacnejšieho iného predajcu |
| Kryt na toaletu pre mačky Petkit Hood | 32.50 € | **36.00 €** | 18.1 % | **30.8 %** | 36.48 € | cena podľa najlacnejšieho iného predajcu |
| Upevnenie príslušenstva PGYTECH Magic Arm (P-CG-009)... | 18.50 € | **22.00 €** | 18.6 % | **41.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor DarkFlash S31 ARGB (čierny) | 18.50 € | **22.00 €** | 10.9 % | **31.9 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| GameSir X5 Lite BK – mobilný herný ovládač USB-C, či... | 24.50 € | **28.00 €** | 7.5 % | **22.9 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife FP-B978 prepravné puzdro pre DJI Flip | 17.50 € | **20.90 €** | 12.9 % | **34.9 %** | 20.94 € | cena podľa najlacnejšieho iného predajcu |
| Náramok Colmi M06 Smartband (ružové zlato) | 35.50 € | **38.90 €** | 16.4 % | **27.5 %** | 38.95 € | cena podľa najlacnejšieho iného predajcu |
| Držiak so studenou päticou Freewell pre Fuji X100VI ... | 36.50 € | **39.90 €** | 8.5 % | **18.6 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 31.8 % | **46.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 4K + Tripod | 50.90 € | **54.00 €** | 9.6 % | **16.3 %** | 54.03 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový mikrofón PULUZ PU647B | 23.90 € | **27.00 €** | 8.7 % | **22.8 %** | 27.45 € | cena podľa najlacnejšieho iného predajcu |
| PXN Z D1 Rukoväť ručnej brzdy | 24.90 € | **28.00 €** | 6.6 % | **19.9 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco automatic soap dispenser 400ml | 15.90 € | **19.00 €** | 18.9 % | **42.1 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75BWBXC | 70.90 € | **74.00 €** | 12.2 % | **17.1 %** | 74.23 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75TKBXC | 70.90 € | **74.00 €** | 12.2 % | **17.1 %** | 74.23 € | cena podľa najlacnejšieho iného predajcu |
| Kombinovaná taška Sunnylife pre NEO Motion Fly (073530) | 26.00 € | **29.00 €** | 17.0 % | **30.5 %** | 29.04 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 28.00 € | **31.00 €** | 28.3 % | **42.1 %** | 31.04 € | cena podľa najlacnejšieho iného predajcu |
| Telesin magnetic mount for sports cameras | 14.00 € | **17.00 €** | 13.0 % | **37.3 %** | 17.07 € | cena podľa najlacnejšieho iného predajcu |
| UV baterka Superfire Z01, 365NM, USB | 14.00 € | **17.00 €** | 5.5 % | **28.1 %** | 17.07 € | cena podľa najlacnejšieho iného predajcu |
| Venta H13 & Anti-Formaldehyd set 2er VPE | 66.90 € | **69.90 €** | 11.0 % | **16.0 %** | 70.00 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect USetup E7 15,6" 1920x1080 60Hz prenosný dot... | 141.90 € | **144.90 €** | 15.5 % | **18.0 %** | 145.00 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiová lampa GODOX ML40Bi | 104.00 € | **107.00 €** | 16.5 % | **19.9 %** | 107.10 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 14.8V 30C 4S1P Lipo ... | 26.00 € | **29.00 €** | 17.8 % | **31.4 %** | 29.12 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA BT883 (biele) | 25.50 € | **28.50 €** | 20.4 % | **34.6 %** | 28.65 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall X2 + N5 sada na strihanie domácich zvierat | 44.50 € | **47.50 €** | 22.2 % | **30.5 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá Onikuma B2 (čierne) | 21.50 € | **24.50 €** | 8.5 % | **23.6 %** | 24.80 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 57.00 € | **60.00 €** | 9.8 % | **15.5 %** | 60.34 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto Lamborghini Huracán | 30.00 € | **33.00 €** | 12.4 % | **23.6 %** | 33.37 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI MINI Pro 2K palubná kamera | 42.00 € | **45.00 €** | 15.2 % | **23.4 %** | 45.38 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall RFC-676 PRO strojček na strihanie domácich ... | 37.00 € | **40.00 €** | 17.6 % | **27.2 %** | 40.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný detektor dymu MOES WSS-S-SSD-A Wi-Fi | 21.50 € | **24.50 €** | 11.6 % | **27.2 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXSH1500E | 29.50 € | **32.50 €** | 6.8 % | **17.6 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Vintage 2868/03, krémová | 40.50 € | **43.50 €** | 12.5 % | **20.9 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 46.50 € | **49.50 €** | 10.0 % | **17.1 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 86 mm | 23.50 € | **26.50 €** | 8.2 % | **22.0 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 95 mm | 23.50 € | **26.50 €** | 8.2 % | **22.0 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.50 € | **18.50 €** | 6.8 % | **27.5 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Colmi P81 Smartwatch (Gold) | 17.50 € | **20.50 €** | 13.8 % | **33.3 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LR15Bi Okrúhle svetlo | 14.50 € | **17.50 €** | 18.4 % | **42.8 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer PMP1680S mixer amplifier whit effect proce... | 395.00 € | **398.00 €** | 42.0 % | **43.0 %** | 398.40 € | cena podľa najlacnejšieho iného predajcu |
| Powerbank OS-Baseus Compact IP 5000 mAh 20 W (blue) | 18.50 € | **21.50 €** | 13.9 % | **32.4 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov PGYTECH ND-PL 8/16/32/64 pre DJI Mavi... | 15.50 € | **18.50 €** | 18.0 % | **40.8 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Set of 5 Filters Sunnylife ND 8/16/32/64/128 for DJI... | 20.50 € | **23.50 €** | 15.3 % | **32.1 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné reproduktory Onikuma L2 | 14.50 € | **17.50 €** | 18.6 % | **43.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Rozšíriteľný statív Puluz so selfie tyčou | 16.50 € | **19.50 €** | 12.8 % | **33.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno ELEGOO ASA (čierne) | 11.50 € | **14.50 €** | 13.5 % | **43.1 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus DC1 mini orbitrek | 166.50 € | **169.50 €** | 21.4 % | **23.5 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire TL01-X | 17.50 € | **20.50 €** | 11.0 % | **30.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 40.00 € | **43.00 €** | 5.3 % | **13.2 %** | 43.43 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 25.00 € | **28.00 €** | 5.4 % | **18.0 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 32cm WiFi/Bluetooth 16M RGBCW Gos... | 20.00 € | **23.00 €** | 16.0 % | **33.4 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Octagon diaľkový ovládač SF4008 4K UHD - originál | 19.00 € | **22.00 €** | 19.0 % | **37.8 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na projektor Blitzwolf BW-VF5 | 22.00 € | **25.00 €** | 15.7 % | **31.5 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetická rukoväť MagSafe Fun Shot Grip2 (biela) | 22.00 € | **25.00 €** | 15.1 % | **30.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 17.00 € | **20.00 €** | 11.9 % | **31.7 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZR-SR-R01-WH Spínač pre scény ZigBee, IP55 (biely) | 12.00 € | **15.00 €** | 5.0 % | **31.3 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Torras Ostand R Fusion Series Case for iPhone 16 Pro... | 15.00 € | **18.00 €** | 19.8 % | **43.8 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 16.00 € | **19.00 €** | 17.6 % | **39.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS ONIKUMA TX612 (čierne) | 20.00 € | **23.00 €** | 19.1 % | **37.0 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické LED svetlo na selfie NEEWER NL48B | 17.00 € | **20.00 €** | 14.2 % | **34.4 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER NL48B – Magnetické selfie svetlo (čierne) | 17.00 € | **20.00 €** | 14.7 % | **34.9 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Ultrazvukový čistič pokožky ANLAN ALCPJ07-02 (biely) | 22.00 € | **25.00 €** | 20.9 % | **37.3 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| UV Superfire HZ01 head flashlight | 20.00 € | **23.00 €** | 7.3 % | **23.3 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus A14 | 34.00 € | **37.00 €** | 20.2 % | **30.8 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire L21 | 16.00 € | **19.00 €** | 9.7 % | **30.2 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire L6-H – 750 lm, 15W, USB-C, 5 režimov | 18.00 € | **21.00 €** | 11.6 % | **30.2 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **45.50 €** | 27.4 % | **36.2 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.00 € | **15.90 €** | 50.3 % | **83.9 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Vitoria PV3700 | 36.00 € | **38.90 €** | 11.0 % | **20.0 %** | 38.93 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **126.90 €** | 25.9 % | **28.9 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 23.6 % | **26.4 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **36.00 €** | 30.8 % | **41.3 %** | 36.50 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón ONIKUMA M-730 (čierny) | 25.90 € | **28.50 €** | 19.0 % | **31.0 %** | 28.65 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Pure POP Home & Travel DT2040E1 | 34.90 € | **37.50 €** | 11.1 % | **19.4 %** | 37.71 € | cena podľa najlacnejšieho iného predajcu |
| Termostat MOES ZHT-SR-GB s protokolom ZigBee pre ele... | 56.90 € | **59.50 €** | 14.2 % | **19.4 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak MagSafe Fun Shot Grip2 (čierny) | 21.90 € | **24.50 €** | 16.4 % | **30.2 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (biela) | 20.90 € | **23.50 €** | 19.0 % | **33.8 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W3 | 16.90 € | **19.50 €** | 21.5 % | **40.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier Comfo Flex (biele) | 51.90 € | **54.50 €** | 5.5 % | **10.8 %** | 54.90 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart vodní filtr kompatibilní 4ks | 15.90 € | **18.50 €** | 10.5 % | **28.6 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre DJI Osmo Action 5 (modré) | 13.90 € | **16.50 €** | 21.5 % | **44.2 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Torras Ostand R Fusion pre iPhone 16 Pro Max ... | 15.90 € | **18.50 €** | 24.8 % | **45.2 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N2 – duálna palubná kamera | 68.90 € | **71.50 €** | 19.6 % | **24.1 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 189.90 € | **192.50 €** | 19.5 % | **21.2 %** | 192.79 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, zlatá) | 189.90 € | **192.50 €** | 19.5 % | **21.2 %** | 192.79 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 82.90 € | **85.50 €** | 5.4 % | **8.7 %** | 85.90 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **40.00 €** | 31.8 % | **40.9 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 12.00 € | **14.50 €** | 27.7 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 24.50 € | **27.00 €** | 7.1 % | **18.1 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 18.50 € | **21.00 €** | 21.0 % | **37.4 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BC261 | 29.50 € | **32.00 €** | 7.2 % | **16.2 %** | 32.15 € | cena podľa najlacnejšieho iného predajcu |
| Fleg Helikoptéra na dálkové ovládání | 24.00 € | **26.50 €** | 12.3 % | **24.0 %** | 26.70 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 38.00 € | **40.50 €** | 18.1 % | **25.9 %** | 40.73 € | cena podľa najlacnejšieho iného predajcu |
| SJCAM M60 palubná kamera, 2 kanály (čierny) | 176.50 € | **179.00 €** | 19.4 % | **21.1 %** | 179.24 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 11.00 € | **13.50 €** | 18.5 % | **45.4 %** | 13.74 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie GODOX FL15Bi | 100.00 € | **102.50 €** | 16.8 % | **19.7 %** | 102.75 € | cena podľa najlacnejšieho iného predajcu |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **21.00 €** | 13.3 % | **28.6 %** | 21.26 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.50 € | **20.00 €** | 9.7 % | **25.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT625B, USB | 43.00 € | **45.50 €** | 20.8 % | **27.8 %** | 45.78 € | cena podľa najlacnejšieho iného predajcu |
| Bicyklová baterka Superfire BL12 – 4800 mAh, USB, 2 ... | 17.50 € | **20.00 €** | 7.5 % | **22.9 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G850pro 4K + 1080p 64 GB palubná kamera | 152.50 € | **155.00 €** | 19.1 % | **21.1 %** | 155.34 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, zlatá) | 270.00 € | **272.50 €** | 19.4 % | **20.5 %** | 272.84 € | cena podľa najlacnejšieho iného predajcu |
| Flexibilný statív pre fotoaparát Neewer TP34 | 19.00 € | **21.50 €** | 20.2 % | **36.0 %** | 21.87 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire C8-H – 1200 lm, USB, 250 m, 5 režimov | 19.00 € | **21.50 €** | 13.3 % | **28.2 %** | 21.87 € | cena podľa najlacnejšieho iného predajcu |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.50 € | **20.00 €** | 11.3 % | **27.2 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| Fotoateliér Puluz PU5025B LED 25cm | 15.00 € | **17.50 €** | 11.8 % | **30.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Onikuma MP006 RGB herná podložka pod myš (čierna) | 12.00 € | **14.50 €** | 17.1 % | **41.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Sunnylife na riadidlá pre ovládač | 14.00 € | **16.50 €** | 9.5 % | **29.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.00 € | **19.50 €** | 6.2 % | **21.8 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro Telesin pre DJI Osmo Action 6 | 24.00 € | **26.50 €** | 17.3 % | **29.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny statív PGYTECH MANTISPOD Z | 47.00 € | **49.50 €** | 22.7 % | **29.2 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka SUPERFIRE F1-S | 13.00 € | **15.50 €** | 8.7 % | **29.6 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X3Pro TTL pre fotoaparáty Olympus | 96.50 € | **99.00 €** | 21.1 % | **24.3 %** | 99.43 € | cena podľa najlacnejšieho iného predajcu |
| Kompaktný statív Neewer TP02 pre fotoaparáty a telefóny | 22.50 € | **25.00 €** | 20.6 % | **34.0 %** | 25.46 € | cena podľa najlacnejšieho iného predajcu |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.50 € | **44.00 €** | 10.0 % | **16.7 %** | 44.49 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie PGYTECH MANTIS RC M1 pre digitáln... | 17.50 € | **20.00 €** | 19.9 % | **37.0 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 18.50 € | **21.00 €** | 16.6 % | **32.4 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 32.50 € | **35.00 €** | 6.6 % | **14.8 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell p... | 16.50 € | **19.00 €** | 6.7 % | **22.9 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Gosund ST20 Tuya smart ZigBee motion sensor | 10.50 € | **13.00 €** | 14.7 % | **42.1 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TL98C DMX LED svetelná tyč | 51.50 € | **54.00 €** | 20.5 % | **26.4 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 4631 | 130.50 € | **132.90 €** | 5.2 % | **7.2 %** | 132.94 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 99.50 € | **101.90 €** | 20.1 % | **23.0 %** | 101.96 € | cena podľa najlacnejšieho iného predajcu |
| Súprava držadiel PGY RetroVa pre iPhone 16 Pro | 99.50 € | **101.90 €** | 20.9 % | **23.8 %** | 101.96 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 99.50 € | **101.90 €** | 17.8 % | **20.6 %** | 101.96 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 99.50 € | **101.90 €** | 17.8 % | **20.6 %** | 101.96 € | cena podľa najlacnejšieho iného predajcu |
| Mini LED svietidlo Neewer HB80C RGB COB | 193.50 € | **195.90 €** | 17.1 % | **18.6 %** | 195.98 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 7 (čierny) | 36.50 € | **38.90 €** | 18.2 % | **25.9 %** | 38.95 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 44.50 € | **46.90 €** | 21.2 % | **27.7 %** | 46.97 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 17.50 € | **19.90 €** | 7.9 % | **22.7 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **49.50 €** | 29.1 % | **35.5 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC e3S 2S/3S | 16.90 € | **19.00 €** | 18.5 % | **33.3 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BP654 | 26.90 € | **29.00 €** | 10.6 % | **19.3 %** | 29.18 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio NP-FV100 vrátane info chipu pre Sony | 28.90 € | **31.00 €** | 14.6 % | **22.9 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X80 | 16.90 € | **19.00 €** | 21.2 % | **36.2 %** | 19.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 40.7 % | **45.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2000300 CR Kuchyňská váha | 25.90 € | **28.00 €** | 5.4 % | **14.0 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (čierna) | 20.90 € | **23.00 €** | 19.0 % | **30.9 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM03 RGB (čierna) | 20.90 € | **23.00 €** | 21.5 % | **33.7 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický nabíjací adaptér Telesin s krytom pre GoP... | 17.90 € | **20.00 €** | 15.5 % | **29.0 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (biela) | 19.90 € | **22.00 €** | 14.2 % | **26.2 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (čierna) | 19.90 € | **22.00 €** | 14.2 % | **26.2 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (sivá) | 19.90 € | **22.00 €** | 14.2 % | **26.2 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire D6 – 220 lm, dosah 210 m, 4 režimy | 14.90 € | **17.00 €** | 20.9 % | **37.9 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi RF 433 MHz Avat... | 14.90 € | **17.00 €** | 20.9 % | **37.9 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (sivý) | 13.90 € | **16.00 €** | 14.8 % | **32.2 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Bicyklová baterka Superfire BL09 – 450 lm, USB, 5W, ... | 11.90 € | **14.00 €** | 24.8 % | **46.9 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 34.00 € | **36.00 €** | 30.4 % | **38.1 %** | 36.01 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 105.00 € | **107.00 €** | 8.2 % | **10.3 %** | 107.01 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Vakuovačka Vacu Power 500 | 89.90 € | **91.90 €** | 11.3 % | **13.7 %** | 91.93 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, červená | 26.00 € | **28.00 €** | 13.6 % | **22.3 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma SPRING průměr 26 cm, modrá | 26.00 € | **28.00 €** | 13.6 % | **22.3 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 19.00 € | **21.00 €** | 12.8 % | **24.7 %** | 21.05 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 17.00 € | **19.00 €** | 21.0 % | **35.3 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SA-30 Softbox, 30x30 cm | 17.00 € | **19.00 €** | 21.2 % | **35.5 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF10-B | 13.00 € | **15.00 €** | 15.0 % | **32.7 %** | 15.09 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny prísavný držiak TELESIN s držiakom na te... | 13.50 € | **15.50 €** | 13.9 % | **30.7 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT118E Univerzálny digitálny multimeter Tru... | 38.50 € | **40.50 €** | 12.5 % | **18.3 %** | 40.60 € | cena podľa najlacnejšieho iného predajcu |
| Adapter 10in1 HUB Blitzwolf BW-NEW TH8 | 38.50 € | **40.50 €** | 15.2 % | **21.2 %** | 40.60 € | cena podľa najlacnejšieho iného predajcu |
| Maono BA92 Boom Arm Black | 50.00 € | **52.00 €** | 9.1 % | **13.5 %** | 52.11 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X25 (čierne) | 16.00 € | **18.00 €** | 19.0 % | **33.9 %** | 18.18 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 HD | 20.50 € | **22.50 €** | 7.7 % | **18.2 %** | 22.68 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka a analyzátor batérií SkyRC MC5000 s rozhra... | 120.00 € | **122.00 €** | 18.7 % | **20.6 %** | 122.19 € | cena podľa najlacnejšieho iného predajcu |
| Tefal ZP2M04E0 | 23.00 € | **25.00 €** | 9.5 % | **19.0 %** | 25.20 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Rouge BP3443 | 31.50 € | **33.50 €** | 9.3 % | **16.3 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Black | 26.50 € | **28.50 €** | 12.1 % | **20.6 %** | 28.70 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Black | 26.50 € | **28.50 €** | 24.4 % | **33.8 %** | 28.70 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 162.50 € | **164.50 €** | 12.9 % | **14.3 %** | 164.74 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 4,5 l automatické krmítko pre zvieratá WiFi v... | 45.50 € | **47.50 €** | 19.1 % | **24.3 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire TN02,1800lm, USB-C | 18.00 € | **20.00 €** | 12.2 % | **24.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF85WTBXC | 106.50 € | **108.50 €** | 12.2 % | **14.3 %** | 108.79 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.50 € | **18.50 €** | 7.6 % | **20.6 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom JR-W13 5000 mAh powerbanka s nabíjaním Apple... | 14.00 € | **16.00 €** | 18.9 % | **35.9 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit 81520 Pegasus 200 Solid | 36.50 € | **38.50 €** | 10.7 % | **16.8 %** | 38.80 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 359.00 € | **361.00 €** | 8.6 % | **9.2 %** | 361.34 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC B6neo+ | 35.50 € | **37.50 €** | 12.0 % | **18.4 %** | 37.86 € | cena podľa najlacnejšieho iného predajcu |
| Automatický hadicový časovač Rainpoint ITV152 | 15.50 € | **17.50 €** | 18.1 % | **33.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtr CPL 58mm Telesin do iPhone 15 Pro/Pro Max | 14.50 € | **16.50 €** | 13.2 % | **28.9 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 13.50 € | **15.50 €** | 16.6 % | **33.9 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW953 (čierna) | 13.50 € | **15.50 €** | 16.0 % | **33.2 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM05 RGB (čierna) | 15.50 € | **17.50 €** | 21.3 % | **36.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Trojkanálová nabíjačka batérií pre GoPro Hero 13 Bla... | 12.50 € | **14.50 €** | 14.3 % | **32.6 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 75 mm adaptér z plochého na guľatý pre fluidnú... | 20.50 € | **22.50 €** | 5.7 % | **16.0 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Sunnylife 2 v 1 pre DJI RC Plus 2 | 14.50 € | **16.50 €** | 12.6 % | **28.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetic quick mount kit for Telesin sports cameras | 14.50 € | **16.50 €** | 16.5 % | **32.6 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Živica ELEGOO Standard 1.0 (polopriehľadná) | 14.50 € | **16.50 €** | 13.8 % | **29.5 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 46.50 € | **48.50 €** | 18.0 % | **23.1 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Ovládač PXN-P5 8K | 32.50 € | **34.50 €** | 9.1 % | **15.9 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL25, 700 lm, USB-C | 12.50 € | **14.50 €** | 9.4 % | **26.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf CL5, 1000 lm | 21.50 € | **23.50 €** | 21.1 % | **32.3 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire G19 | 11.50 € | **13.50 €** | 7.5 % | **26.2 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX DPU-130T difúzna tkanina pre dáždnik s priemer... | 19.00 € | **21.00 €** | 17.0 % | **29.3 %** | 21.47 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov Sunnylife CPL + ND8 + ND16 pre Osmo Nano | 16.00 € | **18.00 €** | 13.4 % | **27.6 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell ND1000 Filter pre OSMO Action 6 | 13.00 € | **15.00 €** | 17.2 % | **35.2 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak PULUZ pre Insta360 GO Ultra (čierny) | 13.00 € | **15.00 €** | 8.7 % | **25.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Myš ONIKUMA DM06 | 19.00 € | **21.00 €** | 18.7 % | **31.2 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný svetelný spínač WiFi Avatto TS02-EU-B2 ... | 14.00 € | **16.00 €** | 25.5 % | **43.4 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Dotykový spínač svetla Avatto TS20-EU-W2 WiFi | 15.00 € | **17.00 €** | 20.4 % | **36.4 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro na iPhone Puluz (40 m) s jednosmern... | 52.00 € | **54.00 €** | 8.8 % | **13.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom JR-FN1 Funpods Series Wireless Headphones (b... | 13.00 € | **15.00 €** | 18.9 % | **37.2 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaci ventilátor Darkflash DR08 3 v 1 (čierny) | 12.00 € | **14.00 €** | 10.9 % | **29.3 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W05T 14" prenosný monitor | 106.00 € | **107.90 €** | 14.9 % | **16.9 %** | 107.93 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash K430 + 6 ventilátorov (č... | 66.00 € | **67.90 €** | 11.7 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beper Bp101-H Elektrický Citrusovač | 19.00 € | **20.90 €** | 8.9 % | **19.7 %** | 20.93 € | cena podľa najlacnejšieho iného predajcu |
| Double monitor mount 13-30" Huanuo HNDS6 | 53.00 € | **54.90 €** | 20.5 % | **24.8 %** | 54.94 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 45.00 € | **46.90 €** | 7.2 % | **11.7 %** | 46.97 € | cena podľa najlacnejšieho iného predajcu |
| Freewell kruhový polarizačný filter CPL pre OSMO NANO | 18.00 € | **19.90 €** | 6.9 % | **18.2 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 100 | 29.00 € | **30.90 €** | 9.4 % | **16.6 %** | 31.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 137 | 33.00 € | **34.90 €** | 10.9 % | **17.3 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 Silver | 27.00 € | **28.90 €** | 11.3 % | **19.1 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **49.00 €** | 35.1 % | **40.4 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **49.00 €** | 33.8 % | **39.0 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **68.90 €** | 42.9 % | **46.7 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **68.90 €** | 30.4 % | **33.9 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **34.00 €** | 33.2 % | **40.2 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Beper 50451 Tyčový Vakuový Vysavač S He | 51.90 € | **53.50 €** | 10.3 % | **13.7 %** | 53.60 € | cena podľa najlacnejšieho iného predajcu |
| MOES WV-LZ-BK Wi-Fi vodovodný ventil (čierny) | 19.90 € | **21.50 €** | 14.3 % | **23.5 %** | 21.60 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 webová kamera | 57.90 € | **59.50 €** | 19.1 % | **22.4 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Powerbank BlitzWolf BW-P22 20000 mAh, 22,5 W | 27.90 € | **29.50 €** | 18.4 % | **25.2 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W1 | 21.90 € | **23.50 €** | 19.9 % | **28.7 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 29.90 € | **31.50 €** | 10.9 % | **16.9 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Hliníkový držiak Sunnylife pre Insta360 X5/X4 | 16.90 € | **18.50 €** | 16.7 % | **27.8 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný stojan ONIKUMA ST-2 (biely) | 14.90 € | **16.50 €** | 20.9 % | **33.9 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6750mAh 14.8V 60C 4S1P 14# XT90 Battery | 81.90 € | **83.50 €** | 21.1 % | **23.4 %** | 83.63 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 255.90 € | **257.50 €** | 5.0 % | **5.7 %** | 257.69 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na abdukciu bedra MERACH MR-2519BL1 | 82.90 € | **84.50 €** | 19.5 % | **21.8 %** | 84.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **41.50 €** | 32.9 % | **38.0 %** | 41.69 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavňovač Tefal ZC605D38 | 218.00 € | **219.50 €** | 10.9 % | **11.7 %** | 219.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **27.00 €** | 6.2 % | **12.4 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Rixon UltraPods | 45.50 € | **47.00 €** | 13.5 % | **17.2 %** | 47.08 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT839 | 25.50 € | **27.00 €** | 21.1 % | **28.2 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 38.50 € | **40.00 €** | 42.0 % | **47.6 %** | 40.09 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine strieborné 60 cm | 17.00 € | **18.50 €** | 23.8 % | **34.8 %** | 18.59 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 bílá | 32.50 € | **34.00 €** | 11.4 % | **16.6 %** | 34.10 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 nerez | 32.50 € | **34.00 €** | 11.4 % | **16.6 %** | 34.10 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Daily PV1100C | 23.00 € | **24.50 €** | 8.9 % | **16.0 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LIB60420CL | 264.50 € | **266.00 €** | 7.5 % | **8.2 %** | 266.10 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-50245 | 12.00 € | **13.50 €** | 10.1 % | **23.9 %** | 13.65 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam Nova | 25.00 € | **26.50 €** | 16.9 % | **24.0 %** | 26.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 42.50 € | **44.00 €** | 32.9 % | **37.6 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu |
| Venta Organic fragrance Peppermint | 16.00 € | **17.50 €** | 8.7 % | **18.9 %** | 17.69 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa GlidePro PV2600 | 26.50 € | **28.00 €** | 9.9 % | **16.1 %** | 28.20 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC026X | 41.50 € | **43.00 €** | 12.3 % | **16.3 %** | 43.23 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 13.00 € | **14.50 €** | 18.2 % | **31.9 %** | 14.74 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 13.00 € | **14.50 €** | 18.2 % | **31.9 %** | 14.74 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier D12 (čierny) | 86.00 € | **87.50 €** | 11.7 % | **13.6 %** | 87.75 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač / zastrihávač domácich zvierat Oneisall ... | 24.50 € | **26.00 €** | 19.1 % | **26.4 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120 | 165.50 € | **167.00 €** | 10.2 % | **11.2 %** | 167.29 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-002-33 Reflexný dáždnik | 12.50 € | **14.00 €** | 18.3 % | **32.5 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **19.00 €** | 6.7 % | **15.9 %** | 19.30 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 21.50 € | **23.00 €** | 15.4 % | **23.4 %** | 23.31 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický ventilátor GOOLOO F3 (biely) | 34.00 € | **35.50 €** | 19.5 % | **24.7 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Nástenné držiaky na TV Perlesmith PSPILFK1 | 34.00 € | **35.50 €** | 18.2 % | **23.4 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C950 4K | 32.00 € | **33.50 €** | 19.6 % | **25.2 %** | 33.82 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 černá | 58.50 € | **60.00 €** | 5.2 % | **7.9 %** | 60.34 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merač svetla Habotest HT603 | 22.00 € | **23.50 €** | 17.4 % | **25.4 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Súprava xTool Ultimate Robot Kit V2.0 | 447.50 € | **449.00 €** | 6.4 % | **6.8 %** | 449.38 € | cena podľa najlacnejšieho iného predajcu |
| Zacvakávacia doska PGYTECH Arcs-Swiss (P-CG-013) | 12.00 € | **13.50 €** | 14.0 % | **28.2 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 13.00 € | **14.50 €** | 16.0 % | **29.4 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife 1/4" adaptér s rýchloupínaním a otočným uh... | 12.00 € | **13.50 €** | 11.8 % | **25.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický upevňovací adaptér Sunnylife s guľovým kĺ... | 16.00 € | **17.50 €** | 15.2 % | **26.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Kryt vrtule Sunnylife A3S-KC910 pre AIR 3S/AIR 3 | 11.00 € | **12.50 €** | 10.0 % | **25.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Torras Ostand R Fusion Case for iPhone 16 Pro (Gray) | 12.00 € | **13.50 €** | 20.4 % | **35.5 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Pink | 44.50 € | **46.00 €** | 25.1 % | **29.3 %** | 46.40 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X31 | 13.00 € | **14.50 €** | 16.9 % | **30.4 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady Mobile+ Kit | 67.00 € | **68.50 €** | 21.2 % | **24.0 %** | 68.90 € | cena podľa najlacnejšieho iného predajcu |
| PLA drevené vlákno (indický dub) | 12.00 € | **13.50 €** | 13.6 % | **27.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **23.00 €** | 7.7 % | **15.3 %** | 23.40 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf L1 350 lm | 16.00 € | **17.50 €** | 20.6 % | **31.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 25C 1500mAh 3S1P 11.1V Airsoft Gun Lipo Bat... | 21.50 € | **23.00 €** | 5.8 % | **13.2 %** | 23.47 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Magnetic Wall | 11.50 € | **13.00 €** | 10.6 % | **25.1 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 15.50 € | **17.00 €** | 7.9 % | **18.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Ring light with phone holder PULUZ | 13.50 € | **15.00 €** | 5.4 % | **17.1 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón pre kameru SJCAM SJ8 Pro | 13.50 € | **15.00 €** | 17.9 % | **31.0 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka troch batérií pre GoPro Hero 13 Black Tele... | 15.50 € | **17.00 €** | 15.7 % | **26.9 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Úložná taška Telesin EVA pre DJI Action 3/4/5 (veľko... | 12.50 € | **14.00 €** | 12.4 % | **25.9 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla ZigBee Avatto ZTS02-EU-W... | 12.50 € | **14.00 €** | 10.1 % | **23.3 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100WS (čierny) | 53.50 € | **55.00 €** | 14.2 % | **17.4 %** | 55.50 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlo Etenwolf L2, 300 lm | 14.50 € | **16.00 €** | 20.0 % | **32.5 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **64.00 €** | 34.8 % | **38.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **24.00 €** | 33.4 % | **42.0 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXMC400E | 82.50 € | **83.90 €** | 17.3 % | **19.3 %** | 83.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **226.90 €** | 42.8 % | **43.7 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.10 € | **10.50 €** | 16.0 % | **33.8 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Prísavný držiak PGYTECH pre športové kamery (P-GM-223) | 38.50 € | **39.90 €** | 22.2 % | **26.6 %** | 39.95 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7400 | 30.50 € | **31.90 €** | 5.7 % | **10.6 %** | 31.96 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 18.50 € | **19.90 €** | 8.3 % | **16.5 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 18.50 € | **19.90 €** | 5.9 % | **13.9 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell O... | 18.50 € | **19.90 €** | 8.3 % | **16.5 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný systém Freewell UV Osmo Pocket 4P | 18.50 € | **19.90 €** | 6.3 % | **14.3 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 18.50 € | **19.90 €** | 5.9 % | **13.9 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24010-56 | 40.50 € | **41.90 €** | 10.9 % | **14.7 %** | 42.00 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P204FER250 | 20.50 € | **21.90 €** | 8.7 % | **16.1 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Pink | 26.50 € | **27.90 €** | 24.4 % | **31.0 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT806 (čierne) | 25.90 € | **27.00 €** | 21.2 % | **26.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT806 (biele) | 25.90 € | **27.00 €** | 21.2 % | **26.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT126A Digitálny univerzálny multimeter | 26.90 € | **28.00 €** | 17.0 % | **21.8 %** | 28.09 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 300 | 35.90 € | **37.00 €** | 10.9 % | **14.3 %** | 37.10 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Creator Tripod FIXCRT-BK | 38.90 € | **40.00 €** | 10.9 % | **14.0 %** | 40.36 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **17.50 €** | 26.4 % | **34.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4813 Žehlička SERENA červená | 45.90 € | **47.00 €** | 11.2 % | **13.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 6.80 € | **7.90 €** | 17.6 % | **36.7 %** | 7.98 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BL | 10.90 € | **12.00 €** | 13.3 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SGA17 4G/5G FIXOP3-1700-BK | 10.90 € | **12.00 €** | 13.3 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Honey Day 160 ml | 10.90 € | **12.00 €** | 12.6 % | **24.0 %** | 12.12 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro Puluz pre kameru GoPro HERO 4K 2024 | 14.90 € | **16.00 €** | 7.0 % | **14.9 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 13.90 € | **15.00 €** | 6.7 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP Z15ST s 15,6-palcovým dotyk... | 141.90 € | **143.00 €** | 19.5 % | **20.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 78.90 € | **80.00 €** | 5.0 % | **6.5 %** | 80.49 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 34.0 % | **42.0 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W03T 14" prenosný monitor | 108.90 € | **109.90 €** | 19.5 % | **20.6 %** | 109.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 54.50 € | **55.50 €** | 5.5 % | **7.5 %** | 55.52 € | cena podľa najlacnejšieho iného predajcu |
| Štartér UTRAI s vzduchovým kompresorom JS5 | 106.50 € | **107.50 €** | 20.9 % | **22.0 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| TechnoLine WS 8005 digitální budík | 22.50 € | **23.50 €** | 12.3 % | **17.3 %** | 23.54 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z10T s 10-palcovým dotykový... | 128.00 € | **129.00 €** | 19.0 % | **19.9 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 17.00 € | **18.00 €** | 24.6 % | **32.0 %** | 18.06 € | cena podľa najlacnejšieho iného predajcu |
| Kruger & Matz KM1303 | 16.00 € | **17.00 €** | 5.9 % | **12.5 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 17,9MM 7 (čierny) | 31.50 € | **32.50 €** | 15.2 % | **18.9 %** | 32.59 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 23.00 € | **24.00 €** | 11.9 % | **16.8 %** | 24.09 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 antracit | 33.00 € | **34.00 €** | 13.2 % | **16.6 %** | 34.10 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Rony B-4777 červená | 23.50 € | **24.50 €** | 11.5 % | **16.3 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 27.90 € | **28.90 €** | 5.6 % | **9.4 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 27.90 € | **28.90 €** | 5.6 % | **9.4 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Sati Crema 1 kg zrno | 20.90 € | **21.90 €** | 11.9 % | **17.2 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.00 € | **12.00 €** | 13.6 % | **24.0 %** | 12.12 € | cena podľa najlacnejšieho iného predajcu |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.00 € | **14.00 €** | 10.3 % | **18.8 %** | 14.15 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 11000 | 135.50 € | **136.50 €** | 10.8 % | **11.6 %** | 136.67 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 104.50 € | **105.50 €** | 5.2 % | **6.2 %** | 105.67 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT605 | 19.50 € | **20.50 €** | 14.5 % | **20.4 %** | 20.68 € | cena podľa najlacnejšieho iného predajcu |
| Banquet Sada mléč. s cukř. LAV, 4d | 12.00 € | **13.00 €** | 12.7 % | **22.0 %** | 13.19 € | cena podľa najlacnejšieho iného predajcu |
| Držiak so šnúrkou Sunnylife pre ovládač DJI RC (MM3-... | 15.50 € | **16.50 €** | 14.1 % | **21.5 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2020E1 | 36.50 € | **37.50 €** | 11.5 % | **14.5 %** | 37.70 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Sky B-4610 zlatý | 65.00 € | **66.00 €** | 10.1 % | **11.8 %** | 66.20 € | cena podľa najlacnejšieho iného predajcu |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **12.50 €** | 6.8 % | **16.1 %** | 12.70 € | cena podľa najlacnejšieho iného predajcu |
| Sati Guatemala Bio Fairtrade 500 g zrno | 11.50 € | **12.50 €** | 6.8 % | **16.1 %** | 12.70 € | cena podľa najlacnejšieho iného predajcu |
| Candy CIFC6647CCBB | 187.00 € | **188.00 €** | 11.0 % | **11.6 %** | 188.20 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.00 € | **61.00 €** | 10.5 % | **12.3 %** | 61.21 € | cena podľa najlacnejšieho iného predajcu |
| Rixon QuikBuds | 24.00 € | **25.00 €** | 11.8 % | **16.5 %** | 25.22 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam C60E 4K duálna webová kamera | 58.50 € | **59.50 €** | 19.2 % | **21.3 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| WiFi RGBW 16M Gosund LB2S Tuya smart night light | 13.50 € | **14.50 €** | 27.3 % | **36.8 %** | 14.73 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 277.50 € | **278.50 €** | 9.5 % | **9.9 %** | 278.73 € | cena podľa najlacnejšieho iného predajcu |
| RivaCase 7567 batoh na notebook 17,3" | 52.00 € | **53.00 €** | 14.3 % | **16.5 %** | 53.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 21.50 € | **22.50 €** | 9.0 % | **14.0 %** | 22.76 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit 61521kuchyňská váha Page | 22.00 € | **23.00 €** | 9.3 % | **14.3 %** | 23.27 € | cena podľa najlacnejšieho iného predajcu |
| Nástenné držiaky na TV Perlegear PGMFK6 26-60" | 19.00 € | **20.00 €** | 16.5 % | **22.6 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| 2-zónový hadicový časovač Rainpoint ITV205 | 28.50 € | **29.50 €** | 18.6 % | **22.7 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 19.50 € | **20.50 €** | 12.6 % | **18.4 %** | 20.80 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3002G | 75.00 € | **76.00 €** | 11.1 % | **12.6 %** | 76.30 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Kery B-4660 400W bílý | 35.50 € | **36.50 €** | 10.4 % | **13.5 %** | 36.80 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2119 PRO na ovládanie letu | 77.50 € | **78.50 €** | 12.4 % | **13.8 %** | 78.84 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90504 French press 800ml | 13.00 € | **14.00 €** | 11.0 % | **19.6 %** | 14.35 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 322.00 € | **323.00 €** | 17.7 % | **18.0 %** | 323.36 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s meraním s... | 12.00 € | **13.00 €** | 17.4 % | **27.2 %** | 13.36 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B4 (modrá) | 66.50 € | **67.50 €** | 5.6 % | **7.1 %** | 67.88 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB453138 | 32.00 € | **33.00 €** | 11.9 % | **15.4 %** | 33.40 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6870E0 | 63.50 € | **64.50 €** | 10.2 % | **12.0 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Wireless charger 3in1 BW-IW30 Blitzwolf | 36.50 € | **37.50 €** | 36.4 % | **40.1 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Statívový držiak Puluz s 20 cm LED krúžkom Vlogging ... | 11.50 € | **12.50 €** | 15.3 % | **25.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| RGB Led Light Stick PULUZ 30cm | 18.50 € | **19.50 €** | 17.1 % | **23.5 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak s prísavkou Telesin pre DJI Osmo Action 3/4/5... | 11.50 € | **12.50 €** | 15.9 % | **25.9 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 18.50 € | **19.50 €** | 5.3 % | **11.0 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X3Pro TTL pre fotoaparáty Fuji | 96.50 € | **97.50 €** | 21.1 % | **22.4 %** | 97.90 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 16.50 € | **17.50 €** | 13.7 % | **20.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 87.50 € | **88.50 €** | 17.4 % | **18.7 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9283EK | 18.00 € | **19.00 €** | 11.2 % | **17.4 %** | 19.45 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90502 French press Atria 800 ml | 11.00 € | **12.00 €** | 9.3 % | **19.3 %** | 12.46 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BC060 | 18.00 € | **19.00 €** | 11.0 % | **17.2 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.00 € | **11.00 €** | 20.3 % | **32.3 %** | 11.48 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Ottocast CA525-T3 | 26.00 € | **27.00 €** | 20.9 % | **25.5 %** | 27.49 € | cena podľa najlacnejšieho iného predajcu |
| BALDRTHERM B0598 3-kanálový termohygrometer s automa... | 21.00 € | **22.00 €** | 29.9 % | **36.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Predfilter | 26.00 € | **27.00 €** | 30.6 % | **35.6 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FVB015X | 18.00 € | **19.00 €** | 8.3 % | **14.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Ponorné čerpadlo SUNSUN JP-1500GL | 11.00 € | **12.00 €** | 14.7 % | **25.1 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný obojsmerný merač energie Avatto ZigBee ... | 21.50 € | **22.50 €** | 10.3 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 38.6 % | **41.7 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 107.00 € | **107.90 €** | 16.1 % | **17.1 %** | 107.93 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER VC70 Wi-Fi 4K + 2,5K 128 GB palubná kamera | 238.00 € | **238.90 €** | 19.3 % | **19.7 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.00 € | **12.90 €** | 27.9 % | **37.5 %** | 12.96 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 11.00 € | **11.90 €** | 13.9 % | **23.2 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Panoramatický fotografický stojan 360 Puluz DCA0871W | 15.00 € | **15.90 €** | 9.3 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring Colmi R12 20,8MM 11 (čierny) | 38.00 € | **38.90 €** | 18.8 % | **21.6 %** | 38.94 € | cena podľa najlacnejšieho iného predajcu |
| 3-zónový hadicový časovač RainPoint ITV305 | 49.00 € | **49.90 €** | 19.1 % | **21.2 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC025X | 26.00 € | **26.90 €** | 11.1 % | **15.0 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| Gumová kefa ROMO | 23.00 € | **23.90 €** | 19.8 % | **24.5 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Nora B-4781 bílo/zelená | 20.00 € | **20.90 €** | 11.1 % | **16.1 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **30.50 €** | 32.6 % | **36.0 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 36.2 % | **39.8 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 49.90 € | **50.50 €** | 17.9 % | **19.3 %** | 50.68 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F9 Lite 4K 32 GB palubná kamera | 58.90 € | **59.50 €** | 19.1 % | **20.3 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| MENALUX CB104B | 20.90 € | **21.50 €** | 12.4 % | **15.6 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Podpera pozadia pre fotoštúdio Puluz 70x200cm + poza... | 20.90 € | **21.50 €** | 12.8 % | **16.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Dielenská baterka Superfire G21, 650lm, USB | 13.90 € | **14.50 €** | 12.3 % | **17.2 %** | 14.70 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7285S-SET2 Sáčky pro vasavač DO72 | 14.90 € | **15.50 €** | 14.0 % | **18.5 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 14.90 € | **15.50 €** | 22.9 % | **27.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **19.50 €** | 23.1 % | **26.5 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **19.50 €** | 23.8 % | **27.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **20.50 €** | 30.7 % | **34.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 304.00 € | **304.50 €** | 11.5 % | **11.7 %** | 304.51 € | cena podľa najlacnejšieho iného predajcu |
| GameSir G7 HE wired controller (black) | 42.50 € | **43.00 €** | 8.7 % | **10.0 %** | 43.01 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GCO2007 Auto FIRST 65010 Cars Li | 13.50 € | **14.00 €** | 20.3 % | **24.8 %** | 14.02 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB46E838 | 62.50 € | **63.00 €** | 16.0 % | **16.9 %** | 63.03 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus A12 | 22.00 € | **22.50 €** | 19.1 % | **21.8 %** | 22.56 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S UV AI | 54.50 € | **55.00 €** | 14.5 % | **15.6 %** | 55.07 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 119.00 € | **119.50 €** | 14.9 % | **15.4 %** | 119.57 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci roztok pre robotické vysávače Dreame L10s U... | 26.50 € | **27.00 €** | 14.2 % | **16.4 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ PU3223B Držiak na telefón čierny | 18.50 € | **19.00 €** | 18.6 % | **21.8 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (biele) | 95.00 € | **95.50 €** | 21.2 % | **21.9 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (čierne) | 95.00 € | **95.50 €** | 21.2 % | **21.9 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (oranžové) | 95.00 € | **95.50 €** | 21.2 % | **21.9 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.00 € | **38.50 €** | 10.3 % | **11.7 %** | 38.61 € | cena podľa najlacnejšieho iného predajcu |
| ABS vlákno s povrchovou úpravou (čierne) | 12.50 € | **13.00 €** | 16.9 % | **21.6 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 19,1MM 9 (čierny) | 36.00 € | **36.50 €** | 16.8 % | **18.5 %** | 36.63 € | cena podľa najlacnejšieho iného predajcu |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 31.00 € | **31.50 €** | 7.3 % | **9.0 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| Priemyselná infračervená termokamera Habotest HT820 | 279.00 € | **279.50 €** | 14.9 % | **15.1 %** | 279.64 € | cena podľa najlacnejšieho iného predajcu |
| Alarm GoSmart EMOS IP-1256L GUARDIAN s pohybovým čid... | 59.50 € | **60.00 €** | 11.6 % | **12.5 %** | 60.15 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 18.50 € | **19.00 €** | 6.3 % | **9.2 %** | 19.15 € | cena podľa najlacnejšieho iného predajcu |
| Brita Marella 2,4l modrá 2024 | 18.50 € | **19.00 €** | 15.9 % | **19.0 %** | 19.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 12.50 € | **13.00 €** | 42.1 % | **47.8 %** | 13.19 € | cena podľa najlacnejšieho iného predajcu |
| Sati Wild coffe Ethiopia 500 g zrno | 11.50 € | **12.00 €** | 10.6 % | **15.4 %** | 12.20 € | cena podľa najlacnejšieho iného predajcu |
| Selfie svetlo Telesin s magnetickým držiakom telefónu | 18.00 € | **18.50 €** | 13.3 % | **16.4 %** | 18.70 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 21,6MM 12 (čierny) | 38.00 € | **38.50 €** | 18.8 % | **20.3 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 22,4MM 13 (čierny) | 38.00 € | **38.50 €** | 18.8 % | **20.3 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (červený) | 12.00 € | **12.50 €** | 12.3 % | **16.9 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (sivý) | 12.00 € | **12.50 €** | 12.3 % | **16.9 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender PLA+ (zelený) | 12.00 € | **12.50 €** | 12.3 % | **16.9 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| PETG vlákno Sunlu (olivová) | 12.00 € | **12.50 €** | 12.8 % | **17.5 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Tefal OptiGrill 2v1 GC773D30 | 167.00 € | **167.50 €** | 11.2 % | **11.6 %** | 167.72 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada DREAME pre stanicu Z20/Z30/Z40 | 32.50 € | **33.00 €** | 14.6 % | **16.3 %** | 33.23 € | cena podľa najlacnejšieho iného predajcu |
| Hodinky Colmi V89 Smartwatch (zlaté) | 29.00 € | **29.50 €** | 5.4 % | **7.3 %** | 29.73 € | cena podľa najlacnejšieho iného predajcu |
| FINUM 1760006 Dvojice mlýnků na sůl/koře | 42.50 € | **43.00 €** | 13.0 % | **14.4 %** | 43.25 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Xany 2B, aktivní pokojová anténa | 16.00 € | **16.50 €** | 12.2 % | **15.7 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 21.00 € | **21.50 €** | 10.1 % | **12.8 %** | 21.76 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.00 € | **78.50 €** | 5.8 % | **6.5 %** | 78.76 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku FNIRSI FDM-02 | 28.00 € | **28.50 €** | 5.6 % | **7.5 %** | 28.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.50 € | **20.00 €** | 34.5 % | **37.9 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Pro – palubná kamera | 135.50 € | **136.00 €** | 15.6 % | **16.0 %** | 136.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér s USB A+C 20W PD do Veľkej ... | 10.00 € | **10.50 €** | 25.1 % | **31.3 %** | 10.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér s USB A+C 20W PD do Spojený... | 10.00 € | **10.50 €** | 25.1 % | **31.3 %** | 10.80 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (zelený) | 11.50 € | **12.00 €** | 14.4 % | **19.4 %** | 12.31 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-C102COC101 | 10.50 € | **11.00 €** | 14.9 % | **20.4 %** | 11.32 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92004 Hrnec s pokl. Libra, 4,6 l | 27.00 € | **27.50 €** | 15.1 % | **17.2 %** | 27.82 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.00 € | **37.50 €** | 7.6 % | **9.1 %** | 37.84 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT826 (čierne) | 28.50 € | **29.00 €** | 19.7 % | **21.8 %** | 29.35 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 24.00 € | **24.50 €** | 10.2 % | **12.5 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE005 | 23.00 € | **23.50 €** | 14.2 % | **16.7 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| AB LNB01 Octo Red Edition | 20.00 € | **20.50 €** | 5.3 % | **7.9 %** | 20.89 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A185W03,18,5" | 142.50 € | **143.00 €** | 19.1 % | **19.5 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA (biely) | 12.50 € | **13.00 €** | 21.6 % | **26.4 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| Candy CI32CBB | 124.00 € | **124.50 €** | 16.1 % | **16.5 %** | 124.89 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, modrá | 26.00 € | **26.50 €** | 13.6 % | **15.8 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Coox SPRING forma 26 cm se skleněnou zák | 21.00 € | **21.50 €** | 13.1 % | **15.8 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **12.50 €** | 18.5 % | **23.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM016 12 kg výrobník ľadových kociek (čierny) | 78.00 € | **78.50 €** | 5.1 % | **5.8 %** | 78.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.00 € | **21.50 €** | 15.4 % | **18.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFUV5050 Softbox, 50x50cm | 43.00 € | **43.50 €** | 20.3 % | **21.7 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2397 Tréningový prístroj na stehná a panvo... | 16.00 € | **16.50 €** | 16.9 % | **20.5 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 27.50 € | **28.00 €** | 16.0 % | **18.1 %** | 28.41 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Classic 200 Eas | 19.50 € | **20.00 €** | 13.3 % | **16.2 %** | 20.43 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitý ramenný popruh Puluz pre fotoaparáty PU6002 | 12.50 € | **13.00 €** | 9.7 % | **14.1 %** | 13.43 € | cena podľa najlacnejšieho iného predajcu |
| Rixon GamePods | 31.50 € | **32.00 €** | 13.9 % | **15.7 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot Ranger | 193.50 € | **194.00 €** | 5.7 % | **5.9 %** | 194.50 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife ZJ153 Nákupná taška | 13.00 € | **13.50 €** | 10.9 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sunnylife ZJ153 Nákupná taška | 13.00 € | **13.50 €** | 10.9 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **105.00 €** | 32.6 % | **33.2 %** | 105.06 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC728D10 | 186.50 € | **186.90 €** | 14.0 % | **14.3 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG Pro (čierny) | 11.50 € | **11.90 €** | 12.8 % | **16.7 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight infražiarič na terasu 2000W | 56.50 € | **56.90 €** | 5.0 % | **5.7 %** | 50.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring Colmi R12 17,9MM 7 (čierny) | 38.50 € | **38.90 €** | 18.1 % | **19.3 %** | 38.94 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXJB1000E | 47.50 € | **47.90 €** | 18.9 % | **19.9 %** | 47.96 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E3HB1-4GG | 23.50 € | **23.90 €** | 6.2 % | **8.0 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 19.50 € | **19.90 €** | 5.1 % | **7.2 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 19.50 € | **19.90 €** | 5.4 % | **7.6 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre GoPro HERO11/HERO10/HERO9 | 19.50 € | **19.90 €** | 9.3 % | **11.6 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne | 28.50 € | **28.90 €** | 5.6 % | **7.0 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS062 svorka volantu pre stôl | 54.50 € | **54.90 €** | 17.4 % | **18.3 %** | 55.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **25.00 €** | 35.0 % | **37.2 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **25.00 €** | 33.5 % | **35.7 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **67.50 €** | 22.9 % | **23.6 %** | 67.71 € | cena podľa najlacnejšieho iného predajcu |
| Drevení LED anjeli Solight 1V219, biela farba, 2 × AA | 5.50 € | **5.70 €** | 48.1 % | **53.4 %** | 5.73 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.80 € | **7.00 €** | 48.6 % | **53.0 %** | 7.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 1.70 € | **1.90 €** | 34.2 % | **50.0 %** | 1.96 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s hviezdami Solight 1V52-WW, 1,5 ... | 2.20 € | **2.40 €** | 39.7 % | **52.4 %** | 2.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.70 € | **3.90 €** | 30.8 % | **37.9 %** | 3.95 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Kuchyňská váha, G20093, Ginny, | 20.90 € | **21.00 €** | 19.0 % | **19.6 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Tritanová láhev na pití 1 l černá | 30.90 € | **31.00 €** | 58.3 % | **58.8 %** | 31.17 € | cena podľa najlacnejšieho iného predajcu |
| Skříň kempingová Cattara 13480 MODICA | 61.90 € | **62.00 €** | 10.0 % | **10.2 %** | 62.18 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 40.90 € | **41.00 €** | 5.7 % | **6.0 %** | 41.20 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 40.90 € | **41.00 €** | 7.1 % | **7.3 %** | 41.24 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 23.90 € | **24.00 €** | 14.4 % | **14.8 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Puluz s 8-pinovým konektorom... | 38.90 € | **39.00 €** | 14.9 % | **15.2 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.40 € | **3.50 €** | 33.5 % | **37.5 %** | 3.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 2.10 € | **2.20 €** | 31.3 % | **37.6 %** | 2.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 3.20 € | **3.30 €** | 30.7 % | **34.8 %** | 3.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.70 € | **7.80 €** | 34.6 % | **36.4 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90510 Čajová konvice1200 ml | 10.90 € | **11.00 €** | 14.5 % | **15.5 %** | 11.40 € | cena podľa najlacnejšieho iného predajcu |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 9.8 % | **10.8 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Šnúrka na krk PULUZ pre DJI RC 2/RC 1/Air | 11.90 € | **12.00 €** | 6.8 % | **7.7 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Opal Titanium BS4950 | 79.90 € | **80.00 €** | 11.0 % | **11.2 %** | 80.21 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Ranger Dash cam GPS WiFi 4K Motorbike | 169.90 € | **170.00 €** | 19.4 % | **19.4 %** | 170.43 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **17.50 €** | 25.0 % | **25.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **19.00 €** | 33.0 % | **33.2 %** | 19.05 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (612)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 29.8 % | **6.6 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický skúter NAVEE ST5 Pro | 820.50 € | **741.50 €** | 21.5 % | **9.8 %** | 741.81 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **305.00 €** | 33.5 % | **8.5 %** | 305.09 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **281.50 €** | 32.7 % | **6.6 %** | 281.71 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **794.50 €** | 32.6 % | **22.0 %** | 794.81 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW606810 | 216.90 € | **160.50 €** | 50.9 % | **11.7 %** | 160.58 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **257.50 €** | 27.7 % | **5.2 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **257.50 €** | 26.4 % | **5.2 %** | 236.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **254.50 €** | 25.0 % | **5.9 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **229.90 €** | 25.6 % | **5.1 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **179.90 €** | 42.3 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **157.50 €** | 47.6 % | **16.3 %** | 157.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 502.50 € | **460.50 €** | 22.8 % | **12.6 %** | 460.79 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 784.00 € | **742.50 €** | 21.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **636.90 €** | 47.0 % | **38.6 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 918.00 € | **883.50 €** | 19.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **106.00 €** | 50.0 % | **15.7 %** | 106.49 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **154.50 €** | 27.8 % | **6.5 %** | 154.68 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **135.50 €** | 43.8 % | **18.1 %** | 135.69 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped MERACH MR-S28B1 | 556.00 € | **526.90 €** | 21.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **329.00 €** | 31.9 % | **21.3 %** | 329.31 € | cena podľa najlacnejšieho iného predajcu |
| NAS server TERRAMASTER F2-425 Plus s procesorom Inte... | 534.50 € | **506.00 €** | 21.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 734.00 € | **706.50 €** | 19.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TERRAMASTER F4 SSD NAS - súborový server s procesoro... | 508.50 € | **481.50 €** | 21.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.64 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TERRAMASTER F8 SSD NAS - súborový server s procesoro... | 691.00 € | **665.50 €** | 19.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Guzzanti GZ 126 | 431.50 € | **407.90 €** | 11.2 % | **5.1 %** | 389.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 132.22 € | **109.50 €** | 26.9 % | **5.1 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **163.00 €** | 25.5 % | **10.3 %** | 163.37 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 38.1 % | **7.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Nubia Neo 5 GT 5G černý | 474.90 € | **453.50 €** | 10.0 % | **5.0 %** | 395.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **348.90 €** | 48.6 % | **40.1 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZTE Nubia Air Pro 5G černý | 453.50 € | **432.90 €** | 10.1 % | **5.1 %** | 386.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 363A | 593.50 € | **573.00 €** | 10.0 % | **6.2 %** | 573.44 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka batérií SMALLRIG NP-F970 | 198.90 € | **178.90 €** | 24.7 % | **12.2 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z18 W - prenosný monitor s dvoma 18-palcovým... | 328.90 € | **308.90 €** | 12.7 % | **5.8 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko B5T4924SWW | 463.50 € | **444.50 €** | 11.7 % | **7.1 %** | 444.61 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.00 €** | 35.4 % | **9.7 %** | 81.23 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **64.00 €** | 68.9 % | **31.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **219.50 €** | 23.4 % | **13.9 %** | 219.88 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 59.00 € | **41.00 €** | 74.6 % | **21.3 %** | 41.02 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **207.50 €** | 44.4 % | **32.8 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **111.50 €** | 34.0 % | **15.7 %** | 111.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 340A | 383.50 € | **366.00 €** | 12.4 % | **7.3 %** | 366.41 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **80.00 €** | 35.6 % | **11.4 %** | 80.30 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.50 €** | 40.2 % | **13.3 %** | 72.69 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 62.00 € | **45.00 €** | 58.1 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **55.50 €** | 50.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Drôtové slúchadlá do uší TRUTHEAR Zero (červené) | 75.50 € | **59.00 €** | 48.6 % | **16.1 %** | 59.13 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 699.00 € | **683.00 €** | 11.3 % | **8.7 %** | 683.19 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 374.90 € | **359.00 €** | 11.7 % | **7.0 %** | 359.18 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **94.00 €** | 58.2 % | **35.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **31.50 €** | 71.1 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 419.50 € | **403.90 €** | 19.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Neewer Retro blesk | 74.82 € | **59.50 €** | 52.1 % | **20.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 65.7 % | **17.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i6 černá | 167.90 € | **153.50 €** | 18.7 % | **8.5 %** | 153.70 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **55.50 €** | 44.8 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Diagnostický skener pre motocykle ANCEL MT310 | 293.00 € | **278.90 €** | 19.3 % | **13.5 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **236.00 €** | 34.0 % | **26.5 %** | 236.39 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **60.90 €** | 41.2 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **41.00 €** | 53.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED svietidlo NEEWER APC100C | 300.33 € | **286.90 €** | 47.7 % | **41.0 %** | 287.00 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **53.90 €** | 43.7 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **69.50 €** | 68.9 % | **42.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **123.00 €** | 37.5 % | **25.0 %** | 123.26 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **138.90 €** | 48.4 % | **36.8 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Statív Mini PGYTECH s nadstavcom pre vreckové / akčn... | 43.50 € | **32.00 €** | 86.3 % | **37.1 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 650.00 € | **638.50 €** | 17.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický bežecký pás UREVO SpaceWalk 5 (čierny) | 310.00 € | **298.50 €** | 19.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 30.6 % | **15.7 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Spitz Plus 4G LTE | 214.90 € | **203.50 €** | 21.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.23 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T14 | 298.50 € | **287.90 €** | 19.3 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Parabolický dáždnik GODOX UB-165S | 77.50 € | **66.90 €** | 21.7 % | **5.1 %** | 62.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMICA TR 110 TB | 303.50 € | **293.00 €** | 11.5 % | **7.7 %** | 293.43 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **126.90 €** | 46.5 % | **35.4 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **210.00 €** | 39.1 % | **32.5 %** | 210.32 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **39.50 €** | 45.5 % | **15.6 %** | 39.69 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **116.90 €** | 33.7 % | **23.0 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier MR3 2.0 (čierne) | 94.00 € | **84.00 €** | 17.6 % | **5.1 %** | 78.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 44GW | 204.00 € | **194.00 €** | 11.6 % | **6.2 %** | 194.14 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-F970 (zelená) | 83.50 € | **73.50 €** | 22.5 % | **7.8 %** | 73.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 143.00 € | **134.00 €** | 17.3 % | **10.0 %** | 134.10 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Amber M100 4x6" | 121.50 € | **112.50 €** | 32.1 % | **22.3 %** | 112.69 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 269.50 € | **260.50 €** | 19.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **191.00 €** | 39.8 % | **33.6 %** | 191.20 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **33.90 €** | 44.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje FN619EEW5 | 484.50 € | **475.90 €** | 7.0 % | **5.1 %** | 474.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.90 €** | 14.9 % | **10.8 %** | 219.97 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 137.00 € | **129.00 €** | 15.1 % | **8.4 %** | 129.05 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 49.8 % | **16.0 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **21.90 €** | 42.7 % | **5.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor Blitzwolf BW-V12 | 274.70 € | **266.90 €** | 44.0 % | **39.9 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.50 €** | 42.1 % | **5.8 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.50 €** | 29.4 % | **15.2 %** | 62.82 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 47.4 % | **39.9 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-FZ100 | 66.00 € | **58.50 €** | 18.6 % | **5.2 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu |
| VITURE Pro 256 GB nákrčník | 443.00 € | **435.50 €** | 17.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **133.00 €** | 22.1 % | **15.6 %** | 133.41 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600Bi s dvojfare... | 136.00 € | **128.90 €** | 21.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Niceboy ION Charles i6 bílá | 155.90 € | **148.90 €** | 10.2 % | **5.2 %** | 146.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 103RB | 214.00 € | **207.00 €** | 10.5 % | **6.9 %** | 207.28 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 194.00 € | **187.00 €** | 16.0 % | **11.8 %** | 187.45 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 189.90 € | **182.90 €** | 19.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 189.90 € | **182.90 €** | 19.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **30.50 €** | 49.3 % | **21.7 %** | 30.59 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **69.50 €** | 63.8 % | **49.0 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **20.50 €** | 73.6 % | **31.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **143.00 €** | 39.9 % | **33.7 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| CANON PIXMA G3430 Pink | 146.50 € | **139.90 €** | 10.2 % | **5.2 %** | 129.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 15.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **16.00 €** | 78.5 % | **26.7 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje GI6432BSCWF | 323.50 € | **317.00 €** | 8.1 % | **5.9 %** | 317.46 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 208.90 € | **202.50 €** | 11.6 % | **8.1 %** | 202.85 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do kamery SMALLRIG DMW-BLK22 | 52.90 € | **46.50 €** | 24.4 % | **9.4 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **131.00 €** | 38.2 % | **31.8 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **68.50 €** | 17.3 % | **7.4 %** | 68.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.50 €** | 19.4 % | **11.5 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **129.00 €** | 36.1 % | **29.8 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **129.00 €** | 35.0 % | **28.7 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **21.00 €** | 73.6 % | **34.2 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **118.90 €** | 49.0 % | **41.7 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **17.50 €** | 71.3 % | **27.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **32.90 €** | 38.3 % | **16.9 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-F970 (čierna) | 72.50 € | **66.50 €** | 19.9 % | **9.9 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **148.90 €** | 43.8 % | **38.4 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **106.90 €** | 52.1 % | **44.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **23.90 €** | 45.3 % | **16.8 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **84.00 €** | 42.8 % | **33.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| N'oveen ohřívač vody IWH560 | 45.50 € | **39.90 €** | 19.9 % | **5.2 %** | 36.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM SJ11 Active (čierny) | 142.50 € | **136.90 €** | 11.1 % | **6.7 %** | 136.91 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **17.00 €** | 51.1 % | **13.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 39.3 % | **31.9 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 90.50 € | **85.00 €** | 31.5 % | **23.5 %** | 85.13 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7NP WiFi 4K + 1080p 128 GB palubná kamera | 132.00 € | **126.50 €** | 19.0 % | **14.1 %** | 126.65 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i10 černá | 246.50 € | **241.00 €** | 10.0 % | **7.6 %** | 241.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smart ceiling lamp 30cm Bluetooth 16M RGBCW Gosund L... | 23.90 € | **18.50 €** | 76.8 % | **36.9 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG EN-EL15c (oranžová) | 42.90 € | **37.50 €** | 29.0 % | **12.8 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Waterproof housing diving case PULUZ for DJI Osmo Po... | 37.90 € | **32.50 €** | 34.9 % | **15.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 42.7 % | **19.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **107.50 €** | 30.8 % | **24.7 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **41.90 €** | 52.4 % | **35.4 %** | 41.95 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **22.00 €** | 64.9 % | **33.6 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 267.00 € | **261.90 €** | 7.4 % | **5.4 %** | 261.95 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 373.00 € | **367.90 €** | 16.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 35.3 % | **7.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 177.00 € | **171.90 €** | 8.2 % | **5.0 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **17.50 €** | 68.7 % | **30.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **17.50 €** | 68.7 % | **30.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X1R TTL pre Canon | 49.00 € | **44.00 €** | 43.8 % | **29.1 %** | 44.10 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre fotoaparáty Fuji | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre Nikon | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre Canon | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre fotoaparáty Olympus | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre Sony | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 323.00 € | **318.00 €** | 8.0 % | **6.3 %** | 318.19 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 179.00 € | **174.00 €** | 8.7 % | **5.7 %** | 174.40 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 179.00 € | **174.00 €** | 8.7 % | **5.7 %** | 174.40 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.00 € | **211.00 €** | 16.9 % | **14.2 %** | 211.49 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **15.00 €** | 74.0 % | **30.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **69.90 €** | 39.2 % | **30.0 %** | 69.99 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 174.90 € | **170.00 €** | 13.6 % | **10.5 %** | 170.05 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **27.50 €** | 61.4 % | **37.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 33.0 % | **11.9 %** | 25.28 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.90 €** | 33.0 % | **7.6 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **105.00 €** | 29.4 % | **23.9 %** | 105.14 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **21.50 €** | 60.4 % | **31.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (modré) | 28.50 € | **23.90 €** | 27.1 % | **6.6 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TEFAL FR 490070 | 107.50 € | **102.90 €** | 10.0 % | **5.3 %** | 79.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Batéria SMALLRIG VB50 mini V-Mount 3579B | 103.50 € | **98.90 €** | 21.6 % | **16.2 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E200SM | 22.00 € | **17.50 €** | 50.7 % | **19.9 %** | 17.54 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 40.00 € | **35.50 €** | 23.9 % | **9.9 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet HUION Kamvas Pad 12 KP1202 | 477.50 € | **473.00 €** | 16.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Diaľkový spúšťač GODOX X3Pro TTL pre Sony | 96.00 € | **91.50 €** | 20.9 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Automatické kŕmidlo pre domáce zvieratá s tlačidlami... | 39.00 € | **34.50 €** | 30.3 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **35.50 €** | 56.3 % | **38.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Blade A35e šedý | 98.90 € | **94.50 €** | 10.0 % | **5.1 %** | 89.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZTE Watch K2 Pro Blue | 93.90 € | **89.50 €** | 10.4 % | **5.2 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Pink | 93.90 € | **89.50 €** | 10.4 % | **5.2 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **88.00 €** | 35.2 % | **28.9 %** | 88.41 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **37.90 €** | 27.9 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **21.50 €** | 36.5 % | **14.5 %** | 21.62 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 46.00 € | **41.90 €** | 19.1 % | **8.5 %** | 41.91 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS EDIFIER X5 Pro (modré) | 35.00 € | **30.90 €** | 30.8 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **18.50 €** | 64.9 % | **35.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **95.90 €** | 28.6 % | **23.4 %** | 95.98 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-NOVA, 4K GOOGLE TV STICK | 72.50 € | **68.50 €** | 11.9 % | **5.7 %** | 68.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight batériová kamera WiFi so solárnym panelom | 61.50 € | **57.50 €** | 41.6 % | **32.4 %** | 57.55 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 162.00 € | **158.00 €** | 8.6 % | **5.9 %** | 158.26 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **60.50 €** | 14.7 % | **7.6 %** | 60.79 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VNT200 (čierne) | 33.50 € | **29.50 €** | 39.5 % | **22.8 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 244.00 € | **240.00 €** | 8.0 % | **6.2 %** | 240.36 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 132.00 € | **128.00 €** | 16.8 % | **13.2 %** | 128.38 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový mikrofón SMALLRIG S 70 | 81.50 € | **77.50 €** | 13.9 % | **8.4 %** | 77.90 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 429.00 € | **425.00 €** | 14.5 % | **13.4 %** | 425.49 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7N WiFi 4K + 1080p palubná kamera | 117.50 € | **113.50 €** | 19.1 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **36.00 €** | 25.2 % | **12.7 %** | 36.11 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aligator S6600 Duo 64GB Black | 81.90 € | **78.00 €** | 10.3 % | **5.0 %** | 68.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo INFRA DRY+ | 183.90 € | **180.00 €** | 11.7 % | **9.3 %** | 180.20 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 103.90 € | **100.00 €** | 19.3 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Domo DO9079KR-PROMO | 291.90 € | **288.00 €** | 10.1 % | **8.6 %** | 288.10 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka batérií SMALLRIG LP-E6NH | 43.50 € | **39.90 €** | 14.8 % | **5.3 %** | 39.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **21.00 €** | 57.4 % | **34.3 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RO 3985 EA | 75.50 € | **71.90 €** | 11.6 % | **6.3 %** | 71.91 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 134.50 € | **131.00 €** | 11.4 % | **8.5 %** | 131.07 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X1R pre Nikon | 47.50 € | **44.00 €** | 39.4 % | **29.1 %** | 44.10 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 212.00 € | **208.50 €** | 7.7 % | **6.0 %** | 208.65 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 231.50 € | **228.00 €** | 8.9 % | **7.2 %** | 228.16 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 170.00 € | **166.50 €** | 11.4 % | **9.1 %** | 166.70 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 164.50 € | **161.00 €** | 8.4 % | **6.1 %** | 161.22 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 silver | 27.50 € | **24.00 €** | 26.3 % | **10.2 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu |
| Salente Airfit-Wh | 48.50 € | **45.00 €** | 39.1 % | **29.0 %** | 45.30 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 463.00 € | **459.50 €** | 6.8 % | **6.0 %** | 459.82 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 146.00 € | **142.50 €** | 9.0 % | **6.4 %** | 142.85 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-FZ100 (oranžová) | 37.00 € | **33.50 €** | 21.0 % | **9.6 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 199.50 € | **196.00 €** | 8.6 % | **6.7 %** | 196.48 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S100 na detekciu úniku | 101.00 € | **97.50 €** | 19.3 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G10153 Horkovzdušná trouba | 171.90 € | **168.50 €** | 8.3 % | **6.2 %** | 168.79 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 523.90 € | **520.50 €** | 7.3 % | **6.6 %** | 520.82 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **28.90 €** | 36.0 % | **21.7 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.05 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **23.90 €** | 28.1 % | **12.7 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 41.5 % | **35.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **24.50 €** | 53.5 % | **35.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **24.50 €** | 61.9 % | **43.3 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 61.00 € | **57.90 €** | 11.2 % | **5.5 %** | 54.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.50 €** | 40.4 % | **30.4 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **59.50 €** | 47.1 % | **40.0 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| GODOX AD-S85S Softbox | 81.50 € | **78.50 €** | 9.1 % | **5.1 %** | 71.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit LinoLift 600 Quick Start 85282 | 75.00 € | **72.00 €** | 9.7 % | **5.3 %** | 72.09 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (biela) | 181.50 € | **178.50 €** | 10.9 % | **9.0 %** | 178.59 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (čierny) | 181.50 € | **178.50 €** | 10.9 % | **9.0 %** | 178.59 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 361.50 € | **358.50 €** | 6.9 % | **6.0 %** | 358.64 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **163.50 €** | 11.1 % | **9.1 %** | 163.65 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový merač Habotest HT208D | 48.00 € | **45.00 €** | 14.3 % | **7.1 %** | 45.19 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C675D KIT 2× 2K, vonkajšia, IP P... | 216.50 € | **213.50 €** | 8.2 % | **6.7 %** | 213.80 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCO1200E | 116.00 € | **113.00 €** | 9.3 % | **6.5 %** | 113.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **15.50 €** | 37.9 % | **15.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 81.50 € | **78.50 €** | 19.2 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 40.2 % | **19.3 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **16.00 €** | 51.9 % | **28.2 %** | 16.04 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **16.00 €** | 55.8 % | **31.4 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **15.00 €** | 54.6 % | **29.3 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **34.50 €** | 40.3 % | **29.3 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 Master – dvojitá palubná kamera | 224.90 € | **222.00 €** | 19.5 % | **17.9 %** | 222.27 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák PEGASUS RockSolid | 56.90 € | **54.00 €** | 10.7 % | **5.1 %** | 51.02 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.50 €** | 29.4 % | **6.6 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 41.5 % | **16.5 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 42.9 % | **17.6 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 12.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **49.50 €** | 32.9 % | **25.8 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 34.0 % | **20.9 %** | 24.64 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 55.1 % | **39.9 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 994 | 54.50 € | **51.90 €** | 10.4 % | **5.2 %** | 49.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Spúšťač blesku GODOX BD-04 | 30.50 € | **27.90 €** | 15.5 % | **5.7 %** | 26.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK Archer AX53 WiFi Router | 55.50 € | **52.90 €** | 10.3 % | **5.1 %** | 52.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO727BL | 58.50 € | **55.90 €** | 11.2 % | **6.2 %** | 56.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Black | 44.50 € | **42.00 €** | 25.1 % | **18.0 %** | 42.19 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátor Lipo Gens Ace G-Tech 3300mAh 22,2V 60C 6S... | 71.00 € | **68.50 €** | 18.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **17.50 €** | 55.8 % | **36.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **15.00 €** | 55.6 % | **33.9 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na headset BOBOVR M3 | 40.90 € | **38.50 €** | 43.4 % | **35.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 41.6 % | **19.1 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **166.90 €** | 44.5 % | **42.6 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **47.50 €** | 55.4 % | **48.5 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **47.50 €** | 40.2 % | **34.0 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 49.72 € | **47.50 €** | 45.4 % | **38.9 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 18.3 % | **8.2 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **22.50 €** | 39.1 % | **27.2 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L Automatic Pet Feeder Button Version (White) | 39.00 € | **36.90 €** | 22.0 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.90 € | **7.80 €** | 37.4 % | **8.2 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.50 €** | 20.6 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **20.50 €** | 40.7 % | **27.9 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **20.50 €** | 29.6 % | **17.8 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **19.00 €** | 41.4 % | **27.9 %** | 19.09 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 21 červený | 40.90 € | **38.90 €** | 10.7 % | **5.3 %** | 33.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CPA HALO 21 modrý | 40.90 € | **38.90 €** | 10.7 % | **5.3 %** | 33.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| EMOS E8625 domácí bezdrátová meteostanice | 45.90 € | **43.90 €** | 10.0 % | **5.3 %** | 41.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.50 € | **34.50 €** | 11.5 % | **5.4 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 1535SS | 205.00 € | **203.00 €** | 9.6 % | **8.5 %** | 203.01 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka SMALLRIG X99 | 243.50 € | **241.50 €** | 10.6 % | **9.7 %** | 241.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 41.50 € | **39.50 €** | 10.7 % | **5.4 %** | 39.61 € | cena podľa najlacnejšieho iného predajcu |
| Blesková hlava GODOX BD-07 | 26.00 € | **24.00 €** | 18.4 % | **9.3 %** | 24.21 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 67.00 € | **65.00 €** | 10.0 % | **6.7 %** | 65.39 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus A8 electric pump | 37.50 € | **35.50 €** | 24.2 % | **17.6 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.50 € | **10.50 €** | 46.9 % | **23.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE FN4172CW | 331.50 € | **329.50 €** | 7.0 % | **6.3 %** | 329.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-PA0007 Pozadie | 42.50 € | **40.50 €** | 21.0 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GODOX CBA-TA0007 Pozadie | 42.50 € | **40.50 €** | 21.0 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gens ace G-Tech 5000mAh 11.1V 45C 3S1P lipo battery ... | 57.00 € | **55.00 €** | 19.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 52.9 % | **37.7 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 24.6 % | **12.2 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **17.00 €** | 52.4 % | **36.6 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **16.00 €** | 41.3 % | **26.0 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **35.50 €** | 40.3 % | **33.1 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara fialová | 36.90 € | **35.00 €** | 13.5 % | **7.7 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara modrá | 36.90 € | **35.00 €** | 13.5 % | **7.7 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **14.50 €** | 46.8 % | **29.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **33.00 €** | 39.4 % | **32.0 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **28.00 €** | 40.5 % | **32.4 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **25.50 €** | 23.4 % | **15.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **23.00 €** | 42.7 % | **33.4 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 11.00 € | **9.40 €** | 66.8 % | **42.6 %** | 9.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.50 € | **8.90 €** | 40.9 % | **19.4 %** | 9.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 117A | 239.50 € | **237.90 €** | 11.5 % | **10.7 %** | 237.95 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2011300 | 200.50 € | **198.90 €** | 8.8 % | **7.9 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **21.00 €** | 21.5 % | **13.1 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BOS6737E20FBG | 343.00 € | **341.50 €** | 7.0 % | **6.5 %** | 341.54 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **178.90 €** | 42.8 % | **41.7 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.00 € | **39.50 €** | 10.1 % | **6.1 %** | 39.61 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (modrý) | 14.00 € | **12.50 €** | 31.0 % | **16.9 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26730-56/RH | 33.00 € | **31.50 €** | 15.4 % | **10.1 %** | 31.72 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE F4142PW | 238.00 € | **236.50 €** | 8.0 % | **7.3 %** | 236.74 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 277.50 € | **276.00 €** | 30.8 % | **30.1 %** | 276.29 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.50 € | **887.00 €** | 20.3 % | **20.1 %** | 887.34 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1610 | 47.50 € | **46.00 €** | 10.5 % | **7.0 %** | 46.36 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Set CLEAN TWIST Disc Mop BLACK | 33.50 € | **32.00 €** | 10.1 % | **5.2 %** | 32.39 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 182.50 € | **181.00 €** | 12.5 % | **11.6 %** | 181.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok s časovačom Solight 1V285, 10/13/... | 14.00 € | **12.50 €** | 61.0 % | **43.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač Meross MRS105MA-EU WiFi... | 27.00 € | **25.50 €** | 26.4 % | **19.4 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 37.50 € | **36.00 €** | 22.3 % | **17.4 %** | 36.41 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 39.6 % | **29.4 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **38.50 €** | 41.2 % | **36.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **17.50 €** | 23.8 % | **14.2 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Softbox GODOX SB1520, univerzálny typ, 15x20 cm | 11.90 € | **10.50 €** | 19.3 % | **5.3 %** | 10.71 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo EasyPhone XS Black | 33.90 € | **32.50 €** | 10.4 % | **5.9 %** | 24.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GoSmart přenosný ovladač scén EMOS IP-2001ZB /H5014/... | 25.90 € | **24.50 €** | 12.4 % | **6.3 %** | 20.16 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 19.90 € | **18.50 €** | 44.2 % | **34.1 %** | 18.82 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27131-56 | 29.90 € | **28.50 €** | 16.4 % | **10.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 28 černý | 44.90 € | **43.50 €** | 10.5 % | **7.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 28 červený | 44.90 € | **43.50 €** | 10.5 % | **7.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| myPhone Halo C SENIOR černý | 40.90 € | **39.50 €** | 10.7 % | **6.9 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRKI519E41 | 502.90 € | **501.50 €** | 7.2 % | **6.9 %** | 501.78 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.50 €** | 31.0 % | **19.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **248.90 €** | 41.5 % | **40.9 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Tattu R-Line verzia 5.0 850 mAh 14,8 V 4S1P 150C XT3... | 20.00 € | **18.90 €** | 21.5 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Rowenta RH1833E0 | 150.00 € | **148.90 €** | 11.3 % | **10.5 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **63.50 €** | 32.2 % | **30.0 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 47.6 % | **40.7 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic 180 Solid | 21.50 € | **20.50 €** | 11.5 % | **6.3 %** | 19.44 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PG-575 XL Black | 26.90 € | **25.90 €** | 10.4 % | **6.3 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON CL-546 Color | 20.50 € | **19.50 €** | 11.9 % | **6.4 %** | 18.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Philips AWP175/10 | 24.50 € | **23.50 €** | 11.2 % | **6.7 %** | 22.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reflektor GODOX RFT-4 | 18.90 € | **17.90 €** | 20.2 % | **13.9 %** | 17.91 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZCK8040 | 42.50 € | **41.50 €** | 11.6 % | **9.0 %** | 41.55 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Edifier X5 Pro V25 TWS (čierne) - nové 2025 | 33.90 € | **32.90 €** | 15.8 % | **12.4 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 167.90 € | **166.90 €** | 33.3 % | **32.5 %** | 166.99 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH7AC1E0 | 219.90 € | **218.90 €** | 7.7 % | **7.2 %** | 219.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 447.90 € | **446.90 €** | 35.9 % | **35.6 %** | 447.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 621.90 € | **620.90 €** | 112257.7 % | **112077.1 %** | 621.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistič podláh na rôzne povrchy pre Dreame H14 Dual | 20.00 € | **19.00 €** | 14.4 % | **8.7 %** | 19.16 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 209.00 € | **208.00 €** | 10.7 % | **10.2 %** | 208.18 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 4G 2026 – palubná kamera | 192.00 € | **191.00 €** | 19.3 % | **18.6 %** | 191.20 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo HDO, aktivní venkovní anténa | 45.50 € | **44.50 €** | 16.7 % | **14.1 %** | 44.70 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9310M klávesnice bílá | 24.50 € | **23.50 €** | 11.8 % | **7.3 %** | 23.74 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim | 29.00 € | **28.00 €** | 10.0 % | **6.2 %** | 28.27 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO8708W | 74.50 € | **73.50 €** | 12.3 % | **10.8 %** | 73.80 € | cena podľa najlacnejšieho iného predajcu |
| Súprava farebných efektov GODOX V-11C | 15.00 € | **14.00 €** | 19.2 % | **11.3 %** | 14.31 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 30.00 € | **29.00 €** | 11.1 % | **7.4 %** | 29.32 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočné mestečko s kostolom Solight 1V250, 30 ×... | 12.50 € | **11.50 €** | 44.6 % | **33.0 %** | 11.84 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 102.50 € | **101.50 €** | 7.6 % | **6.6 %** | 101.89 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet Flip AI 4K | 125.50 € | **124.50 €** | 14.5 % | **13.5 %** | 124.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **14.50 €** | 48.1 % | **38.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 22760-56/RH | 29.50 € | **28.50 €** | 9.3 % | **5.6 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 40.50 € | **39.50 €** | 8.8 % | **6.1 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 208.50 € | **207.50 €** | 16.6 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 8in1 docking station BW-TH16 USB 100 W LCD... | 48.50 € | **47.50 €** | 11.4 % | **9.1 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Lamax Clips1 Play White | 16.50 € | **15.50 €** | 19.5 % | **12.2 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno CREALITY PLA Jahoda (červená) | 16.50 € | **15.50 €** | 13.0 % | **6.2 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 182.00 € | **181.00 €** | 26.0 % | **25.3 %** | 181.49 € | cena podľa najlacnejšieho iného predajcu |
| Budík Blitzwolf BW-FW10 s nabíjačkou 2xUSB-A, 4xUSB-... | 55.00 € | **54.00 €** | 16.9 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný prsteň COLMI R02, veľkosť 12,21,3 mm (č... | 29.50 € | **28.50 €** | 19.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Skladací elektrický bežecký pás ACEZOE P20 (červený) | 234.50 € | **233.50 €** | 15.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Skladací elektrický bežecký pás ACEZOE P20 (čierny a... | 234.50 € | **233.50 €** | 15.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vlákno Creality TPU (modré) | 19.99 € | **19.00 €** | 37.7 % | **30.9 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **16.50 €** | 36.9 % | **29.6 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 44.7 % | **37.0 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **16.50 €** | 43.9 % | **36.2 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **36.50 €** | 40.9 % | **37.4 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.00 €** | 12.5 % | **5.7 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tréninkové háky REBEL RBA-2505 | 11.90 € | **11.00 €** | 20.8 % | **11.6 %** | 11.14 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Ruby Red BS4717 | 39.90 € | **39.00 €** | 10.4 % | **8.0 %** | 39.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **14.00 €** | 47.3 % | **38.8 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **54.00 €** | 37.3 % | **35.3 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **6.80 €** | 35.2 % | **22.6 %** | 6.84 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.50 € | **2.80 €** | 55.5 % | **24.4 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **26.50 €** | 36.7 % | **33.4 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **46.50 €** | 26.6 % | **24.9 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 19.50 € | **18.90 €** | 9.3 % | **6.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900 (čierna) | 40.50 € | **39.90 €** | 8.1 % | **6.5 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Sora Black | 18.50 € | **17.90 €** | 10.7 % | **7.1 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Sora White | 18.50 € | **17.90 €** | 10.7 % | **7.1 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Status STA 157601 | 14.50 € | **13.90 €** | 10.2 % | **5.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **64.00 €** | 22.4 % | **21.3 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW501815 | 129.50 € | **129.00 €** | 5.5 % | **5.1 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PULUZ Gimbal pre DJI Osmo Action 5 Pro / 4 / 3 (čierny) | 12.50 € | **12.00 €** | 24.5 % | **19.6 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 113.00 € | **112.50 €** | 10.0 % | **9.5 %** | 112.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 113.00 € | **112.50 €** | 5.8 % | **5.3 %** | 112.58 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA6 NP3T3EHTB Candy Bake 600 | 270.50 € | **270.00 €** | 7.3 % | **7.1 %** | 270.08 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 78.00 € | **77.50 €** | 18.1 % | **17.3 %** | 77.59 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 90.00 € | **89.50 €** | 8.0 % | **7.4 %** | 89.60 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 287.50 € | **287.00 €** | 14.1 % | **13.9 %** | 287.10 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600R RGB | 134.50 € | **134.00 €** | 13.9 % | **13.4 %** | 134.10 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (čierny) | 13.00 € | **12.50 €** | 21.6 % | **16.9 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.50 € | **296.00 €** | 12.9 % | **12.7 %** | 296.24 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný modul pre DJI Osmo Mobile | 58.00 € | **57.50 €** | 13.4 % | **12.5 %** | 57.79 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 247.50 € | **247.00 €** | 31.1 % | **30.8 %** | 247.34 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 263.00 € | **262.50 €** | 19.8 % | **19.6 %** | 262.85 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam S800 | 87.50 € | **87.00 €** | 14.3 % | **13.7 %** | 87.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 32.50 € | **32.00 €** | 27.8 % | **25.8 %** | 32.37 € | cena podľa najlacnejšieho iného predajcu |
| Tester baterií UNI-T UT677C s diagnostikou | 537.00 € | **536.50 €** | 15.6 % | **15.5 %** | 536.89 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 339.50 € | **339.00 €** | 20.3 % | **20.1 %** | 339.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-3 PREMIUM 3 kg (100x150... | 26.50 € | **26.00 €** | 11.6 % | **9.5 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 28.00 € | **27.50 €** | 15.5 % | **13.4 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-5 PREMIUM 5 kg (100x150... | 30.50 € | **30.00 €** | 20.8 % | **18.8 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 28.00 € | **27.50 €** | 15.5 % | **13.4 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-5 PREMIUM 5 kg (100x150... | 30.50 € | **30.00 €** | 20.8 % | **18.8 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 15.50 € | **15.00 €** | 53.9 % | **48.9 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 920.00 € | **919.50 €** | 14.2 % | **14.1 %** | 919.89 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 157.00 € | **156.50 €** | 9.8 % | **9.4 %** | 156.89 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 107.00 € | **106.50 €** | 11.0 % | **10.5 %** | 106.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 271.00 € | **270.50 €** | 6.8 % | **6.6 %** | 270.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.50 € | **159.00 €** | 6.4 % | **6.1 %** | 159.39 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 272.50 € | **272.00 €** | 5.3 % | **5.1 %** | 272.39 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá Edifier HECATE G2 II (čierne) | 32.50 € | **32.00 €** | 11.3 % | **9.6 %** | 32.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 184.50 € | **184.00 €** | 5.6 % | **5.3 %** | 184.39 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 219.50 € | **219.00 €** | 15.2 % | **15.0 %** | 219.39 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 55.00 € | **54.50 €** | 67.5 % | **66.0 %** | 54.89 € | cena podľa najlacnejšieho iného predajcu |
| Zámek na kolo 57087 | 12.00 € | **11.50 €** | 10.5 % | **5.9 %** | 11.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová vesta REBEL ACTIVE RBA-2527-5 5kg neoprenová | 24.50 € | **24.00 €** | 7.8 % | **5.6 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 681.00 € | **680.50 €** | 6.9 % | **6.9 %** | 680.89 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjateľná stolová lampa Yeelight 4 v 1 | 18.00 € | **17.50 €** | 19.9 % | **16.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 13.00 € | **12.50 €** | 21.2 % | **16.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 15.00 € | **14.50 €** | 49.5 % | **44.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey S7 s kamerou s dosahom 1... | 125.00 € | **124.50 €** | 13.6 % | **13.2 %** | 124.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 41.00 € | **40.50 €** | 22.5 % | **21.0 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Zvuková karta Maono G1 Neo (biela) | 47.00 € | **46.50 €** | 16.6 % | **15.3 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Maono G1 Neo Sound Card Black | 47.00 € | **46.50 €** | 15.0 % | **13.8 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.50 € | **116.00 €** | 17.9 % | **17.4 %** | 116.46 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 49.50 € | **49.00 €** | 33.5 % | **32.1 %** | 49.46 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.50 € | **71.00 €** | 17.3 % | **16.5 %** | 71.47 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X3 TTL pre Fujifilm | 86.50 € | **86.00 €** | 39.0 % | **38.2 %** | 86.47 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-DC24PL3C-L 2.4 Mpix venkovní dome kamera 4v1 ... | 50.50 € | **50.00 €** | 16.9 % | **15.7 %** | 50.48 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz s pumpou, 4 ks | 35.50 € | **35.00 €** | 8.3 % | **6.8 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 81.50 € | **81.00 €** | 5.8 % | **5.1 %** | 81.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 63.50 € | **63.00 €** | 17.0 % | **16.0 %** | 63.49 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.50 € | **105.00 €** | 19.2 % | **18.6 %** | 105.49 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0859 GaN 140W USB-A + ... | 49.50 € | **49.00 €** | 30.5 % | **29.2 %** | 49.49 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 116.50 € | **116.00 €** | 23001.3 % | **22902.2 %** | 116.49 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 173.50 € | **173.00 €** | 6.0 % | **5.6 %** | 173.49 € | cena podľa najlacnejšieho iného predajcu |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 59.50 € | **59.00 €** | 19.5 % | **18.5 %** | 59.49 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.50 € | **104.00 €** | 18.4 % | **17.8 %** | 104.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 45.50 € | **45.00 €** | 28.0 % | **26.6 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 37.50 € | **37.00 €** | 6.6 % | **5.1 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 143.50 € | **143.00 €** | 49.3 % | **48.8 %** | 143.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.50 € | **11.00 €** | 29.1 % | **23.5 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 16.50 € | **16.00 €** | 12.4 % | **9.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 38.50 € | **38.00 €** | 16.8 % | **15.3 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 30.50 € | **30.00 €** | 37.5 % | **35.3 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight ventilátor do kúpeľne | 13.50 € | **13.00 €** | 11.8 % | **7.6 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.50 € | **14.00 €** | 17.1 % | **13.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 101.50 € | **101.00 €** | 5.8 % | **5.3 %** | 101.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 30.50 € | **30.00 €** | 50.1 % | **47.6 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada ND filtrov pre DJI Action 6 (ND8/16/32/64) | 26.00 € | **25.50 €** | 17.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sunnylife 1/4'' rýchloupínací držiak s mačacím uchom... | 13.00 € | **12.50 €** | 20.4 % | **15.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight domáca kamera s nočným svetlom a hodinami | 33.50 € | **33.00 €** | 23.2 % | **21.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 21.50 € | **21.00 €** | 25.9 % | **23.0 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| STRONG SRT 8119 | 26.50 € | **26.00 €** | 12.2 % | **10.1 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový ventilátor Darkflash Gauss G24 (čierny) | 12.00 € | **11.50 €** | 19.6 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **19.50 €** | 40.1 % | **36.7 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **16.50 €** | 42.8 % | **39.3 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.90 € | **187.50 €** | 10.7 % | **10.5 %** | 187.74 € | cena podľa najlacnejšieho iného predajcu |
| TESLA GlideStar GQ500 | 66.90 € | **66.50 €** | 10.1 % | **9.5 %** | 66.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 150.90 € | **150.50 €** | 12.3 % | **12.0 %** | 150.79 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.90 € | **137.50 €** | 13.6 % | **13.3 %** | 137.83 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat DIGITRADIO 317 /černé/ | 83.90 € | **83.50 €** | 8.9 % | **8.4 %** | 83.87 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.90 € | **108.50 €** | 8.2 % | **7.8 %** | 108.88 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 71.90 € | **71.50 €** | 13.0 % | **12.4 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 82.90 € | **82.50 €** | 23.2 % | **22.6 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 124.90 € | **124.50 €** | 8.9 % | **8.6 %** | 124.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 94.90 € | **94.50 €** | 15.2 % | **14.7 %** | 94.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 158.90 € | **158.50 €** | 21.0 % | **20.7 %** | 158.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 148.90 € | **148.50 €** | 21.0 % | **20.6 %** | 148.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s farebnými guľami Solight 1V273,... | 3.20 € | **2.80 €** | 53.9 % | **34.7 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.90 €** | 25.3 % | **21.2 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Stěrka na dlažbu Classic s tele | 11.90 € | **11.50 €** | 10.2 % | **6.5 %** | 11.73 € | cena podľa najlacnejšieho iného predajcu |
| Držák projektoru Cabletech UCH0148 univerzální | 14.90 € | **14.50 €** | 18.0 % | **14.8 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.90 € | **11.50 €** | 27.8 % | **23.5 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 43.90 € | **43.50 €** | 6.3 % | **5.3 %** | 43.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| IMOU T800 4K palubná kamera | 54.90 € | **54.50 €** | 10.8 % | **10.0 %** | 54.59 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 41.90 € | **41.50 €** | 20.8 % | **19.6 %** | 41.68 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo L930-5 | 40.90 € | **40.50 €** | 12.3 % | **11.2 %** | 40.69 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka KRUGER & MATZ KM0916 10000mAh Li-pol, QC,... | 29.90 € | **29.50 €** | 7.4 % | **6.0 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní předfiltr GARNI PF 45T | 21.90 € | **21.50 €** | 34.3 % | **31.8 %** | 21.88 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.90 € | **52.50 €** | 9.7 % | **8.9 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA37BE AX 1200, WiFi ... | 32.90 € | **32.50 €** | 10.0 % | **8.6 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 24.90 € | **24.50 €** | 13.7 % | **11.8 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 19.90 € | **19.50 €** | 17.4 % | **15.0 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 18.90 € | **18.50 €** | 18.5 % | **16.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.90 € | **369.50 €** | 7.1 % | **7.0 %** | 369.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.00 € | **5.70 €** | 37.8 % | **30.9 %** | 5.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér do Indie, typ D | 5.70 € | **5.40 €** | 40.0 % | **32.6 %** | 5.47 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.25 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s farebnými guľami Solight 1V274,... | 4.00 € | **3.80 €** | 50.6 % | **43.0 %** | 3.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight časový spínač, týždeň, 1 režim | 4.00 € | **3.80 €** | 23.7 % | **17.5 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 45.00 € | **44.90 €** | 5.5 % | **5.2 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mixér G21 VitalStick 800 W, Black | 45.00 € | **44.90 €** | 5.5 % | **5.2 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.90 €** | 15.8 % | **15.2 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| BEKO SIM8130P | 45.00 € | **44.90 €** | 12.4 % | **12.1 %** | 44.98 € | cena podľa najlacnejšieho iného predajcu |
| Salente Icequeen-Wh | 19.00 € | **18.90 €** | 6.2 % | **5.7 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Salente IceQueen černá | 19.00 € | **18.90 €** | 6.2 % | **5.7 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **51.90 €** | 6.2 % | **6.0 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.00 € | **42.90 €** | 13.5 % | **13.2 %** | 42.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 47.00 € | **46.90 €** | 19.3 % | **19.0 %** | 47.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 34.00 € | **33.90 €** | 30.6 % | **30.2 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 29.00 € | **28.90 €** | 11.4 % | **11.0 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 42.00 € | **41.90 €** | 35.2 % | **34.9 %** | 42.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 24.00 € | **23.90 €** | 53.4 % | **52.8 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **43.90 €** | 5.8 % | **5.5 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu |
| Gyroskop pre RC modely áut SkyRC Gyro GC301 | 21.00 € | **20.90 €** | 16.4 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.70 € | **5.60 €** | 153.2 % | **148.8 %** | 5.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.90 € | **7.80 €** | 48.0 % | **46.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 1.90 € | **1.80 €** | 41.7 % | **34.3 %** | 1.82 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 435C | 16.00 € | **15.90 €** | 23.5 % | **22.8 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.00 € | **15.90 €** | 35.1 % | **34.2 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.00 € | **10.90 €** | 18.1 % | **17.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.60 € | **9.50 €** | 35.3 % | **33.9 %** | 9.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 14.00 € | **13.90 €** | 21.2 % | **20.3 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 8.60 € | **8.50 €** | 21.6 % | **20.2 %** | 8.60 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 9.70 € | **9.60 €** | 9.8 % | **8.7 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50D6V0 | 16.00 € | **15.90 €** | 10.7 % | **10.0 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Salente G4 robotický vysavač | 115.00 € | **114.90 €** | 7.8 % | **7.7 %** | 114.91 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 94.00 € | **93.90 €** | 17.8 % | **17.7 %** | 93.97 € | cena podľa najlacnejšieho iného predajcu |
| SMALLRIG VB99 SE Mini V-Mount batéria | 122.00 € | **121.90 €** | 9.7 % | **9.6 %** | 122.00 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 77.00 € | **76.90 €** | 17.4 % | **17.3 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Hall Of Fame 2 Mini reverb effect pedal | 115.00 € | **114.90 €** | 15.0 % | **14.9 %** | 115.00 € | cena podľa najlacnejšieho iného predajcu |

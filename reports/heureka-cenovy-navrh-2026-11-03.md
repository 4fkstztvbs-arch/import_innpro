# Návrh na úpravu cien podľa Heureka porovnania — 2026-11-03

Vstup: `premiumstore-sk_2026-11-03_07-04.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6087**
- Návrh **zvýšiť** cenu: **211** produktov
- Návrh **znížiť** cenu: **448** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5428** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **43**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **366**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (211)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **770.00 €** | 26.6 % | **39.2 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **534.00 €** | 4.6 % | **15.1 %** | 548.88 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blesk Neewer Q6 | 467.50 € | **514.00 €** | 15.0 % | **26.5 %** | 601.47 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **743.00 €** | 3.7 % | **9.2 %** | 758.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 320.50 € | **352.50 €** | 15.0 % | **26.5 %** | 373.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Ultima Nova C40 | 313.00 € | **344.00 €** | 14.9 % | **26.3 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **330.00 €** | 32.8 % | **45.9 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **342.00 €** | 15.0 % | **25.5 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **310.50 €** | 27.3 % | **39.7 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 260.00 € | **286.00 €** | 15.0 % | **26.5 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 261.00 € | **287.00 €** | 14.9 % | **26.4 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 259.90 € | **285.50 €** | 15.0 % | **26.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **266.00 €** | 10.8 % | **21.9 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **293.50 €** | 6.2 % | **15.6 %** | 299.61 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **273.00 €** | 30.7 % | **42.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 638.50 € | **660.90 €** | 15.0 % | **19.0 %** | 674.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Guzzanti GZ 86RB | 207.00 € | **227.50 €** | 10.1 % | **21.0 %** | 239.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 883.50 € | **903.00 €** | 15.0 % | **17.5 %** | 918.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **213.90 €** | 4.1 % | **14.5 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **210.50 €** | 4.4 % | **14.8 %** | 219.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| beyerdynamic DT 252 80 Ohm | 188.90 € | **207.50 €** | 9.2 % | **19.9 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektráreň Allpowers VOLIX P300 | 185.00 € | **203.50 €** | 26.4 % | **39.0 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Rotoped MERACH MR-S28B1 | 526.90 € | **545.00 €** | 15.0 % | **19.0 %** | 556.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| NAS server TERRAMASTER F2-425 Plus s procesorom Inte... | 506.00 € | **524.00 €** | 15.0 % | **19.1 %** | 534.88 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 275.50 € | **293.00 €** | 26.4 % | **34.4 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERRAMASTER F4 SSD NAS - súborový server s procesoro... | 481.50 € | **498.50 €** | 15.0 % | **19.1 %** | 508.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **210.50 €** | 4.5 % | **13.1 %** | 215.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 182.00 € | **197.50 €** | 12.3 % | **21.9 %** | 201.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Běžecký pás REBEL ACTIVE RBA-1014 | 145.50 € | **160.00 €** | 10.5 % | **21.5 %** | 172.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| xTool SafetyPro™ AP2 Max V1.0 – Ultra hustý uhlíkový... | 149.50 € | **163.50 €** | 27.1 % | **39.0 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Euhomy IM005 15 kg výrobník ľadu (čierny) | 140.00 € | **154.00 €** | 5.0 % | **15.5 %** | 159.06 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 706.50 € | **719.50 €** | 15.0 % | **17.1 %** | 734.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| xTool SafetyPro™ AP2 Max V1.0 – Filter na odstraňova... | 192.50 € | **204.50 €** | 26.2 % | **34.1 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| xTool SafetyPro™ AP2 Max V1.0 – Filter s aktívnym uhlím | 192.50 € | **204.50 €** | 26.2 % | **34.1 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERRAMASTER F8 SSD NAS - súborový server s procesoro... | 665.50 € | **677.50 €** | 15.0 % | **17.1 %** | 691.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **127.00 €** | 4.4 % | **14.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **121.50 €** | 27.6 % | **40.1 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **185.00 €** | 35.1 % | **42.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **105.00 €** | 6.2 % | **15.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava Dreame Aqua10 Ultra Track Complete, Aqua10 U... | 88.00 € | **96.50 €** | 26.2 % | **38.3 %** | 112.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| xTool SafetyPro™ AP2 Max V1.0 – filter so strednou ú... | 147.50 € | **155.50 €** | 31.1 % | **38.2 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava na starostlivosť o srsť domácich zvierat Pet... | 81.00 € | **89.00 €** | 14.9 % | **26.3 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **87.90 €** | 30.9 % | **43.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Indukčná varná doska AMZCHEF CE-FS-IRC128D35 | 108.90 € | **116.50 €** | 26.3 % | **35.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI Z90T palubná kamera | 155.00 € | **162.50 €** | 5.2 % | **10.3 %** | 166.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 403.90 € | **411.00 €** | 15.0 % | **17.0 %** | 419.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **121.90 €** | 4.4 % | **10.7 %** | 124.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 73.50 € | **80.50 €** | 12.9 % | **23.7 %** | 83.65 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Albrecht DR 57 | 134.00 € | **141.00 €** | 11.7 % | **17.6 %** | 144.35 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Router GL.iNet Spitz Plus 4G LTE | 203.50 € | **210.50 €** | 15.0 % | **19.0 %** | 215.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **114.50 €** | 32.4 % | **40.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **77.00 €** | 4.4 % | **14.0 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **93.00 €** | 4.2 % | **12.1 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Barkan 464XL | 130.50 € | **137.00 €** | 29.8 % | **36.3 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Samsung Soundbar HW-B420F | 67.00 € | **73.50 €** | 6.5 % | **16.8 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **81.90 €** | 6.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Ariete Ice Machine 651 | 99.00 € | **105.00 €** | 10.9 % | **17.6 %** | 107.62 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| xTool SafetyPro™ AP2 Max V1.0 – vysokoúčinný filter | 147.50 € | **153.50 €** | 31.1 % | **36.4 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **67.50 €** | 31.3 % | **44.2 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **68.50 €** | 18.0 % | **29.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **68.50 €** | 35.0 % | **47.9 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **97.90 €** | 34.8 % | **43.0 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Albrecht DR 864 Senior Radio | 126.50 € | **132.00 €** | 13.0 % | **17.9 %** | 134.73 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrický bežecký pás UREVO SpaceWalk 5 (čierny) | 298.50 € | **304.00 €** | 15.0 % | **17.1 %** | 310.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Samsung VG-SCFC55SGMXC | 127.90 € | **133.00 €** | 14.9 % | **19.5 %** | 135.94 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava príslušenstva pre robotický vysávač Dreame A... | 53.50 € | **58.50 €** | 26.3 % | **38.1 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrický bežecký pás MERACH MR-T14 | 287.90 € | **292.50 €** | 15.1 % | **16.9 %** | 298.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **53.50 €** | 6.1 % | **16.1 %** | 55.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zavážacia loďka Flytec V020, 12 000 mAh | 141.90 € | **146.50 €** | 13.3 % | **17.0 %** | 149.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 45.00 € | **49.50 €** | 14.7 % | **26.2 %** | 62.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Alligator 3008B | 48.50 € | **53.00 €** | 10.5 % | **20.7 %** | 66.38 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Káblové slúchadlá TRUTHEAR Zero Blue 2 (modré) | 77.50 € | **81.90 €** | 26.8 % | **34.0 %** | 83.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WESTMARK 2094 2611 Nůžky na salát, 8 ks | 44.50 € | **48.90 €** | 12.6 % | **23.7 %** | 51.59 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Oneisall súprava na strihanie domácich zvierat 4 v 1... | 41.90 € | **46.00 €** | 15.4 % | **26.7 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LED svetelný panel GODOX Litemons LP600Bi s dvojfare... | 128.90 € | **133.00 €** | 15.0 % | **18.6 %** | 136.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ariete Breakfast Blender 576/03 černý | 40.00 € | **44.00 €** | 21.3 % | **33.4 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stativ EMEET FTD603 | 42.00 € | **46.00 €** | 15.0 % | **25.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **43.90 €** | 42.5 % | **56.5 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Graef S 10005 | 113.00 € | **116.90 €** | 10.4 % | **14.2 %** | 119.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **42.50 €** | 4.9 % | **14.6 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Koloběžka Spidoo Kruzzel 25630 fialová | 49.50 € | **53.00 €** | 21.0 % | **29.6 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal CY505EE0 | 110.00 € | **113.50 €** | 10.5 % | **14.1 %** | 115.98 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Behringer BH40 High-Fidelity slúchadlá | 39.50 € | **43.00 €** | 13.6 % | **23.6 %** | 46.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Autoreflektor Hcalory D55M+ s Bluetooth | 260.50 € | **264.00 €** | 15.0 % | **16.5 %** | 269.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filter xTool SafetyPro™ AP2 so strednou účinnosťou | 37.00 € | **40.50 €** | 35.9 % | **48.8 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Russell Hobbs 24440-56 | 112.50 € | **115.90 €** | 10.8 % | **14.2 %** | 118.35 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Automatické kŕmidlo pre domáce zvieratá s tlačidlami... | 34.50 € | **37.90 €** | 15.3 % | **26.6 %** | 39.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal MQ740HF0 | 41.90 € | **45.00 €** | 8.1 % | **16.1 %** | 46.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 182.90 € | **186.00 €** | 15.1 % | **17.1 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 182.90 € | **186.00 €** | 15.1 % | **17.1 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **40.50 €** | 28.5 % | **39.0 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Oneisall 3L PF05 Inteligentný podávač krmiva pre dom... | 45.90 € | **48.90 €** | 15.1 % | **22.7 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Cecotec Ready Warm 10100 Smart Ceramic | 52.50 € | **55.50 €** | 10.3 % | **16.6 %** | 56.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal INGENIO hluboká pánev 24 cm | 30.50 € | **33.50 €** | 14.5 % | **25.8 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tepelná utierka pre modely Dreame Matrix10 Ultra, L5... | 30.50 € | **33.50 €** | 25.2 % | **37.6 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Slúchadlá TWS EDIFIER X5 Pro (modré) | 30.90 € | **33.90 €** | 15.5 % | **26.7 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Diaľkový spúšťač GODOX X3Pro TTL pre Sony | 91.50 € | **94.50 €** | 15.2 % | **19.0 %** | 96.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **34.50 €** | 6.1 % | **16.2 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **92.50 €** | 39.0 % | **43.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **32.50 €** | 31.8 % | **44.1 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **34.90 €** | 29.4 % | **39.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **50.50 €** | 10.7 % | **16.7 %** | 51.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ScanPart Sada příslušenství pro iRobot R | 29.90 € | **32.50 €** | 11.5 % | **21.1 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ROWENTA RO 3985 EA | 71.90 € | **74.50 €** | 6.0 % | **9.8 %** | 76.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Cecotec Ready Warm 10000 Top Ceramic | 45.00 € | **47.50 €** | 10.9 % | **17.0 %** | 48.59 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 25.50 € | **28.00 €** | 28.9 % | **41.6 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ufesa Bellagio červený multikapslový | 112.50 € | **115.00 €** | 5.1 % | **7.4 %** | 117.40 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Samsung VG-SCFF85WTBXC | 106.50 € | **109.00 €** | 11.8 % | **14.4 %** | 111.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 27.00 € | **29.50 €** | 9.1 % | **19.2 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Black+Decker BXSH1500E | 29.50 € | **31.90 €** | 6.5 % | **15.1 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ariete Vintage 2868/03, krémová | 40.50 € | **42.90 €** | 12.2 % | **18.8 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **29.50 €** | 40.9 % | **53.1 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Puzdro Sunnylife AQX-20 pre Mavic 4 PRO & RC 2 c | 57.90 € | **60.00 €** | 7.6 % | **11.5 %** | 61.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **54.00 €** | 5.4 % | **9.7 %** | 55.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Behringer GMX-500 | 41.00 € | **43.00 €** | 15.3 % | **20.9 %** | 44.30 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Rastar R/C auto Lamborghini Huracán | 30.00 € | **32.00 €** | 12.0 % | **19.5 %** | 33.37 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka Dreame – pre súpravu Aqua10 Ultra R... | 21.50 € | **23.50 €** | 25.2 % | **36.9 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Umax U-Smart Robot Accesories | 20.00 € | **22.00 €** | 10.9 % | **22.0 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Infračervený teplomer Uni-T UT302D+ | 76.00 € | **78.00 €** | 41.6 % | **45.3 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 20.00 € | **22.00 €** | 27.8 % | **40.6 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 23.00 € | **25.00 €** | 42.7 % | **55.2 %** | 33.31 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| 3D tlačiareň Anycubic Photon P1 | 609.50 € | **611.50 €** | 6.0 % | **6.3 %** | 624.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **23.50 €** | 38.5 % | **51.3 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blender G21 Experience White | 244.00 € | **245.90 €** | 13.6 % | **14.5 %** | 250.94 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ufesa Vitoria PV3700 | 36.00 € | **37.90 €** | 10.7 % | **16.5 %** | 38.93 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Octagon diaľkový ovládač SF4008 4K UHD - originál | 19.00 € | **20.90 €** | 19.0 % | **30.9 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal Pure POP Home & Travel DT2040E1 | 34.90 € | **36.50 €** | 10.7 % | **15.8 %** | 37.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fitness sada na pilates REBEL ACTIVE RBA-3069-PK mul... | 41.90 € | **43.50 €** | 10.6 % | **14.8 %** | 44.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Venta H13 & Anti-Formaldehyd set 2er VPE | 66.90 € | **68.50 €** | 10.7 % | **13.3 %** | 70.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Samsung VG-SCFF75BWBXC | 70.90 € | **72.50 €** | 11.8 % | **14.4 %** | 74.23 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Samsung VG-SCFF75TKBXC | 70.90 € | **72.50 €** | 11.8 % | **14.4 %** | 74.23 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prevodovka PXN - usporiadanie H 7+1 | 75.90 € | **77.50 €** | 5.5 % | **7.7 %** | 79.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI Z60 Pro 2026 – palubná kamera | 134.90 € | **136.50 €** | 9.9 % | **11.2 %** | 139.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **41.50 €** | 53.2 % | **59.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Rojeco 2L WiFi verzia Bl Automatický dávkovač krmiva | 38.00 € | **39.50 €** | 12.4 % | **16.9 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný dávkovač krmiva Petoneer NutriSpin | 48.50 € | **50.00 €** | 9.9 % | **13.3 %** | 51.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fleg Helikoptéra na dálkové ovládání | 24.00 € | **25.50 €** | 11.9 % | **18.9 %** | 26.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný termostat Avatto WT100 3A WiFi Tuya | 35.50 € | **37.00 €** | 25.9 % | **31.2 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **34.00 €** | 4.8 % | **9.6 %** | 35.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 78.50 € | **80.00 €** | 14.8 % | **17.0 %** | 81.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Dokovacia stanica Peladn S-2 Oculink | 95.00 € | **96.50 €** | 15.0 % | **16.8 %** | 98.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Generátor dymu Ancel S100 na detekciu úniku | 97.50 € | **99.00 €** | 15.2 % | **17.0 %** | 101.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 100.00 € | **101.50 €** | 14.8 % | **16.5 %** | 103.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 104.50 € | **106.00 €** | 14.9 % | **16.5 %** | 108.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| REDTIGER F7N WiFi 4K + 1080p palubná kamera | 113.50 € | **115.00 €** | 15.1 % | **16.6 %** | 117.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka Dreame – pre modely Track Aqua10 Ul... | 15.00 € | **16.50 €** | 22.3 % | **34.5 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Reproduktor Edifier ES300 Bluetooth (biely) | 174.00 € | **175.50 €** | 5.7 % | **6.6 %** | 179.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 174.00 € | **175.50 €** | 5.7 % | **6.6 %** | 179.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stativ EMEET TD303 | 18.00 € | **19.50 €** | 15.0 % | **24.5 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Akumulátor Lipo Gens Ace G-Tech 3300mAh 22,2V 60C 6S... | 68.50 € | **69.90 €** | 14.7 % | **17.1 %** | 71.38 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Clutch Pedal Moza Racing SR-P Lite RS19 for R3/R5 | 40.50 € | **41.90 €** | 10.3 % | **14.1 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **138.50 €** | 15.9 % | **16.8 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Rojeco 2L Automatic Pet Feeder Button Version (White) | 36.90 € | **38.00 €** | 15.4 % | **18.8 %** | 39.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zdroj univerzální Kruger&Matz KM1450-65 65W Power De... | 20.90 € | **22.00 €** | 8.6 % | **14.3 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| X40 Ultra / Kompletná sada príslušenstva pre X40 | 47.90 € | **49.00 €** | 15.5 % | **18.1 %** | 50.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ardes 4R09S | 44.90 € | **46.00 €** | 10.7 % | **13.4 %** | 47.44 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| G3Ferrari G2000300 CR Kuchyňská váha | 25.90 € | **27.00 €** | 5.1 % | **9.6 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ezidri Kráječ a loupač jablek | 29.90 € | **30.90 €** | 10.6 % | **14.3 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Coox forma QUICHE průměr 26 cm, červená | 26.00 € | **27.00 €** | 13.2 % | **17.6 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Coox forma SPRING průměr 26 cm, modrá | 26.00 € | **27.00 €** | 13.2 % | **17.6 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| SILVERLIT Robot Pes Dackel | 19.00 € | **20.00 €** | 12.4 % | **18.3 %** | 21.05 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Roadstar PCD-499 BT Discman CD/MP3 s BT | 46.00 € | **47.00 €** | 11.2 % | **13.6 %** | 48.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrická zubná kefka MOVA Fresh Pro (strieborná) | 26.90 € | **27.90 €** | 26.5 % | **31.2 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit Page Profi 100 | 29.00 € | **30.00 €** | 9.1 % | **12.8 %** | 31.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Guzzanti GZ 137 | 33.00 € | **34.00 €** | 10.5 % | **13.9 %** | 35.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MOES WHT-006-GB-WH Wi-Fi termostat pre elektrické kú... | 34.00 € | **35.00 €** | 11.1 % | **14.3 %** | 36.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal ZP2M04E0 | 23.00 € | **24.00 €** | 9.2 % | **13.9 %** | 25.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blitzwolf BW-S30 nabíjacia stanica 6 v 1 4xUSB-C + 2... | 40.00 € | **41.00 €** | 13.4 % | **16.3 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GODOX CBA-PA0007 Pozadie | 40.50 € | **41.50 €** | 15.3 % | **18.1 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GODOX CBA-TA0007 Pozadie | 40.50 € | **41.50 €** | 15.3 % | **18.1 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zdroj univerzální Kruger&Matz KM1450-90 90W Power De... | 23.00 € | **24.00 €** | 14.1 % | **19.0 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Neweer TL97C RGB LED farebné foto svetlo | 33.00 € | **34.00 €** | 13.9 % | **17.3 %** | 35.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 55.00 € | **56.00 €** | 15.0 % | **17.1 %** | 57.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **11.90 €** | 9.5 % | **19.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blender G21 Perfection red | 203.50 € | **204.50 €** | 13.8 % | **14.3 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H125 (CZ101AE) | 13.00 € | **14.00 €** | 22.9 % | **32.4 %** | 22.73 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ScanPart vodní filtr kompatibilní 4ks | 17.00 € | **17.90 €** | 17.8 % | **24.1 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gens ace G-Tech 5000mAh 11.1V 45C 3S1P lipo battery ... | 55.00 € | **55.90 €** | 14.9 % | **16.7 %** | 57.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tattu R-Line verzia 5.0 850 mAh 14,8 V 4S1P 150C XT3... | 18.90 € | **19.50 €** | 14.8 % | **18.5 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit sušák Comfort Tower 420 | 45.90 € | **46.50 €** | 5.6 % | **6.9 %** | 47.61 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tester batérií Uni-T UT675A | 82.90 € | **83.50 €** | 5.4 % | **6.2 %** | 85.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **18.50 €** | 34.0 % | **38.2 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| xTool SafetyPro™ AP2 Predfilter | 26.00 € | **26.50 €** | 30.6 % | **33.1 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal HB453138 | 32.00 € | **32.50 €** | 11.6 % | **13.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| San Marco SUPREMO 1 kg zrno | 22.00 € | **22.50 €** | 9.8 % | **12.3 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 13.00 € | **13.50 €** | 38.3 % | **43.7 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MOES ZS-B-EU1 ZigBee 1-kanálový vypínač osvetlenia | 17.00 € | **17.50 €** | 7.3 % | **10.5 %** | 18.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Multifunkčná baterka SUPERFIRE D30 | 19.50 € | **20.00 €** | 5.3 % | **8.0 %** | 21.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Neweer SP-02 rýchloupínací adaptér pre telefón Arca | 22.50 € | **23.00 €** | 13.7 % | **16.2 %** | 24.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Venta Organic fragrance Peppermint | 16.00 € | **16.50 €** | 8.3 % | **11.7 %** | 17.69 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ufesa Daily PV1100C | 23.00 € | **23.50 €** | 8.5 % | **10.9 %** | 24.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ufesa GlidePro PV2600 | 26.50 € | **27.00 €** | 9.5 % | **11.6 %** | 28.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 12.00 € | **12.50 €** | 29.2 % | **34.6 %** | 13.74 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| STRONG SRT 8119 | 26.00 € | **26.50 €** | 9.7 % | **11.8 %** | 27.74 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **18.00 €** | 6.4 % | **9.5 %** | 19.30 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 21.50 € | **22.00 €** | 15.4 % | **18.1 %** | 23.31 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| xTool SafetyPro™ AP2 – vysokovýkonný filter | 41.50 € | **42.00 €** | 14.4 % | **15.8 %** | 43.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Webová kamera EMEET SmartCam C960 HD | 20.50 € | **21.00 €** | 7.7 % | **10.4 %** | 22.43 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Budík Blitzwolf BW-FW10 s nabíjačkou 2xUSB-A, 4xUSB-... | 54.00 € | **54.50 €** | 14.8 % | **15.9 %** | 55.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Umax U-Smart Robot Magnetic Wall | 11.50 € | **12.00 €** | 10.3 % | **15.0 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| UTRAI JS20 – multifunkčný štartér do auta | 92.00 € | **92.50 €** | 41.0 % | **41.8 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.00 € | **13.50 €** | 50.3 % | **56.1 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **11.90 €** | 10.1 % | **14.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bravo Kery B-4660 400W bílý | 35.50 € | **35.90 €** | 10.0 % | **11.3 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP C97 (PG-545BK XL) | 16.50 € | **16.90 €** | 12.0 % | **14.7 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **42.90 €** | 38.6 % | **39.8 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **29.90 €** | 36.2 % | **37.0 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Baterka Superfire DL01 | 17.90 € | **18.00 €** | 6.9 % | **7.5 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Digitálny univerzálny multimeter True RMS Habotest H... | 26.90 € | **27.00 €** | 9.1 % | **9.5 %** | 28.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Uperfect USetup E7 15,6" 1920x1080 60Hz prenosný dot... | 141.90 € | **142.00 €** | 15.5 % | **15.6 %** | 145.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |

## Návrh znížiť cenu (448)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 345.00 € | **0.70 €** | 71819.9 % | **45.9 %** | 298.93 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **529.00 €** | 47.0 % | **15.1 %** | 529.25 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 29.8 % | **6.6 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **778.00 €** | 32.6 % | **19.5 %** | 778.21 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 646.90 € | **564.90 €** | 43.7 % | **25.5 %** | 565.00 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **292.00 €** | 48.6 % | **17.2 %** | 292.04 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **305.00 €** | 33.5 % | **8.5 %** | 305.09 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **281.50 €** | 32.7 % | **6.6 %** | 281.71 € | cena podľa najlacnejšieho iného predajcu |
| Elektráreň Allpowers S2000 Pro | 687.50 € | **622.00 €** | 26.5 % | **14.5 %** | 622.12 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **238.00 €** | 47.7 % | **17.0 %** | 238.50 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 250 250 Ohm | 268.50 € | **207.00 €** | 107.2 % | **59.8 %** | 254.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **257.50 €** | 27.7 % | **5.2 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **166.50 €** | 39.1 % | **5.1 %** | 157.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **257.50 €** | 26.4 % | **5.2 %** | 236.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **223.00 €** | 44.0 % | **16.9 %** | 223.04 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **178.50 €** | 44.4 % | **14.3 %** | 178.54 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **153.50 €** | 47.6 % | **13.4 %** | 153.83 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **254.50 €** | 25.0 % | **5.9 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **229.90 €** | 25.6 % | **5.1 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vibračný tester Uni-T UT311A | 250.10 € | **207.50 €** | 41.5 % | **17.4 %** | 207.71 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **184.50 €** | 42.8 % | **16.8 %** | 184.54 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **260.00 €** | 33.2 % | **15.3 %** | 260.38 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **260.50 €** | 32.9 % | **15.2 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **260.50 €** | 32.8 % | **15.2 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **183.00 €** | 42.3 % | **17.1 %** | 183.04 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **179.50 €** | 40.3 % | **17.0 %** | 179.83 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **131.00 €** | 43.8 % | **14.2 %** | 131.21 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **103.50 €** | 50.0 % | **13.0 %** | 103.75 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **144.00 €** | 45.0 % | **19.1 %** | 144.29 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **154.50 €** | 27.8 % | **6.5 %** | 154.68 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **124.50 €** | 43.8 % | **15.7 %** | 124.63 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 248.00 € | **217.90 €** | 19.7 % | **5.2 %** | 215.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **155.50 €** | 25.5 % | **5.2 %** | 141.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **121.00 €** | 48.4 % | **19.2 %** | 121.38 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **170.50 €** | 39.8 % | **19.2 %** | 170.88 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **329.00 €** | 31.9 % | **21.3 %** | 329.31 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 742.50 € | **714.50 €** | 15.0 % | **10.6 %** | 714.67 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **81.90 €** | 58.2 % | **18.1 %** | 81.92 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **153.00 €** | 42.8 % | **21.1 %** | 153.50 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **142.00 €** | 44.5 % | **21.3 %** | 142.25 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.64 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **221.50 €** | 35.5 % | **21.5 %** | 221.58 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **147.00 €** | 42.0 % | **21.2 %** | 147.38 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **57.50 €** | 68.9 % | **17.7 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **57.50 €** | 68.9 % | **17.7 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **88.50 €** | 45.4 % | **14.1 %** | 88.54 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **76.50 €** | 38.1 % | **5.7 %** | 72.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **114.00 €** | 46.2 % | **21.3 %** | 114.21 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **101.90 €** | 49.0 % | **21.4 %** | 102.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **189.50 €** | 33.8 % | **19.5 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G900pro 4K + 2,5K palubná kamera | 292.50 € | **270.00 €** | 29.3 % | **19.3 %** | 270.38 € | cena podľa najlacnejšieho iného predajcu |
| Stavebná sada robota xTool mBot2 Rover | 367.50 € | **345.00 €** | 27.1 % | **19.3 %** | 345.38 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **189.90 €** | 33.5 % | **19.5 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **127.50 €** | 39.9 % | **19.2 %** | 127.83 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **65.90 €** | 41.3 % | **6.9 %** | 65.94 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 248.00 € | **226.90 €** | 32.0 % | **20.8 %** | 226.96 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Fotoaparát SJCAM ZV100 (čierny) | 98.90 € | **78.50 €** | 33.1 % | **5.6 %** | 78.59 € | cena podľa najlacnejšieho iného predajcu |
| Fotoaparát SJCAM ZV100 (biely) | 98.90 € | **78.50 €** | 33.1 % | **5.6 %** | 78.59 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **121.50 €** | 35.7 % | **16.6 %** | 121.54 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **56.50 €** | 63.8 % | **21.2 %** | 56.67 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.00 €** | 35.4 % | **9.7 %** | 81.23 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **118.50 €** | 38.2 % | **19.2 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **219.50 €** | 23.4 % | **13.9 %** | 219.88 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **81.90 €** | 28.6 % | **5.4 %** | 75.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WOLFBOX G850pro 4K + 1080p 64 GB palubná kamera | 152.50 € | **134.50 €** | 19.1 % | **5.1 %** | 134.55 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **117.50 €** | 37.5 % | **19.4 %** | 117.63 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **111.50 €** | 34.0 % | **15.7 %** | 111.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 Pro AI s vyme... | 94.00 € | **76.50 €** | 42.7 % | **16.1 %** | 76.63 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **80.00 €** | 35.6 % | **11.4 %** | 80.28 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **118.50 €** | 36.1 % | **19.2 %** | 118.83 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.90 €** | 40.2 % | **14.0 %** | 72.99 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **55.50 €** | 50.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.00 €** | 44.8 % | **10.1 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **58.50 €** | 41.2 % | **10.4 %** | 58.75 € | cena podľa najlacnejšieho iného predajcu |
| Booster UltraCap CSC 12/800 12 V, 800 A | 305.00 € | **288.90 €** | 16.8 % | **10.6 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultimea Aura S5T | 210.00 € | **194.00 €** | 13.9 % | **5.2 %** | 194.37 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **119.50 €** | 35.0 % | **19.2 %** | 119.79 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **31.50 €** | 71.1 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Neewer Retro blesk | 74.82 € | **59.50 €** | 52.1 % | **20.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **74.50 €** | 42.8 % | **18.6 %** | 74.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **110.00 €** | 31.2 % | **15.4 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **102.00 €** | 36.4 % | **19.1 %** | 102.38 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 65.7 % | **17.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **75.00 €** | 36.8 % | **14.4 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Chladič procesora DarkFlash DV360S MAX (čierny) | 89.50 € | **75.50 €** | 31.3 % | **10.7 %** | 75.54 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa Hrnec 24 cm | 43.50 € | **29.50 €** | 63.4 % | **10.8 %** | 29.60 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 2026 – palubná kamera | 155.50 € | **141.50 €** | 30.9 % | **19.1 %** | 141.71 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **279.00 €** | 22.9 % | **17.1 %** | 279.46 € | cena podľa najlacnejšieho iného predajcu |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **41.00 €** | 53.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **76.50 €** | 40.2 % | **18.9 %** | 76.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **53.50 €** | 42.9 % | **13.9 %** | 53.79 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **113.50 €** | 33.7 % | **19.4 %** | 113.67 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Dual 2026 – palubná kamera | 117.00 € | **103.50 €** | 18.8 % | **5.1 %** | 93.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **122.00 €** | 34.2 % | **21.0 %** | 122.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC S100neo AC/DC | 54.00 € | **40.90 €** | 39.2 % | **5.4 %** | 39.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **237.00 €** | 34.0 % | **27.0 %** | 237.39 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **49.50 €** | 34.8 % | **6.7 %** | 49.84 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 275.90 € | **262.90 €** | 10.2 % | **5.1 %** | 262.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 Pro s... | 89.50 € | **76.50 €** | 35.9 % | **16.1 %** | 76.63 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120P | 194.00 € | **181.00 €** | 14.3 % | **6.7 %** | 181.38 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **127.50 €** | 22.1 % | **10.8 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **62.00 €** | 39.2 % | **15.3 %** | 62.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Akčná kamera SJCAM SJ4000  (čierny) | 66.50 € | **54.00 €** | 29.6 % | **5.3 %** | 54.03 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **62.50 €** | 25.9 % | **5.1 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **50.50 €** | 47.1 % | **18.8 %** | 50.58 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER DV2 | 558.90 € | **547.00 €** | 40.0 % | **37.0 %** | 547.12 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **38.00 €** | 42.3 % | **8.8 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.50 €** | 52.4 % | **14.7 %** | 35.58 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **55.50 €** | 37.7 % | **13.8 %** | 55.88 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 65.00 € | **53.50 €** | 31.1 % | **7.9 %** | 53.72 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 30.6 % | **15.7 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **83.50 €** | 19.4 % | **5.2 %** | 81.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **55.90 €** | 30.4 % | **8.6 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **38.50 €** | 42.2 % | **10.1 %** | 38.53 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **64.00 €** | 33.5 % | **14.2 %** | 64.46 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **81.50 €** | 35.2 % | **19.4 %** | 81.58 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.23 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Bright Day Freeweel Mission 1 Pro/Missi... | 81.00 € | **70.50 €** | 26.1 % | **9.8 %** | 70.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **126.90 €** | 46.5 % | **35.4 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **39.50 €** | 45.5 % | **15.6 %** | 39.69 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G840S 4K + 1080p 32 GB palubná kamera | 147.50 € | **137.50 €** | 27.8 % | **19.2 %** | 137.63 € | cena podľa najlacnejšieho iného predajcu |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 128.50 € | **118.50 €** | 15.1 % | **6.2 %** | 118.88 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 281.00 € | **271.00 €** | 65.7 % | **59.8 %** | 279.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **103.00 €** | 30.8 % | **19.5 %** | 103.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **60.00 €** | 29.7 % | **11.7 %** | 60.31 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **70.50 €** | 31.3 % | **15.8 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.00 €** | 73.6 % | **15.0 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.00 €** | 73.6 % | **15.0 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.00 € | **94.90 €** | 17.8 % | **7.5 %** | 94.96 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 199.90 € | **190.90 €** | 10.1 % | **5.2 %** | 189.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dynamický mikrofón MAONO PD200WS (čierny) | 99.00 € | **90.00 €** | 24.2 % | **12.9 %** | 90.12 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.00 €** | 14.9 % | **10.4 %** | 219.21 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 56.3 % | **21.2 %** | 31.08 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **28.50 €** | 40.3 % | **6.8 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **28.50 €** | 49.3 % | **13.7 %** | 28.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.00 €** | 37.7 % | **13.5 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **101.00 €** | 29.4 % | **19.2 %** | 101.33 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **33.90 €** | 44.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.50 €** | 38.3 % | **8.3 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 40.3 % | **8.7 %** | 29.13 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.00 €** | 61.4 % | **19.9 %** | 24.33 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **21.50 €** | 45.3 % | **5.1 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **58.90 €** | 22.9 % | **7.8 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.00 €** | 64.9 % | **15.4 %** | 19.38 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **56.50 €** | 31.3 % | **14.9 %** | 56.75 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.50 €** | 78.5 % | **14.8 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7N Pro WiFi 4K + 1080p palubná kamera | 124.00 € | **116.00 €** | 27.2 % | **19.0 %** | 116.13 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo modré | 91.00 € | **83.00 €** | 24.2 % | **13.3 %** | 83.29 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 41.2 % | **13.0 %** | 32.13 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 166.90 € | **159.00 €** | 32.5 % | **26.2 %** | 159.42 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 49.8 % | **16.0 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **21.90 €** | 42.7 % | **5.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.00 €** | 37.3 % | **17.7 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **67.00 €** | 17.3 % | **5.0 %** | 64.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.50 €** | 42.1 % | **5.8 %** | 22.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.50 €** | 29.4 % | **15.2 %** | 62.81 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 47.4 % | **39.9 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 71.3 % | **16.2 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Mobilná dokovacia stanica VITURE Pro | 175.00 € | **167.50 €** | 20.4 % | **15.2 %** | 167.88 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 198.50 € | **191.00 €** | 15.1 % | **10.8 %** | 191.42 € | cena podľa najlacnejšieho iného predajcu |
| Philips HX7119/01 Sonicare 5500 B&W 1+1 | 158.90 € | **151.50 €** | 10.2 % | **5.0 %** | 132.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.90 € | **188.50 €** | 11.0 % | **6.8 %** | 188.75 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.00 €** | 32.9 % | **14.4 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.50 €** | 61.9 % | **19.9 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 60.4 % | **16.6 %** | 19.25 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **37.50 €** | 26.3 % | **6.2 %** | 36.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 64.9 % | **13.3 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **117.00 €** | 25.9 % | **18.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90T 4G palubná kamera | 234.00 € | **227.00 €** | 22.9 % | **19.3 %** | 227.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **115.00 €** | 26.2 % | **19.0 %** | 115.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.00 €** | 29.9 % | **14.8 %** | 53.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 40.9 % | **14.9 %** | 30.58 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.00 €** | 40.2 % | **21.3 %** | 43.13 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.00 €** | 53.5 % | **16.5 %** | 21.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.50 €** | 26.6 % | **8.7 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX i17 WiFi 4K + 2,5K 64 GB palubná kamera | 140.50 € | **133.90 €** | 25.1 % | **19.3 %** | 133.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.00 €** | 34.1 % | **14.3 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 15.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Salente Combo-4In1-Ss | 126.00 € | **119.50 €** | 33.2 % | **26.3 %** | 119.76 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Fifine Tank6 (biely) | 79.00 € | **72.50 €** | 29.4 % | **18.8 %** | 72.88 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F9 WiFi 4K + 1080p palubná kamera | 93.50 € | **87.00 €** | 27.8 % | **18.9 %** | 87.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.00 €** | 33.8 % | **18.9 %** | 51.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **21.00 €** | 36.3 % | **5.4 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **21.00 €** | 36.7 % | **5.7 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G900TriPro – palubná kamera s WiFi, rozlíšen... | 281.00 € | **274.90 €** | 11.0 % | **8.5 %** | 274.96 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G900TriPro – palubná kamera s WiFi a rozlíše... | 281.00 € | **274.90 €** | 22.1 % | **19.4 %** | 274.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 57.4 % | **18.3 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **13.90 €** | 74.0 % | **21.0 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **58.50 €** | 22.4 % | **10.8 %** | 58.71 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **16.50 €** | 47.6 % | **8.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 3L automatický dávkovač krmiva v tlačidlovej ... | 40.00 € | **34.00 €** | 37.7 % | **17.0 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **28.90 €** | 39.4 % | **15.6 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 64.90 € | **59.00 €** | 16.9 % | **6.3 %** | 59.38 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **69.00 €** | 25.4 % | **15.7 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **86.50 €** | 19.5 % | **12.1 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **41.50 €** | 35.1 % | **18.9 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro (čierny) | 129.50 € | **123.90 €** | 10.0 % | **5.2 %** | 121.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.00 €** | 32.2 % | **20.8 %** | 59.38 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **17.00 €** | 51.1 % | **13.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 39.3 % | **31.9 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Mini generátor signálu FNIRSI SG-003A | 68.00 € | **62.50 €** | 15.0 % | **5.7 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa DarkFlash DS950V s displejom (čier... | 96.00 € | **90.50 €** | 13.3 % | **6.8 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.50 €** | 32.9 % | **14.7 %** | 34.63 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **34.50 €** | 25.2 % | **8.0 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet SmartCam C960 Ultra | 88.90 € | **83.50 €** | 27.2 % | **19.5 %** | 83.54 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 42.7 % | **19.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.50 €** | 30.4 % | **16.7 %** | 44.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **44.50 €** | 30.2 % | **16.5 %** | 44.79 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.00 €** | 33.8 % | **19.1 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.00 €** | 29.1 % | **15.0 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.00 €** | 33.0 % | **18.2 %** | 41.46 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 33.0 % | **5.4 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 47.1 % | **16.6 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 35.3 % | **7.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.50 €** | 27.4 % | **12.3 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 75.00 € | **70.00 €** | 15.0 % | **7.3 %** | 70.29 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Amber M100 4x6" | 112.50 € | **107.50 €** | 22.3 % | **16.9 %** | 107.86 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 55.8 % | **16.9 %** | 15.25 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.00 €** | 55.8 % | **15.0 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **95.00 €** | 18.7 % | **12.8 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 55.6 % | **11.6 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6AC V2 | 53.90 € | **49.00 €** | 15.5 % | **5.0 %** | 49.02 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **27.50 €** | 36.0 % | **15.8 %** | 27.88 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 33.0 % | **11.9 %** | 25.28 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **19.90 €** | 42.7 % | **15.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **20.00 €** | 39.1 % | **13.1 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX i07 WiFi 2,5K + 1080p palubná kamera | 128.50 € | **123.90 €** | 24.0 % | **19.6 %** | 123.96 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Discovery Gator 10x50 | 52.00 € | **47.50 €** | 23.9 % | **13.1 %** | 47.83 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná IP kamera Gosund IPC3, IP65 | 47.50 € | **43.00 €** | 29.9 % | **17.5 %** | 43.33 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Ranger M1 Pro – palubná kamera | 140.50 € | **136.00 €** | 22.8 % | **18.9 %** | 136.38 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 25.00 € | **20.50 €** | 93.9 % | **59.0 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 51.9 % | **16.1 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.50 €** | 52.4 % | **16.5 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **13.00 €** | 44.7 % | **8.0 %** | 13.22 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 54.6 % | **16.4 %** | 13.75 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.90 €** | 28.1 % | **8.0 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.50 €** | 40.5 % | **20.5 %** | 25.71 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **21.50 €** | 36.5 % | **14.5 %** | 21.62 € | cena podľa najlacnejšieho iného predajcu |
| Euti Freewell pre Iphone 15 PRO s držiakom 17 mm | 47.00 € | **42.90 €** | 26.5 % | **15.5 %** | 42.92 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Samsung S25 Ultra so 17 mm držiakom | 47.00 € | **42.90 €** | 15.9 % | **5.8 %** | 42.92 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **20.50 €** | 40.8 % | **17.4 %** | 20.54 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **20.50 €** | 35.0 % | **12.5 %** | 20.83 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 247.00 € | **242.90 €** | 30.4 % | **28.2 %** | 242.94 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 29.6 % | **6.3 %** | 18.54 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.00 €** | 27.9 % | **15.6 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 46.8 % | **11.9 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **16.90 €** | 39.6 % | **15.1 %** | 16.95 € | cena podľa najlacnejšieho iného predajcu |
| Spájkovacia stanica FNIRSI DWS-200 F | 142.00 € | **138.50 €** | 15.0 % | **12.1 %** | 138.61 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 48.50 € | **45.00 €** | 19.1 % | **10.5 %** | 45.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 58.50 € | **55.00 €** | 30.3 % | **22.5 %** | 55.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 PRO (biela) + 6 ven... | 49.50 € | **46.00 €** | 13.1 % | **5.1 %** | 46.48 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 26.50 € | **23.00 €** | 83.2 % | **59.0 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 40.1 % | **15.6 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.50 €** | 30.6 % | **19.3 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 43.9 % | **15.6 %** | 14.04 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **34.00 €** | 31.8 % | **19.8 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **29.90 €** | 30.8 % | **17.4 %** | 29.92 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX X3 WiFi 2,5K + 1080p 64 GB palubná kamera | 163.90 € | **160.50 €** | 21.9 % | **19.4 %** | 160.54 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **28.90 €** | 33.2 % | **19.2 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.05 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 32.6 % | **18.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 41.5 % | **35.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 81.00 € | **77.90 €** | 9.2 % | **5.0 %** | 68.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **16.90 €** | 24.6 % | **5.4 %** | 13.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.50 €** | 21.5 % | **5.1 %** | 18.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.50 €** | 40.4 % | **30.4 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 94.00 € | **91.00 €** | 40.0 % | **35.6 %** | 91.06 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno 72488 | 64.50 € | **61.50 €** | 17.6 % | **12.2 %** | 61.65 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 129.00 € | **126.00 €** | 14.8 % | **12.2 %** | 126.21 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9215AV | 35.50 € | **32.50 €** | 20.2 % | **10.0 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| Salente Airfit-Wh | 45.00 € | **42.00 €** | 28.5 % | **19.9 %** | 42.40 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 40.2 % | **19.3 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 37.7 % | **17.1 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 36.9 % | **13.9 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.00 €** | 41.3 % | **18.2 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **14.00 €** | 42.8 % | **18.2 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.50 €** | 29.4 % | **6.6 %** | 12.12 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 41.5 % | **16.5 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 42.9 % | **17.6 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT806 (čierne) | 25.90 € | **23.00 €** | 21.2 % | **7.6 %** | 23.41 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT806 (biele) | 25.90 € | **23.00 €** | 21.2 % | **7.6 %** | 23.41 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 11.43 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 12.10 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **12.00 €** | 47.3 % | **19.0 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **72.00 €** | 17.6 % | **13.1 %** | 72.29 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **21.90 €** | 33.5 % | **18.9 %** | 21.96 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 34.0 % | **20.9 %** | 24.64 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 55.1 % | **39.9 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **19.90 €** | 20.6 % | **6.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DDPAI Ranger M1 – palubná kamera | 65.50 € | **62.90 €** | 21.3 % | **16.5 %** | 62.92 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 2904/04 | 68.50 € | **65.90 €** | 9.7 % | **5.5 %** | 57.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 44.00 € | **41.50 €** | 12.0 % | **5.6 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DDPAI N5 Pro 4G palubná kamera | 187.00 € | **184.50 €** | 21.0 % | **19.4 %** | 184.75 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 30cm Bluetooth 16M RGBCW Gosund L... | 18.50 € | **16.00 €** | 36.9 % | **18.4 %** | 16.25 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 30.50 € | **28.00 €** | 30.6 % | **19.9 %** | 28.33 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.8 % | **7.7 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.1 % | **7.1 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 41.6 % | **19.1 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 49.72 € | **47.50 €** | 45.4 % | **38.9 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer PMP1680S mixer amplifier whit effect proce... | 395.00 € | **392.90 €** | 42.0 % | **41.2 %** | 392.95 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 18.3 % | **8.2 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **17.90 €** | 30.7 % | **17.1 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **16.90 €** | 33.3 % | **18.8 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **19.00 €** | 41.4 % | **27.9 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Wallbox Qoltec 52723, 22kW, Typ 2, 5 m kabel, 400V, ... | 309.90 € | **307.90 €** | 7.7 % | **7.0 %** | 308.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-PETG (sivý) | 15.00 € | **13.00 €** | 32.3 % | **14.6 %** | 13.14 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP400R RGB | 122.50 € | **120.50 €** | 9.3 % | **7.5 %** | 120.83 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (čierny), 1 kg | 20.00 € | **18.00 €** | 33.1 % | **19.8 %** | 18.37 € | cena podľa najlacnejšieho iného predajcu |
| Odrážedlo Kruzzel 25768 růžové | 45.50 € | **43.50 €** | 28.8 % | **23.2 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 62.0 % | **45.9 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.00 €** | 33.0 % | **19.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash K430 + 6 ventilátorov (č... | 67.90 € | **66.00 €** | 14.9 % | **11.7 %** | 66.29 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 21.50 € | **19.90 €** | 15.0 % | **6.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GODOX CBA-TB0002 Pozadie | 46.50 € | **44.90 €** | 26.1 % | **21.8 %** | 44.96 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (biela) | 21.50 € | **19.90 €** | 26.3 % | **16.9 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (čierna) | 21.50 € | **19.90 €** | 26.3 % | **16.9 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (sivá) | 21.50 € | **19.90 €** | 26.3 % | **16.9 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 285.00 € | **283.50 €** | 56.8 % | **56.0 %** | 283.53 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F4 Pro WiFi 4K + 1080p 128 GB palubná kamera | 128.50 € | **127.00 €** | 20.9 % | **19.5 %** | 127.08 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 38.00 € | **36.50 €** | 18.1 % | **13.5 %** | 36.77 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-1 mini 12V DC bílý | 96.00 € | **94.50 €** | 15.2 % | **13.4 %** | 94.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-9 mini 12V DC černý | 96.00 € | **94.50 €** | 15.2 % | **13.4 %** | 94.83 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 227.00 € | **225.50 €** | 58.2 % | **57.2 %** | 225.83 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7981 | 36.00 € | **34.90 €** | 9.5 % | **6.2 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 15.00 € | **13.90 €** | 15.2 % | **6.7 %** | 13.92 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N2 – duálna palubná kamera | 70.00 € | **68.90 €** | 21.5 % | **19.6 %** | 68.92 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V70 Dynamický mikrofón | 248.00 € | **246.90 €** | 43.3 % | **42.7 %** | 246.98 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo HDO, aktivní venkovní anténa | 44.50 € | **43.50 €** | 13.7 % | **11.1 %** | 43.65 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife MJ-175 – rukoväť na batoh | 16.00 € | **15.00 €** | 13.4 % | **6.3 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 19.00 € | **18.00 €** | 20.9 % | **14.5 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 13.50 € | **12.50 €** | 63.1 % | **51.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-EC2 8-in-1 Power Cube (4xAC / 2 x USB-A... | 20.50 € | **19.50 €** | 35.4 % | **28.8 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Kempingová lampa Superfire LT01 2v1 – 50–250 lm, pow... | 13.50 € | **12.50 €** | 49.3 % | **38.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife ZJ153 Nákupná taška | 14.00 € | **13.00 €** | 14.4 % | **6.2 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI MINI Pro 2K palubná kamera | 44.00 € | **43.00 €** | 17.7 % | **15.0 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom PN-14F4 Starry Case pre iPhone 14 Pro (ružové) | 19.00 € | **18.00 €** | 49.1 % | **41.3 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiová lampa GODOX ML40Bi | 104.90 € | **104.00 €** | 17.6 % | **16.5 %** | 104.38 € | cena podľa najlacnejšieho iného predajcu |
| Panoramatický fotografický stojan 360 Puluz DCA0871W | 15.90 € | **15.00 €** | 15.8 % | **9.3 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 4K + Tripod | 50.90 € | **50.00 €** | 9.6 % | **7.7 %** | 50.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash EMT850 (čierny) | 58.90 € | **58.00 €** | 11.6 % | **9.9 %** | 58.14 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.50 €** | 25.3 % | **17.2 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **26.50 €** | 18.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LEXIBOOK Set Tlapková patrola-vysílačky | 25.50 € | **24.90 €** | 13.2 % | **10.5 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Podpera pozadia pre fotoštúdio Puluz 70x200cm + poza... | 21.50 € | **20.90 €** | 16.0 % | **12.8 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Termotaška Trizand 25635 30L | 12.00 € | **11.50 €** | 19.4 % | **14.4 %** | 11.70 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Perfect Steam Air Board S/M | 16.00 € | **15.50 €** | 21.1 % | **17.3 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| Tester baterií UNI-T UT677C s diagnostikou | 536.50 € | **536.00 €** | 15.4 % | **15.3 %** | 536.39 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 41.00 € | **40.50 €** | 21.3 % | **19.8 %** | 40.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-3 PREMIUM 3 kg (100x150... | 26.00 € | **25.50 €** | 9.5 % | **7.4 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 27.50 € | **27.00 €** | 13.4 % | **11.4 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-5 PREMIUM 5 kg (100x150... | 30.00 € | **29.50 €** | 18.8 % | **16.8 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 27.50 € | **27.00 €** | 13.4 % | **11.4 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-5 PREMIUM 5 kg (100x150... | 30.00 € | **29.50 €** | 18.8 % | **16.8 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 919.50 € | **919.00 €** | 14.1 % | **14.1 %** | 919.39 € | cena podľa najlacnejšieho iného predajcu |
| TESLA GlideStar GQ500 | 66.50 € | **66.00 €** | 9.1 % | **8.3 %** | 66.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 270.50 € | **270.00 €** | 6.2 % | **6.0 %** | 270.39 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 65.00 € | **64.50 €** | 6.4 % | **5.5 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.00 € | **158.50 €** | 6.1 % | **5.8 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá Edifier HECATE G2 II (čierne) | 32.00 € | **31.50 €** | 9.6 % | **7.9 %** | 31.89 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 219.00 € | **218.50 €** | 15.0 % | **14.7 %** | 218.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 680.50 € | **680.00 €** | 6.5 % | **6.4 %** | 680.39 € | cena podľa najlacnejšieho iného predajcu |
| FIXED FIXRBM-1200-RA Zadní kryt FIXED Ma | 18.50 € | **18.00 €** | 32.8 % | **29.2 %** | 18.40 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife ZJ153 Nákupná taška | 13.50 € | **13.00 €** | 15.2 % | **10.9 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Boffin I 100 | 24.50 € | **24.00 €** | 8.7 % | **6.5 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny zvuku Habotest HT602B | 25.90 € | **25.50 €** | 15.4 % | **13.6 %** | 25.83 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický nabíjací adaptér Telesin s krytom pre GoP... | 17.90 € | **17.50 €** | 15.5 % | **12.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BM201SG3DBG | 280.90 € | **280.50 €** | 7.7 % | **7.6 %** | 280.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.25 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Prasátko Peppa | 23.00 € | **22.90 €** | 10.3 % | **9.8 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5388B | 109.00 € | **108.90 €** | 9.0 % | **8.9 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V860III TTL pre Fuji | 214.00 € | **213.90 €** | 10.0 % | **10.0 %** | 214.00 € | cena podľa najlacnejšieho iného predajcu |

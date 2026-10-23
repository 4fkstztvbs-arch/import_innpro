# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-23

Vstup: `premiumstore-sk_2026-10-23_06-57.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6183**
- Návrh **zvýšiť** cenu: **190** produktov
- Návrh **znížiť** cenu: **385** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5608** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **24**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **292**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (190)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **956.90 €** | 6.0 % | **43.8 %** | 957.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 472.00 € | **631.00 €** | 7.2 % | **43.3 %** | 631.19 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 28.0 % | **44.3 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **888.90 €** | 29.5 % | **43.8 %** | 889.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **328.90 €** | 6.1 % | **44.2 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 331.50 € | **416.90 €** | 16.9 % | **47.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 40.8 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **548.50 €** | 6.0 % | **19.8 %** | 548.88 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 822.00 € | **880.00 €** | 9.5 % | **17.2 %** | 880.49 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 48.6 % | **72.6 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 49.1 % | **73.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 49.1 % | **72.2 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **818.90 €** | 35.5 % | **43.2 %** | 819.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 293.15 € | **328.90 €** | 26.5 % | **42.0 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **328.50 €** | 6.1 % | **18.9 %** | 328.75 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **226.00 €** | 6.1 % | **25.2 %** | 226.04 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 835.50 € | **869.90 €** | 10.0 % | **14.6 %** | 869.95 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 27.9 % | **43.2 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **303.00 €** | 6.2 % | **19.3 %** | 303.42 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Blackview 60 Pro LTE Blue | 168.00 € | **201.00 €** | 8.8 % | **30.2 %** | 201.38 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 208.50 € | **238.90 €** | 15.1 % | **31.9 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.50 € | **83.50 €** | 15.3 % | **73.4 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 6.3 % | **32.1 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **222.00 €** | 6.1 % | **21.1 %** | 222.17 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **218.00 €** | 6.2 % | **19.0 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 586.00 € | **609.00 €** | 9.4 % | **13.7 %** | 609.21 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 464.00 € | **484.00 €** | 9.4 % | **14.1 %** | 484.18 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 43.90 € | **62.50 €** | 10.6 % | **57.5 %** | 62.78 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 132.22 € | **146.90 €** | 29.4 % | **43.8 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 33.5 % | **65.0 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 37.7 % | **69.7 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 188.00 € | **201.50 €** | 15.6 % | **23.9 %** | 201.67 € | cena podľa najlacnejšieho iného predajcu |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 71.90 € | **84.00 €** | 15.3 % | **34.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 242.50 € | **253.50 €** | 19.8 % | **25.2 %** | 253.70 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 242.50 € | **253.50 €** | 11.4 % | **16.4 %** | 253.70 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 29.90 € | **40.00 €** | 6.2 % | **42.1 %** | 40.25 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Thermo Reflect Glide&Park L/Uni | 18.50 € | **28.50 €** | 11.5 % | **71.8 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **256.90 €** | 38.4 % | **43.9 %** | 257.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **146.90 €** | 49.6 % | **60.0 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 6.9 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **124.00 €** | 6.2 % | **14.6 %** | 124.42 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 48.0 % | **81.4 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 56.7 % | **92.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.00 €** | 6.3 % | **16.8 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 124.50 € | **133.00 €** | 16.5 % | **24.4 %** | 133.50 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 196.90 € | **204.90 €** | 13.8 % | **18.4 %** | 205.00 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot Ranger | 187.00 € | **195.00 €** | 14.9 % | **19.8 %** | 195.17 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **78.50 €** | 6.7 % | **18.8 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **136.90 €** | 35.4 % | **43.5 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 35.1 % | **45.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 30.4 % | **44.9 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 151.90 € | **158.50 €** | 5.1 % | **9.7 %** | 158.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **39.00 €** | 7.2 % | **28.6 %** | 39.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 45.5 % | **79.4 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **45.00 €** | 7.0 % | **23.7 %** | 45.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **55.00 €** | 6.1 % | **19.3 %** | 55.08 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 208.90 € | **215.00 €** | 8.3 % | **11.5 %** | 215.04 € | cena podľa najlacnejšieho iného predajcu |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 103.50 € | **108.50 €** | 8.0 % | **13.2 %** | 108.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 29.00 € | **34.00 €** | 20.8 % | **41.6 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **126.50 €** | 26.2 % | **30.9 %** | 126.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 41.6 % | **48.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **141.50 €** | 28.8 % | **32.6 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 254.00 € | **258.00 €** | 19.6 % | **21.5 %** | 258.20 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Pro – palubná kamera | 153.00 € | **156.90 €** | 37.6 % | **41.2 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.50 €** | 6.5 % | **13.9 %** | 55.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **138.90 €** | 36.1 % | **39.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 31.2 % | **43.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **78.90 €** | 6.5 % | **11.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 34.1 % | **48.9 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak Sunnylife MJ033 pre (OSMO 360, Ins... | 14.86 € | **18.00 €** | 78.5 % | **116.2 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 51.50 € | **54.50 €** | 7.0 % | **13.2 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 228.00 € | **231.00 €** | 15.3 % | **16.9 %** | 231.19 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 27.3 % | **30.1 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **37.50 €** | 49.2 % | **60.5 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **24.00 €** | 14.8 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 317.00 € | **319.50 €** | 8.4 % | **9.3 %** | 319.70 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Pixy | 81.50 € | **84.00 €** | 14.8 % | **18.3 %** | 84.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Melobuds A30 (čierne) | 29.00 € | **31.50 €** | 14.7 % | **24.6 %** | 31.75 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **18.50 €** | 15.3 % | **33.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **106.90 €** | 35.1 % | **38.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 44.4 % | **49.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing SR-P Lite RS19 for R3/R5 | 40.50 € | **42.50 €** | 10.3 % | **15.8 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 831.00 € | **833.00 €** | 27.6 % | **27.9 %** | 833.42 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 689.00 € | **690.90 €** | 36.8 % | **37.2 %** | 690.95 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 40.90 € | **42.50 €** | 5.7 % | **9.8 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-M, 50 m, viacfarebná... | 20.50 € | **22.00 €** | 43.2 % | **53.7 %** | 22.12 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra S1 Max Combo | 872.00 € | **873.50 €** | 14.9 % | **15.1 %** | 873.89 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **864.50 €** | 37.3 % | **37.6 %** | 864.75 € | cena podľa najlacnejšieho iného predajcu |
| Termotransferová fólia HTVRONT Pure, 30,5 cm × 1,8 m... | 4.40 € | **5.70 €** | 15.0 % | **49.0 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 502.90 € | **504.00 €** | 7.8 % | **8.1 %** | 504.42 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 502.90 € | **504.00 €** | 22.5 % | **22.7 %** | 504.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 6.80 € | **7.90 €** | 17.6 % | **36.7 %** | 7.98 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 37.5 % | **45.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **41.00 €** | 30.6 % | **34.0 %** | 41.13 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Black | 28.00 € | **29.00 €** | 6.1 % | **9.9 %** | 29.02 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.50 € | **336.50 €** | 22.9 % | **23.3 %** | 336.52 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný veniec Solight 1V239, priemer 40 cm, 15... | 12.50 € | **13.50 €** | 33.4 % | **44.0 %** | 13.59 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/250 Ohm | 381.90 € | **382.90 €** | 91.8 % | **92.3 %** | 383.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 311.90 € | **312.90 €** | 25.9 % | **26.3 %** | 313.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 320.00 € | **321.00 €** | 29.8 % | **30.2 %** | 321.10 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 363.00 € | **364.00 €** | 81.5 % | **82.0 %** | 364.12 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 308.50 € | **309.50 €** | 37.0 % | **37.4 %** | 309.65 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 216.00 € | **217.00 €** | 9.5 % | **10.0 %** | 217.18 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 346.00 € | **347.00 €** | 28.4 % | **28.7 %** | 347.36 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Pink | 47.00 € | **48.00 €** | 6.7 % | **9.0 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 41.9 % | **45.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 250.00 € | **250.90 €** | 74.2 % | **74.9 %** | 250.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0856 GaN 45W | 15.00 € | **15.90 €** | 28.1 % | **35.8 %** | 15.92 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **173.00 €** | 42.0 % | **42.6 %** | 173.08 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 38.0 % | **41.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér OTG USB-C na Lightning Puluz PU649B | 3.10 € | **3.80 €** | 15.6 % | **41.7 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **136.00 €** | 36.2 % | **36.9 %** | 136.13 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D70 | 287.90 € | **288.50 €** | 27.8 % | **28.1 %** | 288.70 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.70 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3067-PK se závažím a počí... | 15.90 € | **16.50 €** | 14.0 % | **18.3 %** | 16.72 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 195.90 € | **196.50 €** | 7.8 % | **8.1 %** | 196.52 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **38.00 €** | 31.8 % | **33.9 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 41.50 € | **42.00 €** | 63.5 % | **65.4 %** | 42.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight stredný dvojramenný konzolový držiak pre plo... | 28.50 € | **29.00 €** | 26.1 % | **28.3 %** | 29.03 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 120.00 € | **120.50 €** | 13.1 % | **13.6 %** | 120.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.50 €** | 16.9 % | **18.6 %** | 33.57 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 175.00 € | **175.50 €** | 26.6 % | **26.9 %** | 175.57 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 71.50 € | **72.00 €** | 22.9 % | **23.7 %** | 72.08 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 160.00 € | **160.50 €** | 21.0 % | **21.4 %** | 160.58 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 208.50 € | **209.00 €** | 50.8 % | **51.2 %** | 209.09 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.50 € | **115.00 €** | 17.2 % | **17.7 %** | 115.10 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone X1 megaphone and distorting voc... | 120.50 € | **121.00 €** | 33.3 % | **33.8 %** | 121.10 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 93.00 € | **93.50 €** | 16.9 % | **17.5 %** | 93.61 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21L3C-L 2.0 Mpix venkovní dome IP kamera s ... | 91.00 € | **91.50 €** | 16.8 % | **17.4 %** | 91.63 € | cena podľa najlacnejšieho iného predajcu |
| Televes DAT HD BOSS 700 TFORCE LTE700 | 91.50 € | **92.00 €** | 31.8 % | **32.5 %** | 92.13 € | cena podľa najlacnejšieho iného predajcu |
| Behringer P16 HQ 16-kanálový osobný monitorovací mix... | 187.50 € | **188.00 €** | 26.1 % | **26.4 %** | 188.14 € | cena podľa najlacnejšieho iného predajcu |
| Behringer PODCASTUDIO 2 USB | 99.50 € | **100.00 €** | 21.9 % | **22.5 %** | 100.14 € | cena podľa najlacnejšieho iného predajcu |
| Behringer U-PHORIA STUDIO PRO recording/podcast boundle | 133.00 € | **133.50 €** | 10.0 % | **10.4 %** | 133.67 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 59.00 € | **59.50 €** | 19.7 % | **20.7 %** | 59.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.00 € | **25.50 €** | 34.2 % | **36.9 %** | 25.73 € | cena podľa najlacnejšieho iného predajcu |
| TC ELECTRONIC PLETHORA X1 TonePrint Loader so 14 leg... | 145.50 € | **146.00 €** | 12.3 % | **12.7 %** | 146.24 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto Stereo Looper | 145.50 € | **146.00 €** | 29.7 % | **30.2 %** | 146.24 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 267.00 € | **267.50 €** | 57.5 % | **57.8 %** | 267.75 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone E1 vocal echo/delay pedál | 179.00 € | **179.50 €** | 64.7 % | **65.1 %** | 179.76 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone H1 | 179.00 € | **179.50 €** | 28.7 % | **29.0 %** | 179.76 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone R1 | 179.00 € | **179.50 €** | 37.2 % | **37.6 %** | 179.76 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 10.50 € | **11.00 €** | 15.0 % | **20.5 %** | 11.27 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9279W | 50.50 € | **51.00 €** | 10.2 % | **11.3 %** | 51.29 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto+ Looper multi-session looper pedal | 158.00 € | **158.50 €** | 13.6 % | **13.9 %** | 158.81 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 170.00 € | **170.50 €** | 17.8 % | **18.1 %** | 170.85 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 295.50 € | **296.00 €** | 43.3 % | **43.6 %** | 296.37 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 24.50 € | **25.00 €** | 11.7 % | **13.9 %** | 25.37 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 5 powered studio monitor | 258.50 € | **259.00 €** | 48.6 % | **48.9 %** | 259.37 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 247.50 € | **248.00 €** | 31.3 % | **31.6 %** | 248.38 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 182.00 € | **182.50 €** | 21.0 % | **21.3 %** | 182.88 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 42.00 € | **42.50 €** | 10.4 % | **11.7 %** | 42.89 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na cvičení Rebel Active RBA-3159-2BL na jóg... | 29.50 € | **30.00 €** | 10.8 % | **12.7 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **23.00 €** | 33.4 % | **36.1 %** | 23.21 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.50 € | **116.90 €** | 17.5 % | **17.9 %** | 116.95 € | cena podľa najlacnejšieho iného predajcu |
| TC ELECTRONIC BUCKET BRIGADE ANALOG DELAY | 74.50 € | **74.90 €** | 17.4 % | **18.0 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná mikro LED reťaz Solight 1V56-W, 5 m, studen... | 1.80 € | **2.20 €** | 18.0 % | **44.2 %** | 2.21 € | cena podľa najlacnejšieho iného predajcu |
| Laica VT3514 | 4.40 € | **4.80 €** | 11.1 % | **21.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.50 € | **24.90 €** | 14.8 % | **16.7 %** | 24.91 € | cena podľa najlacnejšieho iného predajcu |
| Behringer HPM1100U | 20.50 € | **20.90 €** | 48.3 % | **51.2 %** | 20.91 € | cena podľa najlacnejšieho iného predajcu |
| Kábel PremiumCord Predlžovací 230V 50 m na bubnu | 63.50 € | **63.90 €** | 6.8 % | **7.4 %** | 63.92 € | cena podľa najlacnejšieho iného predajcu |
| ETA Nubela 2569 90100, bílý | 28.50 € | **28.90 €** | 56.8 % | **59.0 %** | 28.94 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110CMP 2x GLAN, 8x LAN s P... | 37.50 € | **37.90 €** | 7.7 % | **8.8 %** | 37.95 € | cena podľa najlacnejšieho iného predajcu |
| Vianočný LED svietnik s hviezdami Solight 1V265, 30 ... | 16.50 € | **16.90 €** | 41.1 % | **44.5 %** | 16.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.50 € | **22.90 €** | 11.5 % | **13.5 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **44.90 €** | 34.1 % | **35.0 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu PLA Classic (čierny), 1,75 mm, 1 kg | 10.76 € | **11.00 €** | 32.9 % | **35.9 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 333.90 € | **334.00 €** | 22.3 % | **22.3 %** | 334.19 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 36.90 € | **37.00 €** | 6.6 % | **6.9 %** | 37.05 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **57.50 €** | 33.8 % | **34.1 %** | 57.58 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Tritanová láhev na pití 1 l černá | 30.90 € | **31.00 €** | 58.3 % | **58.8 %** | 31.09 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-65 65W Power De... | 20.90 € | **21.00 €** | 8.2 % | **8.7 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bambusový lampáš s LED žiarovkou, teplá biel... | 5.30 € | **5.40 €** | 9.1 % | **11.1 %** | 5.50 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 77.90 € | **78.00 €** | 17.8 % | **18.0 %** | 78.18 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRALINK ULM300MIC wireless microphone set | 124.90 € | **125.00 €** | 30.6 % | **30.7 %** | 125.29 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon CRITICAL MASS, vokálny efektový pedál | 124.90 € | **125.00 €** | 20.7 % | **20.8 %** | 125.29 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.90 € | **159.00 €** | 15.9 % | **15.9 %** | 159.40 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (385)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 948.00 € | **813.00 €** | 34.5 % | **15.4 %** | 813.19 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **849.90 €** | 31.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 894.00 € | **772.00 €** | 37.0 % | **18.3 %** | 772.01 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM M1 Plus i5-12600H 16 GB + 512 GB Mini PC | 978.90 € | **908.90 €** | 55.5 % | **44.4 %** | 909.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **539.90 €** | 31.8 % | **18.7 %** | 540.00 € | cena podľa najlacnejšieho iného predajcu |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **241.50 €** | 42.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 345.00 € | **289.90 €** | 33.8 % | **12.5 %** | 289.99 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **322.00 €** | 36.1 % | **16.8 %** | 322.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **259.50 €** | 35.4 % | **12.4 %** | 259.79 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **175.00 €** | 47.6 % | **14.5 %** | 175.08 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 543.00 € | **492.90 €** | 40.6 % | **27.6 %** | 492.99 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **260.50 €** | 28.9 % | **8.5 %** | 260.55 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **228.90 €** | 28.0 % | **6.7 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **307.50 €** | 37.5 % | **20.6 %** | 307.73 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **158.50 €** | 35.0 % | **7.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **259.50 €** | 27.9 % | **10.5 %** | 259.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **636.90 €** | 49.7 % | **41.2 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 290 MK II 200/250 Ohm | 389.00 € | **355.50 €** | 15.0 % | **5.1 %** | 355.74 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256A | 370.02 € | **338.00 €** | 24.2 % | **13.4 %** | 338.07 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **106.00 €** | 54.0 % | **18.9 %** | 106.19 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **269.00 €** | 41.1 % | **26.4 %** | 269.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **326.90 €** | 34.2 % | **22.6 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **269.90 €** | 40.8 % | **26.6 %** | 269.92 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **270.00 €** | 40.8 % | **26.6 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 123.00 € | **92.90 €** | 52.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **135.00 €** | 47.0 % | **20.3 %** | 135.39 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **156.00 €** | 30.5 % | **9.8 %** | 156.30 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **285.50 €** | 26.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **170.90 €** | 51.3 % | **29.4 %** | 170.96 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **187.00 €** | 38.7 % | **20.5 %** | 187.46 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 317.50 € | **289.50 €** | 15.7 % | **5.5 %** | 289.58 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **343.50 €** | 51.5 % | **40.6 %** | 343.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 244.98 € | **219.00 €** | 43.5 % | **28.3 %** | 219.21 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.90 €** | 41.9 % | **9.3 %** | 87.00 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **118.00 €** | 38.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **189.50 €** | 37.3 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **189.90 €** | 37.0 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 41.4 % | **10.2 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 44.4 % | **12.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Klark Teknik DN200 V2 DI Box | 187.50 € | **165.90 €** | 20.5 % | **6.6 %** | 166.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **164.00 €** | 27.9 % | **13.1 %** | 164.05 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **58.90 €** | 56.5 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED svietidlo NEEWER APC100C | 300.33 € | **280.50 €** | 50.4 % | **40.5 %** | 280.63 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **64.00 €** | 73.9 % | **34.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.50 €** | 36.4 % | **11.2 %** | 81.70 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **54.50 €** | 53.1 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 207.90 € | **190.50 €** | 28.2 % | **17.5 %** | 190.59 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.50 €** | 44.7 % | **16.9 %** | 72.59 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **90.90 €** | 24.7 % | **5.3 %** | 89.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **75.90 €** | 28.2 % | **5.5 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **30.90 €** | 76.3 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion HS611 | 91.23 € | **75.00 €** | 39.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **94.00 €** | 62.7 % | **39.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **110.00 €** | 35.4 % | **19.1 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| TCL 43T69C QLED 4K SMART Google TV | 328.50 € | **313.50 €** | 10.1 % | **5.1 %** | 310.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **65.00 €** | 41.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **39.90 €** | 58.6 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 70.9 % | **20.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **75.00 €** | 42.1 % | **18.8 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **235.50 €** | 36.0 % | **28.1 %** | 235.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **61.50 €** | 28.3 % | **5.5 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **52.00 €** | 43.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **69.50 €** | 73.9 % | **46.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| SONY PS-LX3BT Gramofon | 296.50 € | **283.50 €** | 10.0 % | **5.2 %** | 271.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **127.50 €** | 24.7 % | **13.2 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **38.50 €** | 53.4 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **57.50 €** | 40.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **262.00 €** | 47.2 % | **40.4 %** | 262.38 € | cena podľa najlacnejšieho iného predajcu |
| Freewell FujiX100 filter set with lens hood (silver) | 66.11 € | **53.50 €** | 42.2 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **123.00 €** | 39.9 % | **27.2 %** | 123.26 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 134.28 € | **122.50 €** | 36.1 % | **24.1 %** | 122.57 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **138.90 €** | 51.2 % | **39.4 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **40.50 €** | 49.5 % | **15.8 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 388.00 € | **376.50 €** | 8.7 % | **5.5 %** | 376.70 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **45.90 €** | 44.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 32.8 % | **17.6 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Amica GWAS610DL | 251.90 € | **240.50 €** | 10.0 % | **5.0 %** | 237.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **101.50 €** | 48.7 % | **33.9 %** | 101.79 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 54.8 % | **44.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 59.1 % | **48.1 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 53.3 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **189.50 €** | 42.5 % | **35.1 %** | 189.88 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **210.00 €** | 41.7 % | **35.0 %** | 210.42 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.50 €** | 33.7 % | **21.6 %** | 102.64 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 123.5 % | **44.1 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **116.90 €** | 35.6 % | **24.8 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **77.00 €** | 45.2 % | **28.3 %** | 77.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný pohybový senzor MEROSS MS605MAT-EU | 39.98 € | **30.00 €** | 40.6 % | **5.5 %** | 30.30 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **66.50 €** | 68.8 % | **47.0 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **228.00 €** | 36.3 % | **30.7 %** | 228.17 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **32.90 €** | 48.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| CANON i-SENSYS MF3010 | 206.90 € | **197.50 €** | 10.0 % | **5.0 %** | 158.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **65.50 €** | 21.0 % | **5.9 %** | 65.59 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.00 €** | 40.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **53.50 €** | 40.6 % | **20.4 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER DCP-L2622DW | 181.90 € | **173.50 €** | 10.1 % | **5.0 %** | 165.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.00 €** | 45.9 % | **6.2 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **58.90 €** | 25.7 % | **10.3 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **82.00 €** | 42.9 % | **30.0 %** | 82.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **59.00 €** | 46.0 % | **28.3 %** | 59.17 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 655.50 € | **647.50 €** | 40.6 % | **38.9 %** | 647.60 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **92.00 €** | 23.2 % | **13.4 %** | 92.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 53.8 % | **19.2 %** | 27.27 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **67.00 €** | 36.0 % | **21.8 %** | 67.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **42.00 €** | 40.9 % | **19.1 %** | 42.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **62.00 €** | 48.1 % | **31.7 %** | 62.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 50.1 % | **42.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **39.50 €** | 58.3 % | **32.6 %** | 39.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **55.00 €** | 37.6 % | **21.0 %** | 55.46 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **75.00 €** | 21.0 % | **10.0 %** | 75.26 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.50 €** | 45.0 % | **17.9 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **30.00 €** | 52.3 % | **22.1 %** | 30.49 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **215.00 €** | 45.2 % | **40.4 %** | 215.42 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.90 € | **188.50 €** | 10.6 % | **6.4 %** | 188.75 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **22.50 €** | 51.2 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **63.00 €** | 32.3 % | **18.7 %** | 63.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **92.90 €** | 31.4 % | **22.2 %** | 92.92 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **117.00 €** | 29.1 % | **21.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER DCP-L1630W | 156.90 € | **149.90 €** | 10.1 % | **5.1 %** | 142.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Systém riadenia vlákien Creality CFS | 246.50 € | **239.50 €** | 8.1 % | **5.0 %** | 239.70 € | cena podľa najlacnejšieho iného predajcu |
| Solac New Optima Pro PV2114 | 32.00 € | **25.00 €** | 44.5 % | **12.9 %** | 25.46 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.50 €** | 51.3 % | **6.4 %** | 16.83 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **22.90 €** | 50.0 % | **15.6 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.00 €** | 21.7 % | **12.9 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **20.50 €** | 79.4 % | **35.4 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **143.00 €** | 41.1 % | **34.8 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.50 €** | 29.9 % | **11.6 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| CANON PIXMA G3430 Purple | 146.50 € | **139.90 €** | 10.2 % | **5.2 %** | 128.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **16.00 €** | 84.6 % | **31.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Reproduktor Edifier ES300 Bluetooth (biely) | 183.50 € | **177.00 €** | 11.4 % | **7.5 %** | 177.14 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 183.50 € | **177.00 €** | 11.4 % | **7.5 %** | 177.14 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **32.50 €** | 41.6 % | **18.2 %** | 32.58 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **51.00 €** | 46.0 % | **29.7 %** | 51.28 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **131.00 €** | 40.7 % | **34.2 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **129.00 €** | 35.0 % | **28.7 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **21.00 €** | 79.4 % | **38.7 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 52.7 % | **45.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **118.90 €** | 49.0 % | **41.7 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **13.90 €** | 54.0 % | **7.1 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **13.90 €** | 84.7 % | **28.4 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **58.50 €** | 25.1 % | **13.3 %** | 58.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **17.50 €** | 77.8 % | **32.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 59.3 % | **14.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener pre motocykle BMW ANCEL MT300 | 166.00 € | **160.00 €** | 27.3 % | **22.7 %** | 160.19 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **28.90 €** | 43.7 % | **19.1 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 52.6 % | **43.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **148.90 €** | 46.2 % | **40.6 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 51.2 % | **43.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **69.00 €** | 43.9 % | **32.7 %** | 69.17 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **69.00 €** | 28.7 % | **18.6 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **169.50 €** | 46.8 % | **41.9 %** | 169.88 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **86.50 €** | 21.8 % | **14.2 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.50 €** | 29.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **16.90 €** | 55.2 % | **16.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **41.50 €** | 38.7 % | **22.1 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RH 6543 WH | 121.50 € | **115.90 €** | 10.2 % | **5.1 %** | 87.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **17.00 €** | 65.2 % | **24.5 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 42.7 % | **35.2 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SGH2200LBC | 65.00 € | **59.50 €** | 25.6 % | **14.9 %** | 59.53 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **34.50 €** | 61.2 % | **39.1 %** | 34.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **34.50 €** | 28.3 % | **10.7 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **32.00 €** | 43.8 % | **23.0 %** | 32.33 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **69.50 €** | 41.8 % | **31.7 %** | 69.79 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **69.50 €** | 55.5 % | **44.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **69.50 €** | 19.2 % | **10.7 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 46.7 % | **22.7 %** | 27.27 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **47.00 €** | 35.4 % | **21.7 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **107.50 €** | 30.8 % | **24.7 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 45.3 % | **19.8 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **24.50 €** | 40.2 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **22.00 €** | 70.5 % | **38.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.00 €** | 37.2 % | **22.3 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.00 €** | 35.9 % | **21.1 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.90 €** | 52.5 % | **46.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 37.6 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 38.3 % | **9.6 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 39.7 % | **28.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **17.50 €** | 74.4 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **17.50 €** | 74.4 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.50 €** | 30.9 % | **15.4 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha D132 30044 24H Speed | 348.50 € | **343.50 €** | 24.1 % | **22.4 %** | 343.54 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **75.00 €** | 33.5 % | **25.2 %** | 75.08 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.50 €** | 22.6 % | **6.5 %** | 31.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 55.90 € | **51.00 €** | 15.3 % | **5.2 %** | 50.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.50 €** | 25.1 % | **6.6 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **27.50 €** | 66.0 % | **41.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 36.4 % | **14.7 %** | 25.41 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **19.90 €** | 47.6 % | **19.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **105.00 €** | 29.4 % | **23.9 %** | 105.14 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **21.50 €** | 65.3 % | **35.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **60.00 €** | 33.6 % | **24.1 %** | 60.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 41.1 % | **11.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 40.6 % | **11.1 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 39.8 % | **33.6 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.00 €** | 41.0 % | **5.2 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 62.9 % | **21.5 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 27.90 € | **23.50 €** | 95.4 % | **64.6 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **28.00 €** | 38.9 % | **20.4 %** | 28.46 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.90 €** | 31.8 % | **11.1 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **88.00 €** | 35.9 % | **29.6 %** | 88.41 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **23.00 €** | 39.8 % | **18.4 %** | 23.42 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **20.50 €** | 47.6 % | **23.0 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **40.50 €** | 28.8 % | **17.0 %** | 40.63 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 33.1 % | **9.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.00 €** | 30.6 % | **18.1 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **58.50 €** | 50.1 % | **40.5 %** | 58.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HBL-801 kaskádový filter | 27.00 € | **23.00 €** | 103.4 % | **73.3 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu |
| Filter MOVA pre model LR10 PRIME | 33.00 € | **29.00 €** | 64.1 % | **44.2 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.00 €** | 43.3 % | **14.7 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 41.8 % | **13.5 %** | 16.43 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **36.00 €** | 35.4 % | **21.9 %** | 36.46 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **46.00 €** | 49.7 % | **38.5 %** | 46.17 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **86.00 €** | 45.8 % | **39.8 %** | 86.02 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **24.00 €** | 61.9 % | **40.4 %** | 24.46 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.50 €** | 21.7 % | **5.3 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **63.50 €** | 32.6 % | **25.4 %** | 63.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **21.00 €** | 43.4 % | **22.4 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **21.00 €** | 62.7 % | **38.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **33.90 €** | 43.6 % | **30.1 %** | 33.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 43.6 % | **18.5 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.50 €** | 26.6 % | **15.6 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **138.00 €** | 37.6 % | **34.2 %** | 138.21 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.00 €** | 41.2 % | **12.0 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.27 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **134.00 €** | 49.7 % | **46.0 %** | 134.33 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **23.90 €** | 39.4 % | **22.7 %** | 23.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **26.50 €** | 45.7 % | **29.9 %** | 26.52 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 35.9 % | **21.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 46.0 % | **39.3 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **24.50 €** | 56.9 % | **38.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 50.0 % | **43.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.50 €** | 37.9 % | **21.1 %** | 22.67 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **21.50 €** | 38.0 % | **20.6 %** | 21.58 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **21.50 €** | 50.7 % | **31.7 %** | 21.71 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Kolečka pro kancelářskou židli Ruhhy 25280 | 16.50 € | **13.50 €** | 44.7 % | **18.4 %** | 13.66 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI928 4ks sada filtrov objektívu pre A... | 13.50 € | **10.50 €** | 77.0 % | **37.7 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI925CPL nastaviteľný filter objektívu... | 13.00 € | **10.00 €** | 70.5 % | **31.1 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 19.99 € | **17.00 €** | 58.4 % | **34.7 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **16.00 €** | 56.1 % | **31.7 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **16.00 €** | 59.8 % | **34.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 40.7 % | **17.1 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper ABS (sivý) | 17.43 € | **14.50 €** | 40.2 % | **16.6 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **15.00 €** | 58.4 % | **32.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 46.2 % | **20.3 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 47.0 % | **21.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 57.40 € | **54.50 €** | 31.8 % | **25.1 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.00 €** | 41.3 % | **14.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **114.00 €** | 36.4 % | **33.1 %** | 114.04 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **30.00 €** | 35.2 % | **23.7 %** | 30.35 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **47.00 €** | 32.6 % | **25.3 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **47.00 €** | 32.3 % | **25.0 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **67.00 €** | 31.5 % | **26.4 %** | 67.21 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 60.0 % | **44.3 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.90 €** | 24.1 % | **9.5 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **64.50 €** | 40.6 % | **35.1 %** | 64.75 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10100 Smart Ceramic | 52.50 € | **49.90 €** | 20.7 % | **14.8 %** | 50.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.00 €** | 23.0 % | **9.1 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **20.00 €** | 44.2 % | **27.9 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **40.00 €** | 44.0 % | **35.4 %** | 40.05 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT 51003 Vysavač okna+tyč 43cm+mop | 45.50 € | **43.00 €** | 11.1 % | **5.0 %** | 40.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Silverlit Robot Blast white od Silverlit | 29.00 € | **26.50 €** | 15.0 % | **5.0 %** | 25.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 520.00 € | **517.50 €** | 10.0 % | **9.5 %** | 517.70 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **13.90 €** | 52.6 % | **29.3 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.50 €** | 43.7 % | **25.8 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **17.50 €** | 59.5 % | **39.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.6 % | **10.1 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.0 % | **9.6 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **15.00 €** | 60.3 % | **38.0 %** | 15.33 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.50 €** | 44.9 % | **25.3 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| SONY DVPSR760HB | 56.90 € | **54.50 €** | 10.5 % | **5.9 %** | 46.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **95.00 €** | 36.8 % | **33.5 %** | 95.38 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.50 €** | 34.1 % | **12.8 %** | 12.57 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 46.4 % | **23.2 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 59.6 % | **34.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona na smartfón od Sunnylife pre ovládač D... | 13.32 € | **11.00 €** | 65.1 % | **36.3 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **24.90 €** | 26.3 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **166.90 €** | 46.9 % | **45.0 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **47.50 €** | 48.9 % | **42.3 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **47.50 €** | 43.9 % | **37.5 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **47.50 €** | 46.9 % | **40.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **25.00 €** | 36.8 % | **25.9 %** | 25.37 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 20.3 % | **10.1 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 46.4 % | **42.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.90 € | **60.90 €** | 9.1 % | **5.6 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Torras Ostand R Fusion Case for iPhone 16 Plus (Black) | 12.50 € | **10.50 €** | 67.7 % | **40.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná domácnosť WS2GW-R WiFi | 12.00 € | **10.00 €** | 63.1 % | **36.0 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 27.7 % | **15.0 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 57.3 % | **41.7 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **17.00 €** | 55.6 % | **39.5 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.00 €** | 34.0 % | **20.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **15.50 €** | 28.0 % | **13.8 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **35.50 €** | 43.8 % | **36.5 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE RB493PW | 181.90 € | **180.00 €** | 10.0 % | **8.9 %** | 180.10 € | cena podľa najlacnejšieho iného predajcu |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.00 €** | 34.1 % | **17.3 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 56.7 % | **35.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **53.00 €** | 38.6 % | **34.0 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **22.90 €** | 36.2 % | **26.8 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny zvuku Habotest HT602B | 25.12 € | **23.50 €** | 23.8 % | **15.8 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **23.00 €** | 43.5 % | **34.1 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 37.4 % | **27.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **178.90 €** | 45.0 % | **43.8 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 27.50 € | **26.00 €** | 11.6 % | **5.5 %** | 26.36 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 43.8 % | **33.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 45.2 % | **34.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **17.50 €** | 26.7 % | **16.9 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 48.2 % | **36.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 28 červený | 44.90 € | **43.50 €** | 10.5 % | **7.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **28.50 €** | 40.5 % | **34.7 %** | 28.58 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **248.90 €** | 43.6 % | **42.9 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 49.1 % | **42.5 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **63.50 €** | 34.7 % | **32.4 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 51.5 % | **44.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| CUBE1 S300 Senior Black | 22.50 € | **21.50 €** | 11.9 % | **6.9 %** | 18.92 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 8301A | 79.50 € | **78.50 €** | 10.6 % | **9.2 %** | 78.54 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový diaľkový ovládač Heiman HM1RC-W Interlinked | 3.70 € | **2.70 €** | 154.9 % | **86.0 %** | 2.80 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 28.50 € | **27.50 €** | 10.0 % | **6.2 %** | 27.65 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 52.50 € | **51.50 €** | 7.1 % | **5.0 %** | 51.83 € | cena podľa najlacnejšieho iného predajcu |
| Avatto ZWSM16-DC32V-1 – 1-kanálový spínací modul Zig... | 13.50 € | **12.50 €** | 52.7 % | **41.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAR1509 Přenosné rádio | 18.50 € | **17.50 €** | 11.0 % | **5.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC NC3000 Pro | 90.50 € | **89.50 €** | 44.4 % | **42.8 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **59.00 €** | 31.1 % | **29.0 %** | 59.08 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **156.90 €** | 46.2 % | **45.3 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 49.0 % | **41.1 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **16.50 €** | 46.8 % | **39.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **14.00 €** | 51.0 % | **42.3 %** | 14.29 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 42.9 % | **41.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 52.3 % | **51.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.50 €** | 26.6 % | **18.3 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 41.5 % | **41.0 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Ochranná puzzle podložka ONE Fitness MP10 růžovo-šedá | 25.00 € | **24.50 €** | 7.8 % | **5.6 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zdroj univerzální Kruger&Matz KM1450-45 45W pro note... | 16.00 € | **15.50 €** | 8.4 % | **5.0 %** | 14.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.00 € | **13.50 €** | 14.5 % | **10.4 %** | 13.78 € | cena podľa najlacnejšieho iného predajcu |
| Behringer MU1000 music stand | 27.00 € | **26.50 €** | 7.1 % | **5.1 %** | 26.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 526.00 € | **525.50 €** | 7.7 % | **7.6 %** | 525.83 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 341.50 € | **341.00 €** | 24.8 % | **24.6 %** | 341.39 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 62.50 € | **62.00 €** | 91.0 % | **89.5 %** | 62.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 48.00 € | **47.50 €** | 9.6 % | **8.4 %** | 47.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 314.50 € | **314.00 €** | 17.1 % | **16.9 %** | 314.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 469.50 € | **469.00 €** | 8.5 % | **8.4 %** | 469.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 923.50 € | **923.00 €** | 17.4 % | **17.3 %** | 923.39 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 186.00 € | **185.50 €** | 10.5 % | **10.3 %** | 185.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 277.00 € | **276.50 €** | 24.1 % | **23.8 %** | 276.89 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 25.00 € | **24.50 €** | 10.6 % | **8.4 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 274.00 € | **273.50 €** | 7.9 % | **7.7 %** | 273.89 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel 50 | 74.50 € | **74.00 €** | 6.6 % | **5.9 %** | 74.39 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel Sun 50 | 74.50 € | **74.00 €** | 6.6 % | **5.9 %** | 74.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.00 € | **17.50 €** | 19.7 % | **16.3 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 637.00 € | **636.50 €** | 7.6 % | **7.5 %** | 636.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 684.00 € | **683.50 €** | 11.6 % | **11.5 %** | 683.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 160.50 € | **160.00 €** | 19.7 % | **19.4 %** | 160.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 150.50 € | **150.00 €** | 17.8 % | **17.4 %** | 150.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny decibelomer Habotest HT622B USB A/C | 24.00 € | **23.50 €** | 46.2 % | **43.1 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **225.00 €** | 45.0 % | **44.6 %** | 225.42 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSH2003E | 27.50 € | **27.00 €** | 20.1 % | **18.0 %** | 27.47 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-90 90W Power De... | 27.50 € | **27.00 €** | 35.9 % | **33.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **18.50 €** | 33.3 % | **30.0 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 39.2 % | **38.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **16.50 €** | 42.8 % | **39.3 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSH2001E | 31.90 € | **31.50 €** | 21.4 % | **19.9 %** | 31.52 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 39.90 € | **39.50 €** | 8.8 % | **7.7 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **16.00 €** | 28.7 % | **25.6 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **14.00 €** | 42.5 % | **39.0 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **33.00 €** | 33.0 % | **31.8 %** | 33.29 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **32.00 €** | 33.2 % | **32.0 %** | 32.17 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **45.90 €** | 33.0 % | **32.3 %** | 45.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.10 € | **8.90 €** | 9.6 % | **7.2 %** | 8.99 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 64.00 € | **63.90 €** | 20.2 % | **20.0 %** | 63.94 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H3c 3K Venkovní IP, 5MP, 2.8mm, WiFi | 49.00 € | **48.90 €** | 5.6 % | **5.3 %** | 48.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.10 €** | 20.4 % | **18.1 %** | 5.19 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 133.00 € | **132.90 €** | 11.2 % | **11.1 %** | 132.96 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 71.00 € | **70.90 €** | 21.4 % | **21.3 %** | 71.00 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Archer TBE553E BE9300 WiFi 7, ... | 74.00 € | **73.90 €** | 7.0 % | **6.8 %** | 74.00 € | cena podľa najlacnejšieho iného predajcu |

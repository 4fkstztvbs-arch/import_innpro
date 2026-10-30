# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-30

Vstup: `premiumstore-sk_2026-10-30_22-30.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6162**
- Návrh **zvýšiť** cenu: **390** produktov
- Návrh **znížiť** cenu: **543** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5229** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **52**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **295**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (390)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 26.6 % | **42.7 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **312.00 €** | 10.8 % | **43.0 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 37.6 % | **69.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **548.50 €** | 4.6 % | **18.2 %** | 548.88 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW606810 | 158.50 € | **216.90 €** | 10.3 % | **50.9 %** | 216.99 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **758.00 €** | 3.7 % | **11.4 %** | 758.13 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 45.2 % | **68.7 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 45.7 % | **69.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 45.7 % | **68.3 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **349.00 €** | 15.0 % | **28.0 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 27.3 % | **42.6 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 216.00 € | **248.00 €** | 15.0 % | **32.0 %** | 248.30 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 4.4 % | **29.7 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **219.00 €** | 4.4 % | **19.4 %** | 219.13 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 56.90 € | **83.50 €** | 15.0 % | **68.7 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera Ottocast Ottosafe CA560-T | 123.50 € | **148.90 €** | 14.9 % | **38.6 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **294.00 €** | 6.2 % | **15.8 %** | 294.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **218.00 €** | 4.1 % | **16.7 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool Codey Rocky – vzdelávacia verzia – vzdelávací ... | 160.90 € | **182.50 €** | 5.1 % | **19.2 %** | 182.88 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-IRC119B33 | 107.50 € | **128.90 €** | 15.2 % | **38.1 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 mid TTL pre Nikon | 157.90 € | **179.00 €** | 5.0 % | **19.1 %** | 179.24 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL mid pre Canon | 157.90 € | **179.00 €** | 5.0 % | **19.1 %** | 179.24 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Sony | 67.90 € | **88.90 €** | 9.9 % | **43.9 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 231.00 € | **251.50 €** | 11.5 % | **21.4 %** | 251.54 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **215.00 €** | 4.5 % | **15.5 %** | 215.10 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X3 TTL pre Fujifilm | 71.50 € | **89.50 €** | 14.9 % | **43.8 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria SMALLRIG VB50 mini V-Mount 3579B | 97.90 € | **114.50 €** | 15.0 % | **34.5 %** | 114.63 € | cena podľa najlacnejšieho iného predajcu |
| Keramická varná doska AMZCHEF CE-T-32CB2xyP200-AC | 53.00 € | **69.50 €** | 14.6 % | **50.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka batérií SMALLRIG NP-F970 | 183.50 € | **198.90 €** | 15.1 % | **24.7 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256A | 380.50 € | **395.50 €** | 14.9 % | **19.5 %** | 395.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 31.3 % | **62.3 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 35.0 % | **66.2 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8500mAh 14.8V 60C 4S1P Lipo Battery ... | 102.00 € | **116.00 €** | 20.6 % | **37.2 %** | 116.04 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF Domino CE-FS-IRC119B33 | 115.90 € | **128.90 €** | 15.1 % | **28.1 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Kompletná sada posuvných lišt GODOX AK-S | 51.00 € | **64.00 €** | 15.0 % | **44.3 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 8000mAh 14.8V 100C 4S2P Lipo Battery Pack | 86.50 € | **99.00 €** | 5.2 % | **20.4 %** | 99.04 € | cena podľa najlacnejšieho iného predajcu |
| Skladací kopulový difúzor Neewer CRS6 so súpravou 3 ... | 28.00 € | **40.00 €** | 15.1 % | **64.5 %** | 40.47 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4P16 | 57.50 € | **69.00 €** | 10.2 % | **32.2 %** | 69.19 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot2 V1.0 | 176.50 € | **188.00 €** | 6.4 % | **13.3 %** | 188.25 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 Master 4G palubná kamera | 271.50 € | **281.90 €** | 15.0 % | **19.4 %** | 281.92 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95501 Set nožů - 4 kusy | 16.90 € | **27.00 €** | 10.8 % | **77.0 %** | 27.43 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G900TriPro – palubná kamera s WiFi a rozlíše... | 264.90 € | **274.90 €** | 15.1 % | **19.4 %** | 274.96 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G900pro 4K + 2,5K palubná kamera | 260.00 € | **270.00 €** | 14.9 % | **19.3 %** | 270.38 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X1R TTL pre Canon | 39.00 € | **49.00 €** | 14.5 % | **43.8 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| MSI G32C4X | 151.90 € | **161.50 €** | 10.1 % | **17.1 %** | 161.78 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **146.90 €** | 46.5 % | **56.7 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 4.9 % | **29.4 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **124.00 €** | 4.4 % | **12.7 %** | 124.42 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 42.5 % | **74.6 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 53.2 % | **87.8 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku NEEWER QZ-C | 86.90 € | **95.50 €** | 15.0 % | **26.3 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.00 €** | 4.2 % | **14.5 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X1R pre Nikon | 39.00 € | **47.50 €** | 14.5 % | **39.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER VC70 Wi-Fi 4K + 2,5K 128 GB palubná kamera | 229.50 € | **238.00 €** | 15.0 % | **19.3 %** | 238.46 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 Master – dvojitá palubná kamera | 216.50 € | **224.90 €** | 15.0 % | **19.5 %** | 224.92 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér KRUGER & MATZ KM0390 (HUB) USB C na port HDM... | 25.50 € | **33.90 €** | 7.0 % | **42.3 %** | 33.99 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 379.90 € | **388.00 €** | 5.0 % | **7.3 %** | 388.50 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90T 4G palubná kamera | 218.90 € | **227.00 €** | 15.0 % | **19.3 %** | 227.46 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na headset BOBOVR M3 | 32.90 € | **40.90 €** | 15.3 % | **43.4 %** | 40.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 297.50 € | **305.50 €** | 6.8 % | **9.6 %** | 305.70 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **78.50 €** | 4.4 % | **16.3 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **136.90 €** | 34.0 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 126 | 424.00 € | **431.50 €** | 9.2 % | **11.2 %** | 431.58 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X1R TTL pre Sony | 30.50 € | **38.00 €** | 15.3 % | **43.7 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Lipo With XT6... | 54.50 € | **61.90 €** | 16.5 % | **32.3 %** | 61.92 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 34.8 % | **45.4 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Robotický čistič okien MOVA N1 (čierny) | 287.50 € | **294.50 €** | 14.9 % | **17.7 %** | 294.79 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic GAUSS TAPE ECHO | 59.50 € | **66.50 €** | 14.0 % | **27.5 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 4G 2026 – palubná kamera | 185.00 € | **192.00 €** | 14.9 % | **19.3 %** | 192.46 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 18.0 % | **31.2 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Pro 4G palubná kamera | 177.90 € | **184.50 €** | 15.1 % | **19.4 %** | 184.75 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 404.00 € | **410.50 €** | 5.7 % | **7.4 %** | 410.73 € | cena podľa najlacnejšieho iného predajcu |
| Mriežka GODOX TL-G60 TL60 | 17.00 € | **23.50 €** | 14.9 % | **58.8 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 3L automatický dávkovač krmiva v tlačidlovej ... | 33.50 € | **40.00 €** | 15.3 % | **37.7 %** | 40.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 40.9 % | **73.8 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **55.00 €** | 6.1 % | **19.3 %** | 55.08 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX X3 WiFi 2,5K + 1080p 64 GB palubná kamera | 154.50 € | **160.50 €** | 14.9 % | **19.4 %** | 160.54 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS541C10W | 335.50 € | **341.50 €** | 5.1 % | **7.0 %** | 341.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.50 € | **47.50 €** | 33.6 % | **52.9 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| InAkustik 671936 Kabel jack 3,5 mm 3 m | 16.90 € | **22.50 €** | 11.3 % | **48.1 %** | 22.79 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač MOVA K30 Lite | 215.00 € | **220.50 €** | 7.6 % | **10.3 %** | 220.51 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8000mAh 11.1V 100C 3S1P Lipo Battery... | 60.00 € | **65.50 €** | 10.7 % | **20.9 %** | 65.75 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G850pro 4K + 1080p 64 GB palubná kamera | 147.00 € | **152.50 €** | 14.8 % | **19.1 %** | 152.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 14.50 € | **19.90 €** | 5.1 % | **44.2 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart Sada příslušenství pro iRobot R | 29.50 € | **34.90 €** | 10.3 % | **30.5 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F4 Pro WiFi 4K + 1080p 128 GB palubná kamera | 122.00 € | **127.00 €** | 14.8 % | **19.5 %** | 127.08 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera WOLFBOX G930 4K + 1080p 64 GB | 127.00 € | **132.00 €** | 14.9 % | **19.5 %** | 132.08 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FN619EAW6 | 533.90 € | **538.90 €** | 5.0 % | **6.0 %** | 539.00 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G840S 4K + 1080p 32 GB palubná kamera | 132.50 € | **137.50 €** | 14.8 % | **19.2 %** | 137.63 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X3Pro TTL pre fotoaparáty Fuji | 91.50 € | **96.50 €** | 14.9 % | **21.1 %** | 96.67 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X3Pro TTL pre fotoaparáty Olympus | 91.50 € | **96.50 €** | 14.9 % | **21.1 %** | 96.67 € | cena podľa najlacnejšieho iného predajcu |
| LiPo Gens ace G-Tech 4000mAh 2S2P 7,4V 60C batéria | 21.00 € | **26.00 €** | 10.9 % | **37.3 %** | 26.20 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 2026 – palubná kamera | 136.50 € | **141.50 €** | 14.9 % | **19.1 %** | 141.71 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE F4142PW | 231.50 € | **236.50 €** | 5.0 % | **7.3 %** | 236.74 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-F970 (zelená) | 78.50 € | **83.50 €** | 15.2 % | **22.5 %** | 83.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 58.00 € | **63.00 €** | 5.4 % | **14.5 %** | 63.42 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX i17 WiFi 4K + 2,5K 64 GB palubná kamera | 129.00 € | **133.90 €** | 14.9 % | **19.3 %** | 133.92 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX i07 WiFi 2,5K + 1080p palubná kamera | 119.00 € | **123.90 €** | 14.8 % | **19.6 %** | 123.96 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG EN-EL15c (oranžová) | 38.00 € | **42.90 €** | 14.3 % | **29.0 %** | 43.00 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A7 bílá | 528.00 € | **532.50 €** | 5.0 % | **5.9 %** | 532.60 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo infra sušička NIR+ | 176.00 € | **180.50 €** | 6.0 % | **8.8 %** | 180.60 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 76.00 € | **80.50 €** | 6.1 % | **12.3 %** | 80.60 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 159.00 € | **163.50 €** | 6.1 % | **9.1 %** | 163.65 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7NP WiFi 4K + 1080p 128 GB palubná kamera | 127.50 € | **132.00 €** | 15.0 % | **19.0 %** | 132.21 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Ranger M1 Pro – palubná kamera | 131.50 € | **136.00 €** | 15.0 % | **18.9 %** | 136.38 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X3Pro TTL pre Sony | 91.50 € | **96.00 €** | 15.2 % | **20.9 %** | 96.46 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 39.0 % | **45.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **141.50 €** | 15.9 % | **19.4 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 131.90 € | **136.00 €** | 10.3 % | **13.7 %** | 136.22 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do kamery SMALLRIG DMW-BLK22 | 48.90 € | **52.90 €** | 15.0 % | **24.4 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7N Pro WiFi 4K + 1080p palubná kamera | 112.00 € | **116.00 €** | 14.9 % | **19.0 %** | 116.13 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7N WiFi 4K + 1080p palubná kamera | 113.50 € | **117.50 €** | 15.1 % | **19.1 %** | 117.83 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V480 TTL pre Nikon | 151.00 € | **155.00 €** | 12.5 % | **15.5 %** | 155.34 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Sony | 151.00 € | **155.00 €** | 12.6 % | **15.6 %** | 155.34 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice GARNI 750 | 109.50 € | **113.50 €** | 5.7 % | **9.6 %** | 113.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 23.50 € | **27.50 €** | 33.9 % | **56.7 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Excelent 0,1 dB LNB Monoblock LTE | 12.50 € | **16.50 €** | 9.9 % | **45.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iFlash iT20 pre Canon | 39.00 € | **42.90 €** | 7.8 % | **18.6 %** | 42.99 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LBD4Z | 468.00 € | **471.90 €** | 8.2 % | **9.1 %** | 472.00 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 272.90 € | **276.50 €** | 5.4 % | **6.8 %** | 276.89 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.50 €** | 5.4 % | **12.7 %** | 55.58 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Nikon | 67.90 € | **71.50 €** | 9.9 % | **15.7 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 28.5 % | **40.8 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 66.50 € | **70.00 €** | 5.6 % | **11.2 %** | 70.25 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra (12-dielna) | 138.00 € | **141.50 €** | 5.8 % | **8.5 %** | 141.83 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 324.50 € | **328.00 €** | 6.6 % | **7.7 %** | 328.40 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 44.50 € | **48.00 €** | 5.7 % | **14.0 %** | 48.46 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X3Pro TTL pre Nikon | 91.50 € | **94.90 €** | 14.9 % | **19.1 %** | 95.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **78.90 €** | 6.2 % | **11.0 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 31.8 % | **46.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C950 4K | 29.00 € | **32.00 €** | 8.4 % | **19.6 %** | 32.04 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 12.50 € | **15.50 €** | 24.1 % | **53.9 %** | 15.55 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BL438831 | 53.90 € | **56.90 €** | 10.3 % | **16.5 %** | 56.95 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 12.50 € | **15.50 €** | 9.2 % | **35.4 %** | 15.62 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-F970 (čierna) | 69.50 € | **72.50 €** | 14.9 % | **19.9 %** | 72.69 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač potravín Oneisall PFD001 Pro (... | 44.50 € | **47.50 €** | 14.9 % | **22.7 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX XproII TTL pre Canon | 87.50 € | **90.50 €** | 14.7 % | **18.7 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX XproII TTL pre Nikon | 87.50 € | **90.50 €** | 14.7 % | **18.7 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová zásuvka, IP55, matná čier... | 19.50 € | **22.50 €** | 31.7 % | **51.9 %** | 22.87 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera DDPAI Z50 Pro | 87.00 € | **90.00 €** | 15.0 % | **18.9 %** | 90.38 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F9 WiFi 4K + 1080p palubná kamera | 84.00 € | **87.00 €** | 14.8 % | **18.9 %** | 87.46 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-603B | 23.00 € | **26.00 €** | 14.2 % | **29.1 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 webová kamera | 55.00 € | **57.90 €** | 13.1 % | **19.1 %** | 58.00 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 23.6 % | **26.4 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus A8 electric pump | 34.90 € | **37.50 €** | 15.6 % | **24.2 %** | 37.82 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Ranger M1 – palubná kamera | 60.50 € | **63.00 €** | 14.8 % | **19.5 %** | 63.08 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 25.50 € | **28.00 €** | 16.9 % | **28.3 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA20FMW7NG Candy Wave 600 | 133.00 € | **135.50 €** | 7.1 % | **9.2 %** | 135.60 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná Wi-Fi brána MEROSS MSH400HK-EU | 16.50 € | **19.00 €** | 8.4 % | **24.8 %** | 19.15 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PS8400 kuchyňská váha | 20.50 € | **23.00 €** | 6.1 % | **19.0 %** | 23.20 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre Canon | 57.00 € | **59.50 €** | 14.9 % | **19.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre Sony | 57.00 € | **59.50 €** | 14.9 % | **19.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Dávkovač mýdla 2 x 400 ml černý | 40.50 € | **43.00 €** | 11.0 % | **17.8 %** | 43.30 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 27.00 € | **29.50 €** | 18.6 % | **29.6 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Odžmolkovač TechniSat PURENO TRIM 100 s LCD a USB-C ... | 14.50 € | **17.00 €** | 14.7 % | **34.4 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 16.50 € | **19.00 €** | 33.6 % | **53.9 %** | 19.45 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **35.00 €** | 4.8 % | **12.9 %** | 35.46 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre Pentax | 53.50 € | **56.00 €** | 15.0 % | **20.4 %** | 56.46 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 14.8V 30C 4S1P Lipo ... | 23.50 € | **26.00 €** | 6.5 % | **17.8 %** | 26.46 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N2 – duálna palubná kamera | 66.50 € | **68.90 €** | 15.4 % | **19.6 %** | 68.92 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN CUP-809 | 32.50 € | **34.90 €** | 33.4 % | **43.3 %** | 34.96 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2012400 | 39.50 € | **41.90 €** | 13.0 % | **19.9 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do kamery SMALLRIG E6P-C26 (oranžová) | 38.90 € | **41.00 €** | 15.0 % | **21.2 %** | 41.21 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač ALCAD AI-201 | 21.90 € | **24.00 €** | 6.5 % | **16.7 %** | 24.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 40.7 % | **45.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 101.50 € | **103.50 €** | 7.6 % | **9.7 %** | 103.54 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Vakuovačka Vacu Power 500 | 86.00 € | **88.00 €** | 6.4 % | **8.9 %** | 88.04 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-FZ100 (oranžová) | 35.00 € | **37.00 €** | 14.5 % | **21.0 %** | 37.08 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F9 Lite 4K 32 GB palubná kamera | 56.90 € | **58.90 €** | 15.1 % | **19.1 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 11.50 € | **13.50 €** | 7.6 % | **26.3 %** | 13.62 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Paw Patrol | 39.50 € | **41.50 €** | 9.0 % | **14.5 %** | 41.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 31.50 € | **33.50 €** | 29.1 % | **37.3 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 39.50 € | **41.50 €** | 5.4 % | **10.7 %** | 41.71 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-65 65W Power De... | 21.00 € | **23.00 €** | 9.0 % | **19.4 %** | 23.21 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24010-56 | 38.50 € | **40.50 €** | 5.4 % | **10.9 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny TechnoLine WT 3100 do koupelny | 22.50 € | **24.50 €** | 7.0 % | **16.6 %** | 24.76 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 105.50 € | **107.50 €** | 7.1 % | **9.2 %** | 107.80 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-FZ100 | 64.00 € | **66.00 €** | 15.0 % | **18.6 %** | 66.33 € | cena podľa najlacnejšieho iného predajcu |
| projekčná podložka GODOX AK-R21 | 76.50 € | **78.50 €** | 14.9 % | **17.9 %** | 78.84 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 359.00 € | **361.00 €** | 8.6 % | **9.2 %** | 361.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight WIFI zásuvka s meraním spotreby | 10.00 € | **12.00 €** | 13.9 % | **36.6 %** | 12.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 37.50 € | **39.50 €** | 35.3 % | **42.5 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Bollitore 2846, černá | 17.50 € | **19.50 €** | 11.9 % | **24.7 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W2 TUYA | 11.00 € | **13.00 €** | 18.9 % | **40.5 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7235 | 30.00 € | **31.90 €** | 5.8 % | **12.5 %** | 31.96 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerstation Uni FIXPOS-U-BK | 30.00 € | **31.90 €** | 7.9 % | **14.8 %** | 31.97 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre Nikon | 57.00 € | **58.90 €** | 14.9 % | **18.7 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu |
| Salente Airfit-Wh | 45.90 € | **47.50 €** | 5.6 % | **9.3 %** | 47.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 41.90 € | **43.50 €** | 41.8 % | **47.2 %** | 43.70 € | cena podľa najlacnejšieho iného predajcu |
| Braun WK5205BK | 54.90 € | **56.50 €** | 5.6 % | **8.6 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektronický boxerský terč HMS TB03 s LED, Bluetooth... | 80.00 € | **81.50 €** | 3.4 % | **5.3 %** | 67.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtové slúchadlá QCY Melobuds A30 (čierne) | 30.00 € | **31.50 €** | 14.7 % | **20.4 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam C60E 4K duálna webová kamera | 57.00 € | **58.50 €** | 16.2 % | **19.2 %** | 58.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight batériová kamera WiFi so solárnym panelom | 60.00 € | **61.50 €** | 38.1 % | **41.6 %** | 61.64 € | cena podľa najlacnejšieho iného predajcu |
| Salente Rtx-G4 | 112.50 € | **114.00 €** | 5.4 % | **6.9 %** | 114.19 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 276.00 € | **277.50 €** | 30.0 % | **30.7 %** | 277.69 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 20.50 € | **22.00 €** | 42.5 % | **52.9 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| Impregnace na stany a markýzy INPRODUCTS 400 ml | 24.50 € | **26.00 €** | 6.0 % | **12.5 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 20.00 € | **21.50 €** | 35.7 % | **45.9 %** | 21.80 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9215AV | 31.00 € | **32.50 €** | 5.3 % | **10.4 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 22.00 € | **23.50 €** | 14.4 % | **22.2 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 22.50 € | **24.00 €** | 42.7 % | **52.2 %** | 24.44 € | cena podľa najlacnejšieho iného predajcu |
| KMP C97 (PG-545BK XL) | 16.50 € | **17.90 €** | 12.4 % | **21.9 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 49B8-S | 272.90 € | **274.00 €** | 5.1 % | **5.6 %** | 274.47 € | cena podľa najlacnejšieho iného predajcu |
| BWT filtrační stanice Aqualizer | 61.90 € | **63.00 €** | 14.4 % | **16.5 %** | 63.10 € | cena podľa najlacnejšieho iného predajcu |
| Vianočný LED svietnik s hviezdami Solight 1V265, 30 ... | 16.90 € | **18.00 €** | 44.5 % | **53.9 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **17.50 €** | 26.4 % | **34.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 2.80 € | **3.90 €** | 10.0 % | **53.2 %** | 3.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight vypínač do vlhka, jednopólový, biely | 6.20 € | **7.30 €** | 35.1 % | **59.1 %** | 7.32 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine strieborné 60 cm | 15.90 € | **17.00 €** | 15.8 % | **23.8 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| Sada farebných filtrov GODOX MF-11C | 12.90 € | **14.00 €** | 16.1 % | **26.0 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/ 7.0 Ah  REBEL bezúdržbová | 13.90 € | **15.00 €** | 13.3 % | **22.3 %** | 15.49 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC272D10 | 65.90 € | **67.00 €** | 10.4 % | **12.2 %** | 67.10 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X3 TTL pre Olympus | 79.90 € | **81.00 €** | 15.1 % | **16.6 %** | 81.24 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 34.0 % | **42.0 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 7.80 € | **8.80 €** | 16.8 % | **31.8 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný veniec Solight 1V239, priemer 40 cm, 15... | 13.50 € | **14.50 €** | 44.0 % | **54.7 %** | 14.53 € | cena podľa najlacnejšieho iného predajcu |
| Súprava xTool Ultimate Robot Kit V2.0 | 449.00 € | **450.00 €** | 6.8 % | **7.0 %** | 450.03 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prsteň COLMI R02, veľkosť 12,21,3 mm (č... | 28.50 € | **29.50 €** | 15.2 % | **19.2 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI1009OR | 23.50 € | **24.50 €** | 11.6 % | **16.3 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu |
| Sati Hansi Doux et Suave 1000g zrno | 23.00 € | **24.00 €** | 12.3 % | **17.2 %** | 24.10 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V65 Smartwatch (Gray) | 30.50 € | **31.50 €** | 13.0 % | **16.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C980Pro 4K | 57.50 € | **58.50 €** | 5.7 % | **7.5 %** | 58.64 € | cena podľa najlacnejšieho iného predajcu |
| Centrala Bramka WiFi MSH450MA Meross | 18.00 € | **19.00 €** | 6.1 % | **12.0 %** | 19.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 31.50 € | **32.50 €** | 38.8 % | **43.2 %** | 32.66 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka batérií GODOX VC26 pre model V1 AD100PRO | 15.50 € | **16.50 €** | 14.5 % | **21.8 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 8972 | 53.50 € | **54.50 €** | 5.9 % | **7.8 %** | 54.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester, 0,0–3,0 ‰ BAC, presnosť 0,1 ‰ | 33.00 € | **34.00 €** | 31.5 % | **35.4 %** | 34.28 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný stromček Solight 1V238, 45 cm, 15 LED, ... | 14.50 € | **15.50 €** | 42.4 % | **52.2 %** | 15.78 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová TTL spúšť GODOX X5 pre Canon | 21.00 € | **22.00 €** | 15.0 % | **20.4 %** | 22.29 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová TTL spúšť GODOX X5 pre Nikon | 21.00 € | **22.00 €** | 15.0 % | **20.4 %** | 22.29 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 142.50 € | **143.50 €** | 11.1 % | **11.8 %** | 143.79 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 181.00 € | **182.00 €** | 11.5 % | **12.1 %** | 182.29 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.00 € | **169.00 €** | 33.3 % | **34.1 %** | 169.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.00 € | **12.00 €** | 37.8 % | **50.3 %** | 12.32 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre fotoaparáty Fuji | 57.00 € | **58.00 €** | 14.9 % | **16.9 %** | 58.34 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre fotoaparáty Olympus | 57.00 € | **58.00 €** | 14.9 % | **16.9 %** | 58.34 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prepínač WiFi WiFi Sonoff Dual R3 Lite | 10.50 € | **11.50 €** | 14.9 % | **25.8 %** | 11.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.00 € | **182.00 €** | 25.2 % | **25.9 %** | 182.39 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine čierne 60 cm 2700K | 17.50 € | **18.50 €** | 14.7 % | **21.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-M, 50 m, viacfarebná... | 20.50 € | **21.50 €** | 43.2 % | **50.2 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-M, 30 m, viacfarebná... | 14.50 € | **15.50 €** | 37.9 % | **47.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V275, 25 cm, 5 LED, 2 ... | 16.50 € | **17.50 €** | 41.1 % | **49.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **14.50 €** | 35.8 % | **45.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Yogurella 617 | 28.50 € | **29.50 €** | 14.6 % | **18.6 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 207.50 € | **208.50 €** | 16.0 % | **16.6 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RO 3985 EA | 74.50 € | **75.50 €** | 10.1 % | **11.6 %** | 75.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra S1 Max Combo | 823.50 € | **824.50 €** | 6.7 % | **6.8 %** | 824.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do kamery SMALLRIG DMW-BLK22 (oranžová) | 27.50 € | **28.50 €** | 14.8 % | **19.0 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Sonoff WiFi M5-3C-86M | 17.50 € | **18.50 €** | 15.0 % | **21.6 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED FIXRBM-1200-RA Zadní kryt FIXED Ma | 17.50 € | **18.50 €** | 26.0 % | **33.2 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| City Boss RS350 černá | 311.50 € | **312.50 €** | 5.1 % | **5.5 %** | 312.90 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT3000 44,4 Wh štartér | 62.00 € | **63.00 €** | 15.0 % | **16.8 %** | 63.49 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 38.6 % | **41.7 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice WS 9050 | 64.00 € | **64.90 €** | 5.6 % | **7.0 %** | 64.96 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 3611A | 109.00 € | **109.90 €** | 5.0 % | **5.9 %** | 109.99 € | cena podľa najlacnejšieho iného predajcu |
| Etui na batérii Sunnylife Mini 5 Pro (na 2 batérie) | 4.90 € | **5.80 €** | 14.1 % | **35.1 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Aroma difuzer Bloom bílé dřevo 200ml SIXTOL | 16.00 € | **16.90 €** | 0.8 % | **6.5 %** | 14.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera EMEET SmartCam C960 4K + Tripod | 50.00 € | **50.90 €** | 7.7 % | **9.6 %** | 50.96 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 36.2 % | **39.8 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 3.80 € | **4.50 €** | 32.0 % | **56.3 %** | 4.54 € | cena podľa najlacnejšieho iného predajcu |
| Termotransferová fólia HTVRONT Pure, 30,5 cm × 1,8 m... | 5.00 € | **5.70 €** | 14.5 % | **30.5 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 30.90 € | **31.50 €** | 23.5 % | **25.9 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Black | 27.90 € | **28.50 €** | 5.7 % | **8.0 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Meetion Klávesnice BTK001 bezdrátová US | 11.90 € | **12.50 €** | 6.8 % | **12.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **19.50 €** | 23.8 % | **27.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.90 € | **4.40 €** | 33.2 % | **50.3 %** | 4.41 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný snímač teploty a vlhkosti WiFi Gosund S... | 12.00 € | **12.50 €** | 10.9 % | **15.5 %** | 12.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.00 € | **19.50 €** | 31.0 % | **34.5 %** | 19.51 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 504.50 € | **505.00 €** | 7.8 % | **7.9 %** | 505.01 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-WW, 10 m,... | 7.20 € | **7.70 €** | 44.5 % | **54.6 %** | 7.72 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSH2001E | 31.00 € | **31.50 €** | 18.0 % | **19.9 %** | 31.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.10 € | **8.60 €** | 44.7 % | **53.7 %** | 8.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.50 € | **21.00 €** | 43.8 % | **47.3 %** | 21.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.40 € | **3.90 €** | 33.5 % | **53.2 %** | 3.94 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.00 € | **296.50 €** | 12.6 % | **12.8 %** | 296.54 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk New Atom 7x50 | 57.00 € | **57.50 €** | 14.6 % | **15.6 %** | 57.55 € | cena podľa najlacnejšieho iného predajcu |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 16.50 € | **17.00 €** | 56.7 % | **61.5 %** | 17.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **18.00 €** | 43.3 % | **47.4 %** | 18.07 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 31.00 € | **31.50 €** | 56.7 % | **59.3 %** | 31.57 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT8208 Dvbt přijímač | 26.00 € | **26.50 €** | 10.1 % | **12.2 %** | 26.58 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 89.50 € | **90.00 €** | 7.3 % | **7.9 %** | 90.09 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 41.00 € | **41.50 €** | 6.9 % | **8.2 %** | 41.59 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 20.00 € | **20.50 €** | 11.1 % | **13.9 %** | 20.59 € | cena podľa najlacnejšieho iného predajcu |
| Súprava farebných efektov GODOX V-11C | 14.50 € | **15.00 €** | 15.2 % | **19.2 %** | 15.10 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61613 GO/D143 Looping Set (8ks) | 24.50 € | **25.00 €** | 9.1 % | **11.4 %** | 25.10 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Prasátko Peppa | 22.50 € | **23.00 €** | 8.2 % | **10.6 %** | 23.10 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 54.50 € | **55.00 €** | 65.9 % | **67.4 %** | 55.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor kľúčenka, Find My kompatibilný | 15.50 € | **16.00 €** | 36.4 % | **40.8 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 17,9MM 7 (čierny) | 38.00 € | **38.50 €** | 16.6 % | **18.1 %** | 38.63 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 11.00 € | **11.50 €** | 12.6 % | **17.8 %** | 11.65 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam S600L | 71.00 € | **71.50 €** | 14.3 % | **15.1 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0859 GaN 140W USB-A + ... | 49.00 € | **49.50 €** | 29.1 % | **30.4 %** | 49.69 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 166.00 € | **166.50 €** | 8.8 % | **9.1 %** | 166.70 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTX1 Pro S, Twin | 277.50 € | **278.00 €** | 5.4 % | **5.6 %** | 278.21 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX XproII TTL pre Sony | 87.50 € | **88.00 €** | 14.7 % | **15.4 %** | 88.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **21.00 €** | 38.8 % | **42.2 %** | 21.25 € | cena podľa najlacnejšieho iného predajcu |
| Blesková hlava GODOX BD-07 | 25.50 € | **26.00 €** | 16.1 % | **18.4 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine WS 9251 | 52.50 € | **53.00 €** | 5.9 % | **6.9 %** | 53.27 € | cena podľa najlacnejšieho iného predajcu |
| Colmi P71 Smartwatch (Blue) | 18.00 € | **18.50 €** | 10.2 % | **13.3 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC210 IP, 3 Mpx, WiFi, prisv... | 20.50 € | **21.00 €** | 7.3 % | **9.9 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAQ2000WT Bezdrátová sluchátka | 37.00 € | **37.50 €** | 11.9 % | **13.4 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 18.00 € | **18.50 €** | 5.4 % | **8.3 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| Anamorfný objektív Freewell 1,33x s bajonetom 17 mm | 203.50 € | **204.00 €** | 10.2 % | **10.5 %** | 204.33 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7245 | 29.50 € | **30.00 €** | 5.9 % | **7.7 %** | 30.36 € | cena podľa najlacnejšieho iného predajcu |
| Ovládač PXN-P5 8K | 32.00 € | **32.50 €** | 7.5 % | **9.1 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 14.00 € | **14.50 €** | 5.5 % | **9.3 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-W, 30 m, 300 LED, bi... | 15.00 € | **15.50 €** | 42.6 % | **47.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Blackview 60 Pro LTE Blue | 170.50 € | **171.00 €** | 10.4 % | **10.8 %** | 171.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 29.50 € | **30.00 €** | 43.1 % | **45.5 %** | 30.48 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 37.50 € | **38.00 €** | 8.8 % | **10.3 %** | 38.48 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED snehuliak Solight 1V233, 4 LED, 2 × AA | 12.50 € | **13.00 €** | 43.5 % | **49.3 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight adaptér 3+1,48 W, QC3.0+PD, 3x USB-A, 1x USB-C | 14.50 € | **15.00 €** | 36.6 % | **41.3 %** | 15.49 € | cena podľa najlacnejšieho iného predajcu |
| Reflektor GODOX AD-M s filtrami pre AD200 | 14.50 € | **15.00 €** | 15.6 % | **19.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **105.00 €** | 32.6 % | **33.2 %** | 105.15 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.50 € | **187.90 €** | 10.4 % | **10.6 %** | 187.93 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM9802B | 128.50 € | **128.90 €** | 9.0 % | **9.3 %** | 128.97 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 77.50 € | **77.90 €** | 17.2 % | **17.8 %** | 77.99 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 3601 | 94.50 € | **94.90 €** | 8.5 % | **8.9 %** | 94.99 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z60 Pro 2026 – palubná kamera | 134.50 € | **134.90 €** | 15.1 % | **15.5 %** | 135.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.00 € | **5.40 €** | 36.4 % | **47.3 %** | 5.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.00 € | **5.40 €** | 36.4 % | **47.3 %** | 5.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka do vlhka s viečkom, biela | 6.30 € | **6.70 €** | 34.1 % | **42.6 %** | 6.74 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.60 € | **7.00 €** | 44.2 % | **53.0 %** | 7.06 € | cena podľa najlacnejšieho iného predajcu |
| Držák projektoru Cabletech UCH0148 univerzální | 14.50 € | **14.90 €** | 14.8 % | **18.0 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| LTE filtr Fagor LBF 694 (5-694 MHz, LTE 5G útlum 45 dB) | 14.50 € | **14.90 €** | 14.8 % | **18.0 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.50 € | **10.90 €** | 41.3 % | **46.7 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux ESKQ9 | 14.50 € | **14.90 €** | 13.8 % | **16.9 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.70 € | **3.10 €** | 30.7 % | **50.0 %** | 3.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.70 € | **3.10 €** | 30.7 % | **50.0 %** | 3.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB A+C 20 W fast charger | 6.40 € | **6.80 €** | 36.9 % | **45.5 %** | 6.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.20 € | **6.60 €** | 43.6 % | **52.9 %** | 6.66 € | cena podľa najlacnejšieho iného predajcu |
| Laica VT3514 | 4.40 € | **4.80 €** | 11.1 % | **21.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka KRUGER & MATZ KM0916 10000mAh Li-pol, QC,... | 29.50 € | **29.90 €** | 5.9 % | **7.4 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.50 € | **9.80 €** | 35.7 % | **40.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.30 € | **3.60 €** | 34.1 % | **46.3 %** | 3.64 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.90 € | **3.20 €** | 32.5 % | **46.2 %** | 3.24 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.40 € | **3.70 €** | 32.9 % | **44.6 %** | 3.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.80 € | **2.10 €** | 33.0 % | **55.2 %** | 2.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight SCART kábel, SCART konektor - SCART konektor... | 1.80 € | **2.10 €** | 30.7 % | **52.4 %** | 2.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.90 € | **5.20 €** | 43.8 % | **52.6 %** | 5.26 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená LED vianočná guľa Solight 1V204, 10 LED, 2 ... | 4.40 € | **4.70 €** | 43.1 % | **52.8 %** | 4.77 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s farebnými guľami Solight 1V273,... | 3.00 € | **3.20 €** | 44.3 % | **53.9 %** | 3.22 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, 20 - 200A | 6.20 € | **6.40 €** | 29.6 % | **33.8 %** | 6.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 1.90 € | **2.10 €** | 33.2 % | **47.2 %** | 2.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight vypínač Slim č. 1 jednopólový, biely | 2.80 € | **3.00 €** | 32.4 % | **41.8 %** | 3.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 7.60 € | **7.80 €** | 43.0 % | **46.8 %** | 7.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.00 € | **3.20 €** | 36.3 % | **45.3 %** | 3.25 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s farebnými guľami Solight 1V274,... | 3.80 € | **4.00 €** | 43.0 % | **50.6 %** | 4.07 € | cena podľa najlacnejšieho iného predajcu |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.30 € | **1.50 €** | 28.9 % | **48.7 %** | 1.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.60 € | **2.80 €** | 36.4 % | **46.9 %** | 2.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 3.20 € | **3.40 €** | 36.2 % | **44.7 %** | 3.47 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 2.70 € | **2.90 €** | 34.7 % | **44.6 %** | 2.97 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 Kit – webová kamera | 60.90 € | **61.00 €** | 8.1 % | **8.3 %** | 61.12 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na projektor Blitzwolf BW-VF5 | 21.90 € | **22.00 €** | 15.2 % | **15.7 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 42.90 € | **43.00 €** | 13.2 % | **13.4 %** | 43.19 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WA801N AP/AP Client, WDS, 1x ... | 20.90 € | **21.00 €** | 5.3 % | **5.8 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam Nova | 24.90 € | **25.00 €** | 16.5 % | **16.9 %** | 25.46 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Motion D1, ovladač s klávesnicí | 32.90 € | **33.00 €** | 5.9 % | **6.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 1.90 € | **2.00 €** | 35.5 % | **42.6 %** | 2.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny koaxiálny kábel, kombinované konekto... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 1.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 1.08 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V50-WW, 3 m, teplá biela... | 1.60 € | **1.70 €** | 44.5 % | **53.6 %** | 1.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka priama, IP20, biela | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.22 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka priama, IP20, čierna | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.22 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka uhlová, IP20, biela | 1.10 € | **1.20 €** | 31.5 % | **43.5 %** | 1.24 € | cena podľa najlacnejšieho iného predajcu |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 1.80 € | **1.90 €** | 42.1 % | **50.0 %** | 1.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.80 € | **9.90 €** | 36.0 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná mikro LED reťaz Solight 1V54-WW, 10 m, tepl... | 2.20 € | **2.30 €** | 24.2 % | **29.9 %** | 2.36 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná mikro LED reťaz Solight 1V56-WW, 5 m, teplá... | 2.20 € | **2.30 €** | 44.2 % | **50.8 %** | 2.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.20 € | **4.30 €** | 48.5 % | **52.0 %** | 4.37 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-V-BK | 10.90 € | **11.00 €** | 6.0 % | **7.0 %** | 11.08 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50D6V0 | 15.90 € | **16.00 €** | 10.0 % | **10.7 %** | 16.11 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05B1 | 108.90 € | **109.00 €** | 10.2 % | **10.3 %** | 109.50 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **17.50 €** | 25.0 % | **25.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (543)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Mini PC GEEKOM IT12 Max Core Ultra 5 125U 16 GB 500 ... | 968.90 € | **740.50 €** | 45.6 % | **11.3 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 836.90 € | **649.00 €** | 46.9 % | **13.9 %** | 649.36 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **529.00 €** | 47.0 % | **15.1 %** | 529.25 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 29.8 % | **6.6 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 416.90 € | **330.50 €** | 44.7 % | **14.7 %** | 330.72 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **778.00 €** | 32.6 % | **19.5 %** | 778.21 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 646.90 € | **564.90 €** | 43.7 % | **25.5 %** | 565.00 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **292.00 €** | 48.6 % | **17.2 %** | 292.04 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **305.00 €** | 33.5 % | **8.5 %** | 305.09 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **281.50 €** | 32.7 % | **6.6 %** | 281.71 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **238.00 €** | 47.7 % | **17.0 %** | 238.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 870.00 € | **810.50 €** | 20.1 % | **11.9 %** | 810.76 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1218MPE Smart, 18x GLan s PoE+, ... | 279.00 € | **221.50 €** | 32.3 % | **5.1 %** | 155.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **257.50 €** | 27.7 % | **5.2 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk Neewer Q200 | 328.90 € | **274.50 €** | 40.2 % | **17.0 %** | 274.86 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **257.50 €** | 26.4 % | **5.2 %** | 236.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **223.00 €** | 44.0 % | **16.9 %** | 223.04 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link IES208G priemyselný, 2× SFP Combo, 6×... | 239.50 € | **188.50 €** | 33.4 % | **5.0 %** | 156.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **178.50 €** | 44.4 % | **14.3 %** | 178.54 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **153.50 €** | 47.6 % | **13.4 %** | 153.83 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **254.50 €** | 25.0 % | **5.9 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet SmartCam C960 Ultra | 126.90 € | **83.50 €** | 81.6 % | **19.5 %** | 83.54 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **207.50 €** | 41.5 % | **17.4 %** | 207.71 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V850III | 196.90 € | **155.00 €** | 44.0 % | **13.4 %** | 155.34 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon P1 | 650.90 € | **609.50 €** | 15.6 % | **8.3 %** | 609.82 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **184.50 €** | 42.8 % | **16.8 %** | 184.54 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **260.00 €** | 37.8 % | **19.3 %** | 260.38 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **260.50 €** | 37.6 % | **19.4 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **260.50 €** | 37.6 % | **19.4 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **183.00 €** | 42.3 % | **17.1 %** | 183.04 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX FT-AD600PRO | 186.90 € | **150.50 €** | 63.2 % | **31.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q300 | 286.90 € | **250.90 €** | 41.5 % | **23.7 %** | 250.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **238.90 €** | 25.6 % | **9.3 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **179.50 €** | 40.3 % | **17.0 %** | 179.83 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **131.00 €** | 43.8 % | **14.2 %** | 131.21 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **103.50 €** | 50.0 % | **13.0 %** | 103.75 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 295.00 € | **262.90 €** | 38.9 % | **23.8 %** | 262.91 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 320.00 € | **288.00 €** | 27.0 % | **14.3 %** | 288.12 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX LUX Senior (zelený) | 138.90 € | **107.50 €** | 48.8 % | **15.2 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **189.00 €** | 39.1 % | **19.3 %** | 189.42 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **144.00 €** | 45.0 % | **19.1 %** | 144.29 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **124.50 €** | 43.8 % | **15.7 %** | 124.63 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM UM890 Pro Ryzen 9 8945HS 16 GB +... | 938.00 € | **907.90 €** | 15.0 % | **11.3 %** | 907.93 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **155.50 €** | 27.8 % | **7.2 %** | 155.60 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **121.00 €** | 48.4 % | **19.2 %** | 121.38 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **170.50 €** | 39.8 % | **19.2 %** | 170.88 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **329.00 €** | 31.9 % | **21.3 %** | 329.31 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **81.90 €** | 58.2 % | **18.1 %** | 81.92 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **153.00 €** | 42.8 % | **21.1 %** | 153.50 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **142.00 €** | 44.5 % | **21.3 %** | 142.25 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER SF120Q 120 cm parabolický softbox | 137.00 € | **110.50 €** | 50.5 % | **21.4 %** | 110.67 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.72 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **221.50 €** | 35.5 % | **21.5 %** | 221.58 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **147.00 €** | 42.0 % | **21.2 %** | 147.38 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **57.50 €** | 68.9 % | **17.7 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **57.50 €** | 68.9 % | **17.7 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 340.90 € | **315.90 €** | 13.4 % | **5.1 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **88.50 €** | 52.1 % | **19.4 %** | 88.54 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **114.00 €** | 46.2 % | **21.3 %** | 114.21 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **101.90 €** | 49.0 % | **21.4 %** | 102.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV A17 Pro Max (strieborný) | 143.00 € | **120.00 €** | 29.2 % | **8.4 %** | 120.48 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV A17 Pro Max (čierny) | 143.00 € | **120.00 €** | 29.2 % | **8.4 %** | 120.50 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **189.50 €** | 33.8 % | **19.5 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **163.00 €** | 25.5 % | **10.3 %** | 163.50 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **189.90 €** | 33.5 % | **19.5 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **127.50 €** | 39.9 % | **19.2 %** | 127.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 38.1 % | **7.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Parabolický dáždnik GODOX UB-165S | 99.50 € | **77.50 €** | 56.3 % | **21.7 %** | 77.65 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2404 | 128.50 € | **107.50 €** | 37.4 % | **15.0 %** | 107.73 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 161.00 € | **141.00 €** | 20.0 % | **5.1 %** | 134.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 180.00 € | **160.00 €** | 20.0 % | **6.7 %** | 160.09 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **121.50 €** | 35.7 % | **16.6 %** | 121.54 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **56.50 €** | 63.8 % | **21.2 %** | 56.67 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG105MPE Easy Smart, 5x GLAN, 4x P... | 93.00 € | **73.90 €** | 32.3 % | **5.1 %** | 73.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Veslařský trenažér HMS Premium ZW1600 | 640.90 € | **621.90 €** | 115690.4 % | **112257.7 %** | 622.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **118.50 €** | 38.2 % | **19.2 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **117.50 €** | 37.5 % | **19.4 %** | 117.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **69.50 €** | 41.3 % | **12.7 %** | 69.75 € | cena podľa najlacnejšieho iného predajcu |
| BIO tlakový filter do jazierka SUNSUN CPF-3500 11 W UV | 118.90 € | **101.50 €** | 34.5 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **80.00 €** | 35.6 % | **11.4 %** | 80.37 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.50 €** | 40.2 % | **13.3 %** | 72.79 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **118.50 €** | 36.1 % | **19.2 %** | 118.83 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **55.50 €** | 50.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.00 €** | 44.8 % | **10.1 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Booster UltraCap CSC 12/800 12 V, 800 A | 305.50 € | **288.90 €** | 17.0 % | **10.6 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria s konektorom V-Mount SMALLRIG VB99 Pro mini | 194.90 € | **178.50 €** | 15.0 % | **5.3 %** | 178.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **58.50 €** | 41.2 % | **10.4 %** | 58.75 € | cena podľa najlacnejšieho iného predajcu |
| WOLFBOX G900TriPro – palubná kamera s WiFi, rozlíšen... | 291.00 € | **274.90 €** | 14.9 % | **8.5 %** | 274.96 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **119.50 €** | 35.0 % | **19.2 %** | 119.79 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **31.50 €** | 71.1 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Switch TP-Link TL-SG105-M2 5x 2.5GLan, kov | 60.90 € | **45.50 €** | 41.9 % | **6.0 %** | 43.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Neewer Retro blesk | 74.82 € | **59.50 €** | 52.1 % | **20.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **74.50 €** | 42.8 % | **18.6 %** | 74.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **110.00 €** | 31.2 % | **15.4 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **102.00 €** | 36.4 % | **19.1 %** | 102.38 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 65.7 % | **17.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **75.00 €** | 36.8 % | **14.4 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED svietidlo GODOX FH50R | 231.00 € | **217.00 €** | 21.1 % | **13.7 %** | 217.09 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **279.00 €** | 22.9 % | **17.1 %** | 279.46 € | cena podľa najlacnejšieho iného predajcu |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **41.00 €** | 53.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **76.50 €** | 40.2 % | **18.9 %** | 76.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **53.50 €** | 42.9 % | **13.9 %** | 53.79 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **236.50 €** | 34.0 % | **26.8 %** | 236.59 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **113.50 €** | 33.7 % | **19.4 %** | 113.67 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **122.00 €** | 34.2 % | **21.0 %** | 122.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 223.50 € | **210.50 €** | 16.2 % | **9.4 %** | 210.71 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Dávkovač mýdla Gel bílý | 41.50 € | **28.50 €** | 71.3 % | **17.6 %** | 28.75 € | cena podľa najlacnejšieho iného predajcu |
| Slnečník GODOX UB-L2-60 (veľký) | 48.50 € | **35.50 €** | 64.8 % | **20.7 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **127.50 €** | 22.1 % | **10.8 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Olympus | 238.90 € | **226.00 €** | 20.5 % | **14.0 %** | 226.25 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **62.00 €** | 39.2 % | **15.3 %** | 62.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **62.50 €** | 25.9 % | **5.1 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **50.50 €** | 47.1 % | **18.8 %** | 50.58 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool W3RHS19EW2 | 268.50 € | **256.50 €** | 10.0 % | **5.1 %** | 224.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **88.00 €** | 35.4 % | **19.2 %** | 88.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **38.00 €** | 55.4 % | **18.8 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.50 €** | 52.4 % | **14.7 %** | 35.58 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **55.50 €** | 43.7 % | **18.8 %** | 55.88 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1009P 9x LAN, 4x PoE+, 67W, kov | 57.50 € | **45.90 €** | 32.4 % | **5.7 %** | 33.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| UV-C čističe SUNSUN CUV-218 | 74.00 € | **62.50 €** | 36.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 30.6 % | **15.7 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **64.00 €** | 33.5 % | **14.2 %** | 64.46 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **81.50 €** | 35.2 % | **19.4 %** | 81.58 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.30 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri 2 | 339.50 € | **328.90 €** | 17.5 % | **13.8 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, grey ASR002 | 73.00 € | **62.50 €** | 24.9 % | **6.9 %** | 62.62 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, oran. ASR001 | 73.00 € | **62.50 €** | 24.9 % | **6.9 %** | 62.62 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **39.50 €** | 45.5 % | **15.6 %** | 39.70 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka SMALLRIG X99 | 253.00 € | **242.90 €** | 14.9 % | **10.3 %** | 242.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **103.00 €** | 30.8 % | **19.5 %** | 103.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **53.00 €** | 34.8 % | **14.3 %** | 53.21 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 340A | 375.50 € | **366.00 €** | 10.1 % | **7.3 %** | 366.41 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **70.50 €** | 31.3 % | **15.8 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool W7F HP33 A | 333.90 € | **324.50 €** | 10.1 % | **7.0 %** | 324.60 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.00 €** | 73.6 % | **15.0 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.00 €** | 73.6 % | **15.0 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| Mobilný ovládač GameSir G8+ MFi (sivý) | 74.00 € | **64.90 €** | 32.5 % | **16.2 %** | 64.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.00 €** | 14.9 % | **10.4 %** | 219.21 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 56.3 % | **21.2 %** | 31.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **28.50 €** | 49.3 % | **13.7 %** | 28.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.00 €** | 37.7 % | **13.5 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **101.00 €** | 29.4 % | **19.2 %** | 101.33 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **33.90 €** | 44.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Electrolux PD82-4MB světle modrá | 179.50 € | **171.00 €** | 10.2 % | **5.0 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 41.50 € | **33.00 €** | 60.2 % | **27.4 %** | 33.47 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.50 €** | 38.3 % | **8.3 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 40.3 % | **8.7 %** | 29.13 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.00 €** | 61.4 % | **19.9 %** | 24.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **58.90 €** | 22.9 % | **7.8 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.00 €** | 64.9 % | **15.4 %** | 19.38 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **56.50 €** | 31.3 % | **14.9 %** | 56.75 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.50 €** | 78.5 % | **14.8 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Midland G9 Pro, PMR+LPD, single | 99.90 € | **91.90 €** | 14.6 % | **5.4 %** | 91.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cestovný statív Neewer LT35 z uhlíkových vlákien s o... | 264.50 € | **256.50 €** | 25.1 % | **21.3 %** | 256.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 41.2 % | **13.0 %** | 32.13 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 49.8 % | **16.0 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.00 €** | 37.3 % | **17.7 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **67.00 €** | 17.3 % | **5.0 %** | 64.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **230.00 €** | 23.4 % | **19.3 %** | 230.33 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.50 €** | 42.1 % | **5.8 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.50 €** | 29.4 % | **15.2 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 47.4 % | **39.9 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 71.3 % | **16.2 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.00 €** | 32.9 % | **14.4 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.50 €** | 61.9 % | **19.9 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 60.4 % | **16.6 %** | 19.25 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **60.00 €** | 30.4 % | **16.6 %** | 60.08 € | cena podľa najlacnejšieho iného predajcu |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 64.9 % | **13.3 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **92.90 €** | 28.6 % | **19.6 %** | 92.92 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **117.00 €** | 25.9 % | **18.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 Master – palubná kamera | 288.90 € | **281.90 €** | 15.0 % | **12.2 %** | 281.92 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 251.00 € | **244.00 €** | 16.9 % | **13.6 %** | 244.45 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **115.00 €** | 26.2 % | **19.0 %** | 115.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.00 €** | 29.9 % | **14.8 %** | 53.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 40.9 % | **14.9 %** | 30.58 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **22.90 €** | 45.3 % | **12.0 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.00 €** | 40.2 % | **21.3 %** | 43.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **63.00 €** | 29.7 % | **17.3 %** | 63.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.00 €** | 53.5 % | **16.5 %** | 21.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.50 €** | 26.6 % | **8.7 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.00 €** | 34.1 % | **14.3 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED svetelný panel GODOX Litemons LP600R RGB | 140.90 € | **134.50 €** | 19.3 % | **13.9 %** | 134.62 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90T palubná kamera | 159.90 € | **153.50 €** | 15.1 % | **10.5 %** | 153.71 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.00 €** | 33.8 % | **18.9 %** | 51.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.50 €** | 19.4 % | **11.5 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **23.50 €** | 42.7 % | **12.8 %** | 23.60 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **21.00 €** | 36.3 % | **5.4 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 57.4 % | **18.3 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **13.90 €** | 74.0 % | **21.0 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **58.50 €** | 22.4 % | **10.8 %** | 58.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO1022S | 167.50 € | **161.50 €** | 10.2 % | **6.3 %** | 161.61 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **28.90 €** | 39.4 % | **15.6 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat DIGITRADIO 317 /černé/ | 86.90 € | **81.00 €** | 12.8 % | **5.1 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SMALLRIG VB99 SE Mini V-Mount batéria | 127.90 € | **122.00 €** | 15.0 % | **9.7 %** | 122.20 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **69.00 €** | 25.4 % | **15.7 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **86.50 €** | 19.5 % | **12.1 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **41.50 €** | 35.1 % | **18.9 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.00 €** | 32.2 % | **20.8 %** | 59.38 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **17.00 €** | 51.1 % | **13.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 39.3 % | **31.9 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.50 €** | 32.9 % | **14.7 %** | 34.63 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **34.50 €** | 25.2 % | **8.0 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **32.00 €** | 40.3 % | **19.9 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 42.7 % | **19.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **27.00 €** | 36.0 % | **13.7 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.50 €** | 30.4 % | **16.7 %** | 44.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **44.50 €** | 30.2 % | **16.5 %** | 44.79 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.00 €** | 33.8 % | **19.1 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.00 €** | 29.1 % | **15.0 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.00 €** | 33.0 % | **18.2 %** | 41.46 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BPS6737E04DBG | 404.00 € | **398.90 €** | 6.9 % | **5.6 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 33.0 % | **5.4 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 47.1 % | **16.6 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 35.3 % | **7.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD200WS (čierny) | 96.00 € | **90.90 €** | 20.4 % | **14.0 %** | 90.96 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.50 €** | 27.4 % | **12.3 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook 11T LTE Pro | 106.90 € | **101.90 €** | 10.4 % | **5.2 %** | 97.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 363.50 € | **358.50 €** | 15.0 % | **13.4 %** | 358.53 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 20,8MM 11 (čierny) | 43.00 € | **38.00 €** | 34.4 % | **18.8 %** | 38.04 € | cena podľa najlacnejšieho iného predajcu |
| Blesková hlava GODOX BD-10 AD300PRO | 36.00 € | **31.00 €** | 53.9 % | **32.5 %** | 31.04 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.50 € | **203.50 €** | 16.6 % | **13.8 %** | 203.63 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N3 Pro 2026 – palubná kamera | 75.00 € | **70.00 €** | 14.9 % | **7.2 %** | 70.21 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD-L pre AD200 | 31.00 € | **26.00 €** | 40.1 % | **17.5 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 148.00 € | **143.00 €** | 21.4 % | **17.3 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 55.8 % | **16.9 %** | 15.25 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.00 €** | 55.8 % | **15.0 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **95.00 €** | 18.7 % | **12.8 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 55.6 % | **11.6 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 33.0 % | **11.9 %** | 25.41 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **19.90 €** | 42.7 % | **15.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **22.50 €** | 36.7 % | **13.3 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RH 6545 WH | 96.50 € | **91.90 €** | 10.4 % | **5.1 %** | 83.12 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 29.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 228.50 € | **224.00 €** | 16.1 % | **13.8 %** | 224.04 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 228.50 € | **224.00 €** | 16.1 % | **13.8 %** | 224.04 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 228.50 € | **224.00 €** | 16.1 % | **13.8 %** | 224.04 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool MWF 420 BL | 169.00 € | **164.50 €** | 10.0 % | **7.1 %** | 164.76 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 18.9MM 9 (Złoty) | 33.50 € | **29.00 €** | 42.4 % | **23.3 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 123.50 € | **119.00 €** | 19.2 % | **14.8 %** | 119.31 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí kabel Qoltec 5m Type 2 / Type 2, 3x32A, 400... | 166.50 € | **162.00 €** | 10.1 % | **7.2 %** | 162.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **12.50 €** | 47.5 % | **8.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 51.9 % | **16.1 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.50 €** | 52.4 % | **16.5 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 54.6 % | **16.4 %** | 13.75 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook 10T LTE | 93.90 € | **89.50 €** | 10.2 % | **5.1 %** | 80.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux E1WYHSK2 | 69.90 € | **65.50 €** | 12.9 % | **5.8 %** | 62.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.90 €** | 28.1 % | **8.0 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.50 €** | 40.5 % | **20.5 %** | 25.71 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 46.00 € | **41.90 €** | 19.1 % | **8.5 %** | 41.91 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **20.50 €** | 43.5 % | **19.6 %** | 20.54 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **20.50 €** | 35.0 % | **12.5 %** | 20.83 € | cena podľa najlacnejšieho iného predajcu |
| TESLA AirCook & Grill QG800 WiFi - multifunkční digi... | 154.00 € | **149.90 €** | 8.0 % | **5.2 %** | 114.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **40.50 €** | 26.3 % | **14.7 %** | 40.63 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 29.6 % | **6.3 %** | 18.54 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **18.50 €** | 40.7 % | **15.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.00 €** | 27.9 % | **15.6 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R980T 2.0 (čierne) | 69.90 € | **65.90 €** | 21.2 % | **14.3 %** | 66.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 192.90 € | **188.90 €** | 11.5 % | **9.2 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 207.50 € | **203.50 €** | 16.0 % | **13.8 %** | 203.63 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické LED svietidlo NEEWER BL60C | 24.50 € | **20.50 €** | 31.2 % | **9.8 %** | 20.67 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER GR18C Okrúhly LED panel pre bočné osvetlenie | 201.00 € | **197.00 €** | 23.7 % | **21.2 %** | 197.42 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.39 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 46.8 % | **11.9 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 36.5 % | **17.2 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **21.00 €** | 39.1 % | **18.7 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| ETA Nubela 2569 90100, bílý | 28.50 € | **25.00 €** | 56.8 % | **37.5 %** | 25.02 € | cena podľa najlacnejšieho iného predajcu |
| Reflektor GODOX RFT-25S | 75.00 € | **71.50 €** | 21.3 % | **15.7 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RBB1200 | 190.50 € | **187.00 €** | 19.3 % | **17.1 %** | 187.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 40.1 % | **15.6 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.50 €** | 30.6 % | **19.3 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 43.9 % | **15.6 %** | 14.04 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **34.00 €** | 31.8 % | **19.8 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **29.90 €** | 30.8 % | **17.4 %** | 29.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 14.90 € | **11.50 €** | 47.0 % | **13.5 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **28.90 €** | 33.2 % | **19.2 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 32.6 % | **18.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 41.5 % | **35.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 26.00 € | **22.90 €** | 20.1 % | **5.8 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| KMP H168BX (HP 302 Black XL) | 25.00 € | **21.90 €** | 94.5 % | **70.4 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna doska Moza Racing RS089 | 34.50 € | **31.50 €** | 16.8 % | **6.6 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dynamický mikrofón MAONO PD100WS (čierny) | 56.50 € | **53.50 €** | 20.6 % | **14.2 %** | 53.58 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER BASICS N12 Mini blesk | 25.50 € | **22.50 €** | 35.8 % | **19.8 %** | 22.67 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 129.00 € | **126.00 €** | 14.8 % | **12.2 %** | 126.21 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link SM6220-1M SFP+ Direct Attach Cable, 25... | 47.50 € | **44.50 €** | 12.4 % | **5.3 %** | 44.71 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LE300Bi | 313.50 € | **310.50 €** | 17.1 % | **16.0 %** | 310.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight dezinfekčná bezozónová UV lampa 100W | 43.50 € | **40.50 €** | 38.5 % | **28.9 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 40.2 % | **19.3 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 37.7 % | **17.1 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **17.00 €** | 30.7 % | **11.2 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 36.9 % | **13.9 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.00 €** | 41.3 % | **18.2 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **14.00 €** | 42.8 % | **18.2 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.50 €** | 29.4 % | **6.6 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 41.5 % | **16.5 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 42.9 % | **17.6 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **12.00 €** | 47.3 % | **19.0 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 12.47 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **72.00 €** | 17.6 % | **13.1 %** | 72.29 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **21.90 €** | 33.5 % | **18.9 %** | 21.96 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 55.1 % | **39.9 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 34.0 % | **20.9 %** | 24.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **19.90 €** | 20.6 % | **6.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.90 €** | 21.5 % | **7.2 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.90 €** | 40.4 % | **31.7 %** | 39.93 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 26.50 € | **23.90 €** | 83.7 % | **65.7 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Tesla 32E635BHS 32" HD LED AndroidTV 11 | 149.50 € | **147.00 €** | 6.8 % | **5.0 %** | 146.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kompaktný statív Neewer TP02 pre fotoaparáty a telefóny | 25.00 € | **22.50 €** | 34.0 % | **20.6 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| Fitness sada na pilates REBEL ACTIVE RBA-3069-PK mul... | 47.00 € | **44.50 €** | 24.0 % | **17.4 %** | 44.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer Nutri Mini | 50.50 € | **48.00 €** | 16.1 % | **10.4 %** | 48.16 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Junior Retro blesk | 71.50 € | **69.00 €** | 19.6 % | **15.4 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu |
| Pilot GODOX RC-A6 | 16.50 € | **14.00 €** | 47.4 % | **25.1 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| IMOU T800 4K palubná kamera | 57.00 € | **54.50 €** | 15.0 % | **10.0 %** | 54.89 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.8 % | **7.7 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.1 % | **7.1 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Pixy | 85.90 € | **83.50 €** | 15.1 % | **11.9 %** | 83.83 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 41.6 % | **19.1 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Držiak pre blesk GODOX S3 TTL Speedlite | 28.00 € | **25.90 €** | 14.0 % | **5.5 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 18.3 % | **8.2 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 181.00 € | **178.90 €** | 9.9 % | **8.6 %** | 178.91 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 181.00 € | **178.90 €** | 9.9 % | **8.6 %** | 178.91 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **16.90 €** | 33.3 % | **18.8 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **19.00 €** | 41.4 % | **27.9 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E4GK1-4GB | 37.50 € | **35.50 €** | 11.1 % | **5.1 %** | 26.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hodinky Colmi V89 Smartwatch (strieborná oceľ) | 34.50 € | **32.50 €** | 12.2 % | **5.7 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff CAM-PT2 2MP WiFi Smart Camera | 24.50 € | **22.50 €** | 15.8 % | **6.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 23.50 € | **21.50 €** | 15.4 % | **5.6 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 27.50 € | **25.50 €** | 14.5 % | **6.2 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI ZRW 60 černá | 60.50 € | **58.50 €** | 8.8 % | **5.2 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 128.00 € | **126.00 €** | 19.0 % | **17.1 %** | 126.17 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitá odsávačka mlieka Grownsy | 33.00 € | **31.00 €** | 28.4 % | **20.6 %** | 31.21 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFGV8080 Softbox | 61.50 € | **59.50 €** | 20.5 % | **16.6 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.50 € | **17.50 €** | 20.2 % | **7.9 %** | 17.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 35.50 € | **33.50 €** | 36.0 % | **28.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing SR-P Lite RS19 for R3/R5 | 42.50 € | **40.50 €** | 15.8 % | **10.3 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CS-85D Softbox | 72.00 € | **70.00 €** | 17.0 % | **13.8 %** | 70.48 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 52.9 % | **37.7 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 24.6 % | **12.2 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.00 €** | 33.0 % | **19.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFUV6060 Softbox, 60x60 cm | 46.90 € | **45.00 €** | 21.5 % | **16.6 %** | 45.38 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.00 €** | 31.0 % | **14.6 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, studená b... | 11.50 € | **9.80 €** | 49.6 % | **27.5 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, teplá bie... | 11.50 € | **9.80 €** | 49.6 % | **27.5 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **25.50 €** | 23.4 % | **15.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Russell Hobbs 24992-70 | 40.50 € | **38.90 €** | 10.4 % | **6.1 %** | 38.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bravo Ani B-4689 bílá | 19.50 € | **17.90 €** | 15.5 % | **6.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 8.80 € | **7.30 €** | 71.2 % | **42.0 %** | 7.40 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná detská váha Grownsy B12H | 28.50 € | **27.00 €** | 25.8 % | **19.2 %** | 27.04 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 19.00 € | **17.50 €** | 80.7 % | **66.4 %** | 17.56 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 73.00 € | **71.50 €** | 18.1 % | **15.7 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Clip TWS09BK | 18.00 € | **16.50 €** | 14.9 % | **5.3 %** | 16.67 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Clip TWS09SR | 18.00 € | **16.50 €** | 14.9 % | **5.3 %** | 16.67 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 67.50 € | **66.00 €** | 10.8 % | **8.3 %** | 66.21 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.50 € | **887.00 €** | 20.3 % | **20.1 %** | 887.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **18.50 €** | 44.9 % | **34.1 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 19.00 € | **17.50 €** | 14.3 % | **5.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 39.6 % | **29.4 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 232.90 € | **231.50 €** | 9.5 % | **8.9 %** | 231.89 € | cena podľa najlacnejšieho iného predajcu |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 14.90 € | **13.50 €** | 18.0 % | **6.9 %** | 13.59 € | cena podľa najlacnejšieho iného predajcu |
| TEFAL KO 299130 | 29.90 € | **28.50 €** | 10.9 % | **5.7 %** | 25.02 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal Coppertinto KI280G10 | 30.90 € | **29.50 €** | 10.5 % | **5.5 %** | 29.61 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, neutrálna... | 11.00 € | **9.80 €** | 43.1 % | **27.5 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Pink | 32.00 € | **30.90 €** | 9.1 % | **5.4 %** | 30.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hodiny nástěnné TechnoLine WT 7981 | 36.00 € | **34.90 €** | 9.4 % | **6.1 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Pink | 29.00 € | **27.90 €** | 9.9 % | **5.7 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.90 € | **6.80 €** | 36.7 % | **17.6 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect USetup E7 15,6" 1920x1080 60Hz prenosný dot... | 143.00 € | **141.90 €** | 16.4 % | **15.5 %** | 141.96 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 47.6 % | **40.7 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff MINI-ZBRBS inteligentný mini spínač ZigBee | 16.50 € | **15.50 €** | 13.7 % | **6.8 %** | 12.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZigBee senzor úniku vody/záplavy SONOFF SNZB-05P (+b... | 12.50 € | **11.50 €** | 17.1 % | **7.7 %** | 10.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový mikrofón SMALLRIG S 70 | 82.50 € | **81.50 €** | 15.3 % | **13.9 %** | 81.55 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-006-33 Dvojúčelový fotografický dáždnik | 20.00 € | **19.00 €** | 31.0 % | **24.5 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 290 MK II 200/250 Ohm | 431.90 € | **430.90 €** | 27.7 % | **27.4 %** | 431.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 447.90 € | **446.90 €** | 35.9 % | **35.6 %** | 447.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 103.50 € | **102.50 €** | 12.4 % | **11.3 %** | 102.61 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Ottocast CA525-T3 | 27.00 € | **26.00 €** | 25.5 % | **20.9 %** | 26.13 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 204.50 € | **203.50 €** | 14.3 % | **13.8 %** | 203.63 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Minix SF10T s uhlopriečkou 10,5" | 125.50 € | **124.50 €** | 20.4 % | **19.4 %** | 124.66 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.50 € | **61.50 €** | 8.8 % | **7.0 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 49.50 € | **48.50 €** | 38.1 % | **35.3 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 42.00 € | **41.00 €** | 8.5 % | **5.9 %** | 41.40 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 18.00 € | **17.00 €** | 14.7 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Ponorné čerpadlo SUNSUN JP-1500GL | 12.00 € | **11.00 €** | 25.1 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 44.7 % | **37.0 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta pre LED pásiky, rohová, 16x1... | 4.00 € | **3.10 €** | 91.3 % | **48.3 %** | 3.14 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.50 €** | 25.3 % | **17.2 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny merač spotreby el. energie | 7.50 € | **6.70 €** | 45.5 % | **30.0 %** | 6.75 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 24.50 € | **23.90 €** | 21.0 % | **18.0 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.50 € | **10.90 €** | 12.1 % | **6.3 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.80 € | **8.30 €** | 76.7 % | **66.6 %** | 8.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 33.00 € | **32.50 €** | 29.7 % | **27.8 %** | 32.53 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 222.00 € | **221.50 €** | 18.0 % | **17.7 %** | 221.54 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 45.50 € | **45.00 €** | 6.6 % | **5.5 %** | 45.07 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 45.50 € | **45.00 €** | 6.6 % | **5.5 %** | 45.07 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 37.00 € | **36.50 €** | 61.4 % | **59.2 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 17.50 € | **17.00 €** | 15.2 % | **11.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50D2V0 | 16.50 € | **16.00 €** | 14.2 % | **10.7 %** | 16.15 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W03,23,8" | 203.50 € | **203.00 €** | 19.2 % | **18.9 %** | 203.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.50 € | **25.00 €** | 36.9 % | **34.2 %** | 25.16 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA80XE AX 3000, WiFi ... | 23.50 € | **23.00 €** | 14.8 % | **12.4 %** | 23.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.50 € | **12.00 €** | 36.4 % | **31.0 %** | 12.36 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-1 mini 12V DC bílý | 94.50 € | **94.00 €** | 13.4 % | **12.8 %** | 94.38 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 62.50 € | **62.00 €** | 59.3 % | **58.1 %** | 62.38 € | cena podľa najlacnejšieho iného predajcu |
| Tester baterií UNI-T UT677C s diagnostikou | 537.50 € | **537.00 €** | 15.6 % | **15.5 %** | 537.39 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Pro – palubná kamera | 136.00 € | **135.50 €** | 16.0 % | **15.6 %** | 135.89 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 60.00 € | **59.50 €** | 77.5 % | **76.0 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 745W | 28.50 € | **28.00 €** | 12.8 % | **10.8 %** | 28.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-3 PREMIUM 3 kg (100x150... | 27.00 € | **26.50 €** | 13.7 % | **11.6 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 28.50 € | **28.00 €** | 17.5 % | **15.4 %** | 28.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-5 PREMIUM 5 kg (100x150... | 31.00 € | **30.50 €** | 22.6 % | **20.7 %** | 30.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 28.50 € | **28.00 €** | 17.5 % | **15.4 %** | 28.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-5 PREMIUM 5 kg (100x150... | 31.00 € | **30.50 €** | 22.6 % | **20.7 %** | 30.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušák Comfort Tower 420 | 46.00 € | **45.50 €** | 6.2 % | **5.0 %** | 45.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 921.00 € | **920.50 €** | 14.3 % | **14.2 %** | 920.89 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 157.50 € | **157.00 €** | 10.1 % | **9.8 %** | 157.39 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 928.00 € | **927.50 €** | 9.6 % | **9.5 %** | 927.89 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 107.50 € | **107.00 €** | 11.5 % | **11.0 %** | 107.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 271.50 € | **271.00 €** | 6.9 % | **6.8 %** | 271.39 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá Edifier HECATE G2 II (čierne) | 33.50 € | **33.00 €** | 14.8 % | **13.1 %** | 33.39 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 217.00 € | **216.50 €** | 17.4 % | **17.1 %** | 216.89 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 62.00 € | **61.50 €** | 13.0 % | **12.1 %** | 61.89 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 231.50 € | **231.00 €** | 21.5 % | **21.3 %** | 231.39 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 29.50 € | **29.00 €** | 20.5 % | **18.5 %** | 29.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 634.50 € | **634.00 €** | 6.3 % | **6.2 %** | 634.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 681.50 € | **681.00 €** | 10.3 % | **10.2 %** | 681.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-9 mini 12V DC černý | 94.50 € | **94.00 €** | 13.4 % | **12.8 %** | 94.42 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife AD020 magnetický hliníkový adaptér pre Ins... | 15.50 € | **15.00 €** | 14.9 % | **11.2 %** | 15.44 € | cena podľa najlacnejšieho iného predajcu |
| Guma posilovací REBEL ACTIVE RBA-3000-S4 Latexová sa... | 27.50 € | **27.00 €** | 90.9 % | **87.5 %** | 27.46 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač pre domáce zvieratá 2v1 Petkit | 21.50 € | **21.00 €** | 14.7 % | **12.0 %** | 21.47 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 435C | 16.50 € | **16.00 €** | 27.4 % | **23.5 %** | 16.48 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV T7S (čierny) | 120.50 € | **120.00 €** | 14.1 % | **13.6 %** | 120.48 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7355CH | 58.50 € | **58.00 €** | 17.9 % | **16.9 %** | 58.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V860III TTL pre Fuji | 214.50 € | **214.00 €** | 10.3 % | **10.0 %** | 214.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS EDIFIER X5 Pro (modré) | 35.50 € | **35.00 €** | 32.7 % | **30.8 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (biela) | 181.90 € | **181.50 €** | 11.1 % | **10.9 %** | 181.63 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (čierny) | 181.90 € | **181.50 €** | 11.1 % | **10.9 %** | 181.63 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 171.90 € | **171.50 €** | 30.4 % | **30.1 %** | 171.71 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552320 Crocodile 5G LTE700 domovní zesilovač | 64.90 € | **64.50 €** | 94.6 % | **93.4 %** | 64.79 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 64.90 € | **64.50 €** | 30.9 % | **30.1 %** | 64.88 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 66.90 € | **66.50 €** | 6.4 % | **5.8 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 70.90 € | **70.50 €** | 21.3 % | **20.6 %** | 70.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro (čierny) | 129.90 € | **129.50 €** | 10.3 % | **10.0 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight ochranný box na káble a predlžovacie prívody... | 18.90 € | **18.50 €** | 60.4 % | **57.0 %** | 18.74 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 35.90 € | **35.50 €** | 15.3 % | **14.0 %** | 35.77 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.90 € | **28.50 €** | 11.0 % | **9.5 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| TELESIN Univerzálny držiak na rúrku riadidiel pre šp... | 17.90 € | **17.50 €** | 24.6 % | **21.8 %** | 17.80 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP800IIIV | 317.90 € | **317.50 €** | 17.3 % | **17.1 %** | 317.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.30 €** | 73.4 % | **40.9 %** | 1.38 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.26 € | cena podľa najlacnejšieho iného predajcu |
| Drevení LED anjeli Solight 1V219, biela farba, 2 × AA | 5.70 € | **5.50 €** | 53.4 % | **48.1 %** | 5.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.80 € | **2.60 €** | 60.3 % | **48.9 %** | 2.64 € | cena podľa najlacnejšieho iného predajcu |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 49.00 € | **48.90 €** | 97.9 % | **97.5 %** | 48.92 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový mikrofón PULUZ PU647B | 24.00 € | **23.90 €** | 9.1 % | **8.7 %** | 23.92 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 20.00 € | **19.90 €** | 35.7 % | **35.0 %** | 19.98 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 44.00 € | **43.90 €** | 15.8 % | **15.6 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight bambusový lampáš s LED žiarovkou, teplá biel... | 5.40 € | **5.30 €** | 11.1 % | **9.1 %** | 5.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 5,0 W, 1055lm, 27... | 5.20 € | **5.10 €** | 87.1 % | **83.5 %** | 5.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.40 €** | 56.3 % | **45.9 %** | 1.49 € | cena podľa najlacnejšieho iného predajcu |
| Softbox GODOX SB1520, univerzálny typ, 15x20 cm | 12.00 € | **11.90 €** | 20.3 % | **19.3 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| Bicyklová baterka Superfire BL09 – 450 lm, USB, 5W, ... | 12.00 € | **11.90 €** | 25.9 % | **24.8 %** | 11.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.80 €** | 11.5 % | **10.2 %** | 8.89 € | cena podľa najlacnejšieho iného predajcu |
| Dielenská baterka Superfire G21, 650lm, USB | 14.00 € | **13.90 €** | 13.1 % | **12.3 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.00 € | **129.90 €** | 25678.3 % | **25658.5 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 214.00 € | **213.90 €** | 7.9 % | **7.9 %** | 214.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 159.00 € | **158.90 €** | 21.1 % | **21.0 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 149.00 € | **148.90 €** | 21.1 % | **21.0 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |

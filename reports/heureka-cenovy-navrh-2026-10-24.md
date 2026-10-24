# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-24

Vstup: `premiumstore-sk_2026-10-24_13-37.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6139**
- Návrh **zvýšiť** cenu: **223** produktov
- Návrh **znížiť** cenu: **521** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5395** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **32**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **314**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (223)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **956.90 €** | 6.0 % | **43.8 %** | 957.00 € | cena podľa najlacnejšieho iného predajcu |
| Teka TZ  6420 BK | 146.90 € | **248.90 €** | 10.1 % | **86.5 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta Eco Steam Pro DG9642F0 | 233.50 € | **333.50 €** | 10.1 % | **57.3 %** | 333.56 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 28.0 % | **44.3 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **888.90 €** | 29.5 % | **43.8 %** | 889.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 40.8 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **548.50 €** | 6.0 % | **19.8 %** | 548.88 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA NS-C444 PIANOBLACK | 183.50 € | **245.90 €** | 10.3 % | **47.8 %** | 246.00 € | cena podľa najlacnejšieho iného predajcu |
| Stavebná sada robota xTool mBot2 Rover | 325.00 € | **375.50 €** | 15.0 % | **32.8 %** | 375.63 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 48.6 % | **72.6 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 49.1 % | **73.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 49.1 % | **72.2 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **818.90 €** | 35.5 % | **43.2 %** | 819.00 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **328.50 €** | 6.1 % | **18.9 %** | 328.75 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **226.00 €** | 6.1 % | **25.2 %** | 226.04 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 27.9 % | **43.2 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **303.00 €** | 6.2 % | **19.3 %** | 303.42 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA NS-AW194 BLACK | 127.50 € | **160.00 €** | 10.1 % | **38.2 %** | 160.36 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 297.90 € | **328.90 €** | 15.0 % | **27.0 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 289.50 € | **320.50 €** | 5.5 % | **16.8 %** | 320.75 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 208.50 € | **238.90 €** | 15.1 % | **31.9 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.50 € | **83.50 €** | 15.3 % | **73.4 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA NS-SW100 BLACK | 220.90 € | **248.90 €** | 10.1 % | **24.0 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 6.3 % | **32.1 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **222.00 €** | 6.1 % | **21.1 %** | 222.17 € | cena podľa najlacnejšieho iného predajcu |
| xTool Codey Rocky – vzdelávacia verzia – vzdelávací ... | 149.90 € | **175.00 €** | 15.0 % | **34.3 %** | 175.14 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA NS-AW294 WHITE | 196.50 € | **220.50 €** | 10.2 % | **23.6 %** | 220.53 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BM201M2BG | 159.50 € | **183.00 €** | 10.3 % | **26.5 %** | 183.10 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot2 V1.0 | 166.50 € | **190.00 €** | 15.1 % | **31.3 %** | 190.18 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **218.00 €** | 6.2 % | **19.0 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 313.50 € | **331.50 €** | 17.4 % | **24.1 %** | 331.75 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **328.90 €** | 15.0 % | **20.7 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 132.22 € | **146.90 €** | 29.4 % | **43.8 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 33.5 % | **65.0 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 37.7 % | **69.7 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| San Marco Pur Arabica Premium 1 kg zrno | 22.00 € | **33.00 €** | 7.2 % | **60.8 %** | 33.40 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC čierne | 128.50 € | **139.00 €** | 23.9 % | **34.1 %** | 139.04 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 29.90 € | **40.00 €** | 6.2 % | **42.1 %** | 40.25 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT302C+ | 68.00 € | **78.00 €** | 15.0 % | **31.9 %** | 78.20 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 200.00 € | **210.00 €** | 19.0 % | **24.9 %** | 210.22 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **256.90 €** | 38.4 % | **43.9 %** | 257.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **146.90 €** | 49.6 % | **60.0 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon P1 | 596.50 € | **606.00 €** | 7.6 % | **9.3 %** | 606.45 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 6.9 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **124.00 €** | 6.2 % | **14.6 %** | 124.42 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 48.0 % | **81.4 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 56.7 % | **92.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA A-S501 BLACK | 523.90 € | **532.50 €** | 10.0 % | **11.8 %** | 532.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.00 €** | 6.3 % | **16.8 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 45.90 € | **54.00 €** | 11.8 % | **31.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **78.50 €** | 6.7 % | **18.8 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **136.90 €** | 35.4 % | **43.5 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing Vision GS RS064 (PC) | 748.50 € | **756.00 €** | 18.1 % | **19.3 %** | 756.25 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 35.1 % | **45.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec M3 Pro s procesorom i5-13500H, 16 GB ... | 718.00 € | **725.00 €** | 22.2 % | **23.4 %** | 725.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 17.50 € | **24.50 €** | 11.9 % | **56.6 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 30.4 % | **44.9 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2014401 Zmrzlinovač | 173.00 € | **179.50 €** | 7.7 % | **11.7 %** | 179.54 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **39.00 €** | 7.2 % | **28.6 %** | 39.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 45.5 % | **79.4 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **45.00 €** | 7.0 % | **23.7 %** | 45.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **55.00 €** | 6.1 % | **19.3 %** | 55.08 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24440-56 | 106.50 € | **112.50 €** | 5.2 % | **11.2 %** | 112.67 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10022 | 135.00 € | **140.00 €** | 7.7 % | **11.7 %** | 140.10 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **126.50 €** | 26.2 % | **30.9 %** | 126.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 8.10 € | **12.50 €** | 49.3 % | **130.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 41.6 % | **48.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **141.50 €** | 15.9 % | **19.4 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **56.00 €** | 6.5 % | **14.9 %** | 56.13 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HUION Note E X50 | 414.00 € | **418.00 €** | 21.3 % | **22.5 %** | 418.50 € | cena podľa najlacnejšieho iného predajcu |
| Bluetooth slúchadlá EJEAS E1+ pre prilby | 22.00 € | **26.00 €** | 12.1 % | **32.5 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **138.90 €** | 36.1 % | **39.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 31.2 % | **43.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 143.00 € | **146.50 €** | 6.3 % | **8.9 %** | 146.60 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0859 GaN 140W USB-A + ... | 45.50 € | **49.00 €** | 19.5 % | **28.7 %** | 49.29 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 215.00 € | **218.50 €** | 5.9 % | **7.7 %** | 218.80 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **78.90 €** | 6.5 % | **11.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 34.1 % | **48.9 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 21.90 € | **25.00 €** | 70.4 % | **94.5 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 22.90 € | **26.00 €** | 5.8 % | **20.1 %** | 26.33 € | cena podľa najlacnejšieho iného predajcu |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 27.00 € | **30.00 €** | 8.7 % | **20.7 %** | 30.04 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 327.50 € | **330.50 €** | 5.9 % | **6.9 %** | 330.60 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny magnetický filtračný systém Freewell K2 | 302.00 € | **305.00 €** | 21.3 % | **22.5 %** | 305.29 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, strieborná) | 269.00 € | **271.90 €** | 22.3 % | **23.6 %** | 271.92 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 27.3 % | **30.1 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 23.90 € | **26.50 €** | 65.7 % | **83.7 %** | 26.61 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **24.00 €** | 14.8 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 327.50 € | **330.00 €** | 7.1 % | **7.9 %** | 330.20 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Pixy | 81.50 € | **84.00 €** | 14.8 % | **18.3 %** | 84.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 270.00 € | **272.50 €** | 22.4 % | **23.6 %** | 272.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, zlatá) | 270.00 € | **272.50 €** | 22.4 % | **23.6 %** | 272.71 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Melobuds A30 (čierne) | 29.00 € | **31.50 €** | 14.7 % | **24.6 %** | 31.84 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **18.50 €** | 15.3 % | **33.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 15.50 € | **18.00 €** | 52.2 % | **76.7 %** | 18.49 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 371.50 € | **373.90 €** | 5.1 % | **5.7 %** | 374.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 44.4 % | **49.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **94.00 €** | 14.9 % | **17.6 %** | 94.11 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera SJCAM M60, 3 kanály (čierny) | 200.00 € | **202.00 €** | 21.6 % | **22.8 %** | 202.17 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 201.50 € | **203.50 €** | 23.9 % | **25.1 %** | 203.67 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R05B4 | 207.50 € | **209.50 €** | 21.3 % | **22.5 %** | 209.83 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT96425VD | 260.50 € | **262.50 €** | 6.2 % | **7.0 %** | 262.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 11.50 € | **13.50 €** | 8.3 % | **27.2 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT598 | 25.00 € | **27.00 €** | 6.9 % | **15.4 %** | 27.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 20.00 € | **22.00 €** | 23.0 % | **35.3 %** | 22.47 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 231.00 € | **233.00 €** | 13.8 % | **14.7 %** | 233.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN D1Air | 158.00 € | **159.90 €** | 21.5 % | **23.0 %** | 160.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1009900 | 46.00 € | **47.90 €** | 11.5 % | **16.1 %** | 47.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 37.00 € | **38.90 €** | 12.2 % | **18.0 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **42.50 €** | 11.8 % | **16.2 %** | 42.60 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 189.90 € | **191.50 €** | 22.6 % | **23.6 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T21B1 (čierny) | 132.50 € | **134.00 €** | 22.6 % | **23.9 %** | 134.08 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 17.50 € | **19.00 €** | 16.2 % | **26.2 %** | 19.15 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW5558E0 | 164.50 € | **166.00 €** | 5.9 % | **6.9 %** | 166.16 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 864 Senior Radio | 126.50 € | **128.00 €** | 13.0 % | **14.4 %** | 128.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.50 € | **12.00 €** | 22.5 % | **40.0 %** | 12.36 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 26.00 € | **27.50 €** | 5.5 % | **11.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.00 € | **11.50 €** | 16.6 % | **34.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **864.50 €** | 37.3 % | **37.6 %** | 864.75 € | cena podľa najlacnejšieho iného predajcu |
| 2-zónový hadicový časovač Rainpoint ITV205 | 27.50 € | **28.90 €** | 16.0 % | **21.9 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava xTool Ultimate Robot Kit V2.0 | 448.50 € | **449.90 €** | 15.0 % | **15.4 %** | 450.00 € | cena podľa najlacnejšieho iného predajcu |
| Termotransferová fólia HTVRONT Pure, 30,5 cm × 1,8 m... | 4.40 € | **5.70 €** | 15.0 % | **49.0 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7981 | 34.90 € | **36.00 €** | 5.8 % | **9.1 %** | 36.09 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 STD | 115.90 € | **117.00 €** | 21.3 % | **22.5 %** | 117.08 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 37.5 % | **45.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **41.00 €** | 30.6 % | **34.0 %** | 41.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 40.50 € | **41.50 €** | 17.1 % | **20.0 %** | 41.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 3.80 € | **4.80 €** | 14.8 % | **45.1 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 103.90 € | **104.90 €** | 22.0 % | **23.1 %** | 105.00 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač MOVA K30 Lite | 220.00 € | **221.00 €** | 10.1 % | **10.6 %** | 221.15 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič vody Darkflash DN 360 (biely) | 70.00 € | **71.00 €** | 18.8 % | **20.5 %** | 71.17 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 153.00 € | **154.00 €** | 13.0 % | **13.7 %** | 154.20 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 104.50 € | **105.50 €** | 21.8 % | **23.0 %** | 105.71 € | cena podľa najlacnejšieho iného predajcu |
| Fixed MagPad, bílá FIXMPAD2-WH | 15.50 € | **16.50 €** | 50.7 % | **60.5 %** | 16.72 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (biela) + 3 vent... | 79.00 € | **80.00 €** | 16.1 % | **17.6 %** | 80.25 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 10.50 € | **11.50 €** | 9.2 % | **19.6 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-AZ-EM1501-SV s piestom (strieborný) | 103.50 € | **104.50 €** | 21.2 % | **22.4 %** | 104.83 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT6000 99,9 Wh štartér | 129.00 € | **130.00 €** | 24.7 % | **25.6 %** | 130.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.50 € | **14.50 €** | 16.9 % | **25.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 24.00 € | **25.00 €** | 10.4 % | **15.0 %** | 25.44 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 41.9 % | **45.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS1 Pro – štartér do auta | 74.00 € | **74.90 €** | 23.8 % | **25.3 %** | 74.92 € | cena podľa najlacnejšieho iného predajcu |
| Retro blesk GODOX Lux Junior II S | 78.00 € | **78.90 €** | 19.0 % | **20.4 %** | 78.92 € | cena podľa najlacnejšieho iného predajcu |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 83.00 € | **83.90 €** | 12.1 % | **13.3 %** | 83.92 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Sky B-4610 zlatý | 65.00 € | **65.90 €** | 10.1 % | **11.6 %** | 65.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.70 € | **9.60 €** | 9.0 % | **20.3 %** | 9.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.90 € | **5.80 €** | 8.8 % | **28.8 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 4.90 € | **5.80 €** | 117.7 % | **157.7 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Double monitor mount 13-30" Huanuo HNDS6 | 53.00 € | **53.90 €** | 23.3 % | **25.4 %** | 54.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná fontána/napájačka pre domáce zvieratá s... | 54.00 € | **54.90 €** | 18.0 % | **20.0 %** | 55.00 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **173.00 €** | 42.0 % | **42.6 %** | 173.08 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 38.0 % | **41.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér OTG USB-C na Lightning Puluz PU649B | 3.10 € | **3.80 €** | 15.6 % | **41.7 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **136.00 €** | 36.2 % | **36.9 %** | 136.13 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.70 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1018900 Pákový kávovar | 122.90 € | **123.50 €** | 8.1 % | **8.6 %** | 123.60 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 | 178.90 € | **179.50 €** | 5.1 % | **5.5 %** | 179.77 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **38.00 €** | 31.8 % | **33.9 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maono BA92 Boom Arm Black | 50.00 € | **50.50 €** | 14.1 % | **15.2 %** | 50.58 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus A12 | 22.00 € | **22.50 €** | 19.1 % | **21.8 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 21.3MM 12 (Black) | 28.00 € | **28.50 €** | 23.7 % | **25.9 %** | 28.63 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 7 (čierny) | 36.50 € | **37.00 €** | 22.9 % | **24.6 %** | 37.13 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 8 (čierny) | 36.50 € | **37.00 €** | 22.9 % | **24.6 %** | 37.13 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Sunnylife na riadidlá pre ovládač | 14.00 € | **14.50 €** | 13.8 % | **17.9 %** | 14.63 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.50 € | **37.00 €** | 12.0 % | **13.5 %** | 37.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 14.00 € | **14.50 €** | 17.1 % | **21.3 %** | 14.64 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 45C 3S1P lipo battery ... | 57.00 € | **57.50 €** | 21.6 % | **22.7 %** | 57.67 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire s rozhraním USB-C L24 | 16.00 € | **16.50 €** | 14.1 % | **17.7 %** | 16.67 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS ONIKUMA TX612 (čierne) | 20.00 € | **20.50 €** | 23.6 % | **26.6 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre GoPro Hero 13 | 33.00 € | **33.50 €** | 19.8 % | **21.6 %** | 33.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 29.00 € | **29.50 €** | 40.7 % | **43.1 %** | 29.78 € | cena podľa najlacnejšieho iného predajcu |
| Fitness sada na pilates REBEL ACTIVE RBA-3069-PK mul... | 47.50 € | **48.00 €** | 24.9 % | **26.2 %** | 48.29 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT371 | 66.50 € | **67.00 €** | 16.4 % | **17.2 %** | 67.33 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 52.50 € | **53.00 €** | 11.8 % | **12.8 %** | 53.33 € | cena podľa najlacnejšieho iného predajcu |
| Neweer TL97C RGB LED farebné foto svetlo | 33.00 € | **33.50 €** | 23.3 % | **25.2 %** | 33.83 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXSHM-1402-TR | 19.00 € | **19.50 €** | 36.8 % | **40.4 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 44.00 € | **44.50 €** | 32.1 % | **33.6 %** | 44.88 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2800mAh 14,8V 60C 4S1P LiPo ... | 48.00 € | **48.50 €** | 29.6 % | **30.9 %** | 48.88 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 4500mAh 6S1P 22.2V 60C HardCase RC c... | 84.00 € | **84.50 €** | 31.2 % | **31.9 %** | 84.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.00 € | **10.50 €** | 19.4 % | **25.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **12.50 €** | 18.5 % | **23.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 21.00 € | **21.50 €** | 7.5 % | **10.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.00 € | **21.50 €** | 15.4 % | **18.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 75.50 € | **76.00 €** | 5.4 % | **6.1 %** | 76.41 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (biela) | 53.50 € | **54.00 €** | 14.8 % | **15.9 %** | 54.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **105.00 €** | 35.1 % | **35.7 %** | 105.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **23.00 €** | 33.4 % | **36.1 %** | 23.21 € | cena podľa najlacnejšieho iného predajcu |
| ETA 713240002 | 11.50 € | **11.90 €** | 10.5 % | **14.4 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPhone 17 FIXSHM-1600-TR | 15.50 € | **15.90 €** | 11.6 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny prísavný držiak TELESIN s držiakom na te... | 13.50 € | **13.90 €** | 18.3 % | **21.8 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (čierna) | 14.50 € | **14.90 €** | 16.1 % | **19.3 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (sivá) | 14.50 € | **14.90 €** | 10.1 % | **13.1 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Laica VT3514 | 4.40 € | **4.80 €** | 11.1 % | **21.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 20.50 € | **20.90 €** | 10.5 % | **12.7 %** | 20.92 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 1,5 m ... | 28.50 € | **28.90 €** | 37.5 % | **39.4 %** | 28.95 € | cena podľa najlacnejšieho iného predajcu |
| Náramok Colmi M06 Smartband (ružové zlato) | 35.50 € | **35.90 €** | 21.3 % | **22.6 %** | 35.96 € | cena podľa najlacnejšieho iného predajcu |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.50 € | **17.90 €** | 18.4 % | **21.1 %** | 17.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.30 € | **9.70 €** | 31.0 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **44.90 €** | 34.1 % | **35.0 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 24.90 € | **25.00 €** | 16.1 % | **16.6 %** | 25.09 € | cena podľa najlacnejšieho iného predajcu |
| Pohybové čidlo ORBIS ISIMAT | 22.90 € | **23.00 €** | 17.3 % | **17.8 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire DL01 | 17.90 € | **18.00 €** | 16.7 % | **17.4 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Podpera pozadia pre fotoštúdio Puluz 70x200cm + poza... | 20.90 € | **21.00 €** | 15.2 % | **15.8 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Pure POP Home & Travel DT2040E1 | 34.90 € | **35.00 €** | 13.5 % | **13.8 %** | 35.25 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 29.90 € | **30.00 €** | 10.9 % | **11.3 %** | 30.25 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená LED vianočná guľa Solight 1V204, 10 LED, 2 ... | 3.80 € | **3.90 €** | 23.6 % | **26.8 %** | 3.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.80 € | **9.90 €** | 36.0 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Hliníková upínací svorka pre modely RS 4 Mini / RS 4... | 12.90 € | **13.00 €** | 20.3 % | **21.2 %** | 13.08 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 147.90 € | **148.00 €** | 12.8 % | **12.9 %** | 148.06 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.90 € | **131.00 €** | 25856.8 % | **25876.6 %** | 131.19 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (521)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Cyklotrenažér Cycplus T3 | 972.72 € | **849.90 €** | 31.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **495.00 €** | 31.8 % | **8.8 %** | 495.47 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link SG2210XMP-M2 8x GLan/PoE+, 2x 10G SFP... | 375.50 € | **296.50 €** | 33.1 % | **5.1 %** | 292.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE ST5 Max | 870.00 € | **806.00 €** | 24.5 % | **15.3 %** | 806.02 € | cena podľa najlacnejšieho iného predajcu |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **241.50 €** | 42.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor BlitzWolf BW-V11 | 375.15 € | **322.00 €** | 36.1 % | **16.8 %** | 322.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **259.50 €** | 35.4 % | **12.4 %** | 259.79 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **175.00 €** | 47.6 % | **14.5 %** | 175.08 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **260.50 €** | 28.9 % | **8.5 %** | 260.55 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 650.00 € | **604.00 €** | 23.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **228.90 €** | 28.0 % | **6.7 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **307.50 €** | 37.5 % | **20.6 %** | 307.73 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco XE75(1-pack) AXE5400, WiFi ... | 203.90 € | **161.50 €** | 32.6 % | **5.0 %** | 130.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Uni-T UT362H Anemometer | 199.88 € | **158.50 €** | 35.0 % | **7.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 914.00 € | **873.00 €** | 20.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **259.50 €** | 27.9 % | **10.5 %** | 259.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **636.90 €** | 49.7 % | **41.2 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **262.90 €** | 41.1 % | **23.5 %** | 262.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **263.00 €** | 40.8 % | **23.3 %** | 263.46 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 5800mAh 60C 18.5V 5S1P Lipo Battery Pack wi... | 101.00 € | **65.00 €** | 87.0 % | **20.4 %** | 65.13 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco BE25-Outdoor(1-pack) vonkaj... | 156.00 € | **122.90 €** | 33.7 % | **5.3 %** | 102.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP650-Desktop AP WiFi 6, 4x GLa... | 153.50 € | **121.50 €** | 33.1 % | **5.4 %** | 85.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link HC220-G5(2-pack) AC1200, 3x GLAN... | 125.00 € | **93.50 €** | 40.5 % | **5.1 %** | 47.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **106.00 €** | 54.0 % | **18.9 %** | 106.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **326.90 €** | 34.2 % | **22.6 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **270.00 €** | 40.8 % | **26.6 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 123.00 € | **92.90 €** | 52.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **155.50 €** | 30.5 % | **9.4 %** | 155.79 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **135.50 €** | 47.0 % | **20.7 %** | 135.69 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **285.50 €** | 26.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **170.90 €** | 51.3 % | **29.4 %** | 170.96 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **188.50 €** | 38.7 % | **21.4 %** | 188.54 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **343.50 €** | 51.5 % | **40.6 %** | 343.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 244.98 € | **219.00 €** | 43.5 % | **28.3 %** | 219.21 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.90 €** | 41.9 % | **9.3 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1024D switch 24x GLan, desktop, ... | 121.90 € | **96.90 €** | 32.5 % | **5.3 %** | 84.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DDPAI Ranger Dash cam GPS WiFi 4K Motorbike | 196.00 € | **171.50 €** | 41.1 % | **23.4 %** | 171.71 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **118.00 €** | 38.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Maxxo LED800 bílý | 321.90 € | **298.50 €** | 15.5 % | **7.1 %** | 298.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **189.50 €** | 37.3 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **189.90 €** | 37.0 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **102.90 €** | 49.0 % | **22.6 %** | 103.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 41.4 % | **10.2 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 44.4 % | **12.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link MERCUSYS MR90X AX6000 dual AP/ro... | 106.50 € | **84.50 €** | 32.5 % | **5.1 %** | 84.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 485.50 € | **463.90 €** | 9.9 % | **5.0 %** | 454.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **164.00 €** | 27.9 % | **13.1 %** | 164.05 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **58.90 €** | 56.5 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **129.00 €** | 41.1 % | **21.6 %** | 129.13 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Pro – palubná kamera | 156.90 € | **137.00 €** | 41.2 % | **23.3 %** | 137.28 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **280.50 €** | 50.4 % | **40.5 %** | 280.63 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **64.00 €** | 73.9 % | **34.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 609.00 € | **590.50 €** | 13.7 % | **10.2 %** | 590.90 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.50 €** | 36.4 % | **11.2 %** | 81.70 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco E4 (2-Pack) 2x LAN/ 300Mbps... | 91.00 € | **72.90 €** | 31.6 % | **5.4 %** | 59.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **54.50 €** | 53.1 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.50 €** | 44.7 % | **16.9 %** | 72.69 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Archer AX55 Pro WiFi 6  AX3000, ... | 83.50 € | **66.50 €** | 32.5 % | **5.6 %** | 63.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **90.90 €** | 24.7 % | **5.3 %** | 89.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **75.90 €** | 28.2 % | **5.5 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **30.90 €** | 76.3 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion HS611 | 91.23 € | **75.00 €** | 39.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje NRK6182PW4 | 354.90 € | **338.90 €** | 10.0 % | **5.1 %** | 310.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko EnergySpin B7WFU68416WBES | 420.00 € | **404.00 €** | 9.9 % | **5.7 %** | 404.10 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **94.00 €** | 62.7 % | **39.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **110.00 €** | 35.4 % | **19.1 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **65.00 €** | 41.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **39.90 €** | 58.6 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 70.9 % | **20.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **75.00 €** | 42.1 % | **18.8 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **120.90 €** | 35.0 % | **20.6 %** | 120.96 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **236.00 €** | 36.0 % | **28.4 %** | 236.39 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 8000mAh 14.8V 100C 4S2P Lipo Battery Pack | 99.00 € | **85.00 €** | 24.2 % | **6.6 %** | 85.03 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8500mAh 14.8V 60C 4S1P Lipo Battery ... | 116.00 € | **102.00 €** | 37.2 % | **20.6 %** | 102.44 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **61.50 €** | 28.3 % | **5.5 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **54.00 €** | 46.0 % | **17.4 %** | 54.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 92.00 € | **78.90 €** | 43.6 % | **23.2 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **52.00 €** | 43.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **69.50 €** | 73.9 % | **46.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRKI519E41 | 515.90 € | **502.90 €** | 10.0 % | **7.2 %** | 503.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **127.50 €** | 24.7 % | **13.2 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.50 €** | 46.0 % | **13.2 %** | 44.69 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **38.50 €** | 53.4 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **57.50 €** | 40.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **77.50 €** | 42.9 % | **22.8 %** | 77.63 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Blitzwolf BW-V12 | 274.70 € | **262.00 €** | 47.2 % | **40.4 %** | 262.38 € | cena podľa najlacnejšieho iného predajcu |
| Freewell FujiX100 filter set with lens hood (silver) | 66.11 € | **53.50 €** | 42.2 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 182.50 € | **169.90 €** | 25.1 % | **16.4 %** | 169.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **123.00 €** | 39.9 % | **27.2 %** | 123.26 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C675D KIT 2× 2K, vonkajšia, IP P... | 223.90 € | **212.00 €** | 11.9 % | **6.0 %** | 212.22 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 134.28 € | **122.50 €** | 36.1 % | **24.1 %** | 122.57 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **138.90 €** | 51.2 % | **39.4 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **40.50 €** | 49.5 % | **15.8 %** | 40.89 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje RB413EPW4 | 253.50 € | **241.90 €** | 10.2 % | **5.2 %** | 197.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava Dreame D20 | 57.40 € | **45.90 €** | 44.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 32.8 % | **17.6 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **101.50 €** | 48.7 % | **33.9 %** | 101.79 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 54.8 % | **44.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 59.1 % | **48.1 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 53.3 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **189.50 €** | 42.5 % | **35.1 %** | 189.88 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **210.00 €** | 41.7 % | **35.0 %** | 210.42 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.50 €** | 33.7 % | **21.6 %** | 102.62 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 123.5 % | **44.1 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **116.90 €** | 35.6 % | **24.8 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **77.00 €** | 45.2 % | **28.3 %** | 77.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný pohybový senzor MEROSS MS605MAT-EU | 39.98 € | **30.00 €** | 40.6 % | **5.5 %** | 30.30 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **66.50 €** | 68.8 % | **47.0 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **228.00 €** | 23.4 % | **18.3 %** | 228.17 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **32.90 €** | 48.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| BlitzWolf BW-VS4 120" projection screen. | 51.00 € | **41.50 €** | 71.3 % | **39.4 %** | 41.61 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **65.50 €** | 21.0 % | **5.9 %** | 65.59 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.00 €** | 40.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **53.50 €** | 40.6 % | **20.4 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C222 IP, 3MPx, WiFi, prísvit | 44.50 € | **35.50 €** | 32.0 % | **5.3 %** | 35.67 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **66.00 €** | 19.2 % | **5.1 %** | 65.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.50 €** | 79.4 % | **22.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 214.00 € | **205.50 €** | 10.5 % | **6.1 %** | 205.63 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXKE2201E | 37.90 € | **29.50 €** | 54.2 % | **20.0 %** | 29.51 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.00 €** | 45.9 % | **6.2 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **58.90 €** | 25.7 % | **10.3 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 167.00 € | **159.00 €** | 11.4 % | **6.1 %** | 159.29 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 40.90 € | **33.00 €** | 32.5 % | **6.9 %** | 33.35 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EC225-G5 AC1300 dual AP, 3x GLAN... | 38.90 € | **31.00 €** | 33.4 % | **6.3 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 53.8 % | **19.2 %** | 27.27 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **67.00 €** | 36.0 % | **21.8 %** | 67.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **42.00 €** | 40.9 % | **19.1 %** | 42.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **62.00 €** | 48.1 % | **31.7 %** | 62.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 50.1 % | **42.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **39.50 €** | 58.3 % | **32.6 %** | 39.58 € | cena podľa najlacnejšieho iného predajcu |
| Amica TMI 20 BDFB | 168.50 € | **160.90 €** | 10.2 % | **5.2 %** | 147.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **57.00 €** | 33.6 % | **17.9 %** | 57.29 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **55.00 €** | 37.6 % | **21.0 %** | 55.46 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **75.00 €** | 21.0 % | **10.0 %** | 75.26 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.50 €** | 45.0 % | **17.9 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **215.00 €** | 45.2 % | **40.4 %** | 215.42 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75TKBXC | 78.90 € | **71.50 €** | 24.8 % | **13.1 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Lipo With XT6... | 61.90 € | **54.50 €** | 35.1 % | **19.0 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **22.50 €** | 51.2 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **63.00 €** | 32.3 % | **18.7 %** | 63.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **92.90 €** | 31.4 % | **22.2 %** | 92.92 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **117.00 €** | 29.1 % | **21.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.50 €** | 51.3 % | **6.4 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **93.00 €** | 23.2 % | **14.7 %** | 93.42 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **30.50 €** | 52.3 % | **24.1 %** | 30.59 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **22.90 €** | 36.4 % | **5.1 %** | 20.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **22.90 €** | 50.0 % | **15.6 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **20.50 €** | 39.4 % | **5.2 %** | 20.84 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.50 €** | 29.9 % | **11.6 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **60.50 €** | 32.6 % | **19.5 %** | 60.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **16.00 €** | 84.6 % | **31.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| WiFi router TP-Link Archer C50 AC1200, AP/router, 4x... | 35.00 € | **28.50 €** | 30.0 % | **5.9 %** | 26.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Puzdro PGYTECH For Mavic 3 Pro/Mavic 3 Classic/Mavic... | 38.50 € | **32.00 €** | 44.2 % | **19.8 %** | 32.25 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 323.50 € | **317.00 €** | 8.1 % | **5.9 %** | 317.46 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **32.50 €** | 41.6 % | **18.2 %** | 32.58 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **131.00 €** | 40.7 % | **34.2 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.50 €** | 21.7 % | **13.6 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **21.00 €** | 79.4 % | **38.7 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 52.7 % | **45.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **13.90 €** | 54.0 % | **7.1 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **13.90 €** | 84.7 % | **28.4 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **58.50 €** | 25.1 % | **13.3 %** | 58.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **17.50 €** | 77.8 % | **32.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 59.3 % | **14.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GECS6C70WPA | 477.50 € | **471.50 €** | 6.4 % | **5.1 %** | 413.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Epson WorkForce DS-70 | 124.50 € | **118.50 €** | 10.4 % | **5.1 %** | 115.31 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera EMEET SmartCam S800 | 94.00 € | **88.00 €** | 25.1 % | **17.1 %** | 88.22 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **28.90 €** | 43.7 % | **19.1 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 52.6 % | **43.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.50 €** | 33.8 % | **20.1 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **148.90 €** | 46.2 % | **40.6 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 51.2 % | **43.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **69.00 €** | 43.9 % | **32.7 %** | 69.17 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **69.00 €** | 28.7 % | **18.6 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 35.2 % | **11.3 %** | 27.23 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **169.50 €** | 46.8 % | **41.9 %** | 169.88 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **86.50 €** | 21.8 % | **14.2 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.50 €** | 29.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **16.90 €** | 55.2 % | **16.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **41.50 €** | 38.7 % | **22.1 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **17.00 €** | 65.2 % | **24.5 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 42.7 % | **35.2 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8000mAh 11.1V 100C 3S1P Lipo Battery... | 65.50 € | **60.00 €** | 23.9 % | **13.5 %** | 60.08 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **34.50 €** | 61.2 % | **39.1 %** | 34.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **34.50 €** | 28.3 % | **10.7 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **32.00 €** | 43.8 % | **23.0 %** | 32.33 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **69.50 €** | 55.5 % | **44.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 46.7 % | **22.7 %** | 27.27 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **27.00 €** | 38.9 % | **16.1 %** | 27.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **47.00 €** | 35.4 % | **21.7 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **107.50 €** | 30.8 % | **24.7 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 45.3 % | **19.8 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **24.50 €** | 40.2 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **22.00 €** | 70.5 % | **38.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.00 €** | 37.2 % | **22.3 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.00 €** | 35.9 % | **21.1 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.90 €** | 52.5 % | **46.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BM201SG3DBG | 286.00 € | **280.90 €** | 10.0 % | **8.1 %** | 281.00 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 37.6 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 38.3 % | **9.6 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 39.7 % | **28.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **17.50 €** | 74.4 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **17.50 €** | 74.4 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.50 €** | 30.9 % | **15.4 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 290.50 € | **285.50 €** | 59.8 % | **57.1 %** | 285.51 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX20U AX 1800 adaptér, 2,4... | 27.00 € | **22.00 €** | 32.0 % | **7.6 %** | 22.10 € | cena podľa najlacnejšieho iného predajcu |
| LiPo Gens ace G-Tech 4000mAh 2S2P 7,4V 60C batéria | 26.00 € | **21.00 €** | 40.4 % | **13.4 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **75.00 €** | 33.5 % | **25.2 %** | 75.08 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.50 €** | 22.6 % | **6.5 %** | 31.81 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **69.90 €** | 41.8 % | **32.5 %** | 69.99 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 55.90 € | **51.00 €** | 15.3 % | **5.2 %** | 36.64 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.50 €** | 25.1 % | **6.6 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **27.50 €** | 66.0 % | **41.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **25.00 €** | 45.7 % | **22.5 %** | 25.26 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **19.90 €** | 47.6 % | **19.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **105.00 €** | 29.4 % | **23.9 %** | 105.14 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **21.50 €** | 65.3 % | **35.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 41.1 % | **11.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 40.6 % | **11.1 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 132.00 € | **127.50 €** | 16.8 % | **12.8 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 39.8 % | **33.6 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.00 €** | 41.0 % | **5.2 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 62.9 % | **21.5 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.90 €** | 31.8 % | **11.1 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **88.00 €** | 35.9 % | **29.6 %** | 88.41 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 61.8 % | **38.8 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **23.00 €** | 39.8 % | **18.4 %** | 23.42 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **20.50 €** | 47.6 % | **23.0 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **40.50 €** | 28.8 % | **17.0 %** | 40.63 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 33.1 % | **9.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.00 €** | 30.6 % | **18.1 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **58.50 €** | 50.1 % | **40.5 %** | 58.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 88.50 € | **84.50 €** | 13.1 % | **7.9 %** | 84.51 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.50 € | **151.50 €** | 8.8 % | **6.0 %** | 151.61 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 62.50 € | **58.50 €** | 57.5 % | **47.4 %** | 58.63 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 170.00 € | **166.00 €** | 11.4 % | **8.8 %** | 166.21 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 367.00 € | **363.00 €** | 9.4 % | **8.2 %** | 363.21 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI601FMC | 221.50 € | **217.50 €** | 10.1 % | **8.1 %** | 217.80 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE RB493PW | 180.00 € | **176.00 €** | 8.9 % | **6.5 %** | 176.47 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.00 €** | 43.3 % | **14.7 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 41.8 % | **13.5 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **36.00 €** | 35.4 % | **21.9 %** | 36.46 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.90 €** | 40.5 % | **22.4 %** | 25.96 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **46.00 €** | 49.7 % | **38.5 %** | 46.17 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **86.00 €** | 45.8 % | **39.8 %** | 86.02 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **24.00 €** | 61.9 % | **40.4 %** | 24.46 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.50 €** | 21.7 % | **5.3 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **21.00 €** | 43.4 % | **22.4 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **21.00 €** | 62.7 % | **38.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **33.90 €** | 43.6 % | **30.1 %** | 33.92 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 212.00 € | **208.50 €** | 7.7 % | **6.0 %** | 208.65 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 43.6 % | **18.5 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.50 €** | 26.6 % | **15.6 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **138.00 €** | 37.6 % | **34.2 %** | 138.21 € | cena podľa najlacnejšieho iného predajcu |
| Držiak so studenou päticou Freewell pre Fuji X100VI ... | 39.90 € | **36.50 €** | 21.8 % | **11.4 %** | 36.88 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 34.90 € | **31.50 €** | 59.1 % | **43.6 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.00 €** | 41.2 % | **12.0 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.26 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **134.00 €** | 49.7 % | **46.0 %** | 134.33 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 35.9 % | **21.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 46.0 % | **39.3 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **24.50 €** | 56.9 % | **38.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 50.0 % | **43.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.50 €** | 37.9 % | **21.1 %** | 22.67 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **21.50 €** | 38.0 % | **20.6 %** | 21.58 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **21.50 €** | 50.7 % | **31.7 %** | 21.71 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.50 € | **13.50 €** | 43.2 % | **17.1 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 169.50 € | **166.50 €** | 18.5 % | **16.4 %** | 166.85 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 19.99 € | **17.00 €** | 58.4 % | **34.7 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **16.00 €** | 56.1 % | **31.7 %** | 16.12 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **16.00 €** | 59.8 % | **34.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 40.7 % | **17.1 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper ABS (sivý) | 17.43 € | **14.50 €** | 40.2 % | **16.6 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **15.00 €** | 58.4 % | **32.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 46.2 % | **20.3 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 47.0 % | **21.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.00 €** | 41.3 % | **14.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **114.00 €** | 36.4 % | **33.1 %** | 114.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **47.00 €** | 32.6 % | **25.3 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **47.00 €** | 32.3 % | **25.0 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **67.00 €** | 31.5 % | **26.4 %** | 67.21 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 60.0 % | **44.3 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.90 €** | 24.1 % | **9.5 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.90 €** | 44.0 % | **35.1 %** | 39.93 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **64.50 €** | 40.6 % | **35.1 %** | 64.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.00 €** | 23.0 % | **9.1 %** | 20.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **20.00 €** | 44.2 % | **27.9 %** | 20.40 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK TL-PA7027PKIT Powerline Kit | 62.00 € | **59.50 €** | 10.1 % | **5.7 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 28.00 € | **25.50 €** | 30.7 % | **19.0 %** | 25.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **12.00 €** | 54.3 % | **27.7 %** | 12.16 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 14.8V 30C 4S1P Lipo ... | 26.00 € | **23.50 €** | 20.9 % | **9.3 %** | 23.87 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **13.90 €** | 52.6 % | **29.3 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.50 €** | 43.7 % | **25.8 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **17.50 €** | 59.5 % | **39.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.6 % | **10.1 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.0 % | **9.6 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **15.00 €** | 60.3 % | **38.0 %** | 15.33 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.50 €** | 44.9 % | **25.3 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **95.00 €** | 36.8 % | **33.5 %** | 95.38 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.50 €** | 34.1 % | **12.8 %** | 12.57 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 46.4 % | **23.2 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 59.6 % | **34.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **24.90 €** | 26.3 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **166.90 €** | 46.9 % | **45.0 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **47.50 €** | 48.9 % | **42.3 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **47.50 €** | 43.9 % | **37.5 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **47.50 €** | 46.9 % | **40.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **25.00 €** | 36.8 % | **25.9 %** | 25.37 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 20.3 % | **10.1 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.90 € | **7.80 €** | 36.9 % | **7.8 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 46.4 % | **42.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 8.80 € | **6.80 €** | 71.2 % | **32.3 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.90 € | **60.90 €** | 9.1 % | **5.6 %** | 50.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM C200 Pro (čierny) | 130.00 € | **128.00 €** | 13.7 % | **12.0 %** | 128.01 € | cena podľa najlacnejšieho iného predajcu |
| Colmi P20 Smartwatch (Gold) | 31.50 € | **29.50 €** | 19.6 % | **12.0 %** | 29.56 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 361.00 € | **359.00 €** | 9.2 % | **8.6 %** | 359.10 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 144.00 € | **142.00 €** | 7.3 % | **5.8 %** | 142.18 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 18.50 € | **16.50 €** | 21.0 % | **7.9 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na polievanie kvetín v črepníkoch RainPoint ... | 27.50 € | **25.50 €** | 51.2 % | **40.2 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic GAUSS TAPE ECHO | 62.50 € | **60.50 €** | 19.8 % | **16.0 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie GoPro Hero 13/12/11/10/9/8/MAX | 24.00 € | **22.00 €** | 49.2 % | **36.7 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 27.7 % | **15.0 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 57.3 % | **41.7 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **17.00 €** | 55.6 % | **39.5 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.00 €** | 34.0 % | **20.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **15.50 €** | 28.0 % | **13.8 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **35.50 €** | 43.8 % | **36.5 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Capella Magnet Case Galaxy S25 U | 36.90 € | **35.00 €** | 11.0 % | **5.3 %** | 20.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.00 €** | 34.1 % | **17.3 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 56.7 % | **35.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **53.00 €** | 38.6 % | **34.0 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **22.90 €** | 36.2 % | **26.8 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny zvuku Habotest HT602B | 25.12 € | **23.50 €** | 23.8 % | **15.8 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **23.00 €** | 43.5 % | **34.1 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 37.4 % | **27.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.00 € | **34.50 €** | 10.3 % | **5.7 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje BMX201M2BG | 170.50 € | **169.00 €** | 10.1 % | **9.1 %** | 169.10 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **178.90 €** | 45.0 % | **43.8 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V69 smartwatch (black) | 35.50 € | **34.00 €** | 15.4 % | **10.5 %** | 34.15 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 430.00 € | **428.50 €** | 14.7 % | **14.3 %** | 428.69 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-M, 50 m, viacfarebná... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB453138 | 31.00 € | **29.50 €** | 13.4 % | **7.9 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 43.8 % | **33.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 45.2 % | **34.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **17.50 €** | 26.7 % | **16.9 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 48.2 % | **36.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6401BCE | 181.90 € | **180.50 €** | 10.0 % | **9.2 %** | 180.70 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 49.2 % | **43.4 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetický Lightning kábel, USB 2.0 A konekt... | 4.20 € | **3.00 €** | 61.1 % | **15.0 %** | 3.09 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **248.90 €** | 43.6 % | **42.9 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 49.1 % | **42.5 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **63.50 €** | 34.7 % | **32.4 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 51.5 % | **44.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 55.50 € | **54.50 €** | 10.3 % | **8.3 %** | 54.53 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 55.50 € | **54.50 €** | 30.2 % | **27.8 %** | 54.53 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 55.50 € | **54.50 €** | 37.6 % | **35.1 %** | 54.53 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 376.50 € | **375.50 €** | 5.5 % | **5.2 %** | 375.53 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 104.50 € | **103.50 €** | 10.7 % | **9.6 %** | 103.58 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 290 MK II 200/250 Ohm | 432.90 € | **431.90 €** | 28.0 % | **27.7 %** | 432.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 209.90 € | **208.90 €** | 37822.3 % | **37641.6 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A35 5G FIXOP3-1262-BK | 12.00 € | **11.00 €** | 24.8 % | **14.4 %** | 11.12 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 34.50 € | **33.50 €** | 48.2 % | **43.9 %** | 33.80 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BHI681EB | 112.00 € | **111.00 €** | 10.1 % | **9.1 %** | 111.36 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 11.50 € | **10.50 €** | 59.8 % | **45.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 15.50 € | **14.50 €** | 12.3 % | **5.1 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.50 € | **11.50 €** | 15.6 % | **6.4 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA80XE AX 3000, WiFi ... | 23.50 € | **22.50 €** | 14.8 % | **9.9 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 59.00 € | **58.00 €** | 6.9 % | **5.1 %** | 58.44 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 Silver | 28.00 € | **27.00 €** | 18.1 % | **13.9 %** | 27.46 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Safe'Tea KO261130 | 28.00 € | **27.00 €** | 16.6 % | **12.5 %** | 27.47 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 316.00 € | **315.00 €** | 5.8 % | **5.5 %** | 315.50 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped DeerRun S500 Pro (čierny) | 326.00 € | **325.00 €** | 52.2 % | **51.8 %** | 325.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **59.00 €** | 31.1 % | **29.0 %** | 59.08 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **156.90 €** | 46.2 % | **45.3 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 49.0 % | **41.1 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **16.50 €** | 46.8 % | **39.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110CMP 2x GLAN, 8x LAN s P... | 37.90 € | **37.00 €** | 8.8 % | **6.3 %** | 37.10 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 263.90 € | **263.00 €** | 23.4 % | **23.0 %** | 263.12 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **14.00 €** | 51.0 % | **42.3 %** | 14.29 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 42.9 % | **41.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 52.3 % | **51.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.50 €** | 26.6 % | **18.3 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 41.5 % | **41.0 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 517.50 € | **516.90 €** | 9.5 % | **9.3 %** | 516.99 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.50 € | **37.90 €** | 20.6 % | **18.7 %** | 37.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 42.50 € | **41.90 €** | 43.8 % | **41.8 %** | 41.96 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 188.50 € | **187.90 €** | 10.6 % | **10.3 %** | 187.93 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal N1230510 | 13.00 € | **12.50 €** | 12.2 % | **7.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 23.50 € | **23.00 €** | 10.0 % | **7.7 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 468.00 € | **467.50 €** | 11.7 % | **11.6 %** | 467.55 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 37.00 € | **36.50 €** | 61.4 % | **59.2 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 15.7 % | **12.6 %** | 18.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.50 € | **25.00 €** | 36.9 % | **34.2 %** | 25.16 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 217.50 € | **217.00 €** | 17.7 % | **17.4 %** | 217.17 € | cena podľa najlacnejšieho iného predajcu |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 108.50 € | **108.00 €** | 13.2 % | **12.7 %** | 108.19 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.50 € | **142.00 €** | 7.3 % | **7.0 %** | 142.20 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9268WK | 35.00 € | **34.50 €** | 16.9 % | **15.2 %** | 34.70 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 133.50 € | **133.00 €** | 7.5 % | **7.1 %** | 133.26 € | cena podľa najlacnejšieho iného predajcu |
| Teplovzdušný ventilátor TEESA TSA8027 | 15.00 € | **14.50 €** | 18.3 % | **14.3 %** | 14.79 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 20.50 € | **20.00 €** | 17.3 % | **14.4 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet Flip AI 4K | 126.00 € | **125.50 €** | 14.9 % | **14.5 %** | 125.79 € | cena podľa najlacnejšieho iného predajcu |
| ETA Moneto II 4453 90000 | 87.50 € | **87.00 €** | 6.2 % | **5.6 %** | 87.30 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA RX-V6A Black | 684.50 € | **684.00 €** | 10.0 % | **9.9 %** | 684.31 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA20FMW7NG Candy Wave 600 | 133.50 € | **133.00 €** | 7.5 % | **7.1 %** | 133.34 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 78.00 € | **77.50 €** | 18.0 % | **17.2 %** | 77.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 32.50 € | **32.00 €** | 19.0 % | **17.2 %** | 32.37 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 336.50 € | **336.00 €** | 23.3 % | **23.1 %** | 336.37 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 341.00 € | **340.50 €** | 24.6 % | **24.4 %** | 340.89 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 62.00 € | **61.50 €** | 89.5 % | **88.0 %** | 61.89 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz s pumpou, 4 ks | 36.50 € | **36.00 €** | 11.4 % | **9.9 %** | 36.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušák Comfort Tower 420 | 48.50 € | **48.00 €** | 11.9 % | **10.8 %** | 48.39 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 20.00 € | **19.50 €** | 13.9 % | **11.1 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.50 € | **18.00 €** | 15.1 % | **12.0 %** | 18.39 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 500 ml, oceľovo šedá | 14.00 € | **13.50 €** | 11.9 % | **7.9 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 32.50 € | **32.00 €** | 13.7 % | **11.9 %** | 32.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 314.00 € | **313.50 €** | 16.9 % | **16.7 %** | 313.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 469.00 € | **468.50 €** | 8.4 % | **8.3 %** | 468.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 923.00 € | **922.50 €** | 17.3 % | **17.2 %** | 922.89 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 930.50 € | **930.00 €** | 9.9 % | **9.9 %** | 930.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.50 € | **17.00 €** | 16.3 % | **13.0 %** | 17.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 38 Ah  Victron Energy AGM Sup... | 125.00 € | **124.50 €** | 12.6 % | **12.1 %** | 124.89 € | cena podľa najlacnejšieho iného predajcu |
| Kaon MZ-52, satelitní přijímač Skylink | 61.50 € | **61.00 €** | 10.1 % | **9.2 %** | 61.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 606.00 € | **605.50 €** | 5.5 % | **5.4 %** | 605.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 223.50 € | **223.00 €** | 18.4 % | **18.1 %** | 223.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 39.00 € | **38.50 €** | 43.9 % | **42.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 39.50 € | **39.00 €** | 7.7 % | **6.3 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Girmi SB4301 | 19.50 € | **19.00 €** | 15.6 % | **12.7 %** | 19.40 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 25.00 € | **24.50 €** | 26.2 % | **23.7 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA510E 10G PCIe, Full... | 55.50 € | **55.00 €** | 6.1 % | **5.1 %** | 55.40 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **225.00 €** | 45.0 % | **44.6 %** | 225.42 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 435C | 17.50 € | **17.00 €** | 35.1 % | **31.3 %** | 17.48 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin L Steel | 28.50 € | **28.00 €** | 10.4 % | **8.5 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 10.50 € | **10.00 €** | 17.9 % | **12.3 %** | 10.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 63.50 € | **63.00 €** | 17.0 % | **16.0 %** | 63.49 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 15.50 € | **15.00 €** | 10.8 % | **7.3 %** | 15.49 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.50 € | **35.00 €** | 16.3 % | **14.7 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.50 € | **33.00 €** | 18.6 % | **16.9 %** | 33.49 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 321.50 € | **321.00 €** | 13.5 % | **13.3 %** | 321.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada stavebních vozidel s příslušenstvím 26578 | 24.50 € | **24.00 €** | 21.1 % | **18.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.50 € | **14.00 €** | 22.4 % | **18.2 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1016501 | 29.50 € | **29.00 €** | 8.9 % | **7.1 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 125.50 € | **125.00 €** | 9.4 % | **9.0 %** | 125.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0027 | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 15.50 € | **15.00 €** | 27.8 % | **23.7 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 19.50 € | **19.00 €** | 22.2 % | **19.1 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.50 € | **24.00 €** | 17.2 % | **14.8 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **18.50 €** | 33.3 % | **30.0 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 39.2 % | **38.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **16.50 €** | 42.8 % | **39.3 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 158.90 € | **158.50 €** | 11.1 % | **10.8 %** | 158.79 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 108.90 € | **108.50 €** | 13.0 % | **12.5 %** | 108.79 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK TL-MR150 4G LTE WiFi N Router | 69.90 € | **69.50 €** | 10.3 % | **9.6 %** | 69.79 € | cena podľa najlacnejšieho iného predajcu |
| Tefal KI883D10 | 105.90 € | **105.50 €** | 9.7 % | **9.3 %** | 105.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.90 € | **116.50 €** | 17.9 % | **17.5 %** | 116.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 95.90 € | **95.50 €** | 16.4 % | **15.9 %** | 95.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 142.90 € | **142.50 €** | 7.5 % | **7.2 %** | 142.90 € | cena podľa najlacnejšieho iného predajcu |
| Turistická rybářská židle, skládací s opěradlem | 15.90 € | **15.50 €** | 42.5 % | **38.9 %** | 15.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **10.50 €** | 31.1 % | **26.3 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI držák do auta s Magsafe AMS06BK | 13.90 € | **13.50 €** | 9.2 % | **6.0 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) | 40.90 € | **40.50 €** | 11.3 % | **10.2 %** | 40.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.90 € | **24.50 €** | 16.7 % | **14.8 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 47.90 € | **47.50 €** | 21.5 % | **20.5 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 34.90 € | **34.50 €** | 34.0 % | **32.5 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 29.90 € | **29.50 €** | 14.8 % | **13.3 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **37.50 €** | 31.7 % | **30.3 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 42.90 € | **42.50 €** | 38.1 % | **36.8 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **16.00 €** | 28.7 % | **25.6 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **14.00 €** | 42.5 % | **39.0 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **33.00 €** | 33.0 % | **31.8 %** | 33.29 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **32.00 €** | 33.2 % | **32.0 %** | 32.17 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 29.2 % | **26.0 %** | 11.26 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **45.90 €** | 33.0 % | **32.3 %** | 45.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.90 €** | 47.4 % | **46.6 %** | 17.96 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR C3 Carrying Case for Quest 3 | 47.00 € | **46.90 €** | 34.7 % | **34.4 %** | 46.96 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 20.00 € | **19.90 €** | 39.3 % | **38.6 %** | 19.98 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 53.00 € | **52.90 €** | 9.5 % | **9.3 %** | 52.99 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 42.00 € | **41.90 €** | 21.0 % | **20.8 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-838 5G | 23.00 € | **22.90 €** | 30.4 % | **29.8 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 46.00 € | **45.90 €** | 29.5 % | **29.2 %** | 46.00 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 38.00 € | **37.90 €** | 8.0 % | **7.7 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.30 € | **9.20 €** | 18.5 % | **17.2 %** | 9.30 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 8.80 € | **8.70 €** | 24.4 % | **23.0 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 17.00 € | **16.90 €** | 15.9 % | **15.2 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 21.00 € | **20.90 €** | 45.9 % | **45.2 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 19.00 € | **18.90 €** | 21.4 % | **20.8 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 31.00 € | **30.90 €** | 52.6 % | **52.1 %** | 31.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 34.00 € | **33.90 €** | 14.9 % | **14.6 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 26.00 € | **25.90 €** | 7.1 % | **6.7 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.00 € | **21.90 €** | 28.9 % | **28.3 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.70 € | **6.60 €** | 38.3 % | **36.2 %** | 6.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.50 € | **9.40 €** | 28.3 % | **26.9 %** | 9.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.30 € | **4.20 €** | 52.0 % | **48.5 %** | 4.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.00 € | **10.90 €** | 23.5 % | **22.4 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.90 € | **9.80 €** | 37.4 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 13.00 € | **12.90 €** | 29.0 % | **28.1 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 9.90 € | **9.80 €** | 12.1 % | **11.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 12.00 € | **11.90 €** | 76.1 % | **74.6 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 12.00 € | **11.90 €** | 31.3 % | **30.2 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.00 € | **11.90 €** | 43.1 % | **41.9 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.00 € | **11.90 €** | 20.6 % | **19.6 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener pre motocykle BMW ANCEL MT300 | 160.00 € | **159.90 €** | 22.7 % | **22.6 %** | 159.97 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM011 Výrobník ľadu, 1,2 l, 12 kg (čierny) | 75.00 € | **74.90 €** | 7.3 % | **7.1 %** | 74.98 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 201.00 € | **200.90 €** | 15.9 % | **15.9 %** | 200.98 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 201.00 € | **200.90 €** | 15.9 % | **15.9 %** | 200.98 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 144.00 € | **143.90 €** | 49.8 % | **49.7 %** | 144.00 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH 6756WO | 122.00 € | **121.90 €** | 7.8 % | **7.7 %** | 122.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 215.00 € | **214.90 €** | 11.5 % | **11.4 %** | 215.00 € | cena podľa najlacnejšieho iného predajcu |

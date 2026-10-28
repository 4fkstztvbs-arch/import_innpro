# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-28

Vstup: `premiumstore-sk_2026-10-28_09-08.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6119**
- Návrh **zvýšiť** cenu: **318** produktov
- Návrh **znížiť** cenu: **1385** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4416** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **48**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **332**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (318)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **956.90 €** | 6.0 % | **43.8 %** | 957.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, strieborná) | 272.50 € | **416.90 €** | 23.9 % | **89.5 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 813.00 € | **943.00 €** | 15.4 % | **33.8 %** | 943.49 € | cena podľa najlacnejšieho iného predajcu |
| HDD 3.5" 6TB 256MB Seagate SKYHAWK pro kamerové syst... | 316.90 € | **410.00 €** | 5.4 % | **36.4 %** | 410.03 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 28.0 % | **44.3 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **888.90 €** | 29.5 % | **43.8 %** | 889.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP800IIIV | 311.90 € | **387.00 €** | 15.0 % | **42.7 %** | 387.46 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Pro | 749.50 € | **820.50 €** | 15.0 % | **25.9 %** | 820.70 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 344.50 € | **415.50 €** | 15.0 % | **38.7 %** | 415.73 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **312.00 €** | 10.8 % | **43.0 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 40.8 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **548.50 €** | 6.0 % | **19.8 %** | 548.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **305.90 €** | 15.1 % | **44.0 %** | 305.94 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener REVOPOINT Mini 2 – edícia Advanced | 952.90 € | **1009.00 €** | 14.9 % | **21.7 %** | 1009.17 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 289.90 € | **341.00 €** | 12.5 % | **32.3 %** | 341.19 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 7 | 284.00 € | **333.50 €** | 13.7 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 304.50 € | **353.90 €** | 15.0 % | **33.6 %** | 353.99 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 48.6 % | **72.6 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 49.1 % | **73.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 49.1 % | **72.2 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 604.00 € | **650.00 €** | 15.0 % | **23.8 %** | 650.46 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **818.90 €** | 35.5 % | **43.2 %** | 819.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon P1 | 606.00 € | **649.50 €** | 9.3 % | **17.2 %** | 649.81 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 742.50 € | **784.00 €** | 15.0 % | **21.4 %** | 784.04 € | cena podľa najlacnejšieho iného predajcu |
| Mobilná dokovacia stanica VITURE Pro | 157.50 € | **196.90 €** | 14.9 % | **43.6 %** | 197.00 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped MERACH MR-S28B1 | 516.90 € | **556.00 €** | 15.0 % | **23.7 %** | 556.46 € | cena podľa najlacnejšieho iného predajcu |
| NAS server TERRAMASTER F2-425 Plus s procesorom Inte... | 495.50 € | **534.50 €** | 15.0 % | **24.0 %** | 534.88 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **349.00 €** | 15.0 % | **28.0 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD NAS - súborový server s procesoro... | 655.50 € | **691.00 €** | 15.0 % | **21.2 %** | 691.50 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **327.00 €** | 23.8 % | **38.2 %** | 327.42 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 29.5 % | **45.1 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 700.00 € | **734.00 €** | 15.4 % | **21.0 %** | 734.42 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT705 | 291.00 € | **324.90 €** | 15.8 % | **29.3 %** | 325.00 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F4 SSD NAS - súborový server s procesoro... | 474.90 € | **508.50 €** | 15.0 % | **23.2 %** | 508.71 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 208.50 € | **241.00 €** | 15.1 % | **33.0 %** | 241.14 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 141.50 € | **172.00 €** | 7.4 % | **30.6 %** | 172.38 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **272.90 €** | 15.1 % | **28.5 %** | 273.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.50 € | **83.50 €** | 15.3 % | **73.4 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 6.3 % | **32.1 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **219.00 €** | 6.1 % | **21.3 %** | 219.13 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **222.00 €** | 6.1 % | **21.1 %** | 222.17 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552320 Crocodile 5G LTE700 domovní zesilovač | 39.50 € | **65.00 €** | 18.5 % | **95.0 %** | 65.08 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **294.00 €** | 6.2 % | **15.8 %** | 294.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 395.50 € | **419.50 €** | 15.0 % | **22.0 %** | 419.71 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality Halot X1 Combo | 500.00 € | **524.00 €** | 13.8 % | **19.3 %** | 524.50 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **218.00 €** | 6.2 % | **19.0 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 369.00 € | **391.90 €** | 7.7 % | **14.4 %** | 391.99 € | cena podľa najlacnejšieho iného predajcu |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 27.00 € | **49.00 €** | 9.1 % | **98.0 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2404 | 109.00 € | **129.00 €** | 16.6 % | **38.0 %** | 129.09 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z18 W - prenosný monitor s dvoma 18-palcovým... | 308.90 € | **328.90 €** | 7.4 % | **14.3 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer U-PHORIA STUDIO PRO recording/podcast boundle | 139.00 € | **158.90 €** | 15.0 % | **31.5 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T14 | 278.90 € | **298.50 €** | 15.0 % | **23.1 %** | 298.67 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 43.50 € | **62.50 €** | 15.0 % | **65.2 %** | 62.58 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 923.50 € | **941.90 €** | 26.5 % | **29.1 %** | 941.97 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO SpaceWalk 5 (čierny) | 293.00 € | **310.00 €** | 15.0 % | **21.6 %** | 310.33 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet HUION Kamvas Pad 12 KP1202 | 461.00 € | **477.50 €** | 15.0 % | **19.1 %** | 477.71 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 77.50 € | **94.00 €** | 17.2 % | **42.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 Pro s... | 73.90 € | **89.50 €** | 15.0 % | **39.3 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) | 43.50 € | **58.90 €** | 15.3 % | **56.1 %** | 58.92 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 48.50 € | **63.50 €** | 9.7 % | **43.6 %** | 63.63 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Dávkovač mýdla Gel bílý | 26.90 € | **41.50 €** | 11.0 % | **71.3 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Slnečník GODOX UB-L2-60 (veľký) | 33.90 € | **48.50 €** | 15.2 % | **64.8 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 33.5 % | **65.0 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 255.00 € | **269.50 €** | 14.9 % | **21.4 %** | 269.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 37.7 % | **69.7 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Spitz Plus 4G LTE | 200.50 € | **214.90 €** | 15.0 % | **23.2 %** | 215.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 190.50 € | **204.00 €** | 17.5 % | **25.8 %** | 204.10 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ6 Ultra (čierny) | 108.50 € | **121.00 €** | 11.1 % | **23.9 %** | 121.21 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 27.90 € | **40.00 €** | 14.9 % | **64.7 %** | 40.47 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V100 TTL pre Nikon | 338.50 € | **350.50 €** | 9.3 % | **13.1 %** | 350.90 € | cena podľa najlacnejšieho iného predajcu |
| Rozbočovač NEEWER 4-IN-1 so 4 portmi USB-C | 47.90 € | **59.50 €** | 15.1 % | **43.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 298.50 € | **309.50 €** | 7.1 % | **11.1 %** | 309.57 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 40.00 € | **50.50 €** | 14.5 % | **44.5 %** | 50.69 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht Tectalk Worker 3, hard case 4pc | 211.50 € | **222.00 €** | 10.2 % | **15.7 %** | 222.21 € | cena podľa najlacnejšieho iného predajcu |
| MSI PRO MP273 E14A | 87.50 € | **98.00 €** | 10.2 % | **23.4 %** | 98.23 € | cena podľa najlacnejšieho iného predajcu |
| MSI Cyborg 15 (A13UC-2218CZ) | 833.90 € | **844.00 €** | 10.0 % | **11.4 %** | 844.13 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 Pro AI s vyme... | 73.90 € | **84.00 €** | 15.0 % | **30.8 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Guma posilovací REBEL ACTIVE RBA-3000-S4 Latexová sa... | 17.50 € | **27.50 €** | 21.5 % | **90.9 %** | 27.58 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600Bi s dvojfare... | 126.00 € | **136.00 €** | 14.9 % | **24.0 %** | 136.21 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1855DB 2.0 (čierne) | 133.90 € | **143.50 €** | 15.1 % | **23.3 %** | 143.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **146.90 €** | 49.6 % | **60.0 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE FN4172CW | 325.50 € | **335.00 €** | 5.0 % | **8.1 %** | 335.42 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 6.9 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **124.00 €** | 6.2 % | **14.6 %** | 124.42 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 48.0 % | **81.4 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 56.7 % | **92.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.00 €** | 6.3 % | **16.8 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá EDIFIER W830NB (slonovinová farba) | 62.00 € | **70.50 €** | 14.8 % | **30.5 %** | 70.88 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **78.50 €** | 6.7 % | **18.8 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6182PS4 | 331.00 € | **338.90 €** | 10.0 % | **12.6 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **136.90 €** | 35.4 % | **43.5 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 772.00 € | **779.50 €** | 18.3 % | **19.5 %** | 779.88 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 35.1 % | **45.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 78.50 € | **85.50 €** | 11.4 % | **21.3 %** | 85.75 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 20.1 % | **33.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Kit Neewer NK800 two softboxes + bulbs RGB 24W 2700-... | 87.00 € | **93.90 €** | 14.7 % | **23.9 %** | 94.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC728D10 | 179.90 € | **186.50 €** | 10.0 % | **14.0 %** | 186.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 143.50 € | **149.90 €** | 15.0 % | **20.2 %** | 149.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 45.5 % | **79.4 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **55.00 €** | 6.1 % | **19.3 %** | 55.08 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová vesta REBEL ACTIVE RBA-2525-15 15kg nastavi... | 34.90 € | **40.90 €** | 19.1 % | **39.6 %** | 40.96 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 206.90 € | **212.90 €** | 37280.3 % | **38364.3 %** | 213.00 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE MO 20 E1W | 59.00 € | **65.00 €** | 9.0 % | **20.1 %** | 65.49 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 98.00 € | **103.90 €** | 15.0 % | **22.0 %** | 103.96 € | cena podľa najlacnejšieho iného predajcu |
| Fitness sada na pilates REBEL ACTIVE RBA-3069-PK mul... | 41.90 € | **47.50 €** | 10.6 % | **25.4 %** | 47.54 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus DC1 mini orbitrek | 161.00 € | **166.50 €** | 20.0 % | **24.1 %** | 166.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 34.50 € | **40.00 €** | 9.4 % | **26.8 %** | 40.33 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 169.50 € | **174.90 €** | 15.1 % | **18.8 %** | 174.91 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 122.50 € | **127.90 €** | 10.4 % | **15.3 %** | 127.96 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5474B | 79.90 € | **85.00 €** | 5.0 % | **11.7 %** | 85.20 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (červený) | 229.50 € | **234.50 €** | 14.9 % | **17.4 %** | 234.58 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (čierny a... | 229.50 € | **234.50 €** | 14.9 % | **17.4 %** | 234.58 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E1WYHSK2 | 65.50 € | **70.50 €** | 5.8 % | **13.9 %** | 70.58 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-2 Oculink | 90.00 € | **95.00 €** | 15.0 % | **21.4 %** | 95.21 € | cena podľa najlacnejšieho iného predajcu |
| Samsung SWA-9500S/EN | 219.00 € | **224.00 €** | 10.0 % | **12.6 %** | 224.21 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5RCNA375HXB1 HarvestFresh | 353.50 € | **358.50 €** | 10.1 % | **11.7 %** | 358.74 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH1833E0 | 145.50 € | **150.00 €** | 8.3 % | **11.7 %** | 150.04 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá s tlačidlami... | 34.50 € | **39.00 €** | 15.3 % | **30.3 %** | 39.04 € | cena podľa najlacnejšieho iného predajcu |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 77.00 € | **81.50 €** | 14.6 % | **21.3 %** | 81.67 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXAP60E | 94.50 € | **99.00 €** | 11.3 % | **16.6 %** | 99.26 € | cena podľa najlacnejšieho iného predajcu |
| Aroma difuzer Zortiva 28221 150ml se světelným efekt... | 20.00 € | **24.50 €** | 12.8 % | **38.1 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ANYCUBIC Kobra S1 ACE 2 Pro Combo | 466.50 € | **471.00 €** | 5.1 % | **6.1 %** | 471.49 € | cena podľa najlacnejšieho iného predajcu |
| Krytky objektívov Puluz pre kameru Insta360 X5 (nacv... | 27.50 € | **32.00 €** | 14.9 % | **33.7 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO6164EA | 140.50 € | **144.90 €** | 8.3 % | **11.7 %** | 144.94 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 16.50 € | **20.90 €** | 18.0 % | **49.4 %** | 20.98 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 45.50 € | **49.90 €** | 10.7 % | **21.4 %** | 50.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 41.6 % | **48.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **141.50 €** | 15.9 % | **19.4 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61645 Zatáčka 3/45 (4ks) | 23.50 € | **27.50 €** | 11.6 % | **30.6 %** | 27.59 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 177.00 € | **181.00 €** | 7.5 % | **9.9 %** | 181.14 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 177.00 € | **181.00 €** | 7.5 % | **9.9 %** | 181.14 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec 6600 Turbo Convection Plus | 42.50 € | **46.50 €** | 10.8 % | **21.2 %** | 46.67 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot2 V1.0 | 172.50 € | **176.50 €** | 5.9 % | **8.3 %** | 176.67 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus A8 electric pump | 33.50 € | **37.50 €** | 14.6 % | **28.3 %** | 37.77 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-90 90W Power De... | 23.00 € | **27.00 €** | 14.1 % | **33.9 %** | 27.38 € | cena podľa najlacnejšieho iného predajcu |
| Tester baterií UNI-T UT677C s diagnostikou | 534.00 € | **538.00 €** | 14.9 % | **15.8 %** | 538.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 14.00 € | **17.90 €** | 5.1 % | **34.4 %** | 17.94 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.50 €** | 6.5 % | **13.9 %** | 55.58 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 31.2 % | **43.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-1200-12 UPS 1200W 12V čist... | 204.00 € | **207.50 €** | 3.3 % | **5.0 %** | 205.15 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Superfire Y25 | 11.50 € | **15.00 €** | 15.7 % | **50.9 %** | 15.02 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S100 na detekciu úniku | 97.50 € | **101.00 €** | 15.2 % | **19.3 %** | 101.21 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátor Lipo Gens Ace G-Tech 3300mAh 22,2V 60C 6S... | 67.50 € | **71.00 €** | 15.2 % | **21.2 %** | 71.38 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P11pro | 195.00 € | **198.50 €** | 15.0 % | **17.0 %** | 198.88 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R980T 2.0 (čierne) | 66.50 € | **69.90 €** | 15.3 % | **21.2 %** | 69.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **78.90 €** | 6.5 % | **11.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 34.1 % | **48.9 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta GZ5436E0 | 295.90 € | **299.00 €** | 10.1 % | **11.2 %** | 299.50 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 45C 3S1P lipo battery ... | 53.90 € | **57.00 €** | 15.0 % | **21.6 %** | 57.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu TPU Silk (čierny) | 17.90 € | **21.00 €** | 15.0 % | **35.0 %** | 21.23 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 180.90 € | **184.00 €** | 15.1 % | **17.1 %** | 184.42 € | cena podľa najlacnejšieho iného predajcu |
| Swan OS-10 Black | 220.90 € | **223.90 €** | 10.2 % | **11.7 %** | 223.92 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 136.00 € | **139.00 €** | 19.8 % | **22.5 %** | 139.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 15.50 € | **18.50 €** | 15.5 % | **37.9 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 24.00 € | **27.00 €** | 5.5 % | **18.7 %** | 27.09 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 22.50 € | **25.50 €** | 11.1 % | **26.0 %** | 25.67 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér KRUGER & MATZ KM0391 (HUB) USB-C na HDMI / 2... | 24.50 € | **27.50 €** | 5.1 % | **18.0 %** | 27.69 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 169.50 € | **172.50 €** | 9.5 % | **11.4 %** | 172.69 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT520III TTL | 62.50 € | **65.50 €** | 15.2 % | **20.7 %** | 65.75 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-PA0007 Pozadie | 39.50 € | **42.50 €** | 15.5 % | **24.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0007 Pozadie | 39.50 € | **42.50 €** | 15.5 % | **24.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Rozšiřující set 3 | 26.50 € | **29.50 €** | 11.1 % | **23.7 %** | 29.82 € | cena podľa najlacnejšieho iného predajcu |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 45.00 € | **48.00 €** | 14.8 % | **22.5 %** | 48.38 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 166.50 € | **169.50 €** | 16.4 % | **18.5 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| Mlýnek na kávu Ruhhy 26219 | 13.00 € | **16.00 €** | 22.0 % | **50.2 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Petoneer NutriVue smart food dispenser (with stainle... | 70.00 € | **72.90 €** | 14.6 % | **19.3 %** | 72.96 € | cena podľa najlacnejšieho iného predajcu |
| Termostat MOES ZHT-SR-GB s protokolom ZigBee pre ele... | 54.00 € | **56.90 €** | 15.1 % | **21.3 %** | 57.00 € | cena podľa najlacnejšieho iného predajcu |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **38.90 €** | 15.0 % | **24.3 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 26.5 % | **29.3 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| Tesla MX301BX | 22.90 € | **25.50 €** | 11.8 % | **24.4 %** | 25.58 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér Puluz pre DJI OSMO Pocket 3 s 1/4" studenou ... | 16.90 € | **19.50 €** | 15.6 % | **33.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61641 SkokánekGO/GO+/D143 | 13.90 € | **16.50 €** | 10.3 % | **30.9 %** | 16.74 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 12.00 € | **14.50 €** | 27.7 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| Auto GO/GO+ 64197 Ferrari 488 GT3 Red Bu | 15.50 € | **18.00 €** | 10.7 % | **28.6 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 312.50 € | **315.00 €** | 16.4 % | **17.3 %** | 315.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Melobuds A30 (čierne) | 29.00 € | **31.50 €** | 14.7 % | **24.6 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie GODOX FL15Bi | 97.50 € | **100.00 €** | 16.8 % | **19.8 %** | 100.17 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6401BCE | 193.00 € | **195.50 €** | 16.7 % | **18.3 %** | 195.67 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61600 GO/D143 Rozšiřující set 1 | 15.50 € | **18.00 €** | 10.7 % | **28.6 %** | 18.29 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu PETG (slonovinová farba) | 11.00 € | **13.50 €** | 14.5 % | **40.5 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **35.00 €** | 7.2 % | **15.4 %** | 35.46 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na riadidlá PXN-A10 | 74.50 € | **77.00 €** | 9.3 % | **13.0 %** | 77.50 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na projektor Blitzwolf BW-VF5 | 19.50 € | **21.90 €** | 5.6 % | **18.6 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi spínač na žalúzie Meross MRS100MA(... | 21.50 € | **23.90 €** | 13.7 % | **26.3 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 9.80 € | **12.00 €** | 13.3 % | **38.8 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L Automatic Pet Feeder Button Version (White) | 36.90 € | **39.00 €** | 15.4 % | **22.0 %** | 39.04 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Ani B-4689 bílá | 17.90 € | **20.00 €** | 6.0 % | **18.4 %** | 20.27 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 44.4 % | **49.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall RFC-676 PRO strojček na strihanie domácich ... | 34.90 € | **37.00 €** | 15.1 % | **22.0 %** | 37.42 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma na riasy ANLAN 08-AJMJ31-02A | 17.90 € | **20.00 €** | 25.1 % | **39.8 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na okolie očí a pier EMS ANLAN 08-A... | 17.90 € | **20.00 €** | 22.4 % | **36.8 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B2-EU | 238.90 € | **241.00 €** | 16.0 % | **17.0 %** | 241.14 € | cena podľa najlacnejšieho iného predajcu |
| Budík Blitzwolf BW-FW10 s nabíjačkou 2xUSB-A, 4xUSB-... | 53.00 € | **55.00 €** | 15.0 % | **19.4 %** | 55.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 10.50 € | **12.50 €** | 15.4 % | **37.3 %** | 12.55 € | cena podľa najlacnejšieho iného predajcu |
| Behringer MU1000 music stand | 26.50 € | **28.50 €** | 5.1 % | **13.0 %** | 28.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 14.50 € | **16.50 €** | 21.3 % | **38.0 %** | 16.61 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK418ECB4 | 343.50 € | **345.50 €** | 10.8 % | **11.5 %** | 345.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 17.00 € | **19.00 €** | 22.7 % | **37.2 %** | 19.14 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam S600L | 69.00 € | **71.00 €** | 11.1 % | **14.3 %** | 71.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.50 € | **20.50 €** | 29.8 % | **43.8 %** | 20.67 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 s 6 ventilátormi (čie... | 114.00 € | **116.00 €** | 18.4 % | **20.5 %** | 116.33 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash F1 (čierna) + 6 ventilát... | 114.00 € | **116.00 €** | 14.9 % | **17.0 %** | 116.33 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 106.50 € | **108.50 €** | 5.8 % | **7.8 %** | 108.84 € | cena podľa najlacnejšieho iného predajcu |
| ALI Mag-Skin iPhone 16 PAS0016 | 12.50 € | **14.50 €** | 5.2 % | **22.0 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 451 DAB+ alarm clock, white | 35.50 € | **37.50 €** | 11.2 % | **17.5 %** | 37.88 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **23.50 €** | 14.8 % | **25.5 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 18.50 € | **20.50 €** | 5.4 % | **16.8 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 40.50 € | **42.50 €** | 21.0 % | **27.0 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 webová kamera | 53.00 € | **55.00 €** | 11.4 % | **15.6 %** | 55.46 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 86.00 € | **88.00 €** | 20.3 % | **23.1 %** | 88.50 € | cena podľa najlacnejšieho iného predajcu |
| Tattu R-Line verzia 5.0 850 mAh 14,8 V 4S1P 150C XT3... | 18.00 € | **20.00 €** | 14.7 % | **27.4 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W2 | 23.00 € | **24.90 €** | 14.4 % | **23.8 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 8.20 € | **9.80 €** | 5.7 % | **26.3 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Paw Patrol | 39.90 € | **41.50 €** | 10.1 % | **14.5 %** | 41.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny alkohol tester, Fuel Cell, 0,0... | 51.90 € | **53.50 €** | 22.3 % | **26.0 %** | 53.90 € | cena podľa najlacnejšieho iného predajcu |
| Sati Espresso Intenso 1 kg zrno | 15.90 € | **17.50 €** | 10.3 % | **21.4 %** | 17.88 € | cena podľa najlacnejšieho iného predajcu |
| Tesla 32E635BHS 32" HD LED AndroidTV 11 | 147.90 € | **149.50 €** | 5.7 % | **6.8 %** | 149.54 € | cena podľa najlacnejšieho iného predajcu |
| Samsung rám pro Frame TV 55" Týkový | 67.90 € | **69.50 €** | 10.4 % | **13.0 %** | 69.75 € | cena podľa najlacnejšieho iného predajcu |
| Sada ND filtrov pre DJI Action 6 (ND8/16/32/64) | 24.50 € | **26.00 €** | 14.5 % | **21.6 %** | 26.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT20R-WH-3A-W-WiFi | 29.50 € | **31.00 €** | 10.7 % | **16.3 %** | 31.15 € | cena podľa najlacnejšieho iného predajcu |
| PBT Keycap + Cable Set - Black - US/UK | 66.50 € | **68.00 €** | 10.7 % | **13.1 %** | 68.17 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61617 Zatáčka 2/45 (4ks) - GO | 12.50 € | **14.00 €** | 11.4 % | **24.8 %** | 14.19 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 520.50 € | **522.00 €** | 6.6 % | **6.9 %** | 522.23 € | cena podľa najlacnejšieho iného predajcu |
| Zvukový mixér a zvuková karta AMC2 Neo | 41.50 € | **43.00 €** | 12.1 % | **16.1 %** | 43.23 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 10.00 € | **11.50 €** | 18.3 % | **36.1 %** | 11.73 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjateľná stolová lampa Yeelight 4 v 1 | 16.50 € | **18.00 €** | 9.9 % | **19.9 %** | 18.25 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64244 Porsche 992 GT3 No.2 | 15.50 € | **17.00 €** | 10.7 % | **21.5 %** | 17.29 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower WPU-800-12 UPS 800W 12V čistý ... | 133.00 € | **134.50 €** | 5.5 % | **6.7 %** | 134.80 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5388B | 109.50 € | **111.00 €** | 9.9 % | **11.4 %** | 111.34 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 37-75" Perlesmith PSTVS13 | 32.00 € | **33.50 €** | 15.7 % | **21.2 %** | 33.88 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB453138 | 29.50 € | **31.00 €** | 7.9 % | **13.4 %** | 31.43 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak na krk Puluz pre športové kamery | 10.50 € | **12.00 €** | 14.0 % | **30.3 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Termotransferová fólia HTVRONT Pure, 30,5 cm × 1,8 m... | 4.40 € | **5.70 €** | 15.0 % | **49.0 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61647 Šikana - GO | 18.90 € | **20.00 €** | 12.3 % | **18.9 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 24.90 € | **26.00 €** | 15.0 % | **20.1 %** | 26.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **17.50 €** | 28.7 % | **37.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Drosselmeyer TIBP01G | 34.90 € | **36.00 €** | 10.6 % | **14.1 %** | 36.42 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 37.5 % | **45.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 7.80 € | **8.80 €** | 51.7 % | **71.2 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA80XE AX 3000, WiFi ... | 22.50 € | **23.50 €** | 9.9 % | **14.8 %** | 23.54 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75BWBXC | 69.90 € | **70.90 €** | 10.6 % | **12.2 %** | 70.96 € | cena podľa najlacnejšieho iného predajcu |
| RivaCase 5133 pouzdro na ultrabook 15,6" | 28.90 € | **29.90 €** | 11.2 % | **15.0 %** | 29.96 € | cena podľa najlacnejšieho iného predajcu |
| WESTMARK 2094 2611 Nůžky na salát, 8 ks | 43.50 € | **44.50 €** | 10.4 % | **12.9 %** | 44.71 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0016 Skladacie pozadie | 39.50 € | **40.50 €** | 14.7 % | **17.6 %** | 40.71 € | cena podľa najlacnejšieho iného predajcu |
| PETG vlákno Sunlu (olivová) | 11.50 € | **12.50 €** | 13.7 % | **23.6 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 43.00 € | **44.00 €** | 13.2 % | **15.8 %** | 44.23 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 10.50 € | **11.50 €** | 9.2 % | **19.6 %** | 11.78 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link Mercusys ME80X AP/Extender/Rep... | 36.50 € | **37.50 €** | 5.5 % | **8.3 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 25.50 € | **26.50 €** | 39.0 % | **44.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM016 12 kg výrobník ľadových kociek (čierny) | 75.50 € | **76.50 €** | 10.9 % | **12.4 %** | 76.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 8in1 docking station BW-TH16 USB 100 W LCD... | 47.50 € | **48.50 €** | 11.9 % | **14.3 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (čierne) | 27.50 € | **28.50 €** | 26.3 % | **30.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (modré) | 27.50 € | **28.50 €** | 25.2 % | **29.7 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 32.00 € | **33.00 €** | 8.7 % | **12.1 %** | 33.42 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 32.00 € | **33.00 €** | 8.7 % | **12.1 %** | 33.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.00 € | **15.00 €** | 18.2 % | **26.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 41.9 % | **45.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 38.0 % | **41.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný obojsmerný merač energie Avatto ZigBee ... | 20.90 € | **21.50 €** | 15.7 % | **19.0 %** | 21.88 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.65 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (čierna) | 14.90 € | **15.50 €** | 19.3 % | **24.2 %** | 15.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.90 € | **11.50 €** | 22.4 % | **29.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link MERCUSYS MR47BE BE9300 WiFi 7, 3... | 119.90 € | **120.50 €** | 5.1 % | **5.6 %** | 120.90 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **19.50 €** | 26.7 % | **30.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Chránič zubů DBX BUSHIDO MG-2 černý s tesáky | 12.00 € | **12.50 €** | 1.2 % | **5.4 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CrockPot SCV400RD | 52.00 € | **52.50 €** | 10.3 % | **11.4 %** | 52.54 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3002G | 74.50 € | **75.00 €** | 10.4 % | **11.1 %** | 75.04 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife 1/4'' rýchloupínací držiak s mačacím uchom... | 12.50 € | **13.00 €** | 15.7 % | **20.4 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 20.00 € | **20.50 €** | 14.4 % | **17.3 %** | 20.57 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový ventilátor Darkflash Gauss G24 (čierny) | 11.50 € | **12.00 €** | 14.6 % | **19.6 %** | 12.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 33.50 € | **34.00 €** | 45.1 % | **47.3 %** | 34.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.50 € | **20.00 €** | 41.3 % | **44.9 %** | 20.15 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 19.50 € | **20.00 €** | 35.8 % | **39.3 %** | 20.23 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife DZ-144 Držiak | 14.50 € | **15.00 €** | 14.8 % | **18.7 %** | 15.25 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 23.00 € | **23.50 €** | 8.0 % | **10.4 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife MJ-175 – rukoväť na batoh | 14.50 € | **15.00 €** | 14.3 % | **18.3 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.00 € | **14.50 €** | 8.8 % | **12.7 %** | 14.80 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.00 € | **14.50 €** | 13.0 % | **17.1 %** | 14.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 11.50 € | **12.00 €** | 35.1 % | **41.0 %** | 12.34 € | cena podľa najlacnejšieho iného predajcu |
| AB LNB01 Octo Red Edition | 20.00 € | **20.50 €** | 5.3 % | **7.9 %** | 20.89 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Puluz na riadidlá pre bicykle a motocykle, ko... | 22.00 € | **22.50 €** | 14.2 % | **16.8 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (čierny) | 16.50 € | **17.00 €** | 6.7 % | **10.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17P FIXRBM-1602-RA | 15.50 € | **16.00 €** | 11.6 % | **15.2 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (biela) | 12.50 € | **13.00 €** | 32.2 % | **37.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **105.00 €** | 35.1 % | **35.7 %** | 105.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.60 € | **7.00 €** | 36.2 % | **44.4 %** | 7.03 € | cena podľa najlacnejšieho iného predajcu |
| Hliníková upínací svorka pre modely RS 4 Mini / RS 4... | 12.50 € | **12.90 €** | 16.5 % | **20.3 %** | 12.96 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90510 Čajová konvice1200 ml | 10.50 € | **10.90 €** | 10.3 % | **14.5 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Laica VT3514 | 4.40 € | **4.80 €** | 11.1 % | **21.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H3c 3K Venkovní IP, 5MP, 2.8mm, WiFi | 48.50 € | **48.90 €** | 4.5 % | **5.3 %** | 48.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight profesionálna laserová vodováha - zelený laser | 37.50 € | **37.90 €** | 30.3 % | **31.7 %** | 37.95 € | cena podľa najlacnejšieho iného predajcu |
| MENALUX CB104B | 20.50 € | **20.90 €** | 10.2 % | **12.4 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.50 € | **28.90 €** | 9.6 % | **11.1 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Tritanová láhev na pití 1 l černá | 30.90 € | **31.00 €** | 58.3 % | **58.8 %** | 31.20 € | cena podľa najlacnejšieho iného predajcu |
| Gyroskop pre RC modely áut SkyRC Gyro GC301 | 20.90 € | **21.00 €** | 15.8 % | **16.4 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 37.90 € | **38.00 €** | 12.6 % | **12.9 %** | 38.44 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-65 65W Power De... | 20.90 € | **21.00 €** | 8.6 % | **9.1 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.80 € | **9.90 €** | 36.0 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná poistka s WIFI Avatto WCB16 | 14.90 € | **15.00 €** | 16.3 % | **17.0 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife ZJ153 Nákupná taška | 12.90 € | **13.00 €** | 15.6 % | **16.5 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife ZJ153 Nákupná taška | 12.90 € | **13.00 €** | 15.6 % | **16.5 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash K430 + 6 ventilátorov (č... | 65.90 € | **66.00 €** | 15.0 % | **15.2 %** | 66.29 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 6715 zesilovač + zdroj (2438) | 160.90 € | **161.00 €** | 15.7 % | **15.8 %** | 161.30 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **17.50 €** | 28.0 % | **28.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (1385)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Eliptický trenažér MERACH MR-E33B4 | 675.00 € | **480.50 €** | 82.7 % | **30.1 %** | 480.79 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LONGER LK10 Plus | 500.00 € | **311.50 €** | 84.7 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 626.00 € | **440.00 €** | 74.5 % | **22.6 %** | 440.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada panelov Moza Racing FMP18 | 1146.90 € | **964.50 €** | 44.5 % | **21.5 %** | 964.75 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 613.50 € | **437.00 €** | 81.5 % | **29.3 %** | 437.04 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec Mini PC M3 Intel i5-12450H 16 GB RAM + 512 GB... | 708.90 € | **540.50 €** | 46.9 % | **12.0 %** | 540.69 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový bicykel MERACH MR-S19 | 583.00 € | **422.00 €** | 79.9 % | **30.2 %** | 422.17 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, strieborná) | 416.90 € | **269.00 €** | 89.6 % | **22.3 %** | 269.25 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **529.00 €** | 49.7 % | **17.3 %** | 529.25 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, čierna) | 416.90 € | **271.00 €** | 88.1 % | **22.3 %** | 271.21 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet Prime SE | 448.90 € | **307.50 €** | 77.8 % | **21.8 %** | 307.54 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server TERRAMASTER F6-424 NAS s procesorom ... | 878.90 € | **738.50 €** | 43.9 % | **20.9 %** | 738.88 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec M3 Pro s procesorom i5-13500H, 16 GB ... | 856.90 € | **718.00 €** | 45.9 % | **22.2 %** | 718.08 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 386.00 € | **249.00 €** | 92.6 % | **24.2 %** | 249.46 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu MOVA P10 | 566.90 € | **440.50 €** | 41.4 % | **9.9 %** | 440.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 15 | 408.90 € | **284.00 €** | 63.8 % | **13.7 %** | 284.22 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší HiFiMAN RE2000 Pro Gold | 539.90 € | **417.00 €** | 57.1 % | **21.3 %** | 417.33 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **849.90 €** | 31.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 656.90 € | **537.00 €** | 44.1 % | **17.8 %** | 537.25 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 298.90 € | **189.50 €** | 93.4 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 298.90 € | **189.90 €** | 93.0 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 298.90 € | **189.90 €** | 93.0 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 31.8 % | **8.3 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 296.90 € | **189.90 €** | 91.7 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer CB300C RGB | 478.90 € | **387.50 €** | 47.2 % | **19.1 %** | 387.83 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 647.50 € | **557.00 €** | 38.9 % | **19.5 %** | 557.29 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HUION Note E X50 | 502.50 € | **414.00 €** | 47.3 % | **21.3 %** | 414.42 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **778.00 €** | 37.3 % | **23.8 %** | 778.21 € | cena podľa najlacnejšieho iného predajcu |
| LaserPecker 2 – základná verzia | 518.90 € | **436.00 €** | 37.5 % | **15.5 %** | 436.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada 2 ks LED svietidiel NEEWER RGB1200 60 W V4 | 446.90 € | **367.00 €** | 45.1 % | **19.2 %** | 367.29 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BPS6737E04DBG | 478.50 € | **398.90 €** | 26.6 % | **5.6 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 | 496.90 € | **418.50 €** | 41.8 % | **19.4 %** | 418.88 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **292.00 €** | 51.5 % | **19.5 %** | 292.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 9 | 408.90 € | **333.50 €** | 63.8 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LE300Bi | 388.90 € | **313.50 €** | 48.3 % | **19.6 %** | 313.79 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 14 | 406.90 € | **333.50 €** | 63.0 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 6 | 406.90 € | **333.50 €** | 63.0 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 8 | 406.90 € | **333.50 €** | 63.0 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 388.90 € | **317.50 €** | 41.8 % | **15.7 %** | 317.63 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-3 Thunderbolt 5 | 388.90 € | **321.00 €** | 46.9 % | **21.2 %** | 321.21 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 880.00 € | **817.50 €** | 17.2 % | **8.9 %** | 817.51 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **238.00 €** | 50.4 % | **19.2 %** | 238.50 € | cena podľa najlacnejšieho iného predajcu |
| ANCEL L5000 PRO – diagnostický detektor únikov pre a... | 348.90 € | **287.00 €** | 47.0 % | **21.0 %** | 287.08 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Air Projektor | 236.90 € | **175.90 €** | 41.7 % | **5.2 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM S10, 64GB (biely) | 266.90 € | **206.00 €** | 42.2 % | **9.8 %** | 206.43 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10, 64GB (čierny) | 266.90 € | **206.00 €** | 42.2 % | **9.8 %** | 206.43 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 259.50 € | **201.50 €** | 60.1 % | **24.3 %** | 201.67 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB200B | 288.90 € | **230.90 €** | 48.8 % | **18.9 %** | 230.96 € | cena podľa najlacnejšieho iného predajcu |
| Priemyselná infračervená termokamera Habotest HT820 | 336.90 € | **279.00 €** | 41.5 % | **17.2 %** | 279.08 € | cena podľa najlacnejšieho iného predajcu |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **241.50 €** | 42.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 3D tlačiareň Anycubic Photon Mono M7 Max | 737.90 € | **684.00 €** | 19.6 % | **10.9 %** | 684.46 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny magnetický filtračný systém Freewell K2 | 355.00 € | **302.00 €** | 42.5 % | **21.3 %** | 302.29 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 5800mAh 60C 18.5V 5S1P Lipo Battery Pack wi... | 117.00 € | **64.00 €** | 116.7 % | **18.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Blitzwolf BW-V12 | 274.70 € | **223.00 €** | 47.2 % | **19.5 %** | 223.04 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **259.00 €** | 28.9 % | **7.9 %** | 259.41 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer CB200C RGB | 288.90 € | **238.50 €** | 44.7 % | **19.4 %** | 238.54 € | cena podľa najlacnejšieho iného predajcu |
| LED videolampa GODOX ML80Bi | 288.90 € | **238.50 €** | 44.9 % | **19.6 %** | 238.83 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z22P PRO s 22-palcovým doty... | 398.00 € | **348.00 €** | 38.3 % | **21.0 %** | 348.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LK10 s väčším formátom | 296.90 € | **247.00 €** | 43.4 % | **19.3 %** | 247.38 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultimea Aura S5T | 258.90 € | **210.00 €** | 44.3 % | **17.1 %** | 210.13 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra S1 Max Combo | 872.00 € | **823.50 €** | 14.9 % | **8.5 %** | 823.90 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RBB1200 | 238.90 € | **190.50 €** | 51.6 % | **20.9 %** | 190.75 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120P | 228.90 € | **181.00 €** | 37.8 % | **9.0 %** | 181.38 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **178.50 €** | 47.6 % | **16.8 %** | 178.54 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-72CB4xyP200-LBHA keramická varná doska ... | 148.90 € | **102.00 €** | 58.5 % | **8.6 %** | 102.17 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **153.50 €** | 51.3 % | **16.2 %** | 153.83 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **329.00 €** | 36.1 % | **19.3 %** | 329.50 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 276.90 € | **231.50 €** | 45.4 % | **21.5 %** | 231.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (čier... | 141.00 € | **96.00 €** | 70.7 % | **16.2 %** | 96.04 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTX1 Pro S, Twin | 322.50 € | **277.50 €** | 22.5 % | **5.4 %** | 277.75 € | cena podľa najlacnejšieho iného predajcu |
| ANCEL DS600 BT – profesionálny diagnostický skener OBD2 | 569.90 € | **526.90 €** | 13.6 % | **5.0 %** | 514.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sušič vlasov MOVA Flip 10 | 246.90 € | **204.00 €** | 68.3 % | **39.1 %** | 204.33 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **207.50 €** | 43.6 % | **19.2 %** | 207.71 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 616.00 € | **573.50 €** | 15.0 % | **7.0 %** | 573.55 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.50 € | **175.00 €** | 36.6 % | **9.9 %** | 175.21 € | cena podľa najlacnejšieho iného predajcu |
| Samsung S731 Galaxy S25 FE 256GB Blue | 924.50 € | **882.50 €** | 10.0 % | **5.0 %** | 555.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada na nabíjanie akčnej kamery SJCAM SJ30 (čierny) | 316.90 € | **275.00 €** | 44.0 % | **24.9 %** | 275.33 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **158.50 €** | 35.0 % | **7.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **184.50 €** | 45.0 % | **18.6 %** | 184.54 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 825.00 € | **784.00 €** | 15.0 % | **9.3 %** | 784.04 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 870.00 € | **829.50 €** | 24.5 % | **18.7 %** | 829.53 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **260.00 €** | 41.1 % | **22.2 %** | 260.38 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **260.50 €** | 40.8 % | **22.2 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **260.50 €** | 40.8 % | **22.1 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **183.00 €** | 45.2 % | **19.5 %** | 183.04 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie 10102847 FS150B | 238.90 € | **199.50 €** | 44.1 % | **20.4 %** | 199.67 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera SJCAM M60, 3 kanály (čierny) | 238.90 € | **200.00 €** | 45.2 % | **21.6 %** | 200.17 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 268.90 € | **231.00 €** | 32.4 % | **13.8 %** | 231.25 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 275.50 € | **238.90 €** | 23.8 % | **7.4 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP400R RGB | 156.90 € | **120.50 €** | 43.1 % | **9.9 %** | 120.83 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER GR18C Okrúhly LED panel pre bočné osvetlenie | 236.90 € | **201.00 €** | 48.2 % | **25.8 %** | 201.38 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener pre motocykle ANCEL MT310 | 328.90 € | **293.00 €** | 35.1 % | **20.4 %** | 293.25 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **238.90 €** | 28.0 % | **11.3 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A156W04T s uhlopriečkou 15,6" | 136.90 € | **101.50 €** | 48.1 % | **9.8 %** | 101.86 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **315.50 €** | 37.5 % | **23.8 %** | 315.67 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer MS60C RGB | 205.90 € | **171.00 €** | 43.6 % | **19.2 %** | 171.46 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **131.00 €** | 47.0 % | **16.7 %** | 131.21 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **103.50 €** | 54.0 % | **16.0 %** | 103.75 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Minix SF10T s uhlopriečkou 10,5" | 158.90 € | **125.50 €** | 55.0 % | **22.4 %** | 125.67 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W03,23,8" | 236.90 € | **203.50 €** | 41.4 % | **21.4 %** | 203.71 € | cena podľa najlacnejšieho iného predajcu |
| Anamorfný objektív Freewell 1,33x s bajonetom 17 mm | 236.90 € | **203.50 €** | 30.9 % | **12.4 %** | 203.88 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B1-EU | 294.00 € | **261.00 €** | 37.9 % | **22.4 %** | 261.46 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (biela) | 209.00 € | **176.50 €** | 30.2 % | **10.0 %** | 176.57 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (čierny) | 209.00 € | **176.50 €** | 30.2 % | **10.0 %** | 176.57 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash HM1 | 99.50 € | **67.00 €** | 77.0 % | **19.2 %** | 67.21 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ20 – nabíjací set (čierny) | 238.90 € | **206.50 €** | 42.1 % | **22.8 %** | 206.54 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (biela) + 4 ventil... | 114.50 € | **82.50 €** | 65.5 % | **19.3 %** | 82.75 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 274.00 € | **242.00 €** | 32.3 % | **16.8 %** | 242.46 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 274.00 € | **242.00 €** | 29.1 % | **14.1 %** | 242.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) + 7 ventilá... | 101.90 € | **70.00 €** | 68.9 % | **16.0 %** | 70.17 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-1 s rozhraním Thunderbolt 3 | 178.90 € | **147.50 €** | 52.2 % | **25.5 %** | 147.68 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 492.90 € | **461.50 €** | 27.6 % | **19.5 %** | 461.63 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **189.00 €** | 41.7 % | **21.5 %** | 189.42 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **144.00 €** | 46.8 % | **20.6 %** | 144.29 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN D1Air | 188.90 € | **158.00 €** | 45.3 % | **21.5 %** | 158.42 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 656.90 € | **626.00 €** | 16.1 % | **10.7 %** | 626.24 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 300.50 € | **270.00 €** | 36.3 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 300.50 € | **270.00 €** | 36.3 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Stavebná sada robota xTool mBot2 Rover | 375.50 € | **345.00 €** | 32.8 % | **22.1 %** | 345.38 € | cena podľa najlacnejšieho iného predajcu |
| SJCAM M60 palubná kamera, 2 kanály (čierny) | 206.90 € | **176.50 €** | 42.8 % | **21.8 %** | 176.54 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mop PROSCENIC F10 Ultra | 218.90 € | **188.50 €** | 41.6 % | **21.9 %** | 188.58 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **124.50 €** | 46.2 % | **17.6 %** | 124.63 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **155.50 €** | 30.5 % | **9.4 %** | 155.60 € | cena podľa najlacnejšieho iného predajcu |
| Súprava ultratenkého LED kruhového osvetlenia Neewer... | 206.90 € | **176.90 €** | 46.0 % | **24.8 %** | 176.92 € | cena podľa najlacnejšieho iného predajcu |
| LED trubicové svietidlo NEEWER TL60 20 W | 186.90 € | **157.00 €** | 44.4 % | **21.3 %** | 157.25 € | cena podľa najlacnejšieho iného predajcu |
| Stojan JMGO pre modely N1S SE, Nano a PicoPlay+ | 148.90 € | **119.00 €** | 51.6 % | **21.2 %** | 119.42 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **282.90 €** | 35.4 % | **22.5 %** | 283.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **121.00 €** | 51.2 % | **21.4 %** | 121.38 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslovací trenažér Deer Run RW600 (biely) | 350.50 € | **321.00 €** | 33.1 % | **21.9 %** | 321.50 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **170.50 €** | 42.5 % | **21.5 %** | 170.88 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **285.50 €** | 26.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **186.50 €** | 43.5 % | **24.4 %** | 186.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **329.00 €** | 34.2 % | **23.4 %** | 329.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (čierna) + 4 venti... | 129.00 € | **101.00 €** | 52.6 % | **19.5 %** | 101.04 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-22KW... | 378.90 € | **351.00 €** | 48.5 % | **37.6 %** | 351.29 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **81.90 €** | 62.7 % | **21.5 %** | 81.92 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (biela) | 178.90 € | **151.50 €** | 44.8 % | **22.6 %** | 151.79 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (čierna) | 178.90 € | **151.50 €** | 44.8 % | **22.6 %** | 151.79 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **153.00 €** | 45.0 % | **23.0 %** | 153.50 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **142.00 €** | 46.9 % | **23.3 %** | 142.25 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD (čierna) + 4 ven... | 92.00 € | **65.00 €** | 65.0 % | **16.6 %** | 65.04 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Ranger Dash cam GPS WiFi 4K Motorbike | 196.90 € | **169.90 €** | 41.7 % | **22.3 %** | 170.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R05B4 | 215.00 € | **188.00 €** | 25.7 % | **9.9 %** | 188.48 € | cena podľa najlacnejšieho iného predajcu |
| Tlačiareň štítkov NIIMBOT M3 (biela) | 175.00 € | **148.00 €** | 45.2 % | **22.8 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 41.9 % | **8.8 %** | 86.63 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera SJCAM M60 (čierny) | 168.90 € | **142.90 €** | 44.8 % | **22.5 %** | 142.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY470 so 4 ventilátormi ... | 146.90 € | **120.90 €** | 44.2 % | **18.6 %** | 120.96 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **221.50 €** | 38.4 % | **24.1 %** | 221.58 € | cena podľa najlacnejšieho iného predajcu |
| Projector Blitzwolf, BW-V8, 4K, Android OS | 166.90 € | **141.50 €** | 40.8 % | **19.4 %** | 141.79 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **147.00 €** | 42.0 % | **21.2 %** | 147.38 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **57.50 €** | 73.9 % | **21.2 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **57.50 €** | 73.9 % | **21.2 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón Freewell Genius Rig pre iPhone 17 ... | 146.90 € | **121.90 €** | 39.3 % | **15.6 %** | 121.96 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **118.00 €** | 38.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Čistič okien PROSCENIC Win10pro | 168.90 € | **144.50 €** | 42.8 % | **22.2 %** | 144.63 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A185W03,18,5" | 166.90 € | **142.50 €** | 42.2 % | **21.4 %** | 142.67 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-B -6072 WiFi Smart Digital Lock Black | 126.90 € | **102.50 €** | 53.9 % | **24.3 %** | 102.71 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 484.00 € | **460.00 €** | 14.1 % | **8.4 %** | 460.17 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **114.00 €** | 49.7 % | **24.2 %** | 114.21 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **101.90 €** | 49.0 % | **21.4 %** | 102.00 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB4xyzf-CS 4-zónová indukčná varná doska | 158.90 € | **136.00 €** | 43.8 % | **23.1 %** | 136.08 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W05T 14" prenosný monitor | 128.90 € | **106.00 €** | 47.8 % | **21.5 %** | 106.21 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiová lampa GODOX ML40Bi | 126.90 € | **104.00 €** | 46.0 % | **19.6 %** | 104.38 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **189.50 €** | 37.3 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **163.00 €** | 27.9 % | **12.4 %** | 163.33 € | cena podľa najlacnejšieho iného predajcu |
| Tester obvodov Ancel PB500 | 99.50 € | **77.00 €** | 46.8 % | **13.6 %** | 77.14 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 155.50 € | **133.00 €** | 46.0 % | **24.9 %** | 133.50 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 126.90 € | **104.50 €** | 47.9 % | **21.8 %** | 104.67 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX ES30 pre e-šport | 166.90 € | **144.50 €** | 43.2 % | **24.0 %** | 144.75 € | cena podľa najlacnejšieho iného predajcu |
| Sekvenčná prevodovka PXN | 168.90 € | **146.50 €** | 33.5 % | **15.8 %** | 146.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **189.90 €** | 37.0 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **127.50 €** | 41.1 % | **20.2 %** | 127.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 41.4 % | **10.2 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 44.4 % | **12.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDIN38441P | 478.50 € | **456.50 €** | 10.1 % | **5.0 %** | 358.15 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termovízna kamera FNIRSI TDM-120 | 187.50 € | **165.50 €** | 26.8 % | **11.9 %** | 165.79 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátorový vysávač ULTENIC U18 Pro | 158.90 € | **137.00 €** | 41.5 % | **22.0 %** | 137.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 138.90 € | **117.00 €** | 37.8 % | **16.1 %** | 117.38 € | cena podľa najlacnejšieho iného predajcu |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 149.50 € | **128.00 €** | 41.3 % | **21.0 %** | 128.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (biely) | 128.90 € | **107.50 €** | 43.1 % | **19.3 %** | 107.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **58.90 €** | 56.5 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Albrecht DR 862 Senior Radio | 133.50 € | **112.50 €** | 29.4 % | **9.0 %** | 112.88 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC D750 MIX | 205.50 € | **184.50 €** | 25.3 % | **12.5 %** | 184.88 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CA077 Univerzálny držiak na fotoaparát | 106.90 € | **86.00 €** | 54.7 % | **24.5 %** | 86.17 € | cena podľa najlacnejšieho iného predajcu |
| Štartér motora ANCEL BS200 | 138.90 € | **118.00 €** | 43.9 % | **22.3 %** | 118.25 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418 PRO + 7 ventilátoro... | 99.50 € | **78.90 €** | 47.7 % | **17.1 %** | 78.92 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3WFU4841MCC | 442.50 € | **422.00 €** | 10.1 % | **5.0 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa DarkFlash DS950 (čierna) + 6 venti... | 83.50 € | **63.00 €** | 56.9 % | **18.3 %** | 63.33 € | cena podľa najlacnejšieho iného predajcu |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 79.50 € | **59.00 €** | 47.6 % | **9.5 %** | 59.38 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 375.50 € | **355.00 €** | 31.5 % | **24.3 %** | 355.42 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BM3T3924WBW | 458.90 € | **438.50 €** | 10.0 % | **5.1 %** | 420.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **92.50 €** | 52.1 % | **24.8 %** | 92.67 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 385.00 € | **365.00 €** | 30.7 % | **23.9 %** | 365.17 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing Vision GS RS064 (PC) | 768.50 € | **748.50 €** | 21.3 % | **18.1 %** | 748.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **121.50 €** | 37.6 % | **18.2 %** | 121.54 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 178.90 € | **159.00 €** | 40.7 % | **25.1 %** | 159.13 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 151.90 € | **132.00 €** | 27.0 % | **10.4 %** | 132.29 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT2302 Digitálny tester zemného odporu | 136.90 € | **117.00 €** | 35.6 % | **15.8 %** | 117.38 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 126.90 € | **107.00 €** | 43.7 % | **21.2 %** | 107.42 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **56.50 €** | 68.8 % | **24.9 %** | 56.67 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač CE-ZM1902M-SV (strieborný) | 94.00 € | **74.50 €** | 51.0 % | **19.7 %** | 74.86 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT262E – bezkontaktný detektor poradia fáz | 108.90 € | **89.50 €** | 41.4 % | **16.2 %** | 89.54 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W05,14" | 106.90 € | **87.50 €** | 48.9 % | **21.9 %** | 87.79 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – súprava „... | 108.90 € | **90.00 €** | 47.1 % | **21.5 %** | 90.04 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **118.50 €** | 40.7 % | **21.4 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91701R | 358.50 € | **339.90 €** | 11.6 % | **5.8 %** | 339.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 94.00 € | **75.50 €** | 45.0 % | **16.5 %** | 75.67 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 52.50 € | **34.00 €** | 82.7 % | **18.3 %** | 34.33 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.50 €** | 36.4 % | **11.2 %** | 81.70 € | cena podľa najlacnejšieho iného predajcu |
| Kaderník 4 v 1 ANLAN 05-ACFS41-02E | 96.90 € | **78.50 €** | 50.1 % | **21.6 %** | 78.67 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W03T 14" prenosný monitor | 126.90 € | **108.90 €** | 42.0 % | **21.9 %** | 108.92 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFGV8080 Softbox | 79.50 € | **61.50 €** | 59.2 % | **23.2 %** | 61.88 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 166.90 € | **149.00 €** | 39.5 % | **24.5 %** | 149.17 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **117.50 €** | 39.9 % | **21.5 %** | 117.63 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **54.50 €** | 53.1 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.00 €** | 44.7 % | **16.1 %** | 72.39 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **69.50 €** | 45.2 % | **15.8 %** | 69.75 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R20BT 2.0 (čierne) | 79.50 € | **61.90 €** | 86.2 % | **45.0 %** | 61.92 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 127.50 € | **110.00 €** | 41.9 % | **22.4 %** | 110.08 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey S7 s kamerou s dosahom 1... | 142.50 € | **125.00 €** | 32.0 % | **15.8 %** | 125.12 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT3000 44,4 Wh štartér | 79.50 € | **62.00 €** | 50.7 % | **17.5 %** | 62.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT371 | 84.00 € | **66.50 €** | 47.0 % | **16.4 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **282.90 €** | 27.9 % | **20.5 %** | 283.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **80.00 €** | 36.8 % | **12.4 %** | 80.44 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK351+ 4 ventilátory (bi... | 61.00 € | **43.90 €** | 62.1 % | **16.7 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu |
| MOES WC-YH-LS Motor na rolety s Wi-Fi | 74.00 € | **57.00 €** | 51.9 % | **17.0 %** | 57.13 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1919 (čierny) | 118.90 € | **102.00 €** | 41.5 % | **21.4 %** | 102.21 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W9 | 178.90 € | **162.00 €** | 34.3 % | **21.6 %** | 162.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **118.50 €** | 36.1 % | **19.2 %** | 118.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **90.90 €** | 24.7 % | **5.3 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.00 €** | 48.1 % | **12.6 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDFN26531X | 360.50 € | **343.90 €** | 10.1 % | **5.1 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FNIRSI HS-02A F 100 W inteligentná spájkovačka | 114.50 € | **97.90 €** | 24.4 % | **6.4 %** | 97.96 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2119 PRO na ovládanie letu | 94.00 € | **77.50 €** | 38.9 % | **14.5 %** | 77.67 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DPX90 (čierna) + 3 venti... | 74.00 € | **57.50 €** | 51.0 % | **17.4 %** | 57.75 € | cena podľa najlacnejšieho iného predajcu |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 127.50 € | **111.00 €** | 30.2 % | **13.4 %** | 111.29 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **75.90 €** | 28.2 % | **5.5 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **58.50 €** | 43.9 % | **12.5 %** | 58.75 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **30.90 €** | 76.3 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion HS611 | 91.23 € | **75.00 €** | 39.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nabíjačka SkyRC Q200neo | 141.00 € | **124.90 €** | 26.4 % | **12.0 %** | 124.93 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi Electric Scooter 6 Lite | 354.90 € | **338.90 €** | 10.0 % | **5.1 %** | 278.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| UTRAI JS4 štartér do auta | 99.50 € | **83.50 €** | 47.8 % | **24.1 %** | 83.54 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 420.00 € | **404.00 €** | 9.9 % | **5.7 %** | 404.10 € | cena podľa najlacnejšieho iného predajcu |
| Retro blesk GODOX Lux Junior II S | 94.00 € | **78.00 €** | 43.4 % | **19.0 %** | 78.17 € | cena podľa najlacnejšieho iného predajcu |
| xTool Codey Rocky – vzdelávacia verzia – vzdelávací ... | 175.00 € | **159.00 €** | 17.0 % | **6.3 %** | 159.29 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 223.00 € | **207.00 €** | 15.0 % | **6.7 %** | 207.46 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **119.50 €** | 35.0 % | **19.2 %** | 119.79 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2440G1-EU (sivá) | 156.50 € | **141.00 €** | 37.2 % | **23.6 %** | 141.38 € | cena podľa najlacnejšieho iného predajcu |
| Photo Studio PULUZ 80 cm (PU5083EU) | 108.90 € | **93.50 €** | 34.8 % | **15.7 %** | 93.75 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-AZ-EM1501-SV s piestom (strieborný) | 118.90 € | **103.50 €** | 39.2 % | **21.2 %** | 103.79 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-11KW... | 336.90 € | **321.50 €** | 45.8 % | **39.1 %** | 321.75 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **74.50 €** | 45.8 % | **21.1 %** | 74.75 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **235.00 €** | 36.0 % | **27.8 %** | 235.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **110.00 €** | 35.4 % | **19.1 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FN619EAW6 | 548.90 € | **533.90 €** | 8.0 % | **5.0 %** | 503.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi RGBW 16M Gosund LB2S Tuya smart night light | 28.50 € | **13.50 €** | 176.8 % | **31.1 %** | 13.68 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 253.50 € | **238.50 €** | 25.2 % | **17.8 %** | 238.70 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 253.50 € | **238.50 €** | 16.4 % | **9.5 %** | 238.70 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 74.00 € | **59.00 €** | 55.2 % | **23.8 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **65.00 €** | 41.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **39.90 €** | 58.6 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Okružná píla NAC AKU CS-165-LI-ST2-20V | 124.90 € | **110.00 €** | 28.3 % | **13.0 %** | 110.13 € | cena podľa najlacnejšieho iného predajcu |
| Súprava osvetlenia Softbox 10102773 700 W, 3 ks | 118.90 € | **104.00 €** | 43.3 % | **25.3 %** | 104.33 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **102.00 €** | 36.4 % | **19.1 %** | 102.38 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 70.9 % | **20.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **75.00 €** | 42.1 % | **18.8 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Reflektor GODOX RFT-25S | 89.50 € | **75.00 €** | 47.8 % | **23.8 %** | 75.08 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 134.28 € | **119.90 €** | 21.8 % | **8.8 %** | 119.96 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – Powerbanka | 79.50 € | **65.50 €** | 47.0 % | **21.1 %** | 65.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 STD | 122.50 € | **108.50 €** | 28.2 % | **13.6 %** | 108.73 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Soundbar HW-B420F | 119.00 € | **105.00 €** | 22.2 % | **7.8 %** | 105.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **76.50 €** | 42.9 % | **21.2 %** | 76.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **53.50 €** | 46.0 % | **16.3 %** | 53.79 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **113.50 €** | 35.6 % | **21.1 %** | 113.67 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 346.50 € | **333.00 €** | 11.9 % | **7.5 %** | 333.19 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič vody Darkflash DN 360 (biely) | 83.50 € | **70.00 €** | 41.7 % | **18.8 %** | 70.46 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 46.0 % | **11.9 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 49.5 % | **11.2 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **61.50 €** | 28.3 % | **5.5 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **122.00 €** | 36.2 % | **22.8 %** | 122.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **52.00 €** | 43.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 40.6 % | **11.4 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Lampa monitora BlitzWolf BW-CML6 | 64.00 € | **51.00 €** | 51.2 % | **20.5 %** | 51.42 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar PCD-499 BT Discman CD/MP3 s BT | 59.00 € | **46.00 €** | 43.2 % | **11.6 %** | 46.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (biela) + 3 vent... | 92.00 € | **79.00 €** | 35.2 % | **16.1 %** | 79.46 € | cena podľa najlacnejšieho iného predajcu |
| Sada flexibilného osvetlenia Neewer BH40C s dvoma ra... | 160.00 € | **147.00 €** | 30.5 % | **19.9 %** | 147.46 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **127.50 €** | 24.7 % | **13.2 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **62.00 €** | 41.8 % | **17.5 %** | 62.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **38.50 €** | 53.4 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **57.50 €** | 40.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Teleskop Phone Cage PGY ProShot pre iPhone 17 Pro Max | 79.50 € | **67.00 €** | 48.4 % | **25.1 %** | 67.04 € | cena podľa najlacnejšieho iného predajcu |
| Selfie stick TELESIN with ball head for action cameras | 27.50 € | **15.00 €** | 120.9 % | **20.5 %** | 15.08 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Nočné svetlo D1 Matter Smart na nočný stolík | 74.00 € | **61.50 €** | 43.7 % | **19.4 %** | 61.63 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady Mobile+ Kit | 79.50 € | **67.00 €** | 48.6 % | **25.2 %** | 67.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 PRO (čierna) + 6 ve... | 59.50 € | **47.00 €** | 45.7 % | **15.1 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V802 PRO 12000mah návnada loď (čierna) | 154.90 € | **142.50 €** | 33.3 % | **22.6 %** | 142.83 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **50.50 €** | 50.1 % | **21.3 %** | 50.58 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre V60 MOBIUS | 59.50 € | **47.50 €** | 46.3 % | **16.8 %** | 47.58 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 59.50 € | **47.50 €** | 49.4 % | **19.3 %** | 47.58 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (biele) | 106.90 € | **95.00 €** | 40.2 % | **24.6 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (čierne) | 106.90 € | **95.00 €** | 40.2 % | **24.6 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (oranžové) | 106.90 € | **95.00 €** | 40.2 % | **24.6 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 81.90 € | **70.00 €** | 25.6 % | **7.3 %** | 70.33 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra (12-dielna) | 149.90 € | **138.00 €** | 18.0 % | **8.7 %** | 138.38 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.50 €** | 58.3 % | **19.2 %** | 35.58 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife AQX-20 pre Mavic 4 PRO & RC 2 c | 69.50 € | **57.90 €** | 41.8 % | **18.1 %** | 58.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 57.40 € | **45.90 €** | 31.8 % | **5.4 %** | 45.96 € | cena podľa najlacnejšieho iného predajcu |
| GameSir G7 HE wired controller (black) | 54.00 € | **42.50 €** | 44.6 % | **13.8 %** | 42.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C500. | 84.00 € | **72.50 €** | 47.7 % | **27.5 %** | 72.71 € | cena podľa najlacnejšieho iného predajcu |
| Filter 1-5 stop Freewell Sherpa True Color VND pre i... | 79.50 € | **68.00 €** | 32.8 % | **13.6 %** | 68.29 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CB60B Dvojfarebné 70 W LED štúdiové osvetlenie | 136.00 € | **124.50 €** | 31.1 % | **20.0 %** | 124.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **45.90 €** | 44.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 32.8 % | **17.6 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.90 € | **78.50 €** | 40.5 % | **22.7 %** | 78.67 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 75.90 € | **64.50 €** | 27.9 % | **8.7 %** | 64.83 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 75.90 € | **64.50 €** | 35.0 % | **14.7 %** | 64.83 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Neptune 4 Max | 392.00 € | **380.90 €** | 8.1 % | **5.1 %** | 348.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ateliérové osvetlenie NEEWER BASICS SL90C | 54.00 € | **43.00 €** | 54.3 % | **22.9 %** | 43.04 € | cena podľa najlacnejšieho iného predajcu |
| Shoulder Bag Sunnylife for RS 4 | 35.50 € | **24.50 €** | 75.9 % | **21.4 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 54.8 % | **44.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 278.00 € | **267.00 €** | 14.9 % | **10.4 %** | 267.21 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 59.1 % | **48.1 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **64.00 €** | 36.0 % | **16.4 %** | 64.46 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **81.50 €** | 35.9 % | **20.0 %** | 81.58 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.20 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 53.3 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash EMT850 (čierny) | 69.50 € | **58.90 €** | 36.1 % | **15.4 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie NEEWER CB60 RGB, 70 W, CRI 97+ | 175.50 € | **164.90 €** | 27.4 % | **19.7 %** | 165.00 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 61.00 € | **50.50 €** | 52.6 % | **26.4 %** | 50.54 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 59.50 € | **49.00 €** | 35.0 % | **11.2 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-402B Externý filter | 74.00 € | **63.50 €** | 40.4 % | **20.5 %** | 63.69 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-Q29 8MP Wi-Fi IP kamera s dvoma objektívmi | 54.00 € | **43.50 €** | 47.3 % | **18.6 %** | 43.71 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma G83 (čierna) | 59.50 € | **49.00 €** | 47.6 % | **21.6 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **39.50 €** | 48.9 % | **18.3 %** | 39.72 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 123.5 % | **44.1 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BBIM12300X | 217.50 € | **207.50 €** | 10.2 % | **5.1 %** | 190.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LED lampa NEEWER x660 PRO II | 210.00 € | **200.00 €** | 26.1 % | **20.1 %** | 200.02 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 4500mAh 6S1P 22.2V 60C HardCase RC c... | 94.00 € | **84.00 €** | 46.8 % | **31.2 %** | 84.04 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 57 | 144.00 € | **134.00 €** | 20.1 % | **11.7 %** | 134.17 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2440P1-EU (ružová) | 139.50 € | **129.50 €** | 32.4 % | **23.0 %** | 129.67 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný statív Neewer LT35 z uhlíkových vlákien s o... | 274.50 € | **264.50 €** | 33.0 % | **28.2 %** | 264.75 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24010-56 | 48.50 € | **38.50 €** | 32.8 % | **5.4 %** | 38.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 PRO (biela) + 6 ven... | 59.50 € | **49.50 €** | 39.2 % | **15.8 %** | 49.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (biela) | 63.50 € | **53.50 €** | 36.3 % | **14.8 %** | 53.88 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na televízor Perlgear PGLF8B-N1 | 54.00 € | **44.00 €** | 49.0 % | **21.4 %** | 44.46 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný pohybový senzor MEROSS MS605MAT-EU | 39.98 € | **30.00 €** | 40.6 % | **5.5 %** | 30.30 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **103.00 €** | 30.8 % | **19.5 %** | 103.08 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **32.90 €** | 48.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Candy BR 26SSB6G-S | 332.50 € | **322.90 €** | 10.0 % | **6.8 %** | 322.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6AC V2 | 63.50 € | **53.90 €** | 39.6 % | **18.5 %** | 53.93 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **53.00 €** | 37.6 % | **16.6 %** | 53.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (biela) | 74.00 € | **64.50 €** | 36.9 % | **19.3 %** | 64.75 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 411.50 € | **402.00 €** | 11.5 % | **9.0 %** | 402.34 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 348.00 € | **338.50 €** | 20.0 % | **16.7 %** | 338.85 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa Neewer RGB168, 60 W, 2500–8500 K | 151.00 € | **141.50 €** | 24.8 % | **17.0 %** | 141.88 € | cena podľa najlacnejšieho iného predajcu |
| 2 v 1 Diagnostic Scanner OBD2 and Battery Tester Anc... | 59.50 € | **50.00 €** | 43.5 % | **20.6 %** | 50.46 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V050 Moro, 12 000 mAh | 89.50 € | **80.00 €** | 36.9 % | **22.4 %** | 80.49 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **70.50 €** | 33.5 % | **17.7 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine TAM8 (ružový) | 98.90 € | **89.50 €** | 35.9 % | **23.0 %** | 89.79 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM017 20 kg výrobník ľadových kociek (čierny) | 208.90 € | **199.50 €** | 21.5 % | **16.0 %** | 199.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.00 €** | 40.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.00 €** | 79.4 % | **18.9 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.00 €** | 79.4 % | **18.9 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **58.00 €** | 43.7 % | **24.2 %** | 58.29 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V020, 12 000 mAh | 151.00 € | **141.90 €** | 31.3 % | **23.4 %** | 141.96 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell ND pre OSMO 360 – balenie po 3... | 186.90 € | **177.90 €** | 30.0 % | **23.7 %** | 177.99 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 60cm LED stan bez tienidla 3380 lúmenov | 54.00 € | **45.00 €** | 45.0 % | **20.9 %** | 45.25 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 74.00 € | **65.00 €** | 19.9 % | **5.4 %** | 65.25 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 2800mAh 22.2V 60C 6S1P Lipo Battery ... | 74.00 € | **65.00 €** | 66.6 % | **46.3 %** | 65.29 € | cena podľa najlacnejšieho iného predajcu |
| Merač elektromagnetického poľa Habotest HT627 | 49.00 € | **40.00 €** | 39.6 % | **14.0 %** | 40.33 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač VEXILAR C9 s vertikálnou konštrukciou | 84.00 € | **75.00 €** | 33.7 % | **19.4 %** | 75.42 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 61.2 % | **25.0 %** | 31.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **28.50 €** | 52.3 % | **16.0 %** | 28.83 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 298.90 € | **290.00 €** | 16.3 % | **12.9 %** | 290.34 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **66.00 €** | 19.2 % | **5.1 %** | 64.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.00 €** | 40.9 % | **16.2 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **101.00 €** | 29.4 % | **19.2 %** | 101.33 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2416B1 Tréningový stroj na lyžovanie | 69.50 € | **61.00 €** | 40.9 % | **23.7 %** | 61.08 € | cena podľa najlacnejšieho iného predajcu |
| CA modul CAM 803 Nagravision CZ/SK VERZE s kartou Sk... | 45.50 € | **37.00 €** | 29.4 % | **5.2 %** | 37.09 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Ice Machine 651 | 107.50 € | **99.00 €** | 20.8 % | **11.2 %** | 99.13 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro – štandardná sada | 74.00 € | **65.50 €** | 36.9 % | **21.2 %** | 65.71 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 337.00 € | **328.50 €** | 9.7 % | **6.9 %** | 328.86 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 23-60" Perlesmith PSTVMC06 | 59.50 € | **51.00 €** | 42.0 % | **21.7 %** | 51.42 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.50 €** | 41.6 % | **10.9 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 43.8 % | **11.5 %** | 29.13 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.00 €** | 66.0 % | **23.4 %** | 24.33 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.00 €** | 45.9 % | **6.2 %** | 22.09 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **58.90 €** | 25.7 % | **10.3 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **41.50 €** | 55.4 % | **29.7 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.00 €** | 70.5 % | **19.3 %** | 19.38 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **56.50 €** | 33.6 % | **16.9 %** | 56.75 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.50 €** | 84.6 % | **18.7 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 21.0 % | **9.2 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXRA2501E | 116.50 € | **108.50 €** | 22.1 % | **13.7 %** | 108.63 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 11.1V 3S1P 60C HardCase 15# ... | 59.50 € | **51.50 €** | 68.7 % | **46.0 %** | 51.63 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T21B1 (čierny) | 140.50 € | **132.50 €** | 30.0 % | **22.6 %** | 132.79 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2016100 EQUA Kuchyňská váha | 26.50 € | **18.50 €** | 50.9 % | **5.3 %** | 18.88 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 864 Senior Radio | 134.50 € | **126.50 €** | 20.2 % | **13.0 %** | 126.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 45.0 % | **16.0 %** | 32.13 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **92.00 €** | 20.8 % | **11.2 %** | 92.50 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT6000 99,9 Wh štartér | 136.90 € | **129.00 €** | 32.3 % | **24.7 %** | 129.08 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX FH50R | 238.90 € | **231.00 €** | 27.4 % | **23.1 %** | 231.38 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 191.90 € | **184.00 €** | 15.1 % | **10.4 %** | 184.42 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 53.8 % | **19.2 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.00 €** | 38.6 % | **18.8 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **230.00 €** | 23.4 % | **19.3 %** | 230.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 50.1 % | **42.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 59.50 € | **51.90 €** | 43.3 % | **25.0 %** | 51.92 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 59.50 € | **51.90 €** | 43.3 % | **25.0 %** | 51.92 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 77.8 % | **20.7 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (čierna) | 38.50 € | **31.00 €** | 42.7 % | **14.9 %** | 31.04 € | cena podľa najlacnejšieho iného predajcu |
| Zariadenie na zoštíhlenie tela ANLAN 02-AXTY31-02A | 53.50 € | **46.00 €** | 46.3 % | **25.8 %** | 46.08 € | cena podľa najlacnejšieho iného predajcu |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 90.50 € | **83.00 €** | 22.2 % | **12.1 %** | 83.08 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UPi B7 10.1" 1920x1200 60Hz Portable Monitor | 150.50 € | **143.00 €** | 15.4 % | **9.6 %** | 143.13 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MSS815MAQUA-UN – 4-dielna sada inteligentných... | 59.50 € | **52.00 €** | 43.2 % | **25.2 %** | 52.17 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C100PRO (biela) | 79.50 € | **72.00 €** | 36.3 % | **23.4 %** | 72.21 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S30 nabíjacia stanica 6 v 1 4xUSB-C + 2... | 47.50 € | **40.00 €** | 42.9 % | **20.3 %** | 40.25 € | cena podľa najlacnejšieho iného predajcu |
| Ionizačná kefa na úpravu vlasov ANLAN 05-AZFS41-02A | 41.50 € | **34.00 €** | 44.9 % | **18.7 %** | 34.29 € | cena podľa najlacnejšieho iného predajcu |
| 4-zónový zavlažovací ovládač RainPoint ITV447 | 64.00 € | **56.50 €** | 43.9 % | **27.0 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M + 3 ventilátory (... | 48.50 € | **41.00 €** | 42.5 % | **20.5 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Neewer BP66 štúdiový set dve LED lampy + filtre + st... | 47.50 € | **40.00 €** | 42.4 % | **19.9 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 42.50 € | **35.00 €** | 44.5 % | **19.0 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.90 € | **188.50 €** | 11.0 % | **6.8 %** | 188.75 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.90 €** | 32.3 % | **18.5 %** | 62.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.00 €** | 35.4 % | **16.6 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **22.50 €** | 51.2 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.50 €** | 61.9 % | **19.9 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 65.3 % | **20.1 %** | 19.25 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **60.00 €** | 32.6 % | **18.5 %** | 60.08 € | cena podľa najlacnejšieho iného predajcu |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 65.2 % | **13.5 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 74.4 % | **19.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 74.4 % | **19.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **92.90 €** | 31.4 % | **22.2 %** | 92.92 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **117.00 €** | 29.1 % | **21.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 346.50 € | **339.50 €** | 7.3 % | **5.1 %** | 333.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.50 € | **40.50 €** | 23.8 % | **5.6 %** | 39.72 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 99.90 € | **92.90 €** | 18.8 % | **10.5 %** | 92.92 € | cena podľa najlacnejšieho iného predajcu |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 109.00 € | **102.00 €** | 15.7 % | **8.3 %** | 102.08 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 231.00 € | **224.00 €** | 16.9 % | **13.3 %** | 224.20 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 197.50 € | **190.50 €** | 13.9 % | **9.9 %** | 190.72 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 197.50 € | **190.50 €** | 13.9 % | **9.9 %** | 190.72 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT692G tester optických vlákien | 41.00 € | **34.00 €** | 39.2 % | **15.4 %** | 34.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 59.50 € | **52.50 €** | 26.7 % | **11.8 %** | 52.79 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TB0002 Pozadie | 49.50 € | **42.50 €** | 44.8 % | **24.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 48.00 € | **41.00 €** | 29.5 % | **10.6 %** | 41.29 € | cena podľa najlacnejšieho iného predajcu |
| LED pásik YEELIGHT Obsid RGBIC YLFWD-0025 | 59.50 € | **52.50 €** | 34.8 % | **18.9 %** | 52.88 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na mikrofón Fifine BM88 (ružový) | 48.00 € | **41.00 €** | 43.3 % | **22.4 %** | 41.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **115.00 €** | 26.2 % | **19.0 %** | 115.50 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.50 €** | 51.3 % | **6.4 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.00 €** | 31.1 % | **15.9 %** | 53.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 43.6 % | **17.0 %** | 30.58 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2800mAh 14,8V 60C 4S1P LiPo ... | 54.90 € | **48.00 €** | 48.2 % | **29.6 %** | 48.42 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU4941WW | 365.90 € | **359.00 €** | 7.0 % | **5.0 %** | 341.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **22.90 €** | 50.0 % | **15.6 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.00 €** | 21.7 % | **12.9 %** | 88.29 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.00 €** | 43.9 % | **24.5 %** | 43.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **63.00 €** | 31.5 % | **18.8 %** | 63.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.00 €** | 56.9 % | **19.1 %** | 21.42 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **20.50 €** | 39.4 % | **5.2 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.50 €** | 29.9 % | **11.6 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na abdukciu bedra MERACH MR-2519BL1 | 89.50 € | **82.90 €** | 38.2 % | **28.0 %** | 82.92 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600R RGB | 147.50 € | **140.90 €** | 26.8 % | **21.1 %** | 140.96 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER LED pásik – neónový RGB | 79.50 € | **72.90 €** | 35.9 % | **24.6 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.00 €** | 34.1 % | **14.3 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný digitálny multimeter UNI-T UT123D | 27.00 € | **20.50 €** | 40.1 % | **6.4 %** | 18.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na úpravu vlasov ANLAN Miracle | 69.50 € | **63.00 €** | 35.5 % | **22.9 %** | 63.04 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 49.50 € | **43.00 €** | 26.4 % | **9.8 %** | 43.04 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 47.50 € | **41.00 €** | 28.2 % | **10.7 %** | 41.04 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač Rojeco 3L WiFi verzia Smart Feed (biely) | 45.00 € | **38.50 €** | 39.7 % | **19.6 %** | 38.58 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNDS8 double monitor mount 13-32" | 67.50 € | **61.00 €** | 37.3 % | **24.1 %** | 61.13 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT603 (čierna) | 40.50 € | **34.00 €** | 45.3 % | **22.0 %** | 34.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 (čierna) | 37.50 € | **31.00 €** | 38.3 % | **14.4 %** | 31.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 54.50 € | **48.00 €** | 27.8 % | **12.6 %** | 48.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 54.50 € | **48.00 €** | 35.1 % | **19.0 %** | 48.21 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire TF02 | 73.50 € | **67.00 €** | 32.4 % | **20.7 %** | 67.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 (biela) | 39.00 € | **32.50 €** | 38.0 % | **15.0 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono WM622 PBC2 | 54.00 € | **47.50 €** | 48.6 % | **30.7 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 49.00 € | **42.50 €** | 32.6 % | **15.0 %** | 42.88 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 58.00 € | **51.50 €** | 46.2 % | **29.8 %** | 51.90 € | cena podľa najlacnejšieho iného predajcu |
| Candy CDG1S514ESH | 246.50 € | **240.00 €** | 12.6 % | **9.7 %** | 240.41 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové slúchadlá Maono AU-MH601 | 42.50 € | **36.00 €** | 45.5 % | **23.3 %** | 36.42 € | cena podľa najlacnejšieho iného predajcu |
| Freewell set of 4 ND filters for DJI Osmo Action 5 Pro | 47.50 € | **41.00 €** | 31.2 % | **13.3 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BG (zelený) | 37.50 € | **31.00 €** | 46.5 % | **21.1 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BS (strieborný) | 37.50 € | **31.00 €** | 46.5 % | **21.1 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 69.00 € | **62.50 €** | 26.8 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.00 €** | 33.8 % | **18.9 %** | 51.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **23.50 €** | 45.7 % | **15.2 %** | 23.60 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 52.7 % | **45.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) + 5 ventilá... | 54.00 € | **47.90 €** | 31.5 % | **16.6 %** | 47.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 62.7 % | **22.4 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **13.90 €** | 54.0 % | **7.1 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **13.90 €** | 84.7 % | **28.4 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **58.50 €** | 25.1 % | **13.3 %** | 58.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 59.3 % | **14.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI601FMC | 217.50 € | **211.50 €** | 8.1 % | **5.1 %** | 211.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech Soaring 2700mAh 14,8V 30C 4S1P LiPo ... | 44.50 € | **38.50 €** | 61.4 % | **39.7 %** | 38.58 € | cena podľa najlacnejšieho iného predajcu |
| Solac LV1301 | 51.50 € | **45.50 €** | 80.2 % | **59.2 %** | 45.63 € | cena podľa najlacnejšieho iného predajcu |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 43.50 € | **37.50 €** | 44.0 % | **24.1 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 290.00 € | **284.00 €** | 59.6 % | **56.3 %** | 284.17 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-10 | 33.00 € | **27.00 €** | 39.8 % | **14.4 %** | 27.21 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 71.50 € | **65.50 €** | 34.5 % | **23.2 %** | 65.75 € | cena podľa najlacnejšieho iného predajcu |
| MOES WHT-006-GB-WH Wi-Fi termostat pre elektrické kú... | 40.00 € | **34.00 €** | 41.8 % | **20.5 %** | 34.25 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 11 (čierny) | 42.50 € | **36.50 €** | 43.1 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 9 (čierny) | 42.50 € | **36.50 €** | 43.1 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 42.50 € | **36.50 €** | 30.4 % | **12.0 %** | 36.79 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Discovery Gator 10x50 | 53.50 € | **47.50 €** | 27.4 % | **13.1 %** | 47.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 19,1MM 9 (čierny) | 37.50 € | **31.50 €** | 45.1 % | **21.9 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Fotografická taška cez rameno PGYTECH OneGo Pocket S... | 42.50 € | **36.50 €** | 43.2 % | **23.0 %** | 36.83 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10 128G (biela) | 230.50 € | **224.50 €** | 12.8 % | **9.8 %** | 224.84 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10 128GGB (čierny) | 230.50 € | **224.50 €** | 12.8 % | **9.8 %** | 224.84 € | cena podľa najlacnejšieho iného predajcu |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 124.50 € | **118.50 €** | 15.0 % | **9.5 %** | 118.88 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie NEEWER BASICS VL67B | 41.50 € | **35.50 €** | 41.0 % | **20.6 %** | 35.88 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BB (modrý) | 37.00 € | **31.00 €** | 44.6 % | **21.1 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 3L automatický dávkovač krmiva v tlačidlovej ... | 40.00 € | **34.00 €** | 37.7 % | **17.0 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **28.90 €** | 43.7 % | **19.1 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 52.6 % | **43.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 51.2 % | **43.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **69.00 €** | 28.7 % | **18.6 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 35.2 % | **11.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **86.50 €** | 21.8 % | **14.2 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.50 €** | 29.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 47.6 % | **13.4 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **16.90 €** | 55.2 % | **16.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **41.50 €** | 38.7 % | **22.1 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Držiak batérie SJCAM pre model C300 | 44.50 € | **38.90 €** | 41.8 % | **23.9 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6T (modrý) | 42.50 € | **36.90 €** | 41.3 % | **22.6 %** | 37.00 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 78.50 € | **72.90 €** | 22.1 % | **13.3 %** | 72.92 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.00 €** | 34.7 % | **23.0 %** | 59.38 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 42.7 % | **35.2 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WR802N cestovní AP/klient, 1x... | 28.50 € | **23.00 €** | 30.6 % | **5.4 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal CY505EE0 | 115.50 € | **110.00 €** | 16.9 % | **11.3 %** | 110.04 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 8301A | 84.00 € | **78.50 €** | 16.9 % | **9.2 %** | 78.54 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitá odsávačka mlieka Grownsy | 38.50 € | **33.00 €** | 49.8 % | **28.4 %** | 33.08 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 20.3MM 11 (Złoty) | 33.50 € | **28.00 €** | 46.3 % | **22.3 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitý inteligentný dávkovač krmiva 5 l Oneisall PF10 | 74.00 € | **68.50 €** | 32.9 % | **23.0 %** | 68.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer NutriSpin | 54.00 € | **48.50 €** | 32.6 % | **19.1 %** | 48.63 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24440-56 | 118.00 € | **112.50 €** | 16.6 % | **11.2 %** | 112.67 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-01 | 27.50 € | **22.00 €** | 42.6 % | **14.1 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta 3v1 RH5A32E0 | 125.50 € | **120.00 €** | 16.7 % | **11.6 %** | 120.21 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 – vysokovýkonný filter | 47.00 € | **41.50 €** | 38.3 % | **22.1 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Krytky objektívov Puluz pre kameru Insta360 X5 | 35.50 € | **30.00 €** | 34.2 % | **13.4 %** | 30.25 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 10 (čierny) | 42.00 € | **36.50 €** | 41.4 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 12 (čierny) | 42.00 € | **36.50 €** | 41.4 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 8 (čierny) | 42.00 € | **36.50 €** | 41.4 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| Sati Ethiopia Moka Sidamo 500 g zrno | 17.00 € | **11.50 €** | 57.9 % | **6.8 %** | 11.75 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Sky B-4610 zlatý | 70.50 € | **65.00 €** | 19.4 % | **10.1 %** | 65.29 € | cena podľa najlacnejšieho iného predajcu |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 354.50 € | **349.00 €** | 7.9 % | **6.2 %** | 349.29 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Short-Size Li... | 64.00 € | **58.50 €** | 39.0 % | **27.0 %** | 58.79 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT333BT Mini merač teploty a vlhkosti | 31.00 € | **25.50 €** | 37.9 % | **13.4 %** | 25.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (biela) | 54.00 € | **48.50 €** | 28.6 % | **15.5 %** | 48.88 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre GoPro Hero 13 | 38.50 € | **33.00 €** | 39.8 % | **19.8 %** | 33.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 20.3MM 11 (black) | 33.50 € | **28.00 €** | 47.4 % | **23.2 %** | 28.42 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L WiFi verzia Bl Automatický dávkovač krmiva | 43.50 € | **38.00 €** | 41.3 % | **23.4 %** | 38.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná fontána/napájačka pre domáce zvieratá s... | 59.50 € | **54.00 €** | 30.1 % | **18.0 %** | 54.46 € | cena podľa najlacnejšieho iného predajcu |
| Neweer TL97C RGB LED farebné foto svetlo | 38.50 € | **33.00 €** | 43.8 % | **23.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 249.50 € | **244.00 €** | 23.9 % | **21.2 %** | 244.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.50 €** | 35.4 % | **16.8 %** | 34.63 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **34.50 €** | 28.3 % | **10.7 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **32.00 €** | 43.8 % | **23.0 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| AMICA Plech hluboký 9065936 | 28.90 € | **23.50 €** | 100.6 % | **63.2 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava plynového pedála a spojky MOZA SRP Lite2 Per... | 43.90 € | **38.50 €** | 24.4 % | **9.1 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **69.50 €** | 55.5 % | **44.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 46.7 % | **22.7 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **27.00 €** | 38.9 % | **16.1 %** | 27.46 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 45.3 % | **19.8 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **24.50 €** | 40.2 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.50 €** | 32.6 % | **18.7 %** | 44.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **44.50 €** | 32.3 % | **18.4 %** | 44.79 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.00 €** | 37.2 % | **22.3 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.00 €** | 35.9 % | **21.1 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.00 €** | 33.0 % | **18.2 %** | 41.46 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.90 €** | 52.5 % | **46.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26380-70 | 43.00 € | **37.90 €** | 19.6 % | **5.4 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Huanuo HNCM2 monitor mount 13-32" | 39.00 € | **33.90 €** | 41.0 % | **22.5 %** | 33.91 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter True RMS Habotest H... | 32.00 € | **26.90 €** | 38.4 % | **16.3 %** | 26.92 € | cena podľa najlacnejšieho iného predajcu |
| Euti Freewell pre Iphone 15 PRO s držiakom 17 mm | 48.00 € | **42.90 €** | 30.2 % | **16.4 %** | 42.92 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Samsung S25 Ultra so 17 mm držiakom | 48.00 € | **42.90 €** | 20.9 % | **8.0 %** | 42.92 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 37.6 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 50.7 % | **19.5 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 38.3 % | **9.6 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 39.7 % | **28.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.50 €** | 30.9 % | **15.4 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 39.00 € | **34.00 €** | 20.8 % | **5.3 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring Colmi R12 21,6MM 12 (čierny) | 43.00 € | **38.00 €** | 39.0 % | **22.8 %** | 38.04 € | cena podľa najlacnejšieho iného predajcu |
| 3-zónový hadicový časovač RainPoint ITV305 | 54.00 € | **49.00 €** | 34.9 % | **22.4 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HBL-801 kaskádový filter | 23.00 € | **18.00 €** | 73.3 % | **35.6 %** | 18.18 € | cena podľa najlacnejšieho iného predajcu |
| 2-zónový hadicový časovač Rainpoint ITV205 | 33.50 € | **28.50 €** | 41.3 % | **20.2 %** | 28.71 € | cena podľa najlacnejšieho iného predajcu |
| Kompletná sada príslušenstva PULUZ 45 v 1 PKT10 | 39.50 € | **34.50 €** | 22.4 % | **6.9 %** | 34.71 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 54.00 € | **49.00 €** | 50.0 % | **36.1 %** | 49.21 € | cena podľa najlacnejšieho iného predajcu |
| Programovacia doska xTool mTiny | 44.50 € | **39.50 €** | 37.7 % | **22.2 %** | 39.75 € | cena podľa najlacnejšieho iného predajcu |
| Stolný statív Puluz PU3070GT | 45.50 € | **40.50 €** | 35.6 % | **20.7 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Telesin CPL/ND8/ND16/ND32 pre Insta3... | 38.50 € | **33.50 €** | 38.1 % | **20.1 %** | 33.83 € | cena podľa najlacnejšieho iného predajcu |
| TEESA AIR FRYER TSA8046W | 47.00 € | **42.00 €** | 17.6 % | **5.1 %** | 42.38 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 65.00 € | **60.00 €** | 19.7 % | **10.5 %** | 60.38 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny ramenný popruh Neewer | 74.00 € | **69.00 €** | 35.8 % | **26.6 %** | 69.38 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 42.50 € | **37.50 €** | 38.6 % | **22.3 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 59.5 % | **19.7 %** | 15.25 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 19.99 € | **15.00 €** | 58.4 % | **18.9 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.00 €** | 59.8 % | **17.9 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 60.3 % | **15.0 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.50 €** | 22.6 % | **6.5 %** | 29.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 55.90 € | **51.00 €** | 15.3 % | **5.2 %** | 48.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačové ventilátory Darkflash Gauss G24 3 v 1 (bi... | 38.90 € | **34.00 €** | 36.0 % | **18.8 %** | 34.46 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.50 €** | 25.1 % | **6.6 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 36.4 % | **14.7 %** | 25.28 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **19.90 €** | 47.6 % | **19.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **22.50 €** | 39.8 % | **15.8 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6V (ružový) | 31.50 € | **26.90 €** | 43.8 % | **22.8 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava StreetGrip Telesin GoPro Hero 9-13 s klietkou | 70.50 € | **65.90 €** | 29.7 % | **21.3 %** | 65.96 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 41.1 % | **11.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 40.6 % | **11.1 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhoľnatého MOES WSS-CO s pripojením c... | 34.00 € | **29.50 €** | 39.9 % | **21.4 %** | 29.54 € | cena podľa najlacnejšieho iného predajcu |
| GODOX R200-HC40 mriežka s voštinovým vzorom | 25.00 € | **20.50 €** | 64.7 % | **35.1 %** | 20.54 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prsteň COLMI R02, veľkosť 12,21,3 mm (č... | 34.00 € | **29.50 €** | 41.7 % | **22.9 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor ONIKUMA L13 s mikrofónom | 33.00 € | **28.50 €** | 43.0 % | **23.5 %** | 28.58 € | cena podľa najlacnejšieho iného predajcu |
| Twarde etui Sunnylife do Neo 2 Motion Fly More Combo | 59.50 € | **55.00 €** | 27.5 % | **17.9 %** | 55.13 € | cena podľa najlacnejšieho iného predajcu |
| Baterka SUPERFIRE A6 | 31.50 € | **27.00 €** | 37.0 % | **17.4 %** | 27.21 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom JR-W13 5000 mAh powerbanka s nabíjaním Apple... | 18.50 € | **14.00 €** | 57.2 % | **18.9 %** | 14.29 € | cena podľa najlacnejšieho iného predajcu |
| RGB LED lampa NEEWER RGB61 | 30.00 € | **25.50 €** | 41.3 % | **20.1 %** | 25.79 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 21.3MM 12 (Black) | 32.50 € | **28.00 €** | 43.5 % | **23.7 %** | 28.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier Comfo Flex (biele) | 54.50 € | **50.00 €** | 18.2 % | **8.4 %** | 50.33 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 440 | 99.00 € | **94.50 €** | 16.9 % | **11.6 %** | 94.83 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 59.50 € | **55.00 €** | 37.1 % | **26.7 %** | 55.38 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight C2201C300 | 50.00 € | **45.50 €** | 27.1 % | **15.7 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 19.00 € | **14.50 €** | 80.7 % | **37.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 80.50 € | **76.00 €** | 12.3 % | **6.1 %** | 76.41 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 56.1 % | **19.3 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.50 €** | 55.6 % | **19.0 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 39.8 % | **33.6 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.00 €** | 41.0 % | **5.2 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 62.9 % | **21.5 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 58.4 % | **19.3 %** | 13.75 € | cena podľa najlacnejšieho iného predajcu |
| Lauben Low Sugar Rice Cooker 1500AT | 92.90 € | **88.50 €** | 10.4 % | **5.1 %** | 69.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 11.90 € | **7.50 €** | 74.6 % | **10.1 %** | 7.59 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 22,4MM 13 (čierny) | 36.90 € | **32.50 €** | 38.7 % | **22.2 %** | 32.63 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.90 €** | 31.8 % | **11.1 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.50 €** | 40.5 % | **20.5 %** | 25.71 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 61.8 % | **38.8 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 49.00 € | **44.90 €** | 21.9 % | **11.7 %** | 44.92 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky C50i (biele) | 35.00 € | **30.90 €** | 41.2 % | **24.7 %** | 30.92 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50i (sivé) | 35.00 € | **30.90 €** | 41.2 % | **24.7 %** | 30.92 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6VR (červený) | 31.00 € | **26.90 €** | 41.5 % | **22.8 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **20.50 €** | 38.0 % | **15.0 %** | 20.83 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **20.50 €** | 43.5 % | **19.6 %** | 20.88 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Opal Titanium BS4950 | 84.00 € | **79.90 €** | 16.7 % | **11.0 %** | 80.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **40.50 €** | 28.8 % | **17.0 %** | 40.63 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 33.4 % | **9.5 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **18.50 €** | 44.2 % | **18.3 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.00 €** | 30.6 % | **18.1 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Statív Mini PGYTECH s nadstavcom pre vreckové / akčn... | 32.00 € | **28.00 €** | 41.6 % | **23.9 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 filters Sunnylife MCUV, ND8/16/34/64/128 fo... | 27.00 € | **23.00 €** | 40.4 % | **19.6 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Flextail Tiny Helio 700Z (oranžová) | 27.00 € | **23.00 €** | 40.5 % | **19.7 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZTRV-PJ-601-MS Inteligentná termostatická hlavica | 30.00 € | **26.00 €** | 40.1 % | **21.4 %** | 26.08 € | cena podľa najlacnejšieho iného predajcu |
| Detektor plynu MOES WSS-S-GL s Wi-Fi | 27.00 € | **23.00 €** | 42.5 % | **21.4 %** | 23.08 € | cena podľa najlacnejšieho iného predajcu |
| Monitor mount 13-30" Huanuo HNCM7 | 26.50 € | **22.50 €** | 45.9 % | **23.9 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny decibelomer Habotest HT622B USB A/C | 23.50 € | **19.50 €** | 43.1 % | **18.8 %** | 19.63 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/VND8/UV pre DJI Osmo Action... | 33.00 € | **29.00 €** | 38.0 % | **21.3 %** | 29.13 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 49.00 € | **45.00 €** | 23.0 % | **13.0 %** | 45.13 € | cena podľa najlacnejšieho iného predajcu |
| Kábel USB-A do Lightning MFI 0,35 m PGYTECH (P-GM-115) | 17.50 € | **13.50 €** | 56.3 % | **20.6 %** | 13.63 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 126.50 € | **122.50 €** | 15.9 % | **12.2 %** | 122.65 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 49.50 € | **45.50 €** | 19.8 % | **10.2 %** | 45.67 € | cena podľa najlacnejšieho iného predajcu |
| Neewer LS-300 – bodové svetlo s výkonom 300 W a uchy... | 193.00 € | **189.00 €** | 22.5 % | **20.0 %** | 189.17 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 290.50 € | **286.50 €** | 11.0 % | **9.5 %** | 286.69 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný laserový teplomer Habotest HT650A | 19.50 € | **15.50 €** | 39.8 % | **11.1 %** | 15.70 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 30cm WiFi/Bluetooth 16M RGBCW Gos... | 26.50 € | **22.50 €** | 41.4 % | **20.0 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor DarkFlash S31 ARGB (biely) | 22.50 € | **18.50 €** | 38.7 % | **14.0 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 137 | 37.00 € | **33.00 €** | 24.4 % | **10.9 %** | 33.25 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/ND8/ND16/ND32 pre DJI Osmo ... | 32.50 € | **28.50 €** | 37.3 % | **20.4 %** | 28.75 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 35.00 € | **31.00 €** | 19.6 % | **5.9 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný hliníkový statív Neewer LT07 s guľovou hlavou | 83.00 € | **79.00 €** | 30.3 % | **24.0 %** | 79.33 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Fifine Tank6 (biely) | 76.50 € | **72.50 €** | 28.7 % | **22.0 %** | 72.88 € | cena podľa najlacnejšieho iného predajcu |
| Prevodovka PXN - usporiadanie H 7+1 | 79.00 € | **75.00 €** | 18.4 % | **12.4 %** | 75.38 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné púzdro DiCAPac WP-S5 pro fotoaparáty středn... | 83.00 € | **79.00 €** | 15.5 % | **9.9 %** | 79.42 € | cena podľa najlacnejšieho iného predajcu |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 68.00 € | **64.00 €** | 12.0 % | **5.4 %** | 64.44 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-P67 3MP Wi-Fi IP kamera | 24.00 € | **20.00 €** | 40.6 % | **17.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| GODOX DPU-130T difúzna tkanina pre dáždnik s priemer... | 23.00 € | **19.00 €** | 47.6 % | **21.9 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.00 €** | 43.3 % | **14.7 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 41.8 % | **13.5 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 26.6 % | **14.0 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 52.6 % | **16.3 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100W (čierny) | 51.90 € | **48.00 €** | 34.9 % | **24.8 %** | 48.21 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 52.90 € | **49.00 €** | 24.0 % | **14.9 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 52.90 € | **49.00 €** | 24.0 % | **14.9 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **71.00 €** | 19.5 % | **13.4 %** | 71.08 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.50 €** | 21.7 % | **5.3 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 37.9 % | **18.4 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica ONIKUMA MT501 (biela) | 32.50 € | **28.90 €** | 41.0 % | **25.4 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS200 PRO TB2 PRO TOPUMP – mini pumpa na bic... | 52.50 € | **48.90 €** | 34.0 % | **24.8 %** | 48.92 € | cena podľa najlacnejšieho iného predajcu |
| Venta Filter Hepa 13 for AP100 | 51.50 € | **47.90 €** | 19.4 % | **11.0 %** | 47.96 € | cena podľa najlacnejšieho iného predajcu |
| Reflektor GODOX RFT-4 | 22.50 € | **18.90 €** | 47.0 % | **23.5 %** | 18.96 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM09 (čierna) | 31.50 € | **27.90 €** | 41.8 % | **25.6 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Set of 5 Filters Sunnylife ND 8/16/32/64/128 for DJI... | 22.50 € | **18.90 €** | 30.3 % | **9.4 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **21.00 €** | 43.4 % | **22.4 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 259.50 € | **255.90 €** | 6.5 % | **5.0 %** | 253.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.50 € | **78.90 €** | 9.8 % | **5.0 %** | 78.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada pedálov PXN PD HM - brzda a plyn (Windows 7/8/1... | 80.50 € | **76.90 €** | 28.4 % | **22.6 %** | 76.96 € | cena podľa najlacnejšieho iného predajcu |
| Superfire HL23-S headlamp flashlight, 350lm, USB-C | 16.00 € | **12.50 €** | 38.7 % | **8.3 %** | 9.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Pečenka Plus 0133 90020 | 88.00 € | **84.50 €** | 12.4 % | **7.9 %** | 84.51 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor DarkFlash S31 ARGB (čierny) | 22.00 € | **18.50 €** | 36.8 % | **15.1 %** | 18.54 € | cena podľa najlacnejšieho iného predajcu |
| Svetlomet Superfire HL31, typ C | 33.00 € | **29.50 €** | 30.8 % | **16.9 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (biela) | 31.50 € | **28.00 €** | 41.1 % | **25.4 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT206A Digitálny kliešťový merač | 22.50 € | **19.00 €** | 35.6 % | **14.5 %** | 19.17 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY Buds HT15 ANC (čierne) | 19.00 € | **15.50 €** | 39.7 % | **13.9 %** | 15.70 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná detská váha Grownsy B12H | 32.00 € | **28.50 €** | 41.2 % | **25.8 %** | 28.71 € | cena podľa najlacnejšieho iného predajcu |
| Upevnenie príslušenstva PGYTECH Magic Arm (P-CG-009)... | 22.00 € | **18.50 €** | 41.1 % | **18.6 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka 6x USB Blitzwolf BW-S15, QC 3.0,60 W (biela) | 27.50 € | **24.00 €** | 38.5 % | **20.9 %** | 24.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač Sonoff SPM-Main LAN (ethernet) WiFi | 22.50 € | **19.00 €** | 42.5 % | **20.3 %** | 19.21 € | cena podľa najlacnejšieho iného predajcu |
| PXN Z D1 Rukoväť ručnej brzdy | 28.00 € | **24.50 €** | 24.7 % | **9.1 %** | 24.71 € | cena podľa najlacnejšieho iného predajcu |
| GameSir X5 Lite BK – mobilný herný ovládač USB-C, či... | 28.00 € | **24.50 €** | 26.7 % | **10.8 %** | 24.75 € | cena podľa najlacnejšieho iného predajcu |
| Súprava strojčekov na strihanie domácich zvierat One... | 47.00 € | **43.50 €** | 37.3 % | **27.0 %** | 43.75 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 23.50 € | **20.00 €** | 30.8 % | **11.3 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát v mobile PGY LinkGo (ružový) | 29.50 € | **26.00 €** | 41.2 % | **24.4 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| PETKIT PURA MAX 2 Krmivo pre mačky | 28.50 € | **25.00 €** | 38.9 % | **21.9 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač pre rolety MOES WRS-EUC2-WH-MS | 19.50 € | **16.00 €** | 40.2 % | **15.0 %** | 16.33 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 31.50 € | **28.00 €** | 40.3 % | **24.7 %** | 28.33 € | cena podľa najlacnejšieho iného predajcu |
| Kryt na toaletu pre mačky Petkit Hood | 36.00 € | **32.50 €** | 34.4 % | **21.3 %** | 32.83 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná baterka SUPERFIRE D30 | 23.00 € | **19.50 €** | 35.7 % | **15.0 %** | 19.83 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné závesné svetlo Yeelight Crystal | 93.00 € | **89.50 €** | 25.6 % | **20.9 %** | 89.85 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 37.50 € | **34.00 €** | 36.5 % | **23.8 %** | 34.41 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM07 RGB (čierna) | 28.50 € | **25.00 €** | 42.3 % | **24.8 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 47.50 € | **44.00 €** | 42.6 % | **32.1 %** | 44.42 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (červené) | 35.50 € | **32.00 €** | 24.0 % | **11.8 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 35.50 € | **32.00 €** | 22.6 % | **10.5 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Fontána pre zvieratá / napájačka 1,5 l Rojeco | 20.50 € | **17.00 €** | 43.6 % | **19.0 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZS-B-EU1 ZigBee 1-kanálový vypínač osvetlenia | 20.50 € | **17.00 €** | 42.6 % | **18.2 %** | 17.46 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 60.50 € | **57.00 €** | 16.5 % | **9.8 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 43.6 % | **18.5 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.50 €** | 30.6 % | **19.3 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 46.8 % | **17.9 %** | 14.04 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **34.00 €** | 31.8 % | **19.8 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **29.90 €** | 33.0 % | **19.4 %** | 29.92 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 106.90 € | **103.50 €** | 18.5 % | **14.8 %** | 103.71 € | cena podľa najlacnejšieho iného predajcu |
| Držiak so studenou päticou Freewell pre Fuji X100VI ... | 39.90 € | **36.50 €** | 21.8 % | **11.4 %** | 36.54 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický otočný stojan Puluz 30 cm USB (čierny) | 35.90 € | **32.50 €** | 27.6 % | **15.5 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.00 €** | 41.2 % | **12.0 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **28.90 €** | 33.2 % | **19.2 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.04 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 35.9 % | **21.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 46.0 % | **39.3 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 50.0 % | **43.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| MOES WV-LZ-BK Wi-Fi vodovodný ventil (čierny) | 23.00 € | **19.90 €** | 35.8 % | **17.5 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Ruby Red BS4717 | 43.00 € | **39.90 €** | 19.0 % | **10.4 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco automatic soap dispenser 400ml | 19.00 € | **15.90 €** | 42.1 % | **18.9 %** | 15.96 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75TKBXC | 74.00 € | **70.90 €** | 17.1 % | **12.2 %** | 70.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 193.00 € | **189.90 €** | 24.6 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, zlatá) | 193.00 € | **189.90 €** | 24.6 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **19.50 €** | 23.0 % | **6.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.50 €** | 44.0 % | **33.8 %** | 39.88 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAK4200CT  bezdrátová sluchátka | 39.50 € | **36.50 €** | 14.8 % | **6.1 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný detektor dymu MOES WSS-S-SSD-A Wi-Fi | 24.50 € | **21.50 €** | 37.9 % | **21.1 %** | 21.54 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový mikrofón PULUZ PU647B | 27.00 € | **24.00 €** | 26.6 % | **12.5 %** | 24.04 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZS-B-EU2 Dvojkanálový vypínač osvetlenia ZigBee | 21.00 € | **18.00 €** | 41.3 % | **21.1 %** | 18.04 € | cena podľa najlacnejšieho iného predajcu |
| Powerbank OS-Baseus Compact IP 5000 mAh 20 W (blue) | 21.50 € | **18.50 €** | 35.9 % | **17.0 %** | 18.54 € | cena podľa najlacnejšieho iného predajcu |
| UV Superfire HZ01 head flashlight | 23.00 € | **20.00 €** | 30.9 % | **13.8 %** | 20.04 € | cena podľa najlacnejšieho iného predajcu |
| Venta H13 & Anti-Formaldehyd set 2er VPE | 69.90 € | **66.90 €** | 16.0 % | **11.0 %** | 66.96 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO8708W | 77.50 € | **74.50 €** | 16.8 % | **12.3 %** | 74.58 € | cena podľa najlacnejšieho iného predajcu |
| Náramok Colmi M06 Smartband (ružové zlato) | 38.50 € | **35.50 €** | 31.5 % | **21.3 %** | 35.58 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LR15Bi Okrúhle svetlo | 19.50 € | **16.50 €** | 59.2 % | **34.7 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM08 (čierna) | 31.00 € | **28.00 €** | 39.0 % | **25.6 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (čierna) | 31.00 € | **28.00 €** | 38.9 % | **25.4 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Herné reproduktory Onikuma L2 | 17.50 € | **14.50 €** | 43.1 % | **18.6 %** | 14.63 € | cena podľa najlacnejšieho iného predajcu |
| Rozšíriteľný statív Puluz so selfie tyčou | 19.50 € | **16.50 €** | 36.3 % | **15.3 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO727BL | 61.50 € | **58.50 €** | 16.9 % | **11.2 %** | 58.67 € | cena podľa najlacnejšieho iného predajcu |
| Torras Ostand R Fusion Series Case for iPhone 16 Pro... | 18.00 € | **15.00 €** | 43.8 % | **19.8 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu |
| Ultrazvukový čistič pokožky ANLAN ALCPJ07-02 (biely) | 25.00 € | **22.00 €** | 41.1 % | **24.2 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| Neweer SP-02 rýchloupínací adaptér pre telefón Arca | 25.50 € | **22.50 €** | 42.5 % | **25.7 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov PGYTECH ND-PL 8/16/32/64 pre DJI Mavi... | 18.50 € | **15.50 €** | 40.8 % | **18.0 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Kombinovaná taška Sunnylife pre NEO Motion Fly (073530) | 29.00 € | **26.00 €** | 34.1 % | **20.2 %** | 26.21 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire L21 | 19.00 € | **16.00 €** | 36.0 % | **14.5 %** | 16.21 € | cena podľa najlacnejšieho iného predajcu |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 20.50 € | **17.50 €** | 38.7 % | **18.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA BT883 (biele) | 28.50 € | **25.50 €** | 38.8 % | **24.2 %** | 25.75 € | cena podľa najlacnejšieho iného predajcu |
| San Marco SUPREMO 1 kg zrno | 24.50 € | **21.50 €** | 22.8 % | **7.7 %** | 21.79 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Rouge BP3443 | 34.50 € | **31.50 €** | 19.8 % | **9.3 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (červený) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (čierny) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (oranžový) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (ružový) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 18.50 € | **15.50 €** | 28.7 % | **7.8 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 43.00 € | **40.00 €** | 16.5 % | **8.3 %** | 40.33 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno ELEGOO ASA (čierne) | 14.50 € | **11.50 €** | 48.5 % | **17.8 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Herný pedál PXN Vector X Clutch | 106.50 € | **103.50 €** | 16.1 % | **12.8 %** | 103.83 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 86 mm | 26.50 € | **23.50 €** | 25.0 % | **10.9 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 95 mm | 26.50 € | **23.50 €** | 25.0 % | **10.9 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Magnetická rukoväť MagSafe Fun Shot Grip2 (biela) | 25.00 € | **22.00 €** | 35.8 % | **19.5 %** | 22.38 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 19.00 € | **16.00 €** | 39.7 % | **17.6 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto Lamborghini Huracán | 33.00 € | **30.00 €** | 23.6 % | **12.4 %** | 30.38 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall X2 + N5 sada na strihanie domácich zvierat | 47.50 € | **44.50 €** | 34.6 % | **26.1 %** | 44.88 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire L6-H – 750 lm, 15W, USB-C, 5 režimov | 21.00 € | **18.00 €** | 34.2 % | **15.0 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire TL01-X | 20.50 € | **17.50 €** | 34.4 % | **14.7 %** | 17.88 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT122, bezkontaktný tester napätia / tester... | 17.00 € | **14.00 €** | 41.6 % | **16.6 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 28.00 € | **25.00 €** | 20.7 % | **7.8 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 27.00 € | **24.00 €** | 21.7 % | **8.2 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS ONIKUMA TX612 (čierne) | 23.00 € | **20.00 €** | 42.1 % | **23.6 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire s rozhraním USB-C L24 | 19.00 € | **16.00 €** | 35.5 % | **14.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 43.7 % | **22.2 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 40.7 % | **17.1 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.00 €** | 44.9 % | **21.2 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **14.00 €** | 42.8 % | **18.2 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 46.2 % | **20.3 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 47.0 % | **21.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 32.90 € | **30.00 €** | 26.9 % | **15.7 %** | 30.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 21.90 € | **19.00 €** | 38.6 % | **20.2 %** | 19.14 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **12.00 €** | 51.0 % | **22.0 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.00 €** | 41.3 % | **14.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **21.90 €** | 36.2 % | **21.3 %** | 21.96 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 60.0 % | **44.3 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 36.8 % | **23.4 %** | 24.75 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.90 €** | 24.1 % | **9.5 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón ONIKUMA M-730 (čierny) | 28.50 € | **25.90 €** | 35.2 % | **22.9 %** | 25.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W3 | 19.50 € | **16.90 €** | 40.2 % | **21.5 %** | 16.92 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak MagSafe Fun Shot Grip2 (čierny) | 24.50 € | **21.90 €** | 35.4 % | **21.0 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (biela) | 23.50 € | **20.90 €** | 41.5 % | **25.9 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W1 | 24.50 € | **21.90 €** | 37.3 % | **22.7 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire DL01 | 20.50 € | **17.90 €** | 33.7 % | **16.7 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre DJI Osmo Action 5 (modré) | 16.50 € | **13.90 €** | 44.2 % | **21.5 %** | 13.92 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Torras Ostand R Fusion pre iPhone 16 Pro Max ... | 18.50 € | **15.90 €** | 45.2 % | **24.8 %** | 15.96 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 143.50 € | **141.00 €** | 6.9 % | **5.1 %** | 138.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aróma difuzér Sixtol Palm šedé drevo 500 ml | 25.50 € | **23.00 €** | 27.7 % | **15.1 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, zlatá) | 272.50 € | **270.00 €** | 23.6 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Zvuková karta Maono G1 Neo (biela) | 49.50 € | **47.00 €** | 26.6 % | **20.2 %** | 47.04 € | cena podľa najlacnejšieho iného predajcu |
| Maono G1 Neo Sound Card Black | 49.50 € | **47.00 €** | 24.9 % | **18.6 %** | 47.04 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro Telesin pre DJI Osmo Action 6 | 26.50 € | **24.00 €** | 34.1 % | **21.4 %** | 24.04 € | cena podľa najlacnejšieho iného predajcu |
| Bicyklová baterka Superfire BL12 – 4800 mAh, USB, 2 ... | 20.00 € | **17.50 €** | 31.7 % | **15.2 %** | 17.54 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 19.50 € | **17.00 €** | 38.8 % | **21.0 %** | 17.08 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno CREALITY PLA Jahoda (červená) | 19.00 € | **16.50 €** | 35.9 % | **18.0 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Kery B-4660 400W bílý | 38.00 € | **35.50 €** | 18.7 % | **10.9 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife FP-B978 prepravné puzdro pre DJI Flip | 20.00 € | **17.50 €** | 37.8 % | **20.6 %** | 17.63 € | cena podľa najlacnejšieho iného predajcu |
| Softbox GODOX SB1520, univerzálny typ, 15x20 cm | 14.50 € | **12.00 €** | 48.7 % | **23.0 %** | 12.13 € | cena podľa najlacnejšieho iného predajcu |
| Flexibilný mini statív NEEWER TP35 s diaľkovým ovlád... | 23.00 € | **20.50 €** | 40.2 % | **24.9 %** | 20.63 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 24.00 € | **21.50 €** | 21.6 % | **9.0 %** | 21.64 € | cena podľa najlacnejšieho iného predajcu |
| Fotoateliér Puluz PU5025B LED 25cm | 17.50 € | **15.00 €** | 33.3 % | **14.3 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu |
| Onikuma MP006 RGB herná podložka pod myš (čierna) | 14.50 € | **12.00 €** | 46.8 % | **21.5 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické LED svetlo na selfie NEEWER NL48B | 19.50 € | **17.00 €** | 36.6 % | **19.0 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER NL48B – Magnetické selfie svetlo (čierne) | 19.50 € | **17.00 €** | 35.2 % | **17.8 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.50 € | **16.00 €** | 31.6 % | **13.8 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 15.50 € | **13.00 €** | 41.8 % | **18.9 %** | 13.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač pre rolety MOES WRS-EUC-WH-MS | 15.50 € | **13.00 €** | 38.0 % | **15.8 %** | 13.21 € | cena podľa najlacnejšieho iného predajcu |
| Flexibilný statív pre fotoaparát Neewer TP34 | 21.50 € | **19.00 €** | 40.6 % | **24.3 %** | 19.21 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam C60E 4K duálna webová kamera | 59.50 € | **57.00 €** | 23.8 % | **18.6 %** | 57.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.50 € | **37.00 €** | 15.0 % | **7.7 %** | 37.23 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie PGYTECH MANTIS RC M1 pre digitáln... | 20.00 € | **17.50 €** | 40.2 % | **22.7 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell p... | 19.00 € | **16.50 €** | 25.7 % | **9.2 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 19.50 € | **17.00 €** | 24.7 % | **8.7 %** | 17.25 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.00 € | **263.50 €** | 7.3 % | **6.3 %** | 263.76 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 102.00 € | **99.50 €** | 27.2 % | **24.1 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava držadiel PGY RetroVa pre iPhone 16 Pro | 102.00 € | **99.50 €** | 27.9 % | **24.7 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 102.00 € | **99.50 €** | 24.9 % | **21.8 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 102.00 € | **99.50 €** | 24.9 % | **21.8 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-002-33 Reflexný dáždnik | 15.00 € | **12.50 €** | 48.0 % | **23.3 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.50 € | **11.00 €** | 45.4 % | **18.5 %** | 11.29 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný laserový teplomer Habotest HT650B | 20.00 € | **17.50 €** | 28.7 % | **12.6 %** | 17.83 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BC261 | 32.00 € | **29.50 €** | 16.2 % | **7.2 %** | 29.83 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 21.00 € | **18.50 €** | 35.7 % | **19.6 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TL98C DMX LED svetelná tyč | 54.00 € | **51.50 €** | 29.7 % | **23.7 %** | 51.83 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (sivý) | 14.50 € | **12.00 €** | 39.8 % | **15.7 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender PLA+ (zelený) | 14.50 € | **12.00 €** | 39.8 % | **15.7 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu |
| Fleg Helikoptéra na dálkové ovládání | 26.50 € | **24.00 €** | 24.0 % | **12.3 %** | 24.33 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire C8-H – 1200 lm, USB, 250 m, 5 režimov | 21.50 € | **19.00 €** | 31.6 % | **16.3 %** | 19.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 15.50 € | **13.00 €** | 36.4 % | **14.4 %** | 13.34 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 104.00 € | **101.50 €** | 20.6 % | **17.7 %** | 101.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (béžové) | 104.00 € | **101.50 €** | 28.1 % | **25.0 %** | 101.89 € | cena podľa najlacnejšieho iného predajcu |
| Graef S 10005 | 115.50 € | **113.00 €** | 11.6 % | **9.2 %** | 113.42 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 75 mm adaptér z plochého na guľatý pre fluidnú... | 27.50 € | **25.00 €** | 47.7 % | **34.2 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT625B, USB | 45.50 € | **43.00 €** | 27.8 % | **20.8 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 100 | 31.50 € | **29.00 €** | 18.8 % | **9.4 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 40.50 € | **38.00 €** | 29.7 % | **21.7 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Sunnylife na riadidlá pre ovládač | 16.50 € | **14.00 €** | 34.1 % | **13.8 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterka SUPERFIRE F1-S | 15.50 € | **13.00 €** | 34.5 % | **12.8 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.6 % | **10.1 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.0 % | **9.6 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Mini LED svietidlo Neewer HB80C RGB COB | 195.90 € | **193.50 €** | 20.7 % | **19.2 %** | 193.54 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 117.90 € | **115.50 €** | 11.4 % | **9.2 %** | 115.54 € | cena podľa najlacnejšieho iného predajcu |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 14.90 € | **12.50 €** | 28.3 % | **7.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2022E1 | 36.90 € | **34.50 €** | 12.7 % | **5.4 %** | 33.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal DT2023F0 | 38.90 € | **36.50 €** | 18.8 % | **11.5 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa GlidePro PV2600 | 28.90 € | **26.50 €** | 19.8 % | **9.9 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 46.90 € | **44.50 €** | 27.7 % | **21.2 %** | 44.63 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.50 €** | 34.1 % | **12.8 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 46.4 % | **23.2 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 59.6 % | **34.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **24.90 €** | 26.3 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Ariete 2v1 2761 | 52.00 € | **49.90 €** | 10.2 % | **5.8 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beper 50451 Tyčový Vakuový Vysavač S He | 54.00 € | **51.90 €** | 15.9 % | **11.4 %** | 51.92 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4813 Žehlička SERENA červená | 48.00 € | **45.90 €** | 16.3 % | **11.2 %** | 45.92 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC e3S 2S/3S | 19.00 € | **16.90 €** | 37.6 % | **22.3 %** | 16.92 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 20.3 % | **10.1 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara fialová | 39.00 € | **36.90 €** | 20.0 % | **13.5 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara modrá | 39.00 € | **36.90 €** | 20.0 % | **13.5 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio NP-FV100 vrátane info chipu pre Sony | 31.00 € | **28.90 €** | 22.9 % | **14.6 %** | 28.96 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 25C 1500mAh 3S1P 11.1V Airsoft Gun Lipo Bat... | 23.00 € | **20.90 €** | 16.1 % | **5.5 %** | 20.96 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (čierna) | 23.00 € | **20.90 €** | 38.5 % | **25.9 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM03 RGB (čierna) | 23.00 € | **20.90 €** | 39.9 % | **27.1 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický nabíjací adaptér Telesin s krytom pre GoP... | 20.00 € | **17.90 €** | 34.7 % | **20.6 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (biela) | 22.00 € | **19.90 €** | 31.9 % | **19.3 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (čierna) | 22.00 € | **19.90 €** | 31.9 % | **19.3 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (sivá) | 22.00 € | **19.90 €** | 31.9 % | **19.3 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X80 | 19.00 € | **16.90 €** | 40.9 % | **25.4 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Dielenská baterka Superfire G21, 650lm, USB | 14.00 € | **11.90 €** | 36.3 % | **15.9 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| UV baterka Superfire Z01, 365NM, USB | 16.00 € | **13.90 €** | 33.0 % | **15.6 %** | 13.92 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi RF 433 MHz Avat... | 17.00 € | **14.90 €** | 44.0 % | **26.2 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (sivý) | 16.00 € | **13.90 €** | 35.9 % | **18.1 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire D6 – 220 lm, dosah 210 m, 4 režimy | 17.00 € | **14.90 €** | 37.9 % | **20.9 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 46.4 % | **42.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **16.90 €** | 33.3 % | **18.8 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **19.00 €** | 41.4 % | **27.9 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BP654 | 28.90 € | **26.90 €** | 19.6 % | **11.4 %** | 26.92 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM05 RGB (čierna) | 17.50 € | **15.50 €** | 43.3 % | **26.9 %** | 15.54 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Sunnylife 2 v 1 pre DJI RC Plus 2 | 16.50 € | **14.50 €** | 33.3 % | **17.2 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Magnetic quick mount kit for Telesin sports cameras | 16.50 € | **14.50 €** | 37.3 % | **20.7 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf CL5, 1000 lm | 23.50 € | **21.50 €** | 36.7 % | **25.0 %** | 21.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight WIFI zásuvka s meraním spotreby | 12.00 € | **10.00 €** | 36.6 % | **13.9 %** | 10.05 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 31.90 € | **29.90 €** | 18.4 % | **10.9 %** | 29.96 € | cena podľa najlacnejšieho iného predajcu |
| Automatický hadicový časovač Rainpoint ITV152 | 17.50 € | **15.50 €** | 38.9 % | **23.1 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 126 | 433.50 € | **431.50 €** | 11.7 % | **11.2 %** | 431.58 € | cena podľa najlacnejšieho iného predajcu |
| Maono BA92 Boom Arm Black | 52.00 € | **50.00 €** | 18.7 % | **14.1 %** | 50.08 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL25, 700 lm, USB-C | 14.50 € | **12.50 €** | 31.7 % | **13.5 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 19.90 € | **17.90 €** | 19.0 % | **7.1 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell O... | 19.90 € | **17.90 €** | 19.0 % | **7.1 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 361.00 € | **359.00 €** | 9.2 % | **8.6 %** | 359.10 € | cena podľa najlacnejšieho iného predajcu |
| AMICA DI 6401 PSB | 179.90 € | **177.90 €** | 11.0 % | **9.7 %** | 178.00 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI1040GR | 28.00 € | **26.00 €** | 19.0 % | **10.5 %** | 26.13 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 15.50 € | **13.50 €** | 37.7 % | **20.0 %** | 13.63 € | cena podľa najlacnejšieho iného predajcu |
| Dotykový spínač svetla Avatto TS20-EU-W2 WiFi | 17.00 € | **15.00 €** | 36.4 % | **20.4 %** | 15.13 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 164.50 € | **162.50 €** | 14.3 % | **12.9 %** | 162.63 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 345.50 € | **343.50 €** | 11.7 % | **11.1 %** | 343.67 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 375.00 € | **373.00 €** | 20.0 % | **19.3 %** | 373.17 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 107.00 € | **105.00 €** | 13.3 % | **11.2 %** | 105.17 € | cena podľa najlacnejšieho iného predajcu |
| Myš ONIKUMA DM06 | 21.00 € | **19.00 €** | 38.8 % | **25.6 %** | 19.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný svetelný spínač WiFi Avatto TS02-EU-B2 ... | 16.00 € | **14.00 €** | 46.8 % | **28.5 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri 2 | 341.50 € | **339.50 €** | 20.0 % | **19.3 %** | 339.71 € | cena podľa najlacnejšieho iného predajcu |
| Adapter 10in1 HUB Blitzwolf BW-NEW TH8 | 40.50 € | **38.50 €** | 24.5 % | **18.3 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Filtr CPL 58mm Telesin do iPhone 15 Pro/Pro Max | 16.50 € | **14.50 €** | 36.2 % | **19.7 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Živica ELEGOO Standard 1.0 (polopriehľadná) | 16.50 € | **14.50 €** | 33.2 % | **17.1 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 21.00 € | **19.00 €** | 24.7 % | **12.8 %** | 19.21 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 4,5 l automatické krmítko pre zvieratá WiFi v... | 47.50 € | **45.50 €** | 28.1 % | **22.7 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 7 (čierny) | 38.50 € | **36.50 €** | 29.6 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZR-SR-R01-WH Spínač pre scény ZigBee, IP55 (biely) | 14.00 € | **12.00 €** | 33.7 % | **14.6 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie GoPro Hero 13/12/11/10/9/8/MAX | 22.00 € | **20.00 €** | 36.7 % | **24.3 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaci ventilátor Darkflash DR08 3 v 1 (čierny) | 14.00 € | **12.00 €** | 33.3 % | **14.2 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC B6neo+ | 37.50 € | **35.50 €** | 29.0 % | **22.1 %** | 35.75 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Daily PV1100C | 25.00 € | **23.00 €** | 18.4 % | **8.9 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Trojkanálová nabíjačka batérií pre GoPro Hero 13 Bla... | 14.50 € | **12.50 €** | 37.2 % | **18.3 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire G19 | 13.50 € | **11.50 €** | 32.6 % | **12.9 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW953 (čierna) | 15.50 € | **13.50 €** | 38.6 % | **20.7 %** | 13.83 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro na iPhone Puluz (40 m) s jednosmern... | 54.00 € | **52.00 €** | 18.5 % | **14.1 %** | 52.33 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom JR-FN1 Funpods Series Wireless Headphones (b... | 15.00 € | **13.00 €** | 37.2 % | **18.9 %** | 13.33 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X25 (čierne) | 18.00 € | **16.00 €** | 39.2 % | **23.8 %** | 16.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (červený) | 14.00 € | **12.00 €** | 35.0 % | **15.7 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s meraním s... | 14.00 € | **12.00 €** | 39.0 % | **19.1 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT118E Univerzálny digitálny multimeter Tru... | 40.50 € | **38.50 €** | 21.1 % | **15.2 %** | 38.88 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 76.50 € | **74.50 €** | 12.1 % | **9.1 %** | 74.88 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P204FER250 | 22.50 € | **20.50 €** | 19.3 % | **8.7 %** | 20.88 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny prísavný držiak TELESIN s držiakom na te... | 15.50 € | **13.50 €** | 35.8 % | **18.3 %** | 13.88 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 18.50 € | **16.50 €** | 23.4 % | **10.0 %** | 16.88 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 48.50 € | **46.50 €** | 23.1 % | **18.0 %** | 46.88 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, červená | 28.00 € | **26.00 €** | 22.3 % | **13.6 %** | 26.42 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma SPRING průměr 26 cm, modrá | 28.00 € | **26.00 €** | 22.3 % | **13.6 %** | 26.42 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C950 4K | 31.00 € | **29.00 €** | 18.5 % | **10.9 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 189.00 € | **187.00 €** | 13.0 % | **11.8 %** | 187.45 € | cena podľa najlacnejšieho iného predajcu |
| Freewell ND1000 Filter pre OSMO Action 6 | 15.00 € | **13.00 €** | 35.2 % | **17.2 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak PULUZ pre Insta360 GO Ultra (čierny) | 15.00 € | **13.00 €** | 28.5 % | **11.4 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov Sunnylife CPL + ND8 + ND16 pre Osmo Nano | 18.00 € | **16.00 €** | 31.7 % | **17.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X88 | 15.00 € | **13.00 €** | 37.2 % | **18.9 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka a analyzátor batérií SkyRC MC5000 s rozhra... | 122.00 € | **120.00 €** | 23.8 % | **21.8 %** | 120.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 57.3 % | **41.7 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 27.7 % | **15.0 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.00 €** | 34.0 % | **20.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight teplomer, farba čierna | 15.90 € | **14.00 €** | 49.1 % | **31.3 %** | 14.36 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF10-B | 14.90 € | **13.00 €** | 31.8 % | **15.0 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed Powerstation Uni FIXPOS-U-BK | 31.90 € | **30.00 €** | 14.8 % | **7.9 %** | 30.12 € | cena podľa najlacnejšieho iného predajcu |
| Freewell kruhový polarizačný filter CPL pre OSMO NANO | 19.90 € | **18.00 €** | 21.5 % | **9.9 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 46.90 € | **45.00 €** | 14.3 % | **9.7 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9038G | 34.90 € | **33.00 €** | 16.8 % | **10.4 %** | 33.37 € | cena podľa najlacnejšieho iného predajcu |
| Double monitor mount 13-30" Huanuo HNDS6 | 54.90 € | **53.00 €** | 27.7 % | **23.3 %** | 53.46 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.00 €** | 34.1 % | **17.3 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 56.7 % | **35.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny zvuku Habotest HT602B | 25.12 € | **23.50 €** | 23.8 % | **15.8 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1009900 | 52.50 € | **50.90 €** | 27.2 % | **23.3 %** | 50.92 € | cena podľa najlacnejšieho iného predajcu |
| Powerbank BlitzWolf BW-P22 20000 mAh, 22,5 W | 29.50 € | **27.90 €** | 28.5 % | **21.6 %** | 27.92 € | cena podľa najlacnejšieho iného predajcu |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.50 € | **19.90 €** | 32.9 % | **23.0 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Hliníkový držiak Sunnylife pre Insta360 X5/X4 | 18.50 € | **16.90 €** | 32.3 % | **20.8 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam Nova | 26.50 € | **24.90 €** | 26.7 % | **19.1 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Herný stojan ONIKUMA ST-2 (biely) | 16.50 € | **14.90 €** | 38.0 % | **24.6 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6750mAh 14.8V 60C 4S1P 14# XT90 Battery | 83.50 € | **81.90 €** | 26.1 % | **23.7 %** | 81.92 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05A1 | 103.50 € | **101.90 €** | 11.9 % | **10.2 %** | 101.92 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 37.4 % | **27.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický ventilátor GOOLOO F3 (biely) | 35.50 € | **34.00 €** | 27.8 % | **22.4 %** | 34.04 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Katana CF0918 | 51.00 € | **49.50 €** | 19.0 % | **15.5 %** | 49.54 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merač svetla Habotest HT603 | 23.50 € | **22.00 €** | 27.4 % | **19.2 %** | 22.04 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka troch batérií pre GoPro Hero 13 Black Tele... | 17.00 € | **15.50 €** | 32.3 % | **20.6 %** | 15.54 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro Puluz pre kameru GoPro HERO 4K 2024 | 16.00 € | **14.50 €** | 20.3 % | **9.1 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický upevňovací adaptér Sunnylife s guľovým kĺ... | 17.50 € | **16.00 €** | 31.6 % | **20.3 %** | 16.04 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 14.50 € | **13.00 €** | 36.6 % | **22.5 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 14.50 € | **13.00 €** | 36.6 % | **22.5 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Beper Bp101-H Elektrický Citrusovač | 20.50 € | **19.00 €** | 19.7 % | **11.0 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 341.50 € | **340.00 €** | 11.6 % | **11.1 %** | 340.08 € | cena podľa najlacnejšieho iného predajcu |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 15.00 € | **13.50 €** | 19.8 % | **7.8 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón pre kameru SJCAM SJ8 Pro | 15.00 € | **13.50 €** | 39.2 % | **25.3 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Torras Ostand R Fusion Case for iPhone 16 Pro (Gray) | 13.50 € | **12.00 €** | 35.5 % | **20.4 %** | 12.08 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT839 | 27.00 € | **25.50 €** | 32.4 % | **25.0 %** | 25.58 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire TN02,1800lm, USB-C | 19.50 € | **18.00 €** | 32.6 % | **22.4 %** | 18.08 € | cena podľa najlacnejšieho iného predajcu |
| Tefal ZP2M04E0 | 24.50 € | **23.00 €** | 18.5 % | **11.2 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač / zastrihávač domácich zvierat Oneisall ... | 26.00 € | **24.50 €** | 30.6 % | **23.0 %** | 24.63 € | cena podľa najlacnejšieho iného predajcu |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 17.00 € | **15.50 €** | 26.1 % | **15.0 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf L1 350 lm | 17.50 € | **16.00 €** | 37.2 % | **25.4 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-50245 | 13.50 € | **12.00 €** | 23.9 % | **10.1 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.00 € | **25.50 €** | 17.8 % | **11.2 %** | 25.67 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla ZigBee Avatto ZTS02-EU-W... | 14.00 € | **12.50 €** | 26.0 % | **12.5 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 23.00 € | **21.50 €** | 23.3 % | **15.3 %** | 21.67 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2397 Tréningový prístroj na stehná a panvo... | 17.50 € | **16.00 €** | 45.5 % | **33.0 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 182.00 € | **180.50 €** | 21.4 % | **20.4 %** | 180.69 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-1 mini 12V DC bílý | 96.00 € | **94.50 €** | 15.2 % | **13.4 %** | 94.71 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-9 mini 12V DC černý | 96.00 € | **94.50 €** | 15.2 % | **13.4 %** | 94.71 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Rony B-4777 červená | 25.00 € | **23.50 €** | 18.7 % | **11.5 %** | 23.71 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife 1/4" adaptér s rýchloupínaním a otočným uh... | 13.50 € | **12.00 €** | 33.7 % | **18.8 %** | 12.21 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlo Etenwolf L2, 300 lm | 16.00 € | **14.50 €** | 37.1 % | **24.2 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 011 | 63.00 € | **61.50 €** | 18.0 % | **15.2 %** | 61.75 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Magnetic Wall | 13.00 € | **11.50 €** | 25.1 % | **10.6 %** | 11.75 € | cena podľa najlacnejšieho iného predajcu |
| Ring light with phone holder PULUZ | 15.00 € | **13.50 €** | 20.4 % | **8.3 %** | 13.75 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 3300mAh 11.1V 30C 3S1P Lipo ... | 37.00 € | **35.50 €** | 33.1 % | **27.7 %** | 35.75 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC026X | 43.00 € | **41.50 €** | 16.3 % | **12.3 %** | 41.79 € | cena podľa najlacnejšieho iného predajcu |
| Úložná taška Telesin EVA pre DJI Action 3/4/5 (veľko... | 14.00 € | **12.50 €** | 32.2 % | **18.0 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100WS (čierny) | 58.00 € | **56.50 €** | 28.6 % | **25.3 %** | 56.79 € | cena podľa najlacnejšieho iného predajcu |
| Rixon UltraPods | 47.00 € | **45.50 €** | 17.2 % | **13.5 %** | 45.79 € | cena podľa najlacnejšieho iného predajcu |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 26.00 € | **24.50 €** | 29.9 % | **22.4 %** | 24.83 € | cena podľa najlacnejšieho iného predajcu |
| Kryt vrtule Sunnylife A3S-KC910 pre AIR 3S/AIR 3 | 12.50 € | **11.00 €** | 30.0 % | **14.4 %** | 11.33 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier D12 (čierny) | 87.50 € | **86.00 €** | 13.6 % | **11.7 %** | 86.33 € | cena podľa najlacnejšieho iného predajcu |
| Venta Organic fragrance Peppermint | 17.50 € | **16.00 €** | 18.9 % | **8.7 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| PLA drevené vlákno (indický dub) | 13.50 € | **12.00 €** | 31.8 % | **17.1 %** | 12.38 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 42.50 € | **41.00 €** | 9.8 % | **5.9 %** | 41.40 € | cena podľa najlacnejšieho iného predajcu |
| Sada 6 filtrov Freewell Bright Day pre DJI Flip | 39.00 € | **37.50 €** | 35.7 % | **30.5 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Nástenné držiaky na TV Perlesmith PSPILFK1 | 35.50 € | **34.00 €** | 26.3 % | **20.9 %** | 34.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu |
| Telesin magnetic mount for sports cameras | 15.50 € | **14.00 €** | 29.8 % | **17.2 %** | 14.46 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X31 | 14.50 € | **13.00 €** | 36.4 % | **22.3 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B31 (tmavomodrá) | 47.50 € | **46.00 €** | 24.9 % | **21.0 %** | 46.46 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (čierny) | 14.50 € | **13.00 €** | 39.8 % | **25.4 %** | 13.48 € | cena podľa najlacnejšieho iného predajcu |
| Zacvakávacia doska PGYTECH Arcs-Swiss (P-CG-013) | 13.50 € | **12.00 €** | 33.0 % | **18.3 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 43.8 % | **33.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| RivaCase 7567 batoh na notebook 17,3" | 53.50 € | **52.00 €** | 17.6 % | **14.3 %** | 52.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 45.2 % | **34.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 48.2 % | **36.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXMC400E | 83.90 € | **82.50 €** | 44.2 % | **41.8 %** | 82.58 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Blackview 60 Pro LTE Blue | 169.90 € | **168.50 €** | 10.0 % | **9.1 %** | 168.82 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 245.90 € | **244.50 €** | 7.5 % | **6.9 %** | 244.85 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný systém Freewell UV Osmo Pocket 4P | 19.90 € | **18.50 €** | 17.8 % | **9.5 %** | 18.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 19.90 € | **18.50 €** | 17.3 % | **9.1 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 19.90 € | **18.50 €** | 17.3 % | **9.1 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 bílá | 33.90 € | **32.50 €** | 16.9 % | **12.1 %** | 32.83 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 nerez | 33.90 € | **32.50 €** | 16.2 % | **11.4 %** | 32.83 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 49.2 % | **43.4 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Black | 29.00 € | **27.90 €** | 9.9 % | **5.7 %** | 26.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.00 € | **18.90 €** | 12.8 % | **6.6 %** | 18.45 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA GT806 (čierne) | 27.00 € | **25.90 €** | 30.2 % | **24.9 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT806 (biele) | 27.00 € | **25.90 €** | 30.2 % | **24.9 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 49.1 % | **42.5 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| ELDONEX EKS4040SL | 12.00 € | **10.90 €** | 20.9 % | **9.8 %** | 10.96 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 24.0 % | **12.6 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z15ST s 15,6-palcovým dotyk... | 143.00 € | **141.90 €** | 22.7 % | **21.8 %** | 142.00 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 51.5 % | **44.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Lampa na čítanie Yeelight Pura Reading Desk Lamp | 26.50 € | **25.50 €** | 25.3 % | **20.5 %** | 25.54 € | cena podľa najlacnejšieho iného predajcu |
| Eldonex EPG-1100-SL elektrický mlýnek | 14.00 € | **13.00 €** | 18.8 % | **10.3 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93020 Pánev Carina 20 cm | 15.00 € | **14.00 €** | 22.9 % | **14.7 %** | 14.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT605 | 20.50 € | **19.50 €** | 23.2 % | **17.2 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 20.50 € | **19.50 €** | 18.4 % | **12.6 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BC060 | 19.00 € | **18.00 €** | 17.2 % | **11.0 %** | 18.08 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 41.50 € | **40.50 €** | 13.1 % | **10.4 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| STRONG SRT 8119 | 27.50 € | **26.50 €** | 16.4 % | **12.2 %** | 26.58 € | cena podľa najlacnejšieho iného predajcu |
| Čítacia lampa Yeelight Led Neck Book Light | 13.50 € | **12.50 €** | 35.8 % | **25.8 %** | 12.59 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT126A Digitálny univerzálny multimeter | 27.90 € | **26.90 €** | 23.2 % | **18.8 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H27BE(3-pack) WiFi... | 211.90 € | **210.90 €** | 14.6 % | **14.1 %** | 211.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/250 Ohm | 382.90 € | **381.90 €** | 92.3 % | **91.8 %** | 382.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/ 80 Ohm | 382.90 € | **381.90 €** | 26.2 % | **25.8 %** | 382.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 290 MK II 200/250 Ohm | 431.90 € | **430.90 €** | 27.7 % | **27.4 %** | 431.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 448.90 € | **447.90 €** | 36.2 % | **35.9 %** | 448.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 312.90 € | **311.90 €** | 26.3 % | **25.9 %** | 312.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 397.90 € | **396.90 €** | 5.5 % | **5.2 %** | 397.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 642.90 € | **641.90 €** | 116051.8 % | **115871.1 %** | 642.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 268.90 € | **267.90 €** | 6.9 % | **6.5 %** | 268.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak so šnúrkou Sunnylife pre ovládač DJI RC (MM3-... | 16.50 € | **15.50 €** | 25.3 % | **17.7 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| Držiak s prísavkou Telesin pre DJI Osmo Action 3/4/5... | 12.50 € | **11.50 €** | 30.6 % | **20.2 %** | 11.67 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.50 € | **61.50 €** | 8.8 % | **7.1 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 272.50 € | **271.50 €** | 9.9 % | **9.5 %** | 271.70 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.50 €** | 15.9 % | **10.5 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 17.00 € | **16.00 €** | 12.0 % | **5.4 %** | 16.24 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Nora B-4781 bílo/zelená | 21.00 € | **20.00 €** | 17.7 % | **12.1 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Yogurella 617 | 29.50 € | **28.50 €** | 18.6 % | **14.6 %** | 28.77 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 14.00 € | **13.00 €** | 34.4 % | **24.8 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku FNIRSI FDM-02 | 30.00 € | **29.00 €** | 15.5 % | **11.7 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90504 French press 800ml | 14.00 € | **13.00 €** | 19.6 % | **11.0 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAT20000PK Bezdrátová sluchátka | 33.50 € | **32.50 €** | 16.8 % | **13.3 %** | 32.79 € | cena podľa najlacnejšieho iného predajcu |
| Štartér UTRAI s vzduchovým kompresorom JS5 | 107.50 € | **106.50 €** | 24.6 % | **23.5 %** | 106.83 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z10T s 10-palcovým dotykový... | 129.00 € | **128.00 €** | 22.2 % | **21.3 %** | 128.33 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93013 Pánev hluboká Aries 26 cm | 23.50 € | **22.50 €** | 18.4 % | **13.4 %** | 22.88 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní předfiltr GARNI PF 45T | 22.50 € | **21.50 €** | 37.8 % | **31.7 %** | 21.88 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit 61521kuchyňská váha Page | 23.00 € | **22.00 €** | 14.3 % | **9.3 %** | 22.38 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus A12 | 23.00 € | **22.00 €** | 24.5 % | **19.1 %** | 22.38 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 131.00 € | **130.00 €** | 25876.6 % | **25678.3 %** | 130.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 5 m | 41.50 € | **40.50 €** | 14.9 % | **12.1 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 13.50 € | **12.50 €** | 17.1 % | **8.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 13.50 € | **12.50 €** | 63.1 % | **51.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 204.50 € | **203.50 €** | 14.3 % | **13.8 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 208.50 € | **207.50 €** | 16.6 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic GAUSS TAPE ECHO | 60.50 € | **59.50 €** | 16.0 % | **14.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 88.50 € | **87.50 €** | 25.4 % | **24.0 %** | 87.90 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Honey Night 160 ml | 12.00 € | **11.00 €** | 24.0 % | **13.6 %** | 11.42 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90502 French press Atria 800 ml | 12.00 € | **11.00 €** | 19.3 % | **9.3 %** | 11.42 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 18.00 € | **17.00 €** | 32.0 % | **24.6 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 24.00 € | **23.00 €** | 19.7 % | **14.7 %** | 23.42 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FVB015X | 19.00 € | **18.00 €** | 14.3 % | **8.3 %** | 18.46 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9283EK | 19.00 € | **18.00 €** | 17.4 % | **11.2 %** | 18.46 € | cena podľa najlacnejšieho iného predajcu |
| Nástenné držiaky na TV Perlegear PGMFK6 26-60" | 20.00 € | **19.00 €** | 26.1 % | **19.8 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD200WS (čierny) | 97.00 € | **96.00 €** | 26.3 % | **25.0 %** | 96.46 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 43.00 € | **42.00 €** | 14.2 % | **11.6 %** | 42.46 € | cena podľa najlacnejšieho iného predajcu |
| Rixon QuikBuds | 25.00 € | **24.00 €** | 16.5 % | **11.8 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **156.90 €** | 46.2 % | **45.3 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 49.0 % | **41.1 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 148.90 € | **148.00 €** | 24.9 % | **24.2 %** | 148.17 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 antracit | 33.90 € | **33.00 €** | 16.9 % | **13.8 %** | 33.13 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na zvýšenie výkonu pre pedále CRP2 Moza Raci... | 22.90 € | **22.00 €** | 24.0 % | **19.1 %** | 22.29 € | cena podľa najlacnejšieho iného predajcu |
| Filter CPL Freewell Osmo Pocket 4P | 19.90 € | **19.00 €** | 10.8 % | **5.8 %** | 19.33 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC025X | 26.90 € | **26.00 €** | 15.0 % | **11.1 %** | 26.46 € | cena podľa najlacnejšieho iného predajcu |
| Gumová kefa ROMO | 23.90 € | **23.00 €** | 29.5 % | **24.7 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (biela) | 23.90 € | **23.00 €** | 31.7 % | **26.8 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (čierna) | 23.90 € | **23.00 €** | 39.9 % | **34.6 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 42.9 % | **41.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 52.3 % | **51.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.50 €** | 26.6 % | **18.3 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.50 € | **9.80 €** | 25.4 % | **17.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 41.5 % | **41.0 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 52.50 € | **51.90 €** | 7.1 % | **5.9 %** | 51.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 20.50 € | **19.90 €** | 33.0 % | **29.1 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Laica Bi-Flux Cartridge 3+1ks | 15.50 € | **14.90 €** | 10.3 % | **6.0 %** | 13.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MENALUX F152 | 12.50 € | **11.90 €** | 29.0 % | **22.8 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7285S-SET2 Sáčky pro vasavač DO72 | 15.50 € | **14.90 €** | 18.5 % | **14.0 %** | 14.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšie ochranné puzdro na káble, IP44 | 3.80 € | **3.20 €** | 86.1 % | **56.7 %** | 3.28 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H25BE(2-pack) WiFi... | 126.50 € | **125.90 €** | 5.5 % | **5.0 %** | 123.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 102.50 € | **101.90 €** | 8.5 % | **7.9 %** | 101.96 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 154.50 € | **153.90 €** | 6.1 % | **5.7 %** | 153.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 95.50 € | **94.90 €** | 15.9 % | **15.2 %** | 94.99 € | cena podľa najlacnejšieho iného predajcu |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 219.00 € | **218.50 €** | 5.4 % | **5.1 %** | 185.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 28.00 € | **27.50 €** | 8.3 % | **6.4 %** | 27.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 28.00 € | **27.50 €** | 8.3 % | **6.4 %** | 27.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beper BEP-C102COC101 | 11.00 € | **10.50 €** | 20.4 % | **14.9 %** | 10.54 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92004 Hrnec s pokl. Libra, 4,6 l | 27.50 € | **27.00 €** | 17.2 % | **15.1 %** | 27.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 22,4MM 13 (čierny) | 38.50 € | **38.00 €** | 24.5 % | **22.8 %** | 38.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 17,9MM 7 (čierny) | 38.50 € | **38.00 €** | 21.8 % | **20.3 %** | 38.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 18,3MM 8 (čierny) | 38.50 € | **38.00 €** | 24.5 % | **22.8 %** | 38.04 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92001 Hrnec s pokl. Libra, 1,4 l | 18.00 € | **17.50 €** | 18.0 % | **14.7 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93025 Pánev na palač. Carina 24 cm | 18.00 € | **17.50 €** | 18.0 % | **14.7 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá Onikuma B2 (čierne) | 24.50 € | **24.00 €** | 27.2 % | **24.6 %** | 24.08 € | cena podľa najlacnejšieho iného predajcu |
| Rixon GamePods | 32.00 € | **31.50 €** | 15.7 % | **13.9 %** | 31.58 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LC500R MiNi štúdiové osvetlenie | 139.00 € | **138.50 €** | 14.4 % | **14.0 %** | 138.58 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Xany 2B, aktivní pokojová anténa | 16.50 € | **16.00 €** | 15.7 % | **12.2 %** | 16.08 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GCO2007 Auto FIRST 65010 Cars Li | 14.00 € | **13.50 €** | 24.8 % | **20.3 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 375.50 € | **375.00 €** | 5.2 % | **5.1 %** | 375.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 502.50 € | **502.00 €** | 8.1 % | **8.0 %** | 502.09 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 502.50 € | **502.00 €** | 22.8 % | **22.7 %** | 502.09 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač Meross MRS105MA-EU WiFi... | 27.50 € | **27.00 €** | 31.7 % | **29.3 %** | 27.13 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (zelený) | 12.00 € | **11.50 €** | 23.0 % | **17.9 %** | 11.63 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92003 Hrnec s pokl. Libra, 3,6 l | 25.00 € | **24.50 €** | 17.0 % | **14.7 %** | 24.67 € | cena podľa najlacnejšieho iného predajcu |
| FINUM 1760006 Dvojice mlýnků na sůl/koře | 43.00 € | **42.50 €** | 14.4 % | **13.0 %** | 42.67 € | cena podľa najlacnejšieho iného predajcu |
| Salente Rtx-L7 | 276.50 € | **276.00 €** | 11.3 % | **11.1 %** | 276.17 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitý ramenný popruh Puluz pre fotoaparáty PU6002 | 13.00 € | **12.50 €** | 17.7 % | **13.2 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.00 € | **21.50 €** | 7.6 % | **5.1 %** | 21.67 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 320.50 € | **320.00 €** | 13.1 % | **13.0 %** | 320.17 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.50 € | **296.00 €** | 12.9 % | **12.7 %** | 296.18 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSH2001E | 31.50 € | **31.00 €** | 19.9 % | **18.0 %** | 31.19 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 428.50 € | **428.00 €** | 14.3 % | **14.2 %** | 428.19 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR005202 | 12.50 € | **12.00 €** | 16.4 % | **11.8 %** | 12.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXSHM-1402-TR | 19.50 € | **19.00 €** | 40.4 % | **36.8 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93014 Pánev hluboká Aries 28 cm | 26.00 € | **25.50 €** | 16.7 % | **14.4 %** | 25.71 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE005 | 23.50 € | **23.00 €** | 16.7 % | **14.2 %** | 23.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 54.00 € | **53.50 €** | 15.1 % | **14.0 %** | 53.71 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ PU3223B Držiak na telefón čierny | 19.00 € | **18.50 €** | 21.8 % | **18.6 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 31.50 € | **31.00 €** | 14.6 % | **12.8 %** | 31.21 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 320.00 € | **319.50 €** | 29.8 % | **29.6 %** | 319.72 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 247.50 € | **247.00 €** | 31.3 % | **31.0 %** | 247.24 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 13.9 % | **11.7 %** | 24.75 € | cena podľa najlacnejšieho iného predajcu |
| Selfie svetlo Telesin s magnetickým držiakom telefónu | 18.50 € | **18.00 €** | 22.9 % | **19.6 %** | 18.25 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 745W | 29.00 € | **28.50 €** | 14.8 % | **12.8 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 29.50 € | **29.00 €** | 50.5 % | **47.9 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 58.50 € | **58.00 €** | 6.3 % | **5.4 %** | 58.29 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 79.00 € | **78.50 €** | 11.8 % | **11.1 %** | 78.79 € | cena podľa najlacnejšieho iného predajcu |
| Panoramatický fotografický stojan 360 Puluz DCA0871W | 15.50 € | **15.00 €** | 16.0 % | **12.3 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.00 € | **40.50 €** | 12.8 % | **11.4 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC210 IP, 3 Mpx, WiFi, prisv... | 21.00 € | **20.50 €** | 9.9 % | **7.3 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 64.00 € | **63.50 €** | 13.3 % | **12.5 %** | 63.79 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 75.00 € | **74.50 €** | 15.0 % | **14.3 %** | 74.79 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 55.50 € | **55.00 €** | 11.5 % | **10.5 %** | 55.29 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 83.50 € | **83.00 €** | 13.2 % | **12.5 %** | 83.29 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač Evercon AH-707 | 51.50 € | **51.00 €** | 13.4 % | **12.3 %** | 51.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera EVO 27876 Porsche 911 GT3 R | 40.50 € | **40.00 €** | 11.0 % | **9.6 %** | 40.29 € | cena podľa najlacnejšieho iného predajcu |
| ETA Moneto II 4453 90000 | 87.50 € | **87.00 €** | 6.2 % | **5.6 %** | 87.30 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 263.00 € | **262.50 €** | 23.0 % | **22.8 %** | 262.80 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXCJ350E | 47.00 € | **46.50 €** | 12.6 % | **11.4 %** | 46.81 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Classic 200 Eas | 20.00 € | **19.50 €** | 16.2 % | **13.3 %** | 19.83 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 19.00 € | **18.50 €** | 9.2 % | **6.3 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Pixy | 84.00 € | **83.50 €** | 14.9 % | **14.2 %** | 83.83 € | cena podľa najlacnejšieho iného predajcu |
| San Marco INTENSO 500 g | 12.00 € | **11.50 €** | 10.7 % | **6.1 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.50 € | **12.00 €** | 36.4 % | **31.0 %** | 12.35 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.00 € | **11.50 €** | 11.2 % | **6.6 %** | 11.86 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.00 € | **887.50 €** | 20.2 % | **20.1 %** | 887.86 € | cena podľa najlacnejšieho iného predajcu |
| Colmi P81 Smartwatch (Gold) | 18.00 € | **17.50 €** | 20.7 % | **17.4 %** | 17.88 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT826 (čierne) | 29.00 € | **28.50 €** | 25.3 % | **23.1 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| Statív PULUZ - flexibilný držiak s diaľkovým ovládan... | 11.50 € | **11.00 €** | 17.8 % | **12.6 %** | 11.38 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 339.50 € | **339.00 €** | 24.1 % | **23.9 %** | 339.39 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 60.50 € | **60.00 €** | 84.9 % | **83.4 %** | 60.39 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz s pumpou, 4 ks | 35.50 € | **35.00 €** | 8.3 % | **6.8 %** | 35.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušák Comfort Tower 420 | 47.00 € | **46.50 €** | 8.5 % | **7.3 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 40.50 € | **40.00 €** | 8.0 % | **6.7 %** | 40.39 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 19.00 € | **18.50 €** | 8.2 % | **5.4 %** | 18.89 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 31.50 € | **31.00 €** | 10.2 % | **8.4 %** | 31.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 467.50 € | **467.00 €** | 8.0 % | **7.9 %** | 467.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 921.50 € | **921.00 €** | 17.1 % | **17.0 %** | 921.39 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 158.00 € | **157.50 €** | 10.5 % | **10.1 %** | 157.89 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 929.00 € | **928.50 €** | 9.8 % | **9.7 %** | 928.89 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 108.00 € | **107.50 €** | 12.0 % | **11.5 %** | 107.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 272.50 € | **272.00 €** | 7.3 % | **7.1 %** | 272.39 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK TL-MR150 4G LTE WiFi N Router | 68.50 € | **68.00 €** | 8.1 % | **7.3 %** | 68.39 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 34.50 € | **34.00 €** | 13.4 % | **11.8 %** | 34.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 232.00 € | **231.50 €** | 5.3 % | **5.1 %** | 231.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 265.50 € | **265.00 €** | 5.3 % | **5.1 %** | 265.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 604.50 € | **604.00 €** | 5.2 % | **5.1 %** | 604.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 635.50 € | **635.00 €** | 7.3 % | **7.2 %** | 635.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 682.50 € | **682.00 €** | 11.3 % | **11.2 %** | 682.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 160.00 € | **159.50 €** | 19.4 % | **19.0 %** | 159.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 13.00 € | **12.50 €** | 12.8 % | **8.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **10.50 €** | 43.1 % | **36.6 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 White | 32.00 € | **31.50 €** | 9.1 % | **7.4 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Toaster 157/04, bílý | 22.50 € | **22.00 €** | 10.2 % | **7.7 %** | 22.41 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, modrá | 26.50 € | **26.00 €** | 15.8 % | **13.6 %** | 26.42 € | cena podľa najlacnejšieho iného predajcu |
| Coox SPRING forma 26 cm se skleněnou zák | 21.50 € | **21.00 €** | 15.8 % | **13.1 %** | 21.42 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.50 € | **116.00 €** | 17.9 % | **17.4 %** | 116.42 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533W1-EU (biela) | 98.50 € | **98.00 €** | 15.3 % | **14.8 %** | 98.42 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.50 € | **105.00 €** | 19.2 % | **18.6 %** | 105.44 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.50 € | **71.00 €** | 17.3 % | **16.5 %** | 71.44 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-DC24PL3C-L 2.4 Mpix venkovní dome kamera 4v1 ... | 50.50 € | **50.00 €** | 16.8 % | **15.7 %** | 50.46 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač krmiva PETKIT Fresh Element SOLO, 3 l | 73.50 € | **73.00 €** | 7.4 % | **6.7 %** | 73.47 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.50 € | **166.00 €** | 15.6 % | **15.3 %** | 166.47 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 218.50 € | **218.00 €** | 14.1 % | **13.9 %** | 218.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.50 € | **19.00 €** | 34.5 % | **31.0 %** | 19.48 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 53.50 € | **53.00 €** | 11.9 % | **10.9 %** | 53.49 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 41.50 € | **41.00 €** | 8.7 % | **7.4 %** | 41.49 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 59.50 € | **59.00 €** | 7.8 % | **6.9 %** | 59.49 € | cena podľa najlacnejšieho iného predajcu |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 59.50 € | **59.00 €** | 19.5 % | **18.5 %** | 59.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.50 € | **104.00 €** | 21.4 % | **20.9 %** | 104.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 47.50 € | **47.00 €** | 20.5 % | **19.3 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 102.50 € | **102.00 €** | 9.5 % | **9.0 %** | 102.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.50 € | **11.00 €** | 34.1 % | **28.3 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 14.50 € | **14.00 €** | 25.5 % | **21.2 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **12.00 €** | 23.5 % | **18.5 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 34.50 € | **34.00 €** | 32.5 % | **30.6 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 29.50 € | **29.00 €** | 13.3 % | **11.4 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.50 € | **10.00 €** | 26.3 % | **20.3 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 42.50 € | **42.00 €** | 36.8 % | **35.2 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Masážní přístroj šíje a zad, REBEL ACTIVE RBA-6005 | 32.50 € | **32.00 €** | 7.1 % | **5.4 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 32.50 € | **32.00 €** | 7.1 % | **5.4 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal KI883D10 | 105.50 € | **105.00 €** | 9.3 % | **8.8 %** | 105.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 24.50 € | **24.00 €** | 56.6 % | **53.4 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.50 € | **21.00 €** | 18.1 % | **15.4 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 142.50 € | **142.00 €** | 7.2 % | **6.8 %** | 142.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 39.2 % | **38.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 143.90 € | **143.50 €** | 5.5 % | **5.2 %** | 143.69 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.90 € | **187.50 €** | 10.7 % | **10.4 %** | 187.70 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.50 €** | 15.2 % | **14.6 %** | 79.79 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot Ranger | 194.90 € | **194.50 €** | 8.3 % | **8.0 %** | 194.79 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.90 € | **137.50 €** | 15.5 % | **15.2 %** | 137.80 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.90 € | **78.50 €** | 10.0 % | **9.4 %** | 78.87 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 3601 | 94.90 € | **94.50 €** | 8.9 % | **8.5 %** | 94.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBG-603S2R s 3 horákmi | 108.90 € | **108.50 €** | 22.4 % | **22.0 %** | 108.89 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 143.90 € | **143.50 €** | 49.7 % | **49.3 %** | 143.90 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart Hubice na zvířecí chlupy | 11.90 € | **11.50 €** | 11.5 % | **7.7 %** | 7.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Resto 93021 Pánev Carina 22 cm | 14.90 € | **14.50 €** | 18.4 % | **15.2 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 9.40 € | **9.00 €** | 17.8 % | **12.7 %** | 9.04 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPhone 17 FIXSHM-1600-TR | 15.90 € | **15.50 €** | 14.5 % | **11.6 %** | 15.70 € | cena podľa najlacnejšieho iného predajcu |
| Sati Guatemala Bio Fairtrade 500 g zrno | 11.90 € | **11.50 €** | 10.5 % | **6.8 %** | 11.75 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová herná myš Onikuma CW905 (čierna) | 11.90 € | **11.50 €** | 9.4 % | **5.8 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Držák projektoru Cabletech UCH0148 univerzální | 14.90 € | **14.50 €** | 18.0 % | **14.8 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| LTE filtr Fagor LBF 694 (5-694 MHz, LTE 5G útlum 45 dB) | 14.90 € | **14.50 €** | 18.0 % | **14.8 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 19.90 € | **19.50 €** | 7.8 % | **5.6 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.90 € | **19.50 €** | 7.8 % | **5.6 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.90 € | **19.50 €** | 7.8 % | **5.6 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Osmo Pocket 4P ND32 | 19.90 € | **19.50 €** | 7.8 % | **5.6 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND32/PL | 19.90 € | **19.50 €** | 7.8 % | **5.6 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 19.90 € | **19.50 €** | 11.3 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre GoPro HERO11/HERO10/HERO9 | 19.90 € | **19.50 €** | 13.9 % | **11.6 %** | 19.63 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 19.90 € | **19.50 €** | 10.8 % | **8.6 %** | 19.67 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.90 € | **18.50 €** | 16.1 % | **13.6 %** | 18.69 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní vodní filtr GARNI WF 45T | 17.90 € | **17.50 €** | 7.7 % | **5.3 %** | 17.69 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61613 GO/D143 Looping Set (8ks) | 24.90 € | **24.50 €** | 10.9 % | **9.1 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.90 € | **19.50 €** | 7.8 % | **5.6 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.90 € | **19.50 €** | 7.8 % | **5.6 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND64/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný odstraňovač zápachu Petoneer | 22.90 € | **22.50 €** | 14.9 % | **12.9 %** | 22.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.90 € | **16.50 €** | 24.5 % | **21.5 %** | 16.77 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SA-30 Softbox, 30x30 cm | 19.90 € | **19.50 €** | 41.9 % | **39.1 %** | 19.83 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 435C | 16.90 € | **16.50 €** | 30.5 % | **27.4 %** | 16.88 € | cena podľa najlacnejšieho iného predajcu |
| VENTAcel Filter 1 pack | 28.90 € | **28.50 €** | 11.2 % | **9.7 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 8x42 monokulárny | 26.90 € | **26.50 €** | 24.7 % | **22.8 %** | 26.88 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 32.90 € | **32.50 €** | 6.9 % | **5.6 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.90 € | **52.50 €** | 9.7 % | **8.9 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 20.90 € | **20.50 €** | 18.6 % | **16.3 %** | 20.89 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 135 | 46.90 € | **46.50 €** | 9.1 % | **8.2 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.90 € | **22.50 €** | 13.5 % | **11.5 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 41.90 € | **41.50 €** | 20.8 % | **19.6 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 45.90 € | **45.50 €** | 29.2 % | **28.0 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 37.90 € | **37.50 €** | 7.7 % | **6.6 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **19.50 €** | 15.9 % | **13.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 16.90 € | **16.50 €** | 15.2 % | **12.4 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 20.90 € | **20.50 €** | 45.2 % | **42.5 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 38.90 € | **38.50 €** | 18.0 % | **16.8 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 35.90 € | **35.50 €** | 61.9 % | **60.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 18.90 € | **18.50 €** | 20.8 % | **18.2 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 30.90 € | **30.50 €** | 52.1 % | **50.1 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 33.90 € | **33.50 €** | 14.6 % | **13.2 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 25.90 € | **25.50 €** | 6.7 % | **5.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 21.90 € | **21.50 €** | 28.3 % | **25.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 36.90 € | **36.50 €** | 6.6 % | **5.4 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR C3 Carrying Case for Quest 3 | 46.90 € | **46.50 €** | 34.4 % | **33.3 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 29.2 % | **26.0 %** | 11.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, 20 - 200A | 6.40 € | **6.20 €** | 33.8 % | **29.6 %** | 6.24 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava xTool Ultimate Robot Kit V2.0 | 450.00 € | **449.90 €** | 8.5 % | **8.4 %** | 449.94 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.00 € | **334.90 €** | 22.7 % | **22.7 %** | 334.97 € | cena podľa najlacnejšieho iného predajcu |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.00 € | **26.90 €** | 32.8 % | **32.3 %** | 26.91 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Pure POP Home & Travel DT2040E1 | 35.00 € | **34.90 €** | 13.8 % | **13.5 %** | 34.92 € | cena podľa najlacnejšieho iného predajcu |
| TWS Choetech BH-T17 ANC+ENC Wireless Headphones (black) | 20.00 € | **19.90 €** | 22.2 % | **21.6 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix venkovní kamera 4v1 s ... | 57.00 € | **56.90 €** | 17.1 % | **16.8 %** | 56.95 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 10Ah MHPower MS10-12(L) F2-6,3mm | 41.00 € | **40.90 €** | 5.4 % | **5.2 %** | 40.96 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 Kit – webová kamera | 61.00 € | **60.90 €** | 10.2 % | **10.0 %** | 60.96 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm čierny lesk 500 ml | 23.00 € | **22.90 €** | 15.1 % | **14.6 %** | 22.98 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA37BE AX 1200, WiFi ... | 33.00 € | **32.90 €** | 10.3 % | **10.0 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 22.00 € | **21.90 €** | 8.6 % | **8.1 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 31.00 € | **30.90 €** | 41.4 % | **40.9 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 61.00 € | **60.90 €** | 8.4 % | **8.2 %** | 60.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **51.90 €** | 6.2 % | **6.0 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 9.80 € | **9.70 €** | 11.0 % | **9.8 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 25.00 € | **24.90 €** | 15.0 % | **14.5 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1016501 | 29.00 € | **28.90 €** | 7.1 % | **6.7 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC410 KIT 3MPx, vonkajšia, I... | 60.00 € | **59.90 €** | 5.7 % | **5.5 %** | 60.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0027 | 18.00 € | **17.90 €** | 7.3 % | **6.7 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **43.90 €** | 5.8 % | **5.5 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 19.00 € | **18.90 €** | 19.1 % | **18.5 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.00 € | **23.90 €** | 14.8 % | **14.4 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFUV6060 Softbox, 60x60 cm | 47.00 € | **46.90 €** | 24.4 % | **24.1 %** | 47.00 € | cena podľa najlacnejšieho iného predajcu |
| Ratanová LED hviezda Solight 1V246, 40 cm, 40 LED, 2... | 3.20 € | **3.10 €** | 16.1 % | **12.5 %** | 3.17 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 12.00 € | **11.90 €** | 8.9 % | **8.0 %** | 11.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.00 € | **11.90 €** | 40.0 % | **38.8 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.60 €** | 36.7 % | **35.3 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.80 € | **7.70 €** | 36.4 % | **34.6 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.80 €** | 37.4 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.80 € | **5.70 €** | 157.7 % | **153.2 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.20 € | **9.10 €** | 17.2 % | **16.0 %** | 9.20 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 8.70 € | **8.60 €** | 23.0 % | **21.6 %** | 8.70 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic EDT 100S | 16.00 € | **15.90 €** | 15.7 % | **15.0 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 15.00 € | **14.90 €** | 23.7 % | **22.9 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 94.00 € | **93.90 €** | 17.8 % | **17.6 %** | 93.93 € | cena podľa najlacnejšieho iného predajcu |
| Měnič napětí Carspa CAR1.6K 12V/230V 1600W | 77.00 € | **76.90 €** | 6.6 % | **6.4 %** | 76.95 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 77.00 € | **76.90 €** | 17.4 % | **17.2 %** | 76.97 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 238.00 € | **237.90 €** | 7.2 % | **7.1 %** | 237.97 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C675D KIT 2× 2K, vonkajšia, IP P... | 212.00 € | **211.90 €** | 6.0 % | **5.9 %** | 211.98 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 102.00 € | **101.90 €** | 6.4 % | **6.3 %** | 101.99 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603-Outdoor vonkajší AP, AX18... | 122.00 € | **121.90 €** | 6.1 % | **6.0 %** | 121.99 € | cena podľa najlacnejšieho iného predajcu |
| Triple monitor mount 17-32" Huanuo HNTS3B-UK | 93.00 € | **92.90 €** | 20.2 % | **20.1 %** | 92.99 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 116.00 € | **115.90 €** | 22902.2 % | **22882.4 %** | 115.99 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 125.00 € | **124.90 €** | 9.0 % | **8.9 %** | 125.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP211-Bridge KIT vonkajší spoj,... | 146.00 € | **145.90 €** | 8.5 % | **8.4 %** | 146.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 73.00 € | **72.90 €** | 20.6 % | **20.4 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro (čierny) | 130.00 € | **129.90 €** | 13.7 % | **13.7 %** | 130.00 € | cena podľa najlacnejšieho iného predajcu |

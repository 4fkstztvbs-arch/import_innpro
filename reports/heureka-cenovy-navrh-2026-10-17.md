# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-17

Vstup: `premiumstore-sk_2026-10-17_08-43.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6215**
- Návrh **zvýšiť** cenu: **321** produktov
- Návrh **znížiť** cenu: **322** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5572** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **86**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **326**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (321)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Smartring RingConn Gen 2 (veľkosť 12, čierna) | 253.50 € | **418.90 €** | 15.1 % | **90.2 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 253.50 € | **418.90 €** | 15.0 % | **90.0 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 253.50 € | **418.90 €** | 14.9 % | **89.9 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 254.90 € | **418.90 €** | 15.0 % | **89.0 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 253.50 € | **416.90 €** | 14.9 % | **89.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, čierna) | 253.50 € | **416.90 €** | 14.9 % | **89.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, strieborná) | 253.50 € | **416.90 €** | 14.9 % | **89.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, zlatá) | 253.50 € | **416.90 €** | 14.9 % | **89.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LE300Bi | 301.50 € | **388.90 €** | 15.0 % | **48.3 %** | 389.00 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Nikon | 238.90 € | **306.90 €** | 15.9 % | **48.8 %** | 307.00 € | cena podľa najlacnejšieho iného predajcu |
| LED videolampa GODOX ML80Bi | 228.90 € | **288.90 €** | 14.8 % | **44.9 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 628.00 € | **681.00 €** | 37.9 % | **49.5 %** | 681.42 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie 10102847 FS150B | 190.50 € | **238.90 €** | 14.9 % | **44.1 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 | 371.00 € | **418.50 €** | 5.9 % | **19.4 %** | 418.88 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 261.50 € | **306.00 €** | 39.3 % | **63.0 %** | 306.27 € | cena podľa najlacnejšieho iného predajcu |
| Tefal QT2028F0 | 341.00 € | **383.00 €** | 6.8 % | **20.0 %** | 383.29 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 495.50 € | **535.00 €** | 10.6 % | **19.4 %** | 535.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q6 | 560.90 € | **598.90 €** | 38.0 % | **47.4 %** | 599.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 359.90 € | **391.90 €** | 5.0 % | **14.4 %** | 391.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 140.50 € | **170.90 €** | 39.4 % | **69.6 %** | 170.97 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (červený) | 251.50 € | **281.90 €** | 5.2 % | **17.9 %** | 282.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (čierny a... | 251.50 € | **281.90 €** | 5.2 % | **17.9 %** | 282.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D70 | 259.00 € | **287.50 €** | 15.0 % | **27.7 %** | 287.63 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP400R RGB | 128.90 € | **156.90 €** | 17.6 % | **43.1 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P11pro | 214.50 € | **242.50 €** | 5.2 % | **19.0 %** | 242.79 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 200.90 € | **228.00 €** | 5.1 % | **19.3 %** | 228.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra S1 Max Combo | 826.50 € | **853.00 €** | 8.9 % | **12.4 %** | 853.40 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552320 Crocodile 5G LTE700 domovní zesilovač | 39.50 € | **65.00 €** | 18.5 % | **95.1 %** | 65.38 € | cena podľa najlacnejšieho iného predajcu |
| Sušič vlasov MOVA Flip 10 | 181.90 € | **204.00 €** | 24.0 % | **39.1 %** | 204.33 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 63.50 € | **83.50 €** | 31.9 % | **73.4 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 399.00 € | **418.90 €** | 37.7 % | **44.6 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2-C TTL pre fotoaparáty Canon | 176.90 € | **195.50 €** | 49.5 % | **65.2 %** | 195.57 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3512B | 83.50 € | **101.00 €** | 12.3 % | **35.8 %** | 101.42 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 331.50 € | **348.90 €** | 38.6 % | **45.9 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 16.50 € | **33.00 €** | 15.5 % | **131.1 %** | 33.10 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell VND s polarizáciou | 63.90 € | **79.90 €** | 8.7 % | **36.0 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 134.00 € | **148.90 €** | 39.9 % | **55.5 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN X2 Standard – stabilizátor (biely) | 69.00 € | **83.50 €** | 38.1 % | **67.2 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRALINK ULM300MIC wireless microphone set | 110.00 € | **124.50 €** | 15.0 % | **30.2 %** | 124.82 € | cena podľa najlacnejšieho iného predajcu |
| Lovecký ďalekohľad Mileseey IONJET2 | 232.90 € | **246.90 €** | 36.2 % | **44.4 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 142.50 € | **155.00 €** | 39.5 % | **51.7 %** | 155.05 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B70... | 104.00 € | **116.50 €** | 38.9 % | **55.6 %** | 116.73 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 296.50 € | **308.90 €** | 38.0 % | **43.8 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| Bramka GL.iNet GL-MT5000 | 145.00 € | **157.00 €** | 9.3 % | **18.4 %** | 157.08 € | cena podľa najlacnejšieho iného predajcu |
| Sada na selfie Neewer SRP18C s priemerom 17 cm a okr... | 164.90 € | **176.90 €** | 38.9 % | **49.0 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS9 – multifunkčný štartér do auta | 77.50 € | **89.50 €** | 29.9 % | **50.0 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 137.00 € | **148.90 €** | 31.3 % | **42.7 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 65.50 € | **77.00 €** | 38.1 % | **62.3 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 216.50 € | **228.00 €** | 5.2 % | **10.8 %** | 228.50 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco PD529 1000m výcvikový obojok pre psov s 2 obo... | 54.50 € | **65.50 €** | 15.2 % | **38.5 %** | 65.61 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 154.00 € | **165.00 €** | 16.9 % | **25.3 %** | 165.33 € | cena podľa najlacnejšieho iného predajcu |
| Booster UltraCap CSC 12/800 12 V, 800 A | 288.90 € | **299.50 €** | 11.3 % | **15.3 %** | 299.88 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 66.90 € | **77.50 €** | 15.0 % | **33.3 %** | 77.74 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 22.50 € | **33.00 €** | 15.9 % | **70.0 %** | 33.10 € | cena podľa najlacnejšieho iného predajcu |
| Ochranné puzdro Telesin s rukoväťou pre DJI Osmo Act... | 63.50 € | **74.00 €** | 21.5 % | **41.6 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash UV360 (čierny) | 248.50 € | **258.90 €** | 38.8 % | **44.6 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 7 (čierny) | 34.00 € | **44.00 €** | 14.5 % | **48.1 %** | 44.09 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 168.90 € | **178.90 €** | 38.9 % | **47.1 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 218.00 € | **228.00 €** | 12.4 % | **17.6 %** | 228.17 € | cena podľa najlacnejšieho iného predajcu |
| MOES TV02 Termostatická hlavica s LCD displejom a te... | 32.00 € | **42.00 €** | 37.7 % | **80.8 %** | 42.20 € | cena podľa najlacnejšieho iného predajcu |
| KMP C98 (CL-546 XL) | 17.50 € | **27.50 €** | 11.6 % | **75.4 %** | 27.87 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 147.00 € | **156.90 €** | 30.4 % | **39.2 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX ES30 pre e-šport | 135.00 € | **144.50 €** | 15.9 % | **24.0 %** | 144.75 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 222.90 € | **232.00 €** | 16.4 % | **21.2 %** | 232.42 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie fotografického pozadia Puluz 2x... | 56.00 € | **65.00 €** | 31.2 % | **52.2 %** | 65.07 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE240 (biele) | 96.50 € | **105.50 €** | 35.3 % | **47.9 %** | 105.66 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 141.50 € | **150.50 €** | 8.3 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blesk Neewer Z880-C s lítiovou batériou | 158.50 € | **166.90 €** | 39.8 % | **47.2 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS200HK(EU) (Hom... | 51.00 € | **58.90 €** | 45.1 % | **67.6 %** | 58.92 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 389.00 € | **396.90 €** | 40.0 % | **42.9 %** | 397.00 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 41.50 € | **49.00 €** | 37.9 % | **62.8 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 26.00 € | **33.50 €** | 39.3 % | **79.4 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| RojecoPD521 1000m výcvikový obojok pre psov s 2 oboj... | 60.00 € | **67.50 €** | 23.2 % | **38.7 %** | 67.78 € | cena podľa najlacnejšieho iného predajcu |
| Continenta Dřevěný chlebník | 75.50 € | **82.90 €** | 10.5 % | **21.4 %** | 82.99 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 41.90 € | **49.00 €** | 55.2 % | **81.5 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 50.00 € | **57.00 €** | 60.6 % | **83.1 %** | 57.25 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 120" projection screen. | 34.00 € | **41.00 €** | 14.2 % | **37.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **33.00 €** | 15.2 % | **43.5 %** | 33.10 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT302D+ | 73.00 € | **79.50 €** | 38.6 % | **51.0 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 87.50 € | **94.00 €** | 32.3 % | **42.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti kôrovcom Rojeco 1000m PD529 ... | 36.50 € | **43.00 €** | 22.5 % | **44.3 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 170.50 € | **176.90 €** | 41.8 % | **47.2 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebný LED svetelný panel GODOX  Litemons LP800Bi | 150.90 € | **156.90 €** | 15.1 % | **19.7 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 87.90 € | **93.90 €** | 5.2 % | **12.3 %** | 94.00 € | cena podľa najlacnejšieho iného predajcu |
| Systém riadenia vlákien Creality CFS | 240.50 € | **246.50 €** | 5.5 % | **8.1 %** | 246.79 € | cena podľa najlacnejšieho iného predajcu |
| Detektor drôtov UNI-T UT25CL | 131.50 € | **137.50 €** | 5.3 % | **10.1 %** | 137.80 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 53.00 € | **59.00 €** | 11.2 % | **23.8 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VNT200 (čierne) | 27.50 € | **33.50 €** | 17.2 % | **42.7 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti kôrovcom Rojeco 1000m PD529 ... | 36.50 € | **42.50 €** | 22.5 % | **42.6 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 47.90 € | **53.50 €** | 15.4 % | **28.8 %** | 53.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer PODCASTUDIO 2 USB | 93.90 € | **99.50 €** | 15.0 % | **21.9 %** | 99.77 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 151.00 € | **156.50 €** | 6.3 % | **10.1 %** | 156.79 € | cena podľa najlacnejšieho iného predajcu |
| Nerezová fontána / napájačka pre psov a mačky 2l Rojeco | 24.00 € | **29.50 €** | 15.0 % | **41.4 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Drôtové slúchadlá do uší TRUTHEAR Zero (modré) | 64.00 € | **69.50 €** | 38.2 % | **50.1 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 41.50 € | **47.00 €** | 20.0 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 26.50 € | **32.00 €** | 17.8 % | **42.2 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 41.50 € | **46.90 €** | 6.1 % | **19.9 %** | 46.92 € | cena podľa najlacnejšieho iného predajcu |
| Triple monitor mount 17-32" Huanuo HNTS3B-UK | 88.00 € | **93.00 €** | 13.8 % | **20.2 %** | 93.05 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10022 | 135.00 € | **140.00 €** | 7.7 % | **11.7 %** | 140.10 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS520E15W | 255.00 € | **260.00 €** | 5.2 % | **7.3 %** | 260.10 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 71.00 € | **76.00 €** | 45.8 % | **56.1 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak Sunnylife MJ033 pre (OSMO 360, Ins... | 13.00 € | **18.00 €** | 39.8 % | **93.6 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 93.00 € | **98.00 €** | 35.6 % | **42.9 %** | 98.28 € | cena podľa najlacnejšieho iného predajcu |
| Stan Puluz 80 cm bez tieňov s LED svietidlom s výkon... | 70.90 € | **75.50 €** | 5.6 % | **12.4 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| Napájadlo pre psy a mačky PetKit Eversweet 3 Pro | 85.90 € | **90.50 €** | 9.3 % | **15.2 %** | 90.79 € | cena podľa najlacnejšieho iného predajcu |
| KMP C107XV (CLI-571BK/C/M/Y XL) | 26.50 € | **31.00 €** | 10.8 % | **29.6 %** | 31.08 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 344.50 € | **349.00 €** | 35.9 % | **37.7 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 75.00 € | **79.50 €** | 37.8 % | **46.1 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu |
| Šipky Elektronický terč Trizand 27046 | 79.50 € | **83.90 €** | 11.2 % | **17.4 %** | 83.99 € | cena podľa najlacnejšieho iného predajcu |
| Kolečka pro kancelářskou židli Ruhhy 25280 | 12.50 € | **16.90 €** | 10.0 % | **48.7 %** | 16.95 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 47.90 € | **51.90 €** | 15.4 % | **25.0 %** | 51.92 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 47.90 € | **51.90 €** | 15.4 % | **25.0 %** | 51.92 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 102.90 € | **106.90 €** | 38.5 % | **43.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600G | 102.90 € | **106.90 €** | 39.4 % | **44.8 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 131.00 € | **135.00 €** | 35.9 % | **40.1 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer horkovzdušná fritéza ZAF9230 | 167.00 € | **171.00 €** | 6.1 % | **8.6 %** | 171.20 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer kuchyňský robot ZKR2010 | 170.00 € | **174.00 €** | 6.0 % | **8.5 %** | 174.20 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW5558E0 | 164.50 € | **168.50 €** | 5.9 % | **8.5 %** | 168.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal XF652038 | 149.00 € | **152.90 €** | 6.1 % | **8.9 %** | 153.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 36.00 € | **39.90 €** | 15.5 % | **28.1 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 25.90 € | **29.50 €** | 5.8 % | **20.5 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT96425VD | 249.90 € | **253.50 €** | 6.2 % | **7.7 %** | 253.60 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.90 € | **141.50 €** | 16.3 % | **19.4 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 143.00 € | **146.50 €** | 6.3 % | **8.9 %** | 146.60 € | cena podľa najlacnejšieho iného predajcu |
| Statív s 3D 360° hlavou + držiak na telefón Puluz PU... | 25.00 € | **28.50 €** | 25.2 % | **42.8 %** | 28.65 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 141.00 € | **144.50 €** | 5.1 % | **7.7 %** | 144.68 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 215.00 € | **218.50 €** | 5.9 % | **7.7 %** | 218.80 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Verto High 54 l tmavomodrý | 42.00 € | **45.50 €** | 5.2 % | **14.0 %** | 45.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 56.00 € | **59.50 €** | 38.3 % | **47.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Softbox Neewer 85 cm | 84.50 € | **88.00 €** | 20.4 % | **25.4 %** | 88.41 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 376.50 € | **380.00 €** | 26.9 % | **28.1 %** | 380.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 376.50 € | **380.00 €** | 20.8 % | **22.0 %** | 380.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 123.50 € | **126.90 €** | 38.4 % | **42.2 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| ETA Ambito 0516 90000 bílý/tyrkysový | 59.50 € | **62.90 €** | 5.3 % | **11.4 %** | 63.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMSR58CU1SX | 327.90 € | **331.00 €** | 5.9 % | **6.9 %** | 331.40 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 21.90 € | **25.00 €** | 70.4 % | **94.5 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| Ateliérové osvetlenie NEEWER BASICS SL90C | 40.00 € | **43.00 €** | 14.3 % | **22.9 %** | 43.04 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 327.50 € | **330.50 €** | 5.9 % | **6.9 %** | 330.60 € | cena podľa najlacnejšieho iného predajcu |
| Kempingová lampa Superfire LT01 2v1 – 50–250 lm, pow... | 10.50 € | **13.50 €** | 16.8 % | **50.1 %** | 13.78 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz 45 cm (biely) | 76.50 € | **79.50 €** | 29.3 % | **34.4 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Handy Force One 2v1, 2708 | 52.00 € | **55.00 €** | 7.0 % | **13.2 %** | 55.40 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 66.50 € | **69.50 €** | 27.7 % | **33.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 214.00 € | **216.90 €** | 37.2 % | **39.1 %** | 217.00 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 23.90 € | **26.50 €** | 65.7 % | **83.7 %** | 26.61 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (čierny) | 11.90 € | **14.50 €** | 14.8 % | **39.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Štartér UTRAI s vzduchovým kompresorom JS5 | 105.00 € | **107.50 €** | 21.7 % | **24.6 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Systémy kvapkového a rozprašovacieho zavlažovania | 44.00 € | **46.50 €** | 35.5 % | **43.1 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 42.00 € | **44.50 €** | 14.4 % | **21.2 %** | 44.63 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 327.50 € | **330.00 €** | 7.1 % | **7.9 %** | 330.20 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 383.50 € | **386.00 €** | 91.3 % | **92.6 %** | 386.22 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS062 svorka volantu pre stôl | 54.50 € | **57.00 €** | 17.4 % | **22.8 %** | 57.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 22.50 € | **25.00 €** | 36.8 % | **52.0 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1019800 Napěňovač Choco-lat | 58.00 € | **60.50 €** | 10.6 % | **15.4 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC111X Pomalý hrnec 3,5 l | 85.50 € | **87.90 €** | 5.3 % | **8.2 %** | 87.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi spínač na žalúzie Meross MRS100MA(... | 21.50 € | **23.90 €** | 13.7 % | **26.3 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (modrý) | 11.90 € | **14.00 €** | 14.8 % | **35.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 317.90 € | **319.90 €** | 29.0 % | **29.8 %** | 319.92 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro (čierny) | 128.00 € | **130.00 €** | 12.0 % | **13.7 %** | 130.03 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na pneumatiky Flextail Evo 150 (čierna) | 27.00 € | **29.00 €** | 40.4 % | **50.7 %** | 29.04 € | cena podľa najlacnejšieho iného predajcu |
| Držiak športovej kamery na riadidlá PGYTECH (P-GM-171) | 35.50 € | **37.50 €** | 15.7 % | **22.2 %** | 37.65 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3236 | 31.00 € | **33.00 €** | 5.6 % | **12.4 %** | 33.19 € | cena podľa najlacnejšieho iného predajcu |
| KMP C88 / CL-541XL | 15.50 € | **17.50 €** | 13.6 % | **28.3 %** | 17.74 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MVC72HGA | 29.00 € | **31.00 €** | 8.2 % | **15.7 %** | 31.30 € | cena podľa najlacnejšieho iného predajcu |
| Neewer photo bag | 43.00 € | **45.00 €** | 30.0 % | **36.1 %** | 45.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 20.50 € | **22.50 €** | 10.7 % | **21.5 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón SJCAM C200 Pro | 10.50 € | **12.50 €** | 16.6 % | **38.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre BOBOVR M2 Pro + nabíjacia stanica | 34.50 € | **36.50 €** | 38.6 % | **46.6 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FH50EAW | 475.00 € | **477.00 €** | 5.6 % | **6.1 %** | 477.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 20.00 € | **22.00 €** | 23.0 % | **35.3 %** | 22.47 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (biela) | 22.00 € | **24.00 €** | 35.6 % | **47.9 %** | 24.48 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (čierna) | 22.00 € | **24.00 €** | 25.6 % | **37.0 %** | 24.48 € | cena podľa najlacnejšieho iného predajcu |
| 4-zónový zavlažovací ovládač RainPoint ITV447 | 62.00 € | **64.00 €** | 39.4 % | **43.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell UV do Real Locking VND | 43.00 € | **45.00 €** | 43.7 % | **50.4 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W2 TUYA | 11.00 € | **13.00 €** | 12.6 % | **33.1 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco A12 5M automatické zaťahovacie vodítko pre ps... | 10.00 € | **12.00 €** | 15.0 % | **38.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 47.00 € | **48.90 €** | 14.6 % | **19.3 %** | 48.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W2 | 23.00 € | **24.90 €** | 14.4 % | **23.8 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.80 € | **11.50 €** | 13.7 % | **33.4 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Herné reproduktory Onikuma L2 | 12.90 € | **14.50 €** | 5.5 % | **18.6 %** | 14.63 € | cena podľa najlacnejšieho iného predajcu |
| GODOX AD-S85S Softbox | 88.90 € | **90.50 €** | 23.2 % | **25.5 %** | 90.63 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 87.90 € | **89.50 €** | 5.5 % | **7.4 %** | 89.69 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 38.00 € | **39.50 €** | 15.0 % | **19.6 %** | 39.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 16.50 € | **18.00 €** | 5.4 % | **15.0 %** | 18.08 € | cena podľa najlacnejšieho iného predajcu |
| TC ELECTRONIC BUCKET BRIGADE ANALOG DELAY | 73.00 € | **74.50 €** | 15.0 % | **17.4 %** | 74.73 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 44.50 € | **46.00 €** | 5.8 % | **9.4 %** | 46.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 32.50 € | **34.00 €** | 35.4 % | **41.6 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 19.8MM 10 (Złoty) | 31.50 € | **33.00 €** | 38.7 % | **45.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón SJCAM SJ10 Pro | 10.50 € | **12.00 €** | 16.6 % | **33.3 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 bez ventilátorov (b... | 27.50 € | **29.00 €** | 39.8 % | **47.4 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 106.50 € | **107.90 €** | 39.6 % | **41.5 %** | 107.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 6.80 € | **8.20 €** | 18.9 % | **43.4 %** | 8.22 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový diaľkový ovládač Heiman HM1RC-W Interlinked | 2.40 € | **3.70 €** | 32.7 % | **104.6 %** | 3.80 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 53.90 € | **55.00 €** | 24.2 % | **26.7 %** | 55.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 7.50 € | **8.50 €** | 20.5 % | **36.6 %** | 8.53 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón pre kameru SJCAM SJ8 Pro | 12.50 € | **13.50 €** | 16.0 % | **25.3 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 7,2 W, 1521lm, 27... | 5.80 € | **6.80 €** | 75.9 % | **106.3 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/250 Ohm | 380.90 € | **381.90 €** | 91.3 % | **91.8 %** | 382.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 446.90 € | **447.90 €** | 35.6 % | **35.9 %** | 448.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 310.90 € | **311.90 €** | 25.5 % | **25.9 %** | 312.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Safe'Tea KO261130 | 26.50 € | **27.50 €** | 10.4 % | **14.5 %** | 27.61 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco P9(2-pack) AC1200, PLC AV10... | 147.50 € | **148.50 €** | 5.6 % | **6.3 %** | 148.62 € | cena podľa najlacnejšieho iného predajcu |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.00 € | **17.00 €** | 10.6 % | **17.5 %** | 17.19 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 43.00 € | **44.00 €** | 13.2 % | **15.8 %** | 44.21 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie PGYTECH MANTIS RC M1 pre digitáln... | 16.50 € | **17.50 €** | 15.6 % | **22.7 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link Mercusys ME80X AP/Extender/Rep... | 36.50 € | **37.50 €** | 5.5 % | **8.3 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-002-33 Reflexný dáždnik | 11.50 € | **12.50 €** | 13.5 % | **23.3 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| RGB LED lampa NEEWER RGB61 | 24.50 € | **25.50 €** | 15.4 % | **20.1 %** | 25.79 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 17.50 € | **18.50 €** | 5.3 % | **11.3 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 35.00 € | **36.00 €** | 34.1 % | **37.9 %** | 36.31 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 745W | 28.50 € | **29.50 €** | 12.9 % | **16.8 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 14.50 € | **15.50 €** | 5.1 % | **12.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER BASICS N12 Mini blesk | 24.50 € | **25.50 €** | 38.6 % | **44.3 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie procesora Darkflash E400 PLUS (biely) | 35.50 € | **36.50 €** | 38.4 % | **42.3 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 72.50 € | **73.50 €** | 11.4 % | **13.0 %** | 73.90 € | cena podľa najlacnejšieho iného predajcu |
| Avatto ZWSM16-DC32V-1 – 1-kanálový spínací modul Zig... | 12.50 € | **13.50 €** | 41.3 % | **52.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER ST49 popruh na stabilizátor pre DJI RS2/RSC2/RS | 48.50 € | **49.50 €** | 39.6 % | **42.5 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 32.00 € | **33.00 €** | 37.4 % | **41.7 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Puluz PU425 1,5 m USB-C / Type-C | 11.00 € | **12.00 €** | 18.6 % | **29.4 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.00 € | **38.00 €** | 11.0 % | **14.0 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 73.00 € | **74.00 €** | 39.4 % | **41.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Stojanový vozík Neewer SW-600, veľkosť M | 37.00 € | **38.00 €** | 37.9 % | **41.6 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 77.00 € | **77.90 €** | 36.9 % | **38.5 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Dvojzónový indukčný sporák IsEasy LI2V-22 | 98.00 € | **98.90 €** | 37.1 % | **38.4 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 14.00 € | **14.90 €** | 38.1 % | **47.0 %** | 14.98 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 460.00 € | **460.90 €** | 12.4 % | **12.7 %** | 460.98 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 260.90 € | **261.50 €** | 7.7 % | **8.0 %** | 261.69 € | cena podľa najlacnejšieho iného predajcu |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 266.90 € | **267.50 €** | 22.5 % | **22.8 %** | 267.75 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 350.90 € | **351.50 €** | 34.9 % | **35.1 %** | 351.80 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 45.90 € | **46.50 €** | 15.3 % | **16.8 %** | 46.63 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na polievanie kvetín v črepníkoch RainPoint ... | 26.90 € | **27.50 €** | 41.1 % | **44.2 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro PULUZ pre Insta360 X5 | 31.90 € | **32.50 €** | 18.5 % | **20.7 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-4 Slam Ball 23cm 4kg | 12.90 € | **13.50 €** | 41.9 % | **48.5 %** | 13.69 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN15Pro 5G FIXOP3-1646-BK | 11.90 € | **12.50 €** | 11.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Torras Ostand R Fusion Case for iPhone 16 Plus (Black) | 11.90 € | **12.50 €** | 35.7 % | **42.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1018900 Pákový kávovar | 122.90 € | **123.50 €** | 8.1 % | **8.6 %** | 123.60 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TBE400U BE6500, WiFi 7,  2... | 70.90 € | **71.50 €** | 13.2 % | **14.2 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.00 € | **116.50 €** | 17.4 % | **17.9 %** | 116.51 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 93.50 € | **94.00 €** | 17.2 % | **17.8 %** | 94.01 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.50 € | **188.00 €** | 10.5 % | **10.8 %** | 188.01 € | cena podľa najlacnejšieho iného predajcu |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 32.00 € | **32.50 €** | 5.4 % | **7.1 %** | 32.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.00 € | **19.50 €** | 31.0 % | **34.5 %** | 19.52 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.00 € | **105.50 €** | 18.6 % | **19.2 %** | 105.53 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 300.00 € | **300.50 €** | 36.0 % | **36.3 %** | 300.54 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 300.00 € | **300.50 €** | 36.0 % | **36.3 %** | 300.54 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 silver | 23.50 € | **24.00 €** | 7.9 % | **10.2 %** | 24.05 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica ELEGOO Mercury XS | 129.50 € | **130.00 €** | 17.5 % | **18.0 %** | 130.05 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link HX510(1-pack) WiFi 6 AP AX3000, ... | 93.00 € | **93.50 €** | 5.1 % | **5.7 %** | 93.55 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic JUNE-60 V2 | 70.00 € | **70.50 €** | 18.4 % | **19.2 %** | 70.55 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 249.50 € | **250.00 €** | 73.9 % | **74.2 %** | 250.06 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 345.50 € | **346.00 €** | 28.2 % | **28.4 %** | 346.08 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 21.00 € | **21.50 €** | 5.1 % | **7.6 %** | 21.59 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.00 € | **24.50 €** | 13.6 % | **15.9 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| Kruger & Matz KM1303 | 16.50 € | **17.00 €** | 9.2 % | **12.5 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 12.00 € | **12.50 €** | 19.3 % | **24.2 %** | 12.59 € | cena podľa najlacnejšieho iného predajcu |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 59.00 € | **59.50 €** | 18.5 % | **19.5 %** | 59.59 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.00 € | **104.50 €** | 20.9 % | **21.4 %** | 104.59 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač krmiva PETKIT Fresh Element SOLO, 3 l | 73.00 € | **73.50 €** | 6.7 % | **7.4 %** | 73.59 € | cena podľa najlacnejšieho iného predajcu |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 17.00 € | **17.50 €** | 66.7 % | **71.6 %** | 17.60 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-PETG (priehľadný) | 10.50 € | **11.00 €** | 6.4 % | **11.5 %** | 11.12 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 132.00 € | **132.50 €** | 10.4 % | **10.8 %** | 132.63 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.00 € | **296.50 €** | 12.7 % | **12.9 %** | 296.66 € | cena podľa najlacnejšieho iného predajcu |
| TricutBrush 2.0 – hlavný kefový nástavec pre robotic... | 39.50 € | **40.00 €** | 19.0 % | **20.5 %** | 40.17 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 266.00 € | **266.50 €** | 9.0 % | **9.2 %** | 266.69 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 17.00 € | **17.50 €** | 10.1 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 334.50 € | **335.00 €** | 22.5 % | **22.7 %** | 335.25 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 266.00 € | **266.50 €** | 56.9 % | **57.2 %** | 266.76 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VN200 (čierne a červené) | 22.00 € | **22.50 €** | 11.8 % | **14.3 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 541.50 € | **542.00 €** | 45.8 % | **46.0 %** | 542.29 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife pre DJI Osmo Action 5 PRO/4/3 Adven... | 19.00 € | **19.50 €** | 37.7 % | **41.3 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 141.50 € | **142.00 €** | 7.3 % | **7.7 %** | 142.37 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 24.50 € | **25.00 €** | 11.3 % | **13.5 %** | 25.37 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA B15 (čierne) | 26.50 € | **27.00 €** | 40.4 % | **43.1 %** | 27.37 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 36.50 € | **37.00 €** | 59.2 % | **61.4 %** | 37.38 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY Buds HT15 ANC (čierne) | 15.50 € | **16.00 €** | 13.9 % | **17.6 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada 16 barevných kovových autíček 26319 | 13.50 € | **14.00 €** | 30.4 % | **35.2 %** | 14.39 € | cena podľa najlacnejšieho iného predajcu |
| Čítacia lampa Yeelight Led Neck Book Light | 13.00 € | **13.50 €** | 30.8 % | **35.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 43.00 € | **43.50 €** | 38.6 % | **40.2 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 34.00 € | **34.50 €** | 42.1 % | **44.2 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Kábel USB-A do Lightning MFI 0,35 m PGYTECH (P-GM-115) | 15.00 € | **15.50 €** | 34.0 % | **38.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 21.00 € | **21.50 €** | 36.3 % | **39.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 687.50 € | **688.00 €** | 36.6 % | **36.7 %** | 688.40 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO30211IP | 124.50 € | **125.00 €** | 22.2 % | **22.6 %** | 125.46 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 141.50 € | **142.00 €** | 13.4 % | **13.8 %** | 142.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada stavebních vozidel s příslušenstvím 26578 | 23.50 € | **24.00 €** | 16.6 % | **19.1 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná domácnosť WS2GW-R WiFi | 11.50 € | **12.00 €** | 32.8 % | **38.6 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná poistka ZigBee Avatto ZWCB16 | 20.50 € | **21.00 €** | 38.1 % | **41.5 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 19.50 € | **20.00 €** | 35.8 % | **39.3 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat DIGITRADIO 317 /černé/ | 83.50 € | **83.90 €** | 8.4 % | **8.9 %** | 83.91 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 174.50 € | **174.90 €** | 26.2 % | **26.5 %** | 174.92 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.50 € | **89.90 €** | 39.9 % | **40.5 %** | 89.94 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 770 M 80 Ohm | 163.50 € | **163.90 €** | 5.0 % | **5.3 %** | 164.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi RGBW 16M Gosund LB2S Tuya smart night light | 11.50 € | **11.90 €** | 11.7 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 40.50 € | **40.90 €** | 33.2 % | **34.5 %** | 40.91 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 | 40.50 € | **40.90 €** | 5.4 % | **6.4 %** | 40.95 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 24.50 € | **24.90 €** | 14.3 % | **16.1 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.50 € | **51.90 €** | 5.2 % | **6.0 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s drevenými hviezdami Solight 1V2... | 4.20 € | **4.50 €** | 33.4 % | **42.9 %** | 4.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.70 € | **4.90 €** | 22.1 % | **27.3 %** | 4.99 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 374.90 € | **375.00 €** | 49.2 % | **49.2 %** | 375.30 € | cena podľa najlacnejšieho iného predajcu |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 38.90 € | **39.00 €** | 24.3 % | **24.6 %** | 39.04 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 45.90 € | **46.00 €** | 18.8 % | **19.1 %** | 46.06 € | cena podľa najlacnejšieho iného predajcu |
| Pohybové čidlo ORBIS ISIMAT | 22.90 € | **23.00 €** | 17.8 % | **18.3 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 63.90 € | **64.00 €** | 20.0 % | **20.2 %** | 64.10 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2022E1 | 34.90 € | **35.00 €** | 6.6 % | **6.9 %** | 35.13 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V35 s Dynamický mikrofon | 58.90 € | **59.00 €** | 38.2 % | **38.5 %** | 59.17 € | cena podľa najlacnejšieho iného predajcu |
| Fleg Helikoptéra na dálkové ovládání | 23.90 € | **24.00 €** | 11.9 % | **12.3 %** | 24.33 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NB907MAW | 62.90 € | **63.00 €** | 11.9 % | **12.1 %** | 63.39 € | cena podľa najlacnejšieho iného predajcu |
| Filter xTool SafetyPro™ AP2 so strednou účinnosťou | 36.90 € | **37.00 €** | 39.5 % | **39.9 %** | 37.42 € | cena podľa najlacnejšieho iného predajcu |
| Metal Protective Cage With Lens Cover PULUZ for Inst... | 26.90 € | **27.00 €** | 31.2 % | **31.7 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **2.10 €** | 49.2 % | **56.6 %** | 2.15 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.90 € | **12.00 €** | 10.3 % | **11.2 %** | 12.02 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (sivý) | 11.90 € | **12.00 €** | 14.8 % | **15.7 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender PLA+ (zelený) | 11.90 € | **12.00 €** | 14.8 % | **15.7 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 76.90 € | **77.00 €** | 17.3 % | **17.4 %** | 77.03 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.90 € | **217.00 €** | 17.3 % | **17.4 %** | 217.05 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone H1 | 178.90 € | **179.00 €** | 28.6 % | **28.7 %** | 179.09 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone R1 | 178.90 € | **179.00 €** | 37.2 % | **37.2 %** | 179.09 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 119.90 € | **120.00 €** | 13.4 % | **13.5 %** | 120.12 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 169.90 € | **170.00 €** | 18.2 % | **18.3 %** | 170.20 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 232.90 € | **233.00 €** | 23.8 % | **23.9 %** | 233.50 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (322)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| WiFi router TP-Link Deco X50-PoE(1-pack) WiFi 6, 1x ... | 219.00 € | **121.50 €** | 89.9 % | **5.4 %** | 118.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1048 48x GLan. 19"rack | 397.50 € | **315.50 €** | 32.4 % | **5.1 %** | 276.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2210XMP-M2 8x GLan/PoE+, 2x 10G SFP... | 373.00 € | **294.90 €** | 33.0 % | **5.1 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SX105 5x 10GLan, kov | 367.00 € | **291.50 €** | 32.4 % | **5.1 %** | 243.16 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2428LP 16x GLan/PoE+, 8x GLAN, 4x S... | 354.90 € | **282.90 €** | 31.9 % | **5.1 %** | 269.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX DP600IIIV | 386.90 € | **315.00 €** | 47.2 % | **19.8 %** | 315.31 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link IES210GPP priemyselný, 2x SFP combo, ... | 325.00 € | **254.50 €** | 34.2 % | **5.1 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo VM Chamber Line 90 | 620.00 € | **550.00 €** | 26.9 % | **12.6 %** | 550.16 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link SG3428X 24x GLan, 4x SFP+, Omáda SDN | 341.00 € | **271.90 €** | 31.7 % | **5.0 %** | 190.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 399.00 € | **330.50 €** | 40.7 % | **16.6 %** | 330.59 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1428PE Smart, 26x GLan, 24x PoE+... | 337.50 € | **269.90 €** | 31.4 % | **5.1 %** | 242.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE ST5 Max | 870.00 € | **806.00 €** | 24.5 % | **15.3 %** | 806.02 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 896.90 € | **836.90 €** | 54.7 % | **44.4 %** | 837.00 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 248.00 € | **188.00 €** | 53.1 % | **16.0 %** | 188.46 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1218MP 18x GLan, 16x PoE+, 2x SF... | 279.00 € | **221.50 €** | 32.3 % | **5.1 %** | 186.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG3428 JetStream L2 mananaged, 24x GL... | 262.50 € | **207.90 €** | 32.8 % | **5.2 %** | 190.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES220GMP 2x GLan, 16x GLan s PoE+, 2x... | 253.90 € | **200.90 €** | 32.8 % | **5.0 %** | 192.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 569.90 € | **520.00 €** | 19.8 % | **9.3 %** | 520.01 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H25BE(3-pack) WiFi... | 229.50 € | **182.50 €** | 32.4 % | **5.3 %** | 154.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SL1218P Smart, 16x Lan sPoE+, 2x G... | 211.00 € | **168.50 €** | 31.7 % | **5.2 %** | 142.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link Mercusys MS128GP 2x GLAN, 24x GLAN s ... | 195.00 € | **154.90 €** | 32.3 % | **5.1 %** | 154.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1016PE 16x GLAN, 8x PoE | 182.50 € | **144.90 €** | 32.3 % | **5.0 %** | 128.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C540-W(4mm) 4MPx, vonkajšia, IP ... | 144.90 € | **107.50 €** | 41.6 % | **5.0 %** | 83.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 64.90 € | **27.90 €** | 162.0 % | **12.6 %** | 27.95 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 503.00 € | **467.50 €** | 20.0 % | **11.6 %** | 467.55 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG116P 16x GLAN s POE+, 120W, kov | 162.50 € | **128.90 €** | 32.5 % | **5.1 %** | 57.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1048 switch 48x Lan, 19" rackmount | 155.50 € | **123.50 €** | 32.3 % | **5.1 %** | 105.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link Mercusys MS120GP 4x GLAN, 16x GLAN s ... | 153.50 € | **121.90 €** | 32.3 % | **5.1 %** | 121.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Canon | 270.50 € | **238.90 €** | 31.2 % | **15.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link SG2206MP 5x GLan/PoE+, 1x SFP, 63W, O... | 136.00 € | **105.00 €** | 36.1 % | **5.0 %** | 104.03 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES210GMP 1x SFP combo, 8x GLan s Poe+... | 146.00 € | **115.50 €** | 33.1 % | **5.3 %** | 110.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 317.50 € | **288.90 €** | 15.7 % | **5.3 %** | 288.92 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1008MP 8x GLAN s POE+ | 138.00 € | **110.00 €** | 31.8 % | **5.0 %** | 93.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tannoy GOLD 7 powered studio monitor | 308.00 € | **280.00 €** | 36.8 % | **24.3 %** | 280.03 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 210.00 € | **182.00 €** | 21.3 % | **5.2 %** | 182.31 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 319.00 € | **291.00 €** | 19.4 % | **9.0 %** | 291.35 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link SG2005P-PD Smart, 4x GLan s PoE, 1x G... | 130.50 € | **103.50 €** | 32.9 % | **5.4 %** | 99.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1210MP 8x GLAN/PoE+, 1x GLAN, 1x... | 130.00 € | **103.50 €** | 32.1 % | **5.2 %** | 96.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES210GP 1x GLan, 8x GLan s PoE+, 1x S... | 127.00 € | **100.50 €** | 32.8 % | **5.1 %** | 94.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic DT 252 80 Ohm | 221.90 € | **196.90 €** | 28.2 % | **13.8 %** | 197.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EB210 WiFi 7 AP BE3600,1x GWan, ... | 92.50 € | **68.00 €** | 46.2 % | **7.5 %** | 68.29 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link PG1200 KIT G.hn adaptér (... | 118.00 € | **93.90 €** | 32.6 % | **5.5 %** | 93.95 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 148.50 € | **124.50 €** | 39.5 % | **16.9 %** | 124.79 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Nikon | 237.90 € | **214.00 €** | 22.0 % | **9.8 %** | 214.26 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SL1311MP 8x LAN/PoE+, 2x GLAN, 1x ... | 115.00 € | **91.50 €** | 32.4 % | **5.4 %** | 74.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rýchloupínacia doštička 3 Legged Thing 85mm pre ELLI... | 56.90 € | **33.90 €** | 77.9 % | **6.0 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2008 smart, 8x GLAN, Omáda SDN | 111.50 € | **88.50 €** | 32.5 % | **5.2 %** | 84.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES216G 16x GLan, Omáda SDN | 101.90 € | **80.50 €** | 33.2 % | **5.2 %** | 80.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link VIGI C250(4mm) 5MPx, vonkajšie, IP Do... | 98.50 € | **78.50 €** | 32.0 % | **5.2 %** | 64.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX LUX Senior (zelený) | 158.90 € | **138.90 €** | 66.5 % | **45.5 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG116E smart 16x GLAN | 95.00 € | **75.50 €** | 32.8 % | **5.5 %** | 67.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS1024G 24x GLAN | 94.90 € | **75.50 €** | 32.7 % | **5.5 %** | 71.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 64.00 € | **45.00 €** | 50.1 % | **5.6 %** | 45.08 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link VIGI C350(2.8mm) 5MPx, vonkajšia, IP ... | 84.50 € | **67.00 €** | 32.5 % | **5.1 %** | 66.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C350(4mm) 5MPx, vonkajšie, IP Bu... | 84.50 € | **67.00 €** | 32.5 % | **5.1 %** | 66.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TBE553E BE9300 WiFi 7, ... | 91.50 € | **74.00 €** | 32.2 % | **7.0 %** | 74.20 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň LIENE Pearl N200 Pro 2x3" (fi... | 108.90 € | **91.50 €** | 50.0 % | **26.0 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl N200 Pro 2x3" (zl... | 108.90 € | **91.50 €** | 47.5 % | **23.9 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| Alarm TP-Link Tapo T30 KIT Smart sensor starter kit | 81.00 € | **64.50 €** | 32.4 % | **5.4 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TBE400E BE5760 WiFi 7, ... | 77.00 € | **60.90 €** | 33.4 % | **5.5 %** | 51.56 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM SJ20 (čierny) | 178.00 € | **162.90 €** | 14.9 % | **5.2 %** | 150.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS1016G 16x GLAN | 71.50 € | **56.50 €** | 33.3 % | **5.3 %** | 52.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 166.90 € | **151.90 €** | 16.0 % | **5.5 %** | 152.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1024 switch 24x Lan, 19"rack | 71.00 € | **56.50 €** | 32.3 % | **5.3 %** | 40.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GameSir X5 Lite BK – mobilný herný ovládač USB-C, či... | 39.00 € | **24.50 €** | 76.4 % | **10.8 %** | 24.75 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA510E 10G PCIe, Full... | 69.50 € | **55.00 €** | 32.8 % | **5.1 %** | 55.34 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link LS1210GP 1x GLAN, 8x GLAN s PoE+, 1x ... | 67.50 € | **53.90 €** | 32.1 % | **5.5 %** | 53.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TXE73E AXE 5400, WiFi 6... | 62.90 € | **49.90 €** | 32.6 % | **5.2 %** | 49.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Statív tripod 3 Legged Thing PUNKS Travis 2.0, čierny | 234.90 € | **221.90 €** | 25.1 % | **18.2 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SL1311P 8x LAN/PoE+, 2x GLAN, 1x S... | 62.50 € | **49.90 €** | 32.1 % | **5.5 %** | 37.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 223.00 € | **210.50 €** | 16.6 % | **10.1 %** | 210.51 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1008P 8x GLAN, 4xPOE, 56W, kov | 62.00 € | **49.90 €** | 31.1 % | **5.5 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1016 16x LAN, 19"rack | 59.00 € | **47.00 €** | 31.9 % | **5.1 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link Mercusys MS110GMP 2x GLAN, 8x GLAN s ... | 64.50 € | **52.90 €** | 32.7 % | **8.8 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA49BE PCIe, WiFi 7, ... | 58.00 € | **46.50 €** | 31.5 % | **5.4 %** | 46.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1008P 8x LAN, 4xPoE, 57W, kov | 54.00 € | **43.00 €** | 32.2 % | **5.2 %** | 35.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Mercusys MA47BE WiFi 7, PCIe, ... | 53.90 € | **42.90 €** | 32.1 % | **5.1 %** | 41.44 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás MERACH MR-T26B1 | 182.50 € | **171.50 €** | 18.5 % | **11.4 %** | 171.79 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné púzdro DiCAPac WP-S5 pro fotoaparáty středn... | 90.00 € | **79.00 €** | 25.2 % | **9.9 %** | 79.42 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica TP-Link UH9120C USB-C, HDMI, RJ45,... | 52.50 € | **41.90 €** | 32.0 % | **5.4 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Archer TXE70UH AXE5400, 2,4/5/6GH... | 52.50 € | **41.90 €** | 32.4 % | **5.7 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1008LP 8x LAN, 4xPoE+, 41W, dosa... | 50.90 € | **40.50 €** | 32.8 % | **5.6 %** | 26.53 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| EPSON EcoTank L8180 | 771.90 € | **761.90 €** | 6.4 % | **5.0 %** | 678.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BenQ brašna k projektorům MX711/710/660/ | 46.00 € | **36.00 €** | 46.1 % | **14.3 %** | 36.04 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1008 8x GLan, 19"rack | 47.50 € | **37.90 €** | 32.7 % | **5.9 %** | 35.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slnečné okuliare COLMI M02S UV AI | 64.00 € | **54.50 €** | 38.0 % | **17.5 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 45.90 € | **36.50 €** | 32.6 % | **5.4 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1005P 5x LAN, 4xPoE, 58W, kov | 44.00 € | **34.90 €** | 32.5 % | **5.1 %** | 29.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odpadkový kôš Curver Chic Bin L Black | 36.50 € | **27.50 €** | 40.0 % | **5.5 %** | 24.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 370.50 € | **361.50 €** | 35.9 % | **32.6 %** | 361.62 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HBL-801 kaskádový filter | 27.00 € | **18.00 €** | 103.4 % | **35.6 %** | 18.23 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES208G 8x GLan, Omáda SDN | 42.50 € | **33.90 €** | 32.4 % | **5.6 %** | 32.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 103RB | 214.00 € | **205.50 €** | 10.5 % | **6.1 %** | 205.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 41.50 € | **33.00 €** | 61.3 % | **28.2 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 89.90 € | **81.50 €** | 17.2 % | **6.3 %** | 81.70 € | cena podľa najlacnejšieho iného predajcu |
| City Boss RS350 černá | 319.90 € | **311.50 €** | 8.0 % | **5.1 %** | 281.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dokovacia stanica TP-Link UH6120C USB-C, HDMI, RJ45,... | 42.00 € | **33.90 €** | 30.9 % | **5.7 %** | 32.73 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dokovacia stanica TP-Link UH7020C USB-C, HDMI, 1x US... | 41.00 € | **32.90 €** | 31.8 % | **5.7 %** | 31.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS109P 1x LAN, 8x LAN s PoE+, 63W | 38.90 € | **30.90 €** | 32.2 % | **5.0 %** | 22.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1006P 6x LAN, 4x PoE+, 67W, kov | 48.50 € | **40.50 €** | 26.5 % | **5.6 %** | 33.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1005LP 5x GLAN, 4xPoE+, 41W, dos... | 40.50 € | **32.50 €** | 32.0 % | **5.9 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link Mercusys MS110CMP 2x GLAN, 8x LAN s P... | 46.00 € | **38.00 €** | 32.1 % | **9.1 %** | 38.42 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin L Steel | 36.50 € | **29.00 €** | 41.4 % | **12.3 %** | 29.20 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **159.00 €** | 11.1 % | **6.1 %** | 159.29 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-775S2 Päťzónový (štvorcový) sklenený ply... | 181.00 € | **173.90 €** | 44.3 % | **38.6 %** | 174.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1016D 16x LAN, desktop | 32.50 € | **25.50 €** | 33.9 % | **5.0 %** | 23.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES205G 5x GLan, Omáda SDN | 33.90 € | **26.90 €** | 33.0 % | **5.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dokovacia stanica TP-Link UH7021C USB-C, HDMI, 1x US... | 37.00 € | **30.00 €** | 31.9 % | **6.9 %** | 30.10 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 64.00 € | **57.00 €** | 23.2 % | **9.8 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110CP 2x GLAN, 8x LAN s Po... | 34.00 € | **27.50 €** | 31.7 % | **6.5 %** | 27.69 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica TP-Link UH5020C USB-C, HDMI, 1x US... | 33.00 € | **26.50 €** | 32.6 % | **6.5 %** | 26.70 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 323.50 € | **317.00 €** | 8.1 % | **5.9 %** | 317.46 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA86XE AXE 5400, WiFi... | 32.90 € | **26.50 €** | 32.1 % | **6.4 %** | 25.74 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG108 8x GLan, kov | 31.00 € | **24.90 €** | 30.9 % | **5.1 %** | 24.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Mercusys MA86XH Wireless USB adap... | 30.00 € | **23.90 €** | 32.2 % | **5.3 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS106LP 2x LAN, 4x LAN s PoE, 41W | 30.50 € | **24.50 €** | 32.7 % | **6.6 %** | 22.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Spúšťacia jednotka UTRAI JS10 | 102.00 € | **96.00 €** | 23.5 % | **16.2 %** | 96.26 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 284.50 € | **278.50 €** | 40.7 % | **37.7 %** | 278.89 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 104.50 € | **98.50 €** | 21.8 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| USB klient TP-Link Archer T4U AC 1300 Dual Band Wire... | 28.50 € | **22.90 €** | 32.8 % | **6.7 %** | 22.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Wall charger Blitzwolf BW-S26 250 W (black) | 48.50 € | **43.00 €** | 34.1 % | **18.9 %** | 43.10 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 49.50 € | **44.00 €** | 28.9 % | **14.6 %** | 44.14 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RY6555WH | 104.90 € | **99.90 €** | 10.3 % | **5.0 %** | 87.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS105LP 1x LAN, 4x LAN s PoE, 41W | 25.50 € | **20.50 €** | 32.9 % | **6.8 %** | 20.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router GL.iNet Mango s podporou Wi-Fi 4 | 35.00 € | **30.00 €** | 22.6 % | **5.1 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 64.00 € | **59.00 €** | 32.2 % | **21.9 %** | 59.20 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 64.00 € | **59.00 €** | 32.9 % | **22.6 %** | 59.20 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 54.00 € | **49.00 €** | 45.6 % | **32.1 %** | 49.47 € | cena podľa najlacnejšieho iného predajcu |
| Behringer GMX-500 | 45.50 € | **41.00 €** | 28.0 % | **15.3 %** | 41.01 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 70.00 € | **65.50 €** | 13.2 % | **5.9 %** | 65.59 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 73.00 € | **68.50 €** | 20.6 % | **13.1 %** | 68.77 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD300ProII pre upevnenie Godox | 500.50 € | **496.00 €** | 14.6 % | **13.6 %** | 496.29 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Blade A35e zelený | 98.90 € | **94.50 €** | 10.1 % | **5.2 %** | 86.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer C-2 condenser microphones | 49.00 € | **44.90 €** | 15.0 % | **5.4 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic TG V50 s Dynamický mikrofón s vypínačom | 109.00 € | **104.90 €** | 15.0 % | **10.7 %** | 105.00 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L5396 | 315.50 € | **311.50 €** | 6.4 % | **5.1 %** | 276.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 109A | 155.50 € | **151.50 €** | 8.8 % | **6.0 %** | 151.61 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 88.00 € | **84.00 €** | 12.4 % | **7.3 %** | 84.14 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 135.50 € | **131.50 €** | 19.9 % | **16.3 %** | 131.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT598 | 28.90 € | **25.00 €** | 23.5 % | **6.9 %** | 25.11 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin M Steel | 27.90 € | **24.00 €** | 27.8 % | **9.9 %** | 24.40 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.00 €** | 18.5 % | **7.2 %** | 37.47 € | cena podľa najlacnejšieho iného predajcu |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 104.00 € | **100.50 €** | 9.0 % | **5.3 %** | 89.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 29.00 € | **25.50 €** | 19.6 % | **5.2 %** | 19.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 29.00 € | **25.50 €** | 19.6 % | **5.2 %** | 19.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 210A | 212.00 € | **208.50 €** | 7.7 % | **6.0 %** | 208.65 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1902B-SV | 85.50 € | **82.00 €** | 21.4 % | **16.4 %** | 82.23 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT888 (čierne) | 27.00 € | **23.90 €** | 24.0 % | **9.8 %** | 23.92 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio NP-FV100 vrátane info chipu pre Sony | 32.00 € | **28.90 €** | 26.9 % | **14.6 %** | 28.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Štvorcový rám, bloku... | 69.00 € | **65.90 €** | 25.1 % | **19.5 %** | 65.93 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 151.00 € | **147.90 €** | 15.2 % | **12.8 %** | 148.00 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný snímač teploty a vlhkosti WiFi Gosund S... | 15.50 € | **12.50 €** | 46.0 % | **17.8 %** | 12.56 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 28.00 € | **25.00 €** | 30.7 % | **16.7 %** | 25.07 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100BFB | 55.00 € | **52.00 €** | 14.6 % | **8.4 %** | 52.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M + 3 ventilátory (... | 48.00 € | **45.00 €** | 46.4 % | **37.3 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT805 (čierne) | 25.50 € | **22.90 €** | 25.1 % | **12.4 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Tefal EY8328E0 | 119.50 € | **116.90 €** | 7.4 % | **5.0 %** | 94.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aligator R45 eXtremo Black Red | 67.50 € | **64.90 €** | 9.4 % | **5.2 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 81.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO MGC 20100 W | 61.00 € | **58.50 €** | 13.7 % | **9.0 %** | 58.51 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 125.00 € | **122.50 €** | 13.4 % | **11.1 %** | 122.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **10.00 €** | 42.7 % | **14.2 %** | 10.10 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PS8400 kuchyňská váha | 23.00 € | **20.50 €** | 19.0 % | **6.1 %** | 20.60 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 139.00 € | **136.50 €** | 22.5 % | **20.3 %** | 136.65 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 38.00 € | **35.50 €** | 21.7 % | **13.7 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Prijímač BOYA BY-WM3U bezdrátový, dosah 20m | 81.90 € | **79.50 €** | 8.7 % | **5.6 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TechniSat DIGITRADIO 30 V2 /bílé/ 0010/3955 | 66.90 € | **64.50 €** | 14.6 % | **10.5 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 17.90 € | **15.50 €** | 68.0 % | **45.5 %** | 15.56 € | cena podľa najlacnejšieho iného predajcu |
| Strieborná závesná LED vianočná hviezda Solight 1V29... | 7.90 € | **5.80 €** | 72.7 % | **26.8 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 26.00 € | **24.00 €** | 38.9 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 26.00 € | **24.00 €** | 38.9 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61641 SkokánekGO/GO+/D143 | 18.50 € | **16.50 €** | 46.7 % | **30.9 %** | 16.74 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 22.00 € | **20.00 €** | 18.1 % | **7.3 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| Pero Baseus Smooth Writing 2 Stylus Pen (fialové) | 16.00 € | **14.00 €** | 31.8 % | **15.3 %** | 14.33 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.00 € | **30.00 €** | 13.3 % | **6.2 %** | 30.36 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 600D | 132.50 € | **130.50 €** | 18.0 % | **16.2 %** | 130.90 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš KIS Chic Bin M Black | 26.00 € | **24.00 €** | 17.8 % | **8.7 %** | 24.40 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat VIOLA 2 bílo-černé | 37.50 € | **35.50 €** | 15.1 % | **9.0 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 115.90 € | **114.00 €** | 7.0 % | **5.2 %** | 114.32 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-P23 100 W 14 000 mAh powerbanka | 51.90 € | **50.00 €** | 21.3 % | **16.9 %** | 50.38 € | cena podľa najlacnejšieho iného predajcu |
| Snímač teploty a vlhkosti SONOFF AirGuard SNZB-02M | 19.50 € | **17.90 €** | 16.0 % | **6.5 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hodiny nástěnné TechnoLine WT 1016 | 20.50 € | **18.90 €** | 18.7 % | **9.4 %** | 18.96 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 42.50 € | **40.90 €** | 9.8 % | **5.7 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal SV9201E0 | 188.00 € | **186.50 €** | 6.0 % | **5.2 %** | 186.56 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.50 € | **34.00 €** | 13.4 % | **8.6 %** | 34.10 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V65 Smartwatch (Gray) | 31.50 € | **30.00 €** | 16.7 % | **11.2 %** | 30.38 € | cena podľa najlacnejšieho iného predajcu |
| Zvukový mixér a zvuková karta AMC2 Neo | 43.00 € | **41.50 €** | 16.1 % | **12.1 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha GO Škoda Rally | 61.00 € | **59.50 €** | 14.4 % | **11.6 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 42.00 € | **40.50 €** | 21.1 % | **16.8 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 144.50 € | **143.00 €** | 51.8 % | **50.2 %** | 143.50 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 10N3BX-S | 469.00 € | **467.90 €** | 10.0 % | **9.7 %** | 468.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 101.00 € | **99.90 €** | 7.0 % | **5.8 %** | 99.99 € | cena podľa najlacnejšieho iného predajcu |
| BEKO CEG7302B | 238.50 € | **237.50 €** | 5.5 % | **5.0 %** | 218.53 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hlavná kefa MOVA pre model Z50 Ultra | 13.50 € | **12.50 €** | 14.8 % | **6.3 %** | 12.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Russell Hobbs 24992-70 | 40.50 € | **39.50 €** | 10.4 % | **7.7 %** | 39.59 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.00 € | **18.00 €** | 38.4 % | **31.1 %** | 18.10 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 64.50 € | **63.50 €** | 21.5 % | **19.6 %** | 63.67 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.50 € | **61.50 €** | 8.8 % | **7.1 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.00 € | **42.00 €** | 13.5 % | **10.9 %** | 42.21 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 325.50 € | **324.50 €** | 78.5 % | **77.9 %** | 324.72 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 126.50 € | **125.50 €** | 15.9 % | **15.0 %** | 125.75 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 17,9MM 7 (čierny) | 32.50 € | **31.50 €** | 22.2 % | **18.4 %** | 31.77 € | cena podľa najlacnejšieho iného predajcu |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 69.00 € | **68.00 €** | 13.6 % | **12.0 %** | 68.34 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 69.00 € | **68.00 €** | 10.5 % | **8.9 %** | 68.34 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mobilnej dokovacej stanice VITURE pre Nintend... | 21.00 € | **20.00 €** | 32.8 % | **26.4 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 153.90 € | **153.00 €** | 20.8 % | **20.1 %** | 153.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 42.90 € | **42.00 €** | 12.8 % | **10.4 %** | 42.27 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 689.90 € | **689.00 €** | 14.2 % | **14.1 %** | 689.04 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 306.90 € | **306.00 €** | 46.3 % | **45.9 %** | 306.27 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 431.90 € | **431.00 €** | 15.3 % | **15.0 %** | 431.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 42.50 € | **41.90 €** | 43.8 % | **41.8 %** | 41.96 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3067-PK se závažím a počí... | 16.50 € | **15.90 €** | 18.8 % | **14.5 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Korková podložka na jógu HMS YM11 | 30.00 € | **29.50 €** | 8.4 % | **6.6 %** | 26.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LEIFHEIT Návlek na mop Twist XL SOE52016 | 11.00 € | **10.50 €** | 10.4 % | **5.4 %** | 8.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.50 € | **14.00 €** | 18.6 % | **14.5 %** | 14.04 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.50 € | **15.00 €** | 8.7 % | **5.2 %** | 15.04 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **14.00 €** | 13.9 % | **10.0 %** | 14.06 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 11.50 € | **11.00 €** | 21.6 % | **16.3 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (sivá) | 11.50 € | **11.00 €** | 26.2 % | **20.7 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 11.50 € | **11.00 €** | 21.6 % | **16.3 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 13.00 € | **12.50 €** | 17.3 % | **12.8 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 36.00 € | **35.50 €** | 15.4 % | **13.8 %** | 35.66 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 39.00 € | **38.50 €** | 22.2 % | **20.6 %** | 38.66 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 36.00 € | **35.50 €** | 18.4 % | **16.8 %** | 35.66 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus AL1 | 38.00 € | **37.50 €** | 20.3 % | **18.7 %** | 37.68 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 11.00 € | **10.50 €** | 23.5 % | **17.9 %** | 10.70 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 150.00 € | **149.50 €** | 11.6 % | **11.2 %** | 149.73 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 25.00 € | **24.50 €** | 14.8 % | **12.5 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 30.50 € | **30.00 €** | 28.2 % | **26.1 %** | 30.29 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 50.00 € | **49.50 €** | 7.0 % | **6.0 %** | 49.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 59.50 € | **59.00 €** | 8.2 % | **7.3 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 23.00 € | **22.50 €** | 13.5 % | **11.1 %** | 22.79 € | cena podľa najlacnejšieho iného predajcu |
| Barkan S320. B - natáčecí stojan pro TV (29-58'' 25k... | 59.50 € | **59.00 €** | 17.9 % | **16.9 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 80.00 € | **79.50 €** | 13.2 % | **12.5 %** | 79.79 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.00 € | **64.50 €** | 15.1 % | **14.2 %** | 64.79 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 76.00 € | **75.50 €** | 16.6 % | **15.8 %** | 75.79 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine MA10410 | 75.00 € | **74.50 €** | 6.8 % | **6.0 %** | 74.79 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 56.50 € | **56.00 €** | 13.6 % | **12.6 %** | 56.29 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 84.50 € | **84.00 €** | 14.6 % | **13.9 %** | 84.29 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač Evercon AH-707 | 52.50 € | **52.00 €** | 15.6 % | **14.5 %** | 52.29 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.00 € | **24.50 €** | 9.9 % | **7.7 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Carrera EVO 27876 Porsche 911 GT3 R | 41.50 € | **41.00 €** | 13.7 % | **12.3 %** | 41.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64033 Mario Kart - Mario | 15.50 € | **15.00 €** | 10.7 % | **7.2 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64245 Porsche 992 GT3 No.14 | 15.50 € | **15.00 €** | 10.7 % | **7.2 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.00 € | **10.50 €** | 21.0 % | **15.5 %** | 10.79 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 274.50 € | **274.00 €** | 32.6 % | **32.3 %** | 274.29 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 274.50 € | **274.00 €** | 29.4 % | **29.2 %** | 274.29 € | cena podľa najlacnejšieho iného predajcu |
| Aligator AUDIO COMBO set 3v1 AUC001 | 31.00 € | **30.50 €** | 13.6 % | **11.7 %** | 30.80 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 19,1MM 9 (čierny) | 36.50 € | **36.00 €** | 22.1 % | **20.4 %** | 36.34 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 1,5 m ... | 29.00 € | **28.50 €** | 39.9 % | **37.5 %** | 28.85 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 343.50 € | **343.00 €** | 25.5 % | **25.3 %** | 343.39 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 64.50 € | **64.00 €** | 97.1 % | **95.6 %** | 64.39 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 114.00 € | **113.50 €** | 39.3 % | **38.7 %** | 113.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.50 € | **70.00 €** | 13.8 % | **13.0 %** | 70.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **89.00 €** | 14.8 % | **14.2 %** | 89.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 317.50 € | **317.00 €** | 18.2 % | **18.0 %** | 317.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.00 € | **238.50 €** | 11.9 % | **11.7 %** | 238.89 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia Uni-T RCD UT582+ | 101.00 € | **100.50 €** | 10.9 % | **10.3 %** | 100.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 129.00 € | **128.50 €** | 7.7 % | **7.2 %** | 128.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.50 € | **471.00 €** | 9.0 % | **8.8 %** | 471.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 925.50 € | **925.00 €** | 17.6 % | **17.6 %** | 925.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.50 € | **79.00 €** | 14.6 % | **13.9 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **89.00 €** | 14.8 % | **14.1 %** | 89.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 26.50 € | **26.00 €** | 8.4 % | **6.3 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.50 € | **132.00 €** | 16.0 % | **15.6 %** | 132.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 82.00 € | **81.50 €** | 8.5 % | **7.8 %** | 81.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 77.00 € | **76.50 €** | 7.0 % | **6.3 %** | 76.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 188.00 € | **187.50 €** | 11.7 % | **11.4 %** | 187.89 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS4K-24 24V/3800W | 292.00 € | **291.50 €** | 5.3 % | **5.2 %** | 291.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 256.50 € | **256.00 €** | 19.9 % | **19.6 %** | 256.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 115.00 € | **114.50 €** | 7.3 % | **6.8 %** | 114.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 20.00 € | **19.50 €** | 33.0 % | **29.6 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 24.50 € | **24.00 €** | 24.2 % | **21.6 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 995.50 € | **995.00 €** | 13.5 % | **13.5 %** | 995.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 61.50 € | **61.00 €** | 14.7 % | **13.8 %** | 61.39 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 276.50 € | **276.00 €** | 30.4 % | **30.1 %** | 276.39 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 83.50 € | **83.00 €** | 27.3 % | **26.5 %** | 83.39 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 83.00 € | **82.50 €** | 5.9 % | **5.2 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.50 € | **162.00 €** | 21.2 % | **20.8 %** | 162.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 82.50 € | **82.00 €** | 33.1 % | **32.2 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 105.50 € | **105.00 €** | 11.7 % | **11.2 %** | 105.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.50 € | **152.00 €** | 19.3 % | **18.9 %** | 152.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.50 € | **127.00 €** | 17.0 % | **16.5 %** | 127.39 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-M, 30 m, viacfarebná... | 15.00 € | **14.50 €** | 42.6 % | **37.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR009007 | 11.50 € | **11.00 €** | 21.3 % | **16.0 %** | 11.40 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 25.50 € | **25.00 €** | 17.0 % | **14.7 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 12x25 | 27.50 € | **27.00 €** | 9.0 % | **7.0 %** | 27.47 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 20.50 € | **20.00 €** | 17.3 % | **14.4 %** | 20.48 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Prosperplast SORTIBOX 3 x 35 l popolavý | 24.50 € | **24.00 €** | 11.0 % | **8.8 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 36.50 € | **36.00 €** | 41.3 % | **39.4 %** | 36.49 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 181.50 € | **181.00 €** | 11.9 % | **11.6 %** | 181.49 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.50 € | **168.00 €** | 33.8 % | **33.4 %** | 168.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu PLA Classic (čierny), 1,75 mm, 1 kg | 13.50 € | **13.00 €** | 50.4 % | **44.8 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.50 € | **181.00 €** | 25.7 % | **25.3 %** | 181.50 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 W portable label printer (blue) | 66.90 € | **66.50 €** | 9.6 % | **9.0 %** | 66.64 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné púzdro DiCAPac WP-S3 pro fotoaparáty se zoomem | 73.90 € | **73.50 €** | 25.2 % | **24.5 %** | 73.80 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 81.90 € | **81.50 €** | 25.6 % | **25.0 %** | 81.89 € | cena podľa najlacnejšieho iného predajcu |
| Shifter Moza Racing HGP RS039 | 143.90 € | **143.50 €** | 7.2 % | **6.9 %** | 143.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 11.90 € | **11.50 €** | 39.8 % | **35.1 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 12.90 € | **12.50 €** | 18.5 % | **14.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (biely) | 11.90 € | **11.50 €** | 14.8 % | **10.9 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.70 € | **8.30 €** | 74.6 % | **66.6 %** | 8.32 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.90 € | **28.50 €** | 11.1 % | **9.6 %** | 28.54 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 19.90 € | **19.50 €** | 45.9 % | **43.0 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 54.90 € | **54.50 €** | 67.2 % | **66.0 %** | 54.89 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V275, 25 cm, 5 LED, 2 ... | 16.90 € | **16.50 €** | 44.5 % | **41.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočný LED svietnik s hviezdami Solight 1V265, 30 ... | 16.90 € | **16.50 €** | 44.5 % | **41.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Citrusovač, G2005100 SUCCOBELL | 24.90 € | **24.50 €** | 21.8 % | **19.8 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 31.90 € | **31.50 €** | 18.4 % | **16.9 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Pouzdro SGTabA11 FIXRTC-1650-BK | 32.90 € | **32.50 €** | 14.8 % | **13.4 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 5.80 € | **5.60 €** | 44.6 % | **39.7 %** | 5.64 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les s jeleňmi Solight 1V249,... | 3.60 € | **3.40 €** | 43.5 % | **35.5 %** | 3.46 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.20 € | **3.00 €** | 42.2 % | **33.3 %** | 3.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.90 € | **2.70 €** | 32.5 % | **23.3 %** | 2.72 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná hviezda na stenu Solight 1V261, 24 LED,... | 3.90 € | **3.70 €** | 41.6 % | **34.3 %** | 3.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.60 € | **5.40 €** | 34.7 % | **29.9 %** | 5.50 € | cena podľa najlacnejšieho iného predajcu |
| myPhone 3510 LTE černý | 62.00 € | **61.90 €** | 11.5 % | **11.3 %** | 61.91 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti štekaniu Rojeco 1000M PD521 ... | 42.00 € | **41.90 €** | 38.9 % | **38.6 %** | 41.91 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot Blast black od Silverlit | 29.00 € | **28.90 €** | 15.0 % | **14.6 %** | 28.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.90 € | **7.80 €** | 48.0 % | **46.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 68.00 € | **67.90 €** | 8.2 % | **8.0 %** | 67.99 € | cena podľa najlacnejšieho iného predajcu |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-19

Vstup: `premiumstore-sk_2026-10-19_12-44.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6345**
- Návrh **zvýšiť** cenu: **397** produktov
- Návrh **znížiť** cenu: **366** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5582** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **51**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **340**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (397)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria Flytec V900 12000mah | 16.00 € | **223.90 €** | 15.3 % | **1513.8 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **223.90 €** | 14.5 % | **476.1 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, čierna) | 253.50 € | **418.90 €** | 15.1 % | **90.2 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 253.50 € | **418.90 €** | 15.0 % | **90.0 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 253.50 € | **418.90 €** | 14.9 % | **89.9 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 254.90 € | **418.90 €** | 15.0 % | **89.0 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 253.50 € | **416.90 €** | 14.9 % | **89.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, čierna) | 253.50 € | **416.90 €** | 14.9 % | **89.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, strieborná) | 253.50 € | **416.90 €** | 14.9 % | **89.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, zlatá) | 253.50 € | **416.90 €** | 14.9 % | **89.0 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 521.50 € | **646.90 €** | 18.2 % | **46.7 %** | 647.00 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Nikon | 238.90 € | **306.90 €** | 15.9 % | **48.8 %** | 307.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q300 | 224.50 € | **286.90 €** | 15.1 % | **47.0 %** | 287.00 € | cena podľa najlacnejšieho iného predajcu |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 267.50 € | **328.90 €** | 22.6 % | **50.7 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10, 64GB (biely) | 215.90 € | **266.90 €** | 15.0 % | **42.2 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10, 64GB (čierny) | 215.90 € | **266.90 €** | 15.0 % | **42.2 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal QT2028F0 | 335.50 € | **383.00 €** | 5.1 % | **20.0 %** | 383.29 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 | 371.00 € | **418.50 €** | 5.9 % | **19.4 %** | 418.88 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 604.00 € | **650.00 €** | 15.0 % | **23.8 %** | 650.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight kúpeľňový radiátor 500W | 130.00 € | **173.90 €** | 4.8 % | **40.2 %** | 174.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 460.50 € | **502.90 €** | 12.4 % | **22.8 %** | 502.94 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 495.50 € | **535.00 €** | 10.6 % | **19.4 %** | 535.50 € | cena podľa najlacnejšieho iného predajcu |
| NAS server TERRAMASTER F2-425 Plus s procesorom Inte... | 495.50 € | **534.50 €** | 15.0 % | **24.0 %** | 534.88 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server TERRAMASTER F6-424 NAS s procesorom ... | 702.50 € | **738.50 €** | 15.0 % | **20.9 %** | 738.88 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD NAS - súborový server s procesoro... | 655.50 € | **691.00 €** | 15.0 % | **21.2 %** | 691.50 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F4 SSD NAS - súborový server s procesoro... | 474.90 € | **508.50 €** | 15.0 % | **23.2 %** | 508.71 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 359.90 € | **391.90 €** | 5.0 % | **14.4 %** | 391.99 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 120" projection screen. | 34.00 € | **64.00 €** | 14.2 % | **115.0 %** | 64.29 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D70 | 259.00 € | **287.90 €** | 15.0 % | **27.8 %** | 287.93 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 288.90 € | **317.50 €** | 5.3 % | **15.7 %** | 317.63 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel Neewer GL1 Pro 2900–7000 K | 90.50 € | **118.90 €** | 15.0 % | **51.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Pro (čier... | 328.50 € | **355.00 €** | 15.0 % | **24.3 %** | 355.42 € | cena podľa najlacnejšieho iného predajcu |
| Vlogová kamera SJCAM ZV200 (čierna) | 102.90 € | **128.90 €** | 14.9 % | **44.0 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552320 Crocodile 5G LTE700 domovní zesilovač | 39.50 € | **65.00 €** | 18.4 % | **94.8 %** | 65.46 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower WPU-500-12 UPS 500W 12V čistý ... | 95.50 € | **119.50 €** | 1.8 % | **27.4 %** | 119.75 € | cena podľa najlacnejšieho iného predajcu |
| Neewer SRP18-2.4G 46 cm LED kruhové svetlo | 105.00 € | **128.90 €** | 15.0 % | **41.2 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1919 (čierny) | 96.50 € | **118.90 €** | 14.9 % | **41.5 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 777.00 € | **798.00 €** | 11.1 % | **14.1 %** | 798.29 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3512B | 83.50 € | **101.50 €** | 12.3 % | **36.5 %** | 101.75 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 SensiCare® EW6T226C | 387.50 € | **405.00 €** | 10.0 % | **15.0 %** | 405.01 € | cena podľa najlacnejšieho iného predajcu |
| WiFi RGBW 16M Gosund LB2S Tuya smart night light | 11.50 € | **28.50 €** | 11.7 % | **176.8 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell VND s polarizáciou | 63.90 € | **79.90 €** | 8.7 % | **36.0 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXHB1501E Tyčový mixér | 21.90 € | **37.90 €** | 11.3 % | **92.6 %** | 37.99 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 178.00 € | **194.00 €** | 14.9 % | **25.2 %** | 194.28 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, zlatá) | 178.00 € | **194.00 €** | 14.9 % | **25.2 %** | 194.28 € | cena podľa najlacnejšieho iného predajcu |
| Fotoaparát SJCAM ZV100 (biely) | 83.50 € | **98.90 €** | 15.1 % | **36.3 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRALINK ULM300MIC wireless microphone set | 110.00 € | **124.90 €** | 15.0 % | **30.6 %** | 124.95 € | cena podľa najlacnejšieho iného predajcu |
| Měnič napětí EPever IPower IP500-12-Plus-T 500W 12V | 190.50 € | **204.90 €** | 4.7 % | **12.6 %** | 204.99 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ20 – nabíjací set (čierny) | 193.50 € | **206.50 €** | 15.1 % | **22.8 %** | 206.54 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 187.00 € | **200.00 €** | 7.9 % | **15.4 %** | 200.49 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 187.00 € | **200.00 €** | 7.9 % | **15.4 %** | 200.49 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre V60 MOBIUS | 46.90 € | **59.50 €** | 15.3 % | **46.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 51.90 € | **64.00 €** | 15.4 % | **42.3 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 66.90 € | **79.00 €** | 15.0 % | **35.8 %** | 79.18 € | cena podľa najlacnejšieho iného predajcu |
| Bramka GL.iNet GL-MT5000 | 145.00 € | **157.00 €** | 9.3 % | **18.4 %** | 157.08 € | cena podľa najlacnejšieho iného predajcu |
| Guma posilovací REBEL ACTIVE RBA-3000-S4 Latexová sa... | 15.50 € | **27.50 €** | 7.5 % | **90.8 %** | 27.75 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LE300Bi | 301.50 € | **313.50 €** | 15.0 % | **19.6 %** | 313.79 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect USetup E7 15,6" 1920x1080 60Hz prenosný dot... | 130.00 € | **141.90 €** | 11.6 % | **21.8 %** | 141.96 € | cena podľa najlacnejšieho iného predajcu |
| RojecoPD521 1000m výcvikový obojok pre psov s 2 oboj... | 56.00 € | **67.50 €** | 15.0 % | **38.7 %** | 67.78 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco PD529 1000m výcvikový obojok pre psov s 2 obo... | 54.50 € | **65.50 €** | 15.2 % | **38.5 %** | 65.61 € | cena podľa najlacnejšieho iného predajcu |
| Booster UltraCap CSC 12/800 12 V, 800 A | 288.90 € | **299.50 €** | 10.6 % | **14.7 %** | 299.88 € | cena podľa najlacnejšieho iného predajcu |
| Tlačiareň na označovanie káblov NIIMBOT C1 | 186.00 € | **196.50 €** | 14.8 % | **21.3 %** | 196.54 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V803-GPS 12000mAh loď na návnadu | 143.50 € | **154.00 €** | 15.1 % | **23.5 %** | 154.21 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 7 (čierny) | 34.00 € | **44.00 €** | 14.5 % | **48.1 %** | 44.09 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 218.00 € | **228.00 €** | 12.4 % | **17.6 %** | 228.17 € | cena podľa najlacnejšieho iného predajcu |
| MOES TV02 Termostatická hlavica s LCD displejom a te... | 32.00 € | **42.00 €** | 37.7 % | **80.8 %** | 42.24 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V020, 12 000 mAh | 132.00 € | **141.90 €** | 14.8 % | **23.4 %** | 141.96 € | cena podľa najlacnejšieho iného predajcu |
| LED videolampa GODOX ML80Bi | 228.90 € | **238.50 €** | 14.8 % | **19.6 %** | 238.83 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX ES30 pre e-šport | 135.00 € | **144.50 €** | 15.9 % | **24.0 %** | 144.75 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (biela) | 142.00 € | **151.50 €** | 15.0 % | **22.6 %** | 151.79 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (čierna) | 142.00 € | **151.50 €** | 15.0 % | **22.6 %** | 151.79 € | cena podľa najlacnejšieho iného predajcu |
| LONGER RAY5 minis 3,5 W laserový gravír | 143.90 € | **153.00 €** | 15.0 % | **22.3 %** | 153.29 € | cena podľa najlacnejšieho iného predajcu |
| Neewer BP66 štúdiový set dve LED lampy + filtre + st... | 37.00 € | **46.00 €** | 14.7 % | **42.6 %** | 46.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 141.50 € | **150.50 €** | 8.3 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 455.00 € | **463.50 €** | 7.4 % | **9.4 %** | 463.56 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 56.50 € | **65.00 €** | 17.1 % | **34.7 %** | 65.18 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti kôrovcom Rojeco 1000m PD529 ... | 34.50 € | **43.00 €** | 15.8 % | **44.3 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.50 € | **38.50 €** | 15.5 % | **45.9 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti kôrovcom Rojeco 1000m PD529 ... | 34.50 € | **42.50 €** | 15.8 % | **42.6 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 106.00 € | **114.00 €** | 5.1 % | **13.0 %** | 114.47 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 99.50 € | **107.00 €** | 10.3 % | **18.6 %** | 107.40 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BDIN38542P | 402.90 € | **410.00 €** | 5.1 % | **6.9 %** | 410.50 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP400R RGB | 128.90 € | **136.00 €** | 17.6 % | **24.1 %** | 136.13 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 82.90 € | **90.00 €** | 5.1 % | **14.1 %** | 90.49 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti štekaniu Rojeco 1000M PD521 ... | 34.90 € | **41.90 €** | 15.4 % | **38.6 %** | 41.91 € | cena podľa najlacnejšieho iného predajcu |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 92.50 € | **99.50 €** | 5.4 % | **13.4 %** | 99.54 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 60.50 € | **67.50 €** | 9.4 % | **22.0 %** | 67.79 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 104.50 € | **111.50 €** | 5.3 % | **12.4 %** | 111.85 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER GR18C Okrúhly LED panel pre bočné osvetlenie | 194.00 € | **201.00 €** | 19.3 % | **23.6 %** | 201.38 € | cena podľa najlacnejšieho iného predajcu |
| Výcvikový obojok Rojeco PD511 | 29.50 € | **36.00 €** | 14.6 % | **39.9 %** | 36.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight trubica pre GL05-100 | 13.00 € | **19.50 €** | 49.5 % | **124.2 %** | 19.55 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 154.00 € | **160.50 €** | 16.8 % | **21.7 %** | 160.71 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 64.50 € | **71.00 €** | 10.3 % | **21.4 %** | 71.27 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 50.00 € | **56.50 €** | 60.6 % | **81.5 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| Systém riadenia vlákien Creality CFS | 240.50 € | **246.50 €** | 5.5 % | **8.1 %** | 246.58 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 148.90 € | **154.90 €** | 16.9 % | **21.6 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 87.90 € | **93.90 €** | 5.0 % | **12.2 %** | 94.00 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 98.50 € | **104.50 €** | 14.8 % | **21.8 %** | 104.67 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 151.00 € | **157.00 €** | 6.3 % | **10.5 %** | 157.19 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT625B, USB | 39.50 € | **45.50 €** | 11.0 % | **27.8 %** | 45.78 € | cena podľa najlacnejšieho iného predajcu |
| Detektor drôtov UNI-T UT25CL | 131.50 € | **137.50 €** | 5.3 % | **10.1 %** | 137.80 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 53.00 € | **59.00 €** | 11.2 % | **23.8 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu |
| Výcvikový obojok Rojeco DOG800 (zelený) | 26.50 € | **32.50 €** | 15.1 % | **41.1 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight trubica pre GL05-100N | 13.00 € | **19.00 €** | 49.5 % | **118.5 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 98.00 € | **103.90 €** | 15.0 % | **22.0 %** | 103.96 € | cena podľa najlacnejšieho iného predajcu |
| Behringer PODCASTUDIO 2 USB | 93.90 € | **99.50 €** | 15.0 % | **21.9 %** | 99.88 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC čierne | 133.50 € | **139.00 €** | 28.8 % | **34.1 %** | 139.04 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 62.00 € | **67.50 €** | 12.3 % | **22.3 %** | 67.58 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CB60B Dvojfarebné 70 W LED štúdiové osvetlenie | 118.50 € | **124.00 €** | 14.8 % | **20.1 %** | 124.29 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný hliníkový statív Neewer LT07 s guľovou hlavou | 73.50 € | **79.00 €** | 15.4 % | **24.0 %** | 79.33 € | cena podľa najlacnejšieho iného predajcu |
| Drôtové slúchadlá do uší TRUTHEAR Zero (modré) | 64.00 € | **69.50 €** | 38.2 % | **50.1 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 41.50 € | **47.00 €** | 20.0 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 26.50 € | **32.00 €** | 17.8 % | **42.2 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN X Gimbal (sivý) | 47.50 € | **52.50 €** | 18.2 % | **30.6 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BOP6737E05EPBG | 342.50 € | **347.50 €** | 10.2 % | **11.8 %** | 347.70 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C100PRO (biela) | 67.00 € | **72.00 €** | 14.9 % | **23.4 %** | 72.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 18.50 € | **23.50 €** | 5.3 % | **33.8 %** | 23.83 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre modely E30 Ultra/P10 Ultra | 22.00 € | **27.00 €** | 15.2 % | **41.3 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 79.90 € | **84.50 €** | 17456.6 % | **18467.3 %** | 84.59 € | cena podľa najlacnejšieho iného predajcu |
| Stan Puluz 80 cm bez tieňov s LED svietidlom s výkon... | 70.90 € | **75.50 €** | 5.6 % | **12.4 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| Napájadlo pre psy a mačky PetKit Eversweet 3 Pro | 85.90 € | **90.50 €** | 9.3 % | **15.2 %** | 90.79 € | cena podľa najlacnejšieho iného predajcu |
| Zvuková karta Maono G1 Neo (biela) | 42.50 € | **47.00 €** | 8.7 % | **20.2 %** | 47.04 € | cena podľa najlacnejšieho iného predajcu |
| Maono G1 Neo Sound Card Black | 42.50 € | **47.00 €** | 7.3 % | **18.6 %** | 47.04 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá s tlačidlami... | 34.50 € | **39.00 €** | 15.3 % | **30.3 %** | 39.04 € | cena podľa najlacnejšieho iného predajcu |
| Šipky Elektronický terč Trizand 27046 | 79.50 € | **84.00 €** | 11.1 % | **17.4 %** | 84.09 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 31.00 € | **35.50 €** | 7.0 % | **22.6 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (červené) | 31.00 € | **35.50 €** | 8.3 % | **24.0 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 15.00 € | **19.50 €** | 5.3 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 291.00 € | **295.50 €** | 60.1 % | **62.6 %** | 295.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 s 6 ventilátormi (čie... | 110.90 € | **115.00 €** | 15.2 % | **19.5 %** | 115.24 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.50 € | **31.50 €** | 13.0 % | **29.5 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC S100neo AC/DC | 50.00 € | **54.00 €** | 33.0 % | **43.7 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 36.00 € | **39.90 €** | 15.5 % | **28.1 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 631.00 € | **634.90 €** | 7.3 % | **7.9 %** | 634.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač 4 x 16A, biely | 3.10 € | **6.80 €** | 48.3 % | **225.2 %** | 6.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 12.90 € | **16.50 €** | 5.5 % | **35.0 %** | 16.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.90 € | **141.50 €** | 16.3 % | **19.4 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia pumpa na pneumatiky Blitzwolf BW-JA1 160... | 71.50 € | **75.00 €** | 15.2 % | **20.9 %** | 75.33 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Verto High 54 l tmavomodrý | 42.00 € | **45.50 €** | 5.2 % | **14.0 %** | 45.88 € | cena podľa najlacnejšieho iného predajcu |
| Softbox Neewer 85 cm | 84.50 € | **88.00 €** | 20.4 % | **25.4 %** | 88.41 € | cena podľa najlacnejšieho iného predajcu |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 80.50 € | **84.00 €** | 29.1 % | **34.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 34.50 € | **38.00 €** | 58.8 % | **74.9 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 376.50 € | **380.00 €** | 26.9 % | **28.1 %** | 380.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 376.50 € | **380.00 €** | 20.8 % | **22.0 %** | 380.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 22.50 € | **26.00 €** | 21.1 % | **40.0 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Neewer GM76 179 cm statív / monopod | 91.50 € | **94.90 €** | 15.2 % | **19.5 %** | 94.97 € | cena podľa najlacnejšieho iného predajcu |
| ETA Ambito 0516 90000 bílý/tyrkysový | 59.50 € | **62.90 €** | 5.3 % | **11.4 %** | 63.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMSR58CU1SX | 327.90 € | **331.00 €** | 5.9 % | **6.9 %** | 331.40 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 21.90 € | **25.00 €** | 70.4 % | **94.5 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXCJ350E | 43.90 € | **47.00 €** | 5.2 % | **12.6 %** | 47.07 € | cena podľa najlacnejšieho iného predajcu |
| Potápěčský set - hračky Kruzzel 24247 | 13.50 € | **16.50 €** | 9.0 % | **33.2 %** | 16.57 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 29.90 € | **32.90 €** | 15.3 % | **26.9 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 426.50 € | **429.50 €** | 11.6 % | **12.4 %** | 429.61 € | cena podľa najlacnejšieho iného predajcu |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 100.50 € | **103.50 €** | 5.2 % | **8.3 %** | 103.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight stolná lampa Falun, E27, biela | 26.50 € | **29.50 €** | 19.1 % | **32.6 %** | 29.80 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Yogurella 617 | 26.50 € | **29.50 €** | 6.6 % | **18.6 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Turistická rybářská židle, skládací s opěradlem | 13.00 € | **15.90 €** | 16.9 % | **43.0 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 23.90 € | **26.50 €** | 65.7 % | **83.7 %** | 26.61 € | cena podľa najlacnejšieho iného predajcu |
| Concept OPP1050 | 54.90 € | **57.50 €** | 10.6 % | **15.9 %** | 57.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM08 (čierna) | 25.50 € | **28.00 €** | 14.4 % | **25.6 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (biela) | 25.50 € | **28.00 €** | 14.2 % | **25.4 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM10 (čierna) | 25.50 € | **28.00 €** | 14.2 % | **25.4 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| BoboVR G3 Grip Cover – návleky na rukoväte pre VR | 17.00 € | **19.50 €** | 14.8 % | **31.7 %** | 19.67 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 ATX + 6 ventilátorov ... | 111.50 € | **114.00 €** | 15.2 % | **17.7 %** | 114.25 € | cena podľa najlacnejšieho iného predajcu |
| Optibox Zebra diaľkový ovládač (s PVR) - originálny | 13.50 € | **16.00 €** | 18.3 % | **40.2 %** | 16.30 € | cena podľa najlacnejšieho iného predajcu |
| KMP C98 (CL-546 XL) | 17.50 € | **20.00 €** | 11.6 % | **27.5 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 22.50 € | **25.00 €** | 36.8 % | **52.0 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1019800 Napěňovač Choco-lat | 58.00 € | **60.50 €** | 10.6 % | **15.4 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 653.50 € | **656.00 €** | 7.7 % | **8.1 %** | 656.41 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 35.50 € | **38.00 €** | 13.7 % | **21.7 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 105.50 € | **107.90 €** | 38.3 % | **41.5 %** | 107.93 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM09 (čierna) | 25.50 € | **27.90 €** | 14.8 % | **25.6 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi spínač na žalúzie Meross MRS100MA(... | 21.50 € | **23.90 €** | 13.7 % | **26.3 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 7.60 € | **9.90 €** | 5.4 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 317.90 € | **320.00 €** | 29.0 % | **29.8 %** | 320.25 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L Automatic Pet Feeder Button Version (White) | 36.90 € | **39.00 €** | 15.4 % | **22.0 %** | 39.04 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 39.90 € | **42.00 €** | 15.0 % | **21.0 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 71599 SkokánekGO/GO+/D143 | 21.90 € | **24.00 €** | 10.2 % | **20.7 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100WFB | 52.00 € | **54.00 €** | 10.6 % | **14.9 %** | 54.06 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 27.00 € | **29.00 €** | 12.8 % | **21.2 %** | 29.09 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3236 | 31.00 € | **33.00 €** | 5.5 % | **12.4 %** | 33.09 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 40.50 € | **42.50 €** | 8.8 % | **14.1 %** | 42.60 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EB210 WiFi 7 AP BE3600,1x GWan, ... | 68.00 € | **70.00 €** | 7.5 % | **10.7 %** | 70.14 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kleště odizolovací, krimpovací 200mm + k... | 21.00 € | **23.00 €** | 7.0 % | **17.2 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MVC72HGA | 29.00 € | **31.00 €** | 8.2 % | **15.7 %** | 31.30 € | cena podľa najlacnejšieho iného predajcu |
| Neewer photo bag | 43.00 € | **45.00 €** | 30.0 % | **36.1 %** | 45.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 20.50 € | **22.50 €** | 10.7 % | **21.5 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1013400 | 57.50 € | **59.50 €** | 13.9 % | **17.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón SJCAM C200 Pro | 10.50 € | **12.50 €** | 16.6 % | **38.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 97.50 € | **99.50 €** | 6.0 % | **8.1 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FH50EAW | 475.00 € | **477.00 €** | 5.6 % | **6.1 %** | 477.42 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 69.00 € | **70.90 €** | 29.8 % | **33.3 %** | 70.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight časovač so súmrakovým senzorom, 230V, 3600W | 8.60 € | **10.50 €** | 45.1 % | **77.1 %** | 10.52 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 47.00 € | **48.90 €** | 14.6 % | **19.3 %** | 48.96 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (biela) | 19.00 € | **20.90 €** | 14.4 % | **25.9 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (čierna) | 19.00 € | **20.90 €** | 14.4 % | **25.9 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.80 € | **11.50 €** | 13.7 % | **33.4 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TL98C DMX LED svetelná tyč | 49.90 € | **51.50 €** | 19.9 % | **23.7 %** | 51.83 € | cena podľa najlacnejšieho iného predajcu |
| Sušička ovoce Ruhhy 25928 400W | 49.90 € | **51.50 €** | 5.4 % | **8.8 %** | 51.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné reproduktory Onikuma L2 | 12.90 € | **14.50 €** | 5.5 % | **18.6 %** | 14.63 € | cena podľa najlacnejšieho iného predajcu |
| GODOX AD-S85S Softbox | 88.90 € | **90.50 €** | 23.2 % | **25.5 %** | 90.63 € | cena podľa najlacnejšieho iného predajcu |
| Římská lavice, hyperextenze HMS LR8310 | 132.50 € | **134.00 €** | 3.9 % | **5.0 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 15.50 € | **17.00 €** | 26.5 % | **38.8 %** | 17.05 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER x660 PRO II | 199.00 € | **200.50 €** | 19.5 % | **20.4 %** | 200.57 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 16.50 € | **18.00 €** | 5.4 % | **15.0 %** | 18.08 € | cena podľa najlacnejšieho iného predajcu |
| Myš ONIKUMA DM06 | 17.50 € | **19.00 €** | 15.7 % | **25.6 %** | 19.17 € | cena podľa najlacnejšieho iného predajcu |
| Flexibilný statív pre fotoaparát Neewer TP34 | 17.50 € | **19.00 €** | 14.5 % | **24.3 %** | 19.21 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 124.00 € | **125.50 €** | 14.8 % | **16.2 %** | 125.77 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 40.50 € | **42.00 €** | 16.8 % | **21.1 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| TC ELECTRONIC BUCKET BRIGADE ANALOG DELAY | 73.00 € | **74.50 €** | 15.0 % | **17.4 %** | 74.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB453138 | 29.50 € | **31.00 €** | 7.9 % | **13.4 %** | 31.43 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón SJCAM SJ10 Pro | 10.50 € | **12.00 €** | 16.6 % | **33.3 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER LED pásik – neónový RGB | 71.50 € | **72.90 €** | 22.3 % | **24.6 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny COAX konektor priamy - typ Taliansko... | 5.10 € | **6.50 €** | 49.7 % | **90.8 %** | 6.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 6.80 € | **8.20 €** | 18.9 % | **43.4 %** | 8.22 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 501.50 € | **502.90 €** | 7.8 % | **8.1 %** | 502.94 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7981 | 34.90 € | **36.00 €** | 6.0 % | **9.4 %** | 36.09 € | cena podľa najlacnejšieho iného predajcu |
| Sati Hansi Doux et Suave 1000g zrno | 21.90 € | **23.00 €** | 11.6 % | **17.2 %** | 23.10 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 22.90 € | **24.00 €** | 5.1 % | **10.1 %** | 24.28 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64034 Mario Kart - Luigi | 14.90 € | **16.00 €** | 6.4 % | **14.3 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey S7 s kamerou s dosahom 1... | 135.90 € | **137.00 €** | 15.0 % | **16.0 %** | 137.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 7.50 € | **8.50 €** | 20.5 % | **36.6 %** | 8.53 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón pre kameru SJCAM SJ8 Pro | 12.50 € | **13.50 €** | 16.0 % | **25.3 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 163.50 € | **164.50 €** | 6.3 % | **6.9 %** | 164.59 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/250 Ohm | 380.90 € | **381.90 €** | 91.3 % | **91.8 %** | 382.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 446.90 € | **447.90 €** | 35.6 % | **35.9 %** | 448.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 310.90 € | **311.90 €** | 25.5 % | **25.9 %** | 312.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Safe'Tea KO261130 | 26.50 € | **27.50 €** | 10.4 % | **14.5 %** | 27.61 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 688.00 € | **689.00 €** | 36.7 % | **36.8 %** | 689.11 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 830.00 € | **831.00 €** | 27.4 % | **27.6 %** | 831.19 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný modul garážových dverí Avatto GDS16 WIFI | 17.00 € | **18.00 €** | 13.4 % | **20.1 %** | 18.25 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 43.00 € | **44.00 €** | 13.2 % | **15.8 %** | 44.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 32.50 € | **33.50 €** | 33.0 % | **37.1 %** | 33.77 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-002-33 Reflexný dáždnik | 11.50 € | **12.50 €** | 13.5 % | **23.3 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 17.50 € | **18.50 €** | 5.3 % | **11.3 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 35.00 € | **36.00 €** | 34.1 % | **37.9 %** | 36.31 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.00 € | **38.00 €** | 7.6 % | **10.5 %** | 38.39 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Vitoria PV3700 | 31.50 € | **32.50 €** | 10.1 % | **13.6 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.50 € | **12.50 €** | 12.1 % | **21.9 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 14.50 € | **15.50 €** | 5.1 % | **12.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 11.50 € | **12.50 €** | 14.0 % | **23.9 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 228.50 € | **229.50 €** | 16.1 % | **16.6 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 228.50 € | **229.50 €** | 16.1 % | **16.6 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 207.50 € | **208.50 €** | 16.0 % | **16.6 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 203.50 € | **204.50 €** | 13.8 % | **14.3 %** | 204.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 207.50 € | **208.50 €** | 16.0 % | **16.6 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 207.50 € | **208.50 €** | 16.0 % | **16.6 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 15.50 € | **16.50 €** | 10.8 % | **18.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco Smart Laser Cat Toy | 18.50 € | **19.50 €** | 32.2 % | **39.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 87.50 € | **88.50 €** | 24.0 % | **25.4 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV2839E0 | 32.00 € | **33.00 €** | 10.1 % | **13.6 %** | 33.41 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO30211IP | 124.00 € | **125.00 €** | 21.7 % | **22.6 %** | 125.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C 20 W fast charger | 5.80 € | **6.70 €** | 44.6 % | **67.1 %** | 6.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 5.80 € | **6.70 €** | 56.1 % | **80.4 %** | 6.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 5.80 € | **6.70 €** | 56.1 % | **80.4 %** | 6.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 14.00 € | **14.90 €** | 38.1 % | **47.0 %** | 14.98 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Podsie 4 POP Sakura Pink | 19.00 € | **19.90 €** | 1.1 % | **5.9 %** | 15.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 8.80 € | **9.70 €** | 6.0 % | **16.8 %** | 9.79 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (biela) | 19.00 € | **19.90 €** | 13.9 % | **19.3 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 330.00 € | **330.90 €** | 16.4 % | **16.7 %** | 330.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **5.50 €** | 6.6 % | **22.2 %** | 5.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **5.80 €** | 18.1 % | **34.3 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 608 | 23.90 € | **24.50 €** | 11.5 % | **14.3 %** | 24.65 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO727BL | 57.90 € | **58.50 €** | 10.0 % | **11.2 %** | 58.67 € | cena podľa najlacnejšieho iného predajcu |
| KOMA RK01 - Univerzální rotační kartáč | 17.90 € | **18.50 €** | 12.3 % | **16.1 %** | 18.70 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW953 (čierna) | 12.90 € | **13.50 €** | 15.4 % | **20.7 %** | 13.83 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 239.90 € | **240.50 €** | 5.1 % | **5.3 %** | 240.55 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TBE400U BE6500, WiFi 7,  2... | 70.90 € | **71.50 €** | 13.2 % | **14.2 %** | 71.69 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 147.90 € | **148.50 €** | 5.3 % | **5.7 %** | 148.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H8C SE 2K IP, vonkajšia, PTZ, 3 Mpx | 38.00 € | **38.50 €** | 4.3 % | **5.6 %** | 38.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED kryt pro SG S26 FIXFLM2-1704-RD | 19.50 € | **20.00 €** | 12.0 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.50 € | **188.00 €** | 10.3 % | **10.6 %** | 188.01 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 49.00 € | **49.50 €** | 32.1 % | **33.5 %** | 49.52 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.50 € | **90.00 €** | 39.9 % | **40.6 %** | 90.02 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.00 € | **19.50 €** | 31.0 % | **34.5 %** | 19.52 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Copertinto BL439G10 | 56.50 € | **57.00 €** | 5.5 % | **6.5 %** | 57.03 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.50 € | **138.00 €** | 15.2 % | **15.6 %** | 138.03 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 208.00 € | **208.50 €** | 50.4 % | **50.8 %** | 208.53 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 266.50 € | **267.00 €** | 57.2 % | **57.5 %** | 267.03 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Arctic White | 16.00 € | **16.50 €** | 6.4 % | **9.8 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Onyx Black | 16.00 € | **16.50 €** | 6.4 % | **9.8 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Sakura Pink | 16.00 € | **16.50 €** | 6.4 % | **9.8 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.00 € | **335.50 €** | 22.7 % | **22.9 %** | 335.53 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 152.00 € | **152.50 €** | 31.1 % | **31.5 %** | 152.53 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2659 | 69.00 € | **69.50 €** | 11.9 % | **12.7 %** | 69.55 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica ELEGOO Mercury XS | 129.50 € | **130.00 €** | 17.5 % | **18.0 %** | 130.05 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-DC24PL3C-L 2.4 Mpix venkovní dome kamera 4v1 ... | 50.00 € | **50.50 €** | 15.6 % | **16.7 %** | 50.55 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 200.00 € | **200.50 €** | 19.3 % | **19.6 %** | 200.55 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.00 € | **71.50 €** | 16.4 % | **17.2 %** | 71.56 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.00 € | **266.50 €** | 7.3 % | **7.5 %** | 266.56 € | cena podľa najlacnejšieho iného predajcu |
| Solac New Optima Pro PV2114 | 31.50 € | **32.00 €** | 42.3 % | **44.5 %** | 32.08 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 295.00 € | **295.50 €** | 43.1 % | **43.3 %** | 295.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.70 € | **5.20 €** | 22.1 % | **35.1 %** | 5.28 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 132.50 € | **133.00 €** | 10.8 % | **11.2 %** | 133.08 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533W1-EU (biela) | 98.00 € | **98.50 €** | 14.8 % | **15.3 %** | 98.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.50 € | **11.00 €** | 20.2 % | **26.0 %** | 11.09 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 41.00 € | **41.50 €** | 7.4 % | **8.7 %** | 41.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 12.00 € | **12.50 €** | 19.3 % | **24.2 %** | 12.59 € | cena podľa najlacnejšieho iného predajcu |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 59.00 € | **59.50 €** | 18.4 % | **19.4 %** | 59.59 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RACING SRP2 Zadný držiak | 42.00 € | **42.50 €** | 15.1 % | **16.5 %** | 42.59 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 144.50 € | **145.00 €** | 7.7 % | **8.1 %** | 145.09 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač krmiva PETKIT Fresh Element SOLO, 3 l | 73.00 € | **73.50 €** | 6.7 % | **7.4 %** | 73.59 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 163.00 € | **163.50 €** | 12.4 % | **12.7 %** | 163.60 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 351.50 € | **352.00 €** | 35.0 % | **35.1 %** | 352.10 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 174.50 € | **175.00 €** | 26.2 % | **26.6 %** | 175.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight elektrický sušiak uterákov 130W | 98.00 € | **98.50 €** | 50.3 % | **51.0 %** | 98.61 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.00 € | **116.50 €** | 17.3 % | **17.8 %** | 116.61 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.00 € | **105.50 €** | 18.5 % | **19.1 %** | 105.62 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-PETG (priehľadný) | 10.50 € | **11.00 €** | 6.4 % | **11.5 %** | 11.12 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.00 € | **15.50 €** | 5.2 % | **8.7 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| Behringer P16 HQ 16-kanálový osobný monitorovací mix... | 187.00 € | **187.50 €** | 25.8 % | **26.1 %** | 187.63 € | cena podľa najlacnejšieho iného predajcu |
| Klark Teknik DN200 V2 DI Box | 187.00 € | **187.50 €** | 20.1 % | **20.5 %** | 187.63 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped DeerRun S500 Pro (čierny) | 325.00 € | **325.50 €** | 51.8 % | **52.0 %** | 325.63 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 287.00 € | **287.50 €** | 16.3 % | **16.5 %** | 287.64 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 16.00 € | **16.50 €** | 14.3 % | **17.9 %** | 16.64 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 247.00 € | **247.50 €** | 31.0 % | **31.3 %** | 247.65 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 362.50 € | **363.00 €** | 81.3 % | **81.5 %** | 363.15 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.00 € | **296.50 €** | 12.6 % | **12.8 %** | 296.66 € | cena podľa najlacnejšieho iného predajcu |
| TricutBrush 2.0 – hlavný kefový nástavec pre robotic... | 39.50 € | **40.00 €** | 19.0 % | **20.5 %** | 40.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný obojsmerný merač energie Avatto WiFi WP... | 17.00 € | **17.50 €** | 11.5 % | **14.7 %** | 17.67 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 337.50 € | **338.00 €** | 23.6 % | **23.8 %** | 338.17 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM9802B | 128.00 € | **128.50 €** | 8.6 % | **9.0 %** | 128.68 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 5 powered studio monitor | 258.00 € | **258.50 €** | 48.4 % | **48.6 %** | 258.68 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer Air PR... | 58.50 € | **59.00 €** | 6.8 % | **7.7 %** | 59.19 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 375.00 € | **375.50 €** | 49.2 % | **49.4 %** | 375.69 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.00 € | **104.50 €** | 20.9 % | **21.4 %** | 104.69 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.00 € | **233.50 €** | 23.7 % | **24.0 %** | 233.70 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 315.00 € | **315.50 €** | 5.5 % | **5.6 %** | 315.70 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 320.00 € | **320.50 €** | 13.0 % | **13.1 %** | 320.70 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 387.50 € | **388.00 €** | 8.6 % | **8.7 %** | 388.22 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx QX1222USB mixpult s USB a efektmi | 283.00 € | **283.50 €** | 55.0 % | **55.3 %** | 283.75 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 50.00 € | **50.50 €** | 10.9 % | **12.1 %** | 50.76 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 497.50 € | **498.00 €** | 5.5 % | **5.6 %** | 498.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 31.50 € | **32.00 €** | 29.1 % | **31.2 %** | 32.35 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 300.00 € | **300.50 €** | 36.0 % | **36.3 %** | 300.85 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 300.00 € | **300.50 €** | 36.0 % | **36.3 %** | 300.85 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 542.00 € | **542.50 €** | 46.0 % | **46.1 %** | 542.85 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 141.50 € | **142.00 €** | 7.2 % | **7.6 %** | 142.37 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY Buds HT15 ANC (čierne) | 15.50 € | **16.00 €** | 13.9 % | **17.6 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno ELEGOO ASA (čierne) | 12.00 € | **12.50 €** | 12.8 % | **17.5 %** | 12.88 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NB907MAW | 62.50 € | **63.00 €** | 11.2 % | **12.1 %** | 63.39 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 14.00 € | **14.50 €** | 5.5 % | **9.3 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 39.50 € | **40.00 €** | 7.7 % | **9.1 %** | 40.41 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 12.50 € | **13.00 €** | 12.8 % | **17.3 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo C225 | 58.50 € | **59.00 €** | 10.7 % | **11.7 %** | 59.49 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 141.50 € | **142.00 €** | 13.4 % | **13.8 %** | 142.49 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27371-56 | 30.50 € | **31.00 €** | 6.2 % | **7.9 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.50 € | **10.00 €** | 19.7 % | **26.0 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 18.00 € | **18.50 €** | 10.9 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.50 € | **158.90 €** | 15.9 % | **16.2 %** | 158.93 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 125.50 € | **125.90 €** | 20.6 % | **21.0 %** | 125.95 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-0360 4.0 Mpix venkovní IP dome kamera... | 117.50 € | **117.90 €** | 17.4 % | **17.8 %** | 117.95 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon CRITICAL MASS, vokálny efektový pedál | 124.50 € | **124.90 €** | 20.3 % | **20.7 %** | 124.95 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat DIGITRADIO 317 /černé/ | 83.50 € | **83.90 €** | 8.3 % | **8.8 %** | 83.98 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.50 € | **217.90 €** | 13.5 % | **13.8 %** | 217.99 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.50 € | **217.90 €** | 36.5 % | **36.8 %** | 217.99 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 195.50 € | **195.90 €** | 7.6 % | **7.8 %** | 195.99 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Opal Titanium BS4950 | 79.50 € | **79.90 €** | 10.5 % | **11.0 %** | 80.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 770 M 80 Ohm | 163.50 € | **163.90 €** | 5.0 % | **5.3 %** | 164.00 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco automatic soap dispenser 400ml | 15.50 € | **15.90 €** | 15.9 % | **18.9 %** | 15.96 € | cena podľa najlacnejšieho iného predajcu |
| Držák projektoru Cabletech UCH0148 univerzální | 14.50 € | **14.90 €** | 14.7 % | **17.8 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| LTE filtr Fagor LBF 694 (5-694 MHz, LTE 5G útlum 45 dB) | 14.50 € | **14.90 €** | 14.7 % | **17.8 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 40.50 € | **40.90 €** | 33.2 % | **34.5 %** | 40.91 € | cena podľa najlacnejšieho iného predajcu |
| RainPoint WiFi 8-zónový regulátor zavlažovania | 59.50 € | **59.90 €** | 16.8 % | **17.6 %** | 59.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.96 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 silver | 23.50 € | **23.90 €** | 7.8 % | **9.7 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 24.50 € | **24.90 €** | 14.3 % | **16.1 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.50 € | **52.90 €** | 8.7 % | **9.6 %** | 52.99 € | cena podľa najlacnejšieho iného predajcu |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 20.50 € | **20.90 €** | 16.1 % | **18.4 %** | 20.99 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 22.50 € | **22.90 €** | 10.9 % | **12.9 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Compact | 37.50 € | **37.90 €** | 7.3 % | **8.4 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 36.50 € | **36.90 €** | 5.4 % | **6.6 %** | 37.00 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les a jeleň Solight 1V223-A,... | 5.40 € | **5.70 €** | 36.8 % | **44.4 %** | 5.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 7,2 W, 1521lm, 27... | 5.80 € | **6.10 €** | 75.9 % | **85.1 %** | 6.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **2.30 €** | 23.2 % | **41.7 %** | 2.35 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s drevenými hviezdami Solight 1V2... | 4.20 € | **4.50 €** | 33.4 % | **42.9 %** | 4.57 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W1 TUYA | 7.90 € | **8.20 €** | 15.3 % | **19.7 %** | 8.29 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 262.90 € | **263.00 €** | 22.9 % | **23.0 %** | 263.23 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 431.90 € | **432.00 €** | 15.3 % | **15.3 %** | 432.46 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI DI600P DI box | 32.90 € | **33.00 €** | 11.3 % | **11.6 %** | 33.01 € | cena podľa najlacnejšieho iného predajcu |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 19.90 € | **20.00 €** | 12.1 % | **12.7 %** | 20.02 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix venkovní kamera 4v1 s ... | 56.90 € | **57.00 €** | 16.7 % | **16.9 %** | 57.05 € | cena podľa najlacnejšieho iného predajcu |
| Pohybové čidlo ORBIS ISIMAT | 22.90 € | **23.00 €** | 17.6 % | **18.1 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 29.90 € | **30.00 €** | 18.5 % | **18.9 %** | 30.09 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.90 € | **52.00 €** | 5.9 % | **6.1 %** | 52.09 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX35U PLUS AX 1800 adaptér... | 23.90 € | **24.00 €** | 6.5 % | **6.9 %** | 24.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **2.10 €** | 49.2 % | **56.6 %** | 2.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, 20 - 200A | 6.40 € | **6.50 €** | 33.8 % | **35.8 %** | 6.57 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-Hepa | 11.90 € | **12.00 €** | 8.5 % | **9.4 %** | 12.40 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 93.90 € | **94.00 €** | 17.5 % | **17.7 %** | 94.09 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.90 € | **131.00 €** | 25856.8 % | **25876.6 %** | 131.09 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 76.90 € | **77.00 €** | 17.1 % | **17.3 %** | 77.10 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.90 € | **217.00 €** | 17.3 % | **17.4 %** | 217.27 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash K430 + 6 ventilátorov (č... | 65.90 € | **66.00 €** | 15.0 % | **15.2 %** | 66.29 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE R492PW | 189.90 € | **190.00 €** | 5.0 % | **5.1 %** | 190.38 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (366)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 795.50 € | **695.00 €** | 40.6 % | **22.9 %** | 695.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 324.50 € | **228.00 €** | 77.9 % | **25.0 %** | 228.04 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 614.00 € | **520.50 €** | 25.7 % | **6.6 %** | 520.87 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP600IIIV | 386.90 € | **315.00 €** | 47.2 % | **19.8 %** | 315.31 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 896.90 € | **836.90 €** | 54.7 % | **44.4 %** | 837.00 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 569.90 € | **520.00 €** | 19.8 % | **9.3 %** | 520.01 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P11pro | 242.50 € | **198.50 €** | 43.0 % | **17.0 %** | 198.88 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 228.00 € | **184.00 €** | 45.1 % | **17.1 %** | 184.42 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 228.00 € | **184.00 €** | 36.7 % | **10.4 %** | 184.42 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pix Cut 2 v 1 | 311.00 € | **268.50 €** | 33.3 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Whirlpool WHC18 T574 P | 902.90 € | **861.90 €** | 10.0 % | **5.0 %** | 730.15 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi TV S Mini LED 65 2026 | 856.90 € | **817.90 €** | 10.0 % | **5.0 %** | 728.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Canon | 272.00 € | **238.90 €** | 31.9 % | **15.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 308.00 € | **280.00 €** | 36.8 % | **24.3 %** | 280.03 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Note 17 Pro Max 8/512GB Blush | 597.50 € | **570.00 €** | 10.1 % | **5.0 %** | 496.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Creality K2 SE | 300.00 € | **274.50 €** | 14.9 % | **5.2 %** | 269.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 194.00 € | **169.50 €** | 38.7 % | **21.2 %** | 169.88 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje N62CS2W4 | 528.50 € | **504.50 €** | 10.0 % | **5.0 %** | 467.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX V1 TTL pre Nikon | 237.90 € | **214.00 €** | 22.0 % | **9.8 %** | 214.26 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 313.50 € | **291.00 €** | 17.4 % | **9.0 %** | 291.35 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FH43EAW | 492.90 € | **470.50 €** | 10.0 % | **5.0 %** | 404.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ELECTROLUX 700 PRO GlassCare EEG62310L | 477.50 € | **455.90 €** | 10.0 % | **5.0 %** | 383.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX LUX Senior (zelený) | 158.90 € | **138.90 €** | 66.5 % | **45.5 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Tesla 55E635SUS LED 55" UHD AndroidTV 11 | 415.90 € | **396.90 €** | 10.1 % | **5.1 %** | 379.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 64.00 € | **45.00 €** | 50.1 % | **5.6 %** | 45.08 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WMD44ME | 406.50 € | **387.90 €** | 10.0 % | **5.0 %** | 353.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skladací elektrický bežecký pás ACEZOE P20 (červený) | 252.00 € | **234.50 €** | 26.2 % | **17.4 %** | 234.58 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (čierny a... | 252.00 € | **234.50 €** | 26.2 % | **17.4 %** | 234.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň LIENE Pearl N200 Pro 2x3" (fi... | 108.90 € | **91.50 €** | 50.0 % | **26.0 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl N200 Pro 2x3" (zl... | 108.90 € | **91.50 €** | 47.5 % | **23.9 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 880 PRO 250 Ohm | 199.00 € | **181.90 €** | 15.0 % | **5.1 %** | 167.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SAMSUNG S65VC (LS34C652VAUXEN) | 373.90 € | **356.90 €** | 10.0 % | **5.0 %** | 326.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Osciloskop FNIRSI 2D15P | 183.50 € | **167.90 €** | 14.9 % | **5.1 %** | 154.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GORENJE FN4172CW | 341.00 € | **325.50 €** | 10.0 % | **5.0 %** | 325.81 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ20 (čierny) | 178.00 € | **162.90 €** | 14.9 % | **5.2 %** | 150.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje R619EAXL6 | 517.50 € | **503.00 €** | 10.0 % | **6.9 %** | 503.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV9812E0 | 309.90 € | **295.90 €** | 10.1 % | **5.1 %** | 293.68 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rowenta RH98A9WO | 281.90 € | **269.00 €** | 10.0 % | **5.0 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 223.00 € | **210.50 €** | 15.9 % | **9.4 %** | 210.51 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (biele) | 106.90 € | **95.00 €** | 40.2 % | **24.6 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (čierne) | 106.90 € | **95.00 €** | 40.2 % | **24.6 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (oranžové) | 106.90 € | **95.00 €** | 40.2 % | **24.6 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool MBNA910X | 252.90 € | **241.50 €** | 10.2 % | **5.2 %** | 233.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje R49DPW | 237.90 € | **226.90 €** | 10.1 % | **5.0 %** | 197.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX iFlash iT20 pre Nikon | 51.50 € | **40.50 €** | 45.6 % | **14.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| EPSON EcoTank L8180 | 771.90 € | **761.90 €** | 6.4 % | **5.0 %** | 678.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BenQ brašna k projektorům MX711/710/660/ | 46.00 € | **36.00 €** | 46.3 % | **14.5 %** | 36.04 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 156.90 € | **146.90 €** | 39.2 % | **30.3 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S AI | 64.50 € | **54.50 €** | 39.1 % | **17.5 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM005 15 kg výrobník ľadu (čierny) | 149.50 € | **139.50 €** | 21.8 % | **13.6 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFS 7469 W EE | 359.90 € | **350.00 €** | 10.0 % | **7.0 %** | 350.10 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 64.00 € | **54.50 €** | 32.2 % | **12.6 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S UV AI | 64.00 € | **54.50 €** | 38.0 % | **17.5 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 64.00 € | **54.50 €** | 32.9 % | **13.2 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HBL-801 kaskádový filter | 27.00 € | **18.00 €** | 103.4 % | **35.6 %** | 18.23 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ30 (čierny) | 222.90 € | **214.00 €** | 15.0 % | **10.4 %** | 214.02 € | cena podľa najlacnejšieho iného predajcu |
| Midland G9 Pro, PMR+LPD, single | 99.90 € | **91.90 €** | 14.6 % | **5.4 %** | 91.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic DT 252 80 Ohm | 204.90 € | **196.90 €** | 18.4 % | **13.8 %** | 197.00 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 58.50 € | **50.50 €** | 32.8 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| City Boss Z600 | 589.50 € | **581.90 €** | 10.0 % | **8.6 %** | 581.91 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 215.50 € | **207.90 €** | 12.9 % | **8.9 %** | 208.00 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING CS Pro RS093 | 338.90 € | **331.90 €** | 7.3 % | **5.1 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM C400 (biela) | 184.50 € | **177.50 €** | 14.9 % | **10.6 %** | 177.65 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (čierny) | 184.50 € | **177.50 €** | 14.9 % | **10.6 %** | 177.65 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 53.00 € | **46.50 €** | 29.4 % | **13.5 %** | 46.75 € | cena podľa najlacnejšieho iného predajcu |
| Spúšťacia jednotka UTRAI JS10 | 102.00 € | **95.50 €** | 23.5 % | **15.6 %** | 95.88 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 37.50 € | **31.00 €** | 36.5 % | **12.9 %** | 31.43 € | cena podľa najlacnejšieho iného predajcu |
| ETA Stormy Animal 2517 90000 modrý | 137.90 € | **131.50 €** | 10.3 % | **5.2 %** | 118.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Joystick PXN-2119 PRO na ovládanie letu | 77.90 € | **71.50 €** | 15.1 % | **5.7 %** | 70.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 98.50 € | **92.50 €** | 14.9 % | **7.9 %** | 92.66 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Game Pods FIXPDS-G-WH | 48.50 € | **42.50 €** | 32.9 % | **16.4 %** | 42.88 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 284.50 € | **278.50 €** | 27.8 % | **25.1 %** | 278.89 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 48.50 € | **43.00 €** | 34.1 % | **18.9 %** | 43.10 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 49.50 € | **44.00 €** | 28.9 % | **14.6 %** | 44.14 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 29.50 € | **24.00 €** | 57.6 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 29.50 € | **24.00 €** | 57.6 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD200XS (biely) | 57.50 € | **52.00 €** | 36.7 % | **23.6 %** | 52.34 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 144.50 € | **139.00 €** | 51.8 % | **46.0 %** | 139.50 € | cena podľa najlacnejšieho iného predajcu |
| WHIRLPOOL AKR 749/1 IX | 122.90 € | **117.50 €** | 10.2 % | **5.3 %** | 101.15 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 265.50 € | **260.50 €** | 10.6 % | **8.5 %** | 260.55 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 73.00 € | **68.00 €** | 20.6 % | **12.3 %** | 68.42 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 70.00 € | **65.50 €** | 13.2 % | **5.9 %** | 65.59 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 86.00 € | **81.50 €** | 13.8 % | **7.8 %** | 81.62 € | cena podľa najlacnejšieho iného predajcu |
| Behringer GMX-500 | 45.50 € | **41.00 €** | 28.0 % | **15.3 %** | 41.20 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD300ProII pre upevnenie Godox | 500.50 € | **496.00 €** | 14.6 % | **13.6 %** | 496.29 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10 128G (biela) | 235.00 € | **230.50 €** | 15.0 % | **12.8 %** | 230.85 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10 128GGB (čierny) | 235.00 € | **230.50 €** | 15.0 % | **12.8 %** | 230.85 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 011 | 65.90 € | **61.50 €** | 23.5 % | **15.2 %** | 61.75 € | cena podľa najlacnejšieho iného predajcu |
| Behringer C-2 condenser microphones | 49.00 € | **44.90 €** | 15.0 % | **5.4 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slúchadlá QCY Crossky C50i (biele) | 35.00 € | **30.90 €** | 41.2 % | **24.7 %** | 30.92 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50i (sivé) | 35.00 € | **30.90 €** | 41.2 % | **24.7 %** | 30.92 € | cena podľa najlacnejšieho iného predajcu |
| TESLA AirCook DualHeat QD575 XXL - multifunkční duál... | 150.00 € | **145.90 €** | 8.1 % | **5.1 %** | 115.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ELECTROLUX EPF61RR | 93.00 € | **88.90 €** | 10.1 % | **5.2 %** | 82.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Epson EcoTank L5396 | 315.50 € | **311.50 €** | 6.4 % | **5.1 %** | 276.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PIXMA TS6550i White | 92.50 € | **88.50 €** | 10.2 % | **5.4 %** | 53.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TESLA AirCook DualHeat QD464 XXL - multifunkční duál... | 133.50 € | **129.50 €** | 8.2 % | **5.0 %** | 99.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM SJ6 Ultra (čierny) | 112.50 € | **108.50 €** | 15.2 % | **11.1 %** | 108.60 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 88.00 € | **84.00 €** | 12.4 % | **7.3 %** | 84.14 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje OM38GBC | 134.00 € | **130.00 €** | 17.0 % | **13.5 %** | 130.21 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 4K + Tripod | 54.00 € | **50.00 €** | 21.3 % | **12.4 %** | 50.25 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 31.50 € | **27.50 €** | 53.1 % | **33.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 92.00 € | **88.00 €** | 14.8 % | **9.8 %** | 88.40 € | cena podľa najlacnejšieho iného predajcu |
| Súprava držadiel PGY RetroVa pre iPhone 16 Pro | 91.90 € | **88.00 €** | 15.2 % | **10.3 %** | 88.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT598 | 28.90 € | **25.00 €** | 23.5 % | **6.9 %** | 25.11 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.00 €** | 18.5 % | **7.2 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 9.50 € | **5.90 €** | 100.1 % | **24.3 %** | 5.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 32.50 € | **29.00 €** | 35.4 % | **20.8 %** | 29.11 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1902B-SV | 85.50 € | **82.00 €** | 21.4 % | **16.4 %** | 82.23 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 126.50 € | **123.00 €** | 15.9 % | **12.7 %** | 123.34 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 125.90 € | **122.50 €** | 10.2 % | **7.2 %** | 122.56 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 31.90 € | **28.50 €** | 32.5 % | **18.4 %** | 28.77 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 16e FIXPFIT2-1404-BK | 31.90 € | **28.50 €** | 27.4 % | **13.8 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT888 (čierne) | 27.00 € | **23.90 €** | 24.0 % | **9.8 %** | 23.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Štvorcový rám, bloku... | 69.00 € | **65.90 €** | 25.1 % | **19.5 %** | 65.93 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM017 20 kg výrobník ľadových kociek (čierny) | 212.00 € | **208.90 €** | 23.3 % | **21.5 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 151.00 € | **147.90 €** | 15.2 % | **12.8 %** | 148.00 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Note 17 4/128GB Sky Teal | 230.50 € | **227.50 €** | 6.6 % | **5.2 %** | 201.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosná tlačiareň štítkov Niimbot B4 (modrá) | 65.50 € | **62.50 €** | 10.6 % | **5.6 %** | 58.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Diaľkový ovládač Sunsat S400HDi | 16.50 € | **13.50 €** | 30.6 % | **6.9 %** | 11.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný snímač teploty a vlhkosti WiFi Gosund S... | 15.50 € | **12.50 €** | 46.0 % | **17.8 %** | 12.56 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 28.00 € | **25.00 €** | 30.7 % | **16.7 %** | 25.07 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) | 44.00 € | **41.00 €** | 19.7 % | **11.6 %** | 41.29 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (červený) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (čierny) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (oranžový) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (ružový) | 25.00 € | **22.00 €** | 38.8 % | **22.2 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 34.90 € | **32.00 €** | 18.8 % | **8.9 %** | 32.49 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač ALCAD AI-201 | 24.50 € | **21.90 €** | 19.1 % | **6.4 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA GT805 (čierne) | 25.50 € | **22.90 €** | 25.1 % | **12.4 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 25.50 € | **22.90 €** | 26.0 % | **13.1 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R45 eXtremo Black Red | 67.50 € | **64.90 €** | 9.4 % | **5.2 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| iRobot Roomba 115 Combo + Charge dock | 131.50 € | **128.90 €** | 10.2 % | **8.0 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 81.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný termostatický radiátorový ventil Avatto... | 34.00 € | **31.50 €** | 15.1 % | **6.6 %** | 25.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 15.50 € | **13.00 €** | 26.1 % | **5.8 %** | 11.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 125.00 € | **122.50 €** | 13.4 % | **11.1 %** | 122.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **10.00 €** | 42.7 % | **14.2 %** | 10.10 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PS8400 kuchyňská váha | 23.00 € | **20.50 €** | 19.0 % | **6.1 %** | 20.60 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 103.00 € | **100.50 €** | 16.6 % | **13.8 %** | 100.60 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 139.00 € | **136.50 €** | 22.5 % | **20.3 %** | 136.65 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 77.50 € | **75.00 €** | 13.6 % | **10.0 %** | 75.36 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA20FMW7NG Candy Wave 600 | 135.50 € | **133.00 €** | 9.2 % | **7.1 %** | 133.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 14.00 € | **11.50 €** | 31.0 % | **7.6 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Prijímač BOYA BY-WM3U bezdrátový, dosah 20m | 81.90 € | **79.50 €** | 8.7 % | **5.6 %** | 46.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 65.90 € | **63.50 €** | 23.9 % | **19.4 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 17.90 € | **15.50 €** | 68.0 % | **45.5 %** | 15.56 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.68 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Moza Racing RS062 svorka volantu pre stôl | 57.00 € | **54.90 €** | 22.8 % | **18.3 %** | 55.00 € | cena podľa najlacnejšieho iného predajcu |
| Strieborná závesná LED vianočná hviezda Solight 1V29... | 7.90 € | **5.80 €** | 72.7 % | **26.8 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B2-EU | 241.00 € | **238.90 €** | 17.0 % | **16.0 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| MERCUSYS MR80X WiFi Dual Band Router | 42.50 € | **40.50 €** | 10.4 % | **5.2 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Sunlu PLA Classic (čierny), 1,75 mm, 1 kg | 13.50 € | **11.50 €** | 50.4 % | **28.1 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (fialová) | 49.00 € | **47.00 €** | 14.7 % | **10.1 %** | 47.20 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24010-56 | 40.50 € | **38.50 €** | 10.9 % | **5.4 %** | 38.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.00 € | **30.00 €** | 13.3 % | **6.2 %** | 30.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.00 € | **20.00 €** | 35.3 % | **23.0 %** | 20.38 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 600D | 132.50 € | **130.50 €** | 18.0 % | **16.2 %** | 130.90 € | cena podľa najlacnejšieho iného predajcu |
| Aligator AUDIO COMBO set 3v1 AUC001 | 31.00 € | **29.00 €** | 13.6 % | **6.3 %** | 29.40 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V35 s Dynamický mikrofon | 59.00 € | **57.00 €** | 38.5 % | **33.8 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 bez ventilátorov (b... | 29.00 € | **27.00 €** | 47.4 % | **37.3 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE RB493PW | 181.90 € | **180.00 €** | 10.0 % | **8.9 %** | 180.10 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 115.90 € | **114.00 €** | 7.0 % | **5.2 %** | 114.32 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-P23 100 W 14 000 mAh powerbanka | 51.90 € | **50.00 €** | 21.3 % | **16.9 %** | 50.38 € | cena podľa najlacnejšieho iného predajcu |
| Snímač teploty a vlhkosti SONOFF AirGuard SNZB-02M | 19.50 € | **17.90 €** | 16.0 % | **6.5 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE505X AX1500 WiFi 6 Extender | 42.00 € | **40.50 €** | 10.1 % | **6.1 %** | 38.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.00 € | **34.50 €** | 10.3 % | **5.7 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal SV9201E0 | 188.00 € | **186.50 €** | 6.0 % | **5.2 %** | 186.56 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 274.50 € | **273.00 €** | 32.4 % | **31.7 %** | 273.09 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 274.50 € | **273.00 €** | 29.3 % | **28.5 %** | 273.09 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 38.00 € | **36.50 €** | 65.7 % | **59.2 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.50 € | **34.00 €** | 13.4 % | **8.6 %** | 34.10 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.00 € | **22.50 €** | 17.4 % | **10.1 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 276.50 € | **275.00 €** | 30.2 % | **29.5 %** | 275.19 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.00 € | **39.50 €** | 10.1 % | **6.1 %** | 39.71 € | cena podľa najlacnejšieho iného predajcu |
| Braun IS5247.VI | 186.50 € | **185.00 €** | 10.0 % | **9.1 %** | 185.21 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.50 € | **20.00 €** | 37.3 % | **27.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 27.50 € | **26.00 €** | 11.6 % | **5.5 %** | 26.32 € | cena podľa najlacnejšieho iného predajcu |
| Ovládač PXN-P5 8K | 33.50 € | **32.00 €** | 15.4 % | **10.2 %** | 32.36 € | cena podľa najlacnejšieho iného predajcu |
| Lampa na čítanie Yeelight Pura Reading Desk Lamp | 25.50 € | **24.00 €** | 20.5 % | **13.4 %** | 24.40 € | cena podľa najlacnejšieho iného predajcu |
| Zvukový mixér a zvuková karta AMC2 Neo | 43.00 € | **41.50 €** | 16.1 % | **12.1 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 11.90 € | **10.50 €** | 39.8 % | **23.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| CANON CL-541 Color | 23.90 € | **22.50 €** | 11.8 % | **5.3 %** | 21.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Wacom Intuos S Black | 55.90 € | **54.50 €** | 10.5 % | **7.7 %** | 54.60 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 10N3BX-S | 469.00 € | **467.90 €** | 10.0 % | **9.7 %** | 468.00 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 61.00 € | **59.90 €** | 18.8 % | **16.6 %** | 60.00 € | cena podľa najlacnejšieho iného predajcu |
| ECOLUX LED žiarovka 3-pack, klasický tvar, 12W, E27,... | 5.60 € | **4.50 €** | 134.7 % | **88.6 %** | 4.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W4 TUYA | 13.90 € | **12.90 €** | 15.4 % | **7.1 %** | 11.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON CL-546 Color | 20.50 € | **19.50 €** | 11.9 % | **6.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Magnetický upevňovací adaptér Sunnylife s guľovým kĺ... | 17.00 € | **16.00 €** | 27.9 % | **20.3 %** | 16.04 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG S24 FE FIXOP3-1391-BK | 12.50 € | **11.50 €** | 30.0 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot Blast black od Silverlit | 29.00 € | **28.00 €** | 15.0 % | **11.0 %** | 28.05 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V69 smartwatch (black) | 36.50 € | **35.50 €** | 18.7 % | **15.4 %** | 35.57 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdr SG A16 4G/5G FIXOP3-1500-BK | 12.50 € | **11.50 €** | 29.6 % | **19.3 %** | 11.57 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2023F0 | 37.50 € | **36.50 €** | 14.5 % | **11.5 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.00 € | **18.00 €** | 38.4 % | **31.1 %** | 18.10 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 403.90 € | **402.90 €** | 7.1 % | **6.8 %** | 403.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 213.90 € | **212.90 €** | 38545.0 % | **38364.3 %** | 213.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 648.90 € | **647.90 €** | 117135.8 % | **116955.1 %** | 648.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 11.50 € | **10.50 €** | 29.1 % | **17.9 %** | 10.62 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 64.50 € | **63.50 €** | 21.5 % | **19.6 %** | 63.67 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 12.00 € | **11.00 €** | 24.3 % | **13.9 %** | 11.19 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 181.50 € | **180.50 €** | 11.8 % | **11.2 %** | 180.69 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.50 € | **180.50 €** | 25.5 % | **24.8 %** | 180.70 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT20R-WH-3A-W-WiFi | 30.50 € | **29.50 €** | 14.4 % | **10.7 %** | 29.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 36.00 € | **35.00 €** | 15.4 % | **12.2 %** | 35.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 36.00 € | **35.00 €** | 18.4 % | **15.1 %** | 35.25 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 17,9MM 7 (čierny) | 32.50 € | **31.50 €** | 22.2 % | **18.4 %** | 31.77 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VN200 (čierne a červené) | 23.50 € | **22.50 €** | 19.4 % | **14.3 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.50 € | **167.50 €** | 33.6 % | **32.8 %** | 167.79 € | cena podľa najlacnejšieho iného predajcu |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 69.00 € | **68.00 €** | 13.6 % | **12.0 %** | 68.34 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 69.00 € | **68.00 €** | 10.5 % | **8.9 %** | 68.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight tryska proti krúteniu pre fén Dyson Superson... | 12.50 € | **11.50 €** | 31.8 % | **21.3 %** | 11.85 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 37-75" Perlesmith PSTVS13 | 33.00 € | **32.00 €** | 19.3 % | **15.7 %** | 32.38 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mobilnej dokovacej stanice VITURE pre Nintend... | 21.00 € | **20.00 €** | 32.8 % | **26.4 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED snehuliak Solight 1V233, 4 LED, 2 × AA | 12.50 € | **11.50 €** | 43.5 % | **32.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný veniec Solight 1V239, priemer 40 cm, 15... | 13.50 € | **12.50 €** | 44.0 % | **33.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM016 12 kg výrobník ľadových kociek (čierny) | 76.50 € | **75.50 €** | 12.4 % | **10.9 %** | 75.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.00 € | **30.00 €** | 10.2 % | **6.6 %** | 30.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 32.50 € | **31.50 €** | 13.4 % | **9.9 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2354B2 Stepper (Black) | 61.50 € | **60.50 €** | 23.5 % | **21.5 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.00 € | **77.00 €** | 14.3 % | **12.8 %** | 77.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníkový biely rám pre inštaláciu LED panel... | 17.00 € | **16.00 €** | 69.0 % | **59.0 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110GMP 2x GLAN, 8x GLAN s ... | 52.90 € | **52.00 €** | 8.2 % | **6.4 %** | 52.20 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 689.90 € | **689.00 €** | 14.2 % | **14.1 %** | 689.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 5m | 8.20 € | **7.50 €** | 48.5 % | **35.8 %** | 7.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna PRO+,T8, 18W, 2520lm, ... | 17.50 € | **16.90 €** | 49.8 % | **44.6 %** | 16.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 42.50 € | **41.90 €** | 43.8 % | **41.8 %** | 41.96 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR C3 Carrying Case for Quest 3 | 47.50 € | **46.90 €** | 36.1 % | **34.4 %** | 46.97 € | cena podľa najlacnejšieho iného predajcu |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 25.50 € | **24.90 €** | 9.2 % | **6.6 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 46.50 € | **45.90 €** | 16.8 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 6000K... | 5.30 € | **4.70 €** | 96.8 % | **74.5 %** | 4.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 5,0 W, 1055lm, 27... | 5.80 € | **5.20 €** | 108.6 % | **87.1 %** | 5.29 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 13.5 % | **11.3 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 13.00 € | **12.50 €** | 17.3 % | **12.8 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 33.50 € | **33.00 €** | 13.8 % | **12.1 %** | 33.14 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 33.50 € | **33.00 €** | 13.8 % | **12.1 %** | 33.14 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus AL1 | 38.00 € | **37.50 €** | 20.3 % | **18.7 %** | 37.68 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 150.00 € | **149.50 €** | 11.6 % | **11.2 %** | 149.73 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 HD | 21.50 € | **21.00 €** | 22.8 % | **19.9 %** | 21.23 € | cena podľa najlacnejšieho iného predajcu |
| Brita Fill&Go Active fil.láhev0,6l modrá | 12.50 € | **12.00 €** | 18.0 % | **13.3 %** | 12.26 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 webová kamera | 55.00 € | **54.50 €** | 21.2 % | **20.1 %** | 54.78 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 89.50 € | **89.00 €** | 7.3 % | **6.7 %** | 89.29 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXLR500E | 15.50 € | **15.00 €** | 40.5 % | **36.0 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 77.50 € | **77.00 €** | 17.2 % | **16.4 %** | 77.29 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT8208 Dvbt přijímač | 26.50 € | **26.00 €** | 12.2 % | **10.1 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 25.50 € | **25.00 €** | 17.0 % | **14.7 %** | 25.33 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 20.50 € | **20.00 €** | 11.9 % | **9.1 %** | 20.34 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (čierne) | 20.50 € | **20.00 €** | 18.1 % | **15.2 %** | 20.34 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 20.50 € | **20.00 €** | 16.4 % | **13.5 %** | 20.34 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 19,1MM 9 (čierny) | 36.50 € | **36.00 €** | 22.1 % | **20.4 %** | 36.34 € | cena podľa najlacnejšieho iného predajcu |
| Kolečka pro kancelářskou židli Ruhhy 25280 | 17.00 € | **16.50 €** | 49.4 % | **45.0 %** | 16.84 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RO 3985 EA | 75.50 € | **75.00 €** | 11.6 % | **10.9 %** | 75.38 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 343.50 € | **343.00 €** | 25.5 % | **25.3 %** | 343.39 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 64.50 € | **64.00 €** | 97.1 % | **95.6 %** | 64.39 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 114.00 € | **113.50 €** | 39.3 % | **38.7 %** | 113.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 29.00 € | **28.50 €** | 19.5 % | **17.4 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 29.00 € | **28.50 €** | 19.5 % | **17.4 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.50 € | **70.00 €** | 13.8 % | **13.0 %** | 70.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **89.00 €** | 14.8 % | **14.2 %** | 89.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 317.50 € | **317.00 €** | 18.2 % | **18.0 %** | 317.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.00 € | **238.50 €** | 11.9 % | **11.7 %** | 238.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 129.00 € | **128.50 €** | 7.7 % | **7.2 %** | 128.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.50 € | **471.00 €** | 9.0 % | **8.8 %** | 471.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 925.50 € | **925.00 €** | 17.6 % | **17.6 %** | 925.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.50 € | **79.00 €** | 14.6 % | **13.9 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **89.00 €** | 14.8 % | **14.1 %** | 89.39 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 51.00 € | **50.50 €** | 13.9 % | **12.8 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 51.00 € | **50.50 €** | 37.2 % | **35.9 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 26.50 € | **26.00 €** | 8.4 % | **6.3 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.50 € | **132.00 €** | 16.0 % | **15.6 %** | 132.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 82.00 € | **81.50 €** | 8.5 % | **7.8 %** | 81.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 77.00 € | **76.50 €** | 7.0 % | **6.3 %** | 76.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 188.00 € | **187.50 €** | 11.7 % | **11.4 %** | 187.89 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS4K-24 24V/3800W | 292.50 € | **292.00 €** | 5.4 % | **5.2 %** | 292.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 256.50 € | **256.00 €** | 19.9 % | **19.6 %** | 256.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 115.00 € | **114.50 €** | 7.3 % | **6.8 %** | 114.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 63.50 € | **63.00 €** | 17.0 % | **16.0 %** | 63.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO540FR | 63.50 € | **63.00 €** | 19.6 % | **18.6 %** | 63.39 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 73.50 € | **73.00 €** | 7.7 % | **6.9 %** | 73.39 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.00 € | **86.50 €** | 21.7 % | **21.0 %** | 86.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 52.50 € | **52.00 €** | 9.3 % | **8.3 %** | 52.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 27.00 € | **26.50 €** | 19.7 % | **17.5 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 266.50 € | **266.00 €** | 9.2 % | **9.0 %** | 266.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO1033S | 47.50 € | **47.00 €** | 10.1 % | **9.0 %** | 47.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 246.00 € | **245.50 €** | 24.1 % | **23.8 %** | 245.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 276.00 € | **275.50 €** | 8.7 % | **8.5 %** | 275.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 102.50 € | **102.00 €** | 6.9 % | **6.4 %** | 102.39 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 261.50 € | **261.00 €** | 7.3 % | **7.1 %** | 261.39 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel 50 | 75.50 € | **75.00 €** | 8.1 % | **7.4 %** | 75.39 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel Sun 50 | 75.50 € | **75.00 €** | 8.1 % | **7.4 %** | 75.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 150.50 € | **150.00 €** | 6.3 % | **5.9 %** | 150.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 20.00 € | **19.50 €** | 33.0 % | **29.6 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.50 € | **117.00 €** | 23199.6 % | **23100.5 %** | 117.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 79.50 € | **79.00 €** | 36.6 % | **35.8 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 186.50 € | **186.00 €** | 6.6 % | **6.3 %** | 186.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 61.50 € | **61.00 €** | 14.7 % | **13.8 %** | 61.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 310.00 € | **309.50 €** | 5.5 % | **5.3 %** | 309.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 609.00 € | **608.50 €** | 6.0 % | **5.9 %** | 608.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 639.00 € | **638.50 €** | 7.9 % | **7.8 %** | 638.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 687.00 € | **686.50 €** | 12.1 % | **12.0 %** | 686.89 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 83.50 € | **83.00 €** | 27.3 % | **26.5 %** | 83.39 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 83.00 € | **82.50 €** | 5.9 % | **5.2 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.50 € | **162.00 €** | 21.2 % | **20.8 %** | 162.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 82.50 € | **82.00 €** | 33.1 % | **32.2 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 105.50 € | **105.00 €** | 11.7 % | **11.2 %** | 105.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.50 € | **152.00 €** | 19.3 % | **18.9 %** | 152.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.50 € | **127.00 €** | 17.0 % | **16.5 %** | 127.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšia reťaz s žiarovkami, 10 žiarovi... | 13.00 € | **12.50 €** | 42.4 % | **37.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 15.00 € | **14.50 €** | 49.5 % | **44.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Biely vianočný LED lampáš Solight 1V266, 33 cm, 3 × ... | 13.00 € | **12.50 €** | 41.9 % | **36.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR009007 | 11.50 € | **11.00 €** | 21.3 % | **16.0 %** | 11.40 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 46.00 € | **45.50 €** | 7.8 % | **6.6 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 46.00 € | **45.50 €** | 7.8 % | **6.6 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.00 € | **141.50 €** | 7.0 % | **6.6 %** | 141.90 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.00 €** | 13.6 % | **10.5 %** | 18.49 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Prosperplast SORTIBOX 3 x 35 l popolavý | 24.50 € | **24.00 €** | 11.0 % | **8.8 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.50 € | **22.00 €** | 11.5 % | **9.1 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.50 € | **35.00 €** | 16.6 % | **15.0 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 3601 | 95.50 € | **95.00 €** | 9.6 % | **9.1 %** | 95.49 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 12x25 | 27.50 € | **27.00 €** | 10.0 % | **8.0 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 81.90 € | **81.50 €** | 25.5 % | **24.9 %** | 81.59 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC111X Pomalý hrnec 3,5 l | 87.90 € | **87.50 €** | 8.2 % | **7.8 %** | 87.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 112.90 € | **112.50 €** | 8.1 % | **7.7 %** | 112.79 € | cena podľa najlacnejšieho iného predajcu |
| Shifter Moza Racing HGP RS039 | 143.90 € | **143.50 €** | 7.2 % | **6.9 %** | 143.90 € | cena podľa najlacnejšieho iného predajcu |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.90 € | **11.50 €** | 10.5 % | **6.8 %** | 11.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 12.90 € | **12.50 €** | 18.5 % | **14.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Závaží na kotníky a zápěstí HMS OB06, 2 x 3 kg, černé | 18.90 € | **18.50 €** | 8.4 % | **6.1 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 30.90 € | **30.50 €** | 6.5 % | **5.1 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.70 € | **8.30 €** | 74.6 % | **66.6 %** | 8.32 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 54.90 € | **54.50 €** | 67.0 % | **65.8 %** | 54.69 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 21.90 € | **21.50 €** | 9.6 % | **7.6 %** | 21.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 22.90 € | **22.50 €** | 11.2 % | **9.3 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 19.90 € | **19.50 €** | 45.8 % | **42.8 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V275, 25 cm, 5 LED, 2 ... | 16.90 € | **16.50 €** | 44.5 % | **41.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočný LED svietnik s hviezdami Solight 1V265, 30 ... | 16.90 € | **16.50 €** | 44.5 % | **41.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Citrusovač, G2005100 SUCCOBELL | 24.90 € | **24.50 €** | 21.8 % | **19.8 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4561S | 21.90 € | **21.50 €** | 8.1 % | **6.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 31.90 € | **31.50 €** | 18.4 % | **16.9 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha GO Škoda Rally | 59.90 € | **59.50 €** | 12.3 % | **11.6 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 36.90 € | **36.50 €** | 17.7 % | **16.4 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Plus 575 Combo+dock white | 529.90 € | **529.50 €** | 10.0 % | **10.0 %** | 529.79 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU3941WBW | 358.90 € | **358.50 €** | 5.3 % | **5.2 %** | 358.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny COAX zdierka priama - typ Taliansko,... | 6.80 € | **6.50 €** | 99.6 % | **90.8 %** | 6.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 9W, 1260lm, 6000K,... | 4.00 € | **3.70 €** | 85.8 % | **71.9 %** | 3.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 5.80 € | **5.60 €** | 44.6 % | **39.7 %** | 5.64 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les s jeleňmi Solight 1V249,... | 3.60 € | **3.40 €** | 43.5 % | **35.5 %** | 3.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 3,8 W, 806lm, 270... | 4.80 € | **4.60 €** | 101.2 % | **92.8 %** | 4.68 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz do okna – Santa Solight 1V251, 12... | 2.70 € | **2.50 €** | 44.4 % | **33.7 %** | 2.59 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.20 € | **3.00 €** | 42.2 % | **33.3 %** | 3.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná hviezda na stenu Solight 1V261, 24 LED,... | 3.90 € | **3.70 €** | 41.6 % | **34.3 %** | 3.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.60 € | **5.40 €** | 34.7 % | **29.9 %** | 5.50 € | cena podľa najlacnejšieho iného predajcu |
| myPhone 3510 LTE černý | 62.00 € | **61.90 €** | 11.5 % | **11.3 %** | 61.91 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin L Steel | 29.00 € | **28.90 €** | 12.3 % | **11.9 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin M Steel | 24.00 € | **23.90 €** | 9.9 % | **9.5 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš KIS Chic Bin M Black | 24.00 € | **23.90 €** | 8.7 % | **8.3 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.00 € | **32.90 €** | 7.2 % | **6.9 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 36.00 € | **35.90 €** | 39.4 % | **39.0 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110CMP 2x GLAN, 8x LAN s P... | 38.00 € | **37.90 €** | 9.1 % | **8.8 %** | 37.99 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 23.00 € | **22.90 €** | 6.0 % | **5.5 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V236, 2 × AA | 7.90 € | **7.80 €** | 34.9 % | **33.2 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Defender Taška na notebook 15,6", Geek | 14.00 € | **13.90 €** | 7.7 % | **6.9 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Plynový sporák ISEASY MGBG-603S2R s 3 horákmi | 109.00 € | **108.90 €** | 22.6 % | **22.4 %** | 108.99 € | cena podľa najlacnejšieho iného predajcu |

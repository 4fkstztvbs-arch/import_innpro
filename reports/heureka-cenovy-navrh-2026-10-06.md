# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-06

Vstup: `premiumstore-sk_2026-10-06_08-32.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7488**
- Návrh **zvýšiť** cenu: **280** produktov
- Návrh **znížiť** cenu: **297** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6911** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **33**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **762**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (280)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Johansson 6700 Revolution programovatelný zesilovač | 265.50 € | **359.00 €** | 5.7 % | **43.0 %** | 359.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 316.00 € | **388.50 €** | 17.7 % | **44.7 %** | 388.89 € | cena podľa najlacnejšieho iného predajcu |
| Bežecký pás DeerRun X50 | 1000.90 € | **1071.90 €** | 15.0 % | **23.2 %** | 1072.00 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 318.00 € | **378.50 €** | 9.2 % | **30.0 %** | 378.59 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 24 GEN 3 GT2402 | 1192.90 € | **1248.50 €** | 15.0 % | **20.4 %** | 1248.70 € | cena podľa najlacnejšieho iného predajcu |
| Phone Video Cage Kit PGY ProShot iPhone 17 Pro Max | 137.50 € | **189.90 €** | 14.9 % | **58.7 %** | 189.95 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 342.00 € | **391.00 €** | 19.4 % | **36.5 %** | 391.19 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 200.50 € | **248.50 €** | 6.2 % | **31.7 %** | 248.89 € | cena podľa najlacnejšieho iného predajcu |
| Phone Video Cage Kit PGY ProShot iPhone 17 Pro | 146.00 € | **189.90 €** | 14.8 % | **49.4 %** | 189.95 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 244.90 € | **283.50 €** | 7.1 % | **24.0 %** | 283.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 255.00 € | **287.50 €** | 19.2 % | **34.4 %** | 287.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 692.50 € | **718.50 €** | 13.0 % | **17.2 %** | 718.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 238.00 € | **263.50 €** | 11.5 % | **23.4 %** | 263.89 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 162.50 € | **187.00 €** | 13.6 % | **30.7 %** | 187.19 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka a analyzátor batérií SkyRC MC5000 s rozhra... | 113.50 € | **138.00 €** | 15.2 % | **40.0 %** | 138.20 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu Uni-T UT533 | 192.00 € | **215.50 €** | 5.0 % | **17.9 %** | 215.59 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S160 na detekciu úniku | 99.90 € | **122.90 €** | 15.0 % | **41.5 %** | 122.95 € | cena podľa najlacnejšieho iného predajcu |
| Phone Cage PGY ProShot iPhone 17 Pro Max | 61.50 € | **82.90 €** | 14.8 % | **54.8 %** | 82.95 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 444.90 € | **466.00 €** | 5.0 % | **10.0 %** | 466.01 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 86.90 € | **106.50 €** | 21.6 % | **49.0 %** | 106.89 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 396.90 € | **415.50 €** | 5.2 % | **10.2 %** | 415.64 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 185.50 € | **203.00 €** | 6.6 % | **16.7 %** | 203.09 € | cena podľa najlacnejšieho iného predajcu |
| 4-kanálový teplomer Uni-T UT325F | 98.00 € | **115.50 €** | 7.9 % | **27.2 %** | 115.89 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 223.90 € | **238.90 €** | 40351.7 % | **43061.7 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 35.90 € | **50.00 €** | 15.3 % | **60.6 %** | 50.45 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 129.00 € | **143.00 €** | 7.7 % | **19.3 %** | 143.29 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 144.00 € | **157.50 €** | 8.1 % | **18.3 %** | 157.59 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 160.50 € | **173.90 €** | 8.4 % | **17.5 %** | 173.99 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 377.90 € | **391.00 €** | 5.1 % | **8.7 %** | 391.19 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.00 € | **139.00 €** | 16.5 % | **27.5 %** | 139.39 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 340.50 € | **352.00 €** | 20.3 % | **24.3 %** | 352.19 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 660.90 € | **671.90 €** | 119303.8 % | **121291.1 %** | 672.00 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 118.00 € | **129.00 €** | 31.1 % | **43.3 %** | 129.19 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 15.90 € | **26.50 €** | 10.2 % | **83.7 %** | 26.61 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 14.50 € | **25.00 €** | 12.8 % | **94.5 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 187.00 € | **197.50 €** | 11.1 % | **17.4 %** | 197.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **99.00 €** | 14.8 % | **26.9 %** | 99.09 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 89.50 € | **99.00 €** | 13.9 % | **26.0 %** | 99.09 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 101.50 € | **111.00 €** | 7.5 % | **17.6 %** | 111.29 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 101.50 € | **111.00 €** | 14.3 % | **25.0 %** | 111.29 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 290.00 € | **299.50 €** | 25.0 % | **29.1 %** | 299.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 268.90 € | **278.00 €** | 5.9 % | **9.5 %** | 278.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 63.90 € | **73.00 €** | 17.7 % | **34.5 %** | 73.49 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 83.00 € | **91.90 €** | 5.9 % | **17.2 %** | 91.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.00 € | **87.50 €** | 13.9 % | **26.2 %** | 87.79 € | cena podľa najlacnejšieho iného predajcu |
| PGYTECH Caplock MantisPod Power Tripod pre Gopro Hero | 55.50 € | **64.00 €** | 14.9 % | **32.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Napájadlo pre psy a mačky PetKit Eversweet 3 Pro | 82.90 € | **91.00 €** | 5.5 % | **15.8 %** | 91.26 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 151.90 € | **160.00 €** | 18.9 % | **25.2 %** | 160.49 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 315.50 € | **323.00 €** | 7.3 % | **9.9 %** | 323.29 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 83.50 € | **91.00 €** | 27.3 % | **38.7 %** | 91.29 € | cena podľa najlacnejšieho iného predajcu |
| Výcvikový obojok Rojeco PD511 | 29.50 € | **36.50 €** | 14.6 % | **41.8 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny statív PGYTECH MANTISPOD Z | 42.90 € | **49.50 €** | 15.4 % | **33.1 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 61.00 € | **67.50 €** | 8.2 % | **19.7 %** | 67.59 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 71.50 € | **78.00 €** | 5.3 % | **14.9 %** | 78.19 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 50.50 € | **57.00 €** | 5.7 % | **19.3 %** | 57.49 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10S | 336.90 € | **343.00 €** | 5.1 % | **7.0 %** | 343.09 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov PGYTECH ND-PL pre DJI Mavic Pro (P-43A-... | 28.90 € | **35.00 €** | 15.6 % | **40.0 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Acer Aspire Lite 15 (NX.DRPEC.001) | 528.90 € | **534.90 €** | 5.3 % | **6.5 %** | 535.00 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 86.00 € | **92.00 €** | 7.5 % | **15.0 %** | 92.19 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 130.00 € | **136.00 €** | 5.1 % | **9.9 %** | 136.19 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia Uni-T RCD UT582+ | 101.00 € | **107.00 €** | 10.9 % | **17.4 %** | 107.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 234.50 € | **240.50 €** | 6.9 % | **9.7 %** | 240.89 € | cena podľa najlacnejšieho iného predajcu |
| Výcvikový obojok Rojeco DOG800 (zelený) | 26.50 € | **32.50 €** | 15.1 % | **41.1 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Phone Photography Strap PGY LinkGo (Pink) | 24.00 € | **29.90 €** | 14.8 % | **43.1 %** | 29.95 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V100 | 21.90 € | **27.50 €** | 5.9 % | **33.0 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 38.50 € | **44.00 €** | 17.7 % | **34.5 %** | 44.29 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 54.00 € | **59.50 €** | 13.0 % | **24.5 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 76.00 € | **81.50 €** | 5.6 % | **13.2 %** | 81.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 87.50 € | **93.00 €** | 5.1 % | **11.7 %** | 93.39 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 392.50 € | **397.90 €** | 5.0 % | **6.5 %** | 398.00 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro PGYTECH pre akčné a športové kamery DJI OM 5 ... | 24.90 € | **29.90 €** | 14.9 % | **38.0 %** | 29.95 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.00 € | **38.00 €** | 7.2 % | **23.4 %** | 38.09 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 930.50 € | **935.50 €** | 18.3 % | **18.9 %** | 935.69 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 52.50 € | **57.50 €** | 5.4 % | **15.4 %** | 57.69 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 102.00 € | **107.00 €** | 10.8 % | **16.2 %** | 107.29 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 61.50 € | **66.50 €** | 14.7 % | **24.0 %** | 66.79 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 102.50 € | **107.50 €** | 6.5 % | **11.7 %** | 107.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 469.50 € | **474.50 €** | 8.5 % | **9.6 %** | 474.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 69.50 € | **74.50 €** | 5.7 % | **13.3 %** | 74.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 41.50 € | **46.50 €** | 5.8 % | **18.5 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 78.00 € | **82.90 €** | 34.0 % | **42.5 %** | 82.99 € | cena podľa najlacnejšieho iného predajcu |
| Prísavný držiak PGYTECH pre športové kamery (P-GM-223) | 35.00 € | **39.90 €** | 14.3 % | **30.3 %** | 39.95 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 26.00 € | **30.90 €** | 6.3 % | **26.4 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H125 (CZ101AE) | 11.90 € | **16.50 €** | 12.9 % | **56.5 %** | 16.68 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 161.50 € | **166.00 €** | 20.5 % | **23.8 %** | 166.09 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210G | 496.50 € | **501.00 €** | 5.0 % | **6.0 %** | 501.18 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový časovač WiFi Meross MRS100HK(E... | 23.00 € | **27.50 €** | 15.1 % | **37.6 %** | 27.69 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 26.00 € | **30.50 €** | 21.5 % | **42.5 %** | 30.79 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 294.00 € | **298.50 €** | 46.0 % | **48.2 %** | 298.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9286IB | 244.50 € | **248.90 €** | 5.7 % | **7.6 %** | 248.99 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 82.50 € | **86.90 €** | 33.1 % | **40.2 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (oranžová) | 42.50 € | **46.90 €** | 10.5 % | **22.0 %** | 46.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (čierna) | 42.50 € | **46.90 €** | 10.5 % | **22.0 %** | 46.99 € | cena podľa najlacnejšieho iného predajcu |
| Upevnenie príslušenstva PGYTECH Magic Arm (P-CG-009)... | 17.90 € | **22.00 €** | 14.8 % | **41.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony PGYTECH 55 cm (P-GM-101) | 12.90 € | **17.00 €** | 16.0 % | **52.9 %** | 17.32 € | cena podľa najlacnejšieho iného predajcu |
| Neewer TP-M200 200 cm statív | 136.00 € | **140.00 €** | 19.9 % | **23.5 %** | 140.08 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1283.50 € | **1287.50 €** | 7.2 % | **7.6 %** | 1287.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 16.00 € | **20.00 €** | 6.4 % | **33.0 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 155.50 € | **159.00 €** | 10.4 % | **12.9 %** | 159.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.00 € | **120.50 €** | 23680.5 % | **24391.9 %** | 120.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 135.00 € | **138.50 €** | 18.0 % | **21.1 %** | 138.89 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie PGYTECH MANTIS RC M1 pre digitáln... | 16.50 € | **20.00 €** | 15.6 % | **40.2 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 121.00 € | **124.00 €** | 5.3 % | **7.9 %** | 124.19 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 35.50 € | **38.50 €** | 5.0 % | **13.9 %** | 38.79 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 34.50 € | **37.50 €** | 11.3 % | **20.9 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 46.00 € | **49.00 €** | 7.8 % | **14.8 %** | 49.39 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 46.00 € | **49.00 €** | 7.8 % | **14.8 %** | 49.39 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.50 € | **38.50 €** | 17.2 % | **27.1 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| Statív Mini PGYTECH s nadstavcom pre vreckové / akčn... | 26.00 € | **29.00 €** | 15.1 % | **28.3 %** | 29.48 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 144.00 € | **147.00 €** | 52.2 % | **55.4 %** | 147.50 € | cena podľa najlacnejšieho iného predajcu |
| Montážna základňa PGYTECH Suction Cup | 11.00 € | **13.90 €** | 12.9 % | **42.7 %** | 13.98 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V283, 53 cm, ... | 33.00 € | **35.90 €** | 32.9 % | **44.6 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| Beko Mezikus PCSKM | 57.90 € | **60.50 €** | 7.6 % | **12.4 %** | 60.80 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA38F2K7NXBB | 135.90 € | **138.50 €** | 12.8 % | **14.9 %** | 138.89 € | cena podľa najlacnejšieho iného predajcu |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **38.00 €** | 7.3 % | **14.9 %** | 38.03 € | cena podľa najlacnejšieho iného predajcu |
| Solac New Optima Pro PV2114 | 29.50 € | **32.00 €** | 10.9 % | **20.3 %** | 32.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.00 € | **11.50 €** | 10.5 % | **41.2 %** | 11.59 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Ottocast CA525-T3 | 27.50 € | **30.00 €** | 23.3 % | **34.5 %** | 30.19 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT665P-5m endoskop | 42.50 € | **45.00 €** | 25.3 % | **32.7 %** | 45.19 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 109.00 € | **111.50 €** | 5.2 % | **7.7 %** | 111.69 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 112.50 € | **115.00 €** | 6.6 % | **8.9 %** | 115.29 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI FNB48P BT Tester USB portov s Bluetooth | 34.50 € | **37.00 €** | 6.6 % | **14.3 %** | 37.29 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 82.00 € | **84.50 €** | 8.5 % | **11.8 %** | 84.79 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 21.00 € | **23.50 €** | 16.9 % | **30.8 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 97.00 € | **99.50 €** | 5.1 % | **7.8 %** | 99.89 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 50.50 € | **53.00 €** | 5.5 % | **10.8 %** | 53.49 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC43SGMXC | 125.50 € | **127.90 €** | 13.1 % | **15.3 %** | 127.96 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 125.50 € | **127.90 €** | 13.1 % | **15.3 %** | 127.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 8.80 € | **11.00 €** | 6.0 % | **32.5 %** | 11.29 € | cena podľa najlacnejšieho iného predajcu |
| Matt for litter box Baymax / Baymax Lite Catlink CL-... | 24.90 € | **27.00 €** | 5.9 % | **14.8 %** | 27.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.20 € | **8.30 €** | 5.9 % | **41.8 %** | 8.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO217SV | 80.90 € | **83.00 €** | 10.4 % | **13.3 %** | 83.07 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor ONIKUMA L13 s mikrofónom | 26.50 € | **28.50 €** | 14.8 % | **23.5 %** | 28.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Perfect Steam Air Board S/M | 14.00 € | **16.00 €** | 6.3 % | **21.5 %** | 16.09 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3236 | 31.00 € | **33.00 €** | 6.1 % | **12.9 %** | 33.09 € | cena podľa najlacnejšieho iného predajcu |
| Držiak športovej kamery na riadidlá PGYTECH (P-GM-171) | 35.50 € | **37.50 €** | 15.7 % | **22.2 %** | 37.65 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 104.50 € | **106.50 €** | 29.5 % | **31.9 %** | 106.75 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE Mělký plech 222709/242132 | 15.00 € | **17.00 €** | 14.1 % | **29.3 %** | 17.29 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 177.50 € | **179.50 €** | 14.7 % | **16.0 %** | 179.79 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 46.00 € | **48.00 €** | 5.0 % | **9.6 %** | 48.39 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 79.50 € | **81.50 €** | 8.0 % | **10.8 %** | 81.89 € | cena podľa najlacnejšieho iného predajcu |
| Zacvakávacia doska PGYTECH Arcs-Swiss (P-CG-013) | 11.50 € | **13.50 €** | 13.3 % | **33.0 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.00 € | **31.90 €** | 7.8 % | **14.7 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.00 € | **24.90 €** | 11.7 % | **20.9 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPh 16 P FIXVM-1402-BK | 34.00 € | **35.50 €** | 10.1 % | **15.0 %** | 35.51 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO1022S | 167.50 € | **169.00 €** | 10.2 % | **11.2 %** | 169.04 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 35.00 € | **36.50 €** | 11.4 % | **16.2 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.00 € | **36.50 €** | 21.6 % | **26.8 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo BonePro černá | 68.00 € | **69.50 €** | 11.6 % | **14.1 %** | 69.58 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 40.00 € | **41.50 €** | 7.4 % | **11.4 %** | 41.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **6.30 €** | 6.6 % | **39.9 %** | 6.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.00 € | **71.50 €** | 13.0 % | **15.4 %** | 71.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný mini spínač ZigBee SONOFF ZBMINIR2 | 10.00 € | **11.50 €** | 5.9 % | **21.7 %** | 11.59 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 43.50 € | **45.00 €** | 12.6 % | **16.5 %** | 45.19 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.00 € | **133.50 €** | 15.6 % | **16.9 %** | 133.69 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 36.50 € | **38.00 €** | 6.2 % | **10.5 %** | 38.29 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 86.50 € | **88.00 €** | 14.6 % | **16.6 %** | 88.29 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42602S | 38.00 € | **39.50 €** | 5.4 % | **9.6 %** | 39.79 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 206.50 € | **208.00 €** | 10.2 % | **11.0 %** | 208.34 € | cena podľa najlacnejšieho iného predajcu |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 25.00 € | **26.50 €** | 5.8 % | **12.1 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Struhadlo 4 v 1 COMFORTLINE | 12.50 € | **14.00 €** | 15.2 % | **29.0 %** | 14.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 58.00 € | **59.50 €** | 33.8 % | **37.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 44.50 € | **46.00 €** | 5.8 % | **9.4 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA CD-S303 BLACK | 375.50 € | **377.00 €** | 5.5 % | **5.9 %** | 377.39 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TESLA SecureQ SC55 - venkovní WiFi smart kame... | 47.50 € | **49.00 €** | 5.1 % | **8.4 %** | 49.39 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 22.50 € | **24.00 €** | 6.1 % | **13.2 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 49.50 € | **50.50 €** | 23.9 % | **26.4 %** | 50.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **29.00 €** | 14.0 % | **18.1 %** | 29.06 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Havit E529BT (čierne) | 10.50 € | **11.50 €** | 20.7 % | **32.2 %** | 11.57 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 12.90 € | **13.90 €** | 5.5 % | **13.7 %** | 13.99 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 17.50 € | **18.50 €** | 7.5 % | **13.6 %** | 18.59 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 17.50 € | **18.50 €** | 7.5 % | **13.6 %** | 18.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.50 € | **25.50 €** | 14.8 % | **19.5 %** | 25.59 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 16e FIXPFIT2-1404-BK | 30.90 € | **31.90 €** | 11.1 % | **14.7 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Appl 16e FIXPFIT2-1404-BRW | 30.90 € | **31.90 €** | 11.1 % | **14.7 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU3941WBW | 357.90 € | **358.90 €** | 5.0 % | **5.3 %** | 359.00 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 84.00 € | **85.00 €** | 8.5 % | **9.7 %** | 85.19 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo vodní filtry 3+1 | 11.50 € | **12.50 €** | 8.8 % | **18.3 %** | 12.69 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3226  XXL toaster, 900 W | 19.00 € | **20.00 €** | 7.6 % | **13.3 %** | 20.19 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7285S-SET2 Sáčky pro vasavač DO72 | 14.50 € | **15.50 €** | 10.9 % | **18.5 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 17.50 € | **18.50 €** | 5.2 % | **11.2 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Linomatic 500 Easy 85286 | 96.50 € | **97.50 €** | 6.3 % | **7.4 %** | 97.79 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 32.50 € | **33.50 €** | 5.6 % | **8.8 %** | 33.79 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.50 € | **12.50 €** | 8.5 % | **17.9 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 608 | 25.50 € | **26.50 €** | 11.6 % | **16.0 %** | 26.80 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 39.00 € | **40.00 €** | 8.7 % | **11.5 %** | 40.30 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 23.50 € | **24.50 €** | 6.3 % | **10.8 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 180.50 € | **181.50 €** | 22.3 % | **23.0 %** | 181.89 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 107.00 € | **107.90 €** | 40.3 % | **41.5 %** | 107.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.00 € | **22.90 €** | 32.7 % | **38.1 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.00 € | **19.90 €** | 31.5 % | **37.7 %** | 19.97 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.30 € | **9.20 €** | 23.6 % | **37.0 %** | 9.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 2.80 € | **3.60 €** | 10.0 % | **41.4 %** | 3.69 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-M, 5 m, v... | 5.00 € | **5.70 €** | 23.9 % | **41.3 %** | 5.79 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 419.90 € | **420.50 €** | 12.1 % | **12.2 %** | 420.74 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C206 IP, 2MPx, WiFi, prísvit | 33.90 € | **34.50 €** | 5.5 % | **7.4 %** | 34.54 € | cena podľa najlacnejšieho iného predajcu |
| MAXXO VC 1800 | 23.90 € | **24.50 €** | 13.4 % | **16.2 %** | 24.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.90 € | **5.50 €** | 18.6 % | **33.1 %** | 5.59 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 12.90 € | **13.50 €** | 5.5 % | **10.4 %** | 13.69 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXLR500E | 14.90 € | **15.50 €** | 12.5 % | **17.0 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPhon 15 FIXMMY-1200-BK | 13.90 € | **14.50 €** | 13.1 % | **18.0 %** | 14.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.40 € | **10.00 €** | 17.9 % | **25.5 %** | 10.30 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300P FIXOP3-1609-BK | 11.90 € | **12.50 €** | 11.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro 145G/14T5G FIXOP3-1567-BK | 11.90 € | **12.50 €** | 11.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A26 5G FIXOP3-1501-BK | 11.90 € | **12.50 €** | 11.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17PM FIXFLM2-1603-RD | 19.50 € | **20.00 €** | 12.0 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-RD | 19.50 € | **20.00 €** | 12.0 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SGS26+ FIXFLM2-1705-PI | 19.50 € | **20.00 €** | 12.0 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-RD | 19.50 € | **20.00 €** | 12.0 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-PI | 19.50 € | **20.00 €** | 12.0 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 102.50 € | **103.00 €** | 5.3 % | **5.8 %** | 103.02 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 252.00 € | **252.50 €** | 14.3 % | **14.5 %** | 252.53 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 317.00 € | **317.50 €** | 19.0 % | **19.1 %** | 317.55 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 47.50 € | **48.00 €** | 11.5 % | **12.6 %** | 48.08 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 47.50 € | **48.00 €** | 13.7 % | **14.9 %** | 48.08 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 373.00 € | **373.50 €** | 16.9 % | **17.0 %** | 373.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.70 €** | 20.4 % | **32.0 %** | 5.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **21.00 €** | 20.5 % | **23.5 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **21.00 €** | 34.1 % | **37.4 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.50 € | **23.00 €** | 11.5 % | **14.0 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.00 € | **12.50 €** | 31.0 % | **36.4 %** | 12.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.00 € | **19.50 €** | 33.4 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| Měnič napětí GETI GPIU 1012S 12V/230V 1000W | 151.00 € | **151.50 €** | 5.1 % | **5.4 %** | 151.69 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 11.50 € | **12.00 €** | 7.3 % | **12.0 %** | 12.19 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 26.50 € | **27.00 €** | 5.8 % | **7.8 %** | 27.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.50 €** | 16.9 % | **18.6 %** | 33.69 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.00 € | **12.50 €** | 7.0 % | **11.4 %** | 12.69 € | cena podľa najlacnejšieho iného predajcu |
| Fixed MagMate FIXMM-BL | 17.00 € | **17.50 €** | 10.1 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 39.50 € | **40.00 €** | 5.4 % | **6.7 %** | 40.29 € | cena podľa najlacnejšieho iného predajcu |
| Svetelný merač UNI-T UT383 | 16.00 € | **16.50 €** | 7.8 % | **11.1 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 23.00 € | **23.50 €** | 8.5 % | **10.9 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 657.50 € | **658.00 €** | 5.8 % | **5.9 %** | 658.29 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 73.00 € | **73.50 €** | 9.1 % | **9.9 %** | 73.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 15.50 € | **16.00 €** | 18.9 % | **22.7 %** | 16.30 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi Redmi Buds 8 Active Black | 16.00 € | **16.50 €** | 6.6 % | **10.0 %** | 16.80 € | cena podľa najlacnejšieho iného predajcu |
| Ochranná puzzle podložka ONE FItness MP10 modro-šedá | 24.50 € | **25.00 €** | 6.5 % | **8.6 %** | 25.33 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 29.00 € | **29.50 €** | 7.3 % | **9.1 %** | 29.85 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Stěrka na okna s kartáčem a tel | 17.50 € | **18.00 €** | 6.9 % | **9.9 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 21.50 € | **22.00 €** | 7.6 % | **10.1 %** | 22.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 11.50 € | **12.00 €** | 29.1 % | **34.8 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim | 28.00 € | **28.50 €** | 6.2 % | **8.1 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 272.50 € | **273.00 €** | 7.0 % | **7.2 %** | 273.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 253.50 € | **254.00 €** | 5.9 % | **6.1 %** | 254.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.50 € | **18.00 €** | 24.6 % | **28.1 %** | 18.49 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.50 € | **52.00 €** | 5.7 % | **6.7 %** | 52.49 € | cena podľa najlacnejšieho iného predajcu |
| ELDONEX ECL-2010-BK Analogové hodiny | 11.50 € | **12.00 €** | 9.0 % | **13.7 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **4.10 €** | 15.7 % | **31.8 %** | 4.19 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 211.50 € | **211.90 €** | 36.5 % | **36.8 %** | 211.92 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17P FIXPUM-1602-TR | 15.50 € | **15.90 €** | 11.6 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Ratanová LED hviezda Solight 1V246, 40 cm, 40 LED, 2... | 3.30 € | **3.70 €** | 19.8 % | **34.3 %** | 3.79 € | cena podľa najlacnejšieho iného predajcu |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 19.50 € | **19.90 €** | 10.5 % | **12.7 %** | 19.91 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 51.50 € | **51.90 €** | 19.7 % | **20.6 %** | 51.91 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 318.50 € | **318.90 €** | 12.4 % | **12.6 %** | 318.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.80 € | **8.00 €** | 34.6 % | **38.1 %** | 8.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **2.20 €** | 23.2 % | **35.5 %** | 2.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.40 € | **5.60 €** | 40.3 % | **45.5 %** | 5.69 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 294.90 € | **295.00 €** | 12.8 % | **12.8 %** | 295.03 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 285.90 € | **286.00 €** | 15.9 % | **15.9 %** | 286.05 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 43.90 € | **44.00 €** | 15.6 % | **15.8 %** | 44.01 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 37.90 € | **38.00 €** | 18.7 % | **19.1 %** | 38.09 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C320WS 4MPx, venkovní, IP, FHD, ... | 44.90 € | **45.00 €** | 5.4 % | **5.7 %** | 45.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.00 €** | 5.5 % | **5.8 %** | 44.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 4000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.40 € | **2.50 €** | 44.5 % | **50.6 %** | 2.56 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.50 € | **3.60 €** | 55.5 % | **59.9 %** | 3.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.20 € | **4.30 €** | 50.4 % | **54.0 %** | 4.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.70 € | **4.80 €** | 29.1 % | **31.8 %** | 4.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.80 €** | 26.9 % | **31.6 %** | 2.89 € | cena podľa najlacnejšieho iného predajcu |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 10.90 € | **11.00 €** | 8.9 % | **9.9 %** | 11.19 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife ZJ153 Nákupná taška | 12.90 € | **13.00 €** | 15.6 % | **16.5 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.90 € | **11.00 €** | 24.8 % | **26.0 %** | 11.49 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V900 Gen2 | 96.90 € | **97.00 €** | 8.4 % | **8.5 %** | 97.02 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 236.90 € | **237.00 €** | 6.7 % | **6.7 %** | 237.05 € | cena podľa najlacnejšieho iného predajcu |
| Detektor drôtov UNI-T UT25CL | 140.90 € | **141.00 €** | 12.8 % | **12.9 %** | 141.19 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (297)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Krups Intuition Experience EA876D10 | 754.00 € | **660.50 €** | 20.0 % | **5.1 %** | 660.89 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 592.00 € | **526.00 €** | 21.2 % | **7.7 %** | 526.09 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Micro RGB MRE65R85H | 1286.00 € | **1227.90 €** | 10.0 % | **5.0 %** | 799.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux ENC8MC18S | 1264.90 € | **1207.50 €** | 10.0 % | **5.0 %** | 1032.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic DT 280 MK II 200/250 Ohm | 379.90 € | **334.90 €** | 90.8 % | **68.2 %** | 335.00 € | cena podľa najlacnejšieho iného predajcu |
| SAMSUNG RS57DG410EM9EO | 941.90 € | **898.90 €** | 10.0 % | **5.0 %** | 749.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP725-Wall WiFi 7 BE3600., 1x 2... | 185.50 € | **147.90 €** | 31.8 % | **5.1 %** | 76.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Luminiscenčná letová mapa DJI RoboMaster TT | 837.90 € | **801.00 €** | 15.0 % | **9.9 %** | 801.31 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 148.90 € | **121.90 €** | 41.2 % | **15.6 %** | 121.96 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón Freewell Genius Rig pre iPhone 17 ... | 146.90 € | **121.90 €** | 39.3 % | **15.6 %** | 121.96 € | cena podľa najlacnejšieho iného predajcu |
| Čistič okien PROSCENIC Win10pro | 168.90 € | **144.50 €** | 42.8 % | **22.2 %** | 144.63 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 851.00 € | **828.00 €** | 10.8 % | **7.8 %** | 828.09 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Nikon | 88.90 € | **67.90 €** | 46.8 % | **12.1 %** | 68.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 465.50 € | **445.50 €** | 14.1 % | **9.2 %** | 445.87 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagRound 3 držák s MgS FIXMRO3-BK | 41.50 € | **22.50 €** | 109.4 % | **13.5 %** | 22.79 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 10N3BX-S | 487.90 € | **469.00 €** | 14.4 % | **10.0 %** | 469.15 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 410.00 € | **392.50 €** | 14.9 % | **10.0 %** | 392.60 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 663.50 € | **646.00 €** | 12.0 % | **9.1 %** | 646.29 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 511.50 € | **495.50 €** | 8.5 % | **5.1 %** | 495.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko TB622ECWCS | 315.50 € | **300.00 €** | 15.5 % | **9.9 %** | 300.38 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Voyager Slim 45W FIXCT45-3C1A-WH | 39.50 € | **25.00 €** | 79.6 % | **13.7 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 628.00 € | **613.90 €** | 9.3 % | **6.8 %** | 613.99 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.50 € | **874.50 €** | 20.3 % | **18.4 %** | 874.86 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA6 NP3T3EHTB Candy Bake 600 | 272.50 € | **259.90 €** | 10.2 % | **5.1 %** | 239.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool AMW 6440 FB | 393.00 € | **380.50 €** | 8.6 % | **5.1 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo NIR Rapid Dry | 120.00 € | **108.00 €** | 32.9 % | **19.6 %** | 108.41 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 178.50 € | **167.00 €** | 17.0 % | **9.4 %** | 167.11 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 302.50 € | **292.90 €** | 8.6 % | **5.1 %** | 292.45 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux EW8F5412SAC | 684.00 € | **675.00 €** | 7.4 % | **6.0 %** | 675.20 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 1226 | 188.90 € | **180.00 €** | 10.2 % | **5.1 %** | 177.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy BR 26SSB6G-S | 340.50 € | **332.50 €** | 12.6 % | **10.0 %** | 332.51 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-60-230-1 230V AC bílý | 124.50 € | **116.50 €** | 12.5 % | **5.3 %** | 116.77 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-60-230-9 230V AC černý | 124.50 € | **116.50 €** | 12.5 % | **5.3 %** | 116.77 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-60-230 230V AC brouše... | 124.50 € | **116.50 €** | 12.5 % | **5.3 %** | 116.77 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN15Pro 4G FIXOP3-1645-BK | 20.00 € | **12.50 €** | 87.3 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15 4G FIXOP3-1643-BK | 20.00 € | **12.50 €** | 87.3 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 207.50 € | **200.00 €** | 12.4 % | **8.3 %** | 200.34 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 572.50 € | **565.00 €** | 9.4 % | **8.0 %** | 565.35 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 580.50 € | **573.00 €** | 7.6 % | **6.2 %** | 573.44 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 236.00 € | **228.90 €** | 11.0 % | **7.7 %** | 228.95 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 48SBL6G-S | 331.50 € | **324.50 €** | 12.3 % | **9.9 %** | 324.72 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BDIN38640D | 508.50 € | **501.90 €** | 6.4 % | **5.0 %** | 430.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje WG894A25 | 499.50 € | **493.00 €** | 10.0 % | **8.6 %** | 493.09 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 504.50 € | **498.00 €** | 8.9 % | **7.5 %** | 498.29 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 471.50 € | **465.00 €** | 13.6 % | **12.0 %** | 465.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prsteň COLMI R02, veľkosť 8,18,1 mm (či... | 34.00 € | **27.50 €** | 41.4 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Puzdro Freewell pre iPhone 16 Plus | 49.90 € | **43.50 €** | 28.5 % | **12.1 %** | 43.67 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 86 mm | 29.90 € | **23.50 €** | 41.1 % | **10.9 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 49G | 166.00 € | **160.00 €** | 11.4 % | **7.4 %** | 160.02 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Samsung G Tab FIXTOT-1649 | 20.50 € | **14.50 €** | 62.0 % | **14.6 %** | 14.55 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus Redmi A7 Pro4G FIXOP3-1716-BK | 18.50 € | **12.50 €** | 73.3 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDSN36540XP | 444.90 € | **439.00 €** | 12.0 % | **10.5 %** | 439.20 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Mini nabíječka 45W FIXCG45M-CA-WH | 18.50 € | **13.00 €** | 68.2 % | **18.2 %** | 13.20 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T68243WCSHBC | 435.50 € | **430.00 €** | 11.6 % | **10.2 %** | 430.26 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GECS5B70CLI | 430.50 € | **425.00 €** | 11.3 % | **9.9 %** | 425.35 € | cena podľa najlacnejšieho iného predajcu |
| Candy CH64CCB/4U2 | 117.90 € | **112.50 €** | 10.4 % | **5.3 %** | 112.67 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle XL s MgS FIXMC-XL-BK | 24.90 € | **19.50 €** | 44.9 % | **13.5 %** | 19.77 € | cena podľa najlacnejšieho iného predajcu |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 390.90 € | **385.50 €** | 7.0 % | **5.5 %** | 385.75 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás elektrický HMS LOOP10 | 332.00 € | **326.90 €** | 11.1 % | **9.4 %** | 326.96 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 210.50 € | **205.50 €** | 8.7 % | **6.1 %** | 205.63 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 323.00 € | **318.00 €** | 8.0 % | **6.3 %** | 318.19 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-1 mini 12V DC bílý | 95.50 € | **90.50 €** | 15.1 % | **9.1 %** | 90.70 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-9 mini 12V DC černý | 95.50 € | **90.50 €** | 15.1 % | **9.1 %** | 90.70 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 220A | 195.50 € | **190.50 €** | 8.8 % | **6.0 %** | 190.72 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 198.90 € | **194.00 €** | 8.9 % | **6.2 %** | 194.14 € | cena podľa najlacnejšieho iného predajcu |
| LG F4A10S7NWH | 353.90 € | **349.00 €** | 11.4 % | **9.9 %** | 349.36 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 367.50 € | **362.90 €** | 9.5 % | **8.1 %** | 362.97 € | cena podľa najlacnejšieho iného predajcu |
| Thomas Aqua + Pet & Family | 364.00 € | **359.50 €** | 6.4 % | **5.1 %** | 309.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANDY CDH30 | 90.50 € | **86.00 €** | 10.5 % | **5.0 %** | 86.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 19.00 € | **14.50 €** | 50.1 % | **14.6 %** | 14.55 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10W | 315.00 € | **310.50 €** | 8.0 % | **6.4 %** | 310.59 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 355.00 € | **350.50 €** | 11.3 % | **9.9 %** | 350.89 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 175.90 € | **171.90 €** | 7.5 % | **5.0 %** | 163.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY STRDH190 | 284.50 € | **280.50 €** | 6.5 % | **5.0 %** | 273.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Indesit TI5512EMTCS | 312.50 € | **308.50 €** | 11.4 % | **10.0 %** | 308.58 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 327.50 € | **323.50 €** | 7.3 % | **5.9 %** | 323.68 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 175.00 € | **171.00 €** | 12.5 % | **9.9 %** | 171.26 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17P FIXOP3-1602-BK | 16.50 € | **12.50 €** | 54.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor 400 FIXOP3-1552-BK | 16.50 € | **12.50 €** | 54.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SGA17 4G/5G FIXOP3-1700-BK | 16.50 € | **12.50 €** | 54.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 294.00 € | **290.00 €** | 14.4 % | **12.9 %** | 290.34 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 198.50 € | **194.50 €** | 9.0 % | **6.8 %** | 194.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Topic Tab LenIdeaTab11 FIXTOT-1677 | 18.90 € | **14.90 €** | 45.0 % | **14.3 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 295.50 € | **291.90 €** | 11.3 % | **10.0 %** | 291.95 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 325 | 251.50 € | **248.00 €** | 6.5 % | **5.0 %** | 239.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Garett ROSE Gold Mesh Steel | 67.50 € | **64.00 €** | 10.8 % | **5.1 %** | 55.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BL | 23.50 € | **20.00 €** | 35.0 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1705-BK | 23.50 € | **20.00 €** | 35.0 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.00 € | **324.50 €** | 7.7 % | **6.6 %** | 324.61 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.00 € | **151.50 €** | 8.5 % | **6.0 %** | 151.61 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF S61STPF-PM-O Matter EU vonkajšia zásuvka | 21.50 € | **18.00 €** | 27.9 % | **7.1 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 212.00 € | **208.50 €** | 7.7 % | **6.0 %** | 208.65 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 285.50 € | **282.00 €** | 7.7 % | **6.4 %** | 282.16 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 276.50 € | **273.00 €** | 11.3 % | **9.9 %** | 273.18 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2505.00 € | **2501.50 €** | 13.9 % | **13.8 %** | 2501.69 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 262.00 € | **258.50 €** | 7.3 % | **5.9 %** | 258.71 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E15 | 286.50 € | **283.00 €** | 7.4 % | **6.1 %** | 283.24 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 463.00 € | **459.50 €** | 6.8 % | **6.0 %** | 459.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight dezinfekčná bezozónová UV lampa 100W | 40.50 € | **37.00 €** | 28.9 % | **17.8 %** | 37.38 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 125.50 € | **122.00 €** | 11.1 % | **8.0 %** | 122.41 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy PILOT S5 GPS + WIFI | 73.90 € | **70.50 €** | 10.6 % | **5.5 %** | 63.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMICA DI 6412 CB | 267.90 € | **264.50 €** | 6.4 % | **5.1 %** | 261.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 91 | 190.00 € | **186.90 €** | 8.8 % | **7.0 %** | 186.99 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-BK | 23.00 € | **20.00 €** | 32.1 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool W7F HP33 A | 327.50 € | **324.50 €** | 8.0 % | **7.0 %** | 324.60 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF ZBMINIR2-E Zigbee 1-kanálový spínač na nulovú... | 20.50 € | **17.50 €** | 24.1 % | **5.9 %** | 17.63 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 361.50 € | **358.50 €** | 6.9 % | **6.0 %** | 358.64 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 202.00 € | **199.00 €** | 11.6 % | **10.0 %** | 199.24 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-RD | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BK | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BRW | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BL | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-RD | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BRW | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26 FIXOP3-1704-BK | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SG S26 Ultr FIXOP3-1706-BK | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BK | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SD S26 FE FIXOP3-1707-BK | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro POCO F7 FIXOP3-1533-BK | 15.50 € | **12.50 €** | 45.2 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 243.00 € | **240.00 €** | 7.6 % | **6.2 %** | 240.36 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Autonabíječka 65W FIXCC65-CC-BK | 18.90 € | **16.00 €** | 32.0 % | **11.8 %** | 16.47 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook 13Wr Flex (UMM220V30) | 206.50 € | **203.90 €** | 6.5 % | **5.1 %** | 191.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termostatický radiátorový ventil SONOFF TRV Gen2 ZigBee | 34.00 € | **31.50 €** | 14.6 % | **6.1 %** | 30.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo VM Master | 230.00 € | **227.50 €** | 9.1 % | **7.9 %** | 227.51 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT86325VI | 198.00 € | **195.50 €** | 8.0 % | **6.6 %** | 195.66 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 180.00 € | **177.50 €** | 9.3 % | **7.8 %** | 177.69 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPho 16P FIXMMY-1402-BK | 17.00 € | **14.50 €** | 38.3 % | **18.0 %** | 14.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17PM FIXOP3-1603-BK | 15.00 € | **12.50 €** | 40.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo V50 L FIXOP3-1580-BK | 15.00 € | **12.50 €** | 40.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300 FIXOP3-1642-BK | 15.00 € | **12.50 €** | 40.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG S24 FE FIXOP3-1391-BK | 15.00 € | **12.50 €** | 40.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A17 FIXOP3-1700-BL | 15.00 € | **12.50 €** | 40.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14 P4G FIXOP3-1542-BK | 15.00 € | **12.50 €** | 40.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15P+ 5G FIXOP3-1647-BK | 15.00 € | **12.50 €** | 40.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14P+5G FIXOP3-1433-BK | 15.00 € | **12.50 €** | 40.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| G3ferrari G1018100 Horkovzdušná fritéza | 171.00 € | **168.50 €** | 7.4 % | **5.9 %** | 168.84 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdr SG A16 4G/5G FIXOP3-1500-BK | 15.00 € | **12.50 €** | 40.2 % | **16.8 %** | 12.84 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 190.00 € | **187.50 €** | 15.4 % | **13.9 %** | 187.85 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 190.00 € | **187.50 €** | 15.4 % | **13.9 %** | 187.85 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle držák s MgS FIXMC-V-BK | 18.50 € | **16.00 €** | 29.2 % | **11.8 %** | 16.47 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1440.90 € | **1438.50 €** | 7.2 % | **7.0 %** | 1438.86 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 61.90 € | **59.50 €** | 24.7 % | **19.9 %** | 59.77 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 31.1 % | **6.0 %** | 9.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hračka/laser pre zvieratá Rojeco | 19.00 € | **16.90 €** | 40.8 % | **25.2 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 171.00 € | **168.90 €** | 8.0 % | **6.6 %** | 168.92 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 196.50 € | **194.50 €** | 17.5 % | **16.3 %** | 194.57 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 156.50 € | **154.50 €** | 7.5 % | **6.1 %** | 154.69 € | cena podľa najlacnejšieho iného predajcu |
| Catlink Fresh smart odor absorber | 35.00 € | **33.00 €** | 13.4 % | **6.9 %** | 33.20 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 163.00 € | **161.00 €** | 7.5 % | **6.1 %** | 161.22 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 165.50 € | **163.50 €** | 7.5 % | **6.2 %** | 163.74 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 FIXBLM-1600-BP | 19.50 € | **17.50 €** | 26.3 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 19.50 € | **17.50 €** | 26.3 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 15 FIXBLM-1200-BP | 19.50 € | **17.50 €** | 26.3 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P206RAF200 | 29.50 € | **27.50 €** | 18.3 % | **10.3 %** | 27.79 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 161.00 € | **159.00 €** | 7.4 % | **6.1 %** | 159.29 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus XiaRed 17 4G, FIXOP3-1728-BK | 14.50 € | **12.50 €** | 35.8 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BC261 | 31.50 € | **29.50 €** | 14.4 % | **7.2 %** | 29.83 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 129.00 € | **127.00 €** | 9.8 % | **8.0 %** | 127.45 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Sams GTA11/A9 FIXTOT-1650 | 18.90 € | **17.00 €** | 26.9 % | **14.1 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 318.90 € | **317.00 €** | 6.6 % | **5.9 %** | 317.46 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF SNZB-06P24 – snímač prítomnosti s technológio... | 23.50 € | **21.90 €** | 14.6 % | **6.8 %** | 21.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED Pouzdro SGTabA11 FIXRTC-1650-BK | 34.50 € | **32.90 €** | 20.4 % | **14.8 %** | 32.96 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 4631 | 134.50 € | **132.90 €** | 8.4 % | **7.2 %** | 132.94 € | cena podľa najlacnejšieho iného predajcu |
| Graef WA 80 | 100.50 € | **98.90 €** | 10.1 % | **8.4 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 119.50 € | **117.90 €** | 12.9 % | **11.4 %** | 118.00 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 129.00 € | **127.50 €** | 14.1 % | **12.8 %** | 127.54 € | cena podľa najlacnejšieho iného predajcu |
| Beper Bt602-H Vaflovač 780W | 24.00 € | **22.50 €** | 17.9 % | **10.5 %** | 22.54 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 132.50 € | **131.00 €** | 9.8 % | **8.5 %** | 131.07 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 44.00 € | **42.50 €** | 13.7 % | **9.8 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EQ700 | 25.00 € | **23.50 €** | 15.0 % | **8.1 %** | 23.60 € | cena podľa najlacnejšieho iného predajcu |
| Tvrzené sklo FIXED Full-Cover s aplikáto | 13.00 € | **11.50 €** | 32.3 % | **17.0 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 13.00 € | **11.50 €** | 32.3 % | **17.0 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 13.00 € | **11.50 €** | 32.3 % | **17.0 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A57 5G FIXGFADA-1703-BK | 13.00 € | **11.50 €** | 32.3 % | **17.0 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 13.00 € | **11.50 €** | 32.3 % | **17.0 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1019.00 € | **1017.50 €** | 10.6 % | **10.4 %** | 1017.82 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA20FMW7NG Candy Wave 600 | 136.90 € | **135.50 €** | 10.3 % | **9.2 %** | 135.60 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMK38HU0B | 228.90 € | **227.50 €** | 8.0 % | **7.4 %** | 227.80 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P204FER250 | 21.90 € | **20.50 €** | 16.1 % | **8.7 %** | 20.88 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 49B8G-S | 318.90 € | **317.50 €** | 10.4 % | **9.9 %** | 317.72 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 95.00 € | **93.90 €** | 11.2 % | **9.9 %** | 93.95 € | cena podľa najlacnejšieho iného predajcu |
| Laica LAI KJ2000W | 85.00 € | **83.90 €** | 18.4 % | **16.9 %** | 83.96 € | cena podľa najlacnejšieho iného predajcu |
| Posilovací válec na přicho HMS KA40 s automatickým n... | 37.90 € | **36.90 €** | 8.6 % | **5.8 %** | 33.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed kryt Apple iPho 17 FIXFLM2-1600-BK | 21.00 € | **20.00 €** | 20.7 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 21.00 € | **20.00 €** | 20.7 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **43.00 €** | 49.4 % | **46.0 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/ 80 Ohm | 380.90 € | **379.90 €** | 25.5 % | **25.2 %** | 380.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 310.90 € | **309.90 €** | 25.5 % | **25.1 %** | 310.00 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 40 | 252.50 € | **251.50 €** | 11.6 % | **11.2 %** | 251.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 36.00 € | **35.00 €** | 49.9 % | **45.8 %** | 35.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.00 € | **48.00 €** | 37.2 % | **34.4 %** | 48.13 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 859.00 € | **858.00 €** | 13.3 % | **13.1 %** | 858.21 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 15.50 € | **14.50 €** | 26.1 % | **18.0 %** | 14.75 € | cena podľa najlacnejšieho iného predajcu |
| BEKO HII64500UFT | 360.00 € | **359.00 €** | 7.1 % | **6.8 %** | 359.25 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-RCO9003028 | 12.50 € | **11.50 €** | 33.0 % | **22.4 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Polia, ... | 34.00 € | **33.00 €** | 37.6 % | **33.5 %** | 33.31 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 95 mm | 24.50 € | **23.50 €** | 15.6 % | **10.9 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCool 2,MagSafe FIXMCO2-BK | 31.00 € | **30.00 €** | 17.3 % | **13.5 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **11.50 €** | 43.1 % | **31.7 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Krbový ventilátor Kaminer 26206 5-lopatkový | 33.50 € | **32.50 €** | 28.3 % | **24.5 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Mlýnek na kávu Ruhhy 26219 | 14.00 € | **13.00 €** | 31.9 % | **22.5 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell ND32/Black Mist 1/4 do Real Locking VND | 79.90 € | **79.00 €** | 149.8 % | **147.0 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BMGB25332BG | 176.90 € | **176.00 €** | 8.7 % | **8.1 %** | 176.30 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell série V2 VND/CPL II 3-7 s... | 148.90 € | **148.00 €** | 28.2 % | **27.4 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-50245 | 12.90 € | **12.00 €** | 18.4 % | **10.1 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Korková podložka na jógu HMS YM11 | 29.90 € | **29.00 €** | 8.5 % | **5.3 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.90 € | **25.00 €** | 54.3 % | **48.9 %** | 25.30 € | cena podľa najlacnejšieho iného predajcu |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 49.90 € | **49.00 €** | 12.1 % | **10.1 %** | 49.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO „Bright Day“ – 4... | 49.90 € | **49.00 €** | 28.6 % | **26.3 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 s 17 mm uchytením | 49.90 € | **49.00 €** | 28.6 % | **26.3 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Quartett 20 | 12.50 € | **11.90 €** | 12.8 % | **7.4 %** | 9.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed kryt Apple iPho 17 FIXPUM-1600-TR | 16.50 € | **15.90 €** | 18.8 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| JBL CHARGEES3 | 108.50 € | **107.90 €** | 5.6 % | **5.0 %** | 107.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Set of 6 filters Freewell for DJI Action 4 | 99.50 € | **98.90 €** | 51.5 % | **50.5 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na jógu HMS YM10 fialová | 22.50 € | **22.00 €** | 7.6 % | **5.2 %** | 18.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Podložka na jógu HMS YM10 mentolová | 22.50 € | **22.00 €** | 7.6 % | **5.2 %** | 18.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Podložka na jógu HMS YM10 světle růžová | 22.50 € | **22.00 €** | 7.6 % | **5.2 %** | 18.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Podložka na jógu HMS YM10 šedá | 22.50 € | **22.00 €** | 7.6 % | **5.2 %** | 18.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Podložka na jógu HMS YM10 tmavě modrá | 22.50 € | **22.00 €** | 7.6 % | **5.2 %** | 18.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beper BEP-C102COC101 | 11.00 € | **10.50 €** | 20.4 % | **14.9 %** | 10.54 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 45.50 € | **45.00 €** | 38.4 % | **36.9 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 477.50 € | **477.00 €** | 7.0 % | **6.8 %** | 477.07 € | cena podľa najlacnejšieho iného predajcu |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 136.00 € | **135.50 €** | 13.4 % | **13.0 %** | 135.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **46.50 €** | 35.9 % | **34.4 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 53.50 € | **53.00 €** | 30.6 % | **29.4 %** | 53.14 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 160 Sol | 50.00 € | **49.50 €** | 86.4 % | **84.5 %** | 49.67 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 79.50 € | **79.00 €** | 24.0 % | **23.3 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 79.50 € | **79.00 €** | 24.0 % | **23.3 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 28.50 € | **28.00 €** | 11.1 % | **9.1 %** | 28.22 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 72.50 € | **72.00 €** | 19.9 % | **19.0 %** | 72.24 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 18.00 € | **17.50 €** | 16.6 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 12.50 € | **12.00 €** | 37.3 % | **31.8 %** | 12.27 € | cena podľa najlacnejšieho iného predajcu |
| Samolepiace hodiny G21 Metallic Style | 12.00 € | **11.50 €** | 13.0 % | **8.3 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 31.50 € | **31.00 €** | 32.4 % | **30.3 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu |
| Ručný multimeter do auta UNI-T UT107 | 28.00 € | **27.50 €** | 14.3 % | **12.2 %** | 27.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 51.00 € | **50.50 €** | 9.2 % | **8.1 %** | 50.79 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti UNI-T UT333S | 23.50 € | **23.00 €** | 10.7 % | **8.3 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 449TI | 17.50 € | **17.00 €** | 13.2 % | **10.0 %** | 17.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 45.50 € | **45.00 €** | 8.6 % | **7.4 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 60.50 € | **60.00 €** | 10.5 % | **9.5 %** | 60.29 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Adria B-4780 bílá | 26.00 € | **25.50 €** | 10.3 % | **8.1 %** | 25.79 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Bluetooth KRUGER & MATZ KM0566  STREET X... | 38.50 € | **38.00 €** | 12.2 % | **10.8 %** | 38.29 € | cena podľa najlacnejšieho iného predajcu |
| Cabletech UCH0023A1 | 12.00 € | **11.50 €** | 13.6 % | **8.8 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 77.00 € | **76.50 €** | 18.6 % | **17.8 %** | 76.79 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 30.00 € | **29.50 €** | 8.3 % | **6.5 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine MA10410 | 76.00 € | **75.50 €** | 8.6 % | **7.9 %** | 75.79 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice WS 9050 | 64.50 € | **64.00 €** | 6.9 % | **6.1 %** | 64.29 € | cena podľa najlacnejšieho iného predajcu |
| Hama 182617 bezdr.Multi Device MW-650 | 13.50 € | **13.00 €** | 10.8 % | **6.7 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 57.50 € | **57.00 €** | 16.1 % | **15.0 %** | 57.29 € | cena podľa najlacnejšieho iného predajcu |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 70.50 € | **70.00 €** | 7.9 % | **7.1 %** | 70.29 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.50 € | **85.00 €** | 16.4 % | **15.8 %** | 85.29 € | cena podľa najlacnejšieho iného predajcu |
| AMIKO Mini HD265 | 48.50 € | **48.00 €** | 12.4 % | **11.2 %** | 48.29 € | cena podľa najlacnejšieho iného predajcu |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 17.00 € | **16.50 €** | 18.0 % | **14.6 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač Evercon AH-707 | 53.50 € | **53.00 €** | 18.3 % | **17.2 %** | 53.29 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 26.00 € | **25.50 €** | 14.8 % | **12.5 %** | 25.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 13.00 € | **12.50 €** | 21.8 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 13.00 € | **12.50 €** | 21.8 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15C FIXOP3-1576-BK | 13.00 € | **12.50 €** | 21.8 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s rádiom a budíkom | 21.50 € | **21.00 €** | 47.5 % | **44.1 %** | 21.33 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 43.00 € | **42.50 €** | 40.2 % | **38.6 %** | 42.85 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.00 € | **126.50 €** | 10.7 % | **10.3 %** | 126.85 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 318.50 € | **318.00 €** | 19.3 % | **19.1 %** | 318.35 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 27.50 € | **27.00 €** | 14.4 % | **12.3 %** | 27.40 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.50 € | **78.00 €** | 9.4 % | **8.7 %** | 78.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.50 € | **10.00 €** | 35.3 % | **28.8 %** | 10.46 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 41.50 € | **41.00 €** | 8.7 % | **7.4 %** | 41.49 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 51.50 € | **51.00 €** | 6.3 % | **5.3 %** | 51.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC S100neo AC/DC | 50.50 € | **50.00 €** | 34.3 % | **33.0 %** | 50.49 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.90 € | **65.50 €** | 17.2 % | **16.5 %** | 65.69 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 195.90 € | **195.50 €** | 8.9 % | **8.7 %** | 195.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.90 € | **11.50 €** | 38.0 % | **33.4 %** | 11.62 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer Nutri Mini | 48.90 € | **48.50 €** | 14.9 % | **14.0 %** | 48.58 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 25.90 € | **25.50 €** | 19.5 % | **17.7 %** | 25.69 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine WS 9251 | 52.90 € | **52.50 €** | 7.3 % | **6.4 %** | 52.69 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 41.90 € | **41.50 €** | 14.2 % | **13.1 %** | 41.80 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 338.90 € | **338.50 €** | 7.0 % | **6.8 %** | 338.70 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.90 € | **369.50 €** | 7.1 % | **7.0 %** | 369.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.30 € | **7.10 €** | 45.5 % | **41.5 %** | 7.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.90 € | **4.70 €** | 16.1 % | **11.4 %** | 4.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.50 € | **9.30 €** | 28.3 % | **25.6 %** | 9.38 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 54.00 € | **53.90 €** | 5.7 % | **5.5 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **19.90 €** | 44.9 % | **44.2 %** | 19.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 17.00 € | **16.90 €** | 35.0 % | **34.2 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 18.00 € | **17.90 €** | 23.4 % | **22.7 %** | 17.97 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Motion D1, ovladač s klávesnicí | 33.00 € | **32.90 €** | 6.3 % | **5.9 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110P 2x LAN s PoE, 8x LAN ... | 29.00 € | **28.90 €** | 12.2 % | **11.8 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight senzor pre meteostanice TE110 | 5.40 € | **5.30 €** | 38.5 % | **35.9 %** | 5.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.40 € | **4.30 €** | 13.9 % | **11.3 %** | 4.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.30 € | **4.20 €** | 44.5 % | **41.1 %** | 4.30 € | cena podľa najlacnejšieho iného predajcu |

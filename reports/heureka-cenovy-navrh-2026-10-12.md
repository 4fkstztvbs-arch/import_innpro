# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-12

Vstup: `premiumstore-sk_2026-10-12_08-10.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7494**
- Návrh **zvýšiť** cenu: **182** produktov
- Návrh **znížiť** cenu: **140** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **7172** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **12**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **750**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (182)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINI-PC Minis Forum UM890 Pro Ryzen 9 8945HS barebone | 872.00 € | **1156.90 €** | 58.8 % | **110.7 %** | 1157.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 858.50 € | **1136.90 €** | 13.2 % | **49.9 %** | 1137.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 750.50 € | **1016.90 €** | 7.2 % | **45.2 %** | 1017.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer WING Digitálny Mixpult | 2649.00 € | **2836.50 €** | 15.0 % | **23.1 %** | 2836.60 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 480.00 € | **638.90 €** | 9.0 % | **45.1 %** | 639.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LONGER LK10 Plus | 367.50 € | **500.00 €** | 15.1 % | **56.5 %** | 500.20 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 427.00 € | **541.90 €** | 15.0 % | **45.9 %** | 541.95 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 298.50 € | **393.90 €** | 9.3 % | **44.2 %** | 393.92 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 953.50 € | **1046.50 €** | 11.5 % | **22.3 %** | 1046.83 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RFSA240M43WN | 306.00 € | **398.90 €** | 9.4 % | **42.7 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 367.00 € | **456.90 €** | 9.3 % | **36.1 %** | 456.91 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 756.00 € | **835.00 €** | 11.2 % | **22.8 %** | 835.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1063.00 € | **1135.90 €** | 7.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 462.50 € | **530.00 €** | 7.6 % | **23.3 %** | 530.38 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 635.00 € | **694.50 €** | 5.1 % | **15.0 %** | 694.69 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 831.00 € | **889.90 €** | 10.7 % | **18.5 %** | 890.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 396.00 € | **453.00 €** | 7.3 % | **22.8 %** | 453.04 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 853.90 € | **902.50 €** | 8.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje WG894A25 | 455.00 € | **503.00 €** | 8.6 % | **20.0 %** | 503.24 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 774.00 € | **819.90 €** | 8.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 324.00 € | **367.00 €** | 11.7 % | **26.5 %** | 367.04 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-A2-9955 AMD Ryzen 9 9955HX ba... | 960.90 € | **1001.00 €** | 10.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický skúter NAVEE V45i | 310.90 € | **350.50 €** | 9.5 % | **23.5 %** | 350.79 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 498.00 € | **537.50 €** | 7.5 % | **16.0 %** | 537.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1292.50 € | **1329.90 €** | 10.1 % | **13.3 %** | 1330.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 675.00 € | **711.50 €** | 6.0 % | **11.7 %** | 711.70 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 383.50 € | **419.50 €** | 7.5 % | **17.5 %** | 419.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 333.00 € | **366.00 €** | 8.6 % | **19.4 %** | 366.13 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 588.00 € | **620.00 €** | 20.4 % | **26.9 %** | 620.04 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 349.90 € | **378.90 €** | 9.7 % | **18.8 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 411.50 € | **438.90 €** | 7.7 % | **14.8 %** | 439.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 260.50 € | **286.50 €** | 5.0 % | **15.5 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRM819E61X | 517.50 € | **540.50 €** | 10.1 % | **15.0 %** | 540.56 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 573.00 € | **595.50 €** | 6.2 % | **10.4 %** | 595.88 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 566.50 € | **588.00 €** | 24.6 % | **29.4 %** | 588.02 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 292.50 € | **312.50 €** | 10.4 % | **18.0 %** | 312.61 € | cena podľa najlacnejšieho iného predajcu |
| Beko Beyond B5RMFNE314X | 438.00 € | **458.00 €** | 9.9 % | **14.9 %** | 458.29 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 472.00 € | **492.00 €** | 11.3 % | **16.0 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 329.00 € | **348.90 €** | 8.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Laserový gravír XTOOL M2 20 W | 1124.50 € | **1143.50 €** | 15.0 % | **17.0 %** | 1143.90 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 10N3BX-S | 469.00 € | **487.90 €** | 10.0 % | **14.4 %** | 488.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210G | 451.00 € | **468.50 €** | 5.9 % | **10.0 %** | 468.67 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 204.90 € | **221.90 €** | 18.4 % | **28.2 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 216.00 € | **233.00 €** | 14.3 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 216.00 € | **233.00 €** | 14.3 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 213.00 € | **230.00 €** | 14.2 % | **23.3 %** | 230.50 € | cena podľa najlacnejšieho iného predajcu |
| Behringer P16 HQ 16-kanálový osobný monitorovací mix... | 171.00 € | **187.00 €** | 15.0 % | **25.8 %** | 187.33 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 455.00 € | **471.00 €** | 7.4 % | **11.2 %** | 471.47 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 359.50 € | **375.00 €** | 15.0 % | **20.0 %** | 375.15 € | cena podľa najlacnejšieho iného predajcu |
| Fotoaparát SJCAM ZV100 (čierny) | 83.50 € | **98.90 €** | 15.1 % | **36.3 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 284.00 € | **298.50 €** | 8.5 % | **14.0 %** | 298.80 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 903.50 € | **917.50 €** | 17.7 % | **19.5 %** | 917.54 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 127.00 € | **141.00 €** | 8.0 % | **20.0 %** | 141.14 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 290.00 € | **303.50 €** | 9.9 % | **15.0 %** | 303.56 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 331.50 € | **344.50 €** | 7.6 % | **11.8 %** | 344.81 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 276.50 € | **289.00 €** | 9.9 % | **14.9 %** | 289.21 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 258.50 € | **270.50 €** | 5.9 % | **10.8 %** | 270.89 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER LED pásik – neónový RGB | 67.50 € | **79.50 €** | 15.4 % | **35.9 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 565.00 € | **577.00 €** | 8.0 % | **10.3 %** | 577.40 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu Ruhhy 26050 | 89.00 € | **100.90 €** | 31.8 % | **49.4 %** | 100.99 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 445.50 € | **457.00 €** | 12.0 % | **14.9 %** | 457.39 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 363.50 € | **374.90 €** | 8.3 % | **11.7 %** | 374.95 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 250.50 € | **261.50 €** | 23.8 % | **29.2 %** | 261.65 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 250.50 € | **261.50 €** | 15.0 % | **20.1 %** | 261.65 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.00 € | **898.90 €** | 20.2 % | **21.7 %** | 898.99 € | cena podľa najlacnejšieho iného predajcu |
| LG F4A10S7NWH | 324.50 € | **335.00 €** | 9.9 % | **13.5 %** | 335.20 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 332.50 € | **343.00 €** | 10.0 % | **13.5 %** | 343.49 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 194.00 € | **204.00 €** | 6.2 % | **11.6 %** | 204.14 € | cena podľa najlacnejšieho iného predajcu |
| BenQ brašna k projektorům MX711/710/660/ | 36.00 € | **46.00 €** | 14.3 % | **46.0 %** | 46.16 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj LaserPecker LP2 Plus | 990.00 € | **1000.00 €** | 20.3 % | **21.5 %** | 1000.40 € | cena podľa najlacnejšieho iného predajcu |
| City Boss RS350 černá | 319.90 € | **329.00 €** | 8.0 % | **11.0 %** | 329.48 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 957.90 € | **966.90 €** | 15.4 % | **16.5 %** | 966.92 € | cena podľa najlacnejšieho iného predajcu |
| Filter nádoby na dym LaserPecker Air Purifier | 85.50 € | **94.50 €** | 15.1 % | **27.2 %** | 94.81 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 290.00 € | **298.90 €** | 12.9 % | **16.3 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 205.50 € | **214.00 €** | 6.1 % | **10.5 %** | 214.01 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 174.50 € | **183.00 €** | 14.4 % | **19.9 %** | 183.23 € | cena podľa najlacnejšieho iného predajcu |
| Držiak batérie SJCAM pre model C300 | 36.00 € | **44.50 €** | 14.7 % | **41.8 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 763.90 € | **772.00 €** | 39.1 % | **40.6 %** | 772.45 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 102.00 € | **110.00 €** | 13.5 % | **22.4 %** | 110.08 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 258.00 € | **266.00 €** | 21.5 % | **25.2 %** | 266.21 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 127.50 € | **135.50 €** | 12.8 % | **19.9 %** | 135.72 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TB | 295.50 € | **303.50 €** | 8.6 % | **11.5 %** | 303.80 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 445.50 € | **453.50 €** | 9.2 % | **11.2 %** | 453.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 231.00 € | **238.90 €** | 12.7 % | **16.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 306.00 € | **313.50 €** | 20.5 % | **23.5 %** | 313.65 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 165.50 € | **173.00 €** | 9.8 % | **14.8 %** | 173.26 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 159.00 € | **166.50 €** | 6.1 % | **11.1 %** | 166.90 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 232.00 € | **238.90 €** | 17.4 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 321.00 € | **327.50 €** | 9.8 % | **12.0 %** | 327.89 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 177.50 € | **183.90 €** | 7.8 % | **11.7 %** | 184.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 200.00 € | **206.00 €** | 8.3 % | **11.6 %** | 206.31 € | cena podľa najlacnejšieho iného predajcu |
| Braun IS5247.VI | 183.00 € | **189.00 €** | 7.9 % | **11.5 %** | 189.43 € | cena podľa najlacnejšieho iného predajcu |
| Sušič vlasov MOVA Flip 10 | 176.00 € | **182.00 €** | 5.0 % | **8.6 %** | 182.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 30.00 € | **35.90 €** | 35.3 % | **61.9 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 186.00 € | **191.50 €** | 13.0 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 186.00 € | **191.50 €** | 13.0 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 189.00 € | **194.00 €** | 13.0 % | **16.0 %** | 194.07 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 173.00 € | **178.00 €** | 5.7 % | **8.8 %** | 178.20 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 220A | 190.50 € | **195.50 €** | 6.0 % | **8.8 %** | 195.70 € | cena podľa najlacnejšieho iného predajcu |
| Subwoofer Edifier Airpulse SW8 (čierny) | 322.00 € | **327.00 €** | 9.4 % | **11.0 %** | 327.31 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 474.00 € | **478.90 €** | 7.8 % | **8.9 %** | 479.00 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10W | 297.00 € | **301.50 €** | 6.4 % | **8.0 %** | 301.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338DD | 521.00 € | **525.50 €** | 6.1 % | **7.0 %** | 525.64 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 231.50 € | **236.00 €** | 8.9 % | **11.0 %** | 236.38 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EHF6547FXK | 214.00 € | **218.50 €** | 5.8 % | **8.1 %** | 218.90 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2100 Mikrovlnná trouba s grilem | 107.50 € | **111.50 €** | 9.8 % | **13.9 %** | 111.52 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN ZIP Trifold Cyber Projector | 471.50 € | **475.50 €** | 36.5 % | **37.7 %** | 475.58 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 240.00 € | **244.00 €** | 6.2 % | **8.0 %** | 244.10 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE RB493PW | 176.00 € | **180.00 €** | 6.5 % | **8.9 %** | 180.10 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 194.50 € | **198.50 €** | 6.8 % | **9.0 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec 6600 Turbo Convection Plus | 42.50 € | **46.50 €** | 10.8 % | **21.2 %** | 46.67 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 178.00 € | **182.00 €** | 20.6 % | **23.3 %** | 182.19 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 151.50 € | **155.50 €** | 6.0 % | **8.8 %** | 155.70 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 273.00 € | **277.00 €** | 9.9 % | **11.5 %** | 277.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **560.90 €** | 6.6 % | **7.3 %** | 561.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 49B8G-S | 315.00 € | **318.90 €** | 9.1 % | **10.4 %** | 319.00 € | cena podľa najlacnejšieho iného predajcu |
| N'oveen ohřívač vody IWH560 | 41.90 € | **45.50 €** | 10.4 % | **19.9 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 168.90 € | **172.50 €** | 6.6 % | **8.9 %** | 172.60 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DB | 169.00 € | **172.50 €** | 6.7 % | **8.9 %** | 172.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 208.50 € | **212.00 €** | 6.0 % | **7.7 %** | 212.17 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 46.00 € | **49.50 €** | 5.0 % | **13.0 %** | 49.71 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 120.50 € | **124.00 €** | 11.5 % | **14.7 %** | 124.32 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 131.00 € | **134.50 €** | 8.5 % | **11.4 %** | 134.83 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 324.50 € | **328.00 €** | 6.6 % | **7.7 %** | 328.40 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 161.00 € | **164.50 €** | 6.1 % | **8.4 %** | 164.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 163.50 € | **167.00 €** | 6.2 % | **8.5 %** | 167.43 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 459.50 € | **463.00 €** | 6.0 % | **6.8 %** | 463.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 9.60 € | **13.00 €** | 33.4 % | **80.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 5.60 € | **8.70 €** | 12.4 % | **74.6 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 186.90 € | **190.00 €** | 7.0 % | **8.8 %** | 190.40 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 195.50 € | **198.50 €** | 8.7 % | **10.4 %** | 198.56 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 358.50 € | **361.50 €** | 6.0 % | **6.9 %** | 361.60 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 154.50 € | **157.50 €** | 6.1 % | **8.1 %** | 157.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 22dB | 17.00 € | **20.00 €** | 16.3 % | **36.9 %** | 20.44 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 16.00 € | **18.90 €** | 109.8 % | **147.8 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal N1150410 | 18.00 € | **20.50 €** | 10.6 % | **26.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 93.90 € | **95.90 €** | 9.9 % | **12.3 %** | 95.92 € | cena podľa najlacnejšieho iného predajcu |
| Tefal N1230510 | 12.90 € | **14.90 €** | 11.3 % | **28.6 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 40.50 € | **42.50 €** | 8.8 % | **14.1 %** | 42.60 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 42.50 € | **44.50 €** | 38.6 % | **45.1 %** | 44.64 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 28.00 € | **30.00 €** | 9.1 % | **16.9 %** | 30.15 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 114.00 € | **116.00 €** | 14.9 % | **16.9 %** | 116.29 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 103.00 € | **105.00 €** | 9.4 % | **11.5 %** | 105.47 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 103.00 € | **105.00 €** | 5.2 % | **7.3 %** | 105.47 € | cena podľa najlacnejšieho iného predajcu |
| Tefal N1211610 | 10.00 € | **11.90 €** | 10.5 % | **31.5 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 317.00 € | **318.90 €** | 5.9 % | **6.6 %** | 319.00 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 31.90 € | **33.50 €** | 39.1 % | **46.1 %** | 33.59 € | cena podľa najlacnejšieho iného predajcu |
| BWT filtrační stanice Aqualizer | 61.90 € | **63.50 €** | 21.9 % | **25.1 %** | 63.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 23.50 € | **25.00 €** | 6.3 % | **13.1 %** | 25.02 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100WFB | 52.00 € | **53.50 €** | 10.6 % | **13.8 %** | 53.52 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 40.00 € | **41.50 €** | 6.7 % | **10.7 %** | 41.71 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 141.00 € | **142.50 €** | 5.1 % | **6.2 %** | 142.73 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 16.00 € | **17.50 €** | 14.3 % | **25.0 %** | 17.82 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 307.50 € | **309.00 €** | 6.3 % | **6.8 %** | 309.49 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05B1 | 107.50 € | **109.00 €** | 12.4 % | **13.9 %** | 109.50 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMK38HU0B | 227.50 € | **228.90 €** | 7.4 % | **8.0 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 108.90 € | **110.00 €** | 13.0 % | **14.1 %** | 110.50 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 63.90 € | **64.90 €** | 20.0 % | **21.9 %** | 65.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 10.50 € | **11.50 €** | 9.2 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15C FIXOP3-1576-BK | 10.50 € | **11.50 €** | 9.2 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 245.90 € | **246.90 €** | 7.5 % | **8.0 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 53.00 € | **54.00 €** | 29.4 % | **31.8 %** | 54.14 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 40.50 € | **41.50 €** | 8.7 % | **11.4 %** | 41.71 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 40.50 € | **41.50 €** | 10.4 % | **13.1 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 233.00 € | **234.00 €** | 9.7 % | **10.1 %** | 234.40 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BMGB25332BG | 176.00 € | **176.90 €** | 8.1 % | **8.7 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Aroma difuzer Bloom černý lesk 200ml SIXTOL | 16.00 € | **16.90 €** | 1.0 % | **6.7 %** | 14.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia vianočná LED reťaz Solight 1V101-WW, 10 m,... | 6.60 € | **7.20 €** | 32.5 % | **44.5 %** | 7.22 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 117.90 € | **118.50 €** | 11.4 % | **12.0 %** | 118.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight elektrický sušiak oblečenia | 76.00 € | **76.50 €** | 4.9 % | **5.5 %** | 74.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 11.00 € | **11.50 €** | 14.4 % | **19.6 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.00 € | **24.50 €** | 13.6 % | **15.9 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Senior Retro blesk | 123.50 € | **124.00 €** | 13.3 % | **13.8 %** | 124.09 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 11.50 € | **12.00 €** | 19.1 % | **24.3 %** | 12.09 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 72.00 € | **72.50 €** | 19.0 % | **19.9 %** | 72.61 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 12.50 € | **13.00 €** | 20.0 % | **24.8 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 477.00 € | **477.50 €** | 6.8 % | **7.0 %** | 477.80 € | cena podľa najlacnejšieho iného predajcu |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 135.50 € | **136.00 €** | 13.0 % | **13.4 %** | 136.33 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.50 € | **38.00 €** | 9.1 % | **10.5 %** | 38.39 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 14.50 € | **14.90 €** | 9.3 % | **12.3 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.50 € | **369.90 €** | 7.0 % | **7.1 %** | 370.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.80 € | **7.90 €** | 46.1 % | **48.0 %** | 7.98 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (140)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj 2 v 1 xTool F2 Ultra | 6098.00 € | **5776.50 €** | 15.0 % | **8.9 %** | 5776.86 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 941.90 € | **789.90 €** | 29.1 % | **8.2 %** | 790.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint POP 4 Premium | 999.90 € | **930.90 €** | 21.8 % | **13.4 %** | 930.99 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener REVOPOINT Mini 2 – edícia Advanced | 1009.00 € | **952.90 €** | 21.7 % | **14.9 %** | 953.00 € | cena podľa najlacnejšieho iného predajcu |
| Creality Falcon A1 10W laserový gravírovací stroj | 456.50 € | **401.50 €** | 19.5 % | **5.1 %** | 401.64 € | cena podľa najlacnejšieho iného predajcu |
| SAMSUNG RS57DG410EM9EO | 941.90 € | **898.90 €** | 10.0 % | **5.0 %** | 699.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový gravírovací stroj Creality Falcon T1 UV 5 W | 3999.00 € | **3966.50 €** | 15.0 % | **14.1 %** | 3966.54 € | cena podľa najlacnejšieho iného predajcu |
| Beyerdynamic M88 dynamický mikrofón | 499.00 € | **472.90 €** | 15.0 % | **9.0 %** | 473.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír Creality Falcon T1 40 W | 3002.50 € | **2977.90 €** | 15.0 % | **14.1 %** | 2978.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 118.00 € | **97.50 €** | 44.9 % | **19.7 %** | 97.74 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Verto Recycle 54 l tmavomodrý | 54.50 € | **37.90 €** | 51.6 % | **5.4 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Easy sing mic mini | 169.90 € | **154.50 €** | 35.9 % | **23.6 %** | 154.52 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter na odstraňova... | 207.00 € | **192.50 €** | 38.4 % | **28.7 %** | 192.70 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter s aktívnym uhlím | 207.00 € | **192.50 €** | 38.4 % | **28.7 %** | 192.70 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Canon | 284.90 € | **271.00 €** | 38.1 % | **31.4 %** | 271.15 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EOD3H40BX | 285.50 € | **272.50 €** | 10.1 % | **5.1 %** | 217.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 39.90 € | **27.50 €** | 72.8 % | **19.1 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V480 TTL pre Nikon | 162.50 € | **151.00 €** | 23.6 % | **14.8 %** | 151.30 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Ultra hustý uhlíkový... | 160.00 € | **149.50 €** | 38.9 % | **29.7 %** | 149.65 € | cena podľa najlacnejšieho iného predajcu |
| Tefal QT2028F0 | 351.50 € | **341.00 €** | 10.1 % | **6.8 %** | 341.33 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj xTool S1 40 W 2 v 1, zákl... | 1836.00 € | **1826.90 €** | 16.0 % | **15.4 %** | 1827.00 € | cena podľa najlacnejšieho iného predajcu |
| Sušička ovoce Ruhhy 25928 400W | 57.90 € | **49.90 €** | 22.6 % | **5.6 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Stellar 2 Black | 49.90 € | **42.50 €** | 33.6 % | **13.8 %** | 42.75 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Pink | 49.90 € | **42.50 €** | 33.6 % | **13.8 %** | 42.75 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 White | 49.90 € | **42.50 €** | 33.6 % | **13.8 %** | 42.75 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO1022S | 166.90 € | **159.90 €** | 9.9 % | **5.2 %** | 159.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Kobra X Combo | 545.00 € | **539.90 €** | 15.0 % | **13.9 %** | 540.00 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – filter so strednou ú... | 152.50 € | **147.50 €** | 38.8 % | **34.3 %** | 147.60 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – vysokoúčinný filter | 152.50 € | **147.50 €** | 38.8 % | **34.3 %** | 147.60 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 282.00 € | **277.00 €** | 55.2 % | **52.4 %** | 277.49 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RH 6545 WH | 96.50 € | **91.90 €** | 10.4 % | **5.1 %** | 86.74 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odpadkový kôš Prosperplast SORTIBOX 3 x 35 l popolavý | 28.90 € | **24.50 €** | 31.0 % | **11.0 %** | 24.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 35dB | 22.90 € | **19.00 €** | 68.3 % | **39.7 %** | 19.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.50 € | **12.90 €** | 35.0 % | **5.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Popruh na fotoaparát v mobile PGY LinkGo (ružový) | 29.50 € | **26.00 €** | 41.2 % | **24.4 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 21.00 € | **18.00 €** | 71.9 % | **47.4 %** | 18.07 € | cena podľa najlacnejšieho iného predajcu |
| Statívový držiak 3 Legged Thing ELLIE, šedý | 61.90 € | **58.90 €** | 12.7 % | **7.2 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing 85mm pre ELLI... | 61.90 € | **58.90 €** | 93.6 % | **84.2 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj XTOOL M2 Standard 20 W | 1294.00 € | **1291.00 €** | 15.7 % | **15.5 %** | 1291.50 € | cena podľa najlacnejšieho iného predajcu |
| LaserPecker LX2 40W laserový gravír | 1837.50 € | **1834.90 €** | 15.0 % | **14.8 %** | 1835.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper ABS (sivý) | 17.00 € | **14.50 €** | 36.7 % | **16.6 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 87.00 € | **84.50 €** | 15.3 % | **12.0 %** | 84.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.00 € | **12.50 €** | 29.7 % | **8.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| GameSir X5 Lite BK – mobilný herný ovládač USB-C, či... | 41.50 € | **39.00 €** | 87.8 % | **76.4 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (modrý) | 46.50 € | **44.50 €** | 29.2 % | **23.6 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 38.00 € | **36.50 €** | 65.7 % | **59.2 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 26.00 € | **24.50 €** | 38.4 % | **30.4 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.00 € | **18.50 €** | 30.8 % | **21.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 15.00 € | **13.50 €** | 23.7 % | **11.3 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 17.50 € | **16.00 €** | 37.3 % | **25.6 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **9.80 €** | 31.1 % | **17.9 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 530C Black | 33.90 € | **32.90 €** | 8.2 % | **5.0 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Classic 180 Solid | 21.50 € | **20.50 €** | 11.5 % | **6.3 %** | 20.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 25.50 € | **24.50 €** | 45.6 % | **39.9 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 407.90 € | **406.90 €** | 8.9 % | **8.6 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 410.90 € | **409.90 €** | 8.9 % | **8.7 %** | 410.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 217.90 € | **216.90 €** | 39267.7 % | **39087.0 %** | 217.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 652.90 € | **651.90 €** | 117858.4 % | **117677.8 %** | 652.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu PLA Classic (čierny), 1,75 mm, 1 kg | 14.50 € | **13.50 €** | 61.5 % | **50.4 %** | 13.84 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 25.00 € | **24.00 €** | 26.8 % | **21.7 %** | 24.38 € | cena podľa najlacnejšieho iného predajcu |
| ETA 5180 91010 sklo | 14.50 € | **13.50 €** | 33.5 % | **24.3 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 15.50 € | **14.50 €** | 12.3 % | **5.1 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9192MC | 25.00 € | **24.00 €** | 16.1 % | **11.5 %** | 24.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 42.00 € | **41.00 €** | 25.5 % | **22.5 %** | 41.45 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 158.90 € | **158.00 €** | 11.1 % | **10.5 %** | 158.34 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Black | 49.90 € | **49.00 €** | 15.7 % | **13.7 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight výsuvná nabíjačka USB A+C 24 W PD, čierna | 7.80 € | **7.10 €** | 31.0 % | **19.3 %** | 7.13 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9258M | 35.50 € | **34.90 €** | 7.2 % | **5.4 %** | 33.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit 81520 Pegasus 200 Solid | 38.50 € | **37.90 €** | 16.8 % | **15.0 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.40 € | **4.80 €** | 48.3 % | **31.8 %** | 4.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšie ochranné puzdro na káble, IP44 | 3.80 € | **3.20 €** | 86.1 % | **56.7 %** | 3.24 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (čierna) | 15.50 € | **14.90 €** | 24.2 % | **19.3 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (sivá) | 15.50 € | **14.90 €** | 17.7 % | **13.1 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Classic 200 Flex | 25.00 € | **24.50 €** | 8.2 % | **6.1 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.50 €** | 46.4 % | **42.9 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.50 € | **181.00 €** | 25.7 % | **25.4 %** | 181.19 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.50 € | **168.00 €** | 33.8 % | **33.4 %** | 168.19 € | cena podľa najlacnejšieho iného predajcu |
| Sada šipek 12dílná + příslušenství Trizand 21629 | 12.00 € | **11.50 €** | 10.6 % | **6.0 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (biela) | 13.00 € | **12.50 €** | 37.4 % | **32.2 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 297.00 € | **296.50 €** | 20.0 % | **19.8 %** | 296.85 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 116.00 € | **115.50 €** | 41.8 % | **41.2 %** | 115.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42323PC | 78.00 € | **77.50 €** | 7.2 % | **6.5 %** | 77.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 927.50 € | **927.00 €** | 17.9 % | **17.8 %** | 927.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 28.50 € | **28.00 €** | 16.6 % | **14.5 %** | 28.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 79.00 € | **78.50 €** | 9.8 % | **9.1 %** | 78.89 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 848.00 € | **847.50 €** | 10.0 % | **9.9 %** | 847.89 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 388.50 € | **388.00 €** | 7.6 % | **7.5 %** | 388.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 353.50 € | **353.00 €** | 21.5 % | **21.4 %** | 353.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 315.00 € | **314.50 €** | 7.8 % | **7.6 %** | 314.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 117.00 € | **116.50 €** | 9.2 % | **8.7 %** | 116.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 141.00 € | **140.50 €** | 5.9 % | **5.5 %** | 140.89 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 75.50 € | **75.00 €** | 10.8 % | **10.1 %** | 75.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1280.50 € | **1280.00 €** | 6.6 % | **6.5 %** | 1280.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 54.50 € | **54.00 €** | 13.6 % | **12.6 %** | 54.39 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Plus 575 Combo+dock black | 529.50 € | **529.00 €** | 10.0 % | **9.9 %** | 529.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 286.50 € | **286.00 €** | 41.8 % | **41.5 %** | 286.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 248.00 € | **247.50 €** | 25.1 % | **24.8 %** | 247.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 278.00 € | **277.50 €** | 9.5 % | **9.3 %** | 277.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 269.50 € | **269.00 €** | 5.4 % | **5.2 %** | 269.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 152.50 € | **152.00 €** | 7.9 % | **7.5 %** | 152.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 72.00 € | **71.50 €** | 9.0 % | **8.3 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 44.00 € | **43.50 €** | 11.8 % | **10.5 %** | 43.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 63.00 € | **62.50 €** | 17.7 % | **16.8 %** | 62.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 137.50 € | **137.00 €** | 20.2 % | **19.8 %** | 137.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 81.50 € | **81.00 €** | 40.1 % | **39.2 %** | 81.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 83.50 € | **83.00 €** | 13.7 % | **13.0 %** | 83.39 € | cena podľa najlacnejšieho iného predajcu |
| REBEL Micropower 1000 | 74.50 € | **74.00 €** | 6.2 % | **5.5 %** | 74.39 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 276.00 € | **275.50 €** | 30.2 % | **29.9 %** | 275.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 654.00 € | **653.50 €** | 5.3 % | **5.2 %** | 653.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 312.00 € | **311.50 €** | 6.1 % | **6.0 %** | 311.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 611.00 € | **610.50 €** | 6.3 % | **6.3 %** | 610.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 641.00 € | **640.50 €** | 8.2 % | **8.2 %** | 640.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 689.00 € | **688.50 €** | 12.4 % | **12.3 %** | 688.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 32.00 € | **31.50 €** | 31.2 % | **29.1 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1443.50 € | **1443.00 €** | 7.4 % | **7.4 %** | 1443.41 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 77.50 € | **77.00 €** | 17.4 % | **16.6 %** | 77.49 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA37BE AX 1200, WiFi ... | 33.50 € | **33.00 €** | 12.0 % | **10.3 %** | 33.49 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 68.50 € | **68.00 €** | 9.0 % | **8.2 %** | 68.50 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 50.50 € | **50.00 €** | 62.2 % | **60.6 %** | 50.50 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9176RK | 28.50 € | **28.00 €** | 8.2 % | **6.3 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 264 AP | 57.50 € | **57.00 €** | 8.7 % | **7.7 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 81.90 € | **81.50 €** | 25.7 % | **25.1 %** | 81.79 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO30211IP | 124.90 € | **124.50 €** | 22.5 % | **22.2 %** | 124.89 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPhone 17 FIXSHM-1600-TR | 15.90 € | **15.50 €** | 14.5 % | **11.6 %** | 15.70 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 13.90 € | **13.50 €** | 21.4 % | **17.9 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre GoPro HERO11/HERO10/HERO9 | 19.90 € | **19.50 €** | 13.9 % | **11.6 %** | 19.63 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 42.90 € | **42.50 €** | 13.3 % | **12.3 %** | 42.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO339KP | 52.90 € | **52.50 €** | 8.9 % | **8.1 %** | 52.90 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Plus 575 Combo+dock white | 529.90 € | **529.50 €** | 10.0 % | **10.0 %** | 529.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.40 € | **9.20 €** | 13.2 % | **10.8 %** | 9.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.30 € | **7.10 €** | 24.7 % | **21.3 %** | 7.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (biela) | 24.00 € | **23.90 €** | 32.3 % | **31.7 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (čierna) | 24.00 € | **23.90 €** | 40.5 % | **39.9 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NB907MAW | 63.00 € | **62.90 €** | 12.1 % | **11.9 %** | 63.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.90 € | **4.80 €** | 8.8 % | **6.6 %** | 4.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7344H | 108.00 € | **107.90 €** | 8.8 % | **8.6 %** | 107.99 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 103.00 € | **102.90 €** | 7.4 % | **7.3 %** | 103.00 € | cena podľa najlacnejšieho iného predajcu |

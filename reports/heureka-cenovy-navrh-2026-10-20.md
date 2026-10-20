# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-20

Vstup: `premiumstore-sk_2026-10-20_13-27.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6264**
- Návrh **zvýšiť** cenu: **164** produktov
- Návrh **znížiť** cenu: **85** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6015** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **2**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **297**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (164)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 897.90 € | **1146.90 €** | 14.4 % | **46.2 %** | 1147.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 815.00 € | **1026.90 €** | 14.3 % | **44.0 %** | 1027.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 309.50 € | **368.90 €** | 21.9 % | **45.3 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 445.50 € | **489.50 €** | 9.2 % | **20.0 %** | 489.87 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRKI517E41 | 460.00 € | **500.00 €** | 10.3 % | **19.9 %** | 500.04 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 467.50 € | **503.00 €** | 11.6 % | **20.0 %** | 503.24 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 361.00 € | **396.00 €** | 9.2 % | **19.8 %** | 396.28 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 503.50 € | **538.00 €** | 8.7 % | **16.2 %** | 538.34 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 496.50 € | **530.00 €** | 15.5 % | **23.3 %** | 530.38 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 675.00 € | **707.90 €** | 6.0 % | **11.1 %** | 708.00 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 298.50 € | **330.50 €** | 7.1 % | **18.6 %** | 330.59 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD100SX | 404.50 € | **435.50 €** | 6.8 % | **14.9 %** | 435.75 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 426.00 € | **457.00 €** | 7.1 % | **14.9 %** | 457.39 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 349.90 € | **378.90 €** | 9.7 % | **18.8 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 294.50 € | **317.50 €** | 12.5 % | **21.3 %** | 317.83 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 565.00 € | **586.00 €** | 8.0 % | **12.0 %** | 586.08 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Nikon | 67.90 € | **88.90 €** | 12.1 % | **46.8 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 777.00 € | **798.00 €** | 11.1 % | **14.1 %** | 798.29 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 573.00 € | **593.50 €** | 6.2 % | **10.0 %** | 593.90 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 270.00 € | **288.90 €** | 7.4 % | **14.9 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-TC41L5C-VMD-LQ 4.0 Mpix venkovní komp... | 284.90 € | **299.50 €** | 0.0 % | **5.1 %** | 260.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 90A1 | 127.00 € | **141.00 €** | 8.0 % | **20.0 %** | 141.14 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 290.00 € | **303.50 €** | 9.9 % | **15.0 %** | 303.56 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 485.50 € | **498.50 €** | 9.9 % | **12.9 %** | 498.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 252.00 € | **263.90 €** | 9.8 % | **15.0 %** | 263.92 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje RK14C2W4 | 255.00 € | **266.50 €** | 10.0 % | **14.9 %** | 266.69 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG2PS72A12 | 220.50 € | **230.50 €** | 10.0 % | **15.0 %** | 230.58 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 194.00 € | **204.00 €** | 6.2 % | **11.6 %** | 204.14 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 357.50 € | **367.00 €** | 23.2 % | **26.5 %** | 367.04 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 443.50 € | **453.00 €** | 20.2 % | **22.8 %** | 453.04 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 469.50 € | **478.90 €** | 6.7 % | **8.9 %** | 479.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 429.50 € | **438.90 €** | 12.4 % | **14.8 %** | 439.00 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE R492PW | 190.00 € | **198.90 €** | 5.1 % | **10.0 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 205.50 € | **214.00 €** | 6.1 % | **10.5 %** | 214.13 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 296.50 € | **305.00 €** | 11.8 % | **15.0 %** | 305.13 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 277.00 € | **285.50 €** | 11.5 % | **14.9 %** | 285.67 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 199.50 € | **208.00 €** | 10.1 % | **14.8 %** | 208.41 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 221.50 € | **230.00 €** | 18.7 % | **23.3 %** | 230.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 257.50 € | **265.90 €** | 27.2 % | **31.4 %** | 265.92 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 257.50 € | **265.90 €** | 18.2 % | **22.1 %** | 265.92 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo rádio DAB+ internet rádio - DT06 | 86.50 € | **94.50 €** | 5.1 % | **14.8 %** | 94.66 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TB | 295.50 € | **303.50 €** | 8.6 % | **11.5 %** | 303.80 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC 20100 W | 61.00 € | **68.50 €** | 13.7 % | **27.6 %** | 68.61 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 159.00 € | **166.50 €** | 6.1 % | **11.1 %** | 166.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 962.00 € | **968.50 €** | 15.9 % | **16.7 %** | 968.54 € | cena podľa najlacnejšieho iného predajcu |
| Tefal SV9201E0 | 186.50 € | **193.00 €** | 5.2 % | **8.9 %** | 193.10 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 317.00 € | **323.50 €** | 5.9 % | **8.1 %** | 323.60 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 767.00 € | **773.50 €** | 39.7 % | **40.9 %** | 773.74 € | cena podľa najlacnejšieho iného predajcu |
| Sušička ovoce Ruhhy 25928 400W | 51.50 € | **57.90 €** | 8.9 % | **22.4 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 200.00 € | **206.00 €** | 8.3 % | **11.6 %** | 206.31 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS062 svorka volantu pre stôl | 49.00 € | **54.90 €** | 5.6 % | **18.3 %** | 55.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 584.00 € | **589.50 €** | 28.5 % | **29.7 %** | 589.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 173.00 € | **178.00 €** | 5.7 % | **8.8 %** | 178.20 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 189.00 € | **194.00 €** | 13.0 % | **16.0 %** | 194.27 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 885.00 € | **889.90 €** | 17.9 % | **18.5 %** | 890.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 912.90 € | **917.50 €** | 18.9 % | **19.5 %** | 917.54 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 689.90 € | **694.50 €** | 14.2 % | **15.0 %** | 694.69 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo infra sušička NIR+ | 176.00 € | **180.50 €** | 6.0 % | **8.8 %** | 180.60 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 342.00 € | **346.50 €** | 5.9 % | **7.3 %** | 346.60 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 342.00 € | **346.50 €** | 10.5 % | **11.9 %** | 346.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338DD | 521.00 € | **525.50 €** | 6.1 % | **7.0 %** | 525.64 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 332.50 € | **337.00 €** | 10.0 % | **11.5 %** | 337.19 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 323.50 € | **328.00 €** | 10.6 % | **12.2 %** | 328.23 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 231.50 € | **236.00 €** | 8.9 % | **11.0 %** | 236.38 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 SensiCare® EW6T106C | 339.50 € | **343.50 €** | 13.6 % | **15.0 %** | 343.55 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 240.00 € | **244.00 €** | 6.2 % | **8.0 %** | 244.10 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 194.50 € | **198.50 €** | 6.8 % | **9.0 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 362.00 € | **366.00 €** | 18.1 % | **19.4 %** | 366.13 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 293.00 € | **297.00 €** | 12.1 % | **13.7 %** | 297.17 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 293.00 € | **297.00 €** | 7.7 % | **9.2 %** | 297.17 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 151.50 € | **155.50 €** | 6.0 % | **8.8 %** | 155.70 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 262.00 € | **266.00 €** | 23.3 % | **25.2 %** | 266.21 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 131.50 € | **135.50 €** | 16.3 % | **19.9 %** | 135.72 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 179.00 € | **183.00 €** | 17.3 % | **19.9 %** | 183.23 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 273.00 € | **277.00 €** | 9.9 % | **11.5 %** | 277.25 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 187.50 € | **191.50 €** | 13.9 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 187.50 € | **191.50 €** | 13.9 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje OM38GBC | 130.00 € | **134.00 €** | 13.5 % | **17.0 %** | 134.30 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 163.50 € | **167.50 €** | 6.2 % | **8.8 %** | 167.80 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 282.50 € | **286.50 €** | 13.9 % | **15.5 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 298.00 € | **302.00 €** | 13.3 % | **14.9 %** | 302.35 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 488.00 € | **492.00 €** | 15.0 % | **16.0 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 224.50 € | **228.50 €** | 18.8 % | **20.9 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 224.50 € | **228.50 €** | 18.8 % | **20.9 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FH50EAW | 477.00 € | **481.00 €** | 6.1 % | **6.9 %** | 481.40 € | cena podľa najlacnejšieho iného predajcu |
| Braun IS5247.VI | 185.00 € | **189.00 €** | 9.1 % | **11.5 %** | 189.43 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 180.00 € | **183.90 €** | 9.3 % | **11.7 %** | 184.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 235.00 € | **238.90 €** | 18.9 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 371.00 € | **374.90 €** | 10.5 % | **11.7 %** | 374.95 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **560.90 €** | 6.6 % | **7.3 %** | 561.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 635.00 € | **638.90 €** | 44.2 % | **45.1 %** | 639.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 345.00 € | **348.90 €** | 13.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| WiFi router TP-Link Mercusys Halo H27BE(1-pack) WiFi... | 68.50 € | **72.00 €** | 5.4 % | **10.8 %** | 72.10 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DB | 169.00 € | **172.50 €** | 6.7 % | **8.9 %** | 172.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 208.50 € | **212.00 €** | 6.0 % | **7.7 %** | 212.17 € | cena podľa najlacnejšieho iného predajcu |
| Wacom Intuos S Black | 54.50 € | **58.00 €** | 7.8 % | **14.8 %** | 58.19 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 FLEX EES42210IX | 462.00 € | **465.50 €** | 6.2 % | **7.0 %** | 465.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 131.00 € | **134.50 €** | 8.5 % | **11.4 %** | 134.83 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 324.50 € | **328.00 €** | 6.6 % | **7.7 %** | 328.40 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 161.00 € | **164.50 €** | 6.1 % | **8.4 %** | 164.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 346.50 € | **350.00 €** | 22.1 % | **23.3 %** | 350.49 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 459.50 € | **463.00 €** | 6.0 % | **6.8 %** | 463.50 € | cena podľa najlacnejšieho iného predajcu |
| BEKO CEG7302B | 238.50 € | **241.90 €** | 5.5 % | **7.0 %** | 241.93 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 108.90 € | **111.90 €** | 13.0 % | **16.1 %** | 111.91 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 358.50 € | **361.50 €** | 6.0 % | **6.9 %** | 361.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 13.50 € | **16.50 €** | 17.1 % | **43.2 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 154.50 € | **157.50 €** | 6.1 % | **8.1 %** | 157.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 9.40 € | **12.00 €** | 37.9 % | **76.1 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.40 € | **12.00 €** | 12.1 % | **43.1 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.50 €** | 7.7 % | **15.0 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo RV20 Max Plus | 204.50 € | **207.00 €** | 7.6 % | **8.9 %** | 207.46 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM9802B | 128.50 € | **130.90 €** | 9.0 % | **11.0 %** | 131.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 9.60 € | **12.00 €** | 5.0 % | **31.3 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 93.90 € | **95.90 €** | 9.9 % | **12.3 %** | 95.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight WIFI zásuvka s meraním spotreby | 10.00 € | **12.00 €** | 13.9 % | **36.6 %** | 12.02 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 25.00 € | **27.00 €** | 8.2 % | **16.9 %** | 27.13 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26731-56/RH | 39.50 € | **41.50 €** | 13.9 % | **19.6 %** | 41.66 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 42.50 € | **44.50 €** | 38.6 % | **45.1 %** | 44.71 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 114.00 € | **116.00 €** | 14.9 % | **16.9 %** | 116.29 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO White | 47.00 € | **49.00 €** | 9.0 % | **13.7 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Black | 47.00 € | **49.00 €** | 9.0 % | **13.7 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Pink | 47.00 € | **49.00 €** | 9.0 % | **13.7 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 103.00 € | **105.00 €** | 9.4 % | **11.5 %** | 105.47 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 103.00 € | **105.00 €** | 5.2 % | **7.3 %** | 105.47 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 233.00 € | **234.50 €** | 9.7 % | **10.4 %** | 234.63 € | cena podľa najlacnejšieho iného predajcu |
| CUBE1 Smart Ring Black velikost 8 | 39.50 € | **41.00 €** | 6.9 % | **10.9 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| CUBE1 Smart Ring White velikost 9 | 39.50 € | **41.00 €** | 6.9 % | **10.9 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 White | 41.00 € | **42.50 €** | 9.8 % | **13.8 %** | 42.75 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Black | 41.00 € | **42.50 €** | 9.8 % | **13.8 %** | 42.75 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Pink | 41.00 € | **42.50 €** | 9.8 % | **13.8 %** | 42.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **12.00 €** | 5.5 % | **20.6 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **17.50 €** | 15.3 % | **26.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 307.50 € | **309.00 €** | 6.3 % | **6.8 %** | 309.49 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMK38HU0B | 227.50 € | **228.90 €** | 7.4 % | **8.0 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259B (HP W2070A Black) | 31.90 € | **33.00 €** | 10.6 % | **14.4 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259C (HP W2071A Cyan) | 31.90 € | **33.00 €** | 10.6 % | **14.4 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259Y (HP W2072A Yellow) | 31.90 € | **33.00 €** | 10.6 % | **14.4 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259M (HP W2073A Magenta) | 31.90 € | **33.00 €** | 10.6 % | **14.4 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| Aroma difuzer Palm černý lesk 500ml SIXTOL | 26.50 € | **27.50 €** | 2.8 % | **6.7 %** | 22.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight dezinfekčná bezozónová UV lampa 100W | 42.50 € | **43.50 €** | 35.3 % | **38.5 %** | 43.59 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 245.90 € | **246.90 €** | 7.5 % | **8.0 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlo Etenwolf L2, 300 lm | 13.50 € | **14.50 €** | 15.7 % | **24.2 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 White | 31.50 € | **32.50 €** | 9.7 % | **13.2 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Pink | 31.50 € | **32.50 €** | 9.7 % | **13.2 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61600 GO/D143 Rozšiřující set 1 | 16.00 € | **17.00 €** | 14.3 % | **21.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES206XPP-M2 5x 2,5GLan s PoE++, 1x 10... | 175.00 € | **175.90 €** | 5.0 % | **5.6 %** | 175.95 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 64.00 € | **64.90 €** | 20.2 % | **21.9 %** | 65.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 23.90 € | **24.50 €** | 14.4 % | **17.2 %** | 24.55 € | cena podľa najlacnejšieho iného predajcu |
| KMP C137 (Canon CL 561XL) | 17.90 € | **18.50 €** | 10.1 % | **13.8 %** | 18.70 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 117.90 € | **118.50 €** | 11.4 % | **12.0 %** | 118.70 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96BX (HP 305XL Black) | 17.50 € | **18.00 €** | 11.2 % | **14.4 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96CX (HP 305XL Colour) | 17.50 € | **18.00 €** | 11.2 % | **14.4 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 210.50 € | **211.00 €** | 9.4 % | **9.7 %** | 211.10 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 198.00 € | **198.50 €** | 7.0 % | **7.3 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 72.00 € | **72.50 €** | 19.0 % | **19.9 %** | 72.61 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 18.50 € | **19.00 €** | 11.3 % | **14.3 %** | 19.30 € | cena podľa najlacnejšieho iného predajcu |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 135.50 € | **136.00 €** | 12.3 % | **12.7 %** | 136.33 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 160.00 € | **160.50 €** | 6.7 % | **7.1 %** | 160.86 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 90.00 € | **90.50 €** | 15.0 % | **15.6 %** | 90.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW402HE0 | 129.00 € | **129.50 €** | 9.7 % | **10.2 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.00 € | **14.50 €** | 13.0 % | **17.1 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 31.50 € | **31.90 €** | 16.9 % | **18.4 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.50 € | **369.90 €** | 7.0 % | **7.1 %** | 370.00 € | cena podľa najlacnejšieho iného predajcu |
| Sati Crema 1 kg zrno | 21.90 € | **22.00 €** | 17.2 % | **17.8 %** | 22.43 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (85)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Elektrický skúter NAVEE ST5 Max | 870.00 € | **806.00 €** | 24.5 % | **15.3 %** | 806.02 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 58.00 € | **35.90 €** | 86.3 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Zelmer ZMM3512B | 101.50 € | **83.50 €** | 36.5 % | **12.3 %** | 83.55 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 232.00 € | **218.50 €** | 21.2 % | **14.1 %** | 218.71 € | cena podľa najlacnejšieho iného predajcu |
| City Boss RS350 černá | 319.90 € | **311.50 €** | 8.0 % | **5.1 %** | 281.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 47.00 € | **39.00 €** | 136.2 % | **96.0 %** | 39.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 47.00 € | **39.00 €** | 34.7 % | **11.8 %** | 39.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **42.00 €** | 35.9 % | **21.4 %** | 42.40 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro Xiaomi R Pad 2 FIXTOT-1199 | 19.50 € | **14.90 €** | 49.6 % | **14.3 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **25.00 €** | 20.1 % | **5.3 %** | 24.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight high bay, 100W, 14000lm, 120°, Meanwell,  50... | 79.50 € | **76.00 €** | 19.9 % | **14.6 %** | 76.27 € | cena podľa najlacnejšieho iného predajcu |
| Kompaktný statív Neewer TP02 pre fotoaparáty a telefóny | 25.00 € | **22.50 €** | 38.5 % | **24.7 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 102.00 € | **99.50 €** | 27.2 % | **24.1 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava držadiel PGY RetroVa pre iPhone 16 Pro | 102.00 € | **99.50 €** | 27.9 % | **24.7 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 102.00 € | **99.50 €** | 24.9 % | **21.8 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 102.00 € | **99.50 €** | 24.9 % | **21.8 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **14.50 €** | 38.0 % | **21.3 %** | 14.64 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 154.90 € | **153.00 €** | 21.6 % | **20.1 %** | 153.02 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 47.00 € | **45.50 €** | 14.9 % | **11.2 %** | 45.82 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Ruhhy 26829 | 38.00 € | **36.50 €** | 25.1 % | **20.2 %** | 36.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 11.50 € | **10.00 €** | 36.1 % | **18.3 %** | 10.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **6.80 €** | 47.3 % | **26.8 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 19.50 € | **18.50 €** | 16.6 % | **10.6 %** | 18.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **3.90 €** | 26.3 % | **7.1 %** | 3.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 37.00 € | **36.50 €** | 61.4 % | **59.2 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB6000 | 38.00 € | **37.50 €** | 12.9 % | **11.4 %** | 37.82 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.50 € | **266.00 €** | 7.5 % | **7.3 %** | 266.39 € | cena podľa najlacnejšieho iného predajcu |
| Behringer MU1000 music stand | 28.00 € | **27.50 €** | 11.0 % | **9.1 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped DeerRun S500 Pro (čierny) | 325.50 € | **325.00 €** | 52.0 % | **51.8 %** | 325.43 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 315.50 € | **315.00 €** | 5.6 % | **5.5 %** | 315.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 46.50 € | **46.00 €** | 30.9 % | **29.5 %** | 46.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.50 € | **10.00 €** | 22.5 % | **16.6 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 38.50 € | **38.00 €** | 9.4 % | **8.0 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 144.50 € | **144.00 €** | 50.3 % | **49.8 %** | 144.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.50 € | **10.00 €** | 25.4 % | **19.4 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.50 € | **11.00 €** | 29.1 % | **23.5 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **12.00 €** | 23.5 % | **18.5 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 13.50 € | **13.00 €** | 34.0 % | **29.0 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 17.50 € | **17.00 €** | 19.3 % | **15.9 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 21.50 € | **21.00 €** | 49.4 % | **45.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 29.50 € | **29.00 €** | 43.1 % | **40.7 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 37.50 € | **37.00 €** | 13.8 % | **12.2 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 17.50 € | **17.00 €** | 30.4 % | **26.7 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 24.50 € | **24.00 €** | 12.7 % | **10.4 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH 6756WO | 122.50 € | **122.00 €** | 8.2 % | **7.8 %** | 122.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 19.50 € | **19.00 €** | 24.6 % | **21.4 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 31.50 € | **31.00 €** | 55.0 % | **52.6 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 34.50 € | **34.00 €** | 16.6 % | **14.9 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 26.50 € | **26.00 €** | 9.1 % | **7.1 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.50 € | **21.00 €** | 18.1 % | **15.4 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.50 € | **22.00 €** | 31.8 % | **28.9 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 125.90 € | **125.50 €** | 9.8 % | **9.4 %** | 125.90 € | cena podľa najlacnejšieho iného predajcu |
| Turistická rybářská židle, skládací s opěradlem | 15.90 € | **15.50 €** | 43.0 % | **39.4 %** | 15.89 € | cena podľa najlacnejšieho iného predajcu |
| Držák projektoru Cabletech UCH0148 univerzální | 14.90 € | **14.50 €** | 18.0 % | **14.8 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| LTE filtr Fagor LBF 694 (5-694 MHz, LTE 5G útlum 45 dB) | 14.90 € | **14.50 €** | 18.0 % | **14.8 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.90 € | **14.50 €** | 25.8 % | **22.4 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.90 € | **10.50 €** | 27.1 % | **22.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.90 € | **14.50 €** | 15.8 % | **12.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 435C | 17.90 € | **17.50 €** | 38.2 % | **35.1 %** | 17.54 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1016501 | 29.90 € | **29.50 €** | 10.4 % | **8.9 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 17.90 € | **17.50 €** | 14.4 % | **11.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 19.90 € | **19.50 €** | 24.7 % | **22.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 338.00 € | **337.90 €** | 23.8 % | **23.7 %** | 337.96 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 30.00 € | **29.90 €** | 19.0 % | **18.6 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 48.00 € | **47.90 €** | 21.8 % | **21.5 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 35.00 € | **34.90 €** | 34.4 % | **34.0 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 30.00 € | **29.90 €** | 15.2 % | **14.8 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 43.00 € | **42.90 €** | 38.4 % | **38.1 %** | 43.00 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P101CUD100 | 33.00 € | **32.90 €** | 5.6 % | **5.3 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.40 € | **9.30 €** | 32.4 % | **31.0 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.80 €** | 37.4 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **10.90 €** | 32.3 % | **31.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.80 € | **6.70 €** | 40.3 % | **38.3 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.00 € | **4.90 €** | 122.1 % | **117.7 %** | 5.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.40 € | **9.30 €** | 19.8 % | **18.5 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 8.90 € | **8.80 €** | 25.8 % | **24.4 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 10.00 € | **9.90 €** | 13.2 % | **12.1 %** | 10.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI držák do auta s Magsafe AMS06BK | 14.00 € | **13.90 €** | 10.0 % | **9.2 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 90.00 € | **89.90 €** | 40.6 % | **40.5 %** | 89.98 € | cena podľa najlacnejšieho iného predajcu |
| Tefal KI883D10 | 106.00 € | **105.90 €** | 9.8 % | **9.7 %** | 106.00 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel 50 | 75.00 € | **74.90 €** | 7.4 % | **7.2 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel Sun 50 | 75.00 € | **74.90 €** | 7.4 % | **7.2 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 96.00 € | **95.90 €** | 16.5 % | **16.4 %** | 96.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 143.00 € | **142.90 €** | 7.6 % | **7.5 %** | 143.00 € | cena podľa najlacnejšieho iného predajcu |

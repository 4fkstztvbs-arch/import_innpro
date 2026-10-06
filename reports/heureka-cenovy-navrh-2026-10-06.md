# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-06

Vstup: `premiumstore-sk_2026-10-06_14-56.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7499**
- Návrh **zvýšiť** cenu: **250** produktov
- Návrh **znížiť** cenu: **191** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **7058** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **10**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **790**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (250)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINI-PC Minis Forum UM890 Pro Ryzen 9 8945HS barebone | 877.00 € | **1156.90 €** | 59.7 % | **110.7 %** | 1157.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 858.00 € | **1136.90 €** | 13.1 % | **49.9 %** | 1137.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 755.00 € | **1016.90 €** | 7.8 % | **45.2 %** | 1017.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **250.50 €** | 15.3 % | **1705.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **250.50 €** | 14.5 % | **544.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 484.00 € | **638.90 €** | 9.9 % | **45.1 %** | 639.00 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 660.50 € | **754.00 €** | 5.1 % | **20.0 %** | 754.41 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 953.50 € | **1046.50 €** | 11.5 % | **22.3 %** | 1046.83 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 302.00 € | **393.90 €** | 9.3 % | **42.5 %** | 393.92 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 526.00 € | **617.00 €** | 7.7 % | **26.3 %** | 617.50 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Halo 13x Digital Nig... | 232.90 € | **319.90 €** | 8.0 % | **48.4 %** | 320.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 371.00 € | **456.90 €** | 10.5 % | **36.1 %** | 456.91 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 756.00 € | **835.00 €** | 11.2 % | **22.8 %** | 835.50 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 463.00 € | **530.00 €** | 7.7 % | **23.3 %** | 530.38 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1074.50 € | **1135.90 €** | 8.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 396.00 € | **453.00 €** | 7.3 % | **22.8 %** | 453.04 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 458.50 € | **514.50 €** | 12.5 % | **26.3 %** | 514.79 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 445.50 € | **489.50 €** | 9.2 % | **20.0 %** | 489.87 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 314.50 € | **358.50 €** | 9.5 % | **24.8 %** | 358.88 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 858.50 € | **902.50 €** | 9.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Flytec V803-GPS 12000mAh loď na návnadu | 143.50 € | **186.50 €** | 15.1 % | **49.6 %** | 186.62 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 493.00 € | **535.00 €** | 17.6 % | **27.7 %** | 535.20 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 779.00 € | **819.90 €** | 9.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko TB622ECWCS | 300.00 € | **340.00 €** | 9.9 % | **24.5 %** | 340.19 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 205.00 € | **244.90 €** | 8.7 % | **29.9 %** | 244.91 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T68243WCSHBC | 430.00 € | **468.00 €** | 10.2 % | **19.9 %** | 468.45 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 498.00 € | **535.50 €** | 7.5 % | **15.6 %** | 535.70 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 675.00 € | **711.50 €** | 6.0 % | **11.7 %** | 711.70 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 642.00 € | **675.50 €** | 9.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko B5T4924SWW | 465.00 € | **498.00 €** | 12.0 % | **20.0 %** | 498.48 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 337.00 € | **366.00 €** | 10.0 % | **19.4 %** | 366.13 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 350.50 € | **378.90 €** | 9.9 % | **18.8 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1305.00 € | **1329.90 €** | 11.2 % | **13.3 %** | 1330.00 € | cena podľa najlacnejšieho iného predajcu |
| Puškohled LEVENHUK Halo NVR50 s nočním viděním | 395.90 € | **418.90 €** | 8.3 % | **14.6 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 573.00 € | **595.50 €** | 6.2 % | **10.4 %** | 595.88 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 828.00 € | **850.50 €** | 7.8 % | **10.7 %** | 850.89 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 392.50 € | **414.50 €** | 10.0 % | **16.1 %** | 414.85 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| MiniPC Minis Fórum X1-255 AMD Ryzen 7 H255, barebone | 450.90 € | **471.50 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Guzzanti GZ 210G | 501.00 € | **521.50 €** | 17.6 % | **22.4 %** | 521.63 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 292.50 € | **312.50 €** | 10.4 % | **18.0 %** | 312.61 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 495.00 € | **514.50 €** | 7.0 % | **11.2 %** | 514.79 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 10N3BX-S | 469.00 € | **487.90 €** | 10.0 % | **14.4 %** | 488.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 243.00 € | **261.00 €** | 13.9 % | **22.3 %** | 261.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 216.00 € | **233.00 €** | 14.3 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 216.00 € | **233.00 €** | 14.3 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 213.00 € | **230.00 €** | 14.2 % | **23.3 %** | 230.50 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 167.00 € | **183.00 €** | 9.4 % | **19.9 %** | 183.23 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 476.00 € | **492.00 €** | 12.2 % | **16.0 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 333.00 € | **348.90 €** | 9.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Phillips PR-650 WXGA (biely) | 570.50 € | **585.50 €** | 25.5 % | **28.8 %** | 585.82 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 474.00 € | **488.90 €** | 7.8 % | **11.1 %** | 489.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 208.00 € | **221.50 €** | 11.0 % | **18.2 %** | 221.54 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 8000mAh 14.8V 100C 4S2P Lipo Battery Pack | 86.00 € | **99.00 €** | 7.8 % | **24.2 %** | 99.04 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 331.50 € | **344.50 €** | 7.6 % | **11.8 %** | 344.81 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8500mAh 14.8V 60C 4S1P Lipo Battery ... | 103.50 € | **116.00 €** | 22.4 % | **37.2 %** | 116.04 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 362.90 € | **374.90 €** | 8.1 % | **11.7 %** | 374.95 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 29.50 € | **41.50 €** | 14.6 % | **61.3 %** | 41.68 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 565.00 € | **577.00 €** | 8.0 % | **10.3 %** | 577.40 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 540.00 € | **551.50 €** | 8.5 % | **10.8 %** | 551.84 € | cena podľa najlacnejšieho iného predajcu |
| Indesit TI5512EMTCS | 308.50 € | **318.90 €** | 12.7 % | **16.5 %** | 319.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 194.00 € | **204.00 €** | 6.2 % | **11.6 %** | 204.14 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 908.00 € | **917.50 €** | 18.3 % | **19.5 %** | 917.54 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 258.50 € | **267.50 €** | 5.9 % | **9.6 %** | 267.88 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 290.00 € | **298.90 €** | 12.9 % | **16.3 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 205.50 € | **214.00 €** | 6.1 % | **10.5 %** | 214.13 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 258.50 € | **267.00 €** | 6.8 % | **10.4 %** | 267.21 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 171.00 € | **179.50 €** | 9.9 % | **15.4 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 302.00 € | **310.00 €** | 18.8 % | **21.9 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 302.00 € | **310.00 €** | 17.6 % | **20.7 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 332.50 € | **340.50 €** | 10.0 % | **12.6 %** | 340.69 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 127.50 € | **135.50 €** | 12.8 % | **19.9 %** | 135.72 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 231.00 € | **238.90 €** | 12.7 % | **16.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 38 Ah  Victron Energy AGM Sup... | 116.50 € | **124.00 €** | 5.8 % | **12.6 %** | 124.25 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 159.00 € | **166.50 €** | 6.1 % | **11.1 %** | 166.83 € | cena podľa najlacnejšieho iného predajcu |
| AMICA 510CE1.30P(W) | 266.90 € | **274.00 €** | 5.2 % | **7.9 %** | 274.30 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 228.90 € | **236.00 €** | 7.7 % | **11.0 %** | 236.38 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 291.90 € | **298.90 €** | 10.0 % | **12.6 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 254.50 € | **261.50 €** | 25.7 % | **29.2 %** | 261.65 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 254.50 € | **261.50 €** | 16.9 % | **20.1 %** | 261.65 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 48SBL6G-S | 324.50 € | **331.50 €** | 9.9 % | **12.3 %** | 331.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 325 | 248.00 € | **254.90 €** | 5.0 % | **8.0 %** | 255.00 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Lipo With XT6... | 55.00 € | **61.90 €** | 20.1 % | **35.1 %** | 61.92 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GECS5B70CLI | 425.00 € | **431.90 €** | 9.9 % | **11.7 %** | 431.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 227.50 € | **234.00 €** | 7.9 % | **11.0 %** | 234.18 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prsteň COLMI R02, veľkosť 8,18,1 mm (či... | 27.50 € | **34.00 €** | 14.4 % | **41.4 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 177.50 € | **183.90 €** | 7.8 % | **11.7 %** | 184.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 200.00 € | **206.00 €** | 8.3 % | **11.6 %** | 206.31 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 49G | 160.00 € | **166.00 €** | 7.4 % | **11.4 %** | 166.36 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDSN36540XP | 439.00 € | **444.90 €** | 10.5 % | **12.0 %** | 445.00 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro Apple iPad FIXTRI-727-BK | 32.90 € | **38.50 €** | 6.6 % | **24.7 %** | 38.60 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 321.00 € | **326.50 €** | 9.8 % | **11.6 %** | 326.61 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 323.50 € | **328.90 €** | 8.0 % | **9.8 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj LaserPecker LP2 Plus | 994.90 € | **1000.00 €** | 20.9 % | **21.5 %** | 1000.40 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 220A | 190.50 € | **195.50 €** | 6.0 % | **8.8 %** | 195.70 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8000mAh 11.1V 100C 3S1P Lipo Battery... | 60.50 € | **65.50 €** | 14.4 % | **23.9 %** | 65.75 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 318.00 € | **323.00 €** | 6.3 % | **8.0 %** | 323.30 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E15 | 283.00 € | **288.00 €** | 6.1 % | **8.0 %** | 288.30 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 466.00 € | **471.00 €** | 10.0 % | **11.2 %** | 471.47 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Hurricane H7 Plus | 155.50 € | **160.00 €** | 5.8 % | **8.9 %** | 160.20 € | cena podľa najlacnejšieho iného predajcu |
| LiPo Gens ace G-Tech 4000mAh 2S2P 7,4V 60C batéria | 21.50 € | **26.00 €** | 16.1 % | **40.4 %** | 26.20 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10W | 310.50 € | **315.00 €** | 6.4 % | **8.0 %** | 315.30 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2100 Mikrovlnná trouba s grilem | 107.50 € | **111.50 €** | 9.8 % | **13.9 %** | 111.52 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 240.00 € | **244.00 €** | 6.2 % | **8.0 %** | 244.10 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 194.50 € | **198.50 €** | 6.8 % | **9.0 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 151.50 € | **155.50 €** | 6.0 % | **8.8 %** | 155.70 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 273.00 € | **277.00 €** | 9.9 % | **11.5 %** | 277.25 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 187.50 € | **191.50 €** | 13.9 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 187.50 € | **191.50 €** | 13.9 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 163.50 € | **167.50 €** | 6.2 % | **8.8 %** | 167.80 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **560.90 €** | 6.6 % | **7.3 %** | 561.00 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 168.90 € | **172.50 €** | 6.6 % | **8.9 %** | 172.60 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 117.90 € | **121.50 €** | 11.4 % | **14.8 %** | 121.77 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 122.00 € | **125.50 €** | 8.0 % | **11.1 %** | 125.63 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 208.50 € | **212.00 €** | 6.0 % | **7.7 %** | 212.17 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT86325VI | 195.50 € | **199.00 €** | 6.6 % | **8.6 %** | 199.30 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 89.50 € | **93.00 €** | 30.5 % | **35.6 %** | 93.31 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 131.00 € | **134.50 €** | 8.5 % | **11.4 %** | 134.83 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2501.50 € | **2505.00 €** | 13.8 % | **13.9 %** | 2505.36 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 324.50 € | **328.00 €** | 6.6 % | **7.7 %** | 328.40 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 161.00 € | **164.50 €** | 6.1 % | **8.4 %** | 164.90 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 459.50 € | **463.00 €** | 6.0 % | **6.8 %** | 463.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, teplá bie... | 11.50 € | **14.90 €** | 49.6 % | **93.8 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 186.90 € | **190.00 €** | 7.0 % | **8.8 %** | 190.40 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 358.50 € | **361.50 €** | 6.0 % | **6.9 %** | 361.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 64.00 € | **67.00 €** | 32.5 % | **38.7 %** | 67.15 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R45 eXtremo Black Red | 67.50 € | **70.50 €** | 9.4 % | **14.3 %** | 70.66 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 199.00 € | **202.00 €** | 10.0 % | **11.6 %** | 202.20 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool W7F HP33 A | 324.50 € | **327.50 €** | 7.0 % | **8.0 %** | 327.70 € | cena podľa najlacnejšieho iného predajcu |
| G3ferrari G1018100 Horkovzdušná fritéza | 168.50 € | **171.50 €** | 5.9 % | **7.8 %** | 171.90 € | cena podľa najlacnejšieho iného predajcu |
| ETA Aquabelo 1264 90000, černý/bílý | 41.90 € | **44.50 €** | 6.0 % | **12.6 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 154.50 € | **157.00 €** | 6.1 % | **7.8 %** | 157.05 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 1300mAh 11.1V 30C 3S1P Lipo ... | 12.50 € | **15.00 €** | 5.6 % | **26.8 %** | 15.37 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1438.50 € | **1440.90 €** | 7.0 % | **7.2 %** | 1440.98 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 59.50 € | **61.90 €** | 19.9 % | **24.7 %** | 61.92 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 25.90 € | **28.00 €** | 20.9 % | **30.7 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 93.90 € | **95.90 €** | 9.9 % | **12.3 %** | 95.92 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 22.90 € | **24.90 €** | 6.1 % | **15.3 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 28.00 € | **30.00 €** | 9.1 % | **16.9 %** | 30.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 49.50 € | **51.50 €** | 32.8 % | **38.2 %** | 51.83 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 14.8V 30C 4S1P Lipo ... | 24.00 € | **26.00 €** | 11.6 % | **20.9 %** | 26.46 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 310.00 € | **312.00 €** | 22.1 % | **22.9 %** | 312.47 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 127.00 € | **129.00 €** | 8.0 % | **9.8 %** | 129.50 € | cena podľa najlacnejšieho iného predajcu |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 28.00 € | **29.90 €** | 5.2 % | **12.4 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 317.00 € | **318.90 €** | 5.9 % | **6.6 %** | 319.00 € | cena podľa najlacnejšieho iného predajcu |
| Zapichovacie LED snehové vločky Solight 1V281, 15 LE... | 7.70 € | **9.40 €** | 18.1 % | **44.2 %** | 9.45 € | cena podľa najlacnejšieho iného predajcu |
| ETA Nubela 2569 90100, bílý | 26.90 € | **28.50 €** | 48.0 % | **56.8 %** | 28.66 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 4631 | 132.90 € | **134.50 €** | 7.2 % | **8.4 %** | 134.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.80 € | **9.30 €** | 34.9 % | **60.9 %** | 9.38 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP16 PM FIXVM-1403-BK | 34.00 € | **35.50 €** | 10.1 % | **15.0 %** | 35.51 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1017.50 € | **1019.00 €** | 10.4 % | **10.6 %** | 1019.32 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 42.50 € | **44.00 €** | 9.8 % | **13.7 %** | 44.42 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 42.50 € | **44.00 €** | 38.6 % | **43.5 %** | 44.47 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 14.50 € | **16.00 €** | 36.1 % | **50.2 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMK38HU0B | 227.50 € | **228.90 €** | 7.4 % | **8.0 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 49B8G-S | 317.50 € | **318.90 €** | 9.9 % | **10.4 %** | 319.00 € | cena podľa najlacnejšieho iného predajcu |
| Strieborná závesná LED vianočná hviezda Solight 1V29... | 6.70 € | **7.90 €** | 46.4 % | **72.7 %** | 7.96 € | cena podľa najlacnejšieho iného predajcu |
| Zlatá závesná LED vianočná hviezda Solight 1V295, 60... | 6.70 € | **7.90 €** | 46.4 % | **72.7 %** | 7.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C + USB-A fast charger GaN 20 W PD | 7.80 € | **9.00 €** | 47.1 % | **69.8 %** | 9.09 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 108.90 € | **110.00 €** | 13.0 % | **14.1 %** | 110.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight PIR interiérový senzor, do krabičky od vypín... | 7.80 € | **8.80 €** | 27.9 % | **44.2 %** | 8.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 13.50 € | **14.50 €** | 43.7 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| Vodný chladič CPU Darkflash DV360S (čierny) | 106.50 € | **107.50 €** | 22.9 % | **24.1 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 768.50 € | **769.50 €** | 40.0 % | **40.2 %** | 769.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 7,2 W, 1521lm, 27... | 4.80 € | **5.80 €** | 45.6 % | **75.9 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Polia, ... | 33.00 € | **34.00 €** | 33.5 % | **37.6 %** | 34.14 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 53.00 € | **54.00 €** | 29.4 % | **31.8 %** | 54.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **12.50 €** | 31.7 % | **43.1 %** | 12.66 € | cena podľa najlacnejšieho iného predajcu |
| BEKO HII64500UFT | 359.00 € | **360.00 €** | 6.8 % | **7.1 %** | 360.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A25 5G FIXOP3-1261-BK | 12.00 € | **13.00 €** | 12.4 % | **21.8 %** | 13.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 13.50 € | **14.50 €** | 35.2 % | **45.2 %** | 14.77 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 40 | 251.50 € | **252.50 €** | 11.2 % | **11.6 %** | 252.78 € | cena podľa najlacnejšieho iného predajcu |
| Matt for litter box Baymax / Baymax Lite Catlink CL-... | 27.00 € | **28.00 €** | 14.8 % | **19.1 %** | 28.29 € | cena podľa najlacnejšieho iného predajcu |
| Subwoofer Edifier Airpulse SW8 (čierny) | 326.00 € | **327.00 €** | 10.7 % | **11.0 %** | 327.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárny reflektor so senzorom, 6W, 660lm... | 12.00 € | **13.00 €** | 29.9 % | **40.7 %** | 13.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 48.00 € | **49.00 €** | 34.4 % | **37.2 %** | 49.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 12.00 € | **13.00 €** | 38.8 % | **50.3 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 28.50 € | **29.50 €** | 38.3 % | **43.1 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BMGB25332BG | 176.00 € | **176.90 €** | 8.1 % | **8.7 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.00 € | **25.90 €** | 48.9 % | **54.3 %** | 25.93 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná krajinka s domčekom Solight 1V264, 18 c... | 5.80 € | **6.60 €** | 26.8 % | **44.2 %** | 6.63 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer T4U Plus AC 1300 Dual Band... | 25.90 € | **26.50 €** | 5.5 % | **8.0 %** | 26.54 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat VIOLA 2 černé | 41.00 € | **41.50 €** | 26.4 % | **27.9 %** | 41.51 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto+ Looper multi-session looper pedal | 157.00 € | **157.50 €** | 12.8 % | **13.2 %** | 157.51 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 344.00 € | **344.50 €** | 27.6 % | **27.8 %** | 344.52 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.00 € | **89.50 €** | 39.1 % | **39.9 %** | 89.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 12.00 € | **12.50 €** | 31.8 % | **37.3 %** | 12.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.00 € | **18.50 €** | 34.1 % | **37.9 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC500 2 Mpx, vonkajšia, IP P... | 30.00 € | **30.50 €** | 6.4 % | **8.1 %** | 30.55 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.00 € | **78.50 €** | 8.7 % | **9.4 %** | 78.56 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1379.50 € | **1380.00 €** | 11.3 % | **11.4 %** | 1380.08 € | cena podľa najlacnejšieho iného predajcu |
| LED snehuliak Solight 1V257, 26 cm, 6 LED, 3 × AA, IP20 | 13.50 € | **14.00 €** | 38.8 % | **43.9 %** | 14.11 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 72.00 € | **72.50 €** | 19.0 % | **19.9 %** | 72.61 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 826.00 € | **826.50 €** | 26.8 % | **26.9 %** | 826.61 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.00 € | **15.50 €** | 5.2 % | **8.7 %** | 15.68 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.00 € | **10.50 €** | 28.8 % | **35.3 %** | 10.72 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC022X | 16.50 € | **17.00 €** | 8.1 % | **11.4 %** | 17.25 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 277.00 € | **277.50 €** | 52.4 % | **52.7 %** | 277.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXRBM-1402-RA | 17.00 € | **17.50 €** | 10.1 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17A FIXSHM-1601-TR | 17.00 € | **17.50 €** | 10.1 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný veniec Solight 1V297, 30 cm, 10... | 15.50 € | **16.00 €** | 47.0 % | **51.8 %** | 16.27 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 962.50 € | **963.00 €** | 16.0 % | **16.1 %** | 963.29 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 477.00 € | **477.50 €** | 6.8 % | **7.0 %** | 477.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.00 € | **10.50 €** | 26.6 % | **33.0 %** | 10.81 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor Pad 8 FIXTOT-1145 | 15.00 € | **15.50 €** | 18.5 % | **22.5 %** | 15.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 14.50 € | **15.00 €** | 42.4 % | **47.3 %** | 15.33 € | cena podľa najlacnejšieho iného predajcu |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 135.50 € | **136.00 €** | 13.0 % | **13.4 %** | 136.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s rádiom a budíkom | 21.00 € | **21.50 €** | 44.1 % | **47.5 %** | 21.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 22.00 € | **22.50 €** | 39.5 % | **42.7 %** | 22.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.00 € | **28.50 €** | 34.8 % | **37.2 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 12.00 € | **12.50 €** | 31.1 % | **36.6 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.50 € | **47.00 €** | 34.4 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 126.50 € | **127.00 €** | 10.3 % | **10.7 %** | 127.50 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 194.50 € | **194.90 €** | 7.0 % | **7.2 %** | 194.91 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 248.50 € | **248.90 €** | 73.2 % | **73.5 %** | 248.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.50 € | **78.90 €** | 25.0 % | **25.6 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 78.50 € | **78.90 €** | 8.1 % | **8.6 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 195.50 € | **195.90 €** | 8.7 % | **8.9 %** | 196.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.90 €** | 33.4 % | **38.0 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.50 € | **11.90 €** | 6.9 % | **10.6 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 8.80 € | **9.20 €** | 31.8 % | **37.7 %** | 9.23 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.50 € | **369.90 €** | 7.0 % | **7.1 %** | 370.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 18W... | 4.80 € | **5.10 €** | 35.5 % | **44.0 %** | 5.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 5,0 W, 1055lm, 27... | 4.80 € | **5.10 €** | 72.7 % | **83.5 %** | 5.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.10 € | **7.30 €** | 41.5 % | **45.5 %** | 7.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.80 € | **5.00 €** | 73.4 % | **80.7 %** | 5.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NX6000D | 572.90 € | **573.00 €** | 40.5 % | **40.5 %** | 573.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| MOES TV02 Termostatická hlavica s LCD displejom a te... | 41.90 € | **42.00 €** | 80.3 % | **80.8 %** | 42.01 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RACING SRP2 Zadný držiak | 41.90 € | **42.00 €** | 14.8 % | **15.1 %** | 42.09 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 17.90 € | **18.00 €** | 22.7 % | **23.4 %** | 18.23 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **17.00 €** | 34.2 % | **35.0 %** | 17.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED čelová nabíjacia svietidlo, 250lm, teplé... | 6.80 € | **6.90 €** | 40.3 % | **42.4 %** | 6.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný napájací zdroj k LED panelom | 5.80 € | **5.90 €** | 30.3 % | **32.5 %** | 5.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 24W... | 5.80 € | **5.90 €** | 43.3 % | **45.8 %** | 5.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.80 € | **7.90 €** | 33.8 % | **35.5 %** | 7.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 3.80 € | **3.90 €** | 41.7 % | **45.4 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.20 € | **4.30 €** | 41.1 % | **44.5 %** | 4.32 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent white | 228.90 € | **229.00 €** | 16.3 % | **16.4 %** | 229.04 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 228.90 € | **229.00 €** | 16.3 % | **16.4 %** | 229.04 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 228.90 € | **229.00 €** | 16.3 % | **16.4 %** | 229.04 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 228.90 € | **229.00 €** | 16.3 % | **16.4 %** | 229.04 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 104.90 € | **105.00 €** | 19.0 % | **19.1 %** | 105.05 € | cena podľa najlacnejšieho iného predajcu |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 194.90 € | **195.00 €** | 8.2 % | **8.3 %** | 195.09 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (191)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Johansson 6700 Revolution programovatelný zesilovač | 359.00 € | **265.00 €** | 43.0 % | **5.5 %** | 265.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná samočistiaca búda PetKit Purobot ULTRA ... | 895.50 € | **817.90 €** | 15.0 % | **5.0 %** | 743.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vibračný tester Uni-T UT315A | 388.50 € | **316.00 €** | 44.7 % | **17.7 %** | 316.29 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 378.50 € | **317.50 €** | 30.0 % | **9.0 %** | 317.89 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 391.00 € | **341.90 €** | 36.5 % | **19.3 %** | 341.99 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 248.50 € | **200.00 €** | 31.7 % | **6.0 %** | 200.39 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 283.50 € | **243.90 €** | 24.0 % | **6.7 %** | 244.00 € | cena podľa najlacnejšieho iného predajcu |
| Teleobjektív Freewell 3x 17 mm | 196.90 € | **161.50 €** | 28.1 % | **5.1 %** | 155.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vibračný tester Uni-T UT311A | 287.50 € | **255.00 €** | 34.4 % | **19.2 %** | 255.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 718.50 € | **692.00 €** | 17.2 % | **12.9 %** | 692.39 € | cena podľa najlacnejšieho iného predajcu |
| Klark Teknik 2A-KT tube leveling amplifier | 359.00 € | **332.90 €** | 15.0 % | **6.6 %** | 333.00 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 179.50 € | **153.50 €** | 39.0 % | **18.9 %** | 153.90 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 263.50 € | **238.00 €** | 23.4 % | **11.5 %** | 238.19 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Rozšiřující set 3 | 54.00 € | **30.50 €** | 126.4 % | **27.9 %** | 30.57 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 106.50 € | **86.90 €** | 49.0 % | **21.6 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing Vision GS RS064 (PC) | 748.50 € | **729.00 €** | 18.1 % | **15.0 %** | 729.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné fotochromatické slnečné okuliare BlitzW... | 76.00 € | **57.00 €** | 51.7 % | **13.8 %** | 57.04 € | cena podľa najlacnejšieho iného predajcu |
| 4-kanálový teplomer Uni-T UT325F | 115.50 € | **98.00 €** | 27.2 % | **7.9 %** | 98.09 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 203.00 € | **185.50 €** | 16.7 % | **6.6 %** | 185.79 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 238.90 € | **222.90 €** | 43061.7 % | **40171.0 %** | 223.00 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 164.90 € | **149.50 €** | 25.7 % | **14.0 %** | 149.73 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 143.00 € | **128.50 €** | 19.3 % | **7.2 %** | 128.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 157.50 € | **143.50 €** | 18.3 % | **7.8 %** | 143.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 173.90 € | **160.00 €** | 17.5 % | **8.1 %** | 160.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 139.00 € | **127.00 €** | 27.5 % | **16.5 %** | 127.09 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 671.90 € | **659.90 €** | 121291.1 % | **119123.1 %** | 660.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 352.00 € | **340.50 €** | 24.3 % | **20.3 %** | 340.69 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 129.00 € | **118.00 €** | 43.3 % | **31.1 %** | 118.39 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 106.90 € | **96.00 €** | 24.9 % | **12.2 %** | 96.25 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 197.50 € | **187.00 €** | 17.4 % | **11.1 %** | 187.29 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi Smart Projector L1 EU | 219.90 € | **209.90 €** | 10.1 % | **5.1 %** | 169.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 111.00 € | **101.00 €** | 17.6 % | **7.0 %** | 101.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 111.00 € | **101.00 €** | 25.0 % | **13.8 %** | 101.39 € | cena podľa najlacnejšieho iného predajcu |
| POCO F9 PRO 12/256GB Black | 753.90 € | **744.00 €** | 6.4 % | **5.0 %** | 661.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vibračný tester Uni-T UT312A | 299.50 € | **290.00 €** | 29.1 % | **25.0 %** | 290.09 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 99.00 € | **89.50 €** | 26.9 % | **14.8 %** | 89.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 99.00 € | **89.50 €** | 26.0 % | **13.9 %** | 89.69 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 73.00 € | **63.90 €** | 34.5 % | **17.7 %** | 63.99 € | cena podľa najlacnejšieho iného predajcu |
| Ariete MySlush & IceCream 655 | 199.90 € | **190.90 €** | 10.1 % | **5.2 %** | 164.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 91.90 € | **83.00 €** | 17.2 % | **5.9 %** | 83.19 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 černá | 71.90 € | **63.00 €** | 28.9 % | **12.9 %** | 63.20 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 87.50 € | **79.00 €** | 26.2 % | **13.9 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 160.00 € | **151.90 €** | 25.2 % | **18.9 %** | 151.99 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 323.00 € | **315.00 €** | 9.9 % | **7.2 %** | 315.39 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 91.00 € | **83.50 €** | 38.7 % | **27.3 %** | 83.59 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 92.00 € | **85.50 €** | 15.0 % | **6.9 %** | 85.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 240.50 € | **234.00 €** | 9.7 % | **6.7 %** | 234.39 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia Uni-T RCD UT582+ | 107.00 € | **101.00 €** | 17.4 % | **10.9 %** | 101.09 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 59.50 € | **54.00 €** | 24.5 % | **13.0 %** | 54.09 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 44.00 € | **38.50 €** | 34.5 % | **17.7 %** | 38.69 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 107.50 € | **102.00 €** | 11.7 % | **6.0 %** | 102.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 474.50 € | **469.00 €** | 9.6 % | **8.4 %** | 469.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 935.50 € | **930.00 €** | 18.9 % | **18.2 %** | 930.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 82.90 € | **77.50 €** | 42.5 % | **33.2 %** | 77.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 38.00 € | **33.00 €** | 23.4 % | **7.2 %** | 33.29 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 107.00 € | **102.00 €** | 16.2 % | **10.8 %** | 102.29 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 57.50 € | **52.50 €** | 15.4 % | **5.4 %** | 52.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 66.50 € | **61.50 €** | 24.0 % | **14.7 %** | 61.79 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 83.00 € | **78.00 €** | 28.1 % | **20.4 %** | 78.35 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 298.50 € | **293.50 €** | 48.2 % | **45.8 %** | 293.89 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S AI | 64.50 € | **59.50 €** | 39.1 % | **28.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9286IB | 248.90 € | **244.00 €** | 7.6 % | **5.5 %** | 244.39 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 340.90 € | **336.00 €** | 18.0 % | **16.3 %** | 336.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 21.00 € | **16.50 €** | 70.1 % | **33.6 %** | 16.59 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.50 € | **26.00 €** | 42.5 % | **21.5 %** | 26.19 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1287.50 € | **1283.00 €** | 7.6 % | **7.2 %** | 1283.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 166.00 € | **161.50 €** | 23.8 % | **20.5 %** | 161.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 86.90 € | **82.50 €** | 40.2 % | **33.1 %** | 82.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 159.00 € | **155.00 €** | 12.9 % | **10.1 %** | 155.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 138.50 € | **134.50 €** | 21.1 % | **17.6 %** | 134.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 20.00 € | **16.00 €** | 33.0 % | **6.4 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight sušiak na topánky | 22.00 € | **18.50 €** | 27.0 % | **6.8 %** | 17.74 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Upevnenie príslušenstva PGYTECH Magic Arm (P-CG-009)... | 22.00 € | **18.50 €** | 41.1 % | **18.6 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 120.50 € | **117.00 €** | 24391.9 % | **23680.5 %** | 117.39 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 37.50 € | **34.00 €** | 20.9 % | **9.6 %** | 34.39 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 124.00 € | **120.90 €** | 7.9 % | **5.2 %** | 120.99 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 147.00 € | **144.00 €** | 55.4 % | **52.2 %** | 144.20 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 38.50 € | **35.50 €** | 27.1 % | **17.2 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 115.00 € | **112.00 €** | 8.9 % | **6.1 %** | 112.39 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI FNB48P BT Tester USB portov s Bluetooth | 37.00 € | **34.00 €** | 14.3 % | **5.1 %** | 34.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT665P-5m endoskop | 45.00 € | **42.00 €** | 32.7 % | **23.8 %** | 42.39 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 49.00 € | **46.00 €** | 14.8 % | **7.8 %** | 46.49 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 49.00 € | **46.00 €** | 14.8 % | **7.8 %** | 46.49 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK M7000 4G LTE WiFi 4G Modem | 58.90 € | **56.00 €** | 10.5 % | **5.0 %** | 50.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy CA38F2K7NXBB | 138.50 € | **135.90 €** | 14.9 % | **12.8 %** | 135.99 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E4GK1-4GB | 38.00 € | **35.50 €** | 12.5 % | **5.1 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vlákno CREALITY PLA Jahoda (červená) | 19.00 € | **16.50 €** | 35.9 % | **18.0 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 11.50 € | **9.00 €** | 41.2 % | **10.5 %** | 9.09 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Ottocast CA525-T3 | 30.00 € | **27.50 €** | 34.5 % | **23.3 %** | 27.69 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 84.50 € | **82.00 €** | 11.8 % | **8.5 %** | 82.19 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10S | 343.00 € | **340.50 €** | 7.0 % | **6.2 %** | 340.69 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny statív PGYTECH MANTISPOD Z | 49.50 € | **47.00 €** | 33.1 % | **26.4 %** | 47.25 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 81.50 € | **79.00 €** | 10.8 % | **7.4 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový časovač WiFi Meross MRS100HK(E... | 27.50 € | **25.00 €** | 37.6 % | **25.1 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 179.50 € | **177.00 €** | 16.0 % | **14.3 %** | 177.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.00 € | **11.50 €** | 42.3 % | **16.9 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 14.00 € | **11.50 €** | 31.0 % | **7.6 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer XENYX 1002SFX  prémiový analógový 10-vstup... | 100.00 € | **97.50 €** | 15.0 % | **12.1 %** | 97.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer XENYX 802S 8-kanálový analógový mixpult s ... | 79.00 € | **76.50 €** | 15.0 % | **11.4 %** | 76.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 31.90 € | **29.50 €** | 14.7 % | **6.0 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE Mělký plech 222709/242132 | 17.00 € | **15.00 €** | 29.3 % | **14.1 %** | 15.19 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (červený) | 14.00 € | **12.00 €** | 35.0 % | **15.7 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 45.00 € | **43.00 €** | 16.5 % | **11.3 %** | 43.39 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA CD-S303 BLACK | 377.00 € | **375.00 €** | 5.9 % | **5.3 %** | 375.39 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony PGYTECH 55 cm (P-GM-101) | 17.00 € | **15.00 €** | 52.9 % | **34.9 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 24.90 € | **23.00 €** | 20.9 % | **11.7 %** | 23.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 8.80 € | **7.10 €** | 71.2 % | **38.1 %** | 7.15 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 420.50 € | **418.90 €** | 12.2 % | **11.8 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 88.00 € | **86.50 €** | 16.6 % | **14.6 %** | 86.59 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 572.00 € | **570.50 €** | 29.7 % | **29.4 %** | 570.62 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX30U Plus AX 1800 adaptér... | 26.00 € | **24.50 €** | 13.4 % | **6.9 %** | 24.65 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Struhadlo 4 v 1 COMFORTLINE | 14.00 € | **12.50 €** | 29.0 % | **15.2 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 133.50 € | **132.00 €** | 16.9 % | **15.6 %** | 132.29 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Linomatic 500 Easy 85286 | 97.50 € | **96.00 €** | 7.4 % | **5.8 %** | 96.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 85.00 € | **83.50 €** | 9.7 % | **7.8 %** | 83.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.50 € | **35.00 €** | 16.2 % | **11.4 %** | 35.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.50 € | **35.00 €** | 26.8 % | **21.6 %** | 35.39 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 34.00 € | **32.50 €** | 40.0 % | **33.8 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.50 € | **58.00 €** | 37.3 % | **33.8 %** | 58.43 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.50 € | **40.00 €** | 11.4 % | **7.4 %** | 40.49 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 67.50 € | **66.00 €** | 19.7 % | **17.0 %** | 66.49 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.50 € | **70.00 €** | 15.4 % | **13.0 %** | 70.49 € | cena podľa najlacnejšieho iného predajcu |
| Zacvakávacia doska PGYTECH Arcs-Swiss (P-CG-013) | 13.50 € | **12.00 €** | 33.0 % | **18.3 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 29.00 € | **28.00 €** | 18.1 % | **14.0 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu |
| Statív Mini PGYTECH s nadstavcom pre vreckové / akčn... | 29.00 € | **28.00 €** | 28.3 % | **23.9 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.50 € | **17.50 €** | 13.6 % | **7.5 %** | 17.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **24.50 €** | 19.5 % | **14.8 %** | 24.72 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 181.50 € | **180.50 €** | 23.0 % | **22.3 %** | 180.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 273.00 € | **272.00 €** | 7.2 % | **6.8 %** | 272.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 254.00 € | **253.00 €** | 6.1 % | **5.7 %** | 253.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 658.00 € | **657.00 €** | 5.9 % | **5.8 %** | 657.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 73.50 € | **72.50 €** | 9.9 % | **8.4 %** | 72.89 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 28.50 € | **27.50 €** | 18.4 % | **14.2 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 35.00 € | **34.00 €** | 45.8 % | **41.6 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 107.90 € | **107.00 €** | 41.5 % | **40.3 %** | 107.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 9.20 € | **8.30 €** | 37.0 % | **23.6 %** | 8.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **22.00 €** | 38.1 % | **32.7 %** | 22.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.90 € | **19.00 €** | 37.7 % | **31.5 %** | 19.48 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-M, 5 m, v... | 5.70 € | **5.00 €** | 41.3 % | **23.9 %** | 5.09 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C206 IP, 2MPx, WiFi, prísvit | 34.50 € | **33.90 €** | 7.4 % | **5.5 %** | 33.98 € | cena podľa najlacnejšieho iného predajcu |
| MAXXO VC 1800 | 24.50 € | **23.90 €** | 16.2 % | **13.4 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 32.50 € | **31.90 €** | 41.8 % | **39.1 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 10.00 € | **9.40 €** | 25.5 % | **17.9 %** | 9.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.50 € | **4.90 €** | 33.1 % | **18.6 %** | 4.99 € | cena podľa najlacnejšieho iného predajcu |
| Ochranná puzzle podložka ONE FItness MP10 modro-šedá | 25.00 € | **24.50 €** | 8.6 % | **6.5 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 18.00 € | **17.50 €** | 28.1 % | **24.6 %** | 17.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.70 € | **5.20 €** | 32.0 % | **20.4 %** | 5.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 37.4 % | **34.1 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 23.5 % | **20.5 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.00 € | **21.50 €** | 10.1 % | **7.6 %** | 21.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 57.00 € | **56.50 €** | 13.2 % | **12.3 %** | 56.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 57.00 € | **56.50 €** | 13.2 % | **12.2 %** | 56.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 57.00 € | **56.50 €** | 19.9 % | **18.8 %** | 56.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **22.50 €** | 14.0 % | **11.5 %** | 22.78 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 12.00 € | **11.50 €** | 34.8 % | **29.1 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.00 € | **47.50 €** | 12.6 % | **11.5 %** | 47.79 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.00 € | **47.50 €** | 14.9 % | **13.7 %** | 47.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.50 € | **33.00 €** | 18.6 % | **16.9 %** | 33.30 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 20.00 € | **19.50 €** | 11.8 % | **9.0 %** | 19.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.50 € | **12.00 €** | 36.4 % | **31.0 %** | 12.35 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 40.00 € | **39.50 €** | 6.7 % | **5.4 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 120.00 € | **119.50 €** | 12.0 % | **11.5 %** | 119.89 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3237 | 23.00 € | **22.50 €** | 9.9 % | **7.5 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 308.00 € | **307.50 €** | 27.1 % | **26.9 %** | 307.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 43.00 € | **42.50 €** | 46.0 % | **44.3 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| TC ELECTRONIC DITTO 2 LOOPER Druhá generácia DITTO L... | 99.00 € | **98.50 €** | 15.0 % | **14.4 %** | 98.90 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 60.50 € | **60.00 €** | 10.2 % | **9.3 %** | 60.49 € | cena podľa najlacnejšieho iného predajcu |
| Záhradné elektromagnetické ventily AC 1 " RainPoint | 16.50 € | **16.00 €** | 41.1 % | **36.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 4.10 € | **3.60 €** | 31.8 % | **15.7 %** | 3.69 € | cena podľa najlacnejšieho iného predajcu |
| Ratanová LED hviezda Solight 1V246, 40 cm, 40 LED, 2... | 3.70 € | **3.30 €** | 34.3 % | **19.8 %** | 3.39 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic EDT 100S | 15.90 € | **15.50 €** | 15.0 % | **12.1 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.80 €** | 38.1 % | **34.6 %** | 7.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.20 € | **2.00 €** | 35.5 % | **23.2 %** | 2.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.60 € | **5.40 €** | 45.5 % | **40.3 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 314.00 € | **313.90 €** | 5.1 % | **5.1 %** | 313.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic TG V35 s Dynamický mikrofon | 59.00 € | **58.90 €** | 38.5 % | **38.2 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.60 € | **3.50 €** | 59.9 % | **55.5 %** | 3.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 4000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **10.90 €** | 26.0 % | **24.8 %** | 10.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.70 €** | 31.8 % | **29.1 %** | 4.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.80 € | **2.70 €** | 31.6 % | **26.9 %** | 2.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.00 € | **11.90 €** | 41.0 % | **39.8 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Detektor drôtov UNI-T UT25CL | 141.00 € | **140.90 €** | 12.9 % | **12.8 %** | 140.99 € | cena podľa najlacnejšieho iného predajcu |

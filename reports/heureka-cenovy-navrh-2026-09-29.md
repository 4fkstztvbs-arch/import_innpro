# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-29

Vstup: `premiumstore-sk_2026-09-29_14-04.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7107**
- Návrh **zvýšiť** cenu: **244** produktov
- Návrh **znížiť** cenu: **246** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6617** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **21**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **511**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (244)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 865.50 € | **1136.90 €** | 14.1 % | **49.9 %** | 1137.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 760.00 € | **1016.90 €** | 8.5 % | **45.2 %** | 1017.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **250.50 €** | 14.5 % | **544.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 462.50 € | **619.50 €** | 7.1 % | **43.5 %** | 619.66 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 306.00 € | **395.00 €** | 10.7 % | **42.9 %** | 395.38 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 375.00 € | **458.50 €** | 11.7 % | **36.6 %** | 458.60 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint MetroX Pro Standard | 1176.00 € | **1245.50 €** | 15.7 % | **22.5 %** | 1245.59 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare RayNeo X3 Pro AR | 1522.90 € | **1587.50 €** | 13.0 % | **17.8 %** | 1587.69 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T68243WCSHBC | 435.50 € | **493.00 €** | 10.2 % | **24.7 %** | 493.05 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 396.00 € | **453.00 €** | 7.3 % | **22.8 %** | 453.04 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 499.50 € | **552.00 €** | 8.6 % | **20.0 %** | 552.25 € | cena podľa najlacnejšieho iného predajcu |
| Sada panelov Moza Racing FMP18 | 913.00 € | **964.50 €** | 15.0 % | **21.5 %** | 964.75 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1086.00 € | **1135.90 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 999.90 € | **1046.50 €** | 16.9 % | **22.3 %** | 1046.83 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 24 GS2401 | 480.00 € | **525.00 €** | 9.2 % | **19.5 %** | 525.08 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT1302 (2.5K) | 402.50 € | **443.00 €** | 29.5 % | **42.5 %** | 443.08 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 16 GT156 | 402.50 € | **443.00 €** | 14.0 % | **25.5 %** | 443.08 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 318.50 € | **358.50 €** | 10.9 % | **24.8 %** | 358.88 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 795.50 € | **835.00 €** | 16.9 % | **22.8 %** | 835.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 863.00 € | **902.50 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Ultima Poseidon E40 | 391.00 € | **429.00 €** | 11.6 % | **22.5 %** | 429.04 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 784.00 € | **819.90 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 418.00 € | **452.50 €** | 12.8 % | **22.1 %** | 452.58 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 684.00 € | **717.90 €** | 6.0 % | **11.3 %** | 718.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 504.50 € | **538.00 €** | 7.5 % | **14.7 %** | 538.12 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 496.50 € | **530.00 €** | 15.4 % | **23.2 %** | 530.38 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 471.50 € | **504.90 €** | 12.1 % | **20.1 %** | 504.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 365.50 € | **398.90 €** | 9.2 % | **19.2 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T25B2 | 376.00 € | **409.00 €** | 16.0 % | **26.2 %** | 409.43 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 448.00 € | **479.50 €** | 8.0 % | **15.6 %** | 479.74 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 584.90 € | **614.50 €** | 32.6 % | **39.3 %** | 614.86 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 646.00 € | **675.50 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko TB622ECWCS | 315.50 € | **344.50 €** | 9.9 % | **20.0 %** | 344.63 € | cena podľa najlacnejšieho iného predajcu |
| Koleso MOZA RS068 FSR V2 (PC) | 647.00 € | **674.50 €** | 9.7 % | **14.3 %** | 674.67 € | cena podľa najlacnejšieho iného predajcu |
| 3D Tlačiareň Creality CR-10 SE | 188.00 € | **215.50 €** | 14.1 % | **30.8 %** | 215.70 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 235 | 444.50 € | **469.00 €** | 6.4 % | **12.2 %** | 469.40 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 596.00 € | **620.00 €** | 8.4 % | **12.8 %** | 620.42 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 604.50 € | **626.00 €** | 13.5 % | **17.5 %** | 626.39 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2017500 | 219.50 € | **240.50 €** | 5.1 % | **15.1 %** | 240.90 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 331.50 € | **350.00 €** | 7.6 % | **13.6 %** | 350.20 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 352B | 568.00 € | **586.00 €** | 10.0 % | **13.5 %** | 586.08 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 135.90 € | **153.90 €** | 5.3 % | **19.2 %** | 154.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA – príslušenstvo | 51.90 € | **69.50 €** | 15.1 % | **54.2 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 580.50 € | **597.50 €** | 6.2 % | **9.4 %** | 597.56 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 145.00 € | **161.50 €** | 8.1 % | **20.3 %** | 161.79 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 296.50 € | **312.50 €** | 12.0 % | **18.0 %** | 312.61 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-165W parabolický odrazový dáždnik | 69.50 € | **84.00 €** | 15.0 % | **38.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Ninja FB151EUWH Frost Vault 47l | 226.00 € | **240.00 €** | 6.6 % | **13.2 %** | 240.42 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 177.00 € | **190.90 €** | 11.1 % | **19.8 %** | 190.97 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1836A | 265.50 € | **279.00 €** | 9.8 % | **15.4 %** | 279.42 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1317.50 € | **1329.90 €** | 12.2 % | **13.3 %** | 1330.00 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 480.00 € | **492.00 €** | 13.1 % | **16.0 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 337.00 € | **348.90 €** | 11.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Letecký simulátor MOZA RACING AB6 | 448.00 € | **459.50 €** | 13.4 % | **16.3 %** | 459.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 216.50 € | **228.00 €** | 8.0 % | **13.7 %** | 228.50 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE 150 | 186.00 € | **196.50 €** | 14.9 % | **21.4 %** | 196.59 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 213.50 € | **223.90 €** | 11.2 % | **16.6 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 301.00 € | **310.50 €** | 19.8 % | **23.6 %** | 310.67 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 410.00 € | **419.50 €** | 10.0 % | **12.5 %** | 419.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Lipo With XT6... | 52.50 € | **61.90 €** | 14.6 % | **35.1 %** | 61.92 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V802 PRO 12000mah návnada loď (čierna) | 133.50 € | **142.50 €** | 14.9 % | **22.6 %** | 142.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 322.50 € | **331.00 €** | 9.4 % | **12.3 %** | 331.01 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 224.50 € | **233.00 €** | 18.8 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 224.50 € | **233.00 €** | 18.8 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 258.50 € | **267.00 €** | 6.8 % | **10.4 %** | 267.21 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 221.50 € | **230.00 €** | 18.7 % | **23.3 %** | 230.50 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 182.50 € | **190.50 €** | 11.8 % | **16.7 %** | 190.58 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 371.50 € | **379.50 €** | 9.3 % | **11.6 %** | 379.85 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 129.00 € | **137.00 €** | 12.7 % | **19.6 %** | 137.49 € | cena podľa najlacnejšieho iného predajcu |
| WHIRLPOOL WI 7020 P | 331.00 € | **338.90 €** | 8.0 % | **10.5 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing modul osi Z AS003 | 92.50 € | **100.00 €** | 10.7 % | **19.7 %** | 100.17 € | cena podľa najlacnejšieho iného predajcu |
| Pohybové čidlo ORBIS PROXIMAT | 33.50 € | **41.00 €** | 9.7 % | **34.3 %** | 41.30 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E15 | 284.00 € | **291.50 €** | 5.1 % | **7.9 %** | 291.81 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 544.00 € | **551.50 €** | 9.3 % | **10.8 %** | 551.84 € | cena podľa najlacnejšieho iného predajcu |
| PS5 Stick Module | 25.50 € | **32.90 €** | 11.0 % | **43.3 %** | 32.93 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS520E15W | 257.90 € | **265.00 €** | 5.1 % | **8.0 %** | 265.20 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 198.90 € | **206.00 €** | 6.2 % | **10.0 %** | 206.21 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 321.00 € | **328.00 €** | 9.8 % | **12.2 %** | 328.09 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232 W | 114.50 € | **121.50 €** | 6.8 % | **13.3 %** | 121.77 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 175.50 € | **182.50 €** | 5.2 % | **9.4 %** | 182.81 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 5 Pro 10400 mAh (biela) | 37.50 € | **44.50 €** | 15.6 % | **37.2 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 5 Pro 10400 mAh (oranž... | 37.50 € | **44.50 €** | 15.6 % | **37.2 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir G7 Pro WC Wuchang Edition | 100.00 € | **106.90 €** | 19.6 % | **27.8 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 161.00 € | **167.50 €** | 6.0 % | **10.3 %** | 167.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 210.50 € | **216.50 €** | 6.2 % | **9.2 %** | 216.58 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Indukční vařič, G1013700, jedn | 67.90 € | **73.50 €** | 5.6 % | **14.3 %** | 73.90 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 262.00 € | **267.50 €** | 6.0 % | **8.2 %** | 267.56 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 483.50 € | **488.90 €** | 9.9 % | **11.1 %** | 489.00 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 40 | 243.00 € | **248.00 €** | 6.0 % | **8.2 %** | 248.12 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH6737WH | 114.00 € | **118.90 €** | 9.4 % | **14.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 912.90 € | **917.50 €** | 18.9 % | **19.5 %** | 917.54 € | cena podľa najlacnejšieho iného predajcu |
| Tattu R-Line Version 5.0 850mAh 3S 11.1V 150C XT30U-F | 11.90 € | **16.50 €** | 15.7 % | **60.5 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC517DE0 | 132.90 € | **137.50 €** | 5.2 % | **8.8 %** | 137.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 138.50 € | **143.00 €** | 10.3 % | **13.9 %** | 143.19 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.00 € | **159.50 €** | 5.8 % | **8.9 %** | 159.70 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND-PL 4/8/16/32 Sunnylife pre DJI Min... | 23.00 € | **27.50 €** | 14.7 % | **37.2 %** | 27.85 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 572.50 € | **577.00 €** | 8.0 % | **8.9 %** | 577.40 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 103.50 € | **107.90 €** | 35.7 % | **41.5 %** | 107.93 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 47.90 € | **52.00 €** | 11.3 % | **20.8 %** | 52.14 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 165.50 € | **169.50 €** | 6.1 % | **8.7 %** | 169.58 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 465.50 € | **469.50 €** | 6.0 % | **6.9 %** | 469.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 207.50 € | **211.50 €** | 8.4 % | **10.5 %** | 211.60 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 258.50 € | **262.50 €** | 18.7 % | **20.5 %** | 262.62 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 258.50 € | **262.50 €** | 27.7 % | **29.7 %** | 262.62 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 306.00 € | **310.00 €** | 20.3 % | **21.9 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 306.00 € | **310.00 €** | 19.2 % | **20.7 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO skleněná poklice 18 | 16.00 € | **20.00 €** | 13.4 % | **41.8 %** | 20.19 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 262.00 € | **266.00 €** | 23.3 % | **25.2 %** | 266.21 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 243.00 € | **247.00 €** | 6.2 % | **7.9 %** | 247.30 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 276.50 € | **280.50 €** | 9.9 % | **11.5 %** | 280.81 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 60.50 € | **64.50 €** | 6.2 % | **13.2 %** | 64.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.00 € | **25.00 €** | 15.4 % | **37.3 %** | 25.33 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 308.00 € | **312.00 €** | 6.5 % | **7.9 %** | 312.40 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 243.00 € | **247.00 €** | 7.7 % | **9.5 %** | 247.42 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 163.00 € | **166.90 €** | 6.1 % | **8.6 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 235.00 € | **238.90 €** | 14.7 % | **16.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **560.90 €** | 6.6 % | **7.3 %** | 561.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 305.00 € | **308.90 €** | 14.1 % | **15.5 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 340.90 € | **344.50 €** | 11.2 % | **12.4 %** | 344.81 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Napěňovač mléka, G1017301, 30 | 44.90 € | **48.50 €** | 5.7 % | **14.2 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartmi Evaporative Humidifier 3 Lite | 111.50 € | **115.00 €** | 40.2 % | **44.6 %** | 115.01 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 178.00 € | **181.50 €** | 19.0 % | **21.4 %** | 181.59 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-302 | 54.00 € | **57.50 €** | 44.7 % | **54.0 %** | 57.68 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 18.00 € | **21.50 €** | 12.8 % | **34.8 %** | 21.72 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 505.00 € | **508.50 €** | 34.1 % | **35.0 %** | 508.77 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 247.00 € | **250.50 €** | 15.8 % | **17.4 %** | 250.80 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 99.50 € | **103.00 €** | 33.9 % | **38.6 %** | 103.33 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 132.50 € | **136.00 €** | 8.4 % | **11.2 %** | 136.38 € | cena podľa najlacnejšieho iného predajcu |
| Tefal RK364G10 Coppertinto | 48.50 € | **52.00 €** | 5.7 % | **13.3 %** | 52.40 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 43.00 € | **46.50 €** | 38.5 % | **49.7 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Slate 11 | 326.50 € | **330.00 €** | 36.9 % | **38.3 %** | 330.48 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (biely) | 37.90 € | **40.90 €** | 9.1 % | **17.7 %** | 40.94 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 37.90 € | **40.90 €** | 7.5 % | **16.0 %** | 40.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.00 € | **19.00 €** | 21.6 % | **44.4 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 363.00 € | **366.00 €** | 6.0 % | **6.9 %** | 366.30 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 504.50 € | **507.50 €** | 6.3 % | **7.0 %** | 507.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight teplomer, farba biela | 11.00 € | **14.00 €** | 43.8 % | **83.0 %** | 14.36 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **16.50 €** | 10.5 % | **31.1 %** | 16.61 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 11.1V 30C 3S1P Lipo ... | 18.00 € | **20.50 €** | 13.9 % | **29.7 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.00 € | **33.50 €** | 27.4 % | **37.7 %** | 33.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s rádiom a budíkom | 18.00 € | **20.50 €** | 23.5 % | **40.6 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.50 € | **12.50 €** | 12.8 % | **34.2 %** | 12.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový zvonček a nočné svetielko, do zás... | 4.80 € | **6.80 €** | 19.0 % | **68.6 %** | 6.85 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 51.00 € | **53.00 €** | 5.5 % | **9.6 %** | 53.07 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 4631 | 134.50 € | **136.50 €** | 7.1 % | **8.7 %** | 136.60 € | cena podľa najlacnejšieho iného predajcu |
| Candy ECNBQT3518E Fresco | 474.00 € | **476.00 €** | 5.0 % | **5.5 %** | 476.10 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 230.00 € | **232.00 €** | 7.7 % | **8.6 %** | 232.24 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 224.50 € | **226.50 €** | 6.9 % | **7.9 %** | 226.80 € | cena podľa najlacnejšieho iného predajcu |
| G3ferrari G1018100 Horkovzdušná fritéza | 169.50 € | **171.50 €** | 5.1 % | **6.4 %** | 171.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Senior Retro blesk | 120.00 € | **122.00 €** | 10.1 % | **11.9 %** | 122.40 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 333.50 € | **335.50 €** | 6.3 % | **6.9 %** | 335.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajší LED vianočný stromček Solight 1V290, 68 cm,... | 12.00 € | **14.00 €** | 34.8 % | **57.2 %** | 14.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.00 € | **12.00 €** | 31.8 % | **58.1 %** | 12.48 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS9 – multifunkčný štartér do auta | 87.00 € | **89.00 €** | 45.8 % | **49.2 %** | 89.49 € | cena podľa najlacnejšieho iného predajcu |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 36.00 € | **37.90 €** | 5.3 % | **10.8 %** | 37.92 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.00 € | **36.90 €** | 12.9 % | **19.0 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 35.00 € | **36.90 €** | 11.6 % | **17.7 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 18.90 € | **20.50 €** | 7.2 % | **16.2 %** | 20.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 15.50 € | **17.00 €** | 26.5 % | **38.8 %** | 17.05 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 13.00 € | **14.50 €** | 29.0 % | **43.9 %** | 14.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 9.00 € | **10.50 €** | 22.8 % | **43.2 %** | 10.63 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 52.50 € | **54.00 €** | 5.7 % | **8.7 %** | 54.13 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise rendlík 20 cm | 23.50 € | **25.00 €** | 6.1 % | **12.9 %** | 25.21 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 194.00 € | **195.50 €** | 9.0 % | **9.9 %** | 195.75 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 11.50 € | **13.00 €** | 15.6 % | **30.6 %** | 13.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 16A, USB A+C rychlonabíjačka ... | 12.00 € | **13.50 €** | 16.4 % | **31.0 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.50 € | **12.00 €** | 12.8 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFB 8469 BV EE | 344.50 € | **345.90 €** | 6.6 % | **7.0 %** | 346.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 327.50 € | **328.90 €** | 5.9 % | **6.3 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare XREAL 1S pre rozšírenú realitu | 494.90 € | **496.00 €** | 7.5 % | **7.8 %** | 496.13 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Rýžovar 8 v 1 RK7321F1 | 57.90 € | **59.00 €** | 10.2 % | **12.3 %** | 59.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.80 € | **8.90 €** | 36.4 % | **55.6 %** | 8.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 122.90 € | **124.00 €** | 37.7 % | **38.9 %** | 124.37 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 28.50 € | **29.50 €** | 16.4 % | **20.5 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 110.00 € | **111.00 €** | 14.1 % | **15.1 %** | 111.09 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 11.00 € | **12.00 €** | 13.9 % | **24.3 %** | 12.09 € | cena podľa najlacnejšieho iného predajcu |
| Remoska D52F/10 4l Dua Glass | 134.00 € | **135.00 €** | 7.8 % | **8.6 %** | 135.10 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.50 € | **329.50 €** | 6.5 % | **6.8 %** | 329.60 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAZ5000 Radiomagnetofon | 98.90 € | **99.90 €** | 11.2 % | **12.3 %** | 100.00 € | cena podľa najlacnejšieho iného predajcu |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 15.50 € | **16.50 €** | 6.2 % | **13.0 %** | 16.72 € | cena podľa najlacnejšieho iného predajcu |
| Tefal B5561053 | 13.00 € | **14.00 €** | 5.3 % | **13.4 %** | 14.22 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na zvýšenie výkonu pre pedále CRP2 Moza Raci... | 21.00 € | **22.00 €** | 13.7 % | **19.1 %** | 22.29 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 20 Loop s LCD FIXZENL-20-BK | 23.50 € | **24.50 €** | 9.0 % | **13.6 %** | 24.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 63.50 € | **64.50 €** | 5.6 % | **7.3 %** | 64.83 € | cena podľa najlacnejšieho iného predajcu |
| ETA Aquabelo 1264 90000, černý/bílý | 44.50 € | **45.50 €** | 11.1 % | **13.6 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 104.00 € | **105.00 €** | 11.1 % | **12.2 %** | 105.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.00 € | **15.00 €** | 18.2 % | **26.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.00 € | **12.00 €** | 23.5 % | **34.8 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| RGB Led Light Stick PULUZ 17cm | 12.00 € | **13.00 €** | 17.5 % | **27.3 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 8.90 € | **9.80 €** | 18.8 % | **30.8 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 7722L2 domovní zesilovač s 5G LTE s regulací | 29.00 € | **29.90 €** | 2.3 % | **5.5 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.00 € | **22.90 €** | 32.7 % | **38.1 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester Ancel BA101 8-30V DC | 42.90 € | **43.50 €** | 12.7 % | **14.3 %** | 43.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 3.20 € | **3.80 €** | 51.3 % | **79.6 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.20 € | **4.80 €** | 51.8 % | **73.4 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Stromberg DUAL-PRO Bezdrôtové | 18.00 € | **18.50 €** | 4.9 % | **7.8 %** | 18.23 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed puzdro SG A35 5G FIXOP3-1262-BK | 12.50 € | **13.00 €** | 15.5 % | **20.1 %** | 13.07 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Karta pamäte Lexar High-Performance S... | 91.50 € | **92.00 €** | 8.3 % | **8.9 %** | 92.10 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.00 € | **198.50 €** | 8.7 % | **9.0 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS1 Pro – štartér do auta | 69.50 € | **70.00 €** | 16.2 % | **17.1 %** | 70.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.00 € | **11.50 €** | 27.6 % | **33.4 %** | 11.62 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo RV20 Max Plus | 212.00 € | **212.50 €** | 7.5 % | **7.7 %** | 212.63 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 20.50 € | **21.00 €** | 32.5 % | **35.7 %** | 21.15 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.50 € | **15.00 €** | 11.2 % | **15.0 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšia reťaz s žiarovkami, 10 žiarovi... | 12.50 € | **13.00 €** | 37.0 % | **42.4 %** | 13.23 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 18.00 € | **18.50 €** | 12.2 % | **15.3 %** | 18.76 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 28.50 € | **29.00 €** | 16.4 % | **18.5 %** | 29.30 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 156.50 € | **157.00 €** | 6.1 % | **6.4 %** | 157.34 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 smartwatch Ultra (gold) | 38.00 € | **38.50 €** | 19.1 % | **20.6 %** | 38.87 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.00 € | **38.50 €** | 19.1 % | **20.6 %** | 38.87 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.00 € | **24.50 €** | 13.3 % | **15.7 %** | 24.87 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.00 € | **14.50 €** | 11.7 % | **15.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 483.00 € | **483.50 €** | 6.8 % | **6.9 %** | 483.90 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 47.50 € | **48.00 €** | 31.4 % | **32.7 %** | 48.43 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2659 | 68.50 € | **69.00 €** | 9.7 % | **10.5 %** | 69.49 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Habotest HT86B | 12.50 € | **13.00 €** | 22.3 % | **27.2 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.30 € | **4.70 €** | 52.0 % | **66.1 %** | 4.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 2.90 € | **3.30 €** | 59.3 % | **81.3 %** | 3.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.40 € | **7.80 €** | 27.7 % | **34.6 %** | 7.81 € | cena podľa najlacnejšieho iného predajcu |
| Rozpěrný kruh na řetěz boxovacího pytle DBX BUSHIDO R35 | 22.50 € | **22.90 €** | 3.5 % | **5.4 %** | 19.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| NEDIS WIFIZBT10CWT chytrá brána ZigBee 3.0 do zásuvk... | 26.50 € | **26.90 €** | 5.0 % | **6.6 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 21.50 € | **21.90 €** | 32.2 % | **34.7 %** | 21.92 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar SB-820BT Soundbar | 33.50 € | **33.90 €** | 5.2 % | **6.5 %** | 33.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 8.50 € | **8.80 €** | 27.3 % | **31.8 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.40 € | **8.70 €** | 38.0 % | **42.9 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight ratanová LED lampáš s LED žiarovkou, teplá b... | 6.40 € | **6.60 €** | 19.1 % | **22.8 %** | 6.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.70 € | **9.80 €** | 12.3 % | **13.5 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 9.70 € | **9.80 €** | 6.1 % | **7.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový okrúhly lampáš so žiarovkou s micro L... | 5.80 € | **5.90 €** | 19.7 % | **21.7 %** | 5.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový oválny lampáš so žiarovkou s micro LE... | 5.30 € | **5.40 €** | 18.7 % | **20.9 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.30 € | **2.40 €** | 30.8 % | **36.4 %** | 2.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **2.90 €** | 36.3 % | **41.2 %** | 2.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.40 € | **9.50 €** | 32.4 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový lampáš so žiarovkou s micro LED, tepl... | 5.40 € | **5.50 €** | 19.3 % | **21.5 %** | 5.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový lampáš s LED sviečkou, teplá biela, 3... | 6.00 € | **6.10 €** | 19.6 % | **21.6 %** | 6.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.60 €** | 35.0 % | **38.0 %** | 4.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.70 € | **6.80 €** | 38.3 % | **40.3 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C + USB-A fast charger GaN 20 W PD | 7.70 € | **7.80 €** | 45.2 % | **47.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Lenovo Tab M11 FIXTOT-1296 | 13.90 € | **14.00 €** | 5.2 % | **6.0 %** | 14.38 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H8c Pro 3K Vonkajšia otočná IP s WiFi, ... | 70.90 € | **71.00 €** | 4.9 % | **5.0 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM600G | 102.90 € | **103.00 €** | 39.4 % | **39.5 %** | 103.33 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 149.90 € | **150.00 €** | 11.5 % | **11.6 %** | 150.46 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (246)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 6263.00 € | **5771.00 €** | 17.4 % | **8.2 %** | 5771.23 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO O2S Ultra | 2705.50 € | **2398.00 €** | 29.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LG GBBS323CPY | 690.00 € | **603.90 €** | 20.0 % | **5.1 %** | 591.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux 600 E62LC200T | 563.00 € | **501.90 €** | 20.0 % | **7.0 %** | 502.00 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V066, 18 000 mAh | 292.00 € | **234.00 €** | 43.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1075.00 € | **1020.00 €** | 16.7 % | **10.7 %** | 1020.04 € | cena podľa najlacnejšieho iného predajcu |
| Beko B7RCNA418HXP | 798.90 € | **747.00 €** | 13.3 % | **6.0 %** | 747.30 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY75X8F0 | 205.90 € | **157.50 €** | 42.2 % | **8.8 %** | 157.80 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 106.90 € | **59.50 €** | 164.1 % | **47.0 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux ESG88600SX | 689.50 € | **654.00 €** | 11.7 % | **6.0 %** | 654.30 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LIB60420CL | 298.00 € | **268.00 €** | 20.0 % | **7.9 %** | 268.20 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY85X8F2 | 249.90 € | **223.00 €** | 20.9 % | **7.8 %** | 223.30 € | cena podľa najlacnejšieho iného predajcu |
| PS5 - PlayStation VR2 | 520.50 € | **496.50 €** | 10.1 % | **5.0 %** | 422.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1500G | 244.00 € | **220.50 €** | 27.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Electrolux 600 E62LD200S | 444.50 € | **424.00 €** | 10.1 % | **5.0 %** | 380.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko BDIS35030 | 414.50 € | **395.50 €** | 10.1 % | **5.0 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 349.50 € | **335.00 €** | 28.0 % | **22.7 %** | 335.25 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2011300 | 215.90 € | **201.50 €** | 15.6 % | **7.9 %** | 201.60 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit TBOX-Plus 4+64 GB | 135.50 € | **122.00 €** | 20.6 % | **8.6 %** | 122.13 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH20C0WO | 241.00 € | **227.50 €** | 14.2 % | **7.8 %** | 227.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 8000mAh 14.8V 100C 4S2P Lipo Battery Pack | 112.00 € | **99.00 €** | 40.5 % | **24.2 %** | 99.04 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1392.50 € | **1381.00 €** | 12.4 % | **11.4 %** | 1381.39 € | cena podľa najlacnejšieho iného predajcu |
| Beko HSM14540 | 268.00 € | **257.00 €** | 12.6 % | **8.0 %** | 257.10 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 131.00 € | **120.00 €** | 24.1 % | **13.7 %** | 120.12 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 45.50 € | **35.90 €** | 46.2 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Kamera TP-Link Tapo C675D KIT 2× 2K, vonkajšia, IP P... | 225.90 € | **217.00 €** | 13.0 % | **8.5 %** | 217.29 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 994.50 € | **986.50 €** | 13.4 % | **12.5 %** | 986.69 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BL87G831 | 131.90 € | **124.00 €** | 15.6 % | **8.6 %** | 124.20 € | cena podľa najlacnejšieho iného predajcu |
| Beko Mezikus NPSKM | 49.90 € | **42.00 €** | 35.9 % | **14.4 %** | 42.20 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame D20 | 62.90 € | **55.00 €** | 41.8 % | **24.0 %** | 55.25 € | cena podľa najlacnejšieho iného predajcu |
| Girmi IM2101 | 130.50 € | **123.00 €** | 15.2 % | **8.5 %** | 123.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Pins 4 Onyx Black | 40.00 € | **32.90 €** | 27.9 % | **5.2 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **205.50 €** | 9.9 % | **6.2 %** | 205.64 € | cena podľa najlacnejšieho iného predajcu |
| Girmi IM4701 | 149.50 € | **142.50 €** | 14.1 % | **8.8 %** | 142.80 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 451 DAB+ alarm clock, white | 41.00 € | **34.00 €** | 28.5 % | **6.5 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 84.50 € | **77.90 €** | 14.4 % | **5.4 %** | 76.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight dezinfekčná bezozónová UV lampa 100W | 47.00 € | **40.50 €** | 49.6 % | **28.9 %** | 40.72 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 95.00 € | **88.50 €** | 23.5 % | **15.1 %** | 88.74 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 102.00 € | **96.00 €** | 18.2 % | **11.2 %** | 96.20 € | cena podľa najlacnejšieho iného predajcu |
| Solac LV1301 | 45.50 € | **39.90 €** | 30.8 % | **14.7 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXKM1000E | 118.50 € | **112.90 €** | 10.4 % | **5.2 %** | 100.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 8401SE | 128.50 € | **122.90 €** | 10.1 % | **5.3 %** | 117.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal MY700BF0 | 121.50 € | **115.90 €** | 15.2 % | **9.9 %** | 116.00 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST9100 | 42.00 € | **36.50 €** | 31.9 % | **14.7 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Unlimited pánev 28cm G2550672 | 55.50 € | **50.50 €** | 44.3 % | **31.3 %** | 50.75 € | cena podľa najlacnejšieho iného predajcu |
| PS5 - disc drive | 96.50 € | **91.90 €** | 10.5 % | **5.2 %** | 83.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amica SHM 51071 W | 254.50 € | **250.00 €** | 9.9 % | **7.9 %** | 250.20 € | cena podľa najlacnejšieho iného predajcu |
| Beko PowerIntense BDFN26560XP | 541.50 € | **537.00 €** | 6.8 % | **6.0 %** | 537.20 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH7AC1E0 | 227.00 € | **222.50 €** | 10.0 % | **7.8 %** | 222.80 € | cena podľa najlacnejšieho iného predajcu |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 29.00 € | **24.90 €** | 22.4 % | **5.1 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bravo Kery B-4660 400W bílý | 39.50 € | **35.50 €** | 21.8 % | **9.5 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WDSI96A | 362.50 € | **358.90 €** | 7.0 % | **6.0 %** | 359.00 € | cena podľa najlacnejšieho iného predajcu |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herný volant Moza Racing R5 Pro | 423.00 € | **419.50 €** | 12.0 % | **11.1 %** | 419.69 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 431.00 € | **427.50 €** | 15.0 % | **14.1 %** | 427.70 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač Evercon AH-707 | 57.50 € | **54.00 €** | 26.9 % | **19.1 %** | 54.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **16.90 €** | 46.6 % | **23.9 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Outdoor WiFi/LAN IP Camera IMOU Bullet 3 3MP | 37.00 € | **34.00 €** | 14.3 % | **5.0 %** | 28.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Girmi FG4101 | 141.50 € | **138.50 €** | 11.3 % | **9.0 %** | 138.60 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Tiny 3 | 358.90 € | **356.00 €** | 6.6 % | **5.7 %** | 356.20 € | cena podľa najlacnejšieho iného predajcu |
| Pedrini Aroma Induction 6 porcí | 42.50 € | **39.90 €** | 25.0 % | **17.4 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG8401 | 89.50 € | **87.00 €** | 14.9 % | **11.7 %** | 87.20 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 326.00 € | **323.50 €** | 18.1 % | **17.2 %** | 323.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér s USB A+C 20W PD do Veľkej ... | 12.90 € | **10.50 €** | 61.4 % | **31.3 %** | 10.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér s USB A+C 20W PD do Spojený... | 12.90 € | **10.50 €** | 61.4 % | **31.3 %** | 10.81 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.4 % | **5.4 %** | 9.74 € | cena podľa najlacnejšieho iného predajcu |
| Bluetooth slúchadlá EJEAS E1+ pre prilby | 24.50 € | **22.50 €** | 15.6 % | **6.2 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace 25C 1500mAh 3S1P 11.1V Airsoft Gun Lipo Bat... | 22.90 € | **20.90 €** | 15.6 % | **5.5 %** | 20.96 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Kuchyňský robot, G201200 Pasta | 186.50 € | **184.50 €** | 10.1 % | **8.9 %** | 184.60 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 68.90 € | **66.90 €** | 11.2 % | **8.0 %** | 67.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1443.90 € | **1441.90 €** | 7.4 % | **7.3 %** | 1442.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.50 € | **22.50 €** | 24.1 % | **14.0 %** | 22.65 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio AA 2700 mAh (tužkové) 4ks, dobíjacie | 13.00 € | **11.00 €** | 24.3 % | **5.2 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.90 € | **30.00 €** | 16.0 % | **9.1 %** | 30.23 € | cena podľa najlacnejšieho iného predajcu |
| Acer Nitro KG240YP0BI | 60.90 € | **59.00 €** | 10.5 % | **7.1 %** | 59.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Floco, ... | 43.50 € | **41.90 €** | 37.7 % | **32.6 %** | 42.00 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG2701 | 69.50 € | **67.90 €** | 15.6 % | **12.9 %** | 68.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 4 POP White | 20.00 € | **18.50 €** | 14.7 % | **6.1 %** | 15.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.50 € | **58.00 €** | 37.3 % | **33.8 %** | 58.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.50 € | **12.00 €** | 33.4 % | **18.5 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.0 % | **5.4 %** | 23.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Posilovací válec na přicho HMS KA40 s automatickým n... | 37.90 € | **36.90 €** | 8.4 % | **5.5 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **43.00 €** | 37.6 % | **34.5 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 36.00 € | **35.00 €** | 38.1 % | **34.3 %** | 35.13 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C615G KIT 3MPx, vonkajšia, IP PT... | 109.90 € | **109.00 €** | 6.9 % | **6.0 %** | 109.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.90 € | **25.00 €** | 54.3 % | **48.9 %** | 25.30 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim BLACK | 32.90 € | **32.00 €** | 11.3 % | **8.2 %** | 32.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.90 € | **19.00 €** | 37.7 % | **31.5 %** | 19.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED čelová nabíjacia svietidlo, 250lm, teplé... | 7.50 € | **6.80 €** | 54.8 % | **40.3 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla MOZA RACING MHG | 113.50 € | **112.90 €** | 16.9 % | **16.3 %** | 112.99 € | cena podľa najlacnejšieho iného predajcu |
| SONY sluchátka MDR-ZX310,černá | 18.00 € | **17.50 €** | 11.0 % | **7.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MSI MAG 274CF E20 | 108.50 € | **108.00 €** | 5.5 % | **5.0 %** | 107.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 37.50 € | **37.00 €** | 35.3 % | **33.5 %** | 37.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 37.4 % | **34.1 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 23.5 % | **20.5 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **46.50 €** | 35.9 % | **34.4 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Multimilk MM01 | 90.50 € | **90.00 €** | 16.8 % | **16.2 %** | 90.13 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6812E0 | 53.50 € | **53.00 €** | 10.5 % | **9.5 %** | 53.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **16.50 €** | 36.8 % | **32.8 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Náhlavný popruh BOBOVR M3 Pro pre Oculus Quest 3 / Q... | 42.00 € | **41.50 €** | 19.4 % | **18.0 %** | 41.77 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta 3v1 RH5A32E0 | 120.00 € | **119.50 €** | 10.2 % | **9.7 %** | 119.80 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 440 | 107.50 € | **107.00 €** | 10.2 % | **9.7 %** | 107.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 98.00 € | **97.50 €** | 24.3 % | **23.6 %** | 97.81 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 345.50 € | **345.00 €** | 20.6 % | **20.4 %** | 345.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 46.00 € | **45.50 €** | 45.3 % | **43.8 %** | 45.89 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 44.50 € | **44.00 €** | 13.7 % | **12.5 %** | 44.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 37.50 € | **37.00 €** | 7.7 % | **6.3 %** | 37.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.50 € | **30.00 €** | 8.2 % | **6.5 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 68.00 € | **67.50 €** | 14.8 % | **14.0 %** | 67.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 106.00 € | **105.50 €** | 10.2 % | **9.7 %** | 105.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 319.50 € | **319.00 €** | 19.0 % | **18.8 %** | 319.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 240.00 € | **239.50 €** | 12.4 % | **12.2 %** | 239.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 132.50 € | **132.00 €** | 10.6 % | **10.2 %** | 132.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 473.00 € | **472.50 €** | 9.3 % | **9.2 %** | 472.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 934.00 € | **933.50 €** | 18.7 % | **18.6 %** | 933.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-2m endoskop | 187.50 € | **187.00 €** | 12.8 % | **12.5 %** | 187.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-3m endoskop | 250.50 € | **250.00 €** | 13.2 % | **13.0 %** | 250.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 164.00 € | **163.50 €** | 10.8 % | **10.5 %** | 163.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 322.00 € | **321.50 €** | 10.3 % | **10.1 %** | 321.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 88.00 € | **87.50 €** | 13.3 % | **12.7 %** | 87.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 293.00 € | **292.50 €** | 18.6 % | **18.4 %** | 292.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 147.50 € | **147.00 €** | 10.8 % | **10.4 %** | 147.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1287.50 € | **1287.00 €** | 7.3 % | **7.3 %** | 1287.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 139.00 € | **138.50 €** | 8.1 % | **7.7 %** | 138.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 54.00 € | **53.50 €** | 12.7 % | **11.7 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| Robotický čistič okien MOVA N1 (biely) | 284.50 € | **284.00 €** | 13.7 % | **13.5 %** | 284.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 298.00 € | **297.50 €** | 47.6 % | **47.4 %** | 297.89 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 26.50 € | **26.00 €** | 17.9 % | **15.6 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 90.00 € | **89.50 €** | 12.3 % | **11.7 %** | 89.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 271.50 € | **271.00 €** | 5.6 % | **5.4 %** | 271.39 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 53.50 € | **53.00 €** | 7.4 % | **6.4 %** | 53.39 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TESLA SecureQ SC55 - venkovní WiFi smart kame... | 49.00 € | **48.50 €** | 8.2 % | **7.1 %** | 48.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 257.50 € | **257.00 €** | 7.4 % | **7.1 %** | 257.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 159.50 € | **159.00 €** | 13.0 % | **12.6 %** | 159.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 28.50 € | **28.00 €** | 13.5 % | **11.5 %** | 28.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 73.50 € | **73.00 €** | 11.5 % | **10.7 %** | 73.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 87.50 € | **87.00 €** | 19660.6 % | **19547.7 %** | 87.39 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.50 € | **41.00 €** | 20.0 % | **18.5 %** | 41.39 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 42.50 € | **42.00 €** | 8.1 % | **6.8 %** | 42.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 35.50 € | **35.00 €** | 13.0 % | **11.4 %** | 35.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.50 € | **35.00 €** | 13.4 % | **11.8 %** | 35.39 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo BonePro černá | 66.00 € | **65.50 €** | 7.0 % | **6.1 %** | 65.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Aura A60 Soundbar | 203.00 € | **202.50 €** | 15.2 % | **14.9 %** | 202.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 138.50 € | **138.00 €** | 21.1 % | **20.6 %** | 138.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 81.50 € | **81.00 €** | 40.1 % | **39.2 %** | 81.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 182.00 € | **181.50 €** | 17.6 % | **17.2 %** | 181.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3411 1600W 12V nástenný | 238.50 € | **238.00 €** | 8.5 % | **8.3 %** | 238.39 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 132.00 € | **131.50 €** | 6.4 % | **6.0 %** | 131.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj REBEL POWER 800 LFP4 RB-4027 500W 12V | 90.00 € | **89.50 €** | 7.9 % | **7.3 %** | 89.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 204.50 € | **204.00 €** | 8.1 % | **7.8 %** | 204.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 269.00 € | **268.50 €** | 6.9 % | **6.7 %** | 268.89 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 63.50 € | **63.00 €** | 18.4 % | **17.5 %** | 63.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 319.00 € | **318.50 €** | 7.2 % | **7.0 %** | 318.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 630.50 € | **630.00 €** | 5.1 % | **5.0 %** | 630.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 667.00 € | **666.50 €** | 7.8 % | **7.8 %** | 666.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 696.00 € | **695.50 €** | 8.7 % | **8.6 %** | 695.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 105.00 € | **104.50 €** | 18.3 % | **17.7 %** | 104.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 84.50 € | **84.00 €** | 7.8 % | **7.2 %** | 84.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 105.00 € | **104.50 €** | 11.2 % | **10.7 %** | 104.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.00 € | **10.50 €** | 32.5 % | **26.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 27.50 € | **27.00 €** | 13.0 % | **10.9 %** | 27.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.50 € | **19.00 €** | 18.6 % | **15.5 %** | 19.40 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 356.50 € | **356.00 €** | 40.7 % | **40.5 %** | 356.49 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN W AS | 78.50 € | **78.00 €** | 35.2 % | **34.3 %** | 78.49 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93503 Hrnec s pokličkou 24 cm | 50.50 € | **50.00 €** | 21.4 % | **20.2 %** | 50.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 40.50 € | **40.00 €** | 13.6 % | **12.2 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 146.50 € | **146.00 €** | 50.4 % | **49.9 %** | 146.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.50 € | **16.00 €** | 35.8 % | **31.7 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 22.50 € | **22.00 €** | 14.0 % | **11.4 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 19.50 € | **19.00 €** | 32.9 % | **29.5 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 16.50 € | **16.00 €** | 11.4 % | **8.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC43SGMXC | 127.50 € | **127.00 €** | 13.4 % | **13.0 %** | 127.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor na bicykel, Find My kompatibilný | 14.50 € | **14.00 €** | 36.9 % | **32.2 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia IP kamera s LED světlom | 30.50 € | **30.00 €** | 14.7 % | **12.9 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 38.50 € | **38.00 €** | 10.3 % | **8.9 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak BOYA BY-C30 | 24.50 € | **24.00 €** | 8.7 % | **6.5 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 73.90 € | **73.50 €** | 35.8 % | **35.1 %** | 73.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 96.90 € | **96.50 €** | 17.6 % | **17.1 %** | 96.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.90 € | **15.50 €** | 37.5 % | **34.1 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **12.50 €** | 37.5 % | **33.2 %** | 12.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 14.90 € | **14.50 €** | 36.9 % | **33.2 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 11.90 € | **11.50 €** | 30.7 % | **26.3 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 15.90 € | **15.50 €** | 31.1 % | **27.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Trekingové hole NILS TK8603 | 51.90 € | **51.50 €** | 6.0 % | **5.2 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Čítačka kariet AXAGON CRE-S3C , USB-C 3.2 Gen 1 - SU... | 21.90 € | **21.50 €** | 7.7 % | **5.7 %** | 20.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G2016201 | 36.90 € | **36.50 €** | 15.9 % | **14.6 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 S Pro (čierny) | 59.90 € | **59.50 €** | 13.8 % | **13.0 %** | 59.61 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXIR2403E | 23.90 € | **23.50 €** | 18.3 % | **16.3 %** | 23.80 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 21.90 € | **21.50 €** | 29.3 % | **26.9 %** | 21.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.90 € | **22.50 €** | 13.5 % | **11.5 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.90 € | **47.50 €** | 9.6 % | **8.7 %** | 47.89 € | cena podľa najlacnejšieho iného predajcu |
| Kovový LED svietnik Solight 1V280, 40 cm, 5 LED, čierny | 22.90 € | **22.50 €** | 33.7 % | **31.3 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 20.90 € | **20.50 €** | 45.2 % | **42.5 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 26.90 € | **26.50 €** | 30.5 % | **28.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 24.90 € | **24.50 €** | 22.5 % | **20.6 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 19.90 € | **19.50 €** | 27.2 % | **24.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 33.90 € | **33.50 €** | 14.6 % | **13.2 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s meteostanicou | 20.90 € | **20.50 €** | 14.9 % | **12.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality CR-Scan Raptor | 868.90 € | **868.50 €** | 5.2 % | **5.1 %** | 868.73 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 307.90 € | **307.50 €** | 46.8 % | **46.6 %** | 307.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.50 € | **9.30 €** | 52.9 % | **49.7 %** | 9.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **19.90 €** | 44.9 % | **44.2 %** | 19.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.90 €** | 54.5 % | **54.2 %** | 47.97 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 42.00 € | **41.90 €** | 8.9 % | **8.6 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 50.00 € | **49.90 €** | 26.9 % | **26.6 %** | 50.00 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93509 Pánev 24 cm | 28.00 € | **27.90 €** | 17.9 % | **17.5 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93511 Pánev 28 cm | 33.00 € | **32.90 €** | 6.6 % | **6.3 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.80 € | **9.70 €** | 35.5 % | **34.1 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 32.00 € | **31.90 €** | 22.9 % | **22.5 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V283, 53 cm, ... | 34.00 € | **33.90 €** | 37.0 % | **36.6 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 45.00 € | **44.90 €** | 44.8 % | **44.5 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 27.00 € | **26.90 €** | 32.9 % | **32.4 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 18.00 € | **17.90 €** | 15.0 % | **14.4 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.00 € | **25.90 €** | 8.8 % | **8.4 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 29.00 € | **28.90 €** | 6.2 % | **5.8 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 21.00 € | **20.90 €** | 23.0 % | **22.4 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.00 € | **14.90 €** | 35.4 % | **34.4 %** | 14.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom bi... | 11.00 € | **10.90 €** | 30.2 % | **29.0 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 12.00 € | **11.90 €** | 121.2 % | **119.4 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **10.90 €** | 32.3 % | **31.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 10.00 € | **9.90 €** | 27.4 % | **26.2 %** | 10.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.50 € | **9.40 €** | 34.3 % | **32.9 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 12.00 € | **11.90 €** | 35.9 % | **34.7 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.60 € | **5.50 €** | 148.8 % | **144.3 %** | 5.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.30 € | **4.20 €** | 44.5 % | **41.1 %** | 4.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 5W, 500lm, 4... | 9.50 € | **9.40 €** | 32.3 % | **30.9 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight ventilátor do kúpeľne | 9.70 € | **9.60 €** | 39.6 % | **38.1 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 10.00 € | **9.90 €** | 46.8 % | **45.3 %** | 10.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.00 € | **9.90 €** | 19.2 % | **18.0 %** | 10.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 214.00 € | **213.90 €** | 37.2 % | **37.1 %** | 213.99 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXRA2001E olejový radiátor | 89.00 € | **88.90 €** | 12.0 % | **11.9 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 128.00 € | **127.90 €** | 10.2 % | **10.1 %** | 128.00 € | cena podľa najlacnejšieho iného predajcu |

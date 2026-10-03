# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-03

Vstup: `premiumstore-sk_2026-10-03_18-44.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7088**
- Návrh **zvýšiť** cenu: **117** produktov
- Návrh **znížiť** cenu: **142** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6829** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **12**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **745**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (117)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINI-PC Minis Forum UM890 Pro Ryzen 9 8945HS barebone | 877.00 € | **1156.90 €** | 59.7 % | **110.7 %** | 1157.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 859.00 € | **1136.90 €** | 13.3 % | **49.9 %** | 1137.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 755.00 € | **1016.90 €** | 7.8 % | **45.2 %** | 1017.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 484.00 € | **638.90 €** | 9.9 % | **45.1 %** | 639.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 302.00 € | **393.90 €** | 9.3 % | **42.5 %** | 393.92 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 371.00 € | **456.90 €** | 10.5 % | **36.1 %** | 456.91 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 756.00 € | **835.00 €** | 11.1 % | **22.8 %** | 835.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1074.50 € | **1135.90 €** | 8.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje WG894A25 | 499.50 € | **545.00 €** | 10.0 % | **20.1 %** | 545.14 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 462.50 € | **506.50 €** | 7.1 % | **17.3 %** | 506.64 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 314.50 € | **358.50 €** | 9.5 % | **24.8 %** | 358.88 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 858.50 € | **902.50 €** | 9.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prémiový L držiak Freewell pre Fuji X100VI (čierny) | 36.90 € | **79.90 €** | 15.4 % | **149.8 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pix Cut 2 v 1 | 268.50 € | **311.00 €** | 15.1 % | **33.3 %** | 311.40 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 779.00 € | **819.90 €** | 9.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Ariete Pizzeria 927/01, černá | 205.00 € | **244.90 €** | 8.7 % | **29.9 %** | 244.91 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 387.00 € | **423.50 €** | 10.5 % | **20.9 %** | 423.63 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 642.00 € | **675.50 €** | 9.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Candy GD 10N3B-S | 465.50 € | **498.90 €** | 10.7 % | **18.6 %** | 499.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T68243WCSHBC | 435.50 € | **467.00 €** | 11.6 % | **19.7 %** | 467.10 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 504.50 € | **535.50 €** | 8.9 % | **15.6 %** | 535.59 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 337.00 € | **366.00 €** | 10.0 % | **19.4 %** | 366.13 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 684.00 € | **711.50 €** | 7.4 % | **11.7 %** | 711.70 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 471.50 € | **498.00 €** | 13.6 % | **20.0 %** | 498.48 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 592.00 € | **617.50 €** | 9.1 % | **13.8 %** | 617.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1305.00 € | **1329.90 €** | 11.2 % | **13.3 %** | 1330.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality K2 Pro Combo | 720.90 € | **745.50 €** | 5.0 % | **8.6 %** | 745.89 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 315.50 € | **340.00 €** | 11.4 % | **20.0 %** | 340.19 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 355.00 € | **378.90 €** | 11.3 % | **18.8 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| MiniPC Minis Fórum X1-255 AMD Ryzen 7 H255, barebone | 450.90 € | **471.50 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 292.50 € | **312.50 €** | 10.4 % | **18.0 %** | 312.61 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 243.00 € | **261.00 €** | 13.9 % | **22.3 %** | 261.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 216.00 € | **233.00 €** | 14.3 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 580.50 € | **597.00 €** | 7.6 % | **10.7 %** | 597.11 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 476.00 € | **492.00 €** | 12.2 % | **16.0 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 333.00 € | **348.90 €** | 9.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 444.00 € | **459.50 €** | 7.0 % | **10.8 %** | 459.83 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 570.50 € | **585.50 €** | 25.5 % | **28.8 %** | 585.53 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 474.00 € | **488.90 €** | 7.8 % | **11.1 %** | 489.00 € | cena podľa najlacnejšieho iného predajcu |
| Continenta drevený chlebník | 76.50 € | **90.50 €** | 12.0 % | **32.5 %** | 90.55 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 331.50 € | **344.50 €** | 7.6 % | **11.8 %** | 344.81 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 178.50 € | **190.50 €** | 10.8 % | **18.3 %** | 190.58 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259C (HP W2071A Cyan) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259Y (HP W2072A Yellow) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259M (HP W2073A Magenta) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 540.00 € | **551.50 €** | 8.5 % | **10.8 %** | 551.84 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny ramenný popruh Neewer | 62.50 € | **74.00 €** | 14.7 % | **35.8 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Rádio Imperial Dabman 280 CDBK s funkcí ASA | 229.90 € | **239.90 €** | 12.7 % | **17.6 %** | 239.99 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 908.00 € | **917.50 €** | 18.3 % | **19.5 %** | 917.54 € | cena podľa najlacnejšieho iného predajcu |
| JBL PartyLight Beam, projekční světlo | 129.00 € | **138.00 €** | 10.1 % | **17.8 %** | 138.49 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 322.50 € | **331.00 €** | 9.4 % | **12.3 %** | 331.01 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 258.50 € | **267.00 €** | 6.8 % | **10.4 %** | 267.21 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 14.50 € | **22.90 €** | 12.8 % | **78.2 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 302.00 € | **310.00 €** | 18.8 % | **21.9 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 302.00 € | **310.00 €** | 17.6 % | **20.7 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 231.00 € | **238.90 €** | 12.7 % | **16.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 367.50 € | **374.90 €** | 9.5 % | **11.7 %** | 374.95 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 254.50 € | **261.50 €** | 25.7 % | **29.2 %** | 261.65 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 254.50 € | **261.50 €** | 16.9 % | **20.1 %** | 261.65 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 493.00 € | **500.00 €** | 5.4 % | **6.9 %** | 500.40 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 129.00 € | **135.50 €** | 14.1 % | **19.9 %** | 135.72 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 15.90 € | **21.90 €** | 10.2 % | **51.8 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 210.50 € | **216.00 €** | 7.5 % | **10.3 %** | 216.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 321.00 € | **326.50 €** | 9.8 % | **11.6 %** | 326.55 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj LaserPecker LP2 Plus | 994.90 € | **1000.00 €** | 20.9 % | **21.5 %** | 1000.40 € | cena podľa najlacnejšieho iného predajcu |
| Ohrievač fliaš Grownsy (sivý) | 21.90 € | **27.00 €** | 15.2 % | **42.1 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 198.90 € | **204.00 €** | 8.9 % | **11.6 %** | 204.14 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMK38HU0B | 224.00 € | **228.90 €** | 5.7 % | **8.0 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 294.00 € | **298.90 €** | 14.4 % | **16.3 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 350.50 € | **355.00 €** | 8.2 % | **9.6 %** | 355.13 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 410.00 € | **414.50 €** | 11.4 % | **12.7 %** | 414.85 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 51.00 € | **55.50 €** | 5.2 % | **14.5 %** | 55.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 572.50 € | **577.00 €** | 9.4 % | **10.3 %** | 577.40 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 175.00 € | **179.50 €** | 12.5 % | **15.4 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96CX (HP 305XL Colour) | 17.50 € | **21.90 €** | 11.2 % | **39.2 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 230.00 € | **234.00 €** | 9.1 % | **11.0 %** | 234.18 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2201-2 180 x ... | 18.00 € | **22.00 €** | 17.4 % | **43.4 %** | 22.39 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 180.00 € | **183.90 €** | 9.3 % | **11.7 %** | 184.00 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 262.00 € | **265.90 €** | 7.3 % | **8.9 %** | 265.93 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **560.90 €** | 6.6 % | **7.3 %** | 561.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 207.50 € | **211.00 €** | 9.9 % | **11.7 %** | 211.03 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 64.00 € | **67.50 €** | 5.1 % | **10.8 %** | 67.74 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 161.00 € | **164.00 €** | 7.4 % | **9.4 %** | 164.50 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 39.00 € | **41.90 €** | 6.3 % | **14.2 %** | 41.91 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.00 € | **157.50 €** | 7.2 % | **8.9 %** | 157.60 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 21.00 € | **23.50 €** | 16.9 % | **30.8 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 351.00 € | **353.00 €** | 6.4 % | **7.0 %** | 353.10 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232 W | 119.50 € | **121.50 €** | 12.9 % | **14.8 %** | 121.77 € | cena podľa najlacnejšieho iného predajcu |
| REDMI Headphone Neo Black | 46.00 € | **48.00 €** | 8.9 % | **13.6 %** | 48.29 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 165.50 € | **167.50 €** | 7.5 % | **8.8 %** | 167.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 132.50 € | **134.50 €** | 9.8 % | **11.4 %** | 134.83 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 310.00 € | **312.00 €** | 22.1 % | **22.9 %** | 312.34 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9038G | 32.90 € | **34.50 €** | 10.1 % | **15.4 %** | 34.70 € | cena podľa najlacnejšieho iného predajcu |
| Etui Torras Pstand Series do iPhone 16 Plus (Titaniu... | 15.90 € | **17.50 €** | 24.8 % | **37.3 %** | 17.88 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 171.00 € | **172.50 €** | 8.0 % | **8.9 %** | 172.60 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 28.50 € | **30.00 €** | 11.1 % | **16.9 %** | 30.15 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 190.00 € | **191.50 €** | 15.4 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 190.00 € | **191.50 €** | 15.4 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E15 | 286.50 € | **288.00 €** | 7.4 % | **8.0 %** | 288.30 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 16.50 € | **17.90 €** | 13.1 % | **22.7 %** | 17.97 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GECS5B70CLI | 430.50 € | **431.90 €** | 11.3 % | **11.7 %** | 431.99 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 327.50 € | **328.90 €** | 7.3 % | **7.7 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 108.90 € | **110.00 €** | 13.0 % | **14.1 %** | 110.46 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 670NC white | 66.90 € | **67.90 €** | 17.2 % | **18.9 %** | 68.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 243.00 € | **244.00 €** | 7.6 % | **8.0 %** | 244.10 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 26.50 € | **27.50 €** | 10.3 % | **14.4 %** | 27.80 € | cena podľa najlacnejšieho iného predajcu |
| Subwoofer Edifier Airpulse SW8 (čierny) | 326.00 € | **327.00 €** | 10.7 % | **11.0 %** | 327.31 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 43.00 € | **44.00 €** | 40.2 % | **43.5 %** | 44.45 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 95.00 € | **95.90 €** | 11.2 % | **12.3 %** | 95.92 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9260G | 60.90 € | **61.50 €** | 10.4 % | **11.5 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 53.50 € | **54.00 €** | 30.6 % | **31.8 %** | 54.14 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 768.50 € | **769.00 €** | 40.0 % | **40.1 %** | 769.22 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 276.50 € | **277.00 €** | 11.3 % | **11.5 %** | 277.25 € | cena podľa najlacnejšieho iného predajcu |
| ETA Moneto II 4453 90000 | 87.00 € | **87.50 €** | 5.6 % | **6.2 %** | 87.80 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim BLACK | 32.50 € | **33.00 €** | 11.3 % | **13.1 %** | 33.36 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (142)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Guzzanti GZ 210G | 550.50 € | **468.50 €** | 29.2 % | **10.0 %** | 468.67 € | cena podľa najlacnejšieho iného predajcu |
| Candy CFBD 2450/2EH Double door | 307.00 € | **243.00 €** | 51.3 % | **19.8 %** | 243.36 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 900 PRO X, profesionálne slúchadlá | 249.00 € | **227.50 €** | 15.0 % | **5.1 %** | 210.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| YAMAHA RX-A4A BLACK | 1549.00 € | **1529.00 €** | 10.7 % | **9.3 %** | 1529.09 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA XDA-AMP5400RK | 1381.50 € | **1364.00 €** | 10.7 % | **9.3 %** | 1364.08 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 215.50 € | **202.00 €** | 19.1 % | **11.6 %** | 202.20 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **158.90 €** | 18.5 % | **11.1 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 764.00 € | **754.00 €** | 21.6 % | **20.0 %** | 754.41 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 22280-56/RH | 61.50 € | **53.90 €** | 20.2 % | **5.3 %** | 43.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Puzdro Freewell pre iPhone 17 Pro s držiakom 17 mm | 72.00 € | **64.50 €** | 24.7 % | **11.7 %** | 64.58 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 242.90 € | **236.00 €** | 14.2 % | **11.0 %** | 236.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 33.50 € | **27.50 €** | 37.7 % | **13.0 %** | 27.83 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 97.50 € | **92.00 €** | 20.2 % | **13.4 %** | 92.50 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune Buds 2 tyrkys | 90.90 € | **85.90 €** | 11.5 % | **5.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal GC772830 | 223.50 € | **218.50 €** | 10.1 % | **7.7 %** | 218.80 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08WT | 21.50 € | **16.50 €** | 66.3 % | **27.6 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 11000 | 140.00 € | **135.50 €** | 14.5 % | **10.8 %** | 135.79 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAQ2000BK Bezdrátová sluchátka | 39.00 € | **34.90 €** | 18.0 % | **5.6 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune Buds 2 bílá | 89.90 € | **85.90 €** | 10.2 % | **5.3 %** | 69.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Graef SKS 10002 | 129.50 € | **125.50 €** | 14.6 % | **11.1 %** | 125.63 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 46.00 € | **42.00 €** | 33.9 % | **22.3 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 78.50 € | **74.50 €** | 15.9 % | **10.0 %** | 74.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma G83 (čierna) | 52.50 € | **49.00 €** | 30.3 % | **21.6 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT2V-30 Ceramic/Electric cooktop | 77.00 € | **73.90 €** | 16.0 % | **11.3 %** | 73.99 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Vacuum UB911 | 210.50 € | **207.50 €** | 13.2 % | **11.6 %** | 207.81 € | cena podľa najlacnejšieho iného predajcu |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | cena podľa najlacnejšieho iného predajcu |
| Amica SPA 18 ZPX | 294.00 € | **291.50 €** | 12.5 % | **11.6 %** | 291.73 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF85SGMXC | 180.90 € | **178.50 €** | 19.0 % | **17.4 %** | 178.63 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Linomatic 500 Easy 85286 | 99.90 € | **97.50 €** | 10.1 % | **7.4 %** | 97.79 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 411BD | 70.90 € | **68.50 €** | 14.6 % | **10.7 %** | 68.83 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 700 PRO X, profesionálne slúchadlá | 231.00 € | **228.90 €** | 6.7 % | **5.7 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 4,5 l automatické krmítko pre zvieratá WiFi v... | 47.50 € | **45.50 €** | 28.1 % | **22.7 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 40 | 254.50 € | **252.50 €** | 12.5 % | **11.6 %** | 252.78 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA TW-E5B BROWN | 141.00 € | **139.00 €** | 15.7 % | **14.1 %** | 139.37 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA TW-E5B GRAY | 141.00 € | **139.00 €** | 15.7 % | **14.1 %** | 139.37 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo NIR Rapid Dry | 122.00 € | **120.00 €** | 21.6 % | **19.6 %** | 120.43 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT838 (modré) | 29.50 € | **27.90 €** | 32.1 % | **25.0 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT838 (ružové) | 29.50 € | **27.90 €** | 32.1 % | **25.0 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Náhlavný popruh BOBOVR M3 Pro pre Oculus Quest 3 / Q... | 41.50 € | **40.00 €** | 27.1 % | **22.5 %** | 40.13 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 24.50 € | **23.00 €** | 26.1 % | **18.3 %** | 23.21 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.50 € | **28.00 €** | 10.6 % | **5.0 %** | 28.34 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 23.50 € | **22.00 €** | 17.1 % | **9.7 %** | 22.39 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS ONIKUMA TX612 (čierne) | 21.50 € | **20.00 €** | 32.8 % | **23.6 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka Telesin pre DJI Osmo Action 5 pro | 16.00 € | **14.90 €** | 14.4 % | **6.5 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Sušák na prádlo Rollfix 210 Lon | 17.50 € | **16.50 €** | 12.8 % | **6.4 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| One For All KE2981 OFA BASIC 8 | 12.90 € | **11.90 €** | 14.7 % | **5.9 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G9004400 Iglu Autochladnička | 82.90 € | **81.90 €** | 20.0 % | **18.5 %** | 81.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 29.00 € | **28.00 €** | 18.1 % | **14.0 %** | 28.03 € | cena podľa najlacnejšieho iného predajcu |
| ALI Pods Transl.TWS+překladač ATR10BK | 76.50 € | **75.50 €** | 18.8 % | **17.3 %** | 75.63 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, oran. ASR001 | 75.50 € | **74.50 €** | 16.3 % | **14.7 %** | 74.69 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, grey ASR002 | 75.50 € | **74.50 €** | 16.3 % | **14.7 %** | 74.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **24.50 €** | 19.5 % | **14.8 %** | 24.72 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Candywatch 5 GPS Rose Gold - 9152 | 88.50 € | **87.50 €** | 16.0 % | **14.7 %** | 87.76 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 88.50 € | **87.50 €** | 6.3 % | **5.1 %** | 87.76 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Candywatch 5 GPS Silver - 9153 | 88.50 € | **87.50 €** | 16.0 % | **14.7 %** | 87.76 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Candywatch 5 GPS Silver - 9154 | 88.50 € | **87.50 €** | 6.3 % | **5.1 %** | 87.76 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.00 € | **20.00 €** | 19.6 % | **13.9 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.00 € | **20.00 €** | 19.6 % | **13.9 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná batéria BOBOVR B2 | 21.50 € | **20.50 €** | 24.7 % | **18.9 %** | 20.88 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93503 Hrnec s pokličkou 24 cm | 48.00 € | **47.00 €** | 16.9 % | **14.5 %** | 47.44 € | cena podľa najlacnejšieho iného predajcu |
| Superior posuvná podložka 37-62cm | 49.00 € | **48.00 €** | 21.5 % | **19.0 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo STAR | 43.00 € | **42.00 €** | 20.1 % | **17.3 %** | 42.46 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.00 € | **24.00 €** | 18.3 % | **13.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.00 € | **24.00 €** | 18.3 % | **13.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| PBT Keycap + Cable Set - Black - US/UK | 69.90 € | **69.00 €** | 16.3 % | **14.8 %** | 69.11 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR TWIN - Matte Black/Silver | 54.90 € | **54.00 €** | 21.4 % | **19.4 %** | 54.29 € | cena podľa najlacnejšieho iného predajcu |
| Beko HBA81762BX | 42.90 € | **42.00 €** | 13.1 % | **10.7 %** | 42.39 € | cena podľa najlacnejšieho iného predajcu |
| Brita Style ESS filtračná kanvica 2,4 l + 2 filtre, ... | 25.50 € | **24.90 €** | 8.3 % | **5.7 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cecotec Ready Warm 10100 Smart Ceramic | 57.50 € | **56.90 €** | 21.2 % | **20.0 %** | 56.96 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 FIXRBM-1600-RA | 17.00 € | **16.50 €** | 10.1 % | **6.9 %** | 11.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Aura 5 ANC | 39.50 € | **39.00 €** | 20.1 % | **18.5 %** | 39.02 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 291.00 € | **290.50 €** | 6.1 % | **5.9 %** | 290.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 18.00 € | **17.50 €** | 28.1 % | **24.6 %** | 17.56 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 25.50 € | **25.00 €** | 26.6 % | **24.2 %** | 25.13 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar Black | 26.00 € | **25.50 €** | 20.5 % | **18.2 %** | 25.66 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro SG A36 5G FIXOP3-1502-BRW | 13.00 € | **12.50 €** | 21.8 % | **17.1 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Superior Wheel Wash Slim | 41.50 € | **41.00 €** | 21.1 % | **19.6 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 13.00 € | **12.50 €** | 12.0 % | **7.7 %** | 12.69 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA YWA-10 BL | 57.00 € | **56.50 €** | 12.9 % | **11.9 %** | 56.70 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZCK7921G | 33.00 € | **32.50 €** | 13.3 % | **11.6 %** | 32.72 € | cena podľa najlacnejšieho iného predajcu |
| BEKO SIM8130P | 45.00 € | **44.50 €** | 12.4 % | **11.1 %** | 44.72 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR S3 Pro – popruh s batériou a ventilátorom pre... | 72.00 € | **71.50 €** | 22.8 % | **22.0 %** | 71.75 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO965T | 31.50 € | **31.00 €** | 21.0 % | **19.1 %** | 31.27 € | cena podľa najlacnejšieho iného predajcu |
| KMP H76 (CH564EE) | 20.00 € | **19.50 €** | 31.6 % | **28.3 %** | 19.77 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZCK8040 | 43.00 € | **42.50 €** | 12.9 % | **11.6 %** | 42.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.50 € | **33.00 €** | 18.6 % | **16.9 %** | 33.28 € | cena podľa najlacnejšieho iného predajcu |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 20.00 € | **19.50 €** | 16.3 % | **13.4 %** | 19.78 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 20.50 € | **20.00 €** | 16.8 % | **13.9 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 20.50 € | **20.00 €** | 16.8 % | **13.9 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 20.50 € | **20.00 €** | 16.8 % | **13.9 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 20.50 € | **20.00 €** | 16.8 % | **13.9 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Rony B-4777 žlutá | 25.50 € | **25.00 €** | 21.0 % | **18.7 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate 7 | 202.00 € | **201.50 €** | 16.1 % | **15.8 %** | 201.79 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 21.00 € | **20.50 €** | 21.3 % | **18.4 %** | 20.80 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux MCK CZ | 24.50 € | **24.00 €** | 21.0 % | **18.5 %** | 24.30 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXTO900E | 42.50 € | **42.00 €** | 20.6 % | **19.2 %** | 42.31 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Sense KO6921E0 rychlovarná konvice | 39.50 € | **39.00 €** | 20.6 % | **19.1 %** | 39.32 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Watch Junior 2 Black | 33.50 € | **33.00 €** | 15.6 % | **13.9 %** | 33.32 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXTO1001E | 32.00 € | **31.50 €** | 20.7 % | **18.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 16.00 € | **15.50 €** | 25.4 % | **21.5 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Creator Tripod FIXCRT-BK | 45.00 € | **44.50 €** | 15.4 % | **14.1 %** | 44.85 € | cena podľa najlacnejšieho iného predajcu |
| Girmi CT1000 Elektrický nůž | 28.50 € | **28.00 €** | 19.3 % | **17.2 %** | 28.36 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo UNI filtry 12ks | 36.50 € | **36.00 €** | 20.6 % | **18.9 %** | 36.36 € | cena podľa najlacnejšieho iného predajcu |
| KMP E196X (502XL BK) | 16.50 € | **16.00 €** | 21.0 % | **17.3 %** | 16.37 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Game Pods FIXPDS-G-WH | 43.00 € | **42.50 €** | 17.8 % | **16.4 %** | 42.88 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 25.00 € | **24.50 €** | 16.6 % | **14.3 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 319.50 € | **319.00 €** | 9.8 % | **9.6 %** | 319.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 85.50 € | **85.00 €** | 10.4 % | **9.8 %** | 85.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1285.00 € | **1284.50 €** | 7.4 % | **7.4 %** | 1284.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 51.50 € | **51.00 €** | 7.8 % | **6.8 %** | 51.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 295.50 € | **295.00 €** | 46.8 % | **46.6 %** | 295.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3226  XXL toaster, 900 W | 20.00 € | **19.50 €** | 13.3 % | **10.5 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 87.50 € | **87.00 €** | 9.5 % | **8.9 %** | 87.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 274.00 € | **273.50 €** | 7.6 % | **7.4 %** | 273.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 255.00 € | **254.50 €** | 6.6 % | **6.4 %** | 254.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 157.00 € | **156.50 €** | 11.5 % | **11.2 %** | 156.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 71.00 € | **70.50 €** | 8.0 % | **7.2 %** | 70.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3411 1600W 12V nástenný | 236.00 € | **235.50 €** | 7.7 % | **7.4 %** | 235.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 202.00 € | **201.50 €** | 7.1 % | **6.8 %** | 201.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 266.50 € | **266.00 €** | 6.2 % | **6.0 %** | 266.39 € | cena podľa najlacnejšieho iného predajcu |
| LED snehuliak Solight 1V257, 26 cm, 6 LED, 3 × AA, IP20 | 14.00 € | **13.50 €** | 43.9 % | **38.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27364-70 | 31.50 € | **31.00 €** | 20.3 % | **18.4 %** | 31.43 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo UNI filtry 8ks | 25.50 € | **25.00 €** | 20.4 % | **18.0 %** | 25.44 € | cena podľa najlacnejšieho iného predajcu |
| Sada 10 LED sviečok na vianočný stromček Solight 1V3... | 20.50 € | **20.00 €** | 54.8 % | **51.0 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Clip TWS09BK | 20.50 € | **20.00 €** | 17.7 % | **14.8 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Clip TWS09SR | 20.50 € | **20.00 €** | 17.7 % | **14.8 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZKS1500N | 28.50 € | **28.00 €** | 12.5 % | **10.6 %** | 28.46 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSH2003E | 27.50 € | **27.00 €** | 20.1 % | **18.0 %** | 27.47 € | cena podľa najlacnejšieho iného predajcu |
| Tefal K28104DI | 12.50 € | **12.00 €** | 23.9 % | **19.0 %** | 12.48 € | cena podľa najlacnejšieho iného predajcu |
| Wireless controler GameSir T4n (white) | 26.50 € | **26.00 €** | 24.0 % | **21.6 %** | 26.48 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 29.50 € | **29.00 €** | 9.1 % | **7.3 %** | 29.49 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.90 € | **11.50 €** | 10.6 % | **6.9 %** | 11.86 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NBP003.W | 37.90 € | **37.50 €** | 7.1 % | **6.0 %** | 29.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Black&Decker BXSH2001E | 31.90 € | **31.50 €** | 21.4 % | **19.9 %** | 31.52 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZCK7650 | 32.90 € | **32.50 €** | 13.6 % | **12.2 %** | 32.55 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.00 € | **18.90 €** | 6.6 % | **6.0 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari Kuchyňská váha, G20093, Ginny, | 21.00 € | **20.90 €** | 20.5 % | **19.9 %** | 20.92 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93323 Pánev Sagitta 20 cm | 15.00 € | **14.90 €** | 19.1 % | **18.3 %** | 14.93 € | cena podľa najlacnejšieho iného predajcu |
| KMP C110 (PGI-580XXL BK) | 13.00 € | **12.90 €** | 20.4 % | **19.5 %** | 12.96 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 253.00 € | **252.90 €** | 62230.6 % | **62206.0 %** | 252.92 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR černé | 195.00 € | **194.90 €** | 17.4 % | **17.3 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 195.00 € | **194.90 €** | 17.4 % | **17.3 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |

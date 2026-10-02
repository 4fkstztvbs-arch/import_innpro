# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-02

Vstup: `premiumstore-sk_2026-10-02_10-07.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7120**
- Návrh **zvýšiť** cenu: **321** produktov
- Návrh **znížiť** cenu: **357** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6442** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **95**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **822**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (321)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 860.00 € | **1136.90 €** | 13.4 % | **49.9 %** | 1137.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **250.50 €** | 15.3 % | **1705.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 302.00 € | **393.90 €** | 9.3 % | **42.5 %** | 393.92 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 371.00 € | **457.00 €** | 10.5 % | **36.1 %** | 457.37 € | cena podľa najlacnejšieho iného predajcu |
| Candy CFBD 2450/2EH Double door | 223.50 € | **307.50 €** | 10.1 % | **51.5 %** | 307.69 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 756.00 € | **835.00 €** | 11.1 % | **22.8 %** | 835.50 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 812.90 € | **888.50 €** | 10.0 % | **20.3 %** | 888.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje RK14C2W4 | 270.90 € | **346.00 €** | 10.1 % | **40.6 %** | 346.19 € | cena podľa najlacnejšieho iného predajcu |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 238.50 € | **312.00 €** | 5.1 % | **37.4 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 322.90 € | **390.00 €** | 10.1 % | **33.0 %** | 390.19 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 273.90 € | **338.00 €** | 10.2 % | **35.9 %** | 338.39 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG2PS72A12 | 239.90 € | **303.90 €** | 10.1 % | **39.5 %** | 304.00 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552220 Crocodile 5G LTE700 domovní zesilovač | 44.90 € | **103.00 €** | 46.5 % | **236.2 %** | 103.25 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T68243WCSHBC | 435.50 € | **493.00 €** | 11.6 % | **26.3 %** | 493.05 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 499.50 € | **552.00 €** | 10.0 % | **21.6 %** | 552.25 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 329.00 € | **378.50 €** | 10.0 % | **26.6 %** | 378.79 € | cena podľa najlacnejšieho iného predajcu |
| Candy CII647CCAR | 151.90 € | **198.90 €** | 10.1 % | **44.2 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 504.50 € | **550.00 €** | 8.9 % | **18.7 %** | 550.19 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 462.50 € | **506.50 €** | 7.1 % | **17.3 %** | 506.64 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 314.50 € | **358.50 €** | 9.5 % | **24.8 %** | 358.88 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2-N TTL pre fotoaparáty Nikon | 135.50 € | **178.90 €** | 15.2 % | **52.0 %** | 178.99 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal iSteady MT3 Pro | 377.00 € | **418.90 €** | 30.7 % | **45.2 %** | 418.99 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 303.50 € | **345.00 €** | 63168.7 % | **71819.9 %** | 345.20 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 205.00 € | **244.90 €** | 8.7 % | **29.9 %** | 244.91 € | cena podľa najlacnejšieho iného predajcu |
| Candy ECNBQT3518E Fresco | 476.00 € | **515.00 €** | 6.8 % | **15.6 %** | 515.29 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 311.50 € | **350.00 €** | 5.0 % | **18.0 %** | 350.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 387.00 € | **423.50 €** | 10.5 % | **20.9 %** | 423.63 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 462.90 € | **498.90 €** | 10.1 % | **18.6 %** | 499.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 684.00 € | **717.90 €** | 7.4 % | **12.7 %** | 718.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 471.50 € | **504.90 €** | 13.6 % | **21.6 %** | 504.99 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTX1 Pro S, Twin | 289.90 € | **322.50 €** | 10.1 % | **22.5 %** | 322.62 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 337.00 € | **366.00 €** | 10.0 % | **19.4 %** | 366.13 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 315.50 € | **344.50 €** | 11.4 % | **21.6 %** | 344.63 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Rozšiřující set 3 | 26.50 € | **54.00 €** | 11.1 % | **126.4 %** | 54.21 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 592.00 € | **618.00 €** | 9.1 % | **13.9 %** | 618.12 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1305.00 € | **1329.90 €** | 11.2 % | **13.3 %** | 1330.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 755.00 € | **779.50 €** | 7.8 % | **11.3 %** | 779.80 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 235 | 444.50 € | **469.00 €** | 7.7 % | **13.7 %** | 469.40 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 355.00 € | **378.90 €** | 11.3 % | **18.8 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 779.00 € | **802.50 €** | 9.3 % | **12.6 %** | 802.90 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 248.90 € | **272.00 €** | 17.9 % | **28.8 %** | 272.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 327.50 € | **350.00 €** | 5.1 % | **12.3 %** | 350.50 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 642.00 € | **662.00 €** | 9.3 % | **12.7 %** | 662.10 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 292.50 € | **312.50 €** | 10.4 % | **18.0 %** | 312.61 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 320.00 € | **340.00 €** | 15.0 % | **22.1 %** | 340.21 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CCGMEE9025PX/E | 780.50 € | **798.90 €** | 10.0 % | **12.6 %** | 799.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 243.00 € | **261.00 €** | 13.9 % | **22.3 %** | 261.17 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 300.00 € | **317.90 €** | 5.8 % | **12.1 %** | 318.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 216.00 € | **233.00 €** | 14.3 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 322.00 € | **339.00 €** | 8.4 % | **14.1 %** | 339.21 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 580.50 € | **597.00 €** | 7.6 % | **10.7 %** | 597.11 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 851.90 € | **867.90 €** | 3.1 % | **5.0 %** | 852.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MOVA S70 Ultra Roller – čierna | 1154.00 € | **1169.90 €** | 15.0 % | **16.6 %** | 1170.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 333.00 € | **348.90 €** | 9.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 444.00 € | **459.50 €** | 7.0 % | **10.8 %** | 459.83 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 474.00 € | **488.90 €** | 7.8 % | **11.1 %** | 489.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 858.50 € | **873.00 €** | 9.4 % | **11.2 %** | 873.30 € | cena podľa najlacnejšieho iného predajcu |
| Vodný chladič CPU Darkflash DV360S (biely) | 104.90 € | **119.00 €** | 15.0 % | **30.5 %** | 119.48 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlící prkno COMPACT S | 49.00 € | **63.00 €** | 10.2 % | **41.6 %** | 63.40 € | cena podľa najlacnejšieho iného predajcu |
| Ninja FB151EUWH Frost Vault 47l | 226.00 € | **240.00 €** | 8.0 % | **14.7 %** | 240.42 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 331.50 € | **344.50 €** | 7.6 % | **11.8 %** | 344.81 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 304.50 € | **317.50 €** | 10.0 % | **14.7 %** | 317.81 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 491.50 € | **503.90 €** | 5.1 % | **7.8 %** | 504.00 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 178.50 € | **190.50 €** | 10.8 % | **18.3 %** | 190.58 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 367.50 € | **379.50 €** | 9.5 % | **13.1 %** | 379.85 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 476.00 € | **487.50 €** | 12.2 % | **14.9 %** | 487.60 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 540.00 € | **551.50 €** | 8.5 % | **10.8 %** | 551.84 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 362.00 € | **373.50 €** | 10.0 % | **13.5 %** | 373.88 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 363.50 € | **374.50 €** | 5.3 % | **8.4 %** | 374.80 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare AR XREAL One Pro (veľkosť L) | 627.50 € | **638.00 €** | 6.6 % | **8.4 %** | 638.32 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 213.50 € | **223.90 €** | 14.0 % | **19.5 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.50 € | **31.50 €** | 15.8 % | **69.7 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 404.90 € | **414.50 €** | 10.0 % | **12.7 %** | 414.85 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 224.00 € | **233.50 €** | 5.4 % | **9.9 %** | 233.68 € | cena podľa najlacnejšieho iného predajcu |
| Vodný chladič CPU Darkflash DV360S (čierny) | 98.50 € | **107.50 €** | 15.1 % | **25.6 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Sada teleokuláru pro smartphone Levenhuk Kelvin TLC50 | 165.90 € | **174.50 €** | 0.1 % | **5.2 %** | 156.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 322.50 € | **331.00 €** | 9.4 % | **12.3 %** | 331.01 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 230.00 € | **238.50 €** | 9.1 % | **13.1 %** | 238.61 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 62.50 € | **71.00 €** | 10.8 % | **25.9 %** | 71.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 39.90 € | **47.90 €** | 19.2 % | **43.1 %** | 47.96 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 302.00 € | **310.00 €** | 18.8 % | **21.9 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 302.00 € | **310.00 €** | 17.6 % | **20.7 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 STD | 100.50 € | **108.50 €** | 5.2 % | **13.6 %** | 108.73 € | cena podľa najlacnejšieho iného predajcu |
| Navijak Flytec V020 5200 mAh na baitcasting | 122.50 € | **130.50 €** | 15.1 % | **22.7 %** | 130.83 € | cena podľa najlacnejšieho iného predajcu |
| Podpera pozadia pre fotoštúdio Puluz 2x2m + pozadia ... | 41.50 € | **49.50 €** | 15.2 % | **37.4 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 129.00 € | **137.00 €** | 14.1 % | **21.2 %** | 137.49 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M + 3 ventilátory (... | 40.00 € | **48.00 €** | 22.0 % | **46.4 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 231.00 € | **238.90 €** | 12.7 % | **16.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 48SBL6G-S | 323.90 € | **331.50 €** | 6.4 % | **8.9 %** | 331.90 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **70.00 €** | 14.9 % | **28.6 %** | 70.10 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Sony | 126.50 € | **134.00 €** | 6.2 % | **12.5 %** | 134.10 € | cena podľa najlacnejšieho iného predajcu |
| Fén MOVA Turbo 20 (biely) | 56.50 € | **64.00 €** | 14.8 % | **30.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter 1-5 stop Freewell Sherpa True Color VND pre i... | 72.50 € | **79.90 €** | 15.3 % | **27.1 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 198.90 € | **206.00 €** | 8.9 % | **12.7 %** | 206.21 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GECS5B70CLI | 430.50 € | **437.50 €** | 11.3 % | **13.1 %** | 437.55 € | cena podľa najlacnejšieho iného predajcu |
| BEBIRD Earsight Ultra – kamerový otoskop | 52.50 € | **59.50 €** | 15.5 % | **30.9 %** | 59.74 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 262.00 € | **268.90 €** | 7.3 % | **10.2 %** | 268.99 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus Redmi A7 Pro4G FIXOP3-1716-BK | 11.90 € | **18.50 €** | 11.5 % | **73.3 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 64.50 € | **71.00 €** | 10.3 % | **21.4 %** | 71.27 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W15 | 223.50 € | **229.90 €** | 14.9 % | **18.2 %** | 230.00 € | cena podľa najlacnejšieho iného predajcu |
| Automatický dávkovač krmiva Rojeco 2 l | 31.90 € | **38.00 €** | 15.4 % | **37.5 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Teplomer na potraviny Habotest HT691 | 11.90 € | **18.00 €** | 16.7 % | **76.5 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 125.90 € | **131.90 €** | 10.2 % | **15.5 %** | 131.94 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 175.00 € | **181.00 €** | 12.5 % | **16.4 %** | 181.05 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno 72488 | 60.50 € | **66.50 €** | 10.7 % | **21.7 %** | 66.82 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1379.00 € | **1385.00 €** | 11.3 % | **11.8 %** | 1385.48 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT333BT Mini merač teploty a vlhkosti | 25.90 € | **31.50 €** | 15.2 % | **40.1 %** | 31.80 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Vacuum UB911 | 204.90 € | **210.50 €** | 10.2 % | **13.2 %** | 210.53 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA38F2K7NXBB | 132.90 € | **138.50 €** | 10.3 % | **14.9 %** | 138.89 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 210.50 € | **216.00 €** | 7.5 % | **10.3 %** | 216.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 321.00 € | **326.50 €** | 9.8 % | **11.6 %** | 326.55 € | cena podľa najlacnejšieho iného predajcu |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 77.00 € | **82.50 €** | 14.6 % | **22.8 %** | 82.60 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 40 | 243.00 € | **248.50 €** | 7.4 % | **9.8 %** | 248.62 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 211.00 € | **216.50 €** | 16.6 % | **19.6 %** | 216.63 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 15.00 € | **20.50 €** | 49.5 % | **104.2 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 86 mm | 24.50 € | **29.90 €** | 15.6 % | **41.1 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj LaserPecker LP2 Plus | 994.90 € | **1000.00 €** | 20.9 % | **21.5 %** | 1000.40 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LC500R MiNi štúdiové osvetlenie | 139.90 € | **145.00 €** | 15.1 % | **19.3 %** | 145.38 € | cena podľa najlacnejšieho iného predajcu |
| Lenco KCR-150 white | 74.90 € | **79.90 €** | 10.2 % | **17.5 %** | 79.98 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 80.00 € | **85.00 €** | 17966.8 % | **19096.0 %** | 85.11 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10100 Smart Ceramic | 52.50 € | **57.50 €** | 10.7 % | **21.2 %** | 57.70 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR TWIN - Black/Silver | 58.50 € | **63.50 €** | 22.0 % | **32.4 %** | 63.77 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (čierna) | 43.00 € | **47.90 €** | 11.8 % | **24.6 %** | 47.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (biela) | 43.00 € | **47.90 €** | 11.8 % | **24.6 %** | 47.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (oranžová) | 43.00 € | **47.90 €** | 11.8 % | **24.6 %** | 47.99 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 294.00 € | **298.90 €** | 14.4 % | **16.3 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno Classic M Compact | 41.90 € | **46.50 €** | 10.7 % | **22.9 %** | 46.57 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 12.00 € | **16.50 €** | 45.0 % | **99.3 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 321.00 € | **325.50 €** | 5.0 % | **6.5 %** | 325.58 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitý inteligentný dávkovač krmiva 5 l Oneisall PF10 | 64.00 € | **68.50 €** | 14.9 % | **23.0 %** | 68.63 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 207.50 € | **212.00 €** | 9.9 % | **12.2 %** | 212.15 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.00 € | **159.50 €** | 7.2 % | **10.3 %** | 159.70 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 346.50 € | **351.00 €** | 5.1 % | **6.4 %** | 351.25 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 572.50 € | **577.00 €** | 9.4 % | **10.3 %** | 577.40 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 5 s kapacitou 5 200 mA... | 26.50 € | **31.00 €** | 15.5 % | **35.1 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 5 s kapacitou 5 200 mA... | 26.50 € | **31.00 €** | 14.3 % | **33.7 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 242.90 € | **247.00 €** | 14.2 % | **16.2 %** | 247.42 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat VIOLA 2 černé | 37.50 € | **41.50 €** | 15.6 % | **27.9 %** | 41.54 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 132.50 € | **136.50 €** | 9.8 % | **13.1 %** | 136.58 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 465.50 € | **469.50 €** | 7.4 % | **8.3 %** | 469.60 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 10N3BX-S | 483.90 € | **487.90 €** | 10.1 % | **11.0 %** | 488.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo STAR | 39.50 € | **43.50 €** | 10.4 % | **21.5 %** | 43.73 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 180.00 € | **184.00 €** | 9.3 % | **11.7 %** | 184.27 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač potravín Oneisall PFD001 Pro (... | 43.50 € | **47.50 €** | 15.6 % | **26.2 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 243.00 € | **247.00 €** | 7.6 % | **9.3 %** | 247.30 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 276.50 € | **280.50 €** | 11.3 % | **12.9 %** | 280.81 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiová lampa GODOX ML40Bi | 100.00 € | **104.00 €** | 15.0 % | **19.6 %** | 104.38 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 163.00 € | **166.90 €** | 7.5 % | **10.0 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Oneisall F1-M s objemom... | 51.00 € | **54.90 €** | 15.0 % | **23.8 %** | 54.94 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **560.90 €** | 6.6 % | **7.3 %** | 561.00 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 27.90 € | **31.50 €** | 14.9 % | **29.7 %** | 31.80 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ PU4119B 60W 2500K-6500K (Black) studio lamp. | 49.90 € | **53.50 €** | 15.4 % | **23.7 %** | 53.80 € | cena podľa najlacnejšieho iného predajcu |
| ETA Kvadro 4153 90000 bílý bílá | 19.90 € | **23.50 €** | 6.2 % | **25.4 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.90 € | **79.50 €** | 17.1 % | **22.7 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 191.50 € | **195.00 €** | 9.6 % | **11.6 %** | 195.20 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 43.00 € | **46.50 €** | 40.2 % | **51.6 %** | 46.72 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife FP-B978 prepravné puzdro pre DJI Flip | 16.50 € | **20.00 €** | 13.7 % | **37.8 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 295.50 € | **298.90 €** | 11.3 % | **12.6 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro XRN 14P+5G FIXOP3-1433-BK | 11.90 € | **15.00 €** | 11.5 % | **40.5 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský robot G21 Promesso Aluminium | 211.50 € | **214.50 €** | 3.6 % | **5.1 %** | 208.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kuchynský robot G21 Promesso Iron Grey | 211.50 € | **214.50 €** | 3.6 % | **5.1 %** | 208.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fontána / napájačka pre domáce zvieratá 3,5 l Oneisa... | 38.50 € | **41.50 €** | 15.7 % | **24.7 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 363.00 € | **366.00 €** | 7.4 % | **8.3 %** | 366.30 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN ZIP Trifold Cyber Projector | 397.00 € | **400.00 €** | 14.9 % | **15.8 %** | 400.30 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 504.50 € | **507.50 €** | 7.7 % | **8.4 %** | 507.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo UNI filtry 12ks | 33.50 € | **36.50 €** | 10.7 % | **20.6 %** | 36.81 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf L1 350 lm | 14.50 € | **17.50 €** | 13.7 % | **37.2 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva WiFi Oneisall 5L PF08 | 52.00 € | **55.00 €** | 14.6 % | **21.2 %** | 55.46 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 161.00 € | **164.00 €** | 7.4 % | **9.4 %** | 164.50 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 126.00 € | **128.90 €** | 43.1 % | **46.4 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25400-56/RH | 50.90 € | **53.50 €** | 10.1 % | **15.8 %** | 53.70 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF S61STPF-PM-O Matter EU vonkajšia zásuvka | 19.50 € | **22.00 €** | 16.0 % | **30.8 %** | 22.05 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Olympus | 86.50 € | **89.00 €** | 14.8 % | **18.1 %** | 89.10 € | cena podľa najlacnejšieho iného predajcu |
| MiniPC Minis Fórum X1-255 AMD Ryzen 7 H255, barebone | 471.50 € | **474.00 €** | 15.0 % | **15.6 %** | 474.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 14.00 € | **16.50 €** | 17.1 % | **38.0 %** | 16.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 32.00 € | **34.50 €** | 25.8 % | **35.6 %** | 34.65 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 42.50 € | **45.00 €** | 10.0 % | **16.5 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 FIXBLM-1600-BP | 17.00 € | **19.50 €** | 10.1 % | **26.3 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 17.00 € | **19.50 €** | 10.1 % | **26.3 %** | 19.84 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 128.00 € | **130.50 €** | 13.4 % | **15.6 %** | 130.90 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo BonePro černá | 65.50 € | **68.00 €** | 7.5 % | **11.6 %** | 68.49 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAK4200CT  bezdrátová sluchátka | 36.90 € | **39.00 €** | 7.2 % | **13.3 %** | 39.33 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Creator Tripod FIXCRT-BK | 42.90 € | **45.00 €** | 10.0 % | **15.4 %** | 45.42 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6812E0 | 52.90 € | **55.00 €** | 10.7 % | **15.1 %** | 55.50 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Bollitore 2846, černá | 16.50 € | **18.50 €** | 5.5 % | **18.3 %** | 18.51 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 28.50 € | **30.50 €** | 11.1 % | **18.9 %** | 30.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 11.50 € | **13.50 €** | 6.4 % | **24.9 %** | 13.57 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 35.90 € | **37.90 €** | 15.0 % | **21.4 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Catlink Fresh smart odor absorber | 33.00 € | **35.00 €** | 6.9 % | **13.4 %** | 35.17 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232 W | 119.50 € | **121.50 €** | 12.9 % | **14.8 %** | 121.77 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 224.50 € | **226.50 €** | 23.2 % | **24.3 %** | 226.80 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall súprava na strihanie domácich zvierat 4 v 1... | 41.00 € | **43.00 €** | 14.9 % | **20.5 %** | 43.33 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 11.1V 30C 3S1P Lipo ... | 18.00 € | **20.00 €** | 13.9 % | **26.5 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Napěňovač mléka, G1017301, 30 | 46.50 € | **48.50 €** | 11.0 % | **15.7 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6675E0 | 69.50 € | **71.50 €** | 10.4 % | **13.5 %** | 71.90 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 171.00 € | **173.00 €** | 8.0 % | **9.2 %** | 173.45 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco A12 5M automatické zaťahovacie vodítko pre ps... | 10.00 € | **12.00 €** | 15.0 % | **38.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 6.80 € | **8.70 €** | 36.5 % | **74.6 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 426.90 € | **428.50 €** | 13.9 % | **14.3 %** | 428.89 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Watch Junior 2 Black | 31.90 € | **33.50 €** | 10.1 % | **15.6 %** | 33.76 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC026X | 39.90 € | **41.50 €** | 8.0 % | **12.3 %** | 41.79 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE3600 | 38.90 € | **40.50 €** | 10.3 % | **14.8 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight okrúhla kefa (35 mm) | 8.90 € | **10.50 €** | 6.7 % | **25.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 76.50 € | **78.00 €** | 12.1 % | **14.3 %** | 78.14 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 768.50 € | **770.00 €** | 40.0 % | **40.3 %** | 770.19 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR710001 | 26.50 € | **28.00 €** | 11.8 % | **18.1 %** | 28.20 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2020E1 | 36.50 € | **38.00 €** | 11.5 % | **16.1 %** | 38.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXSHM-1402-TR | 17.50 € | **19.00 €** | 13.4 % | **23.1 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK AX9U | 17.50 € | **19.00 €** | 11.7 % | **21.2 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.50 € | **14.00 €** | 11.4 % | **24.8 %** | 14.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 15.00 € | **16.50 €** | 21.6 % | **33.7 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF ZBMINIR2-E Zigbee 1-kanálový spínač na nulovú... | 19.00 € | **20.50 €** | 15.0 % | **24.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná fontána/napájačka pre domáce zvieratá s... | 52.50 € | **54.00 €** | 14.8 % | **18.0 %** | 54.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 10.50 € | **12.00 €** | 14.7 % | **31.1 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 145.50 € | **146.90 €** | 28.8 % | **30.0 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 570.50 € | **571.90 €** | 25.5 % | **25.8 %** | 571.95 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFB 8469 BV EE | 344.50 € | **345.90 €** | 8.0 % | **8.4 %** | 346.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 327.50 € | **328.90 €** | 7.3 % | **7.7 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Zlatá závesná LED vianočná hviezda Solight 1V295, 60... | 6.70 € | **7.90 €** | 46.4 % | **72.7 %** | 7.96 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E1WYHSK2 | 68.90 € | **70.00 €** | 11.3 % | **13.1 %** | 70.29 € | cena podľa najlacnejšieho iného predajcu |
| Aligator S6700 Duo 128GB Blue | 89.90 € | **91.00 €** | 10.1 % | **11.4 %** | 91.35 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 1548/05 | 27.90 € | **28.90 €** | 6.7 % | **10.6 %** | 28.94 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar Black | 26.50 € | **27.50 €** | 20.4 % | **24.9 %** | 27.54 € | cena podľa najlacnejšieho iného predajcu |
| Kruger & Matz KM1303 | 16.00 € | **17.00 €** | 6.4 % | **13.1 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 963.00 € | **964.00 €** | 16.1 % | **16.2 %** | 964.09 € | cena podľa najlacnejšieho iného predajcu |
| Xavax set odtokové hadice a přísluš. | 15.50 € | **16.50 €** | 11.2 % | **18.4 %** | 16.59 € | cena podľa najlacnejšieho iného predajcu |
| Remoska D52F/10 4l Dua Glass | 134.00 € | **135.00 €** | 9.2 % | **10.0 %** | 135.10 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.50 € | **329.50 €** | 7.9 % | **8.2 %** | 329.60 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer TX1800U Nano Adaptér | 19.90 € | **20.90 €** | 6.6 % | **11.9 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK 10/100 8-Port Switch (DES-108) | 19.90 € | **20.90 €** | 10.2 % | **15.7 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 27.50 € | **28.50 €** | 14.2 % | **18.4 %** | 28.69 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 13.00 € | **14.00 €** | 80.7 % | **94.6 %** | 14.25 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna doska Moza Racing RS089 | 33.00 € | **34.00 €** | 11.7 % | **15.1 %** | 34.27 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 22.50 € | **23.50 €** | 6.2 % | **10.9 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| RICATECH PR1980 Ghettoblaster | 50.50 € | **51.50 €** | 5.2 % | **7.3 %** | 51.80 € | cena podľa najlacnejšieho iného predajcu |
| Subwoofer Edifier Airpulse SW8 (čierny) | 326.00 € | **327.00 €** | 10.7 % | **11.0 %** | 327.31 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 87.50 € | **88.50 €** | 13.8 % | **15.1 %** | 88.87 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 350.50 € | **351.50 €** | 8.2 % | **8.5 %** | 351.89 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXRA2501E | 105.00 € | **106.00 €** | 10.0 % | **11.1 %** | 106.40 € | cena podľa najlacnejšieho iného predajcu |
| Selfie lamp Neewer VL67C RGB LED 5W | 32.00 € | **33.00 €** | 14.6 % | **18.1 %** | 33.42 € | cena podľa najlacnejšieho iného predajcu |
| KOMA HPU1 - Univerzální hubice | 12.00 € | **12.90 €** | 10.2 % | **18.5 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lištal pre LED pásky 2, 18x9mm, ml... | 2.70 € | **3.60 €** | 46.3 % | **95.1 %** | 3.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta pre LED pásiky, rohová, 16x1... | 3.10 € | **4.00 €** | 48.3 % | **91.3 %** | 4.10 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT84 Terestriální HDMI přijímač | 28.00 € | **28.90 €** | 10.6 % | **14.1 %** | 28.96 € | cena podľa najlacnejšieho iného predajcu |
| Strieborná závesná LED vianočná hviezda Solight 1V29... | 7.10 € | **7.90 €** | 55.2 % | **72.7 %** | 7.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta s bočnicami pre LED pásiky, ... | 3.30 € | **4.00 €** | 47.4 % | **78.7 %** | 4.10 € | cena podľa najlacnejšieho iného predajcu |
| BEKO HII64500UFT | 363.90 € | **364.50 €** | 8.2 % | **8.4 %** | 364.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX R200-HC40 mriežka s voštinovým vzorom | 19.90 € | **20.50 €** | 15.7 % | **19.2 %** | 20.54 € | cena podľa najlacnejšieho iného predajcu |
| Brita Marella 2,4l modrá 2024 | 17.90 € | **18.50 €** | 12.1 % | **15.9 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI BT sluch. AH02,FM,SD,čer/zel. AH02GN | 12.90 € | **13.50 €** | 10.4 % | **15.5 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 12.90 € | **13.50 €** | 10.4 % | **15.5 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 73.90 € | **74.50 €** | 10.5 % | **11.4 %** | 74.79 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 156.50 € | **157.00 €** | 7.5 % | **7.8 %** | 157.02 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 65.00 € | **65.50 €** | 34.7 % | **35.7 %** | 65.52 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.00 € | **21.50 €** | 8.1 % | **10.6 %** | 21.54 € | cena podľa najlacnejšieho iného predajcu |
| Turistická rybářská židle, skládací s opěradlem | 12.50 € | **13.00 €** | 13.0 % | **17.6 %** | 13.09 € | cena podľa najlacnejšieho iného predajcu |
| Balanční podložka REBEL ACTIVE RBA-3104-46 | 27.50 € | **28.00 €** | 24.3 % | **26.5 %** | 28.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta pre LED pásky 1, 17x8mm, mli... | 3.10 € | **3.60 €** | 50.0 % | **74.2 %** | 3.70 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Kuchyňský robot, G201200 Pasta | 184.00 € | **184.50 €** | 10.0 % | **10.3 %** | 184.60 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO4B75EA | 111.50 € | **112.00 €** | 10.4 % | **10.9 %** | 112.10 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy OFFICE M40 Vertical | 17.00 € | **17.50 €** | 5.6 % | **8.7 %** | 17.60 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.00 € | **31.50 €** | 10.2 % | **12.0 %** | 31.60 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 351.50 € | **352.00 €** | 35.7 % | **35.9 %** | 352.10 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.00 € | **198.50 €** | 10.1 % | **10.4 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 53.50 € | **54.00 €** | 30.6 % | **31.8 %** | 54.14 € | cena podľa najlacnejšieho iného predajcu |
| Závažie na členky a zápästia 2 × 2 kg, REBEL ACTIVE ... | 13.50 € | **14.00 €** | 34.8 % | **39.8 %** | 14.15 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 165.50 € | **166.00 €** | 32.0 % | **32.4 %** | 166.19 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.00 € | **233.50 €** | 24.4 % | **24.7 %** | 233.70 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 108.50 € | **109.00 €** | 10.2 % | **10.7 %** | 109.20 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 248.50 € | **249.00 €** | 21.9 % | **22.1 %** | 249.20 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI SAG-55 PLUS inteligentná teplovzdušná pištoľ | 63.00 € | **63.50 €** | 6.8 % | **7.6 %** | 63.72 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR005202 | 12.00 € | **12.50 €** | 11.8 % | **16.4 %** | 12.74 € | cena podľa najlacnejšieho iného predajcu |
| Činky REBEL ACTIVE RBA-2330-2 liatinové neoprénové H... | 12.50 € | **13.00 €** | 8.1 % | **12.4 %** | 13.24 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-M, 50 m, viacfarebná... | 20.00 € | **20.50 €** | 39.7 % | **43.2 %** | 20.76 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 105.00 € | **105.50 €** | 12.2 % | **12.7 %** | 105.79 € | cena podľa najlacnejšieho iného predajcu |
| Ozvučovací systém KRUGER MATZ KM1712 | 178.00 € | **178.50 €** | 26.2 % | **26.6 %** | 178.79 € | cena podľa najlacnejšieho iného predajcu |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 194.50 € | **195.00 €** | 8.0 % | **8.3 %** | 195.29 € | cena podľa najlacnejšieho iného predajcu |
| LOKITHOR JA30000 PRO 46,08 Wh 3000 A štartér | 173.00 € | **173.50 €** | 13.2 % | **13.5 %** | 173.87 € | cena podľa najlacnejšieho iného predajcu |
| JBL CHARGEES3 | 108.50 € | **109.00 €** | 5.6 % | **6.1 %** | 109.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 12.00 € | **12.50 €** | 29.0 % | **34.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXBLM-1402-BP | 17.00 € | **17.50 €** | 10.1 % | **13.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.00 € | **17.50 €** | 38.8 % | **42.8 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 13.00 € | **13.50 €** | 13.9 % | **18.3 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 483.00 € | **483.50 €** | 8.2 % | **8.3 %** | 483.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022400 | 36.50 € | **37.00 €** | 16.1 % | **17.7 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| Torras Ostand R Fusion Case for iPhone 16 (Black) | 17.50 € | **18.00 €** | 37.3 % | **41.3 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Kaon MZ-52 Skylink Nagravision bezkartový systém | 68.50 € | **68.90 €** | 5.0 % | **5.6 %** | 60.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bramka GL.iNet GL-MT5000 | 145.50 € | **145.90 €** | 9.7 % | **10.0 %** | 145.95 € | cena podľa najlacnejšieho iného predajcu |
| Venta H13 & Anti-Formaldehyd set 2er VPE | 66.50 € | **66.90 €** | 10.4 % | **11.0 %** | 66.96 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 93.50 € | **93.90 €** | 9.7 % | **10.2 %** | 93.98 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 73.50 € | **73.90 €** | 28.6 % | **29.3 %** | 73.99 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 194.50 € | **194.90 €** | 35.2 % | **35.5 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| Vianočné LED cencúle Solight 1V47, 50 LED, časovač, ... | 5.90 € | **6.30 €** | 33.6 % | **42.7 %** | 6.40 € | cena podľa najlacnejšieho iného predajcu |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 16.50 € | **16.90 €** | 61.8 % | **65.7 %** | 16.91 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 21.50 € | **21.90 €** | 28.5 % | **30.9 %** | 21.92 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 31.50 € | **31.90 €** | 8.0 % | **9.4 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.60 €** | 25.6 % | **29.6 %** | 9.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.70 € | **4.90 €** | 11.4 % | **16.1 %** | 4.94 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 260.90 € | **261.00 €** | 15.3 % | **15.3 %** | 261.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 32.90 € | **33.00 €** | 10.9 % | **11.2 %** | 33.09 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 61.90 € | **62.00 €** | 16.1 % | **16.3 %** | 62.09 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované liatinové činky HEX 2 × 7 kg REBEL ACTIVE... | 53.90 € | **54.00 €** | 64.9 % | **65.2 %** | 54.09 € | cena podľa najlacnejšieho iného predajcu |
| G3ferrari G2016901 Stolní mixér Giro | 30.90 € | **31.00 €** | 11.2 % | **11.5 %** | 31.19 € | cena podľa najlacnejšieho iného predajcu |
| Hori Zelda Shoulder Bag Nintendo | 23.90 € | **24.00 €** | 11.7 % | **12.1 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu |
| Salente Icequeen-Wh | 18.90 € | **19.00 €** | 5.7 % | **6.2 %** | 19.40 € | cena podľa najlacnejšieho iného predajcu |
| Salente IceQueen černá | 18.90 € | **19.00 €** | 5.7 % | **6.2 %** | 19.40 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar SB-820BT Soundbar | 33.90 € | **34.00 €** | 7.8 % | **8.1 %** | 34.40 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPho 16P FIXMMY-1402-BK | 16.90 € | **17.00 €** | 37.5 % | **38.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight senzor pre meteostanice TE110 | 5.30 € | **5.40 €** | 35.9 % | **38.5 %** | 5.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.40 €** | 11.3 % | **13.9 %** | 4.49 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-WW, 5 m, ... | 5.70 € | **5.80 €** | 41.3 % | **43.8 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér do Indie, typ D | 5.40 € | **5.50 €** | 32.6 % | **35.1 %** | 5.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.40 € | **5.50 €** | 32.6 % | **35.1 %** | 5.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **6.10 €** | 25.4 % | **27.5 %** | 6.19 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 11.90 € | **12.00 €** | 23.2 % | **24.3 %** | 12.09 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife ZJ153 Nákupná taška | 12.90 € | **13.00 €** | 15.6 % | **16.5 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Midland D10 DMR digital radio | 190.90 € | **191.00 €** | 26.3 % | **26.3 %** | 191.17 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 252.90 € | **253.00 €** | 62206.0 % | **62230.6 %** | 253.17 € | cena podľa najlacnejšieho iného predajcu |
| Tesla AeroStar T700 | 78.90 € | **79.00 €** | 6.8 % | **6.9 %** | 79.19 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (357)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravír Creality Falcon T1 Fiber 20 W | 2887.50 € | **2636.50 €** | 15.0 % | **5.0 %** | 2543.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung QE75QN900F NEO QLED 8K | 4081.90 € | **3988.00 €** | 10.0 % | **7.5 %** | 3988.42 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 406.00 € | **318.50 €** | 39.2 % | **9.2 %** | 318.70 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Neo QLED QE85QN70H | 1648.50 € | **1573.50 €** | 10.0 % | **5.0 %** | 1319.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Kobra S1 Max Combo | 872.50 € | **798.90 €** | 15.0 % | **5.3 %** | 799.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Core Ultra 5 125U 32 GB 1 TB Win 11 Pro M... | 883.90 € | **827.00 €** | 15.0 % | **7.6 %** | 827.10 € | cena podľa najlacnejšieho iného predajcu |
| REBEL ACTIVE RBA-1014 bežecký pás | 200.00 € | **149.50 €** | 52.5 % | **14.0 %** | 149.74 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 Core Ultra 7 256V 16 GB 1 TB Wind... | 848.50 € | **802.50 €** | 15.0 % | **8.8 %** | 802.90 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 699.00 € | **662.00 €** | 15.0 % | **8.9 %** | 662.10 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec G3S Intel N95 16 GB RAM + 512 GB SSD ... | 410.50 € | **374.90 €** | 15.0 % | **5.0 %** | 312.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Základný volant PXN VD10 DS | 412.50 € | **376.90 €** | 15.0 % | **5.1 %** | 319.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Shark RV2800ZEEU PowerDetect NeverTouch | 748.90 € | **714.90 €** | 10.0 % | **5.0 %** | 537.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 790.50 € | **756.50 €** | 15.0 % | **10.1 %** | 756.60 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 765.00 € | **732.00 €** | 15.0 % | **10.0 %** | 732.50 € | cena podľa najlacnejšieho iného predajcu |
| Lenovo IdeaPad Slim 3 (83K101JXCK) | 691.50 € | **659.90 €** | 10.0 % | **5.0 %** | 644.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung A576 Galaxy A57 256GB Navy Blue | 649.90 € | **620.50 €** | 10.0 % | **5.0 %** | 354.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung A576 Galaxy A57 256GB Gray | 649.90 € | **620.50 €** | 10.0 % | **5.0 %** | 361.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lenovo Idea Tab Pro 8/256GB (ZAHD0072CZ) | 596.00 € | **568.90 €** | 10.0 % | **5.0 %** | 561.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň ELEGOO Centauri Carbon 2 | 398.00 € | **371.00 €** | 14.9 % | **7.1 %** | 371.19 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 371.50 € | **344.50 €** | 15.0 % | **6.7 %** | 344.83 € | cena podľa najlacnejšieho iného predajcu |
| Samsung WW90DG6U85LHU4 | 583.50 € | **556.90 €** | 10.1 % | **5.0 %** | 439.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool FFWDD 1076258 BV EU | 541.90 € | **517.50 €** | 10.0 % | **5.0 %** | 485.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PS5 PlayStation®5 Digital Edition–825GB | 662.90 € | **638.90 €** | 10.0 % | **6.0 %** | 639.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-285H Intel Core Ultra 9 2... | 732.50 € | **709.00 €** | 15.0 % | **11.3 %** | 709.40 € | cena podľa najlacnejšieho iného predajcu |
| PS5 - PlayStation VR2 | 513.50 € | **490.50 €** | 10.0 % | **5.1 %** | 422.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Spájkovacia stanica FNIRSI DWS-200F s výkonom 200 W | 125.50 € | **102.50 €** | 28.7 % | **5.1 %** | 102.90 € | cena podľa najlacnejšieho iného predajcu |
| Samsung QE32LS03CB | 483.50 € | **461.50 €** | 10.1 % | **5.0 %** | 365.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC MINIS FORUM UM890 Pro Ryzen 9 8945HS 16 GB +... | 916.90 € | **897.00 €** | 15.0 % | **12.5 %** | 897.50 € | cena podľa najlacnejšieho iného predajcu |
| GEEKOM A7MAX Mini PC Ryzen 9 7940HS 16 GB RAM 1 TB S... | 880.00 € | **861.50 €** | 15.0 % | **12.6 %** | 861.80 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT55UH7773 55" | 378.50 € | **361.50 €** | 10.1 % | **5.1 %** | 353.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 95.50 € | **78.90 €** | 31.5 % | **8.6 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM M1 Plus i5-12600H 16 GB + 512 GB Mini PC | 772.50 € | **756.50 €** | 15.0 % | **12.6 %** | 756.60 € | cena podľa najlacnejšieho iného predajcu |
| ETA Storio II 2043 90030 černá | 343.50 € | **327.90 €** | 10.1 % | **5.1 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LENOVO IDEA TAB 11 4/128GB (ZAFR0018CZ) | 228.50 € | **214.90 €** | 11.6 % | **5.0 %** | 198.92 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC GMKtec M3 Pro s procesorom i5-13500H, 16 GB ... | 675.50 € | **662.00 €** | 15.0 % | **12.7 %** | 662.10 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 410B8-S | 311.90 € | **298.90 €** | 10.0 % | **5.4 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Fritéza MOVA FD20s Pro Air | 149.00 € | **136.50 €** | 15.0 % | **5.3 %** | 118.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO RCSA240K40SN | 265.50 € | **253.00 €** | 10.2 % | **5.0 %** | 242.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| HP Smart Tank 670 Wireless AiO (6UU48A) | 206.90 € | **195.00 €** | 11.5 % | **5.0 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Krups EA201BE0 | 251.50 € | **239.90 €** | 10.1 % | **5.0 %** | 239.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 278.00 € | **267.00 €** | 14.9 % | **10.4 %** | 267.21 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook N15R Pro | 234.90 € | **224.50 €** | 10.1 % | **5.2 %** | 212.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Strong SRT40FF2003C | 222.90 € | **212.50 €** | 10.2 % | **5.0 %** | 207.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maono AME2 Sound Card Black | 85.90 € | **75.90 €** | 18.9 % | **5.1 %** | 31.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| UMAX VisionBook 14WQ LTE (UMM230242) | 213.50 € | **203.90 €** | 10.1 % | **5.1 %** | 186.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fontána na pitie pre domáce zvieratá Fontanna Petkit | 114.00 € | **104.50 €** | 14.8 % | **5.3 %** | 89.61 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 48.50 € | **39.00 €** | 55.0 % | **24.6 %** | 39.08 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 506.50 € | **497.00 €** | 15.0 % | **12.9 %** | 497.20 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 79.90 € | **70.90 €** | 18.9 % | **5.5 %** | 70.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal SV9201E0 | 195.50 € | **186.50 €** | 10.3 % | **5.2 %** | 186.63 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C220 IP, 4MPx, WiFi, prísvit | 43.50 € | **35.00 €** | 30.6 % | **5.1 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 139.50 € | **131.00 €** | 19.3 % | **12.0 %** | 131.30 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Charles i4 Plus White | 176.00 € | **168.00 €** | 10.0 % | **5.0 %** | 121.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Charles i4 Plus Black | 176.00 € | **168.00 €** | 10.0 % | **5.0 %** | 121.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER DCP-1510E | 141.90 € | **133.90 €** | 11.5 % | **5.2 %** | 126.61 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router GL.iNet Flint 2 Wi-Fi 6 | 232.50 € | **224.50 €** | 15.1 % | **11.1 %** | 224.59 € | cena podľa najlacnejšieho iného predajcu |
| Gril G21 Hawaii, Elektrický | 158.00 € | **150.50 €** | 10.5 % | **5.2 %** | 135.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vibrační plošina SKY SVP13 | 275.00 € | **267.50 €** | 8.1 % | **5.1 %** | 254.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 29.00 € | **21.50 €** | 45.3 % | **7.7 %** | 21.57 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i3 Plus bílá | 150.90 € | **143.90 €** | 10.2 % | **5.1 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router GL.iNet Slate 7 | 208.90 € | **201.90 €** | 20.1 % | **16.1 %** | 202.00 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT32HG4723C | 182.90 € | **176.00 €** | 10.0 % | **5.9 %** | 176.20 € | cena podľa najlacnejšieho iného predajcu |
| ETA Delicca II 7149 90030, černá/nerez | 141.50 € | **134.90 €** | 10.3 % | **5.2 %** | 117.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy FIDC N100 | 138.50 € | **131.90 €** | 10.4 % | **5.1 %** | 130.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool OMK38HU0B | 230.50 € | **224.00 €** | 8.8 % | **5.7 %** | 224.01 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 115.50 € | **109.00 €** | 13.8 % | **7.4 %** | 109.40 € | cena podľa najlacnejšieho iného predajcu |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 5766.50 € | **5760.50 €** | 8.1 % | **8.0 %** | 5760.52 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool AMW 6440 FB | 398.50 € | **392.50 €** | 10.1 % | **8.4 %** | 392.60 € | cena podľa najlacnejšieho iného predajcu |
| Softbox Neewer 65 cm | 93.00 € | **87.00 €** | 43.8 % | **34.5 %** | 87.21 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 115.00 € | **109.00 €** | 13.9 % | **8.0 %** | 109.40 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 49.00 € | **43.00 €** | 30.2 % | **14.2 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu |
| MSI G32C4X | 150.90 € | **145.00 €** | 10.1 % | **5.8 %** | 145.30 € | cena podľa najlacnejšieho iného predajcu |
| JBL Xtreme 3 black | 198.90 € | **193.00 €** | 17.8 % | **14.3 %** | 193.41 € | cena podľa najlacnejšieho iného predajcu |
| Spájkovacia stanica FNIRSI DWS-200F s výkonom 200 W | 125.50 € | **119.90 €** | 10.2 % | **5.3 %** | 102.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy CDG1S514DW | 246.50 € | **240.90 €** | 7.5 % | **5.1 %** | 231.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MINI-PC Minis Forum UM890 Pro Ryzen 9 8945HS barebone | 631.50 € | **626.00 €** | 15.0 % | **14.0 %** | 626.50 € | cena podľa najlacnejšieho iného predajcu |
| WHIRLPOOL AKR 749/1 WH | 122.90 € | **117.50 €** | 10.2 % | **5.3 %** | 97.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Strong SRT24HG4723C | 143.90 € | **138.50 €** | 10.1 % | **6.0 %** | 138.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO skleněná poklice 18 | 20.00 € | **14.90 €** | 43.6 % | **7.0 %** | 14.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ROWENTA RY6555WH | 104.90 € | **99.90 €** | 10.3 % | **5.0 %** | 84.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ANMITE A160W03,16" | 90.00 € | **85.00 €** | 19.4 % | **12.8 %** | 85.10 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 54 | 67.50 € | **62.90 €** | 15.7 % | **7.8 %** | 63.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 112.50 € | **107.90 €** | 9.5 % | **5.0 %** | 101.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava celodenných filtrov Freewell Real Locking s ... | 224.50 € | **219.90 €** | 17.3 % | **14.9 %** | 219.97 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **110.00 €** | 18.8 % | **14.1 %** | 110.05 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V803, 12 000 mAh | 129.00 € | **124.50 €** | 43.9 % | **38.9 %** | 124.66 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MO20A3WH | 75.50 € | **71.00 €** | 14.7 % | **7.9 %** | 71.20 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 148.00 € | **143.50 €** | 31.4 % | **27.4 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (béžové) | 44.00 € | **39.50 €** | 32.1 % | **18.5 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 44.00 € | **39.50 €** | 32.1 % | **18.5 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH20C0WO | 227.50 € | **223.00 €** | 9.2 % | **7.1 %** | 223.41 € | cena podľa najlacnejšieho iného predajcu |
| CANON PIXMA TS6550i White | 91.90 € | **87.50 €** | 10.3 % | **5.0 %** | 57.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ROWENTA ZR006501 | 18.90 € | **14.50 €** | 42.4 % | **9.3 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ľadových kociek Euhomy IM001, 1,2 l, 12 kg ... | 63.90 € | **59.50 €** | 15.0 % | **7.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| EPSON EcoTank L4360 | 288.90 € | **284.90 €** | 6.5 % | **5.0 %** | 224.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| EPSON EcoTank L4366 | 288.90 € | **284.90 €** | 6.5 % | **5.0 %** | 224.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL BAR 2.1 Deep Bass MK2 | 313.90 € | **309.90 €** | 6.4 % | **5.0 %** | 283.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Pečenka MINI 1133 90000, černý | 82.50 € | **78.50 €** | 10.6 % | **5.2 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Stellar 1221 90000, černý/modrý | 78.50 € | **74.50 €** | 10.7 % | **5.1 %** | 69.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO252SV | 109.00 € | **105.00 €** | 15.5 % | **11.3 %** | 105.10 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT32HH5553 | 121.00 € | **117.00 €** | 10.1 % | **6.4 %** | 117.30 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT32HF2003 | 119.50 € | **115.50 €** | 10.0 % | **6.3 %** | 115.90 € | cena podľa najlacnejšieho iného predajcu |
| 360° Outdoor Wi-Fi Camera IMOU Cruiser SE+ 3MP | 42.50 € | **38.90 €** | 15.1 % | **5.3 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sušička ovoce Ruhhy 25928 400W | 59.50 € | **55.90 €** | 26.4 % | **18.8 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CB6A0830 | 77.50 € | **73.90 €** | 10.4 % | **5.3 %** | 65.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SALENTE SuChef | 83.50 € | **79.90 €** | 10.1 % | **5.4 %** | 72.12 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Salente Combo-4In1-Ss | 129.50 € | **126.00 €** | 10.2 % | **7.2 %** | 126.07 € | cena podľa najlacnejšieho iného predajcu |
| MSI PRO MP273 E14A | 91.50 € | **88.00 €** | 10.3 % | **6.1 %** | 88.20 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Aura 5 ANC | 49.50 € | **46.00 €** | 47.7 % | **37.2 %** | 46.20 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2505.00 € | **2501.50 €** | 13.9 % | **13.8 %** | 2501.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **12.00 €** | 56.3 % | **21.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| JBL Wave Buds 2 černá | 62.90 € | **59.50 €** | 11.8 % | **5.7 %** | 43.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Outdoor WiFi Camera IMOU Bullet 2E 5MP | 38.00 € | **34.90 €** | 15.1 % | **5.7 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **16.90 €** | 35.1 % | **14.1 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Detektor káblov FNIRSI WD-01 | 35.00 € | **32.00 €** | 15.2 % | **5.3 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK TL-MR150 4G LTE WiFi N Router | 69.90 € | **66.90 €** | 10.3 % | **5.5 %** | 66.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Polaris | 47.50 € | **44.50 €** | 20.7 % | **13.1 %** | 44.53 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **50.00 €** | 14.9 % | **8.4 %** | 50.17 € | cena podľa najlacnejšieho iného predajcu |
| TESLA PowerWash & Steam Station TQS600 | 121.50 € | **118.50 €** | 10.2 % | **7.5 %** | 118.89 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk GODOX MF12 | 116.00 € | **113.00 €** | 17.0 % | **14.0 %** | 113.39 € | cena podľa najlacnejšieho iného predajcu |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 69.90 € | **67.00 €** | 12.1 % | **7.4 %** | 67.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight elektrický sušiak uterákov 130W | 106.90 € | **104.00 €** | 63.9 % | **59.5 %** | 104.39 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK M7000 4G LTE WiFi 4G Modem | 58.90 € | **56.00 €** | 10.5 % | **5.0 %** | 50.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Monokulárny ďalekohľad LEVENHUK Halo NVM20 Helmet s ... | 555.50 € | **552.90 €** | 8.6 % | **8.0 %** | 552.91 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Samsung S25 Ultra so 17 mm držiakom | 45.50 € | **42.90 €** | 14.6 % | **8.0 %** | 42.92 € | cena podľa najlacnejšieho iného predajcu |
| Podpera pozadia pre fotoštúdio Puluz 70x200cm + poza... | 23.50 € | **20.90 €** | 29.5 % | **15.2 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 66.50 € | **64.00 €** | 9.2 % | **5.1 %** | 55.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANDY CH 64 XB | 165.00 € | **162.50 €** | 15.4 % | **13.6 %** | 162.51 € | cena podľa najlacnejšieho iného predajcu |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 106.50 € | **104.00 €** | 14.3 % | **11.6 %** | 104.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.50 € | **16.00 €** | 31.6 % | **13.8 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.50 € | **18.00 €** | 43.8 % | **26.3 %** | 18.34 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajší LED svetelný záves – hviezdy Solight 1V227-... | 13.50 € | **11.00 €** | 38.6 % | **12.9 %** | 11.39 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 48.00 € | **45.50 €** | 24.2 % | **17.8 %** | 45.89 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter na odstraňova... | 192.50 € | **190.00 €** | 28.7 % | **27.1 %** | 190.50 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 23.50 € | **21.00 €** | 30.8 % | **16.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 127.90 € | **125.50 €** | 15.3 % | **13.1 %** | 125.78 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 170.90 € | **168.50 €** | 42.2 % | **40.2 %** | 168.90 € | cena podľa najlacnejšieho iného predajcu |
| Midland XT10 | 52.90 € | **50.50 €** | 10.3 % | **5.3 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Creality K2 Pro Combo | 748.90 € | **746.50 €** | 9.1 % | **8.7 %** | 746.59 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.4 % | **5.4 %** | 9.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal FV2863E1 | 40.90 € | **38.90 €** | 10.5 % | **5.1 %** | 31.07 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PS5 - PlayStation Pulse Explore + Case | 198.00 € | **196.00 €** | 6.1 % | **5.0 %** | 190.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor napětí KEMOT SER-500-W URZ3439-500-W s ... | 35.50 € | **33.50 €** | 12.1 % | **5.8 %** | 29.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor napětí KEMOT SER-500-S URZ3438-500-S s ... | 34.50 € | **32.50 €** | 11.7 % | **5.3 %** | 29.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK Archer AX17 WiFi Router | 41.90 € | **39.90 €** | 10.3 % | **5.0 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight WIFI zásuvka s meraním spotreby | 12.00 € | **10.00 €** | 36.6 % | **13.9 %** | 10.05 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 316.00 € | **314.00 €** | 5.8 % | **5.1 %** | 314.20 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.50 € | **47.50 €** | 46.3 % | **40.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 26.50 € | **24.50 €** | 19.4 % | **10.4 %** | 24.87 € | cena podľa najlacnejšieho iného predajcu |
| BoboVR G3 Grip Cover – návleky na rukoväte pre VR | 22.00 € | **20.00 €** | 48.6 % | **35.1 %** | 20.43 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT2V-30 Ceramic/Electric cooktop | 78.90 € | **77.00 €** | 18.8 % | **16.0 %** | 77.16 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L3350 | 180.90 € | **179.00 €** | 6.4 % | **5.3 %** | 179.19 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz s pumpou, 4 ks | 38.90 € | **37.00 €** | 18.7 % | **12.9 %** | 37.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.70 € | **8.00 €** | 28.2 % | **5.8 %** | 7.92 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO7057S | 36.50 € | **34.90 €** | 10.9 % | **6.1 %** | 33.23 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Horizon3 Black | 131.50 € | **129.90 €** | 6.5 % | **5.2 %** | 121.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Horizon3 Grey | 131.50 € | **129.90 €** | 6.5 % | **5.2 %** | 121.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE505X AX1500 WiFi 6 Extender | 42.00 € | **40.50 €** | 10.1 % | **6.1 %** | 37.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.00 € | **34.50 €** | 10.3 % | **5.7 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko B3BCNA324HS | 626.00 € | **624.50 €** | 10.5 % | **10.3 %** | 624.60 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1440.50 € | **1439.00 €** | 7.2 % | **7.1 %** | 1439.15 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 48.00 € | **46.50 €** | 9.6 % | **6.2 %** | 46.79 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 15.50 € | **14.00 €** | 72.6 % | **55.9 %** | 14.31 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.50 € | **28.00 €** | 10.6 % | **5.0 %** | 28.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 41.00 € | **39.50 €** | 43.0 % | **37.8 %** | 39.86 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17P FIXPUM-1602-TR | 17.00 € | **15.50 €** | 22.4 % | **11.6 %** | 15.86 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 38.00 € | **36.50 €** | 10.5 % | **6.2 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| ETA Essenco 1634 90000, bílý | 27.50 € | **26.00 €** | 11.3 % | **5.2 %** | 26.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.50 € | **58.00 €** | 37.3 % | **33.8 %** | 58.43 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2011300 | 202.90 € | **201.50 €** | 10.1 % | **9.3 %** | 201.60 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Onyx BS2400 | 30.90 € | **29.50 €** | 11.2 % | **6.1 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 23.90 € | **22.50 €** | 15.9 % | **9.1 %** | 22.61 € | cena podľa najlacnejšieho iného predajcu |
| PXN Z D1 Rukoväť ručnej brzdy | 25.90 € | **24.50 €** | 15.3 % | **9.1 %** | 24.71 € | cena podľa najlacnejšieho iného predajcu |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.00 € | **45.90 €** | 7.8 % | **5.3 %** | 44.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Sušák Classic 100 Easy | 20.50 € | **19.50 €** | 12.9 % | **7.4 %** | 9.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK TL-WA855RE Wireless N Extender | 20.50 € | **19.50 €** | 11.8 % | **6.3 %** | 15.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0026 | 20.90 € | **19.90 €** | 12.1 % | **6.7 %** | 17.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0027 | 20.90 € | **19.90 €** | 12.1 % | **6.7 %** | 17.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PS5 - vertical stand | 29.50 € | **28.50 €** | 10.2 % | **6.4 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Náhradné filtre pre Catlink litter box Scooper 2ks. | 10.90 € | **9.90 €** | 17.1 % | **6.3 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **43.00 €** | 49.4 % | **46.0 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 24.90 € | **23.90 €** | 13.4 % | **8.9 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 248.90 € | **247.90 €** | 8.9 % | **8.4 %** | 248.00 € | cena podľa najlacnejšieho iného predajcu |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 393.90 € | **392.90 €** | 7.8 % | **7.5 %** | 393.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 36.00 € | **35.00 €** | 49.9 % | **45.8 %** | 35.13 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1019.00 € | **1018.00 €** | 10.6 % | **10.5 %** | 1018.15 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 81.50 € | **80.50 €** | 13.7 % | **12.3 %** | 80.66 € | cena podľa najlacnejšieho iného predajcu |
| Ali puzdro Mag-Skin iPhon17 Pro PAS0028 | 16.00 € | **15.00 €** | 21.1 % | **13.5 %** | 15.23 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie GODOX ML40R | 115.50 € | **114.50 €** | 15.2 % | **14.2 %** | 114.78 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.50 € | **58.50 €** | 38.1 % | **35.8 %** | 58.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Polia, ... | 34.00 € | **33.00 €** | 37.6 % | **33.5 %** | 33.31 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY Buds HT15 ANC (čierne) | 16.50 € | **15.50 €** | 21.3 % | **13.9 %** | 15.87 € | cena podľa najlacnejšieho iného predajcu |
| Sada pro přežití LEVENHUK LabZZ SK40 | 43.00 € | **42.00 €** | 7.9 % | **5.4 %** | 42.39 € | cena podľa najlacnejšieho iného predajcu |
| AMIKO Mini HD265 | 49.50 € | **48.50 €** | 14.7 % | **12.4 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 20.00 € | **19.00 €** | 37.9 % | **31.0 %** | 19.40 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI GD-02 Detektor horľavých plynov s farebným di... | 37.00 € | **36.00 €** | 17.4 % | **14.2 %** | 36.49 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 95.00 € | **94.00 €** | 20.1 % | **18.9 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Tesla Smart Dehumidifer XL Filter | 16.90 € | **15.90 €** | 12.5 % | **5.9 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Linomatic 500 Easy 85286 | 99.90 € | **99.00 €** | 10.1 % | **9.1 %** | 99.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **12.00 €** | 49.2 % | **38.8 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia kempingová lampa, 400lm, Li-Io... | 11.90 € | **11.00 €** | 54.5 % | **42.9 %** | 11.16 € | cena podľa najlacnejšieho iného predajcu |
| CANON PG-545BK Black | 16.90 € | **16.00 €** | 11.3 % | **5.4 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete Yogurella 621 | 19.90 € | **19.00 €** | 10.3 % | **5.3 %** | 18.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO436BL | 35.90 € | **35.00 €** | 10.1 % | **7.3 %** | 35.01 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Haylou RS4 Plus (čierne) | 34.90 € | **34.00 €** | 16.6 % | **13.6 %** | 34.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.90 € | **25.00 €** | 54.3 % | **48.9 %** | 25.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.90 € | **19.00 €** | 37.7 % | **31.5 %** | 19.48 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 28 černý | 44.90 € | **44.00 €** | 10.5 % | **8.3 %** | 44.50 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate Graphite Black | 270.90 € | **270.00 €** | 16.5 % | **16.1 %** | 270.22 € | cena podľa najlacnejšieho iného predajcu |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.70 € | **6.00 €** | 45.6 % | **30.4 %** | 6.08 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka EMOS NTBF30 / B0561B /, 27 000 mAh, 100 W... | 63.50 € | **62.90 €** | 6.1 % | **5.0 %** | 42.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PIXMA MG2556S Black | 53.50 € | **52.90 €** | 6.6 % | **5.4 %** | 37.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ochranná puzzle podložka HMS Premium MP12 tmavě šedá | 33.50 € | **32.90 €** | 7.9 % | **6.0 %** | 19.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-Link Tapo P300 | 40.50 € | **39.90 €** | 7.5 % | **5.9 %** | 32.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skúšačka UNI-T UT18D vadaska | 42.50 € | **41.90 €** | 7.2 % | **5.7 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal DB1612E0 | 25.50 € | **24.90 €** | 8.5 % | **5.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit 81520 Pegasus 200 Solid | 38.50 € | **37.90 €** | 16.8 % | **15.0 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný napájací zdroj k LED panelom | 6.40 € | **5.80 €** | 43.7 % | **30.3 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.80 €** | 55.3 % | **27.9 %** | 2.87 € | cena podľa najlacnejšieho iného predajcu |
| XIAOMI Mi Portable Photo Printer Paper | 13.50 € | **12.90 €** | 12.1 % | **7.1 %** | 8.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.50 € | **7.90 €** | 37.4 % | **27.7 %** | 7.99 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool MWSC 833 SB | 312.50 € | **312.00 €** | 5.2 % | **5.0 %** | 248.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight digitálny časový spínač | 7.50 € | **7.00 €** | 46.2 % | **36.5 %** | 7.02 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 36.50 € | **36.00 €** | 31.7 % | **29.9 %** | 36.03 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz, 3 ks | 23.50 € | **23.00 €** | 16.3 % | **13.8 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast 437/00, tmavě šedá | 28.50 € | **28.00 €** | 10.4 % | **8.5 %** | 28.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 23.5 % | **20.5 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 37.4 % | **34.1 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro SG A35 5G FIXOP3-1262-BK | 13.00 € | **12.50 €** | 21.8 % | **17.1 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus M2 bicycle computer | 29.50 € | **29.00 €** | 13.8 % | **11.9 %** | 29.18 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 39.50 € | **39.00 €** | 10.1 % | **8.7 %** | 39.24 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 388.50 € | **388.00 €** | 17.7 % | **17.5 %** | 388.27 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 310 USB-C Blue | 17.00 € | **16.50 €** | 13.6 % | **10.2 %** | 16.78 € | cena podľa najlacnejšieho iného predajcu |
| Casio Fx 85 Es Plus 2E | 20.50 € | **20.00 €** | 13.8 % | **11.1 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 265.50 € | **265.00 €** | 7.1 % | **6.9 %** | 265.30 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 247.00 € | **246.50 €** | 31.0 % | **30.8 %** | 246.81 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 345.00 € | **344.50 €** | 11.4 % | **11.3 %** | 344.83 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 345.00 € | **344.50 €** | 14.4 % | **14.2 %** | 344.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **12.00 €** | 46.9 % | **41.0 %** | 12.34 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 208.50 € | **208.00 €** | 16.6 % | **16.3 %** | 208.35 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 208.50 € | **208.00 €** | 16.6 % | **16.3 %** | 208.35 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.50 € | **208.00 €** | 16.6 % | **16.3 %** | 208.35 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 208.50 € | **208.00 €** | 16.6 % | **16.3 %** | 208.35 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection brown | 208.50 € | **208.00 €** | 16.6 % | **16.3 %** | 208.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér s USB A+C 20W PD do Veľkej ... | 10.50 € | **10.00 €** | 31.3 % | **25.1 %** | 10.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér s USB A+C 20W PD do Spojený... | 10.50 € | **10.00 €** | 31.3 % | **25.1 %** | 10.35 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.50 € | **159.00 €** | 6.9 % | **6.6 %** | 159.35 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic Siena 180 Easy | 27.00 € | **26.50 €** | 13.0 % | **10.9 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 32.00 € | **31.50 €** | 15.0 % | **13.2 %** | 31.89 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.00 €** | 11.2 % | **8.2 %** | 18.39 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 378.00 € | **377.50 €** | 5.1 % | **5.0 %** | 377.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 320.50 € | **320.00 €** | 10.1 % | **9.9 %** | 320.39 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Yogurella 617 | 28.00 € | **27.50 €** | 12.6 % | **10.6 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1286.00 € | **1285.50 €** | 7.5 % | **7.4 %** | 1285.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 52.50 € | **52.00 €** | 9.9 % | **8.8 %** | 52.39 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 727.50 € | **727.00 €** | 9.0 % | **8.9 %** | 727.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 203.00 € | **202.50 €** | 7.6 % | **7.3 %** | 202.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 267.50 € | **267.00 €** | 6.6 % | **6.4 %** | 267.39 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 36.50 € | **36.00 €** | 17.7 % | **16.1 %** | 36.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 665.50 € | **665.00 €** | 9.0 % | **8.9 %** | 665.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 103.50 € | **103.00 €** | 9.6 % | **9.1 %** | 103.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 103.50 € | **103.00 €** | 16.6 % | **16.0 %** | 103.39 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 409BT | 51.00 € | **50.50 €** | 30.9 % | **29.6 %** | 50.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 27.00 € | **26.50 €** | 12.3 % | **10.3 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 150.00 € | **149.50 €** | 11.6 % | **11.2 %** | 149.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 141.50 € | **141.00 €** | 6.6 % | **6.2 %** | 141.40 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle držiak s MgS FIXMC-V-BK | 19.00 € | **18.50 €** | 32.7 % | **29.2 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W2 TUYA | 14.00 € | **13.50 €** | 43.4 % | **38.2 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre BOBOVR M2 Pro + nabíjacia stanica | 34.50 € | **34.00 €** | 38.6 % | **36.6 %** | 34.40 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-0360 4.0 Mpix venkovní IP dome kamera... | 117.50 € | **117.00 €** | 18.1 % | **17.6 %** | 117.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.50 € | **10.00 €** | 35.3 % | **28.8 %** | 10.46 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R60 eXtremo Black Orange | 91.50 € | **91.00 €** | 14.6 % | **14.0 %** | 91.46 € | cena podľa najlacnejšieho iného predajcu |
| Stojany na činky nastaviteľné REBEL ACTIVE RBA-2402 | 61.50 € | **61.00 €** | 6.4 % | **5.5 %** | 61.46 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.50 € | **78.00 €** | 9.4 % | **8.7 %** | 78.47 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.50 € | **79.00 €** | 14.6 % | **13.9 %** | 79.49 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600 | 71.50 € | **71.00 €** | 11.2 % | **10.4 %** | 71.49 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 (čierny) | 27.50 € | **27.00 €** | 16.0 % | **13.9 %** | 27.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 41.50 € | **41.00 €** | 7.6 % | **6.3 %** | 41.49 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 118.50 € | **118.00 €** | 31.7 % | **31.1 %** | 118.49 € | cena podľa najlacnejšieho iného predajcu |
| kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, ... | 113.90 € | **113.50 €** | 5.8 % | **5.4 %** | 112.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 82.90 € | **82.50 €** | 33.7 % | **33.1 %** | 82.58 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 86.90 € | **86.50 €** | 15.0 % | **14.5 %** | 86.89 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 92.90 € | **92.50 €** | 17.7 % | **17.2 %** | 92.90 € | cena podľa najlacnejšieho iného predajcu |
| Banquet Termoska BODO 430ml zla.met. | 10.90 € | **10.50 €** | 13.6 % | **9.4 %** | 7.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.50 € | **5.10 €** | 46.6 % | **35.9 %** | 5.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.90 € | **15.50 €** | 37.5 % | **34.1 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.90 € | **11.50 €** | 38.0 % | **33.4 %** | 11.62 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 11.90 € | **11.50 €** | 34.7 % | **30.2 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W4 TUYA | 13.90 € | **13.50 €** | 15.4 % | **12.1 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight viazacie nylonové pásky, 3,6 x 300mm, natura... | 2.40 € | **2.00 €** | 54.9 % | **29.0 %** | 2.03 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HT461138 | 42.90 € | **42.50 €** | 6.4 % | **5.4 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| D-LINK 5-Port Gigabit Switch (DGS-105GL) | 17.90 € | **17.50 €** | 10.9 % | **8.4 %** | 17.65 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RACING SRP2 Zadný držiak | 41.90 € | **41.50 €** | 14.8 % | **13.7 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na cvičení Rebel Active RBA-3159-2PU na jóg... | 45.90 € | **45.50 €** | 73.9 % | **72.4 %** | 45.80 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Rouge BP3443 | 31.90 € | **31.50 €** | 10.7 % | **9.3 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 29.90 € | **29.50 €** | 19.2 % | **17.6 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 29.90 € | **29.50 €** | 10.6 % | **9.1 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 23.90 € | **23.50 €** | 10.3 % | **8.4 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 23.90 € | **23.50 €** | 10.3 % | **8.4 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Tefal D5220683 | 29.90 € | **29.50 €** | 11.9 % | **10.4 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter xTool SafetyPro™ AP2 so strednou účinnosťou | 36.90 € | **36.50 €** | 39.5 % | **38.0 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Polk Audio SIGNATURE ES30 centr. Blac | 265.90 € | **265.50 €** | 70.8 % | **70.6 %** | 265.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 7.80 € | **7.50 €** | 38.8 % | **33.4 %** | 7.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.80 €** | 38.1 % | **34.6 %** | 7.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.60 €** | 42.9 % | **38.0 %** | 5.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.70 €** | 37.9 % | **30.8 %** | 3.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 295.00 € | **294.90 €** | 12.8 % | **12.8 %** | 294.97 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 491.00 € | **490.90 €** | 40.4 % | **40.4 %** | 490.99 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 307.00 € | **306.90 €** | 46.3 % | **46.3 %** | 306.99 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 334.00 € | **333.90 €** | 22.3 % | **22.3 %** | 333.99 € | cena podľa najlacnejšieho iného predajcu |
| Boxerské rukavice DBX BUSHIDO B-2v17 12 oz | 37.00 € | **36.90 €** | 5.4 % | **5.2 %** | 23.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Boxerské rukavice DBX BUSHIDO B-2v17 14 oz | 37.00 € | **36.90 €** | 5.4 % | **5.2 %** | 23.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Boxerské rukavice DBX BUSHIDO B-2v17 8 oz | 37.00 € | **36.90 €** | 5.4 % | **5.2 %** | 23.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tréninkový blok DBX BUSHIDO T55 | 50.00 € | **49.90 €** | 5.6 % | **5.4 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slip Bag DBX BUSHIDO DBX-SB-10 | 37.00 € | **36.90 €** | 5.4 % | **5.2 %** | 29.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **19.90 €** | 44.9 % | **44.2 %** | 19.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.00 € | **21.90 €** | 35.3 % | **34.7 %** | 21.92 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 62.00 € | **61.90 €** | 24.9 % | **24.7 %** | 61.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 47.00 € | **46.90 €** | 17.1 % | **16.8 %** | 46.97 € | cena podľa najlacnejšieho iného predajcu |
| MAXXO VC 1800 | 24.00 € | **23.90 €** | 7.9 % | **7.5 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 40.00 € | **39.90 €** | 6.7 % | **6.4 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC410 KIT 3MPx, vonkajšia, I... | 61.00 € | **60.90 €** | 7.5 % | **7.3 %** | 60.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.00 € | **47.90 €** | 12.6 % | **12.4 %** | 47.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.00 € | **47.90 €** | 14.9 % | **14.7 %** | 47.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 24.00 € | **23.90 €** | 9.3 % | **8.9 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 24.00 € | **23.90 €** | 9.3 % | **8.9 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 24.00 € | **23.90 €** | 9.3 % | **8.9 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Buxton BHP 7300 BLACK BT | 22.00 € | **21.90 €** | 11.0 % | **10.5 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.50 € | **3.40 €** | 37.5 % | **33.5 %** | 3.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 3.50 € | **3.40 €** | 37.5 % | **33.5 %** | 3.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 2.20 € | **2.10 €** | 37.6 % | **31.3 %** | 2.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 4000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 3.30 € | **3.20 €** | 34.8 % | **30.7 %** | 3.24 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 9.00 € | **8.90 €** | 20.1 % | **18.8 %** | 8.99 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.50 € | **5.40 €** | 144.3 % | **139.9 %** | 5.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajší LED vianočný stromček Solight 1V290, 68 cm,... | 14.00 € | **13.90 €** | 57.2 % | **56.1 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.30 € | **4.20 €** | 44.5 % | **41.1 %** | 4.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 8.90 € | **8.80 €** | 7.7 % | **6.5 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.70 € | **9.60 €** | 32.5 % | **31.2 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 218.00 € | **217.90 €** | 5.4 % | **5.3 %** | 217.93 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21L3C-L 2.0 Mpix venkovní dome IP kamera s ... | 91.00 € | **90.90 €** | 17.8 % | **17.7 %** | 90.94 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.00 € | **216.90 €** | 13.9 % | **13.9 %** | 216.99 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.00 € | **216.90 €** | 37.0 % | **36.9 %** | 216.99 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 146.00 € | **145.90 €** | 51.9 % | **51.8 %** | 146.00 € | cena podľa najlacnejšieho iného predajcu |

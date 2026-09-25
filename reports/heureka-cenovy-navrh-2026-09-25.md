# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-25

Vstup: `premiumstore-sk_2026-09-25_14-05.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7060**
- Návrh **zvýšiť** cenu: **238** produktov
- Návrh **znížiť** cenu: **302** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6520** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **49**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **509**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (238)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 867.00 € | **1136.90 €** | 14.3 % | **49.9 %** | 1137.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 760.00 € | **1016.90 €** | 8.5 % | **45.2 %** | 1017.00 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 466.50 € | **618.50 €** | 8.1 % | **43.3 %** | 618.88 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 306.00 € | **394.50 €** | 10.7 % | **42.8 %** | 394.89 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 197.90 € | **262.00 €** | 5.4 % | **39.5 %** | 262.21 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 396.00 € | **453.00 €** | 7.3 % | **22.8 %** | 453.04 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH7AC1E0 | 227.00 € | **275.90 €** | 10.0 % | **33.7 %** | 275.99 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE Apex | 493.00 € | **539.90 €** | 28.2 % | **40.4 %** | 540.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 999.90 € | **1046.50 €** | 16.9 % | **22.3 %** | 1046.83 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 24 GS2401 | 480.00 € | **525.00 €** | 9.2 % | **19.5 %** | 525.08 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 499.50 € | **543.50 €** | 8.6 % | **18.2 %** | 543.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT1302 (2.5K) | 402.50 € | **442.50 €** | 29.5 % | **42.4 %** | 442.53 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 16 GT156 | 402.50 € | **442.50 €** | 14.0 % | **25.3 %** | 442.53 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 318.50 € | **358.50 €** | 10.9 % | **24.8 %** | 358.88 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 205.00 € | **244.50 €** | 7.3 % | **28.0 %** | 244.90 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 795.50 € | **835.00 €** | 16.9 % | **22.8 %** | 835.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T25B2 | 376.00 € | **415.00 €** | 16.0 % | **28.0 %** | 415.21 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 391.00 € | **429.00 €** | 11.6 % | **22.5 %** | 429.04 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 784.00 € | **819.90 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 418.00 € | **452.50 €** | 12.8 % | **22.1 %** | 452.58 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 496.50 € | **530.00 €** | 15.4 % | **23.2 %** | 530.38 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 471.50 € | **504.90 €** | 12.1 % | **20.1 %** | 504.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 365.50 € | **398.90 €** | 9.2 % | **19.2 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 448.00 € | **478.50 €** | 8.0 % | **15.4 %** | 478.75 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 358.90 € | **388.90 €** | 26.7 % | **37.3 %** | 389.00 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V066, 18 000 mAh | 234.00 € | **258.50 €** | 14.9 % | **26.9 %** | 258.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 235 | 444.50 € | **468.50 €** | 6.4 % | **12.1 %** | 468.80 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 125.50 € | **148.00 €** | 5.3 % | **24.2 %** | 148.17 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 217.00 € | **238.90 €** | 9.8 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 604.50 € | **626.00 €** | 13.5 % | **17.5 %** | 626.39 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 154.00 € | **174.00 €** | 21.6 % | **37.4 %** | 174.06 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 518.50 € | **537.00 €** | 10.5 % | **14.4 %** | 537.01 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 331.50 € | **350.00 €** | 7.6 % | **13.6 %** | 350.20 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Podsie 4 POP Onyx Black | 19.90 € | **37.50 €** | 5.9 % | **99.5 %** | 37.76 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 291.00 € | **308.50 €** | 38.7 % | **47.1 %** | 308.89 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Sony | 126.90 € | **141.90 €** | 6.5 % | **19.1 %** | 142.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Unlimited pánev 28cm G2550672 | 42.50 € | **57.50 €** | 10.5 % | **49.5 %** | 57.73 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.50 € | **129.50 €** | 17.9 % | **33.3 %** | 129.84 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C100PRO | 67.00 € | **81.50 €** | 14.9 % | **39.7 %** | 81.88 € | cena podľa najlacnejšieho iného predajcu |
| Ninja FB151EUWH Frost Vault 47l | 226.00 € | **240.00 €** | 6.6 % | **13.2 %** | 240.42 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa Hluboká pánev 24cm | 17.00 € | **30.50 €** | 17.9 % | **111.6 %** | 30.89 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.00 € | **118.00 €** | 18.8 % | **33.6 %** | 118.10 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 580.50 € | **593.50 €** | 6.2 % | **8.6 %** | 593.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 93.00 € | **105.50 €** | 17.5 % | **33.3 %** | 105.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Thermo Reflect Glide&Park L/Uni | 18.50 € | **31.00 €** | 10.1 % | **84.5 %** | 31.38 € | cena podľa najlacnejšieho iného predajcu |
| LOKITHOR JA30000 PRO 46,08 Wh 3000 A štartér | 160.50 € | **173.00 €** | 5.0 % | **13.2 %** | 173.43 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1317.50 € | **1329.90 €** | 12.2 % | **13.3 %** | 1330.00 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 300.50 € | **312.50 €** | 13.5 % | **18.0 %** | 312.61 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21L3C-L 2.0 Mpix venkovní dome IP kamera s ... | 91.00 € | **103.00 €** | 17.5 % | **33.0 %** | 103.35 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 480.00 € | **492.00 €** | 13.1 % | **16.0 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 337.00 € | **348.90 €** | 11.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Girmi FM2105 Mikrovlnná trouba s grilem | 109.00 € | **120.50 €** | 9.9 % | **21.5 %** | 120.88 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 216.50 € | **228.00 €** | 8.0 % | **13.7 %** | 228.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 213.50 € | **223.90 €** | 11.2 % | **16.6 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 198.90 € | **209.00 €** | 6.2 % | **11.6 %** | 209.22 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TB0002 Pozadie | 39.50 € | **49.50 €** | 15.5 % | **44.8 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 157.00 € | **166.50 €** | 9.3 % | **15.9 %** | 166.60 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 157.00 € | **166.50 €** | 9.3 % | **15.9 %** | 166.60 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 301.00 € | **310.50 €** | 19.8 % | **23.6 %** | 310.67 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 455.00 € | **464.50 €** | 17.5 % | **20.0 %** | 464.68 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 50.00 € | **59.50 €** | 26.9 % | **51.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Pins 4 Arctic White | 32.90 € | **41.90 €** | 5.2 % | **34.0 %** | 41.96 € | cena podľa najlacnejšieho iného predajcu |
| Beko HSM14540 | 270.50 € | **279.50 €** | 13.6 % | **17.4 %** | 279.60 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Pins 4 Onyx Black | 32.90 € | **41.50 €** | 5.2 % | **32.7 %** | 41.66 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovacia guma REBEL ACTIVE RBA-3000-S4 Latexová ... | 18.90 € | **27.50 €** | 7.1 % | **55.8 %** | 27.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 322.50 € | **331.00 €** | 9.4 % | **12.3 %** | 331.01 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro XRN 15 4G FIXOP3-1643-BK | 12.00 € | **20.50 €** | 10.9 % | **89.4 %** | 20.63 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 115.50 € | **124.00 €** | 25.9 % | **35.2 %** | 124.13 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 224.50 € | **233.00 €** | 18.8 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 224.50 € | **233.00 €** | 18.8 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 221.50 € | **230.00 €** | 18.7 % | **23.3 %** | 230.50 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 4631 | 134.50 € | **142.50 €** | 7.1 % | **13.4 %** | 142.90 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 185.90 € | **193.50 €** | 5.0 % | **9.3 %** | 193.89 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 544.00 € | **551.50 €** | 9.3 % | **10.8 %** | 551.84 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 196.50 € | **203.90 €** | 17.5 % | **21.9 %** | 203.99 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V10 (PC / PS3 / PS4 / XBOX ONE / SW... | 204.90 € | **212.00 €** | 15.0 % | **19.0 %** | 212.40 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 114.00 € | **120.50 €** | 23070.7 % | **24391.9 %** | 120.89 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MY700BF0 | 120.00 € | **126.50 €** | 13.8 % | **19.9 %** | 126.90 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY-T Android TV 4K UHD Android TV multimed... | 93.00 € | **99.50 €** | 31.1 % | **40.2 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno Classic M BLACK | 36.50 € | **42.50 €** | 10.7 % | **28.9 %** | 42.60 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C300 | 123.50 € | **129.50 €** | 15.0 % | **20.6 %** | 129.85 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart Sada příslušenství pro iRobot R | 29.00 € | **34.90 €** | 7.1 % | **28.9 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 225.90 € | **231.50 €** | 43.7 % | **47.3 %** | 231.68 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 225.90 € | **231.50 €** | 35.5 % | **38.8 %** | 231.68 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 161.00 € | **166.50 €** | 6.0 % | **9.7 %** | 166.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Apple 17P FIXOP3-1602-BK | 12.00 € | **17.50 €** | 10.9 % | **61.7 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022600 | 120.50 € | **125.90 €** | 9.8 % | **14.7 %** | 126.00 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 483.50 € | **488.90 €** | 9.9 % | **11.1 %** | 489.00 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 262.00 € | **267.00 €** | 6.0 % | **8.0 %** | 267.02 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 16.50 € | **21.50 €** | 8.4 % | **41.3 %** | 21.68 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 135.00 € | **140.00 €** | 15.0 % | **19.2 %** | 140.38 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG9201 | 116.50 € | **121.50 €** | 9.7 % | **14.4 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| Smart Visual Ear-Clean Rod Bebird M9 S (black) | 24.50 € | **29.50 €** | 15.1 % | **38.6 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 912.90 € | **917.50 €** | 18.9 % | **19.5 %** | 917.54 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 105.90 € | **110.50 €** | 5.2 % | **9.8 %** | 110.70 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 243.00 € | **247.50 €** | 7.7 % | **9.7 %** | 247.54 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 40.50 € | **45.00 €** | 6.7 % | **18.5 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované liatinové činky HEX 2 × 7 kg REBEL ACTIVE... | 35.00 € | **39.50 €** | 6.8 % | **20.5 %** | 39.69 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Honor 400 FIXOP3-1552-BK | 12.00 € | **16.50 €** | 10.9 % | **52.4 %** | 16.70 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.00 € | **159.50 €** | 5.8 % | **8.9 %** | 159.70 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08WT | 17.00 € | **21.50 €** | 29.8 % | **64.1 %** | 21.77 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 572.50 € | **577.00 €** | 8.0 % | **8.9 %** | 577.40 € | cena podľa najlacnejšieho iného predajcu |
| Čerpadlo na balóny Flextail Evo (čierne) | 14.50 € | **19.00 €** | 6.0 % | **38.9 %** | 19.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 25.50 € | **29.90 €** | 15.0 % | **34.8 %** | 29.96 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 374.50 € | **378.90 €** | 3.9 % | **5.1 %** | 374.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo Chamber Line 30 | 186.50 € | **190.50 €** | 14.3 % | **16.7 %** | 190.58 € | cena podľa najlacnejšieho iného predajcu |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 95.90 € | **99.90 €** | 5.0 % | **9.4 %** | 99.99 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 465.50 € | **469.50 €** | 6.0 % | **6.9 %** | 469.60 € | cena podľa najlacnejšieho iného predajcu |
| Hori PS5/PS4/PC RWA: Racing Wheel Apex | 109.90 € | **113.90 €** | 10.2 % | **14.2 %** | 114.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GS1331 | 202.50 € | **206.50 €** | 15.5 % | **17.7 %** | 206.63 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 306.00 € | **310.00 €** | 20.3 % | **21.9 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 306.00 € | **310.00 €** | 19.2 % | **20.7 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 262.00 € | **266.00 €** | 23.3 % | **25.2 %** | 266.21 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mics | 159.50 € | **163.50 €** | 13.0 % | **15.9 %** | 163.79 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 243.00 € | **247.00 €** | 6.2 % | **7.9 %** | 247.30 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 375.50 € | **379.50 €** | 10.4 % | **11.6 %** | 379.85 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 141.50 € | **145.50 €** | 11.3 % | **14.5 %** | 145.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 207.50 € | **211.50 €** | 16.0 % | **18.2 %** | 211.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 308.00 € | **312.00 €** | 6.5 % | **7.9 %** | 312.40 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 323.00 € | **327.00 €** | 10.4 % | **11.8 %** | 327.43 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 133.00 € | **137.00 €** | 16.2 % | **19.6 %** | 137.49 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 163.00 € | **166.90 €** | 6.1 % | **8.6 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 235.00 € | **238.90 €** | 14.7 % | **16.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **560.90 €** | 6.6 % | **7.3 %** | 561.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 505.00 € | **508.90 €** | 34.1 % | **35.1 %** | 509.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 305.00 € | **308.90 €** | 14.1 % | **15.5 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Slate 11 | 326.50 € | **330.00 €** | 36.9 % | **38.3 %** | 330.07 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 132.50 € | **136.00 €** | 8.4 % | **11.2 %** | 136.12 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2459BS | 51.50 € | **55.00 €** | 9.9 % | **17.4 %** | 55.16 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 207.50 € | **211.00 €** | 8.4 % | **10.3 %** | 211.20 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 322.00 € | **325.50 €** | 7.0 % | **8.1 %** | 325.72 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 258.50 € | **262.00 €** | 18.7 % | **20.3 %** | 262.30 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 258.50 € | **262.00 €** | 27.7 % | **29.4 %** | 262.30 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE WPNEI94A1SWIFI | 407.00 € | **410.50 €** | 6.1 % | **7.0 %** | 410.80 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 24.50 € | **28.00 €** | 9.1 % | **24.7 %** | 28.33 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 43.00 € | **46.50 €** | 38.5 % | **49.7 %** | 46.84 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Vivo X300P FIXOP3-1609-BK | 12.00 € | **15.50 €** | 10.9 % | **43.2 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 210.50 € | **214.00 €** | 6.2 % | **7.9 %** | 214.48 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský robot G21 Promesso Brown | 211.50 € | **214.50 €** | 3.6 % | **5.1 %** | 207.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kuchynský robot G21 Promesso Iron Grey | 211.50 € | **214.50 €** | 3.6 % | **5.1 %** | 208.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 15.50 € | **18.50 €** | 11.9 % | **33.6 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Vivo X300 FIXOP3-1642-BK | 12.00 € | **15.00 €** | 10.9 % | **38.6 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXRA2001E olejový radiátor | 87.50 € | **90.50 €** | 10.1 % | **13.9 %** | 90.75 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 247.00 € | **250.00 €** | 15.8 % | **17.2 %** | 250.28 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 26.50 € | **29.50 €** | 5.6 % | **17.5 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 363.00 € | **366.00 €** | 6.0 % | **6.9 %** | 366.30 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta XD6220F0 | 37.00 € | **40.00 €** | 5.5 % | **14.1 %** | 40.30 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 504.50 € | **507.50 €** | 6.3 % | **7.0 %** | 507.80 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 44.50 € | **47.50 €** | 40.6 % | **50.1 %** | 47.89 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 67.50 € | **70.50 €** | 10.2 % | **15.1 %** | 70.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93503 Hrnec s pokličkou 24 cm | 48.00 € | **50.50 €** | 15.4 % | **21.4 %** | 50.65 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 105.00 € | **107.50 €** | 9.1 % | **11.7 %** | 107.89 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 177.00 € | **179.50 €** | 11.1 % | **12.7 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušák Comfort Tower 420 | 48.50 € | **50.90 €** | 10.5 % | **15.9 %** | 50.99 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT839 | 25.50 € | **27.90 €** | 15.2 % | **26.0 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit 81520 Pegasus 200 Solid | 36.90 € | **39.00 €** | 10.5 % | **16.8 %** | 39.49 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Gracioso horizontal | 201.90 € | **204.00 €** | 12.8 % | **14.0 %** | 204.49 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na pneumatiky Flextail Evo 150 (čierna) | 24.00 € | **26.00 €** | 24.8 % | **35.2 %** | 26.24 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXWSH2001E | 76.00 € | **78.00 €** | 10.1 % | **13.0 %** | 78.29 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 224.50 € | **226.50 €** | 6.9 % | **7.9 %** | 226.80 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Matter Over Wi-Fi nástenný spínač SONOF... | 15.50 € | **17.50 €** | 15.3 % | **30.2 %** | 17.85 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 333.50 € | **335.50 €** | 6.3 % | **6.9 %** | 335.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 7.80 € | **9.70 €** | 8.2 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 25.90 € | **27.50 €** | 6.2 % | **12.7 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada pro trénink boxu DBX BUSHIDO DBX Kids60.2 modrá | 57.00 € | **58.50 €** | 2.9 % | **5.6 %** | 29.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.00 € | **15.50 €** | 8.7 % | **20.4 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara 570lm ZOOM nabíjecí | 16.00 € | **17.50 €** | 11.7 % | **22.1 %** | 17.64 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Matter over WiFi nástenný spínač SONOFF... | 17.00 € | **18.50 €** | 15.0 % | **25.1 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 4 POP White | 18.50 € | **20.00 €** | 6.1 % | **14.7 %** | 20.48 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6812E0 | 53.50 € | **55.00 €** | 10.5 % | **13.6 %** | 55.50 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 192.50 € | **193.90 €** | 33.5 % | **34.5 %** | 193.99 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXIR2403E | 22.50 € | **23.90 €** | 11.3 % | **18.3 %** | 23.96 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 17.50 € | **18.90 €** | 94.9 % | **110.5 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFB 8469 BV EE | 344.50 € | **345.90 €** | 6.6 % | **7.0 %** | 346.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 327.50 € | **328.90 €** | 5.9 % | **6.3 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlící deska COMPACT Table | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 18.22 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim BLACK | 32.90 € | **34.00 €** | 11.3 % | **15.0 %** | 34.49 € | cena podľa najlacnejšieho iného predajcu |
| Ali puzdro Mag-Skin iPhon17 Pro PAS0028 | 14.90 € | **16.00 €** | 11.3 % | **19.6 %** | 16.30 € | cena podľa najlacnejšieho iného predajcu |
| Fixed MagPad, biela FIXMPAD2-WH | 12.90 € | **14.00 €** | 11.5 % | **21.0 %** | 14.46 € | cena podľa najlacnejšieho iného predajcu |
| Aroma difuzer Palm bílé dřevo 500ml SIXTOL | 26.50 € | **27.50 €** | 3.0 % | **6.9 %** | 22.45 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aróma difuzér Sixtol Palm šedé drevo 500 ml | 22.00 € | **23.00 €** | 10.1 % | **15.1 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| KOMA RK01 - Univerzální rotační kartáč | 17.90 € | **18.90 €** | 10.8 % | **17.0 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB6000 | 37.90 € | **38.90 €** | 11.1 % | **14.0 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.50 € | **329.50 €** | 6.5 % | **6.8 %** | 329.60 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Classic Extenda | 53.50 € | **54.50 €** | 16.1 % | **18.2 %** | 54.70 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 164.00 € | **165.00 €** | 30.4 % | **31.2 %** | 165.30 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.50 € | **209.50 €** | 16.6 % | **17.1 %** | 209.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 128.50 € | **129.50 €** | 10.6 % | **11.5 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32SGMXC | 82.50 € | **83.50 €** | 10.3 % | **11.6 %** | 83.90 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ Gimbal pre DJI Osmo Action 5 Pro / 4 / 3 (čierny) | 11.50 € | **12.50 €** | 18.5 % | **28.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| MMA rukavice DBX BUSHIDO E1v7 XL | 26.00 € | **26.90 €** | 2.8 % | **6.4 %** | 19.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 2.80 € | **3.60 €** | 10.0 % | **41.4 %** | 3.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.10 € | **5.80 €** | 20.2 % | **36.7 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 9.80 € | **10.50 €** | 17.9 % | **26.3 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 18.90 € | **19.50 €** | 11.6 % | **15.1 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Rychlovarná konvice, G1021101 | 26.90 € | **27.50 €** | 10.3 % | **12.8 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI3042VI | 34.90 € | **35.50 €** | 10.5 % | **12.4 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný napájací zdroj k LED panelom | 5.80 € | **6.40 €** | 30.3 % | **43.7 %** | 6.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.10 € | **9.70 €** | 24.3 % | **32.5 %** | 9.73 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (biela) | 11.90 € | **12.50 €** | 25.8 % | **32.2 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 79.90 € | **80.50 €** | 10.1 % | **10.9 %** | 80.66 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO3725EA | 76.90 € | **77.50 €** | 10.1 % | **11.0 %** | 77.70 € | cena podľa najlacnejšieho iného predajcu |
| Boxerské rukavice DBX BUSHIDO B-2v17 12 oz | 36.50 € | **37.00 €** | 3.7 % | **5.1 %** | 23.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight teplovzdušný ventilátor stĺpový 2000W | 63.00 € | **63.50 €** | 4.9 % | **5.8 %** | 53.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight kúpeľňový radiátor 500W | 130.00 € | **130.50 €** | 4.8 % | **5.2 %** | 130.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.00 € | **14.50 €** | 14.3 % | **18.4 %** | 14.53 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic Siena 180 Easy | 26.00 € | **26.50 €** | 7.5 % | **9.5 %** | 26.59 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 75.50 € | **76.00 €** | 14.5 % | **15.3 %** | 76.09 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka USB KRUGER & MATZ KM0857 GaN 65 W | 19.00 € | **19.50 €** | 39.5 % | **43.2 %** | 19.59 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice GARNI 750 | 113.00 € | **113.50 €** | 9.4 % | **9.8 %** | 113.60 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.00 € | **198.50 €** | 8.7 % | **9.0 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar Professional 800x Pro SDXC 256GD | 83.50 € | **84.00 €** | 18.3 % | **19.0 %** | 84.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 14.00 € | **14.50 €** | 17.1 % | **21.3 %** | 14.64 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter Habotest HT124B+ | 16.50 € | **17.00 €** | 8.2 % | **11.5 %** | 17.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 15.50 € | **16.00 €** | 12.3 % | **15.9 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 37.00 € | **37.50 €** | 7.2 % | **8.7 %** | 37.67 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 41.50 € | **42.00 €** | 9.8 % | **11.1 %** | 42.19 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 31.00 € | **31.50 €** | 16.0 % | **17.9 %** | 31.76 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 Max | 695.50 € | **696.00 €** | 12.7 % | **12.8 %** | 696.27 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 21.00 € | **21.50 €** | 5.1 % | **7.6 %** | 21.79 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 6715 zesilovač + zdroj (2438) | 160.50 € | **161.00 €** | 15.6 % | **16.0 %** | 161.30 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93022 Pánev Carina 24 cm | 17.50 € | **18.00 €** | 13.2 % | **16.4 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight GSM diaľkovo ovládaná zásuvka | 58.00 € | **58.50 €** | 31.5 % | **32.6 %** | 58.86 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI7160BL | 78.50 € | **79.00 €** | 10.3 % | **11.0 %** | 79.38 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 27.00 € | **27.50 €** | 13.5 % | **15.6 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.00 € | **82.50 €** | 9.2 % | **9.8 %** | 82.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 483.00 € | **483.50 €** | 6.8 % | **6.9 %** | 483.90 € | cena podľa najlacnejšieho iného predajcu |
| Kettlebell Bitumenový  8 kg šedý REBEL ACTIVE RBA-23... | 12.50 € | **12.90 €** | 15.4 % | **19.0 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight infražiarič - vykurovací výkon 1200 W, 2 nas... | 21.50 € | **21.90 €** | 4.5 % | **6.4 %** | 19.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| NEDIS WIFIZBT10CWT chytrá brána ZigBee 3.0 do zásuvk... | 26.50 € | **26.90 €** | 5.0 % | **6.6 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Pamäťová karta Lexar Professional 800x Pro SDXC 64 GB | 29.50 € | **29.90 €** | 10.1 % | **11.6 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 378.50 € | **378.90 €** | 12.8 % | **12.9 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **5.60 €** | 29.9 % | **34.7 %** | 5.69 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC230 IP, 5MPx, WiFi, prísvit | 23.90 € | **24.00 €** | 6.5 % | **7.0 %** | 24.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **17.00 €** | 38.6 % | **39.5 %** | 17.28 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa Pánev 28 cm | 34.90 € | **35.00 €** | 164.4 % | **165.2 %** | 35.31 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO skleněná poklice 18 | 15.90 € | **16.00 €** | 12.7 % | **13.4 %** | 16.15 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (302)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Herný volant MOZA RACING Porsche MISSION R | 1716.90 € | **1385.50 €** | 38.6 % | **11.8 %** | 1385.69 € | cena podľa najlacnejšieho iného predajcu |
| Baza na joystick Moza Racing AY210 (PC) | 768.50 € | **681.50 €** | 18.4 % | **5.0 %** | 678.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Apple iPhone 17 Pro Max 256GB Deep Blue | 1450.90 € | **1384.90 €** | 10.0 % | **5.0 %** | 1190.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL BAR 800 | 657.90 € | **627.90 €** | 10.0 % | **5.0 %** | 519.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LG FASR3A04WS | 591.50 € | **564.50 €** | 10.1 % | **5.1 %** | 492.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 497.50 € | **474.50 €** | 15.0 % | **9.6 %** | 474.89 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3BCNA324HS | 620.50 € | **602.50 €** | 8.1 % | **5.0 %** | 574.31 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung QE50Q7F QLED | 382.90 € | **365.50 €** | 10.1 % | **5.1 %** | 362.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zelmer ZMM3512B | 116.00 € | **98.90 €** | 54.0 % | **31.3 %** | 98.96 € | cena podľa najlacnejšieho iného predajcu |
| ETA Storio II 2043 90030 černá | 347.90 € | **331.90 €** | 10.1 % | **5.0 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TCL 55V6C 4K SMART Google TV | 352.90 € | **336.90 €** | 10.0 % | **5.0 %** | 325.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MOES TV02 Termostatická hlavica s LCD displejom a te... | 42.00 € | **26.90 €** | 80.8 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Amica GWAS610DL | 255.50 € | **243.50 €** | 10.2 % | **5.0 %** | 237.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Epson EcoTank L3350 | 192.50 € | **180.90 €** | 11.8 % | **5.1 %** | 179.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| UMAX VisionBook N15R Pro | 237.90 € | **227.00 €** | 10.0 % | **5.0 %** | 212.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 30.90 € | **20.00 €** | 116.4 % | **40.1 %** | 20.40 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare XREAL 1S pre rozšírenú realitu | 505.50 € | **495.50 €** | 9.8 % | **7.6 %** | 495.60 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER DCP-T535DW | 208.00 € | **198.90 €** | 10.0 % | **5.2 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera OBSBOT Tiny 3 | 368.90 € | **359.90 €** | 9.6 % | **6.9 %** | 359.98 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 130.50 € | **121.50 €** | 30.1 % | **21.1 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q7 BF Black | 188.50 € | **179.90 €** | 10.2 % | **5.2 %** | 174.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G1015502 Mikrovlnná trouba | 125.50 € | **118.00 €** | 17.0 % | **10.0 %** | 118.30 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi Watch S4 41mm Green | 152.90 € | **145.90 €** | 10.2 % | **5.2 %** | 114.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER DCP-L2600D | 152.90 € | **145.90 €** | 10.0 % | **5.0 %** | 131.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rowenta RO4931EA | 135.50 € | **128.90 €** | 10.4 % | **5.0 %** | 118.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| HP ENVY Photo 7930 (B63K5B) | 129.50 € | **123.50 €** | 10.4 % | **5.3 %** | 118.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Základňa volantu MOZA RACING R25 RS091 | 995.50 € | **989.50 €** | 13.5 % | **12.8 %** | 989.79 € | cena podľa najlacnejšieho iného predajcu |
| Epson WorkForce DS-70 | 125.90 € | **120.00 €** | 10.2 % | **5.0 %** | 114.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Rotaro PowerVac 2v1 20V | 119.50 € | **113.90 €** | 10.5 % | **5.3 %** | 112.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ROWENTA RH 6543 WH | 123.00 € | **117.50 €** | 10.1 % | **5.2 %** | 86.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 145.00 € | **139.50 €** | 24.0 % | **19.3 %** | 139.79 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH6737WH | 114.90 € | **109.50 €** | 10.3 % | **5.1 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZTE Blade A56 černý | 104.90 € | **99.90 €** | 10.4 % | **5.2 %** | 91.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Náhradní předfiltr GARNI PF 15T | 20.00 € | **15.00 €** | 40.2 % | **5.1 %** | 15.19 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook 11T LTE Pro | 107.90 € | **103.00 €** | 10.1 % | **5.1 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Teplomer a vlhkomer CO2 SwitchBot Meter Pro | 49.50 € | **44.90 €** | 34.7 % | **22.2 %** | 44.97 € | cena podľa najlacnejšieho iného predajcu |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 16.50 € | **11.90 €** | 61.8 % | **16.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| SONY WFC710N White | 90.00 € | **85.90 €** | 10.0 % | **5.0 %** | 69.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| UMAX VisionBook 10T LTE | 94.90 € | **90.90 €** | 10.0 % | **5.4 %** | 89.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung SWA-9500S/EN | 221.90 € | **217.90 €** | 10.1 % | **8.1 %** | 217.98 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 128.50 € | **124.50 €** | 12.4 % | **8.9 %** | 124.62 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 FIXMMY-1600-BK | 20.50 € | **16.50 €** | 64.7 % | **32.6 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 277.00 € | **273.00 €** | 7.3 % | **5.7 %** | 273.39 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 21.90 € | **18.00 €** | 28.3 % | **5.4 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 195W | 35.00 € | **31.50 €** | 18.5 % | **6.6 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Letecký simulátor MOZA RACING AB6 | 449.50 € | **446.00 €** | 13.8 % | **12.9 %** | 446.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 9.40 € | **5.90 €** | 98.0 % | **24.3 %** | 5.99 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 282.00 € | **278.50 €** | 39.7 % | **38.0 %** | 278.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 291.90 € | **288.50 €** | 6.4 % | **5.2 %** | 255.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Volant MOZA RACING pre Lamborghini Revuelto | 432.00 € | **428.90 €** | 15.3 % | **14.5 %** | 428.99 € | cena podľa najlacnejšieho iného predajcu |
| Braun WK5205BK | 62.50 € | **59.50 €** | 10.6 % | **5.3 %** | 55.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Profi XL + náhrada Static Plus | 62.90 € | **59.90 €** | 10.7 % | **5.4 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 23.50 € | **20.50 €** | 26.7 % | **10.5 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH20C0WO | 232.50 € | **229.50 €** | 10.2 % | **8.8 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| SONY WFC510W bílá | 50.50 € | **47.90 €** | 10.8 % | **5.1 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blender G21 Comfort Graphite Black | 152.50 € | **149.90 €** | 13.4 % | **11.5 %** | 149.91 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NB614.DG | 55.50 € | **53.00 €** | 10.1 % | **5.1 %** | 46.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 69.00 € | **66.50 €** | 13.8 % | **9.6 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 69.00 € | **66.50 €** | 18.6 % | **14.3 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI928 4ks sada filtrov objektívu pre A... | 13.50 € | **11.00 €** | 40.5 % | **14.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.4 % | **5.4 %** | 9.74 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 340 | 37.50 € | **35.50 €** | 11.0 % | **5.1 %** | 28.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 84.50 € | **82.50 €** | 21.3 % | **18.4 %** | 82.53 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 157.00 € | **155.00 €** | 9.8 % | **8.4 %** | 155.08 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **112.50 €** | 10.0 % | **8.1 %** | 112.83 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny prísavný držiak TELESIN s držiakom na te... | 15.50 € | **13.50 €** | 35.8 % | **18.3 %** | 13.88 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08BK | 17.00 € | **15.00 €** | 29.8 % | **14.5 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| PS5 Minecraft | 31.50 € | **29.90 €** | 10.8 % | **5.2 %** | 25.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight náhradné trubičky pre alkohol tester Solight... | 3.10 € | **1.60 €** | 152.0 % | **30.1 %** | 1.64 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo BonePro černá | 68.00 € | **66.50 €** | 10.2 % | **7.8 %** | 66.59 € | cena podľa najlacnejšieho iného predajcu |
| Tefal B817S255 | 31.50 € | **30.00 €** | 10.7 % | **5.4 %** | 30.23 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 103.50 € | **102.00 €** | 19.9 % | **18.2 %** | 102.29 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C615G KIT 3MPx, vonkajšia, IP PT... | 110.50 € | **109.00 €** | 7.5 % | **6.0 %** | 109.49 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.50 € | **35.00 €** | 16.2 % | **11.4 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.50 € | **35.00 €** | 16.6 % | **11.8 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO436BL | 36.50 € | **35.00 €** | 10.5 % | **5.9 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 130.50 € | **129.00 €** | 8.3 % | **7.1 %** | 129.50 € | cena podľa najlacnejšieho iného predajcu |
| PS5 - vertical stand | 29.90 € | **28.50 €** | 10.2 % | **5.1 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Remoska® Europa Hluboká pánev 28cm | 38.90 € | **37.50 €** | 27.7 % | **23.1 %** | 37.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight stolná lampa Falun, E27, biela | 30.90 € | **29.50 €** | 38.9 % | **32.6 %** | 29.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.00 € | **9.80 €** | 27.6 % | **13.7 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Onyx BS2400 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune 530C Black | 35.00 € | **33.90 €** | 10.2 % | **6.8 %** | 33.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.90 € | **6.80 €** | 36.7 % | **17.6 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GORENJE GS620C10S | 342.00 € | **341.00 €** | 5.3 % | **5.0 %** | 332.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete Breakfast Toaster 157/03, černý | 23.90 € | **22.90 €** | 11.3 % | **6.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lamax Clips1 Play Black | 18.50 € | **17.50 €** | 12.6 % | **6.5 %** | 14.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lamax Clips1 Play White | 18.50 € | **17.50 €** | 12.7 % | **6.7 %** | 14.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal DB1612E0 | 26.50 € | **25.50 €** | 11.3 % | **7.1 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zelmer ZHB4561S | 22.90 € | **21.90 €** | 11.6 % | **6.7 %** | 21.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **43.00 €** | 37.6 % | **34.5 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RACING SRP2 Zadný držiak | 43.00 € | **42.00 €** | 17.8 % | **15.1 %** | 42.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 35.50 € | **34.50 €** | 31.0 % | **27.3 %** | 34.72 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Rouge BP3443 | 32.50 € | **31.50 €** | 11.4 % | **8.0 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 154.00 € | **153.00 €** | 13.9 % | **13.1 %** | 153.45 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 10.2 % | **8.7 %** | 65.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **16.00 €** | 38.6 % | **31.3 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.30 € | **6.60 €** | 43.7 % | **29.9 %** | 6.69 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR 200540 | 10.50 € | **9.80 €** | 12.8 % | **5.3 %** | 8.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Vakuovací sáčky 20x30 cm | 10.50 € | **9.80 €** | 13.2 % | **5.7 %** | 8.64 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo Chamber Line 70 | 350.50 € | **349.90 €** | 6.8 % | **6.7 %** | 350.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Avacom SAFT LS26500 lítiový článok, veľkosť ... | 19.50 € | **18.90 €** | 10.5 % | **7.1 %** | 17.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lenovo IDEA TAB PRO FOLIO CASE šedé | 19.50 € | **18.90 €** | 10.5 % | **7.1 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune110 black | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 7.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 77.50 € | **76.90 €** | 37.8 % | **36.7 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1443.50 € | **1442.90 €** | 7.4 % | **7.4 %** | 1442.95 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C320WS 4MPx, venkovní, IP, FHD, ... | 45.50 € | **45.00 €** | 6.3 % | **5.1 %** | 44.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Resto 93323 Pánev Sagitta 20 cm | 15.00 € | **14.50 €** | 17.6 % | **13.7 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| REBEL ACTIVE RBA-1014 bežecký pás | 201.50 € | **201.00 €** | 53.2 % | **52.9 %** | 201.04 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro SG A36 5G FIXOP3-1502-BRW | 13.00 € | **12.50 €** | 20.1 % | **15.5 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 65.50 € | **65.00 €** | 29.5 % | **28.5 %** | 65.18 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 346.00 € | **345.50 €** | 14.4 % | **14.2 %** | 345.75 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA True X Bar 50A / SR-X50A BLACK | 708.00 € | **707.50 €** | 9.2 % | **9.2 %** | 707.82 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 smartwatch Ultra (gold) | 39.00 € | **38.50 €** | 22.2 % | **20.6 %** | 38.85 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 39.00 € | **38.50 €** | 22.2 % | **20.6 %** | 38.85 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, strieborná... | 178.00 € | **177.50 €** | 14.9 % | **14.6 %** | 177.86 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GEN 3 GS1333 | 250.00 € | **249.50 €** | 20.8 % | **20.5 %** | 249.87 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 347.50 € | **347.00 €** | 21.3 % | **21.1 %** | 347.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Ottocast CA525-T3 | 28.00 € | **27.50 €** | 25.5 % | **23.3 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 38.50 € | **38.00 €** | 40.2 % | **38.4 %** | 38.39 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 45.00 € | **44.50 €** | 15.0 % | **13.7 %** | 44.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Držák rolí PARAT | 23.00 € | **22.50 €** | 10.4 % | **8.0 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic 180 Solid | 21.50 € | **21.00 €** | 10.1 % | **7.5 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 40.00 € | **39.50 €** | 14.9 % | **13.4 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Classic 100 Easy | 20.50 € | **20.00 €** | 11.5 % | **8.8 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Classic 200 Flex | 26.00 € | **25.50 €** | 11.1 % | **8.9 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Classic 250 Flex | 31.50 € | **31.00 €** | 12.0 % | **10.2 %** | 31.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **15.00 €** | 16.7 % | **12.9 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 4000K... | 15.50 € | **15.00 €** | 342.2 % | **327.9 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 6000K... | 15.50 € | **15.00 €** | 342.2 % | **327.9 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny digitálny multimeter UNI-T UT191E | 56.50 € | **56.00 €** | 6.1 % | **5.1 %** | 56.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 321.50 € | **321.00 €** | 19.7 % | **19.5 %** | 321.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 242.00 € | **241.50 €** | 13.3 % | **13.1 %** | 241.89 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 88.00 € | **87.50 €** | 16.6 % | **16.0 %** | 87.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **93.50 €** | 14.9 % | **14.2 %** | 93.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 80.50 € | **80.00 €** | 16.1 % | **15.3 %** | 80.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 91.00 € | **90.50 €** | 16.7 % | **16.0 %** | 90.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 91.00 € | **90.50 €** | 15.8 % | **15.1 %** | 90.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.50 € | **25.00 €** | 15.0 % | **12.8 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 39.00 € | **38.50 €** | 18.3 % | **16.8 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 133.50 € | **133.00 €** | 16.9 % | **16.4 %** | 133.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600 | 72.50 € | **72.00 €** | 12.8 % | **12.0 %** | 72.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 83.50 € | **83.00 €** | 10.5 % | **9.8 %** | 83.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 58.50 € | **58.00 €** | 7.5 % | **6.6 %** | 58.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.50 € | **33.00 €** | 8.8 % | **7.2 %** | 33.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 78.00 € | **77.50 €** | 8.4 % | **7.7 %** | 77.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 166.00 € | **165.50 €** | 12.2 % | **11.8 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 190.00 € | **189.50 €** | 12.9 % | **12.6 %** | 189.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.50 € | **23.00 €** | 14.1 % | **11.7 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 295.00 € | **294.50 €** | 19.4 % | **19.2 %** | 294.89 € | cena podľa najlacnejšieho iného predajcu |
| 4-kanálový teplomer Uni-T UT325F | 99.50 € | **99.00 €** | 9.6 % | **9.0 %** | 99.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 65.00 € | **64.50 €** | 26.0 % | **25.0 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 156.50 € | **156.00 €** | 6.1 % | **5.7 %** | 156.39 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 96.00 € | **95.50 €** | 24.8 % | **24.2 %** | 95.89 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 47.00 € | **46.50 €** | 10.2 % | **9.0 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 47.00 € | **46.50 €** | 10.2 % | **9.0 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 88.00 € | **87.50 €** | 23.1 % | **22.4 %** | 87.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.50 € | **55.00 €** | 15.9 % | **14.8 %** | 55.39 € | cena podľa najlacnejšieho iného predajcu |
| Robotický čistič okien MOVA N1 (biely) | 286.50 € | **286.00 €** | 14.5 % | **14.3 %** | 286.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 111.00 € | **110.50 €** | 10.3 % | **9.8 %** | 110.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 274.00 € | **273.50 €** | 6.5 % | **6.4 %** | 273.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Podlahový mop Picobello M Micro | 20.00 € | **19.50 €** | 14.0 % | **11.2 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 258.00 € | **257.50 €** | 7.6 % | **7.4 %** | 257.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 188.00 € | **187.50 €** | 33.2 % | **32.8 %** | 187.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 75.00 € | **74.50 €** | 13.7 % | **13.0 %** | 74.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/ 7,5 Ah  REBEL bezúdržbová | 16.50 € | **16.00 €** | 32.2 % | **28.2 %** | 16.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 12.50 € | **12.00 €** | 24.2 % | **19.3 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prepínač WiFi WiFi Sonoff Dual R3 Lite | 12.00 € | **11.50 €** | 31.5 % | **26.0 %** | 11.89 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 182.50 € | **182.00 €** | 22.0 % | **21.7 %** | 182.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 193.00 € | **192.50 €** | 9.6 % | **9.3 %** | 192.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 873.00 € | **872.50 €** | 9.3 % | **9.2 %** | 872.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 684.00 € | **683.50 €** | 5.4 % | **5.4 %** | 683.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 321.50 € | **321.00 €** | 8.0 % | **7.8 %** | 321.39 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 332.00 € | **331.50 €** | 5.2 % | **5.0 %** | 331.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 698.50 € | **698.00 €** | 9.1 % | **9.0 %** | 698.39 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska IsEasy LI3-17 | 154.50 € | **154.00 €** | 32.3 % | **31.8 %** | 154.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 164.50 € | **164.00 €** | 22.7 % | **22.3 %** | 164.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 84.00 € | **83.50 €** | 35.5 % | **34.7 %** | 83.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 107.00 € | **106.50 €** | 20.5 % | **20.0 %** | 106.89 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 120.00 € | **119.50 €** | 33.3 % | **32.8 %** | 119.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 80.50 € | **80.00 €** | 18.9 % | **18.1 %** | 80.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 107.00 € | **106.50 €** | 13.3 % | **12.8 %** | 106.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 154.50 € | **154.00 €** | 20.9 % | **20.5 %** | 154.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 129.00 € | **128.50 €** | 18.4 % | **17.9 %** | 128.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 141.50 € | **141.00 €** | 6.6 % | **6.2 %** | 141.40 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 67.00 € | **66.50 €** | 30.6 % | **29.6 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 262.50 € | **262.00 €** | 22.8 % | **22.5 %** | 262.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.50 € | **212.00 €** | 37.5 % | **37.2 %** | 212.43 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 212.50 € | **212.00 €** | 37.2 % | **36.9 %** | 212.43 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, strieborná ... | 212.50 € | **212.00 €** | 37.2 % | **36.9 %** | 212.43 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, zlatá) | 212.50 € | **212.00 €** | 37.2 % | **36.9 %** | 212.43 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 212.50 € | **212.00 €** | 37.2 % | **36.9 %** | 212.43 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.50 € | **187.00 €** | 10.6 % | **10.4 %** | 187.43 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný tréninková hrazda REBEL ACTIVE RBA-2404 | 107.50 € | **107.00 €** | 15.3 % | **14.7 %** | 107.44 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC025X | 26.50 € | **26.00 €** | 11.8 % | **9.7 %** | 26.46 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 400.50 € | **400.00 €** | 38.2 % | **38.1 %** | 400.49 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS5 – štartér do auta s kompresorom | 105.50 € | **105.00 €** | 22.3 % | **21.7 %** | 105.49 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 47.50 € | **47.00 €** | 6.2 % | **5.1 %** | 47.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 223.50 € | **223.00 €** | 16.7 % | **16.5 %** | 223.49 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 406.50 € | **406.00 €** | 39.4 % | **39.2 %** | 406.49 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Set PowerClean M+náhr. zdarma | 20.50 € | **20.00 €** | 10.3 % | **7.6 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 703.50 € | **703.00 €** | 38.1 % | **38.0 %** | 703.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q6 | 561.50 € | **561.00 €** | 38.2 % | **38.1 %** | 561.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 169.50 € | **169.00 €** | 39.4 % | **39.0 %** | 169.49 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 134.50 € | **134.00 €** | 39.4 % | **38.9 %** | 134.49 € | cena podľa najlacnejšieho iného predajcu |
| Lovecký ďalekohľad Mileseey IONJET2 | 233.50 € | **233.00 €** | 36.6 % | **36.3 %** | 233.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 137.50 € | **137.00 €** | 31.7 % | **31.3 %** | 137.49 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny zápisník Huion Kamvas Ink 10 EB1011 | 386.50 € | **386.00 €** | 36.4 % | **36.2 %** | 386.49 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash UV360 (čierny) | 249.50 € | **249.00 €** | 39.4 % | **39.1 %** | 249.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada na selfie Neewer SRP18C s priemerom 17 cm a okr... | 165.50 € | **165.00 €** | 39.4 % | **39.0 %** | 165.49 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 131.50 € | **131.00 €** | 36.5 % | **35.9 %** | 131.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 16.50 € | **16.00 €** | 9.7 % | **6.4 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 491.50 € | **491.00 €** | 40.6 % | **40.4 %** | 491.49 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 256.50 € | **256.00 €** | 40.6 % | **40.4 %** | 256.49 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 534.50 € | **534.00 €** | 41.6 % | **41.5 %** | 534.49 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (biela) | 22.50 € | **22.00 €** | 38.7 % | **35.6 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (čierna) | 22.50 € | **22.00 €** | 28.5 % | **25.6 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 62.50 € | **62.00 €** | 13.4 % | **12.5 %** | 62.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 165.90 € | **165.50 €** | 39.8 % | **39.5 %** | 165.68 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 84.90 € | **84.50 €** | 29.4 % | **28.8 %** | 84.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 101.90 € | **101.50 €** | 13.4 % | **12.9 %** | 101.86 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 155.90 € | **155.50 €** | 11.5 % | **11.3 %** | 155.87 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 214.90 € | **214.50 €** | 40.8 % | **40.6 %** | 214.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 74.90 € | **74.50 €** | 42.7 % | **41.9 %** | 74.89 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka pamäťových kariet Lexar RW540 microSD Express | 71.90 € | **71.50 €** | 38.5 % | **37.7 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 124.90 € | **124.50 €** | 39.7 % | **39.2 %** | 124.89 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 126.90 € | **126.50 €** | 11.6 % | **11.2 %** | 126.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-775S2 Päťzónový (štvorcový) sklenený ply... | 181.90 € | **181.50 €** | 45.0 % | **44.7 %** | 181.89 € | cena podľa najlacnejšieho iného predajcu |
| Ali puzdro Mag-Skin iPhon17 Air PAS0027 | 14.90 € | **14.50 €** | 11.3 % | **8.4 %** | 10.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi RGBW 16M Gosund LB2S Tuya smart night light | 11.90 € | **11.50 €** | 15.6 % | **11.7 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-C102COC101 | 10.90 € | **10.50 €** | 10.4 % | **6.3 %** | 10.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 11.90 € | **11.50 €** | 33.6 % | **29.1 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.50 €** | 11.2 % | **9.6 %** | 27.54 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 17.90 € | **17.50 €** | 9.9 % | **7.5 %** | 17.79 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 54.90 € | **54.50 €** | 13.4 % | **12.6 %** | 54.79 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.90 € | **41.50 €** | 11.0 % | **10.0 %** | 41.79 € | cena podľa najlacnejšieho iného predajcu |
| Tesla MediaBox XG500 | 62.90 € | **62.50 €** | 11.5 % | **10.8 %** | 62.79 € | cena podľa najlacnejšieho iného predajcu |
| Kábel PremiumCord Predlžovací 230V 50 m na bubnu | 63.90 € | **63.50 €** | 7.6 % | **6.9 %** | 63.84 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 24.90 € | **24.50 €** | 16.1 % | **14.3 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.90 € | **18.50 €** | 20.0 % | **17.5 %** | 18.89 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 51.90 € | **51.50 €** | 7.1 % | **6.3 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DRX70 MESH + 4 RGB venti... | 63.90 € | **63.50 €** | 39.5 % | **38.7 %** | 63.89 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 48.90 € | **48.50 €** | 29.9 % | **28.9 %** | 48.89 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 41.90 € | **41.50 €** | 39.2 % | **37.9 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.90 € | **55.50 €** | 36.5 % | **35.5 %** | 55.89 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre BOBOVR M2 Pro + nabíjacia stanica | 34.90 € | **34.50 €** | 40.2 % | **38.6 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 295.90 € | **295.50 €** | 12.9 % | **12.7 %** | 295.75 € | cena podľa najlacnejšieho iného predajcu |
| Robot na čistenie bazénov WYBOT M1C | 669.90 € | **669.50 €** | 5.4 % | **5.4 %** | 669.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 274.90 € | **274.50 €** | 7.6 % | **7.5 %** | 274.79 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 728.90 € | **728.50 €** | 9.2 % | **9.1 %** | 728.79 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 400.90 € | **400.50 €** | 32.2 % | **32.1 %** | 400.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.70 € | **5.50 €** | 30.2 % | **25.6 %** | 5.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.30 € | **5.10 €** | 35.9 % | **30.8 %** | 5.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Ratanová LED hviezda Solight 1V246, 40 cm, 40 LED, 2... | 3.40 € | **3.20 €** | 23.4 % | **16.1 %** | 3.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight ratanová LED lampáš s LED žiarovkou, teplá b... | 6.60 € | **6.40 €** | 22.8 % | **19.1 %** | 6.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 357.00 € | **356.90 €** | 40.9 % | **40.8 %** | 356.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 332.00 € | **331.90 €** | 38.9 % | **38.8 %** | 331.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 390.00 € | **389.90 €** | 38.7 % | **38.6 %** | 389.99 € | cena podľa najlacnejšieho iného predajcu |
| Skládací koloběžka NILS Extreme HM2009 šedá | 46.00 € | **45.90 €** | 5.2 % | **5.0 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **19.90 €** | 44.9 % | **44.2 %** | 19.91 € | cena podľa najlacnejšieho iného predajcu |
| Maono PD100X RGB Microphone Black | 44.00 € | **43.90 €** | 38.4 % | **38.1 %** | 43.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná IP kamera Gosund IPC3, IP65 | 48.00 € | **47.90 €** | 34.2 % | **34.0 %** | 47.97 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na polievanie kvetín v črepníkoch RainPoint ... | 27.00 € | **26.90 €** | 41.6 % | **41.1 %** | 26.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 34.00 € | **33.90 €** | 54.5 % | **54.1 %** | 33.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 51.00 € | **50.90 €** | 40.1 % | **39.9 %** | 50.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.80 € | **9.70 €** | 29.6 % | **28.2 %** | 9.79 € | cena podľa najlacnejšieho iného predajcu |
| Metal Protective Cage With Lens Cover PULUZ for Inst... | 27.00 € | **26.90 €** | 31.7 % | **31.2 %** | 26.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.90 € | **7.80 €** | 48.0 % | **46.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.60 € | **3.50 €** | 59.9 % | **55.5 %** | 3.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.70 € | **3.60 €** | 18.9 % | **15.7 %** | 3.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **10.90 €** | 26.0 % | **24.8 %** | 10.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.40 € | **8.30 €** | 15.2 % | **13.8 %** | 8.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.30 € | **5.20 €** | 22.8 % | **20.4 %** | 5.29 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-M, 5 m, v... | 5.10 € | **5.00 €** | 26.4 % | **23.9 %** | 5.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.60 € | **6.50 €** | 22.5 % | **20.7 %** | 6.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **4.90 €** | 21.0 % | **18.6 %** | 4.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.10 € | **9.00 €** | 11.8 % | **10.5 %** | 9.09 € | cena podľa najlacnejšieho iného predajcu |
| Tester obvodov Ancel PB500 | 94.00 € | **93.90 €** | 38.7 % | **38.5 %** | 93.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2-C TTL pre fotoaparáty Canon | 165.00 € | **164.90 €** | 39.5 % | **39.4 %** | 164.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 148.00 € | **147.90 €** | 31.3 % | **31.2 %** | 147.99 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 88.00 € | **87.90 €** | 36.5 % | **36.3 %** | 87.99 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE240 (biele) | 97.00 € | **96.90 €** | 36.0 % | **35.9 %** | 96.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 143.00 € | **142.90 €** | 39.0 % | **38.9 %** | 142.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 141.00 € | **140.90 €** | 39.9 % | **39.8 %** | 140.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 66.00 € | **65.90 €** | 39.1 % | **38.9 %** | 65.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro All Day (8ks) | 142.00 € | **141.90 €** | 31.2 % | **31.1 %** | 141.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro Everyday (... | 74.00 € | **73.90 €** | 29.0 % | **28.8 %** | 73.99 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady M6 | 151.00 € | **150.90 €** | 40.0 % | **39.9 %** | 150.99 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady M6 Kit | 151.00 € | **150.90 €** | 31.7 % | **31.6 %** | 150.99 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN W AS | 79.00 € | **78.90 €** | 38.8 % | **38.6 %** | 78.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 225.00 € | **224.90 €** | 17.6 % | **17.5 %** | 225.00 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 140.00 € | **139.90 €** | 11.5 % | **11.4 %** | 140.00 € | cena podľa najlacnejšieho iného predajcu |

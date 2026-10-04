# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-04

Vstup: `premiumstore-sk_2026-10-04_18-48.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7484**
- Návrh **zvýšiť** cenu: **156** produktov
- Návrh **znížiť** cenu: **279** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **7049** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **36**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **786**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (156)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria Flytec V900 12000mah | 16.00 € | **250.50 €** | 15.3 % | **1705.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **250.50 €** | 14.5 % | **544.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE VQ1500D active PA subwoofer | 329.00 € | **498.00 €** | 15.0 % | **74.1 %** | 498.19 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **383.50 €** | 15.0 % | **91.3 %** | 383.51 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/250 Ohm | 229.00 € | **379.90 €** | 15.0 % | **90.8 %** | 380.00 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTR1 Advanced, Single | 187.90 € | **324.90 €** | 7.2 % | **85.4 %** | 325.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NX1000D | 239.00 € | **373.50 €** | 15.0 % | **79.7 %** | 373.54 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 230.00 € | **361.00 €** | 15.0 % | **80.5 %** | 361.07 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 209.90 € | **325.50 €** | 15.1 % | **78.5 %** | 325.84 € | cena podľa najlacnejšieho iného predajcu |
| Behringer X32 PRODUCER | 1090.00 € | **1204.50 €** | 15.0 % | **27.1 %** | 1204.54 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 579.00 € | **685.00 €** | 15.0 % | **36.1 %** | 685.17 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NX6000D | 469.00 € | **572.90 €** | 15.0 % | **40.5 %** | 572.98 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 165.00 € | **248.50 €** | 15.0 % | **73.2 %** | 248.89 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 749.00 € | **826.00 €** | 15.0 % | **26.8 %** | 826.44 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx QX1222USB mixpult s USB a efektmi | 210.00 € | **282.00 €** | 15.0 % | **54.4 %** | 282.13 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 209.00 € | **277.00 €** | 15.0 % | **52.4 %** | 277.38 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 379.00 € | **445.90 €** | 15.0 % | **35.3 %** | 446.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T12B2 | 536.00 € | **596.50 €** | 15.0 % | **28.0 %** | 596.71 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone E1 vocal echo/delay pedál | 125.00 € | **178.00 €** | 15.0 % | **63.8 %** | 178.25 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultimea Aura S5T | 206.50 € | **258.90 €** | 15.1 % | **44.3 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 259.00 € | **307.00 €** | 15.0 % | **36.3 %** | 307.06 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX LUX Senior (zelený) | 118.50 € | **158.90 €** | 15.0 % | **54.3 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 8 powered studio monitor | 285.00 € | **324.00 €** | 15.0 % | **30.7 %** | 324.45 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **371.00 €** | 15.0 % | **27.7 %** | 371.46 € | cena podľa najlacnejšieho iného predajcu |
| Luminiscenčná letová mapa DJI RoboMaster TT | 801.00 € | **837.90 €** | 9.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 310.00 € | **344.00 €** | 15.0 % | **27.6 %** | 344.45 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 196.50 € | **228.50 €** | 15.0 % | **33.7 %** | 228.66 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 196.50 € | **228.50 €** | 15.0 % | **33.7 %** | 228.66 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/ 80 Ohm | 349.00 € | **379.90 €** | 15.0 % | **25.2 %** | 380.00 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone R1 | 150.00 € | **178.00 €** | 15.0 % | **36.5 %** | 178.25 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 79.50 € | **106.90 €** | 14.9 % | **54.5 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Pro (čier... | 328.50 € | **355.00 €** | 15.0 % | **24.3 %** | 355.42 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 328.50 € | **355.00 €** | 15.0 % | **24.3 %** | 355.42 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 338.90 € | **365.00 €** | 15.1 % | **23.9 %** | 365.17 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 285.00 € | **309.90 €** | 15.0 % | **25.1 %** | 310.00 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 248.50 € | **272.50 €** | 17.7 % | **29.1 %** | 272.89 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 199.00 € | **220.90 €** | 15.0 % | **27.7 %** | 221.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 160 Sol | 29.90 € | **50.00 €** | 11.5 % | **86.4 %** | 50.31 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T14 | 278.90 € | **298.50 €** | 15.0 % | **23.1 %** | 298.67 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T26B1 | 177.00 € | **196.50 €** | 14.9 % | **27.6 %** | 196.58 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone H1 | 160.00 € | **178.00 €** | 15.0 % | **27.9 %** | 178.25 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto Stereo Looper | 129.00 € | **145.00 €** | 15.0 % | **29.3 %** | 145.01 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone X1 megaphone and distorting voc... | 104.00 € | **120.00 €** | 15.0 % | **32.7 %** | 120.08 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 245.90 € | **261.50 €** | 15.0 % | **22.3 %** | 261.73 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROPOWER EP4000 stereo power amplifier | 375.00 € | **390.50 €** | 15.0 % | **19.8 %** | 390.75 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 149.50 € | **164.90 €** | 14.0 % | **25.8 %** | 165.00 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 159.00 € | **174.00 €** | 15.0 % | **25.8 %** | 174.10 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 52 mm s vekom pre Real Lock... | 15.50 € | **29.90 €** | 13.9 % | **119.8 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI PRO DI4000 V2 | 148.00 € | **161.50 €** | 15.0 % | **25.5 %** | 161.63 € | cena podľa najlacnejšieho iného predajcu |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 373.90 € | **386.50 €** | 1.6 % | **5.0 %** | 373.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 42.50 € | **54.00 €** | 14.6 % | **45.6 %** | 54.49 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 180.90 € | **191.00 €** | 15.1 % | **21.5 %** | 191.33 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V35 s Dynamický mikrofon | 49.00 € | **59.00 €** | 15.0 % | **38.5 %** | 59.04 € | cena podľa najlacnejšieho iného predajcu |
| Behringer TUBE ULTRAGAIN MIC500USB audiophile preamp... | 85.00 € | **95.00 €** | 15.0 % | **28.5 %** | 95.15 € | cena podľa najlacnejšieho iného predajcu |
| Behringer C-1U USB štúdiový kondenzátorový mikrofón | 39.00 € | **49.00 €** | 15.0 % | **44.5 %** | 49.44 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor WOLFBOX MegaFlow 100 | 49.90 € | **59.50 €** | 14.9 % | **37.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 36.50 € | **45.50 €** | 11.1 % | **38.4 %** | 45.63 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 287.00 € | **295.50 €** | 8.1 % | **11.3 %** | 295.77 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 126 | 458.00 € | **466.00 €** | 18.0 % | **20.0 %** | 466.19 € | cena podľa najlacnejšieho iného predajcu |
| Behringer U-CONTROL UCA222 USB audio interface | 25.00 € | **33.00 €** | 15.0 % | **51.8 %** | 33.20 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-G GI100 | 30.00 € | **37.90 €** | 15.0 % | **45.3 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Klark Teknik DN200 V2 DI Box | 179.00 € | **186.50 €** | 15.0 % | **19.8 %** | 186.56 € | cena podľa najlacnejšieho iného predajcu |
| JBL Partybox Stage 320 | 422.00 € | **429.50 €** | 9.4 % | **11.3 %** | 429.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING KS Pro RS095 | 321.90 € | **328.90 €** | 5.1 % | **7.4 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D71 | 259.00 € | **265.50 €** | 15.0 % | **17.9 %** | 265.59 € | cena podľa najlacnejšieho iného predajcu |
| Laica LAI KJ2000W | 79.00 € | **85.00 €** | 10.1 % | **18.4 %** | 85.05 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS EDIFIER X5 Pro (modré) | 29.00 € | **35.00 €** | 14.8 % | **38.5 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon CRITICAL MASS, vokálny efektový pedál | 119.00 € | **124.00 €** | 15.0 % | **19.8 %** | 124.24 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy REVEAL 802 powered studio monitor | 159.00 € | **163.90 €** | 15.0 % | **18.5 %** | 164.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer GMX-500 | 40.90 € | **45.50 €** | 15.0 % | **28.0 %** | 45.65 € | cena podľa najlacnejšieho iného predajcu |
| Behringer HPM1100U | 15.90 € | **20.50 €** | 15.0 % | **48.3 %** | 20.73 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 76.00 € | **80.50 €** | 6.1 % | **12.3 %** | 80.60 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 5 s kapacitou 5 200 mA... | 26.50 € | **31.00 €** | 14.3 % | **33.7 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| LG F4A10S7NWH | 349.50 € | **353.90 €** | 10.0 % | **11.4 %** | 353.92 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 195.00 € | **198.90 €** | 15.0 % | **17.3 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **292.50 €** | 15.0 % | **16.4 %** | 292.53 € | cena podľa najlacnejšieho iného predajcu |
| Indesit TI5512EMTCS | 308.90 € | **312.50 €** | 10.1 % | **11.4 %** | 312.60 € | cena podľa najlacnejšieho iného predajcu |
| Beko BMTD37146W | 377.00 € | **380.50 €** | 6.0 % | **7.0 %** | 380.70 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 84.50 € | **88.00 €** | 7.9 % | **12.4 %** | 88.33 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT Lumiax MT2075-BT, 12-24V/20A,... | 105.90 € | **108.50 €** | 2.8 % | **5.3 %** | 55.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 133.50 € | **136.00 €** | 27.1 % | **29.5 %** | 136.13 € | cena podľa najlacnejšieho iného predajcu |
| Octagon diaľkový ovládač SF4008 4K UHD - originál | 16.50 € | **19.00 €** | 3.9 % | **19.7 %** | 19.37 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI928 4ks sada filtrov objektívu pre A... | 11.00 € | **13.50 €** | 14.5 % | **40.5 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| KMP C81V / PGI-525BK, CLI-526C/M/Y | 15.90 € | **18.00 €** | 12.3 % | **27.1 %** | 18.40 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 49G | 163.90 € | **166.00 €** | 10.0 % | **11.4 %** | 166.36 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 70.50 € | **72.50 €** | 16.6 % | **19.9 %** | 72.61 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic JUNE-60 V2 | 68.00 € | **70.00 €** | 15.0 % | **18.4 %** | 70.22 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI925CPL nastaviteľný filter objektívu... | 11.00 € | **13.00 €** | 14.5 % | **35.3 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 5 powered studio monitor | 200.00 € | **201.90 €** | 15.0 % | **16.1 %** | 202.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.00 € | **21.90 €** | 26.5 % | **38.6 %** | 21.96 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný modul pre DJI Osmo Mobile | 56.00 € | **57.90 €** | 14.8 % | **18.7 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Street Play Speaker Bluetooth reproduk... | 24.90 € | **26.50 €** | 15.0 % | **22.4 %** | 26.60 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 39.90 € | **41.50 €** | 15.0 % | **19.6 %** | 41.80 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 32.50 € | **34.00 €** | 33.8 % | **40.0 %** | 34.01 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 57.00 € | **58.50 €** | 11.3 % | **14.2 %** | 58.58 € | cena podľa najlacnejšieho iného predajcu |
| Strong diaľkový ovládač SRT 7504, 8211 | 14.50 € | **16.00 €** | 21.7 % | **34.2 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 57.00 € | **58.50 €** | 10.4 % | **13.3 %** | 58.71 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS EM06P-EU Inteligentný monitor spotreby energi... | 79.00 € | **80.50 €** | 25.0 % | **27.4 %** | 80.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 19.50 € | **21.00 €** | 7.4 % | **15.7 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 200 | 29.50 € | **30.90 €** | 11.3 % | **16.6 %** | 31.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 108.90 € | **110.00 €** | 10.2 % | **11.3 %** | 110.04 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC144FBK | 68.90 € | **70.00 €** | 10.6 % | **12.3 %** | 70.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 35.00 € | **36.00 €** | 45.8 % | **49.9 %** | 36.01 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 274.00 € | **275.00 €** | 29.8 % | **30.3 %** | 275.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Polia, ... | 33.00 € | **34.00 €** | 33.5 % | **37.6 %** | 34.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 43.00 € | **44.00 €** | 46.0 % | **49.4 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 48.00 € | **49.00 €** | 34.4 % | **37.2 %** | 49.34 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 271.50 € | **272.50 €** | 20.0 % | **20.5 %** | 272.89 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 31.00 € | **32.00 €** | 32.2 % | **36.4 %** | 32.47 € | cena podľa najlacnejšieho iného predajcu |
| Metal Protection Cage PULUZ For DJI OSMO Pocket 3 (P... | 20.00 € | **21.00 €** | 13.6 % | **19.3 %** | 21.47 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 107.00 € | **107.90 €** | 40.3 % | **41.5 %** | 107.93 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell ND32/Black Mist 1/4 do Real Locking VND | 79.00 € | **79.90 €** | 147.0 % | **149.8 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell série V2 VND/CPL II 3-7 s... | 148.00 € | **148.90 €** | 27.4 % | **28.2 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 148.00 € | **148.90 €** | 40.4 % | **41.2 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.00 € | **28.90 €** | 8.1 % | **11.6 %** | 28.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.00 € | **25.90 €** | 48.9 % | **54.3 %** | 25.93 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 49.00 € | **49.90 €** | 26.2 % | **28.5 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 s 17 mm uchytením | 49.00 € | **49.90 €** | 26.3 % | **28.6 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic UniTune Clip | 38.00 € | **38.90 €** | 15.0 % | **17.7 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 179.90 € | **180.50 €** | 25.1 % | **25.5 %** | 180.69 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 filters Freewell for DJI Action 4 | 98.90 € | **99.50 €** | 50.5 % | **51.5 %** | 99.77 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 21.50 € | **22.00 €** | 23.9 % | **26.8 %** | 22.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 16.50 € | **17.00 €** | 35.1 % | **39.2 %** | 17.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.00 € | **18.50 €** | 34.1 % | **37.9 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 54.00 € | **54.50 €** | 65.2 % | **66.8 %** | 54.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač Meross MRS105MA-EU WiFi... | 26.50 € | **27.00 €** | 26.9 % | **29.3 %** | 27.13 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Sunnylife pre Insta360 Ace Pro 2/1 | 13.00 € | **13.50 €** | 15.3 % | **19.7 %** | 13.63 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.50 € | **77.00 €** | 16.3 % | **17.1 %** | 77.19 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.00 € | **62.50 €** | 16.4 % | **17.3 %** | 62.69 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 167.00 € | **167.50 €** | 33.2 % | **33.6 %** | 167.69 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI DI20 DI-box | 21.00 € | **21.50 €** | 15.0 % | **17.7 %** | 21.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.00 € | **10.50 €** | 28.8 % | **35.3 %** | 10.72 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 79.00 € | **79.50 €** | 23.3 % | **24.0 %** | 79.73 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 79.00 € | **79.50 €** | 23.3 % | **24.0 %** | 79.73 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 19.50 € | **20.00 €** | 9.0 % | **11.8 %** | 20.33 € | cena podľa najlacnejšieho iného predajcu |
| Ozvučovací systém KRUGER MATZ KM1712 | 179.50 € | **180.00 €** | 27.3 % | **27.7 %** | 180.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.50 € | **47.00 €** | 34.4 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate 7 | 201.50 € | **201.90 €** | 15.8 % | **16.1 %** | 201.92 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C665G KIT 4MPx, vonkajšia, IP PT... | 194.50 € | **194.90 €** | 5.2 % | **5.4 %** | 194.97 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Halo 13x Digital Nig... | 232.50 € | **232.90 €** | 7.9 % | **8.1 %** | 233.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.90 €** | 33.4 % | **38.0 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.50 € | **14.90 €** | 12.7 % | **15.8 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi spínač na žalúzie Meross MRS100MA(... | 23.50 € | **23.90 €** | 24.2 % | **26.3 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.10 € | **7.30 €** | 41.5 % | **45.5 %** | 7.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 17.90 € | **18.00 €** | 22.7 % | **23.4 %** | 18.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.80 €** | 34.6 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.70 € | **9.80 €** | 34.6 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **17.00 €** | 34.2 % | **35.0 %** | 17.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.20 € | **4.30 €** | 41.1 % | **44.5 %** | 4.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.60 €** | 33.9 % | **35.3 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 252.90 € | **253.00 €** | 62206.0 % | **62230.6 %** | 253.04 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO353VD | 83.90 € | **84.00 €** | 10.3 % | **10.4 %** | 84.41 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (279)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINI-PC Minis Forum UM890 Pro Ryzen 9 8945HS barebone | 1156.90 € | **877.00 €** | 110.7 % | **59.7 %** | 877.01 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 1136.90 € | **859.00 €** | 49.9 % | **13.3 %** | 859.32 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 1016.90 € | **755.00 €** | 45.2 % | **7.8 %** | 755.48 € | cena podľa najlacnejšieho iného predajcu |
| Behringer X32 COMPACT | 1999.00 € | **1825.50 €** | 15.0 % | **5.0 %** | 1755.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 638.90 € | **484.00 €** | 45.1 % | **9.9 %** | 484.37 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 393.90 € | **302.00 €** | 42.5 % | **9.3 %** | 302.19 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 456.90 € | **371.00 €** | 36.1 % | **10.5 %** | 371.18 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 835.00 € | **756.00 €** | 22.8 % | **11.1 %** | 756.30 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1135.90 € | **1074.50 €** | 15.0 % | **8.8 %** | 1074.77 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 352B | 596.00 € | **535.50 €** | 16.9 % | **5.0 %** | 367.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic TG Drum Set PRO L, sada mikrofónov pre ... | 1199.00 € | **1139.50 €** | 15.0 % | **9.3 %** | 1139.87 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210G | 550.50 € | **496.50 €** | 16.4 % | **5.0 %** | 468.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje WG894A25 | 545.00 € | **499.50 €** | 20.1 % | **10.0 %** | 499.53 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 902.50 € | **858.50 €** | 15.0 % | **9.4 %** | 858.51 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 358.50 € | **314.50 €** | 24.8 % | **9.5 %** | 314.68 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 506.50 € | **462.50 €** | 17.3 % | **7.1 %** | 462.69 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 819.90 € | **779.00 €** | 15.0 % | **9.3 %** | 779.49 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 244.90 € | **205.00 €** | 29.9 % | **8.7 %** | 205.39 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 423.50 € | **387.00 €** | 20.9 % | **10.5 %** | 387.20 € | cena podľa najlacnejšieho iného predajcu |
| Beyerdynamic AVENTHO 300, čierne | 399.00 € | **364.50 €** | 15.0 % | **5.1 %** | 295.64 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beyerdynamic AVENTHO 300, sivé | 399.00 € | **364.50 €** | 15.0 % | **5.1 %** | 295.64 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 675.50 € | **642.00 €** | 15.0 % | **9.3 %** | 642.18 € | cena podľa najlacnejšieho iného predajcu |
| Anamorfný objektív Freewell 1,33x s bajonetom 17 mm | 236.90 € | **203.50 €** | 30.9 % | **12.4 %** | 203.88 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 498.90 € | **465.50 €** | 22.3 % | **14.1 %** | 465.67 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **463.00 €** | 15.0 % | **7.6 %** | 463.17 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T68243WCSHBC | 467.00 € | **435.50 €** | 19.7 % | **11.6 %** | 435.80 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 535.50 € | **504.50 €** | 15.6 % | **8.9 %** | 504.80 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **953.50 €** | 15.0 % | **11.5 %** | 953.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer X Air XR16 Digital Mixer | 339.00 € | **309.90 €** | 15.0 % | **5.1 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor BlitzWolf BW-V11 | 366.00 € | **337.00 €** | 19.4 % | **10.0 %** | 337.11 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **396.00 €** | 15.0 % | **7.3 %** | 396.34 € | cena podľa najlacnejšieho iného predajcu |
| Insta360 GO 3 (128 GB) čierna | 320.90 € | **293.00 €** | 15.0 % | **5.0 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux EW8F5412SAC | 711.50 € | **684.00 €** | 11.7 % | **7.4 %** | 684.01 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 498.00 € | **471.50 €** | 20.0 % | **13.6 %** | 471.58 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 617.50 € | **592.00 €** | 26.4 % | **21.2 %** | 592.16 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo RV20 Max Plus | 229.50 € | **204.50 €** | 20.8 % | **7.6 %** | 204.70 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1305.00 €** | 13.3 % | **11.2 %** | 1305.29 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 340.00 € | **315.50 €** | 20.0 % | **11.4 %** | 315.68 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 378.90 € | **355.00 €** | 18.8 % | **11.3 %** | 355.47 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| MiniPC Minis Fórum X1-255 AMD Ryzen 7 H255, barebone | 471.50 € | **450.90 €** | 15.0 % | **10.0 %** | 450.95 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 678.50 € | **658.00 €** | 9.2 % | **5.9 %** | 658.40 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 464.90 € | **444.90 €** | 9.7 % | **5.0 %** | 410.03 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 312.50 € | **292.50 €** | 18.0 % | **10.4 %** | 292.70 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 261.00 € | **243.00 €** | 22.3 % | **13.9 %** | 243.20 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 233.00 € | **216.00 €** | 23.3 % | **14.3 %** | 216.13 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 597.00 € | **580.50 €** | 10.7 % | **7.6 %** | 580.73 € | cena podľa najlacnejšieho iného predajcu |
| Midland D10 DMR digital radio | 191.00 € | **174.90 €** | 26.3 % | **15.7 %** | 174.99 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 492.00 € | **476.00 €** | 16.0 % | **12.2 %** | 476.19 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **333.00 €** | 15.0 % | **9.8 %** | 333.19 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 459.50 € | **444.00 €** | 10.8 % | **7.0 %** | 444.20 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 20 Loop s LCD FIXZENL-20-BK | 39.50 € | **24.00 €** | 85.5 % | **12.7 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DJ 300 PRO X, DJ 2-in-1 slúchadlá | 219.00 € | **203.90 €** | 15.0 % | **7.1 %** | 204.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 585.50 € | **570.50 €** | 28.8 % | **25.5 %** | 570.61 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 488.90 € | **474.00 €** | 11.1 % | **7.8 %** | 474.33 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 209.00 € | **194.50 €** | 15.0 % | **7.0 %** | 194.87 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B112D aktívny PA reproduktorový s... | 225.00 € | **210.90 €** | 15.0 % | **7.8 %** | 211.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 38SBL6-S | 302.90 € | **288.90 €** | 10.1 % | **5.1 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 770 PRO 250 Ohm | 159.00 € | **145.50 €** | 15.0 % | **5.2 %** | 130.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic DT 770 PRO 32 Ohm | 159.00 € | **145.50 €** | 15.0 % | **5.2 %** | 134.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer X Air XR12 digitálny mixér | 279.00 € | **265.90 €** | 15.0 % | **9.6 %** | 266.00 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 344.50 € | **331.50 €** | 11.8 % | **7.6 %** | 331.84 € | cena podľa najlacnejšieho iného predajcu |
| Integrované čidlo GARNI 1NG | 184.50 € | **171.90 €** | 12.9 % | **5.2 %** | 170.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo Chamber Line 30 | 190.50 € | **178.50 €** | 24.9 % | **17.0 %** | 178.71 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 583.50 € | **572.00 €** | 32.3 % | **29.7 %** | 572.07 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 551.50 € | **540.00 €** | 10.8 % | **8.5 %** | 540.21 € | cena podľa najlacnejšieho iného predajcu |
| Beko RCSA240K40WN | 275.90 € | **264.50 €** | 9.6 % | **5.0 %** | 250.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux E62LD100S | 399.90 € | **388.50 €** | 10.1 % | **6.9 %** | 388.80 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 289.00 € | **278.00 €** | 15.0 % | **10.6 %** | 278.16 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFS 7469 W EE | 360.50 € | **350.00 €** | 10.2 % | **7.0 %** | 350.10 € | cena podľa najlacnejšieho iného predajcu |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 79.00 € | **68.50 €** | 29.8 % | **12.5 %** | 68.90 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **420.50 €** | 15.0 % | **12.2 %** | 420.74 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CCGMEE9025PX/E | 798.90 € | **788.90 €** | 12.6 % | **11.2 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 917.50 € | **908.00 €** | 19.5 % | **18.3 %** | 908.34 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 331.00 € | **322.50 €** | 12.3 % | **9.4 %** | 322.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 267.00 € | **258.50 €** | 10.4 % | **6.8 %** | 258.90 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 310.00 € | **302.00 €** | 21.9 % | **18.8 %** | 302.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 310.00 € | **302.00 €** | 20.7 % | **17.6 %** | 302.19 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 238.90 € | **231.00 €** | 16.6 % | **12.7 %** | 231.21 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 374.90 € | **367.50 €** | 11.7 % | **9.5 %** | 367.69 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 169.50 € | **162.50 €** | 18.5 % | **13.6 %** | 162.51 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 261.50 € | **254.50 €** | 29.2 % | **25.7 %** | 254.69 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 261.50 € | **254.50 €** | 20.1 % | **16.9 %** | 254.69 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 500.00 € | **493.00 €** | 6.9 % | **5.4 %** | 493.38 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Party Queen | 34.00 € | **27.50 €** | 30.8 % | **5.8 %** | 25.03 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer U-PHORIA STUDIO PRO recording/podcast boundle | 139.00 € | **132.50 €** | 15.0 % | **9.6 %** | 132.55 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 135.50 € | **129.00 €** | 19.9 % | **14.1 %** | 129.20 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 220A | 202.00 € | **195.50 €** | 12.4 % | **8.8 %** | 195.70 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool W7F HP33 A | 334.00 € | **327.50 €** | 10.2 % | **8.0 %** | 327.70 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 291.90 € | **285.50 €** | 10.1 % | **7.7 %** | 285.83 € | cena podľa najlacnejšieho iného predajcu |
| CANON SELPHY Square QX20 červená | 136.50 € | **130.50 €** | 10.2 % | **5.4 %** | 119.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO354VD | 131.50 € | **125.50 €** | 10.4 % | **5.3 %** | 119.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vlákno CREALITY PLA Jahoda (červená) | 24.90 € | **19.00 €** | 78.0 % | **35.9 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 216.00 € | **210.50 €** | 11.6 % | **8.7 %** | 210.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 326.50 € | **321.00 €** | 11.6 % | **9.8 %** | 321.10 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj LaserPecker LP2 Plus | 1000.00 € | **994.90 €** | 21.5 % | **20.9 %** | 994.95 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 204.00 € | **198.90 €** | 11.6 % | **8.9 %** | 198.96 € | cena podľa najlacnejšieho iného predajcu |
| JBL Live Flex rose | 111.90 € | **106.90 €** | 10.2 % | **5.3 %** | 69.64 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WHIRLPOOL TDLRB 65242BS EU/N | 358.00 € | **353.00 €** | 8.4 % | **6.9 %** | 353.40 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 298.90 € | **294.00 €** | 16.3 % | **14.4 %** | 294.12 € | cena podľa najlacnejšieho iného predajcu |
| Hohem microphone (2TX + 1RX + charging case) | 66.50 € | **61.90 €** | 13.5 % | **5.6 %** | 53.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy BRS 7N2BX-S | 414.50 € | **410.00 €** | 16.1 % | **14.9 %** | 410.03 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 577.00 € | **572.50 €** | 10.3 % | **9.4 %** | 572.54 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 355.00 € | **350.50 €** | 9.6 % | **8.2 %** | 350.73 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 179.50 € | **175.00 €** | 15.4 % | **12.5 %** | 175.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 14.90 € | **10.50 €** | 49.7 % | **5.5 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TC Electronic PolyTune Clip clip-on polyphonic tuner... | 47.00 € | **43.00 €** | 15.0 % | **5.2 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| EVOLVEO BoneMax bezdrátová sluchátka | 96.50 € | **92.50 €** | 10.1 % | **5.5 %** | 82.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TC ELECTRONIC PLETHORA X1 TonePrint Loader so 14 leg... | 149.00 € | **145.00 €** | 15.0 % | **11.9 %** | 145.01 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Senior Retro blesk | 125.50 € | **121.50 €** | 15.1 % | **11.5 %** | 121.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 234.00 € | **230.00 €** | 11.0 % | **9.1 %** | 230.49 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 183.90 € | **180.00 €** | 11.7 % | **9.3 %** | 180.02 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 265.90 € | **262.00 €** | 8.9 % | **7.3 %** | 262.09 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **557.00 €** | 7.3 % | **6.6 %** | 557.25 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic PolyTune Clip black clip-on tuner, black | 45.00 € | **41.50 €** | 15.0 % | **6.1 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 1535SS | 211.00 € | **207.50 €** | 14.3 % | **12.4 %** | 207.60 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-R SUPREME FUN 1200W, 400 ... | 58.50 € | **55.50 €** | 10.8 % | **5.2 %** | 54.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight stolná lampa Falun, E27, biela | 29.50 € | **26.50 €** | 32.6 % | **19.1 %** | 26.84 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 164.00 € | **161.00 €** | 9.4 % | **7.4 %** | 161.37 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto+ Looper multi-session looper pedal | 160.00 € | **157.00 €** | 15.0 % | **12.8 %** | 157.48 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05A1 | 104.00 € | **101.50 €** | 12.5 % | **9.8 %** | 101.70 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 157.50 € | **155.00 €** | 10.2 % | **8.5 %** | 155.46 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC43SGMXC | 127.90 € | **125.50 €** | 15.3 % | **13.1 %** | 125.78 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 127.90 € | **125.50 €** | 15.3 % | **13.1 %** | 125.78 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones True Wireless Style 2, modrá | 29.90 € | **27.50 €** | 15.0 % | **5.8 %** | 25.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Energy Sistem Hoshi Eco, bezdrôtové  slúchadlá, cloud | 29.90 € | **27.50 €** | 15.0 % | **5.8 %** | 26.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Energy Sistem Hoshi Eco, bezdrôtové slúchadlá, červené | 29.90 € | **27.50 €** | 15.0 % | **5.8 %** | 26.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 31.1 % | **6.0 %** | 9.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer POWERPLAY P1 personal In-Ear monitor ampli... | 42.00 € | **39.90 €** | 15.0 % | **9.3 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell ND pre OSMO 360 – balenie po 3... | 189.00 € | **186.90 €** | 31.5 % | **30.0 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Lamax Clips1 ANC White | 43.50 € | **41.50 €** | 10.3 % | **5.3 %** | 28.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MERCUSYS MR80X WiFi Dual Band Router | 42.50 € | **40.50 €** | 10.4 % | **5.2 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 24.90 € | **22.90 €** | 15.0 % | **5.8 %** | 21.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER HL-L1232W | 121.50 € | **119.50 €** | 14.8 % | **12.9 %** | 119.53 € | cena podľa najlacnejšieho iného predajcu |
| SONY WFC510Y žlutá | 42.90 € | **40.90 €** | 10.4 % | **5.2 %** | 40.95 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 312.00 € | **310.00 €** | 22.9 % | **22.1 %** | 310.10 € | cena podľa najlacnejšieho iného predajcu |
| Behringer U-PHORIA UM2 USB audio interface | 35.00 € | **33.00 €** | 15.0 % | **8.4 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 134.50 € | **132.50 €** | 11.4 % | **9.8 %** | 132.78 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 20.50 € | **18.50 €** | 32.5 % | **19.6 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 167.50 € | **165.50 €** | 8.8 % | **7.5 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 19.50 € | **17.90 €** | 43.7 % | **31.9 %** | 17.97 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 30.00 € | **28.50 €** | 16.9 % | **11.1 %** | 28.59 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 214.50 € | **213.00 €** | 15.0 % | **14.2 %** | 213.12 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 217.50 € | **216.00 €** | 15.1 % | **14.3 %** | 216.13 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 172.50 € | **171.00 €** | 8.9 % | **8.0 %** | 171.13 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 191.50 € | **190.00 €** | 16.3 % | **15.4 %** | 190.31 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 191.50 € | **190.00 €** | 16.3 % | **15.4 %** | 190.31 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI DI600P DI box | 34.00 € | **32.50 €** | 15.0 % | **9.9 %** | 32.82 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E15 | 288.00 € | **286.50 €** | 8.0 % | **7.4 %** | 286.87 € | cena podľa najlacnejšieho iného predajcu |
| Behringer XENYX 502S 5-kanálový analógový mixpult s ... | 56.00 € | **54.50 €** | 15.0 % | **11.9 %** | 54.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.50 € | **58.00 €** | 37.3 % | **33.8 %** | 58.43 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 451 DAB+ alarm clock, black | 35.50 € | **34.00 €** | 11.2 % | **6.5 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 42.50 € | **41.00 €** | 44.6 % | **39.5 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 49.90 € | **48.50 €** | 26.7 % | **23.1 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 328.90 € | **327.50 €** | 7.7 % | **7.3 %** | 327.84 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GECS5B70CLI | 431.90 € | **430.50 €** | 11.7 % | **11.3 %** | 430.84 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 110.00 € | **108.90 €** | 14.1 % | **13.0 %** | 108.97 € | cena podľa najlacnejšieho iného predajcu |
| JBL JR470 bílá | 66.90 € | **65.90 €** | 7.0 % | **5.4 %** | 59.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL JR470 modrá | 66.90 € | **65.90 €** | 7.0 % | **5.4 %** | 59.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL JR470 růžová | 66.90 € | **65.90 €** | 7.0 % | **5.4 %** | 59.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.50 € | **12.50 €** | 15.5 % | **7.0 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ALI BT sluch. AH02,FM,SD,čer/zel. AH02GN | 13.50 € | **12.50 €** | 15.5 % | **7.0 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 246.90 € | **245.90 €** | 8.0 % | **7.6 %** | 246.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 224.90 € | **223.90 €** | 40532.3 % | **40351.7 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 661.90 € | **660.90 €** | 119484.5 % | **119303.8 %** | 661.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Havit E529BT (čierne) | 11.50 € | **10.50 €** | 32.2 % | **20.7 %** | 10.63 € | cena podľa najlacnejšieho iného predajcu |
| Subwoofer Edifier Airpulse SW8 (čierny) | 327.00 € | **326.00 €** | 11.0 % | **10.7 %** | 326.29 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní UV sterilizační lampa GARNI UV 45T | 18.50 € | **17.50 €** | 12.6 % | **6.5 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 44.00 € | **43.00 €** | 43.5 % | **40.2 %** | 43.40 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 43.00 € | **42.00 €** | 14.2 % | **11.6 %** | 42.46 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 244.00 € | **243.00 €** | 8.0 % | **7.6 %** | 243.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníkový biely rám pre inštaláciu LED panel... | 17.00 € | **16.00 €** | 69.0 % | **59.0 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| Behringer MU1000 music stand | 29.00 € | **28.00 €** | 15.0 % | **11.0 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 95.90 € | **95.00 €** | 12.3 % | **11.2 %** | 95.17 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 191.90 € | **191.00 €** | 15.1 % | **14.6 %** | 191.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **22.00 €** | 38.1 % | **32.7 %** | 22.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.90 € | **19.00 €** | 37.7 % | **31.5 %** | 19.48 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Tapo L530E | 11.50 € | **10.90 €** | 12.9 % | **7.0 %** | 9.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY sluchátka MDR-ZX110P, růžová | 13.50 € | **12.90 €** | 11.0 % | **6.0 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 3.30 € | **2.70 €** | 50.7 % | **23.3 %** | 2.73 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 3.80 € | **3.20 €** | 55.2 % | **30.7 %** | 3.24 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 769.00 € | **768.50 €** | 40.1 % | **40.0 %** | 768.58 € | cena podľa najlacnejšieho iného predajcu |
| Behringer BH40 High-Fidelity slúchadlá | 40.00 € | **39.50 €** | 15.0 % | **13.6 %** | 39.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 23.5 % | **20.5 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 37.4 % | **34.1 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 164.00 € | **163.50 €** | 7.2 % | **6.9 %** | 163.64 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 277.00 € | **276.50 €** | 11.5 % | **11.3 %** | 276.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.00 € | **11.50 €** | 13.2 % | **8.5 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.50 € | **12.00 €** | 11.4 % | **7.0 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 54.00 € | **53.50 €** | 31.8 % | **30.6 %** | 53.84 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 343.00 € | **342.50 €** | 19.7 % | **19.5 %** | 342.89 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 44.50 € | **44.00 €** | 15.2 % | **13.9 %** | 44.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim | 28.50 € | **28.00 €** | 8.1 % | **6.2 %** | 28.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.50 € | **37.00 €** | 9.1 % | **7.6 %** | 37.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 47.00 € | **46.50 €** | 7.3 % | **6.2 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 31.00 € | **30.50 €** | 11.4 % | **9.6 %** | 30.89 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.00 € | **40.50 €** | 10.1 % | **8.7 %** | 40.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Linomatic 500 Easy 85286 | 97.50 € | **97.00 €** | 7.4 % | **6.9 %** | 97.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 113.50 € | **113.00 €** | 7.5 % | **7.0 %** | 113.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 98.00 € | **97.50 €** | 6.1 % | **5.6 %** | 97.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 62.00 € | **61.50 €** | 9.9 % | **9.1 %** | 61.89 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI FNB48P BT Tester USB portov s Bluetooth | 35.50 € | **35.00 €** | 9.7 % | **8.2 %** | 35.39 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 103.50 € | **103.00 €** | 7.6 % | **7.1 %** | 103.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 45.00 € | **44.50 €** | 8.0 % | **6.8 %** | 44.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 317.00 € | **316.50 €** | 18.0 % | **17.9 %** | 316.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 130.00 € | **129.50 €** | 8.5 % | **8.1 %** | 129.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 470.50 € | **470.00 €** | 8.7 % | **8.6 %** | 470.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 931.50 € | **931.00 €** | 18.4 % | **18.3 %** | 931.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT665P-5m endoskop | 43.50 € | **43.00 €** | 28.2 % | **26.8 %** | 43.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 161.50 € | **161.00 €** | 9.1 % | **8.8 %** | 161.39 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 851.50 € | **851.00 €** | 10.9 % | **10.9 %** | 851.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 319.00 € | **318.50 €** | 9.6 % | **9.4 %** | 318.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 85.00 € | **84.50 €** | 9.8 % | **9.2 %** | 84.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 290.50 € | **290.00 €** | 25.2 % | **25.0 %** | 290.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 121.00 € | **120.50 €** | 12.9 % | **12.4 %** | 120.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 145.00 € | **144.50 €** | 8.9 % | **8.5 %** | 144.89 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1284.50 € | **1284.00 €** | 7.4 % | **7.3 %** | 1284.39 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta Extreme Dry Compact DH5250F0 | 231.00 € | **230.50 €** | 5.6 % | **5.4 %** | 230.89 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 80.50 € | **80.00 €** | 9.4 % | **8.7 %** | 80.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 51.00 € | **50.50 €** | 6.8 % | **5.7 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 295.00 € | **294.50 €** | 46.6 % | **46.3 %** | 294.89 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3226  XXL toaster, 900 W | 19.50 € | **19.00 €** | 10.5 % | **7.6 %** | 19.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9286IB | 245.50 € | **245.00 €** | 6.1 % | **5.9 %** | 245.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 87.00 € | **86.50 €** | 8.9 % | **8.2 %** | 86.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 269.50 € | **269.00 €** | 6.2 % | **6.0 %** | 269.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 24.00 € | **23.50 €** | 8.6 % | **6.3 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA CD-S303 BLACK | 376.50 € | **376.00 €** | 5.8 % | **5.6 %** | 376.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 273.50 € | **273.00 €** | 7.4 % | **7.2 %** | 273.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 254.50 € | **254.00 €** | 6.4 % | **6.2 %** | 254.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 156.50 € | **156.00 €** | 11.2 % | **10.8 %** | 156.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 70.50 € | **70.00 €** | 7.2 % | **6.5 %** | 70.39 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 726.50 € | **726.00 €** | 8.8 % | **8.8 %** | 726.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 136.00 € | **135.50 €** | 18.9 % | **18.4 %** | 135.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 178.50 € | **178.00 €** | 15.3 % | **15.0 %** | 178.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 79.00 € | **78.50 €** | 35.8 % | **34.9 %** | 78.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 235.50 € | **235.00 €** | 7.4 % | **7.2 %** | 235.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 201.50 € | **201.00 €** | 6.8 % | **6.5 %** | 201.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 266.00 € | **265.50 €** | 6.0 % | **5.8 %** | 265.89 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.50 € | **35.00 €** | 14.5 % | **12.9 %** | 35.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 74.00 € | **73.50 €** | 10.6 % | **9.9 %** | 73.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 316.50 € | **316.00 €** | 7.7 % | **7.5 %** | 316.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 629.00 € | **628.50 €** | 9.5 % | **9.4 %** | 628.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 664.50 € | **664.00 €** | 12.2 % | **12.1 %** | 664.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 693.50 € | **693.00 €** | 13.1 % | **13.0 %** | 693.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 102.50 € | **102.00 €** | 8.5 % | **8.0 %** | 102.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.50 € | **102.00 €** | 15.5 % | **14.9 %** | 102.39 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E200SM | 17.50 € | **17.00 €** | 19.9 % | **16.4 %** | 17.40 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi Redmi Buds 8 Active Black | 16.50 € | **16.00 €** | 10.0 % | **6.6 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 350 ml, nerezová | 11.50 € | **11.00 €** | 15.0 % | **10.0 %** | 11.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.50 € | **11.00 €** | 15.0 % | **10.0 %** | 11.49 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 69.50 € | **69.00 €** | 10.6 % | **9.8 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 41.50 € | **41.00 €** | 16.1 % | **14.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 33.50 € | **33.00 €** | 43.3 % | **41.1 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 264 AP | 58.50 € | **58.00 €** | 10.6 % | **9.6 %** | 58.50 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER DCP-T535DW | 198.90 € | **198.50 €** | 6.6 % | **6.4 %** | 198.79 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 121.90 € | **121.50 €** | 6.1 % | **5.7 %** | 121.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO716BL | 80.90 € | **80.50 €** | 6.3 % | **5.8 %** | 80.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | cena podľa najlacnejšieho iného predajcu |
| Rýchlovarná kanvica Hyundai VK690B černá | 36.90 € | **36.50 €** | 10.1 % | **8.9 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.80 €** | 38.1 % | **34.6 %** | 7.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| SPL Phonitor One d slúchadlový zosilňovač | 799.00 € | **798.90 €** | 15.0 % | **15.0 %** | 799.00 € | cena podľa najlacnejšieho iného predajcu |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 17.00 € | **16.90 €** | 66.7 % | **65.7 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9270p bezdrátová klávesnice černá | 37.00 € | **36.90 €** | 9.2 % | **8.9 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **43.90 €** | 5.8 % | **5.5 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P204FER250 | 22.00 € | **21.90 €** | 16.7 % | **16.1 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 4000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7344H | 109.00 € | **108.90 €** | 9.8 % | **9.7 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 185.00 € | **184.90 €** | 7.9 % | **7.8 %** | 185.00 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Hall Of Fame 2 Mini reverb effect pedal | 115.00 € | **114.90 €** | 15.0 % | **14.9 %** | 115.00 € | cena podľa najlacnejšieho iného predajcu |

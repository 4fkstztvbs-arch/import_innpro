# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-08

Vstup: `premiumstore-sk_2026-10-08_07-15.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7572**
- Návrh **zvýšiť** cenu: **68** produktov
- Návrh **znížiť** cenu: **139** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **7365** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **22**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **790**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (68)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravír Creality Falcon T1 Fiber 20 W | 2636.50 € | **2698.90 €** | 5.0 % | **7.5 %** | 2699.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 806.00 € | **863.50 €** | 15.3 % | **23.6 %** | 863.89 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 5 powered studio monitor | 201.90 € | **257.50 €** | 16.1 % | **48.1 %** | 257.83 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDIN38641Q | 327.00 € | **365.50 €** | 10.0 % | **23.0 %** | 365.75 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 339.00 € | **353.00 €** | 6.9 % | **11.3 %** | 353.29 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO30211IP | 112.50 € | **125.00 €** | 10.4 % | **22.6 %** | 125.46 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 76.50 € | **83.00 €** | 31.5 % | **42.6 %** | 83.17 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 81.50 € | **87.00 €** | 11.2 % | **18.7 %** | 87.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 27.50 € | **33.00 €** | 19.1 % | **42.9 %** | 33.48 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 133.50 € | **138.90 €** | 16.7 % | **21.4 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO540FR | 58.50 € | **63.00 €** | 10.1 % | **18.6 %** | 63.09 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 109.50 € | **114.00 €** | 10.3 % | **14.9 %** | 114.47 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 176.00 € | **179.50 €** | 13.7 % | **16.0 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **47.50 €** | 14.4 % | **20.8 %** | 47.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 16.00 € | **18.50 €** | 13.8 % | **31.6 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu |
| City Boss RS350 černá | 317.50 € | **319.90 €** | 7.2 % | **8.0 %** | 320.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight WIFI zásuvka s meraním spotreby | 10.00 € | **12.00 €** | 13.9 % | **36.6 %** | 12.02 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2014800 Elektrický nůž | 31.50 € | **33.50 €** | 10.9 % | **17.9 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9268WK | 33.00 € | **35.00 €** | 10.2 % | **16.9 %** | 35.41 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 24.90 € | **26.50 €** | 72.6 % | **83.7 %** | 26.61 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 36.50 € | **38.00 €** | 59.2 % | **65.7 %** | 38.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna meteostanica, prehľadný a diza... | 60.50 € | **62.00 €** | 17.9 % | **20.8 %** | 62.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9192MC | 23.90 € | **25.00 €** | 11.0 % | **16.1 %** | 25.10 € | cena podľa najlacnejšieho iného predajcu |
| Tesla EasyCook AE300 | 43.90 € | **45.00 €** | 10.4 % | **13.1 %** | 45.40 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 256.00 € | **257.00 €** | 19.6 % | **20.1 %** | 257.09 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO544FR | 98.50 € | **99.50 €** | 10.2 % | **11.3 %** | 99.59 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 343.00 € | **344.00 €** | 19.7 % | **20.1 %** | 344.19 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 470.50 € | **471.50 €** | 8.7 % | **9.0 %** | 471.69 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 66.50 € | **67.50 €** | 17.9 % | **19.7 %** | 67.72 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerstation Uni FIXPOS-U-BK | 33.50 € | **34.50 €** | 8.5 % | **11.7 %** | 34.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 13.50 € | **14.50 €** | 9.9 % | **18.0 %** | 14.75 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 107.00 € | **107.90 €** | 40.3 % | **41.5 %** | 107.93 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 291.00 € | **291.90 €** | 25.4 % | **25.8 %** | 291.99 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1-Ss | 125.50 € | **126.00 €** | 6.8 % | **7.2 %** | 126.07 € | cena podľa najlacnejšieho iného predajcu |
| STRONG SRT 8119 | 26.00 € | **26.50 €** | 10.1 % | **12.2 %** | 26.58 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT8208 Dvbt přijímač | 26.00 € | **26.50 €** | 10.1 % | **12.2 %** | 26.58 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 129.00 € | **129.50 €** | 7.7 % | **8.1 %** | 129.59 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.00 € | **87.50 €** | 21.7 % | **22.4 %** | 87.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový časovač WiFi Meross MRS100HK(E... | 25.00 € | **25.50 €** | 25.1 % | **27.6 %** | 25.59 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 83.50 € | **84.00 €** | 27.3 % | **28.1 %** | 84.09 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 143.00 € | **143.50 €** | 6.6 % | **6.9 %** | 143.64 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.50 € | **133.00 €** | 16.0 % | **16.4 %** | 133.19 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 82.00 € | **82.50 €** | 8.5 % | **9.1 %** | 82.69 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.50 € | **118.00 €** | 23782.1 % | **23883.7 %** | 118.19 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPhone 17 FIXSHM-1600-TR | 17.00 € | **17.50 €** | 10.1 % | **13.4 %** | 17.69 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 83.00 € | **83.50 €** | 5.9 % | **6.5 %** | 83.69 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 118.50 € | **119.00 €** | 31.7 % | **32.2 %** | 119.19 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 17.00 € | **17.50 €** | 10.1 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 317.50 € | **318.00 €** | 18.2 % | **18.4 %** | 318.29 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.00 € | **239.50 €** | 11.9 % | **12.2 %** | 239.79 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia Uni-T RCD UT582+ | 101.00 € | **101.50 €** | 10.9 % | **11.4 %** | 101.79 € | cena podľa najlacnejšieho iného predajcu |
| ETA Aquabelo 1264 90000, černý/bílý | 44.50 € | **45.00 €** | 12.6 % | **13.8 %** | 45.30 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1009900 | 45.50 € | **46.00 €** | 10.3 % | **11.5 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 181.00 € | **181.50 €** | 22.6 % | **23.0 %** | 181.89 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10S | 342.00 € | **342.50 €** | 6.7 % | **6.8 %** | 342.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.00 € | **162.50 €** | 20.8 % | **21.2 %** | 162.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.50 € | **70.90 €** | 13.8 % | **14.4 %** | 70.99 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 186.50 € | **186.90 €** | 7.0 % | **7.3 %** | 186.99 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.50 € | **152.90 €** | 19.3 % | **19.6 %** | 152.99 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2407 | 66.50 € | **66.90 €** | 5.6 % | **6.3 %** | 67.00 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 38.50 € | **38.90 €** | 17.7 % | **18.9 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1019800 Napěňovač Choco-lat | 57.90 € | **58.00 €** | 10.4 % | **10.6 %** | 58.08 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.90 € | **36.00 €** | 18.4 % | **18.7 %** | 36.09 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 61.90 € | **62.00 €** | 15.5 % | **15.6 %** | 62.19 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.50 € | **3.60 €** | 55.5 % | **59.9 %** | 3.69 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 86.90 € | **87.00 €** | 15.2 % | **15.3 %** | 87.19 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.90 € | **90.00 €** | 15.3 % | **15.4 %** | 90.19 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 89.90 € | **90.00 €** | 14.4 % | **14.5 %** | 90.19 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (139)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravír Creality Falcon T1 20 W | 2705.50 € | **2490.00 €** | 15.0 % | **5.8 %** | 2490.29 € | cena podľa najlacnejšieho iného predajcu |
| Midland D10 DMR digital radio | 191.00 € | **158.90 €** | 26.3 % | **5.1 %** | 158.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link Sector Bridge 5 1x GLAN, ... | 214.50 € | **184.50 €** | 34.3 % | **15.5 %** | 184.56 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FN619EEW5 | 498.50 € | **484.50 €** | 10.1 % | **7.0 %** | 484.80 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C300 | 141.90 € | **129.90 €** | 15.0 % | **5.3 %** | 129.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LED štúdiové osvetlenie NEEWER BASICS VL67B | 44.90 € | **33.90 €** | 52.5 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Akčná kamera SJCAM C300 | 139.00 € | **129.90 €** | 12.7 % | **5.3 %** | 129.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy PILOT S10 Radar 4K | 169.90 € | **161.90 €** | 10.2 % | **5.0 %** | 131.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rádio TechniSat DIGITRADIO 317 /černé/ | 91.00 € | **83.50 €** | 18.5 % | **8.7 %** | 83.70 € | cena podľa najlacnejšieho iného predajcu |
| myPhone Hammer Iron Va oranžový | 159.90 € | **152.50 €** | 10.2 % | **5.1 %** | 144.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TESLA SlowJuicer SJ770 XXL Deluxe | 128.90 € | **122.90 €** | 10.3 % | **5.2 %** | 120.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WHIRLPOOL AKR 749/1 NB | 122.90 € | **117.50 €** | 10.2 % | **5.3 %** | 103.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lauben Low Sugar Rice Cooker 1500AT | 92.90 € | **88.50 €** | 10.4 % | **5.1 %** | 71.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| myPhone Hammer Boost 2 LTE oranžový | 81.90 € | **78.00 €** | 10.3 % | **5.1 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight projekčné hodiny s rádiom a budíkom | 21.50 € | **18.00 €** | 47.5 % | **23.5 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.00 € | **14.00 €** | 38.8 % | **14.3 %** | 14.37 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 717 MF | 48.50 € | **45.90 €** | 11.0 % | **5.1 %** | 40.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lauben Rice Cooker 1500BW | 62.00 € | **59.50 €** | 10.1 % | **5.7 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CPA HALO 25 černý | 51.50 € | **49.00 €** | 10.5 % | **5.1 %** | 46.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **14.00 €** | 38.0 % | **17.1 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo L930-5 | 40.90 € | **38.90 €** | 10.5 % | **5.1 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| myPhone Halo C SENIOR černý | 40.90 € | **38.90 €** | 10.7 % | **5.2 %** | 38.91 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 18.50 € | **16.50 €** | 70.1 % | **51.7 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofon Maono PD200x (biely) | 52.00 € | **50.00 €** | 21.5 % | **16.8 %** | 50.30 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P101CUD100 | 34.50 € | **32.90 €** | 10.4 % | **5.3 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Roadstar HIF-8892 EBT Multimediální HI-F | 181.90 € | **180.50 €** | 5.9 % | **5.1 %** | 179.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight multimeter, max AC 750V/10A, max. DC 1000V/1... | 11.90 € | **10.50 €** | 24.4 % | **9.7 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Navitel AR202 NV | 31.90 € | **30.50 €** | 11.0 % | **6.2 %** | 26.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CPA HALO 21 červený | 40.90 € | **39.50 €** | 10.7 % | **6.9 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 21 modrý | 40.90 € | **39.50 €** | 10.7 % | **6.9 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 28 červený | 44.90 € | **43.50 €** | 10.5 % | **7.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Yogurella 617 | 27.50 € | **26.50 €** | 10.6 % | **6.6 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 12.50 € | **11.50 €** | 17.1 % | **7.7 %** | 11.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 242.90 € | **241.90 €** | 6.2 % | **5.8 %** | 242.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 414.90 € | **413.90 €** | 10.0 % | **9.7 %** | 414.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 396.90 € | **395.90 €** | 6.2 % | **6.0 %** | 396.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 221.90 € | **220.90 €** | 39990.3 % | **39809.7 %** | 221.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 658.90 € | **657.90 €** | 118942.5 % | **118761.8 %** | 658.00 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Bollitore 2846, černá | 18.50 € | **17.50 €** | 18.3 % | **11.9 %** | 17.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 22.00 € | **21.00 €** | 37.2 % | **30.9 %** | 21.34 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 297.00 € | **296.00 €** | 20.3 % | **19.9 %** | 296.36 € | cena podľa najlacnejšieho iného predajcu |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 28.00 € | **27.00 €** | 19.9 % | **15.6 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 1548/05 | 28.90 € | **28.00 €** | 10.6 % | **7.1 %** | 28.24 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2016100 EQUA Kuchyňská váha | 19.50 € | **18.90 €** | 11.0 % | **7.6 %** | 18.92 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 205/01 | 43.50 € | **42.90 €** | 7.3 % | **5.8 %** | 43.00 € | cena podľa najlacnejšieho iného predajcu |
| Meetion Klávesnice BTK001 bezdrátová US | 12.50 € | **11.90 €** | 12.4 % | **7.0 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link PG2400P KIT G.hn adaptér ... | 127.50 € | **126.90 €** | 6.4 % | **5.9 %** | 126.95 € | cena podľa najlacnejšieho iného predajcu |
| Rádio BLOW RA19 nouzové DAB+/FM/BLUETOOTH, ruční kli... | 40.50 € | **40.00 €** | 6.4 % | **5.1 %** | 36.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-Link Tapo L630 | 10.00 € | **9.50 €** | 11.1 % | **5.5 %** | 9.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Archer GE400 BE6500, WiFi 7, 1x ... | 207.00 € | **206.50 €** | 5.4 % | **5.2 %** | 206.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TC Electronic UniTune Clip | 37.50 € | **37.00 €** | 13.5 % | **12.0 %** | 37.10 € | cena podľa najlacnejšieho iného predajcu |
| Casio Fx 85 Es Plus 2E | 20.00 € | **19.50 €** | 11.1 % | **8.3 %** | 19.69 € | cena podľa najlacnejšieho iného predajcu |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 48.00 € | **47.50 €** | 7.7 % | **6.6 %** | 47.69 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 234.00 € | **233.50 €** | 10.2 % | **9.9 %** | 233.77 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.50 € | **45.00 €** | 8.2 % | **7.0 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.00 € | **11.50 €** | 13.0 % | **8.3 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO339KP | 53.50 € | **53.00 €** | 10.2 % | **9.1 %** | 53.30 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 345.50 € | **345.00 €** | 7.0 % | **6.8 %** | 345.32 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 345.50 € | **345.00 €** | 11.6 % | **11.4 %** | 345.32 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 319.50 € | **319.00 €** | 12.8 % | **12.6 %** | 319.32 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2507.00 € | **2506.50 €** | 14.5 % | **14.4 %** | 2506.83 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.50 € | **216.00 €** | 17.1 % | **16.9 %** | 216.33 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 50.00 € | **49.50 €** | 60.6 % | **59.0 %** | 49.84 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-RD | 20.00 € | **19.50 €** | 14.9 % | **12.0 %** | 19.84 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 237.50 € | **237.00 €** | 7.0 % | **6.7 %** | 237.34 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 152.00 € | **151.50 €** | 31.1 % | **30.7 %** | 151.88 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 42.00 € | **41.50 €** | 8.7 % | **7.5 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.00 € | **25.50 €** | 9.9 % | **7.8 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.50 € | **20.00 €** | 13.1 % | **10.3 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Perfect Steam Air Board S/M | 15.00 € | **14.50 €** | 13.9 % | **10.1 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.00 € | **36.50 €** | 7.6 % | **6.2 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 47.00 € | **46.50 €** | 7.3 % | **6.2 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 98.50 € | **98.00 €** | 6.7 % | **6.1 %** | 98.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42323PC | 80.00 € | **79.50 €** | 9.9 % | **9.2 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 850.00 € | **849.50 €** | 10.5 % | **10.5 %** | 849.89 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 390.50 € | **390.00 €** | 8.5 % | **8.3 %** | 390.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 317.00 € | **316.50 €** | 8.7 % | **8.5 %** | 316.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 83.00 € | **82.50 €** | 7.0 % | **6.4 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| TESLA MultiCook RC400 Low Carb | 61.50 € | **61.00 €** | 6.4 % | **5.5 %** | 61.39 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 77.50 € | **77.00 €** | 14.0 % | **13.3 %** | 77.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1282.50 € | **1282.00 €** | 7.0 % | **7.0 %** | 1282.39 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 78.00 € | **77.50 €** | 6.0 % | **5.3 %** | 77.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 56.50 € | **56.00 €** | 18.1 % | **17.1 %** | 56.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 288.50 € | **288.00 €** | 43.1 % | **42.9 %** | 288.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3226  XXL toaster, 900 W | 19.50 € | **19.00 €** | 10.3 % | **7.5 %** | 19.39 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3236 | 32.50 € | **32.00 €** | 11.1 % | **9.4 %** | 32.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 85.00 € | **84.50 €** | 6.2 % | **5.5 %** | 84.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 24.00 € | **23.50 €** | 8.6 % | **6.3 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 37.50 € | **37.00 €** | 10.9 % | **9.5 %** | 37.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 271.50 € | **271.00 €** | 6.4 % | **6.3 %** | 271.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 252.50 € | **252.00 €** | 5.4 % | **5.2 %** | 252.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 154.50 € | **154.00 €** | 9.6 % | **9.2 %** | 154.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 74.00 € | **73.50 €** | 12.4 % | **11.6 %** | 73.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 46.00 € | **45.50 €** | 17.1 % | **15.9 %** | 45.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 233.50 € | **233.00 €** | 6.4 % | **6.1 %** | 233.39 € | cena podľa najlacnejšieho iného predajcu |
| REBEL Micropower 1000 | 76.50 € | **76.00 €** | 9.3 % | **8.6 %** | 76.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 199.50 € | **199.00 €** | 5.6 % | **5.3 %** | 199.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 264.50 € | **264.00 €** | 5.2 % | **5.0 %** | 264.39 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 295.50 € | **295.00 €** | 12.8 % | **12.7 %** | 295.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 656.00 € | **655.50 €** | 5.6 % | **5.5 %** | 655.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 71.50 € | **71.00 €** | 6.9 % | **6.1 %** | 71.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 314.00 € | **313.50 €** | 6.8 % | **6.7 %** | 313.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 613.00 € | **612.50 €** | 6.7 % | **6.6 %** | 612.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 643.00 € | **642.50 €** | 8.6 % | **8.5 %** | 642.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 691.00 € | **690.50 €** | 12.7 % | **12.6 %** | 690.89 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 163.00 € | **162.50 €** | 12.4 % | **12.0 %** | 162.90 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 166.50 € | **166.00 €** | 16.0 % | **15.7 %** | 166.40 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.50 € | **166.00 €** | 16.0 % | **15.7 %** | 166.40 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 125.50 € | **125.00 €** | 20.6 % | **20.1 %** | 125.41 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 38 Ah  Victron Energy AGM Sup... | 124.50 € | **124.00 €** | 12.9 % | **12.4 %** | 124.41 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 286.50 € | **286.00 €** | 16.1 % | **15.9 %** | 286.41 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 465.50 € | **465.00 €** | 18.1 % | **18.0 %** | 465.42 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 123.50 € | **123.00 €** | 8.1 % | **7.7 %** | 123.43 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.50 € | **137.00 €** | 15.2 % | **14.8 %** | 137.44 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9046C | 51.50 € | **51.00 €** | 9.2 % | **8.2 %** | 51.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.00 €** | 17.6 % | **15.6 %** | 29.48 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R60 eXtremo Black Orange | 91.50 € | **91.00 €** | 14.6 % | **14.0 %** | 91.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 91.50 € | **91.00 €** | 28.6 % | **27.9 %** | 91.50 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 29.50 € | **29.00 €** | 20.5 % | **18.5 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1441.90 € | **1441.50 €** | 7.3 % | **7.3 %** | 1441.82 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT4000 74 Wh štartér | 116.90 € | **116.50 €** | 17.7 % | **17.3 %** | 116.80 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 106.90 € | **106.50 €** | 16.5 % | **16.1 %** | 106.84 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 84.90 € | **84.50 €** | 27.0 % | **26.4 %** | 84.88 € | cena podľa najlacnejšieho iného predajcu |
| TricutBrush 2.0 – hlavný kefový nástavec pre robotic... | 39.90 € | **39.50 €** | 20.2 % | **19.0 %** | 39.83 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 29.90 € | **29.50 €** | 19.0 % | **17.4 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-838 5G | 22.90 € | **22.50 €** | 30.7 % | **28.4 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 52.90 € | **52.50 €** | 9.4 % | **8.6 %** | 52.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 336.90 € | **336.50 €** | 27.0 % | **26.8 %** | 336.62 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 296.90 € | **296.50 €** | 11.0 % | **10.9 %** | 296.66 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1020.00 € | **1019.90 €** | 15.7 % | **15.7 %** | 1019.91 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 318.00 € | **317.90 €** | 28.0 % | **28.0 %** | 317.94 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 52.00 € | **51.90 €** | 20.8 % | **20.6 %** | 51.97 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C White | 18.00 € | **17.90 €** | 20.2 % | **19.6 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Red | 18.00 € | **17.90 €** | 20.2 % | **19.6 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Blue | 18.00 € | **17.90 €** | 20.2 % | **19.6 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 1.80 € | **1.70 €** | 42.1 % | **34.2 %** | 1.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.87 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 16.00 € | **15.90 €** | 14.3 % | **13.6 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell NEO 2 MEGA KIT – balenie ... | 65.00 € | **64.90 €** | 13.8 % | **13.7 %** | 64.99 € | cena podľa najlacnejšieho iného predajcu |

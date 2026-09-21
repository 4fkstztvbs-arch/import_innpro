# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-21

Vstup: `premiumstore-sk_2026-09-21_07-37.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6932**
- Návrh **zvýšiť** cenu: **85** produktov
- Návrh **znížiť** cenu: **219** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6628** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **6**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **459**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (85)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 466.00 € | **515.90 €** | 18.6 % | **31.3 %** | 515.96 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.90 € | **136.90 €** | 40.5 % | **113.9 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Koleso MOZA RS068 FSR V2 (PC) | 647.00 € | **674.50 €** | 9.7 % | **14.3 %** | 674.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, strieborná) | 252.90 € | **275.50 €** | 15.0 % | **25.3 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 160 Sol | 30.00 € | **50.00 €** | 10.4 % | **83.9 %** | 50.31 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 124.50 € | **143.00 €** | 21.0 % | **39.0 %** | 143.09 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 284.90 € | **298.90 €** | 28.3 % | **34.6 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-S3 Google TV 4K UHD Android TV multimedi... | 66.90 € | **80.00 €** | 9.5 % | **30.9 %** | 80.08 € | cena podľa najlacnejšieho iného predajcu |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **28.00 €** | 11.3 % | **74.2 %** | 28.41 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA A-S201 SILVER | 235.90 € | **245.00 €** | 5.1 % | **9.1 %** | 245.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 50.50 € | **59.50 €** | 11.1 % | **30.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 121.50 € | **130.50 €** | 20.8 % | **29.8 %** | 130.90 € | cena podľa najlacnejšieho iného predajcu |
| Venta H13 & Anti-Formaldehyd set 1er VPE | 48.50 € | **56.00 €** | 11.0 % | **28.1 %** | 56.04 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC026X | 39.90 € | **47.00 €** | 6.5 % | **25.5 %** | 47.07 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir G7 Pro WC Wuchang Edition | 100.00 € | **106.90 €** | 19.6 % | **27.8 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 30.00 € | **35.90 €** | 35.3 % | **61.9 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing modul osi Z AS003 | 92.50 € | **97.50 €** | 10.7 % | **16.7 %** | 97.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 28.00 € | **33.00 €** | 45.5 % | **71.4 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 39.50 € | **44.00 €** | 23.6 % | **37.6 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu |
| Skaner 3D Creality RaptorX | 2806.00 € | **2810.50 €** | 15.4 % | **15.5 %** | 2810.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **68.90 €** | 5.5 % | **12.7 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 47.90 € | **52.00 €** | 11.3 % | **20.8 %** | 52.16 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1013400 | 53.90 € | **57.50 €** | 5.4 % | **12.4 %** | 57.90 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 178.00 € | **181.50 €** | 19.0 % | **21.4 %** | 181.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **20.00 €** | 23.9 % | **46.6 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 29.00 € | **32.00 €** | 18.9 % | **31.2 %** | 32.37 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 20.00 € | **22.00 €** | 15.2 % | **26.8 %** | 22.04 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26050-70 | 30.50 € | **32.50 €** | 9.2 % | **16.3 %** | 32.60 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H640P | 39.50 € | **41.50 €** | 15.8 % | **21.7 %** | 41.63 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Gracioso horizontal | 202.50 € | **204.50 €** | 13.2 % | **14.3 %** | 204.89 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 81.90 € | **83.50 €** | 5.5 % | **7.6 %** | 83.51 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Sony | 125.50 € | **127.00 €** | 5.3 % | **6.6 %** | 127.17 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EB61C4DB | 144.50 € | **146.00 €** | 5.8 % | **6.8 %** | 146.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 58.00 € | **59.50 €** | 33.8 % | **37.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 35.00 € | **36.00 €** | 34.3 % | **38.1 %** | 36.01 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 13.90 € | **14.90 €** | 5.2 % | **12.8 %** | 14.94 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A35 5G FIXOP3-1262-BK | 12.00 € | **13.00 €** | 10.9 % | **20.1 %** | 13.07 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 28.50 € | **29.50 €** | 16.4 % | **20.5 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 23.50 € | **24.50 €** | 11.2 % | **15.9 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 23.50 € | **24.50 €** | 11.2 % | **15.9 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, grey ASR002 | 74.50 € | **75.50 €** | 13.2 % | **14.8 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, oran. ASR001 | 74.50 € | **75.50 €** | 13.2 % | **14.8 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| FENDA F&D A180X | 40.50 € | **41.50 €** | 5.9 % | **8.5 %** | 41.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 38.50 € | **39.50 €** | 33.7 % | **37.2 %** | 39.78 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na zvýšenie výkonu pre pedále CRP2 Moza Raci... | 21.00 € | **22.00 €** | 13.7 % | **19.1 %** | 22.29 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15C FIXOP3-1576-BK | 12.00 € | **13.00 €** | 10.9 % | **20.1 %** | 13.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **4.80 €** | 37.9 % | **69.7 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.00 € | **19.90 €** | 31.5 % | **37.7 %** | 19.97 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák PEGASUS 120 Compact | 28.90 € | **29.50 €** | 7.0 % | **9.2 %** | 29.59 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená LED vianočná guľa Solight 1V204, 10 LED, 2 ... | 3.30 € | **3.90 €** | 7.3 % | **26.8 %** | 3.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 224.90 € | **225.50 €** | 17.5 % | **17.8 %** | 225.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.00 € | **14.50 €** | 49.0 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot SCV400RD | 52.00 € | **52.50 €** | 8.9 % | **10.0 %** | 52.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.00 € | **18.50 €** | 34.1 % | **37.9 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Teplomer a vlhkomer SwitchBot Plus | 13.00 € | **13.50 €** | 19.8 % | **24.4 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.50 € | **14.00 €** | 24.2 % | **28.8 %** | 14.10 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA210 Jednorazové vrecko... | 20.00 € | **20.50 €** | 11.1 % | **13.9 %** | 20.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 18.50 € | **19.00 €** | 33.6 % | **37.2 %** | 19.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 16.50 € | **17.00 €** | 32.8 % | **36.8 %** | 17.16 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer rychlovarná konvice ZCK1275 | 39.50 € | **40.00 €** | 10.4 % | **11.8 %** | 40.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.00 € | **19.50 €** | 33.4 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.00 € | **23.50 €** | 33.9 % | **36.9 %** | 23.72 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo M300 Silent bezdrátová myš, modrá | 12.50 € | **13.00 €** | 5.8 % | **10.0 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Samsung G Tab FIXTOT-1649 | 19.00 € | **19.50 €** | 48.2 % | **52.1 %** | 19.84 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Yogurella 617 | 26.50 € | **27.00 €** | 5.2 % | **7.2 %** | 27.37 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 19.50 € | **20.00 €** | 11.1 % | **13.9 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight pištoľ spájkovacia 100W sada | 11.50 € | **12.00 €** | 13.5 % | **18.4 %** | 12.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.50 € | **47.00 €** | 34.4 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar JBL Bar 2.0 All-In-One (MK2) | 198.50 € | **198.90 €** | 8.2 % | **8.4 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.90 €** | 33.4 % | **38.0 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max AC 750V/10A, max. DC 1000V/1... | 11.50 € | **11.90 €** | 20.2 % | **24.4 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.30 € | **2.60 €** | 17.6 % | **32.9 %** | 2.68 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.80 € | **8.00 €** | 34.6 % | **38.1 %** | 8.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.70 € | **9.80 €** | 34.6 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.40 € | **2.50 €** | 44.5 % | **50.6 %** | 2.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.20 € | **4.30 €** | 50.4 % | **54.0 %** | 4.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací kábel pre lineárne osvetlenie, dĺžk... | 2.20 € | **2.30 €** | 44.2 % | **50.8 %** | 2.35 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (219)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 1136.90 € | **867.50 €** | 49.9 % | **14.4 %** | 867.84 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 1016.90 € | **765.90 €** | 45.2 % | **9.4 %** | 765.99 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 897.50 € | **747.50 €** | 29.9 % | **8.2 %** | 747.87 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 496.00 € | **387.00 €** | 38.0 % | **7.7 %** | 387.20 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 1046.50 € | **941.00 €** | 22.3 % | **10.0 %** | 941.15 € | cena podľa najlacnejšieho iného predajcu |
| BOSE Lifestyle Ultra Soundbar - biela | 999.00 € | **899.50 €** | 28.1 % | **15.3 %** | 899.90 € | cena podľa najlacnejšieho iného predajcu |
| BOSE Lifestyle Ultra Soundbar - čierna | 999.00 € | **899.50 €** | 28.1 % | **15.3 %** | 899.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 917.50 € | **821.90 €** | 19.5 % | **7.1 %** | 821.97 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 835.00 € | **744.00 €** | 22.8 % | **9.4 %** | 744.47 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 395.50 € | **314.00 €** | 43.1 % | **13.6 %** | 314.11 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 508.90 € | **429.00 €** | 35.1 % | **13.9 %** | 429.18 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 497.00 € | **424.00 €** | 25.2 % | **6.8 %** | 424.30 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 530.00 € | **461.00 €** | 23.2 % | **7.2 %** | 461.19 € | cena podľa najlacnejšieho iného predajcu |
| Apple iPhone 17 Pro 256GB Cosmic Orange | 1360.50 € | **1298.50 €** | 10.0 % | **5.0 %** | 1099.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1268.00 €** | 13.3 % | **8.0 %** | 1268.19 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Slate 11 | 330.50 € | **270.50 €** | 38.5 % | **13.4 %** | 270.70 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T25B2 | 409.50 € | **356.50 €** | 26.4 % | **10.0 %** | 356.52 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 200.50 € | **147.50 €** | 52.1 % | **11.9 %** | 147.53 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 552.00 € | **499.50 €** | 17.6 % | **6.5 %** | 499.55 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 464.50 € | **416.50 €** | 20.0 % | **7.6 %** | 416.62 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 453.00 € | **406.00 €** | 22.8 % | **10.0 %** | 406.34 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 244.50 € | **202.50 €** | 28.0 % | **6.0 %** | 202.81 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 24 GS2401 | 525.00 € | **484.00 €** | 19.5 % | **10.1 %** | 484.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 607.00 € | **566.00 €** | 14.0 % | **6.3 %** | 566.36 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 492.00 € | **454.00 €** | 16.0 % | **7.0 %** | 454.43 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT1302 (2.5K) | 443.00 € | **406.50 €** | 42.5 % | **30.8 %** | 406.69 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 16 GT156 | 443.00 € | **406.50 €** | 25.5 % | **15.1 %** | 406.69 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 266.00 € | **229.50 €** | 25.2 % | **8.0 %** | 229.69 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 535.00 € | **499.50 €** | 16.3 % | **8.6 %** | 499.76 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 310.00 € | **275.50 €** | 21.9 % | **8.3 %** | 275.70 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 310.00 € | **275.50 €** | 20.7 % | **7.3 %** | 275.70 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 262.50 € | **229.00 €** | 20.5 % | **5.2 %** | 229.10 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 262.50 € | **229.00 €** | 29.7 % | **13.1 %** | 229.10 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 504.90 € | **471.50 €** | 20.1 % | **12.1 %** | 471.53 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 398.90 € | **365.50 €** | 19.2 % | **9.2 %** | 365.87 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 366.00 € | **333.00 €** | 19.4 % | **8.6 %** | 333.18 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 358.50 € | **326.50 €** | 24.8 % | **13.7 %** | 326.69 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 310.50 € | **280.00 €** | 23.6 % | **11.4 %** | 280.44 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 429.00 € | **399.00 €** | 22.5 % | **13.9 %** | 399.10 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 334.50 € | **306.50 €** | 18.5 % | **8.6 %** | 306.69 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 312.50 € | **286.50 €** | 18.0 % | **8.2 %** | 286.60 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 233.00 € | **207.50 €** | 23.3 % | **9.8 %** | 207.82 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 233.00 € | **207.50 €** | 23.3 % | **9.8 %** | 207.82 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 230.00 € | **205.00 €** | 23.3 % | **9.9 %** | 205.25 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 235 | 468.50 € | **444.50 €** | 12.1 % | **6.4 %** | 444.54 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, zlatá) | 253.50 € | **232.00 €** | 14.9 % | **5.2 %** | 232.13 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 350.00 € | **329.50 €** | 13.6 % | **6.9 %** | 329.74 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 204.00 € | **185.00 €** | 22.0 % | **10.6 %** | 185.05 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 140.00 € | **124.50 €** | 22.5 % | **8.9 %** | 124.89 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 190.50 € | **175.50 €** | 16.7 % | **7.6 %** | 175.80 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 308.90 € | **294.00 €** | 15.5 % | **9.9 %** | 294.28 € | cena podľa najlacnejšieho iného predajcu |
| Ninja FB151EUWH Frost Vault 47l | 240.00 € | **226.00 €** | 13.2 % | **6.6 %** | 226.13 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 586.00 € | **572.50 €** | 10.6 % | **8.0 %** | 572.54 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 379.50 € | **366.00 €** | 11.6 % | **7.7 %** | 366.20 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 236.00 € | **223.50 €** | 19.4 % | **13.1 %** | 223.69 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 236.00 € | **223.50 €** | 19.4 % | **13.1 %** | 223.69 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 137.00 € | **126.50 €** | 19.6 % | **10.5 %** | 126.84 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 295.50 € | **285.50 €** | 10.0 % | **6.3 %** | 285.83 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 250.90 € | **241.50 €** | 17.6 % | **13.2 %** | 241.70 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 325.50 € | **316.50 €** | 8.1 % | **5.2 %** | 299.96 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 121.50 € | **112.50 €** | 15.0 % | **6.5 %** | 112.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 4631 | 142.50 € | **134.50 €** | 13.4 % | **7.1 %** | 134.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 328.00 € | **320.50 €** | 12.8 % | **10.3 %** | 320.59 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 238.90 € | **231.50 €** | 16.6 % | **13.0 %** | 231.70 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 206.00 € | **198.90 €** | 10.0 % | **6.2 %** | 198.96 € | cena podľa najlacnejšieho iného predajcu |
| JBL Xtreme 3 black | 194.90 € | **188.00 €** | 14.0 % | **9.9 %** | 188.26 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 479.90 € | **473.00 €** | 15.7 % | **14.0 %** | 473.20 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 64.50 € | **58.00 €** | 16.8 % | **5.1 %** | 58.42 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 213.50 € | **207.50 €** | 11.6 % | **8.4 %** | 207.60 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 145.50 € | **139.50 €** | 14.5 % | **9.7 %** | 139.83 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **160.50 €** | 9.7 % | **5.7 %** | 160.90 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.00 € | **69.50 €** | 15.1 % | **6.7 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E15 | 289.50 € | **284.00 €** | 7.2 % | **5.1 %** | 284.45 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 221.90 € | **216.50 €** | 10.7 % | **8.0 %** | 216.63 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022600 | 125.90 € | **120.50 €** | 14.7 % | **9.8 %** | 120.70 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 267.00 € | **262.00 €** | 8.0 % | **6.0 %** | 262.09 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG9201 | 121.50 € | **116.50 €** | 14.4 % | **9.7 %** | 116.82 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MY700BF0 | 126.50 € | **121.90 €** | 19.9 % | **15.6 %** | 121.91 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 149.50 € | **144.90 €** | 18.1 % | **14.4 %** | 144.91 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 247.50 € | **243.00 €** | 9.7 % | **7.7 %** | 243.03 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 215.00 € | **210.50 €** | 8.4 % | **6.2 %** | 210.58 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 159.50 € | **155.00 €** | 8.9 % | **5.8 %** | 155.46 € | cena podľa najlacnejšieho iného predajcu |
| Fujifilm INSTAX MINI 13 - Green | 91.90 € | **87.90 €** | 10.1 % | **5.3 %** | 61.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fujifilm INSTAX MINI 13 - Pink | 91.90 € | **87.90 €** | 10.1 % | **5.3 %** | 61.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **422.00 €** | 15.0 % | **13.9 %** | 422.18 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 312.00 € | **308.00 €** | 7.9 % | **6.5 %** | 308.21 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 469.50 € | **465.50 €** | 6.9 % | **6.0 %** | 465.82 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GS1331 | 206.50 € | **202.50 €** | 17.7 % | **15.5 %** | 202.83 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 247.00 € | **243.00 €** | 7.9 % | **6.2 %** | 243.48 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 166.90 € | **163.00 €** | 8.6 % | **6.1 %** | 163.31 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 46.90 € | **43.00 €** | 51.0 % | **38.5 %** | 43.40 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **345.00 €** | 15.0 % | **13.7 %** | 345.08 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT 420 Android TV box | 78.00 € | **74.50 €** | 10.0 % | **5.1 %** | 74.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GORENJE WPNEI94A1SWIFI | 410.50 € | **407.00 €** | 7.0 % | **6.1 %** | 407.37 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 229.00 € | **225.50 €** | 16.4 % | **14.6 %** | 225.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 507.50 € | **504.50 €** | 7.0 % | **6.3 %** | 504.74 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 366.00 € | **363.00 €** | 6.9 % | **6.0 %** | 363.31 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 168.50 € | **165.50 €** | 8.0 % | **6.1 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RR8589CE | 401.00 € | **398.00 €** | 6.8 % | **6.0 %** | 398.49 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 216.00 € | **213.50 €** | 7.2 % | **5.9 %** | 213.75 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 179.50 € | **177.00 €** | 12.7 % | **11.1 %** | 177.41 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 331.00 € | **328.90 €** | 12.3 % | **11.6 %** | 328.91 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 19.00 € | **16.90 €** | 48.2 % | **31.9 %** | 16.96 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SamsGTA11+/A9+ FIXTOT-1651 | 19.00 € | **16.90 €** | 25.9 % | **12.0 %** | 16.96 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 335.50 € | **333.50 €** | 6.9 % | **6.3 %** | 333.66 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 223.90 € | **222.00 €** | 16.6 % | **15.6 %** | 222.08 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Držák kuchyňských rolí ROLLY MO | 19.50 € | **18.00 €** | 32.2 % | **22.1 %** | 18.06 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 141.50 € | **140.00 €** | 12.7 % | **11.5 %** | 140.07 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom bi... | 11.50 € | **10.00 €** | 36.1 % | **18.3 %** | 10.30 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 165.50 € | **164.00 €** | 7.7 % | **6.7 %** | 164.49 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 229.50 € | **228.00 €** | 8.0 % | **7.3 %** | 228.50 € | cena podľa najlacnejšieho iného predajcu |
| JBL Bar 1000 MK2 Soundbar | 945.50 € | **944.00 €** | 5.3 % | **5.2 %** | 944.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN CHJ-1502 Filtračné čerpadlo | 17.50 € | **16.00 €** | 43.4 % | **31.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.60 €** | 30.7 % | **12.4 %** | 8.67 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 328.90 € | **327.50 €** | 6.3 % | **5.9 %** | 327.84 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFB 8469 BV EE | 345.90 € | **344.50 €** | 7.0 % | **6.6 %** | 344.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **9.80 €** | 32.3 % | **17.9 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight napájecí kabel pro lineární osvětlení, délka... | 5.70 € | **4.70 €** | 78.2 % | **47.0 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 259.90 € | **258.90 €** | 13.7 % | **13.2 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 400.90 € | **399.90 €** | 7.0 % | **6.7 %** | 400.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 402.90 € | **401.90 €** | 6.8 % | **6.6 %** | 402.00 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 551.50 € | **550.50 €** | 10.8 % | **10.6 %** | 550.66 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIO 655 BG | 178.50 € | **177.50 €** | 8.9 % | **8.3 %** | 177.72 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 158.00 € | **157.00 €** | 10.5 % | **9.8 %** | 157.32 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 329.50 € | **328.50 €** | 6.8 % | **6.5 %** | 328.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 21.50 € | **20.50 €** | 16.1 % | **10.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 20.50 € | **19.50 €** | 13.8 % | **8.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibrační plošina SKY SVP13 | 275.90 € | **275.00 €** | 7.9 % | **7.5 %** | 275.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1445.50 € | **1444.90 €** | 7.6 % | **7.5 %** | 1444.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 33.00 € | **32.50 €** | 11.3 % | **9.6 %** | 32.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 49dB | 24.50 € | **24.00 €** | 25.4 % | **22.9 %** | 24.03 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST9100 | 38.00 € | **37.50 €** | 19.4 % | **17.8 %** | 37.59 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 483.50 € | **483.00 €** | 6.9 % | **6.8 %** | 483.11 € | cena podľa najlacnejšieho iného predajcu |
| Brake Pedal Performance Upgrade Kit Moza Racing SR-P... | 34.50 € | **34.00 €** | 16.8 % | **15.1 %** | 34.27 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.50 € | **198.00 €** | 9.0 % | **8.7 %** | 198.28 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.50 € | **45.00 €** | 8.2 % | **7.0 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Svetelný merač UNI-T UT383 | 16.50 € | **16.00 €** | 11.1 % | **7.8 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.00 € | **11.50 €** | 12.7 % | **8.0 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 38.00 € | **37.50 €** | 15.5 % | **14.0 %** | 37.83 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.00 € | **33.50 €** | 10.4 % | **8.8 %** | 33.89 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.50 € | **57.00 €** | 7.9 % | **7.0 %** | 57.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT205E digitálny klešťový multimeter | 46.50 € | **46.00 €** | 7.3 % | **6.2 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 107.50 € | **107.00 €** | 11.7 % | **11.2 %** | 107.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 56.00 € | **55.50 €** | 8.0 % | **7.0 %** | 55.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 244.00 € | **243.50 €** | 14.3 % | **14.0 %** | 243.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 136.50 € | **136.00 €** | 13.9 % | **13.5 %** | 136.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny mikroohmmer Uni-T UT620C+ | 180.50 € | **180.00 €** | 6.7 % | **6.4 %** | 180.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 900.50 € | **900.00 €** | 14.4 % | **14.4 %** | 900.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 92.50 € | **92.00 €** | 7.2 % | **6.6 %** | 92.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 26.50 € | **26.00 €** | 8.4 % | **6.3 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600 | 72.00 € | **71.50 €** | 12.0 % | **11.2 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 85.50 € | **85.00 €** | 13.1 % | **12.4 %** | 85.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 61.00 € | **60.50 €** | 12.1 % | **11.2 %** | 60.89 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 53.00 € | **52.50 €** | 10.8 % | **9.7 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 34.00 € | **33.50 €** | 10.4 % | **8.8 %** | 33.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 80.50 € | **80.00 €** | 11.9 % | **11.2 %** | 80.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 168.50 € | **168.00 €** | 13.8 % | **13.5 %** | 168.39 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 192.00 € | **191.50 €** | 14.1 % | **13.8 %** | 191.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 258.50 € | **258.00 €** | 14.4 % | **14.2 %** | 258.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 151.50 € | **151.00 €** | 13.8 % | **13.4 %** | 151.39 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3224 | 25.50 € | **25.00 €** | 9.5 % | **7.3 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 110.00 € | **109.50 €** | 9.3 % | **8.8 %** | 109.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 276.50 € | **276.00 €** | 7.5 % | **7.3 %** | 276.39 € | cena podľa najlacnejšieho iného predajcu |
| HP ENVY 6520e AiO (714N9B) | 100.00 € | **99.50 €** | 7.0 % | **6.5 %** | 99.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 109.00 € | **108.50 €** | 7.4 % | **6.9 %** | 108.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 193.00 € | **192.50 €** | 33.5 % | **33.2 %** | 192.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 115.50 € | **115.00 €** | 5.8 % | **5.3 %** | 115.39 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.00 € | **22.50 €** | 8.5 % | **6.1 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 164.50 € | **164.00 €** | 30.5 % | **30.1 %** | 164.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 875.50 € | **875.00 €** | 9.6 % | **9.5 %** | 875.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 686.50 € | **686.00 €** | 5.8 % | **5.7 %** | 686.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 324.00 € | **323.50 €** | 8.8 % | **8.7 %** | 323.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 635.50 € | **635.00 €** | 5.9 % | **5.9 %** | 635.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 672.00 € | **671.50 €** | 8.6 % | **8.6 %** | 671.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 701.00 € | **700.50 €** | 9.5 % | **9.4 %** | 700.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 88.50 € | **88.00 €** | 12.9 % | **12.3 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Status STA 177159 | 11.00 € | **10.50 €** | 11.0 % | **5.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny multimeter | 14.00 € | **13.50 €** | 29.5 % | **24.9 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 22.00 € | **21.50 €** | 30.1 % | **27.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 50.00 € | **49.50 €** | 20.5 % | **19.3 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor Premium, Find My kompatibilný | 13.00 € | **12.50 €** | 28.4 % | **23.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 18.00 € | **17.50 €** | 23.1 % | **19.7 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Živica ELEGOO Standard 1.0 (polopriehľadná) | 17.00 € | **16.50 €** | 37.3 % | **33.2 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| REDMI Headphone Neo Black | 47.00 € | **46.50 €** | 9.8 % | **8.6 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022300 | 136.50 € | **136.00 €** | 10.2 % | **9.8 %** | 136.42 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 123.50 € | **123.00 €** | 6.1 % | **5.6 %** | 123.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 332.50 € | **332.00 €** | 39.1 % | **38.9 %** | 332.49 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 188.50 € | **188.00 €** | 33.2 % | **32.9 %** | 188.49 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 631.50 € | **631.00 €** | 38.6 % | **38.5 %** | 631.49 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10S | 342.50 € | **342.00 €** | 5.5 % | **5.3 %** | 342.49 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 156.90 € | **156.50 €** | 6.4 % | **6.1 %** | 156.70 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B70... | 104.90 € | **104.50 €** | 40.1 % | **39.5 %** | 104.89 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 223.90 € | **223.50 €** | 16.9 % | **16.7 %** | 223.89 € | cena podľa najlacnejšieho iného predajcu |
| Lovecký ďalekohľad Mileseey IONJET2 | 233.90 € | **233.50 €** | 36.8 % | **36.6 %** | 233.89 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell ND pre OSMO 360 – balenie po 3... | 189.90 € | **189.50 €** | 32.1 % | **31.8 %** | 189.89 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash UV360 (čierny) | 249.90 € | **249.50 €** | 39.6 % | **39.4 %** | 249.89 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V900 Gen2 | 92.90 € | **92.50 €** | 7.2 % | **6.8 %** | 92.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 184.90 € | **184.50 €** | 39.2 % | **38.9 %** | 184.90 € | cena podľa najlacnejšieho iného predajcu |
| Aroma difuzer Car Flame do auta černý 100ml, USB-C, ... | 15.90 € | **15.50 €** | 8.0 % | **5.3 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 10.90 € | **10.50 €** | 30.7 % | **25.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 43.90 € | **43.50 €** | 13.8 % | **12.8 %** | 43.89 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 41.90 € | **41.50 €** | 10.5 % | **9.5 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 357.90 € | **357.50 €** | 38.6 % | **38.4 %** | 357.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny zápisník Huion Kamvas Ink 10 EB1011 | 386.90 € | **386.50 €** | 36.5 % | **36.4 %** | 386.89 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 772.90 € | **772.50 €** | 41.6 % | **41.6 %** | 772.89 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 256.90 € | **256.50 €** | 40.8 % | **40.6 %** | 256.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **9.70 €** | 44.2 % | **41.3 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 401.00 € | **400.90 €** | 38.4 % | **38.4 %** | 400.99 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 670.00 € | **669.90 €** | 38.2 % | **38.2 %** | 669.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q6 | 562.00 € | **561.90 €** | 38.3 % | **38.3 %** | 561.99 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 492.00 € | **491.90 €** | 40.7 % | **40.7 %** | 491.99 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 535.00 € | **534.90 €** | 41.8 % | **41.7 %** | 534.99 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 277.00 € | **276.90 €** | 7.8 % | **7.8 %** | 277.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter Habotest HT127B | 28.00 € | **27.90 €** | 11.5 % | **11.1 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.00 € | **46.90 €** | 7.2 % | **7.0 %** | 46.99 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 24.00 € | **23.90 €** | 10.7 % | **10.2 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight závesné príslušenstvo pre lineárne osvetleni... | 3.90 € | **3.80 €** | 92.2 % | **87.2 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 3.90 € | **3.80 €** | 8.6 % | **5.8 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |

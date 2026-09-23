# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-23

Vstup: `premiumstore-sk_2026-09-23_13-11.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6969**
- Návrh **zvýšiť** cenu: **281** produktov
- Návrh **znížiť** cenu: **275** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6413** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **43**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **448**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (281)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Okuliare RayNeo X3 Pro AR | 1693.00 € | **2258.90 €** | 25.6 % | **67.6 %** | 2259.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 865.00 € | **1136.90 €** | 14.1 % | **49.9 %** | 1137.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 765.00 € | **1016.90 €** | 9.2 % | **45.2 %** | 1017.00 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 505.90 € | **680.90 €** | 15.0 % | **54.8 %** | 680.96 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 466.50 € | **619.50 €** | 8.1 % | **43.5 %** | 619.66 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 937.50 € | **1046.50 €** | 9.6 % | **22.3 %** | 1046.83 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 404.50 € | **508.90 €** | 7.4 % | **35.1 %** | 509.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 821.50 € | **917.50 €** | 7.0 % | **19.5 %** | 917.54 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 744.00 € | **835.00 €** | 9.4 % | **22.8 %** | 835.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 310.00 € | **395.00 €** | 12.2 % | **42.9 %** | 395.38 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 879.50 € | **954.50 €** | 6.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 424.00 € | **497.00 €** | 6.8 % | **25.2 %** | 497.35 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 461.00 € | **530.00 €** | 7.2 % | **23.2 %** | 530.38 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 339.50 € | **406.50 €** | 16.4 % | **39.4 %** | 406.66 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1267.50 € | **1329.90 €** | 8.0 % | **13.3 %** | 1330.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Slate 11 | 270.50 € | **330.00 €** | 13.4 % | **38.3 %** | 330.48 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP600IIIV | 310.00 € | **366.90 €** | 17.9 % | **39.5 %** | 367.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T25B2 | 356.50 € | **409.00 €** | 10.0 % | **26.2 %** | 409.43 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 405.50 € | **453.00 €** | 9.9 % | **22.8 %** | 453.04 € | cena podľa najlacnejšieho iného predajcu |
| Anycubic Photon Mono M7 3D printer | 371.00 € | **418.50 €** | 5.9 % | **19.4 %** | 418.88 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 499.50 € | **543.50 €** | 8.6 % | **18.2 %** | 543.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 24 GS2401 | 484.00 € | **525.00 €** | 10.1 % | **19.5 %** | 525.08 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 205.00 € | **244.50 €** | 7.3 % | **28.0 %** | 244.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT1302 (2.5K) | 406.50 € | **443.00 €** | 30.8 % | **42.5 %** | 443.08 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 16 GT156 | 406.50 € | **443.00 €** | 15.1 % | **25.5 %** | 443.08 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 322.50 € | **358.50 €** | 12.3 % | **24.8 %** | 358.88 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 275.50 € | **310.00 €** | 8.3 % | **21.9 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 275.50 € | **310.00 €** | 7.3 % | **20.7 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 283.50 € | **317.90 €** | 15.0 % | **29.0 %** | 318.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 395.00 € | **429.00 €** | 12.8 % | **22.5 %** | 429.04 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 669.50 € | **703.50 €** | 31.4 % | **38.1 %** | 703.68 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 229.00 € | **262.50 €** | 5.2 % | **20.5 %** | 262.62 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 229.00 € | **262.50 €** | 13.1 % | **29.7 %** | 262.62 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 471.50 € | **504.90 €** | 12.1 % | **20.1 %** | 504.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 365.50 € | **398.90 €** | 9.2 % | **19.2 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK MONACO ED 12x50 | 436.00 € | **468.90 €** | 8.0 % | **16.1 %** | 469.00 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov GARRETT AT Gold 5x8 | 816.00 € | **848.00 €** | 27.4 % | **32.4 %** | 848.17 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality Sermoon S1 | 2341.90 € | **2372.90 €** | 5.2 % | **6.5 %** | 2373.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 422.00 € | **452.50 €** | 13.9 % | **22.1 %** | 452.58 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 280.00 € | **310.50 €** | 11.4 % | **23.6 %** | 310.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 584.90 € | **614.50 €** | 32.6 % | **39.3 %** | 614.86 € | cena podľa najlacnejšieho iného predajcu |
| Anamorfný objektív Freewell 1,33x s bajonetom 17 mm | 208.00 € | **236.90 €** | 14.9 % | **30.9 %** | 237.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 452.00 € | **479.50 €** | 9.0 % | **15.6 %** | 479.84 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 207.50 € | **233.00 €** | 9.8 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 207.50 € | **233.00 €** | 9.8 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 240.50 € | **266.00 €** | 13.2 % | **25.2 %** | 266.21 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 205.00 € | **230.00 €** | 9.9 % | **23.3 %** | 230.50 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Joy | 150.00 € | **174.50 €** | 14.4 % | **33.1 %** | 174.79 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V066 18000mAh zavážacia loďka | 234.00 € | **258.50 €** | 14.9 % | **26.9 %** | 258.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 235 | 444.50 € | **468.50 €** | 6.4 % | **12.1 %** | 468.80 € | cena podľa najlacnejšieho iného predajcu |
| JBL Partybox Stage 320 | 418.90 € | **439.90 €** | 7.2 % | **12.6 %** | 440.00 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0007 Pozadie | 39.50 € | **59.50 €** | 15.5 % | **74.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0016 Skladacie pozadie | 39.50 € | **59.50 €** | 15.5 % | **74.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 518.50 € | **538.00 €** | 10.5 % | **14.7 %** | 538.23 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2011300 | 196.50 € | **215.90 €** | 5.2 % | **15.6 %** | 216.00 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 185.00 € | **204.00 €** | 10.6 % | **22.0 %** | 204.19 € | cena podľa najlacnejšieho iného predajcu |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 17.90 € | **35.50 €** | 15.1 % | **128.3 %** | 35.78 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 352B | 568.50 € | **586.00 €** | 10.1 % | **13.5 %** | 586.08 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 608.50 € | **626.00 €** | 14.3 % | **17.5 %** | 626.39 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1855DB 2.0 (čierne) | 133.90 € | **150.90 €** | 15.1 % | **29.7 %** | 151.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 223.50 € | **238.90 €** | 13.1 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 223.50 € | **238.90 €** | 13.1 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 294.00 € | **308.90 €** | 9.9 % | **15.5 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Voyager Slim 45W FIXCT45-3C1A-WH | 24.90 € | **39.50 €** | 11.8 % | **77.3 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285M (biela) | 48.90 € | **63.00 €** | 7.4 % | **38.4 %** | 63.16 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM017 20 kg výrobník ľadových kociek (čierny) | 189.90 € | **204.00 €** | 15.1 % | **23.6 %** | 204.33 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC Q200neo | 121.90 € | **135.90 €** | 9.3 % | **21.8 %** | 136.00 € | cena podľa najlacnejšieho iného predajcu |
| Ninja FB151EUWH Frost Vault 47l | 226.00 € | **240.00 €** | 6.6 % | **13.2 %** | 240.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285M (čierna) | 50.90 € | **64.00 €** | 15.3 % | **44.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3512B | 82.90 € | **96.00 €** | 10.0 % | **27.4 %** | 96.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 548.90 € | **560.90 €** | 5.0 % | **7.3 %** | 561.00 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 300.50 € | **312.50 €** | 13.5 % | **18.0 %** | 312.61 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality Sermoon P1 | 2898.00 € | **2909.90 €** | 5.5 % | **6.0 %** | 2910.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 216.50 € | **228.00 €** | 8.0 % | **13.7 %** | 228.50 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Hi-Fi Tuner TR04CD | 174.50 € | **185.90 €** | 10.2 % | **17.4 %** | 185.98 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DRX70 MESH + 4 RGB venti... | 52.50 € | **63.90 €** | 14.6 % | **39.5 %** | 63.96 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 66.90 € | **77.50 €** | 15.0 % | **33.3 %** | 77.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCool 2,MagSafe FIXMCO2-BK | 29.50 € | **40.00 €** | 10.2 % | **49.4 %** | 40.17 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 213.50 € | **223.90 €** | 11.2 % | **16.6 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 198.90 € | **209.00 €** | 6.2 % | **11.6 %** | 209.22 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM005 15 kg výrobník ľadu (čierny) | 135.90 € | **145.50 €** | 15.1 % | **23.3 %** | 145.71 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 455.00 € | **464.50 €** | 17.5 % | **20.0 %** | 464.68 € | cena podľa najlacnejšieho iného predajcu |
| Motorcycle Intercom EJEAS MS20 | 138.00 € | **147.00 €** | 5.7 % | **12.6 %** | 147.01 € | cena podľa najlacnejšieho iného predajcu |
| Vodný chladič CPU Darkflash DV360S (čierny) | 98.50 € | **107.50 €** | 15.1 % | **25.6 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 341.00 € | **350.00 €** | 10.7 % | **13.6 %** | 350.20 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 241.50 € | **250.50 €** | 13.2 % | **17.4 %** | 250.86 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 121.50 € | **130.50 €** | 20.8 % | **29.8 %** | 130.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 4000K... | 6.10 € | **15.00 €** | 74.0 % | **327.9 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 6000K... | 6.10 € | **15.00 €** | 74.0 % | **327.9 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Ručné LED svietidlo NEEWER RGB s trubicovým dizajnom | 87.90 € | **96.00 €** | 10.1 % | **20.3 %** | 96.13 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 484.00 € | **492.00 €** | 14.1 % | **16.0 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 4631 | 134.50 € | **142.50 €** | 7.1 % | **13.4 %** | 142.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 341.00 € | **348.90 €** | 12.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 17.90 € | **25.50 €** | 70.2 % | **142.5 %** | 25.70 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-WW, 50 m, teplá biel... | 17.90 € | **25.50 €** | 25.0 % | **78.1 %** | 25.70 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 231.50 € | **238.90 €** | 13.0 % | **16.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Teleobjektív Freewell 3x 17 mm | 189.90 € | **196.90 €** | 23.6 % | **28.1 %** | 197.00 € | cena podľa najlacnejšieho iného predajcu |
| WHIRLPOOL TDLRB 65242BS EU/N | 361.90 € | **368.50 €** | 5.0 % | **7.0 %** | 368.90 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120P | 174.50 € | **181.00 €** | 5.1 % | **9.0 %** | 181.38 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 123.00 € | **129.50 €** | 5.9 % | **11.5 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3511B | 63.50 € | **69.50 €** | 10.4 % | **20.8 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell série V2 VND/CPL II 3-7 s... | 142.00 € | **148.00 €** | 22.3 % | **27.4 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 142.00 € | **148.00 €** | 26.1 % | **31.4 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 142.00 € | **148.00 €** | 28.6 % | **34.0 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| GODOX AD-S85S Softbox | 83.00 € | **88.90 €** | 15.1 % | **23.2 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 215.90 € | **221.50 €** | 5.0 % | **7.7 %** | 221.70 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 262.00 € | **267.50 €** | 6.0 % | **8.2 %** | 267.56 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM011 Výrobník ľadu, 1,2 l, 12 kg (čierny) | 74.50 € | **80.00 €** | 15.1 % | **23.6 %** | 80.25 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 161.00 € | **166.50 €** | 6.0 % | **9.7 %** | 166.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022600 | 120.50 € | **125.90 €** | 9.8 % | **14.7 %** | 126.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT600 | 82.00 € | **87.00 €** | 8.1 % | **14.7 %** | 87.07 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune Beam 2 TWS slúchadlá, biele | 86.90 € | **91.90 €** | 5.2 % | **11.2 %** | 92.00 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune Beam 2 tyrkys | 86.90 € | **91.90 €** | 5.2 % | **11.2 %** | 92.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 70.50 € | **75.50 €** | 6.7 % | **14.2 %** | 75.69 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 120.50 € | **125.50 €** | 14.4 % | **19.2 %** | 125.85 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG9201 | 116.50 € | **121.50 €** | 9.7 % | **14.4 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón Freewell Genius Rig pre iPhone 17 ... | 142.00 € | **146.90 €** | 21.9 % | **26.2 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 326.50 € | **331.00 €** | 10.8 % | **12.3 %** | 331.01 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 105.50 € | **110.00 €** | 5.4 % | **9.9 %** | 110.04 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 243.00 € | **247.50 €** | 7.7 % | **9.7 %** | 247.54 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2105 Mikrovlnná trouba s grilem | 104.50 € | **109.00 €** | 5.3 % | **9.9 %** | 109.10 € | cena podľa najlacnejšieho iného predajcu |
| Krbový ventilátor Kaminer 26206 5-lopatkový | 29.00 € | **33.50 €** | 10.6 % | **27.7 %** | 33.64 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.00 € | **159.50 €** | 5.8 % | **8.9 %** | 159.70 € | cena podľa najlacnejšieho iného predajcu |
| FIXED s displejem, 4x FIXCG140D-4C1A-BK | 49.50 € | **54.00 €** | 10.8 % | **20.9 %** | 54.40 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 572.50 € | **577.00 €** | 8.0 % | **8.9 %** | 577.40 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový merač Habotest HT208D | 43.50 € | **48.00 €** | 5.4 % | **16.3 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 8.20 € | **12.50 €** | 51.2 % | **130.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 186.50 € | **190.50 €** | 14.3 % | **16.7 %** | 190.58 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 58.50 € | **62.50 €** | 5.9 % | **13.1 %** | 62.58 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 75.90 € | **79.90 €** | 12.9 % | **18.9 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 465.50 € | **469.50 €** | 6.0 % | **6.9 %** | 469.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 207.50 € | **211.50 €** | 8.4 % | **10.5 %** | 211.60 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GS1331 | 202.50 € | **206.50 €** | 15.5 % | **17.7 %** | 206.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 15.50 € | **19.50 €** | 12.3 % | **41.3 %** | 19.73 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 210.50 € | **214.50 €** | 6.2 % | **8.2 %** | 214.74 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 243.00 € | **247.00 €** | 6.2 % | **7.9 %** | 247.30 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 375.50 € | **379.50 €** | 10.4 % | **11.6 %** | 379.85 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC S100neo AC/DC | 47.00 € | **51.00 €** | 25.0 % | **35.7 %** | 51.39 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 141.50 € | **145.50 €** | 11.3 % | **14.5 %** | 145.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 45.50 € | **49.50 €** | 15.3 % | **25.4 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 308.00 € | **312.00 €** | 6.5 % | **7.9 %** | 312.40 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 133.00 € | **137.00 €** | 16.2 % | **19.6 %** | 137.49 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN CUP-807 | 26.00 € | **30.00 €** | 19.3 % | **37.6 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro Xiaomi R Pad 2 FIXTOT-1199 | 14.90 € | **18.90 €** | 12.8 % | **43.1 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 163.00 € | **166.90 €** | 6.1 % | **8.6 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14P+5G FIXOP3-1433-BK | 11.90 € | **15.50 €** | 10.1 % | **43.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-303A | 65.90 € | **69.50 €** | 26.8 % | **33.7 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-1200-12 UPS 1200W 12V čist... | 204.00 € | **207.50 €** | 3.3 % | **5.0 %** | 205.32 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 110G | 322.00 € | **325.50 €** | 7.0 % | **8.1 %** | 325.72 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE WPNEI94A1SWIFI | 407.00 € | **410.50 €** | 6.1 % | **7.0 %** | 410.80 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 548.00 € | **551.50 €** | 10.1 % | **10.8 %** | 551.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 17.00 € | **20.50 €** | 10.3 % | **33.0 %** | 20.88 € | cena podľa najlacnejšieho iného predajcu |
| IMOU N110W 10-kanálový IP videorekordér | 79.50 € | **83.00 €** | 15.0 % | **20.1 %** | 83.39 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 43.00 € | **46.50 €** | 38.5 % | **49.7 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 324.90 € | **328.00 €** | 11.1 % | **12.2 %** | 328.16 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 75.90 € | **79.00 €** | 18.4 % | **23.3 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 75.90 € | **79.00 €** | 18.4 % | **23.3 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 288.50 € | **291.50 €** | 5.2 % | **6.3 %** | 291.63 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus XiaRed 17 4G, FIXOP3-1728-BK | 12.00 € | **15.00 €** | 10.9 % | **38.6 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 165.50 € | **168.50 €** | 6.1 % | **8.0 %** | 168.79 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 363.00 € | **366.00 €** | 6.0 % | **6.9 %** | 366.30 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 120.50 € | **123.50 €** | 16.3 % | **19.2 %** | 123.80 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 504.50 € | **507.50 €** | 6.3 % | **7.0 %** | 507.80 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RR8589CE | 398.00 € | **401.00 €** | 6.0 % | **6.8 %** | 401.40 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 47.00 € | **49.90 €** | 15.3 % | **22.4 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák na telefon FIXCRT-M14-BK | 12.90 € | **15.50 €** | 11.5 % | **33.9 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 21.00 € | **23.50 €** | 15.4 % | **29.1 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 177.00 € | **179.50 €** | 11.1 % | **12.7 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 6000K... | 4.70 € | **6.90 €** | 74.5 % | **156.2 %** | 6.99 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 17.00 € | **19.00 €** | 32.6 % | **48.2 %** | 19.04 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SamsGTA11+/A9+ FIXTOT-1651 | 17.00 € | **19.00 €** | 12.6 % | **25.9 %** | 19.04 € | cena podľa najlacnejšieho iného predajcu |
| Filtr CPL Freewell do DJI Osmo Action 5 Pro | 17.00 € | **19.00 €** | 9.8 % | **22.7 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO4B25EA | 96.90 € | **98.90 €** | 10.4 % | **12.6 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (strieborné) | 33.50 € | **35.50 €** | 15.7 % | **22.6 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 30.00 € | **32.00 €** | 6.2 % | **13.3 %** | 32.23 € | cena podľa najlacnejšieho iného predajcu |
| Solight tryska proti krúteniu pre fén Dyson Superson... | 11.50 € | **13.50 €** | 21.3 % | **42.4 %** | 13.75 € | cena podľa najlacnejšieho iného predajcu |
| Selfie svetlo Telesin s magnetickým držiakom telefónu | 18.50 € | **20.50 €** | 22.9 % | **36.2 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 333.50 € | **335.50 €** | 6.3 % | **6.9 %** | 335.90 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 6.8 % | **14.1 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 49 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 42.3 % | **51.9 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 55 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 105.8 % | **119.8 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 17.8 % | **25.8 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok s vekom Freewell 82 mm pre Real Lock... | 28.00 € | **29.90 €** | 114.4 % | **128.9 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SGS26+ FIXFLM2-1705-PI | 20.00 € | **21.90 €** | 13.4 % | **24.2 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-RD | 20.00 € | **21.90 €** | 13.4 % | **24.2 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Sams GTA11/A9 FIXTOT-1650 | 17.00 € | **18.90 €** | 12.6 % | **25.2 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 897.00 € | **898.90 €** | 29.8 % | **30.1 %** | 899.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 9W, 1260lm, 6000K,... | 3.70 € | **5.40 €** | 71.9 % | **150.9 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Coppertinto KI280G10 | 29.90 € | **31.50 €** | 6.2 % | **11.9 %** | 31.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový diaľkový ovládač Heiman HM1RC-W Interlinked | 2.10 € | **3.70 €** | 16.1 % | **104.6 %** | 3.79 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-500-12 UPS 500W 12V čistý ... | 96.00 € | **97.50 €** | 3.6 % | **5.2 %** | 94.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjačka SkyRC iMax B6AC V2 | 54.00 € | **55.50 €** | 18.8 % | **22.1 %** | 55.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 10.50 € | **12.00 €** | 15.4 % | **31.8 %** | 12.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight nabíjačka USB-C, 90W, PD fast charger | 15.00 € | **16.50 €** | 29.6 % | **42.6 %** | 16.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 10.50 € | **12.00 €** | 23.4 % | **41.0 %** | 12.34 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter Habotest HT113 | 12.00 € | **13.50 €** | 21.5 % | **36.7 %** | 13.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 9.00 € | **10.50 €** | 12.7 % | **31.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 138.50 € | **139.90 €** | 8.0 % | **9.1 %** | 139.95 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFB 8469 BV EE | 344.50 € | **345.90 €** | 6.6 % | **7.0 %** | 346.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 327.50 € | **328.90 €** | 5.9 % | **6.3 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Magnetic Wall | 11.90 € | **13.00 €** | 12.9 % | **23.3 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Schody pre podstielky Catlink Scooper | 82.90 € | **84.00 €** | 15.1 % | **16.6 %** | 84.42 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 20.00 € | **21.00 €** | 14.0 % | **19.7 %** | 21.06 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND1000 Freewell pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 15.4 % | **21.5 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND4 Freewell pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 21.0 % | **27.4 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND8 Freewell pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 22.0 % | **28.5 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Voľný filter ND32 pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 21.1 % | **27.5 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Voľný filter ND4/PL pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 15.3 % | **21.4 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ND16 filter Freewell pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 20.3 % | **26.7 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB6000 | 37.90 € | **38.90 €** | 11.1 % | **14.0 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.50 € | **329.50 €** | 6.5 % | **6.8 %** | 329.60 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAZ5000 Radiomagnetofon | 97.90 € | **98.90 €** | 10.1 % | **11.2 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Set PowerClean M+náhr. zdarma | 20.00 € | **21.00 €** | 7.6 % | **13.0 %** | 21.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 24.00 € | **25.00 €** | 60.5 % | **67.1 %** | 25.20 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy OFFICE M40 Vertical | 14.00 € | **15.00 €** | 12.1 % | **20.1 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 156.50 € | **157.50 €** | 6.1 % | **6.8 %** | 157.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 14.00 € | **15.00 €** | 5.4 % | **12.9 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VNT200 (čierne) | 26.50 € | **27.50 €** | 12.9 % | **17.2 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 14.50 € | **15.50 €** | 33.2 % | **42.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 13.50 € | **14.50 €** | 11.1 % | **19.3 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND32/PL | 20.50 € | **21.50 €** | 14.6 % | **20.2 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPhone 13 FIXBLM-723-BP | 17.50 € | **18.50 €** | 11.9 % | **18.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Pouzdro SGTabA11 FIXRTC-1650-BK | 33.50 € | **34.50 €** | 15.4 % | **18.8 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250W (black) | 48.00 € | **48.90 €** | 32.7 % | **35.2 %** | 48.98 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 18.90 € | **19.50 €** | 5.7 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 35.90 € | **36.50 €** | 61.9 % | **64.6 %** | 36.80 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 18.90 € | **19.50 €** | 11.6 % | **15.1 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ľadových kociek Euhomy IM001, 1,2 l, 12 kg ... | 59.90 € | **60.50 €** | 15.1 % | **16.3 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtové tlačidlo pre zvončeky 1L74 - 1L77... | 6.20 € | **6.80 €** | 23.2 % | **35.2 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Topic Tab LenIdeaTab11 FIXTOT-1677 | 14.90 € | **15.50 €** | 12.8 % | **17.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Classic 100 Easy | 20.50 € | **21.00 €** | 11.5 % | **14.2 %** | 21.01 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 346.00 € | **346.50 €** | 14.1 % | **14.3 %** | 346.53 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXPUM-1600-TR | 26.00 € | **26.50 €** | 84.8 % | **88.3 %** | 26.54 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Black | 18.00 € | **18.50 €** | 18.7 % | **22.0 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Blue | 18.00 € | **18.50 €** | 18.7 % | **22.0 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Red | 18.00 € | **18.50 €** | 18.7 % | **22.0 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C White | 18.00 € | **18.50 €** | 18.7 % | **22.0 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 310 USB-C Blue | 16.50 € | **17.00 €** | 8.8 % | **12.1 %** | 17.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **11.50 €** | 26.0 % | **31.7 %** | 11.59 € | cena podľa najlacnejšieho iného predajcu |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 59.00 € | **59.50 €** | 18.4 % | **19.4 %** | 59.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 21.00 € | **21.50 €** | 71.9 % | **76.0 %** | 21.60 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 137.00 € | **137.50 €** | 35.3 % | **35.8 %** | 137.60 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.00 € | **198.50 €** | 8.7 % | **9.0 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C460 8MPx, vonkajšia, IP, WiFi, ... | 112.50 € | **113.00 €** | 5.3 % | **5.7 %** | 113.12 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.00 € | **212.50 €** | 9.6 % | **9.9 %** | 212.63 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 350.50 € | **351.00 €** | 6.8 % | **7.0 %** | 351.15 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A35 5G FIXOP3-1262-BK | 12.00 € | **12.50 €** | 10.9 % | **15.5 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 10 Loop s LCD FIXZENL-10-BK | 19.00 € | **19.50 €** | 10.3 % | **13.2 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 smartwatch Ultra (gold) | 38.50 € | **39.00 €** | 20.6 % | **22.2 %** | 39.31 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.50 € | **39.00 €** | 20.6 % | **22.2 %** | 39.31 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny decibelomer Habotest HT622B USB A/C | 27.00 € | **27.50 €** | 15.6 % | **17.7 %** | 27.83 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 199.00 € | **199.50 €** | 51.0 % | **51.4 %** | 199.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s meteostanicou | 20.50 € | **21.00 €** | 12.7 % | **15.4 %** | 21.36 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.00 € | **24.50 €** | 13.3 % | **15.7 %** | 24.87 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 19.50 € | **20.00 €** | 11.1 % | **13.9 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.00 € | **14.50 €** | 11.7 % | **15.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.00 € | **21.50 €** | 15.4 % | **18.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 483.00 € | **483.50 €** | 6.8 % | **6.9 %** | 483.90 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMK38HU0B | 248.00 € | **248.50 €** | 5.0 % | **5.2 %** | 248.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV A17 Pro Max (oranžový) | 119.50 € | **120.00 €** | 15.1 % | **15.6 %** | 120.50 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, strieborná... | 212.50 € | **212.90 €** | 37.2 % | **37.4 %** | 212.91 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.50 € | **212.90 €** | 37.5 % | **37.7 %** | 212.91 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 212.50 € | **212.90 €** | 37.2 % | **37.4 %** | 212.91 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, strieborná ... | 212.50 € | **212.90 €** | 37.2 % | **37.4 %** | 212.91 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, zlatá) | 212.50 € | **212.90 €** | 37.2 % | **37.4 %** | 212.91 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 212.50 € | **212.90 €** | 37.2 % | **37.4 %** | 212.91 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 126.50 € | **126.90 €** | 24.4 % | **24.8 %** | 126.91 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Coffee Drip 1394, černý | 34.50 € | **34.90 €** | 9.4 % | **10.6 %** | 34.96 € | cena podľa najlacnejšieho iného predajcu |
| Výrobok X.A.2 | 45.50 € | **45.90 €** | 7.9 % | **8.9 %** | 46.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.70 € | **9.90 €** | 34.1 % | **36.9 %** | 9.99 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 262.90 € | **263.00 €** | 22.9 % | **23.0 %** | 263.02 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9270p bezdrátová klávesnice černá | 36.90 € | **37.00 €** | 7.5 % | **7.8 %** | 37.01 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 20.90 € | **21.00 €** | 8.9 % | **9.4 %** | 21.01 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.90 € | **19.00 €** | 22.0 % | **22.7 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 48.90 € | **49.00 €** | 56.3 % | **56.6 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.90 € | **52.00 €** | 6.0 % | **6.2 %** | 52.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 3,8 W, 806lm, 270... | 4.60 € | **4.70 €** | 92.8 % | **97.0 %** | 4.76 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V50-W, 3 m, 20 LED, 3 × ... | 2.60 € | **2.70 €** | 134.9 % | **143.9 %** | 2.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.40 € | **9.50 €** | 32.4 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.70 € | **6.80 €** | 38.3 % | **40.3 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo BonePro černá | 67.90 € | **68.00 €** | 10.0 % | **10.2 %** | 68.42 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (275)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Apple iPhone 17 256GB Sage | 1174.90 € | **1121.50 €** | 10.0 % | **5.0 %** | 895.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Apple iPhone 17 256GB Mist Blue | 1174.90 € | **1121.50 €** | 10.0 % | **5.0 %** | 905.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung OLED QE55S85H | 1096.90 € | **1046.90 €** | 10.0 % | **5.0 %** | 758.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LOKITHOR JA30000 PRO 46,08 Wh 3000 A štartér | 200.00 € | **160.50 €** | 30.9 % | **5.0 %** | 131.51 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor JMGO PicoPlay+ | 409.00 € | **378.90 €** | 21.8 % | **12.9 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE XR Beast | 627.00 € | **597.50 €** | 15.8 % | **10.4 %** | 597.84 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell ND pre OSMO 360 – balenie po 3... | 189.50 € | **161.00 €** | 31.8 % | **12.0 %** | 161.12 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal iSteady MT3 | 306.90 € | **280.00 €** | 44.4 % | **31.8 %** | 280.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight kúpeľňový radiátor 500W | 173.90 € | **149.00 €** | 40.2 % | **20.2 %** | 149.30 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LK10 s väčším formátom | 291.00 € | **268.50 €** | 19.1 % | **9.9 %** | 268.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V860III TTL pre Sony | 218.90 € | **199.90 €** | 15.0 % | **5.0 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AnyCubic Wash & Cure 3 Plus - Print cleaning and dry... | 169.50 € | **151.00 €** | 19.3 % | **6.3 %** | 151.03 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 799.50 € | **781.50 €** | 14.3 % | **11.7 %** | 781.87 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS40 – multifunkčný štartér do auta | 94.00 € | **77.50 €** | 43.9 % | **18.6 %** | 77.69 € | cena podľa najlacnejšieho iného predajcu |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 314.50 € | **299.90 €** | 10.2 % | **5.0 %** | 295.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nástěnné keramické topidlo Airo Kaminer 26388 s Wi-F... | 74.00 € | **59.50 €** | 31.2 % | **5.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mlynček na kávu HiBREW G7 | 118.00 € | **105.00 €** | 21.8 % | **8.4 %** | 105.16 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF NSPanel Pro 120 Smart Control Panel Matter Wi... | 146.50 € | **133.90 €** | 15.0 % | **5.1 %** | 110.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool MBNA910X | 255.90 € | **244.50 €** | 10.0 % | **5.1 %** | 233.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO VRR84314VB | 242.90 € | **231.90 €** | 10.2 % | **5.2 %** | 174.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool FFS 7469 W EE | 375.50 € | **365.00 €** | 10.0 % | **6.9 %** | 365.40 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 298.90 € | **288.90 €** | 34.6 % | **30.1 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostic Scanner OBD2 Ancel AD530 | 74.00 € | **64.00 €** | 45.7 % | **26.0 %** | 64.18 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 94.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GL.iNet Beryl AX Wi-Fi 6 router | 114.50 € | **106.00 €** | 13.6 % | **5.2 %** | 106.38 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.90 €** | 34.5 % | **9.7 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| 18-kanálový IP videorekordér IMOU N118W | 97.50 € | **89.50 €** | 14.8 % | **5.4 %** | 78.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Drôtové slúchadlá do uší TRUTHEAR Zero (červené) | 72.00 € | **64.00 €** | 45.9 % | **29.7 %** | 64.30 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady XE Kit | 72.50 € | **64.50 €** | 38.2 % | **23.0 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 601.50 € | **593.50 €** | 10.1 % | **8.6 %** | 593.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 127.50 € | **120.00 €** | 13.2 % | **6.5 %** | 120.06 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.90 € | **68.50 €** | 16.5 % | **5.2 %** | 68.60 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 11000 | 160.50 € | **153.50 €** | 10.1 % | **5.3 %** | 149.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy PILOT XR Radar | 145.90 € | **139.00 €** | 10.3 % | **5.1 %** | 131.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zvukový mixér a zvuková karta AMC2 Neo | 45.50 € | **38.90 €** | 22.9 % | **5.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 104.50 € | **98.00 €** | 32.5 % | **24.3 %** | 98.02 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A PRO pre CarPlay/An... | 46.00 € | **39.50 €** | 23.1 % | **5.7 %** | 39.77 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Nova (modré) | 167.00 € | **160.50 €** | 31.4 % | **26.3 %** | 160.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 119.00 € | **112.90 €** | 14.0 % | **8.2 %** | 113.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 73.50 € | **67.50 €** | 15.1 % | **5.7 %** | 62.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 59.00 € | **53.00 €** | 23.8 % | **11.2 %** | 53.19 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR TWIN - Black/Silver | 63.50 € | **58.00 €** | 30.8 % | **19.4 %** | 58.07 € | cena podľa najlacnejšieho iného predajcu |
| 4-zónový zavlažovací ovládač RainPoint ITV447 | 62.50 € | **57.50 €** | 40.5 % | **29.3 %** | 57.51 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 88.50 € | **83.50 €** | 14.0 % | **7.6 %** | 83.51 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-604B | 39.50 € | **34.50 €** | 41.0 % | **23.1 %** | 34.56 € | cena podľa najlacnejšieho iného predajcu |
| PROSCENIC P11 Ultra – bezdrôtový vertikálny vysávač | 96.90 € | **91.90 €** | 21.5 % | **15.2 %** | 91.99 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 34.50 € | **29.50 €** | 33.1 % | **13.8 %** | 29.67 € | cena podľa najlacnejšieho iného predajcu |
| HDD 3.5" 4TB 256MB Seagate SKYHAWK pro kamerové syst... | 221.50 € | **216.90 €** | 7.3 % | **5.0 %** | 185.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ROWENTA RH 6545 WH | 97.50 € | **93.00 €** | 10.1 % | **5.0 %** | 86.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vibračný tester Uni-T UT311A | 257.00 € | **252.50 €** | 13.7 % | **11.7 %** | 252.80 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 231.00 € | **226.50 €** | 10.0 % | **7.9 %** | 226.80 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZJE4800 | 79.50 € | **75.50 €** | 10.6 % | **5.0 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 29.00 € | **25.00 €** | 22.2 % | **5.3 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Schodíky pre Catlink BayMax Litter Box | 51.90 € | **47.90 €** | 15.1 % | **6.3 %** | 47.97 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 348.50 € | **344.50 €** | 13.7 % | **12.4 %** | 344.81 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 107.00 € | **103.00 €** | 21.2 % | **16.6 %** | 103.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 50W, 4600lm, 5000K, IP65 | 20.50 € | **16.50 €** | 42.9 % | **15.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Mini projektor Phillips N-140 s rozlíšením 720p (biely) | 106.50 € | **102.50 €** | 19.3 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Uni-T UT210C Mini digitálny klešťový multimeter | 40.50 € | **36.90 €** | 15.5 % | **5.2 %** | 35.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy PILOT Q7 2K | 76.50 € | **72.90 €** | 10.3 % | **5.1 %** | 68.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech 6750mAh 14.8V 60C 4S1P 14# XT90 Battery | 83.50 € | **80.00 €** | 26.1 % | **20.8 %** | 80.28 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **15.50 €** | 37.2 % | **11.9 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **16.90 €** | 46.6 % | **23.9 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 110.00 € | **106.90 €** | 8.2 % | **5.1 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné stropné svietidlo CW Yeelight Meteor C300. | 33.90 € | **30.90 €** | 15.4 % | **5.2 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung VG-SCFC32BWBXC | 61.90 € | **58.90 €** | 10.5 % | **5.1 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tesla MediaBox XG500 | 62.50 € | **59.50 €** | 10.8 % | **5.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 | 69.90 € | **67.00 €** | 13.4 % | **8.7 %** | 67.39 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 Wi-Fi | 69.90 € | **67.00 €** | 13.4 % | **8.7 %** | 67.39 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.40 € | **6.80 €** | 62.6 % | **17.6 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Philips Mikrosystem TAM3205M2 | 89.50 € | **86.90 €** | 13.6 % | **10.3 %** | 86.91 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer AX53 WiFi Router | 56.00 € | **53.50 €** | 10.1 % | **5.1 %** | 50.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Battery Tester Ancel BA201 8-16V DC | 56.50 € | **54.00 €** | 21.3 % | **16.0 %** | 54.06 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.00 € | **36.50 €** | 23.5 % | **15.6 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne) | 39.00 € | **36.50 €** | 23.5 % | **15.6 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač žalúzií Avatto CS20-EU-B WiFi Touch | 20.50 € | **18.00 €** | 34.8 % | **18.4 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Náhradný filter pre napájadlo Catlink | 27.00 € | **24.90 €** | 14.8 % | **5.9 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 8.90 € | **6.80 €** | 43.3 % | **9.5 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight PIR senzor nástenný, vonkajší, čierny | 8.80 € | **6.80 €** | 44.2 % | **11.5 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Watch Pixel 2 Rose Gold | 54.50 € | **52.50 €** | 10.0 % | **6.0 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy VEGA X Lite | 44.50 € | **42.50 €** | 10.9 % | **5.9 %** | 37.06 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.50 € | **68.50 €** | 13.8 % | **10.6 %** | 68.78 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MVC72HGA | 31.50 € | **29.50 €** | 16.0 % | **8.6 %** | 29.80 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26050-70 | 32.50 € | **30.50 €** | 16.3 % | **9.2 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H640P | 41.50 € | **39.50 €** | 21.7 % | **15.8 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RACING RS061 predĺženie stĺpika riadenia | 120.50 € | **118.50 €** | 15.1 % | **13.2 %** | 118.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **7.80 €** | 33.2 % | **8.2 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| AMICA DI 6412 CB | 269.50 € | **267.90 €** | 5.7 % | **5.0 %** | 262.64 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PS5 Minecraft | 31.50 € | **29.90 €** | 10.8 % | **5.2 %** | 25.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **7.80 €** | 34.3 % | **12.6 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **7.80 €** | 34.3 % | **12.6 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E3K1-3ST | 40.00 € | **38.50 €** | 10.1 % | **6.0 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Black+Decker BXSH1500E | 32.50 € | **31.00 €** | 17.8 % | **12.4 %** | 31.01 € | cena podľa najlacnejšieho iného predajcu |
| Tefal B817S255 | 31.50 € | **30.00 €** | 10.7 % | **5.4 %** | 30.09 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 127.50 € | **126.00 €** | 44.1 % | **42.4 %** | 126.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 12.00 € | **10.50 €** | 31.1 % | **14.7 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 16.00 € | **14.50 €** | 50.2 % | **36.1 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesná maska so svetelnou terapiou ANLAN 01-AGZMZ | 45.00 € | **43.50 €** | 46.4 % | **41.5 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.50 € | **58.00 €** | 37.3 % | **33.8 %** | 58.43 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 225.50 € | **224.00 €** | 6.1 % | **5.4 %** | 224.50 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy PILOT S10 Rear Cam | 35.90 € | **34.50 €** | 10.1 % | **5.8 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal FV2C40E0 | 24.90 € | **23.50 €** | 11.3 % | **5.0 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný termostat WiFi Avatto WT598 | 28.90 € | **27.50 €** | 23.5 % | **17.5 %** | 27.58 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo EasyPhone XS Blue | 30.00 € | **28.90 €** | 10.2 % | **6.1 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Svietidlo Superfire X60-T, 1500lm, USB | 24.00 € | **22.90 €** | 36.4 % | **30.1 %** | 22.98 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 143.00 € | **141.90 €** | 25.0 % | **24.0 %** | 141.92 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Alpha T2, HD DVB-T2 rekordér | 21.50 € | **20.50 €** | 10.6 % | **5.5 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Philips TAR1509 Přenosné rádio | 18.90 € | **17.90 €** | 12.0 % | **6.1 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo Omega S3, HD DVB-T2 rekordér | 24.50 € | **23.50 €** | 11.4 % | **6.9 %** | 21.77 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 64 GB | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 11.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zelmer ZHB4561S | 22.90 € | **21.90 €** | 11.6 % | **6.7 %** | 21.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Náhlavný popruh BOBOVR M3 Pro pre Oculus Quest 3 / Q... | 43.00 € | **42.00 €** | 22.3 % | **19.4 %** | 42.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **43.00 €** | 37.6 % | **34.5 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **10.90 €** | 15.6 % | **5.9 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 36.00 € | **35.00 €** | 38.1 % | **34.3 %** | 35.13 € | cena podľa najlacnejšieho iného predajcu |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 99.50 € | **98.50 €** | 23.8 % | **22.5 %** | 98.68 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 40.00 € | **39.00 €** | 10.1 % | **7.3 %** | 39.24 € | cena podľa najlacnejšieho iného predajcu |
| Kempingová lampa Superfire T26-S – 500 lm, solárna, ... | 12.00 € | **11.00 €** | 25.4 % | **14.9 %** | 11.25 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 35.50 € | **34.50 €** | 31.3 % | **27.6 %** | 34.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.50 € | **38.50 €** | 37.2 % | **33.7 %** | 38.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **20.50 €** | 22.5 % | **16.8 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 24.50 € | **23.50 €** | 15.9 % | **11.2 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.50 € | **23.50 €** | 15.9 % | **11.2 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 204.50 € | **203.50 €** | 14.3 % | **13.8 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 208.50 € | **207.50 €** | 16.6 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SGA17 4G/5G FIXOP3-1700-BK | 17.50 € | **16.50 €** | 61.7 % | **52.4 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 85.00 € | **84.00 €** | 14.9 % | **13.5 %** | 84.42 € | cena podľa najlacnejšieho iného predajcu |
| SONY sluchátka MDR-ZX110B, černá | 13.90 € | **13.00 €** | 12.9 % | **5.6 %** | 10.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY sluchátka MDR-ZX110P, růžová | 13.90 € | **13.00 €** | 12.9 % | **5.6 %** | 10.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ROWENTA ZR003901 | 10.50 € | **9.60 €** | 15.0 % | **5.2 %** | 8.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 4.70 € | **3.80 €** | 42.0 % | **14.8 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.90 € | **25.00 €** | 54.3 % | **48.9 %** | 25.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.60 € | **2.80 €** | 41.4 % | **10.0 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 20W, 1700lm, 4000K, IP6... | 6.50 € | **5.80 €** | 44.0 % | **28.5 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Program ochrany DJI Care Refresh pre Osmo Mobile 8P ... | 10.50 € | **9.80 €** | 12.9 % | **5.4 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK TL-WA855RE Wireless N Extender | 20.50 € | **19.90 €** | 10.4 % | **7.1 %** | 15.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Joystick PXN-2113 PRO Ovládanie letu PC | 32.50 € | **31.90 €** | 18.2 % | **16.0 %** | 31.97 € | cena podľa najlacnejšieho iného predajcu |
| PXN-F16 Flight Joystick for PC | 32.50 € | **31.90 €** | 10.9 % | **8.9 %** | 31.97 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND64/PL | 20.50 € | **19.90 €** | 14.1 % | **10.7 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Herné reproduktory Onikuma L2 | 13.00 € | **12.50 €** | 21.1 % | **16.4 %** | 12.59 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter so svietidlom Habotest HT118C, ... | 30.50 € | **30.00 €** | 43.4 % | **41.1 %** | 30.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **46.50 €** | 35.9 % | **34.4 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **14.00 €** | 54.3 % | **49.0 %** | 14.16 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Standand Resin (Black) | 12.00 € | **11.50 €** | 26.9 % | **21.6 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Standard Resin (Grey) | 12.00 € | **11.50 €** | 31.7 % | **26.2 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI SAG-55 PLUS inteligentná teplovzdušná pištoľ | 63.50 € | **63.00 €** | 7.6 % | **6.8 %** | 63.25 € | cena podľa najlacnejšieho iného predajcu |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 11.50 € | **11.00 €** | 14.4 % | **9.5 %** | 11.29 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 125.00 € | **124.50 €** | 9.4 % | **8.9 %** | 124.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.50 € | **14.00 €** | 18.4 % | **14.3 %** | 14.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight GSM diaľkovo ovládaná zásuvka | 58.50 € | **58.00 €** | 32.6 % | **31.5 %** | 58.37 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.50 € | **17.00 €** | 12.8 % | **9.6 %** | 17.38 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.50 € | **17.00 €** | 12.6 % | **9.4 %** | 17.38 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-1C-86W WiFi Matter smart wall switch (1-ch... | 17.50 € | **17.00 €** | 19.7 % | **16.2 %** | 17.38 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic Siena 180 Easy | 27.00 € | **26.50 €** | 11.6 % | **9.5 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 41.00 € | **40.50 €** | 17.7 % | **16.3 %** | 40.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.00 € | **470.50 €** | 8.8 % | **8.7 %** | 470.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 899.50 € | **899.00 €** | 14.3 % | **14.3 %** | 899.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 275.00 € | **274.50 €** | 6.9 % | **6.7 %** | 274.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Podlahový mop Picobello M Micro | 20.00 € | **19.50 €** | 14.0 % | **11.2 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný mini spínač ZigBee SONOFF ZBMINIR2 | 10.50 € | **10.00 €** | 11.2 % | **5.9 %** | 10.39 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 728.50 € | **728.00 €** | 9.1 % | **9.1 %** | 728.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 874.00 € | **873.50 €** | 9.4 % | **9.4 %** | 873.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 685.00 € | **684.50 €** | 5.6 % | **5.5 %** | 684.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 322.50 € | **322.00 €** | 8.3 % | **8.2 %** | 322.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 634.00 € | **633.50 €** | 5.7 % | **5.6 %** | 633.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 670.50 € | **670.00 €** | 8.4 % | **8.3 %** | 670.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 699.50 € | **699.00 €** | 9.3 % | **9.2 %** | 699.39 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 13.00 € | **12.50 €** | 24.8 % | **20.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS9 – multifunkčný štartér do auta | 87.50 € | **87.00 €** | 46.7 % | **45.8 %** | 87.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 14.50 € | **14.00 €** | 21.3 % | **17.1 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 357.50 € | **357.00 €** | 41.1 % | **40.9 %** | 357.49 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 291.50 € | **291.00 €** | 18.0 % | **17.8 %** | 291.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada na selfie Neewer SRP18C s priemerom 17 cm a okr... | 165.50 € | **165.00 €** | 39.4 % | **39.0 %** | 165.49 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN W AS | 79.50 € | **79.00 €** | 39.7 % | **38.8 %** | 79.49 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 114.50 € | **114.00 €** | 24.8 % | **24.3 %** | 114.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **12.00 €** | 23.5 % | **18.5 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Kovový LED svietnik Solight 1V280, 40 cm, 5 LED, čierny | 23.50 € | **23.00 €** | 37.2 % | **34.2 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 21.50 € | **21.00 €** | 49.4 % | **45.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 27.50 € | **27.00 €** | 33.4 % | **31.0 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 17.50 € | **17.00 €** | 14.6 % | **11.4 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač Niceboy ION Charles i4 - white | 161.50 € | **161.00 €** | 6.9 % | **6.6 %** | 161.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 25.50 € | **25.00 €** | 25.5 % | **23.0 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 20.50 € | **20.00 €** | 31.0 % | **27.8 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar DJ-390 BT Bluetooth speaker | 112.50 € | **112.00 €** | 8.3 % | **7.8 %** | 112.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 34.50 € | **34.00 €** | 16.6 % | **14.9 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 258.50 € | **258.00 €** | 7.5 % | **7.3 %** | 258.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 97.50 € | **97.00 €** | 18.3 % | **17.7 %** | 97.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.50 € | **16.00 €** | 36.1 % | **31.9 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 37.50 € | **37.00 €** | 16.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| G3Ferrari G10152 horkovzdušná trouba | 145.50 € | **145.00 €** | 8.1 % | **7.7 %** | 145.50 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar GOLD microSDXC 256GB | 158.90 € | **158.50 €** | 18.6 % | **18.3 %** | 158.63 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 165.90 € | **165.50 €** | 39.8 % | **39.5 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 118.90 € | **118.50 €** | 32.1 % | **31.7 %** | 118.89 € | cena podľa najlacnejšieho iného predajcu |
| Sada ND filtrov FREEWELL pre DJI Mavic 4 Pro Standar... | 79.90 € | **79.50 €** | 28.3 % | **27.6 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| TESLA PrimeSound HQ-995X | 175.90 € | **175.50 €** | 6.1 % | **5.8 %** | 175.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.70 € | **6.30 €** | 28.8 % | **21.1 %** | 6.36 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Havit E529BT (čierne) | 11.90 € | **11.50 €** | 36.8 % | **32.2 %** | 11.64 € | cena podľa najlacnejšieho iného predajcu |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 11.90 € | **11.50 €** | 10.1 % | **6.4 %** | 11.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.90 € | **14.50 €** | 25.8 % | **22.4 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 10.90 € | **10.50 €** | 38.9 % | **33.8 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 12.90 € | **12.50 €** | 46.1 % | **41.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 13.90 € | **13.50 €** | 38.0 % | **34.0 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 10.90 € | **10.50 €** | 60.0 % | **54.1 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.50 €** | 9.5 % | **5.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.50 €** | 29.9 % | **25.2 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.10 €** | 53.0 % | **35.5 %** | 3.14 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2459BS | 51.90 € | **51.50 €** | 10.7 % | **9.9 %** | 51.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.90 € | **16.50 €** | 24.5 % | **21.5 %** | 16.77 € | cena podľa najlacnejšieho iného predajcu |
| Skládací koloběžka NILS Extreme HM2009 šedá | 46.90 € | **46.50 €** | 7.0 % | **6.1 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 50.90 € | **50.50 €** | 29.2 % | **28.1 %** | 50.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93509 Pánev 24 cm | 25.90 € | **25.50 €** | 9.0 % | **7.4 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 38.90 € | **38.50 €** | 9.1 % | **8.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 32.90 € | **32.50 €** | 26.3 % | **24.8 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V283, 53 cm, ... | 34.90 € | **34.50 €** | 40.6 % | **39.0 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 18.90 € | **18.50 €** | 17.8 % | **15.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 45.90 € | **45.50 €** | 47.7 % | **46.4 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G20065 Parmino Struhadlo | 26.90 € | **26.50 €** | 8.0 % | **6.4 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 27.90 € | **27.50 €** | 37.3 % | **35.3 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 18.90 € | **18.50 €** | 20.8 % | **18.2 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 38.90 € | **38.50 €** | 11.5 % | **10.3 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 20 Loop s LCD FIXZENL-20-BK | 23.90 € | **23.50 €** | 10.8 % | **9.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 18.90 € | **18.50 €** | 18.5 % | **16.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 21.90 € | **21.50 €** | 28.3 % | **25.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 23.90 € | **23.50 €** | 10.2 % | **8.4 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.90 € | **55.50 €** | 36.5 % | **35.5 %** | 55.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q6 | 561.90 € | **561.50 €** | 38.3 % | **38.2 %** | 561.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.80 €** | 38.1 % | **34.6 %** | 7.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.30 € | **5.10 €** | 35.9 % | **30.8 %** | 5.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 401.00 € | **400.90 €** | 32.3 % | **32.2 %** | 400.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 390.00 € | **389.90 €** | 38.7 % | **38.6 %** | 390.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 275.00 € | **274.90 €** | 7.5 % | **7.4 %** | 275.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **19.90 €** | 44.9 % | **44.2 %** | 19.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.80 € | **9.70 €** | 36.0 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 51.00 € | **50.90 €** | 40.1 % | **39.9 %** | 50.99 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93501 Hrnec s pokličkou 20 cm | 35.00 € | **34.90 €** | 7.1 % | **6.8 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 23.00 € | **22.90 €** | 16.5 % | **16.0 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 20.00 € | **19.90 €** | 36.3 % | **35.6 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 17.00 € | **16.90 €** | 14.8 % | **14.1 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2000300 CR Kuchyňská váha | 27.00 € | **26.90 €** | 8.5 % | **8.1 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 25.00 € | **24.90 €** | 6.4 % | **5.9 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia IP kamera s LED světlom | 31.00 € | **30.90 €** | 16.6 % | **16.3 %** | 31.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.20 € | **4.10 €** | 33.4 % | **30.2 %** | 4.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.80 € | **1.70 €** | 29.5 % | **22.3 %** | 1.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 2.90 € | **2.80 €** | 42.9 % | **38.0 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.10 € | **9.00 €** | 24.3 % | **23.0 %** | 9.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.00 € | **10.90 €** | 18.1 % | **17.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.00 € | **10.90 €** | 18.1 % | **17.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO skleněná poklice 18 | 15.00 € | **14.90 €** | 6.3 % | **5.6 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 16.00 € | **15.90 €** | 30.6 % | **29.8 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.70 € | **9.60 €** | 37.2 % | **35.7 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.80 € | **5.70 €** | 157.7 % | **153.2 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 5W, 500lm, 4... | 9.70 € | **9.60 €** | 35.0 % | **33.6 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight ventilátor do kúpeľne | 9.90 € | **9.80 €** | 42.5 % | **41.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 87.00 € | **86.90 €** | 15.3 % | **15.2 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 215.00 € | **214.90 €** | 40.9 % | **40.8 %** | 214.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 75.00 € | **74.90 €** | 42.9 % | **42.7 %** | 74.99 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 125.00 € | **124.90 €** | 39.8 % | **39.7 %** | 124.99 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 67.00 € | **66.90 €** | 30.6 % | **30.4 %** | 66.99 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-775S2 Päťzónový (štvorcový) sklenený ply... | 182.00 € | **181.90 €** | 45.1 % | **45.0 %** | 181.99 € | cena podľa najlacnejšieho iného predajcu |

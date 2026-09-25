# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-25

Vstup: `premiumstore-sk_2026-09-25_20-05.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7078**
- Návrh **zvýšiť** cenu: **79** produktov
- Návrh **znížiť** cenu: **184** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6815** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **11**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **524**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (79)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Detektor kovov Garrett AT Pro-International | 703.90 € | **809.50 €** | 30.6 % | **50.2 %** | 809.60 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Puli AX 5G NR | 559.50 € | **656.90 €** | 23.1 % | **44.5 %** | 657.00 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 192.90 € | **266.50 €** | 47424.0 % | **65556.6 %** | 266.59 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 278.50 € | **328.50 €** | 38.0 % | **62.7 %** | 328.89 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 356.00 € | **400.50 €** | 7.8 % | **21.3 %** | 400.63 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 904.90 € | **935.50 €** | 15.0 % | **18.9 %** | 935.69 € | cena podľa najlacnejšieho iného predajcu |
| Súprava StreetGrip Telesin GoPro Hero 9-13 s klietkou | 62.50 € | **88.90 €** | 15.0 % | **63.6 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí MPS-5500H, 5.5kW/48V, reguláto... | 537.50 € | **560.90 €** | 0.7 % | **5.0 %** | 537.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Puškohled LEVENHUK Halo NVR50 s nočným videním | 395.50 € | **418.90 €** | 8.0 % | **14.4 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 160 Sol | 30.00 € | **50.00 €** | 10.4 % | **83.9 %** | 50.31 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie GoPro Hero 13/12/11/10/9/8/MAX | 20.50 € | **38.50 €** | 14.7 % | **115.4 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1059.50 € | **1075.00 €** | 15.0 % | **16.7 %** | 1075.23 € | cena podľa najlacnejšieho iného predajcu |
| MOES TV02 Termostatická hlavica s LCD displejom a te... | 26.90 € | **42.00 €** | 15.8 % | **80.8 %** | 42.12 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované liatinové činky HEX 2 × 7 kg REBEL ACTIVE... | 39.50 € | **53.50 €** | 20.5 % | **63.3 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Samsung EVO Plus microSD 2021, 64 GB ... | 21.50 € | **35.00 €** | 38.3 % | **125.1 %** | 35.41 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné puzdro Telesin Dome Port pre GoPro Hero 9 /... | 34.00 € | **47.00 €** | 14.2 % | **57.9 %** | 47.37 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R20BT 2.0 (čierne) | 50.00 € | **61.90 €** | 17.1 % | **45.0 %** | 61.92 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický nabíjací adaptér Telesin s krytom pre GoP... | 17.00 € | **28.00 €** | 14.5 % | **88.6 %** | 28.33 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 31.00 € | **41.00 €** | 5.3 % | **39.2 %** | 41.41 € | cena podľa najlacnejšieho iného predajcu |
| Smartmi Evaporative Humidifier 3 Lite | 107.00 € | **116.90 €** | 34.5 % | **47.0 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodný chladič CPU Darkflash DV360S (čierny) | 98.50 € | **107.50 €** | 15.1 % | **25.6 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Panasonic sluchátka RZ-B120W | 36.50 € | **45.00 €** | 11.5 % | **37.5 %** | 45.07 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné ručné LED trubicové svietidlo NEEWER | 51.50 € | **59.50 €** | 15.0 % | **32.9 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady Mobile+ | 72.00 € | **79.50 €** | 31.9 % | **45.6 %** | 79.73 € | cena podľa najlacnejšieho iného predajcu |
| Přenosná nabíječka IMMAX EV/PHEV AC 5m /32A, 400V, C... | 312.00 € | **317.50 €** | 3.3 % | **5.1 %** | 250.51 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 11.90 € | **16.50 €** | 16.7 % | **61.8 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní předfiltr GARNI PF 45T | 18.50 € | **23.00 €** | 13.6 % | **41.2 %** | 23.23 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 31.00 € | **35.50 €** | 5.3 % | **20.6 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 22.00 € | **26.00 €** | 17.8 % | **39.3 %** | 26.35 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 55.50 € | **59.00 €** | 5.8 % | **12.4 %** | 59.01 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.00 € | **24.50 €** | 14.3 % | **33.3 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 16.00 € | **19.50 €** | 15.9 % | **41.3 %** | 19.65 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (čierny), 1 kg | 19.50 € | **23.00 €** | 15.2 % | **35.9 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 29.90 € | **32.50 €** | 5.6 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight lokátor na bicykel, Find My kompatibilný | 11.90 € | **14.50 €** | 12.4 % | **36.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| N50 eliminátor zápachu pre Petkit PURA MAX 2/PRO lit... | 11.00 € | **13.50 €** | 13.3 % | **39.1 %** | 13.87 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 55.50 € | **58.00 €** | 5.8 % | **10.5 %** | 58.50 € | cena podľa najlacnejšieho iného predajcu |
| Skládací koloběžka NILS Extreme HM2009 šedá | 45.90 € | **48.00 €** | 5.0 % | **9.8 %** | 48.36 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.90 € | **30.90 €** | 11.3 % | **19.0 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26050-70 | 30.50 € | **32.50 €** | 9.2 % | **16.3 %** | 32.60 € | cena podľa najlacnejšieho iného predajcu |
| Mobilná dokovacia stanica VITURE Pro-MbDk-Blk | 157.50 € | **159.50 €** | 14.9 % | **16.4 %** | 159.79 € | cena podľa najlacnejšieho iného predajcu |
| Záťažová vesta HMS PREMIUM KTO16 | 89.00 € | **90.90 €** | 3.2 % | **5.4 %** | 66.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rojeco 2L automatické krmítko pre mačky verzia s tla... | 52.90 € | **54.50 €** | 15.1 % | **18.6 %** | 54.79 € | cena podľa najlacnejšieho iného predajcu |
| Závažie na členky a zápästia 2 × 2 kg, REBEL ACTIVE ... | 11.90 € | **13.50 €** | 18.6 % | **34.5 %** | 13.73 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232 W | 112.90 € | **114.50 €** | 5.3 % | **6.8 %** | 114.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1442.90 € | **1444.50 €** | 7.4 % | **7.5 %** | 1444.81 € | cena podľa najlacnejšieho iného predajcu |
| Sada pro trénink boxu DBX BUSHIDO DBX Kids60.2 červená | 57.00 € | **58.50 €** | 2.9 % | **5.6 %** | 29.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chrániče holení DBX BUSHIDO SP-10v6 M | 61.00 € | **62.50 €** | 2.8 % | **5.3 %** | 39.16 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Russell Hobbs 25570-56/RH | 26.50 € | **28.00 €** | 8.9 % | **15.0 %** | 28.11 € | cena podľa najlacnejšieho iného predajcu |
| Liatinové nastaviteľné činky 15 kg, REBEL ACTIVE RBA... | 41.50 € | **42.90 €** | 4.2 % | **7.7 %** | 43.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 257.50 € | **258.90 €** | 7.4 % | **7.9 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu |
| Schody pre podstielky Catlink Scooper | 82.90 € | **84.00 €** | 15.1 % | **16.6 %** | 84.42 € | cena podľa najlacnejšieho iného predajcu |
| Boxovacie vrece DBX BUSHIDO Kids80 80cm/30cm 15-20 k... | 51.90 € | **52.90 €** | 3.3 % | **5.3 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Boxovacie vrece DBX BUSHIDO Kids80 80cm/30cm 15-20 k... | 51.90 € | **52.90 €** | 3.3 % | **5.3 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Boxerské rukavice DBX BUSHIDO B-2v18 14 oz | 46.00 € | **47.00 €** | 2.9 % | **5.2 %** | 36.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Boxovacia hruška DBX BUSHIDO SK30 čierno-biela 30 kg | 69.90 € | **70.90 €** | 3.6 % | **5.1 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Sušák na prádlo Rolfix 150 Trip | 18.00 € | **19.00 €** | 7.7 % | **13.7 %** | 19.04 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV2C40E0 | 23.50 € | **24.50 €** | 5.0 % | **9.5 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofon Maono PD200x (biely) | 49.00 € | **50.00 €** | 14.5 % | **16.8 %** | 50.38 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačné slnečné okuliare Rebel Active RBA-7100-PC | 10.50 € | **11.50 €** | 15.7 % | **26.7 %** | 11.88 € | cena podľa najlacnejšieho iného predajcu |
| MMA rukavice DBX BUSHIDO ARM-2014a L/XL | 26.00 € | **26.90 €** | 2.8 % | **6.4 %** | 17.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MMA Rukavice DBX BUSHIDO E1v9-B M | 37.00 € | **37.90 €** | 2.8 % | **5.3 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 9.80 € | **10.50 €** | 17.0 % | **25.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 26.90 € | **27.50 €** | 19.6 % | **22.3 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 10.90 € | **11.50 €** | 29.0 % | **36.1 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Boxerské rukavice DBX BUSHIDO B-2v17 14 oz | 36.50 € | **37.00 €** | 3.7 % | **5.1 %** | 23.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerbanka EMOS AlphaQ3,10 000 mAh, 22,5 W, čierna | 14.00 € | **14.50 €** | 2.9 % | **6.6 %** | 11.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chránič zubů DBX BUSHIDO MG-2 černý s tesáky | 12.00 € | **12.50 €** | 1.4 % | **5.6 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ardes AR4B01B | 50.00 € | **50.50 €** | 5.2 % | **6.2 %** | 50.54 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 52.00 € | **52.50 €** | 17.1 % | **18.2 %** | 52.54 € | cena podľa najlacnejšieho iného predajcu |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 14.00 € | **14.50 €** | 11.0 % | **15.0 %** | 14.59 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 73.00 € | **73.50 €** | 27.3 % | **28.2 %** | 73.59 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka NILS Extreme HM1302 černá | 42.50 € | **43.00 €** | 5.7 % | **6.9 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 61.00 € | **61.50 €** | 14.1 % | **15.1 %** | 61.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny infračervený teplomer -50° +380°C | 12.50 € | **13.00 €** | 25.8 % | **30.8 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| BALDRTHERM B0596WT2H2P-V1 – meteorologická stanica n... | 14.00 € | **14.50 €** | 12.5 % | **16.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Mixed Cat Litter 7L Petkit | 11.50 € | **12.00 €** | 10.6 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gelové rukavice DBX BUSHIDO DBD-G-2 červené S/M | 15.50 € | **15.90 €** | 3.3 % | **6.0 %** | 8.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lapa na kopy DBX BUSHIDO P1 | 20.50 € | **20.90 €** | 3.8 % | **5.8 %** | 17.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |

## Návrh znížiť cenu (184)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 6567.50 € | **6258.50 €** | 15.0 % | **9.6 %** | 6258.76 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 1136.90 € | **867.00 €** | 49.9 % | **14.3 %** | 867.20 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 1016.90 € | **760.00 €** | 45.2 % | **8.5 %** | 760.45 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 618.50 € | **466.50 €** | 43.3 % | **8.1 %** | 466.70 € | cena podľa najlacnejšieho iného predajcu |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 924.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE V25i Pro II | 394.50 € | **306.00 €** | 42.8 % | **10.7 %** | 306.20 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír Creality Falcon A1 Pro 20 W | 865.90 € | **800.00 €** | 15.0 % | **6.2 %** | 800.14 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 464.50 € | **406.90 €** | 20.0 % | **5.1 %** | 404.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 453.00 € | **396.00 €** | 22.8 % | **7.3 %** | 396.34 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 136.90 € | **89.50 €** | 113.9 % | **39.9 %** | 89.75 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 1046.50 € | **999.90 €** | 22.3 % | **16.9 %** | 999.93 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 24 GS2401 | 525.00 € | **480.00 €** | 19.5 % | **9.2 %** | 480.17 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 543.50 € | **499.50 €** | 18.2 % | **8.6 %** | 499.53 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT1302 (2.5K) | 442.50 € | **402.50 €** | 42.4 % | **29.5 %** | 402.70 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 16 GT156 | 442.50 € | **402.50 €** | 25.3 % | **14.0 %** | 402.70 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 358.50 € | **318.50 €** | 24.8 % | **10.9 %** | 318.70 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 835.00 € | **795.50 €** | 22.8 % | **16.9 %** | 795.82 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 244.50 € | **205.00 €** | 28.0 % | **7.3 %** | 205.39 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T25B2 | 415.00 € | **376.00 €** | 28.0 % | **16.0 %** | 376.38 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 429.00 € | **391.00 €** | 22.5 % | **11.6 %** | 391.19 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 819.90 € | **784.00 €** | 15.0 % | **10.0 %** | 784.20 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 452.50 € | **418.00 €** | 22.1 % | **12.8 %** | 418.20 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 530.00 € | **496.50 €** | 23.2 % | **15.4 %** | 496.67 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 504.90 € | **471.50 €** | 20.1 % | **12.1 %** | 471.58 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 398.90 € | **365.50 €** | 19.2 % | **9.2 %** | 365.87 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 478.50 € | **448.00 €** | 15.4 % | **8.0 %** | 448.19 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 235 | 468.50 € | **444.50 €** | 12.1 % | **6.4 %** | 444.54 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 626.00 € | **604.50 €** | 17.5 % | **13.5 %** | 604.70 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 148.00 € | **128.50 €** | 24.2 % | **7.8 %** | 128.52 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 537.00 € | **518.50 €** | 14.4 % | **10.5 %** | 518.69 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 350.00 € | **331.50 €** | 13.6 % | **7.6 %** | 331.84 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 129.50 € | **114.00 €** | 33.3 % | **17.4 %** | 114.43 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Sony | 141.90 € | **126.50 €** | 19.1 % | **6.2 %** | 126.85 € | cena podľa najlacnejšieho iného predajcu |
| Ninja FB151EUWH Frost Vault 47l | 240.00 € | **226.00 €** | 13.2 % | **6.6 %** | 226.13 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 593.50 € | **580.50 €** | 8.6 % | **6.2 %** | 580.73 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 118.00 € | **105.00 €** | 33.6 % | **18.8 %** | 105.31 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 105.50 € | **93.00 €** | 33.3 % | **17.5 %** | 93.06 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1317.50 €** | 13.3 % | **12.2 %** | 1317.62 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21L3C-L 2.0 Mpix venkovní dome IP kamera s ... | 103.00 € | **91.00 €** | 33.0 % | **17.5 %** | 91.09 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 492.00 € | **480.00 €** | 16.0 % | **13.1 %** | 480.18 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 312.50 € | **300.50 €** | 18.0 % | **13.5 %** | 300.70 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **337.00 €** | 15.0 % | **11.1 %** | 337.20 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 228.00 € | **216.50 €** | 13.7 % | **8.0 %** | 216.63 € | cena podľa najlacnejšieho iného predajcu |
| Beko HSM14540 | 279.50 € | **268.00 €** | 17.4 % | **12.6 %** | 268.13 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 223.90 € | **213.50 €** | 16.6 % | **11.2 %** | 213.52 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK351+ 4 ventilátory (bi... | 54.00 € | **43.90 €** | 43.5 % | **16.7 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 209.00 € | **198.90 €** | 11.6 % | **6.2 %** | 198.96 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 59.50 € | **50.00 €** | 51.0 % | **26.9 %** | 50.15 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 310.50 € | **301.00 €** | 23.6 % | **19.8 %** | 301.25 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 230.00 € | **221.50 €** | 23.3 % | **18.7 %** | 221.63 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 233.00 € | **224.50 €** | 23.3 % | **18.8 %** | 224.64 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 233.00 € | **224.50 €** | 23.3 % | **18.8 %** | 224.64 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 331.00 € | **322.50 €** | 12.3 % | **9.4 %** | 322.69 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 4631 | 142.50 € | **134.50 €** | 13.4 % | **7.1 %** | 134.67 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 137.90 € | **130.00 €** | 27928.5 % | **26322.8 %** | 130.49 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 551.50 € | **544.00 €** | 10.8 % | **9.3 %** | 544.19 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 203.90 € | **196.50 €** | 21.9 % | **17.5 %** | 196.55 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 40.50 € | **33.50 €** | 38.5 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Samsung Crystal UHD UE43U8072H | 270.00 € | **264.50 €** | 11.0 % | **8.7 %** | 264.54 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **161.00 €** | 9.7 % | **6.0 %** | 161.37 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022600 | 125.90 € | **120.50 €** | 14.7 % | **9.8 %** | 120.70 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 488.90 € | **483.50 €** | 11.1 % | **9.9 %** | 483.83 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 267.00 € | **262.00 €** | 8.0 % | **6.0 %** | 262.09 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 42.90 € | **37.90 €** | 37.4 % | **21.4 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 21.50 € | **16.50 €** | 41.3 % | **8.4 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG9201 | 121.50 € | **116.50 €** | 14.4 % | **9.7 %** | 116.82 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 33.90 € | **29.00 €** | 54.1 % | **31.8 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 917.50 € | **912.90 €** | 19.5 % | **18.9 %** | 912.95 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 247.50 € | **243.00 €** | 9.7 % | **7.7 %** | 243.03 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 577.00 € | **572.50 €** | 8.9 % | **8.0 %** | 572.54 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 20 | 233.50 € | **229.00 €** | 9.4 % | **7.2 %** | 229.13 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 159.50 € | **155.00 €** | 8.9 % | **5.8 %** | 155.46 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND-PL 4/8/16/32 Sunnylife pre DJI Min... | 27.50 € | **23.00 €** | 37.2 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tefal IB5100E0 | 94.00 € | **89.90 €** | 10.2 % | **5.4 %** | 86.61 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné kreslo KRUGER & MATZ GX-150, čierno-červené | 91.50 € | **87.50 €** | 10.0 % | **5.2 %** | 84.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné kreslo KRUGER & MATZ GX-150, čierno-modré | 91.50 € | **87.50 €** | 10.0 % | **5.2 %** | 84.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 327.00 € | **323.00 €** | 11.8 % | **10.4 %** | 323.15 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 379.50 € | **375.50 €** | 11.6 % | **10.4 %** | 375.68 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 266.00 € | **262.00 €** | 25.2 % | **23.3 %** | 262.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 310.00 € | **306.00 €** | 21.9 % | **20.3 %** | 306.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 310.00 € | **306.00 €** | 20.7 % | **19.2 %** | 306.19 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 137.00 € | **133.00 €** | 19.6 % | **16.2 %** | 133.20 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 145.50 € | **141.50 €** | 14.5 % | **11.3 %** | 141.70 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 190.50 € | **186.50 €** | 16.7 % | **14.3 %** | 186.70 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GS1331 | 206.50 € | **202.50 €** | 17.7 % | **15.5 %** | 202.70 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 312.00 € | **308.00 €** | 7.9 % | **6.5 %** | 308.21 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 469.50 € | **465.50 €** | 6.9 % | **6.0 %** | 465.82 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2459BS | 55.00 € | **51.00 €** | 17.4 % | **8.8 %** | 51.48 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 247.00 € | **243.00 €** | 7.9 % | **6.2 %** | 243.48 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 238.90 € | **235.00 €** | 16.6 % | **14.7 %** | 235.10 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 166.90 € | **163.00 €** | 8.6 % | **6.1 %** | 163.31 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 508.90 € | **505.00 €** | 35.1 % | **34.1 %** | 505.08 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 308.90 € | **305.00 €** | 15.5 % | **14.1 %** | 305.11 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **557.00 €** | 7.3 % | **6.6 %** | 557.25 € | cena podľa najlacnejšieho iného predajcu |
| Herné kreslo KRUGER & MATZ GX-150, bielo-ružové | 91.50 € | **87.90 €** | 13.4 % | **9.0 %** | 87.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 214.00 € | **210.50 €** | 7.9 % | **6.2 %** | 210.58 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 211.00 € | **207.50 €** | 10.3 % | **8.4 %** | 207.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 325.50 € | **322.00 €** | 8.1 % | **7.0 %** | 322.12 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Slate 11 | 330.00 € | **326.50 €** | 38.3 % | **36.9 %** | 326.69 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 262.00 € | **258.50 €** | 20.3 % | **18.7 %** | 258.70 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 262.00 € | **258.50 €** | 29.4 % | **27.7 %** | 258.70 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 136.00 € | **132.50 €** | 11.2 % | **8.4 %** | 132.78 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE WPNEI94A1SWIFI | 410.50 € | **407.00 €** | 7.0 % | **6.1 %** | 407.37 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 46.50 € | **43.00 €** | 49.7 % | **38.5 %** | 43.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **16.90 €** | 46.6 % | **23.9 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HT652538 | 59.50 € | **56.50 €** | 11.5 % | **5.9 %** | 52.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 82.50 € | **79.50 €** | 21.1 % | **16.7 %** | 79.56 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno Classic M BLACK | 42.50 € | **39.50 €** | 28.9 % | **19.8 %** | 39.58 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 250.00 € | **247.00 €** | 17.2 % | **15.8 %** | 247.10 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta XD6220F0 | 40.00 € | **37.00 €** | 14.1 % | **5.5 %** | 37.22 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 507.50 € | **504.50 €** | 7.0 % | **6.3 %** | 504.74 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 120.50 € | **117.50 €** | 24391.9 % | **23782.1 %** | 117.79 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 366.00 € | **363.00 €** | 6.9 % | **6.0 %** | 363.31 € | cena podľa najlacnejšieho iného predajcu |
| Chrómované nastaviteľné činky 30 kg, REBEL ACTIVE RB... | 91.50 € | **88.90 €** | 14.1 % | **10.9 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu |
| ETA Aquabelo 1264 90000, černý/bílý | 45.50 € | **43.00 €** | 13.6 % | **7.4 %** | 43.11 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 352.50 € | **350.00 €** | 35.7 % | **34.8 %** | 350.20 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 179.50 € | **177.00 €** | 12.7 % | **11.1 %** | 177.41 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (biely) | 40.00 € | **37.90 €** | 15.1 % | **9.1 %** | 37.95 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 335.50 € | **333.50 €** | 6.9 % | **6.3 %** | 333.66 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 226.50 € | **224.50 €** | 7.9 % | **6.9 %** | 224.67 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 23.50 € | **21.50 €** | 30.0 % | **18.9 %** | 21.71 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 273.00 € | **271.00 €** | 19.9 % | **19.0 %** | 271.40 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT300A+ | 16.50 € | **14.90 €** | 16.3 % | **5.1 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Anycubic TPU (priehľadný červený), 1 kg | 21.00 € | **19.50 €** | 14.3 % | **6.1 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal FV6812E0 | 55.00 € | **53.50 €** | 13.6 % | **10.5 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla ZigBee Avatto ZTS02-EU-B... | 12.50 € | **11.00 €** | 23.5 % | **8.7 %** | 11.41 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **211.00 €** | 9.9 % | **9.1 %** | 211.49 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač / zastrihávač domácich zvierat Oneisall ... | 23.00 € | **21.50 €** | 22.7 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Drevový filament Sunlu (orech) | 19.90 € | **18.50 €** | 14.9 % | **6.8 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 328.90 € | **327.50 €** | 6.3 % | **5.9 %** | 327.84 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFB 8469 BV EE | 345.90 € | **344.50 €** | 7.0 % | **6.6 %** | 344.89 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 129.50 € | **128.50 €** | 11.5 % | **10.6 %** | 128.51 € | cena podľa najlacnejšieho iného predajcu |
| PIR senzor (pohybové čidlo) ORNO OR-CR-276/W Ultra p... | 21.00 € | **20.00 €** | 26.0 % | **20.0 %** | 20.10 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 254.90 € | **253.90 €** | 11.5 % | **11.1 %** | 254.00 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 209.50 € | **208.50 €** | 17.1 % | **16.6 %** | 208.70 € | cena podľa najlacnejšieho iného predajcu |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/B | 17.00 € | **16.00 €** | 16.0 % | **9.2 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 329.50 € | **328.50 €** | 6.8 % | **6.5 %** | 328.84 € | cena podľa najlacnejšieho iného predajcu |
| Smart Visual Ear-Clean Rod Bebird R1 black | 15.50 € | **14.50 €** | 14.6 % | **7.2 %** | 14.85 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 24.50 € | **23.50 €** | 15.9 % | **11.2 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| PIR senzor (pohybové čidlo) ORNO OR-CR-275/W | 17.00 € | **16.00 €** | 16.4 % | **9.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal B5561053 | 13.90 € | **13.00 €** | 12.6 % | **5.3 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **11.00 €** | 15.6 % | **6.8 %** | 11.13 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 48.90 € | **48.00 €** | 35.2 % | **32.7 %** | 48.41 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic PETG (čierny), 1 kg | 10.50 € | **9.80 €** | 13.8 % | **6.2 %** | 9.83 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune110 white | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 7.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gymnastický míč HMS YB02N 75 cm šedo-stříbrný | 13.50 € | **12.90 €** | 10.5 % | **5.6 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje R619EAW6 | 483.50 € | **483.00 €** | 6.9 % | **6.8 %** | 483.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight detektor dymu s WIFI pripojením | 18.00 € | **17.50 €** | 37.4 % | **33.6 %** | 17.62 € | cena podľa najlacnejšieho iného predajcu |
| Beko PowerIntense BDFN26560XP | 541.00 € | **540.50 €** | 6.7 % | **6.6 %** | 540.63 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 95.50 € | **95.00 €** | 24.2 % | **23.5 %** | 95.14 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.50 € | **35.00 €** | 14.5 % | **12.9 %** | 35.14 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.50 € | **198.00 €** | 9.0 % | **8.7 %** | 198.28 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah XTREME bezúdržbový akumu... | 117.00 € | **116.50 €** | 26322.8 % | **26209.8 %** | 116.79 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Black | 18.50 € | **18.00 €** | 22.0 % | **18.7 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Blue | 18.50 € | **18.00 €** | 22.0 % | **18.7 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Red | 18.50 € | **18.00 €** | 22.0 % | **18.7 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C White | 18.50 € | **18.00 €** | 22.0 % | **18.7 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 28.50 € | **28.00 €** | 48.1 % | **45.5 %** | 28.36 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.50 € | **217.00 €** | 13.9 % | **13.6 %** | 217.36 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.50 € | **217.00 €** | 36.9 % | **36.6 %** | 217.36 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-3m endoskop | 252.50 € | **252.00 €** | 14.1 % | **13.9 %** | 252.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 89.50 € | **89.00 €** | 15.3 % | **14.6 %** | 89.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1289.00 € | **1288.50 €** | 7.4 % | **7.4 %** | 1288.89 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 37.50 € | **37.00 €** | 8.7 % | **7.2 %** | 37.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 89.00 € | **88.50 €** | 19999.4 % | **19886.4 %** | 88.89 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 20.00 € | **19.50 €** | 13.9 % | **11.1 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 133.00 € | **132.50 €** | 5.7 % | **5.3 %** | 132.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní filtrační kapsle GARNI BS 45T | 16.50 € | **16.00 €** | 18.2 % | **14.6 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| 3D Tlačiareň Creality CR-10 SE | 189.50 € | **189.00 €** | 15.0 % | **14.7 %** | 189.49 € | cena podľa najlacnejšieho iného predajcu |
| Podpera pozadia pre fotoštúdio Puluz 2x2m + pozadia ... | 42.00 € | **41.50 €** | 16.6 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Rowenta RO4B25EA | 98.90 € | **98.50 €** | 12.6 % | **12.2 %** | 98.81 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 169.90 € | **169.50 €** | 18.4 % | **18.1 %** | 169.85 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 76.90 € | **76.50 €** | 17.5 % | **16.8 %** | 76.87 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 119.90 € | **119.50 €** | 13.6 % | **13.2 %** | 119.87 € | cena podľa najlacnejšieho iného predajcu |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNCM9 13-32" monitor mount | 31.90 € | **31.50 €** | 21.5 % | **20.0 %** | 31.76 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.90 € | **51.50 €** | 6.2 % | **5.4 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 378.90 € | **378.50 €** | 12.9 % | **12.8 %** | 378.57 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 265.90 € | **265.50 €** | 7.3 % | **7.1 %** | 265.74 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.40 € | **9.30 €** | 26.9 % | **25.6 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 200.00 € | **199.90 €** | 19.6 % | **19.6 %** | 199.96 € | cena podľa najlacnejšieho iného predajcu |

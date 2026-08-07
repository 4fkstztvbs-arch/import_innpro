# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-07

Vstup: `premiumstoresk_20260807_1253.csv` (Heureka sortiment report, 5965 riadkov, **starý obchod** — číslami sa teraz nič nerozhoduje, toto je len ukážka výstupu nástroja `scripts/compare-heureka-prices.js`. Po spustení do ostrej prevádzky treba spustiť znova s čerstvým reportom.)

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH).

## Súhrn

- Spárovaných produktov cez EAN: **1912**
- Návrh **zvýšiť** cenu: **68** produktov
- Návrh **znížiť** cenu: **974** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **870** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **569**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (68)

| Názov | Naša cena | → Nová cena | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---|
| Concept LA8383DS | 757.90 € | **843.00 €** | 843.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| TELEtek multipřepínač 13/50 | 730.50 € | **793.50 €** | 793.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 17/16 | 268.90 € | **306.50 €** | 306.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 102A | 176.90 € | **202.50 €** | 202.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes AVANT 12 PRO (532203) | 385.50 € | **404.90 €** | 404.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 9/48 | 395.00 € | **413.50 €** | 413.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 93.00 € | **104.50 €** | 104.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 13/24 | 361.50 € | **371.50 €** | 371.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 5/32 | 184.90 € | **193.50 €** | 193.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amiko TSC-1270 | 153.90 € | **161.90 €** | 161.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 3015 Arcus 2GEN s Wi-Fi | 410.00 € | **417.50 €** | 417.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA TE-344 venkovní anténa | 21.50 € | **27.00 €** | 27.12 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera IP venkovní NEDIS WIFICO22CWT / Wi-Fi / 3MP / IP65... | 93.90 € | **98.90 €** | 98.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| CA modul CAM 803 Nagravision CZ/SK VERZE s kartou Skylink | 40.50 € | **45.50 €** | 45.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| König & Meyer 16311 BK | 7.40 € | **12.00 €** | 12.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEM INS-02 napájecí výhybka k LEM zesilovačům | 16.00 € | **20.50 €** | 20.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept OPK5160bc | 181.50 € | **186.00 €** | 186.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 191 USB datalogger pro měření teploty a rel. vl... | 78.90 € | **82.50 €** | 82.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 175 USB datalogger pro měření teploty a rel. vl... | 85.50 € | **89.00 €** | 88.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790 MHz,... | 33.90 € | **36.50 €** | 36.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEPER BEP-BT600-Y | 25.90 € | **27.50 €** | 27.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní předfiltr GARNI PF 45T | 18.90 € | **20.50 €** | 20.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prodlužovací kabel na bubnu 20m ORNO OR-AE-13293/20M | 77.50 € | **79.00 €** | 78.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-C301ABE001 | 11.50 € | **13.00 €** | 12.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní filtrační kapsle GARNI BS 45T | 16.00 € | **17.50 €** | 17.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMIKO dálkové ovládání Univerzální, HD - SD | 13.00 € | **14.50 €** | 14.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9038G | 33.50 € | **35.00 €** | 35.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní UV sterilizační lampa GARNI UV 45T | 19.00 € | **20.50 €** | 20.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zircon Monoblok Single M-0143 Slim line Skylink | 10.50 € | **11.90 €** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anténní rozbočovač FV2  CLASS A | 2.60 € | **4.00 €** | 3.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimetr UNI-T UT 89X | 34.50 € | **35.90 €** | 35.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| TEFAL XA 800512 | 17.50 € | **18.90 €** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní předfiltr GARNI PF 15T | 16.50 € | **17.90 €** | 17.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24992-70 | 40.90 € | **41.90 €** | 41.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 25400-56/RH | 49.90 € | **50.90 €** | 50.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9260G | 61.50 € | **62.50 €** | 62.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solac CT8627 | 56.50 € | **57.50 €** | 57.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dálkový ovládač ALMA 2880 / TESLA TE-380 mini | 8.80 € | **9.80 €** | 9.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26810-56/RH | 46.50 € | **47.50 €** | 47.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **61.50 €** | 61.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bellissima 11855 Sublime curls Kulma | 40.50 € | **41.50 €** | 41.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dálkový ovladač Tesla TE-321 / Alma 2861 original | 7.00 € | **7.90 €** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anténní rozbočovač FV3  CLASS A | 3.20 € | **4.10 €** | 4.14 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bellissima 11737 My Pro Kartáč na Vlasy | 39.00 € | **39.90 €** | 39.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bellissima 11738 My Pro Kulma na vlasy | 44.00 € | **44.90 €** | 44.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Stojánek na kapsle Nespresso 40ks | 8.50 € | **9.30 €** | 9.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dálkový ovládač Tesla TE-300, TE-301, TE-302, Alma 2820 | 7.60 € | **8.30 €** | 8.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Remington PG2100 | 27.00 € | **27.50 €** | 27.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Bella B -4430 bílozelená | 20.00 € | **20.50 €** | 20.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Krimpovací kleště ORNO OR-AE-13136 na fastony - sada s ko... | 10.00 € | **10.50 €** | 10.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV lampa do lapače hmyzu TEESA TSA0219L | 2.60 € | **3.10 €** | 3.13 € | dobehnutie 2. najlacnejšieho konkurenta |
| Remington HC3000GP | 43.50 € | **44.00 €** | 44.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dálkový ovladač TESLA TE-3000 | 7.90 € | **8.30 €** | 8.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 21353-56 | 8.20 € | **8.60 €** | 8.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Adaptér KRUGER & MATZ KM1246 USB - USB-C | 2.90 € | **3.30 €** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Adaptér KRUGER & MATZ KM1245 USB-C - 3,5 Jack stereo | 3.50 € | **3.90 €** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Rony B-4777 červená | 23.50 € | **23.90 €** | 23.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 22.50 € | **22.90 €** | 22.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Isabel B-4426 antracit | 32.50 € | **32.90 €** | 32.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Isabel B-4426 bílá | 32.50 € | **32.90 €** | 32.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 21274-70 | 27.50 € | **27.90 €** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Isabel B-4426 nerez | 32.50 € | **32.90 €** | 32.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ION Kettle K3 Onyx black | 30.50 € | **30.90 €** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ROWENTA ZR005201 | 8.70 € | **8.80 €** | 8.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Nora B-4781 bílo/zelená | 19.90 € | **20.00 €** | 20.13 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **33.00 €** | 33.22 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kabel SYKFY 2x2x0,5 | 0.40 € | **0.50 €** | 0.46 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Lavazza Crema E Gusto 250 g | 6.00 € | **6.10 €** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (974)

| Názov | Naša cena | → Nová cena | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---|
| YAMAHA A-S3200 BLACK | 6799.00 € | **6002.00 €** | 6002.47 € | stávame sa najlacnejší |
| YAMAHA R-N2000A BLACK | 3890.00 € | **3312.50 €** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.50 €** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N1000A BLACK | 1599.00 € | **1367.00 €** | 1367.23 € | stávame sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1367.00 €** | 1367.23 € | stávame sa najlacnejší |
| ELECTROLUX EEC67310L | 1039.00 € | **807.50 €** | 677.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yamaha RX-A6A BLACK | 2799.00 € | **2576.00 €** | 2576.04 € | stávame sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A LGH GREY | 889.00 € | **692.50 €** | 658.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 362.65 € | stávame sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A CRB GREY | 889.00 € | **695.90 €** | 658.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6192AXL4 | 559.00 € | **366.50 €** | 366.70 € | stávame sa najlacnejší |
| LG RC8TV9AVHN | 759.00 € | **568.00 €** | 538.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX EEM63301L | 739.00 € | **550.50 €** | 459.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX EIV634 | 529.00 € | **359.00 €** | 320.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N800A BLACK | 1099.00 € | **942.50 €** | 942.53 € | stávame sa najlacnejší |
| ELECTROLUX EIV 854 | 939.00 € | **787.50 €** | 787.80 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 519.00 € | **373.00 €** | 373.50 € | stávame sa najlacnejší |
| YAMAHA True X Bar 40A / SR-X40A LGH GREY | 599.00 € | **453.90 €** | 282.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N600A BLACK | 799.00 € | **658.50 €** | 620.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N600A SILVER | 799.00 € | **659.50 €** | 620.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **343.50 €** | 343.70 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.90 €** | 634.00 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.90 €** | 177.00 € | stávame sa najlacnejší |
| Gorenje NRK619DA2XL4 | 599.00 € | **468.90 €** | 464.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENT6ME19S | 1039.00 € | **918.50 €** | 797.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 007090010 | 629.99 € | **509.50 €** | 509.58 € | stávame sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 639.00 € | **524.50 €** | 485.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.50 €** | 526.90 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **354.00 €** | 354.05 € | stávame sa najlacnejší |
| Beko ATP3100N | 159.00 € | **49.50 €** | 49.75 € | stávame sa najlacnejší |
| Gorenje BMX201AG1BG | 319.00 € | **209.90 €** | 207.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS EA 890810 | 569.00 € | **460.50 €** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG 64220 S | 269.00 € | **160.90 €** | 127.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 PRO EOD3H50TX | 449.00 € | **341.90 €** | 307.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEG68600W | 979.00 € | **872.50 €** | 679.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.00 €** | 160.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BM201AG1BG | 319.00 € | **215.50 €** | 215.80 € | stávame sa najlacnejší |
| Whirlpool WIO 3T133 PLE | 649.00 € | **548.50 €** | 399.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-F51 BLACK 1 karton | 399.00 € | **298.90 €** | 298.95 € | stávame sa najlacnejší |
| iRobot Roomba 205 DustCompactor Combo BL | 399.00 € | **303.50 €** | 173.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba 205 DustCompactor Combo WH | 399.00 € | **303.50 €** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **505.00 €** | 505.20 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **506.50 €** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 PRO EES47320L | 569.00 € | **476.90 €** | 403.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFS26120XQ | 419.00 € | **328.00 €** | 328.06 € | stávame sa najlacnejší |
| Gorenje R619EAXL6 | 599.00 € | **508.00 €** | 508.10 € | stávame sa najlacnejší |
| AMICA DS 6423 B | 259.00 € | **169.00 €** | 169.40 € | stávame sa najlacnejší |
| Gorenje GEC5C41SG | 399.00 € | **309.50 €** | 309.80 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **441.90 €** | 369.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EES48401L | 649.00 € | **562.00 €** | 534.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grundig VCW6270 | 249.00 € | **162.50 €** | 113.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WSIC 3M27 C | 439.00 € | **354.50 €** | 300.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S1200 BLACK | 2399.00 € | **2315.50 €** | 2315.65 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.50 €** | 2315.65 € | stávame sa najlacnejší |
| YAMAHA NS-777 BLACK 2 kartony | 899.00 € | **816.90 €** | 439.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RF4142PW4 | 319.00 € | **239.50 €** | 215.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX PerfectCare 600 EW6TN4262C | 499.00 € | **420.50 €** | 320.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK4182PW4 | 359.00 € | **281.00 €** | 281.12 € | stávame sa najlacnejší |
| Electrolux EEM43201L | 569.00 € | **493.90 €** | 393.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WBC 3C34 PF X | 519.00 € | **443.90 €** | 410.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX Hob2Hood LFV416K | 559.00 € | **484.00 €** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRK 6192 AW4 | 539.00 € | **464.90 €** | 379.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R4142PS | 319.00 € | **245.50 €** | 245.70 € | stávame sa najlacnejší |
| Samsung HW-T420/EN | 179.00 € | **106.90 €** | 106.92 € | stávame sa najlacnejší |
| ELECTROLUX 700 FLEX MaxiFlex EES48200L | 529.00 € | **459.50 €** | 368.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 669.00 € | **601.00 €** | 437.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWF 420 BL | 239.00 € | **171.50 €** | 171.63 € | stávame sa najlacnejší |
| TESLA SlowJuicer SJ770 XXL Deluxe | 189.00 € | **123.90 €** | 109.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10W | 399.00 € | **337.00 €** | 337.40 € | stávame sa najlacnejší |
| Electrolux LIB60420CK | 299.00 € | **237.90 €** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ESM48310SX | 589.00 € | **528.90 €** | 498.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFP616X | 279.00 € | **219.50 €** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK4182PS4 | 379.00 € | **319.50 €** | 319.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 8401A | 169.00 € | **109.90 €** | 109.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **340.90 €** | 308.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 221.46 € | stávame sa najlacnejší |
| YAMAHA WX-051/MusicCast 50 WHITE | 599.00 € | **541.50 €** | 528.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6346XOK | 329.00 € | **271.90 €** | 251.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIT60443X | 489.00 € | **433.90 €** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ESA47310SW | 529.00 € | **474.50 €** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SSA 6110 OCW | 485.00 € | **430.90 €** | 390.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C7B6AS9/EF | 1183.50 € | **1129.50 €** | 899.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE RB493PW | 259.00 € | **205.50 €** | 188.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VC 1622 M | 555.00 € | **501.50 €** | 498.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZVC9140D | 319.00 € | **265.90 €** | 264.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BMGB25333BG | 309.00 € | **255.90 €** | 208.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GV663B65 | 559.00 € | **506.00 €** | 506.10 € | stávame sa najlacnejší |
| Gorenje BOS6737E06B | 319.00 € | **266.50 €** | 254.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 700 FLEX MaxiFlex EEM48200IX | 599.00 € | **546.90 €** | 409.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WS Q2160 NE | 319.00 € | **267.90 €** | 232.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S9100 | 99.90 € | **48.90 €** | 38.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GKS5C71CLI | 559.00 € | **508.90 €** | 483.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický běžecký pás HMS BE8501I | 572.50 € | **522.90 €** | 521.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EL61A4UG | 209.00 € | **159.50 €** | 118.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický trenažér pro Nordic walking LOOP15 | 560.50 € | **511.90 €** | 489.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BBIM12400XMPS | 489.00 € | **441.90 €** | 384.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 AirDry EEA12100L | 449.00 € | **402.50 €** | 302.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EUOC94DB | 249.00 € | **202.50 €** | 169.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 AirDry EEA22100L | 449.00 € | **402.50 €** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EL61C3DB | 189.00 € | **142.50 €** | 127.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **242.50 €** | 242.90 € | stávame sa najlacnejší |
| Electrolux PD82-4MB světle modrá | 219.00 € | **172.90 €** | 130.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multipřepínač TeleTek 17/50 | 701.50 € | **655.50 €** | 655.54 € | stávame sa najlacnejší |
| YAMAHA NS-P41 BLACK | 329.00 € | **283.90 €** | 283.97 € | stávame sa najlacnejší |
| ELECTROLUX EPF61RR | 135.00 € | **89.90 €** | 71.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool GOS 6415/NB1 | 319.00 € | **275.50 €** | 187.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux Série 300 LIL61434C | 369.00 € | **325.50 €** | 262.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT32HF2003 | 159.00 € | **115.50 €** | 115.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.50 €** | 411.90 € | stávame sa najlacnejší |
| YAMAHA TT-S303 BLACK | 529.00 € | **486.50 €** | 466.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TT-N503/MusicCast VINYL 500 White | 799.00 € | **757.50 €** | 688.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **494.00 €** | 494.30 € | stávame sa najlacnejší |
| YAMAHA NS-SW050 BLACK | 239.00 € | **198.50 €** | 198.58 € | stávame sa najlacnejší |
| YAMAHA A-S701 BLACK | 849.00 € | **808.50 €** | 808.61 € | stávame sa najlacnejší |
| ETA 151390000 | 139.99 € | **99.50 €** | 99.53 € | stávame sa najlacnejší |
| Gorenje BMI201AG1X | 239.00 € | **198.90 €** | 161.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 344790010 | 159.99 € | **119.90 €** | 113.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6547FXK | 329.00 € | **289.50 €** | 241.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-V6A Black | 699.00 € | **659.90 €** | 620.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE BM201AG1X | 179.00 € | **139.90 €** | 133.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VD1442AM | 485.00 € | **447.50 €** | 389.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64325SDX | 299.00 € | **261.50 €** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG RC91V9AV4N | 796.50 € | **759.90 €** | 628.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 700 SENSE LFV619K | 669.00 € | **632.50 €** | 462.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE RB492PW | 239.00 € | **202.50 €** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S301 SILVER | 439.00 € | **403.00 €** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington HC450 | 72.90 € | **37.50 €** | 37.78 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 244.20 € | stávame sa najlacnejší |
| ELECTROLUX LFG719X | 559.00 € | **524.50 €** | 378.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C7B6D41/EF | 733.50 € | **699.90 €** | 694.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko ATP5500N | 189.00 € | **155.50 €** | 121.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba 105 Combo (Black) | 239.00 € | **205.90 €** | 171.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá čistička vzduchu GARNI 45T OneCare | 374.00 € | **341.50 €** | 331.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MIA 655 AG | 339.00 € | **306.90 €** | 271.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 23480-56/RH | 219.00 € | **186.90 €** | 154.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6182PW4 | 379.99 € | **347.90 €** | 348.00 € | stávame sa najlacnejší |
| MKF 17DF441 Fixní držák na TV | 39.00 € | **7.10 €** | 7.20 € | stávame sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **238.00 €** | 180.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6182PS4 | 359.00 € | **328.00 €** | 328.11 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **248.00 €** | 248.37 € | stávame sa najlacnejší |
| GORENJE GW642CLI | 279.00 € | **248.50 €** | 196.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 013390010 | 129.99 € | **99.50 €** | 90.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL002CBK SmartLife | 350.90 € | **320.50 €** | 312.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX KGS 6404 SX | 199.00 € | **168.90 €** | 150.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 013390020 | 114.99 € | **84.90 €** | 85.00 € | stávame sa najlacnejší |
| Gorenje BOSX6747A01BG | 519.00 € | **489.50 €** | 302.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WMF250G | 319.00 € | **289.90 €** | 227.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termokamera UNI-T UTi720A | 333.00 € | **304.50 €** | 269.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VT862AB | 329.00 € | **300.50 €** | 289.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VT862AM | 329.00 € | **300.50 €** | 289.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C600CS9/EF | 626.90 € | **598.50 €** | 498.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO 4250 CLI | 159.00 € | **130.90 €** | 107.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA KGCR387100R | 608.50 € | **580.50 €** | 570.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gaggia Magenta Prestige | 609.90 € | **582.00 €** | 543.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA WX-021/MusicCast 20 WHITE | 299.00 € | **271.50 €** | 209.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 2055 Arcus 2GEN s Wi-Fi | 365.00 € | **337.50 €** | 337.80 € | stávame sa najlacnejší |
| Tesla AirCook Q40 | 79.90 € | **52.90 €** | 49.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-MAX3500 | 669.00 € | **642.00 €** | 642.35 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **172.00 €** | 172.44 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 92.00 € | **65.50 €** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON AC 9140 | 69.90 € | **43.50 €** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFP416X | 229.00 € | **202.90 €** | 155.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 833790000 | 49.99 € | **23.90 €** | 23.92 € | stávame sa najlacnejší |
| ELECTROLUX LIT30230C | 279.00 € | **253.50 €** | 194.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFP326FB | 169.00 € | **143.50 €** | 115.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 865 | 179.00 € | **153.50 €** | 153.83 € | stávame sa najlacnejší |
| ETA 4216 90000 | 119.99 € | **94.50 €** | 94.90 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah VIPOW BAT0499 Bluetooth | 291.50 € | **266.50 €** | 232.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 6denní předpovědí GARNI 1085 Arcus | 291.50 € | **266.50 €** | 242.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **574.00 €** | 574.16 € | stávame sa najlacnejší |
| YAMAHA CD-C603 SILVER | 599.00 € | **574.00 €** | 574.16 € | stávame sa najlacnejší |
| Whirlpool WIP 4T233 PFEG B | 537.50 € | **512.90 €** | 415.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 122190000 | 99.99 € | **75.50 €** | 65.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BBIM17300BMPSF | 449.00 € | **424.90 €** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 329790000 | 56.99 € | **32.90 €** | 31.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28 | 189.00 € | **165.50 €** | 152.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DP 6413 LZBG | 235.00 € | **211.50 €** | 202.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 213890000 | 105.99 € | **82.50 €** | 78.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR9197WH | 522.90 € | **499.50 €** | 355.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles Q10 | 494.00 € | **471.50 €** | 359.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW2TN5061FC | 399.00 € | **376.50 €** | 305.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimetr UNI-T UT622E | 355.90 € | **333.50 €** | 333.83 € | stávame sa najlacnejší |
| GORENJE MO17E1W | 79.00 € | **56.90 €** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB34C600ESA/EF | 484.90 € | **462.90 €** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VD1442AR | 488.50 € | **466.50 €** | 423.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VD1442AB | 488.50 € | **466.50 €** | 424.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 1377.03 € | stávame sa najlacnejší |
| Samsung RB34C600DSA/EF | 469.50 € | **447.90 €** | 395.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WHM22113 3 | 471.00 € | **449.90 €** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH60E3X | 99.00 € | **77.90 €** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica VM 1442 R | 466.50 € | **445.50 €** | 410.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluetooth | 296.00 € | **275.00 €** | 275.34 € | stávame sa najlacnejší |
| BEKO B5RCNA405HG | 451.50 € | **430.90 €** | 389.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX  300 LMS2203EMX | 299.00 € | **278.50 €** | 216.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 507590000 | 119.99 € | **99.50 €** | 91.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 242590000 | 99.99 € | **79.50 €** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GSXE90EVAD | 2218.90 € | **2198.50 €** | 2198.90 € | stávame sa najlacnejší |
| Reproduktory Kruger&Matz KM1995-S | 233.00 € | **212.90 €** | 208.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 32FBG5010S | 209.00 € | **188.90 €** | 188.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON AC 5999 | 57.99 € | **37.90 €** | 36.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE ECT 643 BX | 219.00 € | **199.00 €** | 157.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON S 5506 GP | 58.90 € | **38.90 €** | 38.99 € | stávame sa najlacnejší |
| Zelmer masomlýnek ZMM5801P | 119.00 € | **99.50 €** | 99.79 € | stávame sa najlacnejší |
| ETA 559590010 | 52.99 € | **33.50 €** | 32.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CBT6130/3X | 83.90 € | **64.50 €** | 64.71 € | stávame sa najlacnejší |
| REMINGTON S 8540 | 58.90 € | **39.50 €** | 19.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA FS 18 TOB | 309.00 € | **289.90 €** | 238.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-ES5A GREEN | 159.00 € | **139.90 €** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SKZ 65 BB | 185.00 € | **165.90 €** | 151.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA CF 9530 F0 | 69.90 € | **50.90 €** | 47.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington MB4047 Beard Kit | 59.90 € | **40.90 €** | 37.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22000-56/RH | 129.00 € | **110.00 €** | 110.01 € | stávame sa najlacnejší |
| Blaupunkt 55UGC5500S | 399.50 € | **381.00 €** | 377.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON S 8500 | 54.99 € | **36.50 €** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá čistička vzduchu GARNI 15T OneCare | 210.00 € | **191.90 €** | 168.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth NEDIS SPPT2480BK | 205.50 € | **187.50 €** | 160.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 28270-56 | 89.90 € | **71.90 €** | 67.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy HIVE Beans Black | 34.90 € | **16.90 €** | 16.97 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **81.00 €** | 81.42 € | stávame sa najlacnejší |
| Electrolux E7T1-6BP | 79.00 € | **61.50 €** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 112 | 109.99 € | **92.50 €** | 78.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL ZC 255 B 38 | 149.90 € | **132.50 €** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS KP1A3B31 Nescafé Dolce Gusto Picco | 69.90 € | **52.50 €** | 51.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 515190000 | 92.99 € | **75.90 €** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun Silk-expert PRO PL3132 IPL | 375.90 € | **358.90 €** | 274.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90W | 373.90 € | **356.90 €** | 305.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX ESF2400OW | 369.90 € | **352.90 €** | 319.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 940 Wi-Fi meteorologická stanice | 192.90 € | **176.50 €** | 173.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 114 | 105.90 € | **89.50 €** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CI 3C6F0A | 350.90 € | **334.90 €** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 50UGC5500S | 349.90 € | **333.90 €** | 268.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 142590000 | 79.99 € | **64.50 €** | 64.77 € | stávame sa najlacnejší |
| Tefal RK 103811 | 72.90 € | **57.50 €** | 53.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GI6432BSCE | 346.90 € | **331.50 €** | 282.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL FR 490070 | 119.00 € | **103.90 €** | 83.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA ST 62 BBG | 135.00 € | **119.90 €** | 107.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS EA 810 B | 326.50 € | **311.50 €** | 238.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS EA 810 B | 326.50 € | **311.50 €** | 238.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal TT693110 | 59.90 € | **44.90 €** | 41.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON CI 95 Pearl | 39.90 € | **24.90 €** | 22.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH 6756WO | 139.00 € | **124.00 €** | 124.40 € | stávame sa najlacnejší |
| ETA 013490000 | 69.99 € | **55.00 €** | 55.50 € | stávame sa najlacnejší |
| YAMAHA TW-E7B WHITE | 239.00 € | **224.50 €** | 103.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Soundbar TESLA PrimeSound HQ-990 - Dolby Atmos 2.1 | 169.00 € | **154.50 €** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 051690000 | 75.99 € | **61.50 €** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook & Grill QG800 WiFi - multifunkční digitální... | 164.90 € | **150.50 €** | 114.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wi-Fi meteorologická stanice GARNI 980 Arcus | 163.90 € | **149.50 €** | 141.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6872 | 77.90 € | **63.90 €** | 61.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko RDSA240K40SN | 302.50 € | **288.50 €** | 224.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualHeat QD575 XXL - multifunkční duální di... | 160.50 € | **146.50 €** | 115.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CDIH 2D949 | 305.50 € | **291.50 €** | 265.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH9A73WO | 301.00 € | **287.50 €** | 269.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LFU 215 X | 115.00 € | **101.50 €** | 85.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 166090000 | 65.99 € | **52.50 €** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC112X Pomalý hrnec 6,5 l | 135.90 € | **122.50 €** | 85.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC111X Pomalý hrnec 3,5 l | 99.90 € | **86.50 €** | 76.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO17E1S | 79.00 € | **65.90 €** | 56.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **29.90 €** | 29.96 € | stávame sa najlacnejší |
| ETA 315190010 | 68.99 € | **55.90 €** | 45.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D BLACK | 283.50 € | **270.50 €** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D SILVER | 283.50 € | **270.50 €** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla EliteCook K70 | 119.00 € | **106.00 €** | 98.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GARNI 2... | 299.50 € | **286.50 €** | 286.66 € | stávame sa najlacnejší |
| CrockPot CSC062X | 169.00 € | **156.00 €** | 156.19 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 106.20 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX310,bílá | 29.99 € | **17.00 €** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX310,černá | 29.99 € | **17.00 €** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX310,červ. | 29.99 € | **17.00 €** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA 510CE1.30P(W) | 281.90 € | **269.00 €** | 258.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 1025 Arcus Wi-Fi meteorologická stanice 2GEN | 204.50 € | **191.90 €** | 191.99 € | stávame sa najlacnejší |
| Baterie olověná  12V /100 Ah  Rebel  BAT0421 | 146.00 € | **133.50 €** | 132.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přenosná nabíječka NEDIS EVCH37KWBK20 5m /16A, 230V, Type... | 213.00 € | **200.50 €** | 200.51 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.50 €** | 40.59 € | stávame sa najlacnejší |
| ETA 116290000 | 65.99 € | **53.50 €** | 49.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **29.90 €** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH62E3X | 139.00 € | **127.00 €** | 79.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualHeat QD464 XXL - multifunkční duální di... | 142.50 € | **130.50 €** | 103.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 413.60 € | stávame sa najlacnejší |
| Gorenje GI6401BX | 258.50 € | **246.90 €** | 203.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON HC 5035 | 30.99 € | **19.50 €** | 19.60 € | stávame sa najlacnejší |
| Salente Quickdry | 254.90 € | **243.50 €** | 227.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualHeat QD73 XXL - multifunkční digitální ... | 129.00 € | **117.90 €** | 89.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 715390000 | 52.99 € | **41.90 €** | 36.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 126490000 | 52.99 € | **41.90 €** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZVC251 | 71.90 € | **60.90 €** | 60.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO VRR84314VB | 241.90 € | **230.90 €** | 181.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESPRESSO KRUPS Inissia XN100510 červený | 99.90 € | **88.90 €** | 75.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo koncentrace CO2 GARNI 102Q | 131.50 € | **120.50 €** | 120.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **43.90 €** | 43.97 € | stávame sa najlacnejší |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - kompletní... | 190.50 € | **179.50 €** | 179.62 € | stávame sa najlacnejší |
| AMICA DI6421B | 395.50 € | **384.50 €** | 384.70 € | stávame sa najlacnejší |
| Panasonic SC-UA30E-K | 232.50 € | **221.90 €** | 157.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HDCG 32220 FX | 109.00 € | **98.50 €** | 83.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prodlužovací kabel na bubnu 25m Solight PB40 | 128.00 € | **117.50 €** | 115.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL FR 495070 | 109.00 € | **98.50 €** | 98.70 € | stávame sa najlacnejší |
| Braun SI1009OR | 32.90 € | **22.50 €** | 22.90 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110 AP černá | 24.99 € | **14.90 €** | 14.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX110 AP,bílá | 24.99 € | **14.90 €** | 14.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.90 €** | 63.00 € | stávame sa najlacnejší |
| Breville VDF130X-01 | 214.90 € | **204.90 €** | 157.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44S | 218.50 € | **208.50 €** | 172.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Soundbar TESLA PrimeSound HQ-880 - 2.1 soundbar | 117.50 € | **107.50 €** | 71.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC772830 | 225.50 € | **215.50 €** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON CI 9132 | 58.90 € | **48.90 €** | 42.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **269.90 €** | 269.98 € | stávame sa najlacnejší |
| Rowenta CV 5930F0 | 35.99 € | **26.00 €** | 26.13 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 26.13 € | stávame sa najlacnejší |
| Panasonic SC-AKX520E-K | 304.90 € | **295.00 €** | 295.08 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.90 €** | 341.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 44W | 210.50 € | **200.90 €** | 160.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 918690030 | 52.99 € | **43.50 €** | 32.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 918690040 | 52.99 € | **43.50 €** | 32.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 227090000 | 52.99 € | **43.50 €** | 38.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZMM3512B | 91.90 € | **82.50 €** | 82.59 € | stávame sa najlacnejší |
| RICATECH PR85 | 59.90 € | **50.50 €** | 49.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 50.86 € | stávame sa najlacnejší |
| Guzzanti GZ 8502A | 202.00 € | **192.90 €** | 162.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 441 | 197.90 € | **188.90 €** | 151.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CTP6SC4/E14U | 195.50 € | **186.50 €** | 174.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-HTB100EGK | 99.90 € | **90.90 €** | 83.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná plachta proti kroupám MID SUV 480x195x155cm | 108.50 € | **99.50 €** | 97.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prodlužovací kabel na bubnu 25m Solight PB41 | 106.00 € | **97.00 €** | 96.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 426.50 € | **417.50 €** | 417.60 € | stávame sa najlacnejší |
| SONY sluchátka MDR-EX110AP,černá | 22.90 € | **13.90 €** | 8.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44 | 189.90 € | **181.00 €** | 160.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer kráječ ZFS1016 | 54.90 € | **46.00 €** | 46.31 € | stávame sa najlacnejší |
| Breville VDF133X-01 | 188.50 € | **179.90 €** | 137.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 419T chytrý teploměr s vlhkoměrem | 99.50 € | **90.90 €** | 86.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 916690040 | 47.99 € | **39.50 €** | 26.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 916690020 | 47.99 € | **39.50 €** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 333790000 | 47.99 € | **39.50 €** | 33.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MediaBox XT850 Android TV 11 box 4K s tunerem DVB-T2/C | 96.90 € | **88.50 €** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester tloušťky laku UNI-T UT343D | 98.90 € | **90.50 €** | 89.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.90 €** | 23.99 € | stávame sa najlacnejší |
| Gorenje G642ABX | 159.00 € | **150.90 €** | 145.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON MB 320C | 46.99 € | **38.90 €** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 002897000 | 39.99 € | **31.90 €** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 732090020 | 37.99 € | **29.90 €** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 959890010 | 47.99 € | **39.90 €** | 39.98 € | stávame sa najlacnejší |
| BEKO HDMC 32400 TX | 180.50 € | **172.50 €** | 140.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48A | 178.50 € | **170.50 €** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28S | 180.50 € | **172.50 €** | 159.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vnitřní bezdrátové čidlo kvality vzduchu GARNI 104Q | 93.50 € | **85.50 €** | 74.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 32WGC5520S | 149.00 € | **141.00 €** | 140.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla GSM-01 zesilovač/opakovač 900 MHz - kompletní sada | 120.50 € | **112.50 €** | 112.77 € | stávame sa najlacnejší |
| REMINGTON CI 5318 | 46.99 € | **39.00 €** | 31.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer sušička potravin ZFD1005 | 69.99 € | **62.00 €** | 62.44 € | stávame sa najlacnejší |
| Candy CI642CBB/1 | 167.90 € | **160.00 €** | 139.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 20630-56 | 52.90 € | **45.00 €** | 36.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 90B1 | 162.50 € | **154.90 €** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 10003 | 164.00 € | **156.50 €** | 139.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 750 HD | 91.00 € | **83.50 €** | 73.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Thomson MIC201IBT | 119.00 € | **111.50 €** | 111.89 € | stávame sa najlacnejší |
| REMINGTON D 5219 | 36.99 € | **29.50 €** | 24.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-ES5A PINK | 169.90 € | **162.50 €** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-ES5A WHITE | 169.90 € | **162.50 €** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 506A | 163.90 € | **156.50 €** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles i4 White | 167.90 € | **160.50 €** | 156.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZFS0919 | 69.90 € | **62.50 €** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington CI91W1B | 47.90 € | **40.50 €** | 25.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S 6606 Confidence | 56.90 € | **49.50 €** | 49.90 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110B, černá | 19.99 € | **12.90 €** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX110W,bílá | 19.99 € | **12.90 €** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 080Q měřič kvality venkovního ovzduší | 87.50 € | **80.50 €** | 77.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S8500GP | 59.90 € | **52.90 €** | 51.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Street X-BASS KM0572 | 81.50 € | **74.50 €** | 74.79 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **152.00 €** | 152.29 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110P, růžová | 19.90 € | **12.90 €** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EF167 | 21.99 € | **15.00 €** | 15.19 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **15.00 €** | 15.19 € | stávame sa najlacnejší |
| Remington HC7110 | 33.90 € | **27.00 €** | 27.09 € | stávame sa najlacnejší |
| Zelmer ZFS0917 | 54.90 € | **48.00 €** | 48.21 € | stávame sa najlacnejší |
| TEFAL HB 643138 | 54.90 € | **48.00 €** | 48.34 € | stávame sa najlacnejší |
| Zelmer ZIR1505 | 31.90 € | **25.00 €** | 25.47 € | stávame sa najlacnejší |
| Breville VDF131X-01 | 150.50 € | **143.90 €** | 58.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MediaBox XG500 4K UHD Google TV multimediální přehr... | 75.50 € | **68.90 €** | 54.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 6449 | 75.50 € | **68.90 €** | 68.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.00 € | **137.50 €** | 128.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 78.00 € | **71.50 €** | 62.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC063X | 119.00 € | **112.50 €** | 112.60 € | stávame sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **22.50 €** | 22.69 € | stávame sa najlacnejší |
| ETA 859890040 | 39.99 € | **33.50 €** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON CI 53W | 38.99 € | **32.50 €** | 28.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 18.63 € | stávame sa najlacnejší |
| Graef G-Line G 50 | 143.90 € | **137.50 €** | 112.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52 Skylink Nagravision bezkartový systém | 75.90 € | **69.50 €** | 63.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 580 Line | 75.90 € | **69.50 €** | 66.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 618B Precise | 76.90 € | **70.50 €** | 69.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 618W Precise | 76.90 € | **70.50 €** | 69.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **197.50 €** | 197.52 € | stávame sa najlacnejší |
| Remington AC9140B | 54.90 € | **48.50 €** | 45.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **56.50 €** | 56.83 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **35.90 €** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 632290000 | 35.99 € | **29.90 €** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Gril BBQ VG 200 | 131.90 € | **125.90 €** | 103.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO 8265+ DVB-S2/T2/C kombo přijímač HD | 71.90 € | **65.90 €** | 57.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 33Ah  VIPOW bezúdržbový akumulátor | 73.50 € | **67.50 €** | 65.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Smartdust | 138.50 € | **132.50 €** | 132.58 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30cm, 2... | 31.50 € | **25.50 €** | 25.79 € | stávame sa najlacnejší |
| Amiko Mini 4K Combo - DVB-S2/T2/C přijímač | 73.50 € | **67.50 €** | 67.89 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **16.00 €** | 16.21 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovládaním... | 27.50 € | **21.90 €** | 21.99 € | stávame sa najlacnejší |
| Guzzanti GZ 30B | 123.50 € | **117.90 €** | 70.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Hurricane F5 | 121.50 € | **115.90 €** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZPR2600 | 119.50 € | **113.90 €** | 96.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH6A75WO | 165.50 € | **159.90 €** | 159.93 € | stávame sa najlacnejší |
| ROWENTA RH 6543 WH | 122.50 € | **117.00 €** | 86.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9252 | 67.00 € | **61.50 €** | 53.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SMART FINDER S2 vyhledávač DVB-S/S2 signálu | 70.00 € | **64.50 €** | 62.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 094L čidlo detekce blesků | 63.50 € | **58.00 €** | 57.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 96.50 € | **91.00 €** | 91.50 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **76.00 €** | 76.50 € | stávame sa najlacnejší |
| Tefal KO251430 | 39.90 € | **34.50 €** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI3042VI | 39.90 € | **34.50 €** | 34.61 € | stávame sa najlacnejší |
| TEFAL KO 250830 | 39.90 € | **34.50 €** | 34.87 € | stávame sa najlacnejší |
| Guzzanti GZ 636B | 120.00 € | **114.90 €** | 78.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Glass&SteamAir® Fryer 4500BG | 114.00 € | **108.90 €** | 73.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 636 | 112.00 € | **106.90 €** | 82.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.00 € | **64.90 €** | 64.96 € | stávame sa najlacnejší |
| Amiko Mini HD265 WiFi | 57.50 € | **52.50 €** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 700 HD | 64.50 € | **59.50 €** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla MultiCook M80 Deluxe | 110.90 € | **105.90 €** | 96.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera cyklistická NEDIS CCAM100BK 3v1, 1080p, 2MP, černá | 58.90 € | **53.90 €** | 46.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester a nabíječka baterií KONNWEI KW520 3v1 | 57.90 € | **52.90 €** | 47.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 502 meteorologická stanice | 57.90 € | **52.90 €** | 50.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 5m, biela | 15.50 € | **10.50 €** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 5m, biela | 15.50 € | **10.50 €** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný zvonček, 9x LED, biela, 30cm... | 16.50 € | **11.50 €** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 615B Precise | 59.90 € | **54.90 €** | 54.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 118.90 € | **113.90 €** | 113.97 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 612 Precise | 63.50 € | **58.50 €** | 58.57 € | stávame sa najlacnejší |
| Electrolux EF 26   (EFH 12 W) | 15.99 € | **11.00 €** | 3.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept so2050 | 106.90 € | **102.00 €** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9255 | 55.50 € | **50.90 €** | 39.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 545 Line | 55.50 € | **50.90 €** | 46.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 547 Line | 55.50 € | **50.90 €** | 47.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 570 EASY III | 55.50 € | **50.90 €** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8202 | 96.50 € | **91.90 €** | 67.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RO 3985 EA | 104.50 € | **99.90 €** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RH 6545 WH | 97.50 € | **92.90 €** | 83.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V291 sada 3 LED vánočních dárků | 55.00 € | **50.50 €** | 35.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO IMPULSE 3 - set-top box DVB-T2/C (H.265/HEVC) | 53.00 € | **48.50 €** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO HD 8165 Wi-Fi - satelitní DVB-S2 přijímač | 56.00 € | **51.50 €** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 700 HD mini | 56.00 € | **51.50 €** | 45.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera IP venkovní Kruger&Matz Connect C60 Tuya Wi-Fi | 50.50 € | **46.00 €** | 43.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester baterií KONNWEI KW650 | 56.00 € | **51.50 €** | 50.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, časova... | 15.00 € | **10.50 €** | 10.90 € | stávame sa najlacnejší |
| ETA 732090000 | 27.99 € | **23.50 €** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ZE072 | 21.99 € | **17.50 €** | 17.70 € | stávame sa najlacnejší |
| ETA 732790010 | 24.99 € | **20.50 €** | 20.77 € | stávame sa najlacnejší |
| TESLA MultiCook MC600 Pro | 91.90 € | **87.50 €** | 80.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4262 | 104.90 € | **100.50 €** | 100.66 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 133.90 € | **129.50 €** | 129.90 € | stávame sa najlacnejší |
| REMINGTON AC 9096 | 44.90 € | **40.50 €** | 23.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny digitální TechnoLine WS 8019 nástěnné | 52.90 € | **48.50 €** | 38.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 55.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON S 5525 | 34.90 € | **30.50 €** | 30.62 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 439 Line s projekcí | 52.00 € | **47.90 €** | 43.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice TechnoLine WT 549 s projekcí | 48.00 € | **43.90 €** | 40.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3122T | 25.00 € | **20.90 €** | 20.99 € | stávame sa najlacnejší |
| REMINGTON D 3015 | 29.99 € | **25.90 €** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 618890010 | 23.99 € | **19.90 €** | 19.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks Colombia Medium Roast 450 g | 18.99 € | **14.90 €** | 10.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks® Blonde Espresso Roast 450 g | 18.99 € | **14.90 €** | 10.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks®Pike Place Espress Roast 450 g | 18.99 € | **14.90 €** | 11.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC052X | 90.50 € | **86.50 €** | 55.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Low Sugar Rice Cooker 1500AT | 93.50 € | **89.50 €** | 66.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GSL 60IS1 | 95.50 € | **91.50 €** | 77.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4111E0 | 85.90 € | **81.90 €** | 72.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V283 vánoční LED dekorace, dřevěný stromek s dek... | 47.90 € | **43.90 €** | 35.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO MIRA 3 WiFi - DVB-S2 přijímač | 44.50 € | **40.50 €** | 34.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B GRAY | 85.50 € | **81.50 €** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B GREEN | 85.50 € | **81.50 €** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B BLUE | 84.90 € | **80.90 €** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B PURPLE | 84.90 € | **80.90 €** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor voděo... | 63.90 € | **59.90 €** | 59.96 € | stávame sa najlacnejší |
| Amiko Mini 4K S2X - DVB-S2 přijímač | 64.50 € | **60.50 €** | 60.58 € | stávame sa najlacnejší |
| YAMAHA TW-E5B BROWN | 139.00 € | **135.00 €** | 135.29 € | stávame sa najlacnejší |
| YAMAHA TW-E5B GRAY | 139.00 € | **135.00 €** | 135.29 € | stávame sa najlacnejší |
| REMINGTON HC 5200 | 32.99 € | **29.00 €** | 21.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma AP01 - Antivibrační podložky | 7.99 € | **4.00 €** | 4.09 € | stávame sa najlacnejší |
| ETA 026990000 | 27.99 € | **24.00 €** | 24.34 € | stávame sa najlacnejší |
| Zelmer ZBS1012 | 19.99 € | **16.00 €** | 16.48 € | stávame sa najlacnejší |
| Rowenta CV9240F0 | 127.90 € | **124.00 €** | 124.38 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.00 €** | 32.16 € | stávame sa najlacnejší |
| REMINGTON S 7300 | 36.90 € | **33.00 €** | 33.44 € | stávame sa najlacnejší |
| SONY sluchátka MDR-EX15LP, bílá | 9.90 € | **6.10 €** | 4.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-EX15LP, černá | 9.90 € | **6.10 €** | 4.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-EX15LP, modrá | 9.90 € | **6.10 €** | 4.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 520 | 40.50 € | **36.90 €** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 291 Line | 43.50 € | **39.90 €** | 36.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3K1-3ST | 42.00 € | **38.50 €** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla T500 | 71.50 € | **68.00 €** | 59.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 20760-57/RH | 71.50 € | **68.00 €** | 60.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V282 vánoční LED dekorace, dřevěný stromek s dek... | 45.00 € | **41.50 €** | 34.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester baterií KONNWEI KW600 | 46.00 € | **42.50 €** | 35.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice TechnoLine WS 6762 | 47.00 € | **43.50 €** | 38.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Autodiagnostika SIXTOL SX ONE | 44.00 € | **40.50 €** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 525 | 46.00 € | **42.50 €** | 41.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 214.00 € | **210.50 €** | 210.79 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **92.00 €** | 92.32 € | stávame sa najlacnejší |
| Mascom Monoblok Quad LNB MCM4QS01HD | 46.50 € | **43.00 €** | 43.41 € | stávame sa najlacnejší |
| DOMO DO8311TP | 70.50 € | **67.00 €** | 67.49 € | stávame sa najlacnejší |
| Zelmer ZNT0300 | 14.99 € | **11.50 €** | 11.84 € | stávame sa najlacnejší |
| ETA 732790000 | 23.99 € | **20.50 €** | 20.77 € | stávame sa najlacnejší |
| Breville VST071X | 75.90 € | **72.50 €** | 58.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TrueLife RelaxBack B6 Charge | 73.90 € | **70.50 €** | 56.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 GARNI 201 OneCare | 94.90 € | **91.50 €** | 91.71 € | stávame sa najlacnejší |
| Prodlužovací kabel NEDIS WIFIP313EWT SmartLife /2m/Wi-Fi/... | 43.90 € | **40.50 €** | 29.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka akumulátorů KONNWEI RC-10 pro Pb, AGM, GEL, LiF... | 40.90 € | **37.50 €** | 27.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prodlužovací kabel spojka Solight PS09 | 41.90 € | **38.50 €** | 29.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 071S Bezdrátové čidlo pro měření teploty a relativn... | 39.90 € | **36.50 €** | 33.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ JOY 2 KM0561 | 43.90 € | **40.50 €** | 39.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester rotace fází a indikátor otáček motoru Voltcraft VC-32 | 40.90 € | **37.50 €** | 37.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 460 s FM radiopřijímačem | 49.90 € | **46.50 €** | 46.75 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 57.90 € | **54.50 €** | 54.76 € | stávame sa najlacnejší |
| Zircon Monoblock Quad M-0443 Slim line Skylink | 40.00 € | **36.90 €** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo, 2x AA | 11.00 € | **7.90 €** | 7.99 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klika, so... | 73.00 € | **69.90 €** | 69.99 € | stávame sa najlacnejší |
| Koma EC04S - ECG VP 878 SMS | 5.69 € | **2.60 €** | 2.64 € | stávame sa najlacnejší |
| Koma EC13S - ECG | 5.69 € | **2.60 €** | 2.64 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **12.90 €** | 12.98 € | stávame sa najlacnejší |
| Electrolux E203S | 8.99 € | **5.90 €** | 5.99 € | stávame sa najlacnejší |
| Ariete J-Force 2753 | 65.90 € | **62.90 €** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax Sounder2 | 67.90 € | **64.90 €** | 41.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V258 LED vánoční dekorace adventní kalnedář - ho... | 41.50 € | **38.50 €** | 22.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA EP 5720 F0 | 70.50 € | **67.50 €** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION SmartKettle Onyx black | 63.90 € | **60.90 €** | 54.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S9100B | 66.50 € | **63.50 €** | 59.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice Solight TE81 | 34.50 € | **31.50 €** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice Solight TE80 | 35.50 € | **32.50 €** | 29.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY111B15 | 68.90 € | **65.90 €** | 63.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera IP venkovní Kruger&Matz Connect C80 Tuya Wi-Fi | 33.50 € | **30.50 €** | 28.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo GARNI 056H | 32.90 € | **29.90 €** | 28.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 395.50 € | **392.50 €** | 392.76 € | stávame sa najlacnejší |
| YAMAHA CD-S303 SILVER | 395.50 € | **392.50 €** | 392.76 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací prívod ... | 13.50 € | **10.50 €** | 10.86 € | stávame sa najlacnejší |
| REMINGTON D 5215 | 34.99 € | **32.00 €** | 32.13 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.00 €** | 10.31 € | stávame sa najlacnejší |
| ETA 960068020 | 9.29 € | **6.30 €** | 6.32 € | stávame sa najlacnejší |
| DOMO DO9176RK | 30.99 € | **28.00 €** | 25.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 160390000 | 19.99 € | **17.00 €** | 17.40 € | stávame sa najlacnejší |
| DOMO DO8708W | 73.90 € | **71.00 €** | 71.03 € | stávame sa najlacnejší |
| Remington S5901 Coconut | 35.90 € | **33.00 €** | 33.09 € | stávame sa najlacnejší |
| Koma EC23S Midea S8+ | 7.99 € | **5.20 €** | 5.21 € | stávame sa najlacnejší |
| DOMO DO9225G | 54.50 € | **51.90 €** | 48.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 365 Arcus s projekcí | 34.50 € | **31.90 €** | 29.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9149W | 51.50 € | **48.90 €** | 48.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice Solight TE81W | 34.50 € | **31.90 €** | 32.00 € | stávame sa najlacnejší |
| Solight 1V276 vánoční LED dekorace, dřevěný betlém s bare... | 30.00 € | **27.50 €** | 21.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V280 vánoční LED dekorace, kovový svícen | 33.00 € | **30.50 €** | 24.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční TechnoLine WT 536 | 35.00 € | **32.50 €** | 28.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED okenná reťaz snehuliaci, 6x LED, prísavná, 12... | 7.90 € | **5.40 €** | 2.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INVERTO Ultra - Quad HGLN 40 mm -  0,2 dB | 32.00 € | **29.50 €** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 465W s radiopřijímačem | 34.00 € | **31.50 €** | 30.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-346 venkovní DVB-T2 anténa | 35.00 € | **32.50 €** | 31.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED stropní světlo Solight WO8014 Penley | 32.00 € | **29.50 €** | 28.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TOMAN TT-7300 - sada ručního nářadí (73 ks) | 34.00 € | **31.50 €** | 30.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zircon Monoblok Twin M-0243 Slim line Skylink | 26.50 € | **24.00 €** | 23.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TOMAN TT-6900 - sada ručního nářadí (69 ks) | 31.00 € | **28.50 €** | 27.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SlowCook S500 - pomalý hrnec | 49.50 € | **47.00 €** | 46.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.50 €** | 49.54 € | stávame sa najlacnejší |
| Multipřepínač TeleTek 13/32 | 467.50 € | **465.00 €** | 465.23 € | stávame sa najlacnejší |
| Prodlužovací kabel na bubnu 50m ORNO OR-AE-13301/50M | 64.50 € | **62.00 €** | 62.25 € | stávame sa najlacnejší |
| Black&Decker BXAP60E | 94.50 € | **92.00 €** | 92.28 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.00 €** | 132.39 € | stávame sa najlacnejší |
| Meteorologická stanice WS 6462 | 52.00 € | **49.50 €** | 49.89 € | stávame sa najlacnejší |
| Beko VRT76325VW | 168.50 € | **166.00 €** | 166.40 € | stávame sa najlacnejší |
| SONY MDR-EX15APLI,modrá | 9.99 € | **7.50 €** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MAXXO CC465 | 7.99 € | **5.50 €** | 5.59 € | stávame sa najlacnejší |
| TEFAL MB 756 G 31 | 64.90 € | **62.50 €** | 62.90 € | stávame sa najlacnejší |
| SONY MDR-EX15APPI, růžová | 9.90 € | **7.50 €** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 508 | 53.90 € | **51.50 €** | 38.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Electric Kettle 17BC | 49.90 € | **47.50 €** | 39.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor kouře NEDIS WIFIDS21WT SmartLife, Wi-Fi | 28.90 € | **26.50 €** | 19.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BRAUN Silk-épil 5560 epilátor | 59.90 € | **57.50 €** | 52.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BRAUN Face 810 | 58.90 € | **56.50 €** | 54.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-323 V2 - set-top box DVB-T2 (H.265/HEVC) | 26.90 € | **24.50 €** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TOMAN TT-4700 - sada ručního nářadí (47 ks) | 28.90 € | **26.50 €** | 25.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun Series X XT5100 | 46.90 € | **44.50 €** | 43.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZFS1017 | 54.90 € | **52.50 €** | 52.65 € | stávame sa najlacnejší |
| ScanPart Univerzální tekutý odvápňovač 1 | 7.99 € | **5.60 €** | 5.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA HFET10 Filtr pro ETA 0231, 1231 | 6.99 € | **4.60 €** | 4.63 € | stávame sa najlacnejší |
| KOMA HFEX1 - HEPA filtr Electrolux | 9.99 € | **7.60 €** | 7.63 € | stávame sa najlacnejší |
| Koma EC16S - ECG VP 4102S SMS | 4.99 € | **2.60 €** | 2.64 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre DY08, learning code | 8.50 € | **6.20 €** | 6.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MAXXO CC002 | 7.99 € | **5.70 €** | 5.78 € | stávame sa najlacnejší |
| MAXXO CC461 | 7.99 € | **5.70 €** | 5.78 € | stávame sa najlacnejší |
| Maxxo CC693 | 8.99 € | **6.80 €** | 6.83 € | stávame sa najlacnejší |
| Electrolux E206S | 8.99 € | **6.80 €** | 6.89 € | stávame sa najlacnejší |
| BWT fitrační konvice VIDA MEI Petrol | 11.99 € | **9.80 €** | 9.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S9300 | 53.00 € | **50.90 €** | 35.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TOMAN TT-3100 - sada ručního nářadí (31 ks) | 30.00 € | **27.90 €** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal VC204810 | 52.00 € | **49.90 €** | 47.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9135G | 48.00 € | **45.90 €** | 45.99 € | stávame sa najlacnejší |
| Beko VRT74225VI | 155.00 € | **152.90 €** | 153.00 € | stávame sa najlacnejší |
| ETA 632090000 | 13.99 € | **11.90 €** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 632090020 | 13.99 € | **11.90 €** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic RP-TCM115E-W, White | 12.59 € | **10.50 €** | 9.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 434190000 | 11.99 € | **9.90 €** | 9.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA ML02PL - Miele F,J,M SMS | 7.99 € | **5.90 €** | 5.95 € | stávame sa najlacnejší |
| REMINGTON D 2400 | 15.99 € | **13.90 €** | 13.98 € | stávame sa najlacnejší |
| Electrolux EF 55 | 6.99 € | **4.90 €** | 4.99 € | stávame sa najlacnejší |
| Bravo Ginno B-4463 černý | 45.90 € | **43.90 €** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V227-4 LED vánoční závěs hvězdy | 22.50 € | **20.50 €** | 14.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 24360-70 Inspire Kettle | 44.50 € | **42.50 €** | 36.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alma 1660 Dongle - set-top box DVB-T2 (H.265/HEVC) | 22.50 € | **20.50 €** | 15.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDFM2225BK přenosné FM, Bluetooth, napájení b... | 24.90 € | **22.90 €** | 17.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V275 vánoční LED dekorace, dřevěný betlém | 23.90 € | **21.90 €** | 16.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester baterií KONNWEI BK100 | 26.90 € | **24.90 €** | 20.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-222 Dongle - set-top box DVB-T2 H.265 | 29.50 € | **27.50 €** | 23.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V265 vánoční LED dekorace, svícen s hvězdami | 22.90 € | **20.90 €** | 16.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION ThermoKettle TK5 Onyx black | 45.50 € | **43.50 €** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Slow Cooker 3500SB | 51.50 € | **49.50 €** | 46.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 235BK | 25.00 € | **23.00 €** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla EasyCook AE300 | 44.50 € | **42.50 €** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL KI170D40 | 44.90 € | **42.90 €** | 40.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION ThermoKettle TK5 Polar white | 45.50 € | **43.50 €** | 41.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wattmetr a měřič spotřeby elektrické energie na DIN lištu... | 26.50 € | **24.50 €** | 22.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Svěrák Basetech 1553063 | 24.90 € | **22.90 €** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0913-B Powerbanka 10000mAh MagSafe | 22.50 € | **20.50 €** | 19.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo GARNI 063H | 23.50 € | **21.50 €** | 20.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 110H bezdrátové čidlo | 23.50 € | **21.50 €** | 21.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 092H bezdrátové čidlo | 28.50 € | **26.50 €** | 26.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **50.50 €** | 50.73 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, časov... | 14.50 € | **12.50 €** | 12.77 € | stávame sa najlacnejší |
| Digitální osobní váha ADE BA 1600 FITvigo s Bluetooth  (1... | 58.50 € | **56.50 €** | 56.78 € | stávame sa najlacnejší |
| Meteostanice TESLA Device MS360se - chytrá WiFi s externí... | 61.50 € | **59.50 €** | 59.79 € | stávame sa najlacnejší |
| Alcad CA-215 | 28.00 € | **26.00 €** | 26.41 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0,7m, ... | 26.00 € | **24.00 €** | 24.44 € | stávame sa najlacnejší |
| Tassimo Jacobs Café au Lait 16x11,5g | 8.49 € | **6.50 €** | 4.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY ICFC1W | 36.90 € | **35.00 €** | 29.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester a nabíječka baterií KONNWEI KW510 3v1 | 49.90 € | **48.00 €** | 48.01 € | stávame sa najlacnejší |
| Budík digitální projekční GARNI 140 čas a vnitřní teplota | 25.90 € | **24.00 €** | 24.18 € | stávame sa najlacnejší |
| Koma CP01S - Concept 9000 SMS | 6.99 € | **5.10 €** | 5.14 € | stávame sa najlacnejší |
| Maxxo CC008 | 7.99 € | **6.10 €** | 6.16 € | stávame sa najlacnejší |
| ScanPart Čistící tabletky 6ks na vodní k | 5.99 € | **4.20 €** | 4.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma AG05S - AEG č. 5 Vampyrino SMS | 5.99 € | **4.20 €** | 4.22 € | stávame sa najlacnejší |
| Koma ET18S Eta Capolo | 5.99 € | **4.20 €** | 4.22 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.70 € | **4.00 €** | 3.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma DW02S - Daewoo RC105 SMS | 5.99 € | **4.30 €** | 4.40 € | stávame sa najlacnejší |
| Koma RW02S-Rowenta Compacteo SMS | 5.99 € | **4.30 €** | 4.40 € | stávame sa najlacnejší |
| KOMA PAR1 - Univerzální parket. hubice | 9.99 € | **8.30 €** | 8.39 € | stávame sa najlacnejší |
| ROWENTA AC 2320 | 43.50 € | **41.90 €** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V257 LED vánoční dekorace sněhulák | 20.50 € | **18.90 €** | 14.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V277 vánoční LED dekorace, kolotoč, otáčející se | 19.50 € | **17.90 €** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V239 LED vánoční dekorace věnec | 18.50 € | **16.90 €** | 13.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V238 LED vánoční dekorace stromek | 20.50 € | **18.90 €** | 15.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper Bt603-Y Vaflovač 1000W | 33.50 € | **31.90 €** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AI - 223 linkový zesilovač se 2 výstupy / G=25dB | 20.50 € | **18.90 €** | 18.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0911 Powerbanka 5000mAh MagSafe | 20.50 € | **18.90 €** | 18.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **18.90 €** | 18.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-40490 | 33.50 € | **31.90 €** | 31.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bellissima 11874 Creativity žehlička | 30.50 € | **28.90 €** | 28.97 € | stávame sa najlacnejší |
| Solight 1V256 LED vánoční dekorace vesnička | 17.50 € | **15.90 €** | 12.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 5.10 € | **3.50 €** | 3.54 € | stávame sa najlacnejší |
| Koma HV20S - Hoover Pura Power SMS | 5.99 € | **4.40 €** | 1.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma AQ02S - AquaVac Multi PRO SMS | 7.99 € | **6.40 €** | 6.43 € | stávame sa najlacnejší |
| Bezdrátový hlásič pohybu gong Solight 1D22 | 22.00 € | **20.50 €** | 17.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Lea B-4574 červená | 30.50 € | **29.00 €** | 25.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Plus Neo TT7465 | 40.00 € | **38.50 €** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada kabelových oček, fastonů a smršťovacích bužírek 678ks | 16.50 € | **15.00 €** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 32F bezdrátové čidlo | 16.50 € | **15.00 €** | 14.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časovač, 6... | 12.50 € | **11.00 €** | 11.12 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.50 € | **95.00 €** | 95.22 € | stávame sa najlacnejší |
| Bellissima 11872 B-TRAVEL Cestovní fén | 31.50 € | **30.00 €** | 30.27 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, prívo... | 15.00 € | **13.50 €** | 13.85 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 519 | 35.00 € | **33.50 €** | 33.90 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, otáča... | 12.50 € | **11.00 €** | 11.49 € | stávame sa najlacnejší |
| Panasonic RP-TCM115E-A, Blue | 11.99 € | **10.50 €** | 9.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA UF01 uhlíkový filtr odsavač 60x50cm | 6.99 € | **5.50 €** | 5.57 € | stávame sa najlacnejší |
| Koma SB01S-Electrolux Universal BAG | 6.79 € | **5.30 €** | 5.38 € | stávame sa najlacnejší |
| Evolveo Shark, aktivní venkovní anténa | 26.99 € | **25.50 €** | 22.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 750 | 119.90 € | **118.50 €** | 118.89 € | stávame sa najlacnejší |
| Solight 1V278 vánoční LED dekorace, kometa | 14.90 € | **13.50 €** | 10.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ardes BBQ 01 gril | 35.90 € | **34.50 €** | 20.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V250 LED vánoční dekorace městečko s kostelem | 17.90 € | **16.50 €** | 12.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V266 vánoční dekorace lucerna s LED svíčkou | 17.90 € | **16.50 €** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V227 LED vánoční závěs hvězdy | 16.90 € | **15.50 €** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SlowCook S350 - pomalý hrnec | 31.90 € | **30.50 €** | 27.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bellissima 11886 Ceramic Air Kulmofén | 36.90 € | **35.50 €** | 33.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 23.90 € | **22.50 €** | 22.52 € | stávame sa najlacnejší |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 23.90 € | **22.50 €** | 22.54 € | stávame sa najlacnejší |
| RUSSELL HOBBS 21391-56/RH | 50.90 € | **49.50 €** | 49.55 € | stávame sa najlacnejší |
| Grundig HS7034 | 19.90 € | **18.50 €** | 18.56 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľkový ... | 18.90 € | **17.50 €** | 17.70 € | stávame sa najlacnejší |
| EZIDRI Sada sít pro SNACKMAKER FD500 | 26.90 € | **25.50 €** | 25.84 € | stávame sa najlacnejší |
| REMINGTON S 8670 | 39.90 € | **38.50 €** | 38.89 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.90 € | **18.50 €** | 18.89 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.50 €** | 33.90 € | stávame sa najlacnejší |
| Koma EI09S - EIO č. 9 Futura SMS | 5.99 € | **4.60 €** | 4.63 € | stávame sa najlacnejší |
| Koma HV30S - Hoover Telios SMS | 5.99 € | **4.60 €** | 4.63 € | stávame sa najlacnejší |
| Koma HV58S - Hoover Sprint SMS | 5.99 € | **4.60 €** | 4.63 € | stávame sa najlacnejší |
| Koma RW03S - Rowenta Silence Force | 5.99 € | **4.60 €** | 4.63 € | stávame sa najlacnejší |
| Koma ML01S - Miele H,G,N SMS | 6.99 € | **5.60 €** | 5.67 € | stávame sa najlacnejší |
| Koma ML02S - Miele F,J,M SMS | 6.99 € | **5.60 €** | 5.67 € | stávame sa najlacnejší |
| Electrolux ES 17 | 5.99 € | **4.60 €** | 4.69 € | stávame sa najlacnejší |
| Koma EC10S | 3.99 € | **2.60 €** | 2.64 € | stávame sa najlacnejší |
| Koma EC11S - ECG | 3.99 € | **2.60 €** | 2.64 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3m prí... | 5.00 € | **3.70 €** | 3.79 € | stávame sa najlacnejší |
| Maxxo vakuovací sáčky 50ks 22 x 28cm | 9.99 € | **8.70 €** | 8.78 € | stávame sa najlacnejší |
| KOMA WB02PL-Rowenta Wonderbag | 7.99 € | **6.70 €** | 6.71 € | stávame sa najlacnejší |
| Koma DW03S - Daewoo RC 300 SMS | 5.59 € | **4.30 €** | 4.40 € | stávame sa najlacnejší |
| KOMA ET36S-SMART BAG-Concept | 5.99 € | **4.70 €** | 4.80 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m, 2x A... | 4.90 € | **3.70 €** | 3.79 € | stávame sa najlacnejší |
| Koma PR03S - Progress PC 3103 SMS | 5.39 € | **4.20 €** | 4.22 € | stávame sa najlacnejší |
| SANITAS SHK 28 | 32.00 € | **30.90 €** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO47 přepěťová ochrana | 15.00 € | **13.90 €** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO57 přepěťová ochrana | 15.00 € | **13.90 €** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO54 přepěťová ochrana | 14.00 € | **12.90 €** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V253 vánoční LED dekorace, modulární zimní vesnička | 10.90 € | **9.80 €** | 7.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 052H bezdrátové čidlo | 16.00 € | **14.90 €** | 14.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 163.00 € | **161.90 €** | 162.00 € | stávame sa najlacnejší |
| Koma DL12S - De Longhi XLence SMS | 5.69 € | **4.60 €** | 4.63 € | stávame sa najlacnejší |
| Koma AG28S - AEG č. 28 Vampyr SMS | 5.69 € | **4.60 €** | 4.68 € | stávame sa najlacnejší |
| Electrolux EF 54 | 3.99 € | **2.90 €** | 2.92 € | stávame sa najlacnejší |
| Koma ET16S - ETA Aston 1465 SMS | 4.99 € | **3.90 €** | 3.99 € | stávame sa najlacnejší |
| Koma ET33S - ETA Viva 1458 SMS | 4.99 € | **3.90 €** | 3.99 € | stávame sa najlacnejší |
| Koma EX02S - Electrolux Mondo SMS | 4.99 € | **3.90 €** | 3.99 € | stávame sa najlacnejší |
| Koma AG26S - AEG Vampyr SMS | 5.99 € | **4.90 €** | 4.91 € | stávame sa najlacnejší |
| Electrolux Menalux 6103 P | 5.99 € | **4.90 €** | 4.99 € | stávame sa najlacnejší |
| Rowenta ZR710001 | 26.50 € | **25.50 €** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PANASONIC RP-HF100ME-K černá 559395 | 21.50 € | **20.50 €** | 11.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR710101 | 19.50 € | **18.50 €** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI Síto pro FD1000 ULTRA | 14.50 € | **13.50 €** | 5.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0042A | 12.90 € | **11.90 €** | 3.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BRAUN Náhradní náplň CCR4 | 23.90 € | **22.90 €** | 15.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta SF1810F0 | 24.90 € | **23.90 €** | 16.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR177003 | 20.90 € | **19.90 €** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26470-56 | 20.90 € | **19.90 €** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO62 přepěťová ochrana | 15.50 € | **14.50 €** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips BHS375/00 | 25.50 € | **24.50 €** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 4100 | 15.50 € | **14.50 €** | 11.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér 2,4GHz AMIKO WLN-881 (MT7601) 150Mbps s ... | 13.90 € | **12.90 €** | 10.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL ZP 300138 | 25.50 € | **24.50 €** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION AirSonic Star | 30.50 € | **29.50 €** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Kettle K1 Crystal Glass W | 26.50 € | **25.50 €** | 23.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Qualita Oro 500 g | 14.90 € | **13.90 €** | 12.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 260 | 14.50 € | **13.50 €** | 12.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá WiFi zásuvka Solight DTY01WIFI s měřením spotřeby | 14.00 € | **13.00 €** | 12.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panini grill TEESA TSA3234, toaster, opékač 1000W, 3 funkce | 18.50 € | **17.50 €** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester elektrických zásuvek RCD UNI-T UT07B-EU | 11.50 € | **10.50 €** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzální dálkový ovladač SUPERIOR LG – Bluetooth Voice... | 11.90 € | **10.90 €** | 10.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzální dálkový ovladač SUPERIOR Samsung – Bluetooth ... | 11.90 € | **10.90 €** | 10.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 030H bezdrátové čidlo | 13.90 € | **12.90 €** | 12.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Časovač (minutka) GARNI KT2 | 17.50 € | **16.50 €** | 16.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips SHP2500/10 | 21.90 € | **20.90 €** | 20.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-P101CUD100 | 34.90 € | **33.90 €** | 34.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 12.61 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, prívo... | 18.00 € | **17.00 €** | 17.12 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 235BS | 25.00 € | **24.00 €** | 24.19 € | stávame sa najlacnejší |
| Zvonek domovní bezdrátový REBEL URZ3264 | 19.00 € | **18.00 €** | 18.19 € | stávame sa najlacnejší |
| Alcad CA-210 | 27.00 € | **26.00 €** | 26.24 € | stávame sa najlacnejší |
| Alcad AI-200 zesilovač | 17.00 € | **16.00 €** | 16.25 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, prívod... | 13.00 € | **12.00 €** | 12.27 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 14.00 € | **13.00 €** | 13.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, prívod... | 13.00 € | **12.00 €** | 12.28 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.00 € | **31.00 €** | 31.29 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x mini ... | 14.00 € | **13.00 €** | 13.29 € | stávame sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 100mm x 20m | 14.00 € | **13.00 €** | 13.29 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 10.33 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predné, za... | 11.00 € | **10.00 €** | 10.33 € | stávame sa najlacnejší |
| VIRONE 350x350 plastová revizní dvířka - černá | 16.00 € | **15.00 €** | 15.42 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell DGW | 21.00 € | **20.00 €** | 20.47 € | stávame sa najlacnejší |
| Koma ET29S - ETA Silent 1471 SMS | 5.99 € | **5.00 €** | 5.03 € | stávame sa najlacnejší |
| Koma ZE01PL - ZELMER Cobra | 5.99 € | **5.00 €** | 5.03 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 65.29 € | stávame sa najlacnejší |
| Stykač Sentai GMC-18 3x400V/18A 3P na DIN lištu | 11.90 € | **11.00 €** | 10.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks, 15x... | 10.00 € | **9.10 €** | 9.17 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3 x AA... | 3.30 € | **2.40 €** | 2.44 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 100x mini LED, 10m, 3 ... | 3.30 € | **2.40 €** | 2.44 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 59.90 € | **59.00 €** | 59.09 € | stávame sa najlacnejší |
| Zásuvkový termostat s časovým spínačem KT3100 | 16.90 € | **16.00 €** | 16.19 € | stávame sa najlacnejší |
| Zelmer rychlovarná konvice ZCK1275 | 39.90 € | **39.00 €** | 39.21 € | stávame sa najlacnejší |
| Salente IceQueen černá | 19.90 € | **19.00 €** | 19.49 € | stávame sa najlacnejší |
| Koma ET23S - ETA Nobel 1861 | 4.99 € | **4.10 €** | 4.11 € | stávame sa najlacnejší |
| Koma EX07S - Electrolux Energica SMS | 4.99 € | **4.10 €** | 4.11 € | stávame sa najlacnejší |
| Koma ZE02S - Zelmer Meteor SMS | 4.99 € | **4.10 €** | 4.11 € | stávame sa najlacnejší |
| Koma ZE04S - Zelmer Twist, Twister SMS | 4.99 € | **4.10 €** | 4.11 € | stávame sa najlacnejší |
| Koma ZE06S - ZELMER Z-BAG SMS | 4.99 € | **4.10 €** | 4.11 € | stávame sa najlacnejší |
| Koma BS67S - Bosch Typ G SMS | 5.99 € | **5.10 €** | 5.14 € | stávame sa najlacnejší |
| MAXXO rolky 2x28cmx3m | 6.99 € | **6.10 €** | 6.18 € | stávame sa najlacnejší |
| Maxxo náhradní sáčky 30ks 28x35cm | 9.99 € | **9.10 €** | 9.19 € | stávame sa najlacnejší |
| Koma EC05S - ECG VP 901 SMS | 3.49 € | **2.60 €** | 2.64 € | stávame sa najlacnejší |
| Bezdotykový spínač ORNO OR-CR-268 | 9.30 € | **8.50 €** | 8.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stykač Showpelec CJX3-20 230V/20A 2P na DIN lištu | 10.50 € | **9.70 €** | 9.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EF 1 | 3.99 € | **3.20 €** | 3.22 € | stávame sa najlacnejší |
| Koma ZE05S - Zelmer Vodník SMS | 3.99 € | **3.20 €** | 3.23 € | stávame sa najlacnejší |
| MAXXO BIO odvápňovač 250ml | 3.99 € | **3.20 €** | 3.26 € | stávame sa najlacnejší |
| Solight 1V268 vánoční LED dekorace, hvězda stolní, pletená | 7.70 € | **7.00 €** | 5.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V232 vánoční dekorace dřevěná lucerna s LED svíčkou | 10.00 € | **9.30 €** | 7.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT filtrační konvice VIDA MEI bílá | 10.50 € | **9.80 €** | 9.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM1249 USB-C - HDMI | 8.60 € | **7.90 €** | 8.00 € | stávame sa najlacnejší |
| ETA 234890300 | 5.99 € | **5.30 €** | 5.33 € | stávame sa najlacnejší |
| Zelmer ZFD1010 | 58.50 € | **57.90 €** | 57.93 € | stávame sa najlacnejší |
| Poštovní schránka VIRONE MB-2/A HAITI  s tubusem na novin... | 23.50 € | **22.90 €** | 22.94 € | stávame sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 40mm x 20m | 8.80 € | **8.20 €** | 8.27 € | stávame sa najlacnejší |
| Solight 1V267 vánoční LED dekorace zasněžené zimní květiny | 6.70 € | **6.10 €** | 4.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovládač Tesla TE-323 originální | 7.40 € | **6.80 €** | 6.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM0348 5G, USB - USB-C 1m | 7.90 € | **7.30 €** | 7.31 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED, čas... | 7.90 € | **7.30 €** | 7.37 € | stávame sa najlacnejší |
| Electrolux E200S | 12.50 € | **11.90 €** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lapač hmyzu TEESA TSA0219 | 7.60 € | **7.00 €** | 4.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO46 přepěťová ochrana | 11.50 € | **10.90 €** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot REBEL VOICE BLUE | 11.50 € | **10.90 €** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čelovka Solight WH27 | 7.30 € | **6.70 €** | 5.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON CI1A119 19mmm Curling Tong | 15.50 € | **14.90 €** | 14.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA MOB360 Břity pro OneBlade 360, 2ks | 15.50 € | **14.90 €** | 14.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem GARNI 151TH | 11.50 € | **10.90 €** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amiko dálkový ovladač 8150, 8240, 8320, 8330, 8340, 8820,... | 11.50 € | **10.90 €** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač Amiko CCC - originál | 11.50 € | **10.90 €** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 bílá | 16.50 € | **15.90 €** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 černá | 16.50 € | **15.90 €** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 modrá | 16.50 € | **15.90 €** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.50 € | **11.90 €** | 11.91 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 9.40 € | **8.80 €** | 8.85 € | stávame sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 50mm x 20m | 9.50 € | **8.90 €** | 8.98 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, prívod... | 9.00 € | **8.40 €** | 8.49 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **104.90 €** | 105.00 € | stávame sa najlacnejší |
| Koma ET30S - ETA Sting 430 SMS | 4.69 € | **4.10 €** | 4.17 € | stávame sa najlacnejší |
| Koma ET28S - ETA Trino 1454 SMS | 4.49 € | **3.90 €** | 3.99 € | stávame sa najlacnejší |
| ROWENTA ZR005901 | 14.00 € | **13.50 €** | 5.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT VIDA MEI bílá, 2,6l + 3 filtry | 19.00 € | **18.50 €** | 14.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V236 vánoční LED dřevěná dekorace, stromek | 11.00 € | **10.50 €** | 8.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 029 bezdrátové čidlo | 12.00 € | **11.50 €** | 10.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlačítko bezdrátové Solight 1L74T | 6.70 € | **6.20 €** | 5.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ5004 A60 E27 7,2W | 5.90 € | **5.40 €** | 4.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA MOB360 Břity pro OneBlade 360, 1ks | 9.70 € | **9.20 €** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM1269-1P USB-C - USB-C  1m | 6.40 € | **5.90 €** | 5.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s domče... | 7.10 € | **6.60 €** | 6.63 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prívod 3... | 7.30 € | **6.80 €** | 6.88 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 30.08 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá, 1,5m... | 4.20 € | **3.70 €** | 3.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m, 3 x... | 3.10 € | **2.60 €** | 2.69 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 25.00 € | **24.50 €** | 24.61 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 25.00 € | **24.50 €** | 24.61 € | stávame sa najlacnejší |
| Detektor kouře ORNO OR-DC-637 | 12.50 € | **12.00 €** | 12.12 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **17.00 €** | 17.13 € | stávame sa najlacnejší |
| VIRONE 400x400 plastová revizní dvířka - černá | 17.00 € | **16.50 €** | 16.67 € | stávame sa najlacnejší |
| KOMA MOB360 Břity pro OneBlade 360, 3ks | 21.50 € | **21.00 €** | 21.20 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela, 30cm... | 16.50 € | **16.00 €** | 16.27 € | stávame sa najlacnejší |
| Salente Friteoiicz | 54.50 € | **54.00 €** | 54.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 23.29 € | stávame sa najlacnejší |
| LENCO ICR-230-1 | 22.50 € | **22.00 €** | 22.31 € | stávame sa najlacnejší |
| Prodlužovací kabel ORNO OR-AE-13297/3M | 12.50 € | **12.00 €** | 12.33 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.50 €** | 34.90 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.50 € | **63.00 €** | 63.42 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15cm, si... | 13.50 € | **13.00 €** | 13.43 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.50 € | **48.00 €** | 48.46 € | stávame sa najlacnejší |
| Tefal CY851130 | 202.50 € | **202.00 €** | 202.49 € | stávame sa najlacnejší |
| ETA 433790000 | 11.99 € | **11.50 €** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart Čistící tabletky 10ks | 4.99 € | **4.50 €** | 3.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma EX06S - Electrolux XIO SMS | 4.99 € | **4.50 €** | 4.51 € | stávame sa najlacnejší |
| Tesla AirCook & Grill QG600 | 105.90 € | **105.50 €** | 105.66 € | stávame sa najlacnejší |
| LED žárovka SOLIGHT WZ5003 A60 E27 5,0W | 4.90 € | **4.50 €** | 4.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO7276S-SET2 | 10.90 € | **10.50 €** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas, biely | 5.20 € | **4.80 €** | 4.83 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, 1,5m,... | 4.90 € | **4.50 €** | 4.57 € | stávame sa najlacnejší |
| Kabel KRUGER & MATZ KM1269-1BL USB-C - USB-C  1m | 6.40 € | **6.00 €** | 6.09 € | stávame sa najlacnejší |
| Solight LED snehuliak vonkajšií 40LED, teplá beila, IP44,... | 11.90 € | **11.50 €** | 11.87 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a hnedá... | 6.10 € | **5.70 €** | 5.73 € | stávame sa najlacnejší |
| VIRONE 250x300 plastová revizní dvířka - černá | 7.80 € | **7.40 €** | 7.48 € | stávame sa najlacnejší |
| VIRONE 300x300 plastová revizní dvířka - černá | 8.20 € | **7.80 €** | 7.90 € | stávame sa najlacnejší |
| Zásuvka ORNO OR-AE-1346 na kabel trojnásobná, IP44, černá | 8.70 € | **8.30 €** | 8.31 € | stávame sa najlacnejší |
| Ufesa DC Essential SC8310 | 25.90 € | **25.50 €** | 25.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 26.63 € | stávame sa najlacnejší |
| Bravo B-4227 Kulmofén stříbrná-černý | 18.90 € | **18.50 €** | 18.67 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.50 €** | 58.67 € | stávame sa najlacnejší |
| Remington CI5519 | 33.90 € | **33.50 €** | 33.81 € | stávame sa najlacnejší |
| Koma KF02 - Filtr do kávovaru č. 2 | 2.99 € | **2.60 €** | 2.62 € | stávame sa najlacnejší |
| Kabel KRUGER & MATZ KM1268-1BL USB - USB-C  1m | 4.20 € | **3.90 €** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM1268-1P USB - USB-C  1m | 4.20 € | **3.90 €** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m, 2x AA | 4.20 € | **3.90 €** | 3.94 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 10W, E27, 3000K, 270... | 1.30 € | **1.00 €** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto LUNGO INTENSO 16Cap | 6.30 € | **6.00 €** | 4.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| STARBUCKS Caffe Latte 12cap | 6.30 € | **6.00 €** | 4.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tassimo Jacobs Caffe Crema Classico16x7g | 6.80 € | **6.50 €** | 5.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto ESPRESSO 16Cap | 6.30 € | **6.00 €** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto NESQUIK 16Cap | 6.30 € | **6.00 €** | 4.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® Dolce Gusto® Café au Lait 16 ks | 6.30 € | **6.00 €** | 4.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® Dolce Gusto® Latte Macch 16ks | 6.30 € | **6.00 €** | 4.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAPPUCCINO 16Cap | 6.30 € | **6.00 €** | 5.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CORTADO 16Cap | 6.30 € | **6.00 €** | 5.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ535 E27 22W | 4.30 € | **4.00 €** | 3.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ536 E27 22W | 4.30 € | **4.00 €** | 3.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé DG Grande New York kapsle 18 ks | 6.30 € | **6.00 €** | 5.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA - ND Nástavec na tvrdé ETA141787104 | 6.20 € | **5.90 €** | 5.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM1262  USB-C - USB-A 0,5m | 4.60 € | **4.30 €** | 4.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEPER BEP-90349 | 6.50 € | **6.20 €** | 6.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3m prí... | 5.00 € | **4.70 €** | 4.71 € | stávame sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 20mm x 20m | 4.80 € | **4.50 €** | 4.51 € | stávame sa najlacnejší |
| VIRONE 150x300 plastová revizní dvířka - černá | 5.60 € | **5.30 €** | 5.39 € | stávame sa najlacnejší |
| EZIDRI Síťka pro FD1000 ULTRA | 5.30 € | **5.00 €** | 5.09 € | stávame sa najlacnejší |
| VIRONE 200x200 plastová revizní dvířka - černá | 5.00 € | **4.70 €** | 4.80 € | stávame sa najlacnejší |
| Koma ET19S - ETA Domino 1419 SMS | 3.99 € | **3.70 €** | 3.71 € | stávame sa najlacnejší |
| Koma ET20S - ETA Draco, Arcus  SMS | 4.49 € | **4.20 €** | 4.22 € | stávame sa najlacnejší |
| L'OR COLOMBIA 10ks kapsle | 4.50 € | **4.30 €** | 3.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| L'OR INDIA 10ks kapsle | 4.50 € | **4.30 €** | 3.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ533 E27 18W | 3.00 € | **2.80 €** | 2.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ534 E27 18W | 3.00 € | **2.80 €** | 2.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový kabel H05RR-F 3G2,5 (CGSG)  3x2,5 guma, venkovní | 2.70 € | **2.50 €** | 2.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| L'OR Lungo Elegante 10ks kapsle | 4.50 € | **4.30 €** | 3.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 10mm x 20m | 2.70 € | **2.50 €** | 2.51 € | stávame sa najlacnejší |
| VIRONE 200x250 plastová revizní dvířka - černá | 5.40 € | **5.20 €** | 5.22 € | stávame sa najlacnejší |
| VIRONE 250x250 plastová revizní dvířka - černá | 6.40 € | **6.20 €** | 6.23 € | stávame sa najlacnejší |
| Tassimo Jacobs Cappuccino classico 260g | 6.80 € | **6.60 €** | 6.63 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x mini ... | 3.10 € | **2.90 €** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, 2x AA... | 2.10 € | **1.90 €** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, 2x AA... | 2.10 € | **1.90 €** | 1.94 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x AA, ... | 2.60 € | **2.40 €** | 2.44 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m, 3 x ... | 2.60 € | **2.40 €** | 2.44 € | stávame sa najlacnejší |
| VIRONE 150x200 plastová revizní dvířka - černá | 4.30 € | **4.10 €** | 4.14 € | stávame sa najlacnejší |
| VIRONE 200x300 plastová revizní dvířka - černá | 5.80 € | **5.60 €** | 5.64 € | stávame sa najlacnejší |
| Nabíječka USB KRUGER & MATZ KM0851 | 6.80 € | **6.60 €** | 6.64 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda červená, závesná, 60cm, 20x ... | 4.50 € | **4.30 €** | 4.37 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425lm, biela | 1.10 € | **0.90 €** | 0.99 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595lm, biela | 1.20 € | **1.00 €** | 1.09 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťaz, 1m... | 2.40 € | **2.20 €** | 2.21 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m, 2x AA | 3.30 € | **3.10 €** | 3.14 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, 2x AA... | 2.40 € | **2.20 €** | 2.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 funkci... | 3.90 € | **3.70 €** | 3.79 € | stávame sa najlacnejší |
| Starbucks White Mocha 12 ks | 6.10 € | **5.90 €** | 4.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, batéria... | 10.00 € | **9.80 €** | 9.90 € | stávame sa najlacnejší |
| Koma ET07S - ETA Optimo 1406, Astro | 3.19 € | **3.00 €** | 3.07 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 4000K, 150... | 5.20 € | **5.10 €** | 5.18 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 6000K, 150... | 5.20 € | **5.10 €** | 5.18 € | stávame sa najlacnejší |
| Koma TF01-Tukový filtr do odsávačů par | 4.20 € | **4.10 €** | 4.18 € | stávame sa najlacnejší |
| LED žárovka SOLIGHT WZ509A-2 A60 E27 12W | 2.10 € | **2.00 €** | 1.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ507A-2 A60 E27 12W | 2.10 € | **2.00 €** | 1.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ508A-2 A60 E27 12W | 2.10 € | **2.00 €** | 1.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ401A-1 E14 4W | 2.40 € | **2.30 €** | 1.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový vodič H07V-K 6,00 hnědá (CYA) | 1.50 € | **1.40 €** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový vodič H07V-K 6,00 světle modrá (CYA) | 1.50 € | **1.40 €** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový vodič H07V-K 6,00 šedá (CYA) | 1.50 € | **1.40 €** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový vodič H07V-K 6,00 tmavě modrá (CYA) | 1.50 € | **1.40 €** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E14, 30... | 2.50 € | **2.40 €** | 2.41 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 2.41 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 30x mini LED, 3m, 3 x ... | 2.10 € | **2.00 €** | 2.02 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, 3000K... | 2.10 € | **2.00 €** | 2.05 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K, 270°... | 1.10 € | **1.00 €** | 1.05 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K, 270°... | 1.10 € | **1.00 €** | 1.05 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré svet... | 2.00 € | **1.90 €** | 1.96 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720lm, b... | 1.30 € | **1.20 €** | 1.28 € | stávame sa najlacnejší |
| Adaptér NEDIS CCGB64915BK USB-C (M) - USB 3.0 (F) OTG, 5Gbps | 2.90 € | **2.80 €** | 2.88 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 6000K, 120... | 4.00 € | **3.90 €** | 3.99 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 9W, 1260lm, 4000K, 60cm... | 3.20 € | **3.10 €** | 3.19 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 4W, E14, 3000K, 340lm, b... | 0.70 € | **0.60 €** | 0.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260lm, biela | 1.00 € | **0.90 €** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510lm, b... | 1.00 € | **0.90 €** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510lm, b... | 1.00 € | **0.90 €** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K, 270°... | 0.90 € | **0.80 €** | 0.87 € | stávame sa najlacnejší |
| LED žárovka SOLIGHT WZ425-1 E14 8W miniglobe | 1.90 € | **1.80 €** | 1.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ414-1 E14 R50 5W | 1.70 € | **1.60 €** | 1.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ413-1 E14 R50 5W | 1.70 € | **1.60 €** | 1.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ506-2 A60 E27 10W | 1.90 € | **1.80 €** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ325A-1 GU10 7W | 1.70 € | **1.60 €** | 1.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ315A-1 GU10 3W | 1.40 € | **1.30 €** | 0.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový kabel H05RR-F 3G1,5 (CGSG)  3x1,5 guma, venkovní | 1.70 € | **1.60 €** | 1.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, biele svet... | 1.70 € | **1.60 €** | 1.61 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé biel... | 1.70 € | **1.60 €** | 1.61 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595lm, biela | 1.20 € | **1.10 €** | 1.18 € | stávame sa najlacnejší |
| VIRONE 100x100 plastová revizní dvířka - černá | 3.80 € | **3.70 €** | 3.72 € | stávame sa najlacnejší |
| VIRONE 100x150 plastová revizní dvířka - černá | 3.80 € | **3.70 €** | 3.72 € | stávame sa najlacnejší |
| VIRONE 150x150 plastová revizní dvířka - černá | 3.80 € | **3.70 €** | 3.72 € | stávame sa najlacnejší |
| Koma ET32S-ETA Windy 1416-1417 SMS | 3.80 € | **3.70 €** | 3.76 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Číny a Austrálie, typ I | 6.50 € | **6.40 €** | 6.47 € | stávame sa najlacnejší |
| Koma EX08S - Electrolux Masterlux SMS | 6.50 € | **6.40 €** | 6.48 € | stávame sa najlacnejší |
| Koma RW01S - Rowenta Ru,RB SMS | 6.50 € | **6.40 €** | 6.48 € | stávame sa najlacnejší |
| ELECTROLUX E2YH01 | 15.00 € | **14.90 €** | 14.98 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 3.29 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, biela, ... | 9.00 € | **8.90 €** | 8.99 € | stávame sa najlacnejší |
| Koma KF04 - Filtr do kávovaru č. 4 | 2.99 € | **2.90 €** | 2.92 € | stávame sa najlacnejší |

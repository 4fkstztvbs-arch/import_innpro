# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-07

Vstup: `premiumstoresk_20260807_1253.csv` (Heureka sortiment report, 5965 riadkov, **starý obchod** — číslami sa teraz nič nerozhoduje, toto je len ukážka výstupu nástroja `scripts/compare-heureka-prices.js`. Po spustení do ostrej prevádzky treba spustiť znova s čerstvým reportom.)

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **1912**
- Návrh **zvýšiť** cenu: **68** produktov
- Návrh **znížiť** cenu: **974** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **870** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **569**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (68)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Concept LA8383DS | 757.90 € | **843.00 €** | 10.0 % | **22.4 %** | 843.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| TELEtek multipřepínač 13/50 | 730.50 € | **793.50 €** | 15.0 % | **24.9 %** | 793.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 17/16 | 268.90 € | **306.50 €** | 15.0 % | **31.1 %** | 306.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 102A | 176.90 € | **202.50 €** | 10.2 % | **26.1 %** | 202.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes AVANT 12 PRO (532203) | 385.50 € | **404.90 €** | 15.0 % | **20.7 %** | 404.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 9/48 | 395.00 € | **413.50 €** | 15.0 % | **20.3 %** | 413.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 93.00 € | **104.50 €** | 15.0 % | **29.3 %** | 104.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 13/24 | 361.50 € | **371.50 €** | 15.0 % | **18.2 %** | 371.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 5/32 | 184.90 € | **193.50 €** | 15.1 % | **20.4 %** | 193.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amiko TSC-1270 | 153.90 € | **161.90 €** | 15.0 % | **21.0 %** | 161.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 3015 Arcus 2GEN s Wi-Fi | 410.00 € | **417.50 €** | 15.0 % | **17.1 %** | 417.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA TE-344 venkovní anténa | 21.50 € | **27.00 €** | 14.1 % | **43.3 %** | 27.12 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera IP venkovní NEDIS WIFICO22CWT / Wi-Fi / 3MP /... | 93.90 € | **98.90 €** | 15.0 % | **21.1 %** | 98.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| CA modul CAM 803 Nagravision CZ/SK VERZE s kartou Sk... | 40.50 € | **45.50 €** | 14.5 % | **28.7 %** | 45.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| König & Meyer 16311 BK | 7.40 € | **12.00 €** | 10.2 % | **78.7 %** | 12.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEM INS-02 napájecí výhybka k LEM zesilovačům | 16.00 € | **20.50 €** | 13.3 % | **45.2 %** | 20.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept OPK5160bc | 181.50 € | **186.00 €** | 10.3 % | **13.0 %** | 186.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 78.90 € | **82.50 €** | 14.9 % | **20.2 %** | 82.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.50 € | **89.00 €** | 15.2 % | **20.0 %** | 88.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 33.90 € | **36.50 €** | 14.9 % | **23.7 %** | 36.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEPER BEP-BT600-Y | 25.90 € | **27.50 €** | 10.6 % | **17.4 %** | 27.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní předfiltr GARNI PF 45T | 18.90 € | **20.50 €** | 15.2 % | **24.9 %** | 20.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prodlužovací kabel na bubnu 20m ORNO OR-AE-13293/20M | 77.50 € | **79.00 €** | 15.0 % | **17.2 %** | 78.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-C301ABE001 | 11.50 € | **13.00 €** | 10.9 % | **25.4 %** | 12.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní filtrační kapsle GARNI BS 45T | 16.00 € | **17.50 €** | 13.7 % | **24.4 %** | 17.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMIKO dálkové ovládání Univerzální, HD - SD | 13.00 € | **14.50 €** | 13.3 % | **26.4 %** | 14.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9038G | 33.50 € | **35.00 €** | 11.0 % | **16.0 %** | 35.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní UV sterilizační lampa GARNI UV 45T | 19.00 € | **20.50 €** | 14.3 % | **23.4 %** | 20.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zircon Monoblok Single M-0143 Slim line Skylink | 10.50 € | **11.90 €** | 14.3 % | **29.5 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anténní rozbočovač FV2  CLASS A | 2.60 € | **4.00 €** | 13.6 % | **74.8 %** | 3.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimetr UNI-T UT 89X | 34.50 € | **35.90 €** | 15.0 % | **19.6 %** | 35.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| TEFAL XA 800512 | 17.50 € | **18.90 €** | 10.3 % | **19.1 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní předfiltr GARNI PF 15T | 16.50 € | **17.90 €** | 14.8 % | **24.5 %** | 17.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24992-70 | 40.90 € | **41.90 €** | 10.5 % | **13.2 %** | 41.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 25400-56/RH | 49.90 € | **50.90 €** | 10.7 % | **12.9 %** | 50.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9260G | 61.50 € | **62.50 €** | 10.5 % | **12.3 %** | 62.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solac CT8627 | 56.50 € | **57.50 €** | 10.9 % | **12.9 %** | 57.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dálkový ovládač ALMA 2880 / TESLA TE-380 mini | 8.80 € | **9.80 €** | 15.6 % | **28.7 %** | 9.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26810-56/RH | 46.50 € | **47.50 €** | 10.6 % | **13.0 %** | 47.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **61.50 €** | 10.6 % | **12.5 %** | 61.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bellissima 11855 Sublime curls Kulma | 40.50 € | **41.50 €** | 10.1 % | **12.8 %** | 41.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dálkový ovladač Tesla TE-321 / Alma 2861 original | 7.00 € | **7.90 €** | 14.7 % | **29.5 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anténní rozbočovač FV3  CLASS A | 3.20 € | **4.10 €** | 14.6 % | **46.8 %** | 4.14 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bellissima 11737 My Pro Kartáč na Vlasy | 39.00 € | **39.90 €** | 10.0 % | **12.6 %** | 39.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bellissima 11738 My Pro Kulma na vlasy | 44.00 € | **44.90 €** | 10.1 % | **12.3 %** | 44.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Stojánek na kapsle Nespresso 40ks | 8.50 € | **9.30 €** | 10.4 % | **20.8 %** | 9.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dálkový ovládač Tesla TE-300, TE-301, TE-302, Alma 2820 | 7.60 € | **8.30 €** | 14.2 % | **24.7 %** | 8.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Remington PG2100 | 27.00 € | **27.50 €** | 10.3 % | **12.4 %** | 27.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Bella B -4430 bílozelená | 20.00 € | **20.50 €** | 10.0 % | **12.8 %** | 20.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Krimpovací kleště ORNO OR-AE-13136 na fastony - sada... | 10.00 € | **10.50 €** | 12.4 % | **18.1 %** | 10.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV lampa do lapače hmyzu TEESA TSA0219L | 2.60 € | **3.10 €** | 13.6 % | **35.5 %** | 3.13 € | dobehnutie 2. najlacnejšieho konkurenta |
| Remington HC3000GP | 43.50 € | **44.00 €** | 10.8 % | **12.0 %** | 44.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dálkový ovladač TESLA TE-3000 | 7.90 € | **8.30 €** | 14.5 % | **20.3 %** | 8.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 21353-56 | 8.20 € | **8.60 €** | 10.9 % | **16.3 %** | 8.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Adaptér KRUGER & MATZ KM1246 USB - USB-C | 2.90 € | **3.30 €** | 13.9 % | **29.6 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Adaptér KRUGER & MATZ KM1245 USB-C - 3,5 Jack stereo | 3.50 € | **3.90 €** | 14.7 % | **27.9 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Rony B-4777 červená | 23.50 € | **23.90 €** | 10.5 % | **12.4 %** | 23.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 22.50 € | **22.90 €** | 16.2 % | **18.3 %** | 22.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Isabel B-4426 antracit | 32.50 € | **32.90 €** | 11.0 % | **12.4 %** | 32.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Isabel B-4426 bílá | 32.50 € | **32.90 €** | 11.0 % | **12.4 %** | 32.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 21274-70 | 27.50 € | **27.90 €** | 10.8 % | **12.4 %** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Isabel B-4426 nerez | 32.50 € | **32.90 €** | 10.4 % | **11.8 %** | 32.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ION Kettle K3 Onyx black | 30.50 € | **30.90 €** | 11.3 % | **12.8 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ROWENTA ZR005201 | 8.70 € | **8.80 €** | 10.2 % | **11.4 %** | 8.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Nora B-4781 bílo/zelená | 19.90 € | **20.00 €** | 10.4 % | **11.0 %** | 20.13 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **33.00 €** | 15.4 % | **15.8 %** | 33.22 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kabel SYKFY 2x2x0,5 | 0.40 € | **0.50 €** | 4.9 % | **31.1 %** | 0.46 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Lavazza Crema E Gusto 250 g | 6.00 € | **6.10 €** | 10.1 % | **11.9 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (974)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| YAMAHA A-S3200 BLACK | 6799.00 € | **6002.00 €** | 23.8 % | **9.3 %** | 6002.47 € | stávame sa najlacnejší |
| YAMAHA R-N2000A BLACK | 3890.00 € | **3312.50 €** | 28.3 % | **9.3 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.50 €** | 27.9 % | **9.0 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N1000A BLACK | 1599.00 € | **1367.00 €** | 27.8 % | **9.3 %** | 1367.23 € | stávame sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1367.00 €** | 24.2 % | **6.2 %** | 1367.23 € | stávame sa najlacnejší |
| ELECTROLUX EEC67310L | 1039.00 € | **807.50 €** | 35.1 % | **5.0 %** | 677.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yamaha RX-A6A BLACK | 2799.00 € | **2576.00 €** | 18.7 % | **9.3 %** | 2576.04 € | stávame sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A LGH GREY | 889.00 € | **692.50 €** | 34.9 % | **5.1 %** | 658.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 64.7 % | **6.8 %** | 362.65 € | stávame sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A CRB GREY | 889.00 € | **695.90 €** | 34.2 % | **5.0 %** | 658.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6192AXL4 | 559.00 € | **366.50 €** | 67.6 % | **9.9 %** | 366.70 € | stávame sa najlacnejší |
| LG RC8TV9AVHN | 759.00 € | **568.00 €** | 40.3 % | **5.0 %** | 538.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX EEM63301L | 739.00 € | **550.50 €** | 41.1 % | **5.1 %** | 459.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX EIV634 | 529.00 € | **359.00 €** | 54.7 % | **5.0 %** | 320.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N800A BLACK | 1099.00 € | **942.50 €** | 23.4 % | **5.8 %** | 942.53 € | stávame sa najlacnejší |
| ELECTROLUX EIV 854 | 939.00 € | **787.50 €** | 25.2 % | **5.0 %** | 787.80 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 519.00 € | **373.00 €** | 48.9 % | **7.0 %** | 373.50 € | stávame sa najlacnejší |
| YAMAHA True X Bar 40A / SR-X40A LGH GREY | 599.00 € | **453.90 €** | 38.6 % | **5.0 %** | 282.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N600A BLACK | 799.00 € | **658.50 €** | 27.4 % | **5.0 %** | 620.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N600A SILVER | 799.00 € | **659.50 €** | 27.2 % | **5.0 %** | 620.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **343.50 €** | 48.7 % | **6.7 %** | 343.70 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.90 €** | 28.6 % | **6.0 %** | 634.00 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.90 €** | 88.1 % | **7.7 %** | 177.00 € | stávame sa najlacnejší |
| Gorenje NRK619DA2XL4 | 599.00 € | **468.90 €** | 34.2 % | **5.1 %** | 464.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENT6ME19S | 1039.00 € | **918.50 €** | 18.8 % | **5.1 %** | 797.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 007090010 | 629.99 € | **509.50 €** | 33.6 % | **8.1 %** | 509.58 € | stávame sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 639.00 € | **524.50 €** | 28.0 % | **5.1 %** | 485.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.50 €** | 28.6 % | **6.0 %** | 526.90 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **354.00 €** | 39.7 % | **6.3 %** | 354.05 € | stávame sa najlacnejší |
| Beko ATP3100N | 159.00 € | **49.50 €** | 251.6 % | **9.4 %** | 49.75 € | stávame sa najlacnejší |
| Gorenje BMX201AG1BG | 319.00 € | **209.90 €** | 59.9 % | **5.2 %** | 207.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS EA 890810 | 569.00 € | **460.50 €** | 29.8 % | **5.0 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG 64220 S | 269.00 € | **160.90 €** | 76.0 % | **5.3 %** | 127.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 PRO EOD3H50TX | 449.00 € | **341.90 €** | 38.0 % | **5.1 %** | 307.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEG68600W | 979.00 € | **872.50 €** | 17.9 % | **5.1 %** | 679.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.00 €** | 72.3 % | **5.1 %** | 160.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BM201AG1BG | 319.00 € | **215.50 €** | 59.9 % | **8.0 %** | 215.80 € | stávame sa najlacnejší |
| Whirlpool WIO 3T133 PLE | 649.00 € | **548.50 €** | 24.3 % | **5.1 %** | 399.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-F51 BLACK 1 karton | 399.00 € | **298.90 €** | 45.9 % | **9.3 %** | 298.95 € | stávame sa najlacnejší |
| iRobot Roomba 205 DustCompactor Combo BL | 399.00 € | **303.50 €** | 38.2 % | **5.1 %** | 173.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba 205 DustCompactor Combo WH | 399.00 € | **303.50 €** | 38.2 % | **5.1 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **505.00 €** | 26.9 % | **7.0 %** | 505.20 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **506.50 €** | 24.2 % | **5.0 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 PRO EES47320L | 569.00 € | **476.90 €** | 25.4 % | **5.1 %** | 403.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFS26120XQ | 419.00 € | **328.00 €** | 36.6 % | **6.9 %** | 328.06 € | stávame sa najlacnejší |
| Gorenje R619EAXL6 | 599.00 € | **508.00 €** | 26.2 % | **7.0 %** | 508.10 € | stávame sa najlacnejší |
| AMICA DS 6423 B | 259.00 € | **169.00 €** | 63.1 % | **6.4 %** | 169.40 € | stávame sa najlacnejší |
| Gorenje GEC5C41SG | 399.00 € | **309.50 €** | 39.2 % | **8.0 %** | 309.80 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **441.90 €** | 25.8 % | **5.1 %** | 369.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EES48401L | 649.00 € | **562.00 €** | 21.3 % | **5.0 %** | 534.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grundig VCW6270 | 249.00 € | **162.50 €** | 61.4 % | **5.3 %** | 113.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WSIC 3M27 C | 439.00 € | **354.50 €** | 30.2 % | **5.1 %** | 300.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S1200 BLACK | 2399.00 € | **2315.50 €** | 13.2 % | **9.3 %** | 2315.65 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.50 €** | 13.1 % | **9.1 %** | 2315.65 € | stávame sa najlacnejší |
| YAMAHA NS-777 BLACK 2 kartony | 899.00 € | **816.90 €** | 15.6 % | **5.0 %** | 439.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RF4142PW4 | 319.00 € | **239.50 €** | 39.9 % | **5.0 %** | 215.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX PerfectCare 600 EW6TN4262C | 499.00 € | **420.50 €** | 24.6 % | **5.0 %** | 320.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK4182PW4 | 359.00 € | **281.00 €** | 36.1 % | **6.5 %** | 281.12 € | stávame sa najlacnejší |
| Electrolux EEM43201L | 569.00 € | **493.90 €** | 21.0 % | **5.0 %** | 393.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WBC 3C34 PF X | 519.00 € | **443.90 €** | 22.8 % | **5.0 %** | 410.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX Hob2Hood LFV416K | 559.00 € | **484.00 €** | 21.3 % | **5.0 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRK 6192 AW4 | 539.00 € | **464.90 €** | 21.8 % | **5.0 %** | 379.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R4142PS | 319.00 € | **245.50 €** | 38.9 % | **6.9 %** | 245.70 € | stávame sa najlacnejší |
| Samsung HW-T420/EN | 179.00 € | **106.90 €** | 78.9 % | **6.8 %** | 106.92 € | stávame sa najlacnejší |
| ELECTROLUX 700 FLEX MaxiFlex EES48200L | 529.00 € | **459.50 €** | 21.0 % | **5.1 %** | 368.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 669.00 € | **601.00 €** | 16.9 % | **5.0 %** | 437.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWF 420 BL | 239.00 € | **171.50 €** | 49.5 % | **7.3 %** | 171.63 € | stávame sa najlacnejší |
| TESLA SlowJuicer SJ770 XXL Deluxe | 189.00 € | **123.90 €** | 60.2 % | **5.0 %** | 109.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10W | 399.00 € | **337.00 €** | 26.6 % | **6.9 %** | 337.40 € | stávame sa najlacnejší |
| Electrolux LIB60420CK | 299.00 € | **237.90 €** | 32.1 % | **5.1 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ESM48310SX | 589.00 € | **528.90 €** | 17.0 % | **5.0 %** | 498.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFP616X | 279.00 € | **219.50 €** | 33.5 % | **5.0 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK4182PS4 | 379.00 € | **319.50 €** | 26.3 % | **6.5 %** | 319.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 8401A | 169.00 € | **109.90 €** | 62.0 % | **5.3 %** | 109.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **340.90 €** | 22.9 % | **5.0 %** | 308.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 37.7 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| YAMAHA WX-051/MusicCast 50 WHITE | 599.00 € | **541.50 €** | 16.2 % | **5.0 %** | 528.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6346XOK | 329.00 € | **271.90 €** | 27.2 % | **5.2 %** | 251.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIT60443X | 489.00 € | **433.90 €** | 18.4 % | **5.0 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ESA47310SW | 529.00 € | **474.50 €** | 17.1 % | **5.0 %** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SSA 6110 OCW | 485.00 € | **430.90 €** | 18.3 % | **5.1 %** | 390.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C7B6AS9/EF | 1183.50 € | **1129.50 €** | 10.0 % | **5.0 %** | 899.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE RB493PW | 259.00 € | **205.50 €** | 32.5 % | **5.1 %** | 188.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VC 1622 M | 555.00 € | **501.50 €** | 16.3 % | **5.1 %** | 498.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZVC9140D | 319.00 € | **265.90 €** | 26.0 % | **5.0 %** | 264.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BMGB25333BG | 309.00 € | **255.90 €** | 26.8 % | **5.0 %** | 208.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GV663B65 | 559.00 € | **506.00 €** | 18.2 % | **7.0 %** | 506.10 € | stávame sa najlacnejší |
| Gorenje BOS6737E06B | 319.00 € | **266.50 €** | 25.9 % | **5.2 %** | 254.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 700 FLEX MaxiFlex EEM48200IX | 599.00 € | **546.90 €** | 15.0 % | **5.0 %** | 409.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WS Q2160 NE | 319.00 € | **267.90 €** | 25.2 % | **5.1 %** | 232.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S9100 | 99.90 € | **48.90 €** | 114.9 % | **5.2 %** | 38.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GKS5C71CLI | 559.00 € | **508.90 €** | 15.4 % | **5.0 %** | 483.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický běžecký pás HMS BE8501I | 572.50 € | **522.90 €** | 15.0 % | **5.0 %** | 521.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EL61A4UG | 209.00 € | **159.50 €** | 37.7 % | **5.1 %** | 118.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický trenažér pro Nordic walking LOOP15 | 560.50 € | **511.90 €** | 15.0 % | **5.1 %** | 489.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BBIM12400XMPS | 489.00 € | **441.90 €** | 16.2 % | **5.0 %** | 384.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 AirDry EEA12100L | 449.00 € | **402.50 €** | 17.2 % | **5.1 %** | 302.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EUOC94DB | 249.00 € | **202.50 €** | 29.2 % | **5.1 %** | 169.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 AirDry EEA22100L | 449.00 € | **402.50 €** | 17.2 % | **5.1 %** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EL61C3DB | 189.00 € | **142.50 €** | 39.6 % | **5.2 %** | 127.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **242.50 €** | 28.7 % | **8.0 %** | 242.90 € | stávame sa najlacnejší |
| Electrolux PD82-4MB světle modrá | 219.00 € | **172.90 €** | 33.2 % | **5.2 %** | 130.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multipřepínač TeleTek 17/50 | 701.50 € | **655.50 €** | 15.0 % | **7.5 %** | 655.54 € | stávame sa najlacnejší |
| YAMAHA NS-P41 BLACK | 329.00 € | **283.90 €** | 27.4 % | **10.0 %** | 283.97 € | stávame sa najlacnejší |
| ELECTROLUX EPF61RR | 135.00 € | **89.90 €** | 58.3 % | **5.4 %** | 71.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool GOS 6415/NB1 | 319.00 € | **275.50 €** | 21.6 % | **5.0 %** | 187.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux Série 300 LIL61434C | 369.00 € | **325.50 €** | 19.1 % | **5.0 %** | 262.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT32HF2003 | 159.00 € | **115.50 €** | 45.0 % | **5.3 %** | 115.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.50 €** | 18.3 % | **7.0 %** | 411.90 € | stávame sa najlacnejší |
| YAMAHA TT-S303 BLACK | 529.00 € | **486.50 €** | 14.2 % | **5.0 %** | 466.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TT-N503/MusicCast VINYL 500 White | 799.00 € | **757.50 €** | 10.8 % | **5.0 %** | 688.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **494.00 €** | 15.9 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| YAMAHA NS-SW050 BLACK | 239.00 € | **198.50 €** | 31.5 % | **9.2 %** | 198.58 € | stávame sa najlacnejší |
| YAMAHA A-S701 BLACK | 849.00 € | **808.50 €** | 14.7 % | **9.3 %** | 808.61 € | stávame sa najlacnejší |
| ETA 151390000 | 139.99 € | **99.50 €** | 52.0 % | **8.0 %** | 99.53 € | stávame sa najlacnejší |
| Gorenje BMI201AG1X | 239.00 € | **198.90 €** | 26.4 % | **5.2 %** | 161.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 344790010 | 159.99 € | **119.90 €** | 40.4 % | **5.2 %** | 113.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6547FXK | 329.00 € | **289.50 €** | 19.4 % | **5.1 %** | 241.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-V6A Black | 699.00 € | **659.90 €** | 11.3 % | **5.1 %** | 620.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE BM201AG1X | 179.00 € | **139.90 €** | 34.4 % | **5.0 %** | 133.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VD1442AM | 485.00 € | **447.50 €** | 13.9 % | **5.1 %** | 389.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64325SDX | 299.00 € | **261.50 €** | 20.1 % | **5.0 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG RC91V9AV4N | 796.50 € | **759.90 €** | 10.1 % | **5.0 %** | 628.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 700 SENSE LFV619K | 669.00 € | **632.50 €** | 11.1 % | **5.0 %** | 462.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE RB492PW | 239.00 € | **202.50 €** | 24.1 % | **5.1 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S301 SILVER | 439.00 € | **403.00 €** | 14.4 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington HC450 | 72.90 € | **37.50 €** | 112.3 % | **9.2 %** | 37.78 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| ELECTROLUX LFG719X | 559.00 € | **524.50 €** | 12.0 % | **5.1 %** | 378.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C7B6D41/EF | 733.50 € | **699.90 €** | 10.1 % | **5.0 %** | 694.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko ATP5500N | 189.00 € | **155.50 €** | 27.8 % | **5.1 %** | 121.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba 105 Combo (Black) | 239.00 € | **205.90 €** | 21.9 % | **5.0 %** | 171.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá čistička vzduchu GARNI 45T OneCare | 374.00 € | **341.50 €** | 15.0 % | **5.0 %** | 331.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MIA 655 AG | 339.00 € | **306.90 €** | 16.1 % | **5.1 %** | 271.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 23480-56/RH | 219.00 € | **186.90 €** | 23.0 % | **5.0 %** | 154.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6182PW4 | 379.99 € | **347.90 €** | 16.7 % | **6.9 %** | 348.00 € | stávame sa najlacnejší |
| MKF 17DF441 Fixní držák na TV | 39.00 € | **7.10 €** | 496.0 % | **8.5 %** | 7.20 € | stávame sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **238.00 €** | 18.7 % | **5.0 %** | 180.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6182PS4 | 359.00 € | **328.00 €** | 18.0 % | **7.8 %** | 328.11 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **248.00 €** | 22.8 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| GORENJE GW642CLI | 279.00 € | **248.50 €** | 17.9 % | **5.0 %** | 196.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 013390010 | 129.99 € | **99.50 €** | 37.2 % | **5.0 %** | 90.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL002CBK SmartLife | 350.90 € | **320.50 €** | 15.0 % | **5.1 %** | 312.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX KGS 6404 SX | 199.00 € | **168.90 €** | 23.9 % | **5.1 %** | 150.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 013390020 | 114.99 € | **84.90 €** | 45.5 % | **7.4 %** | 85.00 € | stávame sa najlacnejší |
| Gorenje BOSX6747A01BG | 519.00 € | **489.50 €** | 11.4 % | **5.1 %** | 302.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WMF250G | 319.00 € | **289.90 €** | 15.7 % | **5.1 %** | 227.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termokamera UNI-T UTi720A | 333.00 € | **304.50 €** | 15.0 % | **5.1 %** | 269.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VT862AB | 329.00 € | **300.50 €** | 15.0 % | **5.1 %** | 289.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VT862AM | 329.00 € | **300.50 €** | 15.0 % | **5.1 %** | 289.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C600CS9/EF | 626.90 € | **598.50 €** | 10.0 % | **5.0 %** | 498.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO 4250 CLI | 159.00 € | **130.90 €** | 27.9 % | **5.3 %** | 107.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA KGCR387100R | 608.50 € | **580.50 €** | 10.1 % | **5.0 %** | 570.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gaggia Magenta Prestige | 609.90 € | **582.00 €** | 10.0 % | **5.0 %** | 543.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA WX-021/MusicCast 20 WHITE | 299.00 € | **271.50 €** | 15.6 % | **5.0 %** | 209.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 2055 Arcus 2GEN s Wi-Fi | 365.00 € | **337.50 €** | 15.0 % | **6.3 %** | 337.80 € | stávame sa najlacnejší |
| Tesla AirCook Q40 | 79.90 € | **52.90 €** | 59.2 % | **5.4 %** | 49.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-MAX3500 | 669.00 € | **642.00 €** | 11.8 % | **7.3 %** | 642.35 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **172.00 €** | 22.9 % | **6.3 %** | 172.44 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 92.00 € | **65.50 €** | 47.6 % | **5.1 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON AC 9140 | 69.90 € | **43.50 €** | 70.0 % | **5.8 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFP416X | 229.00 € | **202.90 €** | 18.5 % | **5.0 %** | 155.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 833790000 | 49.99 € | **23.90 €** | 129.9 % | **9.9 %** | 23.92 € | stávame sa najlacnejší |
| ELECTROLUX LIT30230C | 279.00 € | **253.50 €** | 15.7 % | **5.1 %** | 194.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFP326FB | 169.00 € | **143.50 €** | 24.0 % | **5.3 %** | 115.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 865 | 179.00 € | **153.50 €** | 25.0 % | **7.2 %** | 153.83 € | stávame sa najlacnejší |
| ETA 4216 90000 | 119.99 € | **94.50 €** | 33.9 % | **5.4 %** | 94.90 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah VIPOW BAT0499 Bluetooth | 291.50 € | **266.50 €** | 15.0 % | **5.1 %** | 232.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 6denní předpovědí GARNI 108... | 291.50 € | **266.50 €** | 15.0 % | **5.1 %** | 242.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **574.00 €** | 10.9 % | **6.3 %** | 574.16 € | stávame sa najlacnejší |
| YAMAHA CD-C603 SILVER | 599.00 € | **574.00 €** | 12.2 % | **7.5 %** | 574.16 € | stávame sa najlacnejší |
| Whirlpool WIP 4T233 PFEG B | 537.50 € | **512.90 €** | 10.1 % | **5.1 %** | 415.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 122190000 | 99.99 € | **75.50 €** | 39.7 % | **5.5 %** | 65.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BBIM17300BMPSF | 449.00 € | **424.90 €** | 11.0 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 329790000 | 56.99 € | **32.90 €** | 82.6 % | **5.4 %** | 31.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28 | 189.00 € | **165.50 €** | 20.1 % | **5.1 %** | 152.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DP 6413 LZBG | 235.00 € | **211.50 €** | 16.9 % | **5.2 %** | 202.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 213890000 | 105.99 € | **82.50 €** | 34.9 % | **5.0 %** | 78.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR9197WH | 522.90 € | **499.50 €** | 10.0 % | **5.1 %** | 355.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles Q10 | 494.00 € | **471.50 €** | 10.0 % | **5.0 %** | 359.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW2TN5061FC | 399.00 € | **376.50 €** | 11.3 % | **5.0 %** | 305.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimetr UNI-T UT622E | 355.90 € | **333.50 €** | 15.0 % | **7.8 %** | 333.83 € | stávame sa najlacnejší |
| GORENJE MO17E1W | 79.00 € | **56.90 €** | 46.3 % | **5.4 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB34C600ESA/EF | 484.90 € | **462.90 €** | 10.0 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VD1442AR | 488.50 € | **466.50 €** | 10.1 % | **5.1 %** | 423.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VD1442AB | 488.50 € | **466.50 €** | 10.1 % | **5.1 %** | 424.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| Samsung RB34C600DSA/EF | 469.50 € | **447.90 €** | 10.1 % | **5.0 %** | 395.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WHM22113 3 | 471.00 € | **449.90 €** | 10.0 % | **5.1 %** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH60E3X | 99.00 € | **77.90 €** | 33.7 % | **5.2 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica VM 1442 R | 466.50 € | **445.50 €** | 10.1 % | **5.1 %** | 410.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 296.00 € | **275.00 €** | 15.0 % | **6.9 %** | 275.34 € | stávame sa najlacnejší |
| BEKO B5RCNA405HG | 451.50 € | **430.90 €** | 10.1 % | **5.1 %** | 389.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX  300 LMS2203EMX | 299.00 € | **278.50 €** | 12.8 % | **5.0 %** | 216.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 507590000 | 119.99 € | **99.50 €** | 26.8 % | **5.2 %** | 91.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 242590000 | 99.99 € | **79.50 €** | 32.4 % | **5.2 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GSXE90EVAD | 2218.90 € | **2198.50 €** | 10.0 % | **9.0 %** | 2198.90 € | stávame sa najlacnejší |
| Reproduktory Kruger&Matz KM1995-S | 233.00 € | **212.90 €** | 14.9 % | **5.0 %** | 208.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 32FBG5010S | 209.00 € | **188.90 €** | 16.4 % | **5.2 %** | 188.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON AC 5999 | 57.99 € | **37.90 €** | 61.1 % | **5.3 %** | 36.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE ECT 643 BX | 219.00 € | **199.00 €** | 15.6 % | **5.0 %** | 157.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON S 5506 GP | 58.90 € | **38.90 €** | 66.2 % | **9.7 %** | 38.99 € | stávame sa najlacnejší |
| Zelmer masomlýnek ZMM5801P | 119.00 € | **99.50 €** | 29.7 % | **8.5 %** | 99.79 € | stávame sa najlacnejší |
| ETA 559590010 | 52.99 € | **33.50 €** | 68.0 % | **6.2 %** | 32.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CBT6130/3X | 83.90 € | **64.50 €** | 38.0 % | **6.1 %** | 64.71 € | stávame sa najlacnejší |
| REMINGTON S 8540 | 58.90 € | **39.50 €** | 58.0 % | **6.0 %** | 19.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA FS 18 TOB | 309.00 € | **289.90 €** | 11.9 % | **5.0 %** | 238.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-ES5A GREEN | 159.00 € | **139.90 €** | 19.6 % | **5.3 %** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SKZ 65 BB | 185.00 € | **165.90 €** | 17.2 % | **5.1 %** | 151.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA CF 9530 F0 | 69.90 € | **50.90 €** | 45.2 % | **5.7 %** | 47.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington MB4047 Beard Kit | 59.90 € | **40.90 €** | 54.4 % | **5.4 %** | 37.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22000-56/RH | 129.00 € | **110.00 €** | 24.6 % | **6.3 %** | 110.01 € | stávame sa najlacnejší |
| Blaupunkt 55UGC5500S | 399.50 € | **381.00 €** | 10.1 % | **5.0 %** | 377.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON S 8500 | 54.99 € | **36.50 €** | 58.5 % | **5.2 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá čistička vzduchu GARNI 15T OneCare | 210.00 € | **191.90 €** | 15.0 % | **5.1 %** | 168.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth NEDIS SPPT2480BK | 205.50 € | **187.50 €** | 15.1 % | **5.0 %** | 160.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 28270-56 | 89.90 € | **71.90 €** | 31.5 % | **5.2 %** | 67.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy HIVE Beans Black | 34.90 € | **16.90 €** | 126.3 % | **9.6 %** | 16.97 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **81.00 €** | 33.7 % | **9.4 %** | 81.42 € | stávame sa najlacnejší |
| Electrolux E7T1-6BP | 79.00 € | **61.50 €** | 35.9 % | **5.8 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 112 | 109.99 € | **92.50 €** | 25.0 % | **5.1 %** | 78.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL ZC 255 B 38 | 149.90 € | **132.50 €** | 19.0 % | **5.2 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS KP1A3B31 Nescafé Dolce Gusto Picco | 69.90 € | **52.50 €** | 40.9 % | **5.9 %** | 51.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 515190000 | 92.99 € | **75.90 €** | 28.8 % | **5.1 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun Silk-expert PRO PL3132 IPL | 375.90 € | **358.90 €** | 10.0 % | **5.1 %** | 274.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90W | 373.90 € | **356.90 €** | 10.0 % | **5.0 %** | 305.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX ESF2400OW | 369.90 € | **352.90 €** | 10.1 % | **5.0 %** | 319.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 940 Wi-Fi meteorologická stanice | 192.90 € | **176.50 €** | 15.0 % | **5.2 %** | 173.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 114 | 105.90 € | **89.50 €** | 24.9 % | **5.5 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CI 3C6F0A | 350.90 € | **334.90 €** | 10.1 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 50UGC5500S | 349.90 € | **333.90 €** | 10.0 % | **5.0 %** | 268.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 142590000 | 79.99 € | **64.50 €** | 32.3 % | **6.7 %** | 64.77 € | stávame sa najlacnejší |
| Tefal RK 103811 | 72.90 € | **57.50 €** | 33.3 % | **5.1 %** | 53.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GI6432BSCE | 346.90 € | **331.50 €** | 10.0 % | **5.1 %** | 282.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL FR 490070 | 119.00 € | **103.90 €** | 20.7 % | **5.4 %** | 83.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA ST 62 BBG | 135.00 € | **119.90 €** | 18.5 % | **5.3 %** | 107.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS EA 810 B | 326.50 € | **311.50 €** | 10.1 % | **5.0 %** | 238.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS EA 810 B | 326.50 € | **311.50 €** | 10.1 % | **5.0 %** | 238.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal TT693110 | 59.90 € | **44.90 €** | 40.7 % | **5.4 %** | 41.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON CI 95 Pearl | 39.90 € | **24.90 €** | 70.7 % | **6.5 %** | 22.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH 6756WO | 139.00 € | **124.00 €** | 21.7 % | **8.5 %** | 124.40 € | stávame sa najlacnejší |
| ETA 013490000 | 69.99 € | **55.00 €** | 37.9 % | **8.4 %** | 55.50 € | stávame sa najlacnejší |
| YAMAHA TW-E7B WHITE | 239.00 € | **224.50 €** | 12.0 % | **5.2 %** | 103.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Soundbar TESLA PrimeSound HQ-990 - Dolby Atmos 2.1 | 169.00 € | **154.50 €** | 15.0 % | **5.1 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 051690000 | 75.99 € | **61.50 €** | 30.0 % | **5.2 %** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook & Grill QG800 WiFi - multifunkční digi... | 164.90 € | **150.50 €** | 15.1 % | **5.0 %** | 114.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wi-Fi meteorologická stanice GARNI 980 Arcus | 163.90 € | **149.50 €** | 15.1 % | **5.0 %** | 141.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6872 | 77.90 € | **63.90 €** | 28.4 % | **5.3 %** | 61.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko RDSA240K40SN | 302.50 € | **288.50 €** | 10.1 % | **5.0 %** | 224.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualHeat QD575 XXL - multifunkční duál... | 160.50 € | **146.50 €** | 15.1 % | **5.0 %** | 115.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CDIH 2D949 | 305.50 € | **291.50 €** | 10.1 % | **5.0 %** | 265.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH9A73WO | 301.00 € | **287.50 €** | 10.0 % | **5.1 %** | 269.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LFU 215 X | 115.00 € | **101.50 €** | 19.0 % | **5.0 %** | 85.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 166090000 | 65.99 € | **52.50 €** | 32.8 % | **5.7 %** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC112X Pomalý hrnec 6,5 l | 135.90 € | **122.50 €** | 16.8 % | **5.3 %** | 85.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC111X Pomalý hrnec 3,5 l | 99.90 € | **86.50 €** | 21.9 % | **5.5 %** | 76.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO17E1S | 79.00 € | **65.90 €** | 26.0 % | **5.1 %** | 56.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **29.90 €** | 57.9 % | **9.8 %** | 29.96 € | stávame sa najlacnejší |
| ETA 315190010 | 68.99 € | **55.90 €** | 29.7 % | **5.1 %** | 45.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D BLACK | 283.50 € | **270.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D SILVER | 283.50 € | **270.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla EliteCook K70 | 119.00 € | **106.00 €** | 18.0 % | **5.1 %** | 98.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 299.50 € | **286.50 €** | 15.1 % | **10.1 %** | 286.66 € | stávame sa najlacnejší |
| CrockPot CSC062X | 169.00 € | **156.00 €** | 15.0 % | **6.1 %** | 156.19 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX310,bílá | 29.99 € | **17.00 €** | 85.7 % | **5.3 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX310,černá | 29.99 € | **17.00 €** | 85.7 % | **5.3 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX310,červ. | 29.99 € | **17.00 €** | 85.7 % | **5.3 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA 510CE1.30P(W) | 281.90 € | **269.00 €** | 10.0 % | **5.0 %** | 258.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 1025 Arcus Wi-Fi meteorologická stanice 2GEN | 204.50 € | **191.90 €** | 14.9 % | **7.8 %** | 191.99 € | stávame sa najlacnejší |
| Baterie olověná  12V /100 Ah  Rebel  BAT0421 | 146.00 € | **133.50 €** | 14.9 % | **5.1 %** | 132.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přenosná nabíječka NEDIS EVCH37KWBK20 5m /16A, 230V,... | 213.00 € | **200.50 €** | 14.9 % | **8.2 %** | 200.51 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.50 €** | 43.6 % | **9.8 %** | 40.59 € | stávame sa najlacnejší |
| ETA 116290000 | 65.99 € | **53.50 €** | 30.6 % | **5.9 %** | 49.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **29.90 €** | 48.1 % | **5.5 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH62E3X | 139.00 € | **127.00 €** | 15.0 % | **5.0 %** | 79.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualHeat QD464 XXL - multifunkční duál... | 142.50 € | **130.50 €** | 15.0 % | **5.3 %** | 103.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| Gorenje GI6401BX | 258.50 € | **246.90 €** | 10.1 % | **5.1 %** | 203.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON HC 5035 | 30.99 € | **19.50 €** | 69.8 % | **6.8 %** | 19.60 € | stávame sa najlacnejší |
| Salente Quickdry | 254.90 € | **243.50 €** | 10.1 % | **5.2 %** | 227.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualHeat QD73 XXL - multifunkční digit... | 129.00 € | **117.90 €** | 14.9 % | **5.0 %** | 89.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 715390000 | 52.99 € | **41.90 €** | 32.8 % | **5.0 %** | 36.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 126490000 | 52.99 € | **41.90 €** | 32.8 % | **5.0 %** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZVC251 | 71.90 € | **60.90 €** | 24.0 % | **5.0 %** | 60.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO VRR84314VB | 241.90 € | **230.90 €** | 10.1 % | **5.1 %** | 181.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESPRESSO KRUPS Inissia XN100510 červený | 99.90 € | **88.90 €** | 18.3 % | **5.3 %** | 75.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo koncentrace CO2 GARNI 102Q | 131.50 € | **120.50 €** | 14.9 % | **5.3 %** | 120.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **43.90 €** | 37.3 % | **9.8 %** | 43.97 € | stávame sa najlacnejší |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - komp... | 190.50 € | **179.50 €** | 14.9 % | **8.3 %** | 179.62 € | stávame sa najlacnejší |
| AMICA DI6421B | 395.50 € | **384.50 €** | 10.0 % | **6.9 %** | 384.70 € | stávame sa najlacnejší |
| Panasonic SC-UA30E-K | 232.50 € | **221.90 €** | 10.2 % | **5.1 %** | 157.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HDCG 32220 FX | 109.00 € | **98.50 €** | 16.5 % | **5.3 %** | 83.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prodlužovací kabel na bubnu 25m Solight PB40 | 128.00 € | **117.50 €** | 14.8 % | **5.4 %** | 115.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL FR 495070 | 109.00 € | **98.50 €** | 21.5 % | **9.8 %** | 98.70 € | stávame sa najlacnejší |
| Braun SI1009OR | 32.90 € | **22.50 €** | 54.8 % | **5.9 %** | 22.90 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110 AP černá | 24.99 € | **14.90 €** | 80.0 % | **7.3 %** | 14.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX110 AP,bílá | 24.99 € | **14.90 €** | 80.0 % | **7.3 %** | 14.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.90 €** | 25.0 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| Breville VDF130X-01 | 214.90 € | **204.90 €** | 10.2 % | **5.1 %** | 157.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44S | 218.50 € | **208.50 €** | 10.1 % | **5.1 %** | 172.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Soundbar TESLA PrimeSound HQ-880 - 2.1 soundbar | 117.50 € | **107.50 €** | 15.2 % | **5.4 %** | 71.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC772830 | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON CI 9132 | 58.90 € | **48.90 €** | 27.1 % | **5.5 %** | 42.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **269.90 €** | 10.1 % | **6.2 %** | 269.98 € | stávame sa najlacnejší |
| Rowenta CV 5930F0 | 35.99 € | **26.00 €** | 51.5 % | **9.5 %** | 26.13 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.13 € | stávame sa najlacnejší |
| Panasonic SC-AKX520E-K | 304.90 € | **295.00 €** | 10.1 % | **6.6 %** | 295.08 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.90 €** | 10.0 % | **7.0 %** | 341.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 44W | 210.50 € | **200.90 €** | 10.2 % | **5.2 %** | 160.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 918690030 | 52.99 € | **43.50 €** | 29.3 % | **6.1 %** | 32.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 918690040 | 52.99 € | **43.50 €** | 29.3 % | **6.1 %** | 32.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 227090000 | 52.99 € | **43.50 €** | 29.4 % | **6.2 %** | 38.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZMM3512B | 91.90 € | **82.50 €** | 22.4 % | **9.9 %** | 82.59 € | stávame sa najlacnejší |
| RICATECH PR85 | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 49.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.86 € | stávame sa najlacnejší |
| Guzzanti GZ 8502A | 202.00 € | **192.90 €** | 10.0 % | **5.1 %** | 162.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 441 | 197.90 € | **188.90 €** | 10.1 % | **5.0 %** | 151.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CTP6SC4/E14U | 195.50 € | **186.50 €** | 10.1 % | **5.0 %** | 174.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-HTB100EGK | 99.90 € | **90.90 €** | 15.6 % | **5.2 %** | 83.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná plachta proti kroupám MID SUV 480x195x155cm | 108.50 € | **99.50 €** | 14.9 % | **5.3 %** | 97.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prodlužovací kabel na bubnu 25m Solight PB41 | 106.00 € | **97.00 €** | 14.8 % | **5.0 %** | 96.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 426.50 € | **417.50 €** | 15.0 % | **12.5 %** | 417.60 € | stávame sa najlacnejší |
| SONY sluchátka MDR-EX110AP,černá | 22.90 € | **13.90 €** | 77.3 % | **7.6 %** | 8.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44 | 189.90 € | **181.00 €** | 10.2 % | **5.1 %** | 160.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer kráječ ZFS1016 | 54.90 € | **46.00 €** | 30.4 % | **9.3 %** | 46.31 € | stávame sa najlacnejší |
| Breville VDF133X-01 | 188.50 € | **179.90 €** | 10.2 % | **5.1 %** | 137.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 419T chytrý teploměr s vlhkoměrem | 99.50 € | **90.90 €** | 15.3 % | **5.3 %** | 86.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 916690040 | 47.99 € | **39.50 €** | 27.9 % | **5.3 %** | 26.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 916690020 | 47.99 € | **39.50 €** | 27.9 % | **5.3 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 333790000 | 47.99 € | **39.50 €** | 27.9 % | **5.3 %** | 33.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MediaBox XT850 Android TV 11 box 4K s tunerem ... | 96.90 € | **88.50 €** | 15.1 % | **5.1 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester tloušťky laku UNI-T UT343D | 98.90 € | **90.50 €** | 15.1 % | **5.4 %** | 89.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.90 €** | 43.3 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Gorenje G642ABX | 159.00 € | **150.90 €** | 10.8 % | **5.2 %** | 145.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON MB 320C | 46.99 € | **38.90 €** | 27.6 % | **5.6 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 002897000 | 39.99 € | **31.90 €** | 33.1 % | **6.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 732090020 | 37.99 € | **29.90 €** | 35.1 % | **6.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 959890010 | 47.99 € | **39.90 €** | 27.5 % | **6.0 %** | 39.98 € | stávame sa najlacnejší |
| BEKO HDMC 32400 TX | 180.50 € | **172.50 €** | 10.2 % | **5.3 %** | 140.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48A | 178.50 € | **170.50 €** | 10.2 % | **5.3 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28S | 180.50 € | **172.50 €** | 10.1 % | **5.2 %** | 159.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vnitřní bezdrátové čidlo kvality vzduchu GARNI 104Q | 93.50 € | **85.50 €** | 14.9 % | **5.1 %** | 74.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 32WGC5520S | 149.00 € | **141.00 €** | 11.0 % | **5.0 %** | 140.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla GSM-01 zesilovač/opakovač 900 MHz - kompletní ... | 120.50 € | **112.50 €** | 15.0 % | **7.3 %** | 112.77 € | stávame sa najlacnejší |
| REMINGTON CI 5318 | 46.99 € | **39.00 €** | 26.8 % | **5.2 %** | 31.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer sušička potravin ZFD1005 | 69.99 € | **62.00 €** | 23.3 % | **9.2 %** | 62.44 € | stávame sa najlacnejší |
| Candy CI642CBB/1 | 167.90 € | **160.00 €** | 10.3 % | **5.1 %** | 139.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 20630-56 | 52.90 € | **45.00 €** | 23.6 % | **5.1 %** | 36.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 90B1 | 162.50 € | **154.90 €** | 10.2 % | **5.0 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 10003 | 164.00 € | **156.50 €** | 10.0 % | **5.0 %** | 139.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 750 HD | 91.00 € | **83.50 €** | 15.0 % | **5.5 %** | 73.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Thomson MIC201IBT | 119.00 € | **111.50 €** | 17.0 % | **9.6 %** | 111.89 € | stávame sa najlacnejší |
| REMINGTON D 5219 | 36.99 € | **29.50 €** | 33.6 % | **6.5 %** | 24.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-ES5A PINK | 169.90 € | **162.50 €** | 10.0 % | **5.3 %** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-ES5A WHITE | 169.90 € | **162.50 €** | 10.0 % | **5.3 %** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 506A | 163.90 € | **156.50 €** | 10.2 % | **5.2 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles i4 White | 167.90 € | **160.50 €** | 10.2 % | **5.3 %** | 156.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZFS0919 | 69.90 € | **62.50 €** | 17.9 % | **5.4 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington CI91W1B | 47.90 € | **40.50 €** | 25.5 % | **6.1 %** | 25.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S 6606 Confidence | 56.90 € | **49.50 €** | 21.7 % | **5.8 %** | 49.90 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110B, černá | 19.99 € | **12.90 €** | 62.8 % | **5.1 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX110W,bílá | 19.99 € | **12.90 €** | 62.8 % | **5.1 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 080Q měřič kvality venkovního ovzduší | 87.50 € | **80.50 €** | 14.8 % | **5.6 %** | 77.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S8500GP | 59.90 € | **52.90 €** | 19.3 % | **5.4 %** | 51.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Street X-BASS KM... | 81.50 € | **74.50 €** | 15.2 % | **5.3 %** | 74.79 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **152.00 €** | 14.8 % | **9.8 %** | 152.29 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110P, růžová | 19.90 € | **12.90 €** | 62.1 % | **5.1 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EF167 | 21.99 € | **15.00 €** | 70.9 % | **16.6 %** | 15.19 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **15.00 €** | 70.9 % | **16.6 %** | 15.19 € | stávame sa najlacnejší |
| Remington HC7110 | 33.90 € | **27.00 €** | 37.7 % | **9.6 %** | 27.09 € | stávame sa najlacnejší |
| Zelmer ZFS0917 | 54.90 € | **48.00 €** | 25.3 % | **9.5 %** | 48.21 € | stávame sa najlacnejší |
| TEFAL HB 643138 | 54.90 € | **48.00 €** | 24.9 % | **9.2 %** | 48.34 € | stávame sa najlacnejší |
| Zelmer ZIR1505 | 31.90 € | **25.00 €** | 37.0 % | **7.4 %** | 25.47 € | stávame sa najlacnejší |
| Breville VDF131X-01 | 150.50 € | **143.90 €** | 10.1 % | **5.2 %** | 58.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MediaBox XG500 4K UHD Google TV multimediální ... | 75.50 € | **68.90 €** | 15.1 % | **5.0 %** | 54.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 6449 | 75.50 € | **68.90 €** | 15.1 % | **5.1 %** | 68.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.00 € | **137.50 €** | 10.0 % | **5.1 %** | 128.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 78.00 € | **71.50 €** | 14.7 % | **5.1 %** | 62.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC063X | 119.00 € | **112.50 €** | 15.9 % | **9.6 %** | 112.60 € | stávame sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **22.50 €** | 40.6 % | **9.1 %** | 22.69 € | stávame sa najlacnejší |
| ETA 859890040 | 39.99 € | **33.50 €** | 26.8 % | **6.2 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON CI 53W | 38.99 € | **32.50 €** | 26.2 % | **5.2 %** | 28.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.63 € | stávame sa najlacnejší |
| Graef G-Line G 50 | 143.90 € | **137.50 €** | 10.2 % | **5.3 %** | 112.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52 Skylink Nagravision bezkartový systém | 75.90 € | **69.50 €** | 15.1 % | **5.4 %** | 63.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 580 Line | 75.90 € | **69.50 €** | 15.3 % | **5.6 %** | 66.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 618B Precise | 76.90 € | **70.50 €** | 15.1 % | **5.5 %** | 69.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 618W Precise | 76.90 € | **70.50 €** | 15.1 % | **5.5 %** | 69.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **197.50 €** | 10.2 % | **6.7 %** | 197.52 € | stávame sa najlacnejší |
| Remington AC9140B | 54.90 € | **48.50 €** | 19.7 % | **5.7 %** | 45.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **56.50 €** | 21.8 % | **9.4 %** | 56.83 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **35.90 €** | 23.2 % | **5.3 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 632290000 | 35.99 € | **29.90 €** | 27.9 % | **6.2 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Gril BBQ VG 200 | 131.90 € | **125.90 €** | 10.2 % | **5.2 %** | 103.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO 8265+ DVB-S2/T2/C kombo přijímač HD | 71.90 € | **65.90 €** | 15.2 % | **5.6 %** | 57.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 33Ah  VIPOW bezúdržbový akumu... | 73.50 € | **67.50 €** | 15.0 % | **5.6 %** | 65.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Smartdust | 138.50 € | **132.50 €** | 10.3 % | **5.5 %** | 132.58 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 31.50 € | **25.50 €** | 54.7 % | **25.3 %** | 25.79 € | stávame sa najlacnejší |
| Amiko Mini 4K Combo - DVB-S2/T2/C přijímač | 73.50 € | **67.50 €** | 15.0 % | **5.6 %** | 67.89 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **16.00 €** | 49.2 % | **8.6 %** | 16.21 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **21.90 €** | 34.6 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Guzzanti GZ 30B | 123.50 € | **117.90 €** | 10.2 % | **5.2 %** | 70.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Hurricane F5 | 121.50 € | **115.90 €** | 10.4 % | **5.3 %** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZPR2600 | 119.50 € | **113.90 €** | 10.3 % | **5.2 %** | 96.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH6A75WO | 165.50 € | **159.90 €** | 10.1 % | **6.4 %** | 159.93 € | stávame sa najlacnejší |
| ROWENTA RH 6543 WH | 122.50 € | **117.00 €** | 10.0 % | **5.1 %** | 86.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9252 | 67.00 € | **61.50 €** | 14.6 % | **5.2 %** | 53.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SMART FINDER S2 vyhledávač DVB-S/S2 signálu | 70.00 € | **64.50 €** | 14.8 % | **5.8 %** | 62.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 094L čidlo detekce blesků | 63.50 € | **58.00 €** | 15.1 % | **5.1 %** | 57.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 96.50 € | **91.00 €** | 15.1 % | **8.5 %** | 91.50 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **76.00 €** | 15.3 % | **7.5 %** | 76.50 € | stávame sa najlacnejší |
| Tefal KO251430 | 39.90 € | **34.50 €** | 22.6 % | **6.0 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI3042VI | 39.90 € | **34.50 €** | 26.8 % | **9.7 %** | 34.61 € | stávame sa najlacnejší |
| TEFAL KO 250830 | 39.90 € | **34.50 €** | 23.5 % | **6.8 %** | 34.87 € | stávame sa najlacnejší |
| Guzzanti GZ 636B | 120.00 € | **114.90 €** | 10.0 % | **5.4 %** | 78.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Glass&SteamAir® Fryer 4500BG | 114.00 € | **108.90 €** | 10.1 % | **5.2 %** | 73.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 636 | 112.00 € | **106.90 €** | 10.1 % | **5.1 %** | 82.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.00 € | **64.90 €** | 14.8 % | **6.5 %** | 64.96 € | stávame sa najlacnejší |
| Amiko Mini HD265 WiFi | 57.50 € | **52.50 €** | 15.1 % | **5.1 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 700 HD | 64.50 € | **59.50 €** | 14.7 % | **5.8 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla MultiCook M80 Deluxe | 110.90 € | **105.90 €** | 10.2 % | **5.2 %** | 96.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera cyklistická NEDIS CCAM100BK 3v1, 1080p, 2MP, ... | 58.90 € | **53.90 €** | 15.1 % | **5.3 %** | 46.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester a nabíječka baterií KONNWEI KW520 3v1 | 57.90 € | **52.90 €** | 15.0 % | **5.1 %** | 47.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 502 meteorologická stanice | 57.90 € | **52.90 €** | 15.0 % | **5.1 %** | 50.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 5m, biela | 15.50 € | **10.50 €** | 60.5 % | **8.7 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 5m, biela | 15.50 € | **10.50 €** | 57.5 % | **6.7 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný zvonček, 9x LED, biela,... | 16.50 € | **11.50 €** | 56.5 % | **9.1 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 615B Precise | 59.90 € | **54.90 €** | 15.0 % | **5.4 %** | 54.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 118.90 € | **113.90 €** | 10.3 % | **5.6 %** | 113.97 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 612 Precise | 63.50 € | **58.50 €** | 14.7 % | **5.6 %** | 58.57 € | stávame sa najlacnejší |
| Electrolux EF 26   (EFH 12 W) | 15.99 € | **11.00 €** | 53.1 % | **5.3 %** | 3.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept so2050 | 106.90 € | **102.00 €** | 10.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9255 | 55.50 € | **50.90 €** | 14.9 % | **5.4 %** | 39.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 545 Line | 55.50 € | **50.90 €** | 14.9 % | **5.4 %** | 46.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 547 Line | 55.50 € | **50.90 €** | 14.9 % | **5.4 %** | 47.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 570 EASY III | 55.50 € | **50.90 €** | 15.0 % | **5.5 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8202 | 96.50 € | **91.90 €** | 10.4 % | **5.1 %** | 67.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RO 3985 EA | 104.50 € | **99.90 €** | 10.2 % | **5.3 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RH 6545 WH | 97.50 € | **92.90 €** | 10.5 % | **5.3 %** | 83.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V291 sada 3 LED vánočních dárků | 55.00 € | **50.50 €** | 14.7 % | **5.4 %** | 35.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO IMPULSE 3 - set-top box DVB-T2/C (H.265/HEVC) | 53.00 € | **48.50 €** | 15.0 % | **5.2 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO HD 8165 Wi-Fi - satelitní DVB-S2 přijímač | 56.00 € | **51.50 €** | 15.1 % | **5.8 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 700 HD mini | 56.00 € | **51.50 €** | 15.1 % | **5.8 %** | 45.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera IP venkovní Kruger&Matz Connect C60 Tuya Wi-Fi | 50.50 € | **46.00 €** | 15.3 % | **5.0 %** | 43.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester baterií KONNWEI KW650 | 56.00 € | **51.50 €** | 14.7 % | **5.5 %** | 50.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 15.00 € | **10.50 €** | 53.2 % | **7.2 %** | 10.90 € | stávame sa najlacnejší |
| ETA 732090000 | 27.99 € | **23.50 €** | 27.1 % | **6.7 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ZE072 | 21.99 € | **17.50 €** | 36.7 % | **8.8 %** | 17.70 € | stávame sa najlacnejší |
| ETA 732790010 | 24.99 € | **20.50 €** | 32.4 % | **8.6 %** | 20.77 € | stávame sa najlacnejší |
| TESLA MultiCook MC600 Pro | 91.90 € | **87.50 €** | 10.5 % | **5.2 %** | 80.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4262 | 104.90 € | **100.50 €** | 10.2 % | **5.6 %** | 100.66 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 133.90 € | **129.50 €** | 10.2 % | **6.6 %** | 129.90 € | stávame sa najlacnejší |
| REMINGTON AC 9096 | 44.90 € | **40.50 €** | 17.5 % | **5.9 %** | 23.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny digitální TechnoLine WS 8019 nástěnné | 52.90 € | **48.50 €** | 14.9 % | **5.3 %** | 38.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 13.9 % | **5.5 %** | 55.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON S 5525 | 34.90 € | **30.50 €** | 23.0 % | **7.5 %** | 30.62 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 439 Line s projekcí | 52.00 € | **47.90 €** | 14.9 % | **5.8 %** | 43.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice TechnoLine WT 549 s projekcí | 48.00 € | **43.90 €** | 15.1 % | **5.3 %** | 40.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3122T | 25.00 € | **20.90 €** | 31.0 % | **9.6 %** | 20.99 € | stávame sa najlacnejší |
| REMINGTON D 3015 | 29.99 € | **25.90 €** | 22.2 % | **5.5 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 618890010 | 23.99 € | **19.90 €** | 27.1 % | **5.4 %** | 19.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks Colombia Medium Roast 450 g | 18.99 € | **14.90 €** | 35.2 % | **6.1 %** | 10.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks® Blonde Espresso Roast 450 g | 18.99 € | **14.90 €** | 35.2 % | **6.1 %** | 10.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks®Pike Place Espress Roast 450 g | 18.99 € | **14.90 €** | 35.2 % | **6.1 %** | 11.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC052X | 90.50 € | **86.50 €** | 10.4 % | **5.5 %** | 55.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Low Sugar Rice Cooker 1500AT | 93.50 € | **89.50 €** | 10.0 % | **5.3 %** | 66.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GSL 60IS1 | 95.50 € | **91.50 €** | 10.1 % | **5.5 %** | 77.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4111E0 | 85.90 € | **81.90 €** | 10.4 % | **5.2 %** | 72.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V283 vánoční LED dekorace, dřevěný stromek ... | 47.90 € | **43.90 €** | 15.4 % | **5.8 %** | 35.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO MIRA 3 WiFi - DVB-S2 přijímač | 44.50 € | **40.50 €** | 15.6 % | **5.2 %** | 34.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B GRAY | 85.50 € | **81.50 €** | 10.3 % | **5.1 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B GREEN | 85.50 € | **81.50 €** | 10.3 % | **5.1 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B BLUE | 84.90 € | **80.90 €** | 10.4 % | **5.2 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B PURPLE | 84.90 € | **80.90 €** | 10.4 % | **5.2 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 63.90 € | **59.90 €** | 15.0 % | **7.8 %** | 59.96 € | stávame sa najlacnejší |
| Amiko Mini 4K S2X - DVB-S2 přijímač | 64.50 € | **60.50 €** | 14.7 % | **7.6 %** | 60.58 € | stávame sa najlacnejší |
| YAMAHA TW-E5B BROWN | 139.00 € | **135.00 €** | 13.0 % | **9.8 %** | 135.29 € | stávame sa najlacnejší |
| YAMAHA TW-E5B GRAY | 139.00 € | **135.00 €** | 13.0 % | **9.8 %** | 135.29 € | stávame sa najlacnejší |
| REMINGTON HC 5200 | 32.99 € | **29.00 €** | 19.6 % | **5.2 %** | 21.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma AP01 - Antivibrační podložky | 7.99 € | **4.00 €** | 115.1 % | **7.7 %** | 4.09 € | stávame sa najlacnejší |
| ETA 026990000 | 27.99 € | **24.00 €** | 26.5 % | **8.5 %** | 24.34 € | stávame sa najlacnejší |
| Zelmer ZBS1012 | 19.99 € | **16.00 €** | 33.4 % | **6.8 %** | 16.48 € | stávame sa najlacnejší |
| Rowenta CV9240F0 | 127.90 € | **124.00 €** | 10.2 % | **6.9 %** | 124.38 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.00 €** | 22.8 % | **9.4 %** | 32.16 € | stávame sa najlacnejší |
| REMINGTON S 7300 | 36.90 € | **33.00 €** | 18.3 % | **5.8 %** | 33.44 € | stávame sa najlacnejší |
| SONY sluchátka MDR-EX15LP, bílá | 9.90 € | **6.10 €** | 70.5 % | **5.1 %** | 4.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-EX15LP, černá | 9.90 € | **6.10 €** | 70.5 % | **5.1 %** | 4.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-EX15LP, modrá | 9.90 € | **6.10 €** | 70.5 % | **5.1 %** | 4.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 520 | 40.50 € | **36.90 €** | 15.4 % | **5.2 %** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 291 Line | 43.50 € | **39.90 €** | 15.2 % | **5.7 %** | 36.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3K1-3ST | 42.00 € | **38.50 €** | 16.0 % | **6.3 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla T500 | 71.50 € | **68.00 €** | 10.4 % | **5.0 %** | 59.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 20760-57/RH | 71.50 € | **68.00 €** | 10.5 % | **5.1 %** | 60.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V282 vánoční LED dekorace, dřevěný stromek ... | 45.00 € | **41.50 €** | 14.5 % | **5.6 %** | 34.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester baterií KONNWEI KW600 | 46.00 € | **42.50 €** | 14.5 % | **5.8 %** | 35.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice TechnoLine WS 6762 | 47.00 € | **43.50 €** | 14.7 % | **6.1 %** | 38.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Autodiagnostika SIXTOL SX ONE | 44.00 € | **40.50 €** | 14.6 % | **5.5 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 525 | 46.00 € | **42.50 €** | 14.5 % | **5.8 %** | 41.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 214.00 € | **210.50 €** | 15.0 % | **13.1 %** | 210.79 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **92.00 €** | 10.1 % | **6.1 %** | 92.32 € | stávame sa najlacnejší |
| Mascom Monoblok Quad LNB MCM4QS01HD | 46.50 € | **43.00 €** | 15.0 % | **6.3 %** | 43.41 € | stávame sa najlacnejší |
| DOMO DO8311TP | 70.50 € | **67.00 €** | 10.6 % | **5.1 %** | 67.49 € | stávame sa najlacnejší |
| Zelmer ZNT0300 | 14.99 € | **11.50 €** | 39.3 % | **6.9 %** | 11.84 € | stávame sa najlacnejší |
| ETA 732790000 | 23.99 € | **20.50 €** | 27.1 % | **8.6 %** | 20.77 € | stávame sa najlacnejší |
| Breville VST071X | 75.90 € | **72.50 €** | 10.1 % | **5.2 %** | 58.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TrueLife RelaxBack B6 Charge | 73.90 € | **70.50 €** | 10.3 % | **5.2 %** | 56.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 GARNI 201 OneCare | 94.90 € | **91.50 €** | 15.2 % | **11.1 %** | 91.71 € | stávame sa najlacnejší |
| Prodlužovací kabel NEDIS WIFIP313EWT SmartLife /2m/W... | 43.90 € | **40.50 €** | 15.0 % | **6.1 %** | 29.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka akumulátorů KONNWEI RC-10 pro Pb, AGM, GEL... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 27.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prodlužovací kabel spojka Solight PS09 | 41.90 € | **38.50 €** | 15.3 % | **6.0 %** | 29.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 071S Bezdrátové čidlo pro měření teploty a rel... | 39.90 € | **36.50 €** | 15.5 % | **5.6 %** | 33.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ JOY 2 KM0561 | 43.90 € | **40.50 €** | 14.9 % | **6.0 %** | 39.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester rotace fází a indikátor otáček motoru Voltcra... | 40.90 € | **37.50 €** | 15.3 % | **5.7 %** | 37.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 460 s FM radiopřijímačem | 49.90 € | **46.50 €** | 15.4 % | **7.6 %** | 46.75 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 57.90 € | **54.50 €** | 16.3 % | **9.5 %** | 54.76 € | stávame sa najlacnejší |
| Zircon Monoblock Quad M-0443 Slim line Skylink | 40.00 € | **36.90 €** | 14.8 % | **5.9 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.90 €** | 54.5 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 73.00 € | **69.90 €** | 14.6 % | **9.8 %** | 69.99 € | stávame sa najlacnejší |
| Koma EC04S - ECG VP 878 SMS | 5.69 € | **2.60 €** | 137.2 % | **8.4 %** | 2.64 € | stávame sa najlacnejší |
| Koma EC13S - ECG | 5.69 € | **2.60 €** | 137.2 % | **8.4 %** | 2.64 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **12.90 €** | 35.6 % | **9.4 %** | 12.98 € | stávame sa najlacnejší |
| Electrolux E203S | 8.99 € | **5.90 €** | 65.0 % | **8.3 %** | 5.99 € | stávame sa najlacnejší |
| Ariete J-Force 2753 | 65.90 € | **62.90 €** | 10.6 % | **5.6 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax Sounder2 | 67.90 € | **64.90 €** | 10.2 % | **5.3 %** | 41.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V258 LED vánoční dekorace adventní kalnedář... | 41.50 € | **38.50 €** | 14.6 % | **6.3 %** | 22.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA EP 5720 F0 | 70.50 € | **67.50 €** | 10.1 % | **5.5 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION SmartKettle Onyx black | 63.90 € | **60.90 €** | 10.5 % | **5.3 %** | 54.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S9100B | 66.50 € | **63.50 €** | 10.4 % | **5.4 %** | 59.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice Solight TE81 | 34.50 € | **31.50 €** | 15.0 % | **5.0 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice Solight TE80 | 35.50 € | **32.50 €** | 15.8 % | **6.0 %** | 29.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY111B15 | 68.90 € | **65.90 €** | 10.4 % | **5.6 %** | 63.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera IP venkovní Kruger&Matz Connect C80 Tuya Wi-Fi | 33.50 € | **30.50 €** | 15.6 % | **5.2 %** | 28.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo GARNI 056H | 32.90 € | **29.90 €** | 15.6 % | **5.1 %** | 28.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 395.50 € | **392.50 €** | 10.0 % | **9.2 %** | 392.76 € | stávame sa najlacnejší |
| YAMAHA CD-S303 SILVER | 395.50 € | **392.50 €** | 10.0 % | **9.2 %** | 392.76 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 13.50 € | **10.50 €** | 47.7 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| REMINGTON D 5215 | 34.99 € | **32.00 €** | 19.8 % | **9.5 %** | 32.13 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.00 €** | 38.6 % | **6.7 %** | 10.31 € | stávame sa najlacnejší |
| ETA 960068020 | 9.29 € | **6.30 €** | 61.7 % | **9.7 %** | 6.32 € | stávame sa najlacnejší |
| DOMO DO9176RK | 30.99 € | **28.00 €** | 16.5 % | **5.2 %** | 25.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 160390000 | 19.99 € | **17.00 €** | 26.4 % | **7.5 %** | 17.40 € | stávame sa najlacnejší |
| DOMO DO8708W | 73.90 € | **71.00 €** | 10.3 % | **6.0 %** | 71.03 € | stávame sa najlacnejší |
| Remington S5901 Coconut | 35.90 € | **33.00 €** | 19.0 % | **9.4 %** | 33.09 € | stávame sa najlacnejší |
| Koma EC23S Midea S8+ | 7.99 € | **5.20 €** | 68.7 % | **9.8 %** | 5.21 € | stávame sa najlacnejší |
| DOMO DO9225G | 54.50 € | **51.90 €** | 10.4 % | **5.1 %** | 48.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 365 Arcus s projekcí | 34.50 € | **31.90 €** | 15.0 % | **6.3 %** | 29.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9149W | 51.50 € | **48.90 €** | 10.9 % | **5.3 %** | 48.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice Solight TE81W | 34.50 € | **31.90 €** | 14.9 % | **6.2 %** | 32.00 € | stávame sa najlacnejší |
| Solight 1V276 vánoční LED dekorace, dřevěný betlém s... | 30.00 € | **27.50 €** | 15.0 % | **5.5 %** | 21.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V280 vánoční LED dekorace, kovový svícen | 33.00 € | **30.50 €** | 14.9 % | **6.2 %** | 24.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční TechnoLine WT 536 | 35.00 € | **32.50 €** | 14.8 % | **6.6 %** | 28.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED okenná reťaz snehuliaci, 6x LED, prísavn... | 7.90 € | **5.40 €** | 55.5 % | **6.3 %** | 2.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INVERTO Ultra - Quad HGLN 40 mm -  0,2 dB | 32.00 € | **29.50 €** | 14.6 % | **5.6 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 465W s radiopřijímačem | 34.00 € | **31.50 €** | 14.2 % | **5.8 %** | 30.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-346 venkovní DVB-T2 anténa | 35.00 € | **32.50 €** | 14.8 % | **6.6 %** | 31.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED stropní světlo Solight WO8014 Penley | 32.00 € | **29.50 €** | 14.4 % | **5.4 %** | 28.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TOMAN TT-7300 - sada ručního nářadí (73 ks) | 34.00 € | **31.50 €** | 14.5 % | **6.1 %** | 30.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zircon Monoblok Twin M-0243 Slim line Skylink | 26.50 € | **24.00 €** | 16.0 % | **5.0 %** | 23.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TOMAN TT-6900 - sada ručního nářadí (69 ks) | 31.00 € | **28.50 €** | 14.9 % | **5.6 %** | 27.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SlowCook S500 - pomalý hrnec | 49.50 € | **47.00 €** | 10.7 % | **5.1 %** | 46.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.50 €** | 15.0 % | **9.4 %** | 49.54 € | stávame sa najlacnejší |
| Multipřepínač TeleTek 13/32 | 467.50 € | **465.00 €** | 15.0 % | **14.4 %** | 465.23 € | stávame sa najlacnejší |
| Prodlužovací kabel na bubnu 50m ORNO OR-AE-13301/50M | 64.50 € | **62.00 €** | 15.4 % | **10.9 %** | 62.25 € | stávame sa najlacnejší |
| Black&Decker BXAP60E | 94.50 € | **92.00 €** | 10.3 % | **7.4 %** | 92.28 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.00 €** | 10.4 % | **8.3 %** | 132.39 € | stávame sa najlacnejší |
| Meteorologická stanice WS 6462 | 52.00 € | **49.50 €** | 14.9 % | **9.4 %** | 49.89 € | stávame sa najlacnejší |
| Beko VRT76325VW | 168.50 € | **166.00 €** | 10.0 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| SONY MDR-EX15APLI,modrá | 9.99 € | **7.50 €** | 40.8 % | **5.7 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MAXXO CC465 | 7.99 € | **5.50 €** | 57.3 % | **8.3 %** | 5.59 € | stávame sa najlacnejší |
| TEFAL MB 756 G 31 | 64.90 € | **62.50 €** | 11.5 % | **7.4 %** | 62.90 € | stávame sa najlacnejší |
| SONY MDR-EX15APPI, růžová | 9.90 € | **7.50 €** | 39.5 % | **5.7 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 508 | 53.90 € | **51.50 €** | 10.6 % | **5.7 %** | 38.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Electric Kettle 17BC | 49.90 € | **47.50 €** | 10.8 % | **5.4 %** | 39.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor kouře NEDIS WIFIDS21WT SmartLife, Wi-Fi | 28.90 € | **26.50 €** | 14.8 % | **5.3 %** | 19.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BRAUN Silk-épil 5560 epilátor | 59.90 € | **57.50 €** | 10.2 % | **5.8 %** | 52.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BRAUN Face 810 | 58.90 € | **56.50 €** | 10.3 % | **5.8 %** | 54.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-323 V2 - set-top box DVB-T2 (H.265/HEVC) | 26.90 € | **24.50 €** | 15.5 % | **5.2 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TOMAN TT-4700 - sada ručního nářadí (47 ks) | 28.90 € | **26.50 €** | 15.3 % | **5.8 %** | 25.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun Series X XT5100 | 46.90 € | **44.50 €** | 10.8 % | **5.2 %** | 43.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZFS1017 | 54.90 € | **52.50 €** | 14.7 % | **9.7 %** | 52.65 € | stávame sa najlacnejší |
| ScanPart Univerzální tekutý odvápňovač 1 | 7.99 € | **5.60 €** | 50.0 % | **5.1 %** | 5.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA HFET10 Filtr pro ETA 0231, 1231 | 6.99 € | **4.60 €** | 66.2 % | **9.4 %** | 4.63 € | stávame sa najlacnejší |
| KOMA HFEX1 - HEPA filtr Electrolux | 9.99 € | **7.60 €** | 44.0 % | **9.6 %** | 7.63 € | stávame sa najlacnejší |
| Koma EC16S - ECG VP 4102S SMS | 4.99 € | **2.60 €** | 108.0 % | **8.4 %** | 2.64 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre DY08, learning code | 8.50 € | **6.20 €** | 45.5 % | **6.1 %** | 6.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MAXXO CC002 | 7.99 € | **5.70 €** | 52.1 % | **8.5 %** | 5.78 € | stávame sa najlacnejší |
| MAXXO CC461 | 7.99 € | **5.70 €** | 52.1 % | **8.5 %** | 5.78 € | stávame sa najlacnejší |
| Maxxo CC693 | 8.99 € | **6.80 €** | 44.7 % | **9.5 %** | 6.83 € | stávame sa najlacnejší |
| Electrolux E206S | 8.99 € | **6.80 €** | 40.0 % | **5.9 %** | 6.89 € | stávame sa najlacnejší |
| BWT fitrační konvice VIDA MEI Petrol | 11.99 € | **9.80 €** | 28.6 % | **5.1 %** | 9.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remington S9300 | 53.00 € | **50.90 €** | 10.1 % | **5.7 %** | 35.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TOMAN TT-3100 - sada ručního nářadí (31 ks) | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal VC204810 | 52.00 € | **49.90 €** | 10.2 % | **5.7 %** | 47.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9135G | 48.00 € | **45.90 €** | 10.1 % | **5.3 %** | 45.99 € | stávame sa najlacnejší |
| Beko VRT74225VI | 155.00 € | **152.90 €** | 10.1 % | **8.6 %** | 153.00 € | stávame sa najlacnejší |
| ETA 632090000 | 13.99 € | **11.90 €** | 27.5 % | **8.5 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 632090020 | 13.99 € | **11.90 €** | 26.9 % | **8.0 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic RP-TCM115E-W, White | 12.59 € | **10.50 €** | 26.2 % | **5.3 %** | 9.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 434190000 | 11.99 € | **9.90 €** | 27.9 % | **5.6 %** | 9.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA ML02PL - Miele F,J,M SMS | 7.99 € | **5.90 €** | 47.6 % | **9.0 %** | 5.95 € | stávame sa najlacnejší |
| REMINGTON D 2400 | 15.99 € | **13.90 €** | 25.8 % | **9.4 %** | 13.98 € | stávame sa najlacnejší |
| Electrolux EF 55 | 6.99 € | **4.90 €** | 54.0 % | **8.0 %** | 4.99 € | stávame sa najlacnejší |
| Bravo Ginno B-4463 černý | 45.90 € | **43.90 €** | 10.8 % | **5.9 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V227-4 LED vánoční závěs hvězdy | 22.50 € | **20.50 €** | 15.6 % | **5.4 %** | 14.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 24360-70 Inspire Kettle | 44.50 € | **42.50 €** | 10.2 % | **5.3 %** | 36.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alma 1660 Dongle - set-top box DVB-T2 (H.265/HEVC) | 22.50 € | **20.50 €** | 15.5 % | **5.2 %** | 15.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDFM2225BK přenosné FM, Bluetooth, napáj... | 24.90 € | **22.90 €** | 15.7 % | **6.4 %** | 17.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V275 vánoční LED dekorace, dřevěný betlém | 23.90 € | **21.90 €** | 15.0 % | **5.4 %** | 16.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester baterií KONNWEI BK100 | 26.90 € | **24.90 €** | 14.9 % | **6.4 %** | 20.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-222 Dongle - set-top box DVB-T2 H.265 | 29.50 € | **27.50 €** | 14.4 % | **6.7 %** | 23.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V265 vánoční LED dekorace, svícen s hvězdami | 22.90 € | **20.90 €** | 15.1 % | **5.0 %** | 16.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION ThermoKettle TK5 Onyx black | 45.50 € | **43.50 €** | 10.8 % | **5.9 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Slow Cooker 3500SB | 51.50 € | **49.50 €** | 10.3 % | **6.0 %** | 46.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 235BK | 25.00 € | **23.00 €** | 14.2 % | **5.1 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla EasyCook AE300 | 44.50 € | **42.50 €** | 10.8 % | **5.8 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL KI170D40 | 44.90 € | **42.90 €** | 10.2 % | **5.3 %** | 40.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION ThermoKettle TK5 Polar white | 45.50 € | **43.50 €** | 10.8 % | **5.9 %** | 41.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wattmetr a měřič spotřeby elektrické energie na DIN ... | 26.50 € | **24.50 €** | 15.9 % | **7.1 %** | 22.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Svěrák Basetech 1553063 | 24.90 € | **22.90 €** | 15.7 % | **6.4 %** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0913-B Powerbanka 10000mAh MagSafe | 22.50 € | **20.50 €** | 16.2 % | **5.9 %** | 19.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo GARNI 063H | 23.50 € | **21.50 €** | 16.2 % | **6.3 %** | 20.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 110H bezdrátové čidlo | 23.50 € | **21.50 €** | 15.7 % | **5.9 %** | 21.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 092H bezdrátové čidlo | 28.50 € | **26.50 €** | 14.5 % | **6.5 %** | 26.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **50.50 €** | 10.3 % | **6.1 %** | 50.73 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 14.50 € | **12.50 €** | 57.0 % | **35.3 %** | 12.77 € | stávame sa najlacnejší |
| Digitální osobní váha ADE BA 1600 FITvigo s Bluetoot... | 58.50 € | **56.50 €** | 15.1 % | **11.2 %** | 56.78 € | stávame sa najlacnejší |
| Meteostanice TESLA Device MS360se - chytrá WiFi s ex... | 61.50 € | **59.50 €** | 15.3 % | **11.5 %** | 59.79 € | stávame sa najlacnejší |
| Alcad CA-215 | 28.00 € | **26.00 €** | 14.1 % | **6.0 %** | 26.41 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Tassimo Jacobs Café au Lait 16x11,5g | 8.49 € | **6.50 €** | 38.3 % | **5.9 %** | 4.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY ICFC1W | 36.90 € | **35.00 €** | 10.7 % | **5.0 %** | 29.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester a nabíječka baterií KONNWEI KW510 3v1 | 49.90 € | **48.00 €** | 15.4 % | **11.1 %** | 48.01 € | stávame sa najlacnejší |
| Budík digitální projekční GARNI 140 čas a vnitřní te... | 25.90 € | **24.00 €** | 15.6 % | **7.1 %** | 24.18 € | stávame sa najlacnejší |
| Koma CP01S - Concept 9000 SMS | 6.99 € | **5.10 €** | 49.6 % | **9.1 %** | 5.14 € | stávame sa najlacnejší |
| Maxxo CC008 | 7.99 € | **6.10 €** | 42.8 % | **9.0 %** | 6.16 € | stávame sa najlacnejší |
| ScanPart Čistící tabletky 6ks na vodní k | 5.99 € | **4.20 €** | 52.7 % | **7.0 %** | 4.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma AG05S - AEG č. 5 Vampyrino SMS | 5.99 € | **4.20 €** | 56.1 % | **9.4 %** | 4.22 € | stávame sa najlacnejší |
| Koma ET18S Eta Capolo | 5.99 € | **4.20 €** | 56.1 % | **9.4 %** | 4.22 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.70 € | **4.00 €** | 53.4 % | **7.7 %** | 3.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma DW02S - Daewoo RC105 SMS | 5.99 € | **4.30 €** | 49.8 % | **7.6 %** | 4.40 € | stávame sa najlacnejší |
| Koma RW02S-Rowenta Compacteo SMS | 5.99 € | **4.30 €** | 49.8 % | **7.6 %** | 4.40 € | stávame sa najlacnejší |
| KOMA PAR1 - Univerzální parket. hubice | 9.99 € | **8.30 €** | 31.0 % | **8.8 %** | 8.39 € | stávame sa najlacnejší |
| ROWENTA AC 2320 | 43.50 € | **41.90 €** | 10.0 % | **6.0 %** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V257 LED vánoční dekorace sněhulák | 20.50 € | **18.90 €** | 15.8 % | **6.8 %** | 14.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V277 vánoční LED dekorace, kolotoč, otáčejí... | 19.50 € | **17.90 €** | 16.0 % | **6.5 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V239 LED vánoční dekorace věnec | 18.50 € | **16.90 €** | 16.1 % | **6.1 %** | 13.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V238 LED vánoční dekorace stromek | 20.50 € | **18.90 €** | 15.8 % | **6.8 %** | 15.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper Bt603-Y Vaflovač 1000W | 33.50 € | **31.90 €** | 10.6 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AI - 223 linkový zesilovač se 2 výstupy / G=25dB | 20.50 € | **18.90 €** | 15.9 % | **6.9 %** | 18.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0911 Powerbanka 5000mAh MagSafe | 20.50 € | **18.90 €** | 14.9 % | **6.0 %** | 18.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **18.90 €** | 14.9 % | **6.0 %** | 18.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-40490 | 33.50 € | **31.90 €** | 10.8 % | **5.6 %** | 31.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bellissima 11874 Creativity žehlička | 30.50 € | **28.90 €** | 11.0 % | **5.2 %** | 28.97 € | stávame sa najlacnejší |
| Solight 1V256 LED vánoční dekorace vesnička | 17.50 € | **15.90 €** | 16.3 % | **5.7 %** | 12.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 5.10 € | **3.50 €** | 54.1 % | **5.8 %** | 3.54 € | stávame sa najlacnejší |
| Koma HV20S - Hoover Pura Power SMS | 5.99 € | **4.40 €** | 46.2 % | **7.4 %** | 1.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma AQ02S - AquaVac Multi PRO SMS | 7.99 € | **6.40 €** | 36.8 % | **9.5 %** | 6.43 € | stávame sa najlacnejší |
| Bezdrátový hlásič pohybu gong Solight 1D22 | 22.00 € | **20.50 €** | 15.0 % | **7.2 %** | 17.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Lea B-4574 červená | 30.50 € | **29.00 €** | 10.6 % | **5.1 %** | 25.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Plus Neo TT7465 | 40.00 € | **38.50 €** | 10.1 % | **6.0 %** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada kabelových oček, fastonů a smršťovacích bužírek... | 16.50 € | **15.00 €** | 15.9 % | **5.4 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 32F bezdrátové čidlo | 16.50 € | **15.00 €** | 16.1 % | **5.6 %** | 14.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **11.00 €** | 53.3 % | **34.9 %** | 11.12 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.50 € | **95.00 €** | 15.0 % | **13.2 %** | 95.22 € | stávame sa najlacnejší |
| Bellissima 11872 B-TRAVEL Cestovní fén | 31.50 € | **30.00 €** | 11.3 % | **6.0 %** | 30.27 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **13.50 €** | 54.0 % | **38.6 %** | 13.85 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 519 | 35.00 € | **33.50 €** | 14.8 % | **9.9 %** | 33.90 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 12.50 € | **11.00 €** | 53.5 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Panasonic RP-TCM115E-A, Blue | 11.99 € | **10.50 €** | 20.3 % | **5.4 %** | 9.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA UF01 uhlíkový filtr odsavač 60x50cm | 6.99 € | **5.50 €** | 37.9 % | **8.5 %** | 5.57 € | stávame sa najlacnejší |
| Koma SB01S-Electrolux Universal BAG | 6.79 € | **5.30 €** | 38.7 % | **8.3 %** | 5.38 € | stávame sa najlacnejší |
| Evolveo Shark, aktivní venkovní anténa | 26.99 € | **25.50 €** | 12.8 % | **6.6 %** | 22.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 750 | 119.90 € | **118.50 €** | 15.1 % | **13.8 %** | 118.89 € | stávame sa najlacnejší |
| Solight 1V278 vánoční LED dekorace, kometa | 14.90 € | **13.50 €** | 16.0 % | **5.1 %** | 10.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ardes BBQ 01 gril | 35.90 € | **34.50 €** | 10.1 % | **5.8 %** | 20.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V250 LED vánoční dekorace městečko s kostelem | 17.90 € | **16.50 €** | 15.6 % | **6.5 %** | 12.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V266 vánoční dekorace lucerna s LED svíčkou | 17.90 € | **16.50 €** | 15.6 % | **6.5 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V227 LED vánoční závěs hvězdy | 16.90 € | **15.50 €** | 15.7 % | **6.1 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SlowCook S350 - pomalý hrnec | 31.90 € | **30.50 €** | 10.0 % | **5.2 %** | 27.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bellissima 11886 Ceramic Air Kulmofén | 36.90 € | **35.50 €** | 10.1 % | **5.9 %** | 33.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 23.90 € | **22.50 €** | 15.5 % | **8.7 %** | 22.52 € | stávame sa najlacnejší |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 23.90 € | **22.50 €** | 15.5 % | **8.7 %** | 22.54 € | stávame sa najlacnejší |
| RUSSELL HOBBS 21391-56/RH | 50.90 € | **49.50 €** | 13.0 % | **9.9 %** | 49.55 € | stávame sa najlacnejší |
| Grundig HS7034 | 19.90 € | **18.50 €** | 17.9 % | **9.6 %** | 18.56 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 18.90 € | **17.50 €** | 54.6 % | **43.1 %** | 17.70 € | stávame sa najlacnejší |
| EZIDRI Sada sít pro SNACKMAKER FD500 | 26.90 € | **25.50 €** | 11.5 % | **5.7 %** | 25.84 € | stávame sa najlacnejší |
| REMINGTON S 8670 | 39.90 € | **38.50 €** | 12.9 % | **8.9 %** | 38.89 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.90 € | **18.50 €** | 15.2 % | **7.1 %** | 18.89 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.50 €** | 12.2 % | **7.7 %** | 33.90 € | stávame sa najlacnejší |
| Koma EI09S - EIO č. 9 Futura SMS | 5.99 € | **4.60 €** | 42.4 % | **9.4 %** | 4.63 € | stávame sa najlacnejší |
| Koma HV30S - Hoover Telios SMS | 5.99 € | **4.60 €** | 42.4 % | **9.4 %** | 4.63 € | stávame sa najlacnejší |
| Koma HV58S - Hoover Sprint SMS | 5.99 € | **4.60 €** | 42.4 % | **9.4 %** | 4.63 € | stávame sa najlacnejší |
| Koma RW03S - Rowenta Silence Force | 5.99 € | **4.60 €** | 42.4 % | **9.4 %** | 4.63 € | stávame sa najlacnejší |
| Koma ML01S - Miele H,G,N SMS | 6.99 € | **5.60 €** | 35.6 % | **8.7 %** | 5.67 € | stávame sa najlacnejší |
| Koma ML02S - Miele F,J,M SMS | 6.99 € | **5.60 €** | 35.6 % | **8.7 %** | 5.67 € | stávame sa najlacnejší |
| Electrolux ES 17 | 5.99 € | **4.60 €** | 40.3 % | **7.8 %** | 4.69 € | stávame sa najlacnejší |
| Koma EC10S | 3.99 € | **2.60 €** | 66.4 % | **8.4 %** | 2.64 € | stávame sa najlacnejší |
| Koma EC11S - ECG | 3.99 € | **2.60 €** | 66.4 % | **8.4 %** | 2.64 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **3.70 €** | 54.0 % | **13.9 %** | 3.79 € | stávame sa najlacnejší |
| Maxxo vakuovací sáčky 50ks 22 x 28cm | 9.99 € | **8.70 €** | 25.1 % | **9.0 %** | 8.78 € | stávame sa najlacnejší |
| KOMA WB02PL-Rowenta Wonderbag | 7.99 € | **6.70 €** | 31.0 % | **9.8 %** | 6.71 € | stávame sa najlacnejší |
| Koma DW03S - Daewoo RC 300 SMS | 5.59 € | **4.30 €** | 39.8 % | **7.6 %** | 4.40 € | stávame sa najlacnejší |
| KOMA ET36S-SMART BAG-Concept | 5.99 € | **4.70 €** | 37.2 % | **7.6 %** | 4.80 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.90 € | **3.70 €** | 54.4 % | **16.6 %** | 3.79 € | stávame sa najlacnejší |
| Koma PR03S - Progress PC 3103 SMS | 5.39 € | **4.20 €** | 40.5 % | **9.4 %** | 4.22 € | stávame sa najlacnejší |
| SANITAS SHK 28 | 32.00 € | **30.90 €** | 10.1 % | **6.3 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO47 přepěťová ochrana | 15.00 € | **13.90 €** | 15.3 % | **6.8 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO57 přepěťová ochrana | 15.00 € | **13.90 €** | 15.4 % | **6.9 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO54 přepěťová ochrana | 14.00 € | **12.90 €** | 15.0 % | **5.9 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V253 vánoční LED dekorace, modulární zimní ... | 10.90 € | **9.80 €** | 17.1 % | **5.3 %** | 7.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 052H bezdrátové čidlo | 16.00 € | **14.90 €** | 14.2 % | **6.4 %** | 14.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 163.00 € | **161.90 €** | 14.9 % | **14.2 %** | 162.00 € | stávame sa najlacnejší |
| Koma DL12S - De Longhi XLence SMS | 5.69 € | **4.60 €** | 35.3 % | **9.4 %** | 4.63 € | stávame sa najlacnejší |
| Koma AG28S - AEG č. 28 Vampyr SMS | 5.69 € | **4.60 €** | 33.7 % | **8.1 %** | 4.68 € | stávame sa najlacnejší |
| Electrolux EF 54 | 3.99 € | **2.90 €** | 50.2 % | **9.2 %** | 2.92 € | stávame sa najlacnejší |
| Koma ET16S - ETA Aston 1465 SMS | 4.99 € | **3.90 €** | 37.5 % | **7.5 %** | 3.99 € | stávame sa najlacnejší |
| Koma ET33S - ETA Viva 1458 SMS | 4.99 € | **3.90 €** | 37.5 % | **7.5 %** | 3.99 € | stávame sa najlacnejší |
| Koma EX02S - Electrolux Mondo SMS | 4.99 € | **3.90 €** | 37.5 % | **7.5 %** | 3.99 € | stávame sa najlacnejší |
| Koma AG26S - AEG Vampyr SMS | 5.99 € | **4.90 €** | 34.2 % | **9.7 %** | 4.91 € | stávame sa najlacnejší |
| Electrolux Menalux 6103 P | 5.99 € | **4.90 €** | 32.0 % | **8.0 %** | 4.99 € | stávame sa najlacnejší |
| Rowenta ZR710001 | 26.50 € | **25.50 €** | 10.8 % | **6.6 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PANASONIC RP-HF100ME-K černá 559395 | 21.50 € | **20.50 €** | 11.9 % | **6.7 %** | 11.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR710101 | 19.50 € | **18.50 €** | 11.3 % | **5.6 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI Síto pro FD1000 ULTRA | 14.50 € | **13.50 €** | 13.4 % | **5.5 %** | 5.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0042A | 12.90 € | **11.90 €** | 15.4 % | **6.4 %** | 3.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BRAUN Náhradní náplň CCR4 | 23.90 € | **22.90 €** | 11.4 % | **6.7 %** | 15.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta SF1810F0 | 24.90 € | **23.90 €** | 11.2 % | **6.7 %** | 16.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR177003 | 20.90 € | **19.90 €** | 12.0 % | **6.7 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26470-56 | 20.90 € | **19.90 €** | 11.9 % | **6.6 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO62 přepěťová ochrana | 15.50 € | **14.50 €** | 15.3 % | **7.9 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips BHS375/00 | 25.50 € | **24.50 €** | 10.7 % | **6.4 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 4100 | 15.50 € | **14.50 €** | 14.7 % | **7.3 %** | 11.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér 2,4GHz AMIKO WLN-881 (MT7601) 150Mb... | 13.90 € | **12.90 €** | 15.7 % | **7.3 %** | 10.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL ZP 300138 | 25.50 € | **24.50 €** | 10.7 % | **6.3 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION AirSonic Star | 30.50 € | **29.50 €** | 10.4 % | **6.8 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Kettle K1 Crystal Glass W | 26.50 € | **25.50 €** | 10.5 % | **6.3 %** | 23.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Qualita Oro 500 g | 14.90 € | **13.90 €** | 12.6 % | **5.0 %** | 12.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 260 | 14.50 € | **13.50 €** | 14.1 % | **6.2 %** | 12.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá WiFi zásuvka Solight DTY01WIFI s měřením spot... | 14.00 € | **13.00 €** | 13.5 % | **5.4 %** | 12.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panini grill TEESA TSA3234, toaster, opékač 1000W, 3... | 18.50 € | **17.50 €** | 13.8 % | **7.6 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester elektrických zásuvek RCD UNI-T UT07B-EU | 11.50 € | **10.50 €** | 15.7 % | **5.7 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzální dálkový ovladač SUPERIOR LG – Bluetooth ... | 11.90 € | **10.90 €** | 16.6 % | **6.8 %** | 10.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzální dálkový ovladač SUPERIOR Samsung – Bluet... | 11.90 € | **10.90 €** | 16.6 % | **6.8 %** | 10.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 030H bezdrátové čidlo | 13.90 € | **12.90 €** | 16.1 % | **7.8 %** | 12.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Časovač (minutka) GARNI KT2 | 17.50 € | **16.50 €** | 14.8 % | **8.3 %** | 16.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips SHP2500/10 | 21.90 € | **20.90 €** | 11.8 % | **6.7 %** | 20.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-P101CUD100 | 34.90 € | **33.90 €** | 10.7 % | **7.5 %** | 34.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **17.00 €** | 52.4 % | **44.0 %** | 17.12 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 235BS | 25.00 € | **24.00 €** | 14.2 % | **9.6 %** | 24.19 € | stávame sa najlacnejší |
| Zvonek domovní bezdrátový REBEL URZ3264 | 19.00 € | **18.00 €** | 14.7 % | **8.6 %** | 18.19 € | stávame sa najlacnejší |
| Alcad CA-210 | 27.00 € | **26.00 €** | 15.0 % | **10.7 %** | 26.24 € | stávame sa najlacnejší |
| Alcad AI-200 zesilovač | 17.00 € | **16.00 €** | 14.2 % | **7.5 %** | 16.25 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.27 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.00 € | **31.00 €** | 14.3 % | **10.7 %** | 31.29 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 100mm x 20m | 14.00 € | **13.00 €** | 14.4 % | **6.2 %** | 13.29 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.33 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.33 € | stávame sa najlacnejší |
| VIRONE 350x350 plastová revizní dvířka - černá | 16.00 € | **15.00 €** | 14.5 % | **7.4 %** | 15.42 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell DGW | 21.00 € | **20.00 €** | 14.5 % | **9.1 %** | 20.47 € | stávame sa najlacnejší |
| Koma ET29S - ETA Silent 1471 SMS | 5.99 € | **5.00 €** | 30.9 % | **9.3 %** | 5.03 € | stávame sa najlacnejší |
| Koma ZE01PL - ZELMER Cobra | 5.99 € | **5.00 €** | 30.9 % | **9.3 %** | 5.03 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 10.6 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| Stykač Sentai GMC-18 3x400V/18A 3P na DIN lištu | 11.90 € | **11.00 €** | 14.6 % | **6.0 %** | 10.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.10 €** | 53.4 % | **39.6 %** | 9.17 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 3.30 € | **2.40 €** | 55.1 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 100x mini LED, 10... | 3.30 € | **2.40 €** | 55.1 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 59.90 € | **59.00 €** | 15.0 % | **13.3 %** | 59.09 € | stávame sa najlacnejší |
| Zásuvkový termostat s časovým spínačem KT3100 | 16.90 € | **16.00 €** | 14.7 % | **8.6 %** | 16.19 € | stávame sa najlacnejší |
| Zelmer rychlovarná konvice ZCK1275 | 39.90 € | **39.00 €** | 11.9 % | **9.4 %** | 39.21 € | stávame sa najlacnejší |
| Salente IceQueen černá | 19.90 € | **19.00 €** | 10.2 % | **5.2 %** | 19.49 € | stávame sa najlacnejší |
| Koma ET23S - ETA Nobel 1861 | 4.99 € | **4.10 €** | 33.5 % | **9.6 %** | 4.11 € | stávame sa najlacnejší |
| Koma EX07S - Electrolux Energica SMS | 4.99 € | **4.10 €** | 33.5 % | **9.6 %** | 4.11 € | stávame sa najlacnejší |
| Koma ZE02S - Zelmer Meteor SMS | 4.99 € | **4.10 €** | 33.5 % | **9.6 %** | 4.11 € | stávame sa najlacnejší |
| Koma ZE04S - Zelmer Twist, Twister SMS | 4.99 € | **4.10 €** | 33.5 % | **9.6 %** | 4.11 € | stávame sa najlacnejší |
| Koma ZE06S - ZELMER Z-BAG SMS | 4.99 € | **4.10 €** | 33.5 % | **9.6 %** | 4.11 € | stávame sa najlacnejší |
| Koma BS67S - Bosch Typ G SMS | 5.99 € | **5.10 €** | 28.2 % | **9.1 %** | 5.14 € | stávame sa najlacnejší |
| MAXXO rolky 2x28cmx3m | 6.99 € | **6.10 €** | 24.4 % | **8.5 %** | 6.18 € | stávame sa najlacnejší |
| Maxxo náhradní sáčky 30ks 28x35cm | 9.99 € | **9.10 €** | 18.9 % | **8.3 %** | 9.19 € | stávame sa najlacnejší |
| Koma EC05S - ECG VP 901 SMS | 3.49 € | **2.60 €** | 45.5 % | **8.4 %** | 2.64 € | stávame sa najlacnejší |
| Bezdotykový spínač ORNO OR-CR-268 | 9.30 € | **8.50 €** | 15.1 % | **5.2 %** | 8.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stykač Showpelec CJX3-20 230V/20A 2P na DIN lištu | 10.50 € | **9.70 €** | 14.4 % | **5.7 %** | 9.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EF 1 | 3.99 € | **3.20 €** | 36.3 % | **9.3 %** | 3.22 € | stávame sa najlacnejší |
| Koma ZE05S - Zelmer Vodník SMS | 3.99 € | **3.20 €** | 35.7 % | **8.9 %** | 3.23 € | stávame sa najlacnejší |
| MAXXO BIO odvápňovač 250ml | 3.99 € | **3.20 €** | 34.6 % | **8.0 %** | 3.26 € | stávame sa najlacnejší |
| Solight 1V268 vánoční LED dekorace, hvězda stolní, p... | 7.70 € | **7.00 €** | 15.5 % | **5.0 %** | 5.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V232 vánoční dekorace dřevěná lucerna s LED... | 10.00 € | **9.30 €** | 13.9 % | **5.9 %** | 7.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT filtrační konvice VIDA MEI bílá | 10.50 € | **9.80 €** | 12.6 % | **5.1 %** | 9.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM1249 USB-C - HDMI | 8.60 € | **7.90 €** | 15.0 % | **5.6 %** | 8.00 € | stávame sa najlacnejší |
| ETA 234890300 | 5.99 € | **5.30 €** | 23.6 % | **9.4 %** | 5.33 € | stávame sa najlacnejší |
| Zelmer ZFD1010 | 58.50 € | **57.90 €** | 10.4 % | **9.2 %** | 57.93 € | stávame sa najlacnejší |
| Poštovní schránka VIRONE MB-2/A HAITI  s tubusem na ... | 23.50 € | **22.90 €** | 15.9 % | **13.0 %** | 22.94 € | stávame sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 40mm x 20m | 8.80 € | **8.20 €** | 15.4 % | **7.5 %** | 8.27 € | stávame sa najlacnejší |
| Solight 1V267 vánoční LED dekorace zasněžené zimní k... | 6.70 € | **6.10 €** | 15.7 % | **5.3 %** | 4.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovládač Tesla TE-323 originální | 7.40 € | **6.80 €** | 15.7 % | **6.3 %** | 6.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM0348 5G, USB - USB-C 1m | 7.90 € | **7.30 €** | 15.1 % | **6.4 %** | 7.31 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Electrolux E200S | 12.50 € | **11.90 €** | 10.7 % | **5.4 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lapač hmyzu TEESA TSA0219 | 7.60 € | **7.00 €** | 14.4 % | **5.4 %** | 4.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PO46 přepěťová ochrana | 11.50 € | **10.90 €** | 14.2 % | **8.2 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot REBEL VOICE BLUE | 11.50 € | **10.90 €** | 13.7 % | **7.8 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čelovka Solight WH27 | 7.30 € | **6.70 €** | 15.0 % | **5.6 %** | 5.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REMINGTON CI1A119 19mmm Curling Tong | 15.50 € | **14.90 €** | 12.0 % | **7.7 %** | 14.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA MOB360 Břity pro OneBlade 360, 2ks | 15.50 € | **14.90 €** | 10.6 % | **6.4 %** | 14.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem GARNI 151TH | 11.50 € | **10.90 €** | 13.1 % | **7.2 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amiko dálkový ovladač 8150, 8240, 8320, 8330, 8340, ... | 11.50 € | **10.90 €** | 13.2 % | **7.3 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač Amiko CCC - originál | 11.50 € | **10.90 €** | 13.2 % | **7.3 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 bílá | 16.50 € | **15.90 €** | 11.0 % | **6.9 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 černá | 16.50 € | **15.90 €** | 11.0 % | **6.9 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 modrá | 16.50 € | **15.90 €** | 11.0 % | **6.9 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.50 € | **11.90 €** | 16.3 % | **10.7 %** | 11.91 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 50mm x 20m | 9.50 € | **8.90 €** | 14.9 % | **7.7 %** | 8.98 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.40 €** | 53.7 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **104.90 €** | 10.5 % | **9.9 %** | 105.00 € | stávame sa najlacnejší |
| Koma ET30S - ETA Sting 430 SMS | 4.69 € | **4.10 €** | 23.8 % | **8.2 %** | 4.17 € | stávame sa najlacnejší |
| Koma ET28S - ETA Trino 1454 SMS | 4.49 € | **3.90 €** | 23.7 % | **7.5 %** | 3.99 € | stávame sa najlacnejší |
| ROWENTA ZR005901 | 14.00 € | **13.50 €** | 10.4 % | **6.5 %** | 5.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT VIDA MEI bílá, 2,6l + 3 filtry | 19.00 € | **18.50 €** | 10.6 % | **7.7 %** | 14.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1V236 vánoční LED dřevěná dekorace, stromek | 11.00 € | **10.50 €** | 13.9 % | **8.7 %** | 8.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 029 bezdrátové čidlo | 12.00 € | **11.50 €** | 12.7 % | **8.0 %** | 10.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlačítko bezdrátové Solight 1L74T | 6.70 € | **6.20 €** | 14.7 % | **6.1 %** | 5.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ5004 A60 E27 7,2W | 5.90 € | **5.40 €** | 15.6 % | **5.8 %** | 4.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA MOB360 Břity pro OneBlade 360, 1ks | 9.70 € | **9.20 €** | 10.9 % | **5.2 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM1269-1P USB-C - USB-C  1m | 6.40 € | **5.90 €** | 15.6 % | **6.6 %** | 5.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.88 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.70 €** | 54.5 % | **36.1 %** | 3.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 3.10 € | **2.60 €** | 52.7 % | **28.1 %** | 2.69 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 25.00 € | **24.50 €** | 14.2 % | **11.9 %** | 24.61 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 25.00 € | **24.50 €** | 14.2 % | **11.9 %** | 24.61 € | stávame sa najlacnejší |
| Detektor kouře ORNO OR-DC-637 | 12.50 € | **12.00 €** | 14.1 % | **9.5 %** | 12.12 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **17.00 €** | 11.9 % | **8.7 %** | 17.13 € | stávame sa najlacnejší |
| VIRONE 400x400 plastová revizní dvířka - černá | 17.00 € | **16.50 €** | 13.4 % | **10.0 %** | 16.67 € | stávame sa najlacnejší |
| KOMA MOB360 Břity pro OneBlade 360, 3ks | 21.50 € | **21.00 €** | 11.5 % | **9.0 %** | 21.20 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **16.00 €** | 56.5 % | **51.8 %** | 16.27 € | stávame sa najlacnejší |
| Salente Friteoiicz | 54.50 € | **54.00 €** | 10.1 % | **9.0 %** | 54.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| LENCO ICR-230-1 | 22.50 € | **22.00 €** | 10.9 % | **8.5 %** | 22.31 € | stávame sa najlacnejší |
| Prodlužovací kabel ORNO OR-AE-13297/3M | 12.50 € | **12.00 €** | 13.9 % | **9.4 %** | 12.33 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.50 €** | 14.8 % | **13.1 %** | 34.90 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.50 € | **63.00 €** | 14.7 % | **13.8 %** | 63.42 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **13.00 €** | 55.2 % | **49.5 %** | 13.43 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.50 € | **48.00 €** | 14.6 % | **13.4 %** | 48.46 € | stávame sa najlacnejší |
| Tefal CY851130 | 202.50 € | **202.00 €** | 10.0 % | **9.7 %** | 202.49 € | stávame sa najlacnejší |
| ETA 433790000 | 11.99 € | **11.50 €** | 12.3 % | **7.7 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart Čistící tabletky 10ks | 4.99 € | **4.50 €** | 18.6 % | **7.0 %** | 3.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koma EX06S - Electrolux XIO SMS | 4.99 € | **4.50 €** | 21.8 % | **9.9 %** | 4.51 € | stávame sa najlacnejší |
| Tesla AirCook & Grill QG600 | 105.90 € | **105.50 €** | 10.0 % | **9.6 %** | 105.66 € | stávame sa najlacnejší |
| LED žárovka SOLIGHT WZ5003 A60 E27 5,0W | 4.90 € | **4.50 €** | 15.1 % | **5.7 %** | 4.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO7276S-SET2 | 10.90 € | **10.50 €** | 10.2 % | **6.2 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.50 €** | 55.6 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Kabel KRUGER & MATZ KM1269-1BL USB-C - USB-C  1m | 6.40 € | **6.00 €** | 15.6 % | **8.4 %** | 6.09 € | stávame sa najlacnejší |
| Solight LED snehuliak vonkajšií 40LED, teplá beila, ... | 11.90 € | **11.50 €** | 20.3 % | **16.3 %** | 11.87 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| VIRONE 250x300 plastová revizní dvířka - černá | 7.80 € | **7.40 €** | 15.5 % | **9.6 %** | 7.48 € | stávame sa najlacnejší |
| VIRONE 300x300 plastová revizní dvířka - černá | 8.20 € | **7.80 €** | 14.5 % | **9.0 %** | 7.90 € | stávame sa najlacnejší |
| Zásuvka ORNO OR-AE-1346 na kabel trojnásobná, IP44, ... | 8.70 € | **8.30 €** | 14.8 % | **9.5 %** | 8.31 € | stávame sa najlacnejší |
| Ufesa DC Essential SC8310 | 25.90 € | **25.50 €** | 11.2 % | **9.5 %** | 25.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Bravo B-4227 Kulmofén stříbrná-černý | 18.90 € | **18.50 €** | 11.4 % | **9.1 %** | 18.67 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.50 €** | 10.3 % | **9.5 %** | 58.67 € | stávame sa najlacnejší |
| Remington CI5519 | 33.90 € | **33.50 €** | 10.2 % | **8.9 %** | 33.81 € | stávame sa najlacnejší |
| Koma KF02 - Filtr do kávovaru č. 2 | 2.99 € | **2.60 €** | 25.3 % | **9.0 %** | 2.62 € | stávame sa najlacnejší |
| Kabel KRUGER & MATZ KM1268-1BL USB - USB-C  1m | 4.20 € | **3.90 €** | 15.0 % | **6.8 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM1268-1P USB - USB-C  1m | 4.20 € | **3.90 €** | 15.0 % | **6.8 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.20 € | **3.90 €** | 54.5 % | **43.5 %** | 3.94 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 10W, E27, 3000K... | 1.30 € | **1.00 €** | 42.8 % | **9.9 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto LUNGO INTENSO 16Cap | 6.30 € | **6.00 €** | 11.0 % | **5.7 %** | 4.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| STARBUCKS Caffe Latte 12cap | 6.30 € | **6.00 €** | 11.0 % | **5.7 %** | 4.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tassimo Jacobs Caffe Crema Classico16x7g | 6.80 € | **6.50 €** | 10.7 % | **5.9 %** | 5.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto ESPRESSO 16Cap | 6.30 € | **6.00 €** | 11.0 % | **5.7 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto NESQUIK 16Cap | 6.30 € | **6.00 €** | 11.0 % | **5.7 %** | 4.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® Dolce Gusto® Café au Lait 16 ks | 6.30 € | **6.00 €** | 11.0 % | **5.7 %** | 4.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® Dolce Gusto® Latte Macch 16ks | 6.30 € | **6.00 €** | 11.0 % | **5.7 %** | 4.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAPPUCCINO 16Cap | 6.30 € | **6.00 €** | 11.0 % | **5.7 %** | 5.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CORTADO 16Cap | 6.30 € | **6.00 €** | 11.0 % | **5.7 %** | 5.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ535 E27 22W | 4.30 € | **4.00 €** | 15.8 % | **7.7 %** | 3.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ536 E27 22W | 4.30 € | **4.00 €** | 15.8 % | **7.7 %** | 3.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé DG Grande New York kapsle 18 ks | 6.30 € | **6.00 €** | 11.0 % | **5.7 %** | 5.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA - ND Nástavec na tvrdé ETA141787104 | 6.20 € | **5.90 €** | 11.5 % | **6.1 %** | 5.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel KRUGER & MATZ KM1262  USB-C - USB-A 0,5m | 4.60 € | **4.30 €** | 14.7 % | **7.2 %** | 4.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEPER BEP-90349 | 6.50 € | **6.20 €** | 11.3 % | **6.1 %** | 6.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **4.70 €** | 54.0 % | **44.7 %** | 4.71 € | stávame sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 20mm x 20m | 4.80 € | **4.50 €** | 15.5 % | **8.2 %** | 4.51 € | stávame sa najlacnejší |
| VIRONE 150x300 plastová revizní dvířka - černá | 5.60 € | **5.30 €** | 14.7 % | **8.5 %** | 5.39 € | stávame sa najlacnejší |
| EZIDRI Síťka pro FD1000 ULTRA | 5.30 € | **5.00 €** | 11.6 % | **5.3 %** | 5.09 € | stávame sa najlacnejší |
| VIRONE 200x200 plastová revizní dvířka - černá | 5.00 € | **4.70 €** | 14.5 % | **7.6 %** | 4.80 € | stávame sa najlacnejší |
| Koma ET19S - ETA Domino 1419 SMS | 3.99 € | **3.70 €** | 18.4 % | **9.8 %** | 3.71 € | stávame sa najlacnejší |
| Koma ET20S - ETA Draco, Arcus  SMS | 4.49 € | **4.20 €** | 17.0 % | **9.4 %** | 4.22 € | stávame sa najlacnejší |
| L'OR COLOMBIA 10ks kapsle | 4.50 € | **4.30 €** | 11.2 % | **6.3 %** | 3.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| L'OR INDIA 10ks kapsle | 4.50 € | **4.30 €** | 11.2 % | **6.3 %** | 3.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ533 E27 18W | 3.00 € | **2.80 €** | 14.5 % | **6.9 %** | 2.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ534 E27 18W | 3.00 € | **2.80 €** | 14.5 % | **6.9 %** | 2.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový kabel H05RR-F 3G2,5 (CGSG)  3x2,5 guma, venkovní | 2.70 € | **2.50 €** | 15.5 % | **7.0 %** | 2.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| L'OR Lungo Elegante 10ks kapsle | 4.50 € | **4.30 €** | 11.2 % | **6.3 %** | 3.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Izolační páska KAPTON, jantarová samolepící 10mm x 20m | 2.70 € | **2.50 €** | 16.8 % | **8.1 %** | 2.51 € | stávame sa najlacnejší |
| VIRONE 200x250 plastová revizní dvířka - černá | 5.40 € | **5.20 €** | 14.3 % | **10.1 %** | 5.22 € | stávame sa najlacnejší |
| VIRONE 250x250 plastová revizní dvířka - černá | 6.40 € | **6.20 €** | 14.6 % | **11.0 %** | 6.23 € | stávame sa najlacnejší |
| Tassimo Jacobs Cappuccino classico 260g | 6.80 € | **6.60 €** | 10.7 % | **7.5 %** | 6.63 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| VIRONE 150x200 plastová revizní dvířka - černá | 4.30 € | **4.10 €** | 15.8 % | **10.4 %** | 4.14 € | stávame sa najlacnejší |
| VIRONE 200x300 plastová revizní dvířka - černá | 5.80 € | **5.60 €** | 14.2 % | **10.2 %** | 5.64 € | stávame sa najlacnejší |
| Nabíječka USB KRUGER & MATZ KM0851 | 6.80 € | **6.60 €** | 15.4 % | **12.0 %** | 6.64 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda červená, závesná, 60cm,... | 4.50 € | **4.30 €** | 49.3 % | **42.7 %** | 4.37 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.10 € | **0.90 €** | 44.2 % | **18.0 %** | 0.99 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595l... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.09 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.30 € | **3.10 €** | 52.4 % | **43.2 %** | 3.14 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.90 € | **3.70 €** | 53.2 % | **45.3 %** | 3.79 € | stávame sa najlacnejší |
| Starbucks White Mocha 12 ks | 6.10 € | **5.90 €** | 10.2 % | **6.6 %** | 4.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 10.00 € | **9.80 €** | 53.4 % | **50.3 %** | 9.90 € | stávame sa najlacnejší |
| Koma ET07S - ETA Optimo 1406, Astro | 3.19 € | **3.00 €** | 14.3 % | **7.4 %** | 3.07 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 4000K... | 5.20 € | **5.10 €** | 48.3 % | **45.5 %** | 5.18 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 6000K... | 5.20 € | **5.10 €** | 48.3 % | **45.5 %** | 5.18 € | stávame sa najlacnejší |
| Koma TF01-Tukový filtr do odsávačů par | 4.20 € | **4.10 €** | 10.5 % | **7.9 %** | 4.18 € | stávame sa najlacnejší |
| LED žárovka SOLIGHT WZ509A-2 A60 E27 12W | 2.10 € | **2.00 €** | 15.4 % | **9.9 %** | 1.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ507A-2 A60 E27 12W | 2.10 € | **2.00 €** | 15.4 % | **9.9 %** | 1.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ508A-2 A60 E27 12W | 2.10 € | **2.00 €** | 15.4 % | **9.9 %** | 1.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ401A-1 E14 4W | 2.40 € | **2.30 €** | 13.4 % | **8.7 %** | 1.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový vodič H07V-K 6,00 hnědá (CYA) | 1.50 € | **1.40 €** | 18.4 % | **10.5 %** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový vodič H07V-K 6,00 světle modrá (CYA) | 1.50 € | **1.40 €** | 18.4 % | **10.5 %** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový vodič H07V-K 6,00 šedá (CYA) | 1.50 € | **1.40 €** | 18.4 % | **10.5 %** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový vodič H07V-K 6,00 tmavě modrá (CYA) | 1.50 € | **1.40 €** | 18.4 % | **10.5 %** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E1... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 30x mini LED, 3m,... | 2.10 € | **2.00 €** | 51.1 % | **43.9 %** | 2.02 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.05 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.05 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.05 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Adaptér NEDIS CCGB64915BK USB-C (M) - USB 3.0 (F) OT... | 2.90 € | **2.80 €** | 16.1 % | **12.1 %** | 2.88 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 6000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.99 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 9W, 1260lm, 4000K,... | 3.20 € | **3.10 €** | 48.7 % | **44.0 %** | 3.19 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 4W, E14, 3000K, 340... | 0.70 € | **0.60 €** | 42.3 % | **22.0 %** | 0.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 0.90 € | **0.80 €** | 49.3 % | **32.7 %** | 0.87 € | stávame sa najlacnejší |
| LED žárovka SOLIGHT WZ425-1 E14 8W miniglobe | 1.90 € | **1.80 €** | 14.4 % | **8.4 %** | 1.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ414-1 E14 R50 5W | 1.70 € | **1.60 €** | 14.2 % | **7.5 %** | 1.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ413-1 E14 R50 5W | 1.70 € | **1.60 €** | 14.2 % | **7.5 %** | 1.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ506-2 A60 E27 10W | 1.90 € | **1.80 €** | 14.4 % | **8.4 %** | 1.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ325A-1 GU10 7W | 1.70 € | **1.60 €** | 14.2 % | **7.5 %** | 1.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED žárovka SOLIGHT WZ315A-1 GU10 3W | 1.40 € | **1.30 €** | 17.3 % | **9.0 %** | 0.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silový kabel H05RR-F 3G1,5 (CGSG)  3x1,5 guma, venkovní | 1.70 € | **1.60 €** | 17.1 % | **10.2 %** | 1.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, biele... | 1.70 € | **1.60 €** | 53.6 % | **44.5 %** | 1.61 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.60 €** | 53.6 % | **44.5 %** | 1.61 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| VIRONE 100x100 plastová revizní dvířka - černá | 3.80 € | **3.70 €** | 14.8 % | **11.8 %** | 3.72 € | stávame sa najlacnejší |
| VIRONE 100x150 plastová revizní dvířka - černá | 3.80 € | **3.70 €** | 14.8 % | **11.8 %** | 3.72 € | stávame sa najlacnejší |
| VIRONE 150x150 plastová revizní dvířka - černá | 3.80 € | **3.70 €** | 14.8 % | **11.8 %** | 3.72 € | stávame sa najlacnejší |
| Koma ET32S-ETA Windy 1416-1417 SMS | 3.80 € | **3.70 €** | 11.1 % | **8.2 %** | 3.76 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Číny a Austrálie, typ I | 6.50 € | **6.40 €** | 59.7 % | **57.2 %** | 6.47 € | stávame sa najlacnejší |
| Koma EX08S - Electrolux Masterlux SMS | 6.50 € | **6.40 €** | 10.3 % | **8.6 %** | 6.48 € | stávame sa najlacnejší |
| Koma RW01S - Rowenta Ru,RB SMS | 6.50 € | **6.40 €** | 10.3 % | **8.6 %** | 6.48 € | stávame sa najlacnejší |
| ELECTROLUX E2YH01 | 15.00 € | **14.90 €** | 10.2 % | **9.4 %** | 14.98 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **8.90 €** | 20.1 % | **18.8 %** | 8.99 € | stávame sa najlacnejší |
| Koma KF04 - Filtr do kávovaru č. 4 | 2.99 € | **2.90 €** | 12.5 % | **9.2 %** | 2.92 € | stávame sa najlacnejší |

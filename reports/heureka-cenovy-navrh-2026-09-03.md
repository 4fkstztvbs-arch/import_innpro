# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-03

Vstup: `premiumstoresk_20260903_2210.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5902**
- Návrh **zvýšiť** cenu: **841** produktov
- Návrh **znížiť** cenu: **1011** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4050** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **337**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (841)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 357.00 € | **388.90 €** | 9.3 % | **19.0 %** | 388.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie V-TAC VT-48100E-P2 /51,2V/100A/5,12kWh modul... | 860.50 € | **890.50 €** | 1.5 % | **5.1 %** | 861.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Samsung The Frame Pro QE55LS03HW | 1365.00 € | **1385.90 €** | 6.4 % | **8.1 %** | 1365.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 150Ah MHPower L150-12-OUT | 629.50 € | **649.00 €** | 1.9 % | **5.0 %** | 630.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 119.90 € | **138.50 €** | 15.1 % | **33.0 %** | 138.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 919.00 € | **936.50 €** | 3.1 % | **5.0 %** | 920.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Hlavná kefa MOVA pre E30 Ultra | 27.00 € | **40.50 €** | 14.8 % | **72.2 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO | 545.50 € | **556.50 €** | 3.0 % | **5.1 %** | 546.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Klimatizace MW POWER ALFA 12K WIFI V1, 12000BTu, R32 | 478.00 € | **487.90 €** | 2.9 % | **5.0 %** | 478.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 209.90 € | **219.50 €** | 0.6 % | **5.2 %** | 210.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Baterie olověná 12V / 80 Ah MHPower 6-EVF-80 GEL Tra... | 169.90 € | **178.90 €** | -0.1 % | **5.2 %** | 170.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **78.00 €** | 23.0 % | **38.0 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Spinningové kolo REBEL ACTIVE RBA-1016 | 104.90 € | **112.50 €** | -2.0 % | **5.1 %** | 105.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 32.00 € | **39.50 €** | 18.0 % | **45.7 %** | 32.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 33 Ah MHPower MS33-12 | 57.50 € | **65.00 €** | -7.0 % | **5.1 %** | 57.78 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **49.00 €** | 19.0 % | **38.8 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT161E | 108.00 € | **114.90 €** | 5.6 % | **12.4 %** | 108.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **123.50 €** | 15.0 % | **21.5 %** | 123.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **41.00 €** | 16.3 % | **38.3 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **55.50 €** | 23.6 % | **38.5 %** | 49.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk Neewer Z2-S TTL pre fotoaparáty Sony | 134.00 € | **140.00 €** | 15.0 % | **20.1 %** | 140.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.50 € | **125.00 €** | 13.2 % | **18.4 %** | 119.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 314.50 € | **320.00 €** | 3.2 % | **5.0 %** | 314.90 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **36.00 €** | 18.8 % | **37.9 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 47.00 € | **52.00 €** | 14.7 % | **26.9 %** | 52.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **73.50 €** | 12.7 % | **20.2 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 54.50 € | **59.00 €** | 25.5 % | **35.9 %** | 54.62 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 417.50 € | **421.90 €** | 12.6 % | **13.8 %** | 417.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 81.00 € | **85.00 €** | 8.5 % | **13.9 %** | 81.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 16.50 € | **20.50 €** | 12.4 % | **39.6 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| ROWENTA RO 3985 EA | 74.50 € | **78.50 €** | 8.7 % | **14.6 %** | 76.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 11.00 € | **14.50 €** | 8.0 % | **42.4 %** | 11.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 55 Ah  MHPower MS55-12 | 94.00 € | **97.50 €** | 1.7 % | **5.5 %** | 94.29 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K - SLEVA NA... | 56.50 € | **60.00 €** | -1.0 % | **5.1 %** | 56.90 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Sunnylife A3S-FI927 sada filtrov pre AIR 3S 4ks | 8.20 € | **11.50 €** | 15.1 % | **61.5 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **52.00 €** | 15.2 % | **22.5 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Presto 2094 90000, bílý | 94.00 € | **97.00 €** | 6.3 % | **9.7 %** | 94.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 172.50 € | **175.50 €** | 7.1 % | **9.0 %** | 172.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **24.50 €** | 22.5 % | **39.6 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EHF6547FXK | 221.50 € | **224.50 €** | 8.0 % | **9.5 %** | 221.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Huanuo HNCM2 monitor mount 13-32" | 27.50 € | **30.50 €** | 14.5 % | **27.0 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **16.90 €** | 20.1 % | **46.0 %** | 16.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.90 €** | 7.7 % | **16.1 %** | 37.23 € | dobehnutie 2. najlacnejšieho konkurenta |
| WHIRLPOOL TW721DSFCEE | 358.90 € | **361.50 €** | 10.1 % | **10.9 %** | 361.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 14.00 € | **16.50 €** | 15.4 % | **36.1 %** | 14.23 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 22.50 € | **24.90 €** | 12.7 % | **24.7 %** | 22.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **23.90 €** | 31.5 % | **46.2 %** | 21.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.20 € | **8.50 €** | 5.9 % | **45.2 %** | 8.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 26.90 € | **29.00 €** | 18.3 % | **27.6 %** | 26.91 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 447.50 € | **449.50 €** | 5.8 % | **6.3 %** | 447.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Antik Water Heater PWH 01 V3+... | 360.50 € | **362.50 €** | 4.5 % | **5.1 %** | 361.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| JBL Grip Red | 77.00 € | **79.00 €** | 7.5 % | **10.3 %** | 77.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 77.00 € | **79.00 €** | 7.5 % | **10.3 %** | 77.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.00 € | **17.00 €** | 10.5 % | **25.2 %** | 16.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **16.90 €** | 10.6 % | **25.5 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.00 € | **72.90 €** | 14.2 % | **17.3 %** | 71.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 10.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 15.00 € | **16.90 €** | 12.3 % | **26.5 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka Spidoo Kruzzel 25628 růžová | 41.90 € | **43.50 €** | 1.9 % | **5.8 %** | 42.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Koloběžka Spidoo Kruzzel 25630 fialová | 41.90 € | **43.50 €** | 1.9 % | **5.8 %** | 42.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Výrobník ledu TEESA EASY ICE TSA5009 | 70.90 € | **72.50 €** | 3.3 % | **5.7 %** | 71.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Niceboy OFFICE M40 Vertical | 17.50 € | **19.00 €** | 7.3 % | **16.5 %** | 17.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 22.00 € | **23.50 €** | 37.2 % | **46.5 %** | 22.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 142.50 € | **144.00 €** | 3.9 % | **5.0 %** | 142.79 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 27.00 € | **28.50 €** | 13.7 % | **20.1 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozváděč R-FVE-A40-1 – třída ochrany I+II (s AC Svod... | 1204.00 € | **1205.50 €** | 8.1 % | **8.2 %** | 1205.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný WiFi termostat Meross MTS200HK(EU) (Hom... | 40.50 € | **42.00 €** | 15.2 % | **19.5 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Klimatizace GETI GKH18K hybridní 5kW | 1296.50 € | **1298.00 €** | 7.3 % | **7.4 %** | 1298.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sunnylife A3S-FI925CPL nastaviteľný filter objektívu... | 11.00 € | **12.50 €** | 14.5 % | **30.1 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozváděč R-HW-SW16P-AP (pro Huawei) | 1040.50 € | **1041.90 €** | 23.1 % | **23.3 %** | 1041.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **70.90 €** | 34.0 % | **36.7 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.60 € | **11.00 €** | 19.3 % | **36.7 %** | 9.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 57.50 € | **58.90 €** | 32.4 % | **35.6 %** | 57.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 54.50 € | **55.90 €** | 8.7 % | **11.4 %** | 54.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 17.50 € | **18.90 €** | 6.5 % | **15.0 %** | 18.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 6.80 € | **8.10 €** | 21.5 % | **44.7 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Antik Water Heater PWH 9kW (p... | 964.90 € | **966.00 €** | 8.6 % | **8.7 %** | 966.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 17.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 17.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 17.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.2 % | **12.2 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **7.20 €** | 15.1 % | **35.8 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **6.50 €** | 8.9 % | **31.1 %** | 5.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.50 € | **23.50 €** | 40.1 % | **46.3 %** | 22.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 49.90 € | **50.90 €** | 3.2 % | **5.3 %** | 50.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 16.50 € | **17.50 €** | 25.1 % | **32.7 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 14.00 € | **15.00 €** | 17.6 % | **26.0 %** | 14.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.50 € | **28.50 €** | 11.4 % | **15.4 %** | 27.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 278.50 € | **279.50 €** | 8.3 % | **8.7 %** | 278.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **35.50 €** | 25.1 % | **28.7 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 17.50 € | **18.50 €** | 19.7 % | **26.5 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.90 € | **25.90 €** | 16.7 % | **21.4 %** | 25.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 24.50 € | **25.50 €** | 16.0 % | **20.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozváděč R-FVE-A40-3 – třída ochrany I+II (bez AC Sv... | 914.50 € | **915.50 €** | 8.1 % | **8.3 %** | 915.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sunnylife A3S-FI928 4ks sada filtrov objektívu pre A... | 11.00 € | **12.00 €** | 14.5 % | **24.9 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 65FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 671.00 € | **672.00 €** | 5427.1 % | **5435.4 %** | 672.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera OBSBOT Meet SE (sivá) | 84.00 € | **85.00 €** | 14.9 % | **16.2 %** | 85.22 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 69.00 € | **69.90 €** | 10.3 % | **11.8 %** | 69.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191T | 68.00 € | **68.90 €** | 8.1 % | **9.5 %** | 68.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač hladiny hluku Uni-T UT35 | 120.00 € | **120.90 €** | 12.0 % | **12.8 %** | 120.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný dvojramenný konzolový držiak pre plo... | 29.00 € | **29.90 €** | 28.3 % | **32.3 %** | 29.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.00 € | **36.90 €** | 7.3 % | **10.0 %** | 36.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.00 € | **18.90 €** | 6.7 % | **12.1 %** | 18.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 56.00 € | **56.90 €** | 8.2 % | **10.0 %** | 56.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT201F digitálny klešťový multimeter | 24.00 € | **24.90 €** | 5.8 % | **9.8 %** | 24.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V/17Ah  REBEL | 26.00 € | **26.90 €** | 2.8 % | **6.4 %** | 26.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 56.00 € | **56.90 €** | 15.0 % | **16.9 %** | 56.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 379.00 € | **379.90 €** | 13.2 % | **13.5 %** | 379.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 467.00 € | **467.90 €** | 7.9 % | **8.1 %** | 467.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.00 € | **560.90 €** | 7.2 % | **7.3 %** | 560.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 901.00 € | **901.90 €** | 14.5 % | **14.6 %** | 901.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Měnič napětí CARSPA P5000 24V/230V 5000W USB, čistá ... | 566.00 € | **566.90 €** | 5.2 % | **5.4 %** | 566.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Victron Energy SmartSolar 150... | 545.00 € | **545.90 €** | 6.7 % | **6.9 %** | 545.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| HiFi věž Kruger&Matz KM1995 s CD, DAB+/FM rádiem | 608.00 € | **608.90 €** | 16.1 % | **16.3 %** | 608.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 545.00 € | **545.90 €** | 4.9 % | **5.1 %** | 545.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.80 €** | 11.4 % | **33.6 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 9.80 € | **10.50 €** | 18.6 % | **27.0 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **8.20 €** | 35.2 % | **47.8 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor ANTIK AC Water Heater (On-Grid) | 377.90 € | **378.50 €** | 4.9 % | **5.1 %** | 378.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 557.90 € | **558.50 €** | 7.9 % | **8.1 %** | 558.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 400.90 € | **401.50 €** | 12.9 % | **13.1 %** | 401.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UVR-1601K2-I3 Šestnáctikanálový 5v1 DVR s kompres... | 572.90 € | **573.50 €** | 24.9 % | **25.1 %** | 573.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 17.90 € | **18.50 €** | 34.4 % | **38.9 %** | 17.94 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 38.90 € | **39.50 €** | 13.9 % | **15.6 %** | 38.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **17.50 €** | 38.6 % | **43.6 %** | 17.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.30 € | **2.90 €** | 5.1 % | **32.5 %** | 2.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.60 €** | 33.8 % | **53.9 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.50 €** | 19.0 % | **23.5 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 12.90 € | **13.50 €** | 5.3 % | **10.2 %** | 13.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 19.50 € | **20.00 €** | 13.6 % | **16.5 %** | 19.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.00 € | **61.50 €** | 18.9 % | **19.8 %** | 61.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 41.00 € | **41.50 €** | 4.9 % | **6.1 %** | 41.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.00 € | **15.50 €** | 55.4 % | **60.5 %** | 15.13 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 103.00 € | **103.50 €** | 5.0 % | **5.5 %** | 103.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor Premium, Find My kompatibilný | 13.00 € | **13.50 €** | 28.4 % | **33.4 %** | 13.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 45.00 € | **45.50 €** | 7.4 % | **8.5 %** | 45.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 23.00 € | **23.50 €** | 8.8 % | **11.2 %** | 23.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 34.00 € | **34.50 €** | 8.4 % | **10.0 %** | 34.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.00 € | **155.50 €** | 14.0 % | **14.4 %** | 155.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 137 | 33.00 € | **33.50 €** | 9.5 % | **11.1 %** | 33.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| PULUZ PU3224B Držiak na telefón čierny | 14.00 € | **14.50 €** | 12.5 % | **16.5 %** | 14.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.00 € | **19.50 €** | 11.2 % | **14.1 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Centrala Bramka WiFi MSH450MA Meross | 19.00 € | **19.50 €** | 13.3 % | **16.3 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.00 € | **55.50 €** | 15.8 % | **16.8 %** | 55.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 24G | 181.00 € | **181.50 €** | 8.1 % | **8.3 %** | 181.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.00 € | **10.50 €** | 41.4 % | **48.5 %** | 10.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.00 € | **13.50 €** | 41.7 % | **47.1 %** | 13.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Chamberi horizontal | 156.00 € | **156.50 €** | 9.1 % | **9.4 %** | 156.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nepriamy germicidný UV žiarič | 62.00 € | **62.50 €** | 38.2 % | **39.3 %** | 62.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 14.00 € | **14.50 €** | 31.0 % | **35.7 %** | 14.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.00 € | **14.50 €** | 42.3 % | **47.4 %** | 14.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.00 € | **30.50 €** | 36.9 % | **39.2 %** | 30.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vlákno HP ASA Creality (čierne) | 22.00 € | **22.50 €** | 7.3 % | **9.7 %** | 22.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 21.00 € | **21.50 €** | 43.1 % | **46.5 %** | 21.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.00 € | **11.50 €** | 6.8 % | **11.7 %** | 11.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík analogový TechnoLine WT 757BK | 26.00 € | **26.50 €** | 7.6 % | **9.6 %** | 26.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.00 € | **43.50 €** | 12.6 % | **13.9 %** | 43.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.00 € | **10.50 €** | 8.3 % | **13.7 %** | 10.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.00 € | **16.50 €** | 8.0 % | **11.3 %** | 16.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90504 French press 800ml | 13.00 € | **13.50 €** | 9.5 % | **13.7 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 12.00 € | **12.50 €** | 8.8 % | **13.3 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Easy Chop | 33.00 € | **33.50 €** | 8.1 % | **9.8 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Sky B-4610 zlatý | 65.00 € | **65.50 €** | 8.7 % | **9.5 %** | 65.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Daily PV1100C | 23.00 € | **23.50 €** | 7.5 % | **9.9 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 36.00 € | **36.50 €** | 6.1 % | **7.6 %** | 36.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.6 % | **8.6 %** | 56.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 31.00 € | **31.50 €** | 5.9 % | **7.6 %** | 31.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.00 € | **12.50 €** | 7.2 % | **11.7 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.00 € | **85.50 €** | 14.6 % | **15.3 %** | 85.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight projekčné hodiny s meteostanicou | 27.00 € | **27.50 €** | 48.4 % | **51.2 %** | 27.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.00 € | **37.50 €** | 19.9 % | **21.6 %** | 37.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.00 € | **138.50 €** | 15.1 % | **15.6 %** | 138.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **52.50 €** | 5.7 % | **6.7 %** | 52.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kruger&Matz KM0127 brašna na rám kola | 12.00 € | **12.50 €** | 9.9 % | **14.4 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.00 € | **22.50 €** | 9.5 % | **12.0 %** | 22.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.00 € | **28.50 €** | 30.7 % | **33.0 %** | 28.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH1239WO | 161.00 € | **161.50 €** | 8.7 % | **9.0 %** | 161.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 69.00 € | **69.50 €** | 5.6 % | **6.4 %** | 69.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WHT643E4XBG | 247.00 € | **247.50 €** | 7.9 % | **8.1 %** | 247.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BMX201M2BG | 171.00 € | **171.50 €** | 9.0 % | **9.3 %** | 171.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CIP 3E7L0W Rapido | 294.00 € | **294.50 €** | 8.0 % | **8.1 %** | 294.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fagor 4LVF-638ADIT | 470.00 € | **470.50 €** | 6.9 % | **7.1 %** | 470.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1535 | 195.00 € | **195.50 €** | 9.8 % | **10.0 %** | 195.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.00 € | **16.50 €** | 33.8 % | **38.0 %** | 16.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.00 € | **22.50 €** | 8.7 % | **11.2 %** | 22.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baza na joystick Moza Racing AB9 Force Feedback | 508.00 € | **508.50 €** | 9.6 % | **9.7 %** | 508.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 10.00 € | **10.50 €** | 40.4 % | **47.4 %** | 10.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.00 € | **15.50 €** | 13.0 % | **16.8 %** | 15.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.00 € | **25.50 €** | 37.2 % | **40.0 %** | 25.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický masážny prístroj na tvár Guasha ANLAN 02-... | 35.00 € | **35.50 €** | 13.9 % | **15.5 %** | 35.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 21.00 € | **21.50 €** | 9.5 % | **12.1 %** | 21.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 120.00 € | **120.50 €** | 9.9 % | **10.4 %** | 120.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin B7WFU68416WBES | 415.00 € | **415.50 €** | 7.2 % | **7.3 %** | 415.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.00 € | **49.50 €** | 37.2 % | **38.6 %** | 49.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.00 € | **40.50 €** | 35.1 % | **36.7 %** | 40.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X40 Soundbar | 348.00 € | **348.50 €** | 12.9 % | **13.1 %** | 348.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy ECNBQT3518E Fresco | 479.00 € | **479.50 €** | 6.1 % | **6.2 %** | 479.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.00 € | **32.50 €** | 31.2 % | **33.2 %** | 32.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX V1Pro TTL pre Nikon | 266.00 € | **266.50 €** | 10.3 % | **10.5 %** | 266.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.00 € | **12.50 €** | 38.8 % | **44.6 %** | 12.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pedrini Infinity červená 6 porcí | 36.00 € | **36.50 €** | 9.7 % | **11.3 %** | 36.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 322.00 € | **322.50 €** | 10.5 % | **10.6 %** | 322.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 322.00 € | **322.50 €** | 10.5 % | **10.6 %** | 322.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.00 € | **11.50 €** | 20.4 % | **25.8 %** | 11.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.00 € | **85.50 €** | 19.5 % | **20.2 %** | 85.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-AW592 WHITE 1 karton | 248.00 € | **248.50 €** | 8.7 % | **9.0 %** | 248.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **18.50 €** | 35.3 % | **39.0 %** | 18.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Organic fragrance Peppermint | 16.00 € | **16.50 €** | 7.2 % | **10.6 %** | 16.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 61521kuchyňská váha Page | 22.00 € | **22.50 €** | 7.9 % | **10.3 %** | 22.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Eddie B-4821 šedý | 29.00 € | **29.50 €** | 7.9 % | **9.7 %** | 29.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.00 € | **60.50 €** | 9.1 % | **10.0 %** | 60.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodinky Colmi V89 Smartwatch (čierne) | 28.00 € | **28.50 €** | 6.7 % | **8.6 %** | 28.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 28.00 € | **28.50 €** | 5.2 % | **7.1 %** | 28.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7S (čierny) | 176.00 € | **176.50 €** | 10.8 % | **11.1 %** | 176.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 90.00 € | **90.50 €** | 11.4 % | **12.0 %** | 90.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **23.50 €** | 14.0 % | **16.5 %** | 23.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termovízna kamera FNIRSI TDM-120P | 181.00 € | **181.50 €** | 9.0 % | **9.3 %** | 181.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 70.00 € | **70.50 €** | 11.9 % | **12.7 %** | 70.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Crema 1 kg zrno | 20.00 € | **20.50 €** | 5.6 % | **8.3 %** | 20.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meradlo hrúbky povlaku Uni-T UT343A | 68.00 € | **68.50 €** | 7.3 % | **8.1 %** | 68.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.00 € | **71.50 €** | 38.4 % | **39.3 %** | 71.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.00 € | **45.50 €** | 7.0 % | **8.2 %** | 45.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu Uni-T UT533 | 207.00 € | **207.50 €** | 13.2 % | **13.5 %** | 207.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 88.00 € | **88.50 €** | 12.3 % | **12.9 %** | 88.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 87.00 € | **87.50 €** | 11.6 % | **12.3 %** | 87.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT205E digitálny klešťový multimeter | 46.00 € | **46.50 €** | 6.2 % | **7.3 %** | 46.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT206B digitálny klešťový multimeter | 65.00 € | **65.50 €** | 7.3 % | **8.1 %** | 65.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Presný klešťový multimeter Uni-T 60A UT211B | 107.00 € | **107.50 €** | 11.2 % | **11.7 %** | 107.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT216A digitálny klešťový multimeter | 50.00 € | **50.50 €** | 5.8 % | **6.9 %** | 50.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 243.00 € | **243.50 €** | 13.8 % | **14.0 %** | 243.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Recenzia zariadenia Uni-T RCD UT582+ | 101.00 € | **101.50 €** | 10.9 % | **11.4 %** | 101.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny mikroohmmer Uni-T UT620C+ | 191.00 € | **191.50 €** | 12.9 % | **13.2 %** | 191.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov WYBOT M1C | 669.00 € | **669.50 €** | 5.3 % | **5.4 %** | 669.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM1000 | 93.00 € | **93.50 €** | 7.8 % | **8.4 %** | 93.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM1000A | 129.00 € | **129.50 €** | 12.9 % | **13.4 %** | 129.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM600A | 83.00 € | **83.50 €** | 9.8 % | **10.5 %** | 83.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti Uni-T UT332+ | 59.00 € | **59.50 €** | 8.4 % | **9.3 %** | 59.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 52.00 € | **52.50 €** | 7.3 % | **8.4 %** | 52.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Infračervený teplomer Uni-T UT301D+ | 51.00 € | **51.50 €** | 6.6 % | **7.6 %** | 51.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Infračervený teplomer Uni-T UT303C+ | 99.00 € | **99.50 €** | 10.5 % | **11.0 %** | 99.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti Uni-T UT331+ | 39.00 € | **39.50 €** | 6.2 % | **7.5 %** | 39.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kalibrátor procesov Uni-T UT701 | 183.00 € | **183.50 €** | 8.8 % | **9.1 %** | 183.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu Uni-T UT501B | 77.00 € | **77.50 €** | 10.2 % | **10.9 %** | 77.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nástenný skener Uni-T UT387LM | 72.00 € | **72.50 €** | 7.2 % | **7.9 %** | 72.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor drôtov UNI-T UT25CL | 141.00 € | **141.50 €** | 12.4 % | **12.8 %** | 141.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibračný tester Uni-T UT311A | 256.00 € | **256.50 €** | 13.3 % | **13.5 %** | 256.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| 4-kanálový teplomer Uni-T UT325F | 101.00 € | **101.50 €** | 11.2 % | **11.8 %** | 101.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 149.00 € | **149.50 €** | 11.9 % | **12.3 %** | 149.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Pizzeria 927/01, černá | 205.00 € | **205.50 €** | 7.3 % | **7.6 %** | 205.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.00 € | **158.50 €** | 13.7 % | **14.1 %** | 158.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI MiTag set 3ks Google Find My APD006 | 36.00 € | **36.50 €** | 5.1 % | **6.6 %** | 36.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 279.00 € | **279.50 €** | 7.2 % | **7.4 %** | 279.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.00 € | **22.50 €** | 10.6 % | **13.1 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 28.00 € | **28.50 €** | 17.3 % | **19.4 %** | 28.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 20.00 € | **20.50 €** | 10.6 % | **13.4 %** | 20.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW5558E0 | 178.00 € | **178.50 €** | 8.6 % | **8.9 %** | 178.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 20.00 € | **20.50 €** | 10.6 % | **13.4 %** | 20.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer kuchyňský robot ZKR2010 | 176.00 € | **176.50 €** | 8.4 % | **8.7 %** | 176.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 410090000 | 331.00 € | **331.50 €** | 6.8 % | **7.0 %** | 331.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.00 € | **41.50 €** | 7.0 % | **8.3 %** | 41.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 59.00 € | **59.50 €** | 12.2 % | **13.1 %** | 59.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 8 | 40.00 € | **40.50 €** | 6.8 % | **8.2 %** | 40.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 8 | 40.00 € | **40.50 €** | 6.8 % | **8.2 %** | 40.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 9 | 40.00 € | **40.50 €** | 6.8 % | **8.2 %** | 40.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 105.00 € | **105.50 €** | 9.6 % | **10.1 %** | 105.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GECS5C70XPA | 473.00 € | **473.50 €** | 6.9 % | **7.1 %** | 473.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept IDV5160wh | 354.00 € | **354.50 €** | 6.9 % | **7.0 %** | 354.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LIB60420CK | 205.00 € | **205.50 €** | 8.0 % | **8.3 %** | 205.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.00 € | **139.50 €** | 7.8 % | **8.2 %** | 139.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 14.00 € | **14.50 €** | 29.5 % | **34.1 %** | 14.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rixon Soundplates | 42.00 € | **42.50 €** | 8.2 % | **9.5 %** | 42.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera EMEET SmartCam S600L | 60.00 € | **60.50 €** | 5.9 % | **6.8 %** | 60.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.00 € | **11.50 €** | 12.6 % | **17.8 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.00 € | **17.50 €** | 10.4 % | **13.6 %** | 17.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Graef S 10005 | 113.00 € | **113.50 €** | 9.5 % | **10.0 %** | 113.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EF167 | 14.00 € | **14.50 €** | 8.4 % | **12.3 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux ESKQ9 | 14.00 € | **14.50 €** | 8.4 % | **12.3 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90502 French press Atria 800 ml | 11.00 € | **11.50 €** | 8.0 % | **12.9 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Status STA 176214 | 10.00 € | **10.50 €** | 7.5 % | **12.9 %** | 10.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 24.00 € | **24.50 €** | 8.2 % | **10.5 %** | 24.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 24.00 € | **24.50 €** | 8.2 % | **10.5 %** | 24.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.00 € | **21.50 €** | 12.4 % | **15.1 %** | 21.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termovízna kamera FNIRSI TDM-120 | 173.00 € | **173.50 €** | 8.9 % | **9.2 %** | 173.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco Pur Arabica Premium 1 kg zrno | 22.00 € | **22.50 €** | 5.8 % | **8.2 %** | 22.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 17.00 € | **17.50 €** | 11.0 % | **14.3 %** | 17.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 71.00 € | **71.50 €** | 8.5 % | **9.3 %** | 71.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.00 € | **29.50 €** | 13.0 % | **14.9 %** | 29.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 168.00 € | **168.50 €** | 16.1 % | **16.4 %** | 168.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B3BCNA324HS | 626.00 € | **626.50 €** | 9.1 % | **9.2 %** | 626.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.00 € | **22.50 €** | 30.6 % | **33.5 %** | 22.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tlakový stroj HiBREW H7B Cob | 554.00 € | **554.50 €** | 11.3 % | **11.4 %** | 554.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FFC025X | 26.00 € | **26.50 €** | 9.7 % | **11.8 %** | 26.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.00 € | **36.50 €** | 8.4 % | **9.9 %** | 36.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Fashion Style | 12.00 € | **12.50 €** | 13.0 % | **17.8 %** | 12.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.00 € | **94.50 €** | 19.4 % | **20.0 %** | 94.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FVB015X | 18.00 € | **18.50 €** | 6.9 % | **9.9 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9283EK | 18.00 € | **18.50 €** | 9.7 % | **12.7 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI C28 – čierne | 28.00 € | **28.50 €** | 6.8 % | **8.7 %** | 28.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI C28 Gold | 28.00 € | **28.50 €** | 6.8 % | **8.7 %** | 28.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 40.00 € | **40.50 €** | 10.1 % | **11.4 %** | 40.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 40.00 € | **40.50 €** | 10.1 % | **11.4 %** | 40.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-SW100 BLACK | 221.00 € | **221.50 €** | 8.7 % | **8.9 %** | 221.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 105.00 € | **105.50 €** | 7.4 % | **7.9 %** | 105.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.00 € | **22.50 €** | 35.3 % | **38.4 %** | 22.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.00 € | **27.50 €** | 32.0 % | **34.4 %** | 27.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 89.00 € | **89.50 €** | 6.4 % | **7.0 %** | 89.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.00 € | **33.50 €** | 31.5 % | **33.4 %** | 33.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.00 € | **19.50 €** | 34.8 % | **38.3 %** | 19.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitální hodiny s bluetooth synchronizáciou | 13.00 € | **13.50 €** | 33.8 % | **38.9 %** | 13.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.00 € | **11.50 €** | 35.1 % | **41.2 %** | 11.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.00 € | **16.50 €** | 31.3 % | **35.4 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.00 € | **10.50 €** | 26.6 % | **33.0 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.00 € | **16.50 €** | 14.4 % | **18.0 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 278.50 € | **279.00 €** | 7.9 % | **8.1 %** | 278.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 113.00 € | **113.50 €** | 8.6 % | **9.0 %** | 113.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 248.00 € | **248.50 €** | 9.2 % | **9.4 %** | 248.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 14.0 % | **16.0 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 81.00 € | **81.50 €** | 8.8 % | **9.5 %** | 81.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.00 € | **23.50 €** | 6.0 % | **8.3 %** | 23.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA TE-344 venkovní anténa | 27.00 € | **27.50 €** | 43.4 % | **46.0 %** | 27.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 42.00 € | **42.50 €** | 8.9 % | **10.2 %** | 42.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9215AV | 32.00 € | **32.50 €** | 7.3 % | **9.0 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal INGENIO skleněná poklice 18 | 15.00 € | **15.50 €** | 6.3 % | **9.9 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 24.00 € | **24.50 €** | 17.5 % | **19.9 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-UNB-CM352 IP vnitřní videomonitor | 374.50 € | **375.00 €** | 53.4 % | **53.6 %** | 375.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT EPever DR2210-DDS, 12/24V, 20... | 139.00 € | **139.50 €** | 10.9 % | **11.3 %** | 139.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Victron Energy SmartSolar 250... | 570.50 € | **571.00 €** | 7.1 % | **7.2 %** | 571.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 4000 SIN... | 323.00 € | **323.50 €** | 13.8 % | **13.9 %** | 323.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO7345H | 147.00 € | **147.50 €** | 9.6 % | **10.0 %** | 147.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal OptiGrill 2v1 GC773D30 | 166.00 € | **166.50 €** | 9.4 % | **9.7 %** | 166.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Page Profi 100 | 29.00 € | **29.50 €** | 8.0 % | **9.9 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 32.00 € | **32.50 €** | 4.8 % | **6.5 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal HT652538 | 58.00 € | **58.50 €** | 8.7 % | **9.6 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Chamber Line 40 | 251.00 € | **251.50 €** | 9.5 % | **9.7 %** | 251.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 88.00 € | **88.50 €** | 13.8 % | **14.4 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| NEDIS WIFIZBT10CWT chytrá brána ZigBee 3.0 do zásuvk... | 27.00 € | **27.50 €** | 6.2 % | **8.2 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.00 € | **143.50 €** | 7.8 % | **8.2 %** | 143.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 32.00 € | **32.50 €** | 9.5 % | **11.2 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 132.00 € | **132.50 €** | 24.2 % | **24.7 %** | 132.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TC51L5C-VMDS 5.0 Mpix venkovní IP kamera s IR... | 304.00 € | **304.50 €** | 53.9 % | **54.1 %** | 304.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TE41L5E-MDS-0360 4.0 Mpix venkovní IP kamera ... | 419.50 € | **420.00 €** | 24.7 % | **24.9 %** | 420.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TS25ZML4-M 2.0Mpix venkovní IP kamera s IR | 221.00 € | **221.50 €** | 24.5 % | **24.8 %** | 221.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB81ZL4-VMDS 4K 8.0 Mpix  venkovní IP kamera ... | 356.50 € | **357.00 €** | 25.0 % | **25.2 %** | 357.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VC51ZL4C-VMDS-V2 5.0 Mpix venkovní antivandal... | 398.50 € | **399.00 €** | 25.0 % | **25.1 %** | 399.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-USP-D2520L10-D 2.0 Mpix venkovní PTZ kamera 4V1 s... | 642.50 € | **643.00 €** | 53.7 % | **53.8 %** | 643.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah MHPower L100-12-OUT | 503.50 € | **504.00 €** | 5.2 % | **5.3 %** | 504.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 180.00 € | **180.50 €** | 22.2 % | **22.6 %** | 180.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 12.00 € | **12.50 €** | 14.9 % | **19.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| HDD 3.5" 6TB 256MB Seagate SKYHAWK pro kamerové syst... | 318.50 € | **319.00 €** | 5.4 % | **5.6 %** | 319.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 27.00 € | **27.50 €** | 14.9 % | **17.1 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio Imperial Dabman 280 CDBK s funkcí ASA | 232.00 € | **232.50 €** | 12.6 % | **12.8 %** | 232.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 159.00 € | **159.50 €** | 15.7 % | **16.1 %** | 159.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNR-4K4042-P4V3 Síťový videorekordér H.265 4K pro... | 522.50 € | **523.00 €** | 25.0 % | **25.1 %** | 523.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GODOX SB-USW80120 Softbox s dáždnikom | 61.00 € | **61.50 €** | 6.0 % | **6.9 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 226.00 € | **226.50 €** | 5.2 % | **5.5 %** | 226.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FFI5762 SMART TV FULL HD TIVO | 235.00 € | **235.50 €** | 11.3 % | **11.5 %** | 235.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FQI8071 QLED SMART TV ANDROID | 277.00 € | **277.50 €** | 7.8 % | **8.0 %** | 277.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM MC22TFW11 – 22” Full HD Smart TV (12 V, WebOS... | 277.00 € | **277.50 €** | 8.5 % | **8.6 %** | 277.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| IKUSI NBS 701-C48 - domovní zesilovač | 90.00 € | **90.50 €** | 27.5 % | **28.3 %** | 90.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEM DSA15-5G automatický programovatelný DVB-T/T2 ze... | 194.00 € | **194.50 €** | 9.1 % | **9.4 %** | 194.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 228.00 € | **228.50 €** | 13.7 % | **14.0 %** | 228.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 13.5 % | **14.4 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Orbitrek REBEL ACTIVE RBA-1011 | 131.00 € | **131.50 €** | 4.9 % | **5.3 %** | 131.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hoverboard Rebel Cruiser Carbon | 138.00 € | **138.50 €** | 4.7 % | **5.1 %** | 138.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hoverboard Rebel Cruiser Paint | 138.00 € | **138.50 €** | 8.9 % | **9.3 %** | 138.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4501-BL 11'6" 350x8... | 167.00 € | **167.50 €** | 10.0 % | **10.3 %** | 167.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2404 | 108.00 € | **108.50 €** | 14.9 % | **15.5 %** | 108.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 183.00 € | **183.50 €** | 12.3 % | **12.6 %** | 183.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV svietidlo Superfire A5, 365NM | 13.00 € | **13.50 €** | 7.4 % | **11.5 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 338.00 € | **338.50 €** | 6.9 % | **7.1 %** | 338.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 20.50 € | **21.00 €** | 13.9 % | **16.7 %** | 21.22 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.90 €** | 9.8 % | **10.2 %** | 110.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 8501A | 150.50 € | **150.90 €** | 5.1 % | **5.4 %** | 150.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7S (žltý) | 159.50 € | **159.90 €** | 13.7 % | **14.0 %** | 159.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.50 € | **97.90 €** | 19.7 % | **20.2 %** | 97.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.50 € | **250.90 €** | 7.5 % | **7.6 %** | 250.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.50 € | **78.90 €** | 7.0 % | **7.5 %** | 78.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.50 € | **83.90 €** | 17.5 % | **18.1 %** | 83.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.2 % | **11.6 %** | 113.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 82.50 € | **82.90 €** | 7.5 % | **8.0 %** | 82.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 8401SE | 124.50 € | **124.90 €** | 6.7 % | **7.0 %** | 124.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC517DE0 | 137.50 € | **137.90 €** | 8.8 % | **9.1 %** | 137.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO6164EA | 142.50 € | **142.90 €** | 8.4 % | **8.7 %** | 142.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10152 horkovzdušná trouba | 146.50 € | **146.90 €** | 8.8 % | **9.1 %** | 146.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.50 € | **96.90 €** | 32.8 % | **33.4 %** | 96.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **64.90 €** | 7.3 % | **7.9 %** | 64.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 124.50 € | **124.90 €** | 9.9 % | **10.3 %** | 124.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný pedál PXN Vector X Clutch | 103.50 € | **103.90 €** | 12.8 % | **13.2 %** | 103.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dynamický mikrofón Maono PD200W (čierny) | 68.50 € | **68.90 €** | 6.5 % | **7.1 %** | 68.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO MGC20130BFB | 79.50 € | **79.90 €** | 9.5 % | **10.1 %** | 79.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 1535SS | 206.50 € | **206.90 €** | 7.9 % | **8.1 %** | 206.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| IMOU S800 PRO palubná kamera, 4K | 99.50 € | **99.90 €** | 6.3 % | **6.7 %** | 99.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 101.50 € | **101.90 €** | 11.8 % | **12.3 %** | 101.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 20 | 233.50 € | **233.90 €** | 9.4 % | **9.5 %** | 233.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tester batérií Uni-T UT675A | 84.50 € | **84.90 €** | 11.8 % | **12.3 %** | 84.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42329PC | 115.50 € | **115.90 €** | 8.0 % | **8.4 %** | 115.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT117C | 132.50 € | **132.90 €** | 10.8 % | **11.1 %** | 132.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 68.50 € | **68.90 €** | 10.6 % | **11.2 %** | 68.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT207B digitálny klešťový multimeter | 81.50 € | **81.90 €** | 10.4 % | **10.9 %** | 81.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač LCR Uni-T UT612 | 135.50 € | **135.90 €** | 13.1 % | **13.4 %** | 135.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 91.50 € | **91.90 €** | 11.8 % | **12.3 %** | 91.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 88.50 € | **88.90 €** | 13.5 % | **14.0 %** | 88.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM600 | 71.50 € | **71.90 €** | 11.2 % | **11.8 %** | 71.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kontaktný teplomer Uni-T UT325 | 79.50 € | **79.90 €** | 10.5 % | **11.0 %** | 79.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT362H Anemometer | 167.50 € | **167.90 €** | 13.2 % | **13.4 %** | 167.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 116.50 € | **116.90 €** | 12.5 % | **12.9 %** | 116.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente DigiChef+ kuchyňský robot | 124.50 € | **124.90 €** | 6.9 % | **7.3 %** | 124.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO354VD | 130.50 € | **130.90 €** | 8.2 % | **8.5 %** | 130.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9286IB | 249.50 € | **249.90 €** | 6.5 % | **6.6 %** | 249.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42102SV | 97.50 € | **97.90 €** | 7.5 % | **8.0 %** | 97.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 124.50 € | **124.90 €** | 14.2 % | **14.6 %** | 124.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Epever XTRA3210N G3 BLE, 12/2... | 117.50 € | **117.90 €** | 7.3 % | **7.6 %** | 117.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 242.50 € | **242.90 €** | 8.4 % | **8.6 %** | 242.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Sous Vide SV06 | 132.50 € | **132.90 €** | 8.4 % | **8.7 %** | 132.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| PROSCENIC P11 Ultra – bezdrôtový vertikálny vysávač | 89.50 € | **89.90 €** | 14.5 % | **15.0 %** | 89.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 69.50 € | **69.90 €** | 9.8 % | **10.5 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roadstar DJ-390 BT Bluetooth speaker | 113.50 € | **113.90 €** | 9.3 % | **9.7 %** | 113.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI-NC-D50L3-M-0360 5.0 Mpix venkovní dome IP kamera ... | 163.50 € | **163.90 €** | 24.4 % | **24.7 %** | 163.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TC21ZL6-VMDS-27135 2.0 Mpix venkovní IP kamer... | 240.50 € | **240.90 €** | 24.3 % | **24.5 %** | 240.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB41L3-MDS-0360 4.0Mpix venkovní dome IP anti... | 138.50 € | **138.90 €** | 24.8 % | **25.2 %** | 138.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VC21L5-VMDS-0280 2.0 Mpix venkovní IP kamera ... | 221.50 € | **221.90 €** | 25.0 % | **25.2 %** | 221.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 119.50 € | **119.90 €** | 10.2 % | **10.6 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio TechniSat DIGITRADIO 550 IR /černé/ | 150.50 € | **150.90 €** | 13.8 % | **14.1 %** | 150.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UVR-0801E1-CV4 Osmikanálový 5v1 mini DVR s kompre... | 146.50 € | **146.90 €** | 24.8 % | **25.2 %** | 146.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA PrimeSound HQ-995X | 181.50 € | **181.90 €** | 9.4 % | **9.7 %** | 181.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Aura A50 Pro Soundbar | 129.50 € | **129.90 €** | 10.4 % | **10.7 %** | 129.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FFI5670 ANDROID TV | 234.50 € | **234.90 €** | 11.0 % | **11.2 %** | 234.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 251.50 € | **251.90 €** | 12.1 % | **12.2 %** | 251.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Průmyslový endoskop Ermenrich Seek VE80 | 251.50 € | **251.90 €** | 11.2 % | **11.3 %** | 251.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 192.50 € | **192.90 €** | 12.5 % | **12.7 %** | 192.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 77.50 € | **77.90 €** | 9.4 % | **10.0 %** | 77.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| IKUSI / FAGOR NBS 801-C48 - domovní zesilovač | 140.50 € | **140.90 €** | 20.8 % | **21.1 %** | 140.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Clutch Pedal Moza Racing CRP2 RS067 | 99.50 € | **99.90 €** | 8.1 % | **8.6 %** | 99.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Shifter Moza Racing HGP RS039 | 143.50 € | **143.90 €** | 6.9 % | **7.2 %** | 143.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare Colmi V06 AI Black | 69.50 € | **69.90 €** | 13.0 % | **13.7 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 69.50 € | **69.90 €** | 13.0 % | **13.7 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hoverboard Rebel Cruiser Joy | 150.50 € | **150.90 €** | 14.2 % | **14.5 %** | 150.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stepper REBEL ACTIVE RBA-3220 s madlem | 64.50 € | **64.90 €** | 21.0 % | **21.7 %** | 64.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 192.50 € | **192.90 €** | 12.8 % | **13.0 %** | 192.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 9.60 € | **10.00 €** | 21.2 % | **26.2 %** | 9.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **10.00 €** | 33.2 % | **38.7 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 13.50 € | **13.90 €** | 11.3 % | **14.6 %** | 13.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.0 % | **13.8 %** | 11.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.50 € | **10.90 €** | 12.8 % | **17.1 %** | 10.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.50 € | **12.90 €** | 30.3 % | **34.5 %** | 12.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **11.90 €** | 5.4 % | **9.1 %** | 11.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.50 € | **10.90 €** | 17.9 % | **22.4 %** | 10.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.50 € | **14.90 €** | 45.2 % | **49.2 %** | 14.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 12.50 € | **12.90 €** | 44.2 % | **48.8 %** | 12.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 11.50 € | **11.90 €** | 6.2 % | **9.9 %** | 11.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, nerezová | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 713240002 | 11.50 € | **11.90 €** | 9.1 % | **12.9 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.50 € | **13.90 €** | 13.2 % | **16.5 %** | 13.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| AB-COM LNB AB 01 M Quattro | 11.50 € | **11.90 €** | 13.2 % | **17.1 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 680 ml, nerezová | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.50 € | **10.90 €** | 33.0 % | **38.0 %** | 10.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.50 € | **13.90 €** | 10.2 % | **13.5 %** | 13.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter digitálny V33 | 11.50 € | **11.90 €** | 16.4 % | **20.5 %** | 11.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 11.50 € | **11.90 €** | 33.9 % | **38.6 %** | 11.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.50 € | **11.90 €** | 5.8 % | **9.4 %** | 11.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.50 € | **12.90 €** | 34.2 % | **38.5 %** | 12.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.50 € | **12.90 €** | 34.2 % | **38.5 %** | 12.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.50 € | **13.90 €** | 31.9 % | **35.8 %** | 13.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson CR 50 | 14.50 € | **14.90 €** | 6.9 % | **9.8 %** | 14.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 1019 | 12.50 € | **12.90 €** | 6.5 % | **9.9 %** | 12.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.50 € | **14.90 €** | 12.6 % | **15.7 %** | 14.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laica VT3509 | 11.50 € | **11.90 €** | 5.9 % | **9.6 %** | 11.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 11.50 € | **11.90 €** | 10.8 % | **14.6 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi BL0401 Cestovní silikonová konvice | 14.50 € | **14.90 €** | 6.8 % | **9.7 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.30 €** | 19.7 % | **36.2 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **5.10 €** | 34.5 % | **46.0 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.50 € | **23.90 €** | 9.6 % | **11.5 %** | 23.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 58.50 € | **58.90 €** | 12.2 % | **13.0 %** | 58.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 33.50 € | **33.90 €** | 17.2 % | **18.6 %** | 33.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E200SM | 17.50 € | **17.90 €** | 18.3 % | **21.0 %** | 17.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.50 € | **16.90 €** | 43.2 % | **46.6 %** | 16.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Colmi V69 smartwatch (black) | 39.50 € | **39.90 €** | 12.1 % | **13.2 %** | 39.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 22.50 € | **22.90 €** | 16.3 % | **18.4 %** | 22.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterka Superfire TF02 | 63.50 € | **63.90 €** | 14.4 % | **15.1 %** | 63.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá Onikuma B2 (čierne) | 21.50 € | **21.90 €** | 11.6 % | **13.7 %** | 21.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.50 € | **22.90 €** | 11.7 % | **13.7 %** | 22.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 23.50 € | **23.90 €** | 37.6 % | **40.0 %** | 23.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.50 € | **20.90 €** | 12.8 % | **15.0 %** | 20.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 16.50 € | **16.90 €** | 9.0 % | **11.6 %** | 16.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **20.90 €** | 27.8 % | **30.3 %** | 20.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.50 € | **22.90 €** | 13.4 % | **15.4 %** | 22.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.50 € | **31.90 €** | 53.1 % | **55.0 %** | 31.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 30.50 € | **30.90 €** | 11.8 % | **13.3 %** | 30.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Recenzia zariadenia SMD Uni-T UT116A | 23.50 € | **23.90 €** | 5.3 % | **7.1 %** | 23.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Teplovzdušný ventilátor TEESA TSA8062 s imitací krbu... | 53.50 € | **53.90 €** | 10.8 % | **11.6 %** | 53.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-BC261 | 31.50 € | **31.90 €** | 6.1 % | **7.5 %** | 31.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24010-56 | 40.50 € | **40.90 €** | 9.5 % | **10.5 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.50 € | **36.90 €** | 12.0 % | **13.2 %** | 36.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stolný statív Puluz PU3070GT | 40.50 € | **40.90 €** | 5.9 % | **7.0 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.50 € | **27.90 €** | 40.4 % | **42.5 %** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.50 € | **28.90 €** | 28.9 % | **30.7 %** | 28.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **21.90 €** | 6.3 % | **8.3 %** | 21.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.50 € | **16.90 €** | 15.4 % | **18.2 %** | 16.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE165 | 59.50 € | **59.90 €** | 7.4 % | **8.1 %** | 59.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.50 € | **18.90 €** | 23.1 % | **25.7 %** | 18.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.50 € | **21.90 €** | 6.1 % | **8.1 %** | 21.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 19.50 € | **19.90 €** | 9.8 % | **12.0 %** | 19.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.50 € | **30.90 €** | 52.8 % | **54.8 %** | 30.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky Clip C30S (červené) | 35.50 € | **35.90 €** | 12.1 % | **13.3 %** | 35.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 35.50 € | **35.90 €** | 12.1 % | **13.3 %** | 35.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Rouge BP3443 | 31.50 € | **31.90 €** | 8.0 % | **9.3 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.50 € | **23.90 €** | 33.8 % | **36.1 %** | 23.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.50 € | **24.90 €** | 43.0 % | **45.3 %** | 24.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| EMEET SmartCam S600 webová kamera | 51.50 € | **51.90 €** | 13.5 % | **14.4 %** | 51.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 54.50 € | **54.90 €** | 7.4 % | **8.2 %** | 54.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Latarka Superfire L3 P90 | 29.50 € | **29.90 €** | 13.4 % | **14.9 %** | 29.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZCK7650 | 32.50 € | **32.90 €** | 10.7 % | **12.1 %** | 32.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.50 € | **37.90 €** | 9.4 % | **10.6 %** | 37.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.50 € | **39.90 €** | 37.8 % | **39.2 %** | 39.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica KF 17191 | 29.50 € | **29.90 €** | 20.6 % | **22.3 %** | 29.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.50 € | **23.90 €** | 30.6 % | **32.8 %** | 23.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.50 € | **24.90 €** | 36.1 % | **38.3 %** | 24.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 20.50 € | **20.90 €** | 36.6 % | **39.3 %** | 20.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.50 € | **16.90 €** | 36.1 % | **39.3 %** | 16.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.50 € | **16.90 €** | 10.0 % | **12.7 %** | 16.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa DarkFlash DS900WD (biela) | 47.50 € | **47.90 €** | 8.9 % | **9.8 %** | 47.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 24.50 € | **24.90 €** | 8.4 % | **10.2 %** | 24.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.2 % | **12.7 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **17.90 €** | 5.3 % | **7.8 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 31.50 € | **31.90 €** | 5.1 % | **6.5 %** | 31.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 31.50 € | **31.90 €** | 5.9 % | **7.2 %** | 31.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| FNIRSI FNB48P USB port tester čierny | 35.50 € | **35.90 €** | 10.2 % | **11.4 %** | 35.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT202BT Inteligentný svorkový multimeter | 38.50 € | **38.90 €** | 8.6 % | **9.8 %** | 38.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 56.50 € | **56.90 €** | 9.0 % | **9.7 %** | 56.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM60T | 31.50 € | **31.90 €** | 11.5 % | **13.0 %** | 31.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 808/05 | 58.50 € | **58.90 €** | 6.0 % | **6.7 %** | 58.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní vodní filtr GARNI WF 45T | 18.50 € | **18.90 €** | 10.8 % | **13.2 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BL16GE30 | 56.50 € | **56.90 €** | 6.2 % | **6.9 %** | 56.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Combi Clean M + náhr. Static | 20.50 € | **20.90 €** | 7.5 % | **9.6 %** | 20.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor pre batožinu, Find My kompatibilný | 22.50 € | **22.90 €** | 33.4 % | **35.8 %** | 22.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.50 € | **23.90 €** | 10.8 % | **12.7 %** | 23.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini stepper REBEL ACTIVE RBA-3229 | 40.50 € | **40.90 €** | 6.3 % | **7.4 %** | 40.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE145 | 39.50 € | **39.90 €** | 7.0 % | **8.1 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 93501 Hrnec s pokličkou 20 cm | 35.50 € | **35.90 €** | 8.6 % | **9.8 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová deka Rebel RBY-2002-5 PREMIUM 5 kg (100x150... | 35.50 € | **35.90 €** | 11.8 % | **13.1 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová deka Rebel RBY-2003-5 PREMIUM 5 kg (100x150... | 35.50 € | **35.90 €** | 11.8 % | **13.1 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2012400 | 38.50 € | **38.90 €** | 8.7 % | **9.9 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vzdělávací podložka pro děti, puzzle REBEL RBY-2252-... | 18.50 € | **18.90 €** | 30.1 % | **32.9 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor PWM Epever LS2024B, 12/24V, 20A | 39.50 € | **39.90 €** | 10.2 % | **11.3 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1020500 | 38.50 € | **38.90 €** | 8.8 % | **9.9 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rýchlovarná kanvica Hyundai VK690B černá | 36.50 € | **36.90 €** | 7.9 % | **9.1 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal Coppertinto KI280G10 | 30.50 € | **30.90 €** | 8.3 % | **9.8 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9279W | 50.50 € | **50.90 €** | 8.8 % | **9.6 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Bluetooth KRUGER & MATZ KM0566  STREET X... | 39.50 € | **39.90 €** | 14.0 % | **15.2 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 49.50 € | **49.90 €** | 9.6 % | **10.5 %** | 49.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom MCQ02HD Quattro 0,2 dB | 18.50 € | **18.90 €** | 51.9 % | **55.2 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 20.50 € | **20.90 €** | 6.0 % | **8.1 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.50 € | **21.90 €** | 8.7 % | **10.7 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 21.50 € | **21.90 €** | 8.7 % | **10.7 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 26.50 € | **26.90 €** | 8.3 % | **9.9 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GS  G7-SE Wired Controller XBOx &PC Or | 39.50 € | **39.90 €** | 11.2 % | **12.4 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 334.50 € | **334.90 €** | 7.0 % | **7.1 %** | 334.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDPH 2D947X | 316.50 € | **316.90 €** | 8.0 % | **8.1 %** | 316.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 110G | 325.50 € | **325.90 €** | 8.1 % | **8.3 %** | 325.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anycubic Photon Mono M7 Pro 3D Printer | 440.50 € | **440.90 €** | 6.4 % | **6.5 %** | 440.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WG894A25 | 499.50 € | **499.90 €** | 8.6 % | **8.7 %** | 499.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 799.50 € | **799.90 €** | 14.3 % | **14.3 %** | 799.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH98A9WO | 279.50 € | **279.90 €** | 7.7 % | **7.9 %** | 279.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 329.50 € | **329.90 €** | 13.4 % | **13.5 %** | 329.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WE694A1 | 348.50 € | **348.90 €** | 6.9 % | **7.0 %** | 348.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE WPNEI94A1SWIFI | 410.50 € | **410.90 €** | 7.0 % | **7.1 %** | 410.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fagor 4LVF-637ADIT | 444.50 € | **444.90 €** | 7.0 % | **7.1 %** | 444.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 507.50 € | **507.90 €** | 7.0 % | **7.1 %** | 507.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI118PT2SSMA | 767.50 € | **767.90 €** | 6.0 % | **6.0 %** | 767.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 258.50 € | **258.90 €** | 9.9 % | **10.1 %** | 258.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.50 € | **888.90 €** | 6.9 % | **7.0 %** | 888.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| EZIDRI FD1000 ULTRA DIGITAL | 267.50 € | **267.90 €** | 8.2 % | **8.3 %** | 267.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.50 € | **374.90 €** | 8.0 % | **8.1 %** | 374.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Sensazione černý | 334.50 € | **334.90 €** | 6.8 % | **6.9 %** | 334.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Chamber Line 70 | 359.50 € | **359.90 €** | 9.6 % | **9.7 %** | 359.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Puškohled LEVENHUK Halo NVR50 s nočním viděním | 398.50 € | **398.90 €** | 8.0 % | **8.1 %** | 398.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 13/32 | 467.50 € | **467.90 €** | 15.0 % | **15.1 %** | 467.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TD61L4E-MD-0360 6.0 Mpix venkovní IP kamera s... | 324.50 € | **324.90 €** | 24.7 % | **24.9 %** | 324.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB81L3-MDS-0360 4K (8.0 Mpix) venkovní IP ant... | 269.50 € | **269.90 €** | 25.1 % | **25.2 %** | 269.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 276.50 € | **276.90 €** | 7.5 % | **7.6 %** | 276.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| HDD 3.5" 4TB 64MB Western Digital PURPLE pro kamerov... | 285.50 € | **285.90 €** | 6.7 % | **6.8 %** | 285.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UVR-0401L1B-4KI3 Čtyřkanálový 4K 5v1 DVR s kompre... | 290.50 € | **290.90 €** | 24.9 % | **25.1 %** | 290.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vu+ DUO 4K Lite (1xDVB-S2X FBC Twin tuner + DVB-T2 D... | 461.50 € | **461.90 €** | 5.0 % | **5.0 %** | 461.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vu+ DUO 4K Lite (1xDVB-S2X FBC Twin tuner) | 377.50 € | **377.90 €** | 6.2 % | **6.3 %** | 377.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 24FHMG5771 ANDROID TV 12V TRAVEL SMART | 293.50 € | **293.90 €** | 8.3 % | **8.4 %** | 293.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FQI8061 SMART QLED TV FULL HD TIVO | 276.50 € | **276.90 €** | 5.5 % | **5.7 %** | 276.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 40FFI5661 SMART TV FULL HD TIVO | 293.50 € | **293.90 €** | 7.7 % | **7.8 %** | 293.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Letecký simulátor MOZA RACING AB6 | 449.50 € | **449.90 €** | 13.8 % | **13.9 %** | 449.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant MOZA RACING CS Pro RS093 | 346.50 € | **346.90 €** | 9.7 % | **9.8 %** | 346.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant MOZA RACING KS Pro RS095 | 346.50 € | **346.90 €** | 13.1 % | **13.2 %** | 346.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 498.50 € | **498.90 €** | 7.6 % | **7.7 %** | 498.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.90 €** | 32.5 % | **38.5 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.30 € | **7.60 €** | 36.1 % | **41.7 %** | 7.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.60 €** | 34.3 % | **38.6 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.60 €** | 34.3 % | **38.6 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.60 € | **9.80 €** | 31.2 % | **33.9 %** | 9.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely | 2.30 € | **2.50 €** | 35.5 % | **47.3 %** | 2.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 4.80 € | **5.00 €** | 37.9 % | **43.6 %** | 4.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.30 €** | 16.9 % | **28.1 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 529.90 € | **530.00 €** | 6.3 % | **6.4 %** | 529.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 379.90 € | **380.00 €** | 7.3 % | **7.3 %** | 379.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 363A | 600.90 € | **601.00 €** | 10.0 % | **10.0 %** | 600.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 284.90 € | **285.00 €** | 14.4 % | **14.5 %** | 284.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo LED800 antracit | 299.90 € | **300.00 €** | 6.2 % | **6.3 %** | 299.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo LED800 bílý | 299.90 € | **300.00 €** | 6.2 % | **6.3 %** | 299.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 267.90 € | **268.00 €** | 7.3 % | **7.4 %** | 267.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 519.90 € | **520.00 €** | 9.8 % | **9.9 %** | 520.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov Wybot L1 | 619.90 € | **620.00 €** | 9.7 % | **9.7 %** | 620.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistiaci robot ULTENIC MX50 | 419.90 € | **420.00 €** | 8.3 % | **8.3 %** | 420.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 V2 | 281.90 € | **282.00 €** | 8.6 % | **8.6 %** | 282.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Jupiter 2 | 848.90 € | **849.00 €** | 8.3 % | **8.3 %** | 849.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 258.90 € | **259.00 €** | 8.0 % | **8.0 %** | 259.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB51ZL4-VMDS-27135 5.0 Mpix venkovní IP kamer... | 364.90 € | **365.00 €** | 53.9 % | **54.0 %** | 365.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-VNC-V4KZR3-VMD-V2 4K venkovní antivandal ... | 370.90 € | **371.00 €** | 25.0 % | **25.0 %** | 371.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 259.90 € | **260.00 €** | 7.6 % | **7.6 %** | 260.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah SOLARFAM AST-100 s výhře... | 295.90 € | **296.00 €** | 8.1 % | **8.1 %** | 296.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 338.90 € | **339.00 €** | 12.9 % | **12.9 %** | 339.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 889.90 € | **890.00 €** | 11.3 % | **11.3 %** | 890.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 728.90 € | **729.00 €** | 9.2 % | **9.2 %** | 729.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X50 Soundbar | 408.90 € | **409.00 €** | 11.2 % | **11.3 %** | 409.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X70 Soundbar | 598.90 € | **599.00 €** | 12.4 % | **12.4 %** | 599.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultima Apollo S90 Soundbar | 308.90 € | **309.00 €** | 8.7 % | **8.8 %** | 309.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 538.90 € | **539.00 €** | 9.8 % | **9.9 %** | 539.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes AVANT 12 PRO (532203) | 406.90 € | **407.00 €** | 21.4 % | **21.4 %** | 407.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koleso MOZA RS068 FSR V2 (PC) | 665.90 € | **666.00 €** | 12.9 % | **12.9 %** | 666.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 368.90 € | **369.00 €** | 5.3 % | **5.3 %** | 369.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 479.90 € | **480.00 €** | 9.6 % | **9.6 %** | 480.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Catlink BayMax Lite intelligent self-cleaning cat li... | 339.90 € | **340.00 €** | 9.4 % | **9.4 %** | 340.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus T2 smart bike trainer | 589.90 € | **590.00 €** | 10.2 % | **10.2 %** | 590.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Waydoo submersible | 271.90 € | **272.00 €** | 8.8 % | **8.8 %** | 272.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 345.90 € | **346.00 €** | 7.0 % | **7.1 %** | 346.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDIN38646D | 495.90 € | **496.00 €** | 7.0 % | **7.0 %** | 496.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.90 € | **17.00 €** | 10.4 % | **11.0 %** | 16.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 22.90 € | **23.00 €** | 32.6 % | **33.2 %** | 22.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 181 | 19.90 € | **20.00 €** | 15.2 % | **15.8 %** | 19.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny TechnoLine WT 3100 do koupelny | 23.90 € | **24.00 €** | 13.1 % | **13.6 %** | 23.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.90 € | **21.00 €** | 37.7 % | **38.4 %** | 20.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 21.90 € | **22.00 €** | 37.8 % | **38.4 %** | 21.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **48.00 €** | 9.6 % | **9.8 %** | 47.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.90 € | **31.00 €** | 11.7 % | **12.1 %** | 30.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 26.90 € | **27.00 €** | 13.2 % | **13.6 %** | 26.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Adapter, quick release MOZA RACING RS07 for R21/R16/... | 49.90 € | **50.00 €** | 7.5 % | **7.7 %** | 49.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 41.90 € | **42.00 €** | 17.3 % | **17.5 %** | 41.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 46.90 € | **47.00 €** | 14.3 % | **14.6 %** | 46.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 45.90 € | **46.00 €** | 9.8 % | **10.1 %** | 45.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 45.90 € | **46.00 €** | 9.8 % | **10.1 %** | 45.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 49.90 € | **50.00 €** | 63.3 % | **63.6 %** | 49.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 35.90 € | **36.00 €** | 44.6 % | **45.0 %** | 35.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 39.90 € | **40.00 €** | 33.6 % | **33.9 %** | 39.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 6.6 % | **7.1 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26800-56/RH | 25.90 € | **26.00 €** | 6.9 % | **7.3 %** | 25.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/04 | 28.90 € | **29.00 €** | 9.1 % | **9.5 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/05 | 28.90 € | **29.00 €** | 9.1 % | **9.5 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice TechnoLine WS 9251 | 52.90 € | **53.00 €** | 6.2 % | **6.4 %** | 52.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 23310-56/RH | 45.90 € | **46.00 €** | 14.4 % | **14.6 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO436BL | 35.90 € | **36.00 €** | 8.7 % | **9.0 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO7059S | 35.90 € | **36.00 €** | 8.2 % | **8.5 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Motor táhlový HARL 3624+, délka výtahu 24" | 49.90 € | **50.00 €** | 10.1 % | **10.3 %** | 50.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 3400LB - 4 pohybový prodloužený do 600x400mm,... | 62.90 € | **63.00 €** | 24.0 % | **24.2 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell neutrálny filter ND32 pre OSMO 360 | 61.90 € | **62.00 €** | 9.4 % | **9.6 %** | 62.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Selfie tyč Puluz pre športové fotoaparáty (čierna) | 56.90 € | **57.00 €** | 14.8 % | **15.0 %** | 57.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 12Ah XTREME / Enerwell bezúdr... | 20.90 € | **21.00 €** | 9.3 % | **9.8 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 49.90 € | **50.00 €** | 9.4 % | **9.7 %** | 50.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný WiFi spínač na žalúzie Meross MRS100MA(... | 21.90 € | **22.00 €** | 15.8 % | **16.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka EMOS NTBF30 /B0561B/, 27 000 mAh, 100 W P... | 63.90 € | **64.00 €** | 5.7 % | **5.8 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Výrobok X.A.2 | 45.90 € | **46.00 €** | 8.9 % | **9.1 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 18.90 € | **19.00 €** | 5.0 % | **5.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizer Filter Freewell for DJI Avata 2 | 17.90 € | **18.00 €** | 7.1 % | **7.7 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV Filter Freewell for DJI Avata 2 | 16.90 € | **17.00 €** | 9.1 % | **9.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 16.90 € | **17.00 €** | 9.1 % | **9.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat VIOLA 200 /bílé-černé/ 0000/2936 | 49.90 € | **50.00 €** | 23.4 % | **23.7 %** | 50.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rapoo 9300M set klávesnice a myši černý | 31.90 € | **32.00 €** | 11.3 % | **11.6 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-ANW-HP4H2-N65 Čtyřportový 10/100 Mbps PoE switch ... | 61.90 € | **62.00 €** | 25.0 % | **25.2 %** | 62.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.90 € | **63.00 €** | 8.9 % | **9.1 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anténa Angular Flexivel TRI-26 Lte 700 18dB | 49.90 € | **50.00 €** | 51.4 % | **51.7 %** | 50.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.60 € | **5.70 €** | 35.1 % | **37.5 %** | 5.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.10 € | **5.20 €** | 43.5 % | **46.3 %** | 5.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor pro E27 žiarovku, biely | 6.80 € | **6.90 €** | 44.0 % | **46.1 %** | 6.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.10 € | **6.20 €** | 34.4 % | **36.6 %** | 6.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR stropný senzor, interiérový, biely | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 4.10 € | **4.20 €** | 16.6 % | **19.4 %** | 4.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 4.10 € | **4.20 €** | 16.6 % | **19.4 %** | 4.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.60 € | **4.70 €** | 32.1 % | **35.0 %** | 4.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka s viečkom, biela | 6.30 € | **6.40 €** | 34.1 % | **36.2 %** | 6.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.80 € | **5.90 €** | 9.2 % | **11.0 %** | 5.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.60 € | **6.70 €** | 44.2 % | **46.4 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.60 € | **6.70 €** | 29.9 % | **31.9 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.70 €** | 34.0 % | **37.0 %** | 4.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.90 €** | 42.9 % | **45.4 %** | 5.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.60 € | **3.70 €** | 42.8 % | **46.7 %** | 3.65 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.00 € | **2.10 €** | 41.4 % | **48.5 %** | 2.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.00 € | **1.10 €** | 29.0 % | **42.0 %** | 1.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.00 € | **1.10 €** | 29.0 % | **42.0 %** | 1.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 1.70 € | **1.80 €** | 31.6 % | **39.4 %** | 1.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.20 € | **1.30 €** | 39.4 % | **51.0 %** | 1.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 1.90 € | **2.00 €** | 50.0 % | **57.9 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.50 € | **1.60 €** | 35.5 % | **44.5 %** | 1.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.40 € | **1.50 €** | 38.8 % | **48.7 %** | 1.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **2.00 €** | 33.2 % | **40.2 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 1.90 € | **2.00 €** | 33.2 % | **40.2 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.90 € | **2.00 €** | 29.8 % | **36.6 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.50 € | **3.60 €** | 37.5 % | **41.4 %** | 3.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.60 € | **3.70 €** | 35.5 % | **39.3 %** | 3.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.10 € | **3.20 €** | 31.3 % | **35.5 %** | 3.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.30 € | **3.40 €** | 34.1 % | **38.2 %** | 3.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.10 € | **3.20 €** | 34.1 % | **38.4 %** | 3.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 3.80 € | **3.90 €** | 34.3 % | **37.9 %** | 3.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.60 €** | 31.7 % | **35.5 %** | 3.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.60 € | **2.70 €** | 32.9 % | **38.1 %** | 2.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.50 € | **3.60 €** | 33.6 % | **37.4 %** | 3.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.40 € | **3.50 €** | 51.1 % | **55.5 %** | 3.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.50 € | **3.60 €** | 48.2 % | **52.4 %** | 3.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.40 € | **3.50 €** | 32.9 % | **36.8 %** | 3.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 3.80 € | **3.90 €** | 19.7 % | **22.9 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.40 €** | 22.9 % | **32.4 %** | 1.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight SCART kábel, SCART konektor - SCART konektor... | 1.80 € | **1.90 €** | 30.7 % | **37.9 %** | 1.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka priama s úchytom, IP20, biela | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny rozbočovač hybridný priamy | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 34.2 % | **36.1 %** | 7.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **10.00 €** | 25.6 % | **26.8 %** | 9.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 11.90 € | **12.00 €** | 36.8 % | **38.0 %** | 11.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 13.90 € | **14.00 €** | 31.9 % | **32.8 %** | 13.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.70 € | **6.80 €** | 30.9 % | **32.9 %** | 6.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.3 % | **9.3 %** | 10.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-50245 | 12.90 € | **13.00 €** | 9.6 % | **10.4 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **9.20 €** | 38.0 % | **39.5 %** | 9.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 12.90 € | **13.00 €** | 19.3 % | **20.2 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.20 € | **5.30 €** | 35.5 % | **38.1 %** | 5.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.50 € | **4.60 €** | 42.9 % | **46.1 %** | 4.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.90 € | **10.00 €** | 24.8 % | **26.0 %** | 9.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 5.40 € | **5.50 €** | 22.3 % | **24.6 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.40 € | **5.50 €** | 33.8 % | **36.3 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 10.90 € | **11.00 €** | 30.7 % | **31.9 %** | 10.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.00 € | **5.10 €** | 15.8 % | **18.1 %** | 5.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.90 € | **8.00 €** | 10.9 % | **12.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.20 € | **3.30 €** | 16.1 % | **19.8 %** | 3.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.70 € | **3.80 €** | 27.5 % | **30.9 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.70 € | **3.80 €** | 37.4 % | **41.1 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.00 €** | 27.7 % | **29.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.90 € | **13.00 €** | 20.4 % | **21.3 %** | 12.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.80 € | **8.90 €** | 31.8 % | **33.3 %** | 8.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 8.7 % | **11.3 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 23.6 % | **26.3 %** | 4.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 9.1 % | **11.7 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.30 € | **9.40 €** | 22.9 % | **24.3 %** | 9.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.70 € | **4.80 €** | 13.7 % | **16.1 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight senzor pre meteostanice TE110 | 5.20 € | **5.30 €** | 33.4 % | **35.9 %** | 5.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **8.70 €** | 5.6 % | **6.8 %** | 8.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal J1641474 | 11.90 € | **12.00 €** | 9.0 % | **9.9 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 13.90 € | **14.00 €** | 12.9 % | **13.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 500 | 91.90 € | **92.00 €** | 9.6 % | **9.7 %** | 91.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 159.90 € | **160.00 €** | 6.8 % | **6.8 %** | 159.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete XVapor Comfort 4145/BL | 81.90 € | **82.00 €** | 9.9 % | **10.0 %** | 81.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 102.90 € | **103.00 €** | 30.5 % | **30.6 %** | 102.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 69.90 € | **70.00 €** | 8.3 % | **8.5 %** | 69.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 35B1 | 136.90 € | **137.00 €** | 5.3 % | **5.4 %** | 136.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1801 | 237.90 € | **238.00 €** | 42881.0 % | **42899.1 %** | 237.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 104.90 € | **105.00 €** | 29.8 % | **30.0 %** | 104.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ozvučovací systém KRUGER MATZ KM1718 | 200.90 € | **201.00 €** | 10.0 % | **10.1 %** | 200.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 251.90 € | **252.00 €** | 9.9 % | **9.9 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní křeslo KRUGER & MATZ GX-150  bílo růžové | 91.90 € | **92.00 €** | 13.1 % | **13.2 %** | 92.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 91.90 € | **92.00 €** | 9.7 % | **9.8 %** | 92.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní křeslo KRUGER & MATZ GX-150  černo modré | 91.90 € | **92.00 €** | 9.7 % | **9.8 %** | 92.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-12 12V DC broušený... | 125.90 € | **126.00 €** | 12.7 % | **12.8 %** | 126.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-12-1 12V DC bílý | 125.90 € | **126.00 €** | 12.7 % | **12.8 %** | 126.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-12-9 12V DC černý | 125.90 € | **126.00 €** | 12.7 % | **12.8 %** | 126.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-230 230V AC brouše... | 125.90 € | **126.00 €** | 12.7 % | **12.8 %** | 126.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-230-9 230V AC černý | 125.90 € | **126.00 €** | 12.7 % | **12.8 %** | 126.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozváděč R-FVE-A40-2 | 217.90 € | **218.00 €** | 7.5 % | **7.6 %** | 218.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozvaděč Legrand Plexo 601988 IP65 plastový 4x18 nás... | 200.90 € | **201.00 €** | 10.2 % | **10.2 %** | 201.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT521 tester uzemnenia | 128.90 € | **129.00 €** | 5.9 % | **6.0 %** | 129.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Ultimate Graphite Black | 247.90 € | **248.00 €** | 6.6 % | **6.6 %** | 248.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistiaci robot PROSCENIC Q20 Plus | 236.90 € | **237.00 €** | 13.5 % | **13.5 %** | 237.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.90 € | **143.00 €** | 6.9 % | **6.9 %** | 143.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT76325VW | 166.90 € | **167.00 €** | 8.6 % | **8.7 %** | 167.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 251.90 € | **252.00 €** | 7.4 % | **7.5 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX TT685II TTL pre Olympus | 124.90 € | **125.00 €** | 12.4 % | **12.5 %** | 125.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX V860III TTL pre Sony | 198.90 € | **199.00 €** | 11.8 % | **11.9 %** | 199.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo 50XN GPS s nočn... | 238.90 € | **239.00 €** | 8.0 % | **8.0 %** | 239.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI-NC-MC40-M-0370 4.0 Mpix vnitřní IP mini kamera pr... | 167.90 € | **168.00 €** | 24.5 % | **24.5 %** | 168.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 229.90 € | **230.00 €** | 8.2 % | **8.3 %** | 230.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 208.90 € | **209.00 €** | 8.3 % | **8.4 %** | 209.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dcolor GD2 Android TV - 4K UHD multimediální přehrávač | 70.90 € | **71.00 €** | 11.6 % | **11.8 %** | 71.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 133.90 € | **134.00 €** | 26451.7 % | **26471.5 %** | 134.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 78.90 € | **79.00 €** | 23.2 % | **23.3 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná batéria pre DJI Mini 5 Pro | 80.90 € | **81.00 €** | 6.7 % | **6.9 %** | 81.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNR-104F1 Síťový videorekordér (NVR) pro čtyři IP... | 137.90 € | **138.00 €** | 24.7 % | **24.8 %** | 138.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNR-108F1 Síťový videorekordér (NVR) pro osm IP k... | 186.90 € | **187.00 €** | 53.7 % | **53.7 %** | 187.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 189.90 € | **190.00 €** | 8.9 % | **8.9 %** | 190.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-DNW-GPU4G2-48C Čtyřportový 10/100/1000 Mbps PoE s... | 101.90 € | **102.00 €** | 25.0 % | **25.1 %** | 102.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 165.90 € | **166.00 €** | 14.2 % | **14.3 %** | 166.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10153 Horkovzdušná trouba | 169.90 € | **170.00 €** | 8.9 % | **9.0 %** | 170.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6401 PSB | 178.90 € | **179.00 €** | 8.9 % | **9.0 %** | 179.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Creality Sermoon P1 | 2909.90 € | **2910.00 €** | 6.0 % | **6.0 %** | 2910.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Creality Sermoon S1 | 2372.90 € | **2373.00 €** | 6.5 % | **6.5 %** | 2373.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LaserPecker LX2 40W laserový gravír | 1834.90 € | **1835.00 €** | 12.3 % | **12.3 %** | 1835.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1330.00 €** | 13.3 % | **13.3 %** | 1330.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1011)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2326.50 € | **2124.50 €** | 15.0 % | **5.0 %** | 2124.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **364.00 €** | 64.1 % | **6.9 %** | 364.50 € | stávame sa najlacnejší |
| Gorenje FN619EEW5 | 639.00 € | **490.50 €** | 39.3 % | **6.9 %** | 490.90 € | stávame sa najlacnejší |
| Čistiaci robot MOVA V70 Ultra Complete v bielej farbe | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **635.90 €** | 28.2 % | **6.0 %** | 636.00 € | stávame sa najlacnejší |
| Samsung OLED QE65S99H | 2924.90 € | **2791.90 €** | 10.0 % | **5.0 %** | 2758.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.90 €** | 87.4 % | **7.3 %** | 177.00 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **335.00 €** | 48.2 % | **6.8 %** | 335.50 € | stávame sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2649.90 € | **2529.50 €** | 10.0 % | **5.0 %** | 1737.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 EFC226R | 369.00 € | **248.90 €** | 60.0 % | **7.9 %** | 249.00 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **484.00 €** | 32.2 % | **6.9 %** | 484.50 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **528.00 €** | 28.2 % | **5.9 %** | 528.50 € | stávame sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1522.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1620.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **419.50 €** | 32.4 % | **5.0 %** | 369.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.50 €** | 35.3 % | **6.1 %** | 383.90 € | stávame sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.50 €** | 71.7 % | **5.0 %** | 152.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **368.90 €** | 33.6 % | **5.1 %** | 368.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 2193.50 € | **2093.90 €** | 10.0 % | **5.0 %** | 1349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.00 €** | 15.0 % | **7.4 %** | 1346.50 € | stávame sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 764.50 € | **669.90 €** | 138021.0 % | **120929.8 %** | 670.00 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1545.50 € | **1453.50 €** | 15.0 % | **8.2 %** | 1453.54 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **508.50 €** | 23.8 % | **5.1 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10S | 429.00 € | **344.00 €** | 33.3 % | **6.9 %** | 344.50 € | stávame sa najlacnejší |
| Electrolux EOF3H40TH | 339.00 € | **259.90 €** | 37.0 % | **5.0 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **191.50 €** | 47.7 % | **5.1 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BM3WFU3941WBW | 439.00 € | **373.50 €** | 23.4 % | **5.0 %** | 329.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE FN617EES5 | 469.00 € | **405.90 €** | 23.6 % | **7.0 %** | 406.00 € | stávame sa najlacnejší |
| Samsung OLED QE65S85H | 1370.90 € | **1308.50 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **342.00 €** | 22.5 % | **5.0 %** | 297.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 148.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 200.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 356.50 € | **303.00 €** | 72359.3 % | **61485.4 %** | 303.50 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 508.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 416.90 € | **367.90 €** | 75220.7 % | **66367.9 %** | 368.00 € | stávame sa najlacnejší |
| BEKO CTB 6250 W | 159.00 € | **110.50 €** | 51.4 % | **5.2 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 159.00 € | **110.50 €** | 51.4 % | **5.2 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1049.50 € | **1001.90 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LHR3233CK | 199.00 € | **153.50 €** | 36.1 % | **5.0 %** | 122.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **568.90 €** | 15.0 % | **6.8 %** | 569.00 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **412.90 €** | 17.8 % | **6.9 %** | 413.00 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 123.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 143.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Black | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 713.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Green | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 713.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB White | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 713.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Hi Combo | 403.00 € | **368.50 €** | 15.0 % | **5.1 %** | 322.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **396.50 €** | 15.0 % | **5.8 %** | 396.90 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 433.90 € | **399.50 €** | 15.0 % | **5.9 %** | 399.90 € | stávame sa najlacnejší |
| Midland BTR1 Advanced, Single | 219.00 € | **187.50 €** | 25.0 % | **7.0 %** | 187.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **398.50 €** | 14.9 % | **6.7 %** | 398.90 € | stávame sa najlacnejší |
| Electrolux EOF3H50BK | 299.00 € | **268.90 €** | 16.9 % | **5.1 %** | 218.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **288.50 €** | 15.0 % | **5.2 %** | 253.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 685.90 € | **659.90 €** | 15.0 % | **10.7 %** | 660.00 € | stávame sa najlacnejší |
| JBL 430406 Partybox 710 - black | 559.00 € | **533.50 €** | 15.2 % | **10.0 %** | 533.90 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.00 €** | 49.9 % | **19.0 %** | 98.50 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 713.90 € | **688.50 €** | 10.0 % | **6.1 %** | 688.90 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 260.00 € | **235.90 €** | 46873.8 % | **42519.7 %** | 236.00 € | stávame sa najlacnejší |
| Electrolux LKR64022AX | 515.50 € | **491.90 €** | 10.1 % | **5.0 %** | 453.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **45.90 €** | 58.9 % | **5.7 %** | 46.00 € | stávame sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 506.50 € | **483.50 €** | 10.1 % | **5.1 %** | 472.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBSJ21DPY | 497.50 € | **474.90 €** | 10.1 % | **5.1 %** | 396.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RP619EEW5 | 482.50 € | **460.50 €** | 10.1 % | **5.0 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 331.00 € | **309.50 €** | 12.4 % | **5.1 %** | 293.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 659.90 € | **638.50 €** | 10.0 % | **6.4 %** | 638.90 € | stávame sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 465.50 € | **444.50 €** | 10.1 % | **5.1 %** | 319.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZTE Nubia Air Pro 5G bílý | 459.50 € | **438.50 €** | 10.1 % | **5.1 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 239.50 € | **218.90 €** | 24.5 % | **13.8 %** | 219.00 € | stávame sa najlacnejší |
| LG FA2S8V3GN3W | 444.90 € | **424.50 €** | 10.1 % | **5.0 %** | 398.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620EABK4 | 445.50 € | **425.50 €** | 10.1 % | **5.1 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 180.50 € | **160.50 €** | 27.3 % | **13.2 %** | 160.86 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **79.00 €** | 33.3 % | **6.4 %** | 79.50 € | stávame sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 431.50 € | **411.90 €** | 10.0 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AW | 478.50 € | **458.90 €** | 10.1 % | **5.6 %** | 459.00 € | stávame sa najlacnejší |
| Beko BU1154HCN | 289.00 € | **269.50 €** | 12.8 % | **5.2 %** | 265.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620EAW4 | 414.90 € | **395.90 €** | 10.1 % | **5.0 %** | 360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 229.00 € | **210.00 €** | 14.5 % | **5.0 %** | 175.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CCGMEE9025PX/E | 817.50 € | **798.50 €** | 10.1 % | **7.5 %** | 798.90 € | stávame sa najlacnejší |
| ZEUSLAP Z16H 16" prenosný monitor | 246.90 € | **228.50 €** | 15.1 % | **6.5 %** | 228.90 € | stávame sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 396.90 € | **378.90 €** | 10.1 % | **5.1 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 188.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 396.90 € | **378.90 €** | 10.0 % | **5.1 %** | 378.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 67.50 € | **49.50 €** | 44.0 % | **5.6 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE43M70H | 380.90 € | **363.50 €** | 10.0 % | **5.0 %** | 354.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 138.00 € | **120.90 €** | 27264.7 % | **23873.8 %** | 121.00 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 637.50 € | **620.50 €** | 7.9 % | **5.0 %** | 520.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OTTOCAST OTTOAIBOX N95C Monitor do auta | 201.50 € | **184.50 €** | 15.0 % | **5.3 %** | 154.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 366.50 € | **349.50 €** | 10.1 % | **5.0 %** | 324.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 161.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1757.90 € | **1740.90 €** | 6.0 % | **5.0 %** | 1738.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 57.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 62.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Storio II 2043 90030 černá | 347.90 € | **331.90 €** | 10.1 % | **5.0 %** | 268.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 340.50 € | **324.90 €** | 10.1 % | **5.0 %** | 322.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA V10 Akumulátorový vysávač na bazény | 204.50 € | **188.90 €** | 13.7 % | **5.1 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **247.50 €** | 15.0 % | **8.3 %** | 247.90 € | stávame sa najlacnejší |
| ETA 0028 98050 | 79.99 € | **64.90 €** | 30.1 % | **5.6 %** | 63.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWSC 833 SB | 331.50 € | **316.50 €** | 10.1 % | **5.2 %** | 286.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept ETV8360bcN | 540.90 € | **525.90 €** | 10.0 % | **7.0 %** | 526.00 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 344.90 € | **329.90 €** | 10.0 % | **5.2 %** | 330.00 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 333.50 € | **318.50 €** | 10.0 % | **5.1 %** | 318.90 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 278.00 € | **263.00 €** | 14.9 % | **8.7 %** | 263.50 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 314.50 € | **299.90 €** | 10.2 % | **5.0 %** | 275.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **154.50 €** | 14.9 % | **5.1 %** | 154.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 483.50 € | **469.00 €** | 10.1 % | **6.8 %** | 469.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 46.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 75.99 € | **61.90 €** | 29.5 % | **5.5 %** | 59.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 402.50 € | **388.50 €** | 11.1 % | **7.2 %** | 388.90 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **38.50 €** | 50.5 % | **10.3 %** | 38.90 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 312.50 € | **298.50 €** | 10.1 % | **5.1 %** | 298.90 € | stávame sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.00 €** | 54.8 % | **9.9 %** | 34.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 65.50 € | **51.90 €** | 33.5 % | **5.8 %** | 51.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 49B8-S | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 279.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNA416HXBR | 456.90 € | **443.90 €** | 10.0 % | **6.9 %** | 444.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C510W 3MPx, vonkajšia, IP, WiFi,... | 63.90 € | **51.00 €** | 31.7 % | **5.1 %** | 47.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux CFG526R | 280.50 € | **267.90 €** | 10.0 % | **5.1 %** | 263.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR8589CE | 413.50 € | **400.90 €** | 10.1 % | **6.7 %** | 401.00 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.00 €** | 50.2 % | **38.0 %** | 141.50 € | stávame sa najlacnejší |
| ETA 0028 92020 | 79.99 € | **67.90 €** | 31.5 % | **11.6 %** | 68.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **102.50 €** | 17.4 % | **5.1 %** | 84.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HIC 64401 | 159.00 € | **147.00 €** | 13.6 % | **5.0 %** | 143.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK14CPS4 | 310.50 € | **298.50 €** | 10.1 % | **5.9 %** | 298.90 € | stávame sa najlacnejší |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 73.99 € | **62.00 €** | 37.4 % | **15.1 %** | 62.50 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 380.50 € | **368.90 €** | 10.1 % | **6.8 %** | 369.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F03 STD | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 119.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 79.50 € | **67.90 €** | 59.1 % | **35.9 %** | 68.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 69.50 € | **58.00 €** | 43.9 % | **20.1 %** | 58.50 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.50 € | **135.00 €** | 15.5 % | **6.4 %** | 135.50 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 230.50 € | **219.00 €** | 10.7 % | **5.2 %** | 219.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 38.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 233.50 € | **222.50 €** | 10.2 % | **5.0 %** | 99.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 243.90 € | **232.90 €** | 10.1 % | **5.1 %** | 191.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 206.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 206.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 376.90 € | **365.90 €** | 10.1 % | **6.8 %** | 366.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 217.90 € | **207.00 €** | 11.4 % | **5.9 %** | 207.50 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 200.50 € | **189.90 €** | 14.1 % | **8.1 %** | 190.00 € | stávame sa najlacnejší |
| ETA Magic X-treme 7235 90000 černý/modrý | 339.50 € | **329.00 €** | 10.1 % | **6.7 %** | 329.50 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.00 €** | 15.0 % | **9.6 %** | 212.50 € | stávame sa najlacnejší |
| Taška DJI Power 1000 | 119.90 € | **109.50 €** | 15.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.50 €** | 25.0 % | **7.1 %** | 62.90 € | stávame sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK364G10 Coppertinto | 69.90 € | **59.90 €** | 29.7 % | **11.1 %** | 60.00 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 351.90 € | **341.90 €** | 10.1 % | **7.0 %** | 342.00 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 49.50 € | **39.50 €** | 47.9 % | **18.0 %** | 39.90 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **468.00 €** | 15.0 % | **12.6 %** | 468.50 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 217.90 € | **208.00 €** | 17.2 % | **11.8 %** | 208.50 € | stávame sa najlacnejší |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 148.90 € | **139.00 €** | 15.1 % | **7.5 %** | 139.50 € | stávame sa najlacnejší |
| Braun SI1009OR | 32.90 € | **23.00 €** | 54.3 % | **7.8 %** | 23.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 37.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 180.50 € | **170.90 €** | 24.8 % | **18.2 %** | 171.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **80.50 €** | 17.4 % | **5.0 %** | 80.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 210.50 € | **201.00 €** | 25.0 % | **19.4 %** | 201.50 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.00 €** | 14.9 % | **9.6 %** | 195.50 € | stávame sa najlacnejší |
| CANON i-SENSYS MF3010 | 202.90 € | **193.90 €** | 10.0 % | **5.1 %** | 158.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.50 € | **74.50 €** | 18.2 % | **5.4 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WI 7020 P | 331.00 € | **322.00 €** | 8.0 % | **5.0 %** | 314.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **41.90 €** | 44.2 % | **18.7 %** | 42.00 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 799.50 € | **790.50 €** | 15.0 % | **13.7 %** | 790.90 € | stávame sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 507.50 € | **498.50 €** | 10.0 % | **8.1 %** | 498.90 € | stávame sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.00 €** | 34.5 % | **7.0 %** | 35.50 € | stávame sa najlacnejší |
| Beko TS190340N | 199.00 € | **190.00 €** | 14.4 % | **9.3 %** | 190.50 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **39.00 €** | 38.2 % | **12.6 %** | 39.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 53.50 € | **44.90 €** | 43.6 % | **20.5 %** | 45.00 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 135.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **105.90 €** | 18.8 % | **9.8 %** | 106.00 € | stávame sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 145.50 € | **137.00 €** | 25.0 % | **17.7 %** | 137.45 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 64.50 € | **56.00 €** | 46.2 % | **27.0 %** | 56.50 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 117.50 € | **109.00 €** | 16.1 % | **7.7 %** | 109.50 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 292.00 € | **283.90 €** | 8.1 % | **5.1 %** | 283.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 326.00 € | **317.90 €** | 14.9 % | **12.1 %** | 318.00 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 41.00 € | **32.90 €** | 31.9 % | **5.8 %** | 32.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 166.50 € | **158.50 €** | 10.3 % | **5.0 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **38.50 €** | 28.3 % | **6.2 %** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 41.90 € | **33.90 €** | 31.1 % | **6.1 %** | 33.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 167.90 € | **159.90 €** | 15.8 % | **10.2 %** | 159.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 167.90 € | **159.90 €** | 15.8 % | **10.2 %** | 159.99 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 39.90 € | **31.90 €** | 34.9 % | **7.9 %** | 32.00 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 58.90 € | **51.00 €** | 22.1 % | **5.7 %** | 51.50 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.00 €** | 15.0 % | **11.8 %** | 277.50 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 119.50 € | **111.90 €** | 14.0 % | **6.7 %** | 112.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.50 € | **26.00 €** | 35.7 % | **5.3 %** | 26.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír XTOOL M2 20 W | 1124.50 € | **1117.00 €** | 15.0 % | **14.3 %** | 1117.25 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 295.50 € | **288.00 €** | 10.0 % | **7.2 %** | 288.50 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 94.50 € | **87.00 €** | 19.3 % | **9.8 %** | 87.50 € | stávame sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 154.90 € | **147.50 €** | 11.1 % | **5.8 %** | 147.90 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.00 € | **112.00 €** | 11.6 % | **5.0 %** | 105.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EB61C4DB | 150.50 € | **143.50 €** | 10.1 % | **5.0 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE200 AC750 WiFi Range Extender | 29.90 € | **22.90 €** | 39.5 % | **6.8 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **23.50 €** | 59.0 % | **22.5 %** | 23.90 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 75.50 € | **68.50 €** | 18.6 % | **7.6 %** | 68.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 195.50 € | **188.50 €** | 10.1 % | **6.2 %** | 188.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **41.00 €** | 54.5 % | **32.0 %** | 41.50 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 42.00 € | **35.00 €** | 33.9 % | **11.5 %** | 35.50 € | stávame sa najlacnejší |
| DOMO DO244SV | 147.90 € | **141.00 €** | 10.2 % | **5.0 %** | 132.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 115.90 € | **109.00 €** | 15.1 % | **8.2 %** | 109.50 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45P-BK černé se sto... | 276.50 € | **269.90 €** | 21.0 % | **18.1 %** | 270.00 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 318.50 € | **311.90 €** | 10.1 % | **7.8 %** | 312.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 48.50 € | **41.90 €** | 22.4 % | **5.8 %** | 42.00 € | stávame sa najlacnejší |
| Rowenta RO4931EA | 135.50 € | **128.90 €** | 10.4 % | **5.0 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 147.50 € | **140.90 €** | 10.2 % | **5.2 %** | 138.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.50 € | **68.90 €** | 15.3 % | **5.3 %** | 67.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **81.90 €** | 14.9 % | **6.3 %** | 82.00 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **81.90 €** | 14.9 % | **6.3 %** | 82.00 € | stávame sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 237.00 € | **230.50 €** | 8.1 % | **5.2 %** | 207.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 31.50 € | **25.00 €** | 54.7 % | **22.8 %** | 25.39 € | stávame sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 177.50 € | **171.00 €** | 10.1 % | **6.1 %** | 171.50 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 25.50 € | **19.00 €** | 55.1 % | **15.5 %** | 19.50 € | stávame sa najlacnejší |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 99.50 € | **93.50 €** | 24.8 % | **17.3 %** | 93.84 € | stávame sa najlacnejší |
| Beko VRT96425VD | 262.50 € | **256.50 €** | 10.1 % | **7.6 %** | 256.90 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 247.00 € | **241.00 €** | 11.6 % | **8.8 %** | 241.50 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.90 € | **122.00 €** | 10.1 % | **5.0 %** | 111.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 120.90 € | **115.00 €** | 23.6 % | **17.5 %** | 115.39 € | stávame sa najlacnejší |
| JBL CHARGEES3 | 119.90 € | **114.00 €** | 15.2 % | **9.5 %** | 114.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **26.90 €** | 59.9 % | **32.4 %** | 27.00 € | stávame sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.50 € | **123.90 €** | 10.0 % | **5.3 %** | 103.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 119.50 € | **113.90 €** | 10.5 % | **5.3 %** | 112.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 34.50 € | **29.00 €** | 58.8 % | **33.5 %** | 29.50 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.00 €** | 46.8 % | **5.4 %** | 14.50 € | stávame sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.90 € | **121.50 €** | 10.0 % | **5.4 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 125.90 € | **120.50 €** | 10.1 % | **5.4 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.90 € | **117.50 €** | 10.2 % | **5.3 %** | 106.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HNU61422B | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 114.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 108.90 € | **103.50 €** | 13.5 % | **7.8 %** | 103.90 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.90 € | **167.50 €** | 10.1 % | **6.6 %** | 167.90 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 280.90 € | **275.50 €** | 10.1 % | **8.0 %** | 275.90 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **499.90 €** | 15.0 % | **13.8 %** | 500.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 21.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 24.00 € | **18.90 €** | 33.4 % | **5.0 %** | 18.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7550i White | 108.50 € | **103.50 €** | 10.4 % | **5.3 %** | 75.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal CY505EE0 | 110.50 € | **105.50 €** | 10.4 % | **5.4 %** | 96.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.50 € | **109.50 €** | 10.2 % | **5.4 %** | 109.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.90 €** | 59.7 % | **33.9 %** | 26.00 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.90 € | **121.90 €** | 10.2 % | **5.8 %** | 122.00 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.89 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.89 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.50 €** | 14.9 % | **10.0 %** | 114.90 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **20.50 €** | 59.8 % | **28.5 %** | 20.90 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.00 €** | 15.1 % | **10.5 %** | 119.50 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 59.90 € | **55.00 €** | 20.2 % | **10.4 %** | 55.39 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.00 €** | 59.0 % | **31.0 %** | 23.50 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 20.50 € | **15.90 €** | 45.8 % | **13.1 %** | 16.00 € | stávame sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **95.90 €** | 10.1 % | **5.0 %** | 80.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 115.50 € | **110.90 €** | 9.4 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 110.50 € | **105.90 €** | 24.2 % | **19.0 %** | 106.00 € | stávame sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 99.00 € | **94.50 €** | 10.0 % | **5.0 %** | 83.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **40.50 €** | 17.4 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B864SA74 | 103.00 € | **98.50 €** | 10.1 % | **5.3 %** | 98.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 22.50 € | **18.00 €** | 49.6 % | **19.7 %** | 18.39 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 183.00 € | **178.50 €** | 7.9 % | **5.3 %** | 178.90 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 70.50 € | **66.00 €** | 24.2 % | **16.3 %** | 66.50 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 21.50 € | **17.00 €** | 53.1 % | **21.0 %** | 17.50 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.50 € | **125.00 €** | 10.0 % | **6.2 %** | 125.50 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 136.50 € | **132.00 €** | 9.3 % | **5.7 %** | 132.50 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 94.50 € | **90.00 €** | 12.4 % | **7.1 %** | 90.50 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.90 € | **91.50 €** | 10.2 % | **5.1 %** | 73.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO331L | 106.90 € | **102.50 €** | 10.0 % | **5.5 %** | 102.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 14.90 € | **10.50 €** | 49.7 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 13.5 % | **5.1 %** | 54.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **31.90 €** | 19.6 % | **6.0 %** | 29.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrý LED pásik TP-Link Tapo L900-5 5m, 13.5W, 230V... | 21.00 € | **16.90 €** | 30.7 % | **5.2 %** | 16.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 21.00 € | **16.90 €** | 36.3 % | **9.7 %** | 17.00 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.90 € | **61.90 €** | 20.2 % | **12.9 %** | 62.00 € | stávame sa najlacnejší |
| CANON PIXMA TS6550i White | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 50.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax PartyGo1 Play | 84.50 € | **80.50 €** | 10.3 % | **5.1 %** | 70.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.90 €** | 10.0 % | **5.4 %** | 82.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT 420 Android TV box | 81.50 € | **77.50 €** | 10.6 % | **5.2 %** | 72.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **36.90 €** | 17.5 % | **6.0 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 81.90 € | **77.90 €** | 10.8 % | **5.4 %** | 77.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 81.90 € | **77.90 €** | 10.8 % | **5.4 %** | 77.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 62.50 € | **58.50 €** | 12.6 % | **5.4 %** | 58.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 14.00 € | **10.00 €** | 48.2 % | **5.9 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 75.90 € | **71.90 €** | 23.9 % | **17.3 %** | 71.95 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **18.90 €** | 54.6 % | **27.6 %** | 19.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **16.90 €** | 43.0 % | **15.7 %** | 17.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **23.90 €** | 42.8 % | **22.4 %** | 24.00 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **82.50 €** | 15.2 % | **9.8 %** | 82.83 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **13.00 €** | 47.5 % | **12.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **13.00 €** | 47.5 % | **12.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.00 € | **13.00 €** | 38.8 % | **6.1 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **31.00 €** | 37.3 % | **21.6 %** | 31.50 € | stávame sa najlacnejší |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 83.00 € | **79.00 €** | 21.0 % | **15.1 %** | 79.50 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 81.00 € | **77.00 €** | 23.6 % | **17.5 %** | 77.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **22.00 €** | 42.8 % | **20.9 %** | 22.50 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.00 €** | 14.8 % | **9.6 %** | 83.50 € | stávame sa najlacnejší |
| CrockPot CSC062X | 158.90 € | **155.00 €** | 7.7 % | **5.1 %** | 155.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO353VD | 84.90 € | **81.00 €** | 10.2 % | **5.1 %** | 81.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 90A1 | 132.90 € | **129.00 €** | 10.3 % | **7.1 %** | 129.50 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **11.00 €** | 51.8 % | **12.1 %** | 11.50 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 18.90 € | **15.00 €** | 37.0 % | **8.7 %** | 15.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 28.90 € | **25.00 €** | 24.8 % | **8.0 %** | 25.50 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 4.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **11.90 €** | 56.3 % | **20.0 %** | 12.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **106.90 €** | 8.6 % | **5.1 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 76.50 € | **72.90 €** | 10.5 % | **5.3 %** | 72.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **86.90 €** | 15.1 % | **10.6 %** | 87.00 € | stávame sa najlacnejší |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 42.50 € | **39.00 €** | 14.6 % | **5.2 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 75.00 € | **71.50 €** | 10.3 % | **5.2 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 102.00 € | **98.50 €** | 10.0 % | **6.3 %** | 98.90 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **47.00 €** | 24.5 % | **15.9 %** | 47.45 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.00 €** | 37.8 % | **18.8 %** | 22.50 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 22.50 € | **19.00 €** | 53.8 % | **29.9 %** | 19.50 € | stávame sa najlacnejší |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 98.50 € | **95.00 €** | 21543.6 % | **20774.5 %** | 95.50 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 112.50 € | **109.00 €** | 10.3 % | **6.8 %** | 109.50 € | stávame sa najlacnejší |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 28.50 € | **25.00 €** | 29.7 % | **13.8 %** | 25.50 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 20.50 € | **17.00 €** | 29.7 % | **7.6 %** | 17.50 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 218.50 € | **215.00 €** | 10.2 % | **8.4 %** | 215.50 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **12.50 €** | 35.1 % | **5.6 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 251.90 € | **248.50 €** | 10.2 % | **8.7 %** | 248.90 € | stávame sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.50 €** | 50.2 % | **33.2 %** | 26.90 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **424.90 €** | 14.9 % | **14.1 %** | 425.00 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **35.90 €** | 14.7 % | **5.6 %** | 36.00 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 107.00 € | **103.90 €** | 14.8 % | **11.5 %** | 104.00 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 171.00 € | **167.90 €** | 7.9 % | **6.0 %** | 168.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 30.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Profi XL + náhrada Static Plus | 62.90 € | **59.90 €** | 10.7 % | **5.4 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 31.90 € | **28.90 €** | 16.7 % | **5.7 %** | 28.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 62.50 € | **59.50 €** | 10.5 % | **5.2 %** | 59.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.90 € | **65.90 €** | 10.5 % | **5.7 %** | 66.00 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.90 € | **131.90 €** | 10.2 % | **7.8 %** | 132.00 € | stávame sa najlacnejší |
| PRIMO PR406IM | 128.90 € | **125.90 €** | 10.1 % | **7.6 %** | 126.00 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.90 € | **120.90 €** | 10.2 % | **7.6 %** | 121.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 50.90 € | **47.90 €** | 15.3 % | **8.5 %** | 48.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **35.90 €** | 14.9 % | **6.0 %** | 36.00 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **35.90 €** | 46.1 % | **34.8 %** | 36.00 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.50 €** | 15.2 % | **7.6 %** | 42.90 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.50 € | **128.50 €** | 10.1 % | **7.6 %** | 128.90 € | stávame sa najlacnejší |
| Black&Decker BXDH12E | 167.50 € | **164.50 €** | 10.3 % | **8.3 %** | 164.90 € | stávame sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 29.50 € | **26.50 €** | 26.3 % | **13.5 %** | 26.90 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.50 €** | 14.9 % | **11.3 %** | 92.90 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **14.50 €** | 42.8 % | **18.4 %** | 14.90 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **869.00 €** | 15.0 % | **14.6 %** | 869.50 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.00 € | **59.00 €** | 15.2 % | **9.6 %** | 59.50 € | stávame sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **24.00 €** | 34.4 % | **19.5 %** | 24.50 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 342.00 € | **339.00 €** | 6.9 % | **6.0 %** | 339.50 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-WH bílá barva | 342.00 € | **339.00 €** | 6.9 % | **6.0 %** | 339.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **19.00 €** | 54.3 % | **33.3 %** | 19.50 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.90 € | **127.00 €** | 10.2 % | **7.8 %** | 127.50 € | stávame sa najlacnejší |
| SONY WFC710N Black | 70.90 € | **68.00 €** | 14.5 % | **9.8 %** | 68.50 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 196.90 € | **194.00 €** | 11.0 % | **9.4 %** | 194.50 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 9.40 € | **6.50 €** | 54.1 % | **6.5 %** | 6.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 12.50 € | **9.60 €** | 56.8 % | **20.4 %** | 9.69 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **13.00 €** | 37.7 % | **12.6 %** | 13.50 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **10.00 €** | 61.4 % | **25.1 %** | 10.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.90 € | **11.00 €** | 49.7 % | **18.5 %** | 11.50 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.90 € | **56.00 €** | 10.5 % | **5.1 %** | 56.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3752i Blue | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 37.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 28.50 € | **25.90 €** | 15.9 % | **5.3 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.90 €** | 10.2 % | **5.5 %** | 55.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 29.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **20.90 €** | 38.1 % | **22.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **18.90 €** | 38.5 % | **21.8 %** | 19.00 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **56.90 €** | 15.2 % | **10.2 %** | 57.00 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **42.90 €** | 21.5 % | **14.6 %** | 43.00 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 37.50 € | **34.90 €** | 23.1 % | **14.5 %** | 35.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **11.90 €** | 37.7 % | **13.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **11.90 €** | 58.4 % | **30.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.50 € | **9.90 €** | 49.0 % | **18.0 %** | 10.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **9.90 €** | 47.9 % | **17.2 %** | 10.00 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 175.50 € | **172.90 €** | 10.1 % | **8.4 %** | 173.00 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **254.90 €** | 15.1 % | **13.9 %** | 255.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 482.50 € | **480.00 €** | 5.6 % | **5.0 %** | 463.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 7.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.50 €** | 47.3 % | **36.4 %** | 31.90 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **50.50 €** | 14.9 % | **9.5 %** | 50.90 € | stávame sa najlacnejší |
| Beko Mezikus PCSKM | 60.00 € | **57.50 €** | 10.0 % | **5.5 %** | 57.90 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 60.00 € | **57.50 €** | 10.0 % | **5.5 %** | 57.90 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 490.00 € | **487.50 €** | 10.0 % | **9.4 %** | 487.90 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.00 €** | 55.4 % | **39.5 %** | 22.50 € | stávame sa najlacnejší |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 62.50 € | **60.00 €** | 15.1 % | **10.5 %** | 60.50 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 131.50 € | **129.00 €** | 10.4 % | **8.3 %** | 129.50 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **112.00 €** | 10.0 % | **7.6 %** | 112.50 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.00 €** | 14.9 % | **12.4 %** | 114.50 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 23.50 € | **21.00 €** | 23.1 % | **10.0 %** | 21.50 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 16.50 € | **14.00 €** | 25.4 % | **6.4 %** | 14.50 € | stávame sa najlacnejší |
| MOZA RACING RS061 predĺženie stĺpika riadenia | 120.50 € | **118.00 €** | 15.1 % | **12.8 %** | 118.50 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.00 €** | 15.4 % | **11.6 %** | 74.50 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.50 €** | 29.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L630 GU10, 3,7W, 230V, c... | 12.00 € | **9.60 €** | 32.2 % | **5.8 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.10 €** | 60.5 % | **23.8 %** | 8.20 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **10.50 €** | 47.7 % | **20.2 %** | 10.89 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 44.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 49.90 € | **47.50 €** | 11.0 % | **5.7 %** | 45.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.4 % | **5.6 %** | 50.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **22.50 €** | 59.2 % | **43.8 %** | 22.90 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.80 €** | 55.6 % | **5.2 %** | 4.90 € | stávame sa najlacnejší |
| Russell Hobbs 27011-56 | 47.00 € | **44.90 €** | 10.1 % | **5.2 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 26.00 € | **23.90 €** | 53.8 % | **41.4 %** | 24.00 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **36.90 €** | 14.5 % | **8.4 %** | 37.00 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **57.90 €** | 14.9 % | **10.9 %** | 58.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **42.90 €** | 14.9 % | **9.5 %** | 43.00 € | stávame sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 28.00 € | **25.90 €** | 14.7 % | **6.1 %** | 26.00 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **34.90 €** | 15.1 % | **8.5 %** | 35.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 18.00 € | **15.90 €** | 36.8 % | **20.8 %** | 16.00 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR černé | 197.00 € | **194.90 €** | 17.4 % | **16.1 %** | 194.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 197.00 € | **194.90 €** | 17.4 % | **16.1 %** | 194.99 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 206.00 € | **203.90 €** | 14.9 % | **13.8 %** | 204.00 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **82.90 €** | 14.8 % | **12.0 %** | 83.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 161.00 € | **158.90 €** | 10.0 % | **8.6 %** | 159.00 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.90 €** | 38.1 % | **15.8 %** | 11.00 € | stávame sa najlacnejší |
| Niceboy PILOT Q2 WiFi | 46.50 € | **44.50 €** | 10.5 % | **5.7 %** | 38.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **24.50 €** | 15.2 % | **6.5 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.3 % | **5.1 %** | 36.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **32.90 €** | 11.8 % | **5.4 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 25.00 € | **23.00 €** | 14.3 % | **5.2 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 18.50 € | **16.50 €** | 20.3 % | **7.3 %** | 14.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar SB-820BT Soundbar | 35.50 € | **33.50 €** | 11.5 % | **5.2 %** | 31.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **10.50 €** | 29.5 % | **8.7 %** | 9.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 22.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.00 €** | 14.6 % | **5.1 %** | 21.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CFT610/5X/1 | 49.50 € | **47.50 €** | 10.1 % | **5.7 %** | 47.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.50 € | **32.50 €** | 11.5 % | **5.0 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26810-56/RH | 46.50 € | **44.50 €** | 10.2 % | **5.5 %** | 44.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **18.50 €** | 17.8 % | **6.3 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **45.90 €** | 15.3 % | **10.5 %** | 46.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **31.90 €** | 39.0 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **28.90 €** | 14.8 % | **7.4 %** | 29.00 € | stávame sa najlacnejší |
| Domo DO344DH | 149.90 € | **147.90 €** | 10.1 % | **8.6 %** | 148.00 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.90 € | **22.90 €** | 17.8 % | **8.4 %** | 23.00 € | stávame sa najlacnejší |
| Vákuovačka G21 Nefrit | 117.90 € | **115.90 €** | 10.0 % | **8.1 %** | 116.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **100.90 €** | 15.1 % | **12.9 %** | 101.00 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **109.90 €** | 15.0 % | **12.9 %** | 110.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 12.50 € | **10.50 €** | 50.6 % | **26.5 %** | 10.89 € | stávame sa najlacnejší |
| FoodSaver FFC026X | 41.50 € | **39.50 €** | 10.8 % | **5.5 %** | 39.90 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 350.50 € | **348.50 €** | 15.6 % | **14.9 %** | 348.90 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **50.50 €** | 14.6 % | **10.3 %** | 50.90 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 49.50 € | **47.50 €** | 15.0 % | **10.4 %** | 47.90 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 14.50 € | **12.50 €** | 24.1 % | **7.0 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **14.00 €** | 38.4 % | **21.1 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.00 € | **10.00 €** | 52.9 % | **27.4 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.00 €** | 53.7 % | **39.7 %** | 20.50 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.00 €** | 53.7 % | **39.7 %** | 20.50 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.00 €** | 53.7 % | **39.7 %** | 20.50 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 28.00 € | **26.00 €** | 15.0 % | **6.8 %** | 26.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.00 €** | 50.1 % | **33.4 %** | 16.50 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 20.00 € | **18.00 €** | 17.7 % | **5.9 %** | 18.50 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **88.00 €** | 14.8 % | **12.3 %** | 88.50 € | stávame sa najlacnejší |
| ETA 5180 91010 sklo | 13.99 € | **12.00 €** | 27.2 % | **9.1 %** | 12.50 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **231.00 €** | 18.3 % | **17.4 %** | 231.50 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **231.00 €** | 18.3 % | **17.4 %** | 231.50 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **231.00 €** | 18.3 % | **17.4 %** | 231.50 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **231.00 €** | 18.3 % | **17.4 %** | 231.50 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **231.00 €** | 18.3 % | **17.4 %** | 231.50 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 143.90 € | **142.00 €** | 11.1 % | **9.6 %** | 142.50 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 66.90 € | **65.00 €** | 11.1 % | **7.9 %** | 65.50 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.10 €** | 29.9 % | **5.2 %** | 8.11 € | stávame sa najlacnejší |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 32.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.90 € | **22.00 €** | 14.5 % | **5.4 %** | 22.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 23.90 € | **22.00 €** | 18.0 % | **8.6 %** | 22.39 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **15.00 €** | 39.1 % | **23.4 %** | 15.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **61.00 €** | 21.4 % | **17.7 %** | 61.50 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **30.00 €** | 16.5 % | **9.5 %** | 30.50 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **19.00 €** | 18.1 % | **7.3 %** | 19.50 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 38.90 € | **37.00 €** | 14.8 % | **9.2 %** | 37.50 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.90 € | **42.00 €** | 15.4 % | **10.4 %** | 42.50 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT315A | 308.90 € | **307.00 €** | 15.0 % | **14.3 %** | 307.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.20 € | **4.50 €** | 47.0 % | **6.7 %** | 4.60 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.00 €** | 36.1 % | **19.3 %** | 12.50 € | stávame sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.90 €** | 10.9 % | **6.0 %** | 28.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.50 € | **30.90 €** | 11.5 % | **6.0 %** | 27.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Powerstation Uni FIXPOS-U-BK | 34.50 € | **32.90 €** | 10.3 % | **5.2 %** | 31.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.90 €** | 10.4 % | **5.8 %** | 35.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO5S08E0 | 35.50 € | **33.90 €** | 11.2 % | **6.2 %** | 33.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 46.50 € | **44.90 €** | 9.5 % | **5.7 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.3 % | **6.3 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **26.90 €** | 15.7 % | **9.2 %** | 27.00 € | stávame sa najlacnejší |
| GUZZANTIGZ 3601 | 28.50 € | **26.90 €** | 11.3 % | **5.1 %** | 27.00 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **23.90 €** | 37.8 % | **29.1 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **21.90 €** | 39.1 % | **29.6 %** | 22.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.50 € | **17.90 €** | 14.5 % | **5.2 %** | 18.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **40.90 €** | 14.7 % | **10.4 %** | 41.00 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **55.90 €** | 15.0 % | **11.8 %** | 56.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.50 € | **12.90 €** | 18.4 % | **5.3 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **14.90 €** | 56.9 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **14.90 €** | 56.9 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **13.90 €** | 55.0 % | **39.0 %** | 14.00 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.90 €** | 10.0 % | **7.4 %** | 65.00 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **135.90 €** | 15.0 % | **13.7 %** | 136.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **3.90 €** | 48.8 % | **7.5 %** | 3.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 25.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií XTAR VC4SL 18650 | 27.00 € | **25.50 €** | 13.1 % | **6.8 %** | 19.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **31.00 €** | 10.3 % | **5.2 %** | 28.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 37.00 € | **35.50 €** | 10.3 % | **5.8 %** | 33.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.00 € | **25.50 €** | 13.1 % | **6.8 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové háky REBEL RBA-2505 | 12.00 € | **10.50 €** | 21.2 % | **6.0 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.50 €** | 22.9 % | **7.5 %** | 10.90 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board L/Uni | 15.00 € | **13.50 €** | 20.9 % | **8.8 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.50 €** | 38.3 % | **32.5 %** | 34.90 € | stávame sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 41.00 € | **39.50 €** | 10.2 % | **6.1 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **15.00 €** | 39.3 % | **26.6 %** | 15.50 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **12.00 €** | 55.0 % | **37.8 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 15.50 € | **14.00 €** | 53.9 % | **39.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **12.00 €** | 55.7 % | **38.4 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 15.50 € | **14.00 €** | 54.4 % | **39.5 %** | 14.50 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **26.00 €** | 15.6 % | **9.3 %** | 26.50 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.50 € | **23.00 €** | 14.4 % | **7.4 %** | 23.50 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.00 €** | 10.1 % | **8.4 %** | 98.50 € | stávame sa najlacnejší |
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **16.00 €** | 24.4 % | **13.7 %** | 16.50 € | stávame sa najlacnejší |
| Nutribullet NB614.DG | 55.50 € | **54.00 €** | 10.1 % | **7.1 %** | 54.50 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.50 € | **39.00 €** | 11.1 % | **7.0 %** | 39.50 € | stávame sa najlacnejší |
| AMIKO dálkové ovládání Univerzální, HD - SD | 14.50 € | **13.00 €** | 26.5 % | **13.4 %** | 13.50 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.00 €** | 45.5 % | **35.4 %** | 20.50 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 19.50 € | **18.00 €** | 14.9 % | **6.0 %** | 18.50 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 19.50 € | **18.00 €** | 15.0 % | **6.1 %** | 18.50 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 19.50 € | **18.00 €** | 15.0 % | **6.1 %** | 18.50 € | stávame sa najlacnejší |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell O... | 19.50 € | **18.00 €** | 14.9 % | **6.0 %** | 18.50 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| Filtračný systém Freewell UV Osmo Pocket 4P | 19.50 € | **18.00 €** | 14.9 % | **6.0 %** | 18.50 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND64 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND8 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.00 €** | 15.0 % | **11.0 %** | 41.50 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **11.00 €** | 36.0 % | **19.7 %** | 11.50 € | stávame sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 12.50 € | **11.00 €** | 20.1 % | **5.7 %** | 11.50 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 43.50 € | **42.00 €** | 10.1 % | **6.3 %** | 42.50 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 272.50 € | **271.00 €** | 7.5 % | **6.9 %** | 271.50 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 209.50 € | **208.00 €** | 9.9 % | **9.1 %** | 208.50 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.50 € | **58.00 €** | 8.1 % | **5.4 %** | 58.50 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 32.50 € | **31.00 €** | 14.8 % | **9.5 %** | 31.50 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 138.50 € | **137.00 €** | 10.1 % | **8.9 %** | 137.50 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **252.50 €** | 18.3 % | **17.6 %** | 252.64 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.90 € | **120.50 €** | 10.3 % | **9.1 %** | 120.90 € | stávame sa najlacnejší |
| Domo DO228SV | 121.90 € | **120.50 €** | 10.0 % | **8.8 %** | 120.90 € | stávame sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 123.90 € | **122.50 €** | 16.6 % | **15.2 %** | 122.90 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 13.90 € | **12.50 €** | 18.6 % | **6.6 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.60 €** | 54.5 % | **34.8 %** | 9.70 € | stávame sa najlacnejší |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.90 € | **32.50 €** | 9.8 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper ABS Filament Creality (White) | 18.90 € | **17.50 €** | 15.3 % | **6.7 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.50 €** | 10.5 % | **6.2 %** | 29.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 42.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 16.3 % | **7.7 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.90 € | **25.50 €** | 11.2 % | **5.4 %** | 24.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje SIH1800BLT | 19.90 € | **18.50 €** | 14.8 % | **6.7 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.90 € | **46.50 €** | 8.8 % | **5.6 %** | 46.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **26.50 €** | 11.2 % | **5.6 %** | 26.90 € | stávame sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 931.90 € | **930.50 €** | 15.0 % | **14.8 %** | 930.90 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.80 €** | 39.2 % | **5.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 9.00 € | **7.80 €** | 53.7 % | **33.2 %** | 7.90 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.10 €** | 59.1 % | **33.0 %** | 6.20 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **35.90 €** | 41.8 % | **37.5 %** | 36.00 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.00 € | **21.90 €** | 12.9 % | **7.5 %** | 22.00 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.90 €** | 47.5 % | **41.9 %** | 28.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **17.90 €** | 14.3 % | **7.6 %** | 18.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **20.90 €** | 14.7 % | **8.9 %** | 21.00 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **40.90 €** | 14.7 % | **11.7 %** | 41.00 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 22.00 € | **20.90 €** | 14.2 % | **8.5 %** | 21.00 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **42.90 €** | 14.7 % | **11.9 %** | 43.00 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 65.00 € | **63.90 €** | 10.1 % | **8.2 %** | 64.00 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 4.50 € | **3.40 €** | 55.7 % | **17.6 %** | 3.50 € | stávame sa najlacnejší |
| Batéria AA MediaRange nabíjateľné USB-C Li-Ion , 1,5... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion , 1,... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.00 € | **13.90 €** | 54.2 % | **42.9 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 12.00 € | **10.90 €** | 52.2 % | **38.2 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **9.90 €** | 52.9 % | **37.6 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **9.90 €** | 52.9 % | **37.6 %** | 10.00 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.50 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.50 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 17.00 € | **15.90 €** | 13.4 % | **6.0 %** | 16.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 9.10 € | **8.00 €** | 55.1 % | **36.4 %** | 8.10 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 85.00 € | **83.90 €** | 14.9 % | **13.4 %** | 84.00 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **70.90 €** | 14.7 % | **12.9 %** | 71.00 € | stávame sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **35.90 €** | 9.1 % | **6.1 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-BK | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-PI | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 15.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **20.90 €** | 11.3 % | **6.2 %** | 19.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G4002300 Odstraňovač žmolků | 22.90 € | **21.90 €** | 10.6 % | **5.8 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skúšačka UNI-T UT18D vadaska | 42.90 € | **41.90 €** | 7.5 % | **5.0 %** | 41.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **16.90 €** | 11.3 % | **5.1 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.50 € | **19.50 €** | 12.2 % | **6.7 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 11.8 % | **6.6 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.50 € | **15.50 €** | 13.2 % | **6.3 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.1 % | **5.3 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.50 € | **11.50 €** | 14.3 % | **5.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **24.50 €** | 11.5 % | **7.1 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 10.9 % | **6.7 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 22.00 € | **21.00 €** | 10.1 % | **5.1 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 7.90 € | **6.90 €** | 55.5 % | **35.8 %** | 6.99 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **24.90 €** | 22.6 % | **17.8 %** | 25.00 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **24.90 €** | 22.6 % | **17.8 %** | 25.00 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.00 €** | 53.4 % | **38.1 %** | 9.10 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.90 €** | 10.0 % | **8.9 %** | 102.00 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **16.90 €** | 15.2 % | **8.8 %** | 17.00 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.50 €** | 50.3 % | **36.0 %** | 9.60 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.90 € | **44.90 €** | 10.6 % | **8.2 %** | 45.00 € | stávame sa najlacnejší |
| Tefal RK812110 | 109.90 € | **108.90 €** | 10.2 % | **9.2 %** | 109.00 € | stávame sa najlacnejší |
| TEFAL XA 800512 | 17.90 € | **16.90 €** | 12.5 % | **6.2 %** | 17.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.90 € | **91.90 €** | 10.1 % | **9.0 %** | 92.00 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.90 € | **18.90 €** | 42.5 % | **35.4 %** | 19.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.90 € | **35.90 €** | 17.5 % | **14.3 %** | 36.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.90 € | **35.90 €** | 17.8 % | **14.6 %** | 36.00 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 721.50 € | **720.50 €** | 11.2 % | **11.0 %** | 720.88 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **11.50 €** | 16.7 % | **7.3 %** | 11.89 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 29.50 € | **28.50 €** | 37.8 % | **33.2 %** | 28.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.50 €** | 47.4 % | **37.2 %** | 13.90 € | stávame sa najlacnejší |
| Leifheit Thermo Reflect L/Universal | 14.50 € | **13.50 €** | 16.8 % | **8.8 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **33.50 €** | 47.5 % | **43.3 %** | 33.90 € | stávame sa najlacnejší |
| Maxxo vodní filtry 3+1 | 12.50 € | **11.50 €** | 16.8 % | **7.5 %** | 11.90 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 953.50 € | **952.50 €** | 15.0 % | **14.9 %** | 952.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **31.50 €** | 59.9 % | **55.0 %** | 31.90 € | stávame sa najlacnejší |
| Huanuo HNCM9 13-32" monitor mount | 26.50 € | **25.50 €** | 16.0 % | **11.6 %** | 25.90 € | stávame sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.50 € | **26.50 €** | 34.6 % | **29.7 %** | 26.90 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.50 € | **66.50 €** | 8.1 % | **6.5 %** | 66.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.00 €** | 47.2 % | **41.8 %** | 26.50 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 31.00 € | **30.00 €** | 10.0 % | **6.5 %** | 30.50 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.00 €** | 41.0 % | **36.6 %** | 31.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 327.00 € | **326.00 €** | 11.2 % | **10.9 %** | 326.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 11.00 € | **10.00 €** | 48.1 % | **34.6 %** | 10.50 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.00 €** | 46.4 % | **39.5 %** | 20.50 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 27.00 € | **26.00 €** | 19.2 % | **14.8 %** | 26.50 € | stávame sa najlacnejší |
| Domo DO 264 AP | 59.00 € | **58.00 €** | 10.1 % | **8.2 %** | 58.50 € | stávame sa najlacnejší |
| Huanuo HNDS8 double monitor mount 13-32" | 52.00 € | **51.00 €** | 14.7 % | **12.5 %** | 51.50 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.00 €** | 13.9 % | **8.9 %** | 22.50 € | stávame sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 30.00 € | **29.00 €** | 14.5 % | **10.6 %** | 29.50 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.00 €** | 14.0 % | **10.0 %** | 27.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 11.9 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.90 € | **15.90 €** | 12.4 % | **5.8 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **15.90 €** | 11.8 % | **5.2 %** | 16.00 € | stávame sa najlacnejší |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 85.90 € | **85.00 €** | 6.2 % | **5.1 %** | 85.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 201.90 € | **201.00 €** | 12.8 % | **12.3 %** | 201.39 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.00 €** | 9.4 % | **8.2 %** | 84.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **78.00 €** | 15.3 % | **14.0 %** | 78.50 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 74.90 € | **74.00 €** | 7.9 % | **6.6 %** | 74.50 € | stávame sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.10 €** | 48.6 % | **35.3 %** | 9.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 9.30 € | **8.40 €** | 48.5 % | **34.2 %** | 8.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **12.00 €** | 47.7 % | **37.4 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.90 € | **11.00 €** | 16.0 % | **7.2 %** | 11.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.90 € | **12.00 €** | 27.4 % | **18.5 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 14.50 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.00 €** | 46.2 % | **34.2 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.00 €** | 45.7 % | **34.7 %** | 11.50 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.00 €** | 39.9 % | **30.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.90 € | **13.00 €** | 27.8 % | **19.6 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.00 €** | 47.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.00 €** | 40.4 % | **30.6 %** | 12.50 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.00 €** | 31.1 % | **22.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.00 €** | 26.2 % | **15.8 %** | 10.50 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.00 €** | 19.3 % | **9.4 %** | 10.50 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.90 € | **11.00 €** | 18.3 % | **9.3 %** | 11.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.60 € | **7.70 €** | 47.5 % | **32.1 %** | 7.80 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.40 €** | 55.0 % | **28.7 %** | 4.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **19.00 €** | 10.3 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Žehlící deska COMPACT Table | 16.90 € | **16.00 €** | 11.4 % | **5.5 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.90 € | **22.00 €** | 13.7 % | **9.3 %** | 22.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.90 € | **22.00 €** | 13.7 % | **9.3 %** | 22.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.90 € | **18.00 €** | 15.0 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **18.00 €** | 15.0 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 39.90 € | **39.00 €** | 21.0 % | **18.3 %** | 39.39 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR-T pre CarPlay/Andr... | 25.90 € | **25.00 €** | 15.2 % | **11.2 %** | 25.50 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.90 € | **32.00 €** | 13.8 % | **10.7 %** | 32.50 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.90 € | **28.00 €** | 39.1 % | **34.8 %** | 28.50 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.00 €** | 15.0 % | **9.5 %** | 18.50 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 21.90 € | **21.00 €** | 50.3 % | **44.1 %** | 21.50 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.00 €** | 25.4 % | **21.3 %** | 27.50 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.00 €** | 46.6 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.00 €** | 35.5 % | **28.3 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.00 €** | 38.6 % | **35.4 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **25.00 €** | 39.1 % | **34.2 %** | 25.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.00 €** | 38.4 % | **33.2 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.00 €** | 38.2 % | **30.9 %** | 16.50 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.90 € | **18.00 €** | 17.6 % | **12.0 %** | 18.50 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.90 € | **18.00 €** | 20.0 % | **14.3 %** | 18.50 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 28.90 € | **28.00 €** | 12.4 % | **8.9 %** | 28.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.90 € | **26.00 €** | 38.7 % | **34.0 %** | 26.50 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.00 €** | 11.5 % | **5.6 %** | 16.50 € | stávame sa najlacnejší |
| Girmi BL0301 | 28.90 € | **28.00 €** | 10.4 % | **7.0 %** | 28.50 € | stávame sa najlacnejší |
| Gorenje MVC72HGA | 29.90 € | **29.00 €** | 10.1 % | **6.8 %** | 29.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 20.90 € | **20.00 €** | 33.6 % | **27.8 %** | 20.50 € | stávame sa najlacnejší |
| Filtr CPL Freewell do DJI Osmo Action 5 Pro | 17.90 € | **17.00 €** | 15.6 % | **9.8 %** | 17.50 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.50 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.00 €** | 15.4 % | **9.6 %** | 17.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.00 €** | 20.3 % | **16.7 %** | 29.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **33.00 €** | 20.0 % | **16.9 %** | 33.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.00 €** | 39.6 % | **33.3 %** | 19.50 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 471.90 € | **471.00 €** | 7.1 % | **6.9 %** | 471.50 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **6.70 €** | 54.8 % | **38.3 %** | 6.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.90 € | **2.10 €** | 48.3 % | **7.4 %** | 2.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.20 € | **5.40 €** | 49.1 % | **29.9 %** | 5.50 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.30 €** | 55.3 % | **30.9 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.30 €** | 55.2 % | **37.7 %** | 6.40 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 4.40 € | **3.70 €** | 52.9 % | **28.6 %** | 3.80 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 9.60 € | **8.90 €** | 54.2 % | **43.0 %** | 9.00 € | stávame sa najlacnejší |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 22.50 € | **21.90 €** | 8.8 % | **5.9 %** | 9.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM58 ruční všesměrový | 32.50 € | **31.90 €** | 8.2 % | **6.2 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set PowerClean M+náhr. zdarma | 20.50 € | **19.90 €** | 10.3 % | **7.1 %** | 17.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.50 € | **36.90 €** | 15.4 % | **13.6 %** | 37.00 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **19.90 €** | 50.3 % | **45.9 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 41.50 € | **40.90 €** | 20.8 % | **19.1 %** | 41.00 € | stávame sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **19.90 €** | 48.5 % | **44.2 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.50 € | **46.90 €** | 37.3 % | **35.6 %** | 47.00 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.50 € | **23.90 €** | 36.1 % | **32.7 %** | 24.00 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.50 € | **24.90 €** | 31.8 % | **28.7 %** | 25.00 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **25.90 €** | 32.5 % | **29.5 %** | 26.00 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **35.90 €** | 10.0 % | **8.2 %** | 36.00 € | stávame sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **50.90 €** | 10.2 % | **8.9 %** | 51.00 € | stávame sa najlacnejší |
| Elektrický otočný stôl Puluz 30 cm USB (biely) | 31.50 € | **30.90 €** | 14.9 % | **12.8 %** | 31.00 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **17.90 €** | 15.7 % | **11.9 %** | 18.00 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 31.50 € | **30.90 €** | 18.5 % | **16.3 %** | 31.00 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **23.90 €** | 14.4 % | **11.6 %** | 24.00 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **16.90 €** | 11.2 % | **7.4 %** | 17.00 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 29.50 € | **28.90 €** | 7.4 % | **5.2 %** | 29.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **43.90 €** | 7.0 % | **5.5 %** | 44.00 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **23.90 €** | 15.2 % | **12.4 %** | 24.00 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.50 € | **61.90 €** | 6.3 % | **5.3 %** | 62.00 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **16.90 €** | 14.7 % | **10.8 %** | 17.00 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **17.90 €** | 10.0 % | **6.5 %** | 18.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **21.90 €** | 9.3 % | **6.4 %** | 22.00 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **18.90 €** | 14.1 % | **10.5 %** | 19.00 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.10 €** | 55.2 % | **41.3 %** | 6.20 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **6.80 €** | 55.1 % | **42.5 %** | 6.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **7.10 €** | 54.6 % | **42.5 %** | 7.20 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.30 €** | 47.1 % | **32.2 %** | 5.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.10 €** | 49.3 % | **30.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.90 € | **5.30 €** | 48.0 % | **33.0 %** | 5.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 6.20 € | **5.60 €** | 47.4 % | **33.1 %** | 5.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **4.80 €** | 47.3 % | **31.0 %** | 4.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.60 €** | 48.7 % | **34.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.80 €** | 55.5 % | **34.3 %** | 3.90 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.10 € | **1.50 €** | 51.1 % | **7.9 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.70 € | **2.10 €** | 52.4 % | **18.6 %** | 2.20 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.20 € | **2.60 €** | 54.9 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.90 € | **3.30 €** | 53.2 % | **29.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.10 €** | 55.1 % | **29.9 %** | 3.20 € | stávame sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 10.7 % | **6.7 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.2 % | **6.6 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 12.8 % | **7.4 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.90 €** | 12.5 % | **7.8 %** | 12.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 10.9 % | **6.3 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Power Bank 10000mAh 22.5W Lite GL | 12.50 € | **11.90 €** | 11.3 % | **6.0 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **13.90 €** | 10.1 % | **5.5 %** | 13.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **12.90 €** | 47.5 % | **41.0 %** | 13.00 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Classic Style | 12.50 € | **11.90 €** | 17.8 % | **12.1 %** | 12.00 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.50 € | **11.90 €** | 17.8 % | **12.1 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **12.90 €** | 14.0 % | **8.9 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **14.90 €** | 45.9 % | **40.2 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **10.90 €** | 49.6 % | **41.8 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.90 €** | 56.1 % | **49.2 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **14.90 €** | 46.0 % | **40.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.50 € | **13.90 €** | 33.7 % | **28.1 %** | 14.00 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **7.90 €** | 53.9 % | **43.0 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **14.90 €** | 47.4 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **15.90 €** | 12.4 % | **8.4 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **11.90 €** | 46.9 % | **39.8 %** | 12.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **12.90 €** | 36.3 % | **30.3 %** | 13.00 € | stávame sa najlacnejší |
| Sonická zubná kefka s aplikáciou pre deti, sada konc... | 15.50 € | **14.90 €** | 17.8 % | **13.2 %** | 15.00 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **12.90 €** | 33.2 % | **27.3 %** | 13.00 € | stávame sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.50 € | **15.90 €** | 10.5 % | **6.5 %** | 16.00 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 16.50 € | **15.90 €** | 11.1 % | **7.1 %** | 16.00 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.20 €** | 45.5 % | **32.6 %** | 6.30 € | stávame sa najlacnejší |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.50 € | **9.90 €** | 14.0 % | **7.5 %** | 10.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.80 € | **5.20 €** | 48.8 % | **33.4 %** | 5.30 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **15.90 €** | 29.1 % | **24.4 %** | 16.00 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **10.90 €** | 16.6 % | **10.5 %** | 11.00 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Blue 2l | 12.50 € | **11.90 €** | 10.8 % | **5.5 %** | 12.00 € | stávame sa najlacnejší |
| DOMO DO716BL | 84.50 € | **83.90 €** | 9.6 % | **8.8 %** | 84.00 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.80 €** | 55.5 % | **46.1 %** | 7.90 € | stávame sa najlacnejší |
| Hasicí přístroj práškový 2 kg ABC | 27.50 € | **27.00 €** | 7.1 % | **5.1 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 14.00 € | **13.50 €** | 10.1 % | **6.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-M ( 36 - 40 ) | 12.50 € | **12.00 €** | 9.4 % | **5.0 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 35.00 € | **34.50 €** | 7.9 % | **6.4 %** | 34.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.00 € | **17.50 €** | 10.0 % | **7.0 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.50 €** | 9.3 % | **7.1 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.30 €** | 38.4 % | **30.5 %** | 8.40 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 4.80 € | **4.30 €** | 54.9 % | **38.7 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.70 €** | 53.7 % | **41.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.70 €** | 53.7 % | **41.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.00 €** | 56.3 % | **25.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.40 €** | 40.9 % | **22.9 %** | 3.50 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **4.60 €** | 54.1 % | **39.0 %** | 4.70 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.10 €** | 49.0 % | **32.8 %** | 4.20 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.60 € | **9.10 €** | 37.2 % | **30.0 %** | 9.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.30 €** | 48.9 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.60 € | **4.10 €** | 48.4 % | **32.3 %** | 4.20 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **5.90 €** | 53.5 % | **41.5 %** | 6.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.00 €** | 53.0 % | **31.1 %** | 3.10 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 111.50 € | **111.00 €** | 15.3 % | **14.8 %** | 111.38 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 111.50 € | **111.00 €** | 15.3 % | **14.8 %** | 111.38 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 31.50 € | **31.00 €** | 6.8 % | **5.1 %** | 31.39 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.50 €** | 38.5 % | **33.2 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.00 € | **14.50 €** | 35.4 % | **30.8 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.50 €** | 16.5 % | **13.6 %** | 19.90 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **11.50 €** | 47.4 % | **41.2 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **10.50 €** | 32.3 % | **26.3 %** | 10.90 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.50 €** | 32.0 % | **30.3 %** | 37.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.50 €** | 54.5 % | **52.9 %** | 47.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.50 €** | 25.3 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.50 €** | 31.9 % | **25.9 %** | 10.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 124.00 € | **123.50 €** | 6.3 % | **5.9 %** | 123.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 159.00 € | **158.50 €** | 7.9 % | **7.5 %** | 158.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 187.00 € | **186.50 €** | 7.9 % | **7.7 %** | 186.90 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 29.00 € | **28.50 €** | 18.7 % | **16.6 %** | 28.90 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 229.00 € | **228.50 €** | 8.0 % | **7.8 %** | 228.90 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 122.50 € | **122.00 €** | 13.8 % | **13.4 %** | 122.40 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 34.00 € | **33.50 €** | 14.9 % | **13.2 %** | 33.90 € | stávame sa najlacnejší |
| JBL Tune 670NC white | 64.00 € | **63.50 €** | 10.7 % | **9.8 %** | 63.90 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.50 €** | 8.2 % | **6.8 %** | 40.90 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.00 € | **47.50 €** | 14.8 % | **13.6 %** | 47.90 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 42.00 € | **41.50 €** | 7.2 % | **5.9 %** | 41.90 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 151.50 € | **151.00 €** | 12.7 % | **12.3 %** | 151.41 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.90 € | **64.50 €** | 6.1 % | **5.5 %** | 64.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 8.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.50 €** | 11.0 % | **8.2 %** | 13.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 13.90 € | **13.50 €** | 9.9 % | **6.8 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.2 % | **9.0 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.1 % | **7.3 %** | 15.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.5 % | **7.3 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.50 €** | 12.8 % | **9.3 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.50 €** | 11.6 % | **8.7 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 11.9 % | **7.8 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.3 % | **8.4 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.90 € | **14.50 €** | 9.4 % | **6.5 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 15.90 € | **15.50 €** | 9.3 % | **6.5 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.60 €** | 38.3 % | **32.7 %** | 9.70 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.70 € | **4.30 €** | 52.8 % | **39.8 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.50 € | **4.10 €** | 53.7 % | **40.1 %** | 4.20 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 9.10 € | **8.70 €** | 42.3 % | **36.0 %** | 8.80 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.80 €** | 55.9 % | **41.1 %** | 3.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.20 €** | 58.6 % | **19.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.70 €** | 55.2 % | **25.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.70 €** | 47.2 % | **19.1 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.10 €** | 55.5 % | **37.7 %** | 3.20 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.60 €** | 56.3 % | **25.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.60 € | **2.20 €** | 48.9 % | **26.0 %** | 2.30 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.40 €** | 46.9 % | **25.9 %** | 2.50 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.30 €** | 44.0 % | **10.1 %** | 1.40 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.40 €** | 45.9 % | **25.1 %** | 2.50 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.90 € | **2.50 €** | 50.2 % | **29.5 %** | 2.60 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.40 € | **3.00 €** | 46.3 % | **29.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.30 € | **3.90 €** | 46.9 % | **33.2 %** | 4.00 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.40 €** | 48.8 % | **27.5 %** | 2.50 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.70 €** | 40.1 % | **29.1 %** | 4.80 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT 51016 | 48.90 € | **48.50 €** | 6.6 % | **5.8 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 7.7 % | **6.5 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0022-S | 20.90 € | **20.50 €** | 8.3 % | **6.2 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.90 € | **27.50 €** | 8.1 % | **6.6 %** | 27.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 35.90 € | **35.50 €** | 7.1 % | **6.0 %** | 35.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 23840-70 | 18.90 € | **18.50 €** | 12.3 % | **9.9 %** | 18.80 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.90 € | **5.60 €** | 31.1 % | **24.4 %** | 5.69 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **8.00 €** | 47.7 % | **42.3 %** | 8.10 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.20 € | **2.90 €** | 53.9 % | **39.5 %** | 3.00 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.80 €** | 52.7 % | **38.0 %** | 2.90 € | stávame sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.20 €** | 56.3 % | **25.1 %** | 1.30 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.50 € | **1.20 €** | 50.6 % | **20.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.80 €** | 49.8 % | **28.4 %** | 1.90 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.30 €** | 44.5 % | **17.4 %** | 1.40 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.70 €** | 46.0 % | **31.4 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.10 €** | 52.4 % | **33.4 %** | 2.20 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.70 €** | 41.8 % | **27.6 %** | 2.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.60 €** | 47.1 % | **23.9 %** | 1.70 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.80 € | **4.50 €** | 44.5 % | **35.5 %** | 4.60 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.80 €** | 46.2 % | **35.5 %** | 3.90 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.70 €** | 41.0 % | **26.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.30 €** | 54.6 % | **49.7 %** | 9.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.70 €** | 11.5 % | **9.0 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.20 €** | 43.8 % | **40.4 %** | 8.30 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.90 € | **5.70 €** | 39.0 % | **34.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.80 €** | 38.4 % | **34.9 %** | 7.90 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.70 € | **4.50 €** | 41.0 % | **35.0 %** | 4.60 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.30 € | **6.10 €** | 16.9 % | **13.2 %** | 6.20 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.20 € | **4.00 €** | 23.3 % | **17.4 %** | 4.10 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.20 € | **5.00 €** | 13.0 % | **8.7 %** | 5.10 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 6.70 € | **6.50 €** | 30.6 % | **26.7 %** | 6.60 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.50 €** | 37.2 % | **27.0 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 28.3 % | **24.3 %** | 6.40 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 8.7 % | **5.4 %** | 6.40 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.80 €** | 30.8 % | **27.1 %** | 6.90 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.80 €** | 26.4 % | **22.2 %** | 5.90 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.80 €** | 22.7 % | **16.6 %** | 3.90 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.80 €** | 20.8 % | **17.4 %** | 6.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.80 €** | 36.9 % | **33.5 %** | 7.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.40 €** | 15.7 % | **9.3 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.10 €** | 21.0 % | **16.5 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.10 €** | 37.2 % | **32.0 %** | 5.20 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.30 €** | 34.2 % | **26.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.70 € | **3.50 €** | 45.3 % | **37.5 %** | 3.60 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.50 €** | 44.2 % | **40.5 %** | 7.60 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.10 € | **0.90 €** | 35.5 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.80 €** | 52.0 % | **36.8 %** | 1.90 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.90 € | **1.70 €** | 51.4 % | **35.5 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.00 €** | 39.4 % | **16.1 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.10 €** | 40.9 % | **19.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.10 €** | 40.9 % | **19.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.00 €** | 43.5 % | **19.6 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.80 € | **1.60 €** | 29.5 % | **15.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.70 €** | 45.7 % | **30.4 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.80 €** | 23.2 % | **10.9 %** | 1.90 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.30 € | **2.10 €** | 50.8 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.30 € | **2.10 €** | 50.8 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 2.90 € | **2.70 €** | 22.8 % | **14.3 %** | 2.80 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.60 €** | 35.5 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.70 €** | 23.4 % | **14.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.10 €** | 36.2 % | **27.9 %** | 3.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.70 €** | 17.4 % | **11.4 %** | 3.80 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.10 € | **8.90 €** | 18.4 % | **15.8 %** | 9.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.10 € | **7.90 €** | 11.1 % | **8.3 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.40 €** | 32.5 % | **28.5 %** | 6.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.40 €** | 32.5 % | **28.5 %** | 6.50 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.80 €** | 25.1 % | **22.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.80 €** | 45.7 % | **42.8 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.40 €** | 24.8 % | **21.5 %** | 7.50 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.00 € | **17.90 €** | 5.7 % | **5.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 6.9 % | **5.4 %** | 7.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |

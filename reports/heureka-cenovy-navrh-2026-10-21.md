# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-21

Vstup: `premiumstore-sk_2026-10-21_09-18.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6250**
- Návrh **zvýšiť** cenu: **142** produktov
- Návrh **znížiť** cenu: **698** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5410** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **59**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **343**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (142)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Prenosná nabíjačka Besen BN70-BC-22KW-APP | 293.50 € | **351.00 €** | 15.0 % | **37.6 %** | 351.29 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná nabíjačka Besen BN70-BC-11KW-APP | 265.90 € | **321.50 €** | 15.0 % | **39.1 %** | 321.75 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 126 | 466.00 € | **519.50 €** | 20.0 % | **33.8 %** | 519.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP800IIIV | 337.50 € | **387.00 €** | 5.0 % | **20.4 %** | 387.46 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 742.50 € | **784.00 €** | 15.0 % | **21.4 %** | 784.04 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 120" projection screen. | 34.00 € | **64.00 €** | 14.2 % | **115.0 %** | 64.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha D132 30044 24H Speed | 322.50 € | **348.50 €** | 14.9 % | **24.1 %** | 348.64 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 396.90 € | **416.90 €** | 42.9 % | **50.1 %** | 416.97 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V100 TTL pre Nikon | 325.50 € | **340.00 €** | 5.1 % | **9.8 %** | 340.09 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Kettle K3 Polar white | 12.50 € | **25.50 €** | 12.3 % | **129.1 %** | 25.65 € | cena podľa najlacnejšieho iného predajcu |
| Viaczónový regulátor zavlažovania RainPoint | 47.50 € | **59.50 €** | 14.9 % | **43.9 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Beko PSKManGRAY | 55.90 € | **67.00 €** | 10.6 % | **32.6 %** | 67.21 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 26.90 € | **37.50 €** | 15.5 % | **61.1 %** | 37.61 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 15.90 € | **26.50 €** | 10.2 % | **83.7 %** | 26.61 € | cena podľa najlacnejšieho iného predajcu |
| KMP H125 (CZ101AE) | 11.90 € | **22.50 €** | 12.9 % | **113.5 %** | 22.73 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 14.50 € | **25.00 €** | 12.8 % | **94.5 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 107.50 € | **117.00 €** | 11.9 % | **21.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Tritanová láhev na pití 1 l černá | 21.50 € | **30.90 €** | 10.1 % | **58.3 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 36.50 € | **45.00 €** | 11.1 % | **36.9 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 125.50 € | **134.00 €** | 16.2 % | **24.1 %** | 134.33 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 33.00 € | **41.50 €** | 30.0 % | **63.5 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 45.50 € | **54.00 €** | 11.1 % | **31.9 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXKE2201E | 29.50 € | **37.90 €** | 20.0 % | **54.2 %** | 37.96 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-B -6072 WiFi Smart Digital Lock Black | 94.90 € | **102.50 €** | 15.1 % | **24.3 %** | 102.71 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 207.50 € | **215.00 €** | 15.1 % | **19.3 %** | 215.42 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 210.50 € | **218.00 €** | 14.9 % | **19.0 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W9 | 155.00 € | **162.00 €** | 16.4 % | **21.6 %** | 162.25 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D71 | 259.00 € | **265.50 €** | 15.0 % | **17.9 %** | 265.59 € | cena podľa najlacnejšieho iného predajcu |
| BWT filtrační stanice Aqualizer | 55.90 € | **61.90 €** | 10.1 % | **21.9 %** | 61.94 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, grey ASR002 | 67.00 € | **73.00 €** | 14.6 % | **24.9 %** | 73.06 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, oran. ASR001 | 67.00 € | **73.00 €** | 14.6 % | **24.9 %** | 73.06 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z18S 18" 100 Hz prenosný herný monitor | 119.00 € | **125.00 €** | 14.8 % | **20.6 %** | 125.08 € | cena podľa najlacnejšieho iného predajcu |
| Fitness sada na pilates REBEL ACTIVE RBA-3069-PK mul... | 41.90 € | **47.50 €** | 10.5 % | **25.3 %** | 47.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-90 90W Power De... | 23.00 € | **27.50 €** | 14.0 % | **36.3 %** | 27.54 € | cena podľa najlacnejšieho iného predajcu |
| Bramka GL.iNet GL-MT5000 | 152.50 € | **157.00 €** | 15.0 % | **18.4 %** | 157.08 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 84.50 € | **89.00 €** | 18983.1 % | **19999.4 %** | 89.29 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 148.50 € | **152.90 €** | 5.7 % | **8.8 %** | 153.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 106.00 € | **110.00 €** | 7.2 % | **11.3 %** | 110.04 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 42.00 € | **46.00 €** | 7.5 % | **17.7 %** | 46.17 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S100 na detekciu úniku | 97.50 € | **101.00 €** | 15.2 % | **19.3 %** | 101.21 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 61.00 € | **64.50 €** | 15.0 % | **21.6 %** | 64.75 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Edifier W820NB Plus V25 (krémové) | 65.50 € | **68.90 €** | 15.0 % | **20.9 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Edifier W820NB Plus V25 (sivé) | 65.50 € | **68.90 €** | 15.0 % | **20.9 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.00 € | **78.90 €** | 18.6 % | **23.2 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10100 Smart Ceramic | 49.90 € | **52.50 €** | 14.8 % | **20.7 %** | 52.88 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27371-56 | 31.00 € | **33.50 €** | 7.9 % | **16.6 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| Softbox Neewer 65 cm | 87.00 € | **89.50 €** | 34.5 % | **38.4 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Water Fountain for pets 3.2l Rojeco | 28.90 € | **31.00 €** | 15.6 % | **24.0 %** | 31.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 22.90 € | **24.90 €** | 5.4 % | **14.6 %** | 24.98 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10000 Top Ceramic | 43.00 € | **45.00 €** | 14.8 % | **20.2 %** | 45.13 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 10.50 € | **12.50 €** | 9.2 % | **30.0 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24010-56 | 38.50 € | **40.50 €** | 5.4 % | **10.9 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Budík Blitzwolf BW-FW10 s nabíjačkou 2xUSB-A, 4xUSB-... | 62.50 € | **64.50 €** | 15.4 % | **19.1 %** | 64.79 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 53.50 € | **55.50 €** | 6.3 % | **10.3 %** | 55.87 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 53.50 € | **55.50 €** | 6.3 % | **10.2 %** | 55.87 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 53.50 € | **55.50 €** | 12.5 % | **16.7 %** | 55.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 31.50 € | **33.50 €** | 36.4 % | **45.1 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 13.50 € | **15.50 €** | 11.3 % | **27.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 19.90 € | **21.50 €** | 5.7 % | **14.2 %** | 21.64 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 18.50 € | **20.00 €** | 6.1 % | **14.8 %** | 20.05 € | cena podľa najlacnejšieho iného predajcu |
| Sada ND filtrov pre DJI Action 6 (ND8/16/32/64) | 24.50 € | **26.00 €** | 14.5 % | **21.6 %** | 26.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 23.50 € | **25.00 €** | 7.3 % | **14.1 %** | 25.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 18.50 € | **20.00 €** | 5.3 % | **13.9 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 330.50 € | **332.00 €** | 18.6 % | **19.1 %** | 332.24 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Twister T1 Set | 12.50 € | **14.00 €** | 12.3 % | **25.8 %** | 14.35 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 77.00 € | **78.50 €** | 16.5 % | **18.8 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **17.50 €** | 15.3 % | **26.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Drosselmeyer TIBP01G | 34.90 € | **36.00 €** | 10.6 % | **14.1 %** | 36.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 18.90 € | **20.00 €** | 6.4 % | **12.6 %** | 20.43 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro Xiaomi R Pad 2 FIXTOT-1199 | 14.90 € | **16.00 €** | 27.0 % | **36.4 %** | 16.30 € | cena podľa najlacnejšieho iného predajcu |
| Boxovací hruška DBX BUSHIDO ARS-1152M | 26.50 € | **27.50 €** | 2.9 % | **6.8 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 13.90 € | **14.90 €** | 6.6 % | **14.3 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 18.00 € | **19.00 €** | 36.8 % | **44.4 %** | 19.09 € | cena podľa najlacnejšieho iného predajcu |
| WESTMARK 2094 2611 Nůžky na salát, 8 ks | 43.50 € | **44.50 €** | 10.4 % | **12.9 %** | 44.71 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto MercedesBenz Actros + AM | 43.50 € | **44.50 €** | 8.6 % | **11.0 %** | 44.73 € | cena podľa najlacnejšieho iného predajcu |
| Súprava plynového pedála a spojky MOZA SRP Lite2 Per... | 40.50 € | **41.50 €** | 14.8 % | **17.6 %** | 41.88 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 203.50 € | **204.50 €** | 13.8 % | **14.3 %** | 204.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iP17PM FIXGFADA-1603-BK | 10.00 € | **11.00 €** | 13.1 % | **24.4 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64251 Ferrari SF-90 Stradale | 16.00 € | **17.00 €** | 14.3 % | **21.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 275.00 € | **275.90 €** | 29.5 % | **29.9 %** | 275.99 € | cena podľa najlacnejšieho iného predajcu |
| Chrániče kolen DBX BUSHIDO DBX-0217A | 18.90 € | **19.50 €** | 3.8 % | **7.0 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 26.90 € | **27.50 €** | 32.2 % | **35.2 %** | 27.55 € | cena podľa najlacnejšieho iného predajcu |
| Charger MOKiN PD140W 2C1A GaN 2xUSB-C 1xUSB-A (black) | 27.90 € | **28.50 €** | 15.4 % | **17.9 %** | 28.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 13.90 € | **14.50 €** | 7.7 % | **12.4 %** | 14.85 € | cena podľa najlacnejšieho iného predajcu |
| Chrániče loktů DBX BUSHIDO DBX-EG-11 L | 15.00 € | **15.50 €** | 2.4 % | **5.8 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.00 € | **19.50 €** | 31.0 % | **34.5 %** | 19.52 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 11.50 € | **12.00 €** | 19.6 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG S24 FE FIXOP3-1391-BK | 11.50 € | **12.00 €** | 19.6 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife 1/4'' rýchloupínací držiak s mačacím uchom... | 12.50 € | **13.00 €** | 15.7 % | **20.4 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 524.00 € | **524.50 €** | 7.3 % | **7.4 %** | 524.55 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdr SG A16 4G/5G FIXOP3-1500-BK | 11.50 € | **12.00 €** | 19.3 % | **24.4 %** | 12.05 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 17.00 € | **17.50 €** | 18.1 % | **21.6 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 41.00 € | **41.50 €** | 7.4 % | **8.7 %** | 41.59 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 50.50 € | **51.00 €** | 12.9 % | **14.0 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 50.50 € | **51.00 €** | 35.9 % | **37.3 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSH2003E | 27.00 € | **27.50 €** | 18.0 % | **20.1 %** | 27.59 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Safe'Tea KO261130 | 27.50 € | **28.00 €** | 14.5 % | **16.6 %** | 28.11 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 16.00 € | **16.50 €** | 14.3 % | **17.9 %** | 16.64 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64034 Mario Kart - Luigi | 16.00 € | **16.50 €** | 14.3 % | **17.9 %** | 16.77 € | cena podľa najlacnejšieho iného predajcu |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.50 € | **15.00 €** | 14.8 % | **18.7 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 11.50 € | **12.00 €** | 30.0 % | **35.7 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 11.50 € | **12.00 €** | 30.0 % | **35.7 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 11.50 € | **12.00 €** | 30.0 % | **35.7 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 167.50 € | **168.00 €** | 32.9 % | **33.3 %** | 168.29 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 273.00 € | **273.50 €** | 31.7 % | **32.0 %** | 273.79 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 273.00 € | **273.50 €** | 28.6 % | **28.8 %** | 273.79 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.33 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17PM FIXOP3-1603-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17P FIXOP3-1602-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo V50 L FIXOP3-1580-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300P FIXOP3-1609-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300 FIXOP3-1642-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor 400 FIXOP3-1552-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro 145G/14T5G FIXOP3-1567-BK | 12.50 € | **13.00 €** | 17.1 % | **21.8 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-RD | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BRW | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BL | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-RD | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BRW | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26 FIXOP3-1704-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SGA17 4G/5G FIXOP3-1700-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SD S26 FE FIXOP3-1707-BK | 12.50 € | **13.00 €** | 17.1 % | **21.8 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A17 FIXOP3-1700-BL | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14 P4G FIXOP3-1542-BK | 12.50 € | **13.00 €** | 30.1 % | **35.3 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro POCO F7 FIXOP3-1533-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15P+ 5G FIXOP3-1647-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus XiaRed 17 4G, FIXOP3-1728-BK | 12.50 € | **13.00 €** | 17.1 % | **21.8 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14P+5G FIXOP3-1433-BK | 12.50 € | **13.00 €** | 30.1 % | **35.3 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15 4G FIXOP3-1643-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN15Pro 5G FIXOP3-1646-BK | 12.50 € | **13.00 €** | 30.0 % | **35.2 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPhon 15 FIXMMY-1200-BK | 14.50 € | **15.00 €** | 18.0 % | **22.1 %** | 15.36 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPho 16P FIXMMY-1402-BK | 14.50 € | **15.00 €** | 31.1 % | **35.7 %** | 15.36 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.50 € | **78.90 €** | 9.4 % | **10.0 %** | 78.97 € | cena podľa najlacnejšieho iného predajcu |
| Hliníková upínací svorka pre modely RS 4 Mini / RS 4... | 12.50 € | **12.90 €** | 16.5 % | **20.3 %** | 12.96 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.50 € | **28.90 €** | 9.5 % | **11.0 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 581.50 € | **581.90 €** | 8.5 % | **8.6 %** | 581.91 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H3c 3K Venkovní IP, 5MP, 2.8mm, WiFi | 48.90 € | **49.00 €** | 5.3 % | **5.6 %** | 49.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 1.90 € | **2.00 €** | 41.7 % | **49.2 %** | 2.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.80 € | **9.90 €** | 35.5 % | **36.9 %** | 9.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná poistka s WIFI Avatto WCB16 | 14.90 € | **15.00 €** | 16.3 % | **17.0 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (698)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 638.90 € | **472.00 €** | 45.1 % | **7.2 %** | 472.19 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 418.90 € | **269.00 €** | 90.5 % | **22.3 %** | 269.25 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 418.90 € | **269.90 €** | 90.0 % | **22.4 %** | 269.92 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 418.90 € | **270.00 €** | 89.9 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, strieborná) | 416.90 € | **269.00 €** | 89.6 % | **22.3 %** | 269.25 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, zlatá) | 416.90 € | **270.00 €** | 89.0 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, čierna) | 416.90 € | **271.00 €** | 88.1 % | **22.3 %** | 271.21 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, strieborná) | 416.90 € | **275.50 €** | 89.5 % | **25.2 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec M3 Pro s procesorom i5-13500H, 16 GB ... | 856.90 € | **718.00 €** | 45.9 % | **22.2 %** | 718.08 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 11 | 408.90 € | **285.50 €** | 63.8 % | **14.3 %** | 285.81 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 7 | 408.90 € | **285.50 €** | 63.8 % | **14.3 %** | 285.81 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 13 | 408.90 € | **287.00 €** | 63.8 % | **14.9 %** | 287.30 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 10 | 406.90 € | **285.50 €** | 63.0 % | **14.3 %** | 285.81 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 298.90 € | **189.50 €** | 93.4 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 298.90 € | **189.50 €** | 93.4 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 298.90 € | **189.90 €** | 93.0 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 298.90 € | **189.90 €** | 93.0 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 10, strieborná... | 296.90 € | **188.90 €** | 91.7 % | **22.0 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 10, zlatá) | 296.90 € | **188.90 €** | 91.7 % | **22.0 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 296.90 € | **189.90 €** | 91.7 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 296.90 € | **189.90 €** | 91.7 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 296.90 € | **189.90 €** | 91.7 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, zlatá) | 296.90 € | **189.90 €** | 91.7 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 375.50 € | **278.00 €** | 49.4 % | **10.6 %** | 278.16 € | cena podľa najlacnejšieho iného predajcu |
| LaserPecker 2 – základná verzia | 518.90 € | **436.00 €** | 37.5 % | **15.5 %** | 436.29 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 15 | 408.90 € | **333.50 €** | 63.8 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 9 | 408.90 € | **333.50 €** | 63.8 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 14 | 406.90 € | **333.50 €** | 63.0 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 6 | 406.90 € | **333.50 €** | 63.0 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 8 | 406.90 € | **333.50 €** | 63.0 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 328.90 € | **258.00 €** | 50.8 % | **18.3 %** | 258.04 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 368.90 € | **298.00 €** | 45.3 % | **17.4 %** | 298.20 € | cena podľa najlacnejšieho iného predajcu |
| Termokamera Mileseey TR256i USB-C Mini | 276.90 € | **206.90 €** | 45.7 % | **8.9 %** | 207.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 889.90 € | **822.00 €** | 18.5 % | **9.5 %** | 822.01 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare AR XREAL One Pro (veľkosť L) | 680.50 € | **618.50 €** | 15.6 % | **5.1 %** | 587.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 380.00 € | **326.90 €** | 28.1 % | **10.2 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FH43EAW | 404.00 € | **353.50 €** | 22.2 % | **6.9 %** | 353.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 275.50 € | **225.00 €** | 43.7 % | **17.3 %** | 225.42 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 569.90 € | **520.00 €** | 19.8 % | **9.3 %** | 520.01 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 694.50 € | **646.00 €** | 15.0 % | **6.9 %** | 646.37 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM2000 | 703.90 € | **657.50 €** | 25.6 % | **17.3 %** | 657.79 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 489.50 € | **445.50 €** | 20.0 % | **9.2 %** | 445.87 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 378.90 € | **337.00 €** | 23.3 % | **9.7 %** | 337.19 € | cena podľa najlacnejšieho iného predajcu |
| Sada na nabíjanie akčnej kamery SJCAM SJ30 (čierny) | 316.90 € | **275.00 €** | 44.0 % | **24.9 %** | 275.33 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 453.00 € | **411.50 €** | 22.8 % | **11.5 %** | 411.67 € | cena podľa najlacnejšieho iného predajcu |
| POCO F9 Ultra 12/256GB Red | 915.90 € | **874.50 €** | 10.0 % | **5.1 %** | 743.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 825.00 € | **784.00 €** | 15.0 % | **9.3 %** | 784.04 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie 10102847 FS150B | 238.90 € | **199.50 €** | 44.1 % | **20.4 %** | 199.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava ultratenkého LED kruhového osvetlenia Neewer... | 226.90 € | **189.00 €** | 48.3 % | **23.5 %** | 189.46 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRKI517E41 | 500.00 € | **464.50 €** | 19.9 % | **11.4 %** | 464.59 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 188.90 € | **153.50 €** | 44.6 % | **17.5 %** | 153.79 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 503.00 € | **468.00 €** | 20.0 % | **11.7 %** | 468.22 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 396.00 € | **361.00 €** | 19.8 % | **9.2 %** | 361.34 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 538.00 € | **503.50 €** | 16.2 % | **8.7 %** | 503.89 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Air Projektor | 236.90 € | **202.50 €** | 41.7 % | **21.1 %** | 202.83 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H27BE(3-pack) WiFi... | 244.90 € | **210.90 €** | 32.4 % | **14.1 %** | 211.00 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 530.00 € | **496.50 €** | 23.3 % | **15.5 %** | 496.69 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 308.90 € | **275.50 €** | 43.8 % | **28.2 %** | 275.73 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 695.00 € | **661.90 €** | 22.9 % | **17.0 %** | 661.93 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 707.90 € | **675.00 €** | 11.1 % | **6.0 %** | 675.20 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 272.50 € | **240.00 €** | 19.4 % | **5.1 %** | 240.27 € | cena podľa najlacnejšieho iného predajcu |
| Systém riadenia vlákien Creality CFS | 278.90 € | **246.50 €** | 22.3 % | **8.1 %** | 246.58 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 457.00 € | **425.50 €** | 14.9 % | **7.0 %** | 425.58 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD100SX | 435.50 € | **404.50 €** | 14.9 % | **6.8 %** | 404.53 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 589.50 € | **558.50 €** | 29.7 % | **22.9 %** | 558.67 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RFSA240M43WN | 348.90 € | **318.00 €** | 24.8 % | **13.7 %** | 318.23 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT705 | 324.90 € | **294.00 €** | 29.3 % | **17.0 %** | 294.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 300.50 € | **270.00 €** | 36.3 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 300.50 € | **270.00 €** | 36.3 % | **22.4 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD200SW | 427.90 € | **398.00 €** | 15.0 % | **7.0 %** | 398.18 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier S1000W 2.0 (hnedé) | 340.50 € | **311.50 €** | 14.9 % | **5.2 %** | 287.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux 600 SensiCare® EW6T226C | 405.00 € | **376.50 €** | 15.0 % | **6.9 %** | 376.84 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 492.00 € | **464.00 €** | 16.0 % | **9.4 %** | 464.20 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 266.90 € | **238.90 €** | 47.3 % | **31.9 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 258.90 € | **231.00 €** | 27.5 % | **13.8 %** | 231.04 € | cena podľa najlacnejšieho iného predajcu |
| Amazfit Cheetah 2 Ultra | 610.00 € | **582.50 €** | 10.0 % | **5.0 %** | 411.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor Ultima Nova C40 | 317.50 € | **290.50 €** | 21.3 % | **11.0 %** | 290.69 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 347.00 € | **320.00 €** | 19.4 % | **10.1 %** | 320.47 € | cena podľa najlacnejšieho iného predajcu |
| Tlačiareň na označovanie káblov NIIMBOT C1 | 196.50 € | **170.50 €** | 21.3 % | **5.3 %** | 149.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring RingConn Gen 2 (veľkosť 7, zlatá) | 300.50 € | **275.50 €** | 36.3 % | **24.9 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 SensiCare® EW6T106C | 343.50 € | **319.50 €** | 15.0 % | **6.9 %** | 319.65 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Nikon | 237.90 € | **214.00 €** | 22.0 % | **9.8 %** | 214.26 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 917.50 € | **894.00 €** | 19.5 % | **16.5 %** | 894.38 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 265.90 € | **242.50 €** | 31.4 % | **19.8 %** | 242.71 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 265.90 € | **242.50 €** | 22.1 % | **11.4 %** | 242.71 € | cena podľa najlacnejšieho iného predajcu |
| Candy CIFC6647CCBB | 198.90 € | **176.50 €** | 18.6 % | **5.2 %** | 167.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko EnergySpin B7WFU68416WBES | 438.90 € | **417.00 €** | 14.8 % | **9.1 %** | 417.23 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 325.50 € | **304.00 €** | 19.5 % | **11.6 %** | 304.34 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 305.00 € | **283.50 €** | 15.0 % | **6.9 %** | 283.90 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 303.50 € | **282.00 €** | 15.0 % | **6.8 %** | 282.44 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Nikon | 88.90 € | **67.90 €** | 46.8 % | **12.1 %** | 68.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 302.00 € | **281.00 €** | 14.9 % | **6.9 %** | 281.31 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 586.00 € | **565.00 €** | 12.0 % | **8.0 %** | 565.35 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CA077 Univerzálny držiak na fotoaparát | 106.90 € | **86.00 €** | 54.7 % | **24.5 %** | 86.17 € | cena podľa najlacnejšieho iného predajcu |
| Amazfit Cheetah 2 Pro | 459.50 € | **438.90 €** | 10.0 % | **5.1 %** | 411.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 363A | 593.50 € | **573.00 €** | 10.0 % | **6.2 %** | 573.44 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 968.50 € | **948.00 €** | 16.7 % | **14.2 %** | 948.46 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 285.50 € | **265.50 €** | 14.9 % | **6.9 %** | 265.80 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT2302 Digitálny tester zemného odporu | 136.90 € | **117.00 €** | 35.6 % | **15.8 %** | 117.38 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 773.50 € | **754.00 €** | 40.9 % | **37.3 %** | 754.49 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT262E – bezkontaktný detektor poradia fáz | 108.90 € | **89.50 €** | 41.4 % | **16.2 %** | 89.54 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 367.00 € | **348.00 €** | 26.5 % | **20.0 %** | 348.33 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – súprava „... | 108.90 € | **90.00 €** | 47.1 % | **21.5 %** | 90.04 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 391.90 € | **373.00 €** | 14.4 % | **8.8 %** | 373.30 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 288.90 € | **270.00 €** | 14.9 % | **7.4 %** | 270.35 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF85SGMXC | 178.50 € | **159.90 €** | 17.4 % | **5.1 %** | 151.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje RK14C2W4 | 266.50 € | **248.00 €** | 14.9 % | **6.9 %** | 248.14 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon P1 | 614.90 € | **596.50 €** | 10.9 % | **7.6 %** | 596.53 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 263.90 € | **245.50 €** | 15.0 % | **7.0 %** | 245.56 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFGV8080 Softbox | 79.50 € | **61.50 €** | 59.2 % | **23.2 %** | 61.88 € | cena podľa najlacnejšieho iného predajcu |
| Amazfit Balance 3 Stainless Steel | 380.50 € | **363.00 €** | 10.1 % | **5.0 %** | 360.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezkontaktný otáčkomer Uni-T UT371 | 84.00 € | **66.50 €** | 47.0 % | **16.4 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň LIENE Pearl N200 Pro 2x3" (fi... | 108.90 € | **91.50 €** | 50.0 % | **26.0 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl N200 Pro 2x3" (zl... | 108.90 € | **91.50 €** | 47.5 % | **23.9 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 92.00 € | **75.00 €** | 34.9 % | **10.0 %** | 75.26 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1919 (čierny) | 118.90 € | **102.00 €** | 41.5 % | **21.4 %** | 102.21 € | cena podľa najlacnejšieho iného predajcu |
| Filter nádoby na dym LaserPecker Air Purifier | 94.50 € | **78.00 €** | 27.2 % | **5.0 %** | 61.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Mileseey DT20 s meracou páskou s ... | 64.00 € | **47.50 €** | 46.2 % | **8.5 %** | 47.83 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 94.00 € | **77.90 €** | 42.2 % | **17.8 %** | 77.94 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS4 štartér do auta | 99.50 € | **83.50 €** | 47.8 % | **24.1 %** | 83.54 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG2PS72A12 | 230.50 € | **214.50 €** | 15.0 % | **7.0 %** | 214.54 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD300ProII pre upevnenie Godox | 493.00 € | **478.00 €** | 12.9 % | **9.5 %** | 478.12 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 63.50 € | **48.50 €** | 43.6 % | **9.7 %** | 48.78 € | cena podľa najlacnejšieho iného predajcu |
| Súprava osvetlenia Softbox 10102773 700 W, 3 ks | 118.90 € | **104.00 €** | 43.3 % | **25.3 %** | 104.33 € | cena podľa najlacnejšieho iného predajcu |
| Neewer SRP18-2.4G 46 cm LED kruhové svetlo | 128.90 € | **114.00 €** | 41.2 % | **24.8 %** | 114.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 208.00 € | **193.90 €** | 14.8 % | **7.0 %** | 193.91 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 79.50 € | **65.50 €** | 28.5 % | **5.9 %** | 65.59 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – Powerbanka | 79.50 € | **65.50 €** | 47.0 % | **21.1 %** | 65.71 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 141.00 € | **127.00 €** | 20.0 % | **8.0 %** | 127.45 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 117B | 293.90 € | **280.50 €** | 10.0 % | **5.0 %** | 280.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Veslovací trenažér MERACH MR-R15B2-EU | 251.90 € | **238.90 €** | 22.3 % | **16.0 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 498.50 € | **485.50 €** | 12.9 % | **9.9 %** | 485.77 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 183.00 € | **170.00 €** | 19.9 % | **11.4 %** | 170.49 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Nočné svetlo D1 Matter Smart na nočný stolík | 74.00 € | **61.50 €** | 43.7 % | **19.4 %** | 61.63 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING KS Pro RS095 | 341.00 € | **328.90 €** | 11.3 % | **7.4 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 59.50 € | **47.50 €** | 49.4 % | **19.3 %** | 47.58 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 94.00 € | **82.00 €** | 39.4 % | **21.6 %** | 82.17 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 266.00 € | **254.00 €** | 25.2 % | **19.6 %** | 254.19 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 155.50 € | **143.50 €** | 24.7 % | **15.0 %** | 143.85 € | cena podľa najlacnejšieho iného predajcu |
| Filter 1-5 stop Freewell Sherpa True Color VND pre i... | 79.50 € | **68.00 €** | 32.8 % | **13.6 %** | 68.29 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.90 € | **78.50 €** | 40.5 % | **22.7 %** | 78.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 328.00 € | **317.00 €** | 12.2 % | **8.4 %** | 317.19 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 81.50 € | **70.50 €** | 24.9 % | **8.0 %** | 70.75 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 286.50 € | **275.50 €** | 15.5 % | **11.1 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 153.00 € | **142.00 €** | 20.1 % | **11.4 %** | 142.37 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 238.90 € | **228.00 €** | 20.8 % | **15.3 %** | 228.21 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz 45 cm (biely) | 79.50 € | **68.90 €** | 34.4 % | **16.5 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Braun IS5247.VI | 189.00 € | **178.50 €** | 11.5 % | **5.3 %** | 151.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MOES WCM-Q29 8MP Wi-Fi IP kamera s dvoma objektívmi | 54.00 € | **43.50 €** | 47.3 % | **18.6 %** | 43.71 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W03,16" | 90.00 € | **79.50 €** | 19.4 % | **5.5 %** | 79.81 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 79.50 € | **69.00 €** | 36.7 % | **18.6 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 96.90 € | **86.50 €** | 27.9 % | **14.2 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S AI | 64.50 € | **54.50 €** | 39.1 % | **17.5 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 204.00 € | **194.00 €** | 11.6 % | **6.2 %** | 194.14 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS1 Pro – štartér do auta | 84.00 € | **74.00 €** | 40.5 % | **23.8 %** | 74.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 64.00 € | **54.50 €** | 32.2 % | **12.6 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S UV AI | 64.00 € | **54.50 €** | 38.0 % | **17.5 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 64.00 € | **54.50 €** | 32.9 % | **13.2 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 346.50 € | **337.00 €** | 11.9 % | **8.8 %** | 337.20 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 295.50 € | **286.00 €** | 62.6 % | **57.4 %** | 286.29 € | cena podľa najlacnejšieho iného predajcu |
| Batéria NAC B-80-LI-20V 8Ah | 69.00 € | **59.50 €** | 32.4 % | **14.1 %** | 59.83 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 478.90 € | **469.50 €** | 8.9 % | **6.7 %** | 469.73 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 236.00 € | **226.90 €** | 11.0 % | **6.7 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE R492PW | 198.90 € | **189.90 €** | 10.0 % | **5.0 %** | 151.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zavážacia loďka Flytec V050 Moro, 12 000 mAh | 89.50 € | **80.50 €** | 36.9 % | **23.1 %** | 80.79 € | cena podľa najlacnejšieho iného predajcu |
| Prísavný držiak PGYTECH pre športové kamery (P-GM-223) | 39.90 € | **31.00 €** | 49.4 % | **16.1 %** | 31.30 € | cena podľa najlacnejšieho iného predajcu |
| CA modul CAM 803 Nagravision CZ/SK VERZE s kartou Sk... | 45.50 € | **37.00 €** | 29.3 % | **5.1 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 230.00 € | **221.50 €** | 23.3 % | **18.7 %** | 221.63 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro – štandardná sada | 74.00 € | **65.50 €** | 36.9 % | **21.2 %** | 65.71 € | cena podľa najlacnejšieho iného predajcu |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 54.00 € | **45.50 €** | 37.8 % | **16.1 %** | 45.78 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 287.00 € | **278.90 €** | 16.3 % | **13.1 %** | 278.97 € | cena podľa najlacnejšieho iného predajcu |
| Drôtové slúchadlá do uší TRUTHEAR Zero (modré) | 69.50 € | **61.50 €** | 50.1 % | **32.8 %** | 61.55 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 99.00 € | **91.00 €** | 19.2 % | **9.5 %** | 91.11 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 45.50 € | **37.50 €** | 40.0 % | **15.4 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 191.50 € | **183.50 €** | 16.3 % | **11.4 %** | 183.70 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 191.50 € | **183.50 €** | 16.3 % | **11.4 %** | 183.70 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TB | 303.50 € | **295.50 €** | 11.5 % | **8.6 %** | 295.83 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT6000 99,9 Wh štartér | 136.90 € | **129.00 €** | 32.3 % | **24.7 %** | 129.08 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX FH50R | 238.90 € | **231.00 €** | 27.4 % | **23.1 %** | 231.38 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 291.90 € | **284.00 €** | 10.1 % | **7.1 %** | 284.20 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 374.90 € | **367.00 €** | 11.7 % | **9.4 %** | 367.20 € | cena podľa najlacnejšieho iného predajcu |
| Amazfit Active 3 Premium Apex Silver | 174.50 € | **166.90 €** | 10.0 % | **5.2 %** | 157.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amazfit Active 3 Premium Atlas Blue | 174.50 € | **166.90 €** | 10.0 % | **5.2 %** | 157.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aligator R60 eXtremo Black Orange | 91.50 € | **83.90 €** | 14.6 % | **5.1 %** | 82.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Motorcycle Intercom EJEAS MS20 | 147.00 € | **139.50 €** | 12.6 % | **6.8 %** | 139.51 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S30 nabíjacia stanica 6 v 1 4xUSB-C + 2... | 47.50 € | **40.00 €** | 42.9 % | **20.3 %** | 40.25 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 79.00 € | **71.50 €** | 23.3 % | **11.6 %** | 71.79 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 79.00 € | **71.50 €** | 23.3 % | **11.6 %** | 71.79 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS EM06P-EU Inteligentný monitor spotreby energi... | 80.50 € | **73.00 €** | 27.4 % | **15.5 %** | 73.38 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 118.50 € | **111.50 €** | 12.0 % | **5.4 %** | 108.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 267.50 € | **260.50 €** | 11.4 % | **8.5 %** | 260.55 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 297.00 € | **290.00 €** | 13.7 % | **11.0 %** | 290.20 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 297.00 € | **290.00 €** | 9.2 % | **6.6 %** | 290.20 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhoľnatého MOES WSS-CO s pripojením c... | 36.00 € | **29.50 €** | 48.1 % | **21.4 %** | 29.54 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 78.50 € | **72.00 €** | 34.9 % | **23.7 %** | 72.08 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 90.50 € | **84.00 €** | 15.6 % | **7.3 %** | 84.14 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **113.00 €** | 14.9 % | **8.6 %** | 113.23 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 44.00 € | **37.50 €** | 58.8 % | **35.3 %** | 37.74 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 178.50 € | **172.00 €** | 21.7 % | **17.3 %** | 172.29 € | cena podľa najlacnejšieho iného predajcu |
| Spúšťacia jednotka UTRAI JS10 | 102.00 € | **95.50 €** | 23.5 % | **15.6 %** | 95.88 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA86XE AXE 5400, WiFi... | 32.90 € | **26.50 €** | 32.1 % | **6.4 %** | 25.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 77.00 € | **70.90 €** | 44.8 % | **33.3 %** | 70.96 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavňovač Tefal ZC605D38 | 207.90 € | **201.90 €** | 10.1 % | **6.9 %** | 201.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 43.50 € | **37.50 €** | 44.0 % | **24.1 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-10 | 33.00 € | **27.00 €** | 39.8 % | **14.4 %** | 27.21 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C980Pro 4K | 62.00 € | **56.00 €** | 21.8 % | **10.0 %** | 56.22 € | cena podľa najlacnejšieho iného predajcu |
| MOES WHT-006-GB-WH Wi-Fi termostat pre elektrické kú... | 40.00 € | **34.00 €** | 41.8 % | **20.5 %** | 34.25 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 7 (čierny) | 42.50 € | **36.50 €** | 43.1 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 9 (čierny) | 42.50 € | **36.50 €** | 43.1 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| Fotografická taška cez rameno PGYTECH OneGo Pocket S... | 42.50 € | **36.50 €** | 43.2 % | **23.0 %** | 36.83 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 206.00 € | **200.00 €** | 11.6 % | **8.3 %** | 200.34 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LC500R MiNi štúdiové osvetlenie | 145.00 € | **139.00 €** | 19.3 % | **14.4 %** | 139.36 € | cena podľa najlacnejšieho iného predajcu |
| Shifter Moza Racing HGP RS039 | 149.50 € | **143.50 €** | 11.4 % | **6.9 %** | 143.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak batérie SJCAM pre model C300 | 44.50 € | **38.90 €** | 41.8 % | **23.9 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 181.50 € | **175.90 €** | 21.6 % | **17.8 %** | 175.97 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 192.50 € | **186.90 €** | 10.2 % | **7.0 %** | 186.99 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH6737WH | 113.50 € | **108.00 €** | 10.4 % | **5.0 %** | 100.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zelmer kuchyňský robot ZKR2010 | 174.00 € | **168.50 €** | 8.5 % | **5.1 %** | 167.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 32.00 € | **26.50 €** | 42.2 % | **17.8 %** | 26.52 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 67.50 € | **62.00 €** | 22.0 % | **12.1 %** | 62.13 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer NutriSpin | 54.00 € | **48.50 €** | 32.6 % | **19.1 %** | 48.63 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 29.50 € | **24.00 €** | 57.6 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 29.50 € | **24.00 €** | 57.6 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-01 | 27.50 € | **22.00 €** | 42.6 % | **14.1 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| Válcová kefa MOVA | 22.00 € | **16.50 €** | 87.1 % | **40.3 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Krytky objektívov Puluz pre kameru Insta360 X5 | 35.50 € | **30.00 €** | 34.2 % | **13.4 %** | 30.25 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 8 (čierny) | 42.00 € | **36.50 €** | 41.4 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-604B | 39.50 € | **34.00 €** | 41.0 % | **21.3 %** | 34.25 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 33.50 € | **28.00 €** | 46.1 % | **22.1 %** | 28.29 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT333BT Mini merač teploty a vlhkosti | 31.00 € | **25.50 €** | 37.9 % | **13.4 %** | 25.83 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD200XS (biely) | 57.50 € | **52.00 €** | 36.7 % | **23.6 %** | 52.34 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT3000 44,4 Wh štartér | 69.50 € | **64.00 €** | 33.9 % | **23.3 %** | 64.38 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 40.00 € | **34.50 €** | 26.8 % | **9.4 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre GoPro Hero 13 | 38.50 € | **33.00 €** | 39.8 % | **19.8 %** | 33.42 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC 20100 W | 68.50 € | **63.00 €** | 27.6 % | **17.4 %** | 63.42 € | cena podľa najlacnejšieho iného predajcu |
| Neweer TL97C RGB LED farebné foto svetlo | 38.50 € | **33.00 €** | 43.8 % | **23.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.90 € | **34.50 €** | 28.1 % | **10.7 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Turecký kávovar HiBREW CM1179_EU | 46.00 € | **41.00 €** | 24.4 % | **10.9 %** | 41.02 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 194.00 € | **189.00 €** | 16.0 % | **13.0 %** | 189.06 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 31.50 € | **26.50 €** | 44.0 % | **21.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 350.00 € | **345.00 €** | 72862.3 % | **71819.9 %** | 345.20 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 54.00 € | **49.00 €** | 36.5 % | **23.9 %** | 49.21 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10022 | 140.00 € | **135.00 €** | 11.7 % | **7.7 %** | 135.22 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam S800 | 107.50 € | **102.50 €** | 21.5 % | **15.8 %** | 102.76 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Telesin CPL/ND8/ND16/ND32 pre Insta3... | 38.50 € | **33.50 €** | 38.1 % | **20.1 %** | 33.83 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny ramenný popruh Neewer | 74.00 € | **69.00 €** | 35.8 % | **26.6 %** | 69.38 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-P67 3MP Wi-Fi IP kamera | 25.00 € | **20.00 €** | 46.4 % | **17.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 178.00 € | **173.00 €** | 8.8 % | **5.7 %** | 173.46 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus DC1 mini orbitrek | 163.90 € | **159.00 €** | 22.1 % | **18.5 %** | 159.05 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 337.00 € | **332.50 €** | 11.5 % | **10.0 %** | 332.51 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo infra sušička NIR+ | 180.50 € | **176.00 €** | 8.8 % | **6.0 %** | 176.03 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 150.50 € | **146.00 €** | 12.0 % | **8.6 %** | 146.04 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH1833E0 | 150.00 € | **145.50 €** | 11.7 % | **8.3 %** | 145.56 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prsteň COLMI R02, veľkosť 12,21,3 mm (č... | 34.00 € | **29.50 €** | 41.7 % | **22.9 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Twarde etui Sunnylife do Neo 2 Motion Fly More Combo | 59.50 € | **55.00 €** | 27.5 % | **17.9 %** | 55.13 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE F4142PW | 235.50 € | **231.00 €** | 10.1 % | **8.0 %** | 231.20 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338DD | 525.50 € | **521.00 €** | 7.0 % | **6.1 %** | 521.22 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 116.00 € | **111.50 €** | 16.9 % | **12.4 %** | 111.85 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT826 (čierne) | 33.00 € | **28.50 €** | 42.6 % | **23.1 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 19.00 € | **14.50 €** | 80.7 % | **37.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Amazfit Bip Max Silver | 101.90 € | **97.50 €** | 10.3 % | **5.5 %** | 94.44 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 49.90 € | **45.50 €** | 21.4 % | **10.7 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V50 s Dynamický mikrofón s vypínačom | 109.00 € | **104.90 €** | 15.0 % | **10.7 %** | 105.00 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongPhone H1 Hunting Camo | 84.50 € | **80.50 €** | 10.5 % | **5.3 %** | 43.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 3611A | 110.50 € | **106.50 €** | 9.9 % | **6.0 %** | 106.53 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 filters Sunnylife MCUV, ND8/16/34/64/128 fo... | 27.00 € | **23.00 €** | 40.4 % | **19.6 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 337.90 € | **333.90 €** | 23.7 % | **22.3 %** | 333.94 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 228.50 € | **224.50 €** | 20.9 % | **18.8 %** | 224.62 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 228.50 € | **224.50 €** | 20.9 % | **18.8 %** | 224.62 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.50 € | **93.50 €** | 19.7 % | **14.8 %** | 93.66 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 49.50 € | **45.50 €** | 25.4 % | **15.3 %** | 45.67 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 366.00 € | **362.00 €** | 19.4 % | **18.1 %** | 362.18 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 277.00 € | **273.00 €** | 11.5 % | **9.9 %** | 273.18 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer horkovzdušná fritéza ZAF9230 | 171.00 € | **167.00 €** | 8.6 % | **6.1 %** | 167.20 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 30cm WiFi/Bluetooth 16M RGBCW Gos... | 26.50 € | **22.50 €** | 41.4 % | **20.0 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| Neweer SP-02 rýchloupínací adaptér pre telefón Arca | 26.50 € | **22.50 €** | 48.1 % | **25.7 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje OM38GBC | 134.00 € | **130.00 €** | 17.0 % | **13.5 %** | 130.21 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW5558E0 | 168.50 € | **164.50 €** | 8.5 % | **5.9 %** | 164.74 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 167.50 € | **163.50 €** | 8.8 % | **6.2 %** | 163.74 € | cena podľa najlacnejšieho iného predajcu |
| Indesit TI5512EMTCS | 280.00 € | **276.00 €** | 8.4 % | **6.9 %** | 276.31 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 85.50 € | **81.50 €** | 13.1 % | **7.8 %** | 81.85 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 244.00 € | **240.00 €** | 8.0 % | **6.2 %** | 240.36 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 25.50 € | **21.50 €** | 30.6 % | **10.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 31.50 € | **27.50 €** | 53.1 % | **33.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 198.50 € | **194.50 €** | 9.0 % | **6.8 %** | 194.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 85.00 € | **81.00 €** | 22.0 % | **16.3 %** | 81.42 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FH50EAW | 481.00 € | **477.00 €** | 6.9 % | **6.1 %** | 477.42 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 4K + Tripod | 54.00 € | **50.00 €** | 21.3 % | **12.4 %** | 50.43 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.00 € | **346.00 €** | 23.3 % | **21.9 %** | 346.48 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 145.00 € | **141.00 €** | 8.1 % | **5.1 %** | 141.50 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 183.90 € | **180.00 €** | 11.7 % | **9.3 %** | 180.10 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2014401 Zmrzlinovač | 176.90 € | **173.00 €** | 10.1 % | **7.7 %** | 173.14 € | cena podľa najlacnejšieho iného predajcu |
| Sada na selfie Neewer SRP18C s priemerom 17 cm a okr... | 176.90 € | **173.00 €** | 49.0 % | **45.8 %** | 173.22 € | cena podľa najlacnejšieho iného predajcu |
| Tefal XF652038 | 152.90 € | **149.00 €** | 8.9 % | **6.1 %** | 149.29 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné fotochromatické slnečné okuliare BlitzW... | 59.90 € | **56.00 €** | 19.6 % | **11.8 %** | 56.07 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT598 | 28.90 € | **25.00 €** | 23.5 % | **6.9 %** | 25.16 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 52.90 € | **49.00 €** | 24.0 % | **14.9 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 52.90 € | **49.00 €** | 24.0 % | **14.9 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **345.00 €** | 15.0 % | **13.7 %** | 345.10 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **557.00 €** | 7.3 % | **6.6 %** | 557.30 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXSH1500E | 32.50 € | **28.90 €** | 19.3 % | **6.1 %** | 28.91 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK WiFi AC1200 (Deco E4 2-pack) | 83.50 € | **79.90 €** | 10.1 % | **5.3 %** | 59.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko VRT96425VD | 253.50 € | **249.90 €** | 7.7 % | **6.2 %** | 249.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.00 € | **90.50 €** | 19.4 % | **15.0 %** | 90.52 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 134.50 € | **131.00 €** | 11.4 % | **8.5 %** | 131.07 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Hurricane H5 Plus | 77.00 € | **73.50 €** | 10.9 % | **5.9 %** | 73.57 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 126.00 € | **122.50 €** | 27.7 % | **24.1 %** | 122.57 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.00 € | **324.50 €** | 7.7 % | **6.6 %** | 324.61 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 218.50 € | **215.00 €** | 7.7 % | **5.9 %** | 215.15 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 146.50 € | **143.00 €** | 8.9 % | **6.3 %** | 143.15 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H27BE(1-pack) WiFi... | 72.00 € | **68.50 €** | 10.8 % | **5.4 %** | 68.66 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-654A | 122.00 € | **118.50 €** | 22.5 % | **19.0 %** | 118.68 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-604B štvorzónový plynový sporák so sklen... | 122.00 € | **118.50 €** | 30.2 % | **26.5 %** | 118.68 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50 (sivé) | 39.50 € | **36.00 €** | 24.2 % | **13.2 %** | 36.20 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 164.50 € | **161.00 €** | 8.4 % | **6.1 %** | 161.22 € | cena podľa najlacnejšieho iného predajcu |
| Mlynček na kávu AMZCHEF CE-CG209-SV (strieborný) | 99.00 € | **95.50 €** | 21.8 % | **17.5 %** | 95.73 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1902B-SV | 85.50 € | **82.00 €** | 21.4 % | **16.4 %** | 82.23 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 ATX + 6 ventilátorov ... | 117.50 € | **114.00 €** | 21.4 % | **17.7 %** | 114.25 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 23.50 € | **20.00 €** | 30.8 % | **11.3 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 43.50 € | **40.00 €** | 37.4 % | **26.4 %** | 40.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.00 € | **81.50 €** | 19.5 % | **14.5 %** | 81.82 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 463.00 € | **459.50 €** | 6.8 % | **6.0 %** | 459.82 € | cena podľa najlacnejšieho iného predajcu |
| Kryt na toaletu pre mačky Petkit Hood | 36.00 € | **32.50 €** | 34.4 % | **21.3 %** | 32.83 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.00 € | **74.50 €** | 14.3 % | **9.1 %** | 74.88 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 20.50 € | **17.00 €** | 44.8 % | **20.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DB | 172.50 € | **169.00 €** | 8.9 % | **6.7 %** | 169.43 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongPhone Z6 Hunting Camo | 75.90 € | **72.50 €** | 10.4 % | **5.4 %** | 51.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Armodd Silentwatch 8 Pro Black - 9166 | 158.90 € | **155.50 €** | 14.3 % | **11.8 %** | 155.74 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Silentwatch 8 Pro Titan - 9168 | 158.90 € | **155.50 €** | 14.3 % | **11.8 %** | 155.74 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT888 (čierne) | 27.00 € | **23.90 €** | 24.0 % | **9.8 %** | 23.92 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 109.00 € | **105.90 €** | 8.2 % | **5.1 %** | 105.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné okuliare COLMI V03 Štvorcový rám, bloku... | 69.00 € | **65.90 €** | 25.1 % | **19.5 %** | 65.93 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 151.00 € | **147.90 €** | 15.2 % | **12.8 %** | 148.00 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E10 | 298.90 € | **295.90 €** | 6.1 % | **5.0 %** | 269.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone FS Black | 71.50 € | **68.50 €** | 10.1 % | **5.5 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone FS Red | 71.50 € | **68.50 €** | 10.1 % | **5.5 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosná tlačiareň štítkov Niimbot B4 (modrá) | 65.50 € | **62.50 €** | 10.6 % | **5.6 %** | 58.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal FV6872 | 66.50 € | **63.50 €** | 10.7 % | **5.7 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy CI32CBB | 127.00 € | **124.00 €** | 19.8 % | **16.9 %** | 124.02 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný snímač teploty a vlhkosti WiFi Gosund S... | 15.50 € | **12.50 €** | 46.0 % | **17.8 %** | 12.56 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 111.90 € | **108.90 €** | 16.1 % | **13.0 %** | 108.98 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **50.00 €** | 14.9 % | **8.4 %** | 50.10 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 Pro (čierny) | 53.00 € | **50.00 €** | 15.7 % | **9.2 %** | 50.10 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.00 € | **28.00 €** | 22.4 % | **10.6 %** | 28.10 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7355CH | 62.00 € | **59.00 €** | 25.9 % | **19.8 %** | 59.13 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LR15Bi Okrúhle svetlo | 19.50 € | **16.50 €** | 45.6 % | **23.2 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Rozšíriteľný statív Puluz so selfie tyčou | 19.50 € | **16.50 €** | 36.3 % | **15.3 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľné činky MERACH MR-2444, sada 2 ks | 49.50 € | **46.50 €** | 36.1 % | **27.8 %** | 46.63 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 361.50 € | **358.50 €** | 6.9 % | **6.0 %** | 358.64 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 157.50 € | **154.50 €** | 8.1 % | **6.1 %** | 154.69 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 265.50 € | **262.50 €** | 8.8 % | **7.6 %** | 262.69 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší TWS Haylou X1 2023 ENC (modré) | 19.00 € | **16.00 €** | 43.3 % | **20.7 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 330.50 € | **327.50 €** | 6.9 % | **5.9 %** | 327.87 € | cena podľa najlacnejšieho iného predajcu |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 27.50 € | **24.50 €** | 39.7 % | **24.5 %** | 24.87 € | cena podľa najlacnejšieho iného predajcu |
| Magnetická rukoväť MagSafe Fun Shot Grip2 (biela) | 25.00 € | **22.00 €** | 35.8 % | **19.5 %** | 22.38 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 67.50 € | **64.50 €** | 22.3 % | **16.8 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 28.00 € | **25.00 €** | 19.4 % | **6.6 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické LED svetlo na selfie NEEWER NL48B | 20.00 € | **17.00 €** | 40.1 % | **19.0 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER NL48B – Magnetické selfie svetlo (čierne) | 20.00 € | **17.00 €** | 32.2 % | **12.4 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Maono PD200W (čierny) | 73.90 € | **71.00 €** | 14.9 % | **10.3 %** | 71.34 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 32.90 € | **30.00 €** | 26.9 % | **15.7 %** | 30.13 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer VR300 VDSL Router | 53.50 € | **50.90 €** | 11.0 % | **5.6 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.50 € | **22.90 €** | 17.9 % | **5.9 %** | 22.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA GT805 (čierne) | 25.50 € | **22.90 €** | 25.1 % | **12.4 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 25.50 € | **22.90 €** | 26.0 % | **13.1 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak MagSafe Fun Shot Grip2 (čierny) | 24.50 € | **21.90 €** | 35.4 % | **21.0 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal EY8328E0 | 119.50 € | **116.90 €** | 7.4 % | **5.0 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 81.50 € | **78.90 €** | 14.9 % | **11.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Copertinto BL439G10 | 59.50 € | **57.00 €** | 11.2 % | **6.5 %** | 57.03 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 37.50 € | **35.00 €** | 36.5 % | **27.4 %** | 35.04 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro Telesin pre DJI Osmo Action 6 | 26.50 € | **24.00 €** | 34.1 % | **21.4 %** | 24.04 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne) | 39.00 € | **36.50 €** | 23.5 % | **15.6 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.00 € | **36.50 €** | 23.5 % | **15.6 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife FP-B978 prepravné puzdro pre DJI Flip | 20.00 € | **17.50 €** | 37.8 % | **20.6 %** | 17.63 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 139.00 € | **136.50 €** | 22.5 % | **20.3 %** | 136.65 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 15.50 € | **13.00 €** | 41.8 % | **18.9 %** | 13.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač pre rolety MOES WRS-EUC-WH-MS | 15.50 € | **13.00 €** | 38.0 % | **15.8 %** | 13.21 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CS-85D Softbox | 74.50 € | **72.00 €** | 23.1 % | **19.0 %** | 72.26 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.00 € | **263.50 €** | 7.3 % | **6.3 %** | 263.83 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 330.00 € | **327.50 €** | 7.9 % | **7.1 %** | 327.86 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA G69 (ružová) (QWERTY) | 36.00 € | **33.50 €** | 20.2 % | **11.9 %** | 33.87 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3512B | 83.50 € | **81.00 €** | 12.3 % | **8.9 %** | 81.38 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre DJI Osmo Action 5 (modré) | 18.50 € | **16.00 €** | 36.0 % | **17.6 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| ETA Essenco 1634 90000, bílý | 28.50 € | **26.00 €** | 15.3 % | **5.2 %** | 26.41 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Candywatch 5 GPS Rose Gold - 9152 | 87.50 € | **85.00 €** | 14.7 % | **11.4 %** | 85.46 € | cena podľa najlacnejšieho iného predajcu |
| Armodd Candywatch 5 GPS Silver - 9153 | 87.50 € | **85.00 €** | 14.7 % | **11.4 %** | 85.46 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 26.50 € | **24.00 €** | 30.9 % | **18.5 %** | 24.46 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Sunnylife na riadidlá pre ovládač | 16.50 € | **14.00 €** | 34.1 % | **13.8 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| BEKO CEG7302B | 241.90 € | **239.50 €** | 7.0 % | **5.9 %** | 239.66 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM9802B | 130.90 € | **128.50 €** | 11.0 % | **9.0 %** | 128.68 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongPhone X5 Black Green | 54.90 € | **52.50 €** | 10.7 % | **5.8 %** | 45.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight vonkajšia anténa, DVB-T2, 11dB | 17.90 € | **15.50 €** | 68.0 % | **45.5 %** | 15.56 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi spínač na žalúzie Meross MRS100MA(... | 23.90 € | **21.50 €** | 26.3 % | **13.7 %** | 21.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.70 € | **5.50 €** | 48.0 % | **5.7 %** | 5.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Joystick PXN-2113 PRO Ovládanie letu PC | 34.00 € | **31.90 €** | 23.7 % | **16.0 %** | 31.97 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi RF 433 MHz Avat... | 17.00 € | **14.90 €** | 44.0 % | **26.2 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 128.00 € | **125.90 €** | 6.8 % | **5.1 %** | 113.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XR Black | 50.50 € | **48.50 €** | 10.4 % | **6.1 %** | 36.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XR Blue | 50.50 € | **48.50 €** | 10.4 % | **6.1 %** | 36.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XR Orange | 50.50 € | **48.50 €** | 10.4 % | **6.1 %** | 36.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XR Red | 50.50 € | **48.50 €** | 10.4 % | **6.1 %** | 36.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XR White | 50.50 € | **48.50 €** | 10.4 % | **6.1 %** | 36.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XO Black | 38.50 € | **36.50 €** | 11.4 % | **5.6 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XO Red | 38.50 € | **36.50 €** | 11.4 % | **5.6 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone Red | 42.50 € | **40.50 €** | 10.7 % | **5.5 %** | 31.56 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone White | 42.50 € | **40.50 €** | 10.7 % | **5.5 %** | 31.56 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo StrongPhone Q1 Black | 42.50 € | **40.50 €** | 10.7 % | **5.5 %** | 35.06 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo StrongPhone Q1 Black Orange | 42.50 € | **40.50 €** | 10.7 % | **5.5 %** | 35.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 89.50 € | **87.50 €** | 11.4 % | **8.9 %** | 87.51 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro (čierny) | 130.00 € | **128.00 €** | 13.7 % | **12.0 %** | 128.01 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.50 € | **12.50 €** | 39.7 % | **20.4 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 19.50 € | **17.50 €** | 42.8 % | **28.2 %** | 17.54 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Sunnylife 2 v 1 pre DJI RC Plus 2 | 16.50 € | **14.50 €** | 33.3 % | **17.2 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf CL5, 1000 lm | 23.50 € | **21.50 €** | 36.7 % | **25.0 %** | 21.54 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 95.90 € | **93.90 €** | 12.3 % | **9.9 %** | 93.95 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 35.50 € | **33.50 €** | 20.6 % | **13.8 %** | 33.55 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 35.50 € | **33.50 €** | 20.6 % | **13.8 %** | 33.55 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 31.90 € | **29.90 €** | 18.4 % | **10.9 %** | 29.96 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 20.50 € | **18.50 €** | 21.0 % | **9.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 10 Loop s LCD FIXZENL-10-BK | 19.50 € | **17.50 €** | 27.4 % | **14.4 %** | 17.60 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, černé ASG001 | 74.90 € | **72.90 €** | 14.9 % | **11.8 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, modré ASG002 | 74.90 € | **72.90 €** | 14.9 % | **11.8 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 15.50 € | **13.50 €** | 37.7 % | **20.0 %** | 13.63 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100WFB | 54.00 € | **52.00 €** | 14.9 % | **10.6 %** | 52.15 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma na riasy ANLAN 08-AJMJ31-02A | 20.00 € | **18.00 €** | 39.8 % | **25.8 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na okolie očí a pier EMS ANLAN 08-A... | 20.00 € | **18.00 €** | 36.8 % | **23.1 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 375.00 € | **373.00 €** | 20.0 % | **19.3 %** | 373.17 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie GODOX FL15Bi | 100.00 € | **98.00 €** | 19.8 % | **17.4 %** | 98.17 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 105.00 € | **103.00 €** | 11.5 % | **9.4 %** | 103.20 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 105.00 € | **103.00 €** | 7.3 % | **5.2 %** | 103.20 € | cena podľa najlacnejšieho iného predajcu |
| Filtr CPL 58mm Telesin do iPhone 15 Pro/Pro Max | 16.50 € | **14.50 €** | 36.2 % | **19.7 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 21.00 € | **19.00 €** | 24.7 % | **12.8 %** | 19.21 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 42.50 € | **40.50 €** | 14.1 % | **8.8 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB46E838 | 62.50 € | **60.50 €** | 16.3 % | **12.6 %** | 60.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT20R-WH-3A-W-WiFi | 33.00 € | **31.00 €** | 23.8 % | **16.3 %** | 31.33 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro na iPhone Puluz (40 m) s jednosmern... | 54.00 € | **52.00 €** | 12.4 % | **8.2 %** | 52.33 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 44.50 € | **42.50 €** | 45.1 % | **38.6 %** | 42.85 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.50 € | **15.50 €** | 28.5 % | **13.8 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.00 € | **30.00 €** | 13.3 % | **6.2 %** | 30.36 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 21.50 € | **19.50 €** | 23.9 % | **12.4 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing SR-P Lite RS19 for R3/R5 | 42.50 € | **40.50 €** | 15.8 % | **10.3 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 27.00 € | **25.00 €** | 16.9 % | **8.2 %** | 25.41 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak PULUZ pre Insta360 GO Ultra (čierny) | 15.00 € | **13.00 €** | 28.5 % | **11.4 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MVC72HGA | 31.00 € | **29.00 €** | 15.7 % | **8.2 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov Sunnylife CPL + ND8 + ND16 pre Osmo Nano | 18.00 € | **16.00 €** | 31.7 % | **17.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Blackview 60 Pro LTE Blue | 169.90 € | **168.00 €** | 10.0 % | **8.8 %** | 168.08 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 115.90 € | **114.00 €** | 7.0 % | **5.2 %** | 114.32 € | cena podľa najlacnejšieho iného predajcu |
| Freewell kruhový polarizačný filter CPL pre OSMO NANO | 19.90 € | **18.00 €** | 21.5 % | **9.9 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-P23 100 W 14 000 mAh powerbanka | 51.90 € | **50.00 €** | 21.3 % | **16.9 %** | 50.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.70 € | **3.00 €** | 80.2 % | **15.0 %** | 3.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 11.00 € | **9.30 €** | 30.2 % | **10.1 %** | 9.37 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Sora Pink | 32.50 € | **30.90 €** | 10.7 % | **5.3 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone ID Black | 29.50 € | **27.90 €** | 11.2 % | **5.2 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone ID Red | 29.50 € | **27.90 €** | 11.2 % | **5.2 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.50 € | **22.90 €** | 30.4 % | **21.9 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona na smartfón od Sunnylife pre ovládač D... | 27.50 € | **25.90 €** | 15.4 % | **8.7 %** | 25.97 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND-PL 4/8/16/32 Sunnylife pre DJI Min... | 27.50 € | **25.90 €** | 37.2 % | **29.2 %** | 25.97 € | cena podľa najlacnejšieho iného predajcu |
| Hliníkový držiak Sunnylife pre Insta360 X5/X4 | 18.50 € | **16.90 €** | 32.3 % | **20.8 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový ovládač GoSat GS7056 HDi | 16.50 € | **15.00 €** | 16.2 % | **5.7 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický ventilátor GOOLOO F3 (biely) | 35.50 € | **34.00 €** | 27.8 % | **22.4 %** | 34.04 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 14.50 € | **13.00 €** | 36.6 % | **22.5 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 14.50 € | **13.00 €** | 36.6 % | **22.5 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica ELEGOO Mercury XS | 131.50 € | **130.00 €** | 19.3 % | **18.0 %** | 130.05 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.50 € | **34.00 €** | 13.4 % | **8.6 %** | 34.10 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.00 € | **22.50 €** | 17.4 % | **10.1 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf L1 350 lm | 17.50 € | **16.00 €** | 37.2 % | **25.4 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 309.00 € | **307.50 €** | 6.8 % | **6.3 %** | 307.64 € | cena podľa najlacnejšieho iného predajcu |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 151.00 € | **149.50 €** | 40.4 % | **39.0 %** | 149.65 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 234.50 € | **233.00 €** | 10.4 % | **9.7 %** | 233.20 € | cena podľa najlacnejšieho iného predajcu |
| TELESIN Univerzálny držiak na rúrku riadidiel pre šp... | 19.50 € | **18.00 €** | 39.2 % | **28.5 %** | 18.22 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Magnetic Wall | 13.00 € | **11.50 €** | 25.1 % | **10.6 %** | 11.75 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNCM9 13-32" monitor mount | 33.00 € | **31.50 €** | 25.7 % | **20.0 %** | 31.76 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 24.00 € | **22.50 €** | 19.9 % | **12.4 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu |
| Úložná taška Telesin EVA pre DJI Action 3/4/5 (veľko... | 14.00 € | **12.50 €** | 32.2 % | **18.0 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Detektor drôtov UNI-T UT25CL | 139.00 € | **137.50 €** | 11.3 % | **10.1 %** | 137.80 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 27.50 € | **26.00 €** | 11.6 % | **5.5 %** | 26.31 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 37-75" Perlesmith PSTVS13 | 33.50 € | **32.00 €** | 21.2 % | **15.7 %** | 32.38 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 686.00 € | **684.50 €** | 11.9 % | **11.7 %** | 684.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 5 m | 43.00 € | **41.50 €** | 19.0 % | **14.9 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 42.00 € | **40.50 €** | 21.4 % | **17.1 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Matter over WiFi nástenný spínač SONOFF... | 18.50 € | **17.00 €** | 24.4 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Black+Decker BXMC400E | 83.90 € | **82.50 €** | 44.2 % | **41.8 %** | 82.58 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMK38HU0B | 228.90 € | **227.50 €** | 8.0 % | **7.4 %** | 227.80 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 137.90 € | **136.50 €** | 44.8 % | **43.4 %** | 136.90 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo EasyPhone XS Black | 33.90 € | **32.50 €** | 10.4 % | **5.9 %** | 24.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XS Red | 33.90 € | **32.50 €** | 10.4 % | **5.9 %** | 24.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XS White | 33.90 € | **32.50 €** | 10.4 % | **5.9 %** | 24.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo EasyPhone XS Blue | 33.90 € | **32.50 €** | 10.4 % | **5.9 %** | 24.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight bezdrôtový zvonček a nočné svetielko, do zás... | 5.80 € | **4.60 €** | 43.8 % | **14.0 %** | 4.64 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Travel 7x50 | 55.00 € | **53.90 €** | 7.6 % | **5.5 %** | 53.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 25.00 € | **23.90 €** | 24.2 % | **18.7 %** | 23.92 € | cena podľa najlacnejšieho iného predajcu |
| BenQ brašna k projektorům MX711/710/660/ | 36.00 € | **34.90 €** | 14.6 % | **11.1 %** | 34.94 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo MaxPhone A1 Black | 21.50 € | **20.50 €** | 12.0 % | **6.8 %** | 17.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo MaxPhone A1 Red | 21.50 € | **20.50 €** | 12.2 % | **7.0 %** | 17.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED smart vonkajšia reťaz s RGB žiarovkami, ... | 23.50 € | **22.50 €** | 19.9 % | **14.8 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3002G | 76.00 € | **75.00 €** | 12.6 % | **11.1 %** | 75.04 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 246.90 € | **245.90 €** | 8.0 % | **7.5 %** | 245.94 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 11.50 € | **10.50 €** | 29.1 % | **17.9 %** | 10.56 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 123.50 € | **122.50 €** | 8.1 % | **7.2 %** | 122.56 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Compact | 38.50 € | **37.50 €** | 10.1 % | **7.3 %** | 37.56 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 12.00 € | **11.00 €** | 26.9 % | **16.3 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (sivá) | 12.00 € | **11.00 €** | 31.7 % | **20.7 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 12.00 € | **11.00 €** | 26.9 % | **16.3 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V69 smartwatch (black) | 36.50 € | **35.50 €** | 18.7 % | **15.4 %** | 35.57 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT605 | 20.50 € | **19.50 €** | 23.2 % | **17.2 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 20.50 € | **19.50 €** | 18.4 % | **12.6 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 64.50 € | **63.50 €** | 21.5 % | **19.6 %** | 63.60 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 211.90 € | **210.90 €** | 38183.6 % | **38003.0 %** | 211.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 646.90 € | **645.90 €** | 116774.4 % | **116593.8 %** | 646.00 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire L3 P90 | 29.50 € | **28.50 €** | 13.4 % | **9.6 %** | 28.63 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 93.50 € | **92.50 €** | 9.1 % | **7.9 %** | 92.66 € | cena podľa najlacnejšieho iného predajcu |
| Držiak s prísavkou Telesin pre DJI Osmo Action 3/4/5... | 12.50 € | **11.50 €** | 30.6 % | **20.2 %** | 11.67 € | cena podľa najlacnejšieho iného predajcu |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 99.50 € | **98.50 €** | 23.7 % | **22.5 %** | 98.68 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 s 6 ventilátormi (čie... | 116.00 € | **115.00 €** | 20.5 % | **19.5 %** | 115.24 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash F1 (čierna) + 6 ventilát... | 116.00 € | **115.00 €** | 17.0 % | **16.0 %** | 115.24 € | cena podľa najlacnejšieho iného predajcu |
| Sati Guatemala Bio Fairtrade 500 g zrno | 12.50 € | **11.50 €** | 16.1 % | **6.8 %** | 11.75 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 17,9MM 7 (čierny) | 32.50 € | **31.50 €** | 22.2 % | **18.4 %** | 31.77 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.00 € | **18.00 €** | 21.3 % | **15.0 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VN200 (čierne a červené) | 23.50 € | **22.50 €** | 19.4 % | **14.3 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu |
| Bluetooth reproduktor Blitzwolf BW-WA4 30W 4000mAh | 46.50 € | **45.50 €** | 18.7 % | **16.1 %** | 45.78 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-1 mini 12V DC bílý | 96.00 € | **95.00 €** | 15.1 % | **13.9 %** | 95.29 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-9 mini 12V DC černý | 96.00 € | **95.00 €** | 15.1 % | **13.9 %** | 95.29 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 44.00 € | **43.00 €** | 15.8 % | **13.2 %** | 43.29 € | cena podľa najlacnejšieho iného predajcu |
| Štartér UTRAI s vzduchovým kompresorom JS5 | 107.50 € | **106.50 €** | 24.6 % | **23.5 %** | 106.83 € | cena podľa najlacnejšieho iného predajcu |
| Filter CPL Freewell Osmo Pocket 4P | 20.00 € | **19.00 €** | 14.5 % | **8.8 %** | 19.33 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno ELEGOO ASA (čierne) | 12.50 € | **11.50 €** | 28.0 % | **17.8 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 69.00 € | **68.00 €** | 13.6 % | **12.0 %** | 68.34 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 69.00 € | **68.00 €** | 10.5 % | **8.9 %** | 68.34 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 17.50 € | **16.50 €** | 16.7 % | **10.0 %** | 16.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 26.50 € | **25.50 €** | 44.5 % | **39.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 229.50 € | **228.50 €** | 16.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 229.50 € | **228.50 €** | 16.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Sunnylife 073523 | 24.50 € | **23.50 €** | 44.3 % | **38.4 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 16.50 € | **15.50 €** | 18.0 % | **10.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 64.00 € | **63.00 €** | 42.3 % | **40.1 %** | 63.43 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO White | 49.00 € | **48.00 €** | 11.3 % | **9.0 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Black | 49.00 € | **48.00 €** | 11.3 % | **9.0 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Pink | 49.00 € | **48.00 €** | 11.3 % | **9.0 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 70.00 € | **69.00 €** | 11.5 % | **9.9 %** | 69.48 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 64.90 € | **64.00 €** | 21.9 % | **20.2 %** | 64.13 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0856 GaN 45W | 15.90 € | **15.00 €** | 36.2 % | **28.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 23.90 € | **23.00 €** | 15.5 % | **11.2 %** | 23.08 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9268WK | 35.90 € | **35.00 €** | 19.9 % | **16.9 %** | 35.41 € | cena podľa najlacnejšieho iného predajcu |
| Gumová kefa ROMO | 23.90 € | **23.00 €** | 29.5 % | **24.7 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 401.90 € | **401.00 €** | 6.6 % | **6.3 %** | 401.30 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná dekorácia – zimné kvety Solight... | 4.70 € | **3.90 €** | 36.5 % | **13.2 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 28.50 € | **27.90 €** | 99.6 % | **95.4 %** | 27.92 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 28.50 € | **27.90 €** | 23.9 % | **21.3 %** | 27.92 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 28.50 € | **27.90 €** | 46.8 % | **43.7 %** | 27.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 42.50 € | **41.90 €** | 43.8 % | **41.8 %** | 41.96 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 White | 42.50 € | **41.90 €** | 11.4 % | **9.8 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Black | 42.50 € | **41.90 €** | 11.4 % | **9.8 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Pink | 42.50 € | **41.90 €** | 11.4 % | **9.8 %** | 41.97 € | cena podľa najlacnejšieho iného predajcu |
| Maono PD100X RGB Microphone Black | 44.50 € | **43.90 €** | 40.0 % | **38.1 %** | 43.98 € | cena podľa najlacnejšieho iného predajcu |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 30.50 € | **29.90 €** | 52.4 % | **49.4 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| MENALUX CB104B | 21.50 € | **20.90 €** | 15.6 % | **12.4 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1018900 Pákový kávovar | 123.50 € | **122.90 €** | 8.6 % | **8.1 %** | 122.94 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet SE (biela) | 83.50 € | **82.90 €** | 11.9 % | **11.1 %** | 83.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bambusový lampáš s LED žiarovkou, teplá biel... | 5.80 € | **5.30 €** | 19.4 % | **9.1 %** | 5.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 33.00 € | **32.50 €** | 20.9 % | **19.0 %** | 32.53 € | cena podľa najlacnejšieho iného predajcu |
| Zásuvkový termostatický regulátor teploty Meross MTS... | 37.00 € | **36.50 €** | 18.6 % | **17.0 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Brake Pedal Performance Upgrade Kit Moza Racing SR-P... | 34.50 € | **34.00 €** | 16.8 % | **15.1 %** | 34.07 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCJ30E | 18.00 € | **17.50 €** | 11.0 % | **7.9 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 Kit – webová kamera | 62.00 € | **61.50 €** | 21.4 % | **20.5 %** | 61.58 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na cvičení Rebel Active RBA-3159-2BL na jóg... | 30.00 € | **29.50 €** | 13.0 % | **11.1 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Držiak športovej kamery na riadidlá PGYTECH (P-GM-171) | 38.00 € | **37.50 €** | 37.7 % | **35.9 %** | 37.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.50 € | **25.00 €** | 36.9 % | **34.2 %** | 25.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.66 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 20Ah VOLT + bezúdržbový systém... | 109.00 € | **108.50 €** | 26.9 % | **26.3 %** | 108.67 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 689.00 € | **688.50 €** | 36.8 % | **36.7 %** | 688.68 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 831.00 € | **830.50 €** | 27.6 % | **27.5 %** | 830.68 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus AL1 | 38.00 € | **37.50 €** | 20.3 % | **18.7 %** | 37.68 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 HD | 21.50 € | **21.00 €** | 22.8 % | **19.9 %** | 21.19 € | cena podľa najlacnejšieho iného predajcu |
| Sada 6 filtrov Freewell Bright Day pre DJI Flip | 39.50 € | **39.00 €** | 37.4 % | **35.7 %** | 39.20 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 54.00 € | **53.50 €** | 15.1 % | **14.0 %** | 53.71 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 webová kamera | 55.00 € | **54.50 €** | 21.2 % | **20.1 %** | 54.72 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 13.00 € | **12.50 €** | 17.3 % | **12.8 %** | 12.73 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 72.50 € | **72.00 €** | 19.9 % | **19.0 %** | 72.24 € | cena podľa najlacnejšieho iného predajcu |
| Selfie svetlo Telesin s magnetickým držiakom telefónu | 18.50 € | **18.00 €** | 22.9 % | **19.6 %** | 18.25 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 White | 32.50 € | **32.00 €** | 10.8 % | **9.1 %** | 32.26 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Pink | 32.50 € | **32.00 €** | 10.8 % | **9.1 %** | 32.26 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 24.50 € | **24.00 €** | 12.5 % | **10.2 %** | 24.28 € | cena podľa najlacnejšieho iného predajcu |
| Panoramatický fotografický stojan 360 Puluz DCA0871W | 15.50 € | **15.00 €** | 16.0 % | **12.3 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 39.00 € | **38.50 €** | 22.2 % | **20.6 %** | 38.79 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 19.00 € | **18.50 €** | 14.3 % | **11.3 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 10Ah MHPower MS10-12(L) F2-6,3mm | 41.50 € | **41.00 €** | 6.6 % | **5.3 %** | 41.30 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 352.00 € | **351.50 €** | 35.2 % | **35.0 %** | 351.80 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot Blast black od Silverlit | 28.00 € | **27.50 €** | 11.0 % | **9.0 %** | 27.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW402HE0 | 129.50 € | **129.00 €** | 10.2 % | **9.7 %** | 129.32 € | cena podľa najlacnejšieho iného predajcu |
| San Marco INTENSO 500 g | 12.00 € | **11.50 €** | 10.7 % | **6.1 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 160.50 € | **160.00 €** | 21.7 % | **21.4 %** | 160.33 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 19,1MM 9 (čierny) | 36.50 € | **36.00 €** | 22.1 % | **20.4 %** | 36.34 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RO 3985 EA | 75.00 € | **74.50 €** | 10.9 % | **10.1 %** | 74.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter digitálny V33 | 11.50 € | **11.00 €** | 16.4 % | **11.4 %** | 11.37 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 267.00 € | **266.50 €** | 57.5 % | **57.2 %** | 266.87 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 43.50 € | **43.00 €** | 22.6 % | **21.2 %** | 43.38 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.50 € | **888.00 €** | 20.3 % | **20.2 %** | 888.38 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 342.50 € | **342.00 €** | 25.2 % | **25.0 %** | 342.39 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 63.50 € | **63.00 €** | 94.1 % | **92.6 %** | 63.39 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 113.00 € | **112.50 €** | 38.1 % | **37.5 %** | 112.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.50 € | **37.00 €** | 9.1 % | **7.6 %** | 37.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 49.00 € | **48.50 €** | 11.9 % | **10.7 %** | 48.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 88.50 € | **88.00 €** | 13.6 % | **12.9 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 316.50 € | **316.00 €** | 17.9 % | **17.7 %** | 316.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 238.00 € | **237.50 €** | 11.5 % | **11.2 %** | 237.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 470.50 € | **470.00 €** | 8.7 % | **8.6 %** | 470.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 924.50 € | **924.00 €** | 17.5 % | **17.4 %** | 924.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 131.50 € | **131.00 €** | 15.1 % | **14.7 %** | 131.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 159.50 € | **159.00 €** | 7.8 % | **7.4 %** | 159.39 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 187.00 € | **186.50 €** | 11.1 % | **10.8 %** | 186.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 255.50 € | **255.00 €** | 19.4 % | **19.2 %** | 255.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 114.00 € | **113.50 €** | 6.4 % | **5.9 %** | 113.89 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 72.50 € | **72.00 €** | 6.2 % | **5.5 %** | 72.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 51.50 € | **51.00 €** | 7.2 % | **6.2 %** | 51.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 278.00 € | **277.50 €** | 24.9 % | **24.7 %** | 277.89 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **25.50 €** | 15.3 % | **13.1 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 245.00 € | **244.50 €** | 23.5 % | **23.3 %** | 244.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 275.00 € | **274.50 €** | 8.3 % | **8.1 %** | 274.89 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Neptune 4 Max | 392.00 € | **391.50 €** | 8.1 % | **8.0 %** | 391.89 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 261.00 € | **260.50 €** | 7.1 % | **6.9 %** | 260.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 149.50 € | **149.00 €** | 5.6 % | **5.3 %** | 149.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.00 € | **18.50 €** | 26.3 % | **23.0 %** | 18.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 116.50 € | **116.00 €** | 23001.3 % | **22902.2 %** | 116.39 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000  (čierny) | 67.50 € | **67.00 €** | 34.7 % | **33.7 %** | 67.39 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 Wi-Fi (čierny) | 67.50 € | **67.00 €** | 9.5 % | **8.7 %** | 67.39 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 Wi- (biely) | 67.50 € | **67.00 €** | 9.5 % | **8.7 %** | 67.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 185.50 € | **185.00 €** | 6.0 % | **5.8 %** | 185.39 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.50 € | **335.00 €** | 22.9 % | **22.7 %** | 335.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 608.00 € | **607.50 €** | 5.8 % | **5.7 %** | 607.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 638.00 € | **637.50 €** | 7.7 % | **7.6 %** | 637.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 161.50 € | **161.00 €** | 20.5 % | **20.1 %** | 161.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 80.00 € | **79.50 €** | 29.0 % | **28.2 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 151.50 € | **151.00 €** | 18.5 % | **18.2 %** | 151.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 126.50 € | **126.00 €** | 16.1 % | **15.6 %** | 126.39 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 15.00 € | **14.50 €** | 49.5 % | **44.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 295.50 € | **295.00 €** | 43.3 % | **43.1 %** | 295.40 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 208.50 € | **208.00 €** | 50.8 % | **50.4 %** | 208.40 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Xany 2B, aktivní pokojová anténa | 16.00 € | **15.50 €** | 12.2 % | **8.7 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Prasátko Peppa | 23.00 € | **22.50 €** | 10.6 % | **8.2 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BOP6737E05EPBG | 347.50 € | **347.00 €** | 11.8 % | **11.6 %** | 347.41 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 25.50 € | **25.00 €** | 17.0 % | **14.7 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 200.50 € | **200.00 €** | 19.6 % | **19.3 %** | 200.46 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 53.50 € | **53.00 €** | 11.9 % | **10.9 %** | 53.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 35.50 € | **35.00 €** | 37.4 % | **35.5 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 13.50 € | **13.00 €** | 16.3 % | **12.0 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 104.50 € | **104.00 €** | 10.7 % | **10.1 %** | 104.49 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.50 € | **233.00 €** | 24.0 % | **23.8 %** | 233.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 20.50 € | **20.00 €** | 11.9 % | **9.1 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (čierne) | 20.50 € | **20.00 €** | 18.1 % | **15.2 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 20.50 € | **20.00 €** | 16.4 % | **13.5 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 99.50 € | **99.00 €** | 13.4 % | **12.9 %** | 99.50 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 49.50 € | **49.00 €** | 33.5 % | **32.1 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel 50 | 74.90 € | **74.50 €** | 7.2 % | **6.6 %** | 74.69 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel Sun 50 | 74.90 € | **74.50 €** | 7.2 % | **6.6 %** | 74.69 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES206XPP-M2 5x 2,5GLan s PoE++, 1x 10... | 175.90 € | **175.50 €** | 5.6 % | **5.3 %** | 175.80 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRALINK ULM300MIC wireless microphone set | 124.90 € | **124.50 €** | 30.6 % | **30.2 %** | 124.87 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.90 € | **158.50 €** | 16.2 % | **15.9 %** | 158.87 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 195.90 € | **195.50 €** | 7.8 % | **7.6 %** | 195.87 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon CRITICAL MASS, vokálny efektový pedál | 124.90 € | **124.50 €** | 20.7 % | **20.3 %** | 124.87 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.90 € | **217.50 €** | 13.8 % | **13.6 %** | 217.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-0360 4.0 Mpix venkovní IP dome kamera... | 117.90 € | **117.50 €** | 17.8 % | **17.4 %** | 117.90 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.90 € | **217.50 €** | 36.8 % | **36.5 %** | 217.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter digitálny V32 | 8.30 € | **7.90 €** | 19.6 % | **13.9 %** | 7.98 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPhone 17 FIXSHM-1600-TR | 15.90 € | **15.50 €** | 14.5 % | **11.6 %** | 15.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.60 € | **2.20 €** | 32.9 % | **12.5 %** | 2.30 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.70 € | **8.30 €** | 74.6 % | **66.6 %** | 8.32 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin L Steel | 28.90 € | **28.50 €** | 11.9 % | **10.4 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš KIS Chic Bin M Black | 23.90 € | **23.50 €** | 8.3 % | **6.4 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| VENTAcel Filter 1 pack | 28.90 € | **28.50 €** | 11.2 % | **9.7 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 330.90 € | **330.50 €** | 16.7 % | **16.6 %** | 330.72 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 502.90 € | **502.50 €** | 8.1 % | **8.0 %** | 502.73 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 502.90 € | **502.50 €** | 22.8 % | **22.7 %** | 502.73 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D70 | 287.90 € | **287.50 €** | 27.8 % | **27.7 %** | 287.75 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.90 € | **369.50 €** | 7.1 % | **7.0 %** | 369.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 8.90 € | **8.60 €** | 18.8 % | **14.8 %** | 8.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 8.40 € | **8.10 €** | 54.9 % | **49.3 %** | 8.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.40 € | **3.10 €** | 33.5 % | **21.8 %** | 3.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight výsuvná nabíjačka USB A+C 24 W PD, biela | 7.10 € | **6.80 €** | 19.3 % | **14.2 %** | 6.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight výsuvná nabíjačka USB A+C 24 W PD, čierna | 7.10 € | **6.80 €** | 19.3 % | **14.2 %** | 6.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight lišta pre akumulátorovú pílu RNP150 | 3.70 € | **3.50 €** | 19.8 % | **13.4 %** | 3.55 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les s jeleňmi Solight 1V249,... | 3.60 € | **3.40 €** | 43.5 % | **35.5 %** | 3.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.30 € | **5.10 €** | 17.7 % | **13.3 %** | 5.19 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz do okna – Santa Solight 1V251, 12... | 2.70 € | **2.50 €** | 44.4 % | **33.7 %** | 2.59 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les a jeleň Solight 1V223-A,... | 5.50 € | **5.30 €** | 39.3 % | **34.2 %** | 5.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 2.80 € | **2.60 €** | 24.4 % | **15.5 %** | 2.69 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná hviezda na stenu Solight 1V261, 24 LED,... | 3.90 € | **3.70 €** | 41.6 % | **34.3 %** | 3.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.60 € | **5.40 €** | 29.7 % | **25.1 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.50 € | **9.30 €** | 14.4 % | **12.0 %** | 9.39 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 363.00 € | **362.90 €** | 81.5 % | **81.5 %** | 362.93 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 498.00 € | **497.90 €** | 5.6 % | **5.6 %** | 497.95 € | cena podľa najlacnejšieho iného predajcu |
| myPhone 3510 LTE černý | 62.00 € | **61.90 €** | 11.5 % | **11.3 %** | 61.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.90 €** | 47.4 % | **46.6 %** | 17.96 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI DI600P DI box | 33.00 € | **32.90 €** | 11.6 % | **11.3 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.10 € | **2.00 €** | 29.3 % | **23.2 %** | 2.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 131.00 € | **130.90 €** | 25876.6 % | **25856.8 %** | 130.99 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 175.00 € | **174.90 €** | 26.6 % | **26.5 %** | 174.99 € | cena podľa najlacnejšieho iného predajcu |

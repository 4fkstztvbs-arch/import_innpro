# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-17

Vstup: `premiumstoresk_20260817_2223.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **4056**
- Návrh **zvýšiť** cenu: **371** produktov
- Návrh **znížiť** cenu: **665** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3020** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **105**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (371)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| METZ 65MQE7600Z 65" QLED 4K Ultra HD TV | 363.50 € | **465.50 €** | 15.0 % | **47.2 %** | 465.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roborock F25 | 313.50 € | **348.00 €** | 10.0 % | **22.1 %** | 313.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TOUR ONE M3, Black | 264.90 € | **275.50 €** | 5.3 % | **9.5 %** | 264.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TOUR ONE M3, Latte | 264.90 € | **275.50 €** | 5.3 % | **9.5 %** | 264.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic Kobra 2 Pro 3D Printer | 207.00 € | **217.50 €** | 9.6 % | **15.1 %** | 207.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 199.90 € | **209.00 €** | 8.6 % | **13.6 %** | 209.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 261.90 € | **270.50 €** | 11.3 % | **15.0 %** | 270.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **19.50 €** | 10.9 % | **45.2 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niimbot K3 Commercial Lake Blue | 58.00 € | **62.50 €** | 6.7 % | **15.0 %** | 62.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BROTHER DCP-T730DW | 262.50 € | **266.50 €** | 10.0 % | **11.7 %** | 262.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.00 € | **66.00 €** | 9.3 % | **14.5 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 45.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.50 € | **49.00 €** | 9.1 % | **15.0 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.00 € | **39.50 €** | 9.5 % | **16.9 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510Y žlutá | 37.00 € | **39.50 €** | 9.5 % | **16.9 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/4N/1 | 50.50 € | **52.90 €** | 9.1 % | **14.3 %** | 50.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.00 € | **31.90 €** | 9.9 % | **16.9 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 143.90 € | **145.50 €** | 15.1 % | **16.3 %** | 145.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Friteoiicz | 52.00 € | **53.50 €** | 5.0 % | **8.0 %** | 52.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 25.00 € | **26.50 €** | 34.6 % | **42.7 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.40 € | **9.70 €** | 54.5 % | **78.4 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **319.00 €** | 6.5 % | **6.9 %** | 318.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ručný multimeter do auta UNI-T UT107 | 28.50 € | **29.50 €** | 5.9 % | **9.6 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 54.90 € | **55.90 €** | 9.9 % | **11.9 %** | 54.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.50 € | **15.50 €** | 9.4 % | **16.9 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.50 € | **15.50 €** | 9.4 % | **16.9 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 116.00 € | **116.90 €** | 8.2 % | **9.0 %** | 116.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 116.00 € | **116.90 €** | 8.2 % | **9.0 %** | 116.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 71.00 € | **71.90 €** | 9.6 % | **11.0 %** | 71.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool MBNA910X | 242.00 € | **242.90 €** | 7.7 % | **8.1 %** | 242.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.00 € | **14.90 €** | 6.8 % | **13.6 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.00 € | **17.90 €** | 7.5 % | **13.2 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio Fx 85 Es Plus 2E | 20.00 € | **20.90 €** | 10.0 % | **15.0 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 269.90 € | **270.50 €** | 7.6 % | **7.9 %** | 269.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Mop na podlahu Easy Spray XL | 31.90 € | **32.50 €** | 7.2 % | **9.2 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.50 €** | 5.5 % | **9.0 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **18.50 €** | 11.7 % | **15.4 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 138.00 € | **138.50 €** | 9.0 % | **9.4 %** | 138.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **557.50 €** | 6.6 % | **6.7 %** | 557.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 45.00 € | **45.50 €** | 7.4 % | **8.5 %** | 45.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| PULUZ PU3224B Držiak na telefón čierny | 14.00 € | **14.50 €** | 12.5 % | **16.5 %** | 14.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.00 € | **19.50 €** | 11.2 % | **14.1 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Centrala Bramka WiFi MSH450MA Meross | 19.00 € | **19.50 €** | 12.0 % | **15.0 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 33.00 € | **33.50 €** | 7.1 % | **8.8 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini detektor úniku plynu Habotest HT61 | 17.00 € | **17.50 €** | 13.3 % | **16.6 %** | 17.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zeblaze GTS 3 PRO Smartwatch (White) | 23.00 € | **23.50 €** | 9.9 % | **12.3 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 31.00 € | **31.50 €** | 5.9 % | **7.6 %** | 31.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant Moza Racing RS V2 RS25 | 402.00 € | **402.50 €** | 8.5 % | **8.6 %** | 402.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gens ace G-Tech 5000mAh 7.4V 60C 2S1P Lipo PC materi... | 40.00 € | **40.50 €** | 6.2 % | **7.5 %** | 40.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sieťová nabíjačka Blitzwolf BW-i100 5v1 120W | 45.00 € | **45.50 €** | 14.3 % | **15.6 %** | 45.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky C10 (biele) | 13.00 € | **13.50 €** | 12.1 % | **16.4 %** | 13.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.00 € | **15.50 €** | 13.0 % | **16.8 %** | 15.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 21.00 € | **21.50 €** | 9.5 % | **12.1 %** | 21.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Edifier D12 (čierny) | 86.00 € | **86.50 €** | 11.7 % | **12.3 %** | 86.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Edifier D12 (hnedý) | 86.00 € | **86.50 €** | 11.7 % | **12.3 %** | 86.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X40 Soundbar | 348.00 € | **348.50 €** | 12.9 % | **13.1 %** | 348.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT343D tester hrúbky farby | 87.50 € | **88.00 €** | 5.6 % | **6.2 %** | 87.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT161D | 67.00 € | **67.50 €** | 9.0 % | **9.8 %** | 67.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256A | 45.00 € | **45.50 €** | 10.6 % | **11.9 %** | 45.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 58.50 € | **59.00 €** | 11.0 % | **11.9 %** | 58.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 472.50 € | **473.00 €** | 9.2 % | **9.3 %** | 472.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 542.00 € | **542.50 €** | 6.4 % | **6.5 %** | 542.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.00 € | **25.50 €** | 12.8 % | **15.0 %** | 25.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM1000 | 97.00 € | **97.50 €** | 12.4 % | **13.0 %** | 97.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM100A | 31.50 € | **32.00 €** | 6.0 % | **7.7 %** | 31.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer UNI-T LM70A | 24.50 € | **25.00 €** | 5.2 % | **7.4 %** | 24.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač vzdialenosti UNI-T LM120A | 42.00 € | **42.50 €** | 5.5 % | **6.7 %** | 42.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor kovov UNI-T UT387E | 45.00 € | **45.50 €** | 10.1 % | **11.3 %** | 45.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nástenný skener Uni-T UT387S | 91.00 € | **91.50 €** | 12.8 % | **13.4 %** | 91.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Viacúčelový čistič na podlahy MOVA P10 Ultra, P10 Pr... | 21.00 € | **21.50 €** | 9.9 % | **12.6 %** | 21.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 334.00 € | **334.50 €** | 13.3 % | **13.5 %** | 334.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff MINIR4M Matter smart WiFi mini switch (HomeKi... | 11.00 € | **11.50 €** | 12.1 % | **17.2 %** | 11.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Poseidon D80 BOOM Soundbar | 255.00 € | **255.50 €** | 14.0 % | **14.2 %** | 255.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D Tlačiareň Creality CR-10 SE | 188.00 € | **188.50 €** | 14.1 % | **14.4 %** | 188.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skrinka Darkflash B351 | 17.00 € | **17.50 €** | 5.8 % | **8.9 %** | 17.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny univerzálny multimeter Habotest HT127B | 17.00 € | **17.50 €** | 10.7 % | **14.0 %** | 17.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.00 € | **17.50 €** | 10.4 % | **13.6 %** | 17.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 21.00 € | **21.50 €** | 13.2 % | **15.9 %** | 21.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 24.00 € | **24.50 €** | 8.2 % | **10.5 %** | 24.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 24.00 € | **24.50 €** | 8.2 % | **10.5 %** | 24.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový mikrofón PULUZ PU647B | 25.00 € | **25.50 €** | 8.3 % | **10.5 %** | 25.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.00 € | **21.50 €** | 12.4 % | **15.1 %** | 21.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.00 € | **29.50 €** | 13.0 % | **14.9 %** | 29.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 118.00 € | **118.50 €** | 9.5 % | **9.9 %** | 118.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 118.00 € | **118.50 €** | 9.5 % | **9.9 %** | 118.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 40.00 € | **40.50 €** | 10.1 % | **11.4 %** | 40.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 40.00 € | **40.50 €** | 10.1 % | **11.4 %** | 40.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 119.00 € | **119.50 €** | 13.4 % | **13.9 %** | 119.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.00 € | **37.50 €** | 13.9 % | **15.4 %** | 37.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skúšačka napätia AC/DC UNI-T UT22B-EU | 14.00 € | **14.50 €** | 9.9 % | **13.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT658DUAL tester zásuviek USB | 12.00 € | **12.50 €** | 9.3 % | **13.8 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti UNI-T UT333S | 23.50 € | **24.00 €** | 12.0 % | **14.4 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 88.00 € | **88.50 €** | 13.8 % | **14.4 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX TT600 | 77.00 € | **77.50 €** | 8.7 % | **9.4 %** | 77.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 32.00 € | **32.50 €** | 9.5 % | **11.2 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 240.00 € | **240.50 €** | 13.0 % | **13.2 %** | 240.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier R1100 2.0 (čierne) | 74.00 € | **74.50 €** | 8.4 % | **9.1 %** | 74.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GODOX SB-USW80120 Softbox s dáždnikom | 61.00 € | **61.50 €** | 6.0 % | **6.9 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Cyberpad (modrý) | 451.00 € | **451.50 €** | 9.4 % | **9.6 %** | 451.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové okuliare ZEBLAZE Q01 Green AI | 64.00 € | **64.50 €** | 8.8 % | **9.7 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové okuliare ZEBLAZE Q01 s umelou inteligenciou... | 64.00 € | **64.50 €** | 8.8 % | **9.7 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 74.00 € | **74.50 €** | 12.8 % | **13.6 %** | 74.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 35.1 % | **38.4 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.50 €** | 18.8 % | **20.7 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **15.50 €** | 26.6 % | **30.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.00 € | **15.50 €** | 41.1 % | **45.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.00 € | **21.50 €** | 7.0 % | **9.6 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.00 € | **15.50 €** | 10.5 % | **14.1 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **21.50 €** | 26.4 % | **29.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **14.50 €** | 29.0 % | **33.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 39.00 € | **39.50 €** | 31.7 % | **33.4 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.50 € | **14.00 €** | 31.6 % | **36.5 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.00 € | **27.50 €** | 32.0 % | **34.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 155.50 € | **156.00 €** | 5.8 % | **6.1 %** | 155.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L6 | 151.00 € | **151.50 €** | 5.5 % | **5.9 %** | 151.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 051690000 | 64.00 € | **64.50 €** | 9.5 % | **10.3 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Smartdust | 132.00 € | **132.50 €** | 5.1 % | **5.5 %** | 132.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **13.00 €** | 16.7 % | **21.3 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 285.00 € | **285.50 €** | 9.5 % | **9.7 %** | 285.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 68.00 € | **68.50 €** | 7.1 % | **7.8 %** | 68.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 14.00 € | **14.50 €** | 33.9 % | **38.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **23.50 €** | 26.3 % | **29.0 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.00 € | **12.50 €** | 17.5 % | **22.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.00 € | **24.50 €** | 23.9 % | **26.5 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 10.00 € | **10.50 €** | 23.6 % | **29.7 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.00 € | **22.50 €** | 28.9 % | **31.8 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 23.6 % | **25.1 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 25m,... | 37.00 € | **37.50 €** | 17.2 % | **18.8 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, vonk... | 82.00 € | **82.50 €** | 17.5 % | **18.2 %** | 82.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.20 € | **4.70 €** | 35.5 % | **51.6 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.50 € | **14.00 €** | 7.4 % | **11.4 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LAMAX SoundKid1 pink | 15.50 € | **16.00 €** | 7.6 % | **11.1 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.00 € | **18.50 €** | 28.0 % | **31.6 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 60.00 € | **60.50 €** | 36.0 % | **37.2 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5S/1/4U | 47.00 € | **47.50 €** | 6.6 % | **7.8 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 104.50 € | **105.00 €** | 9.5 % | **10.0 %** | 104.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.50 € | **177.00 €** | 7.4 % | **7.7 %** | 176.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 221.50 € | **222.00 €** | 7.8 % | **8.1 %** | 221.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 92.50 € | **92.90 €** | 11.3 % | **11.8 %** | 92.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| LONGER RAY5 mini 2,5 W laserový gravírovací stroj | 92.50 € | **92.90 €** | 14.3 % | **14.8 %** | 92.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7S (žltý) | 159.50 € | **159.90 €** | 13.7 % | **14.0 %** | 159.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný dávkovač krmiva CatLink F04 STD | 108.50 € | **108.90 €** | 13.6 % | **14.0 %** | 108.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF NSPanel Pro 120 Smart Control Panel Matter Wi... | 108.50 € | **108.90 €** | 10.6 % | **11.0 %** | 108.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Clutch Pedal Moza Racing CRP2 RS067 | 102.50 € | **102.90 €** | 11.4 % | **11.8 %** | 102.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.50 € | **88.90 €** | 5.7 % | **6.2 %** | 88.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| LONGER RAY5 mini 3,5 W laserový gravír | 103.50 € | **103.90 €** | 13.8 % | **14.2 %** | 103.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu Uni-T UT533 | 208.50 € | **208.90 €** | 14.0 % | **14.2 %** | 208.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu Uni-T UT501B | 77.50 € | **77.90 €** | 10.9 % | **11.5 %** | 77.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nástenný skener Uni-T UT387LM | 75.50 € | **75.90 €** | 12.4 % | **13.0 %** | 75.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 179.50 € | **179.90 €** | 13.2 % | **13.4 %** | 179.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 119.50 € | **119.90 €** | 10.2 % | **10.6 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 139.50 € | **139.90 €** | 7.9 % | **8.2 %** | 139.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 65.50 € | **65.90 €** | 9.3 % | **10.0 %** | 65.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Poseidon D70 Soundbar | 159.50 € | **159.90 €** | 10.2 % | **10.5 %** | 159.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultima Apollo S70 Ultra Soundbar | 199.50 € | **199.90 €** | 12.0 % | **12.2 %** | 199.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Shifter Moza Racing HGP RS039 | 149.50 € | **149.90 €** | 11.4 % | **11.7 %** | 149.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 21.1 % | **21.9 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.50 € | **10.90 €** | 7.8 % | **11.9 %** | 10.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.50 € | **14.90 €** | 12.6 % | **15.7 %** | 14.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná žiarovka Yeelight W1 GU10 (Biela) | 15.50 € | **15.90 €** | 10.7 % | **13.6 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.50 € | **11.90 €** | 10.5 % | **14.4 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 12.50 € | **12.90 €** | 16.0 % | **19.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zvuková karta Maono G1 Neo (biela) | 44.50 € | **44.90 €** | 13.8 % | **14.8 %** | 44.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Colmi V69 smartwatch (black) | 39.50 € | **39.90 €** | 12.1 % | **13.2 %** | 39.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Colmi P86 (strieborné) | 20.50 € | **20.90 €** | 11.9 % | **14.0 %** | 20.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash M305 bez ventilátorov (č... | 19.50 € | **19.90 €** | 13.7 % | **16.1 %** | 19.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 20.50 € | **20.90 €** | 10.5 % | **12.7 %** | 20.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterka Superfire TF02 | 63.50 € | **63.90 €** | 14.4 % | **15.1 %** | 63.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cyklocomputer Cycplus M3 - kompatibilný s: Strava, T... | 33.50 € | **33.90 €** | 6.9 % | **8.2 %** | 33.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 16.50 € | **16.90 €** | 9.0 % | **11.6 %** | 16.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash Q15 | 16.50 € | **16.90 €** | 12.3 % | **15.0 %** | 16.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 33.50 € | **33.90 €** | 11.3 % | **12.6 %** | 33.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF MINI-ZB2GSL-EDvojkanálový nástenný spínač Zig... | 22.50 € | **22.90 €** | 11.1 % | **13.0 %** | 22.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.50 € | **36.90 €** | 12.0 % | **13.2 %** | 36.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky Clip C30S (červené) | 35.50 € | **35.90 €** | 12.1 % | **13.3 %** | 35.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 35.50 € | **35.90 €** | 12.1 % | **13.3 %** | 35.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| EMEET SmartCam S600 webová kamera | 51.50 € | **51.90 €** | 13.5 % | **14.4 %** | 51.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Latarka Superfire L3 P90 | 29.50 € | **29.90 €** | 13.4 % | **14.9 %** | 29.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 32.50 € | **32.90 €** | 8.6 % | **9.9 %** | 32.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa DarkFlash DS900WD (biela) | 47.50 € | **47.90 €** | 8.9 % | **9.8 %** | 47.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 24.50 € | **24.90 €** | 8.4 % | **10.2 %** | 24.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Diagnostic Scanner OBD2 Ancel AD310/AC103 | 22.50 € | **22.90 €** | 6.6 % | **8.5 %** | 22.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 46.50 € | **46.90 €** | 10.6 % | **11.5 %** | 46.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40Mi | 27.50 € | **27.90 €** | 12.5 % | **14.1 %** | 27.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anemometer UNI-T UT363S | 28.50 € | **28.90 €** | 7.6 % | **9.1 %** | 28.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti Uni-T UT332+ | 60.50 € | **60.90 €** | 11.2 % | **11.9 %** | 60.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 58.50 € | **58.90 €** | 12.2 % | **13.0 %** | 58.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 48.50 € | **48.90 €** | 12.4 % | **13.4 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dotykový vypínač svetla ZigBee Avatto TS60-EU-W1 Sin... | 20.50 € | **20.90 €** | 12.2 % | **14.4 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 44.50 € | **44.90 €** | 9.0 % | **10.0 %** | 44.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 44.50 € | **44.90 €** | 9.0 % | **10.0 %** | 44.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 35.50 € | **35.90 €** | 31.9 % | **33.4 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **16.90 €** | 32.2 % | **35.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **21.90 €** | 10.1 % | **12.1 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **49.90 €** | 10.0 % | **10.8 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **28.90 €** | 20.3 % | **22.0 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.50 € | **39.90 €** | 15.0 % | **16.1 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 29.50 € | **29.90 €** | 32.6 % | **34.4 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, čierna | 30.50 € | **30.90 €** | 37.1 % | **38.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 37.50 € | **37.90 €** | 12.7 % | **13.9 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.50 € | **31.90 €** | 37.0 % | **38.7 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.50 € | **54.90 €** | 37.3 % | **38.3 %** | 54.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **34.90 €** | 16.3 % | **17.7 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **21.90 €** | 22.3 % | **24.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.50 € | **45.90 €** | 40.3 % | **41.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight laserový merač vzdálenosti, 0,05 - 40m | 16.50 € | **16.90 €** | 14.7 % | **17.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.50 € | **16.90 €** | 29.7 % | **32.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 23.50 € | **23.90 €** | 16.1 % | **18.1 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.50 € | **63.90 €** | 16.4 % | **17.1 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.50 € | **41.90 €** | 33.6 % | **34.9 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 58.50 € | **58.90 €** | 34.7 % | **35.6 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **34.90 €** | 25.1 % | **26.6 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.50 € | **55.90 €** | 35.5 % | **36.4 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 48.50 € | **48.90 €** | 20.0 % | **20.9 %** | 48.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 22dB | 18.50 € | **18.90 €** | 26.6 % | **29.3 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 17.50 € | **17.90 €** | 25.8 % | **28.7 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.50 € | **21.90 €** | 19.6 % | **21.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 799.50 € | **799.90 €** | 14.3 % | **14.3 %** | 799.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 870.50 € | **870.90 €** | 14.8 % | **14.8 %** | 870.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| OBSBOT Tiny 3 MIC Combo | 468.50 € | **468.90 €** | 12.7 % | **12.8 %** | 468.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robotický čistič okien MOVA N1 (biely) | 285.50 € | **285.90 €** | 14.1 % | **14.3 %** | 285.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant MOZA RACING KS Pro RS095 | 346.50 € | **346.90 €** | 13.1 % | **13.2 %** | 346.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.10 € | **4.40 €** | 35.0 % | **44.8 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 4.70 € | **5.00 €** | 35.0 % | **43.6 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.50 € | **7.80 €** | 36.4 % | **41.9 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **5.30 €** | 36.0 % | **44.1 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.40 €** | 15.4 % | **20.9 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 7.30 € | **7.50 €** | 10.5 % | **13.5 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.70 €** | 30.7 % | **36.5 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.40 €** | 15.8 % | **21.3 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.60 €** | 31.5 % | **34.3 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Creality Hi Combo | 324.90 € | **325.00 €** | 5.6 % | **5.6 %** | 324.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov WYBOT M1C | 669.90 € | **670.00 €** | 5.4 % | **5.5 %** | 670.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 329.90 € | **330.00 €** | 13.5 % | **13.6 %** | 330.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Creality K2 Combo | 498.90 € | **499.00 €** | 7.7 % | **7.7 %** | 499.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Jupiter 2 | 848.90 € | **849.00 €** | 8.3 % | **8.3 %** | 849.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Creality Falcon 2 Pro S 22W laserový gravírovací stroj | 757.90 € | **758.00 €** | 6.4 % | **6.4 %** | 758.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 258.90 € | **259.00 €** | 9.0 % | **9.1 %** | 259.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 889.90 € | **890.00 €** | 7.3 % | **7.3 %** | 890.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X50 Soundbar | 408.90 € | **409.00 €** | 11.2 % | **11.3 %** | 409.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X60 Soundbar | 498.90 € | **499.00 €** | 8.2 % | **8.3 %** | 499.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultima Apollo S90 Soundbar | 308.90 € | **309.00 €** | 8.7 % | **8.8 %** | 309.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera OBSBOT Tiny 3 | 348.90 € | **349.00 €** | 6.3 % | **6.4 %** | 349.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 498.90 € | **499.00 €** | 7.7 % | **7.7 %** | 499.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 998.90 € | **999.00 €** | 7.7 % | **7.7 %** | 999.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 378.90 € | **379.00 €** | 8.2 % | **8.2 %** | 379.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 479.90 € | **480.00 €** | 11.6 % | **11.6 %** | 480.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 757.90 € | **758.00 €** | 11.4 % | **11.4 %** | 758.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus T2 smart bike trainer | 589.90 € | **590.00 €** | 10.2 % | **10.2 %** | 590.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cyklotrenažér Cycplus T3 | 828.90 € | **829.00 €** | 12.2 % | **12.2 %** | 829.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný cyklotrenažér Cycplus T2H | 384.90 € | **385.00 €** | 8.6 % | **8.6 %** | 385.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Waydoo Underwater scooter Subnado Lite | 318.90 € | **319.00 €** | 14.3 % | **14.3 %** | 319.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy TCA273D3-S | 280.90 € | **281.00 €** | 7.9 % | **7.9 %** | 280.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svietidlo Yeelight C2201C300 | 41.90 € | **42.00 €** | 6.6 % | **6.9 %** | 41.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 46.90 € | **47.00 €** | 14.3 % | **14.6 %** | 46.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 53.90 € | **54.00 €** | 10.5 % | **10.7 %** | 53.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk GPS (sivé) | 41.90 € | **42.00 €** | 11.8 % | **12.1 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 16.90 € | **17.00 €** | 9.1 % | **9.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 26.90 € | **27.00 €** | 9.6 % | **10.0 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 27.90 € | **28.00 €** | 11.7 % | **12.1 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **49.00 €** | 15.2 % | **15.4 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.90 € | **18.00 €** | 23.5 % | **24.2 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 57.90 € | **58.00 €** | 29.3 % | **29.5 %** | 57.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 48.90 € | **49.00 €** | 24.5 % | **24.8 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 25.8 % | **26.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Air Board M Compact | 54.90 € | **55.00 €** | 8.9 % | **9.1 %** | 54.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 21.90 € | **22.00 €** | 28.8 % | **29.4 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.90 € | **23.00 €** | 38.6 % | **39.2 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-LINK Tapo C100 WiFi camera | 22.90 € | **23.00 €** | 6.4 % | **6.9 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.70 € | **8.80 €** | 8.2 % | **9.4 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **18.00 €** | 33.6 % | **34.4 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.90 € | **20.00 €** | 24.1 % | **24.7 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.90 € | **25.00 €** | 22.4 % | **22.9 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.90 € | **29.00 €** | 23.5 % | **23.9 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **34.00 €** | 25.7 % | **26.1 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 36.90 € | **37.00 €** | 8.6 % | **8.9 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **5.20 €** | 18.1 % | **20.4 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.80 € | **5.90 €** | 16.4 % | **18.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.80 € | **5.90 €** | 16.4 % | **18.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.80 € | **6.90 €** | 32.6 % | **34.5 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, bi... | 6.30 € | **6.40 €** | 32.7 % | **34.8 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.40 €** | 24.3 % | **26.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.40 €** | 5.4 % | **7.1 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.30 € | **6.40 €** | 34.8 % | **36.9 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **6.20 €** | 21.9 % | **23.8 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.30 € | **4.40 €** | 8.6 % | **11.1 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.60 € | **6.70 €** | 11.6 % | **13.2 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.90 €** | 42.9 % | **45.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely | 1.90 € | **2.00 €** | 8.8 % | **14.5 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.20 €** | 16.9 % | **22.5 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.20 €** | 27.9 % | **32.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.00 €** | 19.7 % | **23.8 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka plochá priama, IP20, čierna | 0.70 € | **0.80 €** | 18.6 % | **35.5 %** | 0.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.20 € | **1.30 €** | 13.4 % | **22.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.50 € | **2.60 €** | 31.1 % | **36.4 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.50 € | **3.60 €** | 18.1 % | **21.4 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.40 € | **3.50 €** | 16.6 % | **20.1 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.90 € | **2.00 €** | 17.0 % | **23.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.90 €** | 17.1 % | **23.6 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| LED lampa Puluz pre fotoaparát 860 lúmenov | 11.90 € | **12.00 €** | 6.4 % | **7.3 %** | 11.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.60 € | **9.70 €** | 12.1 % | **13.3 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **13.00 €** | 37.5 % | **38.5 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.90 € | **9.00 €** | 22.0 % | **23.4 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.40 €** | 34.3 % | **35.7 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.80 € | **9.90 €** | 26.9 % | **28.2 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.00 € | **5.10 €** | 33.3 % | **35.9 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.00 € | **6.10 €** | 30.4 % | **32.6 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **9.70 €** | 33.2 % | **34.6 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.40 €** | 25.6 % | **26.9 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.20 € | **4.30 €** | 35.5 % | **38.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.00 €** | 19.0 % | **19.8 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka s LCD displejom, AC 230V, 450mA, 4... | 13.90 € | **14.00 €** | 7.8 % | **8.6 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.00 € | **7.10 €** | 20.3 % | **22.0 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.40 € | **7.50 €** | 37.0 % | **38.9 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.50 € | **8.60 €** | 35.0 % | **36.6 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.20 € | **5.30 €** | 25.8 % | **28.2 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.70 € | **3.80 €** | 33.1 % | **36.7 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.00 € | **5.10 €** | 34.6 % | **37.3 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 6.70 € | **6.80 €** | 17.9 % | **19.7 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 9.80 € | **9.90 €** | 10.2 % | **11.3 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 11.8 % | **13.4 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.10 € | **9.20 €** | 11.8 % | **13.0 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W COB, 3x AAA | 3.70 € | **3.80 €** | 10.2 % | **13.2 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 122.90 € | **123.00 €** | 7.8 % | **7.9 %** | 123.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roborock Q10 PF čistiaci robot (čierny) | 217.90 € | **218.00 €** | 14.4 % | **14.5 %** | 218.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 88.90 € | **89.00 €** | 6.9 % | **7.1 %** | 89.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná batéria pre DJI Mini 5 Pro | 80.90 € | **81.00 €** | 6.7 % | **6.9 %** | 81.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 238.90 € | **239.00 €** | 5.2 % | **5.3 %** | 239.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 243.90 € | **244.00 €** | 14.1 % | **14.1 %** | 244.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **79.00 €** | 15.3 % | **15.5 %** | 78.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **69.00 €** | 29.4 % | **29.6 %** | 68.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačový list ELEGOO OrangeStorm Giga | 2678.90 € | **2679.00 €** | 13.8 % | **13.8 %** | 2678.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1330.00 €** | 13.3 % | **13.3 %** | 1330.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3499.90 € | **3500.00 €** | 12.2 % | **12.2 %** | 3500.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (665)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| YAMAHA R-N2000A BLACK | 3890.00 € | **3312.50 €** | 28.3 % | **9.3 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.50 €** | 27.9 % | **9.0 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N1000A BLACK | 1599.00 € | **1367.00 €** | 27.8 % | **9.3 %** | 1367.23 € | stávame sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1367.00 €** | 24.2 % | **6.2 %** | 1367.23 € | stávame sa najlacnejší |
| Yamaha RX-A6A BLACK | 2799.00 € | **2576.00 €** | 18.7 % | **9.3 %** | 2576.04 € | stávame sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 64.7 % | **6.8 %** | 362.65 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 559.00 € | **365.50 €** | 67.6 % | **9.6 %** | 365.87 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.00 €** | 15.0 % | **6.6 %** | 2374.50 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **3020.00 €** | 15.0 % | **10.0 %** | 3020.50 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **354.00 €** | 39.7 % | **6.3 %** | 354.05 € | stávame sa najlacnejší |
| Yamaha YHT-4960 BLACK | 899.00 € | **792.00 €** | 24.0 % | **9.3 %** | 792.22 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| Beko BDFS26120XQ | 419.00 € | **328.00 €** | 36.6 % | **6.9 %** | 328.06 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **511.50 €** | 24.2 % | **6.1 %** | 511.63 € | stávame sa najlacnejší |
| YAMAHA A-S1200 BLACK | 2399.00 € | **2315.50 €** | 13.2 % | **9.3 %** | 2315.65 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.50 €** | 13.1 % | **9.1 %** | 2315.65 € | stávame sa najlacnejší |
| Gorenje RK4182PW4 | 359.00 € | **281.00 €** | 36.1 % | **6.5 %** | 281.12 € | stávame sa najlacnejší |
| Gorenje R4142PS | 319.00 € | **248.00 €** | 38.9 % | **8.0 %** | 248.20 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 8" (200/1200) | 764.50 € | **699.90 €** | 15.0 % | **5.3 %** | 699.95 € | stávame sa najlacnejší |
| Gorenje W2PNEI84A1SW | 439.00 € | **379.50 €** | 35.3 % | **16.9 %** | 379.82 € | stávame sa najlacnejší |
| JBL PartyBox Ultimate | 1279.50 € | **1221.50 €** | 10.0 % | **5.0 %** | 1175.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 679.50 € | **629.00 €** | 15.0 % | **6.4 %** | 629.40 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 637.00 € | **589.90 €** | 15.0 % | **6.5 %** | 589.94 € | stávame sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **496.90 €** | 15.0 % | **5.1 %** | 497.00 € | stávame sa najlacnejší |
| Gorenje RK4182PS4 | 379.00 € | **332.50 €** | 26.3 % | **10.8 %** | 332.63 € | stávame sa najlacnejší |
| Geneinno T1 200m 4K UHD podvodný dron | 1966.50 € | **1921.90 €** | 15.0 % | **12.4 %** | 1922.00 € | stávame sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 594.50 € | **553.50 €** | 15.0 % | **7.0 %** | 553.82 € | stávame sa najlacnejší |
| YAMAHA NS-SW050 BLACK | 239.00 € | **198.50 €** | 31.5 % | **9.2 %** | 198.58 € | stávame sa najlacnejší |
| YAMAHA A-S701 BLACK | 849.00 € | **808.50 €** | 14.7 % | **9.3 %** | 808.61 € | stávame sa najlacnejší |
| Gorenje R619EAXL6 | 599.00 € | **558.90 €** | 26.2 % | **17.7 %** | 559.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot C1 Pro | 455.00 € | **415.90 €** | 15.0 % | **5.1 %** | 416.00 € | stávame sa najlacnejší |
| Xiaomi 17T 12/512GB Fialová | 779.90 € | **744.50 €** | 10.0 % | **5.0 %** | 569.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T 12/512GB Modrá | 779.90 € | **744.50 €** | 10.0 % | **5.0 %** | 582.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| Chladící box kompresor SILVER DUAL 40l 230/24/12V -2... | 390.90 € | **357.00 €** | 15.0 % | **5.0 %** | 332.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-777 BLACK 2 kartony | 849.00 € | **816.90 €** | 9.2 % | **5.0 %** | 439.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 100 | 382.00 € | **349.90 €** | 15.0 % | **5.3 %** | 349.95 € | stávame sa najlacnejší |
| Gorenje NRK6182PW4 | 379.99 € | **347.90 €** | 16.7 % | **6.9 %** | 348.00 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE MAK 80/850 AZ-M | 360.90 € | **329.90 €** | 15.0 % | **5.2 %** | 329.95 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 399.00 € | **369.00 €** | 15.0 % | **6.3 %** | 369.07 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Centauri Carbon | 333.90 € | **304.90 €** | 15.1 % | **5.1 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 416.90 € | **388.90 €** | 15.0 % | **7.3 %** | 389.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 434.50 € | **407.90 €** | 15.0 % | **7.9 %** | 408.00 € | stávame sa najlacnejší |
| JBL PartyBox 330W | 563.50 € | **537.90 €** | 10.0 % | **5.0 %** | 537.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 359.50 € | **333.90 €** | 14.9 % | **6.8 %** | 334.00 € | stávame sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **574.00 €** | 10.9 % | **6.3 %** | 574.16 € | stávame sa najlacnejší |
| YAMAHA CD-C603 SILVER | 599.00 € | **574.00 €** | 12.2 % | **7.5 %** | 574.16 € | stávame sa najlacnejší |
| LG FCR5A85WW | 534.50 € | **510.00 €** | 10.1 % | **5.0 %** | 495.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept ETV8560bcN | 510.90 € | **487.50 €** | 10.1 % | **5.0 %** | 426.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 928.50 € | **905.50 €** | 10.0 % | **7.3 %** | 905.67 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 912.50 € | **889.90 €** | 10.1 % | **7.3 %** | 889.92 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| UREVO FoldiMix 5L Pro elektrický bežecký pás (strieb... | 518.50 € | **496.90 €** | 15.0 % | **10.2 %** | 497.00 € | stávame sa najlacnejší |
| Samsung The Frame Pro QE55LS03HW | 1390.00 € | **1368.90 €** | 8.8 % | **7.1 %** | 1369.00 € | stávame sa najlacnejší |
| Candy BR 9N3BX-S | 461.90 € | **440.90 €** | 10.1 % | **5.1 %** | 427.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| Apple MacBook Neo 8/256GB blush MHFH4CZ | 841.00 € | **820.50 €** | 10.0 % | **7.3 %** | 820.67 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **79.00 €** | 33.7 % | **6.7 %** | 79.20 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 268.00 € | **249.00 €** | 14.9 % | **6.8 %** | 249.33 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 65.00 € | **46.00 €** | 58.6 % | **12.3 %** | 46.50 € | stávame sa najlacnejší |
| Creality Ender-3 V3 Plus 3D Printer | 348.00 € | **329.50 €** | 11.0 % | **5.1 %** | 324.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 297.00 € | **278.90 €** | 15.0 % | **8.0 %** | 278.99 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **464.00 €** | 10.0 % | **6.0 %** | 464.19 € | stávame sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| Gramofon KRUGER & MATZ TT-602 | 203.90 € | **186.90 €** | 15.0 % | **5.4 %** | 187.00 € | stávame sa najlacnejší |
| Niceboy HIVE Beans Black | 34.90 € | **18.00 €** | 126.3 % | **16.7 %** | 18.12 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 275.90 € | **259.00 €** | 15.0 % | **8.0 %** | 259.28 € | stávame sa najlacnejší |
| LONGER RAY5 minis 3,5 W laserový gravír | 195.50 € | **178.90 €** | 14.9 % | **5.1 %** | 146.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 279.50 € | **263.00 €** | 15.1 % | **8.3 %** | 263.50 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 195.00 € | **178.90 €** | 15.0 % | **5.5 %** | 179.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá ONEODIO Studio Max 2 (čierne) | 187.50 € | **171.50 €** | 15.0 % | **5.2 %** | 143.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 199.50 € | **183.90 €** | 15.1 % | **6.1 %** | 184.00 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 458.50 € | **443.00 €** | 10.1 % | **6.4 %** | 443.01 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **397.00 €** | 10.1 % | **6.1 %** | 397.09 € | stávame sa najlacnejší |
| Flytec V060 12000mah návnada loď | 172.00 € | **157.50 €** | 14.9 % | **5.2 %** | 118.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB Pad 13 (zelený) | 172.00 € | **157.50 €** | 14.9 % | **5.2 %** | 125.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB Pad 13 Pro (sivý) | 163.90 € | **149.90 €** | 15.0 % | **5.2 %** | 133.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 423.90 € | **409.90 €** | 14.9 % | **11.1 %** | 410.00 € | stávame sa najlacnejší |
| Gorenje GV673B65 | 487.50 € | **473.90 €** | 10.1 % | **7.0 %** | 473.99 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 173.50 € | **159.90 €** | 15.1 % | **6.0 %** | 159.95 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **362.00 €** | 10.0 % | **6.1 %** | 362.05 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **39.00 €** | 50.5 % | **11.8 %** | 39.16 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **158.50 €** | 14.8 % | **5.8 %** | 158.90 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| AMICA 510CE1.30P(W) | 281.90 € | **269.00 €** | 10.0 % | **5.0 %** | 258.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 182.50 € | **169.90 €** | 15.1 % | **7.2 %** | 169.95 € | stávame sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| Homatics Box 4K Pro V2 AI-SR Google TV (USB 2.0, USB... | 192.00 € | **179.50 €** | 14.9 % | **7.4 %** | 179.90 € | stávame sa najlacnejší |
| Guzzanti GZ 195 | 429.00 € | **416.90 €** | 8.0 % | **5.0 %** | 343.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 251.90 € | **239.90 €** | 15.0 % | **9.5 %** | 239.95 € | stávame sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.00 € | **134.50 €** | 15.0 % | **5.9 %** | 134.90 € | stávame sa najlacnejší |
| Samsung OLED QE48S85H | 680.00 € | **668.90 €** | 11.6 % | **9.8 %** | 669.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z20 | 359.00 € | **347.90 €** | 15.0 % | **11.4 %** | 348.00 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 240.00 € | **229.00 €** | 14.9 % | **9.7 %** | 229.20 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **31.00 €** | 48.1 % | **9.3 %** | 31.21 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| Whirlpool FFS 7469 W EE | 374.50 € | **364.00 €** | 10.1 % | **7.0 %** | 364.20 € | stávame sa najlacnejší |
| Tesla 40E635BFS 40" FHD LED AndroidTV 11 | 224.90 € | **214.50 €** | 10.2 % | **5.1 %** | 184.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **196.90 €** | 14.9 % | **9.3 %** | 197.00 € | stávame sa najlacnejší |
| ETA 006890000 | 59.99 € | **49.90 €** | 26.4 % | **5.1 %** | 47.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Měnič napětí EPever IPower IP2000-42-Plus-T 2000W 48V | 219.50 € | **209.50 €** | 15.1 % | **9.9 %** | 209.52 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 959.90 € | **949.90 €** | 12.2 % | **11.0 %** | 950.00 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.50 €** | 10.1 % | **7.0 %** | 347.60 € | stávame sa najlacnejší |
| TEFAL FR 495070 | 109.00 € | **99.00 €** | 21.5 % | **10.3 %** | 99.20 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Army 10x40 se zaměřo... | 118.50 € | **108.50 €** | 14.9 % | **5.2 %** | 108.74 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 284.50 € | **274.50 €** | 10.0 % | **6.2 %** | 274.77 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.17 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 169.50 € | **159.90 €** | 15.0 % | **8.5 %** | 160.00 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 60/700 AZ2 | 157.00 € | **147.50 €** | 14.9 % | **8.0 %** | 147.53 € | stávame sa najlacnejší |
| Whirlpool W7F HP33 A | 347.00 € | **337.50 €** | 10.0 % | **7.0 %** | 337.60 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 424.50 € | **415.00 €** | 10.0 % | **7.6 %** | 415.21 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 152.50 € | **143.00 €** | 14.9 % | **7.8 %** | 143.29 € | stávame sa najlacnejší |
| Orbitrek REBEL ACTIVE RBA-1011 | 143.50 € | **134.00 €** | 14.9 % | **7.3 %** | 134.32 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 148.50 € | **139.00 €** | 15.1 % | **7.8 %** | 139.41 € | stávame sa najlacnejší |
| Evolveo StrongVision PRO 4G, fotopast | 223.90 € | **214.50 €** | 10.0 % | **5.4 %** | 214.79 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCR001CBK SmartLife | 133.90 € | **124.50 €** | 15.1 % | **7.1 %** | 124.90 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 204.90 € | **195.50 €** | 15.0 % | **9.7 %** | 195.90 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 332.90 € | **323.50 €** | 10.1 % | **7.0 %** | 323.72 € | stávame sa najlacnejší |
| ETA 142390000 | 39.99 € | **30.90 €** | 45.1 % | **12.1 %** | 30.96 € | stávame sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 426.50 € | **417.50 €** | 15.0 % | **12.5 %** | 417.60 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **279.90 €** | 15.0 % | **11.4 %** | 280.00 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD310FBK / 2.7 l / di... | 116.00 € | **107.00 €** | 14.0 % | **5.2 %** | 107.19 € | stávame sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 172.00 € | **163.00 €** | 15.0 % | **9.0 %** | 163.50 € | stávame sa najlacnejší |
| Rádio outdoorové NEDIS RDDB3100GN | 107.50 € | **98.90 €** | 14.2 % | **5.0 %** | 98.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| Krups XN9404F0 | 170.90 € | **162.90 €** | 10.2 % | **5.1 %** | 107.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 09B2 | 186.50 € | **178.50 €** | 10.0 % | **5.3 %** | 162.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Echosonda Flytec XJ-01 Fishfinder | 94.90 € | **86.90 €** | 15.0 % | **5.3 %** | 82.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox 330 | 544.90 € | **536.90 €** | 7.9 % | **6.4 %** | 537.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **422.90 €** | 15.0 % | **12.9 %** | 423.00 € | stávame sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **331.00 €** | 15.0 % | **12.4 %** | 331.01 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 112.50 € | **105.00 €** | 15.0 % | **7.4 %** | 105.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A6 (čierne) | 86.00 € | **78.90 €** | 14.9 % | **5.5 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 90B1 | 160.50 € | **153.50 €** | 10.1 % | **5.3 %** | 126.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 221.00 € | **214.00 €** | 10.0 % | **6.5 %** | 214.02 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP WL HD | 86.50 € | **79.50 €** | 15.3 % | **5.9 %** | 79.90 € | stávame sa najlacnejší |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - komp... | 190.50 € | **183.50 €** | 14.9 % | **10.7 %** | 183.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.90 € | **188.00 €** | 10.1 % | **6.2 %** | 188.22 € | stávame sa najlacnejší |
| Gorenje GV561C10 | 339.00 € | **332.50 €** | 7.1 % | **5.0 %** | 319.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio OpenRock S2 (blackE) | 80.00 € | **73.50 €** | 14.8 % | **5.4 %** | 64.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TV anténa Televes ELLIPSE LTE700 + 12V zdroj Picokom | 122.00 € | **115.50 €** | 14.8 % | **8.7 %** | 115.70 € | stávame sa najlacnejší |
| Maxxo Chamber Line 40 | 251.50 € | **245.00 €** | 10.1 % | **7.3 %** | 245.29 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 47.50 € | **41.00 €** | 38.3 % | **19.3 %** | 41.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.00 €** | 15.2 % | **9.5 %** | 124.50 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| Rowenta RH6A35WO | 135.90 € | **129.50 €** | 10.3 % | **5.1 %** | 128.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **197.50 €** | 10.2 % | **6.7 %** | 197.52 € | stávame sa najlacnejší |
| Zátěžová vesta HMS KOR20 20 kg | 86.90 € | **80.50 €** | 15.0 % | **6.6 %** | 80.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **327.90 €** | 15.0 % | **12.9 %** | 328.00 € | stávame sa najlacnejší |
| Gorenje NRK619DA2XL4 | 475.00 € | **468.90 €** | 6.4 % | **5.1 %** | 469.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A6 (biele) | 71.90 € | **65.90 €** | 15.0 % | **5.4 %** | 54.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rojeco PD529 1000m výcvikový obojok pre psov s 2 obo... | 71.90 € | **65.90 €** | 15.0 % | **5.4 %** | 58.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WSAP84AWI | 366.50 € | **360.50 €** | 6.9 % | **5.1 %** | 352.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| Rowenta RH6A75WO | 163.50 € | **157.90 €** | 8.8 % | **5.1 %** | 156.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 80.50 € | **74.90 €** | 15.3 % | **7.2 %** | 74.94 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 10x42 | 160.50 € | **154.90 €** | 15.1 % | **11.1 %** | 154.99 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 156.00 € | **150.50 €** | 15.0 % | **10.9 %** | 150.61 € | stávame sa najlacnejší |
| Solární powerbanka OXE SPB33-B 33800 mAh | 104.50 € | **99.00 €** | 15.0 % | **8.9 %** | 99.13 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 38.50 € | **33.00 €** | 61.7 % | **38.6 %** | 33.14 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 280.00 € | **274.50 €** | 10.0 % | **7.9 %** | 274.90 € | stávame sa najlacnejší |
| Beko BM3WFSU37213WB | 298.90 € | **293.50 €** | 10.0 % | **8.0 %** | 293.60 € | stávame sa najlacnejší |
| Káblové slúchadlá OneOdio OpenRock Link 10 (čierne) | 63.00 € | **57.90 €** | 14.9 % | **5.6 %** | 47.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 209.90 € | **204.90 €** | 15.1 % | **12.3 %** | 205.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **257.90 €** | 15.0 % | **12.8 %** | 258.00 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.50 €** | 14.9 % | **10.0 %** | 114.90 € | stávame sa najlacnejší |
| Gorenje F492PW | 174.90 € | **170.00 €** | 9.0 % | **5.9 %** | 170.18 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 79.90 € | **75.00 €** | 15.0 % | **8.0 %** | 75.30 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 359.90 € | **355.00 €** | 10.1 % | **8.6 %** | 355.49 € | stávame sa najlacnejší |
| Electrolux 600 Gril EMS4253TBX | 266.50 € | **261.90 €** | 8.0 % | **6.1 %** | 262.00 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 373.50 € | **368.90 €** | 7.1 % | **5.8 %** | 369.00 € | stávame sa najlacnejší |
| Podvodné puzdro Telesin Dome Port pre GoPro Hero 9 /... | 51.50 € | **46.90 €** | 15.5 % | **5.2 %** | 36.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Street X-BASS KM... | 81.50 € | **76.90 €** | 15.2 % | **8.7 %** | 76.94 € | stávame sa najlacnejší |
| Strong Q1 mini projektor | 109.00 € | **104.50 €** | 10.0 % | **5.5 %** | 81.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny kliešťový merač Habotest HT208D | 57.00 € | **52.50 €** | 14.6 % | **5.6 %** | 47.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 110G | 330.00 € | **325.50 €** | 10.0 % | **8.5 %** | 325.58 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 15.00 € | **10.50 €** | 53.2 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 193.90 € | **189.50 €** | 8.7 % | **6.2 %** | 189.90 € | stávame sa najlacnejší |
| Solight LED vianočné záves, hviezdy, šírka 1,8m, 77L... | 13.50 € | **9.10 €** | 56.1 % | **5.2 %** | 9.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **344.50 €** | 15.0 % | **13.6 %** | 344.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **211.90 €** | 15.0 % | **12.8 %** | 212.00 € | stávame sa najlacnejší |
| Klávesnica ONIKUMA G69 (ružová) (QWERTY) | 48.90 € | **44.90 €** | 15.0 % | **5.6 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Oneodio Pro50 (čierne) | 48.90 € | **44.90 €** | 15.0 % | **5.6 %** | 39.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica OTP6641WG | 99.50 € | **95.50 €** | 9.6 % | **5.2 %** | 91.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 25630-56 | 94.50 € | **90.50 €** | 10.0 % | **5.4 %** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42324PC | 88.50 € | **84.50 €** | 10.1 % | **5.2 %** | 84.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO17E1W | 61.50 € | **57.50 €** | 13.9 % | **6.5 %** | 57.52 € | stávame sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.90 €** | 10.1 % | **5.9 %** | 100.94 € | stávame sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 63.90 € | **59.90 €** | 15.0 % | **7.8 %** | 59.96 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Soundbar KRUGER & MATZ Planet 2.1 | 58.50 € | **54.50 €** | 15.1 % | **7.3 %** | 54.77 € | stávame sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 178.50 € | **174.50 €** | 10.0 % | **7.6 %** | 174.78 € | stávame sa najlacnejší |
| Maxxo VM Chamber Line 90 | 572.50 € | **568.50 €** | 10.0 % | **9.2 %** | 568.79 € | stávame sa najlacnejší |
| Sony WFLS910NV fialová | 158.50 € | **154.50 €** | 10.2 % | **7.4 %** | 154.79 € | stávame sa najlacnejší |
| Tefal GV9812E0 | 335.00 € | **331.00 €** | 10.0 % | **8.7 %** | 331.30 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 73.00 € | **69.00 €** | 14.6 % | **8.3 %** | 69.50 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 178.90 € | **175.00 €** | 10.0 % | **7.6 %** | 175.19 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **178.00 €** | 10.1 % | **7.7 %** | 178.19 € | stávame sa najlacnejší |
| Ninja FB131EUGY Frost Vault 28l | 196.90 € | **193.00 €** | 10.1 % | **7.9 %** | 193.19 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 46.90 € | **43.00 €** | 15.1 % | **5.5 %** | 43.50 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 506.50 € | **502.90 €** | 7.1 % | **6.4 %** | 502.99 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **51.90 €** | 15.2 % | **7.7 %** | 52.00 € | stávame sa najlacnejší |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| KRUPS KP123H10A Nescafé Dolce Gusto Mini | 77.50 € | **74.00 €** | 10.1 % | **5.1 %** | 60.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK M7350 4G LTE WiFi 4G Modem | 76.50 € | **73.00 €** | 10.2 % | **5.1 %** | 63.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A1 Pro (čierne) | 43.00 € | **39.50 €** | 14.9 % | **5.6 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 43.00 € | **39.50 €** | 14.9 % | **5.6 %** | 35.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **125.50 €** | 10.0 % | **7.0 %** | 125.64 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer hnědý | 129.00 € | **125.50 €** | 10.0 % | **7.0 %** | 125.64 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **129.00 €** | 10.4 % | **7.4 %** | 129.18 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 74.00 € | **70.50 €** | 14.8 % | **9.3 %** | 70.75 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 192.50 € | **189.00 €** | 8.8 % | **6.8 %** | 189.34 € | stávame sa najlacnejší |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 74.50 € | **71.00 €** | 15.0 % | **9.6 %** | 71.50 € | stávame sa najlacnejší |
| Domo DO42323PC | 80.90 € | **77.50 €** | 10.1 % | **5.5 %** | 77.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stropné svietidlo Yeelight C2201C235 | 40.90 € | **37.50 €** | 15.4 % | **5.8 %** | 37.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Oneodio Pro30 (strieborné) | 40.00 € | **36.90 €** | 14.8 % | **5.9 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **117.90 €** | 14.9 % | **11.9 %** | 118.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 228.00 € | **224.90 €** | 13.7 % | **12.2 %** | 225.00 € | stávame sa najlacnejší |
| Čistička vzduchu Anycubic AirPure (2 ks) | 37.00 € | **34.00 €** | 14.6 % | **5.3 %** | 25.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1 | 125.50 € | **122.50 €** | 8.8 % | **6.2 %** | 122.56 € | stávame sa najlacnejší |
| Salente Combo-4In1-Ss | 129.00 € | **126.00 €** | 8.7 % | **6.2 %** | 126.07 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **35.90 €** | 14.9 % | **6.0 %** | 36.00 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.50 € | **73.50 €** | 15.1 % | **10.6 %** | 73.69 € | stávame sa najlacnejší |
| Vařič elektrický TEESA TSA0203 | 35.00 € | **32.00 €** | 15.0 % | **5.2 %** | 32.29 € | stávame sa najlacnejší |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 55.50 € | **52.50 €** | 15.0 % | **8.8 %** | 52.89 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 183.90 € | **181.00 €** | 10.2 % | **8.4 %** | 181.25 € | stávame sa najlacnejší |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 174.90 € | **172.00 €** | 15.1 % | **13.2 %** | 172.31 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **92.00 €** | 15.2 % | **11.7 %** | 92.50 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.90 €** | 56.5 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Maxxo VM Master | 238.50 € | **235.90 €** | 6.2 % | **5.0 %** | 233.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Pro10 (ružovo-zlaté) | 34.00 € | **31.50 €** | 14.4 % | **6.0 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Oneodio Pro10 (červené) | 34.00 € | **31.50 €** | 14.4 % | **6.0 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Oneodio Pro10 (čierne) | 34.00 € | **31.50 €** | 14.4 % | **6.0 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Oneodio Pro10 (sivé) | 34.00 € | **31.50 €** | 14.4 % | **6.0 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné okuliare COLMI G06 (ružové) | 32.00 € | **29.50 €** | 14.5 % | **5.6 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné okuliare COLMI G06 (transparentné) | 32.00 € | **29.50 €** | 14.5 % | **5.6 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.50 €** | 15.0 % | **9.4 %** | 49.57 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.50 € | **124.00 €** | 10.2 % | **8.0 %** | 124.11 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 34.50 € | **32.00 €** | 14.5 % | **6.2 %** | 32.14 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 31.50 € | **29.00 €** | 14.6 % | **5.5 %** | 29.22 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 24.50 € | **22.00 €** | 53.3 % | **37.7 %** | 22.34 € | stávame sa najlacnejší |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 32.50 € | **30.00 €** | 14.8 % | **6.0 %** | 30.40 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **15.50 €** | 47.4 % | **26.9 %** | 15.90 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 337.50 € | **335.00 €** | 7.1 % | **6.3 %** | 335.44 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **16.00 €** | 39.0 % | **20.2 %** | 16.50 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.00 €** | 14.7 % | **10.0 %** | 59.50 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2+ 6ks | 26.99 € | **24.50 €** | 33.1 % | **20.8 %** | 24.60 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 101.90 € | **99.50 €** | 10.3 % | **7.7 %** | 99.59 € | stávame sa najlacnejší |
| Aroma difuzer Palm tmavé dřevo 500ml SIXTOL | 29.90 € | **27.50 €** | 15.4 % | **6.1 %** | 26.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 4G LTE USB Adaptér (DWM-222W) | 51.90 € | **49.50 €** | 10.7 % | **5.5 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **20.50 €** | 38.1 % | **23.6 %** | 20.90 € | stávame sa najlacnejší |
| Panasonic SC-AKX520E-K | 304.90 € | **302.50 €** | 10.1 % | **9.3 %** | 302.54 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro10 (modré) | 31.00 € | **28.90 €** | 14.1 % | **6.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gril elektrický TEESA TSA3232 | 26.00 € | **23.90 €** | 15.0 % | **5.7 %** | 23.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 6.70 € | **4.60 €** | 55.2 % | **6.5 %** | 4.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **126.90 €** | 14.9 % | **13.1 %** | 127.00 € | stávame sa najlacnejší |
| JBL Tune 530BT Black | 45.50 € | **43.50 €** | 10.7 % | **5.8 %** | 39.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Drôtové slúchadlá Oneodio A71D (čierne) | 25.90 € | **23.90 €** | 14.9 % | **6.0 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 Smartwatch (Black). | 24.90 € | **22.90 €** | 15.7 % | **6.4 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 Laysara: Summit Kingdom | 38.50 € | **36.50 €** | 11.3 % | **5.5 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus 200 | 42.90 € | **40.90 €** | 10.6 % | **5.4 %** | 39.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysavač ruční Xtrobb 26203 | 24.50 € | **22.50 €** | 15.5 % | **6.1 %** | 21.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínač WiFi SONOFF 4CHR3 | 22.90 € | **20.90 €** | 15.5 % | **5.4 %** | 20.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO5 Red | 48.50 € | **46.50 €** | 10.7 % | **6.1 %** | 46.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9064C | 47.50 € | **45.50 €** | 10.2 % | **5.6 %** | 45.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9047W | 43.90 € | **41.90 €** | 10.4 % | **5.4 %** | 41.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXDH12E | 166.50 € | **164.50 €** | 10.1 % | **8.7 %** | 164.53 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 71.90 € | **69.90 €** | 15.1 % | **11.9 %** | 69.95 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **45.90 €** | 15.3 % | **10.5 %** | 46.00 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **31.50 €** | 38.0 % | **29.7 %** | 31.62 € | stávame sa najlacnejší |
| Baterie olověná  12V / 17Ah  VIPOW bezúdržbový akumu... | 32.50 € | **30.50 €** | 14.6 % | **7.6 %** | 30.63 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **15.00 €** | 40.2 % | **23.7 %** | 15.15 € | stávame sa najlacnejší |
| Salente R2 robotický vysavač | 98.50 € | **96.50 €** | 10.3 % | **8.1 %** | 96.69 € | stávame sa najlacnejší |
| Salente Rtx-R2 | 98.50 € | **96.50 €** | 10.3 % | **8.1 %** | 96.69 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **12.00 €** | 52.8 % | **31.0 %** | 12.37 € | stávame sa najlacnejší |
| EJEAS Q7 motorcycle intercom | 44.00 € | **42.00 €** | 14.4 % | **9.2 %** | 42.50 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **119.00 €** | 14.9 % | **13.0 %** | 119.50 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 123.90 € | **122.00 €** | 15.1 % | **13.3 %** | 122.29 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.60 €** | 57.1 % | **31.2 %** | 9.69 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  VIPOW bezúdržbový akumu... | 23.90 € | **22.00 €** | 15.7 % | **6.5 %** | 22.46 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **15.00 €** | 38.6 % | **23.1 %** | 15.50 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.00 €** | 15.3 % | **11.7 %** | 59.50 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 25.90 € | **24.00 €** | 15.4 % | **6.9 %** | 24.50 € | stávame sa najlacnejší |
| Yeelight Svetlo do skrine strieborné 60 cm | 20.50 € | **18.90 €** | 14.3 % | **5.4 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s bazénovým čidlem GARNI 245P | 33.50 € | **31.90 €** | 15.6 % | **10.0 %** | 31.96 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.3 % | **6.3 %** | 18.98 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 28.50 € | **26.90 €** | 15.3 % | **8.8 %** | 27.00 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD100FBK / 2.5 l / ov... | 64.50 € | **62.90 €** | 15.2 % | **12.3 %** | 63.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (modré) | 45.50 € | **43.90 €** | 15.0 % | **10.9 %** | 44.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **43.90 €** | 15.5 % | **11.5 %** | 44.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **43.90 €** | 15.5 % | **11.5 %** | 44.00 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.50 € | **21.90 €** | 14.8 % | **7.0 %** | 22.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.90 €** | 55.2 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 101.50 € | **99.90 €** | 15.1 % | **13.3 %** | 100.00 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 116.50 € | **114.90 €** | 14.9 % | **13.4 %** | 115.00 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **123.90 €** | 15.2 % | **13.7 %** | 124.00 € | stávame sa najlacnejší |
| LEIFHEIT Pegasus 180 Solid Classic 81510 | 33.00 € | **31.50 €** | 10.2 % | **5.2 %** | 22.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 White | 28.50 € | **27.00 €** | 11.0 % | **5.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Choetech T632-F 3-in-1 15W inductive charger (black) | 21.00 € | **19.50 €** | 13.8 % | **5.7 %** | 17.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Vulcan modrý lesk 350ml SIXTOL | 22.00 € | **20.50 €** | 15.1 % | **7.3 %** | 20.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač vlhkosti dreva UNI-T UT377A | 18.50 € | **17.00 €** | 14.7 % | **5.4 %** | 16.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester SMD UNI-T UT116C | 19.00 € | **17.50 €** | 14.4 % | **5.4 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ružové herné slúchadlá ONIKUMA B90 | 16.50 € | **15.00 €** | 15.6 % | **5.1 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **48.00 €** | 10.9 % | **7.5 %** | 48.10 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **31.00 €** | 59.9 % | **52.6 %** | 31.29 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.50 €** | 48.7 % | **33.8 %** | 13.90 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X25 (čierne) | 15.00 € | **13.50 €** | 25.6 % | **13.0 %** | 13.90 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **88.50 €** | 14.8 % | **12.9 %** | 88.90 € | stávame sa najlacnejší |
| Air pump Cycplus A2 | 27.50 € | **26.00 €** | 14.9 % | **8.6 %** | 26.41 € | stávame sa najlacnejší |
| Televes DAT BOSS LR 700 TFORCE LTE700 | 122.50 € | **121.00 €** | 14.8 % | **13.4 %** | 121.45 € | stávame sa najlacnejší |
| Maono G1 Neo Sound Card Black | 45.50 € | **44.00 €** | 14.8 % | **11.1 %** | 44.50 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.00 €** | 15.8 % | **5.8 %** | 16.50 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.00 €** | 15.9 % | **5.9 %** | 16.50 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 6.60 € | **5.20 €** | 49.9 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá +3x PO | 30.90 € | **29.50 €** | 10.9 % | **5.9 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, černý | 33.90 € | **32.50 €** | 11.1 % | **6.5 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INVERTO Premium - Twin IDLP-TWL413 - 0,2 dB - s filt... | 19.90 € | **18.50 €** | 15.2 % | **7.1 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun MQ10.202M | 31.90 € | **30.50 €** | 10.2 % | **5.3 %** | 30.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8059 | 17.90 € | **16.50 €** | 14.8 % | **5.8 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-P101CUD100 | 34.90 € | **33.50 €** | 10.7 % | **6.2 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filters ND/PL 8/16/32 Freewell for DJI Neo | 17.90 € | **16.50 €** | 15.6 % | **6.5 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPE-E (typ E) | 19.90 € | **18.50 €** | 14.9 % | **6.8 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/04 | 30.90 € | **29.50 €** | 11.0 % | **6.0 %** | 29.59 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.4 % | **5.8 %** | 26.61 € | stávame sa najlacnejší |
| Ariete ART 2869/05 | 47.90 € | **46.50 €** | 10.6 % | **7.3 %** | 46.90 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.60 €** | 55.5 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Beko BMTD37146W | 385.00 € | **383.90 €** | 6.9 % | **6.6 %** | 384.00 € | stávame sa najlacnejší |
| iRobot 4410724 Braava-Multi-Purpose Clea | 26.00 € | **24.90 €** | 10.1 % | **5.4 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 52.00 € | **50.90 €** | 14.8 % | **12.4 %** | 50.99 € | stávame sa najlacnejší |
| Dynamický mikrofon Maono PD200x (černý) | 49.00 € | **47.90 €** | 14.7 % | **12.2 %** | 48.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **16.90 €** | 15.0 % | **7.9 %** | 17.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Chladiaci ventilátor Darkflash DR08 3 v 1 (biely) | 17.00 € | **15.90 €** | 14.4 % | **7.0 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada senzorov úniku vody/záplavy ZigBee SONOFF SNZB-... | 14.50 € | **13.50 €** | 13.8 % | **5.9 %** | 9.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Flambovač PROLINE | 15.50 € | **14.50 €** | 12.6 % | **5.3 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZigBee door and window opening sensor SONOFF SNZB-04... | 12.90 € | **11.90 €** | 15.5 % | **6.6 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Bloom červené dřevo 200ml SIXTOL | 14.00 € | **13.00 €** | 13.1 % | **5.1 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné nočné svetlo RGB WiFi Gosund LB3 Tuya | 17.50 € | **16.50 €** | 13.9 % | **7.4 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja AF140EU Single Basket Pro 4,7l | 117.50 € | **116.50 €** | 7.0 % | **6.1 %** | 116.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.40 € | **5.40 €** | 47.0 % | **24.0 %** | 5.41 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.00 € | **39.00 €** | 10.1 % | **7.4 %** | 39.02 € | stávame sa najlacnejší |
| Ariete ART 583/03 | 76.50 € | **75.50 €** | 10.3 % | **8.9 %** | 75.53 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **216.50 €** | 10.1 % | **9.6 %** | 216.58 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **19.50 €** | 14.9 % | **9.3 %** | 19.59 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 18.50 € | **17.50 €** | 13.9 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 22.90 € | **21.90 €** | 15.1 % | **10.0 %** | 22.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS ONIKUMA T308 čierna | 10.90 € | **9.90 €** | 16.4 % | **5.8 %** | 10.00 € | stávame sa najlacnejší |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.90 €** | 14.8 % | **9.8 %** | 22.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Carrera Auto GO/GO+ 64120 Ford Mustang 1 | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 13.66 € | stávame sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.50 €** | 10.5 % | **5.1 %** | 19.67 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.00 € | **25.00 €** | 11.0 % | **6.8 %** | 25.19 € | stávame sa najlacnejší |
| Meteorologická stanice WS 6462 | 49.00 € | **48.00 €** | 8.3 % | **6.1 %** | 48.19 € | stávame sa najlacnejší |
| Alcad AM - 187 zesilovač / UHF-BIII-DAB-FM / LTE700 | 25.50 € | **24.50 €** | 11.6 % | **7.2 %** | 24.69 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 163.00 € | **162.00 €** | 14.9 % | **14.2 %** | 162.20 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 31.50 € | **30.50 €** | 15.7 % | **12.0 %** | 30.73 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0904 10000 mAh Li-pol | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 13.81 € | stávame sa najlacnejší |
| JBL Partybox Club 120 | 266.00 € | **265.00 €** | 9.8 % | **9.4 %** | 265.35 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.50 €** | 10.5 % | **9.3 %** | 98.90 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 43.0 % | **36.4 %** | 20.90 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1RC 16,0" | 118.50 € | **117.50 €** | 15.1 % | **14.1 %** | 117.90 € | stávame sa najlacnejší |
| ND16 filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.50 €** | 15.6 % | **9.6 %** | 18.90 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 450.50 € | **449.50 €** | 6.9 % | **6.7 %** | 449.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 84.00 € | **83.00 €** | 11.8 % | **10.5 %** | 83.48 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.50 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| Braun IS5247.VI | 183.90 € | **183.00 €** | 7.4 % | **6.9 %** | 183.29 € | stávame sa najlacnejší |
| Tefal NE477838 | 136.90 € | **136.00 €** | 8.6 % | **7.9 %** | 136.50 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.00 €** | 15.0 % | **13.7 %** | 77.50 € | stávame sa najlacnejší |
| Laica Bi-Flux Cartridge 3+1ks | 15.90 € | **15.00 €** | 12.0 % | **5.7 %** | 13.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 14.17 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **2.60 €** | 53.0 % | **13.6 %** | 2.70 € | stávame sa najlacnejší |
| Zelmer ZHM2550 | 39.90 € | **39.00 €** | 28.9 % | **26.0 %** | 39.03 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **36.00 €** | 10.4 % | **7.7 %** | 36.10 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.90 € | **18.00 €** | 15.5 % | **10.0 %** | 18.15 € | stávame sa najlacnejší |
| DOMO DO9192MC | 23.90 € | **23.00 €** | 10.0 % | **5.9 %** | 23.22 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.00 €** | 15.1 % | **12.7 %** | 41.50 € | stávame sa najlacnejší |
| Cycplus G1 bicycle computer | 22.90 € | **22.00 €** | 15.1 % | **10.6 %** | 22.50 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 328.90 € | **328.00 €** | 8.1 % | **7.8 %** | 328.11 € | stávame sa najlacnejší |
| ETA 723590000 | 327.90 € | **327.00 €** | 6.7 % | **6.4 %** | 327.29 € | stávame sa najlacnejší |
| Candy ProWash 550 SLIM BP 37SBL8-S | 273.50 € | **272.90 €** | 8.1 % | **7.9 %** | 273.00 € | stávame sa najlacnejší |
| Fixed sklo Apple iPhon 17 FIXGA2-1600-BK | 18.50 € | **17.90 €** | 10.4 % | **6.8 %** | 14.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad CA-210 | 25.50 € | **24.90 €** | 8.6 % | **6.0 %** | 24.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.50 € | **19.90 €** | 37.1 % | **33.0 %** | 19.96 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.50 € | **29.90 €** | 15.5 % | **13.3 %** | 30.00 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-EH-16A-W-WiFi | 30.50 € | **29.90 €** | 15.3 % | **13.1 %** | 30.00 € | stávame sa najlacnejší |
| Ufesa Ruby Red BS4717 | 40.50 € | **39.90 €** | 11.1 % | **9.4 %** | 40.00 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.50 € | **25.90 €** | 11.4 % | **8.9 %** | 26.00 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 17.50 € | **16.90 €** | 15.6 % | **11.6 %** | 17.00 € | stávame sa najlacnejší |
| Prenosná pumpa Flextail Tiny Pump 2 (oranžová) | 22.50 € | **21.90 €** | 15.0 % | **11.9 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.20 € | **3.60 €** | 54.5 % | **32.4 %** | 3.67 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.70 €** | 42.7 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| Solight LED RGB osvetlenie Gaming, diaľkový ovládač,... | 11.50 € | **10.90 €** | 53.5 % | **45.5 %** | 11.00 € | stávame sa najlacnejší |
| Baterie olověná   6V /  7Ah  EMOS | 12.50 € | **11.90 €** | 14.4 % | **9.0 %** | 12.00 € | stávame sa najlacnejší |
| Rowenta RH 6756WO | 123.50 € | **122.90 €** | 8.1 % | **7.6 %** | 123.00 € | stávame sa najlacnejší |
| Leifheit Čistič prachu DUSTY Telescope 2 | 15.00 € | **14.50 €** | 10.3 % | **6.6 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI AN 3,4A,2xUSB,Lightning,čern CHS0007 | 11.50 € | **11.00 €** | 10.8 % | **6.0 %** | 8.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune110 blue | 11.00 € | **10.50 €** | 10.1 % | **5.1 %** | 7.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada pálek a míčků se sítí pro stolní tenis REBEL AC... | 11.00 € | **10.50 €** | 14.5 % | **9.3 %** | 9.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.80 € | **8.30 €** | 15.8 % | **9.2 %** | 8.34 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Fixed sluchátka Buds FIXBDS-BK | 21.50 € | **21.00 €** | 10.4 % | **7.8 %** | 21.08 € | stávame sa najlacnejší |
| Sekáček potravin TEESA TSA3227 | 21.50 € | **21.00 €** | 8.2 % | **5.7 %** | 21.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 3.10 € | **2.60 €** | 52.7 % | **28.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.50 € | **14.00 €** | 57.8 % | **52.4 %** | 14.09 € | stávame sa najlacnejší |
| BANQUET Mlýnek na kávu CULINARIA VIII | 10.50 € | **10.00 €** | 14.3 % | **8.8 %** | 10.13 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **17.00 €** | 11.9 % | **8.7 %** | 17.13 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.50 € | **50.00 €** | 10.5 % | **9.4 %** | 50.13 € | stávame sa najlacnejší |
| MAXXO VM Profi | 99.00 € | **98.50 €** | 10.5 % | **9.9 %** | 98.65 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Rowenta RH9A73WO | 291.50 € | **291.00 €** | 6.6 % | **6.4 %** | 291.19 € | stávame sa najlacnejší |
| NEDIS ZBRC10WT chytré dálkové ovládání ZigBee | 15.00 € | **14.50 €** | 9.4 % | **5.7 %** | 14.69 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 90.00 € | **89.50 €** | 13.5 % | **12.9 %** | 89.69 € | stávame sa najlacnejší |
| Alcad AI - 133 linkový zesilovač se 2 výstupy / G=24dB | 19.50 € | **19.00 €** | 9.6 % | **6.8 %** | 19.19 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 27.00 € | **26.50 €** | 13.1 % | **11.0 %** | 26.69 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.4 % | **7.4 %** | 18.25 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **12.00 €** | 10.3 % | **5.9 %** | 12.25 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 198.50 € | **198.00 €** | 6.4 % | **6.1 %** | 198.25 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 21.50 € | **21.00 €** | 25.6 % | **22.7 %** | 21.26 € | stávame sa najlacnejší |
| Braun CG9043 | 213.50 € | **213.00 €** | 7.3 % | **7.0 %** | 213.28 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 12.3 % | **11.0 %** | 44.28 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Beko VRT96425VD | 252.50 € | **252.00 €** | 6.3 % | **6.1 %** | 252.29 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.50 € | **65.00 €** | 9.9 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| Leifheit Clean Twist M Ergo+náhr. Static | 41.50 € | **41.00 €** | 14.9 % | **13.5 %** | 41.29 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 58.50 € | **58.00 €** | 12.4 % | **11.4 %** | 58.29 € | stávame sa najlacnejší |
| ETA 410090000 | 330.50 € | **330.00 €** | 7.0 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| G21 Pěchovadlo pro nádoby 0,9 l | 12.50 € | **12.00 €** | 14.4 % | **9.9 %** | 12.30 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 142.50 € | **142.00 €** | 8.8 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| DOMO DO9252I | 252.50 € | **252.00 €** | 8.1 % | **7.9 %** | 252.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| YAMAHA NS-P41 BLACK | 295.50 € | **295.00 €** | 14.5 % | **14.3 %** | 295.30 € | stávame sa najlacnejší |
| Tesla 32E325BH 32" HD LED TV | 128.50 € | **128.00 €** | 5.5 % | **5.1 %** | 128.30 € | stávame sa najlacnejší |
| Gorenje F49DPW | 171.50 € | **171.00 €** | 9.2 % | **8.9 %** | 171.30 € | stávame sa najlacnejší |
| Gorenje W2PNA94A1W/CZ | 428.50 € | **428.00 €** | 7.1 % | **7.0 %** | 428.30 € | stávame sa najlacnejší |
| Gorenje WPNEI72SA1SWIFI | 286.50 € | **286.00 €** | 8.1 % | **7.9 %** | 286.30 € | stávame sa najlacnejší |
| Beko BDIN38646D | 494.50 € | **494.00 €** | 7.1 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 293.50 € | **293.00 €** | 8.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 75.50 € | **75.00 €** | 9.4 % | **8.7 %** | 75.32 € | stávame sa najlacnejší |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.50 € | **30.00 €** | 9.5 % | **7.7 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Panasonic SC-MAX3500 | 642.50 € | **642.00 €** | 7.4 % | **7.3 %** | 642.35 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 248.50 € | **248.00 €** | 9.3 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 225.50 € | **225.00 €** | 6.8 % | **6.5 %** | 225.37 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **16.00 €** | 15.9 % | **12.4 %** | 16.38 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.50 € | **20.00 €** | 8.7 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| Tefal NE553838 | 128.00 € | **127.50 €** | 5.6 % | **5.2 %** | 127.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.50 € | **55.00 €** | 15.0 % | **14.0 %** | 55.39 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 454.50 € | **454.00 €** | 9.7 % | **9.6 %** | 454.39 € | stávame sa najlacnejší |
| Roborock Qrevo C Pro Black | 609.00 € | **608.50 €** | 5.7 % | **5.6 %** | 608.89 € | stávame sa najlacnejší |
| DOMO DO354VD | 132.00 € | **131.50 €** | 9.8 % | **9.4 %** | 131.89 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 268.50 € | **268.00 €** | 9.0 % | **8.8 %** | 268.39 € | stávame sa najlacnejší |
| FoodSaver FSR2802 | 18.50 € | **18.00 €** | 10.1 % | **7.1 %** | 18.39 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.89 € | stávame sa najlacnejší |
| DOMO DO9232I | 355.50 € | **355.00 €** | 6.5 % | **6.3 %** | 355.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 277.50 € | **277.00 €** | 8.3 % | **8.1 %** | 277.39 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.50 € | **158.00 €** | 14.5 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| Kaon MZ-104, 4K satelitní přijímač | 115.50 € | **115.00 €** | 6.5 % | **6.0 %** | 115.39 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **38.00 €** | 15.3 % | **13.8 %** | 38.39 € | stávame sa najlacnejší |
| Gorenje BOS6737E06B | 270.50 € | **270.00 €** | 6.8 % | **6.6 %** | 270.39 € | stávame sa najlacnejší |
| Niceboy PILOT S10 Rear Cam | 24.50 € | **24.00 €** | 10.8 % | **8.6 %** | 24.40 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 27.00 € | **26.50 €** | 10.9 % | **8.8 %** | 26.90 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 132.50 € | **132.00 €** | 8.8 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 166.50 € | **166.00 €** | 8.7 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Hi | 208.50 € | **208.00 €** | 5.3 % | **5.1 %** | 208.40 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 35.00 € | **34.50 €** | 38.7 % | **36.7 %** | 34.90 € | stávame sa najlacnejší |
| Strong LEAP-UNA+, FHD GOOGLE TV STICK | 53.50 € | **53.00 €** | 8.2 % | **7.2 %** | 53.40 € | stávame sa najlacnejší |
| Fixed Pods Pro s ANC FIXPDS-P-BK | 39.50 € | **39.00 €** | 11.3 % | **9.9 %** | 39.40 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active Blue | 16.50 € | **16.00 €** | 8.9 % | **5.6 %** | 16.40 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active White | 16.50 € | **16.00 €** | 8.9 % | **5.6 %** | 16.40 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 246.50 € | **246.00 €** | 8.1 % | **7.9 %** | 246.40 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 520.50 € | **520.00 €** | 7.1 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 508.50 € | **508.00 €** | 7.1 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 238.50 € | **238.00 €** | 8.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 169.50 € | **169.00 €** | 9.1 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 409.50 € | **409.00 €** | 7.1 % | **6.9 %** | 409.40 € | stávame sa najlacnejší |
| Indesit BTW S50400 EU/N | 262.50 € | **262.00 €** | 8.1 % | **7.9 %** | 262.40 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 178.50 € | **178.00 €** | 9.1 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 286.50 € | **286.00 €** | 8.0 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 347.50 € | **347.00 €** | 7.1 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.50 € | **42.00 €** | 9.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.50 € | **63.00 €** | 14.7 % | **13.8 %** | 63.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **52.00 €** | 10.3 % | **9.3 %** | 52.43 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.50 € | **23.00 €** | 36.9 % | **33.9 %** | 23.44 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.50 € | **48.00 €** | 14.6 % | **13.4 %** | 48.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| Strong LEAP-S3 V2 Google TV box | 64.50 € | **64.00 €** | 11.4 % | **10.6 %** | 64.46 € | stávame sa najlacnejší |
| Roadstar TRA-1230/BK Kapesní FM rádio | 15.50 € | **15.00 €** | 12.5 % | **8.9 %** | 15.46 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 221.50 € | **221.00 €** | 9.3 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| Zelmer ZIR1505 | 25.50 € | **25.00 €** | 9.5 % | **7.4 %** | 25.47 € | stávame sa najlacnejší |
| YAMAHA A-S3200 BLACK | 6002.50 € | **6002.00 €** | 9.3 % | **9.3 %** | 6002.47 € | stávame sa najlacnejší |
| Gorenje R619EAW6 | 481.50 € | **481.00 €** | 6.9 % | **6.8 %** | 481.47 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.50 € | **23.00 €** | 30.5 % | **27.7 %** | 23.48 € | stávame sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **12.00 €** | 12.9 % | **8.4 %** | 12.48 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 47.50 € | **47.00 €** | 8.6 % | **7.5 %** | 47.49 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 124.50 € | **124.00 €** | 7.3 % | **6.9 %** | 124.49 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **36.00 €** | 10.9 % | **9.3 %** | 36.49 € | stávame sa najlacnejší |
| Salente Icequeen-Wh | 19.50 € | **19.00 €** | 8.0 % | **5.2 %** | 19.49 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **36.00 €** | 10.4 % | **8.9 %** | 36.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.50 € | **23.00 €** | 8.7 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| ETA 151390000 | 101.90 € | **101.50 €** | 10.6 % | **10.2 %** | 101.67 € | stávame sa najlacnejší |
| Braun HF5050.IBK | 121.90 € | **121.50 €** | 9.8 % | **9.5 %** | 121.70 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 113.90 € | **113.50 €** | 9.8 % | **9.4 %** | 113.70 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 113.90 € | **113.50 €** | 5.6 % | **5.3 %** | 113.70 € | stávame sa najlacnejší |
| CANDY CBT6130/3X | 64.90 € | **64.50 €** | 6.7 % | **6.1 %** | 64.71 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 150.90 € | **150.50 €** | 5.8 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.90 € | **69.50 €** | 12.2 % | **11.5 %** | 69.75 € | stávame sa najlacnejší |
| Tefal RK812110 | 106.90 € | **106.50 €** | 7.5 % | **7.1 %** | 106.79 € | stávame sa najlacnejší |
| PRIMO PR406IM | 126.90 € | **126.50 €** | 8.8 % | **8.5 %** | 126.79 € | stávame sa najlacnejší |
| Domo DO331L | 104.90 € | **104.50 €** | 8.4 % | **8.0 %** | 104.79 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 12.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 124.90 € | **124.50 €** | 7.4 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 177.90 € | **177.50 €** | 8.9 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 175.90 € | **175.50 €** | 8.7 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| ETA 745390000 | 124.90 € | **124.50 €** | 9.9 % | **9.6 %** | 124.80 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.7 % | **9.2 %** | 84.80 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 147.90 € | **147.50 €** | 5.5 % | **5.2 %** | 147.80 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 78.90 € | **78.50 €** | 9.1 % | **8.5 %** | 78.81 € | stávame sa najlacnejší |
| Strong LEAP-S3 Google TV 4K UHD Android TV multimedi... | 64.90 € | **64.50 €** | 5.7 % | **5.0 %** | 64.82 € | stávame sa najlacnejší |
| SALENTE SuChef | 82.90 € | **82.50 €** | 8.3 % | **7.7 %** | 82.85 € | stávame sa najlacnejší |
| CANON PIXMA G3430 Black | 142.90 € | **142.50 €** | 5.5 % | **5.2 %** | 142.85 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 206.90 € | **206.50 €** | 8.5 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 114.90 € | **114.50 €** | 6.6 % | **6.3 %** | 114.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 233.90 € | **233.50 €** | 9.9 % | **9.7 %** | 233.88 € | stávame sa najlacnejší |
| Fixed pouzdro Honor X8 5G FIXTOP-1009-BK | 12.90 € | **12.50 €** | 11.6 % | **8.1 %** | 12.56 € | stávame sa najlacnejší |
| Solight teplomer | 9.60 € | **9.20 €** | 37.4 % | **31.7 %** | 9.29 € | stávame sa najlacnejší |
| Sada pálek a míčků se sítí pro stolní tenis REBEL AC... | 10.00 € | **9.60 €** | 12.4 % | **8.0 %** | 9.69 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 14.2 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.90 € | **11.50 €** | 9.4 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.90 € | **10.50 €** | 10.8 % | **6.7 %** | 10.76 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 11.90 € | **11.50 €** | 8.7 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.90 € | **13.50 €** | 17.8 % | **14.4 %** | 13.85 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Ariete ART 438/05 | 29.90 € | **29.50 €** | 11.5 % | **10.0 %** | 29.59 € | stávame sa najlacnejší |
| LENOVO adaptér TAB 68W AC USB ZG38C05739 | 17.90 € | **17.50 €** | 13.5 % | **11.0 %** | 17.59 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.50 €** | 10.3 % | **9.5 %** | 58.67 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 39.90 € | **39.50 €** | 8.5 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 21.90 € | **21.50 €** | 8.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| DOMO DO8709P | 28.90 € | **28.50 €** | 8.6 % | **7.1 %** | 28.70 € | stávame sa najlacnejší |
| Electrolux E200SM | 17.90 € | **17.50 €** | 21.5 % | **18.8 %** | 17.70 € | stávame sa najlacnejší |
| ETA 160390000 | 17.90 € | **17.50 €** | 13.2 % | **10.6 %** | 17.71 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **30.50 €** | 10.1 % | **8.7 %** | 30.75 € | stávame sa najlacnejší |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 62.90 € | **62.50 €** | 17.2 % | **16.4 %** | 62.78 € | stávame sa najlacnejší |
| Rowenta ZR177003 | 20.90 € | **20.50 €** | 12.0 % | **9.9 %** | 20.79 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 56.90 € | **56.50 €** | 7.3 % | **6.6 %** | 56.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| DOMO DO42602S | 38.90 € | **38.50 €** | 6.9 % | **5.8 %** | 38.79 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.50 €** | 12.2 % | **9.5 %** | 16.79 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 18.90 € | **18.50 €** | 9.4 % | **7.1 %** | 18.79 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 21.90 € | **21.50 €** | 8.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 45.90 € | **45.50 €** | 14.8 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| Beko ATP3100N | 51.90 € | **51.50 €** | 14.8 % | **13.9 %** | 51.80 € | stávame sa najlacnejší |
| ETA 321990020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 31.90 € | **31.50 €** | 9.7 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 32.90 € | **32.50 €** | 12.5 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 50.90 € | **50.50 €** | 6.1 % | **5.2 %** | 50.86 € | stávame sa najlacnejší |
| Amica KF 17191 | 29.90 € | **29.50 €** | 22.7 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 55.90 € | **55.50 €** | 12.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.7 % | **9.4 %** | 32.88 € | stávame sa najlacnejší |
| Domo DO9195C | 32.90 € | **32.50 €** | 10.5 % | **9.1 %** | 32.88 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 17.90 € | **17.50 €** | 8.1 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.50 €** | 10.4 % | **8.4 %** | 21.89 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 20.90 € | **20.50 €** | 10.1 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 42.90 € | **42.50 €** | 9.0 % | **8.0 %** | 42.89 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 537.90 € | **537.50 €** | 6.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| Guzzanti GZ 215RB | 304.90 € | **304.50 €** | 8.1 % | **7.9 %** | 304.70 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 343.90 € | **343.50 €** | 6.8 % | **6.7 %** | 343.70 € | stávame sa najlacnejší |
| AMICA DI6421B | 384.90 € | **384.50 €** | 7.1 % | **6.9 %** | 384.70 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.90 € | **394.50 €** | 7.1 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 545.90 € | **545.50 €** | 8.1 % | **8.0 %** | 545.74 € | stávame sa najlacnejší |
| Gorenje GS541C10X | 373.90 € | **373.50 €** | 6.1 % | **6.0 %** | 373.76 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 284.90 € | **284.50 €** | 6.5 % | **6.3 %** | 284.78 € | stávame sa najlacnejší |
| YAMAHA RX-V4A Black | 501.90 € | **501.50 €** | 9.3 % | **9.2 %** | 501.78 € | stávame sa najlacnejší |
| Gorenje DE69CS | 497.90 € | **497.50 €** | 6.5 % | **6.4 %** | 497.79 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 594.90 € | **594.50 €** | 9.3 % | **9.2 %** | 594.81 € | stávame sa najlacnejší |
| Gorenje FH50EAW | 481.90 € | **481.50 €** | 6.2 % | **6.1 %** | 481.82 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 328.90 € | **328.50 €** | 6.6 % | **6.5 %** | 328.82 € | stávame sa najlacnejší |
| Gorenje W3NGPI74A3S | 259.90 € | **259.50 €** | 7.2 % | **7.0 %** | 259.84 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.70 € | **7.50 €** | 54.6 % | **50.6 %** | 7.56 € | stávame sa najlacnejší |
| Solight skúšačka 201, priemer 3mm x 140mm, AC napäti... | 0.80 € | **0.60 €** | 54.9 % | **16.1 %** | 0.70 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.50 €** | 53.6 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| YAMAHA NS-F51 BLACK 1 karton | 299.00 € | **298.90 €** | 9.3 % | **9.3 %** | 298.95 € | stávame sa najlacnejší |
| Guzzanti GZ 256A | 386.00 € | **385.90 €** | 10.0 % | **10.0 %** | 385.97 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 331.00 € | **330.90 €** | 6.0 % | **6.0 %** | 330.98 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 270.00 € | **269.90 €** | 6.2 % | **6.2 %** | 269.98 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s RGB podsvietením... | 34.00 € | **33.90 €** | 5.9 % | **5.6 %** | 33.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux MCK CZ | 26.00 € | **25.90 €** | 27.3 % | **26.8 %** | 25.95 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| Sati Fortissimo 1 kg zrno | 18.00 € | **17.90 €** | 8.3 % | **7.7 %** | 17.96 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.97 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **63.90 €** | 24.7 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Tefal B817S255 | 30.00 € | **29.90 €** | 5.8 % | **5.5 %** | 29.99 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 45.00 € | **44.90 €** | 24.3 % | **24.0 %** | 44.99 € | stávame sa najlacnejší |
| RUSSELL HOBBS 21395-56 | 52.00 € | **51.90 €** | 7.7 % | **7.5 %** | 51.99 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.4 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Russell Hobbs 27011-56 | 45.00 € | **44.90 €** | 5.8 % | **5.6 %** | 44.99 € | stávame sa najlacnejší |
| RUSSELL HOBBS 24360-70 Inspire Kettle | 44.00 € | **43.90 €** | 9.0 % | **8.7 %** | 43.99 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.32 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **3.00 €** | 23.5 % | **19.6 %** | 3.08 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.00 € | **10.90 €** | 9.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.8 % | **9.9 %** | 12.96 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.29 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110P, růžová | 13.00 € | **12.90 €** | 5.9 % | **5.1 %** | 12.99 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110W,bílá | 13.00 € | **12.90 €** | 5.9 % | **5.1 %** | 12.99 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **9.80 €** | 25.6 % | **24.3 %** | 9.89 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 137.00 € | **136.90 €** | 5.8 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |

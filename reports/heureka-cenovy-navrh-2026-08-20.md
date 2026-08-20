# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-20

Vstup: `premiumstoresk_20260820_1719.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **4209**
- Návrh **zvýšiť** cenu: **566** produktov
- Návrh **znížiť** cenu: **965** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **2678** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **96**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (566)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 685.90 € | **1080.50 €** | 15.0 % | **81.2 %** | 1080.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **854.50 €** | 15.0 % | **51.2 %** | 854.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **707.50 €** | 15.0 % | **49.5 %** | 707.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **488.00 €** | 15.0 % | **29.6 %** | 488.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko HSM14540 | 261.00 € | **284.90 €** | 10.0 % | **20.1 %** | 284.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné okuliare BlitzWolf BW-AG1 Pro AI s vyme... | 73.50 € | **94.90 €** | 14.4 % | **47.7 %** | 94.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 498.90 € | **518.90 €** | 7.7 % | **12.0 %** | 518.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARRETT AT Max 8,5 x 11" INTL – detektor kovov | 757.50 € | **773.90 €** | 15.0 % | **17.5 %** | 773.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **95.00 €** | 15.3 % | **38.8 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X60 Soundbar | 498.90 € | **509.00 €** | 8.2 % | **10.4 %** | 509.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 409.90 € | **420.00 €** | 8.5 % | **11.1 %** | 420.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 221.90 € | **232.00 €** | 8.0 % | **12.9 %** | 222.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210G | 458.90 € | **468.50 €** | 6.8 % | **9.0 %** | 468.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **74.00 €** | 21.1 % | **38.9 %** | 64.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Systémy kvapkového a rozprašovacieho zavlažovania | 31.90 € | **41.00 €** | 15.0 % | **47.8 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Waydoo Underwater scooter Subnado Lite | 310.50 € | **319.00 €** | 15.0 % | **18.1 %** | 319.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 745390000 | 124.50 € | **132.90 €** | 9.6 % | **17.0 %** | 124.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC750830 | 199.00 € | **206.50 €** | 6.2 % | **10.2 %** | 206.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 238.90 € | **246.00 €** | 5.2 % | **8.4 %** | 246.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool MBNA910X | 242.50 € | **249.50 €** | 8.0 % | **11.1 %** | 242.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slnečné okuliare COLMI M02S UV AI | 46.50 € | **53.50 €** | 14.8 % | **32.1 %** | 53.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **41.00 €** | 16.3 % | **38.3 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **55.50 €** | 10.0 % | **23.3 %** | 49.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **75.50 €** | 27.8 % | **38.8 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| COLMI V03 inteligentné okuliare Slnečné okuliare s h... | 55.00 € | **61.00 €** | 14.9 % | **27.4 %** | 61.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **27.00 €** | 10.1 % | **38.2 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrické čerpadlo Cycplus AL1 | 31.00 € | **36.50 €** | 14.8 % | **35.2 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.4 % | **15.6 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá GARRETT MS-2 s 2-pinovým konektorom a vodo... | 108.50 € | **113.90 €** | 15.0 % | **20.7 %** | 113.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS1 POCKET AIRBANK – mini pumpa na bicykel | 32.90 € | **38.00 €** | 15.4 % | **33.3 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **47.00 €** | 23.6 % | **38.3 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 50.90 € | **55.50 €** | 15.4 % | **25.9 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **73.50 €** | 12.7 % | **20.2 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 33.00 € | **37.50 €** | 38.6 % | **57.5 %** | 33.14 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F49DPW | 171.00 € | **175.50 €** | 8.9 % | **11.8 %** | 171.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 541.00 € | **545.50 €** | 6.2 % | **7.1 %** | 541.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 170.50 € | **174.90 €** | 12.0 % | **14.9 %** | 174.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| MAXXO VM Profi | 98.90 € | **103.00 €** | 10.4 % | **14.9 %** | 99.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus L7 zadné svetlo na bicykel s radarom | 61.90 € | **65.90 €** | 15.3 % | **22.7 %** | 65.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **32.50 €** | 20.3 % | **37.2 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **38.50 €** | 25.1 % | **39.6 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 55.90 € | **59.50 €** | 5.5 % | **12.3 %** | 59.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Air pump Cycplus A2 | 23.90 € | **27.50 €** | 15.1 % | **32.5 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá GARRETT CS3 Z-LYNK | 113.00 € | **116.50 €** | 14.9 % | **18.4 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 48.50 € | **51.90 €** | 7.3 % | **14.8 %** | 51.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Club 120 | 266.50 € | **269.90 €** | 10.0 % | **11.4 %** | 269.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **52.00 €** | 15.2 % | **22.5 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FF2588E0 | 79.50 € | **82.50 €** | 5.1 % | **9.0 %** | 82.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.50 € | **24.50 €** | 19.6 % | **36.2 %** | 24.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Haylou RS4 Plus (čierne) | 31.50 € | **34.50 €** | 5.3 % | **15.3 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 336.00 € | **339.00 €** | 7.4 % | **8.4 %** | 339.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS2 mini electric pump | 45.00 € | **48.00 €** | 14.9 % | **22.5 %** | 48.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS200 TB2 TOPUMP – mini pumpa na bicykel | 29.00 € | **32.00 €** | 14.1 % | **25.9 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS210 MAX AT1 Max Anoutway – mini pumpa na b... | 40.50 € | **43.50 €** | 15.7 % | **24.3 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS230 PRO DP5 PRO Mini Bike Pump | 42.90 € | **45.90 €** | 15.2 % | **23.3 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GPS bike computer Cycplus M1 | 23.50 € | **26.50 €** | 15.7 % | **30.4 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF NSPanel Pro 120 Smart Control Panel Matter Wi... | 109.00 € | **111.90 €** | 11.1 % | **14.1 %** | 111.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záhradné elektromagnetické ventily AC 1 " RainPoint | 15.90 € | **18.50 €** | 16.4 % | **35.4 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDFS26120XQ | 328.00 € | **330.50 €** | 6.9 % | **7.7 %** | 328.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.00 € | **38.50 €** | 7.7 % | **15.2 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| REBEL Micropower 1000 | 89.00 € | **91.50 €** | 12.1 % | **15.2 %** | 91.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 28.00 € | **30.50 €** | 5.0 % | **14.4 %** | 30.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **64.00 €** | 19.8 % | **24.7 %** | 63.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné okuliare COLMI G06 (hnedé) | 30.00 € | **32.50 €** | 14.9 % | **24.5 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 128.50 € | **131.00 €** | 14.9 % | **17.1 %** | 131.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové okuliare ZEBLAZE Q01 Green AI | 62.00 € | **64.50 €** | 14.8 % | **19.5 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové okuliare ZEBLAZE Q01 s umelou inteligenciou... | 62.00 € | **64.50 €** | 14.8 % | **19.5 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrické čerpadlo Cycplus A12 | 18.50 € | **21.00 €** | 16.3 % | **32.0 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cyklocomputer Cycplus M3 - kompatibilný s: Strava, T... | 31.00 € | **33.50 €** | 14.8 % | **24.1 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 43.50 € | **46.00 €** | 6.7 % | **12.8 %** | 46.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 69.00 € | **71.50 €** | 15.0 % | **19.2 %** | 71.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Puluz 60cm LED stan bez tienidla 3380 lúmenov | 50.50 € | **53.00 €** | 15.1 % | **20.8 %** | 53.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 23.50 € | **25.90 €** | 16.1 % | **28.0 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 34.50 € | **36.90 €** | 9.8 % | **17.5 %** | 36.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 34.50 € | **36.90 €** | 10.2 % | **17.8 %** | 36.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS210 AT1 Anoutway – mini pumpa na bicykel | 31.90 € | **34.00 €** | 15.6 % | **23.2 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Mesh Steel | 67.00 € | **69.00 €** | 9.0 % | **12.2 %** | 67.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Solid Steel | 67.00 € | **69.00 €** | 9.0 % | **12.2 %** | 67.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Smartdust | 132.50 € | **134.50 €** | 5.5 % | **7.1 %** | 132.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.50 € | **65.50 €** | 16.4 % | **20.1 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná pumpa Flextail Tiny Pump 2 (oranžová) | 20.50 € | **22.50 €** | 13.9 % | **25.0 %** | 22.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vaflovač TEESA TSA3224 | 24.90 € | **26.90 €** | 6.1 % | **14.6 %** | 26.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Alcad AM - 187 zesilovač / UHF-BIII-DAB-FM / LTE700 | 24.50 € | **26.50 €** | 7.0 % | **15.7 %** | 26.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 47.00 € | **49.00 €** | 14.6 % | **19.5 %** | 48.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice WS 6462 | 47.90 € | **49.90 €** | 5.7 % | **10.1 %** | 49.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Battery Tester Ancel BA101 8-30V DC | 45.50 € | **47.50 €** | 15.4 % | **20.5 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 27011-56 | 44.90 € | **46.90 €** | 5.6 % | **10.3 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 79.50 € | **81.50 €** | 15.3 % | **18.2 %** | 81.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná pumpa Flextail Tiny Pump 2 (biela) | 20.50 € | **22.50 €** | 13.9 % | **25.0 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná pumpa Flextail Tiny Pump 2 (čierna) | 20.50 € | **22.50 €** | 13.9 % | **25.0 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus M2 bicycle computer | 24.50 € | **26.50 €** | 14.8 % | **24.2 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1 | 125.00 € | **126.90 €** | 8.4 % | **10.0 %** | 125.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Clean Twist M Ergo+náhr. Static | 41.00 € | **42.90 €** | 13.5 % | **18.8 %** | 41.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 39.00 € | **40.90 €** | 31.7 % | **38.1 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 15.00 € | **16.90 €** | 23.1 % | **38.6 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.90 € | **19.50 €** | 23.5 % | **34.6 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 36.90 € | **38.50 €** | 10.5 % | **15.3 %** | 38.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Alcad AI - 133 linkový zesilovač se 2 výstupy / G=24dB | 18.90 € | **20.50 €** | 6.0 % | **15.0 %** | 20.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S5 GPS + WIFI | 48.00 € | **49.50 €** | 7.5 % | **10.9 %** | 48.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy OFFICE M40 Vertical | 17.50 € | **19.00 €** | 7.7 % | **16.9 %** | 17.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L6 | 151.50 € | **153.00 €** | 5.9 % | **6.9 %** | 151.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 26.00 € | **27.50 €** | 8.7 % | **14.9 %** | 27.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 43.50 € | **45.00 €** | 20.1 % | **24.3 %** | 44.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 58.00 € | **59.50 €** | 11.2 % | **14.1 %** | 59.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tester obvodov Ancel PB500 | 78.00 € | **79.50 €** | 15.1 % | **17.3 %** | 79.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 58.50 € | **60.00 €** | 12.2 % | **15.1 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Puluz 50cm LED stan bez tienidla PU5051EU | 43.00 € | **44.50 €** | 15.1 % | **19.1 %** | 44.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrické čerpadlo Cycplus A14 | 21.50 € | **23.00 €** | 15.6 % | **23.7 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **70.90 €** | 27.8 % | **30.3 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| NEDIS ZBRC10WT chytré dálkové ovládání ZigBee | 14.50 € | **15.90 €** | 5.4 % | **15.6 %** | 15.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| PULUZ PU3223B Držiak na telefón čierny | 17.90 € | **19.00 €** | 14.8 % | **21.8 %** | 19.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA X25 (čierne) | 13.90 € | **15.00 €** | 16.4 % | **25.6 %** | 14.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **178.00 €** | 7.7 % | **8.4 %** | 177.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **6.40 €** | 24.0 % | **47.0 %** | 5.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia otočná IP kamera | 37.50 € | **38.50 €** | 39.0 % | **42.7 %** | 37.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 051690000 | 64.50 € | **65.50 €** | 10.3 % | **12.0 %** | 64.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 19.90 € | **20.90 €** | 24.1 % | **30.3 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Air Board M Compact | 55.00 € | **56.00 €** | 9.1 % | **11.1 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roborock Qrevo C Pro Black | 607.50 € | **608.50 €** | 5.4 % | **5.6 %** | 608.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA CD-C603 BLACK | 574.50 € | **575.50 €** | 6.4 % | **6.6 %** | 575.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA CD-C603 SILVER | 574.50 € | **575.50 €** | 7.6 % | **7.8 %** | 575.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 54.50 € | **55.50 €** | 12.7 % | **14.8 %** | 55.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| AOCHUAN XE Gimbal s RGB osvetlením (čierny) | 48.50 € | **49.50 €** | 15.6 % | **17.9 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 56.00 € | **57.00 €** | 15.1 % | **17.1 %** | 57.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy VEGA X Lite | 29.00 € | **30.00 €** | 10.3 % | **14.1 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARRETT – taška na výbavu do každého terénu | 34.50 € | **35.50 €** | 15.0 % | **18.3 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná pumpa Flextail Tiny Pump X (oranžová) | 17.50 € | **18.50 €** | 16.6 % | **23.3 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multifunkčná baterka SuperFire G20, 470 lm, USB | 19.50 € | **20.50 €** | 14.1 % | **19.9 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CMWA23TNDB | 97.00 € | **98.00 €** | 10.1 % | **11.2 %** | 98.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Chytrá meteorologická stanice GARNI 925T | 160.00 € | **161.00 €** | 12.6 % | **13.3 %** | 161.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus G1 bicycle computer | 21.50 € | **22.50 €** | 15.0 % | **20.3 %** | 22.65 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 69.00 € | **69.90 €** | 15.0 % | **16.5 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 69.00 € | **69.90 €** | 15.0 % | **16.5 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová vesta HMS KOR20 20 kg | 80.00 € | **80.90 €** | 5.7 % | **6.9 %** | 80.94 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.90 €** | 40.0 % | **44.8 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Flextail Zero 1200 LED baterka (čierna) | 33.00 € | **33.90 €** | 14.9 % | **18.0 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio Fx 85 Es Plus 2E | 20.00 € | **20.90 €** | 10.0 % | **15.0 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 328.00 € | **328.90 €** | 7.8 % | **8.1 %** | 328.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **6.90 €** | 21.9 % | **37.8 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy TCA273D3-S | 280.90 € | **281.50 €** | 7.9 % | **8.1 %** | 281.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-S3 V2 Google TV box | 63.90 € | **64.50 €** | 10.4 % | **11.4 %** | 64.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Káblové slúchadlá Oneodio A71 (čierno-červené) | 23.90 € | **24.50 €** | 15.7 % | **18.6 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.50 €** | 19.0 % | **23.5 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.30 € | **8.90 €** | 9.2 % | **17.1 %** | 8.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare Colmi V06 AI Black | 70.90 € | **71.50 €** | 15.3 % | **16.3 %** | 71.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.90 € | **71.50 €** | 15.3 % | **16.3 %** | 71.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely | 1.90 € | **2.40 €** | 8.8 % | **37.4 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT 51016 | 50.00 € | **50.50 €** | 9.4 % | **10.5 %** | 50.13 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.00 € | **18.50 €** | 9.8 % | **12.8 %** | 18.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kaon MZ-52, satelitní přijímač Skylink | 62.00 € | **62.50 €** | 10.0 % | **10.9 %** | 62.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.50 € | **10.00 €** | 20.5 % | **26.8 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný termostat WiFi Avatto WT20R-EH-16A-W-WiFi | 30.00 € | **30.50 €** | 13.4 % | **15.3 %** | 30.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 137 | 33.00 € | **33.50 €** | 9.9 % | **11.5 %** | 33.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.00 € | **18.50 €** | 7.4 % | **10.4 %** | 18.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 44GW | 198.00 € | **198.50 €** | 6.1 % | **6.4 %** | 198.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun CG9043 | 213.00 € | **213.50 €** | 7.0 % | **7.3 %** | 213.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 259.00 € | **259.50 €** | 7.8 % | **8.0 %** | 259.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.00 € | **11.50 €** | 7.2 % | **12.1 %** | 11.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - komp... | 184.00 € | **184.50 €** | 10.8 % | **11.1 %** | 184.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.00 € | **16.50 €** | 8.3 % | **11.7 %** | 16.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90504 French press 800ml | 13.00 € | **13.50 €** | 10.0 % | **14.2 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Easy Chop | 33.00 € | **33.50 €** | 8.5 % | **10.2 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT96425VD | 252.00 € | **252.50 €** | 6.1 % | **6.3 %** | 252.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Sky B-4610 zlatý | 65.00 € | **65.50 €** | 9.1 % | **9.9 %** | 65.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 723590000 | 327.00 € | **327.50 €** | 6.4 % | **6.5 %** | 327.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Chamber Line 40 | 245.00 € | **245.50 €** | 7.3 % | **7.5 %** | 245.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun IS5247.VI | 183.00 € | **183.50 €** | 6.9 % | **7.2 %** | 183.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Daily PV1100C | 23.00 € | **23.50 €** | 7.9 % | **10.2 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 31.00 € | **31.50 €** | 52.6 % | **55.0 %** | 31.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.00 € | **143.50 €** | 7.6 % | **8.0 %** | 143.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.00 € | **36.50 €** | 6.3 % | **7.8 %** | 36.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 410090000 | 330.00 € | **330.50 €** | 6.9 % | **7.0 %** | 330.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.00 € | **110.50 €** | 9.7 % | **10.2 %** | 110.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 270.50 € | **271.00 €** | 7.9 % | **8.1 %** | 270.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO6164EA | 142.00 € | **142.50 €** | 8.4 % | **8.8 %** | 142.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 252.00 € | **252.50 €** | 7.9 % | **8.1 %** | 252.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GV9812E0 | 331.00 € | **331.50 €** | 8.7 % | **8.9 %** | 331.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 9 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 9 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roadstar IR-390D+BT/BK | 59.00 € | **59.50 €** | 7.6 % | **8.5 %** | 59.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-P41 BLACK | 295.00 € | **295.50 €** | 14.3 % | **14.5 %** | 295.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla 32E325BH 32" HD LED TV | 128.00 € | **128.50 €** | 5.1 % | **5.5 %** | 128.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WPNEI72SA1SWIFI | 286.00 € | **286.50 €** | 7.9 % | **8.1 %** | 286.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDIN38646D | 494.00 € | **494.50 €** | 7.0 % | **7.1 %** | 494.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CIP 3E7L0W Rapido | 293.00 € | **293.50 €** | 8.0 % | **8.1 %** | 293.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 46.00 € | **46.50 €** | 10.7 % | **11.9 %** | 46.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 600 Quick Start 85282 | 75.00 € | **75.50 €** | 8.7 % | **9.4 %** | 75.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 249.00 € | **249.50 €** | 6.6 % | **6.8 %** | 249.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 22.00 € | **22.50 €** | 7.5 % | **9.9 %** | 22.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.00 € | **30.50 €** | 7.7 % | **9.5 %** | 30.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.00 € | **30.50 €** | 12.5 % | **14.4 %** | 30.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 22.00 € | **22.50 €** | 37.7 % | **40.8 %** | 22.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1226 | 189.00 € | **189.50 €** | 6.8 % | **7.1 %** | 189.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.00 € | **22.50 €** | 28.5 % | **31.4 %** | 22.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skládací koloběžka NILS Extreme HM2009 šedá | 48.00 € | **48.50 €** | 8.7 % | **9.9 %** | 48.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 12.00 € | **12.50 €** | 31.0 % | **36.4 %** | 12.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-AW592 WHITE 1 karton | 248.00 € | **248.50 €** | 9.1 % | **9.3 %** | 248.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ninja FB151EUWH Frost Vault 47l | 225.00 € | **225.50 €** | 6.5 % | **6.8 %** | 225.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Organic fragrance Peppermint | 16.00 € | **16.50 €** | 7.7 % | **11.0 %** | 16.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 61521kuchyňská váha Page | 22.00 € | **22.50 €** | 8.3 % | **10.7 %** | 22.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Eddie B-4821 šedý | 29.00 € | **29.50 €** | 8.2 % | **10.1 %** | 29.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Crema 1 kg zrno | 20.00 € | **20.50 €** | 6.0 % | **8.7 %** | 20.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit sušák Comfort Tower 420 | 48.00 € | **48.50 €** | 9.7 % | **10.9 %** | 48.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 32.00 € | **32.50 €** | 8.0 % | **9.7 %** | 32.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256A | 44.00 € | **44.50 €** | 8.2 % | **9.4 %** | 44.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.50 € | **58.00 €** | 9.1 % | **10.0 %** | 57.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 46.00 € | **46.50 €** | 14.2 % | **15.4 %** | 46.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.50 € | **472.00 €** | 9.0 % | **9.1 %** | 471.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM1000 | 96.00 € | **96.50 €** | 11.3 % | **11.8 %** | 96.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor kovov UNI-T UT387E | 44.00 € | **44.50 €** | 7.7 % | **8.9 %** | 44.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente R2 robotický vysavač | 95.50 € | **96.00 €** | 6.9 % | **7.5 %** | 95.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-R2 | 95.50 € | **96.00 €** | 6.9 % | **7.5 %** | 95.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| EZIDRI FD1000 ULTRA DIGITAL | 267.00 € | **267.50 €** | 8.4 % | **8.6 %** | 267.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 276.00 € | **276.50 €** | 7.7 % | **7.9 %** | 276.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.00 € | **158.50 €** | 14.1 % | **14.5 %** | 158.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI MiTag set 3ks Google Find My APD006 | 37.00 € | **37.50 €** | 8.4 % | **9.9 %** | 37.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.00 € | **17.50 €** | 29.8 % | **33.6 %** | 17.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 28.00 € | **28.50 €** | 13.1 % | **15.2 %** | 28.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.00 € | **45.50 €** | 13.3 % | **14.6 %** | 45.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kaon MZ-104, 4K satelitní přijímač | 114.00 € | **114.50 €** | 5.1 % | **5.6 %** | 114.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S10 Rear Cam | 24.00 € | **24.50 €** | 8.6 % | **10.8 %** | 24.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| WYBOT C1 Pro – bezdrôtový robot na čistenie bazénov | 417.50 € | **418.00 €** | 5.5 % | **5.7 %** | 417.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Sous Vide SV06 | 132.00 € | **132.50 €** | 8.3 % | **8.8 %** | 132.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT76325VW | 166.00 € | **166.50 €** | 8.4 % | **8.7 %** | 166.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed Pods Pro s ANC FIXPDS-P-BK | 39.00 € | **39.50 €** | 9.9 % | **11.3 %** | 39.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WHT643E4XBG | 246.00 € | **246.50 €** | 7.9 % | **8.1 %** | 246.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO B5RCNA406HXB3 | 520.00 € | **520.50 €** | 6.9 % | **7.1 %** | 520.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B5XRCNA366HXB | 508.00 € | **508.50 €** | 7.0 % | **7.1 %** | 508.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.00 € | **238.50 €** | 7.7 % | **8.0 %** | 238.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10153 Horkovzdušná trouba | 169.00 € | **169.50 €** | 8.8 % | **9.1 %** | 169.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6401 PSB | 178.00 € | **178.50 €** | 8.8 % | **9.1 %** | 178.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica TFB 128 TX | 286.00 € | **286.50 €** | 7.9 % | **8.0 %** | 286.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BBIR17300BCS | 347.00 € | **347.50 €** | 6.9 % | **7.1 %** | 347.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.00 € | **12.50 €** | 40.2 % | **46.0 %** | 12.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.00 € | **139.50 €** | 7.6 % | **8.0 %** | 139.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.00 € | **16.50 €** | 12.2 % | **15.7 %** | 16.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rixon Soundplates | 42.00 € | **42.50 €** | 8.6 % | **9.9 %** | 42.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux ESKQ9 | 14.00 € | **14.50 €** | 8.8 % | **12.7 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.00 € | **63.50 €** | 13.6 % | **14.5 %** | 63.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90502 French press Atria 800 ml | 11.00 € | **11.50 €** | 8.3 % | **13.2 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Status STA 176214 | 10.00 € | **10.50 €** | 8.0 % | **13.4 %** | 10.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.00 € | **23.50 €** | 33.9 % | **36.9 %** | 23.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.00 € | **17.50 €** | 8.4 % | **11.6 %** | 17.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 335.00 € | **335.50 €** | 6.3 % | **6.5 %** | 335.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 157.00 € | **157.50 €** | 6.8 % | **7.1 %** | 157.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.00 € | **36.50 €** | 8.7 % | **10.2 %** | 36.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.00 € | **48.50 €** | 13.2 % | **14.4 %** | 48.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FVB015X | 18.00 € | **18.50 €** | 7.3 % | **10.3 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 37.50 € | **38.00 €** | 7.5 % | **8.9 %** | 37.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-SW100 BLACK | 221.00 € | **221.50 €** | 9.1 % | **9.3 %** | 221.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA A-S3200 BLACK | 6002.00 € | **6002.50 €** | 9.3 % | **9.3 %** | 6002.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje R619EAW6 | 481.00 € | **481.50 €** | 6.8 % | **6.9 %** | 481.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.00 € | **23.50 €** | 27.7 % | **30.5 %** | 23.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO MGC20130BFB | 78.50 € | **79.00 €** | 8.5 % | **9.2 %** | 78.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserová vodováha Uni-T LM575LD | 121.00 € | **121.50 €** | 10.4 % | **10.9 %** | 121.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO436BL | 36.00 € | **36.50 €** | 9.3 % | **10.9 %** | 36.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sekáček potravin TEESA TSA3227 | 21.00 € | **21.50 €** | 5.5 % | **8.0 %** | 21.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO7059S | 36.00 € | **36.50 €** | 8.9 % | **10.4 %** | 36.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 19.6 % | **21.8 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **44.50 €** | 11.0 % | **12.3 %** | 44.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.00 € | **23.50 €** | 6.4 % | **8.7 %** | 23.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA X12 | 17.00 € | **17.50 €** | 12.3 % | **15.6 %** | 17.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 30.00 € | **30.50 €** | 5.8 % | **7.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.50 €** | 18.8 % | **20.7 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **15.50 €** | 26.6 % | **30.9 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 13.00 € | **13.50 €** | 28.9 % | **33.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 10.00 € | **10.50 €** | 14.2 % | **19.9 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **21.50 €** | 26.4 % | **29.4 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ručný multimeter do auta UNI-T UT107 | 29.00 € | **29.50 €** | 7.8 % | **9.6 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-Hepa | 12.00 € | **12.50 €** | 8.4 % | **12.9 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 88.00 € | **88.50 €** | 13.8 % | **14.4 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX TT600 | 77.00 € | **77.50 €** | 8.7 % | **9.4 %** | 77.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 32.00 € | **32.50 €** | 9.5 % | **11.2 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.00 € | **26.50 €** | 9.3 % | **11.4 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **25.00 €** | 14.4 % | **16.7 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 46.00 € | **46.50 €** | 12.3 % | **13.5 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier R1100 2.0 (čierne) | 74.00 € | **74.50 €** | 8.4 % | **9.1 %** | 74.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 17.50 € | **18.00 €** | 11.8 % | **15.0 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GODOX SB-USW80120 Softbox s dáždnikom | 61.00 € | **61.50 €** | 6.0 % | **6.9 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AOCHUAN X2 Standard – stabilizátor (biely) | 57.00 € | **57.50 €** | 15.0 % | **16.1 %** | 57.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AOCHUAN X2 Standard Gimbal (čierny) | 57.00 € | **57.50 €** | 15.0 % | **16.1 %** | 57.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X Pro Standard (čierny) | 55.00 € | **55.50 €** | 14.7 % | **15.7 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 55.00 € | **55.50 €** | 14.7 % | **15.7 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 62.00 € | **62.50 €** | 14.9 % | **15.8 %** | 62.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (čierny) | 62.00 € | **62.50 €** | 14.9 % | **15.8 %** | 62.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Cyberpad (modrý) | 451.00 € | **451.50 €** | 9.4 % | **9.6 %** | 451.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čelovka Flextail Tiny Helio 700Z (oranžová) | 22.50 € | **23.00 €** | 15.0 % | **17.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 58.00 € | **58.50 €** | 9.5 % | **10.4 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 74.00 € | **74.50 €** | 12.8 % | **13.6 %** | 74.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.00 € | **125.50 €** | 14.7 % | **15.2 %** | 125.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 554.00 € | **554.50 €** | 6.9 % | **7.0 %** | 554.51 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes DAT BOSS LR 700 TFORCE LTE700 | 120.00 € | **120.50 €** | 12.3 % | **12.7 %** | 120.52 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 369.00 € | **369.50 €** | 6.1 % | **6.3 %** | 369.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 2.60 € | **3.10 €** | 13.6 % | **35.5 %** | 3.14 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 122.00 € | **122.50 €** | 13.1 % | **13.6 %** | 122.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH98A9WO | 274.50 € | **275.00 €** | 6.2 % | **6.3 %** | 275.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Orbitrek REBEL ACTIVE RBA-1011 | 134.00 € | **134.50 €** | 7.1 % | **7.5 %** | 134.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 227.00 € | **227.50 €** | 8.5 % | **8.7 %** | 227.62 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 629.50 € | **630.00 €** | 6.3 % | **6.4 %** | 630.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Creality Sermoon P1 | 3020.50 € | **3020.90 €** | 10.0 % | **10.0 %** | 3020.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip Red | 81.50 € | **81.90 €** | 8.1 % | **8.7 %** | 81.62 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 81.50 € | **81.90 €** | 8.1 % | **8.7 %** | 81.62 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun HF5050.IBK | 121.50 € | **121.90 €** | 9.5 % | **9.8 %** | 121.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Rotaro PowerVac 2v1 16V | 113.50 € | **113.90 €** | 9.4 % | **9.8 %** | 113.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Rotaro PowerVac 2v1 20V | 113.50 € | **113.90 €** | 5.3 % | **5.6 %** | 113.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 8501A | 150.50 € | **150.90 €** | 5.5 % | **5.8 %** | 150.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový reproduktor QCY SP300 (biely) | 92.50 € | **92.90 €** | 12.3 % | **12.8 %** | 92.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 70.50 € | **70.90 €** | 9.1 % | **9.8 %** | 70.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2014401 Zmrzlinovač | 174.50 € | **174.90 €** | 7.6 % | **7.8 %** | 174.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 119.50 € | **119.90 €** | 13.5 % | **13.8 %** | 119.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sony WFLS910NV fialová | 154.50 € | **154.90 €** | 7.4 % | **7.7 %** | 154.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 8401SE | 124.50 € | **124.90 €** | 7.1 % | **7.4 %** | 124.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW5558E0 | 177.50 € | **177.90 €** | 8.6 % | **8.9 %** | 177.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer kuchyňský robot ZKR2010 | 175.50 € | **175.90 €** | 8.4 % | **8.7 %** | 175.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 9.2 % | **9.7 %** | 84.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CA20FMW7NG Candy Wave 600 | 147.50 € | **147.90 €** | 5.2 % | **5.5 %** | 147.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 124.50 € | **124.90 €** | 9.9 % | **10.3 %** | 124.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1015502 Mikrovlnná trouba | 116.50 € | **116.90 €** | 9.0 % | **9.3 %** | 116.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 1535SS | 206.50 € | **206.90 €** | 8.3 % | **8.5 %** | 206.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Bellagio červený multikapslový | 114.50 € | **114.90 €** | 6.3 % | **6.6 %** | 114.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Army 10x40 se zaměřo... | 108.50 € | **108.90 €** | 5.0 % | **5.4 %** | 108.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 20 | 233.50 € | **233.90 €** | 9.7 % | **9.9 %** | 233.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu Uni-T UT501B | 76.50 € | **76.90 €** | 9.5 % | **10.0 %** | 76.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nástenný skener Uni-T UT387LM | 74.50 € | **74.90 €** | 10.9 % | **11.5 %** | 74.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal RK812110 | 105.50 € | **105.90 €** | 6.1 % | **6.5 %** | 105.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente DigiChef+ kuchyňský robot | 123.50 € | **123.90 €** | 6.4 % | **6.8 %** | 123.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO354VD | 130.50 € | **130.90 €** | 8.5 % | **8.9 %** | 130.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42102SV | 98.50 € | **98.90 €** | 9.0 % | **9.5 %** | 98.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| PRIMO PR406IM | 125.50 € | **125.90 €** | 7.6 % | **8.0 %** | 125.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO331L | 103.50 € | **103.90 €** | 6.9 % | **7.3 %** | 103.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 158.50 € | **158.90 €** | 5.8 % | **6.1 %** | 158.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal OptiGrill GC7P0810 | 98.50 € | **98.90 €** | 9.3 % | **9.8 %** | 98.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW402HE0 | 129.50 € | **129.90 €** | 9.1 % | **9.5 %** | 129.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 179.50 € | **179.90 €** | 13.2 % | **13.4 %** | 179.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 119.50 € | **119.90 €** | 10.2 % | **10.6 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 139.50 € | **139.90 €** | 7.9 % | **8.2 %** | 139.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 195.50 € | **195.90 €** | 9.5 % | **9.8 %** | 195.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 65.50 € | **65.90 €** | 9.3 % | **10.0 %** | 65.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 134.50 € | **134.90 €** | 5.7 % | **6.1 %** | 134.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Poseidon D70 Soundbar | 159.50 € | **159.90 €** | 10.2 % | **10.5 %** | 159.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultima Apollo S70 Ultra Soundbar | 199.50 € | **199.90 €** | 12.0 % | **12.2 %** | 199.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| EDIFIER T5s subwoofer černý | 125.50 € | **125.90 €** | 7.0 % | **7.4 %** | 125.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| EDIFIER T5s subwoofer hnědý | 125.50 € | **125.90 €** | 7.0 % | **7.4 %** | 125.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Shifter Moza Racing HGP RS039 | 149.50 € | **149.90 €** | 11.4 % | **11.7 %** | 149.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CBT6130/3X | 64.50 € | **64.90 €** | 6.1 % | **6.7 %** | 64.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Měnič napětí EPever IPower IP2000-42-Plus-T 2000W 48V | 209.50 € | **209.90 €** | 9.6 % | **9.8 %** | 209.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **10.00 €** | 33.2 % | **38.7 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.50 € | **10.90 €** | 12.8 % | **17.1 %** | 10.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **11.90 €** | 5.7 % | **9.4 %** | 11.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.50 € | **10.90 €** | 7.2 % | **11.3 %** | 10.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.50 € | **10.90 €** | 6.7 % | **10.8 %** | 10.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 713240002 | 11.50 € | **11.90 €** | 9.5 % | **13.3 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.50 € | **13.90 €** | 13.2 % | **16.5 %** | 13.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco INTENSO 500 g | 11.50 € | **11.90 €** | 5.0 % | **8.7 %** | 11.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka KRUGER & MATZ KM0904 10000 mAh Li-pol | 13.50 € | **13.90 €** | 7.8 % | **11.0 %** | 13.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson CR 50 | 14.50 € | **14.90 €** | 7.3 % | **10.2 %** | 14.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laica VT3509 | 11.50 € | **11.90 €** | 6.2 % | **9.9 %** | 11.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.40 € | **8.80 €** | 38.0 % | **44.5 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná žiarovka Yeelight W1 GU10 (Biela) | 15.50 € | **15.90 €** | 10.7 % | **13.6 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná   6V /  7Ah  EMOS | 11.50 € | **11.90 €** | 5.1 % | **8.7 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.30 €** | 19.7 % | **36.2 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **5.10 €** | 34.5 % | **46.0 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.50 € | **21.90 €** | 9.6 % | **11.6 %** | 21.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenný keramický ohrievač, 2000 W, biely | 39.50 € | **39.90 €** | 4.8 % | **5.9 %** | 39.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.50 € | **17.90 €** | 9.2 % | **11.7 %** | 17.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT náhradní filtry Mg2+ 6ks | 24.50 € | **24.90 €** | 20.8 % | **22.8 %** | 24.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE145 | 39.50 € | **39.90 €** | 7.4 % | **8.5 %** | 39.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 21.50 € | **21.90 €** | 6.3 % | **8.2 %** | 21.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO8709P | 28.50 € | **28.90 €** | 7.1 % | **8.6 %** | 28.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E200SM | 17.50 € | **17.90 €** | 18.8 % | **21.5 %** | 17.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maono G1 Neo Sound Card Black | 44.50 € | **44.90 €** | 12.3 % | **13.3 %** | 44.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 160390000 | 17.50 € | **17.90 €** | 10.6 % | **13.2 %** | 17.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Vintage 2868/05, modrá | 38.50 € | **38.90 €** | 6.0 % | **7.1 %** | 38.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22760-56/RH | 30.50 € | **30.90 €** | 12.0 % | **13.5 %** | 30.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 48.50 € | **48.90 €** | 9.9 % | **10.8 %** | 48.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 210390000 | 40.50 € | **40.90 €** | 7.7 % | **8.8 %** | 40.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Onyx BS2400 | 30.50 € | **30.90 €** | 8.7 % | **10.1 %** | 30.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Soundbar KRUGER & MATZ Planet 2.1 | 54.50 € | **54.90 €** | 7.1 % | **7.8 %** | 54.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 24.50 € | **24.90 €** | 9.1 % | **10.9 %** | 24.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24010-56 | 40.50 € | **40.90 €** | 9.8 % | **10.9 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FSR2002 | 16.50 € | **16.90 €** | 9.5 % | **12.2 %** | 16.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.50 € | **37.90 €** | 10.4 % | **11.6 %** | 37.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **21.90 €** | 6.7 % | **8.7 %** | 21.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 23310-56/RH | 45.50 € | **45.90 €** | 13.8 % | **14.8 %** | 45.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko ATP3100N | 51.50 € | **51.90 €** | 13.9 % | **14.8 %** | 51.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 321990020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Rouge BP3443 | 31.50 € | **31.90 €** | 8.3 % | **9.7 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZCK7650 | 32.50 € | **32.90 €** | 11.2 % | **12.5 %** | 32.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| RICATECH PR1980 Ghettoblaster | 50.50 € | **50.90 €** | 5.2 % | **6.1 %** | 50.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica KF 17191 | 29.50 € | **29.90 €** | 21.1 % | **22.7 %** | 29.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal HB 65KD38 | 55.50 € | **55.90 €** | 11.5 % | **12.3 %** | 55.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9215AV | 32.50 € | **32.90 €** | 9.4 % | **10.7 %** | 32.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9195C | 32.50 € | **32.90 €** | 9.1 % | **10.5 %** | 32.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.50 € | **16.90 €** | 10.0 % | **12.7 %** | 16.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **17.90 €** | 5.7 % | **8.1 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 23.50 € | **23.90 €** | 15.4 % | **17.4 %** | 23.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti Uni-T UT332+ | 59.50 € | **59.90 €** | 9.3 % | **10.1 %** | 59.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 9218 WK | 21.50 € | **21.90 €** | 8.4 % | **10.4 %** | 21.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Combi Clean M + náhr. Static | 20.50 € | **20.90 €** | 7.9 % | **10.1 %** | 20.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed Creator Tripod FIXCRT-BK | 42.50 € | **42.90 €** | 8.0 % | **9.0 %** | 42.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 52.50 € | **52.90 €** | 8.6 % | **9.4 %** | 52.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 35.50 € | **35.90 €** | 31.9 % | **33.4 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.50 € | **39.90 €** | 15.0 % | **16.1 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 20.50 € | **20.90 €** | 23.6 % | **26.1 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Automat na horkou vodu NEDIS KAWD100FBK / 2.5 l / ov... | 62.50 € | **62.90 €** | 11.4 % | **12.1 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dotykový vypínač svetla ZigBee Avatto TS60-EU-W1 Sin... | 20.50 € | **20.90 €** | 12.2 % | **14.4 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 48.50 € | **48.90 €** | 20.0 % | **20.9 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 44.50 € | **44.90 €** | 9.0 % | **10.0 %** | 44.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 44.50 € | **44.90 €** | 9.0 % | **10.0 %** | 44.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rooma Espresso A7 bílá | 537.50 € | **537.90 €** | 5.9 % | **6.0 %** | 537.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 215RB | 304.50 € | **304.90 €** | 7.9 % | **8.1 %** | 304.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 343.50 € | **343.90 €** | 6.7 % | **6.8 %** | 343.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI6421B | 384.50 € | **384.90 €** | 6.9 % | **7.1 %** | 384.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.50 € | **394.90 €** | 6.9 % | **7.1 %** | 394.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 350.50 € | **350.90 €** | 5.7 % | **5.8 %** | 350.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin BM3WFU3721WBW | 323.50 € | **323.90 €** | 7.0 % | **7.1 %** | 323.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko PowerIntense BDFN26560XP | 545.50 € | **545.90 €** | 8.0 % | **8.1 %** | 545.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 263.50 € | **263.90 €** | 8.5 % | **8.6 %** | 263.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9079KR-PROMO | 284.50 € | **284.90 €** | 6.3 % | **6.5 %** | 284.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje DE69CS | 497.50 € | **497.90 €** | 6.4 % | **6.5 %** | 497.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 363A | 594.50 € | **594.90 €** | 9.2 % | **9.3 %** | 594.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EWS6526WC | 328.50 € | **328.90 €** | 6.5 % | **6.6 %** | 328.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 365.50 € | **365.90 €** | 9.6 % | **9.7 %** | 365.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robotický čistič okien MOVA N1 (biely) | 284.50 € | **284.90 €** | 13.7 % | **13.9 %** | 284.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Neptune 4 Max | 345.50 € | **345.90 €** | 13.9 % | **14.1 %** | 345.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant MOZA RACING KS Pro RS095 | 346.50 € | **346.90 €** | 13.1 % | **13.2 %** | 346.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B3RCSO255S | 274.50 € | **274.90 €** | 7.9 % | **8.0 %** | 274.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.90 €** | 32.5 % | **38.5 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.40 €** | 16.9 % | **33.6 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.70 € | **8.00 €** | 40.0 % | **45.5 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.60 €** | 34.3 % | **38.6 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.20 € | **9.40 €** | 7.5 % | **9.8 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **4.00 €** | 29.3 % | **36.1 %** | 3.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 6.60 € | **6.80 €** | 13.4 % | **16.9 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 5.70 € | **5.90 €** | 8.5 % | **12.3 %** | 5.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.50 €** | 33.4 % | **39.6 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight senzor pre meteostanice TE110 | 5.20 € | **5.40 €** | 18.1 % | **22.6 %** | 5.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.50 € | **8.70 €** | 16.5 % | **19.3 %** | 8.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.40 € | **5.60 €** | 8.4 % | **12.4 %** | 5.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.40 € | **5.60 €** | 8.4 % | **12.4 %** | 5.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.80 € | **9.00 €** | 8.1 % | **10.5 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 100 | 349.90 € | **350.00 €** | 5.1 % | **5.1 %** | 349.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK Dobsonův New Skyline PLUS 8" (200/1200) | 699.90 € | **700.00 €** | 5.1 % | **5.1 %** | 699.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-F51 BLACK 1 karton | 298.90 € | **299.00 €** | 9.3 % | **9.3 %** | 298.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 256A | 385.90 € | **386.00 €** | 10.0 % | **10.0 %** | 385.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Sensazione černý | 330.90 € | **331.00 €** | 6.0 % | **6.0 %** | 330.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6412 CB | 269.90 € | **270.00 €** | 6.2 % | **6.2 %** | 269.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 278.90 € | **279.00 €** | 7.8 % | **7.8 %** | 278.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 502.90 € | **503.00 €** | 6.4 % | **6.4 %** | 502.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov WYBOT M1C | 669.90 € | **670.00 €** | 5.4 % | **5.5 %** | 670.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 329.90 € | **330.00 €** | 13.5 % | **13.6 %** | 330.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 388.90 € | **389.00 €** | 7.1 % | **7.1 %** | 389.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Creality Falcon 2 Pro S 22W laserový gravírovací stroj | 757.90 € | **758.00 €** | 6.4 % | **6.4 %** | 758.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 258.90 € | **259.00 €** | 8.9 % | **8.9 %** | 259.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultima Apollo S90 Soundbar | 308.90 € | **309.00 €** | 8.7 % | **8.8 %** | 309.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera OBSBOT Tiny 3 | 348.90 € | **349.00 €** | 6.3 % | **6.4 %** | 349.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 998.90 € | **999.00 €** | 7.7 % | **7.7 %** | 999.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 378.90 € | **379.00 €** | 8.2 % | **8.2 %** | 379.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 479.90 € | **480.00 €** | 11.6 % | **11.6 %** | 480.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 279.90 € | **280.00 €** | 11.4 % | **11.4 %** | 280.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 949.90 € | **950.00 €** | 11.0 % | **11.0 %** | 950.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 259.90 € | **260.00 €** | 13.7 % | **13.7 %** | 260.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 327.90 € | **328.00 €** | 12.9 % | **12.9 %** | 328.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 409.90 € | **410.00 €** | 11.1 % | **11.1 %** | 410.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun Z20 | 347.90 € | **348.00 €** | 11.4 % | **11.5 %** | 348.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UREVO FoldiMix 5L Pro elektrický bežecký pás (strieb... | 498.90 € | **499.00 €** | 10.7 % | **10.7 %** | 499.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus T2 smart bike trainer | 589.90 € | **590.00 €** | 10.2 % | **10.2 %** | 590.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cyklotrenažér Cycplus T3 | 828.90 € | **829.00 €** | 12.2 % | **12.2 %** | 829.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný cyklotrenažér Cycplus T2H | 384.90 € | **385.00 €** | 8.6 % | **8.6 %** | 385.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK619DA2XL4 | 468.90 € | **469.00 €** | 5.1 % | **5.1 %** | 469.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje RKI517E41 | 389.90 € | **390.00 €** | 9.3 % | **9.3 %** | 390.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy ProWash 550 SLIM BP 37SBL8-S | 272.90 € | **273.00 €** | 7.9 % | **7.9 %** | 273.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GS541C10W | 340.90 € | **341.00 €** | 5.8 % | **5.9 %** | 341.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux MCK CZ | 25.90 € | **26.00 €** | 26.8 % | **27.3 %** | 25.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 33.0 % | **33.7 %** | 19.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **48.00 €** | 10.0 % | **10.2 %** | 47.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 59.90 € | **60.00 €** | 7.6 % | **7.8 %** | 59.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Fortissimo 1 kg zrno | 17.90 € | **18.00 €** | 7.7 % | **8.3 %** | 17.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM603 růžová | 35.90 € | **36.00 €** | 9.4 % | **9.7 %** | 35.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cabletech UCH0204 | 18.90 € | **19.00 €** | 6.0 % | **6.6 %** | 18.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal B817S255 | 29.90 € | **30.00 €** | 5.5 % | **5.8 %** | 29.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer | 9.20 € | **9.30 €** | 31.7 % | **33.1 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 21395-56 | 51.90 € | **52.00 €** | 7.5 % | **7.7 %** | 51.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 7.0 % | **7.4 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zeblaze GTS 3 PRO Smartwatch (White) | 22.90 € | **23.00 €** | 9.4 % | **9.9 %** | 22.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.20 € | **9.30 €** | 18.5 % | **19.8 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá QCY Crossky R70 (modré) | 44.90 € | **45.00 €** | 13.4 % | **13.7 %** | 44.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 44.90 € | **45.00 €** | 14.0 % | **14.3 %** | 44.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 44.90 € | **45.00 €** | 14.0 % | **14.3 %** | 44.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.90 € | **46.00 €** | 9.1 % | **9.4 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BL16GE30 | 55.90 € | **56.00 €** | 5.4 % | **5.6 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 2869/05 | 46.90 € | **47.00 €** | 8.3 % | **8.5 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 16.90 € | **17.00 €** | 9.1 % | **9.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 26.90 € | **27.00 €** | 9.6 % | **10.0 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 27.90 € | **28.00 €** | 11.7 % | **12.1 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Classic Siena 180 Easy | 26.90 € | **27.00 €** | 11.6 % | **12.0 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.30 € | **6.40 €** | 24.0 % | **26.0 %** | 6.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.60 € | **6.70 €** | 29.9 % | **31.9 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.30 € | **4.40 €** | 52.0 % | **55.5 %** | 4.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.30 € | **6.40 €** | 34.8 % | **36.9 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 6.10 € | **6.20 €** | 13.5 % | **15.3 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 1.90 € | **2.00 €** | 50.0 % | **57.9 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.50 € | **1.60 €** | 35.5 % | **44.5 %** | 1.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.50 € | **3.60 €** | 37.5 % | **41.4 %** | 3.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.60 € | **3.70 €** | 32.4 % | **36.1 %** | 3.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.30 € | **2.40 €** | 23.8 % | **29.2 %** | 2.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka plochá priama, IP20, čierna | 0.70 € | **0.80 €** | 18.6 % | **35.5 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.20 € | **5.30 €** | 40.5 % | **43.2 %** | 5.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.50 € | **7.60 €** | 50.6 % | **52.6 %** | 7.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 11.90 € | **12.00 €** | 36.8 % | **38.0 %** | 11.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 13.90 € | **14.00 €** | 31.9 % | **32.8 %** | 13.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.70 € | **6.80 €** | 30.9 % | **32.9 %** | 6.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.7 % | **9.7 %** | 10.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-50245 | 12.90 € | **13.00 €** | 9.9 % | **10.8 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.20 € | **2.30 €** | 39.7 % | **46.1 %** | 2.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 10.90 € | **11.00 €** | 30.7 % | **31.9 %** | 10.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.30 €** | 15.5 % | **17.7 %** | 5.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.00 € | **7.10 €** | 19.6 % | **21.3 %** | 7.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.20 € | **2.30 €** | 44.2 % | **50.8 %** | 2.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne nástenné svetlo, teplá a studená... | 7.50 € | **7.60 €** | 22.9 % | **24.6 %** | 7.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 6.90 € | **7.00 €** | 19.1 % | **20.8 %** | 6.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.70 € | **2.80 €** | 23.3 % | **27.9 %** | 2.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.70 € | **4.80 €** | 16.9 % | **19.3 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.80 € | **9.90 €** | 29.1 % | **30.5 %** | 9.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.60 € | **9.70 €** | 31.2 % | **32.5 %** | 9.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 35B1 | 136.90 € | **137.00 €** | 5.7 % | **5.8 %** | 136.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 91 | 190.90 € | **191.00 €** | 7.0 % | **7.1 %** | 190.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 122.90 € | **123.00 €** | 7.8 % | **7.9 %** | 123.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roborock Q10 PF čistiaci robot (čierny) | 217.90 € | **218.00 €** | 14.4 % | **14.5 %** | 218.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 159.90 € | **160.00 €** | 8.2 % | **8.3 %** | 160.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 183.90 € | **184.00 €** | 5.9 % | **6.0 %** | 184.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 178.90 € | **179.00 €** | 5.3 % | **5.3 %** | 179.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gramofon KRUGER & MATZ TT-602 | 186.90 € | **187.00 €** | 5.2 % | **5.2 %** | 187.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 88.90 € | **89.00 €** | 6.9 % | **7.1 %** | 89.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná batéria pre DJI Mini 5 Pro | 80.90 € | **81.00 €** | 6.7 % | **6.9 %** | 81.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 192.90 € | **193.00 €** | 12.9 % | **12.9 %** | 193.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 192.90 € | **193.00 €** | 12.9 % | **13.0 %** | 193.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E3S (čierny) | 186.90 € | **187.00 €** | 8.1 % | **8.2 %** | 187.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 204.90 € | **205.00 €** | 12.3 % | **12.4 %** | 205.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 224.90 € | **225.00 €** | 12.2 % | **12.2 %** | 225.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 211.90 € | **212.00 €** | 12.8 % | **12.9 %** | 212.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 243.90 € | **244.00 €** | 14.1 % | **14.1 %** | 244.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 104.90 € | **105.00 €** | 9.9 % | **10.0 %** | 105.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.90 € | **90.00 €** | 14.7 % | **14.8 %** | 90.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Geneinno T1 200m 4K UHD podvodný dron | 1921.90 € | **1922.00 €** | 12.4 % | **12.4 %** | 1922.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1330.00 €** | 13.3 % | **13.3 %** | 1330.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3499.90 € | **3500.00 €** | 12.2 % | **12.2 %** | 3500.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (965)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.00 €** | 15.0 % | **5.9 %** | 2645.50 € | stávame sa najlacnejší |
| YAMAHA R-N800A BLACK | 1099.00 € | **955.00 €** | 23.4 % | **7.2 %** | 955.50 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.50 €** | 28.6 % | **5.9 %** | 633.90 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.00 €** | 28.6 % | **5.9 %** | 526.50 € | stávame sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.90 €** | 35.8 % | **6.6 %** | 384.00 € | stávame sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **369.00 €** | 34.1 % | **5.5 %** | 369.50 € | stávame sa najlacnejší |
| Gorenje FN619EAW6 | 639.00 € | **543.50 €** | 24.5 % | **5.9 %** | 543.90 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **503.50 €** | 26.9 % | **6.7 %** | 503.90 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Plus Combo | 1176.90 € | **1085.90 €** | 15.0 % | **6.1 %** | 1086.00 € | stávame sa najlacnejší |
| Gorenje GECS5C70XPA | 559.00 € | **471.00 €** | 26.8 % | **6.9 %** | 471.50 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 882.50 € | **819.00 €** | 15.0 % | **6.7 %** | 819.25 € | stávame sa najlacnejší |
| HP OmniBook 5 AI 16-af1003nc (C09WNEA) | 1042.90 € | **995.50 €** | 10.0 % | **5.0 %** | 993.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - na kovovom bubne, 4 zás... | 174.50 € | **127.50 €** | 44.0 % | **5.2 %** | 124.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 1064.90 € | **1019.00 €** | 15.0 % | **10.1 %** | 1019.50 € | stávame sa najlacnejší |
| Indesit BTW S50400 EU/N | 309.00 € | **263.50 €** | 23.3 % | **5.2 %** | 262.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 574.50 € | **529.50 €** | 15.0 % | **6.0 %** | 529.90 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.00 €** | 18.3 % | **6.8 %** | 411.50 € | stávame sa najlacnejší |
| Roborock F25 | 348.00 € | **313.50 €** | 22.1 % | **10.0 %** | 313.90 € | stávame sa najlacnejší |
| Roborock Qrevo 2 Pro White | 709.50 € | **677.50 €** | 10.0 % | **5.1 %** | 594.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Hi Combo | 354.00 € | **324.50 €** | 15.0 % | **5.4 %** | 324.90 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 408.50 € | **379.50 €** | 15.0 % | **6.9 %** | 379.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 145.50 € | **116.50 €** | 43.1 % | **14.6 %** | 116.90 € | stávame sa najlacnejší |
| 3D tlačový list ELEGOO OrangeStorm Giga | 2706.50 € | **2678.50 €** | 15.0 % | **13.8 %** | 2678.90 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3431B 1600W 12V | 304.50 € | **278.90 €** | 15.0 % | **5.4 %** | 279.00 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **97.90 €** | 49.9 % | **18.8 %** | 98.00 € | stávame sa najlacnejší |
| Chladnička na nápoje Euhomy BR001-110 s objemom 91 l... | 287.50 € | **262.90 €** | 15.0 % | **5.1 %** | 187.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **401.90 €** | 15.0 % | **8.5 %** | 402.00 € | stávame sa najlacnejší |
| Euhomy BR001-89 70L chladnička na nápoje (čierna) | 259.50 € | **236.90 €** | 15.1 % | **5.1 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D Tlačiareň Creality CR-10 SE | 259.50 € | **236.90 €** | 15.1 % | **5.1 %** | 187.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GSXE90EVAD | 2218.90 € | **2198.00 €** | 10.0 % | **9.0 %** | 2198.50 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (čierny) | 272.90 € | **252.50 €** | 15.0 % | **6.4 %** | 252.78 € | stávame sa najlacnejší |
| Beko B3RCNA415HXB | 443.90 € | **423.90 €** | 10.0 % | **5.0 %** | 351.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 528.90 € | **509.00 €** | 14.1 % | **9.9 %** | 509.05 € | stávame sa najlacnejší |
| Panel plynu MOZA AS008 MTP (PC) | 348.50 € | **328.90 €** | 15.0 % | **8.5 %** | 329.00 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.50 €** | 10.1 % | **6.8 %** | 638.90 € | stávame sa najlacnejší |
| YAMAHA RX-V4A Black | 501.50 € | **482.50 €** | 9.2 % | **5.1 %** | 417.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540XP | 460.50 € | **441.50 €** | 10.1 % | **5.6 %** | 441.90 € | stávame sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 447.00 € | **429.00 €** | 14.9 % | **10.3 %** | 429.50 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.00 €** | 14.9 % | **9.6 %** | 346.50 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 453.00 € | **436.50 €** | 9.4 % | **5.4 %** | 436.89 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.50 €** | 10.0 % | **7.9 %** | 798.90 € | stávame sa najlacnejší |
| Rowenta RH 6756WO | 139.00 € | **123.00 €** | 21.7 % | **7.7 %** | 123.50 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 395.50 € | **379.90 €** | 15.0 % | **10.5 %** | 380.00 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **523.90 €** | 10.1 % | **6.9 %** | 524.00 € | stávame sa najlacnejší |
| Albrecht DR 865 | 179.00 € | **163.90 €** | 25.0 % | **14.4 %** | 164.00 € | stávame sa najlacnejší |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 305.00 € | **290.50 €** | 14.9 % | **9.5 %** | 290.55 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **329.50 €** | 10.1 % | **5.5 %** | 329.90 € | stávame sa najlacnejší |
| Steba FDM 2 výrobník ledové tříště | 318.00 € | **303.90 €** | 10.0 % | **5.1 %** | 207.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **297.50 €** | 10.1 % | **5.2 %** | 269.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 463.50 € | **449.50 €** | 10.0 % | **6.7 %** | 449.90 € | stávame sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.00 €** | 54.8 % | **9.9 %** | 34.50 € | stávame sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 160.50 € | **146.90 €** | 14.9 % | **5.1 %** | 147.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah VIPOW BAT0496 | 254.50 € | **241.00 €** | 14.9 % | **8.8 %** | 241.49 € | stávame sa najlacnejší |
| Reproduktory Edifier R2850DB 2.0 (čierne) | 281.00 € | **268.50 €** | 14.9 % | **9.8 %** | 268.87 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **482.90 €** | 10.0 % | **7.4 %** | 483.00 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **30.00 €** | 48.1 % | **5.8 %** | 30.50 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **367.00 €** | 10.0 % | **6.6 %** | 367.50 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 270.50 € | **259.00 €** | 15.0 % | **10.1 %** | 259.23 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 75.00 € | **63.90 €** | 59.1 % | **35.6 %** | 64.00 € | stávame sa najlacnejší |
| Edifier SS02C stojany pre reproduktory Edifier S2000... | 129.50 € | **118.50 €** | 15.1 % | **5.3 %** | 107.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Mileseey S50 | 124.90 € | **113.90 €** | 15.1 % | **5.0 %** | 104.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1000 URZ3406-LFP4 700W 12V | 126.50 € | **115.50 €** | 15.0 % | **5.0 %** | 114.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 338.90 € | **327.90 €** | 15.1 % | **11.3 %** | 328.00 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 158.00 € | **147.00 €** | 14.9 % | **6.9 %** | 147.50 € | stávame sa najlacnejší |
| Prenosný 16,1" monitor Arzopa Z1FC Silver Gray | 123.50 € | **113.00 €** | 15.0 % | **5.3 %** | 113.50 € | stávame sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.50 €** | 25.0 % | **7.1 %** | 62.90 € | stávame sa najlacnejší |
| JBL TOUR ONE M3, Black | 275.00 € | **264.90 €** | 9.3 % | **5.3 %** | 265.00 € | stávame sa najlacnejší |
| JBL TOUR ONE M3, Latte | 275.00 € | **264.90 €** | 9.3 % | **5.3 %** | 265.00 € | stávame sa najlacnejší |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 120.00 € | **109.90 €** | 14.8 % | **5.1 %** | 88.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 408.90 € | **398.90 €** | 11.2 % | **8.5 %** | 399.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 225.50 € | **215.50 €** | 15.0 % | **9.9 %** | 215.61 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.50 €** | 15.0 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| HDD 3.5" 1TB 64MB Seagate SKYHAWK pro kamerové systé... | 152.50 € | **142.50 €** | 15.1 % | **7.6 %** | 142.89 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.50 €** | 44.6 % | **7.1 %** | 28.90 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **299.50 €** | 10.0 % | **6.5 %** | 299.90 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **299.50 €** | 10.0 % | **6.5 %** | 299.90 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.50 €** | 10.0 % | **6.9 %** | 340.90 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **468.00 €** | 15.0 % | **12.6 %** | 468.50 € | stávame sa najlacnejší |
| JBL Partybox Stage 320 | 418.90 € | **409.00 €** | 7.6 % | **5.0 %** | 400.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chladící box TEESA TSA6004 40l, 12V/24V/230V/baterie... | 260.90 € | **251.00 €** | 15.0 % | **10.6 %** | 251.29 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (čier... | 328.50 € | **318.90 €** | 15.0 % | **11.6 %** | 319.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 328.50 € | **318.90 €** | 15.0 % | **11.6 %** | 319.00 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **252.90 €** | 10.1 % | **6.1 %** | 253.00 € | stávame sa najlacnejší |
| Gorenje W2PNEI84A1SW | 379.50 € | **370.00 €** | 16.9 % | **14.0 %** | 370.31 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 44.00 € | **34.50 €** | 74.3 % | **36.7 %** | 34.90 € | stávame sa najlacnejší |
| Reproduktory Edifier S351DB 2.1 (čierne) | 258.00 € | **248.50 €** | 14.9 % | **10.7 %** | 248.90 € | stávame sa najlacnejší |
| Rowenta GZ5436E0 | 298.50 € | **289.00 €** | 10.0 % | **6.5 %** | 289.50 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1RC 16,0" | 117.90 € | **108.50 €** | 14.5 % | **5.4 %** | 106.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Výrobník ledu Ruhhy K5536 | 111.00 € | **101.90 €** | 14.8 % | **5.3 %** | 86.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja FB131EUGY Frost Vault 28l | 196.90 € | **187.90 €** | 10.1 % | **5.1 %** | 186.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **38.90 €** | 38.7 % | **12.7 %** | 39.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.50 €** | 14.9 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161E | 117.50 € | **108.50 €** | 14.9 % | **6.1 %** | 108.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 204.50 € | **195.50 €** | 15.0 % | **9.9 %** | 195.89 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **236.00 €** | 15.1 % | **11.1 %** | 236.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 120.00 € | **111.50 €** | 15.0 % | **6.9 %** | 111.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 41.50 € | **33.00 €** | 53.9 % | **22.4 %** | 33.50 € | stávame sa najlacnejší |
| Gorenje WG2PS74A2W | 247.90 € | **239.50 €** | 10.0 % | **6.3 %** | 239.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 31.00 € | **22.90 €** | 53.7 % | **13.5 %** | 23.00 € | stávame sa najlacnejší |
| Electrolux EF167 | 21.99 € | **13.90 €** | 70.9 % | **8.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **22.90 €** | 54.5 % | **14.5 %** | 23.00 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 757.90 € | **749.90 €** | 11.4 % | **10.2 %** | 750.00 € | stávame sa najlacnejší |
| BEKO STM4116B | 39.00 € | **31.00 €** | 32.7 % | **5.5 %** | 31.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **299.90 €** | 15.0 % | **12.2 %** | 299.97 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **299.90 €** | 15.0 % | **12.2 %** | 299.97 € | stávame sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 145.50 € | **137.90 €** | 14.9 % | **8.9 %** | 138.00 € | stávame sa najlacnejší |
| TechniSat TECHNIRADIO SOLAR 2 solární rádio | 91.00 € | **83.50 €** | 14.9 % | **5.4 %** | 81.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 98.50 € | **91.00 €** | 43.6 % | **32.7 %** | 91.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 110.00 € | **102.50 €** | 43.6 % | **33.8 %** | 102.90 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.50 € | **151.00 €** | 15.1 % | **9.7 %** | 151.50 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 28.50 € | **21.00 €** | 58.5 % | **16.8 %** | 21.50 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **101.00 €** | 14.9 % | **7.0 %** | 101.50 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 29.00 € | **21.90 €** | 54.0 % | **16.3 %** | 22.00 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 47.00 € | **39.90 €** | 58.7 % | **34.7 %** | 40.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **84.90 €** | 14.8 % | **5.9 %** | 85.00 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 183.90 € | **176.90 €** | 10.2 % | **6.0 %** | 177.00 € | stávame sa najlacnejší |
| Dalekohled monokulární se zaměřovačem LEVENHUK Camo ... | 80.50 € | **73.50 €** | 15.0 % | **5.0 %** | 73.90 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **865.00 €** | 15.0 % | **14.1 %** | 865.47 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS20 | 133.90 € | **127.00 €** | 15.0 % | **9.1 %** | 127.50 € | stávame sa najlacnejší |
| Tefal GC728D10 | 169.90 € | **163.00 €** | 10.1 % | **5.6 %** | 163.50 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B4 | 424.90 € | **418.00 €** | 15.0 % | **13.1 %** | 418.20 € | stávame sa najlacnejší |
| Beko BDFS26046XQ | 321.90 € | **315.00 €** | 10.1 % | **7.8 %** | 315.50 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **347.90 €** | 15.1 % | **12.9 %** | 348.00 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.13 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.13 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 62.50 € | **56.00 €** | 39.6 % | **25.1 %** | 56.50 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **78.00 €** | 15.2 % | **6.3 %** | 78.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky + časový spí... | 18.90 € | **12.50 €** | 60.6 % | **6.2 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.90 €** | 14.9 % | **12.9 %** | 339.00 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 124.00 € | **117.90 €** | 15.0 % | **9.4 %** | 118.00 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 124.00 € | **117.90 €** | 15.0 % | **9.4 %** | 118.00 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **15.90 €** | 49.2 % | **7.9 %** | 16.00 € | stávame sa najlacnejší |
| Súprava príslušenstva pre modely Dreame X60 Ultra a ... | 71.90 € | **65.90 €** | 15.0 % | **5.4 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1022300 | 135.90 € | **129.90 €** | 10.1 % | **5.2 %** | 125.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava bezdrôtového zvončeka IMOU 2S | 73.50 € | **67.50 €** | 15.1 % | **5.7 %** | 65.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV9201E0 | 196.90 € | **190.90 €** | 10.0 % | **6.7 %** | 191.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 424.90 € | **418.90 €** | 13.4 % | **11.8 %** | 419.00 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **284.90 €** | 10.1 % | **7.8 %** | 285.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **21.50 €** | 34.6 % | **5.2 %** | 21.90 € | stávame sa najlacnejší |
| Gorenje RK58DPB4I | 299.50 € | **293.50 €** | 10.1 % | **7.9 %** | 293.90 € | stávame sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **171.00 €** | 10.1 % | **6.4 %** | 171.50 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **61.90 €** | 50.4 % | **38.0 %** | 62.00 € | stávame sa najlacnejší |
| Victron Energy VE.Bus BMS | 146.50 € | **140.90 €** | 15.1 % | **10.7 %** | 141.00 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **75.90 €** | 15.1 % | **7.2 %** | 76.00 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 85.00 € | **79.50 €** | 14.8 % | **7.3 %** | 79.79 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 214.50 € | **209.00 €** | 15.1 % | **12.1 %** | 209.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 69.50 € | **64.00 €** | 15.1 % | **6.0 %** | 64.39 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.00 € | **64.50 €** | 14.6 % | **5.6 %** | 64.90 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 80.00 € | **74.50 €** | 15.0 % | **7.1 %** | 74.90 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.00 €** | 37.8 % | **10.2 %** | 22.50 € | stávame sa najlacnejší |
| Tefal GC772830 | 225.50 € | **220.00 €** | 10.1 % | **7.4 %** | 220.50 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.00 €** | 14.9 % | **7.0 %** | 75.50 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 210.50 € | **205.00 €** | 15.0 % | **12.0 %** | 205.50 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.00 €** | 15.0 % | **14.2 %** | 799.50 € | stávame sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 612 Precise | 63.90 € | **58.50 €** | 15.2 % | **5.5 %** | 58.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL HB 643138 | 54.90 € | **49.50 €** | 17.1 % | **5.6 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **333.90 €** | 15.0 % | **13.3 %** | 334.00 € | stávame sa najlacnejší |
| Prenosná LED lampa NEEWER BASICS FL10 | 63.00 € | **57.90 €** | 14.9 % | **5.6 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dezinfekčná bezozónová UV lampa 100W | 47.00 € | **41.90 €** | 49.6 % | **33.4 %** | 42.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 35.00 € | **29.90 €** | 43.9 % | **22.9 %** | 30.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 18.00 € | **12.90 €** | 48.1 % | **6.2 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nástenný skener Uni-T UT387S | 90.00 € | **84.90 €** | 11.6 % | **5.3 %** | 84.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BMX201M2BG | 172.00 € | **166.90 €** | 10.0 % | **6.8 %** | 167.00 € | stávame sa najlacnejší |
| Vysavač ruční TEESA TSA5017 | 58.00 € | **53.00 €** | 15.0 % | **5.0 %** | 44.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT161B | 65.50 € | **60.50 €** | 15.0 % | **6.2 %** | 60.59 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.90 €** | 59.7 % | **33.9 %** | 26.00 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.90 €** | 59.7 % | **33.9 %** | 26.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 (čierne) | 73.90 € | **68.90 €** | 15.3 % | **7.5 %** | 69.00 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **132.90 €** | 10.0 % | **6.0 %** | 133.00 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 504.50 € | **499.50 €** | 10.1 % | **9.0 %** | 499.84 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.50 € | **91.50 €** | 14.8 % | **8.9 %** | 91.90 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.50 €** | 14.9 % | **10.0 %** | 114.90 € | stávame sa najlacnejší |
| AKAI AS005RA-750B Zesilovač 5.1 | 238.50 € | **233.50 €** | 10.1 % | **7.8 %** | 233.90 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 63.50 € | **58.50 €** | 15.1 % | **6.0 %** | 58.90 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.50 € | **167.50 €** | 10.2 % | **7.0 %** | 167.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **43.00 €** | 54.5 % | **38.4 %** | 43.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.00 € | **26.00 €** | 58.5 % | **32.9 %** | 26.50 € | stávame sa najlacnejší |
| KOMA RK01 - Univerzální rotační kartáč | 22.99 € | **18.00 €** | 42.9 % | **11.9 %** | 18.50 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 101.90 € | **97.00 €** | 10.3 % | **5.0 %** | 97.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 127.90 € | **123.00 €** | 43.9 % | **38.4 %** | 123.50 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.00 €** | 39.2 % | **10.7 %** | 19.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.00 €** | 59.0 % | **31.0 %** | 23.50 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 373.50 € | **368.90 €** | 7.1 % | **5.8 %** | 369.00 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.50 € | **52.90 €** | 15.2 % | **6.0 %** | 53.00 € | stávame sa najlacnejší |
| Niimbot K3 Commercial Lake Blue | 62.50 € | **57.90 €** | 15.0 % | **6.5 %** | 58.00 € | stávame sa najlacnejší |
| Guzzanti GZ 110G | 325.50 € | **321.00 €** | 8.5 % | **7.0 %** | 321.08 € | stávame sa najlacnejší |
| G3ferrari G1020400 Pizza trouba, 2 min | 225.50 € | **221.00 €** | 10.2 % | **8.0 %** | 221.09 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 355.00 € | **350.50 €** | 8.6 % | **7.2 %** | 350.59 € | stávame sa najlacnejší |
| Výrobník ledu TEESA EASY ICE TSA5009 | 79.00 € | **74.50 €** | 14.9 % | **8.3 %** | 74.72 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 216.50 € | **212.00 €** | 9.6 % | **7.3 %** | 212.27 € | stávame sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 19.00 € | **14.50 €** | 41.5 % | **8.0 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.00 €** | 39.6 % | **8.9 %** | 16.50 € | stávame sa najlacnejší |
| BROTHER DCP-T730DW | 274.50 € | **270.00 €** | 15.0 % | **13.2 %** | 270.50 € | stávame sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **188.50 €** | 15.1 % | **12.5 %** | 188.54 € | stávame sa najlacnejší |
| Guzzanti GZ 86RR | 205.90 € | **201.50 €** | 10.1 % | **7.7 %** | 201.90 € | stávame sa najlacnejší |
| Autochladnička TEESA TSA5004.1 s funkcí ohřevu, 20l | 49.90 € | **45.50 €** | 15.2 % | **5.0 %** | 45.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.50 €** | 54.2 % | **32.3 %** | 26.90 € | stávame sa najlacnejší |
| Braun SI3042VI | 39.90 € | **35.50 €** | 26.8 % | **12.8 %** | 35.90 € | stávame sa najlacnejší |
| Panasonic SC-MAX3500 | 642.00 € | **637.90 €** | 7.3 % | **6.6 %** | 637.92 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 561.00 € | **556.90 €** | 7.4 % | **6.6 %** | 557.00 € | stávame sa najlacnejší |
| Klávesnica ONIKUMA G69 (čierna) (QWERTY) | 54.00 € | **49.90 €** | 14.5 % | **5.8 %** | 36.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **47.90 €** | 14.8 % | **5.7 %** | 48.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **17.90 €** | 54.3 % | **25.6 %** | 18.00 € | stávame sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **82.90 €** | 15.0 % | **9.6 %** | 83.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 14.90 € | **10.90 €** | 48.5 % | **8.6 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 207.50 € | **203.50 €** | 13.5 % | **11.3 %** | 203.51 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 55.90 € | **51.90 €** | 15.3 % | **7.1 %** | 52.00 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 13 GS1331 | 201.90 € | **197.90 €** | 15.1 % | **12.8 %** | 198.00 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 56.90 € | **52.90 €** | 15.3 % | **7.2 %** | 53.00 € | stávame sa najlacnejší |
| Maxxo VM Chamber Line 90 | 568.50 € | **564.50 €** | 9.2 % | **8.5 %** | 564.78 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 209.50 € | **205.50 €** | 10.1 % | **8.0 %** | 205.80 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.50 €** | 58.5 % | **33.6 %** | 21.90 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Gold - 9150 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Rose Gold - 9151 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **102.00 €** | 15.1 % | **10.9 %** | 102.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.90 € | **8.00 €** | 56.6 % | **5.2 %** | 8.10 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **34.90 €** | 55.1 % | **40.6 %** | 35.00 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **45.90 €** | 15.3 % | **6.9 %** | 46.00 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 7.4V 60C 2S1P Lipo PC materi... | 43.50 € | **39.90 €** | 15.5 % | **5.9 %** | 40.00 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 17.50 € | **13.90 €** | 56.3 % | **24.2 %** | 14.00 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 17.50 € | **13.90 €** | 45.5 % | **15.6 %** | 14.00 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 60/700 AZ2 | 147.50 € | **143.90 €** | 7.8 % | **5.1 %** | 123.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Box 4K Pro V2 AI-SR Google TV (USB 2.0, USB... | 179.50 € | **175.90 €** | 7.2 % | **5.0 %** | 160.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko FRL5474B | 73.50 € | **69.90 €** | 10.7 % | **5.3 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ JOY 2 KM0561 | 44.00 € | **40.50 €** | 14.9 % | **5.8 %** | 36.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Chase´n Race | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 71.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 10Ah MHPower MS10-12(L) F2-6,3mm | 45.00 € | **41.50 €** | 14.8 % | **5.9 %** | 40.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 24 Ah MHPower MS24-12 | 47.00 € | **43.50 €** | 14.7 % | **6.1 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 72.50 € | **69.00 €** | 14.9 % | **9.4 %** | 69.29 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 42.00 € | **38.50 €** | 37.7 % | **26.2 %** | 38.90 € | stávame sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **41.50 €** | 14.5 % | **5.6 %** | 41.90 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 72.00 € | **68.50 €** | 15.1 % | **9.5 %** | 68.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.00 €** | 37.8 % | **18.8 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.00 €** | 38.8 % | **19.0 %** | 21.50 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **92.00 €** | 14.9 % | **10.7 %** | 92.50 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 33.50 € | **30.00 €** | 44.7 % | **29.6 %** | 30.50 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 55.50 € | **52.00 €** | 15.3 % | **8.0 %** | 52.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.00 €** | 15.1 % | **10.8 %** | 89.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.00 €** | 15.1 % | **10.8 %** | 89.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 79.50 € | **76.00 €** | 43.8 % | **37.4 %** | 76.50 € | stávame sa najlacnejší |
| Candy CHW6LBX/4U2 IDEA | 82.50 € | **79.00 €** | 10.5 % | **5.8 %** | 79.50 € | stávame sa najlacnejší |
| Steba Sendvičovač 3v1 SG 55 | 77.90 € | **74.50 €** | 10.4 % | **5.6 %** | 57.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO3725EA | 76.90 € | **73.50 €** | 10.5 % | **5.6 %** | 73.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E7K1-6BP | 69.90 € | **66.50 €** | 12.2 % | **6.7 %** | 66.90 € | stávame sa najlacnejší |
| Balanční podložka REBEL ACTIVE RBA-3104-58 | 43.90 € | **40.50 €** | 15.0 % | **6.1 %** | 27.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.50 €** | 50.2 % | **33.2 %** | 26.90 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.80 €** | 54.5 % | **9.5 %** | 7.90 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 409.00 € | **405.90 €** | 6.9 % | **6.1 %** | 405.96 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 629.00 € | **625.90 €** | 10.0 % | **9.5 %** | 626.00 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.00 € | **37.90 €** | 15.1 % | **6.4 %** | 38.00 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **44.90 €** | 14.5 % | **7.1 %** | 45.00 € | stávame sa najlacnejší |
| LIMO BAR Edge - Red | 72.00 € | **68.90 €** | 10.0 % | **5.3 %** | 40.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR TWIN - White | 59.90 € | **56.90 €** | 10.7 % | **5.2 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera D124 BMW M4 GT3 Safety Car | 62.50 € | **59.50 €** | 10.3 % | **5.0 %** | 57.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA TSA3507 ruční mixér 1200W sada | 36.90 € | **33.90 €** | 15.0 % | **5.7 %** | 33.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **92.50 €** | 10.1 % | **6.7 %** | 92.52 € | stávame sa najlacnejší |
| Panasonic SC-AKX520E-K | 304.90 € | **301.90 €** | 10.1 % | **9.1 %** | 302.00 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 178.00 € | **175.00 €** | 7.7 % | **5.9 %** | 175.35 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 149.50 € | **146.50 €** | 15.1 % | **12.8 %** | 146.89 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 40.00 € | **37.00 €** | 14.5 % | **6.0 %** | 37.39 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **23.50 €** | 54.7 % | **37.2 %** | 23.90 € | stávame sa najlacnejší |
| Tefal FW501815 | 136.50 € | **133.50 €** | 10.1 % | **7.7 %** | 133.90 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 23.00 € | **20.00 €** | 49.1 % | **29.7 %** | 20.50 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.00 €** | 14.6 % | **7.7 %** | 47.50 € | stávame sa najlacnejší |
| JBL Tune 670NC white | 66.00 € | **63.00 €** | 14.5 % | **9.3 %** | 63.50 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **172.00 €** | 10.1 % | **8.2 %** | 172.50 € | stávame sa najlacnejší |
| TESLA PrimeSound HQ-995X | 181.90 € | **179.00 €** | 10.1 % | **8.3 %** | 179.50 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 147.90 € | **145.00 €** | 10.2 % | **8.1 %** | 145.50 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **7.70 €** | 60.5 % | **17.7 %** | 7.80 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1500mA, stabiliz... | 9.90 € | **7.20 €** | 45.3 % | **5.7 %** | 7.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.50 € | **7.80 €** | 43.7 % | **6.8 %** | 7.90 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 28.50 € | **25.90 €** | 15.9 % | **5.3 %** | 17.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultrazvukový čistič pokožky ANLAN ALCPJ07-02 (biely) | 28.50 € | **25.90 €** | 15.9 % | **5.3 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha FIRST Spidey Web Spin | 32.50 € | **29.90 €** | 14.7 % | **5.6 %** | 28.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8053  DIGITAL AIR FRYE... | 34.50 € | **31.90 €** | 14.9 % | **6.2 %** | 31.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.50 € | **29.90 €** | 15.8 % | **6.6 %** | 30.00 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **19.90 €** | 53.3 % | **35.6 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **31.90 €** | 49.6 % | **38.3 %** | 32.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **18.90 €** | 38.5 % | **21.8 %** | 19.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 52.50 € | **49.90 €** | 14.9 % | **9.2 %** | 50.00 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **30.90 €** | 14.5 % | **5.6 %** | 31.00 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **42.90 €** | 21.5 % | **14.6 %** | 43.00 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **14.90 €** | 55.7 % | **32.5 %** | 15.00 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **14.90 €** | 42.8 % | **21.6 %** | 15.00 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **131.90 €** | 10.3 % | **8.2 %** | 132.00 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **126.90 €** | 10.3 % | **8.1 %** | 127.00 € | stávame sa najlacnejší |
| Rowenta RH1833E0 | 149.50 € | **146.90 €** | 10.3 % | **8.3 %** | 147.00 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **254.90 €** | 15.1 % | **13.9 %** | 255.00 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **70.90 €** | 10.6 % | **6.7 %** | 71.00 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **15.00 €** | 44.6 % | **23.9 %** | 15.19 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **16.00 €** | 39.0 % | **20.2 %** | 16.25 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 339.00 € | **336.50 €** | 15.0 % | **14.1 %** | 336.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 34.00 € | **31.50 €** | 14.9 % | **6.5 %** | 31.89 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.50 €** | 10.1 % | **8.0 %** | 128.90 € | stávame sa najlacnejší |
| SALENTE ToastMax | 49.00 € | **46.50 €** | 15.0 % | **9.1 %** | 46.90 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 237.50 € | **235.00 €** | 11.8 % | **10.6 %** | 235.40 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **82.50 €** | 15.0 % | **11.7 %** | 82.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 15.00 € | **12.50 €** | 45.7 % | **21.4 %** | 12.90 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.50 €** | 52.6 % | **30.1 %** | 14.90 € | stávame sa najlacnejší |
| Candy CFT610/4N/1 | 53.00 € | **50.50 €** | 14.5 % | **9.1 %** | 50.90 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 31.50 € | **29.00 €** | 54.7 % | **42.5 %** | 29.50 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **10.00 €** | 53.3 % | **22.6 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 14.50 € | **12.00 €** | 57.0 % | **29.9 %** | 12.50 € | stávame sa najlacnejší |
| Tefal BL87G831 | 125.50 € | **123.00 €** | 10.3 % | **8.1 %** | 123.50 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **147.00 €** | 10.1 % | **8.3 %** | 147.50 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.50 € | **32.00 €** | 15.3 % | **6.9 %** | 32.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 28.50 € | **26.00 €** | 50.2 % | **37.0 %** | 26.50 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 650lm, Li-Ion | 18.50 € | **16.00 €** | 55.4 % | **34.4 %** | 16.50 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Street X-BASS KM... | 76.90 € | **74.50 €** | 8.5 % | **5.1 %** | 64.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.50 €** | 10.1 % | **9.1 %** | 248.90 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 18.90 € | **16.50 €** | 54.6 % | **35.0 %** | 16.90 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 287.00 € | **284.90 €** | 15.0 % | **14.2 %** | 284.96 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **33.90 €** | 53.5 % | **44.5 %** | 34.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **23.90 €** | 54.3 % | **41.8 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **23.90 €** | 54.3 % | **41.8 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 26.00 € | **23.90 €** | 54.3 % | **41.8 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **15.90 €** | 47.4 % | **30.2 %** | 15.93 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 18.00 € | **15.90 €** | 37.9 % | **21.8 %** | 16.00 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 16.00 € | **13.90 €** | 53.0 % | **33.0 %** | 14.00 € | stávame sa najlacnejší |
| Ariete ART 206/01 | 41.90 € | **39.90 €** | 10.3 % | **5.0 %** | 33.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač vlhkosti dreva FNIRSI WHD-02 s hrotmi | 23.50 € | **21.50 €** | 15.6 % | **5.7 %** | 18.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostic Scanner OBD2 Ancel AD310/AC103 | 24.50 € | **22.50 €** | 16.1 % | **6.6 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester autobatérií UNI-T UT673A | 35.50 € | **33.50 €** | 12.8 % | **6.5 %** | 33.59 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 27.90 € | **25.90 €** | 15.1 % | **6.9 %** | 26.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **31.90 €** | 39.0 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **70.90 €** | 42.1 % | **38.2 %** | 71.00 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 138.90 € | **136.90 €** | 10.3 % | **8.7 %** | 137.00 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.10 €** | 45.9 % | **13.9 %** | 7.20 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **39.90 €** | 15.3 % | **9.8 %** | 40.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **39.90 €** | 15.3 % | **9.8 %** | 40.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **19.90 €** | 48.6 % | **35.0 %** | 20.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **8.90 €** | 45.5 % | **18.8 %** | 9.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.50 € | **6.50 €** | 43.7 % | **9.9 %** | 6.60 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 90.00 € | **88.00 €** | 14.8 % | **12.2 %** | 88.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 337.50 € | **335.50 €** | 15.0 % | **14.4 %** | 335.89 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 79.00 € | **77.00 €** | 14.9 % | **12.0 %** | 77.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.50 € | **22.50 €** | 15.7 % | **6.2 %** | 22.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 24.00 € | **22.00 €** | 14.7 % | **5.2 %** | 22.39 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.50 €** | 15.0 % | **13.9 %** | 207.90 € | stávame sa najlacnejší |
| SALENTE SuChef | 84.50 € | **82.50 €** | 10.4 % | **7.7 %** | 82.90 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 211.50 € | **209.50 €** | 14.9 % | **13.8 %** | 209.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **15.50 €** | 44.3 % | **27.8 %** | 15.90 € | stávame sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.50 €** | 15.6 % | **7.5 %** | 26.90 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.50 €** | 10.4 % | **7.1 %** | 64.90 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.50 €** | 15.0 % | **13.8 %** | 203.90 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **24.00 €** | 14.5 % | **5.7 %** | 24.49 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.00 € | **64.00 €** | 10.1 % | **6.8 %** | 64.50 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **14.00 €** | 38.4 % | **21.1 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **13.00 €** | 54.0 % | **33.4 %** | 13.50 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.00 €** | 15.1 % | **6.2 %** | 24.50 € | stávame sa najlacnejší |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 70.00 € | **68.00 €** | 15.0 % | **11.7 %** | 68.50 € | stávame sa najlacnejší |
| Salente Combo-4In1-Ss | 131.90 € | **130.00 €** | 11.2 % | **9.6 %** | 130.50 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **108.00 €** | 15.0 % | **13.0 %** | 108.50 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.10 €** | 54.5 % | **27.8 %** | 9.20 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **14.00 €** | 37.7 % | **21.2 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.90 € | **14.00 €** | 56.1 % | **37.5 %** | 14.50 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 13.90 € | **12.00 €** | 44.9 % | **25.1 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 23.90 € | **22.00 €** | 38.4 % | **27.4 %** | 22.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **61.00 €** | 21.8 % | **18.1 %** | 61.50 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **30.00 €** | 16.9 % | **9.9 %** | 30.50 € | stávame sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **40.00 €** | 11.0 % | **5.9 %** | 40.50 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.00 €** | 12.2 % | **6.1 %** | 33.50 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **34.00 €** | 15.0 % | **8.9 %** | 34.50 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 38.90 € | **37.00 €** | 15.1 % | **9.5 %** | 37.50 € | stávame sa najlacnejší |
| SONY WFC510Y žlutá | 38.90 € | **37.00 €** | 15.1 % | **9.5 %** | 37.50 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **23.90 €** | 37.8 % | **29.1 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **21.90 €** | 39.1 % | **29.6 %** | 22.00 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **58.90 €** | 10.4 % | **7.4 %** | 59.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| Počítačová skrinka Darkflash B351 | 18.50 € | **16.90 €** | 15.2 % | **5.2 %** | 17.00 € | stávame sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555BL/, 5 000 mAh, 20 W+Wi... | 25.50 € | **23.90 €** | 14.5 % | **7.4 %** | 24.00 € | stávame sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555GY/, 5 000 mAh, 20 W+Wi... | 25.50 € | **23.90 €** | 14.5 % | **7.4 %** | 24.00 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **17.90 €** | 15.6 % | **6.1 %** | 18.00 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.90 €** | 52.0 % | **38.1 %** | 15.98 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 14.50 € | **12.90 €** | 47.4 % | **31.1 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 12.50 € | **10.90 €** | 53.5 % | **33.9 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **11.90 €** | 56.1 % | **37.6 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **13.90 €** | 55.0 % | **39.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.50 € | **14.90 €** | 48.2 % | **33.9 %** | 15.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 17.50 € | **15.90 €** | 16.1 % | **5.5 %** | 16.00 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 138.50 € | **136.90 €** | 14.9 % | **13.5 %** | 136.99 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **118.90 €** | 14.8 % | **13.3 %** | 119.00 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM208T bílá | 113.00 € | **111.50 €** | 6.6 % | **5.2 %** | 107.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Metal Protection Cage PULUZ For DJI OSMO Pocket 3 (P... | 20.00 € | **18.50 €** | 13.6 % | **5.1 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Viacúčelový čistič na podlahy MOVA P10 Ultra, P10 Pr... | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 20.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální GARNI 138B | 20.00 € | **18.50 €** | 14.5 % | **5.9 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **32.50 €** | 10.3 % | **5.4 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26380-70 | 40.00 € | **38.50 €** | 10.2 % | **6.0 %** | 38.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje W3NGPI74A3S | 259.50 € | **258.00 €** | 7.0 % | **6.4 %** | 258.09 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 10.90 € | **9.40 €** | 49.7 % | **29.1 %** | 9.50 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.00 € | **11.50 €** | 21.1 % | **7.1 %** | 11.69 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 28.00 € | **26.50 €** | 15.0 % | **8.8 %** | 26.79 € | stávame sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 52.00 € | **50.50 €** | 14.6 % | **11.3 %** | 50.79 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.50 € | **27.00 €** | 15.8 % | **9.7 %** | 27.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.50 € | **38.00 €** | 43.2 % | **37.7 %** | 38.35 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 285.50 € | **284.00 €** | 9.5 % | **8.9 %** | 284.39 € | stávame sa najlacnejší |
| Leifheit 81520 Pegasus 200 Solid | 38.00 € | **36.50 €** | 14.2 % | **9.7 %** | 36.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.50 €** | 53.6 % | **41.4 %** | 17.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.50 €** | 53.6 % | **41.4 %** | 17.90 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **16.50 €** | 53.9 % | **41.1 %** | 16.90 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.50 €** | 53.9 % | **41.1 %** | 16.90 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **10.50 €** | 44.3 % | **26.3 %** | 10.90 € | stávame sa najlacnejší |
| TV mount 26-60" Perlesmith PSMFK1-EU | 18.00 € | **16.50 €** | 15.0 % | **5.5 %** | 16.90 € | stávame sa najlacnejší |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 38.00 € | **36.50 €** | 15.0 % | **10.4 %** | 36.90 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 26.50 € | **25.00 €** | 37.7 % | **29.9 %** | 25.50 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 13.50 € | **12.00 €** | 56.1 % | **38.8 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 11.50 € | **10.00 €** | 56.9 % | **36.4 %** | 10.50 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.00 €** | 55.2 % | **38.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.00 €** | 54.7 % | **38.7 %** | 13.50 € | stávame sa najlacnejší |
| Rozváděč R-FVE-A40-1 – třída ochrany I+II (s AC Svod... | 1284.50 € | **1283.00 €** | 15.0 % | **14.9 %** | 1283.50 € | stávame sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **40.00 €** | 10.4 % | **6.4 %** | 40.50 € | stávame sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **103.00 €** | 14.9 % | **13.3 %** | 103.50 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.00 €** | 14.9 % | **10.7 %** | 39.50 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.50 € | **14.00 €** | 41.6 % | **27.9 %** | 14.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **181.00 €** | 14.9 % | **14.0 %** | 181.50 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.00 €** | 46.0 % | **31.9 %** | 14.50 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 68.50 € | **67.00 €** | 7.6 % | **5.3 %** | 67.50 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.00 €** | 15.6 % | **5.7 %** | 16.50 € | stávame sa najlacnejší |
| SONOFF MINI-ZB2GSL-EDvojkanálový nástenný spínač Zig... | 23.50 € | **22.00 €** | 16.0 % | **8.6 %** | 22.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **24.00 €** | 15.8 % | **9.0 %** | 24.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.00 €** | 15.7 % | **9.4 %** | 26.50 € | stávame sa najlacnejší |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 26.50 € | **25.00 €** | 15.0 % | **8.5 %** | 25.50 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **11.00 €** | 47.9 % | **30.2 %** | 11.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.00 €** | 15.0 % | **10.4 %** | 36.50 € | stávame sa najlacnejší |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.00 €** | 15.9 % | **7.8 %** | 20.50 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **33.00 €** | 14.6 % | **9.6 %** | 33.50 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 67.90 € | **66.50 €** | 15.2 % | **12.8 %** | 66.69 € | stávame sa najlacnejší |
| Salente G4 robotický vysavač | 116.90 € | **115.50 €** | 9.0 % | **7.7 %** | 115.79 € | stávame sa najlacnejší |
| Salente Rtx-G4 | 116.90 € | **115.50 €** | 9.0 % | **7.7 %** | 115.79 € | stávame sa najlacnejší |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 139.90 € | **138.50 €** | 15.0 % | **13.8 %** | 138.90 € | stávame sa najlacnejší |
| Tefal FV6840E0 | 75.90 € | **74.50 €** | 10.2 % | **8.2 %** | 74.90 € | stávame sa najlacnejší |
| Maxxo rádio DAB+/FM PB01 | 29.90 € | **28.50 €** | 11.1 % | **5.9 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-3C-80 (3... | 18.90 € | **17.50 €** | 16.0 % | **7.4 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 9.70 € | **8.30 €** | 78.4 % | **52.7 %** | 8.40 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.50 €** | 15.2 % | **10.3 %** | 31.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.50 €** | 38.4 % | **30.3 %** | 22.90 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **37.50 €** | 10.5 % | **6.5 %** | 37.90 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **8.10 €** | 48.4 % | **27.9 %** | 8.20 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.00 €** | 55.5 % | **31.1 %** | 7.10 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.90 € | **3.60 €** | 54.4 % | **13.4 %** | 3.70 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek, vypínač | 4.60 € | **3.30 €** | 49.0 % | **6.9 %** | 3.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 5.00 € | **3.70 €** | 43.6 % | **6.3 %** | 3.71 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.20 €** | 59.6 % | **32.0 %** | 6.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **5.40 €** | 46.8 % | **18.3 %** | 5.50 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.70 €** | 54.1 % | **37.2 %** | 9.80 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **33.90 €** | 14.6 % | **11.0 %** | 34.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **16.90 €** | 52.4 % | **43.1 %** | 17.00 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **24.90 €** | 42.7 % | **36.7 %** | 25.00 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **26.90 €** | 14.5 % | **10.0 %** | 27.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **27.90 €** | 14.8 % | **10.5 %** | 28.00 € | stávame sa najlacnejší |
| Matter SONOFF M5-1C-80W WiFi smart wall switch (1-ch... | 19.00 € | **17.90 €** | 14.7 % | **8.0 %** | 18.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **44.90 €** | 14.4 % | **11.7 %** | 45.00 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 22.00 € | **20.90 €** | 14.7 % | **8.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.90 € | **7.80 €** | 43.9 % | **26.1 %** | 7.90 € | stávame sa najlacnejší |
| Solight FM transmitter s bluetooth pripojením do aut... | 16.00 € | **14.90 €** | 43.9 % | **34.0 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.90 €** | 48.7 % | **37.8 %** | 14.00 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 14.00 € | **12.90 €** | 52.8 % | **40.8 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **9.90 €** | 54.5 % | **39.0 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 14.00 € | **12.90 €** | 52.8 % | **40.8 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **11.90 €** | 53.6 % | **40.6 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **11.90 €** | 53.6 % | **40.6 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **13.90 €** | 54.0 % | **42.7 %** | 14.00 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **15.90 €** | 15.2 % | **7.7 %** | 16.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.80 € | **4.70 €** | 48.8 % | **20.5 %** | 4.80 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161D | 66.00 € | **64.90 €** | 7.3 % | **5.5 %** | 55.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 64.90 € | **63.90 €** | 10.3 % | **8.6 %** | 64.00 € | stávame sa najlacnejší |
| Rowenta ZR710101 | 19.50 € | **18.50 €** | 11.3 % | **5.6 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-UNA+, FHD GOOGLE TV STICK | 53.00 € | **52.00 €** | 7.2 % | **5.2 %** | 48.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s bazénovým čidlem GARNI 245P | 31.90 € | **30.90 €** | 9.8 % | **6.4 %** | 30.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.00 € | **21.00 €** | 10.3 % | **5.3 %** | 20.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff MINIR4M Matter smart WiFi mini switch (HomeKi... | 11.50 € | **10.50 €** | 17.2 % | **7.0 %** | 10.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 16.50 € | **15.50 €** | 14.9 % | **7.9 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 11.2 % | **7.0 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 214.00 € | **213.00 €** | 6.5 % | **6.0 %** | 213.02 € | stávame sa najlacnejší |
| Náhradné filtre pre Catlink litter box Scooper 2ks. | 10.90 € | **9.90 €** | 17.1 % | **6.3 %** | 9.96 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 72.90 € | **71.90 €** | 14.2 % | **12.7 %** | 71.99 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **54.90 €** | 11.9 % | **9.9 %** | 55.00 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **46.90 €** | 38.5 % | **35.6 %** | 47.00 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.00 €** | 53.4 % | **38.1 %** | 9.10 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 3.30 € | **2.30 €** | 55.1 % | **8.1 %** | 2.40 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.90 €** | 10.4 % | **9.3 %** | 102.00 € | stávame sa najlacnejší |
| Rozváděč R-FVE-A40-3 – třída ochrany I+II (bez AC Sv... | 974.90 € | **973.90 €** | 15.0 % | **14.9 %** | 974.00 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **16.90 €** | 16.2 % | **9.7 %** | 17.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 69.90 € | **68.90 €** | 11.7 % | **10.1 %** | 69.00 € | stávame sa najlacnejší |
| Zeblaze Btalk 3 Pro Smartwatch (Gray) | 23.90 € | **22.90 €** | 14.8 % | **10.0 %** | 23.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 1027.90 € | **1026.90 €** | 15.0 % | **14.9 %** | 1027.00 € | stávame sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **87.90 €** | 15.1 % | **13.8 %** | 88.00 € | stávame sa najlacnejší |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 22.90 € | **21.90 €** | 15.1 % | **10.0 %** | 22.00 € | stávame sa najlacnejší |
| Projector Blitzwolf, BW-V8, 4K, Android OS | 156.90 € | **155.90 €** | 15.0 % | **14.2 %** | 156.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **26.90 €** | 42.8 % | **37.7 %** | 27.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **84.90 €** | 15.1 % | **13.7 %** | 85.00 € | stávame sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **11.90 €** | 46.9 % | **35.5 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **10.90 €** | 56.0 % | **42.9 %** | 11.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.17 € | stávame sa najlacnejší |
| Grafický tablet Huion H1161 | 74.00 € | **73.00 €** | 14.8 % | **13.2 %** | 73.20 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 126.50 € | **125.50 €** | 15.0 % | **14.1 %** | 125.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **25.00 €** | 42.8 % | **37.3 %** | 25.33 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.50 € | **26.50 €** | 14.9 % | **10.8 %** | 26.89 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 13.90 € | stávame sa najlacnejší |
| GORENJE R 506 E | 64.50 € | **63.50 €** | 10.2 % | **8.5 %** | 63.90 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.50 €** | 11.8 % | **8.0 %** | 28.90 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.50 €** | 11.8 % | **8.0 %** | 28.90 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **120.50 €** | 10.3 % | **9.4 %** | 120.90 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **120.50 €** | 10.0 % | **9.1 %** | 120.90 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 43.0 % | **36.4 %** | 20.90 € | stávame sa najlacnejší |
| Niceboy Podsie 4 POP Black | 15.50 € | **14.50 €** | 16.9 % | **9.4 %** | 14.90 € | stávame sa najlacnejší |
| Niceboy Podsie 4 POP White | 15.50 € | **14.50 €** | 16.9 % | **9.4 %** | 14.90 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.50 €** | 14.7 % | **11.2 %** | 31.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.50 € | **81.50 €** | 9.8 % | **8.5 %** | 81.90 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.50 €** | 10.1 % | **9.8 %** | 487.90 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **13.00 €** | 38.3 % | **28.4 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.00 € | **19.00 €** | 38.4 % | **31.5 %** | 19.50 € | stávame sa najlacnejší |
| Rozváděč R-HW-SW16P-AP (pro Huawei) | 974.00 € | **973.00 €** | 15.0 % | **14.9 %** | 973.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT Antik Water Heater PWH 9kW (p... | 1024.00 € | **1023.00 €** | 15.0 % | **14.9 %** | 1023.50 € | stávame sa najlacnejší |
| TV mount 26-60" Perlesmith PSMFK12 | 18.00 € | **17.00 €** | 14.3 % | **8.0 %** | 17.50 € | stávame sa najlacnejší |
| LONGER RAY5 mini 2,5 W laserový gravírovací stroj | 93.00 € | **92.00 €** | 14.9 % | **13.7 %** | 92.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.00 €** | 14.6 % | **9.1 %** | 20.50 € | stávame sa najlacnejší |
| CP-USP-D2520L10-D 2.0 Mpix venkovní PTZ kamera 4V1 s... | 482.00 € | **481.00 €** | 15.0 % | **14.8 %** | 481.50 € | stávame sa najlacnejší |
| Zvuková karta Maono G1 Neo (biela) | 45.00 € | **44.00 €** | 15.1 % | **12.5 %** | 44.50 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.50 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.00 €** | 13.6 % | **7.3 %** | 17.50 € | stávame sa najlacnejší |
| CP-UNR-4K4042-P4V3 Síťový videorekordér H.265 4K pro... | 482.00 € | **481.00 €** | 15.0 % | **14.8 %** | 481.50 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.00 €** | 13.7 % | **6.6 %** | 15.50 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **16.00 €** | 40.2 % | **31.9 %** | 16.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.00 €** | 14.6 % | **12.4 %** | 51.50 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.00 €** | 14.9 % | **12.7 %** | 50.50 € | stávame sa najlacnejší |
| Candy CFT610/5S/1/4U | 49.00 € | **48.00 €** | 11.2 % | **8.9 %** | 48.50 € | stávame sa najlacnejší |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.00 € | **101.00 €** | 14.9 % | **13.8 %** | 101.50 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **15.90 €** | 38.6 % | **30.4 %** | 16.00 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **134.00 €** | 15.0 % | **14.2 %** | 134.29 € | stávame sa najlacnejší |
| DOMO DO42325PC | 102.90 € | **102.00 €** | 10.0 % | **9.1 %** | 102.50 € | stávame sa najlacnejší |
| CP-UNC-TC51L5C-VMDS 5.0 Mpix venkovní IP kamera s IR... | 227.90 € | **227.00 €** | 15.1 % | **14.6 %** | 227.50 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 169.90 € | **169.00 €** | 15.1 % | **14.5 %** | 169.50 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.90 € | **88.00 €** | 6.2 % | **5.1 %** | 88.50 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 227.90 € | **227.00 €** | 15.1 % | **14.6 %** | 227.50 € | stávame sa najlacnejší |
| Powerbanka EMOS NTBF30 /B0561B/, 27 000 mAh, 100 W P... | 69.90 € | **69.00 €** | 15.3 % | **13.8 %** | 69.50 € | stávame sa najlacnejší |
| LCD displej KRUGER & MATZ KM2021 Android Auto Apple ... | 81.90 € | **81.00 €** | 15.2 % | **14.0 %** | 81.50 € | stávame sa najlacnejší |
| SONY WFC710N Black | 71.90 € | **71.00 €** | 11.0 % | **9.6 %** | 71.50 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 87.90 € | **87.00 €** | 15.2 % | **14.0 %** | 87.50 € | stávame sa najlacnejší |
| Rotoped REBEL ACTIVE RBA-1013 | 70.90 € | **70.00 €** | 15.3 % | **13.8 %** | 70.50 € | stávame sa najlacnejší |
| Gorenje F492PW | 169.90 € | **169.00 €** | 5.9 % | **5.3 %** | 169.50 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.60 €** | 55.8 % | **30.3 %** | 4.70 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.50 €** | 55.1 % | **29.3 %** | 4.60 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **11.00 €** | 15.6 % | **6.8 %** | 11.26 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.00 €** | 40.4 % | **28.8 %** | 10.50 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.00 €** | 47.0 % | **35.9 %** | 11.50 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.00 €** | 45.7 % | **34.7 %** | 11.50 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.00 €** | 39.9 % | **30.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.00 €** | 40.4 % | **30.6 %** | 12.50 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.00 €** | 19.3 % | **9.4 %** | 10.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.90 € | **14.00 €** | 16.8 % | **9.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.00 €** | 49.2 % | **40.2 %** | 14.50 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 14.90 € | **14.00 €** | 13.6 % | **6.8 %** | 14.50 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.90 € | **14.00 €** | 15.7 % | **8.7 %** | 14.50 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.40 €** | 55.0 % | **28.7 %** | 4.50 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.20 €** | 55.3 % | **27.9 %** | 4.30 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.90 € | **16.00 €** | 35.4 % | **28.2 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.90 € | **39.00 €** | 16.1 % | **13.5 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.00 €** | 46.6 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.00 €** | 35.5 % | **28.3 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.00 €** | 26.9 % | **20.1 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.00 €** | 39.1 % | **31.7 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **31.00 €** | 38.7 % | **34.8 %** | 31.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.90 € | **17.00 €** | 34.5 % | **27.7 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.90 € | **54.00 €** | 38.3 % | **36.0 %** | 54.50 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **25.00 €** | 39.1 % | **34.2 %** | 25.50 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **21.00 €** | 24.6 % | **19.5 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.00 €** | 41.6 % | **38.8 %** | 45.50 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 16.90 € | **16.00 €** | 32.9 % | **25.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.00 €** | 38.3 % | **33.3 %** | 24.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.00 €** | 34.9 % | **32.0 %** | 41.50 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.00 €** | 11.4 % | **8.0 %** | 29.50 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.00 €** | 11.6 % | **8.0 %** | 27.50 € | stávame sa najlacnejší |
| Salente Icequeen-Wh | 19.90 € | **19.00 €** | 10.2 % | **5.2 %** | 19.50 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **58.00 €** | 35.6 % | **33.5 %** | 58.50 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.00 €** | 15.4 % | **9.6 %** | 17.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.00 €** | 15.8 % | **11.2 %** | 22.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 bez ventilátorov (č... | 19.90 € | **19.00 €** | 16.1 % | **10.8 %** | 19.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Q15 | 16.90 € | **16.00 €** | 15.0 % | **8.9 %** | 16.50 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **17.00 €** | 33.6 % | **26.9 %** | 17.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.00 €** | 36.4 % | **34.2 %** | 55.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.00 €** | 20.3 % | **16.7 %** | 29.50 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.90 € | **22.00 €** | 14.9 % | **10.3 %** | 22.50 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.00 €** | 13.2 % | **7.5 %** | 17.50 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.90 € | **16.00 €** | 15.9 % | **9.7 %** | 16.50 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.00 €** | 42.5 % | **37.9 %** | 27.50 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 18.90 € | **18.00 €** | 29.3 % | **23.2 %** | 18.50 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 17.90 € | **17.00 €** | 28.7 % | **22.2 %** | 17.50 € | stávame sa najlacnejší |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 57.90 € | **57.00 €** | 15.4 % | **13.6 %** | 57.50 € | stávame sa najlacnejší |
| TESLA TE-344 venkovní anténa | 21.90 € | **21.00 €** | 16.0 % | **11.2 %** | 21.50 € | stávame sa najlacnejší |
| Dětská elektrická kytara 22407 růžová + mikrofon + z... | 36.90 € | **36.00 €** | 15.6 % | **12.8 %** | 36.50 € | stávame sa najlacnejší |
| Sati Hansi Doux et Suave 1000g zrno | 22.90 € | **22.00 €** | 10.8 % | **6.4 %** | 22.50 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.00 €** | 15.1 % | **13.5 %** | 63.50 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.00 €** | 14.9 % | **11.5 %** | 29.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.00 €** | 39.6 % | **33.3 %** | 19.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 150... | 588.90 € | **588.00 €** | 15.0 % | **14.8 %** | 588.50 € | stávame sa najlacnejší |
| JBL Boombox 3 BLACK | 307.90 € | **307.00 €** | 8.9 % | **8.5 %** | 307.50 € | stávame sa najlacnejší |
| CP-UNC-TD61L4E-MD-0360 6.0 Mpix venkovní IP kamera s... | 299.90 € | **299.00 €** | 15.0 % | **14.7 %** | 299.50 € | stávame sa najlacnejší |
| CP-UNC-VB81ZL4-VMDS 4K 8.0 Mpix  venkovní IP kamera ... | 328.90 € | **328.00 €** | 15.0 % | **14.7 %** | 328.50 € | stávame sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 258.90 € | **258.00 €** | 15.1 % | **14.7 %** | 258.50 € | stávame sa najlacnejší |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 598.90 € | **598.00 €** | 15.0 % | **14.8 %** | 598.50 € | stávame sa najlacnejší |
| Běžecký pás REBEL ACTIVE RBA-1001 | 278.90 € | **278.00 €** | 15.1 % | **14.7 %** | 278.50 € | stávame sa najlacnejší |
| Gorenje RK4182PS4 | 319.90 € | **319.00 €** | 6.6 % | **6.3 %** | 319.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **4.60 €** | 47.3 % | **25.5 %** | 4.70 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **3.90 €** | 45.3 % | **20.6 %** | 4.00 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 5.50 € | **4.70 €** | 53.1 % | **30.9 %** | 4.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.20 € | **7.40 €** | 48.8 % | **34.3 %** | 7.50 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 9.40 € | **8.70 €** | 54.1 % | **42.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.70 €** | 54.1 % | **42.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.20 €** | 55.5 % | **41.7 %** | 7.30 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.90 € | **7.20 €** | 55.5 % | **41.7 %** | 7.30 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.90 € | **7.20 €** | 55.5 % | **41.7 %** | 7.30 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.00 €** | 56.7 % | **27.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.40 €** | 54.3 % | **28.0 %** | 3.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **3.90 €** | 53.9 % | **30.5 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.30 €** | 53.7 % | **41.8 %** | 8.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.60 € | **4.90 €** | 35.1 % | **18.2 %** | 5.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| CP PLUS CP-UNB-CM352 IP vnitřní videomonitor | 281.50 € | **280.90 €** | 15.0 % | **14.8 %** | 281.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 403.50 € | **402.90 €** | 15.0 % | **14.9 %** | 403.00 € | stávame sa najlacnejší |
| Klimatizace MW POWER ALFA 12K WIFI V1, 12000BTu, R32 | 535.50 € | **534.90 €** | 15.0 % | **14.9 %** | 535.00 € | stávame sa najlacnejší |
| Puškohled LEVENHUK Halo NVR50 s nočním viděním | 425.50 € | **424.90 €** | 15.0 % | **14.9 %** | 425.00 € | stávame sa najlacnejší |
| Multipřepínač TeleTek 13/32 | 468.50 € | **467.90 €** | 15.0 % | **14.8 %** | 468.00 € | stávame sa najlacnejší |
| CP-UNC-VB51ZL4-VMDS-27135 5.0 Mpix venkovní IP kamer... | 273.50 € | **272.90 €** | 15.1 % | **14.8 %** | 273.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 345Ah SOLARFAM AST-345 s výhře... | 696.50 € | **695.90 €** | 15.0 % | **14.9 %** | 696.00 € | stávame sa najlacnejší |
| HDD 3.5" 6TB 256MB Seagate SKYHAWK pro kamerové syst... | 348.50 € | **347.90 €** | 15.0 % | **14.9 %** | 348.00 € | stávame sa najlacnejší |
| CP-UVR-1601K2-I3 Šestnáctikanálový 5v1 DVR s kompres... | 528.50 € | **527.90 €** | 15.0 % | **14.8 %** | 528.00 € | stávame sa najlacnejší |
| FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO | 610.50 € | **609.90 €** | 15.0 % | **14.9 %** | 610.00 € | stávame sa najlacnejší |
| MASCOM MC22TFW11 – 22” Full HD Smart TV (12 V, WebOS... | 294.50 € | **293.90 €** | 15.0 % | **14.8 %** | 294.00 € | stávame sa najlacnejší |
| Televes AVANT 12 PRO (532203) | 386.50 € | **385.90 €** | 15.0 % | **14.9 %** | 386.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 17Ah  VIPOW bezúdržbový akumu... | 30.50 € | **29.90 €** | 7.4 % | **5.3 %** | 29.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTIGZ 3601 | 28.50 € | **27.90 €** | 11.7 % | **9.4 %** | 28.00 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **19.90 €** | 38.4 % | **34.4 %** | 20.00 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **28.90 €** | 14.9 % | **12.6 %** | 29.00 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **21.90 €** | 12.3 % | **9.3 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED reflektor PRO so senzorom, 30W, 2760lm, ... | 20.50 € | **19.90 €** | 48.1 % | **43.8 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **29.90 €** | 39.2 % | **36.5 %** | 30.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **18.90 €** | 38.3 % | **34.1 %** | 19.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 30.50 € | **29.90 €** | 38.4 % | **35.7 %** | 30.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.50 € | **27.90 €** | 38.6 % | **35.7 %** | 28.00 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **20.90 €** | 38.2 % | **34.3 %** | 21.00 € | stávame sa najlacnejší |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.50 € | **24.90 €** | 15.0 % | **12.3 %** | 25.00 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **16.90 €** | 16.6 % | **12.6 %** | 17.00 € | stávame sa najlacnejší |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 54.50 € | **53.90 €** | 15.2 % | **13.9 %** | 54.00 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **25.90 €** | 37.0 % | **33.9 %** | 26.00 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.50 € | **26.90 €** | 34.4 % | **31.5 %** | 27.00 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.50 € | **53.90 €** | 10.1 % | **8.9 %** | 54.00 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 19.50 € | **18.90 €** | 16.4 % | **12.8 %** | 19.00 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **38.90 €** | 10.9 % | **9.2 %** | 39.00 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V200 | 32.50 € | **31.90 €** | 15.8 % | **13.7 %** | 32.00 € | stávame sa najlacnejší |
| Vysílač DO TechniSat TechniControl | 20.50 € | **19.90 €** | 16.4 % | **13.0 %** | 20.00 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **18.90 €** | 14.1 % | **10.6 %** | 19.00 € | stávame sa najlacnejší |
| Sieťová nabíjačka Blitzwolf BW-i100 5v1 120W | 45.50 € | **44.90 €** | 15.6 % | **14.1 %** | 45.00 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **18.90 €** | 15.0 % | **11.4 %** | 19.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **20.90 €** | 15.1 % | **11.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.50 € | **23.90 €** | 26.5 % | **23.4 %** | 24.00 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.50 € | **17.90 €** | 9.0 % | **5.5 %** | 18.00 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.50 € | **17.90 €** | 31.6 % | **27.3 %** | 18.00 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **59.90 €** | 37.2 % | **35.8 %** | 60.00 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.50 € | **24.90 €** | 15.0 % | **12.3 %** | 25.00 € | stávame sa najlacnejší |
| Činky litinové nastavitelné 15kg, REBEL ACTIVE RBA-2... | 46.50 € | **45.90 €** | 15.6 % | **14.1 %** | 46.00 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.10 €** | 46.3 % | **34.9 %** | 7.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.10 €** | 49.3 % | **30.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.20 € | **4.60 €** | 48.9 % | **31.7 %** | 4.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.90 € | **6.30 €** | 47.2 % | **34.4 %** | 6.40 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.60 €** | 54.5 % | **32.4 %** | 3.70 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.90 € | **3.30 €** | 53.2 % | **29.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.80 €** | 55.3 % | **27.9 %** | 2.90 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.30 €** | 53.2 % | **29.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.90 € | **3.30 €** | 48.9 % | **26.0 %** | 3.40 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.60 €** | 54.9 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.10 €** | 55.1 % | **29.9 %** | 3.20 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.60 €** | 54.9 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.10 €** | 55.1 % | **29.9 %** | 3.20 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - bezdrátový detektor pohybu | 11.50 € | **10.90 €** | 13.1 % | **7.2 %** | 9.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **12.90 €** | 14.0 % | **8.9 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **14.90 €** | 45.9 % | **40.2 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.50 € | **11.90 €** | 27.0 % | **20.9 %** | 12.00 € | stávame sa najlacnejší |
| Napájecí zdroj spínaný URZ1169  12V / 5A - 2,1/5,5 | 12.50 € | **11.90 €** | 13.7 % | **8.2 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.50 € | **14.90 €** | 14.1 % | **9.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.50 € | **13.90 €** | 33.7 % | **28.1 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **10.90 €** | 38.5 % | **31.3 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **14.90 €** | 39.9 % | **34.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **10.90 €** | 40.4 % | **33.1 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.50 €** | 55.2 % | **42.1 %** | 6.60 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.70 €** | 53.8 % | **41.1 %** | 6.80 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.70 €** | 53.8 % | **41.1 %** | 6.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **6.20 €** | 54.0 % | **40.4 %** | 6.30 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **14.90 €** | 16.8 % | **12.3 %** | 15.00 € | stávame sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 10.00 € | **9.40 €** | 43.9 % | **35.3 %** | 9.50 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.70 €** | 54.6 % | **41.9 %** | 6.80 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **12.90 €** | 36.3 % | **30.3 %** | 13.00 € | stávame sa najlacnejší |
| Cabletech UCH0023A1 | 12.50 € | **11.90 €** | 16.9 % | **11.3 %** | 12.00 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **13.90 €** | 16.5 % | **11.7 %** | 14.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **4.70 €** | 47.6 % | **30.9 %** | 4.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.50 € | **11.90 €** | 22.4 % | **16.6 %** | 12.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 10.50 € | **9.90 €** | 29.7 % | **22.3 %** | 10.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.00 €** | 47.0 % | **33.6 %** | 6.10 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **13.90 €** | 44.1 % | **38.2 %** | 14.00 € | stávame sa najlacnejší |
| OTTOCAST OTTOAIBOX N95C Monitor do auta | 154.50 € | **153.90 €** | 14.9 % | **14.4 %** | 154.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT Epever XTRA3210N G3 BLE, 12/2... | 126.50 € | **125.90 €** | 15.2 % | **14.6 %** | 126.00 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **112.90 €** | 10.4 % | **9.8 %** | 113.00 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 234.50 € | **233.90 €** | 15.1 % | **14.8 %** | 234.00 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.50 € | **83.90 €** | 10.0 % | **9.2 %** | 84.00 € | stávame sa najlacnejší |
| Rowenta RO7457EA | 191.50 € | **190.90 €** | 8.7 % | **8.4 %** | 191.00 € | stávame sa najlacnejší |
| CP-UNC-VC21L5-VMDS-0280 2.0 Mpix venkovní IP kamera ... | 204.50 € | **203.90 €** | 15.1 % | **14.8 %** | 204.00 € | stávame sa najlacnejší |
| CP-UVR-0401L1B-4KH Čtyřkanálový 4K 5v1 DVR s kompres... | 249.50 € | **248.90 €** | 15.1 % | **14.8 %** | 249.00 € | stávame sa najlacnejší |
| CP-UVR-0801E1-CV4 Osmikanálový 5v1 mini DVR s kompre... | 135.50 € | **134.90 €** | 15.2 % | **14.7 %** | 135.00 € | stávame sa najlacnejší |
| Alcad CA-662 | 146.50 € | **145.90 €** | 15.1 % | **14.6 %** | 146.00 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4507-G - ŠEDÝ  11' ... | 187.50 € | **186.90 €** | 15.1 % | **14.7 %** | 187.00 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.80 €** | 55.5 % | **46.1 %** | 7.90 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.70 €** | 56.9 % | **21.2 %** | 1.80 € | stávame sa najlacnejší |
| ELECTROLUX E2YH01 | 15.00 € | **14.50 €** | 10.2 % | **6.5 %** | 11.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Redmi Buds 8 Active Blue | 16.50 € | **16.00 €** | 8.9 % | **5.6 %** | 15.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Redmi Buds 8 Active White | 16.50 € | **16.00 €** | 8.9 % | **5.6 %** | 15.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.40 €** | 47.1 % | **8.4 %** | 1.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.50 € | **11.00 €** | 10.5 % | **5.7 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.70 €** | 48.7 % | **36.7 %** | 5.71 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.70 € | **4.20 €** | 51.6 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 22.00 € | **21.50 €** | 13.7 % | **11.1 %** | 21.59 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.50 € | **13.00 €** | 14.4 % | **10.2 %** | 13.09 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.80 €** | 47.1 % | **33.2 %** | 4.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.30 €** | 38.4 % | **30.5 %** | 8.40 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.60 €** | 54.5 % | **41.8 %** | 5.70 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 5.10 € | **4.60 €** | 54.1 % | **39.0 %** | 4.70 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 5.30 € | **4.80 €** | 55.6 % | **40.9 %** | 4.90 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.60 €** | 54.5 % | **41.8 %** | 5.70 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.40 €** | 55.6 % | **39.7 %** | 4.50 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.70 €** | 48.5 % | **30.8 %** | 3.80 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.50 € | **9.00 €** | 44.1 % | **36.5 %** | 9.10 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.70 €** | 49.4 % | **35.0 %** | 4.80 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.00 €** | 45.2 % | **34.0 %** | 6.10 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.90 € | **2.40 €** | 48.3 % | **22.7 %** | 2.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.30 €** | 48.5 % | **29.0 %** | 3.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.40 €** | 48.2 % | **29.2 %** | 3.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.50 €** | 49.6 % | **24.7 %** | 2.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.30 € | **3.80 €** | 46.9 % | **29.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **4.60 €** | 48.1 % | **33.6 %** | 4.70 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.00 €** | 56.3 % | **25.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.50 €** | 50.8 % | **43.3 %** | 9.60 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.00 € | **137.50 €** | 14.9 % | **14.4 %** | 137.69 € | stávame sa najlacnejší |
| Solární regulátor PWM Epever VS1024AU, 12/24V, 10A s... | 38.00 € | **37.50 €** | 14.6 % | **13.1 %** | 37.79 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP WL HD | 79.50 € | **79.00 €** | 5.7 % | **5.1 %** | 79.29 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **27.00 €** | 15.6 % | **13.5 %** | 27.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 134.00 € | **133.50 €** | 14.8 % | **14.4 %** | 133.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 30.50 € | **30.00 €** | 14.9 % | **13.0 %** | 30.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 91.00 € | **90.50 €** | 14.7 % | **14.1 %** | 90.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 33.00 € | **32.50 €** | 14.4 % | **12.6 %** | 32.89 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 16.00 € | **15.50 €** | 13.4 % | **9.9 %** | 15.90 € | stávame sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černé s LED podsv... | 117.00 € | **116.50 €** | 15.0 % | **14.5 %** | 116.90 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 34.00 € | **33.50 €** | 15.1 % | **13.4 %** | 33.90 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.50 €** | 38.5 % | **33.2 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.50 €** | 38.4 % | **35.1 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.50 €** | 63.6 % | **62.0 %** | 49.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **39.50 €** | 38.2 % | **36.5 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 22.00 € | **21.50 €** | 38.4 % | **35.3 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.50 €** | 26.4 % | **23.3 %** | 19.90 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 14.00 € | **13.50 €** | 32.8 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 318.00 € | **317.50 €** | 12.1 % | **11.9 %** | 317.90 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.00 € | **21.50 €** | 29.4 % | **26.5 %** | 21.90 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.50 €** | 32.0 % | **30.3 %** | 37.90 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.50 €** | 39.2 % | **36.2 %** | 22.90 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.90 € | stávame sa najlacnejší |
| Solární regulátor ANTIK AC Water Heater (On-Grid) | 415.00 € | **414.50 €** | 15.0 % | **14.8 %** | 414.90 € | stávame sa najlacnejší |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 4000 SIN... | 339.00 € | **338.50 €** | 15.0 % | **14.8 %** | 338.90 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **109.50 €** | 20.0 % | **19.5 %** | 109.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.50 €** | 25.3 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.50 €** | 33.9 % | **32.3 %** | 39.90 € | stávame sa najlacnejší |
| Kuchyňský robot TEESA TSA3545-B EASY COOK SINGLE BLA... | 85.00 € | **84.50 €** | 15.1 % | **14.4 %** | 84.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 50XN GPS s nočn... | 255.00 € | **254.50 €** | 15.0 % | **14.8 %** | 254.90 € | stávame sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.50 €** | 14.9 % | **14.7 %** | 219.90 € | stávame sa najlacnejší |
| CP PLUS CP-L4C-DX40FL3 4.0 Mpix venkovní dome kamera... | 133.00 € | **132.50 €** | 15.0 % | **14.6 %** | 132.90 € | stávame sa najlacnejší |
| CP-UNC-TA51L3C-0360 5.0 Mpix venkovní IP kamera s IR... | 129.00 € | **128.50 €** | 15.0 % | **14.5 %** | 128.90 € | stávame sa najlacnejší |
| CP-UNC-TC21ZL6-VMDS-27135 2.0 Mpix venkovní IP kamer... | 223.00 € | **222.50 €** | 15.0 % | **14.7 %** | 222.90 € | stávame sa najlacnejší |
| CP PLUS CP-VNC-V4KZR3-VMD-V2 4K venkovní antivandal ... | 342.00 € | **341.50 €** | 15.0 % | **14.8 %** | 341.90 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 409.00 € | **408.50 €** | 14.9 % | **14.8 %** | 408.90 € | stávame sa najlacnejší |
| Baterie olověná  12V /  7,5Ah XTREME / Enerwell bezú... | 16.00 € | **15.50 €** | 15.3 % | **11.7 %** | 15.90 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 20.00 € | **19.50 €** | 24.7 % | **21.6 %** | 19.90 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.00 € | **24.50 €** | 22.9 % | **20.4 %** | 24.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.00 € | **70.50 €** | 17.6 % | **16.8 %** | 70.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.00 € | **21.50 €** | 28.9 % | **25.9 %** | 21.90 € | stávame sa najlacnejší |
| CP-UVR-0401L1B-4KI3 Čtyřkanálový 4K 5v1 DVR s kompre... | 268.00 € | **267.50 €** | 14.9 % | **14.7 %** | 267.90 € | stávame sa najlacnejší |
| D-LINK AC13U | 14.00 € | **13.50 €** | 11.4 % | **7.4 %** | 13.90 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.50 €** | 8.2 % | **6.8 %** | 40.90 € | stávame sa najlacnejší |
| FINLUX 32FQI8061 SMART QLED TV FULL HD TIVO | 302.00 € | **301.50 €** | 15.0 % | **14.8 %** | 301.90 € | stávame sa najlacnejší |
| LEM DSA15-5G automatický programovatelný DVB-T/T2 ze... | 205.00 € | **204.50 €** | 15.0 % | **14.7 %** | 204.90 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.50 €** | 14.6 % | **13.4 %** | 46.90 € | stávame sa najlacnejší |
| Hoverboard Rebel Cruiser Paint | 146.00 € | **145.50 €** | 15.0 % | **14.6 %** | 145.90 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5007 25L DC12/24V AC 230V -22°C | 176.00 € | **175.50 €** | 15.0 % | **14.6 %** | 175.90 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 319.00 € | **318.50 €** | 5.6 % | **5.4 %** | 318.90 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.80 €** | 57.1 % | **23.0 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 9.00 € | **8.60 €** | 48.1 % | **41.5 %** | 8.70 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.00 € | **7.60 €** | 38.1 % | **31.2 %** | 7.70 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.60 €** | 38.3 % | **32.7 %** | 9.70 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.60 €** | 53.7 % | **46.9 %** | 8.70 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **4.60 €** | 54.0 % | **41.7 %** | 4.70 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.20 € | **2.80 €** | 48.7 % | **30.1 %** | 2.90 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.50 €** | 15.5 % | **11.3 %** | 10.79 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.20 €** | 44.5 % | **8.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.70 €** | 52.4 % | **23.4 %** | 1.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.70 €** | 47.2 % | **19.1 %** | 1.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.40 €** | 45.9 % | **25.1 %** | 2.50 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.60 € | **3.20 €** | 46.3 % | **30.1 %** | 3.30 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **3.00 €** | 47.0 % | **29.7 %** | 3.10 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **2.90 €** | 49.9 % | **31.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **2.90 €** | 49.9 % | **31.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.60 €** | 54.9 % | **23.9 %** | 1.70 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 52.0 % | **25.6 %** | 2.00 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HD025 LED modrá | 31.90 € | **31.50 €** | 6.3 % | **5.0 %** | 29.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal HT310838 | 27.90 € | **27.50 €** | 10.7 % | **9.1 %** | 27.79 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 28.90 € | **28.50 €** | 29.9 % | **28.1 %** | 28.82 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.80 €** | 52.7 % | **38.0 %** | 2.90 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.60 € | **2.30 €** | 54.3 % | **36.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.70 € | **2.40 €** | 47.3 % | **31.0 %** | 2.50 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 3000K, 510lm | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI spojka, HDMI zdierka - HDMI zdierka, pr... | 1.10 € | **0.80 €** | 51.6 % | **10.2 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.80 €** | 56.6 % | **34.3 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.80 €** | 56.6 % | **34.3 %** | 1.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.80 €** | 59.7 % | **16.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.20 €** | 52.4 % | **22.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.80 €** | 49.8 % | **28.4 %** | 1.90 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.70 €** | 49.2 % | **26.8 %** | 1.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.30 €** | 51.3 % | **22.9 %** | 1.40 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595l... | 1.20 € | **0.90 €** | 47.8 % | **10.9 %** | 0.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **0.90 €** | 54.9 % | **16.1 %** | 1.00 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.10 €** | 45.9 % | **14.7 %** | 1.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.40 € | **3.10 €** | 46.3 % | **33.4 %** | 3.17 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.70 €** | 46.0 % | **31.4 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.10 €** | 57.4 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda červená, závesná, 60cm,... | 4.50 € | **4.20 €** | 49.3 % | **39.4 %** | 4.30 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.30 € | **3.00 €** | 52.4 % | **38.6 %** | 3.10 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.10 €** | 57.4 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.10 €** | 56.1 % | **36.6 %** | 2.20 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.20 €** | 28.3 % | **22.3 %** | 6.30 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.10 €** | 46.7 % | **28.4 %** | 2.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.20 €** | 47.3 % | **29.6 %** | 2.30 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.40 € | **2.10 €** | 47.8 % | **29.3 %** | 2.20 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.00 €** | 47.2 % | **28.0 %** | 2.10 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.80 €** | 46.2 % | **35.5 %** | 3.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.20 € | **6.90 €** | 47.8 % | **41.7 %** | 7.00 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.70 €** | 28.2 % | **25.6 %** | 9.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.40 € | **9.20 €** | 26.9 % | **24.2 %** | 9.30 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.20 €** | 43.8 % | **40.4 %** | 8.30 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 8.7 % | **5.4 %** | 6.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.40 € | **5.20 €** | 39.8 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.00 €** | 20.4 % | **15.8 %** | 5.10 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.80 €** | 38.4 % | **34.9 %** | 7.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.30 €** | 38.3 % | **34.6 %** | 7.40 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.70 € | **4.50 €** | 41.0 % | **35.0 %** | 4.60 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.20 €** | 45.4 % | **40.0 %** | 5.30 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 2.10 € | **1.90 €** | 51.1 % | **36.7 %** | 2.00 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.80 €** | 48.5 % | **41.1 %** | 3.90 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.50 €** | 46.7 % | **38.8 %** | 3.60 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **1.90 €** | 48.5 % | **34.3 %** | 2.00 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 6.90 € | **6.70 €** | 34.5 % | **30.6 %** | 6.80 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.30 € | **4.10 €** | 35.5 % | **29.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.60 € | **1.40 €** | 36.9 % | **19.8 %** | 1.50 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.50 €** | 37.2 % | **27.0 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.00 €** | 32.1 % | **23.8 %** | 3.10 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.30 €** | 36.3 % | **31.4 %** | 5.40 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.00 €** | 36.6 % | **32.2 %** | 6.10 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.10 €** | 38.7 % | **32.3 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.40 €** | 15.7 % | **9.3 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.30 €** | 38.9 % | **35.2 %** | 7.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 5.80 € | **5.60 €** | 54.6 % | **49.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.50 € | **3.30 €** | 13.4 % | **6.9 %** | 3.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.40 € | **4.20 €** | 13.9 % | **8.7 %** | 4.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.70 € | **4.50 €** | 36.5 % | **30.7 %** | 4.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.10 €** | 21.0 % | **16.5 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.40 € | **4.20 €** | 14.3 % | **9.1 %** | 4.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.40 € | **4.20 €** | 11.1 % | **6.0 %** | 4.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.80 €** | 25.4 % | **21.2 %** | 5.90 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.30 €** | 34.2 % | **26.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.70 €** | 45.4 % | **40.4 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.50 €** | 44.2 % | **40.5 %** | 7.60 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.10 € | **0.90 €** | 35.5 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 0.90 € | **0.70 €** | 49.3 % | **16.1 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 0.90 € | **0.70 €** | 49.3 % | **16.1 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 1.00 € | stávame sa najlacnejší |
| Solight skúšačka 201, priemer 3mm x 140mm, AC napäti... | 0.80 € | **0.60 €** | 54.9 % | **16.1 %** | 0.70 € | stávame sa najlacnejší |
| Solight skúšačka 304, priemer 3,5mm x 190mm, AC napä... | 0.90 € | **0.70 €** | 52.4 % | **18.6 %** | 0.80 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.70 €** | 38.1 % | **7.4 %** | 0.80 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **0.90 €** | 42.0 % | **16.1 %** | 1.00 € | stávame sa najlacnejší |
| Solight zástrčka plochá priama, IP20, biela | 0.90 € | **0.70 €** | 52.4 % | **18.6 %** | 0.80 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.20 €** | 32.4 % | **13.4 %** | 1.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.80 €** | 52.0 % | **36.8 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.70 €** | 51.4 % | **35.5 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.30 €** | 48.7 % | **28.9 %** | 1.40 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.00 €** | 39.4 % | **16.1 %** | 1.10 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.50 €** | 45.5 % | **28.4 %** | 1.60 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **1.70 €** | 36.7 % | **22.3 %** | 1.80 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.80 € | **1.60 €** | 29.5 % | **15.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.10 €** | 51.0 % | **27.8 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.70 €** | 23.6 % | **10.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.80 €** | 23.2 % | **10.9 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.10 €** | 19.8 % | **12.5 %** | 3.20 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.10 €** | 50.8 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.60 €** | 49.8 % | **39.1 %** | 2.70 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.10 € | **4.90 €** | 35.9 % | **30.6 %** | 5.00 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **5.90 €** | 32.6 % | **28.3 %** | 6.00 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.80 €** | 25.1 % | **22.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.80 €** | 45.7 % | **42.8 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.40 €** | 24.8 % | **21.5 %** | 7.50 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.40 €** | 37.3 % | **33.7 %** | 7.50 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.70 € | **8.50 €** | 8.2 % | **5.7 %** | 8.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.40 €** | 36.6 % | **33.4 %** | 8.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.60 € | **9.40 €** | 34.3 % | **31.5 %** | 9.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.90 €** | 13.4 % | **10.2 %** | 7.00 € | stávame sa najlacnejší |
| DOMO DO9232I | 351.00 € | **350.90 €** | 5.1 % | **5.1 %** | 347.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 0.50 € | **0.40 €** | 69.4 % | **35.5 %** | 0.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.10 € | **9.00 €** | 37.8 % | **36.3 %** | 9.04 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Hi | 208.00 € | **207.90 €** | 5.1 % | **5.0 %** | 207.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 117.00 € | **116.90 €** | 14.2 % | **14.1 %** | 116.99 € | stávame sa najlacnejší |

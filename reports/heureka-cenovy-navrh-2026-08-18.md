# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-18

Vstup: `premiumstoresk_20260818_1149.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **4073**
- Návrh **zvýšiť** cenu: **78** produktov
- Návrh **znížiť** cenu: **912** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3083** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **82**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (78)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 901.50 € | **1080.50 €** | 15.0 % | **37.8 %** | 901.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko HSM14540 | 261.00 € | **284.90 €** | 10.0 % | **20.1 %** | 261.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.4 % | **15.6 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Club 120 | 265.00 € | **269.90 €** | 9.4 % | **11.4 %** | 265.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BROTHER DCP-T730DW | 266.50 € | **270.50 €** | 11.7 % | **13.4 %** | 266.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Stage 320 | 428.50 € | **432.00 €** | 10.0 % | **10.9 %** | 428.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 28.00 € | **30.50 €** | 5.0 % | **14.4 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **64.00 €** | 19.8 % | **24.7 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot C1 Pro | 415.90 € | **417.90 €** | 5.1 % | **5.6 %** | 415.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 36.90 € | **38.50 €** | 10.5 % | **15.3 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 43.50 € | **45.00 €** | 20.1 % | **24.3 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 21.00 € | **22.50 €** | 22.7 % | **31.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.50 € | **41.00 €** | 43.2 % | **48.6 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA X25 (čierne) | 13.50 € | **15.00 €** | 13.0 % | **25.6 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 15.00 € | **16.50 €** | 23.7 % | **36.1 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Mesh Steel | 67.90 € | **69.00 €** | 10.5 % | **12.2 %** | 67.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Solid Steel | 67.90 € | **69.00 €** | 10.5 % | **12.2 %** | 67.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy VEGA X Lite | 29.00 € | **30.00 €** | 10.3 % | **14.1 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CMWA23TNDB | 97.00 € | **98.00 €** | 10.1 % | **11.2 %** | 97.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.90 €** | 14.6 % | **17.5 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.90 €** | 15.0 % | **17.8 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 25.90 € | **26.50 €** | 8.9 % | **11.4 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-S3 V2 Google TV box | 63.90 € | **64.50 €** | 10.4 % | **11.4 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH 6756WO | 122.90 € | **123.50 €** | 7.6 % | **8.1 %** | 122.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S10 Rear Cam | 24.00 € | **24.50 €** | 8.6 % | **10.8 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 16.00 € | **16.50 €** | 20.2 % | **24.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.00 € | **23.50 €** | 27.7 % | **30.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.50 € | **27.00 €** | 8.8 % | **10.9 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.00 € | **23.50 €** | 33.9 % | **36.9 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.00 € | **16.50 €** | 8.3 % | **11.7 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Icequeen-Wh | 19.00 € | **19.50 €** | 5.2 % | **8.0 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 252.00 € | **252.50 €** | 7.9 % | **8.1 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.00 € | **30.50 €** | 7.7 % | **9.5 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.00 € | **30.50 €** | 12.5 % | **14.4 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **44.50 €** | 11.0 % | **12.3 %** | 44.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.00 € | **238.50 €** | 7.7 % | **8.0 %** | 238.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje R619EAW6 | 481.00 € | **481.50 €** | 6.8 % | **6.9 %** | 481.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Indesit BTW S50400 EU/N | 262.00 € | **262.50 €** | 7.9 % | **8.1 %** | 262.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 335.00 € | **335.50 €** | 6.3 % | **6.5 %** | 335.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1226 | 189.00 € | **189.50 €** | 6.8 % | **7.1 %** | 189.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE SuChef | 82.50 € | **82.90 €** | 7.7 % | **8.3 %** | 82.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 745390000 | 124.50 € | **124.90 €** | 9.6 % | **9.9 %** | 124.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 9.2 % | **9.7 %** | 84.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.50 € | **114.90 €** | 10.0 % | **10.4 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CBT6130/3X | 64.50 € | **64.90 €** | 6.1 % | **6.7 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.40 € | **8.80 €** | 38.0 % | **44.5 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.50 € | **10.90 €** | 6.7 % | **10.8 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenný keramický ohrievač, 2000 W, biely | 39.50 € | **39.90 €** | 4.8 % | **5.9 %** | 39.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| RUSSELL HOBBS 22760-56/RH | 30.50 € | **30.90 €** | 12.0 % | **13.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 321990020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **20.90 €** | 36.4 % | **39.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 34.50 € | **34.90 €** | 36.7 % | **38.3 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 365.50 € | **365.90 €** | 9.6 % | **9.7 %** | 365.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 449.50 € | **449.90 €** | 6.7 % | **6.8 %** | 449.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL PartyBox 330 | 536.90 € | **537.00 €** | 6.4 % | **6.4 %** | 536.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux 600 Gril EMS4253TBX | 261.90 € | **262.00 €** | 6.1 % | **6.2 %** | 261.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BMTD37146W | 383.90 € | **384.00 €** | 6.6 % | **6.6 %** | 383.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 502.90 € | **503.00 €** | 6.4 % | **6.4 %** | 502.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 CIR60430CB | 368.90 € | **369.00 €** | 5.8 % | **5.8 %** | 368.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 7.0 % | **7.4 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-LINK RE205 AC750 WiFi Range Extender | 30.90 € | **31.00 €** | 10.5 % | **10.8 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 21.90 € | **22.00 €** | 10.0 % | **10.5 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 28.1 % | **33.0 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 19.6 % | **23.5 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka 201, priemer 3mm x 140mm, AC napäti... | 0.60 € | **0.70 €** | 16.1 % | **35.5 %** | 0.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (912)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.50 €** | 15.0 % | **5.9 %** | 2645.65 € | stávame sa najlacnejší |
| YAMAHA R-N800A BLACK | 1099.00 € | **955.50 €** | 23.4 % | **7.3 %** | 955.90 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.90 €** | 28.6 % | **6.0 %** | 634.00 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.50 €** | 28.6 % | **6.0 %** | 526.90 € | stávame sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **369.50 €** | 34.1 % | **5.6 %** | 369.70 € | stávame sa najlacnejší |
| Gorenje FN619EAW6 | 639.00 € | **543.90 €** | 24.5 % | **6.0 %** | 544.00 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **503.90 €** | 26.9 % | **6.7 %** | 504.00 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Plus Combo | 1176.90 € | **1086.00 €** | 15.0 % | **6.1 %** | 1086.24 € | stávame sa najlacnejší |
| Gorenje GECS5C70XPA | 559.00 € | **471.50 €** | 26.8 % | **7.0 %** | 471.80 € | stávame sa najlacnejší |
| Diagnostický skener motocyklov Ancel MT700 | 853.00 € | **778.90 €** | 15.0 % | **5.0 %** | 740.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 1064.90 € | **1019.50 €** | 15.0 % | **10.1 %** | 1019.67 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 573.50 € | **529.90 €** | 15.0 % | **6.3 %** | 529.95 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.50 €** | 18.3 % | **7.0 %** | 411.90 € | stávame sa najlacnejší |
| Kávovar MOVA Virtuoso 10 Pro (biely) | 445.50 € | **406.90 €** | 15.0 % | **5.0 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE R4142PW | 319.00 € | **284.90 €** | 17.7 % | **5.1 %** | 259.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX AD200ProII | 384.50 € | **351.00 €** | 15.0 % | **5.0 %** | 349.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 5000 SIN... | 350.00 € | **319.90 €** | 15.0 % | **5.1 %** | 314.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 407.50 € | **379.90 €** | 15.0 % | **7.2 %** | 379.95 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.00 €** | 49.9 % | **19.0 %** | 98.50 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3431B 1600W 12V | 303.90 € | **279.00 €** | 15.0 % | **5.6 %** | 279.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6005 50l, 12V/24V/230V/baterie... | 278.00 € | **253.90 €** | 15.0 % | **5.0 %** | 253.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - na kovovom bubne, 4 zás... | 144.50 € | **123.50 €** | 43.9 % | **23.0 %** | 123.87 € | stávame sa najlacnejší |
| BEKO B5RCNA405HG | 451.50 € | **430.90 €** | 10.1 % | **5.1 %** | 389.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GSXE90EVAD | 2218.90 € | **2198.50 €** | 10.0 % | **9.0 %** | 2198.90 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.90 €** | 10.1 % | **6.9 %** | 639.00 € | stávame sa najlacnejší |
| Beko BDFN26540XP | 460.50 € | **441.90 €** | 10.1 % | **5.7 %** | 442.00 € | stávame sa najlacnejší |
| Gorenje GI643D90X | 407.00 € | **388.50 €** | 10.0 % | **5.0 %** | 347.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 447.00 € | **429.50 €** | 14.9 % | **10.4 %** | 429.67 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 86.90 € | **70.90 €** | 43.9 % | **17.4 %** | 71.00 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.90 €** | 10.0 % | **7.9 %** | 799.00 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **524.00 €** | 10.1 % | **6.9 %** | 524.50 € | stávame sa najlacnejší |
| Albrecht DR 865 | 179.00 € | **164.00 €** | 25.0 % | **14.5 %** | 164.19 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **329.90 €** | 10.1 % | **5.6 %** | 330.00 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 332.50 € | **318.90 €** | 10.1 % | **5.6 %** | 319.00 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5008 13L DC12/24V AC 230V -22°C | 155.50 € | **141.90 €** | 15.1 % | **5.1 %** | 133.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 160.50 € | **147.00 €** | 15.1 % | **5.4 %** | 147.05 € | stávame sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.50 €** | 54.8 % | **11.5 %** | 34.90 € | stávame sa najlacnejší |
| Gorenje RK4182PS4 | 332.50 € | **319.50 €** | 10.8 % | **6.5 %** | 319.90 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.90 €** | 10.1 % | **5.7 %** | 299.00 € | stávame sa najlacnejší |
| Beko B3RCNA415HXB | 443.90 € | **431.50 €** | 10.0 % | **6.9 %** | 431.80 € | stávame sa najlacnejší |
| Vonkajšia IP kamera IMOU AOV PT KIT 4G (bez karty) | 142.50 € | **130.50 €** | 15.1 % | **5.4 %** | 117.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (čierny) | 272.90 € | **261.00 €** | 15.0 % | **10.0 %** | 261.17 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **483.00 €** | 10.0 % | **7.4 %** | 483.46 € | stávame sa najlacnejší |
| CANDY CDIH 1L949 | 257.50 € | **245.90 €** | 10.0 % | **5.1 %** | 233.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **367.50 €** | 10.0 % | **6.7 %** | 367.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E3S (čierny) | 198.90 € | **187.90 €** | 15.1 % | **8.7 %** | 188.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 75.00 € | **64.00 €** | 59.1 % | **35.8 %** | 64.21 € | stávame sa najlacnejší |
| AnyCubic Kobra 2 Pro 3D Printer | 217.50 € | **207.00 €** | 15.1 % | **9.6 %** | 207.07 € | stávame sa najlacnejší |
| JBL TOUR ONE M3, Black | 275.50 € | **265.00 €** | 9.5 % | **5.4 %** | 265.24 € | stávame sa najlacnejší |
| JBL TOUR ONE M3, Latte | 275.50 € | **265.00 €** | 9.5 % | **5.4 %** | 265.24 € | stávame sa najlacnejší |
| Gorenje R49CPW | 284.50 € | **274.00 €** | 10.1 % | **6.0 %** | 274.44 € | stávame sa najlacnejší |
| GORENJE WNHPI84AS/A | 365.50 € | **355.00 €** | 10.1 % | **6.9 %** | 355.50 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 157.90 € | **147.50 €** | 15.1 % | **7.5 %** | 147.69 € | stávame sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.90 €** | 25.0 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| Gorenje GS541C10W | 354.50 € | **344.50 €** | 10.0 % | **6.9 %** | 344.90 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **299.90 €** | 10.0 % | **6.6 %** | 299.98 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **299.90 €** | 10.0 % | **6.6 %** | 299.98 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.90 €** | 10.0 % | **7.0 %** | 341.00 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.90 €** | 44.6 % | **8.6 %** | 29.00 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.50 € | stávame sa najlacnejší |
| Candy F ACDI Z600 L Idea | 205.00 € | **195.90 €** | 10.0 % | **5.1 %** | 178.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S351DB 2.1 (čierne) | 258.00 € | **248.90 €** | 14.9 % | **10.9 %** | 249.00 € | stávame sa najlacnejší |
| MEROSS MRS105MA-EU Inteligentný ovládač rolet s podp... | 105.50 € | **96.50 €** | 15.2 % | **5.3 %** | 95.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta GZ5436E0 | 298.50 € | **289.50 €** | 10.0 % | **6.7 %** | 289.90 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **39.00 €** | 38.7 % | **13.0 %** | 39.50 € | stávame sa najlacnejší |
| Gorenje F49CPW | 203.50 € | **194.90 €** | 10.2 % | **5.5 %** | 195.00 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS20 | 135.50 € | **127.50 €** | 15.2 % | **8.4 %** | 127.58 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 119.90 € | **111.90 €** | 15.1 % | **7.4 %** | 111.99 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 204.00 € | **196.00 €** | 14.9 % | **10.4 %** | 196.39 € | stávame sa najlacnejší |
| Electrolux EF167 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.10 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 49.00 € | **41.50 €** | 24.8 % | **5.7 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 31.50 € | **24.00 €** | 54.7 % | **17.9 %** | 24.39 € | stávame sa najlacnejší |
| BEKO STM4116B | 39.00 € | **31.50 €** | 32.7 % | **7.2 %** | 31.90 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, čierna | 30.90 € | **23.50 €** | 38.9 % | **5.6 %** | 14.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 110.00 € | **102.90 €** | 43.6 % | **34.3 %** | 102.92 € | stávame sa najlacnejší |
| Sony WFLS910NW bílá | 158.50 € | **151.50 €** | 10.2 % | **5.3 %** | 99.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CA20FMW7NB | 153.50 € | **146.50 €** | 10.2 % | **5.2 %** | 138.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **101.50 €** | 14.9 % | **7.5 %** | 101.52 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 98.50 € | **91.50 €** | 43.6 % | **33.4 %** | 91.67 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **85.00 €** | 14.8 % | **6.1 %** | 85.22 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 47.00 € | **40.00 €** | 58.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 28.50 € | **21.50 €** | 58.5 % | **19.6 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 29.00 € | **22.00 €** | 54.0 % | **16.8 %** | 22.45 € | stávame sa najlacnejší |
| Ariete Positano Espresso 1389/PO | 152.50 € | **145.90 €** | 10.1 % | **5.3 %** | 136.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární se zaměřovačem LEVENHUK Camo ... | 80.50 € | **73.90 €** | 15.2 % | **5.8 %** | 74.00 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.00 € | **151.50 €** | 14.9 % | **10.2 %** | 151.90 € | stávame sa najlacnejší |
| Tefal GC728D10 | 169.90 € | **163.50 €** | 10.1 % | **6.0 %** | 163.90 € | stávame sa najlacnejší |
| G3ferrari G1018700 Multifunkční trouba | 150.90 € | **144.50 €** | 10.1 % | **5.4 %** | 144.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky + časový spí... | 18.90 € | **12.50 €** | 60.6 % | **6.2 %** | 12.70 € | stávame sa najlacnejší |
| Beko BDFS26046XQ | 321.90 € | **315.50 €** | 10.1 % | **7.9 %** | 315.90 € | stávame sa najlacnejší |
| Chrániče holení DBX BUSHIDO SP-10v3 | 68.90 € | **62.90 €** | 15.2 % | **5.2 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chrániče holení DBX BUSHIDO SP-10v3 | 68.90 € | **62.90 €** | 15.2 % | **5.2 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta IN5011F0 | 132.50 € | **126.50 €** | 10.3 % | **5.3 %** | 121.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CH64CCB/4U2 | 129.90 € | **123.90 €** | 10.3 % | **5.2 %** | 118.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 77.50 € | **71.50 €** | 15.3 % | **6.3 %** | 71.67 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 77.50 € | **71.50 €** | 15.4 % | **6.4 %** | 71.67 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **216.50 €** | 15.0 % | **11.9 %** | 216.70 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **78.50 €** | 15.2 % | **7.0 %** | 78.78 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **16.00 €** | 49.2 % | **8.6 %** | 16.50 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 196.90 € | **191.00 €** | 10.0 % | **6.7 %** | 191.15 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **285.00 €** | 10.1 % | **7.9 %** | 285.50 € | stávame sa najlacnejší |
| Gorenje RK58DPB4I | 299.50 € | **293.90 €** | 10.1 % | **8.0 %** | 294.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **21.90 €** | 34.6 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **62.00 €** | 50.4 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **76.00 €** | 15.3 % | **7.5 %** | 76.50 € | stávame sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **171.50 €** | 10.1 % | **6.7 %** | 171.90 € | stávame sa najlacnejší |
| TEFAL HB 643138 | 54.90 € | **49.50 €** | 17.1 % | **5.6 %** | 49.90 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.00 € | **64.90 €** | 14.8 % | **6.4 %** | 64.96 € | stávame sa najlacnejší |
| Instant Pot Classic (5,7 L) | 116.90 € | **111.90 €** | 10.0 % | **5.3 %** | 83.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta HU4020F0 | 112.50 € | **107.50 €** | 10.4 % | **5.5 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič hrudníku DBX BUSHIDO ARC-1505 | 59.50 € | **54.50 €** | 14.8 % | **5.1 %** | 36.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chrániče holení RDX SGR-T1R | 59.50 € | **54.50 €** | 14.8 % | **5.1 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.68 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.00 € | **167.00 €** | 10.0 % | **6.8 %** | 167.20 € | stávame sa najlacnejší |
| Solight dezinfekčná bezozónová UV lampa 100W | 47.00 € | **42.00 €** | 49.6 % | **33.7 %** | 42.27 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 69.50 € | **64.50 €** | 15.3 % | **7.0 %** | 64.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1000 URZ3406-LFP4 700W 12V | 126.00 € | **121.00 €** | 14.8 % | **10.2 %** | 121.39 € | stávame sa najlacnejší |
| Tefal GC772830 | 225.50 € | **220.50 €** | 10.1 % | **7.6 %** | 220.90 € | stávame sa najlacnejší |
| Victron Energy VE.Bus BMS | 146.00 € | **141.00 €** | 14.9 % | **11.0 %** | 141.44 € | stávame sa najlacnejší |
| SONY WHCH720NP.CE7 Pink | 102.90 € | **98.00 €** | 10.3 % | **5.1 %** | 86.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **133.00 €** | 10.0 % | **6.1 %** | 133.10 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 (čierne) | 73.90 € | **69.00 €** | 15.3 % | **7.6 %** | 69.46 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 63.50 € | **58.90 €** | 15.3 % | **6.9 %** | 59.00 € | stávame sa najlacnejší |
| AKAI AS005RA-750B Zesilovač 5.1 | 238.50 € | **233.90 €** | 10.1 % | **8.0 %** | 233.91 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.50 € | **91.90 €** | 15.0 % | **9.5 %** | 91.96 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.50 € | **167.90 €** | 10.2 % | **7.3 %** | 168.00 € | stávame sa najlacnejší |
| DOMO DO336L | 99.00 € | **94.50 €** | 10.1 % | **5.1 %** | 91.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.00 € | **26.50 €** | 58.5 % | **35.5 %** | 26.64 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.50 € | **53.00 €** | 15.4 % | **6.3 %** | 53.27 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 210.00 € | **205.50 €** | 14.9 % | **12.4 %** | 205.78 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 214.00 € | **209.50 €** | 15.0 % | **12.6 %** | 209.89 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **43.50 €** | 54.5 % | **40.0 %** | 43.90 € | stávame sa najlacnejší |
| Niimbot K3 Commercial Lake Blue | 62.50 € | **58.00 €** | 15.0 % | **6.7 %** | 58.41 € | stávame sa najlacnejší |
| KOMA RK01 - Univerzální rotační kartáč | 22.99 € | **18.50 €** | 42.9 % | **15.0 %** | 18.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 127.90 € | **123.50 €** | 43.9 % | **38.9 %** | 123.60 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.50 €** | 39.2 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Autochladnička TEESA TSA5004.1 s funkcí ohřevu, 20l | 49.90 € | **45.50 €** | 15.4 % | **5.2 %** | 45.89 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.50 €** | 59.0 % | **33.9 %** | 23.90 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **468.50 €** | 10.0 % | **9.0 %** | 468.67 € | stávame sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2190R červená | 50.00 € | **45.90 €** | 15.1 % | **5.6 %** | 27.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2190R červená | 50.00 € | **45.90 €** | 15.1 % | **5.6 %** | 27.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2190R červená | 50.00 € | **45.90 €** | 15.1 % | **5.6 %** | 27.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2190R červená | 50.00 € | **45.90 €** | 15.1 % | **5.6 %** | 27.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2190-B | 50.00 € | **45.90 €** | 15.1 % | **5.6 %** | 32.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CDH30 | 91.00 € | **86.90 €** | 10.1 % | **5.1 %** | 86.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 181.00 € | **177.00 €** | 8.4 % | **6.0 %** | 177.04 € | stávame sa najlacnejší |
| Braun SI3042VI | 39.90 € | **35.90 €** | 26.8 % | **14.1 %** | 36.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **18.00 €** | 54.3 % | **26.3 %** | 18.10 € | stávame sa najlacnejší |
| Guzzanti GZ 86RR | 205.90 € | **201.90 €** | 10.1 % | **7.9 %** | 202.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 18.50 € | **14.50 €** | 45.0 % | **13.7 %** | 14.70 € | stávame sa najlacnejší |
| JBL Boombox 3 BLACK | 311.50 € | **307.50 €** | 10.1 % | **8.7 %** | 307.80 € | stávame sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **83.00 €** | 15.0 % | **9.7 %** | 83.36 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **48.00 €** | 15.0 % | **6.1 %** | 48.40 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 270.50 € | **266.50 €** | 15.0 % | **13.3 %** | 266.90 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 13 GS1331 | 201.90 € | **198.00 €** | 15.1 % | **12.9 %** | 198.06 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.90 € | **8.10 €** | 56.6 % | **6.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Beko FRL5474B | 73.50 € | **69.90 €** | 10.7 % | **5.3 %** | 70.00 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Gold - 9150 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Rose Gold - 9151 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Gorenje BOS6737E06B | 270.00 € | **266.50 €** | 6.6 % | **5.2 %** | 254.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilovací kolo HMS WA06 | 42.00 € | **38.50 €** | 14.6 % | **5.0 %** | 33.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 17.50 € | **14.00 €** | 56.3 % | **25.1 %** | 14.01 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 55.50 € | **52.00 €** | 14.7 % | **7.5 %** | 52.10 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 17.50 € | **14.00 €** | 45.5 % | **16.4 %** | 14.21 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **46.00 €** | 15.3 % | **7.1 %** | 46.24 € | stávame sa najlacnejší |
| Detektor jadrového žiarenia FNIRSI GC-02 | 44.50 € | **41.00 €** | 15.3 % | **6.3 %** | 41.29 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 56.50 € | **53.00 €** | 14.7 % | **7.6 %** | 53.35 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24 Ah MHPower MS24-12 | 47.00 € | **43.50 €** | 14.9 % | **6.3 %** | 43.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.00 €** | 55.1 % | **41.0 %** | 35.50 € | stávame sa najlacnejší |
| KOMA HPU1 - Univerzální hubice | 15.99 € | **12.50 €** | 45.6 % | **13.8 %** | 12.90 € | stávame sa najlacnejší |
| Rowenta RO3725EA | 76.90 € | **73.50 €** | 10.5 % | **5.6 %** | 73.90 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 150 + 100lm,... | 10.90 € | **7.50 €** | 53.6 % | **5.7 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné osvetlenie LECCE, 3CCT, 48W, 290... | 26.90 € | **23.50 €** | 38.7 % | **21.2 %** | 23.80 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 42.00 € | **38.90 €** | 37.7 % | **27.5 %** | 38.95 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.90 €** | 54.5 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Ninja FB131EUGY Frost Vault 28l | 193.00 € | **189.90 €** | 7.9 % | **6.2 %** | 189.99 € | stávame sa najlacnejší |
| Posilovací válec na břicho HMS KA08 hnědý s automati... | 40.50 € | **37.50 €** | 14.9 % | **6.4 %** | 31.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilovací válec na břicho HMS KA08 šedý s automatic... | 40.50 € | **37.50 €** | 14.9 % | **6.4 %** | 31.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor jadrového žiarenia FNIRSI GC-01 | 37.50 € | **34.50 €** | 15.3 % | **6.0 %** | 29.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED RGB osvetlenie Gaming, diaľkový ovládač,... | 10.90 € | **7.90 €** | 45.5 % | **5.5 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8053  DIGITAL AIR FRYE... | 34.50 € | **31.50 €** | 15.0 % | **5.0 %** | 31.55 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 33.50 € | **30.50 €** | 44.7 % | **31.8 %** | 30.55 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 55.50 € | **52.50 €** | 15.3 % | **9.1 %** | 52.55 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.90 €** | 50.2 % | **35.2 %** | 27.00 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 71.90 € | **68.90 €** | 15.1 % | **10.3 %** | 69.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 79.50 € | **76.50 €** | 43.8 % | **38.3 %** | 76.89 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.50 €** | 37.8 % | **21.5 %** | 22.90 € | stávame sa najlacnejší |
| Candy CHW6LBX/4U2 IDEA | 82.50 € | **79.50 €** | 10.5 % | **6.4 %** | 79.90 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 629.00 € | **626.00 €** | 10.0 % | **9.5 %** | 626.44 € | stávame sa najlacnejší |
| Rowenta RO7457EA | 193.90 € | **191.00 €** | 10.1 % | **8.4 %** | 191.50 € | stávame sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **38.00 €** | 15.0 % | **6.8 %** | 38.04 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 40.90 € | **38.00 €** | 15.0 % | **6.9 %** | 38.36 € | stávame sa najlacnejší |
| Vysavač ruční TEESA TSA5017 | 57.90 € | **55.00 €** | 15.0 % | **9.2 %** | 55.39 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **6.20 €** | 53.7 % | **5.9 %** | 6.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight univerzálny sieťový adaptér 1500mA, stabiliz... | 9.90 € | **7.20 €** | 45.3 % | **5.7 %** | 7.21 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **7.80 €** | 60.5 % | **19.2 %** | 7.90 € | stávame sa najlacnejší |
| Válec na posilování břicha HMS WA14 - AB-Carver | 28.50 € | **25.90 €** | 15.6 % | **5.0 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **23.90 €** | 54.7 % | **39.5 %** | 24.00 € | stávame sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 49.00 € | stávame sa najlacnejší |
| Tefal FW501815 | 136.50 € | **133.90 €** | 10.1 % | **8.0 %** | 134.00 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.50 € | **66.90 €** | 11.5 % | **7.3 %** | 67.00 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **32.00 €** | 49.6 % | **38.8 %** | 32.10 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Gens ace G-Tech Soaring 4000mAh 11.1V 30C 3S1P Lipo ... | 37.50 € | **35.00 €** | 15.3 % | **7.6 %** | 35.16 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 40.00 € | **37.50 €** | 14.7 % | **7.5 %** | 37.70 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **71.00 €** | 10.6 % | **6.9 %** | 71.20 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **15.00 €** | 42.8 % | **22.4 %** | 15.21 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **102.00 €** | 15.1 % | **12.4 %** | 102.24 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 23.00 € | **20.50 €** | 49.1 % | **32.9 %** | 20.75 € | stávame sa najlacnejší |
| Rowenta RH1833E0 | 149.50 € | **147.00 €** | 10.3 % | **8.4 %** | 147.39 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 52.50 € | **50.00 €** | 15.0 % | **9.6 %** | 50.46 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.00 €** | 53.3 % | **36.3 %** | 20.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **19.00 €** | 38.5 % | **22.4 %** | 19.50 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **132.00 €** | 10.3 % | **8.2 %** | 132.50 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **127.00 €** | 10.3 % | **8.2 %** | 127.50 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **172.50 €** | 10.1 % | **8.5 %** | 172.90 € | stávame sa najlacnejší |
| TESLA PrimeSound HQ-995X | 181.90 € | **179.50 €** | 10.1 % | **8.6 %** | 179.90 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 147.90 € | **145.50 €** | 10.2 % | **8.4 %** | 145.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 10.50 € | **8.10 €** | 36.1 % | **5.0 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **10.50 €** | 47.3 % | **19.9 %** | 10.89 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio OpenRock E (čierne) | 25.00 € | **22.90 €** | 15.1 % | **5.4 %** | 22.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 15.00 € | **12.90 €** | 45.7 % | **25.3 %** | 12.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 11.50 € | **9.40 €** | 48.2 % | **21.1 %** | 9.49 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.90 €** | 10.1 % | **8.3 %** | 129.00 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.90 €** | 38.6 % | **16.3 %** | 11.00 € | stávame sa najlacnejší |
| SONY WHCH520Y.CE7 žlutá | 45.00 € | **43.00 €** | 10.1 % | **5.2 %** | 40.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilovací válec na břicho HMS KA10 s automatickým o... | 29.50 € | **27.50 €** | 14.7 % | **6.9 %** | 25.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal MQ723138 | 47.50 € | **45.50 €** | 10.4 % | **5.8 %** | 45.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **16.00 €** | 47.4 % | **31.0 %** | 16.02 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 31.50 € | **29.50 €** | 54.7 % | **44.9 %** | 29.52 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 11.90 € | **9.90 €** | 56.8 % | **30.5 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 18.90 € | **16.90 €** | 54.6 % | **38.2 %** | 17.00 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.90 €** | 10.1 % | **9.2 %** | 249.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 18.00 € | **16.00 €** | 37.9 % | **22.6 %** | 16.12 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 650lm, Li-Ion | 18.50 € | **16.50 €** | 55.4 % | **38.6 %** | 16.65 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **16.50 €** | 38.9 % | **23.9 %** | 16.70 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 99.50 € | **97.50 €** | 7.7 % | **5.6 %** | 97.71 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 14.50 € | **12.50 €** | 57.0 % | **35.3 %** | 12.77 € | stávame sa najlacnejší |
| Tefal BL87G831 | 125.50 € | **123.50 €** | 10.3 % | **8.6 %** | 123.79 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.00 € | **30.00 €** | 14.3 % | **7.1 %** | 30.36 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 149.00 € | **147.00 €** | 14.9 % | **13.4 %** | 147.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 34.00 € | **32.00 €** | 15.1 % | **8.4 %** | 32.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 612 Precise | 63.50 € | **61.50 €** | 14.6 % | **11.0 %** | 61.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.50 € | **17.50 €** | 48.9 % | **33.6 %** | 17.89 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **10.50 €** | 53.3 % | **28.8 %** | 10.90 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **147.50 €** | 10.1 % | **8.7 %** | 147.90 € | stávame sa najlacnejší |
| Samsung VG-SCFA43BWBXC | 68.50 € | **66.50 €** | 10.3 % | **7.1 %** | 66.90 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 28.50 € | **26.50 €** | 50.2 % | **39.6 %** | 26.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 138.90 € | **137.00 €** | 10.3 % | **8.8 %** | 137.30 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **71.00 €** | 42.1 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 7.80 € | **5.90 €** | 48.5 % | **12.3 %** | 5.99 € | stávame sa najlacnejší |
| Tefal KO2G08E0 | 36.90 € | **35.00 €** | 11.0 % | **5.3 %** | 34.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 27.90 € | **26.00 €** | 15.3 % | **7.5 %** | 26.29 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.20 €** | 54.5 % | **29.2 %** | 9.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, čierny, vypínač | 6.50 € | **4.70 €** | 47.2 % | **6.4 %** | 3.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.00 € | **6.20 €** | 48.8 % | **15.3 %** | 6.25 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 9.00 € | **7.20 €** | 53.7 % | **23.0 %** | 7.29 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 9.40 € | **7.70 €** | 54.1 % | **26.2 %** | 7.79 € | stávame sa najlacnejší |
| Laserový diaľkomer UNI-T LM50A | 21.50 € | **19.90 €** | 14.1 % | **5.6 %** | 19.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti UNI- T UT333 | 18.50 € | **16.90 €** | 15.6 % | **5.6 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Baterka Superfire A20 – 1700 lm, 300 m, 5 režimov | 16.50 € | **14.90 €** | 16.4 % | **5.2 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 15.50 € | **13.90 €** | 47.0 % | **31.9 %** | 14.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **15.90 €** | 44.3 % | **31.1 %** | 16.00 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.90 €** | 15.0 % | **14.1 %** | 207.93 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 240.50 € | **238.90 €** | 13.2 % | **12.5 %** | 239.00 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.90 €** | 10.4 % | **7.7 %** | 65.00 € | stávame sa najlacnejší |
| SONOFF M5-2C-80W WiFi Matter smart wall switch (2-ch... | 18.00 € | **16.50 €** | 14.8 % | **5.2 %** | 16.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Friteoiicz | 53.50 € | **52.00 €** | 8.0 % | **5.0 %** | 51.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.04 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 58.00 € | **56.50 €** | 29.5 % | **26.2 %** | 56.58 € | stávame sa najlacnejší |
| Budík digitální GARNI 138B | 20.00 € | **18.50 €** | 14.8 % | **6.1 %** | 18.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.50 € | **15.00 €** | 48.2 % | **34.8 %** | 15.11 € | stávame sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555BL/, 5 000 mAh, 20 W+Wi... | 25.50 € | **24.00 €** | 14.7 % | **8.0 %** | 24.22 € | stávame sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555GY/, 5 000 mAh, 20 W+Wi... | 25.50 € | **24.00 €** | 14.7 % | **8.0 %** | 24.22 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.00 € | **64.50 €** | 10.1 % | **7.6 %** | 64.83 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **13.50 €** | 54.0 % | **38.6 %** | 13.85 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **12.00 €** | 56.1 % | **38.8 %** | 12.36 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 225.00 € | **223.50 €** | 15.0 % | **14.2 %** | 223.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 338.50 € | **337.00 €** | 15.0 % | **14.5 %** | 337.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 90.00 € | **88.50 €** | 15.0 % | **13.1 %** | 88.89 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **24.50 €** | 14.7 % | **8.1 %** | 24.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.50 € | **23.00 €** | 15.9 % | **8.8 %** | 23.39 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 24.00 € | **22.50 €** | 14.9 % | **7.7 %** | 22.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 85.00 € | **83.50 €** | 14.9 % | **12.9 %** | 83.89 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6004 40l, 12V/24V/230V/baterie... | 260.50 € | **259.00 €** | 15.0 % | **14.3 %** | 259.39 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 41.00 € | **39.50 €** | 19.3 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **32.50 €** | 10.3 % | **5.4 %** | 32.90 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **14.50 €** | 38.4 % | **25.4 %** | 14.90 € | stávame sa najlacnejší |
| Russell Hobbs 26380-70 | 40.00 € | **38.50 €** | 10.2 % | **6.0 %** | 38.90 € | stávame sa najlacnejší |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 70.00 € | **68.50 €** | 15.0 % | **12.5 %** | 68.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 14.50 € | **13.00 €** | 47.4 % | **32.1 %** | 13.45 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 12.50 € | **11.00 €** | 53.5 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **24.00 €** | 37.8 % | **29.6 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **22.00 €** | 39.1 % | **30.2 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **14.00 €** | 55.0 % | **40.0 %** | 14.50 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 78.90 € | **77.50 €** | 15.0 % | **13.0 %** | 77.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 10.90 € | **9.50 €** | 49.7 % | **30.5 %** | 9.56 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 7.90 € | **6.50 €** | 55.5 % | **28.0 %** | 6.59 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 13.90 € | **12.50 €** | 44.9 % | **30.3 %** | 12.61 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.90 € | **14.50 €** | 56.1 % | **42.4 %** | 14.77 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **14.50 €** | 37.7 % | **25.5 %** | 14.90 € | stávame sa najlacnejší |
| RUSSELL HOBBS 24360-70 Inspire Kettle | 43.90 € | **42.50 €** | 8.7 % | **5.3 %** | 36.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight laserový merač vzdálenosti, 0,05 - 40m | 16.90 € | **15.50 €** | 17.4 % | **7.7 %** | 11.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED držák MagRound 2 FIXMRO2-BK | 31.90 € | **30.50 €** | 10.2 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 23.90 € | **22.50 €** | 38.4 % | **30.3 %** | 22.53 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **34.50 €** | 15.0 % | **10.5 %** | 34.61 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-3C-80 (3... | 18.90 € | **17.50 €** | 16.0 % | **7.4 %** | 17.63 € | stávame sa najlacnejší |
| TEESA TSA3507 ruční mixér 1200W sada | 36.90 € | **35.50 €** | 15.3 % | **10.9 %** | 35.89 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **61.50 €** | 21.8 % | **19.0 %** | 61.90 € | stávame sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **40.50 €** | 11.0 % | **7.3 %** | 40.90 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.50 €** | 12.2 % | **7.7 %** | 33.90 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.10 €** | 55.5 % | **33.0 %** | 7.17 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **8.20 €** | 48.4 % | **29.4 %** | 8.29 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.00 € | **4.80 €** | 49.2 % | **19.3 %** | 4.82 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.30 €** | 59.6 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.90 € | **3.70 €** | 54.4 % | **16.6 %** | 3.79 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 319.00 € | **317.90 €** | 12.5 % | **12.1 %** | 318.00 € | stávame sa najlacnejší |
| TV mount 26-60" Perlesmith PSMFK1-EU | 18.00 € | **16.90 €** | 15.0 % | **8.0 %** | 16.92 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.95 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 19.00 € | **17.90 €** | 37.2 % | **29.2 %** | 17.97 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **10.90 €** | 44.3 % | **31.1 %** | 10.98 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.80 €** | 54.1 % | **38.6 %** | 9.90 € | stávame sa najlacnejší |
| JBL Grip Red | 83.00 € | **81.90 €** | 10.1 % | **8.7 %** | 81.99 € | stávame sa najlacnejší |
| JBL Grip White | 83.00 € | **81.90 €** | 10.1 % | **8.7 %** | 81.99 € | stávame sa najlacnejší |
| Inteligentná zásuvka Sonoff S60ZBTPF ZigBee | 14.50 € | **13.50 €** | 14.7 % | **6.8 %** | 10.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič zubů DBX BUSHIDO MG-2 černý s tesáky | 13.90 € | **12.90 €** | 16.5 % | **8.1 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič zubů DBX BUSHIDO MG-2-FIGHT | 13.90 € | **12.90 €** | 16.5 % | **8.1 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilovací kolečko HMS WA07 | 12.00 € | **11.00 €** | 15.2 % | **5.6 %** | 9.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT12M-EU bezkontaktný tester napätia | 12.50 € | **11.50 €** | 17.2 % | **7.8 %** | 10.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak mikrofónu Maono BA20 (čierny) | 14.50 € | **13.50 €** | 15.7 % | **7.7 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0831 analogové přenosné solární | 12.90 € | **11.90 €** | 14.9 % | **6.0 %** | 11.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.90 €** | 38.4 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.05 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.90 €** | 15.4 % | **11.9 %** | 31.96 € | stávame sa najlacnejší |
| Guzzanti GZ 462 | 39.90 € | **38.90 €** | 10.4 % | **7.7 %** | 38.96 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.08 € | stávame sa najlacnejší |
| Interkom EJEAS X10 Plus pre motocyklistov pre až 100... | 136.50 € | **135.50 €** | 14.9 % | **14.1 %** | 135.59 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.90 € | **7.90 €** | 43.9 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.80 € | **4.80 €** | 48.8 % | **23.1 %** | 4.89 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **37.90 €** | 10.5 % | **7.6 %** | 38.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **40.50 €** | 10.4 % | **7.8 %** | 40.61 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **17.00 €** | 52.4 % | **44.0 %** | 17.12 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.00 € | **30.00 €** | 43.8 % | **39.1 %** | 30.12 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 11.50 € | **10.50 €** | 56.9 % | **43.2 %** | 10.63 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **181.50 €** | 14.9 % | **14.3 %** | 181.63 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **16.00 €** | 15.2 % | **8.4 %** | 16.13 € | stávame sa najlacnejší |
| Matter SONOFF M5-1C-80W WiFi smart wall switch (1-ch... | 19.00 € | **18.00 €** | 14.7 % | **8.6 %** | 18.13 € | stávame sa najlacnejší |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 26.50 € | **25.50 €** | 15.0 % | **10.7 %** | 25.63 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **45.00 €** | 14.4 % | **12.0 %** | 45.13 € | stávame sa najlacnejší |
| Solight FM transmitter s bluetooth pripojením do aut... | 16.00 € | **15.00 €** | 43.9 % | **34.9 %** | 15.15 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.50 €** | 15.7 % | **11.5 %** | 26.67 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.71 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **11.50 €** | 47.9 % | **36.1 %** | 11.73 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **14.00 €** | 54.0 % | **43.7 %** | 14.25 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 26.50 € | **25.50 €** | 37.7 % | **32.5 %** | 25.80 € | stávame sa najlacnejší |
| 3D Tlačiareň Creality CR-10 SE | 188.50 € | **187.50 €** | 14.4 % | **13.8 %** | 187.80 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **25.00 €** | 42.7 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 16.50 € | **15.50 €** | 14.9 % | **7.9 %** | 15.83 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **24.50 €** | 15.8 % | **11.3 %** | 24.83 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.00 €** | 14.8 % | **11.5 %** | 34.36 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161D | 67.50 € | **66.50 €** | 9.8 % | **8.2 %** | 66.89 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 33.50 € | **32.50 €** | 8.8 % | **5.5 %** | 32.89 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 45.50 € | **44.50 €** | 11.9 % | **9.4 %** | 44.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 59.00 € | **58.00 €** | 11.9 % | **10.0 %** | 58.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 473.00 € | **472.00 €** | 9.3 % | **9.1 %** | 472.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 542.50 € | **541.50 €** | 6.5 % | **6.3 %** | 541.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 97.50 € | **96.50 €** | 13.0 % | **11.8 %** | 96.89 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 45.50 € | **44.50 €** | 11.3 % | **8.9 %** | 44.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387S | 91.50 € | **90.50 €** | 13.4 % | **12.2 %** | 90.89 € | stávame sa najlacnejší |
| Viacúčelový čistič na podlahy MOVA P10 Ultra, P10 Pr... | 21.50 € | **20.50 €** | 12.6 % | **7.3 %** | 20.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 285.50 € | **284.50 €** | 9.7 % | **9.3 %** | 284.89 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 68.50 € | **67.50 €** | 7.8 % | **6.2 %** | 67.89 € | stávame sa najlacnejší |
| Sonoff MINIR4M Matter smart WiFi mini switch (HomeKi... | 11.50 € | **10.50 €** | 17.2 % | **7.0 %** | 10.89 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **17.50 €** | 39.0 % | **31.5 %** | 17.90 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 20.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.50 € | **14.50 €** | 41.6 % | **32.5 %** | 14.90 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 11.2 % | **7.0 %** | 25.90 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 39.50 € | **38.50 €** | 16.9 % | **13.9 %** | 38.90 € | stávame sa najlacnejší |
| SONY WFC510Y žlutá | 39.50 € | **38.50 €** | 16.9 % | **13.9 %** | 38.90 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **14.00 €** | 48.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek, vypínač | 4.60 € | **3.60 €** | 49.0 % | **16.6 %** | 3.68 € | stávame sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **88.00 €** | 15.1 % | **13.9 %** | 88.07 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **85.00 €** | 15.1 % | **13.9 %** | 85.22 € | stávame sa najlacnejší |
| Projector Blitzwolf, BW-V8, 4K, Android OS | 156.90 € | **156.00 €** | 15.0 % | **14.3 %** | 156.38 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 208.90 € | **208.00 €** | 14.2 % | **13.8 %** | 208.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 77.90 € | **77.00 €** | 11.5 % | **10.2 %** | 77.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 75.90 € | **75.00 €** | 13.0 % | **11.6 %** | 75.39 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **102.00 €** | 10.4 % | **9.4 %** | 102.50 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 64.90 € | **64.00 €** | 10.3 % | **8.8 %** | 64.50 € | stávame sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.10 €** | 53.4 % | **39.6 %** | 9.18 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.90 € | **11.00 €** | 14.4 % | **5.7 %** | 11.49 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 3.30 € | **2.40 €** | 55.1 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **47.00 €** | 38.5 % | **35.9 %** | 47.08 € | stávame sa najlacnejší |
| Zeblaze Btalk 3 Pro Smartwatch (Gray) | 23.90 € | **23.00 €** | 14.8 % | **10.5 %** | 23.13 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **27.00 €** | 42.8 % | **38.2 %** | 27.18 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 46.90 € | **46.00 €** | 11.5 % | **9.4 %** | 46.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 27.90 € | **27.00 €** | 14.1 % | **10.4 %** | 27.39 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363S | 28.90 € | **28.00 €** | 9.1 % | **5.7 %** | 28.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 60.90 € | **60.00 €** | 11.9 % | **10.3 %** | 60.39 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **16.00 €** | 38.6 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 336.90 € | **336.00 €** | 15.0 % | **14.7 %** | 336.39 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 285.90 € | **285.00 €** | 14.3 % | **13.9 %** | 285.39 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.60 €** | 55.1 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.20 € | **5.40 €** | 37.7 % | **20.0 %** | 5.49 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.50 €** | 55.0 % | **31.6 %** | 4.60 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.30 €** | 55.3 % | **30.9 %** | 4.40 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 5.50 € | **4.80 €** | 53.1 % | **33.6 %** | 4.82 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.90 € | **4.20 €** | 54.4 % | **32.4 %** | 4.26 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.20 € | **7.50 €** | 48.8 % | **36.1 %** | 7.54 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.90 €** | 10.1 % | **9.9 %** | 488.00 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude Pro Recycled | 20.50 € | **19.90 €** | 10.3 % | **7.1 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač vzdialenosti UNI-T LM120A | 42.50 € | **41.90 €** | 6.7 % | **5.2 %** | 41.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.90 €** | 14.7 % | **12.6 %** | 31.92 € | stávame sa najlacnejší |
| GORENJE R 506 E | 64.50 € | **63.90 €** | 10.2 % | **9.2 %** | 63.95 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 17.50 € | **16.90 €** | 52.0 % | **46.8 %** | 17.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.50 € | **21.90 €** | 31.8 % | **28.3 %** | 22.00 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.10 €** | 56.7 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.50 €** | 54.3 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.40 €** | 53.7 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.50 € | **13.90 €** | 14.1 % | **9.4 %** | 14.00 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **120.90 €** | 10.3 % | **9.8 %** | 121.00 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **120.90 €** | 10.0 % | **9.5 %** | 121.00 € | stávame sa najlacnejší |
| Chránič zubů DBX BUSHIDO bílo-modrý | 11.00 € | **10.50 €** | 15.4 % | **10.1 %** | 5.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilovací kolečko HMS WA04 | 11.00 € | **10.50 €** | 12.5 % | **7.4 %** | 8.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LAMAX SoundKid1 pink | 16.00 € | **15.50 €** | 11.1 % | **7.6 %** | 13.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT343D tester hrúbky farby | 88.00 € | **87.50 €** | 6.2 % | **5.6 %** | 87.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM100A | 32.00 € | **31.50 €** | 7.7 % | **6.0 %** | 31.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer UNI-T LM70A | 25.00 € | **24.50 €** | 7.4 % | **5.2 %** | 24.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 14.50 € | **14.00 €** | 38.7 % | **33.9 %** | 14.01 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 10.00 € | **9.50 €** | 43.9 % | **36.7 %** | 9.52 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.90 € | **6.40 €** | 47.2 % | **36.6 %** | 6.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.50 € | **23.00 €** | 29.0 % | **26.3 %** | 23.02 € | stávame sa najlacnejší |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.00 € | **101.50 €** | 14.9 % | **14.3 %** | 101.52 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.00 € | **19.50 €** | 38.4 % | **34.9 %** | 19.54 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.80 €** | 54.6 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight LED reflektor PRO so senzorom, 30W, 2760lm, ... | 20.50 € | **20.00 €** | 48.1 % | **44.5 %** | 20.06 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **14.00 €** | 44.1 % | **39.1 %** | 14.06 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.00 € | **5.50 €** | 46.9 % | **34.7 %** | 5.58 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.20 € | **4.70 €** | 48.9 % | **34.5 %** | 4.78 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.58 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| OTTOCAST OTTOAIBOX N95C Monitor do auta | 154.50 € | **154.00 €** | 14.9 % | **14.5 %** | 154.09 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.70 €** | 54.5 % | **36.1 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.49 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.40 €** | 47.1 % | **8.4 %** | 1.49 € | stávame sa najlacnejší |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.50 € | **25.00 €** | 15.0 % | **12.8 %** | 25.09 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **6.30 €** | 54.0 % | **42.7 %** | 6.40 € | stávame sa najlacnejší |
| Grafický tablet Huion H1161 | 74.00 € | **73.50 €** | 14.8 % | **14.0 %** | 73.60 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.20 €** | 49.3 % | **33.4 %** | 4.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **4.80 €** | 47.6 % | **33.6 %** | 4.90 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.50 € | **54.00 €** | 10.1 % | **9.1 %** | 54.13 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.16 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.50 € | **10.00 €** | 43.7 % | **36.9 %** | 10.17 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 54.50 € | **54.00 €** | 15.2 % | **14.1 %** | 54.18 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.50 € | **27.00 €** | 15.1 % | **13.0 %** | 27.19 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **39.00 €** | 10.9 % | **9.5 %** | 39.19 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.3 % | **9.8 %** | 22.20 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **13.50 €** | 38.3 % | **33.4 %** | 13.70 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.50 € | **557.00 €** | 6.7 % | **6.6 %** | 557.25 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 45.50 € | **45.00 €** | 8.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **19.00 €** | 15.0 % | **12.0 %** | 19.25 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.50 € | **12.00 €** | 22.4 % | **17.5 %** | 12.27 € | stávame sa najlacnejší |
| Napájecí zdroj spínaný URZ1169  12V / 5A - 2,1/5,5 | 12.50 € | **12.00 €** | 13.8 % | **9.3 %** | 12.29 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.50 € | **15.00 €** | 14.1 % | **10.5 %** | 15.29 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **17.00 €** | 16.6 % | **13.3 %** | 17.29 € | stávame sa najlacnejší |
| Cabletech UCH0023A1 | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.29 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.29 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 31.50 € | **31.00 €** | 7.6 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.50 € | **25.00 €** | 15.2 % | **13.0 %** | 25.29 € | stávame sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 402.50 € | **402.00 €** | 8.6 % | **8.5 %** | 402.29 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 7.4V 60C 2S1P Lipo PC materi... | 40.50 € | **40.00 €** | 7.5 % | **6.2 %** | 40.29 € | stávame sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 138.50 € | **138.00 €** | 9.4 % | **9.0 %** | 138.31 € | stávame sa najlacnejší |
| Sieťová nabíjačka Blitzwolf BW-i100 5v1 120W | 45.50 € | **45.00 €** | 15.6 % | **14.3 %** | 45.31 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.50 € | **24.00 €** | 26.5 % | **23.9 %** | 24.31 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 40.4 % | **34.3 %** | 11.32 € | stávame sa najlacnejší |
| Leifheit Mop na podlahu Easy Spray XL | 32.50 € | **32.00 €** | 9.2 % | **7.5 %** | 32.32 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **15.00 €** | 39.9 % | **35.4 %** | 15.33 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.33 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 21.50 € | **21.00 €** | 12.1 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 86.50 € | **86.00 €** | 12.3 % | **11.7 %** | 86.33 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 86.50 € | **86.00 €** | 12.3 % | **11.7 %** | 86.33 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 348.50 € | **348.00 €** | 13.1 % | **12.9 %** | 348.34 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.50 € | **18.00 €** | 31.6 % | **28.0 %** | 18.37 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **60.00 €** | 10.4 % | **9.4 %** | 60.38 € | stávame sa najlacnejší |
| TV mount 26-60" Perlesmith PSMFK12 | 18.00 € | **17.50 €** | 14.3 % | **11.2 %** | 17.88 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 10.50 € | **10.00 €** | 29.7 % | **23.6 %** | 10.38 € | stávame sa najlacnejší |
| Tefal RK812110 | 106.50 € | **106.00 €** | 7.1 % | **6.6 %** | 106.39 € | stávame sa najlacnejší |
| Rowenta ZR177003 | 20.50 € | **20.00 €** | 9.9 % | **7.2 %** | 20.39 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 56.50 € | **56.00 €** | 6.6 % | **5.6 %** | 56.39 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 454.00 € | **453.50 €** | 9.6 % | **9.5 %** | 453.89 € | stávame sa najlacnejší |
| Roborock Qrevo C Pro Black | 608.50 € | **608.00 €** | 5.6 % | **5.5 %** | 608.39 € | stávame sa najlacnejší |
| Salente R2 robotický vysavač | 96.50 € | **96.00 €** | 8.1 % | **7.5 %** | 96.39 € | stávame sa najlacnejší |
| Salente Rtx-R2 | 96.50 € | **96.00 €** | 8.1 % | **7.5 %** | 96.39 € | stávame sa najlacnejší |
| DOMO DO354VD | 131.50 € | **131.00 €** | 9.4 % | **9.0 %** | 131.39 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 268.00 € | **267.50 €** | 8.8 % | **8.6 %** | 267.89 € | stávame sa najlacnejší |
| DOMO DO42102SV | 99.50 € | **99.00 €** | 10.1 % | **9.6 %** | 99.39 € | stávame sa najlacnejší |
| DOMO DO9232I | 355.00 € | **354.50 €** | 6.3 % | **6.2 %** | 354.89 € | stávame sa najlacnejší |
| PRIMO PR406IM | 126.50 € | **126.00 €** | 8.5 % | **8.0 %** | 126.39 € | stávame sa najlacnejší |
| Domo DO331L | 104.50 € | **104.00 €** | 8.0 % | **7.4 %** | 104.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 277.00 € | **276.50 €** | 8.1 % | **7.9 %** | 276.89 € | stávame sa najlacnejší |
| Evolveo StrongVision PRO 4G, fotopast | 214.50 € | **214.00 €** | 5.4 % | **5.2 %** | 214.39 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 334.50 € | **334.00 €** | 13.5 % | **13.3 %** | 334.39 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 18.00 € | **17.50 €** | 34.4 % | **30.6 %** | 17.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 29.00 € | **28.50 €** | 23.9 % | **21.8 %** | 28.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 34.00 € | **33.50 €** | 26.1 % | **24.3 %** | 33.89 € | stávame sa najlacnejší |
| Kaon MZ-104, 4K satelitní přijímač | 115.00 € | **114.50 €** | 6.0 % | **5.6 %** | 114.89 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 255.50 € | **255.00 €** | 14.2 % | **14.0 %** | 255.39 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.50 € | **18.00 €** | 9.0 % | **6.0 %** | 18.39 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 31.00 € | **30.50 €** | 9.3 % | **7.6 %** | 30.90 € | stávame sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.00 € | **19.50 €** | 10.3 % | **7.6 %** | 19.90 € | stávame sa najlacnejší |
| Počítačová skrinka Darkflash B351 | 17.50 € | **17.00 €** | 8.9 % | **5.8 %** | 17.40 € | stávame sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 18.50 € | **18.00 €** | 15.4 % | **12.3 %** | 18.40 € | stávame sa najlacnejší |
| Gorenje F492PW | 170.00 € | **169.50 €** | 5.9 % | **5.6 %** | 169.90 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **15.00 €** | 45.9 % | **41.1 %** | 15.41 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.50 € | **28.00 €** | 38.6 % | **36.1 %** | 28.41 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **60.00 €** | 37.2 % | **36.0 %** | 60.41 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.50 € | **12.00 €** | 27.0 % | **22.0 %** | 12.42 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 17.50 € | **17.00 €** | 14.0 % | **10.7 %** | 17.42 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.50 € | **17.00 €** | 13.6 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.4 % | **9.9 %** | 113.42 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.50 € | **84.00 €** | 10.0 % | **9.4 %** | 84.42 € | stávame sa najlacnejší |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 21.50 € | **21.00 €** | 15.9 % | **13.2 %** | 21.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 24.50 € | **24.00 €** | 10.5 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 24.50 € | **24.00 €** | 10.5 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 25.50 € | **25.00 €** | 10.5 % | **8.3 %** | 25.42 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **21.00 €** | 15.1 % | **12.4 %** | 21.42 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **29.00 €** | 14.9 % | **13.0 %** | 29.44 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 118.50 € | **118.00 €** | 9.9 % | **9.5 %** | 118.44 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 118.50 € | **118.00 €** | 9.9 % | **9.5 %** | 118.44 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 38.4 % | **35.1 %** | 20.45 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 30.50 € | **30.00 €** | 38.4 % | **36.1 %** | 30.45 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 145.50 € | **145.00 €** | 43.1 % | **42.6 %** | 145.45 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 40.50 € | **40.00 €** | 11.4 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 40.50 € | **40.00 €** | 11.4 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.50 € | **27.00 €** | 34.4 % | **32.0 %** | 27.47 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 119.50 € | **119.00 €** | 13.9 % | **13.4 %** | 119.48 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.50 € | **14.00 €** | 33.7 % | **29.0 %** | 14.48 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.48 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.50 € | **37.00 €** | 15.4 % | **13.9 %** | 37.49 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **21.00 €** | 38.2 % | **35.0 %** | 21.49 € | stávame sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **12.00 €** | 13.8 % | **9.3 %** | 12.49 € | stávame sa najlacnejší |
| Panasonic SC-AKX520E-K | 302.50 € | **302.00 €** | 9.3 % | **9.1 %** | 302.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.70 €** | 47.8 % | **38.8 %** | 7.79 € | stávame sa najlacnejší |
| DOMO DO42325PC | 102.90 € | **102.50 €** | 10.0 % | **9.6 %** | 102.58 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 92.90 € | **92.50 €** | 11.8 % | **11.3 %** | 92.72 € | stávame sa najlacnejší |
| LONGER RAY5 mini 2,5 W laserový gravírovací stroj | 92.90 € | **92.50 €** | 14.8 % | **14.3 %** | 92.72 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (žltý) | 159.90 € | **159.50 €** | 14.0 % | **13.7 %** | 159.72 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 108.90 € | **108.50 €** | 14.0 % | **13.6 %** | 108.73 € | stávame sa najlacnejší |
| Salente G4 robotický vysavač | 116.90 € | **116.50 €** | 9.0 % | **8.6 %** | 116.74 € | stávame sa najlacnejší |
| Salente Rtx-G4 | 116.90 € | **116.50 €** | 9.0 % | **8.6 %** | 116.74 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.90 € | **88.50 €** | 6.2 % | **5.7 %** | 88.81 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 102.90 € | **102.50 €** | 11.8 % | **11.4 %** | 102.82 € | stávame sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 103.90 € | **103.50 €** | 14.2 % | **13.8 %** | 103.83 € | stávame sa najlacnejší |
| Fixed Gravity univ.držák FIXH-GR2-GR | 15.90 € | **15.50 €** | 10.0 % | **7.2 %** | 13.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák ICON Air Vent, FIXIC-VENT-BK | 12.90 € | **12.50 €** | 11.8 % | **8.3 %** | 11.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.50 € | **9.10 €** | 44.1 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.50 €** | 55.6 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.80 €** | 48.5 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.90 €** | 55.5 % | **48.0 %** | 7.98 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.70 € | **5.30 €** | 54.0 % | **43.2 %** | 5.39 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.40 €** | 38.4 % | **32.1 %** | 8.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 47.0 % | **42.1 %** | 11.84 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **10.50 €** | 45.5 % | **40.2 %** | 10.86 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.88 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 12.90 € | **12.50 €** | 19.7 % | **16.0 %** | 12.89 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 14.90 € | **14.50 €** | 13.6 % | **10.6 %** | 14.89 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.80 €** | 56.9 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 2.10 € | **1.70 €** | 51.1 % | **22.3 %** | 1.80 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 57.1 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.40 €** | 48.5 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.30 € | **3.90 €** | 46.9 % | **33.2 %** | 4.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **4.70 €** | 48.1 % | **36.5 %** | 4.71 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.10 € | **4.70 €** | 47.0 % | **35.5 %** | 4.74 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 5.10 € | **4.70 €** | 54.1 % | **42.0 %** | 4.80 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.50 €** | 11.6 % | **10.0 %** | 27.54 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| Diagnostic Scanner OBD2 Ancel AD310/AC103 | 22.90 € | **22.50 €** | 8.5 % | **6.6 %** | 22.57 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.90 € | **22.50 €** | 15.1 % | **13.1 %** | 22.65 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.4 % | **9.9 %** | 29.67 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.90 € | **16.50 €** | 16.0 % | **13.3 %** | 16.69 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.90 € | **16.50 €** | 35.4 % | **32.2 %** | 16.70 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.9 % | **15.4 %** | 31.70 € | stávame sa najlacnejší |
| Zvuková karta Maono G1 Neo (biela) | 44.90 € | **44.50 €** | 14.8 % | **13.8 %** | 44.70 € | stávame sa najlacnejší |
| Candy CFT610/4N/1 | 52.90 € | **52.50 €** | 14.3 % | **13.5 %** | 52.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 39.90 € | **39.50 €** | 13.2 % | **12.1 %** | 39.71 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 20.90 € | **20.50 €** | 14.0 % | **11.9 %** | 20.71 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 bez ventilátorov (č... | 19.90 € | **19.50 €** | 16.1 % | **13.7 %** | 19.71 € | stávame sa najlacnejší |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 20.90 € | **20.50 €** | 12.7 % | **10.5 %** | 20.71 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 17.90 € | **17.50 €** | 28.7 % | **25.8 %** | 17.72 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **25.50 €** | 39.1 % | **36.9 %** | 25.73 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.50 €** | 34.9 % | **33.6 %** | 41.73 € | stávame sa najlacnejší |
| Cyklocomputer Cycplus M3 - kompatibilný s: Strava, T... | 33.90 € | **33.50 €** | 8.2 % | **6.9 %** | 33.73 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.50 €** | 20.3 % | **18.7 %** | 29.74 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 16.90 € | **16.50 €** | 11.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.50 €** | 15.4 % | **12.8 %** | 17.75 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Q15 | 16.90 € | **16.50 €** | 15.0 % | **12.3 %** | 16.75 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 18.90 € | **18.50 €** | 29.3 % | **26.6 %** | 18.75 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 33.90 € | **33.50 €** | 12.6 % | **11.3 %** | 33.75 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **31.50 €** | 38.7 % | **37.0 %** | 31.77 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.50 €** | 39.1 % | **35.8 %** | 16.79 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **37.50 €** | 11.1 % | **9.9 %** | 37.79 € | stávame sa najlacnejší |
| SONOFF MINI-ZB2GSL-EDvojkanálový nástenný spínač Zig... | 22.90 € | **22.50 €** | 13.0 % | **11.1 %** | 22.79 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.90 € | **36.50 €** | 13.2 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 29.90 € | **29.50 €** | 34.4 % | **32.6 %** | 29.80 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **58.50 €** | 35.6 % | **34.7 %** | 58.80 € | stávame sa najlacnejší |
| Maxxo rádio DAB+/FM PB01 | 29.90 € | **29.50 €** | 11.1 % | **9.6 %** | 29.80 € | stávame sa najlacnejší |
| Sati Hansi Doux et Suave 1000g zrno | 22.90 € | **22.50 €** | 10.8 % | **8.9 %** | 22.80 € | stávame sa najlacnejší |
| Casio Fx 85 Es Plus 2E | 20.90 € | **20.50 €** | 15.0 % | **12.8 %** | 20.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.50 €** | 36.4 % | **35.5 %** | 55.81 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 13.2 % | **10.6 %** | 17.82 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 35.90 € | **35.50 €** | 13.3 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 35.90 € | **35.50 €** | 13.3 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 16.90 € | **16.50 €** | 32.9 % | **29.7 %** | 16.83 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 51.90 € | **51.50 €** | 14.4 % | **13.5 %** | 51.84 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.50 €** | 41.6 % | **40.3 %** | 45.85 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 32.90 € | **32.50 €** | 9.9 % | **8.6 %** | 32.85 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.90 € | **54.50 €** | 38.3 % | **37.3 %** | 54.86 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **21.50 €** | 24.6 % | **22.3 %** | 21.87 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 47.90 € | **47.50 €** | 9.8 % | **8.9 %** | 47.88 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 24.90 € | **24.50 €** | 10.2 % | **8.4 %** | 24.88 € | stávame sa najlacnejší |
| Leifheit 81520 Pegasus 200 Solid | 37.90 € | **37.50 €** | 13.9 % | **12.7 %** | 37.89 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **55.50 €** | 11.9 % | **11.1 %** | 55.89 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 799.90 € | **799.50 €** | 14.3 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 870.90 € | **870.50 €** | 14.8 % | **14.8 %** | 870.81 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 468.90 € | **468.50 €** | 12.8 % | **12.7 %** | 468.88 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 9.00 € | **8.70 €** | 48.1 % | **43.2 %** | 8.79 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 9.00 € | **8.70 €** | 23.4 % | **19.3 %** | 8.79 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.90 € | **5.60 €** | 18.4 % | **12.4 %** | 5.69 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.90 € | **5.60 €** | 18.4 % | **12.4 %** | 5.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 9.90 € | **9.60 €** | 11.3 % | **8.0 %** | 9.69 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.70 €** | 38.3 % | **34.1 %** | 9.80 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.70 €** | 53.7 % | **48.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.70 € | **3.40 €** | 47.5 % | **35.5 %** | 3.44 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.20 € | **2.90 €** | 48.7 % | **34.7 %** | 2.96 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.60 € | **3.30 €** | 46.3 % | **34.1 %** | 3.37 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 3.20 € | **2.90 €** | 46.2 % | **32.5 %** | 2.99 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 3000K, 510lm | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.72 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.80 €** | 52.4 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.70 €** | 54.9 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight HDMI spojka, HDMI zdierka - HDMI zdierka, pr... | 1.10 € | **0.80 €** | 51.6 % | **10.2 %** | 0.85 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595l... | 1.20 € | **0.90 €** | 47.8 % | **10.9 %** | 0.99 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **4.70 €** | 54.0 % | **44.7 %** | 4.71 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.80 € | **3.50 €** | 47.8 % | **36.1 %** | 3.51 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.10 €** | 45.9 % | **14.7 %** | 1.12 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.80 € | **2.50 €** | 50.8 % | **34.6 %** | 2.55 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.80 € | **2.50 €** | 50.8 % | **34.6 %** | 2.55 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **3.10 €** | 47.0 % | **34.1 %** | 3.17 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.10 € | **6.80 €** | 22.0 % | **16.9 %** | 6.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 6.80 € | **6.50 €** | 19.7 % | **14.4 %** | 6.59 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.00 € | **7.70 €** | 38.1 % | **32.9 %** | 7.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.70 € | **9.40 €** | 13.3 % | **9.8 %** | 9.49 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.20 € | **8.90 €** | 13.0 % | **9.3 %** | 8.99 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.80 € | **8.60 €** | 9.4 % | **6.9 %** | 8.69 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.70 € | **2.50 €** | 47.3 % | **36.4 %** | 2.51 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.30 € | **6.10 €** | 48.9 % | **44.2 %** | 6.12 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.20 € | **7.00 €** | 47.8 % | **43.7 %** | 7.05 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.90 €** | 47.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda červená, závesná, 60cm,... | 4.50 € | **4.30 €** | 49.3 % | **42.7 %** | 4.37 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **1.00 €** | 54.9 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.50 € | **1.30 €** | 50.6 % | **30.5 %** | 1.35 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.30 € | **1.10 €** | 51.0 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.50 €** | 45.5 % | **28.4 %** | 1.60 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W COB, 3x AAA | 3.80 € | **3.60 €** | 13.2 % | **7.2 %** | 3.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.40 € | **2.20 €** | 47.8 % | **35.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.30 € | **3.10 €** | 52.4 % | **43.2 %** | 3.14 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.90 €** | 46.2 % | **39.1 %** | 4.00 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Hi Combo | 325.00 € | **324.90 €** | 5.6 % | **5.6 %** | 324.99 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  VIPOW bezúdržbový akumu... | 22.00 € | **21.90 €** | 6.5 % | **6.0 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FSR2802 | 18.00 € | **17.90 €** | 7.1 % | **6.5 %** | 17.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 26.4 % | **25.8 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 42.00 € | **41.90 €** | 6.9 % | **6.6 %** | 41.96 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.00 € | **21.90 €** | 29.4 % | **28.8 %** | 21.96 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **39.90 €** | 38.2 % | **37.9 %** | 39.98 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.00 € | **24.90 €** | 22.9 % | **22.4 %** | 24.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.90 €** | 39.2 % | **38.6 %** | 22.99 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 20.00 € | **19.90 €** | 24.7 % | **24.1 %** | 19.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 54.00 € | **53.90 €** | 10.7 % | **10.5 %** | 53.99 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.80 € | **9.70 €** | 24.3 % | **23.0 %** | 9.79 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 6.90 € | **6.80 €** | 34.5 % | **32.6 %** | 6.85 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.70 € | **6.60 €** | 13.2 % | **11.6 %** | 6.65 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.30 €** | 26.3 % | **24.3 %** | 6.36 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.30 €** | 7.1 % | **5.4 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.10 €** | 20.4 % | **18.1 %** | 5.19 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.30 €** | 45.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.40 € | **4.30 €** | 20.9 % | **18.1 %** | 4.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.70 € | **4.60 €** | 36.5 % | **33.6 %** | 4.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.40 € | **4.30 €** | 21.3 % | **18.5 %** | 4.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.40 € | **4.30 €** | 11.1 % | **8.6 %** | 4.39 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.80 €** | 45.4 % | **42.9 %** | 5.89 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 2.10 € | **2.00 €** | 51.1 % | **43.9 %** | 2.02 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.60 €** | 46.7 % | **42.8 %** | 3.65 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.05 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.20 €** | 51.0 % | **39.4 %** | 1.25 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.46 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.10 €** | 32.1 % | **27.9 %** | 3.16 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.40 €** | 34.2 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.20 €** | 22.9 % | **13.4 %** | 1.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.50 €** | 21.4 % | **18.1 %** | 3.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.50 € | **3.40 €** | 20.1 % | **16.6 %** | 3.49 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.90 €** | 23.2 % | **17.0 %** | 1.99 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 0.50 € | **0.40 €** | 69.4 % | **35.5 %** | 0.41 € | stávame sa najlacnejší |
| Solight skúšačka 304, priemer 3,5mm x 190mm, AC napä... | 0.90 € | **0.80 €** | 52.4 % | **35.5 %** | 0.82 € | stávame sa najlacnejší |
| Solight zástrčka plochá priama, IP20, biela | 0.90 € | **0.80 €** | 52.4 % | **35.5 %** | 0.82 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 0.90 € | **0.80 €** | 49.3 % | **32.7 %** | 0.87 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 0.90 € | **0.80 €** | 49.3 % | **32.7 %** | 0.87 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **1.80 €** | 36.7 % | **29.5 %** | 1.89 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 23.6 % | **17.1 %** | 1.89 € | stávame sa najlacnejší |
| Solight nabíjačka s LCD displejom, AC 230V, 450mA, 4... | 14.00 € | **13.90 €** | 8.6 % | **7.8 %** | 13.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED lampa Puluz pre fotoaparát 860 lúmenov | 12.00 € | **11.90 €** | 7.3 % | **6.4 %** | 11.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.90 €** | 56.3 % | **53.2 %** | 4.91 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight LED reflektor PRO so senzorom, 10W, 920lm, 5... | 13.00 € | **12.90 €** | 46.0 % | **44.9 %** | 12.92 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 5.80 € | **5.70 €** | 54.6 % | **51.9 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.95 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.10 € | **5.00 €** | 35.9 % | **33.3 %** | 5.05 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **6.00 €** | 32.6 % | **30.4 %** | 6.05 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 16.00 € | **15.90 €** | 13.6 % | **12.9 %** | 15.96 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.90 €** | 38.5 % | **37.5 %** | 12.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 13.4 % | **11.8 %** | 7.06 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 9.70 € | **9.60 €** | 78.4 % | **76.6 %** | 9.67 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.10 € | **5.00 €** | 37.3 % | **34.6 %** | 5.08 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.90 €** | 38.4 % | **36.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.80 €** | 28.2 % | **26.9 %** | 9.89 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.40 € | **9.30 €** | 26.9 % | **25.6 %** | 9.39 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.20 €** | 38.7 % | **35.5 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.40 €** | 38.9 % | **37.0 %** | 7.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.50 €** | 36.6 % | **35.0 %** | 8.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.20 €** | 28.2 % | **25.8 %** | 5.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.60 € | **9.50 €** | 34.3 % | **32.9 %** | 9.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 25.4 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD310FBK / 2.7 l / di... | 107.00 € | **106.90 €** | 5.2 % | **5.1 %** | 98.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.90 €** | 14.9 % | **14.9 %** | 219.94 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **109.90 €** | 20.0 % | **19.9 %** | 109.96 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 124.00 € | **123.90 €** | 6.6 % | **6.6 %** | 123.99 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 75.00 € | **74.90 €** | 8.0 % | **7.8 %** | 74.99 € | stávame sa najlacnejší |
| 3D tlačový list ELEGOO OrangeStorm Giga | 2679.00 € | **2678.90 €** | 13.8 % | **13.8 %** | 2678.99 € | stávame sa najlacnejší |

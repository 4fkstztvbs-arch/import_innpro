# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-25

Vstup: `premiumstoresk_20260825_2212.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5297**
- Návrh **zvýšiť** cenu: **98** produktov
- Návrh **znížiť** cenu: **910** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4289** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **98**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (98)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Mobilný ovládač GameSir X5s (biely) | 46.50 € | **54.50 €** | 15.4 % | **35.2 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.4 % | **15.6 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anycubic Photon Mono 4 3D printer | 163.50 € | **166.50 €** | 9.3 % | **11.3 %** | 163.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.00 € | **20.50 €** | 26.3 % | **43.8 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 7.90 € | **10.00 €** | 8.1 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal B817S255 | 29.90 € | **31.50 €** | 5.5 % | **11.1 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.90 € | **65.50 €** | 17.1 % | **20.1 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **15.50 €** | 20.1 % | **33.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.00 € | **24.50 €** | 27.7 % | **36.1 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 15.00 € | **16.50 €** | 34.8 % | **48.2 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.50 € | **26.00 €** | 26.5 % | **34.2 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 15.00 € | **16.50 €** | 23.9 % | **36.3 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.50 € | **13.90 €** | 22.4 % | **36.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.90 € | **15.00 €** | 12.4 % | **21.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.50 € | **9.60 €** | 5.7 % | **19.3 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.50 € | **33.50 €** | 12.4 % | **15.9 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 22.50 € | **23.50 €** | 30.3 % | **36.1 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 38.90 € | **39.90 €** | 10.7 % | **13.5 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.00 € | **84.90 €** | 8.6 % | **9.7 %** | 84.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Mesh Steel | 67.00 € | **67.90 €** | 9.0 % | **10.5 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Solid Steel | 67.00 € | **67.90 €** | 9.0 % | **10.5 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.00 € | **22.90 €** | 28.5 % | **33.7 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GS  G7-SE Wired Controller XBOx &PC Or | 39.00 € | **39.90 €** | 10.2 % | **12.8 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.50 €** | 34.5 % | **39.0 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 16.90 € | **17.50 €** | 25.8 % | **30.3 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 9.90 € | **10.50 €** | 21.6 % | **29.0 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S10 Rear Cam | 24.00 € | **24.50 €** | 8.6 % | **10.8 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.50 € | **15.00 €** | 33.7 % | **38.3 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 51.00 € | **51.50 €** | 28.4 % | **29.7 %** | 51.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **47.50 €** | 35.9 % | **37.3 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 2.80 € | **3.30 €** | 18.6 % | **39.7 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22760-56/RH | 30.00 € | **30.50 €** | 10.2 % | **12.0 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Icequeen-Wh | 19.00 € | **19.50 €** | 5.2 % | **8.0 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip Red | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 19.6 % | **21.8 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **44.50 €** | 11.0 % | **12.3 %** | 44.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.00 € | **14.50 €** | 52.4 % | **57.8 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 71.00 € | **71.50 €** | 9.6 % | **10.4 %** | 71.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.00 € | **16.50 €** | 31.9 % | **36.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.00 € | **14.50 €** | 39.1 % | **44.1 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 CIR60430CB | 373.00 € | **373.50 €** | 7.0 % | **7.1 %** | 373.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 104.50 € | **104.90 €** | 7.2 % | **7.6 %** | 104.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.00 € | **5.40 €** | 27.0 % | **37.2 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.50 € | **10.90 €** | 6.7 % | **10.8 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **16.90 €** | 32.2 % | **35.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.50 € | **39.90 €** | 15.0 % | **16.1 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.90 €** | 10.1 % | **12.5 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **20.90 €** | 27.8 % | **30.3 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 17.50 € | **17.90 €** | 14.6 % | **17.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 321990020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.50 € | **30.90 €** | 31.8 % | **33.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 8-Port Switch (DES-108) | 20.50 € | **20.90 €** | 12.5 % | **14.7 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (ružový) | 20.50 € | **20.90 €** | 6.9 % | **9.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (žltý) | 20.50 € | **20.90 €** | 6.9 % | **9.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (zelený) | 20.50 € | **20.90 €** | 6.9 % | **9.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir-T4n Lite wireless controller (white) | 20.50 € | **20.90 €** | 7.3 % | **9.4 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 270.50 € | **270.90 €** | 7.9 % | **8.0 %** | 270.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 365.50 € | **365.90 €** | 9.6 % | **9.7 %** | 365.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 502.90 € | **503.00 €** | 6.4 % | **6.4 %** | 502.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **22.00 €** | 24.6 % | **25.2 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.90 € | **17.00 €** | 32.9 % | **33.7 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.00 €** | 5.5 % | **6.0 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.80 € | **5.90 €** | 9.2 % | **11.0 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.80 € | **6.90 €** | 32.6 % | **34.5 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.80 €** | 22.3 % | **29.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.40 € | **3.50 €** | 10.1 % | **13.4 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.00 € | **5.10 €** | 15.8 % | **18.1 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 8.7 % | **11.3 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 30.7 % | **33.6 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 9.1 % | **11.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.30 € | **9.40 €** | 30.1 % | **31.5 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.20 € | **4.30 €** | 6.0 % | **8.6 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **8.70 €** | 5.6 % | **6.8 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **10.00 €** | 25.6 % | **26.8 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 104.90 € | **105.00 €** | 9.9 % | **10.0 %** | 104.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (910)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 6803.00 € | **6503.00 €** | 15.0 % | **9.9 %** | 6503.28 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3588.00 € | **3349.50 €** | 15.0 % | **7.4 %** | 3349.70 € | stávame sa najlacnejší |
| 2-in-1 laser engraving machine xTool S1 40W Basic (B... | 1777.50 € | **1622.90 €** | 15.0 % | **5.0 %** | 1622.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2640.90 € | **2520.50 €** | 10.0 % | **5.0 %** | 1795.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 639.00 € | **524.50 €** | 28.0 % | **5.1 %** | 495.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1503.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1854.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S99H | 3600.50 € | **3498.90 €** | 10.0 % | **6.9 %** | 3499.00 € | stávame sa najlacnejší |
| Samsung OLED QE77S85H | 2185.90 € | **2086.50 €** | 10.0 % | **5.0 %** | 1360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.50 €** | 15.0 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **986.00 €** | 15.0 % | **6.3 %** | 986.11 € | stávame sa najlacnejší |
| Gorenje F492PW | 239.00 € | **170.00 €** | 48.9 % | **5.9 %** | 170.18 € | stávame sa najlacnejší |
| Samsung OLED QE65S85H | 1366.00 € | **1303.90 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1291.00 €** | 15.0 % | **10.0 %** | 1291.44 € | stávame sa najlacnejší |
| Electrolux ESA47310SW | 529.00 € | **474.50 €** | 17.1 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 901.00 € | **848.90 €** | 15.0 % | **8.3 %** | 849.00 € | stávame sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 512.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 682.50 € | **632.00 €** | 15.0 % | **6.5 %** | 632.27 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 339.00 € | **290.90 €** | 25.9 % | **8.0 %** | 291.00 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 539.90 € | **493.00 €** | 15.0 % | **5.0 %** | 486.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 575.90 € | **529.90 €** | 15.0 % | **5.8 %** | 529.95 € | stávame sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1835.50 €** | 15.0 % | **12.3 %** | 1835.57 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 528.00 € | **486.00 €** | 15.0 % | **5.8 %** | 486.39 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 597.50 € | **556.00 €** | 15.0 % | **7.1 %** | 556.35 € | stávame sa najlacnejší |
| GORENJE GS620C10S | 429.00 € | **388.50 €** | 15.9 % | **5.0 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 600.90 € | **560.90 €** | 15.0 % | **7.3 %** | 561.00 € | stávame sa najlacnejší |
| ETA 230290000 | 209.99 € | **170.00 €** | 34.1 % | **8.6 %** | 170.30 € | stávame sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 532.90 € | **498.90 €** | 15.0 % | **7.7 %** | 499.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 400.90 € | **370.50 €** | 15.0 % | **6.3 %** | 370.76 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 941.00 € | **910.90 €** | 10.0 % | **6.5 %** | 911.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 409.50 € | **379.90 €** | 15.1 % | **6.7 %** | 379.95 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 418.50 € | **388.90 €** | 15.0 % | **6.8 %** | 389.00 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 369.90 € | **341.00 €** | 15.1 % | **6.1 %** | 341.39 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-WH bílá barva | 369.90 € | **341.00 €** | 15.1 % | **6.1 %** | 341.39 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.90 €** | 15.0 % | **6.3 %** | 349.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 685.90 € | **659.90 €** | 15.0 % | **10.7 %** | 660.00 € | stávame sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.90 €** | 15.0 % | **10.2 %** | 590.00 € | stávame sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **378.90 €** | 15.0 % | **8.2 %** | 379.00 € | stávame sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 504.50 € | **481.50 €** | 10.0 % | **5.0 %** | 475.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 746.50 € | **723.50 €** | 15.0 % | **11.5 %** | 723.62 € | stávame sa najlacnejší |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 524.00 € | **501.00 €** | 14.9 % | **9.9 %** | 501.36 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **349.00 €** | 15.1 % | **8.0 %** | 349.30 € | stávame sa najlacnejší |
| Inteligentný cyklotrenažér Cycplus T2H | 407.50 € | **384.90 €** | 15.0 % | **8.6 %** | 385.00 € | stávame sa najlacnejší |
| ETA 209490000 | 114.99 € | **92.90 €** | 30.4 % | **5.4 %** | 86.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE FN617EES5 | 486.50 € | **464.50 €** | 10.1 % | **5.1 %** | 425.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **451.50 €** | 10.0 % | **5.0 %** | 367.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotrenažér Cycplus T3 | 849.90 € | **828.90 €** | 15.0 % | **12.2 %** | 829.00 € | stávame sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 554.90 € | **534.50 €** | 10.0 % | **6.0 %** | 534.70 € | stávame sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 432.00 € | **412.50 €** | 10.0 % | **5.0 %** | 345.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 429.90 € | **410.50 €** | 10.0 % | **5.0 %** | 295.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje W2PNEI84A1SW | 380.00 € | **361.00 €** | 17.1 % | **11.2 %** | 361.23 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 65.00 € | **46.00 €** | 58.6 % | **12.3 %** | 46.50 € | stávame sa najlacnejší |
| Súprava na starostlivosť o domáce zvieratá a vysávač... | 215.90 € | **197.00 €** | 15.1 % | **5.0 %** | 170.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 248.00 € | **229.50 €** | 14.9 % | **6.4 %** | 229.79 € | stávame sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 412.50 € | **394.90 €** | 15.0 % | **10.1 %** | 395.00 € | stávame sa najlacnejší |
| Samsung Mini LED UE43M70H | 379.50 € | **362.50 €** | 10.0 % | **5.1 %** | 359.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 195.90 € | **178.90 €** | 15.0 % | **5.0 %** | 179.00 € | stávame sa najlacnejší |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 359.50 € | **343.00 €** | 14.9 % | **9.7 %** | 343.44 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 200.00 € | **184.90 €** | 14.9 % | **6.2 %** | 185.00 € | stávame sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **246.00 €** | 15.0 % | **8.4 %** | 246.09 € | stávame sa najlacnejší |
| Smartphone HOTWAV A17 Pro Max (oranžový) | 172.00 € | **157.50 €** | 14.9 % | **5.2 %** | 126.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 304.90 € | **290.90 €** | 10.1 % | **5.0 %** | 275.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 463.50 € | **449.50 €** | 10.0 % | **6.7 %** | 449.90 € | stávame sa najlacnejší |
| Redmi Note 15 Pro 8/256GB Black | 295.50 € | **281.90 €** | 10.2 % | **5.1 %** | 242.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Crystal UHD UE65U8072H | 512.50 € | **498.90 €** | 10.1 % | **7.1 %** | 499.00 € | stávame sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 485.00 € | **471.50 €** | 10.0 % | **6.9 %** | 471.80 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **158.50 €** | 14.8 % | **5.8 %** | 158.90 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 241.00 € | **228.00 €** | 14.9 % | **8.7 %** | 228.20 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 711.50 € | **698.90 €** | 10.1 % | **8.1 %** | 699.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 273.50 € | **261.50 €** | 15.0 % | **10.0 %** | 261.60 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.50 €** | 50.2 % | **38.5 %** | 141.81 € | stávame sa najlacnejší |
| ETA 002892020 | 79.99 € | **68.00 €** | 32.0 % | **12.2 %** | 68.13 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F03 STD | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 119.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 128.00 € | **116.90 €** | 15.1 % | **5.2 %** | 106.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 240.50 € | **229.50 €** | 10.1 % | **5.1 %** | 191.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Glacier Blue | 240.50 € | **229.50 €** | 10.1 % | **5.1 %** | 192.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 158.50 € | **147.50 €** | 15.0 % | **7.1 %** | 147.69 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.50 € | **135.50 €** | 14.9 % | **6.3 %** | 135.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 170.50 € | **159.90 €** | 15.1 % | **8.0 %** | 160.00 € | stávame sa najlacnejší |
| Taška DJI Power 1000 | 119.90 € | **109.50 €** | 15.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 255.90 € | **245.50 €** | 15.0 % | **10.3 %** | 245.89 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 205.90 € | **195.50 €** | 15.1 % | **9.3 %** | 195.90 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.50 €** | 15.0 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Maxxo VM Master | 247.50 € | **237.50 €** | 10.2 % | **5.7 %** | 237.90 € | stávame sa najlacnejší |
| Termovízna kamera THERMAL MASTER T2Max | 279.50 € | **269.50 €** | 9.7 % | **5.8 %** | 269.90 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 44.00 € | **34.00 €** | 74.3 % | **34.7 %** | 34.50 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP Z22P PRO s 22-palcovým doty... | 318.50 € | **308.90 €** | 15.0 % | **11.5 %** | 309.00 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.90 €** | 44.6 % | **8.6 %** | 29.00 € | stávame sa najlacnejší |
| Orbitrek REBEL ACTIVE RBA-1011 | 144.50 € | **134.90 €** | 15.2 % | **7.5 %** | 134.93 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT705 | 333.90 € | **324.90 €** | 15.0 % | **11.9 %** | 325.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.50 €** | 14.9 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 67.50 € | **58.50 €** | 43.9 % | **24.7 %** | 58.76 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 195.90 € | **187.00 €** | 10.1 % | **5.1 %** | 135.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 144.50 € | **136.00 €** | 15.1 % | **8.3 %** | 136.39 € | stávame sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 488.00 € | **479.90 €** | 6.8 % | **5.1 %** | 414.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 326.00 € | **317.90 €** | 14.9 % | **12.1 %** | 318.00 € | stávame sa najlacnejší |
| HDD 3.5" 6TB 256MB Seagate SKYHAWK pro kamerové syst... | 349.00 € | **340.90 €** | 14.9 % | **12.3 %** | 341.00 € | stávame sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **122.90 €** | 14.9 % | **7.8 %** | 123.00 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 152.00 € | **144.00 €** | 15.0 % | **8.9 %** | 144.28 € | stávame sa najlacnejší |
| ETA 142390000 | 39.99 € | **32.00 €** | 45.1 % | **16.1 %** | 32.20 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV9201E0 | 196.90 € | **189.00 €** | 10.0 % | **5.6 %** | 189.10 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 46.90 € | **39.00 €** | 42.3 % | **18.3 %** | 39.19 € | stávame sa najlacnejší |
| Guzzanti GZ 48S | 165.50 € | **158.00 €** | 10.0 % | **5.1 %** | 143.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Chamber Line 90 | 568.50 € | **561.00 €** | 9.2 % | **7.8 %** | 561.08 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 117.00 € | **109.50 €** | 15.0 % | **7.7 %** | 109.89 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.90 € | **151.50 €** | 15.1 % | **9.7 %** | 151.90 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.50 €** | 15.0 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 205.00 € | **198.00 €** | 15.0 % | **11.1 %** | 198.09 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 379.90 € | **372.90 €** | 10.5 % | **8.4 %** | 373.00 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 191.50 € | **184.50 €** | 15.0 % | **10.8 %** | 184.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 52.00 € | **45.00 €** | 43.7 % | **24.3 %** | 45.34 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B4 | 424.90 € | **418.00 €** | 15.0 % | **13.1 %** | 418.20 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 578.50 € | **571.90 €** | 6.2 % | **5.0 %** | 561.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová vesta HMS KOR20 20 kg | 87.50 € | **80.90 €** | 15.3 % | **6.6 %** | 80.94 € | stávame sa najlacnejší |
| Rotoped DeerRun S500 Pro (čierny) | 246.50 € | **239.90 €** | 15.1 % | **12.0 %** | 240.00 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 878.00 € | **871.50 €** | 5.8 % | **5.0 %** | 814.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EWS6526WC | 317.50 € | **311.00 €** | 10.1 % | **7.9 %** | 311.30 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.32 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.32 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 85.50 € | **79.00 €** | 15.1 % | **6.4 %** | 79.39 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dvojitý inteligentný dávkovač krmiva 5 l Oneisall PF09 | 69.00 € | **63.00 €** | 15.1 % | **5.1 %** | 62.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 93.00 € | **87.00 €** | 14.9 % | **7.5 %** | 87.09 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.50 € | **64.50 €** | 15.2 % | **5.4 %** | 64.69 € | stávame sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200F s výkonom 200 W | 130.90 € | **125.00 €** | 15.0 % | **9.8 %** | 125.12 € | stávame sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.50 € | **120.90 €** | 10.1 % | **5.2 %** | 94.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič hrudníku DBX BUSHIDO ARC-1500 | 69.00 € | **63.50 €** | 14.9 % | **5.7 %** | 54.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Sony | 75.00 € | **69.50 €** | 14.7 % | **6.3 %** | 69.52 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **76.00 €** | 14.8 % | **7.0 %** | 76.29 € | stávame sa najlacnejší |
| KMP C81V / PGI-525BK, CLI-526C/M/Y | 23.99 € | **18.50 €** | 67.8 % | **29.4 %** | 18.59 € | stávame sa najlacnejší |
| SigGen 3-v-1 FNIRSI DST-210 ručný digitálny multimet... | 60.00 € | **54.90 €** | 14.8 % | **5.0 %** | 52.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 75.00 € | **69.90 €** | 14.8 % | **7.0 %** | 70.00 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **867.00 €** | 15.0 % | **14.3 %** | 867.01 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.90 € | **91.90 €** | 15.0 % | **9.1 %** | 91.96 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 117.90 € | **112.90 €** | 15.0 % | **10.1 %** | 112.99 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 209.90 € | **204.90 €** | 15.1 % | **12.3 %** | 205.00 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 313.90 € | **308.90 €** | 15.0 % | **13.2 %** | 309.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **27.50 €** | 59.9 % | **35.3 %** | 27.68 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **500.00 €** | 15.0 % | **13.8 %** | 500.20 € | stávame sa najlacnejší |
| Výrobník ledu TEESA EASY ICE TSA5009 | 79.50 € | **74.50 €** | 15.3 % | **8.1 %** | 74.72 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 80.00 € | **75.00 €** | 14.7 % | **7.5 %** | 75.29 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 23.00 € | **18.00 €** | 49.1 % | **16.7 %** | 18.44 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.90 € | **81.00 €** | 15.1 % | **8.5 %** | 81.10 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.80 €** | 121.3 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 32.50 € | **27.90 €** | 58.6 % | **36.2 %** | 27.91 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.50 € | **52.90 €** | 14.9 % | **5.7 %** | 52.99 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 90.50 € | **85.90 €** | 10.9 % | **5.2 %** | 82.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 85.50 € | **80.90 €** | 15.1 % | **8.9 %** | 80.99 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 119.50 € | **115.00 €** | 15.1 % | **10.8 %** | 115.09 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 211.00 € | **206.50 €** | 15.0 % | **12.5 %** | 206.64 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **26.00 €** | 59.0 % | **35.5 %** | 26.15 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 28.50 € | **24.00 €** | 58.5 % | **33.5 %** | 24.49 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **74.00 €** | 15.0 % | **8.4 %** | 74.50 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 55.90 € | **51.50 €** | 15.1 % | **6.0 %** | 51.89 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.50 €** | 59.0 % | **33.9 %** | 23.90 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.90 €** | 14.9 % | **13.5 %** | 330.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z20 | 343.00 € | **338.90 €** | 9.9 % | **8.5 %** | 339.00 € | stávame sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 64.00 € | **59.90 €** | 14.7 % | **7.4 %** | 59.96 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.00 € | **120.90 €** | 14.9 % | **11.1 %** | 120.96 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **211.90 €** | 15.0 % | **12.8 %** | 212.00 € | stávame sa najlacnejší |
| UMAX VisionBook 10T LTE | 92.50 € | **88.50 €** | 10.2 % | **5.4 %** | 84.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES60 reproduktor černý | 94.90 € | **90.90 €** | 10.1 % | **5.4 %** | 89.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **16.50 €** | 34.1 % | **7.9 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI PRO MP273A | 88.50 € | **84.50 €** | 10.4 % | **5.4 %** | 84.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 58.50 € | **54.50 €** | 14.7 % | **6.9 %** | 54.59 € | stávame sa najlacnejší |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 238.90 € | **234.90 €** | 11.7 % | **9.8 %** | 235.00 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 388.90 € | **384.90 €** | 15.0 % | **13.8 %** | 385.00 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 32.00 € | **28.00 €** | 20.0 % | **5.0 %** | 28.12 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **48.00 €** | 14.5 % | **5.7 %** | 48.19 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 75.50 € | **71.50 €** | 15.4 % | **9.3 %** | 71.71 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.00 € | **231.00 €** | 14.7 % | **12.7 %** | 231.21 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **21.50 €** | 59.8 % | **34.8 %** | 21.72 € | stávame sa najlacnejší |
| Catlink BayMax Lite intelligent self-cleaning cat li... | 357.50 € | **353.50 €** | 15.1 % | **13.8 %** | 353.75 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 63.50 € | **59.50 €** | 14.8 % | **7.6 %** | 59.79 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.50 €** | 14.9 % | **9.5 %** | 81.81 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 60.00 € | **56.00 €** | 14.8 % | **7.1 %** | 56.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 69.50 € | **65.50 €** | 14.8 % | **8.2 %** | 65.89 € | stávame sa najlacnejší |
| Maxxo CD03 rádio | 137.90 € | **134.00 €** | 10.2 % | **7.1 %** | 134.10 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 72.90 € | **69.00 €** | 15.3 % | **9.1 %** | 69.49 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 56.90 € | **53.00 €** | 15.1 % | **7.2 %** | 53.29 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **22.00 €** | 39.1 % | **18.1 %** | 22.35 € | stávame sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 17.90 € | **14.00 €** | 66.7 % | **30.4 %** | 14.50 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 40.50 € | **36.90 €** | 15.7 % | **5.4 %** | 36.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 73.50 € | **69.90 €** | 14.9 % | **9.3 %** | 69.99 € | stávame sa najlacnejší |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 43.00 € | **39.50 €** | 14.9 % | **5.6 %** | 38.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **30.00 €** | 38.0 % | **23.6 %** | 30.17 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **526.00 €** | 15.0 % | **14.3 %** | 526.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 13.50 € | **10.00 €** | 48.7 % | **10.2 %** | 10.29 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 72.00 € | **68.50 €** | 14.8 % | **9.2 %** | 68.79 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 44.00 € | **40.50 €** | 14.9 % | **5.8 %** | 40.89 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **31.50 €** | 37.3 % | **23.6 %** | 31.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **12.00 €** | 56.3 % | **21.0 %** | 12.50 € | stávame sa najlacnejší |
| Tefal FV6840E0 | 75.90 € | **72.50 €** | 10.2 % | **5.3 %** | 67.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 103.90 € | **100.50 €** | 15.1 % | **11.3 %** | 100.63 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.50 €** | 15.0 % | **9.3 %** | 65.90 € | stávame sa najlacnejší |
| Sonar Flytec V080 s kapacitou 20 000 mAh pre loď na ... | 251.90 € | **248.50 €** | 15.1 % | **13.5 %** | 248.90 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **11.50 €** | 51.8 % | **17.2 %** | 11.63 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **52.50 €** | 11.9 % | **5.1 %** | 44.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.54 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 23.90 € | **20.50 €** | 54.2 % | **32.3 %** | 20.81 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 72.00 € | **68.90 €** | 14.8 % | **9.9 %** | 69.00 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 36.50 € | **33.50 €** | 15.3 % | **5.9 %** | 22.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová vesta HMS KTO05 | 35.50 € | **32.50 €** | 15.2 % | **5.5 %** | 27.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Motorcycle Intercom EJEAS MS8-SE | 86.50 € | **83.50 €** | 14.6 % | **10.6 %** | 83.57 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.00 € | **38.00 €** | 14.8 % | **6.4 %** | 38.09 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.90 €** | 50.2 % | **35.2 %** | 27.00 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **126.00 €** | 10.0 % | **7.4 %** | 126.22 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **151.50 €** | 15.1 % | **12.9 %** | 151.81 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 13.00 € | **10.00 €** | 45.0 % | **11.5 %** | 10.33 € | stávame sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 60.00 € | **57.00 €** | 39.6 % | **32.6 %** | 57.34 € | stávame sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 65.50 € | **62.50 €** | 15.2 % | **9.9 %** | 62.85 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **35.50 €** | 15.3 % | **6.3 %** | 35.86 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **425.00 €** | 14.9 % | **14.1 %** | 425.37 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.50 €** | 37.8 % | **21.5 %** | 22.90 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 61.00 € | **58.00 €** | 14.9 % | **9.2 %** | 58.50 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 163.90 € | **161.00 €** | 15.1 % | **13.0 %** | 161.18 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 50.90 € | **48.00 €** | 15.3 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **36.00 €** | 46.1 % | **35.2 %** | 36.47 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 287.50 € | **284.90 €** | 14.9 % | **13.9 %** | 284.96 € | stávame sa najlacnejší |
| Dálkový ovladač 4-kan. k pohonu vrat IN SL-600, 1000... | 28.50 € | **25.90 €** | 15.7 % | **5.2 %** | 19.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kábel na rýchle nabíjanie SDC DJI Power pre MAVIC 3 | 28.50 € | **25.90 €** | 15.9 % | **5.3 %** | 20.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák UNI LIFT stropní TÜV/GS | 31.50 € | **28.90 €** | 15.0 % | **5.6 %** | 25.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Škoda Rally | 59.50 € | **56.90 €** | 10.5 % | **5.7 %** | 53.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **17.90 €** | 20.5 % | **5.2 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 29.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 34.50 € | **31.90 €** | 14.6 % | **5.9 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 31.50 € | **28.90 €** | 38.6 % | **27.1 %** | 28.98 € | stávame sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 49.00 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.90 €** | 15.0 % | **8.9 %** | 46.00 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér duální VU+ 2,4/5GHz/600Mbps s ANTÉN... | 35.00 € | **32.50 €** | 14.2 % | **6.1 %** | 30.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 34.00 € | **31.50 €** | 14.9 % | **6.4 %** | 30.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.50 € | **30.00 €** | 15.6 % | **6.7 %** | 30.09 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 91.50 € | **89.00 €** | 14.9 % | **11.8 %** | 89.09 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **20.00 €** | 55.2 % | **37.9 %** | 20.24 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 97.00 € | **94.50 €** | 14.8 % | **11.9 %** | 94.79 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **12.00 €** | 37.7 % | **14.0 %** | 12.30 € | stávame sa najlacnejší |
| Rowenta RH1833E0 | 149.50 € | **147.00 €** | 10.3 % | **8.4 %** | 147.38 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 60.50 € | **58.00 €** | 15.0 % | **10.3 %** | 58.38 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.00 € | **59.50 €** | 14.6 % | **10.0 %** | 59.89 € | stávame sa najlacnejší |
| Dokovacia stanica Blitzwolf 9v1 BW-TH17 + 15W nabíjačka | 43.00 € | **40.50 €** | 14.4 % | **7.7 %** | 40.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 45.50 € | **43.00 €** | 15.5 % | **9.1 %** | 43.43 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 52.50 € | **50.00 €** | 14.6 % | **9.1 %** | 50.46 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **12.00 €** | 58.4 % | **31.1 %** | 12.47 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **19.00 €** | 38.5 % | **22.4 %** | 19.50 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **10.50 €** | 61.4 % | **31.3 %** | 10.90 € | stávame sa najlacnejší |
| Náhradné filtre pre napájačku Petkit Eversweet Max | 28.90 € | **26.50 €** | 15.1 % | **5.5 %** | 16.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 32.90 € | **30.50 €** | 15.7 % | **7.3 %** | 30.60 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.20 €** | 60.5 % | **25.3 %** | 8.25 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.90 €** | 55.6 % | **7.4 %** | 4.99 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.00 € | **27.90 €** | 13.7 % | **5.7 %** | 23.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Adaptér KRUGER & MATZ KM0391 (HUB) USB-C na HDMI / 2... | 27.00 € | **24.90 €** | 14.6 % | **5.7 %** | 22.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.90 €** | 47.3 % | **38.2 %** | 31.96 € | stávame sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 25.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hasicí přístroj práškový 2 kg ABC | 29.50 € | **27.50 €** | 14.3 % | **6.6 %** | 22.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44GW | 198.00 € | **196.00 €** | 6.1 % | **5.0 %** | 192.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **23.50 €** | 15.8 % | **6.7 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK812110 | 106.50 € | **104.50 €** | 7.1 % | **5.1 %** | 104.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **23.00 €** | 14.5 % | **5.3 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Russell Hobbs 27011-56 | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 44.99 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **13.90 €** | 37.7 % | **20.3 %** | 14.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKM | 59.90 € | **57.90 €** | 10.3 % | **6.6 %** | 58.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 59.90 € | **57.90 €** | 10.3 % | **6.6 %** | 58.00 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **13.50 €** | 49.3 % | **30.0 %** | 13.64 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.0 % | **8.1 %** | 31.69 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 328.00 € | **326.00 €** | 7.8 % | **7.1 %** | 326.22 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 28.50 € | **26.50 €** | 14.9 % | **6.9 %** | 26.79 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 160.50 € | **158.50 €** | 10.1 % | **8.7 %** | 158.80 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 206.00 € | **204.00 €** | 14.9 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.00 € | **25.00 €** | 38.2 % | **28.0 %** | 25.34 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 124.50 € | **122.50 €** | 15.1 % | **13.3 %** | 122.86 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.50 €** | 55.4 % | **42.7 %** | 22.87 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **65.50 €** | 15.2 % | **11.8 %** | 65.88 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.50 €** | 15.4 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 138.00 € | **136.00 €** | 15.0 % | **13.3 %** | 136.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 126.90 € | **125.00 €** | 15.1 % | **13.4 %** | 125.39 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.60 €** | 57.1 % | **31.2 %** | 9.69 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **29.00 €** | 14.8 % | **7.8 %** | 29.29 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **23.00 €** | 59.2 % | **47.0 %** | 23.38 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 6.60 € | **4.80 €** | 49.9 % | **9.0 %** | 4.87 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 18.50 € | **16.90 €** | 16.6 % | **6.5 %** | 16.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.90 €** | 15.3 % | **10.6 %** | 37.92 € | stávame sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 20.50 € | **18.90 €** | 13.9 % | **5.0 %** | 19.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.90 €** | 52.0 % | **38.1 %** | 15.98 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.90 €** | 52.0 % | **38.1 %** | 15.98 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 17.50 € | **15.90 €** | 15.9 % | **5.3 %** | 16.00 € | stávame sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.50 € | **125.90 €** | 10.1 % | **8.8 %** | 126.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 23.00 € | **21.50 €** | 13.8 % | **6.4 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 11.50 € | **10.00 €** | 36.1 % | **18.3 %** | 10.01 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 5.50 € | **4.00 €** | 53.1 % | **11.4 %** | 4.01 € | stávame sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 34.00 € | **32.50 €** | 25.4 % | **19.9 %** | 32.59 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **27.00 €** | 15.7 % | **9.6 %** | 27.10 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.50 €** | 50.1 % | **37.6 %** | 16.64 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 15.50 € | **14.00 €** | 16.8 % | **5.5 %** | 14.19 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25628 růžová | 47.50 € | **46.00 €** | 14.9 % | **11.3 %** | 46.19 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **274.50 €** | 15.0 % | **14.3 %** | 274.70 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 42.50 € | **41.00 €** | 11.3 % | **7.4 %** | 41.20 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.50 € | **18.00 €** | 14.5 % | **5.7 %** | 18.29 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 25.50 € | **24.00 €** | 15.9 % | **9.1 %** | 24.29 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 25.50 € | **24.00 €** | 15.9 % | **9.1 %** | 24.29 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 16.00 € | **14.50 €** | 49.9 % | **35.8 %** | 14.82 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.50 €** | 47.5 % | **39.9 %** | 27.90 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 33.00 € | **31.50 €** | 38.6 % | **32.3 %** | 31.90 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **24.00 €** | 37.8 % | **29.6 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **22.00 €** | 39.1 % | **30.2 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **14.00 €** | 55.0 % | **40.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 22.50 € | **21.00 €** | 43.5 % | **33.9 %** | 21.50 € | stávame sa najlacnejší |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 75.50 € | **74.00 €** | 15.1 % | **12.8 %** | 74.50 € | stávame sa najlacnejší |
| ETA 518091010 | 13.99 € | **12.50 €** | 27.7 % | **14.1 %** | 12.60 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 130.90 € | **129.50 €** | 10.3 % | **9.1 %** | 129.90 € | stávame sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 18.90 € | **17.50 €** | 15.4 % | **6.8 %** | 12.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.90 € | **42.50 €** | 15.4 % | **11.7 %** | 42.66 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.50 €** | 14.9 % | **10.0 %** | 31.69 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **3.80 €** | 54.1 % | **14.8 %** | 3.90 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.50 €** | 36.6 % | **24.7 %** | 12.57 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 276.00 € | **274.90 €** | 9.8 % | **9.4 %** | 275.00 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing SR-P RS111 | 46.00 € | **44.90 €** | 14.6 % | **11.9 %** | 44.91 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 25.00 € | **23.90 €** | 38.0 % | **31.9 %** | 23.96 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **57.90 €** | 14.9 % | **12.8 %** | 57.99 € | stávame sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **32.90 €** | 10.3 % | **6.7 %** | 33.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 22.00 € | **20.90 €** | 10.5 % | **5.0 %** | 21.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 28.00 € | **26.90 €** | 14.1 % | **9.6 %** | 27.00 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.90 €** | 39.2 % | **8.6 %** | 3.96 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.20 €** | 59.1 % | **35.1 %** | 6.24 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.90 €** | 48.7 % | **37.8 %** | 14.00 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 129.00 € | **127.90 €** | 7.4 % | **6.5 %** | 127.95 € | stávame sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **217.90 €** | 15.0 % | **14.4 %** | 218.00 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 30.50 € | **29.50 €** | 8.7 % | **5.1 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 11.90 € | **10.90 €** | 16.6 % | **6.8 %** | 7.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK AX9U | 17.90 € | **16.90 €** | 13.2 % | **6.8 %** | 13.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hasicí přístroj práškový 1 kg ABC | 16.50 € | **15.50 €** | 14.9 % | **8.0 %** | 13.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 18.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 15.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Jóga válec Dharma REBEL ACTIVE RBA-3062-PU | 12.90 € | **11.90 €** | 14.9 % | **6.0 %** | 11.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 40.90 € | **39.90 €** | 10.3 % | **7.6 %** | 39.91 € | stávame sa najlacnejší |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 15.50 € | **14.50 €** | 20.6 % | **12.8 %** | 14.53 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.50 €** | 59.7 % | **35.1 %** | 5.55 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.00 €** | 14.3 % | **11.1 %** | 34.09 € | stávame sa najlacnejší |
| Kruger & Matz KM1303 | 17.50 € | **16.50 €** | 14.6 % | **8.1 %** | 16.59 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **26.50 €** | 39.3 % | **34.2 %** | 26.60 € | stávame sa najlacnejší |
| G3Ferrari G1004500 | 51.90 € | **50.90 €** | 12.0 % | **9.9 %** | 51.00 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **27.90 €** | 15.7 % | **11.7 %** | 28.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 259.90 € | **258.90 €** | 13.7 % | **13.2 %** | 259.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **35.00 €** | 38.3 % | **34.4 %** | 35.16 € | stávame sa najlacnejší |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell O... | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| Filtračný systém Freewell UV Osmo Pocket 4P | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND64 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND8 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 16.50 € | **15.50 €** | 16.8 % | **9.7 %** | 15.69 € | stávame sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.71 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.22 € | stávame sa najlacnejší |
| FNIRSI GD-02 Detektor horľavých plynov s farebným di... | 35.50 € | **34.50 €** | 15.4 % | **12.1 %** | 34.75 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.50 €** | 15.0 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **59.50 €** | 10.6 % | **8.8 %** | 59.77 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **41.00 €** | 14.7 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **36.00 €** | 41.8 % | **37.9 %** | 36.31 € | stávame sa najlacnejší |
| Powerbanka Baseus Bipow 10000 mAh, 20 W (biela) | 19.00 € | **18.00 €** | 13.6 % | **7.6 %** | 18.31 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **71.00 €** | 14.7 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **25.00 €** | 42.8 % | **37.3 %** | 25.33 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 32.50 € | **31.50 €** | 14.8 % | **11.3 %** | 31.83 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 118.00 € | **117.00 €** | 14.9 % | **13.9 %** | 117.36 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 21.50 € | **20.50 €** | 43.3 % | **36.6 %** | 20.87 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 20.50 € | **19.50 €** | 48.5 % | **41.3 %** | 19.88 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **351.50 €** | 15.1 % | **14.7 %** | 351.88 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **12.50 €** | 14.6 % | **6.1 %** | 12.89 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 19.50 € | **18.50 €** | 16.1 % | **10.2 %** | 18.89 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 23.00 € | **22.00 €** | 15.1 % | **10.1 %** | 22.39 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.50 € | **24.50 €** | 31.8 % | **26.6 %** | 24.90 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.50 €** | 10.5 % | **9.3 %** | 98.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 34.50 € | **33.50 €** | 55.5 % | **51.0 %** | 33.90 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 43.0 % | **36.4 %** | 20.90 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **18.00 €** | 14.3 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 85.00 € | **84.00 €** | 14.9 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.42 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **15.00 €** | 38.4 % | **29.7 %** | 15.44 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **43.00 €** | 14.7 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 22.00 € | **21.00 €** | 14.2 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 29.00 € | **28.00 €** | 14.6 % | **10.7 %** | 28.49 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 230.00 € | **229.00 €** | 8.3 % | **7.8 %** | 229.50 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.90 € | **69.00 €** | 12.2 % | **10.7 %** | 69.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.90 € | **64.00 €** | 21.9 % | **20.2 %** | 64.33 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **64.00 €** | 15.1 % | **13.5 %** | 64.50 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.60 €** | 50.3 % | **37.4 %** | 9.68 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **11.00 €** | 15.6 % | **6.8 %** | 11.26 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.00 €** | 46.2 % | **34.2 %** | 10.36 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| TP-LINK TL-WA855RE Wireless N Extender | 18.90 € | **18.00 €** | 10.5 % | **5.2 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.00 €** | 11.9 % | **5.9 %** | 16.09 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.90 € | **48.00 €** | 15.0 % | **12.9 %** | 48.19 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.90 € | **63.00 €** | 15.0 % | **13.4 %** | 63.19 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.00 €** | 26.9 % | **20.1 %** | 16.36 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.90 € | **19.00 €** | 24.5 % | **18.9 %** | 19.38 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.00 €** | 15.4 % | **9.6 %** | 17.39 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.39 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.50 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.20 €** | 48.6 % | **36.7 %** | 9.23 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.50 €** | 55.0 % | **31.6 %** | 4.60 € | stávame sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 20 ind | 10.50 € | **9.80 €** | 13.1 % | **5.5 %** | 7.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.40 €** | 55.3 % | **34.0 %** | 4.49 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.40 €** | 55.2 % | **39.9 %** | 6.50 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 415.50 € | **414.90 €** | 9.9 % | **9.8 %** | 415.00 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 20.50 € | **19.90 €** | 15.5 % | **12.1 %** | 19.99 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.90 €** | 11.2 % | **8.7 %** | 26.00 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.30 €** | 47.3 % | **36.1 %** | 7.33 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 4.20 € | **3.60 €** | 54.5 % | **32.4 %** | 3.66 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.30 € | **1.70 €** | 47.2 % | **8.8 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 11.3 % | **6.7 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada pro přežití SURVIVAL 32v1 Trizand 19920 | 15.50 € | **14.90 €** | 14.7 % | **10.2 %** | 15.00 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.50 € | **122.90 €** | 10.3 % | **9.7 %** | 122.91 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 209.50 € | **208.90 €** | 13.8 % | **13.5 %** | 209.00 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.90 €** | 55.5 % | **37.9 %** | 3.96 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 14.50 € | **14.00 €** | 9.2 % | **5.4 %** | 6.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.00 € | **15.50 €** | 11.9 % | **8.4 %** | 13.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **20.00 €** | 48.5 % | **44.9 %** | 20.01 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **8.00 €** | 53.9 % | **44.9 %** | 8.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.70 €** | 48.7 % | **36.7 %** | 5.71 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.40 € | **2.90 €** | 56.2 % | **33.2 %** | 2.92 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **61.00 €** | 19.8 % | **18.9 %** | 61.03 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 17.00 € | **16.50 €** | 22.2 % | **18.6 %** | 16.53 € | stávame sa najlacnejší |
| Leifheit Potah na žehlicí prkno Cotton C | 10.50 € | **10.00 €** | 12.6 % | **7.3 %** | 10.04 € | stávame sa najlacnejší |
| Leifheit Čistič na okna s rozprašovačem | 10.50 € | **10.00 €** | 14.4 % | **9.0 %** | 10.04 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.20 €** | 55.2 % | **43.6 %** | 6.26 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.50 €** | 41.0 % | **38.8 %** | 31.57 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.80 €** | 50.7 % | **36.4 %** | 4.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.70 € | **5.20 €** | 47.6 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 72.00 € | **71.50 €** | 13.6 % | **12.8 %** | 71.59 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.50 €** | 47.2 % | **44.5 %** | 26.59 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 44.50 € | **44.00 €** | 9.4 % | **8.2 %** | 44.09 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 26.00 € | **25.50 €** | 10.4 % | **8.3 %** | 25.59 € | stávame sa najlacnejší |
| Tester napätia a spojitosti Uni-T UT18D | 41.00 € | **40.50 €** | 9.9 % | **8.6 %** | 40.59 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 71.50 € | **71.00 €** | 13.6 % | **12.9 %** | 71.09 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.00 € | **39.50 €** | 12.9 % | **11.5 %** | 39.59 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **25.00 €** | 9.3 % | **7.1 %** | 25.09 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 68.50 € | **68.00 €** | 13.1 % | **12.3 %** | 68.09 € | stávame sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 24.00 € | **23.50 €** | 10.4 % | **8.1 %** | 23.59 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 39.50 € | **39.00 €** | 12.6 % | **11.2 %** | 39.09 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 57.00 € | **56.50 €** | 9.9 % | **9.0 %** | 56.59 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 53.50 € | **53.00 €** | 13.2 % | **12.2 %** | 53.09 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 46.50 € | **46.00 €** | 8.4 % | **7.2 %** | 46.09 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 45.50 € | **45.00 €** | 13.0 % | **11.7 %** | 45.09 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 96.50 € | **96.00 €** | 11.8 % | **11.3 %** | 96.09 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 56.00 € | **55.50 €** | 12.9 % | **11.9 %** | 55.59 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 106.50 € | **106.00 €** | 13.7 % | **13.2 %** | 106.09 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 77.00 € | **76.50 €** | 10.2 % | **9.5 %** | 76.59 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 75.50 € | **75.00 €** | 12.4 % | **11.6 %** | 75.09 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 123.50 € | **123.00 €** | 10.1 % | **9.6 %** | 123.09 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 118.00 € | **117.50 €** | 10.2 % | **9.8 %** | 117.59 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 34.00 € | **33.50 €** | 14.7 % | **13.0 %** | 33.59 € | stávame sa najlacnejší |
| Návlek VILEDA STEAM XXL POWER 161717 | 11.50 € | **11.00 €** | 14.0 % | **9.1 %** | 11.09 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.40 €** | 47.1 % | **34.7 %** | 5.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.70 € | **5.20 €** | 30.2 % | **18.8 %** | 5.29 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 91.50 € | **91.00 €** | 14.9 % | **14.3 %** | 91.09 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.50 €** | 38.3 % | **31.4 %** | 9.60 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **6.30 €** | 54.0 % | **42.7 %** | 6.40 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.20 €** | 49.3 % | **33.4 %** | 4.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **4.80 €** | 47.6 % | **33.6 %** | 4.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **4.90 €** | 47.3 % | **33.7 %** | 5.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.50 € | **8.00 €** | 43.7 % | **35.2 %** | 8.10 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **11.00 €** | 16.6 % | **11.5 %** | 11.12 € | stávame sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.00 € | **15.50 €** | 10.1 % | **6.7 %** | 15.67 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 43.50 € | **43.00 €** | 6.4 % | **5.2 %** | 43.19 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **39.00 €** | 10.9 % | **9.5 %** | 39.19 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 68.00 € | **67.50 €** | 15.1 % | **14.2 %** | 67.69 € | stávame sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 49.00 € | **48.50 €** | 8.5 % | **7.4 %** | 48.69 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 11.74 € | stávame sa najlacnejší |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 46.50 € | **46.00 €** | 15.5 % | **14.3 %** | 46.24 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.50 € | **16.00 €** | 40.0 % | **35.8 %** | 16.25 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **15.00 €** | 47.4 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 170.00 € | **169.50 €** | 14.9 % | **14.5 %** | 169.75 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **13.00 €** | 47.5 % | **42.1 %** | 13.27 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 11.00 € | **10.50 €** | 48.1 % | **41.3 %** | 10.77 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.50 € | **28.00 €** | 38.6 % | **36.1 %** | 28.28 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 22.00 € | **21.50 €** | 7.5 % | **5.0 %** | 21.79 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.50 € | **27.00 €** | 14.7 % | **12.6 %** | 27.29 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 24.00 € | **23.50 €** | 14.3 % | **11.9 %** | 23.79 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 23.50 € | **23.00 €** | 12.0 % | **9.6 %** | 23.29 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS ISIMAT+ | 22.00 € | **21.50 €** | 12.0 % | **9.5 %** | 21.79 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS ISIMAT | 22.50 € | **22.00 €** | 14.5 % | **12.0 %** | 22.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.1 % | **7.7 %** | 10.29 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 17.00 € | **16.50 €** | 15.3 % | **11.9 %** | 16.79 € | stávame sa najlacnejší |
| Solární regulátor PWM Epever VS1024AU, 12/24V, 10A s... | 38.00 € | **37.50 €** | 14.4 % | **12.9 %** | 37.79 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 58.50 € | **58.00 €** | 12.2 % | **11.2 %** | 58.29 € | stávame sa najlacnejší |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 20.50 € | **20.00 €** | 15.1 % | **12.3 %** | 20.29 € | stávame sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 52.50 € | **52.00 €** | 15.5 % | **14.4 %** | 52.29 € | stávame sa najlacnejší |
| Salente G4 robotický vysavač | 115.50 € | **115.00 €** | 7.7 % | **7.2 %** | 115.29 € | stávame sa najlacnejší |
| Salente Rtx-G4 | 115.50 € | **115.00 €** | 7.7 % | **7.2 %** | 115.29 € | stávame sa najlacnejší |
| Bravo Adria B-4780 bílá | 25.50 € | **25.00 €** | 7.1 % | **5.0 %** | 25.29 € | stávame sa najlacnejší |
| Adaptér KRUGER & MATZ KM0390 (HUB) USB C na port HDM... | 27.50 € | **27.00 €** | 14.3 % | **12.2 %** | 27.29 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 22.50 € | **22.00 €** | 16.0 % | **13.4 %** | 22.29 € | stávame sa najlacnejší |
| Cabletech UCH0023A1 | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.79 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 16.50 € | **16.00 €** | 11.1 % | **7.8 %** | 16.29 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.50 € | **65.00 €** | 14.8 % | **13.9 %** | 65.29 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 21.50 € | **21.00 €** | 12.1 % | **9.5 %** | 21.29 € | stávame sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 26.50 € | **26.00 €** | 15.3 % | **13.2 %** | 26.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 17.50 € | **17.00 €** | 37.2 % | **33.3 %** | 17.29 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.50 € | **85.00 €** | 14.7 % | **14.1 %** | 85.29 € | stávame sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.50 € | **12.00 €** | 15.7 % | **11.1 %** | 12.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.50 € | **28.00 €** | 15.5 % | **13.5 %** | 28.29 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 35.50 € | **35.00 €** | 14.5 % | **12.9 %** | 35.29 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.00 € | **12.50 €** | 10.2 % | **6.0 %** | 12.79 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.50 € | **138.00 €** | 15.0 % | **14.6 %** | 138.29 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 25.50 € | **25.00 €** | 9.6 % | **7.5 %** | 25.29 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.50 € | **25.00 €** | 14.7 % | **12.5 %** | 25.29 € | stávame sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.50 € | **17.00 €** | 9.2 % | **6.1 %** | 17.29 € | stávame sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Blue 2l | 13.00 € | **12.50 €** | 14.8 % | **10.3 %** | 12.79 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.50 € | **28.00 €** | 37.2 % | **34.8 %** | 28.30 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.50 €** | 46.4 % | **42.9 %** | 20.80 € | stávame sa najlacnejší |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.50 € | **10.00 €** | 14.0 % | **8.5 %** | 10.30 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.50 € | **22.00 €** | 11.2 % | **8.7 %** | 22.32 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **15.00 €** | 39.9 % | **35.4 %** | 15.33 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Akumulátor Lipo Tattu 2s 650mAh 95C 7,6V HV z XT30 L... | 10.50 € | **10.00 €** | 16.5 % | **10.9 %** | 10.33 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **12.00 €** | 46.9 % | **41.0 %** | 12.34 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.00 €** | 11.9 % | **6.6 %** | 10.34 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.00 €** | 38.8 % | **32.2 %** | 10.34 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **13.00 €** | 56.1 % | **50.3 %** | 13.35 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.50 € | **38.00 €** | 39.5 % | **37.7 %** | 38.35 € | stávame sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 400 | 32.50 € | **32.00 €** | 15.7 % | **13.9 %** | 32.38 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **182.00 €** | 15.0 % | **14.7 %** | 182.38 € | stávame sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **21.50 €** | 13.8 % | **11.2 %** | 21.88 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 14.50 € | **14.00 €** | 38.7 % | **33.9 %** | 14.38 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.00 € | **85.50 €** | 13.8 % | **13.1 %** | 85.89 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 25.00 € | **24.50 €** | 22.8 % | **20.4 %** | 24.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 16.9 % | **11.8 %** | 11.39 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.50 € | **14.00 €** | 9.1 % | **5.3 %** | 14.39 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **15.00 €** | 46.0 % | **41.3 %** | 15.39 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.00 € | **47.50 €** | 9.7 % | **8.6 %** | 47.89 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.50 € | **15.00 €** | 14.1 % | **10.5 %** | 15.39 € | stávame sa najlacnejší |
| Leifheit Air Board M Compact | 55.00 € | **54.50 €** | 9.1 % | **8.1 %** | 54.89 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.50 € | **33.00 €** | 11.8 % | **10.1 %** | 33.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 205.50 € | **205.00 €** | 12.4 % | **12.1 %** | 205.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.00 € | **56.50 €** | 8.1 % | **7.2 %** | 56.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 136.00 € | **135.50 €** | 12.8 % | **12.4 %** | 135.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.00 € | **69.50 €** | 13.0 % | **12.2 %** | 69.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 91.50 € | **91.00 €** | 13.7 % | **13.1 %** | 91.39 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 53.00 € | **52.50 €** | 13.2 % | **12.2 %** | 52.89 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 82.50 € | **82.00 €** | 11.8 % | **11.1 %** | 82.39 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 109.50 € | **109.00 €** | 13.8 % | **13.3 %** | 109.39 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 34.50 € | **34.00 €** | 12.4 % | **10.7 %** | 34.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 258.50 € | **258.00 €** | 14.6 % | **14.4 %** | 258.39 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.00 € | **103.50 €** | 14.2 % | **13.6 %** | 103.89 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 137.00 € | **136.50 €** | 14.3 % | **13.9 %** | 136.89 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 193.50 € | **193.00 €** | 14.4 % | **14.1 %** | 193.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.00 € | **470.50 €** | 8.8 % | **8.7 %** | 470.89 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 93.00 € | **92.50 €** | 13.6 % | **13.0 %** | 92.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 133.00 € | **132.50 €** | 14.0 % | **13.5 %** | 132.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.00 € | **31.50 €** | 10.9 % | **9.2 %** | 31.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.00 € | **72.50 €** | 13.5 % | **12.8 %** | 72.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 90.00 € | **89.50 €** | 13.4 % | **12.8 %** | 89.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 61.50 € | **61.00 €** | 13.0 % | **12.1 %** | 61.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 53.00 € | **52.50 €** | 10.8 % | **9.7 %** | 52.89 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 34.50 € | **34.00 €** | 12.1 % | **10.4 %** | 34.39 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 81.00 € | **80.50 €** | 12.6 % | **11.9 %** | 80.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 41.50 € | **41.00 €** | 13.0 % | **11.6 %** | 41.39 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 169.00 € | **168.50 €** | 14.2 % | **13.8 %** | 168.89 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 205.00 € | **204.50 €** | 14.4 % | **14.1 %** | 204.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 226.00 € | **225.50 €** | 15.0 % | **14.8 %** | 225.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 90.50 € | **90.00 €** | 15.2 % | **14.5 %** | 90.39 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 141.00 € | **140.50 €** | 12.4 % | **12.0 %** | 140.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 271.50 € | **271.00 €** | 14.6 % | **14.4 %** | 271.39 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT312A | 283.00 € | **282.50 €** | 14.6 % | **14.4 %** | 282.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 103.50 € | **103.00 €** | 14.0 % | **13.4 %** | 103.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 158.00 € | **157.50 €** | 14.4 % | **14.0 %** | 157.89 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.50 € | **45.00 €** | 10.0 % | **8.8 %** | 45.39 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 60.50 € | **60.00 €** | 10.0 % | **9.1 %** | 60.39 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 38.50 € | **38.00 €** | 15.0 % | **13.5 %** | 38.39 € | stávame sa najlacnejší |
| CrockPot CSC062X | 156.00 € | **155.50 €** | 6.1 % | **5.8 %** | 155.89 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 79.00 € | **78.50 €** | 14.7 % | **13.9 %** | 78.89 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 99.00 € | **98.50 €** | 7.2 % | **6.6 %** | 98.89 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 58.00 € | **57.50 €** | 9.4 % | **8.4 %** | 57.89 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 286.50 € | **286.00 €** | 14.5 % | **14.3 %** | 286.39 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **25.50 €** | 14.3 % | **12.1 %** | 25.89 € | stávame sa najlacnejší |
| DOMO DO354VD | 130.50 € | **130.00 €** | 8.5 % | **8.1 %** | 130.39 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 269.00 € | **268.50 €** | 9.2 % | **9.0 %** | 268.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.50 € | **24.00 €** | 15.4 % | **13.0 %** | 24.39 € | stávame sa najlacnejší |
| DOMO DO42102SV | 99.00 € | **98.50 €** | 9.6 % | **9.0 %** | 98.89 € | stávame sa najlacnejší |
| Salente Combo-4In1-Ss | 135.50 € | **135.00 €** | 14.2 % | **13.8 %** | 135.39 € | stávame sa najlacnejší |
| PRIMO PR406IM | 128.00 € | **127.50 €** | 9.8 % | **9.3 %** | 127.89 € | stávame sa najlacnejší |
| Domo DO331L | 106.00 € | **105.50 €** | 9.5 % | **9.0 %** | 105.89 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 272.00 € | **271.50 €** | 6.1 % | **5.9 %** | 271.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 24.00 € | **23.50 €** | 14.4 % | **12.1 %** | 23.89 € | stávame sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.50 € | **15.00 €** | 8.5 % | **5.0 %** | 15.39 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.50 € | **37.00 €** | 9.9 % | **8.4 %** | 37.39 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.50 € | **27.00 €** | 15.6 % | **13.5 %** | 27.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 283.50 € | **283.00 €** | 8.4 % | **8.3 %** | 283.39 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 22.00 € | **21.50 €** | 8.1 % | **5.6 %** | 21.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.50 € | **18.00 €** | 41.2 % | **37.4 %** | 18.39 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.50 € | **67.00 €** | 5.8 % | **5.0 %** | 67.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.00 € | **36.50 €** | 8.9 % | **7.4 %** | 36.89 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 60.50 € | **60.00 €** | 7.3 % | **6.4 %** | 60.39 € | stávame sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 15.00 € | **14.50 €** | 10.6 % | **6.9 %** | 14.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 85.50 € | **85.00 €** | 15.1 % | **14.5 %** | 85.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 203.00 € | **202.50 €** | 15.0 % | **14.7 %** | 202.89 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.50 € | **39.00 €** | 16.1 % | **14.6 %** | 39.39 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.50 € | **23.00 €** | 10.8 % | **8.5 %** | 23.39 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 293.00 € | **292.50 €** | 15.0 % | **14.8 %** | 292.89 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 220.50 € | **220.00 €** | 15.1 % | **14.9 %** | 220.39 € | stávame sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.39 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.00 € | **88.50 €** | 13.5 % | **12.9 %** | 88.89 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 124.50 € | **124.00 €** | 14.2 % | **13.8 %** | 124.39 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.90 € | stávame sa najlacnejší |
| Inteligentná žiarovka Yeelight W1 GU10 (Biela) | 16.00 € | **15.50 €** | 14.3 % | **10.7 %** | 15.90 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **25.50 €** | 34.4 % | **31.8 %** | 25.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 79.00 € | **78.50 €** | 15.5 % | **14.7 %** | 78.90 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 16.50 € | **16.00 €** | 25.8 % | **22.0 %** | 16.40 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **15.00 €** | 45.9 % | **41.1 %** | 15.41 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.41 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 12.50 € | **12.00 €** | 16.9 % | **12.3 %** | 12.42 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.50 € | **12.00 €** | 27.0 % | **22.0 %** | 12.42 € | stávame sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 29.50 € | **29.00 €** | 26.3 % | **24.2 %** | 29.42 € | stávame sa najlacnejší |
| Gorenje WG2PS74A2W | 239.50 € | **239.00 €** | 6.3 % | **6.1 %** | 239.42 € | stávame sa najlacnejší |
| Fixed MagPad, bílá FIXMPAD2-WH | 14.50 € | **14.00 €** | 25.7 % | **21.3 %** | 14.43 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 38.4 % | **35.1 %** | 20.45 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **11.00 €** | 38.3 % | **32.3 %** | 11.45 € | stávame sa najlacnejší |
| Interaktívne hračky pre mačky 3 v 1 | 10.50 € | **10.00 €** | 13.8 % | **8.4 %** | 10.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Leifheit 81520 Pegasus 200 Solid | 37.50 € | **37.00 €** | 12.7 % | **11.2 %** | 37.49 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 26.50 € | **26.00 €** | 8.8 % | **6.8 %** | 26.49 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **36.00 €** | 10.4 % | **8.9 %** | 36.49 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.50 € | **16.00 €** | 9.5 % | **6.2 %** | 16.49 € | stávame sa najlacnejší |
| Panasonic SC-AKX520E-K | 302.50 € | **302.00 €** | 9.3 % | **9.1 %** | 302.49 € | stávame sa najlacnejší |
| Mio Smartbox IV | 30.50 € | **30.00 €** | 7.2 % | **5.4 %** | 30.49 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **17.00 €** | 11.6 % | **8.4 %** | 17.49 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **25.00 €** | 25.3 % | **22.9 %** | 25.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 45.50 € | **45.00 €** | 14.0 % | **12.7 %** | 45.49 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **35.00 €** | 7.9 % | **6.3 %** | 35.49 € | stávame sa najlacnejší |
| Guzzanti GZ 110G | 325.50 € | **325.00 €** | 8.5 % | **8.4 %** | 325.49 € | stávame sa najlacnejší |
| ETA 006490000 | 13.99 € | **13.50 €** | 10.3 % | **6.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1396.90 € | **1396.50 €** | 15.0 % | **15.0 %** | 1396.79 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 70.90 € | **70.50 €** | 15.3 % | **14.6 %** | 70.60 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.90 € | **70.50 €** | 15.3 % | **14.6 %** | 70.60 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **134.50 €** | 15.0 % | **14.6 %** | 134.62 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 75.90 € | **75.50 €** | 15.2 % | **14.6 %** | 75.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.90 € | **119.50 €** | 34.9 % | **34.4 %** | 119.73 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 149.90 € | **149.50 €** | 15.1 % | **14.8 %** | 149.79 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 111.90 € | **111.50 €** | 7.0 % | **6.6 %** | 111.79 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 111.90 € | **111.50 €** | 15.1 % | **14.7 %** | 111.79 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 111.90 € | **111.50 €** | 15.1 % | **14.7 %** | 111.79 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.90 € | **88.50 €** | 6.2 % | **5.7 %** | 88.81 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161E | 108.90 € | **108.50 €** | 6.5 % | **6.1 %** | 108.89 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 125.90 € | **125.50 €** | 8.3 % | **7.9 %** | 125.89 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.9 % | **7.7 %** | 13.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **6.00 €** | 53.5 % | **43.9 %** | 6.05 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **6.60 €** | 43.7 % | **35.5 %** | 6.67 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.20 € | **5.80 €** | 46.1 % | **36.7 %** | 5.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.40 €** | 38.4 % | **32.1 %** | 8.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.50 €** | 47.7 % | **43.8 %** | 14.62 € | stávame sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.8 % | **8.8 %** | 14.63 € | stávame sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 10.68 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.90 € | **11.50 €** | 16.6 % | **12.6 %** | 11.69 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 10.90 € | **10.50 €** | 41.8 % | **36.6 %** | 10.70 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.90 € | **14.50 €** | 16.8 % | **13.7 %** | 14.77 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.90 € | **11.50 €** | 10.6 % | **6.9 %** | 11.79 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **12.50 €** | 15.3 % | **11.7 %** | 12.79 € | stávame sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.5 % | **7.7 %** | 15.83 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.50 €** | 33.9 % | **29.0 %** | 10.86 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **10.50 €** | 45.5 % | **40.2 %** | 10.86 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.50 €** | 12.0 % | **9.0 %** | 14.87 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.50 €** | 40.9 % | **26.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.50 €** | 48.2 % | **33.0 %** | 3.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.30 € | **3.90 €** | 46.9 % | **33.2 %** | 4.00 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.23 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 5.10 € | **4.70 €** | 54.1 % | **42.0 %** | 4.80 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70cm, statív, LED ... | 20.90 € | **20.50 €** | 15.4 % | **13.1 %** | 20.58 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 27.90 € | **27.50 €** | 14.9 % | **13.2 %** | 27.69 € | stávame sa najlacnejší |
| GUZZANTIGZ 3601 | 27.90 € | **27.50 €** | 9.4 % | **7.8 %** | 27.69 € | stávame sa najlacnejší |
| WiFi extender REBEL KOM1032 | 24.90 € | **24.50 €** | 15.7 % | **13.9 %** | 24.69 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 57.90 € | **57.50 €** | 15.2 % | **14.4 %** | 57.69 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.90 € | **16.50 €** | 15.6 % | **12.8 %** | 16.69 € | stávame sa najlacnejší |
| Záložní zdroj MHPower DL181-24 Mini UPS 24V 0,5A | 20.90 € | **20.50 €** | 16.0 % | **13.8 %** | 20.69 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 18.90 € | **18.50 €** | 11.9 % | **9.5 %** | 18.69 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.9 % | **15.4 %** | 31.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.50 €** | 25.4 % | **23.6 %** | 27.73 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.50 €** | 34.9 % | **33.6 %** | 41.73 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.50 €** | 38.4 % | **36.1 %** | 23.75 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.50 €** | 38.6 % | **37.2 %** | 39.78 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.90 € | **55.50 €** | 15.3 % | **14.5 %** | 55.79 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 8.1 % | **6.8 %** | 33.79 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.90 € | **45.50 €** | 15.3 % | **14.3 %** | 45.79 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **58.50 €** | 35.6 % | **34.7 %** | 58.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.50 €** | 36.4 % | **35.5 %** | 55.81 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.50 €** | 41.6 % | **40.3 %** | 45.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.50 €** | 20.3 % | **18.7 %** | 29.88 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **17.50 €** | 33.6 % | **30.6 %** | 17.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **33.50 €** | 25.7 % | **24.3 %** | 33.89 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.90 € | **47.50 €** | 8.3 % | **7.4 %** | 47.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 904.90 € | **904.50 €** | 15.0 % | **15.0 %** | 904.79 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 339.90 € | **339.50 €** | 15.0 % | **14.9 %** | 339.79 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 284.90 € | **284.50 €** | 6.5 % | **6.3 %** | 284.83 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.70 €** | 53.7 % | **48.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.90 €** | 55.9 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.70 €** | 56.3 % | **32.9 %** | 1.71 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.80 €** | 55.2 % | **33.0 %** | 1.82 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.30 €** | 58.6 % | **28.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.40 €** | 44.0 % | **18.6 %** | 1.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.80 € | **7.50 €** | 41.9 % | **36.4 %** | 7.53 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.30 € | **5.00 €** | 44.1 % | **36.0 %** | 5.03 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.80 €** | 40.1 % | **31.8 %** | 4.87 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.40 € | **3.10 €** | 46.3 % | **33.4 %** | 3.17 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.50 €** | 48.8 % | **32.8 %** | 2.58 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.00 € | **7.70 €** | 38.1 % | **32.9 %** | 7.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.50 €** | 46.9 % | **31.1 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.20 € | **7.90 €** | 53.6 % | **48.0 %** | 7.98 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **8.10 €** | 47.7 % | **44.1 %** | 8.15 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.40 € | **8.20 €** | 37.7 % | **34.4 %** | 8.29 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.80 € | **9.60 €** | 26.3 % | **23.7 %** | 9.69 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.80 €** | 41.8 % | **32.4 %** | 2.84 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.80 €** | 41.0 % | **31.6 %** | 2.84 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.80 € | **5.60 €** | 28.8 % | **24.4 %** | 5.69 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.90 € | **7.70 €** | 34.9 % | **31.5 %** | 7.79 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.90 € | **6.70 €** | 35.8 % | **31.9 %** | 6.79 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 7.40 € | **7.20 €** | 26.7 % | **23.2 %** | 7.29 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.60 € | **2.40 €** | 18.8 % | **9.6 %** | 2.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 4.20 € | **4.00 €** | 15.8 % | **10.2 %** | 4.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **4.80 €** | 28.2 % | **23.1 %** | 4.89 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.40 €** | 44.5 % | **26.5 %** | 1.50 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 0.98 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 1.00 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.20 € | **1.00 €** | 59.9 % | **33.3 %** | 1.02 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.70 €** | 47.1 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.40 € | **1.20 €** | 47.8 % | **26.7 %** | 1.28 € | stávame sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.90 €** | 46.2 % | **39.1 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.20 € | **8.00 €** | 12.4 % | **9.7 %** | 8.09 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.60 € | **7.40 €** | 29.8 % | **26.4 %** | 7.49 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 443.00 € | **442.90 €** | 6.4 % | **6.4 %** | 442.97 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT315A | 308.00 € | **307.90 €** | 14.7 % | **14.6 %** | 307.99 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.00 € | **17.90 €** | 7.4 % | **6.8 %** | 16.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 24.00 € | **23.90 €** | 5.8 % | **5.4 %** | 23.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 26.00 € | **25.90 €** | 7.0 % | **6.6 %** | 25.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.00 € | **20.90 €** | 7.4 % | **6.9 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 26.4 % | **25.8 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.00 € | **19.90 €** | 15.2 % | **14.7 %** | 19.96 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.90 €** | 54.5 % | **54.2 %** | 47.97 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.00 € | **16.90 €** | 9.4 % | **8.8 %** | 16.99 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.90 €** | 39.2 % | **38.6 %** | 22.99 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.00 € | **28.90 €** | 9.2 % | **8.8 %** | 28.99 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **20.90 €** | 30.3 % | **29.7 %** | 20.99 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/B | 17.00 € | **16.90 €** | 14.6 % | **13.9 %** | 16.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 20.00 € | **19.90 €** | 24.7 % | **24.1 %** | 19.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.30 €** | 45.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.80 €** | 45.4 % | **42.9 %** | 5.89 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.80 €** | 23.4 % | **19.2 %** | 2.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.80 €** | 26.3 % | **23.1 %** | 3.85 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.10 €** | 32.1 % | **27.9 %** | 3.16 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.60 € | **3.50 €** | 24.5 % | **21.1 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.50 €** | 15.7 % | **12.5 %** | 3.59 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.70 € | **3.60 €** | 45.3 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.90 €** | 23.2 % | **17.0 %** | 1.99 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.10 €** | 43.5 % | **31.5 %** | 1.14 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.10 €** | 39.4 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 23.6 % | **17.1 %** | 1.89 € | stávame sa najlacnejší |
| Salente Combo-Hepa | 12.00 € | **11.90 €** | 8.4 % | **7.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.00 € | **11.90 €** | 9.4 % | **8.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Defender Taška na notebook 15,6", Geek | 14.00 € | **13.90 €** | 6.7 % | **5.9 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.95 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.90 €** | 38.5 % | **37.5 %** | 12.96 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.96 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.96 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.30 € | **4.20 €** | 35.5 % | **32.4 %** | 4.26 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 13.4 % | **11.8 %** | 7.06 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.50 €** | 54.6 % | **52.9 %** | 9.57 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.40 € | **9.30 €** | 11.2 % | **10.1 %** | 9.37 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.77 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 14.00 € | **13.90 €** | 32.8 % | **31.9 %** | 13.99 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.80 €** | 28.2 % | **26.9 %** | 9.89 € | stávame sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.00 € | **11.90 €** | 9.3 % | **8.3 %** | 11.99 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 28.3 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 8.7 % | **7.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.99 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.20 €** | 38.7 % | **35.5 %** | 4.29 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 10.00 € | **9.90 €** | 31.8 % | **30.5 %** | 9.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.90 €** | 36.9 % | **35.2 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.80 €** | 17.1 % | **15.8 %** | 8.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.40 €** | 38.9 % | **37.0 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 106.00 € | **105.90 €** | 13.7 % | **13.6 %** | 105.99 € | stávame sa najlacnejší |
| G3ferrari G1020400 Pizza trouba, 2 min | 221.00 € | **220.90 €** | 8.0 % | **7.9 %** | 220.99 € | stávame sa najlacnejší |

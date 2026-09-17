# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-17

Vstup: `premiumstore-sk_2026-09-17_10-11.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6640**
- Návrh **zvýšiť** cenu: **106** produktov
- Návrh **znížiť** cenu: **1508** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5026** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **557**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **309**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (106)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| JBL 430406 Partybox 710 - black | 533.90 € | **548.00 €** | 10.0 % | **13.0 %** | 533.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 463.00 € | **472.00 €** | 7.0 % | **9.1 %** | 463.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.0 % | **15.2 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 897.00 € | **901.50 €** | 14.0 % | **14.6 %** | 897.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL PBM100 Black | 35.90 € | **39.00 €** | 11.2 % | **20.8 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 42.90 € | **45.50 €** | 14.6 % | **21.5 %** | 42.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **64.00 €** | 19.8 % | **24.7 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 32.50 € | **34.90 €** | 9.8 % | **17.9 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 30.90 € | **33.00 €** | 16.3 % | **24.2 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 37.90 € | **39.90 €** | 11.0 % | **16.8 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TricutBrush 2.0 L10 Ultra/L10s Ultra/L20 Ultra/L20 U... | 38.00 € | **40.00 €** | 14.5 % | **20.5 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 9.60 € | **11.50 €** | 40.9 % | **68.8 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.60 € | **11.50 €** | 14.4 % | **37.1 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **23.90 €** | 25.3 % | **36.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.50 €** | 10.2 % | **13.0 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, 20 - 200A | 5.10 € | **6.70 €** | 6.6 % | **40.0 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **15.50 €** | 20.1 % | **33.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.50 €** | 20.1 % | **40.2 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LG DSTWH | 69.50 € | **71.00 €** | 10.4 % | **12.8 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 68.50 € | **69.90 €** | 10.7 % | **12.9 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Blue | 68.50 € | **69.90 €** | 10.7 % | **12.9 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ORYX X220 Iris | 19.50 € | **20.90 €** | 10.2 % | **18.1 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Aquabelo 1264 90000, černý/bílý | 44.50 € | **45.90 €** | 11.1 % | **14.6 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 22.50 € | **23.90 €** | 14.0 % | **21.1 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 31.90 € | **33.00 €** | 14.5 % | **18.4 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 47.50 € | **48.50 €** | 11.1 % | **13.4 %** | 48.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.50 € | **15.50 €** | 22.4 % | **30.9 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Pegasus 150 Solid Slim | 28.50 € | **29.50 €** | 6.7 % | **10.5 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 14.90 € | **15.90 €** | 39.9 % | **49.3 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.00 € | **114.90 €** | 9.6 % | **10.4 %** | 114.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná dekorácia vianočný stromček, 24... | 3.30 € | **4.00 €** | 19.8 % | **45.2 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 17.90 € | **18.50 €** | 6.1 % | **9.7 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic TPU (čierny) 1 kg | 20.90 € | **21.50 €** | 8.5 % | **11.6 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hyper PLA Filament Creality (Blue) | 12.90 € | **13.50 €** | 16.4 % | **21.8 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 123.90 € | **124.50 €** | 13.3 % | **13.8 %** | 123.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.00 € | **19.50 €** | 31.5 % | **34.9 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.00 € | **17.50 €** | 27.7 % | **31.5 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **12.50 €** | 47.4 % | **53.5 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.00 € | **12.50 €** | 31.0 % | **36.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 41.00 € | **41.50 €** | 4.9 % | **6.1 %** | 41.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Odšťavovač G21 Gracioso horizontal | 205.00 € | **205.50 €** | 14.6 % | **14.8 %** | 205.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| EMS posilovač svalů HMS ABS Master PRO Multiset | 47.00 € | **47.50 €** | 7.2 % | **8.3 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 32.00 € | **32.50 €** | 15.7 % | **17.5 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Onyx | 57.00 € | **57.50 €** | 14.4 % | **15.4 %** | 57.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.00 € | **41.50 €** | 7.0 % | **8.3 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 114.00 € | **114.50 €** | 12.4 % | **12.9 %** | 114.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Mercusys MC230 IP, 5MPx, WiFi, prísvit | 22.00 € | **22.50 €** | 6.7 % | **9.1 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.00 € | **23.50 €** | 7.3 % | **9.6 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.00 € | **12.50 €** | 12.5 % | **17.2 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 7.5 % | **10.5 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 112.00 € | **112.50 €** | 9.8 % | **10.3 %** | 112.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.50 € | **41.00 €** | 10.8 % | **12.1 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 49dB | 24.00 € | **24.50 €** | 22.9 % | **25.4 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.00 € | **22.50 €** | 6.9 % | **9.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| WHIRLPOOL WI 7020 P | 331.00 € | **331.50 €** | 8.0 % | **8.1 %** | 331.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Comfort Graphite Black | 150.50 € | **150.90 €** | 12.0 % | **12.3 %** | 150.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Chamber Line 30 | 175.50 € | **175.90 €** | 7.6 % | **7.8 %** | 175.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 119.50 € | **119.90 €** | 9.4 % | **9.8 %** | 119.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 13.50 € | **13.90 €** | 4.6 % | **7.7 %** | 13.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| HP Wireless Mouse 220 Black | 13.50 € | **13.90 €** | 10.5 % | **13.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky C10 (biele) | 12.50 € | **12.90 €** | 7.8 % | **11.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 39.50 € | **39.90 €** | 23.6 % | **24.8 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 18.50 € | **18.90 €** | 4.2 % | **6.4 %** | 18.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Profesionálny digitálny multimeter UNI-T UT191E | 58.50 € | **58.90 €** | 9.8 % | **10.6 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 18.50 € | **18.90 €** | 15.3 % | **17.8 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 26.50 € | **26.90 €** | 19.5 % | **21.3 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 19.50 € | **19.90 €** | 8.4 % | **10.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 16.50 € | **16.90 €** | 11.1 % | **13.8 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C206 IP, 2MPx, WiFi, prísvit | 34.50 € | **34.90 €** | 6.5 % | **7.7 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 54.50 € | **54.90 €** | 5.1 % | **5.9 %** | 54.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.2 % | **12.7 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Redmi Buds 8 Lite Black | 19.50 € | **19.90 €** | 6.8 % | **8.9 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **35.90 €** | 6.0 % | **7.1 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.50 € | **17.90 €** | 10.7 % | **13.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 365.50 € | **365.90 €** | 9.2 % | **9.3 %** | 365.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 344.50 € | **344.90 €** | 6.6 % | **6.7 %** | 344.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 286.50 € | **286.90 €** | 6.0 % | **6.2 %** | 286.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 504.50 € | **504.90 €** | 6.3 % | **6.4 %** | 504.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 8.80 € | **9.10 €** | 19.6 % | **23.7 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslařský trenažér HMS Premium ZW1600 | 670.90 € | **671.00 €** | 121110.5 % | **121128.5 %** | 670.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 368.90 € | **369.00 €** | 66548.6 % | **66566.7 %** | 368.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BMTD37146W | 382.90 € | **383.00 €** | 6.3 % | **6.3 %** | 382.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.90 € | **33.00 €** | 13.8 % | **14.2 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **17.00 €** | 23.9 % | **24.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40T | 28.90 € | **29.00 €** | 12.4 % | **12.8 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.90 € | **64.00 €** | 10.5 % | **10.7 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Buxton BHP 7300 BLACK BT | 21.90 € | **22.00 €** | 10.5 % | **11.0 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (zelený) | 20.90 € | **21.00 €** | 9.0 % | **9.5 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (ružový) | 20.90 € | **21.00 €** | 9.0 % | **9.5 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (žltý) | 20.90 € | **21.00 €** | 9.0 % | **9.5 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 7.30 € | **7.40 €** | 18.5 % | **20.1 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 7.80 € | **7.90 €** | 36.7 % | **38.4 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.00 €** | 10.1 % | **10.9 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.60 €** | 33.9 % | **35.3 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 8.30 € | **8.40 €** | 20.9 % | **22.4 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.00 €** | 27.7 % | **29.3 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.10 € | **9.20 €** | 24.3 % | **25.7 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42102SV | 80.90 € | **81.00 €** | 9.0 % | **9.1 %** | 80.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1502 | 232.90 € | **233.00 €** | 41977.7 % | **41995.8 %** | 232.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 44GW | 198.90 € | **199.00 €** | 6.2 % | **6.3 %** | 198.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung The Frame Pro QE75LS03HW | 2648.90 € | **2649.00 €** | 8.6 % | **8.6 %** | 2648.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1508)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 7402.00 € | **6758.90 €** | 15.0 % | **5.0 %** | 6496.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3641.00 € | **3349.50 €** | 15.0 % | **5.8 %** | 3349.70 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2634.00 €** | 15.0 % | **5.5 %** | 2634.19 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S99H | 3613.00 € | **3448.90 €** | 10.0 % | **5.0 %** | 3100.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE65S99H | 2924.90 € | **2791.90 €** | 10.0 % | **5.0 %** | 2699.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2649.90 € | **2529.50 €** | 10.0 % | **5.0 %** | 1726.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1600.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 85C8K QD-MiniLED 4K SMART Google TV | 2256.50 € | **2153.50 €** | 10.0 % | **5.0 %** | 2046.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr Fold 16+512GB Blue | 2190.50 € | **2090.90 €** | 10.0 % | **5.0 %** | 1395.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 2193.50 € | **2093.90 €** | 10.0 % | **5.0 %** | 2059.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1823.90 € | **1740.90 €** | 10.0 % | **5.0 %** | 1691.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 512GB Deep Blue | 1721.90 € | **1643.90 €** | 10.0 % | **5.0 %** | 1420.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 512GB Orange | 1721.90 € | **1643.90 €** | 10.0 % | **5.0 %** | 1490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 303.50 € | **228.90 €** | 43.2 % | **8.0 %** | 229.00 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT F2400 2400 W (zelená) | 806.50 € | **736.90 €** | 15.0 % | **5.1 %** | 737.00 € | stávame sa najlacnejší |
| Xiaomi 17 Ultra 16/512GB Black | 1522.90 € | **1453.90 €** | 10.0 % | **5.0 %** | 1102.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE65S85H | 1370.90 € | **1308.50 €** | 10.0 % | **5.0 %** | 1308.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr 70 Ultra 16+512GB Blue | 1358.00 € | **1296.50 €** | 10.0 % | **5.0 %** | 1219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono M7 Max | 709.50 € | **648.90 €** | 15.0 % | **5.2 %** | 649.00 € | stávame sa najlacnejší |
| 3D tlačiareň QiDi Q2 Combo | 684.50 € | **625.00 €** | 15.0 % | **5.0 %** | 538.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 2 Pro White | 1275.90 € | **1217.90 €** | 10.0 % | **5.0 %** | 818.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox Ultimate | 1283.90 € | **1225.90 €** | 10.0 % | **5.0 %** | 1109.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 151.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 188.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 600.90 € | **548.90 €** | 15.0 % | **5.0 %** | 532.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 355.00 € | **303.50 €** | 73904.6 % | **63168.7 %** | 303.75 € | stávame sa najlacnejší |
| MOTOROLA Signature 16+512GB Carbon | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 773.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Olive | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 799.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIS8959 | 1062.50 € | **1014.50 €** | 10.0 % | **5.0 %** | 967.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1049.50 € | **1001.90 €** | 10.0 % | **5.0 %** | 968.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nano projektor JMGO N1S | 496.50 € | **453.50 €** | 15.0 % | **5.0 %** | 384.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 Ultra 12/256GB Black | 927.90 € | **885.50 €** | 10.0 % | **5.0 %** | 771.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 85.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Bar 800 MK2 Soundbar | 920.90 € | **878.90 €** | 10.0 % | **5.0 %** | 762.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 459.50 € | **417.50 €** | 24.4 % | **13.0 %** | 417.60 € | stávame sa najlacnejší |
| JBL Bar 1000 MK2 Soundbar | 987.90 € | **946.90 €** | 10.0 % | **5.5 %** | 947.00 € | stávame sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Blue | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 574.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Red | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 622.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBS312ASW | 855.50 € | **816.50 €** | 10.0 % | **5.0 %** | 718.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 142.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE19S | 820.50 € | **783.50 €** | 10.0 % | **5.1 %** | 696.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 835.90 € | **798.90 €** | 15.0 % | **9.9 %** | 799.00 € | stávame sa najlacnejší |
| POCO F9 PRO 12/256GB Black | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Green | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB White | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 415.00 € | **379.50 €** | 15.0 % | **5.1 %** | 339.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE18S1 | 752.50 € | **718.00 €** | 10.1 % | **5.0 %** | 637.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 394.00 € | **359.90 €** | 15.0 % | **5.0 %** | 322.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 Pro 12/512GB Green (72207) | 742.50 € | **708.90 €** | 10.0 % | **5.0 %** | 607.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň CREALITY SparkX i7 Combo | 391.50 € | **357.90 €** | 15.0 % | **5.1 %** | 318.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 387.00 € | **353.50 €** | 15.0 % | **5.0 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **461.00 €** | 15.0 % | **7.2 %** | 461.19 € | stávame sa najlacnejší |
| Electrolux EW8F5412SAC | 709.90 € | **677.90 €** | 10.0 % | **5.1 %** | 665.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 693.90 € | **662.50 €** | 10.1 % | **5.1 %** | 610.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, ... | 144.90 € | **113.90 €** | 33.7 % | **5.1 %** | 97.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Plus | 354.00 € | **323.50 €** | 15.0 % | **5.1 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Blue | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 438.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Wood | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 481.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 796.90 € | **766.90 €** | 10.0 % | **5.9 %** | 767.00 € | stávame sa najlacnejší |
| JBL PartyBox 520 | 655.00 € | **625.50 €** | 10.0 % | **5.1 %** | 567.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 313.00 € | **284.90 €** | 26.2 % | **14.9 %** | 284.96 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 596.90 € | **569.50 €** | 10.1 % | **5.0 %** | 557.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FASR3A04WS | 591.50 € | **564.50 €** | 10.1 % | **5.1 %** | 492.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 130.00 € | **103.00 €** | 32.5 % | **5.0 %** | 102.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 914.50 € | **887.90 €** | 10.0 % | **6.8 %** | 888.00 € | stávame sa najlacnejší |
| Electrolux EOC6H76X | 572.90 € | **546.90 €** | 10.0 % | **5.0 %** | 460.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS5B70CLI | 569.50 € | **543.50 €** | 10.0 % | **5.0 %** | 470.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 551.00 € | **525.90 €** | 10.0 % | **5.0 %** | 447.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 556.90 € | **531.90 €** | 10.0 % | **5.1 %** | 467.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **408.50 €** | 15.0 % | **8.5 %** | 408.69 € | stávame sa najlacnejší |
| LENOVO LEGION TAB (ZAEF0021CZ) | 530.90 € | **506.50 €** | 10.1 % | **5.0 %** | 459.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BDIN38640D | 532.50 € | **508.50 €** | 10.0 % | **5.1 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV A Pro 65 2026 | 529.50 € | **505.50 €** | 10.0 % | **5.0 %** | 432.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRS8182KX | 525.90 € | **501.90 €** | 10.0 % | **5.0 %** | 494.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AX | 515.50 € | **491.90 €** | 10.1 % | **5.0 %** | 447.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - PlayStation VR2 | 525.00 € | **501.50 €** | 10.0 % | **5.1 %** | 425.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TT-S303 BLACK | 511.50 € | **488.50 €** | 10.0 % | **5.1 %** | 439.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 506.50 € | **483.50 €** | 10.1 % | **5.1 %** | 477.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBSJ21DPY | 497.50 € | **474.90 €** | 10.1 % | **5.1 %** | 398.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EES5 | 493.50 € | **471.00 €** | 10.0 % | **5.0 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS6C70WPA | 499.90 € | **477.50 €** | 10.0 % | **5.1 %** | 415.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BRS 7N3BX-S | 482.90 € | **460.90 €** | 10.1 % | **5.1 %** | 404.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38441P | 484.50 € | **462.50 €** | 10.1 % | **5.1 %** | 415.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 486.90 € | **464.90 €** | 10.0 % | **5.1 %** | 442.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RP619EEW5 | 482.50 € | **460.50 €** | 10.1 % | **5.0 %** | 444.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 79.50 € | **57.50 €** | 59.1 % | **15.1 %** | 57.90 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 560.50 € | **538.90 €** | 10.0 % | **5.8 %** | 539.00 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 465.50 € | **444.00 €** | 10.1 % | **5.0 %** | 379.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 103.90 € | **82.50 €** | 32.6 % | **5.3 %** | 79.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 465.50 € | **444.50 €** | 10.1 % | **5.1 %** | 333.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/128GB Green (71768) | 458.90 € | **437.90 €** | 10.1 % | **5.0 %** | 363.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZTE Nubia Air Pro 5G bílý | 459.50 € | **438.50 €** | 10.1 % | **5.1 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3WFU4841MCC | 461.50 € | **440.50 €** | 10.0 % | **5.0 %** | 432.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **657.50 €** | 15.0 % | **11.4 %** | 657.51 € | stávame sa najlacnejší |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 477.00 € | **456.00 €** | 15.0 % | **9.9 %** | 456.23 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 548.50 € | **527.90 €** | 10.0 % | **5.9 %** | 528.00 € | stávame sa najlacnejší |
| LG FA2S8V3GN3W | 444.90 € | **424.50 €** | 10.1 % | **5.0 %** | 358.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNA416HXBR | 456.90 € | **436.50 €** | 10.0 % | **5.1 %** | 436.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Centauri 2 Combo | 379.00 € | **358.90 €** | 15.0 % | **8.9 %** | 359.00 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 439.50 € | **419.50 €** | 10.0 % | **5.0 %** | 384.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620EABK4 | 445.50 € | **425.50 €** | 10.1 % | **5.1 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 9N3B-S | 434.90 € | **414.90 €** | 10.1 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540XP | 461.90 € | **441.90 €** | 10.1 % | **5.3 %** | 442.00 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **406.00 €** | 15.0 % | **9.6 %** | 406.19 € | stávame sa najlacnejší |
| Guzzanti GZ 340A | 431.90 € | **412.00 €** | 10.1 % | **5.0 %** | 383.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 10N3B-S | 468.90 € | **449.00 €** | 10.1 % | **5.4 %** | 449.10 € | stávame sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 431.50 € | **411.90 €** | 10.0 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 65P6K 4K SMART Google TV | 437.50 € | **417.90 €** | 10.0 % | **5.1 %** | 393.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 422.50 € | **403.00 €** | 10.1 % | **5.0 %** | 403.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620EAW4 | 414.90 € | **395.90 €** | 10.1 % | **5.0 %** | 377.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V860III TTL pre Sony | 218.90 € | **199.90 €** | 15.0 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K2 Pro Combo | 767.00 € | **748.90 €** | 12.2 % | **9.5 %** | 749.00 € | stávame sa najlacnejší |
| Samsung Mini LED UE43M70H | 395.50 € | **377.50 €** | 10.0 % | **5.0 %** | 284.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HII64600AFT | 390.50 € | **372.50 €** | 10.1 % | **5.0 %** | 284.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 396.90 € | **378.90 €** | 10.0 % | **5.1 %** | 319.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90X | 394.90 € | **376.90 €** | 10.1 % | **5.1 %** | 323.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BM3WFU3941WBW | 391.50 € | **373.50 €** | 10.1 % | **5.0 %** | 347.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WDSI96A | 391.50 € | **373.50 €** | 10.1 % | **5.0 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 396.90 € | **378.90 €** | 10.1 % | **5.1 %** | 374.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 67.50 € | **49.50 €** | 44.0 % | **5.6 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL TDLRB 65242BS EU/N | 379.50 € | **361.90 €** | 10.1 % | **5.0 %** | 335.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje DE69CS | 516.50 € | **498.90 €** | 10.1 % | **6.3 %** | 499.00 € | stávame sa najlacnejší |
| Thomas Aqua + Pet & Family | 381.50 € | **364.00 €** | 10.1 % | **5.0 %** | 299.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 384.90 € | **367.50 €** | 10.0 % | **5.0 %** | 363.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON MAXIFY GX1040 | 383.00 € | **365.90 €** | 10.0 % | **5.1 %** | 282.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Party reproduktor JBL PartyBox 130 | 377.00 € | **359.90 €** | 10.0 % | **5.0 %** | 345.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 374.90 € | **357.90 €** | 10.1 % | **5.1 %** | 327.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 366.50 € | **349.50 €** | 10.1 % | **5.0 %** | 324.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 274.90 € | **258.00 €** | 18.2 % | **10.9 %** | 258.30 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 358.50 € | **342.00 €** | 10.1 % | **5.0 %** | 254.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **174.50 €** | 15.0 % | **5.1 %** | 166.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 137.50 € | **121.00 €** | 27165.5 % | **23893.7 %** | 121.03 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT705 | 289.00 € | **272.50 €** | 15.0 % | **8.4 %** | 272.68 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 53.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo Chamber Line 70 | 360.90 € | **344.50 €** | 10.0 % | **5.0 %** | 331.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás MERACH MR-T25B2 | 372.90 € | **356.50 €** | 15.1 % | **10.0 %** | 356.52 € | stávame sa najlacnejší |
| ETA Storio II 2043 90030 černá | 347.90 € | **331.90 €** | 10.1 % | **5.0 %** | 267.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 595.50 € | **579.50 €** | 8.0 % | **5.1 %** | 530.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.50 € | **62.50 €** | 32.8 % | **5.7 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.50 € | **62.50 €** | 32.8 % | **5.7 %** | 57.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 235 | 459.90 € | **443.90 €** | 10.0 % | **6.2 %** | 444.00 € | stávame sa najlacnejší |
| JBL PartyBox 330W | 565.50 € | **549.90 €** | 10.0 % | **7.0 %** | 550.00 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 347.90 € | **332.50 €** | 10.0 % | **5.2 %** | 321.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMSR58CU1SX | 344.90 € | **329.50 €** | 10.0 % | **5.1 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO B5RCNA406HXB3 | 536.90 € | **521.50 €** | 10.0 % | **6.9 %** | 521.90 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 540.90 € | **525.50 €** | 10.0 % | **6.9 %** | 525.90 € | stávame sa najlacnejší |
| Whirlpool MWSC 833 SB | 331.50 € | **316.50 €** | 10.1 % | **5.2 %** | 249.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL TOUR ONE M3, Black | 332.50 € | **317.50 €** | 10.1 % | **5.1 %** | 253.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL TOUR ONE M3, Latte | 332.50 € | **317.50 €** | 10.1 % | **5.1 %** | 253.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL BAR 2.1 Deep Bass MK2 | 328.90 € | **313.90 €** | 10.0 % | **5.0 %** | 272.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL CINEMA SB580 | 323.50 € | **308.50 €** | 10.1 % | **5.0 %** | 279.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 110G | 331.50 € | **316.50 €** | 10.1 % | **5.2 %** | 299.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 43.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5XRCNA366HXB | 524.50 € | **509.50 €** | 10.1 % | **6.9 %** | 509.90 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 498.50 € | **483.90 €** | 10.1 % | **6.8 %** | 484.00 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 333.50 € | **318.90 €** | 10.0 % | **5.2 %** | 319.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **54.50 €** | 58.9 % | **25.5 %** | 54.62 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 376.90 € | **362.50 €** | 10.1 % | **5.9 %** | 362.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G57 Power 12+256GB Green | 305.50 € | **291.50 €** | 10.2 % | **5.1 %** | 228.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (str... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 103.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 313.90 € | **299.90 €** | 10.0 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 303.90 € | **289.90 €** | 10.1 % | **5.1 %** | 283.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38646D | 509.90 € | **495.90 €** | 10.0 % | **7.0 %** | 496.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **216.50 €** | 15.0 % | **8.0 %** | 216.63 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 483.50 € | **469.50 €** | 10.0 % | **6.8 %** | 469.90 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 301.50 € | **287.90 €** | 10.0 % | **5.1 %** | 254.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Boombox4 Black Přenosný reproduktor | 472.50 € | **458.90 €** | 10.0 % | **6.8 %** | 459.00 € | stávame sa najlacnejší |
| Concept LA8383DS | 760.50 € | **746.90 €** | 10.0 % | **8.1 %** | 747.00 € | stávame sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 340.50 € | **326.90 €** | 10.1 % | **5.7 %** | 327.00 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 457.50 € | **443.90 €** | 10.1 % | **6.8 %** | 444.00 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **39.00 €** | 50.5 % | **11.8 %** | 39.16 € | stávame sa najlacnejší |
| Okuliare RayNeo X3 Pro AR | 1549.90 € | **1536.50 €** | 15.0 % | **14.0 %** | 1536.90 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 229.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY STRDH190 | 297.90 € | **284.50 €** | 10.1 % | **5.1 %** | 274.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox On-The-GO 2 | 300.90 € | **287.50 €** | 10.0 % | **5.1 %** | 280.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D SILVER | 284.50 € | **271.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CCH1S518EW | 284.50 € | **271.50 €** | 10.1 % | **5.1 %** | 238.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CIO 225 EE/N | 286.50 € | **273.50 €** | 10.1 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 335.00 € | **322.00 €** | 14.9 % | **10.5 %** | 322.01 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **516.50 €** | 15.0 % | **12.2 %** | 516.90 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R25 RS091 | 1008.50 € | **995.50 €** | 15.0 % | **13.5 %** | 995.90 € | stávame sa najlacnejší |
| Electrolux EOF3H50BK | 281.50 € | **268.90 €** | 10.1 % | **5.1 %** | 207.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF3H40TH | 272.50 € | **259.90 €** | 10.1 % | **5.0 %** | 234.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tour Pro 3 Black | 272.50 € | **260.00 €** | 10.1 % | **5.0 %** | 224.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tour Pro 3 Latte | 272.50 € | **260.00 €** | 10.1 % | **5.0 %** | 224.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox Encore 2 | 285.00 € | **272.50 €** | 10.0 % | **5.2 %** | 269.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **295.00 €** | 15.0 % | **10.3 %** | 295.08 € | stávame sa najlacnejší |
| Beko BU1154HCN | 281.90 € | **269.50 €** | 10.0 % | **5.2 %** | 265.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 447 ADW | 424.90 € | **412.50 €** | 10.1 % | **6.8 %** | 412.90 € | stávame sa najlacnejší |
| Amica GWAS610DL | 255.50 € | **243.50 €** | 10.2 % | **5.0 %** | 215.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **102.50 €** | 17.4 % | **5.1 %** | 84.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Akčná kamera SJCAM C300 | 141.90 € | **129.90 €** | 15.0 % | **5.3 %** | 129.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Akčná kamera SJCAM C300 | 141.90 € | **129.90 €** | 15.0 % | **5.3 %** | 129.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.50 €** | 50.2 % | **38.5 %** | 141.81 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 380.50 € | **368.50 €** | 10.1 % | **6.6 %** | 368.90 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 407.50 € | **395.50 €** | 10.1 % | **6.8 %** | 395.90 € | stávame sa najlacnejší |
| Beko CF200EWN | 259.90 € | **248.00 €** | 10.1 % | **5.0 %** | 214.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMK38HU0B | 259.90 € | **248.00 €** | 10.0 % | **5.0 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BRS 7N2BX-S | 410.50 € | **398.90 €** | 10.1 % | **7.0 %** | 399.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CDG1S514DW | 255.50 € | **243.90 €** | 10.0 % | **5.0 %** | 229.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S201 SILVER | 247.50 € | **235.90 €** | 10.2 % | **5.1 %** | 235.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT685II TTL pre Sony | 137.00 € | **125.50 €** | 15.0 % | **5.3 %** | 124.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 750 | 125.00 € | **113.50 €** | 20.6 % | **9.5 %** | 113.60 € | stávame sa najlacnejší |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 44.00 € | **32.50 €** | 58.8 % | **17.3 %** | 32.90 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 250.90 € | **239.50 €** | 10.0 % | **5.0 %** | 228.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S201 BLACK | 246.90 € | **235.50 €** | 10.1 % | **5.0 %** | 235.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **200.50 €** | 18.5 % | **12.1 %** | 200.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 39.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DI 6412 CB | 280.90 € | **269.50 €** | 10.1 % | **5.7 %** | 269.90 € | stávame sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **119.90 €** | 14.9 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 94.00 € | **82.90 €** | 19.1 % | **5.0 %** | 80.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 233.50 € | **222.50 €** | 10.2 % | **5.0 %** | 91.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 243.90 € | **232.90 €** | 10.1 % | **5.1 %** | 187.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 206.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 217.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Partybox Stage 320 | 429.90 € | **418.90 €** | 10.0 % | **7.2 %** | 419.00 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 358.90 € | **347.90 €** | 10.1 % | **6.7 %** | 348.00 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1559.50 € | **1548.50 €** | 10.0 % | **9.3 %** | 1548.90 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 4/128GB (ZAFR0018CZ) | 228.50 € | **217.90 €** | 10.2 % | **5.1 %** | 187.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC772830 | 226.50 € | **215.90 €** | 10.2 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406B 700W 12V | 124.50 € | **113.90 €** | 15.0 % | **5.2 %** | 109.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Router GL.iNet Slate 7 | 208.00 € | **197.50 €** | 14.9 % | **9.1 %** | 197.60 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Canon | 137.00 € | **126.50 €** | 15.0 % | **6.1 %** | 126.60 € | stávame sa najlacnejší |
| ETA 410090000 | 341.00 € | **330.50 €** | 10.0 % | **6.6 %** | 330.90 € | stávame sa najlacnejší |
| G3Ferrari G2017500 | 229.90 € | **219.50 €** | 10.0 % | **5.1 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 145.90 € | **135.50 €** | 15.4 % | **7.2 %** | 135.90 € | stávame sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica DRP 6412 DW | 217.50 € | **207.50 €** | 10.2 % | **5.2 %** | 158.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 220.00 € | **210.00 €** | 10.0 % | **5.0 %** | 175.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **110.50 €** | 14.8 % | **5.3 %** | 83.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 205.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 31.50 € | **21.50 €** | 54.7 % | **5.6 %** | 21.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 69.50 € | **59.50 €** | 43.9 % | **23.2 %** | 59.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 31.50 € | **21.50 €** | 59.3 % | **8.7 %** | 21.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 37.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 49.50 € | **39.90 €** | 47.9 % | **19.2 %** | 39.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 31.00 € | **21.50 €** | 53.7 % | **6.6 %** | 19.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 98.50 € | **89.00 €** | 17.8 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.00 € | **73.90 €** | 17.9 % | **5.0 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 471.90 € | **462.90 €** | 7.1 % | **5.0 %** | 436.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 1226 | 195.50 € | **186.50 €** | 10.1 % | **5.1 %** | 172.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2011300 | 205.50 € | **196.50 €** | 10.1 % | **5.2 %** | 191.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 113.50 € | **104.50 €** | 43.9 % | **32.5 %** | 104.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **42.00 €** | 44.2 % | **19.0 %** | 42.50 € | stávame sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 507.50 € | **498.90 €** | 10.0 % | **8.2 %** | 499.00 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **37.90 €** | 28.9 % | **5.0 %** | 34.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 131.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 103RB | 218.50 € | **209.90 €** | 10.2 % | **5.9 %** | 210.00 € | stávame sa najlacnejší |
| Tefal GC728D10 | 182.50 € | **174.00 €** | 10.2 % | **5.0 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **330.50 €** | 15.0 % | **12.1 %** | 330.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 104.50 € | **96.00 €** | 43.9 % | **32.2 %** | 96.37 € | stávame sa najlacnejší |
| Tefal GV 9620E0 | 374.00 € | **365.50 €** | 10.0 % | **7.5 %** | 365.90 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 221.90 € | **213.50 €** | 10.1 % | **5.9 %** | 213.75 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 497.00 € | **488.90 €** | 6.8 % | **5.0 %** | 462.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 26.00 € | **17.90 €** | 54.3 % | **6.2 %** | 17.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 75.00 € | **66.90 €** | 18.3 % | **5.5 %** | 66.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **81.90 €** | 17.4 % | **6.9 %** | 82.00 € | stávame sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 172.50 € | **164.50 €** | 10.1 % | **5.0 %** | 122.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, bílý | 167.50 € | **159.50 €** | 10.3 % | **5.1 %** | 123.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, červený | 167.50 € | **159.50 €** | 10.3 % | **5.1 %** | 123.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, fialový | 167.50 € | **159.50 €** | 10.3 % | **5.1 %** | 123.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, růžový | 167.50 € | **159.50 €** | 10.3 % | **5.1 %** | 123.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 177.50 € | **169.50 €** | 10.1 % | **5.1 %** | 141.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX U-Box J42 Nano/bez OS | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 155.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 166.50 € | **158.50 €** | 10.3 % | **5.0 %** | 149.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 38.90 € | **30.90 €** | 33.2 % | **5.8 %** | 30.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-830SB-BLK Century Signature | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 171.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.90 € | **163.90 €** | 10.2 % | **5.1 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **33.00 €** | 38.3 % | **11.3 %** | 33.03 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **27.00 €** | 37.3 % | **5.9 %** | 27.24 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 53.50 € | **45.50 €** | 43.6 % | **22.1 %** | 45.90 € | stávame sa najlacnejší |
| JBL PartyBox 330 | 557.50 € | **549.90 €** | 10.1 % | **8.5 %** | 550.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.00 € | **21.50 €** | 44.7 % | **7.3 %** | 21.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 357.00 € | **349.50 €** | 9.3 % | **7.0 %** | 349.86 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 180.50 € | **173.00 €** | 10.1 % | **5.5 %** | 173.50 € | stávame sa najlacnejší |
| XIAOMI Mesh System AX3000 NE (3-pack) | 165.90 € | **158.50 €** | 10.0 % | **5.1 %** | 115.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LHR3233CK | 160.90 € | **153.50 €** | 10.1 % | **5.0 %** | 132.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.00 € | **25.90 €** | 34.2 % | **5.3 %** | 23.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-L6 | 158.00 € | **150.90 €** | 10.0 % | **5.1 %** | 145.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA EliteCook K70 Ultra | 147.90 € | **140.90 €** | 10.2 % | **5.0 %** | 109.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HIC 64401 | 154.00 € | **147.00 €** | 10.0 % | **5.0 %** | 135.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8501A | 157.50 € | **150.50 €** | 10.0 % | **5.1 %** | 144.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 166.90 € | **159.90 €** | 11.2 % | **6.5 %** | 159.95 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 505.90 € | **498.90 €** | 10.0 % | **8.5 %** | 499.00 € | stávame sa najlacnejší |
| Ultimea Poseidon R3T Soundbar | 90.00 € | **83.00 €** | 14.9 % | **6.0 %** | 83.22 € | stávame sa najlacnejší |
| Tefal OptiGrill 2v1 GC773D30 | 167.00 € | **160.00 €** | 10.1 % | **5.4 %** | 160.50 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 257.90 € | **250.90 €** | 8.0 % | **5.1 %** | 239.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO244SV | 147.90 € | **141.00 €** | 10.2 % | **5.0 %** | 132.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **25.90 €** | 59.9 % | **27.5 %** | 26.00 € | stávame sa najlacnejší |
| Rowenta RO4931EA | 135.50 € | **128.90 €** | 10.4 % | **5.0 %** | 106.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - PlayStation Pulse Elite + Case | 150.50 € | **143.90 €** | 10.0 % | **5.2 %** | 127.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC517DE0 | 139.50 € | **132.90 €** | 10.4 % | **5.2 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 147.50 € | **140.90 €** | 10.2 % | **5.2 %** | 132.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 77.50 € | **70.90 €** | 15.3 % | **5.5 %** | 69.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 35B1 | 143.00 € | **136.50 €** | 10.0 % | **5.0 %** | 126.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant PXN-V900 Gen2 | 99.50 € | **93.00 €** | 14.8 % | **7.3 %** | 93.06 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **865.50 €** | 15.0 % | **14.1 %** | 865.70 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 25.50 € | **19.00 €** | 55.1 % | **15.5 %** | 19.22 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 27.50 € | **21.00 €** | 51.2 % | **15.4 %** | 21.36 € | stávame sa najlacnejší |
| Akčná kamera SJCAM C200 Pro | 131.50 € | **125.00 €** | 15.1 % | **9.4 %** | 125.40 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **78.00 €** | 15.2 % | **6.3 %** | 78.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 22.50 € | **16.00 €** | 49.6 % | **6.4 %** | 16.49 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **19.00 €** | 59.8 % | **19.1 %** | 19.50 € | stávame sa najlacnejší |
| TESLA PrimeSound HQ-995X | 182.50 € | **176.00 €** | 10.0 % | **6.1 %** | 176.50 € | stávame sa najlacnejší |
| JBL Live Beam 3 Blue | 143.90 € | **137.50 €** | 10.1 % | **5.2 %** | 76.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Beam 3 Purple | 143.90 € | **137.50 €** | 10.1 % | **5.2 %** | 76.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Beam 3 Silver | 143.90 € | **137.50 €** | 10.1 % | **5.2 %** | 76.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Buds 3 Blue | 143.90 € | **137.50 €** | 10.1 % | **5.2 %** | 123.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Buds 3 Purple | 143.90 € | **137.50 €** | 10.1 % | **5.2 %** | 123.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Buds 3 Silver | 143.90 € | **137.50 €** | 10.1 % | **5.2 %** | 123.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex 3 Black | 136.90 € | **130.50 €** | 10.3 % | **5.1 %** | 117.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex 3 Blue | 136.90 € | **130.50 €** | 10.3 % | **5.1 %** | 117.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex 3 Purple | 136.90 € | **130.50 €** | 10.3 % | **5.1 %** | 117.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex 3 Silver | 136.90 € | **130.50 €** | 10.3 % | **5.1 %** | 117.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3RCSO255S | 281.00 € | **274.90 €** | 10.0 % | **7.6 %** | 275.00 € | stávame sa najlacnejší |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 142.00 € | **135.90 €** | 10.0 % | **5.3 %** | 130.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Low Sugar Rice Cooker 3000WT | 128.90 € | **122.90 €** | 10.2 % | **5.1 %** | 79.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Friendly Zoom FZ45 Black | 136.90 € | **130.90 €** | 10.0 % | **5.2 %** | 108.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO 4250 CLI | 137.50 € | **131.50 €** | 10.2 % | **5.4 %** | 109.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 131.00 € | **125.00 €** | 10.0 % | **5.0 %** | 108.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO354VD | 132.90 € | **126.90 €** | 10.1 % | **5.1 %** | 114.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW501815 | 136.90 € | **130.90 €** | 10.1 % | **5.2 %** | 122.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY8328E0 | 124.50 € | **118.50 €** | 10.4 % | **5.1 %** | 111.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava bezdrôtového zvončeka IMOU 2S | 73.50 € | **67.50 €** | 15.1 % | **5.7 %** | 62.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.50 € | **47.50 €** | 18.7 % | **5.4 %** | 43.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 70.50 € | **64.50 €** | 15.4 % | **5.6 %** | 61.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **128.50 €** | 10.0 % | **5.1 %** | 125.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 32.90 € | **26.90 €** | 29.0 % | **5.4 %** | 25.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 535.90 € | **529.90 €** | 8.0 % | **6.8 %** | 529.95 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 402.00 € | **396.00 €** | 15.0 % | **13.3 %** | 396.07 € | stávame sa najlacnejší |
| Nabíjačka SkyRC Q200neo | 128.50 € | **122.50 €** | 15.2 % | **9.8 %** | 122.63 € | stávame sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 29.00 € | **23.00 €** | 37.2 % | **8.8 %** | 23.25 € | stávame sa najlacnejší |
| Guzzanti GZ 161 | 248.50 € | **242.50 €** | 10.2 % | **7.5 %** | 242.90 € | stávame sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.90 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK14CPS4 | 289.90 € | **284.00 €** | 10.1 % | **7.8 %** | 284.50 € | stávame sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.50 € | **123.90 €** | 10.0 % | **5.3 %** | 102.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 119.50 € | **113.90 €** | 10.5 % | **5.3 %** | 113.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 3-pack) | 120.50 € | **115.00 €** | 10.1 % | **5.0 %** | 93.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.00 €** | 46.8 % | **5.4 %** | 6.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **12.50 €** | 53.9 % | **6.9 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **62.00 €** | 50.4 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Black&Decker BXDH12E | 166.50 € | **161.00 €** | 9.7 % | **6.0 %** | 161.37 € | stávame sa najlacnejší |
| JBL Reflect Aero black | 119.90 € | **114.50 €** | 10.1 % | **5.1 %** | 66.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Reflect Aero blue | 119.90 € | **114.50 €** | 10.1 % | **5.1 %** | 66.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Reflect Aero mint | 119.90 € | **114.50 €** | 10.1 % | **5.1 %** | 66.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Reflect Aero white | 119.90 € | **114.50 €** | 10.1 % | **5.1 %** | 66.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HNU61422B | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 88.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.90 € | **121.50 €** | 10.0 % | **5.4 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta HU4020F0 | 112.90 € | **107.50 €** | 10.4 % | **5.1 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips Mikrosystem TAM3505M2 | 113.90 € | **108.50 €** | 10.4 % | **5.1 %** | 87.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 W | 115.90 € | **110.50 €** | 10.4 % | **5.2 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 115.90 € | **110.50 €** | 10.4 % | **5.2 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA PowerWash & Steam Station TQS600 | 122.90 € | **117.50 €** | 10.1 % | **5.2 %** | 108.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 118.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFC55SGMXC | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 118.90 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER HL-L1232W | 118.00 € | **112.90 €** | 10.1 % | **5.3 %** | 110.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.00 € | **113.90 €** | 10.1 % | **5.3 %** | 112.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7550i White | 108.50 € | **103.50 €** | 10.4 % | **5.3 %** | 77.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RY6555WH | 106.50 € | **101.50 €** | 10.5 % | **5.3 %** | 82.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone Black and Grey | 107.50 € | **102.50 €** | 10.4 % | **5.2 %** | 86.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone Black and Lime | 107.50 € | **102.50 €** | 10.4 % | **5.2 %** | 86.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone Blue | 107.50 € | **102.50 €** | 10.4 % | **5.2 %** | 86.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone Purple | 107.50 € | **102.50 €** | 10.4 % | **5.2 %** | 86.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone White | 107.50 € | **102.50 €** | 10.4 % | **5.2 %** | 86.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.50 € | **36.50 €** | 19.6 % | **5.2 %** | 27.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DMS-108/E) | 106.50 € | **101.50 €** | 10.3 % | **5.2 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente G4 robotický vysavač | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 108.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-G4 | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 108.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG MS23K3555EK/EO | 118.50 € | **113.50 €** | 10.1 % | **5.4 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 105.50 € | **100.50 €** | 10.3 % | **5.1 %** | 96.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.50 € | **109.50 €** | 10.2 % | **5.4 %** | 108.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 06A1 | 107.90 € | **102.90 €** | 10.3 % | **5.2 %** | 102.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal CY505EE0 | 110.50 € | **105.50 €** | 10.4 % | **5.4 %** | 105.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 34.50 € | **29.50 €** | 58.8 % | **35.8 %** | 29.57 € | stávame sa najlacnejší |
| Midland BTR1 Advanced, Single | 192.90 € | **187.90 €** | 10.1 % | **7.2 %** | 188.00 € | stávame sa najlacnejší |
| Dozownik karmy PETKIT Fresh Element SOLO 3L | 78.50 € | **73.50 €** | 14.7 % | **7.4 %** | 73.62 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.65 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 25.00 € | **20.00 €** | 38.9 % | **11.1 %** | 20.30 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.90 € | **81.00 €** | 15.1 % | **8.5 %** | 81.10 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **100.00 €** | 15.1 % | **9.8 %** | 100.11 € | stávame sa najlacnejší |
| FNIRSI SAG-55 PLUS inteligentná teplovzdušná pištoľ | 67.90 € | **63.00 €** | 15.1 % | **6.8 %** | 63.25 € | stávame sa najlacnejší |
| Vysoko presný ručný LCR meter FNIRSI LC1020E | 66.90 € | **62.00 €** | 15.1 % | **6.7 %** | 62.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 55.90 € | **51.00 €** | 15.2 % | **5.1 %** | 48.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 42.90 € | **38.00 €** | 29.7 % | **14.8 %** | 38.06 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 31.50 € | **26.90 €** | 38.6 % | **18.3 %** | 26.91 € | stávame sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **95.90 €** | 10.1 % | **5.0 %** | 77.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 170.50 € | **165.90 €** | 8.0 % | **5.1 %** | 158.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO3753EA | 96.50 € | **91.90 €** | 10.5 % | **5.2 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 4631 | 138.50 € | **133.90 €** | 10.2 % | **6.6 %** | 134.00 € | stávame sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 99.00 € | **94.50 €** | 10.0 % | **5.0 %** | 83.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 500 | 90.50 € | **86.00 €** | 10.6 % | **5.1 %** | 76.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **40.50 €** | 17.4 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI DSO-TC3 SigGen 3-v-1 tester tranzistorov – ru... | 50.50 € | **46.00 €** | 15.5 % | **5.2 %** | 42.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.00 € | **10.50 €** | 54.2 % | **7.9 %** | 9.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **26.00 €** | 59.0 % | **35.5 %** | 26.15 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 20.50 € | **16.00 €** | 45.8 % | **13.8 %** | 16.17 € | stávame sa najlacnejší |
| Braun IS5247.VI | 189.00 € | **184.50 €** | 10.0 % | **7.4 %** | 184.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **21.50 €** | 42.8 % | **18.1 %** | 21.90 € | stávame sa najlacnejší |
| Niimbot K3 Commercial Lake Blue | 62.50 € | **58.00 €** | 15.0 % | **6.7 %** | 58.42 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 159.50 € | **155.00 €** | 8.9 % | **5.8 %** | 155.46 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.50 € | **14.00 €** | 46.3 % | **10.7 %** | 14.49 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **28.00 €** | 59.9 % | **37.8 %** | 28.50 € | stávame sa najlacnejší |
| JBL SENSE LITE Beige | 98.90 € | **94.50 €** | 10.4 % | **5.5 %** | 67.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL SENSE LITE Blue | 98.90 € | **94.50 €** | 10.4 % | **5.5 %** | 67.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL SENSE LITE Purple | 98.90 € | **94.50 €** | 10.4 % | **5.5 %** | 67.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL SENSE LITE White | 98.90 € | **94.50 €** | 10.4 % | **5.5 %** | 67.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GC 305012 | 95.90 € | **91.50 €** | 10.2 % | **5.1 %** | 72.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 1-pack) | 101.90 € | **97.50 €** | 10.0 % | **5.3 %** | 91.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.90 € | **122.50 €** | 10.2 % | **6.4 %** | 122.90 € | stávame sa najlacnejší |
| Concept OPK5160bc | 181.90 € | **177.50 €** | 10.1 % | **7.5 %** | 177.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.50 €** | 39.2 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 53.90 € | **49.50 €** | 19.7 % | **9.9 %** | 49.57 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.50 €** | 59.0 % | **33.9 %** | 23.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 13.90 € | **9.60 €** | 56.1 % | **7.8 %** | 9.70 € | stávame sa najlacnejší |
| TESLA AirCook & Grill QG800 WiFi - multifunkční digi... | 154.00 € | **149.90 €** | 7.9 % | **5.1 %** | 109.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook & Grill QG800 WiFi - multifunkční digi... | 154.00 € | **149.90 €** | 7.9 % | **5.1 %** | 109.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - disc drive | 97.00 € | **92.90 €** | 10.0 % | **5.4 %** | 87.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 101 | 161.00 € | **156.90 €** | 10.0 % | **7.2 %** | 157.00 € | stávame sa najlacnejší |
| Lamax PartyGo1 Play | 84.50 € | **80.50 €** | 10.3 % | **5.1 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 2-pack) | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 63.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INVERTO Premium - Quad IDLP-QDL413 -  0,2 dB - s fil... | 29.00 € | **25.00 €** | 22.0 % | **5.2 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SALENTE SuChef | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 71.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI FNB58 BT USB port tester s Bluetooth | 50.50 € | **46.50 €** | 15.0 % | **5.9 %** | 41.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **55.90 €** | 13.1 % | **5.5 %** | 51.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **36.90 €** | 17.5 % | **6.0 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 81.50 € | **77.50 €** | 10.7 % | **5.3 %** | 77.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO Mini HD265 | 49.90 € | **45.90 €** | 15.0 % | **5.7 %** | 45.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4111E0 | 86.00 € | **82.00 €** | 10.1 % | **5.0 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 61.50 € | **57.50 €** | 41.6 % | **32.4 %** | 57.55 € | stávame sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **110.50 €** | 18.8 % | **14.6 %** | 110.57 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **20.90 €** | 59.2 % | **33.6 %** | 21.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 89.00 € | stávame sa najlacnejší |
| Digitálny kliešťový merač Habotest HT208D | 47.50 € | **43.50 €** | 15.1 % | **5.4 %** | 43.68 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **223.50 €** | 15.1 % | **13.1 %** | 223.69 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **223.50 €** | 15.1 % | **13.1 %** | 223.69 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V45i | 330.50 € | **326.50 €** | 15.0 % | **13.7 %** | 326.69 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (červený) | 245.50 € | **241.50 €** | 15.1 % | **13.2 %** | 241.70 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **231.50 €** | 14.9 % | **13.0 %** | 231.70 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 50.50 € | **46.50 €** | 18.4 % | **9.0 %** | 46.79 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 50.50 € | **46.50 €** | 18.4 % | **9.0 %** | 46.79 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 24.00 € | **20.00 €** | 33.4 % | **11.1 %** | 20.30 € | stávame sa najlacnejší |
| Doplnok xTool Smart World pre mBot2 | 82.50 € | **78.50 €** | 15.0 % | **9.4 %** | 78.88 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **11.50 €** | 49.3 % | **10.8 %** | 11.90 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.00 € | **31.00 €** | 19.3 % | **5.6 %** | 31.49 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.90 € | **81.00 €** | 10.2 % | **5.1 %** | 76.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **105.00 €** | 15.0 % | **10.8 %** | 105.05 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.90 € | **129.00 €** | 10.3 % | **7.1 %** | 129.50 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **9.60 €** | 55.0 % | **10.2 %** | 9.70 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 13.50 € | **9.60 €** | 55.7 % | **10.7 %** | 9.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 14.90 € | **11.00 €** | 49.7 % | **10.5 %** | 11.49 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **22.00 €** | 39.1 % | **18.1 %** | 22.35 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **17.00 €** | 43.0 % | **16.3 %** | 17.36 € | stávame sa najlacnejší |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **345.00 €** | 15.0 % | **13.7 %** | 345.08 € | stávame sa najlacnejší |
| Projektor Ultima Poseidon E40 | 402.90 € | **399.00 €** | 15.0 % | **13.9 %** | 399.10 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V25i Pro II | 317.90 € | **314.00 €** | 15.0 % | **13.6 %** | 314.11 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **8.70 €** | 56.6 % | **9.0 %** | 8.80 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 4.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **106.90 €** | 8.6 % | **5.1 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO 20 A3B | 76.50 € | **72.90 €** | 10.5 % | **5.3 %** | 65.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6840E0 | 76.50 € | **72.90 €** | 10.7 % | **5.5 %** | 69.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi AX3200 Router (R32/E) | 83.50 € | **79.90 €** | 10.1 % | **5.3 %** | 79.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Continenta Dřevěný chlebník | 76.50 € | **72.90 €** | 10.6 % | **5.4 %** | 72.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 95.50 € | **91.90 €** | 14.3 % | **10.0 %** | 91.96 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 182.50 € | **178.90 €** | 8.1 % | **5.9 %** | 179.00 € | stávame sa najlacnejší |
| Kovové puzdro Puluz pre Insta360 X5 | 48.00 € | **44.50 €** | 14.4 % | **6.1 %** | 32.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK8607 | 110.50 € | **107.00 €** | 8.5 % | **5.1 %** | 95.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 20.00 € | **16.50 €** | 27.6 % | **5.3 %** | 16.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **31.00 €** | 47.5 % | **32.6 %** | 31.01 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 32.50 € | **29.00 €** | 43.8 % | **28.3 %** | 29.08 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **47.00 €** | 25.0 % | **16.4 %** | 47.27 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 20.50 € | **17.00 €** | 33.9 % | **11.0 %** | 17.31 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900G (biela) | 53.50 € | **50.00 €** | 14.8 % | **7.3 %** | 50.33 € | stávame sa najlacnejší |
| Anténní zesilovač Evercon AH-707 | 57.50 € | **54.00 €** | 26.4 % | **18.7 %** | 54.39 € | stávame sa najlacnejší |
| Barkan 464XL | 125.00 € | **121.50 €** | 24.2 % | **20.7 %** | 121.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.00 €** | 55.1 % | **41.0 %** | 35.50 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.00 €** | 56.5 % | **23.3 %** | 13.50 € | stávame sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 74.90 € | **71.50 €** | 10.6 % | **5.6 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 583/04 | 76.90 € | **73.50 €** | 10.5 % | **5.6 %** | 66.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Grip White | 78.90 € | **75.50 €** | 10.2 % | **5.4 %** | 74.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 82.90 € | **79.50 €** | 21.3 % | **16.3 %** | 79.56 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.50 €** | 18.5 % | **8.7 %** | 37.56 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná čier... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Inteligentný pohlcovač zápachu Petkit | 41.00 € | **37.90 €** | 14.6 % | **5.9 %** | 20.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **9.90 €** | 38.5 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 16.00 € | **12.90 €** | 48.0 % | **19.3 %** | 12.96 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 73.00 € | **69.90 €** | 13.6 % | **8.7 %** | 69.96 € | stávame sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 64.90 € | **61.90 €** | 10.6 % | **5.5 %** | 56.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH955 | 76.50 € | **73.50 €** | 10.0 % | **5.7 %** | 37.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH960 | 76.50 € | **73.50 €** | 10.0 % | **5.7 %** | 49.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FF203130 | 67.90 € | **64.90 €** | 10.0 % | **5.1 %** | 49.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL16GE30 | 58.90 € | **55.90 €** | 10.7 % | **5.1 %** | 46.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2904/04 | 69.50 € | **66.50 €** | 10.2 % | **5.5 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Beam black | 64.50 € | **61.50 €** | 10.7 % | **5.6 %** | 54.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 30.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.1 % | **5.2 %** | 60.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Indukční vařič, G1013700, jedn | 70.90 € | **67.90 €** | 10.2 % | **5.6 %** | 63.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 62.50 € | **59.50 €** | 10.9 % | **5.6 %** | 56.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL JR470 bílá | 69.90 € | **66.90 €** | 10.3 % | **5.6 %** | 63.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL JR470 modrá | 69.90 € | **66.90 €** | 10.3 % | **5.6 %** | 63.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL JR470 růžová | 69.90 € | **66.90 €** | 10.3 % | **5.6 %** | 63.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.50 € | **63.50 €** | 10.6 % | **5.6 %** | 60.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 58.50 € | **55.50 €** | 10.8 % | **5.1 %** | 52.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **31.50 €** | 15.3 % | **5.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi V89 (nerezová oceľ, zlatá... | 33.50 € | **30.50 €** | 15.5 % | **5.2 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru CABLETECH UCH0219-1 17''-32'' | 16.50 € | **13.50 €** | 30.5 % | **6.8 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 0028 98050 | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 64.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator R45 eXtremo Black Red | 68.90 € | **65.90 €** | 10.3 % | **5.5 %** | 65.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 375.50 € | **372.50 €** | 10.9 % | **10.1 %** | 372.57 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash F1 (čierna) + 6 ventilát... | 114.00 € | **111.00 €** | 14.9 % | **11.9 %** | 111.08 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 62.90 € | **59.90 €** | 10.4 % | **5.2 %** | 60.00 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **13.00 €** | 38.4 % | **12.4 %** | 13.10 € | stávame sa najlacnejší |
| Rowenta RO4B25EA | 96.90 € | **93.90 €** | 10.4 % | **7.0 %** | 94.00 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 251.90 € | **248.90 €** | 10.2 % | **8.8 %** | 249.00 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **20.50 €** | 38.1 % | **20.5 %** | 20.61 € | stávame sa najlacnejší |
| Prenosný mini osciloskop 2 v 1 FNIRSI DSO510 generát... | 41.00 € | **38.00 €** | 15.0 % | **6.6 %** | 38.14 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 22.50 € | **19.50 €** | 53.8 % | **33.3 %** | 19.65 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 17.00 € | **14.00 €** | 42.8 % | **17.6 %** | 14.21 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **66.00 €** | 15.0 % | **10.2 %** | 66.10 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.90 € | **56.00 €** | 10.5 % | **5.1 %** | 52.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 18.90 € | **16.00 €** | 37.0 % | **15.9 %** | 16.17 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 24.90 € | **22.00 €** | 55.2 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **36.00 €** | 46.1 % | **35.2 %** | 36.47 € | stávame sa najlacnejší |
| JBL Clip 4 modrý | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 37.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Clip 4 squad | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 37.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.50 € | **52.90 €** | 10.6 % | **5.5 %** | 43.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK364G10 Coppertinto | 59.50 € | **56.90 €** | 10.4 % | **5.6 %** | 48.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1004500 | 51.50 € | **48.90 €** | 10.7 % | **5.1 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Aura 5 ANC | 53.50 € | **50.90 €** | 10.9 % | **5.5 %** | 46.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1013400 | 56.50 € | **53.90 €** | 10.4 % | **5.4 %** | 51.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.90 €** | 10.2 % | **5.5 %** | 55.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 23210-70/RH Luna | 51.50 € | **48.90 €** | 11.1 % | **5.5 %** | 47.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X2 Carplay/Android ... | 31.50 € | **28.90 €** | 31.1 % | **20.2 %** | 28.91 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 30.50 € | **27.90 €** | 48.0 % | **35.3 %** | 27.96 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **23.90 €** | 54.7 % | **39.5 %** | 24.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **13.90 €** | 25.5 % | **5.7 %** | 13.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZMM9802B | 131.50 € | **128.90 €** | 10.1 % | **7.9 %** | 129.00 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 148.50 € | **145.90 €** | 10.3 % | **8.4 %** | 146.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR TWIN - Black | 59.00 € | **56.50 €** | 10.0 % | **5.4 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI DMT-99 Inteligentný digitálny multimeter | 31.50 € | **29.00 €** | 14.4 % | **5.3 %** | 26.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB614.DG | 55.50 € | **53.00 €** | 10.1 % | **5.1 %** | 52.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maono BA92 Boom Arm Black | 50.50 € | **48.00 €** | 15.2 % | **9.5 %** | 48.08 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 22.00 € | **19.50 €** | 54.3 % | **36.8 %** | 19.68 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 44.9 % | **30.1 %** | 22.20 € | stávame sa najlacnejší |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 122.00 € | **119.50 €** | 15.0 % | **12.6 %** | 119.71 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 28.50 € | **26.00 €** | 53.4 % | **40.0 %** | 26.22 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **12.00 €** | 37.7 % | **14.0 %** | 12.30 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 205.00 € | **202.50 €** | 7.3 % | **6.0 %** | 202.81 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 34.50 € | **32.00 €** | 35.6 % | **25.8 %** | 32.37 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **255.00 €** | 15.1 % | **14.0 %** | 255.39 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 15.00 € | **12.50 €** | 38.3 % | **15.2 %** | 12.90 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 163.00 € | **160.50 €** | 10.0 % | **8.4 %** | 160.90 € | stávame sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **24.50 €** | 35.0 % | **22.5 %** | 24.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **12.00 €** | 58.4 % | **31.1 %** | 12.47 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **15.00 €** | 44.3 % | **23.7 %** | 15.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 24.50 € | **22.00 €** | 43.5 % | **28.9 %** | 22.50 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 138.50 € | **136.00 €** | 10.1 % | **8.1 %** | 136.50 € | stávame sa najlacnejší |
| Držiak BOYA BY-PB30A 3m teleskopická tyč závit 1/4” | 81.90 € | **79.50 €** | 8.7 % | **5.5 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prijímač BOYA BY-WM3U bezdrátový, dosah 20m | 81.90 € | **79.50 €** | 8.7 % | **5.6 %** | 47.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **83.50 €** | 15.1 % | **11.9 %** | 83.63 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.90 € | **63.50 €** | 20.2 % | **15.9 %** | 63.90 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.90 € | **127.50 €** | 10.2 % | **8.2 %** | 127.90 € | stávame sa najlacnejší |
| Rowenta 3v1 RH5A32E0 | 119.90 € | **117.50 €** | 10.1 % | **7.9 %** | 117.90 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.90 € | **170.50 €** | 10.2 % | **8.7 %** | 170.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.50 €** | 29.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **7.60 €** | 38.7 % | **5.4 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 12.00 € | **9.60 €** | 49.2 % | **19.3 %** | 9.61 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 15.90 € | **13.50 €** | 31.4 % | **11.5 %** | 13.71 € | stávame sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.4 % | **5.6 %** | 45.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/05 | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 43.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 43.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 52.90 € | **50.50 €** | 10.2 % | **5.2 %** | 49.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecká na odpadky pre Petkit litter box Purobot ULTR... | 31.90 € | **29.50 €** | 15.1 % | **6.4 %** | 29.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **14.50 €** | 39.1 % | **19.3 %** | 14.60 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **23.50 €** | 22.6 % | **11.2 %** | 23.90 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.90 €** | 55.6 % | **7.4 %** | 4.99 € | stávame sa najlacnejší |
| Tefal HT461138 | 45.00 € | **42.90 €** | 10.2 % | **5.1 %** | 35.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT3509GY Bezdrátová sluchátka | 47.00 € | **44.90 €** | 10.2 % | **5.3 %** | 42.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 27011-56 | 47.00 € | **44.90 €** | 10.1 % | **5.2 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.90 €** | 47.3 % | **38.2 %** | 31.96 € | stávame sa najlacnejší |
| FNIRSI DPS150 DC programovateľný mini laboratórny na... | 64.00 € | **61.90 €** | 14.7 % | **10.9 %** | 61.99 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 61.00 € | **58.90 €** | 10.1 % | **6.3 %** | 59.00 € | stávame sa najlacnejší |
| Počítačový napájací zdroj DarkFlash EMT850 (čierny) | 59.00 € | **56.90 €** | 14.9 % | **10.8 %** | 57.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKM | 60.00 € | **57.90 €** | 10.0 % | **6.2 %** | 58.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 60.00 € | **57.90 €** | 10.0 % | **6.2 %** | 58.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **5.60 €** | 54.6 % | **12.4 %** | 5.70 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.90 € | **9.80 €** | 38.0 % | **13.7 %** | 9.90 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS950V s displejom (čier... | 95.00 € | **92.90 €** | 15.0 % | **12.5 %** | 92.92 € | stávame sa najlacnejší |
| JBL Quantum 100 černá | 47.50 € | **45.50 €** | 10.4 % | **5.7 %** | 33.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Pack 6 MAXTRApro PO 2024 | 39.50 € | **37.50 €** | 11.1 % | **5.5 %** | 26.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT Q2 WiFi | 46.50 € | **44.50 €** | 10.5 % | **5.7 %** | 34.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií XTAR VC4SL 18650 | 27.00 € | **25.00 €** | 13.6 % | **5.1 %** | 17.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter FNIRSI S1 | 26.50 € | **24.50 €** | 15.2 % | **6.5 %** | 19.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2863E1 | 41.50 € | **39.50 €** | 10.7 % | **5.3 %** | 35.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR ECO - White | 39.90 € | **37.90 €** | 10.9 % | **5.3 %** | 34.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.50 € | **22.50 €** | 16.4 % | **6.9 %** | 19.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Napěňovač mléka, G1017301, 30 | 46.90 € | **44.90 €** | 10.5 % | **5.7 %** | 42.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.3 % | **5.1 %** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1009800 | 42.90 € | **40.90 €** | 10.2 % | **5.1 %** | 38.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar SB-820BT Soundbar | 35.50 € | **33.50 €** | 11.5 % | **5.2 %** | 31.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **49.50 €** | 10.2 % | **5.9 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO5 Blue | 48.50 € | **46.50 €** | 10.3 % | **5.7 %** | 46.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.50 € | **32.50 €** | 11.5 % | **5.0 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26380-70 | 40.50 € | **38.50 €** | 11.2 % | **5.7 %** | 38.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Vodné chladenie pre procesor DE360 (biely) | 109.50 € | **107.50 €** | 15.1 % | **13.0 %** | 107.53 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 11.90 € | **9.90 €** | 50.0 % | **24.8 %** | 9.97 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **28.90 €** | 54.5 % | **44.5 %** | 29.00 € | stávame sa najlacnejší |
| Tefal HT652538 | 58.90 € | **56.90 €** | 10.4 % | **6.6 %** | 57.00 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.90 € | **178.90 €** | 10.2 % | **8.9 %** | 179.00 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.50 € | **22.50 €** | 23.6 % | **13.5 %** | 22.65 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.50 €** | 15.3 % | **9.4 %** | 37.65 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 18.50 € | **16.50 €** | 40.3 % | **25.1 %** | 16.69 € | stávame sa najlacnejší |
| FNIRSI GD-02 Detektor horľavých plynov s farebným di... | 36.50 € | **34.50 €** | 15.8 % | **9.4 %** | 34.75 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.50 € | **41.50 €** | 14.6 % | **9.4 %** | 41.79 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **18.50 €** | 17.8 % | **6.3 %** | 18.83 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.50 €** | 53.3 % | **39.7 %** | 20.90 € | stávame sa najlacnejší |
| Pedrini Infinity červená 6 porcí | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 34.90 € | stávame sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 30.00 € | **28.00 €** | 14.5 % | **6.8 %** | 28.49 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 26.00 € | **24.00 €** | 53.8 % | **42.0 %** | 24.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 48.00 € | **46.00 €** | 54.5 % | **48.1 %** | 46.50 € | stávame sa najlacnejší |
| Sušička ovoce Ruhhy 25929 400W | 50.00 € | **48.00 €** | 9.8 % | **5.4 %** | 48.50 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 7.30 € | **5.40 €** | 47.3 % | **8.9 %** | 5.41 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **36.00 €** | 10.7 % | **5.1 %** | 35.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 34.90 € | **33.00 €** | 22.1 % | **15.4 %** | 33.39 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Panasonic sluchátka RZ-B110W | 36.50 € | **34.90 €** | 10.2 % | **5.4 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.90 €** | 10.9 % | **6.0 %** | 28.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka JBL Tune 520C Purple | 34.50 € | **32.90 €** | 11.0 % | **5.8 %** | 27.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.90 €** | 10.4 % | **5.8 %** | 31.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro Profi Comp SOE55080 | 34.50 € | **32.90 €** | 11.1 % | **5.9 %** | 28.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2839E0 | 34.50 € | **32.90 €** | 10.6 % | **5.4 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2022E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.90 €** | 10.0 % | **5.8 %** | 36.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.50 € | **30.90 €** | 11.5 % | **6.0 %** | 27.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro Apple iPad FIXTRI-727-BK | 34.50 € | **32.90 €** | 10.3 % | **5.2 %** | 30.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **27.90 €** | 11.4 % | **5.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2020E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 33.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO5S08E0 | 35.50 € | **33.90 €** | 11.2 % | **6.2 %** | 32.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Foodsaver New Fresh 2,3 l | 32.50 € | **30.90 €** | 11.3 % | **5.8 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - vertical stand | 30.50 € | **28.90 €** | 11.5 % | **5.7 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise pánev 28 cm | 26.50 € | **24.90 €** | 11.8 % | **5.1 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 20.50 € | **18.90 €** | 14.1 % | **5.2 %** | 18.99 € | stávame sa najlacnejší |
| JBL Tune 530BT Blue | 40.50 € | **38.90 €** | 11.1 % | **6.7 %** | 38.99 € | stávame sa najlacnejší |
| JBL Tune 530BT Lavender | 40.50 € | **38.90 €** | 11.1 % | **6.7 %** | 38.99 € | stávame sa najlacnejší |
| FoodSaver FFC026X | 41.50 € | **39.90 €** | 10.8 % | **6.5 %** | 40.00 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.50 € | **30.90 €** | 11.4 % | **5.9 %** | 31.00 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash C280 (biela) | 45.50 € | **43.90 €** | 14.9 % | **10.9 %** | 44.00 € | stávame sa najlacnejší |
| Albrecht DR 54 | 64.50 € | **62.90 €** | 10.6 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.90 €** | 60.5 % | **36.0 %** | 8.92 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 15.50 € | **13.90 €** | 22.6 % | **9.9 %** | 14.00 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| Freewell Klatka Osmo Action 6 Creator Pro | 77.50 € | **75.90 €** | 15.3 % | **12.9 %** | 75.99 € | stávame sa najlacnejší |
| Roadstar DJ-390 BT Bluetooth speaker | 114.50 € | **112.90 €** | 10.2 % | **8.7 %** | 113.00 € | stávame sa najlacnejší |
| Guzzanti GZ 706 | 37.00 € | **35.50 €** | 10.1 % | **5.7 %** | 17.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema E Gusto 1000 g | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 15.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 29.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop PROFI cotton plus | 30.50 € | **29.00 €** | 10.8 % | **5.3 %** | 25.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 37.00 € | **35.50 €** | 10.3 % | **5.8 %** | 32.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2012400 | 39.00 € | **37.50 €** | 10.1 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1020500 | 39.00 € | **37.50 €** | 10.2 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **20.50 €** | 13.8 % | **6.0 %** | 19.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 41.00 € | **39.50 €** | 10.2 % | **6.1 %** | 38.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Tiara II 1269 90000 červená | 31.50 € | **30.00 €** | 10.6 % | **5.3 %** | 29.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 5.50 € | **4.00 €** | 53.1 % | **11.4 %** | 4.01 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash A290 (čierna) | 23.00 € | **21.50 €** | 14.8 % | **7.3 %** | 21.54 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.20 € | **4.70 €** | 47.0 % | **11.4 %** | 4.80 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.50 €** | 50.1 % | **37.6 %** | 16.64 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **20.50 €** | 54.3 % | **43.8 %** | 20.67 € | stávame sa najlacnejší |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 103.50 € | **102.00 €** | 15.2 % | **13.5 %** | 102.22 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **88.00 €** | 14.8 % | **12.9 %** | 88.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **15.00 €** | 56.9 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **15.00 €** | 56.9 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 14.50 € | **13.00 €** | 49.2 % | **33.8 %** | 13.48 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **24.00 €** | 37.8 % | **29.6 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **22.00 €** | 39.1 % | **30.2 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 15.50 € | **14.00 €** | 53.9 % | **39.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **14.00 €** | 55.0 % | **40.0 %** | 14.50 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.00 €** | 10.2 % | **7.7 %** | 65.50 € | stávame sa najlacnejší |
| Philips TAK5500AL bezdrátová sluchátka | 57.50 € | **56.00 €** | 10.9 % | **8.0 %** | 56.50 € | stávame sa najlacnejší |
| Graef S 10005 | 113.90 € | **112.50 €** | 10.4 % | **9.0 %** | 112.90 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **64.50 €** | 10.2 % | **7.9 %** | 64.90 € | stávame sa najlacnejší |
| Myš bezdrátová REBEL WM500 | 13.90 € | **12.50 €** | 18.6 % | **6.6 %** | 11.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.60 €** | 30.7 % | **12.4 %** | 8.67 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **9.60 €** | 52.9 % | **33.4 %** | 9.70 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **13.50 €** | 51.8 % | **37.5 %** | 13.63 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.50 €** | 10.5 % | **6.2 %** | 29.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo E9270p bezdrátová klávesnice černá | 37.90 € | **36.50 €** | 10.4 % | **6.4 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16075 | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 22.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.0 % | **5.4 %** | 24.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo 9300M set klávesnice a myši černý | 31.90 € | **30.50 €** | 11.3 % | **6.4 %** | 28.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, černý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, červený | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, modrý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO hluboká pánev 24 cm | 29.90 € | **28.50 €** | 11.2 % | **6.0 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Yogurella 617 | 27.90 € | **26.50 €** | 10.8 % | **5.2 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/05 | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-BC261 | 32.90 € | **31.50 €** | 10.8 % | **6.1 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 50.90 € | **49.50 €** | 15.1 % | **11.9 %** | 49.67 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **24.50 €** | 22.6 % | **15.9 %** | 24.69 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.90 € | **17.50 €** | 15.0 % | **6.5 %** | 17.79 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 43.90 € | **42.50 €** | 48.5 % | **43.8 %** | 42.85 € | stávame sa najlacnejší |
| Solight lokátor pre batožinu, Find My kompatibilný | 23.90 € | **22.50 €** | 41.7 % | **33.4 %** | 22.89 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.90 € | **35.50 €** | 11.1 % | **6.9 %** | 35.90 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.90 € | **39.50 €** | 10.8 % | **7.0 %** | 39.90 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.90 € | **59.50 €** | 10.7 % | **8.1 %** | 59.90 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.30 €** | 59.6 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **8.80 €** | 38.3 % | **21.7 %** | 8.90 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 20.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal Coppertinto KI280G10 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 31.00 € | **29.90 €** | 10.0 % | **6.1 %** | 30.00 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.90 €** | 39.2 % | **8.6 %** | 3.96 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný generátor signálu FNIRSI SG-002 | 17.00 € | **15.90 €** | 13.8 % | **6.4 %** | 15.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.20 €** | 59.1 % | **35.1 %** | 6.24 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.48 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **10.90 €** | 44.3 % | **31.1 %** | 10.98 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 9.00 € | **7.90 €** | 53.7 % | **34.9 %** | 7.99 € | stávame sa najlacnejší |
| Xiaomi 67W Charging Combo (Type-A) EU | 24.50 € | **23.50 €** | 10.5 % | **6.0 %** | 13.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka HMS Premium MP12 světle šedá | 33.90 € | **32.90 €** | 8.6 % | **5.4 %** | 23.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI Síto pro FD1000 ULTRA | 14.50 € | **13.50 €** | 13.0 % | **5.2 %** | 5.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **35.90 €** | 9.1 % | **6.1 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 9.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska cest. PENTA 1,5l ner. | 20.90 € | **19.90 €** | 10.9 % | **5.6 %** | 14.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-BK | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.1 % | **5.8 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B -4239 čtverec | 21.90 € | **20.90 €** | 10.9 % | **5.9 %** | 15.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica Norma J9073A4 set | 23.90 € | **22.90 €** | 11.0 % | **6.3 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Podsie 4 POP White | 19.50 € | **18.50 €** | 11.8 % | **6.1 %** | 15.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 Beige | 28.50 € | **27.50 €** | 10.7 % | **6.8 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 Black | 28.50 € | **27.50 €** | 10.7 % | **6.8 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska s pum.CUL.1,9l černá | 21.50 € | **20.50 €** | 12.6 % | **7.3 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 Extender (DAP-1325) | 20.50 € | **19.50 €** | 11.0 % | **5.6 %** | 17.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco ESPRESSO BARISTA 1kg | 19.50 € | **18.50 €** | 12.5 % | **6.8 %** | 16.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C100 WiFi camera | 23.50 € | **22.50 €** | 10.3 % | **5.6 %** | 21.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 15.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G4002300 Odstraňovač žmolků | 22.90 € | **21.90 €** | 10.6 % | **5.8 %** | 21.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.50 € | **12.50 €** | 14.1 % | **5.6 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Bluetooth Speaker Essential Green | 14.90 € | **13.90 €** | 12.7 % | **5.1 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.5 % | **5.1 %** | 16.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.0 % | **6.2 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **12.50 €** | 15.5 % | **7.0 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.00 €** | 9.8 % | **5.4 %** | 23.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio Fx 85 Es Plus 2E | 20.50 € | **19.50 €** | 12.4 % | **6.9 %** | 19.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal J1640574 | 24.50 € | **23.50 €** | 10.9 % | **6.4 %** | 23.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 10.8 % | **5.9 %** | 21.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise rendlík 20 cm | 24.50 € | **23.50 €** | 10.7 % | **6.1 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.50 € | **15.50 €** | 13.2 % | **6.3 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.5 % | **6.8 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL XA 800512 | 17.90 € | **16.90 €** | 12.5 % | **6.2 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.50 €** | 10.9 % | **6.8 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop Picobello M Micro | 19.50 € | **18.50 €** | 11.2 % | **5.5 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.50 € | **19.50 €** | 11.2 % | **5.8 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.90 € | **13.90 €** | 12.8 % | **5.2 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 8005 digitální budík | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **19.90 €** | 10.4 % | **5.1 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.4 % | **5.3 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **21.90 €** | 10.1 % | **5.3 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.3 % | **6.3 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.92 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.03 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 9.10 € | **8.10 €** | 55.1 % | **38.1 %** | 8.13 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 122.50 € | **121.50 €** | 16.0 % | **15.0 %** | 121.53 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 45.5 % | **38.8 %** | 20.54 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| Vodotesné puzdro Puluz pre kameru GoPro HERO 4K 2024 | 15.50 € | **14.50 €** | 16.6 % | **9.1 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.90 €** | 38.4 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 15.50 € | **14.50 €** | 54.4 % | **44.5 %** | 14.55 € | stávame sa najlacnejší |
| Digitálny kliešťový meter FNIRSI DMC-100 | 36.50 € | **35.50 €** | 14.8 % | **11.6 %** | 35.55 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 380.90 € | **379.90 €** | 8.0 % | **7.7 %** | 379.95 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **12.50 €** | 55.7 % | **44.2 %** | 12.57 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **4.10 €** | 54.1 % | **23.9 %** | 4.17 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **24.50 €** | 15.8 % | **11.3 %** | 24.58 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **16.50 €** | 24.9 % | **17.8 %** | 16.59 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **26.90 €** | 11.2 % | **7.2 %** | 27.00 € | stávame sa najlacnejší |
| G3Ferrari G1022600 | 120.90 € | **119.90 €** | 10.2 % | **9.3 %** | 120.00 € | stávame sa najlacnejší |
| Girmi FG4101 | 139.90 € | **138.90 €** | 10.1 % | **9.3 %** | 139.00 € | stávame sa najlacnejší |
| Girmi FG9201 | 116.90 € | **115.90 €** | 10.1 % | **9.1 %** | 116.00 € | stávame sa najlacnejší |
| Tefal Copertinto BL439G10 | 59.90 € | **58.90 €** | 10.5 % | **8.6 %** | 59.00 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.90 € | **109.90 €** | 10.2 % | **9.2 %** | 110.00 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **39.90 €** | 10.5 % | **7.8 %** | 40.00 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **34.90 €** | 10.7 % | **7.6 %** | 35.00 € | stávame sa najlacnejší |
| Domo DO228SV | 121.90 € | **120.90 €** | 10.0 % | **9.1 %** | 121.00 € | stávame sa najlacnejší |
| Gorenje MVC72HGA | 29.90 € | **28.90 €** | 10.1 % | **6.4 %** | 29.00 € | stávame sa najlacnejší |
| GameSir G8+ Bluetooth mobile controller with phone h... | 61.90 € | **60.90 €** | 15.0 % | **13.2 %** | 61.00 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 15.00 € | **14.00 €** | 54.0 % | **43.7 %** | 14.13 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **35.00 €** | 38.3 % | **34.4 %** | 35.16 € | stávame sa najlacnejší |
| Externý filter SUNSUN HW-303A | 60.00 € | **59.00 €** | 14.7 % | **12.8 %** | 59.18 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 13.00 € | **12.00 €** | 47.8 % | **36.4 %** | 12.20 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **11.50 €** | 47.9 % | **36.1 %** | 11.73 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Počítačový chladič Darkflash DN-D240 WHITE | 67.00 € | **66.00 €** | 14.9 % | **13.2 %** | 66.29 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.50 € | **41.50 €** | 18.9 % | **16.1 %** | 41.80 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.33 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **25.00 €** | 42.7 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 161.00 € | **160.00 €** | 7.3 % | **6.6 %** | 160.33 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.50 € | **21.50 €** | 11.7 % | **6.8 %** | 21.89 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **21.50 €** | 12.0 % | **7.0 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.50 € | **21.50 €** | 38.4 % | **32.2 %** | 21.90 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.50 €** | 10.1 % | **9.0 %** | 98.90 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **18.50 €** | 12.4 % | **6.7 %** | 18.90 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **22.50 €** | 11.9 % | **7.2 %** | 22.90 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **12.50 €** | 13.7 % | **5.3 %** | 12.90 € | stávame sa najlacnejší |
| G3Ferrari G1022300 | 136.50 € | **135.50 €** | 10.2 % | **9.4 %** | 135.90 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 31.50 € | **30.50 €** | 10.7 % | **7.2 %** | 30.90 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **21.50 €** | 10.3 % | **5.4 %** | 21.90 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **32.50 €** | 11.1 % | **7.8 %** | 32.90 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.50 € | **39.50 €** | 11.1 % | **8.3 %** | 39.90 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **23.50 €** | 11.5 % | **6.9 %** | 23.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.1 % | **5.3 %** | 15.90 € | stávame sa najlacnejší |
| DOMO DO9283EK | 18.50 € | **17.50 €** | 12.7 % | **6.7 %** | 17.90 € | stávame sa najlacnejší |
| Ariete Ice Machine 651 | 99.50 € | **98.50 €** | 10.4 % | **9.3 %** | 98.90 € | stávame sa najlacnejší |
| Braun SI1040GR | 26.50 € | **25.50 €** | 11.2 % | **7.0 %** | 25.90 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **11.50 €** | 36.6 % | **25.7 %** | 11.90 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 10.9 % | **6.7 %** | 25.90 € | stávame sa najlacnejší |
| Maxxo HiFi Tuner TR05 | 138.50 € | **137.50 €** | 10.3 % | **9.5 %** | 137.90 € | stávame sa najlacnejší |
| Strong SRT84 Terestriální HDMI přijímač | 28.50 € | **27.50 €** | 11.1 % | **7.2 %** | 27.90 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 12.00 € | **11.00 €** | 23.0 % | **12.8 %** | 11.42 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 12.00 € | **11.00 €** | 52.2 % | **39.5 %** | 11.43 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.00 € | **11.00 €** | 52.9 % | **40.2 %** | 11.50 € | stávame sa najlacnejší |
| Beper BEP-BP654 | 27.00 € | **26.00 €** | 10.4 % | **6.3 %** | 26.50 € | stávame sa najlacnejší |
| Bravo B-4813 Žehlička SERENA červená | 46.00 € | **45.00 €** | 10.1 % | **7.7 %** | 45.50 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 65.00 € | **64.00 €** | 10.1 % | **8.4 %** | 64.50 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 22.00 € | **21.00 €** | 10.1 % | **5.1 %** | 21.50 € | stávame sa najlacnejší |
| Akčná kamera SJCAM SJ4000 | 70.90 € | **70.00 €** | 15.1 % | **13.6 %** | 70.29 € | stávame sa najlacnejší |
| Akčná kamera SJCAM SJ4000 Wi-Fi | 70.90 € | **70.00 €** | 15.1 % | **13.6 %** | 70.29 € | stávame sa najlacnejší |
| Počítačový chladič vody Darkflash DN 360 (biely) | 67.90 € | **67.00 €** | 15.2 % | **13.7 %** | 67.46 € | stávame sa najlacnejší |
| Laica Bi-Flux Cartridge 3+1ks | 15.90 € | **15.00 €** | 11.6 % | **5.3 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 12.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 11.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G2017100 kuchyňská váha | 15.90 € | **15.00 €** | 11.4 % | **5.1 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.9 % | **14.5 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **3.80 €** | 45.3 % | **17.5 %** | 3.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.90 € | **12.00 €** | 27.4 % | **18.5 %** | 12.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.00 €** | 26.2 % | **15.8 %** | 10.50 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.00 €** | 19.3 % | **9.4 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **5.90 €** | 54.0 % | **33.6 %** | 5.97 € | stávame sa najlacnejší |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 22.90 € | **22.00 €** | 15.0 % | **10.5 %** | 22.04 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 43.90 € | **43.00 €** | 8.8 % | **6.6 %** | 43.09 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 48.90 € | **48.00 €** | 9.4 % | **7.4 %** | 48.18 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.90 € | **23.00 €** | 48.8 % | **43.2 %** | 23.18 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 61.90 € | **61.00 €** | 15.4 % | **13.7 %** | 61.19 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash C280 (čierna) | 42.90 € | **42.00 €** | 15.3 % | **12.9 %** | 42.33 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.90 € | **19.00 €** | 42.5 % | **36.1 %** | 19.42 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **16.00 €** | 38.6 % | **31.3 %** | 16.43 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.90 € | **18.00 €** | 12.2 % | **6.9 %** | 18.46 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 51.90 € | **51.00 €** | 31.7 % | **29.4 %** | 51.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 33.90 € | **33.00 €** | 30.2 % | **26.7 %** | 33.50 € | stávame sa najlacnejší |
| Leifheit Page Profi 100 | 29.90 € | **29.00 €** | 11.4 % | **8.0 %** | 29.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 19.90 € | **19.00 €** | 27.2 % | **21.4 %** | 19.50 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.20 €** | 48.6 % | **36.7 %** | 9.23 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **6.80 €** | 54.8 % | **40.3 %** | 6.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 9.20 € | **8.50 €** | 47.8 % | **36.6 %** | 8.53 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.50 € | **9.80 €** | 48.5 % | **38.6 %** | 9.90 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **16.90 €** | 11.2 % | **7.4 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 11.2 % | **7.4 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Breakfast Bollitore 2846, černá | 17.50 € | **16.90 €** | 10.5 % | **6.8 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt pro SG S26 FIXFLM2-1704-BK | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **17.90 €** | 10.0 % | **6.5 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **17.90 €** | 39.0 % | **34.5 %** | 17.93 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X Pro Standard (čierny) | 55.50 € | **54.90 €** | 15.1 % | **13.9 %** | 54.94 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.50 € | **19.90 €** | 19.2 % | **15.7 %** | 19.96 € | stávame sa najlacnejší |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 25.50 € | **24.90 €** | 18.9 % | **16.1 %** | 24.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.30 € | **7.70 €** | 47.0 % | **36.4 %** | 7.72 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.70 € | **7.10 €** | 48.0 % | **36.5 %** | 7.12 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.30 €** | 47.3 % | **36.1 %** | 7.33 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.90 € | **5.30 €** | 51.3 % | **35.9 %** | 5.34 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 4.40 € | **3.80 €** | 52.9 % | **32.0 %** | 3.87 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.10 € | **1.50 €** | 51.1 % | **7.9 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.10 €** | 56.7 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 10.7 % | **6.7 %** | 4.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.2 % | **6.6 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune110 blue | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune110 white | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks® Blonde Espresso Roast 450 g | 15.50 € | **14.90 €** | 10.0 % | **5.8 %** | 11.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks Breakfast Blend káva 450g | 16.50 € | **15.90 €** | 10.2 % | **6.2 %** | 13.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.90 €** | 12.5 % | **7.8 %** | 12.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 10.9 % | **6.3 %** | 12.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm černý | 13.50 € | **12.90 €** | 10.2 % | **5.3 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm světle šedý | 13.50 € | **12.90 €** | 10.2 % | **5.3 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks Colombia Medium Roast 450 g | 15.50 € | **14.90 €** | 10.0 % | **5.8 %** | 13.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB02N 75 cm šedo-stříbrný | 13.50 € | **12.90 €** | 10.2 % | **5.3 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.5 % | **7.1 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ESKQ9 | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **10.90 €** | 12.9 % | **7.0 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **12.90 €** | 13.2 % | **8.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **10.90 €** | 11.7 % | **5.9 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 9.60 € | **9.00 €** | 54.2 % | **44.6 %** | 9.03 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 10.00 € | **9.40 €** | 35.1 % | **26.9 %** | 9.43 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.40 €** | 53.4 % | **44.2 %** | 9.45 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.70 €** | 42.7 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.00 €** | 54.6 % | **44.9 %** | 9.10 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **8.80 €** | 48.4 % | **38.9 %** | 8.90 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.50 € | **15.90 €** | 10.2 % | **6.2 %** | 16.00 € | stávame sa najlacnejší |
| JBL Horizon3 Black | 126.50 € | **125.90 €** | 10.4 % | **9.9 %** | 125.99 € | stávame sa najlacnejší |
| JBL Horizon3 Grey | 126.50 € | **125.90 €** | 10.4 % | **9.9 %** | 125.99 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 98.50 € | **97.90 €** | 19.6 % | **18.8 %** | 98.00 € | stávame sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 123.50 € | **122.90 €** | 16.6 % | **16.1 %** | 123.00 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **7.80 €** | 47.7 % | **38.8 %** | 7.90 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.90 €** | 55.5 % | **37.9 %** | 3.96 € | stávame sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-M ( 36 - 40 ) | 12.50 € | **12.00 €** | 9.9 % | **5.5 %** | 9.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 zelená-mod... | 25.00 € | **24.50 €** | 8.0 % | **5.8 %** | 22.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 14.00 € | **13.50 €** | 10.1 % | **6.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný senzor teploty a vlhkosti Zigbee Sonoff... | 11.00 € | **10.50 €** | 13.9 % | **8.7 %** | 10.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.00 € | **28.50 €** | 7.4 % | **5.5 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.5 % | **5.9 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed 2skla SG A17 4/5G FIXGFADA-1700-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sklo Apple iP17PM FIXGFADA-1603-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tvrzené sklo FIXED Full-Cover s aplikáto | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **8.00 €** | 53.9 % | **44.9 %** | 8.01 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.70 €** | 48.7 % | **36.7 %** | 5.71 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Filament ELEGOO PLA+ (čierny) | 12.00 € | **11.50 €** | 14.6 % | **9.9 %** | 11.51 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **6.90 €** | 55.1 % | **44.6 %** | 6.92 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 6.10 € | **5.60 €** | 47.2 % | **35.1 %** | 5.63 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.53 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 56.50 € | **56.00 €** | 28.1 % | **27.0 %** | 56.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 6.20 € | **5.70 €** | 47.4 % | **35.5 %** | 5.74 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.10 €** | 47.0 % | **35.9 %** | 6.14 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.00 € | **70.50 €** | 38.4 % | **37.4 %** | 70.55 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.80 €** | 54.6 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.20 €** | 55.2 % | **43.6 %** | 6.26 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.90 € | **5.40 €** | 48.0 % | **35.5 %** | 5.46 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.50 €** | 41.0 % | **38.8 %** | 31.57 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.80 €** | 50.7 % | **36.4 %** | 4.87 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 5.30 € | **4.80 €** | 50.7 % | **36.4 %** | 4.87 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 14.00 € | **13.50 €** | 13.7 % | **9.6 %** | 13.58 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **4.90 €** | 48.8 % | **35.0 %** | 4.98 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 14.5 % | **12.2 %** | 24.58 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.50 €** | 47.2 % | **44.5 %** | 26.59 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.70 €** | 55.9 % | **37.4 %** | 3.79 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.40 €** | 47.1 % | **34.7 %** | 5.49 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.50 € | **24.00 €** | 12.3 % | **10.1 %** | 24.09 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.50 € | **24.00 €** | 12.3 % | **10.1 %** | 24.09 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 81.50 € | **81.00 €** | 15.1 % | **14.4 %** | 81.09 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.20 €** | 49.3 % | **33.4 %** | 4.30 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 37.4 % | **34.1 %** | 20.61 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **45.00 €** | 15.5 % | **14.3 %** | 45.11 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **45.00 €** | 15.5 % | **14.3 %** | 45.11 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.15 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 15.50 € | **15.00 €** | 16.1 % | **12.4 %** | 15.17 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 66.00 € | **65.50 €** | 14.6 % | **13.7 %** | 65.67 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.50 €** | 46.4 % | **42.9 %** | 20.69 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **19.00 €** | 16.3 % | **13.3 %** | 19.20 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 83.50 € | **83.00 €** | 10.1 % | **9.5 %** | 83.20 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 23.00 € | **22.50 €** | 19.3 % | **16.7 %** | 22.71 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 346.50 € | **346.00 €** | 7.2 % | **7.0 %** | 346.21 € | stávame sa najlacnejší |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 39.50 € | **39.00 €** | 8.7 % | **7.3 %** | 39.24 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **16.50 €** | 36.8 % | **32.8 %** | 16.75 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **15.00 €** | 47.4 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 14.50 € | **14.00 €** | 16.1 % | **12.1 %** | 14.25 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 26.50 € | **26.00 €** | 31.3 % | **28.8 %** | 26.25 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.50 € | **55.00 €** | 17.3 % | **16.2 %** | 55.25 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 205.50 € | **205.00 €** | 10.2 % | **9.9 %** | 205.25 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 23.00 € | **22.50 €** | 16.4 % | **13.8 %** | 22.76 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **13.00 €** | 47.5 % | **42.1 %** | 13.27 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 12.50 € | **12.00 €** | 37.3 % | **31.8 %** | 12.27 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **14.00 €** | 44.1 % | **39.1 %** | 14.27 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 22.50 € | **22.00 €** | 9.7 % | **7.3 %** | 22.27 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 11.50 € | **11.00 €** | 45.2 % | **38.9 %** | 11.28 € | stávame sa najlacnejší |
| Electrolux KGS64362XX | 198.50 € | **198.00 €** | 9.0 % | **8.7 %** | 198.28 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.29 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 36.50 € | **36.00 €** | 7.6 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 31.50 € | **31.00 €** | 7.6 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1280.50 € | **1280.00 €** | 9.1 % | **9.0 %** | 1280.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 10.50 € | **10.00 €** | 11.2 % | **5.9 %** | 10.29 € | stávame sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 15.50 € | **15.00 €** | 13.8 % | **10.2 %** | 15.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 402.50 € | **402.00 €** | 8.6 % | **8.5 %** | 402.29 € | stávame sa najlacnejší |
| Dvojité záhradné nohavice Splitter RainPoint | 14.50 € | **14.00 €** | 14.9 % | **10.9 %** | 14.30 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 50W, 4600lm, 5000K, IP65 | 21.00 € | **20.50 €** | 46.4 % | **42.9 %** | 20.80 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.30 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 154.50 € | **154.00 €** | 14.3 % | **13.9 %** | 154.30 € | stávame sa najlacnejší |
| Súprava inteligentného solárneho vodného čerpadla s ... | 59.50 € | **59.00 €** | 11.0 % | **10.0 %** | 59.30 € | stávame sa najlacnejší |
| IPL epilátor ANLAN 02-ATMY52-0RE | 104.50 € | **104.00 €** | 8.8 % | **8.2 %** | 104.31 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.50 € | **71.00 €** | 13.9 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **15.00 €** | 46.0 % | **41.3 %** | 15.32 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1447.00 € | **1446.50 €** | 7.7 % | **7.6 %** | 1446.82 € | stávame sa najlacnejší |
| Držiak mikrofónu Maono BA37 | 28.50 € | **28.00 €** | 9.9 % | **8.0 %** | 28.32 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 105.50 € | **105.00 €** | 12.7 % | **12.2 %** | 105.33 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 14.00 € | **13.50 €** | 14.5 % | **10.4 %** | 13.83 € | stávame sa najlacnejší |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 21.00 € | **20.50 €** | 13.7 % | **11.0 %** | 20.83 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 21.50 € | **21.00 €** | 12.1 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 40.50 € | **40.00 €** | 9.7 % | **8.3 %** | 40.33 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **12.00 €** | 46.9 % | **41.0 %** | 12.34 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 32.50 € | **32.00 €** | 33.2 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 53.50 € | **53.00 €** | 9.2 % | **8.2 %** | 53.35 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 69.50 € | **69.00 €** | 9.9 % | **9.1 %** | 69.35 € | stávame sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 826.50 € | **826.00 €** | 7.7 % | **7.6 %** | 826.35 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 415.50 € | **415.00 €** | 12.6 % | **12.5 %** | 415.35 € | stávame sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.00 € | **11.50 €** | 10.4 % | **5.8 %** | 11.86 € | stávame sa najlacnejší |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.50 € | **85.00 €** | 20.2 % | **19.5 %** | 85.37 € | stávame sa najlacnejší |
| Herné reproduktory Onikuma L2 | 12.50 € | **12.00 €** | 16.4 % | **11.8 %** | 12.37 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 28.50 € | **28.00 €** | 7.1 % | **5.2 %** | 28.38 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 21.00 € | **20.50 €** | 36.3 % | **33.0 %** | 20.88 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 24.00 € | **23.50 €** | 36.3 % | **33.4 %** | 23.88 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **17.00 €** | 42.8 % | **38.8 %** | 17.38 € | stávame sa najlacnejší |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 70.50 € | **70.00 €** | 12.7 % | **11.9 %** | 70.38 € | stávame sa najlacnejší |
| G21 nůž Damascus Premium 13 cm | 42.00 € | **41.50 €** | 7.3 % | **6.1 %** | 41.89 € | stávame sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.50 € | **26.00 €** | 9.5 % | **7.5 %** | 26.39 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.00 € | **47.50 €** | 9.3 % | **8.2 %** | 47.89 € | stávame sa najlacnejší |
| Domo DO42327PC | 99.50 € | **99.00 €** | 6.4 % | **5.8 %** | 99.39 € | stávame sa najlacnejší |
| DOMO DO42329PC | 114.00 € | **113.50 €** | 6.6 % | **6.1 %** | 113.89 € | stávame sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 22.50 € | **22.00 €** | 9.8 % | **7.4 %** | 22.39 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **90.00 €** | 15.1 % | **14.5 %** | 90.39 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 39.00 € | **38.50 €** | 18.3 % | **16.8 %** | 38.89 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 59.00 € | **58.50 €** | 6.9 % | **6.0 %** | 58.89 € | stávame sa najlacnejší |
| DOMO DO42602S | 39.00 € | **38.50 €** | 6.8 % | **5.5 %** | 38.89 € | stávame sa najlacnejší |
| DOMO DO9286IB | 247.50 € | **247.00 €** | 5.6 % | **5.4 %** | 247.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 278.50 € | **278.00 €** | 8.3 % | **8.1 %** | 278.39 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.00 € | **18.50 €** | 9.6 % | **6.7 %** | 18.89 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **120.50 €** | 14.9 % | **14.4 %** | 120.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 276.50 € | **276.00 €** | 6.7 % | **6.5 %** | 276.39 € | stávame sa najlacnejší |
| HP ENVY 6520e AiO (714N9B) | 102.00 € | **101.50 €** | 9.2 % | **8.7 %** | 101.89 € | stávame sa najlacnejší |
| Whirlpool NoFrost WHK 22414 XBR8EA | 877.50 € | **877.00 €** | 9.9 % | **9.8 %** | 877.39 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 688.50 € | **688.00 €** | 6.1 % | **6.0 %** | 688.39 € | stávame sa najlacnejší |
| DOMO DO91135F | 326.00 € | **325.50 €** | 9.5 % | **9.3 %** | 325.89 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 637.50 € | **637.00 €** | 6.3 % | **6.2 %** | 637.39 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 674.00 € | **673.50 €** | 9.0 % | **8.9 %** | 673.89 € | stávame sa najlacnejší |
| Whirlpool WP B9X WBS EE | 703.00 € | **702.50 €** | 9.8 % | **9.7 %** | 702.89 € | stávame sa najlacnejší |
| Status STA 177159 | 11.00 € | **10.50 €** | 11.0 % | **5.9 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.00 € | **11.50 €** | 28.9 % | **23.5 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.00 € | **11.50 €** | 28.9 % | **23.5 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.00 € | **13.50 €** | 26.3 % | **21.8 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **10.50 €** | 32.3 % | **26.3 %** | 10.90 € | stávame sa najlacnejší |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 18.00 € | **17.50 €** | 21.5 % | **18.2 %** | 17.90 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301/02, coral | 33.00 € | **32.50 €** | 10.3 % | **8.6 %** | 32.90 € | stávame sa najlacnejší |
| Girmi BL0401 Cestovní silikonová konvice | 15.00 € | **14.50 €** | 10.5 % | **6.8 %** | 14.90 € | stávame sa najlacnejší |
| JBL Xtreme 3 black | 188.50 € | **188.00 €** | 10.2 % | **9.9 %** | 188.40 € | stávame sa najlacnejší |
| FIXED FIXORB2-WH Nabíjecí USB-C adaptér | 16.00 € | **15.50 €** | 10.3 % | **6.9 %** | 15.90 € | stávame sa najlacnejší |
| Držiak BOYA BY-PB25 2,5m teleskopická tyč závit 1/4” | 102.50 € | **102.00 €** | 18.7 % | **18.2 %** | 102.40 € | stávame sa najlacnejší |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 358.50 € | **358.00 €** | 8.6 % | **8.4 %** | 358.40 € | stávame sa najlacnejší |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 770.50 € | **770.00 €** | 10.0 % | **9.9 %** | 770.40 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **105.00 €** | 10.1 % | **9.6 %** | 105.40 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.50 € | **17.00 €** | 13.6 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 24.50 € | **24.00 €** | 10.5 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 24.50 € | **24.00 €** | 10.5 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Okuliare RayNeo Air 4 Pro AR | 300.50 € | **300.00 €** | 6.0 % | **5.9 %** | 300.42 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 173.50 € | **173.00 €** | 9.2 % | **8.9 %** | 173.42 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **29.00 €** | 14.9 % | **13.0 %** | 29.44 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 280.50 € | **280.00 €** | 11.6 % | **11.4 %** | 280.44 € | stávame sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 554.50 € | **554.00 €** | 11.4 % | **11.3 %** | 554.45 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.50 € | **94.00 €** | 20.0 % | **19.4 %** | 94.46 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 47.50 € | **47.00 €** | 9.9 % | **8.7 %** | 47.46 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 28.50 € | **28.00 €** | 8.7 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 28.50 € | **28.00 €** | 8.7 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 60.50 € | **60.00 €** | 7.2 % | **6.3 %** | 60.46 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 68.50 € | **68.00 €** | 6.5 % | **5.7 %** | 68.47 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 744.50 € | **744.00 €** | 9.4 % | **9.4 %** | 744.47 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.50 € | **33.00 €** | 33.4 % | **31.5 %** | 33.48 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.50 € | **11.00 €** | 41.2 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **26.00 €** | 32.5 % | **30.0 %** | 26.49 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **13.00 €** | 33.2 % | **28.3 %** | 13.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 16.0 % | **14.0 %** | 28.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.50 € | **33.00 €** | 18.6 % | **16.9 %** | 33.49 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **16.00 €** | 29.1 % | **25.2 %** | 16.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creality (Gold) | 17.50 € | **17.00 €** | 14.4 % | **11.1 %** | 17.49 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 Green AI | 62.50 € | **62.00 €** | 6.3 % | **5.4 %** | 62.49 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 s umelou inteligenciou... | 62.50 € | **62.00 €** | 6.3 % | **5.4 %** | 62.49 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.90 € | **97.50 €** | 20.2 % | **19.7 %** | 97.74 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 11.6 % | **11.2 %** | 113.79 € | stávame sa najlacnejší |
| Nabíjačka SkyRC NC3000 Pro | 70.90 € | **70.50 €** | 13.1 % | **12.5 %** | 70.80 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.90 € | **166.50 €** | 15.8 % | **15.5 %** | 166.81 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 207.90 € | **207.50 €** | 10.0 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 207.90 € | **207.50 €** | 10.0 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 124.90 € | **124.50 €** | 10.3 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 103.90 € | **103.50 €** | 13.2 % | **12.8 %** | 103.83 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 124.90 € | **124.50 €** | 7.3 % | **6.9 %** | 124.89 € | stávame sa najlacnejší |
| Nescafé Dolce Gusto Latte Macchiato 30ca | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 4.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.3 % | **8.4 %** | 10.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-V-BK | 12.90 € | **12.50 €** | 11.5 % | **8.0 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto ESPRESSO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.1 % | **6.6 %** | 10.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAFE AU LAIT 30Cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® DG Flat White kapsle 30 ks | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.50 €** | 11.0 % | **8.2 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAPPUCCINO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 9.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 75 cm černý | 14.90 € | **14.50 €** | 9.0 % | **6.1 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.2 % | **9.0 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.50 €** | 12.8 % | **9.3 %** | 11.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.1 % | **7.3 %** | 15.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.50 €** | 11.6 % | **8.7 %** | 14.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo vodní filtry 3+1 | 11.90 € | **11.50 €** | 11.2 % | **7.5 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 12.9 % | **9.1 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 11.9 % | **7.8 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.40 € | **5.00 €** | 47.3 % | **36.4 %** | 5.01 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.80 €** | 53.7 % | **43.8 %** | 5.85 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.80 €** | 53.7 % | **43.8 %** | 5.85 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **6.00 €** | 53.5 % | **43.9 %** | 6.05 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.50 €** | 55.6 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.80 €** | 48.5 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.59 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.59 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.50 €** | 46.2 % | **40.9 %** | 10.61 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.50 €** | 47.7 % | **43.8 %** | 14.62 € | stávame sa najlacnejší |
| Selfie tyč Puluz pre Insta360 One RS / X2 / X3 / X4 ... | 12.90 € | **12.50 €** | 15.3 % | **11.7 %** | 12.67 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 13.8 % | **10.0 %** | 11.71 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.71 € | stávame sa najlacnejší |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 14.90 € | **14.50 €** | 9.5 % | **6.6 %** | 14.72 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.90 € | **12.50 €** | 34.5 % | **30.3 %** | 12.73 € | stávame sa najlacnejší |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.90 € | **13.50 €** | 49.7 % | **45.4 %** | 13.74 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Ring light with phone holder PULUZ | 13.90 € | **13.50 €** | 11.6 % | **8.3 %** | 13.75 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.90 € | **10.50 €** | 46.7 % | **41.3 %** | 10.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.90 € | **10.50 €** | 38.0 % | **33.0 %** | 10.81 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 11.90 € | **11.50 €** | 10.8 % | **7.1 %** | 11.81 € | stávame sa najlacnejší |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.90 € | **12.50 €** | 18.6 % | **15.0 %** | 12.82 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 20.5 % | **16.4 %** | 11.84 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 11.90 € | **11.50 €** | 38.6 % | **33.9 %** | 11.86 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.50 €** | 21.6 % | **18.4 %** | 14.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.90 € | **13.50 €** | 35.8 % | **31.9 %** | 13.88 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.89 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.50 €** | 31.1 % | **27.0 %** | 12.89 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.80 €** | 56.9 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, natura... | 2.40 € | **2.00 €** | 54.9 % | **29.0 %** | 2.03 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.10 €** | 53.0 % | **35.5 %** | 3.14 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.50 €** | 40.9 % | **26.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 57.1 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.90 € | **3.50 €** | 48.9 % | **33.6 %** | 3.58 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.50 €** | 47.1 % | **16.1 %** | 1.59 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.23 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.23 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 4.80 € | **4.40 €** | 54.9 % | **42.0 %** | 4.49 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.59 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 27.90 € | **27.50 €** | 14.6 % | **12.9 %** | 27.59 € | stávame sa najlacnejší |
| Tester USB 2w1 FNIRSI FNAC-28 USB-C USB-A | 16.90 € | **16.50 €** | 15.5 % | **12.7 %** | 16.59 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.20 € | **8.80 €** | 37.7 % | **31.8 %** | 8.90 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 22.90 € | **22.50 €** | 16.0 % | **14.0 %** | 22.69 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 20.90 € | **20.50 €** | 14.0 % | **11.9 %** | 20.71 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.90 € | **28.50 €** | 39.1 % | **37.2 %** | 28.75 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.50 €** | 38.4 % | **36.1 %** | 23.75 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 16.90 € | **16.50 €** | 11.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 50.90 € | **50.50 €** | 10.4 % | **9.5 %** | 50.76 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 50.90 € | **50.50 €** | 11.2 % | **10.3 %** | 50.76 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.90 € | **31.50 €** | 55.0 % | **53.1 %** | 31.77 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **21.50 €** | 34.0 % | **31.5 %** | 21.77 € | stávame sa najlacnejší |
| JBL TUNE 310 USB-C Blue | 16.90 € | **16.50 €** | 11.4 % | **8.8 %** | 16.78 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 23.90 € | **23.50 €** | 8.3 % | **6.4 %** | 23.79 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.90 € | **36.50 €** | 13.2 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| Stolný statív Puluz PU3070GT | 40.90 € | **40.50 €** | 7.0 % | **5.9 %** | 40.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6011-GL 72x42c... | 23.90 € | **23.50 €** | 12.5 % | **10.6 %** | 23.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.80 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.90 € | **26.50 €** | 38.7 % | **36.6 %** | 26.80 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.5 % | **15.0 %** | 31.80 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 19.90 € | **19.50 €** | 12.0 % | **9.8 %** | 19.80 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.90 € | **30.50 €** | 54.8 % | **52.8 %** | 30.82 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 16.90 € | **16.50 €** | 15.6 % | **12.8 %** | 16.82 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.90 € | **36.50 €** | 17.5 % | **16.2 %** | 36.82 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.90 € | **36.50 €** | 17.8 % | **16.6 %** | 36.82 € | stávame sa najlacnejší |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.90 € | **27.50 €** | 14.7 % | **13.0 %** | 27.83 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 16.90 € | **16.50 €** | 25.5 % | **22.5 %** | 16.85 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.90 € | **16.50 €** | 12.7 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.50 €** | 38.2 % | **35.0 %** | 16.89 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.90 € | **18.50 €** | 20.0 % | **17.5 %** | 18.89 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.90 € | **24.50 €** | 16.7 % | **14.8 %** | 24.89 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.90 € | **266.50 €** | 6.9 % | **6.8 %** | 266.67 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 301.90 € | **301.50 €** | 6.4 % | **6.3 %** | 301.70 € | stávame sa najlacnejší |
| Grafický tablet Huion Slate 11 | 270.90 € | **270.50 €** | 13.6 % | **13.4 %** | 270.70 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (červený) | 275.90 € | **275.50 €** | 8.5 % | **8.3 %** | 275.70 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 799.90 € | **799.50 €** | 14.3 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.70 €** | 38.7 % | **34.6 %** | 9.71 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.60 € | **2.30 €** | 48.9 % | **31.7 %** | 2.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 3.20 € | **2.90 €** | 46.2 % | **32.5 %** | 2.99 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.70 €** | 56.3 % | **32.9 %** | 1.71 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.80 €** | 55.2 % | **33.0 %** | 1.82 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.30 €** | 58.6 % | **28.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.80 €** | 52.4 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.70 €** | 54.9 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight bezpečnostná zátka - sada 5ks+1 kľúčik | 1.60 € | **1.30 €** | 60.6 % | **30.5 %** | 1.36 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.40 €** | 44.0 % | **18.6 %** | 1.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.50 € | **4.20 €** | 53.7 % | **43.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.90 € | **2.60 €** | 50.2 % | **34.6 %** | 2.64 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.74 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.10 € | **3.80 €** | 54.3 % | **43.0 %** | 3.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 6.10 € | **5.80 €** | 55.0 % | **47.4 %** | 5.85 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.70 € | **4.40 €** | 52.8 % | **43.1 %** | 4.46 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.20 €** | 55.5 % | **42.2 %** | 3.26 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **3.10 €** | 47.0 % | **34.1 %** | 3.17 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.90 € | **2.60 €** | 48.3 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.50 €** | 48.8 % | **32.8 %** | 2.58 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 9.10 € | **8.80 €** | 42.3 % | **37.6 %** | 8.88 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.20 € | **3.00 €** | 53.9 % | **44.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.60 € | **2.40 €** | 47.8 % | **36.4 %** | 2.41 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.80 € | **4.60 €** | 44.5 % | **38.5 %** | 4.62 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.80 €** | 41.8 % | **32.4 %** | 2.84 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 20W, 1700lm, 4000K, IP6... | 6.70 € | **6.50 €** | 48.4 % | **44.0 %** | 6.54 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.80 €** | 41.0 % | **31.6 %** | 2.84 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.90 €** | 47.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.90 €** | 47.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.00 € | **6.80 €** | 19.6 % | **16.1 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 50m, pr... | 5.50 € | **5.30 €** | 36.3 % | **31.4 %** | 5.39 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.40 €** | 44.5 % | **26.5 %** | 1.50 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 0.98 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **1.00 €** | 54.9 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.50 € | **1.30 €** | 50.6 % | **30.5 %** | 1.35 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.70 €** | 47.1 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.18 € | stávame sa najlacnejší |
| Solight náhradné trubičky pre alkohol tester Solight... | 1.30 € | **1.10 €** | 44.8 % | **22.5 %** | 1.19 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.90 €** | 46.2 % | **39.1 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 9.00 € | **8.80 €** | 47.5 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.20 € | **9.00 €** | 10.8 % | **8.4 %** | 9.09 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 10.00 € | **9.80 €** | 53.4 % | **50.3 %** | 9.90 € | stávame sa najlacnejší |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 530.00 € | **529.90 €** | 11.4 % | **11.4 %** | 529.95 € | stávame sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT310 | 283.00 € | **282.90 €** | 12.3 % | **12.3 %** | 282.95 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 488.00 € | **487.90 €** | 11.0 % | **11.0 %** | 487.95 € | stávame sa najlacnejší |
| Resto 93501 Hrnec s pokličkou 20 cm | 36.00 € | **35.90 €** | 10.2 % | **9.8 %** | 35.92 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 16.5 % | **15.9 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.00 € | **26.90 €** | 13.6 % | **13.2 %** | 26.96 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 28.00 € | **27.90 €** | 13.4 % | **13.0 %** | 27.98 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 17.00 € | **16.90 €** | 25.2 % | **24.5 %** | 16.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.1 % | **6.6 %** | 23.99 € | stávame sa najlacnejší |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **20.90 €** | 30.3 % | **29.7 %** | 20.99 € | stávame sa najlacnejší |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 26.00 € | **25.90 €** | 17.1 % | **16.7 %** | 25.99 € | stávame sa najlacnejší |
| Herní mikrofon Maono DGM20 (černý) | 27.00 € | **26.90 €** | 13.9 % | **13.5 %** | 26.99 € | stávame sa najlacnejší |
| Mikrofón Maono DGM20 (biely) | 27.00 € | **26.90 €** | 14.2 % | **13.8 %** | 26.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.80 € | **9.70 €** | 29.6 % | **28.2 %** | 9.79 € | stávame sa najlacnejší |
| Joystick PXN-2113 PRO Ovládanie letu PC | 29.00 € | **28.90 €** | 5.5 % | **5.1 %** | 28.99 € | stávame sa najlacnejší |
| Solight LED svetelný zdroj do stropných svetiel, 18W... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.12 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.20 € | **5.10 €** | 46.3 % | **43.5 %** | 5.15 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.20 € | **5.10 €** | 28.1 % | **25.6 %** | 5.15 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.20 € | **4.10 €** | 23.3 % | **20.3 %** | 4.17 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 4.90 € | **4.80 €** | 34.6 % | **31.8 %** | 4.87 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.70 € | **4.60 €** | 35.0 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.90 € | **4.80 €** | 8.8 % | **6.6 %** | 4.89 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.30 €** | 45.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 6.90 € | **6.80 €** | 13.1 % | **11.5 %** | 6.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.40 € | **4.30 €** | 13.9 % | **11.3 %** | 4.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.70 € | **4.60 €** | 37.0 % | **34.0 %** | 4.69 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.02 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.02 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **1.00 €** | 49.1 % | **35.5 %** | 1.02 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **1.00 €** | 49.1 % | **35.5 %** | 1.02 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.80 €** | 48.2 % | **44.4 %** | 3.84 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.60 €** | 46.7 % | **42.8 %** | 3.65 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.45 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.80 €** | 17.4 % | **14.4 %** | 3.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.90 € | **3.80 €** | 32.7 % | **29.3 %** | 3.85 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 2.00 € | **1.90 €** | 40.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.27 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.27 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.27 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.27 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.27 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.40 € | **3.30 €** | 38.2 % | **34.1 %** | 3.37 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.20 € | **3.10 €** | 37.7 % | **33.4 %** | 3.17 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.60 € | **3.50 €** | 35.5 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.60 € | **3.50 €** | 24.5 % | **21.1 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.40 € | **3.30 €** | 23.4 % | **19.8 %** | 3.38 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **3.00 €** | 16.1 % | **12.4 %** | 3.08 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.40 €** | 34.2 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.90 €** | 22.7 % | **19.7 %** | 3.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.50 € | **3.40 €** | 36.8 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.70 € | **3.60 €** | 18.9 % | **15.7 %** | 3.69 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.70 € | **3.60 €** | 45.3 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.10 € | **2.00 €** | 29.3 % | **23.2 %** | 2.09 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.60 €** | 53.6 % | **44.5 %** | 1.61 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.10 €** | 43.5 % | **31.5 %** | 1.14 € | stávame sa najlacnejší |
| Solight náhradné trubičky pro alkohol tester Solight... | 1.70 € | **1.60 €** | 38.2 % | **30.1 %** | 1.64 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.30 €** | 32.4 % | **22.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.17 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.17 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.17 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.10 €** | 39.4 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 45.7 % | **38.1 %** | 1.89 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Vlákno Creality TPU (biele) | 16.00 € | **15.90 €** | 13.5 % | **12.8 %** | 15.94 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.50 €** | 32.5 % | **30.5 %** | 6.55 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.50 €** | 32.5 % | **30.5 %** | 6.55 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.20 €** | 36.2 % | **32.1 %** | 3.25 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.80 € | **5.70 €** | 32.5 % | **30.2 %** | 5.75 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.90 €** | 26.8 % | **25.6 %** | 9.95 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.00 € | **10.90 €** | 9.3 % | **8.3 %** | 10.96 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.20 € | **9.10 €** | 39.5 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.30 € | **5.20 €** | 38.1 % | **35.5 %** | 5.26 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.60 € | **8.50 €** | 37.4 % | **35.8 %** | 8.56 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 6.9 % | **5.4 %** | 7.06 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.10 € | **6.00 €** | 27.5 % | **25.4 %** | 6.06 € | stávame sa najlacnejší |
| Leifheit Thermo Reflect L/Universal | 15.00 € | **14.90 €** | 20.9 % | **20.1 %** | 14.97 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.10 € | **8.00 €** | 17.0 % | **15.5 %** | 8.07 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.10 € | **8.00 €** | 17.0 % | **15.5 %** | 8.07 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 7 krížový, biely | 4.80 € | **4.70 €** | 38.9 % | **36.0 %** | 4.77 € | stávame sa najlacnejší |
| Solight teplomer | 9.70 € | **9.60 €** | 38.8 % | **37.4 %** | 9.68 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.50 € | **5.40 €** | 35.1 % | **32.6 %** | 5.48 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 5.50 € | **5.40 €** | 17.7 % | **15.5 %** | 5.48 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.60 € | **9.50 €** | 37.2 % | **35.7 %** | 9.58 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.20 €** | 37.2 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.40 € | **8.30 €** | 15.2 % | **13.8 %** | 8.39 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 8.00 € | **7.90 €** | 12.3 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.80 € | **3.70 €** | 30.9 % | **27.5 %** | 3.79 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.60 € | **6.50 €** | 22.5 % | **20.7 %** | 6.59 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 28.3 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 8.7 % | **7.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11 | 6.00 € | **5.90 €** | 34.8 % | **32.5 %** | 5.99 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.90 €** | 30.8 % | **29.0 %** | 6.99 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.90 €** | 26.4 % | **24.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.50 € | **9.40 €** | 19.2 % | **17.9 %** | 9.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.90 €** | 36.9 % | **35.2 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.80 € | **2.70 €** | 31.6 % | **26.9 %** | 2.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.50 € | **5.40 €** | 42.9 % | **40.3 %** | 5.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **4.90 €** | 21.0 % | **18.6 %** | 4.99 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.50 € | **4.40 €** | 37.0 % | **34.0 %** | 4.49 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.10 € | **9.00 €** | 11.8 % | **10.5 %** | 9.09 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 238.00 € | **237.90 €** | 42899.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 83.00 € | **82.90 €** | 9.7 % | **9.6 %** | 82.98 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 68.00 € | **67.90 €** | 7.3 % | **7.1 %** | 67.99 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 94.00 € | **93.90 €** | 8.9 % | **8.8 %** | 93.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 125.00 € | **124.90 €** | 9.5 % | **9.4 %** | 124.99 € | stávame sa najlacnejší |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-11

Vstup: `premiumstore-sk_2026-10-11_08-23.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7447**
- Návrh **zvýšiť** cenu: **168** produktov
- Návrh **znížiť** cenu: **153** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **7126** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **8**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **762**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (168)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria Flytec V900 12000mah | 16.00 € | **223.90 €** | 15.3 % | **1513.8 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **223.90 €** | 14.5 % | **476.1 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 789.90 € | **941.90 €** | 8.2 % | **29.1 %** | 941.97 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality Sermoon S1 | 2377.90 € | **2459.90 €** | 5.0 % | **8.6 %** | 2459.99 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint POP 4 Premium | 930.90 € | **999.90 €** | 13.4 % | **21.8 %** | 1000.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener REVOPOINT Mini 2 – edícia Advanced | 952.90 € | **1009.00 €** | 14.9 % | **21.7 %** | 1009.17 € | cena podľa najlacnejšieho iného predajcu |
| Chladnička na nápoje Euhomy BR001-110 s objemom 91 l... | 207.50 € | **233.50 €** | 13.6 % | **27.9 %** | 233.88 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 93.90 € | **116.90 €** | 15.0 % | **43.2 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 93.90 € | **116.90 €** | 15.0 % | **43.2 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 98.00 € | **119.50 €** | 15.0 % | **40.3 %** | 119.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.50 € | **118.00 €** | 19.7 % | **44.9 %** | 118.10 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT Antik Water Heater PWH 01 V3+... | 358.50 € | **378.90 €** | 4.6 % | **10.5 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (biele) | 87.50 € | **106.90 €** | 14.8 % | **40.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (čierne) | 87.50 € | **106.90 €** | 14.8 % | **40.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (oranžové) | 87.50 € | **106.90 €** | 14.8 % | **40.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 341.00 € | **359.50 €** | 6.9 % | **12.6 %** | 359.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.00 € | **103.00 €** | 19.5 % | **44.8 %** | 103.18 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 154.00 € | **169.90 €** | 23.2 % | **35.9 %** | 169.98 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter na odstraňova... | 192.50 € | **207.00 €** | 28.7 % | **38.4 %** | 207.24 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter s aktívnym uhlím | 192.50 € | **207.00 €** | 28.7 % | **38.4 %** | 207.24 € | cena podľa najlacnejšieho iného predajcu |
| Candy CIFC6647CCBB | 184.50 € | **198.90 €** | 10.0 % | **18.6 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z15ST s 15,6-palcovým dotyk... | 129.50 € | **141.90 €** | 11.2 % | **21.8 %** | 142.00 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Hi-Fi Tuner TR04CD | 172.00 € | **183.50 €** | 10.1 % | **17.4 %** | 183.58 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 119.50 € | **131.00 €** | 10.2 % | **20.8 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Ultra hustý uhlíkový... | 149.50 € | **160.00 €** | 29.7 % | **38.9 %** | 160.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 30.50 € | **39.90 €** | 32.1 % | **72.8 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj xTool S1 40 W 2 v 1, zákl... | 1826.90 € | **1836.00 €** | 15.4 % | **16.0 %** | 1836.42 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GKS5C71CLI | 476.00 € | **484.50 €** | 5.1 % | **7.0 %** | 484.60 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Black | 41.50 € | **49.90 €** | 11.1 % | **33.6 %** | 49.96 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Pink | 41.50 € | **49.90 €** | 11.1 % | **33.6 %** | 49.96 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 White | 41.50 € | **49.90 €** | 11.1 % | **33.6 %** | 49.96 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 404.00 € | **411.50 €** | 5.7 % | **7.7 %** | 411.88 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1384.50 € | **1391.00 €** | 11.7 % | **12.3 %** | 1391.09 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 16.50 € | **23.00 €** | 6.2 % | **48.1 %** | 23.31 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Telesin CPL/ND8/ND16/ND32 pre Insta3... | 32.00 € | **38.50 €** | 14.8 % | **38.1 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50i (sivé) | 28.50 € | **35.00 €** | 15.0 % | **41.2 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky C50i (biele) | 28.50 € | **35.00 €** | 15.0 % | **41.2 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 98.50 € | **104.50 €** | 14.8 % | **21.8 %** | 104.67 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 539.90 € | **545.00 €** | 13.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Reproduktor Edifier D12 (čierny) | 81.00 € | **86.00 €** | 5.2 % | **11.7 %** | 86.33 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier D12 (hnedý) | 81.00 € | **86.00 €** | 5.2 % | **11.7 %** | 86.33 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – filter so strednou ú... | 147.50 € | **152.50 €** | 34.3 % | **38.8 %** | 152.88 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – vysokoúčinný filter | 147.50 € | **152.50 €** | 34.3 % | **38.8 %** | 152.88 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 989.00 € | **993.50 €** | 12.8 % | **13.3 %** | 993.69 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10000 Top Ceramic | 41.50 € | **45.00 €** | 10.8 % | **20.2 %** | 45.13 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 84.50 € | **88.00 €** | 7.9 % | **12.4 %** | 88.16 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXSHM-1402-TR | 15.50 € | **19.00 €** | 11.6 % | **36.8 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 18.50 € | **21.90 €** | 17.0 % | **38.6 %** | 21.96 € | cena podľa najlacnejšieho iného predajcu |
| Behringer X32 COMPACT | 1853.00 € | **1856.00 €** | 6.6 % | **6.8 %** | 1856.16 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj XTOOL M2 Standard 20 W | 1291.00 € | **1294.00 €** | 15.5 % | **15.7 %** | 1294.29 € | cena podľa najlacnejšieho iného predajcu |
| LaserPecker LX2 40W laserový gravír | 1834.90 € | **1837.50 €** | 14.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| BEKO MOC20100WFB | 49.50 € | **52.00 €** | 5.3 % | **10.6 %** | 52.15 € | cena podľa najlacnejšieho iného predajcu |
| GameSir X5 Lite BK – mobilný herný ovládač USB-C, či... | 39.00 € | **41.50 €** | 76.4 % | **87.8 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper ABS (sivý) | 14.50 € | **17.00 €** | 16.6 % | **36.7 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Black | 47.50 € | **49.90 €** | 10.2 % | **15.7 %** | 49.96 € | cena podľa najlacnejšieho iného predajcu |
| Sušička ovoce Ruhhy 25928 400W | 55.90 € | **57.90 €** | 18.3 % | **22.6 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 24 GEN 3 GT2402 | 1565.90 € | **1567.90 €** | 51.0 % | **51.2 %** | 1568.00 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 428.50 € | **430.50 €** | 14.3 % | **14.9 %** | 430.68 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 31.00 € | **33.00 €** | 13.5 % | **20.9 %** | 33.23 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit 81520 Pegasus 200 Solid | 36.50 € | **38.50 €** | 10.7 % | **16.8 %** | 38.79 € | cena podľa najlacnejšieho iného predajcu |
| ETA Aquabelo 1264 90000, černý/bílý | 43.00 € | **45.00 €** | 8.8 % | **13.8 %** | 45.30 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 203.50 € | **205.50 €** | 13.8 % | **14.9 %** | 205.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (modrý) | 44.50 € | **46.50 €** | 23.6 % | **29.2 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 15.50 € | **17.00 €** | 11.9 % | **22.7 %** | 17.11 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.00 € | **17.50 €** | 25.6 % | **37.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.50 € | **26.00 €** | 30.4 % | **38.4 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Pure POP Home & Travel DT2040E1 | 33.90 € | **34.90 €** | 10.2 % | **13.5 %** | 34.92 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 686.90 € | **687.90 €** | 36.4 % | **36.6 %** | 687.98 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L3350 | 184.50 € | **185.50 €** | 8.6 % | **9.2 %** | 185.59 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 501.00 € | **502.00 €** | 7.9 % | **8.1 %** | 502.09 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 501.00 € | **502.00 €** | 22.5 % | **22.8 %** | 502.09 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool OMSR58CU1SX | 326.90 € | **327.90 €** | 5.6 % | **5.9 %** | 328.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu PLA Classic (čierny), 1,75 mm, 1 kg | 13.50 € | **14.50 €** | 50.4 % | **61.5 %** | 14.75 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 828.50 € | **829.50 €** | 27.2 % | **27.4 %** | 829.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 11.50 € | **12.50 €** | 14.0 % | **23.9 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 24.50 € | **25.50 €** | 39.9 % | **45.6 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-302 | 57.50 € | **58.50 €** | 54.0 % | **56.7 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.00 € | **15.00 €** | 18.2 % | **26.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| N3_ Sunnylife 073528 puzdro na okuliare | 23.00 € | **24.00 €** | 28.3 % | **33.8 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight výsuvná nabíjačka USB A+C 24 W PD, čierna | 7.10 € | **7.80 €** | 19.3 % | **31.0 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0026 | 19.90 € | **20.50 €** | 6.7 % | **9.9 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (čierna) | 14.90 € | **15.50 €** | 19.3 % | **24.2 %** | 15.81 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (sivá) | 14.90 € | **15.50 €** | 13.1 % | **17.7 %** | 15.81 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER707-M2 VPN 4x GWAN/Lan, 2x 2.5GWan/... | 140.90 € | **141.50 €** | 5.0 % | **5.5 %** | 141.78 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 78.90 € | **79.50 €** | 5.0 % | **5.8 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic JUNE-60 V2 | 70.00 € | **70.50 €** | 18.4 % | **19.2 %** | 70.51 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 121.00 € | **121.50 €** | 13.1 % | **13.6 %** | 121.52 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 119.50 € | **120.00 €** | 13.1 % | **13.6 %** | 120.02 € | cena podľa najlacnejšieho iného predajcu |
| Behringer TUBE ULTRAGAIN MIC500USB audiophile preamp... | 95.00 € | **95.50 €** | 28.5 % | **29.2 %** | 95.54 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2459BS | 51.00 € | **51.50 €** | 10.2 % | **11.3 %** | 51.55 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP211-Bridge KIT vonkajší spoj,... | 145.50 € | **146.00 €** | 8.1 % | **8.5 %** | 146.05 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 362.00 € | **362.50 €** | 81.0 % | **81.3 %** | 362.55 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 169.50 € | **170.00 €** | 18.0 % | **18.3 %** | 170.06 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.00 € | **114.50 €** | 17.2 % | **17.7 %** | 114.57 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NX1000D | 374.50 € | **375.00 €** | 80.2 % | **80.4 %** | 375.07 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 374.50 € | **375.00 €** | 49.0 % | **49.2 %** | 375.07 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone X1 megaphone and distorting voc... | 120.00 € | **120.50 €** | 32.7 % | **33.3 %** | 120.57 € | cena podľa najlacnejšieho iného predajcu |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **13.00 €** | 30.3 % | **35.5 %** | 13.08 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 54.00 € | **54.50 €** | 13.0 % | **14.0 %** | 54.59 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.00 € | **33.50 €** | 7.2 % | **8.8 %** | 33.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 64.00 € | **64.50 €** | 17.9 % | **18.8 %** | 64.59 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 102.50 € | **103.00 €** | 13.7 % | **14.2 %** | 103.09 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.00 € | **181.50 €** | 25.4 % | **25.7 %** | 181.59 € | cena podľa najlacnejšieho iného predajcu |
| Behringer U-PHORIA STUDIO PRO recording/podcast boundle | 132.50 € | **133.00 €** | 9.6 % | **10.0 %** | 133.09 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.00 € | **168.50 €** | 33.4 % | **33.8 %** | 168.59 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA38F2K7NXBB | 136.50 € | **137.00 €** | 13.3 % | **13.7 %** | 137.09 € | cena podľa najlacnejšieho iného predajcu |
| TC ELECTRONIC PLETHORA X1 TonePrint Loader so 14 leg... | 145.00 € | **145.50 €** | 11.9 % | **12.3 %** | 145.61 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto Stereo Looper | 145.00 € | **145.50 €** | 29.3 % | **29.7 %** | 145.61 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto+ Looper multi-session looper pedal | 157.50 € | **158.00 €** | 13.2 % | **13.6 %** | 158.12 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.00 € | **217.50 €** | 13.5 % | **13.7 %** | 217.63 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.00 € | **217.50 €** | 36.4 % | **36.7 %** | 217.63 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 148.00 € | **148.50 €** | 5.3 % | **5.7 %** | 148.65 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 314.50 € | **315.00 €** | 5.3 % | **5.5 %** | 315.15 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES206XPP-M2 5x 2,5GLan s PoE++, 1x 10... | 175.00 € | **175.50 €** | 5.0 % | **5.3 %** | 175.65 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.00 € | **158.50 €** | 15.7 % | **16.1 %** | 158.67 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 195.00 € | **195.50 €** | 7.3 % | **7.6 %** | 195.67 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 207.50 € | **208.00 €** | 50.1 % | **50.4 %** | 208.19 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.00 € | **35.50 €** | 21.6 % | **23.3 %** | 35.69 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.50 € | **163.00 €** | 21.2 % | **21.6 %** | 163.19 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE VQ1500D active PA subwoofer | 499.50 € | **500.00 €** | 74.6 % | **74.8 %** | 500.23 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 5 powered studio monitor | 257.50 € | **258.00 €** | 48.1 % | **48.4 %** | 258.25 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri Carbon 2 | 371.50 € | **372.00 €** | 7.3 % | **7.4 %** | 372.28 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx QX1222USB mixpult s USB a efektmi | 282.50 € | **283.00 €** | 54.7 % | **55.0 %** | 283.28 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 344.00 € | **344.50 €** | 20.1 % | **20.2 %** | 344.79 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 318.00 € | **318.50 €** | 18.4 % | **18.6 %** | 318.79 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 50.00 € | **50.50 €** | 60.6 % | **62.2 %** | 50.80 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 307.50 € | **308.00 €** | 36.5 % | **36.8 %** | 308.32 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 345.00 € | **345.50 €** | 28.0 % | **28.2 %** | 345.87 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA CD-S303 BLACK | 374.00 € | **374.50 €** | 5.0 % | **5.2 %** | 374.89 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 319.50 € | **320.00 €** | 19.6 % | **19.8 %** | 320.39 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 12.00 € | **12.50 €** | 15.2 % | **20.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.00 € | **14.50 €** | 13.0 % | **17.1 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.50 € | **472.00 €** | 9.0 % | **9.1 %** | 472.49 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 496.50 € | **497.00 €** | 5.3 % | **5.4 %** | 497.50 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (biela) | 12.50 € | **13.00 €** | 32.2 % | **37.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 249.50 € | **249.90 €** | 73.9 % | **74.2 %** | 249.91 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 93.50 € | **93.90 €** | 17.2 % | **17.7 %** | 93.93 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.50 € | **208.90 €** | 16.6 % | **16.8 %** | 208.96 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 76.50 € | **76.90 €** | 16.7 % | **17.3 %** | 76.97 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone E1 vocal echo/delay pedál | 178.50 € | **178.90 €** | 64.2 % | **64.6 %** | 178.98 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone H1 | 178.50 € | **178.90 €** | 28.3 % | **28.6 %** | 178.98 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone R1 | 178.50 € | **178.90 €** | 36.9 % | **37.2 %** | 178.98 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BP720 | 72.50 € | **72.90 €** | 10.2 % | **10.8 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix venkovní kamera 4v1 s ... | 56.50 € | **56.90 €** | 16.1 % | **16.9 %** | 56.95 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC410 KIT 3MPx, vonkajšia, I... | 59.50 € | **59.90 €** | 5.4 % | **6.1 %** | 60.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 334.50 € | **334.90 €** | 22.5 % | **22.7 %** | 334.97 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezpečnostná zátka - sada 5ks+1 kľúčik | 1.30 € | **1.50 €** | 12.4 % | **29.7 %** | 1.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.30 € | **9.50 €** | 31.0 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 45.90 € | **46.00 €** | 18.8 % | **19.1 %** | 46.02 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link SM6220-1M SFP+ Direct Attach Cable, 25... | 51.90 € | **52.00 €** | 22.8 % | **23.1 %** | 52.02 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.00 €** | 5.5 % | **5.8 %** | 44.04 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX35U PLUS AX 1800 adaptér... | 23.90 € | **24.00 €** | 7.1 % | **7.5 %** | 24.05 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.90 € | **63.00 €** | 17.6 % | **17.7 %** | 63.09 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 41.90 € | **42.00 €** | 20.8 % | **21.0 %** | 42.19 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (biela) | 23.90 € | **24.00 €** | 31.7 % | **32.3 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (čierna) | 23.90 € | **24.00 €** | 39.9 % | **40.5 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-M, 5 m, v... | 5.00 € | **5.10 €** | 23.9 % | **26.4 %** | 5.19 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.90 € | **71.00 €** | 14.4 % | **14.6 %** | 71.09 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.90 € | **90.00 €** | 15.4 % | **15.5 %** | 90.09 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **80.00 €** | 15.2 % | **15.3 %** | 80.09 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.90 € | **128.00 €** | 17.4 % | **17.5 %** | 128.09 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603GP-Desktop AP WiFi 6, 1x G... | 108.90 € | **109.00 €** | 5.4 % | **5.5 %** | 109.10 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.90 € | **153.00 €** | 19.6 % | **19.7 %** | 153.19 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603-Outdoor vonkajší AP, AX18... | 120.90 € | **121.00 €** | 5.2 % | **5.2 %** | 121.20 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 199.90 € | **200.00 €** | 19.4 % | **19.5 %** | 200.21 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 246.90 € | **247.00 €** | 31.0 % | **31.0 %** | 247.24 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 93.90 € | **94.00 €** | 10.2 % | **10.3 %** | 94.39 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP623-Outdoor HD vonkajší AP, 1... | 181.90 € | **182.00 €** | 5.1 % | **5.2 %** | 182.40 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (153)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D tlačiareň LONGER LK10 Plus | 500.00 € | **367.50 €** | 56.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| BEKO CEG7302B | 297.00 € | **241.90 €** | 31.4 % | **7.0 %** | 241.93 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 700 PRO X, profesionálne slúchadlá | 249.00 € | **227.50 €** | 15.0 % | **5.1 %** | 224.72 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový gravír XTOOL M2 20 W | 1143.50 € | **1124.50 €** | 17.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| beyerdynamic DT 252 80 Ohm | 221.90 € | **204.90 €** | 28.2 % | **18.4 %** | 205.00 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 375.00 € | **359.50 €** | 20.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Mlynček na kávu AMZCHEF CE-CG209-SV (strieborný) | 114.00 € | **99.00 €** | 40.3 % | **21.8 %** | 99.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (červený) | 39.50 € | **25.00 €** | 119.4 % | **38.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (čierny) | 39.50 € | **25.00 €** | 119.4 % | **38.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (oranžový) | 39.50 € | **25.00 €** | 119.4 % | **38.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (ružový) | 39.50 € | **25.00 €** | 119.4 % | **38.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Přenosná nabíječka Qoltec 52720 5m /16A, 400V, CEE 5... | 220.50 € | **207.90 €** | 11.5 % | **5.1 %** | 208.00 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Canon | 294.50 € | **284.90 €** | 42.8 % | **38.1 %** | 284.95 € | cena podľa najlacnejšieho iného predajcu |
| Filter nádoby na dym LaserPecker Air Purifier | 94.50 € | **85.50 €** | 27.2 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Odšťavovač CE-ZM1902M-SV (strieborný) | 84.00 € | **75.90 €** | 34.9 % | **21.9 %** | 75.96 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 205.00 € | **198.00 €** | 8.7 % | **5.0 %** | 198.21 € | cena podľa najlacnejšieho iného predajcu |
| Automatický dávkovač krmiva Rojeco 2 l | 38.00 € | **31.50 €** | 37.5 % | **14.0 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna meteostanica, prehľadný a diza... | 62.50 € | **57.50 €** | 21.8 % | **12.1 %** | 57.53 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1902B-SV | 90.50 € | **85.50 €** | 28.5 % | **21.4 %** | 85.67 € | cena podľa najlacnejšieho iného predajcu |
| Projector Blitzwolf, BW-V8, 4K, Android OS | 146.50 € | **141.50 €** | 23.6 % | **19.4 %** | 141.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 53.50 € | **49.00 €** | 35.8 % | **24.4 %** | 49.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 12.50 € | **8.30 €** | 130.4 % | **53.0 %** | 8.38 € | cena podľa najlacnejšieho iného predajcu |
| Lamax PartyGo1 Play | 83.50 € | **79.50 €** | 10.4 % | **5.1 %** | 66.73 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SILVERLIT ponorka Spy Cam Aqua HD | 38.50 € | **34.90 €** | 24.8 % | **13.1 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Coca Cola Výrobník Hot-Dogů | 83.00 € | **79.50 €** | 10.1 % | **5.5 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux 600 E62SD100SX | 439.00 € | **435.50 €** | 15.9 % | **14.9 %** | 435.75 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 13.00 € | **9.60 €** | 80.7 % | **33.4 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.70 € | **5.60 €** | 74.6 % | **12.4 %** | 5.70 € | cena podľa najlacnejšieho iného predajcu |
| Impregnace na kožené oděvy INPRODUCTS WAX 400 ml | 29.00 € | **26.00 €** | 17.9 % | **5.7 %** | 26.09 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 655.90 € | **652.90 €** | 118400.5 % | **117858.4 %** | 653.00 € | cena podľa najlacnejšieho iného predajcu |
| Lampa monitora BlitzWolf BW-CML6 | 64.00 € | **61.00 €** | 26.8 % | **20.9 %** | 61.17 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer AX23 WiFi Router | 54.50 € | **51.90 €** | 10.7 % | **5.4 %** | 49.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| iRobot Roomba 115 Combo + Charge dock | 131.50 € | **128.90 €** | 10.2 % | **8.0 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER BL120B – LED svetlo na selfie s upínacím mech... | 24.50 € | **22.00 €** | 32.8 % | **19.2 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 143.50 € | **141.00 €** | 6.9 % | **5.1 %** | 141.28 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 39.00 € | **36.50 €** | 51.0 % | **41.3 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo infra sušička NIR+ | 182.90 € | **180.50 €** | 10.2 % | **8.8 %** | 180.60 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT839 | 27.90 € | **25.50 €** | 36.8 % | **25.0 %** | 25.58 € | cena podľa najlacnejšieho iného predajcu |
| EcoFlow DELTA 3 nabíjecí stanice 1ECO1340 | 797.00 € | **795.00 €** | 5.3 % | **5.0 %** | 687.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Sušák na prádlo Pegasus 200 | 42.50 € | **40.50 €** | 10.6 % | **5.4 %** | 39.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 8.90 € | **6.90 €** | 83.6 % | **42.4 %** | 7.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka 6x USB Blitzwolf BW-S15, QC 3.0,60 W (biela) | 26.00 € | **24.00 €** | 31.0 % | **20.9 %** | 24.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 34.50 € | **32.50 €** | 20.3 % | **13.4 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 64.50 € | **62.50 €** | 14.1 % | **10.6 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu |
| Cocinare CICM-301 Krush Mraziaca miska (čierna) | 14.00 € | **12.00 €** | 55.5 % | **33.3 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB46E838 | 64.00 € | **62.50 €** | 19.1 % | **16.3 %** | 62.84 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VF4 360° Projector Stand | 12.50 € | **11.00 €** | 44.4 % | **27.0 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 64.90 € | **63.90 €** | 162.0 % | **158.0 %** | 63.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 12.3 % | **7.3 %** | 21.59 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 408.90 € | **407.90 €** | 9.2 % | **8.9 %** | 408.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 411.90 € | **410.90 €** | 9.2 % | **8.9 %** | 411.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 393.90 € | **392.90 €** | 5.4 % | **5.2 %** | 393.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 218.90 € | **217.90 €** | 39448.3 % | **39267.7 %** | 218.00 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 21.50 € | **20.50 €** | 23.9 % | **18.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX ZE064 | 30.50 € | **29.50 €** | 14.8 % | **11.0 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 18.50 € | **17.50 €** | 11.3 % | **5.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongVision Mini, fotopast | 42.90 € | **42.00 €** | 11.0 % | **8.7 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-WW, 10 m,... | 7.20 € | **6.60 €** | 44.5 % | **32.5 %** | 6.70 € | cena podľa najlacnejšieho iného predajcu |
| Banquet Termohrnec LAVENDER 1,5 l | 11.50 € | **11.00 €** | 10.8 % | **6.0 %** | 9.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed držák na telefon FIXCRT-M14-BK | 15.50 € | **15.00 €** | 50.7 % | **45.9 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 107.00 € | **106.50 €** | 40.3 % | **39.6 %** | 106.78 € | cena podľa najlacnejšieho iného predajcu |
| Sada šipek 12dílná + příslušenství Trizand 21629 | 12.50 € | **12.00 €** | 15.2 % | **10.6 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 116.50 € | **116.00 €** | 42.4 % | **41.8 %** | 116.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42323PC | 78.50 € | **78.00 €** | 7.8 % | **7.2 %** | 78.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 928.00 € | **927.50 €** | 17.9 % | **17.9 %** | 927.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 29.00 € | **28.50 €** | 18.6 % | **16.6 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 51.00 € | **50.50 €** | 6.6 % | **5.5 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 79.50 € | **79.00 €** | 10.5 % | **9.8 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 848.50 € | **848.00 €** | 10.1 % | **10.0 %** | 848.39 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 389.00 € | **388.50 €** | 7.8 % | **7.6 %** | 388.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 354.00 € | **353.50 €** | 21.7 % | **21.5 %** | 353.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 315.50 € | **315.00 €** | 7.9 % | **7.8 %** | 315.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 117.50 € | **117.00 €** | 9.6 % | **9.2 %** | 117.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 109.50 € | **109.00 €** | 5.7 % | **5.2 %** | 109.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 141.50 € | **141.00 €** | 6.3 % | **5.9 %** | 141.39 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 76.00 € | **75.50 €** | 11.5 % | **10.8 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1281.00 € | **1280.50 €** | 6.6 % | **6.6 %** | 1280.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.00 € | **54.50 €** | 14.7 % | **13.6 %** | 54.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 287.00 € | **286.50 €** | 42.0 % | **41.8 %** | 286.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 248.50 € | **248.00 €** | 25.3 % | **25.1 %** | 248.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 278.50 € | **278.00 €** | 9.7 % | **9.5 %** | 278.39 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 36.00 € | **35.50 €** | 6.5 % | **5.0 %** | 35.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 270.00 € | **269.50 €** | 5.6 % | **5.4 %** | 269.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 153.00 € | **152.50 €** | 8.3 % | **7.9 %** | 152.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 72.50 € | **72.00 €** | 9.8 % | **9.0 %** | 72.39 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 44.50 € | **44.00 €** | 13.0 % | **11.8 %** | 44.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 138.00 € | **137.50 €** | 20.6 % | **20.2 %** | 137.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 82.00 € | **81.50 €** | 40.9 % | **40.1 %** | 81.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 232.00 € | **231.50 €** | 5.4 % | **5.2 %** | 231.89 € | cena podľa najlacnejšieho iného predajcu |
| REBEL Micropower 1000 | 75.00 € | **74.50 €** | 6.9 % | **6.2 %** | 74.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 654.50 € | **654.00 €** | 5.4 % | **5.3 %** | 654.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 312.50 € | **312.00 €** | 6.3 % | **6.1 %** | 312.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 611.50 € | **611.00 €** | 6.4 % | **6.3 %** | 611.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 641.50 € | **641.00 €** | 8.3 % | **8.2 %** | 641.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 689.50 € | **689.00 €** | 12.5 % | **12.4 %** | 689.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 30.50 € | **30.00 €** | 37.5 % | **35.3 %** | 30.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.50 € | **11.00 €** | 34.1 % | **28.3 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 13.50 € | **13.00 €** | 24.0 % | **19.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.50 € | **15.00 €** | 34.1 % | **29.7 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.50 € | **10.00 €** | 25.4 % | **19.4 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 14.50 € | **14.00 €** | 25.5 % | **21.2 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **12.00 €** | 23.5 % | **18.5 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Kovový LED svietnik Solight 1V280, 40 cm, 5 LED, čierny | 21.50 € | **21.00 €** | 25.5 % | **22.6 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1016501 | 30.50 € | **30.00 €** | 12.6 % | **10.8 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 126.50 € | **126.00 €** | 10.3 % | **9.9 %** | 126.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 22.50 € | **22.00 €** | 43.8 % | **40.6 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 18.50 € | **18.00 €** | 18.2 % | **15.0 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 32.50 € | **32.00 €** | 9.8 % | **8.1 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 1124.50 € | **1124.00 €** | 26.9 % | **26.8 %** | 1124.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.50 € | **21.00 €** | 18.1 % | **15.4 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 15.50 € | **15.00 €** | 27.8 % | **23.7 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 20.50 € | **20.00 €** | 28.5 % | **25.4 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.50 € | **24.00 €** | 17.2 % | **14.8 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015502 Mikrovlnná trouba | 121.50 € | **121.00 €** | 14.7 % | **14.2 %** | 121.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 96.90 € | **96.50 €** | 17.6 % | **17.1 %** | 96.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 143.90 € | **143.50 €** | 8.3 % | **8.0 %** | 143.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 10.90 € | **10.50 €** | 23.4 % | **18.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| SONY DVPSR760HB | 54.90 € | **54.50 €** | 6.7 % | **5.9 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight profesionálny bezkontaktný alkohol tester, F... | 48.90 € | **48.50 €** | 24.1 % | **23.1 %** | 48.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 35.90 € | **35.50 €** | 37.9 % | **36.3 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 30.90 € | **30.50 €** | 18.7 % | **17.1 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 43.90 € | **43.50 €** | 41.3 % | **40.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P101CUD100 | 33.90 € | **33.50 €** | 8.5 % | **7.2 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 47.90 € | **47.50 €** | 140.7 % | **138.7 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 47.90 € | **47.50 €** | 37.3 % | **36.1 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Plus 575 Combo+dock black | 529.90 € | **529.50 €** | 10.0 % | **10.0 %** | 529.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.50 € | **7.30 €** | 28.1 % | **24.7 %** | 7.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **4.90 €** | 13.3 % | **8.8 %** | 4.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.60 € | **9.40 €** | 15.6 % | **13.2 %** | 9.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 47.00 € | **46.90 €** | 32.3 % | **32.0 %** | 47.00 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 39.00 € | **38.90 €** | 10.8 % | **10.5 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 18.00 € | **17.90 €** | 22.7 % | **22.0 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 22.00 € | **21.90 €** | 52.9 % | **52.2 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 38.00 € | **37.90 €** | 15.3 % | **15.0 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.00 € | **17.90 €** | 34.1 % | **33.4 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 25.00 € | **24.90 €** | 15.0 % | **14.5 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Coppertinto KI280G10 | 29.00 € | **28.90 €** | 7.7 % | **7.3 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 32.00 € | **31.90 €** | 57.5 % | **57.0 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 23.00 € | **22.90 €** | 34.7 % | **34.1 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 24.00 € | **23.90 €** | 10.8 % | **10.3 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.90 € | **7.80 €** | 48.0 % | **46.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.20 € | **5.10 €** | 131.0 % | **126.6 %** | 5.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.00 € | **10.90 €** | 28.3 % | **27.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.00 € | **10.90 €** | 23.5 % | **22.4 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **10.90 €** | 32.3 % | **31.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 14.00 € | **13.90 €** | 39.0 % | **38.0 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.60 € | **9.50 €** | 22.3 % | **21.1 %** | 9.60 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.10 € | **9.00 €** | 28.7 % | **27.3 %** | 9.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 9.60 € | **9.50 €** | 40.9 % | **39.4 %** | 9.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.60 € | **9.50 €** | 14.4 % | **13.2 %** | 9.60 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 145.00 € | **144.90 €** | 50.8 % | **50.7 %** | 145.00 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH 6756WO | 123.00 € | **122.90 €** | 8.7 % | **8.6 %** | 123.00 € | cena podľa najlacnejšieho iného predajcu |

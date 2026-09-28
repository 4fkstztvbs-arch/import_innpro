# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-28

Vstup: `premiumstore-sk_2026-09-28_06-58.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7080**
- Návrh **zvýšiť** cenu: **177** produktov
- Návrh **znížiť** cenu: **115** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6788** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **8**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **488**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (177)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **250.50 €** | 14.5 % | **544.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| LG GBBS323CPY | 632.50 € | **690.00 €** | 10.0 % | **20.0 %** | 690.30 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Nubia Air Pro 5G biely | 438.50 € | **480.00 €** | 5.1 % | **15.0 %** | 480.02 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent white | 209.50 € | **230.00 €** | 6.5 % | **16.9 %** | 230.09 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 303.90 € | **324.00 €** | 10.1 % | **17.4 %** | 324.33 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH20C0WO | 229.50 € | **241.00 €** | 8.8 % | **14.2 %** | 241.50 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32BWBXC | 58.90 € | **68.50 €** | 5.1 % | **22.2 %** | 68.66 € | cena podľa najlacnejšieho iného predajcu |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 70.00 € | **79.50 €** | 15.0 % | **30.6 %** | 79.68 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V802 PRO 12000mah návnada loď (čierna) | 133.50 € | **142.50 €** | 14.9 % | **22.6 %** | 142.83 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection brown | 200.50 € | **209.00 €** | 12.1 % | **16.8 %** | 209.14 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED dekorácia – zvončeky Solight 1V289, 55... | 9.60 € | **17.90 €** | 10.7 % | **106.4 %** | 17.96 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 68.50 € | **75.90 €** | 5.2 % | **16.5 %** | 75.91 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN X2 Standard – stabilizátor (biely) | 57.50 € | **64.00 €** | 15.1 % | **28.1 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN X2 Standard Gimbal (čierny) | 57.50 € | **64.00 €** | 15.1 % | **28.1 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Samsung G Tab FIXTOT-1649 | 14.50 € | **20.90 €** | 13.1 % | **63.1 %** | 20.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 25.50 € | **31.90 €** | 10.5 % | **38.2 %** | 31.96 € | cena podľa najlacnejšieho iného predajcu |
| Beko B7RCNA418HXP | 792.50 € | **798.90 €** | 12.4 % | **13.3 %** | 799.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 677.90 € | **684.00 €** | 5.1 % | **6.0 %** | 684.01 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 37.50 € | **43.50 €** | 5.7 % | **22.6 %** | 43.79 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 203.50 € | **209.00 €** | 13.8 % | **16.8 %** | 209.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 29.50 € | **35.00 €** | 13.3 % | **34.4 %** | 35.16 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 118.50 € | **124.00 €** | 5.4 % | **10.3 %** | 124.27 € | cena podľa najlacnejšieho iného predajcu |
| Laica LAI KJ2000W | 80.00 € | **85.00 €** | 10.0 % | **16.9 %** | 85.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 32.50 € | **37.50 €** | 17.3 % | **35.3 %** | 37.74 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 500D. | 120.50 € | **125.00 €** | 26.6 % | **31.4 %** | 125.05 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH6737WH | 109.50 € | **114.00 €** | 5.1 % | **9.4 %** | 114.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 34.50 € | **39.00 €** | 27.3 % | **43.9 %** | 39.31 € | cena podľa najlacnejšieho iného predajcu |
| Hlavná kefa MOVA pre model I10 | 22.00 € | **26.50 €** | 15.2 % | **38.7 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality RaptorX | 2828.50 € | **2833.00 €** | 16.3 % | **16.5 %** | 2833.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 59.50 € | **64.00 €** | 23.2 % | **32.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Balanční podložka REBEL ACTIVE RBA-3104-46 | 23.50 € | **27.90 €** | 5.7 % | **25.5 %** | 27.92 € | cena podľa najlacnejšieho iného predajcu |
| Vianočný LED svietnik s hviezdami Solight 1V265, 30 ... | 12.50 € | **16.90 €** | 6.9 % | **44.5 %** | 16.96 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V12-WIFI, 12... | 17.90 € | **22.00 €** | 6.2 % | **30.6 %** | 22.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 12.50 € | **16.50 €** | 8.5 % | **43.2 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 12.50 € | **16.50 €** | 8.5 % | **43.2 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO6164EA | 138.50 € | **142.50 €** | 5.4 % | **8.4 %** | 142.80 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla MOZA RACING MHG | 109.50 € | **113.50 €** | 12.8 % | **16.9 %** | 113.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 45.50 € | **49.50 €** | 22.1 % | **32.8 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED puzdro Xiaomi R Pad 2 FIXTOT-1199 | 14.90 € | **18.90 €** | 12.8 % | **43.1 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| LED snehuliak Solight 1V257, 26 cm, 6 LED, 3 × AA, IP20 | 10.50 € | **14.00 €** | 7.9 % | **43.9 %** | 14.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 20.50 € | **24.00 €** | 13.8 % | **33.3 %** | 24.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 50W, 4600lm, 5000K, IP65 | 16.50 € | **20.00 €** | 15.0 % | **39.5 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Topic Tab LenIdeaTab11 FIXTOT-1677 | 15.50 € | **18.90 €** | 17.3 % | **43.1 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 12.50 € | **15.50 €** | 8.1 % | **34.1 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 20.50 € | **23.50 €** | 16.7 % | **33.8 %** | 23.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 12.50 € | **15.50 €** | 8.5 % | **34.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED snehuliak Solight 1V233, 4 LED, 2 × AA | 9.60 € | **12.50 €** | 10.2 % | **43.5 %** | 12.63 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický posilovač svalů ABS MASTER Pro | 37.90 € | **40.50 €** | 5.0 % | **12.2 %** | 40.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 6.80 € | **9.30 €** | 9.5 % | **49.7 %** | 9.35 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 43.50 € | **46.00 €** | 11.1 % | **17.5 %** | 46.06 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha GO Škoda Rally | 59.50 € | **62.00 €** | 10.1 % | **14.7 %** | 62.14 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 99.50 € | **102.00 €** | 8.1 % | **10.9 %** | 102.19 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 57.00 € | **59.50 €** | 15.0 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 11.50 € | **14.00 €** | 16.9 % | **42.3 %** | 14.27 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 21.00 € | **23.50 €** | 15.4 % | **29.1 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS9 – multifunkčný štartér do auta | 87.00 € | **89.50 €** | 45.8 % | **50.0 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 12.50 € | **14.90 €** | 12.8 % | **34.4 %** | 14.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **14.90 €** | 15.2 % | **37.3 %** | 14.98 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajší LED vianočný stromček Solight 1V290, 68 cm,... | 9.60 € | **12.00 €** | 7.8 % | **34.8 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 15.50 € | **17.90 €** | 16.4 % | **34.4 %** | 17.94 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 16.50 € | **18.90 €** | 22.7 % | **40.6 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 9.80 € | **12.00 €** | 20.4 % | **47.4 %** | 12.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight PIR senzor nástenný, vonkajší, čierny | 6.80 € | **8.80 €** | 11.5 % | **44.2 %** | 8.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 7.80 € | **9.80 €** | 8.2 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 11.50 € | **13.50 €** | 10.8 % | **30.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 18.50 € | **20.50 €** | 8.8 % | **20.5 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 18.50 € | **20.50 €** | 21.0 % | **34.1 %** | 20.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 14.50 € | **16.50 €** | 25.8 % | **43.2 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 10.50 € | **12.50 €** | 11.9 % | **33.2 %** | 12.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 17.50 € | **19.50 €** | 26.8 % | **41.3 %** | 19.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 14.50 € | **16.50 €** | 16.3 % | **32.3 %** | 16.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 14.50 € | **16.50 €** | 16.7 % | **32.8 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 19.50 € | **21.50 €** | 15.1 % | **26.9 %** | 21.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 20.50 € | **22.50 €** | 10.7 % | **21.5 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 18.50 € | **20.50 €** | 21.9 % | **35.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 19.50 € | **21.50 €** | 19.9 % | **32.2 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Canon | 89.00 € | **90.90 €** | 18.1 % | **20.6 %** | 91.00 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZCK7650 | 31.00 € | **32.90 €** | 5.6 % | **12.1 %** | 32.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 7.80 € | **9.60 €** | 8.2 % | **33.2 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2022E1 | 34.90 € | **36.50 €** | 5.2 % | **10.0 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 13.90 € | **15.50 €** | 11.7 % | **24.5 %** | 15.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 7.80 € | **9.30 €** | 12.6 % | **34.3 %** | 9.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 7.80 € | **9.30 €** | 12.6 % | **34.3 %** | 9.34 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 228.50 € | **230.00 €** | 16.1 % | **16.9 %** | 230.09 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 228.50 € | **230.00 €** | 16.1 % | **16.9 %** | 230.09 € | cena podľa najlacnejšieho iného predajcu |
| ETA Nubela 2569 90100, bílý | 20.50 € | **22.00 €** | 11.3 % | **19.4 %** | 22.13 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 207.50 € | **209.00 €** | 16.0 % | **16.8 %** | 209.14 € | cena podľa najlacnejšieho iného predajcu |
| Modul plynu Moza Racing AS016 TQA | 44.50 € | **46.00 €** | 14.1 % | **18.0 %** | 46.17 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32SGMXC | 83.50 € | **85.00 €** | 11.6 % | **13.6 %** | 85.21 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 194.00 € | **195.50 €** | 9.0 % | **9.9 %** | 195.75 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 43.50 € | **45.00 €** | 11.2 % | **15.0 %** | 45.39 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08BK | 15.00 € | **16.50 €** | 14.5 % | **26.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 10.50 € | **12.00 €** | 19.9 % | **37.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 7.10 € | **8.50 €** | 6.3 % | **27.3 %** | 8.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 21.50 € | **22.90 €** | 6.6 % | **13.5 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 5.60 € | **6.80 €** | 12.4 % | **36.5 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27131-56 | 28.90 € | **30.00 €** | 11.0 % | **15.3 %** | 30.40 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 252.00 € | **253.00 €** | 61984.3 % | **62230.6 %** | 253.04 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 23.50 € | **24.50 €** | 11.2 % | **15.9 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 6.80 € | **7.80 €** | 21.0 % | **38.8 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 6.80 € | **7.80 €** | 17.6 % | **34.9 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 | 282.90 € | **283.90 €** | 9.0 % | **9.4 %** | 284.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 11.50 € | **12.50 €** | 31.3 % | **42.7 %** | 12.64 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 44.50 € | **45.50 €** | 42.9 % | **46.2 %** | 45.65 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 289.50 € | **290.50 €** | 5.5 % | **5.9 %** | 290.67 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 1,5 m ... | 28.00 € | **29.00 €** | 35.1 % | **39.9 %** | 29.17 € | cena podľa najlacnejšieho iného predajcu |
| Philips SQM3642/00 nástenný držiak na TV | 20.50 € | **21.50 €** | 7.8 % | **13.1 %** | 21.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **13.50 €** | 23.5 % | **33.4 %** | 13.70 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 159.50 € | **160.50 €** | 10.1 % | **10.8 %** | 160.75 € | cena podľa najlacnejšieho iného predajcu |
| RS065 Moza Racing RS077 sada na uchytenie manžety | 22.50 € | **23.50 €** | 15.9 % | **21.1 %** | 23.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 20.50 € | **21.50 €** | 16.8 % | **22.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtr CPL 58mm Telesin do iPhone 15 Pro/Pro Max | 15.50 € | **16.50 €** | 27.9 % | **36.2 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 68.50 € | **69.50 €** | 32.0 % | **34.0 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 7.80 € | **8.70 €** | 16.8 % | **30.3 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate Graphite Black | 270.00 € | **270.90 €** | 16.1 % | **16.5 %** | 270.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 20W, 1700lm, 4000K, IP6... | 5.80 € | **6.50 €** | 28.5 % | **44.0 %** | 6.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.80 € | **6.50 €** | 16.4 % | **30.5 %** | 6.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.80 € | **6.50 €** | 16.4 % | **30.5 %** | 6.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.60 € | **7.30 €** | 29.9 % | **43.7 %** | 7.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight spájka hrotová 30W | 5.10 € | **5.80 €** | 6.3 % | **20.9 %** | 5.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 9.80 € | **10.50 €** | 31.5 % | **40.9 %** | 10.87 € | cena podľa najlacnejšieho iného predajcu |
| Náhradný filter pre napájadlo Catlink | 24.90 € | **25.50 €** | 5.9 % | **8.4 %** | 25.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 7.80 € | **8.40 €** | 28.1 % | **38.0 %** | 8.41 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-WW, 10 m,... | 6.60 € | **7.20 €** | 32.5 % | **44.5 %** | 7.22 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 7.80 € | **8.40 €** | 22.7 % | **32.1 %** | 8.50 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR740001 | 15.90 € | **16.50 €** | 11.8 % | **16.0 %** | 16.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 10.90 € | **11.50 €** | 6.3 % | **12.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 30.50 € | **31.00 €** | 25.4 % | **27.4 %** | 31.01 € | cena podľa najlacnejšieho iného predajcu |
| Odžmolkovač TechniSat PURENO TRIM 100 s LCD a USB-C ... | 17.00 € | **17.50 €** | 34.4 % | **38.4 %** | 17.54 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3512B | 98.00 € | **98.50 €** | 30.1 % | **30.7 %** | 98.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Floco, ... | 42.00 € | **42.50 €** | 32.9 % | **34.5 %** | 42.59 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.00 € | **24.50 €** | 13.6 % | **15.9 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 229.50 € | **230.00 €** | 16.6 % | **16.9 %** | 230.09 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus M2 bicycle computer | 28.00 € | **28.50 €** | 22.4 % | **24.6 %** | 28.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny multimeter | 13.50 € | **14.00 €** | 24.9 % | **29.5 %** | 14.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **11.00 €** | 26.5 % | **32.5 %** | 11.20 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 sáčky 40 x 50 cm, 50 ks, hladké | 11.50 € | **12.00 €** | 11.6 % | **16.4 %** | 12.20 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RO 3985 EA | 75.50 € | **76.00 €** | 10.2 % | **10.9 %** | 76.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor Premium, Find My kompatibilný | 12.50 € | **13.00 €** | 23.5 % | **28.4 %** | 13.20 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E3T1-3ST | 30.50 € | **31.00 €** | 7.2 % | **9.0 %** | 31.21 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 32.00 € | **32.50 €** | 37.8 % | **40.0 %** | 32.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 29.00 € | **29.50 €** | 15.3 % | **17.3 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| REBEL ACTIVE RBA-1014 bežecký pás | 199.50 € | **200.00 €** | 51.4 % | **51.8 %** | 200.29 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Joy | 173.50 € | **174.00 €** | 32.4 % | **32.8 %** | 174.29 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZCK8040 | 42.50 € | **43.00 €** | 10.2 % | **11.5 %** | 43.32 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXSH1500E | 32.50 € | **33.00 €** | 17.8 % | **19.6 %** | 33.33 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 19.50 € | **20.00 €** | 11.1 % | **13.9 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 20.50 € | **21.00 €** | 33.0 % | **36.3 %** | 21.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 18.50 € | **19.00 €** | 28.0 % | **31.5 %** | 19.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight pištoľ spájkovacia 100W sada | 11.50 € | **12.00 €** | 13.5 % | **18.4 %** | 12.48 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 46.50 € | **47.00 €** | 9.0 % | **10.2 %** | 47.49 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 46.50 € | **47.00 €** | 9.0 % | **10.2 %** | 47.49 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 15.50 € | **16.00 €** | 10.8 % | **14.4 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.50 € | **11.00 €** | 25.4 % | **31.3 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 18.50 € | **19.00 €** | 19.2 % | **22.4 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 16A, USB A+C rychlonabíjačka ... | 11.50 € | **12.00 €** | 11.6 % | **16.4 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight sušiak na topánky | 21.50 € | **22.00 €** | 24.1 % | **27.0 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BL87G831 | 131.50 € | **131.90 €** | 15.2 % | **15.6 %** | 131.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight dvojzásuvka do vlhka IP54, sivá | 3.80 € | **4.20 €** | 19.7 % | **32.4 %** | 4.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 11.50 € | **11.90 €** | 6.4 % | **10.1 %** | 11.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max AC 750V/10A, max. DC 1000V/1... | 11.50 € | **11.90 €** | 20.2 % | **24.4 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 3.80 € | **4.20 €** | 27.7 % | **41.1 %** | 4.30 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H3c 3K Venkovní IP, 5MP, 2.8mm, WiFi | 48.50 € | **48.90 €** | 4.5 % | **5.3 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.50 € | **19.90 €** | 13.6 % | **15.9 %** | 19.95 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 24.50 € | **24.90 €** | 14.3 % | **16.1 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka do vlhka, priama, IP44, čierna-oran... | 2.80 € | **3.10 €** | 21.1 % | **34.1 %** | 3.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtové tlačidlo pre zvončeky 1L74 - 1L77... | 6.80 € | **7.10 €** | 35.2 % | **41.1 %** | 7.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight časový spínač, týždeň, 1 režim | 3.80 € | **4.00 €** | 17.5 % | **23.7 %** | 4.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 8.80 € | **9.00 €** | 38.9 % | **42.1 %** | 9.02 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 9.80 € | **10.00 €** | 29.1 % | **31.8 %** | 10.49 € | cena podľa najlacnejšieho iného predajcu |
| SONY sluchátka MDR-ZX310,černá | 17.90 € | **18.00 €** | 10.4 % | **11.0 %** | 18.15 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 16.90 € | **17.00 €** | 7.4 % | **8.1 %** | 17.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.80 € | **7.90 €** | 46.1 % | **48.0 %** | 7.98 € | cena podľa najlacnejšieho iného predajcu |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.30 € | **2.40 €** | 38.5 % | **44.5 %** | 2.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 2.80 € | **2.90 €** | 38.0 % | **42.9 %** | 2.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtové magnetické čidlo pre gong 1D23, 1... | 9.80 € | **9.90 €** | 32.8 % | **34.1 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 9.80 € | **9.90 €** | 26.3 % | **27.6 %** | 9.97 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (115)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Počítačový chladič Darkflash DN-D360 WHITE | 93.90 € | **77.90 €** | 32.6 % | **10.0 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Cube Light Smart Gaming Lamp Panel | 83.50 € | **68.00 €** | 41.1 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Girmi FM2105 Mikrovlnná trouba s grilem | 120.50 € | **109.00 €** | 21.5 % | **9.9 %** | 109.10 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 EFC226R | 253.90 € | **242.50 €** | 10.1 % | **5.1 %** | 224.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chladič počítača Darkflash DN-D360 BLACK | 87.50 € | **77.90 €** | 26.7 % | **12.8 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 26.00 € | **16.50 €** | 66.3 % | **5.5 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartmi Evaporative Humidifier 3 Lite | 116.90 € | **107.50 €** | 47.0 % | **35.1 %** | 107.77 € | cena podľa najlacnejšieho iného predajcu |
| Redmi 17 4/128GB Oak Green | 203.00 € | **193.90 €** | 10.0 % | **5.1 %** | 162.23 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chladič počítača Darkflash DN-D240 BLACK | 69.00 € | **60.90 €** | 25.2 % | **10.5 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu |
| Maono AME2 Sound Card Black | 92.90 € | **85.90 €** | 28.6 % | **18.9 %** | 86.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **205.50 €** | 9.9 % | **6.2 %** | 205.64 € | cena podľa najlacnejšieho iného predajcu |
| WHIRLPOOL TDLRB 65242BS EU/N | 368.50 € | **361.90 €** | 7.0 % | **5.0 %** | 335.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ScanPart Sada příslušenství pro iRobot R | 35.50 € | **29.00 €** | 31.1 % | **7.1 %** | 29.04 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 171.90 € | **165.50 €** | 10.2 % | **6.1 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08WT | 21.50 € | **16.50 €** | 64.1 % | **26.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro Everyday (... | 74.00 € | **69.90 €** | 29.0 % | **21.8 %** | 69.99 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný balanční podložka HMS BSX02 | 132.90 € | **128.90 €** | 8.6 % | **5.3 %** | 124.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.50 € | **16.50 €** | 37.1 % | **10.3 %** | 16.82 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Excelent 0,1 dB LNB Monoblock LTE | 16.50 € | **12.50 €** | 45.2 % | **10.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 6267.90 € | **6264.00 €** | 9.8 % | **9.7 %** | 6264.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 48.00 € | **44.50 €** | 34.4 % | **24.6 %** | 44.57 € | cena podľa najlacnejšieho iného predajcu |
| JBL Wave Buds 2 bílá | 62.90 € | **59.90 €** | 10.3 % | **5.1 %** | 29.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Držák kuchyňských rolí ROLLY MO | 19.50 € | **16.50 €** | 32.2 % | **11.9 %** | 16.68 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušák Comfort Tower 420 | 51.00 € | **48.50 €** | 16.2 % | **10.5 %** | 48.59 € | cena podľa najlacnejšieho iného predajcu |
| HP DeskJet 2920 (89F97B) | 50.90 € | **48.50 €** | 10.3 % | **5.1 %** | 40.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 31.00 € | **28.90 €** | 19.1 % | **11.0 %** | 28.91 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 | 42.90 € | **40.90 €** | 10.2 % | **5.1 %** | 39.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 32.50 € | **30.50 €** | 53.9 % | **44.4 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.90 € | **30.00 €** | 16.0 % | **9.1 %** | 30.23 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality CR-Scan Raptor | 870.50 € | **868.90 €** | 5.4 % | **5.2 %** | 868.98 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre GoPro HERO11/HERO10/HERO9 | 21.50 € | **19.90 €** | 23.0 % | **13.9 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Bočná kefa pre Dreame D20 Pro,D20 Pro Plus | 14.50 € | **13.00 €** | 39.2 % | **24.8 %** | 13.08 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 389.50 € | **388.00 €** | 18.0 % | **17.5 %** | 388.20 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongVision LOCK, lanový zámek | 25.90 € | **24.50 €** | 11.3 % | **5.3 %** | 22.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 258.90 € | **257.50 €** | 7.7 % | **7.1 %** | 257.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 28.00 € | **26.90 €** | 23.2 % | **18.3 %** | 26.91 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pěnová stěrka na podlahy SOFT & | 13.50 € | **12.50 €** | 23.5 % | **14.3 %** | 12.55 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 252.90 € | **251.90 €** | 10.6 % | **10.2 %** | 252.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 394.90 € | **393.90 €** | 5.4 % | **5.1 %** | 394.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1445.00 € | **1444.00 €** | 7.5 % | **7.5 %** | 1444.21 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Combi Clean M + náhr. Static | 21.50 € | **20.50 €** | 12.8 % | **7.5 %** | 20.89 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 155.90 € | **155.00 €** | 9.0 % | **8.4 %** | 155.37 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast 437/00, tmavě šedá | 28.90 € | **28.00 €** | 10.5 % | **7.1 %** | 28.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight ručná akumulátorová píla, 150mm | 37.90 € | **37.00 €** | 24.3 % | **21.4 %** | 37.43 € | cena podľa najlacnejšieho iného predajcu |
| Neewer BR60 5" klipové kruhové svetlo / stolový stojan | 19.90 € | **19.00 €** | 44.6 % | **38.0 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61649 Nerovná dráha/most set | 16.50 € | **15.90 €** | 29.1 % | **24.4 %** | 15.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 49dB | 24.00 € | **23.50 €** | 22.9 % | **20.3 %** | 23.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.00 € | **95.50 €** | 32.2 % | **31.5 %** | 95.78 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 38.50 € | **38.00 €** | 10.6 % | **9.1 %** | 38.29 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 16.00 € | **15.50 €** | 17.5 % | **13.8 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 346.50 € | **346.00 €** | 20.9 % | **20.8 %** | 346.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 47.00 € | **46.50 €** | 48.5 % | **46.9 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| MAXXO VC 1800 | 24.50 € | **24.00 €** | 8.8 % | **6.6 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 69.00 € | **68.50 €** | 16.5 % | **15.7 %** | 68.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 107.00 € | **106.50 €** | 11.2 % | **10.7 %** | 106.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 320.50 € | **320.00 €** | 19.3 % | **19.2 %** | 320.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 241.00 € | **240.50 €** | 12.9 % | **12.6 %** | 240.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 133.50 € | **133.00 €** | 11.4 % | **11.0 %** | 133.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 474.00 € | **473.50 €** | 9.5 % | **9.4 %** | 473.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 935.00 € | **934.50 €** | 18.8 % | **18.8 %** | 934.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 153.00 € | **152.50 €** | 13.2 % | **12.9 %** | 152.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-2m endoskop | 188.50 € | **188.00 €** | 13.4 % | **13.1 %** | 188.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-3m endoskop | 251.50 € | **251.00 €** | 13.7 % | **13.4 %** | 251.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 77.00 € | **76.50 €** | 7.0 % | **6.3 %** | 76.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 165.00 € | **164.50 €** | 11.5 % | **11.1 %** | 164.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 189.00 € | **188.50 €** | 12.3 % | **12.0 %** | 188.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 322.50 € | **322.00 €** | 10.2 % | **10.1 %** | 322.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 88.50 € | **88.00 €** | 13.7 % | **13.1 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 294.00 € | **293.50 €** | 19.0 % | **18.8 %** | 293.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 148.50 € | **148.00 €** | 11.5 % | **11.1 %** | 148.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1288.00 € | **1287.50 €** | 7.1 % | **7.1 %** | 1287.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 139.50 € | **139.00 €** | 8.2 % | **7.8 %** | 139.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 54.50 € | **54.00 €** | 13.5 % | **12.5 %** | 54.39 € | cena podľa najlacnejšieho iného predajcu |
| Robotický čistič okien MOVA N1 (biely) | 285.50 € | **285.00 €** | 14.1 % | **13.9 %** | 285.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 298.50 € | **298.00 €** | 47.6 % | **47.3 %** | 298.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 27.00 € | **26.50 €** | 19.8 % | **17.6 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 90.50 € | **90.00 €** | 12.6 % | **12.0 %** | 90.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 272.50 € | **272.00 €** | 6.0 % | **5.8 %** | 272.39 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 54.00 € | **53.50 €** | 8.4 % | **7.4 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 43.00 € | **42.50 €** | 9.1 % | **7.8 %** | 42.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Aura A60 Soundbar | 204.00 € | **203.50 €** | 15.8 % | **15.5 %** | 203.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 141.00 € | **140.50 €** | 23.2 % | **22.8 %** | 140.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 82.50 € | **82.00 €** | 41.8 % | **40.9 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 183.00 € | **182.50 €** | 18.2 % | **17.9 %** | 182.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3411 1600W 12V nástenný | 239.00 € | **238.50 €** | 8.5 % | **8.3 %** | 238.89 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 132.50 € | **132.00 €** | 6.6 % | **6.2 %** | 132.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj REBEL POWER 800 LFP4 RB-4027 500W 12V | 90.50 € | **90.00 €** | 8.2 % | **7.6 %** | 90.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 205.00 € | **204.50 €** | 8.1 % | **7.8 %** | 204.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 192.00 € | **191.50 €** | 8.8 % | **8.5 %** | 191.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 269.50 € | **269.00 €** | 6.8 % | **6.6 %** | 269.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 64.50 € | **64.00 €** | 20.3 % | **19.4 %** | 64.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 871.50 € | **871.00 €** | 9.1 % | **9.0 %** | 871.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 682.50 € | **682.00 €** | 5.2 % | **5.1 %** | 682.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 320.00 € | **319.50 €** | 7.5 % | **7.3 %** | 319.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 631.50 € | **631.00 €** | 5.3 % | **5.2 %** | 631.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 668.00 € | **667.50 €** | 8.0 % | **7.9 %** | 667.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 697.00 € | **696.50 €** | 8.9 % | **8.8 %** | 696.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 163.50 € | **163.00 €** | 22.0 % | **21.6 %** | 163.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 106.00 € | **105.50 €** | 19.4 % | **18.8 %** | 105.89 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 119.00 € | **118.50 €** | 32.2 % | **31.7 %** | 118.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 85.50 € | **85.00 €** | 9.1 % | **8.4 %** | 85.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 106.00 € | **105.50 €** | 12.3 % | **11.7 %** | 105.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 153.50 € | **153.00 €** | 20.1 % | **19.7 %** | 153.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 128.00 € | **127.50 €** | 17.5 % | **17.0 %** | 127.89 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 28.00 € | **27.50 €** | 15.0 % | **13.0 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC210 IP, 3 Mpx, WiFi, prisv... | 21.50 € | **21.00 €** | 12.6 % | **9.9 %** | 21.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 42.50 € | **42.00 €** | 10.2 % | **8.9 %** | 42.49 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2659 | 68.90 € | **68.50 €** | 10.3 % | **9.7 %** | 68.84 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 308.00 € | **307.90 €** | 46.8 % | **46.8 %** | 307.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 350.00 € | **349.90 €** | 6.7 % | **6.7 %** | 350.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 36.00 € | **35.90 €** | 18.4 % | **18.0 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 12.1 % | **11.8 %** | 40.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 74.00 € | **73.90 €** | 41.0 % | **40.8 %** | 73.99 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 84.00 € | **83.90 €** | 28.1 % | **27.9 %** | 83.99 € | cena podľa najlacnejšieho iného predajcu |

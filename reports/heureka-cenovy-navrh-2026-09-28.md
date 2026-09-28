# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-28

Vstup: `premiumstore-sk_2026-09-28_22-06.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7111**
- Návrh **zvýšiť** cenu: **102** produktov
- Návrh **znížiť** cenu: **117** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6892** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **10**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **483**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (102)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Projektor JMGO O2S Ultra | 2402.50 € | **2705.50 €** | 15.2 % | **29.7 %** | 2705.69 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality RaptorX | 2833.00 € | **2907.00 €** | 16.5 % | **19.5 %** | 2907.29 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 699.50 € | **771.50 €** | 28.2 % | **41.4 %** | 771.60 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 813.50 € | **884.50 €** | 15.0 % | **25.1 %** | 884.83 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot MOVA V70 Ultra Pure RVC (biely) | 1154.00 € | **1188.90 €** | 15.0 % | **18.5 %** | 1188.96 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V066, 18 000 mAh | 258.50 € | **292.00 €** | 26.9 % | **43.4 %** | 292.34 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 481.50 € | **505.00 €** | 27.9 % | **34.1 %** | 505.08 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 406.90 € | **426.50 €** | 5.1 % | **10.2 %** | 426.55 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 128.50 € | **148.00 €** | 7.8 % | **24.2 %** | 148.17 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-702B 9 W UV externý filter | 71.00 € | **89.00 €** | 14.8 % | **43.9 %** | 89.02 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 69.00 € | **85.00 €** | 9.2 % | **34.6 %** | 85.04 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 287.00 € | **303.00 €** | 6.7 % | **12.7 %** | 303.21 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 | 283.90 € | **297.90 €** | 9.4 % | **14.7 %** | 298.00 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259C (HP W2071A Cyan) | 32.50 € | **43.90 €** | 11.2 % | **50.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259Y (HP W2072A Yellow) | 32.50 € | **43.90 €** | 11.2 % | **50.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259M (HP W2073A Magenta) | 32.50 € | **43.90 €** | 11.2 % | **50.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 52 mm s vekom pre Real Lock... | 19.00 € | **29.90 €** | 39.7 % | **119.8 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Pinpointer GARRETT Pro-Pointer AT Blackline | 155.50 € | **166.00 €** | 15.2 % | **22.9 %** | 166.13 € | cena podľa najlacnejšieho iného predajcu |
| Rádio Imperial Dabman 280 CDBK s funkcí ASA | 229.50 € | **239.90 €** | 11.9 % | **17.0 %** | 239.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 234.00 € | **244.00 €** | 22.0 % | **27.3 %** | 244.10 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 47.00 € | **55.50 €** | 14.8 % | **35.5 %** | 55.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 47.00 € | **55.50 €** | 14.8 % | **35.5 %** | 55.90 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259B (HP W2070A Black) | 32.50 € | **40.90 €** | 11.2 % | **39.9 %** | 40.99 € | cena podľa najlacnejšieho iného predajcu |
| JBL Partybox Stage 320 | 422.00 € | **429.50 €** | 8.0 % | **9.9 %** | 429.90 € | cena podľa najlacnejšieho iného predajcu |
| JBL Xtreme 3 black | 191.90 € | **198.90 €** | 12.2 % | **16.3 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 205.50 € | **212.50 €** | 6.2 % | **9.9 %** | 212.80 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 359.00 € | **365.50 €** | 7.3 % | **9.2 %** | 365.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 21.50 € | **26.90 €** | 8.7 % | **36.0 %** | 26.94 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAT3509GY Bezdrátová sluchátka | 45.00 € | **50.00 €** | 5.2 % | **16.8 %** | 50.27 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 861.00 € | **865.50 €** | 13.5 % | **14.1 %** | 865.85 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **26.00 €** | 14.8 % | **38.9 %** | 26.35 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **26.00 €** | 14.8 % | **38.9 %** | 26.35 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Senior Retro blesk | 116.00 € | **120.00 €** | 6.4 % | **10.1 %** | 120.10 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Kery B-4660 400W bílý | 35.50 € | **39.50 €** | 9.5 % | **21.8 %** | 39.74 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 141.00 € | **145.00 €** | 5.1 % | **8.1 %** | 145.24 € | cena podľa najlacnejšieho iného predajcu |
| Smartmi Evaporative Humidifier 3 Lite | 107.50 € | **111.50 €** | 35.1 % | **40.2 %** | 111.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WDSI96A | 358.90 € | **362.50 €** | 6.0 % | **7.0 %** | 362.60 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 45C 3S1P lipo battery ... | 53.90 € | **57.00 €** | 15.0 % | **21.6 %** | 57.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **20.00 €** | 23.9 % | **46.6 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač VEXILAR C9 s vertikálnou konštrukciou | 72.00 € | **75.00 €** | 14.6 % | **19.4 %** | 75.42 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK 7-Port Gigabit Switch (DMS-107/E) | 75.00 € | **77.50 €** | 10.1 % | **13.8 %** | 77.67 € | cena podľa najlacnejšieho iného predajcu |
| Skříň kempingová Cattara 13480 MODICA | 59.50 € | **62.00 €** | 5.7 % | **10.1 %** | 62.20 € | cena podľa najlacnejšieho iného predajcu |
| Beko PowerIntense BDFN26560XP | 539.00 € | **541.50 €** | 6.3 % | **6.8 %** | 541.75 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN JP-025F | 13.50 € | **16.00 €** | 16.0 % | **37.5 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Samsung G Tab FIXTOT-1649 | 20.90 € | **23.00 €** | 63.1 % | **79.5 %** | 23.05 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26050-70 | 30.50 € | **32.50 €** | 9.2 % | **16.3 %** | 32.60 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 66.90 € | **68.90 €** | 7.7 % | **10.9 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 324.00 € | **326.00 €** | 17.4 % | **18.1 %** | 326.13 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H640P | 39.50 € | **41.50 €** | 15.8 % | **21.7 %** | 41.63 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SB-USW80120 Softbox s dáždnikom | 64.50 € | **66.50 €** | 5.6 % | **8.8 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX LUX Senior (zelený) | 157.00 € | **158.90 €** | 52.4 % | **54.3 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2113 PRO Ovládanie letu PC | 30.00 € | **31.90 €** | 9.1 % | **16.0 %** | 31.97 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 325.00 € | **326.50 €** | 11.8 % | **12.4 %** | 326.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 58.00 € | **59.50 €** | 33.8 % | **37.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Ponorné čerpadlo SUNSUN JP-1500GL | 10.50 € | **12.00 €** | 14.3 % | **30.6 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR ECO - White | 39.90 € | **41.00 €** | 10.9 % | **14.0 %** | 41.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 35.00 € | **36.00 €** | 34.3 % | **38.1 %** | 36.01 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96BX (HP 305XL Black) | 17.90 € | **18.90 €** | 12.3 % | **18.6 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 391.90 € | **392.90 €** | 5.9 % | **6.1 %** | 393.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Floco, ... | 42.50 € | **43.50 €** | 34.5 % | **37.7 %** | 43.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 43.00 € | **44.00 €** | 34.5 % | **37.6 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 38.50 € | **39.50 €** | 33.7 % | **37.2 %** | 39.78 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 41.50 € | **42.50 €** | 10.0 % | **12.7 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka pamäťových kariet Lexar RW330U USB 3.2 micro... | 15.00 € | **16.00 €** | 32.0 % | **40.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.00 € | **25.90 €** | 48.9 % | **54.3 %** | 25.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.00 € | **19.90 €** | 31.5 % | **37.7 %** | 19.97 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot SCV400RD | 52.00 € | **52.50 €** | 8.9 % | **10.0 %** | 52.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.00 € | **18.50 €** | 34.1 % | **37.9 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **21.00 €** | 34.1 % | **37.4 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **21.00 €** | 20.5 % | **23.5 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový ventilátor Darkflash Gauss G24 (čierny) | 11.50 € | **12.00 €** | 14.6 % | **19.6 %** | 12.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 17.50 € | **18.00 €** | 19.7 % | **23.1 %** | 18.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 16.50 € | **17.00 €** | 32.8 % | **36.8 %** | 17.16 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 406.00 € | **406.50 €** | 39.2 % | **39.4 %** | 406.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.00 € | **19.50 €** | 33.4 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 35.50 € | **36.00 €** | 5.8 % | **7.3 %** | 36.20 € | cena podľa najlacnejšieho iného predajcu |
| Letové pedále MOZA Racing AS019 | 345.00 € | **345.50 €** | 6.7 % | **6.9 %** | 345.72 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022300 | 132.00 € | **132.50 €** | 6.5 % | **6.9 %** | 132.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.50 € | **47.00 €** | 34.4 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.50 € | **12.90 €** | 33.2 % | **37.5 %** | 12.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.50 € | **15.90 €** | 34.1 % | **37.5 %** | 15.98 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart vodní filtr kompatibilní 4ks | 15.50 € | **15.90 €** | 6.3 % | **9.1 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 21.50 € | **21.90 €** | 26.9 % | **29.3 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.30 € | **9.50 €** | 49.7 % | **52.9 %** | 9.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.40 € | **2.50 €** | 44.5 % | **50.6 %** | 2.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.20 € | **4.30 €** | 50.4 % | **54.0 %** | 4.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.20 € | **4.30 €** | 41.1 % | **44.5 %** | 4.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.90 € | **15.00 €** | 34.4 % | **35.4 %** | 15.32 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (117)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Baterie olověná  12V / 55Ah XTREME bezúdržbový akumu... | 117.00 € | **27.50 €** | 26322.8 % | **6110.5 %** | 27.54 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 902.50 € | **863.00 €** | 15.0 % | **10.0 %** | 863.21 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot MOVA P70 Pro Ultra (čierny) | 807.50 € | **772.50 €** | 15.0 % | **10.0 %** | 772.83 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 614.50 € | **584.90 €** | 39.3 % | **32.6 %** | 585.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 675.50 € | **646.00 €** | 15.0 % | **10.0 %** | 646.06 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Pro – palubná kamera | 156.90 € | **129.50 €** | 47.5 % | **21.8 %** | 129.71 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň QiDi Plus 4 | 837.50 € | **812.50 €** | 23.2 % | **19.5 %** | 812.75 € | cena podľa najlacnejšieho iného predajcu |
| TCL 43T69C QLED 4K SMART Google TV | 431.00 € | **411.50 €** | 10.0 % | **5.0 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Easy sing mic mini | 170.00 € | **154.50 €** | 34.3 % | **22.0 %** | 154.65 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 49B8G-S | 331.90 € | **316.90 €** | 10.0 % | **5.1 %** | 309.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GODOX UB-165W parabolický odrazový dáždnik | 84.00 € | **69.50 €** | 38.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Rádio TechniSat DIGITRADIO 550 IR /černé/ | 149.90 € | **139.90 €** | 13.9 % | **6.3 %** | 139.99 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na televízor Perlgear PGLF8B-N1 | 54.00 € | **44.00 €** | 49.0 % | **21.4 %** | 44.46 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.90 € | **157.00 €** | 15.9 % | **9.0 %** | 157.05 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 166.90 € | **157.00 €** | 15.9 % | **9.0 %** | 157.05 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C100PRO | 81.50 € | **72.00 €** | 39.7 % | **23.4 %** | 72.21 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 261.90 € | **254.50 €** | 13.1 % | **9.9 %** | 254.80 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TB0002 Pozadie | 49.50 € | **42.50 €** | 44.8 % | **24.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 107.90 € | **103.50 €** | 41.5 % | **35.7 %** | 103.85 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 280.50 € | **276.50 €** | 11.5 % | **9.9 %** | 276.67 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 49 mm | 27.50 € | **23.50 €** | 29.8 % | **10.9 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 59.00 € | **55.50 €** | 12.2 % | **5.5 %** | 48.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Adaptérny krúžok Freewell Brandon Li 55 mm | 27.00 € | **23.50 €** | 27.4 % | **10.9 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 58 mm | 27.00 € | **23.50 €** | 27.4 % | **10.9 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 62 mm | 27.00 € | **23.50 €** | 27.4 % | **10.9 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 72 mm | 27.00 € | **23.50 €** | 27.4 % | **10.9 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 82 mm | 27.00 € | **23.50 €** | 27.5 % | **11.0 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 103.00 € | **99.50 €** | 38.6 % | **33.9 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 18.90 € | **15.50 €** | 110.5 % | **72.6 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| SJCAM – pevný držiak na bicykel | 22.00 € | **18.90 €** | 42.3 % | **22.2 %** | 18.92 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Black | 51.00 € | **48.00 €** | 16.8 % | **9.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 58.00 € | **55.50 €** | 10.3 % | **5.5 %** | 41.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 19.50 € | **17.00 €** | 41.3 % | **23.2 %** | 17.03 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS9 – multifunkčný štartér do auta | 89.50 € | **87.00 €** | 50.0 % | **45.8 %** | 87.47 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **9.80 €** | 47.4 % | **20.4 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Živica ELEGOO Standard 1.0 (polopriehľadná) | 16.50 € | **14.50 €** | 33.2 % | **17.1 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Pink | 51.00 € | **49.00 €** | 16.8 % | **12.2 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO White | 51.00 € | **49.00 €** | 16.8 % | **12.2 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Unlimited pánev 28cm G2550672 | 57.50 € | **55.50 €** | 49.5 % | **44.3 %** | 55.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 140.50 € | **138.50 €** | 22.8 % | **21.1 %** | 138.89 € | cena podľa najlacnejšieho iného predajcu |
| N'oveen IWH480 | 34.90 € | **33.00 €** | 11.2 % | **5.2 %** | 28.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FoodSaver FFC026X | 41.50 € | **39.90 €** | 10.8 % | **6.5 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 14.50 € | **12.90 €** | 36.6 % | **21.5 %** | 12.92 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 14.50 € | **12.90 €** | 36.6 % | **21.5 %** | 12.92 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.50 € | **194.00 €** | 9.9 % | **9.0 %** | 194.20 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 124.00 € | **122.90 €** | 38.9 % | **37.7 %** | 122.95 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 64.90 € | **63.90 €** | 162.0 % | **158.0 %** | 63.99 € | cena podľa najlacnejšieho iného predajcu |
| Vileda 1.2 Spray Max mop BOX | 23.50 € | **22.50 €** | 11.0 % | **6.2 %** | 18.61 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo HiFi Tuner TR05 | 139.50 € | **138.50 €** | 11.1 % | **10.3 %** | 138.58 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 251.90 € | **250.90 €** | 10.2 % | **9.7 %** | 251.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP White | 30.50 € | **29.50 €** | 16.3 % | **12.4 %** | 29.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 6264.00 € | **6263.00 €** | 9.7 % | **9.7 %** | 6263.19 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC022X | 17.50 € | **16.50 €** | 13.2 % | **6.7 %** | 16.83 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 29.50 € | **28.50 €** | 17.3 % | **13.3 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárny reflektor so senzorom, 6W, 660lm... | 13.00 € | **12.00 €** | 40.7 % | **29.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **22.00 €** | 38.1 % | **32.7 %** | 22.35 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.90 € | **36.00 €** | 11.1 % | **8.4 %** | 36.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.50 € | **10.90 €** | 12.1 % | **6.3 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Koloběžka NILS Extreme HM1302 černá | 43.00 € | **42.50 €** | 6.7 % | **5.4 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal D5220683 | 30.50 € | **30.00 €** | 12.7 % | **10.8 %** | 30.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 49dB | 23.50 € | **23.00 €** | 20.3 % | **17.8 %** | 23.03 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Black | 30.00 € | **29.50 €** | 14.6 % | **12.7 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Pink | 30.00 € | **29.50 €** | 14.6 % | **12.7 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 47.00 € | **46.50 €** | 10.2 % | **9.0 %** | 46.69 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 47.00 € | **46.50 €** | 10.2 % | **9.0 %** | 46.69 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 346.00 € | **345.50 €** | 20.8 % | **20.6 %** | 345.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 46.50 € | **46.00 €** | 46.9 % | **45.3 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 45.00 € | **44.50 €** | 15.0 % | **13.7 %** | 44.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 38.00 € | **37.50 €** | 9.1 % | **7.7 %** | 37.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 68.50 € | **68.00 €** | 15.7 % | **14.8 %** | 68.39 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 106.50 € | **106.00 €** | 10.7 % | **10.2 %** | 106.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 320.00 € | **319.50 €** | 19.2 % | **19.0 %** | 319.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 240.50 € | **240.00 €** | 12.6 % | **12.4 %** | 240.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 133.00 € | **132.50 €** | 11.0 % | **10.6 %** | 132.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 473.50 € | **473.00 €** | 9.4 % | **9.3 %** | 473.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 934.50 € | **934.00 €** | 18.8 % | **18.7 %** | 934.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 152.50 € | **152.00 €** | 12.9 % | **12.5 %** | 152.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-2m endoskop | 188.00 € | **187.50 €** | 13.1 % | **12.8 %** | 187.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-3m endoskop | 251.00 € | **250.50 €** | 13.4 % | **13.2 %** | 250.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 76.50 € | **76.00 €** | 6.3 % | **5.6 %** | 76.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 164.50 € | **164.00 €** | 11.1 % | **10.8 %** | 164.39 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 188.50 € | **188.00 €** | 12.0 % | **11.7 %** | 188.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 293.50 € | **293.00 €** | 18.8 % | **18.6 %** | 293.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 148.00 € | **147.50 €** | 11.1 % | **10.8 %** | 147.89 € | cena podľa najlacnejšieho iného predajcu |
| Robotický čistič okien MOVA N1 (biely) | 285.00 € | **284.50 €** | 13.9 % | **13.7 %** | 284.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 272.00 € | **271.50 €** | 5.8 % | **5.6 %** | 271.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 160.00 € | **159.50 €** | 13.1 % | **12.7 %** | 159.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 74.00 € | **73.50 €** | 12.0 % | **11.2 %** | 73.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 88.00 € | **87.50 €** | 19773.5 % | **19660.6 %** | 87.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Aura A60 Soundbar | 203.50 € | **203.00 €** | 15.5 % | **15.2 %** | 203.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 82.00 € | **81.50 €** | 40.9 % | **40.1 %** | 81.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 182.50 € | **182.00 €** | 17.9 % | **17.6 %** | 182.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 64.00 € | **63.50 €** | 19.4 % | **18.4 %** | 63.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 871.00 € | **870.50 €** | 9.0 % | **9.0 %** | 870.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 682.00 € | **681.50 €** | 5.1 % | **5.0 %** | 681.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 319.50 € | **319.00 €** | 7.3 % | **7.2 %** | 319.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 631.00 € | **630.50 €** | 5.2 % | **5.1 %** | 630.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 667.50 € | **667.00 €** | 7.9 % | **7.8 %** | 667.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 696.50 € | **696.00 €** | 8.8 % | **8.7 %** | 696.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 163.00 € | **162.50 €** | 21.6 % | **21.2 %** | 162.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 105.50 € | **105.00 €** | 18.8 % | **18.3 %** | 105.39 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 85.00 € | **84.50 €** | 8.4 % | **7.8 %** | 84.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 105.50 € | **105.00 €** | 11.7 % | **11.2 %** | 105.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 153.00 € | **152.50 €** | 19.7 % | **19.3 %** | 152.89 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXSH1500E | 33.00 € | **32.50 €** | 19.6 % | **17.8 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Adapter WiFi Baseus FastJoy 1800Mbps (black) | 24.50 € | **24.00 €** | 25.0 % | **22.4 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Canon | 90.90 € | **90.50 €** | 20.6 % | **20.1 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 3.70 € | **3.30 €** | 51.2 % | **34.8 %** | 3.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.30 € | **3.90 €** | 52.0 % | **37.9 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Držiak BOYA BY-PB25A 2,5m teleskopická tyč závit 1/4” | 52.90 € | **52.50 €** | 12.6 % | **11.7 %** | 52.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 3.80 € | **3.50 €** | 49.2 % | **37.5 %** | 3.53 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s drevenými hviezdami Solight 1V2... | 4.50 € | **4.20 €** | 42.9 % | **33.4 %** | 4.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 2.40 € | **2.20 €** | 50.1 % | **37.6 %** | 2.27 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta XD6220F0 | 37.00 € | **36.90 €** | 5.5 % | **5.3 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM600G | 103.00 € | **102.90 €** | 39.5 % | **39.4 %** | 102.95 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1444.00 € | **1443.90 €** | 7.5 % | **7.4 %** | 1443.97 € | cena podľa najlacnejšieho iného predajcu |

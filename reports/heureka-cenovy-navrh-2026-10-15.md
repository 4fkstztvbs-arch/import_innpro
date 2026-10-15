# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-15

Vstup: `premiumstore-sk_2026-10-15_08-35.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6411**
- Návrh **zvýšiť** cenu: **253** produktov
- Návrh **znížiť** cenu: **202** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5956** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **16**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **329**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (253)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria Flytec V900 12000mah | 16.00 € | **223.90 €** | 15.3 % | **1513.8 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **223.90 €** | 14.5 % | **476.1 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 476.00 € | **635.00 €** | 8.1 % | **44.2 %** | 635.07 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 363.00 € | **453.00 €** | 8.1 % | **34.9 %** | 453.08 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped DeerRun S500 Pro (čierny) | 246.50 € | **325.00 €** | 15.1 % | **51.8 %** | 325.23 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 198.90 € | **266.00 €** | 17.3 % | **56.9 %** | 266.49 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 826.50 € | **885.00 €** | 10.1 % | **17.9 %** | 885.37 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 849.00 € | **897.90 €** | 8.2 % | **14.4 %** | 897.98 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 396.00 € | **443.50 €** | 7.3 % | **20.2 %** | 443.84 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 769.00 € | **815.00 €** | 7.9 % | **14.3 %** | 815.38 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 756.00 € | **795.50 €** | 11.2 % | **17.0 %** | 795.82 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 298.50 € | **337.50 €** | 9.3 % | **23.6 %** | 337.75 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 589.50 € | **627.00 €** | 10.0 % | **17.0 %** | 627.46 € | cena podľa najlacnejšieho iného predajcu |
| Schock Manhattan D-100LS Onyx | 256.50 € | **293.90 €** | 10.2 % | **26.3 %** | 294.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 310.50 € | **346.50 €** | 9.4 % | **22.1 %** | 346.71 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 462.50 € | **496.50 €** | 7.6 % | **15.5 %** | 496.69 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 333.00 € | **362.00 €** | 8.6 % | **18.1 %** | 362.18 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 562.50 € | **584.00 €** | 23.8 % | **28.5 %** | 584.17 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 468.00 € | **488.00 €** | 10.3 % | **15.0 %** | 488.17 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 329.00 € | **345.00 €** | 8.5 % | **13.7 %** | 345.10 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 266.50 € | **282.50 €** | 7.5 % | **13.9 %** | 282.69 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 898.90 € | **912.90 €** | 17.1 % | **18.9 %** | 912.95 € | cena podľa najlacnejšieho iného predajcu |
| Mobilný ovládač GameSir G8+ MFi (sivý) | 64.90 € | **78.50 €** | 19.0 % | **44.0 %** | 78.76 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 246.50 € | **257.50 €** | 21.8 % | **27.2 %** | 257.71 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 246.50 € | **257.50 €** | 13.2 % | **18.2 %** | 257.71 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S UV AI | 54.00 € | **64.00 €** | 16.4 % | **38.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 953.00 € | **962.00 €** | 14.8 % | **15.9 %** | 962.40 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 216.00 € | **224.50 €** | 14.3 % | **18.8 %** | 224.62 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 216.00 € | **224.50 €** | 14.3 % | **18.8 %** | 224.62 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 213.00 € | **221.50 €** | 14.2 % | **18.7 %** | 221.63 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 759.00 € | **767.00 €** | 38.3 % | **39.7 %** | 767.50 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 302.00 € | **309.50 €** | 19.0 % | **21.9 %** | 309.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 25.50 € | **33.00 €** | 39.0 % | **79.9 %** | 33.30 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 54.00 € | **61.00 €** | 5.2 % | **18.8 %** | 61.12 € | cena podľa najlacnejšieho iného predajcu |
| LONGER RAY5 minis 3,5 W laserový gravír | 146.00 € | **153.00 €** | 16.7 % | **22.3 %** | 153.29 € | cena podľa najlacnejšieho iného predajcu |
| Sušič vlasov MOVA Flip 10 | 175.00 € | **181.90 €** | 19.3 % | **24.0 %** | 181.96 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 163.00 € | **169.50 €** | 14.0 % | **18.5 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra S1 Max Combo | 820.50 € | **826.50 €** | 8.1 % | **8.9 %** | 826.66 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 365.00 € | **370.50 €** | 14.4 % | **16.1 %** | 370.70 € | cena podľa najlacnejšieho iného predajcu |
| JBL PBM100 Black | 33.50 € | **38.90 €** | 5.1 % | **22.1 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 54.50 € | **59.00 €** | 25.5 % | **35.9 %** | 59.14 € | cena podľa najlacnejšieho iného predajcu |
| Pero Baseus Smooth Writing 2 Stylus Pen (fialové) | 14.00 € | **18.50 €** | 15.3 % | **52.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X50-PoE(1-pack) WiFi 6, 1x ... | 215.90 € | **219.90 €** | 87.3 % | **90.7 %** | 220.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 231.00 € | **235.00 €** | 12.7 % | **14.7 %** | 235.10 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN ZIP Trifold Cyber Projector | 467.50 € | **471.50 €** | 35.3 % | **36.5 %** | 471.69 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 258.00 € | **262.00 €** | 21.5 % | **23.3 %** | 262.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 21.50 € | **25.50 €** | 28.3 % | **52.2 %** | 25.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 12.90 € | **16.50 €** | 5.5 % | **35.0 %** | 16.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 331.50 € | **335.00 €** | 7.6 % | **8.7 %** | 335.34 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP16 PM FIXVM-1403-BK | 32.50 € | **35.50 €** | 5.3 % | **15.0 %** | 35.51 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPh 16 P FIXVM-1402-BK | 32.50 € | **35.50 €** | 5.3 % | **15.0 %** | 35.51 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 232.00 € | **235.00 €** | 17.4 % | **18.9 %** | 235.11 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 23.00 € | **26.00 €** | 6.2 % | **20.1 %** | 26.33 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 70.00 € | **72.90 €** | 8.8 % | **13.3 %** | 72.92 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 31.00 € | **33.50 €** | 5.3 % | **13.8 %** | 33.55 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 31.00 € | **33.50 €** | 5.3 % | **13.8 %** | 33.55 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 321.00 € | **323.50 €** | 9.8 % | **10.6 %** | 323.71 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 992.50 € | **995.00 €** | 13.2 % | **13.5 %** | 995.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 32.00 € | **34.50 €** | 8.1 % | **16.6 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Pouzdro SGTabA11 FIXRTC-1650-BK | 30.50 € | **32.90 €** | 6.4 % | **14.8 %** | 32.96 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 16e FIXPFIT2-1404-BK | 29.50 € | **31.90 €** | 6.0 % | **14.7 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.70 € | **9.00 €** | 14.4 % | **53.7 %** | 9.04 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCool 2,MagSafe FIXMCO2-BK | 27.90 € | **30.00 €** | 5.6 % | **13.5 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZJE4800 | 75.50 € | **77.50 €** | 6.4 % | **9.2 %** | 77.63 € | cena podľa najlacnejšieho iného predajcu |
| AMIKO Mini HD265 | 45.50 € | **47.50 €** | 5.0 % | **9.6 %** | 47.69 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerstation Uni FIXPOS-U-BK | 32.50 € | **34.50 €** | 5.3 % | **11.7 %** | 34.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 15.50 € | **17.50 €** | 15.5 % | **30.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.80 € | **11.50 €** | 13.7 % | **33.4 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 10 Loop s LCD FIXZENL-10-BK | 17.90 € | **19.50 €** | 5.3 % | **14.7 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 40.90 € | **42.50 €** | 5.7 % | **9.8 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagRound 3 držák s MgS FIXMRO3-BK | 20.90 € | **22.50 €** | 5.5 % | **13.5 %** | 22.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXFLM2-1600-BK | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SGS26+ FIXFLM2-1705-PI | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-BK | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-RD | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BL | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-PI | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1705-BK | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 36.50 € | **38.00 €** | 59.2 % | **65.7 %** | 38.12 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPho 16P FIXMMY-1402-BK | 13.00 € | **14.50 €** | 5.8 % | **18.0 %** | 14.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed MagPad, bílá FIXMPAD2-WH | 12.50 € | **14.00 €** | 9.4 % | **22.5 %** | 14.28 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka akumulátorů olověných CARSPA ENC1209 12V/ 9A | 28.00 € | **29.50 €** | 4.0 % | **9.6 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 18.00 € | **19.50 €** | 32.0 % | **43.0 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Pink | 45.50 € | **47.00 €** | 5.5 % | **9.0 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO White | 45.50 € | **47.00 €** | 5.5 % | **9.0 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Pink | 45.50 € | **47.00 €** | 5.5 % | **9.0 %** | 47.44 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W2 | 23.50 € | **24.90 €** | 16.9 % | **23.8 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 63.90 € | **64.90 €** | 158.0 % | **162.0 %** | 64.99 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS2K 12V/1800W | 229.50 € | **230.50 €** | 4.6 % | **5.0 %** | 230.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed krytApple iPh 17A FIXSHM-1601-TR | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 13.50 € | **14.50 €** | 6.7 % | **14.6 %** | 14.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 6.60 € | **7.60 €** | 24.2 % | **43.0 %** | 7.66 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17P FIXPUM-1602-TR | 14.90 € | **15.90 €** | 7.3 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXPUM-1600-TR | 14.90 € | **15.90 €** | 7.3 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Topic Tab LenIdeaTab11 FIXTOT-1677 | 13.90 € | **14.90 €** | 6.6 % | **14.3 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 56.90 € | **57.90 €** | 70.9 % | **73.9 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 310.90 € | **311.90 €** | 25.5 % | **25.9 %** | 312.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 13.50 € | **14.50 €** | 6.0 % | **13.9 %** | 14.65 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 341.00 € | **342.00 €** | 5.6 % | **5.9 %** | 342.18 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 341.00 € | **342.00 €** | 10.1 % | **10.5 %** | 342.18 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iP 17P FIXGFADA-1602-BK | 10.50 € | **11.50 €** | 6.8 % | **17.0 %** | 11.68 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 30.00 € | **31.00 €** | 6.6 % | **10.2 %** | 31.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor Pad 8 FIXTOT-1145 | 14.00 € | **15.00 €** | 10.6 % | **18.5 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXBLM-1402-BP | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 FIXBLM-1600-BP | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 15 FIXBLM-1200-BP | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle XL s MgS FIXMC-XL-BK | 18.50 € | **19.50 €** | 7.7 % | **13.5 %** | 19.77 € | cena podľa najlacnejšieho iného predajcu |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 18.50 € | **19.50 €** | 7.6 % | **13.4 %** | 19.78 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E200SM | 16.50 € | **17.50 €** | 13.0 % | **19.9 %** | 17.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight batériová kamera WiFi so solárnym panelom | 57.50 € | **58.50 €** | 32.4 % | **34.7 %** | 58.80 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 10.50 € | **11.50 €** | 6.8 % | **17.0 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 10.50 € | **11.50 €** | 6.8 % | **17.0 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A57 5G FIXGFADA-1703-BK | 10.50 € | **11.50 €** | 6.8 % | **17.0 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 10.50 € | **11.50 €** | 6.8 % | **17.0 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17PM FIXOP3-1603-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17P FIXOP3-1602-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo V50 L FIXOP3-1580-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300P FIXOP3-1609-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300 FIXOP3-1642-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor 400 FIXOP3-1552-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-RD | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BRW | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BL | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-RD | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BRW | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG S24 FE FIXOP3-1391-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26 FIXOP3-1704-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SGA17 4G/5G FIXOP3-1700-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A35 5G FIXOP3-1262-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A17 FIXOP3-1700-BL | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14 P4G FIXOP3-1542-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro POCO F7 FIXOP3-1533-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15P+ 5G FIXOP3-1647-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14P+5G FIXOP3-1433-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15 4G FIXOP3-1643-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-RD | 18.50 € | **19.50 €** | 6.3 % | **12.0 %** | 19.84 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdr SG A16 4G/5G FIXOP3-1500-BK | 11.50 € | **12.50 €** | 7.5 % | **16.8 %** | 12.84 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 430.00 € | **431.00 €** | 14.7 % | **15.0 %** | 431.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 30.50 € | **31.50 €** | 32.1 % | **36.4 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 20.50 € | **21.50 €** | 18.1 % | **23.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá TRUTHEAR Gate s mikrofónom (biele) | 23.50 € | **24.50 €** | 14.6 % | **19.5 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 232.00 € | **232.90 €** | 23.4 % | **23.8 %** | 233.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.00 € | **14.90 €** | 8.8 % | **15.8 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.00 € | **25.90 €** | 48.9 % | **54.3 %** | 25.93 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 350.00 € | **350.90 €** | 34.5 % | **34.9 %** | 351.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.90 € | **11.50 €** | 22.4 % | **29.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco P9(2-pack) AC1200, PLC AV10... | 146.90 € | **147.50 €** | 5.1 % | **5.6 %** | 147.59 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tuner 3 Black Přenosné rádio | 115.90 € | **116.50 €** | 5.2 % | **5.8 %** | 116.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.00 € | **14.50 €** | 49.0 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone X1 megaphone and distorting voc... | 120.00 € | **120.50 €** | 32.7 % | **33.3 %** | 120.52 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 181.50 € | **182.00 €** | 24.4 % | **24.7 %** | 182.02 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.00 € | **114.50 €** | 17.2 % | **17.7 %** | 114.53 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 11.50 € | **12.00 €** | 7.7 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.00 € | **166.50 €** | 15.3 % | **15.7 %** | 166.53 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Blue | 93.00 € | **93.50 €** | 9.3 % | **9.9 %** | 93.54 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Pink | 93.00 € | **93.50 €** | 9.3 % | **9.9 %** | 93.54 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.00 € | **217.50 €** | 13.4 % | **13.7 %** | 217.54 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.00 € | **217.50 €** | 36.4 % | **36.7 %** | 217.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 16.50 € | **17.00 €** | 43.2 % | **47.5 %** | 17.05 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 314.50 € | **315.00 €** | 5.3 % | **5.5 %** | 315.05 € | cena podľa najlacnejšieho iného predajcu |
| TC ELECTRONIC PLETHORA X1 TonePrint Loader so 14 leg... | 145.00 € | **145.50 €** | 11.9 % | **12.3 %** | 145.55 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto Stereo Looper | 145.00 € | **145.50 €** | 29.3 % | **29.7 %** | 145.55 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 237.50 € | **238.00 €** | 7.0 % | **7.2 %** | 238.07 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný modul pre DJI Osmo Mobile | 58.00 € | **58.50 €** | 18.9 % | **19.9 %** | 58.58 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.00 € | **22.50 €** | 9.2 % | **11.7 %** | 22.59 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 94.00 € | **94.50 €** | 10.3 % | **10.9 %** | 94.59 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 77.00 € | **77.50 €** | 16.6 % | **17.3 %** | 77.59 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 195.00 € | **195.50 €** | 7.3 % | **7.6 %** | 195.59 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.00 € | **181.50 €** | 25.3 % | **25.7 %** | 181.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 376.00 € | **376.50 €** | 26.7 % | **26.9 %** | 376.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 376.00 € | **376.50 €** | 20.7 % | **20.8 %** | 376.59 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE Pro 2 XR | 354.50 € | **355.00 €** | 23.5 % | **23.7 %** | 355.10 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 208.00 € | **208.50 €** | 34.3 % | **34.6 %** | 208.64 € | cena podľa najlacnejšieho iného predajcu |
| Fixed 2skla SG A17 4/5G FIXGFADA-1700-BK | 10.50 € | **11.00 €** | 6.8 % | **11.9 %** | 11.16 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 339.50 € | **340.00 €** | 6.7 % | **6.9 %** | 340.16 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H85X(2-pack) WiFi ... | 100.50 € | **101.00 €** | 6.3 % | **6.8 %** | 101.19 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 687.00 € | **687.50 €** | 36.5 % | **36.6 %** | 687.69 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 153.50 € | **154.00 €** | 16.5 % | **16.9 %** | 154.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 15.00 € | **15.50 €** | 47.3 % | **52.2 %** | 15.72 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 541.00 € | **541.50 €** | 45.7 % | **45.8 %** | 541.73 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 265.50 € | **266.00 €** | 7.1 % | **7.3 %** | 266.23 € | cena podľa najlacnejšieho iného predajcu |
| Kontroler TP-Link OC200 Controller, Omada SDN | 123.50 € | **124.00 €** | 5.1 % | **5.5 %** | 124.25 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 17.50 € | **18.00 €** | 5.4 % | **8.4 %** | 18.25 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 619.00 € | **619.50 €** | 26.7 % | **26.8 %** | 619.77 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 106.00 € | **106.50 €** | 39.0 % | **39.6 %** | 106.78 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 273.50 € | **274.00 €** | 28.9 % | **29.2 %** | 274.29 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 273.50 € | **274.00 €** | 32.1 % | **32.3 %** | 274.29 € | cena podľa najlacnejšieho iného predajcu |
| Octagon SFX6018 S2 IP HD | 74.50 € | **75.00 €** | 7.9 % | **8.6 %** | 75.30 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 466.00 € | **466.50 €** | 18.2 % | **18.3 %** | 466.85 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L3350 | 185.00 € | **185.50 €** | 8.9 % | **9.2 %** | 185.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.00 € | **10.50 €** | 19.4 % | **25.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **12.50 €** | 18.5 % | **23.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 141.00 € | **141.50 €** | 6.2 % | **6.6 %** | 141.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.00 € | **21.50 €** | 15.4 % | **18.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 247.50 € | **248.00 €** | 20.9 % | **21.1 %** | 248.40 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Black | 27.50 € | **28.00 €** | 6.5 % | **8.4 %** | 28.41 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Pink | 27.50 € | **28.00 €** | 6.5 % | **8.4 %** | 28.41 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 16.50 € | **17.00 €** | 6.9 % | **10.1 %** | 17.45 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Autonabíječka 65W FIXCC65-CC-BK | 15.50 € | **16.00 €** | 8.3 % | **11.8 %** | 16.47 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 11.50 € | **12.00 €** | 7.7 % | **12.4 %** | 12.48 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB BLOW 76-033 GaN 45W USB-A + USB-C + 1m... | 10.50 € | **11.00 €** | 12.3 % | **17.7 %** | 11.49 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP White | 27.50 € | **28.00 €** | 6.2 % | **8.1 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 275.50 € | **276.00 €** | 29.9 % | **30.1 %** | 276.49 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter FNIRSI DMC-100 | 33.50 € | **34.00 €** | 5.3 % | **6.9 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iP17PM FIXGFADA-1603-BK | 10.50 € | **11.00 €** | 6.8 % | **11.9 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Tvrzené sklo FIXED Full-Cover s aplikáto | 10.50 € | **11.00 €** | 6.8 % | **11.9 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone E1 vocal echo/delay pedál | 178.50 € | **178.90 €** | 64.2 % | **64.6 %** | 178.91 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone H1 | 178.50 € | **178.90 €** | 28.3 % | **28.6 %** | 178.91 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone R1 | 178.50 € | **178.90 €** | 36.9 % | **37.2 %** | 178.91 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 166.50 € | **166.90 €** | 15.7 % | **16.0 %** | 166.91 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.50 € | **166.90 €** | 15.7 % | **16.0 %** | 166.91 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 W portable label printer (blue) | 66.50 € | **66.90 €** | 9.0 % | **9.6 %** | 66.93 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 76.50 € | **76.90 €** | 16.6 % | **17.3 %** | 76.94 € | cena podľa najlacnejšieho iného predajcu |
| Chladnička na nápoje Euhomy BR001 | 233.50 € | **233.90 €** | 27.9 % | **28.1 %** | 233.98 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 81.50 € | **81.90 €** | 25.0 % | **25.6 %** | 81.99 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.50 € | **216.90 €** | 17.1 % | **17.3 %** | 217.00 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-WW, 10 m,... | 6.80 € | **7.20 €** | 36.5 % | **44.5 %** | 7.22 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.50 € | **14.90 €** | 11.2 % | **14.3 %** | 14.94 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V200 | 32.50 € | **32.90 €** | 16.8 % | **18.2 %** | 32.93 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix venkovní kamera 4v1 s ... | 56.50 € | **56.90 €** | 16.1 % | **16.9 %** | 56.93 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.50 € | **62.90 €** | 16.8 % | **17.5 %** | 62.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 42.50 € | **42.90 €** | 12.2 % | **13.2 %** | 42.99 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 262.50 € | **262.90 €** | 22.8 % | **22.9 %** | 262.91 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 374.50 € | **374.90 €** | 49.0 % | **49.2 %** | 374.92 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 294.50 € | **294.90 €** | 42.8 % | **43.0 %** | 294.97 € | cena podľa najlacnejšieho iného predajcu |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 266.50 € | **266.90 €** | 22.3 % | **22.5 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.10 € | **7.30 €** | 41.5 % | **45.5 %** | 7.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 1.80 € | **2.00 €** | 34.3 % | **49.2 %** | 2.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri Carbon 2 | 371.90 € | **372.00 €** | 7.4 % | **7.4 %** | 372.12 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 5 powered studio monitor | 257.90 € | **258.00 €** | 48.3 % | **48.4 %** | 258.15 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx QX1222USB mixpult s USB a efektmi | 282.90 € | **283.00 €** | 54.9 % | **55.0 %** | 283.17 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 307.90 € | **308.00 €** | 36.7 % | **36.8 %** | 308.19 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 496.90 € | **497.00 €** | 5.4 % | **5.4 %** | 497.35 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 828.90 € | **829.00 €** | 27.3 % | **27.3 %** | 829.49 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI1040GR | 25.90 € | **26.00 €** | 10.1 % | **10.5 %** | 26.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **17.00 €** | 34.2 % | **35.0 %** | 17.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.41 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0027 | 17.90 € | **18.00 €** | 6.7 % | **7.3 %** | 18.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 3.80 € | **3.90 €** | 41.7 % | **45.4 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Olympus | 90.90 € | **91.00 €** | 20.6 % | **20.8 %** | 91.01 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 72.90 € | **73.00 €** | 20.4 % | **20.6 %** | 73.03 € | cena podľa najlacnejšieho iného predajcu |
| Behringer U-PHORIA STUDIO PRO recording/podcast boundle | 132.90 € | **133.00 €** | 10.0 % | **10.0 %** | 133.04 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto+ Looper multi-session looper pedal | 157.90 € | **158.00 €** | 13.5 % | **13.6 %** | 158.06 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.90 € | **160.00 €** | 6.7 % | **6.8 %** | 160.07 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 207.90 € | **208.00 €** | 50.4 % | **50.4 %** | 208.10 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (202)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Gorenje NRKI517E41 | 503.00 € | **460.00 €** | 20.6 % | **10.3 %** | 460.42 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 501.50 € | **460.00 €** | 22.6 % | **12.4 %** | 460.40 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW7TN3372C | 529.50 € | **491.50 €** | 15.2 % | **7.0 %** | 491.80 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality K2 Pro Combo | 748.90 € | **720.90 €** | 9.1 % | **5.0 %** | 718.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fén TESLA MyCare Multistyler AF05 | 116.90 € | **92.50 €** | 33.4 % | **5.6 %** | 91.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router GL.iNet Puli AX 5G NR | 656.90 € | **636.90 €** | 48.4 % | **43.9 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| Tesla 55E635SUS LED 55" UHD AndroidTV 11 | 415.90 € | **396.90 €** | 10.1 % | **5.1 %** | 379.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Sole 1625 90000 | 104.50 € | **87.50 €** | 31.8 % | **10.4 %** | 87.90 € | cena podľa najlacnejšieho iného predajcu |
| TCL 43T69C QLED 4K SMART Google TV | 328.50 € | **313.50 €** | 10.1 % | **5.1 %** | 310.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 89.50 € | **77.00 €** | 38.7 % | **19.3 %** | 77.08 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet 2 (zelená) | 131.00 € | **121.00 €** | 14.9 % | **6.1 %** | 121.47 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi TV A Pro 75 2026 | 741.50 € | **731.90 €** | 6.4 % | **5.0 %** | 688.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| EPSON M1120 | 201.50 € | **192.50 €** | 10.1 % | **5.2 %** | 178.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal DN853BE0 | 61.50 € | **52.50 €** | 25.4 % | **7.1 %** | 52.63 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO hluboká pánev 24 cm | 34.90 € | **27.90 €** | 31.5 % | **5.1 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu |
| Prevodovka PXN - usporiadanie H 7+1 | 82.00 € | **75.00 €** | 22.9 % | **12.4 %** | 75.38 € | cena podľa najlacnejšieho iného predajcu |
| ETA Stormy Animal 2517 90000 modrý | 137.90 € | **131.50 €** | 10.3 % | **5.2 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 91.50 € | **86.00 €** | 34.9 % | **26.8 %** | 86.02 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 20.90 € | **15.50 €** | 49.4 % | **10.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM03 RGB (čierna) | 26.00 € | **20.90 €** | 58.1 % | **27.1 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-BL modrý, ... | 292.50 € | **287.90 €** | 37.9 % | **35.7 %** | 287.98 € | cena podľa najlacnejšieho iného predajcu |
| Lauben OvenSafe®? Multicooker 6000RS | 91.50 € | **87.00 €** | 10.5 % | **5.0 %** | 83.44 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ultimea Skywave X60 Soundbar | 474.00 € | **469.50 €** | 7.8 % | **6.7 %** | 469.73 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 138.50 € | **134.90 €** | 8.0 % | **5.2 %** | 109.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 83.00 € | **79.50 €** | 21.6 % | **16.5 %** | 79.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **12.50 €** | 38.4 % | **8.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM07 RGB (čierna) | 28.50 € | **25.00 €** | 42.3 % | **24.8 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné závesné svetlo Yeelight Crystal | 93.00 € | **89.90 €** | 25.6 % | **21.4 %** | 89.92 € | cena podľa najlacnejšieho iného predajcu |
| Carrera R/C auto Desert Buggy (1:24) | 33.00 € | **30.00 €** | 17.6 % | **6.9 %** | 30.22 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 144.00 € | **141.00 €** | 7.3 % | **5.1 %** | 141.33 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 28.50 € | **25.90 €** | 16.4 % | **5.8 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Homatics DONGLE R 4K Android TV - UHD multimediální ... | 83.50 € | **80.90 €** | 8.4 % | **5.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 22.50 € | **20.00 €** | 49.6 % | **33.0 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.90 € | **12.50 €** | 37.3 % | **15.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 11.50 € | **9.30 €** | 36.1 % | **10.1 %** | 9.37 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 12 ks | 172.90 € | **170.90 €** | 6.4 % | **5.2 %** | 151.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herná myš ONIKUMA DM05 RGB (čierna) | 17.50 € | **15.50 €** | 43.3 % | **26.9 %** | 15.54 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing 85mm pre ELLI... | 58.90 € | **56.90 €** | 84.2 % | **77.9 %** | 57.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.00 € | **20.00 €** | 35.3 % | **23.0 %** | 20.38 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 205.50 € | **203.50 €** | 14.9 % | **13.8 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový ovládač GoSat GS7056 HDi | 16.50 € | **14.90 €** | 16.3 % | **5.1 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 17.50 € | **16.00 €** | 25.0 % | **14.3 %** | 16.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 34.00 € | **32.50 €** | 41.6 % | **35.4 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 12.00 € | **10.50 €** | 21.0 % | **5.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 51.50 € | **50.00 €** | 65.4 % | **60.6 %** | 50.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **9.80 €** | 31.1 % | **17.9 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 214.90 € | **213.90 €** | 38725.7 % | **38545.0 %** | 214.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 649.90 € | **648.90 €** | 117316.4 % | **117135.8 %** | 649.00 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 142.50 € | **141.50 €** | 8.1 % | **7.3 %** | 141.71 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 294.00 € | **293.00 €** | 12.5 % | **12.1 %** | 293.21 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 294.00 € | **293.00 €** | 8.1 % | **7.7 %** | 293.21 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.00 € | **70.00 €** | 13.1 % | **11.5 %** | 70.36 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.50 € | **207.50 €** | 16.6 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPhone 13 FIXBLM-723-BP | 20.50 € | **19.50 €** | 32.8 % | **26.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 320.00 € | **319.00 €** | 19.8 % | **19.4 %** | 319.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.00 € | **35.00 €** | 37.9 % | **34.1 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.00 €** | 12.5 % | **5.7 %** | 12.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 400.50 € | **399.90 €** | 6.9 % | **6.7 %** | 400.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 404.50 € | **403.90 €** | 7.2 % | **7.1 %** | 404.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco PX10(3-pack) AX1500 + AV100... | 249.50 € | **249.00 €** | 5.2 % | **5.0 %** | 246.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 34.50 € | **34.00 €** | 35.6 % | **33.7 %** | 34.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 42.00 € | **41.50 €** | 21.4 % | **20.0 %** | 41.55 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 252.50 € | **252.00 €** | 62107.4 % | **61984.3 %** | 252.21 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony PGYTECH 55 cm (P-GM-101) | 15.00 € | **14.50 €** | 34.9 % | **30.4 %** | 14.78 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongVision Mini, fotopast | 41.50 € | **41.00 €** | 7.4 % | **6.1 %** | 41.29 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Canon | 271.00 € | **270.50 €** | 31.4 % | **31.2 %** | 270.80 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 286.50 € | **286.00 €** | 57.6 % | **57.4 %** | 286.32 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 132.50 € | **132.00 €** | 10.8 % | **10.4 %** | 132.38 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 344.00 € | **343.50 €** | 25.7 % | **25.5 %** | 343.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 44.00 € | **43.50 €** | 39.0 % | **37.4 %** | 43.89 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 86.50 € | **86.00 €** | 14.5 % | **13.8 %** | 86.39 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 65.00 € | **64.50 €** | 98.7 % | **97.1 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 54.00 € | **53.50 €** | 13.0 % | **11.9 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 114.50 € | **114.00 €** | 39.9 % | **39.3 %** | 114.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.50 € | **37.00 €** | 9.1 % | **7.6 %** | 37.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 318.00 € | **317.50 €** | 18.4 % | **18.2 %** | 317.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.50 € | **239.00 €** | 12.2 % | **11.9 %** | 239.39 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia Uni-T RCD UT582+ | 101.50 € | **101.00 €** | 11.4 % | **10.9 %** | 101.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 129.50 € | **129.00 €** | 8.1 % | **7.7 %** | 129.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 926.00 € | **925.50 €** | 17.7 % | **17.6 %** | 925.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 90.00 € | **89.50 €** | 15.4 % | **14.8 %** | 89.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.00 € | **89.50 €** | 14.5 % | **13.9 %** | 89.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 27.00 € | **26.50 €** | 10.4 % | **8.4 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 133.00 € | **132.50 €** | 16.4 % | **16.0 %** | 132.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 82.50 € | **82.00 €** | 9.1 % | **8.5 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.50 € | **33.00 €** | 8.8 % | **7.2 %** | 33.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 77.50 € | **77.00 €** | 7.7 % | **7.0 %** | 77.39 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 188.50 € | **188.00 €** | 12.0 % | **11.7 %** | 188.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 257.00 € | **256.50 €** | 20.1 % | **19.9 %** | 256.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 292.00 € | **291.50 €** | 25.9 % | **25.6 %** | 291.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 115.50 € | **115.00 €** | 7.8 % | **7.3 %** | 115.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 64.00 € | **63.50 €** | 17.9 % | **17.0 %** | 63.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO540FR | 63.00 € | **62.50 €** | 18.6 % | **17.7 %** | 62.89 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 74.00 € | **73.50 €** | 8.5 % | **7.8 %** | 73.89 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 46.50 € | **46.00 €** | 9.0 % | **7.8 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 46.50 € | **46.00 €** | 9.0 % | **7.8 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.50 € | **87.00 €** | 22.4 % | **21.7 %** | 87.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 53.00 € | **52.50 €** | 10.5 % | **9.4 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Plus 575 Combo+dock white | 528.50 € | **528.00 €** | 9.8 % | **9.6 %** | 528.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 285.00 € | **284.50 €** | 40.9 % | **40.7 %** | 284.89 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 266.50 € | **266.00 €** | 9.2 % | **9.0 %** | 266.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 246.50 € | **246.00 €** | 24.3 % | **24.1 %** | 246.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 276.50 € | **276.00 €** | 8.9 % | **8.7 %** | 276.39 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 53.00 € | **52.50 €** | 6.4 % | **5.4 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 24.00 € | **23.50 €** | 8.6 % | **6.3 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 34.00 € | **33.50 €** | 11.8 % | **10.1 %** | 33.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 36.00 € | **35.50 €** | 18.4 % | **16.8 %** | 35.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 151.00 € | **150.50 €** | 6.8 % | **6.4 %** | 150.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 70.50 € | **70.00 €** | 6.7 % | **6.0 %** | 70.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 118.00 € | **117.50 €** | 23298.8 % | **23199.6 %** | 117.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 136.00 € | **135.50 €** | 18.9 % | **18.4 %** | 135.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 80.00 € | **79.50 €** | 37.5 % | **36.6 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 182.00 € | **181.50 €** | 23.3 % | **23.0 %** | 181.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 187.00 € | **186.50 €** | 7.0 % | **6.7 %** | 186.89 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 62.00 € | **61.50 €** | 15.6 % | **14.7 %** | 61.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 310.50 € | **310.00 €** | 5.6 % | **5.5 %** | 310.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 609.50 € | **609.00 €** | 6.1 % | **6.0 %** | 609.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 639.50 € | **639.00 €** | 8.0 % | **7.9 %** | 639.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 687.50 € | **687.00 €** | 12.1 % | **12.1 %** | 687.39 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 84.00 € | **83.50 €** | 28.1 % | **27.3 %** | 83.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 83.50 € | **83.00 €** | 6.5 % | **5.9 %** | 83.39 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 119.00 € | **118.50 €** | 32.2 % | **31.7 %** | 118.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 83.00 € | **82.50 €** | 33.9 % | **33.1 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 106.00 € | **105.50 €** | 12.3 % | **11.7 %** | 105.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 106.00 € | **105.50 €** | 19.4 % | **18.8 %** | 105.89 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 50.00 € | **49.50 €** | 42.9 % | **41.5 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022400 | 37.00 € | **36.50 €** | 17.7 % | **16.1 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST0401 Cestovní žehlička | 23.00 € | **22.50 €** | 18.9 % | **16.3 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Ottocast CA525-T3 | 27.50 € | **27.00 €** | 23.3 % | **21.0 %** | 27.49 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.50 € | **13.00 €** | 10.4 % | **6.3 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 21.50 € | **21.00 €** | 7.6 % | **5.1 %** | 21.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.50 € | **24.00 €** | 15.9 % | **13.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 14.50 € | **14.00 €** | 9.3 % | **5.5 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.50 € | **130.00 €** | 25777.5 % | **25678.3 %** | 130.49 € | cena podľa najlacnejšieho iného predajcu |
| Boffin I 100 | 24.50 € | **24.00 €** | 9.1 % | **6.9 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 48.50 € | **48.00 €** | 23.1 % | **21.8 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 14.50 € | **14.00 €** | 43.1 % | **38.1 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 35.50 € | **35.00 €** | 36.3 % | **34.4 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 30.50 € | **30.00 €** | 17.1 % | **15.2 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 10.50 € | **10.00 €** | 18.9 % | **13.2 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal KI883D10 | 106.50 € | **106.00 €** | 10.3 % | **9.8 %** | 106.50 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P101CUD100 | 33.50 € | **33.00 €** | 7.2 % | **5.6 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.50 € | **14.00 €** | 17.1 % | **13.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 47.50 € | **47.00 €** | 138.7 % | **136.2 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 47.50 € | **47.00 €** | 36.1 % | **34.7 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 96.50 € | **96.00 €** | 17.1 % | **16.5 %** | 96.50 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 23.50 € | **23.00 €** | 8.4 % | **6.1 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.90 € | **70.50 €** | 14.4 % | **13.8 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.90 € | **89.50 €** | 15.4 % | **14.8 %** | 89.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.50 €** | 15.2 % | **14.6 %** | 79.79 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 102.90 € | **102.50 €** | 14.1 % | **13.7 %** | 102.79 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 102.90 € | **102.50 €** | 7.3 % | **6.9 %** | 102.79 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link PG2400P KIT G.hn adaptér ... | 126.90 € | **126.50 €** | 5.9 % | **5.5 %** | 126.79 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA38F2K7NXBB | 136.90 € | **136.50 €** | 13.6 % | **13.3 %** | 136.79 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska IsEasy LI3-17 | 150.90 € | **150.50 €** | 29.2 % | **28.9 %** | 150.79 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.90 € | **162.50 €** | 21.5 % | **21.2 %** | 162.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.90 € | **152.50 €** | 19.6 % | **19.3 %** | 152.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.90 € | **127.50 €** | 17.4 % | **17.0 %** | 127.79 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 144.90 € | **144.50 €** | 50.7 % | **50.3 %** | 144.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH 6756WO | 122.90 € | **122.50 €** | 8.6 % | **8.2 %** | 122.90 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sada Combi Classic mop 56792 | 13.90 € | **13.50 €** | 11.2 % | **8.0 %** | 13.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.90 € | **10.50 €** | 24.8 % | **20.2 %** | 10.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.90 € | **10.50 €** | 27.1 % | **22.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s hviezdami Solight 1V52-WW, 1,5 ... | 2.20 € | **1.80 €** | 39.7 % | **14.3 %** | 1.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer Nutri Mini | 48.90 € | **48.50 €** | 14.9 % | **14.0 %** | 48.58 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 58.90 € | **58.50 €** | 6.5 % | **5.8 %** | 58.79 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Archer TX20E AX1800 WiFi 6, PC... | 29.90 € | **29.50 €** | 6.6 % | **5.1 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 46.90 € | **46.50 €** | 32.0 % | **30.9 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 38.90 € | **38.50 €** | 10.5 % | **9.4 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 17.90 € | **17.50 €** | 22.0 % | **19.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 21.90 € | **21.50 €** | 52.2 % | **49.4 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 37.90 € | **37.50 €** | 15.0 % | **13.8 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 24.90 € | **24.50 €** | 14.5 % | **12.7 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Coppertinto KI280G10 | 28.90 € | **28.50 €** | 7.3 % | **5.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 31.90 € | **31.50 €** | 57.0 % | **55.0 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.90 € | **22.50 €** | 34.1 % | **31.8 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.90 € | **471.50 €** | 9.0 % | **9.0 %** | 471.79 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.40 € | **3.20 €** | 51.1 % | **42.2 %** | 3.29 € | cena podľa najlacnejšieho iného predajcu |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 39.00 € | **38.90 €** | 24.6 % | **24.3 %** | 38.96 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.00 € | **21.90 €** | 10.1 % | **9.6 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.00 € | **22.90 €** | 11.7 % | **11.2 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 608 | 24.00 € | **23.90 €** | 11.9 % | **11.5 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 26.00 € | **25.90 €** | 21.5 % | **21.0 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 8.30 € | **8.20 €** | 53.0 % | **51.2 %** | 8.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 18.00 € | **17.90 €** | 15.0 % | **14.4 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 20.00 € | **19.90 €** | 25.4 % | **24.7 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.00 € | **23.90 €** | 14.8 % | **14.4 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.10 €** | 20.4 % | **18.1 %** | 5.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.70 € | **4.60 €** | 29.1 % | **26.3 %** | 4.69 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les a jeleň Solight 1V223-A,... | 5.50 € | **5.40 €** | 39.3 % | **36.8 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **4.90 €** | 21.0 % | **18.6 %** | 4.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **14.90 €** | 26.6 % | **25.8 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.00 € | **10.90 €** | 28.3 % | **27.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.40 €** | 33.9 % | **32.4 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 13.00 € | **12.90 €** | 19.4 % | **18.5 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 14.00 € | **13.90 €** | 21.2 % | **20.3 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.10 € | **5.00 €** | 126.6 % | **122.1 %** | 5.10 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.50 € | **9.40 €** | 21.1 % | **19.8 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 9.50 € | **9.40 €** | 39.4 % | **37.9 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.50 € | **9.40 €** | 13.2 % | **12.1 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015502 Mikrovlnná trouba | 121.00 € | **120.90 €** | 14.2 % | **14.1 %** | 121.00 € | cena podľa najlacnejšieho iného predajcu |

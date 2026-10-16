# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-16

Vstup: `premiumstore-sk_2026-10-16_07-43.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6379**
- Návrh **zvýšiť** cenu: **442** produktov
- Návrh **znížiť** cenu: **392** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5545** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **101**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **340**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (442)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria Flytec V900 12000mah | 16.00 € | **223.90 €** | 15.3 % | **1513.8 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **223.90 €** | 14.5 % | **476.1 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 476.00 € | **635.00 €** | 8.1 % | **44.2 %** | 635.07 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 363.00 € | **453.00 €** | 8.1 % | **34.9 %** | 453.08 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped DeerRun S500 Pro (čierny) | 246.50 € | **325.00 €** | 15.1 % | **51.8 %** | 325.23 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 198.90 € | **266.50 €** | 17.3 % | **57.2 %** | 266.71 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 826.50 € | **885.00 €** | 10.1 % | **17.9 %** | 885.37 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 628.00 € | **681.00 €** | 37.9 % | **49.5 %** | 681.42 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 849.00 € | **897.90 €** | 8.2 % | **14.4 %** | 897.98 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie 10102847 FS150B | 190.50 € | **238.90 €** | 14.9 % | **44.1 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 396.00 € | **443.50 €** | 7.3 % | **20.2 %** | 443.84 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 769.00 € | **815.00 €** | 7.9 % | **14.3 %** | 815.38 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 261.50 € | **306.00 €** | 39.3 % | **63.0 %** | 306.27 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 756.00 € | **795.50 €** | 11.2 % | **17.0 %** | 795.82 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 298.50 € | **337.50 €** | 9.3 % | **23.6 %** | 337.75 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q6 | 560.90 € | **598.90 €** | 38.0 % | **47.4 %** | 599.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 310.50 € | **346.50 €** | 9.4 % | **22.1 %** | 346.71 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 462.50 € | **496.50 €** | 7.6 % | **15.5 %** | 496.69 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra S1 Max Combo | 820.50 € | **853.00 €** | 8.1 % | **12.4 %** | 853.40 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 140.50 € | **170.90 €** | 39.4 % | **69.6 %** | 170.97 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 333.00 € | **362.00 €** | 8.6 % | **18.1 %** | 362.18 € | cena podľa najlacnejšieho iného predajcu |
| Sušič vlasov MOVA Flip 10 | 175.00 € | **204.00 €** | 19.3 % | **39.1 %** | 204.33 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P11pro | 214.50 € | **242.50 €** | 5.2 % | **19.0 %** | 242.79 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 200.90 € | **228.00 €** | 5.1 % | **19.3 %** | 228.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 562.50 € | **584.00 €** | 23.8 % | **28.5 %** | 584.17 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 768.50 € | **788.90 €** | 40.8 % | **44.6 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 63.50 € | **83.50 €** | 31.9 % | **73.4 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 468.00 € | **488.00 €** | 10.3 % | **15.0 %** | 488.17 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 399.00 € | **418.90 €** | 37.7 % | **44.6 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus R200 | 448.90 € | **466.90 €** | 38.1 % | **43.6 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 331.50 € | **348.90 €** | 38.6 % | **45.9 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 16.50 € | **33.00 €** | 15.5 % | **131.1 %** | 33.10 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 329.00 € | **345.00 €** | 8.5 % | **13.7 %** | 345.10 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 266.50 € | **282.50 €** | 7.5 % | **13.9 %** | 282.69 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 134.00 € | **148.90 €** | 39.9 % | **55.5 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN X2 Standard – stabilizátor (biely) | 69.00 € | **83.50 €** | 38.1 % | **67.2 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 898.90 € | **912.90 €** | 17.1 % | **18.9 %** | 912.95 € | cena podľa najlacnejšieho iného predajcu |
| Lovecký ďalekohľad Mileseey IONJET2 | 232.90 € | **246.90 €** | 36.2 % | **44.4 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu |
| Ochranné puzdro Telesin s rukoväťou pre DJI Osmo Act... | 60.00 € | **74.00 €** | 14.8 % | **41.6 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Mobilný ovládač GameSir G8+ MFi (sivý) | 64.90 € | **78.50 €** | 19.0 % | **44.0 %** | 78.76 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 142.50 € | **155.00 €** | 39.5 % | **51.7 %** | 155.05 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B70... | 104.00 € | **116.50 €** | 38.9 % | **55.6 %** | 116.73 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 296.50 € | **308.90 €** | 38.0 % | **43.8 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259C (HP W2071A Cyan) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259Y (HP W2072A Yellow) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259M (HP W2073A Magenta) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada na selfie Neewer SRP18C s priemerom 17 cm a okr... | 164.90 € | **176.90 €** | 38.9 % | **49.0 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS9 – multifunkčný štartér do auta | 77.50 € | **89.50 €** | 29.9 % | **50.0 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 137.00 € | **148.90 €** | 31.3 % | **42.7 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 65.50 € | **77.00 €** | 38.1 % | **62.3 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 216.50 € | **228.00 €** | 5.2 % | **10.8 %** | 228.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 246.50 € | **257.50 €** | 21.8 % | **27.2 %** | 257.71 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 246.50 € | **257.50 €** | 13.2 % | **18.2 %** | 257.71 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iFlash iT20 pre Nikon | 40.50 € | **51.50 €** | 14.5 % | **45.6 %** | 51.90 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 22.50 € | **33.00 €** | 15.9 % | **70.0 %** | 33.10 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 47.50 € | **58.00 €** | 19.7 % | **46.2 %** | 58.40 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash UV360 (čierny) | 248.50 € | **258.90 €** | 38.8 % | **44.6 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 168.90 € | **178.90 €** | 38.9 % | **47.1 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S UV AI | 54.00 € | **64.00 €** | 16.4 % | **38.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 147.00 € | **156.90 €** | 30.4 % | **39.2 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 222.90 € | **232.00 €** | 16.4 % | **21.2 %** | 232.42 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie fotografického pozadia Puluz 2x... | 56.00 € | **65.00 €** | 31.2 % | **52.2 %** | 65.07 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE240 (biele) | 96.50 € | **105.50 €** | 35.3 % | **47.9 %** | 105.66 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 953.00 € | **962.00 €** | 14.8 % | **15.9 %** | 962.40 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 216.00 € | **224.50 €** | 14.3 % | **18.8 %** | 224.62 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 216.00 € | **224.50 €** | 14.3 % | **18.8 %** | 224.62 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 213.00 € | **221.50 €** | 14.2 % | **18.7 %** | 221.63 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 158.50 € | **166.90 €** | 39.8 % | **47.2 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Game Pods FIXPDS-G-WH | 40.50 € | **48.50 €** | 10.9 % | **32.9 %** | 48.69 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 759.00 € | **767.00 €** | 38.3 % | **39.7 %** | 767.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS200HK(EU) (Hom... | 51.00 € | **58.90 €** | 45.1 % | **67.6 %** | 58.92 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 389.00 € | **396.90 €** | 40.0 % | **42.9 %** | 397.00 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 41.50 € | **49.00 €** | 37.9 % | **62.8 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 26.00 € | **33.50 €** | 39.3 % | **79.4 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 302.00 € | **309.50 €** | 19.0 % | **21.9 %** | 309.70 € | cena podľa najlacnejšieho iného predajcu |
| Continenta Dřevěný chlebník | 75.50 € | **82.90 €** | 10.5 % | **21.4 %** | 82.99 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 41.90 € | **49.00 €** | 55.2 % | **81.5 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 011 | 58.90 € | **65.90 €** | 10.4 % | **23.5 %** | 66.00 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 54.00 € | **61.00 €** | 5.2 % | **18.8 %** | 61.12 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **33.00 €** | 15.2 % | **43.5 %** | 33.10 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT302D+ | 73.00 € | **79.50 €** | 38.6 % | **51.0 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 163.00 € | **169.50 €** | 14.0 % | **18.5 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 87.50 € | **94.00 €** | 32.3 % | **42.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 170.50 € | **176.90 €** | 41.8 % | **47.2 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VNT200 (čierne) | 27.50 € | **33.50 €** | 17.2 % | **42.7 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno 72489 | 60.90 € | **66.50 €** | 10.2 % | **20.3 %** | 66.82 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 47.90 € | **53.50 €** | 15.4 % | **28.8 %** | 53.90 € | cena podľa najlacnejšieho iného predajcu |
| Nerezová fontána / napájačka pre psov a mačky 2l Rojeco | 24.00 € | **29.50 €** | 15.0 % | **41.4 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 26.50 € | **31.90 €** | 10.1 % | **32.5 %** | 31.92 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart Sada příslušenství pro iRobot R | 29.50 € | **34.90 €** | 10.3 % | **30.5 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| JBL PBM100 Black | 33.50 € | **38.90 €** | 5.1 % | **22.1 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Triple monitor mount 17-32" Huanuo HNTS3B-UK | 88.00 € | **93.00 €** | 13.8 % | **20.2 %** | 93.02 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10022 | 135.00 € | **140.00 €** | 7.7 % | **11.7 %** | 140.10 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 71.00 € | **76.00 €** | 45.8 % | **56.1 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak Sunnylife MJ033 pre (OSMO 360, Ins... | 13.00 € | **18.00 €** | 39.8 % | **93.6 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Samsung SWA-9500S/EN | 219.00 € | **224.00 €** | 10.0 % | **12.6 %** | 224.21 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 93.00 € | **98.00 €** | 35.6 % | **42.9 %** | 98.28 € | cena podľa najlacnejšieho iného predajcu |
| KMP C107XV (CLI-571BK/C/M/Y XL) | 26.50 € | **31.00 €** | 10.8 % | **29.6 %** | 31.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 54.50 € | **59.00 €** | 25.5 % | **35.9 %** | 59.14 € | cena podľa najlacnejšieho iného predajcu |
| Kolečka pro kancelářskou židli Ruhhy 25280 | 12.50 € | **17.00 €** | 10.0 % | **49.6 %** | 17.18 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 344.50 € | **349.00 €** | 35.9 % | **37.7 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 75.00 € | **79.50 €** | 37.8 % | **46.1 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 286.50 € | **291.00 €** | 57.6 % | **60.1 %** | 291.40 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96CX (HP 305XL Colour) | 17.50 € | **21.90 €** | 11.2 % | **39.2 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 47.90 € | **51.90 €** | 15.4 % | **25.0 %** | 51.92 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 47.90 € | **51.90 €** | 15.4 % | **25.0 %** | 51.92 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 102.90 € | **106.90 €** | 38.5 % | **43.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 231.00 € | **235.00 €** | 12.7 % | **14.7 %** | 235.10 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600G | 102.90 € | **106.90 €** | 39.4 % | **44.8 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 131.00 € | **135.00 €** | 35.9 % | **40.1 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer horkovzdušná fritéza ZAF9230 | 167.00 € | **171.00 €** | 6.1 % | **8.6 %** | 171.20 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer kuchyňský robot ZKR2010 | 170.00 € | **174.00 €** | 6.0 % | **8.5 %** | 174.20 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 258.00 € | **262.00 €** | 21.5 % | **23.3 %** | 262.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 21.50 € | **25.50 €** | 28.3 % | **52.2 %** | 25.87 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 77.50 € | **81.50 €** | 5.3 % | **10.8 %** | 81.89 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW5558E0 | 164.50 € | **168.50 €** | 5.9 % | **8.5 %** | 168.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal XF652038 | 149.00 € | **152.90 €** | 6.1 % | **8.9 %** | 153.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT96425VD | 249.90 € | **253.50 €** | 6.2 % | **7.7 %** | 253.60 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 143.00 € | **146.50 €** | 6.3 % | **8.9 %** | 146.60 € | cena podľa najlacnejšieho iného predajcu |
| Statív s 3D 360° hlavou + držiak na telefón Puluz PU... | 25.00 € | **28.50 €** | 25.2 % | **42.8 %** | 28.65 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 215.00 € | **218.50 €** | 5.9 % | **7.7 %** | 218.80 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 331.50 € | **335.00 €** | 7.6 % | **8.7 %** | 335.34 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 26.00 € | **29.50 €** | 38.9 % | **57.6 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 26.00 € | **29.50 €** | 38.9 % | **57.6 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 56.00 € | **59.50 €** | 38.3 % | **47.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá TRUTHEAR Gate s mikrofónom (biele) | 23.50 € | **27.00 €** | 14.6 % | **31.7 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 123.50 € | **126.90 €** | 38.4 % | **42.2 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 435C | 14.50 € | **17.90 €** | 12.0 % | **38.2 %** | 17.97 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo L930-5 | 37.90 € | **41.00 €** | 5.3 % | **13.9 %** | 41.18 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP16 PM FIXVM-1403-BK | 32.50 € | **35.50 €** | 5.3 % | **15.0 %** | 35.51 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPh 16 P FIXVM-1402-BK | 32.50 € | **35.50 €** | 5.3 % | **15.0 %** | 35.51 € | cena podľa najlacnejšieho iného predajcu |
| Ateliérové osvetlenie NEEWER BASICS SL90C | 40.00 € | **43.00 €** | 14.3 % | **22.9 %** | 43.04 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, černé ASG001 | 71.90 € | **74.90 €** | 10.3 % | **14.9 %** | 74.96 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 327.50 € | **330.50 €** | 5.9 % | **6.9 %** | 330.60 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 232.00 € | **235.00 €** | 17.4 % | **18.9 %** | 235.11 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz 45 cm (biely) | 76.50 € | **79.50 €** | 29.3 % | **34.4 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 23.00 € | **26.00 €** | 6.2 % | **20.1 %** | 26.33 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Handy Force One 2v1, 2708 | 52.00 € | **55.00 €** | 7.0 % | **13.2 %** | 55.40 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 992.50 € | **995.50 €** | 13.2 % | **13.5 %** | 995.90 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 66.50 € | **69.50 €** | 27.7 % | **33.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 70.00 € | **72.90 €** | 8.8 % | **13.3 %** | 72.92 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 214.00 € | **216.90 €** | 37.2 % | **39.1 %** | 217.00 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostic Scanner OBD2 Ancel AS500/AC105 | 44.90 € | **47.50 €** | 36.0 % | **43.9 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (čierny) | 11.90 € | **14.50 €** | 14.8 % | **39.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Štartér UTRAI s vzduchovým kompresorom JS5 | 105.00 € | **107.50 €** | 21.7 % | **24.6 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 31.00 € | **33.50 €** | 5.3 % | **13.8 %** | 33.55 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 31.00 € | **33.50 €** | 5.3 % | **13.8 %** | 33.55 € | cena podľa najlacnejšieho iného predajcu |
| Systémy kvapkového a rozprašovacieho zavlažovania | 44.00 € | **46.50 €** | 35.5 % | **43.1 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 42.00 € | **44.50 €** | 14.4 % | **21.2 %** | 44.63 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 327.50 € | **330.00 €** | 7.1 % | **7.9 %** | 330.20 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (biela) (QWERTY) | 40.50 € | **43.00 €** | 15.4 % | **22.5 %** | 43.21 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 321.00 € | **323.50 €** | 9.8 % | **10.6 %** | 323.71 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 383.50 € | **386.00 €** | 91.3 % | **92.6 %** | 386.22 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS062 svorka volantu pre stôl | 54.50 € | **57.00 €** | 17.4 % | **22.8 %** | 57.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 32.00 € | **34.50 €** | 8.1 % | **16.6 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC111X Pomalý hrnec 3,5 l | 85.50 € | **87.90 €** | 5.3 % | **8.2 %** | 87.99 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica ONIKUMA MT501 (biela) | 26.50 € | **28.90 €** | 15.0 % | **25.4 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Pouzdro SGTabA11 FIXRTC-1650-BK | 30.50 € | **32.90 €** | 6.4 % | **14.8 %** | 32.96 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 16e FIXPFIT2-1404-BK | 29.50 € | **31.90 €** | 6.0 % | **14.7 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.70 € | **9.00 €** | 14.4 % | **53.7 %** | 9.04 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 40.90 € | **43.00 €** | 15.3 % | **21.2 %** | 43.38 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCool 2,MagSafe FIXMCO2-BK | 27.90 € | **30.00 €** | 5.6 % | **13.5 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (modrý) | 11.90 € | **14.00 €** | 14.8 % | **35.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na pneumatiky Flextail Evo 150 (čierna) | 27.00 € | **29.00 €** | 40.4 % | **50.7 %** | 29.04 € | cena podľa najlacnejšieho iného predajcu |
| Držiak športovej kamery na riadidlá PGYTECH (P-GM-171) | 35.50 € | **37.50 €** | 15.7 % | **22.2 %** | 37.65 € | cena podľa najlacnejšieho iného predajcu |
| KMP C88 / CL-541XL | 15.50 € | **17.50 €** | 13.6 % | **28.3 %** | 17.74 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerstation Uni FIXPOS-U-BK | 32.50 € | **34.50 €** | 5.3 % | **11.7 %** | 34.75 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO4B25EA | 95.50 € | **97.50 €** | 10.2 % | **12.5 %** | 97.81 € | cena podľa najlacnejšieho iného predajcu |
| Girmi SC0301 Ohřívač jídla | 24.50 € | **26.50 €** | 10.1 % | **19.1 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 15.50 € | **17.50 €** | 15.5 % | **30.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 62.50 € | **64.50 €** | 10.6 % | **14.1 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre BOBOVR M2 Pro + nabíjacia stanica | 34.50 € | **36.50 €** | 38.6 % | **46.6 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (biela) | 22.00 € | **24.00 €** | 35.6 % | **47.9 %** | 24.48 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (čierna) | 22.00 € | **24.00 €** | 25.6 % | **37.0 %** | 24.48 € | cena podľa najlacnejšieho iného predajcu |
| 4-zónový zavlažovací ovládač RainPoint ITV447 | 62.00 € | **64.00 €** | 39.4 % | **43.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell UV do Real Locking VND | 43.00 € | **45.00 €** | 43.7 % | **50.4 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco A12 5M automatické zaťahovacie vodítko pre ps... | 10.00 € | **12.00 €** | 15.0 % | **38.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 18.00 € | **19.90 €** | 32.0 % | **45.9 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 430.00 € | **431.90 €** | 14.7 % | **15.3 %** | 431.99 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 10 Loop s LCD FIXZENL-10-BK | 17.90 € | **19.50 €** | 5.3 % | **14.7 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 58.90 € | **60.50 €** | 6.5 % | **9.4 %** | 60.59 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagRound 3 držák s MgS FIXMRO3-BK | 20.90 € | **22.50 €** | 5.5 % | **13.5 %** | 22.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 13.90 € | **15.50 €** | 13.1 % | **26.1 %** | 15.86 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 87.90 € | **89.50 €** | 5.5 % | **7.4 %** | 89.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXFLM2-1600-BK | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SGS26+ FIXFLM2-1705-PI | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-BK | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-RD | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BL | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-PI | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1705-BK | 18.50 € | **20.00 €** | 6.3 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 38.00 € | **39.50 €** | 15.0 % | **19.6 %** | 39.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 36.50 € | **38.00 €** | 59.2 % | **65.7 %** | 38.12 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPho 16P FIXMMY-1402-BK | 13.00 € | **14.50 €** | 5.8 % | **18.0 %** | 14.75 € | cena podľa najlacnejšieho iného predajcu |
| Kempingová lampa Superfire LT01 2v1 – 50–250 lm, pow... | 12.00 € | **13.50 €** | 33.5 % | **50.1 %** | 13.78 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 350.00 € | **351.50 €** | 34.5 % | **35.1 %** | 351.80 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VN200 (čierne a červené) | 22.00 € | **23.50 €** | 11.8 % | **19.4 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO White | 45.50 € | **47.00 €** | 5.5 % | **9.0 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Pink | 45.50 € | **47.00 €** | 5.5 % | **9.0 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Pink | 45.50 € | **47.00 €** | 5.5 % | **9.0 %** | 47.44 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 19.8MM 10 (Złoty) | 31.50 € | **33.00 €** | 38.7 % | **45.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 bez ventilátorov (b... | 27.50 € | **29.00 €** | 39.8 % | **47.4 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 247.50 € | **248.90 €** | 20.9 % | **21.5 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W2 | 23.50 € | **24.90 €** | 16.9 % | **23.8 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový diaľkový ovládač Heiman HM1RC-W Interlinked | 2.40 € | **3.70 €** | 32.7 % | **104.6 %** | 3.80 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 828.90 € | **830.00 €** | 27.3 % | **27.4 %** | 830.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 53.90 € | **55.00 €** | 24.2 % | **26.7 %** | 55.38 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco P9(2-pack) AC1200, PLC AV10... | 146.90 € | **148.00 €** | 5.1 % | **5.9 %** | 148.49 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 63.90 € | **64.90 €** | 158.0 % | **162.0 %** | 64.99 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS2K 12V/1800W | 229.50 € | **230.50 €** | 4.6 % | **5.0 %** | 229.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux E200SM | 16.50 € | **17.50 €** | 13.0 % | **19.9 %** | 17.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17A FIXSHM-1601-TR | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.55 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 13.50 € | **14.50 €** | 6.7 % | **14.6 %** | 14.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 6.60 € | **7.60 €** | 24.2 % | **43.0 %** | 7.66 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17P FIXPUM-1602-TR | 14.90 € | **15.90 €** | 7.3 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXPUM-1600-TR | 14.90 € | **15.90 €** | 7.3 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 28.50 € | **29.50 €** | 16.4 % | **20.5 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB BLOW 76-033 GaN 45W USB-A + USB-C + 1m... | 10.50 € | **11.50 €** | 12.3 % | **23.0 %** | 11.59 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Topic Tab LenIdeaTab11 FIXTOT-1677 | 13.90 € | **14.90 €** | 6.6 % | **14.3 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 56.90 € | **57.90 €** | 70.9 % | **73.9 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 273.50 € | **274.50 €** | 32.1 % | **32.6 %** | 274.59 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 273.50 € | **274.50 €** | 28.9 % | **29.4 %** | 274.59 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 141.00 € | **142.00 €** | 6.2 % | **7.0 %** | 142.10 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Canon | 271.00 € | **272.00 €** | 31.4 % | **31.9 %** | 272.15 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 541.00 € | **542.00 €** | 45.7 % | **46.0 %** | 542.18 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 341.00 € | **342.00 €** | 5.6 % | **5.9 %** | 342.18 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 341.00 € | **342.00 €** | 10.1 % | **10.5 %** | 342.18 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iP 17P FIXGFADA-1602-BK | 10.50 € | **11.50 €** | 6.8 % | **17.0 %** | 11.68 € | cena podľa najlacnejšieho iného predajcu |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.00 € | **17.00 €** | 10.6 % | **17.5 %** | 17.19 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2023F0 | 36.50 € | **37.50 €** | 11.5 % | **14.5 %** | 37.70 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 30.00 € | **31.00 €** | 6.6 % | **10.2 %** | 31.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor Pad 8 FIXTOT-1145 | 14.00 € | **15.00 €** | 10.6 % | **18.5 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 275.50 € | **276.50 €** | 29.9 % | **30.4 %** | 276.70 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie PGYTECH MANTIS RC M1 pre digitáln... | 16.50 € | **17.50 €** | 15.6 % | **22.7 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXBLM-1402-BP | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 FIXBLM-1600-BP | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 15 FIXBLM-1200-BP | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 16.50 € | **17.50 €** | 6.9 % | **13.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 266.50 € | **267.50 €** | 22.3 % | **22.8 %** | 267.75 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 687.00 € | **688.00 €** | 36.5 % | **36.7 %** | 688.26 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle XL s MgS FIXMC-XL-BK | 18.50 € | **19.50 €** | 7.7 % | **13.5 %** | 19.77 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link Mercusys ME80X AP/Extender/Rep... | 36.50 € | **37.50 €** | 5.5 % | **8.3 %** | 37.78 € | cena podľa najlacnejšieho iného predajcu |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 18.50 € | **19.50 €** | 7.6 % | **13.4 %** | 19.78 € | cena podľa najlacnejšieho iného predajcu |
| RGB LED lampa NEEWER RGB61 | 24.50 € | **25.50 €** | 15.4 % | **20.1 %** | 25.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight batériová kamera WiFi so solárnym panelom | 57.50 € | **58.50 €** | 32.4 % | **34.7 %** | 58.80 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 25 černý | 49.00 € | **50.00 €** | 5.1 % | **7.3 %** | 50.30 € | cena podľa najlacnejšieho iného predajcu |
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
| Budík digitální TechnoLine WT 745W | 28.50 € | **29.50 €** | 12.9 % | **16.8 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 25.50 € | **26.50 €** | 39.0 % | **44.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 30.50 € | **31.50 €** | 32.1 % | **36.4 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 20.50 € | **21.50 €** | 18.1 % | **23.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RO 3985 EA | 74.50 € | **75.50 €** | 10.1 % | **11.6 %** | 75.90 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER BASICS N12 Mini blesk | 24.50 € | **25.50 €** | 38.6 % | **44.3 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie procesora Darkflash E400 PLUS (biely) | 35.50 € | **36.50 €** | 38.4 % | **42.3 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 72.50 € | **73.50 €** | 11.4 % | **13.0 %** | 73.90 € | cena podľa najlacnejšieho iného predajcu |
| Avatto ZWSM16-DC32V-1 – 1-kanálový spínací modul Zig... | 12.50 € | **13.50 €** | 41.3 % | **52.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER ST49 popruh na stabilizátor pre DJI RS2/RSC2/RS | 48.50 € | **49.50 €** | 39.6 % | **42.5 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 232.00 € | **233.00 €** | 23.4 % | **23.9 %** | 233.50 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 32.00 € | **33.00 €** | 37.4 % | **41.7 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Puluz PU425 1,5 m USB-C / Type-C | 11.00 € | **12.00 €** | 18.6 % | **29.4 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.00 € | **38.00 €** | 11.0 % | **14.0 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 73.00 € | **74.00 €** | 39.4 % | **41.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Stojanový vozík Neewer SW-600, veľkosť M | 37.00 € | **38.00 €** | 37.9 % | **41.6 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 77.00 € | **77.90 €** | 36.9 % | **38.5 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Dvojzónový indukčný sporák IsEasy LI2V-22 | 98.00 € | **98.90 €** | 37.1 % | **38.4 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.00 € | **14.90 €** | 8.8 % | **15.8 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.00 € | **25.90 €** | 48.9 % | **54.3 %** | 25.93 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 260.90 € | **261.50 €** | 7.7 % | **8.0 %** | 261.59 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 496.90 € | **497.50 €** | 5.4 % | **5.5 %** | 497.70 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 45.90 € | **46.50 €** | 15.3 % | **16.8 %** | 46.63 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na polievanie kvetín v črepníkoch RainPoint ... | 26.90 € | **27.50 €** | 41.1 % | **44.2 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro PULUZ pre Insta360 X5 | 31.90 € | **32.50 €** | 18.5 % | **20.7 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-4 Slam Ball 23cm 4kg | 12.90 € | **13.50 €** | 41.9 % | **48.5 %** | 13.69 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN15Pro 5G FIXOP3-1646-BK | 11.90 € | **12.50 €** | 11.5 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.90 € | **11.50 €** | 22.4 % | **29.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Torras Ostand R Fusion Case for iPhone 16 Plus (Black) | 11.90 € | **12.50 €** | 35.7 % | **42.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1018900 Pákový kávovar | 122.90 € | **123.50 €** | 8.1 % | **8.6 %** | 123.60 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka akumulátorů olověných CARSPA ENC1209 12V/ 9A | 28.00 € | **28.50 €** | 4.0 % | **5.9 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 32.00 € | **32.50 €** | 5.4 % | **7.1 %** | 32.51 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 249.50 € | **250.00 €** | 73.9 % | **74.2 %** | 250.01 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 345.50 € | **346.00 €** | 28.2 % | **28.4 %** | 346.01 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 59.00 € | **59.50 €** | 7.5 % | **8.4 %** | 59.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.00 € | **14.50 €** | 49.0 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 181.50 € | **182.00 €** | 24.4 % | **24.7 %** | 182.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 11.50 € | **12.00 €** | 7.7 % | **12.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.00 € | **166.50 €** | 15.3 % | **15.7 %** | 166.53 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Blue | 93.00 € | **93.50 €** | 9.3 % | **9.9 %** | 93.54 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Pink | 93.00 € | **93.50 €** | 9.3 % | **9.9 %** | 93.54 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic JUNE-60 V2 | 70.00 € | **70.50 €** | 18.4 % | **19.2 %** | 70.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 16.50 € | **17.00 €** | 43.2 % | **47.5 %** | 17.05 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 13.50 € | **14.00 €** | 6.0 % | **10.0 %** | 14.06 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone E1 vocal echo/delay pedál | 178.50 € | **179.00 €** | 64.2 % | **64.7 %** | 179.06 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone H1 | 178.50 € | **179.00 €** | 28.3 % | **28.7 %** | 179.06 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone R1 | 178.50 € | **179.00 €** | 36.9 % | **37.2 %** | 179.06 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 237.50 € | **238.00 €** | 7.0 % | **7.2 %** | 238.07 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 121.00 € | **121.50 €** | 13.1 % | **13.5 %** | 121.58 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný modul pre DJI Osmo Mobile | 58.00 € | **58.50 €** | 18.9 % | **19.9 %** | 58.58 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.00 € | **22.50 €** | 9.2 % | **11.7 %** | 22.59 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO540FR | 63.00 € | **63.50 €** | 18.6 % | **19.6 %** | 63.59 € | cena podľa najlacnejšieho iného predajcu |
| Kruger & Matz KM1303 | 16.50 € | **17.00 €** | 9.2 % | **12.5 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.50 € | **63.00 €** | 16.8 % | **17.7 %** | 63.09 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 154.00 € | **154.50 €** | 23.2 % | **23.6 %** | 154.59 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE Pro 2 XR | 354.50 € | **355.00 €** | 23.5 % | **23.7 %** | 355.10 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 334.50 € | **335.00 €** | 22.5 % | **22.7 %** | 335.11 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.00 € | **114.50 €** | 17.2 % | **17.7 %** | 114.62 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone X1 megaphone and distorting voc... | 120.00 € | **120.50 €** | 32.7 % | **33.3 %** | 120.62 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 208.00 € | **208.50 €** | 34.3 % | **34.6 %** | 208.64 € | cena podľa najlacnejšieho iného predajcu |
| Fixed 2skla SG A17 4/5G FIXGFADA-1700-BK | 10.50 € | **11.00 €** | 6.8 % | **11.9 %** | 11.16 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 339.50 € | **340.00 €** | 6.7 % | **6.9 %** | 340.16 € | cena podľa najlacnejšieho iného predajcu |
| TC ELECTRONIC PLETHORA X1 TonePrint Loader so 14 leg... | 145.00 € | **145.50 €** | 11.9 % | **12.3 %** | 145.67 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto Stereo Looper | 145.00 € | **145.50 €** | 29.3 % | **29.7 %** | 145.67 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 77.00 € | **77.50 €** | 16.6 % | **17.3 %** | 77.69 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H85X(2-pack) WiFi ... | 100.50 € | **101.00 €** | 6.3 % | **6.8 %** | 101.19 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 181.00 € | **181.50 €** | 11.6 % | **11.9 %** | 181.69 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.00 € | **168.50 €** | 33.4 % | **33.8 %** | 168.69 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 362.00 € | **362.50 €** | 81.0 % | **81.3 %** | 362.70 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 153.50 € | **154.00 €** | 16.5 % | **16.9 %** | 154.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 15.00 € | **15.50 €** | 47.3 % | **52.2 %** | 15.72 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 294.50 € | **295.00 €** | 42.8 % | **43.1 %** | 295.22 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.00 € | **217.50 €** | 13.4 % | **13.7 %** | 217.72 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.00 € | **217.50 €** | 36.4 % | **36.7 %** | 217.72 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 374.50 € | **375.00 €** | 49.0 % | **49.2 %** | 375.22 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 265.50 € | **266.00 €** | 7.1 % | **7.3 %** | 266.23 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 376.00 € | **376.50 €** | 26.7 % | **26.9 %** | 376.74 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 376.00 € | **376.50 €** | 20.7 % | **20.8 %** | 376.74 € | cena podľa najlacnejšieho iného predajcu |
| Kontroler TP-Link OC200 Controller, Omada SDN | 123.50 € | **124.00 €** | 5.1 % | **5.5 %** | 124.25 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 195.00 € | **195.50 €** | 7.3 % | **7.6 %** | 195.75 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 17.50 € | **18.00 €** | 5.4 % | **8.4 %** | 18.25 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **20.50 €** | 15.8 % | **18.7 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.00 € | **181.50 €** | 25.3 % | **25.7 %** | 181.79 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 314.50 € | **315.00 €** | 5.3 % | **5.5 %** | 315.30 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife pre DJI Osmo Action 5 PRO/4/3 Adven... | 19.00 € | **19.50 €** | 37.7 % | **41.3 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 466.00 € | **466.50 €** | 17.3 % | **17.4 %** | 466.85 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (červený) | 251.50 € | **252.00 €** | 5.2 % | **5.4 %** | 252.36 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (čierny a... | 251.50 € | **252.00 €** | 5.2 % | **5.4 %** | 252.36 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 24.50 € | **25.00 €** | 11.3 % | **13.5 %** | 25.37 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA B15 (čierne) | 26.50 € | **27.00 €** | 40.4 % | **43.1 %** | 27.37 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 144.00 € | **144.50 €** | 7.3 % | **7.7 %** | 144.89 € | cena podľa najlacnejšieho iného predajcu |
| Sada 16 barevných kovových autíček 26319 | 13.50 € | **14.00 €** | 30.4 % | **35.2 %** | 14.39 € | cena podľa najlacnejšieho iného predajcu |
| Čítacia lampa Yeelight Led Neck Book Light | 13.00 € | **13.50 €** | 30.8 % | **35.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.00 € | **10.50 €** | 19.4 % | **25.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **12.50 €** | 18.5 % | **23.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 43.00 € | **43.50 €** | 38.6 % | **40.2 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.00 € | **21.50 €** | 15.4 % | **18.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 34.00 € | **34.50 €** | 42.1 % | **44.2 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Kábel USB-A do Lightning MFI 0,35 m PGYTECH (P-GM-115) | 15.00 € | **15.50 €** | 34.0 % | **38.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 21.00 € | **21.50 €** | 36.3 % | **39.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Black | 27.50 € | **28.00 €** | 6.5 % | **8.4 %** | 28.41 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Pink | 27.50 € | **28.00 €** | 6.5 % | **8.4 %** | 28.41 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Autonabíječka 65W FIXCC65-CC-BK | 15.50 € | **16.00 €** | 8.3 % | **11.8 %** | 16.47 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 11.50 € | **12.00 €** | 7.7 % | **12.4 %** | 12.48 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP White | 27.50 € | **28.00 €** | 6.2 % | **8.1 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada stavebních vozidel s příslušenstvím 26578 | 23.50 € | **24.00 €** | 16.6 % | **19.1 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter FNIRSI DMC-100 | 33.50 € | **34.00 €** | 5.3 % | **6.9 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná domácnosť WS2GW-R WiFi | 11.50 € | **12.00 €** | 32.8 % | **38.6 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná poistka ZigBee Avatto ZWCB16 | 20.50 € | **21.00 €** | 38.1 % | **41.5 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 19.50 € | **20.00 €** | 35.8 % | **39.3 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iP17PM FIXGFADA-1603-BK | 10.50 € | **11.00 €** | 6.8 % | **11.9 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Tvrzené sklo FIXED Full-Cover s aplikáto | 10.50 € | **11.00 €** | 6.8 % | **11.9 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 93.50 € | **93.90 €** | 17.2 % | **17.7 %** | 93.97 € | cena podľa najlacnejšieho iného predajcu |
| Chladnička na nápoje Euhomy BR001 | 233.50 € | **233.90 €** | 27.9 % | **28.1 %** | 233.98 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 81.50 € | **81.90 €** | 25.0 % | **25.6 %** | 81.99 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.50 € | **130.90 €** | 25777.5 % | **25856.8 %** | 130.99 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 76.50 € | **76.90 €** | 16.6 % | **17.3 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.50 € | **216.90 €** | 17.1 % | **17.3 %** | 217.00 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-WW, 10 m,... | 6.80 € | **7.20 €** | 36.5 % | **44.5 %** | 7.22 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.50 € | **14.90 €** | 11.2 % | **14.3 %** | 14.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 11.50 € | **11.90 €** | 35.1 % | **39.8 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V200 | 32.50 € | **32.90 €** | 16.8 % | **18.2 %** | 32.93 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix venkovní kamera 4v1 s ... | 56.50 € | **56.90 €** | 16.1 % | **16.9 %** | 56.98 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 54.50 € | **54.90 €** | 66.0 % | **67.2 %** | 54.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.50 € | **51.90 €** | 5.2 % | **6.0 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 262.50 € | **262.90 €** | 22.8 % | **22.9 %** | 262.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.10 € | **7.30 €** | 41.5 % | **45.5 %** | 7.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 1.80 € | **2.00 €** | 34.3 % | **49.2 %** | 2.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 5 powered studio monitor | 257.90 € | **258.00 €** | 48.3 % | **48.4 %** | 258.36 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx QX1222USB mixpult s USB a efektmi | 282.90 € | **283.00 €** | 54.9 % | **55.0 %** | 283.40 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri Carbon 2 | 371.90 € | **372.00 €** | 7.4 % | **7.4 %** | 372.43 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 307.90 € | **308.00 €** | 36.7 % | **36.8 %** | 308.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.00 €** | 5.5 % | **5.8 %** | 44.01 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 45.90 € | **46.00 €** | 18.8 % | **19.1 %** | 46.04 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC410 KIT 3MPx, vonkajšia, I... | 59.90 € | **60.00 €** | 6.1 % | **6.3 %** | 60.05 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 63.90 € | **64.00 €** | 20.0 % | **20.2 %** | 64.08 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 28.90 € | **29.00 €** | 19.2 % | **19.6 %** | 29.09 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 28.90 € | **29.00 €** | 19.2 % | **19.6 %** | 29.09 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2022E1 | 34.90 € | **35.00 €** | 6.6 % | **6.9 %** | 35.13 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI1040GR | 25.90 € | **26.00 €** | 10.1 % | **10.5 %** | 26.13 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V35 s Dynamický mikrofon | 58.90 € | **59.00 €** | 38.2 % | **38.5 %** | 59.17 € | cena podľa najlacnejšieho iného predajcu |
| Fleg Helikoptéra na dálkové ovládání | 23.90 € | **24.00 €** | 11.9 % | **12.3 %** | 24.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **17.00 €** | 34.2 % | **35.0 %** | 17.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.41 € | cena podľa najlacnejšieho iného predajcu |
| Filter xTool SafetyPro™ AP2 so strednou účinnosťou | 36.90 € | **37.00 €** | 39.5 % | **39.9 %** | 37.42 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0027 | 17.90 € | **18.00 €** | 6.7 % | **7.3 %** | 18.45 € | cena podľa najlacnejšieho iného predajcu |
| Metal Protective Cage With Lens Cover PULUZ for Inst... | 26.90 € | **27.00 €** | 31.2 % | **31.7 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 3.80 € | **3.90 €** | 41.7 % | **45.4 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 9.40 € | **9.50 €** | 98.0 % | **100.1 %** | 9.51 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (sivý) | 11.90 € | **12.00 €** | 14.8 % | **15.7 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender PLA+ (zelený) | 11.90 € | **12.00 €** | 14.8 % | **15.7 %** | 12.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **11.00 €** | 31.1 % | **32.3 %** | 11.45 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603-Outdoor vonkajší AP, AX18... | 121.90 € | **122.00 €** | 6.0 % | **6.1 %** | 122.03 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 72.90 € | **73.00 €** | 20.4 % | **20.6 %** | 73.03 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link HX520(1-pack) WiFi6, AX3000, 3x ... | 76.90 € | **77.00 €** | 5.3 % | **5.4 %** | 77.05 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 119.90 € | **120.00 €** | 13.4 % | **13.5 %** | 120.07 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.90 € | **160.00 €** | 6.7 % | **6.8 %** | 160.10 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 169.90 € | **170.00 €** | 18.2 % | **18.3 %** | 170.13 € | cena podľa najlacnejšieho iného predajcu |
| Behringer U-PHORIA STUDIO PRO recording/podcast boundle | 132.90 € | **133.00 €** | 10.0 % | **10.0 %** | 133.14 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto+ Looper multi-session looper pedal | 157.90 € | **158.00 €** | 13.5 % | **13.6 %** | 158.19 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 207.90 € | **208.00 €** | 50.4 % | **50.4 %** | 208.27 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (392)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| WiFi router TP-Link Deco X50-PoE(1-pack) WiFi 6, 1x ... | 215.90 € | **121.50 €** | 87.3 % | **5.4 %** | 118.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1048 48x GLan. 19"rack | 397.50 € | **315.50 €** | 32.4 % | **5.1 %** | 276.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2210XMP-M2 8x GLan/PoE+, 2x 10G SFP... | 373.00 € | **294.90 €** | 33.0 % | **5.1 %** | 288.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SX105 5x 10GLan, kov | 367.00 € | **291.50 €** | 32.4 % | **5.1 %** | 243.16 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2428LP 16x GLan/PoE+, 8x GLAN, 4x S... | 354.90 € | **282.90 €** | 31.9 % | **5.1 %** | 269.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link IES210GPP priemyselný, 2x SFP combo, ... | 325.00 € | **254.50 €** | 34.2 % | **5.1 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG3428X 24x GLan, 4x SFP+, Omáda SDN | 341.00 € | **271.90 €** | 31.7 % | **5.0 %** | 190.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 399.00 € | **330.00 €** | 40.7 % | **16.4 %** | 330.25 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 515.90 € | **448.00 €** | 31.3 % | **14.0 %** | 448.04 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1428PE Smart, 26x GLan, 24x PoE+... | 337.50 € | **269.90 €** | 31.4 % | **5.1 %** | 242.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 248.00 € | **188.00 €** | 53.1 % | **16.0 %** | 188.46 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1218MP 18x GLan, 16x PoE+, 2x SF... | 279.00 € | **221.50 €** | 32.3 % | **5.1 %** | 186.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 252.50 € | **196.50 €** | 62107.4 % | **48310.9 %** | 196.58 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link SG3428 JetStream L2 mananaged, 24x GL... | 262.50 € | **207.90 €** | 32.8 % | **5.2 %** | 190.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES220GMP 2x GLan, 16x GLan s PoE+, 2x... | 253.90 € | **200.90 €** | 32.8 % | **5.0 %** | 192.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Mercusys Halo H25BE(3-pack) WiFi... | 229.50 € | **182.50 €** | 32.4 % | **5.3 %** | 154.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje NRKI517E41 | 503.00 € | **460.00 €** | 20.6 % | **10.3 %** | 460.42 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SL1218P Smart, 16x Lan sPoE+, 2x G... | 211.00 € | **168.50 €** | 31.7 % | **5.2 %** | 135.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 501.50 € | **460.50 €** | 22.6 % | **12.6 %** | 460.79 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS128GP 2x GLAN, 24x GLAN s ... | 195.00 € | **154.90 €** | 32.3 % | **5.1 %** | 154.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux EW7TN3372C | 529.50 € | **491.50 €** | 15.2 % | **7.0 %** | 491.80 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1016PE 16x GLAN, 8x PoE | 182.50 € | **144.90 €** | 32.3 % | **5.0 %** | 132.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 675.50 € | **638.00 €** | 15.0 % | **8.6 %** | 638.24 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link VIGI C540-W(4mm) 4MPx, vonkajšia, IP ... | 144.90 € | **107.50 €** | 41.6 % | **5.0 %** | 83.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TCL 75P7K QLED 4K SMART Google TV | 812.90 € | **775.90 €** | 10.0 % | **5.0 %** | 689.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje WG894A25 | 503.00 € | **467.50 €** | 20.0 % | **11.6 %** | 467.55 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG116P 16x GLAN s POE+, 120W, kov | 162.50 € | **128.90 €** | 32.5 % | **5.1 %** | 57.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1048 switch 48x Lan, 19" rackmount | 155.50 € | **123.50 €** | 32.3 % | **5.1 %** | 105.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link Mercusys MS120GP 4x GLAN, 16x GLAN s ... | 153.50 € | **121.90 €** | 32.3 % | **5.1 %** | 121.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2206MP 5x GLan/PoE+, 1x SFP, 63W, O... | 136.00 € | **105.00 €** | 36.1 % | **5.0 %** | 104.03 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 155.50 € | **124.50 €** | 46.1 % | **16.9 %** | 124.79 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES210GMP 1x SFP combo, 8x GLan s Poe+... | 146.00 € | **115.50 €** | 33.1 % | **5.3 %** | 110.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 116.90 € | **88.00 €** | 43.2 % | **7.8 %** | 88.40 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 116.90 € | **88.00 €** | 43.2 % | **7.8 %** | 88.40 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 317.50 € | **288.90 €** | 15.7 % | **5.3 %** | 288.92 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1008MP 8x GLAN s POE+ | 138.00 € | **110.00 €** | 31.8 % | **5.0 %** | 93.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Creality K2 Pro Combo | 748.90 € | **720.90 €** | 9.1 % | **5.0 %** | 718.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2005P-PD Smart, 4x GLan s PoE, 1x G... | 130.50 € | **103.50 €** | 32.9 % | **5.4 %** | 96.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1210MP 8x GLAN/PoE+, 1x GLAN, 1x... | 130.00 € | **103.50 €** | 32.1 % | **5.2 %** | 95.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES210GP 1x GLan, 8x GLan s PoE+, 1x S... | 127.00 € | **100.50 €** | 32.8 % | **5.1 %** | 94.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rýchloupínacia doštička 3 Legged Thing 85mm pre ELLI... | 58.90 € | **33.90 €** | 84.2 % | **6.0 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EB210 WiFi 7 AP BE3600,1x GWan, ... | 92.50 € | **68.00 €** | 46.2 % | **7.5 %** | 68.29 € | cena podľa najlacnejšieho iného predajcu |
| Fén TESLA MyCare Multistyler AF05 | 116.90 € | **92.50 €** | 33.4 % | **5.6 %** | 91.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link PG1200 KIT G.hn adaptér (... | 118.00 € | **93.90 €** | 32.6 % | **5.5 %** | 93.95 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SL1311MP 8x LAN/PoE+, 2x GLAN, 1x ... | 115.00 € | **91.50 €** | 32.4 % | **5.4 %** | 76.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2008 smart, 8x GLAN, Omáda SDN | 111.50 € | **88.50 €** | 32.5 % | **5.2 %** | 84.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES216G 16x GLan, Omáda SDN | 101.90 € | **80.50 €** | 33.2 % | **5.2 %** | 80.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link VIGI C250(4mm) 5MPx, vonkajšie, IP Do... | 98.50 € | **78.50 €** | 32.0 % | **5.2 %** | 64.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router GL.iNet Puli AX 5G NR | 656.90 € | **636.90 €** | 48.4 % | **43.9 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| Statív tripod 3 Legged Thing PUNKS Travis 2.0, čierny | 234.90 € | **214.90 €** | 25.1 % | **14.4 %** | 215.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG116E smart 16x GLAN | 95.00 € | **75.50 €** | 32.8 % | **5.5 %** | 67.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS1024G 24x GLAN | 94.90 € | **75.50 €** | 32.7 % | **5.5 %** | 71.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX TT685II TTL pre Nikon | 148.00 € | **128.90 €** | 24.2 % | **8.2 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Fujifilm | 148.00 € | **128.90 €** | 24.2 % | **8.2 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link VIGI C350(2.8mm) 5MPx, vonkajšia, IP ... | 84.50 € | **67.00 €** | 32.5 % | **5.1 %** | 66.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C350(4mm) 5MPx, vonkajšie, IP Bu... | 84.50 € | **67.00 €** | 32.5 % | **5.1 %** | 66.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TBE553E BE9300 WiFi 7, ... | 91.50 € | **74.00 €** | 32.2 % | **7.0 %** | 74.20 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 221.90 € | **204.90 €** | 28.2 % | **18.4 %** | 205.00 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RFSA240M43WN | 365.50 € | **348.90 €** | 30.7 % | **24.8 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Alarm TP-Link Tapo T30 KIT Smart sensor starter kit | 81.00 € | **64.50 €** | 32.4 % | **5.4 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TBE400E BE5760 WiFi 7, ... | 77.00 € | **60.90 €** | 33.4 % | **5.5 %** | 52.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS1016G 16x GLAN | 71.50 € | **56.50 €** | 33.3 % | **5.3 %** | 52.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TCL 43T69C QLED 4K SMART Google TV | 328.50 € | **313.50 €** | 10.1 % | **5.1 %** | 310.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Booster UltraCap CSC 12/800 12 V, 800 A | 303.50 € | **288.90 €** | 16.9 % | **11.3 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 166.50 € | **151.90 €** | 15.7 % | **5.5 %** | 152.00 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.50 € | **151.90 €** | 15.7 % | **5.5 %** | 152.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1024 switch 24x Lan, 19"rack | 71.00 € | **56.50 €** | 32.3 % | **5.3 %** | 39.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GameSir X5 Lite BK – mobilný herný ovládač USB-C, či... | 39.00 € | **24.50 €** | 76.4 % | **10.8 %** | 24.75 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA510E 10G PCIe, Full... | 69.50 € | **55.00 €** | 32.8 % | **5.1 %** | 55.34 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link LS1210GP 1x GLAN, 8x GLAN s PoE+, 1x ... | 67.50 € | **53.90 €** | 32.1 % | **5.5 %** | 53.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TXE73E AXE 5400, WiFi 6... | 62.90 € | **49.90 €** | 32.6 % | **5.2 %** | 49.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SL1311P 8x LAN/PoE+, 2x GLAN, 1x S... | 62.50 € | **49.90 €** | 32.1 % | **5.5 %** | 37.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 89.50 € | **77.00 €** | 38.7 % | **19.3 %** | 77.08 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1008P 8x GLAN, 4xPOE, 56W, kov | 62.00 € | **49.90 €** | 31.1 % | **5.5 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1016 16x LAN, 19"rack | 59.00 € | **47.00 €** | 31.9 % | **5.1 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TechniSat DIGITRADIO 372 CD BT černé | 166.90 € | **154.90 €** | 15.7 % | **7.4 %** | 154.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 166.90 € | **154.90 €** | 15.7 % | **7.4 %** | 154.99 € | cena podľa najlacnejšieho iného predajcu |
| ETA Sole 1625 90000 | 104.50 € | **92.50 €** | 31.8 % | **16.7 %** | 92.90 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110GMP 2x GLAN, 8x GLAN s ... | 64.50 € | **52.90 €** | 32.7 % | **8.8 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA49BE PCIe, WiFi 7, ... | 58.00 € | **46.50 €** | 31.5 % | **5.4 %** | 46.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **341.00 €** | 15.1 % | **11.3 %** | 341.35 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1008P 8x LAN, 4xPoE, 57W, kov | 54.00 € | **43.00 €** | 32.2 % | **5.2 %** | 35.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Mercusys MA47BE WiFi 7, PCIe, ... | 53.90 € | **42.90 €** | 32.1 % | **5.1 %** | 41.44 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Podvodné púzdro DiCAPac WP-S5 pro fotoaparáty středn... | 90.00 € | **79.00 €** | 25.2 % | **9.9 %** | 79.42 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica TP-Link UH9120C USB-C, HDMI, RJ45,... | 52.50 € | **41.90 €** | 32.0 % | **5.4 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Archer TXE70UH AXE5400, 2,4/5/6GH... | 52.50 € | **41.90 €** | 32.4 % | **5.7 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1008LP 8x LAN, 4xPoE+, 41W, dosa... | 50.90 € | **40.50 €** | 32.8 % | **5.6 %** | 26.53 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1008 8x GLan, 19"rack | 47.50 € | **37.90 €** | 32.7 % | **5.9 %** | 35.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER DCP-T535DW | 205.50 € | **196.00 €** | 10.1 % | **5.0 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 45.90 € | **36.50 €** | 32.6 % | **5.4 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1005P 5x LAN, 4xPoE, 58W, kov | 44.00 € | **34.90 €** | 32.5 % | **5.1 %** | 29.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odpadkový kôš Curver Chic Bin L Black | 36.50 € | **27.50 €** | 40.0 % | **5.5 %** | 24.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 370.50 € | **361.50 €** | 35.9 % | **32.6 %** | 361.62 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 61.50 € | **52.50 €** | 25.4 % | **7.1 %** | 52.63 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES208G 8x GLan, Omáda SDN | 42.50 € | **33.90 €** | 32.4 % | **5.6 %** | 32.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 1226 | 188.50 € | **180.00 €** | 10.0 % | **5.1 %** | 177.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 103RB | 214.00 € | **205.50 €** | 10.5 % | **6.1 %** | 205.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 41.50 € | **33.00 €** | 61.3 % | **28.2 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8405A | 182.90 € | **174.50 €** | 10.1 % | **5.0 %** | 165.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER DCP-L2622DW | 181.90 € | **173.50 €** | 10.1 % | **5.0 %** | 165.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 89.90 € | **81.50 €** | 17.2 % | **6.3 %** | 81.70 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica TP-Link UH6120C USB-C, HDMI, RJ45,... | 42.00 € | **33.90 €** | 30.9 % | **5.7 %** | 32.73 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dokovacia stanica TP-Link UH7020C USB-C, HDMI, 1x US... | 41.00 € | **32.90 €** | 31.8 % | **5.7 %** | 31.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS109P 1x LAN, 8x LAN s PoE+, 63W | 38.90 € | **30.90 €** | 32.2 % | **5.0 %** | 22.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 8571 | 179.90 € | **171.90 €** | 10.1 % | **5.2 %** | 164.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1006P 6x LAN, 4x PoE+, 67W, kov | 48.50 € | **40.50 €** | 26.5 % | **5.6 %** | 33.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1005LP 5x GLAN, 4xPoE+, 41W, dos... | 40.50 € | **32.50 €** | 32.0 % | **5.9 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link Mercusys MS110CMP 2x GLAN, 8x LAN s P... | 46.00 € | **38.00 €** | 32.1 % | **9.1 %** | 38.42 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin L Steel | 36.50 € | **29.00 €** | 41.4 % | **12.3 %** | 29.20 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **159.00 €** | 11.1 % | **6.1 %** | 159.29 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-775S2 Päťzónový (štvorcový) sklenený ply... | 181.00 € | **173.90 €** | 44.3 % | **38.6 %** | 174.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1016D 16x LAN, desktop | 32.50 € | **25.50 €** | 33.9 % | **5.0 %** | 23.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER DCP-L1630W | 156.90 € | **149.90 €** | 10.1 % | **5.1 %** | 148.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES205G 5x GLan, Omáda SDN | 33.90 € | **26.90 €** | 33.0 % | **5.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dokovacia stanica TP-Link UH7021C USB-C, HDMI, 1x US... | 37.00 € | **30.00 €** | 31.9 % | **6.9 %** | 30.05 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO hluboká pánev 24 cm | 34.90 € | **27.90 €** | 31.5 % | **5.1 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu |
| Prevodovka PXN - usporiadanie H 7+1 | 82.00 € | **75.00 €** | 22.9 % | **12.4 %** | 75.38 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na úpravu vlasov ANLAN Miracle | 69.50 € | **63.00 €** | 35.5 % | **22.9 %** | 63.04 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica TP-Link UH5020C USB-C, HDMI, 1x US... | 33.00 € | **26.50 €** | 32.6 % | **6.5 %** | 26.65 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110CP 2x GLAN, 8x LAN s Po... | 34.00 € | **27.50 €** | 31.7 % | **6.5 %** | 27.69 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 320.00 € | **313.50 €** | 19.8 % | **17.4 %** | 313.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 323.50 € | **317.00 €** | 8.1 % | **5.9 %** | 317.46 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA86XE AXE 5400, WiFi... | 32.90 € | **26.50 €** | 32.1 % | **6.4 %** | 25.74 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG108 8x GLan, kov | 31.00 € | **24.90 €** | 30.9 % | **5.1 %** | 24.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Mercusys MA86XH Wireless USB adap... | 30.00 € | **23.90 €** | 32.2 % | **5.3 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rowenta RH6A35WO | 134.50 € | **128.50 €** | 10.2 % | **5.3 %** | 107.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS106LP 2x LAN, 4x LAN s PoE, 41W | 30.50 € | **24.50 €** | 32.7 % | **6.6 %** | 22.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko BDFS26120XQ | 324.50 € | **318.50 €** | 10.0 % | **8.0 %** | 318.80 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 63.00 € | **57.00 €** | 21.3 % | **9.8 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 104.50 € | **98.50 €** | 21.8 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| USB klient TP-Link Archer T4U AC 1300 Dual Band Wire... | 28.50 € | **22.90 €** | 32.8 % | **6.7 %** | 22.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO CTB 6250 B | 114.50 € | **108.90 €** | 10.5 % | **5.1 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 91.50 € | **86.00 €** | 34.9 % | **26.8 %** | 86.02 € | cena podľa najlacnejšieho iného predajcu |
| Tefal QT2028F0 | 341.00 € | **335.50 €** | 6.8 % | **5.1 %** | 335.57 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 20.90 € | **15.50 €** | 49.4 % | **10.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM03 RGB (čierna) | 26.00 € | **20.90 €** | 58.1 % | **27.1 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RY6555WH | 104.90 € | **99.90 €** | 10.3 % | **5.0 %** | 87.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS105LP 1x LAN, 4x LAN s PoE, 41W | 25.50 € | **20.50 €** | 32.9 % | **6.8 %** | 20.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 39.90 € | **34.90 €** | 23.0 % | **7.6 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 39.90 € | **34.90 €** | 35.8 % | **18.8 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 153.90 € | **148.90 €** | 20.8 % | **16.9 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 619.00 € | **614.00 €** | 26.7 % | **25.7 %** | 614.43 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 54.00 € | **49.00 €** | 45.6 % | **32.1 %** | 49.46 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-BL modrý, ... | 292.50 € | **287.90 €** | 37.9 % | **35.7 %** | 287.98 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook 11T LTE Pro | 106.50 € | **101.90 €** | 10.0 % | **5.3 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ultimea Skywave X60 Soundbar | 474.00 € | **469.50 €** | 7.8 % | **6.7 %** | 469.73 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Mango s podporou Wi-Fi 4 | 35.00 € | **30.50 €** | 22.6 % | **6.8 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Blade A35e zelený | 98.90 € | **94.50 €** | 10.1 % | **5.2 %** | 83.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 109A | 155.50 € | **151.50 €** | 8.8 % | **6.0 %** | 151.61 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 135.50 € | **131.50 €** | 19.9 % | **16.3 %** | 131.71 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin M Steel | 27.90 € | **24.00 €** | 27.8 % | **9.9 %** | 24.40 € | cena podľa najlacnejšieho iného predajcu |
| Tesla AeroStar T700 | 81.50 € | **77.90 €** | 10.3 % | **5.4 %** | 59.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 104.00 € | **100.50 €** | 9.0 % | **5.3 %** | 89.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal FF203130 | 67.50 € | **64.00 €** | 10.8 % | **5.0 %** | 52.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 83.00 € | **79.50 €** | 21.6 % | **16.5 %** | 79.56 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 212.00 € | **208.50 €** | 7.7 % | **6.0 %** | 208.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **12.50 €** | 38.4 % | **8.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM07 RGB (čierna) | 28.50 € | **25.00 €** | 42.3 % | **24.8 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio NP-FV100 vrátane info chipu pre Sony | 32.00 € | **28.90 €** | 26.9 % | **14.6 %** | 28.96 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 25.00 € | **21.90 €** | 94.5 % | **70.4 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné závesné svetlo Yeelight Crystal | 93.00 € | **89.90 €** | 25.6 % | **21.4 %** | 89.92 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 1342/04 | 71.90 € | **68.90 €** | 10.2 % | **5.6 %** | 61.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Carrera R/C auto Desert Buggy (1:24) | 33.00 € | **30.00 €** | 17.6 % | **6.9 %** | 30.23 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M + 3 ventilátory (... | 48.00 € | **45.00 €** | 46.4 % | **37.3 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| TESLA AeroStar T300 | 57.50 € | **54.90 €** | 10.3 % | **5.3 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| KMP H168CX (HP 302 Tri-colour XL) | 26.50 € | **23.90 €** | 83.7 % | **65.7 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Homatics DONGLE R 4K Android TV - UHD multimediální ... | 83.50 € | **80.90 €** | 8.4 % | **5.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 44.50 € | **42.00 €** | 17.0 % | **10.4 %** | 42.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **18.50 €** | 37.4 % | **21.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 38.00 € | **35.50 €** | 21.7 % | **13.7 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 22.50 € | **20.00 €** | 49.6 % | **33.0 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 30 V2 /bílé/ 0010/3955 | 66.90 € | **64.50 €** | 14.6 % | **10.5 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.90 € | **12.50 €** | 37.3 % | **15.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 11.50 € | **9.30 €** | 36.1 % | **10.1 %** | 9.37 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 25.00 € | **22.90 €** | 14.8 % | **5.2 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal INGENIO Expertise sada 12 ks | 172.90 € | **170.90 €** | 6.4 % | **5.2 %** | 151.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herná myš ONIKUMA DM05 RGB (čierna) | 17.50 € | **15.50 €** | 43.3 % | **26.9 %** | 15.54 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61641 SkokánekGO/GO+/D143 | 18.50 € | **16.50 €** | 46.7 % | **30.9 %** | 16.74 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 22.00 € | **20.00 €** | 18.1 % | **7.3 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT65421VC | 128.00 € | **126.00 €** | 10.0 % | **8.3 %** | 126.30 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš KIS Chic Bin M Black | 26.00 € | **24.00 €** | 17.8 % | **8.7 %** | 24.40 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 205.50 € | **203.50 €** | 14.9 % | **13.8 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat VIOLA 2 bílo-černé | 37.50 € | **35.50 €** | 15.1 % | **9.0 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 25.00 € | **23.00 €** | 54.1 % | **41.8 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal N1230510 | 14.90 € | **13.00 €** | 28.6 % | **12.2 %** | 13.38 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BL2C0130 | 37.50 € | **35.90 €** | 10.9 % | **6.1 %** | 28.68 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Diaľkový ovládač goSAT GS7055HDi | 16.50 € | **14.90 €** | 16.3 % | **5.1 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 17.50 € | **16.00 €** | 25.0 % | **14.3 %** | 16.19 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 51.50 € | **50.00 €** | 65.4 % | **60.6 %** | 50.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 34.00 € | **32.50 €** | 41.6 % | **35.4 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 12.00 € | **10.50 €** | 21.0 % | **5.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 42.00 € | **40.50 €** | 21.1 % | **16.8 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.20 € | **6.80 €** | 43.4 % | **18.9 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 340 | 36.90 € | **35.50 €** | 10.7 % | **6.5 %** | 27.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Carrera autodráha GO Škoda Rally | 61.00 € | **59.90 €** | 14.4 % | **12.3 %** | 59.91 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Edifier X5 Pro V25 TWS (čierne) - nové 2025 | 35.00 € | **33.90 €** | 23.1 % | **19.3 %** | 33.99 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 101.00 € | **99.90 €** | 7.0 % | **5.8 %** | 99.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR černé | 196.00 € | **194.90 €** | 17.4 % | **16.8 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 196.00 € | **194.90 €** | 17.4 % | **16.8 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006001 | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hlavná kefa MOVA pre model Z50 Ultra | 13.50 € | **12.50 €** | 14.8 % | **6.3 %** | 12.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Russell Hobbs 24992-70 | 40.50 € | **39.50 €** | 10.4 % | **7.7 %** | 39.59 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 214.90 € | **213.90 €** | 38725.7 % | **38545.0 %** | 214.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 649.90 € | **648.90 €** | 117316.4 % | **117135.8 %** | 649.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.50 € | **61.50 €** | 8.8 % | **7.1 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu |
| Selfie svetlo Telesin s magnetickým držiakom telefónu | 19.50 € | **18.50 €** | 29.5 % | **22.9 %** | 18.70 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 142.50 € | **141.50 €** | 8.1 % | **7.3 %** | 141.71 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 294.00 € | **293.00 €** | 12.5 % | **12.1 %** | 293.21 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 294.00 € | **293.00 €** | 8.1 % | **7.7 %** | 293.21 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 325.50 € | **324.50 €** | 78.5 % | **77.9 %** | 324.72 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.00 € | **70.00 €** | 13.1 % | **11.5 %** | 70.36 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA G69 (ružová) (QWERTY) | 34.50 € | **33.50 €** | 15.2 % | **11.9 %** | 33.87 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC čierne | 134.50 € | **133.50 €** | 29.7 % | **28.8 %** | 133.88 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.50 € | **207.50 €** | 16.6 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPhone 13 FIXBLM-723-BP | 20.50 € | **19.50 €** | 32.8 % | **26.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0026 | 19.00 € | **18.00 €** | 13.2 % | **7.3 %** | 18.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.00 € | **35.00 €** | 37.9 % | **34.1 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.00 €** | 12.5 % | **5.7 %** | 12.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 306.90 € | **306.00 €** | 46.3 % | **45.9 %** | 306.27 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 400.50 € | **399.90 €** | 6.9 % | **6.7 %** | 400.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 404.50 € | **403.90 €** | 7.2 % | **7.1 %** | 404.00 € | cena podľa najlacnejšieho iného predajcu |
| Marvo HG8928 sluchátka s mikrofonem | 12.50 € | **11.90 €** | 10.7 % | **5.4 %** | 11.98 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3067-PK se závažím a počí... | 16.50 € | **15.90 €** | 18.8 % | **14.5 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C560WS 8MPx, vonkajšia, IP PTZ, ... | 81.50 € | **80.90 €** | 6.3 % | **5.5 %** | 70.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 69.50 € | **69.00 €** | 5.9 % | **5.1 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Korková podložka na jógu HMS YM11 | 30.00 € | **29.50 €** | 8.4 % | **6.6 %** | 26.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco PX10(3-pack) AX1500 + AV100... | 249.50 € | **249.00 €** | 5.2 % | **5.0 %** | 246.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LEIFHEIT Návlek na mop Twist XL SOE52016 | 11.00 € | **10.50 €** | 10.4 % | **5.4 %** | 8.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 34.50 € | **34.00 €** | 35.6 % | **33.7 %** | 34.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 42.00 € | **41.50 €** | 21.4 % | **20.0 %** | 41.55 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 115.50 € | **115.00 €** | 7.8 % | **7.3 %** | 115.09 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 106.00 € | **105.50 €** | 39.0 % | **38.3 %** | 105.68 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 42.50 € | **42.00 €** | 12.2 % | **10.9 %** | 42.21 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 388.00 € | **387.50 €** | 8.7 % | **8.6 %** | 387.75 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony PGYTECH 55 cm (P-GM-101) | 15.00 € | **14.50 €** | 34.9 % | **30.4 %** | 14.78 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 30.50 € | **30.00 €** | 28.2 % | **26.1 %** | 30.29 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 50.00 € | **49.50 €** | 7.0 % | **6.0 %** | 49.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 59.50 € | **59.00 €** | 8.2 % | **7.3 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 23.00 € | **22.50 €** | 13.5 % | **11.1 %** | 22.79 € | cena podľa najlacnejšieho iného predajcu |
| Barkan S320. B - natáčecí stojan pro TV (29-58'' 25k... | 59.50 € | **59.00 €** | 17.9 % | **16.9 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 80.00 € | **79.50 €** | 13.2 % | **12.5 %** | 79.79 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongVision Mini, fotopast | 41.50 € | **41.00 €** | 7.4 % | **6.1 %** | 41.29 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.00 € | **64.50 €** | 15.1 % | **14.2 %** | 64.79 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 76.00 € | **75.50 €** | 16.6 % | **15.8 %** | 75.79 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine MA10410 | 75.00 € | **74.50 €** | 6.8 % | **6.0 %** | 74.79 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 56.50 € | **56.00 €** | 13.6 % | **12.6 %** | 56.29 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 84.50 € | **84.00 €** | 14.6 % | **13.9 %** | 84.29 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač Evercon AH-707 | 52.50 € | **52.00 €** | 15.6 % | **14.5 %** | 52.29 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.00 € | **24.50 €** | 9.9 % | **7.7 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Carrera EVO 27876 Porsche 911 GT3 R | 41.50 € | **41.00 €** | 13.7 % | **12.3 %** | 41.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64033 Mario Kart - Mario | 15.50 € | **15.00 €** | 10.7 % | **7.2 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64245 Porsche 992 GT3 No.14 | 15.50 € | **15.00 €** | 10.7 % | **7.2 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.00 € | **10.50 €** | 21.0 % | **15.5 %** | 10.79 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW402HE0 | 129.50 € | **129.00 €** | 10.2 % | **9.7 %** | 129.32 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110P 2x LAN s PoE, 8x LAN ... | 28.00 € | **27.50 €** | 8.3 % | **6.4 %** | 27.85 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 1,5 m ... | 29.00 € | **28.50 €** | 39.9 % | **37.5 %** | 28.85 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 24.50 € | **24.00 €** | 24.2 % | **21.6 %** | 24.38 € | cena podľa najlacnejšieho iného predajcu |
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
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 64.00 € | **63.50 €** | 17.9 % | **17.0 %** | 63.89 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 74.00 € | **73.50 €** | 8.5 % | **7.8 %** | 73.89 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 46.50 € | **46.00 €** | 9.0 % | **7.8 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 46.50 € | **46.00 €** | 9.0 % | **7.8 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.50 € | **87.00 €** | 22.4 % | **21.7 %** | 87.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 53.00 € | **52.50 €** | 10.5 % | **9.4 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 285.00 € | **284.50 €** | 40.9 % | **40.7 %** | 284.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 246.50 € | **246.00 €** | 24.3 % | **24.1 %** | 246.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 276.50 € | **276.00 €** | 8.9 % | **8.7 %** | 276.39 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 53.00 € | **52.50 €** | 6.4 % | **5.4 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 34.00 € | **33.50 €** | 11.8 % | **10.1 %** | 33.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 36.00 € | **35.50 €** | 18.4 % | **16.8 %** | 35.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 151.00 € | **150.50 €** | 6.8 % | **6.4 %** | 150.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 70.50 € | **70.00 €** | 6.7 % | **6.0 %** | 70.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 118.00 € | **117.50 €** | 23298.8 % | **23199.6 %** | 117.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 136.00 € | **135.50 €** | 18.9 % | **18.4 %** | 135.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 80.00 € | **79.50 €** | 37.5 % | **36.6 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
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
| Vianočná LED reťaz Solight 1V04-M, 30 m, viacfarebná... | 15.00 € | **14.50 €** | 42.6 % | **37.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022400 | 37.00 € | **36.50 €** | 17.7 % | **16.1 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST0401 Cestovní žehlička | 23.00 € | **22.50 €** | 18.9 % | **16.3 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Ottocast CA525-T3 | 27.50 € | **27.00 €** | 23.3 % | **21.0 %** | 27.49 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.50 € | **13.00 €** | 10.4 % | **6.3 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 21.50 € | **21.00 €** | 7.6 % | **5.1 %** | 21.49 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 14.50 € | **14.00 €** | 9.3 % | **5.5 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 36.50 € | **36.00 €** | 41.3 % | **39.4 %** | 36.49 € | cena podľa najlacnejšieho iného predajcu |
| Boffin I 100 | 24.50 € | **24.00 €** | 9.1 % | **6.9 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 48.50 € | **48.00 €** | 23.1 % | **21.8 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 14.50 € | **14.00 €** | 43.1 % | **38.1 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 35.50 € | **35.00 €** | 36.3 % | **34.4 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 30.50 € | **30.00 €** | 17.1 % | **15.2 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 10.50 € | **10.00 €** | 18.9 % | **13.2 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal KI883D10 | 106.50 € | **106.00 €** | 10.3 % | **9.8 %** | 106.50 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P101CUD100 | 33.50 € | **33.00 €** | 7.2 % | **5.6 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.50 € | **14.00 €** | 17.1 % | **13.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO339KP | 52.50 € | **52.00 €** | 8.1 % | **7.1 %** | 52.50 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO30211IP | 124.50 € | **124.00 €** | 22.2 % | **21.7 %** | 124.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 47.50 € | **47.00 €** | 138.7 % | **136.2 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 47.50 € | **47.00 €** | 36.1 % | **34.7 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 96.50 € | **96.00 €** | 17.1 % | **16.5 %** | 96.50 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 23.50 € | **23.00 €** | 8.4 % | **6.1 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2105 Mikrovlnná trouba s grilem | 107.90 € | **107.50 €** | 10.2 % | **9.8 %** | 107.70 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 3601 | 95.90 € | **95.50 €** | 10.1 % | **9.6 %** | 95.78 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.90 € | **70.50 €** | 14.4 % | **13.8 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.90 € | **89.50 €** | 15.4 % | **14.8 %** | 89.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.50 €** | 15.2 % | **14.6 %** | 79.79 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 102.90 € | **102.50 €** | 7.3 % | **6.9 %** | 102.79 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link PG2400P KIT G.hn adaptér ... | 126.90 € | **126.50 €** | 5.9 % | **5.5 %** | 126.79 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska IsEasy LI3-17 | 150.90 € | **150.50 €** | 29.2 % | **28.9 %** | 150.79 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.90 € | **162.50 €** | 21.5 % | **21.2 %** | 162.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.90 € | **152.50 €** | 19.6 % | **19.3 %** | 152.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.90 € | **127.50 €** | 17.4 % | **17.0 %** | 127.79 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné púzdro DiCAPac WP-S3 pro fotoaparáty se zoomem | 73.90 € | **73.50 €** | 25.2 % | **24.5 %** | 73.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 144.90 € | **144.50 €** | 50.7 % | **50.3 %** | 144.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH 6756WO | 122.90 € | **122.50 €** | 8.6 % | **8.2 %** | 122.90 € | cena podľa najlacnejšieho iného predajcu |
| Obouruční madlo HMS UW05 | 15.90 € | **15.50 €** | 9.3 % | **6.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LEIFHEIT Sada Combi Classic mop 56792 | 13.90 € | **13.50 €** | 11.2 % | **8.0 %** | 13.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.90 € | **10.50 €** | 24.8 % | **20.2 %** | 10.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.90 € | **10.50 €** | 27.1 % | **22.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (biely) | 11.90 € | **11.50 €** | 14.8 % | **10.9 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s hviezdami Solight 1V52-WW, 1,5 ... | 2.20 € | **1.80 €** | 39.7 % | **14.3 %** | 1.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer Nutri Mini | 48.90 € | **48.50 €** | 14.9 % | **14.0 %** | 48.58 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Archer TX20E AX1800 WiFi 6, PC... | 29.90 € | **29.50 €** | 6.6 % | **5.1 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 46.90 € | **46.50 €** | 32.0 % | **30.9 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 38.90 € | **38.50 €** | 10.5 % | **9.4 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 17.90 € | **17.50 €** | 22.0 % | **19.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 21.90 € | **21.50 €** | 52.2 % | **49.4 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 37.90 € | **37.50 €** | 15.0 % | **13.8 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NB907MAW | 62.90 € | **62.50 €** | 11.9 % | **11.2 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 24.90 € | **24.50 €** | 14.5 % | **12.7 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Coppertinto KI280G10 | 28.90 € | **28.50 €** | 7.3 % | **5.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 31.90 € | **31.50 €** | 57.0 % | **55.0 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.90 € | **22.50 €** | 34.1 % | **31.8 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.90 € | **471.50 €** | 9.0 % | **9.0 %** | 471.79 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.40 € | **3.20 €** | 51.1 % | **42.2 %** | 3.29 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.00 € | **21.90 €** | 10.1 % | **9.6 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Pohybové čidlo ORBIS ISIMAT | 23.00 € | **22.90 €** | 18.3 % | **17.8 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.00 € | **22.90 €** | 11.7 % | **11.2 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 608 | 24.00 € | **23.90 €** | 11.9 % | **11.5 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 26.00 € | **25.90 €** | 21.5 % | **21.0 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 8.30 € | **8.20 €** | 53.0 % | **51.2 %** | 8.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 18.00 € | **17.90 €** | 15.0 % | **14.4 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 20.00 € | **19.90 €** | 25.4 % | **24.7 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.00 € | **23.90 €** | 14.8 % | **14.4 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.10 €** | 20.4 % | **18.1 %** | 5.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.70 € | **4.60 €** | 29.1 % | **26.3 %** | 4.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.90 € | **7.80 €** | 48.0 % | **46.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 2.90 € | **2.80 €** | 42.9 % | **38.0 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
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
| Domo DO8719W | 68.00 € | **67.90 €** | 8.2 % | **8.0 %** | 67.99 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015502 Mikrovlnná trouba | 121.00 € | **120.90 €** | 14.2 % | **14.1 %** | 121.00 € | cena podľa najlacnejšieho iného predajcu |

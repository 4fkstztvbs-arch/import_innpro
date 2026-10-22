# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-22

Vstup: `premiumstore-sk_2026-10-22_09-39.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6235**
- Návrh **zvýšiť** cenu: **152** produktov
- Návrh **znížiť** cenu: **313** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5770** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **11**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **323**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (152)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Smartring RingConn Gen 2 (veľkosť 6, strieborná) | 275.50 € | **416.90 €** | 25.2 % | **89.5 %** | 417.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 806.00 € | **870.00 €** | 15.3 % | **24.5 %** | 870.20 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn G2E Thunderbolt 5 (sivá) | 275.00 € | **338.90 €** | 15.0 % | **41.7 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-1 s rozhraním Thunderbolt 3 | 135.00 € | **178.90 €** | 14.9 % | **52.2 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 208.50 € | **238.90 €** | 15.1 % | **31.9 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 160.50 € | **182.00 €** | 6.7 % | **21.0 %** | 182.34 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-3 Thunderbolt 5 | 304.50 € | **321.00 €** | 15.0 % | **21.2 %** | 321.21 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LBD4Z | 455.50 € | **471.90 €** | 6.4 % | **10.3 %** | 472.00 € | cena podľa najlacnejšieho iného predajcu |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 71.90 € | **84.00 €** | 15.3 % | **34.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 45.50 € | **54.00 €** | 10.8 % | **31.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SGH2200LBC | 57.00 € | **65.00 €** | 10.1 % | **25.6 %** | 65.18 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2014401 Zmrzlinovač | 173.00 € | **179.50 €** | 7.7 % | **11.7 %** | 179.54 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač MOVA K30 Lite | 215.00 € | **221.00 €** | 7.6 % | **10.6 %** | 221.24 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10022 | 135.00 € | **140.00 €** | 7.7 % | **11.7 %** | 140.10 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-2 Oculink | 90.00 € | **95.00 €** | 15.0 % | **21.4 %** | 95.21 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 84.00 € | **88.50 €** | 7.3 % | **13.1 %** | 88.61 € | cena podľa najlacnejšieho iného predajcu |
| Aroma difuzer Zortiva 28221 150ml se světelným efekt... | 20.00 € | **24.50 €** | 12.4 % | **37.7 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 581.90 € | **586.00 €** | 8.6 % | **9.4 %** | 586.40 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 141.00 € | **145.00 €** | 5.1 % | **8.1 %** | 145.19 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer horkovzdušná fritéza ZAF9230 | 167.00 € | **171.00 €** | 6.1 % | **8.6 %** | 171.20 € | cena podľa najlacnejšieho iného predajcu |
| Tefal XF652038 | 149.00 € | **152.90 €** | 6.1 % | **8.9 %** | 153.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT96425VD | 249.90 € | **253.50 €** | 6.2 % | **7.7 %** | 253.60 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 143.00 € | **146.50 €** | 6.3 % | **8.9 %** | 146.60 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 215.00 € | **218.50 €** | 5.9 % | **7.7 %** | 218.80 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 32.00 € | **35.50 €** | 8.9 % | **20.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.00 € | **35.50 €** | 28.2 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat DIGITRADIO 317 /černé/ | 83.90 € | **86.90 €** | 8.5 % | **12.4 %** | 86.98 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 327.50 € | **330.50 €** | 5.9 % | **6.9 %** | 330.60 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 124.50 € | **127.50 €** | 10.2 % | **12.8 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 417.00 € | **420.00 €** | 9.1 % | **9.9 %** | 420.21 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B4 (modrá) | 62.50 € | **65.50 €** | 5.6 % | **10.6 %** | 65.81 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Verto High 54 l tmavomodrý | 42.00 € | **45.00 €** | 5.2 % | **12.7 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet Flip AI 4K | 124.00 € | **126.90 €** | 13.1 % | **15.7 %** | 126.99 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.00 € | **106.90 €** | 23.8 % | **27.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 108 200/ 50/bl | 279.00 € | **281.90 €** | 15.0 % | **16.2 %** | 282.00 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **24.00 €** | 14.8 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 327.50 € | **330.00 €** | 7.1 % | **7.9 %** | 330.20 € | cena podľa najlacnejšieho iného predajcu |
| BEKO CEG7302B | 239.50 € | **241.90 €** | 5.9 % | **7.0 %** | 241.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 15.50 € | **17.90 €** | 45.5 % | **68.0 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 10.50 € | **12.50 €** | 15.4 % | **37.3 %** | 12.55 € | cena podľa najlacnejšieho iného predajcu |
| Catlink Fresh smart odor absorber | 33.00 € | **35.00 €** | 6.9 % | **13.4 %** | 35.17 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LIB60420CL | 262.90 € | **264.50 €** | 7.2 % | **7.9 %** | 264.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 7.80 € | **9.30 €** | 12.6 % | **34.3 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 51.00 € | **52.50 €** | 6.6 % | **9.7 %** | 52.51 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 524.50 € | **526.00 €** | 7.4 % | **7.7 %** | 526.03 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW5558E0 | 164.50 € | **166.00 €** | 5.9 % | **6.9 %** | 166.16 € | cena podľa najlacnejšieho iného predajcu |
| PBT Keycap + Cable Set - Black - US/UK | 66.50 € | **68.00 €** | 10.7 % | **13.1 %** | 68.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 40.50 € | **42.00 €** | 21.0 % | **25.5 %** | 42.30 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 26.00 € | **27.50 €** | 5.5 % | **11.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **17.50 €** | 15.3 % | **26.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 7.80 € | **8.80 €** | 51.7 % | **71.2 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 200.00 € | **201.00 €** | 15.4 % | **15.9 %** | 201.02 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 200.00 € | **201.00 €** | 15.4 % | **15.9 %** | 201.02 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 320.50 € | **321.50 €** | 13.1 % | **13.5 %** | 321.55 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/ 80 Ohm | 381.90 € | **382.90 €** | 25.8 % | **26.2 %** | 383.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 447.90 € | **448.90 €** | 35.9 % | **36.2 %** | 449.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Aura 5 ANC | 39.00 € | **40.00 €** | 15.0 % | **18.0 %** | 40.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 19.50 € | **20.50 €** | 7.9 % | **13.5 %** | 20.77 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 27.50 € | **28.50 €** | 6.2 % | **10.0 %** | 28.81 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 16.50 € | **17.50 €** | 17.9 % | **25.0 %** | 17.82 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 10.50 € | **11.50 €** | 9.2 % | **19.6 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 228.50 € | **229.50 €** | 16.1 % | **16.6 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 228.50 € | **229.50 €** | 16.1 % | **16.6 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 130.50 € | **131.50 €** | 29.3 % | **30.3 %** | 131.90 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 238.00 € | **238.90 €** | 7.2 % | **7.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 263.00 € | **263.90 €** | 23.0 % | **23.4 %** | 263.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 41.90 € | **42.50 €** | 41.8 % | **43.8 %** | 42.85 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.74 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1018900 Pákový kávovar | 122.90 € | **123.50 €** | 8.1 % | **8.6 %** | 123.60 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM011 Výrobník ľadu, 1,2 l, 12 kg (čierny) | 74.50 € | **75.00 €** | 6.5 % | **7.3 %** | 75.01 € | cena podľa najlacnejšieho iného predajcu |
| Sada dětského nářadí KIDS 12 SIXTOL | 23.00 € | **23.50 €** | 11.3 % | **13.7 %** | 23.51 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 188.00 € | **188.50 €** | 10.3 % | **10.6 %** | 188.51 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 49.00 € | **49.50 €** | 32.1 % | **33.5 %** | 49.52 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 208.00 € | **208.50 €** | 50.4 % | **50.8 %** | 208.53 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 266.50 € | **267.00 €** | 57.2 % | **57.5 %** | 267.03 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.00 € | **335.50 €** | 22.7 % | **22.9 %** | 335.53 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA80XE AX 3000, WiFi ... | 23.00 € | **23.50 €** | 12.4 % | **14.8 %** | 23.54 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Flextail Tiny Helio 700Z (oranžová) | 22.50 € | **23.00 €** | 17.1 % | **19.7 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 163.50 € | **164.00 €** | 12.7 % | **13.1 %** | 164.05 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 295.00 € | **295.50 €** | 43.1 % | **43.3 %** | 295.58 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 53.00 € | **53.50 €** | 10.9 % | **11.9 %** | 53.59 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.00 € | **22.50 €** | 8.7 % | **11.2 %** | 22.59 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Neptune 4 Max | 391.50 € | **392.00 €** | 8.0 % | **8.1 %** | 392.09 € | cena podľa najlacnejšieho iného predajcu |
| Sada stavebních vozidel s příslušenstvím 26578 | 24.00 € | **24.50 €** | 18.6 % | **21.1 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 107.00 € | **107.50 €** | 16.7 % | **17.2 %** | 107.59 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 688.50 € | **689.00 €** | 36.7 % | **36.8 %** | 689.11 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 126.50 € | **127.00 €** | 15.9 % | **16.3 %** | 127.13 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped DeerRun S500 Pro (čierny) | 325.00 € | **325.50 €** | 51.8 % | **52.0 %** | 325.63 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 127.00 € | **127.50 €** | 11.0 % | **11.5 %** | 127.64 € | cena podľa najlacnejšieho iného predajcu |
| Boffin I 100 | 24.00 € | **24.50 €** | 6.9 % | **9.1 %** | 24.65 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 286.00 € | **286.50 €** | 57.4 % | **57.6 %** | 286.66 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 133.00 € | **133.50 €** | 7.1 % | **7.5 %** | 133.67 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 96.00 € | **96.50 €** | 20.8 % | **21.4 %** | 96.69 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 180.50 € | **181.00 €** | 10.9 % | **11.2 %** | 181.19 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.50 € | **167.00 €** | 15.2 % | **15.6 %** | 167.19 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 180.50 € | **181.00 €** | 24.5 % | **24.8 %** | 181.20 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER HL-L1232W | 111.50 € | **112.00 €** | 5.4 % | **5.8 %** | 112.21 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (sivá) | 11.00 € | **11.50 €** | 20.7 % | **26.2 %** | 11.74 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA20FMW7NG Candy Wave 600 | 133.00 € | **133.50 €** | 7.1 % | **7.5 %** | 133.75 € | cena podľa najlacnejšieho iného predajcu |
| Edifier SS02C stojany pre reproduktory Edifier S2000... | 149.00 € | **149.50 €** | 32.4 % | **32.8 %** | 149.76 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 156.00 € | **156.50 €** | 11.6 % | **12.0 %** | 156.76 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.50 € | **23.00 €** | 12.6 % | **15.1 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| BEKO SIM8130P | 44.50 € | **45.00 €** | 11.1 % | **12.4 %** | 45.30 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 217.00 € | **217.50 €** | 17.4 % | **17.7 %** | 217.85 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 39.00 € | **39.50 €** | 6.3 % | **7.7 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 69.00 € | **69.50 €** | 9.9 % | **10.7 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 218.50 € | **219.00 €** | 14.1 % | **14.4 %** | 219.43 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 21.50 € | **22.00 €** | 7.6 % | **10.1 %** | 22.45 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.50 € | **297.00 €** | 12.5 % | **12.7 %** | 297.46 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 208.50 € | **209.00 €** | 34.6 % | **34.9 %** | 209.47 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 111.50 € | **112.00 €** | 12.4 % | **12.9 %** | 112.49 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 14.50 € | **15.00 €** | 44.5 % | **49.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Pink | 93.50 € | **93.90 €** | 9.9 % | **10.4 %** | 93.91 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.50 € | **158.90 €** | 15.6 % | **15.9 %** | 158.93 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 152.50 € | **152.90 €** | 31.5 % | **31.9 %** | 152.94 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRALINK ULM300MIC wireless microphone set | 124.50 € | **124.90 €** | 30.2 % | **30.6 %** | 124.95 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon CRITICAL MASS, vokálny efektový pedál | 124.50 € | **124.90 €** | 20.3 % | **20.7 %** | 124.95 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 195.50 € | **195.90 €** | 7.6 % | **7.8 %** | 195.99 € | cena podľa najlacnejšieho iného predajcu |
| Turistická rybářská židle, skládací s opěradlem | 15.50 € | **15.90 €** | 38.9 % | **42.5 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Držák projektoru Cabletech UCH0148 univerzální | 14.50 € | **14.90 €** | 14.3 % | **17.5 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| LTE filtr Fagor LBF 694 (5-694 MHz, LTE 5G útlum 45 dB) | 14.50 € | **14.90 €** | 14.3 % | **17.5 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Prasátko Peppa | 22.50 € | **22.90 €** | 8.2 % | **10.1 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2459BS | 51.50 € | **51.90 €** | 11.3 % | **12.2 %** | 51.97 € | cena podľa najlacnejšieho iného predajcu |
| COLMI G06 Inteligentné okuliare Čierne | 39.50 € | **39.90 €** | 21.6 % | **22.8 %** | 39.97 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 28.50 € | **28.90 €** | 17.1 % | **18.7 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 28.50 € | **28.90 €** | 17.1 % | **18.7 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.30 € | **8.70 €** | 66.6 % | **74.6 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 330.50 € | **330.90 €** | 16.6 % | **16.7 %** | 330.93 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D70 | 287.50 € | **287.90 €** | 27.7 % | **27.8 %** | 287.93 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 502.50 € | **502.90 €** | 7.7 % | **7.8 %** | 502.94 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 502.50 € | **502.90 €** | 22.4 % | **22.5 %** | 502.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.70 € | **4.90 €** | 11.4 % | **16.1 %** | 4.98 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 362.90 € | **363.00 €** | 81.5 % | **81.5 %** | 363.15 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 387.90 € | **388.00 €** | 8.7 % | **8.7 %** | 388.50 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI DI600P DI box | 32.90 € | **33.00 €** | 11.3 % | **11.6 %** | 33.01 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 40.90 € | **41.00 €** | 38.5 % | **38.8 %** | 41.02 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V200 | 32.90 € | **33.00 €** | 17.8 % | **18.1 %** | 33.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.90 € | **18.00 €** | 46.6 % | **47.4 %** | 18.07 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.90 € | **53.00 €** | 9.3 % | **9.5 %** | 53.09 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 29.90 € | **30.00 €** | 18.2 % | **18.6 %** | 30.09 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-838 5G | 22.90 € | **23.00 €** | 29.8 % | **30.4 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR C3 Carrying Case for Quest 3 | 46.90 € | **47.00 €** | 34.4 % | **34.7 %** | 47.10 € | cena podľa najlacnejšieho iného predajcu |
| RainPoint WiFi 8-zónový regulátor zavlažovania | 59.90 € | **60.00 €** | 17.6 % | **17.8 %** | 60.11 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXSH1500E | 28.90 € | **29.00 €** | 6.1 % | **6.5 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **2.10 €** | 49.2 % | **56.6 %** | 2.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.70 € | **3.80 €** | 30.8 % | **34.3 %** | 3.81 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic EDT 100S | 15.90 € | **16.00 €** | 15.0 % | **15.7 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 3601 | 94.90 € | **95.00 €** | 8.9 % | **9.1 %** | 95.04 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.90 € | **79.00 €** | 10.0 % | **10.1 %** | 79.06 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 174.90 € | **175.00 €** | 26.5 % | **26.6 %** | 175.10 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 125.90 € | **126.00 €** | 21.0 % | **21.1 %** | 126.30 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (313)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Smartring RingConn Gen 2 (veľkosť 13, čierna) | 416.90 € | **253.50 €** | 89.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 968.90 € | **818.90 €** | 69.4 % | **43.2 %** | 819.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 988.90 € | **888.90 €** | 60.0 % | **43.8 %** | 889.00 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 542.50 € | **447.90 €** | 46.1 % | **20.6 %** | 448.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 868.90 € | **788.90 €** | 58.9 % | **44.3 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 416.90 € | **346.90 €** | 107.0 % | **72.2 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 418.90 € | **348.90 €** | 107.2 % | **72.6 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 418.90 € | **348.90 €** | 108.0 % | **73.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 380.00 € | **327.50 €** | 22.0 % | **5.1 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 418.90 € | **368.90 €** | 96.4 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-150 s rozlíšením 1080p (tmavošedý) | 238.90 € | **198.90 €** | 70.3 % | **41.8 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 873.00 € | **835.50 €** | 15.0 % | **10.0 %** | 835.65 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 332.00 € | **298.50 €** | 19.1 % | **7.1 %** | 298.71 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 361.50 € | **328.90 €** | 56.0 % | **42.0 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 216.90 € | **186.90 €** | 63.6 % | **41.0 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2-N TTL pre fotoaparáty Nikon | 168.90 € | **138.90 €** | 69.1 % | **39.1 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-N pre fotoaparáty Nikon | 168.90 € | **138.90 €** | 36.8 % | **12.5 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 166.90 € | **136.90 €** | 73.3 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 178.90 € | **148.90 €** | 73.2 % | **44.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 148.90 € | **118.90 €** | 83.1 % | **46.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 148.90 € | **118.90 €** | 81.8 % | **45.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 176.90 € | **146.90 €** | 78.3 % | **48.1 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 306.00 € | **278.90 €** | 59.9 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Beyerdynamic M88 dynamický mikrofón | 499.00 € | **472.90 €** | 15.0 % | **9.0 %** | 473.00 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 176.90 € | **153.50 €** | 37.0 % | **18.9 %** | 153.90 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WMD44MB | 409.00 € | **387.90 €** | 10.7 % | **5.0 %** | 351.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM2000 | 657.50 € | **636.90 €** | 45.8 % | **41.2 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 349.00 € | **328.90 €** | 53.0 % | **44.2 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 176.90 € | **156.90 €** | 63.8 % | **45.3 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 126.90 € | **106.90 €** | 70.1 % | **43.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 208.90 € | **188.90 €** | 61.0 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 112.50 € | **94.00 €** | 71.8 % | **43.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXJB1000E | 62.90 € | **46.50 €** | 54.9 % | **14.5 %** | 46.70 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXHB1501E Tyčový mixér | 37.90 € | **22.50 €** | 92.6 % | **14.3 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 240W, 33600lm, 120°, Philips, MW, ... | 116.90 € | **102.00 €** | 31.8 % | **15.0 %** | 102.03 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 106.90 € | **94.00 €** | 68.8 % | **48.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 106.90 € | **94.00 €** | 71.7 % | **51.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Note 17 6/256GB Purple | 279.90 € | **267.50 €** | 10.1 % | **5.2 %** | 242.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 182.00 € | **170.90 €** | 24.7 % | **17.1 %** | 170.99 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 126.90 € | **116.90 €** | 56.2 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 79.50 € | **69.50 €** | 65.2 % | **44.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir G7 Pro DD2 | 89.50 € | **79.50 €** | 56.8 % | **39.3 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 94.00 € | **84.00 €** | 59.9 % | **42.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 214.00 € | **205.50 €** | 10.5 % | **6.1 %** | 205.63 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 113.50 € | **105.00 €** | 33.9 % | **23.9 %** | 105.14 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzormi (sivý) | 68.00 € | **59.50 €** | 43.0 % | **25.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 98.00 € | **89.50 €** | 60.5 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 115.00 € | **107.50 €** | 26.5 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam S800 | 102.50 € | **95.00 €** | 36.4 % | **26.4 %** | 95.17 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **159.00 €** | 11.1 % | **6.1 %** | 159.29 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 71.50 € | **64.00 €** | 50.7 % | **34.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BDIN38542P | 410.00 € | **402.90 €** | 6.9 % | **5.1 %** | 401.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Domo DO9308I | 221.50 € | **214.50 €** | 11.7 % | **8.2 %** | 214.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak športovej kamery na riadidlá PGYTECH (P-GM-171) | 37.50 € | **31.00 €** | 35.9 % | **12.3 %** | 31.21 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 86.00 € | **79.50 €** | 49.3 % | **38.0 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 323.50 € | **317.00 €** | 8.1 % | **5.9 %** | 317.46 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LKR64022AX | 491.90 € | **485.50 €** | 6.4 % | **5.0 %** | 448.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 134.50 € | **129.00 €** | 34.2 % | **28.7 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 38.00 € | **32.50 €** | 74.9 % | **49.6 %** | 32.60 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 91.00 € | **85.50 €** | 29.1 % | **21.3 %** | 85.76 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN CPF-1500 9 W UV tlakový filter pre jazierka | 79.50 € | **74.00 €** | 39.4 % | **29.7 %** | 74.36 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 104.00 € | **98.50 €** | 20.6 % | **14.2 %** | 98.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (béžové) | 104.00 € | **98.50 €** | 28.1 % | **21.3 %** | 98.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov PGYTECH ND-PL pre DJI Mavic Pro (P-43A-... | 31.00 € | **26.00 €** | 67.2 % | **40.3 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO30211IP | 123.90 € | **119.00 €** | 21.6 % | **16.8 %** | 119.19 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 153.50 € | **148.90 €** | 45.0 % | **40.6 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TBE400U BE6500, WiFi 7,  2... | 70.90 € | **66.50 €** | 13.2 % | **6.2 %** | 66.78 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Game Pods FIXPDS-G-WH | 42.50 € | **38.50 €** | 29.4 % | **17.2 %** | 38.59 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.50 € | **151.50 €** | 8.8 % | **6.0 %** | 151.61 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 34.50 € | **30.50 €** | 60.2 % | **41.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 24.50 € | **20.50 €** | 64.9 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Ohrievač fliaš Grownsy (sivý) | 27.00 € | **23.00 €** | 62.2 % | **38.2 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 260.50 € | **256.90 €** | 45.9 % | **43.9 %** | 257.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP16 PM FIXVM-1403-BK | 35.50 € | **31.90 €** | 27.8 % | **14.8 %** | 31.96 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPh 16 P FIXVM-1402-BK | 35.50 € | **31.90 €** | 27.8 % | **14.8 %** | 31.96 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 142.50 € | **138.90 €** | 43.0 % | **39.4 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Statív s 3D 360° hlavou + držiak na telefón Puluz PU... | 28.50 € | **25.00 €** | 56.6 % | **37.3 %** | 25.06 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 212.00 € | **208.50 €** | 7.7 % | **6.0 %** | 208.65 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 290.00 € | **286.50 €** | 23.5 % | **22.0 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 290.00 € | **286.50 €** | 25.6 % | **24.1 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (biela) | 24.00 € | **20.50 €** | 71.8 % | **46.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (čierna) | 24.00 € | **20.50 €** | 61.5 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Pouzdro SGTabA11 FIXRTC-1650-BK | 32.90 € | **29.50 €** | 27.6 % | **14.4 %** | 29.67 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 26.00 € | **22.90 €** | 20.1 % | **5.8 %** | 22.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PGYTECH Caplock MantisPod Power Tripod pre Gopro Hero | 60.00 € | **56.90 €** | 24.2 % | **17.8 %** | 56.96 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 252.00 € | **248.90 €** | 44.7 % | **42.9 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.50 € | **13.50 €** | 43.2 % | **17.1 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 121.90 € | **118.90 €** | 45.3 % | **41.7 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 19.00 € | **16.00 €** | 44.4 % | **21.6 %** | 16.27 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCool 2,MagSafe FIXMCO2-BK | 30.00 € | **27.00 €** | 26.1 % | **13.5 %** | 27.36 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajší LED snehuliak Solight 1V241, 70 cm, teplá b... | 14.00 € | **11.00 €** | 41.6 % | **11.2 %** | 11.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **18.50 €** | 22.5 % | **5.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Váleček MOVA pre stanicu G70 | 16.50 € | **13.50 €** | 65.8 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 16.50 € | **13.50 €** | 65.8 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 37.50 € | **34.50 €** | 61.1 % | **48.2 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 20.00 € | **17.00 €** | 34.6 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná žiarovka Yeelight W1 GU10 (Biela) | 20.00 € | **17.00 €** | 67.5 % | **42.3 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Kefa MOVA na rôzne povrchy pre detektor S2 | 12.50 € | **9.80 €** | 34.2 % | **5.3 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Voyager Slim 45W FIXCT45-3C1A-WH | 23.50 € | **20.90 €** | 18.7 % | **5.6 %** | 20.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed Powerstation Uni FIXPOS-U-BK | 34.50 € | **31.90 €** | 24.1 % | **14.8 %** | 31.97 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 S Pro (čierny) | 60.50 € | **58.00 €** | 14.9 % | **10.2 %** | 58.30 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 23.00 € | **20.50 €** | 51.9 % | **35.4 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 27.00 € | **24.50 €** | 32.0 % | **19.8 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.00 € | **24.50 €** | 59.1 % | **44.3 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT625B, USB | 45.50 € | **43.00 €** | 27.8 % | **20.8 %** | 43.50 € | cena podľa najlacnejšieho iného predajcu |
| Válcová kefa MOVA | 16.50 € | **14.00 €** | 65.8 % | **40.7 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 18.50 € | **16.00 €** | 51.5 % | **31.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofon Maono PD200x (biely) | 50.00 € | **47.90 €** | 16.8 % | **11.9 %** | 47.98 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica ELEGOO Mercury XS | 130.00 € | **127.90 €** | 18.0 % | **16.1 %** | 127.92 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.90 € | **60.90 €** | 9.1 % | **5.6 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED MagRound 3 držák s MgS FIXMRO3-BK | 22.50 € | **20.50 €** | 26.2 % | **14.9 %** | 20.52 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXFLM2-1600-BK | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-RD | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SGS26+ FIXFLM2-1705-PI | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-BK | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-RD | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BL | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-PI | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1705-BK | 20.00 € | **18.00 €** | 27.6 % | **14.9 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 109.50 € | **107.50 €** | 27.0 % | **24.7 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 11.00 € | **9.00 €** | 50.1 % | **22.8 %** | 9.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 15.00 € | **13.00 €** | 43.0 % | **23.9 %** | 13.17 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle XL s MgS FIXMC-XL-BK | 19.50 € | **17.50 €** | 26.1 % | **13.2 %** | 17.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **17.50 €** | 26.0 % | **13.1 %** | 17.80 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 17.50 € | **15.50 €** | 62.0 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 71.50 € | **69.50 €** | 50.7 % | **46.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 13.50 € | **11.50 €** | 57.0 % | **33.8 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Kombinovaná taška Sunnylife pre DJI Mini 4 Pro (N4P-... | 26.50 € | **24.50 €** | 52.9 % | **41.4 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom PN-14L2 Puzdro Dancing Circle pre iPhone 14 ... | 12.50 € | **10.50 €** | 63.4 % | **37.2 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 23.00 € | **21.00 €** | 51.9 % | **38.7 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 96.00 € | **94.00 €** | 42.4 % | **39.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17P FIXPUM-1602-TR | 15.90 € | **14.00 €** | 27.2 % | **12.0 %** | 14.37 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXPUM-1600-TR | 15.90 € | **14.00 €** | 27.2 % | **12.0 %** | 14.37 € | cena podľa najlacnejšieho iného predajcu |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed kryt Apple iP 16P FIXBLM-1402-BP | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 FIXBLM-1600-BP | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17A FIXSHM-1601-TR | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 15 FIXBLM-1200-BP | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **15.90 €** | 26.0 % | **14.5 %** | 15.97 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.50 € | **178.90 €** | 45.1 % | **43.8 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro Xiaomi R Pad 2 FIXTOT-1199 | 16.00 € | **14.50 €** | 36.4 % | **23.6 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 16.00 € | **14.50 €** | 50.2 % | **36.1 %** | 14.72 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE F4142PW | 231.00 € | **229.50 €** | 8.0 % | **7.3 %** | 229.76 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Autonabíječka 65W FIXCC65-CC-BK | 16.00 € | **14.50 €** | 24.2 % | **12.6 %** | 14.81 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPho 16P FIXMMY-1402-BK | 15.00 € | **13.50 €** | 35.7 % | **22.1 %** | 13.83 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 15.00 € | **13.50 €** | 35.7 % | **22.1 %** | 13.83 € | cena podľa najlacnejšieho iného predajcu |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 68.00 € | **66.50 €** | 12.0 % | **9.5 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 68.00 € | **66.50 €** | 8.9 % | **6.5 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 19.00 € | **17.50 €** | 43.3 % | **32.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer XENYX 802S 8-kanálový analógový mixpult s ... | 76.50 € | **75.00 €** | 11.4 % | **9.2 %** | 75.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 22.50 € | **21.00 €** | 48.8 % | **38.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXKE2201E | 37.90 € | **36.50 €** | 54.2 % | **48.5 %** | 36.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C + USB-A fast charger GaN 20 W PD | 9.00 € | **7.70 €** | 69.8 % | **45.2 %** | 7.74 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **3.00 €** | 54.0 % | **7.4 %** | 3.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 5.80 € | **4.60 €** | 44.6 % | **14.7 %** | 4.61 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV2839E0 | 32.00 € | **30.90 €** | 10.1 % | **6.4 %** | 28.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Yeelight Ultra-thin Motion Sensor Closet Light A50 | 24.00 € | **22.90 €** | 48.8 % | **42.0 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14 P4G FIXOP3-1542-BK | 13.00 € | **11.90 €** | 35.3 % | **23.9 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 14P+5G FIXOP3-1433-BK | 13.00 € | **11.90 €** | 35.3 % | **23.9 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17PM FIXOP3-1603-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Apple 17P FIXOP3-1602-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo V50 L FIXOP3-1580-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300P FIXOP3-1609-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Vivo X300 FIXOP3-1642-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor 400 FIXOP3-1552-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-RD | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BRW | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1702-BL | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-RD | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BRW | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26 FIXOP3-1704-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A35 5G FIXOP3-1262-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A17 FIXOP3-1700-BL | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro POCO F7 FIXOP3-1533-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15P+ 5G FIXOP3-1647-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN 15 4G FIXOP3-1643-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRN15Pro 5G FIXOP3-1646-BK | 13.00 € | **12.00 €** | 35.2 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight nabíjačka USB-C, 65W, PD fast charger | 12.90 € | **11.90 €** | 24.3 % | **14.6 %** | 11.94 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 12.00 € | **11.00 €** | 35.7 % | **24.4 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 12.00 € | **11.00 €** | 35.7 % | **24.4 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 12.00 € | **11.00 €** | 35.7 % | **24.4 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 210.90 € | **209.90 €** | 38003.0 % | **37822.3 %** | 210.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 645.90 € | **644.90 €** | 116593.8 % | **116413.1 %** | 645.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 14.00 € | **13.00 €** | 13.3 % | **5.2 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 14.00 € | **13.00 €** | 30.8 % | **21.5 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.00 € | **17.00 €** | 20.4 % | **13.8 %** | 17.18 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor Pad 8 FIXTOT-1145 | 15.00 € | **14.00 €** | 31.7 % | **22.9 %** | 14.24 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.50 € | **14.50 €** | 20.8 % | **13.0 %** | 14.75 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Bikee Anti-Shock FIXBIAS-BK | 21.50 € | **20.50 €** | 19.2 % | **13.6 %** | 20.75 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ30 (čierny) | 214.00 € | **213.00 €** | 10.4 % | **9.9 %** | 213.27 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 88.50 € | **87.50 €** | 28.3 % | **26.9 %** | 87.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight nabíjačka do auta USB-C, 65W, PD fast charger | 11.00 € | **10.00 €** | 21.8 % | **10.8 %** | 10.38 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 20.50 € | **19.50 €** | 15.3 % | **9.6 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 20.50 € | **19.50 €** | 13.8 % | **8.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 24.50 € | **23.50 €** | 49.2 % | **43.1 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 22.50 € | **21.50 €** | 42.2 % | **35.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 18.50 € | **17.50 €** | 43.1 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 18.50 € | **17.50 €** | 43.1 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 28.50 € | **27.50 €** | 46.6 % | **41.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 16.50 € | **15.50 €** | 22.2 % | **14.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic GAUSS TAPE ECHO | 63.50 € | **62.50 €** | 21.7 % | **19.8 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2459S | 39.00 € | **38.00 €** | 14.0 % | **11.1 %** | 38.41 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 16.00 € | **15.00 €** | 41.4 % | **32.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.00 € | **18.00 €** | 49.5 % | **41.7 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona na smartfón od Sunnylife pre ovládač D... | 12.00 € | **11.00 €** | 48.7 % | **36.3 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES206XPP-M2 5x 2,5GLan s PoE++, 1x 10... | 175.90 € | **175.00 €** | 5.6 % | **5.0 %** | 175.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight USB-C 20 W fast charger | 6.70 € | **5.80 €** | 67.1 % | **44.6 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 6.70 € | **5.80 €** | 80.4 % | **56.1 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 6.70 € | **5.80 €** | 80.4 % | **56.1 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 22.90 € | **22.00 €** | 43.8 % | **38.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný stromček na stenu Solight 1V260, 24 LED... | 3.90 € | **3.10 €** | 41.6 % | **12.5 %** | 3.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 5.00 € | **4.20 €** | 80.7 % | **51.8 %** | 4.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight nabíjačka USB-C, 65W, PD fast charger | 9.80 € | **9.10 €** | 22.6 % | **13.8 %** | 9.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 3.90 € | **3.20 €** | 84.3 % | **51.3 %** | 3.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.20 € | **8.50 €** | 37.7 % | **27.3 %** | 8.52 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto MercedesBenz Actros + AM | 44.50 € | **43.90 €** | 11.0 % | **9.5 %** | 43.98 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná hviezda na stenu Solight 1V261, 24 LED,... | 3.70 € | **3.10 €** | 34.3 % | **12.5 %** | 3.17 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les s jeleňmi Solight 1V249,... | 3.40 € | **2.80 €** | 35.5 % | **11.6 %** | 2.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.40 €** | 38.1 % | **27.7 %** | 7.49 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 139.50 € | **138.90 €** | 40.3 % | **39.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.50 € | **31.00 €** | 29.5 % | **27.4 %** | 31.01 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 28.00 € | **27.50 €** | 22.1 % | **19.9 %** | 27.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 34.00 € | **33.50 €** | 33.7 % | **31.7 %** | 33.53 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 12.50 € | **12.00 €** | 30.0 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 468.00 € | **467.50 €** | 11.7 % | **11.6 %** | 467.55 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 262.50 € | **262.00 €** | 7.6 % | **7.3 %** | 262.08 € | cena podľa najlacnejšieho iného predajcu |
| Behringer MU1000 music stand | 27.50 € | **27.00 €** | 9.1 % | **7.1 %** | 27.10 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAQ2000WT Bezdrátová sluchátka | 37.50 € | **37.00 €** | 13.5 % | **12.0 %** | 37.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 34.00 € | **33.50 €** | 11.4 % | **9.7 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 14.50 € | **14.00 €** | 27.3 % | **22.9 %** | 14.24 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2659 | 69.50 € | **69.00 €** | 12.7 % | **11.9 %** | 69.25 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX30U Plus AX 1800 adaptér... | 25.00 € | **24.50 €** | 9.0 % | **6.9 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 33.4 % | **27.6 %** | 11.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.50 € | **18.00 €** | 29.8 % | **26.3 %** | 18.34 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 342.00 € | **341.50 €** | 25.0 % | **24.8 %** | 341.89 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 63.00 € | **62.50 €** | 92.6 % | **91.0 %** | 62.89 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.00 € | **17.50 €** | 10.5 % | **7.5 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 48.50 € | **48.00 €** | 10.7 % | **9.6 %** | 48.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 31.50 € | **31.00 €** | 28.2 % | **26.1 %** | 31.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 42.00 € | **41.50 €** | 20.1 % | **18.7 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 315.00 € | **314.50 €** | 17.3 % | **17.1 %** | 314.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 237.50 € | **237.00 €** | 29.2 % | **28.9 %** | 237.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 470.00 € | **469.50 €** | 8.6 % | **8.5 %** | 469.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 924.00 € | **923.50 €** | 17.4 % | **17.4 %** | 923.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 159.00 € | **158.50 €** | 7.4 % | **7.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 186.50 € | **186.00 €** | 10.8 % | **10.5 %** | 186.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 113.50 € | **113.00 €** | 27.3 % | **26.7 %** | 113.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 139.50 € | **139.00 €** | 24.3 % | **23.8 %** | 139.39 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Copertinto BL439G10 | 57.00 € | **56.50 €** | 6.5 % | **5.5 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 277.50 € | **277.00 €** | 24.3 % | **24.1 %** | 277.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 25.50 € | **25.00 €** | 12.8 % | **10.6 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 274.50 € | **274.00 €** | 8.1 % | **7.9 %** | 274.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.50 € | **18.00 €** | 23.0 % | **19.7 %** | 18.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 15.00 € | **14.50 €** | 15.6 % | **11.7 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 72.00 € | **71.50 €** | 23.7 % | **22.9 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 185.00 € | **184.50 €** | 5.5 % | **5.2 %** | 184.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 607.50 € | **607.00 €** | 5.7 % | **5.6 %** | 607.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 637.50 € | **637.00 €** | 7.6 % | **7.6 %** | 637.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 684.50 € | **684.00 €** | 11.7 % | **11.6 %** | 684.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 161.00 € | **160.50 €** | 20.1 % | **19.7 %** | 160.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 79.50 € | **79.00 €** | 28.2 % | **27.4 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 151.00 € | **150.50 €** | 18.2 % | **17.8 %** | 150.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 126.00 € | **125.50 €** | 15.6 % | **15.2 %** | 125.89 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 20.00 € | **19.50 €** | 42.4 % | **38.8 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 59.50 € | **59.00 €** | 20.7 % | **19.7 %** | 59.40 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6T (modrý) | 43.00 € | **42.50 €** | 42.9 % | **41.3 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 25.00 € | **24.50 €** | 41.7 % | **38.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 15.50 € | **15.00 €** | 139.6 % | **131.8 %** | 15.40 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 14.50 € | **14.00 €** | 21.3 % | **17.1 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 Kit – webová kamera | 61.50 € | **61.00 €** | 20.5 % | **19.5 %** | 61.49 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO8719W | 67.50 € | **67.00 €** | 7.4 % | **6.6 %** | 67.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 16.50 € | **16.00 €** | 39.0 % | **34.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell ND1000 Filter pre OSMO Action 6 | 15.50 € | **15.00 €** | 39.7 % | **35.2 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 16.50 € | **16.00 €** | 40.3 % | **36.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6VR (červený) | 31.50 € | **31.00 €** | 43.8 % | **41.5 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu PLA Classic (čierny), 1,75 mm, 1 kg | 11.50 € | **11.00 €** | 42.1 % | **35.9 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 107.90 € | **107.50 €** | 28.0 % | **27.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.70 € | **4.30 €** | 66.1 % | **52.0 %** | 4.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetický USB-C kábel, USB 2.0 A konektor -... | 5.40 € | **5.00 €** | 80.7 % | **67.3 %** | 5.10 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Topic Tab LenIdeaTab11 FIXTOT-1677 | 14.90 € | **14.50 €** | 27.0 % | **23.6 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.90 € | **14.50 €** | 27.0 % | **23.6 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (čierna) | 14.90 € | **14.50 €** | 19.3 % | **16.1 %** | 14.85 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like Pro 2 (sivá) | 14.90 € | **14.50 €** | 13.1 % | **10.1 %** | 14.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED NANO žiarivka lineárna T8, 9W, 800lm, 60... | 2.00 € | **1.60 €** | 41.4 % | **13.1 %** | 1.64 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz do okna – Santa Solight 1V251, 12... | 2.50 € | **2.10 €** | 33.7 % | **12.3 %** | 2.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.20 € | **7.80 €** | 43.4 % | **36.4 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V275, 25 cm, 5 LED, 2 ... | 16.90 € | **16.50 €** | 44.5 % | **41.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 17.90 € | **17.50 €** | 42.8 % | **39.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W3 | 19.90 € | **19.50 €** | 43.0 % | **40.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight reťaz pre akumulátorovú pílu RNP150 | 4.30 € | **4.00 €** | 22.2 % | **13.7 %** | 4.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.30 € | **9.10 €** | 12.0 % | **9.6 %** | 9.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.40 € | **5.20 €** | 25.1 % | **20.4 %** | 5.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **4.90 €** | 13.3 % | **8.8 %** | 4.99 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 401.00 € | **400.90 €** | 6.3 % | **6.3 %** | 401.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 35.00 € | **34.90 €** | 59.6 % | **59.1 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NB907MAW | 62.00 € | **61.90 €** | 10.3 % | **10.1 %** | 62.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO727BL | 56.00 € | **55.90 €** | 6.4 % | **6.2 %** | 56.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight lišta pre akumulátorovú pílu RNP100/A/A1 | 1.50 € | **1.40 €** | 22.0 % | **13.8 %** | 1.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.90 € | **2.80 €** | 41.2 % | **36.3 %** | 2.84 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s ozdobnými príveskami Solight 1V... | 2.90 € | **2.80 €** | 42.9 % | **38.0 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, 20 - 200A | 6.50 € | **6.40 €** | 35.8 % | **33.8 %** | 6.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight teplomer, farba čierna | 16.00 € | **15.90 €** | 50.0 % | **49.1 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GCO2009 Auto FIRST 65018 Cars Ja | 12.00 € | **11.90 €** | 7.0 % | **6.1 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GCO2011 Auto FIRST 65023 Tlapkov | 12.00 € | **11.90 €** | 7.0 % | **6.1 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 131.00 € | **130.90 €** | 14.7 % | **14.6 %** | 130.99 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 167.00 € | **166.90 €** | 45.1 % | **45.0 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |

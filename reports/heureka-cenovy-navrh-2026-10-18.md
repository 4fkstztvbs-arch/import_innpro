# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-18

Vstup: `premiumstore-sk_2026-10-18_08-53.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6221**
- Návrh **zvýšiť** cenu: **150** produktov
- Návrh **znížiť** cenu: **131** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5940** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **5**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **334**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (150)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 267.50 € | **328.50 €** | 22.8 % | **50.7 %** | 328.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 460.90 € | **502.90 €** | 12.7 % | **22.9 %** | 502.94 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 806.00 € | **835.00 €** | 15.3 % | **19.5 %** | 835.05 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 288.90 € | **317.50 €** | 5.3 % | **15.7 %** | 317.63 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V /  9Ah  VIPOW bezúdržbový akumu... | 15.90 € | **44.00 €** | 6.1 % | **193.7 %** | 44.11 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1919 (čierny) | 96.50 € | **118.90 €** | 14.9 % | **41.5 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 777.00 € | **798.00 €** | 11.1 % | **14.1 %** | 798.29 € | cena podľa najlacnejšieho iného predajcu |
| WiFi RGBW 16M Gosund LB2S Tuya smart night light | 11.90 € | **28.50 €** | 15.6 % | **176.8 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 178.00 € | **194.00 €** | 14.9 % | **25.2 %** | 194.28 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, zlatá) | 178.00 € | **194.00 €** | 14.9 % | **25.2 %** | 194.28 € | cena podľa najlacnejšieho iného predajcu |
| Fritéza MOVA FD20s Pro Air | 136.50 € | **149.00 €** | 5.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Samsung VG-SCFC32WTBXC | 58.50 € | **67.50 €** | 5.8 % | **22.0 %** | 67.79 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 153.50 € | **162.50 €** | 18.9 % | **25.8 %** | 162.90 € | cena podľa najlacnejšieho iného predajcu |
| BEKO BDIN38542P | 402.90 € | **410.00 €** | 5.1 % | **6.9 %** | 410.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER GR18C Okrúhly LED panel pre bočné osvetlenie | 194.00 € | **201.00 €** | 19.3 % | **23.6 %** | 201.38 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 98.50 € | **104.50 €** | 14.8 % | **21.8 %** | 104.67 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC čierne | 133.50 € | **139.00 €** | 28.8 % | **34.1 %** | 139.04 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 79.90 € | **84.50 €** | 17944.3 % | **18983.1 %** | 84.59 € | cena podľa najlacnejšieho iného predajcu |
| Zvuková karta Maono G1 Neo (biela) | 42.50 € | **47.00 €** | 8.7 % | **20.2 %** | 47.04 € | cena podľa najlacnejšieho iného predajcu |
| Maono G1 Neo Sound Card Black | 42.50 € | **47.00 €** | 7.3 % | **18.6 %** | 47.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC S100neo AC/DC | 50.00 € | **54.00 €** | 33.0 % | **43.7 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 631.00 € | **634.90 €** | 7.4 % | **8.1 %** | 634.91 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 78.90 € | **82.50 €** | 5.0 % | **9.8 %** | 82.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 29.90 € | **32.90 €** | 15.3 % | **26.9 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100BFB | 52.00 € | **55.00 €** | 8.4 % | **14.6 %** | 55.18 € | cena podľa najlacnejšieho iného predajcu |
| Solight stolná lampa Falun, E27, biela | 26.50 € | **29.50 €** | 19.1 % | **32.6 %** | 29.80 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 653.50 € | **656.00 €** | 7.7 % | **8.1 %** | 656.41 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 35.50 € | **38.00 €** | 13.7 % | **21.7 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC 20100 W | 58.50 € | **61.00 €** | 9.0 % | **13.7 %** | 61.50 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 27.00 € | **29.00 €** | 19.5 % | **28.3 %** | 29.09 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kleště odizolovací, krimpovací 200mm + k... | 21.00 € | **23.00 €** | 7.1 % | **17.3 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 203.50 € | **205.50 €** | 13.8 % | **14.9 %** | 205.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 97.50 € | **99.50 €** | 6.0 % | **8.1 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 69.00 € | **70.90 €** | 29.8 % | **33.3 %** | 70.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 15.50 € | **17.00 €** | 26.5 % | **38.8 %** | 17.05 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER x660 PRO II | 199.00 € | **200.50 €** | 19.5 % | **20.4 %** | 200.57 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 33.50 € | **35.00 €** | 46.1 % | **52.7 %** | 35.19 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER LED pásik – neónový RGB | 71.50 € | **72.90 €** | 22.3 % | **24.6 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 501.50 € | **502.90 €** | 7.9 % | **8.2 %** | 502.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 3.80 € | **4.90 €** | 14.8 % | **48.1 %** | 4.95 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64034 Mario Kart - Luigi | 14.90 € | **16.00 €** | 6.4 % | **14.3 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 239.50 € | **240.50 €** | 5.0 % | **5.5 %** | 240.55 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 688.00 € | **689.00 €** | 36.7 % | **36.8 %** | 689.11 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 57.00 € | **58.00 €** | 83.1 % | **86.3 %** | 58.16 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 830.00 € | **831.00 €** | 27.4 % | **27.6 %** | 831.19 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 11.50 € | **12.50 €** | 7.7 % | **17.1 %** | 12.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.50 € | **12.50 €** | 12.1 % | **21.9 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 11.50 € | **12.50 €** | 14.0 % | **23.9 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 228.50 € | **229.50 €** | 16.1 % | **16.6 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 228.50 € | **229.50 €** | 16.1 % | **16.6 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 207.50 € | **208.50 €** | 16.0 % | **16.6 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 207.50 € | **208.50 €** | 16.0 % | **16.6 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 207.50 € | **208.50 €** | 16.0 % | **16.6 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 87.50 € | **88.50 €** | 24.0 % | **25.4 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 431.00 € | **432.00 €** | 15.0 % | **15.3 %** | 432.46 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SG S26 FIXFLM2-1704-RD | 19.50 € | **20.00 €** | 12.0 % | **14.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Copertinto BL439G10 | 56.50 € | **57.00 €** | 5.5 % | **6.5 %** | 57.03 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.50 € | **138.00 €** | 15.2 % | **15.6 %** | 138.03 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 208.00 € | **208.50 €** | 50.4 % | **50.8 %** | 208.53 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 266.50 € | **267.00 €** | 57.2 % | **57.5 %** | 267.03 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Arctic White | 16.00 € | **16.50 €** | 6.4 % | **9.8 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Onyx Black | 16.00 € | **16.50 €** | 6.4 % | **9.8 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Sakura Pink | 16.00 € | **16.50 €** | 6.4 % | **9.8 %** | 16.53 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.00 € | **335.50 €** | 22.7 % | **22.9 %** | 335.53 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 152.00 € | **152.50 €** | 31.1 % | **31.5 %** | 152.53 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2659 | 69.00 € | **69.50 €** | 11.9 % | **12.7 %** | 69.55 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-DC24PL3C-L 2.4 Mpix venkovní dome kamera 4v1 ... | 50.00 € | **50.50 €** | 15.7 % | **16.9 %** | 50.55 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 200.00 € | **200.50 €** | 19.4 % | **19.7 %** | 200.55 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.00 € | **71.50 €** | 16.5 % | **17.3 %** | 71.56 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.00 € | **266.50 €** | 7.3 % | **7.5 %** | 266.56 € | cena podľa najlacnejšieho iného predajcu |
| Solac New Optima Pro PV2114 | 31.50 € | **32.00 €** | 42.3 % | **44.5 %** | 32.08 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 295.00 € | **295.50 €** | 43.1 % | **43.3 %** | 295.58 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533W1-EU (biela) | 98.00 € | **98.50 €** | 14.8 % | **15.3 %** | 98.58 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 41.00 € | **41.50 €** | 7.4 % | **8.7 %** | 41.59 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RACING SRP2 Zadný držiak | 42.00 € | **42.50 €** | 15.1 % | **16.5 %** | 42.59 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 144.50 € | **145.00 €** | 7.7 % | **8.1 %** | 145.09 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 163.00 € | **163.50 €** | 12.4 % | **12.7 %** | 163.60 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 351.50 € | **352.00 €** | 35.1 % | **35.3 %** | 352.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight elektrický sušiak uterákov 130W | 98.00 € | **98.50 €** | 50.3 % | **51.0 %** | 98.61 € | cena podľa najlacnejšieho iného predajcu |
| Behringer P16 HQ 16-kanálový osobný monitorovací mix... | 187.00 € | **187.50 €** | 25.8 % | **26.1 %** | 187.63 € | cena podľa najlacnejšieho iného predajcu |
| Klark Teknik DN200 V2 DI Box | 187.00 € | **187.50 €** | 20.1 % | **20.5 %** | 187.63 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped DeerRun S500 Pro (čierny) | 325.00 € | **325.50 €** | 51.8 % | **52.0 %** | 325.63 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 287.00 € | **287.50 €** | 16.3 % | **16.5 %** | 287.64 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 16.00 € | **16.50 €** | 14.3 % | **17.9 %** | 16.64 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 247.00 € | **247.50 €** | 31.0 % | **31.3 %** | 247.65 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 362.50 € | **363.00 €** | 81.3 % | **81.5 %** | 363.15 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V65 Smartwatch (Gray) | 30.00 € | **30.50 €** | 11.2 % | **13.0 %** | 30.67 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný obojsmerný merač energie Avatto WiFi WP... | 17.00 € | **17.50 €** | 11.5 % | **14.7 %** | 17.67 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 337.50 € | **338.00 €** | 23.6 % | **23.8 %** | 338.17 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM9802B | 128.00 € | **128.50 €** | 8.6 % | **9.0 %** | 128.68 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 5 powered studio monitor | 258.00 € | **258.50 €** | 48.4 % | **48.6 %** | 258.68 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer Air PR... | 58.50 € | **59.00 €** | 6.9 % | **7.8 %** | 59.19 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 156.50 € | **157.00 €** | 10.1 % | **10.5 %** | 157.19 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.50 € | **39.00 €** | 20.6 % | **22.2 %** | 39.19 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 375.00 € | **375.50 €** | 49.2 % | **49.4 %** | 375.69 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.00 € | **233.50 €** | 23.9 % | **24.1 %** | 233.70 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 315.00 € | **315.50 €** | 5.5 % | **5.6 %** | 315.70 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 320.00 € | **320.50 €** | 13.0 % | **13.1 %** | 320.70 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3512B | 101.00 € | **101.50 €** | 35.8 % | **36.5 %** | 101.71 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 387.50 € | **388.00 €** | 8.6 % | **8.7 %** | 388.22 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx QX1222USB mixpult s USB a efektmi | 283.00 € | **283.50 €** | 55.0 % | **55.3 %** | 283.75 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 11.00 € | **11.50 €** | 16.3 % | **21.6 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (sivá) | 11.00 € | **11.50 €** | 20.7 % | **26.2 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 11.00 € | **11.50 €** | 16.3 % | **21.6 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 20.00 € | **20.50 €** | 14.4 % | **17.3 %** | 20.77 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING KS Pro RS095 | 341.00 € | **341.50 €** | 11.3 % | **11.5 %** | 341.77 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 497.50 € | **498.00 €** | 5.5 % | **5.6 %** | 498.30 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 542.00 € | **542.50 €** | 46.0 % | **46.1 %** | 542.85 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS4K-24 24V/3800W | 291.50 € | **292.00 €** | 5.2 % | **5.3 %** | 292.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO540FR | 62.50 € | **63.00 €** | 17.7 % | **18.6 %** | 63.39 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 995.00 € | **995.50 €** | 13.5 % | **13.5 %** | 995.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.50 € | **10.00 €** | 19.7 % | **26.0 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.50 € | **158.90 €** | 16.0 % | **16.3 %** | 158.93 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 125.50 € | **125.90 €** | 20.6 % | **21.0 %** | 125.95 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-0360 4.0 Mpix venkovní IP dome kamera... | 117.50 € | **117.90 €** | 17.5 % | **17.9 %** | 117.95 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRALINK ULM300MIC wireless microphone set | 124.50 € | **124.90 €** | 30.2 % | **30.6 %** | 124.95 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon CRITICAL MASS, vokálny efektový pedál | 124.50 € | **124.90 €** | 20.3 % | **20.7 %** | 124.95 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.50 € | **217.90 €** | 13.7 % | **13.9 %** | 217.99 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.50 € | **217.90 €** | 36.7 % | **36.9 %** | 217.99 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 195.50 € | **195.90 €** | 7.6 % | **7.8 %** | 195.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 132.50 € | **132.90 €** | 10.8 % | **11.1 %** | 133.00 € | cena podľa najlacnejšieho iného predajcu |
| Držák projektoru Cabletech UCH0148 univerzální | 14.50 € | **14.90 €** | 14.8 % | **18.0 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| LTE filtr Fagor LBF 694 (5-694 MHz, LTE 5G útlum 45 dB) | 14.50 € | **14.90 €** | 14.8 % | **18.0 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.50 € | **22.90 €** | 11.5 % | **13.5 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| RainPoint WiFi 8-zónový regulátor zavlažovania | 59.50 € | **59.90 €** | 16.8 % | **17.6 %** | 59.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 35.50 € | **35.90 €** | 13.8 % | **15.1 %** | 35.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 35.50 € | **35.90 €** | 16.8 % | **18.1 %** | 35.96 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.50 € | **52.90 €** | 8.9 % | **9.7 %** | 52.99 € | cena podľa najlacnejšieho iného predajcu |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 20.50 € | **20.90 €** | 16.3 % | **18.6 %** | 20.99 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 22.50 € | **22.90 €** | 11.1 % | **13.0 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Compact | 37.50 € | **37.90 €** | 7.3 % | **8.4 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 330.50 € | **330.90 €** | 16.6 % | **16.7 %** | 330.93 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D70 | 287.50 € | **287.90 €** | 27.7 % | **27.8 %** | 287.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.90 € | **5.20 €** | 27.3 % | **35.1 %** | 5.28 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 262.90 € | **263.00 €** | 22.9 % | **23.0 %** | 263.23 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 319.90 € | **320.00 €** | 29.8 % | **29.8 %** | 320.25 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 264.90 € | **265.00 €** | 5.1 % | **5.1 %** | 265.39 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI DI600P DI box | 32.90 € | **33.00 €** | 11.3 % | **11.6 %** | 33.01 € | cena podľa najlacnejšieho iného predajcu |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 19.90 € | **20.00 €** | 12.3 % | **12.8 %** | 20.02 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix venkovní kamera 4v1 s ... | 56.90 € | **57.00 €** | 16.9 % | **17.1 %** | 57.05 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 29.90 € | **30.00 €** | 18.6 % | **19.0 %** | 30.09 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.90 € | **52.00 €** | 6.0 % | **6.2 %** | 52.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.17 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.90 € | **90.00 €** | 40.5 % | **40.6 %** | 90.02 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link PG1200 KIT G.hn adaptér (... | 93.90 € | **94.00 €** | 5.5 % | **5.6 %** | 94.05 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.90 € | **131.00 €** | 25856.8 % | **25876.6 %** | 131.09 € | cena podľa najlacnejšieho iného predajcu |
| Šipky Elektronický terč Trizand 27046 | 83.90 € | **84.00 €** | 17.4 % | **17.5 %** | 84.09 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 174.90 € | **175.00 €** | 26.5 % | **26.6 %** | 175.10 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE R492PW | 189.90 € | **190.00 €** | 5.0 % | **5.1 %** | 190.38 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (131)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 324.50 € | **228.00 €** | 77.9 % | **25.0 %** | 228.04 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pix Cut 2 v 1 | 311.00 € | **268.50 €** | 33.3 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 194.00 € | **169.50 €** | 25.3 % | **9.5 %** | 169.88 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 426.50 € | **404.00 €** | 11.6 % | **5.7 %** | 404.10 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP400R RGB | 156.90 € | **136.00 €** | 43.1 % | **24.1 %** | 136.13 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 880 PRO 250 Ohm | 199.00 € | **181.90 €** | 15.0 % | **5.1 %** | 167.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 119.50 € | **103.90 €** | 40.3 % | **22.0 %** | 103.96 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 627.90 € | **616.00 €** | 17.2 % | **15.0 %** | 616.17 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S AI | 64.50 € | **54.50 €** | 39.1 % | **17.5 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM005 15 kg výrobník ľadu (čierny) | 149.50 € | **139.50 €** | 21.8 % | **13.6 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu |
| Midland G9 Pro, PMR+LPD, single | 99.90 € | **91.90 €** | 14.6 % | **5.4 %** | 91.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 215.50 € | **207.90 €** | 12.9 % | **8.9 %** | 208.00 € | cena podľa najlacnejšieho iného predajcu |
| KMP C98 (CL-546 XL) | 27.50 € | **20.00 €** | 75.4 % | **27.5 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 37.50 € | **31.00 €** | 36.5 % | **12.9 %** | 31.43 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD200XS (biely) | 57.50 € | **52.00 €** | 36.7 % | **23.6 %** | 52.34 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 265.50 € | **260.50 €** | 10.6 % | **8.5 %** | 260.55 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 86.00 € | **81.50 €** | 13.8 % | **7.8 %** | 81.62 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 59.00 € | **54.50 €** | 21.9 % | **12.6 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 59.00 € | **54.50 €** | 22.6 % | **13.2 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 165.00 € | **160.50 €** | 25.3 % | **21.9 %** | 160.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 34.00 € | **29.50 €** | 41.6 % | **22.9 %** | 29.70 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 4K + Tripod | 54.00 € | **50.00 €** | 21.3 % | **12.4 %** | 50.25 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 37.50 € | **33.50 €** | 61.1 % | **43.9 %** | 33.80 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 31.50 € | **27.50 €** | 53.1 % | **33.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM017 20 kg výrobník ľadových kociek (čierny) | 212.00 € | **208.90 €** | 23.3 % | **21.5 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Note 17 4/128GB Sky Teal | 230.50 € | **227.50 €** | 6.6 % | **5.2 %** | 200.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 143.00 € | **140.00 €** | 50.2 % | **47.1 %** | 140.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 25.50 € | **22.90 €** | 26.0 % | **13.1 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 103.00 € | **100.50 €** | 16.6 % | **13.8 %** | 100.64 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **12.00 €** | 54.3 % | **27.7 %** | 12.16 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 77.50 € | **75.00 €** | 13.6 % | **10.0 %** | 75.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 14.00 € | **11.50 €** | 31.0 % | **7.6 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B2-EU | 241.00 € | **238.90 €** | 17.0 % | **16.0 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 46.90 € | **44.90 €** | 19.9 % | **14.8 %** | 44.96 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 361.00 € | **359.00 €** | 9.2 % | **8.6 %** | 359.10 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24010-56 | 40.50 € | **38.50 €** | 10.9 % | **5.4 %** | 38.83 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V35 s Dynamický mikrofon | 59.00 € | **57.00 €** | 38.5 % | **33.8 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 bez ventilátorov (b... | 29.00 € | **27.00 €** | 47.4 % | **37.3 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.00 € | **22.50 €** | 17.4 % | **10.1 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 102.50 € | **101.00 €** | 13.7 % | **12.0 %** | 101.19 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu PLA Classic (čierny), 1,75 mm, 1 kg | 13.00 € | **11.50 €** | 44.8 % | **28.1 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.50 € | **20.00 €** | 34.3 % | **24.9 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B4 (modrá) | 65.50 € | **64.00 €** | 10.6 % | **8.1 %** | 64.30 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU3941WBW | 358.90 € | **357.90 €** | 5.3 % | **5.0 %** | 341.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Magnetický upevňovací adaptér Sunnylife s guľovým kĺ... | 17.00 € | **16.00 €** | 21.5 % | **14.3 %** | 16.04 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.50 € | **11.50 €** | 17.1 % | **7.7 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG S24 FE FIXOP3-1391-BK | 12.50 € | **11.50 €** | 17.1 % | **7.7 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 123.50 € | **122.50 €** | 8.1 % | **7.2 %** | 122.56 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V69 smartwatch (black) | 36.50 € | **35.50 €** | 18.7 % | **15.4 %** | 35.57 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdr SG A16 4G/5G FIXOP3-1500-BK | 12.50 € | **11.50 €** | 16.8 % | **7.5 %** | 11.57 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.00 € | **30.00 €** | 10.2 % | **6.6 %** | 30.10 € | cena podľa najlacnejšieho iného predajcu |
| Aligator AUDIO COMBO set 3v1 AUC001 | 30.50 € | **29.50 €** | 11.7 % | **8.1 %** | 29.60 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 403.90 € | **402.90 €** | 7.1 % | **6.8 %** | 403.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 213.90 € | **212.90 €** | 38545.0 % | **38364.3 %** | 213.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 648.90 € | **647.90 €** | 117135.8 % | **116955.1 %** | 648.00 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 12.00 € | **11.00 €** | 24.3 % | **13.9 %** | 11.19 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 37-75" Perlesmith PSTVS13 | 33.00 € | **32.00 €** | 19.3 % | **15.7 %** | 32.38 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED snehuliak Solight 1V233, 4 LED, 2 × AA | 12.50 € | **11.50 €** | 43.5 % | **32.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný veniec Solight 1V239, priemer 40 cm, 15... | 13.50 € | **12.50 €** | 44.0 % | **33.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 11.50 € | **10.50 €** | 35.1 % | **23.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM016 12 kg výrobník ľadových kociek (čierny) | 76.50 € | **75.50 €** | 12.4 % | **10.9 %** | 75.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2354B2 Stepper (Black) | 61.50 € | **60.50 €** | 23.5 % | **21.5 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.00 € | **77.00 €** | 14.3 % | **12.8 %** | 77.44 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot Blast black od Silverlit | 28.90 € | **28.00 €** | 14.6 % | **11.0 %** | 28.05 € | cena podľa najlacnejšieho iného predajcu |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 25.50 € | **24.90 €** | 9.2 % | **6.6 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 27.50 € | **27.00 €** | 11.6 % | **9.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 13.5 % | **11.3 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Behringer GMX-500 | 41.00 € | **40.50 €** | 15.3 % | **13.9 %** | 40.60 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 33.50 € | **33.00 €** | 13.8 % | **12.1 %** | 33.14 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 33.50 € | **33.00 €** | 13.8 % | **12.1 %** | 33.14 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 274.00 € | **273.50 €** | 32.3 % | **32.1 %** | 273.69 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 274.00 € | **273.50 €** | 29.2 % | **28.9 %** | 273.69 € | cena podľa najlacnejšieho iného predajcu |
| Brita Fill&Go Active fil.láhev0,6l modrá | 12.50 € | **12.00 €** | 18.0 % | **13.3 %** | 12.26 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 HD | 21.50 € | **21.00 €** | 22.8 % | **19.9 %** | 21.27 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 24.50 € | **24.00 €** | 12.5 % | **10.2 %** | 24.28 € | cena podľa najlacnejšieho iného predajcu |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 17.50 € | **17.00 €** | 71.6 % | **66.7 %** | 17.28 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXLR500E | 15.50 € | **15.00 €** | 40.5 % | **36.0 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 webová kamera | 55.00 € | **54.50 €** | 21.2 % | **20.1 %** | 54.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 550.00 € | **549.50 €** | 12.6 % | **12.5 %** | 549.81 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 20.50 € | **20.00 €** | 11.9 % | **9.1 %** | 20.34 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (čierne) | 20.50 € | **20.00 €** | 18.1 % | **15.2 %** | 20.34 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 20.50 € | **20.00 €** | 16.4 % | **13.5 %** | 20.34 € | cena podľa najlacnejšieho iného predajcu |
| Spúšťacia jednotka UTRAI JS10 | 96.00 € | **95.50 €** | 16.2 % | **15.6 %** | 95.88 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 63.50 € | **63.00 €** | 17.0 % | **16.0 %** | 63.39 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 73.50 € | **73.00 €** | 7.8 % | **7.1 %** | 73.39 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.00 € | **86.50 €** | 21.7 % | **21.0 %** | 86.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 52.50 € | **52.00 €** | 9.4 % | **8.4 %** | 52.39 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 266.50 € | **266.00 €** | 9.2 % | **9.0 %** | 266.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 246.00 € | **245.50 €** | 24.1 % | **23.8 %** | 245.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 276.00 € | **275.50 €** | 8.7 % | **8.5 %** | 275.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 102.50 € | **102.00 €** | 6.9 % | **6.4 %** | 102.39 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 261.50 € | **261.00 €** | 8.0 % | **7.7 %** | 261.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 150.50 € | **150.00 €** | 6.4 % | **6.1 %** | 150.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.50 € | **117.00 €** | 23199.6 % | **23100.5 %** | 117.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 79.50 € | **79.00 €** | 36.6 % | **35.8 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 186.50 € | **186.00 €** | 6.7 % | **6.4 %** | 186.39 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 276.00 € | **275.50 €** | 30.1 % | **29.9 %** | 275.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 310.00 € | **309.50 €** | 5.5 % | **5.3 %** | 309.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 609.00 € | **608.50 €** | 6.0 % | **5.9 %** | 608.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 639.00 € | **638.50 €** | 7.9 % | **7.8 %** | 638.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 687.00 € | **686.50 €** | 12.1 % | **12.0 %** | 686.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšia reťaz s žiarovkami, 10 žiarovi... | 13.00 € | **12.50 €** | 42.4 % | **37.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 15.00 € | **14.50 €** | 49.5 % | **44.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Biely vianočný LED lampáš Solight 1V266, 33 cm, 3 × ... | 13.00 € | **12.50 €** | 41.9 % | **36.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 46.00 € | **45.50 €** | 7.8 % | **6.6 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 46.00 € | **45.50 €** | 7.8 % | **6.6 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 68.50 € | **68.00 €** | 13.1 % | **12.3 %** | 68.42 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 21.50 € | **21.00 €** | 7.6 % | **5.1 %** | 21.49 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.00 €** | 13.6 % | **10.5 %** | 18.49 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 89.50 € | **89.00 €** | 7.4 % | **6.8 %** | 89.49 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.50 € | **22.00 €** | 11.7 % | **9.2 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 77.50 € | **77.00 €** | 17.3 % | **16.6 %** | 77.49 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.50 € | **35.00 €** | 16.8 % | **15.1 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC111X Pomalý hrnec 3,5 l | 87.90 € | **87.50 €** | 8.2 % | **7.8 %** | 87.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 112.90 € | **112.50 €** | 8.3 % | **7.9 %** | 112.79 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 30.90 € | **30.50 €** | 6.5 % | **5.1 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kolečka pro kancelářskou židli Ruhhy 25280 | 16.90 € | **16.50 €** | 48.7 % | **45.2 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 21.90 € | **21.50 €** | 9.6 % | **7.6 %** | 21.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 22.90 € | **22.50 €** | 11.2 % | **9.3 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 26.90 € | **26.50 €** | 19.4 % | **17.7 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4561S | 21.90 € | **21.50 €** | 8.1 % | **6.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 36.90 € | **36.50 €** | 17.7 % | **16.4 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz do okna – Santa Solight 1V251, 12... | 2.70 € | **2.50 €** | 44.4 % | **33.7 %** | 2.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 36.00 € | **35.90 €** | 6.1 % | **5.8 %** | 35.96 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 silver | 24.00 € | **23.90 €** | 10.2 % | **9.8 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.00 € | **32.90 €** | 7.2 % | **6.9 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 36.00 € | **35.90 €** | 39.4 % | **39.0 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les a jeleň Solight 1V223-A,... | 5.40 € | **5.30 €** | 36.8 % | **34.2 %** | 5.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBG-603S2R s 3 horákmi | 109.00 € | **108.90 €** | 22.6 % | **22.4 %** | 108.99 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 153.00 € | **152.90 €** | 20.1 % | **20.0 %** | 153.00 € | cena podľa najlacnejšieho iného predajcu |

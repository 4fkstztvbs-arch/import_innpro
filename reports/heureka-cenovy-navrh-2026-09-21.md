# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-21

Vstup: `premiumstore-sk_2026-09-21_22-46.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6874**
- Návrh **zvýšiť** cenu: **163** produktov
- Návrh **znížiť** cenu: **233** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6478** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **7**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **410**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (163)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Kalibrátor procesov Uni-T UT705 | 272.50 € | **324.90 €** | 8.4 % | **29.3 %** | 325.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 418.50 € | **466.90 €** | 15.0 % | **28.3 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 418.50 € | **466.90 €** | 15.0 % | **28.3 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, zlatá) | 232.00 € | **275.50 €** | 5.2 % | **24.9 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 566.00 € | **608.50 €** | 6.3 % | **14.3 %** | 608.70 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality Halot X1 Combo | 461.50 € | **500.00 €** | 5.1 % | **13.8 %** | 500.20 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 Max | 391.50 € | **425.00 €** | 5.1 % | **14.1 %** | 425.37 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon R3T Soundbar | 83.00 € | **116.50 €** | 6.0 % | **48.7 %** | 116.89 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 454.00 € | **484.00 €** | 7.0 % | **14.1 %** | 484.09 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 387.00 € | **409.00 €** | 15.3 % | **21.8 %** | 409.19 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, zlatá) | 253.50 € | **275.50 €** | 14.9 % | **24.9 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-704A | 82.50 € | **104.00 €** | 15.0 % | **45.0 %** | 104.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-704B 9 W UV externý filter | 98.00 € | **118.90 €** | 14.9 % | **39.3 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW404B 9 W/UV vonkajší filter | 89.00 € | **108.90 €** | 14.7 % | **40.3 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW403B 9 W UV externý filter | 75.50 € | **94.00 €** | 14.9 % | **43.1 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 147.50 € | **165.50 €** | 11.9 % | **25.6 %** | 165.75 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW403A | 72.00 € | **89.50 €** | 14.9 % | **42.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový masážny prístroj/regeneračná obuv s techn... | 542.90 € | **559.90 €** | 15.0 % | **18.6 %** | 560.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BMX201M2BG | 171.00 € | **188.00 €** | 9.0 % | **19.9 %** | 188.33 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare RayNeo Air 4 Pro AR | 300.00 € | **315.50 €** | 5.9 % | **11.3 %** | 315.58 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 333.00 € | **348.50 €** | 8.6 % | **13.7 %** | 348.69 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-402B Externý filter | 60.50 € | **74.00 €** | 14.8 % | **40.4 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 104.00 € | **117.00 €** | 8.2 % | **21.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW404A | 77.00 € | **89.50 €** | 15.1 % | **33.7 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na televízor Perlgear PGLF8B-N1 | 41.50 € | **54.00 €** | 14.5 % | **49.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-703B 9 W externý UV filter | 86.50 € | **98.90 €** | 15.3 % | **31.9 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW504A | 47.50 € | **59.50 €** | 15.4 % | **44.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 329.50 € | **341.00 €** | 6.9 % | **10.7 %** | 341.02 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-302 | 42.90 € | **54.00 €** | 14.9 % | **44.7 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A185W03 18,5" prenosný monitor | 131.50 € | **142.50 €** | 12.1 % | **21.4 %** | 142.67 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 229.50 € | **240.50 €** | 8.0 % | **13.2 %** | 240.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 164.00 € | **174.90 €** | 11.4 % | **18.8 %** | 174.91 € | cena podľa najlacnejšieho iného predajcu |
| Súprava umývacej a kondicionovacej stanice ELEGOO Me... | 120.00 € | **130.00 €** | 8.9 % | **18.0 %** | 130.40 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 27.00 € | **37.00 €** | 15.1 % | **57.7 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 144.90 € | **154.50 €** | 14.4 % | **22.0 %** | 154.72 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V060 12000mah návnada loď | 117.90 € | **127.00 €** | 14.3 % | **23.2 %** | 127.25 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR PD100 – kombinovaná sada | 45.00 € | **54.00 €** | 15.3 % | **38.4 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 110.50 € | **119.00 €** | 5.3 % | **13.4 %** | 119.48 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-402A | 51.50 € | **59.50 €** | 15.1 % | **33.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 59.00 € | **66.50 €** | 10.0 % | **24.0 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-604B | 32.00 € | **39.50 €** | 14.2 % | **41.0 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T UT117C | 126.00 € | **133.00 €** | 5.4 % | **11.2 %** | 133.19 € | cena podľa najlacnejšieho iného predajcu |
| FM Transmitter Baseus S-09 Pro, Bluetooth (čierny) | 11.50 € | **18.50 €** | 22.1 % | **96.4 %** | 18.89 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-303A | 59.00 € | **65.90 €** | 13.5 % | **26.8 %** | 65.97 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32BWBXC | 61.90 € | **68.50 €** | 10.5 % | **22.2 %** | 68.66 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W03 16" prenosný monitor | 87.50 € | **94.00 €** | 16.1 % | **24.8 %** | 94.21 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Black | 50.00 € | **56.50 €** | 14.5 % | **29.4 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Pink | 50.00 € | **56.50 €** | 14.5 % | **29.4 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO White | 50.00 € | **56.50 €** | 14.5 % | **29.4 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 28.00 € | **34.50 €** | 8.0 % | **33.1 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Ponorné čerpadlo SUNSUN YQP-3500 | 27.00 € | **33.50 €** | 14.3 % | **41.8 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 58.00 € | **64.50 €** | 5.1 % | **16.8 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 60 Ah  Victron Energy AGM Sup... | 173.50 € | **180.00 €** | 11.1 % | **15.3 %** | 180.44 € | cena podľa najlacnejšieho iného predajcu |
| Meross MOP320MA-EU WiFi inteligentná napájacia lišta... | 34.50 € | **40.50 €** | 15.8 % | **35.9 %** | 40.73 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 316.50 € | **322.00 €** | 5.2 % | **7.0 %** | 322.12 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN CUP-809 | 27.00 € | **32.50 €** | 14.6 % | **38.0 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Priemyselná infračervená termokamera Habotest HT820 | 273.90 € | **279.00 €** | 15.0 % | **17.2 %** | 279.08 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST9100 | 37.50 € | **42.50 €** | 17.8 % | **33.5 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MY700BF0 | 121.90 € | **126.90 €** | 15.6 % | **20.3 %** | 126.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 461.90 € | **466.90 €** | 15.0 % | **16.3 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 461.90 € | **466.90 €** | 15.0 % | **16.3 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 100.50 € | **105.50 €** | 5.2 % | **10.4 %** | 105.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 83.50 € | **88.50 €** | 7.6 % | **14.0 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 26.50 € | **31.00 €** | 9.3 % | **27.8 %** | 31.04 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W05 14" prenosný monitor | 83.00 € | **87.50 €** | 15.6 % | **21.9 %** | 87.79 € | cena podľa najlacnejšieho iného predajcu |
| Skaner 3D Creality RaptorX | 2810.50 € | **2815.00 €** | 15.5 % | **15.7 %** | 2815.40 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 320.50 € | **324.90 €** | 9.6 % | **11.1 %** | 324.97 € | cena podľa najlacnejšieho iného predajcu |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 20.90 € | **25.00 €** | 16.1 % | **38.9 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Maono BA92 Boom Arm Black | 48.00 € | **52.00 €** | 9.5 % | **18.7 %** | 52.46 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW503 Vonkajší filter | 23.00 € | **27.00 €** | 15.1 % | **35.2 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2113 PRO Ovládanie letu PC | 28.90 € | **32.50 €** | 5.1 % | **18.2 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GP3000 59,2 Wh štartér | 56.00 € | **59.50 €** | 14.8 % | **21.9 %** | 59.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **36.50 €** | 14.3 % | **26.4 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 168.50 € | **172.00 €** | 14.9 % | **17.3 %** | 172.29 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW502 | 20.50 € | **24.00 €** | 16.4 % | **36.3 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality Sermoon S1 | 2338.90 € | **2341.90 €** | 5.0 % | **5.2 %** | 2341.93 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 22.50 € | **25.50 €** | 13.1 % | **28.2 %** | 25.54 € | cena podľa najlacnejšieho iného predajcu |
| 4-kanálový teplomer Uni-T UT325F | 95.50 € | **98.50 €** | 5.1 % | **8.5 %** | 98.59 € | cena podľa najlacnejšieho iného predajcu |
| Creality CR-Scan Raptor 3D Scanner | 867.50 € | **870.50 €** | 5.0 % | **5.4 %** | 870.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 85.00 € | **88.00 €** | 5.8 % | **9.5 %** | 88.22 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 85.00 € | **88.00 €** | 5.8 % | **9.5 %** | 88.22 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 44.50 € | **47.50 €** | 41.2 % | **50.7 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Tough Resin 2.0 (biela) | 20.50 € | **23.50 €** | 18.9 % | **36.3 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Tough Resin 2.0 (Black) | 20.50 € | **23.50 €** | 20.0 % | **37.5 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 225.50 € | **228.50 €** | 14.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN YBG400 kaskádový filter | 17.90 € | **20.50 €** | 15.4 % | **32.2 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN YQP-1500F | 11.90 € | **14.50 €** | 14.8 % | **39.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 81.00 € | **83.50 €** | 14.4 % | **18.0 %** | 83.63 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY-T Android TV 4K UHD Android TV multimed... | 93.00 € | **95.50 €** | 30.7 % | **34.3 %** | 95.72 € | cena podľa najlacnejšieho iného predajcu |
| Zvukový mixér a zvuková karta AMC2 Neo | 43.00 € | **45.50 €** | 16.1 % | **22.9 %** | 45.78 € | cena podľa najlacnejšieho iného predajcu |
| Motor táhlový HARL 3624+, délka výtahu 24" | 59.50 € | **62.00 €** | 32.0 % | **37.5 %** | 62.30 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A26 5G FIXOP3-1501-BK | 15.00 € | **17.50 €** | 38.6 % | **61.7 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Ponorné čerpadlo SUNSUN YQP-2500 | 10.90 € | **13.00 €** | 14.6 % | **36.7 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1444.90 € | **1447.00 €** | 7.5 % | **7.7 %** | 1447.28 € | cena podľa najlacnejšieho iného predajcu |
| Turecký kávovar HiBREW CM1179_EU | 39.00 € | **41.00 €** | 5.4 % | **10.9 %** | 41.02 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro s RGB osvetlením (biely) | 50.90 € | **52.50 €** | 18.4 % | **22.2 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro s RGB osvetlením (čierny) | 50.90 € | **52.50 €** | 18.4 % | **22.2 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 23310-56/RH | 45.90 € | **47.50 €** | 10.6 % | **14.4 %** | 47.60 € | cena podľa najlacnejšieho iného predajcu |
| Čistič dna akvária SUNSUN HXS-02 | 15.90 € | **17.50 €** | 15.0 % | **26.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 79.90 € | **81.50 €** | 10.1 % | **12.3 %** | 81.60 € | cena podľa najlacnejšieho iného predajcu |
| ETA Nubela 2569 90100, bílý | 27.00 € | **28.50 €** | 46.5 % | **54.7 %** | 28.58 € | cena podľa najlacnejšieho iného predajcu |
| FENDA F&D A180X | 41.50 € | **43.00 €** | 8.5 % | **12.4 %** | 43.13 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Habotest HT86B | 11.00 € | **12.50 €** | 7.6 % | **22.3 %** | 12.65 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter Habotest HT113 | 10.50 € | **12.00 €** | 6.3 % | **21.5 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo 9300M set klávesnice a myši černý | 30.50 € | **32.00 €** | 6.4 % | **11.6 %** | 32.17 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD100X (biely) | 32.50 € | **34.00 €** | 20.5 % | **26.0 %** | 34.27 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 46.00 € | **47.50 €** | 18.8 % | **22.7 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 46.00 € | **47.50 €** | 18.8 % | **22.7 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 14.50 € | **16.00 €** | 6.6 % | **17.6 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 15.00 € | **16.50 €** | 21.6 % | **33.7 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXSH1500E | 31.00 € | **32.50 €** | 12.4 % | **17.8 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 38.50 € | **40.00 €** | 5.9 % | **10.1 %** | 40.46 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 38.50 € | **40.00 €** | 5.9 % | **10.1 %** | 40.46 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 15.90 € | **17.00 €** | 12.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 14.50 € | **15.50 €** | 10.4 % | **18.0 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Yogurella 617 | 27.00 € | **28.00 €** | 7.2 % | **11.2 %** | 28.09 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 103.50 € | **104.50 €** | 20.3 % | **21.4 %** | 104.59 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 LED sviečok s časovačom Solight 1V284, 6,5 cm... | 8.80 € | **9.80 €** | 35.0 % | **50.3 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26730-56/RH | 32.50 € | **33.50 €** | 12.2 % | **15.7 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 11.50 € | **12.50 €** | 14.3 % | **24.2 %** | 12.63 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-006-33 Dvojúčelový fotografický dáždnik | 19.00 € | **20.00 €** | 28.4 % | **35.2 %** | 20.16 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E200SM | 16.50 € | **17.50 €** | 11.5 % | **18.3 %** | 17.68 € | cena podľa najlacnejšieho iného predajcu |
| Herné reproduktory Onikuma L2 | 12.00 € | **13.00 €** | 11.8 % | **21.1 %** | 13.25 € | cena podľa najlacnejšieho iného predajcu |
| PXN-F16 Flight Joystick for PC | 31.50 € | **32.50 €** | 7.5 % | **10.9 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 29.00 € | **30.00 €** | 32.4 % | **36.9 %** | 30.27 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60Mi | 26.00 € | **27.00 €** | 7.5 % | **11.7 %** | 27.37 € | cena podľa najlacnejšieho iného predajcu |
| Múdra zásuvka Ezviz CS-T30-10B 10A, minitoring spotreby | 10.00 € | **11.00 €** | 5.2 % | **15.7 %** | 11.38 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN CUP-807 | 25.00 € | **26.00 €** | 14.7 % | **19.3 %** | 26.38 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 81.00 € | **82.00 €** | 24.4 % | **25.9 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu |
| Tefal EY8328E0 | 118.50 € | **119.50 €** | 5.1 % | **6.0 %** | 119.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Creator Tripod FIXCRT-BK | 44.00 € | **45.00 €** | 11.4 % | **13.9 %** | 45.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 31.00 € | **32.00 €** | 6.1 % | **9.5 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Standand Resin (Black) | 11.00 € | **12.00 €** | 16.3 % | **26.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Standard Resin (Grey) | 11.00 € | **12.00 €** | 20.7 % | **31.7 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 39.00 € | **40.00 €** | 7.3 % | **10.1 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.00 € | **14.90 €** | 12.1 % | **19.3 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 14.00 € | **14.90 €** | 6.3 % | **13.1 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Standard Resin (White) | 11.00 € | **11.90 €** | 16.3 % | **25.8 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Herní mikrofon Maono DGM20 (černý) | 26.90 € | **27.50 €** | 13.5 % | **16.0 %** | 27.60 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DGM20 (biely) | 26.90 € | **27.50 €** | 13.8 % | **16.3 %** | 27.60 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.90 € | **15.50 €** | 12.8 % | **17.3 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie Telesin pre GoPro Hero 13 / 12 / ... | 19.00 € | **19.50 €** | 14.6 % | **17.6 %** | 19.55 € | cena podľa najlacnejšieho iného predajcu |
| Filament Hyper PETG Creality (zelený) | 11.00 € | **11.50 €** | 12.8 % | **17.9 %** | 11.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.00 € | **19.50 €** | 15.5 % | **18.6 %** | 19.67 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.00 € | **12.50 €** | 10.9 % | **15.5 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 26.50 € | **27.00 €** | 8.9 % | **10.9 %** | 27.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 16.50 € | **17.00 €** | 5.4 % | **8.6 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 30.50 € | **31.00 €** | 11.0 % | **12.8 %** | 31.21 € | cena podľa najlacnejšieho iného predajcu |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.00 € | **17.50 €** | 15.0 % | **18.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 64.50 € | **65.00 €** | 10.3 % | **11.1 %** | 65.25 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 12.50 € | **13.00 €** | 15.5 % | **20.1 %** | 13.33 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 160.50 € | **161.00 €** | 5.7 % | **6.0 %** | 161.37 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (grey) | 17.00 € | **17.50 €** | 23.4 % | **27.0 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| RGB Led Light Stick PULUZ 30cm | 17.00 € | **17.50 €** | 18.3 % | **21.8 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| BoboVR F3 rozhranie pre tvár | 29.50 € | **30.00 €** | 38.6 % | **40.9 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Svetlomet Superfire HL06, 500lm, USB | 12.50 € | **12.90 €** | 10.8 % | **14.4 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku FNIRSI FDM-02 | 28.90 € | **29.00 €** | 6.2 % | **6.5 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 31.90 € | **32.00 €** | 37.4 % | **37.8 %** | 32.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny decibelomer Habotest HT622B USB A/C | 26.90 € | **27.00 €** | 15.2 % | **15.6 %** | 27.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight otočná IP kamera | 33.90 € | **34.00 €** | 22.9 % | **23.3 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.50 € | **1.60 €** | 28.4 % | **36.9 %** | 1.61 € | cena podľa najlacnejšieho iného predajcu |
| Hyper PLA Filament Creality (Yellow) | 13.90 € | **14.00 €** | 16.3 % | **17.1 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| Teplovzdušný ventilátor TEESA TSA8027 | 13.90 € | **14.00 €** | 10.0 % | **10.8 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (233)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D tlačiareň ANYCUBIC Kobra S1 ACE 2 Pro Combo | 510.50 € | **466.50 €** | 15.0 % | **5.1 %** | 429.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje GEC5C41SG | 353.90 € | **313.50 €** | 21.8 % | **7.9 %** | 313.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality K1C 2025 | 401.90 € | **366.90 €** | 15.0 % | **5.0 %** | 331.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GORENJE NRS9182VXB1 | 872.00 € | **839.00 €** | 12.2 % | **7.9 %** | 839.42 € | cena podľa najlacnejšieho iného predajcu |
| Lenovo Idea Tab Pro 8/256GB (ZAHD0072CZ) | 603.90 € | **576.50 €** | 10.0 % | **5.0 %** | 521.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 429.00 € | **404.50 €** | 13.9 % | **7.4 %** | 404.70 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov ND/CPL s premenlivou hustotou Freewell ... | 379.90 € | **356.90 €** | 36.8 % | **28.5 %** | 357.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných ND/CPL filtrov Freewell Brandon Li... | 379.90 € | **356.90 €** | 36.8 % | **28.5 %** | 357.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných ND/CPL filtrov Freewell Brandon Li... | 379.90 € | **356.90 €** | 36.8 % | **28.5 %** | 357.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 379.90 € | **356.90 €** | 36.8 % | **28.5 %** | 357.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 473.00 € | **452.00 €** | 14.0 % | **9.0 %** | 452.21 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 407.50 € | **389.00 €** | 15.0 % | **9.8 %** | 389.37 € | cena podľa najlacnejšieho iného predajcu |
| Samsung The Frame Pro QE75LS03HW | 2578.50 € | **2561.90 €** | 5.7 % | **5.0 %** | 2171.45 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Systém riadenia vlákien Creality CFS | 252.50 € | **236.50 €** | 15.0 % | **7.7 %** | 236.70 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ľadových kociek Euhomy IM001, 1,2 l, 12 kg ... | 74.00 € | **60.50 €** | 42.4 % | **16.4 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov ND/CPL s premenlivou hustotou Freewell ... | 349.90 € | **338.90 €** | 29.7 % | **25.7 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných filtrov ND/CPL Freewell Brandon Li... | 349.90 € | **338.90 €** | 29.7 % | **25.7 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných ND/CPL filtrov Freewell Brandon Li... | 349.90 € | **338.90 €** | 29.7 % | **25.7 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných ND/CPL filtrov Freewell Brandon Li... | 349.90 € | **338.90 €** | 29.7 % | **25.7 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesná maska so svetelnou terapiou ANLAN 01-AGZMZ | 54.50 € | **45.00 €** | 77.3 % | **46.4 %** | 45.38 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HBL-801 kaskádový filter | 27.00 € | **18.00 €** | 103.4 % | **35.6 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-654A | 136.90 € | **129.50 €** | 37.5 % | **30.1 %** | 129.52 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-604B štvorzónový plynový sporák so sklen... | 136.90 € | **129.50 €** | 46.1 % | **38.2 %** | 129.52 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC026X | 47.00 € | **39.90 €** | 25.5 % | **6.5 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **327.00 €** | 14.9 % | **12.5 %** | 327.49 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (sivý) | 66.50 € | **60.50 €** | 25.8 % | **14.4 %** | 60.52 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN YBG-600 kaskádový filter | 31.00 € | **25.00 €** | 67.2 % | **34.9 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-304A Externý filter | 89.00 € | **84.00 €** | 39.8 % | **32.0 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 399.00 € | **395.00 €** | 13.9 % | **12.8 %** | 395.18 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 314.00 € | **310.00 €** | 13.6 % | **12.2 %** | 310.18 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 345.00 € | **341.00 €** | 13.7 % | **12.4 %** | 341.20 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 326.50 € | **322.50 €** | 13.7 % | **12.3 %** | 322.70 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **91.50 €** | 14.9 % | **10.1 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 49.50 € | **45.50 €** | 25.4 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X Pro s AI senzormi (sivý) | 71.50 € | **68.00 €** | 20.2 % | **14.3 %** | 68.09 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 136.50 € | **133.00 €** | 8.5 % | **5.7 %** | 133.23 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 941.00 € | **937.50 €** | 10.0 % | **9.6 %** | 937.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **91.50 €** | 15.2 % | **11.1 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **16.90 €** | 46.6 % | **23.9 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 55 mm | 29.90 € | **27.00 €** | 41.1 % | **27.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 58 mm | 29.90 € | **27.00 €** | 41.1 % | **27.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 62 mm | 29.90 € | **27.00 €** | 41.1 % | **27.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 72 mm | 29.90 € | **27.00 €** | 41.1 % | **27.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 82 mm | 29.90 € | **27.00 €** | 41.2 % | **27.5 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Crystal UHD UE43U8072H | 274.50 € | **271.90 €** | 12.8 % | **11.8 %** | 272.00 € | cena podľa najlacnejšieho iného predajcu |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 71.50 € | **69.00 €** | 8.9 % | **5.1 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tlakový stroj HiBREW H7B Cob | 550.50 € | **548.00 €** | 10.6 % | **10.1 %** | 548.02 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 64.50 € | **62.00 €** | 19.0 % | **14.4 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (čierny) | 64.50 € | **62.00 €** | 18.9 % | **14.3 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 867.50 € | **865.00 €** | 14.4 % | **14.1 %** | 865.38 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 49 mm | 29.90 € | **27.50 €** | 41.1 % | **29.8 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 328.90 € | **326.50 €** | 11.6 % | **10.8 %** | 326.70 € | cena podľa najlacnejšieho iného predajcu |
| AKAI APR-11R RED Rádio v retro stylu | 38.90 € | **36.90 €** | 10.8 % | **5.1 %** | 33.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.00 € | **86.00 €** | 14.7 % | **12.1 %** | 86.26 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26050-70 | 32.50 € | **30.50 €** | 16.3 % | **9.2 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX LUX Senior (zelený) | 158.90 € | **157.00 €** | 54.3 % | **52.4 %** | 157.18 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **34.00 €** | 15.0 % | **8.9 %** | 34.27 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **26.90 €** | 15.7 % | **9.2 %** | 26.92 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostic Scanner OBD2 Ancel AS100/AC100 | 18.50 € | **17.00 €** | 32.6 % | **21.9 %** | 17.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.50 € | **58.00 €** | 37.3 % | **33.8 %** | 58.43 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Set PowerClean M+náhr. zdarma | 21.00 € | **19.90 €** | 13.0 % | **7.1 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.70 € | **6.60 €** | 31.2 % | **12.5 %** | 6.64 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 228.00 € | **226.90 €** | 7.3 % | **6.8 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu |
| Motor na ovládanie závesov SwitchBot Rod 2 (biely) | 54.90 € | **53.90 €** | 25.6 % | **23.3 %** | 53.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **43.00 €** | 37.6 % | **34.5 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 258.90 € | **257.90 €** | 13.2 % | **12.8 %** | 258.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 399.90 € | **398.90 €** | 6.7 % | **6.5 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 401.90 € | **400.90 €** | 6.6 % | **6.3 %** | 401.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 231.90 € | **230.90 €** | 41797.0 % | **41616.4 %** | 231.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 669.90 € | **668.90 €** | 120929.8 % | **120749.1 %** | 669.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 367.90 € | **366.90 €** | 66367.9 % | **66187.3 %** | 367.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 36.00 € | **35.00 €** | 38.1 % | **34.3 %** | 35.13 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.50 € | **34.50 €** | 14.5 % | **11.3 %** | 34.67 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 35.50 € | **34.50 €** | 13.2 % | **10.0 %** | 34.67 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Gracioso horizontal | 204.50 € | **203.50 €** | 14.3 % | **13.7 %** | 203.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.50 € | **38.50 €** | 37.2 % | **33.7 %** | 38.81 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Graphite Black | 229.50 € | **228.50 €** | 16.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 229.50 € | **228.50 €** | 16.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 19.50 € | **18.50 €** | 20.2 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.90 € | **19.00 €** | 37.7 % | **31.5 %** | 19.48 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 765.90 € | **765.00 €** | 9.4 % | **9.2 %** | 765.50 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.50 € | **77.90 €** | 15.0 % | **14.1 %** | 77.98 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Samsung G Tab FIXTOT-1649 | 19.50 € | **19.00 €** | 52.1 % | **48.2 %** | 19.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **46.50 €** | 35.9 % | **34.4 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.50 € | **23.00 €** | 36.9 % | **33.9 %** | 23.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **14.00 €** | 54.3 % | **49.0 %** | 14.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **18.50 €** | 37.2 % | **33.6 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SGS26+ FIXFLM2-1705-PI | 23.50 € | **23.00 €** | 33.2 % | **30.4 %** | 23.19 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-RD | 23.50 € | **23.00 €** | 33.2 % | **30.4 %** | 23.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1268.00 € | **1267.50 €** | 8.0 % | **8.0 %** | 1267.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **16.50 €** | 36.8 % | **32.8 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze GTS 4 (čierne) | 23.00 € | **22.50 €** | 14.9 % | **12.4 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 23.00 € | **22.50 €** | 14.9 % | **12.4 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.50 € | **32.00 €** | 12.4 % | **10.7 %** | 32.29 € | cena podľa najlacnejšieho iného predajcu |
| Budík analogový TechnoLine WT 757BK | 26.00 € | **25.50 €** | 8.1 % | **6.0 %** | 25.79 € | cena podľa najlacnejšieho iného predajcu |
| Budík analogový TechnoLine WT 757W | 27.50 € | **27.00 €** | 14.3 % | **12.2 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální projekční TechnoLine WT 538 | 34.00 € | **33.50 €** | 12.1 % | **10.5 %** | 33.79 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7235 | 31.50 € | **31.00 €** | 11.1 % | **9.3 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7245 | 30.00 € | **29.50 €** | 7.7 % | **5.9 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny TechnoLine WT 3100 do koupelny | 23.50 € | **23.00 €** | 11.8 % | **9.4 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7400 | 31.50 € | **31.00 €** | 9.2 % | **7.4 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7160 | 22.00 € | **21.50 €** | 8.5 % | **6.1 %** | 21.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 32.00 € | **31.50 €** | 8.5 % | **6.8 %** | 31.79 € | cena podľa najlacnejšieho iného predajcu |
| Multimeter Uni-T UT256 | 27.00 € | **26.50 €** | 10.9 % | **8.8 %** | 26.79 € | cena podľa najlacnejšieho iného predajcu |
| Ručný multimeter do auta UNI-T UT107 | 27.50 € | **27.00 €** | 12.2 % | **10.2 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 24.50 € | **24.00 €** | 9.8 % | **7.6 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 22.00 € | **21.50 €** | 11.4 % | **8.9 %** | 21.79 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT202BT Inteligentný svorkový multimeter | 38.50 € | **38.00 €** | 8.6 % | **7.2 %** | 38.29 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 53.50 € | **53.00 €** | 14.5 % | **13.5 %** | 53.29 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.50 € | **43.00 €** | 13.9 % | **12.6 %** | 43.29 € | cena podľa najlacnejšieho iného predajcu |
| Bazénové bezdrátové čidlo GARNI 057P | 38.00 € | **37.50 €** | 7.5 % | **6.0 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 53.50 € | **53.00 €** | 10.4 % | **9.4 %** | 53.29 € | cena podľa najlacnejšieho iného predajcu |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.00 € | **15.50 €** | 9.5 % | **6.1 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní vodní filtr GARNI WF 45T | 18.50 € | **18.00 €** | 11.2 % | **8.2 %** | 18.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.00 € | **47.50 €** | 14.0 % | **12.8 %** | 47.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.00 € | **62.50 €** | 14.5 % | **13.5 %** | 62.79 € | cena podľa najlacnejšieho iného predajcu |
| AMIKO diaľkové ovládanie Univerzálny, HD - SD | 14.00 € | **13.50 €** | 22.7 % | **18.3 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.00 € | **82.50 €** | 17.4 % | **16.7 %** | 82.79 € | cena podľa najlacnejšieho iného predajcu |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 48.00 € | **47.50 €** | 6.7 % | **5.6 %** | 47.79 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 77.00 € | **76.50 €** | 18.0 % | **17.3 %** | 76.79 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 66.00 € | **65.50 €** | 16.8 % | **15.9 %** | 65.79 € | cena podľa najlacnejšieho iného predajcu |
| AB-COM LNB AB 01 M Quattro | 11.50 € | **11.00 €** | 13.7 % | **8.8 %** | 11.29 € | cena podľa najlacnejšieho iného predajcu |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 21.50 € | **21.00 €** | 13.2 % | **10.6 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 32.50 € | **32.00 €** | 16.8 % | **15.0 %** | 32.29 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice WS 9050 | 64.50 € | **64.00 €** | 6.4 % | **5.6 %** | 64.29 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 94.50 € | **94.00 €** | 21241.5 % | **21128.5 %** | 94.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.00 € | **59.50 €** | 20.5 % | **19.5 %** | 59.79 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.00 € | **84.50 €** | 15.2 % | **14.5 %** | 84.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.00 € | **21.50 €** | 11.2 % | **8.6 %** | 21.79 € | cena podľa najlacnejšieho iného predajcu |
| Octagon SFX6018 S2 IP HD | 74.00 € | **73.50 €** | 7.1 % | **6.4 %** | 73.79 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 27.50 € | **27.00 €** | 12.6 % | **10.5 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 36.50 € | **36.00 €** | 18.9 % | **17.3 %** | 36.29 € | cena podľa najlacnejšieho iného predajcu |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.00 € | **61.50 €** | 5.9 % | **5.1 %** | 61.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 137.00 € | **136.50 €** | 14.9 % | **14.4 %** | 136.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 18.50 € | **18.00 €** | 10.7 % | **7.7 %** | 18.29 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-797 5G | 22.00 € | **21.50 €** | 25.1 % | **22.2 %** | 21.79 € | cena podľa najlacnejšieho iného predajcu |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 25.50 € | **25.00 €** | 10.7 % | **8.5 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.50 € | **28.00 €** | 29.5 % | **27.2 %** | 28.29 € | cena podľa najlacnejšieho iného predajcu |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 66.50 € | **66.00 €** | 7.1 % | **6.3 %** | 66.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 11.50 € | **11.00 €** | 14.3 % | **9.3 %** | 11.29 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz KM0127 brašna na rám kola | 12.00 € | **11.50 €** | 10.5 % | **5.9 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 406.00 € | **405.50 €** | 10.0 % | **9.9 %** | 405.83 € | cena podľa najlacnejšieho iného predajcu |
| LCD displej KRUGER & MATZ KM2021 Android Auto Apple ... | 76.50 € | **76.00 €** | 8.4 % | **7.7 %** | 76.39 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.50 € | **13.00 €** | 10.4 % | **6.3 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.00 € | **17.50 €** | 10.5 % | **7.5 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.00 € | **25.50 €** | 9.5 % | **7.4 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.50 € | **33.00 €** | 8.8 % | **7.2 %** | 33.39 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.00 € | **56.50 €** | 7.0 % | **6.1 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 107.00 € | **106.50 €** | 11.2 % | **10.7 %** | 106.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 55.50 € | **55.00 €** | 7.0 % | **6.1 %** | 55.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 243.50 € | **243.00 €** | 14.0 % | **13.8 %** | 243.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 136.00 € | **135.50 €** | 13.5 % | **13.1 %** | 135.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny mikroohmmer Uni-T UT620C+ | 180.00 € | **179.50 €** | 6.4 % | **6.1 %** | 179.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 900.00 € | **899.50 €** | 14.4 % | **14.3 %** | 899.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 155.50 € | **155.00 €** | 15.1 % | **14.7 %** | 155.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-2m endoskop | 191.00 € | **190.50 €** | 14.9 % | **14.6 %** | 190.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-3m endoskop | 254.50 € | **254.00 €** | 15.0 % | **14.8 %** | 254.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 92.00 € | **91.50 €** | 6.6 % | **6.0 %** | 91.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 85.00 € | **84.50 €** | 12.4 % | **11.8 %** | 84.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 60.50 € | **60.00 €** | 11.2 % | **10.3 %** | 60.39 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 52.50 € | **52.00 €** | 9.7 % | **8.7 %** | 52.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 80.00 € | **79.50 €** | 11.2 % | **10.5 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 168.00 € | **167.50 €** | 13.5 % | **13.2 %** | 167.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 191.50 € | **191.00 €** | 13.8 % | **13.5 %** | 191.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 325.00 € | **324.50 €** | 11.0 % | **10.9 %** | 324.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 258.00 € | **257.50 €** | 14.2 % | **14.0 %** | 257.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 151.00 € | **150.50 €** | 13.4 % | **13.0 %** | 150.89 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1291.00 € | **1290.50 €** | 7.3 % | **7.3 %** | 1290.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 142.00 € | **141.50 €** | 10.1 % | **9.8 %** | 141.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 57.50 € | **57.00 €** | 19.7 % | **18.7 %** | 57.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **25.50 €** | 15.3 % | **13.1 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 276.00 € | **275.50 €** | 7.3 % | **7.1 %** | 275.89 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V100 | 23.00 € | **22.50 €** | 10.7 % | **8.3 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 56.50 € | **56.00 €** | 13.4 % | **12.4 %** | 56.39 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz KM2240 Connect C200 Tuya Wi-Fi | 166.00 € | **165.50 €** | 12.8 % | **12.5 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 932.50 € | **932.00 €** | 5.1 % | **5.0 %** | 932.39 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 275.00 € | **274.50 €** | 6.2 % | **6.0 %** | 274.89 € | cena podľa najlacnejšieho iného predajcu |
| HP ENVY 6520e AiO (714N9B) | 99.50 € | **99.00 €** | 6.5 % | **6.0 %** | 99.39 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.50 € | **45.00 €** | 15.4 % | **14.2 %** | 45.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 241.50 € | **241.00 €** | 9.6 % | **9.4 %** | 241.39 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 135.00 € | **134.50 €** | 8.6 % | **8.2 %** | 134.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 93.00 € | **92.50 €** | 11.2 % | **10.6 %** | 92.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 207.50 € | **207.00 €** | 9.4 % | **9.1 %** | 207.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.00 € | **194.50 €** | 10.5 % | **10.2 %** | 194.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 875.00 € | **874.50 €** | 9.5 % | **9.5 %** | 874.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 686.00 € | **685.50 €** | 5.7 % | **5.7 %** | 685.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 323.50 € | **323.00 €** | 8.7 % | **8.5 %** | 323.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 635.00 € | **634.50 €** | 5.9 % | **5.8 %** | 634.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 671.50 € | **671.00 €** | 8.6 % | **8.5 %** | 671.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 700.50 € | **700.00 €** | 9.4 % | **9.3 %** | 700.39 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 88.00 € | **87.50 €** | 12.3 % | **11.6 %** | 87.89 € | cena podľa najlacnejšieho iného predajcu |
| REDMI Headphone Neo Black | 46.50 € | **46.00 €** | 8.6 % | **7.5 %** | 46.40 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.50 € | **33.00 €** | 8.8 % | **7.2 %** | 33.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7344H | 110.50 € | **110.00 €** | 9.8 % | **9.3 %** | 110.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7345H | 147.50 € | **147.00 €** | 10.0 % | **9.6 %** | 147.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 120.50 € | **120.00 €** | 8.8 % | **8.3 %** | 120.50 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 112.90 € | **112.50 €** | 8.5 % | **8.1 %** | 112.85 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 221 SV | 120.90 € | **120.50 €** | 9.4 % | **9.1 %** | 120.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42102SV | 80.90 € | **80.50 €** | 9.0 % | **8.5 %** | 80.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9252I | 252.90 € | **252.50 €** | 7.9 % | **7.7 %** | 252.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.90 € | **11.50 €** | 38.0 % | **33.4 %** | 11.62 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti UNI-T UT333S | 23.90 € | **23.50 €** | 12.6 % | **10.7 %** | 23.69 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine WS 9251 | 52.90 € | **52.50 €** | 6.7 % | **5.9 %** | 52.69 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40T | 28.90 € | **28.50 €** | 12.4 % | **10.9 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO436BL | 35.90 € | **35.50 €** | 8.7 % | **7.5 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO754K | 35.90 € | **35.50 €** | 8.2 % | **7.0 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7059S | 35.90 € | **35.50 €** | 8.2 % | **7.0 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 821.90 € | **821.50 €** | 7.1 % | **7.0 %** | 821.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.80 €** | 38.1 % | **34.6 %** | 7.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Polk Audio SIGNATURE ES30 centr. Blac | 266.00 € | **265.90 €** | 68.7 % | **68.6 %** | 266.00 € | cena podľa najlacnejšieho iného predajcu |
| Múdra zásuvka TP-Link Tapo P300 3x french socket, 2x... | 38.00 € | **37.90 €** | 5.9 % | **5.6 %** | 37.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.80 € | **9.70 €** | 36.0 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.93 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT 51003 Vysavač okna+tyč 43cm+mop | 45.00 € | **44.90 €** | 5.9 % | **5.7 %** | 44.97 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.00 € | **44.90 €** | 7.0 % | **6.8 %** | 44.99 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT205E digitálny klešťový multimeter | 46.00 € | **45.90 €** | 6.2 % | **6.0 %** | 45.99 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 264 AP | 58.00 € | **57.90 €** | 8.2 % | **8.0 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9215AV | 32.00 € | **31.90 €** | 7.3 % | **7.0 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací kábel pre lineárne osvetlenie, dĺžk... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.29 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 123.00 € | **122.90 €** | 5.6 % | **5.6 %** | 122.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 140.00 € | **139.90 €** | 11.5 % | **11.4 %** | 140.00 € | cena podľa najlacnejšieho iného predajcu |

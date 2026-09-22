# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-22

Vstup: `premiumstore-sk_2026-09-22_21-38.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6817**
- Návrh **zvýšiť** cenu: **264** produktov
- Návrh **znížiť** cenu: **364** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6189** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **11**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **429**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (264)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Okuliare RayNeo X3 Pro AR | 1536.50 € | **1693.00 €** | 14.0 % | **25.6 %** | 1693.15 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 747.50 € | **897.00 €** | 8.2 % | **29.8 %** | 897.36 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5RCNA416HXBR | 444.00 € | **498.50 €** | 6.9 % | **20.0 %** | 498.68 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT705 | 272.50 € | **324.90 €** | 8.4 % | **29.3 %** | 325.00 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 147.50 € | **199.00 €** | 11.9 % | **51.0 %** | 199.46 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 418.50 € | **466.90 €** | 15.0 % | **28.3 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 418.50 € | **466.90 €** | 15.0 % | **28.3 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, zlatá) | 232.00 € | **275.50 €** | 5.2 % | **24.9 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 566.00 € | **608.50 €** | 6.3 % | **14.3 %** | 608.70 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality Halot X1 Combo | 461.50 € | **500.00 €** | 5.1 % | **13.8 %** | 500.20 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 416.50 € | **455.00 €** | 7.6 % | **17.5 %** | 455.22 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon R3T Soundbar | 83.00 € | **116.50 €** | 6.0 % | **48.7 %** | 116.85 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 Max | 391.50 € | **425.00 €** | 5.1 % | **14.1 %** | 425.37 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 320.00 € | **352.00 €** | 9.8 % | **20.8 %** | 352.02 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 454.00 € | **484.00 €** | 7.0 % | **14.1 %** | 484.09 € | cena podľa najlacnejšieho iného predajcu |
| Beko HSM14540 | 254.00 € | **279.50 €** | 6.7 % | **17.4 %** | 279.60 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 387.00 € | **409.00 €** | 15.3 % | **21.8 %** | 409.19 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, zlatá) | 253.50 € | **275.50 €** | 14.9 % | **24.9 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-704A | 82.50 € | **104.00 €** | 15.0 % | **45.0 %** | 104.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-704B 9 W UV externý filter | 98.00 € | **118.90 €** | 14.9 % | **39.3 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW404B 9 W/UV vonkajší filter | 89.00 € | **108.90 €** | 14.7 % | **40.3 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT600S | 82.90 € | **102.00 €** | 14.9 % | **41.4 %** | 102.26 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 499.50 € | **518.50 €** | 6.5 % | **10.5 %** | 518.69 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW403B 9 W UV externý filter | 75.50 € | **94.00 €** | 14.9 % | **43.1 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW403A | 72.00 € | **89.50 €** | 14.9 % | **42.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový masážny prístroj/regeneračná obuv s techn... | 542.90 € | **559.90 €** | 15.0 % | **18.6 %** | 560.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BMX201M2BG | 171.00 € | **188.00 €** | 9.0 % | **19.9 %** | 188.33 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare RayNeo Air 4 Pro AR | 300.00 € | **315.50 €** | 5.9 % | **11.3 %** | 315.58 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 333.00 € | **348.50 €** | 8.6 % | **13.7 %** | 348.69 € | cena podľa najlacnejšieho iného predajcu |
| MERACH spinningové kolo MR-S26B2-EU (čierne) | 177.50 € | **193.00 €** | 14.9 % | **25.0 %** | 193.50 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.00 € | **349.50 €** | 22.7 % | **28.0 %** | 349.58 € | cena podľa najlacnejšieho iného predajcu |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 34.90 € | **48.90 €** | 11.5 % | **56.3 %** | 48.96 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 286.50 € | **300.50 €** | 8.2 % | **13.5 %** | 300.70 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-402B Externý filter | 60.50 € | **74.00 €** | 14.8 % | **40.4 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| UV-C lampa SUNSUN CUV-218 | 60.90 € | **74.00 €** | 15.3 % | **40.1 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 453.50 € | **466.50 €** | 5.0 % | **8.1 %** | 466.70 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 104.00 € | **117.00 €** | 8.2 % | **21.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW404A | 77.00 € | **89.50 €** | 15.1 % | **33.7 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na televízor Perlgear PGLF8B-N1 | 41.50 € | **54.00 €** | 14.5 % | **49.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-703B 9 W externý UV filter | 86.50 € | **98.90 €** | 15.3 % | **31.9 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW504A | 47.50 € | **59.50 €** | 15.4 % | **44.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 329.50 € | **341.00 €** | 6.9 % | **10.7 %** | 341.02 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-302 | 42.90 € | **54.00 €** | 14.9 % | **44.7 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A185W03 18,5" prenosný monitor | 131.50 € | **142.50 €** | 12.1 % | **21.4 %** | 142.67 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 229.50 € | **240.50 €** | 8.0 % | **13.2 %** | 240.69 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 175.50 € | **186.50 €** | 7.6 % | **14.3 %** | 186.70 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1G | 196.00 € | **206.90 €** | 14.9 % | **21.3 %** | 207.00 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RFSA240M43WN | 368.90 € | **379.00 €** | 5.1 % | **8.0 %** | 379.05 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 218.00 € | **228.00 €** | 13.1 % | **18.3 %** | 228.17 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR TWIN - Black/Silver | 53.50 € | **63.50 €** | 10.2 % | **30.8 %** | 63.77 € | cena podľa najlacnejšieho iného predajcu |
| Súprava umývacej a kondicionovacej stanice ELEGOO Me... | 120.00 € | **130.00 €** | 8.9 % | **18.0 %** | 130.40 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 27.00 € | **37.00 €** | 15.1 % | **57.7 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 366.00 € | **375.50 €** | 7.7 % | **10.4 %** | 375.68 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V060 12000mah návnada loď | 117.90 € | **127.00 €** | 14.3 % | **23.2 %** | 127.25 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Junior Retro blesk | 62.50 € | **71.50 €** | 6.7 % | **22.0 %** | 71.68 € | cena podľa najlacnejšieho iného predajcu |
| Skaner 3D Creality RaptorX | 2810.50 € | **2819.50 €** | 15.5 % | **15.9 %** | 2819.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR PD100 – kombinovaná sada | 45.00 € | **54.00 €** | 15.3 % | **38.4 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 110.50 € | **119.00 €** | 5.3 % | **13.4 %** | 119.48 € | cena podľa najlacnejšieho iného predajcu |
| Drôtové slúchadlá do uší TRUTHEAR Zero (červené) | 64.00 € | **72.00 €** | 29.7 % | **45.9 %** | 72.29 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-402A | 51.50 € | **59.50 €** | 15.1 % | **33.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-604B | 32.00 € | **39.50 €** | 14.2 % | **41.0 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T UT117C | 126.00 € | **133.00 €** | 5.4 % | **11.2 %** | 133.19 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR TWIN výrobník sódy, čierny | 56.50 € | **63.50 €** | 5.4 % | **18.4 %** | 63.77 € | cena podľa najlacnejšieho iného predajcu |
| FM Transmitter Baseus S-09 Pro, Bluetooth (čierny) | 11.50 € | **18.50 €** | 22.1 % | **96.4 %** | 18.89 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint MetroX Pro Standard | 1169.00 € | **1176.00 €** | 15.0 % | **15.7 %** | 1176.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 59.00 € | **66.00 €** | 10.0 % | **23.1 %** | 66.39 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-303A | 59.00 € | **65.90 €** | 13.5 % | **26.8 %** | 65.97 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 126.50 € | **133.00 €** | 10.5 % | **16.2 %** | 133.20 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Black | 50.00 € | **56.50 €** | 14.5 % | **29.4 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Pink | 50.00 € | **56.50 €** | 14.5 % | **29.4 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO White | 50.00 € | **56.50 €** | 14.5 % | **29.4 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 28.00 € | **34.50 €** | 8.0 % | **33.1 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Ponorné čerpadlo SUNSUN YQP-3500 | 27.00 € | **33.50 €** | 14.3 % | **41.8 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 58.00 € | **64.50 €** | 5.1 % | **16.8 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 60 Ah  Victron Energy AGM Sup... | 173.50 € | **180.00 €** | 11.1 % | **15.3 %** | 180.44 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 69.50 € | **75.90 €** | 6.7 % | **16.5 %** | 75.91 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 78.50 € | **84.50 €** | 6.2 % | **14.4 %** | 84.57 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 344.50 € | **350.50 €** | 5.0 % | **6.8 %** | 350.73 € | cena podľa najlacnejšieho iného predajcu |
| Meross MOP320MA-EU WiFi inteligentná napájacia lišta... | 34.50 € | **40.50 €** | 15.8 % | **35.9 %** | 40.73 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXCSH2001E | 82.90 € | **88.50 €** | 12.1 % | **19.7 %** | 88.71 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 316.50 € | **322.00 €** | 5.2 % | **7.0 %** | 322.12 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN CUP-809 | 27.00 € | **32.50 €** | 14.6 % | **38.0 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Priemyselná infračervená termokamera Habotest HT820 | 273.90 € | **279.00 €** | 15.0 % | **17.2 %** | 279.08 € | cena podľa najlacnejšieho iného predajcu |
| MSI G32C4X | 152.90 € | **157.90 €** | 10.1 % | **13.7 %** | 157.91 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST9100 | 37.50 € | **42.50 €** | 17.8 % | **33.5 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 461.90 € | **466.90 €** | 15.0 % | **16.3 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 461.90 € | **466.90 €** | 15.0 % | **16.3 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 100.50 € | **105.50 €** | 5.2 % | **10.4 %** | 105.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 83.50 € | **88.50 €** | 7.6 % | **14.0 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Matrace nafukovací AVENLI 24161 KING SIZE 203x152x25 cm | 33.00 € | **38.00 €** | 10.7 % | **27.5 %** | 38.45 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 225.00 € | **230.00 €** | 17.6 % | **20.2 %** | 230.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 26.50 € | **31.00 €** | 9.3 % | **27.8 %** | 31.04 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 82.50 € | **87.00 €** | 23.4 % | **30.1 %** | 87.27 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W05 14" prenosný monitor | 83.00 € | **87.50 €** | 15.6 % | **21.9 %** | 87.79 € | cena podľa najlacnejšieho iného predajcu |
| Drôtové slúchadlá do uší TRUTHEAR Zero (modré) | 59.50 € | **64.00 €** | 28.5 % | **38.2 %** | 64.30 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 20 | 229.00 € | **233.50 €** | 7.2 % | **9.4 %** | 233.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 320.50 € | **324.90 €** | 9.6 % | **11.1 %** | 324.97 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MSS815MAQUA-UN – 4-dielna sada inteligentných... | 47.90 € | **52.00 €** | 15.3 % | **25.2 %** | 52.17 € | cena podľa najlacnejšieho iného predajcu |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 20.90 € | **25.00 €** | 16.1 % | **38.9 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| SJCAM – pevný držiak na bicykel | 17.90 € | **22.00 €** | 15.8 % | **42.3 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa Portable Monitor A1 15,6" | 82.50 € | **86.50 €** | 9.1 % | **14.3 %** | 86.86 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 128.50 € | **132.50 €** | 5.1 % | **8.4 %** | 132.90 € | cena podľa najlacnejšieho iného predajcu |
| Maono BA92 Boom Arm Black | 48.00 € | **52.00 €** | 9.5 % | **18.7 %** | 52.46 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW503 Vonkajší filter | 23.00 € | **27.00 €** | 15.1 % | **35.2 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2113 PRO Ovládanie letu PC | 28.90 € | **32.50 €** | 5.1 % | **18.2 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GP3000 59,2 Wh štartér | 56.00 € | **59.50 €** | 14.8 % | **21.9 %** | 59.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **36.50 €** | 14.3 % | **26.4 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 168.50 € | **172.00 €** | 14.9 % | **17.3 %** | 172.29 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW502 | 20.50 € | **24.00 €** | 16.4 % | **36.3 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V900 Gen2 | 93.90 € | **97.00 €** | 5.1 % | **8.5 %** | 97.47 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 670NC white | 63.90 € | **66.90 €** | 10.5 % | **15.7 %** | 67.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality Sermoon S1 | 2338.90 € | **2341.90 €** | 5.0 % | **5.2 %** | 2341.93 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 22.50 € | **25.50 €** | 13.1 % | **28.2 %** | 25.54 € | cena podľa najlacnejšieho iného predajcu |
| 4-kanálový teplomer Uni-T UT325F | 95.50 € | **98.50 €** | 5.1 % | **8.5 %** | 98.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač žalúzií Avatto CS20-EU-B WiFi Touch | 17.50 € | **20.50 €** | 15.1 % | **34.8 %** | 20.59 € | cena podľa najlacnejšieho iného predajcu |
| Creality CR-Scan Raptor 3D Scanner | 867.50 € | **870.50 €** | 5.0 % | **5.4 %** | 870.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 85.00 € | **88.00 €** | 5.8 % | **9.5 %** | 88.22 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 85.00 € | **88.00 €** | 5.8 % | **9.5 %** | 88.22 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Maono PD200W (čierny) | 68.00 € | **71.00 €** | 5.7 % | **10.3 %** | 71.34 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Tough Resin 2.0 (biela) | 20.50 € | **23.50 €** | 18.9 % | **36.3 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Tough Resin 2.0 (Black) | 20.50 € | **23.50 €** | 20.0 % | **37.5 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 225.50 € | **228.50 €** | 14.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.50 € | **30.50 €** | 13.0 % | **25.4 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **21.00 €** | 47.4 % | **71.9 %** | 21.49 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN YBG400 kaskádový filter | 17.90 € | **20.50 €** | 15.4 % | **32.2 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN YQP-1500F | 11.90 € | **14.50 €** | 14.8 % | **39.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W03 16" prenosný monitor | 87.50 € | **90.00 €** | 16.1 % | **19.4 %** | 90.04 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 81.00 € | **83.50 €** | 14.4 % | **18.0 %** | 83.63 € | cena podľa najlacnejšieho iného predajcu |
| Zvukový mixér a zvuková karta AMC2 Neo | 43.00 € | **45.50 €** | 16.1 % | **22.9 %** | 45.78 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 81.00 € | **83.50 €** | 24.4 % | **28.2 %** | 83.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 16.00 € | **18.50 €** | 13.8 % | **31.6 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 52.50 € | **55.00 €** | 5.2 % | **10.2 %** | 55.38 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 202.50 € | **205.00 €** | 6.0 % | **7.3 %** | 205.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada 16 barevných kovových autíček 26319 | 11.50 € | **14.00 €** | 11.0 % | **35.2 %** | 14.39 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A26 5G FIXOP3-1501-BK | 15.00 € | **17.50 €** | 38.6 % | **61.7 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine AM8T (ružový) | 60.90 € | **63.00 €** | 18.8 % | **22.9 %** | 63.08 € | cena podľa najlacnejšieho iného predajcu |
| Ponorné čerpadlo SUNSUN YQP-2500 | 10.90 € | **13.00 €** | 14.6 % | **36.7 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Turecký kávovar HiBREW CM1179_EU | 39.00 € | **41.00 €** | 5.4 % | **10.9 %** | 41.02 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E4GK1-4GB | 36.00 € | **38.00 €** | 5.2 % | **11.1 %** | 38.17 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 139.50 € | **141.50 €** | 9.7 % | **11.3 %** | 141.70 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 122.00 € | **124.00 €** | 36.7 % | **38.9 %** | 124.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 14.00 € | **16.00 €** | 15.4 % | **31.9 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro s RGB osvetlením (biely) | 50.90 € | **52.50 €** | 18.4 % | **22.2 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro s RGB osvetlením (čierny) | 50.90 € | **52.50 €** | 18.4 % | **22.2 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 8.20 € | **9.80 €** | 5.7 % | **26.3 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 23310-56/RH | 45.90 € | **47.50 €** | 10.6 % | **14.4 %** | 47.60 € | cena podľa najlacnejšieho iného predajcu |
| Čistič dna akvária SUNSUN HXS-02 | 15.90 € | **17.50 €** | 15.0 % | **26.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| FENDA F&D A180X | 41.50 € | **43.00 €** | 8.5 % | **12.4 %** | 43.11 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Habotest HT86B | 11.00 € | **12.50 €** | 7.6 % | **22.3 %** | 12.65 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter Habotest HT113 | 10.50 € | **12.00 €** | 6.3 % | **21.5 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo 9300M set klávesnice a myši černý | 30.50 € | **32.00 €** | 6.4 % | **11.6 %** | 32.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom bi... | 10.00 € | **11.50 €** | 18.3 % | **36.1 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 48.50 € | **50.00 €** | 23.1 % | **26.9 %** | 50.25 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD100X (biely) | 32.50 € | **34.00 €** | 20.5 % | **26.0 %** | 34.27 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 46.00 € | **47.50 €** | 18.8 % | **22.7 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 46.00 € | **47.50 €** | 18.8 % | **22.7 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| ETA Nubela 2569 90100, bílý | 27.00 € | **28.50 €** | 46.5 % | **54.7 %** | 28.84 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 14.50 € | **16.00 €** | 6.6 % | **17.6 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 10.00 € | **11.50 €** | 12.3 % | **29.1 %** | 11.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 15.00 € | **16.50 €** | 21.6 % | **33.7 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXSH1500E | 31.00 € | **32.50 €** | 12.4 % | **17.8 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Capri Citrusovač 413/CA | 65.50 € | **67.00 €** | 5.0 % | **7.4 %** | 67.41 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 38.50 € | **40.00 €** | 5.9 % | **10.1 %** | 40.46 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 38.50 € | **40.00 €** | 5.9 % | **10.1 %** | 40.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP65 | 11.50 € | **13.00 €** | 55.8 % | **76.2 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 14.50 € | **16.00 €** | 36.1 % | **50.2 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Tripod stand PULUZ for Insta360 X3 / X4 | 14.50 € | **16.00 €** | 26.4 % | **39.4 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.50 € | **20.00 €** | 29.8 % | **40.3 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 55.50 € | **56.90 €** | 15.2 % | **18.1 %** | 56.92 € | cena podľa najlacnejšieho iného predajcu |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 23.90 € | **25.00 €** | 5.9 % | **10.8 %** | 25.13 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 15.90 € | **17.00 €** | 12.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 103.50 € | **104.50 €** | 20.3 % | **21.4 %** | 104.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 6.80 € | **7.80 €** | 6.9 % | **22.7 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 8.80 € | **9.80 €** | 16.0 % | **29.1 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 LED sviečok s časovačom Solight 1V284, 6,5 cm... | 8.80 € | **9.80 €** | 35.0 % | **50.3 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight PIR senzor nástenný, vonkajší, biely | 5.80 € | **6.80 €** | 8.7 % | **27.4 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 393.90 € | **394.90 €** | 6.4 % | **6.7 %** | 395.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 11.50 € | **12.50 €** | 14.3 % | **24.2 %** | 12.63 € | cena podľa najlacnejšieho iného predajcu |
| MOES WC-YH-LS Motor na rolety s Wi-Fi | 56.00 € | **57.00 €** | 14.9 % | **17.0 %** | 57.13 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara 570lm ZOOM nabíjecí | 16.50 € | **17.50 €** | 14.2 % | **21.1 %** | 17.66 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-006-33 Dvojúčelový fotografický dáždnik | 19.00 € | **20.00 €** | 28.4 % | **35.2 %** | 20.17 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC230 IP, 5MPx, WiFi, prísvit | 22.00 € | **23.00 €** | 7.5 % | **12.4 %** | 23.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla ZigBee Avatto ZTS02-EU-B... | 11.50 € | **12.50 €** | 13.6 % | **23.5 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E200SM | 16.50 € | **17.50 €** | 11.5 % | **18.3 %** | 17.68 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.00 € | **21.00 €** | 8.0 % | **13.4 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Prevodovka PXN - usporiadanie H 7+1 | 81.00 € | **82.00 €** | 10.0 % | **11.4 %** | 82.21 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SGA17 4G/5G FIXOP3-1700-BK | 16.50 € | **17.50 €** | 52.4 % | **61.7 %** | 17.73 € | cena podľa najlacnejšieho iného predajcu |
| Herné reproduktory Onikuma L2 | 12.00 € | **13.00 €** | 11.8 % | **21.1 %** | 13.25 € | cena podľa najlacnejšieho iného predajcu |
| PXN-F16 Flight Joystick for PC | 31.50 € | **32.50 €** | 7.5 % | **10.9 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 29.00 € | **30.00 €** | 32.4 % | **36.9 %** | 30.27 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60Mi | 26.00 € | **27.00 €** | 7.5 % | **11.7 %** | 27.37 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN CUP-807 | 25.00 € | **26.00 €** | 14.7 % | **19.3 %** | 26.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 19.50 € | **20.50 €** | 8.3 % | **13.8 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal EY8328E0 | 118.50 € | **119.50 €** | 5.1 % | **6.0 %** | 119.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26730-56/RH | 32.50 € | **33.50 €** | 12.2 % | **15.7 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Creator Tripod FIXCRT-BK | 44.00 € | **45.00 €** | 11.4 % | **13.9 %** | 45.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 31.00 € | **32.00 €** | 6.1 % | **9.5 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Standand Resin (Black) | 11.00 € | **12.00 €** | 16.3 % | **26.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Standard Resin (Grey) | 11.00 € | **12.00 €** | 20.7 % | **31.7 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 39.00 € | **40.00 €** | 7.3 % | **10.1 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.00 € | **14.90 €** | 12.1 % | **19.3 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 14.00 € | **14.90 €** | 6.3 % | **13.1 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| AnyCubic Standard Resin (White) | 11.00 € | **11.90 €** | 16.3 % | **25.8 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 352.00 € | **352.90 €** | 35.2 % | **35.6 %** | 353.00 € | cena podľa najlacnejšieho iného predajcu |
| Herní mikrofon Maono DGM20 (černý) | 26.90 € | **27.50 €** | 13.5 % | **16.0 %** | 27.60 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DGM20 (biely) | 26.90 € | **27.50 €** | 13.8 % | **16.3 %** | 27.60 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.90 € | **15.50 €** | 12.8 % | **17.3 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 9.90 € | **10.50 €** | 5.5 % | **11.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1444.90 € | **1445.50 €** | 7.5 % | **7.6 %** | 1445.66 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Yogurella 617 | 27.00 € | **27.50 €** | 7.2 % | **9.2 %** | 27.52 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie Telesin pre GoPro Hero 13 / 12 / ... | 19.00 € | **19.50 €** | 14.6 % | **17.6 %** | 19.55 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic Siena 180 Easy | 26.50 € | **27.00 €** | 9.5 % | **11.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 124.50 € | **125.00 €** | 8.9 % | **9.4 %** | 125.10 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 37.50 € | **38.00 €** | 14.0 % | **15.5 %** | 38.11 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.50 € | **12.00 €** | 5.8 % | **10.4 %** | 12.12 € | cena podľa najlacnejšieho iného predajcu |
| Filament Hyper PETG Creality (zelený) | 11.00 € | **11.50 €** | 12.8 % | **17.9 %** | 11.63 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 smartwatch Ultra (gold) | 38.00 € | **38.50 €** | 19.1 % | **20.6 %** | 38.64 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.00 € | **38.50 €** | 19.1 % | **20.6 %** | 38.64 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.00 € | **19.50 €** | 15.5 % | **18.6 %** | 19.67 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.00 € | **12.50 €** | 10.9 % | **15.5 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 26.50 € | **27.00 €** | 8.9 % | **10.9 %** | 27.20 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 127.00 € | **127.50 €** | 12.8 % | **13.2 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový inteligentný ovládač Yeelight | 11.00 € | **11.50 €** | 13.6 % | **18.8 %** | 11.71 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 16.50 € | **17.00 €** | 5.4 % | **8.6 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 30.50 € | **31.00 €** | 11.0 % | **12.8 %** | 31.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšia reťaz s žiarovkami, 10 žiarovi... | 12.50 € | **13.00 €** | 37.0 % | **42.4 %** | 13.23 € | cena podľa najlacnejšieho iného predajcu |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.00 € | **17.50 €** | 15.0 % | **18.4 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 64.50 € | **65.00 €** | 10.3 % | **11.1 %** | 65.25 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 160.50 € | **161.00 €** | 5.7 % | **6.0 %** | 161.37 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (grey) | 17.00 € | **17.50 €** | 23.4 % | **27.0 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| RGB Led Light Stick PULUZ 30cm | 17.00 € | **17.50 €** | 18.3 % | **21.8 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostné vlákno PLA Anycubic 1 KG (biele) | 13.00 € | **13.50 €** | 14.0 % | **18.4 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 249.00 € | **249.50 €** | 21.5 % | **21.7 %** | 249.90 € | cena podľa najlacnejšieho iného predajcu |
| Motorcycle Intercom EJEAS MS20 | 137.50 € | **138.00 €** | 5.3 % | **5.7 %** | 138.49 € | cena podľa najlacnejšieho iného predajcu |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 14.50 € | **15.00 €** | 10.4 % | **14.2 %** | 15.49 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Podlahový mop Picobello M Micro | 19.50 € | **20.00 €** | 11.2 % | **14.0 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| BoboVR F3 rozhranie pre tvár | 29.50 € | **30.00 €** | 38.6 % | **40.9 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací pravouhlý konektor pre COB LED p... | 1.80 € | **2.30 €** | 55.7 % | **98.9 %** | 2.40 € | cena podľa najlacnejšieho iného predajcu |
| Concept OPK5160bc | 177.50 € | **177.90 €** | 7.5 % | **7.7 %** | 178.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **5.20 €** | 11.2 % | **20.4 %** | 5.29 € | cena podľa najlacnejšieho iného predajcu |
| Svetlomet Superfire HL06, 500lm, USB | 12.50 € | **12.90 €** | 10.8 % | **14.4 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| Vianočné LED cencúle Solight 1V47, 50 LED, časovač, ... | 5.90 € | **6.30 €** | 33.6 % | **42.7 %** | 6.40 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 44.50 € | **44.90 €** | 10.7 % | **11.7 %** | 44.92 € | cena podľa najlacnejšieho iného predajcu |
| MOES WV-LZ-BK Wi-Fi vodovodný ventil (čierny) | 19.50 € | **19.90 €** | 15.1 % | **17.5 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26800-56/RH | 25.50 € | **25.90 €** | 5.2 % | **6.9 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9270p bezdrátová klávesnice černá | 36.50 € | **36.90 €** | 6.4 % | **7.5 %** | 37.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, 15cm, ba... | 1.80 € | **2.10 €** | 55.7 % | **81.6 %** | 2.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 7.60 € | **7.80 €** | 5.4 % | **8.2 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 20.90 € | **21.00 €** | 35.1 % | **35.7 %** | 21.02 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 16.90 € | **17.00 €** | 31.9 % | **32.6 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SamsGTA11+/A9+ FIXTOT-1651 | 16.90 € | **17.00 €** | 12.0 % | **12.6 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250W (black) | 47.90 € | **48.00 €** | 32.5 % | **32.7 %** | 48.14 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 16.90 € | **17.00 €** | 8.1 % | **8.7 %** | 17.25 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku FNIRSI FDM-02 | 28.90 € | **29.00 €** | 6.2 % | **6.5 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Mobilný ovládač GameSir X5s (čierny) | 42.90 € | **43.00 €** | 15.2 % | **15.5 %** | 43.31 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 31.90 € | **32.00 €** | 37.4 % | **37.8 %** | 32.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny decibelomer Habotest HT622B USB A/C | 26.90 € | **27.00 €** | 15.2 % | **15.6 %** | 27.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight otočná IP kamera | 33.90 € | **34.00 €** | 22.9 % | **23.3 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.50 € | **1.60 €** | 28.4 % | **36.9 %** | 1.61 € | cena podľa najlacnejšieho iného predajcu |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E1... | 3.00 € | **3.10 €** | 80.7 % | **86.7 %** | 3.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 9W, 1260lm, 4000K,... | 3.70 € | **3.80 €** | 71.9 % | **76.5 %** | 3.86 € | cena podľa najlacnejšieho iného predajcu |
| Hyper PLA Filament Creality (Yellow) | 13.90 € | **14.00 €** | 16.3 % | **17.1 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| Teplovzdušný ventilátor TEESA TSA8027 | 13.90 € | **14.00 €** | 10.0 % | **10.8 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.90 € | **234.00 €** | 24.3 % | **24.3 %** | 234.40 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (364)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 772.50 € | **699.50 €** | 41.6 % | **28.2 %** | 699.52 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE NRS9182VXB1 | 872.00 € | **816.50 €** | 12.2 % | **5.1 %** | 799.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň ANYCUBIC Kobra S1 ACE 2 Pro Combo | 510.50 € | **466.50 €** | 15.0 % | **5.1 %** | 429.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje GEC5C41SG | 353.90 € | **313.50 €** | 21.8 % | **7.9 %** | 313.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality K1C 2025 | 401.90 € | **366.90 €** | 15.0 % | **5.0 %** | 331.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GL.iNet Beryl AX Wi-Fi 6 router | 148.90 € | **114.50 €** | 47.8 % | **13.6 %** | 114.78 € | cena podľa najlacnejšieho iného predajcu |
| Lenovo Idea Tab Pro 8/256GB (ZAHD0072CZ) | 603.90 € | **576.50 €** | 10.0 % | **5.0 %** | 521.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 429.00 € | **404.50 €** | 13.9 % | **7.4 %** | 404.70 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov ND/CPL s premenlivou hustotou Freewell ... | 379.90 € | **356.90 €** | 36.8 % | **28.5 %** | 357.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných ND/CPL filtrov Freewell Brandon Li... | 379.90 € | **356.90 €** | 36.8 % | **28.5 %** | 357.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných ND/CPL filtrov Freewell Brandon Li... | 379.90 € | **356.90 €** | 36.8 % | **28.5 %** | 357.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 379.90 € | **356.90 €** | 36.8 % | **28.5 %** | 357.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 473.00 € | **452.00 €** | 14.0 % | **9.0 %** | 452.21 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 407.50 € | **389.00 €** | 15.0 % | **9.8 %** | 389.37 € | cena podľa najlacnejšieho iného predajcu |
| Systém riadenia vlákien Creality CFS | 252.50 € | **236.50 €** | 15.0 % | **7.7 %** | 236.70 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 266.50 € | **252.50 €** | 11.0 % | **5.2 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Výrobník ľadových kociek Euhomy IM001, 1,2 l, 12 kg ... | 74.00 € | **60.50 €** | 42.4 % | **16.4 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 500D. | 131.90 € | **120.50 €** | 38.6 % | **26.6 %** | 120.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov ND/CPL s premenlivou hustotou Freewell ... | 349.90 € | **338.90 €** | 29.7 % | **25.7 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných filtrov ND/CPL Freewell Brandon Li... | 349.90 € | **338.90 €** | 29.7 % | **25.7 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných ND/CPL filtrov Freewell Brandon Li... | 349.90 € | **338.90 €** | 29.7 % | **25.7 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada variabilných ND/CPL filtrov Freewell Brandon Li... | 349.90 € | **338.90 €** | 29.7 % | **25.7 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 162.50 € | **152.00 €** | 40.2 % | **31.1 %** | 152.37 € | cena podľa najlacnejšieho iného predajcu |
| Smartmi Evaporative Humidifier 3 Lite | 116.90 € | **107.00 €** | 47.0 % | **34.5 %** | 107.22 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.50 € | **38.00 €** | 47.7 % | **18.2 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.50 € | **38.00 €** | 50.7 % | **20.6 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesná maska so svetelnou terapiou ANLAN 01-AGZMZ | 54.50 € | **45.00 €** | 77.3 % | **46.4 %** | 45.38 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 130.50 € | **121.50 €** | 29.8 % | **20.8 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HBL-801 kaskádový filter | 27.00 € | **18.00 €** | 103.4 % | **35.6 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 222.00 € | **213.50 €** | 15.6 % | **11.2 %** | 213.52 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY-T Android TV 4K UHD Android TV multimed... | 93.00 € | **85.00 €** | 30.7 % | **19.5 %** | 85.41 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-654A | 136.90 € | **129.00 €** | 37.5 % | **29.6 %** | 129.46 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-604B štvorzónový plynový sporák so sklen... | 136.90 € | **129.00 €** | 46.1 % | **37.7 %** | 129.46 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC026X | 47.00 € | **39.90 €** | 25.5 % | **6.5 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 99.50 € | **92.50 €** | 13.5 % | **5.5 %** | 89.43 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **327.00 €** | 14.9 % | **12.5 %** | 327.49 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 44.50 € | **38.00 €** | 41.2 % | **20.6 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 32.00 € | **25.90 €** | 31.2 % | **6.2 %** | 24.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (sivý) | 66.50 € | **60.50 €** | 25.8 % | **14.4 %** | 60.52 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 193.50 € | **187.50 €** | 13.9 % | **10.4 %** | 187.82 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN YBG-600 kaskádový filter | 31.00 € | **25.00 €** | 67.2 % | **34.9 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.50 € | **21.00 €** | 36.6 % | **8.3 %** | 21.03 € | cena podľa najlacnejšieho iného predajcu |
| Stan Puluz 80 cm bez tieňov s LED svietidlom s výkon... | 75.00 € | **69.50 €** | 14.7 % | **6.3 %** | 69.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 46.50 € | **41.00 €** | 33.5 % | **17.7 %** | 41.19 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552220 Crocodile 5G LTE700 domovní zesilovač | 38.50 € | **33.50 €** | 25.1 % | **8.8 %** | 33.80 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-304A Externý filter | 89.00 € | **84.00 €** | 39.8 % | **32.0 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.90 € | **123.00 €** | 10.1 % | **5.9 %** | 123.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **12.50 €** | 47.5 % | **8.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **12.50 €** | 47.5 % | **8.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **12.50 €** | 47.5 % | **8.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Crystal UHD UE43U8072H | 274.50 € | **270.00 €** | 12.8 % | **11.0 %** | 270.42 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 S Pro (čierny) | 64.00 € | **59.90 €** | 21.6 % | **13.8 %** | 59.94 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 306.50 € | **302.50 €** | 8.6 % | **7.2 %** | 302.68 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 399.00 € | **395.00 €** | 13.9 % | **12.8 %** | 395.18 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 314.00 € | **310.00 €** | 13.6 % | **12.2 %** | 310.18 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 345.00 € | **341.00 €** | 13.7 % | **12.4 %** | 341.20 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 326.50 € | **322.50 €** | 13.7 % | **12.3 %** | 322.70 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **91.50 €** | 14.9 % | **10.1 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 49.50 € | **45.50 €** | 25.4 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X Pro s AI senzormi (sivý) | 71.50 € | **68.00 €** | 20.2 % | **14.3 %** | 68.09 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 136.50 € | **133.00 €** | 8.5 % | **5.7 %** | 133.17 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256A | 399.00 € | **395.50 €** | 20.5 % | **19.5 %** | 395.71 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 101.00 € | **97.50 €** | 15.6 % | **11.6 %** | 97.75 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SGS26+ FIXFLM2-1705-PI | 23.50 € | **20.00 €** | 33.2 % | **13.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-RD | 23.50 € | **20.00 €** | 33.2 % | **13.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BL | 23.50 € | **20.00 €** | 33.2 % | **13.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 941.00 € | **937.50 €** | 10.0 % | **9.6 %** | 937.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **91.50 €** | 15.2 % | **11.1 %** | 91.78 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 141.50 € | **138.50 €** | 22.0 % | **19.4 %** | 138.58 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 143.00 € | **140.00 €** | 21.8 % | **19.2 %** | 140.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **11.50 €** | 47.4 % | **16.9 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 179.00 € | **176.00 €** | 19.5 % | **17.5 %** | 176.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna meteostanica, prehľadný a diza... | 63.90 € | **61.00 €** | 24.5 % | **18.9 %** | 61.03 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 55 mm | 29.90 € | **27.00 €** | 41.1 % | **27.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 58 mm | 29.90 € | **27.00 €** | 41.1 % | **27.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 62 mm | 29.90 € | **27.00 €** | 41.1 % | **27.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 72 mm | 29.90 € | **27.00 €** | 41.1 % | **27.4 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 82 mm | 29.90 € | **27.00 €** | 41.2 % | **27.5 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 101 | 157.50 € | **154.90 €** | 7.6 % | **5.9 %** | 154.92 € | cena podľa najlacnejšieho iného predajcu |
| Brita Style ESS filtračná kanvica 2,4 l + 2 filtre, ... | 28.00 € | **25.50 €** | 17.3 % | **6.9 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tlakový stroj HiBREW H7B Cob | 550.50 € | **548.00 €** | 10.6 % | **10.1 %** | 548.02 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.00 € | **14.50 €** | 38.8 % | **18.4 %** | 14.53 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 64.50 € | **62.00 €** | 19.0 % | **14.4 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (čierny) | 64.50 € | **62.00 €** | 18.9 % | **14.3 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 53.50 € | **51.00 €** | 15.1 % | **9.7 %** | 51.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.50 € | **37.00 €** | 15.0 % | **7.7 %** | 37.23 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Gracioso horizontal | 204.50 € | **202.00 €** | 14.3 % | **12.9 %** | 202.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 16.50 € | **14.00 €** | 54.4 % | **31.0 %** | 14.27 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 301.00 € | **298.50 €** | 15.0 % | **14.0 %** | 298.80 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 867.50 € | **865.00 €** | 14.4 % | **14.1 %** | 865.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **14.50 €** | 47.5 % | **25.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **14.50 €** | 36.8 % | **16.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 228.00 € | **225.50 €** | 7.3 % | **6.1 %** | 225.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 16A, USB A+C rychlonabíjačka ... | 15.00 € | **12.50 €** | 45.5 % | **21.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.00 €** | 55.4 % | **39.5 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **10.50 €** | 47.3 % | **19.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 17.90 € | **15.50 €** | 34.4 % | **16.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 49 mm | 29.90 € | **27.50 €** | 41.1 % | **29.8 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 328.90 € | **326.50 €** | 11.6 % | **10.8 %** | 326.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **7.80 €** | 50.8 % | **17.7 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **9.80 €** | 47.4 % | **20.4 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.80 € | **7.80 €** | 36.0 % | **8.2 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| LCD displej KRUGER & MATZ KM2021 Android Auto Apple ... | 76.50 € | **74.50 €** | 8.4 % | **5.6 %** | 59.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AKAI APR-11R RED Rádio v retro stylu | 38.90 € | **36.90 €** | 10.8 % | **5.1 %** | 33.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 258.90 € | **256.90 €** | 13.2 % | **12.4 %** | 257.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 399.90 € | **397.90 €** | 6.7 % | **6.2 %** | 398.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 401.90 € | **399.90 €** | 6.6 % | **6.0 %** | 400.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 231.90 € | **229.90 €** | 41797.0 % | **41435.7 %** | 230.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 669.90 € | **667.90 €** | 120929.8 % | **120568.5 %** | 668.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 367.90 € | **365.90 €** | 66367.9 % | **66006.6 %** | 366.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **14.50 €** | 38.0 % | **21.3 %** | 14.64 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 42.50 € | **40.50 €** | 12.7 % | **7.4 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.00 € | **86.00 €** | 14.7 % | **12.1 %** | 86.26 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **26.50 €** | 15.7 % | **7.6 %** | 26.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.50 € | **18.50 €** | 35.1 % | **21.9 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.50 € | **14.50 €** | 35.0 % | **18.6 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **18.50 €** | 34.1 % | **21.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **18.50 €** | 20.5 % | **8.8 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Anycubic Photon Mono M7 Pro 3D Printer | 439.00 € | **437.00 €** | 5.5 % | **5.1 %** | 437.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX LUX Senior (zelený) | 158.90 € | **157.00 €** | 54.3 % | **52.4 %** | 157.18 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MY700BF0 | 121.90 € | **120.00 €** | 15.6 % | **13.8 %** | 120.41 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 144.90 € | **143.00 €** | 14.4 % | **12.9 %** | 143.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **11.00 €** | 47.7 % | **26.0 %** | 11.09 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Sams GTA11/A9 FIXTOT-1650 | 18.90 € | **17.00 €** | 25.2 % | **12.6 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **34.00 €** | 15.0 % | **8.9 %** | 34.27 € | cena podľa najlacnejšieho iného predajcu |
| 2in1 Diagnostic Scanner OBD2 and Battery Tester Ance... | 49.90 € | **48.00 €** | 23.2 % | **18.5 %** | 48.42 € | cena podľa najlacnejšieho iného predajcu |
| GameSir G8+ Bluetooth mobile controller with phone h... | 60.90 € | **59.00 €** | 13.2 % | **9.6 %** | 59.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 213.50 € | **212.00 €** | 5.9 % | **5.2 %** | 212.17 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostic Scanner OBD2 Ancel AS100/AC100 | 18.50 € | **17.00 €** | 32.6 % | **21.9 %** | 17.25 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na vytieranie DJI ROMO | 35.00 € | **33.50 €** | 44.5 % | **38.3 %** | 33.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 23.50 € | **22.00 €** | 16.1 % | **8.7 %** | 22.32 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 28.50 € | **27.00 €** | 26.7 % | **20.0 %** | 27.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 18.00 € | **16.50 €** | 47.4 % | **35.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 21.00 € | **19.50 €** | 29.1 % | **19.9 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Nefrit | 117.50 € | **116.00 €** | 9.6 % | **8.2 %** | 116.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.00 €** | 56.1 % | **38.8 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 128.90 € | **127.50 €** | 45.7 % | **44.1 %** | 127.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **11.50 €** | 47.3 % | **31.3 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 15.90 € | **14.50 €** | 56.1 % | **42.4 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.90 € | **18.50 €** | 37.7 % | **28.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.60 €** | 55.5 % | **29.9 %** | 6.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.30 € | **5.10 €** | 48.5 % | **20.2 %** | 5.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.90 € | **9.80 €** | 30.1 % | **17.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 157.00 € | **155.90 €** | 9.8 % | **9.0 %** | 155.93 € | cena podľa najlacnejšieho iného predajcu |
| Motor na ovládanie závesov SwitchBot Rod 2 (biely) | 54.90 € | **53.90 €** | 25.6 % | **23.3 %** | 53.91 € | cena podľa najlacnejšieho iného predajcu |
| Anycubic Photon Mono M7 3D printer | 372.00 € | **371.00 €** | 6.1 % | **5.9 %** | 371.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 7.80 € | **6.80 €** | 38.8 % | **21.0 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42102SV | 80.90 € | **79.90 €** | 9.0 % | **7.7 %** | 80.00 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.50 € | **34.50 €** | 14.5 % | **11.3 %** | 34.67 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 35.50 € | **34.50 €** | 13.2 % | **10.0 %** | 34.67 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 55.50 € | **54.50 €** | 7.0 % | **5.1 %** | 54.69 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 92.00 € | **91.00 €** | 6.6 % | **5.5 %** | 91.19 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.50 € | **31.50 €** | 12.4 % | **9.0 %** | 31.79 € | cena podľa najlacnejšieho iného predajcu |
| Budík analogový TechnoLine WT 757W | 27.50 € | **26.50 €** | 14.3 % | **10.1 %** | 26.79 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální projekční TechnoLine WT 538 | 34.00 € | **33.00 €** | 12.1 % | **8.8 %** | 33.29 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7235 | 31.50 € | **30.50 €** | 11.1 % | **7.6 %** | 30.79 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny TechnoLine WT 3100 do koupelny | 23.50 € | **22.50 €** | 11.8 % | **7.0 %** | 22.79 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7400 | 31.50 € | **30.50 €** | 9.2 % | **5.7 %** | 30.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 32.00 € | **31.00 €** | 8.5 % | **5.1 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu |
| Multimeter Uni-T UT256 | 27.00 € | **26.00 €** | 10.9 % | **6.8 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Ručný multimeter do auta UNI-T UT107 | 27.50 € | **26.50 €** | 12.2 % | **8.2 %** | 26.79 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 24.50 € | **23.50 €** | 9.8 % | **5.3 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 22.00 € | **21.00 €** | 11.4 % | **6.4 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT202BT Inteligentný svorkový multimeter | 38.50 € | **37.50 €** | 8.6 % | **5.8 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 53.50 € | **52.50 €** | 14.5 % | **12.4 %** | 52.79 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.50 € | **42.50 €** | 13.9 % | **11.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 53.50 € | **52.50 €** | 10.4 % | **8.4 %** | 52.79 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 63.50 € | **62.50 €** | 7.7 % | **6.0 %** | 62.79 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní vodní filtr GARNI WF 45T | 18.50 € | **17.50 €** | 11.2 % | **5.2 %** | 17.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.00 € | **47.00 €** | 14.0 % | **11.6 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.00 € | **62.00 €** | 14.5 % | **12.6 %** | 62.29 € | cena podľa najlacnejšieho iného predajcu |
| AMIKO diaľkové ovládanie Univerzálny, HD - SD | 14.00 € | **13.00 €** | 22.7 % | **13.9 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.00 € | **82.00 €** | 17.4 % | **16.0 %** | 82.29 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 77.00 € | **76.00 €** | 18.0 % | **16.5 %** | 76.29 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 66.00 € | **65.00 €** | 16.8 % | **15.1 %** | 65.29 € | cena podľa najlacnejšieho iného predajcu |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 21.50 € | **20.50 €** | 13.2 % | **7.9 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 32.50 € | **31.50 €** | 16.8 % | **13.2 %** | 31.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 94.50 € | **93.50 €** | 21241.5 % | **21015.6 %** | 93.79 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.00 € | **59.00 €** | 20.5 % | **18.5 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.00 € | **84.00 €** | 15.2 % | **13.8 %** | 84.29 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.00 € | **21.00 €** | 11.2 % | **6.1 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu |
| Octagon SFX6018 S2 IP HD | 74.00 € | **73.00 €** | 7.1 % | **5.7 %** | 73.29 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 27.50 € | **26.50 €** | 12.6 % | **8.5 %** | 26.79 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 36.50 € | **35.50 €** | 18.9 % | **15.6 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 137.00 € | **136.00 €** | 14.9 % | **14.0 %** | 136.29 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-797 5G | 22.00 € | **21.00 €** | 25.1 % | **19.4 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 25.50 € | **24.50 €** | 10.7 % | **6.3 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.50 € | **27.50 €** | 29.5 % | **25.0 %** | 27.79 € | cena podľa najlacnejšieho iného predajcu |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 66.50 € | **65.50 €** | 7.1 % | **5.4 %** | 65.79 € | cena podľa najlacnejšieho iného predajcu |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.00 € | **25.00 €** | 9.5 % | **5.3 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.50 € | **32.50 €** | 8.8 % | **5.6 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.00 € | **56.00 €** | 7.0 % | **5.1 %** | 56.39 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 107.00 € | **106.00 €** | 11.2 % | **10.2 %** | 106.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 243.50 € | **242.50 €** | 14.0 % | **13.6 %** | 242.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 136.00 € | **135.00 €** | 13.5 % | **12.7 %** | 135.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny mikroohmmer Uni-T UT620C+ | 180.00 € | **179.00 €** | 6.4 % | **5.8 %** | 179.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 155.50 € | **154.50 €** | 15.1 % | **14.3 %** | 154.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-2m endoskop | 191.00 € | **190.00 €** | 14.9 % | **14.3 %** | 190.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-3m endoskop | 254.50 € | **253.50 €** | 15.0 % | **14.6 %** | 253.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 85.00 € | **84.00 €** | 12.4 % | **11.1 %** | 84.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 60.50 € | **59.50 €** | 11.2 % | **9.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 52.50 € | **51.50 €** | 9.7 % | **7.6 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 80.00 € | **79.00 €** | 11.2 % | **9.8 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 168.00 € | **167.00 €** | 13.5 % | **12.8 %** | 167.39 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 191.50 € | **190.50 €** | 13.8 % | **13.2 %** | 190.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 325.00 € | **324.00 €** | 11.0 % | **10.7 %** | 324.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 258.00 € | **257.00 €** | 14.2 % | **13.7 %** | 257.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 151.00 € | **150.00 €** | 13.4 % | **12.6 %** | 150.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1291.00 € | **1290.00 €** | 7.3 % | **7.2 %** | 1290.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 142.00 € | **141.00 €** | 10.1 % | **9.4 %** | 141.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 57.50 € | **56.50 €** | 19.7 % | **17.7 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **25.00 €** | 15.3 % | **10.9 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 276.00 € | **275.00 €** | 7.3 % | **6.9 %** | 275.39 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V100 | 23.00 € | **22.00 €** | 10.7 % | **5.9 %** | 22.39 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 56.50 € | **55.50 €** | 13.4 % | **11.4 %** | 55.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz KM2240 Connect C200 Tuya Wi-Fi | 166.00 € | **165.00 €** | 12.8 % | **12.2 %** | 165.39 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 275.00 € | **274.00 €** | 6.2 % | **5.8 %** | 274.39 € | cena podľa najlacnejšieho iného predajcu |
| HP ENVY 6520e AiO (714N9B) | 99.50 € | **98.50 €** | 6.5 % | **5.4 %** | 98.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.50 € | **44.50 €** | 15.4 % | **12.9 %** | 44.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 241.50 € | **240.50 €** | 9.6 % | **9.1 %** | 240.89 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 135.00 € | **134.00 €** | 8.6 % | **7.8 %** | 134.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 93.00 € | **92.00 €** | 11.2 % | **10.0 %** | 92.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 207.50 € | **206.50 €** | 9.4 % | **8.9 %** | 206.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.00 € | **194.00 €** | 10.5 % | **9.9 %** | 194.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 875.00 € | **874.00 €** | 9.5 % | **9.4 %** | 874.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 686.00 € | **685.00 €** | 5.7 % | **5.6 %** | 685.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 323.50 € | **322.50 €** | 8.7 % | **8.3 %** | 322.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 635.00 € | **634.00 €** | 5.9 % | **5.7 %** | 634.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 671.50 € | **670.50 €** | 8.6 % | **8.4 %** | 670.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 700.50 € | **699.50 €** | 9.4 % | **9.3 %** | 699.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 88.00 € | **87.00 €** | 12.3 % | **11.0 %** | 87.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 26.50 € | **25.50 €** | 14.8 % | **10.5 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 13.50 € | **12.50 €** | 16.8 % | **8.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 14.50 € | **13.50 €** | 19.3 % | **11.1 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 26.50 € | **25.50 €** | 19.5 % | **15.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Graphite Black | 229.50 € | **228.50 €** | 16.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 229.50 € | **228.50 €** | 16.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| REDMI Headphone Neo Black | 46.50 € | **45.50 €** | 8.6 % | **6.3 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Set PowerClean M+náhr. zdarma | 21.00 € | **20.00 €** | 13.0 % | **7.6 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 15.00 € | **14.00 €** | 48.0 % | **38.1 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **28.00 €** | 47.5 % | **42.5 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iP17PM FIXGFADA-1603-BK | 12.00 € | **11.00 €** | 20.6 % | **10.5 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 19.50 € | **18.50 €** | 20.2 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 245.90 € | **245.00 €** | 8.3 % | **7.9 %** | 245.06 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.90 € | **34.00 €** | 16.6 % | **13.6 %** | 34.15 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti UNI-T UT333S | 23.90 € | **23.00 €** | 12.6 % | **8.3 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40T | 28.90 € | **28.00 €** | 12.4 % | **8.9 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Freewell set of 4 ND filters for DJI Osmo Action 5 Pro | 41.90 € | **41.00 €** | 15.7 % | **13.3 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 765.90 € | **765.00 €** | 9.4 % | **9.2 %** | 765.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 4.80 € | **4.10 €** | 36.4 % | **16.6 %** | 4.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 4.80 € | **4.10 €** | 36.4 % | **16.6 %** | 4.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.50 € | **5.80 €** | 30.5 % | **16.4 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.50 € | **5.80 €** | 30.5 % | **16.4 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.50 € | **9.80 €** | 40.9 % | **31.5 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.50 € | **9.80 €** | 41.3 % | **31.9 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester Ancel BA101 8-30V DC | 43.50 € | **42.90 €** | 21.9 % | **20.2 %** | 42.99 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1009900 | 48.50 € | **47.90 €** | 16.0 % | **14.6 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka do vlhka, priama, IP44, čierna-oran... | 3.40 € | **2.80 €** | 47.0 % | **21.1 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 13.95 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.50 € | **77.90 €** | 15.0 % | **14.1 %** | 77.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **20.00 €** | 48.5 % | **44.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Samsung G Tab FIXTOT-1649 | 19.50 € | **19.00 €** | 52.1 % | **48.2 %** | 19.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.63 € | cena podľa najlacnejšieho iného predajcu |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 114.50 € | **114.00 €** | 12.6 % | **12.1 %** | 114.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 150.50 € | **150.00 €** | 12.0 % | **11.6 %** | 150.18 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT205E digitálny klešťový multimeter | 46.00 € | **45.50 €** | 6.2 % | **5.0 %** | 45.69 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 900.00 € | **899.50 €** | 14.4 % | **14.3 %** | 899.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1268.00 € | **1267.50 €** | 8.0 % | **8.0 %** | 1267.72 € | cena podľa najlacnejšieho iného predajcu |
| Čítacia lampa Yeelight Led Neck Book Light | 13.50 € | **13.00 €** | 35.8 % | **30.8 %** | 13.23 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.27 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze GTS 4 (čierne) | 23.00 € | **22.50 €** | 14.9 % | **12.4 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 23.00 € | **22.50 €** | 14.9 % | **12.4 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3224 | 25.00 € | **24.50 €** | 7.3 % | **5.2 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 108.50 € | **108.00 €** | 6.9 % | **6.4 %** | 108.29 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 406.00 € | **405.50 €** | 10.0 % | **9.9 %** | 405.83 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE Apex | 494.00 € | **493.50 €** | 28.5 % | **28.3 %** | 493.88 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.00 € | **44.50 €** | 7.0 % | **5.8 %** | 44.89 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 123.00 € | **122.50 €** | 5.6 % | **5.2 %** | 122.89 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 20.00 € | **19.50 €** | 13.9 % | **11.1 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 49.50 € | **49.00 €** | 19.3 % | **18.1 %** | 49.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prepínač WiFi WiFi Sonoff Dual R3 Lite | 12.00 € | **11.50 €** | 31.5 % | **26.0 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 140.00 € | **139.50 €** | 11.5 % | **11.1 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podlinkové a nábytkové svietidlo stmieva... | 20.50 € | **20.00 €** | 38.8 % | **35.4 %** | 20.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.50 € | **20.00 €** | 38.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.50 € | **20.00 €** | 38.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 225.50 € | **225.00 €** | 17.8 % | **17.6 %** | 225.46 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 346.50 € | **346.00 €** | 14.3 % | **14.1 %** | 346.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 26W, 2340lm, 3CCT, IP65... | 13.50 € | **13.00 €** | 38.4 % | **33.3 %** | 13.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 26W, 2340lm, 3CCT, IP65... | 13.50 € | **13.00 €** | 38.4 % | **33.3 %** | 13.48 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier D12 (čierny) | 81.50 € | **81.00 €** | 5.8 % | **5.2 %** | 81.48 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier D12 (hnedý) | 81.50 € | **81.00 €** | 5.8 % | **5.2 %** | 81.48 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.50 € | **33.00 €** | 8.8 % | **7.2 %** | 33.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 37.50 € | **37.00 €** | 12.7 % | **11.2 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 41.50 € | **41.00 €** | 40.9 % | **39.2 %** | 41.49 € | cena podľa najlacnejšieho iného predajcu |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 59.50 € | **59.00 €** | 19.4 % | **18.4 %** | 59.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 43.50 € | **43.00 €** | 12.8 % | **11.5 %** | 43.49 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7344H | 110.50 € | **110.00 €** | 9.8 % | **9.3 %** | 110.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7345H | 147.50 € | **147.00 €** | 10.0 % | **9.6 %** | 147.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 120.50 € | **120.00 €** | 8.8 % | **8.3 %** | 120.50 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.50 € | **71.00 €** | 17.2 % | **16.4 %** | 71.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.50 € | **31.00 €** | 10.5 % | **8.8 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V10 (PC / PS3 / PS4 / XBOX ONE / SW... | 212.90 € | **212.50 €** | 19.5 % | **19.2 %** | 212.84 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 112.90 € | **112.50 €** | 8.5 % | **8.1 %** | 112.85 € | cena podľa najlacnejšieho iného predajcu |
| Chytrá meteorologická stanice GARNI 925T | 159.90 € | **159.50 €** | 13.3 % | **13.1 %** | 159.85 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, strieborná... | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.90 € | **212.50 €** | 37.7 % | **37.5 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, strieborná ... | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, zlatá) | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 126.90 € | **126.50 €** | 24.8 % | **24.4 %** | 126.88 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 221 SV | 120.90 € | **120.50 €** | 9.4 % | **9.1 %** | 120.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9252I | 252.90 € | **252.50 €** | 7.9 % | **7.7 %** | 252.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **12.50 €** | 47.7 % | **43.1 %** | 12.66 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla ZigBee Avatto ZTS02-EU-W... | 12.90 € | **12.50 €** | 16.1 % | **12.5 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný mini spínač ZigBee SONOFF ZBMINIR2 | 10.90 € | **10.50 €** | 15.4 % | **11.2 %** | 10.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.90 € | **11.50 €** | 33.6 % | **29.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.90 € | **11.50 €** | 38.0 % | **33.4 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 24V, 4,17A, 100W,... | 10.90 € | **10.50 €** | 54.4 % | **48.7 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.20 € | **7.80 €** | 34.7 % | **28.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight ochranný box na káble a predlžovacie prívody... | 18.90 € | **18.50 €** | 60.4 % | **57.0 %** | 18.74 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter Habotest HT127B | 27.90 € | **27.50 €** | 11.1 % | **9.5 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.90 € | **52.50 €** | 9.6 % | **8.8 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **19.50 €** | 15.9 % | **13.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO436BL | 35.90 € | **35.50 €** | 8.7 % | **7.5 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO754K | 35.90 € | **35.50 €** | 8.2 % | **7.0 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7059S | 35.90 € | **35.50 €** | 8.2 % | **7.0 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 821.90 € | **821.50 €** | 7.1 % | **7.0 %** | 821.51 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 400.90 € | **400.50 €** | 38.4 % | **38.2 %** | 400.89 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 669.90 € | **669.50 €** | 31.5 % | **31.4 %** | 669.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 491.90 € | **491.50 €** | 40.7 % | **40.6 %** | 491.89 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 534.90 € | **534.50 €** | 41.7 % | **41.6 %** | 534.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 7.90 € | **7.60 €** | 48.7 % | **43.0 %** | 7.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 263.00 € | **262.90 €** | 23.0 % | **22.9 %** | 262.96 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 631.00 € | **630.90 €** | 38.5 % | **38.5 %** | 630.99 € | cena podľa najlacnejšieho iného predajcu |
| Polk Audio SIGNATURE ES30 centr. Blac | 266.00 € | **265.90 €** | 68.7 % | **68.6 %** | 266.00 € | cena podľa najlacnejšieho iného predajcu |
| Múdra zásuvka TP-Link Tapo P300 3x french socket, 2x... | 38.00 € | **37.90 €** | 5.9 % | **5.6 %** | 37.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LEIFHEIT 51003 Vysavač okna+tyč 43cm+mop | 45.00 € | **44.90 €** | 5.9 % | **5.7 %** | 44.95 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Držák rolí PARAT | 23.00 € | **22.90 €** | 10.4 % | **9.9 %** | 22.98 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 264 AP | 58.00 € | **57.90 €** | 8.2 % | **8.0 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **51.90 €** | 6.2 % | **6.0 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9215AV | 32.00 € | **31.90 €** | 7.3 % | **7.0 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 21.00 € | **20.90 €** | 9.4 % | **8.9 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Filtrácia CPL Freewell do DJI Air 3S | 17.00 € | **16.90 €** | 8.7 % | **8.1 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.80 €** | 37.4 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 182.00 € | **181.90 €** | 10.5 % | **10.5 %** | 181.95 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 182.00 € | **181.90 €** | 10.5 % | **10.5 %** | 181.95 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 81.00 € | **80.90 €** | 8.8 % | **8.7 %** | 80.97 € | cena podľa najlacnejšieho iného predajcu |

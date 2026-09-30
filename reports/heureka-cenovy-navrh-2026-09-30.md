# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-30

Vstup: `premiumstore-sk_2026-09-30_15-17.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6844**
- Návrh **zvýšiť** cenu: **295** produktov
- Návrh **znížiť** cenu: **572** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5977** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **58**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **509**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (295)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 912.00 € | **1125.50 €** | 3.1 % | **27.2 %** | 1125.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 631.50 € | **768.50 €** | 15.0 % | **40.0 %** | 768.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, strieborná ... | 212.50 € | **296.90 €** | 37.2 % | **91.7 %** | 297.00 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet SmartCam C960 Ultra | 76.00 € | **126.90 €** | 14.8 % | **91.7 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj LaserPecker LP2 Plus | 946.00 € | **994.90 €** | 15.0 % | **20.9 %** | 994.95 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-150 s rozlíšením 1080p (tmavošedý) | 190.50 € | **238.90 €** | 15.1 % | **44.4 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 522.50 € | **570.50 €** | 15.0 % | **25.5 %** | 570.61 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **361.50 €** | 15.0 % | **32.6 %** | 361.62 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 GEN 3 (GS2203) | 495.90 € | **542.90 €** | 5.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 253.50 € | **299.50 €** | 14.9 % | **35.8 %** | 299.74 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 Max | 696.00 € | **737.00 €** | 12.8 % | **19.5 %** | 737.25 € | cena podľa najlacnejšieho iného predajcu |
| Creality Falcon A1 10W laserový gravírovací stroj | 439.50 € | **474.50 €** | 15.0 % | **24.2 %** | 474.57 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell ND pre OSMO 360 – balenie po 3... | 161.00 € | **189.50 €** | 12.0 % | **31.8 %** | 189.72 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 152.00 € | **179.50 €** | 12.5 % | **32.8 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa D156 (hnedý) 15,6" digitálny fotorámik | 126.00 € | **152.00 €** | 15.1 % | **38.8 %** | 152.05 € | cena podľa najlacnejšieho iného predajcu |
| Midland D10 DMR digital radio | 166.50 € | **190.50 €** | 10.1 % | **26.0 %** | 190.65 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 704.50 € | **728.00 €** | 15.0 % | **18.8 %** | 728.08 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LK10 s väčším formátom | 268.50 € | **291.00 €** | 9.9 % | **19.1 %** | 291.08 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, strieborná) | 253.00 € | **275.50 €** | 15.0 % | **25.2 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 275.50 € | **297.50 €** | 28.2 % | **38.5 %** | 297.69 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN CUV-655 55 W UV-C žiarovka | 97.50 € | **118.90 €** | 15.2 % | **40.4 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN CPF-3500 11 W UV tlakový filter pre jazierka | 98.50 € | **118.90 €** | 15.1 % | **38.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 179.00 € | **198.90 €** | 19.5 % | **32.8 %** | 198.99 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 150Ah MHPower L150-12-OUT | 624.50 € | **644.00 €** | 1.8 % | **5.0 %** | 628.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 197.90 € | **217.00 €** | 24.6 % | **36.7 %** | 217.18 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT302D+ | 60.50 € | **79.50 €** | 14.9 % | **51.0 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame D20 | 55.00 € | **74.00 €** | 24.0 % | **66.8 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 292.00 € | **310.00 €** | 15.0 % | **22.1 %** | 310.10 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné fotochromatické slnečné okuliare BlitzW... | 59.50 € | **76.50 €** | 24.7 % | **60.4 %** | 76.66 € | cena podľa najlacnejšieho iného predajcu |
| Subwoofer Edifier Airpulse SW8 (čierny) | 309.50 € | **326.00 €** | 5.1 % | **10.7 %** | 326.29 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na cvičení Rebel Active RBA-3159-2PU na jóg... | 30.00 € | **45.50 €** | 13.4 % | **72.0 %** | 45.83 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 245.50 € | **260.90 €** | 8.3 % | **15.0 %** | 260.99 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate 7 | 196.00 € | **211.00 €** | 12.7 % | **21.3 %** | 211.42 € | cena podľa najlacnejšieho iného predajcu |
| PGYTECH LinkGo Dual Mount verzia remienka na telefón... | 25.00 € | **39.90 €** | 14.2 % | **82.2 %** | 39.95 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Voyager Slim 45 W FIXCT45-3C1A-WH | 24.90 € | **39.50 €** | 11.8 % | **77.3 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN CPF-1500 9 W UV tlakový filter pre jazierka | 65.50 € | **79.50 €** | 14.8 % | **39.4 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS1 Pro – štartér do auta | 70.00 € | **84.00 €** | 17.1 % | **40.5 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri 2 | 327.00 € | **339.50 €** | 14.9 % | **19.3 %** | 339.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight infražiarič na terasu 2000W | 55.50 € | **67.90 €** | 5.5 % | **29.0 %** | 67.96 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 79.50 € | **91.50 €** | 15.1 % | **32.5 %** | 91.56 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 165.50 € | **176.90 €** | 39.5 % | **49.1 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.90 € | **38.00 €** | 35.2 % | **90.9 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.50 € | **73.50 €** | 9.1 % | **28.3 %** | 73.89 € | cena podľa najlacnejšieho iného predajcu |
| Sequential Shifter Moza Racing SGP RS059 | 129.00 € | **140.00 €** | 10.0 % | **19.3 %** | 140.42 € | cena podľa najlacnejšieho iného predajcu |
| PGYTECH LinkGo Dual Mount verzia remienka na telefón... | 19.00 € | **29.90 €** | 13.6 % | **78.7 %** | 29.95 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mop PROSCENIC F10 Ultra | 177.90 € | **188.50 €** | 15.0 % | **21.9 %** | 188.58 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S s fotochromatickými sklami | 54.00 € | **64.50 €** | 16.4 % | **39.1 %** | 64.65 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 181.90 € | **191.50 €** | 10.5 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 181.90 € | **191.50 €** | 10.5 % | **16.3 %** | 191.79 € | cena podľa najlacnejšieho iného predajcu |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 99.50 € | **109.00 €** | 10.2 % | **20.7 %** | 109.46 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell VND s polarizáciou | 70.50 € | **79.90 €** | 15.1 % | **30.4 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 41.00 € | **50.00 €** | 10.7 % | **35.0 %** | 50.29 € | cena podľa najlacnejšieho iného predajcu |
| Filter nádoby na dym LaserPecker Air Purifier | 85.50 € | **94.50 €** | 15.1 % | **27.2 %** | 94.81 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 36.90 € | **45.50 €** | 10.9 % | **36.7 %** | 45.63 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit TBOX-Plus 4+64 GB | 122.00 € | **130.50 €** | 8.6 % | **16.2 %** | 130.63 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 954.50 € | **963.00 €** | 15.0 % | **16.1 %** | 963.18 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 45.50 € | **54.00 €** | 15.0 % | **36.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 207.90 € | **216.00 €** | 6.1 % | **10.2 %** | 216.12 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 135.00 € | **143.00 €** | 13.5 % | **20.2 %** | 143.29 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti štekaniu Rojeco 1000M PD521 ... | 34.90 € | **42.50 €** | 15.4 % | **40.6 %** | 42.60 € | cena podľa najlacnejšieho iného predajcu |
| Neweer TL97C RGB LED farebné foto svetlo | 30.90 € | **38.50 €** | 15.5 % | **43.8 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľné činky MERACH MR-2444, sada 2 ks | 41.90 € | **49.50 €** | 15.2 % | **36.1 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Venta H13 & Anti-Formaldehyd set 1er VPE | 48.50 € | **56.00 €** | 11.0 % | **28.1 %** | 56.04 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (biely) | 91.50 € | **99.00 €** | 11.1 % | **20.2 %** | 99.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 91.50 € | **99.00 €** | 10.1 % | **19.2 %** | 99.13 € | cena podľa najlacnejšieho iného predajcu |
| Creality Ender-3 V3 Plus 3D Printer | 347.50 € | **355.00 €** | 15.0 % | **17.5 %** | 355.19 € | cena podľa najlacnejšieho iného predajcu |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 25.90 € | **33.00 €** | 16.7 % | **48.6 %** | 33.49 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 102.00 € | **109.00 €** | 10.9 % | **18.5 %** | 109.04 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostic Scanner OBD2 Ancel AS500/AC105 | 38.00 € | **45.00 €** | 15.1 % | **36.3 %** | 45.09 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 389.90 € | **396.90 €** | 38.6 % | **41.1 %** | 396.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 600D | 129.00 € | **136.00 €** | 14.9 % | **21.1 %** | 136.13 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 40.50 € | **47.50 €** | 5.6 % | **23.8 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 40.50 € | **47.50 €** | 5.6 % | **23.8 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 205.50 € | **212.50 €** | 6.2 % | **9.9 %** | 212.80 € | cena podľa najlacnejšieho iného predajcu |
| Mini elektrické čerpadlo Cycplus AS2 PRO MAX | 81.00 € | **88.00 €** | 14.8 % | **24.7 %** | 88.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 78.90 € | **85.50 €** | 6.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| AOCHUAN X Gimbal (sivý) | 46.00 € | **52.50 €** | 14.5 % | **30.6 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 53.50 € | **60.00 €** | 6.3 % | **19.2 %** | 60.19 € | cena podľa najlacnejšieho iného predajcu |
| ETA Nubela 2569 90100, bílý | 22.00 € | **28.50 €** | 19.4 % | **54.7 %** | 28.75 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 151.50 € | **158.00 €** | 11.1 % | **15.9 %** | 158.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight Dok multi stojan pre Dyson V12 | 83.00 € | **89.50 €** | 26.2 % | **36.1 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 77.90 € | **84.00 €** | 5.4 % | **13.7 %** | 84.40 € | cena podľa najlacnejšieho iného predajcu |
| BEKO HII64500UFT | 357.90 € | **363.90 €** | 5.1 % | **6.9 %** | 363.92 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 41.50 € | **47.50 €** | 5.7 % | **21.0 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT665P-5m endoskop | 39.00 € | **45.00 €** | 15.0 % | **32.7 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 53.00 € | **59.00 €** | 11.2 % | **23.8 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Neewer R06 s okrúhlym LED osvetlením pre sel... | 21.50 € | **27.50 €** | 14.5 % | **46.4 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.00 € | **25.00 €** | 15.5 % | **52.0 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN X2 Standard – stabilizátor (biely) | 64.00 € | **69.50 €** | 28.1 % | **39.1 %** | 69.61 € | cena podľa najlacnejšieho iného predajcu |
| Tester obvodov Ancel PB500 | 94.00 € | **99.50 €** | 38.7 % | **46.8 %** | 99.89 € | cena podľa najlacnejšieho iného predajcu |
| UV-C lampa SUNSUN CUV-207 | 26.00 € | **31.50 €** | 14.3 % | **38.4 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-604B | 34.00 € | **39.50 €** | 21.3 % | **41.0 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Ultra-thin Motion Sensor Closet Light A50 | 18.50 € | **24.00 €** | 14.7 % | **48.8 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 119.50 € | **125.00 €** | 9.4 % | **14.5 %** | 125.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 43.50 € | **49.00 €** | 12.1 % | **26.2 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Tecno Megabook K15S 13th i3 512+8 GB | 418.90 € | **424.00 €** | 10.1 % | **11.4 %** | 424.28 € | cena podľa najlacnejšieho iného predajcu |
| PLA drevené vlákno (indický dub) | 11.90 € | **17.00 €** | 16.1 % | **65.9 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 44.00 € | **49.00 €** | 11.7 % | **24.4 %** | 49.04 € | cena podľa najlacnejšieho iného predajcu |
| Laica LAI KJ2000W | 80.00 € | **85.00 €** | 10.0 % | **16.9 %** | 85.05 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 4,5 l automatické krmítko pre zvieratá WiFi v... | 42.50 € | **47.50 €** | 14.6 % | **28.1 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 154.50 € | **159.50 €** | 5.1 % | **8.5 %** | 159.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015502 Mikrovlnná trouba | 118.00 € | **122.50 €** | 10.0 % | **14.2 %** | 122.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 44.50 € | **49.00 €** | 24.6 % | **37.2 %** | 49.34 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 160.50 € | **165.00 €** | 10.8 % | **13.9 %** | 165.40 € | cena podľa najlacnejšieho iného predajcu |
| 4-zónový zavlažovací ovládač RainPoint ITV447 | 57.50 € | **62.00 €** | 29.3 % | **39.4 %** | 62.48 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO hluboká pánev 24 cm | 30.50 € | **34.90 €** | 13.4 % | **29.8 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| WHIRLPOOL TDLRB 65242BS EU/N | 361.90 € | **366.00 €** | 5.0 % | **6.2 %** | 366.29 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6840E0 | 72.90 € | **77.00 €** | 5.5 % | **11.4 %** | 77.20 € | cena podľa najlacnejšieho iného predajcu |
| Ozvučovací systém KRUGER MATZ KM1712 | 173.00 € | **177.00 €** | 22.4 % | **25.2 %** | 177.05 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 252.50 € | **256.50 €** | 11.7 % | **13.5 %** | 256.59 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Excelent 0,1 dB LNB Monoblock LTE | 12.50 € | **16.50 €** | 10.2 % | **45.5 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 103.00 € | **107.00 €** | 16.6 % | **21.2 %** | 107.42 € | cena podľa najlacnejšieho iného predajcu |
| Koleso MOZA RS068 FSR V2 (PC) | 674.50 € | **678.50 €** | 14.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Samsung VG-SCFC55SGMXC | 124.00 € | **127.90 €** | 10.3 % | **13.8 %** | 127.96 € | cena podľa najlacnejšieho iného predajcu |
| GPS bike computer Cycplus M1 | 25.90 € | **29.50 €** | 6.5 % | **21.3 %** | 29.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 5.90 € | **9.40 €** | 24.3 % | **98.0 %** | 9.49 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 188.00 € | **191.50 €** | 5.0 % | **7.0 %** | 191.68 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 22.50 € | **26.00 €** | 5.1 % | **21.5 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický ventilátor GOOLOO F3 (biely) | 32.00 € | **35.50 €** | 15.2 % | **27.8 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Mini projektor Phillips N-140 s rozlíšením 720p (biely) | 102.50 € | **106.00 €** | 14.8 % | **18.8 %** | 106.33 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 273.00 € | **276.50 €** | 5.8 % | **7.1 %** | 276.89 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pre SG A37 5G FIXOP3-1703-BRW | 12.00 € | **15.50 €** | 10.9 % | **43.2 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 121.50 € | **125.00 €** | 16.8 % | **20.1 %** | 125.50 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 141.50 € | **144.90 €** | 5.1 % | **7.6 %** | 145.00 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco PD529 1000m výcvikový obojok pre psov s 2 obo... | 54.50 € | **57.90 €** | 15.2 % | **22.4 %** | 58.00 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco PD5291000m Výcvikový obojok pre psov s 2 oboj... | 54.50 € | **57.90 €** | 15.2 % | **22.4 %** | 58.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **20.00 €** | 23.9 % | **46.6 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníkový biely rám pre inštaláciu LED panel... | 13.90 € | **17.00 €** | 38.2 % | **69.0 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníkový biely rám pre inštaláciu LED panel... | 11.90 € | **14.90 €** | 38.6 % | **73.6 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT520III TTL | 62.50 € | **65.50 €** | 15.2 % | **20.7 %** | 65.75 € | cena podľa najlacnejšieho iného predajcu |
| Tefal SV4111E0 | 82.00 € | **85.00 €** | 5.0 % | **8.8 %** | 85.33 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 81.00 € | **84.00 €** | 14.9 % | **19.1 %** | 84.39 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-E81AR 8.0 Mpix vnitřní PT kamera s IR pří... | 52.00 € | **55.00 €** | 23.2 % | **30.3 %** | 55.41 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Apple 17PM FIXOP3-1603-BK | 12.00 € | **15.00 €** | 10.9 % | **38.6 %** | 15.46 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 10.00 € | **13.00 €** | 39.0 % | **80.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Súprava nástrojov FNIRSI pre model HS-02A | 26.00 € | **29.00 €** | 14.0 % | **27.1 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt Apple iPho 16P FIXMMY-1402-BK | 13.90 € | **16.90 €** | 11.7 % | **35.8 %** | 16.92 € | cena podľa najlacnejšieho iného predajcu |
| Tesla MX301BX | 22.90 € | **25.50 €** | 10.4 % | **22.9 %** | 25.58 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 131.00 € | **133.50 €** | 24.7 % | **27.1 %** | 133.54 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 20.50 € | **23.00 €** | 16.2 % | **30.4 %** | 23.28 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester Ancel BA201 8-16V DC | 54.00 € | **56.50 €** | 16.0 % | **21.3 %** | 56.79 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 112.50 € | **115.00 €** | 5.2 % | **7.5 %** | 115.29 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CS-85D Softbox | 72.00 € | **74.50 €** | 19.0 % | **23.1 %** | 74.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava nástrojov FNIRSI pre model HS-02B | 26.00 € | **28.50 €** | 14.0 % | **24.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Sunnylife 2 v 1 pre DJI RC Plus 2 | 14.00 € | **16.50 €** | 13.1 % | **33.3 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L WiFi verzia Bl Automatický dávkovač krmiva | 35.50 € | **38.00 €** | 15.3 % | **23.4 %** | 38.42 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Minix SF16T s uhlopriečkou 16" | 229.50 € | **232.00 €** | 20.5 % | **21.8 %** | 232.46 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 10.50 € | **13.00 €** | 45.9 % | **80.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI GD-02 Detektor horľavých plynov s farebným di... | 34.50 € | **37.00 €** | 9.4 % | **17.4 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| Ručný multimeter do auta UNI-T UT107 | 25.90 € | **28.00 €** | 5.7 % | **14.3 %** | 28.39 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall RFC-676 PRO strojček na strihanie domácich ... | 34.90 € | **37.00 €** | 15.1 % | **22.0 %** | 37.42 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 244.90 € | **247.00 €** | 28.2 % | **29.3 %** | 247.01 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová vesta HMS PREMIUM KTO30 | 127.90 € | **129.90 €** | 3.4 % | **5.1 %** | 126.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 66.90 € | **68.90 €** | 8.0 % | **11.2 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3407 1200W 12V | 184.50 € | **186.50 €** | 5.8 % | **7.0 %** | 186.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 68.50 € | **70.50 €** | 10.6 % | **13.8 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.50 € | **13.50 €** | 8.2 % | **27.0 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine MA10410 | 74.00 € | **76.00 €** | 5.6 % | **8.4 %** | 76.29 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MVC72HGA | 29.50 € | **31.50 €** | 8.6 % | **16.0 %** | 31.80 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 15.50 € | **17.50 €** | 13.8 % | **28.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 15 FIXBLM-1200-BP | 17.50 € | **19.50 €** | 11.9 % | **24.7 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA (biely) | 10.50 € | **12.50 €** | 12.9 % | **34.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 112.00 € | **114.00 €** | 9.8 % | **11.8 %** | 114.42 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO Rapid PLA+ (hnedý) | 11.00 € | **13.00 €** | 14.8 % | **35.7 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco A12 5M automatické zaťahovacie vodítko pre ps... | 10.00 € | **12.00 €** | 15.0 % | **38.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| 2 v 1 Diagnostic Scanner OBD2 and Battery Tester Anc... | 48.00 € | **49.90 €** | 17.4 % | **22.1 %** | 49.92 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2113 PRO Ovládanie letu PC | 30.00 € | **31.90 €** | 9.1 % | **16.0 %** | 31.97 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 16.00 € | **17.90 €** | 50.2 % | **68.0 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| TricutBrush 2.0 L10 Ultra/L10s Ultra/L20 Ultra/L20 U... | 38.00 € | **39.90 €** | 14.5 % | **20.2 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| Multimeter Uni-T UT256 | 25.90 € | **27.50 €** | 6.3 % | **12.9 %** | 27.71 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 81.90 € | **83.50 €** | 5.5 % | **7.6 %** | 83.51 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXFLM2-1600-BK | 19.50 € | **21.00 €** | 10.6 % | **19.1 %** | 21.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 27.00 € | **28.50 €** | 14.9 % | **21.3 %** | 28.58 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač Rojeco 3L WiFi verzia Smart Feed (biely) | 37.00 € | **38.50 €** | 14.9 % | **19.6 %** | 38.58 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia Uni-T RCD UT582+ | 100.00 € | **101.50 €** | 9.8 % | **11.4 %** | 101.59 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 274.50 € | **276.00 €** | 7.5 % | **8.1 %** | 276.09 € | cena podľa najlacnejšieho iného predajcu |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 15.50 € | **17.00 €** | 7.3 % | **17.7 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 264 AP | 57.00 € | **58.50 €** | 6.3 % | **9.1 %** | 58.67 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-B1 1... | 12.50 € | **14.00 €** | 9.2 % | **22.3 %** | 14.25 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 16.50 € | **18.00 €** | 5.5 % | **15.1 %** | 18.25 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 23.00 € | **24.50 €** | 13.9 % | **21.3 %** | 24.83 € | cena podľa najlacnejšieho iného predajcu |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 149.50 € | **151.00 €** | 39.0 % | **40.4 %** | 151.35 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Lenovo Tab M11 FIXTOT-1296 | 14.00 € | **15.50 €** | 6.0 % | **17.3 %** | 15.86 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 73.50 € | **75.00 €** | 35.1 % | **37.8 %** | 75.38 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Struhadlo 4 v 1 COMFORTLINE | 12.50 € | **14.00 €** | 13.8 % | **27.5 %** | 14.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 58.00 € | **59.50 €** | 33.8 % | **37.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17P FIXPUM-1602-TR | 15.50 € | **17.00 €** | 10.2 % | **20.8 %** | 17.45 € | cena podľa najlacnejšieho iného predajcu |
| Termotaška Trizand 25635 30L | 10.50 € | **12.00 €** | 4.7 % | **19.7 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Avatto WT598 | 27.50 € | **28.90 €** | 17.5 % | **23.5 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 30.50 € | **31.90 €** | 11.7 % | **16.8 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 36.50 € | **37.90 €** | 14.8 % | **19.2 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| MENALUX CB104B | 20.90 € | **22.00 €** | 11.0 % | **16.8 %** | 22.10 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 20.90 € | **22.00 €** | 8.9 % | **14.7 %** | 22.32 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 63.90 € | **64.90 €** | 158.0 % | **162.0 %** | 64.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 35.00 € | **36.00 €** | 34.3 % | **38.1 %** | 36.01 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG Pro (čierny) | 10.50 € | **11.50 €** | 14.0 % | **24.8 %** | 11.51 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 27.90 € | **28.90 €** | 15.0 % | **19.1 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC410 KIT 3MPx, vonkajšia, I... | 60.00 € | **61.00 €** | 5.7 % | **7.5 %** | 61.05 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2198.90 € | **2199.90 €** | 17.0 % | **17.1 %** | 2200.00 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 43.00 € | **44.00 €** | 13.2 % | **15.8 %** | 44.10 € | cena podľa najlacnejšieho iného predajcu |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 392.90 € | **393.90 €** | 6.1 % | **6.4 %** | 394.00 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR TWIN - Black/Silver | 58.00 € | **59.00 €** | 19.4 % | **21.5 %** | 59.15 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, oran. ASR001 | 74.50 € | **75.50 €** | 13.2 % | **14.8 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, grey ASR002 | 74.50 € | **75.50 €** | 13.2 % | **14.8 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 43.00 € | **44.00 €** | 34.5 % | **37.6 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam S600L | 68.00 € | **69.00 €** | 14.9 % | **16.6 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa Pánev 26 cm | 18.00 € | **19.00 €** | 10.6 % | **16.8 %** | 19.31 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 37.00 € | **38.00 €** | 14.9 % | **18.1 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Black | 48.00 € | **49.00 €** | 9.9 % | **12.2 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Bluetooth reproduktor Blitzwolf BW-WA4 30W 4000mAh | 45.50 € | **46.50 €** | 16.1 % | **18.7 %** | 46.88 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 37.50 € | **38.50 €** | 14.6 % | **17.7 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 98.50 € | **99.50 €** | 5.3 % | **6.4 %** | 99.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti UNI-T UT333S | 22.50 € | **23.50 €** | 6.0 % | **10.7 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Girmi MX0301 | 23.50 € | **24.50 €** | 10.7 % | **15.4 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Multifeed Quattro LNB konvertor s LTE filtrem | 16.50 € | **17.50 €** | 23.2 % | **30.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Sunnylife 073523 | 23.50 € | **24.50 €** | 38.4 % | **44.3 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco Smart Laser Cat Toy | 16.00 € | **17.00 €** | 14.3 % | **21.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC43SGMXC | 127.00 € | **127.90 €** | 13.0 % | **13.8 %** | 127.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 3.80 € | **4.70 €** | 14.8 % | **42.0 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.00 € | **25.90 €** | 48.9 % | **54.3 %** | 25.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.00 € | **19.90 €** | 31.5 % | **37.7 %** | 19.97 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine WS 9251 | 52.00 € | **52.90 €** | 5.2 % | **7.0 %** | 52.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 3.90 € | **4.60 €** | 44.8 % | **70.8 %** | 4.69 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 349.90 € | **350.50 €** | 6.7 % | **6.8 %** | 350.73 € | cena podľa najlacnejšieho iného predajcu |
| Steba Výrobník Muffinů CM 3 | 57.90 € | **58.50 €** | 5.5 % | **6.6 %** | 58.51 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice WS 9050 | 63.90 € | **64.50 €** | 5.7 % | **6.7 %** | 64.69 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 52.90 € | **53.50 €** | 27.5 % | **28.9 %** | 53.84 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ML5301 | 48.90 € | **49.50 €** | 10.5 % | **11.9 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Hyper ABS Filament Creality (White) | 12.90 € | **13.50 €** | 15.0 % | **20.3 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 9.90 € | **10.50 €** | 27.6 % | **35.3 %** | 10.72 € | cena podľa najlacnejšieho iného predajcu |
| ELDONEX ECL-2015-SL Analogové hodiny | 11.90 € | **12.50 €** | 11.3 % | **16.9 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H90 2K IP, vonkajšia, duálna, PTZ, Wi-F... | 109.90 € | **110.50 €** | 4.8 % | **5.3 %** | 98.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung VG-SCFA43TKBXC | 68.90 € | **69.50 €** | 10.6 % | **11.6 %** | 69.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight elektrický sušiak oblečenia | 76.00 € | **76.50 €** | 4.9 % | **5.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Záťažová vesta HMS KTO05 | 31.50 € | **32.00 €** | 3.5 % | **5.2 %** | 26.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termoska BERGNER fľaša nerezová oceľ 0,5 l šedá | 15.00 € | **15.50 €** | 3.8 % | **7.2 %** | 15.07 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera Ezviz H8C SE 2K IP, vonkajšia, PTZ, 3 Mpx | 38.00 € | **38.50 €** | 4.3 % | **5.6 %** | 38.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.00 € | **18.50 €** | 34.1 % | **37.9 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný veniec Solight 1V239, priemer 40 cm, 15... | 13.00 € | **13.50 €** | 38.7 % | **44.0 %** | 13.59 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 388.00 € | **388.50 €** | 17.5 % | **17.7 %** | 388.59 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO Rapid PLA+ (čierny) | 12.50 € | **13.00 €** | 16.5 % | **21.2 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **21.00 €** | 20.5 % | **23.5 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **21.00 €** | 34.1 % | **37.4 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93323 Pánev Sagitta 20 cm | 14.50 € | **15.00 €** | 13.7 % | **17.6 %** | 15.14 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi RGB LED svetelný pásik NiteBird SL... | 14.50 € | **15.00 €** | 16.3 % | **20.3 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.00 € | **19.50 €** | 33.4 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar Professional 800x Pro SDXC 256GD | 83.50 € | **84.00 €** | 18.3 % | **19.0 %** | 84.19 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 194.00 € | **194.50 €** | 34.6 % | **35.0 %** | 194.69 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 194.00 € | **194.50 €** | 9.6 % | **9.9 %** | 194.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 14.50 € | **15.00 €** | 38.2 % | **43.0 %** | 15.21 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 14.00 € | **14.50 €** | 13.0 % | **17.1 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR ECO - White | 41.00 € | **41.50 €** | 14.0 % | **15.3 %** | 41.78 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 49.50 € | **50.00 €** | 11.0 % | **12.1 %** | 50.29 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.00 € | **52.50 €** | 8.1 % | **9.1 %** | 52.79 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Adria B-4780 bílá | 25.50 € | **26.00 €** | 6.8 % | **8.8 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 42.50 € | **43.00 €** | 19.5 % | **20.9 %** | 43.29 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro SG A36 5G FIXOP3-1502-BRW | 12.50 € | **13.00 €** | 15.5 % | **20.1 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife MJ-175 – rukoväť na batoh | 14.50 € | **15.00 €** | 14.3 % | **18.3 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Zadná bicyklová lampa Superfire BTL02 – USB, 330 mAh... | 12.00 € | **12.50 €** | 37.2 % | **42.9 %** | 12.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter so svietidlom Habotest HT118C, ... | 30.00 € | **30.50 €** | 41.1 % | **43.4 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 6 filtrov Freewell Bright Day pre DJI Flip | 39.00 € | **39.50 €** | 35.7 % | **37.4 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k meteostanici TE90 | 11.00 € | **11.50 €** | 37.2 % | **43.4 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Brake Pedal Performance Upgrade Kit Moza Racing SR-P... | 34.00 € | **34.50 €** | 15.1 % | **16.8 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL58 – 350 lm, USB, 3 režimy, 200 m | 11.00 € | **11.50 €** | 26.5 % | **32.2 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Fontána pre zvieratá / napájačka 1,5 l Rojeco | 16.50 € | **17.00 €** | 15.5 % | **19.0 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Cabletech UCH0023A1 | 11.50 € | **12.00 €** | 8.7 % | **13.4 %** | 12.49 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 19.50 € | **20.00 €** | 35.8 % | **39.3 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.50 € | **47.00 €** | 34.4 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.90 €** | 33.4 % | **38.0 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.50 € | **12.90 €** | 33.2 % | **37.5 %** | 12.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.50 € | **15.90 €** | 34.1 % | **37.5 %** | 15.98 € | cena podľa najlacnejšieho iného predajcu |
| ECOLUX LED žiarovka 3-pack, klasický tvar, 12W, E27,... | 4.40 € | **4.80 €** | 84.4 % | **101.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 61.50 € | **61.90 €** | 15.1 % | **15.9 %** | 61.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.80 € | **8.00 €** | 34.6 % | **38.1 %** | 8.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.10 € | **5.30 €** | 30.8 % | **35.9 %** | 5.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar Professional 800x Pro SDXC 64 GB | 29.90 € | **30.00 €** | 11.6 % | **11.9 %** | 30.05 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 50.90 € | **51.00 €** | 5.8 % | **6.0 %** | 51.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 21.90 € | **22.00 €** | 34.7 % | **35.3 %** | 22.47 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 48.90 € | **49.00 €** | 29.9 % | **30.2 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 4000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.40 € | **2.50 €** | 44.5 % | **50.6 %** | 2.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.20 € | **4.30 €** | 50.4 % | **54.0 %** | 4.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.20 € | **4.30 €** | 41.1 % | **44.5 %** | 4.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.90 € | **15.00 €** | 34.4 % | **35.4 %** | 15.32 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (572)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Studio 24 KS2401 | 2266.90 € | **1810.50 €** | 44.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Laserový gravírovací stroj xTool F1 Ultra + súprava ... | 4038.50 € | **3687.50 €** | 15.0 % | **5.0 %** | 3018.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 1136.90 € | **860.00 €** | 49.9 % | **13.4 %** | 860.01 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 1016.90 € | **755.00 €** | 45.2 % | **7.8 %** | 755.48 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Studio 16 KS1601 | 2048.90 € | **1842.00 €** | 27.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nano projektor JMGO N1S | 619.50 € | **462.50 €** | 43.5 % | **7.1 %** | 462.69 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 27 144Hz GT2702 | 1960.00 € | **1813.00 €** | 24.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion Kamvas Pro 27 GT2701 | 1841.90 € | **1728.50 €** | 22.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Interaktívny robot Loona Premium | 562.50 € | **465.50 €** | 42.7 % | **18.1 %** | 465.70 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 276.90 € | **183.00 €** | 59.7 % | **5.5 %** | 183.17 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 276.90 € | **183.00 €** | 59.7 % | **5.5 %** | 183.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 395.00 € | **302.00 €** | 42.9 % | **9.3 %** | 302.19 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 458.50 € | **371.00 €** | 36.6 % | **10.5 %** | 371.18 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT1302 (2.5K) | 443.00 € | **357.50 €** | 42.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 835.00 € | **756.00 €** | 22.8 % | **11.1 %** | 756.30 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 508.50 € | **433.00 €** | 35.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Laserový gravírovací stroj xTool S1 40 W 2 v 1, zákl... | 1826.90 € | **1755.90 €** | 20.2 % | **15.6 %** | 1755.92 € | cena podľa najlacnejšieho iného predajcu |
| MSI Cyborg 15 (A13UC-2218CZ) | 814.00 € | **743.50 €** | 15.0 % | **5.0 %** | 730.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Základňa volantu PXN VD10 (PC Windows) | 388.90 € | **319.50 €** | 37.3 % | **12.8 %** | 319.52 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE Pro 2 XR | 390.00 € | **325.00 €** | 35.9 % | **13.2 %** | 325.15 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1135.90 € | **1074.50 €** | 15.0 % | **8.8 %** | 1074.77 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 626.00 € | **565.00 €** | 17.5 % | **6.1 %** | 565.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny zápisník Huion Kamvas Ink 10 EB1011 | 386.50 € | **325.90 €** | 36.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko B5T68243WCSHBC | 493.00 € | **435.50 €** | 24.7 % | **10.2 %** | 435.80 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Slate 11 | 330.00 € | **274.50 €** | 38.3 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion Kamvas Pro 24 GEN 3 GT2402 | 1246.00 € | **1192.90 €** | 20.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje WG894A25 | 552.00 € | **499.50 €** | 20.0 % | **8.6 %** | 499.53 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 398.00 € | **345.50 €** | 32.3 % | **14.9 %** | 345.83 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 288.90 € | **237.00 €** | 30.1 % | **6.7 %** | 237.49 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare AR XREAL One Pro (veľkosť L) | 677.00 € | **627.50 €** | 15.0 % | **6.6 %** | 627.62 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ so statívom | 561.90 € | **513.50 €** | 15.0 % | **5.1 %** | 371.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono M7 | 418.50 € | **371.00 €** | 19.4 % | **5.9 %** | 371.03 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 902.50 € | **858.50 €** | 15.0 % | **9.4 %** | 858.51 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 358.50 € | **314.50 €** | 24.8 % | **9.5 %** | 314.68 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 429.00 € | **387.00 €** | 22.5 % | **10.5 %** | 387.20 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 819.90 € | **779.00 €** | 15.0 % | **9.3 %** | 779.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada PXN VD6 EU | 425.90 € | **388.90 €** | 15.0 % | **5.0 %** | 355.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Grafický tablet Huion Kamvas Pro 16 GT156 | 443.00 € | **406.00 €** | 25.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Hoverboard Rebel Cruiser Joy | 174.00 € | **137.50 €** | 33.1 % | **5.2 %** | 137.79 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 479.50 € | **444.00 €** | 15.6 % | **7.0 %** | 444.20 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-A2-9955 AMD Ryzen 9 9955HX ba... | 1001.00 € | **965.50 €** | 15.0 % | **10.9 %** | 965.89 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.50 € | **177.90 €** | 37.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 212.50 € | **178.00 €** | 37.2 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Electrolux EW8F5412SAC | 717.90 € | **684.00 €** | 11.3 % | **6.0 %** | 684.01 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 675.50 € | **642.00 €** | 15.0 % | **9.3 %** | 642.18 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 538.00 € | **504.50 €** | 14.7 % | **7.5 %** | 504.80 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 504.90 € | **471.50 €** | 20.1 % | **12.1 %** | 471.58 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 398.90 € | **365.50 €** | 19.2 % | **9.2 %** | 365.87 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 266.00 € | **233.90 €** | 25.2 % | **10.1 %** | 233.92 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov GARRETT AT Gold 5x8 | 848.00 € | **816.00 €** | 32.4 % | **27.4 %** | 816.37 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT705 | 324.90 € | **294.00 €** | 29.3 % | **17.0 %** | 294.43 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 272.00 € | **241.50 €** | 19.5 % | **6.1 %** | 241.53 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 344.50 € | **315.50 €** | 20.0 % | **9.9 %** | 315.68 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 620.00 € | **592.00 €** | 12.8 % | **7.7 %** | 592.16 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 452.50 € | **426.00 €** | 22.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Termovízna kamera THERMAL MASTER X2 USB-C | 312.50 € | **286.50 €** | 26.7 % | **16.1 %** | 286.58 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1305.00 €** | 13.3 % | **11.2 %** | 1305.29 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING KS Pro RS095 | 346.50 € | **321.90 €** | 13.1 % | **5.1 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 235 | 469.00 € | **444.50 €** | 12.2 % | **6.4 %** | 444.54 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 12 GS1161 | 177.50 € | **155.50 €** | 31.3 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tablet HOTWAV TAB R10 Pro (čierny) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2528.00 € | **2506.50 €** | 15.0 % | **14.0 %** | 2506.53 € | cena podľa najlacnejšieho iného predajcu |
| Fototlačiareň Liene Amber M110,4 × 6 palcov, 10 listov | 146.90 € | **126.00 €** | 41.3 % | **21.2 %** | 126.29 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 312.50 € | **292.50 €** | 18.0 % | **10.4 %** | 292.70 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 24 GS2401 | 525.00 € | **505.50 €** | 19.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 124.90 € | **105.90 €** | 24.2 % | **5.3 %** | 105.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ultimea Skywave X40 Soundbar | 350.00 € | **331.50 €** | 13.6 % | **7.6 %** | 331.84 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-654A | 136.90 € | **118.50 €** | 37.5 % | **19.0 %** | 118.68 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-604B štvorzónový plynový sporák so sklen... | 136.90 € | **118.50 €** | 46.1 % | **26.5 %** | 118.68 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 352B | 586.00 € | **568.00 €** | 13.5 % | **10.0 %** | 568.18 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Podsie 4 POP Onyx Black | 37.50 € | **19.90 €** | 99.5 % | **5.9 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX DP800IIIV | 387.00 € | **369.50 €** | 20.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| IsEasy T4-04 ceramic/electric cooktop | 124.00 € | **106.90 €** | 35.2 % | **16.5 %** | 106.91 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 233.00 € | **216.00 €** | 23.3 % | **14.3 %** | 216.13 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 597.50 € | **580.50 €** | 9.4 % | **6.2 %** | 580.73 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0016 Skladacie pozadie | 59.50 € | **42.50 €** | 74.0 % | **24.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TW | 362.50 € | **345.90 €** | 10.1 % | **5.1 %** | 287.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 108.50 € | **92.00 €** | 24.1 % | **5.2 %** | 92.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 88.90 € | **72.50 €** | 46.8 % | **19.7 %** | 72.85 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 492.00 € | **476.00 €** | 16.0 % | **12.2 %** | 476.19 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 190.90 € | **175.00 €** | 19.8 % | **9.9 %** | 175.40 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **333.00 €** | 15.0 % | **9.8 %** | 333.19 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco PD800 elektrický obojok proti štekaniu (čierny) | 64.00 € | **48.50 €** | 51.7 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Zelmer ZMM3512B | 98.50 € | **83.50 €** | 30.7 % | **10.8 %** | 83.70 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 488.90 € | **474.00 €** | 11.1 % | **7.8 %** | 474.33 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell NEO 2 MEGA KIT – balenie ... | 79.50 € | **65.00 €** | 39.2 % | **13.8 %** | 65.04 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Inspiroy 2 M H951P | 80.50 € | **66.00 €** | 40.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash TH285M (biela) | 63.00 € | **48.90 €** | 38.4 % | **7.4 %** | 48.99 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 48SB8C-S | 312.50 € | **298.50 €** | 10.1 % | **5.1 %** | 269.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rowenta GZ5436E0 | 299.90 € | **285.90 €** | 10.1 % | **5.0 %** | 269.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ninja FB151EUWH Frost Vault 47l | 240.00 € | **226.00 €** | 13.2 % | **6.6 %** | 226.13 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 219.50 € | **206.00 €** | 14.9 % | **7.9 %** | 206.14 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 154.50 € | **141.00 €** | 15.1 % | **5.1 %** | 141.14 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 12 ks | 187.00 € | **173.50 €** | 13.6 % | **5.4 %** | 173.87 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 176.00 € | **162.90 €** | 21.3 % | **12.3 %** | 163.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C510W 3MPx, vonkajšia, IP, WiFi,... | 63.50 € | **50.90 €** | 31.9 % | **5.7 %** | 34.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 133.50 € | **121.00 €** | 25.0 % | **13.3 %** | 121.27 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 308.90 € | **296.50 €** | 15.5 % | **10.9 %** | 296.85 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP400IIIV | 276.00 € | **263.90 €** | 20.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tefal GV 9620E0 | 379.50 € | **367.50 €** | 11.6 % | **8.1 %** | 367.69 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 190.50 € | **178.50 €** | 16.7 % | **9.4 %** | 178.71 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Inspiroy 2 S H641P | 55.50 € | **43.50 €** | 46.2 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion Kamvas 13 GEN 3 GS1333 | 250.00 € | **238.00 €** | 20.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Chytrá meteorologická stanice GARNI 925T | 159.50 € | **147.90 €** | 13.4 % | **5.2 %** | 142.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rádio TechniSat DIGITRADIO 550 IR /černé/ | 149.50 € | **137.90 €** | 13.9 % | **5.0 %** | 135.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termokamera Mileseey TR256i USB-C Mini | 218.50 € | **206.90 €** | 15.0 % | **8.9 %** | 207.00 € | cena podľa najlacnejšieho iného predajcu |
| HP Smart Tank 750 Wireless AiO (6UU47A) | 252.50 € | **241.00 €** | 10.0 % | **5.0 %** | 214.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 228.50 € | **217.00 €** | 10.6 % | **5.0 %** | 205.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 227.00 € | **215.50 €** | 17.7 % | **11.8 %** | 215.64 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 551.50 € | **540.00 €** | 10.8 % | **8.5 %** | 540.21 € | cena podľa najlacnejšieho iného predajcu |
| Bramka GL.iNet GL-MT5000 | 157.00 € | **145.50 €** | 18.4 % | **9.7 %** | 145.71 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 154.50 € | **143.00 €** | 22.0 % | **12.9 %** | 143.41 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint MetroX Pro Standard | 1245.50 € | **1234.50 €** | 22.5 % | **21.4 %** | 1234.62 € | cena podľa najlacnejšieho iného predajcu |
| Gril G21 Hawaii, Elektrický | 168.90 € | **158.00 €** | 18.1 % | **10.5 %** | 158.09 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 356.00 € | **345.50 €** | 15.0 % | **11.6 %** | 345.53 € | cena podľa najlacnejšieho iného predajcu |
| ULTENIC U18 PRO – bezdrôtový vertikálny vysávač | 136.00 € | **125.50 €** | 22.1 % | **12.7 %** | 125.78 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S UV AI | 64.50 € | **54.00 €** | 39.1 % | **16.4 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 69.90 € | **59.50 €** | 24.1 % | **5.6 %** | 54.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 103RR | 223.90 € | **213.50 €** | 16.6 % | **11.2 %** | 213.52 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 41.00 € | **31.00 €** | 39.2 % | **5.3 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reproduktory Edifier R1600TIII 2.0 (hnedé) | 92.00 € | **82.00 €** | 22.5 % | **9.2 %** | 82.12 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 228.00 € | **218.00 €** | 17.6 % | **12.4 %** | 218.30 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 230.00 € | **220.00 €** | 20.2 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Fixed kryt Apple iPho 17 FIXPUM-1600-TR | 26.00 € | **16.50 €** | 84.8 % | **17.3 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 179.00 € | **169.50 €** | 24.8 % | **18.2 %** | 169.70 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 426.50 € | **417.00 €** | 10.2 % | **7.7 %** | 417.24 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 917.50 € | **908.00 €** | 19.5 % | **18.3 %** | 908.34 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 208.90 € | **199.50 €** | 25.0 % | **19.4 %** | 199.79 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Pins 4 Arctic White | 41.90 € | **32.90 €** | 34.0 % | **5.2 %** | 25.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY WHCH520W.CE7 bílá | 44.90 € | **35.90 €** | 31.7 % | **5.3 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY WHCH520L.CE7 modrá | 44.90 € | **35.90 €** | 31.7 % | **5.3 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal Unlimited pánev 28cm G2550672 | 50.50 € | **41.50 €** | 31.3 % | **7.9 %** | 41.60 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 78.00 € | **69.00 €** | 20.3 % | **6.4 %** | 69.24 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Pad 2 4/128 GB zelená (67177) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 166.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO RFSA240M43WN | 379.00 € | **370.50 €** | 8.0 % | **5.6 %** | 370.56 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 331.00 € | **322.50 €** | 12.3 % | **9.4 %** | 322.69 € | cena podľa najlacnejšieho iného predajcu |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 144.00 € | **136.00 €** | 24.7 % | **17.8 %** | 136.19 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 262.50 € | **254.50 €** | 20.5 % | **16.9 %** | 254.69 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 262.50 € | **254.50 €** | 29.7 % | **25.7 %** | 254.69 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 310.00 € | **302.00 €** | 21.9 % | **18.8 %** | 302.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 310.00 € | **302.00 €** | 20.7 % | **17.6 %** | 302.19 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 137.00 € | **129.00 €** | 19.6 % | **12.7 %** | 129.20 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 134.00 € | **126.00 €** | 22.7 % | **15.4 %** | 126.29 € | cena podľa najlacnejšieho iného predajcu |
| Ancel DS200 OBD2 automobilový skener | 223.00 € | **215.00 €** | 14.9 % | **10.8 %** | 215.31 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 238.90 € | **231.00 €** | 16.6 % | **12.7 %** | 231.21 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING CS Pro RS093 | 346.50 € | **338.90 €** | 9.7 % | **7.3 %** | 339.00 € | cena podľa najlacnejšieho iného predajcu |
| Napájadlo pre psy a mačky PetKit Eversweet 3 Pro | 90.50 € | **82.90 €** | 15.2 % | **5.5 %** | 81.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herný volant PXN-V10 (PC / PS3 / PS4 / XBOX ONE / SW... | 212.50 € | **204.90 €** | 19.2 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Päťzónový indukčný sporák IsEasy LI5-01 | 204.00 € | **196.50 €** | 22.0 % | **17.5 %** | 196.55 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 344.50 € | **337.00 €** | 12.4 % | **10.0 %** | 337.11 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 250.50 € | **243.00 €** | 17.4 % | **13.9 %** | 243.20 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 303.00 € | **295.50 €** | 12.7 % | **9.9 %** | 295.77 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Slate 10 | 194.50 € | **187.00 €** | 19.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 188.90 € | **181.50 €** | 29.4 % | **24.4 %** | 181.56 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka pamäťových kariet Lexar RW540 microSD Express | 71.90 € | **64.50 €** | 38.5 % | **24.3 %** | 64.58 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS520E15W | 265.00 € | **257.90 €** | 8.0 % | **5.1 %** | 256.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 44GW | 206.00 € | **198.90 €** | 10.0 % | **6.2 %** | 198.96 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH98A9WO | 279.50 € | **272.50 €** | 7.7 % | **5.0 %** | 256.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GORENJE GV520E15 | 291.50 € | **284.50 €** | 7.9 % | **5.3 %** | 284.56 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 40.90 € | **33.90 €** | 32.5 % | **9.8 %** | 33.98 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V299, 7 m, ... | 35.90 € | **28.90 €** | 79.5 % | **44.5 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 328.00 € | **321.00 €** | 12.2 % | **9.8 %** | 321.10 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 87.00 € | **80.00 €** | 19547.7 % | **17966.8 %** | 80.19 € | cena podľa najlacnejšieho iného predajcu |
| Drôtové slúchadlá do uší TRUTHEAR Zero (červené) | 64.00 € | **57.00 €** | 29.7 % | **15.5 %** | 57.33 € | cena podľa najlacnejšieho iného predajcu |
| IMOU N110W 10-kanálový IP videorekordér | 79.50 € | **72.90 €** | 15.0 % | **5.5 %** | 64.56 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PIXMA G3430 Purple | 147.50 € | **140.90 €** | 10.2 % | **5.2 %** | 134.06 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cabletech UCH0232 | 41.00 € | **34.50 €** | 25.2 % | **5.3 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Black&Decker BXDH12E | 167.50 € | **161.00 €** | 10.3 % | **6.0 %** | 161.37 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 166.00 € | **159.90 €** | 11.0 % | **6.9 %** | 159.95 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 216.50 € | **210.50 €** | 9.2 % | **6.2 %** | 210.58 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing R5 Pro | 419.50 € | **413.50 €** | 11.1 % | **9.5 %** | 413.82 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 140.00 € | **134.00 €** | 16.6 % | **11.6 %** | 134.46 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 56.00 € | **50.00 €** | 24.7 % | **11.3 %** | 50.49 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS64 | 41.00 € | **35.00 €** | 34.2 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 32-82" TV mount Perlesmith PSTVMC05-US | 101.90 € | **96.00 €** | 15.2 % | **8.5 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na vytieranie DJI ROMO | 33.50 € | **27.90 €** | 38.3 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| FIXED s displejem, 4x FIXCG140D-4C1A-BK | 55.00 € | **49.50 €** | 23.1 % | **10.8 %** | 49.54 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 267.50 € | **262.00 €** | 8.2 % | **6.0 %** | 262.09 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 117.00 € | **111.50 €** | 25.2 % | **19.3 %** | 111.67 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 28.50 € | **23.00 €** | 32.9 % | **7.3 %** | 23.44 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS64 SE | 49.00 € | **43.50 €** | 29.3 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion Q620M | 89.00 € | **83.50 €** | 22.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Redmi A7 Pro 4/64GB Mist Blue | 126.90 € | **121.50 €** | 10.0 % | **5.4 %** | 98.93 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 98.90 € | **93.50 €** | 24.2 % | **17.4 %** | 93.73 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED dekorácia – zvončeky Solight 1V289, 55... | 17.90 € | **12.50 €** | 106.4 % | **44.2 %** | 12.57 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H430P | 31.00 € | **25.90 €** | 38.6 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Maxxo Chamber Line 40 | 248.00 € | **243.00 €** | 8.2 % | **6.0 %** | 243.07 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32BWBXC | 68.50 € | **63.50 €** | 22.2 % | **13.3 %** | 63.79 € | cena podľa najlacnejšieho iného predajcu |
| Ultrazvukový masážny prístroj na tvár so svetelnou t... | 40.50 € | **35.50 €** | 35.0 % | **18.3 %** | 35.88 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 45.00 € | **40.00 €** | 18.5 % | **5.3 %** | 40.39 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 82.90 € | **77.90 €** | 22.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion Inspiroy Frego M L610 | 82.00 € | **77.00 €** | 22.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion Kamvas 13 GS1331 | 206.50 € | **201.90 €** | 17.7 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 35.50 € | **31.00 €** | 20.6 % | **5.3 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 338 | 577.00 € | **572.50 €** | 8.9 % | **8.0 %** | 572.54 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický masážny prístroj na krk EMS ANLAN 09-AMJY... | 28.50 € | **24.00 €** | 41.3 % | **19.0 %** | 24.13 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mlyn na obilie HIBREW G7 (biely) | 112.00 € | **107.50 €** | 24.2 % | **19.2 %** | 107.88 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 159.50 € | **155.00 €** | 8.9 % | **5.8 %** | 155.46 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 247.00 € | **242.90 €** | 9.5 % | **7.7 %** | 242.92 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune Flex 2 černá | 90.90 € | **86.90 €** | 10.0 % | **5.2 %** | 56.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune Flex 2 ghost black | 90.90 € | **86.90 €** | 10.0 % | **5.2 %** | 56.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Grip Purple | 83.50 € | **79.50 €** | 10.4 % | **5.1 %** | 74.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool TDLR 6240S EU/N | 328.90 € | **324.90 €** | 6.3 % | **5.0 %** | 321.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 533.90 € | **529.90 €** | 8.0 % | **7.2 %** | 529.95 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 211.50 € | **207.50 €** | 10.5 % | **8.4 %** | 207.60 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 280.50 € | **276.50 €** | 11.5 % | **9.9 %** | 276.67 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 312.00 € | **308.00 €** | 7.9 % | **6.5 %** | 308.21 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 469.50 € | **465.50 €** | 6.9 % | **6.0 %** | 465.82 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 359.00 € | **355.00 €** | 11.1 % | **9.9 %** | 355.47 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 247.00 € | **243.00 €** | 7.9 % | **6.2 %** | 243.48 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 46.00 € | **42.00 €** | 29.4 % | **18.2 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 166.90 € | **163.00 €** | 8.6 % | **6.1 %** | 163.31 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 21.90 € | **18.00 €** | 28.3 % | **5.4 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **557.00 €** | 7.3 % | **6.6 %** | 557.25 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT216A digitálny klešťový multimeter | 54.50 € | **50.90 €** | 15.4 % | **7.7 %** | 50.99 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100WFB | 78.50 € | **74.90 €** | 10.4 % | **5.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dóza Curver Butler Party Box pikniková, ružová | 12.50 € | **9.00 €** | 46.4 % | **5.4 %** | 8.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Triple monitor mount 17-32" Huanuo HNTS3B-UK | 91.50 € | **88.00 €** | 24.5 % | **19.7 %** | 88.07 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D30+ s Bluetooth | 204.50 € | **201.00 €** | 23.6 % | **21.4 %** | 201.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50 (sivé) | 39.50 € | **36.00 €** | 24.2 % | **13.2 %** | 36.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50 (biele) | 39.50 € | **36.00 €** | 24.2 % | **13.2 %** | 36.20 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 136.00 € | **132.50 €** | 11.2 % | **8.4 %** | 132.78 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 80.50 € | **77.00 €** | 23.8 % | **18.4 %** | 77.29 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 101.50 € | **98.00 €** | 23.4 % | **19.1 %** | 98.33 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 46.50 € | **43.00 €** | 49.7 % | **38.5 %** | 43.40 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.90 € | **105.50 €** | 8.4 % | **5.0 %** | 105.55 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 88.90 € | **85.50 €** | 20.8 % | **16.2 %** | 85.56 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H950P | 64.00 € | **60.90 €** | 20.9 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Samsung VG-SCFC32WTBXC | 61.90 € | **58.90 €** | 10.5 % | **5.1 %** | 40.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera EMOS IP-220G /H4072/ GoSmart vnitřní otočná s... | 36.50 € | **33.50 €** | 15.2 % | **5.7 %** | 29.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termostatická hlavica MOES TRV 801 s Wi-Fi | 35.90 € | **32.90 €** | 15.6 % | **5.9 %** | 31.92 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.00 € | **47.00 €** | 24.3 % | **16.8 %** | 47.01 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 211.50 € | **208.50 €** | 18.2 % | **16.6 %** | 208.53 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 60.00 € | **57.00 €** | 19.2 % | **13.2 %** | 57.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 60.00 € | **57.00 €** | 25.8 % | **19.5 %** | 57.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 60.00 € | **57.00 €** | 25.8 % | **19.5 %** | 57.04 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 82.50 € | **79.50 €** | 21.2 % | **16.8 %** | 79.56 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 507.50 € | **504.50 €** | 7.0 % | **6.3 %** | 504.74 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší TWS Haylou X1 2023 ENC (modré) | 19.00 € | **16.00 €** | 43.3 % | **20.7 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 366.00 € | **363.00 €** | 6.9 % | **6.0 %** | 363.31 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | cena podľa najlacnejšieho iného predajcu |
| Dóza Curver Butler Party Box pikniková, mint | 12.50 € | **9.70 €** | 46.4 % | **13.6 %** | 9.79 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesná maska so svetelnou terapiou ANLAN 01-AGZMZ | 43.50 € | **40.90 €** | 41.5 % | **33.1 %** | 40.94 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **29.90 €** | 14.7 % | **5.6 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Výrobok X.A.2 | 48.50 € | **45.90 €** | 15.0 % | **8.9 %** | 46.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Inspiroy Frego S L310 | 53.50 € | **50.90 €** | 21.3 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Latarka Superfire TH04-U | 14.50 € | **11.90 €** | 39.5 % | **14.5 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 181.50 € | **178.90 €** | 7.9 % | **6.3 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| CANON PIXMA MG2556S Black | 56.00 € | **53.50 €** | 10.1 % | **5.2 %** | 35.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| D-LINK 4G LTE USB Adaptér (DWM-222W) | 52.00 € | **49.50 €** | 10.5 % | **5.2 %** | 36.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera OBSBOT Tiny 3 | 356.00 € | **353.50 €** | 5.7 % | **5.0 %** | 344.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo INFRA DRY+ | 182.50 € | **180.00 €** | 9.4 % | **7.9 %** | 180.02 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **9.00 €** | 40.8 % | **10.2 %** | 9.10 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 W portable label printer (blue) | 74.00 € | **71.50 €** | 21.3 % | **17.2 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| REBEL ACTIVE RBA-1020 rehabilitační rotoped se setrv... | 39.50 € | **37.00 €** | 32.9 % | **24.5 %** | 37.19 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 11.1V 30C 3S1P Lipo ... | 20.50 € | **18.00 €** | 29.7 % | **13.9 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Catlink Fresh smart odor absorber | 35.50 € | **33.00 €** | 15.0 % | **6.9 %** | 33.27 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Samsung G Tab FIXTOT-1649 | 23.00 € | **20.50 €** | 79.5 % | **59.9 %** | 20.85 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT4000 74 Wh štartér | 119.00 € | **116.50 €** | 19.9 % | **17.3 %** | 116.87 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa Portable Monitor A1 15,6" | 86.50 € | **84.00 €** | 14.3 % | **11.0 %** | 84.42 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 75 mm adaptér z plochého na guľatý pre fluidnú... | 27.50 € | **25.00 €** | 15.5 % | **5.0 %** | 25.42 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitá odsávačka mlieka Grownsy | 40.50 € | **38.00 €** | 28.0 % | **20.1 %** | 38.46 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT625B, USB | 45.50 € | **43.00 €** | 27.8 % | **20.8 %** | 43.48 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H640P | 41.50 € | **39.00 €** | 21.7 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion HS610 | 67.00 € | **64.50 €** | 19.3 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 132.90 € | **130.50 €** | 26912.2 % | **26424.4 %** | 130.79 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla MOZA RACING MHG | 112.90 € | **110.50 €** | 16.3 % | **13.8 %** | 110.79 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 530BT White | 54.90 € | **52.50 €** | 10.0 % | **5.2 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Matt for litter box Baymax / Baymax Lite Catlink CL-... | 27.00 € | **24.90 €** | 14.8 % | **5.9 %** | 24.94 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo footstool HNFR3 | 20.00 € | **17.90 €** | 38.5 % | **24.0 %** | 17.96 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 87.00 € | **84.90 €** | 30.1 % | **27.0 %** | 84.93 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS9 – multifunkčný štartér do auta | 89.00 € | **86.90 €** | 49.2 % | **45.7 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu |
| MERCUSYS MR80X WiFi Dual Band Router | 43.00 € | **41.00 €** | 10.2 % | **5.1 %** | 33.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE300 AC1200 WiFi Range Extender | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 31.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.3 % | **5.1 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER HL-L1232 W | 121.50 € | **119.50 €** | 13.3 % | **11.5 %** | 119.53 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93503 Hrnec s pokličkou 24 cm | 50.00 € | **48.00 €** | 20.2 % | **15.4 %** | 48.07 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+, BT sluch., černá TWS10BK | 30.50 € | **28.50 €** | 17.4 % | **9.7 %** | 28.59 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 335.50 € | **333.50 €** | 6.9 % | **6.3 %** | 333.66 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 226.50 € | **224.50 €** | 7.9 % | **6.9 %** | 224.67 € | cena podľa najlacnejšieho iného predajcu |
| Merač vlhkosti dreva Habotest HT633 | 20.50 € | **18.50 €** | 25.4 % | **13.2 %** | 18.69 € | cena podľa najlacnejšieho iného predajcu |
| Barkan S320. B - natáčecí stojan pro TV (29-58'' 25k... | 62.00 € | **60.00 €** | 23.2 % | **19.2 %** | 60.19 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (čierna) + 7 ventil... | 69.50 € | **67.50 €** | 20.8 % | **17.3 %** | 67.69 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1381.00 € | **1379.00 €** | 11.4 % | **11.3 %** | 1379.19 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa Hluboká pánev 26 cm | 34.00 € | **32.00 €** | 56.5 % | **47.3 %** | 32.22 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní UV sterilizační lampa GARNI UV 45T | 20.50 € | **18.50 €** | 24.4 % | **12.2 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight teplomer, farba čierna | 16.00 € | **14.00 €** | 50.0 % | **31.3 %** | 14.36 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu PLA Classic (sivý), 1,75 mm, 1 kg | 14.50 € | **12.50 €** | 56.8 % | **35.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2397 Trenažér na stehná a panvové dno (modrý) | 15.00 € | **13.00 €** | 24.7 % | **8.1 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 232.00 € | **230.00 €** | 8.6 % | **7.7 %** | 230.49 € | cena podľa najlacnejšieho iného predajcu |
| Panoramatický fotografický stojan Puluz 360 15cm PU3... | 17.00 € | **15.00 €** | 29.9 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion H610X | 49.00 € | **47.00 €** | 19.5 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tefal XF652038 | 156.50 € | **154.90 €** | 10.0 % | **8.9 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Rádio BLOW RA19 nouzové DAB+/FM/BLUETOOTH, ruční kli... | 41.50 € | **40.00 €** | 8.9 % | **5.0 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Interaktívne hračky pre mačky 2 v 1 | 21.00 € | **19.50 €** | 14.9 % | **6.7 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MASCOM SUNNY-T Android TV 4K UHD Android TV multimed... | 99.50 € | **98.00 €** | 40.3 % | **38.2 %** | 98.03 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná detská váha Grownsy B12H | 28.50 € | **27.00 €** | 25.8 % | **19.2 %** | 27.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 32.00 € | **30.50 €** | 19.8 % | **14.2 %** | 30.57 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022300 | 136.50 € | **135.00 €** | 10.2 % | **9.0 %** | 135.10 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Samsung EVO Plus microSD 2021, 64 GB ... | 35.00 € | **33.50 €** | 125.1 % | **115.5 %** | 33.68 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | cena podľa najlacnejšieho iného predajcu |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 5771.00 € | **5769.50 €** | 8.2 % | **8.2 %** | 5769.82 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Multimilk MM01 | 90.00 € | **88.50 €** | 16.2 % | **14.2 %** | 88.87 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC28TFW11 – 28” Full HD Smart TV (12 V, WebOS... | 333.00 € | **331.50 €** | 7.3 % | **6.8 %** | 331.89 € | cena podľa najlacnejšieho iného predajcu |
| LTE filtr Fagor LBF 694 (5-694 MHz, LTE 5G útlum 45 dB) | 16.00 € | **14.50 €** | 27.0 % | **15.1 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK WiFi AX1500 Range Extender (E15) | 42.50 € | **41.00 €** | 10.9 % | **7.0 %** | 41.40 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 17.50 € | **16.00 €** | 27.4 % | **16.5 %** | 16.42 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H420X | 29.00 € | **27.50 €** | 22.1 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sonoff AirGuard TH SNZB-02DR2 ZigBee LCD senzor tepl... | 14.90 € | **13.50 €** | 15.9 % | **5.0 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beper BEP-P206RAF200 | 29.90 € | **28.50 €** | 11.0 % | **5.8 %** | 16.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Philips AWP1775/10 bílá | 32.90 € | **31.50 €** | 10.5 % | **5.8 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONOFF SNZB-03PR2 Senzor pohybu Zigbee | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 13.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny merací prístroj Uni-T UT220 | 47.90 € | **46.50 €** | 15.0 % | **11.6 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC22TFW11 – 22” Full HD Smart TV (12 V, WebOS... | 274.90 € | **273.50 €** | 8.5 % | **7.9 %** | 273.80 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFB 8469 BV EE | 345.90 € | **344.50 €** | 7.0 % | **6.6 %** | 344.89 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 42.00 € | **40.90 €** | 20.4 % | **17.2 %** | 40.93 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 31.00 € | **29.90 €** | 23.3 % | **18.9 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Stěrka na okna s kartáčem a tel | 18.50 € | **17.50 €** | 11.5 % | **5.5 %** | 12.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.50 € | **7.50 €** | 36.6 % | **20.5 %** | 7.56 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 77.90 € | **76.90 €** | 14.1 % | **12.6 %** | 76.97 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100WS (čierny) | 56.00 € | **55.00 €** | 24.2 % | **22.0 %** | 55.07 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 77.90 € | **76.90 €** | 10.0 % | **8.6 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 77.90 € | **76.90 €** | 12.8 % | **11.3 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 670NC white | 67.90 € | **66.90 €** | 17.4 % | **15.7 %** | 67.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 250.90 € | **249.90 €** | 9.7 % | **9.3 %** | 250.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 227.90 € | **226.90 €** | 41074.3 % | **40893.7 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 665.90 € | **664.90 €** | 120207.1 % | **120026.5 %** | 665.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 363.90 € | **362.90 €** | 65645.3 % | **65464.6 %** | 363.00 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN CHJ-1502 Filtračné čerpadlo | 16.00 € | **15.00 €** | 31.1 % | **22.9 %** | 15.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 17.00 € | **16.00 €** | 23.2 % | **15.9 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Karta pamäte Lexar High-Performance S... | 92.00 € | **91.00 €** | 8.9 % | **7.8 %** | 91.24 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.00 € | **334.00 €** | 22.7 % | **22.3 %** | 334.27 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Rolfix 150 Trip | 19.00 € | **18.00 €** | 13.7 % | **7.7 %** | 18.29 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 123.50 € | **122.50 €** | 15.2 % | **14.3 %** | 122.79 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Coppertinto KI280G10 | 31.00 € | **30.00 €** | 10.1 % | **6.6 %** | 30.29 € | cena podľa najlacnejšieho iného predajcu |
| Letové pedále MOZA Racing AS019 | 345.50 € | **344.50 €** | 6.9 % | **6.6 %** | 344.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 79.50 € | **78.50 €** | 17.4 % | **15.9 %** | 78.79 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 251.00 € | **250.00 €** | 16.9 % | **16.4 %** | 250.31 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 329.50 € | **328.50 €** | 6.8 % | **6.5 %** | 328.84 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 67.50 € | **66.50 €** | 9.4 % | **7.8 %** | 66.84 € | cena podľa najlacnejšieho iného predajcu |
| Remoska D52F/10 4l Dua Glass | 135.00 € | **134.00 €** | 8.6 % | **7.8 %** | 134.35 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 191.50 € | **190.50 €** | 11.9 % | **11.3 %** | 190.90 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER T2Max | 333.50 € | **332.50 €** | 30.9 % | **30.5 %** | 332.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing SR-P Lite RS19 for R3/R5 | 42.50 € | **41.50 €** | 15.8 % | **13.0 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 249.50 € | **248.50 €** | 23.9 % | **23.4 %** | 248.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická vyhrievaná kulma na riasy ANLAN 04-AJMJ14... | 16.00 € | **15.00 €** | 26.0 % | **18.2 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent white | 230.00 € | **229.00 €** | 16.9 % | **16.4 %** | 229.42 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 230.00 € | **229.00 €** | 16.9 % | **16.4 %** | 229.42 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 230.00 € | **229.00 €** | 16.9 % | **16.4 %** | 229.42 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 230.00 € | **229.00 €** | 16.9 % | **16.4 %** | 229.42 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 301.00 € | **300.00 €** | 6.1 % | **5.8 %** | 300.47 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 217.00 € | **216.00 €** | 17.4 % | **16.9 %** | 216.47 € | cena podľa najlacnejšieho iného predajcu |
| Ochranný kryt PGYTECH pre DJI RC/RC2 (P-45A-020) | 15.50 € | **14.50 €** | 21.8 % | **13.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vianočná LED reťaz Solight 1V50-B, 3 m, modré svetlo... | 2.70 € | **1.80 €** | 113.1 % | **42.1 %** | 1.83 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9270p bezdrátová klávesnice černá | 37.90 € | **37.00 €** | 10.4 % | **7.8 %** | 37.28 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **22.00 €** | 38.1 % | **32.7 %** | 22.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 2.70 € | **1.90 €** | 109.1 % | **47.1 %** | 2.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka 3-pack, klasický tvar, 10W, E27... | 4.00 € | **3.20 €** | 83.7 % | **47.0 %** | 3.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.20 € | **4.50 €** | 35.5 % | **17.3 %** | 4.52 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 427.50 € | **426.90 €** | 14.1 % | **13.9 %** | 426.99 € | cena podľa najlacnejšieho iného predajcu |
| Teploměr do sauny Levenhuk Wezzer SN10 | 18.50 € | **17.90 €** | 9.9 % | **6.4 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.50 € | **26.90 €** | 9.6 % | **7.2 %** | 26.91 € | cena podľa najlacnejšieho iného predajcu |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 10.9 % | **6.3 %** | 12.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hodiny Nedis analógové, nástenné s fotorámikmi, 40 cm | 12.50 € | **11.90 €** | 17.6 % | **12.0 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 77.50 € | **76.90 €** | 37.8 % | **36.7 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C216 IP, 3MPx, WiFi, prísvit, vo... | 36.00 € | **35.50 €** | 6.8 % | **5.3 %** | 34.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Salente Icequeen-Wh | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.07 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 253.50 € | **253.00 €** | 14.9 % | **14.7 %** | 253.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.60 €** | 36.1 % | **26.6 %** | 6.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 37.00 € | **36.50 €** | 33.5 % | **31.7 %** | 36.53 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 209.00 € | **208.50 €** | 16.8 % | **16.6 %** | 208.53 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 209.00 € | **208.50 €** | 16.8 % | **16.6 %** | 208.53 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 209.00 € | **208.50 €** | 16.8 % | **16.6 %** | 208.53 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection brown | 209.00 € | **208.50 €** | 16.8 % | **16.6 %** | 208.53 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 346.00 € | **345.50 €** | 14.4 % | **14.3 %** | 345.53 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mlynček na kávu HiBREW G7 | 105.00 € | **104.50 €** | 8.4 % | **7.9 %** | 104.54 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VF4 360° Projector Stand | 12.50 € | **12.00 €** | 23.9 % | **19.0 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-W, 5 m, s... | 6.30 € | **5.80 €** | 56.2 % | **43.8 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.00 € | **265.50 €** | 7.3 % | **7.1 %** | 265.57 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.00 € | **295.50 €** | 13.0 % | **12.8 %** | 295.57 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 37-75" Perlesmith PSTVS13 | 33.50 € | **33.00 €** | 21.2 % | **19.3 %** | 33.09 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (grey) | 17.50 € | **17.00 €** | 27.0 % | **23.4 %** | 17.11 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 483.50 € | **483.00 €** | 6.9 % | **6.8 %** | 483.11 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 16.50 € | **16.00 €** | 18.4 % | **14.8 %** | 16.12 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.50 € | **166.00 €** | 15.9 % | **15.6 %** | 166.13 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.50 € | **25.00 €** | 15.0 % | **12.8 %** | 25.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, studená b... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, neutrálna... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.50 € | **116.00 €** | 18.2 % | **17.7 %** | 116.17 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 160.00 € | **159.50 €** | 7.0 % | **6.7 %** | 159.67 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.50 € | **217.00 €** | 13.9 % | **13.7 %** | 217.18 € | cena podľa najlacnejšieho iného predajcu |
| Orbitrek REBEL ACTIVE RBA-1011 | 133.50 € | **133.00 €** | 7.8 % | **7.4 %** | 133.19 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 157.00 € | **156.50 €** | 6.4 % | **6.1 %** | 156.70 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.00 € | **141.50 €** | 7.0 % | **6.6 %** | 141.70 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.50 € | **105.00 €** | 19.5 % | **18.9 %** | 105.22 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Sony | 127.00 € | **126.50 €** | 6.6 % | **6.2 %** | 126.74 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 23.00 € | **22.50 €** | 21.7 % | **19.1 %** | 22.75 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, strieborná... | 178.00 € | **177.50 €** | 14.9 % | **14.6 %** | 177.75 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 120.00 € | **119.50 €** | 13.8 % | **13.3 %** | 119.77 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.50 € | **198.00 €** | 9.0 % | **8.7 %** | 198.28 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 156.00 € | **155.50 €** | 11.6 % | **11.3 %** | 155.78 € | cena podľa najlacnejšieho iného predajcu |
| Samolepiace hodiny G21 Metallic Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 51.50 € | **51.00 €** | 10.2 % | **9.2 %** | 51.29 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1020.00 € | **1019.50 €** | 10.7 % | **10.6 %** | 1019.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 46.00 € | **45.50 €** | 9.6 % | **8.4 %** | 45.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 61.00 € | **60.50 €** | 11.1 % | **10.2 %** | 60.79 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 24.50 € | **24.00 €** | 7.6 % | **5.4 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Bluetooth KRUGER & MATZ KM0566  STREET X... | 39.00 € | **38.50 €** | 13.5 % | **12.0 %** | 38.79 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér KRUGER & MATZ KM0390 (HUB) USB C na port HDM... | 25.50 € | **25.00 €** | 7.3 % | **5.2 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 30.50 € | **30.00 €** | 9.9 % | **8.1 %** | 30.29 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo M300 (Silent) myš tmavě šedá | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 85.00 € | **84.50 €** | 34.9 % | **34.2 %** | 84.79 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 58.00 € | **57.50 €** | 16.8 % | **15.8 %** | 57.79 € | cena podľa najlacnejšieho iného predajcu |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 71.00 € | **70.50 €** | 8.4 % | **7.7 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| Kaon MZ-52, satelitní přijímač Skylink | 61.00 € | **60.50 €** | 7.8 % | **7.0 %** | 60.79 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 34.50 € | **34.00 €** | 12.7 % | **11.1 %** | 34.29 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 18.00 € | **17.50 €** | 8.0 % | **5.0 %** | 17.79 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač Evercon AH-707 | 54.00 € | **53.50 €** | 19.2 % | **18.1 %** | 53.79 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 26.50 € | **26.00 €** | 16.8 % | **14.6 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 vrecká 20 x 30 cm 100 ks | 14.50 € | **14.00 €** | 15.9 % | **11.9 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na cvičení Rebel Active RBA-3159-2BL na jóg... | 30.50 € | **30.00 €** | 15.3 % | **13.4 %** | 30.30 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 102.00 € | **101.50 €** | 13.5 % | **12.9 %** | 101.80 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 212.50 € | **212.00 €** | 37.2 % | **36.9 %** | 212.31 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 77.00 € | **76.50 €** | 17.7 % | **16.9 %** | 76.81 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 127.00 € | **126.50 €** | 11.7 % | **11.3 %** | 126.81 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač krmiva PETKIT Fresh Element SOLO, 3 l | 73.50 € | **73.00 €** | 7.4 % | **6.7 %** | 73.32 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.50 € | **187.00 €** | 10.7 % | **10.4 %** | 187.32 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 133.00 € | **132.50 €** | 5.7 % | **5.3 %** | 132.82 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.50 € | **114.00 €** | 17.9 % | **17.4 %** | 114.33 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Handy Force One 2v1, 2708 | 52.50 € | **52.00 €** | 6.7 % | **5.6 %** | 52.36 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 225.00 € | **224.50 €** | 17.6 % | **17.3 %** | 224.86 € | cena podľa najlacnejšieho iného predajcu |
| Testovanie zariadenia USB Uni-T UT658LOAD | 16.00 € | **15.50 €** | 14.8 % | **11.2 %** | 15.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.50 € | **14.00 €** | 18.4 % | **14.3 %** | 14.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight GSM diaľkovo ovládaná zásuvka | 58.50 € | **58.00 €** | 32.6 % | **31.5 %** | 58.37 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný tréninková hrazda REBEL ACTIVE RBA-2404 | 107.50 € | **107.00 €** | 15.3 % | **14.8 %** | 107.38 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 345.00 € | **344.50 €** | 20.4 % | **20.2 %** | 344.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 105.50 € | **105.00 €** | 9.7 % | **9.1 %** | 105.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 319.00 € | **318.50 €** | 18.8 % | **18.6 %** | 318.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.50 € | **239.00 €** | 12.2 % | **11.9 %** | 239.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 132.00 € | **131.50 €** | 10.2 % | **9.7 %** | 131.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 472.50 € | **472.00 €** | 9.2 % | **9.1 %** | 472.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 933.50 € | **933.00 €** | 18.6 % | **18.6 %** | 933.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 163.50 € | **163.00 €** | 10.5 % | **10.1 %** | 163.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 321.50 € | **321.00 €** | 10.2 % | **10.0 %** | 321.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 87.50 € | **87.00 €** | 12.8 % | **12.1 %** | 87.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 292.50 € | **292.00 €** | 18.4 % | **18.2 %** | 292.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 147.00 € | **146.50 €** | 10.4 % | **10.0 %** | 146.89 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1287.00 € | **1286.50 €** | 7.3 % | **7.3 %** | 1286.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 53.50 € | **53.00 €** | 11.8 % | **10.7 %** | 53.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 297.50 € | **297.00 €** | 47.5 % | **47.2 %** | 297.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 89.50 € | **89.00 €** | 11.7 % | **11.1 %** | 89.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 271.00 € | **270.50 €** | 5.4 % | **5.2 %** | 270.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C615G KIT 3MPx, vonkajšia, IP PT... | 109.00 € | **108.50 €** | 6.0 % | **5.6 %** | 108.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TESLA SecureQ SC55 - venkovní WiFi smart kame... | 48.50 € | **48.00 €** | 7.1 % | **6.0 %** | 48.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 159.00 € | **158.50 €** | 12.7 % | **12.3 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 257.00 € | **256.50 €** | 7.2 % | **7.0 %** | 256.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 73.00 € | **72.50 €** | 10.8 % | **10.0 %** | 72.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 28.00 € | **27.50 €** | 11.6 % | **9.6 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 42.00 € | **41.50 €** | 6.8 % | **5.6 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Aura A60 Soundbar | 202.50 € | **202.00 €** | 14.9 % | **14.6 %** | 202.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 138.00 € | **137.50 €** | 20.6 % | **20.2 %** | 137.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 181.50 € | **181.00 €** | 17.2 % | **16.9 %** | 181.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 81.00 € | **80.50 €** | 39.2 % | **38.3 %** | 80.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3411 1600W 12V nástenný | 238.00 € | **237.50 €** | 8.3 % | **8.1 %** | 237.89 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 131.50 € | **131.00 €** | 6.1 % | **5.7 %** | 131.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj REBEL POWER 800 LFP4 RB-4027 500W 12V | 89.50 € | **89.00 €** | 7.3 % | **6.7 %** | 89.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 204.00 € | **203.50 €** | 7.9 % | **7.6 %** | 203.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 268.50 € | **268.00 €** | 6.7 % | **6.5 %** | 268.39 € | cena podľa najlacnejšieho iného predajcu |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 195.00 € | **194.50 €** | 8.3 % | **8.0 %** | 194.89 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE 150 | 196.50 € | **196.00 €** | 21.4 % | **21.1 %** | 196.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 63.00 € | **62.50 €** | 17.5 % | **16.6 %** | 62.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 318.50 € | **318.00 €** | 7.0 % | **6.8 %** | 318.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 666.50 € | **666.00 €** | 7.8 % | **7.7 %** | 666.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 695.50 € | **695.00 €** | 8.6 % | **8.5 %** | 695.39 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 84.00 € | **83.50 €** | 7.2 % | **6.5 %** | 83.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 104.50 € | **104.00 €** | 17.7 % | **17.2 %** | 104.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 104.50 € | **104.00 €** | 10.7 % | **10.1 %** | 104.39 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 50.50 € | **50.00 €** | 6.2 % | **5.2 %** | 50.40 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Canon | 90.50 € | **90.00 €** | 20.1 % | **19.4 %** | 90.40 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.50 € | **31.00 €** | 10.5 % | **8.8 %** | 31.40 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na šiju a chrbát, REBEL ACTIVE RBA-... | 32.50 € | **32.00 €** | 7.3 % | **5.7 %** | 32.43 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na nohy a lýtka Shiatsu, REBEL ACTI... | 32.50 € | **32.00 €** | 7.3 % | **5.7 %** | 32.43 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2459BS | 51.50 € | **51.00 €** | 9.9 % | **8.8 %** | 51.44 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 58.50 € | **58.00 €** | 32.8 % | **31.6 %** | 58.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 13.50 € | **13.00 €** | 30.0 % | **25.2 %** | 13.48 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 83.50 € | **83.00 €** | 28.6 % | **27.8 %** | 83.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 14.50 € | **14.00 €** | 21.3 % | **17.1 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 24.50 € | **24.00 €** | 15.9 % | **13.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.50 € | **24.00 €** | 15.9 % | **13.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 15.50 € | **15.00 €** | 20.4 % | **16.5 %** | 15.49 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7344H | 109.50 € | **109.00 €** | 8.8 % | **8.3 %** | 109.49 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní filtrační kapsle GARNI BS 45T | 16.50 € | **16.00 €** | 18.2 % | **14.6 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42102SV | 79.50 € | **79.00 €** | 7.1 % | **6.4 %** | 79.49 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 42.50 € | **42.00 €** | 50.8 % | **49.0 %** | 42.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.00 €** | 17.6 % | **15.6 %** | 29.49 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.50 € | **104.00 €** | 21.4 % | **20.9 %** | 104.49 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 326.50 € | **326.00 €** | 12.4 % | **12.2 %** | 326.50 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 161.50 € | **161.00 €** | 20.3 % | **20.0 %** | 161.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1441.90 € | **1441.50 €** | 7.3 % | **7.3 %** | 1441.65 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.90 € | **89.50 €** | 40.5 % | **39.9 %** | 89.68 € | cena podľa najlacnejšieho iného predajcu |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 106.90 € | **106.50 €** | 14.7 % | **14.3 %** | 106.70 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 66.90 € | **66.50 €** | 36.1 % | **35.3 %** | 66.75 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9252I | 251.90 € | **251.50 €** | 7.4 % | **7.3 %** | 251.90 € | cena podľa najlacnejšieho iného predajcu |
| TechnoLine WS 7012 digitální teploměr | 11.90 € | **11.50 €** | 13.2 % | **9.4 %** | 9.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.70 € | **2.30 €** | 44.4 % | **23.0 %** | 2.40 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire G19 | 11.90 € | **11.50 €** | 16.8 % | **12.9 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 11.90 € | **11.50 €** | 10.1 % | **6.4 %** | 11.82 € | cena podľa najlacnejšieho iného predajcu |
| ELDONEX ECL-2010-BK Analogové hodiny | 11.90 € | **11.50 €** | 11.3 % | **7.6 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.00 €** | 30.4 % | **15.0 %** | 3.08 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVS26-US 32-70" TV mount | 29.90 € | **29.50 €** | 22.6 % | **21.0 %** | 29.57 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3008B | 48.90 € | **48.50 €** | 10.3 % | **9.4 %** | 48.63 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 265 s teploměrem | 16.90 € | **16.50 €** | 7.8 % | **5.3 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Vestavná bezdrôtová indukční nabíjačka ORNO OR-AE-13... | 18.90 € | **18.50 €** | 7.5 % | **5.2 %** | 18.69 € | cena podľa najlacnejšieho iného predajcu |
| ADEX ADS108GRP-1PO Reverzní PoE Switch 8x Gbit Port ... | 39.90 € | **39.50 €** | 6.3 % | **5.2 %** | 39.69 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.90 € | **28.50 €** | 11.4 % | **9.8 %** | 28.79 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm čierny lesk 500 ml | 22.90 € | **22.50 €** | 14.6 % | **12.6 %** | 22.83 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix venkovní kamera 4v1 s ... | 56.90 € | **56.50 €** | 17.1 % | **16.3 %** | 56.83 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 29.90 € | **29.50 €** | 6.5 % | **5.1 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight stredný dvojramenný konzolový držiak pre plo... | 28.90 € | **28.50 €** | 27.9 % | **26.1 %** | 28.84 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V200 | 32.90 € | **32.50 €** | 18.5 % | **17.1 %** | 32.85 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPhone 13 FIXBLM-723-BP | 20.90 € | **20.50 €** | 33.7 % | **31.1 %** | 20.85 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač pre domáce zvieratá 2v1 Petkit | 22.90 € | **22.50 €** | 24.2 % | **22.0 %** | 22.85 € | cena podľa najlacnejšieho iného predajcu |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 31.90 € | **31.50 €** | 13.1 % | **11.6 %** | 31.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Polia, 25W, 1350lm, 30cm, 3CCT | 23.90 € | **23.50 €** | 38.4 % | **36.1 %** | 23.87 € | cena podľa najlacnejšieho iného predajcu |
| Balanční podložka REBEL ACTIVE RBA-3104-46 | 27.90 € | **27.50 €** | 25.8 % | **24.0 %** | 27.88 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacia dóza G21 2 L, marinovacia | 22.90 € | **22.50 €** | 16.2 % | **14.2 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 24.90 € | **24.50 €** | 16.1 % | **14.3 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 41.90 € | **41.50 €** | 9.7 % | **8.7 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 51.90 € | **51.50 €** | 7.1 % | **6.3 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-838 5G | 22.90 € | **22.50 €** | 30.6 % | **28.3 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC S100neo AC/DC | 50.90 € | **50.50 €** | 35.4 % | **34.3 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.90 € | **51.50 €** | 6.3 % | **5.5 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 33.90 € | **33.50 €** | 8.9 % | **7.6 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| TESLA COMBO TV Quad - LNB konvertor s LTE filtrem | 17.90 € | **17.50 €** | 22.4 % | **19.7 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 1.80 € | **1.50 €** | 36.8 % | **14.0 %** | 1.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 10W, E27, 4000K... | 1.30 € | **1.00 €** | 42.8 % | **9.9 %** | 1.07 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočka, 3x 2,5A, biela | 1.20 € | **1.00 €** | 35.5 % | **12.9 %** | 1.02 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s dekoráciami Solight 1V215, 1 m,... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.60 € | **5.40 €** | 34.7 % | **29.9 %** | 5.50 € | cena podľa najlacnejšieho iného predajcu |
| LG F4A10S7NWH | 354.00 € | **353.90 €** | 10.0 % | **10.0 %** | 353.92 € | cena podľa najlacnejšieho iného predajcu |
| Lano na šplh HMS RO05 | 50.00 € | **49.90 €** | 5.4 % | **5.2 %** | 41.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal D5220683 | 30.00 € | **29.90 €** | 10.8 % | **10.4 %** | 29.92 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 46.00 € | **45.90 €** | 17.5 % | **17.3 %** | 45.93 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 23.00 € | **22.90 €** | 15.1 % | **14.6 %** | 22.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.30 € | **9.20 €** | 49.7 % | **48.1 %** | 9.24 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 53.00 € | **52.90 €** | 9.6 % | **9.4 %** | 52.94 € | cena podľa najlacnejšieho iného predajcu |
| Teplomer a vlhkomer CO2 SwitchBot Meter Pro | 45.00 € | **44.90 €** | 22.4 % | **22.2 %** | 44.94 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart Sada příslušenství pro iRobot R | 29.00 € | **28.90 €** | 7.1 % | **6.7 %** | 28.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 49dB | 23.00 € | **22.90 €** | 17.8 % | **17.2 %** | 22.97 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic Siena 180 Easy | 26.00 € | **25.90 €** | 7.5 % | **7.1 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 25.00 € | **24.90 €** | 13.9 % | **13.4 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **43.90 €** | 5.8 % | **5.5 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RACING SRP2 Zadný držiak | 42.00 € | **41.90 €** | 15.1 % | **14.8 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 62.00 € | **61.90 €** | 14.9 % | **14.7 %** | 62.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 52.00 € | **51.90 €** | 20.8 % | **20.6 %** | 52.00 € | cena podľa najlacnejšieho iného predajcu |
| Ochranná puzzle podložka ONE FItness MP10 modro-šedá | 25.00 € | **24.90 €** | 8.5 % | **8.0 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.00 € | **1.90 €** | 32.2 % | **25.6 %** | 1.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.20 € | **3.10 €** | 34.1 % | **29.9 %** | 3.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.90 € | **1.80 €** | 29.8 % | **23.0 %** | 1.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.50 €** | 38.0 % | **35.0 %** | 4.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.70 € | **8.60 €** | 42.9 % | **41.2 %** | 8.66 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 12.00 € | **11.90 €** | 24.3 % | **23.2 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight kefa na vlasy | 7.30 € | **7.20 €** | 15.5 % | **13.9 %** | 7.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.40 € | **9.30 €** | 26.9 % | **25.6 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 253.00 € | **252.90 €** | 62230.6 % | **62206.0 %** | 252.92 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 126.00 € | **125.90 €** | 42.8 % | **42.7 %** | 125.96 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 152.00 € | **151.90 €** | 31.1 % | **31.0 %** | 151.97 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 93.00 € | **92.90 €** | 17.6 % | **17.4 %** | 92.98 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT600S | 102.00 € | **101.90 €** | 41.4 % | **41.3 %** | 101.99 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E1WYHSK2 | 69.00 € | **68.90 €** | 10.0 % | **9.9 %** | 68.99 € | cena podľa najlacnejšieho iného predajcu |

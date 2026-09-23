# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-23

Vstup: `premiumstore-sk_2026-09-23_21-08.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6962**
- Návrh **zvýšiť** cenu: **60** produktov
- Návrh **znížiť** cenu: **239** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6663** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **11**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **464**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (60)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 529.90 € | **569.90 €** | 11.4 % | **19.8 %** | 569.96 € | cena podľa najlacnejšieho iného predajcu |
| ANCEL DS600 BT – profesionálny diagnostický skener OBD2 | 535.50 € | **569.90 €** | 5.0 % | **11.8 %** | 569.96 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.50 € | **217.00 €** | 10.6 % | **28.0 %** | 217.29 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener pre motocykle ANCEL MT310 | 282.90 € | **305.00 €** | 12.3 % | **21.0 %** | 305.21 € | cena podľa najlacnejšieho iného predajcu |
| Orbitrek REBEL ACTIVE RBA-1011 | 133.50 € | **155.00 €** | 7.7 % | **25.0 %** | 155.49 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXMRA1500E | 67.00 € | **80.90 €** | 13.1 % | **36.6 %** | 81.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 56.50 € | **66.90 €** | 15.0 % | **36.1 %** | 66.95 € | cena podľa najlacnejšieho iného predajcu |
| Beko PowerIntense BDFN26560XP | 532.50 € | **541.50 €** | 5.1 % | **6.8 %** | 541.86 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 410.50 € | **419.50 €** | 10.1 % | **12.5 %** | 419.90 € | cena podľa najlacnejšieho iného predajcu |
| Pedrini Infinity červená 6 porcí | 35.00 € | **41.50 €** | 6.7 % | **26.5 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Tesla 32E325BH 32" HD LED TV | 128.50 € | **134.50 €** | 5.1 % | **10.0 %** | 134.60 € | cena podľa najlacnejšieho iného predajcu |
| Sušička ovoce Ruhhy 25929 400W | 48.00 € | **54.00 €** | 5.7 % | **18.9 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 12 ks | 181.50 € | **187.00 €** | 10.2 % | **13.6 %** | 187.46 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 37.50 € | **42.50 €** | 5.4 % | **19.5 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Watch GPS Silver | 63.00 € | **67.50 €** | 7.2 % | **14.9 %** | 67.59 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 220.50 € | **225.00 €** | 15.0 % | **17.3 %** | 225.40 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO O2S Ultra | 2398.00 € | **2402.50 €** | 15.0 % | **15.2 %** | 2402.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 316.90 € | **320.90 €** | 38.2 % | **39.9 %** | 320.95 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3067-PK se závažím a počí... | 16.50 € | **20.50 €** | 18.9 % | **47.8 %** | 20.88 € | cena podľa najlacnejšieho iného predajcu |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 27.00 € | **31.00 €** | 9.3 % | **25.5 %** | 31.39 € | cena podľa najlacnejšieho iného predajcu |
| Jóga válec Dharma REBEL ACTIVE RBA-3062-PU | 11.90 € | **14.90 €** | 7.3 % | **34.3 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H3c 2K+ IP vonkajšia, bullet, Wi-Fi, 4M... | 40.90 € | **43.90 €** | 5.1 % | **12.8 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0011 Pozadie | 39.50 € | **42.50 €** | 15.5 % | **24.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.00 € | **13.90 €** | 21.2 % | **53.1 %** | 13.91 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HT652538 | 56.90 € | **59.50 €** | 6.6 % | **11.5 %** | 59.71 € | cena podľa najlacnejšieho iného predajcu |
| Philips Mikrosystem TAM3205M2 | 86.90 € | **89.50 €** | 10.3 % | **13.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta 3v1 RH5A32E0 | 117.50 € | **120.00 €** | 7.9 % | **10.2 %** | 120.21 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO hluboká pánev 24 cm | 28.50 € | **30.50 €** | 6.0 % | **13.4 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenný keramický ohrievač, 2000 W, čierne | 31.50 € | **33.50 €** | 6.5 % | **13.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Freewell ND64 filter pre DJI Mini 5 Pro | 18.00 € | **19.50 €** | 18.9 % | **28.8 %** | 19.62 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXSH1500E | 31.00 € | **32.50 €** | 12.4 % | **17.8 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 | 283.90 € | **284.90 €** | 9.4 % | **9.7 %** | 285.00 € | cena podľa najlacnejšieho iného predajcu |
| FIXED s displejem, 4x FIXCG140D-4C1A-BK | 54.00 € | **55.00 €** | 20.9 % | **23.1 %** | 55.17 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 273.00 € | **274.00 €** | 19.9 % | **20.3 %** | 274.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV A17 Pro Max (oranžový) | 120.00 € | **120.90 €** | 15.6 % | **16.4 %** | 121.00 € | cena podľa najlacnejšieho iného predajcu |
| Skládací síť REBEL ACTIVE pro badminton a další sporty | 29.00 € | **29.90 €** | 9.5 % | **12.9 %** | 29.95 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 352.90 € | **353.50 €** | 35.8 % | **36.1 %** | 353.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 59.90 € | **60.50 €** | 5.2 % | **6.2 %** | 60.55 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Copertinto BL439G10 | 58.90 € | **59.50 €** | 8.6 % | **9.7 %** | 59.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 225.00 € | **225.50 €** | 17.6 % | **17.8 %** | 225.51 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Yogurella 617 | 27.50 € | **28.00 €** | 9.2 % | **11.2 %** | 28.09 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 123.50 € | **124.00 €** | 19.4 % | **19.9 %** | 124.10 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.00 € | **31.50 €** | 8.8 % | **10.5 %** | 31.60 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Joy | 174.50 € | **175.00 €** | 33.4 % | **33.7 %** | 175.13 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine WS 9251 | 52.00 € | **52.50 €** | 5.1 % | **6.2 %** | 52.69 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise pánev 26 cm | 24.50 € | **25.00 €** | 10.7 % | **12.9 %** | 25.21 € | cena podľa najlacnejšieho iného predajcu |
| Tefal ZP2M04E0 | 22.50 € | **23.00 €** | 7.2 % | **9.5 %** | 23.21 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C110+ | 96.00 € | **96.50 €** | 22.0 % | **22.6 %** | 96.75 € | cena podľa najlacnejšieho iného predajcu |
| Športová kamera SJCAM C110+ | 96.00 € | **96.50 €** | 18.9 % | **19.5 %** | 96.75 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 234.00 € | **234.50 €** | 24.6 % | **24.8 %** | 234.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Samsung G Tab FIXTOT-1649 | 19.00 € | **19.50 €** | 48.2 % | **52.1 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo SamsG TabA11/A9 FIXGT-1650-TR | 19.00 € | **19.50 €** | 48.2 % | **52.1 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SamsGTA11+/A9+ FIXTOT-1651 | 19.00 € | **19.50 €** | 25.9 % | **29.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 104.50 € | **104.90 €** | 11.6 % | **12.1 %** | 104.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prepínač WiFi WiFi Sonoff Dual R3 Lite | 11.50 € | **11.90 €** | 26.0 % | **30.4 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 291.50 € | **291.90 €** | 6.3 % | **6.4 %** | 292.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise pánev 28 cm | 24.90 € | **25.00 €** | 5.1 % | **5.5 %** | 25.19 € | cena podľa najlacnejšieho iného predajcu |
| Hasicí přístroj práškový 1 kg ABC | 14.90 € | **15.00 €** | 5.0 % | **5.7 %** | 12.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.00 € | **9.10 €** | 23.0 % | **24.3 %** | 9.20 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH1833E0 | 149.90 € | **150.00 €** | 10.2 % | **10.2 %** | 150.04 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (239)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 1136.90 € | **867.00 €** | 49.9 % | **14.3 %** | 867.20 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 1016.90 € | **760.00 €** | 45.2 % | **8.5 %** | 760.45 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 680.90 € | **483.50 €** | 54.8 % | **9.9 %** | 483.83 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 619.50 € | **466.50 €** | 43.5 % | **8.1 %** | 466.70 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 395.00 € | **306.00 €** | 42.9 % | **10.7 %** | 306.20 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 453.00 € | **396.00 €** | 22.8 % | **7.3 %** | 396.34 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 1046.50 € | **999.90 €** | 22.3 % | **16.9 %** | 999.93 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 24 GS2401 | 525.00 € | **480.00 €** | 19.5 % | **9.2 %** | 480.17 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 543.50 € | **499.50 €** | 18.2 % | **8.6 %** | 499.53 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT1302 (2.5K) | 443.00 € | **402.50 €** | 42.5 % | **29.5 %** | 402.70 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 16 GT156 | 443.00 € | **402.50 €** | 25.5 % | **14.0 %** | 402.70 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 358.50 € | **318.50 €** | 24.8 % | **10.9 %** | 318.70 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 835.00 € | **795.50 €** | 22.8 % | **16.9 %** | 795.82 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 244.50 € | **205.00 €** | 28.0 % | **7.3 %** | 205.39 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 429.00 € | **391.00 €** | 22.5 % | **11.6 %** | 391.19 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 452.50 € | **418.00 €** | 22.1 % | **12.8 %** | 418.20 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 530.00 € | **496.50 €** | 23.2 % | **15.4 %** | 496.67 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 504.90 € | **471.50 €** | 20.1 % | **12.1 %** | 471.58 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 398.90 € | **365.50 €** | 19.2 % | **9.2 %** | 365.87 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T25B2 | 409.00 € | **376.00 €** | 26.2 % | **16.0 %** | 376.38 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 479.50 € | **448.00 €** | 15.6 % | **8.0 %** | 448.19 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 614.50 € | **584.90 €** | 39.3 % | **32.6 %** | 585.00 € | cena podľa najlacnejšieho iného predajcu |
| Samsung The Frame QE43LS03H | 781.00 € | **755.50 €** | 8.6 % | **5.0 %** | 670.51 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C615G KIT 3MPx, vonkajšia, IP PT... | 136.00 € | **110.50 €** | 32.3 % | **7.5 %** | 110.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 235 | 468.50 € | **444.50 €** | 12.1 % | **6.4 %** | 444.54 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 626.00 € | **604.50 €** | 17.5 % | **13.5 %** | 604.70 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 468.90 € | **449.00 €** | 10.1 % | **5.4 %** | 449.10 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 538.00 € | **518.50 €** | 14.7 % | **10.5 %** | 518.69 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 350.00 € | **331.50 €** | 13.6 % | **7.6 %** | 331.84 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 263.00 € | **245.90 €** | 23.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Ninja FB151EUWH Frost Vault 47l | 240.00 € | **226.00 €** | 13.2 % | **6.6 %** | 226.13 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 593.50 € | **580.50 €** | 8.6 % | **6.2 %** | 580.73 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1317.50 €** | 13.3 % | **12.2 %** | 1317.62 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 492.00 € | **480.00 €** | 16.0 % | **13.1 %** | 480.18 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 312.50 € | **300.50 €** | 18.0 % | **13.5 %** | 300.70 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **337.00 €** | 15.0 % | **11.1 %** | 337.20 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 137.00 € | **125.50 €** | 15.0 % | **5.3 %** | 118.81 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 228.00 € | **216.50 €** | 13.7 % | **8.0 %** | 216.63 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 223.90 € | **213.50 €** | 16.6 % | **11.2 %** | 213.52 € | cena podľa najlacnejšieho iného predajcu |
| JBL Partybox Stage 320 | 439.90 € | **429.50 €** | 12.6 % | **9.9 %** | 429.90 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 898.90 € | **888.50 €** | 30.1 % | **28.6 %** | 888.90 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 209.00 € | **198.90 €** | 11.6 % | **6.2 %** | 198.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 157.00 € | **147.00 €** | 25.8 % | **17.8 %** | 147.37 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 464.50 € | **455.00 €** | 20.0 % | **17.5 %** | 455.22 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 310.50 € | **301.00 €** | 23.6 % | **19.8 %** | 301.25 € | cena podľa najlacnejšieho iného predajcu |
| SAMSUNG Odyssey G40B (LS27BG400EUXEN) | 200.90 € | **191.50 €** | 10.2 % | **5.0 %** | 169.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 230.00 € | **221.50 €** | 23.3 % | **18.7 %** | 221.63 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 233.00 € | **224.50 €** | 23.3 % | **18.8 %** | 224.64 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 233.00 € | **224.50 €** | 23.3 % | **18.8 %** | 224.64 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 331.00 € | **322.50 €** | 12.3 % | **9.4 %** | 322.69 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 4631 | 142.50 € | **134.50 €** | 13.4 % | **7.1 %** | 134.67 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI IPS3608 Inteligentný digitálny napájací zdroj... | 166.50 € | **158.50 €** | 15.4 % | **9.9 %** | 158.88 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 204.00 € | **196.50 €** | 22.0 % | **17.5 %** | 196.55 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 551.50 € | **544.00 €** | 10.8 % | **9.3 %** | 544.19 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5474B | 77.00 € | **70.00 €** | 15.6 % | **5.1 %** | 70.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Carrera Rozšiřující set 3 | 54.00 € | **47.50 €** | 123.5 % | **96.6 %** | 47.54 € | cena podľa najlacnejšieho iného predajcu |
| Kaderník 4 v 1 ANLAN 05-ACFS41-02E | 85.00 € | **78.50 €** | 31.6 % | **21.6 %** | 78.67 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 143.00 € | **137.00 €** | 21.3 % | **16.2 %** | 137.01 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 267.50 € | **262.00 €** | 8.2 % | **6.0 %** | 262.09 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **161.00 €** | 9.7 % | **6.0 %** | 161.37 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022600 | 125.90 € | **120.50 €** | 14.7 % | **9.8 %** | 120.70 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 131.00 € | **126.00 €** | 24.7 % | **20.0 %** | 126.09 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 328.00 € | **323.00 €** | 12.2 % | **10.4 %** | 323.15 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG9201 | 121.50 € | **116.50 €** | 14.4 % | **9.7 %** | 116.82 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 917.50 € | **912.90 €** | 19.5 % | **18.9 %** | 912.95 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-B1 1... | 17.00 € | **12.50 €** | 48.5 % | **9.2 %** | 11.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 161 | 247.50 € | **243.00 €** | 9.7 % | **7.7 %** | 243.03 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 577.00 € | **572.50 €** | 8.9 % | **8.0 %** | 572.54 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 119.00 € | **114.50 €** | 17.3 % | **12.9 %** | 114.70 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 119.00 € | **114.50 €** | 17.9 % | **13.4 %** | 114.70 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 117.00 € | **112.50 €** | 17.3 % | **12.8 %** | 112.71 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 159.50 € | **155.00 €** | 8.9 % | **5.8 %** | 155.46 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 214.50 € | **210.50 €** | 8.2 % | **6.2 %** | 210.58 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 211.50 € | **207.50 €** | 10.5 % | **8.4 %** | 207.60 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 379.50 € | **375.50 €** | 11.6 % | **10.4 %** | 375.68 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 266.00 € | **262.00 €** | 25.2 % | **23.3 %** | 262.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 310.00 € | **306.00 €** | 21.9 % | **20.3 %** | 306.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 310.00 € | **306.00 €** | 20.7 % | **19.2 %** | 306.19 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 137.00 € | **133.00 €** | 19.6 % | **16.2 %** | 133.20 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 145.50 € | **141.50 €** | 14.5 % | **11.3 %** | 141.70 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 190.50 € | **186.50 €** | 16.7 % | **14.3 %** | 186.70 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GS1331 | 206.50 € | **202.50 €** | 17.7 % | **15.5 %** | 202.70 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 262.50 € | **258.50 €** | 20.5 % | **18.7 %** | 258.70 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 262.50 € | **258.50 €** | 29.7 % | **27.7 %** | 258.70 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 312.00 € | **308.00 €** | 7.9 % | **6.5 %** | 308.21 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 469.50 € | **465.50 €** | 6.9 % | **6.0 %** | 465.82 € | cena podľa najlacnejšieho iného predajcu |
| IMOU N110W 10-kanálový IP videorekordér | 83.00 € | **79.00 €** | 20.1 % | **14.3 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 19.50 € | **15.50 €** | 41.3 % | **12.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 247.00 € | **243.00 €** | 7.9 % | **6.2 %** | 243.48 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 238.90 € | **235.00 €** | 16.6 % | **14.7 %** | 235.10 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 166.90 € | **163.00 €** | 8.6 % | **6.1 %** | 163.31 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 508.90 € | **505.00 €** | 35.1 % | **34.1 %** | 505.08 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Tiny 3 | 378.90 € | **375.00 €** | 12.5 % | **11.4 %** | 375.10 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 308.90 € | **305.00 €** | 15.5 % | **14.1 %** | 305.11 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **557.00 €** | 7.3 % | **6.6 %** | 557.25 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1445.50 € | **1442.00 €** | 7.6 % | **7.3 %** | 1442.03 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 250.50 € | **247.00 €** | 17.4 % | **15.8 %** | 247.10 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 325.50 € | **322.00 €** | 8.1 % | **7.0 %** | 322.12 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Slate 11 | 330.00 € | **326.50 €** | 38.3 % | **36.9 %** | 326.69 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE WPNEI94A1SWIFI | 410.50 € | **407.00 €** | 7.0 % | **6.1 %** | 407.37 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 46.50 € | **43.00 €** | 49.7 % | **38.5 %** | 43.40 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 507.50 € | **504.50 €** | 7.0 % | **6.3 %** | 504.74 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 366.00 € | **363.00 €** | 6.9 % | **6.0 %** | 363.31 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 168.50 € | **165.50 €** | 8.0 % | **6.1 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RR8589CE | 401.00 € | **398.00 €** | 6.8 % | **6.0 %** | 398.49 € | cena podľa najlacnejšieho iného predajcu |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 71.50 € | **68.90 €** | 9.1 % | **5.1 %** | 53.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP P15A s uhlopriečkou 15,6" | 107.50 € | **105.00 €** | 16.8 % | **14.0 %** | 105.14 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 179.50 € | **177.00 €** | 12.7 % | **11.1 %** | 177.41 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND32/PL | 21.50 € | **19.50 €** | 20.2 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 43.00 € | **41.00 €** | 40.4 % | **33.9 %** | 41.13 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 335.50 € | **333.50 €** | 6.9 % | **6.3 %** | 333.66 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 226.50 € | **224.50 €** | 7.9 % | **6.9 %** | 224.67 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PS8400 kuchyňská váha | 24.50 € | **23.00 €** | 14.7 % | **7.7 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 16.50 € | **15.00 €** | 33.7 % | **21.6 %** | 15.33 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 139.50 € | **138.00 €** | 11.1 % | **9.9 %** | 138.42 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 328.90 € | **327.50 €** | 6.3 % | **5.9 %** | 327.84 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFB 8469 BV EE | 345.90 € | **344.50 €** | 7.0 % | **6.6 %** | 344.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Set PowerClean M+náhr. zdarma | 21.00 € | **19.90 €** | 13.0 % | **7.1 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C645D KIT 2x 2K, venkovní, IP PT... | 184.50 € | **183.50 €** | 5.9 % | **5.3 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal DB1612E0 | 26.50 € | **25.50 €** | 11.3 % | **7.1 %** | 24.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G2013900 Artiko Výrobník ledu | 129.50 € | **128.50 €** | 11.5 % | **10.6 %** | 128.51 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.50 €** | 14.6 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 20.50 € | **19.50 €** | 14.6 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Osmo Pocket 4P ND16 | 20.50 € | **19.50 €** | 14.6 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Kit Neewer ZC-10S two lamps LED + filters + tripods | 53.90 € | **52.90 €** | 143.3 % | **138.8 %** | 52.95 € | cena podľa najlacnejšieho iného predajcu |
| Lamp LED Neewer MS150B Bi Color 130W 2700-6500K | 201.90 € | **200.90 €** | 28.0 % | **27.4 %** | 200.95 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 397.90 € | **396.90 €** | 6.2 % | **5.9 %** | 397.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 399.90 € | **398.90 €** | 6.0 % | **5.8 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 229.90 € | **228.90 €** | 41435.7 % | **41255.0 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 667.90 € | **666.90 €** | 120568.5 % | **120387.8 %** | 667.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 365.90 € | **364.90 €** | 66006.6 % | **65825.9 %** | 365.00 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 157.50 € | **156.50 €** | 6.8 % | **6.1 %** | 156.70 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 329.50 € | **328.50 €** | 6.8 % | **6.5 %** | 328.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 42.50 € | **41.50 €** | 43.8 % | **40.4 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 562.50 € | **561.50 €** | 41.8 % | **41.6 %** | 561.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 351.00 € | **350.00 €** | 7.0 % | **6.7 %** | 350.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 256.90 € | **255.90 €** | 12.4 % | **11.9 %** | 256.00 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice WS 9050 | 64.50 € | **63.90 €** | 6.6 % | **5.6 %** | 49.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **10.90 €** | 31.7 % | **24.8 %** | 10.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.00 € | **60.50 €** | 18.9 % | **17.9 %** | 60.53 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 483.50 € | **483.00 €** | 6.9 % | **6.8 %** | 483.11 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.50 € | **198.00 €** | 9.0 % | **8.7 %** | 198.28 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit 2AIR | 31.50 € | **31.00 €** | 9.0 % | **7.2 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu |
| Budík analogový TechnoLine WT 757BK | 26.00 € | **25.50 €** | 8.3 % | **6.2 %** | 25.79 € | cena podľa najlacnejšieho iného predajcu |
| Budík analogový TechnoLine WT 757W | 26.50 € | **26.00 €** | 10.4 % | **8.3 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální projekční TechnoLine WT 538 | 33.00 € | **32.50 €** | 9.0 % | **7.4 %** | 32.79 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7235 | 30.50 € | **30.00 €** | 7.8 % | **6.0 %** | 30.29 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7245 | 30.00 € | **29.50 €** | 7.9 % | **6.1 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7160 | 22.00 € | **21.50 €** | 8.7 % | **6.3 %** | 21.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 52.50 € | **52.00 €** | 12.4 % | **11.3 %** | 52.29 € | cena podľa najlacnejšieho iného predajcu |
| Bazénové bezdrátové čidlo GARNI 057P | 38.00 € | **37.50 €** | 7.7 % | **6.3 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti UNI-T UT333S | 23.00 € | **22.50 €** | 8.3 % | **6.0 %** | 22.79 € | cena podľa najlacnejšieho iného predajcu |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.00 € | **15.50 €** | 9.8 % | **6.3 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 47.00 € | **46.50 €** | 11.9 % | **10.7 %** | 46.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 62.00 € | **61.50 €** | 12.9 % | **12.0 %** | 61.79 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST0401 Cestovní žehlička | 23.50 € | **23.00 €** | 19.9 % | **17.4 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| AMIKO diaľkové ovládanie Univerzálny, HD - SD | 13.00 € | **12.50 €** | 14.1 % | **9.7 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 82.00 € | **81.50 €** | 16.2 % | **15.5 %** | 81.79 € | cena podľa najlacnejšieho iného predajcu |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 48.00 € | **47.50 €** | 6.9 % | **5.8 %** | 47.79 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 76.00 € | **75.50 €** | 16.7 % | **16.0 %** | 75.79 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.00 € | **64.50 €** | 15.3 % | **14.4 %** | 64.79 € | cena podľa najlacnejšieho iného predajcu |
| AB-COM LNB AB 01 M Quattro | 11.50 € | **11.00 €** | 14.0 % | **9.1 %** | 11.29 € | cena podľa najlacnejšieho iného predajcu |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 20.50 € | **20.00 €** | 8.2 % | **5.5 %** | 20.29 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 31.50 € | **31.00 €** | 13.4 % | **11.6 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 93.50 € | **93.00 €** | 21015.6 % | **20902.7 %** | 93.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 59.00 € | **58.50 €** | 18.8 % | **17.8 %** | 58.79 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 84.00 € | **83.50 €** | 14.0 % | **13.4 %** | 83.79 € | cena podľa najlacnejšieho iného predajcu |
| Octagon SFX6018 S2 IP HD | 73.00 € | **72.50 €** | 5.9 % | **5.1 %** | 72.79 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 26.50 € | **26.00 €** | 8.7 % | **6.7 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 35.50 € | **35.00 €** | 15.9 % | **14.2 %** | 35.29 € | cena podľa najlacnejšieho iného predajcu |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.00 € | **61.50 €** | 6.1 % | **5.3 %** | 61.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 108.00 € | **107.50 €** | 6.6 % | **6.1 %** | 107.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 136.00 € | **135.50 €** | 14.2 % | **13.8 %** | 135.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 18.50 € | **18.00 €** | 10.8 % | **7.8 %** | 18.29 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-797 5G | 21.00 € | **20.50 €** | 19.6 % | **16.8 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 27.50 € | **27.00 €** | 21.0 % | **18.8 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz KM0127 brašna na rám kola | 12.00 € | **11.50 €** | 10.6 % | **6.0 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.00 € | **141.50 €** | 7.0 % | **6.6 %** | 141.80 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.00 € | **11.50 €** | 10.4 % | **5.8 %** | 11.86 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.50 € | **13.00 €** | 10.4 % | **6.3 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.00 € | **17.50 €** | 10.5 % | **7.5 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 106.00 € | **105.50 €** | 10.2 % | **9.7 %** | 105.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 242.50 € | **242.00 €** | 13.6 % | **13.3 %** | 242.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 135.00 € | **134.50 €** | 12.7 % | **12.2 %** | 134.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny mikroohmmer Uni-T UT620C+ | 179.00 € | **178.50 €** | 5.8 % | **5.5 %** | 178.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 154.50 € | **154.00 €** | 14.3 % | **14.0 %** | 154.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-2m endoskop | 190.00 € | **189.50 €** | 14.3 % | **14.0 %** | 189.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-3m endoskop | 253.50 € | **253.00 €** | 14.6 % | **14.3 %** | 253.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 84.00 € | **83.50 €** | 11.1 % | **10.5 %** | 83.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 59.50 € | **59.00 €** | 9.3 % | **8.4 %** | 59.39 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 51.50 € | **51.00 €** | 7.6 % | **6.6 %** | 51.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 79.00 € | **78.50 €** | 9.8 % | **9.1 %** | 78.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 167.00 € | **166.50 €** | 12.8 % | **12.5 %** | 166.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 190.50 € | **190.00 €** | 13.2 % | **12.9 %** | 190.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 324.00 € | **323.50 €** | 10.9 % | **10.8 %** | 323.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 354.50 € | **354.00 €** | 22.0 % | **21.8 %** | 354.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 150.00 € | **149.50 €** | 12.6 % | **12.3 %** | 149.89 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1290.00 € | **1289.50 €** | 7.5 % | **7.4 %** | 1289.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 141.00 € | **140.50 €** | 9.6 % | **9.2 %** | 140.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 56.50 € | **56.00 €** | 17.9 % | **16.9 %** | 56.39 € | cena podľa najlacnejšieho iného predajcu |
| Robotický čistič okien MOVA N1 (biely) | 287.50 € | **287.00 €** | 14.9 % | **14.7 %** | 287.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 25.00 € | **24.50 €** | 11.1 % | **8.9 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 55.50 € | **55.00 €** | 11.4 % | **10.4 %** | 55.39 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz KM2240 Connect C200 Tuya Wi-Fi | 165.00 € | **164.50 €** | 12.4 % | **12.0 %** | 164.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 931.50 € | **931.00 €** | 5.2 % | **5.1 %** | 931.39 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 274.00 € | **273.50 €** | 6.0 % | **5.8 %** | 273.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 44.50 € | **44.00 €** | 13.1 % | **11.8 %** | 44.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 240.50 € | **240.00 €** | 9.4 % | **9.1 %** | 240.39 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 134.00 € | **133.50 €** | 8.0 % | **7.6 %** | 133.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 92.00 € | **91.50 €** | 10.2 % | **9.6 %** | 91.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 206.50 € | **206.00 €** | 9.1 % | **8.8 %** | 206.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 194.00 € | **193.50 €** | 10.1 % | **9.8 %** | 193.89 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 66.00 € | **65.50 €** | 23.1 % | **22.2 %** | 65.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 87.00 € | **86.50 €** | 11.0 % | **10.3 %** | 86.89 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 27.00 € | **26.50 €** | 10.9 % | **8.9 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.50 € | **19.00 €** | 18.6 % | **15.5 %** | 19.40 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus XiaRed 17 4G, FIXOP3-1728-BK | 15.00 € | **14.50 €** | 38.6 % | **34.0 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| REDMI Headphone Neo Black | 45.50 € | **45.00 €** | 6.3 % | **5.1 %** | 45.40 € | cena podľa najlacnejšieho iného predajcu |
| Ručný multimeter do auta UNI-T UT107 | 26.50 € | **26.00 €** | 8.2 % | **6.1 %** | 26.49 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 42.50 € | **42.00 €** | 11.3 % | **10.0 %** | 42.49 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 52.50 € | **52.00 €** | 8.4 % | **7.3 %** | 52.49 € | cena podľa najlacnejšieho iného predajcu |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 92.50 € | **92.00 €** | 5.7 % | **5.1 %** | 92.49 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 50.50 € | **50.00 €** | 12.3 % | **11.2 %** | 50.49 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C501GW 2MPx, vonkajšia, IP PTZ, ... | 94.90 € | **94.50 €** | 5.8 % | **5.3 %** | 74.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odšťavovač G21 Chamberi horizontal | 155.90 € | **155.50 €** | 9.0 % | **8.7 %** | 155.75 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 71.90 € | **71.50 €** | 5.6 % | **5.0 %** | 71.79 € | cena podľa najlacnejšieho iného predajcu |
| Nescafé Dolce Gusto CORTADO 30cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 5.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vianočné LED cencúle Solight 1V47, 50 LED, časovač, ... | 6.30 € | **5.90 €** | 42.7 % | **33.6 %** | 5.95 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 265 s teploměrem | 16.90 € | **16.50 €** | 7.8 % | **5.2 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| AMIKO Mini HD265 | 45.90 € | **45.50 €** | 6.0 % | **5.1 %** | 45.69 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND64/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio Alkaline AA balenie 100ks | 35.90 € | **35.50 €** | 9.7 % | **8.5 %** | 35.75 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 378.90 € | **378.50 €** | 12.9 % | **12.8 %** | 378.57 € | cena podľa najlacnejšieho iného predajcu |
| Multimeter Uni-T UT256 | 26.00 € | **25.90 €** | 6.8 % | **6.3 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40T | 28.00 € | **27.90 €** | 8.9 % | **8.5 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.60 € | **1.50 €** | 36.9 % | **28.4 %** | 1.52 € | cena podľa najlacnejšieho iného predajcu |
| JBL Xtreme 3 black | 188.00 € | **187.90 €** | 9.9 % | **9.9 %** | 187.97 € | cena podľa najlacnejšieho iného predajcu |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-15

Vstup: `premiumstore-sk_2026-10-15_15-00.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6415**
- Návrh **zvýšiť** cenu: **57** produktov
- Návrh **znížiť** cenu: **45** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6313** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **4**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **344**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (57)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| LED svietidlo GODOX Litemons LA300R | 464.90 € | **526.90 €** | 15.0 % | **30.4 %** | 527.00 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259C (HP W2071A Cyan) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259Y (HP W2072A Yellow) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259M (HP W2073A Magenta) | 31.90 € | **43.90 €** | 10.6 % | **52.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Philips Mikrosystem TAM4205M2 | 162.50 € | **169.50 €** | 12.3 % | **17.1 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart Sada příslušenství pro iRobot R | 29.50 € | **34.90 €** | 10.3 % | **30.5 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| ETA Sole 1625 90000 | 87.50 € | **92.50 €** | 10.4 % | **16.7 %** | 92.90 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 370.50 € | **375.00 €** | 16.1 % | **17.5 %** | 375.19 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96CX (HP 305XL Colour) | 17.50 € | **21.90 €** | 11.2 % | **39.2 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Ochranné puzdro Telesin s rukoväťou pre DJI Osmo Act... | 60.00 € | **63.50 €** | 14.8 % | **21.5 %** | 63.54 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (biela) (QWERTY) | 40.50 € | **43.00 €** | 15.4 % | **22.5 %** | 43.21 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá TRUTHEAR Gate s mikrofónom (biele) | 24.50 € | **27.00 €** | 19.5 % | **31.7 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica ONIKUMA MT501 (biela) | 26.50 € | **28.90 €** | 15.0 % | **25.4 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 40.90 € | **43.00 €** | 15.3 % | **21.2 %** | 43.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 62.50 € | **64.50 €** | 10.6 % | **14.1 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica ONIKUMA G52 (čierna) | 24.90 € | **26.50 €** | 15.4 % | **22.8 %** | 26.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 9.80 € | **11.00 €** | 17.9 % | **32.3 %** | 11.45 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 829.00 € | **830.00 €** | 27.3 % | **27.4 %** | 830.17 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 černá | 63.00 € | **64.00 €** | 12.9 % | **14.7 %** | 64.23 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 63.00 € | **64.00 €** | 21.3 % | **23.2 %** | 64.23 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.00 € | **130.90 €** | 25678.3 % | **25856.8 %** | 130.99 € | cena podľa najlacnejšieho iného predajcu |
| City Boss Z600 | 627.00 € | **627.90 €** | 17.0 % | **17.2 %** | 627.98 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 431.00 € | **431.90 €** | 15.0 % | **15.3 %** | 431.99 € | cena podľa najlacnejšieho iného predajcu |
| ETA Aquabelo 1264 90000, černý/bílý | 45.00 € | **45.50 €** | 13.8 % | **15.1 %** | 45.51 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 59.00 € | **59.50 €** | 7.5 % | **8.4 %** | 59.51 € | cena podľa najlacnejšieho iného predajcu |
| Defender Taška na notebook 15,6", Geek | 14.00 € | **14.50 €** | 7.7 % | **11.5 %** | 14.51 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 121.00 € | **121.50 €** | 13.1 % | **13.5 %** | 121.58 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB BLOW 76-033 GaN 45W USB-A + USB-C + 1m... | 11.00 € | **11.50 €** | 17.7 % | **23.0 %** | 11.59 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 274.00 € | **274.50 €** | 29.2 % | **29.4 %** | 274.59 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 274.00 € | **274.50 €** | 32.3 % | **32.6 %** | 274.59 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 141.50 € | **142.00 €** | 6.6 % | **7.0 %** | 142.10 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.00 € | **15.50 €** | 5.2 % | **8.7 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 181.00 € | **181.50 €** | 11.6 % | **11.9 %** | 181.69 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.00 € | **168.50 €** | 33.4 % | **33.8 %** | 168.69 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 497.00 € | **497.50 €** | 5.4 % | **5.5 %** | 497.70 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 362.00 € | **362.50 €** | 81.0 % | **81.3 %** | 362.70 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 276.00 € | **276.50 €** | 30.1 % | **30.4 %** | 276.70 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 619.50 € | **620.00 €** | 26.8 % | **26.9 %** | 620.25 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer TX1800U Nano Adaptér | 20.50 € | **21.00 €** | 9.8 % | **12.5 %** | 21.25 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **20.50 €** | 15.8 % | **18.7 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 995.00 € | **995.50 €** | 13.5 % | **13.5 %** | 995.90 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L3350 | 185.50 € | **185.90 €** | 9.2 % | **9.4 %** | 186.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 11.50 € | **11.90 €** | 35.1 % | **39.8 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.50 € | **11.90 €** | 6.6 % | **10.3 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 19.50 € | **19.90 €** | 43.0 % | **45.9 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 54.50 € | **54.90 €** | 66.0 % | **67.2 %** | 54.99 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 294.90 € | **295.00 €** | 43.0 % | **43.1 %** | 295.22 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.00 €** | 5.5 % | **5.8 %** | 44.01 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC410 KIT 3MPx, vonkajšia, I... | 59.90 € | **60.00 €** | 6.1 % | **6.3 %** | 60.05 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 28.90 € | **29.00 €** | 19.2 % | **19.6 %** | 29.09 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 28.90 € | **29.00 €** | 19.2 % | **19.6 %** | 29.09 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.90 € | **63.00 €** | 17.5 % | **17.7 %** | 63.09 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 42.90 € | **43.00 €** | 13.2 % | **13.5 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 9.40 € | **9.50 €** | 98.0 % | **100.1 %** | 9.51 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603-Outdoor vonkajší AP, AX18... | 121.90 € | **122.00 €** | 6.0 % | **6.1 %** | 122.03 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link HX520(1-pack) WiFi6, AX3000, 3x ... | 76.90 € | **77.00 €** | 5.3 % | **5.4 %** | 77.05 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone E1 vocal echo/delay pedál | 178.90 € | **179.00 €** | 64.6 % | **64.7 %** | 179.06 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (45)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 116.90 € | **88.00 €** | 43.2 % | **7.8 %** | 88.40 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 116.90 € | **88.00 €** | 43.2 % | **7.8 %** | 88.40 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 148.00 € | **128.90 €** | 24.2 % | **8.2 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Fujifilm | 148.00 € | **128.90 €** | 24.2 % | **8.2 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RFSA240M43WN | 365.50 € | **348.90 €** | 30.7 % | **24.8 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Booster UltraCap CSC 12/800 12 V, 800 A | 303.50 € | **288.90 €** | 16.9 % | **11.3 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD BT černé | 166.90 € | **154.90 €** | 15.7 % | **7.4 %** | 154.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 166.90 € | **154.90 €** | 15.7 % | **7.4 %** | 154.99 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 155.50 € | **148.50 €** | 46.1 % | **39.5 %** | 148.88 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na úpravu vlasov ANLAN Miracle | 69.50 € | **63.00 €** | 35.5 % | **22.9 %** | 63.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 33.00 € | **26.50 €** | 79.9 % | **44.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING KS Pro RS095 | 346.50 € | **341.00 €** | 13.1 % | **11.3 %** | 341.35 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 39.90 € | **34.90 €** | 23.0 % | **7.6 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 39.90 € | **34.90 €** | 35.8 % | **18.8 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.50 € | **12.90 €** | 35.0 % | **5.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| KMP H168BX (HP 302 Black XL) | 25.00 € | **21.90 €** | 94.5 % | **70.4 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 1342/04 | 71.90 € | **68.90 €** | 10.2 % | **5.6 %** | 61.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| KMP H168CX (HP 302 Tri-colour XL) | 26.50 € | **23.90 €** | 83.7 % | **65.7 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Pero Baseus Smooth Writing 2 Stylus Pen (fialové) | 18.50 € | **16.00 €** | 52.4 % | **31.8 %** | 16.07 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **18.50 €** | 37.4 % | **21.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 25.00 € | **23.00 €** | 54.1 % | **41.8 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal N1230510 | 14.90 € | **13.00 €** | 28.6 % | **12.2 %** | 13.38 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W2 | 24.90 € | **23.00 €** | 23.8 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **9.80 €** | 33.4 % | **13.7 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 44.50 € | **42.90 €** | 17.0 % | **12.8 %** | 43.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 38.00 € | **36.50 €** | 65.7 % | **59.2 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| Kempingová lampa Superfire LT01 2v1 – 50–250 lm, pow... | 12.00 € | **10.50 €** | 33.5 % | **16.8 %** | 10.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.20 € | **6.80 €** | 43.4 % | **18.9 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Edifier X5 Pro V25 TWS (čierne) - nové 2025 | 35.00 € | **33.90 €** | 23.1 % | **19.3 %** | 33.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR černé | 196.00 € | **194.90 €** | 17.4 % | **16.8 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 196.00 € | **194.90 €** | 17.4 % | **16.8 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 311.90 € | **310.90 €** | 25.9 % | **25.5 %** | 311.00 € | cena podľa najlacnejšieho iného predajcu |
| Selfie svetlo Telesin s magnetickým držiakom telefónu | 19.50 € | **18.50 €** | 29.5 % | **22.9 %** | 18.70 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA G69 (ružová) (QWERTY) | 34.50 € | **33.50 €** | 15.2 % | **11.9 %** | 33.87 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC čierne | 134.50 € | **133.50 €** | 29.7 % | **28.8 %** | 133.88 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0026 | 19.00 € | **18.00 €** | 13.2 % | **7.3 %** | 18.45 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X50-PoE(1-pack) WiFi 6, 1x ... | 219.90 € | **219.00 €** | 90.7 % | **89.9 %** | 219.11 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C560WS 8MPx, vonkajšia, IP PTZ, ... | 81.50 € | **80.90 €** | 6.3 % | **5.5 %** | 70.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 11.50 € | **11.00 €** | 29.1 % | **23.5 %** | 11.13 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 388.00 € | **387.50 €** | 8.7 % | **8.6 %** | 387.75 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110P 2x LAN s PoE, 8x LAN ... | 28.00 € | **27.50 €** | 8.3 % | **6.4 %** | 27.85 € | cena podľa najlacnejšieho iného predajcu |
| Obouruční madlo HMS UW05 | 15.90 € | **15.50 €** | 9.3 % | **6.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.50 €** | 21.9 % | **18.6 %** | 14.79 € | cena podľa najlacnejšieho iného predajcu |
| Pohybové čidlo ORBIS ISIMAT | 23.00 € | **22.90 €** | 18.3 % | **17.8 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 2.90 € | **2.80 €** | 42.9 % | **38.0 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-31

Vstup: `premiumstore-sk_2026-10-31_11-04.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6121**
- Návrh **zvýšiť** cenu: **259** produktov
- Návrh **znížiť** cenu: **434** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5428** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **41**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **296**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (259)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Tefal CY851130 | 164.90 € | **260.00 €** | 10.2 % | **73.8 %** | 260.49 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 26.6 % | **42.7 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 195.00 € | **281.00 €** | 15.0 % | **65.7 %** | 281.19 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 230.00 € | **314.00 €** | 15.0 % | **57.0 %** | 314.20 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 564.90 € | **646.90 €** | 25.5 % | **43.7 %** | 647.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 209.00 € | **285.00 €** | 15.0 % | **56.8 %** | 285.26 € | cena podľa najlacnejšieho iného predajcu |
| Behringer PMP1680S mixer amplifier whit effect proce... | 320.00 € | **395.00 €** | 15.0 % | **42.0 %** | 395.38 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **312.00 €** | 10.8 % | **43.0 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 37.6 % | **69.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **548.50 €** | 4.6 % | **18.2 %** | 548.88 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 165.00 € | **227.00 €** | 15.0 % | **58.2 %** | 227.19 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVIZNÁ KAMERA THERMAL MASTER P3 Mini pre iOS/And... | 269.50 € | **322.50 €** | 15.1 % | **37.7 %** | 322.88 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **758.00 €** | 3.7 % | **11.4 %** | 758.13 € | cena podľa najlacnejšieho iného predajcu |
| Midas MR12 digital mixer | 447.90 € | **498.90 €** | 20.6 % | **34.4 %** | 499.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 286.00 € | **337.00 €** | 10.9 % | **30.7 %** | 337.20 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V70 Dynamický mikrofón | 199.00 € | **248.00 €** | 15.0 % | **43.3 %** | 248.48 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 45.2 % | **68.7 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 45.7 % | **69.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 45.7 % | **68.3 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 310.00 € | **350.00 €** | 15.0 % | **29.8 %** | 350.29 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 659.90 € | **699.00 €** | 5.0 % | **11.3 %** | 699.13 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **349.00 €** | 15.0 % | **28.0 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 27.3 % | **42.6 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **299.50 €** | 6.2 % | **18.0 %** | 299.61 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 808.00 € | **837.50 €** | 14.7 % | **18.8 %** | 837.78 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 4.4 % | **29.7 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 435.90 € | **463.50 €** | 5.0 % | **11.7 %** | 463.81 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **219.00 €** | 4.4 % | **19.4 %** | 219.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **218.00 €** | 4.1 % | **16.7 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu |
| Súprava variabilných filtrov ND/CPL Freewell Brandon... | 356.90 € | **379.90 €** | 19.0 % | **26.7 %** | 379.99 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 250.00 € | **272.90 €** | 5.9 % | **15.6 %** | 273.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD200SW | 409.50 € | **431.50 €** | 5.1 % | **10.7 %** | 431.82 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ30 (čierny) | 213.00 € | **234.50 €** | 6.8 % | **17.6 %** | 234.67 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 SensiCare® EW6T226C | 387.50 € | **408.00 €** | 5.0 % | **10.6 %** | 408.05 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **215.00 €** | 4.5 % | **15.5 %** | 215.10 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 573.00 € | **593.50 €** | 6.2 % | **10.0 %** | 593.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 340A | 366.00 € | **383.50 €** | 7.3 % | **12.4 %** | 383.90 € | cena podľa najlacnejšieho iného predajcu |
| Drôtové slúchadlá do uší TRUTHEAR Zero (červené) | 58.50 € | **75.50 €** | 15.1 % | **48.6 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| Statív Mini PGYTECH s nadstavcom pre vreckové / akčn... | 26.90 € | **43.50 €** | 15.2 % | **86.3 %** | 43.67 € | cena podľa najlacnejšieho iného predajcu |
| Booster UltraCap CSC 12/800 12 V, 800 A | 288.90 € | **305.00 €** | 10.6 % | **16.8 %** | 305.43 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 359.00 € | **374.90 €** | 7.0 % | **11.7 %** | 374.95 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256A | 380.50 € | **395.50 €** | 14.9 % | **19.5 %** | 395.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 31.3 % | **62.3 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 308.50 € | **323.00 €** | 5.1 % | **10.0 %** | 323.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 35.0 % | **66.2 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 186.50 € | **200.00 €** | 15.0 % | **23.3 %** | 200.20 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 308.50 € | **322.00 €** | 12.7 % | **17.7 %** | 322.42 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 117A | 226.50 € | **239.50 €** | 5.4 % | **11.5 %** | 239.76 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 196.90 € | **208.90 €** | 5.2 % | **11.6 %** | 208.92 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavňovač Tefal ZC605D38 | 206.50 € | **218.00 €** | 5.1 % | **10.9 %** | 218.17 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 302.50 € | **314.00 €** | 5.1 % | **9.1 %** | 314.28 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 79.00 € | **90.50 €** | 14.8 % | **31.5 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 266.50 € | **277.50 €** | 5.2 % | **9.5 %** | 277.82 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo SC750W Turbo | 94.50 € | **105.00 €** | 5.2 % | **16.9 %** | 105.05 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TB | 293.00 € | **303.50 €** | 7.7 % | **11.5 %** | 303.80 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 198.50 € | **209.00 €** | 5.1 % | **10.7 %** | 209.33 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 194.00 € | **204.00 €** | 6.2 % | **11.6 %** | 204.01 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 127.00 € | **137.00 €** | 6.7 % | **15.1 %** | 137.45 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 Pro AI s vyme... | 84.00 € | **94.00 €** | 27.5 % | **42.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **146.90 €** | 46.5 % | **56.7 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM017 20 kg výrobník ľadových kociek (čierny) | 199.50 € | **208.90 €** | 6.5 % | **11.5 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 4.9 % | **29.4 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **124.00 €** | 4.4 % | **12.7 %** | 124.42 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 42.5 % | **74.6 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 53.2 % | **87.8 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 453.90 € | **462.90 €** | 5.0 % | **7.1 %** | 463.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 49G | 157.00 € | **166.00 €** | 5.4 % | **11.4 %** | 166.36 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 290.00 € | **298.90 €** | 7.3 % | **10.6 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.00 €** | 4.2 % | **14.5 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 314.50 € | **323.00 €** | 5.1 % | **8.0 %** | 323.30 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 30cm Bluetooth 16M RGBCW Gosund L... | 15.50 € | **23.90 €** | 14.7 % | **76.8 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 284.90 € | **293.00 €** | 5.0 % | **8.0 %** | 293.21 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 221.50 € | **229.50 €** | 17.8 % | **22.0 %** | 229.79 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **78.50 €** | 4.4 % | **16.3 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **136.90 €** | 34.0 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 767.50 € | **774.90 €** | 17.6 % | **18.8 %** | 774.95 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 34.8 % | **45.4 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 207.00 € | **214.00 €** | 6.9 % | **10.5 %** | 214.13 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 190.50 € | **197.50 €** | 9.9 % | **13.9 %** | 197.72 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 190.50 € | **197.50 €** | 9.9 % | **13.9 %** | 197.72 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 187.00 € | **194.00 €** | 11.8 % | **16.0 %** | 194.30 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 18.0 % | **31.2 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD100SX | 416.90 € | **423.50 €** | 5.1 % | **6.8 %** | 423.52 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 317.00 € | **323.50 €** | 5.9 % | **8.1 %** | 323.60 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 11000 | 129.00 € | **135.50 €** | 5.5 % | **10.8 %** | 135.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 40.9 % | **73.8 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **55.00 €** | 6.1 % | **19.3 %** | 55.08 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-700-12 UPS 700W 12V čistý ... | 116.50 € | **122.50 €** | 0.1 % | **5.2 %** | 113.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal FW5558E0 | 170.00 € | **176.00 €** | 5.0 % | **8.7 %** | 176.10 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6182PS4 | 325.50 € | **331.50 €** | 5.0 % | **7.0 %** | 331.70 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno 72488 | 58.50 € | **64.50 €** | 7.0 % | **18.0 %** | 64.85 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA6 NP3T3EHTB Candy Bake 600 | 264.90 € | **270.50 €** | 5.1 % | **7.3 %** | 270.60 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E200SM | 16.50 € | **22.00 €** | 13.0 % | **50.7 %** | 22.15 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 388.00 € | **393.50 €** | 7.3 % | **8.8 %** | 393.66 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5RCNA375HXB1 HarvestFresh | 353.00 € | **358.50 €** | 5.5 % | **7.2 %** | 358.74 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná IP kamera Gosund IPC3, IP65 | 42.00 € | **47.50 €** | 14.8 % | **29.9 %** | 47.89 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 322.90 € | **328.00 €** | 5.2 % | **6.8 %** | 328.06 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 107.90 € | **113.00 €** | 5.0 % | **10.0 %** | 113.20 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 156.90 € | **162.00 €** | 5.2 % | **8.6 %** | 162.40 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 166.90 € | **171.90 €** | 5.2 % | **8.3 %** | 172.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWN7F447WI | 541.50 € | **546.50 €** | 5.0 % | **6.0 %** | 546.60 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 505.00 € | **510.00 €** | 7.9 % | **9.0 %** | 510.18 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 675.00 € | **680.00 €** | 5.2 % | **6.0 %** | 680.23 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 328.50 € | **333.50 €** | 5.3 % | **6.9 %** | 333.78 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 200.00 € | **205.00 €** | 6.9 % | **9.6 %** | 205.31 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 194.50 € | **199.50 €** | 5.9 % | **8.6 %** | 199.90 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXTO900E | 37.50 € | **42.00 €** | 6.4 % | **19.2 %** | 42.31 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C675D KIT 2× 2K, vonkajšia, IP P... | 212.00 € | **216.50 €** | 6.0 % | **8.2 %** | 216.89 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D57 Kondenzátorový mikrofón | 179.00 € | **183.50 €** | 15.0 % | **17.9 %** | 183.90 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 245.50 € | **249.90 €** | 5.2 % | **7.1 %** | 249.93 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 39.0 % | **45.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **141.50 €** | 15.9 % | **19.4 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 41.90 € | **46.00 €** | 8.5 % | **19.1 %** | 46.08 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 173.00 € | **177.00 €** | 5.7 % | **8.2 %** | 177.04 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R980T 2.0 (čierne) | 65.90 € | **69.90 €** | 14.3 % | **21.2 %** | 69.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 240.00 € | **244.00 €** | 6.2 % | **8.0 %** | 244.10 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 128.00 € | **132.00 €** | 13.2 % | **16.8 %** | 132.18 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 180.00 € | **183.90 €** | 9.3 % | **11.7 %** | 184.00 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 silver | 23.90 € | **27.50 €** | 9.8 % | **26.3 %** | 27.56 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.50 €** | 5.4 % | **12.7 %** | 55.58 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXGD2200E | 43.90 € | **47.50 €** | 5.8 % | **14.4 %** | 47.70 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 28.5 % | **40.8 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| N'oveen ohřívač vody IWH560 | 42.00 € | **45.50 €** | 10.7 % | **19.9 %** | 45.56 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 208.50 € | **212.00 €** | 6.0 % | **7.7 %** | 212.17 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo elektrický rotační čistič PS01 | 29.50 € | **33.00 €** | 5.1 % | **17.6 %** | 33.28 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSA754E | 42.00 € | **45.50 €** | 5.1 % | **13.9 %** | 45.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 131.00 € | **134.50 €** | 8.5 % | **11.4 %** | 134.83 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 161.00 € | **164.50 €** | 6.1 % | **8.4 %** | 164.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 166.50 € | **170.00 €** | 9.1 % | **11.4 %** | 170.49 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 459.50 € | **463.00 €** | 6.0 % | **6.8 %** | 463.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **78.90 €** | 6.2 % | **11.0 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Solac New Optima Pro PV2114 | 28.50 € | **31.90 €** | 6.5 % | **19.2 %** | 31.93 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 31.8 % | **46.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 402.90 € | **406.00 €** | 5.1 % | **5.9 %** | 406.36 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168BX (HP 302 Black XL) | 21.90 € | **25.00 €** | 70.4 % | **94.5 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower WPU-500-12 UPS 500W 12V čistý ... | 95.50 € | **98.50 €** | 1.9 % | **5.1 %** | 97.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rádio TechniSat DIGITRADIO 317 /černé/ | 80.90 € | **83.90 €** | 5.0 % | **8.9 %** | 83.94 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 358.50 € | **361.50 €** | 6.0 % | **6.9 %** | 361.60 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool W7F HP33 A | 324.50 € | **327.50 €** | 7.0 % | **8.0 %** | 327.70 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 163.50 € | **166.50 €** | 9.1 % | **11.1 %** | 166.90 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 23.6 % | **26.4 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H168CX (HP 302 Tri-colour XL) | 23.90 € | **26.50 €** | 65.7 % | **83.7 %** | 26.61 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI3042VI | 32.90 € | **35.50 €** | 5.5 % | **13.9 %** | 35.70 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10100 Smart Ceramic | 49.90 € | **52.50 €** | 5.2 % | **10.7 %** | 52.88 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 61.90 € | **64.50 €** | 5.3 % | **9.8 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Salente G4 robotický vysavač | 112.50 € | **115.00 €** | 5.4 % | **7.8 %** | 115.02 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 83.00 € | **85.50 €** | 12.5 % | **15.9 %** | 85.56 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 411BD | 65.00 € | **67.50 €** | 5.1 % | **9.1 %** | 67.84 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **35.00 €** | 4.8 % | **12.9 %** | 35.46 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim BLACK | 30.90 € | **33.00 €** | 5.9 % | **13.1 %** | 33.36 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 40.7 % | **45.8 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LR01 odžmolkovač | 15.90 € | **18.00 €** | 5.5 % | **19.5 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Predlžovací kábel pre svetelný pás Obsid RG... | 13.90 € | **16.00 €** | 15.1 % | **32.5 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10000 Top Ceramic | 43.00 € | **45.00 €** | 6.3 % | **11.2 %** | 45.13 € | cena podľa najlacnejšieho iného predajcu |
| Aroma difuzer Zortiva 28221 150ml se světelným efekt... | 24.50 € | **26.50 €** | 38.2 % | **49.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 16.50 € | **18.50 €** | 7.9 % | **21.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Vakuovačka Vacu Power 500 | 88.00 € | **89.90 €** | 8.9 % | **11.3 %** | 89.92 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara fialová | 35.00 € | **36.90 €** | 7.7 % | **13.5 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara modrá | 35.00 € | **36.90 €** | 7.7 % | **13.5 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 522.00 € | **523.90 €** | 6.9 % | **7.3 %** | 523.91 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 8500 black | 25.90 € | **27.50 €** | 10.0 % | **16.8 %** | 27.56 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Vitoria PV3700 | 34.50 € | **36.00 €** | 6.4 % | **11.0 %** | 36.04 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7059S | 33.00 € | **34.50 €** | 11.4 % | **16.4 %** | 34.60 € | cena podľa najlacnejšieho iného predajcu |
| Concept IDV5160wh | 349.50 € | **351.00 €** | 6.7 % | **7.1 %** | 351.10 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní vodní filtr GARNI WF 45T | 17.50 € | **19.00 €** | 5.3 % | **14.3 %** | 19.15 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 21.00 € | **22.50 €** | 6.2 % | **13.8 %** | 22.65 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE F4142PW | 236.50 € | **238.00 €** | 7.3 % | **8.0 %** | 238.20 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 79.50 € | **81.00 €** | 18.3 % | **20.6 %** | 81.24 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BOS6737E20FBG | 341.50 € | **343.00 €** | 6.5 % | **7.0 %** | 343.30 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 36.00 € | **37.50 €** | 17.4 % | **22.3 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXIR2403E | 21.50 € | **23.00 €** | 7.0 % | **14.4 %** | 23.40 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26730-56/RH | 31.50 € | **33.00 €** | 10.1 % | **15.4 %** | 33.40 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 887.00 € | **888.50 €** | 20.1 % | **20.3 %** | 888.90 € | cena podľa najlacnejšieho iného predajcu |
| Lampa na čítanie Yeelight Pura Reading Desk Lamp | 23.50 € | **25.00 €** | 8.2 % | **15.2 %** | 25.49 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk New Atom 7x50 | 57.50 € | **59.00 €** | 15.6 % | **18.6 %** | 59.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Matter Over Wi-Fi nástenný spínač SONOF... | 17.50 € | **18.90 €** | 26.8 % | **37.0 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRKI519E41 | 501.50 € | **502.90 €** | 6.9 % | **7.2 %** | 503.00 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 427.90 € | **429.00 €** | 14.2 % | **14.5 %** | 429.09 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7981 | 34.90 € | **36.00 €** | 6.2 % | **9.5 %** | 36.09 € | cena podľa najlacnejšieho iného predajcu |
| Girmi CT1000 Elektrický nůž | 26.90 € | **28.00 €** | 12.6 % | **17.2 %** | 28.36 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **17.50 €** | 26.4 % | **34.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 35A1 | 136.90 € | **138.00 €** | 5.1 % | **5.9 %** | 138.08 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXRA2501E | 104.90 € | **106.00 €** | 8.2 % | **9.4 %** | 106.40 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 34.0 % | **42.0 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Budík analogový TechnoLine WT 757BK | 25.50 € | **26.50 €** | 6.0 % | **10.2 %** | 26.56 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO8708W | 73.50 € | **74.50 €** | 10.8 % | **12.3 %** | 74.58 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní filtrační kapsle GARNI BS 45T | 16.50 € | **17.50 €** | 18.0 % | **25.1 %** | 17.59 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 446.90 € | **447.90 €** | 35.6 % | **35.9 %** | 448.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFS 7469 W EE | 349.00 € | **350.00 €** | 6.7 % | **7.0 %** | 350.10 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXLR500E | 14.00 € | **15.00 €** | 5.7 % | **13.2 %** | 15.21 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXJB1000E | 46.50 € | **47.50 €** | 16.4 % | **18.9 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZCK8040 | 41.50 € | **42.50 €** | 9.0 % | **11.6 %** | 42.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight 45 W GaN fast charge USB-A + USB-C adaptér | 13.00 € | **14.00 €** | 33.3 % | **43.5 %** | 14.28 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2100 Mikrovlnná trouba s grilem | 107.50 € | **108.50 €** | 8.7 % | **9.7 %** | 108.79 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2105 Mikrovlnná trouba s grilem | 107.50 € | **108.50 €** | 8.7 % | **9.7 %** | 108.79 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB453138 | 31.00 € | **32.00 €** | 8.4 % | **11.9 %** | 32.31 € | cena podľa najlacnejšieho iného predajcu |
| Salente Airfit-Wh | 47.50 € | **48.50 €** | 9.3 % | **11.6 %** | 48.85 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 41.00 € | **42.00 €** | 5.9 % | **8.5 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 66.00 € | **67.00 €** | 8.3 % | **10.0 %** | 67.50 € | cena podľa najlacnejšieho iného predajcu |
| LED reťaz s hviezdou na vianočný stromček Solight 1V... | 15.90 € | **16.90 €** | 44.4 % | **53.5 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 38.6 % | **41.7 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 2.60 € | **3.50 €** | 15.5 % | **55.5 %** | 3.59 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Ruby Red BS4717 | 39.00 € | **39.90 €** | 8.0 % | **10.4 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 36.2 % | **39.8 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Vintage 2868/03, krémová | 39.90 € | **40.50 €** | 10.9 % | **12.5 %** | 40.67 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka SMALLRIG X99 | 242.90 € | **243.50 €** | 10.3 % | **10.6 %** | 243.69 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **19.50 €** | 23.8 % | **27.2 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 49.00 € | **49.50 €** | 32.1 % | **33.5 %** | 49.51 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 220.00 € | **220.50 €** | 12.8 % | **13.0 %** | 220.52 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 220.00 € | **220.50 €** | 12.8 % | **13.0 %** | 220.52 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz s pumpou, 4 ks | 35.00 € | **35.50 €** | 6.8 % | **8.3 %** | 35.59 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 184.00 € | **184.50 €** | 5.3 % | **5.6 %** | 184.59 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 182.00 € | **182.50 €** | 12.2 % | **12.5 %** | 182.59 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová vesta REBEL ACTIVE RBA-2527-5 5kg neoprenová | 24.00 € | **24.50 €** | 5.6 % | **7.8 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 64.50 € | **65.00 €** | 30.1 % | **31.1 %** | 65.10 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 102.00 € | **102.50 €** | 7.1 % | **7.6 %** | 102.69 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW402HE0 | 129.00 € | **129.50 €** | 9.4 % | **9.8 %** | 129.69 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/ 7.0 Ah  REBEL bezúdržbová | 15.00 € | **15.50 €** | 22.4 % | **26.5 %** | 15.69 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 112.50 € | **113.00 €** | 5.3 % | **5.8 %** | 113.20 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 467.50 € | **468.00 €** | 10.3 % | **10.4 %** | 468.22 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.00 € | **227.50 €** | 8.3 % | **8.5 %** | 227.85 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.00 € | **227.50 €** | 13.1 % | **13.3 %** | 227.85 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (biela) | 23.00 € | **23.50 €** | 23.7 % | **26.4 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (čierna) | 23.00 € | **23.50 €** | 31.1 % | **34.0 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7115S | 72.50 € | **73.00 €** | 10.1 % | **10.9 %** | 73.38 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW501815 | 129.00 € | **129.50 €** | 5.1 % | **5.5 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **105.00 €** | 32.6 % | **33.2 %** | 105.17 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 210.50 € | **210.90 €** | 9.4 % | **9.6 %** | 210.99 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 150.50 € | **150.90 €** | 12.0 % | **12.3 %** | 150.99 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V /  9Ah  VIPOW bezúdržbový akumu... | 15.50 € | **15.90 €** | 3.5 % | **6.1 %** | 15.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laica VT3514 | 4.40 € | **4.80 €** | 11.1 % | **21.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| IMOU T800 4K palubná kamera | 54.50 € | **54.90 €** | 10.0 % | **10.8 %** | 54.99 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 41.50 € | **41.90 €** | 19.6 % | **20.8 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo L930-5 | 40.50 € | **40.90 €** | 9.4 % | **10.5 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.50 € | **369.90 €** | 7.0 % | **7.1 %** | 370.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Impregnace na kožené oděvy INPRODUCTS WAX 400 ml | 25.90 € | **26.00 €** | 5.2 % | **5.6 %** | 26.09 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 19.90 € | **20.00 €** | 35.0 % | **35.7 %** | 20.23 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (čierny) | 17.90 € | **18.00 €** | 6.2 % | **6.8 %** | 18.29 € | cena podľa najlacnejšieho iného predajcu |
| BEKO SIM8130P | 44.90 € | **45.00 €** | 12.1 % | **12.4 %** | 45.30 € | cena podľa najlacnejšieho iného predajcu |
| LED anjel s časovačom Solight 1V309, 37 cm, 3 × AA | 7.70 € | **7.80 €** | 43.9 % | **45.8 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED vianočná hviezda Solight 1V310, 40 cm, 1... | 4.70 € | **4.80 €** | 42.0 % | **45.1 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 77.90 € | **78.00 €** | 17.9 % | **18.1 %** | 78.09 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 129.90 € | **130.00 €** | 25658.5 % | **25678.3 %** | 130.29 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 178.90 € | **179.00 €** | 8.6 % | **8.7 %** | 179.39 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 178.90 € | **179.00 €** | 8.6 % | **8.7 %** | 179.39 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **17.50 €** | 25.0 % | **25.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (434)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **529.00 €** | 47.0 % | **15.1 %** | 529.25 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 29.8 % | **6.6 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **778.00 €** | 32.6 % | **19.5 %** | 778.21 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **292.00 €** | 48.6 % | **17.2 %** | 292.04 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **305.00 €** | 33.5 % | **8.5 %** | 305.09 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **281.50 €** | 32.7 % | **6.6 %** | 281.71 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **238.00 €** | 47.7 % | **17.0 %** | 238.50 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **257.50 €** | 27.7 % | **5.2 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **257.50 €** | 26.4 % | **5.2 %** | 236.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **223.00 €** | 44.0 % | **16.9 %** | 223.04 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **178.50 €** | 44.4 % | **14.3 %** | 178.54 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **153.50 €** | 47.6 % | **13.4 %** | 153.83 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **254.50 €** | 25.0 % | **5.9 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **207.50 €** | 41.5 % | **17.4 %** | 207.71 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **184.50 €** | 42.8 % | **16.8 %** | 184.54 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **260.00 €** | 37.8 % | **19.3 %** | 260.38 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **260.50 €** | 37.6 % | **19.4 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **260.50 €** | 37.6 % | **19.4 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **183.00 €** | 42.3 % | **17.1 %** | 183.04 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Čistička vzduchu MOVA P10 | 475.50 € | **436.50 €** | 18.6 % | **8.9 %** | 436.71 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 849.90 € | **812.90 €** | 13.2 % | **8.3 %** | 813.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| LG GBBS322BSW | 786.90 € | **751.00 €** | 10.0 % | **5.0 %** | 639.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **238.90 €** | 25.6 % | **9.3 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **179.50 €** | 40.3 % | **17.0 %** | 179.83 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **131.00 €** | 43.8 % | **14.2 %** | 131.21 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **103.50 €** | 50.0 % | **13.0 %** | 103.75 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **189.00 €** | 39.1 % | **19.3 %** | 189.42 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **144.00 €** | 45.0 % | **19.1 %** | 144.29 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **124.50 €** | 43.8 % | **15.7 %** | 124.63 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **121.00 €** | 48.4 % | **19.2 %** | 121.38 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **155.90 €** | 27.8 % | **7.4 %** | 155.99 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **170.50 €** | 39.8 % | **19.2 %** | 170.88 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **329.00 €** | 31.9 % | **21.3 %** | 329.31 € | cena podľa najlacnejšieho iného predajcu |
| Krups EA872A10 | 617.50 € | **589.50 €** | 10.1 % | **5.1 %** | 468.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **81.90 €** | 58.2 % | **18.1 %** | 81.92 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **153.00 €** | 42.8 % | **21.1 %** | 153.50 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **142.00 €** | 44.5 % | **21.3 %** | 142.25 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP E12X WBS EE | 597.50 € | **570.50 €** | 10.1 % | **5.1 %** | 569.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.74 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **221.50 €** | 35.5 % | **21.5 %** | 221.58 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **147.00 €** | 42.0 % | **21.2 %** | 147.38 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **57.50 €** | 68.9 % | **17.7 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **57.50 €** | 68.9 % | **17.7 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **88.50 €** | 52.1 % | **19.4 %** | 88.54 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 480.00 € | **456.00 €** | 11.1 % | **5.5 %** | 456.18 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **114.00 €** | 46.2 % | **21.3 %** | 114.21 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **101.90 €** | 49.0 % | **21.4 %** | 102.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **189.50 €** | 33.8 % | **19.5 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **189.90 €** | 33.5 % | **19.5 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **127.50 €** | 39.9 % | **19.2 %** | 127.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 38.1 % | **7.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **163.50 €** | 25.5 % | **10.6 %** | 163.53 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **121.50 €** | 35.7 % | **16.6 %** | 121.54 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **56.50 €** | 63.8 % | **21.2 %** | 56.67 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.00 €** | 35.4 % | **9.7 %** | 81.23 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WOI4S8PPM1SX | 442.90 € | **424.00 €** | 10.0 % | **5.3 %** | 424.10 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **118.50 €** | 38.2 % | **19.2 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WMD44MX | 406.50 € | **387.90 €** | 10.0 % | **5.0 %** | 324.72 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amazfit T-Rex 3 Pro 44mm Arctic Gold | 406.90 € | **388.50 €** | 10.1 % | **5.1 %** | 279.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **117.50 €** | 37.5 % | **19.4 %** | 117.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **69.50 €** | 41.3 % | **12.7 %** | 69.75 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **80.00 €** | 35.6 % | **11.4 %** | 80.36 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.50 €** | 40.2 % | **13.3 %** | 72.79 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **118.50 €** | 36.1 % | **19.2 %** | 118.83 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **55.50 €** | 50.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.00 €** | 44.8 % | **10.1 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| MSI G32C4X | 161.50 € | **144.90 €** | 17.1 % | **5.0 %** | 144.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **58.50 €** | 41.2 % | **10.4 %** | 58.75 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **119.50 €** | 35.0 % | **19.2 %** | 119.79 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **31.50 €** | 71.1 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Neewer Retro blesk | 74.82 € | **59.50 €** | 52.1 % | **20.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **74.50 €** | 42.8 % | **18.6 %** | 74.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **110.00 €** | 31.2 % | **15.4 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 249.50 € | **234.50 €** | 21.1 % | **13.8 %** | 234.69 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 249.50 € | **234.50 €** | 12.1 % | **5.4 %** | 234.69 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **102.00 €** | 36.4 % | **19.1 %** | 102.38 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 65.7 % | **17.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **75.00 €** | 36.8 % | **14.4 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| SONY STRDH190 | 310.90 € | **296.90 €** | 10.1 % | **5.1 %** | 279.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **279.00 €** | 22.9 % | **17.1 %** | 279.46 € | cena podľa najlacnejšieho iného predajcu |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **41.00 €** | 53.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **76.50 €** | 40.2 % | **18.9 %** | 76.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **53.50 €** | 42.9 % | **13.9 %** | 53.79 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **236.50 €** | 34.0 % | **26.8 %** | 236.59 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **113.50 €** | 33.7 % | **19.4 %** | 113.67 € | cena podľa najlacnejšieho iného predajcu |
| MSI PRO MP273 E14A | 98.00 € | **84.50 €** | 22.1 % | **5.3 %** | 84.70 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **122.00 €** | 34.2 % | **21.0 %** | 122.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **127.50 €** | 22.1 % | **10.8 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **62.00 €** | 39.2 % | **15.3 %** | 62.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **62.50 €** | 25.9 % | **5.1 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **50.50 €** | 47.1 % | **18.8 %** | 50.58 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **38.00 €** | 55.4 % | **18.8 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.50 €** | 52.4 % | **14.7 %** | 35.58 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **55.50 €** | 43.7 % | **18.8 %** | 55.88 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 231.00 € | **219.50 €** | 21.3 % | **15.2 %** | 219.90 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 30.6 % | **15.7 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria SMALLRIG VB50 mini V-Mount 3579B | 114.50 € | **103.50 €** | 34.5 % | **21.6 %** | 103.65 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **64.00 €** | 33.5 % | **14.2 %** | 64.46 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **81.50 €** | 35.2 % | **19.4 %** | 81.58 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.32 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **39.50 €** | 45.5 % | **15.6 %** | 39.70 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **103.00 €** | 30.8 % | **19.5 %** | 103.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **53.00 €** | 34.8 % | **14.3 %** | 53.21 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 338.50 € | **329.00 €** | 10.0 % | **6.9 %** | 329.33 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 209.50 € | **200.00 €** | 25.1 % | **19.4 %** | 200.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **70.50 €** | 31.3 % | **15.8 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.00 €** | 73.6 % | **15.0 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.00 €** | 73.6 % | **15.0 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.00 €** | 14.9 % | **10.4 %** | 219.21 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 56.3 % | **21.2 %** | 31.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **28.50 €** | 49.3 % | **13.7 %** | 28.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.00 €** | 37.7 % | **13.5 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **101.00 €** | 29.4 % | **19.2 %** | 101.33 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **33.90 €** | 44.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.50 €** | 38.3 % | **8.3 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 40.3 % | **8.7 %** | 29.13 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.00 €** | 61.4 % | **19.9 %** | 24.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **58.90 €** | 22.9 % | **7.8 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.00 €** | 64.9 % | **15.4 %** | 19.38 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **56.50 €** | 31.3 % | **14.9 %** | 56.75 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.50 €** | 78.5 % | **14.8 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 305.50 € | **297.50 €** | 9.6 % | **6.8 %** | 297.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 31.50 € | **23.50 €** | 59.3 % | **18.8 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic GAUSS TAPE ECHO | 66.50 € | **58.50 €** | 27.5 % | **12.1 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 41.2 % | **13.0 %** | 32.13 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 49.8 % | **16.0 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **21.90 €** | 42.7 % | **5.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.00 €** | 37.3 % | **17.7 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **67.00 €** | 17.3 % | **5.0 %** | 64.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **230.00 €** | 23.4 % | **19.3 %** | 230.33 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.50 €** | 42.1 % | **5.8 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.50 €** | 29.4 % | **15.2 %** | 62.88 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 47.4 % | **39.9 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 71.3 % | **16.2 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.00 €** | 32.9 % | **14.4 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.50 €** | 61.9 % | **19.9 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 60.4 % | **16.6 %** | 19.25 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **60.00 €** | 30.4 % | **16.6 %** | 60.08 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC 20100 W | 67.00 € | **59.90 €** | 17.9 % | **5.4 %** | 57.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 64.9 % | **13.3 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **92.90 €** | 28.6 % | **19.6 %** | 92.92 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **117.00 €** | 25.9 % | **18.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 48.50 € | **41.50 €** | 35.3 % | **15.8 %** | 41.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **115.00 €** | 26.2 % | **19.0 %** | 115.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.00 €** | 29.9 % | **14.8 %** | 53.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 40.9 % | **14.9 %** | 30.58 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **22.90 €** | 45.3 % | **12.0 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.00 €** | 40.2 % | **21.3 %** | 43.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **63.00 €** | 29.7 % | **17.3 %** | 63.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.00 €** | 53.5 % | **16.5 %** | 21.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.50 €** | 26.6 % | **8.7 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.00 €** | 34.1 % | **14.3 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 15.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko EnergySpin B7WFU68416WBES | 410.50 € | **404.00 €** | 7.4 % | **5.7 %** | 404.10 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.00 €** | 33.8 % | **18.9 %** | 51.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.50 €** | 19.4 % | **11.5 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **21.00 €** | 36.3 % | **5.4 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 57.4 % | **18.3 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **13.90 €** | 74.0 % | **21.0 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **58.50 €** | 22.4 % | **10.8 %** | 58.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC čierne | 139.00 € | **133.00 €** | 26.6 % | **21.2 %** | 133.27 € | cena podľa najlacnejšieho iného predajcu |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 22.0 % | **5.9 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| MSI MAG 274CF E20 | 113.50 € | **107.50 €** | 10.9 % | **5.0 %** | 107.90 € | cena podľa najlacnejšieho iného predajcu |
| Hlavná kefa MOVA pre E30 Ultra | 34.00 € | **28.00 €** | 69.1 % | **39.2 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **28.90 €** | 39.4 % | **15.6 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **69.00 €** | 25.4 % | **15.7 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **86.50 €** | 19.5 % | **12.1 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **41.50 €** | 35.1 % | **18.9 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.00 €** | 32.2 % | **20.8 %** | 59.38 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **17.00 €** | 51.1 % | **13.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 39.3 % | **31.9 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač MOVA K30 Lite | 220.50 € | **215.00 €** | 10.3 % | **7.6 %** | 215.15 € | cena podľa najlacnejšieho iného predajcu |
| BEBIRD Earsight Ultra – kamerový otoskop | 59.50 € | **54.00 €** | 22.1 % | **10.8 %** | 54.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.50 €** | 32.9 % | **14.7 %** | 34.63 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **34.50 €** | 25.2 % | **8.0 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **32.00 €** | 40.3 % | **19.9 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 42.7 % | **19.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **27.00 €** | 36.0 % | **13.7 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.50 €** | 30.4 % | **16.7 %** | 44.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **44.50 €** | 30.2 % | **16.5 %** | 44.79 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.00 €** | 33.8 % | **19.1 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.00 €** | 29.1 % | **15.0 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.00 €** | 33.0 % | **18.2 %** | 41.46 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 33.0 % | **5.4 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 47.1 % | **16.6 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 35.3 % | **7.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.50 €** | 27.4 % | **12.3 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 80.50 € | **75.50 €** | 12.3 % | **5.4 %** | 61.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 502.00 € | **497.00 €** | 13.1 % | **12.0 %** | 497.08 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 55.8 % | **16.9 %** | 15.25 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.00 €** | 55.8 % | **15.0 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **95.00 €** | 18.7 % | **12.8 %** | 95.13 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 55.6 % | **11.6 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 33.0 % | **11.9 %** | 25.41 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **19.90 €** | 42.7 % | **15.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **22.50 €** | 36.7 % | **13.3 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 29.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 26.00 € | **21.50 €** | 29.0 % | **6.7 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 136.00 € | **131.50 €** | 13.7 % | **10.0 %** | 131.79 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 51.9 % | **16.1 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.50 €** | 52.4 % | **16.5 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 54.6 % | **16.4 %** | 13.75 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO3950EA | 100.90 € | **96.50 €** | 10.3 % | **5.5 %** | 87.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.90 €** | 28.1 % | **8.0 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.50 €** | 40.5 % | **20.5 %** | 25.71 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **20.50 €** | 43.5 % | **19.6 %** | 20.54 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **20.50 €** | 35.0 % | **12.5 %** | 20.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **40.50 €** | 26.3 % | **14.7 %** | 40.63 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 29.6 % | **6.3 %** | 18.54 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **18.50 €** | 40.7 % | **15.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.00 €** | 27.9 % | **15.6 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 349.00 € | **345.00 €** | 6.2 % | **5.0 %** | 342.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 557.00 € | **553.00 €** | 19.5 % | **18.6 %** | 553.18 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 461.50 € | **457.50 €** | 19.5 % | **18.5 %** | 457.69 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 276.50 € | **272.50 €** | 6.9 % | **5.3 %** | 272.79 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.32 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 46.8 % | **11.9 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LBD4Z | 471.90 € | **468.00 €** | 9.1 % | **8.2 %** | 468.11 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 36.5 % | **17.2 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **21.00 €** | 39.1 % | **18.7 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Modul plynu Moza Racing AS016 TQA | 44.50 € | **41.00 €** | 14.1 % | **5.2 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PetKit Purobot Crystal Duo inteligentný samočistiaci... | 251.50 € | **248.00 €** | 21.4 % | **19.7 %** | 248.46 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 40.1 % | **15.6 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.50 €** | 30.6 % | **19.3 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 43.9 % | **15.6 %** | 14.04 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **34.00 €** | 31.8 % | **19.8 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **29.90 €** | 30.8 % | **17.4 %** | 29.92 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **28.90 €** | 33.2 % | **19.2 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.11 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 32.6 % | **18.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 41.5 % | **35.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Wallbox Qoltec 52723, 22kW, Typ 2, 5 m kabel, 400V, ... | 313.00 € | **309.90 €** | 8.8 % | **7.7 %** | 310.00 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk 4 Pro (čierne) | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky Zeblaze Btalk 4 Pro (strieborné) | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Diaľkový spúšť GODOX X3 TTL pre Fujifilm | 89.50 € | **86.50 €** | 43.8 % | **39.0 %** | 86.57 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 129.00 € | **126.00 €** | 14.8 % | **12.2 %** | 126.21 € | cena podľa najlacnejšieho iného predajcu |
| MOES WC-YH-LS Motor na rolety s Wi-Fi | 57.00 € | **54.00 €** | 14.3 % | **8.3 %** | 54.42 € | cena podľa najlacnejšieho iného predajcu |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 23.00 € | **20.00 €** | 64.6 % | **43.1 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Kruhové svetlo GODOX LR30Bi | 27.00 € | **24.00 €** | 60.3 % | **42.5 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 40.2 % | **19.3 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 37.7 % | **17.1 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **17.00 €** | 30.7 % | **11.2 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 36.9 % | **13.9 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.00 €** | 41.3 % | **18.2 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **14.00 €** | 42.8 % | **18.2 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.50 €** | 29.4 % | **6.6 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 41.5 % | **16.5 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 42.9 % | **17.6 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 44.90 € | **42.00 €** | 14.9 % | **7.5 %** | 42.27 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 44.90 € | **42.00 €** | 14.9 % | **7.5 %** | 42.27 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BL438831 | 56.90 € | **54.00 €** | 16.5 % | **10.5 %** | 54.29 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **12.00 €** | 47.3 % | **19.0 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **72.00 €** | 17.6 % | **13.1 %** | 72.29 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **21.90 €** | 33.5 % | **18.9 %** | 21.96 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 34.0 % | **20.9 %** | 24.64 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 55.1 % | **39.9 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **19.90 €** | 20.6 % | **6.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.90 €** | 21.5 % | **7.2 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.90 €** | 40.4 % | **31.7 %** | 39.93 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAQ2000WT Bezdrátová sluchátka | 37.50 € | **34.90 €** | 13.4 % | **5.6 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá Onikuma B2 (čierne) | 24.00 € | **21.50 €** | 21.1 % | **8.5 %** | 21.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **12.00 €** | 54.3 % | **27.7 %** | 12.14 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX XproII TTL pre Canon | 90.50 € | **88.00 €** | 18.7 % | **15.4 %** | 88.21 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX XproII TTL pre Nikon | 90.50 € | **88.00 €** | 18.7 % | **15.4 %** | 88.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná Wi-Fi brána MEROSS MSH400HK-EU | 19.00 € | **16.50 €** | 24.8 % | **8.4 %** | 16.72 € | cena podľa najlacnejšieho iného predajcu |
| Súprava xTool Ultimate Robot Kit V2.0 | 450.00 € | **447.50 €** | 7.0 % | **6.4 %** | 447.88 € | cena podľa najlacnejšieho iného predajcu |
| Mriežka GODOX TL-G60 TL60 | 23.50 € | **21.00 €** | 58.8 % | **41.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.8 % | **7.7 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.1 % | **7.1 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 43.90 € | **41.50 €** | 15.6 % | **9.3 %** | 41.73 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 41.6 % | **19.1 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 49.72 € | **47.50 €** | 45.4 % | **38.9 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 18.3 % | **8.2 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 29.00 € | **26.90 €** | 19.6 % | **11.0 %** | 26.99 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **16.90 €** | 33.3 % | **18.8 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **19.00 €** | 41.4 % | **27.9 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight WIFI zásuvka s meraním spotreby | 12.00 € | **10.00 €** | 36.6 % | **13.9 %** | 10.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 23.90 € | **21.90 €** | 51.2 % | **38.6 %** | 21.96 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 361.00 € | **359.00 €** | 9.2 % | **8.6 %** | 359.10 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 224.00 € | **222.00 €** | 16.2 % | **15.1 %** | 222.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 12.50 € | **10.50 €** | 37.3 % | **15.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér Puluz pre DJI OSMO Pocket 3 s 1/4" studenou ... | 19.50 € | **17.50 €** | 26.8 % | **13.8 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 18.9MM 9 (Złoty) | 29.00 € | **27.00 €** | 23.3 % | **14.8 %** | 27.42 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 52.9 % | **37.7 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 24.6 % | **12.2 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.00 €** | 33.0 % | **19.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight časovač so súmrakovým senzorom, 230V, 3600W | 10.50 € | **8.60 €** | 77.1 % | **45.1 %** | 8.63 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok s časovačom Solight 1V285, 10/13/... | 15.90 € | **14.00 €** | 82.8 % | **61.0 %** | 14.14 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerstation Uni FIXPOS-U-BK | 31.90 € | **30.00 €** | 14.8 % | **7.9 %** | 30.12 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.00 €** | 31.0 % | **14.6 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **25.50 €** | 23.4 % | **15.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 43.50 € | **41.90 €** | 47.2 % | **41.8 %** | 41.96 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MO20A3WH | 71.00 € | **69.50 €** | 7.9 % | **5.6 %** | 64.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Spúšť blesku GODOX X2T TTL pre Canon | 59.50 € | **58.00 €** | 19.9 % | **16.9 %** | 58.34 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre Sony | 59.50 € | **58.00 €** | 19.9 % | **16.9 %** | 58.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 42.50 € | **41.00 €** | 27.0 % | **22.5 %** | 41.45 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 39.6 % | **29.4 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Zapichovacie LED snehové vločky Solight 1V281, 15 LE... | 10.00 € | **8.70 €** | 53.4 % | **33.5 %** | 8.72 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 33.00 € | **31.90 €** | 9.5 % | **5.8 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 33.00 € | **31.90 €** | 9.5 % | **5.8 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 169.00 € | **167.90 €** | 34.2 % | **33.3 %** | 167.99 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 47.6 % | **40.7 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 23.50 € | **22.50 €** | 10.4 % | **5.7 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Puzdro Sunnylife Mini pre Insta360 GO Ultra | 9.70 € | **8.70 €** | 28.4 % | **15.2 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-1C-86W WiFi Matter smart wall switch (1-ch... | 16.50 € | **15.50 €** | 12.8 % | **6.0 %** | 15.67 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 143.50 € | **142.50 €** | 11.8 % | **11.1 %** | 142.69 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.50 € | **61.50 €** | 8.8 % | **7.1 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot Ranger | 194.50 € | **193.50 €** | 6.2 % | **5.7 %** | 193.85 € | cena podľa najlacnejšieho iného predajcu |
| BALDRTHERM HCS596WB – termohygrometer s Wi-Fi a solá... | 15.50 € | **14.50 €** | 44.5 % | **35.2 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 44.7 % | **37.0 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre Nikon | 58.90 € | **58.00 €** | 18.7 % | **16.9 %** | 58.34 € | cena podľa najlacnejšieho iného predajcu |
| Hodinky Colmi V89 Smartwatch (zlaté) | 29.90 € | **29.00 €** | 8.7 % | **5.4 %** | 29.38 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.50 €** | 25.3 % | **17.2 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 LED sviečok s časovačom Solight 1V284, 6,5 cm... | 9.80 € | **9.10 €** | 50.3 % | **39.6 %** | 9.19 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka do vlhka, priama, IP44, čierna-oran... | 3.40 € | **2.80 €** | 47.0 % | **21.1 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAT20000PK Bezdrátová sluchátka | 31.00 € | **30.50 €** | 8.0 % | **6.2 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.56 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot SCV400RD | 52.50 € | **52.00 €** | 10.6 % | **9.6 %** | 52.26 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT8208 Dvbt přijímač | 26.50 € | **26.00 €** | 12.2 % | **10.1 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 288.00 € | **287.50 €** | 14.3 % | **14.1 %** | 287.79 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 59.50 € | **59.00 €** | 76.0 % | **74.6 %** | 59.39 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **13.00 €** | 15.7 % | **11.4 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 920.50 € | **920.00 €** | 14.2 % | **14.2 %** | 920.39 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 160.00 € | **159.50 €** | 6.8 % | **6.4 %** | 159.89 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá Edifier HECATE G2 II (čierne) | 33.00 € | **32.50 €** | 13.1 % | **11.3 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.50 € | **216.00 €** | 17.1 % | **16.9 %** | 216.39 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 61.50 € | **61.00 €** | 12.1 % | **11.2 %** | 61.39 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 29.00 € | **28.50 €** | 18.5 % | **16.4 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 634.00 € | **633.50 €** | 6.2 % | **6.1 %** | 633.89 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD300ProII pre upevnenie Godox | 475.50 € | **475.00 €** | 6.9 % | **6.8 %** | 475.44 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533W1-EU (biela) | 98.50 € | **98.00 €** | 7.7 % | **7.1 %** | 98.44 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 330.50 € | **330.00 €** | 14.7 % | **14.6 %** | 330.45 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1016 | 20.50 € | **20.00 €** | 18.7 % | **15.8 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 41.50 € | **41.00 €** | 8.2 % | **6.9 %** | 41.49 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 59.50 € | **59.00 €** | 7.8 % | **6.9 %** | 59.50 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.50 € | **78.00 €** | 6.5 % | **5.8 %** | 78.50 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.50 € | **166.00 €** | 15.7 % | **15.3 %** | 166.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.50 €** | 46.2 % | **40.9 %** | 10.87 € | cena podľa najlacnejšieho iného predajcu |
| LTE filtr Fagor LBF 694 (5-694 MHz, LTE 5G útlum 45 dB) | 14.90 € | **14.50 €** | 18.0 % | **14.8 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7160 | 22.90 € | **22.50 €** | 13.0 % | **11.1 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 20.90 € | **20.50 €** | 18.6 % | **16.3 %** | 20.89 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 8x42 monokulárny | 26.90 € | **26.50 €** | 24.7 % | **22.8 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **37.50 €** | 31.7 % | **30.3 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E3T1-3ST | 30.90 € | **30.50 €** | 10.0 % | **8.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, 20 - 200A | 6.40 € | **6.20 €** | 33.8 % | **29.6 %** | 6.24 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED vianočná hviezda Solight 1V255, 60 cm, 2... | 6.80 € | **6.60 €** | 42.5 % | **38.3 %** | 6.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.90 € | **4.70 €** | 16.1 % | **11.4 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.00 € | **6.80 €** | 53.0 % | **48.6 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Matt for litter box Baymax / Baymax Lite Catlink CL-... | 25.00 € | **24.90 €** | 6.3 % | **5.9 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.90 €** | 47.4 % | **46.6 %** | 17.96 € | cena podľa najlacnejšieho iného predajcu |
| ETA Nubela 2569 90100, bílý | 25.00 € | **24.90 €** | 37.5 % | **37.0 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Tritanová láhev na pití 1 l černá | 31.00 € | **30.90 €** | 58.8 % | **58.3 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.40 € | **4.30 €** | 13.9 % | **11.3 %** | 4.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **4.00 €** | 54.3 % | **50.6 %** | 4.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.50 € | **9.40 €** | 28.3 % | **26.9 %** | 9.42 € | cena podľa najlacnejšieho iného predajcu |
| Šipky Elektronický terč Trizand 27046 | 84.00 € | **83.90 €** | 17.5 % | **17.4 %** | 83.99 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603-Outdoor vonkajší AP, AX18... | 122.00 € | **121.90 €** | 6.1 % | **6.0 %** | 122.00 € | cena podľa najlacnejšieho iného predajcu |

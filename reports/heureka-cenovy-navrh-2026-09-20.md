# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-20

Vstup: `premiumstore-sk_2026-09-20_08-17.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6905**
- Návrh **zvýšiť** cenu: **205** produktov
- Návrh **znížiť** cenu: **437** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6263** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **26**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **477**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (205)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 867.50 € | **1136.90 €** | 14.4 % | **49.9 %** | 1137.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 765.90 € | **1016.90 €** | 9.4 % | **45.2 %** | 1017.00 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 747.50 € | **897.50 €** | 8.2 % | **29.9 %** | 897.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 387.00 € | **496.00 €** | 7.7 % | **38.0 %** | 496.36 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 941.00 € | **1046.50 €** | 10.0 % | **22.3 %** | 1046.83 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 821.90 € | **917.50 €** | 7.1 % | **19.5 %** | 917.54 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 744.00 € | **835.00 €** | 9.4 % | **22.8 %** | 835.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V25i Pro II | 314.00 € | **395.50 €** | 13.6 % | **43.1 %** | 395.54 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 429.00 € | **508.90 €** | 13.9 % | **35.1 %** | 509.00 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 461.00 € | **530.00 €** | 7.2 % | **23.2 %** | 530.38 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1268.00 € | **1329.90 €** | 8.0 % | **13.3 %** | 1330.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Slate 11 | 270.50 € | **330.50 €** | 13.4 % | **38.5 %** | 330.61 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T25B2 | 356.50 € | **409.50 €** | 10.0 % | **26.4 %** | 409.60 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 499.50 € | **552.00 €** | 6.5 % | **17.6 %** | 552.49 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 416.50 € | **464.50 €** | 7.6 % | **20.0 %** | 464.68 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 406.00 € | **453.00 €** | 10.0 % | **22.8 %** | 453.04 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM2000 | 657.00 € | **703.90 €** | 10.0 % | **17.9 %** | 704.00 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 202.50 € | **244.50 €** | 6.0 % | **28.0 %** | 244.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 566.00 € | **607.00 €** | 6.3 % | **14.0 %** | 607.05 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 24 GS2401 | 484.00 € | **525.00 €** | 10.1 % | **19.5 %** | 525.08 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 454.00 € | **492.00 €** | 7.0 % | **16.0 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 229.50 € | **266.00 €** | 8.0 % | **25.2 %** | 266.21 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT1302 (2.5K) | 406.50 € | **443.00 €** | 30.8 % | **42.5 %** | 443.26 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 16 GT156 | 406.50 € | **443.00 €** | 15.1 % | **25.5 %** | 443.26 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 499.50 € | **535.00 €** | 8.6 % | **16.3 %** | 535.20 € | cena podľa najlacnejšieho iného predajcu |
| Fototlačiareň Liene Amber M210 4x6", 10 listov | 144.00 € | **178.90 €** | 14.9 % | **42.7 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 275.50 € | **310.00 €** | 8.3 % | **21.9 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 275.50 € | **310.00 €** | 7.3 % | **20.7 %** | 310.13 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 229.00 € | **262.50 €** | 5.2 % | **20.5 %** | 262.73 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 229.00 € | **262.50 €** | 13.1 % | **29.7 %** | 262.73 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 471.50 € | **504.90 €** | 12.1 % | **20.1 %** | 504.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 365.50 € | **398.90 €** | 9.2 % | **19.2 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 333.00 € | **366.00 €** | 8.6 % | **19.4 %** | 366.13 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 326.50 € | **358.50 €** | 13.7 % | **24.8 %** | 358.88 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 280.00 € | **310.50 €** | 11.4 % | **23.6 %** | 310.67 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Poseidon E40 | 399.00 € | **429.00 €** | 13.9 % | **22.5 %** | 429.04 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 306.50 € | **334.50 €** | 8.6 % | **18.5 %** | 334.89 € | cena podľa najlacnejšieho iného predajcu |
| Fototlačiareň Liene Amber M110 4x6", 10 listov | 119.50 € | **146.90 €** | 14.9 % | **41.3 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 20 W | 1117.00 € | **1143.50 €** | 14.3 % | **17.0 %** | 1143.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 207.50 € | **233.00 €** | 9.8 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 207.50 € | **233.00 €** | 9.8 % | **23.3 %** | 233.17 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 205.00 € | **230.00 €** | 9.9 % | **23.3 %** | 230.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 235 | 444.50 € | **468.50 €** | 6.4 % | **12.1 %** | 468.80 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X40 Soundbar | 329.50 € | **350.00 €** | 6.9 % | **13.6 %** | 350.20 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 185.00 € | **204.00 €** | 10.6 % | **22.0 %** | 204.29 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 296.50 € | **312.50 €** | 12.0 % | **18.0 %** | 312.61 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 175.50 € | **190.50 €** | 7.6 % | **16.7 %** | 190.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 294.00 € | **308.90 €** | 9.9 % | **15.5 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Voyager Slim 45W FIXCT45-3C1A-WH | 24.90 € | **39.50 €** | 11.8 % | **77.3 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Ninja FB151EUWH Frost Vault 47l | 226.00 € | **240.00 €** | 6.6 % | **13.2 %** | 240.42 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 572.50 € | **586.00 €** | 8.0 % | **10.6 %** | 586.08 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 366.00 € | **379.50 €** | 7.7 % | **11.6 %** | 379.85 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 223.50 € | **236.00 €** | 13.1 % | **19.4 %** | 236.29 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 223.50 € | **236.00 €** | 13.1 % | **19.4 %** | 236.29 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259C (HP W2071A Cyan) | 32.50 € | **43.90 €** | 11.2 % | **50.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259Y (HP W2072A Yellow) | 32.50 € | **43.90 €** | 11.2 % | **50.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259M (HP W2073A Magenta) | 32.50 € | **43.90 €** | 11.2 % | **50.2 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 128.90 € | **140.00 €** | 12.8 % | **22.5 %** | 140.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 57.50 € | **68.00 €** | 15.1 % | **36.1 %** | 68.06 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 126.50 € | **137.00 €** | 10.5 % | **19.6 %** | 137.49 € | cena podľa najlacnejšieho iného predajcu |
| Hohem microphone (2TX + 1RX + charging case) | 61.90 € | **71.50 €** | 5.6 % | **22.0 %** | 71.90 € | cena podľa najlacnejšieho iného predajcu |
| Měnič napětí Carspa P400 12V/230V 400W | 52.00 € | **61.50 €** | 0.6 % | **18.9 %** | 61.79 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 241.50 € | **250.90 €** | 13.2 % | **17.6 %** | 250.91 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V801 5200mah návnada loď | 87.50 € | **96.50 €** | 22.4 % | **35.0 %** | 96.77 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 FLEX EES42210IX | 462.90 € | **471.50 €** | 5.0 % | **7.0 %** | 471.80 € | cena podľa najlacnejšieho iného predajcu |
| Wireless headphones EDIFIER W830NB (ivory) | 62.00 € | **70.50 €** | 14.8 % | **30.5 %** | 70.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 70.50 € | **78.90 €** | 10.1 % | **23.2 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| KMP H-T259B (HP W2070A Black) | 32.50 € | **40.90 €** | 11.2 % | **39.9 %** | 40.99 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-1600-12 UPS 1600W 12V čist... | 250.50 € | **258.50 €** | 1.8 % | **5.1 %** | 250.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete ART 4631 | 134.50 € | **142.50 €** | 7.1 % | **13.4 %** | 142.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 320.50 € | **328.00 €** | 10.3 % | **12.8 %** | 328.23 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCool 2,MagSafe FIXMCO2-BK | 29.50 € | **37.00 €** | 10.2 % | **38.2 %** | 37.42 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 231.50 € | **238.90 €** | 13.0 % | **16.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM03 RGB (čierna) | 18.90 € | **26.00 €** | 14.9 % | **58.1 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 198.90 € | **206.00 €** | 6.2 % | **10.0 %** | 206.21 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY-T Android TV 4K UHD Android TV multimed... | 86.00 € | **93.00 €** | 20.9 % | **30.7 %** | 93.25 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 473.00 € | **479.90 €** | 14.0 % | **15.7 %** | 479.93 € | cena podľa najlacnejšieho iného predajcu |
| Braun IS5247.VI | 185.00 € | **191.50 €** | 7.7 % | **11.5 %** | 191.90 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 58.00 € | **64.50 €** | 5.1 % | **16.8 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 207.50 € | **213.50 €** | 8.4 % | **11.6 %** | 213.79 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 139.50 € | **145.50 €** | 9.7 % | **14.5 %** | 145.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED s displejem, 4x FIXCG140D-4C1A-BK | 49.50 € | **55.00 €** | 10.8 % | **23.1 %** | 55.17 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 161.00 € | **166.50 €** | 6.0 % | **9.7 %** | 166.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 244.00 € | **249.50 €** | 21.2 % | **23.9 %** | 249.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 23.50 € | **29.00 €** | 7.3 % | **32.4 %** | 29.44 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022600 | 120.50 € | **125.90 €** | 9.8 % | **14.7 %** | 126.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 216.50 € | **221.90 €** | 8.0 % | **10.7 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 262.00 € | **267.00 €** | 6.0 % | **8.0 %** | 267.29 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG9201 | 116.50 € | **121.50 €** | 9.7 % | **14.4 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 123.00 € | **128.00 €** | 7.6 % | **11.9 %** | 128.50 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 144.90 € | **149.50 €** | 14.4 % | **18.1 %** | 149.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 210.50 € | **215.00 €** | 6.2 % | **8.4 %** | 215.01 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 243.00 € | **247.50 €** | 7.7 % | **9.7 %** | 247.54 € | cena podľa najlacnejšieho iného predajcu |
| Ozvučovací systém KRUGER MATZ KM1712 | 168.50 € | **173.00 €** | 18.9 % | **22.0 %** | 173.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 54.50 € | **59.00 €** | 25.5 % | **35.9 %** | 59.14 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 155.00 € | **159.50 €** | 5.8 % | **8.9 %** | 159.70 € | cena podľa najlacnejšieho iného predajcu |
| Skaner 3D Creality RaptorX | 2801.50 € | **2806.00 €** | 15.2 % | **15.4 %** | 2806.40 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96CX (HP 305XL Colour) | 17.90 € | **21.90 €** | 12.3 % | **37.4 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 465.50 € | **469.50 €** | 6.0 % | **6.9 %** | 469.60 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GS1331 | 202.50 € | **206.50 €** | 15.5 % | **17.7 %** | 206.63 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 243.00 € | **247.00 €** | 6.2 % | **7.9 %** | 247.30 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 308.00 € | **312.00 €** | 6.5 % | **7.9 %** | 312.40 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 422.00 € | **426.00 €** | 13.9 % | **15.0 %** | 426.41 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro Xiaomi R Pad 2 FIXTOT-1199 | 14.90 € | **18.90 €** | 12.8 % | **43.1 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 163.00 € | **166.90 €** | 6.1 % | **8.6 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 43.00 € | **46.90 €** | 38.5 % | **51.0 %** | 46.92 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 28.00 € | **31.90 €** | 20.6 % | **37.4 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 345.00 € | **348.90 €** | 13.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Fixed pouzdro XRN 14P+5G FIXOP3-1433-BK | 11.90 € | **15.50 €** | 10.1 % | **43.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 322.00 € | **325.50 €** | 7.0 % | **8.1 %** | 325.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 22.00 € | **25.50 €** | 18.1 % | **36.9 %** | 25.73 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE WPNEI94A1SWIFI | 407.00 € | **410.50 €** | 6.1 % | **7.0 %** | 410.80 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.00 € | **22.50 €** | 8.7 % | **28.7 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 12.50 € | **16.00 €** | 7.5 % | **37.7 %** | 16.46 € | cena podľa najlacnejšieho iného predajcu |
| LG DSTWH | 68.00 € | **71.00 €** | 8.0 % | **12.8 %** | 71.10 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E15 | 286.50 € | **289.50 €** | 6.0 % | **7.2 %** | 289.63 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 165.50 € | **168.50 €** | 6.1 % | **8.0 %** | 168.78 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 363.00 € | **366.00 €** | 6.0 % | **6.9 %** | 366.30 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 504.50 € | **507.50 €** | 6.3 % | **7.0 %** | 507.80 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RR8589CE | 398.00 € | **401.00 €** | 6.0 % | **6.8 %** | 401.40 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 26.00 € | **29.00 €** | 18.2 % | **31.8 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák na telefon FIXCRT-M14-BK | 12.90 € | **15.50 €** | 11.5 % | **33.9 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.50 € | **24.00 €** | 15.8 % | **29.3 %** | 24.21 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 213.50 € | **216.00 €** | 5.9 % | **7.2 %** | 216.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight GSM diaľkovo ovládaná zásuvka | 56.00 € | **58.50 €** | 27.0 % | **32.6 %** | 58.86 € | cena podľa najlacnejšieho iného predajcu |
| Philips Mikrosystem TAM3205M2 | 87.00 € | **89.50 €** | 10.5 % | **13.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro MMG06/Power FIXOP3-1654-BK | 12.00 € | **14.50 €** | 10.9 % | **34.0 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 177.00 € | **179.50 €** | 11.1 % | **12.7 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 328.90 € | **331.00 €** | 11.6 % | **12.3 %** | 331.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight PIR senzor nástenný, vonkajší, čierny | 6.80 € | **8.80 €** | 11.5 % | **44.2 %** | 8.84 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 | 281.90 € | **283.90 €** | 8.6 % | **9.4 %** | 284.00 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT3000 44,4 Wh štartér | 59.50 € | **61.50 €** | 14.7 % | **18.5 %** | 61.73 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 333.50 € | **335.50 €** | 6.3 % | **6.9 %** | 335.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 222.00 € | **223.90 €** | 15.6 % | **16.6 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.80 € | **11.50 €** | 13.7 % | **33.4 %** | 11.62 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 17.90 € | **19.50 €** | 6.4 % | **15.9 %** | 19.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 8.30 € | **9.90 €** | 20.9 % | **44.2 %** | 9.95 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Samsung G Tab FIXTOT-1649 | 17.50 € | **19.00 €** | 36.5 % | **48.2 %** | 19.04 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 140.00 € | **141.50 €** | 11.5 % | **12.7 %** | 141.61 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 34.00 € | **35.50 €** | 9.6 % | **14.5 %** | 35.62 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 34.00 € | **35.50 €** | 8.4 % | **13.2 %** | 35.62 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 16.50 € | **18.00 €** | 12.8 % | **23.1 %** | 18.16 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 79.50 € | **81.00 €** | 22.1 % | **24.4 %** | 81.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom bi... | 10.00 € | **11.50 €** | 18.3 % | **36.1 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 15.00 € | **16.50 €** | 23.7 % | **36.1 %** | 16.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **16.00 €** | 18.4 % | **30.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFB 8469 BV EE | 344.50 € | **345.90 €** | 6.6 % | **7.0 %** | 346.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 327.50 € | **328.90 €** | 5.9 % | **6.3 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.00 € | **9.30 €** | 15.5 % | **34.3 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.00 € | **9.30 €** | 15.5 % | **34.3 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Kombinovaná taška Sunnylife pre NEO Motion Fly (073530) | 24.90 € | **26.00 €** | 15.2 % | **20.2 %** | 26.21 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 191.90 € | **193.00 €** | 32.8 % | **33.5 %** | 193.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.80 € | **8.80 €** | 36.4 % | **53.9 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| KMP H96BX (HP 305XL Black) | 17.90 € | **18.90 €** | 12.3 % | **18.6 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 163.50 € | **164.50 €** | 29.7 % | **30.5 %** | 164.59 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 328.50 € | **329.50 €** | 6.5 % | **6.8 %** | 329.60 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 187.50 € | **188.50 €** | 32.5 % | **33.2 %** | 188.69 € | cena podľa najlacnejšieho iného predajcu |
| SONY WFC510B černá | 36.50 € | **37.50 €** | 7.7 % | **10.7 %** | 37.69 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4C05 | 40.50 € | **41.50 €** | 11.8 % | **14.5 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight batériová kamera WiFi so solárnym panelom | 57.50 € | **58.50 €** | 32.4 % | **34.7 %** | 58.80 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 550.50 € | **551.50 €** | 10.6 % | **10.8 %** | 551.84 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 183.50 € | **184.50 €** | 11.3 % | **11.9 %** | 184.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny osciloskop FNIRSI DPOS350P 4 v 1 | 277.50 € | **278.50 €** | 14.9 % | **15.3 %** | 278.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 203.50 € | **204.50 €** | 13.8 % | **14.3 %** | 204.90 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro Puluz pre kameru Insta360 Ace Pro | 12.50 € | **13.50 €** | 17.1 % | **26.4 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 12.50 € | **13.50 €** | 35.5 % | **46.3 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIO 655 BG | 177.50 € | **178.50 €** | 8.3 % | **8.9 %** | 178.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 6.40 € | **7.30 €** | 19.3 % | **36.1 %** | 7.33 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti UNI-T UT333S | 23.00 € | **23.90 €** | 8.3 % | **12.6 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.10 € | **5.80 €** | 25.6 % | **42.9 %** | 5.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 4.10 € | **4.70 €** | 23.9 % | **42.0 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 12.90 € | **13.50 €** | 29.8 % | **35.8 %** | 13.84 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Topic Tab LenIdeaTab11 FIXTOT-1677 | 14.90 € | **15.50 €** | 12.8 % | **17.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar Professional 800x Pro SDXC 64 GB | 29.00 € | **29.50 €** | 8.2 % | **10.1 %** | 29.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 121.00 € | **121.50 €** | 14.6 % | **15.0 %** | 121.53 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 31.00 € | **31.50 €** | 5.8 % | **7.5 %** | 31.59 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim | 28.50 € | **29.00 €** | 6.7 % | **8.6 %** | 29.09 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-4 Slam Ball 23cm 4kg | 13.00 € | **13.50 €** | 42.8 % | **48.3 %** | 13.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 5.60 € | **6.10 €** | 5.6 % | **15.1 %** | 6.20 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 65.00 € | **65.50 €** | 28.5 % | **29.5 %** | 65.60 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.00 € | **198.50 €** | 8.7 % | **9.0 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience Graphite Black | 250.50 € | **251.00 €** | 16.7 % | **16.9 %** | 251.15 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 250.50 € | **251.00 €** | 16.7 % | **16.9 %** | 251.15 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 72.50 € | **73.00 €** | 26.2 % | **27.0 %** | 73.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.50 € | **11.00 €** | 26.3 % | **32.3 %** | 11.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor Premium, Find My kompatibilný | 12.50 € | **13.00 €** | 23.5 % | **28.4 %** | 13.20 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 13.50 € | **14.00 €** | 17.6 % | **22.0 %** | 14.26 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY MeloBuds N70 (titánovo-zlaté) | 47.00 € | **47.50 €** | 18.2 % | **19.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 10 Loop s LCD FIXZENL-10-BK | 19.00 € | **19.50 €** | 10.3 % | **13.2 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 37.00 € | **37.50 €** | 11.2 % | **12.7 %** | 37.82 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 19.50 € | **20.00 €** | 11.1 % | **13.9 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **12.50 €** | 18.5 % | **23.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 483.00 € | **483.50 €** | 6.8 % | **6.9 %** | 483.90 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 156.50 € | **156.90 €** | 6.1 % | **6.4 %** | 156.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 11.50 € | **11.90 €** | 6.4 % | **10.1 %** | 11.96 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák PEGASUS 120 Compact | 28.50 € | **28.90 €** | 5.5 % | **7.0 %** | 28.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.50 € | **16.90 €** | 21.5 % | **24.5 %** | 16.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 41.50 € | **41.90 €** | 9.5 % | **10.5 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| Vibrační plošina SKY SVP13 | 275.50 € | **275.90 €** | 7.7 % | **7.9 %** | 275.95 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 9.60 € | **9.80 €** | 33.4 % | **36.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 9.60 € | **9.80 €** | 33.4 % | **36.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **31.00 €** | 15.7 % | **16.0 %** | 31.26 € | cena podľa najlacnejšieho iného predajcu |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 53.90 € | **54.00 €** | 12.2 % | **12.5 %** | 54.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka priama s úchytom, IP20, biela | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.40 €** | 22.9 % | **32.4 %** | 1.44 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (437)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Studio 24 KS2401 | 2536.90 € | **2266.90 €** | 61.1 % | **44.0 %** | 2267.00 € | cena podľa najlacnejšieho iného predajcu |
| TCL 65Q6C QD-MiniLED 4K SMART Google TV | 698.90 € | **587.50 €** | 31.1 % | **10.2 %** | 587.61 € | cena podľa najlacnejšieho iného predajcu |
| Samsung OLED QE55S85H | 1096.90 € | **1046.90 €** | 10.0 % | **5.0 %** | 758.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GORENJE NRS9182VXB1 | 1084.90 € | **1035.50 €** | 10.0 % | **5.0 %** | 872.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PS5 PlayStation 5 Console 1TB + 2x DS5 | 794.90 € | **758.50 €** | 10.0 % | **5.0 %** | 699.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava stabilizátora iSteady MT3 Pro | 616.00 € | **584.90 €** | 39.7 % | **32.6 %** | 585.00 € | cena podľa najlacnejšieho iného predajcu |
| Samsung rám pro Frame TV 65" Zlatý | 148.90 € | **125.50 €** | 32.5 % | **11.7 %** | 125.83 € | cena podľa najlacnejšieho iného predajcu |
| Samsung The Frame Pro QE75LS03HW | 2598.90 € | **2578.50 €** | 6.5 % | **5.7 %** | 2578.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Cluster Solight 1V11-W,... | 41.90 € | **24.00 €** | 105.1 % | **17.5 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD BT černé | 167.00 € | **151.90 €** | 15.7 % | **5.2 %** | 137.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 167.00 € | **151.90 €** | 15.7 % | **5.2 %** | 137.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 226.50 € | **211.90 €** | 44.1 % | **34.8 %** | 211.91 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 226.50 € | **211.90 €** | 44.1 % | **34.8 %** | 211.91 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 269.50 € | **255.00 €** | 21.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Multifunkčný statív pre fotoaparát 5 v 1 | 298.90 € | **284.90 €** | 34.6 % | **28.3 %** | 284.99 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q10 PF čistiaci robot (čierny) | 213.90 € | **200.00 €** | 12.3 % | **5.0 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ležérny cvičebný bicykel MERACH MR-S08B1-EU (čierny) | 258.90 € | **247.00 €** | 42.9 % | **36.3 %** | 247.47 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare XREAL 1S pre rozšírenú realitu | 516.50 € | **505.50 €** | 12.2 % | **9.8 %** | 505.83 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 30.90 € | **20.00 €** | 116.4 % | **40.1 %** | 20.19 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 373.00 € | **362.50 €** | 8.1 % | **5.0 %** | 317.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| xTool SafetyPro™ AP2 Max V1.0 Predfilter | 138.90 € | **128.90 €** | 50.1 % | **39.3 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 116.90 € | **106.90 €** | 36.6 % | **24.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 69.50 € | **59.50 €** | 61.3 % | **38.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový mikrofón TELESIN + powerbanka pre telefón... | 59.50 € | **49.50 €** | 64.9 % | **37.2 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir G7 Pro DD2 | 99.50 € | **89.50 €** | 42.1 % | **27.8 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Samsung rám pro Frame TV 65" Týkový | 78.90 € | **69.50 €** | 26.6 % | **11.6 %** | 69.75 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 130.50 € | **121.50 €** | 29.8 % | **20.8 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 114.50 € | **105.90 €** | 13.6 % | **5.0 %** | 102.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zdroj záložní KEMOT PROsinus  500 URZ3404-LFP4 300W 12V | 91.00 € | **82.90 €** | 15.8 % | **5.5 %** | 76.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ručné LED svietidlo NEEWER RGB s trubicovým dizajnom | 96.00 € | **87.90 €** | 20.3 % | **10.1 %** | 87.99 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75TKBXC | 78.90 € | **70.90 €** | 23.2 % | **10.7 %** | 70.96 € | cena podľa najlacnejšieho iného predajcu |
| Teleobjektív Freewell 3x 17 mm | 197.90 € | **189.90 €** | 28.8 % | **23.6 %** | 189.99 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Hurricane H7 Plus | 163.90 € | **156.50 €** | 10.1 % | **5.1 %** | 129.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Philips Mikrosystem TAM4205M2 | 169.50 € | **162.50 €** | 15.6 % | **10.8 %** | 162.58 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF85WTBXC | 112.50 € | **106.50 €** | 17.0 % | **10.7 %** | 106.63 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection brown | 209.50 € | **203.50 €** | 17.1 % | **13.8 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell série V2 VND/CPL II 3-7 s... | 148.00 € | **142.00 €** | 28.8 % | **23.6 %** | 142.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 148.00 € | **142.00 €** | 30.3 % | **25.0 %** | 142.49 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 148.00 € | **142.00 €** | 34.0 % | **28.6 %** | 142.49 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón Freewell Genius Rig pre iPhone 17 ... | 148.00 € | **142.00 €** | 27.1 % | **21.9 %** | 142.49 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 43.50 € | **38.00 €** | 22.6 % | **7.1 %** | 38.07 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický otočný stojan Puluz 30 cm USB (čierny) | 38.00 € | **32.50 €** | 35.0 % | **15.5 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 12 GS1161 | 184.00 € | **178.50 €** | 36.1 % | **32.1 %** | 178.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 35.00 € | **29.50 €** | 34.4 % | **13.3 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 65.00 € | **59.50 €** | 40.6 % | **28.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 230.00 € | **225.00 €** | 20.2 % | **17.6 %** | 225.09 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 125.50 € | **120.50 €** | 19.2 % | **14.4 %** | 120.89 € | cena podľa najlacnejšieho iného predajcu |
| JBL WIND3SBLU | 90.50 € | **86.00 €** | 10.6 % | **5.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 103.90 € | **99.50 €** | 15.1 % | **10.2 %** | 99.64 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 93.90 € | **89.50 €** | 39.7 % | **33.2 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 79.90 € | **75.90 €** | 18.9 % | **12.9 %** | 75.99 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný veniec Solight 1V239, priemer 40 cm, 15... | 16.90 € | **13.00 €** | 80.3 % | **38.7 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 85.50 € | **81.90 €** | 10.1 % | **5.5 %** | 66.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 638.00 € | **634.50 €** | 8.5 % | **7.9 %** | 634.53 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire L20, 5000lm, USB-C | 56.00 € | **52.50 €** | 39.4 % | **30.7 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu |
| SigGen 3-v-1 FNIRSI DST-201 ručný digitálny multimet... | 51.50 € | **48.00 €** | 14.8 % | **7.0 %** | 48.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **16.90 €** | 46.6 % | **23.9 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 79.00 € | **75.90 €** | 23.3 % | **18.4 %** | 75.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 79.00 € | **75.90 €** | 23.3 % | **18.4 %** | 75.99 € | cena podľa najlacnejšieho iného predajcu |
| Tesla SlowCook S800 Deluxe | 67.50 € | **64.50 €** | 10.6 % | **5.6 %** | 58.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G1030600 | 32.00 € | **29.00 €** | 31.2 % | **18.9 %** | 29.03 € | cena podľa najlacnejšieho iného predajcu |
| Střídač hybridní DEYE SUN-10K-SG01HP3-EU-AM2, 10kW, ... | 1511.90 € | **1508.90 €** | 7.6 % | **7.4 %** | 1509.00 € | cena podľa najlacnejšieho iného predajcu |
| BALDRTHERM HCS596WB – termohygrometer s Wi-Fi a solá... | 18.50 € | **15.50 €** | 64.6 % | **37.9 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 14.00 € | **11.00 €** | 69.1 % | **32.9 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.00 € | **12.00 €** | 42.6 % | **14.1 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 49.90 € | **47.00 €** | 22.4 % | **15.3 %** | 47.49 € | cena podľa najlacnejšieho iného predajcu |
| CANON PIXMA MG2551S Grey | 56.00 € | **53.50 €** | 10.1 % | **5.2 %** | 36.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000G | 124.50 € | **122.00 €** | 39.5 % | **36.7 %** | 122.28 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.00 € | **14.50 €** | 27.7 % | **9.0 %** | 14.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 35.00 € | **32.50 €** | 26.3 % | **17.3 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 23.50 € | **21.00 €** | 29.1 % | **15.4 %** | 21.41 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sluch. Pods PRO 3, TWS06 | 13.50 € | **11.00 €** | 45.0 % | **18.1 %** | 11.43 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 35.50 € | **33.00 €** | 20.9 % | **12.4 %** | 33.43 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 35.50 € | **33.00 €** | 20.9 % | **12.4 %** | 33.43 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 31.50 € | **29.00 €** | 53.1 % | **40.9 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Flytec V050 12000mah návnada loď (moro) | 91.90 € | **89.50 €** | 40.6 % | **36.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné ručné LED trubicové svietidlo NEEWER | 61.90 € | **59.50 €** | 38.2 % | **32.9 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR černé | 197.00 € | **194.90 €** | 17.9 % | **16.7 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 197.00 € | **194.90 €** | 17.9 % | **16.7 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E3TB1-4GG | 40.90 € | **38.90 €** | 10.5 % | **5.1 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FENDA F&D A180X | 42.50 € | **40.50 €** | 11.1 % | **5.9 %** | 40.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Neewer Retro blesk | 81.50 € | **79.50 €** | 39.6 % | **36.1 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H640P | 41.50 € | **39.50 €** | 21.7 % | **15.8 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 139.00 € | **137.00 €** | 37.2 % | **35.3 %** | 137.45 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000 URZ3407-LFP4 1200W... | 185.90 € | **184.00 €** | 11.6 % | **10.5 %** | 184.30 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 29.90 € | **28.00 €** | 14.1 % | **6.8 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 49 mm s vekom pre Real Lock... | 29.90 € | **28.00 €** | 51.9 % | **42.3 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 55 mm s vekom pre Real Lock... | 29.90 € | **28.00 €** | 119.8 % | **105.8 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.90 € | **28.00 €** | 25.8 % | **17.8 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok s vekom Freewell 82 mm pre Real Lock... | 29.90 € | **28.00 €** | 128.9 % | **114.4 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia IP kamera s LED světlom | 32.90 € | **31.00 €** | 23.8 % | **16.6 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 15.50 € | **13.90 €** | 17.3 % | **5.2 %** | 13.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 178.50 € | **177.00 €** | 5.9 % | **5.0 %** | 124.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux EB61C4DB | 146.00 € | **144.50 €** | 6.8 % | **5.8 %** | 144.71 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN W AS | 81.00 € | **79.50 €** | 39.5 % | **36.9 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.50 € | **58.00 €** | 37.3 % | **33.8 %** | 58.43 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa Portable Monitor Z1FC 16,1" | 114.50 € | **113.00 €** | 10.0 % | **8.6 %** | 113.44 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2000300 CR Kuchyňská váha | 28.50 € | **27.00 €** | 14.5 % | **8.5 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy HIVE Beans Concert | 79.90 € | **78.50 €** | 7.2 % | **5.3 %** | 39.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 230.90 € | **229.50 €** | 8.7 % | **8.0 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 50.90 € | **49.50 €** | 37.5 % | **33.7 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 7,2 W, 1521lm, 27... | 6.10 € | **4.80 €** | 85.1 % | **45.6 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| ZigBee senzor úniku vody/záplavy SONOFF SNZB-05P (+b... | 11.90 € | **10.90 €** | 16.1 % | **6.4 %** | 10.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 48.50 € | **47.50 €** | 8.5 % | **6.2 %** | 47.59 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 225.90 € | **224.90 €** | 18.0 % | **17.5 %** | 224.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND1000 Freewell pre DJI Mini 5 Pro | 19.90 € | **18.90 €** | 22.7 % | **16.5 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND4 Freewell pre DJI Mini 5 Pro | 19.90 € | **18.90 €** | 27.4 % | **21.0 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND8 Freewell pre DJI Mini 5 Pro | 19.90 € | **18.90 €** | 28.5 % | **22.0 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Voľný filter ND32 pre DJI Mini 5 Pro | 19.90 € | **18.90 €** | 27.5 % | **21.1 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Voľný filter ND4/PL pre DJI Mini 5 Pro | 19.90 € | **18.90 €** | 21.4 % | **15.3 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| ND16 filter Freewell pre DJI Mini 5 Pro | 19.90 € | **18.90 €** | 26.7 % | **20.3 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 LED sviečok s časovačom Solight 1V284, 6,5 cm... | 9.80 € | **8.80 €** | 50.3 % | **35.0 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 22.50 € | **21.50 €** | 18.5 % | **13.2 %** | 21.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel s displejom, USB-C konektor - US... | 9.70 € | **8.70 €** | 53.7 % | **37.9 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny zdroj 300mA stab. s napájacou výhybkou | 6.70 € | **5.70 €** | 56.1 % | **32.8 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 260.90 € | **259.90 €** | 14.1 % | **13.7 %** | 260.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 401.90 € | **400.90 €** | 7.3 % | **7.0 %** | 401.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 403.90 € | **402.90 €** | 7.1 % | **6.8 %** | 403.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 232.90 € | **231.90 €** | 41977.7 % | **41797.0 %** | 232.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 670.90 € | **669.90 €** | 121110.5 % | **120929.8 %** | 670.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 368.90 € | **367.90 €** | 66548.6 % | **66367.9 %** | 368.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 36.00 € | **35.00 €** | 38.1 % | **34.3 %** | 35.13 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 21.00 € | **20.00 €** | 19.7 % | **14.0 %** | 20.15 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk GODOX MF12 | 114.50 € | **113.50 €** | 15.5 % | **14.5 %** | 113.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.50 € | **38.50 €** | 37.2 % | **33.7 %** | 38.81 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 201.50 € | **200.50 €** | 52.9 % | **52.1 %** | 200.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 15.50 € | **14.50 €** | 45.5 % | **36.1 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 13.50 € | **12.50 €** | 21.8 % | **12.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočný mikro LED svetelný záves Solight 1V10, 300 ... | 12.50 € | **11.50 €** | 44.2 % | **32.6 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný veniec Solight 1V297, 30 cm, 10... | 15.50 € | **14.50 €** | 47.0 % | **37.6 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.50 € | **12.50 €** | 45.4 % | **34.6 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.50 € | **13.50 €** | 45.2 % | **35.2 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.00 € | **142.00 €** | 8.4 % | **7.6 %** | 142.43 € | cena podľa najlacnejšieho iného predajcu |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 34.00 € | **33.00 €** | 15.8 % | **12.4 %** | 33.49 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V282, 64 cm, ... | 34.00 € | **33.00 €** | 45.0 % | **40.7 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah XTREME bezúdržbový akumu... | 117.90 € | **117.00 €** | 26526.0 % | **26322.8 %** | 117.49 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **19.00 €** | 10.3 % | **5.3 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.90 € | **19.00 €** | 37.7 % | **31.5 %** | 19.48 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE Apex | 494.90 € | **494.00 €** | 28.7 % | **28.5 %** | 494.09 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 277.90 € | **277.00 €** | 8.2 % | **7.8 %** | 277.33 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.90 € | **335.00 €** | 23.0 % | **22.7 %** | 335.39 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná krajinka s domčekom Solight 1V264, 18 c... | 6.60 € | **5.80 €** | 44.2 % | **26.8 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.40 € | **4.70 €** | 40.3 % | **22.1 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK TL-WA850RE Wireless N Extender | 20.50 € | **19.90 €** | 10.4 % | **7.1 %** | 8.12 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight náhradný napájací zdroj k LED panelom | 6.40 € | **5.80 €** | 43.7 % | **30.3 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetický USB-C kábel, USB 2.0 A konektor -... | 5.40 € | **4.80 €** | 80.7 % | **60.6 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 138.50 € | **137.90 €** | 27363.8 % | **27244.8 %** | 137.99 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 63.50 € | **63.00 €** | 5.9 % | **5.1 %** | 57.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 13.00 € | **12.50 €** | 18.0 % | **13.4 %** | 12.53 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.00 € | **138.50 €** | 8.4 % | **8.0 %** | 138.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.20 € | **5.70 €** | 43.6 % | **32.0 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 38.00 € | **37.50 €** | 45.5 % | **43.5 %** | 37.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **46.50 €** | 35.9 % | **34.4 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **212.00 €** | 9.9 % | **9.6 %** | 212.12 € | cena podľa najlacnejšieho iného predajcu |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 107.00 € | **106.50 €** | 14.8 % | **14.3 %** | 106.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.50 € | **23.00 €** | 36.9 % | **33.9 %** | 23.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **14.00 €** | 54.3 % | **49.0 %** | 14.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **18.50 €** | 37.2 % | **33.6 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.50 € | **23.00 €** | 9.6 % | **7.3 %** | 23.20 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 209.50 € | **209.00 €** | 17.1 % | **16.8 %** | 209.22 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 105.00 € | **104.50 €** | 12.2 % | **11.6 %** | 104.75 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 170.50 € | **170.00 €** | 18.5 % | **18.2 %** | 170.27 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Crystal UHD UE43U8072H | 275.00 € | **274.50 €** | 13.0 % | **12.8 %** | 274.78 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 46.00 € | **45.50 €** | 9.4 % | **8.2 %** | 45.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.00 € | **11.50 €** | 19.3 % | **14.3 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 52.50 € | **52.00 €** | 7.2 % | **6.2 %** | 52.29 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 229.50 € | **229.00 €** | 16.6 % | **16.4 %** | 229.30 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Coffee Drip 1394, černý | 35.00 € | **34.50 €** | 10.9 % | **9.4 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 344.00 € | **343.50 €** | 20.1 % | **19.9 %** | 343.89 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.50 € | **13.00 €** | 10.4 % | **6.3 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.50 € | **18.00 €** | 13.6 % | **10.5 %** | 18.39 € | cena podľa najlacnejšieho iného predajcu |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.50 € | **26.00 €** | 11.6 % | **9.5 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.50 € | **34.00 €** | 12.1 % | **10.4 %** | 34.39 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny digitálny multimeter UNI-T UT191E | 58.00 € | **57.50 €** | 8.9 % | **7.9 %** | 57.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT205E digitálny klešťový multimeter | 47.00 € | **46.50 €** | 8.5 % | **7.3 %** | 46.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 108.00 € | **107.50 €** | 12.3 % | **11.7 %** | 107.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 56.50 € | **56.00 €** | 9.0 % | **8.0 %** | 56.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 318.00 € | **317.50 €** | 18.4 % | **18.2 %** | 317.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 244.50 € | **244.00 €** | 14.5 % | **14.3 %** | 244.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 137.00 € | **136.50 €** | 14.3 % | **13.9 %** | 136.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny mikroohmmer Uni-T UT620C+ | 181.00 € | **180.50 €** | 7.0 % | **6.7 %** | 180.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.50 € | **471.00 €** | 9.0 % | **8.8 %** | 471.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 901.00 € | **900.50 €** | 14.5 % | **14.4 %** | 900.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 93.00 € | **92.50 €** | 7.8 % | **7.2 %** | 92.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 27.00 € | **26.50 €** | 10.4 % | **8.4 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600 | 72.50 € | **72.00 €** | 12.8 % | **12.0 %** | 72.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 86.00 € | **85.50 €** | 13.8 % | **13.1 %** | 85.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 61.50 € | **61.00 €** | 13.0 % | **12.1 %** | 61.39 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 53.50 € | **53.00 €** | 11.8 % | **10.8 %** | 53.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 34.50 € | **34.00 €** | 12.1 % | **10.4 %** | 34.39 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 81.00 € | **80.50 €** | 12.6 % | **11.9 %** | 80.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 169.00 € | **168.50 €** | 14.2 % | **13.8 %** | 168.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 192.50 € | **192.00 €** | 14.4 % | **14.1 %** | 192.39 € | cena podľa najlacnejšieho iného predajcu |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 15.00 € | **14.50 €** | 14.2 % | **10.4 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 325.50 € | **325.00 €** | 11.2 % | **11.0 %** | 325.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 259.00 € | **258.50 €** | 14.6 % | **14.4 %** | 258.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 292.00 € | **291.50 €** | 18.2 % | **18.0 %** | 291.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 109.50 € | **109.00 €** | 5.7 % | **5.2 %** | 109.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 152.00 € | **151.50 €** | 14.1 % | **13.8 %** | 151.89 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1291.50 € | **1291.00 €** | 7.4 % | **7.3 %** | 1291.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 142.50 € | **142.00 €** | 10.5 % | **10.1 %** | 142.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 58.00 € | **57.50 €** | 20.8 % | **19.7 %** | 57.89 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 26.50 € | **26.00 €** | 17.5 % | **15.3 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 110.50 € | **110.00 €** | 9.8 % | **9.3 %** | 110.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 277.00 € | **276.50 €** | 7.7 % | **7.5 %** | 276.89 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V100 | 23.50 € | **23.00 €** | 13.1 % | **10.7 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 57.00 € | **56.50 €** | 14.4 % | **13.4 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz KM2240 Connect C200 Tuya Wi-Fi | 166.50 € | **166.00 €** | 13.2 % | **12.8 %** | 166.39 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 275.50 € | **275.00 €** | 6.4 % | **6.2 %** | 275.39 € | cena podľa najlacnejšieho iného predajcu |
| HP ENVY 6520e AiO (714N9B) | 100.50 € | **100.00 €** | 7.6 % | **7.0 %** | 100.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 242.00 € | **241.50 €** | 9.8 % | **9.6 %** | 241.89 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 135.50 € | **135.00 €** | 9.0 % | **8.6 %** | 135.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 93.50 € | **93.00 €** | 11.8 % | **11.2 %** | 93.39 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.50 € | **23.00 €** | 10.8 % | **8.5 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 208.00 € | **207.50 €** | 9.7 % | **9.4 %** | 207.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.50 € | **195.00 €** | 10.7 % | **10.5 %** | 195.39 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.50 € | **266.00 €** | 7.5 % | **7.3 %** | 266.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 876.00 € | **875.50 €** | 9.7 % | **9.6 %** | 875.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 687.00 € | **686.50 €** | 5.9 % | **5.8 %** | 686.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 324.50 € | **324.00 €** | 9.0 % | **8.8 %** | 324.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 636.00 € | **635.50 €** | 6.0 % | **5.9 %** | 635.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 672.50 € | **672.00 €** | 8.7 % | **8.6 %** | 672.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 701.50 € | **701.00 €** | 9.6 % | **9.5 %** | 701.39 € | cena podľa najlacnejšieho iného predajcu |
| AMICA DI 6412 CB | 270.00 € | **269.50 €** | 5.9 % | **5.7 %** | 269.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.00 € | **88.50 €** | 13.5 % | **12.9 %** | 88.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 12.00 € | **11.50 €** | 36.4 % | **30.8 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.00 € | **22.50 €** | 43.2 % | **40.1 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 50.50 € | **50.00 €** | 21.7 % | **20.5 %** | 50.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.00 € | **18.50 €** | 36.1 % | **32.5 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 218.00 € | **217.50 €** | 13.9 % | **13.6 %** | 217.90 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 218.00 € | **217.50 €** | 36.9 % | **36.6 %** | 217.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.00 € | **10.50 €** | 37.8 % | **31.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitální hodiny s bluetooth synchronizáciou | 13.00 € | **12.50 €** | 33.8 % | **28.6 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| REDMI Headphone Neo Black | 47.50 € | **47.00 €** | 11.0 % | **9.8 %** | 47.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.00 € | **13.50 €** | 39.1 % | **34.2 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 16.50 € | **16.00 €** | 54.9 % | **50.2 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 200.50 € | **200.00 €** | 19.6 % | **19.3 %** | 200.46 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXPUM-1600-TR | 26.50 € | **26.00 €** | 88.3 % | **84.8 %** | 26.46 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 22.50 € | **22.00 €** | 20.7 % | **18.0 %** | 22.47 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 37.50 € | **37.00 €** | 8.7 % | **7.2 %** | 37.48 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 401.50 € | **401.00 €** | 38.6 % | **38.4 %** | 401.49 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 401.50 € | **401.00 €** | 32.4 % | **32.3 %** | 401.49 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter Habotest HT127B | 28.50 € | **28.00 €** | 13.5 % | **11.5 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 75.50 € | **75.00 €** | 38.7 % | **37.8 %** | 75.49 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.50 € | **87.00 €** | 22.4 % | **21.7 %** | 87.49 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 670.50 € | **670.00 €** | 38.3 % | **38.2 %** | 670.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 390.50 € | **390.00 €** | 38.8 % | **38.7 %** | 390.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q6 | 562.50 € | **562.00 €** | 38.4 % | **38.3 %** | 562.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2-N TTL pre fotoaparáty Nikon | 170.50 € | **170.00 €** | 39.9 % | **39.5 %** | 170.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 159.50 € | **159.00 €** | 39.8 % | **39.3 %** | 159.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 171.50 € | **171.00 €** | 39.8 % | **39.4 %** | 171.49 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 103.50 € | **103.00 €** | 39.3 % | **38.6 %** | 103.49 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell UV do Real Locking VND | 43.50 € | **43.00 €** | 36.0 % | **34.5 %** | 43.49 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 87.50 € | **87.00 €** | 30.5 % | **29.8 %** | 87.49 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 87.50 € | **87.00 €** | 25.9 % | **25.2 %** | 87.49 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 492.50 € | **492.00 €** | 40.9 % | **40.7 %** | 492.49 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 34.50 € | **34.00 €** | 39.6 % | **37.6 %** | 34.49 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 262.50 € | **262.00 €** | 39.8 % | **39.5 %** | 262.49 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 535.50 € | **535.00 €** | 41.9 % | **41.8 %** | 535.49 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600G | 103.50 € | **103.00 €** | 40.2 % | **39.5 %** | 103.49 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlo Superfire F5, 1100lm, USB | 16.50 € | **16.00 €** | 38.0 % | **33.8 %** | 16.49 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93501 Hrnec s pokličkou 20 cm | 35.50 € | **35.00 €** | 8.6 % | **7.1 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.50 € | **11.00 €** | 23.5 % | **18.1 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.50 € | **11.00 €** | 23.5 % | **18.1 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO skleněná poklice 18 | 15.50 € | **15.00 €** | 9.9 % | **6.3 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkový ovladačem Laskos, 48... | 19.50 € | **19.00 €** | 14.6 % | **11.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Floco, ... | 42.50 € | **42.00 €** | 34.5 % | **32.9 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 21.50 € | **21.00 €** | 32.2 % | **29.1 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 23.50 € | **23.00 €** | 19.0 % | **16.5 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 20.50 € | **20.00 €** | 39.7 % | **36.3 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-M, 50 m, viacfarebná... | 20.50 € | **20.00 €** | 43.2 % | **39.7 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.00 €** | 35.8 % | **30.8 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 17.50 € | **17.00 €** | 18.2 % | **14.8 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 25.50 € | **25.00 €** | 8.5 % | **6.4 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.50 € | **14.00 €** | 15.7 % | **11.7 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 275.50 € | **275.00 €** | 7.6 % | **7.4 %** | 275.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 14.50 € | **14.00 €** | 36.6 % | **31.9 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.50 € | **21.00 €** | 18.1 % | **15.4 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.50 € | **24.00 €** | 15.7 % | **13.3 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife pre DJI Osmo Action 5 PRO/4/3 Adven... | 19.50 € | **19.00 €** | 41.3 % | **37.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Concept OPK5160bc | 177.90 € | **177.50 €** | 7.7 % | **7.5 %** | 177.60 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.90 € | **114.50 €** | 18.0 % | **17.6 %** | 114.72 € | cena podľa najlacnejšieho iného predajcu |
| LCD displej KRUGER & MATZ KM2021 Android Auto Apple ... | 76.90 € | **76.50 €** | 9.0 % | **8.4 %** | 76.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.50 €** | 15.2 % | **14.6 %** | 79.79 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 136.90 € | **136.50 €** | 8.8 % | **8.5 %** | 136.79 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska IsEasy LI3-17 | 152.90 € | **152.50 €** | 30.9 % | **30.6 %** | 152.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.90 € | **152.50 €** | 19.6 % | **19.3 %** | 152.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.90 € | **127.50 €** | 17.4 % | **17.0 %** | 127.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.90 € | **70.50 €** | 14.4 % | **13.8 %** | 70.89 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 123.90 € | **123.50 €** | 6.4 % | **6.1 %** | 123.89 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 169.90 € | **169.50 €** | 39.7 % | **39.4 %** | 169.89 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 134.90 € | **134.50 €** | 39.8 % | **39.4 %** | 134.89 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S AI | 64.90 € | **64.50 €** | 39.9 % | **39.1 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S UV AI | 64.90 € | **64.50 €** | 39.9 % | **39.1 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 73.90 € | **73.50 €** | 41.1 % | **40.3 %** | 73.89 € | cena podľa najlacnejšieho iného predajcu |
| Dvojzónový indukčný sporák IsEasy LI2V-22 | 98.90 € | **98.50 €** | 38.4 % | **37.8 %** | 98.89 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar DJ-390 BT Bluetooth speaker | 112.90 € | **112.50 €** | 8.7 % | **8.3 %** | 112.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 97.90 € | **97.50 €** | 18.8 % | **18.3 %** | 97.90 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar JBL Bar 2.0 All-In-One (MK2) | 198.90 € | **198.50 €** | 8.4 % | **8.2 %** | 198.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 145.90 € | **145.50 €** | 8.4 % | **8.1 %** | 145.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V /  4,0Ah XTREME bezúdržbový aku... | 10.90 € | **10.50 €** | 12.9 % | **8.7 %** | 10.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.20 € | **6.80 €** | 40.7 % | **32.9 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.20 € | **5.80 €** | 35.9 % | **27.1 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.90 € | **13.50 €** | 13.7 % | **10.4 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 14.90 € | **14.50 €** | 36.9 % | **33.2 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.10 € | **6.70 €** | 36.5 % | **28.8 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 8.10 € | **7.70 €** | 38.1 % | **31.2 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.70 €** | 36.1 % | **28.5 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.10 € | **7.70 €** | 44.7 % | **37.6 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.90 € | **45.50 €** | 16.4 % | **15.4 %** | 45.79 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.90 € | **27.50 €** | 14.0 % | **12.4 %** | 27.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight detektor dymu s WIFI pripojením | 17.90 € | **17.50 €** | 36.6 % | **33.6 %** | 17.87 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 19.8MM 10 (Złoty) | 31.90 € | **31.50 €** | 40.5 % | **38.7 %** | 31.89 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA B15 (čierne) | 26.90 € | **26.50 €** | 42.6 % | **40.4 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER ST49 popruh na stabilizátor pre DJI RS2/RSC2/RS | 48.90 € | **48.50 €** | 40.8 % | **39.6 %** | 48.89 € | cena podľa najlacnejšieho iného predajcu |
| Kovový LED svietnik Solight 1V280, 40 cm, 5 LED, čierny | 23.90 € | **23.50 €** | 39.5 % | **37.2 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 21.90 € | **21.50 €** | 52.2 % | **49.4 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 27.90 € | **27.50 €** | 35.3 % | **33.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 25.90 € | **25.50 €** | 27.5 % | **25.5 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 20.90 € | **20.50 €** | 33.6 % | **31.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie procesora Darkflash E400 PLUS (biely) | 35.90 € | **35.50 €** | 40.0 % | **38.4 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (čierna) | 35.90 € | **35.50 €** | 40.9 % | **39.4 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 20 Loop s LCD FIXZENL-20-BK | 23.90 € | **23.50 €** | 10.8 % | **9.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s meteostanicou | 20.90 € | **20.50 €** | 14.9 % | **12.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 19.90 € | **19.50 €** | 38.6 % | **35.8 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 379.90 € | **379.50 €** | 5.1 % | **5.0 %** | 379.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 932.90 € | **932.50 €** | 5.1 % | **5.1 %** | 932.79 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 728.90 € | **728.50 €** | 9.2 % | **9.1 %** | 728.79 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10S | 342.90 € | **342.50 €** | 5.6 % | **5.5 %** | 342.79 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 332.90 € | **332.50 €** | 39.2 % | **39.1 %** | 332.89 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 631.90 € | **631.50 €** | 38.7 % | **38.6 %** | 631.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 258.90 € | **258.50 €** | 7.7 % | **7.5 %** | 258.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.60 € | **2.30 €** | 32.9 % | **17.6 %** | 2.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 18W... | 5.10 € | **4.80 €** | 44.0 % | **35.5 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 5,0 W, 1055lm, 27... | 5.10 € | **4.80 €** | 83.5 % | **72.7 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.10 € | **5.80 €** | 36.2 % | **29.5 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.10 € | **5.80 €** | 35.9 % | **29.2 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.80 €** | 38.1 % | **34.6 %** | 7.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.40 € | **6.20 €** | 9.3 % | **5.9 %** | 6.29 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná dekorácia – zimné kvety Solight... | 4.90 € | **4.70 €** | 42.3 % | **36.5 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight filter pre Dyson V11 | 5.90 € | **5.70 €** | 32.5 % | **28.0 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 5.00 € | **4.80 €** | 80.7 % | **73.4 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 358.00 € | **357.90 €** | 38.6 % | **38.6 %** | 357.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny zápisník Huion Kamvas Ink 10 EB1011 | 387.00 € | **386.90 €** | 36.6 % | **36.5 %** | 386.99 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 773.00 € | **772.90 €** | 41.7 % | **41.6 %** | 772.99 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 257.00 € | **256.90 €** | 40.9 % | **40.8 %** | 256.99 € | cena podľa najlacnejšieho iného predajcu |
| Reflexní míč, speedbag DBX BUSHIDO ARS-1171 B | 28.00 € | **27.90 €** | 5.5 % | **5.1 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Pytlové rukavice DBX BUSHIDO B-132 L | 28.00 € | **27.90 €** | 5.5 % | **5.1 %** | 23.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.80 € | **9.70 €** | 36.0 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 35.00 € | **34.90 €** | 11.9 % | **11.5 %** | 34.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.93 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 34.00 € | **33.90 €** | 9.2 % | **8.9 %** | 33.95 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Bluetooth KRUGER & MATZ KM0566  STREET X... | 40.00 € | **39.90 €** | 16.1 % | **15.8 %** | 39.96 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 19.00 € | **18.90 €** | 22.7 % | **22.0 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 49.00 € | **48.90 €** | 30.2 % | **29.9 %** | 48.99 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 42.00 € | **41.90 €** | 39.5 % | **39.2 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.00 € | **43.90 €** | 14.1 % | **13.8 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre BOBOVR M2 Pro + nabíjacia stanica | 35.00 € | **34.90 €** | 40.6 % | **40.2 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 56.00 € | **55.90 €** | 36.8 % | **36.5 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 51.00 € | **50.90 €** | 29.4 % | **29.2 %** | 51.00 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93509 Pánev 24 cm | 26.00 € | **25.90 €** | 9.5 % | **9.0 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 39.00 € | **38.90 €** | 9.4 % | **9.1 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.30 € | **8.20 €** | 36.3 % | **34.7 %** | 8.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.80 € | **9.70 €** | 35.5 % | **34.1 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 8.30 € | **8.20 €** | 53.0 % | **51.2 %** | 8.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 33.00 € | **32.90 €** | 26.7 % | **26.3 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.80 € | **9.70 €** | 38.6 % | **37.2 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V283, 53 cm, ... | 35.00 € | **34.90 €** | 41.0 % | **40.6 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 19.00 € | **18.90 €** | 18.5 % | **17.8 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 5W, 500lm, 4... | 9.80 € | **9.70 €** | 36.4 % | **35.0 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 46.00 € | **45.90 €** | 48.1 % | **47.7 %** | 46.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G20065 Parmino Struhadlo | 27.00 € | **26.90 €** | 8.4 % | **8.0 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1016501 | 30.00 € | **29.90 €** | 9.3 % | **9.0 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 28.00 € | **27.90 €** | 37.8 % | **37.3 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 19.00 € | **18.90 €** | 21.4 % | **20.8 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 39.00 € | **38.90 €** | 11.8 % | **11.5 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 19.00 € | **18.90 €** | 19.1 % | **18.5 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.00 € | **21.90 €** | 28.9 % | **28.3 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 24W... | 5.90 € | **5.80 €** | 45.8 % | **43.3 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight bambusový lampáš s LED žiarovkou, teplá biel... | 5.90 € | **5.80 €** | 21.4 % | **19.4 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.90 € | **5.80 €** | 162.1 % | **157.7 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight filter pre Dyson V11, V15 | 6.90 € | **6.80 €** | 29.0 % | **27.1 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 4.90 € | **4.80 €** | 35.0 % | **32.3 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.90 € | **7.80 €** | 35.2 % | **33.5 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 3.90 € | **3.80 €** | 45.4 % | **41.7 %** | 3.87 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.60 € | **3.50 €** | 59.9 % | **55.5 %** | 3.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 2.90 € | **2.80 €** | 81.4 % | **75.1 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 3.50 € | **3.40 €** | 65.4 % | **60.7 %** | 3.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 3.90 € | **3.80 €** | 53.2 % | **49.2 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar TRA-2989 Přenosné vícepásmové r | 15.00 € | **14.90 €** | 12.6 % | **11.9 %** | 14.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací kábel pre lineárne osvetlenie, dĺžk... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **14.90 €** | 26.6 % | **25.8 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.00 € | **8.90 €** | 44.9 % | **43.3 %** | 9.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.40 €** | 33.9 % | **32.4 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.00 € | **10.90 €** | 31.3 % | **30.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 12.00 € | **11.90 €** | 34.8 % | **33.6 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 11.00 € | **10.90 €** | 40.2 % | **38.9 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 13.00 € | **12.90 €** | 47.2 % | **46.1 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.80 € | **6.70 €** | 40.3 % | **38.3 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 14.00 € | **13.90 €** | 39.0 % | **38.0 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-WW, 5 m, ... | 5.80 € | **5.70 €** | 43.8 % | **41.3 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.80 € | **2.70 €** | 83.6 % | **77.0 %** | 2.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight ventilátor do kúpeľne | 10.00 € | **9.90 €** | 43.9 % | **42.5 %** | 10.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 11.00 € | **10.90 €** | 61.4 % | **60.0 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 11.00 € | **10.90 €** | 31.1 % | **29.9 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 11.00 € | **10.90 €** | 10.5 % | **9.5 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Chytrá meteorologická stanice GARNI 925T | 160.00 € | **159.90 €** | 13.4 % | **13.3 %** | 159.92 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 | 70.00 € | **69.90 €** | 13.6 % | **13.4 %** | 69.92 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 Wi-Fi | 70.00 € | **69.90 €** | 13.6 % | **13.4 %** | 69.92 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 109.00 € | **108.90 €** | 8.2 % | **8.1 %** | 108.97 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 90.00 € | **89.90 €** | 40.6 % | **40.5 %** | 89.98 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 500D. | 132.00 € | **131.90 €** | 38.7 % | **38.6 %** | 131.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B70... | 105.00 € | **104.90 €** | 40.2 % | **40.1 %** | 104.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 133.00 € | **132.90 €** | 16.4 % | **16.4 %** | 132.99 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 224.00 € | **223.90 €** | 17.0 % | **16.9 %** | 223.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 166.00 € | **165.90 €** | 39.9 % | **39.8 %** | 165.99 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka pamäťových kariet Lexar RW540 microSD Express | 72.00 € | **71.90 €** | 38.7 % | **38.5 %** | 71.99 € | cena podľa najlacnejšieho iného predajcu |
| Lovecký ďalekohľad Mileseey IONJET2 | 234.00 € | **233.90 €** | 36.8 % | **36.8 %** | 233.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell ND pre OSMO 360 – balenie po 3... | 190.00 € | **189.90 €** | 32.2 % | **32.1 %** | 189.99 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash UV360 (čierny) | 250.00 € | **249.90 €** | 39.7 % | **39.6 %** | 249.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 185.00 € | **184.90 €** | 39.2 % | **39.2 %** | 184.99 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 84.00 € | **83.90 €** | 28.1 % | **27.9 %** | 83.99 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 119.00 € | **118.90 €** | 32.2 % | **32.1 %** | 118.99 € | cena podľa najlacnejšieho iného predajcu |
| TESLA PrimeSound HQ-995X | 176.00 € | **175.90 €** | 6.1 % | **6.1 %** | 176.00 € | cena podľa najlacnejšieho iného predajcu |

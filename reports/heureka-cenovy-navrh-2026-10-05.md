# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-05

Vstup: `premiumstore-sk_2026-10-05_08-08.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7383**
- Návrh **zvýšiť** cenu: **128** produktov
- Návrh **znížiť** cenu: **159** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **7096** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **21**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **774**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (128)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D skener Creality RaptorX | 3568.90 € | **3791.90 €** | 5.0 % | **11.6 %** | 3791.99 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 13, strieborn... | 178.00 € | **274.00 €** | 14.9 % | **76.9 %** | 274.18 € | cena podľa najlacnejšieho iného predajcu |
| Candy CII647CCAR | 151.90 € | **198.90 €** | 10.1 % | **44.2 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot MOVA V70 Ultra Pure RVC (biely) | 1154.00 € | **1188.90 €** | 15.0 % | **18.5 %** | 1188.96 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 179.50 € | **214.00 €** | 15.1 % | **37.2 %** | 214.13 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTX1 Pro S, Twin | 289.90 € | **322.50 €** | 10.1 % | **22.5 %** | 322.62 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje RK14C2W4 | 270.90 € | **295.50 €** | 10.1 % | **20.0 %** | 295.59 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 273.90 € | **298.00 €** | 10.2 % | **19.8 %** | 298.09 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG2PS72A12 | 239.90 € | **261.50 €** | 10.1 % | **20.0 %** | 261.68 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 351.50 € | **373.00 €** | 10.1 % | **16.9 %** | 373.50 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 322.90 € | **340.50 €** | 10.1 % | **16.1 %** | 340.69 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 10, strieborná... | 178.00 € | **195.00 €** | 14.9 % | **25.9 %** | 195.29 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 10, zlatá) | 178.00 € | **195.00 €** | 14.9 % | **25.9 %** | 195.29 € | cena podľa najlacnejšieho iného predajcu |
| Midland D10 DMR digital radio | 174.90 € | **191.00 €** | 15.7 % | **26.3 %** | 191.17 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 329.00 € | **344.90 €** | 10.0 % | **15.3 %** | 344.99 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 304.50 € | **317.00 €** | 10.0 % | **14.6 %** | 317.49 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 307.00 € | **318.50 €** | 15.0 % | **19.3 %** | 318.89 € | cena podľa najlacnejšieho iného predajcu |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 68.50 € | **79.00 €** | 12.5 % | **29.8 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 37.90 € | **48.00 €** | 90.4 % | **141.2 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 37.90 € | **48.00 €** | 8.6 % | **37.6 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX FT-AD600PRO | 176.90 € | **186.90 €** | 40.5 % | **48.4 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Amica SIS 112 STW | 503.50 € | **510.90 €** | 10.1 % | **11.7 %** | 510.98 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDSN36540XP | 437.50 € | **444.90 €** | 10.1 % | **12.0 %** | 445.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 5760.50 € | **5767.00 €** | 8.0 % | **8.1 %** | 5767.14 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 20.00 € | **26.00 €** | 39.0 % | **80.7 %** | 26.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 17.50 € | **22.90 €** | 11.9 % | **46.4 %** | 22.95 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 374.90 € | **380.00 €** | 26.4 % | **28.1 %** | 380.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 374.90 € | **380.00 €** | 20.3 % | **22.0 %** | 380.50 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný stroj na brušné svaly MERACH MR-2314 | 64.90 € | **70.00 €** | 15.2 % | **24.3 %** | 70.04 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2416B1 Tréningový stroj na lyžovanie | 56.90 € | **61.00 €** | 15.4 % | **23.7 %** | 61.08 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 61.50 € | **65.50 €** | 25.4 % | **33.6 %** | 65.79 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 177.00 € | **180.50 €** | 19.9 % | **22.3 %** | 180.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 LED sviečok s časovačom Solight 1V284, 6,5 cm... | 8.80 € | **11.90 €** | 35.0 % | **82.5 %** | 11.96 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA38F2K7NXBB | 132.90 € | **135.90 €** | 10.3 % | **12.8 %** | 135.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 20.50 € | **23.50 €** | 20.1 % | **37.6 %** | 23.74 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 12.00 € | **15.00 €** | 14.1 % | **42.6 %** | 15.25 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok s časovačom Solight 1V285, 10/13/... | 13.00 € | **15.90 €** | 49.5 % | **82.8 %** | 15.96 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 58.90 € | **61.50 €** | 10.6 % | **15.5 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27361-70 | 30.00 € | **32.50 €** | 10.5 % | **19.7 %** | 32.60 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 10 (čierny) | 34.00 € | **36.50 €** | 14.5 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 11 (čierny) | 34.00 € | **36.50 €** | 14.5 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 12 (čierny) | 34.00 € | **36.50 €** | 14.5 % | **22.9 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2502.50 € | **2505.00 €** | 13.8 % | **13.9 %** | 2505.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k meteostanici TE90 | 11.50 € | **14.00 €** | 43.4 % | **74.6 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| JBL Endurance Peak III white | 86.50 € | **88.90 €** | 11.6 % | **14.7 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny zdroj 300mA stab. s napájacou výhybkou | 5.70 € | **7.70 €** | 32.8 % | **79.4 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovná nabíjačka 3v1, MagSafe kompatibilná | 32.00 € | **34.00 €** | 18.0 % | **25.4 %** | 34.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 32.50 € | **34.50 €** | 19.0 % | **26.3 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 41.50 € | **43.50 €** | 37.4 % | **44.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhové svetlo GODOX LR30Bi | 25.00 € | **27.00 €** | 35.7 % | **46.5 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1439.00 € | **1440.90 €** | 7.1 % | **7.2 %** | 1440.98 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 69.90 € | **71.50 €** | 3.0 % | **5.4 %** | 69.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chrániče holení DBX BUSHIDO SP-10v6 M | 61.00 € | **62.50 €** | 3.1 % | **5.6 %** | 39.16 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chránič hrudníku DBX BUSHIDO ARC-1500 | 61.00 € | **62.50 €** | 3.1 % | **5.6 %** | 54.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 11.00 € | **12.50 €** | 20.9 % | **37.3 %** | 12.55 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG2701 | 65.50 € | **67.00 €** | 10.3 % | **12.9 %** | 67.10 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1020300 Pastella Fritéza | 46.50 € | **48.00 €** | 10.1 % | **13.7 %** | 48.20 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 30.00 € | **31.50 €** | 45.8 % | **53.1 %** | 31.77 € | cena podľa najlacnejšieho iného predajcu |
| Sada dětského nářadí KIDS 12 SIXTOL | 21.50 € | **23.00 €** | 5.0 % | **12.3 %** | 23.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 15.00 € | **16.50 €** | 23.7 % | **36.1 %** | 16.87 € | cena podľa najlacnejšieho iného predajcu |
| Mlýnek na kávu Ruhhy 26219 | 12.50 € | **14.00 €** | 17.9 % | **32.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 136.50 € | **137.90 €** | 15.1 % | **16.3 %** | 137.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 5m | 7.70 € | **8.90 €** | 39.4 % | **61.2 %** | 8.99 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG8401 | 84.90 € | **86.00 €** | 10.4 % | **11.9 %** | 86.10 € | cena podľa najlacnejšieho iného predajcu |
| MMA rukavice DBX BUSHIDO ARM-2011d L | 44.50 € | **45.50 €** | 3.5 % | **5.9 %** | 32.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chrániče kolen DBX BUSHIDO DBX-KG L | 57.00 € | **58.00 €** | 3.2 % | **5.0 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chrániče loktů DBX BUSHIDO DBX-EG L | 57.00 € | **58.00 €** | 3.2 % | **5.0 %** | 47.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chrániče kolen DBX BUSHIDO DBX-0217A | 18.50 € | **19.50 €** | 2.1 % | **7.6 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 19.50 € | **20.50 €** | 32.0 % | **38.8 %** | 20.54 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara fialová | 35.90 € | **36.90 €** | 10.4 % | **13.5 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara modrá | 35.90 € | **36.90 €** | 10.4 % | **13.5 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájecí kabel pro lineární osvětlení, délka... | 4.70 € | **5.70 €** | 47.0 % | **78.2 %** | 5.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 3.80 € | **4.80 €** | 79.6 % | **126.9 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.00 € | **11.00 €** | 30.1 % | **43.1 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom bi... | 10.50 € | **11.50 €** | 24.3 % | **36.1 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 15.50 € | **16.50 €** | 34.5 % | **43.2 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 12.50 € | **13.50 €** | 34.6 % | **45.4 %** | 13.74 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1018.00 € | **1019.00 €** | 10.5 % | **10.6 %** | 1019.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 41.50 € | **42.50 €** | 40.4 % | **43.8 %** | 42.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s rádiom a budíkom | 20.50 € | **21.50 €** | 40.6 % | **47.5 %** | 21.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **15.50 €** | 18.4 % | **26.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| MAXXO VM 3550 | 24.50 € | **25.50 €** | 10.7 % | **15.2 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXIR2403E | 22.00 € | **23.00 €** | 10.3 % | **15.4 %** | 23.40 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LR15Bi Okrúhle svetlo | 18.50 € | **19.50 €** | 38.1 % | **45.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD-L pre AD200 | 30.00 € | **31.00 €** | 38.6 % | **43.2 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá s kostným vedením Haylou PurFree BC01 (čie... | 39.00 € | **40.00 €** | 11.7 % | **14.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Boxerské rukavice DBX BUSHIDO B-2v17 10 oz | 36.00 € | **36.90 €** | 2.6 % | **5.2 %** | 23.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.70 € | **5.40 €** | 22.1 % | **40.3 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetický USB-C kábel, USB 2.0 A konektor -... | 4.80 € | **5.40 €** | 60.6 % | **80.7 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO3725EA | 75.90 € | **76.50 €** | 10.1 % | **11.0 %** | 76.70 € | cena podľa najlacnejšieho iného predajcu |
| Chrániče loktů DBX BUSHIDO DBX-EG-11 L | 15.00 € | **15.50 €** | 3.0 % | **6.4 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chrániče loktů DBX BUSHIDO DBX-EG-11 M | 15.00 € | **15.50 €** | 3.0 % | **6.4 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CrockPot SCV400RD | 52.00 € | **52.50 €** | 10.3 % | **11.4 %** | 52.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight adaptér 3+1,48 W, QC3.0+PD, 3x USB-A, 1x USB-C | 14.00 € | **14.50 €** | 31.9 % | **36.6 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 5.70 € | **6.20 €** | 32.0 % | **43.6 %** | 6.26 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.00 € | **78.50 €** | 8.7 % | **9.4 %** | 78.56 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 14.00 € | **14.50 €** | 39.0 % | **43.9 %** | 14.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.00 € | **12.50 €** | 37.0 % | **42.7 %** | 12.64 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.50 € | **23.00 €** | 40.1 % | **43.2 %** | 23.16 € | cena podľa najlacnejšieho iného predajcu |
| Tesla AeroStar T700 | 78.50 € | **79.00 €** | 6.2 % | **6.9 %** | 79.19 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 156.00 € | **156.50 €** | 7.1 % | **7.5 %** | 156.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.00 € | **16.50 €** | 38.8 % | **43.2 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.00 € | **16.50 €** | 38.8 % | **43.2 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Svetelný merač UNI-T UT383S | 25.50 € | **26.00 €** | 15.4 % | **17.6 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9279W | 50.50 € | **51.00 €** | 10.2 % | **11.3 %** | 51.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 50W, 4600lm, 5000K, IP65 | 20.00 € | **20.50 €** | 39.5 % | **42.9 %** | 20.80 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-W, 10 m, s... | 12.00 € | **12.50 €** | 45.0 % | **51.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.00 € | **14.50 €** | 13.0 % | **17.1 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 96.50 € | **97.00 €** | 17.1 % | **17.7 %** | 97.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 7.70 € | **8.10 €** | 37.6 % | **44.7 %** | 8.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.50 € | **20.90 €** | 35.1 % | **37.7 %** | 20.96 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 31.50 € | **31.90 €** | 16.9 % | **18.4 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.70 € | **9.00 €** | 30.3 % | **34.8 %** | 9.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 5.80 € | **6.10 €** | 29.5 % | **36.2 %** | 6.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 5.80 € | **6.10 €** | 29.2 % | **35.9 %** | 6.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 5.80 € | **6.00 €** | 27.1 % | **31.5 %** | 6.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.70 € | **8.80 €** | 52.4 % | **54.2 %** | 8.81 € | cena podľa najlacnejšieho iného predajcu |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 16.90 € | **17.00 €** | 65.7 % | **66.7 %** | 17.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 24.90 € | **25.00 €** | 36.8 % | **37.3 %** | 25.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 4.80 € | **4.90 €** | 32.3 % | **35.0 %** | 4.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.80 € | **7.90 €** | 33.5 % | **35.2 %** | 7.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 3.80 € | **3.90 €** | 5.8 % | **8.6 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight závesné príslušenstvo pre lineárne osvetleni... | 3.80 € | **3.90 €** | 87.2 % | **92.2 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.80 € | **9.90 €** | 36.0 % | **37.4 %** | 9.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.80 € | **9.90 €** | 36.0 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.80 € | **9.90 €** | 36.0 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.70 € | **4.80 €** | 37.9 % | **40.9 %** | 4.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.70 € | **2.80 €** | 77.0 % | **83.6 %** | 2.89 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (159)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Samsung WW90DG6U85LHU4 | 583.50 € | **556.90 €** | 10.1 % | **5.0 %** | 439.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool FFWDD 1076258 BV EU | 525.90 € | **501.90 €** | 10.0 % | **5.0 %** | 485.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Čistiaca sada MOVA – príslušenstvo | 69.50 € | **47.50 €** | 54.2 % | **5.4 %** | 46.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SAMSUNG RB34C600EWW/EF | 465.90 € | **444.50 €** | 10.1 % | **5.0 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-Link Tapo RV30 Max Plus | 454.50 € | **433.90 €** | 10.1 % | **5.1 %** | 255.61 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Salente Rtx-L7 | 297.90 € | **284.00 €** | 10.1 % | **5.0 %** | 267.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MSI Cyborg 9S7-15QL42-080 | 1767.50 € | **1755.00 €** | 5.8 % | **5.0 %** | 1494.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool AMW 6440 FB | 398.50 € | **387.50 €** | 10.1 % | **7.1 %** | 387.60 € | cena podľa najlacnejšieho iného predajcu |
| BEKO VRR84314VB | 239.50 € | **228.90 €** | 10.0 % | **5.2 %** | 179.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 218.90 € | **208.90 €** | 46.6 % | **39.9 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK C08 – Schody | 69.50 € | **59.50 €** | 54.2 % | **32.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| JBL PartyBox 520 | 722.50 € | **712.90 €** | 6.4 % | **5.0 %** | 563.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rowenta RO4931EA | 133.50 € | **127.50 €** | 10.2 % | **5.2 %** | 126.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER HL-1110E | 92.90 € | **87.50 €** | 11.6 % | **5.1 %** | 82.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Salente Rtx-G4 | 116.90 € | **111.90 €** | 10.0 % | **5.3 %** | 99.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Rotaro PowerVac 2v1 20V | 117.50 € | **112.50 €** | 10.0 % | **5.3 %** | 101.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal CY85X8F2 | 224.90 € | **220.00 €** | 10.2 % | **7.8 %** | 220.40 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH20C0WO | 229.50 € | **224.90 €** | 10.2 % | **8.0 %** | 225.00 € | cena podľa najlacnejšieho iného predajcu |
| G3ferrari G1018100 Horkovzdušná fritéza | 175.50 € | **171.00 €** | 10.3 % | **7.4 %** | 171.04 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka MINI 1133 90000, černý | 82.50 € | **78.50 €** | 10.6 % | **5.2 %** | 65.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Stellar 1221 90000, černý/modrý | 78.50 € | **74.50 €** | 10.7 % | **5.1 %** | 69.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 320.90 € | **316.90 €** | 43.7 % | **41.9 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT86325VI | 201.90 € | **198.00 €** | 10.1 % | **8.0 %** | 198.22 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 166.90 € | **163.00 €** | 10.0 % | **7.5 %** | 163.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight akumulátorové záhradné nožnice | 65.90 € | **62.00 €** | 20.2 % | **13.1 %** | 62.39 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1-Ss | 129.50 € | **126.00 €** | 10.2 % | **7.2 %** | 126.07 € | cena podľa najlacnejšieho iného predajcu |
| ETA Ambito 0516 90000 bílý/tyrkysový | 62.50 € | **59.50 €** | 10.7 % | **5.3 %** | 58.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal EY8328E0 | 122.50 € | **119.50 €** | 10.1 % | **7.4 %** | 119.90 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 125.90 € | **123.00 €** | 10.2 % | **7.7 %** | 123.25 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5474B | 72.50 € | **69.90 €** | 10.3 % | **6.3 %** | 70.00 € | cena podľa najlacnejšieho iného predajcu |
| Žehlička Nedis IRON2000 napařovací | 36.90 € | **34.50 €** | 13.9 % | **6.5 %** | 3.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Midland XT10 | 52.90 € | **50.50 €** | 10.3 % | **5.3 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 16.90 € | **14.50 €** | 38.0 % | **18.4 %** | 14.87 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV2863E1 | 40.90 € | **38.90 €** | 10.5 % | **5.1 %** | 31.07 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete ART 4631 | 136.50 € | **134.50 €** | 10.1 % | **8.4 %** | 134.67 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 138.50 € | **136.50 €** | 10.4 % | **8.8 %** | 136.80 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5388B | 132.90 € | **131.00 €** | 10.0 % | **8.4 %** | 131.30 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo P300 | 41.50 € | **39.90 €** | 10.2 % | **5.9 %** | 32.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Nubela 2569 90100, bílý | 28.50 € | **26.90 €** | 56.8 % | **48.0 %** | 26.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 16.50 € | **15.00 €** | 33.7 % | **21.6 %** | 15.03 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3237 | 24.50 € | **23.00 €** | 17.2 % | **10.0 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion, 1,5... | 14.00 € | **12.90 €** | 15.8 % | **6.7 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 245.90 € | **244.90 €** | 7.6 % | **7.1 %** | 245.00 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 17.00 € | **16.00 €** | 89.3 % | **78.2 %** | 16.15 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 108.50 € | **107.50 €** | 10.2 % | **9.2 %** | 107.80 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 420.50 € | **419.90 €** | 12.2 % | **12.1 %** | 420.00 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG9201 | 115.50 € | **115.00 €** | 10.2 % | **9.7 %** | 115.30 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 342.50 € | **342.00 €** | 19.5 % | **19.4 %** | 342.39 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 44.00 € | **43.50 €** | 13.9 % | **12.6 %** | 43.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.00 € | **36.50 €** | 7.6 % | **6.2 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 46.50 € | **46.00 €** | 6.2 % | **5.0 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.50 € | **30.00 €** | 9.6 % | **7.8 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Linomatic 500 Easy 85286 | 97.00 € | **96.50 €** | 6.9 % | **6.3 %** | 96.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 113.00 € | **112.50 €** | 7.0 % | **6.6 %** | 112.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 97.50 € | **97.00 €** | 5.6 % | **5.1 %** | 97.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 61.50 € | **61.00 €** | 9.1 % | **8.2 %** | 61.39 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI FNB48P BT Tester USB portov s Bluetooth | 35.00 € | **34.50 €** | 8.2 % | **6.6 %** | 34.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 103.00 € | **102.50 €** | 7.1 % | **6.5 %** | 102.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 44.50 € | **44.00 €** | 6.8 % | **5.6 %** | 44.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 316.50 € | **316.00 €** | 17.9 % | **17.7 %** | 316.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 129.50 € | **129.00 €** | 8.1 % | **7.7 %** | 129.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 470.00 € | **469.50 €** | 8.6 % | **8.5 %** | 469.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 931.00 € | **930.50 €** | 18.3 % | **18.3 %** | 930.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT665P-5m endoskop | 43.00 € | **42.50 €** | 26.8 % | **25.3 %** | 42.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 161.00 € | **160.50 €** | 8.8 % | **8.4 %** | 160.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 120.50 € | **120.00 €** | 12.4 % | **12.0 %** | 120.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 144.50 € | **144.00 €** | 8.5 % | **8.1 %** | 144.39 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta Extreme Dry Compact DH5250F0 | 230.50 € | **230.00 €** | 5.4 % | **5.2 %** | 230.39 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 80.00 € | **79.50 €** | 8.7 % | **8.0 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9286IB | 245.00 € | **244.50 €** | 5.9 % | **5.7 %** | 244.89 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA CD-S303 BLACK | 376.00 € | **375.50 €** | 5.6 % | **5.5 %** | 375.89 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER DCP-T535DW | 198.50 € | **198.00 €** | 6.4 % | **6.1 %** | 198.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 135.50 € | **135.00 €** | 18.4 % | **18.0 %** | 135.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 178.00 € | **177.50 €** | 15.0 % | **14.7 %** | 177.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 78.50 € | **78.00 €** | 34.9 % | **34.0 %** | 78.39 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.00 € | **34.50 €** | 12.9 % | **11.3 %** | 34.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 658.00 € | **657.50 €** | 5.9 % | **5.8 %** | 657.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 516.50 € | **516.00 €** | 6.6 % | **6.5 %** | 516.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 73.50 € | **73.00 €** | 9.9 % | **9.1 %** | 73.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 316.00 € | **315.50 €** | 7.5 % | **7.3 %** | 315.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 628.50 € | **628.00 €** | 9.4 % | **9.3 %** | 628.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 664.00 € | **663.50 €** | 12.1 % | **12.0 %** | 663.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 693.00 € | **692.50 €** | 13.0 % | **13.0 %** | 692.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 102.00 € | **101.50 €** | 8.0 % | **7.5 %** | 101.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.00 € | **101.50 €** | 14.9 % | **14.3 %** | 101.89 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 40.50 € | **40.00 €** | 8.7 % | **7.4 %** | 40.49 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 121.50 € | **121.00 €** | 5.7 % | **5.3 %** | 121.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 49.50 € | **49.00 €** | 25.6 % | **24.3 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.50 € | **15.00 €** | 34.1 % | **29.7 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Floco, ... | 41.50 € | **41.00 €** | 31.3 % | **29.8 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 16.50 € | **16.00 €** | 42.9 % | **38.5 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 16.50 € | **16.00 €** | 32.8 % | **28.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.50 € | **13.00 €** | 33.4 % | **28.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 11.50 € | **11.00 €** | 112.0 % | **102.8 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 31.50 € | **31.00 €** | 21.0 % | **19.1 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.50 € | **10.00 €** | 26.3 % | **20.3 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V283, 53 cm, ... | 33.50 € | **33.00 €** | 35.0 % | **32.9 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 11.50 € | **11.00 €** | 30.2 % | **24.6 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 17.50 € | **17.00 €** | 26.8 % | **23.2 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 44.50 € | **44.00 €** | 43.2 % | **41.6 %** | 44.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW606810 | 158.50 € | **158.00 €** | 10.3 % | **9.9 %** | 158.50 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 24.50 € | **24.00 €** | 12.7 % | **10.4 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.50 € | **127.00 €** | 11.2 % | **10.7 %** | 127.50 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar DJ-390 BT Bluetooth speaker | 108.50 € | **108.00 €** | 5.8 % | **5.3 %** | 108.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 25.50 € | **25.00 €** | 8.1 % | **6.0 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 144.50 € | **144.00 €** | 8.7 % | **8.3 %** | 144.50 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 103.90 € | **103.50 €** | 10.1 % | **9.7 %** | 103.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 145.90 € | **145.50 €** | 51.8 % | **51.4 %** | 145.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **78.50 €** | 25.6 % | **25.0 %** | 78.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 78.90 € | **78.50 €** | 8.6 % | **8.1 %** | 78.90 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 11.90 € | **11.50 €** | 23.2 % | **19.1 %** | 11.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.90 € | **14.50 €** | 25.8 % | **22.4 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.90 € | **11.50 €** | 38.8 % | **34.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 15.90 € | **15.50 €** | 30.8 % | **27.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.90 € | **14.50 €** | 34.4 % | **30.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.90 € | **10.50 €** | 30.1 % | **25.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.90 € | **11.50 €** | 33.6 % | **29.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajší LED vianočný stromček Solight 1V290, 68 cm,... | 13.90 € | **13.50 €** | 56.1 % | **51.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 12.90 € | **12.50 €** | 26.1 % | **22.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor na bicykel, Find My kompatibilný | 13.90 € | **13.50 €** | 31.3 % | **27.5 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9270p bezdrátová klávesnice černá | 36.90 € | **36.50 €** | 8.9 % | **7.8 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 41.90 € | **41.50 €** | 17.9 % | **16.8 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 39.90 € | **39.50 €** | 13.4 % | **12.2 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 21.90 € | **21.50 €** | 34.7 % | **32.2 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 21.90 € | **21.50 €** | 10.9 % | **8.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 18.90 € | **18.50 €** | 28.8 % | **26.1 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Coppertinto KI280G10 | 29.90 € | **29.50 €** | 7.6 % | **6.1 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia IP kamera s LED světlom | 29.90 € | **29.50 €** | 12.5 % | **11.0 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.60 € | **9.40 €** | 35.3 % | **32.4 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 269.00 € | **268.90 €** | 6.0 % | **5.9 %** | 268.99 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93501 Hrnec s pokličkou 20 cm | 34.00 € | **33.90 €** | 5.4 % | **5.1 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2012400 | 37.00 € | **36.90 €** | 5.8 % | **5.6 %** | 37.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.80 € | **8.70 €** | 53.9 % | **52.1 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.80 € | **9.70 €** | 24.9 % | **23.6 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.30 € | **9.20 €** | 31.5 % | **30.1 %** | 9.30 € | cena podľa najlacnejšieho iného predajcu |
| Kovový LED svietnik Solight 1V280, 40 cm, 5 LED, čierny | 22.00 € | **21.90 €** | 28.4 % | **27.8 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 5W, 500lm, 4... | 9.30 € | **9.20 €** | 29.5 % | **28.1 %** | 9.30 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2000300 CR Kuchyňská váha | 26.00 € | **25.90 €** | 5.8 % | **5.4 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G20065 Parmino Struhadlo | 26.00 € | **25.90 €** | 5.7 % | **5.3 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1020500 | 37.00 € | **36.90 €** | 5.9 % | **5.6 %** | 37.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 24.00 € | **23.90 €** | 18.1 % | **17.6 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 19.00 € | **18.90 €** | 21.4 % | **20.8 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 33.00 € | **32.90 €** | 11.5 % | **11.2 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 9.80 € | **9.70 €** | 43.8 % | **42.3 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 9.80 € | **9.70 €** | 7.2 % | **6.1 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.80 € | **9.70 €** | 16.8 % | **15.6 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 21.00 € | **20.90 €** | 31.6 % | **31.0 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.00 € | **23.90 €** | 14.8 % | **14.4 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.70 € | **6.60 €** | 38.3 % | **36.2 %** | 6.70 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.40 € | **5.30 €** | 139.9 % | **135.5 %** | 5.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.00 € | **11.90 €** | 40.0 % | **38.8 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.60 € | **9.50 €** | 32.7 % | **31.4 %** | 9.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 14.00 € | **13.90 €** | 28.6 % | **27.7 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.50 € | **8.40 €** | 39.6 % | **38.0 %** | 8.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight ventilátor do kúpeľne | 9.50 € | **9.40 €** | 36.7 % | **35.3 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 16A, USB A+C rychlonabíjačka ... | 13.00 € | **12.90 €** | 26.1 % | **25.2 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 12 ks | 173.00 € | **172.90 €** | 6.4 % | **6.4 %** | 173.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015502 Mikrovlnná trouba | 122.00 € | **121.90 €** | 15.2 % | **15.1 %** | 122.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 1125.00 € | **1124.90 €** | 27.5 % | **27.5 %** | 1125.00 € | cena podľa najlacnejšieho iného predajcu |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-18

Vstup: `premiumstore-sk_2026-09-18_15-05.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6764**
- Návrh **zvýšiť** cenu: **29** produktov
- Návrh **znížiť** cenu: **32** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6703** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **2**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **377**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (29)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Chladič procesora Darkflash CB360 (biely) | 59.50 € | **69.50 €** | 38.3 % | **61.6 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| KOMA RK01 - Univerzální rotační kartáč | 18.90 € | **24.00 €** | 17.0 % | **48.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 9.60 € | **13.00 €** | 33.4 % | **80.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 9.60 € | **13.00 €** | 33.4 % | **80.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 120.50 € | **123.00 €** | 5.4 % | **7.6 %** | 123.50 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar Professional 800x Pro SDXC 256GD | 81.00 € | **83.00 €** | 14.7 % | **17.6 %** | 83.27 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 125.00 € | **127.00 €** | 9.5 % | **11.3 %** | 127.43 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 231.90 € | **232.90 €** | 41797.0 % | **41977.7 %** | 233.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 669.90 € | **670.90 €** | 120929.8 % | **121110.5 %** | 671.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 367.90 € | **368.90 €** | 66367.9 % | **66548.6 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna doska Moza Racing RS089 | 33.00 € | **34.00 €** | 11.7 % | **15.1 %** | 34.27 € | cena podľa najlacnejšieho iného predajcu |
| Pendrive Lexar JumpDrive M400 USB 3.0 64GB | 11.00 € | **11.90 €** | 13.3 % | **22.6 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka 3-pack, klasický tvar, 10W, E27... | 3.30 € | **4.00 €** | 51.6 % | **83.7 %** | 4.10 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 12.90 € | **13.50 €** | 5.5 % | **10.4 %** | 13.69 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.50 € | **12.00 €** | 5.8 % | **10.4 %** | 12.12 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.00 € | **18.50 €** | 10.5 % | **13.6 %** | 18.69 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 11.50 € | **12.00 €** | 7.3 % | **12.0 %** | 12.19 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 26.50 € | **27.00 €** | 12.6 % | **14.7 %** | 27.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.00 € | **19.50 €** | 15.5 % | **18.6 %** | 19.70 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **52.50 €** | 6.1 % | **7.1 %** | 52.79 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI7160BL | 78.50 € | **79.00 €** | 10.3 % | **11.0 %** | 79.38 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 56.50 € | **57.00 €** | 13.4 % | **14.4 %** | 57.39 € | cena podľa najlacnejšieho iného predajcu |
| Shifter Moza Racing HGP RS039 | 143.50 € | **143.90 €** | 6.9 % | **7.2 %** | 143.91 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.50 € | **13.90 €** | 10.4 % | **13.7 %** | 13.99 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 33.90 € | **34.00 €** | 8.1 % | **8.4 %** | 34.05 € | cena podľa najlacnejšieho iného predajcu |
| EMS posilovač svalů HMS ABS Master PRO Multiset | 46.90 € | **47.00 €** | 6.9 % | **7.1 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vianočná retiazka červená-biela, 20x LED... | 5.80 € | **5.90 €** | 157.7 % | **162.1 %** | 5.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.70 € | **4.80 €** | 29.1 % | **31.8 %** | 4.89 € | cena podľa najlacnejšieho iného predajcu |
| Tester USB 2w1 FNIRSI FNAC-28 USB-C USB-A | 15.90 € | **16.00 €** | 8.6 % | **9.3 %** | 16.39 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (32)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Samsung The Frame Pro QE75LS03HW | 2628.90 € | **2598.90 €** | 7.7 % | **6.5 %** | 2599.00 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife FP-B957-C pre DJI Flip (oranžové) | 28.00 € | **11.90 €** | 213.1 % | **33.1 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK WiFi AX3000 (Deco X55 2-pack) | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 133.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring Colmi R02 20.3MM 11 (Black) | 34.50 € | **26.50 €** | 78.7 % | **37.2 %** | 26.57 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY-T Android TV 4K UHD Android TV multimed... | 93.00 € | **86.00 €** | 30.6 % | **20.8 %** | 86.41 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 127.00 € | **121.50 €** | 24.9 % | **19.5 %** | 121.70 € | cena podľa najlacnejšieho iného predajcu |
| Tefal IB5100E0 | 93.90 € | **89.90 €** | 10.0 % | **5.4 %** | 89.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mixér G21 VitalStick 800 W, Black | 49.50 € | **46.50 €** | 16.0 % | **9.0 %** | 46.69 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 49.50 € | **46.50 €** | 16.0 % | **9.0 %** | 46.69 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08WT | 17.00 € | **14.00 €** | 29.8 % | **6.9 %** | 14.20 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 37.50 € | **35.50 €** | 27.7 % | **20.9 %** | 35.71 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 37.50 € | **35.50 €** | 27.7 % | **20.9 %** | 35.71 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 220.00 € | **218.00 €** | 13.4 % | **12.4 %** | 218.30 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26050-70 | 32.50 € | **30.50 €** | 16.3 % | **9.2 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2397 Trenažér na stehná a panvové dno (modrý) | 17.00 € | **15.00 €** | 41.3 % | **24.7 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1448.00 € | **1446.50 €** | 7.7 % | **7.6 %** | 1446.85 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 67.00 € | **65.50 €** | 32.5 % | **29.5 %** | 65.85 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 342.00 € | **340.90 €** | 7.3 % | **6.9 %** | 340.93 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.50 € | **17.50 €** | 13.6 % | **7.5 %** | 17.79 € | cena podľa najlacnejšieho iného predajcu |
| Motorcycle Intercom EJEAS MS8-SE | 85.50 € | **84.50 €** | 15.7 % | **14.4 %** | 84.88 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 54.50 € | **53.90 €** | 13.9 % | **12.7 %** | 53.96 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 49.50 € | **49.00 €** | 11.9 % | **10.8 %** | 49.18 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNDS8 double monitor mount 13-32" | 59.50 € | **59.00 €** | 21.1 % | **20.0 %** | 59.22 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.00 € | **21.50 €** | 9.3 % | **6.8 %** | 21.79 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC S100neo AC/DC | 47.50 € | **47.00 €** | 26.4 % | **25.0 %** | 47.38 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 500 ml, khaki zelená | 14.50 € | **14.00 €** | 15.9 % | **11.9 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 500 ml, oceľovo šedá | 14.50 € | **14.00 €** | 15.9 % | **11.9 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 131.50 € | **131.00 €** | 25.2 % | **24.7 %** | 131.49 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar HiBREW H11 1450 W | 114.90 € | **114.50 €** | 21.3 % | **20.9 %** | 114.78 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 78.90 € | **78.50 €** | 10.0 % | **9.4 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNCM9 13-32" monitor mount | 29.90 € | **29.50 €** | 13.9 % | **12.3 %** | 29.75 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.90 € | **39.50 €** | 16.8 % | **15.6 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |

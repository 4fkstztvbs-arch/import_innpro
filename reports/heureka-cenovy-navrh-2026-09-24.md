# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-24

Vstup: `premiumstore-sk_2026-09-24_09-10.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6957**
- Návrh **zvýšiť** cenu: **216** produktov
- Návrh **znížiť** cenu: **232** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6509** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **53**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **485**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (216)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **250.50 €** | 14.5 % | **544.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 526.50 € | **656.90 €** | 15.0 % | **43.4 %** | 657.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER DV2 | 444.00 € | **558.90 €** | 15.0 % | **44.7 %** | 559.00 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 254.90 € | **359.00 €** | 10.0 % | **55.0 %** | 359.17 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zosilňovač | 270.50 € | **360.50 €** | 7.4 % | **43.1 %** | 360.59 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P4 USB-C Mini | 323.00 € | **408.90 €** | 15.0 % | **45.6 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 241.50 € | **308.90 €** | 15.1 % | **47.2 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 247.00 € | **308.90 €** | 15.0 % | **43.8 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 Max | 648.90 € | **694.50 €** | 5.2 % | **12.6 %** | 694.83 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač robotický NEDIS WIFIVCL001CBK SmartLife 3 v ... | 238.90 € | **282.00 €** | 18.3 % | **39.6 %** | 282.49 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER T2Max | 292.90 € | **332.50 €** | 15.0 % | **30.5 %** | 332.90 € | cena podľa najlacnejšieho iného predajcu |
| Panvica Tefal G721SD74 | 107.50 € | **146.50 €** | 10.4 % | **50.4 %** | 146.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 584.90 € | **614.90 €** | 32.6 % | **39.4 %** | 614.99 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 283.90 € | **311.50 €** | 15.1 % | **26.3 %** | 311.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny RCD / tester odporu slučky Habotest HT5910 | 131.50 € | **156.90 €** | 14.9 % | **37.1 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa panvica 28 cm | 14.90 € | **34.90 €** | 12.9 % | **164.4 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI Pods Transl.TWS+překladač ATR10BK | 55.00 € | **75.00 €** | 10.0 % | **50.0 %** | 75.12 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 27.90 € | **45.90 €** | 15.0 % | **89.2 %** | 45.93 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 245.90 € | **262.50 €** | 15.0 % | **22.8 %** | 262.64 € | cena podľa najlacnejšieho iného predajcu |
| Tigo CloudConnect Advance Kit vrátane TAP | 200.00 € | **216.00 €** | 4.4 % | **12.7 %** | 216.22 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B1-EU | 245.00 € | **261.00 €** | 14.9 % | **22.4 %** | 261.46 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 211.90 € | **226.00 €** | 34.8 % | **43.8 %** | 226.28 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 211.90 € | **226.00 €** | 27.1 % | **35.5 %** | 226.28 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa panvica 26 cm | 18.00 € | **31.90 €** | 10.6 % | **96.0 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 112.50 € | **124.90 €** | 6.5 % | **18.3 %** | 125.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 36.50 € | **48.00 €** | 15.3 % | **51.7 %** | 48.19 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552220 Crocodile 5G LTE700 domovní zosilňovač | 33.50 € | **44.90 €** | 9.0 % | **46.1 %** | 44.96 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa Hluboká panvica 26 cm | 23.90 € | **34.00 €** | 10.0 % | **56.5 %** | 34.23 € | cena podľa najlacnejšieho iného predajcu |
| PC skrinka Darkflash DK351+ so 4 ventilátormi, biela | 43.90 € | **54.00 €** | 16.7 % | **43.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Teplovzdušná fritéza TEESA TSA8089 Teplovzdušná frit... | 71.90 € | **82.00 €** | 5.6 % | **20.4 %** | 82.49 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X50 soundbar | 398.90 € | **408.90 €** | 8.5 % | **11.2 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Kolobežka NILS Extreme HM122T s kotúčovou brzdou a LED | 102.50 € | **112.50 €** | 8.5 % | **19.0 %** | 112.70 € | cena podľa najlacnejšieho iného predajcu |
| Wi-Fi mesh systém TP-Link Deco E4, 2 kusy | 80.90 € | **90.50 €** | 5.3 % | **17.7 %** | 90.90 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat DIGITRADIO 550 IR /čierne/ | 150.00 € | **159.50 €** | 14.2 % | **21.4 %** | 159.90 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER SF120Q 120 cm parabolický softbox | 102.00 € | **110.50 €** | 14.8 % | **24.4 %** | 110.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava teleokuláru pro smartphone Levenhuk Kelvin T... | 166.50 € | **174.90 €** | 0.1 % | **5.2 %** | 143.74 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MASCOM SUNNY-T Android TV 4K UHD Android TV multimed... | 85.00 € | **93.00 €** | 19.7 % | **31.0 %** | 93.41 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 81.00 € | **88.90 €** | 14.7 % | **25.9 %** | 88.96 € | cena podľa najlacnejšieho iného predajcu |
| Zvukový mixér a zvuková karta AMC2 Neo | 38.90 € | **46.50 €** | 5.0 % | **25.6 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľné činky MERACH MR-2444, súprava 2 ks | 41.90 € | **49.50 €** | 15.2 % | **36.1 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Solárny regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 81.90 € | **89.50 €** | 5.4 % | **15.2 %** | 89.79 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015502 Mikrovlnná rúra | 118.00 € | **125.50 €** | 10.0 % | **17.0 %** | 125.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač potravín Oneisall PFD001 Pro (... | 43.50 € | **50.50 €** | 15.6 % | **34.2 %** | 50.83 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 77.50 € | **84.50 €** | 11.3 % | **21.3 %** | 84.87 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 33.50 € | **40.50 €** | 14.6 % | **38.5 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Teplomer a vlhkomer CO2 SwitchBot Meter Pro | 42.50 € | **49.50 €** | 15.6 % | **34.7 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovná nabíjačka 3v1, MagSafe kompatibilná | 25.00 € | **31.00 €** | 32.1 % | **63.8 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP White | 28.90 € | **34.50 €** | 10.2 % | **31.5 %** | 34.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 169.50 € | **174.90 €** | 15.1 % | **18.8 %** | 174.91 € | cena podľa najlacnejšieho iného predajcu |
| SUNLU vysokorýchlostný PLA+ filament, čierny | 12.90 € | **18.00 €** | 14.6 % | **59.9 %** | 18.49 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200 cm DCA0975 | 29.00 € | **34.00 €** | 31.8 % | **54.5 %** | 34.32 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 Perfection v hnedej farbe | 203.50 € | **208.50 €** | 13.8 % | **16.6 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| Žehlička Leifheit Žehl. prkno 76210 | 65.50 € | **70.00 €** | 10.6 % | **18.2 %** | 70.26 € | cena podľa najlacnejšieho iného predajcu |
| Súprava 4 filtrov ND-PL 4/8/16/32 Sunnylife pre DJI ... | 23.00 € | **27.50 €** | 14.7 % | **37.2 %** | 27.85 € | cena podľa najlacnejšieho iného predajcu |
| Skaner 3D Creality RaptorX | 2819.50 € | **2824.00 €** | 15.9 % | **16.1 %** | 2824.40 € | cena podľa najlacnejšieho iného predajcu |
| Žehliaca doska Tefal IB5100E0 | 89.90 € | **94.00 €** | 5.4 % | **10.2 %** | 94.39 € | cena podľa najlacnejšieho iného predajcu |
| Tefal RK812110 | 104.90 € | **109.00 €** | 5.2 % | **9.3 %** | 109.40 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 317.50 € | **321.50 €** | 18.2 % | **19.7 %** | 321.59 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 291.00 € | **295.00 €** | 17.8 % | **19.4 %** | 295.09 € | cena podľa najlacnejšieho iného predajcu |
| JBL Xtreme 3 čierny | 187.90 € | **191.90 €** | 9.9 % | **12.2 %** | 192.00 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 343.50 € | **347.50 €** | 19.9 % | **21.3 %** | 347.79 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 276.90 € | **280.50 €** | 10.1 % | **11.5 %** | 280.81 € | cena podľa najlacnejšieho iného predajcu |
| Stĺpcový filter Solight pre vysávač Dyson V12 | 5.90 € | **9.50 €** | 24.3 % | **100.1 %** | 9.51 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz KM2240 Connect C200 Tuya Wi-Fi | 164.50 € | **168.00 €** | 12.0 % | **14.4 %** | 168.01 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk GODOX MF12 | 113.50 € | **117.00 €** | 14.5 % | **18.0 %** | 117.08 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní predpoveďou G... | 273.50 € | **277.00 €** | 5.8 % | **7.2 %** | 277.09 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro SD S26 FE FIXOP3-1707-BK | 12.00 € | **15.50 €** | 10.9 % | **43.2 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| IMOU N110W 10-kanálový IP videorekordér | 79.00 € | **82.50 €** | 14.3 % | **19.3 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| SUNLU PLA Classic filament, sivý | 11.00 € | **14.50 €** | 12.9 % | **48.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| G21 nôž Damascus Premium 13 cm | 41.50 € | **45.00 €** | 6.1 % | **15.0 %** | 45.49 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 191 USB datalogger pro meranie teploty a r... | 79.50 € | **82.90 €** | 16.6 % | **21.6 %** | 82.94 € | cena podľa najlacnejšieho iného predajcu |
| Tesla MediaBox XG500 | 59.50 € | **62.90 €** | 5.5 % | **11.5 %** | 63.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 39.00 € | **42.00 €** | 28.6 % | **38.5 %** | 42.21 € | cena podľa najlacnejšieho iného predajcu |
| SUNLU PLA Classic filament, čierny | 10.50 € | **13.50 €** | 16.9 % | **50.4 %** | 13.84 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 3400LB, 4 pohybový prodloužený do 600x400 mm,... | 62.50 € | **65.50 €** | 24.0 % | **30.0 %** | 65.90 € | cena podľa najlacnejšieho iného predajcu |
| Olovená batéria 6V / 12Ah XTREME / Enerwell bezúdržb... | 11.90 € | **14.50 €** | 16.3 % | **41.7 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI928 4ks súprava filtrov objektívu pr... | 11.00 € | **13.50 €** | 14.5 % | **40.5 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Presný kliešťový multimeter Uni-T 60A UT211B | 105.50 € | **108.00 €** | 9.7 % | **12.3 %** | 108.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 19.50 € | **21.90 €** | 19.9 % | **34.7 %** | 21.92 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNCM9 13-32" monitor mount | 29.50 € | **31.90 €** | 12.3 % | **21.5 %** | 31.97 € | cena podľa najlacnejšieho iného predajcu |
| Strojček na strihanie domácich zvierat Oneisall RFC-... | 34.90 € | **37.00 €** | 15.1 % | **22.0 %** | 37.42 € | cena podľa najlacnejšieho iného predajcu |
| Boxovací pytel MMA DBX BUSHIDO 130 cm 40 kg | 131.90 € | **134.00 €** | 3.4 % | **5.1 %** | 133.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 68.90 € | **71.00 €** | 5.1 % | **8.3 %** | 71.29 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač Electrolux EB61C4DB | 146.00 € | **148.00 €** | 6.8 % | **8.3 %** | 148.05 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska IsEasy LI3-17 | 152.50 € | **154.50 €** | 30.6 % | **32.3 %** | 154.59 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Sklokeramická varná doska | 162.50 € | **164.50 €** | 21.2 % | **22.7 %** | 164.59 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.50 € | **154.50 €** | 19.3 % | **20.9 %** | 154.59 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNDS8 double monitor mount 13-32" | 59.00 € | **61.00 €** | 20.0 % | **24.1 %** | 61.13 € | cena podľa najlacnejšieho iného predajcu |
| WESTMARK 2094,2611 Nůžky na salát, 8 ks | 44.00 € | **46.00 €** | 10.2 % | **15.2 %** | 46.14 € | cena podľa najlacnejšieho iného predajcu |
| Súprava 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI M... | 21.50 € | **23.50 €** | 18.9 % | **30.0 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotaška na zadné nosič 3in1 Trizand 25516 | 16.50 € | **18.50 €** | 9.4 % | **22.7 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 16.00 € | **17.90 €** | 50.2 % | **68.0 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (modré) | 24.90 € | **26.50 €** | 15.2 % | **22.6 %** | 26.65 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W1 TUYA | 7.90 € | **9.50 €** | 15.3 % | **38.7 %** | 9.59 € | cena podľa najlacnejšieho iného predajcu |
| Tréninkový prohnutý blok DBX BUSHIDO T 62 x 35 x 12 ... | 61.00 € | **62.50 €** | 2.8 % | **5.3 %** | 51.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight náhradné trubičky pre alkohol tester Solight... | 1.60 € | **3.10 €** | 30.1 % | **152.0 %** | 3.12 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55,37 l chladiaci box na nápoje (čierny) | 137.50 € | **139.00 €** | 35.8 % | **37.2 %** | 139.04 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač DOMO DO252SV | 109.50 € | **111.00 €** | 8.8 % | **10.3 %** | 111.09 € | cena podľa najlacnejšieho iného predajcu |
| Olovená batéria 12V / 7,5Ah XTREME / Enerwell bezúdr... | 14.50 € | **16.00 €** | 5.4 % | **16.4 %** | 16.09 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (čierne) | 25.00 € | **26.50 €** | 14.8 % | **21.7 %** | 26.65 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit držiak kuchynských rolí ROLLY MO | 18.00 € | **19.50 €** | 22.1 % | **32.2 %** | 19.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.50 € | **129.00 €** | 17.0 % | **18.4 %** | 129.29 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnútorný Kruger&Matz Connect C25 2 K Tuya ... | 37.00 € | **38.50 €** | 21.8 % | **26.8 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 118.50 € | **120.00 €** | 31.7 % | **33.3 %** | 120.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 Sklokeramická varná doska | 114.00 € | **115.50 €** | 24.3 % | **25.9 %** | 115.89 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Nefrit | 116.00 € | **117.50 €** | 8.2 % | **9.6 %** | 117.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 10.50 € | **12.00 €** | 14.7 % | **31.1 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G3Ferrari G2016201 | 35.50 € | **36.90 €** | 11.5 % | **15.9 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa Hluboká panvica 28cm | 37.50 € | **38.90 €** | 23.1 % | **27.7 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Black | 28.90 € | **30.00 €** | 10.4 % | **14.6 %** | 30.34 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Pink | 28.90 € | **30.00 €** | 10.4 % | **14.6 %** | 30.34 € | cena podľa najlacnejšieho iného predajcu |
| Sada stavebních vozidel s příslušenstvím 26578 | 22.90 € | **24.00 €** | 13.8 % | **19.3 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 86.90 € | **88.00 €** | 15.2 % | **16.6 %** | 88.09 € | cena podľa najlacnejšieho iného predajcu |
| Mini rúra GUZZANTI GZ 3601 | 96.90 € | **98.00 €** | 5.0 % | **6.2 %** | 98.18 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21,750 ml – eukalyptovo zelená | 23.50 € | **24.50 €** | 11.2 % | **15.9 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21,750 ml – pieskovo béžová | 23.50 € | **24.50 €** | 11.2 % | **15.9 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 64.00 € | **65.00 €** | 24.0 % | **26.0 %** | 65.09 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač akumulátorový TEESA TSA5055 SWEEPER 9000,2 v 1 | 91.50 € | **92.50 €** | 14.1 % | **15.3 %** | 92.59 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT2V-15 dvojzónová electric ceramic stove | 83.90 € | **84.90 €** | 27.9 % | **29.4 %** | 84.99 € | cena podľa najlacnejšieho iného predajcu |
| Motor na ovládanie závesov SwitchBot Rod 2 (biely) | 53.90 € | **54.90 €** | 23.3 % | **25.6 %** | 55.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 90.00 € | **91.00 €** | 15.4 % | **16.7 %** | 91.19 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.00 € | **91.00 €** | 14.5 % | **15.8 %** | 91.19 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600 | 71.50 € | **72.50 €** | 11.2 % | **12.8 %** | 72.69 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na prežitie LEVENHUK LabZZ SK40 | 43.00 € | **44.00 €** | 7.5 % | **10.0 %** | 44.19 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 83.00 € | **84.00 €** | 33.9 % | **35.5 %** | 84.19 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 79.50 € | **80.50 €** | 17.4 % | **18.9 %** | 80.69 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SGA17 4G / 5G FIXOP3-1700-BK | 16.50 € | **17.50 €** | 52.4 % | **61.7 %** | 17.73 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 95.00 € | **96.00 €** | 23.5 % | **24.8 %** | 96.28 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.50 € | **80.50 €** | 14.6 % | **16.1 %** | 80.79 € | cena podľa najlacnejšieho iného predajcu |
| 4-kanálový teplomer Uni-T UT325F | 98.50 € | **99.50 €** | 8.5 % | **9.6 %** | 99.79 € | cena podľa najlacnejšieho iného predajcu |
| Sušička potravín DOMO DO42602S | 38.50 € | **39.50 €** | 5.5 % | **8.2 %** | 39.79 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 12.00 € | **13.00 €** | 10.9 % | **20.1 %** | 13.32 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR S3 Pro – popruh s batériou a ventilátorom pre... | 71.00 € | **72.00 €** | 20.4 % | **22.1 %** | 72.33 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900 / 1800 MHz | 181.50 € | **182.50 €** | 21.4 % | **22.0 %** | 182.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 106.00 € | **107.00 €** | 19.4 % | **20.5 %** | 107.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603,3 horáky (biela) | 106.00 € | **107.00 €** | 12.3 % | **13.3 %** | 107.39 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny prísavný držiak TELESIN s držiakom na te... | 14.50 € | **15.50 €** | 27.0 % | **35.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 114.50 € | **115.50 €** | 12.9 % | **13.8 %** | 115.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 112.50 € | **113.50 €** | 12.8 % | **13.8 %** | 113.90 € | cena podľa najlacnejšieho iného predajcu |
| Kryt FIXED pre Apple iPhone 13 | 17.50 € | **18.50 €** | 11.9 % | **18.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.00 € | **88.00 €** | 21.7 % | **23.1 %** | 88.49 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 54.00 € | **54.90 €** | 11.5 % | **13.4 %** | 54.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 728.00 € | **728.90 €** | 9.1 % | **9.2 %** | 729.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.60 € | **7.30 €** | 29.9 % | **43.7 %** | 7.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 9.80 € | **10.50 €** | 18.0 % | **26.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka EMOS NTBF20 / B0560B / , 20 000 mAh, 65 W... | 38.90 € | **39.50 €** | 4.6 % | **6.2 %** | 33.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Obdelníkový stropní držiak na boxovací pytel do 150 ... | 18.90 € | **19.50 €** | 4.0 % | **7.3 %** | 13.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Set PowerClean M+náhr. zdarma | 19.90 € | **20.50 €** | 7.1 % | **10.3 %** | 20.89 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK 4G LTE USB Adaptér (DWM-222W) | 51.90 € | **52.50 €** | 10.3 % | **11.6 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo pracovné, 120+40lm, 3W COB + 3... | 3.80 € | **4.40 €** | 49.2 % | **72.8 %** | 4.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.10 € | **4.70 €** | 20.3 % | **37.9 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.90 € | **133.50 €** | 16.4 % | **16.9 %** | 133.82 € | cena podľa najlacnejšieho iného predajcu |
| Impregnácia na obuv INPRODUCTS 400 ml | 25.00 € | **25.50 €** | 4.6 % | **6.6 %** | 21.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termoska BERGNER fľaša nerezová oceľ 0,5 l sivá | 15.00 € | **15.50 €** | 3.8 % | **7.2 %** | 15.07 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Impregnácia na kožené odevy INPRODUCTS WAX 200 ml | 17.00 € | **17.50 €** | 4.0 % | **7.1 %** | 17.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada na selfie Neewer SRP18C s priemerom 17 cm a okr... | 165.00 € | **165.50 €** | 39.0 % | **39.4 %** | 165.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 70.50 € | **71.00 €** | 37.4 % | **38.4 %** | 71.04 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max v bielej farbe robotic... | 141.50 € | **142.00 €** | 6.6 % | **7.0 %** | 142.04 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 93.50 € | **94.00 €** | 14.2 % | **14.9 %** | 94.08 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 16.00 € | **16.50 €** | 14.8 % | **18.4 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlá do skrinky Yeelight Ultra-Thin Intelligent... | 38.00 € | **38.50 €** | 38.4 % | **40.2 %** | 38.59 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm sivý lesk 500 ml | 21.50 € | **22.00 €** | 6.8 % | **9.3 %** | 22.09 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušiak na bielizeň Pegasus Bath 19 | 30.00 € | **30.50 €** | 6.5 % | **8.2 %** | 30.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.00 € | **15.50 €** | 12.9 % | **16.7 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 4000K... | 15.00 € | **15.50 €** | 327.9 % | **342.2 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 22W, 3080lm, 6000K... | 15.00 € | **15.50 €** | 327.9 % | **342.2 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **28.00 €** | 15.6 % | **17.7 %** | 28.09 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny digitálny multimeter UNI-T UT191E | 56.00 € | **56.50 €** | 5.1 % | **6.1 %** | 56.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.00 € | **23.50 €** | 11.7 % | **14.1 %** | 23.59 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Podlahový mop Picobello M Micro | 19.50 € | **20.00 €** | 11.2 % | **14.0 %** | 20.09 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 114.50 € | **115.00 €** | 13.4 % | **13.9 %** | 115.10 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 124.50 € | **125.00 €** | 8.9 % | **9.4 %** | 125.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight detektor dymu s WIFI pripojením | 17.50 € | **18.00 €** | 33.6 % | **37.4 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93323 panvica Sagitta 20 cm | 14.50 € | **15.00 €** | 13.7 % | **17.6 %** | 15.14 € | cena podľa najlacnejšieho iného predajcu |
| Helmet držiak Puluz for action cameras (DJI, GoPro, ... | 17.50 € | **18.00 €** | 14.3 % | **17.5 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 50 cm LED stan bez tienidla PU5051EU | 43.00 € | **43.50 €** | 15.1 % | **16.4 %** | 43.67 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Ottocast CA525-T3 | 27.50 € | **28.00 €** | 23.3 % | **25.5 %** | 28.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 38.50 € | **39.00 €** | 16.8 % | **18.3 %** | 39.19 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, červeno-čierne vyhotovenie | 46.50 € | **47.00 €** | 9.0 % | **10.2 %** | 47.19 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, v čiernej farbe | 46.50 € | **47.00 €** | 9.0 % | **10.2 %** | 47.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 16.00 € | **16.50 €** | 6.4 % | **9.7 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit držiak fólií (rolí) PARAT ROYAL | 31.50 € | **32.00 €** | 10.5 % | **12.2 %** | 32.29 € | cena podľa najlacnejšieho iného predajcu |
| Podpera pozadia pre fotoštúdio Puluz 2x2 m + pozadia... | 41.50 € | **42.00 €** | 15.2 % | **16.6 %** | 42.38 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.00 € | **33.50 €** | 7.2 % | **8.8 %** | 33.89 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 165.50 € | **165.90 €** | 39.5 % | **39.8 %** | 165.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.50 € | **9.90 €** | 19.7 % | **24.8 %** | 9.97 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 11.50 € | **11.90 €** | 29.1 % | **33.6 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na prežitie LEVENHUK LabZZ SK20 | 24.50 € | **24.90 €** | 4.8 % | **6.5 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Olovená batéria 12V / 17 Ah MHPower MS17-12 | 28.50 € | **28.90 €** | 9.7 % | **11.2 %** | 28.91 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.50 € | **55.90 €** | 35.5 % | **36.5 %** | 55.91 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX ZE064 | 29.50 € | **29.90 €** | 9.6 % | **11.1 %** | 29.92 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 17.50 € | **17.90 €** | 7.5 % | **9.9 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.30 € | **6.60 €** | 21.1 % | **26.9 %** | 6.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.10 € | **5.30 €** | 30.8 % | **35.9 %** | 5.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.50 € | **5.70 €** | 25.6 % | **30.2 %** | 5.75 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 389.90 € | **390.00 €** | 38.6 % | **38.7 %** | 390.09 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H3c 3 K vonkajší IP, 5MP, 2.8 mm, WiFi | 48.90 € | **49.00 €** | 4.8 % | **5.0 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PC skrinka Darkflash DK351+ so 4 ventilátormi, čierna | 50.90 € | **51.00 €** | 39.9 % | **40.1 %** | 51.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.70 € | **9.80 €** | 28.2 % | **29.6 %** | 9.89 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.50 € | **3.60 €** | 55.5 % | **59.9 %** | 3.64 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.70 €** | 15.7 % | **18.9 %** | 3.79 € | cena podľa najlacnejšieho iného predajcu |
| Hasicí přístroj práškový 1 kg ABC | 14.90 € | **15.00 €** | 5.0 % | **5.7 %** | 12.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.30 € | **8.40 €** | 13.8 % | **15.2 %** | 8.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.30 €** | 20.4 % | **22.8 %** | 5.39 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-M, 5 m, v... | 5.00 € | **5.10 €** | 23.9 % | **26.4 %** | 5.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.50 € | **6.60 €** | 20.7 % | **22.5 %** | 6.69 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prepínač WiFi WiFi Sonoff Dual R3 Lite | 11.90 € | **12.00 €** | 30.4 % | **31.5 %** | 12.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 18.6 % | **21.0 %** | 5.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.00 € | **9.10 €** | 10.5 % | **11.8 %** | 9.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.90 € | **11.00 €** | 24.8 % | **26.0 %** | 11.39 € | cena podľa najlacnejšieho iného predajcu |
| Hyper PETG Creality filament (priehľadnýný) | 13.90 € | **14.00 €** | 14.7 % | **15.6 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Olovená batéria 12V / 3,4Ah XTREME bezúdržbový akumu... | 10.90 € | **11.00 €** | 12.0 % | **13.1 %** | 11.49 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V3 pre PC, PS3, PS4, Xbox One a Switch | 66.90 € | **67.00 €** | 30.4 % | **30.6 %** | 67.01 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 165.90 € | **166.00 €** | 15.4 % | **15.5 %** | 166.36 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 106.90 € | **107.00 €** | 27.3 % | **27.4 %** | 107.38 € | cena podľa najlacnejšieho iného predajcu |
| Menič napätia GETI GPIU 1012S 12V/230V 1000W | 151.90 € | **152.00 €** | 5.4 % | **5.5 %** | 152.39 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (232)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Detektor kovov Garrett AT Pre-International | 809.50 € | **703.90 €** | 50.2 % | **30.6 %** | 704.00 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Puli AX, 5G NR | 656.90 € | **559.50 €** | 44.5 % | **23.1 %** | 559.83 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk SP1 Lite (čie... | 262.00 € | **197.90 €** | 39.5 % | **5.4 %** | 198.00 € | cena podľa najlacnejšieho iného predajcu |
| Apple iPhone 17 256GB Lavender | 1174.90 € | **1121.50 €** | 10.0 % | **5.0 %** | 895.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Robotický vysávač Shark RV2800ZEEU PowerDetect Never... | 758.50 € | **724.50 €** | 10.0 % | **5.1 %** | 635.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tablet Apple iPad 11", 256 GB, strieborný | 661.50 € | **631.50 €** | 10.0 % | **5.0 %** | 580.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Veslovací trenažér REBEL ACTIVE RBA-1005 | 217.00 € | **187.50 €** | 28.0 % | **10.6 %** | 187.59 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi TV S Mini LED 55 2026 | 635.50 € | **606.50 €** | 10.1 % | **5.1 %** | 479.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Orbitrek REBEL ACTIVE RBA-1011 | 155.00 € | **133.00 €** | 25.0 % | **7.3 %** | 133.38 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V900, 12 000 mAh | 135.90 € | **115.50 €** | 23.6 % | **5.1 %** | 92.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Roborock QR 798 Black | 432.90 € | **413.50 €** | 10.0 % | **5.1 %** | 353.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Redmi Pad 2 Pro 8 / 256GB stříbrná (71044) | 349.50 € | **333.50 €** | 10.1 % | **5.0 %** | 268.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Pamäťová karta Memory card Samsung EVO Plus microSD ... | 35.50 € | **21.50 €** | 128.3 % | **38.3 %** | 21.85 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa Hluboká panvica 24cm | 30.50 € | **17.00 €** | 111.6 % | **17.9 %** | 17.10 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vonkajší NEDIS WIFICO22CWT / Wi-Fi / 3MP /... | 98.90 € | **85.50 €** | 22.0 % | **5.4 %** | 81.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash TH285M (čierna) | 64.00 € | **50.90 €** | 44.9 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Epson EcoTank L3366 | 243.90 € | **232.90 €** | 10.1 % | **5.1 %** | 213.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO91124 volně stojící chladnička s | 234.50 € | **223.90 €** | 10.1 % | **5.1 %** | 219.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi Smart Projector L1 EU | 222.90 € | **212.50 €** | 10.2 % | **5.0 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Epson EcoTank L3356 | 218.90 € | **208.90 €** | 10.2 % | **5.1 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TWS QCY MeloBuds Pro HT08 slúchadlá, ANC (čierny) | 41.00 € | **31.00 €** | 39.2 % | **5.3 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ultima Poseidon D60 soundbar | 179.50 € | **169.50 €** | 16.0 % | **9.5 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.50 € | **157.00 €** | 15.8 % | **9.2 %** | 157.05 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová zváračka fólií TEESA V200 | 41.90 € | **32.50 €** | 50.7 % | **16.9 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| EPSON EcoTank L1270 | 192.50 € | **183.50 €** | 10.2 % | **5.1 %** | 149.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slúchadlá Niceboy Pins 4 Arctic biely | 41.90 € | **32.90 €** | 34.0 % | **5.2 %** | 21.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko HSM14540 | 279.50 € | **270.50 €** | 17.4 % | **13.6 %** | 270.73 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V060 GPS, 12 000 mAh | 127.00 € | **118.50 €** | 23.2 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor Arzopa Z1C, 16,1", sivý | 98.90 € | **90.50 €** | 15.2 % | **5.4 %** | 88.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosná cyklistická pumpa Flextail Tiny Bike Pump P... | 67.50 € | **60.00 €** | 36.2 % | **21.0 %** | 60.21 € | cena podľa najlacnejšieho iného predajcu |
| TESLA AirCook & Grill QG800 WiFi | 164.90 € | **157.50 €** | 10.3 % | **5.3 %** | 108.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.50 € | **137.90 €** | 10.0 % | **5.0 %** | 124.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Nubela 2569,90100, biely | 28.50 € | **22.00 €** | 54.7 % | **19.4 %** | 22.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight dezinfekčná bezozónová UV lampa 100 W | 47.00 € | **40.50 €** | 49.6 % | **28.9 %** | 40.72 € | cena podľa najlacnejšieho iného predajcu |
| Wi-Fi mesh systém TP-Link Deco X10 AX1500, 3 kusy | 144.90 € | **138.50 €** | 10.1 % | **5.2 %** | 60.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 196.90 € | **190.50 €** | 15.1 % | **11.3 %** | 190.90 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Tiny 3 | 375.00 € | **368.90 €** | 11.4 % | **9.6 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Binokulárny ďalekohľad LEVENHUK Halo 50XN GPS s nočn... | 237.00 € | **230.90 €** | 7.9 % | **5.1 %** | 229.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Pamäťová karta Karta pamäte Lexar High-Performance S... | 97.00 € | **91.50 €** | 14.9 % | **8.3 %** | 91.56 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3BCNA324HS | 626.00 € | **620.50 €** | 9.1 % | **8.1 %** | 620.78 € | cena podľa najlacnejšieho iného predajcu |
| Kamera EMOS IP-1200 WASP /H4067/ GoSmart vonkajší ba... | 90.50 € | **85.50 €** | 11.4 % | **5.3 %** | 73.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CP-UNC-DA21L3C-L 2.0 Mpix vonkajší dome IP kamera s ... | 96.00 € | **91.00 €** | 23.9 % | **17.4 %** | 91.28 € | cena podľa najlacnejšieho iného predajcu |
| Hohem mikrofón (2TX + 1RX + nabíjacie puzdro) | 71.50 € | **66.50 €** | 22.0 % | **13.5 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000606 Pizza rúra DELIZIA | 110.50 € | **105.90 €** | 9.8 % | **5.2 %** | 93.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TWS QCY MeloBuds Pro HT08 slúchadlá, ANC (biely) | 35.50 € | **31.00 €** | 20.6 % | **5.3 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit sušiak na bielizeň LinoPop-Up 140 | 45.00 € | **40.50 €** | 18.5 % | **6.7 %** | 40.59 € | cena podľa najlacnejšieho iného predajcu |
| Filter do čističky vzduchu Náhradní predfilter GARNI... | 23.00 € | **18.50 €** | 41.1 % | **13.5 %** | 18.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 25.00 € | **20.50 €** | 67.1 % | **37.1 %** | 20.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 33.00 € | **28.50 €** | 71.4 % | **48.1 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| CANON PIXMA TS6550i White | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 57.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Multimeter Uni-T UT256A | 46.90 € | **42.90 €** | 15.3 % | **5.5 %** | 42.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CP-UNC-TA21PL3C-V3 2.0 Mpix vonkajší IP kamera s IR ... | 81.00 € | **77.00 €** | 23.7 % | **17.6 %** | 77.03 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3067-PK se závažím a počí... | 20.50 € | **16.50 €** | 47.8 % | **18.9 %** | 16.64 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA G69 (ružová) (QWERTY) | 37.00 € | **33.00 €** | 22.0 % | **8.8 %** | 33.30 € | cena podľa najlacnejšieho iného predajcu |
| USB Adaptér 6v1 Kruger&Matz KM0391.2 (HUB) typu C na... | 31.00 € | **27.00 €** | 25.5 % | **9.3 %** | 27.31 € | cena podľa najlacnejšieho iného predajcu |
| Súprava 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Min... | 26.00 € | **22.00 €** | 39.3 % | **17.8 %** | 22.33 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-PI | 23.50 € | **19.50 €** | 33.2 % | **10.6 %** | 19.84 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus - prenosný 16-palcový monitor | 147.00 € | **143.00 €** | 17.8 % | **14.6 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 Perfection grafitovo-čierne vyhotovenie | 211.50 € | **207.50 €** | 18.2 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Kolobežka NILS Extreme HM0107 bielo-ružová | 59.00 € | **55.50 €** | 12.4 % | **5.7 %** | 48.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Klávesnica ONIKUMA G69 (čierna) (QWERTY) | 39.00 € | **35.50 €** | 23.5 % | **12.4 %** | 35.65 € | cena podľa najlacnejšieho iného predajcu |
| Olovená batéria 12V / 55Ah VIPOW bezúdržbový akumulátor | 93.00 € | **89.50 €** | 20902.7 % | **20112.3 %** | 89.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 28.00 € | **24.50 €** | 24.7 % | **9.1 %** | 24.80 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS210 MAX AT1 Max Anoutway – mini pumpa na b... | 46.00 € | **42.50 €** | 21.1 % | **11.9 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE MO 20 E1W | 75.90 € | **72.50 €** | 10.5 % | **5.5 %** | 65.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK TL-MR150 4G LTE WiFi N Router | 70.90 € | **67.50 €** | 10.4 % | **5.1 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix vonkajší kamera 4v1 s ... | 60.00 € | **56.90 €** | 23.4 % | **17.0 %** | 57.00 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK 5-Port Gigabit Switch (DMS-105/E) | 70.50 € | **67.50 €** | 10.4 % | **5.7 %** | 66.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 19.00 € | **16.00 €** | 44.4 % | **21.6 %** | 16.27 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3511B | 69.50 € | **66.50 €** | 20.8 % | **15.6 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 25.50 € | **22.50 €** | 28.2 % | **13.1 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight teplomer, farba biela | 14.00 € | **11.00 €** | 83.0 % | **43.8 %** | 11.48 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-DC24PL3C-L 2.4 Mpix vonkajší dome kamera 4v1 ... | 53.00 € | **50.00 €** | 22.8 % | **15.8 %** | 50.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 78.90 € | **76.00 €** | 23.2 % | **18.6 %** | 76.11 € | cena podľa najlacnejšieho iného predajcu |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 13.90 € | **11.00 €** | 53.1 % | **21.2 %** | 11.22 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 slúchadlá, ANC (gold) | 32.50 € | **29.90 €** | 14.7 % | **5.6 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Kolobežka NILS Extreme HM0107 bielo-oranžová | 58.00 € | **55.50 €** | 10.5 % | **5.7 %** | 41.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíječka USB EMOS V02G20 GaN PD univerzální 3A (20W... | 10.50 € | **8.00 €** | 39.0 % | **5.9 %** | 7.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 137.00 € | **134.50 €** | 16.2 % | **14.1 %** | 134.62 € | cena podľa najlacnejšieho iného predajcu |
| PC skrinka Darkflash Aquarius Mesh, čierna | 31.00 € | **28.50 €** | 27.8 % | **17.5 %** | 28.74 € | cena podľa najlacnejšieho iného predajcu |
| Barkan S320. B, natáčecí stojan pro TV (29-58'' 25 k... | 62.50 € | **60.00 €** | 24.0 % | **19.1 %** | 60.29 € | cena podľa najlacnejšieho iného predajcu |
| Dóza na potraviny FoodSaver FFC022X | 19.00 € | **16.50 €** | 22.9 % | **6.7 %** | 16.83 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný pohlcovač zápachu Catlink Fresh | 35.50 € | **33.00 €** | 15.0 % | **6.9 %** | 33.36 € | cena podľa najlacnejšieho iného predajcu |
| Maono G1 Neo Sound Card Black | 46.00 € | **43.50 €** | 16.1 % | **9.8 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Zvuková karta Maono G1 Neo (biela) | 46.00 € | **43.50 €** | 17.6 % | **11.2 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak monitora Cabletech UCH0221 (13-32'' 10 kg) či... | 22.90 € | **20.50 €** | 19.5 % | **7.0 %** | 16.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hriankovač Ariete ART 155/CA | 58.90 € | **56.50 €** | 10.4 % | **5.9 %** | 53.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA GT839 | 27.90 € | **25.50 €** | 26.0 % | **15.2 %** | 25.67 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt pro SGS26+ FIXFLM2-1705-PI | 21.90 € | **19.50 €** | 24.2 % | **10.6 %** | 19.84 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-RD | 21.90 € | **19.50 €** | 24.2 % | **10.6 %** | 19.84 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.4 % | **5.4 %** | 8.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Podložka pod mačaciu toaletu Catlink Baymax / Baymax... | 27.00 € | **24.90 €** | 14.8 % | **5.9 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera EMOS IP-220 W /H4062/ GoSmart vnútorný otočná... | 39.50 € | **37.50 €** | 11.5 % | **5.8 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE505X AX1500 WiFi 6 Extender | 42.90 € | **40.90 €** | 11.0 % | **5.8 %** | 37.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete Handy Force One 2 v 1,2708 | 54.50 € | **52.50 €** | 10.7 % | **6.7 %** | 52.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový zvonček a nočné svetielko, do zás... | 6.80 € | **4.80 €** | 68.6 % | **19.0 %** | 4.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový zvonček a nočné svetielko, do zás... | 6.80 € | **4.80 €** | 68.6 % | **19.0 %** | 4.85 € | cena podľa najlacnejšieho iného predajcu |
| Napájací zdroj spínaný URZ1169 12 V / 5 A - 2,1/5,5 | 14.50 € | **12.50 €** | 33.1 % | **14.7 %** | 12.89 € | cena podľa najlacnejšieho iného predajcu |
| Remoska D52F/10 4l Dua Glass | 136.90 € | **135.00 €** | 10.1 % | **8.6 %** | 135.10 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta XD6220F0 | 38.90 € | **37.00 €** | 11.0 % | **5.5 %** | 37.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **16.00 €** | 34.5 % | **20.2 %** | 16.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 8.80 € | **7.10 €** | 31.8 % | **6.3 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.50 € | **34.90 €** | 10.4 % | **5.5 %** | 22.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO961T | 29.50 € | **27.90 €** | 11.2 % | **5.2 %** | 27.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 10.50 € | **9.00 €** | 43.2 % | **22.8 %** | 9.04 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušiak Classic 200 Flex | 27.50 € | **26.00 €** | 17.5 % | **11.1 %** | 26.19 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 - prenosný 16-palcový monitor | 131.00 € | **129.50 €** | 20.8 % | **19.5 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 11.50 € | **10.00 €** | 36.1 % | **18.3 %** | 10.43 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **35.50 €** | 10.0 % | **5.8 %** | 33.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový diaľkový ovládač Heiman HM1RC-W Interlinked | 3.70 € | **2.40 €** | 104.6 % | **32.7 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušiak Classic 250 Flex | 33.00 € | **31.90 €** | 17.3 % | **13.4 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava vysílaček a binokulárních dalekohledů LEVENH... | 55.00 € | **53.90 €** | 7.6 % | **5.4 %** | 54.00 € | cena podľa najlacnejšieho iného predajcu |
| Anemometer UNI-T UT363 | 16.00 € | **14.90 €** | 14.0 % | **6.2 %** | 12.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.80 € | **7.80 €** | 53.9 % | **36.4 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Kingston Canvas Select Plus/Micro 64GB | 22.90 € | **21.90 €** | 11.6 % | **6.7 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PG-575 XL Black | 27.50 € | **26.50 €** | 10.9 % | **6.9 %** | 24.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FoodSaver FFC023X | 20.90 € | **19.90 €** | 10.6 % | **5.3 %** | 19.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Držiak mikrofónu Maono BA20 (čierny) | 14.50 € | **13.50 €** | 15.7 % | **7.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Philips AWP175/10 | 24.90 € | **23.90 €** | 11.6 % | **7.1 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Pozorovací ďalekohľad LEVENHUK New Blaze PRO 100 | 379.90 € | **378.90 €** | 8.0 % | **7.7 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1442.00 € | **1441.00 €** | 7.3 % | **7.2 %** | 1441.22 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 30.50 € | **29.50 €** | 11.6 % | **8.0 %** | 29.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight 45W GaN fast charge USB-A + USB-C adaptér | 14.00 € | **13.00 €** | 43.5 % | **33.3 %** | 13.36 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušiak na bielizeň Rolfix 150 Trip | 19.00 € | **18.00 €** | 13.7 % | **7.7 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ľadových kociek Euhomy IM001,1,2 l, 12 kg (... | 60.50 € | **59.50 €** | 16.4 % | **14.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ľadových kociek Euhomy IM001,1,2 l, 12 kg (... | 60.50 € | **59.50 €** | 16.3 % | **14.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZP156 - prenosný monitor s uhlopriečkou 15,6" | 86.50 € | **85.50 €** | 7.1 % | **5.8 %** | 85.90 € | cena podľa najlacnejšieho iného predajcu |
| GPS bike computer Cycplus M1 | 26.50 € | **25.50 €** | 14.2 % | **9.9 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm sivé drevo 500 ml | 23.00 € | **22.00 €** | 14.2 % | **9.3 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Video kabel FIXHU-CHDMI-GR | 15.90 € | **15.00 €** | 11.5 % | **5.2 %** | 11.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reproduktor Bluetooth KRUGER & MATZ KM0566 STREET XL... | 39.90 € | **39.00 €** | 16.0 % | **13.4 %** | 39.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.70 € | **8.90 €** | 29.5 % | **18.8 %** | 8.99 € | cena podľa najlacnejšieho iného predajcu |
| Herný ovládač GameSir Nova MultiPlatform | 25.50 € | **24.90 €** | 9.3 % | **6.7 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT sušiak na bielizeň Quartett 20 | 12.50 € | **11.90 €** | 11.4 % | **6.1 %** | 9.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight USB-C/Lightning kábel, USB-C konektor, Light... | 4.80 € | **4.20 €** | 73.4 % | **51.8 %** | 4.27 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit stierka na dlaždice a vanu FLEXI | 12.50 € | **11.90 €** | 14.3 % | **8.8 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L3350 | 189.50 € | **188.90 €** | 10.1 % | **9.7 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Kolobežka NILS Extreme HM1302 čierna | 43.00 € | **42.50 €** | 6.9 % | **5.6 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skladacia kolobežka NILS Extreme HM2009 sivá | 46.50 € | **46.00 €** | 6.3 % | **5.2 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB kľúč Lexar JumpDrive M400, 32 GB, USB 3.0 | 11.00 € | **10.50 €** | 14.1 % | **8.9 %** | 9.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C460 8MPx, vonkajšia, IP, WiFi, ... | 113.00 € | **112.50 €** | 5.7 % | **5.3 %** | 112.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.50 € | **15.00 €** | 42.4 % | **37.8 %** | 15.03 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING 30... | 346.50 € | **346.00 €** | 14.5 % | **14.3 %** | 346.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor, Lightni... | 4.80 € | **4.30 €** | 69.7 % | **52.0 %** | 4.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšia reťaz s žiarovkami, 10 žiarovi... | 13.00 € | **12.50 €** | 42.4 % | **37.0 %** | 12.61 € | cena podľa najlacnejšieho iného predajcu |
| Rýchlovarná kanvica Tefal Coppertinto KI280G10 | 31.50 € | **31.00 €** | 11.9 % | **10.1 %** | 31.23 € | cena podľa najlacnejšieho iného predajcu |
| Olovená batéria 12V / 7,0 Ah MHPower MS7-12 | 12.00 € | **11.50 €** | 10.6 % | **6.0 %** | 11.74 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 217.00 € | **216.50 €** | 17.4 % | **17.1 %** | 216.78 € | cena podľa najlacnejšieho iného predajcu |
| Menič napätia GETI GPI 2012 12V/230V 2000W USB | 141.50 € | **141.00 €** | 5.4 % | **5.0 %** | 141.29 € | cena podľa najlacnejšieho iného predajcu |
| Budík Samolepiace hodiny G21 Metallic Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| BALDRTHERM B0596WT2H2P – V1 – meteorologická stanica... | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.29 € | cena podľa najlacnejšieho iného predajcu |
| Batéria motocyklová 12V / 9Ah Vipow | 24.00 € | **23.50 €** | 9.0 % | **6.7 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Letové pedále MOZA Racing AS019 | 345.50 € | **345.00 €** | 6.9 % | **6.7 %** | 345.29 € | cena podľa najlacnejšieho iného predajcu |
| Hyper PLA filament Creality (oranžový) | 14.50 € | **14.00 €** | 17.3 % | **13.3 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 33.4 % | **27.6 %** | 11.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 98.00 € | **97.50 €** | 24.3 % | **23.6 %** | 97.86 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150 černé s LED podsví... | 116.00 € | **115.50 €** | 15.0 % | **14.5 %** | 115.87 € | cena podľa najlacnejšieho iného predajcu |
| Budík Hodiny analogové TechnoLine WT 650 s teploměre... | 11.50 € | **11.00 €** | 10.3 % | **5.5 %** | 11.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 40.50 € | **40.00 €** | 16.3 % | **14.9 %** | 40.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušiak na bielizeň Classic Extenda | 54.50 € | **54.00 €** | 18.2 % | **17.1 %** | 54.39 € | cena podľa najlacnejšieho iného predajcu |
| Sušiak na bielizeň Leifheit Classic Siena 180 Easy | 26.50 € | **26.00 €** | 9.5 % | **7.5 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Robotický čistič okien MOVA N1 (biely) | 287.00 € | **286.50 €** | 14.7 % | **14.5 %** | 286.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 274.50 € | **274.00 €** | 6.7 % | **6.5 %** | 274.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit stierka na okna s kartáčem a tel | 18.50 € | **18.00 €** | 11.5 % | **8.5 %** | 18.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 873.50 € | **873.00 €** | 9.4 % | **9.3 %** | 873.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 684.50 € | **684.00 €** | 5.5 % | **5.4 %** | 684.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 322.00 € | **321.50 €** | 8.2 % | **8.0 %** | 321.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 633.50 € | **633.00 €** | 5.6 % | **5.5 %** | 633.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 670.00 € | **669.50 €** | 8.3 % | **8.2 %** | 669.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 699.00 € | **698.50 €** | 9.2 % | **9.1 %** | 698.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny infračervený teplomer -50° +380°C | 13.00 € | **12.50 €** | 30.8 % | **25.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 160.00 € | **159.50 €** | 6.9 % | **6.6 %** | 159.90 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 119.50 € | **119.00 €** | 9.4 % | **9.0 %** | 119.42 € | cena podľa najlacnejšieho iného predajcu |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 99.50 € | **99.00 €** | 10.2 % | **9.6 %** | 99.47 € | cena podľa najlacnejšieho iného predajcu |
| Masážní přístroj šíje a zad, REBEL ACTIVE RBA-6005 | 32.50 € | **32.00 €** | 7.2 % | **5.5 %** | 32.48 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSH2003E | 27.50 € | **27.00 €** | 18.6 % | **16.5 %** | 27.49 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9252I | 252.50 € | **252.00 €** | 7.7 % | **7.5 %** | 252.49 € | cena podľa najlacnejšieho iného predajcu |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 59.50 € | **59.00 €** | 19.6 % | **18.6 %** | 59.49 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.50 € | **104.00 €** | 21.4 % | **20.9 %** | 104.49 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO754K | 35.50 € | **35.00 €** | 7.0 % | **5.5 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač Domo DO 221 SV | 120.50 € | **120.00 €** | 9.1 % | **8.6 %** | 120.50 € | cena podľa najlacnejšieho iného predajcu |
| Žehlička Domo DO7059S | 35.50 € | **35.00 €** | 7.0 % | **5.5 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá TRUTHEAR Gate (biele) | 27.50 € | **27.00 €** | 41.5 % | **38.9 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá TRUTHEAR Gate (čierne) | 27.50 € | **27.00 €** | 41.5 % | **38.9 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá TRUTHEAR Gate s mikrofónom (biele) | 27.50 € | **27.00 €** | 34.1 % | **31.7 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, strieborná... | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.61 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.90 € | **212.50 €** | 37.7 % | **37.5 %** | 212.61 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.61 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, strieborná ... | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.61 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, zlatá) | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.61 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 212.90 € | **212.50 €** | 37.4 % | **37.2 %** | 212.61 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2407 | 66.90 € | **66.50 €** | 6.1 % | **5.5 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 soundbar | 141.90 € | **141.50 €** | 24.0 % | **23.7 %** | 141.72 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 181.90 € | **181.50 €** | 10.5 % | **10.2 %** | 181.73 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 181.90 € | **181.50 €** | 10.5 % | **10.2 %** | 181.73 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 66.90 € | **66.50 €** | 36.1 % | **35.3 %** | 66.85 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 80.90 € | **80.50 €** | 8.7 % | **8.2 %** | 80.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor, Light... | 4.70 € | **4.30 €** | 66.1 % | **52.0 %** | 4.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor, Lightni... | 2.80 € | **2.40 €** | 75.1 % | **50.1 %** | 2.47 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C/Lightning kábel, USB-C konektor, Light... | 3.30 € | **2.90 €** | 81.3 % | **59.3 %** | 2.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.80 € | **7.40 €** | 34.6 % | **27.7 %** | 7.49 € | cena podľa najlacnejšieho iného predajcu |
| Akupresurní podložka REBEL ACTIVE RBA-6011-GL 72x42c... | 23.90 € | **23.50 €** | 12.8 % | **11.0 %** | 23.72 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT sušiak na bielizeň QUARTETT Duo | 18.90 € | **18.50 €** | 12.1 % | **9.7 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Domo DO9215AV | 31.90 € | **31.50 €** | 7.0 % | **5.7 %** | 31.89 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacia dóza G21,2 l, marinovacia | 22.90 € | **22.50 €** | 16.2 % | **14.2 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 31.90 € | **31.50 €** | 12.9 % | **11.5 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 630.90 € | **630.50 €** | 38.5 % | **38.4 %** | 630.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB kábel, USB 2.0 A konektor, USB B micro k... | 3.40 € | **3.20 €** | 60.7 % | **51.3 %** | 3.27 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 Ultimate grafitovo-čierne vyhotovenie | 271.00 € | **270.90 €** | 16.5 % | **16.5 %** | 270.94 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 21.00 € | **20.90 €** | 9.4 % | **8.9 %** | 20.97 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová zváračka fólií TEESA V100 | 22.00 € | **21.90 €** | 6.1 % | **5.6 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **43.90 €** | 5.8 % | **5.5 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 43.00 € | **42.90 €** | 11.5 % | **11.2 %** | 42.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **51.90 €** | 6.4 % | **6.2 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový okrúhly lampáš so žiarovkou s micro L... | 5.90 € | **5.80 €** | 21.7 % | **19.7 %** | 5.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový oválny lampáš so žiarovkou s micro LE... | 5.40 € | **5.30 €** | 20.9 % | **18.7 %** | 5.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.90 € | **2.80 €** | 41.2 % | **36.3 %** | 2.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.40 € | **2.30 €** | 36.4 % | **30.8 %** | 2.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 1.90 € | **1.80 €** | 44.4 % | **36.8 %** | 1.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový lampáš s LED sviečkou, teplá biela, 3... | 6.10 € | **6.00 €** | 21.6 % | **19.6 %** | 6.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový lampáš so žiarovkou s micro LED, tepl... | 5.50 € | **5.40 €** | 21.5 % | **19.3 %** | 5.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C + USB-A fast charger GaN 20W PD | 7.80 € | **7.70 €** | 47.1 % | **45.2 %** | 7.74 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.50 €** | 38.0 % | **35.0 %** | 4.60 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 126.00 € | **125.90 €** | 20.0 % | **19.9 %** | 125.92 € | cena podľa najlacnejšieho iného predajcu |
| Varná doska Plynový sporák ISEASY MGBS-604D so 4 hor... | 102.00 € | **101.90 €** | 13.5 % | **13.4 %** | 101.94 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7344H | 110.00 € | **109.90 €** | 9.3 % | **9.2 %** | 110.00 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7345H | 147.00 € | **146.90 €** | 9.6 % | **9.5 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač Domo DO228SV | 120.00 € | **119.90 €** | 8.3 % | **8.2 %** | 120.00 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /čierne/ 0000/3998 | 127.00 € | **126.90 €** | 11.6 % | **11.5 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 156.00 € | **155.90 €** | 11.6 % | **11.5 %** | 156.00 € | cena podľa najlacnejšieho iného predajcu |

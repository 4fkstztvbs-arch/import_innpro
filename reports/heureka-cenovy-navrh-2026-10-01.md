# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-01

Vstup: `premiumstore-sk_2026-10-01_07-27.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6921**
- Návrh **zvýšiť** cenu: **152** produktov
- Návrh **znížiť** cenu: **463** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6306** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **42**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **484**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (152)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Pro 24 GEN 3 GT2402 | 1192.90 € | **1449.90 €** | 15.0 % | **39.8 %** | 1450.00 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped DeerRun S500 Pro (čierny) | 246.50 € | **318.50 €** | 15.1 % | **48.7 %** | 318.70 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 1000 | 439.50 € | **497.00 €** | 10.1 % | **24.5 %** | 497.23 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal iSteady MT3 Pro | 331.90 € | **377.00 €** | 15.0 % | **30.7 %** | 377.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight kúpeľňový radiátor 500W | 130.00 € | **173.90 €** | 4.8 % | **40.2 %** | 174.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 252.90 € | **294.50 €** | 15.0 % | **33.9 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, strieborná) | 252.90 € | **294.50 €** | 15.0 % | **33.9 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 253.50 € | **294.50 €** | 14.9 % | **33.5 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, čierna) | 253.50 € | **294.50 €** | 15.1 % | **33.7 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 253.50 € | **294.50 €** | 15.0 % | **33.6 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 253.50 € | **294.50 €** | 15.0 % | **33.6 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, strieborná) | 253.50 € | **294.50 €** | 14.9 % | **33.5 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 253.50 € | **294.50 €** | 14.9 % | **33.5 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, čierna) | 253.50 € | **294.50 €** | 14.9 % | **33.5 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, zlatá) | 253.50 € | **294.50 €** | 14.9 % | **33.5 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 253.50 € | **294.50 €** | 14.9 % | **33.5 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, strieborná) | 254.90 € | **294.50 €** | 15.0 % | **32.9 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 254.90 € | **294.50 €** | 15.0 % | **32.9 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, čierna) | 254.90 € | **294.50 €** | 15.0 % | **32.9 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, čierna) | 254.90 € | **294.50 €** | 15.0 % | **32.9 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR001-89 70L chladnička na nápoje (čierna) | 183.50 € | **222.00 €** | 15.0 % | **39.1 %** | 222.30 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pix Cut 2 v 1 | 268.50 € | **306.50 €** | 15.1 % | **31.4 %** | 306.80 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 177.90 € | **209.00 €** | 15.1 % | **35.2 %** | 209.40 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 178.00 € | **209.00 €** | 14.9 % | **34.9 %** | 209.40 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 178.00 € | **209.00 €** | 14.9 % | **34.9 %** | 209.40 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 178.00 € | **209.00 €** | 14.9 % | **34.9 %** | 209.40 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, strieborná ... | 178.00 € | **209.00 €** | 14.9 % | **34.9 %** | 209.40 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 8, zlatá) | 178.00 € | **209.00 €** | 14.9 % | **34.9 %** | 209.40 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 178.00 € | **209.00 €** | 14.9 % | **34.9 %** | 209.40 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE Pro 2 XR | 325.00 € | **353.50 €** | 13.2 % | **23.2 %** | 353.86 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 273.50 € | **294.00 €** | 5.1 % | **13.0 %** | 294.12 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagRound 3 držiak s MgS FIXMRO3-BK | 22.50 € | **41.50 €** | 12.1 % | **106.7 %** | 41.69 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT6000 99,9 Wh štartér | 119.00 € | **138.00 €** | 15.0 % | **33.4 %** | 138.20 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 284.90 € | **299.90 €** | 15.3 % | **21.4 %** | 299.96 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 255.00 € | **269.90 €** | 14.9 % | **21.6 %** | 270.00 € | cena podľa najlacnejšieho iného predajcu |
| Kryt kamery so svorkou na HDMI kábel pre Sony FX3/FX... | 48.50 € | **62.00 €** | 14.8 % | **46.7 %** | 62.40 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátorový vertikálny vysávač ULTENIC U20 s funkc... | 133.00 € | **146.00 €** | 14.8 % | **26.1 %** | 146.20 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HW-702B 9 W UV externý filter | 71.00 € | **84.00 €** | 14.8 % | **35.8 %** | 84.23 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 112.50 € | **124.90 €** | 6.5 % | **18.3 %** | 125.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri 2 Combo | 358.90 € | **371.00 €** | 8.9 % | **12.5 %** | 371.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 43.90 € | **56.00 €** | 15.4 % | **47.2 %** | 56.30 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 210.50 € | **222.00 €** | 14.9 % | **21.2 %** | 222.30 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.50 € | **67.00 €** | 15.3 % | **39.1 %** | 67.48 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 143.00 € | **154.00 €** | 12.9 % | **21.6 %** | 154.20 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 158.90 € | **168.50 €** | 15.0 % | **21.9 %** | 168.60 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 332.00 € | **341.00 €** | 5.2 % | **8.0 %** | 341.39 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 69.00 € | **78.00 €** | 6.4 % | **20.3 %** | 78.46 € | cena podľa najlacnejšieho iného predajcu |
| Edifier SS02 znamená reproduktory Edifier S1000MKII ... | 109.50 € | **118.00 €** | 15.1 % | **24.0 %** | 118.40 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 87.50 € | **96.00 €** | 10.4 % | **21.1 %** | 96.44 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT262E – bezkontaktný detektor poradia fáz | 88.50 € | **96.90 €** | 14.9 % | **25.8 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Stojan JMGO pre modely N1S SE, Nano a PicoPlay+ | 112.90 € | **121.00 €** | 15.0 % | **23.2 %** | 121.30 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS4 štartér do auta | 77.50 € | **84.50 €** | 15.1 % | **25.5 %** | 84.60 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08WT | 14.50 € | **21.50 €** | 10.7 % | **64.1 %** | 21.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight trubica pre GL05-100 | 13.00 € | **19.50 €** | 49.5 % | **124.2 %** | 19.55 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Nočné svetlo D1 Matter Smart na nočný stolík | 59.00 € | **65.50 €** | 14.6 % | **27.2 %** | 65.80 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS230 PRO DP5 PRO Mini Bike Pump | 48.50 € | **54.50 €** | 5.9 % | **19.0 %** | 54.71 € | cena podľa najlacnejšieho iného predajcu |
| GARRETT Kovová lopatka na piesok | 57.50 € | **63.00 €** | 14.9 % | **25.9 %** | 63.30 € | cena podľa najlacnejšieho iného predajcu |
| Elektrické čerpadlo Cycplus A14 | 28.50 € | **34.00 €** | 5.4 % | **25.8 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFGV8080 Softbox | 57.50 € | **62.90 €** | 15.1 % | **26.0 %** | 62.91 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285M (čierna) | 50.90 € | **56.00 €** | 15.3 % | **26.8 %** | 56.30 € | cena podľa najlacnejšieho iného predajcu |
| Multimeter Uni-T UT256 | 27.50 € | **32.50 €** | 12.9 % | **33.4 %** | 32.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 28.00 € | **33.00 €** | 45.5 % | **71.4 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V803, 12 000 mAh | 124.50 € | **129.00 €** | 38.9 % | **43.9 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Meetion Myš GW24 Tri-Mode, růžová | 21.50 € | **26.00 €** | 11.6 % | **35.0 %** | 26.20 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-01 | 22.00 € | **26.50 €** | 14.1 % | **37.4 %** | 26.80 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-10 | 27.00 € | **31.50 €** | 14.4 % | **33.5 %** | 31.80 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT371 | 65.90 € | **70.00 €** | 15.3 % | **22.5 %** | 70.10 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 37.50 € | **41.50 €** | 15.4 % | **27.7 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **31.50 €** | 15.6 % | **32.4 %** | 31.79 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 139.00 € | **143.00 €** | 22.5 % | **26.0 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| ETA AQUAMIST 1268 90000 | 28.50 € | **32.50 €** | 11.6 % | **27.2 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight koaxiálny kábel CC120, sáčok, 20m | 6.30 € | **10.00 €** | 54.7 % | **145.6 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 18.50 € | **22.00 €** | 14.0 % | **35.6 %** | 22.30 € | cena podľa najlacnejšieho iného predajcu |
| Meetion klávesnice HESTIA drátová  US | 18.50 € | **22.00 €** | 12.9 % | **34.3 %** | 22.39 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6182PS4 | 353.50 € | **356.90 €** | 5.1 % | **6.1 %** | 357.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight doplnkový diaľkový ovládač pre GSM alarmy 1D... | 12.00 € | **15.00 €** | 39.4 % | **74.2 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.00 € | **17.00 €** | 14.3 % | **38.8 %** | 17.38 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 134.00 € | **137.00 €** | 11.6 % | **14.1 %** | 137.42 € | cena podľa najlacnejšieho iného predajcu |
| PBT Keycap + Cable Set - Black - US/UK | 67.00 € | **69.90 €** | 10.1 % | **14.8 %** | 70.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy FIDC X602/CA IDEA | 165.00 € | **167.90 €** | 5.1 % | **6.9 %** | 168.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 324.90 € | **327.50 €** | 5.0 % | **5.9 %** | 327.84 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS1 PRO POCKET PRO AIRBANK – mini pumpa na b... | 54.90 € | **57.50 €** | 5.1 % | **10.1 %** | 57.77 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit LinoLift 500 85359 | 52.90 € | **55.50 €** | 5.5 % | **10.6 %** | 55.90 € | cena podľa najlacnejšieho iného predajcu |
| Candy CDG1S514DW | 243.90 € | **246.50 €** | 5.0 % | **6.2 %** | 246.69 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R60 eXtremo Black Orange | 89.00 € | **91.50 €** | 10.1 % | **13.2 %** | 91.56 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 168.50 € | **171.00 €** | 5.0 % | **6.6 %** | 171.13 € | cena podľa najlacnejšieho iného predajcu |
| Sada 2 vianočných LED svetielok Solight 1V287, 15/20... | 13.50 € | **15.90 €** | 55.2 % | **82.8 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 45.90 € | **48.00 €** | 17.3 % | **22.6 %** | 48.02 € | cena podľa najlacnejšieho iného predajcu |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **29.00 €** | 15.2 % | **24.2 %** | 29.30 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.00 € | **32.00 €** | 6.5 % | **13.6 %** | 32.08 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 49B8G-S | 316.90 € | **318.90 €** | 5.1 % | **5.7 %** | 319.00 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Samsung EVO Plus microSD 2021, 128 GB... | 17.50 € | **19.50 €** | 14.1 % | **27.1 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 16.50 € | **18.50 €** | 16.5 % | **30.7 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 80.00 € | **82.00 €** | 7.2 % | **9.8 %** | 82.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight časovač so súmrakovým senzorom, 230V, 3600W | 8.60 € | **10.50 €** | 45.1 % | **77.1 %** | 10.52 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 LED sviečok s časovačom Solight 1V284, 6,5 cm... | 10.00 € | **11.90 €** | 53.4 % | **82.5 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 25.90 € | **27.50 €** | 11.5 % | **18.4 %** | 27.55 € | cena podľa najlacnejšieho iného predajcu |
| Girmi CT1000 Elektrický nůž | 26.90 € | **28.50 €** | 11.1 % | **17.7 %** | 28.73 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 10.90 € | **12.50 €** | 6.3 % | **21.9 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Elektronický boxerský terč HMS TB03 s LED, Bluetooth... | 79.90 € | **81.50 €** | 3.5 % | **5.6 %** | 67.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačové puzdro Darkflash Aquarius Acrylic | 25.00 € | **26.50 €** | 7.4 % | **13.8 %** | 26.80 € | cena podľa najlacnejšieho iného predajcu |
| ETA Verto II 1423 90000 bílý/zlatý | 30.50 € | **32.00 €** | 10.3 % | **15.7 %** | 32.40 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Samsung EVO Plus microSD 2021, 64 GB ... | 33.50 € | **35.00 €** | 115.5 % | **125.1 %** | 35.41 € | cena podľa najlacnejšieho iného predajcu |
| Maono BA92 Boom Arm Black | 50.50 € | **52.00 €** | 15.2 % | **18.7 %** | 52.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny COAX zdierka priama - typ Taliansko,... | 5.10 € | **6.50 €** | 49.7 % | **90.8 %** | 6.59 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic Siena 180 Easy | 25.90 € | **27.00 €** | 7.1 % | **11.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 46.90 € | **48.00 €** | 5.7 % | **8.2 %** | 48.10 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Rýžovar 8 v 1 RK7321F1 | 57.90 € | **59.00 €** | 10.2 % | **12.3 %** | 59.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 31.90 € | **33.00 €** | 38.2 % | **42.9 %** | 33.48 € | cena podľa najlacnejšieho iného predajcu |
| Biely vianočný LED lampáš Solight 1V288, 20 cm, časo... | 5.90 € | **6.90 €** | 55.2 % | **81.5 %** | 6.95 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 80.50 € | **81.50 €** | 10.9 % | **12.3 %** | 81.60 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P206RAF200 | 28.50 € | **29.50 €** | 5.8 % | **9.5 %** | 29.67 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 40.50 € | **41.50 €** | 7.3 % | **10.0 %** | 41.71 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Cycplus AS280PRO | 44.00 € | **45.00 €** | 22.0 % | **24.7 %** | 45.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 21.50 € | **22.50 €** | 9.2 % | **14.3 %** | 22.76 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus M2 bicycle computer | 28.50 € | **29.50 €** | 10.0 % | **13.8 %** | 29.77 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 37.00 € | **38.00 €** | 6.3 % | **9.1 %** | 38.39 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice GARNI 750 | 113.50 € | **114.50 €** | 9.9 % | **10.9 %** | 114.89 € | cena podľa najlacnejšieho iného predajcu |
| Ozvučovací systém KRUGER MATZ KM1712 | 177.00 € | **178.00 €** | 25.2 % | **25.9 %** | 178.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 35.00 € | **35.90 €** | 34.4 % | **37.9 %** | 35.98 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (čierna) | 19.00 € | **19.90 €** | 13.9 % | **19.3 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (sivá) | 19.00 € | **19.90 €** | 13.9 % | **19.3 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (sivá) | 19.00 € | **19.90 €** | 13.9 % | **19.3 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 26.90 € | **27.50 €** | 7.2 % | **9.6 %** | 27.54 € | cena podľa najlacnejšieho iného predajcu |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **48.50 €** | 15.3 % | **16.7 %** | 48.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 5.80 € | **6.40 €** | 26.8 % | **39.9 %** | 6.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.50 €** | 27.7 % | **37.4 %** | 8.60 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 144.90 € | **145.50 €** | 7.6 % | **8.0 %** | 145.89 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (biely) | 13.00 € | **13.50 €** | 7.1 % | **11.2 %** | 13.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.50 €** | 12.4 % | **31.1 %** | 3.58 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 351.00 € | **351.50 €** | 35.2 % | **35.4 %** | 351.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **11.00 €** | 26.5 % | **32.5 %** | 11.20 € | cena podľa najlacnejšieho iného predajcu |
| Smart WiFi Touch Wall Switch Sonoff TX T5 4C (4-chan... | 24.50 € | **25.00 €** | 15.3 % | **17.7 %** | 25.20 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.00 € | **16.50 €** | 7.2 % | **10.5 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare XREAL 1S pre rozšírenú realitu | 496.00 € | **496.50 €** | 7.8 % | **7.9 %** | 496.87 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.00 € | **18.50 €** | 6.7 % | **9.7 %** | 18.88 € | cena podľa najlacnejšieho iného predajcu |
| BWT filtrační stanice Aqualizer | 63.00 € | **63.50 €** | 15.0 % | **15.9 %** | 63.89 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08BK | 14.50 € | **15.00 €** | 10.7 % | **14.5 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight elektrický sušiak uterákov 130W | 107.00 € | **107.50 €** | 5.0 % | **5.5 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Midland D10 DMR digital radio | 190.50 € | **190.90 €** | 26.0 % | **26.3 %** | 190.96 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar JBL Bar 2.0 All-In-One (MK2) | 198.50 € | **198.90 €** | 8.2 % | **8.4 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.50 € | **9.90 €** | 19.7 % | **24.8 %** | 9.97 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na cvičení Rebel Active RBA-3159-2PU na jóg... | 45.50 € | **45.90 €** | 72.0 % | **73.5 %** | 45.92 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 48SB8C-S | 298.50 € | **298.90 €** | 5.1 % | **5.3 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 7.50 € | **7.80 €** | 20.5 % | **25.3 %** | 7.88 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Buxton BHP 7300 BLACK BT | 21.90 € | **22.00 €** | 10.5 % | **11.0 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.74 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 7.80 € | **7.90 €** | 5.0 % | **6.3 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 8.80 € | **8.90 €** | 6.5 % | **7.7 %** | 8.91 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 13.90 € | **14.00 €** | 16.6 % | **17.5 %** | 14.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.70 € | **7.80 €** | 32.1 % | **33.8 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 125.90 € | **126.00 €** | 42.7 % | **42.8 %** | 126.14 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (463)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 6503.00 € | **6188.50 €** | 10.3 % | **5.0 %** | 5820.77 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC GMKtec EVO-X2 AMD Ryzen AI Max+ 395 - 128 GB... | 4543.50 € | **4237.90 €** | 15.0 % | **7.3 %** | 4238.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO O2S Ultra | 2398.00 € | **2189.90 €** | 15.0 % | **5.0 %** | 2162.03 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 771.50 € | **619.50 €** | 41.4 % | **13.5 %** | 619.70 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier S880DB MKII (tmavé drevo) | 446.90 € | **320.50 €** | 70.9 % | **22.5 %** | 320.70 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LONGER LK10 Plus | 500.00 € | **374.00 €** | 56.5 % | **17.1 %** | 374.40 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RS070 Lamborghini Essenza SCV12 Sim-Racing volant | 1357.90 € | **1239.90 €** | 15.0 % | **5.0 %** | 1157.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termovízna kamera THERMAL MASTER DV2 | 558.90 € | **450.50 €** | 44.7 % | **16.7 %** | 450.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP600IIIV | 366.90 € | **276.50 €** | 39.5 % | **5.2 %** | 260.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 908.00 € | **826.00 €** | 18.3 % | **7.6 %** | 826.10 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality RaptorX | 2907.00 € | **2825.90 €** | 19.5 % | **16.2 %** | 2826.00 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 515.90 € | **436.00 €** | 31.3 % | **11.0 %** | 436.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 356.00 € | **276.90 €** | 40.5 % | **9.3 %** | 277.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2199.90 € | **2120.90 €** | 17.1 % | **12.9 %** | 2121.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 361.50 € | **287.50 €** | 32.6 % | **5.5 %** | 287.90 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec EVO-X1- AMD Ryzen AI 9 HX 370 - 32 GB... | 1248.50 € | **1179.90 €** | 15.0 % | **8.7 %** | 1180.00 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 630.50 € | **567.90 €** | 38.4 % | **24.7 %** | 568.00 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 400.50 € | **343.50 €** | 38.2 % | **18.6 %** | 343.60 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare RayNeo X3 Pro AR | 1587.50 € | **1531.90 €** | 17.8 % | **13.7 %** | 1532.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - na bubne, zásuvky 400V ... | 137.90 € | **84.90 €** | 71.2 % | **5.4 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 608.90 € | **556.00 €** | 15.0 % | **5.0 %** | 531.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava stabilizátora iSteady MT3 Pro | 614.50 € | **562.50 €** | 39.3 % | **27.5 %** | 562.80 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot ULTENIC T20 PRO | 278.90 € | **226.90 €** | 41.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 400.50 € | **352.00 €** | 32.1 % | **16.1 %** | 352.50 € | cena podľa najlacnejšieho iného predajcu |
| MSI Cyborg 15 (A13VE-2217CZ) | 1044.50 € | **997.00 €** | 10.0 % | **5.0 %** | 961.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 218.90 € | **173.50 €** | 46.6 % | **16.2 %** | 173.60 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet SmartCam C960 Ultra | 126.90 € | **81.50 €** | 91.7 % | **23.1 %** | 81.63 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 773.90 € | **732.00 €** | 15.0 % | **8.8 %** | 732.50 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell White Snow Mist 1/4 do Real Locking VND | 79.90 € | **39.00 €** | 149.8 % | **22.0 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell ND4 do Real Locking VND | 79.90 € | **39.00 €** | 149.8 % | **22.0 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell ND32/Black Mist 1/4 do Real Locking VND | 79.00 € | **39.00 €** | 147.0 % | **22.0 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec EVO-T1- Intel Ultra 9 285H- 64 GB RAM... | 1761.50 € | **1721.90 €** | 15.0 % | **12.4 %** | 1722.00 € | cena podľa najlacnejšieho iného predajcu |
| Parabolický dáždnik GODOX UB-165S | 99.50 € | **65.50 €** | 60.7 % | **5.8 %** | 62.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový gravírovací stroj xTool S1 40 W 2 v 1, zákl... | 1755.90 € | **1721.90 €** | 15.6 % | **13.3 %** | 1722.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 Max | 425.00 € | **391.50 €** | 14.1 % | **5.1 %** | 383.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 64.90 € | **31.50 €** | 162.0 % | **27.2 %** | 31.80 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 345.50 € | **316.00 €** | 14.9 % | **5.1 %** | 316.37 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 310.00 € | **281.50 €** | 22.1 % | **10.9 %** | 281.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 181.50 € | **153.50 €** | 24.4 % | **5.2 %** | 139.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Creality Halot X1 Combo | 500.00 € | **474.00 €** | 13.8 % | **7.9 %** | 474.10 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 131.50 € | **107.00 €** | 36.5 % | **11.0 %** | 107.40 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Olympus | 238.90 € | **215.00 €** | 22.6 % | **10.3 %** | 215.10 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Olympus | 148.00 € | **125.50 €** | 24.2 % | **5.3 %** | 125.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vodné chladenie pre procesor DE360 (čierne) | 126.90 € | **105.00 €** | 37.3 % | **13.6 %** | 105.40 € | cena podľa najlacnejšieho iného predajcu |
| SAMSUNG RB34C600EWW/EF | 471.90 € | **450.50 €** | 10.0 % | **5.0 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-Link Tapo RV30 Max Plus | 460.50 € | **439.50 €** | 10.1 % | **5.1 %** | 160.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GODOX UB-165W parabolický odrazový dáždnik | 84.00 € | **63.50 €** | 38.9 % | **5.0 %** | 62.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX FT-AD600PRO | 176.90 € | **156.50 €** | 40.5 % | **24.3 %** | 156.70 € | cena podľa najlacnejšieho iného predajcu |
| Batéria MOVA pre model G70 | 116.90 € | **96.50 €** | 48.2 % | **22.3 %** | 96.80 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 116.90 € | **96.90 €** | 42.9 % | **18.4 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Anamorfný objektív Freewell 1,33x s bajonetom 17 mm | 236.90 € | **217.00 €** | 30.9 % | **19.9 %** | 217.30 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa D156 (hnedý) 15,6" digitálny fotorámik | 152.00 € | **133.00 €** | 38.8 % | **21.5 %** | 133.30 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash UV360 (čierny) | 249.50 € | **231.00 €** | 39.4 % | **29.1 %** | 231.20 € | cena podľa najlacnejšieho iného predajcu |
| Creality Falcon A1 10W laserový gravírovací stroj | 474.50 € | **456.50 €** | 24.2 % | **19.5 %** | 456.79 € | cena podľa najlacnejšieho iného predajcu |
| Tester obvodov Ancel PB500 | 99.50 € | **82.00 €** | 46.8 % | **21.0 %** | 82.10 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 260.50 € | **243.00 €** | 24.0 % | **15.7 %** | 243.20 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT600S | 101.90 € | **84.50 €** | 41.3 % | **17.2 %** | 84.60 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 148.00 € | **131.00 €** | 34.0 % | **18.6 %** | 131.30 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX FH50R | 238.90 € | **222.00 €** | 27.4 % | **18.3 %** | 222.30 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT302D+ | 79.50 € | **63.00 €** | 51.0 % | **19.6 %** | 63.30 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 137.50 € | **121.00 €** | 31.7 % | **15.9 %** | 121.30 € | cena podľa najlacnejšieho iného predajcu |
| Súprava ultratenkého LED kruhového osvetlenia Neewer... | 226.90 € | **210.50 €** | 48.3 % | **37.6 %** | 210.80 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 103.00 € | **86.90 €** | 38.6 % | **17.0 %** | 87.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM IT12 Max Core Ultra 5 125U 16 GB 500 ... | 747.50 € | **732.00 €** | 15.0 % | **12.6 %** | 732.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DRX70 MESH + 4 RGB venti... | 63.90 € | **48.50 €** | 39.5 % | **5.9 %** | 48.03 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 148.00 € | **133.00 €** | 31.3 % | **18.0 %** | 133.30 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 700.00 € | **685.00 €** | 15.4 % | **12.9 %** | 685.30 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 124.00 € | **109.00 €** | 38.9 % | **22.1 %** | 109.40 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Minix P165 s technológiou GaN, 3 ... | 69.50 € | **55.00 €** | 51.0 % | **19.5 %** | 55.30 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 148.00 € | **134.00 €** | 24.2 % | **12.4 %** | 134.10 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Fujifilm | 148.00 € | **134.00 €** | 24.2 % | **12.4 %** | 134.10 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE240 (biele) | 97.00 € | **83.00 €** | 36.0 % | **16.4 %** | 83.10 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz 45 cm (biely) | 77.00 € | **63.00 €** | 30.1 % | **6.5 %** | 63.30 € | cena podľa najlacnejšieho iného predajcu |
| Smartmi Evaporative Humidifier 3 Lite | 115.00 € | **101.00 €** | 44.6 % | **27.0 %** | 101.50 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 146.90 € | **133.00 €** | 36.6 % | **23.7 %** | 133.30 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné fotochromatické slnečné okuliare BlitzW... | 76.50 € | **63.00 €** | 60.4 % | **32.1 %** | 63.30 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-10000-S URZ3438-10000-... | 166.50 € | **153.50 €** | 13.9 % | **5.0 %** | 133.43 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GODOX AD-S85S Softbox | 88.90 € | **75.90 €** | 23.2 % | **5.2 %** | 71.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Grafický tablet Huion H1161 | 88.00 € | **75.00 €** | 36.5 % | **16.3 %** | 75.10 € | cena podľa najlacnejšieho iného predajcu |
| AMICA 510CE1.30P(W) | 282.90 € | **270.00 €** | 10.0 % | **5.0 %** | 259.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B70... | 104.50 € | **91.90 €** | 39.5 % | **22.7 %** | 92.00 € | cena podľa najlacnejšieho iného predajcu |
| Creality Ender-3 V3 Plus 3D Printer | 355.00 € | **342.50 €** | 17.5 % | **13.3 %** | 342.79 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped MERACH MR-S28B1 | 556.00 € | **544.00 €** | 23.7 % | **21.0 %** | 544.50 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDSN36540XP | 456.50 € | **444.90 €** | 10.0 % | **7.2 %** | 445.00 € | cena podľa najlacnejšieho iného predajcu |
| Samsung A175 Galaxy A17 128 GB Blue | 247.50 € | **235.90 €** | 10.2 % | **5.0 %** | 160.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na starostlivosť o srsť domácich zvierat Pet... | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 106.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1074.50 € | **1062.90 €** | 8.8 % | **7.6 %** | 1063.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit TBOX-Plus 4+64 GB | 130.50 € | **119.00 €** | 16.2 % | **6.0 %** | 119.40 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600G | 103.00 € | **91.90 €** | 39.5 % | **24.5 %** | 92.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec Mini PC M3 Intel i5-12450H 16 GB RAM + 512 GB... | 554.90 € | **544.00 €** | 15.0 % | **12.8 %** | 544.50 € | cena podľa najlacnejšieho iného predajcu |
| Stojan pre herný volant PXN-A11 | 94.90 € | **84.50 €** | 31.7 % | **17.3 %** | 84.60 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 98.90 € | **89.00 €** | 30.6 % | **17.5 %** | 89.50 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 94.00 € | **84.50 €** | 30.7 % | **17.5 %** | 84.60 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na riadidlá PXN-A10 | 94.00 € | **84.50 €** | 37.9 % | **24.0 %** | 84.60 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS9 – multifunkčný štartér do auta | 86.90 € | **77.50 €** | 45.7 % | **29.9 %** | 77.60 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS1 Pro – štartér do auta | 84.00 € | **75.00 €** | 40.5 % | **25.4 %** | 75.10 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 76.90 € | **68.00 €** | 36.7 % | **20.9 %** | 68.40 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DT20 s meracou páskou s ... | 59.50 € | **51.00 €** | 36.0 % | **16.5 %** | 51.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 59.50 € | **51.00 €** | 47.0 % | **26.0 %** | 51.30 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá EDIFIER W830NB (slonovinová farba) | 70.50 € | **62.00 €** | 30.5 % | **14.8 %** | 62.30 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W830NB (čierne) | 70.50 € | **62.00 €** | 30.5 % | **14.8 %** | 62.30 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L1350 | 186.90 € | **178.50 €** | 10.0 % | **5.1 %** | 161.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight infražiarič na terasu 2000W | 67.90 € | **59.90 €** | 29.0 % | **13.8 %** | 59.99 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1100 2.0 (čierne) | 81.50 € | **73.50 €** | 19.4 % | **7.7 %** | 73.60 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 37.00 € | **29.00 €** | 57.7 % | **23.6 %** | 29.30 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 375.00 € | **367.00 €** | 20.0 % | **17.4 %** | 367.40 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 126.00 € | **118.00 €** | 18.7 % | **11.2 %** | 118.40 € | cena podľa najlacnejšieho iného predajcu |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 69.90 € | **62.00 €** | 31.0 % | **16.2 %** | 62.30 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 Predfilter | 128.90 € | **121.00 €** | 39.3 % | **30.7 %** | 121.30 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 84.50 € | **76.90 €** | 34.2 % | **22.1 %** | 76.97 € | cena podľa najlacnejšieho iného predajcu |
| Systémy kvapkového a rozprašovacieho zavlažovania | 44.00 € | **36.50 €** | 35.5 % | **12.4 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Redmi A7 Pro 4/128GB Mist Blue | 166.90 € | **159.50 €** | 10.1 % | **5.3 %** | 132.93 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk Neewer Q4 s batériou | 396.90 € | **389.50 €** | 41.1 % | **38.5 %** | 389.89 € | cena podľa najlacnejšieho iného predajcu |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 79.50 € | **72.50 €** | 30.6 % | **19.1 %** | 72.60 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič vody Darkflash DN 360 (biely) | 72.50 € | **65.50 €** | 23.0 % | **11.1 %** | 65.80 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 94.00 € | **87.00 €** | 39.4 % | **29.0 %** | 87.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (biela) + 3 vent... | 79.00 € | **72.50 €** | 16.1 % | **6.6 %** | 72.60 € | cena podľa najlacnejšieho iného predajcu |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 33.00 € | **26.50 €** | 48.6 % | **19.4 %** | 26.80 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň QIDI Max 4 | 1224.00 € | **1217.90 €** | 19.4 % | **18.8 %** | 1218.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA-CF (čierny) | 22.50 € | **16.50 €** | 45.4 % | **6.6 %** | 14.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf BW-S27 160 W, 2xUSB-A, 4xUSB-C, 15 W wirel... | 47.50 € | **41.50 €** | 41.3 % | **23.4 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 87.00 € | **81.00 €** | 29.8 % | **20.8 %** | 81.30 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 87.00 € | **81.00 €** | 25.2 % | **16.6 %** | 81.30 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostic Scanner OBD2 Ancel AS500/AC105 | 45.00 € | **39.00 €** | 36.3 % | **18.1 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell ND32 do Real Locking VND | 45.00 € | **39.00 €** | 40.7 % | **22.0 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 326.00 € | **320.00 €** | 12.2 % | **10.1 %** | 320.48 € | cena podľa najlacnejšieho iného predajcu |
| Vrecúško na prach MOVA pre stanicu G70 | 41.00 € | **35.00 €** | 44.2 % | **23.1 %** | 35.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 104.00 € | **98.00 €** | 20.6 % | **13.6 %** | 98.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (béžové) | 104.00 € | **98.00 €** | 28.1 % | **20.7 %** | 98.50 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 49 mm s vekom pre Real Lock... | 29.90 € | **24.00 €** | 51.9 % | **22.0 %** | 24.30 € | cena podľa najlacnejšieho iného predajcu |
| Apple AirPods 4 BT bílá | 125.50 € | **119.90 €** | 10.2 % | **5.3 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 64.00 € | **58.50 €** | 32.0 % | **20.7 %** | 58.80 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 64.00 € | **58.50 €** | 32.3 % | **21.0 %** | 58.80 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 126.50 € | **121.00 €** | 24.4 % | **19.0 %** | 121.30 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 54.00 € | **48.50 €** | 36.5 % | **22.6 %** | 48.80 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927/01, černá | 210.50 € | **205.00 €** | 10.2 % | **7.3 %** | 205.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada 6 filtrov Freewell Bright Day pre DJI Flip | 39.50 € | **34.00 €** | 37.4 % | **18.3 %** | 34.40 € | cena podľa najlacnejšieho iného predajcu |
| Kempingová lampa Superfire T57 – 7 režimov | 18.00 € | **12.90 €** | 49.3 % | **7.0 %** | 9.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny multimeter so svietidlom Habotest HT118C, ... | 30.50 € | **25.50 €** | 43.4 % | **19.9 %** | 25.80 € | cena podľa najlacnejšieho iného predajcu |
| Wireless charger 3in1 BW-IW30 Blitzwolf | 36.50 € | **31.50 €** | 41.4 % | **22.1 %** | 31.80 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 136.00 € | **131.00 €** | 23.0 % | **18.5 %** | 131.30 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB4xyzf-CS 4-zónová indukčná varná doska | 136.00 € | **131.00 €** | 23.1 % | **18.5 %** | 131.30 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 36.50 € | **31.50 €** | 26.4 % | **9.1 %** | 31.84 € | cena podľa najlacnejšieho iného predajcu |
| PLA drevené vlákno (indický dub) | 17.00 € | **12.00 €** | 65.9 % | **17.1 %** | 12.38 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 299.50 € | **294.50 €** | 35.8 % | **33.5 %** | 294.90 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY-T Android TV 4K UHD Android TV multimed... | 98.00 € | **93.00 €** | 38.2 % | **31.1 %** | 93.41 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.90 € | **137.00 €** | 22.4 % | **18.1 %** | 137.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 105.90 € | **101.00 €** | 34.8 % | **28.6 %** | 101.50 € | cena podľa najlacnejšieho iného predajcu |
| JBL PBM100 Black | 38.90 € | **34.00 €** | 20.5 % | **5.3 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 34.50 € | **29.90 €** | 27.6 % | **10.6 %** | 29.91 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI DSO-TC3 SigGen 3-v-1 tester tranzistorov – ru... | 50.50 € | **46.00 €** | 15.5 % | **5.2 %** | 40.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stolná lampa YEELIGHT D1 Matter | 77.00 € | **72.50 €** | 32.4 % | **24.7 %** | 72.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 59.00 € | **54.50 €** | 35.9 % | **25.5 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – filter so strednou ú... | 147.50 € | **143.00 €** | 34.3 % | **30.2 %** | 143.20 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Ultra hustý uhlíkový... | 149.50 € | **145.00 €** | 29.7 % | **25.8 %** | 145.20 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – vysokoúčinný filter | 147.50 € | **143.00 €** | 34.3 % | **30.2 %** | 143.20 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LK10 s väčším formátom | 291.00 € | **286.50 €** | 19.1 % | **17.3 %** | 286.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 90.00 € | **85.50 €** | 11.4 % | **5.8 %** | 85.90 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-72CB4xyP200-LBHA keramická varná doska ... | 113.50 € | **109.00 €** | 20.8 % | **16.1 %** | 109.40 € | cena podľa najlacnejšieho iného predajcu |
| USB WiFi adaptér duální VU+ 2,4/5GHz/600Mbps s ANTÉN... | 36.00 € | **31.90 €** | 19.0 % | **5.4 %** | 29.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| UTRAI JS20 – multifunkčný štartér do auta | 84.00 € | **80.00 €** | 36.9 % | **30.4 %** | 80.10 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Fujifilm | 93.00 € | **89.00 €** | 23.4 % | **18.1 %** | 89.10 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Ultra-thin Motion Sensor Closet Light A50 | 24.00 € | **20.00 €** | 48.8 % | **24.0 %** | 20.20 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell UV do Real Locking VND | 43.00 € | **39.00 €** | 34.5 % | **22.0 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE 150 | 196.00 € | **192.00 €** | 21.1 % | **18.7 %** | 192.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 9.40 € | **5.90 €** | 98.0 % | **24.3 %** | 5.99 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 254.50 € | **251.00 €** | 16.9 % | **15.3 %** | 251.10 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 254.50 € | **251.00 €** | 25.7 % | **24.0 %** | 251.10 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing Vision GS RS064 (PC) | 748.50 € | **745.00 €** | 18.1 % | **17.6 %** | 745.10 € | cena podľa najlacnejšieho iného predajcu |
| Sekvenčná prevodovka PXN | 146.50 € | **143.00 €** | 15.8 % | **13.0 %** | 143.20 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny decibelomer Habotest HT622B USB A/C | 27.50 € | **24.00 €** | 36.9 % | **19.5 %** | 24.21 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 66.50 € | **63.00 €** | 35.3 % | **28.2 %** | 63.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (biela) | 53.50 € | **50.00 €** | 14.8 % | **7.3 %** | 50.30 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD-L pre AD200 | 30.00 € | **26.50 €** | 38.6 % | **22.4 %** | 26.80 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit LinoLift 600 Quick Start 85282 | 78.50 € | **75.00 €** | 13.3 % | **8.3 %** | 75.32 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Sunlu PLA+ (čierny) | 18.00 € | **14.50 €** | 59.9 % | **28.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti štekaniu Rojeco 1000M PD521 ... | 42.50 € | **39.00 €** | 40.6 % | **29.0 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 68.90 € | **65.50 €** | 36.1 % | **29.4 %** | 65.80 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 670NC white | 66.90 € | **63.90 €** | 15.7 % | **10.5 %** | 64.00 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-NEVE 4K UHD Streaming Dongle | 68.50 € | **65.50 €** | 10.3 % | **5.4 %** | 65.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 5769.50 € | **5766.50 €** | 8.2 % | **8.1 %** | 5766.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny rámik Arzopa D10 10,1" (tmavohnedý) | 75.50 € | **72.50 €** | 19.3 % | **14.5 %** | 72.60 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 27.00 € | **24.00 €** | 38.2 % | **22.9 %** | 24.30 € | cena podľa najlacnejšieho iného predajcu |
| Váleček MOVA pre stanicu G70 | 20.50 € | **17.50 €** | 44.3 % | **23.2 %** | 17.80 € | cena podľa najlacnejšieho iného predajcu |
| Metal Protective Cage With Lens Cover PULUZ for Inst... | 27.00 € | **24.00 €** | 31.7 % | **17.0 %** | 24.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (čierna) + 4 venti... | 104.00 € | **101.00 €** | 22.2 % | **18.7 %** | 101.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 176.90 € | **174.00 €** | 49.1 % | **46.6 %** | 174.30 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický posilovač svalů ABS MASTER Pro | 40.50 € | **37.90 €** | 12.5 % | **5.3 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filter nádoby na dym LaserPecker Air Purifier | 94.50 € | **91.90 €** | 27.2 % | **23.7 %** | 92.00 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.50 € | **86.90 €** | 39.9 % | **35.8 %** | 87.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 135 | 60.00 € | **57.50 €** | 10.2 % | **5.6 %** | 46.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje SVC180FW | 96.00 € | **93.50 €** | 11.2 % | **8.3 %** | 93.59 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 134.50 € | **132.00 €** | 39.4 % | **36.8 %** | 132.10 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (biela) + 4 ventil... | 82.50 € | **80.00 €** | 19.3 % | **15.6 %** | 80.10 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 248.50 € | **246.00 €** | 23.4 % | **22.2 %** | 246.10 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 173.00 € | **170.50 €** | 20.6 % | **18.8 %** | 170.60 € | cena podľa najlacnejšieho iného predajcu |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 25.00 € | **22.50 €** | 38.9 % | **25.0 %** | 22.80 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V65 Smartwatch (Gray) | 31.50 € | **29.00 €** | 16.7 % | **7.5 %** | 29.30 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier P12 2.0 (hnedé) | 61.50 € | **59.00 €** | 15.9 % | **11.2 %** | 59.30 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 1,5 m ... | 29.00 € | **26.50 €** | 39.9 % | **27.9 %** | 26.80 € | cena podľa najlacnejšieho iného predajcu |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 41.50 € | **39.00 €** | 37.4 % | **29.1 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter s aktívnym uhlím | 192.50 € | **190.00 €** | 28.7 % | **27.1 %** | 190.50 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.50 € | **178.00 €** | 23.2 % | **21.5 %** | 178.50 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame L50 Ultra AE | 74.90 € | **72.50 €** | 26.9 % | **22.9 %** | 72.60 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame L50s Pro Ultra | 74.90 € | **72.50 €** | 26.9 % | **22.9 %** | 72.60 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 50.90 € | **48.50 €** | 39.9 % | **33.3 %** | 48.80 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate 7 | 211.00 € | **208.90 €** | 21.3 % | **20.1 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (biely) | 99.00 € | **96.90 €** | 20.2 % | **17.6 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 99.00 € | **96.90 €** | 19.2 % | **16.6 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY WFC510W bílá | 43.50 € | **41.50 €** | 10.2 % | **5.2 %** | 40.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY WFC510Y žlutá | 43.50 € | **41.50 €** | 10.2 % | **5.2 %** | 40.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Perlegear PGTVS26-US 32-70" TV mount | 29.50 € | **27.50 €** | 21.0 % | **12.8 %** | 27.51 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 28.50 € | **26.50 €** | 17.5 % | **9.3 %** | 26.52 € | cena podľa najlacnejšieho iného predajcu |
| Sequential Shifter Moza Racing SGP RS059 | 140.00 € | **138.00 €** | 19.3 % | **17.6 %** | 138.20 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 18.00 € | **16.00 €** | 31.7 % | **17.1 %** | 16.30 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 31.00 € | **29.00 €** | 32.2 % | **23.6 %** | 29.30 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 48.00 € | **46.00 €** | 32.7 % | **27.2 %** | 46.30 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná poistka ZigBee Avatto ZWCB16 | 20.50 € | **18.50 €** | 38.1 % | **24.6 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (biela) | 26.00 € | **24.00 €** | 32.9 % | **22.7 %** | 24.30 € | cena podľa najlacnejšieho iného predajcu |
| Pilot GODOX RC-A6 | 16.50 € | **14.50 €** | 52.4 % | **34.0 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 38.50 € | **36.50 €** | 29.8 % | **23.1 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada pedálov PXN PD HM - brzda a plyn (Windows 7/8/1... | 76.90 € | **75.00 €** | 22.6 % | **19.6 %** | 75.10 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S160 na detekciu úniku | 99.90 € | **98.00 €** | 15.0 % | **12.8 %** | 98.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO „Bright Day“ – 4... | 49.90 € | **48.00 €** | 28.6 % | **23.7 %** | 48.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 26.90 € | **25.00 €** | 18.3 % | **10.0 %** | 25.49 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Junior Retro blesk | 71.50 € | **70.00 €** | 22.0 % | **19.5 %** | 70.10 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2506.50 € | **2505.00 €** | 14.0 % | **13.9 %** | 2505.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálne hodiny s bluetooth synchronizáciou | 13.00 € | **11.50 €** | 32.4 % | **17.2 %** | 11.63 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Neewer R06 s okrúhlym LED osvetlením pre sel... | 27.50 € | **26.00 €** | 46.4 % | **38.4 %** | 26.20 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 43.00 € | **41.50 €** | 38.6 % | **33.7 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX ES30 pre e-šport | 144.50 € | **143.00 €** | 24.0 % | **22.7 %** | 143.20 € | cena podľa najlacnejšieho iného predajcu |
| Softbox GODOX SB1520, univerzálny typ, 15x20 cm | 12.00 € | **10.50 €** | 23.0 % | **7.6 %** | 10.71 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 181.00 € | **179.50 €** | 16.9 % | **16.0 %** | 179.79 € | cena podľa najlacnejšieho iného predajcu |
| Hodinky Colmi V89 Smartwatch (strieborné) | 28.00 € | **26.50 €** | 17.5 % | **11.2 %** | 26.80 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 21.00 € | **19.50 €** | 35.7 % | **26.0 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 21.00 € | **19.50 €** | 36.3 % | **26.5 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 33.00 € | **31.50 €** | 12.4 % | **7.2 %** | 31.80 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 33.00 € | **31.50 €** | 12.4 % | **7.2 %** | 31.80 € | cena podľa najlacnejšieho iného predajcu |
| Filter MOVA pre model I10 | 16.00 € | **14.50 €** | 36.1 % | **23.3 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie procesora Darkflash E400 PLUS (biely) | 35.50 € | **34.00 €** | 38.4 % | **32.6 %** | 34.40 € | cena podľa najlacnejšieho iného predajcu |
| Meross MOP320MA-EU WiFi inteligentná napájacia lišta... | 40.50 € | **39.00 €** | 35.9 % | **30.9 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight nabíjačka USB-C, 90W, PD fast charger | 16.50 € | **15.00 €** | 42.6 % | **29.6 %** | 15.49 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 862 Senior Radio | 113.90 € | **112.50 €** | 10.4 % | **9.0 %** | 112.88 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Zametač koberců REGULUS | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 24.92 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 49.90 € | **48.50 €** | 22.4 % | **19.0 %** | 48.80 € | cena podľa najlacnejšieho iného predajcu |
| Gel Blaster Gellet Depot | 24.50 € | **23.50 €** | 11.7 % | **7.2 %** | 14.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Čistič prachu DUSTY Telescope 2 | 15.50 € | **14.50 €** | 13.5 % | **6.2 %** | 6.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO9142EK | 22.90 € | **21.90 €** | 11.6 % | **6.7 %** | 20.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtová herná myš Onikuma CW905 (čierna) | 13.50 € | **12.50 €** | 14.9 % | **6.4 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reflektor GODOX RFT-4 | 18.90 € | **17.90 €** | 23.5 % | **17.0 %** | 17.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight batériová kamera WiFi so solárnym panelom | 58.50 € | **57.50 €** | 34.7 % | **32.4 %** | 57.55 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Canon | 90.00 € | **89.00 €** | 19.4 % | **18.1 %** | 89.10 € | cena podľa najlacnejšieho iného predajcu |
| Batéria NEEWER, 3450 mAh, 14,54 V, 50 Wh | 116.90 € | **115.90 €** | 43.1 % | **41.9 %** | 116.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 249.90 € | **248.90 €** | 9.3 % | **8.9 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 226.90 € | **225.90 €** | 40893.7 % | **40713.0 %** | 226.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 664.90 € | **663.90 €** | 120026.5 % | **119845.8 %** | 664.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 362.90 € | **361.90 €** | 65464.6 % | **65283.9 %** | 362.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 28.50 € | **27.50 €** | 21.3 % | **17.1 %** | 27.62 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 88.50 € | **87.50 €** | 15.1 % | **13.8 %** | 87.68 € | cena podľa najlacnejšieho iného predajcu |
| Vodný chladič CPU Darkflash DV240S (biely) | 69.00 € | **68.00 €** | 16.1 % | **14.4 %** | 68.20 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 276.00 € | **275.00 €** | 8.1 % | **7.7 %** | 275.29 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 17.50 € | **16.50 €** | 45.9 % | **37.6 %** | 16.80 € | cena podľa najlacnejšieho iného predajcu |
| 4-zónový zavlažovací ovládač RainPoint ITV447 | 62.00 € | **61.00 €** | 39.4 % | **37.2 %** | 61.30 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-EC2 8-in-1 Power Cube (4xAC / 2 x USB-A... | 20.50 € | **19.50 €** | 39.0 % | **32.2 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1441.50 € | **1440.50 €** | 7.3 % | **7.2 %** | 1440.84 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RO 3985 EA | 76.00 € | **75.00 €** | 10.9 % | **9.5 %** | 75.38 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 40.00 € | **39.00 €** | 26.8 % | **23.7 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 22.50 € | **21.50 €** | 28.7 % | **23.0 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 37.50 € | **36.50 €** | 43.5 % | **39.7 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 Pro USB-C Mini | 297.50 € | **296.50 €** | 38.5 % | **38.0 %** | 296.90 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER T2Max | 332.50 € | **331.50 €** | 30.5 % | **30.1 %** | 331.90 € | cena podľa najlacnejšieho iného predajcu |
| Kábel USB-A do Lightning MFI 0,35 m PGYTECH (P-GM-115) | 15.00 € | **14.00 €** | 34.0 % | **25.1 %** | 14.40 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 109.00 € | **108.00 €** | 18.5 % | **17.4 %** | 108.40 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D30+ s Bluetooth | 201.00 € | **200.00 €** | 21.4 % | **20.8 %** | 200.40 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna doska Moza Racing RS089 | 34.00 € | **33.00 €** | 15.1 % | **11.7 %** | 33.47 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash HM1 | 80.00 € | **79.00 €** | 17.8 % | **16.3 %** | 79.50 € | cena podľa najlacnejšieho iného predajcu |
| ETA Fragranza 0066 90000 nerez | 16.90 € | **15.90 €** | 11.9 % | **5.3 %** | 13.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Neakasa M1/M1 Lite litter box waste bags | 16.90 € | **15.90 €** | 42.7 % | **34.2 %** | 15.96 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT126A Digitálny univerzálny multimeter | 26.90 € | **26.00 €** | 18.8 % | **14.8 %** | 26.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 56.90 € | **56.00 €** | 18.1 % | **16.3 %** | 56.30 € | cena podľa najlacnejšieho iného predajcu |
| Delený filter ND64/ND32 FREEWELL pre DJI Mavic 4 Pro | 29.90 € | **29.00 €** | 24.8 % | **21.0 %** | 29.30 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 51.90 € | **51.00 €** | 20.6 % | **18.5 %** | 51.30 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.90 € | **39.00 €** | 28.1 % | **25.2 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 389.90 € | **389.00 €** | 10.0 % | **9.8 %** | 389.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 36.50 € | **35.90 €** | 64.6 % | **61.9 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK TL-WR820N WiFi N Router | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 10.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 6000K... | 5.30 € | **4.70 €** | 96.8 % | **74.5 %** | 4.75 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sada Combi Classic mop 56792 | 14.00 € | **13.50 €** | 10.6 % | **6.7 %** | 13.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.00 € | **70.50 €** | 13.1 % | **12.3 %** | 70.60 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 345.50 € | **345.00 €** | 11.6 % | **11.4 %** | 345.18 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 345.50 € | **345.00 €** | 14.3 % | **14.1 %** | 345.18 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 319.50 € | **319.00 €** | 12.8 % | **12.6 %** | 319.19 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 231.50 € | **231.00 €** | 21.5 % | **21.3 %** | 231.20 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1019.50 € | **1019.00 €** | 10.6 % | **10.6 %** | 1019.22 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 465.50 € | **465.00 €** | 18.1 % | **18.0 %** | 465.22 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 253.00 € | **252.50 €** | 14.7 % | **14.5 %** | 252.75 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 295.50 € | **295.00 €** | 12.8 % | **12.6 %** | 295.27 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR TWIN - Black/Silver | 59.00 € | **58.50 €** | 21.5 % | **20.5 %** | 58.78 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 286.50 € | **286.00 €** | 16.1 % | **15.9 %** | 286.28 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.50 € | **13.00 €** | 27.0 % | **22.3 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Puluz PU612B Studio Broadcast | 19.00 € | **18.50 €** | 27.5 % | **24.1 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Matter Over Wi-Fi nástenný spínač SONOF... | 17.50 € | **17.00 €** | 30.2 % | **26.5 %** | 17.30 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 133.50 € | **133.00 €** | 27.1 % | **26.6 %** | 133.30 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.50 € | **17.00 €** | 28.5 % | **24.9 %** | 17.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.00 € | **58.50 €** | 21.6 % | **20.6 %** | 58.80 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 49.00 € | **48.50 €** | 26.2 % | **24.9 %** | 48.80 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 s 17 mm uchytením | 49.00 € | **48.50 €** | 26.3 % | **25.0 %** | 48.80 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (biela) | 23.50 € | **23.00 €** | 29.5 % | **26.8 %** | 23.30 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (čierna) | 23.50 € | **23.00 €** | 37.5 % | **34.6 %** | 23.30 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 49.00 € | **48.50 €** | 24.4 % | **23.1 %** | 48.80 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 20.00 € | **19.50 €** | 39.3 % | **35.8 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro PULUZ pre Insta360 X5 | 32.00 € | **31.50 €** | 18.8 % | **17.0 %** | 31.80 € | cena podľa najlacnejšieho iného predajcu |
| RS065 Moza Racing RS077 sada na uchytenie manžety | 23.50 € | **23.00 €** | 21.1 % | **18.5 %** | 23.30 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 29.50 € | **29.00 €** | 20.5 % | **18.5 %** | 29.30 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 63.50 € | **63.00 €** | 19.4 % | **18.4 %** | 63.30 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Flextail Tiny Helio 700Z (oranžová) | 23.00 € | **22.50 €** | 19.7 % | **17.1 %** | 22.80 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 565.00 € | **564.50 €** | 6.1 % | **6.0 %** | 564.83 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.50 € | **137.00 €** | 15.2 % | **14.8 %** | 137.38 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 344.50 € | **344.00 €** | 20.2 % | **20.1 %** | 344.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Struhadlo 4 v 1 COMFORTLINE | 14.00 € | **13.50 €** | 27.5 % | **22.9 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 115.00 € | **114.50 €** | 7.5 % | **7.1 %** | 114.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 99.50 € | **99.00 €** | 6.4 % | **5.8 %** | 99.39 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI FNB48P BT Tester USB portov s Bluetooth | 37.00 € | **36.50 €** | 14.3 % | **12.8 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 105.00 € | **104.50 €** | 9.1 % | **8.6 %** | 104.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 46.50 € | **46.00 €** | 11.6 % | **10.4 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 318.50 € | **318.00 €** | 18.6 % | **18.4 %** | 318.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.00 € | **238.50 €** | 11.9 % | **11.7 %** | 238.89 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia Uni-T RCD UT582+ | 101.50 € | **101.00 €** | 11.4 % | **10.9 %** | 101.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 131.50 € | **131.00 €** | 9.7 % | **9.3 %** | 131.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 472.00 € | **471.50 €** | 9.1 % | **9.0 %** | 471.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 933.00 € | **932.50 €** | 18.6 % | **18.5 %** | 932.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 90.00 € | **89.50 €** | 15.4 % | **14.8 %** | 89.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.00 € | **89.50 €** | 14.5 % | **13.9 %** | 89.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT665P-5m endoskop | 45.00 € | **44.50 €** | 32.7 % | **31.2 %** | 44.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 82.50 € | **82.00 €** | 9.1 % | **8.5 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 163.00 € | **162.50 €** | 10.1 % | **9.8 %** | 162.89 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 188.00 € | **187.50 €** | 11.7 % | **11.4 %** | 187.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 321.00 € | **320.50 €** | 10.0 % | **9.8 %** | 320.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 87.00 € | **86.50 €** | 12.1 % | **11.5 %** | 86.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 256.50 € | **256.00 €** | 13.5 % | **13.3 %** | 256.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 292.00 € | **291.50 €** | 18.2 % | **18.0 %** | 291.89 € | cena podľa najlacnejšieho iného predajcu |
| 4-kanálový teplomer Uni-T UT325F | 98.50 € | **98.00 €** | 8.5 % | **7.9 %** | 98.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 122.50 € | **122.00 €** | 14.3 % | **13.8 %** | 122.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 146.50 € | **146.00 €** | 10.0 % | **9.6 %** | 146.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1286.50 € | **1286.00 €** | 7.3 % | **7.2 %** | 1286.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 53.00 € | **52.50 €** | 10.7 % | **9.7 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 297.00 € | **296.50 €** | 47.2 % | **47.0 %** | 296.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 89.00 € | **88.50 €** | 11.1 % | **10.5 %** | 88.89 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 53.00 € | **52.50 €** | 6.4 % | **5.4 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Combi Clean M + náhr. Static | 21.00 € | **20.50 €** | 10.1 % | **7.5 %** | 20.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 158.50 € | **158.00 €** | 12.3 % | **12.0 %** | 158.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 256.50 € | **256.00 €** | 7.0 % | **6.8 %** | 256.39 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 276.50 € | **276.00 €** | 7.1 % | **6.9 %** | 276.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 72.50 € | **72.00 €** | 10.0 % | **9.3 %** | 72.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 27.50 € | **27.00 €** | 9.6 % | **7.6 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 728.00 € | **727.50 €** | 9.1 % | **9.0 %** | 727.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 137.50 € | **137.00 €** | 20.2 % | **19.8 %** | 137.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 80.50 € | **80.00 €** | 38.3 % | **37.5 %** | 80.39 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 181.50 € | **181.00 €** | 21.4 % | **21.0 %** | 181.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3411 1600W 12V nástenný | 237.50 € | **237.00 €** | 8.1 % | **7.9 %** | 237.39 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 131.00 € | **130.50 €** | 5.7 % | **5.3 %** | 130.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3407 1200W 12V | 186.50 € | **186.00 €** | 7.0 % | **6.7 %** | 186.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj REBEL POWER 800 LFP4 RB-4027 500W 12V | 89.00 € | **88.50 €** | 6.7 % | **6.1 %** | 88.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 203.50 € | **203.00 €** | 7.6 % | **7.3 %** | 203.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 268.00 € | **267.50 €** | 6.5 % | **6.3 %** | 267.89 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 62.50 € | **62.00 €** | 16.6 % | **15.6 %** | 62.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 318.00 € | **317.50 €** | 6.8 % | **6.6 %** | 317.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 666.00 € | **665.50 €** | 7.7 % | **7.6 %** | 665.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 695.00 € | **694.50 €** | 8.5 % | **8.5 %** | 694.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 83.50 € | **83.00 €** | 6.5 % | **5.9 %** | 83.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.50 € | **162.00 €** | 21.2 % | **20.8 %** | 162.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 104.00 € | **103.50 €** | 17.2 % | **16.6 %** | 103.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 104.00 € | **103.50 €** | 10.1 % | **9.6 %** | 103.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.50 € | **152.00 €** | 19.3 % | **18.9 %** | 152.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.50 € | **127.00 €** | 17.0 % | **16.5 %** | 127.39 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 409BT | 51.50 € | **51.00 €** | 10.6 % | **9.5 %** | 51.40 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 62.50 € | **62.00 €** | 6.0 % | **5.1 %** | 62.40 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 15.00 € | **14.50 €** | 43.5 % | **38.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 215.50 € | **215.00 €** | 11.8 % | **11.5 %** | 215.42 € | cena podľa najlacnejšieho iného predajcu |
| Letové pedále MOZA Racing AS019 | 344.50 € | **344.00 €** | 6.6 % | **6.4 %** | 344.44 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9283EK | 18.50 € | **18.00 €** | 12.7 % | **9.7 %** | 18.46 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 91.50 € | **91.00 €** | 32.5 % | **31.8 %** | 91.46 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 072L čidlo detekce blesků | 49.50 € | **49.00 €** | 10.4 % | **9.3 %** | 49.48 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS5 – štartér do auta s kompresorom | 105.50 € | **105.00 €** | 22.3 % | **21.7 %** | 105.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 21.50 € | **21.00 €** | 76.0 % | **71.9 %** | 21.49 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40T | 27.50 € | **27.00 €** | 7.0 % | **5.0 %** | 27.49 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 46.50 € | **46.00 €** | 9.0 % | **7.8 %** | 46.49 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 46.50 € | **46.00 €** | 9.0 % | **7.8 %** | 46.49 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 223.50 € | **223.00 €** | 16.7 % | **16.5 %** | 223.49 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 406.50 € | **406.00 €** | 39.4 % | **39.2 %** | 406.49 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 109.50 € | **109.00 €** | 8.8 % | **8.3 %** | 109.49 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 703.50 € | **703.00 €** | 38.1 % | **38.0 %** | 703.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 169.50 € | **169.00 €** | 39.4 % | **39.0 %** | 169.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q6 | 561.50 € | **561.00 €** | 38.2 % | **38.1 %** | 561.49 € | cena podľa najlacnejšieho iného predajcu |
| Lovecký ďalekohľad Mileseey IONJET2 | 233.50 € | **233.00 €** | 36.6 % | **36.3 %** | 233.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell ND pre OSMO 360 – balenie po 3... | 189.50 € | **189.00 €** | 31.8 % | **31.5 %** | 189.49 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 491.50 € | **491.00 €** | 40.6 % | **40.4 %** | 491.49 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN X2 Standard – stabilizátor (biely) | 69.50 € | **69.00 €** | 39.1 % | **38.1 %** | 69.49 € | cena podľa najlacnejšieho iného predajcu |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.50 € | **37.00 €** | 9.4 % | **8.0 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| Stojanový vozík Neewer SW-600, veľkosť M | 37.50 € | **37.00 €** | 39.7 % | **37.9 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 307.50 € | **307.00 €** | 46.6 % | **46.3 %** | 307.49 € | cena podľa najlacnejšieho iného predajcu |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.50 € | **47.00 €** | 8.7 % | **7.6 %** | 47.49 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (biela) | 22.50 € | **22.00 €** | 38.7 % | **35.6 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (čierna) | 22.50 € | **22.00 €** | 28.5 % | **25.6 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Zadná bicyklová lampa Superfire BTL02 – USB, 330 mAh... | 12.50 € | **12.00 €** | 42.9 % | **37.2 %** | 12.49 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 191.50 € | **191.00 €** | 16.3 % | **16.0 %** | 191.50 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 191.50 € | **191.00 €** | 16.3 % | **16.0 %** | 191.50 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 417.50 € | **417.00 €** | 13.5 % | **13.3 %** | 417.50 € | cena podľa najlacnejšieho iného predajcu |
| FIXED s displejem, 4x FIXCG140D-4C1A-BK | 49.50 € | **49.00 €** | 10.8 % | **9.7 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 233.90 € | **233.50 €** | 10.1 % | **9.9 %** | 233.68 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 86.90 € | **86.50 €** | 15.2 % | **14.6 %** | 86.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.90 € | **132.50 €** | 16.4 % | **16.0 %** | 132.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.90 € | **117.50 €** | 23863.4 % | **23782.1 %** | 117.79 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 83.90 € | **83.50 €** | 27.9 % | **27.3 %** | 83.79 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 106.90 € | **106.50 €** | 16.5 % | **16.1 %** | 106.80 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 151.90 € | **151.50 €** | 31.0 % | **30.7 %** | 151.81 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 162.90 € | **162.50 €** | 12.3 % | **12.0 %** | 162.84 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 84.90 € | **84.50 €** | 27.0 % | **26.4 %** | 84.85 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 66.90 € | **66.50 €** | 30.4 % | **29.6 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-775S2 Päťzónový (štvorcový) sklenený ply... | 181.90 € | **181.50 €** | 45.0 % | **44.7 %** | 181.89 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 76.90 € | **76.50 €** | 12.6 % | **12.1 %** | 76.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prepínač WiFi WiFi Sonoff Dual R3 Lite | 11.90 € | **11.50 €** | 30.4 % | **26.0 %** | 11.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT216A digitálny klešťový multimeter | 50.90 € | **50.50 €** | 7.7 % | **6.9 %** | 50.79 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.90 € | **22.50 €** | 14.6 % | **12.6 %** | 22.88 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 52.90 € | **52.50 €** | 9.4 % | **8.6 %** | 52.88 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.90 € | **35.50 €** | 18.4 % | **17.0 %** | 35.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 33.90 € | **33.50 €** | 9.8 % | **8.5 %** | 33.89 € | cena podľa najlacnejšieho iného predajcu |
| Statív s 3D 360° hlavou + držiak na telefón Puluz PU... | 25.90 € | **25.50 €** | 29.7 % | **27.7 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 41.90 € | **41.50 €** | 39.2 % | **37.9 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 41.90 € | **41.50 €** | 8.6 % | **7.6 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre BOBOVR M2 Pro + nabíjacia stanica | 34.90 € | **34.50 €** | 40.2 % | **38.6 %** | 34.89 € | cena podľa najlacnejšieho iného predajcu |
| Teplomer a vlhkomer CO2 SwitchBot Meter Pro | 44.90 € | **44.50 €** | 22.2 % | **21.1 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 36.90 € | **36.50 €** | 19.0 % | **17.7 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 36.90 € | **36.50 €** | 17.7 % | **16.4 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Ochranná puzzle podložka ONE FItness MP10 modro-šedá | 24.90 € | **24.50 €** | 8.0 % | **6.3 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 9W, 1260lm, 6000K,... | 4.00 € | **3.70 €** | 85.8 % | **71.9 %** | 3.79 € | cena podľa najlacnejšieho iného predajcu |
| ECOLUX LED žiarovka 3-pack, klasický tvar, 12W, E27,... | 4.80 € | **4.50 €** | 101.2 % | **88.6 %** | 4.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.30 € | **1.10 €** | 51.0 % | **27.8 %** | 1.18 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 332.00 € | **331.90 €** | 38.9 % | **38.8 %** | 331.99 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 262.00 € | **261.90 €** | 39.5 % | **39.5 %** | 261.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 41.00 € | **40.90 €** | 33.9 % | **33.5 %** | 40.97 € | cena podľa najlacnejšieho iného predajcu |
| Skříň kempingová Cattara 13480 MODICA | 62.00 € | **61.90 €** | 10.4 % | **10.2 %** | 61.97 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na polievanie kvetín v črepníkoch RainPoint ... | 27.00 € | **26.90 €** | 41.6 % | **41.1 %** | 26.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter xTool SafetyPro™ AP2 so strednou účinnosťou | 37.00 € | **36.90 €** | 39.9 % | **39.5 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M01Pro UV AI | 27.00 € | **26.90 €** | 42.0 % | **41.5 %** | 26.99 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9270p bezdrátová klávesnice černá | 37.00 € | **36.90 €** | 7.8 % | **7.5 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 3,8 W, 806lm, 270... | 4.70 € | **4.60 €** | 97.0 % | **92.8 %** | 4.68 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V50-W, 3 m, 20 LED, 3 × ... | 2.70 € | **2.60 €** | 143.9 % | **134.9 %** | 2.70 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.00 € | **165.90 €** | 15.6 % | **15.5 %** | 165.96 € | cena podľa najlacnejšieho iného predajcu |
| Triple monitor mount 17-32" Huanuo HNTS3B-UK | 88.00 € | **87.90 €** | 19.7 % | **19.6 %** | 87.97 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell NEO 2 MEGA KIT – balenie ... | 65.00 € | **64.90 €** | 13.8 % | **13.7 %** | 64.97 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 96.00 € | **95.90 €** | 8.5 % | **8.4 %** | 95.98 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 87.00 € | **86.90 €** | 15.1 % | **15.0 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 159.00 € | **158.90 €** | 39.3 % | **39.2 %** | 158.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 171.00 € | **170.90 €** | 39.4 % | **39.3 %** | 170.99 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 143.00 € | **142.90 €** | 39.0 % | **38.9 %** | 142.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 141.00 € | **140.90 €** | 39.9 % | **39.8 %** | 140.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 66.00 € | **65.90 €** | 39.1 % | **38.9 %** | 65.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY451 bez ventilátorov (... | 76.00 € | **75.90 €** | 36.5 % | **36.3 %** | 75.99 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 183.00 € | **182.90 €** | 5.5 % | **5.5 %** | 182.99 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 183.00 € | **182.90 €** | 5.5 % | **5.5 %** | 182.99 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 83.00 € | **82.90 €** | 33.9 % | **33.7 %** | 82.99 € | cena podľa najlacnejšieho iného predajcu |

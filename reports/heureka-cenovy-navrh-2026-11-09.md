# Návrh na úpravu cien podľa Heureka porovnania — 2026-11-09

Vstup: `premiumstore-sk_2026-11-09_07-24.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6093**
- Návrh **zvýšiť** cenu: **192** produktov
- Návrh **znížiť** cenu: **495** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5406** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **62**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **341**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (192)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **770.00 €** | 26.6 % | **39.2 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **769.50 €** | 3.7 % | **13.1 %** | 784.82 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Robotický vysávač MOVA V50 Ultra Complete (čierny) | 529.50 € | **582.00 €** | 15.0 % | **26.4 %** | 599.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka elektromobilov Besen BS40 22 kW SOLAR-APP | 524.50 € | **576.90 €** | 26.4 % | **39.0 %** | 589.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrický skúter NAVEE ST5 Max | 806.00 € | **855.00 €** | 11.3 % | **18.1 %** | 870.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **534.00 €** | 4.6 % | **15.1 %** | 554.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka elektromobilov Besen BS40 s výkonom 22 kW ... | 480.50 € | **528.00 €** | 26.4 % | **38.9 %** | 539.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka elektromobilov Besen BS40 s výkonom 11 kW ... | 417.00 € | **457.50 €** | 26.4 % | **38.6 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Concept IDV5160wh | 369.90 € | **406.50 €** | 12.5 % | **23.7 %** | 417.51 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor UPERFECT M184T01 | 344.50 € | **378.90 €** | 15.0 % | **26.5 %** | 427.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **330.00 €** | 32.8 % | **45.9 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 296.50 € | **326.00 €** | 15.0 % | **26.5 %** | 337.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **342.00 €** | 15.0 % | **25.5 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **310.50 €** | 27.3 % | **39.7 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 261.00 € | **287.00 €** | 14.9 % | **26.4 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **266.00 €** | 10.8 % | **21.9 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **293.50 €** | 6.2 % | **15.6 %** | 299.61 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava na pripojenie vody pre automatické napĺňanie... | 232.50 € | **255.50 €** | 15.0 % | **26.4 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **271.50 €** | 30.7 % | **41.9 %** | 277.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka SkyRC D750 MIX | 201.00 € | **221.00 €** | 17.0 % | **28.7 %** | 227.98 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **213.90 €** | 4.1 % | **14.5 %** | 220.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **210.50 €** | 4.4 % | **14.8 %** | 221.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **212.50 €** | 4.5 % | **14.1 %** | 217.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| SMALLRIG RC 60B 60 W LED štúdiové osvetlenie | 216.50 € | **233.00 €** | 26.4 % | **36.1 %** | 238.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| beyerdynamic DT 250 250 Ohm | 149.00 € | **163.90 €** | 15.0 % | **26.5 %** | 268.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beyerdynamic MMX 200, čierne | 218.90 € | **232.90 €** | 26.5 % | **34.6 %** | 237.69 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 120.50 € | **132.00 €** | 13.2 % | **24.0 %** | 134.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **127.00 €** | 4.4 % | **14.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Diagnostický skener pre motocykle ANCEL MT310 | 278.90 € | **290.00 €** | 13.5 % | **18.1 %** | 296.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO | 542.50 € | **553.50 €** | 3.0 % | **5.1 %** | 514.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **121.50 €** | 14.9 % | **26.1 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| beyerdynamic DT 252 80 Ohm | 207.50 € | **217.50 €** | 19.9 % | **25.7 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **185.00 €** | 35.1 % | **42.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava batériových dosiek SMALLRIG 4064B V-Mount | 96.00 € | **105.50 €** | 26.5 % | **39.0 %** | 125.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **105.00 €** | 6.2 % | **15.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Teplovzdušná fritéza MOVA FD10s Pro 6L 2000W (čierna) | 87.00 € | **95.50 €** | 25.5 % | **37.8 %** | 101.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Wallbox Qoltec 52723, 22kW, Typ 2, 5 m kabel, 400V, ... | 307.90 € | **316.00 €** | 7.0 % | **9.8 %** | 322.64 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **123.00 €** | 4.4 % | **11.7 %** | 125.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **87.90 €** | 30.9 % | **43.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herní křeslo KRUGER & MATZ GX-150  černo modré | 79.00 € | **86.50 €** | 7.9 % | **18.1 %** | 88.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 77.50 € | **85.00 €** | 5.5 % | **15.7 %** | 87.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Grafický tablet Huion H1161 | 77.00 € | **84.50 €** | 14.7 % | **25.9 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **93.50 €** | 4.2 % | **12.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **77.50 €** | 4.4 % | **14.8 %** | 79.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **114.50 €** | 32.4 % | **40.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko B5RCNA375HXB1 HarvestFresh | 365.50 € | **372.00 €** | 5.8 % | **7.7 %** | 380.06 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **81.90 €** | 6.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje AF1800ST | 65.90 € | **72.00 €** | 10.6 % | **20.8 %** | 93.49 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **67.50 €** | 31.6 % | **44.4 %** | 69.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 259.90 € | **265.90 €** | 15.0 % | **17.6 %** | 271.36 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **68.50 €** | 18.0 % | **29.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **68.50 €** | 35.0 % | **47.9 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 260.00 € | **265.90 €** | 15.0 % | **17.6 %** | 271.36 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **97.90 €** | 34.8 % | **43.0 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| BEKO MGC 20100 W | 59.90 € | **65.50 €** | 5.0 % | **14.8 %** | 69.94 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko FRL5474B | 69.90 € | **75.50 €** | 6.0 % | **14.5 %** | 77.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 57.40 € | **62.90 €** | 30.1 % | **42.6 %** | 64.19 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kryt kamery SMALLRIG Sony ZV-E10 Grip | 57.00 € | **62.50 €** | 15.3 % | **26.5 %** | 65.31 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Electrolux LIB60420CL | 264.50 € | **270.00 €** | 7.2 % | **9.4 %** | 275.66 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ACER Aspire Go 15 (NX.KVBEC.001) | 280.00 € | **285.50 €** | 10.0 % | **12.2 %** | 291.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blesk GODOX AD100Pro II | 287.00 € | **292.50 €** | 13.9 % | **16.0 %** | 298.76 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TEESA TSA9017 teplovzdušný ventilátor s imitací krbu... | 57.00 € | **62.50 €** | 13.9 % | **24.8 %** | 74.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko PSKManGRAY | 55.90 € | **61.00 €** | 10.2 % | **20.3 %** | 69.92 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko Mezikus PCSKM | 62.50 € | **67.50 €** | 15.7 % | **25.0 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko VRT96425VD | 264.00 € | **269.00 €** | 7.3 % | **9.3 %** | 274.92 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 51.50 € | **56.50 €** | 7.0 % | **17.4 %** | 64.19 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| BWT filtrační stanice Aqualizer | 59.90 € | **64.50 €** | 10.4 % | **18.9 %** | 66.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **53.50 €** | 6.1 % | **16.1 %** | 55.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Selfie tyč Puluz pre športové fotoaparáty (čierna) | 69.00 € | **73.00 €** | 30.2 % | **37.7 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava príslušenstva X40 Master | 40.90 € | **44.90 €** | 15.4 % | **26.7 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **43.90 €** | 42.5 % | **56.5 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **42.50 €** | 4.9 % | **14.6 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Alligator 3079B | 44.50 € | **48.00 €** | 20.0 % | **29.4 %** | 49.31 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak Master Grip pre iPhone 17 Pro Max – súprava „... | 90.00 € | **93.50 €** | 13.0 % | **17.3 %** | 95.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ariete Breakfast Blender 576/03 černý | 36.50 € | **40.00 €** | 10.7 % | **21.3 %** | 45.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.00 €** | 5.4 % | **11.7 %** | 56.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje BP1500DE | 86.90 € | **90.00 €** | 10.4 % | **14.4 %** | 92.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| BWT náhradní filtry Mg2+ 12ks + dárek A5 | 46.50 € | **49.50 €** | 10.9 % | **18.0 %** | 50.91 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Záložní zdroj MHPower WPU-1050-12, UPS, 1050W, čistý... | 169.00 € | **172.00 €** | 6.0 % | **7.9 %** | 175.94 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **34.50 €** | 6.1 % | **16.2 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Baterie olověná  12V / 40 Ah  MHPower GE40-12 GEL | 77.00 € | **79.90 €** | 1.7 % | **5.5 %** | 63.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **92.50 €** | 39.0 % | **43.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **140.00 €** | 15.9 % | **18.1 %** | 143.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **34.90 €** | 29.4 % | **39.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LED videolampa SMALLRIG RF 10C | 55.90 € | **58.50 €** | 26.3 % | **32.2 %** | 59.81 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje H45W | 39.50 € | **42.00 €** | 10.1 % | **17.1 %** | 43.03 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Činky REBEL ACTIVE RBA-2340-ST2 vinylové HEX 12kg sa... | 37.50 € | **40.00 €** | 9.2 % | **16.4 %** | 41.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Čistiaca sada DREAME pre model h14 dual | 56.50 € | **59.00 €** | 14.6 % | **19.7 %** | 60.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Multifunkčný modul pre DJI Osmo Mobile | 57.50 € | **60.00 €** | 12.5 % | **17.3 %** | 61.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak Master Grip pre iPhone 17 Pro – štandardná sada | 65.50 € | **68.00 €** | 12.6 % | **16.9 %** | 69.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 27.50 € | **30.00 €** | 33.6 % | **45.8 %** | 31.77 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| NEDIS SAMP42222WT domovní zesilovač (1x vstup, 2x vý... | 25.50 € | **28.00 €** | 36.8 % | **50.2 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá Onikuma GT887 (biele) | 26.50 € | **29.00 €** | 15.0 % | **25.9 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje SIK2200WB | 25.00 € | **27.50 €** | 21.9 % | **34.1 %** | 41.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá ONIKUMA GT836 (biele) | 35.50 € | **37.90 €** | 25.9 % | **34.4 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá ONIKUMA GT836 (čierne) | 35.50 € | **37.90 €** | 25.9 % | **34.4 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **29.50 €** | 40.9 % | **53.1 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Router GL.iNet Mango s podporou Wi-Fi 4 | 30.90 € | **33.00 €** | 6.0 % | **13.2 %** | 34.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| InAkustik 003022010 Star Coil 2x2,5/10m | 22.90 € | **25.00 €** | 10.4 % | **20.5 %** | 31.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ultimea Poseidon R3T Soundbar | 91.90 € | **94.00 €** | 15.1 % | **17.8 %** | 96.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| BoboVR F3 rozhranie pre tvár | 29.50 € | **31.50 €** | 26.0 % | **34.6 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **34.50 €** | 4.8 % | **11.3 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie Polia, 25W, 1350lm, 30cm, 3CCT | 20.50 € | **22.50 €** | 18.7 % | **30.3 %** | 23.87 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie Woody, 25W, 1350lm, 29cm, 3CCT | 23.50 € | **25.50 €** | 19.7 % | **29.9 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal INGENIO Expertise sada 3 ks | 60.50 € | **62.50 €** | 7.3 % | **10.8 %** | 63.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Epicstar balanční deska Black Rock | 66.50 € | **68.50 €** | 8.9 % | **12.2 %** | 70.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Chladič procesora Darkflash DH360D v2 (čierny) | 86.00 € | **88.00 €** | 26.0 % | **29.0 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kryt pre kameru SMALLRIG Osmo Action 5 Pro | 22.50 € | **24.50 €** | 25.9 % | **37.1 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá ONIKUMA GT889 | 23.50 € | **25.50 €** | 16.1 % | **26.0 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Utierky do vysávača MOVA Z50 Ultra | 20.90 € | **22.90 €** | 15.6 % | **26.7 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H168CX (HP 302 Tri-colour XL) | 20.90 € | **22.90 €** | 44.5 % | **58.3 %** | 26.68 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Guzzanti GZ 1535SS | 196.50 € | **198.50 €** | 5.1 % | **6.1 %** | 202.95 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Behringer PMP1680S mixer amplifier whit effect proce... | 320.00 € | **322.00 €** | 15.0 % | **15.7 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje SIH2200BLC | 22.50 € | **24.50 €** | 21.6 % | **32.4 %** | 37.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Autokamera DDPAI MINI Pro Wi-Fi 3K | 47.00 € | **48.90 €** | 26.6 % | **31.7 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **38.90 €** | 7.7 % | **13.2 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.00 € | **22.90 €** | 15.4 % | **25.8 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Slúchadlá Onikuma GT805 (biele) | 29.00 € | **30.90 €** | 25.3 % | **33.6 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KOMA RK01 - Univerzální rotační kartáč | 19.00 € | **20.90 €** | 18.8 % | **30.7 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Resto 95501 Set nožů - 4 kusy | 16.90 € | **18.50 €** | 10.4 % | **20.9 %** | 27.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **41.50 €** | 53.2 % | **59.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Diaľkový spúšťač GODOX X2T TTL pre fotoaparáty Fuji | 57.00 € | **58.50 €** | 14.9 % | **17.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Spúšť blesku GODOX X2T TTL pre fotoaparáty Olympus | 57.00 € | **58.50 €** | 14.9 % | **17.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Spúšť blesku GODOX X2T TTL pre Sony | 57.00 € | **58.50 €** | 14.9 % | **17.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Mikrofón Maono WM622 PBC2 | 45.00 € | **46.50 €** | 16.2 % | **20.1 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal Unlimited pánev 25cm  G2553872 | 34.50 € | **36.00 €** | 9.4 % | **14.2 %** | 37.40 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Garett ROSE Gold Mesh Steel | 64.50 € | **66.00 €** | 5.5 % | **8.0 %** | 67.44 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Softbox SMALLRIG LA-O90 90 cm | 79.50 € | **81.00 €** | 22.1 % | **24.4 %** | 82.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 37.50 € | **38.90 €** | 35.3 % | **40.4 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje SIH1800TQC | 15.90 € | **17.00 €** | 22.3 % | **30.8 %** | 21.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H125 (CZ101AE) | 11.90 € | **13.00 €** | 12.5 % | **22.9 %** | 22.81 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 14.90 € | **15.90 €** | 22.9 % | **31.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 10.50 € | **11.50 €** | 5.9 % | **16.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné okuliare COLMI G06 (hnedé) | 31.50 € | **32.50 €** | 25.9 % | **29.9 %** | 33.78 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Maxxo Party Queen | 27.50 € | **28.50 €** | 5.5 % | **9.3 %** | 29.86 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KOMA HPU1 - Univerzální hubice | 12.50 € | **13.50 €** | 14.4 % | **23.6 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal HB453138 | 32.00 € | **33.00 €** | 11.6 % | **15.0 %** | 34.44 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 10.50 € | **11.50 €** | 19.9 % | **31.3 %** | 12.95 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 12.50 € | **13.50 €** | 23.3 % | **33.2 %** | 14.98 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak na monitor SMALLRIG 3026B | 50.00 € | **51.00 €** | 26.0 % | **28.5 %** | 52.51 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit Žehlicí prkno Air Board Express | 67.00 € | **68.00 €** | 20.9 % | **22.7 %** | 69.65 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 12.50 € | **13.50 €** | 12.8 % | **21.8 %** | 15.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtový ovládač GameSir G7 Pro DD2 | 87.00 € | **88.00 €** | 29.8 % | **31.3 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 10.90 € | **11.90 €** | 6.3 % | **16.0 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **11.90 €** | 9.5 % | **19.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.00 € | **14.00 €** | 14.4 % | **23.2 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blender G21 Comfort Graphite Black | 145.90 € | **146.90 €** | 8.5 % | **9.3 %** | 149.94 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight teplomer, farba čierna | 16.00 € | **17.00 €** | 50.0 % | **59.4 %** | 21.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Diaľkový spúšťač GODOX XproII TTL pre Canon | 88.00 € | **88.90 €** | 15.4 % | **16.6 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Diaľkový spúšť GODOX XproII TTL pre Nikon | 88.00 € | **88.90 €** | 15.4 % | **16.6 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Spúšť blesku GODOX XproII TTL pre Sony | 88.00 € | **88.90 €** | 15.4 % | **16.6 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **30.50 €** | 31.8 % | **35.2 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.80 € | **8.50 €** | 7.8 % | **17.5 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight nástenná lampička CELE, 1x GU10, biela | 7.80 € | **8.50 €** | 8.2 % | **17.9 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 27.90 € | **28.50 €** | 5.6 % | **7.9 %** | 29.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 27.90 € | **28.50 €** | 5.6 % | **7.9 %** | 29.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 14.90 € | **15.50 €** | 29.3 % | **34.5 %** | 16.56 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 58.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterie olověná  12V / 55 Ah  MHPower GE55-12 GEL | 99.50 € | **100.00 €** | 4.5 % | **5.0 %** | 94.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rowenta ZR720004 | 21.00 € | **21.50 €** | 19.3 % | **22.2 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Živica Anycubic ABS-Like 3.0 (čierna) | 21.00 € | **21.50 €** | 23.4 % | **26.3 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Živica Anycubic ABS-Like 3.0 (sivá) | 21.00 € | **21.50 €** | 23.4 % | **26.3 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **15.00 €** | 9.0 % | **12.7 %** | 16.01 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 48.00 € | **48.50 €** | 18.8 % | **20.0 %** | 49.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 17.50 € | **18.00 €** | 33.0 % | **36.8 %** | 19.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kruger & Matz KM1303 | 16.00 € | **16.50 €** | 5.9 % | **9.2 %** | 17.59 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Black&Decker BXSA754E | 46.50 € | **47.00 €** | 16.0 % | **17.2 %** | 48.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 18.50 € | **19.00 €** | 34.1 % | **37.7 %** | 20.15 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Telesin CPL/VND8/UV pre DJI Osmo Action... | 29.00 € | **29.50 €** | 12.6 % | **14.5 %** | 30.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight WIFI zásuvka s meraním spotreby | 11.00 € | **11.50 €** | 25.3 % | **30.9 %** | 12.68 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Rastar R/C auto MercedesBenz Actros + AM | 43.00 € | **43.50 €** | 7.0 % | **8.2 %** | 44.69 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradní předfiltr GARNI PF 45T | 21.50 € | **22.00 €** | 31.8 % | **34.9 %** | 23.23 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filter SMALLRIG CPL 67 mm | 36.50 € | **37.00 €** | 24.7 % | **26.4 %** | 38.28 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 11.50 € | **12.00 €** | 23.8 % | **29.2 %** | 13.28 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| EMEET SmartCam C60E 4K duálna webová kamera | 58.50 € | **59.00 €** | 17.3 % | **18.3 %** | 60.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Telesin CPL/ND8/ND16/ND32 pre DJI Osmo ... | 28.50 € | **29.00 €** | 11.7 % | **13.7 %** | 30.38 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Diaľkový spúšťač GODOX X2T TTL pre Nikon | 57.00 € | **57.50 €** | 14.9 % | **15.9 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak Master Grip pre iPhone 17 Pro Max – Powerbanka | 65.50 € | **66.00 €** | 12.6 % | **13.5 %** | 67.82 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (hnedé) | 99.00 € | **99.50 €** | 14.8 % | **15.4 %** | 101.89 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Behringer P16 HQ 16-kanálový osobný monitorovací mix... | 171.00 € | **171.50 €** | 15.0 % | **15.3 %** | 175.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Victrola VTA-270B-FNT Empire | 169.50 € | **170.00 €** | 10.0 % | **10.3 %** | 173.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Reproduktor Edifier ES300 Bluetooth (biely) | 175.00 € | **175.50 €** | 6.3 % | **6.6 %** | 179.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 175.00 € | **175.50 €** | 6.3 % | **6.6 %** | 179.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **11.90 €** | 10.1 % | **14.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 20.50 € | **20.90 €** | 16.8 % | **19.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 542.50 € | **542.90 €** | 5.0 % | **5.1 %** | 538.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **42.90 €** | 38.6 % | **39.8 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vonkajšia vianočná LED reťaz Solight 1V110-M, 5 m, v... | 5.00 € | **5.20 €** | 23.9 % | **28.9 %** | 6.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **29.90 €** | 36.2 % | **37.0 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED lineárne osvetlenie prepojiteľné, 60W, 5... | 45.90 € | **46.00 €** | 34.7 % | **35.0 %** | 47.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 6.80 € | **6.90 €** | 17.6 % | **19.4 %** | 7.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 9.90 € | **10.00 €** | 24.0 % | **25.3 %** | 11.16 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |

## Návrh znížiť cenu (495)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **534.00 €** | 47.0 % | **16.2 %** | 534.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **485.50 €** | 29.8 % | **5.1 %** | 472.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor BlitzWolf BW-V11 | 375.15 € | **295.50 €** | 33.5 % | **5.2 %** | 291.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **785.90 €** | 32.6 % | **20.7 %** | 785.92 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **294.90 €** | 48.6 % | **18.4 %** | 294.92 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **281.50 €** | 32.7 % | **6.6 %** | 281.71 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Pro | 805.50 € | **744.00 €** | 19.3 % | **10.2 %** | 744.42 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **240.50 €** | 47.7 % | **18.2 %** | 240.88 € | cena podľa najlacnejšieho iného predajcu |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1173.00 € | **1114.00 €** | 26.5 % | **20.1 %** | 1114.29 € | cena podľa najlacnejšieho iného predajcu |
| Stativ SMALLRIG AD-Pro8 s hlavou s olejovým tlmením | 803.00 € | **748.90 €** | 15.0 % | **7.3 %** | 749.00 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **166.50 €** | 39.1 % | **5.1 %** | 157.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C665G KIT 4MPx, vonkajšia, IP PT... | 247.50 € | **195.50 €** | 33.1 % | **5.1 %** | 194.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nástenná nabíjačka Besen pre elektromobily LX30  22 ... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **225.00 €** | 44.0 % | **18.0 %** | 225.25 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **263.00 €** | 26.4 % | **7.4 %** | 263.47 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **180.00 €** | 44.4 % | **15.2 %** | 180.29 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **155.00 €** | 47.6 % | **14.5 %** | 155.38 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **229.90 €** | 25.6 % | **5.1 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vibračný tester Uni-T UT311A | 250.10 € | **209.50 €** | 41.5 % | **18.6 %** | 209.75 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **186.00 €** | 42.8 % | **17.8 %** | 186.38 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **184.50 €** | 42.3 % | **18.1 %** | 184.88 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP211-Bridge KIT vonkajší spoj,... | 178.50 € | **141.50 €** | 32.6 % | **5.1 %** | 141.78 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **181.50 €** | 40.3 % | **18.3 %** | 181.63 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **132.00 €** | 43.8 % | **15.0 %** | 132.50 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **152.50 €** | 27.8 % | **5.1 %** | 145.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **104.50 €** | 50.0 % | **14.1 %** | 104.75 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **179.50 €** | 33.8 % | **13.2 %** | 179.55 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **179.50 €** | 33.5 % | **13.0 %** | 179.55 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **155.50 €** | 25.5 % | **5.2 %** | 141.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **145.50 €** | 45.0 % | **20.4 %** | 145.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **271.00 €** | 32.8 % | **19.8 %** | 271.36 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **125.50 €** | 43.8 % | **16.6 %** | 125.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **271.90 €** | 33.2 % | **20.6 %** | 271.92 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **122.50 €** | 48.4 % | **20.6 %** | 122.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **272.50 €** | 32.9 % | **20.5 %** | 272.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **330.00 €** | 31.9 % | **21.7 %** | 330.39 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **172.50 €** | 39.8 % | **20.6 %** | 172.58 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **99.90 €** | 33.7 % | **5.1 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **82.50 €** | 58.2 % | **19.0 %** | 82.71 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.70 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Router TP-Link TL-ER7206 SafeStream VPN 1x GWAN + 2x... | 124.00 € | **98.00 €** | 32.9 % | **5.0 %** | 98.10 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **143.50 €** | 44.5 % | **22.6 %** | 143.67 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C630 KIT 5MPx, vonkajšia, IP PTZ... | 125.00 € | **99.50 €** | 32.1 % | **5.1 %** | 92.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **154.90 €** | 42.8 % | **22.6 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP653 stropné AP WiFi 6, 1x GLa... | 118.90 € | **94.50 €** | 32.4 % | **5.2 %** | 88.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 293.90 € | **269.90 €** | 18.7 % | **9.0 %** | 269.96 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **148.50 €** | 42.0 % | **22.4 %** | 148.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **223.50 €** | 35.5 % | **22.6 %** | 223.79 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 419.00 € | **395.50 €** | 13.6 % | **7.2 %** | 395.60 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **76.50 €** | 38.1 % | **5.7 %** | 72.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje N62CS2W4 | 501.50 € | **478.50 €** | 10.1 % | **5.0 %** | 467.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ADSL router TP-Link Archer VR2100 VDSL/ADSL MODEM 4x... | 110.50 € | **87.90 €** | 32.5 % | **5.4 %** | 86.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **115.00 €** | 46.2 % | **22.4 %** | 115.33 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **102.90 €** | 49.0 % | **22.6 %** | 103.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **65.90 €** | 41.3 % | **6.9 %** | 65.94 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **129.00 €** | 39.9 % | **20.6 %** | 129.13 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5RCNA416HXBR | 476.00 € | **455.90 €** | 13.5 % | **8.8 %** | 455.97 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 256.00 € | **236.00 €** | 21.0 % | **11.6 %** | 236.31 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| WiFi router TP-Link HX520(1-pack) WiFi6, AX3000, 3x ... | 96.50 € | **77.00 €** | 32.1 % | **5.4 %** | 77.10 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **57.00 €** | 63.8 % | **22.2 %** | 57.25 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **93.50 €** | 45.4 % | **20.5 %** | 93.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **122.50 €** | 35.7 % | **17.5 %** | 122.75 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **281.50 €** | 25.0 % | **17.1 %** | 281.53 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **81.90 €** | 28.6 % | **5.4 %** | 75.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.00 €** | 40.2 % | **12.5 %** | 72.49 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **111.50 €** | 34.0 % | **15.7 %** | 111.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE N61EA2XL4 | 391.50 € | **373.90 €** | 10.0 % | **5.1 %** | 341.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 216.50 € | **198.90 €** | 19.1 % | **9.4 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P11pro | 223.00 € | **205.50 €** | 26.2 % | **16.3 %** | 205.83 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **119.90 €** | 38.2 % | **20.7 %** | 119.96 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 309.90 € | **292.50 €** | 12.6 % | **6.3 %** | 292.77 € | cena podľa najlacnejšieho iného predajcu |
| LED trubicové svietidlo NEEWER TL60 20 W | 146.90 € | **130.00 €** | 38.4 % | **22.5 %** | 130.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **118.50 €** | 37.5 % | **20.5 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **55.50 €** | 50.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.50 €** | 44.8 % | **11.1 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **59.00 €** | 41.2 % | **11.4 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **31.50 €** | 71.1 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **124.90 €** | 22.1 % | **8.6 %** | 124.93 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **59.50 €** | 52.1 % | **20.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **120.00 €** | 36.1 % | **20.7 %** | 120.04 € | cena podľa najlacnejšieho iného predajcu |
| ADSL router TP-Link Archer VR400 VDSL/ADSL MODEM 4xG... | 74.90 € | **59.90 €** | 32.1 % | **5.6 %** | 53.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS1016G 16x GLAN | 71.50 € | **56.50 €** | 33.3 % | **5.3 %** | 50.12 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 65.7 % | **17.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **75.00 €** | 42.8 % | **19.4 %** | 75.46 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **235.50 €** | 34.0 % | **26.2 %** | 235.69 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS124GS 24x GLAN, rack | 70.50 € | **56.00 €** | 32.4 % | **5.2 %** | 55.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **120.90 €** | 35.0 % | **20.6 %** | 120.96 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 470.90 € | **456.50 €** | 12.3 % | **8.8 %** | 456.86 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **111.00 €** | 31.2 % | **16.5 %** | 111.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **103.00 €** | 36.4 % | **20.2 %** | 103.38 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 49.72 € | **35.90 €** | 50.4 % | **8.6 %** | 35.93 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **76.00 €** | 36.8 % | **15.9 %** | 76.25 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link LS1210GP 1x GLAN, 8x GLAN s PoE+, 1x ... | 67.50 € | **53.90 €** | 32.1 % | **5.5 %** | 52.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 338DD | 549.50 € | **536.00 €** | 8.8 % | **6.1 %** | 536.07 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame Aqua10 Ultra Track Complete, Aqua10 U... | 98.90 € | **85.50 €** | 41.8 % | **22.6 %** | 85.63 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **54.00 €** | 42.9 % | **15.0 %** | 54.33 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **49.50 €** | 34.8 % | **6.7 %** | 49.84 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CDIH 1L949 | 263.50 € | **250.50 €** | 13.3 % | **7.7 %** | 250.53 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **61.90 €** | 39.2 % | **15.2 %** | 61.96 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **77.50 €** | 40.2 % | **20.5 %** | 77.63 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco M4 (1-Pack) 2x GLAN/ 300Mbp... | 62.50 € | **49.90 €** | 31.7 % | **5.2 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE450 AP/Extender/Repeater - A... | 63.00 € | **50.50 €** | 31.8 % | **5.6 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy CII647CCAR | 167.00 € | **154.50 €** | 20.0 % | **11.0 %** | 154.71 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **62.50 €** | 25.9 % | **5.1 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava príslušenstva pre robotický vysávač Dreame A... | 64.00 € | **51.90 €** | 51.0 % | **22.5 %** | 52.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **87.90 €** | 37.3 % | **20.7 %** | 87.96 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C675D KIT 2× 2K, vonkajšia, IP P... | 223.90 € | **212.00 €** | 11.9 % | **6.0 %** | 212.18 € | cena podľa najlacnejšieho iného predajcu |
| Sušič vlasov MOVA Master 10 (ružový) | 141.90 € | **130.00 €** | 26.5 % | **15.9 %** | 130.25 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **123.50 €** | 34.2 % | **22.5 %** | 123.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **51.00 €** | 47.1 % | **20.0 %** | 51.08 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 30.6 % | **15.7 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **83.50 €** | 19.4 % | **5.2 %** | 81.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.90 €** | 52.4 % | **16.0 %** | 35.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **55.90 €** | 30.4 % | **8.6 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **38.50 €** | 42.2 % | **10.1 %** | 38.53 € | cena podľa najlacnejšieho iného predajcu |
| Baterie gelová Rebel  BAT0410  12V /100 Ah TRAKČNÍ L... | 250.00 € | **238.90 €** | 10.0 % | **5.1 %** | 215.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu MOVA P10 | 178.90 € | **168.00 €** | 16.0 % | **9.0 %** | 168.01 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **282.00 €** | 22.9 % | **18.3 %** | 282.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **86.50 €** | 35.6 % | **20.4 %** | 86.71 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **227.00 €** | 23.4 % | **17.8 %** | 227.05 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.29 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **126.90 €** | 46.5 % | **35.4 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **82.00 €** | 35.2 % | **20.1 %** | 82.38 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **25.00 €** | 49.8 % | **7.4 %** | 25.20 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **65.00 €** | 33.5 % | **15.9 %** | 65.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **60.00 €** | 29.7 % | **11.7 %** | 60.31 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link Mercusys ME80X AP/Extender/Rep... | 45.90 € | **36.50 €** | 32.6 % | **5.5 %** | 36.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 56.3 % | **21.2 %** | 31.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **71.00 €** | 31.3 % | **16.6 %** | 71.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **28.50 €** | 40.3 % | **6.8 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **104.00 €** | 30.8 % | **20.6 %** | 104.13 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **38.50 €** | 29.1 % | **5.4 %** | 37.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **58.50 €** | 37.7 % | **20.0 %** | 58.83 € | cena podľa najlacnejšieho iného predajcu |
| BROTHER DCP-L2622DW | 182.50 € | **174.00 €** | 10.1 % | **5.0 %** | 169.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal GV 9620E0 | 368.50 € | **360.00 €** | 9.4 % | **6.9 %** | 360.35 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **29.00 €** | 49.3 % | **15.7 %** | 29.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 40.3 % | **8.7 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **21.50 €** | 45.3 % | **5.1 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.50 €** | 37.7 % | **14.9 %** | 41.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.90 €** | 14.9 % | **10.8 %** | 219.97 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.90 €** | 38.3 % | **9.8 %** | 30.96 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 41.2 % | **13.0 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická zubná kefka MOVA Fresh Pro (strieborná) | 27.90 € | **20.00 €** | 70.4 % | **22.2 %** | 20.23 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EC225-G5 AC1300 dual AP, 3x GLAN... | 38.90 € | **31.00 €** | 33.4 % | **6.3 %** | 31.40 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **21.90 €** | 42.7 % | **5.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **41.90 €** | 45.5 % | **22.6 %** | 41.92 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **67.00 €** | 17.3 % | **5.0 %** | 65.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.50 €** | 61.4 % | **22.4 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.50 €** | 42.1 % | **5.8 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **42.00 €** | 42.3 % | **20.2 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.50 €** | 29.4 % | **15.2 %** | 62.52 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **102.00 €** | 29.4 % | **20.4 %** | 102.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 47.4 % | **39.9 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.50 €** | 64.9 % | **18.4 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.90 €** | 78.5 % | **18.0 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **59.50 €** | 22.9 % | **8.9 %** | 59.54 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 71.3 % | **16.2 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **57.00 €** | 31.3 % | **15.9 %** | 57.29 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **35.00 €** | 44.4 % | **18.8 %** | 35.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 39.00 € | **31.50 €** | 43.9 % | **16.2 %** | 31.64 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WR902AC cestovní AC750, AP/ro... | 37.00 € | **29.50 €** | 31.9 % | **5.1 %** | 29.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **26.50 €** | 47.3 % | **14.8 %** | 26.84 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.50 €** | 37.3 % | **19.0 %** | 47.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **25.00 €** | 42.7 % | **10.5 %** | 25.20 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 60.4 % | **16.6 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **37.50 €** | 26.3 % | **6.2 %** | 36.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 64.9 % | **13.3 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 35B1 | 136.50 € | **129.50 €** | 10.9 % | **5.2 %** | 126.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 40.9 % | **14.9 %** | 30.88 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.90 €** | 61.9 % | **22.2 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.50 €** | 32.9 % | **15.7 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 142.00 € | **135.50 €** | 10.4 % | **5.3 %** | 131.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Archer C50 AC1200, AP/router, 4x... | 35.00 € | **28.50 €** | 30.0 % | **5.9 %** | 26.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Čistička vzduchu MOVA Stellar X10 | 78.50 € | **72.00 €** | 26.1 % | **15.7 %** | 72.29 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **13.50 €** | 62.0 % | **9.4 %** | 13.69 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.50 €** | 29.9 % | **15.9 %** | 53.67 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EB61C4DB | 148.90 € | **142.50 €** | 10.0 % | **5.3 %** | 130.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.90 €** | 26.6 % | **9.8 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **23.50 €** | 33.0 % | **5.1 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.50 €** | 40.2 % | **22.7 %** | 43.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.50 €** | 53.5 % | **19.2 %** | 21.63 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **21.00 €** | 36.3 % | **5.4 %** | 20.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **21.00 €** | 36.7 % | **5.7 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 57.4 % | **18.3 %** | 18.88 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Indukční vařič, G1013700, jedn | 74.00 € | **67.90 €** | 14.8 % | **5.3 %** | 64.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.50 €** | 34.1 % | **15.8 %** | 38.58 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **16.50 €** | 47.6 % | **8.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 114.00 € | **108.00 €** | 16.8 % | **10.6 %** | 108.06 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **14.00 €** | 74.0 % | **21.9 %** | 14.13 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **31.50 €** | 28.5 % | **8.1 %** | 31.86 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX35U PLUS AX 1800 adaptér... | 29.90 € | **24.00 €** | 33.2 % | **6.9 %** | 24.10 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.50 €** | 33.8 % | **20.1 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **29.00 €** | 39.4 % | **16.0 %** | 29.21 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight dezinfekčná bezozónová UV lampa 100W | 42.50 € | **36.90 €** | 35.3 % | **17.5 %** | 36.91 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **59.00 €** | 22.4 % | **11.8 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 39.3 % | **31.9 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **118.50 €** | 25.9 % | **20.3 %** | 118.67 € | cena podľa najlacnejšieho iného predajcu |
| Chytrý vypínač TP-Link Tapo S220 svetelný, 2pólový j... | 29.00 € | **23.50 €** | 31.4 % | **6.5 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **116.50 €** | 26.2 % | **20.6 %** | 116.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **51.00 €** | 17.9 % | **6.6 %** | 51.22 € | cena podľa najlacnejšieho iného predajcu |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **49.50 €** | 53.8 % | **38.9 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.00 €** | 37.0 % | **11.0 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **42.00 €** | 35.1 % | **20.4 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 29.00 € | **23.90 €** | 40.7 % | **15.9 %** | 23.96 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX20U AX 1800 adaptér, 2,4... | 27.00 € | **21.90 €** | 32.0 % | **7.1 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 47.1 % | **16.6 %** | 19.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 33.0 % | **5.4 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.90 €** | 32.9 % | **16.0 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 64.00 € | **59.00 €** | 22.7 % | **13.2 %** | 59.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 138.50 € | **133.50 €** | 15.8 % | **11.7 %** | 133.58 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 55.8 % | **16.9 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **35.00 €** | 25.2 % | **9.6 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 55.6 % | **11.6 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GEC5C41SG | 324.90 € | **320.00 €** | 13.3 % | **11.6 %** | 320.05 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.90 €** | 30.4 % | **17.8 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **70.00 €** | 25.4 % | **17.4 %** | 70.21 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **87.50 €** | 19.5 % | **13.4 %** | 87.75 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **45.00 €** | 30.2 % | **17.8 %** | 45.25 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.90 €** | 32.2 % | **22.6 %** | 59.96 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.50 €** | 33.8 % | **20.6 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.90 €** | 27.4 % | **13.5 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.50 €** | 33.0 % | **19.6 %** | 41.88 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **20.00 €** | 42.7 % | **16.0 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **20.00 €** | 39.1 % | **13.1 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 24180-56 | 41.50 € | **37.00 €** | 17.9 % | **5.1 %** | 34.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 250.00 € | **245.50 €** | 12.0 % | **10.0 %** | 245.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.50 €** | 55.8 % | **19.1 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 51.9 % | **16.1 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **13.00 €** | 44.7 % | **8.0 %** | 13.22 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 54.6 % | **16.4 %** | 13.88 € | cena podľa najlacnejšieho iného predajcu |
| Tepelná utierka pre modely Dreame Matrix10 Ultra, L5... | 33.90 € | **29.50 €** | 39.2 % | **21.1 %** | 29.88 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.90 €** | 52.4 % | **19.7 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 29.6 % | **6.3 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH 6756WO | 129.50 € | **125.50 €** | 14.1 % | **10.5 %** | 125.77 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 271.00 € | **267.00 €** | 11.5 % | **9.9 %** | 267.30 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **96.00 €** | 18.7 % | **14.0 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 46.8 % | **11.9 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 292.90 € | **289.00 €** | 10.1 % | **8.7 %** | 289.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.90 €** | 40.5 % | **22.4 %** | 25.96 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 36.5 % | **17.2 %** | 22.46 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **21.00 €** | 35.0 % | **15.3 %** | 21.04 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **16.90 €** | 39.6 % | **15.1 %** | 16.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 59.50 € | **55.90 €** | 23.2 % | **15.8 %** | 55.96 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **21.00 €** | 40.8 % | **20.2 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **21.00 €** | 35.3 % | **15.5 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.50 €** | 27.9 % | **17.1 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.00 €** | 42.5 % | **30.6 %** | 39.41 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIO 655 BG | 174.00 € | **170.50 €** | 7.2 % | **5.0 %** | 167.23 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 18.00 € | **14.50 €** | 30.4 % | **5.1 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 40.1 % | **15.6 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 43.9 % | **15.6 %** | 14.21 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka Dreame – pre súpravu Aqua10 Ultra R... | 23.90 € | **20.50 €** | 39.2 % | **19.4 %** | 20.88 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **30.00 €** | 30.8 % | **17.8 %** | 30.21 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **29.00 €** | 33.2 % | **19.6 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 32.6 % | **18.2 %** | 26.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 41.5 % | **35.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 29.00 € | **25.90 €** | 46.6 % | **31.0 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.90 €** | 30.6 % | **20.6 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.50 €** | 21.5 % | **5.1 %** | 18.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová nerezová fontána/dávkovač vody pre psov a... | 36.50 € | **33.50 €** | 14.4 % | **5.0 %** | 31.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| RUSSELL HOBBS 23510-56/RH | 54.90 € | **51.90 €** | 18.1 % | **11.7 %** | 52.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA6 NP3T3EHTB Candy Bake 600 | 270.00 € | **267.00 €** | 6.8 % | **5.6 %** | 267.24 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **15.50 €** | 37.9 % | **15.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 40.2 % | **19.3 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 37.7 % | **17.1 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **11.90 €** | 41.6 % | **13.4 %** | 11.94 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 36.9 % | **13.9 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **34.50 €** | 31.8 % | **21.5 %** | 34.83 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **14.00 €** | 42.8 % | **18.2 %** | 14.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.50 €** | 29.4 % | **6.6 %** | 12.12 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 41.5 % | **16.5 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 42.9 % | **17.6 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 11.43 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 12.10 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **12.00 €** | 47.3 % | **19.0 %** | 12.38 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **29.50 €** | 29.0 % | **17.9 %** | 29.67 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 34.0 % | **20.9 %** | 24.64 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 55.1 % | **39.9 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **18.90 €** | 38.5 % | **21.7 %** | 18.98 € | cena podľa najlacnejšieho iného predajcu |
| Logitech Mouse G305 LIGHTSPEED black | 58.50 € | **55.90 €** | 10.0 % | **5.1 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 36.50 € | **33.90 €** | 14.0 % | **5.9 %** | 32.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 28.50 € | **25.90 €** | 44.1 % | **31.0 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **22.00 €** | 33.5 % | **19.4 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.42 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka Dreame – pre modely Track Aqua10 Ul... | 17.50 € | **15.00 €** | 42.7 % | **22.3 %** | 15.04 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 208.50 € | **206.00 €** | 7.3 % | **6.0 %** | 206.04 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Paw Patrol | 44.00 € | **41.50 €** | 21.0 % | **14.1 %** | 41.63 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 307.50 € | **305.00 €** | 8.9 % | **8.0 %** | 305.22 € | cena podľa najlacnejšieho iného predajcu |
| Behringer GMX-500 | 43.00 € | **40.50 €** | 20.9 % | **13.9 %** | 40.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 40.50 € | **38.00 €** | 21.0 % | **13.5 %** | 38.36 € | cena podľa najlacnejšieho iného predajcu |
| Súprava plynového pedála a spojky MOZA SRP Lite2 Per... | 41.00 € | **38.50 €** | 16.2 % | **9.1 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 14.50 € | **12.00 €** | 38.5 % | **14.6 %** | 12.44 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.8 % | **7.7 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.1 % | **7.1 %** | 16.88 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.50 €** | 41.3 % | **22.1 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **72.50 €** | 18.6 % | **14.9 %** | 72.83 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.50 €** | 20.6 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **20.50 €** | 51.1 % | **37.4 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| FENDA F&D A180X | 41.90 € | **39.90 €** | 10.3 % | **5.0 %** | 39.51 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 91 | 189.50 € | **187.50 €** | 8.2 % | **7.0 %** | 187.53 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-603B | 25.00 € | **23.00 €** | 24.2 % | **14.2 %** | 23.20 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ6 Ultra (čierny) | 121.00 € | **119.00 €** | 19.4 % | **17.4 %** | 119.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 24.00 € | **22.00 €** | 36.3 % | **24.9 %** | 22.36 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 129.00 € | **127.00 €** | 14.8 % | **13.1 %** | 127.46 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **18.00 €** | 30.7 % | **17.7 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **17.00 €** | 33.3 % | **19.5 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **15.50 €** | 25.0 % | **11.1 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61601 Rozšiřující set 2 - GO | 32.90 € | **31.00 €** | 46.0 % | **37.6 %** | 31.09 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H8C SE 2K IP, vonkajšia, PTZ, 3 Mpx | 37.90 € | **36.00 €** | 13.4 % | **7.7 %** | 36.26 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 19.00 € | **17.50 €** | 18.5 % | **9.1 %** | 17.56 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 19.50 € | **18.00 €** | 19.2 % | **10.0 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MSS815MAQUA-UN – 4-dielna sada inteligentných... | 52.00 € | **50.50 €** | 21.1 % | **17.6 %** | 50.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 14.00 € | **12.50 €** | 28.6 % | **14.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight C2201C300 | 47.00 € | **45.50 €** | 15.3 % | **11.7 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.50 €** | 33.0 % | **22.7 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.90 € | **9.50 €** | 46.7 % | **27.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.90 € | **12.50 €** | 35.8 % | **22.1 %** | 12.84 € | cena podľa najlacnejšieho iného predajcu |
| L'OR Cream Absolut Classique 1000g | 26.90 € | **25.50 €** | 11.1 % | **5.4 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **11.50 €** | 40.5 % | **26.0 %** | 11.57 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 24.00 € | **22.90 €** | 10.2 % | **5.2 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 21.50 € | **20.50 €** | 15.0 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61613 GO/D143 Looping Set (8ks) | 25.00 € | **24.00 €** | 11.0 % | **6.6 %** | 24.05 € | cena podľa najlacnejšieho iného predajcu |
| TechnoLine WS 8005 digitální budík | 22.50 € | **21.50 €** | 12.8 % | **7.8 %** | 21.56 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 15.50 € | **14.50 €** | 34.9 % | **26.2 %** | 14.62 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0027 | 16.00 € | **15.00 €** | 14.6 % | **7.4 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0026 | 16.00 € | **15.00 €** | 14.6 % | **7.4 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **16.50 €** | 43.3 % | **35.1 %** | 16.76 € | cena podľa najlacnejšieho iného predajcu |
| Držiak športovej kamery na riadidlá PGYTECH (P-GM-171) | 36.00 € | **35.00 €** | 13.8 % | **10.7 %** | 35.27 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 126.00 € | **125.00 €** | 10.6 % | **9.7 %** | 125.27 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE3600 | 40.50 € | **39.50 €** | 12.0 % | **9.2 %** | 39.78 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 18.50 € | **17.50 €** | 15.0 % | **8.8 %** | 17.83 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 16.50 € | **15.50 €** | 13.7 % | **6.8 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 12.50 € | **11.50 €** | 20.4 % | **10.8 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic GAUSS TAPE ECHO | 58.50 € | **57.50 €** | 12.1 % | **10.2 %** | 57.90 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 154.90 € | **154.00 €** | 17.6 % | **16.9 %** | 154.21 € | cena podľa najlacnejšieho iného predajcu |
| Bicyklová baterka Superfire BL12 – 4800 mAh, USB, 2 ... | 18.90 € | **18.00 €** | 16.1 % | **10.6 %** | 18.46 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 6.80 € | **6.00 €** | 22.6 % | **8.2 %** | 6.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 9.70 € | **8.90 €** | 30.1 % | **19.4 %** | 9.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight časovač so súmrakovým senzorom, 230V, 3600W | 8.60 € | **7.90 €** | 45.1 % | **33.3 %** | 7.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k meteostanici TE90 | 10.50 € | **9.80 €** | 30.9 % | **22.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **26.50 €** | 18.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **63.90 €** | 8.3 % | **7.3 %** | 63.99 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 silver | 23.50 € | **22.90 €** | 7.9 % | **5.2 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 28Ah  VIPOW bezúdržbový akumu... | 57.50 € | **57.00 €** | 6.1 % | **5.2 %** | 53.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.50 € | **12.00 €** | 11.1 % | **6.6 %** | 12.09 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 18.50 € | **18.00 €** | 13.1 % | **10.0 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu |
| Behringer BH40 High-Fidelity slúchadlá | 43.50 € | **43.00 €** | 25.1 % | **23.6 %** | 43.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 27.00 € | **26.50 €** | 35.3 % | **32.8 %** | 26.76 € | cena podľa najlacnejšieho iného predajcu |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 58.00 € | **57.50 €** | 14.9 % | **13.9 %** | 57.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.00 € | **31.50 €** | 31.2 % | **29.1 %** | 31.81 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V35 s Dynamický mikrofon | 49.00 € | **48.50 €** | 15.0 % | **13.8 %** | 48.83 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.00 € | **11.50 €** | 24.4 % | **19.3 %** | 11.87 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen pre elektromobily BS20 11 l... | 338.50 € | **338.00 €** | 21.3 % | **21.2 %** | 338.39 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 39.50 € | **39.00 €** | 16.9 % | **15.4 %** | 39.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 26.00 € | **25.50 €** | 7.2 % | **5.2 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-5 PREMIUM 5 kg (100x150... | 28.50 € | **28.00 €** | 12.9 % | **10.9 %** | 28.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 26.00 € | **25.50 €** | 7.2 % | **5.2 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-5 PREMIUM 5 kg (100x150... | 28.50 € | **28.00 €** | 12.9 % | **10.9 %** | 28.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 918.00 € | **917.50 €** | 13.9 % | **13.9 %** | 917.89 € | cena podľa najlacnejšieho iného predajcu |
| TESLA GlideStar GQ500 | 65.00 € | **64.50 €** | 6.7 % | **5.8 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 155.50 € | **155.00 €** | 8.7 % | **8.4 %** | 155.39 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 927.00 € | **926.50 €** | 9.1 % | **9.0 %** | 926.89 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický hrnec TEESA TSA8091 Multicooker 2L, 12-24... | 67.00 € | **66.50 €** | 15.2 % | **14.4 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 105.50 € | **105.00 €** | 9.4 % | **8.9 %** | 105.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 269.00 € | **268.50 €** | 5.6 % | **5.4 %** | 268.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Aura A60 Soundbar | 206.50 € | **206.00 €** | 15.0 % | **14.7 %** | 206.39 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 217.50 € | **217.00 €** | 14.2 % | **13.9 %** | 217.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 696.00 € | **695.50 €** | 8.9 % | **8.9 %** | 695.89 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO4B25EA | 96.50 € | **96.00 €** | 10.4 % | **9.8 %** | 96.40 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 29.00 € | **28.50 €** | 15.1 % | **13.1 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna meteostanica, prehľadný a diza... | 58.50 € | **58.00 €** | 14.0 % | **13.0 %** | 58.41 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo UNI filtry 12ks | 36.50 € | **36.00 €** | 20.2 % | **18.5 %** | 36.47 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 53.50 € | **53.00 €** | 11.6 % | **10.5 %** | 53.49 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO465FR | 65.50 € | **65.00 €** | 9.6 % | **8.8 %** | 65.50 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO727BL | 58.50 € | **58.00 €** | 10.8 % | **9.9 %** | 58.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 213.50 € | **213.00 €** | 7.3 % | **7.1 %** | 213.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 249.90 € | **249.50 €** | 6.7 % | **6.6 %** | 249.83 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 172.90 € | **172.50 €** | 5.6 % | **5.3 %** | 172.89 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 210.90 € | **210.50 €** | 14.1 % | **13.9 %** | 210.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7115S | 72.90 € | **72.50 €** | 10.3 % | **9.7 %** | 72.90 € | cena podľa najlacnejšieho iného predajcu |
| SMALLRIG 5227 – doska na batérie s uchytením typu V-... | 183.90 € | **183.50 €** | 9.8 % | **9.6 %** | 183.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 157.90 € | **157.50 €** | 20.2 % | **19.9 %** | 157.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 147.90 € | **147.50 €** | 20.2 % | **19.8 %** | 147.90 € | cena podľa najlacnejšieho iného predajcu |
| SMALLRIG RC 100B 100 W LED štúdiové osvetlenie | 208.90 € | **208.50 €** | 13.5 % | **13.2 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.90 €** | 25.3 % | **21.2 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 4.80 € | **4.40 €** | 45.1 % | **33.0 %** | 4.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 19.90 € | **19.50 €** | 29.1 % | **26.5 %** | 19.56 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **38.50 €** | 7.0 % | **5.9 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-604B | 33.90 € | **33.50 €** | 18.2 % | **16.8 %** | 33.74 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 19.90 € | **19.50 €** | 32.0 % | **29.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 18.90 € | **18.50 €** | 7.7 % | **5.4 %** | 18.89 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V282, 64 cm, ... | 31.90 € | **31.50 €** | 36.0 % | **34.3 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7355CH | 57.90 € | **57.50 €** | 16.3 % | **15.5 %** | 57.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO3101 | 17.90 € | **17.50 €** | 9.4 % | **7.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 18.90 € | **18.50 €** | 7.6 % | **5.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 5.00 € | **4.70 €** | 45.7 % | **37.0 %** | 4.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.00 € | **7.70 €** | 37.2 % | **32.1 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.30 € | **7.10 €** | 45.5 % | **41.5 %** | 7.13 € | cena podľa najlacnejšieho iného predajcu |
| Drevená 3D LED vianočná dekorácia v ráme Solight 1V3... | 10.00 € | **9.80 €** | 39.0 % | **36.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Zlatá stolová LED vianočná hviezda Solight 1V262-G, ... | 10.00 € | **9.80 €** | 39.0 % | **36.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin M Steel | 24.00 € | **23.90 €** | 9.9 % | **9.5 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA110 Výmenná sada pre r... | 61.00 € | **60.90 €** | 7.6 % | **7.4 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic UniTune Clip | 37.00 € | **36.90 €** | 12.0 % | **11.7 %** | 37.00 € | cena podľa najlacnejšieho iného predajcu |
| Boffin I 100 | 24.00 € | **23.90 €** | 6.5 % | **6.1 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 6.90 € | **6.80 €** | 28.7 % | **26.8 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.40 € | **3.30 €** | 44.0 % | **39.7 %** | 3.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.90 € | **3.80 €** | 53.2 % | **49.2 %** | 3.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.88 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.00 € | **12.90 €** | 6.3 % | **5.5 %** | 12.99 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 9.90 € | **9.80 €** | 37.6 % | **36.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo SC750W Turbo | 98.00 € | **97.90 €** | 8.7 % | **8.6 %** | 97.95 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V860III TTL pre Fuji | 213.00 € | **212.90 €** | 9.5 % | **9.4 %** | 213.00 € | cena podľa najlacnejšieho iného predajcu |

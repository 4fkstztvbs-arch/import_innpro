# Návrh na úpravu cien podľa Heureka porovnania — 2026-11-04

Vstup: `premiumstore-sk_2026-11-04_07-40.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6019**
- Návrh **zvýšiť** cenu: **211** produktov
- Návrh **znížiť** cenu: **483** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5325** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **40**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **353**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (211)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Elektráreň Allpowers R4000 | 1517.00 € | **1668.50 €** | 15.0 % | **26.5 %** | 1718.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **770.00 €** | 26.6 % | **39.2 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 621.00 € | **683.00 €** | 6.7 % | **17.3 %** | 702.38 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava stabilizátora iSteady MT3 Pro | 564.90 € | **621.00 €** | 25.5 % | **37.9 %** | 647.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **534.00 €** | 4.6 % | **15.1 %** | 554.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **743.00 €** | 3.7 % | **9.2 %** | 758.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Čistička vzduchu MOVA P10 | 436.50 € | **470.50 €** | 8.9 % | **17.4 %** | 480.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 329.00 € | **361.90 €** | 6.9 % | **17.6 %** | 370.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GMKtec Mini PC M3 Intel i5-12450H 16 GB RAM + 512 GB... | 561.50 € | **592.50 €** | 15.0 % | **21.4 %** | 604.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **330.00 €** | 32.8 % | **45.9 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **342.00 €** | 15.0 % | **25.5 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 497.00 € | **524.90 €** | 12.0 % | **18.3 %** | 535.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **310.50 €** | 27.3 % | **39.7 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| OBSBOT Tiny 3 MIC Combo | 456.00 € | **482.50 €** | 5.5 % | **11.7 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **296.00 €** | 6.2 % | **16.6 %** | 306.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 260.00 € | **286.00 €** | 15.0 % | **26.5 %** | 407.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 261.00 € | **287.00 €** | 14.9 % | **26.4 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 259.90 € | **285.50 €** | 15.0 % | **26.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **266.00 €** | 10.8 % | **21.9 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blesk Neewer Q6 | 565.00 € | **589.00 €** | 39.0 % | **44.9 %** | 601.47 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor AURZEN Boom Mini Black | 234.50 € | **257.90 €** | 13.8 % | **25.2 %** | 268.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| AURZEN Boom Mini projektor | 234.50 € | **257.90 €** | 5.4 % | **15.9 %** | 268.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava na pripojenie k vodovodu pre automatické nap... | 232.50 € | **255.50 €** | 15.0 % | **26.4 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Electrolux EW8F5412SAC | 680.00 € | **702.00 €** | 5.6 % | **9.0 %** | 716.78 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **271.50 €** | 30.7 % | **41.9 %** | 277.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Behringer Xenyx QX1222USB mixpult s USB a efektmi | 210.00 € | **230.90 €** | 15.0 % | **26.4 %** | 235.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **213.90 €** | 4.1 % | **14.5 %** | 220.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **210.50 €** | 4.4 % | **14.8 %** | 221.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 184.00 € | **202.00 €** | 5.2 % | **15.5 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Electrolux 600 SensiCare® EW6T226C | 415.50 € | **432.90 €** | 5.0 % | **9.4 %** | 441.82 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje DE69CS | 510.00 € | **527.00 €** | 8.6 % | **12.3 %** | 538.11 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Whirlpool WP B9X WBS EE | 680.00 € | **696.90 €** | 6.4 % | **9.1 %** | 711.19 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **210.50 €** | 4.5 % | **13.1 %** | 215.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Candy BRS 7N2BX-S | 393.50 € | **409.00 €** | 5.2 % | **9.4 %** | 417.43 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko EnergySpin B7WFU68416WBES | 404.00 € | **418.00 €** | 5.4 % | **9.0 %** | 426.55 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje GS543D15W | 296.50 € | **308.90 €** | 5.0 % | **9.4 %** | 315.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tablet HOTWAV TAB R9 Pro (červený) | 269.00 € | **281.00 €** | 7.2 % | **11.9 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tannoy GOLD 7 powered studio monitor | 259.00 € | **271.00 €** | 15.0 % | **20.3 %** | 277.02 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko B5T4924SWW | 444.50 € | **456.00 €** | 6.7 % | **9.5 %** | 465.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **127.00 €** | 4.4 % | **14.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje NRKI519E41 | 501.50 € | **512.50 €** | 6.6 % | **8.9 %** | 523.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **121.50 €** | 27.6 % | **40.1 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **185.00 €** | 35.1 % | **42.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Candy GWD 485SB6-S | 333.50 € | **342.50 €** | 6.5 % | **9.4 %** | 349.57 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 903.00 € | **912.00 €** | 17.5 % | **18.7 %** | 927.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **105.00 €** | 6.2 % | **15.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **123.00 €** | 4.4 % | **11.7 %** | 125.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal GV 9620E0 | 359.00 € | **367.00 €** | 6.6 % | **9.0 %** | 374.95 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **87.90 €** | 30.9 % | **43.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Booster UltraCap CSC 12/800 12 V, 800 A | 288.90 € | **296.50 €** | 10.6 % | **13.5 %** | 302.88 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WiFi router TP-Link Mercusys Halo H27BE(3-pack) WiFi... | 210.90 € | **218.50 €** | 8.0 % | **11.9 %** | 223.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **93.50 €** | 4.2 % | **12.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **77.50 €** | 4.4 % | **14.8 %** | 79.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Guzzanti GZ 90A1 | 129.00 € | **136.00 €** | 8.0 % | **13.9 %** | 139.11 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| UTRAI JS1 Pro – štartér do auta | 70.00 € | **77.00 €** | 14.8 % | **26.2 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Krups Intuition Experience EA876D10 | 683.00 € | **690.00 €** | 8.4 % | **9.5 %** | 704.24 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 719.50 € | **726.50 €** | 17.1 % | **18.2 %** | 741.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **114.50 €** | 32.4 % | **40.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 660.90 € | **667.50 €** | 19.0 % | **20.2 %** | 681.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **234.00 €** | 8.5 % | **11.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **234.00 €** | 13.3 % | **16.5 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 319.50 € | **326.00 €** | 6.3 % | **8.5 %** | 332.74 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERRAMASTER F8 SSD NAS - súborový server s procesoro... | 677.50 € | **684.00 €** | 17.1 % | **18.2 %** | 698.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **81.90 €** | 6.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 222.00 € | **228.00 €** | 15.1 % | **18.3 %** | 232.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **67.50 €** | 31.3 % | **44.2 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **68.50 €** | 18.0 % | **29.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **68.50 €** | 35.0 % | **47.9 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **97.90 €** | 34.8 % | **43.0 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Autokamera DDPAI Z50 Pro | 90.00 € | **95.50 €** | 11.2 % | **18.0 %** | 97.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fén MOVA Turbo 20 (biely) | 56.50 € | **62.00 €** | 14.8 % | **26.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| AMICA TR 110 TB | 293.00 € | **298.50 €** | 7.3 % | **9.3 %** | 304.78 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Rotoped MERACH MR-S28B1 | 545.00 € | **550.50 €** | 19.0 % | **20.2 %** | 562.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| PULUZ PU4119B 60W 2500K-6500K (Black) studio lamp. | 50.90 € | **55.90 €** | 15.0 % | **26.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 54.00 € | **59.00 €** | 37.7 % | **50.4 %** | 63.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko B5RCNA375HXB1 HarvestFresh | 360.50 € | **365.50 €** | 7.4 % | **8.9 %** | 373.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stativ EMEET FTD603 | 50.50 € | **55.50 €** | 38.2 % | **51.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| NAS server TERRAMASTER F2-425 Plus s procesorom Inte... | 524.00 € | **529.00 €** | 19.1 % | **20.2 %** | 540.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíječka USB KRUGER & MATZ KM0859 GaN 140W USB-A + ... | 49.00 € | **53.90 €** | 29.1 % | **42.0 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **53.50 €** | 6.1 % | **16.1 %** | 55.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blesk GODOX LUX Senior (zelený) | 107.50 € | **112.00 €** | 7.5 % | **12.0 %** | 114.30 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERRAMASTER F4 SSD NAS - súborový server s procesoro... | 498.50 € | **503.00 €** | 19.1 % | **20.1 %** | 513.75 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Autokamera DDPAI Z60 2026 Dual | 124.50 € | **128.90 €** | 26.2 % | **30.7 %** | 131.57 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava Dreame Aqua10 Ultra Track Complete, Aqua10 U... | 106.00 € | **110.00 €** | 52.0 % | **57.7 %** | 112.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje WG2PS72A12 | 240.00 € | **244.00 €** | 7.4 % | **9.2 %** | 249.36 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 411.00 € | **415.00 €** | 17.0 % | **18.2 %** | 423.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **43.90 €** | 42.5 % | **56.5 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **42.50 €** | 4.9 % | **14.6 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 200.00 € | **203.50 €** | 23.3 % | **25.5 %** | 208.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava príslušenstva pre robotický vysávač Dreame A... | 64.00 € | **67.50 €** | 51.0 % | **59.3 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Solight dezinfekčná bezozónová UV lampa 100W | 41.50 € | **44.90 €** | 32.1 % | **42.9 %** | 45.93 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.00 €** | 5.4 % | **11.7 %** | 56.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Osvetľovací statív GODOX 240F | 43.50 € | **46.50 €** | 7.5 % | **14.9 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 32.00 € | **35.00 €** | 25.8 % | **37.6 %** | 38.55 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Päťzónový indukčný sporák IsEasy LI5-01 | 187.00 € | **190.00 €** | 11.8 % | **13.6 %** | 194.18 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Autoreflektor Hcalory D55M+ s Bluetooth | 264.00 € | **267.00 €** | 16.5 % | **17.9 %** | 272.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrický bežecký pás MERACH MR-T14 | 292.50 € | **295.50 €** | 16.9 % | **18.1 %** | 301.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrický bežecký pás UREVO SpaceWalk 5 (čierny) | 304.00 € | **307.00 €** | 17.1 % | **18.2 %** | 313.38 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **34.50 €** | 6.1 % | **16.2 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Guzzanti GZ 340A | 366.00 € | **369.00 €** | 6.9 % | **7.8 %** | 376.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| VITURE Pro 256 GB nákrčník | 435.50 € | **438.50 €** | 15.0 % | **15.8 %** | 447.75 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 32.00 € | **35.00 €** | 29.2 % | **41.4 %** | 49.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **92.50 €** | 39.0 % | **43.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **32.50 €** | 31.8 % | **44.1 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **140.00 €** | 15.9 % | **18.1 %** | 143.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **34.90 €** | 29.4 % | **39.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Acer Aspire Lite 15 (NX.DCWEC.002) | 362.90 € | **365.50 €** | 5.0 % | **5.8 %** | 373.01 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava príslušenstva Dreame pre sériu X50 Ultra a m... | 63.90 € | **66.50 €** | 15.1 % | **19.7 %** | 68.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 138.90 € | **141.50 €** | 57.0 % | **59.9 %** | 168.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Parabolický dáždnik GODOX UB-165S | 73.50 € | **76.00 €** | 15.4 % | **19.4 %** | 77.65 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 27.50 € | **30.00 €** | 33.6 % | **45.8 %** | 31.77 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herná klávesnica Onikuma MT902 2,4 GHz (čierno-biely... | 26.00 € | **28.50 €** | 14.1 % | **25.0 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herná klávesnica Onikuma MT902 2,4 GHz (čierno-biela) | 24.50 € | **26.90 €** | 14.1 % | **25.3 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **29.50 €** | 40.9 % | **53.1 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight vonkajšia anténa, DVB-T2, 49dB | 22.90 € | **25.00 €** | 17.2 % | **28.0 %** | 27.72 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **34.50 €** | 4.8 % | **11.3 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 197.50 € | **199.50 €** | 21.8 % | **23.1 %** | 203.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Router GL.iNet Spitz Plus 4G LTE | 210.50 € | **212.50 €** | 19.0 % | **20.1 %** | 217.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje NRK6192AXL4 | 359.00 € | **361.00 €** | 8.3 % | **8.9 %** | 368.72 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stativ EMEET TD303 | 21.00 € | **23.00 €** | 34.1 % | **46.9 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **23.50 €** | 38.5 % | **51.3 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 186.00 € | **187.90 €** | 17.1 % | **18.3 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 186.00 € | **187.90 €** | 17.1 % | **18.3 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada Onikuma Gaming TZ3006 3 v 1: klávesnica, myš a ... | 19.00 € | **20.90 €** | 13.9 % | **25.3 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tesla MX301BX | 22.90 € | **24.50 €** | 10.6 % | **18.3 %** | 25.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ariete ART 4631 | 130.90 € | **132.50 €** | 5.2 % | **6.5 %** | 135.30 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **41.50 €** | 53.2 % | **59.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Herné slúchadlá ONIKUMA X25 (čierne) | 15.50 € | **17.00 €** | 15.3 % | **26.5 %** | 18.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herná klávesnica ONIKUMA G80 | 23.50 € | **25.00 €** | 15.2 % | **22.6 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 16.00 € | **17.50 €** | 13.8 % | **24.5 %** | 18.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| FoodSaver FSB4802-I | 18.50 € | **20.00 €** | 11.0 % | **20.0 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| REDTIGER F7N WiFi 4K + 1080p palubná kamera | 115.00 € | **116.50 €** | 16.6 % | **18.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Venta H14 Clean room filter  1 pack | 128.00 € | **129.50 €** | 12.9 % | **14.2 %** | 132.18 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LED svetelný panel GODOX Litemons LP600Bi s dvojfare... | 133.00 € | **134.50 €** | 18.6 % | **20.0 %** | 137.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zavážacia loďka Flytec V020, 12 000 mAh | 146.50 € | **148.00 €** | 17.0 % | **18.2 %** | 151.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Běžecký pás REBEL ACTIVE RBA-1014 | 168.50 € | **170.00 €** | 27.9 % | **29.0 %** | 173.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 101.50 € | **102.90 €** | 16.5 % | **18.1 %** | 105.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI Z90T palubná kamera | 162.50 € | **163.90 €** | 10.3 % | **11.3 %** | 167.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Candy BR 48SBL6G-S | 325.90 € | **327.00 €** | 5.1 % | **5.5 %** | 333.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Niceboy Stellar 2 White | 41.90 € | **43.00 €** | 9.5 % | **12.3 %** | 44.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Niceboy Stellar 2 Black | 41.90 € | **43.00 €** | 9.5 % | **12.3 %** | 44.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Niceboy Stellar 2 Pink | 41.90 € | **43.00 €** | 9.5 % | **12.3 %** | 44.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bočná kefa MOVA pre modely P10 Pro Ultra/Z50 Ultra/G... | 12.90 € | **14.00 €** | 16.7 % | **26.6 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI MINI Pro 2K palubná kamera | 43.00 € | **44.00 €** | 15.0 % | **17.7 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Multifunkčná detská váha Grownsy B12H | 27.00 € | **28.00 €** | 11.7 % | **15.8 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Russell Hobbs 26730-56/RH | 31.50 € | **32.50 €** | 9.8 % | **13.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit sušák Comfort Tower 420 | 46.50 € | **47.50 €** | 6.9 % | **9.2 %** | 48.59 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Niceboy Podsie 5 PRO White | 48.00 € | **49.00 €** | 8.6 % | **10.9 %** | 50.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Niceboy Podsie 5 PRO Black | 48.00 € | **49.00 €** | 8.6 % | **10.9 %** | 50.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Niceboy Podsie 5 PRO Pink | 48.00 € | **49.00 €** | 8.6 % | **10.9 %** | 50.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bravo B-4720 Nap. žehlička Clara fialová | 35.00 € | **36.00 €** | 7.3 % | **10.4 %** | 37.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bravo B-4720 Nap. žehlička Clara modrá | 35.00 € | **36.00 €** | 7.3 % | **10.4 %** | 37.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Dvojitá odsávačka mlieka Grownsy | 31.00 € | **32.00 €** | 14.0 % | **17.7 %** | 33.38 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GUZZANTI GZ 8301A | 78.50 € | **79.50 €** | 7.7 % | **9.1 %** | 81.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **11.90 €** | 9.5 % | **19.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.00 € | **14.00 €** | 14.4 % | **23.2 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Dokovacia stanica Peladn S-2 Oculink | 96.50 € | **97.50 €** | 16.8 % | **18.0 %** | 99.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Generátor dymu Ancel S100 na detekciu úniku | 99.00 € | **100.00 €** | 17.0 % | **18.1 %** | 102.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Maxxo Sous Vide SV06 | 131.00 € | **132.00 €** | 8.2 % | **9.0 %** | 134.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko VRT76325VW | 161.00 € | **162.00 €** | 5.8 % | **6.4 %** | 165.40 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kolečka pro kancelářskou židli Ruhhy 25280 | 12.50 € | **13.50 €** | 10.0 % | **18.8 %** | 17.45 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Guzzanti GZ 103RB | 207.00 € | **208.00 €** | 6.6 % | **7.1 %** | 212.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje GI6432BSCWF | 317.00 € | **318.00 €** | 5.6 % | **5.9 %** | 324.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sunnylife AD020 magnetický hliníkový adaptér pre Ins... | 15.00 € | **16.00 €** | 6.9 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight teplomer, farba čierna | 14.00 € | **14.90 €** | 31.3 % | **39.7 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka Dreame – pre modely Track Aqua10 Ul... | 18.00 € | **18.90 €** | 46.8 % | **54.1 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zelmer ZHM2550 | 36.00 € | **36.90 €** | 17.0 % | **20.0 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| X40 Ultra / Kompletná sada príslušenstva pre X40 | 49.00 € | **49.90 €** | 18.1 % | **20.3 %** | 50.92 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 8.20 € | **9.00 €** | 19.5 % | **31.1 %** | 10.40 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gens ace G-Tech 5000mAh 11.1V 45C 3S1P lipo battery ... | 55.90 € | **56.50 €** | 16.7 % | **18.0 %** | 57.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Drosselmeyer TIBP01G | 34.90 € | **35.50 €** | 10.2 % | **12.1 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GODOX R200-HC40 mriežka s voštinovým vzorom | 18.90 € | **19.50 €** | 6.9 % | **10.3 %** | 20.75 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sušička ovoce Ruhhy 25928 400W | 55.90 € | **56.50 €** | 18.2 % | **19.5 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI Ranger M1 – palubná kamera | 62.90 € | **63.50 €** | 16.5 % | **17.6 %** | 65.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Akumulátor Lipo Gens Ace G-Tech 3300mAh 22,2V 60C 6S... | 69.90 € | **70.50 €** | 17.1 % | **18.1 %** | 72.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **18.50 €** | 34.0 % | **38.2 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Joyroom PN-14F4 Starry Case pre iPhone 14 Pro (ružové) | 18.00 € | **18.50 €** | 41.3 % | **45.2 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MOES WHT-006-GB-WH Wi-Fi termostat pre elektrické kú... | 35.00 € | **35.50 €** | 14.3 % | **16.0 %** | 36.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zdroj univerzální Kruger&Matz KM1450-65 65W Power De... | 22.00 € | **22.50 €** | 14.3 % | **16.9 %** | 23.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zdroj univerzální Kruger&Matz KM1450-90 90W Power De... | 24.00 € | **24.50 €** | 19.0 % | **21.5 %** | 25.54 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Flexibilný mini statív NEEWER TP35 s diaľkovým ovlád... | 20.50 € | **21.00 €** | 13.8 % | **16.5 %** | 22.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Magnetické LED svietidlo NEEWER BL60C | 20.50 € | **21.00 €** | 9.8 % | **12.5 %** | 22.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Digitálny univerzálny multimeter True RMS Habotest H... | 27.00 € | **27.50 €** | 9.5 % | **11.6 %** | 28.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Neweer TL97C RGB LED farebné foto svetlo | 34.00 € | **34.50 €** | 17.3 % | **19.1 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Baterka Superfire s rozhraním USB-C L24 | 16.00 € | **16.50 €** | 5.2 % | **8.4 %** | 17.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WESTMARK 2094 2611 Nůžky na salát, 8 ks | 43.50 € | **44.00 €** | 10.0 % | **11.3 %** | 45.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sunnylife MJ-175 – rukoväť na batoh | 15.00 € | **15.50 €** | 6.3 % | **9.9 %** | 16.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný dávkovač krmiva Petoneer NutriSpin | 50.00 € | **50.50 €** | 13.3 % | **14.4 %** | 51.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný roletový spínač Meross MRS105MA-EU WiFi... | 25.50 € | **26.00 €** | 19.4 % | **21.8 %** | 27.19 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ALI SUPER ANC+BT sluch.TWS10BK | 27.50 € | **28.00 €** | 45.7 % | **48.3 %** | 29.19 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blitzwolf BW-S30 nabíjacia stanica 6 v 1 4xUSB-C + 2... | 41.00 € | **41.50 €** | 16.3 % | **17.7 %** | 42.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TEESA AIR FRYER TSA8046W | 42.00 € | **42.50 €** | 5.1 % | **6.3 %** | 43.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring Colmi R03 18.9MM 9 (Złoty) | 27.00 € | **27.50 €** | 12.2 % | **14.2 %** | 28.72 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GODOX CBA-PA0007 Pozadie | 41.50 € | **42.00 €** | 18.1 % | **19.6 %** | 43.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| xTool SafetyPro™ AP2 – vysokovýkonný filter | 42.00 € | **42.50 €** | 15.8 % | **17.2 %** | 43.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Budík Blitzwolf BW-FW10 s nabíjačkou 2xUSB-A, 4xUSB-... | 54.50 € | **55.00 €** | 15.9 % | **16.9 %** | 56.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Puzdro Sunnylife AQX-20 pre Mavic 4 PRO & RC 2 c | 60.00 € | **60.50 €** | 11.5 % | **12.5 %** | 62.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| PBT Keycap + Cable Set - Black - US/UK | 66.50 € | **67.00 €** | 10.3 % | **11.1 %** | 68.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 80.00 € | **80.50 €** | 17.0 % | **17.7 %** | 82.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Diaľkový spúšťač GODOX X3Pro TTL pre Sony | 94.50 € | **95.00 €** | 19.0 % | **19.6 %** | 97.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 12.50 € | **12.90 €** | 51.0 % | **55.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **11.90 €** | 10.1 % | **14.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Rojeco 2L WiFi verzia Bl Automatický dávkovač krmiva | 39.50 € | **39.90 €** | 16.9 % | **18.0 %** | 40.92 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný detektor dymu MOES WSS-S-SSD-A Wi-Fi | 21.50 € | **21.90 €** | 11.6 % | **13.7 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **42.90 €** | 38.6 % | **39.8 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **29.90 €** | 36.2 % | **37.0 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Hliníkový držiak Sunnylife pre Insta360 X5/X4 | 16.90 € | **17.00 €** | 11.8 % | **12.5 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Reflektor GODOX RFT-4 | 17.90 € | **18.00 €** | 13.9 % | **14.5 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Hodiny nástěnné TechnoLine WT 7981 | 34.90 € | **35.00 €** | 6.1 % | **6.4 %** | 36.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 64.90 € | **65.00 €** | 5.2 % | **5.4 %** | 66.60 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |

## Návrh znížiť cenu (483)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **534.00 €** | 47.0 % | **16.2 %** | 534.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.00 € | **0.80 €** | 25678.3 % | **58.6 %** | 129.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 29.8 % | **6.6 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada panelov Moza Racing FMP18 | 964.50 € | **871.00 €** | 21.5 % | **9.7 %** | 871.32 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 271.00 € | **181.50 €** | 59.8 % | **7.0 %** | 181.73 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server TERRAMASTER F6-424 NAS s procesorom ... | 738.50 € | **658.00 €** | 19.4 % | **6.4 %** | 658.50 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **295.50 €** | 33.5 % | **5.2 %** | 291.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **785.90 €** | 32.6 % | **20.7 %** | 785.92 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 371.00 € | **294.90 €** | 36.2 % | **8.3 %** | 294.97 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **294.90 €** | 48.6 % | **18.4 %** | 294.92 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 283.50 € | **216.50 €** | 56.0 % | **19.1 %** | 216.64 € | cena podľa najlacnejšieho iného predajcu |
| Behringer PMP1680S mixer amplifier whit effect proce... | 392.90 € | **328.90 €** | 41.2 % | **18.2 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V70 Dynamický mikrofón | 246.90 € | **184.90 €** | 42.7 % | **6.8 %** | 185.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **240.50 €** | 47.7 % | **18.2 %** | 240.88 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 225.50 € | **170.00 €** | 57.2 % | **18.5 %** | 170.42 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **166.50 €** | 39.1 % | **5.1 %** | 157.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **257.50 €** | 26.4 % | **5.2 %** | 236.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **225.00 €** | 44.0 % | **18.0 %** | 225.25 € | cena podľa najlacnejšieho iného predajcu |
| MSI Cyborg 15 (A13UC-2218CZ) | 844.00 € | **798.50 €** | 11.0 % | **5.0 %** | 783.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **180.00 €** | 44.4 % | **15.2 %** | 180.29 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **155.00 €** | 47.6 % | **14.5 %** | 155.38 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **229.90 €** | 25.6 % | **5.1 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring RingConn Air Gen 2 (veľkosť 9, strieborná ... | 296.90 € | **254.00 €** | 86.9 % | **59.9 %** | 287.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Vibračný tester Uni-T UT311A | 250.10 € | **209.50 €** | 41.5 % | **18.6 %** | 209.75 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **186.00 €** | 42.8 % | **17.8 %** | 186.38 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **184.50 €** | 42.3 % | **18.1 %** | 184.88 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 365.50 € | **330.50 €** | 31.2 % | **18.6 %** | 330.79 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 350.00 € | **315.90 €** | 29.8 % | **17.2 %** | 316.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **181.50 €** | 40.3 % | **18.3 %** | 181.63 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **132.00 €** | 43.8 % | **15.0 %** | 132.50 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **104.50 €** | 50.0 % | **14.1 %** | 104.75 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **318.50 €** | 32.7 % | **20.6 %** | 318.79 € | cena podľa najlacnejšieho iného predajcu |
| Kontroler TP-Link OC200 Controller, Omada SDN | 155.50 € | **124.00 €** | 32.3 % | **5.5 %** | 124.25 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **106.00 €** | 46.2 % | **12.8 %** | 106.50 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **155.00 €** | 27.8 % | **6.8 %** | 155.09 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **155.50 €** | 25.5 % | **5.2 %** | 141.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **145.50 €** | 45.0 % | **20.4 %** | 145.71 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **125.50 €** | 43.8 % | **16.6 %** | 125.83 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 86RB | 234.50 € | **205.50 €** | 24.7 % | **9.3 %** | 205.54 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **329.00 €** | 31.9 % | **21.3 %** | 329.31 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **271.90 €** | 33.2 % | **20.6 %** | 271.92 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **122.50 €** | 48.4 % | **20.6 %** | 122.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **272.50 €** | 32.9 % | **20.5 %** | 272.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **272.50 €** | 32.8 % | **20.5 %** | 272.71 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **172.50 €** | 39.8 % | **20.6 %** | 172.58 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **82.50 €** | 58.2 % | **19.0 %** | 82.71 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.68 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **143.50 €** | 44.5 % | **22.6 %** | 143.67 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **154.90 €** | 42.8 % | **22.6 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektráreň Allpowers VOLIX P300 | 204.50 € | **179.00 €** | 46.7 % | **28.4 %** | 179.46 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **148.50 €** | 42.0 % | **22.4 %** | 148.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **223.50 €** | 35.5 % | **22.6 %** | 223.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **76.50 €** | 38.1 % | **5.7 %** | 72.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aston Spirit mikrofón | 359.00 € | **336.50 €** | 15.0 % | **7.8 %** | 336.58 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **102.90 €** | 49.0 % | **22.6 %** | 103.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **65.90 €** | 41.3 % | **6.9 %** | 65.94 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **191.50 €** | 33.8 % | **20.7 %** | 191.54 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **191.50 €** | 33.5 % | **20.5 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **129.00 €** | 39.9 % | **20.6 %** | 129.13 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Autokamera Ottocast Ottosafe CA560-T | 148.90 € | **129.50 €** | 38.6 % | **20.5 %** | 129.71 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **57.00 €** | 63.8 % | **22.2 %** | 57.25 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **93.50 €** | 45.4 % | **20.5 %** | 93.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **122.50 €** | 35.7 % | **17.5 %** | 122.75 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.00 €** | 35.4 % | **9.7 %** | 81.23 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **219.50 €** | 23.4 % | **13.9 %** | 219.88 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **81.90 €** | 28.6 % | **5.4 %** | 75.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Battery Tester with printer Ancel BST600 | 129.15 € | **111.50 €** | 34.0 % | **15.7 %** | 111.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **119.90 €** | 38.2 % | **20.7 %** | 119.96 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **118.50 €** | 37.5 % | **20.5 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **55.50 €** | 50.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **73.00 €** | 40.2 % | **14.1 %** | 73.09 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.50 €** | 44.8 % | **11.1 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **59.00 €** | 41.2 % | **11.4 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **31.50 €** | 71.1 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **124.90 €** | 22.1 % | **8.6 %** | 124.93 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **59.50 €** | 52.1 % | **20.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **120.00 €** | 36.1 % | **20.7 %** | 120.04 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-IRC119B33 | 128.90 € | **114.00 €** | 38.1 % | **22.1 %** | 114.42 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF Domino CE-FS-IRC119B33 | 128.90 € | **114.00 €** | 28.1 % | **13.2 %** | 114.42 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 65.7 % | **17.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **75.00 €** | 42.8 % | **19.4 %** | 75.46 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **120.90 €** | 35.0 % | **20.6 %** | 120.96 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **111.00 €** | 31.2 % | **16.5 %** | 111.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **103.00 €** | 36.4 % | **20.2 %** | 103.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **41.00 €** | 53.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **286.50 €** | 25.0 % | **19.2 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 49.72 € | **35.90 €** | 50.4 % | **8.6 %** | 35.93 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **76.00 €** | 36.8 % | **15.9 %** | 76.25 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 322.00 € | **308.50 €** | 17.7 % | **12.7 %** | 308.60 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **54.00 €** | 42.9 % | **15.0 %** | 54.33 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **237.00 €** | 34.0 % | **27.0 %** | 237.49 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **49.50 €** | 34.8 % | **6.7 %** | 49.84 € | cena podľa najlacnejšieho iného predajcu |
| Keramická varná doska AMZCHEF CE-T-32CB2xyP200-AC | 69.50 € | **56.50 €** | 50.3 % | **22.2 %** | 56.75 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **61.90 €** | 39.2 % | **15.2 %** | 61.96 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **77.50 €** | 40.2 % | **20.5 %** | 77.63 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **114.50 €** | 33.7 % | **20.4 %** | 114.79 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Soundbar HW-B420F | 80.50 € | **68.00 €** | 28.0 % | **8.1 %** | 68.17 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 | 418.50 € | **406.00 €** | 22.6 % | **19.0 %** | 406.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **62.50 €** | 25.9 % | **5.1 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blesk Neewer Q300 | 250.90 € | **238.90 €** | 23.7 % | **17.8 %** | 238.93 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **123.50 €** | 34.2 % | **22.5 %** | 123.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **51.00 €** | 47.1 % | **20.0 %** | 51.08 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 30.6 % | **15.7 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **83.50 €** | 19.4 % | **5.2 %** | 81.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.90 €** | 52.4 % | **16.0 %** | 35.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **55.90 €** | 30.4 % | **8.6 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **38.50 €** | 42.2 % | **10.1 %** | 38.53 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 170.00 € | **158.90 €** | 12.4 % | **5.1 %** | 158.95 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X3Pro TTL pre Nikon | 94.90 € | **83.90 €** | 19.1 % | **5.3 %** | 81.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-IRC128D35 | 116.50 € | **105.50 €** | 35.1 % | **22.4 %** | 105.79 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **282.00 €** | 22.9 % | **18.3 %** | 282.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **86.50 €** | 35.6 % | **20.4 %** | 86.71 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.26 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2440P1-EU (ružová) | 129.50 € | **118.90 €** | 19.4 % | **9.6 %** | 118.93 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **126.90 €** | 46.5 % | **35.4 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **82.00 €** | 35.2 % | **20.1 %** | 82.38 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1022 | 195.90 € | **186.00 €** | 13.7 % | **7.9 %** | 186.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **65.00 €** | 33.5 % | **15.9 %** | 65.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **60.00 €** | 29.7 % | **11.7 %** | 60.31 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X3 TTL pre Fujifilm | 86.00 € | **76.50 €** | 23.8 % | **10.2 %** | 76.72 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3008B | 58.00 € | **49.00 €** | 32.1 % | **11.6 %** | 49.13 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 56.3 % | **21.2 %** | 31.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **71.00 €** | 31.3 % | **16.6 %** | 71.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **28.50 €** | 40.3 % | **6.8 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **104.00 €** | 30.8 % | **20.6 %** | 104.13 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **58.50 €** | 37.7 % | **20.0 %** | 58.83 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **29.00 €** | 49.3 % | **15.7 %** | 29.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 40.3 % | **8.7 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **21.50 €** | 45.3 % | **5.1 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.50 €** | 37.7 % | **14.9 %** | 41.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.90 €** | 14.9 % | **10.8 %** | 219.97 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.90 €** | 38.3 % | **9.8 %** | 30.96 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 41.2 % | **13.0 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 49.8 % | **16.0 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **21.90 €** | 42.7 % | **5.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **41.90 €** | 45.5 % | **22.6 %** | 41.92 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **67.00 €** | 17.3 % | **5.0 %** | 65.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.50 €** | 61.4 % | **22.4 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.50 €** | 42.1 % | **5.8 %** | 22.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **42.00 €** | 42.3 % | **20.2 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.50 €** | 29.4 % | **15.2 %** | 62.79 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **102.00 €** | 29.4 % | **20.4 %** | 102.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 47.4 % | **39.9 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.50 €** | 64.9 % | **18.4 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.90 €** | 78.5 % | **18.0 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **59.50 €** | 22.9 % | **8.9 %** | 59.54 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 71.3 % | **16.2 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **57.00 €** | 31.3 % | **15.9 %** | 57.29 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **35.00 €** | 44.4 % | **18.8 %** | 35.20 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z60 Pro 2026 – palubná kamera | 136.50 € | **129.00 €** | 11.2 % | **5.1 %** | 129.19 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn X-2 s rozhraním Thunderbolt 3 | 177.50 € | **170.00 €** | 15.2 % | **10.3 %** | 170.44 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.50 €** | 37.3 % | **19.0 %** | 47.75 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 60.4 % | **16.6 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **37.50 €** | 26.3 % | **6.2 %** | 36.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 64.9 % | **13.3 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 85.50 € | **78.50 €** | 19.2 % | **9.5 %** | 78.51 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 40.9 % | **14.9 %** | 30.88 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.90 €** | 61.9 % | **22.2 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.50 €** | 32.9 % | **15.7 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 15.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.50 €** | 29.9 % | **15.9 %** | 53.67 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.90 €** | 26.6 % | **9.8 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.50 €** | 40.2 % | **22.7 %** | 43.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.50 €** | 53.5 % | **19.2 %** | 21.63 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **21.00 €** | 36.3 % | **5.4 %** | 20.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **21.00 €** | 36.7 % | **5.7 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 57.4 % | **18.3 %** | 18.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.50 €** | 34.1 % | **15.8 %** | 38.58 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **16.50 €** | 47.6 % | **8.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7NP WiFi 4K + 1080p 128 GB palubná kamera | 126.50 € | **120.50 €** | 14.1 % | **8.7 %** | 120.58 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 57 | 141.00 € | **135.00 €** | 17.6 % | **12.6 %** | 135.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **14.00 €** | 74.0 % | **21.9 %** | 14.13 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **31.50 €** | 28.5 % | **8.1 %** | 31.86 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.50 €** | 33.8 % | **20.1 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **29.00 €** | 39.4 % | **16.0 %** | 29.21 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| AMICA DI 6401 PSB | 176.50 € | **170.90 €** | 8.5 % | **5.1 %** | 152.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **59.00 €** | 22.4 % | **11.8 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **17.00 €** | 51.1 % | **13.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 39.3 % | **31.9 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **118.50 €** | 25.9 % | **20.3 %** | 118.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV T7S (čierny) | 120.00 € | **114.50 €** | 13.6 % | **8.4 %** | 114.72 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **116.50 €** | 26.2 % | **20.6 %** | 116.63 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 42.7 % | **19.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **42.00 €** | 35.1 % | **20.4 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 47.1 % | **16.6 %** | 19.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 33.0 % | **5.4 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 35.3 % | **7.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.90 €** | 32.9 % | **16.0 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Ice Machine 651 | 105.00 € | **100.00 €** | 17.6 % | **12.0 %** | 100.08 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 203.00 € | **198.00 €** | 12.0 % | **9.2 %** | 198.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 55.8 % | **16.9 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **35.00 €** | 25.2 % | **9.6 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 55.6 % | **11.6 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 webová kamera | 57.90 € | **53.00 €** | 19.1 % | **9.0 %** | 53.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.90 €** | 30.4 % | **17.8 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **70.00 €** | 25.4 % | **17.4 %** | 70.21 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **87.50 €** | 19.5 % | **13.4 %** | 87.75 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 33.0 % | **11.9 %** | 25.41 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **45.00 €** | 30.2 % | **17.8 %** | 45.25 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.90 €** | 32.2 % | **22.6 %** | 59.96 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.50 €** | 33.8 % | **20.6 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.50 €** | 29.1 % | **16.3 %** | 42.71 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.90 €** | 27.4 % | **13.5 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.50 €** | 33.0 % | **19.6 %** | 41.88 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **20.00 €** | 42.7 % | **16.0 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **20.00 €** | 39.1 % | **13.1 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone X1 megaphone and distorting voc... | 104.00 € | **99.50 €** | 15.0 % | **10.0 %** | 99.74 € | cena podľa najlacnejšieho iného predajcu |
| Prevodovka PXN - usporiadanie H 7+1 | 77.50 € | **73.00 €** | 13.1 % | **6.5 %** | 73.42 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.50 €** | 55.8 % | **19.1 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 51.9 % | **16.1 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **13.00 €** | 44.7 % | **8.0 %** | 13.22 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 54.6 % | **16.4 %** | 13.88 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **28.00 €** | 36.0 % | **17.9 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **23.00 €** | 28.1 % | **8.5 %** | 23.17 € | cena podľa najlacnejšieho iného predajcu |
| LED trubicové svietidlo NEEWER TL60 20 W | 157.00 € | **152.90 €** | 21.3 % | **18.2 %** | 153.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.90 €** | 52.4 % | **19.7 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 29.6 % | **6.3 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS210 PRO AT1 PRO Anoutway Mini pumpa na bic... | 47.50 € | **43.50 €** | 20.9 % | **10.7 %** | 43.62 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 864 Senior Radio | 132.00 € | **128.00 €** | 17.9 % | **14.4 %** | 128.17 € | cena podľa najlacnejšieho iného predajcu |
| popruh na fotoaparát PGYTECH Pocket-Series | 34.00 € | **30.00 €** | 38.3 % | **22.0 %** | 30.21 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 133.00 € | **129.00 €** | 19.5 % | **15.9 %** | 129.25 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-NY-8088MJD mixér s nádobou | 106.00 € | **102.00 €** | 16.5 % | **12.1 %** | 102.37 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo modré | 83.00 € | **79.00 €** | 13.3 % | **7.8 %** | 79.50 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **96.00 €** | 18.7 % | **14.0 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 46.8 % | **11.9 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.90 €** | 40.5 % | **22.4 %** | 25.96 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 36.5 % | **17.2 %** | 22.46 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **21.00 €** | 35.0 % | **15.3 %** | 21.04 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **16.90 €** | 39.6 % | **15.1 %** | 16.95 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **21.00 €** | 40.8 % | **20.2 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.50 €** | 27.9 % | **17.1 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát PGYTECH Pocket-Series (fialový) | 33.50 € | **30.00 €** | 36.2 % | **22.0 %** | 30.21 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 40.1 % | **15.6 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 43.9 % | **15.6 %** | 14.21 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 152.90 € | **149.50 €** | 8.8 % | **6.4 %** | 149.66 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall súprava na strihanie domácich zvierat 4 v 1... | 46.90 € | **43.50 €** | 29.2 % | **19.8 %** | 43.83 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.07 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **30.00 €** | 30.8 % | **17.8 %** | 30.21 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **29.00 €** | 33.2 % | **19.6 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 32.6 % | **18.2 %** | 26.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 41.5 % | **35.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09S | 46.00 € | **42.90 €** | 13.4 % | **5.8 %** | 42.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.90 €** | 30.6 % | **20.6 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.50 €** | 21.5 % | **5.1 %** | 18.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.50 €** | 42.5 % | **32.3 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 3601 | 94.90 € | **91.90 €** | 8.6 % | **5.2 %** | 90.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Batéria do kamery SMALLRIG DMW-BLK22 (oranžová) | 28.50 € | **25.50 €** | 19.0 % | **6.5 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Popruh na fotoaparát PGYTECH Pocket-Series (zelený) | 26.00 € | **23.00 €** | 38.9 % | **22.9 %** | 23.08 € | cena podľa najlacnejšieho iného predajcu |
| BoboVR F3 rozhranie pre tvár | 30.00 € | **27.00 €** | 28.2 % | **15.4 %** | 27.25 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 139.00 € | **136.00 €** | 15.5 % | **13.0 %** | 136.31 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové osvetlenie PGY Magnetic Pocket Fill Light | 23.50 € | **20.50 €** | 37.3 % | **19.7 %** | 20.83 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester Ancel BA201 8-16V DC | 52.00 € | **49.00 €** | 19.1 % | **12.2 %** | 49.38 € | cena podľa najlacnejšieho iného predajcu |
| Zvuková karta Maono G1 Neo (biela) | 46.50 € | **43.50 €** | 15.3 % | **7.9 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Maono G1 Neo Sound Card Black | 46.50 € | **43.50 €** | 13.8 % | **6.4 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| BALDRTHERM B0598 3-kanálový termohygrometer s automa... | 21.50 € | **18.50 €** | 33.0 % | **14.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
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
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 34.0 % | **20.9 %** | 24.64 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 55.1 % | **39.9 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **19.90 €** | 20.6 % | **6.4 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **22.00 €** | 33.5 % | **19.4 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.42 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát PGY Pocket-Series (fialový) | 25.50 € | **23.00 €** | 36.2 % | **22.9 %** | 23.08 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 113.50 € | **111.00 €** | 14.1 % | **11.5 %** | 111.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 s 6 ventilátormi (čie... | 116.00 € | **113.50 €** | 18.1 % | **15.5 %** | 113.71 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash F1 (čierna) + 6 ventilát... | 116.00 € | **113.50 €** | 14.9 % | **12.4 %** | 113.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 18.00 € | **15.50 €** | 76.7 % | **52.2 %** | 15.77 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10100 Smart Ceramic | 55.50 € | **53.00 €** | 16.6 % | **11.4 %** | 53.38 € | cena podľa najlacnejšieho iného predajcu |
| Pásik na ruku PGY (zelený) | 20.50 € | **18.00 €** | 36.1 % | **19.5 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Spájkovacia stanica FNIRSI DWS-200 F | 138.50 € | **136.00 €** | 12.1 % | **10.1 %** | 136.42 € | cena podľa najlacnejšieho iného predajcu |
| Venta Filter Hepa 13 for AP100 | 50.50 € | **48.00 €** | 16.7 % | **10.9 %** | 48.42 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát PGY z radu Pocket-Series | 20.50 € | **18.00 €** | 35.2 % | **18.7 %** | 18.46 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 22.50 € | **20.00 €** | 24.8 % | **10.9 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.8 % | **7.7 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.1 % | **7.1 %** | 16.88 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.50 €** | 41.3 % | **22.1 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Graef S 10005 | 116.90 € | **114.50 €** | 14.2 % | **11.8 %** | 114.54 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24440-56 | 115.90 € | **113.50 €** | 14.2 % | **11.8 %** | 113.79 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi spínač na žalúzie Meross MRS100MA(... | 23.90 € | **21.50 €** | 26.1 % | **13.4 %** | 21.62 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 314.00 € | **311.90 €** | 57.0 % | **56.0 %** | 311.98 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 18.3 % | **8.2 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 59.00 € | **56.90 €** | 13.2 % | **9.2 %** | 56.93 € | cena podľa najlacnejšieho iného predajcu |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 20.00 € | **17.90 €** | 43.1 % | **28.1 %** | 17.95 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT603 (čierna) | 34.00 € | **31.90 €** | 27.7 % | **19.8 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 411BD | 67.50 € | **65.50 €** | 8.8 % | **5.6 %** | 65.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cecotec Ready Warm 10000 Top Ceramic | 47.50 € | **45.50 €** | 17.0 % | **12.1 %** | 45.54 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 17.50 € | **15.50 €** | 66.4 % | **47.4 %** | 15.80 € | cena podľa najlacnejšieho iného predajcu |
| Pásik na ruku PGY (čierny) | 20.00 € | **18.00 €** | 32.7 % | **19.5 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Pásik na ruku PGYTECH Pocket (fialový) | 20.00 € | **18.00 €** | 32.7 % | **19.5 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Bellagio červený multikapslový | 115.00 € | **113.00 €** | 7.4 % | **5.5 %** | 113.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 129.00 € | **127.00 €** | 14.8 % | **13.1 %** | 127.46 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát PGY Pocket-Series (čierny) | 20.00 € | **18.00 €** | 31.9 % | **18.7 %** | 18.46 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **18.00 €** | 30.7 % | **17.7 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 62.0 % | **45.9 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **17.00 €** | 33.3 % | **19.5 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **15.50 €** | 25.0 % | **11.1 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **72.90 €** | 17.6 % | **14.6 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| Zeblaze Btalk 3 Plus Smartwatch (Black) | 21.90 € | **20.00 €** | 15.4 % | **5.4 %** | 17.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete Vintage 2868/03, krémová | 42.90 € | **41.00 €** | 18.8 % | **13.6 %** | 41.08 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart vodní filtr kompatibilní 4ks | 17.90 € | **16.00 €** | 24.1 % | **10.9 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Vitoria PV3700 | 37.90 € | **36.00 €** | 16.5 % | **10.7 %** | 36.38 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 21.50 € | **19.90 €** | 15.0 % | **6.4 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Drevený LED vianočný stromček Solight 1V282, 64 cm, ... | 33.50 € | **31.90 €** | 42.8 % | **36.0 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 19.50 € | **17.90 €** | 15.0 % | **5.6 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Behringer BH40 High-Fidelity slúchadlá | 45.00 € | **43.50 €** | 29.4 % | **25.1 %** | 43.62 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF85WTBXC | 109.00 € | **107.50 €** | 14.4 % | **12.9 %** | 107.67 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto Lamborghini Huracán | 32.00 € | **30.50 €** | 19.5 % | **13.9 %** | 30.71 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H3 Pro (biele) | 42.00 € | **40.50 €** | 12.7 % | **8.7 %** | 40.73 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Pure POP Home & Travel DT2040E1 | 36.50 € | **35.00 €** | 15.8 % | **11.1 %** | 35.25 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (sivá) | 11.50 € | **10.00 €** | 22.7 % | **6.7 %** | 10.39 € | cena podľa najlacnejšieho iného predajcu |
| Vianočný LED svietnik s hviezdami Solight 1V265, 30 ... | 18.00 € | **16.50 €** | 53.9 % | **41.1 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **33.00 €** | 47.5 % | **41.1 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.50 €** | 33.0 % | **22.7 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH 6756WO | 124.90 € | **123.50 €** | 10.0 % | **8.8 %** | 123.60 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO Rapid PLA+ (čierny) | 11.90 € | **10.50 €** | 22.3 % | **7.9 %** | 10.65 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **11.50 €** | 40.5 % | **26.0 %** | 11.57 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.30 € | **7.10 €** | 66.6 % | **42.5 %** | 7.20 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady Mobile+ Kit | 67.00 € | **65.90 €** | 21.2 % | **19.2 %** | 65.99 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa Portable Monitor Z1FC 16,1" | 113.00 € | **112.00 €** | 6.3 % | **5.3 %** | 112.03 € | cena podľa najlacnejšieho iného predajcu |
| Herný stojan ONIKUMA ST-2 (biely) | 14.90 € | **13.90 €** | 20.9 % | **12.8 %** | 13.98 € | cena podľa najlacnejšieho iného predajcu |
| Fleg Helikoptéra na dálkové ovládání | 25.50 € | **24.50 €** | 18.9 % | **14.3 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny Nedis analógové, nástenné s fotorámikmi, 40 cm | 13.00 € | **12.00 €** | 23.5 % | **14.0 %** | 12.13 € | cena podľa najlacnejšieho iného predajcu |
| Venta H13 & Anti-Formaldehyd set 2er VPE | 68.50 € | **67.50 €** | 13.3 % | **11.7 %** | 67.63 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75BWBXC | 72.50 € | **71.50 €** | 14.4 % | **12.8 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75TKBXC | 72.50 € | **71.50 €** | 14.4 % | **12.8 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu |
| Fontána pre zvieratá / napájačka 1,5 l Rojeco | 17.00 € | **16.00 €** | 15.7 % | **8.9 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka SMALLRIG X99 | 241.50 € | **240.50 €** | 9.7 % | **9.3 %** | 240.68 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 11000 | 135.50 € | **134.50 €** | 10.4 % | **9.6 %** | 134.75 € | cena podľa najlacnejšieho iného predajcu |
| Tefal ZP2M04E0 | 24.00 € | **23.00 €** | 13.9 % | **9.2 %** | 23.38 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Glow Mist 1/4 | 47.50 € | **46.50 €** | 12.8 % | **10.4 %** | 46.88 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 20.00 € | **19.00 €** | 18.3 % | **12.4 %** | 19.42 € | cena podľa najlacnejšieho iného predajcu |
| Filter CPL PGY Osmo POCKET 3/4 | 19.00 € | **18.00 €** | 25.1 % | **18.5 %** | 18.46 € | cena podľa najlacnejšieho iného predajcu |
| Dreame Mop Pad D20, D20 Plus, D20 Pro, D20 Pro Plus | 11.90 € | **11.00 €** | 27.3 % | **17.7 %** | 11.13 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Black | 41.90 € | **41.00 €** | 17.3 % | **14.7 %** | 41.04 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Pink | 41.90 € | **41.00 €** | 17.3 % | **14.7 %** | 41.04 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Unlimited pánev 25cm  G2553872 | 34.90 € | **34.00 €** | 10.7 % | **7.9 %** | 34.10 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 30.90 € | **30.00 €** | 14.3 % | **11.0 %** | 30.25 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 White | 27.90 € | **27.00 €** | 17.6 % | **13.8 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Pink | 27.90 € | **27.00 €** | 17.6 % | **13.8 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **26.50 €** | 18.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.90 €** | 12.3 % | **9.3 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 137 | 34.00 € | **33.50 €** | 13.9 % | **12.2 %** | 33.58 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP Black | 25.00 € | **24.50 €** | 16.9 % | **14.5 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Sati Crema 1 kg zrno | 21.00 € | **20.50 €** | 12.0 % | **9.4 %** | 20.58 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, červená | 27.00 € | **26.50 €** | 17.6 % | **15.4 %** | 26.67 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma SPRING průměr 26 cm, modrá | 27.00 € | **26.50 €** | 17.6 % | **15.4 %** | 26.67 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Rouge BP3443 | 32.50 € | **32.00 €** | 12.4 % | **10.7 %** | 32.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 21.00 € | **20.50 €** | 47.3 % | **43.8 %** | 20.68 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF SNZB-04PR2 – Senzor otvorenia okien a dverí | 13.50 € | **13.00 €** | 16.1 % | **11.8 %** | 13.19 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9176RK | 29.50 € | **29.00 €** | 11.6 % | **9.7 %** | 29.21 € | cena podľa najlacnejšieho iného predajcu |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 13.3 % | **10.2 %** | 18.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 17.00 € | **16.50 €** | 42.2 % | **38.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0007 Pozadie | 41.50 € | **41.00 €** | 18.1 % | **16.7 %** | 41.25 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 100 | 30.00 € | **29.50 €** | 12.8 % | **10.9 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 4400 polohovací držák pro TV 32"-80" | 78.50 € | **78.00 €** | 11.1 % | **10.3 %** | 78.29 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 29.50 € | **29.00 €** | 17.0 % | **15.0 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 63.50 € | **63.00 €** | 12.4 % | **11.5 %** | 63.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera EVO 27876 Porsche 911 GT3 R | 40.00 € | **39.50 €** | 9.2 % | **7.9 %** | 39.79 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64244 Porsche 992 GT3 No.2 | 16.50 € | **16.00 €** | 17.5 % | **13.9 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 silver | 24.00 € | **23.50 €** | 10.2 % | **7.9 %** | 23.84 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhoľnatého MOES WSS-CO s pripojením c... | 29.50 € | **29.00 €** | 18.6 % | **16.6 %** | 29.35 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Magnetic Wall | 12.00 € | **11.50 €** | 15.0 % | **10.3 %** | 11.88 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4813 Žehlička SERENA červená | 46.50 € | **46.00 €** | 12.3 % | **11.1 %** | 46.38 € | cena podľa najlacnejšieho iného predajcu |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 15.00 € | **14.50 €** | 10.4 % | **6.7 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický hrnec TEESA TSA8091 Multicooker 2L, 12-24... | 68.50 € | **68.00 €** | 17.8 % | **16.9 %** | 68.39 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 20.50 € | **20.00 €** | 13.9 % | **11.1 %** | 20.41 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (biela) | 178.50 € | **178.00 €** | 9.0 % | **8.7 %** | 178.41 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (čierny) | 178.50 € | **178.00 €** | 9.0 % | **8.7 %** | 178.41 € | cena podľa najlacnejšieho iného predajcu |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.50 € | **52.00 €** | 11.2 % | **10.2 %** | 52.42 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX ZE064 | 29.50 € | **29.00 €** | 10.7 % | **8.8 %** | 29.44 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 10.50 € | **10.00 €** | 45.9 % | **39.0 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 148.50 € | **148.00 €** | 20.6 % | **20.2 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.90 €** | 25.3 % | **21.2 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux ESKQ9 | 14.90 € | **14.50 €** | 16.5 % | **13.4 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 6000K... | 4.70 € | **4.30 €** | 74.5 % | **59.6 %** | 4.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 13.90 € | **13.50 €** | 41.3 % | **37.2 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **38.50 €** | 7.0 % | **5.9 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (biela) | 19.90 € | **19.50 €** | 16.9 % | **14.5 %** | 19.71 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (čierna) | 19.90 € | **19.50 €** | 16.9 % | **14.5 %** | 19.71 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (sivá) | 19.90 € | **19.50 €** | 16.9 % | **14.5 %** | 19.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.90 € | **16.50 €** | 24.5 % | **21.5 %** | 16.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W2 ... | 10.00 € | **9.70 €** | 9.1 % | **5.9 %** | 9.76 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.25 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa GlidePro PV2600 | 27.00 € | **26.90 €** | 11.6 % | **11.2 %** | 26.92 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar PCD-499 BT Discman CD/MP3 s BT | 47.00 € | **46.90 €** | 13.6 % | **13.4 %** | 46.92 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 20.00 € | **19.90 €** | 32.6 % | **32.0 %** | 19.98 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61645 Zatáčka 3/45 (4ks) | 26.00 € | **25.90 €** | 23.1 % | **22.6 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| San Marco INTENSO 500 g | 12.00 € | **11.90 €** | 10.3 % | **9.4 %** | 11.96 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-WW, 20 m, ... | 15.00 € | **14.90 €** | 49.5 % | **48.5 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| ETA Moneto II 4453 90000 | 87.00 € | **86.90 €** | 5.3 % | **5.2 %** | 81.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |

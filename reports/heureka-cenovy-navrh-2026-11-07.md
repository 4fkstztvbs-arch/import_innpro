# Návrh na úpravu cien podľa Heureka porovnania — 2026-11-07

Vstup: `premiumstore-sk_2026-11-07_07-55.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6106**
- Návrh **zvýšiť** cenu: **202** produktov
- Návrh **znížiť** cenu: **534** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5370** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **75**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **355**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (202)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **1173.00 €** | 15.0 % | **26.5 %** | 1215.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Mini PC MINIS FORUM UM890 Pro Ryzen 9 8945HS 16 GB +... | 946.50 € | **1020.50 €** | 5.0 % | **13.2 %** | 1035.82 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **770.00 €** | 26.6 % | **39.2 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **769.50 €** | 3.7 % | **13.1 %** | 784.82 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **534.00 €** | 4.6 % | **15.1 %** | 554.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka elektromobilov Besen BS40 22 kW SOLAR-APP | 477.00 € | **524.50 €** | 15.0 % | **26.4 %** | 589.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka elektromobilov Besen BS40 s výkonom 22 kW ... | 437.00 € | **480.50 €** | 15.0 % | **26.4 %** | 539.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka elektromobilov Besen BS40 s výkonom 11 kW ... | 379.50 € | **417.00 €** | 15.0 % | **26.4 %** | 467.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **330.00 €** | 32.8 % | **45.9 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrický skúter NAVEE ST5 Pro | 776.50 € | **805.50 €** | 15.0 % | **19.3 %** | 820.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **342.00 €** | 15.0 % | **25.5 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **310.50 €** | 27.3 % | **39.7 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 261.00 € | **287.00 €** | 14.9 % | **26.4 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **266.00 €** | 10.8 % | **21.9 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termokamera Mileseey TR256i USB-C Mini | 247.00 € | **271.00 €** | 29.6 % | **42.2 %** | 277.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 649.00 € | **673.00 €** | 11.6 % | **15.8 %** | 687.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Maxxo VM Master | 232.90 € | **256.00 €** | 10.1 % | **21.0 %** | 270.97 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **271.50 €** | 30.7 % | **41.9 %** | 277.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Skladací elektrický bežecký pás ACEZOE P11pro | 203.00 € | **223.00 €** | 14.9 % | **26.2 %** | 236.04 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beyerdynamic MMX 200, čierne | 199.00 € | **218.90 €** | 15.0 % | **26.5 %** | 237.69 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| SMALLRIG RC 60B 60 W LED štúdiové osvetlenie | 196.90 € | **216.50 €** | 15.0 % | **26.4 %** | 238.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **213.90 €** | 4.1 % | **14.5 %** | 220.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **210.50 €** | 4.4 % | **14.8 %** | 221.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| beyerdynamic DT 252 80 Ohm | 188.90 € | **207.50 €** | 9.2 % | **19.9 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **212.50 €** | 4.5 % | **14.1 %** | 217.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kruhový držiak SMALLRIG pre DJI RS | 472.00 € | **490.00 €** | 15.0 % | **19.4 %** | 500.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Mini PC GEEKOM IT12 Max Core Ultra 5 125U 16 GB 500 ... | 740.50 € | **757.50 €** | 11.3 % | **13.9 %** | 772.87 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sušič vlasov MOVA Master 10 (ružový) | 129.00 € | **141.90 €** | 15.0 % | **26.5 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ZGEMMA H8 2H SE Combo DVB-S2/T2/C 4K CA Enigma2 H.26... | 124.90 € | **136.50 €** | 14.5 % | **25.2 %** | 139.69 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **127.00 €** | 4.4 % | **14.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **121.50 €** | 14.9 % | **26.1 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **185.00 €** | 35.1 % | **42.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje GEC5C41SG | 315.50 € | **324.90 €** | 10.1 % | **13.3 %** | 331.60 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Svetelný statív SMALLRIG RA-S280A s ramenom 280 cm | 97.90 € | **106.50 €** | 15.0 % | **25.1 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **105.00 €** | 6.2 % | **15.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal GV 9620E0 | 360.00 € | **368.50 €** | 6.9 % | **9.4 %** | 376.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko B5RCNA416HXBR | 467.50 € | **476.00 €** | 10.1 % | **12.1 %** | 486.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava batériových dosiek SMALLRIG 4064B V-Mount | 87.50 € | **96.00 €** | 15.3 % | **26.5 %** | 125.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **123.00 €** | 4.4 % | **11.7 %** | 125.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **87.90 €** | 30.9 % | **43.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| CANDY CDIH 1L949 | 255.90 € | **263.50 €** | 10.0 % | **13.3 %** | 269.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtový ovládač GameSir G7 Pro DD2 | 79.50 € | **87.00 €** | 18.6 % | **29.8 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Chladič procesora Darkflash DH360D v2 (čierny) | 78.50 € | **86.00 €** | 15.0 % | **26.0 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Teplovzdušná fritéza MOVA FD10s Pro 6L 2000W (čierna) | 79.50 € | **87.00 €** | 14.7 % | **25.5 %** | 110.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **93.50 €** | 4.2 % | **12.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **77.50 €** | 4.4 % | **14.8 %** | 79.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 131.50 € | **138.50 €** | 10.0 % | **15.8 %** | 141.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Čistička vzduchu MOVA Stellar X10 | 71.50 € | **78.50 €** | 14.9 % | **26.1 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **114.50 €** | 32.4 % | **40.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Salente Combo-4In1 | 107.50 € | **114.00 €** | 10.1 % | **16.8 %** | 116.43 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **81.90 €** | 6.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Leifheit Žehlicí prkno Air Board Express | 61.00 € | **67.00 €** | 10.1 % | **20.9 %** | 69.65 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Motorcycle Intercom EJEAS MS20 | 144.00 € | **150.00 €** | 8.8 % | **13.3 %** | 153.35 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 259.90 € | **265.90 €** | 15.0 % | **17.6 %** | 271.36 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Selfie tyč Puluz pre športové fotoaparáty (čierna) | 63.00 € | **69.00 €** | 18.9 % | **30.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **67.50 €** | 31.6 % | **44.4 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **68.50 €** | 18.0 % | **29.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **68.50 €** | 35.0 % | **47.9 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 260.00 € | **265.90 €** | 15.0 % | **17.6 %** | 271.36 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **97.90 €** | 34.8 % | **43.0 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI Z90T palubná kamera | 163.90 € | **169.50 €** | 11.3 % | **15.1 %** | 173.27 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 57.40 € | **62.90 €** | 30.1 % | **42.6 %** | 64.28 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Freewell ND pre OSMO 360 – balenie po 3... | 177.90 € | **183.00 €** | 21.7 % | **25.2 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blesk GODOX LUX Senior (zelený) | 112.00 € | **117.00 €** | 12.0 % | **17.0 %** | 119.48 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Indukčná varná doska AMZCHEF FYM35-S16, 2 zóny | 116.00 € | **121.00 €** | 15.0 % | **20.0 %** | 123.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LED videolampa SMALLRIG RF 10C | 50.90 € | **55.90 €** | 15.0 % | **26.3 %** | 59.81 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 51.50 € | **56.50 €** | 7.0 % | **17.4 %** | 64.28 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **53.50 €** | 6.1 % | **16.1 %** | 55.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Softbox SMALLRIG LA-O90 90 cm | 74.90 € | **79.50 €** | 15.0 % | **22.1 %** | 81.52 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak na monitor SMALLRIG 3026B | 45.50 € | **50.00 €** | 14.6 % | **26.0 %** | 52.51 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ufesa kávovar 3v1 Bellagio bílý | 118.00 € | **122.50 €** | 10.0 % | **14.2 %** | 125.40 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Autokamera DDPAI MINI Pro Wi-Fi 3K | 42.90 € | **47.00 €** | 15.5 % | **26.6 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Russell Hobbs 26550-56/RH | 47.50 € | **51.50 €** | 10.6 % | **19.9 %** | 52.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **43.90 €** | 42.5 % | **56.5 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Russell Hobbs 26554-56/RH | 45.90 € | **49.50 €** | 10.9 % | **19.6 %** | 50.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LIMO BAR - Capsletto TIME Black | 56.90 € | **60.50 €** | 10.4 % | **17.4 %** | 61.86 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **42.50 €** | 4.9 % | **14.6 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Cycplus AS210 PRO AT1 PRO Anoutway Mini pumpa na bic... | 43.50 € | **47.00 €** | 10.7 % | **19.6 %** | 48.16 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor ANMITE A160W03,16" | 84.00 € | **87.50 €** | 11.5 % | **16.1 %** | 89.60 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje BHI681EB | 112.50 € | **116.00 €** | 10.2 % | **13.7 %** | 118.75 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fixed Game Pods FIXPDS-G-WH | 36.50 € | **40.00 €** | 10.7 % | **21.3 %** | 47.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| RUSSELL HOBBS 23510-56/RH | 51.50 € | **54.90 €** | 10.8 % | **18.1 %** | 56.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.00 €** | 5.4 % | **11.7 %** | 56.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Russell Hobbs 26731-56/RH | 38.50 € | **41.50 €** | 10.6 % | **19.2 %** | 42.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filter SMALLRIG CPL 67 mm | 33.50 € | **36.50 €** | 14.4 % | **24.7 %** | 38.28 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Arzopa Portable Monitor Z1FC 16,1" | 112.00 € | **115.00 €** | 5.3 % | **8.2 %** | 117.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá ONIKUMA GT836 (biele) | 32.50 € | **35.50 €** | 15.2 % | **25.9 %** | 38.98 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá ONIKUMA GT836 (čierne) | 32.50 € | **35.50 €** | 15.2 % | **25.9 %** | 38.98 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **34.50 €** | 6.1 % | **16.2 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Maxxo UNI filtry 12ks | 33.50 € | **36.50 €** | 10.3 % | **20.2 %** | 47.19 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje B1300E | 33.50 € | **36.50 €** | 10.1 % | **20.0 %** | 76.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **92.50 €** | 39.0 % | **43.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **140.00 €** | 15.9 % | **18.1 %** | 143.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **34.90 €** | 29.4 % | **39.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| RUSSELL HOBBS 24180-56 | 38.90 € | **41.50 €** | 10.5 % | **17.9 %** | 42.75 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá Onikuma GT887 (čierne) | 26.50 € | **29.00 €** | 15.0 % | **25.9 %** | 30.15 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava plynového pedála a spojky MOZA SRP Lite2 Per... | 38.50 € | **41.00 €** | 9.1 % | **16.2 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Russell Hobbs 27370-56 | 35.50 € | **38.00 €** | 10.8 % | **18.6 %** | 39.30 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Waterproof diving case PULUZ for Insta360 X4 | 62.00 € | **64.50 €** | 5.8 % | **10.1 %** | 66.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný dávkovač krmiva CatLink F04 STD | 108.50 € | **111.00 €** | 13.6 % | **16.2 %** | 113.51 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LED svetelný panel GODOX Litemons LP600R RGB | 134.00 € | **136.50 €** | 13.4 % | **15.6 %** | 139.40 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| BoboVR F3 rozhranie pre tvár | 27.00 € | **29.50 €** | 15.4 % | **26.0 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje GS543D15W | 305.00 € | **307.50 €** | 8.0 % | **8.9 %** | 314.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Slúchadlá Onikuma GT805 (biele) | 26.50 € | **29.00 €** | 14.5 % | **25.3 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrický bežecký pás MERACH MR-T25B2 | 399.50 € | **402.00 €** | 15.0 % | **15.8 %** | 410.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **29.50 €** | 40.9 % | **53.1 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit Page Profi 300 | 35.90 € | **38.00 €** | 10.5 % | **17.0 %** | 39.05 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje SIK2200WB | 22.90 € | **25.00 €** | 11.7 % | **21.9 %** | 41.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Softbox SMALLRIG RA-D120 120 cm | 172.90 € | **175.00 €** | 15.0 % | **16.4 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektronický boxerský terč HMS TB13 s LED, Bluetooth... | 116.50 € | **118.50 €** | 3.4 % | **5.2 %** | 112.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Batériová doska SMALLRIG 3016 V-Mount 15 mm | 36.90 € | **38.90 €** | 14.9 % | **21.2 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Webová kamera EMEET Piko (čierna) | 50.50 € | **52.50 €** | 13.8 % | **18.3 %** | 53.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **34.50 €** | 4.8 % | **11.3 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Softbox SMALLRIG RA-D60 60 cm | 57.50 € | **59.50 €** | 14.9 % | **18.9 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GODOX CS-85D Softbox | 70.00 € | **72.00 €** | 13.8 % | **17.0 %** | 73.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Lenco KCR-150 white | 75.50 € | **77.50 €** | 10.7 % | **13.6 %** | 79.28 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kryt pre kameru SMALLRIG Osmo Action 5 Pro | 20.50 € | **22.50 €** | 14.7 % | **25.9 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 219.00 € | **221.00 €** | 13.1 % | **14.2 %** | 225.69 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-11KW... | 321.50 € | **323.50 €** | 30.6 % | **31.5 %** | 330.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-22KW... | 351.00 € | **353.00 €** | 29.8 % | **30.5 %** | 360.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje SIH2200BLC | 20.50 € | **22.50 €** | 10.8 % | **21.6 %** | 36.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná batéria SMALLRIG NP-FZ100 | 37.00 € | **38.90 €** | 14.8 % | **20.7 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H168CX (HP 302 Tri-colour XL) | 19.00 € | **20.90 €** | 31.4 % | **44.5 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **41.50 €** | 53.2 % | **59.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Mriežka GODOX TL-G60 TL60 | 21.00 € | **22.50 €** | 16.4 % | **24.7 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Živica Anycubic ABS-Like 3.0 (čierna) | 19.50 € | **21.00 €** | 14.5 % | **23.4 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Živica Anycubic ABS-Like 3.0 (sivá) | 19.50 € | **21.00 €** | 14.5 % | **23.4 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.00 € | **17.50 €** | 21.6 % | **33.0 %** | 19.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtové slúchadlá EDIFIER W830NB (slonovinová farba) | 70.50 € | **72.00 €** | 23.3 % | **25.9 %** | 73.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtové slúchadlá Edifier W830NB (čierne) | 70.50 € | **72.00 €** | 23.3 % | **25.9 %** | 73.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Schody pre podstielky Catlink Scooper | 84.00 € | **85.50 €** | 16.6 % | **18.7 %** | 87.61 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H168BX (HP 302 Black XL) | 17.00 € | **18.50 €** | 31.9 % | **43.5 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| 3D tlačiareň Anycubic Photon P1 | 612.00 € | **613.50 €** | 6.4 % | **6.7 %** | 626.05 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stativ SMALLRIG TRIBEX Carbon II z uhlíkových vlákien | 683.50 € | **685.00 €** | 15.0 % | **15.3 %** | 699.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Římská lavice, hyperextenze HMS LR8310 | 132.50 € | **133.90 €** | 4.0 % | **5.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| projekčná podložka GODOX AK-R21 | 78.50 € | **79.90 €** | 13.4 % | **15.5 %** | 81.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje SIH1800TQC | 14.50 € | **15.90 €** | 11.5 % | **22.3 %** | 21.32 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak Puluz na riadidlá pre bicykle a motocykle, ko... | 22.50 € | **23.90 €** | 5.2 % | **11.7 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kovové ochranné puzdro PULUZ pre Insta360 X5 | 32.50 € | **33.90 €** | 18.5 % | **23.6 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Popruh na headset BOBOVR M3 | 38.50 € | **39.90 €** | 29.6 % | **34.3 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pohybové čidlo ORBIS ISIMAT | 20.50 € | **21.90 €** | 5.4 % | **12.6 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ScanPart Sada příslušenství pro iRobot R | 32.50 € | **33.90 €** | 21.1 % | **26.4 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bicyklová baterka Superfire BL12 – 4800 mAh, USB, 2 ... | 17.50 € | **18.90 €** | 7.5 % | **16.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| KOMA RK01 - Univerzální rotační kartáč | 17.90 € | **19.00 €** | 11.9 % | **18.8 %** | 20.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak na telefón SMALLRIG 4299B s rýchlouzáverom | 48.90 € | **50.00 €** | 15.3 % | **17.9 %** | 51.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight teplomer, farba čierna | 14.90 € | **16.00 €** | 39.7 % | **50.0 %** | 21.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá Onikuma X91 (biele) | 16.90 € | **17.90 €** | 14.7 % | **21.5 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá Onikuma X91 (čierne) | 16.90 € | **17.90 €** | 14.7 % | **21.5 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 10.50 € | **11.50 €** | 23.4 % | **35.1 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak na telefón SMALLRIG 4611 typu Arca | 29.00 € | **30.00 €** | 14.8 % | **18.7 %** | 31.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filter Hang On SUNSUN HBL-801 | 21.00 € | **22.00 €** | 52.7 % | **60.0 %** | 23.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| PULUZ PU4119B 60W 2500K-6500K (Black) studio lamp. | 48.50 € | **49.50 €** | 6.6 % | **8.8 %** | 50.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stropné svietidlo Yeelight C2201C300 | 46.00 € | **47.00 €** | 12.9 % | **15.3 %** | 48.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 13.00 € | **14.00 €** | 23.9 % | **33.4 %** | 15.22 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Slnečník GODOX UB-L2-60 (veľký) | 35.50 € | **36.50 €** | 15.4 % | **18.6 %** | 37.81 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíječka USB BLOW 76-033 GaN 45W USB-A + USB-C + 1m... | 10.00 € | **11.00 €** | 7.0 % | **17.7 %** | 12.49 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GODOX LUX Junior Retro blesk | 69.00 € | **70.00 €** | 15.4 % | **17.1 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 10.50 € | **11.50 €** | 13.1 % | **23.8 %** | 13.28 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **11.90 €** | 9.5 % | **19.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 11.50 € | **12.50 €** | 13.5 % | **23.3 %** | 14.98 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 11.50 € | **12.50 €** | 10.8 % | **20.4 %** | 15.34 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WiFi router TP-Link Mercusys Halo H27BE(3-pack) WiFi... | 218.50 € | **219.50 €** | 11.9 % | **12.4 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Hydraulický statív SMALLRIG TRIBEX SE | 350.50 € | **351.50 €** | 15.0 % | **15.3 %** | 359.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WiFi RGBW 16M Gosund LB2S Tuya smart night light | 15.90 € | **16.90 €** | 50.0 % | **59.4 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 9.00 € | **9.90 €** | 12.7 % | **24.0 %** | 11.33 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 8.90 € | **9.70 €** | 19.4 % | **30.1 %** | 10.87 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **30.50 €** | 31.8 % | **35.2 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, studená b... | 9.80 € | **10.50 €** | 27.5 % | **36.6 %** | 11.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, teplá bie... | 9.80 € | **10.50 €** | 27.5 % | **36.6 %** | 11.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight bezdrôtový senzor k meteostanici TE90 | 9.80 € | **10.50 €** | 22.2 % | **30.9 %** | 12.28 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LED videolampa SMALLRIG Vibe P108 Pro | 33.90 € | **34.50 €** | 14.8 % | **16.9 %** | 35.87 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| BROTHER HL-L1232W | 116.90 € | **117.50 €** | 10.1 % | **10.7 %** | 119.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 58.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Puzdro SMALLRIG Basic pre DJI OSMO Action 6 | 21.00 € | **21.50 €** | 14.5 % | **17.2 %** | 22.52 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 13.50 € | **14.00 €** | 24.0 % | **28.6 %** | 15.03 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 2 vianočných LED svetielok Solight 1V287, 15/20... | 12.50 € | **13.00 €** | 43.7 % | **49.5 %** | 14.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.50 € | **40.00 €** | 37.8 % | **39.5 %** | 41.24 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Čistiaca sada DREAME pre modely H13 Pro/H12 Pro Ultra | 29.50 € | **30.00 €** | 15.6 % | **17.5 %** | 31.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Držiak na telefón SMALLRIG 4382 s upínacím držiakom ... | 21.50 € | **22.00 €** | 13.9 % | **16.6 %** | 23.36 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie Gari, 26W, 2340lm, 3CCT, IP65... | 11.50 € | **12.00 €** | 17.9 % | **23.0 %** | 13.48 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blesk GODOX iT30Pro pre Nikon | 71.50 € | **72.00 €** | 15.7 % | **16.5 %** | 73.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Reflektor GODOX RFT-25S | 71.50 € | **72.00 €** | 15.7 % | **16.5 %** | 73.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Webová kamera EMEET SmartCam S600L | 71.50 € | **72.00 €** | 15.1 % | **15.9 %** | 73.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blender G21 Experience White | 246.00 € | **246.50 €** | 14.6 % | **14.8 %** | 251.68 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 11.50 € | **11.90 €** | 30.2 % | **34.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **11.90 €** | 10.1 % | **14.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termobatoh Trizand 21070 | 12.50 € | **12.90 €** | 24.4 % | **28.4 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Powerline ethernet TP-Link Mercusys MP300 KIT 600Mbp... | 32.50 € | **32.90 €** | 5.9 % | **7.2 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 16.50 € | **16.90 €** | 5.9 % | **8.4 %** | 17.94 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **42.90 €** | 38.6 % | **39.8 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 5.10 € | **5.30 €** | 20.9 % | **25.6 %** | 6.37 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Drevená 3D LED vianočná dekorácia v ráme Solight 1V3... | 9.80 € | **10.00 €** | 36.2 % | **39.0 %** | 11.11 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Zlatá stolová LED vianočná hviezda Solight 1V262-G, ... | 9.80 € | **10.00 €** | 36.2 % | **39.0 %** | 11.11 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, neutrálna... | 9.80 € | **10.00 €** | 27.5 % | **30.1 %** | 11.37 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **29.90 €** | 36.2 % | **37.0 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Salente Rtx-L7 | 270.90 € | **271.00 €** | 8.5 % | **8.6 %** | 277.02 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Resto 96113 Pekáč 38 x 23 x 6,6 cm | 21.90 € | **22.00 €** | 10.0 % | **10.5 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Kryt kamery SMALLRIG Sony ZV-E10 Grip | 56.90 € | **57.00 €** | 15.1 % | **15.3 %** | 58.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Mini Bag PULUZ for DJI Osmo Pocket 3 (Black) | 5.80 € | **5.90 €** | 8.7 % | **10.5 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 6.80 € | **6.90 €** | 26.8 % | **28.7 %** | 7.93 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.40 €** | 11.3 % | **13.9 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 78.90 € | **79.00 €** | 5.0 % | **5.2 %** | 80.72 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |

## Návrh znížiť cenu (534)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **534.00 €** | 47.0 % | **16.2 %** | 534.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **485.50 €** | 29.8 % | **5.1 %** | 472.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Midas MR12 digital mixer | 498.90 € | **390.90 €** | 34.4 % | **5.3 %** | 391.00 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor BlitzWolf BW-V11 | 375.15 € | **295.50 €** | 33.5 % | **5.2 %** | 291.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **785.90 €** | 32.6 % | **20.7 %** | 785.92 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **294.90 €** | 48.6 % | **18.4 %** | 294.92 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 634.00 € | **564.90 €** | 40.8 % | **25.5 %** | 565.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu MOVA P10 | 246.50 € | **178.90 €** | 59.9 % | **16.0 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **240.50 €** | 47.7 % | **18.2 %** | 240.88 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **166.50 €** | 39.1 % | **5.1 %** | 157.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nástenná nabíjačka Besen pre elektromobily LX30  22 ... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **225.00 €** | 44.0 % | **18.0 %** | 225.25 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 855.00 € | **806.00 €** | 18.1 % | **11.3 %** | 806.02 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **263.00 €** | 26.4 % | **7.4 %** | 263.25 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **180.00 €** | 44.4 % | **15.2 %** | 180.29 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **155.00 €** | 47.6 % | **14.5 %** | 155.38 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **229.90 €** | 25.6 % | **5.1 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal G721SD74 | 142.90 € | **101.90 €** | 48.2 % | **5.7 %** | 101.99 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **209.50 €** | 41.5 % | **18.6 %** | 209.75 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **186.00 €** | 42.8 % | **17.8 %** | 186.38 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **184.50 €** | 42.3 % | **18.1 %** | 184.88 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **181.50 €** | 40.3 % | **18.3 %** | 181.63 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 330.00 € | **296.50 €** | 28.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **132.00 €** | 43.8 % | **15.0 %** | 132.50 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **152.50 €** | 27.8 % | **5.1 %** | 144.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **104.50 €** | 50.0 % | **14.1 %** | 104.75 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **179.50 €** | 33.8 % | **13.2 %** | 179.55 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **179.50 €** | 33.5 % | **13.0 %** | 179.55 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **318.50 €** | 32.7 % | **20.6 %** | 318.79 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **155.50 €** | 25.5 % | **5.2 %** | 141.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **145.50 €** | 45.0 % | **20.4 %** | 145.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **271.00 €** | 32.8 % | **19.8 %** | 271.36 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **125.50 €** | 43.8 % | **16.6 %** | 125.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **271.90 €** | 33.2 % | **20.6 %** | 271.92 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **122.50 €** | 48.4 % | **20.6 %** | 122.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **272.50 €** | 32.9 % | **20.5 %** | 272.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **330.00 €** | 31.9 % | **21.7 %** | 330.39 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **172.50 €** | 39.8 % | **20.6 %** | 172.58 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **82.50 €** | 58.2 % | **19.0 %** | 82.71 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **143.50 €** | 44.5 % | **22.6 %** | 143.67 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BSA6747DGWI | 565.50 € | **539.90 €** | 10.1 % | **5.1 %** | 489.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje FN619EAW6 | 561.50 € | **535.90 €** | 10.1 % | **5.1 %** | 503.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **154.90 €** | 42.8 % | **22.6 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **58.00 €** | 68.9 % | **18.7 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **148.50 €** | 42.0 % | **22.4 %** | 148.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **223.50 €** | 35.5 % | **22.6 %** | 223.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **76.50 €** | 38.1 % | **5.7 %** | 72.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **115.00 €** | 46.2 % | **22.4 %** | 115.33 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **102.90 €** | 49.0 % | **22.6 %** | 103.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na pripojenie k vodovodu pre automatické nap... | 309.00 € | **286.90 €** | 52.8 % | **41.9 %** | 287.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 900 PRO X, profesionálne slúchadlá | 249.00 € | **227.50 €** | 15.0 % | **5.1 %** | 206.96 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **65.90 €** | 41.3 % | **6.9 %** | 65.94 € | cena podľa najlacnejšieho iného predajcu |
| Samsung RB34C600DSA/EF | 466.50 € | **445.50 €** | 10.0 % | **5.1 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **129.00 €** | 39.9 % | **20.6 %** | 129.13 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi Pad 8 8/128GB Gray (71701) | 454.50 € | **433.90 €** | 10.1 % | **5.1 %** | 355.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi Pad 8 8/128GB Blue (71736) | 454.50 € | **433.90 €** | 10.1 % | **5.1 %** | 356.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 208.50 € | **188.90 €** | 31.2 % | **18.9 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **57.00 €** | 63.8 % | **22.2 %** | 57.25 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **93.50 €** | 45.4 % | **20.5 %** | 93.58 € | cena podľa najlacnejšieho iného predajcu |
| Stativ SMALLRIG AD-80 | 225.00 € | **205.90 €** | 14.9 % | **5.2 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **122.50 €** | 35.7 % | **17.5 %** | 122.75 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 61.90 € | **43.50 €** | 57.8 % | **10.9 %** | 43.56 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **81.90 €** | 28.6 % | **5.4 %** | 75.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LED štúdiové osvetlenie SMALLRIG RC 220B 220 W | 346.90 € | **328.90 €** | 15.0 % | **9.0 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **119.90 €** | 38.2 % | **20.7 %** | 119.96 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.50 €** | 40.2 % | **13.3 %** | 72.69 € | cena podľa najlacnejšieho iného predajcu |
| Elektráreň Allpowers S2000 Pro | 622.00 € | **605.00 €** | 17.4 % | **14.2 %** | 605.45 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **118.50 €** | 37.5 % | **20.5 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **55.50 €** | 50.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.50 €** | 44.8 % | **11.1 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **59.00 €** | 41.2 % | **11.4 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **31.50 €** | 71.1 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **124.90 €** | 22.1 % | **8.6 %** | 124.93 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BM201SG3DBG | 296.00 € | **280.50 €** | 13.5 % | **7.6 %** | 280.90 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **59.50 €** | 52.1 % | **20.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **120.00 €** | 36.1 % | **20.7 %** | 120.04 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 170.00 € | **154.90 €** | 29.0 % | **17.6 %** | 154.96 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 65.7 % | **17.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **75.00 €** | 42.8 % | **19.4 %** | 75.46 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **120.90 €** | 35.0 % | **20.6 %** | 120.96 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Kamera TP-Link Tapo C250 IP, 8MPx, WiFi, prísvit | 68.00 € | **53.90 €** | 32.8 % | **5.3 %** | 53.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic TG V70 s Dynamický mikrofón s vypínačom | 199.00 € | **184.90 €** | 15.0 % | **6.8 %** | 185.00 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **236.00 €** | 34.0 % | **26.5 %** | 236.19 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **111.00 €** | 31.2 % | **16.5 %** | 111.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **103.00 €** | 36.4 % | **20.2 %** | 103.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **41.00 €** | 53.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **286.50 €** | 25.0 % | **19.2 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 49.72 € | **35.90 €** | 50.4 % | **8.6 %** | 35.93 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **76.00 €** | 36.8 % | **15.9 %** | 76.25 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1855DB 2.0 (čierne) | 143.50 € | **129.90 €** | 23.3 % | **11.6 %** | 129.95 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **54.00 €** | 42.9 % | **15.0 %** | 54.33 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **49.50 €** | 34.8 % | **6.7 %** | 49.84 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Note 17 6/256GB Purple | 280.90 € | **267.90 €** | 10.1 % | **5.0 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Redmi Note 17 6/256GB Sky Teal | 280.90 € | **267.90 €** | 10.1 % | **5.0 %** | 238.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **61.90 €** | 39.2 % | **15.2 %** | 61.96 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **77.50 €** | 40.2 % | **20.5 %** | 77.63 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 322.50 € | **309.90 €** | 17.2 % | **12.6 %** | 309.96 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **114.50 €** | 33.7 % | **20.4 %** | 114.79 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 8000mAh 14.8V 100C 4S2P Lipo Battery Pack | 99.00 € | **86.50 €** | 20.4 % | **5.2 %** | 83.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **62.50 €** | 25.9 % | **5.1 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Držiak SMALLRIG 5123 | 141.00 € | **128.90 €** | 15.0 % | **5.1 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Dokovacia stanica Peladn S-1 s rozhraním Thunderbolt 3 | 147.50 € | **135.50 €** | 16.1 % | **6.6 %** | 135.78 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **123.50 €** | 34.2 % | **22.5 %** | 123.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **51.00 €** | 47.1 % | **20.0 %** | 51.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **83.50 €** | 19.4 % | **5.2 %** | 81.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.90 €** | 52.4 % | **16.0 %** | 35.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **55.90 €** | 30.4 % | **8.6 %** | 55.99 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **38.50 €** | 42.2 % | **10.1 %** | 38.53 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame Aqua10 Ultra Track Complete, Aqua10 U... | 110.00 € | **98.90 €** | 57.7 % | **41.8 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **89.00 €** | 37.3 % | **22.2 %** | 89.08 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **282.00 €** | 22.9 % | **18.3 %** | 282.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **86.50 €** | 35.6 % | **20.4 %** | 86.71 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **227.00 €** | 23.4 % | **17.8 %** | 227.05 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica TP-Link UH9120C USB-C, HDMI, RJ45,... | 52.50 € | **41.90 €** | 32.0 % | **5.4 %** | 39.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **126.90 €** | 46.5 % | **35.4 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.50 €** | 33.7 % | **21.6 %** | 102.52 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **82.00 €** | 35.2 % | **20.1 %** | 82.38 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook 14WQ LTE (UMM230242) | 214.50 € | **204.50 €** | 10.2 % | **5.1 %** | 194.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANDY CIO 225 EE/N | 298.90 € | **288.90 €** | 10.2 % | **6.5 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8500mAh 14.8V 60C 4S1P Lipo Battery ... | 116.00 € | **106.00 €** | 37.2 % | **25.4 %** | 106.19 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 429.00 € | **419.00 €** | 16.3 % | **13.6 %** | 419.20 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW403A | 89.50 € | **79.50 €** | 60.4 % | **42.5 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Základňa na čistenie textílií a kobercov pre vysávač... | 84.00 € | **74.00 €** | 56.4 % | **37.8 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **65.00 €** | 33.5 % | **15.9 %** | 65.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **60.00 €** | 29.7 % | **11.7 %** | 60.31 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 887.00 € | **877.50 €** | 19.7 % | **18.4 %** | 877.90 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **90.50 €** | 30.6 % | **18.3 %** | 90.88 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1280DB 2.0 (hnedé) | 105.00 € | **95.90 €** | 15.0 % | **5.0 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 56.3 % | **21.2 %** | 31.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **71.00 €** | 31.3 % | **16.6 %** | 71.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **28.50 €** | 40.3 % | **6.8 %** | 28.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrická pumpa FLEXTAIL Evo SUP Pump Pro (sivá) | 169.90 € | **161.00 €** | 13.7 % | **7.7 %** | 161.49 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **104.00 €** | 30.8 % | **20.6 %** | 104.13 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.50 €** | 73.6 % | **18.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **38.50 €** | 29.1 % | **5.4 %** | 37.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **58.50 €** | 37.7 % | **20.0 %** | 58.83 € | cena podľa najlacnejšieho iného predajcu |
| SMALLRIG 3027 Dvojité držadlo pre DJI RS 2, RSC 2, R... | 103.50 € | **94.90 €** | 14.9 % | **5.4 %** | 94.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SMALLRIG 5227 – doska na batérie s uchytením typu V-... | 192.50 € | **183.90 €** | 15.0 % | **9.8 %** | 183.99 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 136.00 € | **127.50 €** | 13.0 % | **5.9 %** | 127.65 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **29.00 €** | 49.3 % | **15.7 %** | 29.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 40.3 % | **8.7 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BO6737E02XK | 222.90 € | **214.50 €** | 10.1 % | **6.0 %** | 214.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **21.50 €** | 45.3 % | **5.1 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.50 €** | 37.7 % | **14.9 %** | 41.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.90 €** | 14.9 % | **10.8 %** | 219.97 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.90 €** | 38.3 % | **9.8 %** | 30.96 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 412.00 € | **404.00 €** | 7.5 % | **5.4 %** | 404.10 € | cena podľa najlacnejšieho iného predajcu |
| Fén MOVA Turbo 20 (biely) | 62.00 € | **54.00 €** | 66.5 % | **45.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 41.2 % | **13.0 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 49.8 % | **16.0 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
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
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **35.00 €** | 44.4 % | **18.8 %** | 35.20 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 8501A | 156.50 € | **149.00 €** | 10.3 % | **5.1 %** | 147.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.50 €** | 37.3 % | **19.0 %** | 47.75 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 60.4 % | **16.6 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny rámik Arzopa D10 10,1" (tmavohnedý) | 83.00 € | **75.90 €** | 14.9 % | **5.1 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **37.50 €** | 26.3 % | **6.2 %** | 36.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 64.9 % | **13.3 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 68.7 % | **15.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| MSI G32C4X | 152.50 € | **145.50 €** | 10.2 % | **5.1 %** | 141.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Uni-T UT692G tester optických vlákien | 41.50 € | **34.50 €** | 37.6 % | **14.4 %** | 34.63 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo SC750W Turbo | 105.00 € | **98.00 €** | 16.5 % | **8.7 %** | 98.19 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 40.9 % | **14.9 %** | 30.88 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.90 €** | 61.9 % | **22.2 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.50 €** | 32.9 % | **15.7 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 14.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje W1G2P84A32 | 277.50 € | **271.00 €** | 14.2 % | **11.5 %** | 271.28 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.50 €** | 29.9 % | **15.9 %** | 53.67 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.90 €** | 26.6 % | **9.8 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.50 €** | 40.2 % | **22.7 %** | 43.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.50 €** | 53.5 % | **19.2 %** | 21.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **21.00 €** | 36.7 % | **5.7 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 57.4 % | **18.3 %** | 18.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.50 €** | 34.1 % | **15.8 %** | 38.58 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **16.50 €** | 47.6 % | **8.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH6A35WO | 134.90 € | **128.90 €** | 10.1 % | **5.2 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LED trubicové svietidlo NEEWER TL60 20 W | 152.90 € | **146.90 €** | 44.1 % | **38.4 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Viaczónový regulátor zavlažovania RainPoint | 59.50 € | **53.50 €** | 38.8 % | **24.8 %** | 53.70 € | cena podľa najlacnejšieho iného predajcu |
| Hliníkový statív SMALLRIG CT-10 | 70.50 € | **64.50 €** | 15.3 % | **5.5 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 19.8MM 10 (Złoty) | 33.00 € | **27.00 €** | 41.4 % | **15.7 %** | 27.42 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **14.00 €** | 74.0 % | **21.9 %** | 14.13 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **31.50 €** | 28.5 % | **8.1 %** | 31.86 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.50 €** | 33.8 % | **20.1 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING KS Pro RS095 | 328.90 € | **323.00 €** | 7.4 % | **5.4 %** | 323.10 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **29.00 €** | 39.4 % | **16.0 %** | 29.21 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **59.00 €** | 22.4 % | **11.8 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 39.3 % | **31.9 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **118.50 €** | 25.9 % | **20.3 %** | 118.67 € | cena podľa najlacnejšieho iného predajcu |
| Krytky objektívov Puluz pre kameru Insta360 X5 | 30.00 € | **24.50 €** | 29.3 % | **5.6 %** | 24.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 63.50 € | **58.00 €** | 40.1 % | **28.0 %** | 58.41 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **116.50 €** | 26.2 % | **20.6 %** | 116.63 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Lipo With XT6... | 61.90 € | **56.50 €** | 32.3 % | **20.8 %** | 56.62 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **51.00 €** | 17.9 % | **6.6 %** | 51.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 42.7 % | **19.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **42.00 €** | 35.1 % | **20.4 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Klietka na fotoaparát SMALLRIG pre Sony A6700 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 55.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 47.1 % | **16.6 %** | 19.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 33.0 % | **5.4 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 35.3 % | **7.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.90 €** | 32.9 % | **16.0 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Indesit TI5512EMTCS | 288.50 € | **283.50 €** | 7.0 % | **5.1 %** | 280.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prevodovka PXN - usporiadanie H 7+1 | 77.00 € | **72.00 €** | 12.4 % | **5.1 %** | 70.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| SMALLRIG CT25 – stativ na zavesenie nad hlavou | 95.50 € | **90.50 €** | 14.9 % | **8.9 %** | 90.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 55.8 % | **16.9 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **35.00 €** | 25.2 % | **9.6 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 55.6 % | **11.6 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **24.90 €** | 33.0 % | **11.4 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.90 €** | 30.4 % | **17.8 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **70.00 €** | 25.4 % | **17.4 %** | 70.21 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **87.50 €** | 19.5 % | **13.4 %** | 87.75 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **45.00 €** | 30.2 % | **17.8 %** | 45.25 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.90 €** | 32.2 % | **22.6 %** | 59.96 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **22.50 €** | 36.3 % | **12.9 %** | 22.56 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.50 €** | 33.8 % | **20.6 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.90 €** | 27.4 % | **13.5 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.50 €** | 33.0 % | **19.6 %** | 41.88 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 475.50 € | **470.90 €** | 13.4 % | **12.3 %** | 470.97 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **20.00 €** | 42.7 % | **16.0 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **20.00 €** | 39.1 % | **13.1 %** | 20.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 226.00 € | **221.50 €** | 20.1 % | **17.7 %** | 221.74 € | cena podľa najlacnejšieho iného predajcu |
| Zariadenie na zoštíhlenie tela ANLAN 02-AXTY31-02A | 46.00 € | **41.50 €** | 19.4 % | **7.8 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.50 €** | 55.8 % | **19.1 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 51.9 % | **16.1 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **13.00 €** | 44.7 % | **8.0 %** | 13.22 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 54.6 % | **16.4 %** | 13.88 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **28.00 €** | 29.0 % | **11.9 %** | 28.13 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **23.00 €** | 37.0 % | **16.0 %** | 23.17 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.90 €** | 52.4 % | **19.7 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 29.6 % | **6.3 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| MSI PRO MP273 E14A | 88.90 € | **84.90 €** | 10.4 % | **5.4 %** | 82.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LiPo Gens ace G-Tech 4000mAh 2S2P 7,4V 60C batéria | 26.00 € | **22.00 €** | 37.3 % | **16.1 %** | 22.29 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.39 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **96.00 €** | 18.7 % | **14.0 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mobilný ovládač GameSir G8+ MFi (sivý) | 64.90 € | **61.00 €** | 16.2 % | **9.2 %** | 61.07 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 46.8 % | **11.9 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.90 €** | 40.5 % | **22.4 %** | 25.96 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 36.5 % | **17.2 %** | 22.46 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI3042VI | 36.50 € | **32.90 €** | 16.7 % | **5.2 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (modrý) | 42.50 € | **38.90 €** | 15.6 % | **5.8 %** | 38.91 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **21.00 €** | 35.0 % | **15.3 %** | 21.04 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **16.90 €** | 39.6 % | **15.1 %** | 16.95 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **21.00 €** | 40.8 % | **20.2 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife pre DJI Osmo Action 5 PRO/4/3 Adven... | 19.50 € | **15.90 €** | 36.9 % | **11.6 %** | 15.93 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6840E0 | 75.50 € | **71.90 €** | 10.3 % | **5.0 %** | 68.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.50 €** | 27.9 % | **17.1 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.00 €** | 42.5 % | **30.6 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 86.00 € | **82.50 €** | 9.5 % | **5.1 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Arzopa Portable Monitor A1 15,6" | 89.50 € | **86.00 €** | 15.2 % | **10.7 %** | 86.24 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8000mAh 11.1V 100C 3S1P Lipo Battery... | 65.50 € | **62.00 €** | 20.9 % | **14.4 %** | 62.28 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 40.1 % | **15.6 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 43.9 % | **15.6 %** | 14.21 € | cena podľa najlacnejšieho iného predajcu |
| Fén MOVA Shine 10 (strieborný) | 42.90 € | **39.50 €** | 15.3 % | **6.1 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **30.00 €** | 30.8 % | **17.8 %** | 30.21 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **29.00 €** | 33.2 % | **19.6 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 32.6 % | **18.2 %** | 26.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 41.5 % | **35.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.90 €** | 30.6 % | **20.6 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.50 €** | 21.5 % | **5.1 %** | 18.84 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Verto High 54 l tmavomodrý | 45.00 € | **42.00 €** | 12.7 % | **5.2 %** | 42.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| xTool SafetyPro™ AP2 Predfilter | 26.50 € | **23.50 €** | 33.1 % | **18.0 %** | 23.52 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma G83 (čierna) | 49.00 € | **46.00 €** | 18.6 % | **11.3 %** | 46.10 € | cena podľa najlacnejšieho iného predajcu |
| SMALLRIG RC 100B 100 W LED štúdiové osvetlenie | 211.90 € | **208.90 €** | 15.1 % | **13.5 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 30.50 € | **27.50 €** | 48.2 % | **33.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
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
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **18.90 €** | 38.5 % | **21.7 %** | 18.98 € | cena podľa najlacnejšieho iného predajcu |
| Baza na joystick Moza Racing AB9 Force Feedback | 489.50 € | **486.90 €** | 5.6 % | **5.1 %** | 443.51 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SMALLRIG 3764 – montáž zhora | 31.50 € | **28.90 €** | 14.5 % | **5.0 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stanica s automatickým vyprázdňovaním pre stojací vy... | 41.50 € | **38.90 €** | 15.5 % | **8.2 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **22.00 €** | 33.5 % | **19.4 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA412 Vodotesná podložka... | 12.50 € | **9.90 €** | 33.0 % | **5.4 %** | 9.07 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Homatics Stick 4K Google TV - UHD multimediální přeh... | 83.50 € | **80.90 €** | 8.4 % | **5.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.42 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono WM622 PBC2 | 47.50 € | **45.00 €** | 22.7 % | **16.2 %** | 45.28 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire L20, 5000lm, USB-C | 52.50 € | **50.00 €** | 22.7 % | **16.8 %** | 50.47 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.8 % | **7.7 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 23.1 % | **7.1 %** | 16.88 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.50 €** | 41.3 % | **22.1 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Mini statív SMALLRIG VT-20 z hliníka | 49.90 € | **47.50 €** | 14.9 % | **9.4 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 361.00 € | **358.90 €** | 8.9 % | **8.2 %** | 359.00 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada stavebních vozidel s příslušenstvím 26578 | 24.00 € | **21.90 €** | 19.0 % | **8.6 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 78.00 € | **75.90 €** | 14.7 % | **11.6 %** | 75.92 € | cena podľa najlacnejšieho iného predajcu |
| Klietka na fotoaparát SMALLRIG pre Canon R6 MkII | 101.00 € | **98.90 €** | 14.8 % | **12.5 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.50 €** | 20.6 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **20.50 €** | 51.1 % | **37.4 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT886 (ružové) | 26.50 € | **24.50 €** | 14.5 % | **5.9 %** | 20.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Pamäťová karta Samsung EVO Plus microSD 2021, 128 GB... | 22.90 € | **20.90 €** | 15.6 % | **5.5 %** | 17.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.50 € | **18.50 €** | 43.8 % | **29.8 %** | 18.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.00 € | **10.00 €** | 50.3 % | **25.3 %** | 10.04 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 8610 | 51.50 € | **49.50 €** | 13.8 % | **9.4 %** | 49.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **14.50 €** | 38.0 % | **21.3 %** | 14.64 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 152.00 € | **150.00 €** | 10.1 % | **8.6 %** | 150.29 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 36.00 € | **34.00 €** | 13.5 % | **7.2 %** | 34.34 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 36.00 € | **34.00 €** | 16.1 % | **9.6 %** | 34.34 € | cena podľa najlacnejšieho iného predajcu |
| UV-C čističe SUNSUN CUV-207 | 31.50 € | **29.50 €** | 51.6 % | **42.0 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava SMALLRIG Magic Arm s krabovou svorkou na upe... | 36.50 € | **34.50 €** | 15.5 % | **9.1 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na monitor SMALLRIG 2905B | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny vozík na statív SMALLRIG 3986 | 65.50 € | **63.50 €** | 15.4 % | **11.9 %** | 63.90 € | cena podľa najlacnejšieho iného predajcu |
| Svetelný statív SMALLRIG RA-S280, 280 cm, s vzduchov... | 74.50 € | **72.50 €** | 15.1 % | **12.0 %** | 72.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 69.00 € | **67.00 €** | 22.0 % | **18.4 %** | 67.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.00 € | **10.00 €** | 42.0 % | **18.3 %** | 10.43 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 129.00 € | **127.00 €** | 14.8 % | **13.1 %** | 127.46 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **18.00 €** | 30.7 % | **17.7 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 62.0 % | **45.9 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **17.00 €** | 33.3 % | **19.5 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **15.50 €** | 25.0 % | **11.1 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **72.90 €** | 18.6 % | **15.6 %** | 73.00 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-703A | 89.90 € | **88.00 €** | 29.8 % | **27.0 %** | 88.26 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| PANASONIC KX-TG1611FXR | 29.50 € | **27.90 €** | 11.2 % | **5.2 %** | 27.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LED stropní světlo Adviti VITO AD-PL-6515WLZM/CCT TUYA | 36.50 € | **34.90 €** | 41.1 % | **34.9 %** | 34.96 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-302 | 57.50 € | **55.90 €** | 50.4 % | **46.2 %** | 55.96 € | cena podľa najlacnejšieho iného predajcu |
| Bočná kefa MOVA pre modely P10 Pro Ultra/Z50 Ultra/G... | 14.50 € | **12.90 €** | 31.1 % | **16.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Maxxo infra sušička NIR+ | 180.50 € | **178.90 €** | 8.4 % | **7.4 %** | 178.91 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75TKBXC | 71.50 € | **69.90 €** | 12.8 % | **10.3 %** | 69.91 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C245D IP, 2× 2K, WiFi, prísvit | 58.00 € | **56.50 €** | 8.6 % | **5.8 %** | 56.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 28.00 € | **26.50 €** | 28.3 % | **21.4 %** | 26.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.00 €** | 56.1 % | **38.8 %** | 12.08 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 18.00 € | **16.50 €** | 18.7 % | **8.8 %** | 16.70 € | cena podľa najlacnejšieho iného predajcu |
| Podložka na cvičení Rebel Active RBA-3159-2BL na jóg... | 30.00 € | **28.50 €** | 13.1 % | **7.5 %** | 28.71 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 14.8V 30C 4S1P Lipo ... | 26.00 € | **24.50 €** | 17.8 % | **11.0 %** | 24.75 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK RE505X AX1500 WiFi 6 Extender | 42.50 € | **41.00 €** | 10.8 % | **6.9 %** | 41.27 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT839 | 25.50 € | **24.00 €** | 21.1 % | **14.0 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač Meross MRS105MA-EU WiFi... | 26.00 € | **24.50 €** | 21.8 % | **14.7 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka SMALLRIG X99 | 240.50 € | **239.00 €** | 9.3 % | **8.6 %** | 239.42 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X25 (čierne) | 17.50 € | **16.00 €** | 30.2 % | **19.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.50 €** | 33.0 % | **22.7 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Softbox SMALLRIG RA-D55 55 cm | 90.90 € | **89.50 €** | 15.0 % | **13.2 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač 4 x 16A, čierny | 4.70 € | **3.30 €** | 124.8 % | **57.8 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| RUSSELL HOBBS 20920-56/RH | 31.90 € | **30.50 €** | 10.7 % | **5.9 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GLOX Tritanová láhev na pití 1 l černá | 30.90 € | **29.50 €** | 57.8 % | **50.7 %** | 29.83 € | cena podľa najlacnejšieho iného predajcu |
| LED videolampa SMALLRIG RF 05B Zoom | 41.90 € | **40.50 €** | 15.4 % | **11.5 %** | 40.87 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka Dreame – pre modely Track Aqua10 Ul... | 18.90 € | **17.50 €** | 54.1 % | **42.7 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **11.50 €** | 40.5 % | **26.0 %** | 11.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **3.00 €** | 54.0 % | **7.4 %** | 3.09 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Aligator S6600 Duo 64GB Black | 80.00 € | **78.90 €** | 7.4 % | **5.9 %** | 78.91 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK TL-WR820N WiFi N Router | 14.50 € | **13.50 €** | 13.4 % | **5.5 %** | 10.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky Colmi P86 (zlaté) | 21.50 € | **20.50 €** | 15.0 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Onikuma MP006 RGB herná podložka pod myš (čierna) | 12.00 € | **11.00 €** | 17.1 % | **7.4 %** | 11.04 € | cena podľa najlacnejšieho iného predajcu |
| BoboVR G3 Grip Cover – návleky na rukoväte pre VR | 21.50 € | **20.50 €** | 32.8 % | **26.6 %** | 20.57 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 69.90 € | **68.90 €** | 10.3 % | **8.7 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 189.90 € | **188.90 €** | 19.5 % | **18.9 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 189.90 € | **188.90 €** | 19.5 % | **18.9 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| PANASONIC KX-TG1911FXG | 29.00 € | **28.00 €** | 10.0 % | **6.2 %** | 28.12 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA110 Výmenná sada pre r... | 62.00 € | **61.00 €** | 9.3 % | **7.6 %** | 61.15 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak na krk Puluz pre športové kamery | 12.00 € | **11.00 €** | 26.4 % | **15.8 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-65 65W Power De... | 22.50 € | **21.50 €** | 16.9 % | **11.7 %** | 21.71 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1022 | 186.00 € | **185.00 €** | 8.0 % | **7.4 %** | 185.21 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 127.00 € | **126.00 €** | 11.4 % | **10.6 %** | 126.25 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN YBG400 kaskádový filter | 20.50 € | **19.50 €** | 26.6 % | **20.4 %** | 19.77 € | cena podľa najlacnejšieho iného predajcu |
| Epicstar balanční deska Black Rock | 67.50 € | **66.50 €** | 10.6 % | **8.9 %** | 66.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB453138 | 33.00 € | **32.00 €** | 15.0 % | **11.6 %** | 32.31 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic PLA, 1 kg (zelený) | 11.50 € | **10.50 €** | 25.8 % | **14.9 %** | 10.81 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 16.50 € | **15.50 €** | 13.7 % | **6.8 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-603B | 26.00 € | **25.00 €** | 29.1 % | **24.2 %** | 25.34 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (zlatý) | 14.00 € | **13.00 €** | 14.9 % | **6.7 %** | 13.35 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 275.50 € | **274.50 €** | 29.9 % | **29.4 %** | 274.89 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Omega S3, HD DVB-T2 rekordér | 24.00 € | **23.00 €** | 10.2 % | **5.6 %** | 23.40 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN CHJ-902 | 13.50 € | **12.50 €** | 52.4 % | **41.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ30 (čierny) | 213.00 € | **212.00 €** | 6.8 % | **6.3 %** | 212.41 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 20.3MM 11 (black) | 28.00 € | **27.00 €** | 19.9 % | **15.6 %** | 27.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 20.3MM 11 (Złoty) | 28.00 € | **27.00 €** | 19.1 % | **14.9 %** | 27.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 21.3MM 12 (Black) | 28.00 € | **27.00 €** | 20.3 % | **16.0 %** | 27.42 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife AD020 magnetický hliníkový adaptér pre Ins... | 16.00 € | **15.00 €** | 14.0 % | **6.9 %** | 15.47 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 38.00 € | **37.00 €** | 9.7 % | **6.9 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 181.00 € | **180.00 €** | 11.6 % | **11.0 %** | 180.49 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 65.00 € | **64.00 €** | 24.7 % | **22.7 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.00 € | **180.00 €** | 25.3 % | **24.6 %** | 180.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN CHJ-1502 Filtračné čerpadlo | 16.00 € | **15.00 €** | 52.1 % | **42.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| CANON PG-545BK Black | 16.90 € | **16.00 €** | 11.3 % | **5.4 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Black+Decker BXSH1500E | 31.90 € | **31.00 €** | 15.1 % | **11.9 %** | 31.13 € | cena podľa najlacnejšieho iného predajcu |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 23.90 € | **23.00 €** | 26.3 % | **21.5 %** | 23.17 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-WW, 10 m,... | 7.70 € | **6.90 €** | 54.6 % | **38.5 %** | 6.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **26.50 €** | 18.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 10.50 € | **9.90 €** | 45.9 % | **37.6 %** | 9.99 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel 80 | 155.50 € | **154.90 €** | 6.6 % | **6.2 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 189.50 € | **188.90 €** | 19.5 % | **19.1 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko TS190340N | 185.50 € | **184.90 €** | 7.7 % | **7.3 %** | 185.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 158.00 € | **157.50 €** | 5.4 % | **5.1 %** | 143.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Silikonové zátěže HMS SNK01 na zápěstí a kotník čern... | 22.50 € | **22.00 €** | 7.9 % | **5.5 %** | 19.02 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Silikonové zátěže HMS SNK01 na zápěstí a kotník růžo... | 22.50 € | **22.00 €** | 7.9 % | **5.5 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring Colmi R10 22,4MM 13 (čierny) | 32.50 € | **32.00 €** | 18.9 % | **17.0 %** | 32.02 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna meteostanica, prehľadný a diza... | 59.00 € | **58.50 €** | 15.0 % | **14.0 %** | 58.55 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 745W | 28.00 € | **27.50 €** | 10.9 % | **8.9 %** | 27.56 € | cena podľa najlacnejšieho iného predajcu |
| Ovládač PXN-P5 8K | 32.50 € | **32.00 €** | 9.1 % | **7.5 %** | 32.09 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Safe'Tea KO261130 | 27.00 € | **26.50 €** | 7.2 % | **5.3 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný PLA filament Anycubic 1 KG (čierny) | 13.00 € | **12.50 €** | 18.0 % | **13.4 %** | 12.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight dezinfekčná bezozónová UV lampa 100W | 43.00 € | **42.50 €** | 36.9 % | **35.3 %** | 42.76 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 11.00 € | **10.50 €** | 12.6 % | **7.5 %** | 10.78 € | cena podľa najlacnejšieho iného predajcu |
| Ústredňa inteligentnej domácnosti Smart ZigBee Bridg... | 18.00 € | **17.50 €** | 16.6 % | **13.4 %** | 17.79 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC210 IP, 3 Mpx, WiFi, prisv... | 21.00 € | **20.50 €** | 9.9 % | **7.3 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 119.00 € | **118.50 €** | 14.9 % | **14.4 %** | 118.83 € | cena podľa najlacnejšieho iného predajcu |
| Upevňovacia doska SMALLRIG NATO Rail pre DJI Ronin-S/SC | 12.00 € | **11.50 €** | 13.2 % | **8.5 %** | 11.84 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač pre domáce zvieratá 2v1 Petkit | 21.00 € | **20.50 €** | 12.0 % | **9.4 %** | 20.84 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 126.50 € | **126.00 €** | 13.7 % | **13.2 %** | 126.37 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 40.00 € | **39.50 €** | 18.3 % | **16.9 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 26.50 € | **26.00 €** | 9.3 % | **7.2 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-5 PREMIUM 5 kg (100x150... | 29.00 € | **28.50 €** | 14.8 % | **12.9 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 26.50 € | **26.00 €** | 9.3 % | **7.2 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-5 PREMIUM 5 kg (100x150... | 29.00 € | **28.50 €** | 14.8 % | **12.9 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 918.50 € | **918.00 €** | 14.0 % | **13.9 %** | 918.39 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 51.00 € | **50.50 €** | 14.1 % | **12.9 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 51.00 € | **50.50 €** | 37.3 % | **36.0 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| TESLA GlideStar GQ500 | 65.50 € | **65.00 €** | 7.5 % | **6.7 %** | 65.39 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 156.00 € | **155.50 €** | 9.1 % | **8.7 %** | 155.89 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 927.50 € | **927.00 €** | 9.2 % | **9.1 %** | 927.39 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický hrnec TEESA TSA8091 Multicooker 2L, 12-24... | 67.50 € | **67.00 €** | 16.1 % | **15.2 %** | 67.39 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 106.00 € | **105.50 €** | 10.0 % | **9.4 %** | 105.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 269.50 € | **269.00 €** | 5.8 % | **5.6 %** | 269.39 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 218.00 € | **217.50 €** | 14.4 % | **14.2 %** | 217.89 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 19.00 € | **18.50 €** | 12.4 % | **9.5 %** | 18.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 696.50 € | **696.00 €** | 9.0 % | **8.9 %** | 696.39 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5XRCNA366HXB | 501.00 € | **500.50 €** | 6.1 % | **6.0 %** | 500.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61641 SkokánekGO/GO+/D143 | 16.50 € | **16.00 €** | 30.4 % | **26.4 %** | 16.41 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Pixy | 83.50 € | **83.00 €** | 11.9 % | **11.2 %** | 83.47 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/ 7.0 Ah  REBEL bezúdržbová | 15.50 € | **15.00 €** | 26.5 % | **22.4 %** | 15.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V860III TTL pre Fuji | 213.50 € | **213.00 €** | 9.7 % | **9.5 %** | 213.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO465FR | 65.90 € | **65.50 €** | 10.3 % | **9.6 %** | 65.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.90 €** | 25.3 % | **21.2 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C 20 W fast charger | 5.80 € | **5.40 €** | 56.1 % | **45.4 %** | 5.45 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SER-500-W URZ3439-500-W s ... | 33.90 € | **33.50 €** | 6.5 % | **5.3 %** | 28.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **38.50 €** | 7.0 % | **5.9 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.28 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradné trubičky pre alkohol tester Solight... | 1.40 € | **1.20 €** | 55.9 % | **33.6 %** | 1.28 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine strieborné 60 cm | 17.00 € | **16.90 €** | 23.8 % | **23.1 %** | 16.95 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-604B | 34.00 € | **33.90 €** | 18.6 % | **18.2 %** | 33.97 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO3101 | 18.00 € | **17.90 €** | 10.0 % | **9.4 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9176RK | 29.00 € | **28.90 €** | 9.7 % | **9.3 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61601 Rozšiřující set 2 - GO | 33.00 € | **32.90 €** | 46.4 % | **46.0 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| TechnoLine WS 7012 digitální teploměr | 11.00 € | **10.90 €** | 6.5 % | **5.5 %** | 9.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 158.00 € | **157.90 €** | 20.3 % | **20.2 %** | 158.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 148.00 € | **147.90 €** | 20.2 % | **20.2 %** | 148.00 € | cena podľa najlacnejšieho iného predajcu |

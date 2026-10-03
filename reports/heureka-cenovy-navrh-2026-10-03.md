# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-03

Vstup: `premiumstore-sk_2026-10-03_11-25.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7040**
- Návrh **zvýšiť** cenu: **369** produktov
- Návrh **znížiť** cenu: **670** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6001** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **79**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **742**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (369)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINI-PC Minis Forum UM890 Pro Ryzen 9 8945HS barebone | 626.00 € | **877.00 €** | 14.0 % | **59.7 %** | 877.01 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 728.00 € | **896.90 €** | 18.8 % | **46.4 %** | 897.00 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 619.50 € | **768.50 €** | 13.5 % | **40.8 %** | 768.75 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier S880DB MKII (tmavé drevo) | 320.50 € | **446.90 €** | 22.5 % | **70.9 %** | 447.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LONGER LK10 Plus | 374.00 € | **500.00 €** | 17.1 % | **56.5 %** | 500.20 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER DV2 | 450.50 € | **558.90 €** | 16.7 % | **44.7 %** | 559.00 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 318.50 € | **405.90 €** | 9.2 % | **39.2 %** | 405.99 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 287.50 € | **370.50 €** | 5.5 % | **35.9 %** | 370.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 826.00 € | **908.00 €** | 7.6 % | **18.3 %** | 908.34 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210G | 468.90 € | **550.50 €** | 10.1 % | **29.2 %** | 550.57 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 436.00 € | **515.90 €** | 11.0 % | **31.3 %** | 515.96 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2120.90 € | **2199.90 €** | 12.9 % | **17.1 %** | 2200.00 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN ZIP Trifold Cyber Projector | 400.00 € | **475.50 €** | 15.8 % | **37.7 %** | 475.58 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 691.50 € | **764.00 €** | 10.1 % | **21.6 %** | 764.26 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 276.90 € | **344.50 €** | 9.3 % | **35.9 %** | 344.72 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 567.90 € | **628.00 €** | 24.7 % | **37.9 %** | 628.33 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Core Ultra 5 125U 32 GB 1 TB Win 11 Pro M... | 827.00 € | **883.90 €** | 7.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Okuliare RayNeo X3 Pro AR | 1531.90 € | **1587.50 €** | 13.7 % | **17.8 %** | 1587.69 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 343.50 € | **399.00 €** | 18.6 % | **37.7 %** | 399.21 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 343.50 € | **399.00 €** | 21.1 % | **40.7 %** | 399.41 € | cena podľa najlacnejšieho iného predajcu |
| Sada panelov Moza Racing FMP18 | 913.00 € | **964.50 €** | 15.0 % | **21.5 %** | 964.75 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 Core Ultra 7 256V 16 GB 1 TB Wind... | 802.50 € | **848.50 €** | 8.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 173.50 € | **218.90 €** | 16.2 % | **46.6 %** | 219.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 732.00 € | **773.90 €** | 8.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blesk Neewer Z2-C TTL pre fotoaparáty Canon | 136.00 € | **176.90 €** | 14.9 % | **49.5 %** | 176.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell White Snow Mist 1/4 do Real Locking VND | 39.00 € | **79.90 €** | 22.0 % | **149.8 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell ND4 do Real Locking VND | 39.00 € | **79.90 €** | 22.0 % | **149.8 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell ND32/Black Mist 1/4 do Real Locking VND | 39.00 € | **79.00 €** | 22.0 % | **147.0 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 662.00 € | **699.00 €** | 8.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Laserový gravírovací stroj xTool S1 40 W 2 v 1, zákl... | 1721.90 € | **1755.90 €** | 13.3 % | **15.6 %** | 1755.92 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 756.50 € | **790.50 €** | 10.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| BOBOVR P4S odľahčovací remienok na batérie pre Pico ... | 31.50 € | **64.90 €** | 27.2 % | **162.0 %** | 64.99 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 732.00 € | **765.00 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Čistič okien PROSCENIC Win10pro | 136.00 € | **168.90 €** | 15.0 % | **42.8 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA TRUE X SURROUND 50A (set) BLACK | 1098.50 € | **1128.50 €** | 10.0 % | **13.0 %** | 1128.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 281.50 € | **310.00 €** | 10.9 % | **22.1 %** | 310.10 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality Halot X1 Combo | 474.00 € | **500.00 €** | 7.9 % | **13.8 %** | 500.20 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 350.00 € | **374.90 €** | 18.0 % | **26.4 %** | 374.93 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 350.00 € | **374.90 €** | 12.3 % | **20.3 %** | 374.93 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 107.00 € | **131.00 €** | 11.0 % | **35.9 %** | 131.14 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-285H Intel Core Ultra 9 2... | 709.00 € | **732.50 €** | 11.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 121.00 € | **144.00 €** | 19.0 % | **41.6 %** | 144.20 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 122.00 € | **143.90 €** | 14.8 % | **35.4 %** | 143.95 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 105.00 € | **126.90 €** | 13.6 % | **37.3 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 562.50 € | **583.50 €** | 27.5 % | **32.3 %** | 583.78 € | cena podľa najlacnejšieho iného predajcu |
| Batéria MOVA pre model G70 | 96.50 € | **116.90 €** | 22.3 % | **48.2 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX FT-AD600PRO | 156.50 € | **176.90 €** | 24.3 % | **40.5 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 96.90 € | **116.90 €** | 18.4 % | **42.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Anamorfný objektív Freewell 1,33x s bajonetom 17 mm | 217.00 € | **236.90 €** | 19.9 % | **30.9 %** | 237.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM UM890 Pro Ryzen 9 8945HS 16 GB +... | 897.00 € | **916.90 €** | 12.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Arzopa D156 (hnedý) 15,6" digitálny fotorámik | 133.00 € | **151.00 €** | 21.5 % | **37.9 %** | 151.49 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 243.00 € | **260.50 €** | 15.7 % | **24.0 %** | 260.71 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash UV360 (čierny) | 231.00 € | **248.50 €** | 29.1 % | **38.8 %** | 248.74 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP800IIIV | 369.50 € | **387.00 €** | 15.0 % | **20.4 %** | 387.46 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 91.50 € | **108.90 €** | 15.1 % | **37.0 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 54.00 € | **71.00 €** | 10.9 % | **45.8 %** | 71.26 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 131.00 € | **148.00 €** | 24.2 % | **40.4 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX FH50R | 222.00 € | **238.90 €** | 18.3 % | **27.4 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava ultratenkého LED kruhového osvetlenia Neewer... | 210.50 € | **226.90 €** | 37.6 % | **48.3 %** | 227.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 86.90 € | **102.90 €** | 17.0 % | **38.5 %** | 102.96 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 121.00 € | **137.00 €** | 15.9 % | **31.3 %** | 137.10 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 20 Loop s LCD FIXZENL-20-BK | 23.50 € | **39.50 €** | 10.4 % | **85.5 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| MINIS FORUM M1 Plus i5-12600H 16 GB + 512 GB Mini PC | 756.50 € | **772.50 €** | 12.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Baza na joystick Moza Racing AB9 Force Feedback | 486.90 € | **502.50 €** | 5.1 % | **8.4 %** | 502.71 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM IT12 Max Core Ultra 5 125U 16 GB 500 ... | 732.00 € | **747.50 €** | 12.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 685.00 € | **700.00 €** | 12.9 % | **15.4 %** | 700.08 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Minix P165 s technológiou GaN, 3 ... | 55.00 € | **69.50 €** | 19.5 % | **51.0 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 109.00 € | **123.50 €** | 22.1 % | **38.4 %** | 123.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 133.00 € | **147.00 €** | 18.0 % | **30.4 %** | 147.47 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 133.00 € | **146.90 €** | 23.7 % | **36.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 67.00 € | **80.50 €** | 7.4 % | **29.1 %** | 80.54 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE240 (biele) | 83.00 € | **96.50 €** | 16.4 % | **35.3 %** | 96.73 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz 45 cm (biely) | 63.00 € | **76.50 €** | 6.5 % | **29.3 %** | 76.85 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec M3 Pro s procesorom i5-13500H, 16 GB ... | 662.00 € | **675.50 €** | 12.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentné fotochromatické slnečné okuliare BlitzW... | 63.00 € | **76.00 €** | 32.1 % | **59.3 %** | 76.38 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 75.00 € | **87.50 €** | 16.3 % | **35.7 %** | 87.75 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B70... | 91.90 € | **104.00 €** | 22.7 % | **38.9 %** | 104.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **33.00 €** | 30.3 % | **104.8 %** | 33.31 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped MERACH MR-S28B1 | 544.00 € | **556.00 €** | 21.0 % | **23.7 %** | 556.46 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1062.90 € | **1074.50 €** | 7.6 % | **8.8 %** | 1074.77 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit TBOX-Plus 4+64 GB | 119.00 € | **130.50 €** | 6.0 % | **16.2 %** | 130.63 € | cena podľa najlacnejšieho iného predajcu |
| Tester obvodov Ancel PB500 | 82.00 € | **93.50 €** | 21.0 % | **37.9 %** | 93.71 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0011 Pozadie | 42.50 € | **54.00 €** | 24.3 % | **57.9 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600G | 91.90 € | **102.90 €** | 24.5 % | **39.4 %** | 102.96 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM A10 (čierna) | 118.50 € | **129.50 €** | 15.1 % | **25.8 %** | 129.63 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec Mini PC M3 Intel i5-12450H 16 GB RAM + 512 GB... | 544.00 € | **554.90 €** | 12.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 89.00 € | **99.50 €** | 17.5 % | **31.3 %** | 99.77 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 261.00 € | **271.50 €** | 15.4 % | **20.0 %** | 271.90 € | cena podľa najlacnejšieho iného predajcu |
| Stojan pre herný volant PXN-A11 | 84.50 € | **94.90 €** | 17.3 % | **31.7 %** | 95.00 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT302D+ | 63.00 € | **73.00 €** | 19.6 % | **38.6 %** | 73.16 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 84.50 € | **94.00 €** | 17.5 % | **30.7 %** | 94.32 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 | 57.50 € | **67.00 €** | 14.7 % | **33.7 %** | 67.39 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na riadidlá PXN-A10 | 84.50 € | **94.00 €** | 24.0 % | **37.9 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Maono AME2 Sound Card Black | 75.90 € | **84.90 €** | 5.1 % | **17.5 %** | 85.00 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 36.50 € | **45.50 €** | 11.1 % | **38.4 %** | 45.63 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS1 Pro – štartér do auta | 75.00 € | **84.00 €** | 25.4 % | **40.5 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 68.00 € | **76.90 €** | 20.9 % | **36.7 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno CREALITY PLA Jahoda (červená) | 16.00 € | **24.90 €** | 14.4 % | **78.0 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| ALI Pods Transl.TWS+překladač ATR10BK | 67.90 € | **76.50 €** | 5.5 % | **18.8 %** | 76.63 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DT20 s meracou páskou s ... | 51.00 € | **59.50 €** | 16.5 % | **36.0 %** | 59.52 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 131.00 € | **139.50 €** | 12.0 % | **19.3 %** | 139.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá EDIFIER W830NB (slonovinová farba) | 62.00 € | **70.50 €** | 14.8 % | **30.5 %** | 70.88 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W830NB (čierne) | 62.00 € | **70.50 €** | 14.8 % | **30.5 %** | 70.88 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 58.50 € | **66.90 €** | 10.0 % | **25.8 %** | 66.92 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 168.50 € | **176.90 €** | 44.1 % | **51.3 %** | 177.00 € | cena podľa najlacnejšieho iného predajcu |
| Přenosná nabíječka IMMAX EV/PHEV AC 5m /16A, 400V, C... | 269.50 € | **277.50 €** | 2.1 % | **5.1 %** | 205.64 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reproduktory Edifier R1100 2.0 (čierne) | 73.50 € | **81.50 €** | 7.7 % | **19.4 %** | 81.58 € | cena podľa najlacnejšieho iného predajcu |
| Samsung QE75QN900F NEO QLED 8K | 3988.00 € | **3996.00 €** | 7.5 % | **7.7 %** | 3996.12 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 118.00 € | **126.00 €** | 11.2 % | **18.7 %** | 126.13 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 367.00 € | **375.00 €** | 17.4 % | **20.0 %** | 375.15 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 29.00 € | **37.00 €** | 23.6 % | **57.7 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 Predfilter | 121.00 € | **128.90 €** | 30.7 % | **39.3 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Systémy kvapkového a rozprašovacieho zavlažovania | 36.50 € | **44.00 €** | 12.4 % | **35.5 %** | 44.05 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER x660 PRO II | 191.50 € | **199.00 €** | 15.0 % | **19.5 %** | 199.46 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie fotografického pozadia Puluz 2x... | 49.00 € | **56.00 €** | 14.8 % | **31.2 %** | 56.11 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič vody Darkflash DN 360 (biely) | 65.50 € | **72.50 €** | 11.1 % | **23.0 %** | 72.75 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 162.50 € | **169.50 €** | 13.6 % | **18.5 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 87.00 € | **94.00 €** | 29.0 % | **39.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS EM06P-EU Inteligentný monitor spotreby energi... | 72.50 € | **79.00 €** | 14.7 % | **25.0 %** | 79.33 € | cena podľa najlacnejšieho iného predajcu |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 72.50 € | **79.00 €** | 19.1 % | **29.8 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 3L automatický dávkovač krmiva v tlačidlovej ... | 33.50 € | **40.00 €** | 15.3 % | **37.7 %** | 40.39 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 109.00 € | **115.50 €** | 7.4 % | **13.8 %** | 115.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (biela) + 3 vent... | 72.50 € | **79.00 €** | 6.6 % | **16.1 %** | 79.46 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 59.50 € | **65.90 €** | 5.9 % | **17.3 %** | 65.97 € | cena podľa najlacnejšieho iného predajcu |
| Laica LAI KJ2000W | 79.00 € | **85.00 €** | 10.1 % | **18.4 %** | 85.05 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 81.00 € | **87.00 €** | 20.8 % | **29.8 %** | 87.09 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 81.00 € | **87.00 €** | 16.6 % | **25.2 %** | 87.09 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 109.00 € | **115.00 €** | 8.0 % | **13.9 %** | 115.10 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 98.00 € | **104.00 €** | 13.6 % | **20.6 %** | 104.34 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (béžové) | 98.00 € | **104.00 €** | 20.7 % | **28.1 %** | 104.34 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 88.50 € | **94.50 €** | 15.1 % | **22.9 %** | 94.89 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 40 | 248.50 € | **254.50 €** | 9.8 % | **12.5 %** | 254.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S27 160 W, 2xUSB-A, 4xUSB-C, 15 W wirel... | 41.50 € | **47.50 €** | 23.4 % | **41.3 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ PU4119B 60W 2500K-6500K (Black) studio lamp. | 53.50 € | **59.50 €** | 23.7 % | **37.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Vrecúško na prach MOVA pre stanicu G70 | 35.00 € | **41.00 €** | 23.1 % | **44.2 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell ND32 do Real Locking VND | 39.00 € | **45.00 €** | 22.0 % | **40.7 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostic Scanner OBD2 Ancel AS500/AC105 | 39.00 € | **44.90 €** | 18.1 % | **36.0 %** | 44.91 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 38.00 € | **43.50 €** | 15.0 % | **31.6 %** | 43.78 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 21.50 € | **27.00 €** | 10.1 % | **38.2 %** | 27.32 € | cena podľa najlacnejšieho iného predajcu |
| Sada 6 filtrov Freewell Bright Day pre DJI Flip | 34.00 € | **39.50 €** | 18.3 % | **37.4 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa Neewer MS60B BI-COLOR | 132.50 € | **138.00 €** | 14.9 % | **19.7 %** | 138.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 58.50 € | **64.00 €** | 20.7 % | **32.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 58.50 € | **64.00 €** | 21.0 % | **32.3 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 48.50 € | **54.00 €** | 22.6 % | **36.5 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 73.90 € | **79.00 €** | 15.3 % | **23.3 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W03,16" | 85.00 € | **90.00 €** | 12.8 % | **19.4 %** | 90.04 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB4xyzf-CS 4-zónová indukčná varná doska | 131.00 € | **136.00 €** | 18.5 % | **23.1 %** | 136.08 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 131.00 € | **136.00 €** | 18.5 % | **23.0 %** | 136.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 51.00 € | **56.00 €** | 26.0 % | **38.3 %** | 56.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 28.50 € | **33.50 €** | 17.1 % | **37.7 %** | 33.82 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter so svietidlom Habotest HT118C, ... | 25.50 € | **30.50 €** | 19.9 % | **43.4 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Wireless charger 3in1 BW-IW30 Blitzwolf | 31.50 € | **36.50 €** | 22.1 % | **41.4 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Hlavná kefa MOVA pre E30 Ultra | 29.00 € | **34.00 €** | 23.3 % | **44.6 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 137.00 € | **141.90 €** | 18.1 % | **22.4 %** | 141.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 101.00 € | **105.90 €** | 28.6 % | **34.8 %** | 106.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro SGA17 4G / 5G FIXOP3-1700-BK | 11.90 € | **16.50 €** | 11.5 % | **54.5 %** | 16.64 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 194.90 € | **199.50 €** | 5.9 % | **8.4 %** | 199.80 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LK10 s väčším formátom | 286.50 € | **291.00 €** | 17.3 % | **19.1 %** | 291.08 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS1 PRO POCKET PRO AIRBANK – mini pumpa na b... | 57.50 € | **62.00 €** | 10.1 % | **18.7 %** | 62.09 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – filter so strednou ú... | 143.00 € | **147.50 €** | 30.2 % | **34.3 %** | 147.60 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – vysokoúčinný filter | 143.00 € | **147.50 €** | 30.2 % | **34.3 %** | 147.60 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 294.50 € | **299.00 €** | 33.5 % | **35.6 %** | 299.12 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Ultra hustý uhlíkový... | 145.00 € | **149.50 €** | 25.8 % | **29.7 %** | 149.65 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-72CB4xyP200-LBHA keramická varná doska ... | 109.00 € | **113.50 €** | 16.1 % | **20.8 %** | 113.71 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 72.50 € | **77.00 €** | 24.7 % | **32.4 %** | 77.38 € | cena podľa najlacnejšieho iného predajcu |
| LG F4A10S7NWH | 349.50 € | **353.90 €** | 10.0 % | **11.4 %** | 353.92 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 57.90 € | **62.00 €** | 5.5 % | **13.0 %** | 62.09 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 129.90 € | **134.00 €** | 35.6 % | **39.9 %** | 134.14 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 67.90 € | **71.90 €** | 10.5 % | **17.0 %** | 71.97 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie GODOX FL15Bi | 96.00 € | **100.00 €** | 15.0 % | **19.8 %** | 100.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 12.50 € | **16.50 €** | 8.2 % | **42.9 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell UV do Real Locking VND | 39.00 € | **43.00 €** | 22.0 % | **34.5 %** | 43.32 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS20 – multifunkčný štartér do auta | 80.00 € | **84.00 €** | 30.4 % | **36.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Ultra-thin Motion Sensor Closet Light A50 | 20.00 € | **24.00 €** | 24.0 % | **48.8 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Kruhové svetlo GODOX LR30Bi | 21.00 € | **25.00 €** | 14.0 % | **35.7 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 63.00 € | **66.50 €** | 28.2 % | **35.3 %** | 66.62 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM9802B | 124.50 € | **128.00 €** | 5.6 % | **8.6 %** | 128.16 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 251.00 € | **254.50 €** | 24.0 % | **25.7 %** | 254.69 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 251.00 € | **254.50 €** | 15.3 % | **16.9 %** | 254.69 € | cena podľa najlacnejšieho iného predajcu |
| Sekvenčná prevodovka PXN | 143.00 € | **146.50 €** | 13.0 % | **15.8 %** | 146.83 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing Vision GS RS064 (PC) | 745.00 € | **748.50 €** | 17.6 % | **18.1 %** | 748.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (biela) | 50.00 € | **53.50 €** | 7.3 % | **14.8 %** | 53.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 56.00 € | **59.50 €** | 47.2 % | **56.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Sunlu PLA+ (čierny) | 14.50 € | **18.00 €** | 28.8 % | **59.9 %** | 18.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD-L pre AD200 | 26.50 € | **30.00 €** | 22.4 % | **38.6 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 65.50 € | **68.90 €** | 29.4 % | **36.1 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro SG A17 FIXOP3-1700-BL | 11.90 € | **15.00 €** | 11.5 % | **40.5 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 670NC white | 63.90 € | **66.90 €** | 11.9 % | **17.2 %** | 67.00 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 14.00 € | **17.00 €** | 55.9 % | **89.3 %** | 17.10 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint MetroX Pro Standard | 1234.50 € | **1237.50 €** | 21.4 % | **21.7 %** | 1237.64 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny rámik Arzopa D10 10,1" (tmavohnedý) | 72.50 € | **75.50 €** | 14.5 % | **19.3 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti štekaniu Rojeco 1000M PD521 ... | 39.00 € | **42.00 €** | 29.0 % | **38.9 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (čierna) + 4 venti... | 101.00 € | **104.00 €** | 18.7 % | **22.2 %** | 104.33 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-300-12 UPS 300W 12V čistý ... | 82.50 € | **85.50 €** | 6.3 % | **10.2 %** | 85.87 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 864 Senior Radio | 123.50 € | **126.50 €** | 10.3 % | **13.0 %** | 126.88 € | cena podľa najlacnejšieho iného predajcu |
| Váleček MOVA pre stanicu G70 | 17.50 € | **20.50 €** | 23.2 % | **44.3 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LR15Bi Okrúhle svetlo | 15.50 € | **18.50 €** | 15.7 % | **38.1 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| N3_ Sunnylife 073528 puzdro na okuliare | 20.00 € | **23.00 €** | 11.5 % | **28.3 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Metal Protective Cage With Lens Cover PULUZ for Inst... | 24.00 € | **26.90 €** | 17.0 % | **31.2 %** | 26.92 € | cena podľa najlacnejšieho iného predajcu |
| Filter nádoby na dym LaserPecker Air Purifier | 91.90 € | **94.50 €** | 23.7 % | **27.2 %** | 94.81 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 1,5 m ... | 26.50 € | **29.00 €** | 27.9 % | **39.9 %** | 29.06 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier P12 2.0 (hnedé) | 59.00 € | **61.50 €** | 11.2 % | **15.9 %** | 61.58 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 170.50 € | **173.00 €** | 18.8 % | **20.6 %** | 173.08 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 178.00 € | **180.50 €** | 21.5 % | **23.2 %** | 180.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 15.50 € | **18.00 €** | 15.5 % | **34.1 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V65 Smartwatch (Gray) | 29.00 € | **31.50 €** | 7.5 % | **16.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter na odstraňova... | 190.00 € | **192.50 €** | 27.1 % | **28.7 %** | 192.70 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 Max V1.0 – Filter s aktívnym uhlím | 190.00 € | **192.50 €** | 27.1 % | **28.7 %** | 192.70 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (biela) + 4 ventil... | 80.00 € | **82.50 €** | 15.6 % | **19.3 %** | 82.75 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa Portable Monitor A1 15,6" | 84.00 € | **86.50 €** | 11.0 % | **14.3 %** | 86.86 € | cena podľa najlacnejšieho iného predajcu |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 39.00 € | **41.50 €** | 29.1 % | **37.4 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 246.00 € | **248.50 €** | 22.2 % | **23.4 %** | 248.90 € | cena podľa najlacnejšieho iného predajcu |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 22.50 € | **25.00 €** | 25.0 % | **38.9 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 411BD | 68.50 € | **70.90 €** | 10.7 % | **14.6 %** | 70.96 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 125.50 € | **127.90 €** | 13.1 % | **15.3 %** | 127.96 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame L50 Ultra AE | 72.50 € | **74.90 €** | 22.9 % | **26.9 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame L50s Pro Ultra | 72.50 € | **74.90 €** | 22.9 % | **26.9 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu |
| Aligator AUDIO COMBO set 3v1 AUC001 | 28.90 € | **31.00 €** | 5.9 % | **13.6 %** | 31.10 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (červený) | 11.90 € | **14.00 €** | 14.8 % | **35.0 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (biely) | 96.90 € | **99.00 €** | 17.6 % | **20.2 %** | 99.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 96.90 € | **99.00 €** | 16.6 % | **19.2 %** | 99.13 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 86.90 € | **89.00 €** | 35.8 % | **39.1 %** | 89.49 € | cena podľa najlacnejšieho iného predajcu |
| Pero Baseus Smooth Writing 2 Stylus Pen (fialové) | 14.00 € | **16.00 €** | 15.3 % | **31.8 %** | 16.07 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1377.50 € | **1379.50 €** | 11.2 % | **11.3 %** | 1379.59 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 272.00 € | **274.00 €** | 28.8 % | **29.8 %** | 274.09 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26810-56/RH | 45.90 € | **47.90 €** | 6.5 % | **11.1 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TL98C DMX LED svetelná tyč | 47.90 € | **49.90 €** | 15.1 % | **19.9 %** | 50.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná poistka ZigBee Avatto ZWCB16 | 18.50 € | **20.50 €** | 24.6 % | **38.1 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu |
| Fontána / napájačka pre domáce zvieratá 3,5 l Oneisa... | 41.50 € | **43.50 €** | 24.7 % | **30.7 %** | 43.78 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 141.00 € | **143.00 €** | 5.1 % | **6.6 %** | 143.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 48.50 € | **50.50 €** | 33.3 % | **38.8 %** | 50.81 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E15 | 284.50 € | **286.50 €** | 6.7 % | **7.4 %** | 286.87 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 168.50 € | **170.50 €** | 40.2 % | **41.8 %** | 170.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 26.50 € | **28.50 €** | 28.5 % | **38.3 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Pilot GODOX RC-A6 | 14.50 € | **16.50 €** | 34.0 % | **52.4 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Fotografické štúdio Puluz PU5030 LED 30cm | 11.00 € | **13.00 €** | 12.5 % | **32.9 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.00 € | **31.00 €** | 23.6 % | **32.2 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (biela) | 24.00 € | **26.00 €** | 22.7 % | **32.9 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| LG GBBS323CPY | 581.00 € | **583.00 €** | 5.5 % | **5.9 %** | 583.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada pedálov PXN PD HM - brzda a plyn (Windows 7/8/1... | 75.00 € | **76.90 €** | 19.6 % | **22.6 %** | 76.96 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S160 na detekciu úniku | 98.00 € | **99.90 €** | 12.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Rýchlovarná kanvica Niceboy ION SmartKettle 1,7 l, č... | 54.00 € | **55.90 €** | 2.0 % | **5.6 %** | 30.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov Freewell pre OSMO NANO „Bright Day“ – 4... | 48.00 € | **49.90 €** | 23.7 % | **28.6 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno Air Board Express | 60.90 € | **62.50 €** | 10.3 % | **13.2 %** | 62.60 € | cena podľa najlacnejšieho iného predajcu |
| Solární panel CARCLEVER 35so120, nabíječka 120W | 184.00 € | **185.50 €** | 4.3 % | **5.2 %** | 151.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 18.50 € | **20.00 €** | 17.0 % | **26.5 %** | 20.14 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire C8-H – 1200 lm, USB, 250 m, 5 režimov | 17.50 € | **19.00 €** | 7.1 % | **16.3 %** | 19.15 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Junior Retro blesk | 70.00 € | **71.50 €** | 19.5 % | **22.0 %** | 71.68 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 41.50 € | **43.00 €** | 33.7 % | **38.6 %** | 43.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **13.50 €** | 18.5 % | **33.4 %** | 13.70 € | cena podľa najlacnejšieho iného predajcu |
| Amica TFB 128 TX | 282.00 € | **283.50 €** | 7.4 % | **7.9 %** | 283.70 € | cena podľa najlacnejšieho iného predajcu |
| Meross MOP320MA-EU WiFi inteligentná napájacia lišta... | 39.00 € | **40.50 €** | 30.9 % | **35.9 %** | 40.73 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie procesora Darkflash E400 PLUS (biely) | 34.00 € | **35.50 €** | 32.6 % | **38.4 %** | 35.75 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX ES30 pre e-šport | 143.00 € | **144.50 €** | 22.7 % | **24.0 %** | 144.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight tryska proti krúteniu pre fén Dyson Superson... | 10.00 € | **11.50 €** | 5.4 % | **21.3 %** | 11.85 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.50 € | **21.00 €** | 26.5 % | **36.3 %** | 21.36 € | cena podľa najlacnejšieho iného predajcu |
| Hodinky Colmi V89 Smartwatch (strieborné) | 26.50 € | **28.00 €** | 11.2 % | **17.5 %** | 28.38 € | cena podľa najlacnejšieho iného predajcu |
| Selfie lamp Neewer NL-60AI Bi Color LED | 17.50 € | **19.00 €** | 15.1 % | **25.0 %** | 19.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 58.00 € | **59.50 €** | 33.8 % | **37.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 16.00 € | **17.50 €** | 15.9 % | **26.8 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08BK | 15.00 € | **16.50 €** | 16.0 % | **27.6 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco Smart Laser Cat Toy | 17.00 € | **18.50 €** | 21.5 % | **32.2 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVS26-US 32-70" TV mount | 27.50 € | **29.00 €** | 12.8 % | **19.0 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 36.50 € | **38.00 €** | 23.1 % | **28.1 %** | 38.42 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 31.50 € | **33.00 €** | 7.2 % | **12.4 %** | 33.43 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 31.50 € | **33.00 €** | 7.2 % | **12.4 %** | 33.43 € | cena podľa najlacnejšieho iného predajcu |
| Filter MOVA pre model I10 | 14.50 € | **16.00 €** | 23.3 % | **36.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15C FIXOP3-1576-BK | 11.90 € | **13.00 €** | 11.5 % | **21.8 %** | 13.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **29.00 €** | 14.0 % | **18.1 %** | 29.06 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-EC2 8-in-1 Power Cube (4xAC / 2 x USB-A... | 19.50 € | **20.50 €** | 32.2 % | **39.0 %** | 20.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.50 € | **25.50 €** | 14.8 % | **19.5 %** | 25.59 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 36.50 € | **37.50 €** | 39.7 % | **43.5 %** | 37.59 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 166.00 € | **167.00 €** | 32.4 % | **33.2 %** | 167.09 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-NEVE 4K UHD Streaming Dongle | 65.00 € | **66.00 €** | 6.0 % | **7.6 %** | 66.10 € | cena podľa najlacnejšieho iného predajcu |
| Batéria NEEWER, 3450 mAh, 14,54 V, 50 Wh | 115.90 € | **116.90 €** | 41.9 % | **43.1 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| RainPoint WiFi 8-zónový regulátor zavlažovania | 58.50 € | **59.50 €** | 14.9 % | **16.8 %** | 59.62 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 20.00 € | **21.00 €** | 13.9 % | **19.6 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D30+ s Bluetooth | 200.00 € | **201.00 €** | 20.8 % | **21.4 %** | 201.13 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 19.50 € | **20.50 €** | 26.0 % | **32.5 %** | 20.65 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER BL120B – LED svetlo na selfie s upínacím mech... | 21.00 € | **22.00 €** | 13.8 % | **19.2 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| 4-zónový zavlažovací ovládač RainPoint ITV447 | 61.00 € | **62.00 €** | 37.2 % | **39.4 %** | 62.26 € | cena podľa najlacnejšieho iného predajcu |
| Kábel USB-A do Lightning MFI 0,35 m PGYTECH (P-GM-115) | 14.00 € | **15.00 €** | 25.1 % | **34.0 %** | 15.27 € | cena podľa najlacnejšieho iného predajcu |
| Vodný chladič CPU Darkflash DV240S (biely) | 68.00 € | **69.00 €** | 14.4 % | **16.1 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 46.00 € | **47.00 €** | 27.2 % | **30.0 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Ozvučovací systém KRUGER MATZ KM1712 | 178.50 € | **179.50 €** | 26.6 % | **27.3 %** | 179.79 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 39.00 € | **40.00 €** | 23.7 % | **26.8 %** | 40.33 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash HM1 | 79.00 € | **80.00 €** | 16.3 % | **17.8 %** | 80.33 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 94.00 € | **95.00 €** | 18.9 % | **20.1 %** | 95.38 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.50 € | **17.50 €** | 37.6 % | **45.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 31.50 € | **32.50 €** | 29.7 % | **33.8 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 58.50 € | **59.50 €** | 35.8 % | **38.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| ETA 0028 00860 | 11.50 € | **12.50 €** | 10.6 % | **20.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Neakasa M1/M1 Lite litter box waste bags | 15.90 € | **16.90 €** | 34.2 % | **42.7 %** | 16.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.00 € | **22.90 €** | 32.7 % | **38.1 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 56.00 € | **56.90 €** | 16.3 % | **18.1 %** | 56.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Haylou RS4 Plus (čierne) | 34.00 € | **34.90 €** | 13.6 % | **16.6 %** | 34.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.00 € | **19.90 €** | 31.5 % | **37.7 %** | 19.97 € | cena podľa najlacnejšieho iného predajcu |
| Delený filter ND64/ND32 FREEWELL pre DJI Mavic 4 Pro | 29.00 € | **29.90 €** | 21.0 % | **24.8 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.00 € | **39.90 €** | 25.2 % | **28.1 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT126A Digitálny univerzálny multimeter | 26.00 € | **26.90 €** | 14.8 % | **18.8 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed sklo Apple iP 17P FIXGFADA-1602-BK | 10.90 € | **11.50 €** | 10.9 % | **17.0 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H90 2K IP, vonkajšia, duálna, PTZ, Wi-F... | 109.90 € | **110.50 €** | 4.8 % | **5.3 %** | 99.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Photo Studio PULUZ 80 cm (PU5083EU) | 92.90 € | **93.50 €** | 15.0 % | **15.7 %** | 93.75 € | cena podľa najlacnejšieho iného predajcu |
| Lampa na čítanie Yeelight Pura Reading Desk Lamp | 25.00 € | **25.50 €** | 18.2 % | **20.5 %** | 25.54 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 133.00 € | **133.50 €** | 26.6 % | **27.1 %** | 133.54 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 48.50 € | **49.00 €** | 23.1 % | **24.4 %** | 49.04 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Flextail Tiny Helio 700Z (oranžová) | 22.50 € | **23.00 €** | 17.1 % | **19.7 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2502.00 € | **2502.50 €** | 13.8 % | **13.8 %** | 2502.55 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 58.50 € | **59.00 €** | 20.6 % | **21.6 %** | 59.08 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 231.00 € | **231.50 €** | 21.3 % | **21.5 %** | 231.58 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 93.00 € | **93.50 €** | 9.2 % | **9.7 %** | 93.59 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 426.50 € | **427.00 €** | 13.8 % | **13.9 %** | 427.09 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-3 Slam Ball 23cm 3kg | 12.00 € | **12.50 €** | 32.6 % | **38.1 %** | 12.59 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 42.00 € | **42.50 €** | 11.4 % | **12.7 %** | 42.59 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92002 Hrnec s pokl. Libra, 2,6 l | 20.50 € | **21.00 €** | 11.9 % | **14.7 %** | 21.10 € | cena podľa najlacnejšieho iného predajcu |
| GL.iNet Beryl AX Wi-Fi 6 router | 107.00 € | **107.50 €** | 6.2 % | **6.7 %** | 107.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **21.00 €** | 34.1 % | **37.4 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **21.00 €** | 20.5 % | **23.5 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine Modell H grey | 15.50 € | **16.00 €** | 4.1 % | **7.5 %** | 16.16 € | cena podľa najlacnejšieho iného predajcu |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 5760.00 € | **5760.50 €** | 8.0 % | **8.0 %** | 5760.66 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 50cm LED stan bez tienidla PU5051EU | 43.00 € | **43.50 €** | 15.1 % | **16.4 %** | 43.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.00 € | **19.50 €** | 33.4 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE Mělký plech 222709/242132 | 14.50 € | **15.00 €** | 10.3 % | **14.1 %** | 15.19 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 50.00 € | **50.50 €** | 12.4 % | **13.5 %** | 50.69 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 50.00 € | **50.50 €** | 35.3 % | **36.7 %** | 50.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.50 €** | 16.9 % | **18.6 %** | 33.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 16.00 € | **16.50 €** | 17.1 % | **20.7 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 63.00 € | **63.50 €** | 18.4 % | **19.4 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 20.00 € | **20.50 €** | 13.9 % | **16.8 %** | 20.77 € | cena podľa najlacnejšieho iného predajcu |
| Herné kreslo KRUGER & MATZ GX-150, bielo-ružové | 88.00 € | **88.50 €** | 9.4 % | **10.0 %** | 88.78 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 101.50 € | **102.00 €** | 10.2 % | **10.8 %** | 102.29 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 70.50 € | **71.00 €** | 12.3 % | **13.1 %** | 71.31 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre BOBOVR M2 Pro + nabíjacia stanica | 34.00 € | **34.50 €** | 36.6 % | **38.6 %** | 34.82 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 108.00 € | **108.50 €** | 17.4 % | **17.9 %** | 108.82 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Matter Over Wi-Fi nástenný spínač SONOF... | 17.00 € | **17.50 €** | 26.5 % | **30.2 %** | 17.85 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (biela) | 23.00 € | **23.50 €** | 26.8 % | **29.5 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic Tough 2.0 (čierna) | 23.00 € | **23.50 €** | 34.6 % | **37.5 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight GSM diaľkovo ovládaná zásuvka | 58.00 € | **58.50 €** | 31.5 % | **32.6 %** | 58.86 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.00 € | **76.50 €** | 15.6 % | **16.3 %** | 76.89 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 158.00 € | **158.50 €** | 39.3 % | **39.8 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 51.00 € | **51.50 €** | 18.5 % | **19.7 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.00 € | **17.50 €** | 24.9 % | **28.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT600S | 84.50 € | **85.00 €** | 17.2 % | **17.8 %** | 85.41 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, modrá | 25.50 € | **26.00 €** | 11.4 % | **13.6 %** | 26.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.50 € | **18.00 €** | 24.6 % | **28.1 %** | 18.49 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 14.50 € | **15.00 €** | 38.7 % | **43.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Puluz PU612B Studio Broadcast | 18.50 € | **19.00 €** | 24.1 % | **27.5 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 48.50 € | **49.00 €** | 24.9 % | **26.2 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 s 17 mm uchytením | 48.50 € | **49.00 €** | 25.0 % | **26.3 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL58 – 350 lm, USB, 3 režimy, 200 m | 11.50 € | **12.00 €** | 32.2 % | **38.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 194.50 € | **194.90 €** | 8.0 % | **8.2 %** | 194.99 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro PULUZ pre Insta360 X5 | 31.50 € | **31.90 €** | 17.0 % | **18.5 %** | 31.93 € | cena podľa najlacnejšieho iného predajcu |
| Filter xTool SafetyPro™ AP2 so strednou účinnosťou | 36.50 € | **36.90 €** | 38.0 % | **39.5 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RACING SRP2 Zadný držiak | 41.50 € | **41.90 €** | 13.7 % | **14.8 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 36.50 € | **36.90 €** | 16.4 % | **17.7 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.80 € | **8.00 €** | 34.6 % | **38.1 %** | 8.01 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 31.90 € | **32.00 €** | 9.4 % | **9.8 %** | 32.09 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiová súprava Puluz softbox 50x70cm, statív, LED ... | 20.90 € | **21.00 €** | 15.4 % | **15.9 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot SCV400RD | 51.90 € | **52.00 €** | 10.1 % | **10.3 %** | 52.15 € | cena podľa najlacnejšieho iného predajcu |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 16.90 € | **17.00 €** | 65.7 % | **66.7 %** | 17.18 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.00 €** | 5.5 % | **5.8 %** | 44.49 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92001 Hrnec s pokl. Libra, 1,4 l | 16.90 € | **17.00 €** | 10.8 % | **11.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 4000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.40 € | **2.50 €** | 44.5 % | **50.6 %** | 2.56 € | cena podľa najlacnejšieho iného predajcu |
| Fixed 2skla SG A17 4/5G FIXGFADA-1700-BK | 10.90 € | **11.00 €** | 10.9 % | **11.9 %** | 11.16 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo M300 Silent bezdrôtová myš, modrá | 12.90 € | **13.00 €** | 10.6 % | **11.5 %** | 13.33 € | cena podľa najlacnejšieho iného predajcu |
| Midland D10 DMR digital radio | 190.90 € | **191.00 €** | 26.3 % | **26.3 %** | 191.17 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (670)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 1136.90 € | **859.00 €** | 49.9 % | **13.3 %** | 859.32 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 24 GEN 3 GT2402 | 1449.90 € | **1192.90 €** | 39.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Samsung Micro RGB MRE75R95H | 4035.50 € | **3851.90 €** | 10.0 % | **5.0 %** | 2299.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung Micro RGB MRE65R95H | 2754.50 € | **2628.90 €** | 10.0 % | **5.0 %** | 2114.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung Micro RGB MRE75R85H | 2072.50 € | **1977.90 €** | 10.0 % | **5.0 %** | 1679.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE V25i Pro II | 393.90 € | **302.00 €** | 42.5 % | **9.3 %** | 302.19 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 456.90 € | **371.00 €** | 36.1 % | **10.5 %** | 371.18 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 597.00 € | **511.50 €** | 26.6 % | **8.5 %** | 511.57 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 835.00 € | **756.00 €** | 22.8 % | **11.1 %** | 756.30 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped DeerRun S500 Pro (čierny) | 318.50 € | **246.50 €** | 48.7 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| MSI Cyborg 15 (B13WFKG-478XCZ) | 1188.90 € | **1134.90 €** | 10.0 % | **5.0 %** | 1099.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový gravír XTOOL M2 Deluxe 10 W | 1226.90 € | **1173.00 €** | 21.1 % | **15.8 %** | 1173.42 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 552.00 € | **499.50 €** | 21.6 % | **10.0 %** | 499.53 € | cena podľa najlacnejšieho iného predajcu |
| Candy ECNBQT3518E Fresco | 515.00 € | **467.90 €** | 15.6 % | **5.0 %** | 427.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE V45i | 358.50 € | **314.50 €** | 24.8 % | **9.5 %** | 314.68 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 506.50 € | **462.50 €** | 17.3 % | **7.1 %** | 462.69 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 294.50 € | **252.90 €** | 33.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 7, strieborná) | 294.50 € | **252.90 €** | 33.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 294.50 € | **253.50 €** | 33.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 12, čierna) | 294.50 € | **253.50 €** | 33.7 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 294.50 € | **253.50 €** | 33.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 294.50 € | **253.50 €** | 33.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 8, strieborná) | 294.50 € | **253.50 €** | 33.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 294.50 € | **253.50 €** | 33.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 8, čierna) | 294.50 € | **253.50 €** | 33.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 9, zlatá) | 294.50 € | **253.50 €** | 33.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 294.50 € | **253.50 €** | 33.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Ariete Pizzeria 927/01, černá | 244.90 € | **205.00 €** | 29.9 % | **8.7 %** | 205.39 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 12, strieborná) | 294.50 € | **254.90 €** | 32.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 294.50 € | **254.90 €** | 32.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 6, čierna) | 294.50 € | **254.90 €** | 32.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Gen 2 (veľkosť 7, čierna) | 294.50 € | **254.90 €** | 32.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Euhomy BR001-89 70L chladnička na nápoje (čierna) | 222.00 € | **183.50 €** | 39.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosná fototlačiareň Liene Pix Cut 2 v 1 | 306.50 € | **268.50 €** | 31.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **389.50 €** | 15.0 % | **5.1 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor Ultima Poseidon E40 | 423.50 € | **387.00 €** | 20.9 % | **10.5 %** | 387.20 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 717.90 € | **684.00 €** | 12.7 % | **7.4 %** | 684.01 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T4924SWW | 504.90 € | **471.50 €** | 21.6 % | **13.6 %** | 471.58 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 498.90 € | **465.50 €** | 18.6 % | **10.7 %** | 465.67 € | cena podľa najlacnejšieho iného predajcu |
| Beko B7RCNA418HXP | 747.00 € | **715.50 €** | 10.7 % | **6.0 %** | 715.60 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T68243WCSHBC | 467.00 € | **435.50 €** | 19.7 % | **11.6 %** | 435.80 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 209.00 € | **177.90 €** | 35.2 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje DE69CS | 535.50 € | **504.50 €** | 15.6 % | **8.9 %** | 504.80 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 209.00 € | **178.00 €** | 34.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 209.00 € | **178.00 €** | 34.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 209.00 € | **178.00 €** | 34.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 209.00 € | **178.00 €** | 34.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 7, strieborná ... | 209.00 € | **178.00 €** | 34.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 8, zlatá) | 209.00 € | **178.00 €** | 34.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor BlitzWolf BW-V11 | 366.00 € | **337.00 €** | 19.4 % | **10.0 %** | 337.11 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 344.50 € | **315.50 €** | 21.6 % | **11.4 %** | 315.68 € | cena podľa najlacnejšieho iného predajcu |
| VIVO V70 8+256GB Alpine Gray | 621.50 € | **593.50 €** | 10.0 % | **5.1 %** | 585.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| VIVO V70 8+256GB Authentic Black | 621.50 € | **593.50 €** | 10.0 % | **5.1 %** | 585.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| VIVO V70 8+256GB Sandalwood Brown | 621.50 € | **593.50 €** | 10.0 % | **5.1 %** | 585.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 44G | 226.50 € | **198.50 €** | 24.3 % | **9.0 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 110G | 339.00 € | **312.00 €** | 14.1 % | **5.0 %** | 299.96 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kit Neewer ZC-10S two lamps LED + filters + tripods | 52.90 € | **26.50 €** | 138.8 % | **19.6 %** | 26.75 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 618.00 € | **592.00 €** | 13.9 % | **9.1 %** | 592.16 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality K2 Pro Combo | 746.50 € | **720.90 €** | 8.7 % | **5.0 %** | 718.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1329.90 € | **1305.00 €** | 13.3 % | **11.2 %** | 1305.29 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3BCNA324HS | 624.50 € | **599.90 €** | 10.3 % | **5.9 %** | 599.95 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 1234 | 188.50 € | **163.90 €** | 20.9 % | **5.1 %** | 163.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 779.50 € | **755.00 €** | 11.3 % | **7.8 %** | 755.48 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 378.90 € | **355.00 €** | 18.8 % | **11.3 %** | 355.47 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC MINIS FORUM MS-02U-235HX Intel Core Ultra 5 ... | 802.50 € | **779.00 €** | 12.6 % | **9.3 %** | 779.49 € | cena podľa najlacnejšieho iného predajcu |
| MiniPC Minis Fórum X1-255 AMD Ryzen 7 H255, barebone | 474.00 € | **450.90 €** | 15.6 % | **10.0 %** | 450.95 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP400IIIV | 263.90 € | **240.90 €** | 15.0 % | **5.0 %** | 224.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje FH50EAW | 494.90 € | **472.50 €** | 10.0 % | **5.1 %** | 471.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tablet HOTWAV TAB R10 Pro (čierny) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 238.90 € | **217.00 €** | 20.8 % | **9.8 %** | 217.43 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5XRCNA366HXB | 510.00 € | **488.90 €** | 11.6 % | **7.0 %** | 489.00 € | cena podľa najlacnejšieho iného predajcu |
| VIVO V70 Lite 5G 6+256GB Elegant Black? | 455.90 € | **435.50 €** | 10.0 % | **5.1 %** | 314.44 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 662.00 € | **642.00 €** | 12.7 % | **9.3 %** | 642.18 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 312.50 € | **292.50 €** | 18.0 % | **10.4 %** | 292.70 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Note 17 Pro 5G 6/256GB Purple | 417.90 € | **398.90 €** | 10.1 % | **5.1 %** | 321.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GOOLOO GT6000 99,9 Wh štartér | 138.00 € | **119.00 €** | 33.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GUZZANTI GZ ORW ECO Black | 415.90 € | **397.00 €** | 10.0 % | **5.0 %** | 330.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic DT 700 PRO X, profesionálne slúchadlá | 249.00 € | **231.00 €** | 15.0 % | **6.7 %** | 231.18 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 261.00 € | **243.00 €** | 22.3 % | **13.9 %** | 243.20 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 168.50 € | **150.50 €** | 28.9 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Acer Aspire Lite 15 (NX.DCWEC.002) | 379.00 € | **361.90 €** | 10.0 % | **5.1 %** | 352.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 233.00 € | **216.00 €** | 23.3 % | **14.3 %** | 216.13 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-PA0007 Pozadie | 59.50 € | **42.50 €** | 74.0 % | **24.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0007 Pozadie | 59.50 € | **42.50 €** | 74.0 % | **24.3 %** | 42.79 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 597.00 € | **580.50 €** | 10.7 % | **7.6 %** | 580.73 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 203.00 € | **187.00 €** | 30.2 % | **19.9 %** | 187.46 € | cena podľa najlacnejšieho iného predajcu |
| MOVA S70 Ultra Roller – čierna | 1169.90 € | **1154.00 €** | 16.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **333.00 €** | 15.0 % | **9.8 %** | 333.19 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 459.50 € | **444.00 €** | 10.8 % | **7.0 %** | 444.20 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 144.90 € | **129.50 €** | 28.2 % | **14.6 %** | 129.80 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V860III TTL pre Olympus | 214.90 € | **199.90 €** | 12.9 % | **5.0 %** | 176.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Záložný zdroj KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 194.90 € | **179.90 €** | 35.6 % | **25.1 %** | 179.99 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X60 Soundbar | 488.90 € | **474.00 €** | 11.1 % | **7.8 %** | 474.33 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 269.90 € | **255.00 €** | 21.6 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Electrolux 600 FLEX EES42210IX | 471.50 € | **457.00 €** | 8.4 % | **5.0 %** | 435.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC GEEKOM GT1MEGA Intel Core Ultra 9 185H 16 GB... | 873.00 € | **858.50 €** | 11.2 % | **9.4 %** | 858.51 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 358.00 € | **343.50 €** | 24.5 % | **19.5 %** | 343.58 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux ESG88600SX | 654.00 € | **639.90 €** | 7.3 % | **5.0 %** | 551.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fagor 4LVF-638ADIT | 470.00 € | **455.90 €** | 8.3 % | **5.1 %** | 453.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kryt kamery so svorkou na HDMI kábel pre Sony FX3/FX... | 62.00 € | **48.50 €** | 46.7 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Ultimea Skywave X40 Soundbar | 344.50 € | **331.50 €** | 11.8 % | **7.6 %** | 331.84 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 497.00 € | **484.00 €** | 12.9 % | **9.9 %** | 484.37 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátorový vertikálny vysávač ULTENIC U20 s funkc... | 146.00 € | **133.00 €** | 26.1 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Electrolux EIS8959 | 1013.90 € | **1001.00 €** | 6.4 % | **5.0 %** | 1001.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 440 | 107.00 € | **94.50 €** | 26.3 % | **11.6 %** | 94.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 124.90 € | **112.50 €** | 18.3 % | **6.5 %** | 112.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 379.50 € | **367.50 €** | 13.1 % | **9.5 %** | 367.69 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 190.50 € | **178.50 €** | 18.3 % | **10.8 %** | 178.71 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDFN26540XP | 441.90 € | **430.00 €** | 9.9 % | **7.0 %** | 430.40 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 96.00 € | **84.50 €** | 22.6 % | **7.9 %** | 84.51 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3RCSO255S | 275.50 € | **264.00 €** | 12.7 % | **8.0 %** | 264.10 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer CB200C RGB | 292.00 € | **280.50 €** | 24.2 % | **19.3 %** | 280.67 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 487.50 € | **476.00 €** | 14.9 % | **12.2 %** | 476.19 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 551.50 € | **540.00 €** | 10.8 % | **8.5 %** | 540.21 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 340.00 € | **328.50 €** | 22.1 % | **18.0 %** | 328.75 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 222.00 € | **210.50 €** | 21.2 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| JBL Easy sing mic mini | 154.00 € | **143.00 €** | 23.2 % | **14.4 %** | 143.41 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 503.90 € | **493.00 €** | 7.8 % | **5.4 %** | 493.38 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko CF200EWN | 248.00 € | **237.50 €** | 9.7 % | **5.0 %** | 214.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy CA6 NP5B3HTX | 342.00 € | **331.50 €** | 8.4 % | **5.1 %** | 324.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk Neewer Z2-N TTL pre fotoaparáty Nikon | 178.90 € | **168.90 €** | 52.0 % | **43.5 %** | 169.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WE694A1 | 354.00 € | **344.00 €** | 10.0 % | **6.9 %** | 344.30 € | cena podľa najlacnejšieho iného predajcu |
| Sada flexibilného osvetlenia Neewer BH40C s dvoma ra... | 156.00 € | **147.00 €** | 27.3 % | **19.9 %** | 147.46 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 11000 | 149.00 € | **140.00 €** | 21.8 % | **14.5 %** | 140.50 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 331.00 € | **322.50 €** | 12.3 % | **9.4 %** | 322.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 267.00 € | **258.50 €** | 10.4 % | **6.8 %** | 258.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 238.50 € | **230.00 €** | 13.1 % | **9.1 %** | 230.49 € | cena podľa najlacnejšieho iného predajcu |
| Edifier SS02 znamená reproduktory Edifier S1000MKII ... | 118.00 € | **109.50 €** | 24.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Uni-T UT262E – bezkontaktný detektor poradia fáz | 96.90 € | **88.50 €** | 25.8 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stojan JMGO pre modely N1S SE, Nano a PicoPlay+ | 121.00 € | **112.90 €** | 23.2 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Xiaomi Watch S4 Silver | 144.90 € | **136.90 €** | 11.4 % | **5.3 %** | 119.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 8405A | 178.50 € | **170.50 €** | 10.2 % | **5.2 %** | 165.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 8571 | 175.50 € | **167.50 €** | 10.1 % | **5.1 %** | 164.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje NRK6182PS4 | 356.90 € | **348.90 €** | 7.4 % | **5.0 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tablet HOTWAV TAB R9 Plus (červený) | 310.00 € | **302.00 €** | 21.9 % | **18.8 %** | 302.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 310.00 € | **302.00 €** | 20.7 % | **17.6 %** | 302.19 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 137.00 € | **129.00 €** | 21.2 % | **14.1 %** | 129.20 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE E25 Pro | 238.90 € | **231.00 €** | 16.6 % | **12.7 %** | 231.21 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26520-56 | 158.50 € | **151.00 €** | 10.3 % | **5.1 %** | 138.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMICA SIO 655 BG | 177.50 € | **170.00 €** | 9.7 % | **5.0 %** | 166.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux EW7TN3372C | 537.00 € | **529.50 €** | 7.5 % | **6.0 %** | 529.90 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 70.00 € | **62.50 €** | 28.6 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GUZZANTI GZ 44GW | 206.00 € | **198.90 €** | 12.7 % | **8.9 %** | 198.96 € | cena podľa najlacnejšieho iného predajcu |
| LG FASR3A04WS | 547.90 € | **540.90 €** | 6.4 % | **5.1 %** | 490.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 531.90 € | **524.90 €** | 6.4 % | **5.0 %** | 516.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux EWN7F447WI | 548.50 € | **541.50 €** | 6.4 % | **5.0 %** | 534.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LOKITHOR JA30000 PRO 46,08 Wh 3000 A štartér | 173.50 € | **166.50 €** | 13.5 % | **9.0 %** | 166.54 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A7 bílá | 539.50 € | **532.50 €** | 7.3 % | **5.9 %** | 532.60 € | cena podľa najlacnejšieho iného predajcu |
| Beko PowerIntense BDFN26560XP | 537.00 € | **530.00 €** | 7.3 % | **5.9 %** | 530.30 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GECS5B70CLI | 437.50 € | **430.50 €** | 13.1 % | **11.3 %** | 430.84 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro Telesin pre DJI Osmo Action 6 | 33.50 € | **26.50 €** | 69.5 % | **34.1 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Amica MI 446 TBIM | 528.50 € | **521.50 €** | 7.4 % | **5.9 %** | 521.90 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS4 štartér do auta | 84.50 € | **77.50 €** | 25.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| EZIDRI FD1000 ULTRA DIGITAL | 268.90 € | **262.00 €** | 10.2 % | **7.3 %** | 262.09 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62LC200T | 501.90 € | **495.00 €** | 8.4 % | **6.9 %** | 495.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná 12V / 45 Ah MHPower 6-DMF-45 GEL Tra... | 112.50 € | **105.90 €** | 12.0 % | **5.4 %** | 89.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PIXMA G3430 Purple | 145.50 € | **138.90 €** | 10.1 % | **5.1 %** | 127.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Concept ETV8360bcN | 526.00 € | **519.50 €** | 8.4 % | **7.0 %** | 519.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **41.50 €** | 54.5 % | **33.6 %** | 41.73 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Aura 5 ANC | 46.00 € | **39.50 €** | 39.8 % | **20.1 %** | 39.73 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GV663B65 | 507.50 € | **501.00 €** | 8.4 % | **7.0 %** | 501.40 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 469.50 € | **463.00 €** | 8.3 % | **6.8 %** | 463.50 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Nočné svetlo D1 Matter Smart na nočný stolík | 65.50 € | **59.00 €** | 27.2 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 142.90 € | **136.50 €** | 10.2 % | **5.3 %** | 124.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 525.90 € | **519.50 €** | 6.4 % | **5.1 %** | 494.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Domo DO9079KR-PROMO | 291.90 € | **285.50 €** | 10.1 % | **7.7 %** | 285.83 € | cena podľa najlacnejšieho iného predajcu |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 444.50 € | **438.50 €** | 6.5 % | **5.0 %** | 354.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GORENJE NRS8182KX | 501.90 € | **495.90 €** | 6.3 % | **5.0 %** | 493.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight elektrický sušiak uterákov 130W | 104.00 € | **98.00 €** | 59.5 % | **50.3 %** | 98.02 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 409BT | 50.50 € | **44.50 €** | 29.6 % | **14.2 %** | 44.80 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje R619EAW6 | 483.50 € | **477.50 €** | 8.3 % | **7.0 %** | 477.80 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 102A | 181.00 € | **175.00 €** | 16.4 % | **12.5 %** | 175.40 € | cena podľa najlacnejšieho iného predajcu |
| BEKO B5RCNA406HXB3 | 438.90 € | **433.00 €** | 8.4 % | **6.9 %** | 433.50 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT333BT Mini merač teploty a vlhkosti | 31.50 € | **25.90 €** | 40.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| JBL Tuner 3 Black Přenosné rádio | 121.50 € | **115.90 €** | 10.3 % | **5.2 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje MO 20 A3B | 71.50 € | **65.90 €** | 14.5 % | **5.6 %** | 65.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal RK812110 | 109.00 € | **103.50 €** | 10.7 % | **5.1 %** | 99.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 103RB | 216.00 € | **210.50 €** | 10.3 % | **7.5 %** | 210.58 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 326.50 € | **321.00 €** | 11.6 % | **9.8 %** | 321.10 € | cena podľa najlacnejšieho iného predajcu |
| Fagor 4LVF-637ADIT | 444.50 € | **439.00 €** | 8.4 % | **7.0 %** | 439.10 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 35.00 € | **29.50 €** | 36.0 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 59.50 € | **54.00 €** | 26.8 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 82.50 € | **77.00 €** | 22.8 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Black+Decker BXKM1000E | 116.90 € | **111.50 €** | 10.3 % | **5.2 %** | 100.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hodiny nástěnné TechnoLine WT 7981 | 39.90 € | **34.50 €** | 21.9 % | **5.4 %** | 34.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj LaserPecker LP2 Plus | 1000.00 € | **994.90 €** | 21.5 % | **20.9 %** | 994.95 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 447 ADW | 413.00 € | **407.90 €** | 8.4 % | **7.0 %** | 408.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285M (čierna) | 56.00 € | **50.90 €** | 26.8 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje NRK620EABK4 | 388.50 € | **383.50 €** | 8.4 % | **7.0 %** | 383.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 33.00 € | **28.00 €** | 71.4 % | **45.5 %** | 28.36 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 195.00 € | **190.00 €** | 11.6 % | **8.8 %** | 190.40 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 298.90 € | **294.00 €** | 16.3 % | **14.4 %** | 294.12 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 374.50 € | **369.90 €** | 8.4 % | **7.1 %** | 370.00 € | cena podľa najlacnejšieho iného predajcu |
| TEFAL FR 490070 | 107.50 € | **102.90 €** | 10.0 % | **5.3 %** | 90.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal FV6812E0 | 55.00 € | **50.50 €** | 15.1 % | **5.7 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy BRS 7N2BX-S | 414.50 € | **410.00 €** | 12.7 % | **11.4 %** | 410.03 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338 | 577.00 € | **572.50 €** | 10.3 % | **9.4 %** | 572.54 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 366.00 € | **361.50 €** | 8.3 % | **6.9 %** | 361.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 212.00 € | **207.50 €** | 12.2 % | **9.9 %** | 207.60 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 781.50 € | **777.00 €** | 11.7 % | **11.1 %** | 777.18 € | cena podľa najlacnejšieho iného predajcu |
| BEKO HII64500UFT | 364.50 € | **360.00 €** | 8.4 % | **7.1 %** | 360.20 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFS 7469 W EE | 365.00 € | **360.50 €** | 8.3 % | **7.0 %** | 360.80 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 159.50 € | **155.00 €** | 10.3 % | **7.2 %** | 155.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **27.00 €** | 54.0 % | **32.0 %** | 27.47 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool W7F HP33 A | 338.50 € | **334.00 €** | 8.3 % | **6.9 %** | 334.50 € | cena podľa najlacnejšieho iného predajcu |
| Vizuálny lokalizátor porúch Uni-T UT691-01 | 26.50 € | **22.00 €** | 37.4 % | **14.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vizuálny lokalizátor porúch Uni-T UT691-10 | 31.50 € | **27.00 €** | 33.5 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Alligator 3008G | 46.90 € | **42.50 €** | 16.2 % | **5.3 %** | 19.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL PartyBox Encore 2 | 329.90 € | **325.50 €** | 6.5 % | **5.0 %** | 269.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Whirlpool FFB 8469 BV EE | 345.90 € | **341.50 €** | 8.4 % | **7.0 %** | 341.60 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10S | 341.00 € | **336.90 €** | 6.4 % | **5.1 %** | 331.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 46.00 € | **41.90 €** | 29.5 % | **17.9 %** | 42.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 247.00 € | **242.90 €** | 16.2 % | **14.2 %** | 242.92 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT371 | 70.00 € | **65.90 €** | 22.5 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| JBL Live Flex black | 83.50 € | **79.50 €** | 10.7 % | **5.4 %** | 69.64 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune Beam 2 černá | 89.90 € | **85.90 €** | 10.2 % | **5.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LG MS2032GAS | 97.50 € | **93.50 €** | 10.1 % | **5.5 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LEIFHEIT Žehlící prkno COMPACT S | 63.00 € | **59.00 €** | 41.6 % | **32.7 %** | 59.02 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 184.00 € | **180.00 €** | 11.7 % | **9.3 %** | 180.02 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 334.50 € | **330.50 €** | 8.1 % | **6.9 %** | 330.60 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 280.50 € | **276.50 €** | 12.9 % | **11.3 %** | 276.67 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 136.50 € | **132.50 €** | 13.1 % | **9.8 %** | 132.78 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír Creality Falcon A1 Pro 20 W | 800.00 € | **796.00 €** | 6.2 % | **5.7 %** | 796.29 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAT3509GY Bezdrátová sluchátka | 50.00 € | **46.00 €** | 17.9 % | **8.5 %** | 46.37 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 169.50 € | **165.50 €** | 10.1 % | **7.5 %** | 165.89 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 247.00 € | **243.00 €** | 9.3 % | **7.6 %** | 243.48 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 41.50 € | **37.50 €** | 27.7 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ETA Moneto II 4453 90000 | 90.90 € | **87.00 €** | 10.4 % | **5.6 %** | 87.30 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 180.90 € | **177.00 €** | 22.6 % | **19.9 %** | 177.38 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 Wi-Fi | 70.90 € | **67.00 €** | 15.1 % | **8.7 %** | 67.39 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 8235 chrom | 39.90 € | **36.00 €** | 16.6 % | **5.2 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **557.00 €** | 7.3 % | **6.6 %** | 557.25 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 299.90 € | **296.00 €** | 21.7 % | **20.1 %** | 296.36 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GEC5C41SG | 313.50 € | **309.90 €** | 9.3 % | **8.0 %** | 310.00 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RO 3985 EA | 75.00 € | **71.50 €** | 10.9 % | **5.7 %** | 69.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje RK14CPS4 | 284.50 € | **281.00 €** | 9.4 % | **8.0 %** | 281.10 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 174.50 € | **171.00 €** | 10.2 % | **8.0 %** | 171.13 € | cena podľa najlacnejšieho iného predajcu |
| Monokulárny ďalekohľad LEVENHUK Halo NVM50 Helmet s ... | 634.50 € | **631.00 €** | 8.5 % | **7.9 %** | 631.29 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER GR18C Okrúhly LED panel pre bočné osvetlenie | 197.50 € | **194.00 €** | 21.5 % | **19.3 %** | 194.29 € | cena podľa najlacnejšieho iného predajcu |
| Beko HSM14540 | 257.00 € | **253.50 €** | 9.4 % | **7.9 %** | 253.80 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LIB60420CL | 268.00 € | **264.50 €** | 9.3 % | **7.9 %** | 264.80 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 131.50 € | **128.00 €** | 15.1 % | **12.0 %** | 128.36 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 46.50 € | **43.00 €** | 51.6 % | **40.2 %** | 43.40 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.00 € | **18.50 €** | 35.6 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Russell Hobbs 27371-56 | 33.90 € | **30.50 €** | 18.0 % | **6.2 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux EOF3H50BK | 268.90 € | **265.50 €** | 6.5 % | **5.1 %** | 218.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko VRT96425VD | 256.90 € | **253.50 €** | 9.2 % | **7.7 %** | 253.60 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 LED sviečok s časovačom Solight 1V284, 6,5 cm... | 11.90 € | **8.80 €** | 82.5 % | **35.0 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| JBL Endurance Race 2 černá | 68.90 € | **65.90 €** | 10.2 % | **5.4 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Acer Aspire Lite 15 (NX.DRPEC.001) | 531.90 € | **528.90 €** | 5.9 % | **5.3 %** | 529.00 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 69.50 € | **66.50 €** | 30.5 % | **24.8 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Candy CDG1S514ESH | 239.00 € | **236.00 €** | 9.2 % | **7.8 %** | 236.20 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 164.00 € | **161.00 €** | 9.4 % | **7.4 %** | 161.37 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 137.00 € | **134.00 €** | 14.1 % | **11.6 %** | 134.45 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27361-70 | 32.90 € | **30.00 €** | 21.2 % | **10.5 %** | 30.09 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 530BT Black | 54.50 € | **51.90 €** | 10.7 % | **5.4 %** | 38.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMICA VM 852.3 AW | 195.50 € | **192.90 €** | 6.5 % | **5.0 %** | 158.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GORENJE R492PW | 192.50 € | **189.90 €** | 6.5 % | **5.0 %** | 177.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TESLA PowerWash & Steam Station TQS600 | 118.50 € | **115.90 €** | 7.5 % | **5.2 %** | 112.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rowenta RH7AC1E0 | 222.50 € | **219.90 €** | 9.3 % | **8.0 %** | 220.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux KGS64362XX | 198.50 € | **195.90 €** | 10.4 % | **8.9 %** | 196.00 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 681.00 € | **678.50 €** | 6.3 % | **6.0 %** | 678.69 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 23.50 € | **21.00 €** | 30.8 % | **16.9 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco interactive laser cat toy | 19.00 € | **16.50 €** | 41.3 % | **22.7 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Kuchyňský robot, G201200 Pasta | 184.50 € | **182.00 €** | 10.3 % | **8.8 %** | 182.30 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka troch batérií pre GoPro Hero 13 Black Tele... | 18.00 € | **15.50 €** | 37.4 % | **18.3 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing R5 Pro | 413.50 € | **411.00 €** | 9.5 % | **8.9 %** | 411.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.00 € | **13.50 €** | 43.7 % | **21.3 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| AMICA DI 6401 PSB | 178.90 € | **176.50 €** | 10.4 % | **8.9 %** | 176.70 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 282.90 € | **280.50 €** | 20.3 % | **19.3 %** | 280.63 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 500.90 € | **498.50 €** | 10.0 % | **9.5 %** | 498.90 € | cena podľa najlacnejšieho iného predajcu |
| Zapichovacie LED snehové vločky Solight 1V281, 15 LE... | 10.00 € | **7.70 €** | 53.4 % | **18.1 %** | 7.80 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 8972 | 55.00 € | **52.90 €** | 9.4 % | **5.2 %** | 45.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy ION Hurricane R1 7,2V WET&DRY | 40.50 € | **38.50 €** | 10.5 % | **5.1 %** | 30.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BROTHER HL-L1232 W | 121.50 € | **119.50 €** | 14.8 % | **12.9 %** | 119.53 € | cena podľa najlacnejšieho iného predajcu |
| SONY WFC510W bílá | 42.90 € | **40.90 €** | 10.4 % | **5.2 %** | 40.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight WIFI zásuvka s meraním spotreby | 12.00 € | **10.00 €** | 36.6 % | **13.9 %** | 10.05 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 30.50 € | **28.50 €** | 18.9 % | **11.1 %** | 28.59 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW5558E0 | 178.00 € | **176.00 €** | 10.0 % | **8.7 %** | 176.10 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3WFU4841MCC | 432.00 € | **430.00 €** | 7.5 % | **7.0 %** | 430.10 € | cena podľa najlacnejšieho iného predajcu |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 392.90 € | **390.90 €** | 7.5 % | **7.0 %** | 391.00 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 23.00 € | **21.00 €** | 32.1 % | **20.7 %** | 21.11 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active | 143.50 € | **141.50 €** | 15.0 % | **13.4 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer horkovzdušná fritéza ZAF9230 | 173.00 € | **171.00 €** | 9.9 % | **8.6 %** | 171.20 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/ND8/ND16/ND32 pre DJI Osmo ... | 30.50 € | **28.50 €** | 28.9 % | **20.4 %** | 28.75 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY75X8F0 | 157.50 € | **155.50 €** | 10.2 % | **8.8 %** | 155.80 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022300 | 135.00 € | **133.00 €** | 10.4 % | **8.7 %** | 133.30 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 20 | 229.00 € | **227.00 €** | 11.0 % | **10.1 %** | 227.36 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26050-70 | 32.50 € | **30.50 €** | 17.9 % | **10.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9252I | 251.50 € | **249.50 €** | 8.7 % | **7.8 %** | 249.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 146.50 € | **144.50 €** | 10.2 % | **8.7 %** | 144.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT600 | 87.00 € | **85.00 €** | 14.7 % | **12.1 %** | 85.41 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EB61C4DB | 148.00 € | **146.00 €** | 9.7 % | **8.2 %** | 146.50 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.50 € | **16.50 €** | 30.7 % | **16.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tefal MY700BF0 | 115.90 € | **114.00 €** | 11.3 % | **9.5 %** | 114.50 € | cena podľa najlacnejšieho iného predajcu |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tuner 3 prenosné rádio, biele | 117.50 € | **115.90 €** | 6.7 % | **5.2 %** | 109.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK WiFi AC1200 (Deco E4 3-pack) | 115.00 € | **113.50 €** | 6.4 % | **5.0 %** | 93.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LIMO BAR ECO - White | 41.50 € | **40.00 €** | 16.9 % | **12.6 %** | 40.05 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 241.50 € | **240.00 €** | 6.4 % | **5.7 %** | 240.08 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 770.00 € | **768.50 €** | 40.3 % | **40.0 %** | 768.58 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BL87G831 | 124.00 € | **122.50 €** | 10.0 % | **8.7 %** | 122.60 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 148.00 € | **146.50 €** | 10.1 % | **8.9 %** | 146.60 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1018900 Pákový kávovar | 125.00 € | **123.50 €** | 9.9 % | **8.6 %** | 123.60 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO4B75EA | 112.00 € | **110.50 €** | 10.9 % | **9.4 %** | 110.60 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar Black | 27.50 € | **26.00 €** | 27.5 % | **20.5 %** | 26.19 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 449TI | 19.00 € | **17.50 €** | 22.9 % | **13.2 %** | 17.70 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022600 | 120.50 € | **119.00 €** | 11.3 % | **9.9 %** | 119.20 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2100 Mikrovlnná trouba s grilem | 109.00 € | **107.50 €** | 11.3 % | **9.8 %** | 107.70 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FM2105 Mikrovlnná trouba s grilem | 109.00 € | **107.50 €** | 11.3 % | **9.8 %** | 107.70 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 14.00 € | **12.50 €** | 24.8 % | **11.4 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **109.00 €** | 11.2 % | **9.7 %** | 109.30 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta 3v1 RH5A32E0 | 119.50 € | **118.00 €** | 11.2 % | **9.8 %** | 118.30 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT32HH5553 | 117.00 € | **115.50 €** | 6.4 % | **5.1 %** | 115.80 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 964.00 € | **962.50 €** | 16.2 % | **16.0 %** | 962.89 € | cena podľa najlacnejšieho iného predajcu |
| Girmi IM2101 | 123.00 € | **121.50 €** | 10.0 % | **8.6 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZJP3900 | 106.50 € | **105.00 €** | 10.8 % | **9.2 %** | 105.40 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCO1200E | 117.50 € | **116.00 €** | 11.1 % | **9.7 %** | 116.40 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 329.50 € | **328.00 €** | 8.2 % | **7.7 %** | 328.40 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXAP60E | 96.00 € | **94.50 €** | 13.1 % | **11.3 %** | 94.90 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo 9300M set klávesnice a myši černý | 32.00 € | **30.50 €** | 13.1 % | **7.8 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RBB1200 | 192.50 € | **191.00 €** | 19.5 % | **18.6 %** | 191.50 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXRA2001E olejový radiátor | 88.90 € | **87.50 €** | 13.4 % | **11.6 %** | 87.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny infračervený teplomer -50° +380°C | 14.90 € | **13.50 €** | 49.9 % | **35.8 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 135 | 46.90 € | **45.50 €** | 9.1 % | **5.8 %** | 40.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hodiny nástěnné TechnoLine  WT 8500 silver | 24.90 € | **23.50 €** | 15.0 % | **8.5 %** | 23.59 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4C05 | 36.90 € | **35.50 €** | 21.6 % | **16.9 %** | 35.70 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 571.90 € | **570.50 €** | 25.8 % | **25.5 %** | 570.61 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool TDLR 6240S EU/N | 328.90 € | **327.50 €** | 7.7 % | **7.3 %** | 327.84 € | cena podľa najlacnejšieho iného predajcu |
| Strieborná závesná LED vianočná hviezda Solight 1V29... | 7.90 € | **6.70 €** | 72.7 % | **46.4 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Zlatá závesná LED vianočná hviezda Solight 1V295, 60... | 7.90 € | **6.70 €** | 72.7 % | **46.4 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 110.00 € | **108.90 €** | 14.1 % | **13.0 %** | 108.97 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXRA2501E | 106.00 € | **104.90 €** | 11.1 % | **9.9 %** | 105.00 € | cena podľa najlacnejšieho iného predajcu |
| CANON PIXMA TR4755i Black | 76.50 € | **75.50 €** | 6.6 % | **5.2 %** | 62.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lavazza Crema E Gusto 1000 g | 22.90 € | **21.90 €** | 10.8 % | **5.9 %** | 16.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi 33 W PB 20000 mAh Tan GL 57865 | 25.50 € | **24.50 €** | 11.3 % | **7.0 %** | 19.51 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 100.50 € | **99.50 €** | 6.5 % | **5.4 %** | 95.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK TL-WA854RE Wireless N Extender | 17.50 € | **16.50 €** | 12.5 % | **6.0 %** | 13.81 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 276.90 € | **275.90 €** | 8.4 % | **8.0 %** | 275.91 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk GODOX MF12 | 113.00 € | **112.00 €** | 14.0 % | **13.0 %** | 112.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **4.50 €** | 36.3 % | **11.5 %** | 4.60 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 247.90 € | **246.90 €** | 8.4 % | **8.0 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 225.90 € | **224.90 €** | 40713.0 % | **40532.3 %** | 225.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 662.90 € | **661.90 €** | 119665.1 % | **119484.5 %** | 662.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05A1 | 105.00 € | **104.00 €** | 11.0 % | **9.9 %** | 104.10 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WDSI96A | 358.90 € | **357.90 €** | 7.3 % | **7.0 %** | 358.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.00 € | **48.00 €** | 37.2 % | **34.4 %** | 48.13 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/VND8/UV pre DJI Osmo Action... | 30.00 € | **29.00 €** | 25.5 % | **21.3 %** | 29.13 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 157.00 € | **156.00 €** | 7.8 % | **7.1 %** | 156.19 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.50 € | **16.50 €** | 47.0 % | **38.6 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Tesla Cook BBQ100 | 71.00 € | **70.00 €** | 14.3 % | **12.7 %** | 70.20 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 331.00 € | **330.00 €** | 8.2 % | **7.9 %** | 330.20 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 66.00 € | **65.00 €** | 10.2 % | **8.5 %** | 65.20 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.00 € | **16.00 €** | 33.3 % | **25.4 %** | 16.21 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.50 €** | 15.9 % | **10.5 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 351.50 € | **350.50 €** | 8.5 % | **8.2 %** | 350.73 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (biela) | 43.50 € | **42.50 €** | 13.1 % | **10.5 %** | 42.74 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (oranžová) | 43.50 € | **42.50 €** | 13.1 % | **10.5 %** | 42.74 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (čierna) | 43.50 € | **42.50 €** | 13.1 % | **10.5 %** | 42.74 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.50 €** | 15.0 % | **12.0 %** | 36.79 € | cena podľa najlacnejšieho iného predajcu |
| Subwoofer Edifier Airpulse SW8 (čierny) | 327.00 € | **326.00 €** | 11.0 % | **10.7 %** | 326.29 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 530 FR | 94.00 € | **93.00 €** | 12.9 % | **11.7 %** | 93.30 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6840E0 | 77.00 € | **76.00 €** | 12.8 % | **11.4 %** | 76.30 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 352.00 € | **351.00 €** | 35.9 % | **35.6 %** | 351.30 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 191.00 € | **190.00 €** | 16.0 % | **15.4 %** | 190.31 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 191.00 € | **190.00 €** | 16.0 % | **15.4 %** | 190.31 € | cena podľa najlacnejšieho iného predajcu |
| Vodný chladič CPU Darkflash DV360S (čierny) | 107.50 € | **106.50 €** | 25.6 % | **24.5 %** | 106.81 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 216.50 € | **215.50 €** | 19.6 % | **19.1 %** | 215.81 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Bikee Anti-Shock FIXBIAS-BK | 22.50 € | **21.50 €** | 12.2 % | **7.2 %** | 21.83 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **35.00 €** | 15.0 % | **11.8 %** | 35.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 12.50 € | **11.50 €** | 21.9 % | **12.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart Sada příslušenství pro iRobot R | 29.50 € | **28.50 €** | 10.3 % | **6.6 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2011300 | 201.50 € | **200.50 €** | 9.3 % | **8.8 %** | 200.90 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAR4600 Rádiobudík | 65.00 € | **64.00 €** | 8.9 % | **7.2 %** | 64.40 € | cena podľa najlacnejšieho iného predajcu |
| Amica SPA 18 ZPX | 295.00 € | **294.00 €** | 12.9 % | **12.5 %** | 294.45 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá s kostným vedením Haylou PurFree BC01 (čie... | 40.00 € | **39.00 €** | 14.5 % | **11.7 %** | 39.48 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.00 € | **24.00 €** | 12.8 % | **8.3 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **10.00 €** | 43.1 % | **30.1 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI7160BL | 79.00 € | **78.00 €** | 12.5 % | **11.1 %** | 78.50 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HE03 | 12.00 € | **11.00 €** | 35.5 % | **24.2 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC272D10 | 67.90 € | **67.00 €** | 13.7 % | **12.2 %** | 67.10 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 185.90 € | **185.00 €** | 8.4 % | **7.9 %** | 185.13 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 95.90 € | **95.00 €** | 12.3 % | **11.2 %** | 95.17 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 107.90 € | **107.00 €** | 41.5 % | **40.3 %** | 107.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **5.30 €** | 36.6 % | **16.8 %** | 5.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 16.90 € | **16.00 €** | 27.1 % | **20.3 %** | 16.21 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1610 | 46.90 € | **46.00 €** | 9.6 % | **7.5 %** | 46.36 € | cena podľa najlacnejšieho iného predajcu |
| Solac LV1301 | 39.90 € | **39.00 €** | 16.1 % | **13.5 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 9.30 € | **8.50 €** | 48.5 % | **35.8 %** | 8.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.60 € | **2.80 €** | 41.4 % | **10.0 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.50 € | **37.90 €** | 20.6 % | **18.7 %** | 37.95 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 smartwatch Ultra (gold) | 38.50 € | **37.90 €** | 20.6 % | **18.7 %** | 37.95 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 18.50 € | **17.90 €** | 24.7 % | **20.7 %** | 17.96 € | cena podľa najlacnejšieho iného predajcu |
| Držiak so studenou päticou Freewell pre Fuji X100VI ... | 40.50 € | **39.90 €** | 15.7 % | **13.9 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Unlimited pánev 28cm G2550672 | 41.50 € | **40.90 €** | 9.3 % | **7.7 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 23310-56/RH | 47.50 € | **46.90 €** | 15.9 % | **14.4 %** | 47.00 € | cena podľa najlacnejšieho iného predajcu |
| Amica BL 6016 | 63.50 € | **62.90 €** | 13.9 % | **12.8 %** | 63.00 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25400-56/RH | 53.50 € | **52.90 €** | 15.8 % | **14.5 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo pracovné, 120+40lm, 3W COB + 3... | 4.40 € | **3.80 €** | 72.8 % | **49.2 %** | 3.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.40 € | **5.80 €** | 39.9 % | **26.8 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT4000S 74 Wh štartér | 105.50 € | **104.90 €** | 21.5 % | **20.9 %** | 104.95 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6675E0 | 71.50 € | **70.90 €** | 13.5 % | **12.6 %** | 71.00 € | cena podľa najlacnejšieho iného predajcu |
| Nescafé Dolce Gusto CORTADO 30cap | 10.50 € | **10.00 €** | 11.1 % | **5.8 %** | 6.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nescafé Dolce Gusto ESPRESSO 30 cap | 10.50 € | **10.00 €** | 11.1 % | **5.8 %** | 8.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nescafé Dolce Gusto CAFE AU LAIT 30Cap | 10.50 € | **10.00 €** | 11.1 % | **5.8 %** | 8.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nescafé Dolce Gusto CAPPUCCINO 30 cap | 10.50 € | **10.00 €** | 11.1 % | **5.8 %** | 9.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Sušák na prádlo STAR | 43.50 € | **43.00 €** | 21.5 % | **20.1 %** | 43.01 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 23.50 € | **23.00 €** | 11.0 % | **8.6 %** | 23.04 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 20.50 € | **20.00 €** | 15.3 % | **12.5 %** | 20.08 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE165 | 59.50 € | **59.00 €** | 8.8 % | **7.9 %** | 59.10 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Katana CF0918 | 49.50 € | **49.00 €** | 15.5 % | **14.3 %** | 49.10 € | cena podľa najlacnejšieho iného predajcu |
| Girmi SR5400 Odšťavňovač | 36.00 € | **35.50 €** | 17.4 % | **15.8 %** | 35.60 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 300 | 37.50 € | **37.00 €** | 15.8 % | **14.3 %** | 37.10 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Rýžovar 8 v 1 RK7321F1 | 59.00 € | **58.50 €** | 13.8 % | **12.8 %** | 58.60 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST9100 | 36.50 € | **36.00 €** | 16.1 % | **14.6 %** | 36.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **46.50 €** | 35.9 % | **34.4 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3226  XXL toaster, 900 W | 20.50 € | **20.00 €** | 16.1 % | **13.3 %** | 20.19 € | cena podľa najlacnejšieho iného predajcu |
| Sada 16 barevných kovových autíček 26319 | 14.00 € | **13.50 €** | 35.8 % | **31.0 %** | 13.69 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS520E15W | 255.50 € | **255.00 €** | 5.4 % | **5.2 %** | 255.19 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.50 € | **233.00 €** | 24.7 % | **24.5 %** | 233.20 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93014 Pánev hluboká Aries 28 cm | 25.00 € | **24.50 €** | 12.2 % | **9.9 %** | 24.70 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR720003 | 31.50 € | **31.00 €** | 18.7 % | **16.8 %** | 31.20 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FR9301 | 50.50 € | **50.00 €** | 15.7 % | **14.5 %** | 50.20 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI3042VI | 36.00 € | **35.50 €** | 15.5 % | **13.9 %** | 35.70 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26731-56/RH | 40.00 € | **39.50 €** | 15.3 % | **13.9 %** | 39.70 € | cena podľa najlacnejšieho iného predajcu |
| Eldonex EWS-1010-BK meteostanice | 38.00 € | **37.50 €** | 8.9 % | **7.5 %** | 37.70 € | cena podľa najlacnejšieho iného predajcu |
| Acer Nitro KG240YP0BI | 59.00 € | **58.50 €** | 8.5 % | **7.6 %** | 58.70 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 249.00 € | **248.50 €** | 22.1 % | **21.9 %** | 248.70 € | cena podľa najlacnejšieho iného predajcu |
| Beko Mezikus NPSKM | 42.00 € | **41.50 €** | 15.9 % | **14.5 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 142.00 € | **141.50 €** | 8.2 % | **7.8 %** | 141.71 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9270p bezdrátová klávesnice černá | 37.50 € | **37.00 €** | 10.7 % | **9.2 %** | 37.21 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri 2 Combo | 371.00 € | **370.50 €** | 12.5 % | **12.4 %** | 370.73 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri Carbon 2 | 371.00 € | **370.50 €** | 7.1 % | **7.0 %** | 370.73 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa RGB Puluz pre fotoaparát PU560B | 15.50 € | **15.00 €** | 13.8 % | **10.2 %** | 15.25 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 388.00 € | **387.50 €** | 17.5 % | **17.4 %** | 387.78 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 250.00 € | **249.50 €** | 16.4 % | **16.2 %** | 249.79 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **12.00 €** | 17.9 % | **13.2 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE105 | 26.50 € | **26.00 €** | 11.9 % | **9.8 %** | 26.30 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXJB800E | 50.00 € | **49.50 €** | 15.6 % | **14.4 %** | 49.80 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3002G | 76.50 € | **76.00 €** | 13.3 % | **12.6 %** | 76.30 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 19.50 € | **19.00 €** | 17.3 % | **14.3 %** | 19.30 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MVC72HGA | 31.50 € | **31.00 €** | 17.5 % | **15.7 %** | 31.30 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje H45W | 41.50 € | **41.00 €** | 16.1 % | **14.7 %** | 41.30 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9310M klávesnice bílá | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.30 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 54.00 € | **53.50 €** | 31.8 % | **30.6 %** | 53.84 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 169.50 € | **169.00 €** | 18.5 % | **18.1 %** | 169.35 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer Air PR... | 59.00 € | **58.50 €** | 8.3 % | **7.4 %** | 58.86 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1439.50 € | **1439.00 €** | 7.1 % | **7.1 %** | 1439.36 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 199.50 € | **199.00 €** | 19.7 % | **19.4 %** | 199.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **17.00 €** | 42.8 % | **38.8 %** | 17.38 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 343.50 € | **343.00 €** | 19.9 % | **19.7 %** | 343.39 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 45.00 € | **44.50 €** | 16.5 % | **15.2 %** | 44.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Struhadlo 4 v 1 COMFORTLINE | 13.00 € | **12.50 €** | 19.8 % | **15.2 %** | 12.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 47.50 € | **47.00 €** | 8.4 % | **7.3 %** | 47.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 31.50 € | **31.00 €** | 13.2 % | **11.4 %** | 31.39 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.00 € | **17.50 €** | 8.2 % | **5.2 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.50 € | **41.00 €** | 11.4 % | **10.1 %** | 41.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 114.00 € | **113.50 €** | 8.0 % | **7.5 %** | 113.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 98.50 € | **98.00 €** | 6.7 % | **6.1 %** | 98.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 62.50 € | **62.00 €** | 10.8 % | **9.9 %** | 62.39 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI FNB48P BT Tester USB portov s Bluetooth | 36.00 € | **35.50 €** | 11.2 % | **9.7 %** | 35.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 104.00 € | **103.50 €** | 8.1 % | **7.6 %** | 103.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 45.50 € | **45.00 €** | 9.2 % | **8.0 %** | 45.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 317.50 € | **317.00 €** | 18.2 % | **18.0 %** | 317.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 130.50 € | **130.00 €** | 8.9 % | **8.5 %** | 130.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.00 € | **470.50 €** | 8.8 % | **8.7 %** | 470.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 932.00 € | **931.50 €** | 18.4 % | **18.4 %** | 931.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT665P-5m endoskop | 44.00 € | **43.50 €** | 29.7 % | **28.2 %** | 43.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 162.00 € | **161.50 €** | 9.5 % | **9.1 %** | 161.89 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 852.00 € | **851.50 €** | 11.0 % | **10.9 %** | 851.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 320.00 € | **319.50 €** | 9.9 % | **9.8 %** | 319.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 86.00 € | **85.50 €** | 11.1 % | **10.4 %** | 85.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 255.50 € | **255.00 €** | 19.4 % | **19.2 %** | 255.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 291.00 € | **290.50 €** | 25.4 % | **25.2 %** | 290.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 121.50 € | **121.00 €** | 13.4 % | **12.9 %** | 121.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 145.50 € | **145.00 €** | 9.3 % | **8.9 %** | 145.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1285.50 € | **1285.00 €** | 7.4 % | **7.4 %** | 1285.39 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta Extreme Dry Compact DH5250F0 | 231.50 € | **231.00 €** | 5.8 % | **5.6 %** | 231.39 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 81.00 € | **80.50 €** | 10.1 % | **9.4 %** | 80.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 52.00 € | **51.50 €** | 8.9 % | **7.8 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 296.00 € | **295.50 €** | 47.1 % | **46.8 %** | 295.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9286IB | 246.00 € | **245.50 €** | 6.3 % | **6.1 %** | 245.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 88.00 € | **87.50 €** | 10.1 % | **9.5 %** | 87.89 € | cena podľa najlacnejšieho iného predajcu |
| Tesla AeroStar T700 | 79.00 € | **78.50 €** | 6.9 % | **6.2 %** | 78.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 270.00 € | **269.50 €** | 6.4 % | **6.2 %** | 269.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 24.50 € | **24.00 €** | 10.8 % | **8.6 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA CD-S303 BLACK | 377.00 € | **376.50 €** | 5.9 % | **5.8 %** | 376.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 274.50 € | **274.00 €** | 7.8 % | **7.6 %** | 274.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 255.50 € | **255.00 €** | 6.8 % | **6.6 %** | 255.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 157.50 € | **157.00 €** | 11.9 % | **11.5 %** | 157.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 71.50 € | **71.00 €** | 8.8 % | **8.0 %** | 71.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.50 € | **117.00 €** | 23782.1 % | **23680.5 %** | 117.39 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 727.00 € | **726.50 €** | 8.9 % | **8.8 %** | 726.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 136.50 € | **136.00 €** | 19.3 % | **18.9 %** | 136.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 179.00 € | **178.50 €** | 15.6 % | **15.3 %** | 178.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 79.50 € | **79.00 €** | 36.6 % | **35.8 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3411 1600W 12V nástenný | 236.50 € | **236.00 €** | 7.9 % | **7.7 %** | 236.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj REBEL POWER 800 LFP4 RB-4027 500W 12V | 88.00 € | **87.50 €** | 5.8 % | **5.2 %** | 87.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 202.50 € | **202.00 €** | 7.3 % | **7.1 %** | 202.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 267.00 € | **266.50 €** | 6.4 % | **6.2 %** | 266.89 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 36.00 € | **35.50 €** | 16.1 % | **14.5 %** | 35.89 € | cena podľa najlacnejšieho iného predajcu |
| Candy CFBD 2450/2EH Double door | 307.50 € | **307.00 €** | 51.5 % | **51.3 %** | 307.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 74.50 € | **74.00 €** | 11.4 % | **10.6 %** | 74.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 317.00 € | **316.50 €** | 7.8 % | **7.7 %** | 316.89 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 341.00 € | **340.50 €** | 9.4 % | **9.3 %** | 340.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 629.50 € | **629.00 €** | 6.3 % | **6.2 %** | 629.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 665.00 € | **664.50 €** | 8.9 % | **8.8 %** | 664.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 694.00 € | **693.50 €** | 9.8 % | **9.7 %** | 693.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 103.00 € | **102.50 €** | 9.1 % | **8.5 %** | 102.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 103.00 € | **102.50 €** | 16.0 % | **15.5 %** | 102.89 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE145 | 39.50 € | **39.00 €** | 8.4 % | **7.0 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 600D | 136.00 € | **135.50 €** | 21.1 % | **20.6 %** | 135.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.00 € | **10.50 €** | 32.5 % | **26.5 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 22.00 € | **21.50 €** | 26.8 % | **23.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter FNIRSI DMC-100 | 34.00 € | **33.50 €** | 6.9 % | **5.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR710001 | 28.00 € | **27.50 €** | 18.1 % | **16.0 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015200 Citrusovač Ribera | 47.00 € | **46.50 €** | 14.3 % | **13.1 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| MENALUX CB104B | 22.00 € | **21.50 €** | 18.3 % | **15.6 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZSB4850 | 65.00 € | **64.50 €** | 12.9 % | **12.1 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Solac Q609 | 20.00 € | **19.50 €** | 20.6 % | **17.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSA752E | 23.50 € | **23.00 €** | 18.2 % | **15.7 %** | 23.40 € | cena podľa najlacnejšieho iného predajcu |
| ETA Verto II 1423 90000 bílý/zlatý | 32.00 € | **31.50 €** | 17.2 % | **15.4 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26730-56/RH | 33.50 € | **33.00 €** | 17.1 % | **15.4 %** | 33.40 € | cena podľa najlacnejšieho iného predajcu |
| REDMI Headphone Neo Black | 46.50 € | **46.00 €** | 10.1 % | **8.9 %** | 46.40 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco A12 5M automatické zaťahovacie vodítko pre ps... | 12.00 € | **11.50 €** | 38.0 % | **32.2 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco A12 5M automatické zaťahovacie vodítko pre ps... | 12.00 € | **11.50 €** | 38.0 % | **32.2 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.50 € | **28.00 €** | 10.1 % | **8.1 %** | 28.43 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 246.50 € | **246.00 €** | 30.8 % | **30.5 %** | 246.46 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic Siena 180 Easy | 26.50 € | **26.00 €** | 10.9 % | **8.8 %** | 26.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 500 ml, khaki zelená | 14.50 € | **14.00 €** | 15.9 % | **11.9 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 500 ml, oceľovo šedá | 14.50 € | **14.00 €** | 15.9 % | **11.9 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.50 € | **70.00 €** | 13.8 % | **13.0 %** | 70.49 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat VIOLA 2 černé | 41.50 € | **41.00 €** | 28.0 % | **26.5 %** | 41.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.50 € | **12.00 €** | 45.8 % | **40.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.50 € | **16.00 €** | 43.2 % | **38.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93025 Pánev na palač. Carina 24 cm | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93021 Pánev Carina 22 cm | 14.50 € | **14.00 €** | 15.2 % | **11.3 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| ETA 5180 91010 sklo | 12.50 € | **12.00 €** | 15.1 % | **10.5 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 12 ks | 173.50 € | **173.00 €** | 6.8 % | **6.4 %** | 173.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 14.50 € | **14.00 €** | 33.2 % | **28.6 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 11.50 € | **11.00 €** | 26.3 % | **20.9 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 14.50 € | **14.00 €** | 43.9 % | **39.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Kovový LED svietnik Solight 1V280, 40 cm, 5 LED, čierny | 22.50 € | **22.00 €** | 31.3 % | **28.4 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 20.50 € | **20.00 €** | 42.5 % | **39.0 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR740001 | 16.50 € | **16.00 €** | 17.6 % | **14.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1020500 | 37.50 € | **37.00 €** | 7.3 % | **5.9 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.50 € | **14.00 €** | 17.1 % | **13.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 24.50 € | **24.00 €** | 20.6 % | **18.1 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 19.50 € | **19.00 €** | 24.6 % | **21.4 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 33.50 € | **33.00 €** | 13.2 % | **11.5 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 1125.50 € | **1125.00 €** | 27.5 % | **27.5 %** | 1125.50 € | cena podľa najlacnejšieho iného predajcu |
| Smart WiFi Touch Wall Switch Sonoff TX T5 4C (4-chan... | 25.00 € | **24.50 €** | 17.7 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 15.50 € | **15.00 €** | 27.8 % | **23.7 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 16A, USB A+C rychlonabíjačka ... | 13.50 € | **13.00 €** | 31.0 % | **26.1 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 21.50 € | **21.00 €** | 34.8 % | **31.6 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 48.50 € | **48.00 €** | 33.3 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s meteostanicou | 20.50 € | **20.00 €** | 12.7 % | **9.9 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.50 € | **24.00 €** | 17.2 % | **14.8 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015502 Mikrovlnná trouba | 122.50 € | **122.00 €** | 15.7 % | **15.2 %** | 122.50 € | cena podľa najlacnejšieho iného predajcu |
| Concept OPK5160bc | 177.90 € | **177.50 €** | 9.1 % | **8.9 %** | 177.70 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 216.90 € | **216.50 €** | 13.9 % | **13.7 %** | 216.72 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 216.90 € | **216.50 €** | 36.9 % | **36.7 %** | 216.72 € | cena podľa najlacnejšieho iného predajcu |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 217.90 € | **217.50 €** | 5.4 % | **5.2 %** | 217.79 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3407 1200W 12V | 185.90 € | **185.50 €** | 6.9 % | **6.6 %** | 185.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 76.90 € | **76.50 €** | 22.4 % | **21.7 %** | 76.81 € | cena podľa najlacnejšieho iného predajcu |
| Bramka GL.iNet GL-MT5000 | 145.90 € | **145.50 €** | 10.0 % | **9.7 %** | 145.82 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21L3C-L 2.0 Mpix venkovní dome IP kamera s ... | 90.90 € | **90.50 €** | 17.7 % | **17.2 %** | 90.83 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 161.90 € | **161.50 €** | 20.8 % | **20.5 %** | 161.89 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.90 € | **127.50 €** | 11.5 % | **11.2 %** | 127.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.90 € | **9.50 €** | 24.8 % | **19.7 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Stěrka na dlažbu Classic s tele | 11.90 € | **11.50 €** | 10.2 % | **6.5 %** | 11.73 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Acra LAMP1 | 14.90 € | **14.50 €** | 12.7 % | **9.7 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 4100 | 14.90 € | **14.50 €** | 11.4 % | **8.5 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom bi... | 10.90 € | **10.50 €** | 29.0 % | **24.3 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 11.90 € | **11.50 €** | 119.4 % | **112.0 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **10.50 €** | 31.1 % | **26.3 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Girmi BL0401 Cestovní silikonová konvice | 14.90 € | **14.50 €** | 11.1 % | **8.2 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Ochranné puzdro Sunnylife mini B977-D pre RC ovládač... | 11.90 € | **11.50 €** | 33.4 % | **29.0 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| ETA ELA Mini 8599 90040, šedá šedá | 26.90 € | **26.50 €** | 7.4 % | **5.8 %** | 26.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Russell Hobbs 27374-56 | 33.90 € | **33.50 €** | 18.0 % | **16.6 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer TX1800U Nano Adaptér | 20.90 € | **20.50 €** | 11.9 % | **9.8 %** | 20.70 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro PGYTECH For Mavic 3 Pro/Mavic 3 Classic/Mavic... | 38.90 € | **38.50 €** | 15.0 % | **13.8 %** | 38.78 € | cena podľa najlacnejšieho iného predajcu |
| NEDIS SAMP42222WT domovní zesilovač (1x vstup, 2x vý... | 21.90 € | **21.50 €** | 18.0 % | **15.8 %** | 21.78 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi Redmi Buds 8 Active Black | 16.90 € | **16.50 €** | 12.6 % | **10.0 %** | 16.80 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 39.90 € | **39.50 €** | 6.4 % | **5.4 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 49.90 € | **49.50 €** | 26.6 % | **25.6 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93511 Pánev 28 cm | 32.90 € | **32.50 €** | 7.7 % | **6.4 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Floco, ... | 41.90 € | **41.50 €** | 32.6 % | **31.3 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 31.90 € | **31.50 €** | 22.5 % | **21.0 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V283, 53 cm, ... | 33.90 € | **33.50 €** | 36.6 % | **35.0 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 44.90 € | **44.50 €** | 44.5 % | **43.2 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 31.90 € | **31.50 €** | 18.4 % | **16.9 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 17.90 € | **17.50 €** | 14.4 % | **11.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 25.90 € | **25.50 €** | 9.8 % | **8.1 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 28.90 € | **28.50 €** | 7.1 % | **5.7 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 20.90 € | **20.50 €** | 22.4 % | **20.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 333.90 € | **333.50 €** | 22.3 % | **22.2 %** | 333.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 7.80 € | **7.50 €** | 25.3 % | **20.5 %** | 7.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.30 € | **7.10 €** | 45.5 % | **41.5 %** | 7.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.80 €** | 41.8 % | **32.4 %** | 2.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací pravouhlý konektor pre COB LED p... | 2.30 € | **2.10 €** | 98.9 % | **81.6 %** | 2.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate White | 270.00 € | **269.90 €** | 16.1 % | **16.0 %** | 269.95 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate Graphite Black | 270.00 € | **269.90 €** | 16.1 % | **16.0 %** | 269.95 € | cena podľa najlacnejšieho iného predajcu |
| Boxerské rukavice DBX BUSHIDO B-2v18 12 oz | 47.00 € | **46.90 €** | 5.5 % | **5.2 %** | 36.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reflexní míč, speedbag DBX BUSHIDO ARS-1168a | 37.00 € | **36.90 €** | 5.4 % | **5.2 %** | 30.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL TUNE 305 USB-C White | 18.00 € | **17.90 €** | 20.2 % | **19.6 %** | 17.91 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Red | 18.00 € | **17.90 €** | 20.2 % | **19.6 %** | 17.91 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Blue | 18.00 € | **17.90 €** | 20.2 % | **19.6 %** | 17.91 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Black | 18.00 € | **17.90 €** | 20.2 % | **19.6 %** | 17.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 17.00 € | **16.90 €** | 35.0 % | **34.2 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| MOES TV02 Termostatická hlavica s LCD displejom a te... | 42.00 € | **41.90 €** | 80.8 % | **80.3 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 64.00 € | **63.90 €** | 17.9 % | **17.7 %** | 63.99 € | cena podľa najlacnejšieho iného predajcu |
| Balanční podložka REBEL ACTIVE RBA-3104-46 | 27.00 € | **26.90 €** | 22.1 % | **21.6 %** | 26.99 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.00 € | **21.90 €** | 10.9 % | **10.4 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 40.00 € | **39.90 €** | 13.7 % | **13.4 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.00 € | **16.90 €** | 38.8 % | **38.0 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 22.00 € | **21.90 €** | 11.4 % | **10.9 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 19.00 € | **18.90 €** | 29.5 % | **28.8 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Bella B -4430 bílooranžová | 21.00 € | **20.90 €** | 16.6 % | **16.1 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Coppertinto KI280G10 | 30.00 € | **29.90 €** | 7.9 % | **7.6 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia IP kamera s LED světlom | 30.00 € | **29.90 €** | 12.9 % | **12.5 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 38.00 € | **37.90 €** | 90.9 % | **90.4 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 38.00 € | **37.90 €** | 8.9 % | **8.6 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 25.00 € | **24.90 €** | 37.3 % | **36.8 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar SB-820BT Soundbar | 34.00 € | **33.90 €** | 8.1 % | **7.8 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 50.00 € | **49.90 €** | 26.9 % | **26.7 %** | 50.00 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 44.00 € | **43.90 €** | 15.8 % | **15.6 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu |
| Sati Crema 1 kg zrno | 22.00 € | **21.90 €** | 17.8 % | **17.2 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový oválny lampáš so žiarovkou s micro LE... | 5.40 € | **5.30 €** | 20.9 % | **18.7 %** | 5.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.00 € | **14.90 €** | 35.4 % | **34.4 %** | 14.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.00 € | **11.90 €** | 11.5 % | **10.6 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **14.90 €** | 26.6 % | **25.8 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.00 € | **11.90 €** | 40.0 % | **38.8 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93020 Pánev Carina 20 cm | 14.00 € | **13.90 €** | 14.7 % | **13.9 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.90 € | **8.80 €** | 55.6 % | **53.9 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.70 € | **9.60 €** | 34.1 % | **32.7 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.00 € | **15.90 €** | 31.7 % | **30.8 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.60 € | **8.50 €** | 41.2 % | **39.6 %** | 8.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.00 € | **10.90 €** | 31.3 % | **30.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 12.00 € | **11.90 €** | 34.8 % | **33.6 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.80 € | **6.70 €** | 40.3 % | **38.3 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.90 € | **9.80 €** | 26.2 % | **24.9 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.40 € | **9.30 €** | 32.9 % | **31.5 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 13.00 € | **12.90 €** | 27.0 % | **26.1 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 5W, 500lm, 4... | 9.40 € | **9.30 €** | 30.9 % | **29.5 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 16.00 € | **15.90 €** | 8.0 % | **7.4 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight ventilátor do kúpeľne | 9.60 € | **9.50 €** | 38.1 % | **36.7 %** | 9.60 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač SUPERIOR LG – Bluetooth... | 16.00 € | **15.90 €** | 58.4 % | **57.5 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor na bicykel, Find My kompatibilný | 14.00 € | **13.90 €** | 32.2 % | **31.3 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 9.90 € | **9.80 €** | 45.3 % | **43.8 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.90 € | **9.80 €** | 18.0 % | **16.8 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.00 € | **115.90 €** | 18.0 % | **17.9 %** | 115.93 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent white | 229.00 € | **228.90 €** | 16.4 % | **16.3 %** | 228.94 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 229.00 € | **228.90 €** | 16.4 % | **16.3 %** | 228.94 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 229.00 € | **228.90 €** | 16.4 % | **16.3 %** | 228.94 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 229.00 € | **228.90 €** | 16.4 % | **16.3 %** | 228.94 € | cena podľa najlacnejšieho iného predajcu |
| Detektor drôtov UNI-T UT25CL | 141.00 € | **140.90 €** | 12.9 % | **12.8 %** | 140.99 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 122.00 € | **121.90 €** | 6.1 % | **6.1 %** | 121.99 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.00 € | **86.90 €** | 21.7 % | **21.6 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.00 € | **151.90 €** | 18.9 % | **18.9 %** | 151.99 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.00 € | **104.90 €** | 19.2 % | **19.1 %** | 105.00 € | cena podľa najlacnejšieho iného predajcu |

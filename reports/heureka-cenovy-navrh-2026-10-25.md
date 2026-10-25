# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-25

Vstup: `premiumstore-sk_2026-10-25_12-56.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6123**
- Návrh **zvýšiť** cenu: **755** produktov
- Návrh **znížiť** cenu: **611** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4757** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **35**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **283**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (755)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **956.90 €** | 6.0 % | **43.8 %** | 957.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 813.00 € | **968.00 €** | 15.4 % | **37.4 %** | 968.13 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 28.0 % | **44.3 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **888.90 €** | 29.5 % | **43.8 %** | 889.00 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 463.00 € | **535.50 €** | 7.7 % | **24.6 %** | 535.63 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 40.8 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **554.00 €** | 6.0 % | **21.0 %** | 554.33 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 806.00 € | **870.00 €** | 15.3 % | **24.5 %** | 870.20 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 604.00 € | **656.90 €** | 15.0 % | **25.1 %** | 656.92 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 48.6 % | **72.6 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 49.1 % | **73.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 49.1 % | **72.2 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 656.90 € | **702.00 €** | 16.1 % | **24.1 %** | 702.38 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **818.90 €** | 35.5 % | **43.2 %** | 819.00 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **330.50 €** | 6.1 % | **19.7 %** | 330.67 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW8F5412SAC | 675.00 € | **711.50 €** | 6.0 % | **11.7 %** | 711.70 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **306.00 €** | 6.2 % | **20.5 %** | 306.46 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **349.00 €** | 15.0 % | **28.0 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 503.50 € | **538.00 €** | 8.7 % | **16.2 %** | 538.45 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 27.9 % | **43.2 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-285H Intel Core Ultra 9 2... | 700.50 € | **732.50 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 208.50 € | **238.90 €** | 15.1 % | **31.9 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **221.00 €** | 6.1 % | **22.4 %** | 221.29 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **224.00 €** | 6.1 % | **22.2 %** | 224.38 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 138.90 € | **168.00 €** | 56.5 % | **89.3 %** | 168.09 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.50 € | **83.50 €** | 15.3 % | **73.4 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 6.3 % | **32.1 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **220.50 €** | 6.2 % | **20.4 %** | 220.67 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 298.50 € | **321.90 €** | 7.1 % | **15.5 %** | 321.96 € | cena podľa najlacnejšieho iného predajcu |
| LED trubicové svietidlo NEEWER TL60 20 W | 135.90 € | **158.50 €** | 5.0 % | **22.5 %** | 158.79 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 404.00 € | **426.50 €** | 5.7 % | **11.6 %** | 426.55 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 348.00 € | **370.50 €** | 20.0 % | **27.7 %** | 370.71 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 297.90 € | **319.00 €** | 15.0 % | **23.2 %** | 319.36 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 573.00 € | **593.50 €** | 6.2 % | **10.0 %** | 593.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 213.00 € | **232.50 €** | 14.2 % | **24.6 %** | 232.79 € | cena podľa najlacnejšieho iného predajcu |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 30.00 € | **49.50 €** | 20.7 % | **99.2 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 190.50 € | **207.90 €** | 17.5 % | **28.2 %** | 208.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 204.90 € | **221.90 €** | 18.4 % | **28.2 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 177.00 € | **193.50 €** | 7.5 % | **17.5 %** | 193.71 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 177.00 € | **193.50 €** | 7.5 % | **17.5 %** | 193.71 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 77.50 € | **94.00 €** | 17.2 % | **42.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CIO 225 EE/N | 282.90 € | **298.90 €** | 10.1 % | **16.3 %** | 299.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 772.00 € | **787.50 €** | 18.3 % | **20.7 %** | 787.58 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 253.50 € | **268.50 €** | 25.2 % | **32.7 %** | 268.54 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 253.50 € | **268.50 €** | 16.4 % | **23.3 %** | 268.54 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 160.50 € | **175.00 €** | 21.4 % | **32.4 %** | 175.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 33.5 % | **65.0 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 37.7 % | **69.7 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 153.50 € | **166.50 €** | 18.9 % | **28.9 %** | 166.90 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk New Karma PRO ED 10x50 | 186.50 € | **199.50 €** | 14.3 % | **22.3 %** | 199.90 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 211.00 € | **223.90 €** | 9.7 % | **16.4 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 216.00 € | **228.50 €** | 14.3 % | **20.9 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 216.00 € | **228.50 €** | 14.3 % | **20.9 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 363.00 € | **374.90 €** | 8.2 % | **11.7 %** | 374.95 € | cena podľa najlacnejšieho iného predajcu |
| BenQ brašna k projektorům MX711/710/660/ | 34.90 € | **46.00 €** | 11.4 % | **46.9 %** | 46.16 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.00 € | **898.90 €** | 20.2 % | **21.7 %** | 898.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 226.90 € | **237.50 €** | 6.7 % | **11.7 %** | 237.56 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **125.50 €** | 6.2 % | **16.0 %** | 125.67 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44GW | 194.00 € | **204.00 €** | 6.2 % | **11.6 %** | 204.14 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 10N3B-S | 445.50 € | **455.50 €** | 9.2 % | **11.7 %** | 455.79 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 127.00 € | **137.00 €** | 8.0 % | **16.6 %** | 137.45 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 880.00 € | **889.90 €** | 17.2 % | **18.5 %** | 890.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **146.90 €** | 49.6 % | **60.0 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 337.00 € | **346.50 €** | 8.8 % | **11.9 %** | 346.67 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 205.50 € | **215.00 €** | 6.1 % | **11.0 %** | 215.20 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 359.00 € | **368.50 €** | 8.6 % | **11.5 %** | 368.72 € | cena podľa najlacnejšieho iného predajcu |
| Sada panelov Moza Racing FMP18 | 964.50 € | **974.00 €** | 21.5 % | **22.7 %** | 974.29 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 6.9 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 48.0 % | **81.4 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 56.7 % | **92.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.50 €** | 6.3 % | **17.4 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **79.50 €** | 6.7 % | **20.3 %** | 79.63 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC 20100 W | 63.00 € | **71.90 €** | 17.4 % | **34.0 %** | 71.92 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-Q09 8MP Wi-Fi 6 IP kamera | 34.90 € | **43.50 €** | 15.6 % | **44.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 319.50 € | **328.00 €** | 9.3 % | **12.2 %** | 328.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 31.50 € | **39.50 €** | 9.9 % | **37.8 %** | 39.67 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TB | 295.50 € | **303.50 €** | 8.6 % | **11.5 %** | 303.80 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 484.00 € | **492.00 €** | 14.1 % | **16.0 %** | 492.39 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 231.00 € | **238.90 €** | 16.9 % | **20.8 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 631.00 € | **638.90 €** | 43.3 % | **45.1 %** | 639.00 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **136.90 €** | 35.4 % | **43.5 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 535.00 € | **542.50 €** | 17.4 % | **19.0 %** | 542.58 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server TERRAMASTER F6-424 NAS s procesorom ... | 738.50 € | **746.00 €** | 20.9 % | **22.1 %** | 746.21 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 784.00 € | **791.50 €** | 21.4 % | **22.6 %** | 791.79 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 784.00 € | **791.50 €** | 9.3 % | **10.3 %** | 791.79 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 159.00 € | **166.50 €** | 6.1 % | **11.1 %** | 166.90 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 35.1 % | **45.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BHI681EB | 111.00 € | **118.00 €** | 9.1 % | **16.0 %** | 118.10 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD NAS - súborový server s procesoro... | 691.00 € | **698.00 €** | 21.2 % | **22.5 %** | 698.33 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 30.4 % | **44.9 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 289.90 € | **296.50 €** | 12.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **55.50 €** | 6.1 % | **20.4 %** | 55.67 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 317.00 € | **323.50 €** | 5.9 % | **8.1 %** | 323.60 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 45.5 % | **79.4 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Candy GWD 485SB6-S | 337.00 € | **343.00 €** | 9.7 % | **11.6 %** | 343.37 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped MERACH MR-S28B1 | 556.00 € | **561.90 €** | 23.7 % | **25.0 %** | 562.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **143.00 €** | 15.9 % | **20.6 %** | 143.08 € | cena podľa najlacnejšieho iného predajcu |
| NAS server TERRAMASTER F2-425 Plus s procesorom Inte... | 534.50 € | **540.00 €** | 24.0 % | **25.3 %** | 540.21 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 158.50 € | **164.00 €** | 9.7 % | **13.5 %** | 164.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 41.50 € | **47.00 €** | 20.0 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Eliptický trenažér MERACH MR-E33B4 | 480.50 € | **485.50 €** | 30.1 % | **31.4 %** | 485.54 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 290.50 € | **295.50 €** | 11.0 % | **12.9 %** | 295.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 173.00 € | **178.00 €** | 5.7 % | **8.8 %** | 178.20 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F4 SSD NAS - súborový server s procesoro... | 508.50 € | **513.50 €** | 23.2 % | **24.4 %** | 513.75 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 189.00 € | **194.00 €** | 13.0 % | **16.0 %** | 194.30 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1535SS | 200.00 € | **205.00 €** | 8.3 % | **11.0 %** | 205.31 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 29.90 € | **34.50 €** | 6.2 % | **22.6 %** | 34.54 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 76.00 € | **80.50 €** | 6.1 % | **12.3 %** | 80.51 € | cena podľa najlacnejšieho iného predajcu |
| LaserPecker 2 – základná verzia | 436.00 € | **440.50 €** | 15.5 % | **16.7 %** | 440.58 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 332.50 € | **337.00 €** | 10.0 % | **11.5 %** | 337.09 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo infra sušička NIR+ | 176.00 € | **180.50 €** | 6.0 % | **8.8 %** | 180.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338DD | 521.00 € | **525.50 €** | 6.1 % | **7.0 %** | 525.64 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 127.50 € | **132.00 €** | 12.8 % | **16.8 %** | 132.18 € | cena podľa najlacnejšieho iného predajcu |
| Neewer GM76 179 cm statív / monopod | 98.00 € | **102.50 €** | 18.6 % | **24.0 %** | 102.88 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 440.00 € | **444.50 €** | 22.6 % | **23.9 %** | 444.88 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet HUION Kamvas Pad 12 KP1202 | 477.50 € | **482.00 €** | 19.1 % | **20.2 %** | 482.42 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 101.50 € | **106.00 €** | 20.8 % | **26.2 %** | 106.45 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu MOVA P10 | 475.50 € | **480.00 €** | 18.6 % | **19.8 %** | 480.50 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 | 418.50 € | **422.90 €** | 19.4 % | **20.7 %** | 423.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 41.6 % | **48.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **56.00 €** | 6.5 % | **14.9 %** | 56.13 € | cena podľa najlacnejšieho iného predajcu |
| 3-zónový hadicový časovač RainPoint ITV305 | 45.50 € | **49.50 €** | 13.6 % | **23.6 %** | 49.58 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 98.50 € | **102.50 €** | 5.2 % | **9.5 %** | 102.59 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 240.00 € | **244.00 €** | 6.2 % | **8.0 %** | 244.10 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 194.50 € | **198.50 €** | 6.8 % | **9.0 %** | 198.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 3611A | 106.50 € | **110.50 €** | 6.0 % | **9.9 %** | 110.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 151.50 € | **155.50 €** | 6.0 % | **8.8 %** | 155.70 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHC 5865 W | 273.00 € | **277.00 €** | 9.9 % | **11.5 %** | 277.25 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP800IIIV | 387.00 € | **391.00 €** | 20.4 % | **21.7 %** | 391.29 € | cena podľa najlacnejšieho iného predajcu |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 419.50 € | **423.50 €** | 22.0 % | **23.2 %** | 423.83 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový bicykel MERACH MR-S19 | 422.00 € | **426.00 €** | 30.2 % | **31.4 %** | 426.38 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 437.00 € | **441.00 €** | 29.3 % | **30.4 %** | 441.38 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá do uší HiFiMAN RE2000 Pro Gold | 417.00 € | **421.00 €** | 21.3 % | **22.5 %** | 421.46 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 166.00 € | **170.00 €** | 8.8 % | **11.4 %** | 170.49 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 180.00 € | **183.90 €** | 9.3 % | **11.7 %** | 184.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z22P PRO s 22-palcovým doty... | 348.00 € | **351.90 €** | 21.0 % | **22.3 %** | 351.92 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 355.00 € | **358.90 €** | 24.3 % | **25.6 %** | 358.96 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **560.90 €** | 6.6 % | **7.3 %** | 561.00 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 78.90 € | **82.50 €** | 5.0 % | **9.8 %** | 82.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 31.2 % | **43.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 14 | 333.50 € | **337.00 €** | 33.6 % | **35.0 %** | 337.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 15 | 333.50 € | **337.00 €** | 33.6 % | **35.0 %** | 337.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 6 | 333.50 € | **337.00 €** | 33.6 % | **35.0 %** | 337.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 8 | 333.50 € | **337.00 €** | 33.6 % | **35.0 %** | 337.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 9 | 333.50 € | **337.00 €** | 33.6 % | **35.0 %** | 337.04 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslovací trenažér Deer Run RW600 (biely) | 321.00 € | **324.50 €** | 21.9 % | **23.3 %** | 324.67 € | cena podľa najlacnejšieho iného predajcu |
| ETA Pečenka Plus 0133 90020 | 84.50 € | **88.00 €** | 7.9 % | **12.4 %** | 88.19 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Hurricane H5 Plus | 73.50 € | **77.00 €** | 5.9 % | **10.9 %** | 77.20 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-22KW... | 351.00 € | **354.50 €** | 37.6 % | **39.0 %** | 354.75 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 365.00 € | **368.50 €** | 23.9 % | **25.1 %** | 368.79 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 131.00 € | **134.50 €** | 8.5 % | **11.4 %** | 134.83 € | cena podľa najlacnejšieho iného predajcu |
| ETA Magic X-treme 7235 90000 černý/modrý | 324.50 € | **328.00 €** | 6.6 % | **7.7 %** | 328.40 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 161.00 € | **164.50 €** | 6.1 % | **8.4 %** | 164.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 208.50 € | **212.00 €** | 6.0 % | **7.7 %** | 212.40 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 58.50 € | **62.00 €** | 47.4 % | **56.3 %** | 62.49 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 459.50 € | **463.00 €** | 6.0 % | **6.8 %** | 463.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **78.90 €** | 6.5 % | **11.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka elektromobilov Besen BN70-BC-11KW... | 321.50 € | **324.90 €** | 39.1 % | **40.6 %** | 324.92 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LE300Bi | 313.50 € | **316.90 €** | 19.6 % | **20.9 %** | 316.92 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 34.1 % | **48.9 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO727BL | 55.90 € | **59.00 €** | 6.2 % | **12.1 %** | 59.21 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 91 | 186.90 € | **190.00 €** | 7.0 % | **8.8 %** | 190.40 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B1-EU | 261.00 € | **264.00 €** | 22.4 % | **23.8 %** | 264.04 € | cena podľa najlacnejšieho iného predajcu |
| Sada na nabíjanie akčnej kamery SJCAM SJ30 (čierny) | 275.00 € | **278.00 €** | 24.9 % | **26.3 %** | 278.08 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet Prime SE | 307.50 € | **310.50 €** | 21.8 % | **23.0 %** | 310.58 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 358.50 € | **361.50 €** | 6.0 % | **6.9 %** | 361.60 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T14 | 298.50 € | **301.50 €** | 23.1 % | **24.3 %** | 301.63 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 58.00 € | **61.00 €** | 5.1 % | **10.5 %** | 61.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **35.50 €** | 7.2 % | **17.1 %** | 35.79 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-3 Thunderbolt 5 | 321.00 € | **324.00 €** | 21.2 % | **22.4 %** | 324.38 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO SpaceWalk 5 (čierny) | 310.00 € | **313.00 €** | 21.6 % | **22.8 %** | 313.38 € | cena podľa najlacnejšieho iného predajcu |
| Systémy kvapkového a rozprašovacieho zavlažovania | 46.50 € | **49.50 €** | 33.9 % | **42.6 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta GZ5436E0 | 299.00 € | **302.00 €** | 11.2 % | **12.4 %** | 302.46 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 249.00 € | **251.90 €** | 24.2 % | **25.7 %** | 251.92 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 244.00 € | **246.90 €** | 21.2 % | **22.6 %** | 246.92 € | cena podľa najlacnejšieho iného predajcu |
| Sada 2 ks LED svietidiel NEEWER RGB1200 60 W V4 | 368.00 € | **370.90 €** | 19.5 % | **20.5 %** | 370.92 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 27.3 % | **30.1 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **12.50 €** | 36.7 % | **76.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2012400 | 36.90 € | **39.50 €** | 5.6 % | **13.0 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 154.50 € | **157.00 €** | 6.1 % | **7.8 %** | 157.02 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Melobuds A30 (čierne) | 29.00 € | **31.50 €** | 14.7 % | **24.6 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX FH50R | 231.00 € | **233.50 €** | 23.1 % | **24.5 %** | 233.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 270.00 € | **272.50 €** | 22.4 % | **23.6 %** | 272.71 € | cena podľa najlacnejšieho iného predajcu |
| LED videolampa GODOX ML80Bi | 238.50 € | **241.00 €** | 19.6 % | **20.9 %** | 241.21 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 261.00 € | **263.50 €** | 5.3 % | **6.3 %** | 263.76 € | cena podľa najlacnejšieho iného predajcu |
| Priemyselná infračervená termokamera Habotest HT820 | 279.00 € | **281.50 €** | 17.2 % | **18.2 %** | 281.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 6, čierna) | 271.00 € | **273.50 €** | 22.3 % | **23.4 %** | 273.88 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný statív Neewer LT35 z uhlíkových vlákien s o... | 264.50 € | **267.00 €** | 24.3 % | **25.5 %** | 267.38 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **18.50 €** | 15.3 % | **33.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 263.50 € | **266.00 €** | 6.3 % | **7.3 %** | 266.42 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 269.50 € | **272.00 €** | 21.4 % | **22.6 %** | 272.46 € | cena podľa najlacnejšieho iného predajcu |
| Anamorfný objektív Freewell 1,33x s bajonetom 17 mm | 203.50 € | **205.90 €** | 12.4 % | **13.8 %** | 205.92 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (červený) | 234.50 € | **236.90 €** | 17.4 % | **18.6 %** | 236.92 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P20 (čierny a... | 234.50 € | **236.90 €** | 17.4 % | **18.6 %** | 236.92 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 White | 41.90 € | **44.00 €** | 9.8 % | **15.3 %** | 44.08 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Black | 41.90 € | **44.00 €** | 9.8 % | **15.3 %** | 44.08 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Stellar 2 Pink | 41.90 € | **44.00 €** | 9.8 % | **15.3 %** | 44.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 44.4 % | **49.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Spitz Plus 4G LTE | 214.90 € | **217.00 €** | 23.2 % | **24.4 %** | 217.13 € | cena podľa najlacnejšieho iného predajcu |
| Swan OS-10 Black | 223.90 € | **226.00 €** | 11.7 % | **12.7 %** | 226.13 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB200B | 230.90 € | **233.00 €** | 18.9 % | **20.0 %** | 233.25 € | cena podľa najlacnejšieho iného predajcu |
| EDIFIER ES60 reproduktor černý | 93.90 € | **96.00 €** | 9.9 % | **12.4 %** | 96.27 € | cena podľa najlacnejšieho iného predajcu |
| Tefal OptiGrill 2v1 GC773D30 | 164.90 € | **167.00 €** | 10.1 % | **11.5 %** | 167.37 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 14, strieborn... | 189.50 € | **191.50 €** | 22.6 % | **23.9 %** | 191.54 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CB60B Dvojfarebné 70 W LED štúdiové osvetlenie | 124.00 € | **126.00 €** | 19.6 % | **21.5 %** | 126.04 € | cena podľa najlacnejšieho iného predajcu |
| Neewer LS-300 – bodové svetlo s výkonom 300 W a uchy... | 189.00 € | **191.00 €** | 20.0 % | **21.3 %** | 191.04 € | cena podľa najlacnejšieho iného predajcu |
| Midland BTX1 Pro S, Twin | 279.90 € | **281.90 €** | 6.3 % | **7.1 %** | 281.96 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ20 – nabíjací set (čierny) | 206.50 € | **208.50 €** | 22.8 % | **24.0 %** | 208.58 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO White | 48.00 € | **50.00 €** | 9.0 % | **13.5 %** | 50.10 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Black | 48.00 € | **50.00 €** | 9.0 % | **13.5 %** | 50.10 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Podsie 5 PRO Pink | 48.00 € | **50.00 €** | 9.0 % | **13.5 %** | 50.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 12.50 € | **14.50 €** | 23.9 % | **43.8 %** | 14.62 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+BT sluch.TWS10BK | 25.00 € | **27.00 €** | 8.2 % | **16.9 %** | 27.13 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 188.50 € | **190.50 €** | 6.4 % | **7.6 %** | 190.63 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 373.00 € | **375.00 €** | 19.3 % | **20.0 %** | 375.15 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie 10102847 FS150B | 199.50 € | **201.50 €** | 20.4 % | **21.6 %** | 201.67 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120P | 181.00 € | **183.00 €** | 9.0 % | **10.2 %** | 183.17 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 42.50 € | **44.50 €** | 38.6 % | **45.1 %** | 44.70 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W03,23,8" | 203.50 € | **205.50 €** | 21.4 % | **22.6 %** | 205.71 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultimea Aura S5T | 210.00 € | **212.00 €** | 17.1 % | **18.2 %** | 212.21 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT3000 44,4 Wh štartér | 64.00 € | **66.00 €** | 21.3 % | **25.1 %** | 66.25 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER x660 PRO II | 206.50 € | **208.50 €** | 24.0 % | **25.2 %** | 208.75 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 184.00 € | **186.00 €** | 17.1 % | **18.4 %** | 186.25 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 184.00 € | **186.00 €** | 10.4 % | **11.6 %** | 186.25 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 126 | 431.50 € | **433.50 €** | 11.2 % | **11.7 %** | 433.76 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Air Projektor | 202.50 € | **204.50 €** | 21.1 % | **22.3 %** | 204.83 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier Comfo Flex (biele) | 48.50 € | **50.50 €** | 5.1 % | **9.5 %** | 50.83 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Pixy | 81.50 € | **83.50 €** | 14.8 % | **17.6 %** | 83.83 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P11pro | 198.50 € | **200.50 €** | 17.0 % | **18.2 %** | 200.83 € | cena podľa najlacnejšieho iného predajcu |
| Sušič vlasov MOVA Flip 10 | 204.00 € | **206.00 €** | 39.1 % | **40.5 %** | 206.38 € | cena podľa najlacnejšieho iného predajcu |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 110.00 € | **112.00 €** | 12.4 % | **14.4 %** | 112.38 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER GR18C Okrúhly LED panel pre bočné osvetlenie | 201.00 € | **203.00 €** | 23.6 % | **24.9 %** | 203.38 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 231.50 € | **233.50 €** | 21.5 % | **22.6 %** | 233.88 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **23.50 €** | 14.8 % | **25.5 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri 2 | 339.50 € | **341.50 €** | 19.3 % | **20.0 %** | 341.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter PGYTECH VND 6-9 stop pre DJI Mavic 3 / Mavic ... | 11.50 € | **13.50 €** | 37.7 % | **61.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Kolečka pro kancelářskou židli Ruhhy 25280 | 14.00 € | **16.00 €** | 22.8 % | **40.3 %** | 16.46 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 103.00 € | **105.00 €** | 9.4 % | **11.5 %** | 105.47 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 103.00 € | **105.00 €** | 5.2 % | **7.3 %** | 105.47 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 11.00 € | **13.00 €** | 13.9 % | **34.6 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 175.00 € | **176.90 €** | 9.5 % | **10.7 %** | 176.92 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600R RGB | 143.00 € | **144.90 €** | 22.9 % | **24.5 %** | 144.92 € | cena podľa najlacnejšieho iného predajcu |
| Sada flexibilného osvetlenia Neewer BH40C s dvoma ra... | 147.00 € | **148.90 €** | 19.9 % | **21.5 %** | 148.92 € | cena podľa najlacnejšieho iného predajcu |
| Tlačiareň štítkov NIIMBOT M3 (biela) | 148.00 € | **149.90 €** | 22.8 % | **24.4 %** | 149.96 € | cena podľa najlacnejšieho iného predajcu |
| Neewer BP66 štúdiový set dve LED lampy + filtre + st... | 39.00 € | **40.90 €** | 16.9 % | **22.6 %** | 40.92 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Dávkovač mýdla Pěna bílý | 26.90 € | **28.50 €** | 11.0 % | **17.6 %** | 28.75 € | cena podľa najlacnejšieho iného predajcu |
| GLOX Dávkovač mýdla Pěna černý | 26.90 € | **28.50 €** | 11.0 % | **17.6 %** | 28.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač 4 x 16A, čierny | 3.10 € | **4.70 €** | 48.3 % | **124.8 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie NEEWER CB60 RGB, 70 W, CRI 97+ | 164.90 € | **166.50 €** | 19.7 % | **20.9 %** | 166.63 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 12, zlatá) | 189.90 € | **191.50 €** | 22.6 % | **23.6 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, strieborná ... | 189.90 € | **191.50 €** | 22.6 % | **23.6 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 6, zlatá) | 189.90 € | **191.50 €** | 22.6 % | **23.6 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 189.90 € | **191.50 €** | 22.6 % | **23.6 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT2302 Digitálny tester zemného odporu | 117.00 € | **118.50 €** | 15.8 % | **17.3 %** | 118.54 € | cena podľa najlacnejšieho iného predajcu |
| Graef S 10005 | 113.00 € | **114.50 €** | 9.2 % | **10.7 %** | 114.54 € | cena podľa najlacnejšieho iného predajcu |
| Čistič okien PROSCENIC Win10pro | 144.50 € | **146.00 €** | 22.2 % | **23.5 %** | 146.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 117.00 € | **118.50 €** | 16.1 % | **17.6 %** | 118.54 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600Bi s dvojfare... | 136.00 € | **137.50 €** | 24.0 % | **25.3 %** | 137.54 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A185W03,18,5" | 142.50 € | **144.00 €** | 21.4 % | **22.7 %** | 144.08 € | cena podľa najlacnejšieho iného predajcu |
| Stojan JMGO pre modely N1S SE, Nano a PicoPlay+ | 119.00 € | **120.50 €** | 21.2 % | **22.7 %** | 120.63 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RBB1200 | 191.00 € | **192.50 €** | 19.1 % | **20.0 %** | 192.63 € | cena podľa najlacnejšieho iného predajcu |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 136.00 € | **137.50 €** | 12.7 % | **14.0 %** | 137.67 € | cena podľa najlacnejšieho iného predajcu |
| Projector Blitzwolf, BW-V8, 4K, Android OS | 141.50 € | **143.00 €** | 19.4 % | **20.6 %** | 143.17 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 159.00 € | **160.50 €** | 25.1 % | **26.2 %** | 160.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 149.00 € | **150.50 €** | 24.5 % | **25.8 %** | 150.67 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka a analyzátor batérií SkyRC MC5000 s rozhra... | 120.00 € | **121.50 €** | 21.8 % | **23.3 %** | 121.67 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 White | 32.00 € | **33.50 €** | 9.1 % | **14.2 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Pink | 32.00 € | **33.50 €** | 9.1 % | **14.2 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE F4142PW | 229.50 € | **231.00 €** | 7.3 % | **8.0 %** | 231.20 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Insta360 Luna Ultra (12-dielna) | 138.00 € | **139.50 €** | 10.6 % | **11.8 %** | 139.71 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX ES30 pre e-šport | 144.50 € | **146.00 €** | 24.0 % | **25.3 %** | 146.21 € | cena podľa najlacnejšieho iného predajcu |
| Lamp LED Neewer GL1C RGB 48W 2900-7000K | 128.00 € | **129.50 €** | 19.0 % | **20.4 %** | 129.75 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2440G1-EU (sivá) | 141.00 € | **142.50 €** | 23.6 % | **24.9 %** | 142.75 € | cena podľa najlacnejšieho iného predajcu |
| SJCAM M60 palubná kamera, 2 kanály (čierny) | 176.50 € | **178.00 €** | 21.8 % | **22.8 %** | 178.29 € | cena podľa najlacnejšieho iného predajcu |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 41.50 € | **43.00 €** | 12.3 % | **16.4 %** | 43.29 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (biela) | 151.50 € | **153.00 €** | 22.6 % | **23.9 %** | 153.29 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (čierna) | 151.50 € | **153.00 €** | 22.6 % | **23.9 %** | 153.29 € | cena podľa najlacnejšieho iného predajcu |
| Sekvenčná prevodovka PXN | 146.50 € | **148.00 €** | 15.8 % | **17.0 %** | 148.29 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 142.00 € | **143.50 €** | 5.8 % | **6.9 %** | 143.79 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W9 | 162.00 € | **163.50 €** | 21.6 % | **22.8 %** | 163.83 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 133.00 € | **134.50 €** | 24.4 % | **25.8 %** | 134.83 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT96425VD | 262.50 € | **264.00 €** | 7.0 % | **7.6 %** | 264.40 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120 | 165.50 € | **167.00 €** | 11.9 % | **12.9 %** | 167.42 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mop PROSCENIC F10 Ultra | 188.50 € | **190.00 €** | 21.9 % | **22.9 %** | 190.46 € | cena podľa najlacnejšieho iného predajcu |
| Mini LED svietidlo Neewer HB80C RGB COB | 193.50 € | **195.00 €** | 19.2 % | **20.2 %** | 195.46 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 307.50 € | **309.00 €** | 6.3 % | **6.8 %** | 309.49 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2440P1-EU (ružová) | 129.50 € | **130.90 €** | 23.0 % | **24.3 %** | 130.96 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10153 Horkovzdušná trouba | 163.50 € | **164.90 €** | 6.2 % | **7.1 %** | 165.00 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 33.50 € | **34.90 €** | 10.1 % | **14.7 %** | 34.98 € | cena podľa najlacnejšieho iného predajcu |
| Termotransferová fólia HTVRONT Pure, 30,5 cm × 1,8 m... | 4.40 € | **5.70 €** | 15.0 % | **49.0 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| BWT filtrační stanice Aqualizer | 61.90 € | **63.00 €** | 21.9 % | **24.1 %** | 63.10 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY470 so 4 ventilátormi ... | 120.90 € | **122.00 €** | 18.6 % | **19.7 %** | 122.17 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón Freewell Genius Rig pre iPhone 17 ... | 121.90 € | **123.00 €** | 15.6 % | **16.7 %** | 123.17 € | cena podľa najlacnejšieho iného predajcu |
| Autokamera SJCAM M60 (čierny) | 142.90 € | **144.00 €** | 22.5 % | **23.5 %** | 144.29 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC Q200neo | 135.90 € | **137.00 €** | 21.8 % | **22.8 %** | 137.33 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 132.90 € | **134.00 €** | 11.1 % | **12.1 %** | 134.33 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect USetup E7 15,6" 1920x1080 60Hz prenosný dot... | 141.90 € | **143.00 €** | 21.8 % | **22.8 %** | 143.38 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V020, 12 000 mAh | 141.90 € | **143.00 €** | 23.4 % | **24.4 %** | 143.38 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z15ST s 15,6-palcovým dotyk... | 141.90 € | **143.00 €** | 21.8 % | **22.7 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 37.5 % | **45.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Štartér UTRAI s vzduchovým kompresorom JS5 | 106.50 € | **107.50 €** | 23.5 % | **24.6 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP Z10T s 10-palcovým dotykový... | 128.00 € | **129.00 €** | 21.3 % | **22.2 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (biela) + 4 ventil... | 82.50 € | **83.50 €** | 19.3 % | **20.7 %** | 83.54 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (čierna) + 4 venti... | 101.00 € | **102.00 €** | 19.5 % | **20.7 %** | 102.04 € | cena podľa najlacnejšieho iného predajcu |
| Softbox Neewer 85 cm | 87.00 € | **88.00 €** | 24.0 % | **25.4 %** | 88.04 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny ramenný popruh Neewer | 69.00 € | **70.00 €** | 26.6 % | **28.4 %** | 70.04 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552320 Crocodile 5G LTE700 domovní zesilovač | 65.00 € | **66.00 €** | 94.3 % | **97.3 %** | 66.04 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI HS-02A F 100 W inteligentná spájkovačka | 97.90 € | **98.90 €** | 6.4 % | **7.5 %** | 98.96 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 74.50 € | **75.50 €** | 9.1 % | **10.6 %** | 75.58 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Ice Machine 651 | 99.00 € | **100.00 €** | 11.2 % | **12.4 %** | 100.08 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón Fifine Tank6 (biely) | 72.50 € | **73.50 €** | 22.0 % | **23.7 %** | 73.58 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (biele) | 95.00 € | **96.00 €** | 24.6 % | **25.9 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (čierne) | 95.00 € | **96.00 €** | 24.6 % | **25.9 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H6 Ultra (oranžové) | 95.00 € | **96.00 €** | 24.6 % | **25.9 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátor Lipo Gens Ace G-Tech 3300mAh 22,2V 60C 6S... | 71.00 € | **72.00 €** | 21.2 % | **22.9 %** | 72.08 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 57.00 € | **58.00 €** | 9.8 % | **11.7 %** | 58.08 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W03T 14" prenosný monitor | 108.90 € | **109.90 €** | 21.9 % | **23.0 %** | 110.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 6.80 € | **7.80 €** | 32.3 % | **51.7 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Amica SHM 51071 W | 245.90 € | **246.90 €** | 7.5 % | **8.0 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY505EE0 | 110.00 € | **111.00 €** | 11.3 % | **12.3 %** | 111.13 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný hliníkový statív Neewer LT07 s guľovou hlavou | 79.00 € | **80.00 €** | 24.0 % | **25.6 %** | 80.13 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-1 mini 12V DC bílý | 95.00 € | **96.00 €** | 13.6 % | **14.8 %** | 96.17 € | cena podľa najlacnejšieho iného predajcu |
| Laserový senzor pohybu F&F DRL-12-9 mini 12V DC černý | 95.00 € | **96.00 €** | 13.6 % | **14.8 %** | 96.17 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač VEXILAR C9 s vertikálnou konštrukciou | 75.00 € | **76.00 €** | 19.4 % | **21.0 %** | 76.17 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica Peladn S-2 Oculink | 95.00 € | **96.00 €** | 21.4 % | **22.7 %** | 96.17 € | cena podľa najlacnejšieho iného predajcu |
| Photo Studio PULUZ 80 cm (PU5083EU) | 93.50 € | **94.50 €** | 15.7 % | **16.9 %** | 94.67 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W05,14" | 87.50 € | **88.50 €** | 21.9 % | **23.3 %** | 88.67 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine TAM8 (ružový) | 89.50 € | **90.50 €** | 23.0 % | **24.3 %** | 90.67 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier D12 (čierny) | 86.00 € | **87.00 €** | 11.7 % | **13.0 %** | 87.17 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 110.00 € | **111.00 €** | 22.4 % | **23.5 %** | 111.17 € | cena podľa najlacnejšieho iného predajcu |
| BEKO HII64500UFT | 359.00 € | **360.00 €** | 6.8 % | **7.1 %** | 360.20 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S100 na detekciu úniku | 101.00 € | **102.00 €** | 19.3 % | **20.5 %** | 102.21 € | cena podľa najlacnejšieho iného predajcu |
| Okružná píla NAC AKU CS-165-LI-ST2-20V | 110.00 € | **111.00 €** | 13.0 % | **14.0 %** | 111.21 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1919 (čierny) | 102.00 € | **103.00 €** | 21.4 % | **22.6 %** | 103.21 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 105.00 € | **106.00 €** | 11.2 % | **12.2 %** | 106.21 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné púzdro DiCAPac WP-S5 pro fotoaparáty středn... | 79.00 € | **80.00 €** | 9.9 % | **11.3 %** | 80.21 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-B -6072 WiFi Smart Digital Lock Black | 102.50 € | **103.50 €** | 24.3 % | **25.6 %** | 103.75 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A140W05T 14" prenosný monitor | 106.00 € | **107.00 €** | 21.5 % | **22.7 %** | 107.25 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24440-56 | 112.50 € | **113.50 €** | 11.2 % | **12.2 %** | 113.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 99.50 € | **100.50 €** | 24.1 % | **25.4 %** | 100.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava držadiel PGY RetroVa pre iPhone 16 Pro | 99.50 € | **100.50 €** | 24.7 % | **26.0 %** | 100.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 99.50 € | **100.50 €** | 21.8 % | **23.1 %** | 100.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 99.50 € | **100.50 €** | 21.8 % | **23.1 %** | 100.79 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A156W04T s uhlopriečkou 15,6" | 112.50 € | **113.50 €** | 21.7 % | **22.8 %** | 113.83 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z18S 18" 100 Hz prenosný herný monitor | 125.00 € | **126.00 €** | 20.6 % | **21.6 %** | 126.33 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-72CB4xyP200-LBHA keramická varná doska ... | 113.50 € | **114.50 €** | 20.8 % | **21.9 %** | 114.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 11.00 € | **12.00 €** | 29.2 % | **41.0 %** | 12.34 € | cena podľa najlacnejšieho iného predajcu |
| Súprava osvetlenia Softbox 10102773 700 W, 3 ks | 104.00 € | **105.00 €** | 25.3 % | **26.5 %** | 105.38 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD200WS (čierny) | 96.00 € | **97.00 €** | 25.0 % | **26.3 %** | 97.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (biely) | 107.50 € | **108.50 €** | 19.3 % | **20.4 %** | 108.88 € | cena podľa najlacnejšieho iného predajcu |
| Herný pedál PXN Vector X Clutch | 103.50 € | **104.50 €** | 12.8 % | **13.9 %** | 104.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 13.50 € | **14.50 €** | 27.2 % | **36.6 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 11.50 € | **12.50 €** | 33.8 % | **45.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátorový vysávač ULTENIC U18 Pro | 137.00 € | **138.00 €** | 22.0 % | **22.9 %** | 138.42 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiová lampa GODOX ML40Bi | 104.00 € | **105.00 €** | 19.6 % | **20.8 %** | 105.42 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB4xyzf-CS 4-zónová indukčná varná doska | 136.00 € | **137.00 €** | 23.1 % | **24.0 %** | 137.42 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 107.00 € | **108.00 €** | 21.2 % | **22.3 %** | 108.50 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 57 | 134.00 € | **135.00 €** | 11.7 % | **12.6 %** | 135.50 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP400R RGB | 136.00 € | **137.00 €** | 24.1 % | **25.0 %** | 137.50 € | cena podľa najlacnejšieho iného predajcu |
| Metal Protective Cage With Lens Cover PULUZ for Inst... | 27.00 € | **28.00 €** | 31.7 % | **36.6 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 41.9 % | **45.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash K430 + 6 ventilátorov (č... | 66.00 € | **66.90 €** | 15.2 % | **16.8 %** | 66.92 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C100PRO (biela) | 72.00 € | **72.90 €** | 23.4 % | **25.0 %** | 72.92 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 2800mAh 22.2V 60C 6S1P Lipo Battery ... | 65.00 € | **65.90 €** | 46.3 % | **48.3 %** | 65.92 € | cena podľa najlacnejšieho iného predajcu |
| Filter 1-5 stop Freewell Sherpa True Color VND pre i... | 68.00 € | **68.90 €** | 13.6 % | **15.1 %** | 68.96 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – súprava „... | 90.00 € | **90.90 €** | 21.5 % | **22.8 %** | 90.96 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 148.00 € | **148.90 €** | 24.2 % | **24.9 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER CA077 Univerzálny držiak na fotoaparát | 86.00 € | **86.90 €** | 24.5 % | **25.8 %** | 87.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (čier... | 96.00 € | **96.90 €** | 16.2 % | **17.3 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 55.00 € | **55.90 €** | 26.7 % | **28.8 %** | 55.92 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar PCD-499 BT Discman CD/MP3 s BT | 46.00 € | **46.90 €** | 11.6 % | **13.8 %** | 46.92 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 23-60" Perlesmith PSTVMC06 | 51.00 € | **51.90 €** | 21.7 % | **23.9 %** | 51.92 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na televízor Perlgear PGLF8B-N1 | 44.00 € | **44.90 €** | 21.4 % | **23.9 %** | 44.92 € | cena podľa najlacnejšieho iného predajcu |
| Freewell set of 4 ND filters for DJI Osmo Action 5 Pro | 41.00 € | **41.90 €** | 13.3 % | **15.7 %** | 41.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M + 3 ventilátory (... | 41.00 € | **41.90 €** | 20.5 % | **23.1 %** | 41.92 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 38.00 € | **38.90 €** | 21.7 % | **24.6 %** | 38.92 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 59.00 € | **59.90 €** | 23.8 % | **25.6 %** | 59.92 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B31 (tmavomodrá) | 46.00 € | **46.90 €** | 21.0 % | **23.3 %** | 46.92 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT625B, USB | 43.00 € | **43.90 €** | 20.8 % | **23.3 %** | 43.96 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.00 € | **60.90 €** | 10.5 % | **12.1 %** | 60.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (čierna) + 6 venti... | 63.00 € | **63.90 €** | 18.3 % | **20.0 %** | 63.96 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 49.00 € | **49.90 €** | 14.9 % | **17.0 %** | 50.00 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 49.00 € | **49.90 €** | 14.9 % | **17.0 %** | 50.00 € | cena podľa najlacnejšieho iného predajcu |
| RivaCase 7567 batoh na notebook 17,3" | 52.00 € | **52.90 €** | 14.3 % | **16.2 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono M7 Max | 737.00 € | **737.90 €** | 19.5 % | **19.6 %** | 738.00 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 38.0 % | **41.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér OTG USB-C na Lightning Puluz PU649B | 3.10 € | **3.80 €** | 15.6 % | **41.7 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer CB300C RGB | 390.90 € | **391.50 €** | 20.2 % | **20.3 %** | 391.67 € | cena podľa najlacnejšieho iného predajcu |
| Termostat MOES ZHT-SR-GB s protokolom ZigBee pre ele... | 56.90 € | **57.50 €** | 21.3 % | **22.5 %** | 57.54 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife AQX-20 pre Mavic 4 PRO & RC 2 c | 57.90 € | **58.50 €** | 18.1 % | **19.4 %** | 58.54 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R20BT 2.0 (čierne) | 61.90 € | **62.50 €** | 45.0 % | **46.4 %** | 62.54 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 62.90 € | **63.50 €** | 66.3 % | **67.9 %** | 63.54 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash EMT850 (čierny) | 58.90 € | **59.50 €** | 15.4 % | **16.5 %** | 59.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pěnová stěrka na podlahy SOFT & | 11.90 € | **12.50 €** | 10.2 % | **15.7 %** | 12.55 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.65 € | cena podľa najlacnejšieho iného predajcu |
| Súprava StreetGrip Telesin GoPro Hero 9-13 s klietkou | 65.90 € | **66.50 €** | 21.3 % | **22.4 %** | 66.58 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Opal Titanium BS4950 | 79.90 € | **80.50 €** | 11.0 % | **11.9 %** | 80.60 € | cena podľa najlacnejšieho iného predajcu |
| Venta H13 & Anti-Formaldehyd set 2er VPE | 66.90 € | **67.50 €** | 11.0 % | **12.0 %** | 67.63 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 72.90 € | **73.50 €** | 13.3 % | **14.3 %** | 73.63 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER LED pásik – neónový RGB | 72.90 € | **73.50 €** | 24.6 % | **25.7 %** | 73.71 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač CE-ZM1902M-SV (strieborný) | 75.90 € | **76.50 €** | 21.9 % | **22.9 %** | 76.71 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418 PRO + 7 ventilátoro... | 78.90 € | **79.50 €** | 17.1 % | **18.0 %** | 79.71 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6750mAh 14.8V 60C 4S1P 14# XT90 Battery | 81.90 € | **82.50 €** | 23.7 % | **24.6 %** | 82.71 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na abdukciu bedra MERACH MR-2519BL1 | 82.90 € | **83.50 €** | 28.0 % | **29.0 %** | 83.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné závesné svetlo Yeelight Crystal | 89.90 € | **90.50 €** | 21.4 % | **22.2 %** | 90.83 € | cena podľa najlacnejšieho iného predajcu |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 92.90 € | **93.50 €** | 11.7 % | **12.5 %** | 93.83 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 70.90 € | **71.50 €** | 33.3 % | **34.5 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Colmi P81 Smartwatch (Gold) | 17.50 € | **18.00 €** | 17.4 % | **20.7 %** | 18.02 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.00 € | **11.50 €** | 13.6 % | **18.8 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Classic 200 Eas | 19.50 € | **20.00 €** | 13.3 % | **16.2 %** | 20.04 € | cena podľa najlacnejšieho iného predajcu |
| Venta Organic fragrance Peppermint | 16.00 € | **16.50 €** | 8.7 % | **12.1 %** | 16.54 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT122, bezkontaktný tester napätia / tester... | 14.00 € | **14.50 €** | 16.6 % | **20.8 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Detektor dymu a oxidu uhoľnatého Meross CS11-EU | 24.50 € | **25.00 €** | 22.4 % | **24.9 %** | 25.04 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 50.50 € | **51.00 €** | 26.4 % | **27.6 %** | 51.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná poistka s WIFI Avatto WCB16 | 15.00 € | **15.50 €** | 17.0 % | **20.9 %** | 15.54 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90502 French press Atria 800 ml | 11.00 € | **11.50 €** | 9.3 % | **14.3 %** | 11.54 € | cena podľa najlacnejšieho iného predajcu |
| TEESA AIR FRYER TSA8046W | 42.50 € | **43.00 €** | 6.0 % | **7.2 %** | 43.04 € | cena podľa najlacnejšieho iného predajcu |
| Zariadenie na zoštíhlenie tela ANLAN 02-AXTY31-02A | 46.00 € | **46.50 €** | 25.8 % | **27.2 %** | 46.54 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26380-70 | 40.50 € | **41.00 €** | 12.6 % | **14.0 %** | 41.04 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Daily PV1100C | 23.00 € | **23.50 €** | 8.9 % | **11.3 %** | 23.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/ND8/ND16/ND32 pre DJI Osmo ... | 28.50 € | **29.00 €** | 20.4 % | **22.5 %** | 29.04 € | cena podľa najlacnejšieho iného predajcu |
| Krytky objektívov Puluz pre kameru Insta360 X5 | 30.00 € | **30.50 €** | 13.4 % | **15.3 %** | 30.54 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-S26 4MP Wi-Fi IP kamera | 47.50 € | **48.00 €** | 19.3 % | **20.6 %** | 48.04 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 18.50 € | **19.00 €** | 6.3 % | **9.2 %** | 19.04 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 18.50 € | **19.00 €** | 19.6 % | **22.8 %** | 19.04 € | cena podľa najlacnejšieho iného predajcu |
| Kompletná sada príslušenstva PULUZ 45 v 1 PKT10 | 34.50 € | **35.00 €** | 6.9 % | **8.4 %** | 35.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.50 € | **17.00 €** | 10.0 % | **13.4 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 (čierna) | 31.00 € | **31.50 €** | 14.4 % | **16.2 %** | 31.54 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY Buds HT15 ANC (čierne) | 16.00 € | **16.50 €** | 17.6 % | **21.3 %** | 16.54 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 16.00 € | **16.50 €** | 17.6 % | **21.3 %** | 16.54 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA BT883 (biele) | 25.50 € | **26.00 €** | 24.2 % | **26.7 %** | 26.04 € | cena podľa najlacnejšieho iného predajcu |
| RGB LED lampa NEEWER RGB61 | 25.50 € | **26.00 €** | 20.1 % | **22.5 %** | 26.04 € | cena podľa najlacnejšieho iného predajcu |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 31.00 € | **31.50 €** | 12.8 % | **14.6 %** | 31.54 € | cena podľa najlacnejšieho iného predajcu |
| GameSir G7 HE wired controller (black) | 42.50 € | **43.00 €** | 13.8 % | **15.1 %** | 43.04 € | cena podľa najlacnejšieho iného predajcu |
| PETKIT PURA MAX 2 Krmivo pre mačky | 25.00 € | **25.50 €** | 21.9 % | **24.3 %** | 25.54 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire L6-H – 750 lm, 15W, USB-C, 5 režimov | 18.00 € | **18.50 €** | 15.0 % | **18.2 %** | 18.54 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire TL01-X | 17.50 € | **18.00 €** | 14.7 % | **18.0 %** | 18.04 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná baterka SUPERFIRE D30 | 19.50 € | **20.00 €** | 15.0 % | **18.0 %** | 20.04 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT333BT Mini merač teploty a vlhkosti | 25.50 € | **26.00 €** | 13.4 % | **15.6 %** | 26.08 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku FNIRSI FDM-02 | 29.00 € | **29.50 €** | 6.5 % | **8.4 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| MOES WHT-006-GB-WH Wi-Fi termostat pre elektrické kú... | 34.00 € | **34.50 €** | 20.5 % | **22.3 %** | 34.58 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF10-B | 13.00 € | **13.50 €** | 15.0 % | **19.4 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit 61521kuchyňská váha Page | 22.00 € | **22.50 €** | 9.3 % | **11.8 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| FINUM 1760006 Dvojice mlýnků na sůl/koře | 42.50 € | **43.00 €** | 13.0 % | **14.4 %** | 43.08 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 137 | 33.00 € | **33.50 €** | 10.9 % | **12.6 %** | 33.58 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P204FER250 | 20.50 € | **21.00 €** | 8.7 % | **11.4 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (červený) | 22.00 € | **22.50 €** | 22.2 % | **25.0 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (čierny) | 22.00 € | **22.50 €** | 22.2 % | **25.0 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (oranžový) | 22.00 € | **22.50 €** | 22.2 % | **25.0 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (ružový) | 22.00 € | **22.50 €** | 22.2 % | **25.0 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 8x42 monokulárny | 24.50 € | **25.00 €** | 13.6 % | **15.9 %** | 25.08 € | cena podľa najlacnejšieho iného predajcu |
| Adapter 10in1 HUB Blitzwolf BW-NEW TH8 | 38.50 € | **39.00 €** | 18.3 % | **19.9 %** | 39.08 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 86 mm | 23.50 € | **24.00 €** | 10.9 % | **13.2 %** | 24.08 € | cena podľa najlacnejšieho iného predajcu |
| Adaptérny krúžok Freewell Brandon Li 95 mm | 23.50 € | **24.00 €** | 10.9 % | **13.2 %** | 24.08 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický otočný stojan Puluz 30 cm USB (čierny) | 32.50 € | **33.00 €** | 15.5 % | **17.3 %** | 33.08 € | cena podľa najlacnejšieho iného predajcu |
| Magnetická rukoväť MagSafe Fun Shot Grip2 (biela) | 22.00 € | **22.50 €** | 19.5 % | **22.2 %** | 22.58 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak PULUZ pre Insta360 GO Ultra (čierny) | 13.00 € | **13.50 €** | 11.4 % | **15.7 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT603 (čierna) | 34.00 € | **34.50 €** | 22.0 % | **23.8 %** | 34.58 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 31.00 € | **31.50 €** | 5.9 % | **7.6 %** | 31.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) | 44.50 € | **45.00 €** | 18.0 % | **19.3 %** | 45.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 (biela) | 32.50 € | **33.00 €** | 15.0 % | **16.8 %** | 33.08 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife ZJ153 Nákupná taška | 13.00 € | **13.50 €** | 16.5 % | **21.0 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát v mobile PGY LinkGo (ružový) | 26.00 € | **26.50 €** | 24.4 % | **26.8 %** | 26.58 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 45.00 € | **45.50 €** | 12.0 % | **13.2 %** | 45.58 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Earphones Urban 1 Bluetooth earphones,... | 26.00 € | **26.50 €** | 20.1 % | **22.4 %** | 26.58 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X31 | 13.00 € | **13.50 €** | 22.3 % | **27.0 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife ZJ153 Nákupná taška | 13.00 € | **13.50 €** | 16.5 % | **21.0 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 49.00 € | **49.50 €** | 11.2 % | **12.4 %** | 49.58 € | cena podľa najlacnejšieho iného predajcu |
| Fleg Helikoptéra na dálkové ovládání | 24.00 € | **24.50 €** | 12.3 % | **14.7 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Fontána pre zvieratá / napájačka 1,5 l Rojeco | 17.00 € | **17.50 €** | 19.0 % | **22.5 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 44.50 € | **45.00 €** | 21.2 % | **22.5 %** | 45.08 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 77.00 € | **77.50 €** | 16.1 % | **16.9 %** | 77.59 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.00 € | **181.50 €** | 24.8 % | **25.2 %** | 181.59 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 181.00 € | **181.50 €** | 11.2 % | **11.5 %** | 181.59 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.00 € | **168.50 €** | 32.9 % | **33.3 %** | 168.59 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S30 nabíjacia stanica 6 v 1 4xUSB-C + 2... | 40.00 € | **40.50 €** | 20.3 % | **21.8 %** | 40.63 € | cena podľa najlacnejšieho iného predajcu |
| Coox SPRING forma 26 cm se skleněnou zák | 21.00 € | **21.50 €** | 13.1 % | **15.8 %** | 21.63 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3008B | 48.50 € | **49.00 €** | 10.9 % | **12.0 %** | 49.13 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.00 € | **22.50 €** | 14.1 % | **16.7 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT692G tester optických vlákien | 34.00 € | **34.50 €** | 15.4 % | **17.1 %** | 34.63 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec 6600 Turbo Convection Plus | 46.50 € | **47.00 €** | 21.2 % | **22.6 %** | 47.13 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BC261 | 29.50 € | **30.00 €** | 7.2 % | **9.0 %** | 30.13 € | cena podľa najlacnejšieho iného predajcu |
| Zacvakávacia doska PGYTECH Arcs-Swiss (P-CG-013) | 12.00 € | **12.50 €** | 18.3 % | **23.2 %** | 12.63 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 45.50 € | **46.00 €** | 15.3 % | **16.6 %** | 46.13 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 19,1MM 9 (čierny) | 31.50 € | **32.00 €** | 21.9 % | **23.8 %** | 32.13 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 10 (čierny) | 36.50 € | **37.00 €** | 22.9 % | **24.6 %** | 37.13 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 11 (čierny) | 36.50 € | **37.00 €** | 22.9 % | **24.6 %** | 37.13 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 12 (čierny) | 36.50 € | **37.00 €** | 22.9 % | **24.6 %** | 37.13 € | cena podľa najlacnejšieho iného predajcu |
| COLMI RING 2 – mazaný krúžok, veľkosť 9 (čierny) | 36.50 € | **37.00 €** | 22.9 % | **24.6 %** | 37.13 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-Q29 8MP Wi-Fi IP kamera s dvoma objektívmi | 43.50 € | **44.00 €** | 18.6 % | **20.0 %** | 44.13 € | cena podľa najlacnejšieho iného predajcu |
| MOES ZS-B-EU1 ZigBee 1-kanálový vypínač osvetlenia | 17.00 € | **17.50 €** | 18.2 % | **21.7 %** | 17.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 23.00 € | **23.50 €** | 14.7 % | **17.2 %** | 23.63 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Joyroom JR-PB2 (biele) | 16.00 € | **16.50 €** | 18.1 % | **21.8 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 28.00 € | **28.50 €** | 24.7 % | **27.0 %** | 28.63 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAT20000PK Bezdrátová sluchátka | 32.50 € | **33.00 €** | 13.3 % | **15.0 %** | 33.13 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 3300mAh 11.1V 30C 3S1P Lipo ... | 35.50 € | **36.00 €** | 27.7 % | **29.5 %** | 36.13 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 11.1V 3S1P 60C HardCase 15# ... | 51.50 € | **52.00 €** | 46.0 % | **47.5 %** | 52.13 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná nabíjačka SkyRC B6neo+ | 35.50 € | **36.00 €** | 22.1 % | **23.9 %** | 36.13 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer NutriSpin | 48.50 € | **49.00 €** | 19.1 % | **20.3 %** | 49.13 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 4,5 l automatické krmítko pre zvieratá WiFi v... | 45.50 € | **46.00 €** | 22.7 % | **24.0 %** | 46.13 € | cena podľa najlacnejšieho iného predajcu |
| Kryt na toaletu pre mačky Petkit Hood | 32.50 € | **33.00 €** | 21.3 % | **23.2 %** | 33.13 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, červená | 26.00 € | **26.50 €** | 13.6 % | **15.8 %** | 26.67 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, modrá | 26.00 € | **26.50 €** | 13.6 % | **15.8 %** | 26.67 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma SPRING průměr 26 cm, modrá | 26.00 € | **26.50 €** | 13.6 % | **15.8 %** | 26.67 € | cena podľa najlacnejšieho iného predajcu |
| WESTMARK 2094 2611 Nůžky na salát, 8 ks | 44.50 € | **45.00 €** | 12.9 % | **14.2 %** | 45.17 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight C2201C300 | 47.50 € | **48.00 €** | 20.8 % | **22.0 %** | 48.17 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer FNIRSI FAM-02 | 25.00 € | **25.50 €** | 6.6 % | **8.7 %** | 25.67 € | cena podľa najlacnejšieho iného predajcu |
| VENTAcel Filter 1 pack | 28.50 € | **29.00 €** | 9.7 % | **11.6 %** | 29.17 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 – vysokovýkonný filter | 41.50 € | **42.00 €** | 22.1 % | **23.6 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na úpravu vlasov ANLAN Miracle | 63.00 € | **63.50 €** | 22.9 % | **23.8 %** | 63.67 € | cena podľa najlacnejšieho iného predajcu |
| Masážní přístroj šíje a zad, REBEL ACTIVE RBA-6005 | 39.00 € | **39.50 €** | 28.0 % | **29.6 %** | 39.67 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Rouge BP3443 | 31.50 € | **32.00 €** | 9.3 % | **11.1 %** | 32.17 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 bílá | 32.50 € | **33.00 €** | 12.1 % | **13.8 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Isabel B-4426 nerez | 32.50 € | **33.00 €** | 11.4 % | **13.2 %** | 33.17 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FVB015X | 18.00 € | **18.50 €** | 8.3 % | **11.3 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| Nástenné držiaky na TV Perlegear PGMFK6 26-60" | 19.00 € | **19.50 €** | 19.8 % | **23.0 %** | 19.67 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov Sunnylife CPL + ND8 + ND16 pre Osmo Nano | 16.00 € | **16.50 €** | 17.1 % | **20.7 %** | 16.67 € | cena podľa najlacnejšieho iného predajcu |
| Súprava filtrov Telesin CPL/ND8/ND16/ND32 pre Insta3... | 33.50 € | **34.00 €** | 20.1 % | **21.9 %** | 34.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 24.00 € | **24.50 €** | 8.2 % | **10.5 %** | 24.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 20.3MM 11 (black) | 28.00 € | **28.50 €** | 23.2 % | **25.4 %** | 28.67 € | cena podľa najlacnejšieho iného predajcu |
| MOES WCM-P67 3MP Wi-Fi IP kamera | 20.00 € | **20.50 €** | 17.1 % | **20.1 %** | 20.67 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM07 RGB (čierna) | 25.00 € | **25.50 €** | 24.8 % | **27.3 %** | 25.67 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MSS815MAQUA-UN – 4-dielna sada inteligentných... | 52.00 € | **52.50 €** | 25.2 % | **26.4 %** | 52.67 € | cena podľa najlacnejšieho iného predajcu |
| MOES WC-YH-LS Motor na rolety s Wi-Fi | 57.00 € | **57.50 €** | 17.0 % | **18.0 %** | 57.67 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD (čierna) + 4 ven... | 65.00 € | **65.50 €** | 16.6 % | **17.5 %** | 65.67 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 75 mm adaptér z plochého na guľatý pre fluidnú... | 25.00 € | **25.50 €** | 5.0 % | **7.1 %** | 25.67 € | cena podľa najlacnejšieho iného predajcu |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.00 € | **41.50 €** | 12.0 % | **13.3 %** | 41.67 € | cena podľa najlacnejšieho iného predajcu |
| Twarde etui Sunnylife do Neo 2 Motion Fly More Combo | 55.00 € | **55.50 €** | 17.9 % | **19.0 %** | 55.67 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT826 (čierne) | 28.50 € | **29.00 €** | 23.1 % | **25.3 %** | 29.17 € | cena podľa najlacnejšieho iného predajcu |
| GODOX DPU-130T difúzna tkanina pre dáždnik s priemer... | 19.00 € | **19.50 €** | 21.9 % | **25.1 %** | 19.67 € | cena podľa najlacnejšieho iného predajcu |
| Stolný statív Puluz PU3070GT | 40.50 € | **41.00 €** | 5.9 % | **7.3 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer MS60C RGB | 172.50 € | **173.00 €** | 20.3 % | **20.6 %** | 173.17 € | cena podľa najlacnejšieho iného predajcu |
| Programovacia doska xTool mTiny | 39.50 € | **40.00 €** | 22.2 % | **23.7 %** | 40.17 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6AC V2 | 55.50 € | **56.00 €** | 22.1 % | **23.1 %** | 56.17 € | cena podľa najlacnejšieho iného predajcu |
| Súprava strojčekov na strihanie domácich zvierat One... | 43.50 € | **44.00 €** | 27.0 % | **28.5 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu |
| Baterka SUPERFIRE F1-S | 13.00 € | **13.50 €** | 12.8 % | **17.1 %** | 13.67 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 89.00 € | **89.50 €** | 6.4 % | **7.0 %** | 89.69 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC025X | 26.00 € | **26.50 €** | 11.1 % | **13.3 %** | 26.71 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver FFC026X | 41.50 € | **42.00 €** | 12.3 % | **13.6 %** | 42.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 53.50 € | **54.00 €** | 14.0 % | **15.1 %** | 54.21 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNCM2 monitor mount 13-32" | 34.00 € | **34.50 €** | 22.9 % | **24.7 %** | 34.71 € | cena podľa najlacnejšieho iného predajcu |
| Huanuo HNDS8 double monitor mount 13-32" | 61.00 € | **61.50 €** | 24.1 % | **25.1 %** | 61.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 40.50 € | **41.00 €** | 11.4 % | **12.8 %** | 41.21 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-65 65W Power De... | 21.00 € | **21.50 €** | 8.7 % | **11.3 %** | 21.71 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100W (čierny) | 48.00 € | **48.50 €** | 24.8 % | **26.1 %** | 48.71 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Phone Cage PGY ProShot pre iPhone 17 Pro Max | 67.00 € | **67.50 €** | 25.1 % | **26.0 %** | 67.71 € | cena podľa najlacnejšieho iného predajcu |
| Rixon UltraPods | 45.50 € | **46.00 €** | 13.5 % | **14.8 %** | 46.21 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 49.00 € | **49.50 €** | 23.9 % | **25.1 %** | 49.71 € | cena podľa najlacnejšieho iného predajcu |
| Fotografická taška cez rameno PGYTECH OneGo Pocket S... | 36.50 € | **37.00 €** | 23.0 % | **24.7 %** | 37.21 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo Xany 2B, aktivní pokojová anténa | 15.50 € | **16.00 €** | 8.7 % | **12.2 %** | 16.21 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C950 4K | 29.00 € | **29.50 €** | 21.2 % | **23.3 %** | 29.71 € | cena podľa najlacnejšieho iného predajcu |
| Tattu R-Line verzia 5.0 850 mAh 14,8 V 4S1P 150C XT3... | 20.00 € | **20.50 €** | 27.4 % | **30.6 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 45.00 € | **45.50 €** | 9.7 % | **10.9 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto Lamborghini Huracán | 30.00 € | **30.50 €** | 12.4 % | **14.3 %** | 30.71 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2416B1 Tréningový stroj na lyžovanie | 61.00 € | **61.50 €** | 23.7 % | **24.7 %** | 61.71 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 75.00 € | **75.50 €** | 11.2 % | **11.9 %** | 75.72 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 467.50 € | **468.00 €** | 11.6 % | **11.7 %** | 468.22 € | cena podľa najlacnejšieho iného predajcu |
| Drosselmeyer TIBP01G | 36.00 € | **36.50 €** | 14.1 % | **15.6 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT Nočné svetlo D1 Matter Smart na nočný stolík | 61.50 € | **62.00 €** | 19.4 % | **20.4 %** | 62.25 € | cena podľa najlacnejšieho iného predajcu |
| Merač elektromagnetického poľa Habotest HT627 | 40.00 € | **40.50 €** | 14.0 % | **15.4 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT118E Univerzálny digitálny multimeter Tru... | 38.50 € | **39.00 €** | 15.2 % | **16.7 %** | 39.25 € | cena podľa najlacnejšieho iného predajcu |
| Gumová kefa ROMO | 23.00 € | **23.50 €** | 24.7 % | **27.4 %** | 23.75 € | cena podľa najlacnejšieho iného predajcu |
| Ionizačná kefa na úpravu vlasov ANLAN 05-AZFS41-02A | 35.00 € | **35.50 €** | 22.2 % | **24.0 %** | 35.75 € | cena podľa najlacnejšieho iného predajcu |
| Nástenné držiaky na TV Perlesmith PSPILFK1 | 34.00 € | **34.50 €** | 20.9 % | **22.7 %** | 34.75 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 62.00 € | **62.50 €** | 12.1 % | **13.0 %** | 62.75 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-PA0007 Pozadie | 42.50 € | **43.00 €** | 24.3 % | **25.8 %** | 43.25 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0007 Pozadie | 42.50 € | **43.00 €** | 24.3 % | **25.8 %** | 43.25 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TB0002 Pozadie | 42.50 € | **43.00 €** | 24.3 % | **25.8 %** | 43.25 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 40.00 € | **40.50 €** | 8.3 % | **9.7 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Rixon QuikBuds | 24.00 € | **24.50 €** | 11.8 % | **14.1 %** | 24.75 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAK4200CT  bezdrátová sluchátka | 39.00 € | **39.50 €** | 13.3 % | **14.8 %** | 39.75 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie NEEWER BASICS VL67B | 35.50 € | **36.00 €** | 20.6 % | **22.3 %** | 36.25 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Rozšiřující set 3 | 54.00 € | **54.50 €** | 126.4 % | **128.5 %** | 54.75 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 100 | 29.00 € | **29.50 €** | 9.4 % | **11.3 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3002G | 75.00 € | **75.50 €** | 11.1 % | **11.9 %** | 75.79 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Discovery Gator 10x50 | 47.50 € | **48.00 €** | 13.1 % | **14.3 %** | 48.29 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj univerzální Kruger&Matz KM1450-90 90W Power De... | 27.00 € | **27.50 €** | 33.4 % | **35.9 %** | 27.79 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové slúchadlá Maono AU-MH601 | 36.00 € | **36.50 €** | 23.3 % | **25.0 %** | 36.79 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa Neewer RGB168, 60 W, 2500–8500 K | 142.50 € | **143.00 €** | 17.8 % | **18.2 %** | 143.29 € | cena podľa najlacnejšieho iného predajcu |
| Počítačové ventilátory Darkflash Gauss G24 3 v 1 (bi... | 34.00 € | **34.50 €** | 18.8 % | **20.6 %** | 34.79 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam C60E 4K duálna webová kamera | 57.00 € | **57.50 €** | 21.8 % | **22.9 %** | 57.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava plynového pedála a spojky MOZA SRP Lite2 Per... | 41.50 € | **42.00 €** | 17.6 % | **19.1 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitý inteligentný dávkovač krmiva 5 l Oneisall PF10 | 68.50 € | **69.00 €** | 23.0 % | **23.9 %** | 69.29 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L WiFi verzia Bl Automatický dávkovač krmiva | 38.00 € | **38.50 €** | 23.4 % | **25.1 %** | 38.79 € | cena podľa najlacnejšieho iného predajcu |
| Water Fountain for pets 3.2l Rojeco | 31.00 € | **31.50 €** | 24.0 % | **26.0 %** | 31.79 € | cena podľa najlacnejšieho iného predajcu |
| KOMA HPU1 - Univerzální hubice | 12.00 € | **12.50 €** | 10.2 % | **14.8 %** | 12.80 € | cena podľa najlacnejšieho iného predajcu |
| ETA Moneto II 4453 90000 | 87.00 € | **87.50 €** | 5.6 % | **6.2 %** | 87.80 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 011 | 61.50 € | **62.00 €** | 15.2 % | **16.2 %** | 62.33 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma G83 (čierna) | 49.00 € | **49.50 €** | 21.6 % | **22.8 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| PBT Keycap + Cable Set - Black - US/UK | 68.00 € | **68.50 €** | 13.1 % | **14.0 %** | 68.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) + 7 ventilá... | 70.00 € | **70.50 €** | 16.0 % | **16.9 %** | 70.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (biela) | 48.50 € | **49.00 €** | 15.5 % | **16.7 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DPX90 (čierna) + 3 venti... | 57.50 € | **58.00 €** | 17.4 % | **18.4 %** | 58.33 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BB (modrý) | 31.00 € | **31.50 €** | 21.1 % | **23.1 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BG (zelený) | 31.00 € | **31.50 €** | 21.1 % | **23.1 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Fifine K669BS (strieborný) | 31.00 € | **31.50 €** | 21.1 % | **23.1 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro na iPhone Puluz (40 m) s jednosmern... | 52.00 € | **52.50 €** | 8.2 % | **9.2 %** | 52.83 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TL98C DMX LED svetelná tyč | 51.50 € | **52.00 €** | 23.7 % | **24.9 %** | 52.33 € | cena podľa najlacnejšieho iného predajcu |
| Reflektor GODOX RFT-25S | 75.00 € | **75.50 €** | 23.8 % | **24.7 %** | 75.83 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 46.50 € | **47.00 €** | 18.0 % | **19.3 %** | 47.33 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall X2 + N5 sada na strihanie domácich zvierat | 44.50 € | **45.00 €** | 26.1 % | **27.5 %** | 45.33 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS4 štartér do auta | 83.50 € | **84.00 €** | 24.1 % | **24.8 %** | 84.38 € | cena podľa najlacnejšieho iného predajcu |
| LED pásik YEELIGHT Obsid RGBIC YLFWD-0025 | 52.50 € | **53.00 €** | 18.9 % | **20.1 %** | 53.38 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXMC400E | 82.50 € | **83.00 €** | 41.8 % | **42.7 %** | 83.38 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro – štandardná sada | 65.50 € | **66.00 €** | 21.2 % | **22.1 %** | 66.38 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Master Grip pre iPhone 17 Pro Max – Powerbanka | 65.50 € | **66.00 €** | 21.1 % | **22.0 %** | 66.38 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V35 s Dynamický mikrofon | 57.00 € | **57.50 €** | 33.8 % | **35.0 %** | 57.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 PRO (čierna) + 6 ve... | 47.00 € | **47.50 €** | 15.1 % | **16.3 %** | 47.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (biela) | 64.50 € | **65.00 €** | 19.3 % | **20.3 %** | 65.38 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100WS (čierny) | 56.50 € | **57.00 €** | 25.3 % | **26.4 %** | 57.38 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 42.00 € | **42.50 €** | 11.6 % | **12.9 %** | 42.88 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 65.00 € | **65.50 €** | 11.1 % | **12.0 %** | 65.88 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Short-Size Li... | 58.50 € | **59.00 €** | 27.0 % | **28.1 %** | 59.38 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 3L automatický dávkovač krmiva v tlačidlovej ... | 34.00 € | **34.50 €** | 17.0 % | **18.8 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire TF02 | 67.00 € | **67.50 €** | 20.7 % | **21.6 %** | 67.88 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 35.00 € | **35.50 €** | 19.0 % | **20.7 %** | 35.88 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 273.50 € | **274.00 €** | 31.6 % | **31.8 %** | 274.39 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 273.50 € | **274.00 €** | 28.4 % | **28.7 %** | 274.39 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW402HE0 | 129.00 € | **129.50 €** | 9.7 % | **10.2 %** | 129.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C500. | 72.50 € | **73.00 €** | 27.5 % | **28.4 %** | 73.42 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ledu TEESA EASY ICE TSA5009 | 70.50 € | **71.00 €** | 7.7 % | **8.5 %** | 71.42 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT520III TTL | 65.50 € | **66.00 €** | 20.7 % | **21.6 %** | 66.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 75.50 € | **76.00 €** | 16.5 % | **17.2 %** | 76.42 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD100SX | 404.50 € | **405.00 €** | 6.8 % | **6.9 %** | 405.43 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT262E – bezkontaktný detektor poradia fáz | 89.50 € | **90.00 €** | 16.2 % | **16.8 %** | 90.46 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 51.50 € | **52.00 €** | 5.0 % | **6.1 %** | 52.46 € | cena podľa najlacnejšieho iného predajcu |
| Kaderník 4 v 1 ANLAN 05-ACFS41-02E | 78.50 € | **79.00 €** | 21.6 % | **22.3 %** | 79.46 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2119 PRO na ovládanie letu | 77.50 € | **78.00 €** | 14.5 % | **15.3 %** | 78.46 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 78.50 € | **79.00 €** | 22.7 % | **23.4 %** | 79.46 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 19.50 € | **20.00 €** | 11.1 % | **13.9 %** | 20.49 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 103.50 € | **104.00 €** | 9.6 % | **10.1 %** | 104.49 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **65.00 €** | 8.7 % | **9.5 %** | 65.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **65.00 €** | 14.7 % | **15.6 %** | 65.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 81.50 € | **82.00 €** | 21.3 % | **22.1 %** | 82.50 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFGV8080 Softbox | 61.50 € | **62.00 €** | 23.2 % | **24.2 %** | 62.50 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 275.50 € | **276.00 €** | 29.4 % | **29.6 %** | 276.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **105.00 €** | 35.1 % | **35.7 %** | 105.17 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM9802B | 128.50 € | **128.90 €** | 9.0 % | **9.3 %** | 128.97 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-002-33 Reflexný dáždnik | 12.50 € | **12.90 €** | 23.3 % | **27.3 %** | 12.92 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová herná myš Onikuma CW905 (čierna) | 11.50 € | **11.90 €** | 5.8 % | **9.4 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Trojkanálová nabíjačka batérií pre GoPro Hero 13 Bla... | 12.50 € | **12.90 €** | 18.3 % | **22.1 %** | 12.92 € | cena podľa najlacnejšieho iného predajcu |
| Úložná taška Telesin EVA pre DJI Action 3/4/5 (veľko... | 12.50 € | **12.90 €** | 18.0 % | **21.8 %** | 12.92 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW953 (čierna) | 13.50 € | **13.90 €** | 20.7 % | **24.3 %** | 13.96 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno ELEGOO ASA (čierne) | 11.50 € | **11.90 €** | 17.8 % | **21.8 %** | 11.96 € | cena podľa najlacnejšieho iného predajcu |
| San Marco INTENSO 500 g | 11.50 € | **11.90 €** | 6.1 % | **9.8 %** | 11.96 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.50 € | **15.90 €** | 7.8 % | **10.6 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Laica VT3514 | 4.40 € | **4.80 €** | 11.1 % | **21.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2023F0 | 36.50 € | **36.90 €** | 11.5 % | **12.7 %** | 36.92 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Rony B-4777 červená | 23.50 € | **23.90 €** | 11.5 % | **13.4 %** | 23.92 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa GlidePro PV2600 | 26.50 € | **26.90 €** | 9.9 % | **11.5 %** | 26.92 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkové ovládanie PGYTECH MANTIS RC M1 pre digitáln... | 17.50 € | **17.90 €** | 22.7 % | **25.5 %** | 17.92 € | cena podľa najlacnejšieho iného predajcu |
| Upevnenie príslušenstva PGYTECH Magic Arm (P-CG-009)... | 18.50 € | **18.90 €** | 18.6 % | **21.2 %** | 18.92 € | cena podľa najlacnejšieho iného predajcu |
| PULUZ PU3223B Držiak na telefón čierny | 18.50 € | **18.90 €** | 18.6 % | **21.2 %** | 18.92 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND64/PL | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell p... | 16.50 € | **16.90 €** | 9.2 % | **11.8 %** | 16.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna laserová vodováha - zelený laser | 37.50 € | **37.90 €** | 30.3 % | **31.7 %** | 37.95 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 30cm WiFi/Bluetooth 16M RGBCW Gos... | 22.50 € | **22.90 €** | 20.0 % | **22.2 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Neweer SP-02 rýchloupínací adaptér pre telefón Arca | 22.50 € | **22.90 €** | 25.7 % | **28.0 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 22,4MM 13 (čierny) | 32.50 € | **32.90 €** | 22.2 % | **23.7 %** | 32.96 € | cena podľa najlacnejšieho iného predajcu |
| PXN Z D1 Rukoväť ručnej brzdy | 24.50 € | **24.90 €** | 9.1 % | **10.9 %** | 24.96 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 14,8V 30C 4S1P LiPo ... | 38.50 € | **38.90 €** | 39.7 % | **41.1 %** | 38.96 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač Rojeco 3L WiFi verzia Smart Feed (biely) | 38.50 € | **38.90 €** | 19.6 % | **20.8 %** | 38.96 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SA-30 Softbox, 30x30 cm | 19.50 € | **19.90 €** | 22.9 % | **25.4 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 42.50 € | **42.90 €** | 11.7 % | **12.8 %** | 42.99 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná detská váha Grownsy B12H | 28.50 € | **28.90 €** | 21.8 % | **23.5 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Kery B-4660 400W bílý | 35.50 € | **35.90 €** | 10.9 % | **12.2 %** | 36.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 37.50 € | **37.90 €** | 24.1 % | **25.5 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| GameSir X5 Lite BK – mobilný herný ovládač USB-C, či... | 24.50 € | **24.90 €** | 10.8 % | **12.7 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **21.90 €** | 7.7 % | **9.7 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Guma posilovací REBEL ACTIVE RBA-3000-S4 Latexová sa... | 27.50 € | **27.90 €** | 90.3 % | **93.0 %** | 28.00 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.50 € | **369.90 €** | 7.0 % | **7.1 %** | 370.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 8.80 € | **9.00 €** | 38.9 % | **42.1 %** | 9.02 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC e3S 2S/3S | 16.90 € | **17.00 €** | 22.3 % | **23.1 %** | 17.08 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 28.90 € | **29.00 €** | 18.7 % | **19.1 %** | 29.09 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 28.90 € | **29.00 €** | 18.7 % | **19.1 %** | 29.09 € | cena podľa najlacnejšieho iného predajcu |
| TWS Choetech BH-T17 ANC+ENC Wireless Headphones (black) | 19.90 € | **20.00 €** | 21.6 % | **22.2 %** | 20.13 € | cena podľa najlacnejšieho iného predajcu |
| Reflektor GODOX RFT-4 | 18.90 € | **19.00 €** | 23.5 % | **24.2 %** | 19.13 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFUV6060 Softbox, 60x60 cm | 46.90 € | **47.00 €** | 24.1 % | **24.4 %** | 47.15 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2016100 EQUA Kuchyňská váha | 18.90 € | **19.00 €** | 7.6 % | **8.2 %** | 19.17 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-BP654 | 26.90 € | **27.00 €** | 11.4 % | **11.8 %** | 27.17 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri SUSHEZI | 23.90 € | **24.00 €** | 11.9 % | **12.3 %** | 24.17 € | cena podľa najlacnejšieho iného predajcu |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 17.90 € | **18.00 €** | 10.6 % | **11.2 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell O... | 17.90 € | **18.00 €** | 10.6 % | **11.2 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Hliníkový držiak Sunnylife pre Insta360 X5/X4 | 16.90 € | **17.00 €** | 20.8 % | **21.6 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| MOES WV-LZ-BK Wi-Fi vodovodný ventil (čierny) | 19.90 € | **20.00 €** | 17.5 % | **18.1 %** | 20.17 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický nabíjací adaptér Telesin s krytom pre GoP... | 17.90 € | **18.00 €** | 20.6 % | **21.2 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X80 | 16.90 € | **17.00 €** | 25.4 % | **26.1 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 25C 1500mAh 3S1P 11.1V Airsoft Gun Lipo Bat... | 20.90 € | **21.00 €** | 5.5 % | **6.0 %** | 21.17 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 50.90 € | **51.00 €** | 13.4 % | **13.7 %** | 51.19 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 50.90 € | **51.00 €** | 36.6 % | **36.8 %** | 51.19 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara fialová | 36.90 € | **37.00 €** | 13.5 % | **13.8 %** | 37.20 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara modrá | 36.90 € | **37.00 €** | 13.5 % | **13.8 %** | 37.20 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter True RMS Habotest H... | 26.90 € | **27.00 €** | 16.3 % | **16.8 %** | 27.21 € | cena podľa najlacnejšieho iného predajcu |
| MENALUX CB104B | 20.90 € | **21.00 €** | 12.4 % | **12.9 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický držiak MagSafe Fun Shot Grip2 (čierny) | 21.90 € | **22.00 €** | 21.0 % | **21.6 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica ONIKUMA MT501 (biela) | 28.90 € | **29.00 €** | 25.4 % | **25.8 %** | 29.21 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón ONIKUMA M-730 (čierny) | 25.90 € | **26.00 €** | 22.9 % | **23.3 %** | 26.21 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (biela) | 20.90 € | **21.00 €** | 25.9 % | **26.5 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM01 (čierna) | 20.90 € | **21.00 €** | 25.9 % | **26.5 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA DM03 RGB (čierna) | 20.90 € | **21.00 €** | 27.1 % | **27.7 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W1 | 21.90 € | **22.00 €** | 22.7 % | **23.3 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| Powerbank BlitzWolf BW-P22 20000 mAh, 22,5 W | 27.90 € | **28.00 €** | 21.6 % | **22.0 %** | 28.21 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (biela) | 19.90 € | **20.00 €** | 19.3 % | **19.9 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (čierna) | 19.90 € | **20.00 €** | 19.3 % | **19.9 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Živica Anycubic ABS-Like 3.0 (sivá) | 19.90 € | **20.00 €** | 19.3 % | **19.9 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky C50i (biele) | 30.90 € | **31.00 €** | 24.7 % | **25.1 %** | 31.21 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50i (sivé) | 30.90 € | **31.00 €** | 24.7 % | **25.1 %** | 31.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA K10 (čierne) | 19.90 € | **20.00 €** | 38.6 % | **39.3 %** | 20.23 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT126A Digitálny univerzálny multimeter | 26.90 € | **27.00 €** | 18.8 % | **19.2 %** | 27.25 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio NP-FV100 vrátane info chipu pre Sony | 28.90 € | **29.00 €** | 14.6 % | **15.0 %** | 29.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtová myš ONIKUMA DM09 (čierna) | 27.90 € | **28.00 €** | 25.6 % | **26.0 %** | 28.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W2 | 24.90 € | **25.00 €** | 23.8 % | **24.3 %** | 25.25 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT806 (čierne) | 25.90 € | **26.00 €** | 24.9 % | **25.4 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT806 (biele) | 25.90 € | **26.00 €** | 24.9 % | **25.4 %** | 26.25 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam Nova | 24.90 € | **25.00 €** | 21.7 % | **22.2 %** | 25.25 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.29 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot SCV400RD | 51.90 € | **52.00 €** | 10.1 % | **10.3 %** | 52.32 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 44.90 € | **45.00 €** | 11.7 % | **12.0 %** | 45.33 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Ruby Red BS4717 | 39.90 € | **40.00 €** | 10.4 % | **10.7 %** | 40.38 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4813 Žehlička SERENA červená | 45.90 € | **46.00 €** | 11.2 % | **11.5 %** | 46.38 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-TA0016 Skladacie pozadie | 42.90 € | **43.00 €** | 24.5 % | **24.8 %** | 43.38 € | cena podľa najlacnejšieho iného predajcu |
| Držiak batérie SJCAM pre model C300 | 38.90 € | **39.00 €** | 23.9 % | **24.2 %** | 39.38 € | cena podľa najlacnejšieho iného predajcu |
| Euti Freewell pre Iphone 15 PRO s držiakom 17 mm | 42.90 € | **43.00 €** | 16.4 % | **16.6 %** | 43.38 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Samsung S25 Ultra so 17 mm držiakom | 42.90 € | **43.00 €** | 8.0 % | **8.3 %** | 43.38 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS200 PRO TB2 PRO TOPUMP – mini pumpa na bic... | 48.90 € | **49.00 €** | 24.8 % | **25.0 %** | 49.38 € | cena podľa najlacnejšieho iného predajcu |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **48.00 €** | 11.0 % | **11.3 %** | 48.42 € | cena podľa najlacnejšieho iného predajcu |
| Beper 50451 Tyčový Vakuový Vysavač S He | 51.90 € | **52.00 €** | 11.4 % | **11.6 %** | 52.42 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 51.90 € | **52.00 €** | 25.0 % | **25.2 %** | 52.42 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na fotoaparát PGYTech MagCam 2 (iPhone/Androi... | 51.90 € | **52.00 €** | 25.0 % | **25.2 %** | 52.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) + 5 ventilá... | 47.90 € | **48.00 €** | 16.6 % | **16.9 %** | 48.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK351+ 4 ventilátory (bi... | 43.90 € | **44.00 €** | 16.7 % | **16.9 %** | 44.42 € | cena podľa najlacnejšieho iného predajcu |
| Resto 90510 Čajová konvice1200 ml | 10.90 € | **11.00 €** | 14.5 % | **15.5 %** | 11.08 € | cena podľa najlacnejšieho iného predajcu |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 9.8 % | **10.8 %** | 11.08 € | cena podľa najlacnejšieho iného predajcu |
| UV baterka Superfire Z01, 365NM, USB | 13.90 € | **14.00 €** | 15.6 % | **16.4 %** | 14.08 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Honey Day 160 ml | 10.90 € | **11.00 €** | 12.6 % | **13.6 %** | 11.13 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Torras Ostand R Fusion pre iPhone 16 Pro Max ... | 15.90 € | **16.00 €** | 24.8 % | **25.6 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PETG (sivý) | 13.90 € | **14.00 €** | 18.1 % | **18.9 %** | 14.13 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco automatic soap dispenser 400ml | 15.90 € | **16.00 €** | 18.9 % | **19.7 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi RF 433 MHz Avat... | 14.90 € | **15.00 €** | 26.2 % | **27.0 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu |
| Herný stojan ONIKUMA ST-2 (biely) | 14.90 € | **15.00 €** | 24.6 % | **25.5 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (611)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **534.00 €** | 49.7 % | **18.4 %** | 534.50 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **849.90 €** | 31.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 31.8 % | **8.3 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-850 s rozlíšením 1080p (biely) | 647.50 € | **562.50 €** | 38.9 % | **20.6 %** | 562.83 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **785.90 €** | 37.3 % | **25.1 %** | 785.92 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **294.90 €** | 51.5 % | **20.7 %** | 294.92 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **240.50 €** | 50.4 % | **20.5 %** | 240.88 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA NS-C444 PIANOBLACK | 245.90 € | **186.90 €** | 47.8 % | **12.3 %** | 186.95 € | cena podľa najlacnejšieho iného predajcu |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **241.50 €** | 42.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **174.00 €** | 47.6 % | **13.9 %** | 174.38 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **259.00 €** | 28.9 % | **7.9 %** | 259.41 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Blitzwolf BW-V12 | 274.70 € | **225.00 €** | 47.2 % | **20.6 %** | 225.25 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP650 D120-Outdoor vonkajší AP,... | 237.90 € | **188.50 €** | 32.5 % | **5.0 %** | 85.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **228.90 €** | 28.0 % | **6.7 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **155.00 €** | 51.3 % | **17.4 %** | 155.38 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **332.50 €** | 36.1 % | **20.6 %** | 332.75 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň LK10 s väčším formátom | 291.00 € | **249.50 €** | 40.6 % | **20.5 %** | 249.83 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **158.50 €** | 35.0 % | **7.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **209.50 €** | 43.6 % | **20.3 %** | 209.75 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo Neewer CB200C RGB | 280.50 € | **240.90 €** | 40.5 % | **20.6 %** | 240.92 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **186.00 €** | 45.0 % | **19.6 %** | 186.38 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **184.50 €** | 45.2 % | **20.5 %** | 184.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **262.90 €** | 41.1 % | **23.5 %** | 262.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **263.00 €** | 40.8 % | **23.3 %** | 263.46 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **263.00 €** | 40.8 % | **23.3 %** | 263.46 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 117A | 263.00 € | **226.50 €** | 24.2 % | **6.9 %** | 226.63 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 244.98 € | **209.50 €** | 43.5 % | **22.7 %** | 209.54 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **132.00 €** | 47.0 % | **17.6 %** | 132.50 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **104.50 €** | 54.0 % | **17.2 %** | 104.75 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **318.50 €** | 37.5 % | **25.0 %** | 318.79 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **326.90 €** | 34.2 % | **22.6 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 123.00 € | **92.90 €** | 52.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **155.50 €** | 30.5 % | **9.4 %** | 155.79 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **145.50 €** | 46.8 % | **21.9 %** | 145.71 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **191.00 €** | 41.7 % | **22.8 %** | 191.29 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **125.50 €** | 46.2 % | **18.5 %** | 125.83 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **285.50 €** | 26.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **122.50 €** | 51.2 % | **23.0 %** | 122.58 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **172.50 €** | 42.5 % | **23.0 %** | 172.58 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **82.50 €** | 62.7 % | **22.4 %** | 82.71 € | cena podľa najlacnejšieho iného predajcu |
| Stavebná sada robota xTool mBot2 Rover | 375.50 € | **348.50 €** | 32.8 % | **23.3 %** | 348.79 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-650 WXGA (biely) | 492.90 € | **466.00 €** | 27.6 % | **20.7 %** | 466.21 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **188.50 €** | 38.7 % | **21.4 %** | 188.54 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 41.9 % | **8.8 %** | 86.74 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **286.50 €** | 35.4 % | **24.1 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **143.50 €** | 46.9 % | **24.6 %** | 143.67 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA NS-AW294 WHITE | 220.50 € | **194.90 €** | 23.6 % | **9.3 %** | 194.92 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C630 KIT 5MPx, vonkajšia, IP PTZ... | 125.00 € | **99.50 €** | 32.1 % | **5.1 %** | 99.60 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **154.90 €** | 45.0 % | **24.5 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **58.00 €** | 73.9 % | **22.2 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **58.00 €** | 73.9 % | **22.2 %** | 58.25 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Blackview 60 Pro LTE Blue | 201.00 € | **176.50 €** | 30.2 % | **14.3 %** | 176.54 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **118.00 €** | 38.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **148.50 €** | 42.0 % | **22.4 %** | 148.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **223.50 €** | 38.4 % | **25.2 %** | 223.79 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **115.00 €** | 49.7 % | **25.3 %** | 115.33 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **102.90 €** | 49.0 % | **22.6 %** | 103.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 41.4 % | **10.2 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 44.4 % | **12.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **163.50 €** | 27.9 % | **12.7 %** | 163.53 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **58.90 €** | 56.5 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **191.50 €** | 37.3 % | **23.9 %** | 191.54 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **191.50 €** | 37.0 % | **23.6 %** | 191.83 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **129.00 €** | 41.1 % | **21.6 %** | 129.13 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FN619EAW6 | 559.50 € | **538.90 €** | 10.1 % | **6.0 %** | 539.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP225 stropní AP, 1x GLAN, 2,4 ... | 96.90 € | **76.50 €** | 33.3 % | **5.2 %** | 59.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **57.00 €** | 68.8 % | **26.0 %** | 57.25 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **93.50 €** | 48.7 % | **23.3 %** | 93.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **122.50 €** | 37.6 % | **19.2 %** | 122.75 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.50 €** | 36.4 % | **11.2 %** | 81.70 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **54.50 €** | 53.1 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.00 €** | 44.7 % | **16.1 %** | 72.49 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot2 V1.0 | 190.00 € | **172.50 €** | 31.3 % | **19.2 %** | 172.72 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **119.90 €** | 40.7 % | **22.8 %** | 119.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **70.00 €** | 45.2 % | **16.7 %** | 70.42 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WSAP84AWI | 373.90 € | **356.90 €** | 10.1 % | **5.1 %** | 356.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **118.50 €** | 39.9 % | **22.5 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **90.90 €** | 24.7 % | **5.3 %** | 89.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **75.90 €** | 28.2 % | **5.5 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **30.90 €** | 76.3 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion HS611 | 91.23 € | **75.00 €** | 39.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.50 €** | 48.1 % | **13.7 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **59.00 €** | 43.9 % | **13.5 %** | 59.33 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **120.00 €** | 36.1 % | **20.7 %** | 120.04 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **65.00 €** | 41.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **39.90 €** | 58.6 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 70.9 % | **20.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **75.00 €** | 45.8 % | **22.0 %** | 75.46 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **235.50 €** | 36.0 % | **28.1 %** | 235.69 € | cena podľa najlacnejšieho iného predajcu |
| xTool Codey Rocky – vzdelávacia verzia – vzdelávací ... | 175.00 € | **160.50 €** | 34.3 % | **23.1 %** | 160.88 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **120.90 €** | 35.0 % | **20.6 %** | 120.96 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C245D IP, 2× 2K, WiFi, prísvit | 70.90 € | **56.50 €** | 32.8 % | **5.8 %** | 56.70 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **111.00 €** | 35.4 % | **20.2 %** | 111.29 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **103.00 €** | 36.4 % | **20.2 %** | 103.38 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **286.50 €** | 27.9 % | **22.0 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **76.00 €** | 42.1 % | **20.4 %** | 76.25 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 46.0 % | **11.9 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **61.50 €** | 28.3 % | **5.5 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 134.28 € | **121.00 €** | 36.1 % | **22.6 %** | 121.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **54.00 €** | 46.0 % | **17.4 %** | 54.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **52.00 €** | 43.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **38.50 €** | 53.4 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **57.50 €** | 40.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **77.50 €** | 42.9 % | **22.8 %** | 77.63 € | cena podľa najlacnejšieho iného predajcu |
| Freewell FujiX100 filter set with lens hood (silver) | 66.11 € | **53.50 €** | 42.2 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stojan AURZEN Powerplay | 127.10 € | **114.50 €** | 35.6 % | **22.2 %** | 114.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash HM1 | 80.00 € | **67.50 €** | 42.3 % | **20.1 %** | 67.88 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **62.50 €** | 41.8 % | **18.5 %** | 62.83 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BPS6737E04DBG | 415.90 € | **404.00 €** | 10.1 % | **6.9 %** | 404.50 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **123.50 €** | 36.2 % | **24.3 %** | 123.71 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **40.50 €** | 49.5 % | **15.8 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **128.90 €** | 24.7 % | **14.4 %** | 128.96 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **51.00 €** | 50.1 % | **22.5 %** | 51.08 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **45.90 €** | 44.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 32.8 % | **17.6 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.90 €** | 58.3 % | **20.6 %** | 35.92 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA NS-AW194 BLACK | 160.00 € | **148.90 €** | 38.2 % | **28.6 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 54.8 % | **44.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 59.1 % | **48.1 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **86.50 €** | 36.8 % | **21.5 %** | 86.71 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.32 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 53.3 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **52.00 €** | 40.6 % | **17.0 %** | 52.46 € | cena podľa najlacnejšieho iného predajcu |
| Súprava ultratenkého LED kruhového osvetlenia Neewer... | 189.00 € | **178.50 €** | 33.3 % | **25.9 %** | 178.67 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook N15R Pro | 234.90 € | **224.50 €** | 10.1 % | **5.2 %** | 219.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **82.00 €** | 35.9 % | **20.8 %** | 82.38 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 123.5 % | **44.1 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný pohybový senzor MEROSS MS605MAT-EU | 39.98 € | **30.00 €** | 40.6 % | **5.5 %** | 30.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **65.00 €** | 36.0 % | **18.2 %** | 65.08 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **32.90 €** | 48.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.00 €** | 40.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Lampa monitora BlitzWolf BW-CML6 | 61.00 € | **51.90 €** | 44.1 % | **22.6 %** | 51.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **53.50 €** | 37.6 % | **17.7 %** | 53.75 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey S7 s kamerou s dosahom 1... | 137.00 € | **128.00 €** | 26.9 % | **18.5 %** | 128.04 € | cena podľa najlacnejšieho iného predajcu |
| Budík Blitzwolf BW-FW10 s nabíjačkou 2xUSB-A, 4xUSB-... | 64.50 € | **55.50 €** | 40.0 % | **20.5 %** | 55.58 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener pre motocykle ANCEL MT310 | 305.00 € | **296.00 €** | 25.3 % | **21.6 %** | 296.17 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 61.2 % | **25.0 %** | 31.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **71.00 €** | 33.5 % | **18.6 %** | 71.50 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **66.00 €** | 19.2 % | **5.1 %** | 65.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **104.00 €** | 30.8 % | **20.6 %** | 104.13 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.50 €** | 79.4 % | **22.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.50 €** | 79.4 % | **22.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **58.50 €** | 40.6 % | **22.5 %** | 58.83 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **29.00 €** | 52.3 % | **18.0 %** | 29.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 43.8 % | **11.5 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.00 €** | 45.9 % | **6.2 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.50 €** | 40.9 % | **17.6 %** | 41.58 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 410B8-S | 297.00 € | **288.90 €** | 8.0 % | **5.1 %** | 271.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.90 €** | 41.6 % | **12.4 %** | 30.96 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 21.0 % | **9.2 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Candy CP 8F9FFW | 295.00 € | **287.00 €** | 10.0 % | **7.0 %** | 287.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 31.00 € | **23.00 €** | 53.7 % | **14.0 %** | 23.25 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady Mobile+ Kit | 75.50 € | **67.50 €** | 41.1 % | **26.2 %** | 67.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 45.0 % | **16.0 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **66.90 €** | 21.0 % | **8.2 %** | 66.96 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 53.8 % | **19.2 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **41.90 €** | 48.9 % | **25.5 %** | 41.92 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.50 €** | 66.0 % | **26.0 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **42.00 €** | 49.7 % | **26.5 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **102.00 €** | 29.4 % | **20.4 %** | 102.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 50.1 % | **42.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.50 €** | 70.5 % | **22.4 %** | 19.58 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.90 €** | 84.6 % | **22.0 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **59.50 €** | 25.7 % | **11.4 %** | 59.54 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 77.8 % | **20.7 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **57.00 €** | 33.6 % | **17.9 %** | 57.29 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 60cm LED stan bez tienidla 3380 lúmenov | 53.00 € | **45.50 €** | 42.4 % | **22.2 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.50 €** | 38.6 % | **20.1 %** | 47.75 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **22.50 €** | 51.2 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **63.00 €** | 32.3 % | **18.7 %** | 63.17 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 65.3 % | **20.1 %** | 19.46 € | cena podľa najlacnejšieho iného predajcu |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 65.2 % | **13.5 %** | 15.79 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 74.4 % | **19.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 74.4 % | **19.9 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.00 € | **29.00 €** | 30.7 % | **5.3 %** | 27.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.50 €** | 51.3 % | **6.4 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **93.00 €** | 23.2 % | **14.7 %** | 93.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 43.6 % | **17.0 %** | 30.88 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **22.90 €** | 36.4 % | **5.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.00 €** | 21.7 % | **12.9 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.90 €** | 61.9 % | **22.2 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.50 €** | 35.4 % | **17.8 %** | 45.71 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **23.00 €** | 50.0 % | **16.1 %** | 23.17 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **20.50 €** | 39.4 % | **5.2 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **60.50 €** | 32.6 % | **19.5 %** | 60.71 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.50 €** | 31.1 % | **17.0 %** | 53.67 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **93.50 €** | 31.4 % | **23.0 %** | 93.83 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.90 €** | 29.9 % | **12.7 %** | 41.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.50 €** | 43.9 % | **25.9 %** | 43.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.50 €** | 56.9 % | **21.9 %** | 21.63 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 52.7 % | **45.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 62.7 % | **22.4 %** | 18.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.50 €** | 34.1 % | **15.8 %** | 38.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **13.90 €** | 54.0 % | **7.1 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 59.3 % | **14.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 54.50 € | **48.50 €** | 27.8 % | **13.8 %** | 48.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 54.50 € | **48.50 €** | 35.1 % | **20.3 %** | 48.71 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač MOVA K30 Lite | 221.00 € | **215.00 €** | 10.6 % | **7.6 %** | 215.32 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny statív PGYTECH MANTISPOD Z | 39.50 € | **33.50 €** | 43.1 % | **21.4 %** | 33.88 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **14.00 €** | 84.7 % | **29.3 %** | 14.13 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 52.6 % | **43.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.50 €** | 33.8 % | **20.1 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **29.00 €** | 43.7 % | **19.6 %** | 29.21 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 51.2 % | **43.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **63.90 €** | 31.5 % | **20.5 %** | 64.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 35.2 % | **11.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.50 €** | 29.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **16.90 €** | 55.2 % | **16.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.50 € | **41.90 €** | 23.8 % | **9.2 %** | 41.92 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **59.00 €** | 25.1 % | **14.3 %** | 59.29 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 42.7 % | **35.2 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **118.50 €** | 29.1 % | **23.3 %** | 118.67 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 40.00 € | **34.50 €** | 39.2 % | **20.1 %** | 34.67 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitá odsávačka mlieka Grownsy | 38.50 € | **33.00 €** | 41.6 % | **21.3 %** | 33.38 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6T (modrý) | 42.50 € | **37.00 €** | 41.3 % | **23.0 %** | 37.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **116.50 €** | 26.2 % | **20.6 %** | 116.63 € | cena podľa najlacnejšieho iného predajcu |
| Candy CH64CCB/4U2 | 117.90 € | **112.50 €** | 10.4 % | **5.3 %** | 112.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Neewer Retro blesk | 74.82 € | **69.50 €** | 55.5 % | **44.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **232.50 €** | 23.4 % | **20.6 %** | 232.63 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 46.7 % | **22.7 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **27.00 €** | 38.9 % | **16.1 %** | 27.23 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 45.3 % | **19.8 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **24.50 €** | 40.2 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **42.00 €** | 38.7 % | **23.6 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.90 €** | 52.5 % | **46.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| ANCEL L5000 PRO – diagnostický detektor únikov pre a... | 295.00 € | **289.90 €** | 24.3 % | **22.2 %** | 289.92 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 50.7 % | **19.5 %** | 19.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 37.6 % | **9.0 %** | 19.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 38.3 % | **9.6 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.90 €** | 35.4 % | **18.2 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 39.7 % | **28.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 59.5 % | **19.7 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 19.99 € | **15.00 €** | 58.4 % | **18.9 %** | 15.46 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **35.00 €** | 28.3 % | **12.3 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 60.3 % | **15.0 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.50 €** | 22.6 % | **6.5 %** | 31.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **32.50 €** | 43.8 % | **24.9 %** | 32.71 € | cena podľa najlacnejšieho iného predajcu |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 107.90 € | **103.00 €** | 28.5 % | **22.6 %** | 103.08 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 55.90 € | **51.00 €** | 15.3 % | **5.2 %** | 48.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.90 €** | 32.6 % | **19.7 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **70.00 €** | 28.7 % | **20.4 %** | 70.21 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.50 €** | 25.1 % | **6.6 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **87.50 €** | 21.8 % | **15.5 %** | 87.75 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **25.00 €** | 45.7 % | **22.5 %** | 25.09 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **45.00 €** | 32.3 % | **19.7 %** | 45.25 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.90 €** | 34.7 % | **24.9 %** | 59.96 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.50 €** | 37.2 % | **23.7 %** | 42.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.50 €** | 35.9 % | **22.5 %** | 42.71 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.90 €** | 30.9 % | **16.6 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.50 €** | 33.0 % | **19.6 %** | 41.88 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **20.00 €** | 47.6 % | **20.0 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook 11T LTE Pro | 106.50 € | **101.90 €** | 10.0 % | **5.3 %** | 97.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 41.1 % | **11.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 40.6 % | **11.1 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CDH30 | 90.50 € | **86.00 €** | 10.5 % | **5.0 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herný mikrofón Fifine A6V (ružový) | 31.50 € | **27.00 €** | 43.8 % | **23.3 %** | 27.25 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 19.00 € | **14.50 €** | 80.7 % | **37.9 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.50 €** | 59.8 % | **22.2 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 56.1 % | **19.3 %** | 14.67 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 39.8 % | **33.6 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.00 €** | 41.0 % | **5.2 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 62.9 % | **21.5 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 58.4 % | **19.3 %** | 13.88 € | cena podľa najlacnejšieho iného predajcu |
| UMAX VisionBook 10T LTE | 93.90 € | **89.50 €** | 10.3 % | **5.1 %** | 77.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stojan na mikrofón Fifine BM88 (ružový) | 45.90 € | **41.50 €** | 37.0 % | **23.9 %** | 41.79 € | cena podľa najlacnejšieho iného predajcu |
| AMICA Hluboký pečící plech (9045756) | 28.90 € | **24.50 €** | 39.4 % | **18.2 %** | 24.88 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové osvetlenie PGY Magnetic Pocket Fill Light | 27.90 € | **23.50 €** | 68.3 % | **41.7 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **22.90 €** | 39.8 % | **17.9 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 61.8 % | **38.8 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **23.00 €** | 31.8 % | **11.6 %** | 23.17 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **20.50 €** | 47.6 % | **23.0 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.90 €** | 55.6 % | **22.2 %** | 14.96 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 33.1 % | **9.2 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 499.50 € | **495.50 €** | 5.9 % | **5.1 %** | 479.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje BO6737E02XK | 222.00 € | **218.00 €** | 10.0 % | **8.1 %** | 218.10 € | cena podľa najlacnejšieho iného predajcu |
| Herný mikrofón Fifine A6VR (červený) | 31.00 € | **27.00 €** | 41.5 % | **23.3 %** | 27.25 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny decibelomer Habotest HT622B USB A/C | 23.50 € | **19.50 €** | 43.1 % | **18.8 %** | 19.83 € | cena podľa najlacnejšieho iného predajcu |
| Fixed MagPad, bílá FIXMPAD2-WH | 16.50 € | **12.50 €** | 60.5 % | **21.6 %** | 12.85 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus DC1 mini orbitrek | 162.00 € | **158.00 €** | 20.7 % | **17.7 %** | 158.35 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 373.00 € | **369.00 €** | 8.8 % | **7.7 %** | 369.38 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.00 €** | 43.3 % | **14.7 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 41.8 % | **13.5 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 26.6 % | **14.0 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 52.6 % | **16.3 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.90 €** | 40.5 % | **22.4 %** | 25.96 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.50 €** | 21.7 % | **5.3 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **18.90 €** | 44.2 % | **20.9 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 37.9 % | **18.4 %** | 22.46 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **21.00 €** | 38.0 % | **17.8 %** | 21.04 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **21.00 €** | 43.5 % | **22.5 %** | 21.08 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **21.00 €** | 43.4 % | **22.4 %** | 21.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **41.00 €** | 28.8 % | **18.4 %** | 41.04 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.50 €** | 30.6 % | **19.6 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 198.50 € | **195.00 €** | 6.9 % | **5.0 %** | 193.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Salente Combo-4In1-Ss | 129.50 € | **126.00 €** | 10.2 % | **7.2 %** | 126.07 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 43.6 % | **18.5 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 46.8 % | **17.9 %** | 14.21 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 607 | 72.90 € | **69.50 €** | 10.3 % | **5.2 %** | 65.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reproduktory EDIFIER MR 4.5 (biele) | 200.90 € | **197.50 €** | 15.9 % | **13.9 %** | 197.72 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 200.90 € | **197.50 €** | 15.9 % | **13.9 %** | 197.72 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.00 €** | 41.2 % | **12.0 %** | 13.41 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.11 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **30.00 €** | 33.0 % | **19.8 %** | 30.21 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **29.00 €** | 33.2 % | **19.6 %** | 29.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 35.9 % | **21.2 %** | 26.88 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 46.0 % | **39.3 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 50.0 % | **43.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Nikon | 214.00 € | **210.90 €** | 9.8 % | **8.2 %** | 211.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.90 €** | 30.6 % | **20.6 %** | 36.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **19.50 €** | 23.0 % | **6.4 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 černá | 61.50 € | **58.50 €** | 10.6 % | **5.2 %** | 58.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stojan na projektor Blitzwolf BW-VF5 | 22.50 € | **19.50 €** | 22.7 % | **6.3 %** | 19.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Termovízna kamera THERMAL MASTER X2 USB-C | 278.90 € | **275.90 €** | 13.1 % | **11.8 %** | 275.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač 4 x 16A, biely | 6.80 € | **3.80 €** | 225.2 % | **81.7 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (červené) | 35.50 € | **32.50 €** | 24.0 % | **13.5 %** | 32.71 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 13 | 287.00 € | **284.00 €** | 14.9 % | **13.7 %** | 284.22 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D71 | 265.50 € | **262.50 €** | 17.9 % | **16.6 %** | 262.74 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT705 | 294.00 € | **291.00 €** | 17.0 % | **15.8 %** | 291.26 € | cena podľa najlacnejšieho iného predajcu |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.00 € | **16.00 €** | 26.2 % | **6.3 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, zlatá) | 275.50 € | **272.50 €** | 24.9 % | **23.6 %** | 272.84 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 275.50 € | **272.50 €** | 11.1 % | **9.9 %** | 272.84 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 43.7 % | **22.2 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 40.7 % | **17.1 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper ABS (sivý) | 17.43 € | **14.50 €** | 40.2 % | **16.6 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **34.50 €** | 31.8 % | **21.5 %** | 34.83 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **14.00 €** | 42.8 % | **18.2 %** | 14.33 € | cena podľa najlacnejšieho iného predajcu |
| Štartér motora ANCEL BS200 | 121.90 € | **119.00 €** | 26.3 % | **23.3 %** | 119.42 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák PEGASUS RockSolid | 56.90 € | **54.00 €** | 10.7 % | **5.1 %** | 51.02 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 46.2 % | **20.3 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 47.0 % | **21.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 PRO (biela) + 6 ven... | 52.90 € | **50.00 €** | 23.7 % | **16.9 %** | 50.38 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 516.90 € | **514.00 €** | 9.3 % | **8.7 %** | 514.05 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **12.00 €** | 51.0 % | **22.0 %** | 12.38 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.00 €** | 41.3 % | **14.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 60.0 % | **44.3 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.90 €** | 44.0 % | **35.1 %** | 39.93 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **22.00 €** | 36.2 % | **21.8 %** | 22.17 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **20.00 €** | 24.1 % | **10.1 %** | 20.13 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.42 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla Avatto TS60-EU-W3 | 19.50 € | **17.00 €** | 40.2 % | **22.2 %** | 17.08 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD300ProII pre upevnenie Godox | 478.00 € | **475.50 €** | 9.8 % | **9.2 %** | 475.59 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST9100 | 36.00 € | **33.50 €** | 14.6 % | **6.6 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 19.50 € | **17.00 €** | 38.8 % | **21.0 %** | 17.25 € | cena podľa najlacnejšieho iného predajcu |
| RainPoint WiFi 8-zónový regulátor zavlažovania | 60.00 € | **57.50 €** | 22.9 % | **17.8 %** | 57.81 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov PGYTECH ND-PL 8/16/32/64 pre DJI Mavi... | 18.00 € | **15.50 €** | 37.0 % | **18.0 %** | 15.88 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.6 % | **10.1 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.0 % | **9.6 %** | 16.88 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.50 €** | 44.9 % | **25.3 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Termokamera Mileseey TR256i USB-C Mini | 206.90 € | **204.50 €** | 8.9 % | **7.6 %** | 204.78 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.50 €** | 34.1 % | **12.8 %** | 12.70 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 46.4 % | **23.2 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 59.6 % | **34.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.90 €** | 36.8 % | **25.4 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **24.90 €** | 26.3 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **47.50 €** | 46.9 % | **40.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 20.3 % | **10.1 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 46.4 % | **42.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.90 € | **60.90 €** | 9.1 % | **5.6 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CrockPot CSC111X Pomalý hrnec 3,5 l | 87.50 € | **85.50 €** | 7.8 % | **5.3 %** | 75.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED 2 skla SG A57 5G FIXGFADA-1703-BK | 13.00 € | **11.00 €** | 47.0 % | **24.4 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Kovové puzdro Telesin pre DJI Osmo Action 5 (modré) | 16.00 € | **14.00 €** | 39.9 % | **22.4 %** | 14.08 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 373.90 € | **371.90 €** | 5.7 % | **5.2 %** | 372.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 36.00 € | **34.00 €** | 15.4 % | **9.0 %** | 34.15 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 36.00 € | **34.00 €** | 18.4 % | **11.8 %** | 34.15 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire D6 – 220 lm, dosah 210 m, 4 režimy | 17.00 € | **15.00 €** | 37.9 % | **21.7 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom JR-W13 5000 mAh powerbanka s nabíjaním Apple... | 16.00 € | **14.00 €** | 35.9 % | **18.9 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 172.00 € | **170.00 €** | 17.3 % | **15.9 %** | 170.44 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 57.3 % | **41.7 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 27.7 % | **15.0 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **17.00 €** | 33.3 % | **19.5 %** | 17.17 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **15.50 €** | 28.0 % | **13.8 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 20.17 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1009900 | 47.90 € | **46.00 €** | 16.1 % | **11.5 %** | 46.23 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 56.7 % | **35.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Minix SF10T s uhlopriečkou 10,5" | 128.50 € | **126.90 €** | 25.4 % | **23.8 %** | 126.92 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 37.4 % | **27.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre vysávač MOVA E20, E20 Pro | 19.00 € | **17.50 €** | 14.1 % | **5.1 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Kobra S1 Max Combo | 873.50 € | **872.00 €** | 15.1 % | **14.9 %** | 872.08 € | cena podľa najlacnejšieho iného predajcu |
| Freewell ND1000 Filter pre OSMO Action 6 | 15.00 € | **13.50 €** | 35.2 % | **21.7 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V100 TTL pre Nikon | 340.00 € | **338.50 €** | 9.8 % | **9.3 %** | 338.60 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 27.50 € | **26.00 €** | 11.6 % | **5.5 %** | 26.17 € | cena podľa najlacnejšieho iného predajcu |
| Set of 5 Filters Sunnylife ND 8/16/32/64/128 for DJI... | 20.50 € | **19.00 €** | 28.9 % | **19.5 %** | 19.17 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24010-56 | 40.50 € | **39.00 €** | 10.9 % | **6.8 %** | 39.21 € | cena podľa najlacnejšieho iného predajcu |
| Prsteň Smartring EVEN REALITIES R1, veľkosť 10 | 285.50 € | **284.00 €** | 14.3 % | **13.7 %** | 284.22 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 11 | 285.50 € | **284.00 €** | 14.3 % | **13.7 %** | 284.22 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 7 | 285.50 € | **284.00 €** | 14.3 % | **13.7 %** | 284.22 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 504.00 € | **502.50 €** | 8.1 % | **7.7 %** | 502.73 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 504.00 € | **502.50 €** | 22.7 % | **22.4 %** | 502.73 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 525.50 € | **524.00 €** | 7.6 % | **7.3 %** | 524.34 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 52.50 € | **51.00 €** | 8.8 % | **5.7 %** | 51.36 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LA300R | 456.00 € | **454.50 €** | 12.8 % | **12.5 %** | 454.89 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 33.50 € | **32.00 €** | 13.8 % | **8.7 %** | 32.48 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 33.50 € | **32.00 €** | 13.8 % | **8.7 %** | 32.48 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 43.8 % | **33.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 45.2 % | **34.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.50 €** | 34.0 % | **23.6 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **17.50 €** | 26.7 % | **16.9 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 48.2 % | **36.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Bellagio červený multikapslový | 113.90 € | **112.50 €** | 6.7 % | **5.4 %** | 101.12 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.50 €** | 34.1 % | **21.8 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 49.2 % | **43.4 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **3.00 €** | 54.0 % | **7.4 %** | 3.09 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny zvuku Habotest HT602B | 25.12 € | **24.00 €** | 23.8 % | **18.3 %** | 24.13 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 270.00 € | **268.90 €** | 7.4 % | **6.9 %** | 269.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (čierne) | 20.00 € | **18.90 €** | 15.2 % | **8.9 %** | 19.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 49.1 % | **42.5 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 51.5 % | **44.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU3941WBW | 358.90 € | **357.90 €** | 5.3 % | **5.0 %** | 315.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TBE553E BE9300 WiFi 7, ... | 73.90 € | **72.90 €** | 6.8 % | **5.4 %** | 72.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 285.50 € | **284.50 €** | 57.1 % | **56.5 %** | 284.51 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 s 6 ventilátormi (čie... | 115.00 € | **114.00 €** | 19.5 % | **18.4 %** | 114.01 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash F1 (čierna) + 6 ventilát... | 115.00 € | **114.00 €** | 16.0 % | **14.9 %** | 114.01 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 26.90 € | **25.90 €** | 17.3 % | **13.0 %** | 25.92 € | cena podľa najlacnejšieho iného predajcu |
| Motorcycle Intercom EJEAS MS20 | 139.50 € | **138.50 €** | 6.8 % | **6.1 %** | 138.58 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 175.90 € | **174.90 €** | 17.8 % | **17.1 %** | 174.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 7.60 € | **6.60 €** | 43.0 % | **24.2 %** | 6.70 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 152.90 € | **151.90 €** | 8.8 % | **8.1 %** | 152.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 399.90 € | **398.90 €** | 6.0 % | **5.8 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 208.90 € | **207.90 €** | 37641.6 % | **37461.0 %** | 208.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 643.90 € | **642.90 €** | 116232.4 % | **116051.8 %** | 643.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 321.00 € | **320.00 €** | 30.2 % | **29.8 %** | 320.12 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.50 €** | 15.0 % | **10.5 %** | 24.67 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 223.00 € | **222.00 €** | 18.1 % | **17.6 %** | 222.23 € | cena podľa najlacnejšieho iného predajcu |
| Automatický hadicový časovač Rainpoint ITV152 | 16.50 € | **15.50 €** | 31.0 % | **23.1 %** | 15.75 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 331.50 € | **330.50 €** | 24.1 % | **23.8 %** | 330.78 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň LIENE Pearl N200 Pro 2x3" (fi... | 91.50 € | **90.50 €** | 26.0 % | **24.6 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl N200 Pro 2x3" (zl... | 91.50 € | **90.50 €** | 37.8 % | **36.3 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 319.00 € | **318.00 €** | 9.8 % | **9.4 %** | 318.34 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 278.00 € | **277.00 €** | 10.6 % | **10.2 %** | 277.39 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 336.00 € | **335.00 €** | 23.1 % | **22.7 %** | 335.39 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 229.50 € | **228.50 €** | 16.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 229.50 € | **228.50 €** | 16.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 229.50 € | **228.50 €** | 16.6 % | **16.1 %** | 228.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 204.50 € | **203.50 €** | 14.3 % | **13.8 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link Mercusys ME80X AP/Extender/Rep... | 37.50 € | **36.50 €** | 8.3 % | **5.5 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 131.50 € | **130.50 €** | 30.3 % | **29.3 %** | 130.90 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk s dvojitou hlavou GODOX MF-T76 pre Sony | 296.00 € | **295.00 €** | 43.6 % | **43.1 %** | 295.46 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **156.90 €** | 46.2 % | **45.3 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 49.0 % | **41.1 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostický skener pre motocykle BMW ANCEL MT300 | 159.90 € | **159.00 €** | 22.6 % | **21.9 %** | 159.06 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 238.90 € | **238.00 €** | 7.6 % | **7.2 %** | 238.26 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 214.90 € | **214.00 €** | 11.4 % | **11.0 %** | 214.38 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica ELEGOO Mercury XS | 127.90 € | **127.00 €** | 16.1 % | **15.3 %** | 127.41 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 152.90 € | **152.00 €** | 31.9 % | **31.1 %** | 152.47 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 42.9 % | **41.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 52.3 % | **51.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 41.5 % | **41.0 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash F1 ATX + 6 ventilátorov ... | 104.50 € | **103.90 €** | 7.9 % | **7.3 %** | 103.99 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 79.00 € | **78.50 €** | 12.1 % | **11.4 %** | 78.51 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 297.00 € | **296.50 €** | 12.7 % | **12.5 %** | 296.54 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 248.00 € | **247.50 €** | 31.6 % | **31.3 %** | 247.55 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 321.00 € | **320.50 €** | 13.3 % | **13.1 %** | 320.56 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel 50 | 74.00 € | **73.50 €** | 5.9 % | **5.2 %** | 73.59 € | cena podľa najlacnejšieho iného predajcu |
| Teleskop Levenhuk Skyline Travel Sun 50 | 74.00 € | **73.50 €** | 5.9 % | **5.2 %** | 73.59 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam S800 | 88.00 € | **87.50 €** | 17.1 % | **16.4 %** | 87.60 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie GODOX FL15Bi | 98.00 € | **97.50 €** | 17.4 % | **16.8 %** | 97.62 € | cena podľa najlacnejšieho iného predajcu |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 92.50 € | **92.00 €** | 7.9 % | **7.4 %** | 92.14 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 120.50 € | **120.00 €** | 13.6 % | **13.1 %** | 120.17 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000  (čierny) | 67.00 € | **66.50 €** | 33.7 % | **32.7 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 Wi-Fi (čierny) | 67.00 € | **66.50 €** | 8.7 % | **7.9 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ4000 Wi- (biely) | 67.00 € | **66.50 €** | 8.7 % | **7.9 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 167.00 € | **166.50 €** | 15.6 % | **15.2 %** | 166.67 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 148.00 € | **147.50 €** | 12.9 % | **12.5 %** | 147.68 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne) | 36.50 € | **36.00 €** | 15.6 % | **14.0 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Zásuvkový termostatický regulátor teploty Meross MTS... | 36.50 € | **36.00 €** | 17.0 % | **15.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Statív PULUZ - flexibilný držiak s diaľkovým ovládan... | 12.00 € | **11.50 €** | 22.9 % | **17.8 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 115.00 € | **114.50 €** | 17.7 % | **17.2 %** | 114.72 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 127.50 € | **127.00 €** | 11.5 % | **11.0 %** | 127.22 € | cena podľa najlacnejšieho iného predajcu |
| Turecký kávovar HiBREW CM1179_EU | 41.00 € | **40.50 €** | 10.9 % | **9.5 %** | 40.73 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 127.00 € | **126.50 €** | 16.3 % | **15.9 %** | 126.74 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 | 179.50 € | **179.00 €** | 5.5 % | **5.2 %** | 179.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné fotochromatické slnečné okuliare BlitzW... | 56.00 € | **55.50 €** | 11.8 % | **10.8 %** | 55.75 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 219.00 € | **218.50 €** | 14.4 % | **14.1 %** | 218.76 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 182.50 € | **182.00 €** | 21.3 % | **21.0 %** | 182.26 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 107.50 € | **107.00 €** | 17.2 % | **16.7 %** | 107.26 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 87.50 € | **87.00 €** | 8.9 % | **8.3 %** | 87.27 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 170.50 € | **170.00 €** | 18.1 % | **17.8 %** | 170.27 € | cena podľa najlacnejšieho iného predajcu |
| Bluetooth reproduktor Blitzwolf BW-WA4 30W 4000mAh | 45.50 € | **45.00 €** | 16.1 % | **14.8 %** | 45.28 € | cena podľa najlacnejšieho iného predajcu |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 45.50 € | **45.00 €** | 16.1 % | **14.8 %** | 45.28 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 156.50 € | **156.00 €** | 12.0 % | **11.6 %** | 156.28 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 93.50 € | **93.00 €** | 17.5 % | **16.9 %** | 93.29 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 144.00 € | **143.50 €** | 15.4 % | **15.0 %** | 143.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 136.50 € | **136.00 €** | 43.4 % | **42.9 %** | 136.30 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky C50 (sivé) | 36.00 € | **35.50 €** | 13.2 % | **11.6 %** | 35.81 € | cena podľa najlacnejšieho iného predajcu |
| Edifier SS02C stojany pre reproduktory Edifier S2000... | 149.50 € | **149.00 €** | 32.8 % | **32.4 %** | 149.31 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy BR009-55 37L chladiaci box na nápoje (čierny) | 136.50 € | **136.00 €** | 20.3 % | **19.8 %** | 136.31 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 209.00 € | **208.50 €** | 34.9 % | **34.6 %** | 208.82 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21L3C-L 2.0 Mpix venkovní dome IP kamera s ... | 91.50 € | **91.00 €** | 17.4 % | **16.8 %** | 91.32 € | cena podľa najlacnejšieho iného predajcu |
| Televes DAT HD BOSS 700 TFORCE LTE700 | 92.00 € | **91.50 €** | 32.5 % | **31.8 %** | 91.82 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 Pro (biely) | 50.00 € | **49.50 €** | 8.4 % | **7.3 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 Pro (čierny) | 50.00 € | **49.50 €** | 9.2 % | **8.1 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-P23 100 W 14 000 mAh powerbanka | 50.00 € | **49.50 €** | 16.9 % | **15.7 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-654A | 118.50 € | **118.00 €** | 19.0 % | **18.5 %** | 118.33 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-604B štvorzónový plynový sporák so sklen... | 118.50 € | **118.00 €** | 26.5 % | **26.0 %** | 118.33 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 8301A | 79.50 € | **79.00 €** | 10.6 % | **9.9 %** | 79.33 € | cena podľa najlacnejšieho iného predajcu |
| Spúšťacia jednotka UTRAI JS10 | 95.50 € | **95.00 €** | 15.6 % | **15.0 %** | 95.35 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 159.00 € | **158.50 €** | 15.9 % | **15.6 %** | 158.87 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na riadidlá PXN-A10 | 75.00 € | **74.50 €** | 10.0 % | **9.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.00 € | **21.50 €** | 7.6 % | **5.1 %** | 21.88 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 340.50 € | **340.00 €** | 24.4 % | **24.2 %** | 340.39 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 61.50 € | **61.00 €** | 88.0 % | **86.4 %** | 61.39 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz s pumpou, 4 ks | 36.00 € | **35.50 €** | 9.9 % | **8.3 %** | 35.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušák Comfort Tower 420 | 48.00 € | **47.50 €** | 10.8 % | **9.6 %** | 47.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 41.50 € | **41.00 €** | 10.7 % | **9.4 %** | 41.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 47.50 € | **47.00 €** | 8.4 % | **7.3 %** | 47.39 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 19.50 € | **19.00 €** | 11.1 % | **8.2 %** | 19.39 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.00 € | **17.50 €** | 12.0 % | **8.9 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 32.00 € | **31.50 €** | 11.9 % | **10.2 %** | 31.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 313.50 € | **313.00 €** | 16.7 % | **16.5 %** | 313.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 468.50 € | **468.00 €** | 8.3 % | **8.1 %** | 468.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 922.50 € | **922.00 €** | 17.2 % | **17.2 %** | 922.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 131.00 € | **130.50 €** | 14.7 % | **14.3 %** | 130.89 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF CE-ZM1902B-SV | 82.00 € | **81.50 €** | 16.4 % | **15.7 %** | 81.89 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 158.50 € | **158.00 €** | 10.8 % | **10.5 %** | 158.39 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 930.00 € | **929.50 €** | 9.9 % | **9.8 %** | 929.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 276.50 € | **276.00 €** | 23.8 % | **23.6 %** | 276.39 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 24.50 € | **24.00 €** | 8.4 % | **6.2 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 108.50 € | **108.00 €** | 12.5 % | **12.0 %** | 108.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 273.50 € | **273.00 €** | 7.7 % | **7.5 %** | 273.39 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Neptune 4 Max | 393.00 € | **392.50 €** | 8.4 % | **8.3 %** | 392.89 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK TL-MR150 4G LTE WiFi N Router | 69.50 € | **69.00 €** | 9.6 % | **8.8 %** | 69.39 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 260.00 € | **259.50 €** | 6.7 % | **6.5 %** | 259.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 42.00 € | **41.50 €** | 65.4 % | **63.5 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.00 € | **16.50 €** | 13.0 % | **9.7 %** | 16.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 89.50 € | **89.00 €** | 19566.0 % | **19456.1 %** | 89.39 € | cena podľa najlacnejšieho iného predajcu |
| Kaon MZ-52, satelitní přijímač Skylink | 61.00 € | **60.50 €** | 9.2 % | **8.3 %** | 60.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 605.50 € | **605.00 €** | 5.4 % | **5.3 %** | 605.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 636.50 € | **636.00 €** | 7.5 % | **7.4 %** | 636.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 683.50 € | **683.00 €** | 11.5 % | **11.4 %** | 683.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 160.50 € | **160.00 €** | 19.7 % | **19.4 %** | 160.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 150.50 € | **150.00 €** | 17.8 % | **17.4 %** | 150.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 126.00 € | **125.50 €** | 15.6 % | **15.2 %** | 125.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 32.00 € | **31.50 €** | 31.2 % | **29.1 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 126.00 € | **125.50 €** | 21.1 % | **20.6 %** | 125.90 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 81.50 € | **81.00 €** | 7.8 % | **7.2 %** | 81.42 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire L3 P90 | 28.50 € | **28.00 €** | 9.6 % | **7.6 %** | 28.44 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam S600 webová kamera | 53.50 € | **53.00 €** | 17.9 % | **16.8 %** | 53.45 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 21.50 € | **21.00 €** | 10.1 % | **7.5 %** | 21.46 € | cena podľa najlacnejšieho iného predajcu |
| Detektor drôtov UNI-T UT25CL | 137.50 € | **137.00 €** | 10.1 % | **9.7 %** | 137.46 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 37.50 € | **37.00 €** | 8.7 % | **7.2 %** | 37.48 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife AD020 magnetický hliníkový adaptér pre Ins... | 15.50 € | **15.00 €** | 18.5 % | **14.7 %** | 15.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI G06 (hnedé) | 31.50 € | **31.00 €** | 43.6 % | **41.4 %** | 31.49 € | cena podľa najlacnejšieho iného predajcu |
| Creative Zen Hybrid Pro Classic | 79.50 € | **79.00 €** | 6.1 % | **5.4 %** | 79.49 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec V050 Moro, 12 000 mAh | 80.50 € | **80.00 €** | 23.1 % | **22.4 %** | 80.49 € | cena podľa najlacnejšieho iného predajcu |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0026 | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H3 Pro (biele) | 42.50 € | **42.00 €** | 16.2 % | **14.9 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 39.2 % | **38.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS EM06P-EU Inteligentný monitor spotreby energi... | 72.90 € | **72.50 €** | 15.4 % | **14.7 %** | 72.59 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Pink | 93.90 € | **93.50 €** | 10.4 % | **9.9 %** | 93.62 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM011 Výrobník ľadu, 1,2 l, 12 kg (čierny) | 74.90 € | **74.50 €** | 7.1 % | **6.5 %** | 74.77 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 88.90 € | **88.50 €** | 14.0 % | **13.5 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 112.90 € | **112.50 €** | 7.8 % | **7.5 %** | 112.79 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.90 €** | 26.6 % | **22.5 %** | 11.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.20 € | **3.80 €** | 35.5 % | **22.6 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Telesin magnetic mount for sports cameras | 14.90 € | **14.50 €** | 24.8 % | **21.4 %** | 14.63 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 12.90 € | **12.50 €** | 28.1 % | **24.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| G3ferrari G4002300 Odstraňovač žmolků | 21.90 € | **21.50 €** | 7.1 % | **5.2 %** | 21.54 € | cena podľa najlacnejšieho iného predajcu |
| PGYTECH Caplock MantisPod Power Tripod pre Gopro Hero | 56.90 € | **56.50 €** | 17.8 % | **17.0 %** | 56.66 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona na smartfón od Sunnylife pre ovládač D... | 25.90 € | **25.50 €** | 8.7 % | **7.0 %** | 25.69 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND-PL 4/8/16/32 Sunnylife pre DJI Min... | 25.90 € | **25.50 €** | 29.2 % | **27.2 %** | 25.69 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **38.50 €** | 7.0 % | **5.9 %** | 38.71 € | cena podľa najlacnejšieho iného predajcu |
| Maono PD100X RGB Microphone Black | 43.90 € | **43.50 €** | 38.1 % | **36.8 %** | 43.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT805 (čierne) | 22.90 € | **22.50 €** | 12.4 % | **10.4 %** | 22.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 22.90 € | **22.50 €** | 13.1 % | **11.1 %** | 22.75 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofon Maono PD200x (biely) | 47.90 € | **47.50 €** | 11.9 % | **11.0 %** | 47.78 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT888 (čierne) | 23.90 € | **23.50 €** | 9.8 % | **7.9 %** | 23.78 € | cena podľa najlacnejšieho iného predajcu |
| Tefal D5292072 Lívanečník Pancake time | 21.90 € | **21.50 €** | 11.2 % | **9.2 %** | 21.80 € | cena podľa najlacnejšieho iného predajcu |
| ETA Nubela 2569 90100, bílý | 28.90 € | **28.50 €** | 59.0 % | **56.8 %** | 28.81 € | cena podľa najlacnejšieho iného predajcu |
| COLMI G06 Inteligentné okuliare Čierne | 39.90 € | **39.50 €** | 22.8 % | **21.6 %** | 39.85 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 1,5 m ... | 28.90 € | **28.50 €** | 39.4 % | **37.5 %** | 28.87 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Prasátko Peppa | 22.90 € | **22.50 €** | 10.1 % | **8.2 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110P 2x LAN s PoE, 8x LAN ... | 27.90 € | **27.50 €** | 8.0 % | **6.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **16.00 €** | 28.7 % | **25.6 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 29.2 % | **26.0 %** | 11.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Drevená 3D LED vianočná dekorácia v ráme Solight 1V3... | 10.00 € | **9.80 €** | 39.0 % | **36.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Brake Pedal Performance Upgrade Kit Moza Racing SR-P... | 34.00 € | **33.90 €** | 15.1 % | **14.7 %** | 33.91 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 37.00 € | **36.90 €** | 6.9 % | **6.6 %** | 36.95 € | cena podľa najlacnejšieho iného predajcu |
| 2 v 1 Diagnostic Scanner OBD2 and Battery Tester Anc... | 51.00 € | **50.90 €** | 23.0 % | **22.7 %** | 50.96 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V200 | 33.00 € | **32.90 €** | 18.1 % | **17.8 %** | 32.96 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C960 HD | 21.00 € | **20.90 €** | 19.9 % | **19.3 %** | 20.97 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 435C | 17.00 € | **16.90 €** | 31.3 % | **30.5 %** | 16.98 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma na riasy ANLAN 08-AJMJ31-02A | 18.00 € | **17.90 €** | 25.8 % | **25.1 %** | 17.98 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na okolie očí a pier EMS ANLAN 08-A... | 18.00 € | **17.90 €** | 23.1 % | **22.4 %** | 17.98 € | cena podľa najlacnejšieho iného predajcu |
| TELESIN Univerzálny držiak na rúrku riadidiel pre šp... | 18.00 € | **17.90 €** | 28.5 % | **27.8 %** | 17.98 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 33.00 € | **32.90 €** | 7.2 % | **6.9 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 135 | 47.00 € | **46.90 €** | 9.3 % | **9.1 %** | 46.99 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **24.90 €** | 13.9 % | **13.5 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bambusový lampáš s LED žiarovkou, teplá biel... | 5.40 € | **5.30 €** | 11.1 % | **9.1 %** | 5.32 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les a jeleň Solight 1V223-A,... | 5.40 € | **5.30 €** | 36.8 % | **34.2 %** | 5.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.40 € | **4.30 €** | 13.9 % | **11.3 %** | 4.39 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.00 € | **12.90 €** | 6.3 % | **5.5 %** | 12.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 9.60 € | **9.50 €** | 20.3 % | **19.0 %** | 9.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.80 € | **3.70 €** | 34.3 % | **30.8 %** | 3.80 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 138.00 € | **137.90 €** | 15.6 % | **15.5 %** | 137.97 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBG-603S2R s 3 horákmi | 109.00 € | **108.90 €** | 22.6 % | **22.4 %** | 108.99 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 3601 | 95.00 € | **94.90 €** | 9.1 % | **8.9 %** | 95.00 € | cena podľa najlacnejšieho iného predajcu |

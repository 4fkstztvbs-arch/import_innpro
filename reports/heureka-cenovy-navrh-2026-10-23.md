# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-23

Vstup: `premiumstore-sk_2026-10-23_21-36.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6133**
- Návrh **zvýšiť** cenu: **155** produktov
- Návrh **znížiť** cenu: **369** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5609** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **20**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **291**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (155)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **956.90 €** | 6.0 % | **43.8 %** | 957.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 28.0 % | **44.3 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **888.90 €** | 29.5 % | **43.8 %** | 889.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **328.90 €** | 6.1 % | **44.2 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 290 MK II 200/250 Ohm | 355.50 € | **432.90 €** | 5.1 % | **28.0 %** | 433.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 40.8 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **548.50 €** | 6.0 % | **19.8 %** | 548.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 48.6 % | **72.6 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 49.1 % | **73.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 49.1 % | **72.2 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 604.00 € | **650.00 €** | 15.0 % | **23.8 %** | 650.46 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 869.90 € | **914.00 €** | 14.6 % | **20.4 %** | 914.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **818.90 €** | 35.5 % | **43.2 %** | 819.00 € | cena podľa najlacnejšieho iného predajcu |
| Beyerdynamic MMX 200, čierne | 199.00 € | **237.50 €** | 15.0 % | **37.2 %** | 237.69 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 293.15 € | **328.90 €** | 26.5 % | **42.0 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **328.50 €** | 6.1 % | **18.9 %** | 328.75 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **226.00 €** | 6.1 % | **25.2 %** | 226.04 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 27.9 % | **43.2 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **303.00 €** | 6.2 % | **19.3 %** | 303.42 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 208.50 € | **238.90 €** | 15.1 % | **31.9 %** | 238.91 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 117A | 233.00 € | **263.00 €** | 10.0 % | **24.2 %** | 263.20 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.50 € | **83.50 €** | 15.3 % | **73.4 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 6.3 % | **32.1 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **222.00 €** | 6.1 % | **21.1 %** | 222.17 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **218.00 €** | 6.2 % | **19.0 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 298.50 € | **321.90 €** | 7.1 % | **15.5 %** | 321.96 € | cena podľa najlacnejšieho iného predajcu |
| TELESIN neckband for sports cameras and phones | 12.50 € | **31.50 €** | 16.4 % | **193.4 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 132.22 € | **146.90 €** | 29.4 % | **43.8 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 33.5 % | **65.0 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 37.7 % | **69.7 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 71.90 € | **84.00 €** | 15.3 % | **34.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Candy CIFC6647CCBB | 176.50 € | **187.00 €** | 5.2 % | **11.5 %** | 187.38 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 29.90 € | **40.00 €** | 6.2 % | **42.1 %** | 40.25 € | cena podľa najlacnejšieho iného predajcu |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 128.90 € | **138.90 €** | 45.2 % | **56.5 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **256.90 €** | 38.4 % | **43.9 %** | 257.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **146.90 €** | 49.6 % | **60.0 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 6.9 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **124.00 €** | 6.2 % | **14.6 %** | 124.42 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 48.0 % | **81.4 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 56.7 % | **92.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75TKBXC | 69.90 € | **78.90 €** | 10.6 % | **24.8 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové osvetlenie PGY Magnetic Pocket Fill Light | 19.00 € | **27.90 €** | 14.6 % | **68.3 %** | 27.95 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 205.50 € | **214.00 €** | 6.1 % | **10.5 %** | 214.13 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.00 €** | 6.3 % | **16.8 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **78.50 €** | 6.7 % | **18.8 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 159.00 € | **167.00 €** | 6.1 % | **11.4 %** | 167.45 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **136.90 €** | 35.4 % | **43.5 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 35.1 % | **45.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Waterproof housing diving case PULUZ for DJI Osmo Po... | 30.90 € | **37.90 €** | 15.0 % | **41.0 %** | 37.92 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 30.4 % | **44.9 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 317.00 € | **323.50 €** | 5.9 % | **8.1 %** | 323.60 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **39.00 €** | 7.2 % | **28.6 %** | 39.42 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 45.5 % | **79.4 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 38.90 € | **45.00 €** | 7.0 % | **23.7 %** | 45.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **55.00 €** | 6.1 % | **19.3 %** | 55.08 € | cena podľa najlacnejšieho iného predajcu |
| AMICA Hluboký pečící plech (9045756) | 22.90 € | **28.90 €** | 10.5 % | **39.4 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 101.00 € | **107.00 €** | 12.0 % | **18.6 %** | 107.40 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 98.50 € | **104.00 €** | 14.2 % | **20.6 %** | 104.34 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (béžové) | 98.50 € | **104.00 €** | 21.3 % | **28.1 %** | 104.34 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 600D | 130.50 € | **135.50 €** | 16.2 % | **20.6 %** | 135.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **126.50 €** | 26.2 % | **30.9 %** | 126.83 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 127.50 € | **132.00 €** | 12.8 % | **16.8 %** | 132.18 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 41.6 % | **48.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **141.50 €** | 28.8 % | **32.6 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 151.50 € | **155.50 €** | 6.0 % | **8.8 %** | 155.70 € | cena podľa najlacnejšieho iného predajcu |
| Fixed MagPad, bílá FIXMPAD2-WH | 11.50 € | **15.50 €** | 11.8 % | **50.7 %** | 15.86 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.50 €** | 6.5 % | **13.9 %** | 55.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **138.90 €** | 36.1 % | **39.7 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 31.2 % | **43.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 208.50 € | **212.00 €** | 6.0 % | **7.7 %** | 212.17 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Superfire TF02 | 63.50 € | **67.00 €** | 14.4 % | **20.7 %** | 67.21 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **78.90 €** | 6.5 % | **11.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 34.1 % | **48.9 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED 2 skla SG A57 5G FIXGFADA-1703-BK | 9.80 € | **13.00 €** | 10.8 % | **47.0 %** | 13.37 € | cena podľa najlacnejšieho iného predajcu |
| Petoneer NutriVue smart food dispenser with camera | 65.90 € | **69.00 €** | 15.2 % | **20.6 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare COLMI V03 s okrúhlymi ... | 51.50 € | **54.50 €** | 7.0 % | **13.2 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus DC1 mini orbitrek | 159.00 € | **162.00 €** | 18.5 % | **20.7 %** | 162.48 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 27.3 % | **30.1 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **37.50 €** | 49.2 % | **60.5 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **24.00 €** | 14.8 % | **28.2 %** | 24.15 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Pixy | 81.50 € | **84.00 €** | 14.8 % | **18.3 %** | 84.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Melobuds A30 (čierne) | 29.00 € | **31.50 €** | 14.7 % | **24.6 %** | 31.75 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Flytec V900 12000mah | 16.00 € | **18.50 €** | 15.3 % | **33.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **106.90 €** | 35.1 % | **38.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 44.4 % | **49.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Glox FM19B bezdotykový dávkovač pěnového | 34.90 € | **37.00 €** | 10.4 % | **17.1 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Glox FM19W bezdotykový dávkovač pěnového | 34.90 € | **37.00 €** | 10.4 % | **17.1 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro (čierny) | 128.00 € | **130.00 €** | 12.0 % | **13.7 %** | 130.48 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva Petoneer Nutri Mini | 48.90 € | **50.50 €** | 14.9 % | **18.7 %** | 50.90 € | cena podľa najlacnejšieho iného predajcu |
| Selfie tyč Puluz pre športové fotoaparáty (DJI Actio... | 12.90 € | **14.50 €** | 15.1 % | **29.4 %** | 14.72 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **864.50 €** | 37.3 % | **37.6 %** | 864.75 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXKE2201E | 36.50 € | **37.90 €** | 48.5 % | **54.2 %** | 37.96 € | cena podľa najlacnejšieho iného predajcu |
| Termotransferová fólia HTVRONT Pure, 30,5 cm × 1,8 m... | 4.40 € | **5.70 €** | 15.0 % | **49.0 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10115 MyToast, bílý | 18.90 € | **20.00 €** | 11.4 % | **17.9 %** | 20.37 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 37.5 % | **45.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **41.00 €** | 30.6 % | **34.0 %** | 41.13 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Travel 7x50 | 53.90 € | **54.90 €** | 5.2 % | **7.1 %** | 54.95 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H27BE(3-pack) WiFi... | 210.90 € | **211.90 €** | 14.1 % | **14.6 %** | 212.00 € | cena podľa najlacnejšieho iného predajcu |
| Telesin magnetic mount for sports cameras | 13.90 € | **14.90 €** | 16.4 % | **24.8 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Neptune 4 Max | 392.00 € | **393.00 €** | 8.1 % | **8.4 %** | 393.19 € | cena podľa najlacnejšieho iného predajcu |
| Sluchátka Bluetooth KRUGER & MATZ Street 3 Wireless ... | 33.00 € | **34.00 €** | 3.1 % | **6.2 %** | 34.25 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 27.50 € | **28.50 €** | 6.2 % | **10.0 %** | 28.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 28.50 € | **29.50 €** | 43.2 % | **48.2 %** | 29.85 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 15.50 € | **16.50 €** | 10.8 % | **18.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 41.9 % | **45.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU3941WBW | 358.00 € | **358.90 €** | 5.1 % | **5.3 %** | 359.00 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **173.00 €** | 42.0 % | **42.6 %** | 173.08 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 38.0 % | **41.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér OTG USB-C na Lightning Puluz PU649B | 3.10 € | **3.80 €** | 15.6 % | **41.7 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **136.00 €** | 36.2 % | **36.9 %** | 136.13 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.70 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50D2V0 | 15.90 € | **16.50 €** | 11.1 % | **15.2 %** | 16.80 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **38.00 €** | 31.8 % | **33.9 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.00 € | **18.50 €** | 26.3 % | **29.8 %** | 18.52 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife AD020 magnetický hliníkový adaptér pre Ins... | 15.00 € | **15.50 €** | 14.7 % | **18.5 %** | 15.55 € | cena podľa najlacnejšieho iného predajcu |
| Selfie stick TELESIN with ball head for action cameras | 14.50 € | **15.00 €** | 16.5 % | **20.5 %** | 15.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 63.00 € | **63.50 €** | 16.0 % | **17.0 %** | 63.59 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.00 € | **35.50 €** | 14.7 % | **16.3 %** | 35.59 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 89.00 € | **89.50 €** | 19456.1 % | **19566.0 %** | 89.59 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 160.00 € | **160.50 €** | 19.4 % | **19.7 %** | 160.59 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **126.00 €** | 15.2 % | **15.6 %** | 126.19 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI DI20 DI-box | 21.00 € | **21.50 €** | 15.0 % | **17.7 %** | 21.70 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG894A25 | 467.50 € | **468.00 €** | 11.6 % | **11.7 %** | 468.22 € | cena podľa najlacnejšieho iného predajcu |
| Kolečka pro kancelářskou židli Ruhhy 25280 | 13.50 € | **14.00 €** | 18.4 % | **22.8 %** | 14.24 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife DZ-144 Držiak | 14.50 € | **15.00 €** | 14.8 % | **18.7 %** | 15.25 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 38 Ah  Victron Energy AGM Sup... | 124.50 € | **125.00 €** | 12.1 % | **12.6 %** | 125.26 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 104.00 € | **104.50 €** | 10.1 % | **10.7 %** | 104.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 150.00 € | **150.50 €** | 17.4 % | **17.8 %** | 150.79 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **23.00 €** | 33.4 % | **36.1 %** | 23.21 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 88.50 € | **88.90 €** | 13.5 % | **14.0 %** | 88.99 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 112.50 € | **112.90 €** | 7.5 % | **7.8 %** | 113.00 € | cena podľa najlacnejšieho iného predajcu |
| Laica VT3514 | 4.40 € | **4.80 €** | 11.1 % | **21.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **44.90 €** | 34.1 % | **35.0 %** | 45.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **57.50 €** | 33.8 % | **34.1 %** | 57.58 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 32.90 € | **33.00 €** | 6.9 % | **7.2 %** | 33.09 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les a jeleň Solight 1V223-A,... | 5.30 € | **5.40 €** | 34.2 % | **36.8 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.40 €** | 11.3 % | **13.9 %** | 4.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, 20 - 200A | 6.40 € | **6.50 €** | 33.8 % | **35.8 %** | 6.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.40 € | **9.50 €** | 26.9 % | **28.3 %** | 9.59 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBG-603S2R s 3 horákmi | 108.90 € | **109.00 €** | 22.4 % | **22.6 %** | 109.08 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 130.90 € | **131.00 €** | 14.6 % | **14.7 %** | 131.29 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (369)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Smartring RingConn Gen 2 (veľkosť 6, strieborná) | 416.90 € | **275.50 €** | 89.5 % | **25.2 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **849.90 €** | 31.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **539.90 €** | 31.8 % | **18.7 %** | 540.00 € | cena podľa najlacnejšieho iného predajcu |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **241.50 €** | 42.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor BlitzWolf BW-V11 | 375.15 € | **322.00 €** | 36.1 % | **16.8 %** | 322.19 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **259.50 €** | 35.4 % | **12.4 %** | 259.79 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **175.00 €** | 47.6 % | **14.5 %** | 175.08 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **260.50 €** | 28.9 % | **8.5 %** | 260.55 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **228.90 €** | 28.0 % | **6.7 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **307.50 €** | 37.5 % | **20.6 %** | 307.73 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **158.50 €** | 35.0 % | **7.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **259.50 €** | 27.9 % | **10.5 %** | 259.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **636.90 €** | 49.7 % | **41.2 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TR256A | 370.02 € | **338.00 €** | 24.2 % | **13.4 %** | 338.07 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **106.00 €** | 54.0 % | **18.9 %** | 106.49 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **269.00 €** | 41.1 % | **26.4 %** | 269.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **326.90 €** | 34.2 % | **22.6 %** | 327.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **269.90 €** | 40.8 % | **26.6 %** | 269.92 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **270.00 €** | 40.8 % | **26.6 %** | 270.04 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 123.00 € | **92.90 €** | 52.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **135.50 €** | 47.0 % | **20.7 %** | 135.69 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **156.00 €** | 30.5 % | **9.8 %** | 156.30 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **285.50 €** | 26.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **170.90 €** | 51.3 % | **29.4 %** | 170.96 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **187.00 €** | 38.7 % | **20.5 %** | 187.46 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **343.50 €** | 51.5 % | **40.6 %** | 343.58 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 244.98 € | **219.00 €** | 43.5 % | **28.3 %** | 219.21 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.90 €** | 41.9 % | **9.3 %** | 87.00 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **118.00 €** | 38.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **189.50 €** | 37.3 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **189.90 €** | 37.0 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 41.4 % | **10.2 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 44.4 % | **12.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **164.00 €** | 27.9 % | **13.1 %** | 164.05 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **58.90 €** | 56.5 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED svietidlo NEEWER APC100C | 300.33 € | **280.50 €** | 50.4 % | **40.5 %** | 280.63 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **64.00 €** | 73.9 % | **34.9 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.50 €** | 36.4 % | **11.2 %** | 81.70 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **54.50 €** | 53.1 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.50 €** | 44.7 % | **16.9 %** | 72.79 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **90.90 €** | 24.7 % | **5.3 %** | 89.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **75.90 €** | 28.2 % | **5.5 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **30.90 €** | 76.3 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion HS611 | 91.23 € | **75.00 €** | 39.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **94.00 €** | 62.7 % | **39.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **110.00 €** | 35.4 % | **19.1 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **65.00 €** | 41.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **39.90 €** | 58.6 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 70.9 % | **20.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **75.00 €** | 42.1 % | **18.8 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **236.00 €** | 36.0 % | **28.4 %** | 236.39 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **61.50 €** | 28.3 % | **5.5 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **52.00 €** | 43.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **69.50 €** | 73.9 % | **46.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 120" projection screen. | 64.00 € | **51.00 €** | 115.0 % | **71.3 %** | 51.07 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **127.50 €** | 24.7 % | **13.2 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.50 €** | 46.0 % | **13.2 %** | 44.69 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **38.50 €** | 53.4 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **57.50 €** | 40.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Blitzwolf BW-V12 | 274.70 € | **262.00 €** | 47.2 % | **40.4 %** | 262.38 € | cena podľa najlacnejšieho iného predajcu |
| Freewell FujiX100 filter set with lens hood (silver) | 66.11 € | **53.50 €** | 42.2 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **123.00 €** | 39.9 % | **27.2 %** | 123.26 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 134.28 € | **122.50 €** | 36.1 % | **24.1 %** | 122.57 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **138.90 €** | 51.2 % | **39.4 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **40.50 €** | 49.5 % | **15.8 %** | 40.89 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **45.90 €** | 44.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 32.8 % | **17.6 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **101.50 €** | 48.7 % | **33.9 %** | 101.79 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 54.8 % | **44.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 59.1 % | **48.1 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 53.3 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **189.50 €** | 42.5 % | **35.1 %** | 189.88 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **210.00 €** | 41.7 % | **35.0 %** | 210.42 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.50 €** | 33.7 % | **21.6 %** | 102.64 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 123.5 % | **44.1 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **116.90 €** | 35.6 % | **24.8 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **77.00 €** | 45.2 % | **28.3 %** | 77.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný pohybový senzor MEROSS MS605MAT-EU | 39.98 € | **30.00 €** | 40.6 % | **5.5 %** | 30.30 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **66.50 €** | 68.8 % | **47.0 %** | 66.67 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **228.00 €** | 36.3 % | **30.7 %** | 228.17 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **32.90 €** | 48.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa DarkFlash F1 ATX + 6 ventilátorov ... | 114.00 € | **104.50 €** | 17.7 % | **7.9 %** | 104.73 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **65.50 €** | 21.0 % | **5.9 %** | 65.59 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.00 €** | 40.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **53.50 €** | 40.6 % | **20.4 %** | 53.63 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell ND32 do Real Locking VND | 45.00 € | **36.00 €** | 77.7 % | **42.1 %** | 36.50 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell UV do Real Locking VND | 45.00 € | **36.00 €** | 77.7 % | **42.1 %** | 36.50 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.00 €** | 45.9 % | **6.2 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **58.90 €** | 25.7 % | **10.3 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **82.00 €** | 42.9 % | **30.0 %** | 82.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **59.00 €** | 46.0 % | **28.3 %** | 59.17 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 54.00 € | **45.90 €** | 31.5 % | **11.8 %** | 45.95 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 231.50 € | **223.50 €** | 22.6 % | **18.4 %** | 223.60 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **92.00 €** | 23.2 % | **13.4 %** | 92.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 53.8 % | **19.2 %** | 27.27 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **67.00 €** | 36.0 % | **21.8 %** | 67.38 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **42.00 €** | 40.9 % | **19.1 %** | 42.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **62.00 €** | 48.1 % | **31.7 %** | 62.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 50.1 % | **42.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **39.50 €** | 58.3 % | **32.6 %** | 39.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **55.00 €** | 37.6 % | **21.0 %** | 55.46 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **75.00 €** | 21.0 % | **10.0 %** | 75.26 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.50 €** | 45.0 % | **17.9 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **215.00 €** | 45.2 % | **40.4 %** | 215.42 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **22.50 €** | 51.2 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **63.00 €** | 32.3 % | **18.7 %** | 63.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **92.90 €** | 31.4 % | **22.2 %** | 92.92 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **117.00 €** | 29.1 % | **21.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.50 €** | 51.3 % | **6.4 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **30.50 €** | 52.3 % | **24.1 %** | 30.59 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **22.90 €** | 50.0 % | **15.6 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **20.50 €** | 79.4 % | **35.4 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **143.00 €** | 41.1 % | **34.8 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.50 €** | 29.9 % | **11.6 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **16.00 €** | 84.6 % | **31.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 85.50 € | **79.00 €** | 21.3 % | **12.1 %** | 79.07 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2014401 Zmrzlinovač | 179.50 € | **173.00 €** | 11.7 % | **7.7 %** | 173.14 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **32.50 €** | 41.6 % | **18.2 %** | 32.58 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE MO 4250 CLI | 135.90 € | **129.50 €** | 10.3 % | **5.1 %** | 107.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **131.00 €** | 40.7 % | **34.2 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.50 €** | 21.7 % | **13.6 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **129.00 €** | 35.0 % | **28.7 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **21.00 €** | 79.4 % | **38.7 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 52.7 % | **45.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **118.90 €** | 49.0 % | **41.7 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **13.90 €** | 54.0 % | **7.1 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **13.90 €** | 84.7 % | **28.4 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **58.50 €** | 25.1 % | **13.3 %** | 58.71 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **17.50 €** | 77.8 % | **32.0 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 59.3 % | **14.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **28.90 €** | 43.7 % | **19.1 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 52.6 % | **43.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **148.90 €** | 46.2 % | **40.6 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 51.2 % | **43.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **69.00 €** | 43.9 % | **32.7 %** | 69.17 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **69.00 €** | 28.7 % | **18.6 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **169.50 €** | 46.8 % | **41.9 %** | 169.88 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **86.50 €** | 21.8 % | **14.2 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.50 €** | 29.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **16.90 €** | 55.2 % | **16.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **41.50 €** | 38.7 % | **22.1 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **17.00 €** | 65.2 % | **24.5 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 42.7 % | **35.2 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 64.50 € | **59.00 €** | 16.8 % | **6.9 %** | 59.36 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **34.50 €** | 61.2 % | **39.1 %** | 34.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **34.50 €** | 28.3 % | **10.7 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **32.00 €** | 43.8 % | **23.0 %** | 32.33 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 106.90 € | **101.50 €** | 27.3 % | **20.8 %** | 101.84 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **69.50 €** | 55.5 % | **44.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **69.50 €** | 19.2 % | **10.7 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 46.7 % | **22.7 %** | 27.27 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **47.00 €** | 35.4 % | **21.7 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **107.50 €** | 30.8 % | **24.7 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 45.3 % | **19.8 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **24.50 €** | 40.2 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **22.00 €** | 70.5 % | **38.1 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.00 €** | 37.2 % | **22.3 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.00 €** | 35.9 % | **21.1 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.90 €** | 52.5 % | **46.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 37.6 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 38.3 % | **9.6 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 39.7 % | **28.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **17.50 €** | 74.4 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **17.50 €** | 74.4 % | **35.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.50 €** | 30.9 % | **15.4 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| CANON PIXMA TS7550i White | 110.50 € | **105.50 €** | 10.4 % | **5.4 %** | 78.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY WHCH730 sluchátka černá | 109.90 € | **104.90 €** | 10.4 % | **5.4 %** | 96.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Graef SKS 10022 | 140.00 € | **135.00 €** | 11.7 % | **7.7 %** | 135.22 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **75.00 €** | 33.5 % | **25.2 %** | 75.08 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.50 €** | 22.6 % | **6.5 %** | 31.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **69.90 €** | 41.8 % | **32.5 %** | 69.99 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi TV Box S (3rd Gen) EU | 100.90 € | **96.00 €** | 10.4 % | **5.0 %** | 72.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 55.90 € | **51.00 €** | 15.3 % | **5.2 %** | 50.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.50 €** | 25.1 % | **6.6 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **27.50 €** | 66.0 % | **41.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 36.4 % | **14.7 %** | 25.41 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **19.90 €** | 47.6 % | **19.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **105.00 €** | 29.4 % | **23.9 %** | 105.14 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **21.50 €** | 65.3 % | **35.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **60.00 €** | 33.6 % | **24.1 %** | 60.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 41.1 % | **11.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 40.6 % | **11.1 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 39.8 % | **33.6 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.00 €** | 41.0 % | **5.2 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 62.9 % | **21.5 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **28.00 €** | 38.9 % | **20.4 %** | 28.46 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.90 €** | 31.8 % | **11.1 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **88.00 €** | 35.9 % | **29.6 %** | 88.41 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 61.8 % | **38.8 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **23.00 €** | 39.8 % | **18.4 %** | 23.42 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **20.50 €** | 47.6 % | **23.0 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **40.50 €** | 28.8 % | **17.0 %** | 40.63 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 33.1 % | **9.2 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.00 €** | 30.6 % | **18.1 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **58.50 €** | 50.1 % | **40.5 %** | 58.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.00 €** | 43.3 % | **14.7 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 41.8 % | **13.5 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **36.00 €** | 35.4 % | **21.9 %** | 36.46 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **46.00 €** | 49.7 % | **38.5 %** | 46.17 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **86.00 €** | 45.8 % | **39.8 %** | 86.02 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **24.00 €** | 61.9 % | **40.4 %** | 24.46 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.50 €** | 21.7 % | **5.3 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **63.50 €** | 32.6 % | **25.4 %** | 63.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **21.00 €** | 43.4 % | **22.4 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **21.00 €** | 62.7 % | **38.9 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **33.90 €** | 43.6 % | **30.1 %** | 33.92 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 218.50 € | **215.00 €** | 7.7 % | **5.9 %** | 215.15 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 146.50 € | **143.00 €** | 8.9 % | **6.3 %** | 143.15 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 43.6 % | **18.5 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.50 €** | 26.6 % | **15.6 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **138.00 €** | 37.6 % | **34.2 %** | 138.21 € | cena podľa najlacnejšieho iného predajcu |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 103.90 € | **100.50 €** | 15.1 % | **11.3 %** | 100.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.00 €** | 41.2 % | **12.0 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.27 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **134.00 €** | 49.7 % | **46.0 %** | 134.33 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **23.90 €** | 39.4 % | **22.7 %** | 23.92 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **26.50 €** | 45.7 % | **29.9 %** | 26.52 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 35.9 % | **21.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 46.0 % | **39.3 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **24.50 €** | 56.9 % | **38.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 50.0 % | **43.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.50 €** | 37.9 % | **21.1 %** | 22.67 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **21.50 €** | 38.0 % | **20.6 %** | 21.58 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **21.50 €** | 50.7 % | **31.7 %** | 21.71 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 330.50 € | **327.50 €** | 6.9 % | **5.9 %** | 327.87 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 19.99 € | **17.00 €** | 58.4 % | **34.7 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **16.00 €** | 56.1 % | **31.7 %** | 16.17 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **16.00 €** | 59.8 % | **34.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 40.7 % | **17.1 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper ABS (sivý) | 17.43 € | **14.50 €** | 40.2 % | **16.6 %** | 14.86 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **15.00 €** | 58.4 % | **32.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier QR30 (čierne) | 100.90 € | **98.00 €** | 15.1 % | **11.8 %** | 98.12 € | cena podľa najlacnejšieho iného predajcu |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 46.2 % | **20.3 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 47.0 % | **21.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 57.40 € | **54.50 €** | 31.8 % | **25.1 %** | 54.62 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.00 €** | 41.3 % | **14.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **114.00 €** | 36.4 % | **33.1 %** | 114.04 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **30.00 €** | 35.2 % | **23.7 %** | 30.35 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **47.00 €** | 32.6 % | **25.3 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **47.00 €** | 32.3 % | **25.0 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **67.00 €** | 31.5 % | **26.4 %** | 67.21 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 60.0 % | **44.3 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.90 €** | 24.1 % | **9.5 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **64.50 €** | 40.6 % | **35.1 %** | 64.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.00 €** | 23.0 % | **9.1 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **20.00 €** | 44.2 % | **27.9 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **40.00 €** | 44.0 % | **35.4 %** | 40.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **10.00 €** | 42.7 % | **14.2 %** | 10.10 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 330.00 € | **327.50 €** | 7.9 % | **7.1 %** | 327.86 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **13.90 €** | 52.6 % | **29.3 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.50 €** | 43.7 % | **25.8 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **17.50 €** | 59.5 % | **39.6 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.6 % | **10.1 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.0 % | **9.6 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **15.00 €** | 60.3 % | **38.0 %** | 15.33 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.50 €** | 44.9 % | **25.3 %** | 15.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **7.50 €** | 44.2 % | **9.3 %** | 7.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 17.90 € | **15.50 €** | 68.0 % | **45.5 %** | 15.56 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **95.00 €** | 36.8 % | **33.5 %** | 95.38 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.50 €** | 34.1 % | **12.8 %** | 12.57 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 46.4 % | **23.2 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 59.6 % | **34.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.00 € | **8.70 €** | 37.8 % | **9.0 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **24.90 €** | 26.3 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **166.90 €** | 46.9 % | **45.0 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **47.50 €** | 48.9 % | **42.3 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **47.50 €** | 43.9 % | **37.5 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR CD3 | 49.72 € | **47.50 €** | 46.9 % | **40.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **25.00 €** | 36.8 % | **25.9 %** | 25.37 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 20.3 % | **10.1 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 46.4 % | **42.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.90 € | **60.90 €** | 9.1 % | **5.6 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PIXMA TS3752i Blue | 47.90 € | **45.90 €** | 10.1 % | **5.5 %** | 37.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko VRT96425VD | 262.50 € | **260.50 €** | 7.0 % | **6.2 %** | 260.51 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10000 Top Ceramic | 45.00 € | **43.00 €** | 20.2 % | **14.8 %** | 43.06 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 17.50 € | **15.50 €** | 25.0 % | **10.7 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **17.00 €** | 37.2 % | **22.7 %** | 17.11 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester Ancel BA201 8-16V DC | 54.00 € | **52.00 €** | 25.4 % | **20.8 %** | 52.48 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 27.7 % | **15.0 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 57.3 % | **41.7 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **17.00 €** | 55.6 % | **39.5 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.00 €** | 34.0 % | **20.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **15.50 €** | 28.0 % | **13.8 %** | 15.85 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **35.50 €** | 43.8 % | **36.5 %** | 35.63 € | cena podľa najlacnejšieho iného predajcu |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.00 €** | 34.1 % | **17.3 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 56.7 % | **35.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **53.00 €** | 38.6 % | **34.0 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **22.90 €** | 36.2 % | **26.8 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny zvuku Habotest HT602B | 25.12 € | **23.50 €** | 23.8 % | **15.8 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **23.00 €** | 43.5 % | **34.1 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 37.4 % | **27.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový ovládač GoSat GS7056 HDi | 16.50 € | **15.00 €** | 15.8 % | **5.3 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **178.90 €** | 45.0 % | **43.8 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 42.00 € | **40.50 €** | 25.5 % | **21.0 %** | 40.70 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW5558E0 | 166.00 € | **164.50 €** | 6.9 % | **5.9 %** | 164.74 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 42.50 € | **41.00 €** | 9.8 % | **5.9 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 43.8 % | **33.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 45.2 % | **34.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **17.50 €** | 26.7 % | **16.9 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 48.2 % | **36.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.90 € | **22.50 €** | 11.5 % | **5.0 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Silverlit Robot Blast black od Silverlit | 28.90 € | **27.50 €** | 14.6 % | **9.0 %** | 27.80 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **28.50 €** | 40.5 % | **34.7 %** | 28.58 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **248.90 €** | 43.6 % | **42.9 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 49.1 % | **42.5 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **63.50 €** | 34.7 % | **32.4 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 51.5 % | **44.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 400.90 € | **399.90 €** | 6.3 % | **6.0 %** | 400.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 644.90 € | **643.90 €** | 116413.1 % | **116232.4 %** | 644.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 11.50 € | **10.50 €** | 19.6 % | **9.2 %** | 10.78 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V65 Smartwatch (Gray) | 31.50 € | **30.50 €** | 16.7 % | **13.0 %** | 30.88 € | cena podľa najlacnejšieho iného predajcu |
| CANON PG-545BK Black | 16.90 € | **15.90 €** | 11.7 % | **5.1 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **59.00 €** | 31.1 % | **29.0 %** | 59.08 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **156.90 €** | 46.2 % | **45.3 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 49.0 % | **41.1 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **16.50 €** | 46.8 % | **39.0 %** | 16.75 € | cena podľa najlacnejšieho iného predajcu |
| Myš bezdrátová REBEL WM500 | 13.90 € | **13.00 €** | 18.3 % | **10.7 %** | 13.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **14.00 €** | 51.0 % | **42.3 %** | 14.29 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 42.9 % | **41.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 52.3 % | **51.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.50 €** | 26.6 % | **18.3 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 41.5 % | **41.0 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1018900 Pákový kávovar | 123.50 € | **122.90 €** | 8.6 % | **8.1 %** | 122.94 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **20.50 €** | 41.4 % | **38.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Ovládač PXN-P5 8K | 32.50 € | **32.00 €** | 12.0 % | **10.2 %** | 32.09 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 vrecká 20 x 30 cm 100 ks | 14.00 € | **13.50 €** | 11.9 % | **7.9 %** | 13.78 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 24.00 € | **23.50 €** | 12.3 % | **10.0 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Vzdelávací robot xTool mBot Ranger | 195.00 € | **194.50 €** | 19.8 % | **19.5 %** | 194.83 € | cena podľa najlacnejšieho iného predajcu |
| Doplnok xTool Smart World pre mBot2 | 79.00 € | **78.50 €** | 10.1 % | **9.4 %** | 78.87 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 931.00 € | **930.50 €** | 10.0 % | **9.9 %** | 930.89 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 260.50 € | **260.00 €** | 6.9 % | **6.7 %** | 260.39 € | cena podľa najlacnejšieho iného predajcu |
| Kaon MZ-52, satelitní přijímač Skylink | 62.00 € | **61.50 €** | 11.0 % | **10.1 %** | 61.89 € | cena podľa najlacnejšieho iného predajcu |
| Kaon MZ-52, satelitní přijímač Skylink | 62.00 € | **61.50 €** | 11.0 % | **10.1 %** | 61.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 72.00 € | **71.50 €** | 23.7 % | **22.9 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 606.50 € | **606.00 €** | 5.6 % | **5.5 %** | 606.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **19.50 €** | 44.9 % | **41.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **225.00 €** | 45.0 % | **44.6 %** | 225.42 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Sada dětského nářadí KIDS 12 SIXTOL | 23.50 € | **23.00 €** | 13.7 % | **11.3 %** | 23.43 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.50 € | **14.00 €** | 17.1 % | **13.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **18.50 €** | 33.3 % | **30.0 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 39.2 % | **38.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **16.50 €** | 42.8 % | **39.3 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.70 € | **8.30 €** | 74.6 % | **66.6 %** | 8.32 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer TX1800U Nano Adaptér | 20.90 € | **20.50 €** | 11.9 % | **9.8 %** | 20.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight ochranný box na káble a predlžovacie prívody... | 18.90 € | **18.50 €** | 60.4 % | **57.0 %** | 18.74 € | cena podľa najlacnejšieho iného predajcu |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.90 € | **31.50 €** | 16.0 % | **14.6 %** | 31.86 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **16.00 €** | 28.7 % | **25.6 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS062 svorka volantu pre stôl | 54.90 € | **54.50 €** | 18.3 % | **17.4 %** | 54.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **14.00 €** | 42.5 % | **39.0 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **33.00 €** | 33.0 % | **31.8 %** | 33.29 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **32.00 €** | 33.2 % | **32.0 %** | 32.17 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **45.90 €** | 33.0 % | **32.3 %** | 45.92 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WA801N AP/AP Client, WDS, 1x ... | 21.00 € | **20.90 €** | 5.8 % | **5.3 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.90 € | **7.80 €** | 48.0 % | **46.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |

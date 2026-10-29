# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-29

Vstup: `premiumstore-sk_2026-10-29_07-03.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6109**
- Návrh **zvýšiť** cenu: **348** produktov
- Návrh **znížiť** cenu: **567** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5194** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **38**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **318**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (348)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **956.90 €** | 6.0 % | **43.8 %** | 957.00 € | cena podľa najlacnejšieho iného predajcu |
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **788.90 €** | 28.0 % | **44.3 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **888.90 €** | 29.5 % | **43.8 %** | 889.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1622USB mixpult s USB a efektmi | 195.00 € | **280.00 €** | 15.0 % | **65.1 %** | 280.02 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 230.00 € | **312.50 €** | 15.0 % | **56.3 %** | 312.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer PMP1680S mixer amplifier whit effect proce... | 320.00 € | **393.50 €** | 15.0 % | **41.4 %** | 393.74 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **312.00 €** | 10.8 % | **43.0 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **368.90 €** | 40.8 % | **73.0 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **548.50 €** | 6.0 % | **19.8 %** | 548.88 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 165.00 € | **226.00 €** | 15.0 % | **57.5 %** | 226.27 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10, 64GB (biely) | 206.00 € | **263.00 €** | 9.8 % | **40.1 %** | 263.10 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10, 64GB (čierny) | 206.00 € | **263.00 €** | 9.8 % | **40.1 %** | 263.10 € | cena podľa najlacnejšieho iného predajcu |
| Smartring EVEN REALITIES R1, veľkosť 13 | 284.00 € | **333.50 €** | 13.7 % | **33.6 %** | 333.71 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet SmartCam C960 Ultra | 78.00 € | **126.90 €** | 14.7 % | **86.7 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **348.90 €** | 48.6 % | **72.6 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **348.90 €** | 49.1 % | **73.3 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V70 Dynamický mikrofón | 199.00 € | **247.00 €** | 15.0 % | **42.7 %** | 247.46 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **346.90 €** | 49.1 % | **72.2 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 873.00 € | **918.00 €** | 15.0 % | **20.9 %** | 918.25 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **818.90 €** | 35.5 % | **43.2 %** | 819.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 829.50 € | **870.00 €** | 18.7 % | **24.5 %** | 870.20 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 310.00 € | **350.00 €** | 15.0 % | **29.8 %** | 350.29 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 208.50 € | **248.00 €** | 15.1 % | **36.9 %** | 248.30 € | cena podľa najlacnejšieho iného predajcu |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 463.00 € | **502.00 €** | 7.7 % | **16.8 %** | 502.19 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **349.00 €** | 15.0 % | **28.0 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu MOVA P10 | 440.50 € | **475.50 €** | 9.9 % | **18.6 %** | 475.79 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER SF120Q 120 cm parabolický softbox | 102.00 € | **137.00 €** | 14.8 % | **54.2 %** | 137.35 € | cena podľa najlacnejšieho iného predajcu |
| LED lampa NEEWER AP150C 150 W | 292.90 € | **327.00 €** | 23.8 % | **38.2 %** | 327.42 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **316.90 €** | 29.5 % | **45.1 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 817.50 € | **849.90 €** | 8.9 % | **13.2 %** | 850.00 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-285H Intel Core Ultra 9 2... | 700.50 € | **732.50 €** | 10.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **278.90 €** | 30.7 % | **45.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.50 € | **83.50 €** | 15.3 % | **73.4 %** | 83.52 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **143.50 €** | 6.3 % | **32.1 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **219.00 €** | 6.1 % | **21.3 %** | 219.13 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **222.00 €** | 6.1 % | **21.1 %** | 222.17 € | cena podľa najlacnejšieho iného predajcu |
| Behringer X Air XR16 Digital Mixer | 309.90 € | **336.50 €** | 5.1 % | **14.2 %** | 336.63 € | cena podľa najlacnejšieho iného predajcu |
| Neewer SRP18-2.4G 46 cm LED kruhové svetlo | 106.50 € | **132.00 €** | 15.1 % | **42.7 %** | 132.23 € | cena podľa najlacnejšieho iného predajcu |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **294.00 €** | 6.2 % | **15.8 %** | 294.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **135.00 €** | 27.6 % | **55.7 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **218.00 €** | 6.2 % | **19.0 %** | 218.50 € | cena podľa najlacnejšieho iného predajcu |
| OBSBOT Tiny 3 MIC Combo | 460.00 € | **480.00 €** | 8.4 % | **13.1 %** | 480.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV A17 Pro Max (čierny) | 124.50 € | **143.00 €** | 15.1 % | **32.2 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV A17 Pro Max (strieborný) | 124.50 € | **143.00 €** | 15.1 % | **32.2 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| VITURE Pro 256 GB nákrčník | 427.50 € | **443.00 €** | 15.0 % | **19.2 %** | 443.33 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **76.00 €** | 33.5 % | **65.0 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **77.00 €** | 37.7 % | **69.7 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **188.90 €** | 35.1 % | **45.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **107.50 €** | 6.2 % | **18.3 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 213.00 € | **224.00 €** | 14.2 % | **20.1 %** | 224.13 € | cena podľa najlacnejšieho iného predajcu |
| Projektor AURZEN Boom Mini Black | 238.50 € | **249.50 €** | 17.8 % | **23.3 %** | 249.69 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Boom Mini projektor | 238.50 € | **249.50 €** | 9.5 % | **14.6 %** | 249.69 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R15B2-EU | 241.00 € | **251.90 €** | 17.0 % | **22.3 %** | 252.00 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **31.50 €** | 38.5 % | **102.8 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **146.90 €** | 49.6 % | **60.0 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **89.50 €** | 30.9 % | **46.6 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **116.90 €** | 32.4 % | **43.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesková hlava GODOX BD-10 AD300PRO | 26.90 € | **36.00 €** | 15.0 % | **53.9 %** | 36.40 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **48.00 €** | 6.9 % | **31.9 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **124.00 €** | 6.2 % | **14.6 %** | 124.42 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **49.00 €** | 48.0 % | **81.4 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **49.00 €** | 56.7 % | **92.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Neewer R06 s okrúhlym LED osvetlením pre sel... | 21.50 € | **30.50 €** | 14.5 % | **62.4 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **40.50 €** | 6.1 % | **36.4 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 333.00 € | **342.00 €** | 7.5 % | **10.5 %** | 342.44 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **95.00 €** | 6.3 % | **16.8 %** | 95.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **78.00 €** | 23.0 % | **38.0 %** | 78.25 € | cena podľa najlacnejšieho iného predajcu |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **78.50 €** | 6.7 % | **18.8 %** | 78.88 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3WFU4841MCC | 422.00 € | **429.90 €** | 5.0 % | **7.0 %** | 430.00 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **136.90 €** | 35.4 % | **43.5 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny statív PGYTECH MANTISPOD Z | 39.50 € | **47.00 €** | 6.2 % | **26.4 %** | 47.25 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R12 20,8MM 11 (čierny) | 35.50 € | **43.00 €** | 14.8 % | **39.0 %** | 43.43 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **99.50 €** | 35.1 % | **45.8 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **69.50 €** | 20.1 % | **33.5 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Dual 2026 – palubná kamera | 106.50 € | **113.00 €** | 15.2 % | **22.3 %** | 113.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight Wave+Curl Co-anda difuzér pre Dyson Airwrap | 25.00 € | **31.50 €** | 14.2 % | **43.9 %** | 31.75 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS EDIFIER X5 Pro (modré) | 29.00 € | **35.50 €** | 14.8 % | **40.5 %** | 35.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 18.9MM 9 (Złoty) | 27.00 € | **33.50 €** | 14.8 % | **42.4 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| popruh na fotoaparát PGYTECH Pocket-Series | 27.50 € | **34.00 €** | 15.4 % | **42.7 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **33.50 €** | 45.5 % | **79.4 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 48.90 € | **55.00 €** | 6.1 % | **19.3 %** | 55.08 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 226.90 € | **232.90 €** | 6.7 % | **9.5 %** | 232.99 € | cena podľa najlacnejšieho iného predajcu |
| Prísavný držiak PGYTECH pre športové kamery (P-GM-223) | 32.50 € | **38.50 €** | 6.2 % | **25.8 %** | 38.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 59.00 € | **65.00 €** | 35.9 % | **49.7 %** | 65.18 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát PGYTECH Pocket-Series (fialový) | 27.50 € | **33.50 €** | 15.4 % | **40.6 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 102.00 € | **107.90 €** | 8.3 % | **14.6 %** | 108.00 € | cena podľa najlacnejšieho iného predajcu |
| Nerezová fontána / napájačka pre psov a mačky 2l Rojeco | 24.00 € | **29.50 €** | 15.0 % | **41.4 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (biela) | 176.50 € | **181.90 €** | 10.0 % | **13.3 %** | 181.96 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (čierny) | 176.50 € | **181.90 €** | 10.0 % | **13.3 %** | 181.96 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BPS6737E04DBG | 398.90 € | **404.00 €** | 5.6 % | **6.9 %** | 404.50 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát PGYTECH Pocket-Series (zelený) | 20.90 € | **26.00 €** | 15.2 % | **43.3 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| WMF Konvice Stelio 1,7L Paper Grey | 66.90 € | **72.00 €** | 10.6 % | **19.0 %** | 72.24 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Ultima Nova C40 | 286.50 € | **291.50 €** | 9.5 % | **11.4 %** | 291.69 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER BASICS N12 Mini blesk | 20.50 € | **25.50 €** | 16.0 % | **44.3 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické LED svietidlo NEEWER BL60C | 19.50 € | **24.50 €** | 14.3 % | **43.6 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát PGY Pocket-Series (fialový) | 20.90 € | **25.50 €** | 15.2 % | **40.6 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **35.50 €** | 18.8 % | **36.0 %** | 35.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **46.50 €** | 19.0 % | **31.7 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 14.50 € | **19.00 €** | 37.9 % | **80.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **94.00 €** | 41.6 % | **48.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 137.35 € | **141.50 €** | 15.9 % | **19.4 %** | 141.67 € | cena podľa najlacnejšieho iného predajcu |
| Kompaktný statív Neewer TP02 pre fotoaparáty a telefóny | 20.90 € | **25.00 €** | 15.8 % | **38.5 %** | 25.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 26.90 € | **31.00 €** | 36.0 % | **56.7 %** | 31.46 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG2PS72A12 | 214.50 € | **218.50 €** | 7.0 % | **9.0 %** | 218.55 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9079KR-PROMO | 284.00 € | **288.00 €** | 7.1 % | **8.6 %** | 288.10 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG D57 Kondenzátorový mikrofón | 179.00 € | **183.00 €** | 15.0 % | **17.6 %** | 183.13 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 216.00 € | **220.00 €** | 14.3 % | **16.4 %** | 220.13 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 216.00 € | **220.00 €** | 14.3 % | **16.4 %** | 220.13 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus A8 electric pump | 33.50 € | **37.50 €** | 14.6 % | **28.3 %** | 37.82 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC 20100 W | 63.00 € | **67.00 €** | 17.4 % | **24.8 %** | 67.41 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **55.50 €** | 6.5 % | **13.9 %** | 55.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **25.50 €** | 36.1 % | **58.5 %** | 25.60 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát PGY z radu Pocket-Series | 16.90 € | **20.50 €** | 15.1 % | **39.6 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Pásik na ruku PGY (zelený) | 16.90 € | **20.50 €** | 15.9 % | **40.6 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 78.90 € | **82.50 €** | 8.6 % | **13.6 %** | 82.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **41.00 €** | 31.2 % | **43.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 64.00 € | **67.50 €** | 5.1 % | **10.8 %** | 67.67 € | cena podľa najlacnejšieho iného predajcu |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **78.90 €** | 6.5 % | **11.3 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **33.00 €** | 34.1 % | **48.9 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **35.50 €** | 29.4 % | **42.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na fotoaparát PGY Pocket-Series (čierny) | 16.90 € | **20.00 €** | 15.1 % | **36.2 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Pásik na ruku PGY (čierny) | 16.90 € | **20.00 €** | 15.9 % | **37.2 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Pásik na ruku PGYTECH Pocket (fialový) | 16.90 € | **20.00 €** | 15.9 % | **37.2 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| SONY WFC710N White | 84.90 € | **87.90 €** | 5.1 % | **8.9 %** | 88.00 € | cena podľa najlacnejšieho iného predajcu |
| SONY WFC710N Pink | 84.90 € | **87.90 €** | 5.1 % | **8.9 %** | 88.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 224.00 € | **227.00 €** | 13.3 % | **14.8 %** | 227.20 € | cena podľa najlacnejšieho iného predajcu |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 127.10 € | **129.90 €** | 26.5 % | **29.3 %** | 129.99 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **13.50 €** | 9.5 % | **35.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny rámik Arzopa D10 10,1" (tmavohnedý) | 72.90 € | **75.50 €** | 15.2 % | **19.3 %** | 75.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 12.00 € | **14.50 €** | 14.0 % | **37.7 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST9100 | 33.50 € | **36.00 €** | 6.6 % | **14.6 %** | 36.10 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI MINI Pro 2K palubná kamera | 39.50 € | **42.00 €** | 14.9 % | **22.2 %** | 42.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Melobuds A30 (čierne) | 29.00 € | **31.50 €** | 14.7 % | **24.6 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 339.50 € | **342.00 €** | 5.1 % | **5.9 %** | 342.44 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **35.00 €** | 7.2 % | **15.4 %** | 35.46 € | cena podľa najlacnejšieho iného predajcu |
| Držiak športovej kamery na riadidlá PGYTECH (P-GM-171) | 33.50 € | **36.00 €** | 9.2 % | **17.3 %** | 36.47 € | cena podľa najlacnejšieho iného predajcu |
| Smart LED vianočný stromček Solight 1V301, 1,5 m, RG... | 34.90 € | **37.00 €** | 44.9 % | **53.6 %** | 37.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 26.90 € | **29.00 €** | 36.0 % | **46.6 %** | 29.21 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **59.50 €** | 44.4 % | **49.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Blackview 60 Pro LTE Blue | 168.50 € | **170.50 €** | 9.1 % | **10.4 %** | 170.51 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2022E1 | 34.50 € | **36.50 €** | 5.4 % | **11.5 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Prieskumná baterka Superfire M9-E – 900 lm, 473 m, 6... | 21.50 € | **23.50 €** | 14.8 % | **25.5 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač krmiva PETKIT Fresh Element SOLO, 3 l | 73.00 € | **74.90 €** | 6.7 % | **9.5 %** | 74.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 9.30 € | **11.00 €** | 10.1 % | **30.2 %** | 11.39 € | cena podľa najlacnejšieho iného predajcu |
| Set of 5 Filters Sunnylife ND 8/16/32/64/128 for DJI... | 18.90 € | **20.50 €** | 9.4 % | **18.7 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V299, 7 m, ... | 28.90 € | **30.50 €** | 44.5 % | **52.5 %** | 30.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **11.50 €** | 25.6 % | **45.9 %** | 11.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **21.00 €** | 36.8 % | **47.3 %** | 21.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 24.00 € | **25.50 €** | 29.6 % | **37.8 %** | 25.57 € | cena podľa najlacnejšieho iného predajcu |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.50 € | **11.00 €** | 5.2 % | **21.8 %** | 11.10 € | cena podľa najlacnejšieho iného predajcu |
| Tesla Cook BBQ100 | 68.50 € | **70.00 €** | 10.3 % | **12.7 %** | 70.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.00 € | **33.50 €** | 31.2 % | **37.3 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 205.50 € | **207.00 €** | 6.1 % | **6.9 %** | 207.28 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 26.00 € | **27.50 €** | 5.5 % | **11.6 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight batériová kamera WiFi so solárnym panelom | 58.50 € | **60.00 €** | 34.7 % | **38.1 %** | 60.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 5m | 7.50 € | **8.90 €** | 35.8 % | **61.2 %** | 8.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 4.90 € | **6.30 €** | 7.4 % | **38.1 %** | 6.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight axiálny ventilátor s časovačom | 16.50 € | **17.90 €** | 37.6 % | **49.3 %** | 17.99 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon P1 | 649.50 € | **650.90 €** | 17.2 % | **17.4 %** | 650.99 € | cena podľa najlacnejšieho iného predajcu |
| Termotransferová fólia HTVRONT Pure, 30,5 cm × 1,8 m... | 4.40 € | **5.70 €** | 15.0 % | **49.0 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Sati Hansi Doux et Suave 1000g zrno | 21.90 € | **23.00 €** | 11.6 % | **17.2 %** | 23.10 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo FF0700A | 17.90 € | **19.00 €** | 10.2 % | **17.0 %** | 19.10 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **17.50 €** | 28.7 % | **37.3 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Alligator 3079B | 40.90 € | **42.00 €** | 10.7 % | **13.6 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Etui na batérii Sunnylife Mini 5 Pro (na 2 batérie) | 4.70 € | **5.80 €** | 15.8 % | **42.9 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 92.90 € | **94.00 €** | 10.5 % | **11.8 %** | 94.46 € | cena podľa najlacnejšieho iného predajcu |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **19.00 €** | 37.5 % | **45.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.00 € | **37.00 €** | 37.9 % | **41.8 %** | 37.03 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro SG A35 5G FIXOP3-1262-BK | 11.00 € | **12.00 €** | 14.4 % | **24.8 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 33.50 € | **34.50 €** | 43.3 % | **47.5 %** | 34.59 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 172.50 € | **173.50 €** | 11.4 % | **12.1 %** | 173.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 6.60 € | **7.60 €** | 24.2 % | **43.0 %** | 7.70 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 151.90 € | **152.90 €** | 8.1 % | **8.8 %** | 153.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 290 MK II 200/250 Ohm | 430.90 € | **431.90 €** | 27.4 % | **27.7 %** | 432.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 45.50 € | **46.50 €** | 10.2 % | **12.6 %** | 46.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **27.00 €** | 40.0 % | **45.4 %** | 27.16 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 503.50 € | **504.50 €** | 8.7 % | **8.9 %** | 504.68 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 14.50 € | **15.50 €** | 36.6 % | **46.0 %** | 15.69 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 159.50 € | **160.50 €** | 19.0 % | **19.7 %** | 160.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.00 € | **26.00 €** | 37.2 % | **42.7 %** | 26.20 € | cena podľa najlacnejšieho iného predajcu |
| Behringer MU1000 music stand | 28.50 € | **29.50 €** | 13.0 % | **17.0 %** | 29.70 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 887.50 € | **888.50 €** | 20.1 % | **20.3 %** | 888.75 € | cena podľa najlacnejšieho iného predajcu |
| Solight axiálny ventilátor | 12.50 € | **13.50 €** | 36.0 % | **46.9 %** | 13.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 22.00 € | **23.00 €** | 30.2 % | **36.1 %** | 23.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **16.00 €** | 26.6 % | **35.1 %** | 16.36 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 12.50 € | **13.50 €** | 51.0 % | **63.1 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 203.50 € | **204.50 €** | 13.8 % | **14.3 %** | 204.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **12.50 €** | 10.1 % | **19.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 6 filtrov Freewell Bright Day pre DJI Flip | 37.50 € | **38.50 €** | 30.5 % | **33.9 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 41.00 € | **42.00 €** | 5.9 % | **8.5 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **43.50 €** | 41.9 % | **45.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter CPL Freewell Osmo Pocket 4P | 19.00 € | **19.90 €** | 5.8 % | **10.8 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.70 € | **5.50 €** | 33.1 % | **55.8 %** | 5.56 € | cena podľa najlacnejšieho iného predajcu |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **30.50 €** | 38.0 % | **41.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 9.20 € | **9.90 €** | 36.7 % | **47.1 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.50 € | **9.20 €** | 36.6 % | **47.8 %** | 9.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 9.80 € | **10.50 €** | 31.9 % | **41.3 %** | 10.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna PRO+,T8, 18W, 2520lm, ... | 16.90 € | **17.50 €** | 44.6 % | **49.8 %** | 17.53 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell O... | 17.90 € | **18.50 €** | 7.1 % | **10.7 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 22.90 € | **23.50 €** | 32.6 % | **36.1 %** | 23.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 7.70 € | **8.30 €** | 36.4 % | **47.0 %** | 8.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.60 €** | 33.8 % | **53.9 %** | 4.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.60 €** | 11.4 % | **28.1 %** | 4.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 3.50 € | **4.10 €** | 34.2 % | **57.2 %** | 4.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 13.90 € | **14.50 €** | 41.3 % | **47.4 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Zapichovacie LED snehové vločky Solight 1V281, 15 LE... | 9.40 € | **10.00 €** | 44.2 % | **53.4 %** | 10.10 € | cena podľa najlacnejšieho iného predajcu |
| Štandardná živica Anycubic (čierna) | 10.90 € | **11.50 €** | 15.2 % | **21.6 %** | 11.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight ventilátor do kúpeľne | 12.90 € | **13.50 €** | 6.8 % | **11.8 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 115.90 € | **116.50 €** | 22882.4 % | **23001.3 %** | 116.59 € | cena podľa najlacnejšieho iného predajcu |
| Filters ND8/16/32 Freewell for DJI Neo | 18.97 € | **19.50 €** | 26.7 % | **30.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená LED vianočná guľa Solight 1V204, 10 LED, 2 ... | 3.90 € | **4.40 €** | 26.8 % | **43.1 %** | 4.46 € | cena podľa najlacnejšieho iného predajcu |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.70 €** | 34.6 % | **47.6 %** | 5.71 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-DC24PL3C-L 2.4 Mpix venkovní dome kamera 4v1 ... | 50.00 € | **50.50 €** | 15.7 % | **16.8 %** | 50.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB A+C 20 W fast charger | 6.30 € | **6.80 €** | 34.8 % | **45.5 %** | 6.82 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533W1-EU (biela) | 98.00 € | **98.50 €** | 14.8 % | **15.3 %** | 98.52 € | cena podľa najlacnejšieho iného predajcu |
| Masážní přístroj šíje a zad, REBEL ACTIVE RBA-6005 | 32.00 € | **32.50 €** | 5.4 % | **7.1 %** | 32.53 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.00 € | **71.50 €** | 16.5 % | **17.3 %** | 71.53 € | cena podľa najlacnejšieho iného predajcu |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 32.00 € | **32.50 €** | 5.4 % | **7.1 %** | 32.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.10 € | **6.60 €** | 35.9 % | **47.0 %** | 6.64 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.00 € | **15.50 €** | 42.6 % | **47.4 %** | 15.55 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 247.00 € | **247.50 €** | 31.0 % | **31.3 %** | 247.55 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 319.50 € | **320.00 €** | 29.6 % | **29.8 %** | 320.05 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.00 € | **116.50 €** | 17.4 % | **17.9 %** | 116.56 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 262.50 € | **263.00 €** | 22.8 % | **23.0 %** | 263.07 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.00 € | **12.50 €** | 41.0 % | **46.9 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.00 € | **12.50 €** | 41.0 % | **46.9 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.00 € | **105.50 €** | 18.6 % | **19.2 %** | 105.58 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 59.00 € | **59.50 €** | 6.9 % | **7.8 %** | 59.58 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBG-603S2R s 3 horákmi | 108.50 € | **109.00 €** | 22.0 % | **22.6 %** | 109.08 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 339.00 € | **339.50 €** | 23.9 % | **24.1 %** | 339.59 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 81.00 € | **81.50 €** | 7.1 % | **7.8 %** | 81.59 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 32.50 € | **33.00 €** | 5.6 % | **7.2 %** | 33.09 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 63.00 € | **63.50 €** | 16.0 % | **17.0 %** | 63.59 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.00 € | **35.50 €** | 15.1 % | **16.8 %** | 35.59 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 33.00 € | **33.50 €** | 6.9 % | **8.5 %** | 33.59 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 89.00 € | **89.50 €** | 19999.4 % | **20112.3 %** | 89.59 € | cena podľa najlacnejšieho iného predajcu |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 59.00 € | **59.50 €** | 18.5 % | **19.5 %** | 59.59 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.00 € | **104.50 €** | 20.9 % | **21.4 %** | 104.59 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.30 € | **8.80 €** | 66.6 % | **76.7 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.00 € | **41.50 €** | 10.6 % | **11.9 %** | 41.63 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.00 € | **166.50 €** | 15.3 % | **15.6 %** | 166.64 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 250.50 € | **251.00 €** | 16.7 % | **16.9 %** | 251.15 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.00 € | **12.50 €** | 31.0 % | **36.4 %** | 12.66 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S AI | 54.50 € | **55.00 €** | 17.5 % | **18.6 %** | 55.16 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **126.00 €** | 15.2 % | **15.6 %** | 126.19 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 127.50 € | **128.00 €** | 12.8 % | **13.2 %** | 128.20 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 218.00 € | **218.50 €** | 13.9 % | **14.1 %** | 218.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.00 € | **25.50 €** | 34.2 % | **36.9 %** | 25.73 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 502.00 € | **502.50 €** | 8.0 % | **8.1 %** | 502.73 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 502.00 € | **502.50 €** | 22.7 % | **22.8 %** | 502.73 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočný stromček Solight 1V238, 45 cm, 15 LED, ... | 14.00 € | **14.50 €** | 37.5 % | **42.4 %** | 14.77 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 242.00 € | **242.50 €** | 16.8 % | **17.1 %** | 242.77 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 242.00 € | **242.50 €** | 14.1 % | **14.3 %** | 242.77 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 53.00 € | **53.50 €** | 10.9 % | **11.9 %** | 53.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **47.50 €** | 35.9 % | **37.3 %** | 47.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 11.50 € | **12.00 €** | 36.1 % | **42.0 %** | 12.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 12.50 € | **13.00 €** | 36.2 % | **41.7 %** | 13.38 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 36.50 € | **37.00 €** | 59.2 % | **61.4 %** | 37.38 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 130.50 € | **131.00 €** | 14.3 % | **14.7 %** | 131.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 150.00 € | **150.50 €** | 17.4 % | **17.8 %** | 150.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 28.00 € | **28.50 €** | 42.5 % | **45.0 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED dekorácia – zvončeky Solight 1V289, 55... | 12.50 € | **13.00 €** | 44.2 % | **49.9 %** | 13.44 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **17.00 €** | 38.0 % | **42.2 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-WW, 20 m, ... | 14.50 € | **15.00 €** | 44.5 % | **49.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 104.55 € | **105.00 €** | 35.1 % | **35.7 %** | 105.04 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.50 € | **137.90 €** | 15.2 % | **15.5 %** | 137.94 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.50 € | **108.90 €** | 7.8 % | **8.2 %** | 108.97 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 88.50 € | **88.90 €** | 13.5 % | **14.0 %** | 88.99 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 71.50 € | **71.90 €** | 22.9 % | **23.6 %** | 71.99 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 82.50 € | **82.90 €** | 25.8 % | **26.4 %** | 82.99 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 112.50 € | **112.90 €** | 7.8 % | **8.2 %** | 113.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.50 € | **14.90 €** | 43.8 % | **47.7 %** | 14.92 € | cena podľa najlacnejšieho iného predajcu |
| Drevení LED anjeli Solight 1V219, biela farba, 2 × AA | 5.30 € | **5.70 €** | 42.7 % | **53.4 %** | 5.73 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **12.90 €** | 42.7 % | **47.3 %** | 12.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **5.00 €** | 34.0 % | **45.7 %** | 5.08 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s hviezdami Solight 1V52-WW, 1,5 ... | 1.80 € | **2.20 €** | 14.3 % | **39.7 %** | 2.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.50 € | **3.90 €** | 31.1 % | **46.1 %** | 3.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **3.60 €** | 34.1 % | **50.9 %** | 3.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C 20 W fast charger | 5.40 € | **5.80 €** | 34.7 % | **44.6 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 5.70 € | **6.10 €** | 36.7 % | **46.3 %** | 6.16 € | cena podľa najlacnejšieho iného predajcu |
| Laica VT3514 | 4.40 € | **4.80 €** | 11.1 % | **21.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní předfiltr GARNI PF 45T | 21.50 € | **21.90 €** | 31.7 % | **34.2 %** | 21.91 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 8x42 monokulárny | 26.50 € | **26.90 €** | 22.8 % | **24.7 %** | 26.91 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 36.50 € | **36.90 €** | 5.4 % | **6.6 %** | 36.95 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR C3 Carrying Case for Quest 3 | 46.50 € | **46.90 €** | 33.3 % | **34.4 %** | 46.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight stolná lampa Falun, E27, biela | 29.50 € | **29.90 €** | 32.6 % | **34.4 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.50 € | **16.90 €** | 21.5 % | **24.5 %** | 16.99 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 18.50 € | **18.90 €** | 5.4 % | **7.7 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.50 € | **52.90 €** | 8.9 % | **9.7 %** | 52.99 € | cena podľa najlacnejšieho iného predajcu |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 20.50 € | **20.90 €** | 16.3 % | **18.6 %** | 20.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 19.50 € | **19.90 €** | 5.6 % | **7.8 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND32/PL | 19.50 € | **19.90 €** | 5.6 % | **7.8 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezpečnostná zátka - sada 5ks+1 kľúčik | 1.50 € | **1.80 €** | 29.7 % | **55.7 %** | 1.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.70 € | **3.00 €** | 34.7 % | **49.6 %** | 3.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB nabíjací adaptér, 1x USB, 2400mA, AC 230... | 4.50 € | **4.80 €** | 36.0 % | **45.1 %** | 4.82 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.00 € | **3.30 €** | 36.3 % | **49.9 %** | 3.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.60 € | **3.90 €** | 30.1 % | **40.9 %** | 3.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 4.90 € | **5.20 €** | 35.0 % | **43.3 %** | 5.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.50 € | **3.80 €** | 33.6 % | **45.0 %** | 3.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.20 € | **4.50 €** | 36.0 % | **45.8 %** | 4.57 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s drevenými hviezdami Solight 1V2... | 4.50 € | **4.80 €** | 42.9 % | **52.4 %** | 4.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **5.00 €** | 34.5 % | **43.1 %** | 5.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.40 € | **1.60 €** | 26.5 % | **44.5 %** | 1.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.40 € | **1.60 €** | 18.6 % | **35.5 %** | 1.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.40 € | **1.60 €** | 32.4 % | **51.3 %** | 1.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.50 € | **7.70 €** | 35.5 % | **39.1 %** | 7.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.40 € | **1.60 €** | 51.8 % | **73.4 %** | 1.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.50 € | **2.70 €** | 32.8 % | **43.5 %** | 2.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.90 €** | 44.2 % | **48.0 %** | 7.99 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná krajinka s domčekom Solight 1V264, 18 c... | 6.60 € | **6.80 €** | 44.2 % | **48.6 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.60 € | **2.80 €** | 32.9 % | **43.2 %** | 2.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.40 € | **6.60 €** | 39.9 % | **44.2 %** | 6.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.50 €** | 34.3 % | **37.2 %** | 9.57 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka lítiových batérií SkyRC Type35 2–4S | 12.82 € | **13.00 €** | 40.5 % | **42.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 334.90 € | **335.00 €** | 22.7 % | **22.7 %** | 335.39 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-TC51PL3C-L-V2 5.0 Mpix venkovní kamera 4v1 s ... | 56.90 € | **57.00 €** | 16.8 % | **17.1 %** | 57.02 € | cena podľa najlacnejšieho iného predajcu |
| Matt for litter box Baymax / Baymax Lite Catlink CL-... | 24.90 € | **25.00 €** | 5.9 % | **6.3 %** | 25.02 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC410 KIT 3MPx, vonkajšia, I... | 59.90 € | **60.00 €** | 5.5 % | **5.7 %** | 60.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.00 €** | 5.5 % | **5.8 %** | 44.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.90 € | **18.00 €** | 46.6 % | **47.4 %** | 18.07 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.90 € | **52.00 €** | 6.0 % | **6.2 %** | 52.09 € | cena podľa najlacnejšieho iného predajcu |
| MOES UFO-R2-RF Wi-Fi RF IR ovládač | 16.90 € | **17.00 €** | 16.2 % | **16.9 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 60.90 € | **61.00 €** | 8.2 % | **8.4 %** | 61.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 26.90 € | **27.00 €** | 34.3 % | **34.8 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 18W... | 5.10 € | **5.20 €** | 44.0 % | **46.8 %** | 5.24 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED dekorácia – les a jeleň Solight 1V223-A,... | 5.30 € | **5.40 €** | 34.2 % | **36.8 %** | 5.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.40 €** | 11.3 % | **13.9 %** | 4.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight bambusový lampáš s LED žiarovkou, teplá biel... | 5.30 € | **5.40 €** | 9.1 % | **11.1 %** | 5.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.00 € | **2.10 €** | 41.4 % | **48.5 %** | 2.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight prepojovací konektor flexibilný pre COB LED ... | 1.90 € | **2.00 €** | 44.4 % | **52.0 %** | 2.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.00 € | **3.10 €** | 35.5 % | **40.0 %** | 3.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradné trubičky pre alkohol tester Solight... | 1.60 € | **1.70 €** | 30.1 % | **38.2 %** | 1.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka priama, IP20, biela | 1.30 € | **1.40 €** | 30.5 % | **40.5 %** | 1.47 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.20 € | **2.30 €** | 43.1 % | **49.6 %** | 2.31 € | cena podľa najlacnejšieho iného predajcu |
| Banquet Sada mléč. s cukř. LAV, 4d | 11.90 € | **12.00 €** | 11.7 % | **12.7 %** | 12.08 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 12.90 € | **13.00 €** | 5.5 % | **6.3 %** | 13.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.40 € | **9.50 €** | 26.9 % | **28.3 %** | 9.59 € | cena podľa najlacnejšieho iného predajcu |
| Pletená stolová LED vianočná hviezda Solight 1V268, ... | 5.70 € | **5.80 €** | 44.4 % | **46.9 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vypínač Slim č. 7 krížový, biely | 4.70 € | **4.80 €** | 36.0 % | **38.9 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 5.70 € | **5.80 €** | 35.5 % | **37.9 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 93.90 € | **94.00 €** | 17.6 % | **17.8 %** | 94.05 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iT30Pro pre Olympus | 72.90 € | **73.00 €** | 20.4 % | **20.6 %** | 73.07 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 76.90 € | **77.00 €** | 17.2 % | **17.4 %** | 77.07 € | cena podľa najlacnejšieho iného predajcu |
| Triple monitor mount 17-32" Huanuo HNTS3B-UK | 92.90 € | **93.00 €** | 20.1 % | **20.2 %** | 93.09 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603-Outdoor vonkajší AP, AX18... | 121.90 € | **122.00 €** | 6.0 % | **6.1 %** | 122.15 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C675D KIT 2× 2K, vonkajšia, IP P... | 211.90 € | **212.00 €** | 5.9 % | **6.0 %** | 212.18 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.43 € | **17.50 €** | 28.0 % | **28.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (567)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **529.00 €** | 49.7 % | **17.3 %** | 529.25 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 943.00 € | **808.00 €** | 33.8 % | **14.7 %** | 808.46 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **849.90 €** | 31.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 31.8 % | **8.3 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BM201SG3DBG | 368.90 € | **280.90 €** | 41.9 % | **8.1 %** | 281.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **778.00 €** | 37.3 % | **23.8 %** | 778.21 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **292.00 €** | 51.5 % | **19.5 %** | 292.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 305.90 € | **233.00 €** | 44.0 % | **9.7 %** | 233.20 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **305.00 €** | 36.1 % | **10.6 %** | 305.09 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP800IIIV | 387.00 € | **317.90 €** | 42.7 % | **17.3 %** | 317.96 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **281.50 €** | 37.5 % | **10.4 %** | 281.71 € | cena podľa najlacnejšieho iného predajcu |
| Concept IDV5160wh | 417.50 € | **349.50 €** | 27.7 % | **6.9 %** | 349.80 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER APC100C | 300.33 € | **238.00 €** | 50.4 % | **19.2 %** | 238.50 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **254.50 €** | 35.4 % | **10.2 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **241.50 €** | 42.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 341.00 € | **286.00 €** | 32.3 % | **10.9 %** | 286.10 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 415.50 € | **363.50 €** | 38.7 % | **21.4 %** | 363.88 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Blitzwolf BW-V12 | 274.70 € | **223.00 €** | 47.2 % | **19.5 %** | 223.04 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **259.00 €** | 28.9 % | **7.9 %** | 259.41 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **178.50 €** | 47.6 % | **16.8 %** | 178.54 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **153.50 €** | 51.3 % | **16.2 %** | 153.83 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **254.50 €** | 27.9 % | **8.4 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 353.90 € | **308.50 €** | 33.6 % | **16.5 %** | 308.81 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **207.50 €** | 43.6 % | **19.2 %** | 207.71 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 199.88 € | **158.50 €** | 35.0 % | **7.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 225.50 € | **184.50 €** | 45.0 % | **18.6 %** | 184.54 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 11, strieborná) | 300.33 € | **260.00 €** | 41.1 % | **22.2 %** | 260.38 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 13, strieborná) | 300.33 € | **260.50 €** | 40.8 % | **22.2 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 8, zlatá) | 300.33 € | **260.50 €** | 40.8 % | **22.1 %** | 260.88 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **183.00 €** | 45.2 % | **19.5 %** | 183.04 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Soundbar HW-B420F | 105.00 € | **67.00 €** | 68.1 % | **7.2 %** | 67.50 € | cena podľa najlacnejšieho iného predajcu |
| Mobilná dokovacia stanica VITURE Pro | 196.90 € | **159.50 €** | 43.6 % | **16.4 %** | 159.79 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **238.90 €** | 28.0 % | **11.3 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **131.00 €** | 47.0 % | **16.7 %** | 131.21 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **103.50 €** | 54.0 % | **16.0 %** | 103.75 € | cena podľa najlacnejšieho iného predajcu |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **189.00 €** | 41.7 % | **21.5 %** | 189.42 € | cena podľa najlacnejšieho iného predajcu |
| Odsávač pár ISEASY TV1390D4-CC-I2 | 175.28 € | **144.00 €** | 46.8 % | **20.6 %** | 144.29 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **155.00 €** | 30.5 % | **9.1 %** | 155.48 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **124.50 €** | 46.2 % | **17.6 %** | 124.63 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **121.00 €** | 51.2 % | **21.4 %** | 121.38 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **170.50 €** | 42.5 % | **21.5 %** | 170.88 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **285.50 €** | 26.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 258.00 € | **228.90 €** | 18.4 % | **5.0 %** | 216.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic DT 252 80 Ohm | 221.90 € | **192.90 €** | 28.2 % | **11.5 %** | 193.00 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo NEEWER RGB1200 | 215.25 € | **186.50 €** | 43.5 % | **24.4 %** | 186.71 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **329.00 €** | 34.2 % | **23.4 %** | 329.50 € | cena podľa najlacnejšieho iného predajcu |
| Fagor 4LVF-638ADIT | 484.50 € | **455.90 €** | 11.7 % | **5.1 %** | 444.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **81.90 €** | 62.7 % | **21.5 %** | 81.92 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **153.00 €** | 45.0 % | **23.0 %** | 153.50 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **142.00 €** | 46.9 % | **23.3 %** | 142.25 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 41.9 % | **8.8 %** | 86.72 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 247.02 € | **221.50 €** | 38.4 % | **24.1 %** | 221.58 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 172.20 € | **147.00 €** | 42.0 % | **21.2 %** | 147.38 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **57.50 €** | 73.9 % | **21.2 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **57.50 €** | 73.9 % | **21.2 %** | 57.71 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **118.00 €** | 38.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **88.50 €** | 52.1 % | **19.4 %** | 88.54 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 137.35 € | **114.00 €** | 49.7 % | **24.2 %** | 114.21 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **101.90 €** | 49.0 % | **21.4 %** | 102.00 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 272.90 € | **250.00 €** | 18.3 % | **8.4 %** | 250.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.17 € | **189.50 €** | 37.3 % | **22.6 %** | 189.67 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **163.00 €** | 27.9 % | **12.4 %** | 163.50 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 14, zlatá) | 212.17 € | **189.90 €** | 37.0 % | **22.6 %** | 189.96 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **127.50 €** | 41.1 % | **20.2 %** | 127.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 41.4 % | **10.2 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 44.4 % | **12.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDIN38646D | 510.90 € | **489.50 €** | 11.7 % | **7.0 %** | 489.70 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **58.90 €** | 56.5 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blesk Neewer Q6 | 598.90 € | **578.90 €** | 49.5 % | **44.5 %** | 579.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 348.90 € | **328.90 €** | 51.3 % | **42.6 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.45 € | **121.50 €** | 37.6 % | **18.2 %** | 121.54 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **56.50 €** | 68.8 % | **24.9 %** | 56.67 € | cena podľa najlacnejšieho iného predajcu |
| Fagor 4LVF-637ADIT | 458.00 € | **439.00 €** | 11.7 % | **7.0 %** | 439.10 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **118.50 €** | 40.7 % | **21.4 %** | 118.79 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.50 €** | 36.4 % | **11.2 %** | 81.70 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDFN26540WP | 408.90 € | **390.50 €** | 10.1 % | **5.1 %** | 351.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **117.50 €** | 39.9 % | **21.5 %** | 117.63 € | cena podľa najlacnejšieho iného predajcu |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **54.50 €** | 53.1 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa DarkFlash AIRNOVA (čierna) + 3 ven... | 87.12 € | **69.50 €** | 45.2 % | **15.8 %** | 69.75 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta Eco Steam Pro DG9642F0 | 333.50 € | **315.90 €** | 57.3 % | **49.0 %** | 316.00 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 204.00 € | **186.50 €** | 25.8 % | **15.0 %** | 186.69 € | cena podľa najlacnejšieho iného predajcu |
| Beko Mezikus NPSKM | 58.90 € | **41.50 €** | 62.5 % | **14.5 %** | 41.70 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **80.00 €** | 36.8 % | **12.4 %** | 80.43 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.50 €** | 44.7 % | **16.9 %** | 72.79 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6182PS4 | 338.90 € | **321.90 €** | 12.6 % | **7.0 %** | 321.94 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **118.50 €** | 36.1 % | **19.2 %** | 118.83 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **90.90 €** | 24.7 % | **5.3 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **53.00 €** | 48.1 % | **12.6 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **75.90 €** | 28.2 % | **5.5 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **58.50 €** | 43.9 % | **12.5 %** | 58.75 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **30.90 €** | 76.3 % | **15.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Grafický tablet Huion HS611 | 91.23 € | **75.00 €** | 39.6 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava celodenných filtrov Freewell Real Locking s ... | 223.00 € | **207.00 €** | 15.0 % | **6.7 %** | 207.46 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **119.50 €** | 35.0 % | **19.2 %** | 119.79 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **74.50 €** | 45.8 % | **21.1 %** | 74.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný LED pásik YEELIGHT D1 RGBIC, 20 m | 125.05 € | **110.00 €** | 35.4 % | **19.1 %** | 110.21 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6401BCE | 195.50 € | **180.50 €** | 18.3 % | **9.2 %** | 180.70 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **65.00 €** | 41.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **39.90 €** | 58.6 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 116.85 € | **102.00 €** | 36.4 % | **19.1 %** | 102.38 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 70.9 % | **20.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| YEELIGHT D1 RGBIC 10 m inteligentný LED pásik | 89.69 € | **75.00 €** | 42.1 % | **18.8 %** | 75.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) | 58.90 € | **44.50 €** | 56.1 % | **18.0 %** | 44.63 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK418ECB4 | 345.50 € | **331.50 €** | 11.5 % | **7.0 %** | 331.70 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN V3 s AI senzorom (čierny) | 90.20 € | **76.50 €** | 42.9 % | **21.2 %** | 76.88 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 67.13 € | **53.50 €** | 46.0 % | **16.3 %** | 53.79 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **236.50 €** | 36.0 % | **28.6 %** | 236.59 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **113.50 €** | 35.6 % | **21.1 %** | 113.67 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 46.0 % | **11.9 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 49.5 % | **11.2 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D240 WHITE | 74.82 € | **61.50 €** | 28.3 % | **5.5 %** | 61.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 135.30 € | **122.00 €** | 36.2 % | **22.8 %** | 122.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **52.00 €** | 43.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 40.6 % | **11.4 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Sensazione černý | 343.50 € | **330.50 €** | 11.1 % | **6.9 %** | 330.60 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **127.50 €** | 24.7 % | **13.2 %** | 127.71 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **62.00 €** | 41.8 % | **17.5 %** | 62.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **38.50 €** | 53.4 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **57.50 €** | 40.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Niceboy ION Hurricane W9 Wet & Dry | 274.50 € | **261.90 €** | 10.1 % | **5.0 %** | 165.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **50.50 €** | 50.1 % | **21.3 %** | 50.58 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 779.50 € | **767.50 €** | 19.5 % | **17.6 %** | 767.51 € | cena podľa najlacnejšieho iného predajcu |
| Solac LV1301 | 45.50 € | **33.50 €** | 59.2 % | **17.2 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LED800 bílý | 309.50 € | **297.50 €** | 11.1 % | **6.8 %** | 297.77 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **38.00 €** | 55.4 % | **18.8 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **35.50 €** | 58.3 % | **19.2 %** | 35.58 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **55.50 €** | 43.7 % | **18.8 %** | 55.88 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS541C10W | 347.00 € | **335.50 €** | 8.7 % | **5.1 %** | 323.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné okuliare COLMI V03 Okrúhly rám, blokova... | 57.40 € | **45.90 €** | 31.8 % | **5.4 %** | 45.96 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX Litemons LA300R | 454.50 € | **443.00 €** | 12.5 % | **9.6 %** | 443.37 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **45.90 €** | 44.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 32.8 % | **17.6 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Acer Aspire Lite 15 (NX.DRPEC.001) | 534.90 € | **523.50 €** | 7.4 % | **5.1 %** | 362.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMICA MV 447 ADW | 419.00 € | **407.90 €** | 9.9 % | **7.0 %** | 408.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 54.8 % | **44.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R10 Pro (čierny) | 238.00 € | **227.00 €** | 14.9 % | **9.6 %** | 227.20 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool FFS 7469 W EE | 360.00 € | **349.00 €** | 10.1 % | **6.7 %** | 349.22 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 59.1 % | **48.1 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (biela) + 6 ventil... | 74.82 € | **64.00 €** | 36.0 % | **16.4 %** | 64.46 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **81.50 €** | 35.9 % | **20.0 %** | 81.58 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.30 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 53.3 % | **42.1 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Charles i4 Plus White | 112.00 € | **101.50 €** | 22.2 % | **10.8 %** | 101.70 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **39.50 €** | 48.9 % | **18.3 %** | 39.73 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 123.5 % | **44.1 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| ETA 410090000 | 340.00 € | **330.00 €** | 11.1 % | **7.9 %** | 330.20 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT96425VD | 274.00 € | **264.00 €** | 11.7 % | **7.6 %** | 264.40 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash UV360 (čierny) | 258.90 € | **248.90 €** | 44.6 % | **39.1 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný pohybový senzor MEROSS MS605MAT-EU | 39.98 € | **30.00 €** | 40.6 % | **5.5 %** | 30.30 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **103.00 €** | 30.8 % | **19.5 %** | 103.08 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **32.90 €** | 48.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 62.52 € | **53.00 €** | 37.6 % | **16.6 %** | 53.21 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8401SE | 130.50 € | **121.00 €** | 13.3 % | **5.0 %** | 117.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 87.00 € | **77.50 €** | 18.4 % | **5.4 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G1022300 | 142.50 € | **133.00 €** | 16.5 % | **8.7 %** | 133.30 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 79.95 € | **70.50 €** | 33.5 % | **17.7 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| EPSON M1120 | 204.90 € | **195.50 €** | 10.2 % | **5.1 %** | 148.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G1018900 Pákový kávovar | 132.90 € | **123.50 €** | 16.9 % | **8.6 %** | 123.60 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LIB60420CL | 273.90 € | **264.50 €** | 11.7 % | **7.9 %** | 264.80 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.00 €** | 40.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **18.00 €** | 79.4 % | **18.9 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **18.00 €** | 79.4 % | **18.9 %** | 18.42 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8405A | 183.50 € | **174.50 €** | 10.5 % | **5.0 %** | 165.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Black&Decker BXCSH2001E | 92.50 € | **83.50 €** | 16.3 % | **5.0 %** | 79.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GODOX AD-S85S Softbox | 90.50 € | **81.50 €** | 25.5 % | **13.0 %** | 81.71 € | cena podľa najlacnejšieho iného predajcu |
| Girmi IM2101 | 130.50 € | **121.50 €** | 16.7 % | **8.6 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **31.00 €** | 61.2 % | **25.0 %** | 31.08 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **28.50 €** | 52.3 % | **16.0 %** | 28.83 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **66.00 €** | 19.2 % | **5.1 %** | 64.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 49.72 € | **41.00 €** | 40.9 % | **16.2 %** | 41.17 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **101.00 €** | 29.4 % | **19.2 %** | 101.33 € | cena podľa najlacnejšieho iného predajcu |
| Concept ETV8360bcN | 528.00 € | **519.50 €** | 8.8 % | **7.0 %** | 519.60 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 58.50 € | **50.00 €** | 29.2 % | **10.4 %** | 50.17 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **30.50 €** | 41.6 % | **10.9 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **29.00 €** | 43.8 % | **11.5 %** | 29.13 € | cena podľa najlacnejšieho iného predajcu |
| Beko Mezikus PCSKM | 68.90 € | **60.50 €** | 28.0 % | **12.4 %** | 60.80 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **24.00 €** | 66.0 % | **23.4 %** | 24.33 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 134.28 € | **126.00 €** | 21.8 % | **14.3 %** | 126.21 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.00 €** | 45.9 % | **6.2 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu |
| Freewell neutrálny filter ND32 pre OSMO 360 | 67.13 € | **58.90 €** | 25.7 % | **10.3 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **19.00 €** | 70.5 % | **19.3 %** | 19.38 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 267.00 € | **258.90 €** | 10.4 % | **7.0 %** | 258.91 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 64.58 € | **56.50 €** | 33.6 % | **16.9 %** | 56.75 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **14.50 €** | 84.6 % | **18.7 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 21.0 % | **9.2 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Salente Rtx-L7 | 276.00 € | **268.00 €** | 11.1 % | **7.9 %** | 268.20 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC772830 | 226.50 € | **218.50 €** | 11.6 % | **7.7 %** | 218.80 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY85X8F2 | 228.00 € | **220.00 €** | 11.7 % | **7.8 %** | 220.40 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **32.00 €** | 45.0 % | **16.0 %** | 32.13 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 99.94 € | **92.00 €** | 20.8 % | **11.2 %** | 92.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 53.8 % | **19.2 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **47.00 €** | 38.6 % | **18.8 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **230.00 €** | 23.4 % | **19.3 %** | 230.33 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 50.1 % | **42.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **16.00 €** | 77.8 % | **20.7 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 126 | 431.50 € | **424.00 €** | 11.2 % | **9.2 %** | 424.47 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ11 Active (čierny) | 149.90 € | **142.50 €** | 20.2 % | **14.2 %** | 142.79 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.90 €** | 32.3 % | **18.5 %** | 62.95 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **45.00 €** | 35.4 % | **16.6 %** | 45.29 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **22.50 €** | 51.2 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Kapsula Flextail AVS (sivá) | 27.68 € | **20.50 €** | 61.9 % | **19.9 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **19.00 €** | 65.3 % | **20.1 %** | 19.25 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 67.13 € | **60.00 €** | 32.6 % | **18.5 %** | 60.08 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 8571 | 179.00 € | **171.90 €** | 9.5 % | **5.2 %** | 164.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **15.50 €** | 65.2 % | **13.5 %** | 15.63 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **15.50 €** | 74.4 % | **19.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **15.50 €** | 74.4 % | **19.9 %** | 15.71 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **92.90 €** | 31.4 % | **22.2 %** | 92.92 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 124.02 € | **117.00 €** | 29.1 % | **21.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT520III TTL | 65.50 € | **58.50 €** | 20.7 % | **7.8 %** | 58.81 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 121.98 € | **115.00 €** | 26.2 % | **19.0 %** | 115.50 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.50 €** | 51.3 % | **6.4 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 59.96 € | **53.00 €** | 31.1 % | **15.9 %** | 53.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **30.50 €** | 43.6 % | **17.0 %** | 30.58 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **22.90 €** | 50.0 % | **15.6 %** | 22.92 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **43.00 €** | 43.9 % | **24.5 %** | 43.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 69.70 € | **63.00 €** | 31.5 % | **18.8 %** | 63.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **21.00 €** | 56.9 % | **19.1 %** | 21.42 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 27.16 € | **20.50 €** | 39.4 % | **5.2 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **40.50 €** | 29.9 % | **11.6 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 44.59 € | **38.00 €** | 34.1 % | **14.3 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Rooma Espresso A7 bílá | 534.50 € | **528.00 €** | 6.3 % | **5.0 %** | 520.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 8501A | 155.00 € | **148.50 €** | 9.6 % | **5.0 %** | 142.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rowenta ZR720003 | 37.50 € | **31.00 €** | 41.3 % | **16.8 %** | 31.20 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900G (čierna) | 57.40 € | **51.00 €** | 33.8 % | **18.9 %** | 51.29 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.50 €** | 21.7 % | **13.6 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **23.50 €** | 45.7 % | **15.2 %** | 23.60 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 52.7 % | **45.1 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **18.50 €** | 62.7 % | **22.4 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Sada na selfie Neewer SRP18C s priemerom 17 cm a okr... | 173.00 € | **166.90 €** | 45.8 % | **40.6 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **13.90 €** | 54.0 % | **7.1 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **13.90 €** | 84.7 % | **28.4 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **58.50 €** | 25.1 % | **13.3 %** | 58.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 59.3 % | **14.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **28.90 €** | 43.7 % | **19.1 %** | 28.92 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 52.6 % | **43.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 51.2 % | **43.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 74.82 € | **69.00 €** | 28.7 % | **18.6 %** | 69.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 35.2 % | **11.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 92.25 € | **86.50 €** | 21.8 % | **14.2 %** | 86.88 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.50 €** | 29.7 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 47.6 % | **13.4 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **16.90 €** | 55.2 % | **16.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| xTool SafetyPro™ AP2 ultra hustý uhlíkový filter | 47.15 € | **41.50 €** | 38.7 % | **22.1 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **59.00 €** | 34.7 % | **23.0 %** | 59.38 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 42.7 % | **35.2 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Fén MOVA Turbo fialový | 68.00 € | **62.50 €** | 14.7 % | **5.4 %** | 30.45 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko B5RCNA375HXB1 HarvestFresh | 358.50 € | **353.00 €** | 11.7 % | **9.9 %** | 353.19 € | cena podľa najlacnejšieho iného predajcu |
| Osvetľovací statív GODOX 240F | 49.00 € | **43.50 €** | 36.1 % | **20.8 %** | 43.75 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 39.98 € | **34.50 €** | 35.4 % | **16.8 %** | 34.63 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **34.50 €** | 28.3 % | **10.7 %** | 34.88 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **32.00 €** | 43.8 % | **23.0 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2011300 | 205.90 € | **200.50 €** | 11.7 % | **8.8 %** | 200.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 20.90 € | **15.50 €** | 49.4 % | **10.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Neewer Retro blesk | 74.82 € | **69.50 €** | 55.5 % | **44.4 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 46.7 % | **22.7 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **27.00 €** | 38.9 % | **16.1 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 45.3 % | **19.8 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **24.50 €** | 40.2 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa DarkFlash C280 (biela) | 49.72 € | **44.50 €** | 32.6 % | **18.7 %** | 44.58 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 49.72 € | **44.50 €** | 32.3 % | **18.4 %** | 44.79 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT707 (žltá) | 47.15 € | **42.00 €** | 37.2 % | **22.3 %** | 42.17 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 47.15 € | **42.00 €** | 35.9 % | **21.1 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Perlegear PGTVMC06 Držiak na televízor pre televízor... | 46.12 € | **41.00 €** | 33.0 % | **18.2 %** | 41.46 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.90 €** | 52.5 % | **46.2 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.50 €** | 37.6 % | **9.0 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.60 € | **19.50 €** | 50.7 % | **19.5 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 38.3 % | **9.6 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 39.7 % | **28.7 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny termohygrometer Uni-T UT330THC s USB a fun... | 42.53 € | **37.50 €** | 30.9 % | **15.4 %** | 37.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 35.50 € | **30.50 €** | 60.1 % | **37.5 %** | 30.63 € | cena podľa najlacnejšieho iného predajcu |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 626.00 € | **621.00 €** | 10.7 % | **9.8 %** | 621.26 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-654A | 118.00 € | **113.00 €** | 18.5 % | **13.5 %** | 113.36 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-604B štvorzónový plynový sporák so sklen... | 118.00 € | **113.00 €** | 26.0 % | **20.6 %** | 113.36 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **15.00 €** | 59.5 % | **19.7 %** | 15.25 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (zelené) | 19.99 € | **15.00 €** | 58.4 % | **18.9 %** | 15.29 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **14.00 €** | 59.8 % | **17.9 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **12.50 €** | 60.3 % | **15.0 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.50 €** | 22.6 % | **6.5 %** | 29.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 55.90 € | **51.00 €** | 15.3 % | **5.2 %** | 48.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.50 €** | 25.1 % | **6.6 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 36.4 % | **14.7 %** | 25.41 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **19.90 €** | 47.6 % | **19.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **22.50 €** | 39.8 % | **15.8 %** | 22.71 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 41.1 % | **11.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 40.6 % | **11.1 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Puluz 75 mm adaptér z plochého na guľatý pre fluidnú... | 25.00 € | **20.50 €** | 34.2 % | **10.1 %** | 20.75 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9260G | 66.00 € | **61.50 €** | 19.7 % | **11.5 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXAP60E | 99.00 € | **94.50 €** | 16.6 % | **11.3 %** | 94.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer UPHORIA STUDIO | 97.00 € | **92.50 €** | 15.0 % | **9.7 %** | 92.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **14.50 €** | 56.1 % | **19.3 %** | 14.54 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **14.50 €** | 55.6 % | **19.0 %** | 14.83 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 39.8 % | **33.6 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.00 €** | 41.0 % | **5.2 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 62.9 % | **21.5 %** | 13.04 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **13.50 €** | 58.4 % | **19.3 %** | 13.75 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO6164EA | 144.90 € | **140.50 €** | 11.7 % | **8.3 %** | 140.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **22.90 €** | 31.8 % | **11.1 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **25.50 €** | 40.5 % | **20.5 %** | 25.71 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 61.8 % | **38.8 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 24.60 € | **20.50 €** | 43.5 % | **19.6 %** | 20.54 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 24.60 € | **20.50 €** | 38.0 % | **15.0 %** | 20.83 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C285 (čierna) | 44.59 € | **40.50 €** | 28.8 % | **17.0 %** | 40.63 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **18.50 €** | 33.4 % | **9.5 %** | 18.58 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **18.50 €** | 44.2 % | **18.3 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **38.00 €** | 30.6 % | **18.1 %** | 38.33 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| MIO MiVue C595W Wifi GPS | 91.90 € | **87.90 €** | 10.2 % | **5.4 %** | 86.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aligator R60 eXtremo Orange | 87.90 € | **83.90 €** | 10.1 % | **5.1 %** | 82.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stolný statív Puluz PU3070GT | 40.50 € | **36.50 €** | 20.7 % | **8.8 %** | 36.54 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Watch GPS Black | 66.50 € | **62.50 €** | 14.6 % | **7.7 %** | 62.60 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 363.00 € | **359.00 €** | 8.2 % | **7.0 %** | 359.18 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 319.50 € | **315.50 €** | 7.8 % | **6.5 %** | 315.69 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum M1 Pro-125H Intel Core Ultra 5 1... | 631.00 € | **627.00 €** | 43.3 % | **42.4 %** | 627.19 € | cena podľa najlacnejšieho iného predajcu |
| Candy CDG1S514ESH | 240.00 € | **236.00 €** | 9.7 % | **7.8 %** | 236.20 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE MO 20 E1W | 65.00 € | **61.00 €** | 20.1 % | **12.7 %** | 61.50 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.00 €** | 43.3 % | **14.7 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 41.8 % | **13.5 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 26.6 % | **14.0 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| myPhone Hammer Boost 2 LTE oranžový | 81.90 € | **78.00 €** | 10.3 % | **5.1 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje BMX201M2BG | 172.90 € | **169.00 €** | 11.7 % | **9.1 %** | 169.10 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **12.50 €** | 52.6 % | **16.3 %** | 12.54 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux LBD4Z | 471.90 € | **468.00 €** | 10.3 % | **9.4 %** | 468.49 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 74.82 € | **71.00 €** | 19.5 % | **13.4 %** | 71.08 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.50 €** | 21.7 % | **5.3 %** | 23.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **22.00 €** | 37.9 % | **18.4 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **21.00 €** | 43.4 % | **22.4 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| STRONG LEAP LIVE 427 / 4K GOOGLE TV | 74.50 € | **70.90 €** | 10.4 % | **5.1 %** | 68.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Black&Decker BXRA2501E | 108.50 € | **104.90 €** | 13.7 % | **9.9 %** | 105.00 € | cena podľa najlacnejšieho iného predajcu |
| Girmi IM4701 | 144.50 € | **140.90 €** | 11.7 % | **8.9 %** | 141.00 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE165 | 62.50 € | **59.00 €** | 14.3 % | **7.9 %** | 59.10 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO344DH | 150.00 € | **146.50 €** | 11.5 % | **8.9 %** | 146.60 € | cena podľa najlacnejšieho iného predajcu |
| Tefal CY75X8F0 | 150.50 € | **147.00 €** | 11.5 % | **8.9 %** | 147.20 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE FN4172CW | 335.00 € | **331.50 €** | 8.1 % | **7.0 %** | 331.70 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 44.00 € | **40.50 €** | 14.9 % | **5.8 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FN619EEW5 | 488.00 € | **484.50 €** | 7.7 % | **7.0 %** | 484.80 € | cena podľa najlacnejšieho iného predajcu |
| N'oveen ohřívač vody IWH560 | 45.50 € | **42.00 €** | 19.9 % | **10.7 %** | 42.34 € | cena podľa najlacnejšieho iného predajcu |
| Albrecht DR 451 DAB+ alarm clock, white | 37.50 € | **34.00 €** | 17.5 % | **6.5 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **16.50 €** | 43.6 % | **18.5 %** | 16.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 39.98 € | **36.50 €** | 30.6 % | **19.3 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **14.00 €** | 46.8 % | **17.9 %** | 14.04 € | cena podľa najlacnejšieho iného predajcu |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 37.42 € | **34.00 €** | 31.8 % | **19.8 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.31 € | **29.90 €** | 33.0 % | **19.4 %** | 29.92 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.00 €** | 41.2 % | **12.0 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| 42-82" TV mount Perlegear PGLF12-EU | 32.29 € | **28.90 €** | 33.2 % | **19.2 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov pre DJI Action 6 (CPL/ND8/16/32) | 29.73 € | **26.50 €** | 35.9 % | **21.2 %** | 26.63 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 46.0 % | **39.3 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 50.0 % | **43.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **19.50 €** | 23.0 % | **6.4 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi V89 (nerezová oceľ, zlatá... | 37.50 € | **34.50 €** | 15.0 % | **5.8 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Girmi FG8401 | 89.00 € | **86.00 €** | 15.8 % | **11.9 %** | 86.10 € | cena podľa najlacnejšieho iného predajcu |
| Smart ceiling lamp 32cm WiFi/Bluetooth 16M RGBCW Gos... | 23.00 € | **20.00 €** | 38.1 % | **20.1 %** | 20.17 € | cena podľa najlacnejšieho iného predajcu |
| GODOX R200-HC40 mriežka s voštinovým vzorom | 20.50 € | **17.50 €** | 35.1 % | **15.3 %** | 17.75 € | cena podľa najlacnejšieho iného predajcu |
| Girmi FG4101 | 139.50 € | **136.50 €** | 11.2 % | **8.8 %** | 136.80 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 126.50 € | **123.50 €** | 22.1 % | **19.2 %** | 123.80 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo Yeelight Arwen 600D | 135.50 € | **132.50 €** | 20.6 % | **18.0 %** | 132.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 43.7 % | **22.2 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (modré) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno Creality TPU (biele) | 19.99 € | **17.00 €** | 41.8 % | **20.6 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **14.50 €** | 40.7 % | **17.1 %** | 14.71 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **15.00 €** | 44.9 % | **21.2 %** | 15.42 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **14.00 €** | 42.8 % | **18.2 %** | 14.17 € | cena podľa najlacnejšieho iného predajcu |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 46.2 % | **20.3 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 47.0 % | **21.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE145 | 41.90 € | **39.00 €** | 15.0 % | **7.0 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **12.00 €** | 51.0 % | **22.0 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.00 €** | 34.1 % | **8.3 %** | 12.48 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.00 €** | 41.3 % | **14.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filament Anycubic TPU (priehľadný oranžový), 1 kg | 24.60 € | **21.90 €** | 36.2 % | **21.3 %** | 21.96 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 60.0 % | **44.3 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 36.8 % | **23.4 %** | 24.75 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **19.90 €** | 24.1 % | **9.5 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.90 €** | 44.0 % | **35.1 %** | 39.93 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN K1L-C (čierny) | 22.55 € | **20.00 €** | 33.4 % | **18.3 %** | 20.21 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Party Queen | 30.00 € | **27.50 €** | 15.4 % | **5.8 %** | 25.03 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 25.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, studená b... | 14.00 € | **11.50 €** | 82.1 % | **49.6 %** | 11.53 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Pro (červený) | 271.50 € | **269.00 €** | 9.5 % | **8.5 %** | 269.03 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SA-30 Softbox, 30x30 cm | 19.50 € | **17.00 €** | 39.1 % | **21.2 %** | 17.04 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 263.50 € | **261.00 €** | 6.3 % | **5.3 %** | 261.19 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 263.50 € | **261.00 €** | 6.3 % | **5.3 %** | 261.19 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26730-56/RH | 34.00 € | **31.50 €** | 18.9 % | **10.1 %** | 31.72 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT65421VC | 128.50 € | **126.00 €** | 10.5 % | **8.3 %** | 126.30 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015200 Citrusovač Ribera | 49.00 € | **46.50 €** | 19.2 % | **13.1 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.6 % | **10.1 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 18.97 € | **16.50 €** | 26.0 % | **9.6 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 19.90 € | **17.50 €** | 23.0 % | **8.2 %** | 17.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 17.90 € | **15.50 €** | 34.4 % | **16.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 46.4 % | **23.2 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 59.6 % | **34.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK1-EU | 14.35 € | **12.00 €** | 42.5 % | **19.1 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **24.90 €** | 26.3 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vodotesné puzdro na iPhone Puluz (40 m) s jednosmern... | 52.00 € | **49.90 €** | 14.1 % | **9.5 %** | 49.92 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 20.3 % | **10.1 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 23310-56/RH | 49.00 € | **46.90 €** | 19.6 % | **14.4 %** | 47.00 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25400-56/RH | 55.00 € | **52.90 €** | 19.0 % | **14.5 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-NOVA, 4K GOOGLE TV STICK | 75.00 € | **72.90 €** | 8.5 % | **5.5 %** | 72.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 46.4 % | **42.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlesmith PSMFK12 | 18.97 € | **16.90 €** | 33.3 % | **18.8 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **19.00 €** | 41.4 % | **27.9 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, teplá bie... | 13.50 € | **11.50 €** | 75.6 % | **49.6 %** | 11.53 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1009900 | 50.90 € | **48.90 €** | 23.3 % | **18.5 %** | 49.00 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61600 GO/D143 Rozšiřující set 1 | 18.00 € | **16.00 €** | 28.6 % | **14.3 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 103.50 € | **101.50 €** | 12.0 % | **9.8 %** | 101.70 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5388B | 111.00 € | **109.00 €** | 11.4 % | **9.4 %** | 109.30 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 530 FR | 95.00 € | **93.00 €** | 14.1 % | **11.7 %** | 93.30 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Kuchyňský robot, G201200 Pasta | 184.00 € | **182.00 €** | 10.0 % | **8.8 %** | 182.30 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta 3v1 RH5A32E0 | 120.00 € | **118.00 €** | 11.6 % | **9.8 %** | 118.30 € | cena podľa najlacnejšieho iného predajcu |
| Filament Sunlu TPU Silk (čierny) | 21.00 € | **19.00 €** | 35.0 % | **22.1 %** | 19.30 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EW7TN3372C | 493.50 € | **491.50 €** | 7.4 % | **7.0 %** | 491.80 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LR15Bi Okrúhle svetlo | 16.50 € | **14.50 €** | 34.7 % | **18.4 %** | 14.88 € | cena podľa najlacnejšieho iného predajcu |
| Lampa na čítanie Yeelight Pura Reading Desk Lamp | 25.50 € | **23.50 €** | 20.5 % | **11.1 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Paw Patrol | 41.50 € | **39.50 €** | 14.5 % | **9.0 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 57.3 % | **41.7 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 27.7 % | **15.0 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovacia podložka Flextail Zero Seat R02 (oranžová) | 18.97 € | **17.00 €** | 34.0 % | **20.1 %** | 17.42 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect USetup E7 15,6" 1920x1080 60Hz prenosný dot... | 144.90 € | **143.00 €** | 24.4 % | **22.8 %** | 143.38 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCO1200E | 117.90 € | **116.00 €** | 11.5 % | **9.7 %** | 116.40 € | cena podľa najlacnejšieho iného predajcu |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 19.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bravo B-4720 Nap. žehlička Clara fialová | 36.90 € | **35.00 €** | 13.5 % | **7.7 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara modrá | 36.90 € | **35.00 €** | 13.5 % | **7.7 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.00 €** | 34.1 % | **17.3 %** | 13.46 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 56.7 % | **35.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny zvuku Habotest HT602B | 25.12 € | **23.50 €** | 23.8 % | **15.8 %** | 23.88 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WOI118PT2SSMA | 759.50 € | **757.90 €** | 6.2 % | **6.0 %** | 758.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 54.50 € | **52.90 €** | 8.3 % | **5.1 %** | 48.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 37.4 % | **27.7 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR720004 | 22.00 € | **20.50 €** | 25.4 % | **16.9 %** | 20.60 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 107.00 € | **105.50 €** | 10.9 % | **9.3 %** | 105.60 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAT20000PK Bezdrátová sluchátka | 32.50 € | **31.00 €** | 13.3 % | **8.1 %** | 31.11 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61645 Zatáčka 3/45 (4ks) | 27.50 € | **26.00 €** | 30.6 % | **23.5 %** | 26.32 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2023F0 | 36.50 € | **35.00 €** | 11.5 % | **6.9 %** | 35.37 € | cena podľa najlacnejšieho iného predajcu |
| Amica MI 446 TBIM | 523.00 € | **521.50 €** | 6.3 % | **5.9 %** | 521.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 37.50 € | **36.00 €** | 22.3 % | **17.4 %** | 36.41 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 147.50 € | **146.00 €** | 12.5 % | **11.4 %** | 146.46 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 43.8 % | **33.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 45.2 % | **34.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 48.2 % | **36.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| AMICA DI 6401 PSB | 177.90 € | **176.50 €** | 9.7 % | **8.9 %** | 176.70 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci prostriedok na tvrdé povrchy pre všetky čis... | 16.90 € | **15.50 €** | 15.6 % | **6.0 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| RivaCase 5133 pouzdro na ultrabook 15,6" | 29.90 € | **28.50 €** | 15.0 % | **9.7 %** | 28.59 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 49.2 % | **43.4 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Strieborná stolová LED vianočná hviezda Solight 1V26... | 11.00 € | **9.80 €** | 52.9 % | **36.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Zlatá stolová LED vianočná hviezda Solight 1V262-G, ... | 11.00 € | **9.80 €** | 52.9 % | **36.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Hodinky Colmi V89 Smartwatch (zlaté) | 31.00 € | **29.90 €** | 14.6 % | **10.5 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Amica BL 6016 | 64.00 € | **62.90 €** | 14.8 % | **12.8 %** | 63.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 49.1 % | **42.5 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 51.5 % | **44.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZCK8040 | 42.50 € | **41.50 €** | 11.6 % | **9.0 %** | 41.55 € | cena podľa najlacnejšieho iného predajcu |
| Girmi SR5400 Odšťavňovač | 36.50 € | **35.50 €** | 19.1 % | **15.8 %** | 35.60 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 21391-56/RH | 52.00 € | **51.00 €** | 16.5 % | **14.3 %** | 51.10 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 29.00 € | **28.00 €** | 14.5 % | **10.6 %** | 28.10 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 641.90 € | **640.90 €** | 115871.1 % | **115690.4 %** | 641.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV T7S (čierny) | 121.50 € | **120.50 €** | 15.0 % | **14.1 %** | 120.68 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92003 Hrnec s pokl. Libra, 3,6 l | 24.50 € | **23.50 €** | 14.7 % | **10.0 %** | 23.70 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93014 Pánev hluboká Aries 28 cm | 25.50 € | **24.50 €** | 14.4 % | **9.9 %** | 24.70 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 62.50 € | **61.50 €** | 8.8 % | **7.1 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na zvýšenie výkonu pre pedále CRP2 Moza Raci... | 22.00 € | **21.00 €** | 19.1 % | **13.7 %** | 21.25 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-PE105 | 27.00 € | **26.00 €** | 14.0 % | **9.8 %** | 26.30 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO8708W | 74.50 € | **73.50 €** | 12.3 % | **10.8 %** | 73.80 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 14.50 € | **13.50 €** | 13.0 % | **5.2 %** | 13.82 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 208.50 € | **207.50 €** | 16.6 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Sunlu PLA+ (čierny) | 16.50 € | **15.50 €** | 45.5 % | **36.7 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **16.50 €** | 21.4 % | **14.5 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku FNIRSI FDM-02 | 29.00 € | **28.00 €** | 11.7 % | **7.8 %** | 28.42 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **62.00 €** | 14.8 % | **13.0 %** | 62.43 € | cena podľa najlacnejšieho iného predajcu |
| Auto GO/GO+ 64197 Ferrari 488 GT3 Red Bu | 18.00 € | **17.00 €** | 28.6 % | **21.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **156.90 €** | 46.2 % | **45.3 %** | 157.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 49.0 % | **41.1 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Sati Ouganda Colobus Blend 500 g zrno | 11.90 € | **11.00 €** | 25.2 % | **15.7 %** | 11.20 € | cena podľa najlacnejšieho iného predajcu |
| MENALUX F152 | 11.90 € | **11.00 €** | 22.8 % | **13.5 %** | 11.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lištal pre LED pásky 2, 18x9mm, ml... | 3.60 € | **2.70 €** | 95.1 % | **46.3 %** | 2.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.80 € | **4.90 €** | 81.4 % | **53.2 %** | 4.95 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Ruby Red BS4717 | 39.90 € | **39.00 €** | 10.4 % | **8.0 %** | 39.21 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 23840-70 | 19.90 € | **19.00 €** | 19.8 % | **14.3 %** | 19.30 € | cena podľa najlacnejšieho iného predajcu |
| Súprava xTool Ultimate Robot Kit V2.0 | 449.90 € | **449.00 €** | 8.4 % | **8.2 %** | 449.49 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 42.9 % | **41.3 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 52.3 % | **51.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.50 €** | 26.6 % | **18.3 %** | 11.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta s bočnicami pre LED pásiky, ... | 4.00 € | **3.30 €** | 78.7 % | **47.4 %** | 3.36 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 41.5 % | **41.0 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **21.90 €** | 13.4 % | **10.4 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Page Profi 200 | 31.50 € | **30.90 €** | 18.8 % | **16.6 %** | 31.00 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27131-56 | 30.50 € | **29.90 €** | 18.7 % | **16.4 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Bella B -4430 bílooranžová | 21.50 € | **20.90 €** | 19.4 % | **16.1 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta pre LED pásky 1, 17x8mm, mli... | 3.60 € | **3.00 €** | 74.2 % | **45.2 %** | 3.10 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač SUPERIOR LG – Bluetooth... | 16.50 € | **15.90 €** | 62.4 % | **56.5 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH7AC1E0 | 220.50 € | **219.90 €** | 8.3 % | **8.0 %** | 220.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E1WYHSK2 | 70.50 € | **69.90 €** | 13.9 % | **12.9 %** | 70.00 € | cena podľa najlacnejšieho iného predajcu |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 25.50 € | **25.00 €** | 7.4 % | **5.3 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 33.50 € | **33.00 €** | 31.7 % | **29.7 %** | 33.03 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Katana CF0918 | 49.50 € | **49.00 €** | 15.5 % | **14.3 %** | 49.10 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27371-56 | 34.00 € | **33.50 €** | 18.4 % | **16.6 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27374-56 | 34.00 € | **33.50 €** | 18.4 % | **16.6 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta ZR690001 | 22.00 € | **21.50 €** | 19.3 % | **16.6 %** | 21.70 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Ani B-4689 bílá | 20.00 € | **19.50 €** | 18.4 % | **15.5 %** | 19.70 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer TX1800U Nano Adaptér | 21.00 € | **20.50 €** | 12.5 % | **9.8 %** | 20.70 € | cena podľa najlacnejšieho iného predajcu |
| PETG vlákno Sunlu (olivová) | 12.50 € | **12.00 €** | 23.6 % | **18.7 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 7, zlatá) | 272.50 € | **272.00 €** | 23.6 % | **23.3 %** | 272.27 € | cena podľa najlacnejšieho iného predajcu |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 20.50 € | **20.00 €** | 17.3 % | **14.4 %** | 20.27 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 181.50 € | **181.00 €** | 11.9 % | **11.6 %** | 181.29 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50D2V0 | 17.00 € | **16.50 €** | 18.7 % | **15.2 %** | 16.80 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 109.50 € | **109.00 €** | 10.2 % | **9.7 %** | 109.30 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET Pixy | 84.00 € | **83.50 €** | 14.9 % | **14.2 %** | 83.83 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.00 € | **37.50 €** | 12.9 % | **11.4 %** | 37.87 € | cena podľa najlacnejšieho iného predajcu |
| Tester baterií UNI-T UT677C s diagnostikou | 538.00 € | **537.50 €** | 15.8 % | **15.6 %** | 537.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-3 PREMIUM 3 kg (100x150... | 27.50 € | **27.00 €** | 15.8 % | **13.7 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 29.00 € | **28.50 €** | 19.6 % | **17.6 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-5 PREMIUM 5 kg (100x150... | 31.50 € | **31.00 €** | 24.7 % | **22.7 %** | 31.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 29.00 € | **28.50 €** | 19.6 % | **17.6 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-5 PREMIUM 5 kg (100x150... | 31.50 € | **31.00 €** | 24.7 % | **22.7 %** | 31.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušák Comfort Tower 420 | 46.50 € | **46.00 €** | 7.3 % | **6.2 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 40.00 € | **39.50 €** | 6.7 % | **5.4 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Max 875 Combo+dock black | 928.50 € | **928.00 €** | 9.7 % | **9.6 %** | 928.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 272.00 € | **271.50 €** | 7.1 % | **6.9 %** | 271.89 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 34.00 € | **33.50 €** | 11.8 % | **10.1 %** | 33.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 180.50 € | **180.00 €** | 20.4 % | **20.1 %** | 180.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.50 € | **181.00 €** | 25.6 % | **25.3 %** | 181.39 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64244 Porsche 992 GT3 No.2 | 17.00 € | **16.50 €** | 21.5 % | **17.9 %** | 16.89 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.50 € | **168.00 €** | 33.7 % | **33.3 %** | 168.39 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2404 | 129.00 € | **128.50 €** | 38.0 % | **37.5 %** | 128.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 604.00 € | **603.50 €** | 5.1 % | **5.0 %** | 603.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 635.00 € | **634.50 €** | 7.2 % | **7.1 %** | 634.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 682.00 € | **681.50 €** | 11.2 % | **11.2 %** | 681.89 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSA752E | 23.50 € | **23.00 €** | 18.2 % | **15.7 %** | 23.40 € | cena podľa najlacnejšieho iného predajcu |
| MOES MWP-EU16M-WH-MS Inteligentná zásuvka | 17.00 € | **16.50 €** | 66.7 % | **61.8 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Fitness sada na pilates REBEL ACTIVE RBA-3069-PK mul... | 47.50 € | **47.00 €** | 25.4 % | **24.1 %** | 47.42 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFUV5050 Softbox, 50x50cm | 43.50 € | **43.00 €** | 21.7 % | **20.3 %** | 43.46 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný snímač teploty a vlhkosti WiFi Gosund S... | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PETG-CF (čierny), 1 kg | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92001 Hrnec s pokl. Libra, 1,4 l | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93025 Pánev na palač. Carina 24 cm | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93021 Pánev Carina 22 cm | 14.50 € | **14.00 €** | 15.2 % | **11.3 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 49.50 € | **49.00 €** | 33.5 % | **32.1 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIS 512 TCX | 446.50 € | **446.00 €** | 7.0 % | **6.9 %** | 446.50 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 39.2 % | **38.1 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 223.90 € | **223.50 €** | 16.4 % | **16.2 %** | 223.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05A1 | 101.90 € | **101.50 €** | 10.2 % | **9.8 %** | 101.70 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 101.90 € | **101.50 €** | 6.3 % | **5.8 %** | 101.79 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V860III TTL pre Fuji | 214.90 € | **214.50 €** | 12.9 % | **12.7 %** | 214.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed nabíjecí kabel SG Watch FIXDW-780 | 12.90 € | **12.50 €** | 11.3 % | **7.9 %** | 12.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.00 € | **6.60 €** | 44.4 % | **36.2 %** | 6.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C 20 W fast charger | 5.80 € | **5.40 €** | 44.6 % | **34.7 %** | 5.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 5.80 € | **5.40 €** | 56.1 % | **45.4 %** | 5.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 5.80 € | **5.40 €** | 56.1 % | **45.4 %** | 5.45 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin L Steel | 27.90 € | **27.50 €** | 8.1 % | **6.5 %** | 27.88 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 24.90 € | **24.50 €** | 16.1 % | **14.3 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.30 € | **2.00 €** | 79.8 % | **56.3 %** | 2.01 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 29.2 % | **26.0 %** | 11.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.98 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 428.00 € | **427.90 €** | 14.2 % | **14.2 %** | 427.99 € | cena podľa najlacnejšieho iného predajcu |
| BEKO SIM8130P | 45.00 € | **44.90 €** | 12.4 % | **12.1 %** | 44.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.90 € | **1.80 €** | 33.2 % | **26.2 %** | 1.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 9.00 € | **8.90 €** | 12.7 % | **11.5 %** | 8.99 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93020 Pánev Carina 20 cm | 14.00 € | **13.90 €** | 14.7 % | **13.9 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Televes 552320 Crocodile 5G LTE700 domovní zesilovač | 65.00 € | **64.90 €** | 95.0 % | **94.7 %** | 64.92 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 65.00 € | **64.90 €** | 34.7 % | **34.5 %** | 64.93 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 172.00 € | **171.90 €** | 30.6 % | **30.5 %** | 171.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 132.00 € | **131.90 €** | 10.4 % | **10.3 %** | 132.00 € | cena podľa najlacnejšieho iného predajcu |

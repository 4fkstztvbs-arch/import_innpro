# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-07

Vstup: `premiumstore-sk_2026-10-07_12-31.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7702**
- Návrh **zvýšiť** cenu: **361** produktov
- Návrh **znížiť** cenu: **531** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6810** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **124**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **825**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (361)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Projektor JMGO O2S Ultra | 2189.90 € | **2398.00 €** | 5.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| beyerdynamic DT 250 250 Ohm | 149.00 € | **268.50 €** | 15.0 % | **107.2 %** | 268.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP600IIIV | 276.50 € | **386.90 €** | 5.2 % | **47.2 %** | 387.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu MOVA P10 | 460.90 € | **566.90 €** | 15.0 % | **41.4 %** | 567.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 278.00 € | **374.00 €** | 10.6 % | **48.8 %** | 374.46 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus R200 | 373.90 € | **448.90 €** | 15.0 % | **38.1 %** | 449.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravírovací stroj xTool S1 40 W 2 v 1, zákl... | 1755.90 € | **1826.90 €** | 10.9 % | **15.4 %** | 1827.00 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 181.90 € | **248.00 €** | 12.5 % | **53.4 %** | 248.44 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5RCNA375HXB1 HarvestFresh | 353.50 € | **418.90 €** | 10.1 % | **30.5 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X50-PoE(1-pack) WiFi 6, 1x ... | 151.00 € | **215.50 €** | 31.0 % | **86.9 %** | 215.60 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha D132 30044 24H Speed | 308.90 € | **346.50 €** | 10.0 % | **23.4 %** | 346.89 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-A2-9955 AMD Ryzen 9 9955HX ba... | 965.50 € | **1001.00 €** | 10.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GL.iNet Beryl 7 Wi-Fi 7 router | 153.50 € | **188.90 €** | 15.2 % | **41.7 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX DP400IIIV | 240.90 € | **276.00 €** | 5.0 % | **20.3 %** | 276.08 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 120.50 € | **155.50 €** | 13.4 % | **46.3 %** | 155.56 € | cena podľa najlacnejšieho iného predajcu |
| Parabolický dáždnik GODOX UB-165S | 65.50 € | **99.50 €** | 5.8 % | **60.7 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Candy CI32CBB | 116.90 € | **148.90 €** | 10.2 % | **40.4 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 236.00 € | **267.00 €** | 8.5 % | **22.8 %** | 267.50 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.00 € | **166.90 €** | 14.8 % | **39.8 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| BEKO RFSA240M43WN | 370.50 € | **398.90 €** | 6.9 % | **15.1 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Behringer X32 COMPACT | 1825.50 € | **1853.00 €** | 5.0 % | **6.6 %** | 1853.12 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 299.90 € | **325.50 €** | 10.1 % | **19.5 %** | 325.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Olympus | 215.00 € | **238.90 €** | 10.3 % | **22.6 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu |
| GODOX UB-165W parabolický odrazový dáždnik | 63.50 € | **84.00 €** | 5.0 % | **38.9 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing Vision GS RS064 (PC) | 729.00 € | **748.50 €** | 15.0 % | **18.1 %** | 748.83 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka SkyRC NC3000 Pro | 70.00 € | **89.50 €** | 11.7 % | **42.8 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 38.50 € | **57.90 €** | 15.6 % | **73.9 %** | 57.99 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXJB1000E | 43.90 € | **62.50 €** | 10.4 % | **57.1 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu |
| Rozvaděč Legrand Plexo 601988 IP65 plastový 4x18 nás... | 199.50 € | **217.00 €** | 10.2 % | **19.9 %** | 217.31 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 48.50 € | **63.50 €** | 9.7 % | **43.6 %** | 63.63 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DRX70 MESH + 4 RGB venti... | 48.50 € | **63.50 €** | 5.9 % | **38.7 %** | 63.73 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Blackview 60 Pro LTE Blue | 169.90 € | **184.50 €** | 10.0 % | **19.5 %** | 184.84 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285M (biela) | 48.90 € | **62.90 €** | 7.4 % | **38.2 %** | 62.92 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 134.00 € | **148.00 €** | 12.4 % | **24.2 %** | 148.17 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Fujifilm | 134.00 € | **148.00 €** | 12.4 % | **24.2 %** | 148.17 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 570.50 € | **584.00 €** | 29.4 % | **32.4 %** | 584.02 € | cena podľa najlacnejšieho iného predajcu |
| GODOX AD-S85S Softbox | 75.90 € | **88.90 €** | 5.2 % | **23.2 %** | 89.00 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 252.50 € | **265.50 €** | 5.2 % | **10.6 %** | 265.61 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1600TIII 2.0 (hnedé) | 82.00 € | **94.00 €** | 9.2 % | **25.2 %** | 94.04 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 129.00 € | **141.00 €** | 9.8 % | **20.0 %** | 141.14 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 52.50 € | **64.00 €** | 18.2 % | **44.1 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXHB1501E Tyčový mixér | 26.90 € | **37.90 €** | 11.2 % | **56.7 %** | 37.99 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 143.00 € | **153.90 €** | 14.4 % | **23.1 %** | 153.94 € | cena podľa najlacnejšieho iného predajcu |
| FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO | 541.50 € | **552.00 €** | 3.0 % | **5.0 %** | 514.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 157.00 € | **166.50 €** | 9.3 % | **15.9 %** | 166.57 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 157.00 € | **166.50 €** | 9.3 % | **15.9 %** | 166.57 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 206.00 € | **215.50 €** | 7.9 % | **12.9 %** | 215.71 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus DC1 mini orbitrek | 154.50 € | **163.90 €** | 15.1 % | **22.1 %** | 163.96 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN HBL-801 kaskádový filter | 18.00 € | **27.00 €** | 35.6 % | **103.4 %** | 27.16 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 20Ah VOLT + bezúdržbový systém... | 99.50 € | **108.50 €** | 16.2 % | **26.7 %** | 108.67 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS200 PRO TB2 PRO TOPUMP – mini pumpa na bic... | 45.00 € | **54.00 €** | 14.8 % | **37.8 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1380.00 € | **1388.90 €** | 11.4 % | **12.1 %** | 1388.99 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Kettle K3 Polar white | 21.90 € | **30.50 €** | 11.8 % | **55.7 %** | 30.62 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61601 Rozšiřující set 2 - GO | 24.90 € | **33.00 €** | 10.9 % | **46.9 %** | 33.29 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses, černé ASG003 | 79.90 € | **88.00 €** | 10.3 % | **21.5 %** | 88.32 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT118E Univerzálny digitálny multimeter Tru... | 38.50 € | **46.50 €** | 15.2 % | **39.1 %** | 46.51 € | cena podľa najlacnejšieho iného predajcu |
| ETA Lunar 4238 90000 modrý/zelený | 137.90 € | **145.90 €** | 10.3 % | **16.7 %** | 145.97 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100W (čierny) | 44.00 € | **51.90 €** | 14.4 % | **34.9 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA6 NP3T3EHTB Candy Bake 600 | 259.90 € | **267.00 €** | 5.1 % | **7.9 %** | 267.10 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 PRO mini elektrické čerpadlo | 79.90 € | **87.00 €** | 15.2 % | **25.5 %** | 87.25 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre Dreame L50s Pro Ultra | 67.90 € | **74.90 €** | 15.1 % | **26.9 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N5 Pro – palubná kamera | 122.50 € | **129.50 €** | 15.2 % | **21.8 %** | 129.71 € | cena podľa najlacnejšieho iného predajcu |
| Carrera EVO 27876 Porsche 911 GT3 R | 40.50 € | **47.50 €** | 11.0 % | **30.2 %** | 47.89 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 5 Pro 10400 mAh (čierna) | 37.50 € | **44.50 €** | 15.6 % | **37.2 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W15 | 229.90 € | **236.50 €** | 18.2 % | **21.6 %** | 236.75 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX LXB1SE11W0 | 243.50 € | **249.90 €** | 8.4 % | **11.2 %** | 250.00 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 171.90 € | **178.00 €** | 5.0 % | **8.8 %** | 178.20 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha GO Škoda Rally | 58.90 € | **64.90 €** | 10.4 % | **21.7 %** | 64.99 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L3350 | 179.00 € | **185.00 €** | 5.3 % | **8.9 %** | 185.29 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.50 € | **18.50 €** | 15.0 % | **70.1 %** | 18.83 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Prasátko Peppa | 26.50 € | **32.50 €** | 11.5 % | **36.7 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI FNB48P BT Tester USB portov s Bluetooth | 34.00 € | **39.90 €** | 5.1 % | **23.3 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Mango s podporou Wi-Fi 4 | 32.90 € | **38.50 €** | 15.2 % | **34.9 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| IPL epilátor ANLAN 02-ATMY52-0RE | 111.50 € | **117.00 €** | 16.1 % | **21.8 %** | 117.50 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové LED osvetlenie GODOX ML40R | 114.50 € | **119.90 €** | 14.2 % | **19.5 %** | 120.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS100 POCKET SE AIRBANK – mini pumpa na bicykel | 32.90 € | **38.00 €** | 15.0 % | **32.9 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV9812E0 | 331.90 € | **336.90 €** | 10.0 % | **11.7 %** | 336.98 € | cena podľa najlacnejšieho iného predajcu |
| Ultrazvukový masážny prístroj na tvár so svetelnou t... | 35.50 € | **40.50 €** | 7.9 % | **23.1 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Candy BRS 7N2BX-S | 414.50 € | **419.50 €** | 16.1 % | **17.5 %** | 419.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 120.00 € | **125.00 €** | 6.5 % | **11.0 %** | 125.44 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 FLEX EES42210IX | 457.00 € | **462.00 €** | 5.0 % | **6.2 %** | 462.47 € | cena podľa najlacnejšieho iného predajcu |
| Carrera CAT Adventní kalendář 85970 | 24.90 € | **29.50 €** | 10.9 % | **31.3 %** | 29.59 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 2 PRO 3200 mAh | 23.90 € | **28.50 €** | 15.6 % | **37.8 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61641 SkokánekGO/GO+/D143 | 13.90 € | **18.50 €** | 10.3 % | **46.7 %** | 18.75 € | cena podľa najlacnejšieho iného predajcu |
| G3ferrari G1021500 Horkovzdušná fritéza | 85.00 € | **89.50 €** | 10.1 % | **15.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61659 GO/D143 Houpačka | 21.90 € | **26.00 €** | 11.7 % | **32.6 %** | 26.17 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot Blast black od Silverlit | 27.90 € | **32.00 €** | 10.6 % | **26.8 %** | 32.30 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Opus pro Xiaomi 17T FIXOP3-1693-BK | 11.90 € | **16.00 €** | 11.5 % | **49.9 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, černé ASG001 | 79.90 € | **84.00 €** | 10.3 % | **16.0 %** | 84.48 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, modré ASG002 | 79.90 € | **84.00 €** | 10.3 % | **16.0 %** | 84.48 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 42.00 € | **46.00 €** | 7.5 % | **17.7 %** | 46.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 36.00 € | **40.00 €** | 5.8 % | **17.5 %** | 40.21 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno 72488 | 60.50 € | **64.50 €** | 10.7 % | **18.0 %** | 64.85 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický masážny prístroj na krk EMS ANLAN 09-AMJY... | 24.50 € | **28.50 €** | 6.7 % | **24.1 %** | 28.88 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Fujifilm | 89.00 € | **93.00 €** | 18.1 % | **23.4 %** | 93.38 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2397 Trenažér na stehná a panvové dno (modrý) | 13.00 € | **17.00 €** | 8.1 % | **41.3 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D30+ s Bluetooth | 201.00 € | **204.50 €** | 19.1 % | **21.2 %** | 204.67 € | cena podľa najlacnejšieho iného predajcu |
| Diagnostic Scanner OBD2 Ancel AS100/AC100 | 17.00 € | **20.50 €** | 23.2 % | **48.5 %** | 20.76 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 98.00 € | **101.50 €** | 17.7 % | **21.9 %** | 101.79 € | cena podľa najlacnejšieho iného predajcu |
| N'oveen IWH480 | 33.00 € | **36.50 €** | 6.5 % | **17.9 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight dezinfekčná bezozónová UV lampa 100W | 37.00 € | **40.50 €** | 17.8 % | **28.9 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Creality K2 Pro Combo | 745.50 € | **748.90 €** | 8.6 % | **9.1 %** | 748.99 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot Blast white od Silverlit | 27.90 € | **31.00 €** | 10.6 % | **22.9 %** | 31.02 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 18.90 € | **22.00 €** | 12.2 % | **30.7 %** | 22.04 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj MHPower MPU-1200-12 UPS 1200W 12V čist... | 203.90 € | **207.00 €** | 3.5 % | **5.0 %** | 204.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer X32 PRODUCER | 1204.50 € | **1207.50 €** | 27.1 % | **27.4 %** | 1207.51 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE NRS8182KX | 495.90 € | **498.90 €** | 5.0 % | **5.7 %** | 499.00 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS210 PRO AT1 PRO Anoutway Mini pumpa na bic... | 44.00 € | **47.00 €** | 14.8 % | **22.7 %** | 47.13 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 21.00 € | **24.00 €** | 5.2 % | **20.2 %** | 24.19 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ľadových kociek Euhomy IM001, 1,2 l, 12 kg ... | 59.50 € | **62.50 €** | 7.1 % | **12.5 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva WiFi Oneisall 5L PF08 | 52.00 € | **55.00 €** | 14.6 % | **21.2 %** | 55.46 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 134.00 € | **136.90 €** | 11.6 % | **14.0 %** | 136.98 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Canon | 89.00 € | **91.90 €** | 18.1 % | **22.0 %** | 92.00 € | cena podľa najlacnejšieho iného predajcu |
| Remoska® Europa Hluboká pánev 26 cm | 32.00 € | **34.90 €** | 49.3 % | **62.8 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné fotochromatické slnečné okuliare BlitzW... | 57.00 € | **59.90 €** | 13.8 % | **19.6 %** | 60.00 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 427.00 € | **429.90 €** | 13.9 % | **14.7 %** | 430.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesná maska so svetelnou terapiou ANLAN 01-AGZMZ | 40.90 € | **43.50 €** | 33.1 % | **41.5 %** | 43.52 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák na telefon FIXCRT-M14-BK | 12.90 € | **15.50 €** | 12.9 % | **35.6 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 bez ventilátorov (b... | 25.00 € | **27.50 €** | 27.1 % | **39.8 %** | 27.52 € | cena podľa najlacnejšieho iného predajcu |
| Solac New Optima Pro PV2114 | 29.50 € | **32.00 €** | 10.9 % | **20.3 %** | 32.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 52.50 € | **55.00 €** | 13.9 % | **19.3 %** | 55.08 € | cena podľa najlacnejšieho iného predajcu |
| GODOX LUX Senior Retro blesk | 121.50 € | **124.00 €** | 11.5 % | **13.8 %** | 124.09 € | cena podľa najlacnejšieho iného predajcu |
| Auto GO/GO+ 64197 Ferrari 488 GT3 Red Bu | 15.50 € | **18.00 €** | 10.7 % | **28.6 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje FH50EAW | 472.50 € | **475.00 €** | 5.1 % | **5.6 %** | 475.11 € | cena podľa najlacnejšieho iného predajcu |
| Tefal K3028912 | 15.50 € | **18.00 €** | 12.8 % | **31.0 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2505.00 € | **2507.50 €** | 14.4 % | **14.5 %** | 2507.63 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 87.00 € | **89.50 €** | 11.6 % | **14.8 %** | 89.69 € | cena podľa najlacnejšieho iného predajcu |
| Behringer SL 85S mikrofón | 15.00 € | **17.50 €** | 15.0 % | **34.2 %** | 17.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 11.50 € | **14.00 €** | 16.9 % | **42.3 %** | 14.27 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 11.50 € | **14.00 €** | 7.6 % | **31.0 %** | 14.27 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64245 Porsche 992 GT3 No.14 | 15.50 € | **18.00 €** | 10.7 % | **28.6 %** | 18.29 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 16P FIXSHM-1402-TR | 17.00 € | **19.50 €** | 10.1 % | **26.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.50 €** | 7.7 % | **15.0 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 105.50 € | **108.00 €** | 5.0 % | **7.5 %** | 108.43 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418 PRO + 7 ventilátoro... | 76.50 € | **78.90 €** | 13.6 % | **17.1 %** | 78.92 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 71599 SkokánekGO/GO+/D143 | 21.90 € | **24.00 €** | 10.2 % | **20.7 %** | 24.04 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26800-56/RH | 25.90 € | **28.00 €** | 8.3 % | **17.1 %** | 28.10 € | cena podľa najlacnejšieho iného predajcu |
| Etui do smartringa RingConn Ring Protector, r.12-14,... | 11.90 € | **14.00 €** | 15.7 % | **36.1 %** | 14.16 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 66.90 € | **69.00 €** | 25.8 % | **29.8 %** | 69.47 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64251 Ferrari SF-90 Stradale | 15.50 € | **17.50 €** | 10.7 % | **25.0 %** | 17.68 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64033 Mario Kart - Mario | 15.50 € | **17.50 €** | 10.7 % | **25.0 %** | 17.69 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCJ30E | 17.50 € | **19.50 €** | 6.0 % | **18.1 %** | 19.82 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64244 Porsche 992 GT3 No.2 | 15.50 € | **17.50 €** | 10.7 % | **25.0 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 124.50 € | **126.50 €** | 24.1 % | **26.1 %** | 126.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (čierne) | 26.50 € | **28.50 €** | 21.7 % | **30.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (modré) | 26.50 € | **28.50 €** | 22.6 % | **31.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 11.00 € | **13.00 €** | 52.9 % | **80.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Flextail Zero 1200 LED baterka (čierna) | 33.00 € | **34.90 €** | 12.4 % | **18.8 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 617.00 € | **618.90 €** | 26.3 % | **26.7 %** | 618.94 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO1022S | 167.50 € | **169.00 €** | 10.2 % | **11.2 %** | 169.04 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák PEGASUS 120 Compact | 28.00 € | **29.50 €** | 5.0 % | **10.6 %** | 29.58 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 16.00 € | **17.50 €** | 11.2 % | **21.6 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 316.00 € | **317.50 €** | 17.7 % | **18.2 %** | 317.59 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 469.00 € | **470.50 €** | 8.4 % | **8.7 %** | 470.59 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Auto GO/GO+ 64031 Chevrolet Cama | 15.50 € | **17.00 €** | 10.7 % | **21.5 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 340.50 € | **342.00 €** | 12.6 % | **13.1 %** | 342.09 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10S | 340.50 € | **342.00 €** | 6.2 % | **6.7 %** | 342.09 € | cena podľa najlacnejšieho iného predajcu |
| Softbox GODOX SB1520, univerzálny typ, 15x20 cm | 10.50 € | **12.00 €** | 7.6 % | **23.0 %** | 12.13 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná detská váha Grownsy B12H | 27.00 € | **28.50 €** | 15.4 % | **21.8 %** | 28.71 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61655 GO/D143 Kříž.zatáčka(2ks) | 12.50 € | **14.00 €** | 11.4 % | **24.8 %** | 14.24 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W9 | 160.50 € | **162.00 €** | 20.5 % | **21.6 %** | 162.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.00 € | **24.50 €** | 11.7 % | **19.0 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Olympus | 89.00 € | **90.50 €** | 18.1 % | **20.1 %** | 90.82 € | cena podľa najlacnejšieho iného predajcu |
| Herná klávesnica Onikuma MT902 2,4 GHz (čierno-biela) | 23.50 € | **25.00 €** | 15.4 % | **22.7 %** | 25.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 41.00 € | **42.50 €** | 38.1 % | **43.1 %** | 42.84 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 685.00 € | **686.50 €** | 36.1 % | **36.4 %** | 686.85 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 826.50 € | **828.00 €** | 26.9 % | **27.1 %** | 828.47 € | cena podľa najlacnejšieho iného predajcu |
| Aroma difuzer Zortiva 28212 250ml se světelným efekt... | 16.50 € | **18.00 €** | 12.4 % | **22.7 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 341.90 € | **343.00 €** | 19.3 % | **19.7 %** | 343.39 € | cena podľa najlacnejšieho iného predajcu |
| Foodsaver New Fresh 2,3 l | 30.90 € | **32.00 €** | 7.2 % | **11.0 %** | 32.09 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LR01 odžmolkovač | 16.90 € | **18.00 €** | 12.2 % | **19.5 %** | 18.17 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot My Dino II | 18.90 € | **20.00 €** | 12.2 % | **18.8 %** | 20.41 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1440.90 € | **1442.00 €** | 7.2 % | **7.3 %** | 1442.17 € | cena podľa najlacnejšieho iného predajcu |
| Činkový set v kufru HMS STC-20, chromovaný, 20 kg | 75.90 € | **76.90 €** | 4.2 % | **5.5 %** | 65.45 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 233.00 € | **234.00 €** | 9.7 % | **10.2 %** | 234.02 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 233.00 € | **234.00 €** | 9.7 % | **10.1 %** | 234.02 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto MercedesBenz Actros + AM | 44.50 € | **45.50 €** | 11.0 % | **13.5 %** | 45.54 € | cena podľa najlacnejšieho iného predajcu |
| Reflektor GODOX RFT-4 | 17.90 € | **18.90 €** | 17.0 % | **23.5 %** | 18.96 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 59.00 € | **60.00 €** | 16.1 % | **18.1 %** | 60.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 27.50 € | **28.50 €** | 17.1 % | **21.3 %** | 28.58 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GCO2007 Auto FIRST 65010 Cars Li | 12.50 € | **13.50 €** | 11.4 % | **20.3 %** | 13.58 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 187.00 € | **188.00 €** | 11.1 % | **11.7 %** | 188.09 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 185.50 € | **186.50 €** | 6.4 % | **6.9 %** | 186.59 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 417.00 € | **418.00 €** | 13.3 % | **13.6 %** | 418.10 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/ 80 Ohm | 379.90 € | **380.90 €** | 25.2 % | **25.5 %** | 381.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 309.90 € | **310.90 €** | 25.1 % | **25.5 %** | 311.00 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61647 Šikana - GO | 18.90 € | **19.90 €** | 12.3 % | **18.3 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 26.50 € | **27.50 €** | 7.6 % | **11.6 %** | 27.66 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1019.00 € | **1020.00 €** | 15.6 % | **15.7 %** | 1020.16 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 344.50 € | **345.50 €** | 6.7 % | **7.0 %** | 345.67 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 344.50 € | **345.50 €** | 11.3 % | **11.6 %** | 345.67 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 27.50 € | **28.50 €** | 14.2 % | **18.4 %** | 28.69 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 238.00 € | **239.00 €** | 11.5 % | **11.9 %** | 239.19 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická vyhrievaná kulma na riasy ANLAN 04-AJMJ14... | 15.00 € | **16.00 €** | 17.0 % | **24.8 %** | 16.25 € | cena podľa najlacnejšieho iného predajcu |
| Kempingová lampa Superfire T26-S – 500 lm, solárna, ... | 11.00 € | **12.00 €** | 14.9 % | **25.4 %** | 12.25 € | cena podľa najlacnejšieho iného predajcu |
| Zeblaze GTS 3 PRO Smartwatch (White) | 22.00 € | **23.00 €** | 5.1 % | **9.9 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61617 Zatáčka 2/45 (4ks) - GO | 12.50 € | **13.50 €** | 11.4 % | **20.3 %** | 13.84 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 290.00 € | **291.00 €** | 25.0 % | **25.4 %** | 291.39 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 464.50 € | **465.50 €** | 17.8 % | **18.1 %** | 465.89 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 99.50 € | **100.50 €** | 5.4 % | **6.5 %** | 100.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 535.50 € | **536.50 €** | 15.6 % | **15.8 %** | 536.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE VQ1500D active PA subwoofer | 498.00 € | **499.00 €** | 74.1 % | **74.4 %** | 499.41 € | cena podľa najlacnejšieho iného predajcu |
| Selfie tyč s powerbankou Telesin pre športové fotoap... | 35.00 € | **36.00 €** | 14.7 % | **18.0 %** | 36.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 38.00 € | **39.00 €** | 12.3 % | **15.3 %** | 39.42 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 255.00 € | **256.00 €** | 19.2 % | **19.6 %** | 256.49 € | cena podľa najlacnejšieho iného predajcu |
| SUNSUN CHJ-1502 Filtračné čerpadlo | 15.00 € | **16.00 €** | 22.9 % | **31.1 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 33.00 € | **33.90 €** | 13.7 % | **16.8 %** | 33.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.00 € | **34.90 €** | 13.6 % | **16.6 %** | 34.96 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 361.00 € | **361.90 €** | 80.5 % | **81.0 %** | 361.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 296.00 € | **296.90 €** | 10.7 % | **11.0 %** | 296.96 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 336.00 € | **336.90 €** | 16.3 % | **16.6 %** | 336.97 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 4.50 € | **5.20 €** | 17.3 % | **35.5 %** | 5.26 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 318.90 € | **319.50 €** | 12.6 % | **12.8 %** | 319.64 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate White | 269.90 € | **270.50 €** | 16.0 % | **16.3 %** | 270.76 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate Graphite Black | 269.90 € | **270.50 €** | 16.0 % | **16.3 %** | 270.76 € | cena podľa najlacnejšieho iného predajcu |
| Dětská elektrická kytara 22407 růžová + mikrofon + z... | 32.90 € | **33.50 €** | 4.1 % | **6.0 %** | 25.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa DarkFlash DS900G (čierna) | 56.90 € | **57.50 €** | 18.1 % | **19.4 %** | 57.58 € | cena podľa najlacnejšieho iného predajcu |
| Braun WK5205BK | 54.90 € | **55.50 €** | 5.6 % | **6.7 %** | 55.67 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 Pink | 31.90 € | **32.50 €** | 11.1 % | **13.2 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 White | 31.90 € | **32.50 €** | 11.1 % | **13.2 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 5.80 € | **6.40 €** | 26.8 % | **39.9 %** | 6.50 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA38F2K7NXBB | 135.90 € | **136.50 €** | 12.8 % | **13.3 %** | 136.59 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 151.90 € | **152.50 €** | 18.9 % | **19.3 %** | 152.59 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **92.50 €** | 14.9 % | **15.7 %** | 92.90 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **92.50 €** | 14.9 % | **15.7 %** | 92.90 € | cena podľa najlacnejšieho iného predajcu |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 541.00 € | **541.50 €** | 4.9 % | **5.0 %** | 538.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Impregnace na kožené oděvy INPRODUCTS WAX 200 ml | 17.00 € | **17.50 €** | 4.1 % | **7.1 %** | 15.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **29.50 €** | 15.6 % | **17.6 %** | 29.51 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim | 28.50 € | **29.00 €** | 8.1 % | **10.0 %** | 29.02 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9046C | 51.00 € | **51.50 €** | 8.2 % | **9.2 %** | 51.52 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 174.00 € | **174.50 €** | 25.8 % | **26.2 %** | 174.52 € | cena podľa najlacnejšieho iného predajcu |
| Klark Teknik DN200 V2 DI Box | 186.50 € | **187.00 €** | 19.8 % | **20.1 %** | 187.02 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 15.50 € | **16.00 €** | 10.7 % | **14.3 %** | 16.02 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI PRO DI4000 V2 | 161.50 € | **162.00 €** | 25.5 % | **25.9 %** | 162.03 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 29.00 € | **29.50 €** | 18.5 % | **20.5 %** | 29.53 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 151.50 € | **152.00 €** | 30.7 % | **31.1 %** | 152.03 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 38 Ah  Victron Energy AGM Sup... | 124.00 € | **124.50 €** | 12.3 % | **12.8 %** | 124.54 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon CRITICAL MASS, vokálny efektový pedál | 124.00 € | **124.50 €** | 19.8 % | **20.3 %** | 124.54 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 125.00 € | **125.50 €** | 20.1 % | **20.6 %** | 125.55 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link TL-SM5220-3M SFP+ Direct Attach Cable,... | 31.00 € | **31.50 €** | 5.1 % | **6.8 %** | 31.55 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.00 € | **216.50 €** | 16.9 % | **17.1 %** | 216.55 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný napájací zdroj k LED panelom | 5.90 € | **6.40 €** | 32.5 % | **43.7 %** | 6.46 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 123.00 € | **123.50 €** | 7.7 % | **8.1 %** | 123.56 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPhone 13 FIXBLM-723-BP | 17.00 € | **17.50 €** | 10.1 % | **13.4 %** | 17.56 € | cena podľa najlacnejšieho iného predajcu |
| Behringer C-1U USB štúdiový kondenzátorový mikrofón | 49.00 € | **49.50 €** | 44.5 % | **46.0 %** | 49.57 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 162.50 € | **163.00 €** | 12.0 % | **12.4 %** | 163.07 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-VF4 360° Projector Stand | 12.00 € | **12.50 €** | 14.8 % | **19.6 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 298.00 € | **298.50 €** | 19.8 % | **20.1 %** | 298.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 39.50 € | **40.00 €** | 5.4 % | **6.7 %** | 40.09 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 40.00 € | **40.50 €** | 7.4 % | **8.7 %** | 40.59 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40T | 27.00 € | **27.50 €** | 5.0 % | **7.0 %** | 27.59 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 46.00 € | **46.50 €** | 7.8 % | **9.0 %** | 46.59 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Black | 46.00 € | **46.50 €** | 7.8 % | **9.0 %** | 46.59 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 52.50 € | **53.00 €** | 5.4 % | **6.4 %** | 53.09 € | cena podľa najlacnejšieho iného predajcu |
| Triple monitor mount 17-32" Huanuo HNTS3B-UK | 87.50 € | **88.00 €** | 19.0 % | **19.7 %** | 88.09 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 237.00 € | **237.50 €** | 6.7 % | **7.0 %** | 237.59 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 91.00 € | **91.50 €** | 27.9 % | **28.6 %** | 91.59 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Archer GE400 BE6500, WiFi 7, 1x ... | 206.50 € | **207.00 €** | 5.2 % | **5.4 %** | 207.10 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R60 eXtremo Black Orange | 91.00 € | **91.50 €** | 14.0 % | **14.6 %** | 91.60 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61600 GO/D143 Rozšiřující set 1 | 15.50 € | **16.00 €** | 10.7 % | **14.3 %** | 16.10 € | cena podľa najlacnejšieho iného predajcu |
| Dvojitá odsávačka mlieka Grownsy | 38.00 € | **38.50 €** | 18.8 % | **20.4 %** | 38.61 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 95.50 € | **96.00 €** | 7.9 % | **8.5 %** | 96.11 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 252.50 € | **253.00 €** | 14.5 % | **14.7 %** | 253.12 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AMFY52-02A Masážny prístroj na tvár a oči | 22.50 € | **23.00 €** | 19.1 % | **21.7 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 12.50 € | **13.00 €** | 36.6 % | **42.1 %** | 13.16 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 265.00 € | **265.50 €** | 6.9 % | **7.1 %** | 265.68 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO249SV | 102.00 € | **102.50 €** | 10.8 % | **11.3 %** | 102.69 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone E1 vocal echo/delay pedál | 178.00 € | **178.50 €** | 63.8 % | **64.2 %** | 178.69 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone H1 | 178.00 € | **178.50 €** | 27.9 % | **28.3 %** | 178.69 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone R1 | 178.00 € | **178.50 €** | 36.5 % | **36.9 %** | 178.69 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 165.50 € | **166.00 €** | 15.2 % | **15.6 %** | 166.19 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 295.00 € | **295.50 €** | 12.5 % | **12.7 %** | 295.69 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 82.50 € | **83.00 €** | 33.1 % | **33.9 %** | 83.19 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.00 € | **127.50 €** | 16.5 % | **17.0 %** | 127.69 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 286.00 € | **286.50 €** | 15.9 % | **16.1 %** | 286.70 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 215.00 € | **215.50 €** | 11.5 % | **11.8 %** | 215.73 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.00 € | **159.50 €** | 6.3 % | **6.6 %** | 159.74 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 182.50 € | **183.00 €** | 5.3 % | **5.5 %** | 183.25 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 182.50 € | **183.00 €** | 5.3 % | **5.5 %** | 183.25 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 317.50 € | **318.00 €** | 19.1 % | **19.3 %** | 318.26 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 47.00 € | **47.50 €** | 30.0 % | **31.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.00 € | **17.50 €** | 9.4 % | **12.6 %** | 17.77 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.00 € | **17.50 €** | 9.6 % | **12.8 %** | 17.77 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF M5-1C-86W WiFi Matter smart wall switch (1-ch... | 17.00 € | **17.50 €** | 16.2 % | **19.7 %** | 17.77 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 66.00 € | **66.50 €** | 17.0 % | **17.9 %** | 66.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.00 € | **70.50 €** | 13.0 % | **13.8 %** | 70.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.00 € | **79.50 €** | 13.9 % | **14.6 %** | 79.79 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 93.50 € | **94.00 €** | 9.7 % | **10.3 %** | 94.29 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 167.50 € | **168.00 €** | 33.2 % | **33.6 %** | 168.29 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 41.50 € | **42.00 €** | 19.6 % | **21.1 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 344.50 € | **345.00 €** | 27.8 % | **28.0 %** | 345.30 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 307.00 € | **307.50 €** | 36.3 % | **36.5 %** | 307.81 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA+ (čierny) | 11.50 € | **12.00 €** | 9.9 % | **14.6 %** | 12.31 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx QX1222USB mixpult s USB a efektmi | 282.00 € | **282.50 €** | 54.4 % | **54.7 %** | 282.82 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový napájací zdroj DarkFlash PMT1050 (čierny) | 126.00 € | **126.50 €** | 18.7 % | **19.2 %** | 126.83 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 155.00 € | **155.50 €** | 10.9 % | **11.3 %** | 155.84 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 326.50 € | **327.00 €** | 11.6 % | **11.8 %** | 327.35 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 299.00 € | **299.50 €** | 35.6 % | **35.8 %** | 299.86 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 261.50 € | **262.00 €** | 22.3 % | **22.5 %** | 262.37 € | cena podľa najlacnejšieho iného predajcu |
| Rastar R/C auto Lamborghini Huracán | 29.50 € | **30.00 €** | 10.5 % | **12.4 %** | 30.38 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 128.50 € | **129.00 €** | 7.2 % | **7.7 %** | 129.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.00 € | **132.50 €** | 15.6 % | **16.0 %** | 132.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.00 € | **117.50 €** | 23680.5 % | **23782.1 %** | 117.89 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 118.00 € | **118.50 €** | 31.1 % | **31.7 %** | 118.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 33.00 € | **33.50 €** | 41.1 % | **43.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool W55R1 112W | 229.00 € | **229.50 €** | 10.0 % | **10.2 %** | 229.90 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 373.50 € | **374.00 €** | 17.0 % | **17.2 %** | 374.41 € | cena podľa najlacnejšieho iného predajcu |
| EZIDRI FD1000 ULTRA DIGITAL | 267.50 € | **268.00 €** | 9.6 % | **9.8 %** | 268.42 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 338.50 € | **339.00 €** | 6.6 % | **6.8 %** | 339.47 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 180.50 € | **181.00 €** | 22.3 % | **22.6 %** | 181.49 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 161.50 € | **162.00 €** | 20.5 % | **20.8 %** | 162.49 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco A12 5M automatické zaťahovacie vodítko pre ps... | 11.50 € | **12.00 €** | 32.2 % | **38.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco A12 5M automatické zaťahovacie vodítko pre ps... | 11.50 € | **12.00 €** | 32.2 % | **38.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT4000 74 Wh štartér | 116.50 € | **116.90 €** | 17.3 % | **17.7 %** | 116.92 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 107.50 € | **107.90 €** | 13.5 % | **13.9 %** | 107.93 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 106.50 € | **106.90 €** | 16.1 % | **16.5 %** | 106.95 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 84.50 € | **84.90 €** | 26.4 % | **27.0 %** | 84.97 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 86.50 € | **86.90 €** | 14.6 % | **15.2 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **89.90 €** | 14.8 % | **15.3 %** | 89.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 89.50 € | **89.90 €** | 13.9 % | **14.4 %** | 89.99 € | cena podľa najlacnejšieho iného predajcu |
| Beko HNU61422B | 116.50 € | **116.90 €** | 5.0 % | **5.4 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 194.50 € | **194.90 €** | 16.3 % | **16.5 %** | 195.00 € | cena podľa najlacnejšieho iného predajcu |
| Ochranné puzdro Sunnylife mini B977-D pre RC ovládač... | 11.50 € | **11.90 €** | 29.0 % | **33.4 %** | 11.91 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-4 Slam Ball 23cm 4kg | 12.50 € | **12.90 €** | 37.7 % | **42.1 %** | 12.99 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI DI600P DI box | 32.50 € | **32.90 €** | 9.9 % | **11.3 %** | 32.91 € | cena podľa najlacnejšieho iného predajcu |
| Panasonic sluchátka RZ-B120W | 36.50 € | **36.90 €** | 13.0 % | **14.2 %** | 36.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 52.50 € | **52.90 €** | 8.6 % | **9.4 %** | 52.95 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX20U AX 1800 adaptér, 2,4... | 21.50 € | **21.90 €** | 5.1 % | **7.1 %** | 21.95 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 29.50 € | **29.90 €** | 17.3 % | **18.9 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 35.50 € | **35.90 €** | 17.0 % | **18.3 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 23.50 € | **23.90 €** | 8.2 % | **10.0 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 23.50 € | **23.90 €** | 8.2 % | **10.0 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-838 5G | 22.50 € | **22.90 €** | 28.3 % | **30.6 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 61.50 € | **61.90 €** | 14.7 % | **15.5 %** | 61.99 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Flextail ZERO 1200 (čierna) | 34.50 € | **34.90 €** | 6.4 % | **7.6 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.80 € | **6.10 €** | 36.7 % | **43.7 %** | 6.12 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 51.90 € | **52.00 €** | 20.6 % | **20.8 %** | 52.02 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C206 IP, 2MPx, WiFi, prísvit | 33.90 € | **34.00 €** | 5.5 % | **5.8 %** | 34.06 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100WS (čierny) | 54.90 € | **55.00 €** | 21.8 % | **22.0 %** | 55.09 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C White | 17.90 € | **18.00 €** | 19.6 % | **20.2 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Red | 17.90 € | **18.00 €** | 19.6 % | **20.2 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Blue | 17.90 € | **18.00 €** | 19.6 % | **20.2 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Black | 17.90 € | **18.00 €** | 19.6 % | **20.2 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer AX17 WiFi Router | 39.90 € | **40.00 €** | 5.0 % | **5.3 %** | 40.10 € | cena podľa najlacnejšieho iného predajcu |
| Carrera autodráha FIRST Prasátko Peppa | 22.90 € | **23.00 €** | 10.1 % | **10.6 %** | 23.10 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG V35 s Dynamický mikrofon | 58.90 € | **59.00 €** | 38.2 % | **38.5 %** | 59.13 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 40.90 € | **41.00 €** | 19.0 % | **19.3 %** | 41.13 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 21391-56/RH | 49.90 € | **50.00 €** | 11.8 % | **12.0 %** | 50.20 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 63.90 € | **64.00 €** | 17.7 % | **17.9 %** | 64.29 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný modul pre DJI Osmo Mobile | 57.90 € | **58.00 €** | 18.7 % | **18.9 %** | 58.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.80 € | **4.90 €** | 40.9 % | **43.8 %** | 4.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.10 € | **4.20 €** | 30.2 % | **33.4 %** | 4.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.60 € | **9.70 €** | 31.2 % | **32.5 %** | 9.73 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 18.6 % | **21.0 %** | 5.09 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell NEO 2 MEGA KIT – balenie ... | 64.90 € | **65.00 €** | 13.7 % | **13.8 %** | 65.07 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 184.90 € | **185.00 €** | 7.5 % | **7.6 %** | 185.13 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 194.90 € | **195.00 €** | 7.2 % | **7.3 %** | 195.35 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 86.90 € | **87.00 €** | 21.6 % | **21.7 %** | 87.39 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 186.90 € | **187.00 €** | 10.3 % | **10.4 %** | 187.39 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 211.90 € | **212.00 €** | 36.8 % | **36.9 %** | 212.40 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 248.90 € | **249.00 €** | 73.5 % | **73.5 %** | 249.50 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (531)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria FOSSIBOT FB3840 s kapacitou 3840 Wh | 1267.90 € | **1157.90 €** | 15.0 % | **5.0 %** | 1150.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer NX6000D | 573.00 € | **485.00 €** | 40.5 % | **18.9 %** | 485.23 € | cena podľa najlacnejšieho iného predajcu |
| Amica SIS 112 STW | 510.90 € | **429.00 €** | 34.2 % | **12.7 %** | 429.11 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco BE65(1-pack) BE9300, WiFi 7... | 347.90 € | **275.90 €** | 32.4 % | **5.0 %** | 15.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER706W-4G VPN WiFi 6, LTE/4G, 1x GWAN... | 337.50 € | **267.90 €** | 32.4 % | **5.1 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco PX10(3-pack) AX1500 + AV100... | 317.50 € | **249.50 €** | 33.9 % | **5.2 %** | 249.67 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP773 stropný AP WiFi 7, 1x 10G... | 325.90 € | **258.50 €** | 32.4 % | **5.0 %** | 219.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP660 HD stropné AP WiFi 6, 1x ... | 324.00 € | **257.50 €** | 32.4 % | **5.2 %** | 215.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER703WP-4G-Outdoor vonkajší, VPN WiFi... | 319.50 € | **253.00 €** | 32.6 % | **5.0 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 210G | 521.50 € | **468.50 €** | 22.4 % | **10.0 %** | 468.67 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Archer BE550 BE9300, WiFi 7, 1x ... | 249.00 € | **197.50 €** | 32.4 % | **5.0 %** | 194.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco BE25(2-pack) BE3600, WiFi 7... | 241.50 € | **192.00 €** | 32.1 % | **5.0 %** | 174.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 700.00 € | **653.50 €** | 15.4 % | **7.7 %** | 653.65 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 254.50 € | **210.00 €** | 33.1 % | **9.8 %** | 210.11 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP215-Bridge KIT vonkajší spoj,... | 212.90 € | **168.50 €** | 32.9 % | **5.2 %** | 145.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco XE75(1-pack) AXE5400, WiFi ... | 202.50 € | **161.50 €** | 31.7 % | **5.0 %** | 130.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco P9(2-pack) AC1200, PLC AV10... | 187.90 € | **146.90 €** | 34.5 % | **5.1 %** | 144.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco PX10(2-pack) AX1500, WiFi 6... | 215.90 € | **175.00 €** | 29.6 % | **5.1 %** | 103.32 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link Flex Bridge 5 3x GLAN, 5 ... | 194.50 € | **155.00 €** | 32.6 % | **5.7 %** | 155.20 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER706W VPN WiFi 6, 1x GWAN + 4x GWAN/... | 189.00 € | **150.90 €** | 31.7 % | **5.1 %** | 150.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ ORW ECO Black | 397.00 € | **359.50 €** | 16.1 % | **5.1 %** | 330.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER707-M2 VPN 4x GWAN/Lan, 2x 2.5GWan/... | 178.00 € | **140.90 €** | 32.7 % | **5.0 %** | 140.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP673 stropný AP WiFi 6, 1x 2.5... | 180.50 € | **143.90 €** | 32.0 % | **5.2 %** | 130.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Archer AX72 Pro WiFi 6  AX5400, ... | 178.00 € | **141.50 €** | 32.3 % | **5.2 %** | 114.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco M5 (2-Pack) 2x GLAN, 1x USB... | 166.90 € | **132.50 €** | 32.4 % | **5.1 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP610GP-Desktop AP WiFi 6, 1x G... | 161.50 € | **127.50 €** | 33.3 % | **5.2 %** | 120.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP625GP-Wall AP, 1xGPON, 1X FXS... | 160.50 € | **127.50 €** | 32.5 % | **5.2 %** | 102.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Mercusys Halo H25BE(2-pack) WiFi... | 158.50 € | **125.50 €** | 33.0 % | **5.3 %** | 108.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Flytec V803-GPS 12000mAh loď na návnadu | 186.50 € | **154.00 €** | 49.6 % | **23.5 %** | 154.21 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP603-Outdoor vonkajší AP, AX18... | 152.90 € | **120.90 €** | 33.0 % | **5.2 %** | 121.00 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER7406 4x GLan/GWan, 1x GWan, 1x SFP,... | 145.50 € | **115.50 €** | 32.7 % | **5.3 %** | 114.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP603GP-Desktop AP WiFi 6, 1x G... | 136.90 € | **108.50 €** | 32.5 % | **5.0 %** | 101.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link HB210(1-pack) WiFi 7 AP BE3600, ... | 146.00 € | **118.00 €** | 32.9 % | **7.4 %** | 118.10 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP650 stropné AP WiFi 6, 1x GLa... | 126.00 € | **99.50 €** | 33.0 % | **5.0 %** | 83.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR37BE BE6500 WiFi 7, 1... | 129.90 € | **103.50 €** | 32.4 % | **5.5 %** | 60.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EX820v WiFi 6 AP AX6000, 3x GLAN... | 125.00 € | **98.90 €** | 32.9 % | **5.1 %** | 97.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco E4(3-pack) 2x LAN/ 300Mbps ... | 129.50 € | **103.50 €** | 31.9 % | **5.4 %** | 93.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP245 stropní AP, 1x GLAN, 2,4 ... | 121.50 € | **96.50 €** | 32.3 % | **5.1 %** | 76.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Mercusys Halo H85X(2-pack) WiFi ... | 124.50 € | **99.50 €** | 31.7 % | **5.3 %** | 97.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router GL.iNet Flint 3e Wi-Fi 7 | 187.50 € | **162.50 €** | 23.2 % | **6.8 %** | 162.54 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia jednotka TP-Link CPE710 5GHz, 2T2R, 23dBi,... | 121.50 € | **96.90 €** | 32.1 % | **5.3 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link HX510(1-pack) WiFi 6 AP AX3000, ... | 117.50 € | **93.00 €** | 32.8 % | **5.1 %** | 87.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP653 stropné AP WiFi 6, 1x GLa... | 118.00 € | **93.90 €** | 32.2 % | **5.2 %** | 89.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE225BE WiFi 7 AP/Extender/Rep... | 108.50 € | **85.90 €** | 32.8 % | **5.1 %** | 78.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR90X AX6000 dual AP/ro... | 106.50 € | **84.00 €** | 33.2 % | **5.1 %** | 83.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link HB210 Pro(1-pack) WiFi 7 AP BE36... | 166.50 € | **144.00 €** | 32.9 % | **15.0 %** | 144.02 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP650-wall AP, 1x GLAN, 2,4 a 5... | 109.90 € | **87.50 €** | 32.3 % | **5.3 %** | 82.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ADSL router TP-Link Archer VR2100 VDSL/ADSL MODEM 4x... | 109.90 € | **87.50 €** | 32.6 % | **5.5 %** | 83.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE235BE WiFi 7 AP/Extender/Rep... | 110.90 € | **88.50 €** | 32.4 % | **5.6 %** | 88.60 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady Mobile+ | 79.50 € | **57.50 €** | 45.6 % | **5.3 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE220BE WiFi 7 AP/Extender/Rep... | 106.50 € | **84.50 €** | 33.0 % | **5.5 %** | 84.06 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| beyerdynamic DT 250 80 Ohm | 249.00 € | **227.50 €** | 15.0 % | **5.1 %** | 186.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP615-Wall AP, 3x GLAN, 2,4 a 5... | 101.50 € | **80.50 €** | 32.6 % | **5.2 %** | 77.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP225-outdoor venkovní AP, 1x G... | 101.00 € | **80.50 €** | 32.0 % | **5.2 %** | 65.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tester obvodov Ancel PB500 | 93.50 € | **73.00 €** | 37.9 % | **7.7 %** | 73.35 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link TL-PA8030P KIT starter ki... | 118.50 € | **99.00 €** | 32.1 % | **10.4 %** | 99.04 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent white | 229.00 € | **209.50 €** | 16.4 % | **6.5 %** | 209.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamera NEDIS WIFICBO51WT SmartLife venkovní bateriov... | 157.00 € | **137.90 €** | 19.9 % | **5.3 %** | 77.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco M5 (1-pack) 2x GLAN, 1x USB... | 95.50 € | **76.50 €** | 31.7 % | **5.5 %** | 66.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco E4 (2-Pack) 2x LAN/ 300Mbps... | 91.00 € | **72.90 €** | 31.6 % | **5.4 %** | 56.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje NRK619DA2XL4 | 486.50 € | **468.90 €** | 10.0 % | **6.0 %** | 469.00 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 187.00 € | **169.50 €** | 30.7 % | **18.5 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG3020 | 188.00 € | **170.90 €** | 19.0 % | **8.2 %** | 170.96 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Archer AX55 Pro WiFi 6  AX3000, ... | 83.50 € | **66.50 €** | 32.5 % | **5.6 %** | 63.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Mercusys Halo H27BE(1-pack) WiFi... | 85.50 € | **68.50 €** | 31.6 % | **5.4 %** | 67.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 106.50 € | **89.90 €** | 38.8 % | **17.2 %** | 89.97 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link TL-PA7017P KIT twin pack,... | 79.00 € | **63.00 €** | 31.8 % | **5.1 %** | 36.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER605 SafeStream VPN 1x GWAN + 3x GWA... | 74.50 € | **59.00 €** | 32.8 % | **5.1 %** | 55.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Múdra termostatická hlavica TP-Link KE100 KIT bundle... | 67.00 € | **51.90 €** | 35.8 % | **5.2 %** | 48.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link TL-WR1502X cestovný, AX1500, WiF... | 71.50 € | **56.50 €** | 33.5 % | **5.5 %** | 56.60 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka a analyzátor batérií SkyRC MC5000 s rozhra... | 138.00 € | **123.00 €** | 40.0 % | **24.8 %** | 123.19 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia jednotka TP-Link CPE610 5GHz, 2T2R, 23dBi,... | 75.50 € | **60.90 €** | 30.8 % | **5.5 %** | 60.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR25BE BE3600 WiFi 7, 3... | 70.50 € | **56.00 €** | 32.3 % | **5.1 %** | 52.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LG F4A10S7NWH | 349.50 € | **335.00 €** | 10.0 % | **5.5 %** | 335.20 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T26B1 | 196.50 € | **182.50 €** | 27.6 % | **18.5 %** | 182.75 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link MERCUSYS MR25WBE BE3600 WiFi 7, ... | 70.50 € | **56.50 €** | 32.3 % | **6.0 %** | 56.78 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link Mercusys ME25BE AP/Extender/Re... | 66.90 € | **53.00 €** | 32.7 % | **5.1 %** | 52.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| YAMAHA R-S202D SILVER | 280.90 € | **267.90 €** | 10.1 % | **5.0 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LIMO BAR TWIN - Black/Silver | 63.50 € | **50.50 €** | 32.4 % | **5.3 %** | 42.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace 8000mAh 14.8V 100C 4S2P Lipo Battery Pack | 99.00 € | **86.00 €** | 24.2 % | **7.8 %** | 86.07 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 106.90 € | **94.00 €** | 49.4 % | **31.3 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco M4 (1-Pack) 2x GLAN/ 300Mbp... | 62.50 € | **49.90 €** | 31.7 % | **5.2 %** | 40.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR85X AX3000 AP/router,... | 61.50 € | **49.00 €** | 32.0 % | **5.1 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech 8500mAh 14.8V 60C 4S1P Lipo Battery ... | 116.00 € | **103.50 €** | 37.2 % | **22.4 %** | 103.69 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link TL-PA7017 KIT twin pack, ... | 57.50 € | **45.50 €** | 32.7 % | **5.0 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link CPE220 2.4GHz, 2T2R, 12dBi | 59.50 € | **47.50 €** | 32.6 % | **5.9 %** | 47.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko TB622ECWCS | 340.00 € | **328.00 €** | 24.5 % | **20.1 %** | 328.45 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW504A | 59.50 € | **47.50 €** | 44.5 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Candy GD 48SB8C-S | 298.90 € | **287.00 €** | 10.0 % | **5.6 %** | 287.10 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **286.90 €** | 15.0 % | **10.5 %** | 287.00 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia jednotka TP-Link CPE210 2.4GHz, 2T2R, 9dBi | 57.50 € | **45.90 €** | 32.4 % | **5.7 %** | 39.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Mileseey DT20 s meracou páskou s ... | 59.50 € | **48.00 €** | 36.0 % | **9.7 %** | 48.08 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač Niceboy ION Charles i4 Plus White | 168.00 € | **156.90 €** | 12.5 % | **5.1 %** | 101.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vysávač Niceboy ION Charles i4 Plus Black | 168.00 € | **156.90 €** | 12.5 % | **5.1 %** | 101.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vysávač Niceboy ION Charles i4 Plus White | 168.00 € | **156.90 €** | 12.5 % | **5.1 %** | 101.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vysávač Niceboy ION Charles i4 Plus Black | 168.00 € | **156.90 €** | 12.5 % | **5.1 %** | 101.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP110-outdoor AP, 1x LAN, 2,4GH... | 55.50 € | **44.50 €** | 31.9 % | **5.8 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link CPE605 5GHz, 2T2R, 23dBi,... | 58.50 € | **47.50 €** | 30.4 % | **5.9 %** | 46.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Veslovací trenažér MERACH MR-R15B2-EU | 251.90 € | **241.00 €** | 22.3 % | **17.0 %** | 241.30 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU4941WW | 376.50 € | **365.90 €** | 10.1 % | **7.0 %** | 366.00 € | cena podľa najlacnejšieho iného predajcu |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 79.00 € | **68.50 €** | 29.8 % | **12.5 %** | 68.90 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 77.00 € | **66.90 €** | 32.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 245.00 € | **235.00 €** | 35.2 % | **29.7 %** | 235.10 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 87.00 € | **77.50 €** | 29.8 % | **15.6 %** | 77.52 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 87.00 € | **77.50 €** | 25.2 % | **11.5 %** | 77.52 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link SM6220-1M SFP+ Direct Attach Cable, 25... | 56.50 € | **47.00 €** | 34.3 % | **11.7 %** | 47.04 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Minix SF16T s uhlopriečkou 16" | 232.00 € | **222.50 €** | 24.5 % | **19.4 %** | 222.63 € | cena podľa najlacnejšieho iného predajcu |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 109.00 € | **99.50 €** | 20.7 % | **10.2 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| LED svietidlo GODOX ES30 pre e-šport | 144.50 € | **135.00 €** | 24.0 % | **15.9 %** | 135.49 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC55SGMXC | 127.90 € | **118.50 €** | 15.3 % | **6.8 %** | 118.90 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link Mercusys ME80X AP/Extender/Rep... | 45.90 € | **36.50 €** | 32.6 % | **5.5 %** | 36.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 47.90 € | **38.50 €** | 43.1 % | **15.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Redmi 17 4/128GB Oak Green | 200.50 € | **191.50 €** | 10.1 % | **5.1 %** | 161.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1200G | 150.50 € | **141.50 €** | 15.2 % | **8.3 %** | 141.53 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 108.50 € | **99.50 €** | 17.9 % | **8.1 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP115 stropní AP, 1x LAN, 2,4GH... | 42.50 € | **33.90 €** | 32.4 % | **5.6 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| City Boss RS350 černá | 326.00 € | **317.50 €** | 10.0 % | **7.2 %** | 317.61 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 206.50 € | **198.00 €** | 13.7 % | **9.1 %** | 198.33 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 78.00 € | **69.50 €** | 20.1 % | **7.0 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 30.90 € | **22.50 €** | 59.2 % | **15.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Powerline ethernet TP-Link Mercusys MP300 KIT 600Mbp... | 40.50 € | **32.50 €** | 32.7 % | **6.5 %** | 32.60 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 99.00 € | **91.00 €** | 19.2 % | **9.5 %** | 91.11 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 64.50 € | **56.50 €** | 33.7 % | **17.1 %** | 56.87 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EC225-G5 AC1300 dual AP, 3x GLAN... | 38.90 € | **31.00 €** | 33.4 % | **6.3 %** | 31.30 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR TWIN - Black | 63.50 € | **55.90 €** | 20.0 % | **5.6 %** | 55.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link TL-WR902AC cestovní AC750, AP/ro... | 37.00 € | **29.50 €** | 31.9 % | **5.1 %** | 28.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 103.00 € | **95.50 €** | 39.0 % | **28.9 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect USetup E7 15,6" 1920x1080 60Hz prenosný dot... | 137.50 € | **130.00 €** | 18.1 % | **11.6 %** | 130.10 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Archer C64 AC1200 dual AP/router... | 37.50 € | **30.00 €** | 32.5 % | **6.0 %** | 30.25 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera FNIRSI TDM-120 | 173.00 € | **165.50 €** | 17.0 % | **11.9 %** | 165.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 67.00 € | **59.50 €** | 38.7 % | **23.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32SGMXC | 85.00 € | **77.90 €** | 15.1 % | **5.5 %** | 45.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete ART 413/04 | 61.50 € | **54.50 €** | 19.0 % | **5.5 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link Mercusys ME60X AP/Extender/Rep... | 33.50 € | **26.50 €** | 32.9 % | **5.1 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Lipo With XT6... | 61.90 € | **55.00 €** | 35.1 % | **20.1 %** | 55.28 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Archer C50 AC1200, AP/router, 4x... | 35.00 € | **28.50 €** | 30.0 % | **5.9 %** | 26.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Archer C20 AC750 dual AP/router,... | 32.00 € | **25.50 €** | 31.8 % | **5.0 %** | 23.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 79.50 € | **73.00 €** | 22.4 % | **12.4 %** | 73.40 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V04-WW, 30 m, teplá biel... | 25.50 € | **19.00 €** | 142.5 % | **80.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-WW, 50 m, teplá biel... | 25.50 € | **19.00 €** | 78.1 % | **32.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prsteň COLMI R02, veľkosť 8,18,1 mm (či... | 34.00 € | **27.50 €** | 41.4 % | **14.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa DarkFlash DS950V s displejom (čier... | 102.00 € | **96.00 €** | 23.5 % | **16.2 %** | 96.04 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 59.00 € | **53.00 €** | 23.8 % | **11.2 %** | 53.19 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat VIOLA 2 černé | 41.50 € | **35.50 €** | 27.7 % | **9.2 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate 7 | 201.90 € | **196.00 €** | 11.5 % | **8.3 %** | 196.45 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WA801N AP/AP Client, WDS, 1x ... | 26.50 € | **20.90 €** | 33.5 % | **5.3 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 199.50 € | **193.90 €** | 8.1 % | **5.0 %** | 192.77 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Hurricane H7 Plus | 160.00 € | **154.50 €** | 8.9 % | **5.1 %** | 109.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux 600 E62LD200S | 424.00 € | **418.50 €** | 6.4 % | **5.0 %** | 380.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link TL-WR802N cestovní AP/klient, 1x... | 28.50 € | **23.00 €** | 30.6 % | **5.4 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 224.50 € | **219.00 €** | 16.8 % | **13.9 %** | 219.08 € | cena podľa najlacnejšieho iného predajcu |
| Chytrý spínač TP-Link Tapo S112 bezdrôtové | 28.00 € | **22.50 €** | 33.0 % | **6.8 %** | 22.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 33.00 € | **27.50 €** | 42.9 % | **19.1 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 229.00 € | **223.50 €** | 16.4 % | **13.6 %** | 223.90 € | cena podľa najlacnejšieho iného predajcu |
| Žehlička Nedis IRONCL250 naparovacia | 45.00 € | **39.50 €** | 20.7 % | **5.9 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 20.50 € | **15.00 €** | 104.2 % | **49.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 325 | 254.90 € | **249.50 €** | 8.0 % | **5.7 %** | 249.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX SFGV8080 Softbox | 62.90 € | **57.50 €** | 26.0 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačový napájací zdroj DarkFlash EMT850 (čierny) | 64.00 € | **58.90 €** | 25.3 % | **15.4 %** | 59.00 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 93.00 € | **87.90 €** | 11.5 % | **5.4 %** | 84.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Napájadlo pre psy a mačky PetKit Eversweet 3 Pro | 91.00 € | **85.90 €** | 15.8 % | **9.3 %** | 85.92 € | cena podľa najlacnejšieho iného predajcu |
| Kamera EMOS IP-1200 WASP /H4067/ GoSmart venkovní ba... | 90.50 € | **85.50 €** | 11.5 % | **5.4 %** | 73.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AOCHUAN X Gimbal (sivý) | 52.50 € | **47.50 €** | 30.6 % | **18.2 %** | 47.72 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro Apple iPad FIXTRI-727-BK | 38.50 € | **33.50 €** | 24.7 % | **8.5 %** | 33.82 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8000mAh 11.1V 100C 3S1P Lipo Battery... | 65.50 € | **60.50 €** | 23.9 % | **14.4 %** | 60.83 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 293.50 € | **288.50 €** | 45.4 % | **43.0 %** | 288.89 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32BWBXC | 63.50 € | **58.50 €** | 14.8 % | **5.8 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.50 € | **34.50 €** | 37.8 % | **20.3 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **64.50 €** | 23.0 % | **14.1 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi TV Box S (3rd Gen) EU | 100.90 € | **96.00 €** | 10.4 % | **5.0 %** | 74.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **37.50 €** | 19.0 % | **6.2 %** | 36.53 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC čierne | 139.00 € | **134.50 €** | 34.1 % | **29.7 %** | 134.69 € | cena podľa najlacnejšieho iného predajcu |
| LiPo Gens ace G-Tech 4000mAh 2S2P 7,4V 60C batéria | 26.00 € | **21.50 €** | 40.4 % | **16.1 %** | 21.75 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 380.00 € | **375.50 €** | 28.1 % | **26.6 %** | 375.83 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 380.00 € | **375.50 €** | 22.0 % | **20.5 %** | 375.83 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 208.00 € | **203.50 €** | 16.3 % | **13.8 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 16.50 € | **12.00 €** | 99.3 % | **45.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi TV Stick 4K (2nd Gen) | 91.90 € | **87.50 €** | 10.3 % | **5.0 %** | 56.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Battery Tester with printer Ancel BST600 | 143.90 € | **139.50 €** | 39.0 % | **34.8 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 47.90 € | **43.50 €** | 54.2 % | **40.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 30.90 € | **26.50 €** | 34.3 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight bezdrôtový senzor k meteostanici TE90 | 14.00 € | **9.80 €** | 74.6 % | **22.2 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 371.00 € | **367.00 €** | 27.9 % | **26.5 %** | 367.04 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 26.00 € | **22.00 €** | 80.7 % | **52.9 %** | 22.21 € | cena podľa najlacnejšieho iného predajcu |
| PGYTECH Caplock MantisPod Power Tripod pre Gopro Hero | 64.00 € | **60.00 €** | 32.5 % | **24.2 %** | 60.21 € | cena podľa najlacnejšieho iného predajcu |
| ANMITE A160W04H 16" prenosný monitor | 107.00 € | **103.00 €** | 21.2 % | **16.6 %** | 103.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.50 € | **12.50 €** | 43.2 % | **8.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.50 € | **12.50 €** | 43.2 % | **8.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 50W, 4600lm, 5000K, IP65 | 20.50 € | **16.50 €** | 42.9 % | **15.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 51.50 € | **47.50 €** | 38.2 % | **27.5 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.50 € | **19.50 €** | 33.8 % | **11.0 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 249.50 € | **245.50 €** | 12.0 % | **10.2 %** | 245.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO217SV | 80.90 € | **77.00 €** | 10.4 % | **5.1 %** | 74.96 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačový napájací zdroj DarkFlash PMT1250 (čierny) | 141.90 € | **138.00 €** | 22.4 % | **19.0 %** | 138.21 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajší LED vianočný stromček Solight 1V290, 68 cm,... | 13.50 € | **9.60 €** | 51.6 % | **7.8 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, teplá bie... | 14.90 € | **11.00 €** | 93.8 % | **43.1 %** | 11.15 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.90 € | **36.00 €** | 28.1 % | **15.5 %** | 36.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 17.90 € | **14.00 €** | 34.4 % | **5.1 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZFS0919 | 65.50 € | **61.90 €** | 11.5 % | **5.3 %** | 48.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor Minix SF10T s uhlopriečkou 10,5" | 128.50 € | **124.90 €** | 22.9 % | **19.4 %** | 125.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.50 € | **13.00 €** | 43.2 % | **12.8 %** | 13.10 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) + 7 ventilá... | 73.50 € | **70.00 €** | 21.9 % | **16.0 %** | 70.17 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (biela) | 26.00 € | **22.50 €** | 32.9 % | **15.0 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 35.50 € | **32.00 €** | 22.6 % | **10.5 %** | 32.27 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (červené) | 35.50 € | **32.00 €** | 24.0 % | **11.8 %** | 32.27 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (strieborné) | 35.50 € | **32.00 €** | 22.6 % | **10.5 %** | 32.27 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny anemometer Habotest HT625B, USB | 43.00 € | **39.50 €** | 20.8 % | **11.0 %** | 39.81 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 65.00 € | **61.50 €** | 11.9 % | **5.9 %** | 61.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.00 € | **11.50 €** | 41.3 % | **8.3 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.00 € | **20.50 €** | 33.3 % | **13.8 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 36.00 € | **32.50 €** | 29.9 % | **17.3 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 25.00 € | **21.50 €** | 37.3 % | **18.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **22.50 €** | 40.0 % | **21.1 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal OptiGrill GC7P0810 | 98.50 € | **95.00 €** | 10.4 % | **6.5 %** | 95.50 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 20.00 € | **16.50 €** | 40.1 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Powerbanka KRUGER & MATZ KM0916 10000mAh Li-pol, QC,... | 32.90 € | **29.50 €** | 18.5 % | **6.2 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 21.90 € | **18.50 €** | 38.6 % | **17.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 44.00 € | **40.90 €** | 13.7 % | **5.7 %** | 40.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Step na aerobik HMS AS007 červený | 94.90 € | **91.90 €** | 8.5 % | **5.1 %** | 79.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Step na aerobik HMS AS007 oranžový | 94.90 € | **91.90 €** | 8.5 % | **5.1 %** | 79.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy CCE116/1X | 67.90 € | **64.90 €** | 10.2 % | **5.3 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Evolveo BonePro černá | 69.50 € | **66.50 €** | 14.1 % | **9.2 %** | 66.51 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DY460 (čierna) + 4 venti... | 104.00 € | **101.00 €** | 23.0 % | **19.5 %** | 101.04 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC272D10 | 67.00 € | **64.00 €** | 12.2 % | **7.2 %** | 64.10 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Copertinto BL439G10 | 59.50 € | **56.50 €** | 11.2 % | **5.5 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.50 € | **11.50 €** | 43.8 % | **14.0 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Zvukový mixér a zvuková karta AMC2 Neo | 45.50 € | **42.50 €** | 22.9 % | **14.8 %** | 42.90 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R45 eXtremo Black Red | 70.50 € | **67.50 €** | 14.3 % | **9.4 %** | 67.90 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool MWF 420 BL | 169.00 € | **166.00 €** | 10.0 % | **8.1 %** | 166.40 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 106.90 € | **104.00 €** | 27.3 % | **23.8 %** | 104.12 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N1 Dual Dash cam WiFi 1296p + Rear camera 1080p | 65.90 € | **63.00 €** | 12.4 % | **7.4 %** | 63.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED snehuliak Solight 1V233, 4 LED, 2 × AA | 12.50 € | **9.60 €** | 43.5 % | **10.2 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 81.50 € | **78.90 €** | 8.5 % | **5.0 %** | 77.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.30 € | **6.80 €** | 60.9 % | **17.6 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Step na aerobik HMS AS007 bílý/mentolový | 87.00 € | **84.50 €** | 8.2 % | **5.0 %** | 79.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Battery Tester Ancel BA201 8-16V DC | 56.50 € | **54.00 €** | 21.3 % | **16.0 %** | 54.06 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 78.00 € | **75.50 €** | 20.3 % | **16.5 %** | 75.67 € | cena podľa najlacnejšieho iného predajcu |
| Darkflash DK352 Plus computer case + 4 fans (black) | 45.50 € | **43.00 €** | 22.7 % | **15.9 %** | 43.33 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 Commercial Lake Blue | 64.50 € | **62.00 €** | 16.8 % | **12.3 %** | 62.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.00 € | **11.50 €** | 42.3 % | **16.9 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.00 € | **12.50 €** | 29.7 % | **8.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič vody Darkflash DN 360 (biely) | 72.50 € | **70.00 €** | 23.0 % | **18.8 %** | 70.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.90 € | **12.50 €** | 37.3 % | **15.2 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3224 | 26.90 € | **24.50 €** | 15.8 % | **5.4 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný WiFi spínač na žalúzie Meross MRS100MA(... | 23.90 € | **21.50 €** | 26.3 % | **13.7 %** | 21.85 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.90 € | **18.50 €** | 37.7 % | **21.9 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.00 € | **9.80 €** | 38.8 % | **13.3 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **9.80 €** | 58.1 % | **29.1 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 28.00 € | **25.90 €** | 30.7 % | **20.9 %** | 25.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **7.80 €** | 37.4 % | **8.2 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.90 € | **9.80 €** | 38.0 % | **13.7 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 LED sviečok s časovačom Solight 1V284, 6,5 cm... | 11.90 € | **9.80 €** | 82.5 % | **50.3 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Step na aerobik HMS AS006 | 72.00 € | **69.90 €** | 8.4 % | **5.2 %** | 65.93 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi Sound Outdoor (30W) BLACK | 47.50 € | **45.50 €** | 10.3 % | **5.7 %** | 38.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi Sound Outdoor (30W) BLUE | 47.50 € | **45.50 €** | 10.3 % | **5.7 %** | 38.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi Sound Outdoor (30W) RED | 47.50 € | **45.50 €** | 10.3 % | **5.7 %** | 38.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Salente Airfit-Wh | 47.90 € | **45.90 €** | 10.2 % | **5.6 %** | 45.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LEIFHEIT Žehlící prkno COMPACT S | 59.00 € | **57.00 €** | 32.7 % | **28.2 %** | 57.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (čierna) | 33.00 € | **31.00 €** | 22.3 % | **14.9 %** | 31.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash TH285 4 ventilátory (čie... | 77.00 € | **75.00 €** | 21.8 % | **18.6 %** | 75.08 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 107.50 € | **105.50 €** | 9.2 % | **7.1 %** | 105.60 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV2839E0 | 35.90 € | **33.90 €** | 16.6 % | **10.1 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 24.50 € | **22.50 €** | 24.5 % | **14.3 %** | 22.61 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 14.8V 30C 4S1P Lipo ... | 26.00 € | **24.00 €** | 20.9 % | **11.6 %** | 24.16 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 103.50 € | **101.50 €** | 9.7 % | **7.6 %** | 101.70 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash B275 (biela) | 34.50 € | **32.50 €** | 22.1 % | **15.0 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 65.50 € | **63.50 €** | 22.6 % | **18.9 %** | 63.75 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAK4200CT  bezdrátová sluchátka | 39.00 € | **37.00 €** | 13.3 % | **7.5 %** | 37.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.50 € | **20.50 €** | 21.5 % | **10.7 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.50 € | **14.50 €** | 43.2 % | **25.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **10.50 €** | 42.7 % | **19.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.50 € | **12.50 €** | 30.8 % | **12.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **14.50 €** | 32.3 % | **16.3 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 21.50 € | **19.50 €** | 32.2 % | **19.9 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 12.50 € | **10.50 €** | 37.3 % | **15.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 21.50 € | **19.50 €** | 28.5 % | **16.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.50 € | **11.50 €** | 24.9 % | **6.4 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Neewer photo bag | 45.00 € | **43.00 €** | 36.1 % | **30.0 %** | 43.48 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MVC72HGA | 31.00 € | **29.00 €** | 15.7 % | **8.2 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT3000 44,4 Wh štartér | 61.50 € | **59.50 €** | 18.5 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.70 € | **6.80 €** | 52.1 % | **18.9 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 8.70 € | **6.80 €** | 74.6 % | **36.5 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 48.90 € | **47.00 €** | 19.3 % | **14.6 %** | 47.16 € | cena podľa najlacnejšieho iného predajcu |
| 2 v 1 Diagnostic Scanner OBD2 and Battery Tester Anc... | 49.90 € | **48.00 €** | 23.2 % | **18.5 %** | 48.42 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 410B8-S | 298.90 € | **297.00 €** | 8.7 % | **8.0 %** | 297.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.50 € | **7.80 €** | 31.4 % | **7.8 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO7057S | 36.50 € | **34.90 €** | 10.9 % | **6.1 %** | 33.28 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Meteorologická stanice TechniSat IMETEO 110 | 12.50 € | **10.90 €** | 24.2 % | **8.3 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **7.80 €** | 34.3 % | **12.6 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Carrera R/C auto Desert Buggy (1:24) | 34.00 € | **32.50 €** | 10.2 % | **5.4 %** | 29.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 19.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 19.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjačka SkyRC iMax B6AC V2 | 55.50 € | **54.00 €** | 22.1 % | **18.8 %** | 54.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.30 € | **5.80 €** | 43.7 % | **14.2 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 47.00 € | **45.50 €** | 15.1 % | **11.5 %** | 45.65 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH 6756WO | 124.50 € | **123.00 €** | 10.0 % | **8.7 %** | 123.20 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 85.00 € | **83.50 €** | 19096.0 % | **18757.3 %** | 83.71 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo FF0500A | 19.00 € | **17.50 €** | 17.0 % | **7.8 %** | 17.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **33.00 €** | 26.3 % | **20.9 %** | 33.23 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 34.00 € | **32.50 €** | 20.3 % | **15.0 %** | 32.75 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DPX90 (čierna) + 3 venti... | 59.00 € | **57.50 €** | 20.4 % | **17.4 %** | 57.75 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C280 (biela) | 48.50 € | **47.00 €** | 22.5 % | **18.7 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (čierna) + 6 venti... | 64.50 € | **63.00 €** | 21.2 % | **18.3 %** | 63.33 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 16.00 € | **14.50 €** | 38.5 % | **25.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 16.00 € | **14.50 €** | 28.8 % | **16.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 27.00 € | **25.50 €** | 38.2 % | **30.6 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 17.00 € | **15.50 €** | 23.2 % | **12.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent red | 229.00 € | **227.50 €** | 16.4 % | **15.6 %** | 227.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent brown | 229.00 € | **227.50 €** | 16.4 % | **15.6 %** | 227.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection white | 208.00 € | **206.50 €** | 16.3 % | **15.4 %** | 206.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 208.00 € | **206.50 €** | 16.3 % | **15.4 %** | 206.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA+ (oranžový) | 13.00 € | **11.50 €** | 33.1 % | **17.8 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Modul plynu Moza Racing AS016 TQA | 46.00 € | **44.50 €** | 18.0 % | **14.1 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 12.00 € | **10.50 €** | 21.0 % | **5.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 82.50 € | **81.00 €** | 18.4 % | **16.3 %** | 81.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 24.50 € | **23.00 €** | 22.2 % | **14.7 %** | 23.42 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350+5 ventilátorov aRGB... | 56.50 € | **55.00 €** | 18.9 % | **15.8 %** | 55.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 13.90 € | **12.50 €** | 27.7 % | **14.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 11.90 € | **10.50 €** | 39.8 % | **23.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 16A, USB A+C rychlonabíjačka ... | 12.90 € | **11.50 €** | 25.2 % | **11.6 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.20 € | **7.80 €** | 37.7 % | **16.8 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| PS5 Minecraft | 30.90 € | **29.50 €** | 10.1 % | **5.1 %** | 25.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CPA HALO 28 černý | 44.90 € | **43.50 €** | 10.5 % | **7.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Detektor káblov FNIRSI WD-01 | 32.00 € | **30.90 €** | 9.8 % | **6.0 %** | 27.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dalekohled monokulární LEVENHUK New Wise PLUS 10x42 | 51.00 € | **49.90 €** | 7.8 % | **5.5 %** | 48.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ďalekohľad Discovery Gator 10x42 Monocular | 26.00 € | **24.90 €** | 11.1 % | **6.4 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 25.00 € | **23.90 €** | 24.2 % | **18.7 %** | 23.92 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový ovládač GoSat GS7056 HDi | 16.00 € | **14.90 €** | 13.0 % | **5.2 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Flip 6 white | 97.00 € | **95.90 €** | 6.4 % | **5.2 %** | 90.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny multimeter Uni-T UT117C | 133.00 € | **131.90 €** | 11.2 % | **10.3 %** | 131.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight PIR interiérový senzor, do krabičky od vypín... | 8.80 € | **7.80 €** | 44.2 % | **27.9 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune Beam black | 61.50 € | **60.50 €** | 7.0 % | **5.2 %** | 53.43 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bravo B -4239 čtverec | 21.50 € | **20.50 €** | 10.4 % | **5.2 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Držiak mikrofónu Maono BA20 (čierny) | 14.50 € | **13.50 €** | 15.7 % | **7.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 14.50 € | **13.50 €** | 18.0 % | **9.9 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta pre LED pásiky, rohová, 16x1... | 4.00 € | **3.00 €** | 91.3 % | **43.5 %** | 3.03 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD (čierna) + 4 ven... | 66.00 € | **65.00 €** | 18.4 % | **16.6 %** | 65.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 5m | 8.90 € | **7.90 €** | 61.2 % | **43.0 %** | 7.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lištal pre LED pásky 2, 18x9mm, ml... | 3.60 € | **2.60 €** | 95.1 % | **40.9 %** | 2.68 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 14.00 € | **13.00 €** | 13.3 % | **5.2 %** | 13.08 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 14.00 € | **13.00 €** | 30.1 % | **20.8 %** | 13.08 € | cena podľa najlacnejšieho iného predajcu |
| Sati Hansi Doux et Suave 1000g zrno | 24.00 € | **23.00 €** | 17.2 % | **12.3 %** | 23.10 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 243.90 € | **242.90 €** | 6.7 % | **6.2 %** | 243.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 418.90 € | **417.90 €** | 11.8 % | **11.6 %** | 418.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 397.90 € | **396.90 €** | 6.5 % | **6.2 %** | 397.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 222.90 € | **221.90 €** | 40171.0 % | **39990.3 %** | 222.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 659.90 € | **658.90 €** | 119123.1 % | **118942.5 %** | 659.00 € | cena podľa najlacnejšieho iného predajcu |
| Latarka Superfire L3 P90 | 29.50 € | **28.50 €** | 13.4 % | **9.6 %** | 28.63 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerstation Uni FIXPOS-U-BK | 34.50 € | **33.50 €** | 11.7 % | **8.5 %** | 33.82 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná Wi-Fi brána MEROSS MSH400HK-EU | 19.00 € | **18.00 €** | 16.3 % | **10.2 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| Centrala Bramka WiFi MSH450MA Meross | 19.00 € | **18.00 €** | 13.3 % | **7.4 %** | 18.33 € | cena podľa najlacnejšieho iného predajcu |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 49.00 € | **48.00 €** | 9.8 % | **7.6 %** | 48.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 26.50 € | **25.50 €** | 44.5 % | **39.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 12.50 € | **11.50 €** | 22.1 % | **12.4 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 50.50 € | **49.50 €** | 26.4 % | **23.9 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **165.50 €** | 11.1 % | **10.4 %** | 165.90 € | cena podľa najlacnejšieho iného predajcu |
| MAXXO VM 3550 | 25.50 € | **24.50 €** | 15.2 % | **10.7 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.50 € | **15.50 €** | 36.1 % | **27.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| FIXED pouzdro Xiaomi R Pad 2 FIXTOT-1199 | 20.50 € | **19.50 €** | 57.2 % | **49.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla MOZA RACING MHG | 110.50 € | **109.50 €** | 13.8 % | **12.8 %** | 109.90 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing SR-P Lite RS19 for R3/R5 | 41.50 € | **40.50 €** | 13.0 % | **10.3 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Maliřská sada v kufru Maaleo 8643 288 ks | 18.50 € | **17.50 €** | 22.8 % | **16.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2354B2 Stepper (Black) | 61.50 € | **60.50 €** | 23.5 % | **21.5 %** | 60.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 88.50 € | **87.50 €** | 25.4 % | **24.0 %** | 87.90 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 253.00 € | **252.00 €** | 62230.6 % | **61984.3 %** | 252.42 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 44.00 € | **43.00 €** | 15.8 % | **13.2 %** | 43.48 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 14.00 € | **13.00 €** | 94.6 % | **80.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 29.00 € | **28.00 €** | 24.2 % | **19.9 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| Fototaška cez rameno Puluz (čierna) | 26.00 € | **25.00 €** | 26.9 % | **22.0 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| NESCAFÉ® DG Flat White kapsle 30 ks | 10.90 € | **10.00 €** | 15.4 % | **5.8 %** | 8.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 4.70 € | **3.80 €** | 42.0 % | **14.8 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.60 € | **2.80 €** | 41.4 % | **10.0 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta s bočnicami pre LED pásiky, ... | 4.00 € | **3.20 €** | 78.7 % | **42.9 %** | 3.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníková lišta pre LED pásky 1, 17x8mm, mli... | 3.60 € | **2.90 €** | 74.2 % | **40.3 %** | 3.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 7.50 € | **6.80 €** | 33.4 % | **21.0 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 20W, 1700lm, 4000K, IP6... | 6.50 € | **5.80 €** | 44.0 % | **28.5 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 10.50 € | **9.80 €** | 25.4 % | **17.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **9.80 €** | 26.5 % | **18.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.50 € | **9.80 €** | 41.3 % | **31.9 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 415.50 € | **414.90 €** | 10.2 % | **10.0 %** | 415.00 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 20.50 € | **19.90 €** | 12.8 % | **9.5 %** | 19.92 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17A FIXSHM-1601-TR | 17.50 € | **16.90 €** | 13.4 % | **9.5 %** | 16.98 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7059S | 34.50 € | **33.90 €** | 17.1 % | **15.0 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.40 € | **7.80 €** | 38.0 % | **28.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.40 € | **7.80 €** | 32.1 % | **22.7 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| CARRERA 734457 GO/GO+ 61663 Elektronický | 12.50 € | **11.90 €** | 11.4 % | **6.1 %** | 11.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Carrera GO 64034 Mario Kart - Luigi | 15.50 € | **14.90 €** | 10.7 % | **6.4 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.30 € | **5.70 €** | 39.9 % | **26.6 %** | 5.79 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (biely) | 13.50 € | **12.90 €** | 11.2 % | **6.3 %** | 13.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 85.50 € | **84.90 €** | 5.8 % | **5.1 %** | 84.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera OBSBOT Meet SE (biela) | 83.50 € | **82.90 €** | 11.9 % | **11.1 %** | 83.00 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet SE (sivá) | 83.50 € | **82.90 €** | 14.2 % | **13.4 %** | 83.00 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Pins 4 PRO Onyx Black | 45.00 € | **44.50 €** | 7.0 % | **5.8 %** | 34.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nescafé Dolce Gusto Latte Macchiato 30ca | 10.50 € | **10.00 €** | 11.1 % | **5.8 %** | 9.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **20.50 €** | 26.4 % | **23.4 %** | 20.53 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.50 € | **15.00 €** | 8.7 % | **5.2 %** | 15.04 € | cena podľa najlacnejšieho iného predajcu |
| Zásuvkový termostatický regulátor teploty Meross MTS... | 37.00 € | **36.50 €** | 18.6 % | **17.0 %** | 36.57 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 14.5 % | **12.2 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Ali pouzdro Mag-Skin iPhon17 Pro PAS0028 | 15.00 € | **14.50 €** | 13.5 % | **9.8 %** | 14.58 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPhone 17 FIXSHM-1600-TR | 17.50 € | **17.00 €** | 13.4 % | **10.1 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 17.50 € | **17.00 €** | 13.4 % | **10.1 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **17.00 €** | 13.4 % | **10.1 %** | 17.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.30 € | **3.80 €** | 44.5 % | **27.7 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.30 € | **6.80 €** | 36.1 % | **26.8 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 248.50 € | **248.00 €** | 21.6 % | **21.3 %** | 248.10 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 351.00 € | **350.50 €** | 35.2 % | **35.0 %** | 350.60 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 12.50 € | **12.00 €** | 24.2 % | **19.3 %** | 12.17 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 233.00 € | **232.50 €** | 24.1 % | **23.9 %** | 232.70 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Honor Pad 8 FIXTOT-1145 | 15.50 € | **15.00 €** | 22.5 % | **18.5 %** | 15.20 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 245.00 € | **244.50 €** | 7.9 % | **7.7 %** | 244.72 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 13.00 € | **12.50 €** | 23.8 % | **19.0 %** | 12.74 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RB | 214.00 € | **213.50 €** | 10.5 % | **10.3 %** | 213.74 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 240.00 € | **239.50 €** | 5.5 % | **5.2 %** | 239.75 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 20.50 € | **20.00 €** | 17.0 % | **14.2 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 46.00 € | **45.50 €** | 9.4 % | **8.2 %** | 45.79 € | cena podľa najlacnejšieho iného predajcu |
| Svetelný merač UNI-T UT383 | 16.50 € | **16.00 €** | 11.1 % | **7.8 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **12.00 €** | 17.6 % | **12.9 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| REBEL Micropower 1000 | 77.00 € | **76.50 €** | 9.9 % | **9.2 %** | 76.79 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.50 € | **12.00 €** | 11.4 % | **7.0 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| Vodná fontána pre domáce zvieratá Petoneer Fresco mi... | 33.50 € | **33.00 €** | 20.8 % | **19.0 %** | 33.29 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **51.50 €** | 6.5 % | **5.4 %** | 51.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor kľúčenka, Find My kompatibilný | 16.00 € | **15.50 €** | 40.8 % | **36.4 %** | 15.82 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 43.00 € | **42.50 €** | 11.3 % | **10.0 %** | 42.89 € | cena podľa najlacnejšieho iného predajcu |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.50 € | **26.00 €** | 11.9 % | **9.8 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Perfect Steam Air Board S/M | 16.00 € | **15.50 €** | 21.5 % | **17.7 %** | 15.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 38.00 € | **37.50 €** | 10.5 % | **9.1 %** | 37.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 48.00 € | **47.50 €** | 9.6 % | **8.4 %** | 47.89 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.00 €** | 11.2 % | **8.2 %** | 18.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Rolfix 150 Trip | 18.00 € | **17.50 €** | 9.0 % | **6.0 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.50 € | **21.00 €** | 10.6 % | **8.1 %** | 21.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Linomatic 500 Easy 85286 | 96.00 € | **95.50 €** | 5.8 % | **5.2 %** | 95.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 112.00 € | **111.50 €** | 6.1 % | **5.6 %** | 111.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 99.50 € | **99.00 €** | 7.8 % | **7.2 %** | 99.39 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.50 € | **33.00 €** | 8.8 % | **7.2 %** | 33.39 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 102.00 € | **101.50 €** | 6.0 % | **5.5 %** | 101.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 930.00 € | **929.50 €** | 18.2 % | **18.1 %** | 929.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT665P-5m endoskop | 42.00 € | **41.50 €** | 23.8 % | **22.3 %** | 41.89 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 53.00 € | **52.50 €** | 10.8 % | **9.7 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 81.50 € | **81.00 €** | 13.2 % | **12.6 %** | 81.39 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 850.50 € | **850.00 €** | 10.5 % | **10.4 %** | 850.39 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 391.00 € | **390.50 €** | 8.5 % | **8.4 %** | 390.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 317.50 € | **317.00 €** | 8.8 % | **8.6 %** | 317.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 83.50 € | **83.00 €** | 7.6 % | **6.9 %** | 83.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 119.50 € | **119.00 €** | 11.5 % | **11.0 %** | 119.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 111.50 € | **111.00 €** | 7.7 % | **7.2 %** | 111.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 143.50 € | **143.00 €** | 7.8 % | **7.4 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo vodní filtry 3+1 | 12.50 € | **12.00 €** | 18.3 % | **13.6 %** | 12.39 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 78.00 € | **77.50 €** | 14.6 % | **13.9 %** | 77.89 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1283.00 € | **1282.50 €** | 7.0 % | **6.9 %** | 1282.89 € | cena podľa najlacnejšieho iného predajcu |
| Ariete XVapor Comfort 4145/BL | 79.00 € | **78.50 €** | 7.4 % | **6.7 %** | 78.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 57.00 € | **56.50 €** | 19.0 % | **18.0 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3226  XXL toaster, 900 W | 20.00 € | **19.50 €** | 13.1 % | **10.2 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42602S | 39.50 € | **39.00 €** | 9.6 % | **8.2 %** | 39.39 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3236 | 33.00 € | **32.50 €** | 12.7 % | **11.0 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9286IB | 244.00 € | **243.50 €** | 5.5 % | **5.2 %** | 243.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 85.50 € | **85.00 €** | 6.7 % | **6.1 %** | 85.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 24.50 € | **24.00 €** | 10.8 % | **8.6 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| YAMAHA CD-S303 BLACK | 375.00 € | **374.50 €** | 5.3 % | **5.2 %** | 374.89 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 38.50 € | **38.00 €** | 13.9 % | **12.4 %** | 38.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 272.00 € | **271.50 €** | 6.5 % | **6.3 %** | 271.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 253.00 € | **252.50 €** | 5.5 % | **5.3 %** | 252.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 155.00 € | **154.50 €** | 9.8 % | **9.5 %** | 154.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 11.00 € | **10.50 €** | 32.5 % | **26.5 %** | 10.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 74.50 € | **74.00 €** | 13.0 % | **12.2 %** | 74.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 27.00 € | **26.50 €** | 7.6 % | **5.6 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný mini spínač ZigBee SONOFF ZBMINIR2 | 11.50 € | **11.00 €** | 21.7 % | **16.4 %** | 11.39 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 46.50 € | **46.00 €** | 18.3 % | **17.0 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 134.50 € | **134.00 €** | 17.6 % | **17.1 %** | 134.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 177.00 € | **176.50 €** | 14.3 % | **14.0 %** | 176.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 77.50 € | **77.00 €** | 33.2 % | **32.3 %** | 77.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 234.00 € | **233.50 €** | 6.5 % | **6.3 %** | 233.89 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.00 € | **23.50 €** | 13.2 % | **10.8 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 200.00 € | **199.50 €** | 5.7 % | **5.5 %** | 199.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 265.00 € | **264.50 €** | 5.3 % | **5.1 %** | 264.89 € | cena podľa najlacnejšieho iného predajcu |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 34.00 € | **33.50 €** | 9.6 % | **8.0 %** | 33.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 657.00 € | **656.50 €** | 5.8 % | **5.7 %** | 656.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 72.50 € | **72.00 €** | 8.4 % | **7.6 %** | 72.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 315.00 € | **314.50 €** | 7.2 % | **7.0 %** | 314.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 646.00 € | **645.50 €** | 9.1 % | **9.0 %** | 645.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 692.00 € | **691.50 €** | 12.9 % | **12.8 %** | 691.89 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz, 3 ks | 23.00 € | **22.50 €** | 13.8 % | **11.3 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz s pumpou, 4 ks | 37.00 € | **36.50 €** | 12.9 % | **11.4 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| Status STA 177159 | 11.00 € | **10.50 €** | 12.4 % | **7.2 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE Mělký plech 222709/242132 | 15.00 € | **14.50 €** | 14.1 % | **10.3 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.00 € | **12.50 €** | 28.4 % | **23.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 22.00 € | **21.50 €** | 26.8 % | **23.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 13.00 € | **12.50 €** | 24.8 % | **20.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 20.00 € | **19.50 €** | 13.9 % | **11.1 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 20.00 € | **19.50 €** | 13.9 % | **11.1 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E3T1-3ST | 31.00 € | **30.50 €** | 10.4 % | **8.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.00 € | **15.50 €** | 14.4 % | **10.8 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 sáčky 40 x 50 cm, 50 ks, hladké | 12.00 € | **11.50 €** | 16.4 % | **11.6 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1-Ss | 126.00 € | **125.50 €** | 7.2 % | **6.8 %** | 125.90 € | cena podľa najlacnejšieho iného predajcu |
| Xiaomi Redmi Buds 8 Active Black | 16.50 € | **16.00 €** | 10.0 % | **6.6 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 29.00 € | **28.50 €** | 18.5 % | **16.4 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 18.50 € | **18.00 €** | 14.0 % | **10.9 %** | 18.44 € | cena podľa najlacnejšieho iného predajcu |
| Bramka GL.iNet GL-MT5000 | 145.50 € | **145.00 €** | 9.7 % | **9.3 %** | 145.47 € | cena podľa najlacnejšieho iného predajcu |
| Carrera GCO2009 Auto FIRST 65018 Cars Ja | 12.50 € | **12.00 €** | 11.4 % | **7.0 %** | 12.49 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-M, 50 m, viacfarebná... | 20.50 € | **20.00 €** | 43.2 % | **39.7 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 14.50 € | **14.00 €** | 43.9 % | **39.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 W bez ventilátorov... | 47.50 € | **47.00 €** | 19.5 % | **18.2 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MO20E1T4 | 65.90 € | **65.50 €** | 5.7 % | **5.1 %** | 62.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C665G KIT 4MPx, vonkajšia, IP PT... | 194.90 € | **194.50 €** | 5.4 % | **5.2 %** | 192.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete Pizzeria 927/01, černá | 244.90 € | **244.50 €** | 29.9 % | **29.7 %** | 244.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo SC750W Turbo | 98.90 € | **98.50 €** | 10.1 % | **9.7 %** | 98.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Čistič prachu DUSTY Telescope 2 | 14.90 € | **14.50 €** | 10.5 % | **7.6 %** | 6.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nordic walking hole NILS EXTREME NW607 modré | 15.90 € | **15.50 €** | 8.4 % | **5.7 %** | 13.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Banquet Termoska BODO 430ml zla.met. | 10.90 € | **10.50 €** | 13.6 % | **9.4 %** | 9.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.90 € | **11.50 €** | 10.6 % | **6.9 %** | 11.86 € | cena podľa najlacnejšieho iného predajcu |
| MAXXO VC 1800 | 23.90 € | **23.50 €** | 13.4 % | **11.5 %** | 23.60 € | cena podľa najlacnejšieho iného predajcu |
| TESLA MultiCook RC400 Low Carb | 61.90 € | **61.50 €** | 7.1 % | **6.4 %** | 61.69 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 30.90 € | **30.50 €** | 26.4 % | **24.7 %** | 30.79 € | cena podľa najlacnejšieho iného predajcu |
| Boffin I 100 | 24.90 € | **24.50 €** | 10.9 % | **9.1 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 613.90 € | **613.50 €** | 6.8 % | **6.8 %** | 613.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight zástrčka do vlhka, priama, IP44, čierna-oran... | 3.10 € | **2.80 €** | 34.1 % | **21.1 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.10 € | **5.80 €** | 27.5 % | **21.2 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.30 € | **8.10 €** | 41.8 % | **38.3 %** | 8.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight časový spínač, týždeň, 1 režim | 4.00 € | **3.80 €** | 23.7 % | **17.5 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.00 € | **9.80 €** | 20.3 % | **17.9 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.00 € | **8.80 €** | 42.1 % | **38.9 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 9.00 € | **8.80 €** | 34.8 % | **31.8 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **43.90 €** | 5.8 % | **5.5 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 39.00 € | **38.90 €** | 24.6 % | **24.3 %** | 39.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight kovový okrúhly lampáš so žiarovkou s micro L... | 5.90 € | **5.80 €** | 21.7 % | **19.7 %** | 5.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 2.90 € | **2.80 €** | 42.9 % | **38.0 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI držák do auta s Magsafe AMS06BK | 15.00 € | **14.90 €** | 6.0 % | **5.3 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **9.80 €** | 37.4 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-WW, 5 m, ... | 5.80 € | **5.70 €** | 43.8 % | **41.3 %** | 5.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtové magnetické čidlo pre gong 1D23, 1... | 9.90 € | **9.80 €** | 34.1 % | **32.8 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 123.00 € | **122.90 €** | 19.0 % | **18.9 %** | 123.00 € | cena podľa najlacnejšieho iného predajcu |

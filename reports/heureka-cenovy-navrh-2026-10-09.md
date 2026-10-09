# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-09

Vstup: `premiumstore-sk_2026-10-09_11-01.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7377**
- Návrh **zvýšiť** cenu: **185** produktov
- Návrh **znížiť** cenu: **400** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6792** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **78**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **752**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (185)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria Flytec V900 12000mah | 16.00 € | **223.90 €** | 15.3 % | **1513.8 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **223.90 €** | 14.5 % | **476.1 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2  (veľkosť 13, strieborn... | 178.00 € | **274.90 €** | 14.9 % | **77.5 %** | 274.93 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 E62SD200SW | 409.50 € | **504.90 €** | 10.0 % | **35.7 %** | 505.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux 600 SensiCare® EW6T106C | 328.90 € | **408.90 €** | 10.1 % | **36.9 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 812.90 € | **888.50 €** | 10.0 % | **20.3 %** | 888.90 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate 7 Pro | 270.90 € | **336.90 €** | 15.1 % | **43.1 %** | 337.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko BDIN38641Q | 365.50 € | **424.90 €** | 23.0 % | **43.0 %** | 424.99 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TB | 299.50 € | **349.50 €** | 10.1 % | **28.4 %** | 349.90 € | cena podľa najlacnejšieho iného predajcu |
| Robotický vysávač ULTENIC T20 PRO | 227.90 € | **276.90 €** | 15.1 % | **39.8 %** | 277.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 283.50 € | **317.90 €** | 15.0 % | **29.0 %** | 318.00 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 218.50 € | **249.00 €** | 10.2 % | **25.6 %** | 249.10 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 117A | 233.00 € | **263.00 €** | 10.0 % | **24.2 %** | 263.20 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátorový vysávač ULTENIC U18 Pro | 129.00 € | **158.90 €** | 14.9 % | **41.5 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 290.50 € | **317.50 €** | 5.9 % | **15.7 %** | 317.63 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Rozšiřující set 3 | 30.50 € | **54.00 €** | 27.9 % | **126.4 %** | 54.21 € | cena podľa najlacnejšieho iného predajcu |
| Základňa na čistenie textílií a kobercov pre vysávač... | 61.90 € | **84.00 €** | 15.3 % | **56.4 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Braun IS5247.VI | 186.50 € | **208.50 €** | 10.0 % | **23.0 %** | 208.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 340A | 361.50 € | **383.50 €** | 10.0 % | **16.7 %** | 383.90 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing 85mm pre ELLI... | 40.00 € | **61.90 €** | 25.1 % | **93.6 %** | 62.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (červený) | 20.90 € | **39.50 €** | 16.1 % | **119.4 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (čierny) | 20.90 € | **39.50 €** | 16.1 % | **119.4 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (oranžový) | 20.90 € | **39.50 €** | 16.1 % | **119.4 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový reproduktor QCY SP3 (ružový) | 20.90 € | **39.50 €** | 16.1 % | **119.4 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva pre valček MOVA Z60 Ultra | 49.00 € | **64.00 €** | 14.9 % | **50.1 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Nikon | 224.00 € | **237.90 €** | 14.9 % | **22.0 %** | 238.00 € | cena podľa najlacnejšieho iného predajcu |
| BenQ brašna k projektorům MX711/710/660/ | 34.90 € | **46.00 €** | 10.5 % | **45.7 %** | 46.16 € | cena podľa najlacnejšieho iného predajcu |
| Televes DAT HD BOSS 700 TFORCE LTE700 | 80.50 € | **91.00 €** | 16.6 % | **31.8 %** | 91.48 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 94.00 € | **104.00 €** | 31.3 % | **45.3 %** | 104.50 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD200XS (biely) | 48.50 € | **57.50 €** | 15.3 % | **36.7 %** | 57.73 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD300X | 61.50 € | **69.50 €** | 15.4 % | **30.4 %** | 69.87 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie NEEWER BASICS VL67B | 33.90 € | **41.50 €** | 15.2 % | **41.0 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 60 Ah  Victron Energy AGM Sup... | 172.50 € | **180.00 €** | 10.8 % | **15.6 %** | 180.44 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R10 21,6MM 12 (čierny) | 29.90 € | **37.00 €** | 15.6 % | **43.1 %** | 37.45 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10022 | 138.00 € | **144.90 €** | 10.1 % | **15.6 %** | 145.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DJI ROMO | 136.00 € | **142.90 €** | 14.8 % | **20.7 %** | 143.00 € | cena podľa najlacnejšieho iného predajcu |
| Kit Neewer NK800 two softboxes + bulbs RGB 24W 2700-... | 87.00 € | **93.90 €** | 14.7 % | **23.9 %** | 94.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 863.50 € | **870.00 €** | 23.6 % | **24.5 %** | 870.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 75.90 € | **82.00 €** | 10.0 % | **18.9 %** | 82.47 € | cena podľa najlacnejšieho iného predajcu |
| Závaží na kotníky a zápěstí 2x2kg, REBEL ACTIVE RBA-... | 14.00 € | **19.50 €** | 39.5 % | **94.3 %** | 19.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 41.50 € | **47.00 €** | 16.8 % | **32.3 %** | 47.40 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Nikon | 86.50 € | **91.90 €** | 14.8 % | **22.0 %** | 92.00 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M02S AI | 59.50 € | **64.50 €** | 28.3 % | **39.1 %** | 64.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor PRO, 50W, 4600lm, 5000K, IP65 | 16.50 € | **20.50 €** | 15.0 % | **42.9 %** | 20.80 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2506.50 € | **2510.50 €** | 14.4 % | **14.6 %** | 2510.81 € | cena podľa najlacnejšieho iného predajcu |
| Fixed MagPad, bílá FIXMPAD2-WH | 11.50 € | **15.50 €** | 11.8 % | **50.7 %** | 15.86 € | cena podľa najlacnejšieho iného predajcu |
| Magnetická rukoväť MagSafe Fun Shot Grip2 (biela) | 21.00 € | **25.00 €** | 14.0 % | **35.8 %** | 25.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 119.50 € | **123.00 €** | 11.0 % | **14.3 %** | 123.26 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, černé ASG001 | 84.50 € | **88.00 €** | 16.7 % | **21.5 %** | 88.43 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart Glasses Sport, modré ASG002 | 84.50 € | **88.00 €** | 16.7 % | **21.5 %** | 88.43 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 05B1 | 105.50 € | **109.00 €** | 10.3 % | **13.9 %** | 109.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 18.50 € | **21.90 €** | 17.0 % | **38.6 %** | 21.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 12.50 € | **15.50 €** | 8.1 % | **34.1 %** | 15.59 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM SUNNY Android TV 4K UHD Android TV multimediá... | 69.50 € | **72.50 €** | 7.0 % | **11.6 %** | 72.90 € | cena podľa najlacnejšieho iného predajcu |
| Magnetické puzdro Torras Guardian Series pre telefón... | 11.50 € | **14.50 €** | 14.9 % | **44.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 338DD | 540.50 € | **543.50 €** | 10.0 % | **10.6 %** | 543.90 € | cena podľa najlacnejšieho iného predajcu |
| Maono AME2 Sound Card Black | 83.00 € | **85.90 €** | 14.9 % | **18.9 %** | 86.00 € | cena podľa najlacnejšieho iného predajcu |
| Gumová kefa ROMO | 21.00 € | **23.90 €** | 13.8 % | **29.5 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Kefa ROMO so štetinami a gumovými prvkami | 21.00 € | **23.90 €** | 13.8 % | **29.5 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1441.50 € | **1444.00 €** | 7.3 % | **7.5 %** | 1444.11 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX iM30 | 30.50 € | **33.00 €** | 15.3 % | **24.7 %** | 33.20 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 10.50 € | **13.00 €** | 45.9 % | **80.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu |
| Drôtové slúchadlá do uší TRUTHEAR Zero (červené) | 57.00 € | **59.00 €** | 15.5 % | **19.6 %** | 59.03 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 23.50 € | **25.50 €** | 7.8 % | **17.0 %** | 25.57 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAK4200CT  bezdrátová sluchátka | 37.00 € | **39.00 €** | 7.5 % | **13.3 %** | 39.33 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 12.00 € | **14.00 €** | 45.0 % | **69.1 %** | 14.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight lištové osvetlenie, 2x120cm, 6x GU10 bodové ... | 46.00 € | **48.00 €** | 37.9 % | **43.9 %** | 48.37 € | cena podľa najlacnejšieho iného predajcu |
| Solight lištové osvetlenie, 2x120cm, 6x GU10 bodové ... | 46.00 € | **48.00 €** | 37.9 % | **43.9 %** | 48.37 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing SR-P Lite RS19 for R3/R5 | 40.50 € | **42.50 €** | 10.3 % | **15.8 %** | 42.87 € | cena podľa najlacnejšieho iného predajcu |
| Filtračné čerpadlo SUNSUN CHJ-902 | 11.50 € | **13.50 €** | 16.1 % | **36.3 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V101-W, 10 m, ... | 6.80 € | **8.70 €** | 36.5 % | **74.6 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Vrecko na prach pre základňovú stanicu ROMO | 21.00 € | **22.90 €** | 13.8 % | **24.1 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Nádoba na zachytávanie dymu xTool SafetyPro™ AP2 | 1019.90 € | **1021.50 €** | 15.7 % | **15.9 %** | 1021.53 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Profi XL + náhrada Static Plus | 59.90 € | **61.50 €** | 6.7 % | **9.6 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **16.00 €** | 11.5 % | **23.1 %** | 16.14 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 74.50 € | **76.00 €** | 10.4 % | **12.7 %** | 76.20 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX ZE064 | 29.50 € | **31.00 €** | 11.0 % | **16.7 %** | 31.20 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny RCD / tester odporu slučky Habotest HT5910 | 131.50 € | **133.00 €** | 14.9 % | **16.2 %** | 133.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 10.00 € | **11.50 €** | 18.3 % | **36.1 %** | 11.73 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link SM6220-1M SFP+ Direct Attach Cable, 25... | 47.00 € | **48.50 €** | 11.7 % | **15.3 %** | 48.74 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot My Dino II | 20.00 € | **21.50 €** | 18.8 % | **27.7 %** | 21.75 € | cena podľa najlacnejšieho iného predajcu |
| PETKIT PURA MAX 2 Krmivo pre mačky | 23.50 € | **25.00 €** | 14.5 % | **21.9 %** | 25.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 11.00 € | **12.50 €** | 102.8 % | **130.4 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 13.50 € | **14.90 €** | 15.0 % | **27.0 %** | 14.94 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV5736E0 | 52.50 € | **53.90 €** | 10.0 % | **13.0 %** | 54.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight GU10 bodové osvetlenie Enzo, 4x GU10, 59cm, ... | 25.90 € | **27.00 €** | 38.8 % | **44.7 %** | 27.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight GU10 bodové osvetlenie Enzo, 6x GU10, 119cm,... | 30.90 € | **32.00 €** | 38.9 % | **43.8 %** | 32.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight lištové osvetlenie, 2x80cm, 4x GU10 bodové s... | 30.90 € | **32.00 €** | 38.9 % | **43.8 %** | 32.26 € | cena podľa najlacnejšieho iného predajcu |
| Solight lištové osvetlenie, 2x80cm, 4x GU10 bodové s... | 30.90 € | **32.00 €** | 38.9 % | **43.8 %** | 32.26 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXSA754E | 35.90 € | **37.00 €** | 10.6 % | **14.0 %** | 37.30 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NB907MAW | 61.90 € | **63.00 €** | 10.1 % | **12.1 %** | 63.40 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 193.90 € | **195.00 €** | 5.0 % | **5.6 %** | 195.29 € | cena podľa najlacnejšieho iného predajcu |
| Graef WA 80 | 96.90 € | **98.00 €** | 10.3 % | **11.6 %** | 98.36 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100WS (čierny) | 55.00 € | **56.00 €** | 22.0 % | **24.2 %** | 56.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight GU10 bodové osvetlenie Enzo, 3x GU10, 39cm, ... | 19.50 € | **20.50 €** | 37.3 % | **44.3 %** | 20.60 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P101CUD100 | 32.90 € | **33.90 €** | 5.3 % | **8.5 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 36.50 € | **37.50 €** | 6.2 % | **9.1 %** | 37.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.00 € | **11.00 €** | 20.3 % | **32.3 %** | 11.20 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100W (čierny) | 47.00 € | **48.00 €** | 22.2 % | **24.8 %** | 48.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač Sonoff SPM-Main LAN (ethernet) WiFi | 18.00 € | **19.00 €** | 14.0 % | **20.3 %** | 19.21 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 461 | 28.50 € | **29.50 €** | 10.7 % | **14.6 %** | 29.73 € | cena podľa najlacnejšieho iného predajcu |
| Eleven SDC444XRPKE | 10.50 € | **11.50 €** | 14.9 % | **25.8 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 252.00 € | **253.00 €** | 61984.3 % | **62230.6 %** | 253.33 € | cena podľa najlacnejšieho iného predajcu |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 124.00 € | **125.00 €** | 12.5 % | **13.4 %** | 125.37 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Vitoria PV3700 | 31.50 € | **32.50 €** | 10.1 % | **13.6 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 21.50 € | **22.50 €** | 8.9 % | **14.0 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladiaca taška do auta Hcalory D40+ s Bluetooth | 248.50 € | **249.50 €** | 23.4 % | **23.9 %** | 249.90 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 24.00 € | **25.00 €** | 10.4 % | **15.0 %** | 25.44 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD200WS (čierny) | 95.00 € | **96.00 €** | 23.7 % | **25.0 %** | 96.46 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 14.00 € | **15.00 €** | 39.5 % | **49.5 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Kaon MZ-104 Skylink Nagravision bezkartový systém | 116.00 € | **116.90 €** | 4.3 % | **5.1 %** | 109.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Interaktívny robot Loona Premium | 465.00 € | **465.90 €** | 18.0 % | **18.2 %** | 465.99 € | cena podľa najlacnejšieho iného predajcu |
| Batoh Cattara RUNNER BLUE 38l | 23.90 € | **24.50 €** | 3.0 % | **5.6 %** | 23.32 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 23.90 € | **24.50 €** | 14.4 % | **17.2 %** | 24.55 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO727BL | 57.90 € | **58.50 €** | 10.0 % | **11.2 %** | 58.67 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1016501 | 29.90 € | **30.50 €** | 10.4 % | **12.6 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 296.50 € | **297.00 €** | 10.9 % | **11.1 %** | 297.02 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61617 Zatáčka 2/45 (4ks) - GO | 13.50 € | **14.00 €** | 20.3 % | **24.8 %** | 14.02 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 29.00 € | **29.50 €** | 18.5 % | **20.5 %** | 29.53 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9046C | 51.00 € | **51.50 €** | 8.2 % | **9.2 %** | 51.54 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP211-Bridge KIT vonkajší spoj,... | 145.50 € | **146.00 €** | 8.1 % | **8.5 %** | 146.05 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 38 Ah  Victron Energy AGM Sup... | 124.00 € | **124.50 €** | 12.3 % | **12.8 %** | 124.56 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 151.50 € | **152.00 €** | 30.7 % | **31.1 %** | 152.06 € | cena podľa najlacnejšieho iného predajcu |
| 43-80" TV mount Perlegear PGFS08-US | 125.00 € | **125.50 €** | 20.1 % | **20.6 %** | 125.57 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 233.50 € | **234.00 €** | 9.9 % | **10.2 %** | 234.07 € | cena podľa najlacnejšieho iného predajcu |
| Nastavitelné zátěže na zápěstí a kotníky HMS ONK02 2... | 12.00 € | **12.50 €** | 5.8 % | **10.2 %** | 12.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight GU10 bodové osvetlenie Enzo, 2x GU10, 26cm, ... | 13.50 € | **14.00 €** | 38.9 % | **44.1 %** | 14.09 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-4In1 | 123.00 € | **123.50 €** | 7.7 % | **8.1 %** | 123.59 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.00 € | **216.50 €** | 16.9 % | **17.1 %** | 216.59 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.00 € | **137.50 €** | 14.8 % | **15.2 %** | 137.60 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A215W03,21,5" | 162.50 € | **163.00 €** | 12.0 % | **12.4 %** | 163.10 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 166.00 € | **166.50 €** | 15.6 % | **15.9 %** | 166.60 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.00 € | **166.50 €** | 15.6 % | **15.9 %** | 166.60 € | cena podľa najlacnejšieho iného predajcu |
| Aligator R60 eXtremo Black Orange | 91.00 € | **91.50 €** | 14.0 % | **14.6 %** | 91.61 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Pearl 2x3" (ružová) | 91.00 € | **91.50 €** | 27.9 % | **28.6 %** | 91.61 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 237.00 € | **237.50 €** | 6.7 % | **7.0 %** | 237.64 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 417.50 € | **418.00 €** | 13.4 % | **13.6 %** | 418.20 € | cena podľa najlacnejšieho iného predajcu |
| Carrera R/C auto Desert Buggy (1:24) | 32.50 € | **33.00 €** | 5.4 % | **7.0 %** | 33.20 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 319.00 € | **319.50 €** | 12.6 % | **12.8 %** | 319.71 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 345.00 € | **345.50 €** | 6.8 % | **7.0 %** | 345.75 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 345.00 € | **345.50 €** | 11.4 % | **11.6 %** | 345.75 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 286.00 € | **286.50 €** | 15.9 % | **16.1 %** | 286.75 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 295.00 € | **295.50 €** | 12.5 % | **12.7 %** | 295.75 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-M, 50 m, viacfarebná... | 20.00 € | **20.50 €** | 39.7 % | **43.2 %** | 20.76 € | cena podľa najlacnejšieho iného predajcu |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.50 € | **18.00 €** | 10.3 % | **13.4 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 71599 SkokánekGO/GO+/D143 | 24.00 € | **24.50 €** | 20.7 % | **23.3 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Excellent Cappuccino | 228.50 € | **229.00 €** | 16.1 % | **16.4 %** | 229.32 € | cena podľa najlacnejšieho iného predajcu |
| Štúdiové slúchadlá Maono AU-MH601 | 35.50 € | **36.00 €** | 21.6 % | **23.3 %** | 36.42 € | cena podľa najlacnejšieho iného predajcu |
| KMP H125 (CZ101AE) | 16.50 € | **17.00 €** | 56.5 % | **61.3 %** | 17.47 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový merač Habotest HT208D | 47.50 € | **48.00 €** | 15.1 % | **16.3 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT4000 74 Wh štartér | 116.50 € | **116.90 €** | 17.3 % | **17.7 %** | 116.95 € | cena podľa najlacnejšieho iného predajcu |
| CANDY CH 64 XB | 162.50 € | **162.90 €** | 13.6 % | **13.9 %** | 162.95 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy T4-04 ceramic/electric cooktop | 106.50 € | **106.90 €** | 16.1 % | **16.5 %** | 106.97 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 84.50 € | **84.90 €** | 26.4 % | **27.0 %** | 84.99 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 232.50 € | **232.90 €** | 23.9 % | **24.1 %** | 233.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.60 € | **7.00 €** | 36.2 % | **44.4 %** | 7.03 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 52.50 € | **52.90 €** | 8.6 % | **9.4 %** | 52.96 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 29.50 € | **29.90 €** | 17.3 % | **18.9 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-838 5G | 22.50 € | **22.90 €** | 28.3 % | **30.6 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Bočná kefa ROMO | 19.50 € | **19.90 €** | 15.2 % | **17.6 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell O... | 17.50 € | **17.90 €** | 8.1 % | **10.6 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 299.50 € | **299.90 €** | 35.8 % | **36.0 %** | 299.92 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 9, strieborná) | 299.50 € | **299.90 €** | 35.8 % | **36.0 %** | 299.92 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 375.50 € | **375.90 €** | 26.6 % | **26.7 %** | 375.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 375.50 € | **375.90 €** | 20.5 % | **20.6 %** | 375.99 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 350.50 € | **350.90 €** | 35.0 % | **35.2 %** | 351.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight GU10 bodové osvetlenie Enzo, 1x GU10, biela | 5.80 € | **6.00 €** | 38.7 % | **43.5 %** | 6.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight GU10 bodové svietidlo pre lištový systém, 23... | 6.50 € | **6.70 €** | 39.1 % | **43.3 %** | 6.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight GU10 bodové svietidlo pre lištový systém, 23... | 6.50 € | **6.70 €** | 39.1 % | **43.3 %** | 6.78 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 275.90 € | **276.00 €** | 30.3 % | **30.4 %** | 276.30 € | cena podľa najlacnejšieho iného predajcu |
| Sada radiacich páčok MOZA RACING RS094 | 51.90 € | **52.00 €** | 20.6 % | **20.8 %** | 52.03 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C White | 17.90 € | **18.00 €** | 19.6 % | **20.2 %** | 18.04 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Red | 17.90 € | **18.00 €** | 19.6 % | **20.2 %** | 18.04 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Blue | 17.90 € | **18.00 €** | 19.6 % | **20.2 %** | 18.04 € | cena podľa najlacnejšieho iného predajcu |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 38.90 € | **39.00 €** | 24.3 % | **24.6 %** | 39.13 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61647 Šikana - GO | 19.90 € | **20.00 €** | 18.3 % | **18.9 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 S (čierny) | 37.90 € | **38.00 €** | 21.4 % | **21.7 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-WW, 5 m, ... | 5.70 € | **5.80 €** | 41.3 % | **43.8 %** | 5.85 € | cena podľa najlacnejšieho iného predajcu |
| Carrera Carrera GO/GO+ 64176 Paw Patrol | 15.90 € | **16.00 €** | 13.6 % | **14.3 %** | 16.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight batéria Li-Ion 21V 2Ah pre RNP100/A | 5.40 € | **5.50 €** | 20.3 % | **22.5 %** | 5.58 € | cena podľa najlacnejšieho iného predajcu |
| Solight reťaz pre akumulátorovú pílu RNP150 | 4.20 € | **4.30 €** | 19.4 % | **22.2 %** | 4.39 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT122, bezkontaktný tester napätia / tester... | 13.90 € | **14.00 €** | 15.8 % | **16.6 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell NEO 2 MEGA KIT – balenie ... | 64.90 € | **65.00 €** | 13.7 % | **13.8 %** | 65.08 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 122.90 € | **123.00 €** | 18.9 % | **19.0 %** | 123.10 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC43SGMXC | 125.90 € | **126.00 €** | 13.5 % | **13.6 %** | 126.12 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (400)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| JBL PartyBox Ultimate | 1267.50 € | **1209.90 €** | 10.0 % | **5.0 %** | 1099.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon P1 | 639.00 € | **582.00 €** | 15.3 % | **5.0 %** | 499.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung Galaxy S26 5G 256GB Black | 1197.90 € | **1143.50 €** | 10.0 % | **5.0 %** | 640.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE655BE WiFi 7 AP/Extender/Rep... | 244.90 € | **194.50 €** | 32.5 % | **5.2 %** | 191.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung The Frame Pro QE75LS03HW | 2578.50 € | **2528.90 €** | 7.1 % | **5.0 %** | 2529.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link RE405BE AP/Extender/Repeater, ... | 226.00 € | **179.00 €** | 32.6 % | **5.0 %** | 161.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosná fototlačiareň Liene Pix Cut 2 v 1 | 311.00 € | **268.50 €** | 33.3 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vonkajšia jednotka TP-Link Flex Bridge 5 3x GLAN, 5 ... | 194.50 € | **154.90 €** | 32.6 % | **5.6 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WD1G2P854A3D2 | 340.50 € | **302.00 €** | 29.5 % | **14.9 %** | 302.35 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GEEKOM A6 AMD Ryzen 7 6800 16 GB 1 TB + Win ... | 675.50 € | **638.00 €** | 15.0 % | **8.6 %** | 638.19 € | cena podľa najlacnejšieho iného predajcu |
| Amica SIS 112 STW | 429.00 € | **393.00 €** | 16.7 % | **6.9 %** | 393.38 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje W1G2P84A32 | 298.50 € | **263.90 €** | 30.1 % | **15.0 %** | 263.92 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15W | 317.90 € | **285.50 €** | 28.0 % | **14.9 %** | 285.67 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 336.50 € | **305.00 €** | 26.8 % | **15.0 %** | 305.13 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WG2PS72A12 | 261.50 € | **230.50 €** | 30.4 % | **15.0 %** | 230.58 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V100 TTL pre Sony | 356.00 € | **325.50 €** | 14.9 % | **5.1 %** | 254.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX V100 TTL pre Canon | 356.00 € | **325.50 €** | 14.9 % | **5.1 %** | 307.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX V100 TTL pre Nikon | 356.00 € | **325.50 €** | 14.9 % | **5.1 %** | 322.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stojan AURZEN Powerplay | 146.90 € | **116.90 €** | 44.8 % | **15.2 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje RK14C2W4 | 295.50 € | **266.50 €** | 27.4 % | **14.9 %** | 266.69 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP655-wall AP, 3x GLAN, 2,4 a 5... | 134.50 € | **107.50 €** | 31.8 % | **5.4 %** | 103.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX V1Pro TTL pre Sony | 296.90 € | **271.50 €** | 15.0 % | **5.1 %** | 255.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Creality Ender-3 V3 Plus 3D Printer | 342.50 € | **317.50 €** | 13.3 % | **5.1 %** | 316.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje GKS5C71CLI | 526.50 € | **502.50 €** | 10.0 % | **5.0 %** | 499.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TBE550E BE9300 WiFi 7, ... | 111.50 € | **88.50 €** | 32.5 % | **5.2 %** | 83.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava Dreame D20 | 74.00 € | **51.00 €** | 66.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| WiFi extender TP-Link RE650 AP/Extender/RepeaterAC12... | 101.50 € | **80.50 €** | 32.6 % | **5.2 %** | 79.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Univerzálny magnetický filtračný systém Freewell K2 | 322.50 € | **302.00 €** | 29.5 % | **21.3 %** | 302.29 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 1008.50 € | **988.00 €** | 15.0 % | **12.7 %** | 988.39 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 884.50 € | **864.50 €** | 26.6 % | **23.7 %** | 864.75 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Canon | 224.00 € | **204.90 €** | 14.9 % | **5.1 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX V860III TTL pre Olympus | 218.90 € | **199.90 €** | 15.0 % | **5.0 %** | 176.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 516.50 € | **500.50 €** | 11.4 % | **7.9 %** | 500.84 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 516.50 € | **500.50 €** | 26.5 % | **22.6 %** | 500.84 € | cena podľa najlacnejšieho iného predajcu |
| ADSL router TP-Link Archer VR400 VDSL/ADSL MODEM 4xG... | 74.90 € | **59.90 €** | 32.1 % | **5.6 %** | 59.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Xiaomi Smart Projector L1 Pro EU | 316.50 € | **301.90 €** | 10.1 % | **5.1 %** | 237.74 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo rádio DAB+ internet rádio - DT06 | 100.00 € | **86.50 €** | 21.5 % | **5.1 %** | 86.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 353.00 € | **339.50 €** | 11.2 % | **6.9 %** | 339.54 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GECS5C70XPA | 480.50 € | **467.00 €** | 10.0 % | **7.0 %** | 467.10 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV9812E0 | 314.50 € | **301.00 €** | 11.7 % | **6.9 %** | 301.19 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 mid TTL pre Nikon | 168.50 € | **155.50 €** | 14.9 % | **6.0 %** | 155.60 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL mid pre Canon | 168.50 € | **155.50 €** | 14.9 % | **6.0 %** | 155.60 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 221.00 € | **208.00 €** | 21.9 % | **14.8 %** | 208.41 € | cena podľa najlacnejšieho iného predajcu |
| AMICA TR 110 TW | 299.50 € | **287.00 €** | 10.1 % | **5.5 %** | 287.10 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link RE450 AP/Extender/Repeater - A... | 62.90 € | **50.50 €** | 31.6 % | **5.6 %** | 49.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TESLA MediaBox XG600 4K UHD Google TV multimediální ... | 133.50 € | **121.50 €** | 15.6 % | **5.2 %** | 82.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link TL-WPA4220 AV2 600Mbps, W... | 59.50 € | **47.50 €** | 32.6 % | **5.9 %** | 38.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link CPE210 2.4GHz, 2T2R, 9dBi | 57.50 € | **45.90 €** | 32.4 % | **5.7 %** | 39.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1016DS 16x Lan, 13" rack/kov | 54.00 € | **43.00 €** | 32.2 % | **5.2 %** | 23.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ELECTROLUX LXB1SE11W0 | 243.00 € | **232.00 €** | 11.9 % | **6.8 %** | 232.35 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Canon | 137.00 € | **126.50 €** | 15.0 % | **6.1 %** | 126.60 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje F492PW | 224.00 € | **213.90 €** | 10.0 % | **5.1 %** | 188.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZEUSLAP Z18 W - prenosný monitor s dvoma 18-palcovým... | 328.90 € | **318.90 €** | 14.3 % | **10.8 %** | 319.00 € | cena podľa najlacnejšieho iného predajcu |
| MOES TV02 Termostatická hlavica s LCD displejom a te... | 42.00 € | **32.00 €** | 80.8 % | **37.7 %** | 32.18 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS541C10W | 351.50 € | **341.50 €** | 10.1 % | **7.0 %** | 341.70 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 179.50 € | **169.50 €** | 16.0 % | **9.5 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| Statívový držiak 3 Legged Thing ZAYLA PD, medený | 60.50 € | **50.90 €** | 25.1 % | **5.2 %** | 48.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chytrý senzor TP-Link KE110 Smart, teplomer | 48.50 € | **38.90 €** | 32.2 % | **6.0 %** | 38.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| UMAX VisionBook 14WQ LTE (UMM230242) | 213.50 € | **203.90 €** | 10.1 % | **5.1 %** | 186.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal DN853BE0 | 61.50 € | **52.00 €** | 25.4 % | **6.1 %** | 52.29 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link TL-PA4010 KIT nano adapté... | 48.90 € | **39.50 €** | 31.5 % | **6.2 %** | 33.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 49G | 166.00 € | **157.00 €** | 13.0 % | **6.9 %** | 157.13 € | cena podľa najlacnejšieho iného predajcu |
| Joyroom PN-14F4 Starry Case pre iPhone 14 Pro (zelené) | 16.00 € | **7.50 €** | 433.1 % | **149.9 %** | 7.53 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 411BD | 63.00 € | **54.50 €** | 29.0 % | **11.6 %** | 54.69 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Kettle K3 Polar white | 21.00 € | **12.50 €** | 88.7 % | **12.3 %** | 12.80 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP110 stropní AP, 1x LAN, 2,4GH... | 40.50 € | **32.50 €** | 31.6 % | **5.6 %** | 29.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový měřič vzdálenosti Ermenrich PRO LR200 s fot... | 166.00 € | **158.00 €** | 11.0 % | **5.6 %** | 158.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 104.90 € | **96.90 €** | 27.3 % | **17.6 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection brown | 208.50 € | **200.50 €** | 16.6 % | **12.1 %** | 200.90 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Archer TX20E AX1800 WiFi 6, PC... | 37.50 € | **29.90 €** | 33.7 % | **6.6 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| UMAX U-Box J42 Nano/bez OS | 174.50 € | **166.90 €** | 10.0 % | **5.2 %** | 164.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| IMOU S800 PRO palubná kamera, 4K | 106.00 € | **98.50 €** | 13.2 % | **5.2 %** | 96.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tablet HOTWAV TAB R9 Plus (červený) | 298.00 € | **290.50 €** | 17.2 % | **14.2 %** | 290.80 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 298.00 € | **290.50 €** | 16.0 % | **13.1 %** | 290.80 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP115-Wall AP, 1x LAN, 2,4GHz 3... | 35.50 € | **28.50 €** | 31.8 % | **5.8 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Black&Decker BXTO900E | 42.00 € | **35.00 €** | 38.0 % | **15.0 %** | 35.01 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10100 Smart Ceramic | 56.90 € | **49.90 €** | 30.9 % | **14.8 %** | 50.00 € | cena podľa najlacnejšieho iného predajcu |
| Hodinky Niceboy Watch 5 Lite Black | 41.50 € | **34.90 €** | 25.6 % | **5.6 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Statívový držiak 3 Legged Thing ELLIE, šedý | 68.50 € | **61.90 €** | 24.7 % | **12.7 %** | 62.00 € | cena podľa najlacnejšieho iného predajcu |
| Prodlužovací kabel EMOS PM1105 / 3 fázový 25m / 400V... | 211.50 € | **205.00 €** | 8.3 % | **5.0 %** | 203.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Graef SKS 11000 | 135.50 € | **129.00 €** | 12.0 % | **6.7 %** | 129.41 € | cena podľa najlacnejšieho iného predajcu |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 114.00 € | **107.90 €** | 21.0 % | **14.6 %** | 108.00 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1280DB 2.0 (hnedé) | 105.00 € | **98.90 €** | 15.0 % | **8.3 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Archer T4E AC 1200 Dual Band, ... | 29.50 € | **23.50 €** | 33.0 % | **6.0 %** | 22.61 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link Mercusys ME50G AP/Extender/Rep... | 34.50 € | **28.50 €** | 31.8 % | **8.9 %** | 28.55 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno 72488 | 64.50 € | **58.50 €** | 26.3 % | **14.5 %** | 58.74 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo NIR Rapid Dry | 108.00 € | **102.00 €** | 21.3 % | **14.6 %** | 102.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 26.50 € | **20.50 €** | 44.5 % | **11.8 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 40 | 224.00 € | **218.00 €** | 9.7 % | **6.8 %** | 218.48 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 192.50 € | **187.00 €** | 9.9 % | **6.8 %** | 187.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 33.00 € | **27.50 €** | 42.9 % | **19.1 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1388.90 € | **1383.50 €** | 12.1 % | **11.6 %** | 1383.79 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW501815 | 129.00 € | **124.00 €** | 9.2 % | **5.0 %** | 120.23 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link TL-WA860RE Extender/Repeater -... | 25.50 € | **20.50 €** | 32.5 % | **6.5 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Meetion klávesnice HESTIA drátová  US | 22.00 € | **17.00 €** | 36.0 % | **5.1 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE K100 | 217.50 € | **212.50 €** | 26.6 % | **23.7 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Tefal B864SA74 | 101.90 € | **97.00 €** | 10.3 % | **5.0 %** | 86.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mikrofón Maono DM40 S Pro (biely) | 56.50 € | **51.90 €** | 14.9 % | **5.6 %** | 50.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aligator Watch GPS Maps Black | 102.50 € | **97.90 €** | 10.4 % | **5.4 %** | 62.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aligator Watch GPS Maps Silver | 102.50 € | **97.90 €** | 10.4 % | **5.4 %** | 62.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZTE Blade A56 4/64GB černý | 107.50 € | **102.90 €** | 10.0 % | **5.3 %** | 94.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **15.00 €** | 36.9 % | **5.3 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Adaptér TP-Link UE330C USB C na 1G Ethernet, 3x USB | 27.00 € | **22.50 €** | 32.0 % | **10.0 %** | 22.63 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Blade A35e šedý | 98.90 € | **94.50 €** | 10.1 % | **5.2 %** | 82.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CrockPot SCCPBPP605-050 | 100.90 € | **96.50 €** | 10.2 % | **5.4 %** | 87.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL TOUR ONE M3, Black | 317.50 € | **313.50 €** | 6.5 % | **5.1 %** | 249.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL TOUR ONE M3, Latte | 317.50 € | **313.50 €** | 6.5 % | **5.1 %** | 249.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CrockPot CSC111X Pomalý hrnec 3,5 l | 89.50 € | **85.50 €** | 10.2 % | **5.3 %** | 80.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Stormy Home 0517 90000 | 78.50 € | **74.50 €** | 10.7 % | **5.1 %** | 69.98 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Mercusys MA80XE AX 3000, WiFi ... | 27.00 € | **23.00 €** | 31.9 % | **12.4 %** | 23.10 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 44.00 € | **40.00 €** | 36.3 % | **23.9 %** | 40.24 € | cena podľa najlacnejšieho iného predajcu |
| Váleček MOVA pre stanicu G70 | 20.50 € | **16.50 €** | 74.3 % | **40.3 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre iPhone 16 Plus | 43.50 € | **40.00 €** | 25.4 % | **15.3 %** | 40.25 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DGM20S (biely) | 38.00 € | **34.90 €** | 15.1 % | **5.8 %** | 27.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Matt for litter box Baymax / Baymax Lite Catlink CL-... | 28.00 € | **24.90 €** | 19.1 % | **5.9 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vysokoúčinný filter DJI ROMO | 34.00 € | **30.90 €** | 40.4 % | **27.6 %** | 31.00 € | cena podľa najlacnejšieho iného predajcu |
| Pomocná rampa DJI ROMO | 29.00 € | **25.90 €** | 42.4 % | **27.2 %** | 26.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI ZRW 60 W | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 63.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell neutrálny filter ND32 pre OSMO 360 | 61.90 € | **58.90 €** | 15.9 % | **10.3 %** | 58.96 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.00 € | **28.00 €** | 22.4 % | **10.6 %** | 28.10 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim BLACK | 33.00 € | **30.00 €** | 25.8 % | **14.4 %** | 30.16 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo LR01 odžmolkovač | 18.00 € | **15.00 €** | 36.5 % | **13.8 %** | 15.17 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 20 000 FIXZEN2-20-BK | 21.50 € | **18.90 €** | 20.5 % | **6.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Krbový ventilátor Kaminer 26206 5-lopatkový | 32.50 € | **29.90 €** | 24.2 % | **14.3 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 105.50 € | **102.90 €** | 10.0 % | **7.3 %** | 102.99 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 101 | 150.50 € | **148.00 €** | 8.8 % | **6.9 %** | 148.08 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **50.00 €** | 14.6 % | **9.2 %** | 50.17 € | cena podľa najlacnejšieho iného predajcu |
| VILEDA Sušák na prádlo Surpris FDG157235 | 61.90 € | **59.50 €** | 10.1 % | **5.8 %** | 30.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung VG-SCFC32TKBXC | 60.90 € | **58.50 €** | 10.1 % | **5.8 %** | 40.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.50 € | **8.20 €** | 35.3 % | **5.7 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 31.1 % | **6.0 %** | 9.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skládací koloběžka NILS Extreme HM806 LUMIA | 79.50 € | **77.50 €** | 8.2 % | **5.5 %** | 74.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 42.50 € | **40.50 €** | 17.1 % | **11.6 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| Maono BA92 Boom Arm Black | 52.00 € | **50.00 €** | 18.7 % | **14.1 %** | 50.08 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 56.50 € | **54.50 €** | 12.3 % | **8.3 %** | 54.60 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 56.50 € | **54.50 €** | 12.2 % | **8.3 %** | 54.60 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 56.50 € | **54.50 €** | 18.8 % | **14.6 %** | 54.60 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Zen 10 Loop s LCD FIXZENL-10-BK | 19.50 € | **17.50 €** | 27.4 % | **14.4 %** | 17.60 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DB | 174.50 € | **172.50 €** | 10.2 % | **8.9 %** | 172.60 € | cena podľa najlacnejšieho iného predajcu |
| Behringer X32 COMPACT | 1853.00 € | **1851.00 €** | 6.6 % | **6.5 %** | 1851.22 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 42.50 € | **40.50 €** | 14.1 % | **8.8 %** | 40.75 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 35A1 | 136.50 € | **134.50 €** | 10.4 % | **8.8 %** | 134.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 33.00 € | **31.00 €** | 20.9 % | **13.5 %** | 31.40 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje OM38GBC | 135.90 € | **134.00 €** | 10.3 % | **8.7 %** | 134.30 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 429.90 € | **428.00 €** | 14.7 % | **14.2 %** | 428.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 9.20 € | **7.50 €** | 47.8 % | **20.5 %** | 7.56 € | cena podľa najlacnejšieho iného predajcu |
| Jednoruční olympijská osa HMS GOP050 5kg 50cm | 60.50 € | **58.90 €** | 8.1 % | **5.3 %** | 54.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada kuchyňského náčiní Ruhhy 21804 | 12.50 € | **10.90 €** | 21.0 % | **5.5 %** | 10.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Redmi A7 Pro 4/64GB Black | 121.50 € | **119.90 €** | 6.7 % | **5.3 %** | 95.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blesk GODOX iT30Pro pre Sony | 69.50 € | **67.90 €** | 14.8 % | **12.1 %** | 68.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i9 Plus White | 174.50 € | **173.00 €** | 7.9 % | **7.0 %** | 173.02 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION SmartKettle Onyx black | 24.50 € | **23.00 €** | 22.0 % | **14.5 %** | 23.10 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Okenní stěrka PROFESSIONAL s ná | 38.00 € | **36.50 €** | 65.7 % | **59.2 %** | 36.60 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD300ProII pre upevnenie Godox | 502.00 € | **500.50 €** | 14.9 % | **14.6 %** | 500.70 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.50 € | **17.00 €** | 21.6 % | **11.7 %** | 17.21 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100SFB | 55.00 € | **53.50 €** | 14.6 % | **11.5 %** | 53.74 € | cena podľa najlacnejšieho iného predajcu |
| Behringer X32 PRODUCER | 1207.50 € | **1206.00 €** | 27.4 % | **27.2 %** | 1206.27 € | cena podľa najlacnejšieho iného predajcu |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.00 € | **13.50 €** | 16.9 % | **5.2 %** | 13.82 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 19.00 € | **17.50 €** | 26.7 % | **16.7 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.50 € | **58.00 €** | 37.3 % | **33.8 %** | 58.43 € | cena podľa najlacnejšieho iného predajcu |
| Uzávěry na olympijsou osu HMS ZG1500 zlaté | 18.90 € | **17.50 €** | 16.2 % | **7.6 %** | 14.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aligator Watch GPS Black | 63.90 € | **62.50 €** | 10.2 % | **7.7 %** | 62.60 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Watch GPS Silver | 63.90 € | **62.50 €** | 10.2 % | **7.7 %** | 62.60 € | cena podľa najlacnejšieho iného predajcu |
| Polarizer Filter Freewell for DJI Avata 2 | 17.90 € | **16.50 €** | 18.9 % | **9.6 %** | 16.71 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled binokulární LEVENHUK Travel 7x50 | 55.00 € | **53.90 €** | 7.9 % | **5.8 %** | 53.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Girmi CT1000 Elektrický nůž | 28.00 € | **26.90 €** | 19.6 % | **14.9 %** | 26.91 € | cena podľa najlacnejšieho iného predajcu |
| Uzávěry na olympijskou osu HMS ZG1000B černé | 15.00 € | **13.90 €** | 13.3 % | **5.0 %** | 10.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Graef SKS 10002 | 117.00 € | **115.90 €** | 8.0 % | **7.0 %** | 115.94 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal HMS NKU05 5kg 27cm | 39.90 € | **38.90 €** | 8.7 % | **6.0 %** | 36.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický posilovač svalů ABS MASTER Pro Hip | 24.50 € | **23.50 €** | 9.6 % | **5.1 %** | 20.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| myPhone 6320 černý | 28.50 € | **27.50 €** | 10.7 % | **6.8 %** | 25.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PG-560BK Black | 19.50 € | **18.50 €** | 12.8 % | **7.0 %** | 17.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MERCUSYS MW300RE Extender | 14.90 € | **13.90 €** | 12.7 % | **5.1 %** | 13.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED Bezdrátová sluchátka FIXPDS2-WH | 22.50 € | **21.50 €** | 10.9 % | **6.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy ION Charles i9 Plus Black | 174.00 € | **173.00 €** | 7.6 % | **7.0 %** | 173.02 € | cena podľa najlacnejšieho iného predajcu |
| myPhone 3510 LTE černý | 61.50 € | **60.50 €** | 10.6 % | **8.8 %** | 60.53 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 23.90 € | **22.90 €** | 15.9 % | **11.1 %** | 22.96 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/250 Ohm | 335.90 € | **334.90 €** | 68.7 % | **68.2 %** | 335.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 446.90 € | **445.90 €** | 35.6 % | **35.3 %** | 446.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 241.90 € | **240.90 €** | 5.8 % | **5.4 %** | 241.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 413.90 € | **412.90 €** | 9.7 % | **9.5 %** | 413.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 395.90 € | **394.90 €** | 6.0 % | **5.7 %** | 395.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 220.90 € | **219.90 €** | 39809.7 % | **39629.0 %** | 220.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 657.90 € | **656.90 €** | 118761.8 % | **118581.1 %** | 657.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.00 € | **48.00 €** | 37.2 % | **34.4 %** | 48.13 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCJ30E | 19.50 € | **18.50 €** | 20.3 % | **14.1 %** | 18.65 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia jednotka TP-Link Sector Bridge 5 1x GLAN, ... | 184.50 € | **183.50 €** | 15.5 % | **14.9 %** | 183.66 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.50 € | **38.50 €** | 37.2 % | **33.7 %** | 38.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Polia, ... | 34.00 € | **33.00 €** | 37.6 % | **33.5 %** | 33.31 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **16.50 €** | 12.6 % | **6.2 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 39.50 € | **38.50 €** | 18.5 % | **15.5 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 – mini elektrická pumpa na bicykel | 55.50 € | **54.50 €** | 14.5 % | **12.4 %** | 54.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 87.50 € | **86.50 €** | 24.0 % | **22.5 %** | 86.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE NRS8182KX | 498.00 € | **497.00 €** | 5.5 % | **5.3 %** | 497.40 € | cena podľa najlacnejšieho iného predajcu |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 27.00 € | **26.00 €** | 15.6 % | **11.3 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Blue | 93.90 € | **93.00 €** | 10.4 % | **9.3 %** | 93.37 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Pink | 93.90 € | **93.00 €** | 10.4 % | **9.3 %** | 93.37 € | cena podľa najlacnejšieho iného predajcu |
| Tréninkové háky REBEL RBA-2505 | 11.90 € | **11.00 €** | 21.1 % | **11.9 %** | 11.11 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7059S | 33.90 € | **33.00 €** | 17.3 % | **14.2 %** | 33.22 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **22.00 €** | 38.1 % | **32.7 %** | 22.35 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV2839E0 | 33.90 € | **33.00 €** | 16.7 % | **13.6 %** | 33.41 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6182PS4 | 322.50 € | **321.90 €** | 7.2 % | **7.0 %** | 321.94 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 410.50 € | **409.90 €** | 9.6 % | **9.4 %** | 410.00 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V /  7,2Ah  EMOS bezúdržbový akum... | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 17.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 18.50 € | **17.90 €** | 14.3 % | **10.6 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 67.50 € | **67.00 €** | 5.9 % | **5.1 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický posilovač svalů ELECTRO BF | 19.00 € | **18.50 €** | 8.8 % | **5.9 %** | 15.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tašky na tříděný odpad SORT EASY 4 CARTON, 30x30x40c... | 10.50 € | **10.00 €** | 10.3 % | **5.0 %** | 9.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight akumulátorové záhradné nožnice | 58.50 € | **58.00 €** | 6.7 % | **5.8 %** | 58.03 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 279.50 € | **279.00 €** | 10.1 % | **9.9 %** | 279.09 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L3350 | 185.00 € | **184.50 €** | 8.9 % | **8.6 %** | 184.59 € | cena podľa najlacnejšieho iného predajcu |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 47.50 € | **47.00 €** | 6.5 % | **5.4 %** | 47.09 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 33.50 € | **33.00 €** | 8.5 % | **6.9 %** | 33.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **46.50 €** | 35.9 % | **34.4 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic TG Drum Set PRO M | 828.00 € | **827.50 €** | 27.1 % | **27.1 %** | 827.62 € | cena podľa najlacnejšieho iného predajcu |
| GameSir G7 HE wired controller (black) | 43.00 € | **42.50 €** | 15.1 % | **13.8 %** | 42.63 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 409BT | 35.50 € | **35.00 €** | 16.2 % | **14.6 %** | 35.14 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 608 | 25.00 € | **24.50 €** | 16.6 % | **14.3 %** | 24.65 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 496.50 € | **496.00 €** | 5.3 % | **5.2 %** | 496.15 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon Harmony V100 | 686.50 € | **686.00 €** | 36.4 % | **36.3 %** | 686.15 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.00 € | **180.50 €** | 25.6 % | **25.2 %** | 180.79 € | cena podľa najlacnejšieho iného predajcu |
| Casio Fx 85 Es Plus 2E | 19.50 € | **19.00 €** | 8.3 % | **5.5 %** | 19.29 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB112 2x Tapo C610 kit + T... | 314.50 € | **314.00 €** | 5.3 % | **5.1 %** | 314.30 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Arctic White | 16.50 € | **16.00 €** | 9.8 % | **6.4 %** | 16.30 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Onyx Black | 16.50 € | **16.00 €** | 9.8 % | **6.4 %** | 16.30 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Niceboy Sora Sakura Pink | 16.50 € | **16.00 €** | 9.8 % | **6.4 %** | 16.30 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI3042VI | 31.50 € | **31.00 €** | 15.7 % | **13.8 %** | 31.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 32.50 € | **32.00 €** | 59.9 % | **57.5 %** | 32.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 15.50 € | **15.00 €** | 52.2 % | **47.3 %** | 15.33 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 49.50 € | **49.00 €** | 59.0 % | **57.4 %** | 49.33 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 215.00 € | **214.50 €** | 7.1 % | **6.8 %** | 214.83 € | cena podľa najlacnejšieho iného predajcu |
| Klark Teknik DN200 V2 DI Box | 187.00 € | **186.50 €** | 20.1 % | **19.8 %** | 186.83 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 43.00 € | **42.50 €** | 44.8 % | **43.1 %** | 42.84 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.50 € | **12.00 €** | 36.4 % | **31.0 %** | 12.35 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň ELEGOO Centauri Carbon 2 | 371.50 € | **371.00 €** | 7.3 % | **7.1 %** | 371.35 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic V550 PREAMP, gitarový predzosilňovač | 174.50 € | **174.00 €** | 26.2 % | **25.8 %** | 174.35 € | cena podľa najlacnejšieho iného predajcu |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **86.50 €** | 15.0 % | **14.3 %** | 86.86 € | cena podľa najlacnejšieho iného predajcu |
| Behringer ULTRA-DI PRO DI4000 V2 | 162.00 € | **161.50 €** | 25.9 % | **25.5 %** | 161.86 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.00 € | **47.50 €** | 14.9 % | **13.7 %** | 47.88 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 344.00 € | **343.50 €** | 20.1 % | **19.9 %** | 343.89 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.50 € | **13.00 €** | 10.4 % | **6.3 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.00 € | **17.50 €** | 10.5 % | **7.5 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 41.50 € | **41.00 €** | 7.5 % | **6.2 %** | 41.39 € | cena podľa najlacnejšieho iného predajcu |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 25.50 € | **25.00 €** | 7.6 % | **5.5 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.00 € | **19.50 €** | 10.2 % | **7.5 %** | 19.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Perfect Steam Air Board S/M | 14.50 € | **14.00 €** | 10.1 % | **6.3 %** | 14.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 46.50 € | **46.00 €** | 6.2 % | **5.0 %** | 46.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 98.00 € | **97.50 €** | 6.1 % | **5.6 %** | 97.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42323PC | 79.50 € | **79.00 €** | 9.2 % | **8.5 %** | 79.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.50 € | **471.00 €** | 9.0 % | **8.8 %** | 471.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 929.00 € | **928.50 €** | 18.1 % | **18.0 %** | 928.89 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 51.00 € | **50.50 €** | 14.3 % | **13.2 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 51.00 € | **50.50 €** | 37.7 % | **36.3 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 30.00 € | **29.50 €** | 22.7 % | **20.6 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 52.00 € | **51.50 €** | 8.7 % | **7.6 %** | 51.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 80.50 € | **80.00 €** | 11.9 % | **11.2 %** | 80.39 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 24.00 € | **23.50 €** | 16.6 % | **14.1 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Bateriový modul do racku 48V 100A  GBLR-48-100 4,8 k... | 849.50 € | **849.00 €** | 10.4 % | **10.3 %** | 849.39 € | cena podľa najlacnejšieho iného predajcu |
| Hybridní měnič napětí CARSPA MKS6.2K, DC/AC 48V/6200... | 390.00 € | **389.50 €** | 8.2 % | **8.1 %** | 389.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 316.50 € | **316.00 €** | 8.4 % | **8.3 %** | 316.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 82.50 € | **82.00 €** | 6.3 % | **5.6 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 257.00 € | **256.50 €** | 20.1 % | **19.9 %** | 256.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 118.50 € | **118.00 €** | 10.6 % | **10.1 %** | 118.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 110.50 € | **110.00 €** | 6.7 % | **6.2 %** | 110.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 142.50 € | **142.00 €** | 7.0 % | **6.6 %** | 142.39 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 77.00 € | **76.50 €** | 13.2 % | **12.4 %** | 76.89 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1282.00 € | **1281.50 €** | 6.9 % | **6.8 %** | 1281.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 56.00 € | **55.50 €** | 16.9 % | **15.9 %** | 55.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 288.00 € | **287.50 €** | 42.7 % | **42.5 %** | 287.89 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3236 | 32.00 € | **31.50 €** | 9.3 % | **7.6 %** | 31.89 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 94.00 € | **93.50 €** | 10.3 % | **9.7 %** | 93.89 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 307.00 € | **306.50 €** | 26.7 % | **26.5 %** | 306.89 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 37.00 € | **36.50 €** | 9.5 % | **8.0 %** | 36.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TESLA SecureQ SC55 - venkovní WiFi smart kame... | 48.50 € | **48.00 €** | 7.1 % | **6.0 %** | 48.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 271.00 € | **270.50 €** | 6.1 % | **5.9 %** | 270.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 154.00 € | **153.50 €** | 9.1 % | **8.8 %** | 153.89 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 277.50 € | **277.00 €** | 52.7 % | **52.4 %** | 277.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 73.50 € | **73.00 €** | 11.5 % | **10.7 %** | 73.39 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.50 € | **45.00 €** | 15.7 % | **14.5 %** | 45.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 83.00 € | **82.50 €** | 42.6 % | **41.8 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 233.00 € | **232.50 €** | 6.0 % | **5.8 %** | 232.89 € | cena podľa najlacnejšieho iného predajcu |
| REBEL Micropower 1000 | 76.00 € | **75.50 €** | 8.5 % | **7.8 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.00 € | **22.50 €** | 8.5 % | **6.1 %** | 22.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 655.50 € | **655.00 €** | 5.5 % | **5.4 %** | 655.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO3320 | 71.00 € | **70.50 €** | 6.1 % | **5.4 %** | 70.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 313.50 € | **313.00 €** | 6.7 % | **6.5 %** | 313.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 612.50 € | **612.00 €** | 6.6 % | **6.5 %** | 612.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 642.50 € | **642.00 €** | 8.5 % | **8.4 %** | 642.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 690.50 € | **690.00 €** | 12.6 % | **12.6 %** | 690.39 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GC272D10 | 64.00 € | **63.50 €** | 12.2 % | **11.3 %** | 63.90 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link HB210(1-pack) WiFi 7 AP BE3600, ... | 118.00 € | **117.50 €** | 7.4 % | **7.0 %** | 117.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE VQ1500D active PA subwoofer | 499.00 € | **498.50 €** | 74.4 % | **74.2 %** | 498.90 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon CRITICAL MASS, vokálny efektový pedál | 124.50 € | **124.00 €** | 20.3 % | **19.8 %** | 124.41 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.50 € | **208.00 €** | 16.6 % | **16.3 %** | 208.44 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 072L čidlo detekce blesků | 49.50 € | **49.00 €** | 10.3 % | **9.2 %** | 49.45 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-0360 4.0 Mpix venkovní IP dome kamera... | 117.50 € | **117.00 €** | 17.8 % | **17.3 %** | 117.46 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 319.50 € | **319.00 €** | 19.6 % | **19.4 %** | 319.47 € | cena podľa najlacnejšieho iného predajcu |
| Vzdělávací podložka pro děti REBEL RBY-2200-2 200 x ... | 22.50 € | **22.00 €** | 11.9 % | **9.4 %** | 22.49 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.50 € | **239.00 €** | 12.2 % | **11.9 %** | 239.49 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 129.50 € | **129.00 €** | 8.1 % | **7.7 %** | 129.49 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.50 € | **87.00 €** | 22.4 % | **21.7 %** | 87.49 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.50 € | **35.00 €** | 23.3 % | **21.6 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110P 2x LAN s PoE, 8x LAN ... | 28.50 € | **28.00 €** | 10.3 % | **8.3 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.50 € | **14.00 €** | 22.4 % | **18.2 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.50 € | **11.00 €** | 34.1 % | **28.3 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 39.50 € | **39.00 €** | 12.2 % | **10.8 %** | 39.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 145.50 € | **145.00 €** | 51.4 % | **50.8 %** | 145.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.50 € | **11.00 €** | 29.1 % | **23.5 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 18.50 € | **18.00 €** | 26.1 % | **22.7 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 38.50 € | **38.00 €** | 16.8 % | **15.3 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal Coppertinto KI280G10 | 29.50 € | **29.00 €** | 9.6 % | **7.7 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.50 € | **14.00 €** | 17.1 % | **13.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link MERCUSYS MR25WBE BE3600 WiFi 7, ... | 56.50 € | **56.00 €** | 6.0 % | **5.1 %** | 56.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný obojsmerný merač energie Avatto WiFi WP... | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 23.50 € | **23.00 €** | 37.6 % | **34.7 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Fixed krytApple iPh 17A FIXSHM-1601-TR | 17.50 € | **17.00 €** | 26.0 % | **22.4 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 307.50 € | **307.00 €** | 36.5 % | **36.3 %** | 307.50 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link TL-SM5220-3M SFP+ Direct Attach Cable,... | 31.50 € | **31.00 €** | 6.8 % | **5.1 %** | 31.50 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 24.50 € | **24.00 €** | 13.3 % | **11.0 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 1124.90 € | **1124.50 €** | 27.1 % | **27.1 %** | 1124.90 € | cena podľa najlacnejšieho iného predajcu |
| Ozvučovací systém KRUGER MATZ KM1712 | 180.90 € | **180.50 €** | 27.9 % | **27.7 %** | 180.59 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 3611A | 110.90 € | **110.50 €** | 10.3 % | **9.9 %** | 110.60 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.90 € | **130.50 €** | 26505.7 % | **26424.4 %** | 130.79 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 138.90 € | **138.50 €** | 21.4 % | **21.1 %** | 138.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 186.90 € | **186.50 €** | 7.2 % | **6.9 %** | 186.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.90 € | **152.50 €** | 19.6 % | **19.3 %** | 152.79 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.90 € | **70.50 €** | 14.4 % | **13.8 %** | 70.89 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015502 Mikrovlnná trouba | 121.90 € | **121.50 €** | 15.1 % | **14.7 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.90 € | **11.50 €** | 38.8 % | **34.1 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 13.90 € | **13.50 €** | 27.7 % | **24.0 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.90 € | **14.50 €** | 15.8 % | **12.7 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Závaží na kotníky a zápěstí HMS OB06, 2 x 3 kg, černé | 18.90 € | **18.50 €** | 8.7 % | **6.4 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Behringer ULTRA-DI DI600P DI box | 32.90 € | **32.50 €** | 11.3 % | **9.9 %** | 32.87 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 38.90 € | **38.50 €** | 18.9 % | **17.7 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 59.90 € | **59.50 €** | 9.1 % | **8.4 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Kovový LED svietnik Solight 1V280, 40 cm, 5 LED, čierny | 21.90 € | **21.50 €** | 27.8 % | **25.5 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 22.90 € | **22.50 €** | 46.4 % | **43.8 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 18.90 € | **18.50 €** | 20.8 % | **18.2 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 32.90 € | **32.50 €** | 11.2 % | **9.8 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak BOYA BY-C40 | 40.90 € | **40.50 €** | 18.6 % | **17.5 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 20.90 € | **20.50 €** | 31.0 % | **28.5 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.90 € | **29.50 €** | 28.4 % | **26.7 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 361.90 € | **361.50 €** | 81.0 % | **80.8 %** | 361.59 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 584.90 € | **584.50 €** | 32.6 % | **32.5 %** | 584.75 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 291.90 € | **291.50 €** | 25.8 % | **25.6 %** | 291.79 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK619DA2XL4 | 468.90 € | **468.50 €** | 6.0 % | **5.9 %** | 468.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.80 €** | 38.1 % | **34.6 %** | 7.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.50 € | **5.30 €** | 22.2 % | **17.7 %** | 5.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.90 € | **7.70 €** | 34.9 % | **31.5 %** | 7.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.00 € | **9.80 €** | 20.4 % | **18.0 %** | 9.89 € | cena podľa najlacnejšieho iného predajcu |
| Behringer EUROLIVE B15X 1000W 15“ aktívny reproduktor | 345.00 € | **344.90 €** | 28.0 % | **27.9 %** | 344.95 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 318.00 € | **317.90 €** | 18.4 % | **18.4 %** | 317.99 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3WFU4841MCC | 430.00 € | **429.90 €** | 7.0 % | **7.0 %** | 430.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.00 € | **44.90 €** | 7.0 % | **6.8 %** | 44.99 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 36.00 € | **35.90 €** | 18.6 % | **18.3 %** | 35.99 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 47.00 € | **46.90 €** | 16.8 % | **16.5 %** | 46.99 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 42.00 € | **41.90 €** | 21.0 % | **20.8 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 49.00 € | **48.90 €** | 24.3 % | **24.1 %** | 49.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 31.00 € | **30.90 €** | 19.1 % | **18.7 %** | 31.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Woody, 25W, 1350lm, 29cm, 3CCT | 27.00 € | **26.90 €** | 37.5 % | **37.0 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 44.00 € | **43.90 €** | 41.6 % | **41.3 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu |
| Salente Hotair-Wh | 62.00 € | **61.90 €** | 16.4 % | **16.2 %** | 62.00 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 8x42 monokulárny | 24.00 € | **23.90 €** | 11.2 % | **10.8 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 48.00 € | **47.90 €** | 141.2 % | **140.7 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 48.00 € | **47.90 €** | 37.6 % | **37.3 %** | 48.00 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 18.00 € | **17.90 €** | 32.3 % | **31.6 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.60 € | **3.50 €** | 59.9 % | **55.5 %** | 3.59 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 4000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Závaží na kotníky a zápěstí HMS OB05, 2 x 2 kg, šedé | 15.00 € | **14.90 €** | 7.5 % | **6.8 %** | 10.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.40 € | **9.30 €** | 32.4 % | **31.0 %** | 9.40 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.30 € | **5.20 €** | 135.5 % | **131.0 %** | 5.30 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.70 € | **9.60 €** | 23.6 % | **22.3 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.20 € | **9.10 €** | 30.1 % | **28.7 %** | 9.20 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 11.00 € | **10.90 €** | 24.6 % | **23.4 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 9.70 € | **9.60 €** | 42.3 % | **40.9 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 9.70 € | **9.60 €** | 6.1 % | **5.0 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.70 € | **9.60 €** | 15.6 % | **14.4 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.70 € | **9.60 €** | 32.5 % | **31.2 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 93.00 € | **92.90 €** | 17.6 % | **17.4 %** | 92.94 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 77.00 € | **76.90 €** | 22.2 % | **22.0 %** | 76.94 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Comfort Graphite Black | 150.00 € | **149.90 €** | 11.6 % | **11.5 %** | 149.96 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21L3C-L 2.0 Mpix venkovní dome IP kamera s ... | 91.00 € | **90.90 €** | 17.5 % | **17.4 %** | 90.98 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 84.00 € | **83.90 €** | 28.1 % | **27.9 %** | 83.99 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 119.00 € | **118.90 €** | 32.2 % | **32.1 %** | 118.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 71.00 € | **70.90 €** | 21.4 % | **21.3 %** | 71.00 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar DJ-390 BT Bluetooth speaker | 108.00 € | **107.90 €** | 5.3 % | **5.2 %** | 108.00 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 144.00 € | **143.90 €** | 8.3 % | **8.3 %** | 144.00 € | cena podľa najlacnejšieho iného predajcu |

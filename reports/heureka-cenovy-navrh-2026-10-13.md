# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-13

Vstup: `premiumstore-sk_2026-10-13_14-16.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6468**
- Návrh **zvýšiť** cenu: **117** produktov
- Návrh **znížiť** cenu: **198** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6153** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **10**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **381**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (117)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria Flytec V900 12000mah | 16.00 € | **223.90 €** | 15.3 % | **1513.8 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **223.90 €** | 14.5 % | **476.1 %** | 224.00 € | cena podľa najlacnejšieho iného predajcu |
| Sada na nabíjanie akčnej kamery SJCAM SJ30 (čierny) | 253.00 € | **316.90 €** | 14.9 % | **44.0 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DG2P7D | 315.90 € | **368.90 €** | 10.1 % | **28.5 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/250 Ohm | 335.90 € | **380.90 €** | 68.7 % | **91.3 %** | 381.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V850III | 154.50 € | **196.90 €** | 15.1 % | **46.6 %** | 197.00 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 363.90 € | **398.90 €** | 10.1 % | **20.7 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný cyklotrenažér Cycplus T2H | 442.50 € | **474.50 €** | 15.1 % | **23.4 %** | 474.88 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na starostlivosť o srsť domácich zvierat Pet... | 79.50 € | **99.50 €** | 15.2 % | **44.2 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera Emeet Prime SE | 290.50 € | **307.50 €** | 15.1 % | **21.8 %** | 307.54 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash DV360S MAX (biely) | 78.50 € | **94.00 €** | 15.0 % | **37.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C500. | 65.50 € | **80.00 €** | 15.2 % | **40.7 %** | 80.16 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GKS5C71CLI | 484.50 € | **499.00 €** | 7.0 % | **10.2 %** | 499.27 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash DV360S MAX (čierny) | 76.50 € | **89.50 €** | 14.9 % | **34.4 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DH360D v2 (čierny) | 76.90 € | **89.50 €** | 15.1 % | **33.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 131.00 € | **143.00 €** | 15.0 % | **25.5 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| LIMO BAR TWIN - Black/Silver | 46.90 € | **56.90 €** | 5.1 % | **27.5 %** | 56.96 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 277.00 € | **286.50 €** | 52.4 % | **57.6 %** | 286.90 € | cena podľa najlacnejšieho iného predajcu |
| Tlačiareň štítkov NIIMBOT M3 (biela) | 138.50 € | **148.00 €** | 14.9 % | **22.8 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 36.50 € | **44.00 €** | 15.3 % | **39.0 %** | 44.39 € | cena podľa najlacnejšieho iného predajcu |
| Tefal QT2028F0 | 341.00 € | **347.50 €** | 6.8 % | **8.9 %** | 347.65 € | cena podľa najlacnejšieho iného predajcu |
| Automatický dávkovač krmiva Rojeco 2 l | 31.50 € | **38.00 €** | 14.0 % | **37.5 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-BL modrý, ... | 285.50 € | **292.00 €** | 34.8 % | **37.9 %** | 292.45 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXJB800E | 49.50 € | **55.00 €** | 14.4 % | **27.1 %** | 55.17 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **64.50 €** | 14.9 % | **25.6 %** | 64.78 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 38.50 € | **44.00 €** | 15.5 % | **32.1 %** | 44.42 € | cena podľa najlacnejšieho iného predajcu |
| Oneisall RFC-676 PRO strojček na strihanie domácich ... | 34.90 € | **40.00 €** | 15.1 % | **31.9 %** | 40.39 € | cena podľa najlacnejšieho iného predajcu |
| Fontána / napájačka pre domáce zvieratá 3,5 l Oneisa... | 38.50 € | **43.50 €** | 15.7 % | **30.7 %** | 43.78 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GI6432BSCWF | 318.90 € | **323.50 €** | 6.6 % | **8.1 %** | 323.60 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 27.90 € | **32.50 €** | 14.9 % | **33.8 %** | 32.90 € | cena podľa najlacnejšieho iného predajcu |
| RojecoPD521 1000m výcvikový obojok pre psov s 2 oboj... | 56.00 € | **60.00 €** | 15.0 % | **23.2 %** | 60.04 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 49.90 € | **53.90 €** | 15.0 % | **24.2 %** | 54.00 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 149.50 € | **153.50 €** | 13.7 % | **16.7 %** | 153.63 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash M400 ARGB (biely) | 19.50 € | **23.50 €** | 13.9 % | **37.3 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight stĺpcový filter pre Dyson V12 | 5.90 € | **9.50 €** | 24.3 % | **100.1 %** | 9.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 12.90 € | **16.50 €** | 5.5 % | **35.0 %** | 16.89 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 63.50 € | **67.00 €** | 14.7 % | **21.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s rádiom a budíkom | 18.00 € | **21.50 €** | 23.5 % | **47.5 %** | 21.87 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor DarkFlash M400 ARGB (čierny) | 19.50 € | **23.00 €** | 15.5 % | **36.2 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 3 2600 mAh (oranžová) | 17.90 € | **21.00 €** | 15.8 % | **35.8 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny alkohol tester, Fuel Cell, 0,0... | 48.90 € | **51.90 €** | 15.2 % | **22.3 %** | 52.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy GDS 7N2B-S | 359.50 € | **362.50 €** | 12.6 % | **13.6 %** | 362.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 27.50 € | **30.50 €** | 19.1 % | **32.1 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED snehuliak Solight 1V233, 4 LED, 2 × AA | 9.60 € | **12.50 €** | 10.2 % | **43.5 %** | 12.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 18.50 € | **21.00 €** | 21.0 % | **37.4 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 117A | 224.00 € | **226.50 €** | 5.8 % | **6.9 %** | 226.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.50 € | **17.00 €** | 18.4 % | **38.8 %** | 17.14 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 19.50 € | **22.00 €** | 19.9 % | **35.3 %** | 22.47 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 2 s kapacitou 2600 mAh | 17.50 € | **20.00 €** | 15.6 % | **32.1 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrická pumpa Etenwolf AIR 3 2600 mAh (čierna) | 18.90 € | **21.00 €** | 15.7 % | **28.6 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600R RGB | 140.90 € | **143.00 €** | 21.1 % | **22.9 %** | 143.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti kôrovcom Rojeco 1000m PD529 ... | 34.50 € | **36.50 €** | 15.8 % | **22.5 %** | 36.54 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický obojok proti kôrovcom Rojeco 1000m PD529 ... | 34.50 € | **36.50 €** | 15.8 % | **22.5 %** | 36.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 14.50 € | **16.50 €** | 21.3 % | **38.0 %** | 16.61 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 993.50 € | **995.50 €** | 13.3 % | **13.5 %** | 995.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **7.30 €** | 8.9 % | **47.3 %** | 7.34 € | cena podľa najlacnejšieho iného predajcu |
| Behringer C-1 | 42.00 € | **43.90 €** | 15.0 % | **20.2 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu |
| Wolant Moza Racing MFY Yoke AS012 (PC) | 142.50 € | **144.00 €** | 6.2 % | **7.3 %** | 144.29 € | cena podľa najlacnejšieho iného predajcu |
| Dielenská baterka Superfire G12, 566lm, USB | 18.00 € | **19.50 €** | 14.8 % | **24.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 58.00 € | **59.50 €** | 33.8 % | **37.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 3611A | 110.50 € | **112.00 €** | 9.9 % | **11.4 %** | 112.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 6.80 € | **8.20 €** | 18.9 % | **43.4 %** | 8.22 € | cena podľa najlacnejšieho iného predajcu |
| ECOLUX LED žiarovka 3-pack, klasický tvar, 12W, E27,... | 4.50 € | **5.60 €** | 88.6 % | **134.7 %** | 5.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 9.80 € | **10.90 €** | 17.9 % | **31.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 49.50 € | **50.50 €** | 23.9 % | **26.4 %** | 50.54 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 28.00 € | **29.00 €** | 10.6 % | **14.5 %** | 29.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Polia, ... | 33.00 € | **34.00 €** | 33.5 % | **37.6 %** | 34.14 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2022E1 | 36.50 € | **37.50 €** | 11.5 % | **14.5 %** | 37.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 38.50 € | **39.50 €** | 33.7 % | **37.2 %** | 39.78 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný odstraňovač zápachu Petoneer Pro | 22.50 € | **23.50 €** | 15.4 % | **20.5 %** | 23.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight tryska proti krúteniu pre fén Dyson Superson... | 11.50 € | **12.50 €** | 21.3 % | **31.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPhone 13 FIXBLM-723-BP | 19.50 € | **20.50 €** | 40.4 % | **47.6 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight hliníkový biely rám pre inštaláciu LED panel... | 16.00 € | **17.00 €** | 59.0 % | **69.0 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 158.00 € | **158.90 €** | 10.5 % | **11.1 %** | 159.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.00 € | **22.90 €** | 32.7 % | **38.1 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.00 € | **25.90 €** | 48.9 % | **54.3 %** | 25.93 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 5,0 W, 1055lm, 27... | 5.20 € | **5.80 €** | 87.1 % | **108.6 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 6000K... | 4.70 € | **5.30 €** | 74.5 % | **96.8 %** | 5.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.00 € | **14.50 €** | 49.0 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 16.50 € | **17.00 €** | 43.2 % | **47.5 %** | 17.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 42.50 € | **43.00 €** | 43.1 % | **44.8 %** | 43.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.00 € | **12.50 €** | 31.0 % | **36.4 %** | 12.66 € | cena podľa najlacnejšieho iného predajcu |
| Záhradné elektromagnetické ventily AC 1 " RainPoint | 16.00 € | **16.50 €** | 24.2 % | **28.1 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 273.00 € | **273.50 €** | 28.9 % | **29.1 %** | 273.69 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 273.00 € | **273.50 €** | 32.0 % | **32.3 %** | 273.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 20.50 € | **21.00 €** | 42.9 % | **46.4 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 15.00 € | **15.50 €** | 47.3 % | **52.2 %** | 15.72 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 32.50 € | **33.00 €** | 13.7 % | **15.4 %** | 33.29 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 23.00 € | **23.50 €** | 8.2 % | **10.6 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950 (čierna) | 41.50 € | **42.00 €** | 14.9 % | **16.3 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100WS (čierny) | 56.00 € | **56.50 €** | 24.2 % | **25.3 %** | 56.79 € | cena podľa najlacnejšieho iného predajcu |
| Coox silikonový vál 60x40 cm, červená | 19.00 € | **19.50 €** | 12.4 % | **15.4 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.50 € | **47.00 €** | 34.4 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 14.50 € | **14.90 €** | 43.1 % | **47.0 %** | 14.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight anténny COAX zdierka priama - typ Taliansko,... | 6.50 € | **6.80 €** | 90.8 % | **99.6 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarivka lineárna T8, 9W, 1260lm, 6000K,... | 3.70 € | **4.00 €** | 71.9 % | **85.8 %** | 4.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 8.90 € | **9.20 €** | 33.3 % | **37.7 %** | 9.23 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.80 € | **8.00 €** | 34.6 % | **38.1 %** | 8.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny časový spínač | 7.10 € | **7.30 €** | 41.5 % | **45.5 %** | 7.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight extra úsporná LED žiarovka 3,8 W, 806lm, 270... | 4.60 € | **4.80 €** | 92.8 % | **101.2 %** | 4.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WA801N AP/AP Client, WDS, 1x ... | 20.90 € | **21.00 €** | 5.3 % | **5.8 %** | 21.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Woody, 25W, 1350lm, 29cm, 3CCT | 26.90 € | **27.00 €** | 37.0 % | **37.5 %** | 27.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **17.00 €** | 34.2 % | **35.0 %** | 17.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.46 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 2.80 € | **2.90 €** | 38.0 % | **42.9 %** | 2.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 3.80 € | **3.90 €** | 41.7 % | **45.4 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.40 € | **2.50 €** | 44.5 % | **50.6 %** | 2.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.20 € | **4.30 €** | 50.4 % | **54.0 %** | 4.31 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (198)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Elektrický skúter NAVEE ST5 Max | 870.00 € | **806.00 €** | 24.5 % | **15.3 %** | 806.02 € | cena podľa najlacnejšieho iného predajcu |
| Robotický vysávač ULTENIC T20 PRO | 276.90 € | **241.50 €** | 39.8 % | **21.9 %** | 241.71 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 254.50 € | **222.50 €** | 33.1 % | **16.3 %** | 222.90 € | cena podľa najlacnejšieho iného predajcu |
| Mobilný ovládač GameSir G8+ MFi (sivý) | 91.50 € | **64.90 €** | 67.8 % | **19.0 %** | 64.99 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátorový vysávač ULTENIC U18 Pro | 158.90 € | **137.00 €** | 41.5 % | **22.0 %** | 137.08 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu Ruhhy 26050 | 100.90 € | **79.50 €** | 49.5 % | **17.8 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 178.90 € | **159.00 €** | 40.7 % | **25.1 %** | 159.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 103.00 € | **85.00 €** | 44.8 % | **19.5 %** | 85.37 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 166.90 € | **149.00 €** | 39.5 % | **24.5 %** | 149.17 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CPC200-Tbox UHD pre Car... | 166.50 € | **152.00 €** | 15.0 % | **5.0 %** | 98.44 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Teleskop Phone Cage PGY ProShot pre iPhone 17 Pro Max | 79.50 € | **67.00 €** | 48.4 % | **25.1 %** | 67.04 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM017 20 kg výrobník ľadových kociek (čierny) | 212.00 € | **199.50 €** | 23.3 % | **16.0 %** | 199.90 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 296.50 € | **284.90 €** | 19.9 % | **15.2 %** | 284.96 € | cena podľa najlacnejšieho iného predajcu |
| City Boss RS350 černá | 329.00 € | **317.50 €** | 11.0 % | **7.2 %** | 317.61 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM005 15 kg výrobník ľadu (čierny) | 150.50 € | **139.50 €** | 22.6 % | **13.6 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 898.90 € | **888.50 €** | 21.7 % | **20.3 %** | 888.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **110.50 €** | 14.8 % | **5.3 %** | 78.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálny anemometer FNIRSI FAM-02 | 37.00 € | **28.00 €** | 57.7 % | **19.4 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 50.50 € | **42.00 €** | 38.8 % | **15.4 %** | 42.42 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER LED pásik – neónový RGB | 79.50 € | **71.50 €** | 35.9 % | **22.3 %** | 71.79 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco X50-PoE(1-pack) WiFi 6, 1x ... | 221.90 € | **215.90 €** | 92.5 % | **87.3 %** | 216.00 € | cena podľa najlacnejšieho iného predajcu |
| LED štúdiové osvetlenie NEEWER BASICS VL67B | 41.50 € | **35.50 €** | 41.0 % | **20.6 %** | 35.88 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell série V2 VND/CPL II 3-7 s... | 148.00 € | **142.00 €** | 27.4 % | **22.3 %** | 142.49 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice GARNI 750 | 114.50 € | **108.90 €** | 10.8 % | **5.4 %** | 99.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal SV9201E0 | 193.00 € | **188.00 €** | 8.9 % | **6.0 %** | 188.22 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3 W portable label printer (blue) | 71.50 € | **66.90 €** | 17.2 % | **9.6 %** | 66.96 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 29.00 € | **24.90 €** | 34.9 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Fixed kryt Apple iP 17P FIXRBM-1602-RA | 20.00 € | **16.50 €** | 44.0 % | **18.8 %** | 16.58 € | cena podľa najlacnejšieho iného predajcu |
| Sada 2 vianočných LED svetielok Solight 1V287, 15/20... | 15.90 € | **12.50 €** | 82.8 % | **43.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibrating ring Satisfyer Swordsman (green) | 18.90 € | **15.50 €** | 147.8 % | **103.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 79.00 € | **75.90 €** | 23.3 % | **18.4 %** | 75.99 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 79.00 € | **75.90 €** | 23.3 % | **18.4 %** | 75.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné stropné svietidlo CW Yeelight Meteor C300. | 33.90 € | **30.90 €** | 15.4 % | **5.2 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.50 € | **13.50 €** | 43.2 % | **17.1 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka a analyzátor batérií SkyRC MC5000 s rozhra... | 123.00 € | **120.00 €** | 24.8 % | **21.8 %** | 120.50 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač SUPERIOR LG – Bluetooth... | 15.90 € | **13.00 €** | 56.9 % | **28.3 %** | 13.41 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová vesta REBEL ACTIVE RBA-2527-5 5kg neoprenová | 26.90 € | **24.00 €** | 18.5 % | **5.8 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Výrobník ľadových kociek Euhomy IM001, 1,2 l, 12 kg ... | 62.50 € | **59.90 €** | 9.8 % | **5.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 99.50 € | **96.90 €** | 31.3 % | **27.9 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT 51003 Vysavač okna+tyč 43cm+mop | 45.50 € | **43.00 €** | 11.1 % | **5.0 %** | 40.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosná tlačiareň štítkov Niimbot B4 (modrá) | 68.00 € | **65.50 €** | 14.8 % | **10.6 %** | 65.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.50 € | **37.00 €** | 15.0 % | **7.7 %** | 37.23 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 22.00 € | **19.50 €** | 40.6 % | **24.6 %** | 19.74 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá TRUTHEAR Gate s mikrofónom (biele) | 27.00 € | **24.50 €** | 31.7 % | **19.5 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 17.90 € | **15.50 €** | 33.4 % | **15.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 41.50 € | **39.50 €** | 10.7 % | **5.4 %** | 39.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight WIFI zásuvka s meraním spotreby | 12.00 € | **10.00 €** | 36.6 % | **13.9 %** | 10.05 € | cena podľa najlacnejšieho iného predajcu |
| Cecotec Ready Warm 10000 Top Ceramic | 45.00 € | **43.00 €** | 20.2 % | **14.8 %** | 43.06 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 41.50 € | **39.50 €** | 13.1 % | **7.7 %** | 39.59 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.50 € | **39.50 €** | 11.4 % | **6.1 %** | 39.62 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 33.00 € | **31.00 €** | 20.9 % | **13.5 %** | 31.40 € | cena podľa najlacnejšieho iného predajcu |
| Úložné puzdro PGYTECH DJI Air 3/3S | 65.50 € | **63.50 €** | 15.1 % | **11.6 %** | 63.90 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 363A | 595.50 € | **593.50 €** | 10.4 % | **10.0 %** | 593.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C 20 W fast charger | 7.70 € | **5.80 €** | 92.0 % | **44.6 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 7.70 € | **5.80 €** | 107.3 % | **56.1 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 7.70 € | **5.80 €** | 107.3 % | **56.1 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 29.90 € | **28.00 €** | 14.1 % | **6.8 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Silverlit Robot My Dino II | 21.50 € | **19.90 €** | 27.7 % | **18.2 %** | 19.97 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka Spidoo Kruzzel 25628 růžová | 47.00 € | **45.50 €** | 15.1 % | **11.4 %** | 45.68 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V05-M, 50 m, viacfarebná... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V09-R... | 24.00 € | **22.50 €** | 42.0 % | **33.1 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 13.00 € | **11.50 €** | 80.7 % | **59.8 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný veniec Solight 1V297, 30 cm, 10... | 16.00 € | **14.50 €** | 51.8 % | **37.6 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 28.00 € | **26.50 €** | 15.3 % | **9.1 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 143.50 € | **142.00 €** | 32.1 % | **30.7 %** | 142.49 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.50 € | **28.00 €** | 26.7 % | **20.3 %** | 28.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, neutrálna... | 14.90 € | **13.50 €** | 93.8 % | **75.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED COB opasok, 5m, 7W/m, 500lm/m, teplá bie... | 14.90 € | **13.50 €** | 93.8 % | **75.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| SILVERLIT Robot Pes Dackel | 21.00 € | **19.90 €** | 24.7 % | **18.2 %** | 19.97 € | cena podľa najlacnejšieho iného predajcu |
| Biely vianočný LED lampáš Solight 1V288, 20 cm, časo... | 6.90 € | **5.80 €** | 81.5 % | **52.6 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.80 € | **7.80 €** | 31.8 % | **16.8 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCJ30E | 18.50 € | **17.50 €** | 14.1 % | **7.9 %** | 17.58 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 57.90 € | **56.90 €** | 73.9 % | **70.9 %** | 56.99 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 77.90 € | **76.90 €** | 6.7 % | **5.4 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 77.90 € | **76.90 €** | 10.0 % | **8.6 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 418.50 € | **417.50 €** | 13.6 % | **13.4 %** | 417.60 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 252 80 Ohm | 221.90 € | **220.90 €** | 28.2 % | **27.7 %** | 221.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 406.90 € | **405.90 €** | 8.6 % | **8.3 %** | 406.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 409.90 € | **408.90 €** | 8.7 % | **8.4 %** | 409.00 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický veslařský trenažér HMS ZM1502 | 216.90 € | **215.90 €** | 39087.0 % | **38906.3 %** | 216.00 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 651.90 € | **650.90 €** | 117677.8 % | **117497.1 %** | 651.00 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Magnetic Wall | 13.00 € | **12.00 €** | 25.1 % | **15.5 %** | 12.14 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-302 | 58.50 € | **57.50 €** | 56.7 % | **54.0 %** | 57.68 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61617 Zatáčka 2/45 (4ks) - GO | 14.00 € | **13.00 €** | 24.8 % | **15.9 %** | 13.31 € | cena podľa najlacnejšieho iného predajcu |
| LED adventný kalendár – kniha Solight 1V244, 40 × 30... | 29.50 € | **28.50 €** | 44.9 % | **40.0 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 12.50 € | **11.50 €** | 23.9 % | **14.0 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 48.00 € | **47.00 €** | 31.9 % | **29.1 %** | 47.49 € | cena podľa najlacnejšieho iného predajcu |
| Montážna základňa PGYTECH Suction Cup | 13.90 € | **13.00 €** | 42.7 % | **33.4 %** | 13.20 € | cena podľa najlacnejšieho iného predajcu |
| Defender Taška na notebook 15,6", Geek | 14.90 € | **14.00 €** | 14.6 % | **7.7 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 670NC white | 63.90 € | **63.00 €** | 11.9 % | **10.3 %** | 63.03 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz Solight 1V50-W, 3 m, 20 LED, 3 × ... | 2.60 € | **1.80 €** | 134.9 % | **62.6 %** | 1.90 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočná krajinka s domčekom Solight 1V264, 18 c... | 6.60 € | **5.80 €** | 44.2 % | **26.8 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 19.50 € | **18.90 €** | 9.0 % | **5.7 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket ND64/PL | 19.50 € | **18.90 €** | 8.5 % | **5.2 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Vakuovací role 30x600 cm | 14.50 € | **13.90 €** | 10.4 % | **5.8 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.50 € | **15.90 €** | 11.3 % | **7.3 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO7285S-SET2 Sáčky pro vasavač DO72 | 15.50 € | **14.90 €** | 18.5 % | **14.0 %** | 14.92 € | cena podľa najlacnejšieho iného predajcu |
| LED videolampa GODOX ML80Bi | 229.50 € | **228.90 €** | 15.1 % | **14.8 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES206XPP-M2 5x 2,5GLan s PoE++, 1x 10... | 175.50 € | **175.00 €** | 5.3 % | **5.0 %** | 175.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Okuliare s rozšírenou realitou XREAL XBX A01+ | 320.00 € | **319.50 €** | 19.8 % | **19.6 %** | 319.51 € | cena podľa najlacnejšieho iného predajcu |
| Výcvikový obojok Rojeco PD511 | 36.50 € | **36.00 €** | 41.8 % | **39.9 %** | 36.04 € | cena podľa najlacnejšieho iného predajcu |
| Solac New Optima Pro PV2114 | 32.00 € | **31.50 €** | 44.5 % | **42.3 %** | 31.59 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzormi (sivý) | 68.50 € | **68.00 €** | 15.2 % | **14.3 %** | 68.09 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 20.50 € | **20.00 €** | 18.4 % | **15.5 %** | 20.15 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 106.50 € | **106.00 €** | 39.6 % | **39.0 %** | 106.18 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1832USB mixpult s USB a efektmi | 362.50 € | **362.00 €** | 81.3 % | **81.0 %** | 362.18 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 340.00 € | **339.50 €** | 7.0 % | **6.9 %** | 339.68 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 466.50 € | **466.00 €** | 18.3 % | **18.2 %** | 466.18 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 430.50 € | **430.00 €** | 14.9 % | **14.7 %** | 430.19 € | cena podľa najlacnejšieho iného predajcu |
| Behringer B115D | 375.00 € | **374.50 €** | 49.2 % | **49.0 %** | 374.69 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 537.50 € | **537.00 €** | 16.0 % | **15.9 %** | 537.23 € | cena podľa najlacnejšieho iného predajcu |
| TechnoLine WS 8005 digitální budík | 23.00 € | **22.50 €** | 15.0 % | **12.5 %** | 22.76 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia základňa BoboVR PD100 | 20.50 € | **20.00 €** | 38.7 % | **35.3 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongVision Mini, fotopast | 42.00 € | **41.50 €** | 8.7 % | **7.4 %** | 41.79 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 320.00 € | **319.50 €** | 13.0 % | **12.8 %** | 319.84 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 208.50 € | **208.00 €** | 34.6 % | **34.3 %** | 208.35 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 266.00 € | **265.50 €** | 7.3 % | **7.1 %** | 265.85 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 194.00 € | **193.50 €** | 16.0 % | **15.7 %** | 193.86 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 287.00 € | **286.50 €** | 16.3 % | **16.1 %** | 286.87 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.00 € | **295.50 €** | 12.9 % | **12.7 %** | 295.87 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 115.50 € | **115.00 €** | 41.2 % | **40.6 %** | 115.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 38.00 € | **37.50 €** | 10.5 % | **9.1 %** | 37.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42323PC | 77.50 € | **77.00 €** | 6.5 % | **5.8 %** | 77.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 927.00 € | **926.50 €** | 17.8 % | **17.7 %** | 926.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **27.50 €** | 14.5 % | **12.5 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 78.50 € | **78.00 €** | 9.1 % | **8.4 %** | 78.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 116.50 € | **116.00 €** | 8.7 % | **8.2 %** | 116.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 140.50 € | **140.00 €** | 5.5 % | **5.1 %** | 140.39 € | cena podľa najlacnejšieho iného predajcu |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 75.00 € | **74.50 €** | 10.2 % | **9.4 %** | 74.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 54.00 € | **53.50 €** | 12.7 % | **11.7 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Plus 575 Combo+dock black | 529.00 € | **528.50 €** | 9.9 % | **9.8 %** | 528.89 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Plus 575 Combo+dock white | 529.50 € | **529.00 €** | 10.0 % | **9.9 %** | 529.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 286.00 € | **285.50 €** | 41.7 % | **41.4 %** | 285.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO9308I | 247.50 € | **247.00 €** | 24.8 % | **24.6 %** | 247.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 277.50 € | **277.00 €** | 9.3 % | **9.1 %** | 277.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Mop na podlahu PICO SPRAY | 25.00 € | **24.50 €** | 13.1 % | **10.8 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| ALI MiTag set 3ks Google Find My APD006 | 35.00 € | **34.50 €** | 15.1 % | **13.4 %** | 34.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 269.00 € | **268.50 €** | 5.3 % | **5.1 %** | 268.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 152.00 € | **151.50 €** | 7.6 % | **7.3 %** | 151.89 € | cena podľa najlacnejšieho iného predajcu |
| Epson EcoTank L3350 | 185.50 € | **185.00 €** | 9.2 % | **8.9 %** | 185.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 71.50 € | **71.00 €** | 8.4 % | **7.7 %** | 71.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava AURZEN Zip | 346.00 € | **345.50 €** | 7.1 % | **7.0 %** | 345.89 € | cena podľa najlacnejšieho iného predajcu |
| AURZEN Zip Projektor (zlatý) | 346.00 € | **345.50 €** | 11.7 % | **11.6 %** | 345.89 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 43.50 € | **43.00 €** | 10.6 % | **9.3 %** | 43.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 137.00 € | **136.50 €** | 19.8 % | **19.3 %** | 136.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 81.00 € | **80.50 €** | 39.2 % | **38.3 %** | 80.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 83.00 € | **82.50 €** | 13.1 % | **12.4 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 653.50 € | **653.00 €** | 5.2 % | **5.1 %** | 653.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 311.50 € | **311.00 €** | 6.0 % | **5.8 %** | 311.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 610.50 € | **610.00 €** | 6.3 % | **6.2 %** | 610.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 640.50 € | **640.00 €** | 8.2 % | **8.1 %** | 640.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 688.50 € | **688.00 €** | 12.3 % | **12.2 %** | 688.39 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 14.00 € | **13.50 €** | 69.1 % | **63.1 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V282, 64 cm, ... | 34.00 € | **33.50 €** | 45.0 % | **42.8 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 126.50 € | **126.00 €** | 15.9 % | **15.4 %** | 126.46 € | cena podľa najlacnejšieho iného predajcu |
| TC ELECTRONIC PLETHORA X1 TonePrint Loader so 14 leg... | 145.50 € | **145.00 €** | 12.3 % | **11.9 %** | 145.46 € | cena podľa najlacnejšieho iného predajcu |
| Behringer NEKKST K8 Štúdiové monitory | 195.50 € | **195.00 €** | 7.6 % | **7.3 %** | 195.47 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 608 | 24.50 € | **24.00 €** | 14.3 % | **11.9 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| ALI držák do auta s Magsafe AMS06BK | 14.50 € | **14.00 €** | 13.9 % | **10.0 %** | 14.49 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 59.50 € | **59.00 €** | 8.4 % | **7.5 %** | 59.49 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 157.50 € | **157.00 €** | 8.1 % | **7.8 %** | 157.50 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK619DA2XL4 | 468.50 € | **468.00 €** | 5.9 % | **5.8 %** | 468.50 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 141.90 € | **141.50 €** | 6.9 % | **6.6 %** | 141.60 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1204USB mixpult s USB | 249.90 € | **249.50 €** | 74.2 % | **73.9 %** | 249.65 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.90 € | **216.50 €** | 17.3 % | **17.1 %** | 216.69 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 237.90 € | **237.50 €** | 7.1 % | **7.0 %** | 237.73 € | cena podľa najlacnejšieho iného predajcu |
| TC Helicon VoiceTone H1 | 178.90 € | **178.50 €** | 28.6 % | **28.3 %** | 178.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 97.90 € | **97.50 €** | 24.1 % | **23.6 %** | 97.83 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.90 € | **159.50 €** | 6.9 % | **6.6 %** | 159.84 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Olympus | 90.90 € | **90.50 €** | 20.6 % | **20.1 %** | 90.87 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 14.90 € | **14.50 €** | 12.3 % | **9.3 %** | 14.79 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná mikro LED reťaz Solight 1V56-W, 5 m, studen... | 2.20 € | **1.80 €** | 44.2 % | **18.0 %** | 1.90 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V200 | 32.90 € | **32.50 €** | 18.4 % | **17.0 %** | 32.88 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 23.90 € | **23.50 €** | 10.5 % | **8.6 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s farebnými guľami Solight 1V273,... | 3.00 € | **2.80 €** | 44.3 % | **34.7 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.10 € | **6.90 €** | 21.3 % | **17.9 %** | 6.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.20 € | **9.00 €** | 10.8 % | **8.4 %** | 9.09 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 5 powered studio monitor | 258.00 € | **257.90 €** | 48.4 % | **48.3 %** | 257.99 € | cena podľa najlacnejšieho iného predajcu |
| Tannoy GOLD 7 powered studio monitor | 308.00 € | **307.90 €** | 36.8 % | **36.7 %** | 308.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 289.00 € | **288.90 €** | 14.9 % | **14.9 %** | 289.00 € | cena podľa najlacnejšieho iného predajcu |
| Carrera 61647 Šikana - GO | 20.00 € | **19.90 €** | 18.9 % | **18.3 %** | 19.97 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link SM6220-1M SFP+ Direct Attach Cable, 25... | 52.00 € | **51.90 €** | 23.1 % | **22.8 %** | 51.98 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 53.00 € | **52.90 €** | 9.6 % | **9.4 %** | 52.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **43.90 €** | 5.8 % | **5.5 %** | 43.99 € | cena podľa najlacnejšieho iného predajcu |
| Závesná LED vianočná hviezda Solight 1V255, 60 cm, 2... | 6.90 € | **6.80 €** | 44.6 % | **42.5 %** | 6.90 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená LED vianočná guľa Solight 1V204, 10 LED, 2 ... | 3.90 € | **3.80 €** | 26.8 % | **23.6 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s hviezdami Solight 1V52-B, 1,5 m... | 1.90 € | **1.80 €** | 41.7 % | **34.3 %** | 1.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s hviezdami Solight 1V52-W, 1,5 m... | 1.90 € | **1.80 €** | 41.7 % | **34.3 %** | 1.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.70 €** | 31.8 % | **29.1 %** | 4.79 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 156.00 € | **155.90 €** | 11.6 % | **11.5 %** | 155.94 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 127.00 € | **126.90 €** | 11.6 % | **11.5 %** | 126.95 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Ditto+ Looper multi-session looper pedal | 158.00 € | **157.90 €** | 13.6 % | **13.5 %** | 157.96 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 133.00 € | **132.90 €** | 7.1 % | **7.0 %** | 132.96 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx 1204USB | 208.00 € | **207.90 €** | 50.4 % | **50.4 %** | 207.97 € | cena podľa najlacnejšieho iného predajcu |
| GOOLOO GT4000 74 Wh štartér | 117.00 € | **116.90 €** | 17.8 % | **17.7 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 77.00 € | **76.90 €** | 36.9 % | **36.7 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 187.00 € | **186.90 €** | 7.9 % | **7.8 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 187.00 € | **186.90 €** | 7.9 % | **7.8 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |

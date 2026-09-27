# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-27

Vstup: `premiumstore-sk_2026-09-27_09-48.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7183**
- Návrh **zvýšiť** cenu: **118** produktov
- Návrh **znížiť** cenu: **103** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6962** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **23**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **517**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (118)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Súprava stabilizátora iSteady MT3 Pro | 584.90 € | **614.50 €** | 32.6 % | **39.3 %** | 614.86 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 290.90 € | **308.00 €** | 38.7 % | **46.8 %** | 308.49 € | cena podľa najlacnejšieho iného predajcu |
| Ručné LED svietidlo NEEWER RGB s trubicovým dizajnom | 87.90 € | **96.00 €** | 10.1 % | **20.3 %** | 96.13 € | cena podľa najlacnejšieho iného predajcu |
| Pomocná rampa DJI ROMO | 23.50 € | **29.00 €** | 15.4 % | **42.4 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MO 20 A3B | 66.50 € | **71.50 €** | 5.2 % | **13.1 %** | 71.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 16.50 € | **20.50 €** | 10.3 % | **37.1 %** | 20.66 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 254.50 € | **258.50 €** | 5.2 % | **6.8 %** | 258.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 27.00 € | **30.50 €** | 5.9 % | **19.7 %** | 30.80 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (čierne) | 124.50 € | **126.90 €** | 34.7 % | **37.3 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 33.50 € | **35.50 €** | 7.9 % | **14.4 %** | 35.57 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 158.00 € | **160.00 €** | 11.7 % | **13.1 %** | 160.19 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal s RGB osvetlením (čierny) | 49.50 € | **51.50 €** | 14.8 % | **19.4 %** | 51.73 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 14.50 € | **16.50 €** | 18.6 % | **35.0 %** | 16.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 15.50 € | **17.50 €** | 12.3 % | **26.8 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2020E1 | 34.90 € | **36.50 €** | 5.2 % | **10.0 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.00 € | **15.50 €** | 8.7 % | **20.4 %** | 15.58 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 211.00 € | **212.50 €** | 9.1 % | **9.9 %** | 212.80 € | cena podľa najlacnejšieho iného predajcu |
| Ezidri Kráječ a loupač jablek | 30.50 € | **31.90 €** | 11.7 % | **16.8 %** | 32.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V282, 64 cm, ... | 33.00 € | **34.00 €** | 40.7 % | **45.0 %** | 34.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C kábel s displejom, USB-C konektor - US... | 8.70 € | **9.70 €** | 37.9 % | **53.7 %** | 9.74 € | cena podľa najlacnejšieho iného predajcu |
| Vianočný mikro LED svetelný záves Solight 1V10, 300 ... | 11.50 € | **12.50 €** | 32.6 % | **44.2 %** | 12.57 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 288.50 € | **289.50 €** | 5.2 % | **5.5 %** | 289.67 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 47.50 € | **48.50 €** | 6.2 % | **8.5 %** | 48.82 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný veniec Solight 1V297, 30 cm, 10... | 14.50 € | **15.50 €** | 37.6 % | **47.0 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 21.50 € | **22.50 €** | 27.1 % | **33.0 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok s časovačom Solight 1V285, 10/13/... | 12.00 € | **13.00 €** | 38.0 % | **49.5 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Smart vianočná LED reťaz Wi-Fi Solight 1V13-WIFI, 20... | 29.00 € | **30.00 €** | 40.9 % | **45.8 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-W, 10 m, s... | 11.00 € | **12.00 €** | 32.9 % | **45.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V06-WW, 10 m, ... | 11.00 € | **12.00 €** | 32.9 % | **45.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovná nabíjačka 3v1, MagSafe kompatibilná | 31.00 € | **32.00 €** | 63.8 % | **69.0 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 28.00 € | **29.00 €** | 40.3 % | **45.3 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 7.70 € | **8.70 €** | 34.9 % | **52.4 %** | 8.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.00 € | **22.90 €** | 32.7 % | **38.1 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 9.80 € | **10.50 €** | 31.9 % | **41.3 %** | 10.77 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 9.80 € | **10.50 €** | 36.2 % | **45.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny zápisník Huion Kamvas Ink 10 EB1011 | 385.90 € | **386.50 €** | 36.2 % | **36.4 %** | 386.58 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 490.90 € | **491.50 €** | 40.4 % | **40.6 %** | 491.65 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 702.90 € | **703.50 €** | 37.9 % | **38.1 %** | 703.68 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T68243WCSHBC | 434.90 € | **435.50 €** | 10.0 % | **10.2 %** | 435.80 € | cena podľa najlacnejšieho iného predajcu |
| Chrániče kolen DBX BUSHIDO DBX-0217A | 18.90 € | **19.50 €** | 3.8 % | **7.1 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ScanPart Sada příslušenství pro iRobot R | 34.90 € | **35.50 €** | 28.9 % | **31.1 %** | 35.88 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2-C TTL pre fotoaparáty Canon | 164.50 € | **165.00 €** | 39.0 % | **39.5 %** | 165.01 € | cena podľa najlacnejšieho iného predajcu |
| LED adventný kalendár – kniha Solight 1V244, 40 × 30... | 29.00 € | **29.50 €** | 42.5 % | **44.9 %** | 29.52 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 147.50 € | **148.00 €** | 30.9 % | **31.3 %** | 148.02 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (biela) | 22.00 € | **22.50 €** | 35.6 % | **38.7 %** | 22.52 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Tiny Pump 2 (čierna) | 22.00 € | **22.50 €** | 25.6 % | **28.5 %** | 22.52 € | cena podľa najlacnejšieho iného predajcu |
| Lovecký ďalekohľad Mileseey IONJET2 | 233.00 € | **233.50 €** | 36.3 % | **36.6 %** | 233.53 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro Everyday (... | 73.50 € | **74.00 €** | 28.1 % | **29.0 %** | 74.04 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS5 – štartér do auta s kompresorom | 105.00 € | **105.50 €** | 21.7 % | **22.3 %** | 105.55 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro PULUZ pre Insta360 X5 | 31.50 € | **32.00 €** | 17.0 % | **18.8 %** | 32.05 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 10.50 € | **11.00 €** | 31.5 % | **37.8 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 10.50 € | **11.00 €** | 31.5 % | **37.8 %** | 11.06 € | cena podľa najlacnejšieho iného predajcu |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.00 € | **37.50 €** | 8.0 % | **9.4 %** | 37.56 € | cena podľa najlacnejšieho iného predajcu |
| Stojanový vozík Neewer SW-600, veľkosť M | 37.00 € | **37.50 €** | 37.9 % | **39.7 %** | 37.56 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 38.00 € | **38.50 €** | 28.1 % | **29.8 %** | 38.57 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 169.00 € | **169.50 €** | 39.0 % | **39.4 %** | 169.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim BLACK | 34.00 € | **34.50 €** | 15.0 % | **16.7 %** | 34.59 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.00 € | **25.50 €** | 12.8 % | **15.0 %** | 25.59 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 137.00 € | **137.50 €** | 31.3 % | **31.7 %** | 137.60 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah XTREME bezúdržbový akumu... | 116.50 € | **117.00 €** | 26209.8 % | **26322.8 %** | 117.10 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Inspiroy 2 M H951P | 80.00 € | **80.50 €** | 39.4 % | **40.3 %** | 80.62 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 131.00 € | **131.50 €** | 35.9 % | **36.5 %** | 131.62 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 134.00 € | **134.50 €** | 38.9 % | **39.4 %** | 134.64 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 223.00 € | **223.50 €** | 16.5 % | **16.7 %** | 223.65 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora DarkFlash UV360 (čierny) | 249.00 € | **249.50 €** | 39.1 % | **39.4 %** | 249.65 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 630.00 € | **630.50 €** | 38.3 % | **38.4 %** | 630.65 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.00 € | **20.50 €** | 40.3 % | **43.8 %** | 20.67 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 400.00 € | **400.50 €** | 38.1 % | **38.2 %** | 400.69 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 203.50 € | **204.00 €** | 21.7 % | **22.0 %** | 204.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 11.50 € | **12.00 €** | 30.8 % | **36.4 %** | 12.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.50 € | **11.00 €** | 26.3 % | **32.3 %** | 11.20 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q6 | 561.00 € | **561.50 €** | 38.1 % | **38.2 %** | 561.73 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 256.00 € | **256.50 €** | 40.4 % | **40.6 %** | 256.78 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 12.50 € | **13.00 €** | 20.0 % | **24.8 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny infračervený teplomer -50° +380°C | 13.00 € | **13.50 €** | 30.8 % | **35.8 %** | 13.79 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 331.50 € | **332.00 €** | 38.6 % | **38.9 %** | 332.29 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 19.00 € | **19.50 €** | 5.6 % | **8.4 %** | 19.83 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah XTREME / Enerwell bezúdr... | 130.00 € | **130.50 €** | 25678.3 % | **25777.5 %** | 130.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitální hodiny s bluetooth synchronizáciou | 12.50 € | **13.00 €** | 28.6 % | **33.8 %** | 13.48 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 23.50 € | **24.00 €** | 11.2 % | **13.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-775S2 Päťzónový (štvorcový) sklenený ply... | 181.50 € | **181.90 €** | 44.7 % | **45.0 %** | 181.94 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka pamäťových kariet Lexar RW540 microSD Express | 71.50 € | **71.90 €** | 37.7 % | **38.5 %** | 71.95 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.50 € | **132.90 €** | 16.0 % | **16.4 %** | 132.99 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 117.50 € | **117.90 €** | 23199.6 % | **23278.9 %** | 117.99 € | cena podľa najlacnejšieho iného predajcu |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 66.50 € | **66.90 €** | 29.6 % | **30.4 %** | 66.99 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný prepínač WiFi WiFi Sonoff Dual R3 Lite | 11.50 € | **11.90 €** | 26.0 % | **30.4 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.70 € | **8.10 €** | 31.2 % | **38.1 %** | 8.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.70 € | **7.10 €** | 28.5 % | **36.1 %** | 7.13 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 48.50 € | **48.90 €** | 28.9 % | **29.9 %** | 48.92 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 41.50 € | **41.90 €** | 37.9 % | **39.2 %** | 41.93 € | cena podľa najlacnejšieho iného predajcu |
| Statív s 3D 360° hlavou + držiak na telefón Puluz PU... | 25.50 € | **25.90 €** | 12.1 % | **13.9 %** | 25.94 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre BOBOVR M2 Pro + nabíjacia stanica | 34.50 € | **34.90 €** | 38.6 % | **40.2 %** | 34.94 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DRX70 MESH + 4 RGB venti... | 63.50 € | **63.90 €** | 38.7 % | **39.5 %** | 63.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 50.50 € | **50.90 €** | 38.8 % | **39.9 %** | 50.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.70 € | **9.90 €** | 41.3 % | **44.2 %** | 9.95 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 9.80 € | **10.00 €** | 36.2 % | **39.0 %** | 10.43 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 261.90 € | **262.00 €** | 39.5 % | **39.5 %** | 262.16 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 405.90 € | **406.00 €** | 39.2 % | **39.2 %** | 406.25 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 533.90 € | **534.00 €** | 41.5 % | **41.5 %** | 534.45 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický posilovač svalů ABS MASTER Pro | 37.90 € | **38.00 €** | 5.0 % | **5.3 %** | 33.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Súprava na polievanie kvetín v črepníkoch RainPoint ... | 26.90 € | **27.00 €** | 41.1 % | **41.6 %** | 27.01 € | cena podľa najlacnejšieho iného predajcu |
| Metal Protective Cage With Lens Cover PULUZ for Inst... | 26.90 € | **27.00 €** | 31.2 % | **31.7 %** | 27.01 € | cena podľa najlacnejšieho iného predajcu |
| Štandardný stabilizátor AOCHUAN XE (čierny) | 52.90 € | **53.00 €** | 37.6 % | **37.8 %** | 53.08 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit sušák Comfort Tower 420 | 50.90 € | **51.00 €** | 15.9 % | **16.2 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Cellularline headset Bold černý, BTBOLDK | 17.90 € | **18.00 €** | 10.4 % | **11.0 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 142.90 € | **143.00 €** | 38.9 % | **39.0 %** | 143.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 65.90 € | **66.00 €** | 38.9 % | **39.1 %** | 66.05 € | cena podľa najlacnejšieho iného predajcu |
| Tester obvodov Ancel PB500 | 93.90 € | **94.00 €** | 38.5 % | **38.7 %** | 94.06 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion H1161 | 87.90 € | **88.00 €** | 36.3 % | **36.5 %** | 88.09 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE240 (biele) | 96.90 € | **97.00 €** | 35.9 % | **36.0 %** | 97.09 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 140.90 € | **141.00 €** | 39.8 % | **39.9 %** | 141.09 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro All Day (8ks) | 141.90 € | **142.00 €** | 31.1 % | **31.2 %** | 142.10 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady M6 | 150.90 € | **151.00 €** | 39.9 % | **40.0 %** | 151.10 € | cena podľa najlacnejšieho iného predajcu |
| Gimbal Hohem iSteady M6 Kit | 150.90 € | **151.00 €** | 31.6 % | **31.7 %** | 151.10 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz 45 cm (biely) | 76.90 € | **77.00 €** | 30.0 % | **30.1 %** | 77.13 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 86.90 € | **87.00 €** | 15.0 % | **15.1 %** | 87.19 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 158.90 € | **159.00 €** | 39.2 % | **39.3 %** | 159.23 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 6715 zesilovač + zdroj (2438) | 160.90 € | **161.00 €** | 15.7 % | **15.7 %** | 161.30 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (103)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Apple iPhone 17 256GB Black | 1174.90 € | **1121.50 €** | 10.0 % | **5.0 %** | 900.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Apple iPhone 17 256GB White | 1174.90 € | **1121.50 €** | 10.0 % | **5.0 %** | 900.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TCL 65Q6C QD-MiniLED 4K SMART Google TV | 823.00 € | **785.90 €** | 10.0 % | **5.1 %** | 699.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko Beyond B5RMFNE314X | 632.50 € | **603.50 €** | 10.1 % | **5.0 %** | 548.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GODOX LUX Senior Retro blesk | 135.00 € | **116.00 €** | 23.9 % | **6.4 %** | 116.40 € | cena podľa najlacnejšieho iného predajcu |
| Beko RCSA240K40WN | 288.90 € | **275.90 €** | 10.1 % | **5.1 %** | 250.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko BM1WFU3622WBB | 285.90 € | **272.90 €** | 10.0 % | **5.0 %** | 269.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo Chamber Line 40 | 252.50 € | **243.00 €** | 10.2 % | **6.0 %** | 243.07 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C300 | 139.00 € | **129.50 €** | 29.4 % | **20.6 %** | 129.85 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 1234 | 197.50 € | **188.50 €** | 10.1 % | **5.0 %** | 163.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo VM Chamber Line 90 | 604.90 € | **596.00 €** | 10.0 % | **8.4 %** | 596.45 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo INFRA DRY+ | 183.90 € | **175.50 €** | 10.2 % | **5.2 %** | 175.90 € | cena podľa najlacnejšieho iného predajcu |
| Redmi A7 Pro 4/128GB Black | 166.90 € | **159.50 €** | 10.1 % | **5.3 %** | 130.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Redmi A7 Pro 4/128GB Green | 166.90 € | **159.50 €** | 10.1 % | **5.3 %** | 130.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 1226 | 195.50 € | **188.90 €** | 10.1 % | **6.4 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3RCSO255S | 281.00 € | **275.50 €** | 10.0 % | **7.9 %** | 275.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Master | 235.00 € | **230.00 €** | 10.0 % | **7.7 %** | 230.49 € | cena podľa najlacnejšieho iného predajcu |
| JBL Grip Black | 83.50 € | **79.50 €** | 10.4 % | **5.1 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Grip Blue | 83.50 € | **79.50 €** | 10.4 % | **5.1 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Grip Pink | 83.50 € | **79.50 €** | 10.4 % | **5.1 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **16.90 €** | 46.6 % | **23.9 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (čierny), 1 kg | 23.00 € | **20.00 €** | 58.3 % | **37.7 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Canon | 91.90 € | **89.00 €** | 22.0 % | **18.1 %** | 89.24 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus A8 electric pump | 29.50 € | **26.90 €** | 15.7 % | **5.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Umax U-Smart Robot Accesories | 23.50 € | **21.00 €** | 29.1 % | **15.4 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 530BT Beige | 54.90 € | **52.50 €** | 10.0 % | **5.2 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune 530BT Black | 54.90 € | **52.50 €** | 10.0 % | **5.2 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune 530BT Blue | 54.90 € | **52.50 €** | 10.0 % | **5.2 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune 530BT White | 54.90 € | **52.50 €** | 10.0 % | **5.2 %** | 35.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.4 % | **5.4 %** | 9.74 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 20630-56 | 47.50 € | **45.50 €** | 10.6 % | **5.9 %** | 36.31 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| VILEDA Sušák na prádlo Surpris FDG157235 | 38.90 € | **36.90 €** | 10.7 % | **5.0 %** | 34.22 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Koloběžka NILS Extreme HM1302 černá | 45.00 € | **43.00 €** | 11.6 % | **6.7 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Lenovo Tab M11 FIXTOT-1296 | 15.50 € | **13.90 €** | 17.3 % | **5.2 %** | 13.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.50 € | **194.00 €** | 9.9 % | **9.0 %** | 194.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 12.00 € | **10.50 €** | 31.1 % | **14.7 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.50 € | **58.00 €** | 37.3 % | **33.8 %** | 58.43 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **43.00 €** | 37.6 % | **34.5 %** | 43.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 36.00 € | **35.00 €** | 38.1 % | **34.3 %** | 35.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.50 € | **38.50 €** | 37.2 % | **33.7 %** | 38.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **13.50 €** | 54.3 % | **43.7 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **19.50 €** | 38.8 % | **32.0 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Kondenzátorový mikrofón Puluz PU612B Studio Broadcast | 20.00 € | **19.00 €** | 34.2 % | **27.5 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 59.00 € | **58.00 €** | 12.2 % | **10.3 %** | 58.50 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo 7200M bílá | 14.90 € | **14.00 €** | 12.1 % | **5.3 %** | 13.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.90 € | **25.00 €** | 54.3 % | **48.9 %** | 25.30 € | cena podľa najlacnejšieho iného predajcu |
| HP 655 Magenta, CZ111AE | 16.50 € | **15.90 €** | 10.9 % | **6.8 %** | 13.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **46.50 €** | 35.9 % | **34.4 %** | 46.62 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 44.00 € | **43.50 €** | 12.5 % | **11.2 %** | 43.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 39.00 € | **38.50 €** | 12.0 % | **10.6 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Classic 250 Flex | 30.50 € | **30.00 €** | 8.4 % | **6.6 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.00 € | **40.50 €** | 8.6 % | **7.3 %** | 40.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 69.50 € | **69.00 €** | 17.4 % | **16.5 %** | 69.39 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate Graphite Black | 270.50 € | **270.00 €** | 16.3 % | **16.1 %** | 270.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42602S | 39.00 € | **38.50 €** | 6.8 % | **5.5 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 110.00 € | **109.50 €** | 9.3 % | **8.8 %** | 109.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 273.00 € | **272.50 €** | 6.2 % | **6.0 %** | 272.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 274.50 € | **274.00 €** | 7.3 % | **7.1 %** | 274.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 194.50 € | **194.00 €** | 34.6 % | **34.2 %** | 194.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 872.00 € | **871.50 €** | 9.2 % | **9.1 %** | 871.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 683.00 € | **682.50 €** | 5.3 % | **5.2 %** | 682.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 320.50 € | **320.00 €** | 7.7 % | **7.5 %** | 320.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 632.00 € | **631.50 €** | 5.4 % | **5.3 %** | 631.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 668.50 € | **668.00 €** | 8.1 % | **8.0 %** | 668.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 697.50 € | **697.00 €** | 8.9 % | **8.9 %** | 697.39 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 24.00 € | **23.50 €** | 13.6 % | **11.2 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO Rapid PLA+ (biely) | 13.00 € | **12.50 €** | 38.3 % | **33.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysokoúčinný filter DJI ROMO | 34.50 € | **34.00 €** | 42.5 % | **40.4 %** | 34.41 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DGM20 (čierny) | 27.50 € | **27.00 €** | 16.0 % | **13.9 %** | 27.45 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono DGM20 (biely) | 27.50 € | **27.00 €** | 16.3 % | **14.2 %** | 27.45 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 214.50 € | **214.00 €** | 40.6 % | **40.2 %** | 214.49 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 264 AP | 57.50 € | **57.00 €** | 7.3 % | **6.3 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 77.90 € | **77.50 €** | 6.2 % | **5.6 %** | 77.54 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN W AS | 78.90 € | **78.50 €** | 38.6 % | **37.9 %** | 78.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7344H | 109.90 € | **109.50 €** | 9.2 % | **8.8 %** | 109.90 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7345H | 146.90 € | **146.50 €** | 9.5 % | **9.2 %** | 146.90 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 119.90 € | **119.50 €** | 8.2 % | **7.9 %** | 119.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42102SV | 79.90 € | **79.50 €** | 7.7 % | **7.1 %** | 79.90 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC43SGMXC | 127.90 € | **127.50 €** | 13.8 % | **13.4 %** | 127.90 € | cena podľa najlacnejšieho iného predajcu |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 66.90 € | **66.50 €** | 5.6 % | **5.0 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.90 € | **21.50 €** | 11.7 % | **9.7 %** | 21.69 € | cena podľa najlacnejšieho iného predajcu |
| MAXXO VC 1800 | 24.90 € | **24.50 €** | 10.6 % | **8.8 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 61.90 € | **61.50 €** | 15.6 % | **14.8 %** | 61.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 356.90 € | **356.50 €** | 40.8 % | **40.7 %** | 356.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.90 € | **9.70 €** | 37.4 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.70 € | **9.50 €** | 36.7 % | **33.9 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.00 € | **19.90 €** | 44.9 % | **44.2 %** | 19.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.80 € | **9.70 €** | 36.0 % | **34.6 %** | 9.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 20.00 € | **19.90 €** | 35.1 % | **34.4 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| Skládací koloběžka NILS Extreme HM2009 šedá | 48.00 € | **47.90 €** | 9.6 % | **9.3 %** | 47.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.10 € | **1.00 €** | 44.2 % | **31.1 %** | 1.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 107.00 € | **106.90 €** | 27.4 % | **27.3 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO 221 SV | 120.00 € | **119.90 €** | 8.6 % | **8.5 %** | 120.00 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO9252I | 252.00 € | **251.90 €** | 7.5 % | **7.4 %** | 252.00 € | cena podľa najlacnejšieho iného predajcu |
